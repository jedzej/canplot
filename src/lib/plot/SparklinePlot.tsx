import { useDrawEffect } from "../frameContext";
import { applyStyles } from "../helpers";

export const SparklinePlot: React.FC<{
  data: Array<{ x: number; y: number }>;
  xScaleId: string;
  yScaleId: string;
  stroked?: boolean;
  style?: Partial<
    {
      fillStyle: CanvasFillStrokeStyles["fillStyle"];
      strokeStyle: CanvasFillStrokeStyles["strokeStyle"];
    } & Pick<
      CanvasPathDrawingStyles,
      "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
    >
  >;
}> = ({ data, stroked, xScaleId, yScaleId, style }) => {
  useDrawEffect(
    "MIDDLE",
    ({ getCtx, clampXPosToChartArea, clampYPosToChartArea, valToPos }) => {
      const drawPoints: Array<{ x: number; y: number }> = [];
      const ctx = getCtx();

      for (const point of data) {
        const x = clampXPosToChartArea(valToPos(point.x, xScaleId));
        const y = clampYPosToChartArea(valToPos(point.y, yScaleId));
        drawPoints.push({ x, y });
      }
      const first = drawPoints.at(0);
      const last = drawPoints.at(-1);

      if (!first || !last) {
        return;
      }
      const scaledZeroY = clampYPosToChartArea(valToPos(0, yScaleId));

      ctx.save();
      ctx.beginPath();
      applyStyles(ctx, style);
      ctx.moveTo(first.x, scaledZeroY);
      for (const point of drawPoints) {
        ctx.lineTo(point.x, point.y);
      }
      ctx.lineTo(last.x, scaledZeroY);
      ctx.closePath();
      ctx.fill();
      if (stroked) {
        ctx.beginPath();
        ctx.moveTo(first.x, first.y);
        for (const point of drawPoints) {
          ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
      }
      ctx.restore();
    },
    [data, stroked, xScaleId, yScaleId, style]
  );
  return null;
};
