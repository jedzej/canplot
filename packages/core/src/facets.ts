import { applyStyles, valToPos } from "./helpers";
import {
  CustomFacet,
  PlotDrawFrame,
  FacetLayer,
  HLineFacet,
  SpanFacet,
  VLineFacet,
  CircleFacet,
} from "./types";

const getScale = (frame: PlotDrawFrame, scaleId: string) => {
  const scale = frame.inputParams.scales.find((scale) => scale.id === scaleId);
  if (!scale) {
    console.error("No scale found", scaleId);
  }
  return scale;
};

const drawVLineFacet = (frame: PlotDrawFrame, facet: VLineFacet) => {
  const { ctx, chartArea } = frame;
  const scale = getScale(frame, facet.scaleId);
  if (!scale) {
    return;
  }
  const x = valToPos(frame, facet.x, scale.id);
  ctx.save();
  applyStyles(ctx, facet.style);
  ctx.beginPath();
  ctx.moveTo(x, chartArea.y);
  ctx.lineTo(x, chartArea.y + chartArea.height);
  ctx.stroke();
  ctx.restore();
};

const drawHLineFacet = (frame: PlotDrawFrame, facet: HLineFacet) => {
  const { ctx, chartArea } = frame;
  const scale = getScale(frame, facet.scaleId);
  if (!scale) {
    return;
  }
  const y = valToPos(frame, facet.y, scale.id);
  ctx.save();
  applyStyles(ctx, facet.style);
  ctx.beginPath();
  ctx.moveTo(chartArea.x, y);
  ctx.lineTo(chartArea.x + chartArea.width, y);
  ctx.stroke();
  ctx.restore();
};

const drawCircleFacet = (frame: PlotDrawFrame, facet: CircleFacet) => {
  const { ctx } = frame;
  const xScale = getScale(frame, facet.xScaleId);
  const yScale = getScale(frame, facet.yScaleId);
  if (!xScale || !yScale) {
    return;
  }
  const x = valToPos(frame, facet.x, xScale.id);
  const y = valToPos(frame, facet.y, yScale.id);
  ctx.save();
  applyStyles(ctx, facet.style);
  ctx.beginPath();
  ctx.arc(x, y, facet.radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
};

const drawSpanFacet = (frame: PlotDrawFrame, facet: SpanFacet) => {
  const { ctx, chartArea } = frame;
  let x0 = chartArea.x;
  let x1 = chartArea.x + chartArea.width;
  let y0 = chartArea.y;
  let y1 = chartArea.y + chartArea.height;

  if (facet.x) {
    const scale = getScale(frame, facet.x.scaleId);
    if (!scale) {
      return;
    }
    if (typeof facet.x.min === "number") {
      x0 = Math.ceil(valToPos(frame, facet.x.min, scale.id));
    }
    if (typeof facet.x.max === "number") {
      x1 = Math.ceil(valToPos(frame, facet.x.max, scale.id));
    }
  }
  if (facet.y) {
    const scale = getScale(frame, facet.y.scaleId);
    if (!scale) {
      return;
    }
    if (typeof facet.y.min === "number") {
      y0 = Math.ceil(valToPos(frame, facet.y.min, scale.id));
    }
    if (typeof facet.y.max === "number") {
      y1 = Math.ceil(valToPos(frame, facet.y.max, scale.id));
    }
  }
  ctx.save();
  applyStyles(ctx, facet.style);
  ctx.beginPath();
  ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
  ctx.restore();
};

const drawCustomFacet = (frame: PlotDrawFrame, facet: CustomFacet) => {
  frame.ctx.save();
  applyStyles(frame.ctx, facet.style);
  facet.draw(frame, facet);
  frame.ctx.restore();
};

export const drawFacets = (frame: PlotDrawFrame, layer: FacetLayer) => {
  const { inputParams: drawConfig } = frame;
  const facets =
    drawConfig.facets?.filter((facet) => {
      const currentLayer = facet.layer ?? "bottom";
      return currentLayer === layer;
    }) ?? [];

  for (const facet of facets) {
    switch (facet.type) {
      case "custom":
        drawCustomFacet(frame, facet);
        break;
      case "v-line":
        drawVLineFacet(frame, facet);
        break;
      case "h-line":
        drawHLineFacet(frame, facet);
        break;
      case "circle":
        drawCircleFacet(frame, facet);
        break;
      case "span":
        drawSpanFacet(frame, facet);
        break;
    }
  }
};
