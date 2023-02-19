import { applyStyles, valToPos } from "../helpers";
import { Style } from "../types";
import { YScaleId } from "../types";
import { XScaleId } from "../types";
import { PlotDrawFrame } from "../types";

type XSpan = {
  scaleId: XScaleId;
  min?: number;
  max?: number;
};

type YSpan = {
  scaleId: YScaleId;
  min?: number;
  max?: number;
};

type SpanFacetParams = {
  frame: PlotDrawFrame;
  x?: XSpan;
  y?: YSpan;
  style?: Style;
};

export const scaledSpanFacet =
  ({ x, y, style }: SpanFacetParams) =>
  (frame: PlotDrawFrame) => {
    const { ctx, chartArea } = frame;
    let x0 = chartArea.x;
    let x1 = chartArea.x + chartArea.width;
    let y0 = chartArea.y;
    let y1 = chartArea.y + chartArea.height;

    if (x) {
      if (typeof x.min === "number") {
        x0 = Math.ceil(valToPos(frame, x.min, x.scaleId));
      }
      if (typeof x.max === "number") {
        x1 = Math.ceil(valToPos(frame, x.max, x.scaleId));
      }
    }
    if (y) {
      if (typeof y.min === "number") {
        y0 = Math.ceil(valToPos(frame, y.min, y.scaleId));
      }
      if (typeof y.max === "number") {
        y1 = Math.ceil(valToPos(frame, y.max, y.scaleId));
      }
    }
    ctx.save();
    applyStyles(ctx, {
      fillStyle: "rgba(0, 0, 0, 0.1)",
      ...style,
    });
    ctx.beginPath();
    ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    ctx.restore();
  };
