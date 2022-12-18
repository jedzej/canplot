import { applyStyles, valToPos, valToPxDistance } from "../helpers";
import { DrawContext, Plotter, Scale, SeriesBase, Style } from "../types";

export type LineExtras = {
  plotter: Plotter;
  style?: Style;
  showDistrinct?: (
    drawContext: DrawContext<LineExtras>,
    idx: number,
    series: SeriesBase<LineExtras>,
    scale: Scale
  ) => boolean;
  radius?: number;
  distinctDistance?: number;
  gapDistance?: number;
};

const showDistrinctDefault: LineExtras["showDistrinct"] = (
  drawContext,
  idx,
  series,
  scale
) => {
  const distinctDistance = series.plotterOptions.distinctDistance ?? 50;
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

export const linePlotter: Plotter<LineExtras> = (
  drawContext,
  singleSeries,
  xScale,
  yScale
) => {
  const ctx = drawContext.ctx;
  const length = Math.min(singleSeries.x.length, singleSeries.y.length);
  const x0 = valToPos(drawContext, singleSeries.x[0]!, xScale);
  const y0 = valToPos(drawContext, singleSeries.y[0]!, yScale);
  ctx.save();
  ctx.beginPath();
  applyStyles(ctx, singleSeries.plotterOptions.style);

  const showDistrinct =
    singleSeries.plotterOptions.showDistrinct ?? showDistrinctDefault;
  const radius = singleSeries.plotterOptions.radius ?? 3;
  const gapDistance = singleSeries.plotterOptions.gapDistance ?? Infinity;

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
  for (let i = 0; i < length; i++) {
    if (showDistrinct(drawContext, i, singleSeries, xScale)) {
      const x = singleSeries.x[i];
      const y = singleSeries.y[i];
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
