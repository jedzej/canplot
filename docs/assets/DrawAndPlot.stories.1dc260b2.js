var r=Object.defineProperty;var t=(n,e)=>r(n,"name",{value:e,configurable:!0});import{s}from"./main.es.f2907810.js";import{a,E as i}from"./helpers.050e3ebf.js";import{j as d}from"./jsx-runtime.0836a264.js";import"./iframe.608be9a8.js";const I={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { linePlotter } from "@canplot/core";
import { animationLoop, EmbeddedPlot } from "./helpers";

export default {
  title: "Draw and Plot",
  args: {
    dimensions: { height: 400 },
    plugins: [
      {
        hooks: {
          onInit: ({ plot }) =>
            animationLoop(() => {
              plot.update((plot) => {
                plot.series[0].y = new Array(plot.series[0].x.length)
                  .fill(0)
                  .map(
                    (_, y) => 5 + Math.sin(y / 10 + performance.now() / 100)
                  );
                plot.series[1].y = new Array(plot.series[1].x.length)
                  .fill(0)
                  .map(
                    (_, y) => 2 + Math.cos(y / 10 + performance.now() / 100)
                  );
                return plot;
              });
            }),
        },
      },
    ],

    padding: 10,
    axes: [
      { scaleId: "x-1" },
      { scaleId: "x-1", position: "secondary" },
      { scaleId: "x-1", position: "secondary" },
      {
        scaleId: "y-1",
        style: { fillStyle: "red", strokeStyle: "red" },
      },
      {
        scaleId: "y-1",
        style: { fillStyle: "red", strokeStyle: "red" },
        tickSize: 20,
      },
      { scaleId: "y-1" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
      { scaleId: "y-1", position: "secondary" },
    ],
    scales: [{ id: "x-1" }, { id: "y-1" }],
    series: [
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "blue" } }),
        x: new Array(1000).fill(0).map((_, i) => i / 10),
        y: [],
      },
      {
        xScaleId: "x-1",
        yScaleId: "y-1",
        plotter: linePlotter({ style: { strokeStyle: "red" } }),
        x: new Array(100).fill(0).map((_, i) => i),
        y: [],
      },
    ],
  },
} as ComponentMeta<typeof EmbeddedPlot>;

const Template: ComponentStory<typeof EmbeddedPlot> = ({ ...args }) => (
  <EmbeddedPlot {...args} />
);

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:54,line:73},endLoc:{col:1,line:75},startBody:{col:54,line:73},endBody:{col:1,line:75}}}}},title:"Draw and Plot",args:{dimensions:{height:400},plugins:[{hooks:{onInit:({plot:n})=>a(()=>{n.update(e=>(e.series[0].y=new Array(e.series[0].x.length).fill(0).map((l,o)=>5+Math.sin(o/10+performance.now()/100)),e.series[1].y=new Array(e.series[1].x.length).fill(0).map((l,o)=>2+Math.cos(o/10+performance.now()/100)),e))})}}],padding:10,axes:[{scaleId:"x-1"},{scaleId:"x-1",position:"secondary"},{scaleId:"x-1",position:"secondary"},{scaleId:"y-1",style:{fillStyle:"red",strokeStyle:"red"}},{scaleId:"y-1",style:{fillStyle:"red",strokeStyle:"red"},tickSize:20},{scaleId:"y-1"},{scaleId:"y-1",position:"secondary"},{scaleId:"y-1",position:"secondary"},{scaleId:"y-1",position:"secondary"},{scaleId:"y-1",position:"secondary"}],scales:[{id:"x-1"},{id:"y-1"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:s({style:{strokeStyle:"blue"}}),x:new Array(1e3).fill(0).map((n,e)=>e/10),y:[]},{xScaleId:"x-1",yScaleId:"y-1",plotter:s({style:{strokeStyle:"red"}}),x:new Array(100).fill(0).map((n,e)=>e),y:[]}]}},y=t(({...n})=>d(i,{...n}),"Template"),S=y.bind({}),u=["Default"];export{S as Default,u as __namedExportsOrder,I as default};
//# sourceMappingURL=DrawAndPlot.stories.1dc260b2.js.map
