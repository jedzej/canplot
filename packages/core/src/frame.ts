import { isXScale } from "./helpers";
import { makeAutoLimits } from "./limits";
import { Frame, Scene, Size } from "./types";

export const sceneToFrame = ({
  canvasSize,
  scene,
  ctx,
  dpr,
}: {
  canvasSize: Size;
  scene: Scene;
  ctx: CanvasRenderingContext2D;
  dpr: number;
}): Frame => {
  const padding = scene.padding ?? {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  };
  let leftAxesSize = 0;
  let rightAxesSize = 0;
  let bottomAxesSize = 0;
  let topAxesSize = 0;
  for (const axis of scene.axes ?? []) {
    const size = axis.size ?? 50;
    const position = axis.position ?? "primary";
    if (isXScale(axis.scaleId)) {
      if (position === "primary") {
        bottomAxesSize += size;
      } else {
        topAxesSize += size;
      }
    } else {
      if (position === "primary") {
        leftAxesSize += size;
      } else {
        rightAxesSize += size;
      }
    }
  }

  const frameNoScales: Omit<Frame, "scales"> = {
    ctx,
    dpr,
    chartArea: {
      x: leftAxesSize + padding.left,
      y: topAxesSize + padding.top,
      width:
        canvasSize.width -
        leftAxesSize -
        rightAxesSize -
        padding.left -
        padding.right,
      height:
        canvasSize.height -
        topAxesSize -
        bottomAxesSize -
        padding.top -
        padding.bottom,
    },
    padding,
    canvasSize,
    axes: scene.axes ?? [],
    facets: scene.facets ?? [],
    series: scene.series,
  };

  return {
    ...frameNoScales,
    scales: scene.scales.map((scale) => {
      return {
        id: scale.id,
        limits: (scale.makeLimits ?? makeAutoLimits)({
          frame: frameNoScales,
          scaleId: scale.id,
        }),
      };
    }),
  };
};
