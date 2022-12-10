import { applyStyles, isXScale, pxToValDistance, valToPos } from "./helpers";
import { DrawContext, PlotAxis, Scale, SeriesBase } from "./types";

const acceptable: number[] = [];
for (let i = -12; i <= 12; i++) {
  acceptable.push(1 * 10 ** i);
  acceptable.push(2 * 10 ** i);
  acceptable.push(5 * 10 ** i);
}

const genTicksDefault = <S extends SeriesBase = SeriesBase>(
  // @ts-ignore
  drawContext: DrawContext<S>,
  scale: Scale
) => {
  if (scale.limits.autorange) {
    return [];
  }
  const ticks = [];
  const space = 30;
  const unnormmalizedIncr = pxToValDistance(drawContext, space, scale);
  const incr = acceptable.find((a) => a > unnormmalizedIncr) ?? 1;
  let curr =
    scale.limits.fixed.min % incr < Number.EPSILON
      ? scale.limits.fixed.min
      : scale.limits.fixed.min + incr - (scale.limits.fixed.min % incr);
  while (curr <= scale.limits.fixed.max) {
    ticks.push(curr);
    curr += incr;
  }

  return ticks;
};

const tickFormat = (tick: number, ticks: number[], scale: Scale) => {
  if (scale.limits.autorange) {
    return "";
  }
  const span = Math.max(0, Math.ceil(-Math.log10(ticks[1] - ticks[0])));
  return tick.toFixed(span);
};

const drawYTicks = (
  drawContext: DrawContext,
  axis: PlotAxis,
  scale: Scale,
  x0: number,
  x1: number
) => {
  const { ctx } = drawContext;
  ctx.save();
  applyStyles(ctx, axis.style);
  ctx.beginPath();
  const ticks = (axis.genTicks ?? genTicksDefault)(drawContext, scale) ?? [];
  for (const tick of ticks) {
    const y = valToPos(drawContext, tick, scale);
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(`${tickFormat(tick, ticks, scale)}`, x1, y);
  }

  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

const drawYAxis = (
  ctx: CanvasRenderingContext2D,
  axis: PlotAxis,
  x: number,
  y0: number,
  y1: number
) => {
  ctx.save();
  applyStyles(ctx, axis.style);
  ctx.beginPath();
  ctx.moveTo(x, y0);
  ctx.lineTo(x, y1);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

const drawXTicks = (
  drawContext: DrawContext,
  axis: PlotAxis,
  scale: Scale,
  y0: number,
  y1: number
) => {
  const { ctx } = drawContext;
  ctx.save();
  applyStyles(ctx, axis.style);
  ctx.beginPath();
  const ticks = (axis.genTicks ?? genTicksDefault)(drawContext, scale) ?? [];
  for (const tick of ticks) {
    const x = valToPos(drawContext, tick, scale);
    ctx.moveTo(x, y0);
    ctx.lineTo(x, y1);
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(`${tickFormat(tick, ticks, scale)}`, x, y1);
  }

  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

const drawXAxis = (
  ctx: CanvasRenderingContext2D,
  axis: PlotAxis,
  y: number,
  x0: number,
  x1: number
) => {
  ctx.save();
  applyStyles(ctx, axis.style);
  ctx.beginPath();
  ctx.moveTo(x0, y);
  ctx.lineTo(x1, y);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

export const drawAxes = (drawContext: DrawContext) => {
  const { ctx, chartArea, drawConfig, canvasSize, padding } = drawContext;
  const chartAreaLeft = chartArea.x;
  const chartAreaRight = chartArea.x + chartArea.width;
  const chartAreaTop = chartArea.y;
  const chartAreaBottom = chartArea.y + chartArea.height;
  let currentLeftOffset = padding.bottom;
  let currentRightOffset = canvasSize.width - padding.right;
  let currentBottomOffset = canvasSize.height - padding.bottom;
  let currentTopOffset = padding.top;
  for (const axis of drawConfig.axes) {
    const scale = drawConfig.scales.find((scale) => scale.id === axis.scaleId);
    if (!scale) {
      continue;
    }
    const size = axis.size ?? 50;
    const position = axis.position ?? "primary";

    if (isXScale(scale)) {
      if (position === "primary") {
        currentBottomOffset -= size;
        drawXAxis(
          ctx,
          axis,
          currentBottomOffset,
          chartAreaLeft,
          chartAreaRight
        );
        drawXTicks(
          drawContext,
          axis,
          scale,
          currentBottomOffset,
          currentBottomOffset + 6
        );
      } else {
        currentTopOffset += size;
        drawXAxis(ctx, axis, currentTopOffset, chartAreaLeft, chartAreaRight);
        drawXTicks(
          drawContext,
          axis,
          scale,
          currentTopOffset,
          currentTopOffset - 6
        );
      }
    } else {
      if (position === "primary") {
        currentLeftOffset += size;
        drawYAxis(ctx, axis, currentLeftOffset, chartAreaTop, chartAreaBottom);
        drawYTicks(
          drawContext,
          axis,
          scale,
          currentLeftOffset,
          currentLeftOffset - 6
        );
      } else {
        currentRightOffset -= size;
        drawYAxis(ctx, axis, currentRightOffset, chartAreaTop, chartAreaBottom);
        drawYTicks(
          drawContext,
          axis,
          scale,
          currentRightOffset,
          currentRightOffset + 6
        );
      }
    }
  }
};
