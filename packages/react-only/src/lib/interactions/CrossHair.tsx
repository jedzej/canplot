import React, { useState } from "react";
import { useInteractionsEvent } from "./interactionsBus";
import type { MoveEvent } from "./types";

export const Crosshair: React.FC<{
  xStyle?: React.CSSProperties;
  xClassName?: string;
  yStyle?: React.CSSProperties;
  yClassName?: string;
}> = ({ xStyle, xClassName, yStyle, yClassName }) => {
  const [moveState, setMoveState] = useState<MoveEvent | null>(null);

  useInteractionsEvent("move", (event) => {
    const pointer = event;
    setMoveState(pointer);
  });

  if (!moveState) {
    return null;
  }

  const { frame, pointer } = moveState;

  return (
    <>
      <div
        className={xClassName}
        style={{
          position: "absolute",
          left: frame.chartAreaCSS.x,
          top: frame.chartAreaCSS.y,
          height: frame.chartAreaCSS.height,
          borderLeft: "solid 1px red",
          pointerEvents: "none",
          transform: `translateX(${pointer ? pointer.cssX : 0}px)`,
          ...xStyle,
        }}
      />
      <div
        className={yClassName}
        style={{
          position: "absolute",
          top: frame.chartAreaCSS.y,
          height: 0,
          borderTop: "solid 1px red",
          left: frame.chartAreaCSS.x,
          width: frame.chartAreaCSS.width,
          pointerEvents: "none",
          transform: `translateY(${pointer ? pointer.cssY : 0}px)`,
          ...yStyle,
        }}
      />
    </>
  );
};
