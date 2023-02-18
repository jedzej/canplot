import { DEFAULT_PADDING } from "./defaults";
import { CursorPosition } from "./main";
import { PlotDrawFrame, PlotDrawInputParams, Scale, Style } from "./types";
import { clamp, findClosestIndex } from "./utils";

export const isXScale = (scaleId: Scale["id"]) => scaleId.startsWith("x-");

export const valToPxDistance = (
  frame: PlotDrawFrame,
  val: number,
  scaleId: Scale["id"]
) => {
  const chartArea = frame.chartArea;
  const { min, max } = frame.limits[scaleId];
  const factor =
    (isXScale(scaleId) ? chartArea.width : chartArea.height) / (max - min);
  return val * factor;
};

export const valToPos = (
  frame: PlotDrawFrame,
  val: number,
  scaleId: Scale["id"]
) => {
  const { min } = frame.limits[scaleId];
  const chartArea = frame.chartArea;
  const relativePosition = valToPxDistance(frame, val - min, scaleId);
  if (isXScale(scaleId)) {
    return clamp(
      chartArea.x + relativePosition,
      -10 * chartArea.width,
      10 * chartArea.width
    );
  } else {
    return clamp(
      chartArea.y + chartArea.height - relativePosition,
      -10 * chartArea.height,
      10 * chartArea.height
    );
  }
};

export const pxToValDistance = (
  frame: PlotDrawFrame,
  pxDistance: number,
  scaleId: Scale["id"]
) => {
  const { min, max } = frame.limits[scaleId];
  const chartArea = frame.chartArea;
  const factor =
    (isXScale(scaleId) ? chartArea.width : chartArea.height) / (max - min);
  return pxDistance / factor;
};

export const posToVal = (
  frame: PlotDrawFrame,
  pos: number,
  scaleId: Scale["id"]
) => {
  const { min, max } = frame.limits[scaleId];
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
  ctx.fillStyle = style?.fillStyle ?? "black";
  ctx.font = style?.font ?? "10px sans-serif";
  ctx.textAlign = style?.textAlign ?? "start";
  ctx.direction = style?.direction ?? "inherit";
  ctx.textBaseline = style?.textBaseline ?? "alphabetic";
  ctx.fontKerning = style?.fontKerning ?? "auto";
};

export const normalizePadding = (padding: PlotDrawInputParams["padding"]) => {
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
  frame: PlotDrawFrame,
  toleranceXPx = 100,
  toleranceYPx = Infinity
): (DataPoint | undefined)[] => {
  const { series } = frame.inputParams;
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
