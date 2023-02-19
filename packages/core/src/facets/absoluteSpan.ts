import { applyStyles } from "../helpers";
import { Style } from "../types";
import { PlotDrawFrame } from "../types";

type SpanFacetParams = {
  x: { min: number; max: number };
  y: { min: number; max: number };
  style?: Style;
};

export const absoluteSpanFacet =
  ({ x, y, style }: SpanFacetParams) =>
  ({ ctx }: PlotDrawFrame) => {
    ctx.save();
    applyStyles(ctx, {
      fillStyle: "rgba(0, 0, 0, 0.1)",
      ...style,
    });
    ctx.beginPath();
    ctx.fillRect(x.min, y.min, x.max - x.min, y.max - y.min);
    ctx.restore();
  };
