import { valToPos, valToPxDistance } from "../helpers";
import { Plotter } from "../types";

export const makeColorSpace =
  (
    from: [r: number, g: number, b: number, a: number],
    to: [r: number, g: number, b: number, a: number]
  ) =>
  (z: number) => {
    const r = Math.floor(from[0] + (to[0] - from[0]) * z);
    const g = Math.floor(from[1] + (to[1] - from[1]) * z);
    const b = Math.floor(from[2] + (to[2] - from[2]) * z);
    const a = Math.floor(from[3] + (to[3] - from[3]) * z);
    return [r, g, b, a];
  };

const defaultColorSpace = (z: number) => {
  const color = Math.floor(z * 255);
  return [color, color, color, 255];
};

export type HeatmapPlotterOpts = {
  z: number[];
  tileX: number;
  tileY: number;
  colorSpace?: (z: number) => [r: number, g: number, b: number, alpha: number];
};

export const heatmapPlotter = ({
  z,
  tileX,
  tileY,
  colorSpace,
}: HeatmapPlotterOpts): Plotter => {
  return function heatmapPlotterImpl(frame, series, xScale, yScale) {
    const maxZ = Math.max(...z);
    const minZ = Math.min(...z);
    const normalizedZ = z.map((v) => (v - minZ) / (maxZ - minZ));
    const tileXPx = Math.floor(valToPxDistance(frame, tileX, xScale.id)) + 1;
    const tileYPx = Math.floor(valToPxDistance(frame, tileY, yScale.id)) + 1;
    for (let i = 0; i < series.x.length; i++) {
      const x = series.x[i];
      const y = series.y[i];
      const z = normalizedZ[i];

      if (x === undefined || y === undefined || z === undefined) {
        continue;
      }

      const imageData = frame.ctx.createImageData(tileXPx, tileYPx);
      for (let j = 0; j < imageData.data.length; j += 4) {
        const [r, g, b, a] = colorSpace?.(z) ?? defaultColorSpace(z);
        imageData.data[j] = r;
        imageData.data[j + 1] = g;
        imageData.data[j + 2] = b;
        imageData.data[j + 3] = a;
      }
      frame.ctx.putImageData(
        imageData,
        Math.round(valToPos(frame, x, xScale.id)),
        Math.round(valToPos(frame, y, yScale.id) - tileYPx)
      );
    }
  };
};
