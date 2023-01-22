import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      formats: ["es", "cjs", "umd"],
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, `src/lib/main.ts`),
      name: "CanPlot",
    },
    outDir: "./dist",
  },
});
