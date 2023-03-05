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

type HoverPluginState = {
  position?: Position;
};

type HoverData = {
  position?: Position;
  frame: Frame;
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

  const clampedPosX = clamp(posX, 0, frame.chartArea.width);
  const clampedPosY = clamp(posY, 0, frame.chartArea.height);

  if (!fallbackToBoundaries && (clampedPosX !== posX || clampedPosY !== posY)) {
    return undefined;
  }

  const scaled: Record<ScaleId, number> = {};
  for (const scale of frame.scales) {
    if (scale.id.startsWith("x-")) {
      scaled[scale.id] = posToVal(frame, clampedPosX, scale.id);
    } else {
      scaled[scale.id] = posToVal(frame, clampedPosY, scale.id);
    }
  }
  return {
    screen,
    canvas,
    scaled,
  };
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
