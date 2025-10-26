import React from "react";
import type {
  ClickEvent,
  DblClickEvent,
  DocumentMouseUpEvent,
  MouseDownEvent,
  MouseUpEvent,
  MoveEvent,
  SpanSelectEvent,
  SyncEvent_Click,
  SyncEvent_DblClick,
  SyncEvent_MouseDown,
  SyncEvent_MouseUp,
  SyncEvent_Move,
  SyncEvent_SpanSelect,
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
  move: makeInteractionsBus<MoveEvent>(),
  mousedown: makeInteractionsBus<MouseDownEvent>(),
  mouseup: makeInteractionsBus<MouseUpEvent>(),
  spanselect: makeInteractionsBus<SpanSelectEvent>(),
  documentmouseup: makeInteractionsBus<DocumentMouseUpEvent>(),
  sync_dblclick: makeInteractionsBus<SyncEvent_DblClick>(),
  sync_click: makeInteractionsBus<SyncEvent_Click>(),
  sync_move: makeInteractionsBus<SyncEvent_Move>(),
  sync_mousedown: makeInteractionsBus<SyncEvent_MouseDown>(),
  sync_mouseup: makeInteractionsBus<SyncEvent_MouseUp>(),
  sync_spanselect: makeInteractionsBus<SyncEvent_SpanSelect>(),
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
