import { DEFAULT_PADDING } from "./defaults";
import { CursorPosition } from "./main";
import {
  Frame,
  Scene,
  Style,
  XScaleId,
  YScaleId,
  ScaleId,
} from "./types";
import { clamp, findClosestIndex } from "./utils";

export const isXScale = (scaleId: string): scaleId is XScaleId =>
  scaleId.startsWith("x-");

export const isYScale = (scaleId: string): scaleId is YScaleId =>
  scaleId.startsWith("y-");

export const getScaleLimits = (frame:Frame, scaleId: ScaleId) => {
  const scale = frame.scales.find(a => a.id === scaleId);
  if(!scale) {
    throw new Error(`Scale ${scaleId} not found`);
  }
  return scale.limits;
}

export const valToPxDistance = (
  frame: Frame,
  val: number,
  scaleId: ScaleId
) => {
  const chartArea = frame.chartArea;
  const { min, max } = getScaleLimits(frame, scaleId);
  const factor =
    (isXScale(scaleId) ? chartArea.width : chartArea.height) / (max - min);
  return val * factor;
};

export const valToPos = (
  frame: Frame,
  val: number,
  scaleId: ScaleId
) => {
  const { min } = getScaleLimits(frame, scaleId);
  const chartArea = frame.chartArea;
  const relativePosition = valToPxDistance(frame, val - min, scaleId);
  if (isXScale(scaleId)) {
    return clamp(
      chartArea.x + relativePosition,
      chartArea.x - 10 * chartArea.width,
      chartArea.x + 11 * chartArea.width
    );
  } else {
    return clamp(
      chartArea.y + chartArea.height - relativePosition,
      chartArea.y - 10 * chartArea.height,
      chartArea.y + 11 * chartArea.height
    );
  }
};

export const pxToValDistance = (
  frame: Frame,
  pxDistance: number,
  scaleId: ScaleId
) => {
  const { min, max } = getScaleLimits(frame, scaleId);
  const chartArea = frame.chartArea;
  const factor =
    (isXScale(scaleId) ? chartArea.width : chartArea.height) / (max - min);
  return pxDistance / factor;
};

export const posToVal = (
  frame: Frame,
  pos: number,
  scaleId: ScaleId
) => {
  const { min, max } = getScaleLimits(frame, scaleId);
  const relativePosition = pxToValDistance(frame, pos, scaleId);
  return isXScale(scaleId) ? min + relativePosition : max - relativePosition;
};

export const applyStyles = (ctx: CanvasRenderingContext2D, style?: Style) => {
  ctx.lineCap = style?.lineCap ?? "butt";
  ctx.lineDashOffset = style?.lineDashOffset ?? 0;
  ctx.lineJoin = style?.lineJoin ?? "miter";
  ctx.lineWidth = style?.lineWidth ?? 1;
  ctx.miterLimit = style?.miterLimit ?? 10;
  ctx.strokeStyle = style?.strokeStyle ?? "black";
  ctx.fillStyle = style?.fillStyle ?? ctx.strokeStyle;
  ctx.font = style?.font ?? "10px sans-serif";
  ctx.textAlign = style?.textAlign ?? "start";
  ctx.direction = style?.direction ?? "inherit";
  ctx.textBaseline = style?.textBaseline ?? "alphabetic";
  ctx.fontKerning = style?.fontKerning ?? "auto";
};

export const normalizePadding = (padding: Scene["padding"]) => {
  if (typeof padding === "number" || typeof padding === "undefined") {
    const paddingWithDefault = padding ?? DEFAULT_PADDING;
    return {
      top: paddingWithDefault,
      right: paddingWithDefault,
      bottom: paddingWithDefault,
      left: paddingWithDefault,
    };
  }

  return { ...padding };
};

type DataPoint = { x: number; y: number };

export const findClosestDataPoint = (
  position: CursorPosition | undefined,
  frame: Frame,
  toleranceXPx = 100,
  toleranceYPx = Infinity
): (DataPoint | undefined)[] => {
  const { series } = frame;
  if (!position) {
    return series.map(() => undefined);
  }
  return series.map((series) => {
    if (series.x.length < 0) {
      return undefined;
    }
    const idx = findClosestIndex(series.x, position.scaled[series.xScaleId]);
    if (Number.isFinite(toleranceXPx)) {
      const xPos = valToPos(frame, series.x[idx], series.xScaleId);
      if (Math.abs(position.canvas.x - xPos) > toleranceXPx) {
        return undefined;
      }
    }
    if (Number.isFinite(toleranceYPx)) {
      const yPos = valToPos(frame, series.y[idx], series.yScaleId);
      if (Math.abs(position.canvas.y - yPos) > toleranceYPx) {
        return undefined;
      }
    }
    return {
      x: series.x[idx],
      y: series.y[idx],
    };
  });
};
