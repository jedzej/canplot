import type { PlotDrawFrame, Style } from "./types";
import { clamp } from "./dataUtils";

export const pxToValDistance = (
  frame: PlotDrawFrame,
  pxDistance: number,
  scaleId: string,
  space: "css" | "canvas"
) => {
  const { min, max, origin } = getScale(frame, scaleId);
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;
  const factor =
    (origin === "x" ? chartArea.width : chartArea.height) / (max - min);
  return pxDistance / factor;
};

export const getScale = (frame: PlotDrawFrame, scaleId: string) => {
  const scale = frame.scales.find((a) => a.id === scaleId);
  if (!scale) {
    throw new Error(`Scale ${scaleId} not found`);
  }
  return scale;
};

export const applyStyles = (ctx: CanvasRenderingContext2D, style?: Style) => {
  const dpr = window.devicePixelRatio || 1;
  ctx.lineCap = style?.lineCap ?? "butt";
  ctx.lineDashOffset = dpr * (style?.lineDashOffset ?? 0);
  ctx.lineJoin = style?.lineJoin ?? "miter";
  ctx.lineWidth = dpr * (style?.lineWidth ?? 1);
  ctx.miterLimit = dpr * (style?.miterLimit ?? 10);
  ctx.strokeStyle = style?.strokeStyle ?? "black";
  ctx.fillStyle = style?.fillStyle ?? ctx.strokeStyle;
  ctx.font = style?.font ?? `${10 * dpr}px sans-serif`;
  ctx.textAlign = style?.textAlign ?? "start";
  ctx.direction = style?.direction ?? "inherit";
  ctx.textBaseline = style?.textBaseline ?? "alphabetic";
  ctx.fontKerning = style?.fontKerning ?? "auto";
};

export const valToPxDistance = (
  frame: PlotDrawFrame,
  val: number,
  scaleId: string,
  space: "css" | "canvas"
) => {
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;
  const { min, max, origin } = getScale(frame, scaleId);
  const factor =
    (origin === "x" ? chartArea.width : chartArea.height) / (max - min);
  return val * factor;
};

export const valToPos = (
  frame: PlotDrawFrame,
  val: number,
  scaleId: string,
  space: "css" | "canvas"
) => {
  const { min, origin } = getScale(frame, scaleId);
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;
  const relativePosition = valToPxDistance(frame, val - min, scaleId, space);
  const result =
    origin === "x"
      ? clamp(
          chartArea.x + relativePosition,
          chartArea.x - 10 * chartArea.width,
          chartArea.x + 11 * chartArea.width
        )
      : clamp(
          chartArea.y + chartArea.height - relativePosition,
          chartArea.y - 10 * chartArea.height,
          chartArea.y + 11 * chartArea.height
        );
  return result;
};

export const clampUnfit = (
  frame: PlotDrawFrame,
  value: number,
  scaleId: string
) => {
  const { min, max } = getScale(frame, scaleId);
  return clamp(value, min, max);
};

export const clampXPosToChartArea = (
  frame: PlotDrawFrame,
  value: number,
  space: "css" | "canvas"
) => {
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;

  return clamp(value, chartArea.x, chartArea.x + chartArea.width);
};

export const clampYPosToChartArea = (
  frame: PlotDrawFrame,
  value: number,
  space: "css" | "canvas"
) => {
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;
  return clamp(value, chartArea.y, chartArea.y + chartArea.height);
};

export const valFits = (
  frame: PlotDrawFrame,
  value: number,
  scaleId: string
): boolean => {
  const { min, max } = getScale(frame, scaleId);
  return value >= min && value <= max;
};

export const posToVal = (
  frame: PlotDrawFrame,
  pos: number,
  scaleId: string,
  space: "css" | "canvas"
) => {
  const { min, max, origin } = getScale(frame, scaleId);
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;

  const relativePosition =
    origin === "x"
      ? (pos - chartArea.x) / chartArea.width
      : (chartArea.height - pos + chartArea.y) / chartArea.height;
  return min + relativePosition * (max - min);
};

export const deepEqual = <T>(a: T, b: T): boolean => {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (typeof a !== typeof b) return false;

  if (typeof a !== "object") return false;

  if (Array.isArray(a) !== Array.isArray(b)) return false;

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  const keysA = Object.keys(a as object);
  const keysB = Object.keys(b as object);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!deepEqual((a as any)[key], (b as any)[key])) return false;
  }

  return true;
};
