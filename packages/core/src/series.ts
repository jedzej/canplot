import { PlotDrawFrame } from "./types";

export const drawSeries = (frame: PlotDrawFrame) => {
  const { ctx, inputParams: drawConfig } = frame;
  ctx.save();

  for (const series of drawConfig.series) {
    const xScale = drawConfig.scales.find(
      (scale) => scale.id === series.xScaleId
    );
    const yScale = drawConfig.scales.find(
      (scale) => scale.id === series.yScaleId
    );
    if (!xScale || !yScale) {
      continue;
    }
    series.plotter?.(frame, series, xScale, yScale);
  }

  frame.ctx.restore();
};
