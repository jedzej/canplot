import React from "react";
import { getScale } from "../helpers";
import { useFrame } from "../frameContext";

export const AxisOverlay: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    scaleId: string;
  }
> = ({ style, children, scaleId, ...rest }) => {
  const frame = useFrame();

  const axis = getScale(frame, scaleId)?.axis;

  if (!axis) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#0000ff11",
        left: axis.cssRect.x,
        top: axis.cssRect.y,
        height: axis.cssRect.height,
        width: axis.cssRect.width,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
