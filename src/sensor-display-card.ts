import { LitElement, html, TemplateResult, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { HomeAssistant, hasAction } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";

import { styles } from "./styles";
import { actionHandler } from "./action-handler-directive";
import type { SensorDisplayCardConfig, ActionHandlerDetail } from "./types";

// Import editor for side effects (registration)
import "./editor";

// Card version for debugging
const CARD_VERSION = "1.0.0";

console.info(
  `%c SENSOR-DISPLAY-CARD %c v${CARD_VERSION} `,
  "color: white; background: #3498db; font-weight: bold;",
  "color: #3498db; background: white; font-weight: bold;"
);

@customElement("sensor-display-card")
export class SensorDisplayCard extends LitElement {
  // Styles from external file
  static styles = styles;

  // Internal hass reference (not reactive)
  private _hass!: HomeAssistant;

  // Card configuration
  private _config!: SensorDisplayCardConfig;

  // Reactive state properties - only these trigger re-renders
  @state() private _lightEntity?: HassEntity;
  @state() private _tempValue?: string;
  @state() private _humidityValue?: string;
  @state() private _powerValue?: string;
  @state() private _motionActive = false;

  /**
   * Returns the editor element for the visual config UI
   */
  public static getConfigElement(): HTMLElement {
    return document.createElement("sensor-display-card-editor");
  }

  /**
   * Returns stub config for card picker preview
   */
  public static getStubConfig(): Partial<SensorDisplayCardConfig> {
    return {
      type: "custom:sensor-display-card",
      light_entity: "light.living_room",
      name: "Living Room",
      icon: "mdi:lightbulb",
    };
  }

  /**
   * Called once when card configuration is set or changed
   */
  public setConfig(config: SensorDisplayCardConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }

    if (!config.light_entity) {
      throw new Error("You must define a light_entity");
    }

    this._config = {
      tap_action: { action: "toggle" },
      hold_action: { action: "more-info" },
      double_tap_action: { action: "more-info" },
      icon: "mdi:lightbulb",
      ...config,
    };

    // Refresh state if hass is already available
    if (this._hass) {
      this._updateStates();
    }
  }

  /**
   * Hass setter - called on EVERY state change in HA
   * CRITICAL: Extract only relevant states to minimize re-renders
   */
  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this._updateStates();
  }

  /**
   * Extract relevant entity states into reactive properties
   */
  private _updateStates(): void {
    if (!this._hass || !this._config) return;

    // Light entity (required)
    const light = this._hass.states[this._config.light_entity];
    if (this._lightEntity !== light) {
      this._lightEntity = light;
    }

    // Temperature sensor (optional)
    if (this._config.temp_sensor) {
      const temp = this._hass.states[this._config.temp_sensor]?.state;
      if (this._tempValue !== temp) {
        this._tempValue = temp;
      }
    }

    // Humidity sensor (optional)
    if (this._config.humidity_sensor) {
      const humidity = this._hass.states[this._config.humidity_sensor]?.state;
      if (this._humidityValue !== humidity) {
        this._humidityValue = humidity;
      }
    }

    // Power sensor (optional)
    if (this._config.power_sensor) {
      const power = this._hass.states[this._config.power_sensor]?.state;
      if (this._powerValue !== power) {
        this._powerValue = power;
      }
    }

    // Motion sensor (optional)
    if (this._config.motion_sensor) {
      const motion = this._hass.states[this._config.motion_sensor]?.state === "on";
      if (this._motionActive !== motion) {
        this._motionActive = motion;
      }
    }
  }

  /**
   * Handle action events (tap, hold, double_tap)
   */
  private _handleAction(ev: CustomEvent<ActionHandlerDetail>): void {
    if (!this._hass || !this._config) return;

    const action = ev.detail.action;
    const actionConfig = this._config[`${action}_action`];

    if (!actionConfig) return;

    // Dispatch hass-action event for HA to handle
    const event = new Event("hass-action", { bubbles: true, composed: true });
    (event as any).detail = {
      config: {
        entity: this._config.light_entity,
        tap_action: this._config.tap_action,
        hold_action: this._config.hold_action,
        double_tap_action: this._config.double_tap_action,
      },
      action: action,
    };
    this.dispatchEvent(event);
  }

  /**
   * Render the card
   */
  protected render(): TemplateResult {
    if (!this._config || !this._hass) {
      return html`<ha-card><div class="unavailable">Loading...</div></ha-card>`;
    }

    if (!this._lightEntity) {
      return html`
        <ha-card>
          <div class="unavailable">Entity not found: ${this._config.light_entity}</div>
        </ha-card>
      `;
    }

    const isOn = this._lightEntity.state === "on";
    const rgbColor = this._lightEntity.attributes.rgb_color as [number, number, number] | undefined;

    // Dynamic styles based on RGB color
    const iconContainerStyle = rgbColor && isOn ? `background-color: rgba(${rgbColor.join(",")}, 0.2);` : "";

    const iconStyle = rgbColor && isOn ? `color: rgb(${rgbColor.join(",")});` : "";

    // Card name: config name > friendly_name > entity_id
    const name = this._config.name || this._lightEntity.attributes.friendly_name || this._config.light_entity;

    // Icon: config icon or default
    const icon = this._config.icon || "mdi:lightbulb";

    return html`
      <ha-card
        class="state-${isOn ? "on" : "off"}"
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
          hasHold: hasAction(this._config.hold_action),
          hasDoubleClick: hasAction(this._config.double_tap_action),
        })}
      >
        <!-- Card Name -->
        <div class="name">${name}</div>

        <!-- Icon Container -->
        <div class="icon-container ${rgbColor && isOn ? "has-color" : ""}" style="${iconContainerStyle}">
          <ha-icon .icon=${icon} style="${iconStyle}"></ha-icon>
        </div>

        <!-- Sensor Values -->
        <div class="sensors">
          ${this._tempValue !== undefined
            ? html`<span class="sensor-temp">${parseFloat(this._tempValue).toFixed(0)}°</span>`
            : nothing}
          ${this._humidityValue !== undefined
            ? html`<span class="sensor-humidity">${parseFloat(this._humidityValue).toFixed(0)}%</span>`
            : nothing}
          ${this._powerValue !== undefined
            ? html`<span class="sensor-power">${parseFloat(this._powerValue).toFixed(0)}W</span>`
            : nothing}
        </div>

        <!-- Motion Sensor -->
        ${this._config.motion_sensor
          ? html`
              <div class="motion">
                ${this._motionActive
                  ? html`<ha-icon class="motion-active" icon="mdi:motion-sensor"></ha-icon>`
                  : nothing}
              </div>
            `
          : nothing}
      </ha-card>
    `;
  }

  /**
   * Returns the card size for grid layout
   */
  public getCardSize(): number {
    return 2;
  }

  /**
   * Returns grid layout options
   */
  public getGridOptions() {
    return {
      rows: 2,
      columns: 6,
      min_rows: 2,
      min_columns: 3,
    };
  }

  /**
   * Returns layout options for section views
   */
  public getLayoutOptions() {
    return {
      grid_rows: 2,
      grid_columns: 2,
      grid_min_rows: 2,
      grid_min_columns: 2,
    };
  }
}

// Register the card with Home Assistant's card picker
window.customCards = window.customCards || [];
window.customCards.push({
  type: "sensor-display-card",
  name: "Sensor Display Card",
  description: "A card displaying RGB lights with temperature, humidity, power, and motion sensors",
  preview: true,
  documentationURL: "https://github.com/YOURUSERNAME/sensor-display-card",
});

declare global {
  interface HTMLElementTagNameMap {
    "sensor-display-card": SensorDisplayCard;
  }
}
