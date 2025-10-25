import { useEffect, useId, useMemo, useRef, useState } from "react";
import { posToVal, valToPos, valToPxDistance } from "../helpers";
import { useFrame } from "../frameContext";
import { InteractionsBus, useInteractionsEvent } from "./interactionsBus";
import type {
  ClickEvent,
  DblClickEvent,
  DocumentMouseUpEvent,
  InteractionsEvent,
  InteractionsEventPointerPosition,
  MouseDownEvent,
  MouseUpEvent,
  MoveEvent,
  PointerSyncPosition,
  SpanSelectEvent,
} from "./types";

type ChartAreaInteractionsProps = {
  children: React.ReactNode;
  onDblClick?: (event: DblClickEvent) => void;
  onClick?: (event: ClickEvent) => void;
  onMouseMove?: (event: MoveEvent) => void;
  onMouseLeave?: (event: InteractionsEvent) => void;
  onMouseEnter?: (event: InteractionsEvent) => void;
  onMouseDown?: (event: MouseDownEvent) => void;
  onMouseUp?: (event: MouseUpEvent) => void;
  onDocumentMouseUp?: (event: DocumentMouseUpEvent) => void;
  onSpanSelect?: (event: SpanSelectEvent) => void;
  withCrosshair?: boolean;
  withSpanSelect?: boolean;
  className?: string;
  style?: React.CSSProperties;
  sync?: {
    key: string;
    xViaScaleId?: string;
    yViaScaleId?: string;
  };
};

export const ChartAreaInteractions: React.FC<ChartAreaInteractionsProps> = ({
  children,
  ...props
}) => {
  return <ChartAreaInteractionsImpl {...props} />;
};

const ChartAreaInteractionsImpl: React.FC<
  Omit<ChartAreaInteractionsProps, "children">
