import type { PlotDrawFrame } from "./lib/types";

export type CanPlotEvents = {
  dblclick: {
    frame: PlotDrawFrame;
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      cssX: number;
      cssY: number;
      scaled: Record<string, number>;
    };
  };
  click: {
    frame: PlotDrawFrame;
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      cssX: number;
      cssY: number;
      scaled: Record<string, number>;
    };
  };
  move: {
    frame: PlotDrawFrame;
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      cssX: number;
      cssY: number;
      scaled: Record<string, number>;
    };
  } | null;
  mousedown: {
    frame: PlotDrawFrame;
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      cssX: number;
      cssY: number;
      scaled: Record<string, number>;
    };
  };
  mouseup: {
    frame: PlotDrawFrame;
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      cssX: number;
      cssY: number;
      scaled: Record<string, number>;
    };
  };
  documentmouseup: {
    frame: PlotDrawFrame;
    event: MouseEvent;
  };
};

export const makeEventEmitter = () => {
  const listeners: {
    eventName: keyof CanPlotEvents;
    callback: (data: CanPlotEvents[keyof CanPlotEvents]) => void;
  }[] = [];
  return {
    addEventListener: <K extends keyof CanPlotEvents>(
      eventName: K,
      callback: (data: CanPlotEvents[K]) => void
    ) => {
      listeners.push({
        eventName,
        callback: callback as (
          data: CanPlotEvents[keyof CanPlotEvents]
        ) => void,
      });
      return () => {
        const index = listeners.findIndex((l) => l.callback === callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      };
    },
    dispatchEvent: <K extends keyof CanPlotEvents>(
      eventName: K,
      data: CanPlotEvents[K]
    ) => {
      for (const listener of listeners) {
        if (listener.eventName === eventName) {
          listener.callback(data);
        }
      }
    },
  };
};

export type EventEmitter = ReturnType<typeof makeEventEmitter>;
