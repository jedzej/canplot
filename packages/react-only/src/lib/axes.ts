import {
  DEFAULT_MULTILINE_GAP,
  DEFAULT_TICK_SIZE,
  DEFAULT_X_SPLIT_SPACE,
  DEFAULT_Y_SPLIT_SPACE,
} from "./defaults";
import {
  applyStyles,
  getScaleLimits,
  isXScale,
  pxToValDistance,
  valToPos,
} from "./helpers";
import type { PlotDrawFrame } from "./types";

const acceptable_tick_values: number[] = [];
for (let i = -12; i <= 12; i++) {
  acceptable_tick_values.push(1 * 10 ** i);
  acceptable_tick_values.push(2 * 10 ** i);
  acceptable_tick_values.push(5 * 10 ** i);
}

export const drawAxes = (plotDrawFrame: PlotDrawFrame) => {
  const { ctx, chartAreaCanvasPX: chartArea, scales } = plotDrawFrame;
  ctx.save();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth = 1;
  ctx.font = "12px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const dpr = window.devicePixelRatio || 1;

  let currentLeftOffset = plotDrawFrame.padding.left * dpr;
  let currentRightOffset =
    plotDrawFrame.ctx.canvas.width - plotDrawFrame.padding.right * dpr;
  let currentBottomOffset =
    plotDrawFrame.ctx.canvas.height - plotDrawFrame.padding.bottom * dpr;
  let currentTopOffset = plotDrawFrame.padding.top * dpr;
  for (const scale of scales) {
    if (!scale.axis) continue;
    if (scale.origin === "x") {
      if (scale.axis.position === "bottom") {
        currentBottomOffset -= scale.axis.size * dpr;
        // Draw x axis at bottom
        ctx.beginPath();
        ctx.moveTo(chartArea.x, chartArea.y + chartArea.height);
        ctx.lineTo(
          chartArea.x + chartArea.width,
          chartArea.y + chartArea.height
        );
        ctx.stroke();
        drawXTicks(plotDrawFrame, scale.id, currentBottomOffset);
      } else if (scale.axis.position === "top") {
        currentTopOffset += scale.axis.size * dpr;
        // Draw x axis at top
        ctx.beginPath();
        ctx.moveTo(chartArea.x, chartArea.y);
        ctx.lineTo(chartArea.x + chartArea.width, chartArea.y);
        ctx.stroke();
        // Draw ticks
        drawXTicks(plotDrawFrame, scale.id, currentTopOffset);
      }
    } else {
      if (scale.axis.position === "left") {
        currentLeftOffset += scale.axis.size * dpr;
        // Draw y axis at left
        ctx.beginPath();
        ctx.moveTo(currentLeftOffset, chartArea.y);
        ctx.lineTo(currentLeftOffset, chartArea.y + chartArea.height);
        ctx.stroke();
        drawYTicks(plotDrawFrame, scale.id, currentLeftOffset);
      } else if (scale.axis.position === "right") {
        currentRightOffset -= scale.axis.size * dpr;
        // Draw y axis at right
        ctx.beginPath();
        ctx.moveTo(currentRightOffset, chartArea.y);
        ctx.lineTo(currentRightOffset, chartArea.y + chartArea.height);
        ctx.stroke();
        drawYTicks(plotDrawFrame, scale.id, currentRightOffset);
      }
    }
  }

  ctx.restore();
};

