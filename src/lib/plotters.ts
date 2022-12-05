import { valToPos } from "./helpers";
import { Plotter } from "./types";

export const scatterPlotter: Plotter = (
  drawContext,
  singleSeries,
  xScale,
  yScale
) => {
  const ctx = drawContext.ctx;
  for (let i = 0; i < singleSeries.x.length; i++) {
    const x = singleSeries.x[i];
    const y = singleSeries.y[i];
    if (x === undefined || y === undefined) {
      continue;
    }
    const xPos = valToPos(drawContext, x, xScale);
    const yPos = valToPos(drawContext, y, yScale);
    ctx.moveTo(xPos + 5, yPos);
    ctx.arc(xPos, yPos, 5, 0, 2 * Math.PI);
  }
  ctx.stroke();
};

export const linePlotter: Plotter = (
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
  ctx.moveTo(x0, y0);
  for (let i = 1; i < length; i++) {
    const x = singleSeries.x[i];
    const y = singleSeries.y[i];
    if (x === undefined || y === undefined) {
      continue;
    }
    const xPos = valToPos(drawContext, x, xScale);
    const yPos = valToPos(drawContext, y, yScale);
    ctx.lineTo(xPos, yPos);
  }
  ctx.stroke();
};
