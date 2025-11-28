import { css } from "lit";

export const styles = css`
  :host {
    display: block;
  }

  ha-card {
    display: grid;
    grid-template-areas:
      "name    name    icon    icon"
      "sensors sensors sensors motion";
    grid-template-rows: 1fr min-content;
    grid-template-columns: min-content 1fr 1fr auto;
    padding: 6px;
    height: 97px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  ha-card.state-on {
    background-color: var(--ha-card-background);
    border: 1px solid var(--primary-text-color);
  }

  ha-card.state-off {
    background-color: var(--ha-card-background-inactive, var(--ha-card-background));
  }

  /* Name styling */
  .name {
    grid-area: name;
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

  /* Icon container */
  .icon-container {
    grid-area: icon;
    justify-self: end;
    align-self: start;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background-color: var(--inactive-img-cell, rgba(0, 0, 0, 0.1));
    transition: background-color 0.3s ease;
  }

  .icon-container.has-color {
    /* Background color set dynamically via style attribute */
  }

  .icon-container ha-icon {
    width: 35px;
    height: 35px;
    --mdc-icon-size: 35px;
    color: var(--primary-text-color);
    transition: color 0.3s ease;
  }

  /* Sensor values area */
  .sensors {
    grid-area: sensors;
    justify-self: start;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 300;
    color: var(--primary-text-color);
    padding: 0 0 1px 14px;
  }

  .sensor-temp {
    font-size: 18px;
  }

  .sensor-humidity,
  .sensor-power {
    font-size: 12px;
    font-weight: 400;
    opacity: 0.7;
  }

  /* Motion sensor area */
  .motion {
    grid-area: motion;
    justify-self: end;
    align-self: end;
    padding: 0 0 1px 2px;
    margin: 0 3px 0 0;
  }

  .motion ha-icon {
    width: 21px;
    height: 21px;
    --mdc-icon-size: 21px;
    transition: color 0.3s ease;
  }

  .motion ha-icon.motion-active {
    color: var(--warning-color, #ffc107);
    animation: pulse 1.5s ease-in-out infinite;
  }

  .motion ha-icon.motion-inactive {
    color: var(--primary-background-color);
  }

  /* Pulse animation for motion detection */
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Unavailable state */
  .unavailable {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--secondary-text-color);
    font-style: italic;
  }

  .no-entities {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-style: italic;
  }
`;
