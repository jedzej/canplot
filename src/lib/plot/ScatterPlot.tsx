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
      ctx.beginPath();
      const path = new Path2D();
      applyStyles(ctx, style);
      if (globalAlpha !== undefined) {
        ctx.globalAlpha = globalAlpha;
      }
      for (const point of data) {
        let x: number | null, y: number | null;
        switch (xStrategy) {
          case "clip":
            if (!valFits(point.x, xScaleId)) {
              continue;
            }
            x = valToPos(point.x, xScaleId);
            break;
          case "clamp": {
            const unclampedX = valToPos(point.x, xScaleId);
            if (unclampedX === null) {
              continue;
            }
            x = clampXPosToChartArea(valToPos(point.x, xScaleId), "canvas");
            break;
          }
        }
        switch (yStrategy) {
          case "clip":
            if (!valFits(point.y, yScaleId)) {
              continue;
            }
            y = valToPos(point.y, yScaleId);
            break;
          case "clamp":
            y = clampYPosToChartArea(valToPos(point.y, yScaleId), "canvas");
            break;
        }
        if(x === null || y === null) {
          continue;
        }
        path.moveTo(x + radius, y);
        path.arc(x, y, radius, 0, Math.PI * 2);
      }
      ctx.fill(path);
      ctx.stroke(path);
      ctx.restore();
    },
    [data, xScaleId, yScaleId, radius, style, globalAlpha]
  );
  return null;
};

export const ScatterPlot = React.memo(ScatterPlotImpl, deepEqual);
