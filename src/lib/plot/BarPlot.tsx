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
      const yBottom = clampYPosToChartArea(
        valToPos(0, yScaleId, "canvas"),
        "canvas",
      );

      if (yBottom === null) {
        return;
      }

      const barWidth = valToPxDistance(barWidthRaw, xScaleId, "canvas") ?? 0;

      const points: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
      }> = [];
      for (const datapoint of data) {
        const xCenter = valToPos(datapoint.x, xScaleId, "canvas");

        if (xCenter === null) {
          return [];
        }

        // Adjust x position based on bar position
        const x = xCenter - barWidth / 2 + xPositionOffset * barWidth;

        const yTop = clampYPosToChartArea(
          valToPos(datapoint.y, yScaleId, "canvas"),
          "canvas",
        );
        if (yTop === null) {
          return [];
        }

        const barHeight = yBottom - yTop;

        const compensatedX = clampXPosToChartArea(x, "canvas");
        const compensatedWidth =
          clampXPosToChartArea(x + barWidth, "canvas") - compensatedX;

        points.push({
          x: compensatedX,
          y: yTop,
          width: compensatedWidth,
          height: barHeight,
        });
      }

      ctx.save();
      applyStyles(ctx, style);

      if (style?.fillStyle) {
        for (const p of points) {
          ctx.beginPath();
          if (radius) {
            ctx.roundRect(p.x, p.y, p.width, p.height, radius);
          } else {
            ctx.rect(p.x, p.y, p.width, p.height);
          }
          ctx.fill();
        }
      }

      if (style?.strokeStyle) {
        ctx.beginPath();
        for (const p of points) {
          if (radius) {
            ctx.roundRect(p.x, p.y, p.width, p.height, radius);
          } else {
            ctx.rect(p.x, p.y, p.width, p.height);
          }
        }
        ctx.stroke();
      }

      ctx.restore();
    },
    [data, xScaleId, yScaleId, style, barWidthRaw, xPositionOffset, radius],
  );
  return null;
};

export const BarPlot = React.memo(BarPlotImpl, deepEqual);
