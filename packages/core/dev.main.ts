import { absoluteCrosshairFacet, absoluteSpanFacet, linePlotter } from "./src/main";
import { Facet } from "./src/types";
import { makePlot } from "./src/makePlot";

const plot = makePlot({
  canvas: document.getElementById("canvas")! as HTMLCanvasElement,
  logger: false,
  cursor: {
    hover: {
      propagate: true,
    },
    span: {
      propagate: true,
      onSpan: (data) => {
        console.log("onSpan:", data);
      },
    },
  },
});

plot.draw(({ cursor }) => {
  const facets: Facet[] = [];
  if (cursor.hover.position) {
    const { position } = cursor.hover;
    facets.push({
      layer: "top",
      plotter: absoluteCrosshairFacet({
        x: position.canvas.x,
        y: position.canvas.y,
      }),
    });
  }
  if (cursor.span.phase === "active") {
    facets.push({
      layer: "top",
      plotter: absoluteSpanFacet({
        x:
          cursor.span.dimension === "x" || cursor.span.dimension === "xy"
            ? {
                min: cursor.span.start.canvas.x,
                max: cursor.span.end.canvas.x,
              }
            : undefined,
        y:
          cursor.span.dimension === "y" || cursor.span.dimension === "xy"
            ? {
                min: cursor.span.start.canvas.y,
                max: cursor.span.end.canvas.y,
              }
            : undefined,
        style: {
          fillStyle: `rgba(${cursor.span.altKey ? 255 : 0}, ${
            cursor.span.ctrlKey ? 255 : 0
          }, ${cursor.span.shiftKey ? 255 : 0}, 0.2)`,
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
