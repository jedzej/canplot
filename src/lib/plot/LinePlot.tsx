import { useFrame } from "../frameContext";
import {
  applyStyles,
  clampXPosToChartArea,
  clampYPosToChartArea,
  valToPos,
} from "../helpers";

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
  useFrame((frame) => {
    frame.ctx.save();
    frame.ctx.beginPath();
    applyStyles(frame.ctx, style);
    for (const point of data) {
      const x = clampXPosToChartArea(
        frame,
        valToPos(frame, point.x, xScaleId, "canvas"),
        "canvas"
      );
      const y = clampYPosToChartArea(
        frame,
        valToPos(frame, point.y, yScaleId, "canvas"),
        "canvas"
      );
      frame.ctx.lineTo(x, y);
    }
    frame.ctx.stroke();
    frame.ctx.restore();
  });
  return null;
};
