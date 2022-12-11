import { applyStyles, valToPos, valToPxDistance } from "./helpers";
import { DrawContext, Plotter, Scale, SeriesBase } from "./types";

export type ScatterExtras = {
  plotter: Plotter;
  radius?: number;
};

export const scatterPlotter: Plotter<ScatterExtras> = (
  drawContext,
  singleSeries,
  xScale,
  yScale
) => {
  const ctx = drawContext.ctx;
  ctx.save();
  ctx.beginPath();
  applyStyles(ctx, singleSeries.style);
  const radius = singleSeries.plotterOptions.radius ?? 5;

  for (let i = 0; i < singleSeries.x.length; i++) {
    const x = singleSeries.x[i];
    const y = singleSeries.y[i];
    if (x === undefined || y === undefined) {
      continue;
    }
    const xPos = valToPos(drawContext, x, xScale);
    const yPos = valToPos(drawContext, y, yScale);
    ctx.moveTo(xPos + radius, yPos);
    ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

export type LineExtras = {
  plotter: Plotter;
  showDistrinct?: (drawContext: DrawContext<LineExtras>, idx: number, series: SeriesBase<LineExtras>, scale: Scale) => boolean;
  radius?: number;
  distinctDistance?: number;
};

const showDistrinctDefault: LineExtras["showDistrinct"] = (drawContext, idx, series, scale) => {
  const distinctDistance = series.plotterOptions.distinctDistance ?? 50
  let closestNeighborVal: number | undefined;
  for (let i = 1; i < 100; i++) {
    const leftValCandidate = series.x[idx - i];
    if (leftValCandidate !== undefined) {
      closestNeighborVal = leftValCandidate;
      break;
    }
    const rightValCandidate = series.x[idx + i];
    if (rightValCandidate !== undefined) {
      closestNeighborVal = rightValCandidate;
      break;
    }
  }
  if (closestNeighborVal === undefined) {
    return true;
  }
  if (Math.abs(valToPxDistance(drawContext, closestNeighborVal, scale) - valToPxDistance(drawContext, series.x[idx], scale)) > distinctDistance) {
    return true;
  }
  return false;
}

export const linePlotter: Plotter<LineExtras> = (
  drawContext,
  singleSeries,
  xScale,
  yScale
) => {
  const ctx = drawContext.ctx;
  let firstPoint = 0;
  const length = Math.min(singleSeries.x.length, singleSeries.y.length);
  while (
    singleSeries.x[firstPoint] === undefined ||
    singleSeries.y[firstPoint] === undefined
  ) {
    firstPoint++;
    if (firstPoint >= length) {
      return;
    }
  }
  const x0 = valToPos(drawContext, singleSeries.x[firstPoint]!, xScale);
  const y0 = valToPos(drawContext, singleSeries.y[firstPoint]!, yScale);
  ctx.save();
  ctx.beginPath();
  applyStyles(ctx, singleSeries.style);

  const showDistrinct = singleSeries.plotterOptions.showDistrinct ?? showDistrinctDefault;
  const radius = singleSeries.plotterOptions.radius ?? 2;

  ctx.moveTo(x0, y0);
  for (let i = 1; i < length; i++) {
    const x = singleSeries.x[i];
    const y = singleSeries.y[i];
    if (x === undefined || y === undefined) {
      continue;
    }
    const posX = valToPos(drawContext, x, xScale);
    const posY = valToPos(drawContext, y, yScale);

    ctx.lineTo(posX, posY);
    if (showDistrinct(drawContext, i, singleSeries, xScale)) {
      ctx.arc(posX + radius, posY, radius, 0, 2 * Math.PI);
    }
  }

  ctx.stroke();
  ctx.restore();
};

export type HeatmapExtras = {
  type: "heatmap";
  plotter: typeof heatmapPlotter;
  z: number[];
  tileX: number;
  tileY: number;
};

export const heatmapPlotter: Plotter<HeatmapExtras> = (
  drawContext,
  series,
  xScale,
  yScale
) => {
  const maxZ = Math.max(...series.plotterOptions.z);
  const minZ = Math.min(...series.plotterOptions.z);
  const normalizedZ = series.plotterOptions.z.map(
    (v) => (v - minZ) / (maxZ - minZ)
  );
  const tileXPx =
    Math.floor(
      valToPxDistance(drawContext, series.plotterOptions.tileX, xScale)
    ) + 1;
  const tileYPx =
    Math.floor(
      valToPxDistance(drawContext, series.plotterOptions.tileY, yScale)
    ) + 1;
  for (let i = 0; i < series.x.length; i++) {
    const x = series.x[i];
    const y = series.y[i];
    const z = normalizedZ[i];

    if (x === undefined || y === undefined || z === undefined) {
      continue;
    }

    const imageData = drawContext.ctx.createImageData(tileXPx, tileYPx);
    for (let j = 0; j < imageData.data.length; j += 4) {
      imageData.data[j] = z * 255;
      imageData.data[j + 1] = 0;
      imageData.data[j + 2] = (1 - z) * 255;
      imageData.data[j + 3] = 255;
    }
    drawContext.ctx.putImageData(
      imageData,
      Math.round(valToPos(drawContext, x, xScale)),
      Math.round(valToPos(drawContext, y, yScale) - tileYPx)
    );
  }
};
