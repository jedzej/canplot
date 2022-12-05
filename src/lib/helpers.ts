import { PlotDrawContext, Scale } from "./types";
import { clamp } from "./utils";

export const valToPx = (
  drawContext: PlotDrawContext<any>,
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
  drawContext: PlotDrawContext<any>,
  val: number,
  scale: Scale
) => {
  if (scale.limits.autorange) {
    return 0;
  }
  const chartArea = drawContext.chartArea;
  const isXScale = scale.id.startsWith("x-");
  const relativePosition = valToPx(drawContext, val, scale);
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
