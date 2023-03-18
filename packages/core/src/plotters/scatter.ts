import { applyStyles, valToPos } from "../helpers";
import { Plotter, Style } from "../types";

export type ScatterPlotterOpts = {
  style?: Style;
  radius?: number;
};

export const scatterPlotter = ({
  style,
  radius = 3,
}: ScatterPlotterOpts = {}): Plotter => {
  return function scatterPlotterImpl(frame, singleSeries, xScale, yScale) {
    const { ctx, dpr } = frame;
    ctx.save();
    ctx.beginPath();
    applyStyles(ctx, style);

    for (let i = 0; i < singleSeries.x.length; i++) {
      const x = singleSeries.x[i];
      const y = singleSeries.y[i];
      if (x === undefined || y === undefined) {
        continue;
      }
      const xPos = valToPos(frame, x, xScale.id);
      const yPos = valToPos(frame, y, yScale.id);
      ctx.moveTo(dpr * (xPos + radius), dpr * yPos);
      ctx.arc(dpr * xPos, dpr * yPos, dpr * radius, 0, 2 * Math.PI);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  };
};
