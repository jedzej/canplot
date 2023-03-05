import { Frame } from "./types";

export const drawSeries = (frame: Frame) => {
  const { ctx, series } = frame;
  ctx.save();

  for (const singleSeries of series) {
    const xScale = frame.scales.find(
      (scale) => scale.id === singleSeries.xScaleId
    );
    const yScale = frame.scales.find(
      (scale) => scale.id === singleSeries.yScaleId
    );
    if (!xScale || !yScale) {
      continue;
    }
    singleSeries.plotter?.(frame, singleSeries, xScale, yScale);
  }

  frame.ctx.restore();
};
