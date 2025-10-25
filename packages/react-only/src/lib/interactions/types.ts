import type { PlotDrawFrame } from "../types";

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
}

export type SyncEvent_DblClick = {
    positions: PointerSyncPosition;
}

export type SyncEvent_Click = {
    positions: PointerSyncPosition;
}

export type SyncEvent_MouseDown = {
    positions: PointerSyncPosition;
}

export type SyncEvent_MouseUp = {
    positions: PointerSyncPosition;
}


export type SyncEvent_SpanSelect = {
    mode: "x" | "y" | "box";
    xRange?: {
      leadXScaleId: string;
      from: number;
      to: number;
    };
    yRange?: {
      leadYScaleId: string;
      from: number;
      to: number;
    };
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

export type SpanSelectEvent =
  | {
      frame: PlotDrawFrame;
      mode: "x";
      xRanges: {
        scaleId: string;
        from: number;
        to: number;
      }[];
    }
  | {
      frame: PlotDrawFrame;
      mode: "y";
      yRanges: {
        scaleId: string;
        from: number;
        to: number;
      }[];
    }
  | {
      frame: PlotDrawFrame;
      mode: "box";
      xRanges: {
        scaleId: string;
        from: number;
        to: number;
      }[];
      yRanges: {
        scaleId: string;
        from: number;
        to: number;
      }[];
    };

export type DocumentMouseUpEvent = InteractionsEvent;
