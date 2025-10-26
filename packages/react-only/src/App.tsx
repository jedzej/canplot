import React, { useEffect, useMemo, useState } from "react";
import type { PlotScaleConfig } from "./lib/types";
import { makeEventEmitter, type EventEmitter } from "./eventEmitter";
import { CanPlot } from "./lib/CanPlot";
import { useFrame } from "./lib/frameContext";
import { applyStyles, pointsFit, posToVal, valToPos } from "./lib/helpers";
import { ScatterPlot } from "./lib/plot/ScatterPlot";
import { ChartAreaInteractions } from "./lib/interactions/ChartAreaInteractions";
import { Crosshair } from "./lib/interactions/CrossHair";
import { SelectBox } from "./lib/interactions/SelectBox";

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
        min: refPoint - 1000 * 60 * 60 * 60,
        max: refPoint,
      },
      {
        id: "x",
        type: "linear",
        axis: {
          position: "bottom",
          size: 20,
        },
        origin: "x",
        min: 0,
        max: 100,
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
        min: 0,
        max: 100,
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
        min: -1000,
        max: 1000,
        format: {
          type: "linear",
        },
      },
    ],
    [refPoint]
  );
  const scales2 = useMemo<PlotScaleConfig[]>(
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
        min: refPoint - 1000 * 60 * 60 * 60,
        max: refPoint,
      },
      {
        id: "x",
        type: "linear",
        axis: {
          position: "bottom",
          size: 20,
        },
        origin: "x",
        min: 0,
        max: 300,
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
        min: 0,
        max: 100,
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
        min: -1000,
        max: 1000,
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
        <ChartAreaInteractions
          sync={{
            key: "x",
            xViaScaleId: "x",
            yViaScaleId: "y",
          }}
        >
          <Crosshair />
          <SelectBox style={{ backgroundColor: "#44992244" }} />
        </ChartAreaInteractions>

        {/* <AxesOverlay frame={frame} eventEmitter={eventEmitter} /> */}
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

      <CanPlot
        configuration={{
          padding: {
            bottom: 60,
            left: 20,
            right: 20,
            top: 60,
          },
          scales: scales2,
        }}
      >
        <ChartAreaInteractions
          sync={{
            key: "x",
            xViaScaleId: "x",
            yViaScaleId: "y",
          }}
        >
          <Crosshair />
          <SelectBox />
        </ChartAreaInteractions>

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

export default App;
