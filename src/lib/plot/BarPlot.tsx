import { useFrame } from "../frameContext";
import { applyStyles } from "../helpers";

export const BarPlot: React.FC<{
  data: Array<{ x: number; y: number }>;
  xPositionOffset: number;
  xScaleId: string;
  yScaleId: string;
  barWidth: number;
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
}> = ({
  data,
  xScaleId,
  yScaleId,
  style,
  barWidth: barWidthRaw,
  xPositionOffset,
  radius,
}) => {
  useFrame(
    ({
      frame,
      valToPxDistance,
      valToPos,
      clampXPosToChartArea,
      clampYPosToChartArea,
    }) => {
      if (data.length === 0) return;

      frame.ctx.save();
      applyStyles(frame.ctx, style);

      const barWidth = valToPxDistance(barWidthRaw, xScaleId);
      frame.ctx.beginPath();
      for (const datapoint of data) {
        let xCenter = valToPos(datapoint.x, xScaleId);

        // Adjust x position based on bar position
        const x = xCenter - barWidth / 2 + xPositionOffset * barWidth;

        const yBottom = clampYPosToChartArea(valToPos(0, yScaleId));
        const yTop = clampYPosToChartArea(valToPos(datapoint.y, yScaleId));

        const barHeight = yBottom - yTop;

        const compensatedX = clampXPosToChartArea(x);
        const compensatedWidth =
          clampXPosToChartArea(x + barWidth) - compensatedX;

        if (radius) {
          frame.ctx.roundRect(
            compensatedX,
            yTop,
            compensatedWidth,
            barHeight,
            radius
          );
        } else {
          frame.ctx.rect(compensatedX, yTop, compensatedWidth, barHeight);
        }
      }
      frame.ctx.closePath();
      frame.ctx.fill();
      if (style?.strokeStyle) {
        frame.ctx.stroke();
      }

      frame.ctx.restore();
    }
  );
  return null;
};
