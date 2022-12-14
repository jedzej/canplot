import { Plot, LineExtras, linePlotter, makeCursorPlugin } from "../lib/main";

new Plot<LineExtras>(
  {
    canvas: document.querySelector<HTMLCanvasElement>("#canvas")!,
    plugins: [
      makeCursorPlugin({
        onSpanSelect: (event) => {
          if (event.phase === "move") {
            event.plot.incrementalUpdate((draft) => {
              const spannerFacetIndex = draft.facets?.findIndex(
                (f) => f.id === "spanner"
              )!;
              draft.facets![spannerFacetIndex] = {
                id: "spanner",
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
              const spannerFacetIndex = draft.facets?.findIndex(
                (f) => f.id === "spanner"
              )!;
              draft.facets![spannerFacetIndex].style = {
                fillStyle: "transparent",
              };
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
        },
      }).bindings,
      makeCursorPlugin({
        onHover: (event) => {
          event.plot.incrementalUpdate((draft) => {
            const facet = draft.facets?.find((f) => f.id === "spikeline");
            if (!facet || facet.type !== "custom") return;
            facet.style = {
              strokeStyle: event.position ? "red" : "transparent",
            };
            if (event.position) {
              facet.payload = {
                posX: event.position.canvas.x,
                posY: event.position.canvas.y,
              };
            }
          });
        },
      }).bindings,
    ],
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
        id: "spikeline",
        type: "custom",
        payload: {
          posX: 0,
          posY: 0,
        },
        draw: ({ ctx, chartArea }, facet) => {
          const { posX, posY } = facet.payload as {
            posX: number;
            posY: number;
          };
          ctx.beginPath();
          ctx.moveTo(chartArea.x, posY);
          ctx.lineTo(chartArea.x + chartArea.width, posY);
          ctx.moveTo(posX, chartArea.y);
          ctx.lineTo(posX, chartArea.y + chartArea.height);
          ctx.strokeStyle = "gray";
          ctx.setLineDash([2, 2]);
          ctx.stroke();
        },
      },
      {
        id: "spanner",
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
