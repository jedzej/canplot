import {
  Facet,
  Plot,
  PlotPluginConfig,
  helpers,
  linePlotter,
} from "./src/main";

const colors = ["red", "blue", "brown", "orange", "purple"];

const makeLegend = (
  legendData: { color: string; label: string }[]
): PlotPluginConfig => {
  let originalBottomPadding = 0;
  const legendHeight = 20 * legendData.length;
  return {
    transformInputParams({ inputParams }) {
      const legendHeight = 20 * legendData.length;
      const normalizedPadding = helpers.normalizePadding(inputParams.padding);

      originalBottomPadding = normalizedPadding.bottom;
      return {
        ...inputParams,
        padding: {
          ...normalizedPadding,
          bottom: normalizedPadding.bottom + legendHeight,
        },
      };
    },
    transformFrame({ frame }) {
      const legendFacet: Facet = {
        type: "custom",
        draw(frame) {
          const {
            ctx,
            canvasSize,
            chartArea,
            inputParams: { series },
          } = frame;
          ctx.fillStyle = "red";
          const legendY =
            canvasSize.height - originalBottomPadding - legendHeight;

          const maxW = Math.max(
            ...series.map((_, i) => ctx.measureText(legendData[i].label).width)
          );
          const legendWidth = maxW + 30;
          const legendX = chartArea.x + (chartArea.width - legendWidth) / 2;

          ctx.strokeRect(legendX, legendY, legendWidth, legendHeight);

          for (let i = 0; i < series.length; i++) {
            ctx.fillStyle = legendData[i].color;
            ctx.fillRect(legendX, legendY + i * 20, 20, 20);
            ctx.fillStyle = "black";
            ctx.fillText(
              legendData[i].label,
              legendX + 22,
              legendY + i * 20 + 15
            );
          }
        },
      };

      return {
        ...frame,
        inputParams: {
          ...(frame.inputParams ?? {}),
          facets: [...(frame.inputParams.facets ?? []), legendFacet],
        },
      };
    },
  };
};

new Plot(
  {
    canvas: document.getElementById("canvas")! as HTMLCanvasElement,
    dimensions: { width: "auto", height: 400 },
    plugins: [
      makeLegend([
        {
          color: colors[0],
          label: "a",
        },
        {
          color: colors[1],
          label: "a",
        },
        {
          color: colors[2],
          label: "a",
        },
      ]),
    ],
  },
  {
    padding: 20,
    series: [
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: colors[0] } }),
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: colors[1] } }),
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [3, 4, 5, 6, 7, 8, 9, 10, 1, 2],
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: colors[2] } }),
      },
    ],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    axes: [
      {
        scaleId: "x-1",
        size: 20,
      },
      {
        scaleId: "y-1",
      },
    ],
  }
);
