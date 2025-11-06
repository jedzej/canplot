import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as M,b as z,C as c}from"./CanPlot-tc9inbpQ.js";import{S as P}from"./ScatterPlot-CPLUD37E.js";import{C as x}from"./ChartAreaInteractions-BW7_z-LO.js";import{C as m}from"./CrossHair-abfp6pc3.js";import{S as p}from"./SelectBox-CLRTQawc.js";import"./iframe-CpxcZYpa.js";import"./preload-helper-PPVm8Dsz.js";const o=({data:a,xScaleId:i,yScaleId:n,style:t})=>(M(({getCtx:r,clampXPosToChartArea:l,clampYPosToChartArea:C,valToPos:b})=>{const d=[];for(const y of a){const A=l(b(y.x,i)),j=C(b(y.y[0],n)),k=C(b(y.y[1],n));d.push({x:A,y:j}),d.unshift({x:A,y:k})}const s=r();if(d.length>0){s.save(),s.beginPath(),z(s,t),s.moveTo(d[0].x,d[0].y);for(const y of d)s.lineTo(y.x,y.y);s.closePath(),s.fill(),s.restore()}},[a,i,n,t]),null),D={title:"CanPlot/AreaPlot",component:c,parameters:{layout:"fullscreen"},tags:["autodocs"]},g={render:()=>{const a=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return e.jsx("div",{style:{padding:"20px"},children:e.jsx(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:e.jsx(o,{data:Array.from({length:50},(i,n)=>({x:n*2,y:[30+Math.sin(n/5)*15,70+Math.sin(n/5)*15]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(66, 153, 225, 0.5)"}})})})}},h={render:()=>{const a=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return e.jsx("div",{style:{padding:"20px"},children:e.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[e.jsxs(x,{sync:{key:"area",xViaScaleId:"x",yViaScaleId:"y"},children:[e.jsx(m,{}),e.jsx(p,{makeStyle:()=>({backgroundColor:"#4299e144"})})]}),e.jsx(o,{data:Array.from({length:60},(i,n)=>{const t=n*1.67,r=50+Math.sin(n/8)*20,l=15+Math.cos(n/10)*10;return{x:t,y:[r-l,r+l]}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(72, 187, 120, 0.6)"}})]})})}},S={render:()=>{const a=Date.parse("2025-11-01T12:00:00Z"),i=[{id:"t",type:"time",timeZone:"UTC",axis:{position:"bottom",size:50},origin:"x",min:a-1e3*60*60*24*7,max:a},{id:"y",type:"linear",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return e.jsx("div",{style:{padding:"20px"},children:e.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[e.jsxs(x,{sync:{key:"timeseries-area",xViaScaleId:"t",yViaScaleId:"y"},children:[e.jsx(m,{}),e.jsx(p,{makeStyle:()=>({backgroundColor:"#ed8936aa"})})]}),e.jsx(o,{data:Array.from({length:100},(n,t)=>{const r=a-6048e5+t*1e3*60*60*24*7/100,l=50+Math.sin(t/10)*20;return{x:r,y:[l-15,l+15]}}),xScaleId:"t",yScaleId:"y",style:{fillStyle:"rgba(237, 137, 54, 0.5)"}})]})})}},f={render:()=>{const a=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return e.jsx("div",{style:{padding:"20px"},children:e.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[e.jsxs(x,{sync:{key:"multi-area",xViaScaleId:"x",yViaScaleId:"y"},children:[e.jsx(m,{}),e.jsx(p,{makeStyle:()=>({backgroundColor:"#9f7aea44"})})]}),e.jsx(o,{data:Array.from({length:50},(i,n)=>({x:n*2,y:[10+Math.sin(n/5)*8,30+Math.sin(n/5)*8]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(66, 153, 225, 0.4)"}}),e.jsx(o,{data:Array.from({length:50},(i,n)=>({x:n*2,y:[40+Math.cos(n/6)*10,60+Math.cos(n/6)*10]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(72, 187, 120, 0.4)"}}),e.jsx(o,{data:Array.from({length:50},(i,n)=>({x:n*2,y:[70+Math.sin(n/4)*6,90+Math.sin(n/4)*6]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(237, 137, 54, 0.4)"}})]})})}},u={render:()=>{const a=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=Array.from({length:40},(n,t)=>({x:t*2.5,center:50+Math.sin(t/5)*25}));return e.jsx("div",{style:{padding:"20px"},children:e.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[e.jsxs(x,{sync:{key:"area-scatter",xViaScaleId:"x",yViaScaleId:"y"},children:[e.jsx(m,{}),e.jsx(p,{makeStyle:()=>({backgroundColor:"#f6ad5544"})})]}),e.jsx(o,{data:i.map(n=>({x:n.x,y:[n.center-12,n.center+12]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(159, 122, 234, 0.3)"}}),e.jsx(P,{data:i.map(n=>({x:n.x,y:n.center})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#805ad5",strokeStyle:"#553c9a",lineWidth:2}})]})})}},I={render:()=>{const a=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return e.jsx("div",{style:{padding:"20px"},children:e.jsxs(c,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:a},children:[e.jsxs(x,{sync:{key:"confidence",xViaScaleId:"x",yViaScaleId:"y"},children:[e.jsx(m,{}),e.jsx(p,{makeStyle:()=>({backgroundColor:"#fc864944"})})]}),e.jsx(o,{data:Array.from({length:100},(i,n)=>{const t=n*1.25,r=50+(t-50)*.3;return{x:t,y:[r-20,r+20]}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(252, 129, 129, 0.2)"}}),e.jsx(o,{data:Array.from({length:100},(i,n)=>{const t=n*1.25,r=50+(t-50)*.3;return{x:t,y:[r-8,r+8]}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(252, 129, 129, 0.5)"}}),e.jsx(P,{data:Array.from({length:80},(i,n)=>{const t=n*1.25;return{x:t,y:50+(t-50)*.3}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#c92a2a",strokeStyle:"#c92a2a",lineWidth:2}})]})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
          <AreaPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: [30 + Math.sin(i / 5) * 15, 70 + Math.sin(i / 5) * 15]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(66, 153, 225, 0.5)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        </CanPlot>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const E=["Basic","WithInteractions","TimeSeries","MultipleAreas","WithScatterOverlay","ConfidenceBands"];export{g as Basic,I as ConfidenceBands,f as MultipleAreas,S as TimeSeries,h as WithInteractions,u as WithScatterOverlay,E as __namedExportsOrder,D as default};
