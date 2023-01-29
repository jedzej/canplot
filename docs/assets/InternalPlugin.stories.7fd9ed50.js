var l=Object.defineProperty;var o=(n,e)=>l(n,"name",{value:e,configurable:!0});import{r as i,j as c}from"./jsx-runtime.0836a264.js";import{v as u,s as p,h as d}from"./main.es.f2907810.js";import"./iframe.608be9a8.js";const h={parameters:{storySource:{source:`import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react";
import { linePlotter, makeCursorPlugin, Facet } from "@canplot/core";
import { usePlot } from "@canplot/react";

export default {
  title: "Plugins/InternalPlugin",
} as Meta;

const useHoverPlugin = () => {
  const plugin = makeCursorPlugin({
    onHover: (e) => {
      const facetsMap: Record<string, Facet> = Object.fromEntries(
        e.frame.inputParams.facets?.map((facet) => [facet.id, facet]) ?? []
      );
      if (!e.position) {
        delete facetsMap["hover-x"];
        delete facetsMap["hover-y"];
      } else {
        facetsMap["hover-x"] = {
          type: "v-line",
          id: "hover-x",
          scaleId: "x-1",
          x: e.position.scaled["x-1"],
        };
        facetsMap["hover-y"] = {
          type: "h-line",
          id: "hover-y",
          scaleId: "y-1",
          y: e.position.scaled["y-1"],
        };
      }
      e.plot.update((old) => {
        old.facets = Object.values(facetsMap);
        return old;
      });
    },
  });
  return plugin;
};

const Template: Story = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const hoverPlugin = useHoverPlugin();

  usePlot(
    {
      dimensions: { height: 400 },
      plugins: [hoverPlugin],
      canvasRef: ref,
    },
    () => {
      return {
        padding: 20,
        axes: [{ scaleId: "x-1" }, { scaleId: "y-1" }],
        scales: [{ id: "x-1" }, { id: "y-1" }],
        series: [
          {
            xScaleId: "x-1",
            yScaleId: "y-1",
            plotter: linePlotter({ style: { strokeStyle: "blue" } }),
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          },
        ],
      };
    },
    []
  );

  return <canvas ref={ref} />;
};

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:24,line:42},endLoc:{col:1,line:73},startBody:{col:24,line:42},endBody:{col:1,line:73}}}}},title:"Plugins/InternalPlugin"},f=o(()=>d({onHover:e=>{var r,a;const t=Object.fromEntries((a=(r=e.frame.inputParams.facets)==null?void 0:r.map(s=>[s.id,s]))!=null?a:[]);e.position?(t["hover-x"]={type:"v-line",id:"hover-x",scaleId:"x-1",x:e.position.scaled["x-1"]},t["hover-y"]={type:"h-line",id:"hover-y",scaleId:"y-1",y:e.position.scaled["y-1"]}):(delete t["hover-x"],delete t["hover-y"]),e.plot.update(s=>(s.facets=Object.values(t),s))}}),"useHoverPlugin"),y=o(()=>{const n=i.exports.useRef(null),e=f();return u({dimensions:{height:400},plugins:[e],canvasRef:n},()=>({padding:20,axes:[{scaleId:"x-1"},{scaleId:"y-1"}],scales:[{id:"x-1"},{id:"y-1"}],series:[{xScaleId:"x-1",yScaleId:"y-1",plotter:p({style:{strokeStyle:"blue"}}),x:[1,2,3,4,5,6,7,8,9,10],y:[1,2,3,4,5,6,7,8,9,10]}]}),[]),c("canvas",{ref:n})},"Template"),P=y.bind({}),I=["Default"];export{P as Default,I as __namedExportsOrder,h as default};
//# sourceMappingURL=InternalPlugin.stories.7fd9ed50.js.map
