import { applyStyles, valToPos } from "../helpers";
import { Plotter, Style } from "../types";

export type ScatterPlotterOpts = {
  style?: Style;
  radius?: number;
};

export const scatterPlotter = ({
  style,
  radius = 5,
}: ScatterPlotterOpts = {}): Plotter => {
  return (drawContext, singleSeries, xScale, yScale) => {
    const ctx = drawContext.ctx;
    ctx.save();
    ctx.beginPath();
    applyStyles(ctx, style);

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
};
