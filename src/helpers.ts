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
import type { IconSize, IconSizeConfig } from "./types";

/**
 * Parse a sensor value to a display string
 */
export function parseValue(value: string | undefined): string {
  if (!value || value === "unavailable" || value === "unknown") {
    return "--";
  }
  const num = parseFloat(value);
  return isNaN(num) ? "--" : num.toFixed(0);
}

/**
 * Determine if an entity is in an "active" state based on its domain
 */
export function isEntityActive(entity: HassEntity | undefined): boolean {
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
export function isDoorOpen(entity: HassEntity | undefined): boolean {
  if (!entity) return false;
  const state = entity.state;
  return state === "on" || state === "Window/door is open";
}

/**
 * Check if window sensor is open (handles both 'on' and 'Window/door is open' states)
 */
export function isWindowOpen(entity: HassEntity | undefined): boolean {
  if (!entity) return false;
  const state = entity.state;
  return state === "on" || state === "Window/door is open";
}

/**
 * Get lock icon based on state
 */
export function getLockIcon(entity: HassEntity | undefined): string {
  if (!entity) return LOCK_ICONS.locked;
  const state = entity.state as keyof typeof LOCK_ICONS;
  return LOCK_ICONS[state] || LOCK_ICONS.unknown;
}

/**
 * Get lock color CSS variable based on state
 */
export function getLockColorVar(entity: HassEntity | undefined): string {
  if (!entity) return "var(--state-lock-locked-color, var(--primary-text-color))";
  const state = entity.state as keyof typeof LOCK_COLORS;
  return LOCK_COLORS[state] || LOCK_COLORS.unknown;
}

/**
 * Get card height based on config value
 */
export function getCardHeight(height: string | undefined): string {
  if (!height) return DEFAULT_CARD_HEIGHT;

  // If it's already a valid CSS value, return as-is
  if (typeof height === "string" && height.length > 0) {
    // If it's just a number, add px
    const numValue = parseFloat(height);
    if (!isNaN(numValue) && height === String(numValue)) {
      return `${numValue}px`;
    }
    return height;
  }

  return DEFAULT_CARD_HEIGHT;
}

/**
 * Get card width based on config value
 */
export function getCardWidth(width: string | undefined): string {
  if (!width) return DEFAULT_CARD_WIDTH;

  // If it's already a valid CSS value, return as-is
  if (typeof width === "string" && width.length > 0) {
    // If it's just a number, add px
    const numValue = parseFloat(width);
    if (!isNaN(numValue) && width === String(numValue)) {
      return `${numValue}px`;
    }
    return width;
  }

  return DEFAULT_CARD_WIDTH;
}

/**
 * Get icon and container sizes based on config
 */
export function getIconSizes(size: IconSize | undefined): IconSizeConfig {
  return ICON_SIZES[size || "default"];
}

/**
 * Get display text for entity state
 */
export function getStateText(entity: HassEntity | undefined): string {
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
      return isEntityActive(entity) ? "On" : "Off";
  }
}
