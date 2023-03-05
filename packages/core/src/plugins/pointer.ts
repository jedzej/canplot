import { posToVal } from "../helpers";
import { Frame, MakePlugin, ScaleId } from "../types";
import { clamp } from "../utils";

type XY = {
  x: number;
  y: number;
};

export type Position = {
  screen: XY;
  canvas: XY;
  scaled: Record<ScaleId, number>;
};

const eventToPositions = (
  e: MouseEvent,
  frame: Frame,
  fallbackToBoundaries = false
): Position | undefined => {
  const rect = frame.ctx.canvas.getBoundingClientRect();
  const screen = { x: e.clientX, y: e.clientY };
  const canvas = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  const posX = e.clientX - rect.left - frame.chartArea.x;
  const posY = e.clientY - rect.top - frame.chartArea.y;

  const effectivePosX = fallbackToBoundaries
    ? clamp(posX, 0, frame.chartArea.width)
    : posX;
  const effectivePosY = fallbackToBoundaries
    ? clamp(posY, 0, frame.chartArea.height)
    : posY;
  console.log(
    posY,
    effectivePosY,
    fallbackToBoundaries,
    frame.chartArea.height
  );

  const scaled: Record<ScaleId, number> = {};
  for (const scale of frame.scales) {
    if (scale.id.startsWith("x-")) {
      scaled[scale.id] = posToVal(frame, effectivePosX, scale.id);
    } else {
      scaled[scale.id] = posToVal(frame, effectivePosY, scale.id);
    }
  }
  return {
    screen,
    canvas,
    scaled,
  };
};

type HoverPluginState = {
  position?: Position;
};

type HoverData = {
  position?: Position;
  frame: Frame;
};

export const hoverPlugin =
  <ID extends string = "hover">({
    id = "hover" as ID,
    stateless = false,
    onHover,
  }: {
    id: ID;
    stateless?: boolean;
    onHover?: (data: HoverData) => void;
  }): MakePlugin<ID, HoverPluginState> =>
  ({ ctx, setPluginState, getPluginState }) => {
    const canvas = ctx.canvas;
    const store = {
      lastFrame: undefined as Frame | undefined,
    };

    canvas.addEventListener("mousemove", (e) => {
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame);
      onHover?.({
        position,
        frame: store.lastFrame,
      });
      if (!stateless) {
        setPluginState({ ...getPluginState(), position });
      }
    });

    canvas.addEventListener("mouseout", () => {
      if (!store.lastFrame) return;
      onHover?.({
        position: undefined,
        frame: store.lastFrame,
      });
      if (!stateless) {
        setPluginState({ ...getPluginState(), position: undefined });
      }
    });

    return {
      id,
      initialState: {},
      onDraw({ frame }) {
        store.lastFrame = frame;
      },
    };
  };

type ClickData = {
  position?: Position;
  frame: Frame;
};

export const clickPlugin =
  <ID extends string = "hover">({
    id = "click" as ID,
    onClick,
  }: {
    id: ID;
    onClick?: (data: ClickData) => void;
  }): MakePlugin<ID, undefined> =>
  ({ ctx }) => {
    const canvas = ctx.canvas;
    const store = {
      lastFrame: undefined as Frame | undefined,
    };

    canvas.addEventListener("click", (e) => {
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame);
      onClick?.({
        position,
        frame: store.lastFrame,
      });
    });

    return {
      id,
      initialState: undefined,
      onDraw({ frame }) {
        store.lastFrame = frame;
      },
    };
  };

type SpanSelectPluginState =
  | {
      phase: "idle";
    }
  | {
      phase: "active";
      startPosition: Position;
      endPosition: Position;
    };

type SpanSelectData =
  | {
      phase: "start";
      startPosition: Position;
      frame: Frame;
    }
  | {
      phase: "move";
      startPosition: Position;
      endPosition: Position;
      frame: Frame;
    }
  | {
      phase: "end";
      startPosition: Position;
      endPosition: Position;
      frame: Frame;
    };

export const spanSelectPlugin =
  <ID extends string = "spanSelect">({
    id = "spanSelect" as ID,
    onSpanSelect,
    stateless = false,
  }: {
    id: ID;
    onSpanSelect?: (data: SpanSelectData) => void;
    stateless?: boolean;
  }): MakePlugin<ID, SpanSelectPluginState> =>
  ({ ctx, setPluginState }) => {
    const canvas = ctx.canvas;
    const store = {
      startPosition: undefined as Position | undefined,
      endPosition: undefined as Position | undefined,
      lastFrame: undefined as Frame | undefined,
    };

    canvas.addEventListener("mousedown", (e) => {
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame, true);
      if (!position) return;
      store.startPosition = position;
      onSpanSelect?.({
        phase: "start",
        startPosition: store.startPosition,
        frame: store.lastFrame,
      });
      if (!stateless) {
        setPluginState({
          phase: "active",
          startPosition: store.startPosition,
          endPosition: store.startPosition,
        });
      }
    });

    canvas.addEventListener("mousemove", (e) => {
      if (!store.startPosition) return;
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame, true);
      console.log({ position });
      if (!position) return;
      store.endPosition = position;
      onSpanSelect?.({
        phase: "move",
        startPosition: store.startPosition,
        endPosition: store.endPosition,
        frame: store.lastFrame,
      });
      if (!stateless) {
        setPluginState({
          phase: "active",
          startPosition: store.startPosition,
          endPosition: store.endPosition,
        });
      }
    });

    canvas.addEventListener("mouseup", (e) => {
      if (!store.startPosition) return;
      if (!store.lastFrame) return;
      const position = eventToPositions(e, store.lastFrame, true);
      if (!position) return;
      onSpanSelect?.({
        phase: "end",
        startPosition: store.startPosition,
        endPosition: position,
        frame: store.lastFrame,
      });
      store.startPosition = undefined;
      store.endPosition = undefined;
      if (!stateless) {
        setPluginState({
          phase: "idle",
        });
      }
    });

    return {
      id,
      initialState: { phase: "idle" },
      onDraw({ frame }) {
        store.lastFrame = frame;
      },
    };
  };
