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

export type SyncEvent_ContextMenu = {
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
  mode: "x" | "y" | "box" | "below_threshold";
  xRange: ScaledSelectionRange;
  yRange: ScaledSelectionRange;
  completed: boolean;
  keys: ModifiersKeys;
};

// INTERACTIONS PER SINGLE PLOT

export type InteractionsEventPointerPosition = {
  cssX: number | null;
  cssY: number | null;
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

export type ContextMenuEvent = InteractionsEvent & {
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
  mode: "x" | "y" | "box" | "below_threshold";
  x: {
    css?: { from: number; to: number };
    scaled: ScaledSelectionRange[];
  };
  y: {
    css?: { from: number; to: number };
    scaled: ScaledSelectionRange[];
  };
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
