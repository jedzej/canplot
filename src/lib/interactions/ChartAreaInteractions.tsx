import { useContext, useEffect, useId, useRef } from "react";
import {
  clampXPosToChartArea,
  clampYPosToChartArea,
  getScale,
  posToVal,
} from "../helpers";
import { useFrameState } from "../frameContext";
import {
  InteractionsBus,
  InteractionsIdContext,
  useGenericInteractionsEvent,
} from "./interactionsBus";
import type {
  ClickEvent,
  ContextMenuEvent,
  DblClickEvent,
  DocumentMouseUpEvent,
  MouseDownEvent,
  MouseUpEvent,
  MoveEvent,
  PointerSyncPosition,
  SpanSelectEvent,
  SyncEvent_Move,
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
  onContextMenu?: (event: ContextMenuEvent) => void;
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
  onContextMenu,
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
  useGenericInteractionsEvent("contextmenu", interactionsId, (event) => {
    onContextMenu?.(event);
  });

  return (
    <InteractionsIdContext.Provider value={interactionsId}>
      <ChartAreaInteractionsImpl
        className={className}
        style={style}
        sync={sync}
      />
      {children}
    </InteractionsIdContext.Provider>
  );
};

const ChartAreaInteractionsImpl: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  sync?: ChartAreaInteractionsProps["sync"];
}> = ({ className, style, sync }) => {
  const interactionsAreaRef = useRef<HTMLDivElement>(null);

  const _frame = useFrameState();

  const frameRef = useRef(_frame);
  frameRef.current = _frame;

  const interactionsId = useContext(InteractionsIdContext);

  const effectiveSyncKey = sync?.key || interactionsId;

  const selectStateRef = useRef<{
    xRangeCss: { start: number; end: number };
    yRangeCss: { start: number; end: number };
  } | null>(null);

  const lastSpanSelectSyncEventRef = useRef<SyncEvent_SpanSelect | null>(null);
  const lastMoveSyncEventRef = useRef<SyncEvent_Move | null>(null);

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
    const mouseUpListener = (event: MouseEvent) => {
      const lastSpanSelectSyncEvent = lastSpanSelectSyncEventRef.current;
      if (lastSpanSelectSyncEvent) {
        InteractionsBus.sync_spanselect.dispatchEvent(effectiveSyncKey, {
          ...lastSpanSelectSyncEvent,
          completed: true,
        });
      }
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

      const lastMove = lastMoveSyncEventRef.current;
      if (
        lastMove &&
        Object.entries(newKeys).some(
          ([key, value]) => lastMove.keys[key as keyof typeof newKeys] !== value
        )
      ) {
        const newMoveEvent = { ...lastMove, keys: newKeys };
        lastMoveSyncEventRef.current = newMoveEvent;
        InteractionsBus.sync_move.dispatchEvent(effectiveSyncKey, newMoveEvent);
      }

      const lastSpan = lastSpanSelectSyncEventRef.current;
      if (
        lastSpan &&
        Object.entries(newKeys).some(
          ([key, value]) => lastSpan.keys[key as keyof typeof newKeys] !== value
        )
      ) {
        // prevent default, because we're in the middle of spanning
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
      withPointerPositionRef.current(
        event,
        (positions, { cssX, cssY }, keys) => {
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
        }
      );
    };

    const mouseWheelListener = (event: WheelEvent) => {
      withPointerPositionRef.current(event, (positions, _, keys) => {
        const anyButtonPressed = Object.values(keys).some((v) => v);
        if (anyButtonPressed) {
          event.preventDefault();
          const deltaAbs =
            Math.abs(event.deltaY) > Math.abs(event.deltaX)
              ? event.deltaY
              : event.deltaX;
          InteractionsBus.sync_pressandwheel.dispatchEvent(effectiveSyncKey, {
            positions,
            keys,
            deltaX: event.deltaX,
            deltaY: event.deltaY,
            deltaAbs,
          });
        }
      });
    };

    document.addEventListener("mouseup", mouseUpListener);
    document.addEventListener("keydown", keyListener);
    document.addEventListener("keyup", keyListener);
    document.addEventListener("mousemove", mouseOverDocumentListener);
    const interactionsAreaElement = interactionsAreaRef.current;
    interactionsAreaElement?.addEventListener("wheel", mouseWheelListener, {
      passive: false,
    });
    return () => {
      document.removeEventListener("mouseup", mouseUpListener);
      document.removeEventListener("keydown", keyListener);
      document.removeEventListener("keyup", keyListener);
      document.removeEventListener("mousemove", mouseOverDocumentListener);
      interactionsAreaElement?.removeEventListener("wheel", mouseWheelListener);
    };
  }, [frameRef, effectiveSyncKey, withPointerPositionRef]);

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

  useGenericInteractionsEvent("sync_contextmenu", effectiveSyncKey, (event) => {
    const positions = pointerSyncPositionToInteractionsPosition(
      event.positions,
      frameRef.current
    );
    if (!positions) return;
    InteractionsBus.contextmenu.dispatchEvent(interactionsId, {
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
    lastMoveSyncEventRef.current = event;

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

  useGenericInteractionsEvent(
    "sync_pressandwheel",
    effectiveSyncKey,
    (event) => {
      const positions = pointerSyncPositionToInteractionsPosition(
        event.positions,
        frameRef.current
      );
      if (!positions) return;
      InteractionsBus.pressandwheel.dispatchEvent(interactionsId, {
        frame: frameRef.current,
        pointer: positions,
        keys: event.keys,
        deltaX: event.deltaX,
        deltaY: event.deltaY,
        deltaAbs: event.deltaAbs,
      });
    }
  );

  useGenericInteractionsEvent("sync_spanselect", effectiveSyncKey, (event) => {
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
        left: _frame.chartAreaCSS.x,
        top: _frame.chartAreaCSS.y,
        width: _frame.chartAreaCSS.width,
        height: _frame.chartAreaCSS.height,
        zIndex: 25,
        ...style,
      }}
      onDragStart={(e) => {
        e.preventDefault();
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
      onContextMenu={(event) => {
        event.preventDefault();
        withPointerPosition(event, (positions, _, keys) => {
          InteractionsBus.sync_contextmenu.dispatchEvent(effectiveSyncKey, {
            positions,
            keys,
          });
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
