export type CanPlotEvents = {
  dblclick: {
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      x: number;
      y: number;
      scaled: Record<string, number>;
    };
  };
  click: {
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      x: number;
      y: number;
      scaled: Record<string, number>;
    };
  };
  move: {
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      x: number;
      y: number;
      scaled: Record<string, number>;
    };
  } | null;
  mousedown: {
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      x: number;
      y: number;
      scaled: Record<string, number>;
    };
  };
  mouseup: {
    event: React.MouseEvent<HTMLElement, MouseEvent>;
    data: {
      x: number;
      y: number;
      scaled: Record<string, number>;
    };
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
        callback: callback as (data: CanPlotEvents[keyof CanPlotEvents]) => void,
      });
      return () => {
        const index = listeners.findIndex((l) => l.callback === callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      };
    },
    dispatchEvent: <K extends keyof CanPlotEvents>(eventName: K, data: CanPlotEvents[K]) => {
      for (const listener of listeners) {
        if (listener.eventName === eventName) {
          listener.callback(data);
        }
      }
    },
  };
};

export type EventEmitter = ReturnType<typeof makeEventEmitter>;
