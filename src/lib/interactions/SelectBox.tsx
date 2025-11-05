import React, { useState } from "react";
import { useInteractionsEvent } from "./interactionsBus";
import type { SpanSelectEvent } from "./types";
import { clampXPosToChartArea, clampYPosToChartArea } from "../helpers";

export const SelectBox: React.FC<{
  makeClassName?: (selectState: SpanSelectEvent) => string;
  makeStyle?: (selectState: SpanSelectEvent) => React.CSSProperties | undefined;
}> = ({ makeClassName, makeStyle }) => {
  const [selectState, setSelectState] = useState<SpanSelectEvent | null>(null);

  useInteractionsEvent("spanselect", (event) => {
    setSelectState(event.mode === "none" || event.completed ? null : event);
  });

  if (!selectState) {
    return null;
  }

  const clampedFromX = clampXPosToChartArea(
    selectState.frame,
    selectState.x.fromCSS,
    "css"
  );
  const clampedToX = clampXPosToChartArea(
    selectState.frame,
    selectState.x.toCSS,
    "css"
  );
  const clampedFromY = clampYPosToChartArea(
    selectState.frame,
    selectState.y.fromCSS,
    "css"
  );
  const clampedToY = clampYPosToChartArea(
    selectState.frame,
    selectState.y.toCSS,
    "css"
  );

  const leftPx = Math.min(clampedFromX, clampedToX);
  const topPx = Math.min(clampedFromY, clampedToY);
  const widthPx = Math.abs(clampedToX - clampedFromX);
  const heightPx = Math.abs(clampedToY - clampedFromY);

  return (
    <div
      className={makeClassName?.(selectState)}
      style={{
        position: "absolute",
        backgroundColor: "#0000ff22",
        left: `${leftPx}px`,
        top: `${topPx}px`,
        width: `${widthPx}px`,
        height: `${heightPx}px`,
        pointerEvents: "none",
        ...makeStyle?.(selectState),
      }}
    />
  );
};
