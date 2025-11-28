import { noChange } from "lit";
import { directive, Directive, DirectiveParameters, PartInfo, PartType } from "lit/directive.js";
import type { ActionHandlerDetail, ActionHandlerOptions } from "./types";

const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

class ActionHandlerDirective extends Directive {
  private element!: HTMLElement;
  private options!: ActionHandlerOptions;
  private holdTimeout?: ReturnType<typeof setTimeout>;
  private dblClickTimeout?: ReturnType<typeof setTimeout>;
  private held = false;

  constructor(partInfo: PartInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ELEMENT) {
      throw new Error("actionHandler directive can only be used on elements");
    }
  }

  render(_options: ActionHandlerOptions) {
    return noChange;
  }

  override update(part: any, [options]: DirectiveParameters<this>) {
    if (!this.element) {
      this.element = part.element;
      this.setupListeners();
    }
    this.options = options || {};
    return noChange;
  }

  private setupListeners(): void {
    if (isTouch) {
      this.element.addEventListener("touchstart", this.handleTouchStart.bind(this), { passive: true });
      this.element.addEventListener("touchend", this.handleTouchEnd.bind(this));
      this.element.addEventListener("touchcancel", this.handleTouchCancel.bind(this));
    } else {
      this.element.addEventListener("mousedown", this.handleMouseDown.bind(this));
      this.element.addEventListener("mouseup", this.handleMouseUp.bind(this));
      this.element.addEventListener("click", this.handleClick.bind(this));
    }
  }

  private handleTouchStart(_ev: TouchEvent): void {
    this.held = false;
    if (this.options.hasHold) {
      this.holdTimeout = setTimeout(() => {
        this.held = true;
        this.fireEvent("hold");
      }, 500);
    }
  }

  private handleTouchEnd(ev: TouchEvent): void {
    if (this.holdTimeout) {
      clearTimeout(this.holdTimeout);
      this.holdTimeout = undefined;
    }
    if (!this.held) {
      this.handleClick(ev);
    }
  }

  private handleTouchCancel(): void {
    this.held = false;
    if (this.holdTimeout) {
      clearTimeout(this.holdTimeout);
      this.holdTimeout = undefined;
    }
  }

  private handleMouseDown(_ev: MouseEvent): void {
    this.held = false;
    if (this.options.hasHold) {
      this.holdTimeout = setTimeout(() => {
        this.held = true;
        this.fireEvent("hold");
      }, 500);
    }
  }

  private handleMouseUp(): void {
    if (this.holdTimeout) {
      clearTimeout(this.holdTimeout);
      this.holdTimeout = undefined;
    }
  }

  private handleClick(ev: Event): void {
    ev.stopPropagation();

    if (this.held) {
      this.held = false;
      return;
    }

    if (this.options.hasDoubleClick) {
      if (this.dblClickTimeout) {
        clearTimeout(this.dblClickTimeout);
        this.dblClickTimeout = undefined;
        this.fireEvent("double_tap");
      } else {
        this.dblClickTimeout = setTimeout(() => {
          this.dblClickTimeout = undefined;
          this.fireEvent("tap");
        }, 250);
      }
    } else {
      this.fireEvent("tap");
    }
  }

  private fireEvent(action: ActionHandlerDetail["action"]): void {
    if (this.options.disabled) return;

    this.element.dispatchEvent(
      new CustomEvent<ActionHandlerDetail>("action", {
        bubbles: true,
        composed: true,
        detail: { action },
      })
    );
  }
}

export const actionHandler = directive(ActionHandlerDirective);
