import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-DP0Kcass.js";import{u as p}from"./ChartAreaInteractions-Bwbyioka.js";import{c as u,b as m}from"./CanPlot-d0tERzCM.js";const g=({makeClassName:s,makeStyle:o})=>{const[e,y]=i.useState(null);p("spanselect",n=>{y(n.mode==="none"||n.completed?null:n)});const r=i.useMemo(()=>{if(!e)return null;const n=u(e.frame,e.x.fromCSS,"css"),a=u(e.frame,e.x.toCSS,"css"),t=m(e.frame,e.y.fromCSS,"css"),l=m(e.frame,e.y.toCSS,"css"),S=Math.min(n,a),v=Math.min(t,l),d=Math.abs(a-n),b=Math.abs(l-t);return{leftPx:S,topPx:v,widthPx:d,heightPx:b}},[e]);return k.jsx("div",{className:e?s?.(e):void 0,style:{position:"absolute",visibility:e?"visible":"hidden",left:`${r?.leftPx??0}px`,top:`${r?.topPx??0}px`,width:`${r?.widthPx??0}px`,height:`${r?.heightPx??0}px`,pointerEvents:"none",...e?o?.(e):void 0}})};g.__docgenInfo={description:"",methods:[],displayName:"SelectBox",props:{makeClassName:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectState: SpanSelectEvent) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frame: PlotDrawFrame;
  mode: "x" | "y" | "box" | "none";
  x: {
    fromCSS: number;
    toCSS: number;
  };
  y: {
    fromCSS: number;
    toCSS: number;
  };
  xRanges: ScaledSelectionRange[];
  yRanges: ScaledSelectionRange[];
  completed: boolean;
  keys: ModifiersKeys;
}`,signature:{properties:[{key:"frame",value:{name:"signature",type:"object",raw:`{
  ctx: CanvasRenderingContext2D;
  dpr: number;
  chartAreaCanvasPX: { x: number; y: number; width: number; height: number };
  chartAreaCSS: { x: number; y: number; width: number; height: number };
  padding: PlotPadding;
  scales: PlotDrawScaleConfig[];
}`,signature:{properties:[{key:"ctx",value:{name:"CanvasRenderingContext2D",required:!0}},{key:"dpr",value:{name:"number",required:!0}},{key:"chartAreaCanvasPX",value:{name:"signature",type:"object",raw:"{ x: number; y: number; width: number; height: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}},{key:"chartAreaCSS",value:{name:"signature",type:"object",raw:"{ x: number; y: number; width: number; height: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}},{key:"padding",value:{name:"signature",type:"object",raw:`{
  top: number;
  bottom: number;
  left: number;
  right: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}}]},required:!0}},{key:"scales",value:{name:"Array",elements:[{name:"intersection",raw:`PlotScaleConfig & {
  axis: null | PlotDrawAxis;
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxis;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxis",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  style?: Style;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"style",value:{name:"intersection",raw:`{
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
} & Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
> &
  Partial<CanvasTextDrawingStyles>`,elements:[{name:"signature",type:"object",raw:`{
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
}`,signature:{properties:[{key:"fillStyle",value:{name:'CanvasFillStrokeStyles["fillStyle"]',raw:'CanvasFillStrokeStyles["fillStyle"]',required:!1}},{key:"strokeStyle",value:{name:'CanvasFillStrokeStyles["strokeStyle"]',raw:'CanvasFillStrokeStyles["strokeStyle"]',required:!1}}]}},{name:"Partial",elements:[{name:"Pick",elements:[{name:"CanvasPathDrawingStyles"},{name:"union",raw:'"lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"',elements:[{name:"literal",value:'"lineCap"'},{name:"literal",value:'"lineDashOffset"'},{name:"literal",value:'"lineJoin"'},{name:"literal",value:'"lineWidth"'},{name:"literal",value:'"miterLimit"'}]}],raw:`Pick<
  CanvasPathDrawingStyles,
  "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
>`}],raw:`Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
>`},{name:"Partial",elements:[{name:"CanvasTextDrawingStyles"}],raw:"Partial<CanvasTextDrawingStyles>"}],required:!1}}]}}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  axis: null | PlotDrawAxis;
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | PlotDrawAxis",elements:[{name:"null"},{name:"intersection",raw:"PlotAxis & { cssRect: Rect; canvasRect: Rect }",elements:[{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  style?: Style;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"style",value:{name:"intersection",raw:`{
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
} & Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
> &
  Partial<CanvasTextDrawingStyles>`,elements:[{name:"signature",type:"object",raw:`{
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
}`,signature:{properties:[{key:"fillStyle",value:{name:'CanvasFillStrokeStyles["fillStyle"]',raw:'CanvasFillStrokeStyles["fillStyle"]',required:!1}},{key:"strokeStyle",value:{name:'CanvasFillStrokeStyles["strokeStyle"]',raw:'CanvasFillStrokeStyles["strokeStyle"]',required:!1}}]}},{name:"Partial",elements:[{name:"Pick",elements:[{name:"CanvasPathDrawingStyles"},{name:"union",raw:'"lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"',elements:[{name:"literal",value:'"lineCap"'},{name:"literal",value:'"lineDashOffset"'},{name:"literal",value:'"lineJoin"'},{name:"literal",value:'"lineWidth"'},{name:"literal",value:'"miterLimit"'}]}],raw:`Pick<
  CanvasPathDrawingStyles,
  "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
>`}],raw:`Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
>`},{name:"Partial",elements:[{name:"CanvasTextDrawingStyles"}],raw:"Partial<CanvasTextDrawingStyles>"}],required:!1}}]}},{name:"signature",type:"object",raw:"{ cssRect: Rect; canvasRect: Rect }",signature:{properties:[{key:"cssRect",value:{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
  width: number;
  height: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}},{key:"canvasRect",value:{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
  width: number;
  height: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}}]}}]}],required:!0}}]}}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"mode",value:{name:"union",raw:'"x" | "y" | "box" | "none"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"box"'},{name:"literal",value:'"none"'}],required:!0}},{key:"x",value:{name:"signature",type:"object",raw:`{
  fromCSS: number;
  toCSS: number;
}`,signature:{properties:[{key:"fromCSS",value:{name:"number",required:!0}},{key:"toCSS",value:{name:"number",required:!0}}]},required:!0}},{key:"y",value:{name:"signature",type:"object",raw:`{
  fromCSS: number;
  toCSS: number;
}`,signature:{properties:[{key:"fromCSS",value:{name:"number",required:!0}},{key:"toCSS",value:{name:"number",required:!0}}]},required:!0}},{key:"xRanges",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  scaleId: string;
  from: number;
  to: number;
}`,signature:{properties:[{key:"scaleId",value:{name:"string",required:!0}},{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]}}],raw:"ScaledSelectionRange[]",required:!0}},{key:"yRanges",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  scaleId: string;
  from: number;
  to: number;
}`,signature:{properties:[{key:"scaleId",value:{name:"string",required:!0}},{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]}}],raw:"ScaledSelectionRange[]",required:!0}},{key:"completed",value:{name:"boolean",required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}`,signature:{properties:[{key:"ctrlKey",value:{name:"boolean",required:!0}},{key:"altKey",value:{name:"boolean",required:!0}},{key:"shiftKey",value:{name:"boolean",required:!0}},{key:"metaKey",value:{name:"boolean",required:!0}}]},required:!0}}]}},name:"selectState"}],return:{name:"string"}}},description:""},makeStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectState: SpanSelectEvent) => React.CSSProperties | undefined",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frame: PlotDrawFrame;
  mode: "x" | "y" | "box" | "none";
  x: {
    fromCSS: number;
    toCSS: number;
  };
  y: {
    fromCSS: number;
    toCSS: number;
  };
  xRanges: ScaledSelectionRange[];
  yRanges: ScaledSelectionRange[];
  completed: boolean;
  keys: ModifiersKeys;
}`,signature:{properties:[{key:"frame",value:{name:"signature",type:"object",raw:`{
  ctx: CanvasRenderingContext2D;
  dpr: number;
  chartAreaCanvasPX: { x: number; y: number; width: number; height: number };
  chartAreaCSS: { x: number; y: number; width: number; height: number };
  padding: PlotPadding;
  scales: PlotDrawScaleConfig[];
}`,signature:{properties:[{key:"ctx",value:{name:"CanvasRenderingContext2D",required:!0}},{key:"dpr",value:{name:"number",required:!0}},{key:"chartAreaCanvasPX",value:{name:"signature",type:"object",raw:"{ x: number; y: number; width: number; height: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}},{key:"chartAreaCSS",value:{name:"signature",type:"object",raw:"{ x: number; y: number; width: number; height: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}},{key:"padding",value:{name:"signature",type:"object",raw:`{
  top: number;
  bottom: number;
  left: number;
  right: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}}]},required:!0}},{key:"scales",value:{name:"Array",elements:[{name:"intersection",raw:`PlotScaleConfig & {
  axis: null | PlotDrawAxis;
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxis;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxis",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  style?: Style;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"style",value:{name:"intersection",raw:`{
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
} & Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
> &
  Partial<CanvasTextDrawingStyles>`,elements:[{name:"signature",type:"object",raw:`{
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
}`,signature:{properties:[{key:"fillStyle",value:{name:'CanvasFillStrokeStyles["fillStyle"]',raw:'CanvasFillStrokeStyles["fillStyle"]',required:!1}},{key:"strokeStyle",value:{name:'CanvasFillStrokeStyles["strokeStyle"]',raw:'CanvasFillStrokeStyles["strokeStyle"]',required:!1}}]}},{name:"Partial",elements:[{name:"Pick",elements:[{name:"CanvasPathDrawingStyles"},{name:"union",raw:'"lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"',elements:[{name:"literal",value:'"lineCap"'},{name:"literal",value:'"lineDashOffset"'},{name:"literal",value:'"lineJoin"'},{name:"literal",value:'"lineWidth"'},{name:"literal",value:'"miterLimit"'}]}],raw:`Pick<
  CanvasPathDrawingStyles,
  "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
>`}],raw:`Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
>`},{name:"Partial",elements:[{name:"CanvasTextDrawingStyles"}],raw:"Partial<CanvasTextDrawingStyles>"}],required:!1}}]}}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  axis: null | PlotDrawAxis;
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | PlotDrawAxis",elements:[{name:"null"},{name:"intersection",raw:"PlotAxis & { cssRect: Rect; canvasRect: Rect }",elements:[{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  style?: Style;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"style",value:{name:"intersection",raw:`{
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
} & Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
> &
  Partial<CanvasTextDrawingStyles>`,elements:[{name:"signature",type:"object",raw:`{
  fillStyle?: CanvasFillStrokeStyles["fillStyle"];
  strokeStyle?: CanvasFillStrokeStyles["strokeStyle"];
}`,signature:{properties:[{key:"fillStyle",value:{name:'CanvasFillStrokeStyles["fillStyle"]',raw:'CanvasFillStrokeStyles["fillStyle"]',required:!1}},{key:"strokeStyle",value:{name:'CanvasFillStrokeStyles["strokeStyle"]',raw:'CanvasFillStrokeStyles["strokeStyle"]',required:!1}}]}},{name:"Partial",elements:[{name:"Pick",elements:[{name:"CanvasPathDrawingStyles"},{name:"union",raw:'"lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"',elements:[{name:"literal",value:'"lineCap"'},{name:"literal",value:'"lineDashOffset"'},{name:"literal",value:'"lineJoin"'},{name:"literal",value:'"lineWidth"'},{name:"literal",value:'"miterLimit"'}]}],raw:`Pick<
  CanvasPathDrawingStyles,
  "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
>`}],raw:`Partial<
  Pick<
    CanvasPathDrawingStyles,
    "lineCap" | "lineDashOffset" | "lineJoin" | "lineWidth" | "miterLimit"
  >
>`},{name:"Partial",elements:[{name:"CanvasTextDrawingStyles"}],raw:"Partial<CanvasTextDrawingStyles>"}],required:!1}}]}},{name:"signature",type:"object",raw:"{ cssRect: Rect; canvasRect: Rect }",signature:{properties:[{key:"cssRect",value:{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
  width: number;
  height: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}},{key:"canvasRect",value:{name:"signature",type:"object",raw:`{
  x: number;
  y: number;
  width: number;
  height: number;
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}}]}}]}],required:!0}}]}}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"mode",value:{name:"union",raw:'"x" | "y" | "box" | "none"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"box"'},{name:"literal",value:'"none"'}],required:!0}},{key:"x",value:{name:"signature",type:"object",raw:`{
  fromCSS: number;
  toCSS: number;
}`,signature:{properties:[{key:"fromCSS",value:{name:"number",required:!0}},{key:"toCSS",value:{name:"number",required:!0}}]},required:!0}},{key:"y",value:{name:"signature",type:"object",raw:`{
  fromCSS: number;
  toCSS: number;
}`,signature:{properties:[{key:"fromCSS",value:{name:"number",required:!0}},{key:"toCSS",value:{name:"number",required:!0}}]},required:!0}},{key:"xRanges",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  scaleId: string;
  from: number;
  to: number;
}`,signature:{properties:[{key:"scaleId",value:{name:"string",required:!0}},{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]}}],raw:"ScaledSelectionRange[]",required:!0}},{key:"yRanges",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  scaleId: string;
  from: number;
  to: number;
}`,signature:{properties:[{key:"scaleId",value:{name:"string",required:!0}},{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]}}],raw:"ScaledSelectionRange[]",required:!0}},{key:"completed",value:{name:"boolean",required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}`,signature:{properties:[{key:"ctrlKey",value:{name:"boolean",required:!0}},{key:"altKey",value:{name:"boolean",required:!0}},{key:"shiftKey",value:{name:"boolean",required:!0}},{key:"metaKey",value:{name:"boolean",required:!0}}]},required:!0}}]}},name:"selectState"}],return:{name:"union",raw:"React.CSSProperties | undefined",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"undefined"}]}}},description:""}}};export{g as S};
