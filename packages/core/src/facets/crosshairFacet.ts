import { applyStyles } from "../helpers";
import { Frame, Style } from "../types";

type SpanFacetParams = {
  x?: number;
  y?: number;
  style?: Style;
};

export const crosshairFacet = ({ x, y, style }: SpanFacetParams) =>
  function crosshairFacetImpl(frame: Frame) {
    if (x === undefined && y === undefined) return;
    const { ctx, chartArea } = frame;
    ctx.save();
    applyStyles(ctx, style);
    ctx.beginPath();
    if (typeof x === "number") {
      ctx.moveTo(x, chartArea.y);
      ctx.lineTo(x, chartArea.y + chartArea.height);
    }
    if (typeof y === "number") {
      ctx.moveTo(chartArea.x, y);
      ctx.lineTo(chartArea.x + chartArea.width, y);
    }
    ctx.stroke();
    ctx.restore();
  };
