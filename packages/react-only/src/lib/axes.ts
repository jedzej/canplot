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
import type { PlotAxis, PlotDrawFrame, PlotScaleDrawConfig } from "./types";

const acceptable_tick_values: number[] = [];
for (let i = -12; i <= 12; i++) {
  acceptable_tick_values.push(1 * 10 ** i);
  acceptable_tick_values.push(2 * 10 ** i);
  acceptable_tick_values.push(5 * 10 ** i);
}

export const drawAxes = (plotDrawFrame: PlotDrawFrame) => {
  const { ctx, chartArea, scales } = plotDrawFrame;
  ctx.save();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth = 1;
  ctx.font = "12px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  let currentLeftOffset = plotDrawFrame.padding.left;
  let currentRightOffset =
    plotDrawFrame.canvasSize.width - plotDrawFrame.padding.right;
  let currentBottomOffset =
    plotDrawFrame.canvasSize.height - plotDrawFrame.padding.bottom;
  let currentTopOffset = plotDrawFrame.padding.top;
  for (const scale of scales) {
    if (!scale.axis) continue;
    if (scale.origin === "x") {
      if (scale.axis.position === "bottom") {
        // Draw x axis at bottom
        ctx.beginPath();
        ctx.moveTo(chartArea.x, chartArea.y + chartArea.height);
        ctx.lineTo(
          chartArea.x + chartArea.width,
          chartArea.y + chartArea.height
        );
        ctx.stroke();
        // Draw ticks
        const [min, max] = scale.minmax;
        const range = max - min;
        const numTicks = 10;
        for (let i = 0; i <= numTicks; i++) {
          const value = min + (i * range) / numTicks;
          const x = chartArea.x + (i * chartArea.width) / numTicks;
          const y = chartArea.y + chartArea.height;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + 5);
          ctx.stroke();
          ctx.fillText(value.toFixed(0), x, y + 15);
        }
      } else if (scale.axis.position === "top") {
        // Draw x axis at top
        ctx.beginPath();
        ctx.moveTo(chartArea.x, chartArea.y);
        ctx.lineTo(chartArea.x + chartArea.width, chartArea.y);
        ctx.stroke();
        // Draw ticks
        const [min, max] = scale.minmax;
        const range = max - min;
        const numTicks = 10;
        for (let i = 0; i <= numTicks; i++) {
          const value = min + (i * range) / numTicks;
          const x = chartArea.x + (i * chartArea.width) / numTicks;
          const y = chartArea.y;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y - 5);
          ctx.stroke();
          ctx.fillText(value.toFixed(0), x, y - 15);
        }
      }
    } else {
      if (scale.axis.position === "left") {
        currentLeftOffset += scale.axis.size;
        // Draw y axis at left
        ctx.beginPath();
        ctx.moveTo(currentLeftOffset, chartArea.y);
        ctx.lineTo(currentLeftOffset, chartArea.y + chartArea.height);
        ctx.stroke();
        drawYTicks(plotDrawFrame, scale.id, currentLeftOffset);
      } else if (scale.axis.position === "right") {
        currentRightOffset -= scale.axis.size;
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
  const { ctx, dpr } = frame;
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
  applyStyles(ctx, {});
  ctx.beginPath();

  for (let i = 0; i < ticks.length; i++) {
    const y = valToPos(frame, ticks[i], scaleId);
    ctx.moveTo(dpr * x0, dpr * y);
    ctx.lineTo(dpr * x1, dpr * y);
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
    const y = valToPos(frame, ticks[i], scaleId);
    const labelLines = labels[i].split("\n");
    for (let j = 0; j < labelLines.length; j++) {
      ctx.fillText(labelLines[j], dpr * x1, dpr * (y + j * multilineGap));
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
    const effectiveSpace =
      space ??
      (isXScale(frame, scaleId)
        ? DEFAULT_X_SPLIT_SPACE
        : DEFAULT_Y_SPLIT_SPACE);
    const unnormalizedIncr = pxToValDistance(frame, effectiveSpace, scaleId);
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
