import { DrawContext, Scale } from "./types";
import { clamp } from "./utils";

export const valToPxDistance = (
  drawContext: DrawContext<any>,
  val: number,
  scale: Scale
) => {
  if (scale.limits.autorange) {
    return 0;
  }
  const chartArea = drawContext.chartArea;
  const isXScale = scale.id.startsWith("x-");
  const { min, max } = scale.limits.fixed;
  const factor = (isXScale ? chartArea.width : chartArea.height) / (max - min);
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
  const isXScale = scale.id.startsWith("x-");
  const relativePosition = valToPxDistance(drawContext, val, scale);
  if (isXScale) {
    return clamp(
      chartArea.lb.x + relativePosition,
      -10 * chartArea.width,
      10 * chartArea.width
    );
  } else {
    return clamp(
      chartArea.lb.y - relativePosition,
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
  const isXScale = scale.id.startsWith("x-");
  const { min, max } = scale.limits.fixed;
  const factor = (isXScale ? chartArea.width : chartArea.height) / (max - min);
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
  const isXScale = scale.id.startsWith("x-");
  const relativePosition = pxToValDistance(drawContext, pos, scale);
  return isXScale
    ? scale.limits.fixed.min + relativePosition
    : scale.limits.fixed.max - scale.limits.fixed.min - relativePosition;
};
