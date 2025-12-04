import React, { useMemo, useState } from "react";
import { useInteractionsEvent } from "./interactionsBus";
import type { SpanSelectEvent } from "./types";
import { clampXPosToChartArea, clampYPosToChartArea } from "../helpers";

export const SelectBox: React.FC<{
  makeClassName?: (selectState: SpanSelectEvent) => string;
  makeStyle?: (selectState: SpanSelectEvent) => React.CSSProperties | undefined;
}> = ({ makeClassName, makeStyle }) => {
  const [selectState, setSelectState] = useState<SpanSelectEvent | null>(null);

  useInteractionsEvent("spanselect", (event) => {
    setSelectState(event.mode === "below_threshold" || event.completed ? null : event);
  });

  const dimensions = useMemo(() => {
    if (!selectState || selectState.mode === "below_threshold") {
      return null;
    }
    const clampedFromX = clampXPosToChartArea(
      selectState.frame,
      selectState.x.css?.from ?? -Infinity,
      "css"
    );
    const clampedToX = clampXPosToChartArea(
      selectState.frame,
      selectState.x.css?.to ?? Infinity,
      "css"
    );
    const clampedFromY = clampYPosToChartArea(
      selectState.frame,
      selectState.y.css?.from ?? -Infinity,
      "css"
    );
    const clampedToY = clampYPosToChartArea(
      selectState.frame,
      selectState.y.css?.to ?? Infinity,
      "css"
    );

    const leftPx = Math.min(clampedFromX, clampedToX);
    const topPx = Math.min(clampedFromY, clampedToY);
    const widthPx = Math.abs(clampedToX - clampedFromX);
    const heightPx = Math.abs(clampedToY - clampedFromY);

    return { leftPx, topPx, widthPx, heightPx };
  }, [selectState]);

  return (
    <div
      className={selectState ? makeClassName?.(selectState) : undefined}
      style={{
        position: "absolute",
        visibility: selectState ? "visible" : "hidden",
        left: `${dimensions?.leftPx ?? 0}px`,
        top: `${dimensions?.topPx ?? 0}px`,
        width: `${dimensions?.widthPx ?? 0}px`,
        height: `${dimensions?.heightPx ?? 0}px`,
        pointerEvents: "none",
        ...(selectState ? makeStyle?.(selectState) : undefined),
      }}
    />
  );
};
