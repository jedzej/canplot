import { applyStyles } from "../helpers";
import { Frame, Style } from "../types";

type SpanFacetParams = {
  x?: number;
  y?: number;
  style?: Style;
};

export const absoluteCrosshairFacet = ({ x, y, style }: SpanFacetParams) =>
  function crosshairFacetImpl(frame: Frame) {
    if (x === undefined && y === undefined) return;
    const { ctx, dpr, chartArea } = frame;
    ctx.save();
    applyStyles(ctx, style);
    ctx.beginPath();
    if (typeof x === "number") {
      ctx.moveTo(dpr * x, dpr * chartArea.y);
      ctx.lineTo(dpr * x, dpr * (chartArea.y + chartArea.height));
    }
    if (typeof y === "number") {
      ctx.moveTo(dpr * chartArea.x, dpr * y);
      ctx.lineTo(dpr * (chartArea.x + chartArea.width), dpr * y);
    }
    ctx.stroke();
    ctx.restore();
  };
