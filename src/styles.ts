// src/styles.ts

// ============================================================================
// STYLES - CSS styles for the card and editor components
// ============================================================================

import { css } from "lit";

/**
 * Styles for the main card component
 */
export const cardStyles = css`
  :host {
    display: block;
  }

  /* Card - using CSS custom properties for size customization */
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
    border-radius: var(--ha-card-border-radius, 12px);
    cursor: pointer;
    transition: background-color 0.3s ease, border 0.3s ease;
  }

  ha-card.state-on {
    background-color: var(--card-background-color);
    border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color));
  }

  ha-card.state-off {
    background-color: color-mix(in srgb, var(--card-background-color) 50%, transparent);
    border: var(--ha-card-border-width, 1px) solid color-mix(in srgb, var(--ha-card-border-color, var(--divider-color)) 50%, transparent);
  }

  /* Name */
  .name {
    grid-area: n;
    justify-self: start;
    align-self: start;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
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
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.1));
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
    color: var(--primary-text-color);
    transition: color 0.3s ease;
  }

  /* Sensors container */
  .sensors {
    grid-area: temp;
    justify-self: start;
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: 0 0 1px 14px;
  }

  /* Temperature */
  .temp {
    font-size: 16px;
    line-height: 16px;
    font-weight: 300;
    color: var(--primary-text-color);
  }

  /* Humidity and Power */
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
    color: var(--state-binary_sensor-active-color, var(--state-active-color, #ffc107));
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
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
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

/**
 * Styles for the editor component
 */
export const editorStyles = css`
  ha-form {
    display: block;
  }
`;
