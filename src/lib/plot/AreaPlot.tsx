import { CANPLOT_LAYER, useDrawEffect } from "../frameContext";
import { applyStyles } from "../helpers";

export const AreaPlot: React.FC<{
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
    ({ getCtx, clampXPosToChartArea, clampYPosToChartArea, valToPos }) => {
      const drawPoints: Array<{ x: number; y: number }> = [];
      for (const datapoint of data) {
        const x = clampXPosToChartArea(valToPos(datapoint.x, xScaleId));
        const y0 = clampYPosToChartArea(valToPos(datapoint.y[0], yScaleId));
        const y1 = clampYPosToChartArea(valToPos(datapoint.y[1], yScaleId));
        drawPoints.push({ x, y: y0 });
        drawPoints.unshift({ x, y: y1 });
      }

      const ctx = getCtx();
      if (drawPoints.length > 0) {
        ctx.save();
        ctx.beginPath();
        applyStyles(ctx, style);
        ctx.moveTo(drawPoints[0].x, drawPoints[0].y);
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
