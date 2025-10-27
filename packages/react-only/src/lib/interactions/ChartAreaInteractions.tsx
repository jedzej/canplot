import { useContext, useEffect, useId, useRef } from "react";
import {
  clampXPosToChartArea,
  clampYPosToChartArea,
  getScale,
  posToVal,
} from "../helpers";
import { useFrame } from "../frameContext";
import {
  InteractionsBus,
  InteractionsIdContext,
  useGenericInteractionsEvent,
} from "./interactionsBus";
import type {
  ClickEvent,
  DblClickEvent,
  DocumentMouseUpEvent,
  MouseDownEvent,
  MouseUpEvent,
  MoveEvent,
  PointerSyncPosition,
  SpanSelectEvent,
  SyncEvent_SpanSelect,
} from "./types";
import {
  extrapolateScaledSelectionRange,
  makePointerSyncPosition,
  pointerSyncPositionToInteractionsPosition,
} from "./positioning";

type ChartAreaInteractionsProps = {
  onDblClick?: (event: DblClickEvent) => void;
  onClick?: (event: ClickEvent) => void;
  onMouseMove?: (event: MoveEvent) => void;
  onMouseDown?: (event: MouseDownEvent) => void;
  onMouseUp?: (event: MouseUpEvent) => void;
  onDocumentMouseUp?: (event: DocumentMouseUpEvent) => void;
  onSpanSelect?: (event: SpanSelectEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  sync?: {
    key: string;
    xViaScaleId?: string;
    yViaScaleId?: string;
  };
  children?: React.ReactNode;
};

export const ChartAreaInteractions: React.FC<ChartAreaInteractionsProps> = ({
  id,
  onClick,
  onDblClick,
  onMouseMove,
  onMouseDown,
  onMouseUp,
  onDocumentMouseUp,
  onSpanSelect,
  className,
  style,
  sync,
  children,
}) => {
  const fallbackInteractionsId = useId();
  const interactionsId = id || fallbackInteractionsId;

  useGenericInteractionsEvent("dblclick", interactionsId, (event) => {
    onDblClick?.(event);
  });
  useGenericInteractionsEvent("click", interactionsId, (event) => {
    onClick?.(event);
  });
  useGenericInteractionsEvent("move", interactionsId, (event) => {
    onMouseMove?.(event);
  });
  useGenericInteractionsEvent("mousedown", interactionsId, (event) => {
    onMouseDown?.(event);
  });
  useGenericInteractionsEvent("mouseup", interactionsId, (event) => {
    onMouseUp?.(event);
  });
  useGenericInteractionsEvent("documentmouseup", interactionsId, (event) => {
    onDocumentMouseUp?.(event);
  });
  useGenericInteractionsEvent("spanselect", interactionsId, (event) => {
    onSpanSelect?.(event);
  });
  return (
    <InteractionsIdContext value={interactionsId}>
      <ChartAreaInteractionsImpl
        className={className}
        style={style}
        sync={sync}
      />
      {children}
    </InteractionsIdContext>
  );
};

const ChartAreaInteractionsImpl: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  sync?: ChartAreaInteractionsProps["sync"];
}> = ({ className, style, sync }) => {
  const interactionsAreaRef = useRef<HTMLDivElement>(null);

  const _frame = useFrame();

  const frameRef = useRef(_frame);
  frameRef.current = _frame;

  const interactionsId = useContext(InteractionsIdContext);

  const effectiveSyncKey = sync?.key || interactionsId;

  const selectStateRef = useRef<{
    xRangeCss: { start: number; end: number };
    yRangeCss: { start: number; end: number };
  } | null>(null);

  const lastSpanSelectSyncEventRef = useRef<SyncEvent_SpanSelect | null>(null);

  const getRect = () => {
    const root = interactionsAreaRef.current?.parentElement;
    if (!root) {
      return undefined;
    }
    if (root.dataset.canplotroot === undefined) {
      throw new Error(
        "ChartAreaInteractions must be used within a CanPlot component"
      );
    }
    return root.getBoundingClientRect();
  };

  const withPointerPosition = (
    event: Pick<
      MouseEvent,
      "clientX" | "clientY" | "ctrlKey" | "altKey" | "shiftKey" | "metaKey"
    >,
    foo: (
      pointerSyncPosition: PointerSyncPosition,
      css: { cssX: number; cssY: number },
      keys: {
        ctrlKey: boolean;
        altKey: boolean;
        shiftKey: boolean;
        metaKey: boolean;
      }
    ) => void
  ) => {
    const positions = makePointerSyncPosition(
      event,
      getRect(),
      frameRef.current,
      sync?.xViaScaleId,
      sync?.yViaScaleId
    );
    if (positions) {
      foo(
        positions.pointerSyncPosition,
        { cssX: positions.cssX, cssY: positions.cssY },
        {
          ctrlKey: event.ctrlKey,
          altKey: event.altKey,
          shiftKey: event.shiftKey,
          metaKey: event.metaKey,
        }
      );
    }
  };

  const withPointerPositionRef = useRef(withPointerPosition);
  withPointerPositionRef.current = withPointerPosition;

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      InteractionsBus.documentmouseup.dispatchEvent(effectiveSyncKey, {
        frame: frameRef.current,
        keys: {
          ctrlKey: event.ctrlKey,
          altKey: event.altKey,
          shiftKey: event.shiftKey,
          metaKey: event.metaKey,
        },
      });
    };
    const keyListener = (event: KeyboardEvent) => {
      const newKeys = {
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        shiftKey: event.shiftKey,
        metaKey: event.metaKey,
      };
      const lastSpan = lastSpanSelectSyncEventRef.current;
      if (
        lastSpan &&
        Object.entries(newKeys).some(
          ([key, value]) => lastSpan.keys[key as keyof typeof newKeys] !== value
        )
      ) {
        event.stopPropagation();
        event.preventDefault();
        const newSpanEvent = { ...lastSpan, keys: newKeys };
        lastSpanSelectSyncEventRef.current = newSpanEvent;
        InteractionsBus.sync_spanselect.dispatchEvent(
          effectiveSyncKey,
          newSpanEvent
        );
      }
    };

    const mouseOverDocumentListener = (event: MouseEvent) => {
      withPointerPosition(event, (positions, { cssX, cssY }, keys) => {
        const selectState = selectStateRef.current;
        if (!selectState) return;
        if (!positions.x || !positions.y) return;

        const frame = frameRef.current;
        const startCSSX = selectState.xRangeCss.start;
        const endCSSX = cssX;
        const startCSSY = selectState.yRangeCss.start;
        const endCSSY = cssY;
        const xScale = getScale(frame, positions.x.scaleId);
        const yScale = getScale(frame, positions.y.scaleId);
        selectStateRef.current = {
          xRangeCss: { start: startCSSX, end: endCSSX },
          yRangeCss: { start: startCSSY, end: endCSSY },
        };

        let mode: "none" | "x" | "y" | "box" = "none";
        const dY = Math.abs(startCSSY - endCSSY);
        const dX = Math.abs(startCSSX - endCSSX);

        console.log(startCSSX);

        if (dY < 10 && dX < 10) {
          mode = "none";
        } else if (dY > 30 && dX > 30) {
          mode = "box";
        } else if (dY > dX) {
          mode = "y";
        } else {
          mode = "x";
        }

        const xRange: SyncEvent_SpanSelect["xRange"] =
          mode === "x" || mode === "box"
            ? {
                scaleId: xScale.id,
                from: posToVal(
                  frame,
                  clampXPosToChartArea(frameRef.current, startCSSX, "css"),
                  xScale.id,
                  "css"
                ),

                to: posToVal(
                  frame,
                  clampXPosToChartArea(frameRef.current, endCSSX, "css"),
                  xScale.id,
                  "css"
                ),
              }
            : undefined;

        const yRange: SyncEvent_SpanSelect["yRange"] =
          mode === "y" || mode === "box"
            ? {
                scaleId: yScale.id,
                from: posToVal(
                  frame,
                  clampYPosToChartArea(frameRef.current, startCSSY, "css"),
                  yScale.id,
                  "css"
                ),

                to: posToVal(
                  frame,
                  clampYPosToChartArea(frameRef.current, endCSSY, "css"),
                  yScale.id,
                  "css"
                ),
              }
            : undefined;

        const spanSelectSyncEvent: SyncEvent_SpanSelect = {
          mode,
          xRange,
          yRange,
          completed: false,
          keys,
        };
        lastSpanSelectSyncEventRef.current = spanSelectSyncEvent;

        InteractionsBus.sync_spanselect.dispatchEvent(
          effectiveSyncKey,
          spanSelectSyncEvent
        );
      });
    };

    document.addEventListener("mouseup", listener);
    document.addEventListener("keydown", keyListener);
    document.addEventListener("keyup", keyListener);
    document.addEventListener("mousemove", mouseOverDocumentListener);
    return () => {
      document.removeEventListener("mouseup", listener);
      document.removeEventListener("keydown", keyListener);
      document.removeEventListener("keyup", keyListener);
      document.removeEventListener("mousemove", mouseOverDocumentListener);
    };
  }, [frameRef, effectiveSyncKey]);

  // SYNC EVENTS
  useGenericInteractionsEvent("sync_dblclick", effectiveSyncKey, (event) => {
    const positions = pointerSyncPositionToInteractionsPosition(
      event.positions,
      frameRef.current
    );
    if (!positions) return;
    InteractionsBus.dblclick.dispatchEvent(interactionsId, {
      frame: frameRef.current,
      pointer: positions,
      keys: event.keys,
    });
  });

  useGenericInteractionsEvent("sync_click", effectiveSyncKey, (event) => {
    const positions = pointerSyncPositionToInteractionsPosition(
      event.positions,
      frameRef.current
    );
    if (!positions) return;
    InteractionsBus.click.dispatchEvent(interactionsId, {
      frame: frameRef.current,
      pointer: positions,
      keys: event.keys,
    });
  });

  useGenericInteractionsEvent("sync_move", effectiveSyncKey, (event) => {
    const positions = event.positions
      ? pointerSyncPositionToInteractionsPosition(
          event.positions,
          frameRef.current
        )
      : null;

    InteractionsBus.move.dispatchEvent(interactionsId, {
      frame: frameRef.current,
      pointer: positions ?? null,
      keys: event.keys,
    });
  });

  useGenericInteractionsEvent("sync_mousedown", effectiveSyncKey, (event) => {
    const positions = pointerSyncPositionToInteractionsPosition(
      event.positions,
      frameRef.current
    );
    if (!positions) return;

    InteractionsBus.mousedown.dispatchEvent(interactionsId, {
      frame: frameRef.current,
      pointer: positions,
      keys: event.keys,
    });
  });

  useGenericInteractionsEvent("sync_mouseup", effectiveSyncKey, (event) => {
    const positions = pointerSyncPositionToInteractionsPosition(
      event.positions,
      frameRef.current
    );
    if (!positions) return;
    InteractionsBus.mouseup.dispatchEvent(interactionsId, {
      frame: frameRef.current,
      pointer: positions,
      keys: event.keys,
    });
  });

  useGenericInteractionsEvent("sync_spanselect", effectiveSyncKey, (event) => {
    console.log("Received sync_spanselect", event.xRange);
    const xMappedRange = extrapolateScaledSelectionRange(
      "x",
      event.xRange,
      frameRef.current
    );
    const yMappedRange = extrapolateScaledSelectionRange(
      "y",
      event.yRange,
      frameRef.current
    );

    const xRanges = xMappedRange.scaled;
    const yRanges = yMappedRange.scaled;

    if (event.completed) {
      selectStateRef.current = null;
    }

    InteractionsBus.spanselect.dispatchEvent(interactionsId, {
      mode: event.mode,
      frame: frameRef.current,
      xRanges,
      yRanges,
      completed: event.completed,
      x: { fromCSS: xMappedRange.fromCSS, toCSS: xMappedRange.toCSS },
      y: { fromCSS: yMappedRange.fromCSS, toCSS: yMappedRange.toCSS },
      keys: event.keys,
    });
  });

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
        withPointerPosition(event, (positions, _, keys) => {
          InteractionsBus.sync_click.dispatchEvent(effectiveSyncKey, {
            positions,
            keys,
          });
        });
      }}
      onMouseLeave={(event) => {
        withPointerPosition(event, (_, __, keys) => {
          InteractionsBus.sync_move.dispatchEvent(effectiveSyncKey, {
            positions: null,
            keys,
          });
        });
      }}
      onMouseMove={(event) => {
        withPointerPosition(event, (positions, _, keys) => {
          console.log("move", positions)
          InteractionsBus.sync_move.dispatchEvent(effectiveSyncKey, {
            positions,
            keys,
          });
        });
      }}
      onMouseDown={(event) => {
        withPointerPosition(event, (positions, { cssX, cssY }, keys) => {
          InteractionsBus.sync_mousedown.dispatchEvent(effectiveSyncKey, {
            positions,
            keys,
          });
          lastSpanSelectSyncEventRef.current = null;
          console.log("onMouseDown", cssX, cssY)
          selectStateRef.current = {
            xRangeCss: { start: cssX, end: cssX },
            yRangeCss: { start: cssY, end: cssY },
          };
        });
      }}
      onMouseUp={(event) => {
        withPointerPosition(event, (positions, _, keys) => {
          InteractionsBus.sync_mouseup.dispatchEvent(effectiveSyncKey, {
            positions,
            keys,
          });
          const lastSpanSelectEvent = lastSpanSelectSyncEventRef.current;
          lastSpanSelectSyncEventRef.current = null;
          const selectState = selectStateRef.current;
          selectStateRef.current = null;
          if (selectState && lastSpanSelectEvent) {
            const spanSelectEvent = {
              ...lastSpanSelectEvent,
              keys,
              completed: true,
            };
            InteractionsBus.sync_spanselect.dispatchEvent(
              effectiveSyncKey,
              spanSelectEvent
            );
          }
        });
      }}
      onDoubleClick={(event) => {
        withPointerPosition(event, (positions, _, keys) => {
          InteractionsBus.sync_dblclick.dispatchEvent(effectiveSyncKey, {
            positions,
            keys,
          });
        });
      }}
    />
  );
};
