var i=Object.defineProperty;var l=(o,n)=>i(o,"name",{value:n,configurable:!0});import{r,j as a}from"./jsx-runtime.0836a264.js";import{v as c,s,h as p}from"./main.es.f2907810.js";import"./iframe.608be9a8.js";const m={parameters:{storySource:{source:`import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter, makeCursorPlugin } from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Cursor",
} as Meta;

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  usePlot(
    {
      dimensions: { height: 400 },
      canvasRef: ref,
      plugins: [
        makeCursorPlugin({
          onHover: (event) => {
            const tooltip = document.getElementById("tooltip")!;
            tooltip.style.pointerEvents = "none";
            tooltip.style.userSelect = "none";

            tooltip.innerHTML = JSON.stringify(event.position, null, 2);
            if (event.position) {
              tooltip.style.display = "block";
              tooltip.style.left = \`\${event.position.screen.x}px\`;
              tooltip.style.top = \`\${event.position.screen.y}px\`;
            } else {
              tooltip.style.display = "none";
            }
          },
          onClick: (event) => {
            event.plot.update((old) => ({
              ...old,
              facets: [
                ...(old.facets ?? []),
                {
                  type: "v-line",
                  scaleId: "x-1",
                  x: event.position.scaled["x-1"],
                  style: { strokeStyle: "#ff000099" },
                },
              ],
            }));
          },
          onDblClick: (event) => {
            event.plot.update((old) => ({
              ...old,
              facets: [
                ...(old.facets ?? []),
                {
                  type: "h-line",
                  scaleId: "y-1",
                  y: event.position.scaled["y-1"],
                  style: { strokeStyle: "#00444499" },
                },
              ],
            }));
          },
        }),
      ],
    },
    () => {
      return {
        padding: 10,
        scales: [{ id: "x-1" }, { id: "y-1" }, { id: "y-2" }],
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }, { scaleId: "y-2" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter(),
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
          {
            xScaleId: "x-1",
            yScaleId: "y-2",
            plotter: linePlotter({
              style: { strokeStyle: "red" },
            }),
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      };
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:24,line:10},endLoc:{col:1,line:93},startBody:{col:24,line:10},endBody:{col:1,line:93}}}}},title:"Cursor"},y=l(()=>{const o=r.exports.useRef(null);return c({dimensions:{height:400},canvasRef:o,plugins:[p({onHover:n=>{const e=document.getElementById("tooltip");e.style.pointerEvents="none",e.style.userSelect="none",e.innerHTML=JSON.stringify(n.position,null,2),n.position?(e.style.display="block",e.style.left=`${n.position.screen.x}px`,e.style.top=`${n.position.screen.y}px`):e.style.display="none"},onClick:n=>{n.plot.update(e=>{var t;return{...e,facets:[...(t=e.facets)!=null?t:[],{type:"v-line",scaleId:"x-1",x:n.position.scaled["x-1"],style:{strokeStyle:"#ff000099"}}]}})},onDblClick:n=>{n.plot.update(e=>{var t;return{...e,facets:[...(t=e.facets)!=null?t:[],{type:"h-line",scaleId:"y-1",y:n.position.scaled["y-1"],style:{strokeStyle:"#00444499"}}]}})}})]},()=>({padding:10,scales:[{id:"x-1"},{id:"y-1"},{id:"y-2"}],axes:[{scaleId:"x-1"},{scaleId:"y-1"},{scaleId:"y-2"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:s(),x:[0,1,2,3,4,5,6,7,8,9,10],y:[0,1,2,3,4,5,6,7,8,9,10]},{xScaleId:"x-1",yScaleId:"y-2",plotter:s({style:{strokeStyle:"red"}}),x:[0,1,2,3,4,5,6,7,8,9,10],y:[0,1,2,3,4,5,6,7,8,9,10]}]}),[]),a("canvas",{ref:o})},"Template"),S=y.bind({}),I=["Default"];export{S as Default,I as __namedExportsOrder,m as default};
//# sourceMappingURL=Cursor.stories.9ceb0826.js.map
