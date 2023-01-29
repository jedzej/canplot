var s=Object.defineProperty;var n=(e,t)=>s(e,"name",{value:t,configurable:!0});import{r as o,j as a}from"./jsx-runtime.0836a264.js";import{v as r,s as l}from"./main.es.f2907810.js";import"./iframe.608be9a8.js";const f={parameters:{storySource:{source:`import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter } from "@canplot/core";
import { usePlot } from "@canplot/react";
import { animationLoop } from "./helpers";

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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:1,line:43},startBody:{col:24,line:11},endBody:{col:1,line:43}}}}},title:"Line with gaps"},i=n(()=>{const e=o.exports.useRef(null);return r({dimensions:{height:400},canvasRef:e},()=>({axes:[{scaleId:"x-1"},{scaleId:"y-1"}],scales:[{id:"x-1"},{id:"y-1"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:l({gapDistance:1,style:{strokeStyle:"blue"}}),x:[0,1,2,3,5,6,7,12,13,17],y:[0,1,2,3,5,6,7,12,13,17]}]}),[]),a("canvas",{ref:e})},"Template"),u=i.bind({}),y=["Default"];export{u as Default,y as __namedExportsOrder,f as default};
//# sourceMappingURL=LineWithGaps.stories.961b9673.js.map
