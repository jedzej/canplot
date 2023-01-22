import { resolve } from "path";
import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  build: {
    watch: !!process.env.WATCH,
    lib: {
      formats: ["es", "cjs", "umd"],
      entry: resolve(__dirname, `src/main.ts`),
      name: "canplot_react",
      fileName: (format) => `main.${format}.js`,
    },
    outDir: "./dist",
    rollupOptions: {
      external: ["react", "@canplot/core"],
    },
  },
  plugins: [typescript()],
});
