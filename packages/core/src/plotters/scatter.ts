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
  return (frame, singleSeries, xScale, yScale) => {
    const ctx = frame.ctx;
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
      ctx.moveTo(xPos + radius, yPos);
      ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  };
};
