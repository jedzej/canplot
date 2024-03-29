import { applyStyles, valToPos, valToPxDistance } from "../helpers";
import { Frame, Plotter, FrameScale, SeriesBase, Style } from "../types";

export type LinePlotterShowDistinctOpts = {
  frame: Frame;
  idx: number;
  series: SeriesBase;
  scale: FrameScale;
  distinctDistance: number;
};

export type LinePlotterOpts = {
  style?: Style;
  showDistinct?: (opts: LinePlotterShowDistinctOpts) => boolean;
  radius?: number;
  distinctDistance?: number;
  gapDistance?: number;
};

const showDistinctDefault: LinePlotterOpts["showDistinct"] = ({
  frame,
  idx,
  series,
  scale,
  distinctDistance,
}) => {
  const pointDistance = valToPxDistance(frame, series.x[idx], scale.id);
  for (let i = 1; i < 100; i++) {
    const leftValCandidate = series.x[idx - i];
    if (leftValCandidate !== undefined) {
      const distance = Math.abs(
        valToPxDistance(frame, leftValCandidate, scale.id) - pointDistance
      );
      if (distance <= distinctDistance) {
        return false;
      }
    }
    const rightValCandidate = series.x[idx + i];
    if (rightValCandidate !== undefined) {
      const distance = Math.abs(
        valToPxDistance(frame, rightValCandidate, scale.id) - pointDistance
      );
      if (distance <= distinctDistance) {
        return false;
      }
    }
  }
  return true;
};

export const linePlotter = ({
  style,
  showDistinct = showDistinctDefault,
  radius = 3,
  distinctDistance = 50,
  gapDistance = Infinity,
}: LinePlotterOpts = {}): Plotter => {
  return function linePlotterImpl(frame, series, xScale, yScale) {
    const { ctx, dpr, chartArea } = frame;
    const length = Math.min(series.x.length, series.y.length);
    const x0 = valToPos(frame, series.x[0]!, xScale.id);
    const y0 = valToPos(frame, series.y[0]!, yScale.id);

    // line
    ctx.save();
    applyStyles(ctx, style);
    const clipPath = new Path2D();
    clipPath.rect(
      dpr * chartArea.x,
      dpr * chartArea.y,
      dpr * chartArea.width,
      dpr * chartArea.height
    );
    ctx.clip(clipPath);
    ctx.beginPath();

    ctx.moveTo(dpr * x0, dpr * y0);
    for (let i = 1; i < length; i++) {
      const x = series.x[i];
      const y = series.y[i];
      const posX = valToPos(frame, x, xScale.id);
      const posY = valToPos(frame, y, yScale.id);

      const distance = series.x[i] - series.x[i - 1];
      if (distance > gapDistance) {
        ctx.moveTo(dpr * posX, dpr * posY);
      } else {
        ctx.lineTo(dpr * posX, dpr * posY);
      }
    }
    ctx.stroke();
    ctx.restore();

    // distinct points
    ctx.save();
    applyStyles(ctx, style);
    ctx.beginPath();

    for (let idx = 0; idx < length; idx++) {
      if (
        !showDistinct({
          frame,
          idx,
          series: series,
          scale: xScale,
          distinctDistance,
        })
      ) {
        continue;
      }
      const x = series.x[idx];
      const y = series.y[idx];

      if (x < xScale.limits.min || x > xScale.limits.max) {
        continue;
      }
      if (y < yScale.limits.min || y > yScale.limits.max) {
        continue;
      }
      const posX = valToPos(frame, x, xScale.id);
      const posY = valToPos(frame, y, yScale.id);
      ctx.moveTo(dpr * (posX + radius), dpr * posY);
      ctx.arc(dpr * posX, dpr * posY, dpr * radius, 0, 2 * Math.PI);
    }

    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };
};
