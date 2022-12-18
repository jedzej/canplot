import { Plot } from "../lib/Plot";
import { LineExtras, linePlotter, ScatterExtras } from "../lib/plotters";
import { makeCursorPlugin } from "../lib/plugins/cursor";

const plugin = makeCursorPlugin();

plugin.addHoverListener((event) => {
  const tooltip = document.getElementById("tooltip")!;
  tooltip.style.pointerEvents = "none";
  tooltip.style.userSelect = "none";

  tooltip.innerHTML = JSON.stringify(event.position, null, 2);
  if (event.position) {
    tooltip.style.display = "block";
    tooltip.style.left = `${event.position.x}px`;
    tooltip.style.top = `${event.position.y}px`;
  } else {
    tooltip.style.display = "none";
  }
});

plugin.addClickListener((event) => {
  event.plot.incrementalUpdate((draft) => {
    draft.facets = [
      ...(draft.facets ?? []),
      {
        type: "v-line",
        scaleId: "x-1",
        x: event.position.scaled["x-1"],
        style: { strokeStyle: "#ff000099" },
      },
    ];
  });
});

plugin.addDblClickListener((event) => {
  event.plot.incrementalUpdate((draft) => {
    draft.facets = [
      ...(draft.facets ?? []),
      {
        type: "h-line",
        scaleId: "y-1",
        y: event.position.scaled["y-1"],
        style: { strokeStyle: "#00444499" },
      },
    ];
  });
});

new Plot<LineExtras | ScatterExtras>(
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
      {
        id: "y-2",
        limits: { autorange: false, fixed: { min: -100, max: 100 } },
      },
    ],
    axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }, { scaleId: "y-2" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotterOptions: { plotter: linePlotter },
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-2",
        plotterOptions: { plotter: linePlotter },
        style: { strokeStyle: "red" },
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
  }
);
