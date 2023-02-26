import { isXScale } from "./helpers";
import { MakeLimits } from "./types";

export const makeAutoLimits: MakeLimits = ({ frame, scaleId }) => {
  let min = +Infinity;
  let max = -Infinity;
  for (const series of frame.scene.series) {
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
    return { min, max };
  } else {
    return { min: 0, max: 1 };
  }
};
