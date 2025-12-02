import { useDrawEffect } from "../frameContext";
import { applyStyles } from "../helpers";
import type {  Style, TicksConfig } from "../types";


export const XTicks: React.FC<{
  scaleId: string;
  tickStyle?: Style;
  labelStyle?: Style;
  labelGap?: number;
  tickSize?: number;
  ticks: TicksConfig;
}> = ({ scaleId, tickStyle, labelStyle, labelGap, tickSize, ticks }) => {
  useDrawEffect(
    ({ getCtx, valToPos, getScale, getFrame }) => {
      const ctx = getCtx();
      const scale = getScale(scaleId);
      if (!scale || !scale.axis || scale.origin !== "x") return;
      const axis = scale.axis;
      const y =
        axis.position === "top"
          ? axis.canvasRect.y + axis.canvasRect.height
          : axis.canvasRect.y;

      const dpr = window.devicePixelRatio || 1;
      const y0 = y;
      const effectiveTickSize = (tickSize ?? 6) * dpr;
      const y1 = axis.position === "top" ? y - effectiveTickSize : y + effectiveTickSize;
      const multilineGap = (labelGap ?? 12) * dpr;

      // draw ticks
      ctx.save();
      ctx.fontKerning = "auto";
      applyStyles(ctx, {
        ...tickStyle,
      });
      ctx.beginPath();
      const resolvedTicks = Array.isArray(ticks)
        ? ticks
        : ticks({...scale, axis}, getFrame());

      for (const { value } of resolvedTicks) {
        const x = valToPos(value, scaleId, "canvas");
        ctx.moveTo(x, y0);
        ctx.lineTo(x, y1);
      }
      ctx.stroke();
      ctx.restore();

      // draw tick labels
      ctx.save();
      applyStyles(ctx, {
        textBaseline: axis.position === "top" ? "bottom" : "top",
        textAlign: "center",
        ...tickStyle,
        ...labelStyle,
      });
      for (const { value, label } of resolvedTicks) {
        const x = valToPos(value, scaleId, "canvas");
        const labelLines = label.split("\n");
        for (let j = 0; j < labelLines.length; j++) {
          ctx.fillText(labelLines[j], x, y1 + dpr * 2 + j * multilineGap);
        }
      }
      ctx.restore();
    },
    [ticks, scaleId, tickStyle, labelStyle]
  );
  return null;
};

export const YTicks: React.FC<{
  scaleId: string;
  tickStyle?: Style;
  labelStyle?: Style;
  labelGap?: number;
  tickSize?: number;
  ticks: TicksConfig;
}> = ({ scaleId, tickStyle, labelStyle, labelGap, tickSize, ticks }) => {
  useDrawEffect(
    ({ getCtx, valToPos, getScale, getFrame }) => {
      const ctx = getCtx();
      const scale = getScale(scaleId);
      if (!scale || !scale.axis || scale.origin !== "y") return;
      const axis = scale.axis;
      const x =
        axis.position === "left"
          ? axis.canvasRect.x + axis.canvasRect.width
          : axis.canvasRect.x;

      const dpr = window.devicePixelRatio || 1;
      const x0 = x;
      const effectiveTickSize = (tickSize ?? 6) * dpr;
      const x1 = axis.position === "left" ? x - effectiveTickSize : x + effectiveTickSize;
      const multilineGap = (labelGap ?? 12) * dpr;

      const resolvedTicks = Array.isArray(ticks)
        ? ticks
        : ticks({...scale, axis}, getFrame());

      // draw ticks
      ctx.save();
      ctx.fontKerning = "auto";
      applyStyles(ctx, { ...tickStyle });
      ctx.beginPath();

      for (const { value } of resolvedTicks) {
        const y = valToPos(value, scaleId, "canvas");
        ctx.moveTo(x0, y);
        ctx.lineTo(x1, y);
      }
      ctx.stroke();
      ctx.restore();

      // draw tick labels
      ctx.save();
      applyStyles(ctx, {
        textBaseline: "middle",
        textAlign: axis.position === "left" ? "right" : "left",
        ...tickStyle,
        ...labelStyle,
      });
      for (const { value, label } of resolvedTicks) {
        const y = valToPos(value, scaleId, "canvas");
        const labelLines = label.split("\n");
        for (let j = 0; j < labelLines.length; j++) {
          ctx.fillText(` ${labelLines[j]} `, x1, y + j * multilineGap);
        }
      }
      ctx.restore();
    },
    [ticks, scaleId, tickStyle, labelStyle]
  );
  return null;
};
