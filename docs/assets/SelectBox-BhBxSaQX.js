import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CRxhtb6P.js";import{u as f}from"./ChartAreaInteractions-DRUk4mCz.js";import{e as s,f as m}from"./frameContext-ClpSaL7J.js";const w=({makeClassName:o,makeStyle:y})=>{const[e,d]=u.useState(null);f("spanselect",n=>{d(n.mode==="below_threshold"||n.completed?null:n)});const r=u.useMemo(()=>{if(!e||e.mode==="below_threshold")return null;const n=e.mode==="y"?-1/0:e.x.css?.from??-1/0,v=e.mode==="y"?1/0:e.x.css?.to??1/0,b=e.mode==="x"?-1/0:e.y.css?.from??-1/0,c=e.mode==="x"?1/0:e.y.css?.to??1/0,a=s(e.frame,n,"css"),t=s(e.frame,v,"css"),l=m(e.frame,b,"css"),i=m(e.frame,c,"css"),p=Math.min(a,t),k=Math.min(l,i),S=Math.abs(t-a),g=Math.abs(i-l);return{leftPx:p,topPx:k,widthPx:S,heightPx:g}},[e]);return h.jsx("div",{className:e?o?.(e):void 0,style:{position:"absolute",visibility:e?"visible":"hidden",left:`${r?.leftPx??0}px`,top:`${r?.topPx??0}px`,width:`${r?.widthPx??0}px`,height:`${r?.heightPx??0}px`,pointerEvents:"none",...e?y?.(e):void 0}})};w.__docgenInfo={description:"",methods:[],displayName:"SelectBox",props:{makeClassName:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectState: SpanSelectEvent) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frame: PlotDrawFrame;
  mode: "x" | "y" | "box" | "below_threshold";
  x: {
    css?: { from: number; to: number };
    scaled: ScaledSelectionRange[];
  };
  y: {
    css?: { from: number; to: number };
    scaled: ScaledSelectionRange[];
  };
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
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}}]}}]}],required:!0}}]}}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"mode",value:{name:"union",raw:'"x" | "y" | "box" | "below_threshold"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"box"'},{name:"literal",value:'"below_threshold"'}],required:!0}},{key:"x",value:{name:"signature",type:"object",raw:`{
  css?: { from: number; to: number };
  scaled: ScaledSelectionRange[];
}`,signature:{properties:[{key:"css",value:{name:"signature",type:"object",raw:"{ from: number; to: number }",signature:{properties:[{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]},required:!1}},{key:"scaled",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  scaleId: string;
  from: number;
  to: number;
}`,signature:{properties:[{key:"scaleId",value:{name:"string",required:!0}},{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]}}],raw:"ScaledSelectionRange[]",required:!0}}]},required:!0}},{key:"y",value:{name:"signature",type:"object",raw:`{
  css?: { from: number; to: number };
  scaled: ScaledSelectionRange[];
}`,signature:{properties:[{key:"css",value:{name:"signature",type:"object",raw:"{ from: number; to: number }",signature:{properties:[{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]},required:!1}},{key:"scaled",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  scaleId: string;
  from: number;
  to: number;
}`,signature:{properties:[{key:"scaleId",value:{name:"string",required:!0}},{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]}}],raw:"ScaledSelectionRange[]",required:!0}}]},required:!0}},{key:"completed",value:{name:"boolean",required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}`,signature:{properties:[{key:"ctrlKey",value:{name:"boolean",required:!0}},{key:"altKey",value:{name:"boolean",required:!0}},{key:"shiftKey",value:{name:"boolean",required:!0}},{key:"metaKey",value:{name:"boolean",required:!0}}]},required:!0}}]}},name:"selectState"}],return:{name:"string"}}},description:""},makeStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectState: SpanSelectEvent) => React.CSSProperties | undefined",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  frame: PlotDrawFrame;
  mode: "x" | "y" | "box" | "below_threshold";
  x: {
    css?: { from: number; to: number };
    scaled: ScaledSelectionRange[];
  };
  y: {
    css?: { from: number; to: number };
    scaled: ScaledSelectionRange[];
  };
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
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}}]}}]}],required:!0}}]}}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"mode",value:{name:"union",raw:'"x" | "y" | "box" | "below_threshold"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"box"'},{name:"literal",value:'"below_threshold"'}],required:!0}},{key:"x",value:{name:"signature",type:"object",raw:`{
  css?: { from: number; to: number };
  scaled: ScaledSelectionRange[];
}`,signature:{properties:[{key:"css",value:{name:"signature",type:"object",raw:"{ from: number; to: number }",signature:{properties:[{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]},required:!1}},{key:"scaled",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  scaleId: string;
  from: number;
  to: number;
}`,signature:{properties:[{key:"scaleId",value:{name:"string",required:!0}},{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]}}],raw:"ScaledSelectionRange[]",required:!0}}]},required:!0}},{key:"y",value:{name:"signature",type:"object",raw:`{
  css?: { from: number; to: number };
  scaled: ScaledSelectionRange[];
}`,signature:{properties:[{key:"css",value:{name:"signature",type:"object",raw:"{ from: number; to: number }",signature:{properties:[{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]},required:!1}},{key:"scaled",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  scaleId: string;
  from: number;
  to: number;
}`,signature:{properties:[{key:"scaleId",value:{name:"string",required:!0}},{key:"from",value:{name:"number",required:!0}},{key:"to",value:{name:"number",required:!0}}]}}],raw:"ScaledSelectionRange[]",required:!0}}]},required:!0}},{key:"completed",value:{name:"boolean",required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}`,signature:{properties:[{key:"ctrlKey",value:{name:"boolean",required:!0}},{key:"altKey",value:{name:"boolean",required:!0}},{key:"shiftKey",value:{name:"boolean",required:!0}},{key:"metaKey",value:{name:"boolean",required:!0}}]},required:!0}}]}},name:"selectState"}],return:{name:"union",raw:"React.CSSProperties | undefined",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"undefined"}]}}},description:""}}};export{w as S};