const drawYTicks = (frame: PlotDrawFrame, scaleId: string, x: number) => {
  const { ctx } = frame;
  const axis = frame.scales.find((s) => s.id === scaleId)?.axis;
  if (!axis) return;
  const tickSize = DEFAULT_TICK_SIZE;
  const x0 = x;
  const x1 = axis.position === "left" ? x - tickSize : x + tickSize;
  const multilineGap = DEFAULT_MULTILINE_GAP;

  const ticks = makeGenTicksDefault()({ frame, scaleId }) ?? [];

  const labels = tickFormat({
    frame,
    scaleId,
    ticks,
  });

  // draw ticks
  ctx.save();
  ctx.fontKerning = "auto";
  applyStyles(ctx, {});
  ctx.beginPath();

  for (let i = 0; i < ticks.length; i++) {
    const y = valToPos(frame, ticks[i], scaleId, "canvas");
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
  }
  ctx.stroke();
  ctx.restore();

  // draw tick labels
  ctx.save();
  applyStyles(ctx, {
    textBaseline: "middle",
    textAlign: axis.position === "left" ? "right" : "left",
    // ...axis.axisStyle,
    // ...axis.tickLabelStyle,
  });
  for (let i = 0; i < ticks.length; i++) {
    const y = valToPos(frame, ticks[i], scaleId, "canvas");
    const labelLines = labels[i].split("\n");
    for (let j = 0; j < labelLines.length; j++) {
      ctx.fillText(` ${labelLines[j]} `, x1, y + j * multilineGap);
    }
  }
  ctx.restore();
};

const drawXTicks = (frame: PlotDrawFrame, scaleId: string, y: number) => {
  const { ctx } = frame;
  const axis = frame.scales.find((s) => s.id === scaleId)?.axis;
  if (!axis) return;
  const dpr = window.devicePixelRatio || 1;
  const tickSize = DEFAULT_TICK_SIZE;
  const y0 = y;
  const y1 = axis.position === "top" ? y - tickSize : y + tickSize;
  const multilineGap = DEFAULT_MULTILINE_GAP;

  const ticks = makeGenTicksDefault()({ frame, scaleId }) ?? [];

  const labels = tickFormat({
    frame,
    scaleId,
    ticks,
  });

  // draw ticks
  ctx.save();
  ctx.fontKerning = "auto";
  applyStyles(ctx, {});
  ctx.beginPath();

  for (let i = 0; i < ticks.length; i++) {
    const x = valToPos(frame, ticks[i], scaleId, "canvas");
    ctx.moveTo(x, y0);
    ctx.lineTo(x, y1);
  }
  ctx.stroke();
  ctx.restore();

  // draw tick labels
  ctx.save();
  applyStyles(ctx, {
    textBaseline: axis.position === "top" ? "bottom" : "top",
    textAlign: "center",
    // ...axis.axisStyle,
    // ...axis.tickLabelStyle,
  });
  for (let i = 0; i < ticks.length; i++) {
    const x = valToPos(frame, ticks[i], scaleId, "canvas");
    const labelLines = labels[i].split("\n");
    for (let j = 0; j < labelLines.length; j++) {
      ctx.fillText(labelLines[j], x, y1 + dpr * 2 + j * multilineGap);
    }
  }
  ctx.restore();
};

export type PlotAxisGenTicksOpts = {
  frame: PlotDrawFrame;
  scaleId: string;
};

export type PlotAxisTickFormatOpts = {
  frame: PlotDrawFrame;
  scaleId: string;
  ticks: number[];
};

export type PlotAxisGenTicks = (opts: PlotAxisGenTicksOpts) => number[];
export type PlotAxisTickFormat = (opts: PlotAxisTickFormatOpts) => string[];

export const makeGenTicksDefault = ({
  space,
}: { space?: number } = {}): PlotAxisGenTicks => {
  return ({ frame: frame, scaleId }) => {
    const [scaleMin, scaleMax] = getScaleLimits(frame, scaleId);
    const ticks = [];
    const dpr = window.devicePixelRatio || 1;
    const effectiveSpace =
      (space ??
        (isXScale(frame, scaleId)
          ? DEFAULT_X_SPLIT_SPACE
          : DEFAULT_Y_SPLIT_SPACE)) * dpr;
    const unnormalizedIncr = pxToValDistance(frame, effectiveSpace, scaleId, "canvas");
    const incr = acceptable_tick_values.find((a) => a > unnormalizedIncr) ?? 1;
    let curr =
      scaleMin % incr < Number.EPSILON
        ? scaleMin
        : scaleMin + incr - (scaleMin % incr);
    while (curr <= scaleMax) {
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
