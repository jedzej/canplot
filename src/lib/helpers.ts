import { DrawContext, Scale, Style } from "./types";
import { clamp } from "./utils";

export const isXScale = (scale: Scale | Scale["id"]) =>
  typeof scale === "string"
    ? scale.startsWith("x-")
    : scale.id.startsWith("x-");

export const valToPxDistance = (
  drawContext: DrawContext,
  val: number,
  scale: Scale
) => {
  const chartArea = drawContext.chartArea;
  const { min, max } = drawContext.limits[scale.id];
  const factor =
    (isXScale(scale) ? chartArea.width : chartArea.height) / (max - min);
  return val * factor;
};

export const valToPos = (
  drawContext: DrawContext,
  val: number,
  scale: Scale
) => {
  const { min } = drawContext.limits[scale.id];
  const chartArea = drawContext.chartArea;
  const relativePosition = valToPxDistance(drawContext, val - min, scale);
  if (isXScale(scale)) {
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
  drawContext: DrawContext,
  pxDistance: number,
  scale: Scale
) => {
  const { min, max } = drawContext.limits[scale.id];
  const chartArea = drawContext.chartArea;
  const factor =
    (isXScale(scale) ? chartArea.width : chartArea.height) / (max - min);
  return pxDistance / factor;
};

export const posToVal = (
  drawContext: DrawContext,
  pos: number,
  scale: Scale
) => {
  const { min, max } = drawContext.limits[scale.id];
  const relativePosition = pxToValDistance(drawContext, pos, scale);
  return isXScale(scale) ? min + relativePosition : max - relativePosition;
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
