import React from "react";
import { useDrawEffect } from "../frameContext";
import type { CANPLOT_LAYER } from "../FrameDrawer";
import { applyStyles, deepEqual } from "../helpers";

const ScatterPlotImpl: React.FC<{
  layer?: number | keyof typeof CANPLOT_LAYER;
  data: Array<{ x: number; y: number }>;
  xScaleId: string;
  yScaleId: string;
  radius?: number;
  globalAlpha?: number;
  xStrategy?: "clip" | "clamp";
  yStrategy?: "clip" | "clamp";
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
      valToPos,
      valFits,
      clampXPosToChartArea,
      clampYPosToChartArea,
    }) => {
      ctx.save();
      applyStyles(ctx, style);

      if (globalAlpha !== undefined) {
        ctx.globalAlpha = globalAlpha;
      }

      const points = [];

      for (const point of data) {
        let x: number | null = null;
        let y: number | null = null;

        // X
        const rawX = valToPos(point.x, xScaleId);
        if (rawX === null) continue;

        if (xStrategy === "clip") {
          if (!valFits(point.x, xScaleId)) continue;
          x = rawX;
        } else {
          x = clampXPosToChartArea(rawX, "canvas");
        }

        // Y
        const rawY = valToPos(point.y, yScaleId);
        if (rawY === null) continue;

        if (yStrategy === "clip") {
          if (!valFits(point.y, yScaleId)) continue;
          y = rawY;
        } else {
          y = clampYPosToChartArea(rawY, "canvas");
        }

        if (x === null || y === null) continue;

        points.push({ x, y });
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
    [data, xScaleId, yScaleId, radius, style, globalAlpha],
  );
  return null;
};

export const ScatterPlot = React.memo(ScatterPlotImpl, deepEqual);
