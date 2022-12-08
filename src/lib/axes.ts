import { isXScale, valToPos } from "./helpers";
import { DrawContext, PlotAxis, Scale, SeriesBase } from "./types";

const applyAxisStyles = (ctx: CanvasRenderingContext2D, axis: PlotAxis) => {
  ctx.lineCap = axis.style?.line?.lineCap ?? "butt";
  ctx.lineDashOffset = axis.style?.line?.lineDashOffset ?? 0;
  ctx.lineJoin = axis.style?.line?.lineJoin ?? "miter";
  ctx.lineWidth = axis.style?.line?.lineWidth ?? 1;
  ctx.miterLimit = axis.style?.line?.miterLimit ?? 10;
  ctx.strokeStyle = axis.style?.strokeFill?.strokeStyle ?? "black";
  ctx.fillStyle = axis.style?.strokeFill?.fillStyle ?? "black";
};

const genTicksDefault = <S extends SeriesBase = SeriesBase>(
  drawContext: DrawContext<S>,
  scale: Scale
) => {
  if (scale.limits.autorange) {
    return [];
  }
  return [1, 2, 3, 4, 5];
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
  applyAxisStyles(ctx, axis);
  ctx.beginPath();
  for (const tick of (axis.genTicks ?? genTicksDefault)(drawContext, scale) ??
    []) {
    const y = valToPos(drawContext, tick, scale);
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(`${tick}`, x1, y);
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
  applyAxisStyles(ctx, axis);
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
  applyAxisStyles(ctx, axis);
  ctx.beginPath();
  for (const tick of (axis.genTicks ?? genTicksDefault)(drawContext, scale) ??
    []) {
    const x = valToPos(drawContext, tick, scale);
    ctx.moveTo(x, y0);
    ctx.lineTo(x, y1);
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(`${tick}`, x, y1);
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
  applyAxisStyles(ctx, axis);
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

    if (isXScale(scale)) {
      if (axis.position === "primary") {
        currentBottomOffset -= axis.size;
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
        currentTopOffset += axis.size;
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
      if (axis.position === "primary") {
        currentLeftOffset += axis.size;
        drawYAxis(ctx, axis, currentLeftOffset, chartAreaTop, chartAreaBottom);
        drawYTicks(
          drawContext,
          axis,
          scale,
          currentLeftOffset,
          currentLeftOffset - 6
        );
      } else {
        currentRightOffset -= axis.size;
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
