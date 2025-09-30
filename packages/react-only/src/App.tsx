import React, { useEffect, useState } from "react";
import type { PlotDrawFrame, PlotScaleConfig } from "./lib/types";
import type { EventEmitter } from "./lib/eventEmitter";
import { CanPlot } from "./lib/CanPlot";

function App() {
  const [scales, setScales] = useState<PlotScaleConfig[]>(() => [
    {
      id: "x",
      axis: {
        position: "bottom",
        size: 20,
        type: "linear",
      },
      origin: "x",
      minmax: [0, 100],
    },
    {
      id: "y",
      axis: {
        position: "left",
        size: 20,
        type: "linear",
      },
      origin: "y",
      minmax: [0, 100],
    },
    {
      id: "y2",
      axis: {
        position: "right",
        size: 20,
        type: "linear",
      },
      origin: "y",
      minmax: [-1000, 1000],
    },
  ]);

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
        renderOver={({ frame, eventEmitter }) => {
          return (
            <>
              <Plugin frame={frame} eventEmitter={eventEmitter} />
              <Crosshair eventEmitter={eventEmitter} />
              <SpanSelect
                eventEmitter={eventEmitter}
                onSelect={(selectState) => {
                  console.log("Select", selectState);
                }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0 }}>
                Over
              </div>
            </>
          );
        }}
      />
      <button
        type="button"
        onClick={() => {
          setScales((prev) => {
            const newScales = [...prev];
            newScales[2] = {
              ...newScales[2],
              minmax: (newScales[2].minmax = [
                Math.random() * -1000,
                Math.random() * 1000,
              ]),
            };
            return newScales;
          });
        }}
      >
        YScale
      </button>
    </>
  );
}

const Plugin: React.FC<{
  frame: PlotDrawFrame;
  eventEmitter: EventEmitter;
}> = ({ frame, eventEmitter }) => {
  const [clickState, setClickState] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    eventEmitter.addEventListener("click", (payload) => {
      setClickState({ x: payload.data.x, y: payload.data.y });
    });
  }, [eventEmitter]);
  return (
    <div>
      <p>{JSON.stringify(frame.scales)}</p>
      <p>{JSON.stringify(clickState)}</p>
    </div>
  );
};

const Crosshair: React.FC<{
  eventEmitter: EventEmitter;
}> = ({ eventEmitter }) => {
  const [moveState, setMoveState] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    eventEmitter.addEventListener("move", (payload) => {
      setMoveState(payload?.data ?? null);
    });
  }, [eventEmitter]);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: 0,
          border: "solid 1px red",
          top: 0,
          bottom: 0,
          opacity: moveState ? 1 : 0,
          pointerEvents: "none",
          transform: `translateX(${moveState ? moveState.x : 0}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          border: "solid 1px red",
          left: 0,
          right: 0,
          opacity: moveState ? 1 : 0,
          pointerEvents: "none",
          transform: `translateY(${moveState ? moveState.y : 0}px)`,
        }}
      />
    </div>
  );
};

const SpanSelect: React.FC<{
  eventEmitter: EventEmitter;
  onSelect: (params: {
    start: { x: number; y: number };
    end: { x: number; y: number };
  }) => void;
}> = ({ eventEmitter, onSelect }) => {
  const [selectState, setSelectState] = useState<{
    start: { x: number; y: number };
    end: { x: number; y: number };
  } | null>(null);

  const selectStateRef = React.useRef(selectState);
  selectStateRef.current = selectState;

  const onSelectRef = React.useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const unsubscribeDown = eventEmitter.addEventListener(
      "mousedown",
      (payload) => {
        setSelectState({
          start: payload.data,
          end: payload.data,
        });
      }
    );
    const unsubscribeUp = eventEmitter.addEventListener("mouseup", () => {
      if (selectStateRef.current) {
        setSelectState(null);
        onSelectRef.current(selectStateRef.current);
      }
    });
    const unsubscribeMove = eventEmitter.addEventListener("move", (payload) => {
      if (selectStateRef.current && payload) {
        setSelectState({
          start: selectStateRef.current.start,
          end: payload.data,
        });
      }
    });
    return () => {
      unsubscribeMove();
      unsubscribeDown();
      unsubscribeUp();
    };
  }, [eventEmitter, setSelectState]);

  return (
    <div>
      {selectState && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#0000ff22",
            left: `${Math.min(selectState.start.x, selectState.end.x)}px`,
            top: `${Math.min(selectState.start.y, selectState.end.y)}px`,
            width: `${Math.abs(selectState.end.x - selectState.start.x)}px`,
            height: `${Math.abs(selectState.end.y - selectState.start.y)}px`,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default App;
