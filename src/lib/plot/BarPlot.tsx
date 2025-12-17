import React from "react";
import { useDrawEffect } from "../frameContext";
import type { CANPLOT_LAYER } from "../FrameDrawer";
import { applyStyles, deepEqual } from "../helpers";

const BarPlotImpl: React.FC<{
  layer?: number | keyof typeof CANPLOT_LAYER;
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
  layer = "MIDDLE",
}) => {
  useDrawEffect(
    layer,
    ({
      ctx,
      valToPxDistance,
      valToPos,
      clampXPosToChartArea,
      clampYPosToChartArea,
    }) => {
      if (data.length === 0) return;

      ctx.save();
      applyStyles(ctx, style);

      const barWidth = valToPxDistance(barWidthRaw, xScaleId);
      ctx.beginPath();
      for (const datapoint of data) {
        const xCenter = valToPos(datapoint.x, xScaleId);

        // Adjust x position based on bar position
        const x = xCenter - barWidth / 2 + xPositionOffset * barWidth;

        const yBottom = clampYPosToChartArea(valToPos(0, yScaleId));
        const yTop = clampYPosToChartArea(valToPos(datapoint.y, yScaleId));

        const barHeight = yBottom - yTop;

        const compensatedX = clampXPosToChartArea(x);
        const compensatedWidth =
          clampXPosToChartArea(x + barWidth) - compensatedX;

        if (radius) {
          ctx.roundRect(
            compensatedX,
            yTop,
            compensatedWidth,
            barHeight,
            radius
          );
        } else {
          ctx.rect(compensatedX, yTop, compensatedWidth, barHeight);
        }
      }
      ctx.closePath();
      ctx.fill();
      if (style?.strokeStyle) {
        ctx.stroke();
      }

      ctx.restore();
    },
    [data, xScaleId, yScaleId, style, barWidthRaw, xPositionOffset, radius]
  );
  return null;
};

export const BarPlot = React.memo(BarPlotImpl, deepEqual);
