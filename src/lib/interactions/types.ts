import type { PlotDrawFrame } from "../types";

type ModifiersKeys = {
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
};

// EVENTS FOR SYNCING POINTERS BETWEEN MULTIPLE PLOTS

export type PointerSyncPosition = {
  x: {
    scaleId: string;
    value: number;
  } | null;
  y: {
    scaleId: string;
    value: number;
  } | null;
};

export type SyncEvent_Move = {
  positions: PointerSyncPosition | null;
  keys: ModifiersKeys;
};

export type SyncEvent_DblClick = {
  positions: PointerSyncPosition;
  keys: ModifiersKeys;
};

export type SyncEvent_Click = {
  positions: PointerSyncPosition;
  keys: ModifiersKeys;
};

export type SyncEvent_MouseDown = {
  positions: PointerSyncPosition;
  keys: ModifiersKeys;
};

export type SyncEvent_MouseUp = {
  positions: PointerSyncPosition;
  keys: ModifiersKeys;
};

export type SyncEvent_PressAndWheel = {
  positions: PointerSyncPosition;
  keys: ModifiersKeys;
  deltaX: number;
  deltaY: number;
  deltaAbs: number;
};

export type SyncEvent_SpanSelect = {
  mode: "x" | "y" | "box" | "none";
  xRange?: ScaledSelectionRange;
  yRange?: ScaledSelectionRange;
  completed: boolean;
  keys: ModifiersKeys;
};

export type PointerSyncEvent =
  | {
      type:
        | "dblclick"
        | "click"
        | "move"
        | "mousedown"
        | "mouseup"
        | "documentmouseup";
      x: {
        scaleId: string;
        value: number;
      } | null;
      y: {
        scaleId: string;
        value: number;
      } | null;
    }
  | {
      type: "spanselect";
    };

// INTERACTIONS PER SINGLE PLOT

export type InteractionsEventPointerPosition = {
  cssX: number;
  cssY: number;
  scaled: Record<string, number>;
};

export type InteractionsEvent = {
  frame: PlotDrawFrame;
  keys: ModifiersKeys;
};

export type DblClickEvent = InteractionsEvent & {
  pointer: InteractionsEventPointerPosition;
};

export type ClickEvent = InteractionsEvent & {
  pointer: InteractionsEventPointerPosition;
};

export type MoveEvent = InteractionsEvent & {
  pointer: InteractionsEventPointerPosition | null;
};

export type MouseDownEvent = InteractionsEvent & {
  pointer: InteractionsEventPointerPosition;
};

export type MouseUpEvent = InteractionsEvent & {
  pointer: InteractionsEventPointerPosition;
};

export type ScaledSelectionRange = {
  scaleId: string;
  from: number;
  to: number;
};

export type SpanSelectEvent = {
  frame: PlotDrawFrame;
  mode: "x" | "y" | "box" | "none";
  x: {
    fromCSS: number;
    toCSS: number;
  };
  y: {
    fromCSS: number;
    toCSS: number;
  };
  xRanges: ScaledSelectionRange[];
  yRanges: ScaledSelectionRange[];
  completed: boolean;
  keys: ModifiersKeys;
};

export type PressAndWheelEvent = InteractionsEvent & {
  pointer: InteractionsEventPointerPosition;
  deltaX: number;
  deltaY: number;
  deltaAbs: number;
};

export type DocumentMouseUpEvent = InteractionsEvent;
