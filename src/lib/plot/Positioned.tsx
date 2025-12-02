import { useFrameState } from "../frameContext";

export const useXPositioned = <
  T extends Record<
    string,
    {
      value: number;
      scaleId: string;
      exceeding: "clamp" | "discard";
    }
  >
>(
  points: T,
  space: "canvas" | "css"
) => {
  return useFrameState(
    ({
      clampXPosToChartArea,
      clampYPosToChartArea,
      getScale,
      valToPos,
      valFits,
    }) => {
      const positioned: { [K in keyof T]?: number | undefined } = {};
      for (const key in points) {
        const point = points[key];
        switch (point.exceeding) {
          case "discard": {
            if (valFits(point.value, point.scaleId)) {
              const cssValue = valToPos(point.value, point.scaleId, space);
              positioned[key] = cssValue;
            }
            break;
          }
          case "clamp": {
            const cssValue = valToPos(point.value, point.scaleId, space);
            positioned[key] =
              getScale(point.scaleId)?.origin === "x"
                ? clampXPosToChartArea(cssValue, space)
                : clampYPosToChartArea(cssValue, space);
            break;
          }
        }
      }
      return positioned;
    }
  );
};
