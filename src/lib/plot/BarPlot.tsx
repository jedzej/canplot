import React from "react";
import { useDrawEffect } from "../frameContext";
import type { CANPLOT_LAYER } from "../FrameDrawer";
import { applyStyles, deepEqual } from "../helpers";

const BarPlotImpl: React.FC<{
  layer?: number | keyof typeof CANPLOT_LAYER;
  data: Array<{ x: readonly [number, number]; y: number }>;
  xScaleId: string;
  yScaleId: string;
  globalAlpha?: number;
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
  globalAlpha,
  radius,
  layer = "MIDDLE",
}) => {
  useDrawEffect({
    layer,
    globalAlpha,
    runner: ({ ctx, valToPosWithStrategy }) => {
      if (data.length === 0) return;
      const yBottom = valToPosWithStrategy(0, yScaleId, "canvas", "clamp");

      if (yBottom === null) {
        return;
      }

      const points: Array<{
        x0: number;
        x1: number;
        y: number;
        width: number;
        height: number;
      }> = [];
      for (const { x, y } of data) {
        const x0 = valToPosWithStrategy(x[0], xScaleId, "canvas", "clamp");
        const x1 = valToPosWithStrategy(x[1], xScaleId, "canvas", "clamp");
        const yTop = valToPosWithStrategy(y, yScaleId, "canvas", "clamp");

        if (x0 === null || x1 === null || yTop === null || x0 === x1) {
          continue;
        }

        const barHeight = yBottom - yTop;

        points.push({
          x0,
          x1,
          y: yTop,
          width: x1 - x0,
          height: barHeight,
        });
      }

      ctx.save();
      applyStyles(ctx, style);

      if (style?.fillStyle) {
        for (const p of points) {
          ctx.beginPath();
          if (radius) {
            ctx.roundRect(p.x0, p.y, p.x1 - p.x0, p.height, radius);
          } else {
            ctx.rect(p.x0, p.y, p.x1 - p.x0, p.height);
          }
          ctx.fill();
        }
      }

      if (style?.strokeStyle) {
        ctx.beginPath();
        for (const p of points) {
          if (radius) {
            ctx.roundRect(p.x0, p.y, p.x1 - p.x0, p.height, radius);
          } else {
            ctx.rect(p.x0, p.y, p.x1 - p.x0, p.height);
          }
        }
        ctx.stroke();
      }

      ctx.restore();
    },
    deps: [
      data,
      xScaleId,
      yScaleId,
      style,
      radius,
    ],
  });
  return null;
};

export const BarPlot = React.memo(BarPlotImpl, deepEqual);
