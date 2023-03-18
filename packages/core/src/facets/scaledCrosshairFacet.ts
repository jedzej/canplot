import { applyStyles, valToPos } from "../helpers";
import { Frame, Style, XScaleId, YScaleId } from "../types";

type ScaledCrosshairFacetParams = {
  x?: {
    scaleId: XScaleId;
    value?: number;
  };
  y?: {
    scaleId: YScaleId;
    value?: number;
  };
  style?: Style;
};

export const scaledCrosshairFacet = ({
  x,
  y,
  style,
}: ScaledCrosshairFacetParams) =>
  function scaledCrosshairFacetImpl(frame: Frame) {
    if (x === undefined && y === undefined) return;
    const { ctx, dpr, chartArea } = frame;
    ctx.save();
    applyStyles(ctx, style);
    ctx.beginPath();
    if (x) {
      const xValue = x.value;
      if (typeof xValue === "number") {
        const scaledX = Math.ceil(valToPos(frame, xValue, x.scaleId));
        ctx.moveTo(dpr * scaledX, dpr * chartArea.y);
        ctx.lineTo(dpr * scaledX, dpr * (chartArea.y + chartArea.height));
      }
    }
    if (y) {
      const yValue = y.value;
      if (typeof yValue === "number") {
        ctx.moveTo(dpr * chartArea.x, dpr * yValue);
        ctx.lineTo(dpr * (chartArea.x + chartArea.width), dpr * yValue);
      }
    }
    ctx.stroke();
    ctx.restore();
  };
