import React from "react";
import { useDrawEffect } from "../frameContext";
import type { CANPLOT_LAYER } from "../FrameDrawer";
import { applyStyles, deepEqual } from "../helpers";

const LinePlotImpl: React.FC<{
  layer?: number | keyof typeof CANPLOT_LAYER;
  data: Array<{ x: number; y: number }>;
  xScaleId: string;
  yScaleId: string;
  globalAlpha?: number;
  style?: Partial<
    {
      lineDash: number[];
      fillStyle: CanvasFillStrokeStyles["fillStyle"];
      strokeStyle: CanvasFillStrokeStyles["strokeStyle"];
    } & Pick<
      CanvasPathDrawingStyles,
      "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
    >
  >;
}> = ({ layer = "MIDDLE", data, xScaleId, yScaleId, style, globalAlpha }) => {
  useDrawEffect(
    layer,
    ({ ctx, clampXPosToChartArea, clampYPosToChartArea, valToPos }) => {
      ctx.save();
      ctx.beginPath();
      applyStyles(ctx, style);
      const oldLineDash = ctx.getLineDash();
      if (style?.lineDash) {
        ctx.setLineDash(style.lineDash);
      }
      if (globalAlpha !== undefined) {
        ctx.globalAlpha = globalAlpha;
      }
      for (const point of data) {
        const x = clampXPosToChartArea(valToPos(point.x, xScaleId, "canvas"));
        const y = clampYPosToChartArea(valToPos(point.y, yScaleId, "canvas"));
        if (x === null || y === null) {
          continue;
        }
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      if (oldLineDash) {
        ctx.setLineDash(oldLineDash);
      }
      ctx.restore();
    },
    [data, xScaleId, yScaleId, style, globalAlpha]
  );
  return null;
};

export const LinePlot = React.memo(LinePlotImpl, deepEqual);
