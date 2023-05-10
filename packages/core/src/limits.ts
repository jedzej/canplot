import { isXScale } from "./helpers";
import { MakeLimits } from "./types";

export const makeAutoLimits: MakeLimits = ({ frame, scaleId }) => {
  let min = +Infinity;
  let max = -Infinity;
  for (const series of frame.series) {
    if (isXScale(scaleId)) {
      if (series.xScaleId !== scaleId) {
        continue;
      }
      for (const x of series.x) {
        if (x < min) {
          min = x;
        }
        if (x > max) {
          max = x;
        }
      }
    } else {
      if (series.yScaleId !== scaleId) {
        continue;
      }
      for (const y of series.y) {
        if (y < min) {
          min = y;
        }
        if (y > max) {
          max = y;
        }
      }
    }
  }
  if (Number.isFinite(min) && Number.isFinite(max)) {
    if (!isXScale(scaleId)) {
      const span = max - min;
      const rank = Math.ceil(Math.log10(span));
      const precision = 10 ** (rank - 1);
      min = Math.floor(min / precision) * precision;
      max = Math.ceil(max / precision) * precision;
    }
    return { min, max };
  } else {
    return { min: 0, max: 1 };
  }
};
