import { scatterPlotter } from "./plotters";
import { DrawContext } from "./types";

export const drawSeries = <SeriesExtras extends Record<string, unknown>>(
  drawContext: DrawContext<SeriesExtras>
) => {
  const { ctx, chartArea, drawConfig } = drawContext;
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
    if (xScale.limits.autorange || yScale.limits.autorange) {
      continue;
    }
    const plotter = series.plotter ?? scatterPlotter;
    plotter(drawContext, series, xScale, yScale);
  }

  drawContext.ctx.restore();
};
