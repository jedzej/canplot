import { useDrawEffect } from "../frameContext";
import { applyStyles } from "../helpers";

export const ScatterPlot: React.FC<{
  data: Array<{ x: number; y: number }>;
  xScaleId: string;
  yScaleId: string;
  radius?: number;
  style?: Partial<
    {
      fillStyle: CanvasFillStrokeStyles["fillStyle"];
      strokeStyle: CanvasFillStrokeStyles["strokeStyle"];
    } & Pick<
      CanvasPathDrawingStyles,
      "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
    >
  >;
}> = ({ data, xScaleId, yScaleId, radius = 5, style }) => {
  useDrawEffect(({ getCtx, valToPos, valFits }) => {
    const ctx = getCtx();
    ctx.save();
    ctx.beginPath();
    applyStyles(ctx, style);
    for (const point of data) {
      if (!valFits(point.x, xScaleId) || !valFits(point.y, yScaleId)) {
        continue;
      }
      const x = valToPos(point.x, xScaleId);
      const y = valToPos(point.y, yScaleId);
      ctx.moveTo(x + radius, y);
      ctx.arc(x, y, radius, 0, Math.PI * 2);
    }
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }, [data, xScaleId, yScaleId, radius, style]);
  return null;
};
