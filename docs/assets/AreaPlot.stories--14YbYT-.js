import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as o}from"./frameContext-Co5DpICG.js";import{A as s}from"./AreaPlot-DdMalyv8.js";import{S as I}from"./ScatterPlot-B-k84BnW.js";import{C as c}from"./ChartAreaInteractions-DhRCyT_F.js";import{C as d}from"./CrossHair-DRWm4NI4.js";import{S as x}from"./SelectBox-D_45NMUi.js";import{X as u,m as f,Y as k,a as b}from"./tickUtils-DbkACvDW.js";import"./LinePlot-Bt3M9b_t.js";import"./BarPlot-B0AqmXVl.js";import"./SparklinePlot-B-OBKmMX.js";import"./iframe-BgZoRfvH.js";import"./AxisOverlay-Ct-r-3iT.js";import"./preload-helper-PPVm8Dsz.js";const X={component:o,parameters:{layout:"fullscreen"},tags:["autodocs"]},y={render:()=>{const a=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsx(s,{data:Array.from({length:50},(i,e)=>({x:e*2,y:[30+Math.sin(e/5)*15,70+Math.sin(e/5)*15]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(66, 153, 225, 0.5)"}}),n.jsx(u,{scaleId:"x",ticks:f()}),n.jsx(k,{scaleId:"y",ticks:f()})]})})}},m={render:()=>{const a=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsxs(c,{sync:{key:"area",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(d,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#4299e144"})})]}),n.jsx(s,{data:Array.from({length:60},(i,e)=>{const t=e*1.67,r=50+Math.sin(e/8)*20,l=15+Math.cos(e/10)*10;return{x:t,y:[r-l,r+l]}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(72, 187, 120, 0.6)"}})]})})}},g={render:()=>{const a=Date.parse("2025-11-01T12:00:00Z"),i=[{id:"t",axis:{position:"bottom",size:50},origin:"x",min:a-1e3*60*60*24*7,max:a},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(c,{sync:{key:"timeseries-area",xViaScaleId:"t",yViaScaleId:"y"},children:[n.jsx(d,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#ed8936aa"})})]}),n.jsx(s,{data:Array.from({length:100},(e,t)=>{const r=a-6048e5+t*1e3*60*60*24*7/100,l=50+Math.sin(t/10)*20;return{x:r,y:[l-15,l+15]}}),xScaleId:"t",yScaleId:"y",style:{fillStyle:"rgba(237, 137, 54, 0.5)"}}),n.jsx(u,{scaleId:"t",ticks:b({})}),n.jsx(k,{scaleId:"y",ticks:f()})]})})}},h={render:()=>{const a=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsxs(c,{sync:{key:"multi-area",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(d,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#9f7aea44"})})]}),n.jsx(s,{data:Array.from({length:50},(i,e)=>({x:e*2,y:[10+Math.sin(e/5)*8,30+Math.sin(e/5)*8]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(66, 153, 225, 0.4)"}}),n.jsx(s,{data:Array.from({length:50},(i,e)=>({x:e*2,y:[40+Math.cos(e/6)*10,60+Math.cos(e/6)*10]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(72, 187, 120, 0.4)"}}),n.jsx(s,{data:Array.from({length:50},(i,e)=>({x:e*2,y:[70+Math.sin(e/4)*6,90+Math.sin(e/4)*6]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(237, 137, 54, 0.4)"}})]})})}},p={render:()=>{const a=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=Array.from({length:40},(e,t)=>({x:t*2.5,center:50+Math.sin(t/5)*25}));return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsxs(c,{sync:{key:"area-scatter",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(d,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#f6ad5544"})})]}),n.jsx(s,{data:i.map(e=>({x:e.x,y:[e.center-12,e.center+12]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(159, 122, 234, 0.3)"}}),n.jsx(I,{data:i.map(e=>({x:e.x,y:e.center})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#805ad5",strokeStyle:"#553c9a",lineWidth:2}})]})})}},S={render:()=>{const a=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[n.jsxs(c,{sync:{key:"confidence",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(d,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#fc864944"})})]}),n.jsx(s,{data:Array.from({length:100},(i,e)=>{const t=e*1.25,r=50+(t-50)*.3;return{x:t,y:[r-20,r+20]}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(252, 129, 129, 0.2)"}}),n.jsx(s,{data:Array.from({length:100},(i,e)=>{const t=e*1.25,r=50+(t-50)*.3;return{x:t,y:[r-8,r+8]}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(252, 129, 129, 0.5)"}}),n.jsx(I,{data:Array.from({length:80},(i,e)=>{const t=e*1.25;return{x:t,y:50+(t-50)*.3}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#c92a2a",strokeStyle:"#c92a2a",lineWidth:2}})]})})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
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
          <AreaPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: [30 + Math.sin(i / 5) * 15, 70 + Math.sin(i / 5) * 15]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(66, 153, 225, 0.5)"
        }} />
          <XTicks scaleId="x" ticks={makeLinearTicks()} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />
        </CanPlot>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
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
          key: "area",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4299e144"
          })} />
          </ChartAreaInteractions>

          <AreaPlot data={Array.from({
          length: 60
        }, (_, i) => {
          const x = i * 1.67;
          const center = 50 + Math.sin(i / 8) * 20;
          const width = 15 + Math.cos(i / 10) * 10;
          return {
            x,
            y: [center - width, center + width]
          };
        })} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(72, 187, 120, 0.6)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const refPoint = Date.parse("2025-11-01T12:00:00Z");
    const scales: PlotScaleConfig[] = [{
      id: "t",
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
          key: "timeseries-area",
          xViaScaleId: "t",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ed8936aa"
          })} />
          </ChartAreaInteractions>

          <AreaPlot data={Array.from({
          length: 100
        }, (_, i) => {
          const x = refPoint - 1000 * 60 * 60 * 24 * 7 + i * 1000 * 60 * 60 * 24 * 7 / 100;
          const baseValue = 50 + Math.sin(i / 10) * 20;
          return {
            x,
            y: [baseValue - 15, baseValue + 15]
          };
        })} xScaleId="t" yScaleId="y" style={{
          fillStyle: "rgba(237, 137, 54, 0.5)"
        }} />
          <XTicks scaleId="t" ticks={makeTimeTicks({})} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />
        </CanPlot>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
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
          key: "multi-area",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#9f7aea44"
          })} />
          </ChartAreaInteractions>

          <AreaPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: [10 + Math.sin(i / 5) * 8, 30 + Math.sin(i / 5) * 8]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(66, 153, 225, 0.4)"
        }} />

          <AreaPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: [40 + Math.cos(i / 6) * 10, 60 + Math.cos(i / 6) * 10]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(72, 187, 120, 0.4)"
        }} />

          <AreaPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: [70 + Math.sin(i / 4) * 6, 90 + Math.sin(i / 4) * 6]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(237, 137, 54, 0.4)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const dataPoints = Array.from({
      length: 40
    }, (_, i) => ({
      x: i * 2.5,
      center: 50 + Math.sin(i / 5) * 25
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
          key: "area-scatter",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#f6ad5544"
          })} />
          </ChartAreaInteractions>

          {/* Area plot showing the range/uncertainty */}
          <AreaPlot data={dataPoints.map(d => ({
          x: d.x,
          y: [d.center - 12, d.center + 12]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(159, 122, 234, 0.3)"
        }} />

          {/* Scatter plot showing the actual values */}
          <ScatterPlot data={dataPoints.map(d => ({
          x: d.x,
          y: d.center
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#805ad5",
          strokeStyle: "#553c9a",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
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
          key: "confidence",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#fc864944"
          })} />
          </ChartAreaInteractions>

          {/* Wide confidence band */}
          <AreaPlot data={Array.from({
          length: 100
        }, (_, i) => {
          const x = i * 1.25;
          const center = 50 + (x - 50) * 0.3;
          return {
            x,
            y: [center - 20, center + 20]
          };
        })} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(252, 129, 129, 0.2)"
        }} />

          {/* Narrow confidence band */}
          <AreaPlot data={Array.from({
          length: 100
        }, (_, i) => {
          const x = i * 1.25;
          const center = 50 + (x - 50) * 0.3;
          return {
            x,
            y: [center - 8, center + 8]
          };
        })} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(252, 129, 129, 0.5)"
        }} />

          {/* Center line */}
          <ScatterPlot data={Array.from({
          length: 80
        }, (_, i) => {
          const x = i * 1.25;
          return {
            x,
            y: 50 + (x - 50) * 0.3
          };
        })} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#c92a2a",
          strokeStyle: "#c92a2a",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};const Y=["Basic","WithInteractions","TimeSeries","MultipleAreas","WithScatterOverlay","ConfidenceBands"];export{y as Basic,S as ConfidenceBands,h as MultipleAreas,g as TimeSeries,m as WithInteractions,p as WithScatterOverlay,Y as __namedExportsOrder,X as default};
