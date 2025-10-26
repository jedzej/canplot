import React, { useState } from "react";
import { useInteractionsEvent } from "./interactionsBus";
import type { MoveEvent } from "./types";
import { clampXPosToChartArea, clampYPosToChartArea } from "../helpers";

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

  const clampedX = clampXPosToChartArea(
    frame,
    pointer ? pointer.cssX + frame.chartAreaCSS.x : 0,
    "css"
  ) - frame.chartAreaCSS.x;

  const clampedY = clampYPosToChartArea(
    frame,
    pointer ? pointer.cssY + frame.chartAreaCSS.y : 0,
    "css"
  ) - frame.chartAreaCSS.y;

  return (
    <>
      <div
        data-show={!!pointer}
        className={xClassName}
        style={{
          position: "absolute",
          left: frame.chartAreaCSS.x,
          top: frame.chartAreaCSS.y,
          height: frame.chartAreaCSS.height,
          borderLeft: "solid 1px red",
          pointerEvents: "none",
          opacity: pointer ? 1 : 0,
          transform: `translateX(${clampedX}px)`,
          ...xStyle,
        }}
      />
      <div
        className={yClassName}
        data-show={!!pointer}
        style={{
          position: "absolute",
          top: frame.chartAreaCSS.y,
          height: 0,
          borderTop: "solid 1px red",
          left: frame.chartAreaCSS.x,
          width: frame.chartAreaCSS.width,
          pointerEvents: "none",
          opacity: pointer ? 1 : 0,
          transform: `translateY(${clampedY}px)`,
          ...yStyle,
        }}
      />
    </>
  );
};
