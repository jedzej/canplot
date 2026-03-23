import React from "react";
import { useDrawEffect } from "../frameContext";
import type { CANPLOT_LAYER } from "../FrameDrawer";
import { applyStyles, deepEqual } from "../helpers";
import type { OutlierStrategy } from "../types";

const LinePlotImpl: React.FC<{
  layer?: number | keyof typeof CANPLOT_LAYER;
  data: Array<{ x: number; y: number }>;
  xScaleId: string;
  yScaleId: string;
  globalAlpha?: number;
  xGapWidth?: number;
  xStrategy?: OutlierStrategy;
  yStrategy?: OutlierStrategy;
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
  xStrategy = "clip",
  yStrategy = "clip",
}) => {
  useDrawEffect(
    layer,
    ({ ctx, valToPosWithStrategy }) => {
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
        const xPos = valToPosWithStrategy(point.x, xScaleId, "canvas", xStrategy);
        const yPos = valToPosWithStrategy(point.y, yScaleId, "canvas", yStrategy);

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
    [data, xScaleId, yScaleId, style, globalAlpha, xGapWidth, xStrategy, yStrategy],
  );
  return null;
};

export const LinePlot = React.memo(LinePlotImpl, deepEqual);
