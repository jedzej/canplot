import React, { useState } from "react";
import { useInteractionsEvent } from "./interactionsBus";
import type { MoveEvent } from "./types";
import { clampXPosToChartArea, clampYPosToChartArea } from "../helpers";

export const Crosshair: React.FC<{
  makeXStyle?: (moveEvent: MoveEvent) => React.CSSProperties | undefined;
  makeXClassName?: (moveEvent: MoveEvent) => string;
  makeYStyle?: (moveEvent: MoveEvent) => React.CSSProperties | undefined;
  makeYClassName?: (moveEvent: MoveEvent) => string;
}> = ({ makeXStyle, makeXClassName, makeYStyle, makeYClassName }) => {
  const [moveState, setMoveState] = useState<MoveEvent | null>(null);

  useInteractionsEvent("move", (event) => {
    const pointer = event;
    setMoveState(pointer);
  });

  if (!moveState) {
    return null;
  }

  const { frame, pointer } = moveState;
  const cssX = pointer?.cssX ?? null;
  const cssY = pointer?.cssY ?? null;

  const clampedX = cssX
    ? clampXPosToChartArea(frame, cssX, "css") - frame.chartAreaCSS.x
    : 0;

  const clampedY = cssY
    ? clampYPosToChartArea(frame, cssY, "css") - frame.chartAreaCSS.y
    : 0;

  return (
    <>
      <div
        data-show={!!pointer}
        className={makeXClassName?.(moveState)}
        style={{
          position: "absolute",
          left: 0,
          visibility: cssX === null ? "hidden" : "visible",
          top: 0,
          bottom: 0,
          borderColor: "red",
          borderLeftWidth: "1px",
          borderLeftStyle: "solid",
          pointerEvents: "none",
          opacity: pointer ? 1 : 0,
          transform: `translateX(${clampedX}px)`,
          ...makeXStyle?.(moveState),
        }}
      />
      <div
        className={makeYClassName?.(moveState)}
        data-show={!!pointer}
        style={{
          position: "absolute",
          visibility: cssY === null ? "hidden" : "visible",
          top: 0,
          height: 0,
          borderTop: "solid 1px red",
          left: 0,
          right: 0,
          pointerEvents: "none",
          opacity: pointer ? 1 : 0,
          transform: `translateY(${clampedY}px)`,
          ...makeYStyle?.(moveState),
        }}
      />
    </>
  );
};
