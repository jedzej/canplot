import {
  absoluteSpanFacet,
  clickPlugin,
  hoverPlugin,
  linePlotter,
  spanSelectPlugin,
} from "./src/main";
import { CanPlot } from "./src/makePlot";
import { Facet } from "./src/types";

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
  .use(
    hoverPlugin({
      id: "hover",
      onHover: (position) => {
        // console.log(position);
      },
    })
  )
  .use(
    clickPlugin({
      id: "click",
      onClick: (position) => {
        // console.log(position);
      },
    })
  )
  .use(
    clickPlugin({
      id: "click",
      onClick: (position) => {
        // console.log(position);
      },
    })
  )
  .use(
    clickPlugin({
      id: "click",
      onClick: (position) => {
        // console.log(position);
      },
    })
  )
  .use(
    clickPlugin({
      id: "click",
      onClick: (position) => {
        // console.log(position);
      },
    })
  )
  .use(
    clickPlugin({
      id: "click",
      onClick: (position) => {
        // console.log(position);
      },
    })
  )
  .use(
    clickPlugin({
      id: "click",
      onClick: (position) => {
        // console.log(position);
      },
    })
  )
  .use(
    spanSelectPlugin({
      id: "spanSelect",
      onSpanSelect: (data) => {
        // console.log(data);
      },
    })
  );

plot.draw((state, { width }) => {
  const facets = [] as Facet[];
  if (state.spanSelect.phase === "active") {
    console.log(state.spanSelect.startPosition, state.spanSelect.endPosition)
    facets.push({
      layer: "top",
      plotter: absoluteSpanFacet({
        x: {
          min: state.spanSelect.startPosition.canvas.x,
          max: state.spanSelect.endPosition.canvas.x,
        },
        y: {
          min: state.spanSelect.startPosition.canvas.y,
          max: state.spanSelect.endPosition.canvas.y,
        },
        style: {
          fillStyle: "rgba(0, 0, 255, 0.2)",
        }
      }),
    });
  }
  if (state.hover.position) {
    const { position } = state.hover;
    facets.push({
      layer: "top",
      plotter: (frame) => {
        frame.ctx.fillStyle = "green";
        frame.ctx.fillRect(
          position.canvas.x - 5,
          position.canvas.y - 5,
          10,
          10
        );
      },
    });
  }
  return {
    padding: {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    },
    axes: [
      {
        scaleId: "x-1",
      },
      {
        scaleId: "y-1",
      },
    ],
    scales: [
      {
        id: "x-1",
        makeLimits: () => ({
          max: 10,
          min: 0,
        }),
      },
      {
        id: "y-1",
        makeLimits: () => ({
          max: 10,
          min: 0,
        }),
      },
    ],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        plotter: linePlotter(),
      },
    ],
    facets,
  };
});
// }, 100);
