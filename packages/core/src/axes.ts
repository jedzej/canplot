import {
  DEFAULT_AXIS_SIZE,
  DEFAULT_LABEL_OFFSET,
  DEFAULT_POSITION,
  DEFAULT_SPLIT_SPACE,
} from "./defaults";
import { applyStyles, isXScale, pxToValDistance, valToPos } from "./helpers";
import {
  PlotDrawFrame,
  PlotAxis,
  PlotAxisGenTicks,
  PlotAxisTickFormat,
  Scale,
} from "./types";

const acceptable: number[] = [];
for (let i = -12; i <= 12; i++) {
  acceptable.push(1 * 10 ** i);
  acceptable.push(2 * 10 ** i);
  acceptable.push(5 * 10 ** i);
}

type MakeGenTicksDefaultOpts = {
  space?: number;
};

export const makeGenTicksDefault = ({
  space = DEFAULT_SPLIT_SPACE,
}: MakeGenTicksDefaultOpts = {}): PlotAxisGenTicks => {
  return ({ frame: frame, scale }) => {
    const limits = frame.limits[scale.id];
    const ticks = [];
    const unnormalizedIncr = pxToValDistance(frame, space, scale);
    const incr = acceptable.find((a) => a > unnormalizedIncr) ?? 1;
    let curr =
      limits.min % incr < Number.EPSILON
        ? limits.min
        : limits.min + incr - (limits.min % incr);
    while (curr <= limits.max) {
      ticks.push(curr);
      curr += incr;
    }

    return ticks;
  };
};

const tickFormat: PlotAxisTickFormat = ({ ticks }) => {
  const span = Math.max(0, Math.ceil(-Math.log10(ticks[1] - ticks[0])));
  return ticks.map((tick) => tick.toFixed(span));
};

const drawYTicks = (
  frame: PlotDrawFrame,
  axis: PlotAxis,
  scale: Scale,
  x: number
) => {
  const { ctx } = frame;
  ctx.save();
  applyStyles(ctx, { ...axis.style, ...axis.tickStyle });
  ctx.beginPath();
  const position = axis.position ?? DEFAULT_POSITION;
  const tickSize = axis.tickSize ?? 5;
  const ticks =
    (axis.genTicks ?? makeGenTicksDefault())({ frame: frame, scale, axis }) ??
    [];
  const labels = (axis.tickFormat ?? tickFormat)({
    frame: frame,
    scale,
    ticks,
  });

  const x0 = x;
  const x1 = position === "primary" ? x - tickSize : x + tickSize;
  for (let i = 0; i < ticks.length; i++) {
    const y = valToPos(frame, ticks[i], scale);
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
    ctx.textAlign = position === "primary" ? "right" : "left";
    ctx.textBaseline = "middle";
    const labelLines = labels[i].split("\n");
    for (let j = 0; j < labelLines.length; j++) {
      ctx.fillText(labelLines[j], x1, y + j * 10);
    }
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
  frame: PlotDrawFrame,
  axis: PlotAxis,
  scale: Scale,
  y0: number,
  y1: number
) => {
  const { ctx } = frame;
  ctx.save();
  applyStyles(ctx, axis.style);
  ctx.beginPath();
  const ticks =
    (axis.genTicks ?? makeGenTicksDefault())({ frame: frame, scale, axis }) ??
    [];
  const labels = (axis.tickFormat ?? tickFormat)({
    frame: frame,
    scale,
    ticks,
  });
  for (let i = 0; i < ticks.length; i++) {
    const x = valToPos(frame, ticks[i], scale);
    ctx.moveTo(x, y0);
    ctx.lineTo(x, y1);
    ctx.textAlign = "center";
    ctx.textBaseline =
      (axis.position ?? DEFAULT_POSITION) === "primary" ? "top" : "bottom";
    const labelLines = labels[i].split("\n");
    for (let j = 0; j < labelLines.length; j++) {
      ctx.fillText(labelLines[j], x, y1 + j * 10);
    }
  }

  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};
const drawXLabel = (frame: PlotDrawFrame, axis: PlotAxis, y: number) => {
  if (!axis.label) return;
  const { ctx } = frame;
  ctx.save();
  ctx.textAlign = "center";
  let x: number;
  let textAlign: CanvasTextAlign;
  switch (axis.labelAlign ?? "center") {
    case "left":
      textAlign = "left";
      x = frame.chartArea.x;
      break;
    case "right":
      textAlign = "right";
      x = frame.chartArea.x + frame.chartArea.width;
      break;
    case "center":
      textAlign = "center";
      x = frame.chartArea.x + frame.chartArea.width / 2;
      break;
  }
  ctx.textBaseline = "top";
  applyStyles(ctx, { textBaseline: "top", textAlign, ...axis.labelStyle });
  ctx.fillText(axis.label, x, y + (axis.labelOffset ?? DEFAULT_LABEL_OFFSET));
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

export const drawAxes = (frame: PlotDrawFrame) => {
  const {
    ctx,
    chartArea,
    inputParams: drawConfig,
    canvasSize,
    padding,
  } = frame;
  const chartAreaLeft = chartArea.x;
  const chartAreaRight = chartArea.x + chartArea.width;
  const chartAreaTop = chartArea.y;
  const chartAreaBottom = chartArea.y + chartArea.height;
  let currentLeftOffset = padding.left;
  let currentRightOffset = canvasSize.width - padding.right;
  let currentBottomOffset = canvasSize.height - padding.bottom;
  let currentTopOffset = padding.top;

  for (const axis of drawConfig.axes) {
    const scale = drawConfig.scales.find((scale) => scale.id === axis.scaleId);
    if (!scale) {
      continue;
    }
    const size = axis.size ?? DEFAULT_AXIS_SIZE;
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
          frame,
          axis,
          scale,
          currentBottomOffset,
          currentBottomOffset + (axis.tickSize ?? 6)
        );
        drawXLabel(frame, axis, currentBottomOffset);
      } else {
        currentTopOffset += size;
        drawXAxis(ctx, axis, currentTopOffset, chartAreaLeft, chartAreaRight);
        drawXTicks(frame, axis, scale, currentTopOffset, currentTopOffset - 6);
      }
    } else {
      if (position === "primary") {
        currentLeftOffset += size;
        drawYAxis(ctx, axis, currentLeftOffset, chartAreaTop, chartAreaBottom);
        drawYTicks(frame, axis, scale, currentLeftOffset);
      } else {
        currentRightOffset -= size;
        drawYAxis(ctx, axis, currentRightOffset, chartAreaTop, chartAreaBottom);
        drawYTicks(frame, axis, scale, currentRightOffset);
      }
    }
  }
};
