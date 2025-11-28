import { LitElement, html, css, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import type { SensorDisplayCardConfig } from "./types";

@customElement("sensor-display-card-editor")
export class SensorDisplayCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SensorDisplayCardConfig;

  public setConfig(config: SensorDisplayCardConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;

    const target = ev.target as any;
    const configKey = target.configValue as keyof SensorDisplayCardConfig;
    const value = ev.detail?.value ?? target.value;

    if (this._config[configKey] === value) return;

    const newConfig = {
      ...this._config,
      [configKey]: value === "" ? undefined : value,
    };

    // Remove undefined values
    Object.keys(newConfig).forEach((key) => {
      if (newConfig[key as keyof SensorDisplayCardConfig] === undefined) {
        delete newConfig[key as keyof SensorDisplayCardConfig];
      }
    });

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: newConfig },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html`${nothing}`;
    }

    return html`
      <div class="card-config">
        <div class="section">
          <h3>Basic Configuration</h3>

          <ha-textfield
            label="Name (optional)"
            .value=${this._config.name || ""}
            .configValue=${"name"}
            @input=${this._valueChanged}
          ></ha-textfield>

          <ha-icon-picker
            label="Icon (optional)"
            .value=${this._config.icon || ""}
            .configValue=${"icon"}
            @value-changed=${this._valueChanged}
          ></ha-icon-picker>
        </div>

        <div class="section">
          <h3>Entity Configuration</h3>

          <ha-entity-picker
            label="Light Entity (required)"
            .hass=${this.hass}
            .value=${this._config.light_entity || ""}
            .configValue=${"light_entity"}
            @value-changed=${this._valueChanged}
            .includeDomains=${["light"]}
            allow-custom-entity
            required
          ></ha-entity-picker>

          <ha-entity-picker
            label="Temperature Sensor (optional)"
            .hass=${this.hass}
            .value=${this._config.temp_sensor || ""}
            .configValue=${"temp_sensor"}
            @value-changed=${this._valueChanged}
            .includeDomains=${["sensor"]}
            .includeDeviceClasses=${["temperature"]}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-entity-picker
            label="Humidity Sensor (optional)"
            .hass=${this.hass}
            .value=${this._config.humidity_sensor || ""}
            .configValue=${"humidity_sensor"}
            @value-changed=${this._valueChanged}
            .includeDomains=${["sensor"]}
            .includeDeviceClasses=${["humidity"]}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-entity-picker
            label="Power Sensor (optional)"
            .hass=${this.hass}
            .value=${this._config.power_sensor || ""}
            .configValue=${"power_sensor"}
            @value-changed=${this._valueChanged}
            .includeDomains=${["sensor"]}
            .includeDeviceClasses=${["power"]}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-entity-picker
            label="Motion Sensor (optional)"
            .hass=${this.hass}
            .value=${this._config.motion_sensor || ""}
            .configValue=${"motion_sensor"}
            @value-changed=${this._valueChanged}
            .includeDomains=${["binary_sensor"]}
            .includeDeviceClasses=${["motion", "occupancy"]}
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="section">
          <h3>Layout</h3>

          <ha-textfield
            label="Grid Area (optional, for view layouts)"
            .value=${this._config.grid_area || ""}
            .configValue=${"grid_area"}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>
      </div>
    `;
  }

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .section h3 {
      margin: 0 0 8px 0;
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 4px;
    }

    ha-textfield,
    ha-entity-picker,
    ha-icon-picker {
      display: block;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "sensor-display-card-editor": SensorDisplayCardEditor;
  }
}
