import { useDrawEffect } from "../frameContext";
import { applyStyles } from "../helpers";

export const LinePlot: React.FC<{
  data: Array<{ x: number; y: number }>;
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
}> = ({ data, xScaleId, yScaleId, style }) => {
  useDrawEffect(
    "MIDDLE",
    ({ getCtx, clampXPosToChartArea, clampYPosToChartArea, valToPos }) => {
      const ctx = getCtx();
      ctx.save();
      ctx.beginPath();
      applyStyles(ctx, style);
      for (const point of data) {
        const x = clampXPosToChartArea(valToPos(point.x, xScaleId));
        const y = clampYPosToChartArea(valToPos(point.y, yScaleId));
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    },
    [data, xScaleId, yScaleId, style]
  );
  return null;
};
