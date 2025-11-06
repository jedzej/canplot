import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./iframe-DBFxp1zn.js";import{u as b}from"./ChartAreaInteractions-Dy8lSLyi.js";import{c as d,a as v}from"./CanPlot-CaMx_syv.js";const p=({makeXStyle:t,makeXClassName:u,makeYStyle:i,makeYClassName:l})=>{const[e,m]=y.useState(null);if(b("move",c=>{m(c)}),!e)return null;const{frame:n,pointer:r}=e,s=d(n,r?.cssX??0,"css"),o=v(n,r?.cssY??0,"css");return a.jsxs(a.Fragment,{children:[a.jsx("div",{"data-show":!!r,className:u?.(e),style:{position:"absolute",left:0,top:n.chartAreaCSS.y,height:n.chartAreaCSS.height,borderColor:"red",borderLeftWidth:"1px",borderLeftStyle:"solid",pointerEvents:"none",opacity:r?1:0,transform:`translateX(${s}px)`,...t?.(e)}}),a.jsx("div",{className:l?.(e),"data-show":!!r,style:{position:"absolute",top:0,height:0,borderTop:"solid 1px red",left:n.chartAreaCSS.x,width:n.chartAreaCSS.width,pointerEvents:"none",opacity:r?1:0,transform:`translateY(${o}px)`,...i?.(e)}})]})};p.__docgenInfo={description:"",methods:[],displayName:"Crosshair",props:{makeXStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"(moveEvent: MoveEvent) => React.CSSProperties | undefined",signature:{arguments:[{type:{name:"intersection",raw:`InteractionsEvent & {
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
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}}]},required:!0}},{key:"scales",value:{name:"Array",elements:[{name:"union",raw:`| PlotDrawScaleLinearConfig
| PlotDrawScaleTimeConfig`,elements:[{name:"intersection",raw:`PlotScaleLinearConfig & {
  axis: null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect });
}`,elements:[{name:"signature",type:"object",raw:`{
  type: "linear";
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxisLinear;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"linear"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxisLinear",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"tickSpace",value:{name:"number",required:!1}}]}}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  axis: null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect });
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]},{name:"intersection",raw:`PlotScaleTimeConfig & {
  axis: null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect });
}`,elements:[{name:"signature",type:"object",raw:`{
  type: "time";
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxisTime;
  timeZone: string;
  locale?: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"time"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxisTime",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
  showTimezone?: boolean;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"tickSpace",value:{name:"number",required:!1}},{key:"showTimezone",value:{name:"boolean",required:!1}}]}}],required:!0}},{key:"timeZone",value:{name:"string",required:!0}},{key:"locale",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  axis: null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect });
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}}]},required:!0}},{key:"scales",value:{name:"Array",elements:[{name:"union",raw:`| PlotDrawScaleLinearConfig
| PlotDrawScaleTimeConfig`,elements:[{name:"intersection",raw:`PlotScaleLinearConfig & {
  axis: null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect });
}`,elements:[{name:"signature",type:"object",raw:`{
  type: "linear";
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxisLinear;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"linear"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxisLinear",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"tickSpace",value:{name:"number",required:!1}}]}}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  axis: null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect });
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]},{name:"intersection",raw:`PlotScaleTimeConfig & {
  axis: null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect });
}`,elements:[{name:"signature",type:"object",raw:`{
  type: "time";
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxisTime;
  timeZone: string;
  locale?: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"time"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxisTime",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
  showTimezone?: boolean;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"tickSpace",value:{name:"number",required:!1}},{key:"showTimezone",value:{name:"boolean",required:!1}}]}}],required:!0}},{key:"timeZone",value:{name:"string",required:!0}},{key:"locale",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  axis: null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect });
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}}]},required:!0}},{key:"scales",value:{name:"Array",elements:[{name:"union",raw:`| PlotDrawScaleLinearConfig
| PlotDrawScaleTimeConfig`,elements:[{name:"intersection",raw:`PlotScaleLinearConfig & {
  axis: null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect });
}`,elements:[{name:"signature",type:"object",raw:`{
  type: "linear";
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxisLinear;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"linear"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxisLinear",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"tickSpace",value:{name:"number",required:!1}}]}}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  axis: null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect });
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]},{name:"intersection",raw:`PlotScaleTimeConfig & {
  axis: null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect });
}`,elements:[{name:"signature",type:"object",raw:`{
  type: "time";
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxisTime;
  timeZone: string;
  locale?: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"time"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxisTime",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
  showTimezone?: boolean;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"tickSpace",value:{name:"number",required:!1}},{key:"showTimezone",value:{name:"boolean",required:!1}}]}}],required:!0}},{key:"timeZone",value:{name:"string",required:!0}},{key:"locale",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  axis: null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect });
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}}]},required:!0}},{key:"scales",value:{name:"Array",elements:[{name:"union",raw:`| PlotDrawScaleLinearConfig
| PlotDrawScaleTimeConfig`,elements:[{name:"intersection",raw:`PlotScaleLinearConfig & {
  axis: null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect });
}`,elements:[{name:"signature",type:"object",raw:`{
  type: "linear";
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxisLinear;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"linear"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxisLinear",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"tickSpace",value:{name:"number",required:!1}}]}}],required:!0}}]}},{name:"signature",type:"object",raw:`{
  axis: null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect });
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisLinear & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]},{name:"intersection",raw:`PlotScaleTimeConfig & {
  axis: null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect });
}`,elements:[{name:"signature",type:"object",raw:`{
  type: "time";
  id: string;
  min: number;
  max: number;
  origin: "x" | "y";
  axis: null | PlotAxisTime;
  timeZone: string;
  locale?: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"time"',required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"min",value:{name:"number",required:!0}},{key:"max",value:{name:"number",required:!0}},{key:"origin",value:{name:"union",raw:'"x" | "y"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'}],required:!0}},{key:"axis",value:{name:"union",raw:"null | PlotAxisTime",elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  position: "left" | "right" | "top" | "bottom";
  size: number;
  tickSpace?: number;
  showTimezone?: boolean;
}`,signature:{properties:[{key:"position",value:{name:"union",raw:'"left" | "right" | "top" | "bottom"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}],required:!0}},{key:"size",value:{name:"number",required:!0}},{key:"tickSpace",value:{name:"number",required:!1}},{key:"showTimezone",value:{name:"boolean",required:!1}}]}}],required:!0}},{key:"timeZone",value:{name:"string",required:!0}},{key:"locale",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  axis: null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect });
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"keys",value:{name:"signature",type:"object",raw:`{
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
