import { createContext } from "react";
import type { PlotDrawFrame } from "../types";

export const FrameContext = createContext<PlotDrawFrame | null>(null);
