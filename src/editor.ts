// src/editor.ts

// ============================================================================
// EDITOR - Visual configuration editor component
// ============================================================================

import { LitElement, html, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, fireEvent } from "custom-card-helpers";

import { CARD_EDITOR_TYPE } from "./constants";
import { EDITOR_SCHEMA } from "./schema";
import { editorStyles } from "./styles";
import type { SensorDisplayCardConfig } from "./types";

@customElement(CARD_EDITOR_TYPE)
export class SensorDisplayCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SensorDisplayCardConfig;

  /**
   * Set the card configuration
   */
  public setConfig(config: SensorDisplayCardConfig): void {
    this._config = config;
  }

  /**
   * Compute label for form fields
   */
  private _computeLabel(schema: { label?: string; name?: string }): string {
    return schema.label || schema.name || "";
  }

  /**
   * Compute helper text for form fields
   */
  private _computeHelper(schema: { helper?: string }): string {
    return schema.helper || "";
  }

  /**
   * Handle value changes from the form
   */
  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value;
    fireEvent(this, "config-changed", { config });
  }

  /**
   * Render the editor form
   */
  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${EDITOR_SCHEMA}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  static styles = editorStyles;
}

// Type declaration for the custom element
declare global {
  interface HTMLElementTagNameMap {
    "sensor-display-card-editor": SensorDisplayCardEditor;
  }
}
