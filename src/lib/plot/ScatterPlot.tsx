import { CANPLOT_LAYER, useDrawEffect } from "../frameContext";
import { applyStyles } from "../helpers";

export const ScatterPlot: React.FC<{
  layer?: number | keyof typeof CANPLOT_LAYER;
  data: Array<{ x: number; y: number }>;
  xScaleId: string;
  yScaleId: string;
  radius?: number;
  globalAlpha?: number;
  style?: Partial<
    {
      fillStyle: CanvasFillStrokeStyles["fillStyle"];
      strokeStyle: CanvasFillStrokeStyles["strokeStyle"];
    } & Pick<
      CanvasPathDrawingStyles,
      "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
    >
  >;
}> = ({ layer = "MIDDLE", data, xScaleId, yScaleId, radius = 5, style, globalAlpha }) => {
  useDrawEffect(
    layer,
    ({ getCtx, valToPos, valFits }) => {
      const ctx = getCtx();
      ctx.save();
      ctx.beginPath();
      const path = new Path2D();
      applyStyles(ctx, style);
      if (globalAlpha !== undefined) {
        ctx.globalAlpha = globalAlpha;
      }
      for (const point of data) {
        if (!valFits(point.x, xScaleId) || !valFits(point.y, yScaleId)) {
          continue;
        }
        const x = valToPos(point.x, xScaleId);
        const y = valToPos(point.y, yScaleId);
        path.moveTo(x + radius, y);
        path.arc(x, y, radius, 0, Math.PI * 2);
      }
      ctx.fill(path);
      ctx.stroke(path);
      ctx.restore();
    },
    [data, xScaleId, yScaleId, radius, style, globalAlpha]
  );
  return null;
};
