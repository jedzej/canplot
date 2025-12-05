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

  const moveSyncKey = sync?.key || interactionsId;

  const selectStateRef = useRef<{
    xRangeCss: { start: number; end: number };
    yRangeCss: { start: number; end: number };
  } | null>(null);

  const lastSpanSelectEventRef = useRef<SpanSelectEvent | null>(null);
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
      const lastSpanSelectSyncEvent = lastSpanSelectEventRef.current;
      if (lastSpanSelectSyncEvent) {
        InteractionsBus.spanselect.dispatchEvent(interactionsId, {
          ...lastSpanSelectSyncEvent,
          completed: true,
        });
      }
      InteractionsBus.documentmouseup.dispatchEvent(interactionsId, {
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
        InteractionsBus.sync_move.dispatchEvent(moveSyncKey, newMoveEvent);
      }

      const lastSpan = lastSpanSelectEventRef.current;
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
        lastSpanSelectEventRef.current = newSpanEvent;
        InteractionsBus.spanselect.dispatchEvent(interactionsId, newSpanEvent);
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

          let mode: "below_threshold" | "x" | "y" | "box" = "below_threshold";
          const dY = Math.abs(startCSSY - endCSSY);
          const dX = Math.abs(startCSSX - endCSSX);

          if (dY < 10 && dX < 10) {
            mode = "below_threshold";
          } else if (dY > 30 && dX > 30) {
            mode = "box";
          } else if (dY > dX) {
            mode = "y";
          } else {
            mode = "x";
          }

          const xRange: SyncEvent_SpanSelect["xRange"] = {
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
          };

          const yRange: SyncEvent_SpanSelect["yRange"] = {
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
          };

          const xMappedRange =
            xRange &&
            extrapolateScaledSelectionRange("x", xRange, frameRef.current);
          const yMappedRange =
            yRange &&
            extrapolateScaledSelectionRange("y", yRange, frameRef.current);

          const xRanges = xMappedRange?.scaled;
          const yRanges = yMappedRange?.scaled;

          const spanSelectEvent: SpanSelectEvent = {
            mode,
            frame: frameRef.current,
            completed: false,
            x: {
              css: xMappedRange && {
                from: xMappedRange.fromCSS,
                to: xMappedRange.toCSS,
              },
              scaled: xRanges ?? [],
            },
            y: {
              css: yMappedRange && {
                from: yMappedRange.fromCSS,
                to: yMappedRange.toCSS,
              },
              scaled: yRanges ?? [],
            },
            keys,
          };
          lastSpanSelectEventRef.current = spanSelectEvent;

          InteractionsBus.spanselect.dispatchEvent(
            interactionsId,
            spanSelectEvent
          );
        }
      );
    };

    const mouseWheelListener = (event: WheelEvent) => {
      withPointerPositionRef.current(event, (positions, _, keys) => {
        const pointer = pointerSyncPositionToInteractionsPosition(
          positions,
          frameRef.current
        );
        if (!pointer) return;
        const anyButtonPressed = Object.values(keys).some((v) => v);
        if (anyButtonPressed) {
          event.preventDefault();
          const deltaAbs =
            Math.abs(event.deltaY) > Math.abs(event.deltaX)
              ? event.deltaY
              : event.deltaX;
          InteractionsBus.pressandwheel.dispatchEvent(interactionsId, {
            pointer,
            frame: frameRef.current,
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
  }, [frameRef, interactionsId, moveSyncKey, withPointerPositionRef]);

  // SYNC EVENTS

  useGenericInteractionsEvent("sync_move", moveSyncKey, (event) => {
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
          const pointer = pointerSyncPositionToInteractionsPosition(
            positions,
            frameRef.current
          );
          if (!pointer) return;
          InteractionsBus.click.dispatchEvent(interactionsId, {
            pointer,
            frame: frameRef.current,
            keys,
          });
        });
      }}
      onMouseLeave={(event) => {
        withPointerPosition(event, (_, __, keys) => {
          InteractionsBus.sync_move.dispatchEvent(moveSyncKey, {
            positions: null,
            keys,
          });
        });
      }}
      onMouseMove={(event) => {
        withPointerPosition(event, (positions, _, keys) => {
          InteractionsBus.sync_move.dispatchEvent(moveSyncKey, {
            positions,
            keys,
          });
        });
      }}
      onMouseDown={(event) => {
        withPointerPosition(event, (positions, { cssX, cssY }, keys) => {
          const pointer = pointerSyncPositionToInteractionsPosition(
            positions,
            frameRef.current
          );
          if (!pointer) return;
          InteractionsBus.mousedown.dispatchEvent(interactionsId, {
            pointer,
            frame: frameRef.current,
            keys,
          });
          selectStateRef.current = {
            xRangeCss: { start: cssX, end: cssX },
            yRangeCss: { start: cssY, end: cssY },
          };
        });
      }}
      onMouseUp={(event) => {
        withPointerPosition(event, (positions, _, keys) => {
          const pointer = pointerSyncPositionToInteractionsPosition(
            positions,
            frameRef.current
          );
          if (!pointer) return;
          InteractionsBus.mouseup.dispatchEvent(interactionsId, {
            frame: frameRef.current,
            pointer,
            keys,
          });
          const lastSpanSelectEvent = lastSpanSelectEventRef.current;
          lastSpanSelectEventRef.current = null;
          const selectState = selectStateRef.current;
          selectStateRef.current = null;
          if (selectState && lastSpanSelectEvent) {
            const spanSelectEvent = {
              ...lastSpanSelectEvent,
              keys,
              completed: true,
            };
            lastSpanSelectEventRef.current = null;
            InteractionsBus.spanselect.dispatchEvent(
              interactionsId,
              spanSelectEvent
            );
          }
        });
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        withPointerPosition(event, (positions, _, keys) => {
          const pointer = pointerSyncPositionToInteractionsPosition(
            positions,
            frameRef.current
          );
          if (!pointer) return;
          InteractionsBus.contextmenu.dispatchEvent(interactionsId, {
            frame: frameRef.current,
            pointer,
            keys,
          });
        });
      }}
      onDoubleClick={(event) => {
        withPointerPosition(event, (positions, _, keys) => {
          const pointer = pointerSyncPositionToInteractionsPosition(
            positions,
            frameRef.current
          );
          if (!pointer) return;
          InteractionsBus.dblclick.dispatchEvent(interactionsId, {
            frame: frameRef.current,
            pointer,
            keys,
          });
        });
      }}
    />
  );
};
