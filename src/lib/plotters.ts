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
  gapDistance?: number;
};

const showDistrinctDefault: LineExtras["showDistrinct"] = (drawContext, idx, series, scale) => {
  const distinctDistance = series.plotterOptions.distinctDistance ?? 50
  const pointDistance = valToPxDistance(drawContext, series.x[idx], scale);
  for (let i = 1; i < 100; i++) {
    const leftValCandidate = series.x[idx - i];
    if (leftValCandidate !== undefined) {
      const distance = Math.abs(valToPxDistance(drawContext, leftValCandidate, scale) - pointDistance);
      if(distance <= distinctDistance){
        return false;
      }
    }
    const rightValCandidate = series.x[idx + i];
    if (rightValCandidate !== undefined) {
      const distance = Math.abs(valToPxDistance(drawContext, rightValCandidate, scale) - pointDistance);
      if(distance <= distinctDistance){
        return false;
      }
    }
  }
  return true;
}

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
  applyStyles(ctx, singleSeries.style);

  const showDistrinct = singleSeries.plotterOptions.showDistrinct ?? showDistrinctDefault;
  const radius = (singleSeries.plotterOptions.radius ?? 3);
  const gapDistance = singleSeries.plotterOptions.gapDistance ?? Infinity;

  ctx.moveTo(x0, y0);
  for (let i = 1; i < length; i++) {
    const x = singleSeries.x[i];
    const y = singleSeries.y[i];
    const posX = valToPos(drawContext, x, xScale);
    const posY = valToPos(drawContext, y, yScale);

    const distance = singleSeries.x[i] - singleSeries.x[i - 1];
    if (distance > gapDistance) {
      ctx.moveTo(posX, posY)
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
      ctx.moveTo(posX+radius,posY);
      ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
    }
  }

  ctx.fillStyle = "white"
  ctx.fill()
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
