import {
  DOMPlot,
  Plot,
  PlotPluginConfig,
  helpers,
  linePlotter,
  makeCursorPlugin,
} from "./src/main";

const colors = ["red", "blue", "brown", "orange", "purple"];

const makeLegendPlugin = (
  legendData: { color: string; label: string }[]
): PlotPluginConfig => {
  let originalBottomPadding = 0;
  const legendHeight = 20 * legendData.length;

  return makeCursorPlugin({
    onHover: ({ position, frame, self }) => {
      self.setState(() => helpers.findClosestDataPoint(position, frame));
    },
    pluginOpts: {
      initState: () => [] as ReturnType<typeof helpers.findClosestDataPoint>,
      transformInputParams({ inputParams }) {
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
      transformFrame({ frame, self }) {
        const {
          ctx,
          canvasSize,
          chartArea,
          inputParams: { series },
        } = frame;

        const dataPoints = self.state;

        const facets = frame.inputParams.facets ?? [];

        facets.push({
          type: "custom",
          draw() {
            ctx.fillStyle = "red";
            const legendY =
              canvasSize.height - originalBottomPadding - legendHeight;

            const maxW = Math.max(
              ...series.map(
                (_, i) => ctx.measureText(legendData[i].label).width
              )
            );
            const legendWidth = maxW + 50;
            const legendX = chartArea.x + (chartArea.width - legendWidth) / 2;

            ctx.strokeRect(legendX, legendY, legendWidth, legendHeight);

            for (let i = 0; i < series.length; i++) {
              ctx.fillStyle = legendData[i].color;
              ctx.fillRect(legendX, legendY + i * 20, 20, 20);
              ctx.fillStyle = "black";
              ctx.fillText(
                `${legendData[i].label} ${dataPoints[i]?.y ?? ""}`,
                legendX + 22,
                legendY + i * 20 + 15
              );
            }
          },
        });

        for (let i = 0; i < series.length; i++) {
          const datapoint = dataPoints[i];
          if (!datapoint) {
            break;
          }
          facets.push({
            type: "circle",
            layer: "top",
            x: datapoint.x,
            y: datapoint.y,
            radius: 10,
            xScaleId: series[i].xScaleId,
            yScaleId: series[i].yScaleId,
            style: {
              fillStyle: colors[i],
            },
          });
        }

        return {
          ...frame,
          inputParams: {
            ...(frame.inputParams ?? {}),
            facets,
          },
        };
      },
    },
  });
};

new DOMPlot(
  {
    canvas: document.getElementById("canvas")! as HTMLCanvasElement,
    dimensions: { width: "auto", height: 400 },
    plugins: [
      makeLegendPlugin([
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
        x: [1, 2, 3, 4, 8, 9, 10],
        y: [3, 4, 5, 6, 10, 1, 2],
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
