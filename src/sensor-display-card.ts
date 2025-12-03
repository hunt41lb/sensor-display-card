import { LitElement, html, css, TemplateResult, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, fireEvent, hasAction, ActionConfig } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";
import type { SensorDisplayCardConfig } from "./types";

// Card version for debugging
const CARD_VERSION = "2.2.0";

console.info(
  `%c SENSOR-DISPLAY-CARD %c v${CARD_VERSION} `,
  "color: white; background: #3498db; font-weight: bold;",
  "color: #3498db; background: white; font-weight: bold;"
);

// ============================================================================
// EDITOR COMPONENT
// ============================================================================
const SCHEMA = [
  // -------------------------------------------------------------------------
  // Basic Settings - Always visible at top
  // -------------------------------------------------------------------------
  {
    name: "name",
    label: "Card Name",
    helper: "Display name shown on the card (optional - uses entity name if blank)",
    selector: { text: {} },
  },
  {
    name: "icon",
    label: "Icon",
    helper: "Main icon displayed in the card",
    selector: { icon: {} },
  },
  {
    name: "entity",
    label: "Primary Entity",
    helper: "Main entity for card state (light, switch, etc.)",
    selector: { entity: {} },
  },

  // -------------------------------------------------------------------------
  // Value Sensors - Collapsible
  // -------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Value Sensors",
    icon: "mdi:thermometer",
    schema: [
      {
        name: "temp_sensor",
        label: "Temperature",
        helper: "Displays temperature value with ° symbol",
        selector: { entity: { domain: "sensor", device_class: "temperature" } },
      },
      {
        name: "humidity_sensor",
        label: "Humidity",
        helper: "Displays humidity value with % symbol",
        selector: { entity: { domain: "sensor", device_class: "humidity" } },
      },
      {
        name: "power_sensor",
        label: "Power",
        helper: "Displays power consumption with W symbol",
        selector: { entity: { domain: "sensor", device_class: "power" } },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Binary Sensors - Collapsible
  // -------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Binary Sensors",
    icon: "mdi:motion-sensor",
    schema: [
      {
        name: "motion_sensor",
        label: "Motion Sensor",
        helper: "Shows motion-sensor icon when motion detected",
        selector: { entity: { domain: "binary_sensor", device_class: "motion" } },
      },
      {
        name: "person_sensor",
        label: "Person Sensor",
        helper: "Shows person icon when person detected",
        selector: { entity: { domain: "binary_sensor", device_class: "occupancy" } },
      },
      {
        name: "pet_sensor",
        label: "Pet Sensor",
        helper: "Shows paw icon when pet detected",
        selector: { entity: { domain: "binary_sensor" } },
      },
      {
        name: "vehicle_sensor",
        label: "Vehicle Sensor",
        helper: "Shows car icon when vehicle detected",
        selector: { entity: { domain: "binary_sensor" } },
      },
      {
        name: "door_sensor",
        label: "Door Sensor",
        helper: "Shows door-open icon when door is open",
        selector: { entity: { domain: "binary_sensor", device_class: "door" } },
      },
      {
        name: "window_sensor",
        label: "Window Sensor",
        helper: "Shows window-open icon when window is open",
        selector: { entity: { domain: "binary_sensor", device_class: "window" } },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Lock Entity - Collapsible
  // -------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Lock",
    icon: "mdi:shield-lock",
    schema: [
      {
        name: "lock_entity",
        label: "Lock / Deadbolt",
        helper: "Shows lock status with shield icon (always visible when configured)",
        selector: { entity: { domain: "lock" } },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Display Options - Collapsible
  // -------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Display Options",
    icon: "mdi:eye-settings",
    schema: [
      {
        name: "show_name",
        label: "Show Name",
        helper: "Display card name in top left",
        selector: { boolean: {} },
        default: true,
      },
      {
        name: "show_icon",
        label: "Show Icon",
        helper: "Display main icon in top right",
        selector: { boolean: {} },
        default: true,
      },
      {
        name: "show_state",
        label: "Show State Text",
        helper: "Display On/Off state next to name",
        selector: { boolean: {} },
        default: false,
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Actions - Collapsible
  // -------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Actions",
    icon: "mdi:gesture-tap",
    schema: [
      {
        name: "tap_action",
        label: "Tap Action",
        helper: "Action when card is tapped",
        selector: { "ui-action": {} },
      },
      {
        name: "hold_action",
        label: "Hold Action",
        helper: "Action when card is held",
        selector: { "ui-action": {} },
      },
      {
        name: "double_tap_action",
        label: "Double Tap Action",
        helper: "Action when card is double-tapped",
        selector: { "ui-action": {} },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Appearance - Collapsible
  // -------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Appearance",
    icon: "mdi:palette",
    schema: [
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "card_height",
            label: "Card Height",
            helper: "Height of the card",
            selector: {
              select: {
                options: [
                  { value: "compact", label: "Compact (75px)" },
                  { value: "default", label: "Default (97px)" },
                  { value: "tall", label: "Tall (120px)" },
                ],
                mode: "dropdown",
                custom_value: true,
              },
            },
          },
          {
            name: "card_width",
            label: "Card Width",
            helper: "Width of the card",
            selector: {
              select: {
                options: [
                  { value: "auto", label: "Auto (fill container)" },
                  { value: "full", label: "Full width" },
                ],
                mode: "dropdown",
                custom_value: true,
              },
            },
          },
        ],
      },
      {
        name: "icon_size",
        label: "Icon Size",
        helper: "Size of the main icon",
        selector: {
          select: {
            options: [
              { value: "small", label: "Small (25px)" },
              { value: "default", label: "Default (35px)" },
              { value: "large", label: "Large (45px)" },
            ],
            mode: "dropdown",
          },
        },
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Colors - Collapsible
  // -------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Colors",
    icon: "mdi:format-color-fill",
    schema: [
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "icon_color",
            label: "Icon Color",
            helper: "Default: var(--primary-text-color)",
            selector: { ui_color: { default_color: "" } },
          },
          {
            name: "icon_color_active",
            label: "Icon Color (Active)",
            helper: "Default: Uses light RGB or theme color",
            selector: { ui_color: { default_color: "" } },
          },
        ],
      },
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "icon_background_color",
            label: "Icon Background",
            helper: "Default: var(--secondary-background-color)",
            selector: { ui_color: { default_color: "" } },
          },
          {
            name: "icon_background_color_active",
            label: "Icon Background (Active)",
            helper: "Default: Uses light RGB with opacity",
            selector: { ui_color: { default_color: "" } },
          },
        ],
      },
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "name_color",
            label: "Name Color",
            helper: "Default: var(--primary-text-color)",
            selector: { ui_color: { default_color: "" } },
          },
          {
            name: "sensor_text_color",
            label: "Sensor Text Color",
            helper: "Default: var(--primary-text-color)",
            selector: { ui_color: { default_color: "" } },
          },
        ],
      },
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "active_sensor_color",
            label: "Active Sensor Icon Color",
            helper: "Default: var(--state-binary_sensor-active-color)",
            selector: { ui_color: { default_color: "" } },
          },
          {
            name: "card_border_color",
            label: "Card Border Color (Active)",
            helper: "Default: var(--primary-text-color)",
            selector: { ui_color: { default_color: "" } },
          },
        ],
      },
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "card_background_color",
            label: "Card Background",
            helper: "Default: var(--card-background-color)",
            selector: { ui_color: { default_color: "" } },
          },
          {
            name: "card_background_color_active",
            label: "Card Background (Active)",
            helper: "Default: var(--card-background-color)",
            selector: { ui_color: { default_color: "" } },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Advanced - Collapsible
  // -------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Advanced",
    icon: "mdi:cog",
    schema: [
      {
        name: "grid_area",
        label: "Grid Area",
        helper: "CSS grid-area for layout positioning (e.g., 'living-room')",
        selector: { text: {} },
      },
    ],
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

  private _computeHelper(schema: any): string {
    return schema.helper || "";
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
        .computeHelper=${this._computeHelper}
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
   * Check if window sensor is open (handles both 'on' and 'Window/door is open' states)
   */
  private _isWindowOpen(entity: HassEntity | undefined): boolean {
    if (!entity) return false;
    const state = entity.state;
    return state === "on" || state === "Window/door is open";
  }

  /**
   * Get lock icon based on state
   */
  private _getLockIcon(entity: HassEntity | undefined): string {
    if (!entity) return "mdi:shield-lock";
    const state = entity.state;

    switch (state) {
      case "locked":
      case "locking":
        return "mdi:shield-lock";
      case "unlocked":
      case "unlocking":
      case "open":
      case "opening":
        return "mdi:shield-lock-open";
      case "jammed":
      case "unavailable":
      case "unknown":
      default:
        return "mdi:shield-alert";
    }
  }

  /**
   * Get lock color CSS variable based on state
   */
  private _getLockColorVar(entity: HassEntity | undefined): string {
    if (!entity) return "var(--state-lock-locked-color, var(--primary-text-color))";
    const state = entity.state;

    switch (state) {
      case "locked":
        return "var(--state-lock-locked-color, var(--success-color, #4caf50))";
      case "locking":
        return "var(--state-lock-locking-color, var(--info-color, #2196f3))";
      case "unlocked":
        return "var(--state-lock-unlocked-color, var(--warning-color, #ff9800))";
      case "unlocking":
        return "var(--state-lock-unlocking-color, var(--info-color, #2196f3))";
      case "open":
        return "var(--state-lock-open-color, var(--warning-color, #ff9800))";
      case "opening":
        return "var(--state-lock-opening-color, var(--info-color, #2196f3))";
      case "jammed":
        return "var(--state-lock-jammed-color, var(--error-color, #f44336))";
      case "unavailable":
      case "unknown":
      default:
        return "var(--error-color, #f44336)";
    }
  }

  /**
   * Get card height based on config
   */
  private _getCardHeight(): string {
    const height = this._config?.card_height;

    if (!height || height === "default") return "97px";
    if (height === "compact") return "75px";
    if (height === "tall") return "120px";

    // Custom value - if it's a number, add px
    if (typeof height === "number") return `${height}px`;

    // If it's a string with a number, add px if needed
    if (typeof height === "string") {
      const numValue = parseFloat(height);
      if (!isNaN(numValue) && height === String(numValue)) {
        return `${numValue}px`;
      }
      return height; // Return as-is if it already has units
    }

    return "97px";
  }

  /**
   * Get card width based on config
   */
  private _getCardWidth(): string {
    const width = this._config?.card_width;

    if (!width || width === "auto") return "auto";
    if (width === "full") return "100%";

    // Custom value - if it's a number, add px
    if (typeof width === "number") return `${width}px`;

    // If it's a string with a number, add px if needed
    if (typeof width === "string") {
      const numValue = parseFloat(width);
      if (!isNaN(numValue) && width === String(numValue)) {
        return `${numValue}px`;
      }
      return width; // Return as-is if it already has units
    }

    return "auto";
  }

  /**
   * Get icon and container sizes based on config
   */
  private _getIconSizes(): { iconSize: string; containerSize: string } {
    const size = this._config?.icon_size;

    switch (size) {
      case "small":
        return { iconSize: "25px", containerSize: "40px" };
      case "large":
        return { iconSize: "45px", containerSize: "60px" };
      case "default":
      default:
        return { iconSize: "35px", containerSize: "50px" };
    }
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
    const windowEntity = this._config.window_sensor
      ? this.hass.states[this._config.window_sensor]
      : undefined;
    const lockEntity = this._config.lock_entity
      ? this.hass.states[this._config.lock_entity]
      : undefined;

    // Determine states using domain-aware helper
    const isOn = this._isEntityActive(primaryEntity);

    // Binary sensor states
    const motionActive = motionEntity?.state === "on";
    const petActive = petEntity?.state === "on";
    const personActive = personEntity?.state === "on";
    const vehicleActive = vehicleEntity?.state === "on";
    const doorOpen = this._isDoorOpen(doorEntity);
    const windowOpen = this._isWindowOpen(windowEntity);

    // Lock state
    const lockIcon = this._getLockIcon(lockEntity);
    const lockColor = this._getLockColorVar(lockEntity);

    // RGB color (only applies to lights)
    const rgbColor = primaryEntity?.attributes?.rgb_color as [number, number, number] | undefined;

    // Card name
    const name = this._config.name
      || primaryEntity?.attributes?.friendly_name
      || this._config.entity
      || "Sensor Card";

    // Icon
    const icon = this._config.icon || "mdi:lightbulb";

    // =========================================================================
    // APPEARANCE: Calculate sizes
    // =========================================================================

    // Card height
    const cardHeight = this._getCardHeight();

    // Card width
    const cardWidth = this._getCardWidth();

    // Icon sizes
    const { iconSize, containerSize } = this._getIconSizes();

    // =========================================================================
    // COLORS: Apply custom colors with theme defaults
    // =========================================================================

    // Icon colors
    const iconColorDefault = this._config.icon_color || "var(--primary-text-color)";
    const iconColorActive = this._config.icon_color_active
      || (rgbColor ? `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})` : iconColorDefault);

    // Icon background colors
    const iconBgDefault = this._config.icon_background_color || "var(--secondary-background-color)";
    const iconBgActive = this._config.icon_background_color_active
      || (rgbColor ? `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.2)` : iconBgDefault);

    // Text colors
    const nameColor = this._config.name_color || "var(--primary-text-color)";
    const sensorTextColor = this._config.sensor_text_color || "var(--primary-text-color)";

    // Active sensor color
    const activeSensorColor = this._config.active_sensor_color
      || "var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107))";

    // Card colors
    const cardBgDefault = this._config.card_background_color
      || "color-mix(in srgb, var(--card-background-color) 50%, transparent)";
    const cardBgActive = this._config.card_background_color_active
      || "var(--card-background-color)";
    const cardBorderColor = this._config.card_border_color || "var(--primary-text-color)";

    // Build the dynamic icon style
    const iconBgStyle = isOn ? `background-color: ${iconBgActive}` : `background-color: ${iconBgDefault}`;
    const iconColorStyle = isOn ? `color: ${iconColorActive}` : `color: ${iconColorDefault}`;

    // Build the card style with CSS custom properties
    const cardStyle = `
      --card-height: ${cardHeight};
      --card-width: ${cardWidth};
      --icon-size: ${iconSize};
      --icon-container-size: ${containerSize};
      --name-color: ${nameColor};
      --sensor-text-color: ${sensorTextColor};
      --active-sensor-color: ${activeSensorColor};
      --card-bg-color: ${isOn ? cardBgActive : cardBgDefault};
      --card-border-color: ${cardBorderColor};
    `.replace(/\s+/g, ' ').trim();

    // Show toggles (default to true for name/icon, false for state)
    const showName = this._config.show_name !== false;
    const showIcon = this._config.show_icon !== false;
    const showState = this._config.show_state === true;

    // State text using domain-aware helper
    const stateText = this._getStateText(primaryEntity);

    return html`
      <ha-card
        class="${isOn ? "state-on" : "state-off"}"
        style="${cardStyle}"
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

    /* Card - using CSS custom properties for customization */
    ha-card {
      display: grid;
      grid-template-areas:
        "n n i i"
        "temp temp temp sensors";
      grid-template-rows: 1fr min-content;
      grid-template-columns: min-content 1fr;
      padding: 6px;
      height: var(--card-height, 97px);
      width: var(--card-width, auto);
      box-sizing: border-box;
      cursor: pointer;
      transition: background-color 0.3s ease, border 0.3s ease;
      background-color: var(--card-bg-color);
    }

    ha-card.state-on {
      border: 1px solid var(--card-border-color, var(--primary-text-color));
    }

    ha-card.state-off {
      border: none;
    }

    /* Name - using custom property for color */
    .name {
      grid-area: n;
      justify-self: start;
      align-self: start;
      text-align: left;
      font-size: 16px;
      font-weight: 500;
      color: var(--name-color, var(--primary-text-color));
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

    /* Icon container - using custom properties for size */
    .icon-container {
      grid-area: i;
      justify-self: end;
      align-self: start;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      width: var(--icon-container-size, 50px);
      height: var(--icon-container-size, 50px);
      transition: background-color 0.5s ease;
    }

    .icon-container.hidden {
      visibility: hidden;
    }

    /* Icon - using custom properties for size */
    .icon-container ha-icon {
      width: var(--icon-size, 35px);
      height: var(--icon-size, 35px);
      --mdc-icon-size: var(--icon-size, 35px);
      transition: color 0.3s ease;
    }

    /* Sensors container - using custom property for text color */
    .sensors {
      grid-area: temp;
      justify-self: start;
      display: flex;
      align-items: baseline;
      gap: 8px;
      padding: 0 0 1px 14px;
    }

    /* Temperature - using custom property for color */
    .temp {
      font-size: 16px;
      line-height: 16px;
      font-weight: 300;
      color: var(--sensor-text-color, var(--primary-text-color));
    }

    /* Humidity and Power - using custom property for color */
    .humidity,
    .power {
      font-size: 12px;
      font-weight: 400;
      opacity: 0.7;
      color: var(--sensor-text-color, var(--primary-text-color));
    }

    .placeholder {
      font-size: 12px;
      font-style: italic;
      color: var(--secondary-text-color);
    }

    /* Binary sensors row */
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
      color: var(--active-sensor-color, var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107)));
      animation: pulse 1.5s ease-in-out infinite;
    }

    .binary-sensors .binary-sensor.inactive {
      color: transparent;
      opacity: 0;
      width: 0;
      margin: 0;
      overflow: hidden;
    }

    /* Lock icon - always visible, slightly larger */
    .binary-sensors .lock-icon {
      width: 24px;
      height: 24px;
      --mdc-icon-size: 24px;
      transition: color 0.3s ease;
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
