import { it, expect } from "vitest";
import fs from "fs";
import "./utils";
import { NodePlot } from "../NodePlot";
import { linePlotter } from "../main";

it("example", async () => {
  const plot = new NodePlot(
    {
      dimensions: {
        width: 600,
        height: 200,
      },
    },

    {
      padding: 20,
      series: [
        {
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          xScaleId: "x-1",
          yScaleId: "y-1",
          plotter: linePlotter({ style: { strokeStyle: "red" } }),
        },
        {
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
          xScaleId: "x-1",
          yScaleId: "y-1",
          plotter: linePlotter({ style: { strokeStyle: "green" } }),
        },
        {
          x: [1, 2, 3, 4, 8, 9, 10],
          y: [3, 4, 5, 6, 10, 1, 2],
          xScaleId: "x-1",
          yScaleId: "y-1",
          plotter: linePlotter({ style: { strokeStyle: "blue" } }),
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

  const tmpPath = expect.getState().testPath! + ".png";
  await new Promise<boolean>((resolve) => {
    const outStream = fs.createWriteStream(tmpPath);
    plot
      .getCanvas()
      .createPNGStream()
      .pipe(outStream)
      .on("finish", () => {
        resolve(true);
        console.log("close");
      });
  });
  const fileContent = fs.readFileSync(tmpPath);
  fs.unlinkSync(tmpPath);
  expect(fileContent).toMatchImageSnapshot();
});