> = ({
  onDblClick,
  onClick,
  onMouseMove,
  onMouseDown,
  onMouseUp,
  onMouseEnter,
  onMouseLeave,
  onDocumentMouseUp,
  onSpanSelect,
  className,
  withSpanSelect,
  style,
  sync,
}) => {
  const interactionsAreaRef = useRef<HTMLDivElement>(null);

  const _frame = useFrame();
  const effectiveXSyncViaScaleId =
    sync?.xViaScaleId ?? _frame.scales.find((s) => s.origin === "x")?.id;
  const effectiveYSyncViaScaleId =
    sync?.yViaScaleId ?? _frame.scales.find((s) => s.origin === "y")?.id;

  const frameRef = useRef(_frame);
  frameRef.current = _frame;

  const id = useId();

  const effectiveSyncKey = sync?.key || id;

  const getRect = () => {
    return interactionsAreaRef.current?.getBoundingClientRect();
  };

  useEffect(() => {
    const listener = () => {
      InteractionsBus.documentmouseup.dispatchEvent(effectiveSyncKey, {
        frame: frameRef.current,
      });
    };
    document.addEventListener("mouseup", listener);
    return () => {
      document.removeEventListener("mouseup", listener);
    };
  }, [frameRef, effectiveSyncKey]);

  const pointerSyncPositionToInteractionsPosition = (
    pointerSyncPosition: PointerSyncPosition
  ): InteractionsEventPointerPosition | undefined => {
    const frame = frameRef.current;
    const cssX = pointerSyncPosition.x
      ? valToPos(
          frame,
          pointerSyncPosition.x.value,
          pointerSyncPosition.x.scaleId,
          "css"
        ) - frame.chartAreaCSS.x
      : 0;
    const cssY = pointerSyncPosition.y
      ? valToPos(
          frame,
          pointerSyncPosition.y.value,
          pointerSyncPosition.y.scaleId,
          "css"
        ) - frame.chartAreaCSS.y
      : 0;
    return {
      cssX,
      cssY,
      scaled: Object.fromEntries(
        frame.scales.map((scale) => {
          const pos = scale.origin === "y" ? cssX : cssY;

          return [scale.id, posToVal(frame, pos, scale.id, "css")];
        })
      ),
    };
  };

  const makePointerSyncPosition = (
    event: Pick<MouseEvent, "clientX" | "clientY">
  ): PointerSyncPosition | undefined => {
    const rect = getRect();
    const frame = frameRef.current;
    if (!rect) return;
    let x: PointerSyncPosition["x"] | null = null;
    let y: PointerSyncPosition["y"] | null = null;
    if (effectiveXSyncViaScaleId) {
      const cssX = event.clientX - rect.left;
      console.log("cssX", cssX, event.clientX, rect.left, frame.chartAreaCSS.x);
      x = {
        scaleId: effectiveXSyncViaScaleId,
        value: posToVal(frame, cssX, effectiveXSyncViaScaleId, "css"),
      };
    }
    if (effectiveYSyncViaScaleId) {
      const cssY = event.clientY - rect.top;
      console.log("cssY", cssY, event.clientY, rect.top, frame.chartAreaCSS.y);
      y = {
        scaleId: effectiveYSyncViaScaleId,
        value: posToVal(frame, cssY, effectiveYSyncViaScaleId, "css"),
      };
    }
    if (x === undefined && y === undefined) {
      return undefined;
    }
    return { x, y };
  };

  const [crosshairPosition, setCrosshairPosition] = useState<{
    cssX: number;
    cssY: number;
  } | null>(null);

  const [selectState, setSelectState] = useState<{
    xRangeRe: {
      start: number;
      end: number;
    };
    yRangeCss: {
      start: number;
      end: number;
    };
  } | null>(null);

  useInteractionsEvent("dblclick", id, (event) => {
    console.log("DblClick Event", event);
    onDblClick?.(event);
  });
  useInteractionsEvent("click", id, (event) => {
    console.log("Click Event", event);
    onClick?.(event);
  });
  useInteractionsEvent("move", id, (event) => {
    setCrosshairPosition(event.pointer);
    console.log("Move Event", JSON.stringify(event.pointer));
    onMouseMove?.(event);
  });
  useInteractionsEvent("mousedown", id, (event) => {
    onMouseDown?.(event);
  });
  useInteractionsEvent("mouseup", id, (event) => {
    onMouseUp?.(event);
  });
  useInteractionsEvent("documentmouseup", id, (event) => {
    onDocumentMouseUp?.(event);
  });
  useInteractionsEvent("spanselect", id, (event) => {
    onSpanSelect?.(event);
  });

  useInteractionsEvent("sync_dblclick", effectiveSyncKey, (event) => {
    console.log("DblClick sync event", event);
    const positions = pointerSyncPositionToInteractionsPosition(
      event.positions
    );
    if (!positions) return;
    InteractionsBus.dblclick.dispatchEvent(id, {
      frame: frameRef.current,
      pointer: positions,
    });
  });
  useInteractionsEvent("sync_click", effectiveSyncKey, (event) => {
    const positions = pointerSyncPositionToInteractionsPosition(
      event.positions
    );
    if (!positions) return;
    InteractionsBus.click.dispatchEvent(id, {
      frame: frameRef.current,
      pointer: positions,
    });
  });
  useInteractionsEvent("sync_move", effectiveSyncKey, (event) => {
    const positions =
      event.positions &&
      pointerSyncPositionToInteractionsPosition(event.positions);

    console.log("move", JSON.stringify(positions));
    if (!positions) return;
    InteractionsBus.move.dispatchEvent(id, {
      frame: frameRef.current,
      pointer: positions,
    });
  });
  useInteractionsEvent("sync_mousedown", effectiveSyncKey, (event) => {
    const positions = pointerSyncPositionToInteractionsPosition(
      event.positions
    );
    if (!positions) return;
    InteractionsBus.mousedown.dispatchEvent(id, {
      frame: frameRef.current,
      pointer: positions,
    });
  });
  useInteractionsEvent("sync_mouseup", effectiveSyncKey, (event) => {
    const positions = pointerSyncPositionToInteractionsPosition(
      event.positions
    );
    if (!positions) return;
    InteractionsBus.mouseup.dispatchEvent(id, {
      frame: frameRef.current,
      pointer: positions,
    });
  });
  useInteractionsEvent("sync_spanselect", effectiveSyncKey, (event) => {
    const positions = pointerSyncPositionToInteractionsPosition(event.xRange);
    if (!positions) return;

    InteractionsBus.spanselect.dispatchEvent(id, {
      frame: frameRef.current,
      pointer: positions,
    });
  });

  console.log("SELECT", selectState);

  const selectStateRef = useRef(selectState);
  selectStateRef.current = selectState;

  const onSelectRef = useRef(onSpanSelect);
  onSelectRef.current = onSpanSelect;

  const spanSelectPositions = useMemo(() => {
    const mode: "none" | "x" | "y" | "box" = (() => {
      if (!selectState) return "none";

      const dY = valToPxDistance(
        _frame,
        Math.abs(selectState.y.start - selectState.y.end),
        selectState.y.scaleId,
        "css"
      );
      const dX = valToPxDistance(
        _frame,
        Math.abs(selectState.x.start - selectState.x.end),
        selectState.x.scaleId,
        "css"
      );

      if (dY < 10 && dX < 10) return "none";

      if (dY > 30 && dX > 30) return "box";
      return dX > dY ? "x" : "y";
    })();

    const left = (() => {
      if (!selectState || mode === "none") return 0;
      if (mode === "x" || mode === "box") {
        return valToPos(
          _frame,
          Math.min(selectState.x.start, selectState.x.end),
          selectState.x.scaleId,
          "css"
        );
      }
      return 0;
    })();

    const top = (() => {
      if (!selectState || mode === "none") return 0;
      if (mode === "y" || mode === "box") {
        return valToPos(
          _frame,
          Math.min(selectState.y.start, selectState.y.end),
          selectState.y.scaleId,
          "css"
        );
      }
      return 0;
    })();

    const width = (() => {
      if (!selectState || mode === "none") return 0;
      if (mode === "x" || mode === "box") {
        return valToPos(
          _frame,
          Math.abs(selectState.x.start - selectState.x.end),
          selectState.x.scaleId,
          "css"
        );
      }
      return _frame.chartAreaCSS.width;
    })();

    const height = (() => {
      if (!selectState || mode === "none") return 0;
      if (mode === "y" || mode === "box") {
        return valToPos(
          _frame,
          Math.abs(selectState.y.start - selectState.y.end),
          selectState.y.scaleId,
          "css"
        );
      }
      return _frame.chartAreaCSS.height;
    })();

    return { mode, left, top, width, height };
  }, [selectState, _frame]);

  // const spanSelectEventHandlers = withSpanSelect
  //   ? {
  //       onMouseDown: (position: PointerSyncPosition) => {
  //         console.log("Mouse Down", position);
  //         setSelectState({ start: position, end: position });
  //         console.log("Mouse Down", position);
  //       },
  //       onMouseUp: () => {
  //         setSelectState(null);
  //         if (!selectStateRef.current) return;
  //         const frame = frameRef.current;
  //         if (!frame) return;

  //         switch (spanSelectPositionsRef.current.mode) {
  //           case "none":
  //             break;
  //           case "x":
  //           case "y":
  //           case "box":
  //             onSpanSelect?.({
  //               mode: spanSelectPositionsRef.current.mode,
  //               positions: Object.fromEntries(
  //                 frame.scales.map((scale) => {
  //                   const fromPos =
  //                     scale.origin === "x"
  //                       ? spanSelectPositionsRef.current.left
  //                       : spanSelectPositionsRef.current.top;
  //                   const toPos =
  //                     scale.origin === "x"
  //                       ? spanSelectPositionsRef.current.left +
  //                         spanSelectPositionsRef.current.width
  //                       : spanSelectPositionsRef.current.top +
  //                         spanSelectPositionsRef.current.height;
  //                   const fromVal = posToVal(frame, fromPos, scale.id, "css");
  //                   const toVal = posToVal(frame, toPos, scale.id, "css");
  //                   return [scale.id, { from: fromVal, to: toVal }];
  //                 })
  //               ),
  //             });
  //             break;
  //         }
  //       },
  //       onMouseMove: (position: PointerPosition) => {
  //         setSelectState((prev) =>
  //           prev ? { start: prev.start, end: position } : null
  //         );
  //       },
  //     }
  //   : undefined;

  const spanSelectPositionsRef = useRef(spanSelectPositions);
  spanSelectPositionsRef.current = spanSelectPositions;

  return (
    <div
      ref={interactionsAreaRef}
      id="interactions"
      className={className}
      style={{
        position: "absolute",
        backgroundColor: "#0000ff11",
        left: _frame.chartAreaCSS.x,
        top: _frame.chartAreaCSS.y,
        width: _frame.chartAreaCSS.width,
        height: _frame.chartAreaCSS.height,
        zIndex: 25,
        cursor: "crosshair",
        ...style,
      }}
      onClick={(event) => {
        const positions = makePointerSyncPosition(event);
        if (positions) {
          InteractionsBus.sync_click.dispatchEvent(effectiveSyncKey, {
            positions,
          });
        }
      }}
      onMouseLeave={() => {
        InteractionsBus.sync_move.dispatchEvent(effectiveSyncKey, {
          positions: null,
        });
      }}
      onMouseMove={(event) => {
        const positions = makePointerSyncPosition(event);
        if (positions) {
          InteractionsBus.sync_move.dispatchEvent(effectiveSyncKey, {
            positions,
          });
        }
      }}
      onMouseDown={(event) => {
        const positions = makePointerSyncPosition(event);
        if (positions) {
          InteractionsBus.sync_mousedown.dispatchEvent(effectiveSyncKey, {
            positions,
          });
        }
      }}
      onMouseUp={(event) => {
        const positions = makePointerSyncPosition(event);
        if (positions) {
          InteractionsBus.sync_mouseup.dispatchEvent(effectiveSyncKey, {
            positions,
          });
        }
      }}
      onDoubleClick={(event) => {
        const positions = makePointerSyncPosition(event);
        if (positions) {
          InteractionsBus.sync_dblclick.dispatchEvent(effectiveSyncKey, {
            positions,
          });
        }
      }}
    >
      {
        <>
          <div
            style={{
              position: "absolute",
              left: 0,
              borderLeft: "solid 1px red",
              top: 0,
              height: _frame.chartAreaCSS.height,
              opacity: crosshairPosition ? 1 : 0,
              pointerEvents: "none",
              transform: `translateX(${
                crosshairPosition
                  ? crosshairPosition.cssX
                  : 0
              }px)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              height: 0,
              borderTop: "solid 1px red",
              left: 0,
              width: _frame.chartAreaCSS.width,
              opacity: crosshairPosition ? 1 : 0,
              pointerEvents: "none",
              transform: `translateY(${
                crosshairPosition ? crosshairPosition.cssY : 0
              }px)`,
            }}
          />
        </>
      }
      {selectState && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#0000ff22",
            left: `${spanSelectPositions.left}px`,
            top: `${spanSelectPositions.top}px`,
            width: `${spanSelectPositions.width}px`,
            height: `${spanSelectPositions.height}px`,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};
