// src/card.ts

// ============================================================================
// CARD - Main sensor display card component
// ============================================================================

import { LitElement, html, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, hasAction, ActionConfig, fireEvent } from "custom-card-helpers";
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
  getIconColor,
  getIconBackgroundColor,
  getEffectiveLayout,
} from "./helpers";
import type { SensorDisplayCardConfig, LayoutMode } from "./types";

@customElement(CARD_TYPE)
export class SensorDisplayCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: SensorDisplayCardConfig;

  // Action handling state
  private _holdTimeout?: ReturnType<typeof setTimeout>;
  private _dblClickTimeout?: ReturnType<typeof setTimeout>;
  private _held = false;

  /**
   * Get the config element (editor) for this card
   */
  public static getConfigElement(): HTMLElement {
    return document.createElement(CARD_EDITOR_TYPE);
  }

  /**
   * Get stub config for new card instances
   */
  public static getStubConfig(): Partial<SensorDisplayCardConfig> {
    return {
      type: `custom:${CARD_TYPE}`,
      name: "New Sensor Card",
      icon: "mdi:lightbulb",
      layout: "full",
    };
  }

  /**
   * Set the card configuration
   */
  public setConfig(config: SensorDisplayCardConfig): void {
    if (!config) {
      throw new Error("Invalid configuration");
    }
    this._config = {
      ...DEFAULT_CONFIG,
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

  /**
   * Get layout options for layout-card compatibility
   */
  public getLayoutOptions() {
    if (this._config?.grid_area) {
      return {
        grid_area: this._config.grid_area,
      };
    }
    return {};
  }

  /**
   * Get the card size for layout purposes
   */
  public getCardSize(): number {
    const layout = getEffectiveLayout(this._config);
    switch (layout) {
      case "icon-only":
        return 1;
      case "compact":
        return 1;
      case "full":
      default:
        return 2;
    }
  }

  /**
   * Handle pointer down for hold detection
   */
  private _handlePointerDown(): void {
    this._held = false;
    if (hasAction(this._config?.hold_action)) {
      this._holdTimeout = setTimeout(() => {
        this._held = true;
        this._executeAction("hold");
      }, 500);
    }
  }

  /**
   * Handle pointer up to cancel hold
   */
  private _handlePointerUp(): void {
    if (this._holdTimeout) {
      clearTimeout(this._holdTimeout);
      this._holdTimeout = undefined;
    }
  }

  /**
   * Handle click for tap and double-tap detection
   */
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

  /**
   * Handle updates to ensure grid-area is applied
   */
  protected updated(changedProps: Map<string, unknown>): void {
    super.updated(changedProps);

    // Ensure grid-area is applied when config changes
    if (this._config?.grid_area) {
      this.style.gridArea = this._config.grid_area;
    }
  }

  /**
   * Render the card
   */
  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    // Determine effective layout mode
    const layout: LayoutMode = getEffectiveLayout(this._config);

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

    // Appearance: Calculate sizes based on layout
    const cardHeight = getCardHeight(this._config.card_height, layout);
    const cardWidth = getCardWidth(this._config.card_width);
    const { iconSize, containerSize } = getIconSizes(this._config.icon_size, layout);

    // Dynamic icon styles using helper functions
    const iconColorStyle = getIconColor(this._config, primaryEntity, motionEntity, rgbColor, isOn);
    const iconBackgroundStyle = getIconBackgroundColor(this._config, rgbColor, isOn);

    // Build the card style with CSS custom properties
    const cardStyle = `
      --card-height: ${cardHeight};
      --card-width: ${cardWidth};
      --icon-size: ${iconSize};
      --icon-container-size: ${containerSize};
    `
      .replace(/\s+/g, " ")
      .trim();

    // Show toggles (default to true for name/icon, false for state)
    // In icon-only layout, these are overridden by CSS
    const showName = this._config.show_name !== false;
    const showIcon = this._config.show_icon !== false;
    const showState = this._config.show_state === true;
    const showIconBackground = this._config.show_icon_background !== false;

    // State text using domain-aware helper
    const stateText = getStateText(primaryEntity);

    // Determine card classes
    const cardClasses = [
      isOn ? "state-on" : "state-off",
      `layout-${layout}`,
    ].join(" ");

    return html`
      <ha-card
        class="${cardClasses}"
        style="${cardStyle}"
        @pointerdown=${this._handlePointerDown}
        @pointerup=${this._handlePointerUp}
        @pointercancel=${this._handlePointerUp}
        @click=${this._handleClick}
      >
        <!-- Name (hidden in icon-only layout via CSS) -->
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
              <div
                class="icon-container${showIconBackground ? "" : " no-background"}"
                style="${showIconBackground && iconBackgroundStyle ? `background-color: ${iconBackgroundStyle}` : ""}"
              >
                <ha-icon
                  .icon=${icon}
                  style="${iconColorStyle ? `color: ${iconColorStyle}` : ""}"
                ></ha-icon>
              </div>
            `
          : html`<div class="icon-container hidden"></div>`}

        <!-- Value Sensors (hidden in icon-only and compact layouts via CSS) -->
        <div class="sensors">
          ${tempEntity
            ? html`<span class="temp">${parseValue(tempEntity.state)}°</span>`
            : nothing}
          ${humidityEntity
            ? html`<span class="humidity">${parseValue(humidityEntity.state)}%</span>`
            : nothing}
          ${powerEntity
            ? html`<span class="power">${parseValue(powerEntity.state)}W</span>`
            : nothing}
          ${!tempEntity && !humidityEntity && !powerEntity && !primaryEntity && layout === "full"
            ? html`<span class="placeholder">Configure entities</span>`
            : nothing}
        </div>

        <!-- Binary Sensors Row (hidden in icon-only and compact layouts via CSS) -->
        <div class="binary-sensors">
          ${lockEntity
            ? html`<ha-icon
                class="lock-icon"
                icon="${lockIcon}"
                style="color: ${lockColor};"
              ></ha-icon>`
            : nothing}
          ${doorEntity
            ? html`<ha-icon
                class="binary-sensor ${doorOpen ? "active" : "inactive"}"
                icon="${doorOpen ? "mdi:door-open" : "mdi:door-closed"}"
              ></ha-icon>`
            : nothing}
          ${windowEntity
            ? html`<ha-icon
                class="binary-sensor ${windowOpen ? "active" : "inactive"}"
                icon="${windowOpen ? "mdi:window-open" : "mdi:window-closed"}"
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
          ${motionEntity && layout === "full"
            ? html`<ha-icon
                class="binary-sensor ${motionActive ? "active" : "inactive"}"
                icon="${motionActive ? "mdi:motion-sensor" : "mdi:motion-sensor-off"}"
              ></ha-icon>`
            : nothing}
        </div>
      </ha-card>
    `;
  }

  static styles = cardStyles;
}

// Type declaration for the custom element
declare global {
  interface HTMLElementTagNameMap {
    "sensor-display-card": SensorDisplayCard;
  }
}
