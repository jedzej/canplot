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
import { genTimeTicks, makeTimeTickFormat } from "./time";
import type { PlotDrawFrame } from "./types";

const acceptable_tick_values: number[] = [];
for (let i = -12; i <= 12; i++) {
  acceptable_tick_values.push(1 * 10 ** i);
  acceptable_tick_values.push(2 * 10 ** i);
  acceptable_tick_values.push(5 * 10 ** i);
}

export const drawAxes = (plotDrawFrame: PlotDrawFrame) => {
  const { ctx, scales } = plotDrawFrame;
  ctx.save();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth = 1;
  ctx.font = "12px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (const scale of scales) {
    if (!scale.axis) continue;
    const genTicks: PlotAxisGenTicks =
      scale.type === "time"
        ? genTimeTicks({
            space: scale.axis.tickSpace,
            timeZone: scale.timeZone,
          })
        : makeGenTicksDefault({ space: scale.axis.tickSpace });
    const formatTicks: PlotAxisTickFormat =
      scale.type === "time"
        ? makeTimeTickFormat({
            timeZone: scale.timeZone,
            showTimezone: scale.axis.showTimezone,
            locale: scale.locale,
          })
        : formatTicksDefault;
    const rect = scale.axis.canvasRect;
    if (scale.origin === "x") {
      if (scale.axis.position === "bottom") {
        ctx.beginPath();
        ctx.moveTo(rect.x, rect.y);
        ctx.lineTo(rect.x + rect.width, rect.y);
        ctx.stroke();
        drawXTicks(plotDrawFrame, scale.id, rect.y, genTicks, formatTicks);
      } else if (scale.axis.position === "top") {
        const y = rect.y + rect.height;
        ctx.beginPath();
        ctx.moveTo(rect.x, y);
        ctx.lineTo(rect.x + rect.width, y);
        ctx.stroke();
        drawXTicks(plotDrawFrame, scale.id, y, genTicks, formatTicks);
      }
    } else {
      if (scale.axis.position === "left") {
        const x = rect.x + rect.width;
        ctx.beginPath();
        ctx.moveTo(x, rect.y);
        ctx.lineTo(x, rect.y + rect.height);
        ctx.stroke();
        drawYTicks(plotDrawFrame, scale.id, x, genTicks, formatTicks);
      } else if (scale.axis.position === "right") {
        ctx.beginPath();
        ctx.moveTo(rect.x, rect.y);
        ctx.lineTo(rect.x, rect.y + rect.height);
        ctx.stroke();
        drawYTicks(plotDrawFrame, scale.id, rect.x, genTicks, formatTicks);
      }
    }
  }

  ctx.restore();
};

const drawYTicks = (
  frame: PlotDrawFrame,
  scaleId: string,
  x: number,
  genTicks: PlotAxisGenTicks,
  formatTicks: PlotAxisTickFormat
) => {
  const { ctx } = frame;
  const axis = frame.scales.find((s) => s.id === scaleId)?.axis;
  if (!axis) return;
  const dpr = window.devicePixelRatio || 1;
  const tickSize = DEFAULT_TICK_SIZE;
  const x0 = x;
  const x1 = axis.position === "left" ? x - tickSize : x + tickSize;
  const multilineGap = DEFAULT_MULTILINE_GAP * dpr;

  const ticks = genTicks({ frame, scaleId }) ?? [];

  const labels = formatTicks({
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

const drawXTicks = (
  frame: PlotDrawFrame,
  scaleId: string,
  y: number,
  genTicks: PlotAxisGenTicks,
  formatTicks: PlotAxisTickFormat
) => {
  const { ctx } = frame;
  const axis = frame.scales.find((s) => s.id === scaleId)?.axis;
  if (!axis) return;
  const dpr = window.devicePixelRatio || 1;
  const tickSize = DEFAULT_TICK_SIZE;
  const y0 = y;
  const y1 = axis.position === "top" ? y - tickSize : y + tickSize;
  const multilineGap = DEFAULT_MULTILINE_GAP * dpr;

  const ticks = genTicks({ frame, scaleId }) ?? [];

  const labels = formatTicks({ frame, scaleId, ticks });

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
    const unnormalizedIncr = pxToValDistance(
      frame,
      effectiveSpace,
      scaleId,
      "canvas"
    );
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

export const formatTicksDefault: PlotAxisTickFormat = ({ ticks }) => {
  const span = Math.max(0, Math.ceil(-Math.log10(ticks[1] - ticks[0])));
  return ticks.map((tick) => tick.toFixed(span));
};
