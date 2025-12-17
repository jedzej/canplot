import React from "react";
import { useDrawEffect } from "../frameContext";
import type { CANPLOT_LAYER } from "../FrameDrawer";
import { applyStyles, deepEqual } from "../helpers";

const AreaPlotImpl: React.FC<{
  layer?: number | keyof typeof CANPLOT_LAYER;
  data: Array<{ x: number; y: [number, number] }>;
  xScaleId: string;
  yScaleId: string;
  style?: Partial<
    {
      fillStyle: CanvasFillStrokeStyles["fillStyle"];
      strokeStyle: CanvasFillStrokeStyles["strokeStyle"];
    } & Pick<
      CanvasPathDrawingStyles,
      "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
    >
  >;
}> = ({ layer = "MIDDLE", data, xScaleId, yScaleId, style }) => {
  useDrawEffect(
    layer,
    ({ ctx, clampXPosToChartArea, clampYPosToChartArea, valToPos }) => {
      const drawPoints: Array<{ x: number; y: number }> = [];
      for (const datapoint of data) {
        // x
        const x = clampXPosToChartArea(valToPos(datapoint.x, xScaleId));
        if (x === null) {
          continue;
        }

        // y0
        const y0 = clampYPosToChartArea(valToPos(datapoint.y[0], yScaleId));
        if (y0 === null) {
          continue;
        }

        // y1
        const y1 = clampYPosToChartArea(valToPos(datapoint.y[1], yScaleId));
        if (y1 === null) {
          continue;
        }

        drawPoints.push({ x, y: y0 });
        drawPoints.unshift({ x, y: y1 });
      }
      const firstPoint = drawPoints[0];
      if (firstPoint) {
        ctx.save();
        ctx.beginPath();
        applyStyles(ctx, style);
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const point of drawPoints) {
          ctx.lineTo(point.x, point.y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
    [data, xScaleId, yScaleId, style]
  );
  return null;
};

export const AreaPlot = React.memo(AreaPlotImpl, deepEqual);
