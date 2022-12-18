import { Plot } from "../lib/Plot";
import { LineExtras, linePlotter } from "../lib/plotters/line";
import { makeCursorPlugin } from "../lib/plugins/cursor";

const plugin = makeCursorPlugin();

plugin.addSpanSelectListener((event) => {
  if (event.phase === "move") {
    event.plot.incrementalUpdate((draft) => {
      draft.facets![0] = {
        type: "span",
        style: { strokeStyle: "red", fillStyle: "#00000044" },
        x: {
          scaleId: "x-1",
          min: Math.min(
            event.positionStart.scaled["x-1"],
            event.positionEnd.scaled["x-1"]
          ),
          max: Math.max(
            event.positionStart.scaled["x-1"],
            event.positionEnd.scaled["x-1"]
          ),
        },
        y: {
          scaleId: "y-1",
          min: Math.min(
            event.positionStart.scaled["y-1"],
            event.positionEnd.scaled["y-1"]
          ),
          max: Math.max(
            event.positionStart.scaled["y-1"],
            event.positionEnd.scaled["y-1"]
          ),
        },
      };
    });
  } else if (event.phase === "end") {
    event.plot.incrementalUpdate((draft) => {
      draft.facets![0].style = { fillStyle: "transparent" };
      draft.facets = [
        ...(draft.facets ?? []),
        {
          type: "span",
          style: { fillStyle: "#ff000033" },
          x: {
            scaleId: "x-1",
            min: Math.min(
              event.positionStart.scaled["x-1"],
              event.positionEnd.scaled["x-1"]
            ),
            max: Math.max(
              event.positionStart.scaled["x-1"],
              event.positionEnd.scaled["x-1"]
            ),
          },
          y: {
            scaleId: "y-1",
            min: Math.min(
              event.positionStart.scaled["y-1"],
              event.positionEnd.scaled["y-1"]
            ),
            max: Math.max(
              event.positionStart.scaled["y-1"],
              event.positionEnd.scaled["y-1"]
            ),
          },
        },
      ];
    });
  }
});

new Plot<LineExtras>(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
    plugins: [plugin.bindings],
    dimensions: {
      width: "auto",
      height: 400,
    },
  },
  {
    padding: 10,
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: 0, max: 100 } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 10 } },
      },
    ],
    axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: { plotter: linePlotter },
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
    facets: [
      {
        type: "span",
        style: { fillStyle: "transparent" },
        x: {
          scaleId: "x-1",
          min: 0,
          max: 0,
        },
        y: {
          scaleId: "y-1",
          min: 0,
          max: 0,
        },
      },
    ],
  }
);
