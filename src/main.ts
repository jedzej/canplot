import { valToPos, valToPx } from "./lib/helpers";
import { Plot } from "./lib/Plot";
import { Plotter } from "./lib/types";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div style="background-color:darkgray; height: 50vh; width:50vw">
    <canvas id="canvas"></canvas>
  </div>
`;

type HeatmapSeriesExtras = {
  z: number[];
  tileX: number;
  tileY: number;
};

const heatmapPlotter: Plotter<HeatmapSeriesExtras> = (
  drawContext,
  series,
  xScale,
  yScale
) => {
  const maxZ = Math.max(...series.z);
  const minZ = Math.min(...series.z);
  const normalizedZ = series.z.map((v) => (v - minZ) / (maxZ - minZ));
  const tileXPx = Math.floor(valToPx(drawContext, series.tileX, xScale))+1;
  const tileYPx = Math.floor(valToPx(drawContext, series.tileY, yScale))+1;
  for (let i = 0; i < series.x.length; i++) {
    const x = series.x[i];
    const y = series.y[i];
    const z = normalizedZ[i];

    if (x === undefined || y === undefined || z === undefined) {
      continue;
    }

    const imageData = drawContext.ctx.createImageData(tileXPx, tileYPx);
    for (let j = 0; j < imageData.data.length; j += 4) {
      imageData.data[j] = z * 255;
      imageData.data[j + 1] = 0;
      imageData.data[j + 2] = (1 - z) * 255;
      imageData.data[j + 3] = 255;
    }
    drawContext.ctx.putImageData(
      imageData,
      Math.round(valToPos(drawContext, x, xScale)),
      Math.round(valToPos(drawContext, y, yScale) - tileYPx)
    );
  }
};

const plot = new Plot<HeatmapSeriesExtras>(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
    plugins: [],
    dimensions: {
      width: "auto",
      height: "auto",
    },
  },
  {
    padding: 10,
    axes: [
      {
        scaleId: "x-1",
        position: "primary",
        size: 30,
      },
      {
        scaleId: "y-1",
        position: "primary",
        size: 30,
      },
    ],
    scales: [
      {
        id: "x-1",
        limits: { autorange: false, fixed: { min: 0, max: 5 } },
      },
      {
        id: "y-1",
        limits: { autorange: false, fixed: { min: 0, max: 4 } },
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: heatmapPlotter,
        tileX: 1,
        tileY: 1,
        x: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4],
        y: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
        z: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
    ],
  }
);
setInterval(() => {
  plot.incrementalImperativeUpdate((draft) => {
    draft.series[0].z = new Array(draft.series[0].z.length)
      .fill(0)
      .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
  });
}, 16);

// const plot = new Plot<{ id: string }>(
//   {
//     canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
//     plugins: [],
//     dimensions: {
//       width: "auto",
//       height: "auto",
//     },
//   },
//   {
//     padding: 10,
//     axes: [
//       {
//         scaleId: "x-1",
//         position: "primary",
//         size: 30,
//       },
//       {
//         scaleId: "x-2",
//         position: "primary",
//         size: 30,
//       },
//       {
//         scaleId: "x-3",
//         position: "primary",
//         size: 30,
//       },
//       {
//         scaleId: "y-1",
//         position: "primary",
//         size: 30,
//       },
//       {
//         scaleId: "y-2",
//         position: "primary",
//         size: 30,
//         style: {
//           strokeFill: {
//             strokeStyle: "blue",
//           },
//         },
//       },
//       {
//         scaleId: "y-3",
//         position: "primary",
//         size: 30,
//         style: {
//           strokeFill: {
//             strokeStyle: "red",
//           },
//         },
//       },
//       {
//         scaleId: "y-4",
//         position: "secondary",
//         size: 40,
//       },
//       {
//         scaleId: "x-4",
//         position: "secondary",
//         size: 40,
//       },
//       {
//         scaleId: "x-5",
//         position: "secondary",
//         size: 40,
//       },
//     ],
//     scales: [
//       {
//         id: "x-1",
//         limits: { autorange: false, fixed: { min: 0, max: 10 } },
//       },
//       {
//         id: "y-1",
//         limits: { autorange: false, fixed: { min: 0, max: 10 } },
//       },
//       {
//         id: "y-2",
//         limits: { autorange: false, fixed: { min: 0, max: 20 } },
//       },
//     ],
//     series: [
//       {
//         xScaleId: "x-1",
//         yScaleId: "y-1",
//         id: "series-1",
//         x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//         y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       },
//       {
//         xScaleId: "x-1",
//         yScaleId: "y-2",
//         id: "series-1",
//         x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//         y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//         plotter: linePlotter,
//       },
//     ],
//   }
// );

// setInterval(() => {
//   plot.incrementalImperativeUpdate((draft) => {
//     draft.series[0].x = new Array(10000).fill(0).map((_, x) => x / 100);
//     draft.series[0].y = new Array(10000)
//       .fill(0)
//       .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
//     draft.series[1].x = new Array(1000).fill(0).map((_, x) => x / 100);
//     draft.series[1].y = new Array(1000)
//       .fill(0)
//       .map((_, y) => 5 + Math.sin(y + performance.now() / 100));
//   });
// }, 15);
