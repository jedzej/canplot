export const makeEventsManager = <T extends Record<string, unknown>>() => {
  const listeners: {
    eventName: keyof T;
    callback: (data: T[any]) => void;
  }[] = [];
  return {
    addEventListener: <K extends keyof T>(
      eventName: K,
      callback: (data: T[K]) => void
    ) => {
      listeners.push({ eventName, callback });
      return () => {
        const index = listeners.findIndex((l) => l.callback === callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      };
    },
    dispatchEvent: <K extends keyof T>(eventName: K, data: T[K]) => {
      for (const listener of listeners) {
        if (listener.eventName === eventName) {
          listener.callback(data);
        }
      }
    },
  };
};
