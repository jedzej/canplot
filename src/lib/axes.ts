import { isXScale } from "./helpers";
import { DrawContext, PlotAxis } from "./types";

const applyAxisStyles = (ctx: CanvasRenderingContext2D, axis: PlotAxis) => {
  ctx.lineCap = axis.style?.line?.lineCap ?? "butt";
  ctx.lineDashOffset = axis.style?.line?.lineDashOffset ?? 0;
  ctx.lineJoin = axis.style?.line?.lineJoin ?? "miter";
  ctx.lineWidth = axis.style?.line?.lineWidth ?? 1;
  ctx.miterLimit = axis.style?.line?.miterLimit ?? 10;
  ctx.strokeStyle = axis.style?.strokeFill?.strokeStyle ?? "black";
  ctx.fillStyle = axis.style?.strokeFill?.fillStyle ?? "black";
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

export const drawAxes = <SeriesExtras extends Record<string, unknown>>({
  ctx,
  chartArea,
  drawConfig,
  canvasSize,
  padding,
}: DrawContext<SeriesExtras>) => {
  const chartAreaLeft = chartArea.x;
  const chartAreaRight = chartArea.x + chartArea.width;
  const chartAreaTop = chartArea.y;
  const chartAreaBottom = chartArea.y + chartArea.height;
  let currentLeftOffset = padding.bottom;
  let currentRightOffset = canvasSize.width - padding.right;
  let currentBottomOffset = canvasSize.height - padding.bottom;
  let currentTopOffset = padding.top;
  for (const axis of drawConfig.axes) {
    if (isXScale(axis.scaleId)) {
      if (axis.position === "primary") {
        currentBottomOffset -= axis.size;
        drawXAxis(
          ctx,
          axis,
          currentBottomOffset,
          chartAreaLeft,
          chartAreaRight
        );
      } else {
        currentTopOffset += axis.size;
        drawXAxis(ctx, axis, currentTopOffset, chartAreaLeft, chartAreaRight);
      }
    } else {
      if (axis.position === "primary") {
        currentLeftOffset += axis.size;
        drawYAxis(ctx, axis, currentLeftOffset, chartAreaTop, chartAreaBottom);
      } else {
        currentRightOffset -= axis.size;
        drawYAxis(ctx, axis, currentRightOffset, chartAreaTop, chartAreaBottom);
      }
    }
  }
};
