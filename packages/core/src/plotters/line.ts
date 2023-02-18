import { applyStyles, valToPos, valToPxDistance } from "../helpers";
import { PlotDrawFrame, Plotter, Scale, SeriesBase, Style } from "../types";

export type LinePlotterShowDistinctOpts = {
  frame: PlotDrawFrame;
  idx: number;
  series: SeriesBase;
  scale: Scale;
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
  return (frame, singleSeries, xScale, yScale) => {
    const ctx = frame.ctx;
    const length = Math.min(singleSeries.x.length, singleSeries.y.length);
    const x0 = valToPos(frame, singleSeries.x[0]!, xScale.id);
    const y0 = valToPos(frame, singleSeries.y[0]!, yScale.id);

    // line
    ctx.save();
    applyStyles(ctx, style);
    const clipPath = new Path2D();
    clipPath.rect(
      frame.chartArea.x,
      frame.chartArea.y,
      frame.chartArea.width,
      frame.chartArea.height
    );
    ctx.clip(clipPath);
    ctx.beginPath();

    ctx.moveTo(x0, y0);
    for (let i = 1; i < length; i++) {
      const x = singleSeries.x[i];
      const y = singleSeries.y[i];
      const posX = valToPos(frame, x, xScale.id);
      const posY = valToPos(frame, y, yScale.id);

      const distance = singleSeries.x[i] - singleSeries.x[i - 1];
      if (distance > gapDistance) {
        ctx.moveTo(posX, posY);
      } else {
        ctx.lineTo(posX, posY);
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
        showDistinct({
          frame,
          idx,
          series: singleSeries,
          scale: xScale,
          distinctDistance,
        })
      ) {
        const x = singleSeries.x[idx];
        const y = singleSeries.y[idx];
        const posX = valToPos(frame, x, xScale.id);
        const posY = valToPos(frame, y, yScale.id);
        ctx.moveTo(posX + radius, posY);
        ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
      }
    }

    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };
};
