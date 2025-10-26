import React, { useState } from "react";
import { useInteractionsEvent } from "./interactionsBus";
import type { SpanSelectEvent } from "./types";

export const SelectBox: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style }) => {
  const [selectState, setSelectState] = useState<SpanSelectEvent | null>(null);

  useInteractionsEvent("spanselect", (event) => {
    setSelectState(event.mode === "none" || event.completed ? null : event);
  });

  if (!selectState) {
    return null;
  }

  const leftPx = Math.min(selectState.x.fromCSS, selectState.x.toCSS);
  const topPx = Math.min(selectState.y.fromCSS, selectState.y.toCSS);
  const widthPx = Math.abs(selectState.x.toCSS - selectState.x.fromCSS);
  const heightPx = Math.abs(selectState.y.toCSS - selectState.y.fromCSS);

  return (
    <div
      data-key-ctrl={selectState.keys.ctrlKey}
      data-key-shift={selectState.keys.shiftKey}
      data-key-alt={selectState.keys.altKey}
      data-key-meta={selectState.keys.metaKey}
      className={className}
      style={{
        position: "absolute",
        backgroundColor: "#0000ff22",
        left: `${leftPx}px`,
        top: `${topPx}px`,
        width: `${widthPx}px`,
        height: `${heightPx}px`,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
};
