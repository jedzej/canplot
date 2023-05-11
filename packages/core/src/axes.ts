import {
  DEFAULT_AXIS_SIZE,
  DEFAULT_LABEL_ALIGN,
  DEFAULT_LABEL_OFFSET,
  DEFAULT_MULTILINE_GAP,
  DEFAULT_POSITION,
  DEFAULT_X_SPLIT_SPACE as DEFAULT_X_SPLIT_SPACE,
  DEFAULT_TICK_SIZE,
  DEFAULT_Y_SPLIT_SPACE,
} from "./defaults";
import {
  applyStyles,
  getScaleLimits,
  isXScale,
  pxToValDistance,
  valToPos,
} from "./helpers";
import {
  Frame,
  PlotAxis,
  PlotAxisGenTicks,
  PlotAxisTickFormat,
  FrameScale,
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
  space,
}: MakeGenTicksDefaultOpts = {}): PlotAxisGenTicks => {
  return ({ frame: frame, scale }) => {
    const limits = getScaleLimits(frame, scale.id);
    const ticks = [];
    const effectiveSpace =
      space ??
      (isXScale(scale.id) ? DEFAULT_X_SPLIT_SPACE : DEFAULT_Y_SPLIT_SPACE);
    const unnormalizedIncr = pxToValDistance(frame, effectiveSpace, scale.id);
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
  scale: FrameScale,
  x: number
) => {
  const { ctx, dpr } = frame;
  const tickSize = axis.tickSize ?? DEFAULT_TICK_SIZE;
  const x0 = x;
  const x1 = isPrimary(axis) ? x - tickSize : x + tickSize;
  const multilineGap = axis.multilineGap ?? DEFAULT_MULTILINE_GAP;

  const ticks =
    (axis.genTicks ?? makeGenTicksDefault({ space: axis.tickSpace }))({
      frame: frame,
      scale,
      axis,
    }) ?? [];

  const labels = (axis.tickFormat ?? tickFormat)({
    frame,
    scale,
    ticks,
  });

  // draw ticks
  ctx.save();
  applyStyles(ctx, { ...axis.axisStyle, ...axis.tickStyle });
  ctx.beginPath();

  for (let i = 0; i < ticks.length; i++) {
    const y = valToPos(frame, ticks[i], scale.id);
    ctx.moveTo(dpr * x0, dpr * y);
    ctx.lineTo(dpr * x1, dpr * y);
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
      ctx.fillText(labelLines[j], dpr * x1, dpr * (y + j * multilineGap));
    }
  }
  ctx.restore();
};

const drawYAxis = (
  { ctx, dpr }: Frame,
  axis: PlotAxis,
  x: number,
  y0: number,
  y1: number
) => {
  ctx.save();
  applyStyles(ctx, axis.axisStyle);
  ctx.beginPath();
  ctx.moveTo(dpr * x, dpr * y0);
  ctx.lineTo(dpr * x, dpr * y1);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

const drawXTicks = (
  frame: Frame,
  axis: PlotAxis,
  scale: FrameScale,
  y: number
) => {
  const { ctx, dpr } = frame;
  const position = axis.position ?? DEFAULT_POSITION;
  const tickSize = axis.tickSize ?? DEFAULT_TICK_SIZE;
  const y0 = y;
  const y1 = position === "primary" ? y + tickSize : y - tickSize;
  const multilineGap = axis.multilineGap ?? DEFAULT_MULTILINE_GAP;

  const ticks =
    (axis.genTicks ?? makeGenTicksDefault())({ frame, scale, axis }) ?? [];

  const labels = (axis.tickFormat ?? tickFormat)({
    frame,
    scale,
    ticks,
  });

  // draw ticks
  ctx.save();
  applyStyles(ctx, { ...axis.axisStyle, ...axis.tickStyle });
  ctx.beginPath();
  for (let i = 0; i < ticks.length; i++) {
    const x = valToPos(frame, ticks[i], scale.id);
    ctx.moveTo(dpr * x, dpr * y0);
    ctx.lineTo(dpr * x, dpr * y1);
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
      ctx.fillText(labelLines[j], dpr * x, dpr * (y1 + j * multilineGap));
    }
  }
  ctx.restore();
};

