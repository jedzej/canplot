import { useFrame } from "../frameContext";
import { applyStyles, pointsFit, valToPos } from "../helpers";

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
  useFrame((frame) => {
    frame.ctx.save();
    frame.ctx.beginPath();
    applyStyles(frame.ctx, style);
    for (const point of data) {
      if (
        !pointsFit(frame, point.x, xScaleId) ||
        !pointsFit(frame, point.y, yScaleId)
      )
        continue;
      const x = valToPos(frame, point.x, xScaleId, "canvas");
      const y = valToPos(frame, point.y, yScaleId, "canvas");
      frame.ctx.moveTo(x + radius, y);
      frame.ctx.arc(x, y, radius, 0, Math.PI * 2);
    }
    frame.ctx.stroke();
    frame.ctx.fill();
    frame.ctx.restore();
  });
  return null;
};
