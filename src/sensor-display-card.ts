import { LitElement, html, css, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, fireEvent } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";
import type { SensorDisplayCardConfig } from "./types";

// Card version for debugging
const CARD_VERSION = "1.2.0";

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
  { name: "entity", label: "Light Entity", selector: { entity: { domain: "light" } } },
  { name: "temp_sensor", label: "Temperature Sensor", selector: { entity: { domain: "sensor" } } },
  { name: "humidity_sensor", label: "Humidity Sensor", selector: { entity: { domain: "sensor" } } },
  { name: "power_sensor", label: "Power Sensor", selector: { entity: { domain: "sensor" } } },
  { name: "motion_sensor", label: "Motion Sensor", selector: { entity: { domain: "binary_sensor" } } },
  { name: "grid_area", label: "Grid Area (for layout)", selector: { text: {} } },
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

  private _handleClick(): void {
    if (!this.hass || !this._config?.entity) return;
    
    const entityId = this._config.entity;
    this.hass.callService("light", "toggle", { entity_id: entityId });
  }

  private _handleMoreInfo(): void {
    if (!this._config?.entity) return;
    
    const event = new CustomEvent("hass-more-info", {
      bubbles: true,
      composed: true,
      detail: { entityId: this._config.entity },
    });
    this.dispatchEvent(event);
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
    const lightEntity: HassEntity | undefined = this._config.entity 
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
    const motionEntity = this._config.motion_sensor 
      ? this.hass.states[this._config.motion_sensor] 
      : undefined;

    // Determine states
    const isOn = lightEntity?.state === "on";
    const rgbColor = lightEntity?.attributes?.rgb_color as [number, number, number] | undefined;
    const motionActive = motionEntity?.state === "on";

    // Card name
    const name = this._config.name 
      || lightEntity?.attributes?.friendly_name 
      || this._config.entity 
      || "Sensor Card";

    // Icon
    const icon = this._config.icon || "mdi:lightbulb";

    // Dynamic styles for RGB
    const iconBgStyle = rgbColor && isOn 
      ? `background-color: rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.2)` 
      : "";
    const iconColorStyle = rgbColor && isOn 
      ? `color: rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})` 
      : "";

    return html`
      <ha-card 
        class="${isOn ? "state-on" : "state-off"}"
        @click=${this._handleClick}
        @dblclick=${this._handleMoreInfo}
      >
        <!-- Name -->
        <div class="name">${name}</div>

        <!-- Icon Container (img_cell) -->
        <div class="icon-container" style="${iconBgStyle}">
          <ha-icon .icon=${icon} style="${iconColorStyle}"></ha-icon>
        </div>

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
          ${!tempEntity && !humidityEntity && !powerEntity && !lightEntity
            ? html`<span class="placeholder">Configure entities</span>`
            : nothing}
        </div>

        <!-- Motion Sensor -->
        <div class="motion">
          ${motionActive 
            ? html`<ha-icon class="motion-active" icon="mdi:motion-sensor"></ha-icon>` 
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
        "temp temp temp motion_sensor";
      grid-template-rows: 1fr min-content;
      grid-template-columns: min-content 1fr;
      padding: 6px;
      height: 97px;
      box-sizing: border-box;
      cursor: pointer;
      transition: background-color 0.3s ease, border 0.3s ease;
    }

    ha-card.state-on {
      background-color: var(--ha-card-background, var(--card-background-color));
      border: 1px solid var(--primary-text-color);
    }

    ha-card.state-off {
      background-color: var(--ha-card-background-inactive, var(--ha-card-background));
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
      background-color: var(--inactive-img-cell, rgba(0, 0, 0, 0.1));
      transition: background-color 0.3s ease;
    }

    /* Icon - matches your styles.icon */
    .icon-container ha-icon {
      width: 35px;
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
      font-size: 30px;
      line-height: 30px;
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

    /* Motion sensor - matches your custom_fields.motion_sensor */
    .motion {
      grid-area: motion_sensor;
      justify-self: end;
      align-self: end;
      display: flex;
      align-items: center;
      padding: 0 0 1px 2px;
      margin: 0 3px 0 0;
    }

    .motion ha-icon {
      width: 21px;
      height: 21px;
      --mdc-icon-size: 21px;
      transition: color 0.3s ease;
    }

    .motion ha-icon.motion-active {
      color: var(--warning-color, var(--warning, #ffc107));
      animation: pulse 1.5s ease-in-out infinite;
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

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
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
