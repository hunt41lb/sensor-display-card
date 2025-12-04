// @/src/card.ts

// ============================================================================
// CARD - Main sensor display card component
// ============================================================================

import { LitElement, html, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, fireEvent } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";

import { CARD_TYPE, CARD_EDITOR_TYPE, DEFAULT_CONFIG } from "./constants";
import { cardStyles } from "./styles";
import {
  parseValue,
  isEntityActive,
  isDoorOpen,
  isWindowOpen,
  getLockIcon,
  getLockColorVar,
  getCardHeight,
  getCardWidth,
  getIconSizes,
  getStateText,
  getPositionStyles,
} from "./helpers";
import type { SensorDisplayCardConfig } from "./types";

@customElement(CARD_TYPE)
export class SensorDisplayCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SensorDisplayCardConfig;

  // For hold detection
  private _holdTimer?: number;
  private _isHolding = false;
  private _lastTap = 0;

  static styles = cardStyles;

  // ===========================================================================
  // Configuration
  // ===========================================================================

  public setConfig(config: SensorDisplayCardConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }

    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
    };
  }

  public getCardSize(): number {
    return 2;
  }

  public static getConfigElement(): HTMLElement {
    return document.createElement(CARD_EDITOR_TYPE);
  }

  public static getStubConfig(hass: HomeAssistant): Partial<SensorDisplayCardConfig> {
    // Find first light entity for demo
    const entities = Object.keys(hass.states);
    const lightEntity = entities.find((e) => e.startsWith("light."));
    const tempSensor = entities.find(
      (e) =>
        e.startsWith("sensor.") &&
        hass.states[e].attributes.device_class === "temperature"
    );
    const humiditySensor = entities.find(
      (e) =>
        e.startsWith("sensor.") &&
        hass.states[e].attributes.device_class === "humidity"
    );

    return {
      entity: lightEntity || "",
      name: "My Room",
      temp_sensor: tempSensor || "",
      humidity_sensor: humiditySensor || "",
    };
  }

  // ===========================================================================
  // Layout Support
  // ===========================================================================

  public getLayoutOptions() {
    const gridArea =
      this._config?.grid_area || this._config?.view_layout?.["grid-area"];
    if (gridArea) {
      return { grid_area: gridArea };
    }
    return {};
  }

  // ===========================================================================
  // Action Handling
  // ===========================================================================

  private _handleClick(ev: Event): void {
    ev.stopPropagation();

    if (this._isHolding) {
      this._isHolding = false;
      return;
    }

    // Double tap detection
    const now = Date.now();
    if (now - this._lastTap < 300) {
      this._handleAction("double_tap");
      this._lastTap = 0;
      return;
    }
    this._lastTap = now;

    // Delay single tap to wait for potential double tap
    setTimeout(() => {
      if (this._lastTap !== 0 && Date.now() - this._lastTap >= 300) {
        this._handleAction("tap");
        this._lastTap = 0;
      }
    }, 300);
  }

  private _handlePointerDown(ev: PointerEvent): void {
    ev.stopPropagation();
    this._holdTimer = window.setTimeout(() => {
      this._isHolding = true;
      this._handleAction("hold");
    }, 500);
  }

  private _handlePointerUp(ev: PointerEvent): void {
    ev.stopPropagation();
    if (this._holdTimer) {
      clearTimeout(this._holdTimer);
      this._holdTimer = undefined;
    }
  }

  private _handleAction(action: "tap" | "hold" | "double_tap"): void {
    if (!this.hass || !this._config) return;

    const actionConfig = this._config[`${action}_action`];
    if (!actionConfig || actionConfig.action === "none") return;

    const entity = this._config.entity;

    if (actionConfig.action === "toggle" && entity) {
      this.hass.callService("homeassistant", "toggle", {
        entity_id: entity,
      });
    } else if (actionConfig.action === "more-info" && entity) {
      fireEvent(this, "hass-more-info", { entityId: entity });
    } else if (actionConfig.action === "navigate" && actionConfig.navigation_path) {
      window.history.pushState(null, "", actionConfig.navigation_path);
      fireEvent(window, "location-changed", {
        replace: false,
      });
    } else if (actionConfig.action === "url" && actionConfig.url_path) {
      window.open(actionConfig.url_path);
    } else if (actionConfig.action === "call-service" && actionConfig.service) {
      const [domain, service] = actionConfig.service.split(".");
      this.hass.callService(domain, service, actionConfig.service_data || {});
    }
  }

  // ===========================================================================
  // Rendering
  // ===========================================================================

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    // Get entities from config
    const primaryEntity = this._config.entity
      ? this.hass.states[this._config.entity]
      : undefined;
    const tempEntity = this._config.temp_sensor
      ? this.hass.states[this._config.temp_sensor]
      : undefined;
    const humidityEntity = this._config.humidity_sensor
      ? this.hass.states[this._config.humidity_sensor]
      : undefined;
    const powerEntity = this._config.power_sensor
      ? this.hass.states[this._config.power_sensor]
      : undefined;

    // Binary sensors
    const motionEntity = this._config.motion_sensor
      ? this.hass.states[this._config.motion_sensor]
      : undefined;
    const petEntity = this._config.pet_sensor
      ? this.hass.states[this._config.pet_sensor]
      : undefined;
    const personEntity = this._config.person_sensor
      ? this.hass.states[this._config.person_sensor]
      : undefined;
    const vehicleEntity = this._config.vehicle_sensor
      ? this.hass.states[this._config.vehicle_sensor]
      : undefined;
    const doorEntity = this._config.door_sensor
      ? this.hass.states[this._config.door_sensor]
      : undefined;
    const windowEntity = this._config.window_sensor
      ? this.hass.states[this._config.window_sensor]
      : undefined;
    const lockEntity = this._config.lock_entity
      ? this.hass.states[this._config.lock_entity]
      : undefined;

    // Determine states using domain-aware helpers
    const isOn = isEntityActive(primaryEntity);

    // Binary sensor states
    const motionActive = motionEntity?.state === "on";
    const petActive = petEntity?.state === "on";
    const personActive = personEntity?.state === "on";
    const vehicleActive = vehicleEntity?.state === "on";
    const doorOpen = isDoorOpen(doorEntity);
    const windowOpen = isWindowOpen(windowEntity);

    // Lock state
    const lockIcon = getLockIcon(lockEntity);
    const lockColor = getLockColorVar(lockEntity);

    // RGB color (only applies to lights)
    const rgbColor = primaryEntity?.attributes?.rgb_color as [number, number, number] | undefined;

    // Card name
    const name =
      this._config.name ||
      primaryEntity?.attributes?.friendly_name ||
      this._config.entity ||
      "Sensor Card";

    // Icon
    const icon = this._config.icon || "mdi:lightbulb";

    // Appearance: Calculate sizes
    const cardHeight = getCardHeight(this._config.card_height);
    const cardWidth = getCardWidth(this._config.card_width);
    const { iconSize, containerSize } = getIconSizes(this._config.icon_size);

    // Position styles
    const positions = getPositionStyles(
      this._config.icon_position || "right",
      this._config.name_position || "left"
    );

    // Dynamic icon styles based on RGB color
    const iconBgStyle =
      rgbColor && isOn
        ? `background-color: rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.2)`
        : "";
    const iconColorStyle =
      rgbColor && isOn
        ? `color: rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`
        : "";

    // Build the card style with CSS custom properties
    const cardStyle = `
      --card-height: ${cardHeight};
      --card-width: ${cardWidth};
      --icon-size: ${iconSize};
      --icon-container-size: ${containerSize};
      --name-grid-area: ${positions.nameGridArea};
      --name-justify: ${positions.nameJustify};
      --name-text-align: ${positions.nameTextAlign};
      --icon-grid-area: ${positions.iconGridArea};
      --icon-justify: ${positions.iconJustify};
      --sensors-grid-area: ${positions.sensorsGridArea};
      --sensors-justify: ${positions.sensorsJustify};
      --sensors-padding: ${positions.sensorsPadding};
      --binary-sensors-grid-area: ${positions.binarySensorsGridArea};
      --binary-sensors-justify: ${positions.binarySensorsJustify};
      --binary-sensors-margin: ${positions.binarySensorsMargin};
    `
      .replace(/\s+/g, " ")
      .trim();

    // Show toggles (default to true for name/icon, false for state)
    const showName = this._config.show_name !== false;
    const showIcon = this._config.show_icon !== false;
    const showState = this._config.show_state === true;

    // State text using domain-aware helper
    const stateText = getStateText(primaryEntity);

    // Build card classes
    const cardClasses = isOn ? "state-on" : "state-off";

    return html`
      <ha-card
        class="${cardClasses}"
        style="${cardStyle}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @click=${this._handleClick}
      >
        <!-- Name -->
        ${showName
          ? html`<div class="name">
              ${name}${showState && stateText
                ? html` <span class="state-text">${stateText}</span>`
                : nothing}
            </div>`
          : html`<div class="name"></div>`}

        <!-- Icon Container -->
        ${showIcon
          ? html`
              <div class="icon-container" style="${iconBgStyle}">
                <ha-icon .icon=${icon} style="${iconColorStyle}"></ha-icon>
              </div>
            `
          : html`<div class="icon-container hidden"></div>`}

        <!-- Sensors (Temperature, Humidity, Power) -->
        <div class="sensors">
          ${this._renderSensor(tempEntity, "°", "mdi:thermometer")}
          ${this._renderSensor(humidityEntity, "%", "mdi:water-percent")}
          ${this._renderSensor(powerEntity, "W", "mdi:flash")}
          ${!tempEntity && !humidityEntity && !powerEntity
            ? html`<span class="placeholder"></span>`
            : nothing}
        </div>

        <!-- Binary Sensors & Lock -->
        <div class="binary-sensors">
          ${this._renderBinarySensor(motionActive, motionEntity, "motion")}
          ${this._renderBinarySensor(petActive, petEntity, "pet")}
          ${this._renderBinarySensor(personActive, personEntity, "person")}
          ${this._renderBinarySensor(vehicleActive, vehicleEntity, "vehicle")}
          ${this._renderBinarySensor(doorOpen, doorEntity, "door")}
          ${this._renderBinarySensor(windowOpen, windowEntity, "window")}
          ${lockEntity
            ? html`
                <ha-icon
                  class="lock-icon"
                  .icon=${lockIcon}
                  style="color: ${lockColor}"
                ></ha-icon>
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }

  // ===========================================================================
  // Render Helpers
  // ===========================================================================

  private _renderSensor(
    entity: HassEntity | undefined,
    unit: string,
    icon: string
  ): TemplateResult | typeof nothing {
    const value = parseValue(entity);
    if (value === undefined) return nothing;

    return html`
      <span class="sensor">
        <ha-icon .icon=${icon}></ha-icon>
        <span class="value">${Math.round(value)}</span>
        <span class="unit">${unit}</span>
      </span>
    `;
  }

  private _renderBinarySensor(
    isActive: boolean,
    entity: HassEntity | undefined,
    type: "motion" | "pet" | "person" | "vehicle" | "door" | "window"
  ): TemplateResult | typeof nothing {
    if (!entity) return nothing;

    const iconMap = {
      motion: { active: "mdi:motion-sensor", inactive: "mdi:motion-sensor-off" },
      person: { active: "mdi:account", inactive: "mdi:account-off" },
      pet: { active: "mdi:paw", inactive: "mdi:paw-off" },
      vehicle: { active: "mdi:car", inactive: "mdi:car-off" },
      door: { active: "mdi:door-open", inactive: "mdi:door-closed" },
      window: { active: "mdi:window-open", inactive: "mdi:window-closed" },
    };

    const icons = iconMap[type];
    const icon = isActive ? icons.active : icons.inactive;

    return html`
      <ha-icon
        class="binary-sensor ${isActive ? "active" : "inactive"}"
        .icon=${icon}
      ></ha-icon>
    `;
  }
}
