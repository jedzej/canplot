import { createContext, useCallback, useRef, type ReactNode } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const RedrawRequestContext = createContext<() => void | null>(() => {});

export const UpdateRequestProvider: React.FC<{
  onRequestUpdate: () => void;
  children: ReactNode;
}> = ({ onRequestUpdate, children }) => {
  const callbackRef = useRef(onRequestUpdate);
  callbackRef.current = onRequestUpdate;

  const requestUpdate = useCallback(() => {
    callbackRef.current();
  }, [callbackRef]);

  return (
    <RedrawRequestContext.Provider value={requestUpdate}>
      {children}
    </RedrawRequestContext.Provider>
  );
};