import { applyStyles, valToPos } from "../helpers";
import { Plotter, Style } from "../types";

export type ScatterExtras = {
  plotter: Plotter;
  style?: Style;
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
  applyStyles(ctx, singleSeries.plotterOptions.style);
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
