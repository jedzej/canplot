import type { PlotDrawFrame } from "./types";

export const drawSeries = (plotDrawFrame: PlotDrawFrame) => {
  const {
    ctx,
    scales,
    series,
    data,
  } = plotDrawFrame;
  ctx.save();

  for (const s of series) {
    const xScale = scales.find((sc) => sc.id === s.xScaleId);
    const yScale = scales.find((sc) => sc.id === s.yScaleId);
    if (!xScale || !yScale) continue;
    const seriesData = data[s.id];
    if (!seriesData) continue;
    s.plotter(plotDrawFrame, s, xScale, yScale);
  }

  ctx.restore();
};
