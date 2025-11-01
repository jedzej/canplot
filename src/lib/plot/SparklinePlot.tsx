import { useFrame } from "../frameContext";
import {
  applyStyles,
  clampXPosToChartArea,
  clampYPosToChartArea,
  valToPos,
} from "../helpers";

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
  useFrame((frame) => {
    const drawPoints: Array<{ x: number; y: number }> = [];
    const ctx = frame.ctx;

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
      drawPoints.push({ x, y });
    }
    const first = drawPoints.at(0);
    const last = drawPoints.at(-1);

    if (!first || !last) {
      return;
    }
    const scaledZeroY = clampYPosToChartArea(
      frame,
      valToPos(frame, 0, yScaleId, "canvas"),
      "canvas"
    );

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
      ctx.stroke()
    }
    ctx.restore();
  });
  return null;
};
