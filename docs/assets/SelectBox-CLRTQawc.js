import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-CpxcZYpa.js";import{u as g}from"./ChartAreaInteractions-BW7_z-LO.js";import{c as i,a as l}from"./CanPlot-tc9inbpQ.js";const k=({makeClassName:m,makeStyle:o})=>{const[e,s]=v.useState(null);if(g("spanselect",r=>{s(r.mode==="none"||r.completed?null:r)}),!e)return null;const n=i(e.frame,e.x.fromCSS,"css"),a=i(e.frame,e.x.toCSS,"css"),t=l(e.frame,e.y.fromCSS,"css"),u=l(e.frame,e.y.toCSS,"css"),y=Math.min(n,a),c=Math.min(t,u),b=Math.abs(a-n),d=Math.abs(u-t);return p.jsx("div",{className:m?.(e),style:{position:"absolute",backgroundColor:"#0000ff22",left:`${y}px`,top:`${c}px`,width:`${b}px`,height:`${d}px`,pointerEvents:"none",...o?.(e)}})};k.__docgenInfo={description:"",methods:[],displayName:"SelectBox",props:{makeClassName:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectState: SpanSelectEvent) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"mode",value:{name:"union",raw:'"x" | "y" | "box" | "none"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"box"'},{name:"literal",value:'"none"'}],required:!0}},{key:"x",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"axis",value:{name:"union",raw:"null | (PlotAxisTime & { cssRect: Rect; canvasRect: Rect })",elements:[{name:"null"},{name:"unknown"}],required:!0}}]}}]}]}],raw:"PlotDrawScaleConfig[]",required:!0}}]},required:!0}},{key:"mode",value:{name:"union",raw:'"x" | "y" | "box" | "none"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"box"'},{name:"literal",value:'"none"'}],required:!0}},{key:"x",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"ctrlKey",value:{name:"boolean",required:!0}},{key:"altKey",value:{name:"boolean",required:!0}},{key:"shiftKey",value:{name:"boolean",required:!0}},{key:"metaKey",value:{name:"boolean",required:!0}}]},required:!0}}]}},name:"selectState"}],return:{name:"union",raw:"React.CSSProperties | undefined",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"undefined"}]}}},description:""}}};export{k as S};
