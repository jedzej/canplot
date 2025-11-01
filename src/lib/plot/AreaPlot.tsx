import { useFrame } from "../frameContext";
import { applyStyles } from "../helpers";

export const AreaPlot: React.FC<{
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
}> = ({ data, xScaleId, yScaleId, style }) => {
  useFrame(
    ({ frame, clampXPosToChartArea, clampYPosToChartArea, valToPos }) => {
      const drawPoints: Array<{ x: number; y: number }> = [];
      for (const datapoint of data) {
        const x = clampXPosToChartArea(valToPos(datapoint.x, xScaleId));
        const y0 = clampYPosToChartArea(valToPos(datapoint.y[0], yScaleId));
        const y1 = clampYPosToChartArea(valToPos(datapoint.y[1], yScaleId));
        drawPoints.push({ x, y: y0 });
        drawPoints.unshift({ x, y: y1 });
      }

      if (drawPoints.length > 0) {
        frame.ctx.save();
        frame.ctx.beginPath();
        applyStyles(frame.ctx, style);
        frame.ctx.moveTo(drawPoints[0].x, drawPoints[0].y);
        for (const point of drawPoints) {
          frame.ctx.lineTo(point.x, point.y);
        }
        frame.ctx.closePath();
        frame.ctx.fill();
        frame.ctx.restore();
      }
    }
  );
  return null;
};
