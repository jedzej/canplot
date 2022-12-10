import { applyStyles, valToPos } from "./helpers";
import {
  CustomFacet,
  DrawContext,
  FacetLayer,
  HLineFacet,
  SpanFacet,
  VLineFacet,
} from "./types";

const getScale = (drawContext: DrawContext, scaleId: string) => {
  const scale = drawContext.drawConfig.scales.find(
    (scale) => scale.id === scaleId
  );
  if (!scale) {
    console.error("No scale found", scaleId);
  }
  return scale;
};

const drawVLineFacet = (drawContext: DrawContext, facet: VLineFacet) => {
  const { ctx, chartArea } = drawContext;
  const scale = getScale(drawContext, facet.scaleId);
  if (!scale) {
    return;
  }
  const x = valToPos(drawContext, facet.x, scale);
  ctx.save();
  applyStyles(ctx, facet.style);
  ctx.beginPath();
  ctx.moveTo(x, chartArea.y);
  ctx.lineTo(x, chartArea.y + chartArea.height);
  ctx.stroke();
  ctx.restore();
};

const drawHLineFacet = (drawContext: DrawContext, facet: HLineFacet) => {
  const { ctx, chartArea } = drawContext;
  const scale = getScale(drawContext, facet.scaleId);
  if (!scale) {
    return;
  }
  const y = valToPos(drawContext, facet.y, scale);
  ctx.save();
  applyStyles(ctx, facet.style);
  ctx.beginPath();
  ctx.moveTo(chartArea.x, y);
  ctx.lineTo(chartArea.x + chartArea.width, y);
  ctx.stroke();
  ctx.restore();
};

const drawSpanFacet = (drawContext: DrawContext, facet: SpanFacet) => {
  const { ctx, chartArea } = drawContext;
  let x0 = chartArea.x;
  let x1 = chartArea.x + chartArea.width;
  let y0 = chartArea.y;
  let y1 = chartArea.y + chartArea.height;

  if (facet.x) {
    const scale = getScale(drawContext, facet.x.scaleId);
    if (!scale) {
      return;
    }
    if (typeof facet.x.min === "number") {
      x0 = Math.ceil(valToPos(drawContext, facet.x.min, scale));
    }
    if (typeof facet.x.max === "number") {
      x1 = Math.ceil(valToPos(drawContext, facet.x.max, scale));
    }
  }
  if (facet.y) {
    const scale = getScale(drawContext, facet.y.scaleId);
    if (!scale) {
      return;
    }
    if (typeof facet.y.min === "number") {
      y0 = Math.ceil(valToPos(drawContext, facet.y.min, scale));
    }
    if (typeof facet.y.max === "number") {
      y1 = Math.ceil(valToPos(drawContext, facet.y.max, scale));
    }
  }
  ctx.save();
  applyStyles(ctx, facet.style);
  ctx.beginPath();
  ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
  ctx.restore();
};

const drawCustomFacet = (drawContext: DrawContext, facet: CustomFacet) => {
  drawContext.ctx.save();
  applyStyles(drawContext.ctx, facet.style);
  facet.draw(drawContext);
  drawContext.ctx.restore();
};

export const drawFacets = (drawContext: DrawContext, layer: FacetLayer) => {
  const { drawConfig } = drawContext;
  const facets =
    drawConfig.facets?.filter((facet) => {
      const currentLayer = facet.layer ?? "bottom";
      return currentLayer === layer;
    }) ?? [];

  for (const facet of facets) {
    switch (facet.type) {
      case "custom":
        drawCustomFacet(drawContext, facet);
        break;
      case "v-line":
        drawVLineFacet(drawContext, facet);
        break;
      case "h-line":
        drawHLineFacet(drawContext, facet);
        break;
      case "span":
        drawSpanFacet(drawContext, facet);
        break;
    }
  }
};
