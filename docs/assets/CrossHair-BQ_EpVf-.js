import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-B9ZU6-mP.js";import{u as d}from"./ChartAreaInteractions-B6EBIp6h.js";import{c as b,b as k}from"./CanPlot-Cupv9CKr.js";const p=({makeXStyle:a,makeXClassName:i,makeYStyle:l,makeYClassName:u})=>{const[e,s]=v.useState(null);if(d("move",y=>{s(y)}),!e)return null;const{frame:n,pointer:t}=e,m=b(n,t?.cssX??0,"css"),o=k(n,t?.cssY??0,"css");return r.jsxs(r.Fragment,{children:[r.jsx("div",{"data-show":!!t,className:i?.(e),style:{position:"absolute",left:0,top:n.chartAreaCSS.y,height:n.chartAreaCSS.height,borderColor:"red",borderLeftWidth:"1px",borderLeftStyle:"solid",pointerEvents:"none",opacity:t?1:0,transform:`translateX(${m}px)`,...a?.(e)}}),r.jsx("div",{className:u?.(e),"data-show":!!t,style:{position:"absolute",top:0,height:0,borderTop:"solid 1px red",left:n.chartAreaCSS.x,width:n.chartAreaCSS.width,pointerEvents:"none",opacity:t?1:0,transform:`translateY(${o}px)`,...l?.(e)}})]})};p.__docgenInfo={description:"",methods:[],displayName:"Crosshair",props:{makeXStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"(moveEvent: MoveEvent) => React.CSSProperties | undefined",signature:{arguments:[{type:{name:"intersection",raw:`InteractionsEvent & {
  pointer: InteractionsEventPointerPosition | null;
}`,elements:[{name:"signature",type:"object",raw:`{
  frame: PlotDrawFrame;
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
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}}]}}]}],required:!0}}]}}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}`,signature:{properties:[{key:"ctrlKey",value:{name:"boolean",required:!0}},{key:"altKey",value:{name:"boolean",required:!0}},{key:"shiftKey",value:{name:"boolean",required:!0}},{key:"metaKey",value:{name:"boolean",required:!0}}]},required:!0}}]}},{name:"signature",type:"object",raw:`{
  pointer: InteractionsEventPointerPosition | null;
}`,signature:{properties:[{key:"pointer",value:{name:"union",raw:"InteractionsEventPointerPosition | null",elements:[{name:"signature",type:"object",raw:`{
  cssX: number;
  cssY: number;
  scaled: Record<string, number>;
}`,signature:{properties:[{key:"cssX",value:{name:"number",required:!0}},{key:"cssY",value:{name:"number",required:!0}},{key:"scaled",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]}},{name:"null"}],required:!0}}]}}]},name:"moveEvent"}],return:{name:"union",raw:"React.CSSProperties | undefined",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"undefined"}]}}},description:""},makeXClassName:{required:!1,tsType:{name:"signature",type:"function",raw:"(moveEvent: MoveEvent) => string",signature:{arguments:[{type:{name:"intersection",raw:`InteractionsEvent & {
  pointer: InteractionsEventPointerPosition | null;
}`,elements:[{name:"signature",type:"object",raw:`{
  frame: PlotDrawFrame;
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
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}}]}}]}],required:!0}}]}}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}`,signature:{properties:[{key:"ctrlKey",value:{name:"boolean",required:!0}},{key:"altKey",value:{name:"boolean",required:!0}},{key:"shiftKey",value:{name:"boolean",required:!0}},{key:"metaKey",value:{name:"boolean",required:!0}}]},required:!0}}]}},{name:"signature",type:"object",raw:`{
  pointer: InteractionsEventPointerPosition | null;
}`,signature:{properties:[{key:"pointer",value:{name:"union",raw:"InteractionsEventPointerPosition | null",elements:[{name:"signature",type:"object",raw:`{
  cssX: number;
  cssY: number;
  scaled: Record<string, number>;
}`,signature:{properties:[{key:"cssX",value:{name:"number",required:!0}},{key:"cssY",value:{name:"number",required:!0}},{key:"scaled",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]}},{name:"null"}],required:!0}}]}}]},name:"moveEvent"}],return:{name:"string"}}},description:""},makeYStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"(moveEvent: MoveEvent) => React.CSSProperties | undefined",signature:{arguments:[{type:{name:"intersection",raw:`InteractionsEvent & {
  pointer: InteractionsEventPointerPosition | null;
}`,elements:[{name:"signature",type:"object",raw:`{
  frame: PlotDrawFrame;
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
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}}]}}]}],required:!0}}]}}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}`,signature:{properties:[{key:"ctrlKey",value:{name:"boolean",required:!0}},{key:"altKey",value:{name:"boolean",required:!0}},{key:"shiftKey",value:{name:"boolean",required:!0}},{key:"metaKey",value:{name:"boolean",required:!0}}]},required:!0}}]}},{name:"signature",type:"object",raw:`{
  pointer: InteractionsEventPointerPosition | null;
}`,signature:{properties:[{key:"pointer",value:{name:"union",raw:"InteractionsEventPointerPosition | null",elements:[{name:"signature",type:"object",raw:`{
  cssX: number;
  cssY: number;
  scaled: Record<string, number>;
}`,signature:{properties:[{key:"cssX",value:{name:"number",required:!0}},{key:"cssY",value:{name:"number",required:!0}},{key:"scaled",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]}},{name:"null"}],required:!0}}]}}]},name:"moveEvent"}],return:{name:"union",raw:"React.CSSProperties | undefined",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"undefined"}]}}},description:""},makeYClassName:{required:!1,tsType:{name:"signature",type:"function",raw:"(moveEvent: MoveEvent) => string",signature:{arguments:[{type:{name:"intersection",raw:`InteractionsEvent & {
  pointer: InteractionsEventPointerPosition | null;
}`,elements:[{name:"signature",type:"object",raw:`{
  frame: PlotDrawFrame;
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
}`,signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]},required:!0}}]}}]}],required:!0}}]}}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}`,signature:{properties:[{key:"ctrlKey",value:{name:"boolean",required:!0}},{key:"altKey",value:{name:"boolean",required:!0}},{key:"shiftKey",value:{name:"boolean",required:!0}},{key:"metaKey",value:{name:"boolean",required:!0}}]},required:!0}}]}},{name:"signature",type:"object",raw:`{
  pointer: InteractionsEventPointerPosition | null;
}`,signature:{properties:[{key:"pointer",value:{name:"union",raw:"InteractionsEventPointerPosition | null",elements:[{name:"signature",type:"object",raw:`{
  cssX: number;
  cssY: number;
  scaled: Record<string, number>;
}`,signature:{properties:[{key:"cssX",value:{name:"number",required:!0}},{key:"cssY",value:{name:"number",required:!0}},{key:"scaled",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]}},{name:"null"}],required:!0}}]}}]},name:"moveEvent"}],return:{name:"string"}}},description:""}}};export{p as C};
