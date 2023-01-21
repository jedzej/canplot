import { applyStyles, valToPos, valToPxDistance } from "../helpers";
import { DrawContext, Plotter, Scale, SeriesBase, Style } from "../types";

export type LinePlotterShowDistinctOpts = {
  drawContext: DrawContext;
  idx: number;
  series: SeriesBase;
  scale: Scale;
  distinctDistance: number;
};

export type LinePlotterOpts = {
  style?: Style;
  showDistrinct?: (opts: LinePlotterShowDistinctOpts) => boolean;
  radius?: number;
  distinctDistance?: number;
  gapDistance?: number;
};

const showDistrinctDefault: LinePlotterOpts["showDistrinct"] = ({
  drawContext,
  idx,
  series,
  scale,
  distinctDistance,
}) => {
  const pointDistance = valToPxDistance(drawContext, series.x[idx], scale);
  for (let i = 1; i < 100; i++) {
    const leftValCandidate = series.x[idx - i];
    if (leftValCandidate !== undefined) {
      const distance = Math.abs(
        valToPxDistance(drawContext, leftValCandidate, scale) - pointDistance
      );
      if (distance <= distinctDistance) {
        return false;
      }
    }
    const rightValCandidate = series.x[idx + i];
    if (rightValCandidate !== undefined) {
      const distance = Math.abs(
        valToPxDistance(drawContext, rightValCandidate, scale) - pointDistance
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
  showDistrinct = showDistrinctDefault,
  radius = 3,
  distinctDistance = 50,
  gapDistance = Infinity,
}: LinePlotterOpts = {}): Plotter => {
  return (drawContext, singleSeries, xScale, yScale) => {
    const ctx = drawContext.ctx;
    const length = Math.min(singleSeries.x.length, singleSeries.y.length);
    const x0 = valToPos(drawContext, singleSeries.x[0]!, xScale);
    const y0 = valToPos(drawContext, singleSeries.y[0]!, yScale);
    ctx.save();
    ctx.beginPath();
    applyStyles(ctx, style);

    ctx.moveTo(x0, y0);
    for (let i = 1; i < length; i++) {
      const x = singleSeries.x[i];
      const y = singleSeries.y[i];
      const posX = valToPos(drawContext, x, xScale);
      const posY = valToPos(drawContext, y, yScale);

      const distance = singleSeries.x[i] - singleSeries.x[i - 1];
      if (distance > gapDistance) {
        ctx.moveTo(posX, posY);
      } else {
        ctx.lineTo(posX, posY);
      }
    }
    ctx.stroke();

    ctx.beginPath();
    for (let idx = 0; idx < length; idx++) {
      if (
        showDistrinct({
          drawContext,
          idx,
          series: singleSeries,
          scale: xScale,
          distinctDistance,
        })
      ) {
        const x = singleSeries.x[idx];
        const y = singleSeries.y[idx];
        const posX = valToPos(drawContext, x, xScale);
        const posY = valToPos(drawContext, y, yScale);
        ctx.moveTo(posX + radius, posY);
        ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
      }
    }

    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };
};
