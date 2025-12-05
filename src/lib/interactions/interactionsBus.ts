import React from "react";
import type {
  ClickEvent,
  DblClickEvent,
  DocumentMouseUpEvent,
  MouseDownEvent,
  MouseUpEvent,
  MoveEvent,
  SpanSelectEvent,
  PressAndWheelEvent,
  SyncEvent_Move,
  ContextMenuEvent,
} from "./types";

export const makeInteractionsBus = <T>() => {
  const listeners: {
    syncKey: string;
    callback: (syncKey: string, payload: T) => void;
  }[] = [];
  return {
    addEventListener: (
      syncKey: string,
      callback: (syncKey: string, payload: T) => void
    ) => {
      listeners.push({
        syncKey,
        callback,
      });
      return () => {
        const index = listeners.findIndex((l) => l.callback === callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      };
    },
    dispatchEvent: (syncKey: string, payload: T) => {
      for (const listener of listeners) {
        if (listener.syncKey === syncKey) {
          listener.callback(syncKey, payload);
        }
      }
    },
  };
};

export type InteractionsBus<T> = ReturnType<typeof makeInteractionsBus<T>>;

export const InteractionsBus = {
  dblclick: makeInteractionsBus<DblClickEvent>(),
  click: makeInteractionsBus<ClickEvent>(),
  contextmenu: makeInteractionsBus<ContextMenuEvent>(),
  move: makeInteractionsBus<MoveEvent>(),
  mousedown: makeInteractionsBus<MouseDownEvent>(),
  mouseup: makeInteractionsBus<MouseUpEvent>(),
  spanselect: makeInteractionsBus<SpanSelectEvent>(),
  documentmouseup: makeInteractionsBus<DocumentMouseUpEvent>(),
  pressandwheel: makeInteractionsBus<PressAndWheelEvent>(),
  sync_move: makeInteractionsBus<SyncEvent_Move>(),
};

export const useGenericInteractionsEvent = <
  K extends keyof typeof InteractionsBus
>(
  eventName: K,
  syncKey: string,
  callback: (
    payload: Parameters<(typeof InteractionsBus)[K]["dispatchEvent"]>[1],
    syncKey: string
  ) => void
) => {
  const callbackRef = React.useRef(callback);
  callbackRef.current = callback;

  React.useEffect(() => {
    const removeListener = InteractionsBus[eventName].addEventListener(
      syncKey,
      (syncKey, payload) => {
        callbackRef.current(payload, syncKey);
      }
    );
    return removeListener;
  }, [syncKey, eventName, callbackRef]);
};

export const InteractionsIdContext = React.createContext<string>("");

export const useInteractionsEvent = <K extends keyof typeof InteractionsBus>(
  eventName: K,
  callback: (
    payload: Parameters<(typeof InteractionsBus)[K]["dispatchEvent"]>[1],
    syncKey: string
  ) => void
) => {
  const interactionsId = React.useContext(InteractionsIdContext);

  return useGenericInteractionsEvent(eventName, interactionsId, callback);
};
