import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const RedrawRequestContext = createContext<() => void | null>(() => {});
