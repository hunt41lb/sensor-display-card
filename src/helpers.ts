// src/helpers.ts

// ============================================================================
// HELPERS - Utility functions for state parsing, icons, and appearance
// ============================================================================

import { HassEntity } from "home-assistant-js-websocket";
import {
  ICON_SIZES,
  ICON_ONLY_SIZES,
  LOCK_ICONS,
  LOCK_COLORS,
  ICON_COLORS,
  DEFAULT_CARD_HEIGHT,
  DEFAULT_CARD_WIDTH,
  LAYOUT_DEFAULT_HEIGHTS,
} from "./constants";
import type { IconSize, IconSizeConfig, LayoutMode, SensorDisplayCardConfig } from "./types";

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
 * Get card height based on config value and layout mode
 */
export function getCardHeight(height: string | undefined, layout: LayoutMode = "full"): string {
  // If explicit height is set, use it
  if (height && height.length > 0) {
    // If it's just a number, add px
    const numValue = parseFloat(height);
    if (!isNaN(numValue) && height === String(numValue)) {
      return `${numValue}px`;
    }
    return height;
  }

  // Otherwise, use layout-specific default
  return LAYOUT_DEFAULT_HEIGHTS[layout] || DEFAULT_CARD_HEIGHT;
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
 * Get icon and container sizes based on config and layout
 * Returns null for icon-only layout without explicit size (use responsive sizing)
 */
export function getIconSizes(size: IconSize | undefined, layout: LayoutMode = "full"): IconSizeConfig | null {
  // For icon-only layout without explicit size, return null to signal responsive sizing
  if (layout === "icon-only" && !size) {
    return null;
  }

  const sizeKey = size || "default";

  // Use larger icons for icon-only layout with explicit size
  if (layout === "icon-only") {
    return ICON_ONLY_SIZES[sizeKey];
  }

  return ICON_SIZES[sizeKey];
}

/**
 * Calculate responsive icon sizes based on available card height
 * Used for icon-only layout when no explicit icon_size is set
 */
export function calculateResponsiveIconSizes(cardHeight: string, padding: number = 20): IconSizeConfig {
  // Parse the height value (assumes px or number)
  let heightValue = parseFloat(cardHeight);

  // If parsing fails, use default
  if (isNaN(heightValue)) {
    heightValue = 85; // default icon-only height
  }

  // Calculate available space (height minus padding)
  const availableSpace = heightValue - padding;

  // Container fills available space (min 40px to stay usable)
  const containerSize = Math.max(40, availableSpace);

  // Icon is 70% of container
  const iconSize = Math.round(containerSize * 0.7);

  return {
    iconSize: `${iconSize}px`,
    containerSize: `${containerSize}px`,
  };
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

/**
 * Get icon color based on configuration and entity states
 */
export function getIconColor(
  config: SensorDisplayCardConfig,
  _primaryEntity: HassEntity | undefined,
  motionEntity: HassEntity | undefined,
  rgbColor: [number, number, number] | undefined,
  isOn: boolean
): string {
  const colorSource = config.icon_color_source || "default";

  switch (colorSource) {
    case "motion":
      // Use motion sensor state to determine color
      if (motionEntity?.state === "on") {
        return ICON_COLORS.active;
      }
      return ICON_COLORS.on;

    case "entity":
      // Use primary entity state to determine color
      if (isOn) {
        // If entity has RGB color (light), use it
        if (rgbColor) {
          return `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
        }
        return ICON_COLORS.active;
      }
      return ICON_COLORS.off;

    case "default":
    default:
      // Default behavior: use RGB color if available, otherwise primary text
      if (rgbColor && isOn) {
        return `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
      }
      return "";  // Empty string means use default CSS color
  }
}

/**
 * Get icon background color based on configuration and entity states
 */
export function getIconBackgroundColor(
  config: SensorDisplayCardConfig,
  rgbColor: [number, number, number] | undefined,
  isOn: boolean
): string {
  const colorSource = config.icon_color_source || "default";

  // Only show RGB background in default mode with lights
  if (colorSource === "default" && rgbColor && isOn) {
    return `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, 0.2)`;
  }

  return "";  // Empty string means use default CSS background
}

/**
 * Determine the effective layout mode based on configuration
 * Auto-detects icon-only mode when appropriate settings are configured
 */
export function getEffectiveLayout(config: SensorDisplayCardConfig): LayoutMode {
  // If layout is explicitly set, use it
  if (config.layout) {
    return config.layout;
  }

  // Auto-detect icon-only layout:
  // - show_name is false
  // - show_icon is true (or default)
  // - No value sensors configured
  // - No binary sensors configured (except motion for color)
  const showName = config.show_name !== false;
  const showIcon = config.show_icon !== false;
  const hasValueSensors = !!(config.temp_sensor || config.humidity_sensor || config.power_sensor);
  const hasBinarySensors = !!(
    config.door_sensor ||
    config.window_sensor ||
    config.person_sensor ||
    config.pet_sensor ||
    config.vehicle_sensor ||
    config.lock_entity
  );

  // If name is hidden, icon is shown, and no sensors are configured for display
  if (!showName && showIcon && !hasValueSensors && !hasBinarySensors) {
    return "icon-only";
  }

  return "full";
}

/**
 * Check if any value sensors are configured
 */
export function hasValueSensors(config: SensorDisplayCardConfig): boolean {
  return !!(config.temp_sensor || config.humidity_sensor || config.power_sensor);
}

/**
 * Check if any binary sensors (including lock) are configured for display
 */
export function hasBinarySensorsForDisplay(config: SensorDisplayCardConfig): boolean {
  return !!(
    config.door_sensor ||
    config.window_sensor ||
    config.person_sensor ||
    config.pet_sensor ||
    config.vehicle_sensor ||
    config.motion_sensor ||
    config.lock_entity
  );
}

/**
 * Check if any activity detection sensors are currently active
 * Activity sensors include: motion, person, pet, vehicle
 */
export function isActivityDetected(
  motionEntity: HassEntity | undefined,
  personEntity: HassEntity | undefined,
  petEntity: HassEntity | undefined,
  vehicleEntity: HassEntity | undefined
): boolean {
  return (
    motionEntity?.state === "on" ||
    personEntity?.state === "on" ||
    petEntity?.state === "on" ||
    vehicleEntity?.state === "on"
  );
}

/**
 * Check if any activity sensors are configured
 */
export function hasActivitySensors(config: SensorDisplayCardConfig): boolean {
  return !!(
    config.motion_sensor ||
    config.person_sensor ||
    config.pet_sensor ||
    config.vehicle_sensor
  );
}