const drawXLabel = (frame: Frame, axis: PlotAxis, y: number) => {
  if (!axis.label) return;
  const { ctx, dpr, chartArea } = frame;
  ctx.save();
  let xPos: number;
  let textAlign: CanvasTextAlign;
  switch (axis.labelAlign ?? DEFAULT_LABEL_ALIGN) {
    case "start":
      textAlign = "left";
      xPos = chartArea.x;
      break;
    case "end":
      textAlign = "right";
      xPos = chartArea.x + chartArea.width;
      break;
    case "center":
      textAlign = "center";
      xPos = chartArea.x + chartArea.width / 2;
      break;
  }
  applyStyles(ctx, {
    textBaseline: isPrimary(axis) ? "top" : "bottom",
    textAlign,
    ...axis.labelStyle,
  });
  const labelOffset = axis.labelOffset ?? DEFAULT_LABEL_OFFSET;
  const yPos = isPrimary(axis) ? y + labelOffset : y - labelOffset;
  ctx.fillText(axis.label, dpr * xPos, dpr * yPos);
  ctx.restore();
};

const drawXAxis = (
  { ctx, dpr }: Frame,
  axis: PlotAxis,
  y: number,
  x0: number,
  x1: number
) => {
  ctx.save();
  applyStyles(ctx, axis.axisStyle);
  ctx.beginPath();
  ctx.moveTo(dpr * x0, dpr * y);
  ctx.lineTo(dpr * x1, dpr * y);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

const drawYLabel = (frame: Frame, axis: PlotAxis, x: number) => {
  if (!axis.label) return;
  const { ctx, dpr, chartArea } = frame;
  ctx.save();
  let yPos: number;
  let textBaseline: CanvasTextBaseline;
  switch (axis.labelAlign ?? DEFAULT_LABEL_ALIGN) {
    case "start":
      textBaseline = "bottom";
      yPos = chartArea.y + chartArea.height;
      break;
    case "end":
      textBaseline = "top";
      yPos = chartArea.y;
      break;
    case "center":
      textBaseline = "middle";
      yPos = chartArea.y + chartArea.height / 2;
      break;
  }
  applyStyles(ctx, {
    textBaseline,
    textAlign: isPrimary(axis) ? "right" : "left",
    ...axis.labelStyle,
  });
  const labelOffset = axis.labelOffset ?? DEFAULT_LABEL_OFFSET;
  const xPos = isPrimary(axis) ? x - labelOffset : x + labelOffset;
  ctx.fillText(axis.label, dpr * xPos, dpr * yPos);
  ctx.restore();
};

export const drawAxes = (frame: Frame) => {
  const { chartArea, canvasSize, padding, axes, scales } = frame;
  const chartAreaLeft = chartArea.x;
  const chartAreaRight = chartArea.x + chartArea.width;
  const chartAreaTop = chartArea.y;
  const chartAreaBottom = chartArea.y + chartArea.height;
  let currentLeftOffset = padding.left;
  let currentRightOffset = canvasSize.width - padding.right;
  let currentBottomOffset = canvasSize.height - padding.bottom;
  let currentTopOffset = padding.top;

  for (const axis of axes) {
    const scale = scales.find((scale) => scale.id === axis.scaleId);
    if (!scale) {
      continue;
    }
    const size = axis.size ?? DEFAULT_AXIS_SIZE;
    const position = axis.position ?? DEFAULT_POSITION;

    if (isXScale(scale.id)) {
      if (position === "primary") {
        currentBottomOffset -= size;
        drawXAxis(
          frame,
          axis,
          currentBottomOffset,
          chartAreaLeft,
          chartAreaRight
        );
        drawXTicks(frame, axis, scale, currentBottomOffset);
        drawXLabel(frame, axis, currentBottomOffset);
      } else {
        currentTopOffset += size;
        drawXAxis(frame, axis, currentTopOffset, chartAreaLeft, chartAreaRight);
        drawXTicks(frame, axis, scale, currentTopOffset);
        drawXLabel(frame, axis, currentTopOffset);
      }
    } else {
      if (position === "primary") {
        currentLeftOffset += size;
        drawYAxis(
          frame,
          axis,
          currentLeftOffset,
          chartAreaTop,
          chartAreaBottom
        );
        drawYTicks(frame, axis, scale, currentLeftOffset);
        drawYLabel(frame, axis, currentLeftOffset);
      } else {
        currentRightOffset -= size;
        drawYAxis(
          frame,
          axis,
          currentRightOffset,
          chartAreaTop,
          chartAreaBottom
        );
        drawYTicks(frame, axis, scale, currentRightOffset);
        drawYLabel(frame, axis, currentRightOffset);
      }
    }
  }
};
