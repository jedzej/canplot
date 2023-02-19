var s=Object.defineProperty;var n=(e,t)=>s(e,"name",{value:t,configurable:!0});import{r as a,j as o}from"./jsx-runtime.3513c91a.js";import{v as r,d as l}from"./main.es.62385bb5.js";import"./iframe.0cbb6995.js";const m={parameters:{storySource:{source:`import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter } from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Line with gaps",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
      dimensions: {
        height: 400,
      },
      canvasRef: ref,
    },
    () => {
      return {
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
        scales: [{ id: "x-1" }, { id: "y-1" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({
              gapDistance: 1,
              style: { strokeStyle: "blue" },
            }),
            x: [0, 1, 2, 3, 5, 6, 7, 12, 13, 17],
            y: [0, 1, 2, 3, 5, 6, 7, 12, 13, 17],
          },
        ],
      };
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:24,line:10},endLoc:{col:1,line:42},startBody:{col:24,line:10},endBody:{col:1,line:42}}}}},title:"Line with gaps"},c=n(()=>{const e=a.exports.useRef(null);return r({dimensions:{height:400},canvasRef:e},()=>({axes:[{scaleId:"x-1"},{scaleId:"y-1"}],scales:[{id:"x-1"},{id:"y-1"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:l({gapDistance:1,style:{strokeStyle:"blue"}}),x:[0,1,2,3,5,6,7,12,13,17],y:[0,1,2,3,5,6,7,12,13,17]}]}),[]),o("canvas",{ref:e})},"Template"),u=c.bind({}),y=["Default"];export{u as Default,y as __namedExportsOrder,m as default};
//# sourceMappingURL=LineWithGaps.stories.65d54c43.js.map
