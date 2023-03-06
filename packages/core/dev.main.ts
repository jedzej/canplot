import {
  absoluteSpanFacet,
  clickPlugin,
  hoverPlugin,
  linePlotter,
  spanSelectPlugin,
  Plot,
  crosshairFacet,
} from "./src/main";
import { Facet } from "./src/types";

const plot = new Plot({
  canvas: document.getElementById("canvas")! as HTMLCanvasElement,
  dimensions: { width: "auto", height: 200 },
  logger: false,
})
  .use<"sizer", { width: number; height: number }>(({ ctx }) => {
    return {
      id: "sizer",
      initialState: { width: ctx.canvas.width, height: ctx.canvas.height },
      beforeDraw({ setPluginState }) {
        setPluginState({
          width: ctx.canvas.width,
          height: ctx.canvas.height,
        });
      },
    };
  })
  .use(hoverPlugin({ id: "hover" }))
  .use(
    clickPlugin({
      id: "click",
      onClick: (position) => {
        // console.log(position);
      },
    })
  )
  .use(spanSelectPlugin({ id: "spanSelect2" }))
  .use(spanSelectPlugin({ id: "spanSelect" }))
  .use(({ getStore }) => {
    return {
      id: "line",
      initialState: { x: 0 },
      transformFrame: ({ frame }) => {
        const { spanSelect, hover } = getStore();
        if (hover.position && spanSelect.phase === "idle") {
          frame.facets.push({
            layer: "bottom",
            plotter: crosshairFacet({
              x: hover.position.canvas.x,
              y: hover.position.canvas.y,
            }),
          });
        }
        if (spanSelect.phase === "active") {
          frame.facets.push({
            layer: "bottom",
            plotter: crosshairFacet({
              x:
                spanSelect.dimension !== "y"
                  ? spanSelect.start.canvas.x
                  : undefined,
              y:
                spanSelect.dimension !== "x"
                  ? spanSelect.start.canvas.y
                  : undefined,
              style: {
                strokeStyle: "rgba(0, 0, 255, 0.8)",
              },
            }),
          });
          frame.facets.push({
            layer: "bottom",
            plotter: crosshairFacet({
              x:
                spanSelect.dimension !== "y"
                  ? spanSelect.end.canvas.x
                  : undefined,
              y:
                spanSelect.dimension !== "x"
                  ? spanSelect.end.canvas.y
                  : undefined,
              style: {
                strokeStyle: "rgba(0, 0, 255, 0.8)",
              },
            }),
          });
          frame.facets.push({
            layer: "top",
            plotter: absoluteSpanFacet({
              x:
                spanSelect.dimension === "y"
                  ? undefined
                  : {
                      min: spanSelect.start.canvas.x,
                      max: spanSelect.end.canvas.x,
                    },
              y:
                spanSelect.dimension === "x"
                  ? undefined
                  : {
                      min: spanSelect.start.canvas.y,
                      max: spanSelect.end.canvas.y,
                    },
              style: {
                fillStyle: "rgba(0, 0, 255, 0.2)",
              },
            }),
          });
        }
      },
    };
  });

plot.draw((state) => {
  const facets: Facet[] = [
    {
      layer: "bottom",
      plotter: absoluteSpanFacet({
        x: { min: 0, max: state.sizer.width / 2 },
        y: { min: 0, max: state.sizer.height / 2 },
        style: {
          fillStyle: "rgba(255, 0, 0, 0.2)",
        },
      }),
    },
  ];
  if (state.hover.position) {
    const { position } = state.hover;
    facets.push({
      layer: "top",
      plotter: (frame) => {
        frame.ctx.fillStyle = "orange";
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
        y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        plotter: linePlotter(),
      },
    ],
    facets,
  };
});
