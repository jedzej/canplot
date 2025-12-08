import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import type { PlotDrawFrame } from "./types";
import { createStore, useStore } from "zustand";
import {
  clampXPosToChartArea,
  clampYPosToChartArea,
  getScale,
  valFits,
  valToPos,
  valToPxDistance,
} from "./helpers";

export const CANPLOT_LAYER = {
  TOP: 400,
  MIDDLE: 300,
  BOTTOM: 200,
  BACKGROUND: 100,
} as const;

export interface FrameStoreState {
  _frame: PlotDrawFrame | null;
  clampXPosToChartArea: (x: number, space?: "canvas" | "css") => number;
  clampYPosToChartArea: (y: number, space?: "canvas" | "css") => number;
  getFrame: () => PlotDrawFrame;
  getCtx: () => CanvasRenderingContext2D;
  valToPos: (
    value: number,
    scaleId: string,
    space?: "canvas" | "css"
  ) => number;
  valToPxDistance: (
    value: number,
    scaleId: string,
    space?: "canvas" | "css"
  ) => number;
  valFits: (value: number, scaleId: string) => boolean;
  getScale: (scaleId: string) => PlotDrawFrame["scales"][number] | undefined;
  _listeners: [prio: number, cb: (state: FrameStoreState) => void][];
  _subscribe: (
    listener: (state: FrameStoreState) => void,
    prio: number
  ) => () => void;
  _notifyListeners: (value: FrameStoreState) => void;
}

export const createFrameStore = () =>
  createStore<FrameStoreState>((_, get) => {
    const getFrameOrDie = () => {
      const _frame = get()._frame;
      if (!_frame) throw new Error("No frame set in frame store");
      return _frame;
    };
    return {
      _frame: null,
      getFrame: getFrameOrDie,
      getCtx: () => {
        return getFrameOrDie().ctx;
      },
      clampXPosToChartArea: (x, space) => {
        return clampXPosToChartArea(getFrameOrDie(), x, space ?? "canvas");
      },
      clampYPosToChartArea: (y, space) => {
        return clampYPosToChartArea(getFrameOrDie(), y, space ?? "canvas");
      },
      valToPos: (value, scaleId, space) => {
        return valToPos(getFrameOrDie(), value, scaleId, space ?? "canvas");
      },
      valToPxDistance: (value, scaleId, space) => {
        return valToPxDistance(
          getFrameOrDie(),
          value,
          scaleId,
          space ?? "canvas"
        );
      },
      valFits: (value, scaleId) => {
        return valFits(getFrameOrDie(), value, scaleId);
      },
      getScale: (scaleId) => {
        return getScale(getFrameOrDie(), scaleId);
      },
      _listeners: [],
      _subscribe: (listener, prio) => {
        get()._listeners.push([prio, listener]);
        get()._listeners.sort((a, b) => a[0] - b[0]);
        return () => {
          const idx = get()._listeners.findIndex(([, cb]) => cb === listener);
          if (idx !== -1) {
            get()._listeners.splice(idx, 1);
          }
        };
      },
      _notifyListeners: (value) => {
        for (const [, cb] of get()._listeners) {
          cb(value);
        }
      },
    };
  });

export const createUpdateRequestStore = () =>
  createStore<{ notify: () => void; version: number }>((set) => {
    return {
      notify: () => {
        set((state) => ({ version: state.version + 1 }));
      },
      version: 0,
    };
  });

export type FrameStoreType = ReturnType<typeof createFrameStore>;

export type UpdateRequestStoreType = ReturnType<
  typeof createUpdateRequestStore
>;

export const FrameContext = createContext<FrameStoreType | null>(null);

export const UpdateRequestContext =
  createContext<UpdateRequestStoreType | null>(null);

export const useDrawEffect = (
  layer: number | keyof typeof CANPLOT_LAYER,
  runner: (params: Omit<FrameStoreState, "_frame">) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps: ReadonlyArray<any>
) => {
  const frameStore = useContext(FrameContext);
  const updateRequestStore = useContext(UpdateRequestContext);

  if (!frameStore || !updateRequestStore) {
    throw new Error("useFrame must be used within a CanPlot component");
  }

  const runnerRef = useRef(runner);
  runnerRef.current = runner;

  useLayoutEffect(() => {
    // run initial
    Promise.resolve().then(() => {
      runnerRef.current(frameStore.getState());
    });
    // subscribe to updates
    return frameStore.getState()._subscribe(
      (state) => {
        if (!state._frame) {
          return;
        }
        runnerRef.current(state);
      },
      typeof layer === "number" ? layer : CANPLOT_LAYER[layer]
    );
  }, [frameStore, layer]);

  useEffect(() => {
    updateRequestStore.getState().notify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateRequestStore, ...deps]);
};

export const useFrameState = <T = PlotDrawFrame>(
  selector?: (state: FrameStoreState) => T
) => {
  const frameStore = useContext(FrameContext);
  if (!frameStore) {
    throw new Error("useFrame must be used within a CanPlot component");
  }
  return useStore(
    frameStore,
    (selector as (state: FrameStoreState) => T) ?? ((state) => state.getFrame())
  );
};
