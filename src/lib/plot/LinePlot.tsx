import { useFrame } from "../frameContext";
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
  useFrame(
    ({ frame, clampXPosToChartArea, clampYPosToChartArea, valToPos }) => {
      frame.ctx.save();
      frame.ctx.beginPath();
      applyStyles(frame.ctx, style);
      for (const point of data) {
        const x = clampXPosToChartArea(valToPos(point.x, xScaleId));
        const y = clampYPosToChartArea(valToPos(point.y, yScaleId));
        frame.ctx.lineTo(x, y);
      }
      frame.ctx.stroke();
      frame.ctx.restore();
    }
  );
  return null;
};
