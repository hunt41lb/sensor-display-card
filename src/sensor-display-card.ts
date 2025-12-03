import { LitElement, html, css, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, fireEvent, hasAction, ActionConfig } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";
import type { SensorDisplayCardConfig } from "./types";

// Card version for debugging
const CARD_VERSION = "1.8.0";

console.info(
  `%c SENSOR-DISPLAY-CARD %c v${CARD_VERSION} `,
  "color: white; background: #3498db; font-weight: bold;",
  "color: #3498db; background: white; font-weight: bold;"
);

// ============================================================================
// EDITOR COMPONENT
// ============================================================================
const SCHEMA = [
  { name: "name", label: "Card Name", selector: { text: {} } },
  { name: "icon", label: "Icon", selector: { icon: {} } },
  { name: "entity", label: "Entity", selector: { entity: {} } },
  { name: "temp_sensor", label: "Temperature Sensor", selector: { entity: { domain: "sensor" } } },
  { name: "humidity_sensor", label: "Humidity Sensor", selector: { entity: { domain: "sensor" } } },
  { name: "power_sensor", label: "Power Sensor", selector: { entity: { domain: "sensor" } } },
  { name: "motion_sensor", label: "Motion Sensor", selector: { entity: { domain: "binary_sensor" } } },
  { name: "pet_sensor", label: "Pet Sensor", selector: { entity: { domain: "binary_sensor" } } },
  { name: "person_sensor", label: "Person Sensor", selector: { entity: { domain: "binary_sensor" } } },
  { name: "vehicle_sensor", label: "Vehicle Sensor", selector: { entity: { domain: "binary_sensor" } } },
  { name: "door_sensor", label: "Door Sensor", selector: { entity: { domain: "binary_sensor" } } },
  { name: "grid_area", label: "Grid Area (for layout)", selector: { text: {} } },
  { name: "show_name", label: "Show Name", selector: { boolean: {} }, default: true },
  { name: "show_icon", label: "Show Icon", selector: { boolean: {} }, default: true },
  { name: "show_state", label: "Show State (On/Off)", selector: { boolean: {} }, default: false },
  { name: "tap_action", label: "Tap Action", selector: { "ui-action": {} } },
  { name: "hold_action", label: "Hold Action", selector: { "ui-action": {} } },
  { name: "double_tap_action", label: "Double Tap Action", selector: { "ui-action": {} } },
];

@customElement("sensor-display-card-editor")
export class SensorDisplayCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SensorDisplayCardConfig;

  public setConfig(config: SensorDisplayCardConfig): void {
    this._config = config;
  }

  private _computeLabel(schema: any): string {
    return schema.label || schema.name;
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value;
    fireEvent(this, "config-changed", { config });
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}

