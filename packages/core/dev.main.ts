import {
  absoluteSpanFacet,
  linePlotter,
  spanSelectPlugin,
  absoluteCrosshairFacet,
  hoverPlugin,
  domOverlayPlugin,
} from "./src/main";
import { Facet } from "./src/types";
import { makePlot } from "./src/makePlot";

const plot = makePlot({
  canvas: document.getElementById("canvas")! as HTMLCanvasElement,
  logger: false,
})
  .use(spanSelectPlugin({}).as("spanSelect"))
  .use(hoverPlugin({}).as("hover"))
  .use(
    domOverlayPlugin({
      className: "bgcyan",
    }).as("domOverlay")
  );

plot.draw((outputs) => {
  const facets: Facet[] = [];
  if (outputs.hover.position) {
    const { position } = outputs.hover;
    facets.push({
      layer: "top",
      plotter: absoluteCrosshairFacet({
        x: position.canvas.x,
        y: position.canvas.y,
      }),
    });
  }
  if (outputs.spanSelect.phase === "active") {
    facets.push({
      layer: "top",
      plotter: absoluteSpanFacet({
        x:
          outputs.spanSelect.dimension === "x" ||
          outputs.spanSelect.dimension === "xy"
            ? {
                min: outputs.spanSelect.start.canvas.x,
                max: outputs.spanSelect.end.canvas.x,
              }
            : undefined,
        y:
          outputs.spanSelect.dimension === "y" ||
          outputs.spanSelect.dimension === "xy"
            ? {
                min: outputs.spanSelect.start.canvas.y,
                max: outputs.spanSelect.end.canvas.y,
              }
            : undefined,
        style: {
          fillStyle: `rgba(${outputs.spanSelect.altKey ? 255 : 0}, ${
            outputs.spanSelect.ctrlKey ? 255 : 0
          }, ${outputs.spanSelect.shiftKey ? 255 : 0}, 0.2)`,
        },
      }),
    });
  }
  return {
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
    facets,
    inputs: {
      myPlugin: {
        a: 2,
      },
    },
  };
});
