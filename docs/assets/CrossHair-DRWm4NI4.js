import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./iframe-BgZoRfvH.js";import{u as k}from"./ChartAreaInteractions-DhRCyT_F.js";import{e as p,f as c}from"./frameContext-Co5DpICG.js";const S=({makeXStyle:l,makeXClassName:u,makeYStyle:s,makeYClassName:m})=>{const[e,o]=b.useState(null);if(k("move",d=>{o(d)}),!e)return null;const{frame:n,pointer:r}=e,a=r?.cssX??null,i=r?.cssY??null,y=a?p(n,a,"css"):0,v=i?c(n,i,"css"):0;return t.jsxs(t.Fragment,{children:[t.jsx("div",{"data-show":!!r,className:u?.(e),style:{position:"absolute",left:0,visibility:a===null?"hidden":"visible",top:n.chartAreaCSS.y,height:n.chartAreaCSS.height,borderColor:"red",borderLeftWidth:"1px",borderLeftStyle:"solid",pointerEvents:"none",opacity:r?1:0,transform:`translateX(${y}px)`,...l?.(e)}}),t.jsx("div",{className:m?.(e),"data-show":!!r,style:{position:"absolute",visibility:i===null?"hidden":"visible",top:0,height:0,borderTop:"solid 1px red",left:n.chartAreaCSS.x,width:n.chartAreaCSS.width,pointerEvents:"none",opacity:r?1:0,transform:`translateY(${v}px)`,...s?.(e)}})]})};S.__docgenInfo={description:"",methods:[],displayName:"Crosshair",props:{makeXStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"(moveEvent: MoveEvent) => React.CSSProperties | undefined",signature:{arguments:[{type:{name:"intersection",raw:`InteractionsEvent & {
  pointer: InteractionsEventPointerPosition | null;
  source: "own" | "sync";
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
  source: "own" | "sync";
}`,signature:{properties:[{key:"pointer",value:{name:"union",raw:"InteractionsEventPointerPosition | null",elements:[{name:"signature",type:"object",raw:`{
  cssX: number | null;
  cssY: number | null;
  scaled: Record<string, number>;
}`,signature:{properties:[{key:"cssX",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"cssY",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"scaled",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]}},{name:"null"}],required:!0}},{key:"source",value:{name:"union",raw:'"own" | "sync"',elements:[{name:"literal",value:'"own"'},{name:"literal",value:'"sync"'}],required:!0}}]}}]},name:"moveEvent"}],return:{name:"union",raw:"React.CSSProperties | undefined",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"undefined"}]}}},description:""},makeXClassName:{required:!1,tsType:{name:"signature",type:"function",raw:"(moveEvent: MoveEvent) => string",signature:{arguments:[{type:{name:"intersection",raw:`InteractionsEvent & {
  pointer: InteractionsEventPointerPosition | null;
  source: "own" | "sync";
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
  source: "own" | "sync";
}`,signature:{properties:[{key:"pointer",value:{name:"union",raw:"InteractionsEventPointerPosition | null",elements:[{name:"signature",type:"object",raw:`{
  cssX: number | null;
  cssY: number | null;
  scaled: Record<string, number>;
}`,signature:{properties:[{key:"cssX",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"cssY",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"scaled",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]}},{name:"null"}],required:!0}},{key:"source",value:{name:"union",raw:'"own" | "sync"',elements:[{name:"literal",value:'"own"'},{name:"literal",value:'"sync"'}],required:!0}}]}}]},name:"moveEvent"}],return:{name:"string"}}},description:""},makeYStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"(moveEvent: MoveEvent) => React.CSSProperties | undefined",signature:{arguments:[{type:{name:"intersection",raw:`InteractionsEvent & {
  pointer: InteractionsEventPointerPosition | null;
  source: "own" | "sync";
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
  source: "own" | "sync";
}`,signature:{properties:[{key:"pointer",value:{name:"union",raw:"InteractionsEventPointerPosition | null",elements:[{name:"signature",type:"object",raw:`{
  cssX: number | null;
  cssY: number | null;
  scaled: Record<string, number>;
}`,signature:{properties:[{key:"cssX",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"cssY",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"scaled",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]}},{name:"null"}],required:!0}},{key:"source",value:{name:"union",raw:'"own" | "sync"',elements:[{name:"literal",value:'"own"'},{name:"literal",value:'"sync"'}],required:!0}}]}}]},name:"moveEvent"}],return:{name:"union",raw:"React.CSSProperties | undefined",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"undefined"}]}}},description:""},makeYClassName:{required:!1,tsType:{name:"signature",type:"function",raw:"(moveEvent: MoveEvent) => string",signature:{arguments:[{type:{name:"intersection",raw:`InteractionsEvent & {
  pointer: InteractionsEventPointerPosition | null;
  source: "own" | "sync";
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
  source: "own" | "sync";
}`,signature:{properties:[{key:"pointer",value:{name:"union",raw:"InteractionsEventPointerPosition | null",elements:[{name:"signature",type:"object",raw:`{
  cssX: number | null;
  cssY: number | null;
  scaled: Record<string, number>;
}`,signature:{properties:[{key:"cssX",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"cssY",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"scaled",value:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>",required:!0}}]}},{name:"null"}],required:!0}},{key:"source",value:{name:"union",raw:'"own" | "sync"',elements:[{name:"literal",value:'"own"'},{name:"literal",value:'"sync"'}],required:!0}}]}}]},name:"moveEvent"}],return:{name:"string"}}},description:""}}};export{S as C};
