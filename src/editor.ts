import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, fireEvent } from "custom-card-helpers";
import type { SensorDisplayCardConfig } from "./types";

const SCHEMA = [
  {
    name: "name",
    label: "Card Name",
    selector: { text: {} },
  },
  {
    name: "icon",
    label: "Icon",
    selector: { icon: {} },
  },
  {
    name: "entity",
    label: "Light Entity",
    selector: { entity: { domain: "light" } },
  },
  {
    name: "temp_sensor",
    label: "Temperature Sensor",
    selector: { entity: { domain: "sensor" } },
  },
  {
    name: "humidity_sensor",
    label: "Humidity Sensor",
    selector: { entity: { domain: "sensor" } },
  },
  {
    name: "power_sensor",
    label: "Power Sensor",
    selector: { entity: { domain: "sensor" } },
  },
  {
    name: "motion_sensor",
    label: "Motion Sensor",
    selector: { entity: { domain: "binary_sensor" } },
  },
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

  static styles = css`
    ha-form {
      display: block;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "sensor-display-card-editor": SensorDisplayCardEditor;
  }
}
