// @/src/styles.ts

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

  /* Card - using CSS custom properties for size and position customization */
  ha-card {
    display: grid;
    grid-template-areas:
      "left center right"
      "bottom-left bottom-center bottom-right";
    grid-template-rows: 1fr min-content;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 6px;
    height: var(--card-height, 97px);
    width: var(--card-width, auto);
    border-radius: var(--ha-card-border-radius, 12px);
    box-sizing: border-box;
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

  /* Name - using custom properties for position */
  .name {
    grid-area: var(--name-grid-area, left);
    justify-self: var(--name-justify, start);
    align-self: start;
    text-align: var(--name-text-align, left);
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

  /* Icon container - using custom properties for size and position */
  .icon-container {
    grid-area: var(--icon-grid-area, right);
    justify-self: var(--icon-justify, end);
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

  /* Sensors container - using custom properties for position */
  .sensors {
    grid-area: var(--sensors-grid-area, bottom-left);
    justify-self: var(--sensors-justify, start);
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: var(--sensors-padding, 0 0 1px 14px);
  }

  .sensor {
    font-size: 13px;
    color: var(--secondary-text-color);
    display: flex;
    align-items: baseline;
    gap: 2px;
  }

  .sensor ha-icon {
    width: 14px;
    height: 14px;
    --mdc-icon-size: 14px;
    color: var(--secondary-text-color);
  }

  .sensor .value {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .sensor .unit {
    font-size: 10px;
    opacity: 0.7;
    color: var(--primary-text-color);
  }

  .placeholder {
    font-size: 12px;
    font-style: italic;
    color: var(--secondary-text-color);
  }

  /* Binary sensors row - using custom properties for position */
  .binary-sensors {
    grid-area: var(--binary-sensors-grid-area, bottom-right);
    justify-self: var(--binary-sensors-justify, end);
    align-self: end;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 0 1px 2px;
    margin: var(--binary-sensors-margin, 0 3px 0 0);
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
`;

/**
 * Styles for the editor component
 */
export const editorStyles = css`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  ha-form {
    display: block;
  }

  /* Fix expandable section styling */
  ha-expansion-panel {
    display: block;
    --expansion-panel-content-padding: 0 16px 16px;
  }
`;
