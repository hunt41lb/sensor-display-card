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
        <div class="card-content">
          <!-- Row 1: Name and Icon -->
          <div class="top-row">
            <div class="name">${name}</div>
            <div class="icon-container" style="${iconBgStyle}">
              <ha-icon .icon=${icon} style="${iconColorStyle}"></ha-icon>
            </div>
          </div>
          
          <!-- Row 2: Sensors and Motion -->
          <div class="bottom-row">
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
            <div class="motion">
              ${motionActive 
                ? html`<ha-icon class="motion-active" icon="mdi:motion-sensor"></ha-icon>` 
                : nothing}
            </div>
          </div>
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

    ha-card {
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
      background-color: var(--ha-card-background, var(--card-background-color));
    }

    .card-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }

    .top-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .name {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
      padding: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
    }

    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--secondary-background-color, rgba(0,0,0,0.1));
      transition: background-color 0.3s ease;
    }

    .icon-container ha-icon {
      --mdc-icon-size: 35px;
      width: 35px;
      height: 35px;
      color: var(--primary-text-color);
      transition: color 0.3s ease;
    }

    .bottom-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 8px 4px 8px;
    }

    .sensors {
      display: flex;
      align-items: baseline;
      gap: 8px;
    }

    .temp {
      font-size: 18px;
      font-weight: 300;
      color: var(--primary-text-color);
    }

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

    .motion {
      display: flex;
      align-items: center;
    }

    .motion ha-icon {
      --mdc-icon-size: 21px;
      width: 21px;
      height: 21px;
    }

    .motion ha-icon.motion-active {
      color: var(--warning-color, #ffc107);
      animation: pulse 1.5s ease-in-out infinite;
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
