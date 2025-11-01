import { useMemo, useState } from "react";
import { useInteractionsEvent } from "./interactionsBus";
import type { MoveEvent } from "./types";
import { pointsFit, valToPxDistance } from "../helpers";
import type { PlotDrawFrame } from "../types";

type TooltipState = {
  frame: PlotDrawFrame;
  x: number;
  points: {
    seriesId: string;
    y: number | null;
  }[];
};

export const TooltipsX: React.FC<{
  xScaleId: string;
  data: {
    seriesId: string;
    yScaleId: string;
    points: Array<{ x: number; y: number }>;
  }[];
  renderTooltip: (params: TooltipState | null) => React.ReactNode;
}> = ({ data, renderTooltip, xScaleId }) => {
  const [moveState, setMoveState] = useState<MoveEvent | null>(null);

  useInteractionsEvent("move", (event) => {
    const pointer = event;
    setMoveState(pointer);
  });

  const tooltipState = useMemo((): TooltipState | null => {
    if (!moveState) {
      return null;
    }

    const { frame, pointer } = moveState;

    const rawScaledX = pointer?.scaled[xScaleId];
    if (rawScaledX === undefined) {
      return null;
    }
    const points: TooltipState["points"] = [];
    let x = rawScaledX;
    for (const series of data) {
      let closestPointIndex: number | null = null;
      let closestDistance = Infinity;
      for (const [index, point] of series.points.entries()) {
        if (
          !pointsFit(frame, point.x, xScaleId) ||
          !pointsFit(frame, point.y, series.yScaleId)
        ) {
          continue;
        }
        const distance = Math.abs(point.x - rawScaledX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestPointIndex = index;
        }
      }
      const closestPoint = series.points[closestPointIndex ?? -1];
      if (
        !closestPoint ||
        valToPxDistance(frame, closestDistance, xScaleId, "css") > 30
      ) {
        points.push({ seriesId: series.seriesId, y: null });
        continue;
      }
      x = closestPoint.x;
      points.push({
        seriesId: series.seriesId,
        y: closestPoint.y,
      });
    }
    return {
      frame,
      x,
      points,
    };
  }, [data, moveState, xScaleId]);

  return renderTooltip(tooltipState);
};
