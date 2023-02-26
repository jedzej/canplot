import {
  DEFAULT_AXIS_SIZE,
  DEFAULT_LABEL_ALIGN,
  DEFAULT_LABEL_OFFSET,
  DEFAULT_MULTILINE_GAP,
  DEFAULT_POSITION,
  DEFAULT_SPLIT_SPACE,
  DEFAULT_TICK_SIZE,
} from "./defaults";
import { applyStyles, isXScale, pxToValDistance, valToPos } from "./helpers";
import {
  Frame,
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

const isPrimary = (axis: PlotAxis) => {
  return (axis.position ?? DEFAULT_POSITION) === "primary";
};

type MakeGenTicksDefaultOpts = {
  space?: number;
};

export const makeGenTicksDefault = ({
  space = DEFAULT_SPLIT_SPACE,
}: MakeGenTicksDefaultOpts = {}): PlotAxisGenTicks => {
  return ({ frame: frame, scale }) => {
    const limits = frame.scalesLimits[scale.id];
    const ticks = [];
    const unnormalizedIncr = pxToValDistance(frame, space, scale.id);
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
  frame: Frame,
  axis: PlotAxis,
  scale: Scale,
  x: number
) => {
  const { ctx } = frame;
  const tickSize = axis.tickSize ?? DEFAULT_TICK_SIZE;
  const x0 = x;
  const x1 = isPrimary(axis) ? x - tickSize : x + tickSize;
  const multilineGap = axis.multilineGap ?? DEFAULT_MULTILINE_GAP;

  const ticks =
    (axis.genTicks ?? makeGenTicksDefault())({ frame: frame, scale, axis }) ??
    [];

  const labels = (axis.tickFormat ?? tickFormat)({
    frame: frame,
    scale,
    ticks,
  });

  // draw ticks
  ctx.save();
  applyStyles(ctx, { ...axis.axisStyle, ...axis.tickStyle });
  ctx.beginPath();

  for (let i = 0; i < ticks.length; i++) {
    const y = valToPos(frame, ticks[i], scale.id);
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
  }
  ctx.stroke();
  ctx.restore();

  // draw tick labels
  ctx.save();
  applyStyles(ctx, {
    textBaseline: "middle",
    textAlign: isPrimary(axis) ? "right" : "left",
    ...axis.axisStyle,
    ...axis.tickLabelStyle,
  });
  for (let i = 0; i < ticks.length; i++) {
    const y = valToPos(frame, ticks[i], scale.id);
    const labelLines = labels[i].split("\n");
    for (let j = 0; j < labelLines.length; j++) {
      ctx.fillText(labelLines[j], x1, y + j * multilineGap);
    }
  }
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
  applyStyles(ctx, axis.axisStyle);
  ctx.beginPath();
  ctx.moveTo(x, y0);
  ctx.lineTo(x, y1);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

const drawXTicks = (
  frame: Frame,
  axis: PlotAxis,
  scale: Scale,
  y: number
) => {
  const { ctx } = frame;
  const position = axis.position ?? DEFAULT_POSITION;
  const tickSize = axis.tickSize ?? DEFAULT_TICK_SIZE;
  const y0 = y;
  const y1 = position === "primary" ? y + tickSize : y - tickSize;
  const multilineGap = axis.multilineGap ?? DEFAULT_MULTILINE_GAP;

  const ticks =
    (axis.genTicks ?? makeGenTicksDefault())({ frame: frame, scale, axis }) ??
    [];

  const labels = (axis.tickFormat ?? tickFormat)({
    frame: frame,
    scale,
    ticks,
  });

  // draw ticks
  ctx.save();
  applyStyles(ctx, { ...axis.axisStyle, ...axis.tickStyle });
  ctx.beginPath();
  for (let i = 0; i < ticks.length; i++) {
    const x = valToPos(frame, ticks[i], scale.id);
    ctx.moveTo(x, y0);
    ctx.lineTo(x, y1);
  }
  ctx.stroke();
  ctx.restore();

  // draw tick labels
  ctx.save();
  applyStyles(ctx, {
    textBaseline: position === "primary" ? "top" : "bottom",
    textAlign: "center",
    ...axis.axisStyle,
    ...axis.tickLabelStyle,
  });
  for (let i = 0; i < ticks.length; i++) {
    const x = valToPos(frame, ticks[i], scale.id);
    const labelLines = labels[i].split("\n");
    for (let j = 0; j < labelLines.length; j++) {
      ctx.fillText(labelLines[j], x, y1 + j * multilineGap);
    }
  }
  ctx.restore();
};

const drawXLabel = (frame: Frame, axis: PlotAxis, y: number) => {
  if (!axis.label) return;
  const { ctx } = frame;
  ctx.save();
  let xPos: number;
  let textAlign: CanvasTextAlign;
  switch (axis.labelAlign ?? DEFAULT_LABEL_ALIGN) {
    case "start":
      textAlign = "left";
      xPos = frame.chartArea.x;
      break;
    case "end":
      textAlign = "right";
      xPos = frame.chartArea.x + frame.chartArea.width;
      break;
    case "center":
      textAlign = "center";
      xPos = frame.chartArea.x + frame.chartArea.width / 2;
      break;
  }
  applyStyles(ctx, {
    textBaseline: isPrimary(axis) ? "top" : "bottom",
    textAlign,
    ...axis.labelStyle,
  });
  const labelOffset = axis.labelOffset ?? DEFAULT_LABEL_OFFSET;
  const yPos = isPrimary(axis) ? y + labelOffset : y - labelOffset;
  ctx.fillText(axis.label, xPos, yPos);
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
  applyStyles(ctx, axis.axisStyle);
  ctx.beginPath();
  ctx.moveTo(x0, y);
  ctx.lineTo(x1, y);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

const drawYLabel = (frame: Frame, axis: PlotAxis, x: number) => {
  if (!axis.label) return;
  const { ctx } = frame;
  ctx.save();
  let yPos: number;
  let textBaseline: CanvasTextBaseline;
  switch (axis.labelAlign ?? DEFAULT_LABEL_ALIGN) {
    case "start":
      textBaseline = "bottom";
      yPos = frame.chartArea.y + frame.chartArea.height;
      break;
    case "end":
      textBaseline = "top";
      yPos = frame.chartArea.y;
      break;
    case "center":
      textBaseline = "middle";
      yPos = frame.chartArea.y + frame.chartArea.height / 2;
      break;
  }
  applyStyles(ctx, {
    textBaseline,
    textAlign: isPrimary(axis) ? "right" : "left",
    ...axis.labelStyle,
  });
  const labelOffset = axis.labelOffset ?? DEFAULT_LABEL_OFFSET;
  const xPos = isPrimary(axis) ? x - labelOffset : x + labelOffset;
  ctx.fillText(axis.label, xPos, yPos);
  ctx.restore();
};

export const drawAxes = (frame: Frame) => {
  const {
    ctx,
    chartArea,
    scene: drawConfig,
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
    const position = axis.position ?? DEFAULT_POSITION;

    if (isXScale(scale.id)) {
      if (position === "primary") {
        currentBottomOffset -= size;
        drawXAxis(
          ctx,
          axis,
          currentBottomOffset,
          chartAreaLeft,
          chartAreaRight
        );
        drawXTicks(frame, axis, scale, currentBottomOffset);
        drawXLabel(frame, axis, currentBottomOffset);
      } else {
        currentTopOffset += size;
        drawXAxis(ctx, axis, currentTopOffset, chartAreaLeft, chartAreaRight);
        drawXTicks(frame, axis, scale, currentTopOffset);
        drawXLabel(frame, axis, currentTopOffset);
      }
    } else {
      if (position === "primary") {
        currentLeftOffset += size;
        drawYAxis(ctx, axis, currentLeftOffset, chartAreaTop, chartAreaBottom);
        drawYTicks(frame, axis, scale, currentLeftOffset);
        drawYLabel(frame, axis, currentLeftOffset);
      } else {
        currentRightOffset -= size;
        drawYAxis(ctx, axis, currentRightOffset, chartAreaTop, chartAreaBottom);
        drawYTicks(frame, axis, scale, currentRightOffset);
        drawYLabel(frame, axis, currentRightOffset);
      }
    }
  }
};
