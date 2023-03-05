import { applyStyles } from "../helpers";
import { Style, Frame } from "../types";

type SpanFacetParams = {
  x?: { min: number; max: number };
  y?: { min: number; max: number };
  style?: Style;
};

export const absoluteSpanFacet =
  ({ x, y, style }: SpanFacetParams) =>
  ({ ctx, chartArea }: Frame) => {
    ctx.save();
    applyStyles(ctx, {
      fillStyle: "rgba(0, 0, 0, 0.1)",
      ...style,
    });
    ctx.beginPath();
    const x0 = x?.min ?? chartArea.x;
    const w = (x?.max ?? chartArea.x + chartArea.width) - x0;
    const y0 = y?.min ?? chartArea.y;
    const h = (y?.max ?? chartArea.y + chartArea.height) - y0;
    ctx.fillRect(x0, y0, w, h);
    ctx.restore();
  };
