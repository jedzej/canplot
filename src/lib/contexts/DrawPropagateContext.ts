import { createContext } from "react";

type DrawPropagateContextType = {
  listeners: [prio: number, cb: () => void][];
  subscribe: (listener: () => void, prio: number) => () => void;
  notifyListeners: () => void;
};

export const DrawPropagateContext = createContext<DrawPropagateContextType>({
  listeners: [],
  subscribe: () => () => {},
  notifyListeners: () => {},
});

export const createDrawPropagateStore = (): DrawPropagateContextType => {
  const listeners: [prio: number, cb: () => void][] = [];
  const subscribe = (listener: () => void, prio: number) => {
    listeners.push([prio, listener]);
    listeners.sort((a, b) => a[0] - b[0]);
    return () => {
      const idx = listeners.findIndex(([, cb]) => cb === listener);
      if (idx !== -1) {
        listeners.splice(idx, 1);
      }
    };
  };
  const notifyListeners = () => {
    for (const [, cb] of listeners) {
      cb();
    }
  };
  return { listeners, subscribe, notifyListeners };
};
