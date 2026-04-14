import React from "react";
import { useDrawEffect } from "../frameContext";
import type { CANPLOT_LAYER } from "../FrameDrawer";
import { applyStyles, deepEqual } from "../helpers";
import type { OutlierStrategy } from "../types";

const ScatterPlotImpl: React.FC<{
  layer?: number | keyof typeof CANPLOT_LAYER;
  data: Array<{ x: number; y: number }>;
  xScaleId: string;
  yScaleId: string;
  radius?: number;
  globalAlpha?: number;
  xStrategy?: OutlierStrategy;
  yStrategy?: OutlierStrategy;
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
  layer = "MIDDLE",
  data,
  xScaleId,
  yScaleId,
  xStrategy = "clip",
  yStrategy = "clip",
  radius = 5,
  style,
  globalAlpha,
}) => {
  useDrawEffect(
    layer,
    ({
      ctx,
      valToPosWithStrategy,
    }) => {
      ctx.save();
      applyStyles(ctx, style);

      if (globalAlpha !== undefined) {
        ctx.globalAlpha = globalAlpha;
      }

      const points = [];

      for (const point of data) {
        const xPos = valToPosWithStrategy(point.x, xScaleId, "canvas", xStrategy);
        const yPos = valToPosWithStrategy(point.y, yScaleId, "canvas", yStrategy);

        if (xPos === null || yPos === null) continue;

        points.push({ x: xPos, y: yPos });
      }

      // FILL (per point)
      if (style?.fillStyle) {
        for (const p of points) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // STROKE (batch)
      if (style?.strokeStyle) {
        ctx.beginPath();
        for (const p of points) {
          ctx.moveTo(p.x + radius, p.y); // ważne dla poprawnego stroke
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        }
        ctx.stroke();
      }

      ctx.restore();
    },
    [data, xScaleId, yScaleId, radius, style, globalAlpha, xStrategy, yStrategy],
  );
  return null;
};

export const ScatterPlot = React.memo(ScatterPlotImpl, deepEqual);
