import { it, expect } from "vitest";
import { createCanvas } from "canvas";
import fs from "fs";
import "./utils";

it("example", async () => {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext("2d");

  // Write "Awesome!"
  ctx.font = "30px Arial";
  ctx.rotate(0.1);
  ctx.fillText("aaa!", 50, 100);

  // Draw line under text
  var text = ctx.measureText("Awesasdsaome!");
  ctx.strokeStyle = "rgba(0,0,0,0.5)";
  ctx.beginPath();
  ctx.lineTo(50, 102);
  ctx.lineTo(50 + text.width, 102);
  ctx.stroke();

  const tmpPath = expect.getState().testPath! + ".png";
  canvas.createPNGStream().pipe(fs.createWriteStream(tmpPath)).on("close", () => {
    const fileContent = fs.readFileSync(tmpPath);
    fs.unlinkSync(tmpPath);
  
    expect(fileContent).toMatchImageSnapshot();
  });
  
});
