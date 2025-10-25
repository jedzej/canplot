import React, { useEffect, useMemo, useState } from "react";
import type { PlotScaleConfig } from "./lib/types";
import { makeEventEmitter, type EventEmitter } from "./eventEmitter";
import { CanPlot } from "./lib/CanPlot";
import { useFrame } from "./lib/frameContext";
import { applyStyles, pointsFit, posToVal, valToPos } from "./lib/helpers";
import { ScatterPlot } from "./lib/plot/ScatterPlot";
import { ChartAreaInteractions } from "./lib/interactions/ChartAreaInteractions";

function App() {
  const [refPoint, setRefPoint] = useState(Date.parse("2025-10-26T12:00:00Z"));

  const scales = useMemo<PlotScaleConfig[]>(
    () => [
      {
        id: "t",
        type: "time",
        timeZone: "Europe/Warsaw",
        axis: {
          position: "bottom",
          size: 40,
        },
        origin: "x",
        minmax: [refPoint - 1000 * 60 * 60 * 60, refPoint],
      },
      {
        id: "x",
        type: "linear",
        axis: {
          position: "bottom",
          size: 20,
        },
        origin: "x",
        minmax: [0, 100],
      },
      {
        id: "y",
        type: "linear",
        axis: {
          position: "left",
          size: 20,
          type: "linear",
        },
        origin: "y",
        minmax: [0, 100],
        format: {
          type: "linear",
        },
      },
      {
        id: "y2",
        type: "linear",
        axis: {
          position: "right",
          size: 20,
          type: "linear",
        },
        origin: "y",
        minmax: [-1000, 1000],
        format: {
          type: "linear",
        },
      },
    ],
    [refPoint]
  );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRefPoint((prev) => prev - 100 * 60 * 60);
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, []);

  const [eventEmitter] = useState<EventEmitter>(() => {
    return makeEventEmitter();
  });

  return (
    <>
      <CanPlot
        configuration={{
          padding: {
            bottom: 20,
            left: 40,
            right: 20,
            top: 20,
          },
          scales,
        }}
      >
        <ChartAreaInteractions withSpanSelect />
        <Crosshair eventEmitter={eventEmitter} />
        
        {/* <AxesOverlay frame={frame} eventEmitter={eventEmitter} /> */}
        <Rect />
        <ScatterPlot
          data={Array.from({ length: 10 }, (_, i) => ({
            x: i,
            y: (i + 1) * 10,
          }))}
          xScaleId="x"
          yScaleId="y"
          style={{
            fillStyle: "pink",
            strokeStyle: "red",
            lineWidth: 2,
          }}
        />
      </CanPlot>

      <button
        type="button"
        onClick={() => {
          // setScales((prev) => {
          //   const newScales = [...prev];
          //   newScales[2] = {
          //     ...newScales[2],
          //     minmax: (newScales[2].minmax = [
          //       Math.random() * -1000,
          //       Math.random() * 1000,
          //     ]),
          //   };
          //   return newScales;
          // });
        }}
      >
        YScale
      </button>
    </>
  );
}

const Rect = () => {
  useFrame((frame) => {
    const y1 = valToPos(frame, 10, "y2", "canvas");
    const y2 = valToPos(frame, 20, "y2", "canvas");
    const x1 = valToPos(frame, 10, "x", "canvas");
    const x2 = valToPos(frame, 20, "x", "canvas");
    frame.ctx.fillStyle = "rgba(0,255,0,0.5)";
    frame.ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
  });
  return null;
};


const Crosshair: React.FC<{
  eventEmitter: EventEmitter;
}> = ({ eventEmitter }) => {
  const [moveState, setMoveState] = useState<{
    cssX: number;
    cssY: number;
  } | null>(null);

  useEffect(() => {
    eventEmitter.addEventListener("move", (payload) => {
      setMoveState(payload?.data ?? null);
    });
  }, [eventEmitter]);

  const frame = useFrame();

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: 0,
          borderLeft: "solid 1px red",
          top: frame.chartAreaCSS.y,
          height: frame.chartAreaCSS.height,
          opacity: moveState ? 1 : 0,
          pointerEvents: "none",
          transform: `translateX(${
            moveState ? moveState.cssX + frame.chartAreaCSS.x : 0
          }px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: frame.chartAreaCSS.y,
          height: 0,
          borderTop: "solid 1px red",
          left: frame.chartAreaCSS.x,
          width: frame.chartAreaCSS.width,
          opacity: moveState ? 1 : 0,
          pointerEvents: "none",
          transform: `translateY(${moveState ? moveState.cssY : 0}px)`,
        }}
      />
    </>
  );
};


export default App;

