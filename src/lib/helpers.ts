import type { PlotDrawFrame, PlotDrawScaleConfig, Style } from "./types";
import { clamp } from "./dataUtils";

export const pxToValDistance = (
  frame: PlotDrawFrame,
  pxDistance: number,
  scaleId: string,
  space: "css" | "canvas"
): number | null => {
  const scale = getScale(frame, scaleId);
  if (!scale) {
    return null;
  }
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;
  const factor =
    (scale.origin === "x" ? chartArea.width : chartArea.height) /
    (scale.max - scale.min);
  return pxDistance / factor;
};

export const getScale = (
  frame: PlotDrawFrame,
  scaleId: string
): PlotDrawScaleConfig | null => {
  return frame.scales.find((a) => a.id === scaleId) ?? null;
};

export const applyStyles = (
  ctx: CanvasRenderingContext2D,
  style?: Style
): void => {
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
): number | null => {
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;
  const scale = getScale(frame, scaleId);
  if (!scale) {
    return null;
  }
  const factor =
    (scale.origin === "x" ? chartArea.width : chartArea.height) /
    (scale.max - scale.min);
  return val * factor;
};

export const valToPos = (
  frame: PlotDrawFrame,
  val: number,
  scaleId: string,
  space: "css" | "canvas"
): number | null => {
  const scale = getScale(frame, scaleId);
  if (!scale) {
    return null;
  }
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;
  const relativePosition = valToPxDistance(
    frame,
    val - scale.min,
    scaleId,
    space
  );
  if (relativePosition === null) {
    return null;
  }
  const result =
    scale.origin === "x"
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

export const clampXPosToChartArea = <T extends number | null>(
  frame: PlotDrawFrame,
  value: T,
  space: "css" | "canvas"
): T | number => {
  if (value === null) {
    return null as T;
  }
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;

  return clamp(value, chartArea.x, chartArea.x + chartArea.width);
};

export const clampYPosToChartArea = <T extends number | null>(
  frame: PlotDrawFrame,
  value: T,
  space: "css" | "canvas"
): T | number => {
  if (value === null) {
    return null as T;
  }
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;
  return clamp(value, chartArea.y, chartArea.y + chartArea.height);
};

export const valFits = (
  frame: PlotDrawFrame,
  value: number | null,
  scaleId: string
): boolean => {
  if (value === null) {
    return false;
  }
  const scale = getScale(frame, scaleId);
  if (!scale) {
    return false;
  }
  return value >= scale.min && value <= scale.max;
};

export const posToVal = (
  frame: PlotDrawFrame,
  pos: number,
  scaleId: string,
  space: "css" | "canvas"
): number | null => {
  const scale = getScale(frame, scaleId);
  if (!scale) {
    return null;
  }
  const chartArea =
    space === "canvas" ? frame.chartAreaCanvasPX : frame.chartAreaCSS;

  const relativePosition =
    scale.origin === "x"
      ? (pos - chartArea.x) / chartArea.width
      : (chartArea.height - pos + chartArea.y) / chartArea.height;
  return scale.min + relativePosition * (scale.max - scale.min);
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
