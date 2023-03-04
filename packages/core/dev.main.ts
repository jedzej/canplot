import { CanPlot } from "./src/makePlot";

const plot = new CanPlot({
  canvas: document.getElementById("canvas")! as HTMLCanvasElement,
  dimensions: { width: "auto", height: 200 },
})
  .use<"sizer", { width: number; height: number }>(({ ctx }) => {
    return {
      id: "sizer",
      initialState: { width: ctx.canvas.width, height: ctx.canvas.height },
      onDraw({ setPluginState }) {
        setPluginState({
          width: ctx.canvas.width,
          height: ctx.canvas.height,
        });
      },
    };
  })
  .use(() => {
    return {
      id: "pluginA",
      initialState: undefined,
      transformScene: (opts) => {
        opts.scene.facets.push({
          layer: "top",
          plotter: (frame) => {
            frame.ctx.fillStyle = "red";
            frame.ctx.fillRect(
              opts.getGlobalState().sizer.width / 3,
              0,
              10,
              10
            );
          },
        });
      },
    };
  })
  .use(() => {
    return {
      id: "pluginB",
      initialState: undefined,
      transformScene: (opts) => {
        opts.scene.facets.push({
          layer: "top",
          plotter: (frame) => {
            frame.ctx.fillStyle = "red";
            frame.ctx.fillRect(
              opts.getGlobalState().sizer.width / 3.5,
              20,
              10,
              10
            );
          },
        });
      },
    };
  });
//   ({
//   initialState: { a: 1 },
//   id: "pluginB",
//   onInit: ({ setPluginState }) => {
//     setPluginState({ a: 2 });
//   },
// }))
// .use({
//   // initOwnState: (s) => ({ c: s.pluginB.b }),
//   id: "pluginC",
// });
// setTimeout(() => {
plot.draw((state, { width }) => {
  return {
    padding: 0,
    axes: [],
    scales: [],
    series: [],
    facets: [
      {
        layer: "top",
        plotter: (frame) => {
          frame.ctx.fillStyle = "red";
          frame.ctx.fillRect(0, 0, 100, 100);
        },
      },
      {
        layer: "top",
        plotter: (frame) => {
          frame.ctx.fillStyle = "red";
          frame.ctx.fillRect(width / 2, 0, 100, 100);
        },
      },
    ],
  };
});
// }, 100);