// ============================================================================
// MAIN CARD COMPONENT
// ============================================================================
@customElement("sensor-display-card")
export class SensorDisplayCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SensorDisplayCardConfig;

  public static getConfigElement(): HTMLElement {
    return document.createElement("sensor-display-card-editor");
  }

  public static getStubConfig(): Partial<SensorDisplayCardConfig> {
    return {
      type: "custom:sensor-display-card",
      name: "New Sensor Card",
      icon: "mdi:lightbulb",
    };
  }

  public setConfig(config: SensorDisplayCardConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }
    this._config = {
      icon: "mdi:lightbulb",
      show_name: true,
      show_icon: true,
      show_state: false,
      tap_action: { action: "toggle" },
      hold_action: { action: "more-info" },
      double_tap_action: { action: "more-info" },
      ...config,
    };

    // Apply grid-area to host element if configured
    if (this._config.grid_area) {
      this.style.gridArea = this._config.grid_area;
    }

    // Also support view_layout for layout-card compatibility
    if (this._config.view_layout?.["grid-area"]) {
      this.style.gridArea = this._config.view_layout["grid-area"];
    }
  }

  // This is used by layout-card to get the view_layout
  public getLayoutOptions() {
    if (this._config?.grid_area) {
      return {
        grid_area: this._config.grid_area,
      };
    }
    return {};
  }

  private _parseValue(value: string | undefined): string {
    if (!value || value === "unavailable" || value === "unknown") {
      return "--";
    }
    const num = parseFloat(value);
    return isNaN(num) ? "--" : num.toFixed(0);
  }

  /**
   * Determine if an entity is in an "active" state based on its domain
   */
  private _isEntityActive(entity: HassEntity | undefined): boolean {
    if (!entity) return false;

    const state = entity.state;
    const domain = entity.entity_id.split(".")[0];

    // Handle unavailable/unknown states
    if (state === "unavailable" || state === "unknown") return false;

    switch (domain) {
      case "light":
      case "switch":
      case "fan":
      case "input_boolean":
      case "automation":
      case "script":
      case "binary_sensor":
        return state === "on";

      case "cover":
        return state === "open" || state === "opening";

      case "lock":
        return state === "unlocked" || state === "unlocking";

      case "media_player":
        return state === "playing" || state === "paused" || state === "on" || state === "idle";

      case "climate":
        return state !== "off";

      case "vacuum":
        return state === "cleaning" || state === "returning";

      case "person":
      case "device_tracker":
        return state === "home";

      default:
        // For unknown domains, "on" is active
        return state === "on";
    }
  }

  /**
   * Check if door sensor is open (handles both 'on' and 'Window/door is open' states)
   */
  private _isDoorOpen(entity: HassEntity | undefined): boolean {
    if (!entity) return false;
    const state = entity.state;
    return state === "on" || state === "Window/door is open";
  }

  /**
   * Get display text for entity state
   */
  private _getStateText(entity: HassEntity | undefined): string {
    if (!entity) return "";

    const state = entity.state;
    const domain = entity.entity_id.split(".")[0];

    // Capitalize first letter for display
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    switch (domain) {
      case "cover":
        return capitalize(state); // Open, Closed, Opening, Closing
      case "lock":
        return capitalize(state); // Locked, Unlocked
      case "media_player":
        return capitalize(state); // Playing, Paused, Idle, Off
      case "climate":
        return capitalize(state); // Heat, Cool, Auto, Off
      case "vacuum":
        return capitalize(state); // Cleaning, Returning, Docked
      case "person":
      case "device_tracker":
        return capitalize(state); // Home, Away, etc.
      default:
        return this._isEntityActive(entity) ? "On" : "Off";
    }
  }

  // Action handling state
  private _holdTimeout?: ReturnType<typeof setTimeout>;
  private _dblClickTimeout?: ReturnType<typeof setTimeout>;
  private _held = false;

  private _handlePointerDown(): void {
    this._held = false;
    if (hasAction(this._config?.hold_action)) {
      this._holdTimeout = setTimeout(() => {
        this._held = true;
        this._executeAction("hold");
      }, 500);
    }
  }

  private _handlePointerUp(): void {
    if (this._holdTimeout) {
      clearTimeout(this._holdTimeout);
      this._holdTimeout = undefined;
    }
  }

  private _handleClick(): void {
    if (this._held) {
      this._held = false;
      return;
    }

    if (hasAction(this._config?.double_tap_action)) {
      if (this._dblClickTimeout) {
        clearTimeout(this._dblClickTimeout);
        this._dblClickTimeout = undefined;
        this._executeAction("double_tap");
      } else {
        this._dblClickTimeout = setTimeout(() => {
          this._dblClickTimeout = undefined;
          this._executeAction("tap");
        }, 250);
      }
    } else {
      this._executeAction("tap");
    }
  }

  /**
   * Execute the configured action
   */
  private _executeAction(actionType: "tap" | "hold" | "double_tap"): void {
    if (!this.hass || !this._config) return;

    const actionConfig = this._config[`${actionType}_action`] as ActionConfig | undefined;

    if (!actionConfig || actionConfig.action === "none") return;

    switch (actionConfig.action) {
      case "toggle":
        if (this._config.entity) {
          this.hass.callService("homeassistant", "toggle", {
            entity_id: this._config.entity,
          });
        }
        break;

      case "more-info":
        if (this._config.entity || actionConfig.entity) {
          const event = new CustomEvent("hass-more-info", {
            bubbles: true,
            composed: true,
            detail: { entityId: actionConfig.entity || this._config.entity },
          });
          this.dispatchEvent(event);
        }
        break;

      case "navigate":
        if (actionConfig.navigation_path) {
          history.pushState(null, "", actionConfig.navigation_path);
          const navEvent = new Event("location-changed", {
            bubbles: true,
            composed: true,
          });
          this.dispatchEvent(navEvent);
        }
        break;

      case "url":
        if (actionConfig.url_path) {
          window.open(actionConfig.url_path, "_blank");
        }
        break;

      case "call-service":
        if (actionConfig.service) {
          const [domain, service] = actionConfig.service.split(".");
          this.hass.callService(
            domain,
            service,
            actionConfig.service_data || {},
            actionConfig.target
          );
        }
        break;

      case "fire-dom-event":
        fireEvent(this, "ll-custom", actionConfig);
        break;
    }
  }

  protected updated(changedProps: Map<string, unknown>): void {
    super.updated(changedProps);

    // Ensure grid-area is applied when config changes
    if (this._config?.grid_area) {
      this.style.gridArea = this._config.grid_area;
    }
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    // Get entity states
    const primaryEntity: HassEntity | undefined = this._config.entity
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

    // Determine states using domain-aware helper
    const isOn = this._isEntityActive(primaryEntity);

    // Binary sensor states
    const motionActive = motionEntity?.state === "on";
    const petActive = petEntity?.state === "on";
    const personActive = personEntity?.state === "on";
    const vehicleActive = vehicleEntity?.state === "on";
    const doorOpen = this._isDoorOpen(doorEntity);

    // RGB color (only applies to lights)
    const rgbColor = primaryEntity?.attributes?.rgb_color as [number, number, number] | undefined;

    // Card name
    const name = this._config.name
      || primaryEntity?.attributes?.friendly_name
      || this._config.entity
      || "Sensor Card";

    // Icon
    const icon = this._config.icon || "mdi:lightbulb";

    // Dynamic styles for RGB (only for lights with rgb_color)
    const iconBgStyle = rgbColor && isOn
      ? `background-color: rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.2)`
      : "";
    const iconColorStyle = rgbColor && isOn
      ? `color: rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`
      : "";

    // Show toggles (default to true for name/icon, false for state)
    const showName = this._config.show_name !== false;
    const showIcon = this._config.show_icon !== false;
    const showState = this._config.show_state === true;

    // State text using domain-aware helper
    const stateText = this._getStateText(primaryEntity);

    return html`
      <ha-card
        class="${isOn ? "state-on" : "state-off"}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @click=${this._handleClick}
      >
        <!-- Name -->
        ${showName
          ? html`<div class="name">${name}${showState && stateText ? html` <span class="state-text">${stateText}</span>` : nothing}</div>`
          : html`<div class="name"></div>`}

        <!-- Icon Container (img_cell) -->
        ${showIcon
          ? html`
              <div class="icon-container" style="${iconBgStyle}">
                <ha-icon .icon=${icon} style="${iconColorStyle}"></ha-icon>
              </div>
            `
          : html`<div class="icon-container hidden"></div>`}

        <!-- Sensors (temp area) -->
        <div class="sensors">
          ${tempEntity
            ? html`<span class="temp">${this._parseValue(tempEntity.state)}°</span>`
            : nothing}
          ${humidityEntity
            ? html`<span class="humidity">${this._parseValue(humidityEntity.state)}%</span>`
            : nothing}
          ${powerEntity
            ? html`<span class="power">${this._parseValue(powerEntity.state)}W</span>`
            : nothing}
          ${!tempEntity && !humidityEntity && !powerEntity && !primaryEntity
            ? html`<span class="placeholder">Configure entities</span>`
            : nothing}
        </div>

        <!-- Binary Sensors Row -->
        <div class="binary-sensors">
          ${doorEntity
            ? html`<ha-icon
                class="binary-sensor ${doorOpen ? "active" : "inactive"}"
                icon="${doorOpen ? "mdi:door-open" : "mdi:door-closed"}"
              ></ha-icon>`
            : nothing}
          ${personEntity
            ? html`<ha-icon
                class="binary-sensor ${personActive ? "active" : "inactive"}"
                icon="${personActive ? "mdi:account" : "mdi:account-off"}"
              ></ha-icon>`
            : nothing}
          ${petEntity
            ? html`<ha-icon
                class="binary-sensor ${petActive ? "active" : "inactive"}"
                icon="${petActive ? "mdi:paw" : "mdi:paw-off"}"
              ></ha-icon>`
            : nothing}
          ${vehicleEntity
            ? html`<ha-icon
                class="binary-sensor ${vehicleActive ? "active" : "inactive"}"
                icon="${vehicleActive ? "mdi:car" : "mdi:car-off"}"
              ></ha-icon>`
            : nothing}
          ${motionEntity
            ? html`<ha-icon
                class="binary-sensor ${motionActive ? "active" : "inactive"}"
                icon="${motionActive ? "mdi:motion-sensor" : "mdi:motion-sensor-off"}"
              ></ha-icon>`
            : nothing}
        </div>
      </ha-card>
    `;
  }

  public getCardSize(): number {
    return 2;
  }

  static styles = css`
    :host {
      display: block;
    }

    /* Card - matches your button_card styles.card */
    ha-card {
      display: grid;
      grid-template-areas:
        "n n i i"
        "temp temp temp sensors";
      grid-template-rows: 1fr min-content;
      grid-template-columns: min-content 1fr;
      padding: 6px;
      height: 97px;
      box-sizing: border-box;
      cursor: pointer;
      transition: background-color 0.3s ease, border 0.3s ease;
    }

    ha-card.state-on {
      background-color: var(--card-background-color);
      border: 1px solid var(--primary-text-color);
    }

    ha-card.state-off {
      background-color: color-mix(in srgb, var(--card-background-color) 50%, transparent);
    }

    /* Name - matches your styles.name */
    .name {
      grid-area: n;
      justify-self: start;
      align-self: start;
      text-align: left;
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
      padding: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .name .state-text {
      font-weight: 400;
      opacity: 0.7;
      font-size: 14px;
    }

    /* Icon container - matches your styles.img_cell */
    .icon-container {
      grid-area: i;
      justify-self: end;
      align-self: start;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: 50px;
      height: 50px;
      background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.1));
      transition: background-color 1.2s ease;
    }

    .icon-container.hidden {
      visibility: hidden;
    }

    /* Icon - matches your styles.icon */
    .icon-container ha-icon {
      width: 35px;
      height: 35px;
      --mdc-icon-size: 35px;
      color: var(--primary-text-color);
      transition: color 0.3s ease;
    }

    /* Sensors container - matches your custom_fields.temp positioning */
    .sensors {
      grid-area: temp;
      justify-self: start;
      display: flex;
      align-items: baseline;
      gap: 8px;
      padding: 0 0 1px 14px;
    }

    /* Temperature - matches your custom_fields.temp styles */
    .temp {
      font-size: 16px;
      line-height: 16px;
      font-weight: 300;
      color: var(--primary-text-color);
    }

    /* Humidity and Power - matches your inline styles in custom_fields.temp */
    .humidity,
    .power {
      font-size: 12px;
      font-weight: 400;
      opacity: 0.7;
      color: var(--primary-text-color);
    }

    .placeholder {
      font-size: 12px;
      font-style: italic;
      color: var(--secondary-text-color);
    }

    /* Binary sensors row - replaces single motion sensor */
    .binary-sensors {
      grid-area: sensors;
      justify-self: end;
      align-self: end;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 0 1px 2px;
      margin: 0 3px 0 0;
    }

    .binary-sensors .binary-sensor {
      width: 21px;
      height: 21px;
      --mdc-icon-size: 21px;
      transition: color 0.3s ease, opacity 0.3s ease;
    }

    .binary-sensors .binary-sensor.active {
      color: var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107));
      animation: pulse 1.5s ease-in-out infinite;
    }

    .binary-sensors .binary-sensor.inactive {
      color: transparent;
      opacity: 0;
      width: 0;
      margin: 0;
      overflow: hidden;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .unavailable {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color);
      font-style: italic;
    }
  `;
}

// Register the card
window.customCards = window.customCards || [];
window.customCards.push({
  type: "sensor-display-card",
  name: "Sensor Display Card",
  description: "A card displaying RGB lights with temperature, humidity, power, and motion sensors",
  preview: true,
  documentationURL: "https://github.com/hunt41lb/sensor-display-card",
});
