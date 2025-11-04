import { useMemo, useState } from "react";
import { useInteractionsEvent } from "./interactionsBus";
import type { MoveEvent } from "./types";
import { getScale, valFits, valToPxDistance } from "../helpers";
import type { PlotDrawFrame } from "../types";

type TooltipState = {
  frame: PlotDrawFrame;
  points: {
    seriesId: string;
    x: number | null;
    y: number | null;
  }[];
};

export const TooltipsX: React.FC<{
  data: {
    seriesId: string;
    xScaleId: string;
    yScaleId: string;
    points: Array<{ x: number | null; y: number | null }>;
  }[];
  renderTooltip: (params: TooltipState | null) => React.ReactNode;
}> = ({ data, renderTooltip }) => {
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

    const points: TooltipState["points"] = [];

    for (const series of data) {
      const rawScaledX = pointer?.scaled[series.xScaleId];
      const rawScaledY = pointer?.scaled[series.yScaleId];
      if (rawScaledX === undefined || rawScaledY === undefined) {
        continue;
      }
      const xScale = getScale(frame, series.xScaleId);
      if (!xScale) {
        continue;
      }
      const yScale = getScale(frame, series.yScaleId);
      if (!yScale) {
        continue;
      }
      let closestPointIndex: number | null = null;
      let closestDistanceX = Infinity;
      let closestDistanceY = Infinity;
      for (const [index, point] of series.points.entries()) {
        const x = point.x ?? xScale.min;
        const y = point.y ?? yScale.min;
        if (
          !valFits(frame, x, series.xScaleId) ||
          !valFits(frame, y, series.yScaleId)
        ) {
          continue;
        }
        const distanceX = Math.abs(x - rawScaledX);
        const distanceY = Math.abs(y - rawScaledY);
        const distance = Math.pow(distanceX, 2) + Math.pow(distanceY, 2);
        if (
          distance <
          Math.pow(closestDistanceX, 2) + Math.pow(closestDistanceY, 2)
        ) {
          closestDistanceX = distanceX;
          closestDistanceY = distanceY;
          closestPointIndex = index;
        }
      }
      const closestPoint = series.points[closestPointIndex ?? -1];
      if (
        !closestPoint ||
        valToPxDistance(frame, closestDistanceX, series.xScaleId, "css") > 30 ||
        valToPxDistance(frame, closestDistanceY, series.yScaleId, "css") > 30
      ) {
        points.push({ seriesId: series.seriesId, y: null, x: null });
        continue;
      }
      points.push({
        seriesId: series.seriesId,
        y: closestPoint.y,
        x: closestPoint.x,
      });
    }
    return {
      frame,
      points,
    };
  }, [data, moveState]);

  return renderTooltip(tooltipState);
};
