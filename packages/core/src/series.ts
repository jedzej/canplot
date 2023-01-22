import { PlotDrawFrame } from "./types";

export const drawSeries = (frame: PlotDrawFrame) => {
  const { ctx, chartArea, inputParams: drawConfig } = frame;
  ctx.save();

  const clipPath = new Path2D();
  clipPath.rect(chartArea.x, chartArea.y, chartArea.width, chartArea.height);
  ctx.clip(clipPath);

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
