import { DrawContext, Scale, SeriesBase } from "./types";
import { clamp } from "./utils";

export const isXScale = (scale: Scale | Scale["id"]) =>
  typeof scale === "string"
    ? scale.startsWith("x-")
    : scale.id.startsWith("x-");

export const valToPxDistance = (
  drawContext: DrawContext<any>,
  val: number,
  scale: Scale
) => {
  if (scale.limits.autorange) {
    return 0;
  }
  const chartArea = drawContext.chartArea;
  const { min, max } = scale.limits.fixed;
  const factor =
    (isXScale(scale) ? chartArea.width : chartArea.height) / (max - min);
  return val * factor;
};

export const valToPos = (
  drawContext: DrawContext<any>,
  val: number,
  scale: Scale
) => {
  if (scale.limits.autorange) {
    return 0;
  }
  const chartArea = drawContext.chartArea;
  const relativePosition = valToPxDistance(
    drawContext,
    val - scale.limits.fixed.min,
    scale
  );
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
  drawContext: DrawContext<any>,
  pxDistance: number,
  scale: Scale
) => {
  if (scale.limits.autorange) {
    return 0;
  }
  const chartArea = drawContext.chartArea;
  const { min, max } = scale.limits.fixed;
  const factor =
    (isXScale(scale) ? chartArea.width : chartArea.height) / (max - min);
  return pxDistance / factor;
};

export const posToVal = (
  drawContext: DrawContext<any>,
  pos: number,
  scale: Scale
) => {
  if (scale.limits.autorange) {
    return 0;
  }
  const relativePosition = pxToValDistance(drawContext, pos, scale);
  return isXScale(scale)
    ? scale.limits.fixed.min + relativePosition
    : scale.limits.fixed.max - relativePosition;
};

export const applyStyles = (
  ctx: CanvasRenderingContext2D,
  style: SeriesBase["style"]
) => {
  ctx.lineCap = style?.line?.lineCap ?? "butt";
  ctx.lineDashOffset = style?.line?.lineDashOffset ?? 0;
  ctx.lineJoin = style?.line?.lineJoin ?? "miter";
  ctx.lineWidth = style?.line?.lineWidth ?? 1;
  ctx.miterLimit = style?.line?.miterLimit ?? 10;
  ctx.strokeStyle = style?.strokeFill?.strokeStyle ?? "black";
  ctx.fillStyle = style?.strokeFill?.fillStyle ?? "black";
};
