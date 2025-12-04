// src/helpers.ts

// ============================================================================
// HELPERS - Utility functions for state parsing, icons, and appearance
// ============================================================================

import { HassEntity } from "home-assistant-js-websocket";
import {
  ICON_SIZES,
  LOCK_ICONS,
  LOCK_COLORS,
  DEFAULT_CARD_HEIGHT,
  DEFAULT_CARD_WIDTH,
} from "./constants";
import type { IconSize, IconSizeConfig, PositionOption, PositionStyles } from "./types";

// =============================================================================
// Value Parsing
// =============================================================================

/**
 * Parse a sensor value to a number, returning undefined if invalid
 */
export function parseValue(entity: HassEntity | undefined): number | undefined {
  if (!entity) return undefined;
  const val = parseFloat(entity.state);
  return isNaN(val) ? undefined : val;
}

// =============================================================================
// Entity State Helpers
// =============================================================================

/**
 * Check if an entity is in an "active" state based on its domain
 */
export function isEntityActive(entity: HassEntity | undefined): boolean {
  if (!entity) return false;

  const state = entity.state.toLowerCase();
  const domain = entity.entity_id.split(".")[0];

  // Domain-specific checks
  switch (domain) {
    case "light":
    case "switch":
    case "input_boolean":
    case "fan":
    case "climate":
    case "humidifier":
      return state === "on";

    case "binary_sensor":
      return state === "on";

    case "lock":
      return state === "locked";

    case "cover":
      return state !== "closed";

    case "media_player":
      return state === "playing" || state === "on";

    case "vacuum":
      return state === "cleaning";

    case "alarm_control_panel":
      return state !== "disarmed";

    default:
      // For sensors and other entities, consider "on" or numeric > 0 as active
      if (state === "on") return true;
      const numVal = parseFloat(state);
      if (!isNaN(numVal)) return numVal > 0;
      return state !== "off" && state !== "unavailable" && state !== "unknown";
  }
}

/**
 * Check if a door entity is open
 */
export function isDoorOpen(entity: HassEntity | undefined): boolean {
  if (!entity) return false;
  return entity.state === "on";
}

/**
 * Check if a window entity is open
 */
export function isWindowOpen(entity: HassEntity | undefined): boolean {
  if (!entity) return false;
  return entity.state === "on";
}

// =============================================================================
// Lock Helpers
// =============================================================================

/**
 * Get the appropriate icon for a lock state
 */
export function getLockIcon(entity: HassEntity | undefined): string {
  if (!entity) return LOCK_ICONS.unknown;
  const state = entity.state.toLowerCase() as keyof typeof LOCK_ICONS;
  return LOCK_ICONS[state] || LOCK_ICONS.unknown;
}

/**
 * Get the CSS color variable for a lock state
 */
export function getLockColorVar(entity: HassEntity | undefined): string {
  if (!entity) return LOCK_COLORS.unknown;
  const state = entity.state.toLowerCase() as keyof typeof LOCK_COLORS;
  return LOCK_COLORS[state] || LOCK_COLORS.unknown;
}

// =============================================================================
// Appearance Helpers
// =============================================================================

/**
 * Get card height CSS value from config
 * Supports: "97px", "120", "50%", etc.
 */
export function getCardHeight(value: string | undefined): string {
  if (!value) return DEFAULT_CARD_HEIGHT;
  // If it's just a number, add px
  if (/^\d+$/.test(value)) return `${value}px`;
  return value;
}

/**
 * Get card width CSS value from config
 * Supports: "auto", "100%", "200px", "300", etc.
 */
export function getCardWidth(value: string | undefined): string {
  if (!value) return DEFAULT_CARD_WIDTH;
  // If it's just a number, add px
  if (/^\d+$/.test(value)) return `${value}px`;
  return value;
}

/**
 * Get icon sizes based on size option
 */
export function getIconSizes(size: IconSize | undefined): IconSizeConfig {
  const sizeKey = size || "default";
  return ICON_SIZES[sizeKey] || ICON_SIZES.default;
}

/**
 * Get CSS custom properties for element positioning based on icon and name positions
 */
export function getPositionStyles(
  iconPosition: PositionOption = "right",
  namePosition: PositionOption = "left"
): PositionStyles {
  // Map position to justify-self value
  const positionToJustify = (pos: PositionOption): string => {
    switch (pos) {
      case "left": return "start";
      case "center": return "center";
      case "right": return "end";
      default: return "start";
    }
  };

  // Map position to text-align value
  const positionToTextAlign = (pos: PositionOption): string => {
    switch (pos) {
      case "left": return "left";
      case "center": return "center";
      case "right": return "right";
      default: return "left";
    }
  };

  // Sensors (temp/humidity/power) go below name
  // Binary sensors go below icon
  const sensorsGridArea = `bottom-${namePosition}`;
  const binarySensorsGridArea = `bottom-${iconPosition}`;

  return {
    nameGridArea: namePosition,
    nameJustify: positionToJustify(namePosition),
    nameTextAlign: positionToTextAlign(namePosition),
    iconGridArea: iconPosition,
    iconJustify: positionToJustify(iconPosition),
    sensorsGridArea,
    sensorsJustify: positionToJustify(namePosition),
    sensorsPadding: namePosition === "right" ? "0 14px 1px 0" : namePosition === "center" ? "0 0 1px 0" : "0 0 1px 14px",
    binarySensorsGridArea,
    binarySensorsJustify: positionToJustify(iconPosition),
    binarySensorsMargin: iconPosition === "left" ? "0 0 0 3px" : iconPosition === "center" ? "0" : "0 3px 0 0",
  };
}

// =============================================================================
// State Text Helper
// =============================================================================

/**
 * Get display text for entity state
 */
export function getStateText(entity: HassEntity | undefined): string {
  if (!entity) return "";

  const domain = entity.entity_id.split(".")[0];
  const state = entity.state;

  // For lights with brightness, show percentage
  if (domain === "light" && entity.attributes.brightness !== undefined) {
    const brightness = Math.round((entity.attributes.brightness / 255) * 100);
    return `${brightness}%`;
  }

  // Capitalize first letter for display
  return state.charAt(0).toUpperCase() + state.slice(1);
}
