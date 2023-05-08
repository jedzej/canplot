import {
  absoluteCrosshairFacet,
  absoluteSpanFacet,
  linePlotter,
  positionDOMOverlay,
} from "./src/main";
import { makePlot } from "./src/makePlot";

const SPAN_FACET_ID = "span-facet";
const HOVER_FACET_ID = "hover-facet";

const remove = <T>(array: T[], predicate: (item: T) => boolean) => {
  const index = array.findIndex(predicate);
  if (index >= 0) {
    array.splice(index, 1);
  }
};

const domOverlay = document.getElementById("overlay")!;

const plot = makePlot({
  logger: true,
});

plot.init(document.getElementById("canvas")! as HTMLCanvasElement, {
  dimensions: { width: "auto", height: 200 },
  padding: { bottom: 0, left: 0, right: 0, top: 0 },
  axes: [
    { scaleId: "x-1" },
    { scaleId: "x-1", position: "secondary" },
    { scaleId: "y-1" },
    { scaleId: "y-1" },
    { scaleId: "y-1", position: "secondary" },
  ],
  scales: [
    {
      id: "x-1",
      makeLimits: () => ({ max: 10, min: 0 }),
    },
    {
      id: "y-1",
      makeLimits: () => ({ max: 10, min: 0 }),
    },
  ],
  series: [
    {
      xScaleId: "x-1",
      yScaleId: "y-1",
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      y: [1, 2, 1, 2, 1, 2, 1, 2, 1, 5],
      plotter: linePlotter(),
    },
  ],
});

plot.on("drawEnd", ({ frame }) => {
  positionDOMOverlay({ element: domOverlay, frame });
});

plot.on("hover", (data) => {
  plot.update((scene) => {
    remove(scene.facets, (facet) => facet.id === HOVER_FACET_ID);
    if (!data.position) {
      return;
    }
    if (data.position.constrained !== "in-chart") {
      return;
    }
    scene.facets.push({
      id: HOVER_FACET_ID,
      layer: "top",
      plotter: absoluteCrosshairFacet({
        x: data.position.canvas.x,
        y: data.position.canvas.y,
      }),
    });
  });
  domOverlay.innerText = JSON.stringify(data.position, null, 2);
});

plot.on("spanSelect", (data) => {
  plot.update((scene) => {
    remove(scene.facets, (facet) => facet.id === SPAN_FACET_ID);
    if (data.phase !== "move" && data.phase !== "start") {
      return;
    }
    scene.facets.push({
      id: SPAN_FACET_ID,
      layer: "top",
      plotter: absoluteSpanFacet({
        x:
          data.dimension === "x" || data.dimension === "xy"
            ? {
                min: data.start.canvas.x,
                max: data.end.canvas.x,
              }
            : undefined,
        y:
          data.dimension === "y" || data.dimension === "xy"
            ? {
                min: data.start.canvas.y,
                max: data.end.canvas.y,
              }
            : undefined,
        style: {
          fillStyle: `rgba(${data.altKey ? 255 : 0}, ${
            data.ctrlKey ? 255 : 0
          }, ${data.shiftKey ? 255 : 0}, 0.2)`,
        },
      }),
    });
  });
});
