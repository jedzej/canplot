import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CanPlot-DVC1qZKh.js";import{L as a}from"./LinePlot-CIk7Jw4X.js";import{S}from"./ScatterPlot-Dwv4ocoC.js";import{C as o}from"./ChartAreaInteractions-B6TFcj4d.js";import{C as r}from"./CrossHair-CjdBJ5eZ.js";import{S as l}from"./SelectBox-jJq3WkBF.js";import"./iframe-DpcP5qQz.js";import"./preload-helper-PPVm8Dsz.js";const z={title:"CanPlot/LinePlot",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"]},y={render:()=>{const t=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:n.jsx(a,{data:Array.from({length:20},(i,e)=>({x:e*5,y:50+Math.sin(e/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"blue",lineWidth:2}})})})}},c={render:()=>{const t=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsxs(o,{sync:{key:"line",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(r,{}),n.jsx(l,{style:{backgroundColor:"#4499ff44"}})]}),n.jsx(a,{data:Array.from({length:50},(i,e)=>({x:e*2,y:50+Math.sin(e/5)*25+Math.cos(e/3)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:3}})]})})}},x={render:()=>{const t=Date.parse("2025-11-01T12:00:00Z"),i=[{id:"t",type:"time",timeZone:"UTC",axis:{position:"bottom",size:50},origin:"x",min:t-1e3*60*60*24*7,max:t},{id:"y",type:"linear",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(o,{sync:{key:"timeseries-line",xViaScaleId:"t",yViaScaleId:"y"},children:[n.jsx(r,{}),n.jsx(l,{style:{backgroundColor:"#51cf6644"}})]}),n.jsx(a,{data:Array.from({length:100},(e,d)=>({x:t-1e3*60*60*24*7+d*1e3*60*60*24*7/100,y:50+Math.sin(d/10)*20+Math.random()*10})),xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}})]})})}},h={render:()=>{const t=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsxs(o,{sync:{key:"multi-line",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(r,{}),n.jsx(l,{style:{backgroundColor:"#ffd43b44"}})]}),n.jsx(a,{data:Array.from({length:50},(i,e)=>({x:e*2,y:30+Math.sin(e/5)*20})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:2}}),n.jsx(a,{data:Array.from({length:50},(i,e)=>({x:e*2,y:50+Math.cos(e/6)*25})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}}),n.jsx(a,{data:Array.from({length:50},(i,e)=>({x:e*2,y:70+Math.sin(e/4)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})})}},p={render:()=>{const t=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsxs(o,{sync:{key:"styles",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(r,{}),n.jsx(l,{style:{backgroundColor:"#9f7aea44"}})]}),n.jsx(a,{data:Array.from({length:50},(i,e)=>({x:e*2,y:25+Math.sin(e/5)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:1}}),n.jsx(a,{data:Array.from({length:50},(i,e)=>({x:e*2,y:50+Math.cos(e/6)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:3}}),n.jsx(a,{data:Array.from({length:50},(i,e)=>({x:e*2,y:75+Math.sin(e/4)*10})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:5}})]})})}},m={render:()=>{const t=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=Array.from({length:20},(e,d)=>({x:d*5,y:50+Math.sin(d/2)*30}));return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsxs(o,{sync:{key:"line-points",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(r,{}),n.jsx(l,{style:{backgroundColor:"#ed893644"}})]}),n.jsx(a,{data:i,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#e67700",lineWidth:2}}),n.jsx(S,{data:i,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#fab005",strokeStyle:"#e67700",lineWidth:2}})]})})}},g={render:()=>{const t=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:-50,max:50}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsxs(o,{sync:{key:"smooth",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(r,{}),n.jsx(l,{style:{backgroundColor:"#f0639744"}})]}),n.jsx(a,{data:Array.from({length:100},(i,e)=>({x:e,y:Math.sin(e/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#f06397",lineWidth:2}}),n.jsx(a,{data:Array.from({length:100},(i,e)=>({x:e,y:Math.cos(e/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})})}},f={render:()=>{const t=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y1",type:"linear",axis:{position:"left",size:50},origin:"y",min:0,max:100},{id:"y2",type:"linear",axis:{position:"right",size:50},origin:"y",min:-1e3,max:1e3}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsxs(o,{sync:{key:"dual-line",xViaScaleId:"x",yViaScaleId:"y1"},children:[n.jsx(r,{}),n.jsx(l,{style:{backgroundColor:"#4499ff22"}})]}),n.jsx(a,{data:Array.from({length:50},(i,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),xScaleId:"x",yScaleId:"y1",style:{strokeStyle:"#ff6b6b",lineWidth:2}}),n.jsx(a,{data:Array.from({length:50},(i,e)=>({x:e*2,y:Math.cos(e/6)*800})),xScaleId:"x",yScaleId:"y2",style:{strokeStyle:"#51cf66",lineWidth:2}})]})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      type: "linear",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <LinePlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: 50 + Math.sin(i / 2) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "blue",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      type: "linear",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "line",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox style={{
            backgroundColor: "#4499ff44"
          }} />
          </ChartAreaInteractions>

          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 25 + Math.cos(i / 3) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 3
        }} />
        </CanPlot>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const refPoint = Date.parse("2025-11-01T12:00:00Z");
    const scales: PlotScaleConfig[] = [{
      id: "t",
      type: "time",
      timeZone: "UTC",
      axis: {
        position: "bottom",
        size: 50
      },
      origin: "x",
      min: refPoint - 1000 * 60 * 60 * 24 * 7,
      // 7 days ago
      max: refPoint
    }, {
      id: "y",
      type: "linear",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "timeseries-line",
          xViaScaleId: "t",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox style={{
            backgroundColor: "#51cf6644"
          }} />
          </ChartAreaInteractions>

          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: refPoint - 1000 * 60 * 60 * 24 * 7 + i * 1000 * 60 * 60 * 24 * 7 / 100,
          y: 50 + Math.sin(i / 10) * 20 + Math.random() * 10
        }))} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      type: "linear",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "multi-line",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox style={{
            backgroundColor: "#ffd43b44"
          }} />
          </ChartAreaInteractions>

          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 30 + Math.sin(i / 5) * 20
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />

          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 6) * 25
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />

          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 70 + Math.sin(i / 4) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      type: "linear",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "styles",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox style={{
            backgroundColor: "#9f7aea44"
          }} />
          </ChartAreaInteractions>

          {/* Thin line */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 25 + Math.sin(i / 5) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 1
        }} />

          {/* Medium line */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 6) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 3
        }} />

          {/* Thick line */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 75 + Math.sin(i / 4) * 10
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 5
        }} />
        </CanPlot>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      type: "linear",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const data = Array.from({
      length: 20
    }, (_, i) => ({
      x: i * 5,
      y: 50 + Math.sin(i / 2) * 30
    }));
    return <div style={{
      padding: "20px"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "line-points",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox style={{
            backgroundColor: "#ed893644"
          }} />
          </ChartAreaInteractions>

          {/* Line */}
          <LinePlot data={data} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#e67700",
          lineWidth: 2
        }} />

          {/* Points */}
          <ScatterPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#fab005",
          strokeStyle: "#e67700",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      type: "linear",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: -50,
      max: 50
    }];
    return <div style={{
      padding: "20px"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "smooth",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox style={{
            backgroundColor: "#f0639744"
          }} />
          </ChartAreaInteractions>

          {/* Sine wave */}
          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: i,
          y: Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#f06397",
          lineWidth: 2
        }} />

          {/* Cosine wave */}
          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: i,
          y: Math.cos(i / 5) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      type: "linear",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 0,
      max: 100
    }, {
      id: "y2",
      type: "linear",
      axis: {
        position: "right",
        size: 50
      },
      origin: "y",
      min: -1000,
      max: 1000
    }];
    return <div style={{
      padding: "20px"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <ChartAreaInteractions sync={{
          key: "dual-line",
          xViaScaleId: "x",
          yViaScaleId: "y1"
        }}>
            <Crosshair />
            <SelectBox style={{
            backgroundColor: "#4499ff22"
          }} />
          </ChartAreaInteractions>

          {/* Line on left Y-axis */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y1" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />

          {/* Line on right Y-axis */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: Math.cos(i / 6) * 800
        }))} xScaleId="x" yScaleId="y2" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const W=["Basic","WithInteractions","TimeSeries","MultipleLines","DifferentStyles","LineWithPoints","SmoothCurves","DualYAxis"];export{y as Basic,p as DifferentStyles,f as DualYAxis,m as LineWithPoints,h as MultipleLines,g as SmoothCurves,x as TimeSeries,c as WithInteractions,W as __namedExportsOrder,z as default};
