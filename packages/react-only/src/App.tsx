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
          series: [],
        }}
        renderOver={({ frame, eventEmitter }) => {
          return (
            <>
              <Crosshair eventEmitter={eventEmitter} frame={frame} />
              <SpanSelect
                eventEmitter={eventEmitter}
                onSelect={(selectState) => {
                  console.log("Select", selectState);
                }}
                frame={frame}
              />
              <ChartAreaInteractions
                eventEmitter={eventEmitter}
                frame={frame}
              />
              {/* <AxesOverlay frame={frame} eventEmitter={eventEmitter} /> */}
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

const ChartAreaInteractions: React.FC<{
  eventEmitter: EventEmitter;
  frame: PlotDrawFrame;
}> = ({ eventEmitter, frame }) => {
  const interactionsAreaRef = React.useRef<HTMLDivElement>(null);

  const getRect = () => {
    return interactionsAreaRef.current?.getBoundingClientRect();
  };


  return (
    <div
      ref={interactionsAreaRef}
      id="interactions"
      style={{
        position: "absolute",
        backgroundColor: "#0000ff11",
        left: frame.chartAreaCSS.x,
        top: frame.chartAreaCSS.y,
        width: frame.chartAreaCSS.width,
        height: frame.chartAreaCSS.height,
        zIndex: 25,
        cursor: "crosshair",
      }}
      onClick={(event) => {
        const rect = getRect();
        if (!rect) return;
        eventEmitter.dispatchEvent("click", {
          frame,
          event,
          data: {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            scaled: {},
          },
        });
      }}
      onMouseLeave={() => {
        eventEmitter.dispatchEvent("move", null);
      }}
      onMouseMove={(event) => {
        const rect = getRect();
        if (!rect) return;
        eventEmitter.dispatchEvent("move", {
          frame,
          event,
          data: {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            scaled: {},
          },
        });
      }}
      onMouseDown={(event) => {
        const rect = getRect();
        if (!rect) return;
        eventEmitter.dispatchEvent("mousedown", {
          frame,
          event,
          data: {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            scaled: {},
          },
        });
      }}
      onMouseUp={(event) => {
        const rect = getRect();
        if (!rect) return;
        eventEmitter.dispatchEvent("mouseup", {
          frame,
          event,
          data: {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            scaled: {},
          },
        });
      }}
      onDoubleClick={(event) => {
        const rect = getRect();
        if (!rect) return;
        eventEmitter.dispatchEvent("dblclick", {
          frame,
          event,
          data: {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            scaled: {},
          },
        });
      }}
    />
  );
};

const Crosshair: React.FC<{
  eventEmitter: EventEmitter;
  frame: PlotDrawFrame;
}> = ({ eventEmitter, frame }) => {
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
          borderLeft: "solid 1px red",
          top: frame.chartAreaCSS.y,
          height: frame.chartAreaCSS.height,
          opacity: moveState ? 1 : 0,
          pointerEvents: "none",
          transform: `translateX(${
            moveState ? moveState.x + frame.chartAreaCSS.x : 0
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
  frame: PlotDrawFrame;
}> = ({ eventEmitter, onSelect, frame }) => {
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

  const mode = (() => {
    if (!selectState) return "none";
    if (Math.abs(selectState.start.x - selectState.end.x) < 30) return "y";
    if (Math.abs(selectState.start.y - selectState.end.y) < 30) return "x";
    return "box";
  })();

  const left = (() => {
    if (!selectState || mode === "none") return 0;
    if (mode === "x" || mode === "box") {
      return Math.min(selectState.start.x, selectState.end.x);
    }
    return 0;
  })();

  const top = (() => {
    if (!selectState || mode === "none") return 0;
    if (mode === "y" || mode === "box") {
      return Math.min(selectState.start.y, selectState.end.y);
    }
    return 0;
  })();

  const width = (() => {
    if (!selectState || mode === "none") return 0;
    if (mode === "x" || mode === "box") {
      return Math.abs(selectState.start.x - selectState.end.x);
    }
    return frame.chartAreaCSS.width;
  })();

  const height = (() => {
    if (!selectState || mode === "none") return 0;
    if (mode === "y" || mode === "box") {
      return Math.abs(selectState.start.y - selectState.end.y);
    }
    return frame.chartAreaCSS.height;
  })();

  return (
    <div
      style={{
        backgroundColor: "#0000ff11",
        zIndex: 10,
        inset: 0,
        position: "absolute",
        // pointerEvents: selectState ? "auto" : "none",
      }}
    >
      {selectState && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#0000ff22",
            left:  `${left + frame.chartAreaCSS.x}px`,
            top: `${top + frame.chartAreaCSS.y}px`,
            width: `${width}px`,
            height: `${height}px`,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default App;
