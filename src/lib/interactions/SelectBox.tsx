import React, { useMemo, useState } from "react";
import { useInteractionsEvent } from "./interactionsBus";
import type { SpanSelectEvent } from "./types";
import { clampXPosToChartArea, clampYPosToChartArea } from "../helpers";

export const SelectBox: React.FC<{
  makeClassName?: (selectState: SpanSelectEvent) => string;
  makeStyle?: (selectState: SpanSelectEvent) => React.CSSProperties | undefined;
}> = ({ makeClassName, makeStyle }) => {
  const [selection, setSelectState] = useState<SpanSelectEvent | null>(null);

  useInteractionsEvent("spanselect", (event) => {
    setSelectState(
      event.mode === "below_threshold" || event.completed ? null : event
    );
  });

  const dimensions = useMemo(() => {
    if (!selection || selection.mode === "below_threshold") {
      return null;
    }
    const fromX =
      selection.mode === "y" ? -Infinity : selection.x.css?.from ?? -Infinity;
    const toX =
      selection.mode === "y" ? Infinity : selection.x.css?.to ?? Infinity;
    const fromY =
      selection.mode === "x" ? -Infinity : selection.y.css?.from ?? -Infinity;
    const toY =
      selection.mode === "x" ? Infinity : selection.y.css?.to ?? Infinity;

    const clampedFromX = clampXPosToChartArea(selection.frame, fromX, "css");
    const clampedToX = clampXPosToChartArea(selection.frame, toX, "css");
    const clampedFromY = clampYPosToChartArea(selection.frame, fromY, "css");
    const clampedToY = clampYPosToChartArea(selection.frame, toY, "css");

    const leftPx = Math.min(clampedFromX, clampedToX) - selection.frame.chartAreaCSS.x;
    const topPx = Math.min(clampedFromY, clampedToY) - selection.frame.chartAreaCSS.y;
    const widthPx = Math.abs(clampedToX - clampedFromX);
    const heightPx = Math.abs(clampedToY - clampedFromY);

    return { leftPx, topPx, widthPx, heightPx };
  }, [selection]);

  return (
    <div
      className={selection ? makeClassName?.(selection) : undefined}
      style={{
        position: "absolute",
        visibility: selection ? "visible" : "hidden",
        left: `${dimensions?.leftPx ?? 0}px`,
        top: `${dimensions?.topPx ?? 0}px`,
        width: `${dimensions?.widthPx ?? 0}px`,
        height: `${dimensions?.heightPx ?? 0}px`,
        pointerEvents: "none",
        ...(selection ? makeStyle?.(selection) : undefined),
      }}
    />
  );
};
