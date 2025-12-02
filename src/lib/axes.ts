import { applyStyles } from "./helpers";
import type { PlotDrawFrame } from "./types";

export const drawAxes = (plotDrawFrame: PlotDrawFrame) => {
  const { ctx, scales } = plotDrawFrame;

  for (const scale of scales) {
    if (!scale.axis) continue;
    ctx.save();
    applyStyles(ctx, {
      strokeStyle: "black",
      fillStyle: "black",
      lineWidth: 1,
      ...scale.axis.style,
    });
    const rect = scale.axis.canvasRect;
    if (scale.origin === "x") {
      if (scale.axis.position === "bottom") {
        ctx.beginPath();
        ctx.moveTo(rect.x, rect.y);
        ctx.lineTo(rect.x + rect.width, rect.y);
        ctx.stroke();
      } else if (scale.axis.position === "top") {
        const y = rect.y + rect.height;
        ctx.beginPath();
        ctx.moveTo(rect.x, y);
        ctx.lineTo(rect.x + rect.width, y);
        ctx.stroke();
      }
    } else {
      if (scale.axis.position === "left") {
        const x = rect.x + rect.width;
        ctx.beginPath();
        ctx.moveTo(x, rect.y);
        ctx.lineTo(x, rect.y + rect.height);
        ctx.stroke();
      } else if (scale.axis.position === "right") {
        ctx.beginPath();
        ctx.moveTo(rect.x, rect.y);
        ctx.lineTo(rect.x, rect.y + rect.height);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
};
