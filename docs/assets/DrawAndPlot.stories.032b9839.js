var u=Object.defineProperty;var o=(n,t)=>u(n,"name",{value:t,configurable:!0});import{r as f,a as S,F as g,j as l}from"./jsx-runtime.d8a1b41d.js";import{v as r,l as i,f as d}from"./main.es.32c8620a.js";import"./iframe.1e4fddc3.js";const E={parameters:{storySource:{source:`import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { linePlotter, makeCursorPlugin } from "@canplot/core";
import { EmbeddedPlot } from "./helpers";
import { usePlot } from "@canplot/react";

export default {
  title: "Draw and Plot",
  args: {},
} as ComponentMeta<typeof EmbeddedPlot>;

const Template: ComponentStory<typeof EmbeddedPlot> = () => {
  const [data, setData] = useState(() => ({
    x: [...Array(100).keys()],
    y: Array(100).fill(0),
  }));

  const [inputCanvasRef] = usePlot(
    {
      dimensions: {
        height: 400,
      },
      plugins: [
        makeCursorPlugin({
          onSpanSelect(event) {
            if (event.phase === "move") {
              const normalizedStart = Math.min(
                event.positionStart.scaled["x-1"],
                event.positionEnd.scaled["x-1"]
              );
              const normalizedEnd = Math.max(
                event.positionEnd.scaled["x-1"],
                event.positionStart.scaled["x-1"]
              );
              setData((data) => ({
                x: data.x,
                y: data.y.map((y, i) => {
                  if (i >= normalizedStart && i <= normalizedEnd) {
                    return event.positionEnd.scaled["y-1"];
                  }
                  return y;
                }),
              }));
            }
          },
        }),
      ],
    },
    () => ({
      padding: 20,
      axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
      scales: [
        { id: "x-1" },
        {
          id: "y-1",
          makeLimits: () => ({
            min: -1,
            max: 1,
          }),
        },
      ],
      series: [
        {
          xScaleId: "x-1",
          yScaleId: "y-1",
          plotter: linePlotter({ style: { strokeStyle: "blue" } }),
          x: data.x,
          y: data.y,
        },
      ],
    }),
    [data]
  );

  const [outputCanvasRef] = usePlot(
    {
      dimensions: {
        height: 400,
      },
      plugins: [makeCursorPlugin({})],
    },
    () => ({
      padding: 20,
      axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
      scales: [{ id: "x-1" }, { id: "y-1" }],
      series: [
        {
          xScaleId: "x-1",
          yScaleId: "y-1",
          plotter: linePlotter({ style: { strokeStyle: "blue" } }),
          x: data.x,
          y: data.y.map((y) => Math.sin(y * 2)),
        },
      ],
    }),
    [data]
  );

  return (
    <>
      <canvas ref={inputCanvasRef} />
      <canvas ref={outputCanvasRef} />
    </>
  );
};

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:54,line:12},endLoc:{col:1,line:105},startBody:{col:54,line:12},endBody:{col:1,line:105}}}}},title:"Draw and Plot",args:{}},h=o(()=>{const[n,t]=f.exports.useState(()=>({x:[...Array(100).keys()],y:Array(100).fill(0)})),[c]=r({dimensions:{height:400},plugins:[d({onSpanSelect(e){if(e.phase==="move"){const m=Math.min(e.positionStart.scaled["x-1"],e.positionEnd.scaled["x-1"]),y=Math.max(e.positionEnd.scaled["x-1"],e.positionStart.scaled["x-1"]);t(a=>({x:a.x,y:a.y.map((x,s)=>s>=m&&s<=y?e.positionEnd.scaled["y-1"]:x)}))}}})]},()=>({padding:20,axes:[{scaleId:"x-1"},{scaleId:"y-1"}],scales:[{id:"x-1"},{id:"y-1",makeLimits:()=>({min:-1,max:1})}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:i({style:{strokeStyle:"blue"}}),x:n.x,y:n.y}]}),[n]),[p]=r({dimensions:{height:400},plugins:[d({})]},()=>({padding:20,axes:[{scaleId:"x-1"},{scaleId:"y-1"}],scales:[{id:"x-1"},{id:"y-1"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:i({style:{strokeStyle:"blue"}}),x:n.x,y:n.y.map(e=>Math.sin(e*2))}]}),[n]);return S(g,{children:[l("canvas",{ref:c}),l("canvas",{ref:p})]})},"Template"),k=h.bind({}),b=["Default"];export{k as Default,b as __namedExportsOrder,E as default};
//# sourceMappingURL=DrawAndPlot.stories.032b9839.js.map
