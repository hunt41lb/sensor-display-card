// src/constants.ts

// ============================================================================
// CONSTANTS - Single source of truth for version and card metadata
// ============================================================================

export const CARD_VERSION = "2.5.1";
export const CARD_TYPE = "sensor-display-card";
export const CARD_EDITOR_TYPE = "sensor-display-card-editor";
export const CARD_NAME = "Sensor Display Card";
export const CARD_DESCRIPTION =
  "A card displaying RGB lights with temperature, humidity, power, and binary sensors";
export const CARD_DOCUMENTATION_URL =
  "https://github.com/hunt41lb/sensor-display-card";

// Default configuration values
export const DEFAULT_CONFIG = {
  icon: "mdi:lightbulb",
  layout: "full" as const,
  show_name: true,
  show_icon: true,
  show_state: false,
  show_icon_background: true,
  icon_color_source: "default" as const,
  tap_action: { action: "toggle" as const },
  hold_action: { action: "more-info" as const },
  double_tap_action: { action: "more-info" as const },
};

// Default appearance values
export const DEFAULT_CARD_HEIGHT = "97px";
export const DEFAULT_CARD_WIDTH = "auto";

// Layout-specific default heights
export const LAYOUT_DEFAULT_HEIGHTS = {
  full: "97px",
  "icon-only": "85px",
  compact: "80px",
} as const;

// Icon size mappings
export const ICON_SIZES = {
  small: { iconSize: "25px", containerSize: "40px" },
  default: { iconSize: "35px", containerSize: "50px" },
  large: { iconSize: "45px", containerSize: "60px" },
} as const;

// Icon sizes for icon-only layout (larger icons)
export const ICON_ONLY_SIZES = {
  small: { iconSize: "35px", containerSize: "50px" },
  default: { iconSize: "50px", containerSize: "65px" },
  large: { iconSize: "60px", containerSize: "75px" },
} as const;

// Binary sensor icon mappings
export const BINARY_SENSOR_ICONS = {
  motion: { active: "mdi:motion-sensor", inactive: "mdi:motion-sensor-off" },
  person: { active: "mdi:account", inactive: "mdi:account-off" },
  pet: { active: "mdi:paw", inactive: "mdi:paw-off" },
  vehicle: { active: "mdi:car", inactive: "mdi:car-off" },
  door: { active: "mdi:door-open", inactive: "mdi:door-closed" },
  window: { active: "mdi:window-open", inactive: "mdi:window-closed" },
} as const;

// Lock icon mappings
export const LOCK_ICONS = {
  locked: "mdi:shield-lock",
  locking: "mdi:shield-lock",
  unlocked: "mdi:shield-lock-open",
  unlocking: "mdi:shield-lock-open",
  open: "mdi:shield-lock-open",
  opening: "mdi:shield-lock-open",
  jammed: "mdi:shield-alert",
  unavailable: "mdi:shield-alert",
  unknown: "mdi:shield-alert",
} as const;

// Lock color CSS variable mappings
export const LOCK_COLORS = {
  locked: "var(--state-lock-locked-color, var(--success-color, #4caf50))",
  locking: "var(--state-lock-locking-color, var(--info-color, #2196f3))",
  unlocked: "var(--state-lock-unlocked-color, var(--warning-color, #ff9800))",
  unlocking: "var(--state-lock-unlocking-color, var(--info-color, #2196f3))",
  open: "var(--state-lock-open-color, var(--warning-color, #ff9800))",
  opening: "var(--state-lock-opening-color, var(--info-color, #2196f3))",
  jammed: "var(--state-lock-jammed-color, var(--error-color, #f44336))",
  unavailable: "var(--error-color, #f44336)",
  unknown: "var(--error-color, #f44336)",
} as const;

// Icon color CSS variables for different states
export const ICON_COLORS = {
  active: "var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107))",
  on: "var(--primary-text-color)",
  off: "var(--primary-text-color)",
} as const;
