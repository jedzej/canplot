import React, { useEffect, useMemo, useState } from "react";
import type { PlotScaleConfig } from "./lib/types";
import { makeEventEmitter, type EventEmitter } from "./lib/eventEmitter";
import { CanPlot } from "./lib/CanPlot";
import { useFrame } from "./lib/frameContext";
import { posToVal, valToPos } from "./lib/helpers";

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

  const [eventEmitter] = useState<EventEmitter>(() => {
    return makeEventEmitter();
  });

  return (
    <>
      <CanPlot
        configuration={{
          padding: {
            // bottom: 0,
            // left: 0,
            // right: 0,
            // top: 0,
            bottom: 20,
            left: 40,
            right: 20,
            top: 20,
          },
          scales,
          series: [],
        }}
      >
        <Crosshair eventEmitter={eventEmitter} />
        <SpanSelect
          eventEmitter={eventEmitter}
          onSelect={(selectState) => {
            console.log("Select", selectState);
          }}
        />
        <ChartAreaInteractions eventEmitter={eventEmitter} />
        {/* <AxesOverlay frame={frame} eventEmitter={eventEmitter} /> */}
        <Rect />
      </CanPlot>

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

const ChartAreaInteractions: React.FC<{
  eventEmitter: EventEmitter;
}> = ({ eventEmitter }) => {
  const interactionsAreaRef = React.useRef<HTMLDivElement>(null);

  const frame = useFrame();

  const getRect = () => {
    return interactionsAreaRef.current?.getBoundingClientRect();
  };

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      eventEmitter.dispatchEvent("documentmouseup", { frame, event });
    };
    document.addEventListener("mouseup", listener);
    return () => {
      document.removeEventListener("mouseup", listener);
    };
  }, [eventEmitter, frame]);

  const makePositions = (event: Pick<MouseEvent, "clientX" | "clientY">) => {
    const rect = getRect();
    if (!rect) return;
    return {
      cssX: event.clientX - rect.left,
      cssY: event.clientY - rect.top,
      scaled: Object.fromEntries(
        frame.scales.map((scale) => {
          const pos =
            scale.origin === "y"
              ? event.clientY - rect.top
              : event.clientX - rect.left;

          return [scale.id, posToVal(frame, pos, scale.id, "canvas")];
        })
      ),
    };
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
        const positions = makePositions(event);
        if (!positions) return;
        eventEmitter.dispatchEvent("click", {
          frame,
          event,
          data: positions,
        });
      }}
      onMouseLeave={() => {
        eventEmitter.dispatchEvent("move", null);
      }}
      onMouseMove={(event) => {
        const positions = makePositions(event);
        if (!positions) return;
        eventEmitter.dispatchEvent("move", {
          frame,
          event,
          data: positions,
        });
      }}
      onMouseDown={(event) => {
        const positions = makePositions(event);
        if (!positions) return;
        eventEmitter.dispatchEvent("mousedown", {
          frame,
          event,
          data: positions,
        });
      }}
      onMouseUp={(event) => {
        const positions = makePositions(event);
        if (!positions) return;
        eventEmitter.dispatchEvent("mouseup", {
          frame,
          event,
          data: positions,
        });
      }}
      onDoubleClick={(event) => {
        const positions = makePositions(event);
        if (!positions) return;
        eventEmitter.dispatchEvent("dblclick", {
          frame,
          event,
          data: positions,
        });
      }}
    />
  );
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
    <div>
      {JSON.stringify(moveState)}
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
    </div>
  );
};

const SpanSelect: React.FC<{
  eventEmitter: EventEmitter;
  onSelect: (params: {
    mode: "x" | "y" | "box";
    positions: Record<
      string,
      {
        from: number;
        to: number;
      }
    >;
  }) => void;
}> = ({ eventEmitter, onSelect }) => {
  const [selectState, setSelectState] = useState<{
    start: { cssX: number; cssY: number };
    end: { cssX: number; cssY: number };
  } | null>(null);

  const frame = useFrame();

  const selectStateRef = React.useRef(selectState);
  selectStateRef.current = selectState;

  const onSelectRef = React.useRef(onSelect);
  onSelectRef.current = onSelect;

  const positions = useMemo(() => {
    const mode = (() => {
      if (!selectState) return "none";

      const dY = Math.abs(selectState.start.cssY - selectState.end.cssY);
      const dX = Math.abs(selectState.start.cssX - selectState.end.cssX);

      if (dY < 10 && dX < 10) return "none";

      if (dY > 30 && dX > 30) return "box";
      return dX > dY ? "x" : "y";
    })();

    const left = (() => {
      if (!selectState || mode === "none") return 0;
      if (mode === "x" || mode === "box") {
        return Math.min(selectState.start.cssX, selectState.end.cssX);
      }
      return 0;
    })();

    const top = (() => {
      if (!selectState || mode === "none") return 0;
      if (mode === "y" || mode === "box") {
        return Math.min(selectState.start.cssY, selectState.end.cssY);
      }
      return 0;
    })();

    const width = (() => {
      if (!selectState || mode === "none") return 0;
      if (mode === "x" || mode === "box") {
        return Math.abs(selectState.start.cssX - selectState.end.cssX);
      }
      return frame.chartAreaCSS.width;
    })();

    const height = (() => {
      if (!selectState || mode === "none") return 0;
      if (mode === "y" || mode === "box") {
        return Math.abs(selectState.start.cssY - selectState.end.cssY);
      }
      return frame.chartAreaCSS.height;
    })();

    return { mode, left, top, width, height };
  }, [selectState, frame.chartAreaCSS.height, frame.chartAreaCSS.width]);

  const modeRef = React.useRef(positions);
  modeRef.current = positions;

  const frameRef = React.useRef(frame);
  frameRef.current = frame;

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
      setSelectState(null);
      if (!selectStateRef.current) return;
      const frame = frameRef.current;
      if (!frame) return;

      switch (modeRef.current.mode) {
        case "none":
          break;
        case "x":
        case "y":
        case "box":
          onSelectRef.current({
            mode: modeRef.current.mode,
            positions: Object.fromEntries(
              frame.scales.map((scale) => {
                const fromPos =
                  scale.origin === "x"
                    ? modeRef.current.left
                    : modeRef.current.top;
                const toPos =
                  scale.origin === "x"
                    ? modeRef.current.left + modeRef.current.width
                    : modeRef.current.top + modeRef.current.height;
                const fromVal = posToVal(frame, fromPos, scale.id, "css");
                const toVal = posToVal(frame, toPos, scale.id, "css");
                return [scale.id, { from: fromVal, to: toVal }];
              })
            ),
          });
          break;
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
  }, [eventEmitter, setSelectState, frameRef, modeRef, onSelectRef]);

  return (
    <div
      style={{
        zIndex: 10,
        inset: 0,
        position: "absolute",
      }}
    >
      {selectState && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#0000ff22",
            left: `${modeRef.current.left + frame.chartAreaCSS.x}px`,
            top: `${modeRef.current.top + frame.chartAreaCSS.y}px`,
            width: `${modeRef.current.width}px`,
            height: `${modeRef.current.height}px`,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default App;
