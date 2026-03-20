import React from "react";
import { useDrawEffect } from "../frameContext";
import type { CANPLOT_LAYER } from "../FrameDrawer";
import { applyStyles, deepEqual } from "../helpers";

const LinePlotImpl: React.FC<{
  layer?: number | keyof typeof CANPLOT_LAYER;
  data: Array<{ x: number; y: number }>;
  xScaleId: string;
  yScaleId: string;
  globalAlpha?: number;
  xGapWidth?: number;
  style?: Partial<
    {
      lineDash: number[];
      fillStyle: CanvasFillStrokeStyles["fillStyle"];
      strokeStyle: CanvasFillStrokeStyles["strokeStyle"];
    } & Pick<
      CanvasPathDrawingStyles,
      "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
    >
  >;
}> = ({
  layer = "MIDDLE",
  data,
  xScaleId,
  yScaleId,
  style,
  globalAlpha,
  xGapWidth,
}) => {
  useDrawEffect(
    layer,
    ({ ctx, clampXPosToChartArea, clampYPosToChartArea, valToPos }) => {
      ctx.save();
      ctx.beginPath();
      applyStyles(ctx, style);
      const oldLineDash = ctx.getLineDash();
      if (style?.lineDash) {
        ctx.setLineDash(style.lineDash);
      }
      if (globalAlpha !== undefined) {
        ctx.globalAlpha = globalAlpha;
      }
      let lastX: number | null = null;
      for (const point of data) {
        const xPos = clampXPosToChartArea(
          valToPos(point.x, xScaleId, "canvas"),
        );
        const yPos = clampYPosToChartArea(
          valToPos(point.y, yScaleId, "canvas"),
        );
        if (xPos === null || yPos === null) {
          continue;
        }
        if (
          lastX !== null &&
          xGapWidth !== undefined &&
          point.x - lastX > xGapWidth
        ) {
          ctx.moveTo(xPos, yPos);
        } else {
          ctx.lineTo(xPos, yPos);
        }
        lastX = point.x;
      }
      ctx.stroke();
      if (oldLineDash) {
        ctx.setLineDash(oldLineDash);
      }
      ctx.restore();
    },
    [data, xScaleId, yScaleId, style, globalAlpha, xGapWidth],
  );
  return null;
};

export const LinePlot = React.memo(LinePlotImpl, deepEqual);
