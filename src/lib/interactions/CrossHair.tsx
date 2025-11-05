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

  const clampedX = clampXPosToChartArea(frame, pointer?.cssX ?? 0, "css");

  const clampedY = clampYPosToChartArea(frame, pointer?.cssY ?? 0, "css");

  return (
    <>
      <div
        data-show={!!pointer}
        className={makeXClassName?.(moveState)}
        style={{
          position: "absolute",
          left: 0,
          top: frame.chartAreaCSS.y,
          height: frame.chartAreaCSS.height,
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
          top: 0,
          height: 0,
          borderTop: "solid 1px red",
          left: frame.chartAreaCSS.x,
          width: frame.chartAreaCSS.width,
          pointerEvents: "none",
          opacity: pointer ? 1 : 0,
          transform: `translateY(${clampedY}px)`,
          ...makeYStyle?.(moveState),
        }}
      />
    </>
  );
};
