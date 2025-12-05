import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as o}from"./CanPlot-nn6GHReb.js";import{S as a}from"./ScatterPlot-1AKyey2O.js";import{C as y}from"./ChartAreaInteractions-BlKXd0Dt.js";import{C as x}from"./CrossHair-CS4V2BIF.js";import{S as m}from"./SelectBox-Dpu3ziTf.js";import"./iframe-MRNd9utn.js";import"./preload-helper-PPVm8Dsz.js";const C={component:o,parameters:{layout:"fullscreen"},tags:["autodocs"]},r={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:n.jsx(a,{data:Array.from({length:20},(i,t)=>({x:t*5,y:Math.random()*100})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"blue",strokeStyle:"darkblue",lineWidth:2}})})})}},s={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(y,{sync:{key:"demo",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(x,{}),n.jsx(m,{makeStyle:()=>({backgroundColor:"#4499ff44"})})]}),n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:50+Math.sin(t/3)*30+Math.random()*10})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:2}})]})})}},l={render:()=>{const e=Date.parse("2025-11-01T12:00:00Z"),i=[{id:"t",axis:{position:"bottom",size:50},origin:"x",min:e-1e3*60*60*24,max:e},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(y,{sync:{key:"timeseries",xViaScaleId:"t",yViaScaleId:"y"},children:[n.jsx(x,{}),n.jsx(m,{makeStyle:()=>({backgroundColor:"#44992244"})})]}),n.jsx(a,{data:Array.from({length:50},(t,h)=>({x:e-1e3*60*60*24+h*1e3*60*60*24/50,y:50+Math.sin(h/5)*20+Math.random()*15})),xScaleId:"t",yScaleId:"y",style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:2}})]})})}},d={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(y,{sync:{key:"multi",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(x,{}),n.jsx(m,{makeStyle:()=>({backgroundColor:"#ffd43b44"})})]}),n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:30+Math.sin(t/2)*20})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:2}}),n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:50+Math.cos(t/3)*25})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:2}}),n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:70+Math.sin(t/4)*15})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:2}})]})})}},c={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:50},origin:"y",min:0,max:100},{id:"y2",axis:{position:"right",size:50},origin:"y",min:-1e3,max:1e3}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(o,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(y,{sync:{key:"dual",xViaScaleId:"x",yViaScaleId:"y1"},children:[n.jsx(x,{}),n.jsx(m,{makeStyle:()=>({backgroundColor:"#4499ff22"})})]}),n.jsx(a,{data:Array.from({length:20},(i,t)=>({x:t*5,y:50+Math.sin(t/2)*30})),xScaleId:"x",yScaleId:"y1",style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:2}}),n.jsx(a,{data:Array.from({length:20},(i,t)=>({x:t*5,y:Math.cos(t/3)*800})),xScaleId:"x",yScaleId:"y2",style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:2}})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
          <ScatterPlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: Math.random() * 100
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "blue",
          strokeStyle: "darkblue",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          key: "demo",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4499ff44"
          })} />
          </ChartAreaInteractions>

          <ScatterPlot data={Array.from({
          length: 30
        }, (_, i) => ({
          x: i * 3.33,
          y: 50 + Math.sin(i / 3) * 30 + Math.random() * 10
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#c92a2a",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const refPoint = Date.parse("2025-11-01T12:00:00Z");
    const scales: PlotScaleConfig[] = [{
      id: "t",
      axis: {
        position: "bottom",
        size: 50
      },
      origin: "x",
      min: refPoint - 1000 * 60 * 60 * 24,
      // 24 hours ago
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
          key: "timeseries",
          xViaScaleId: "t",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#44992244"
          })} />
          </ChartAreaInteractions>

          <ScatterPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: refPoint - 1000 * 60 * 60 * 24 + i * 1000 * 60 * 60 * 24 / 50,
          y: 50 + Math.sin(i / 5) * 20 + Math.random() * 15
        }))} xScaleId="t" yScaleId="y" style={{
          fillStyle: "#51cf66",
          strokeStyle: "#2f9e44",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          key: "multi",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ffd43b44"
          })} />
          </ChartAreaInteractions>

          <ScatterPlot data={Array.from({
          length: 30
        }, (_, i) => ({
          x: i * 3.33,
          y: 30 + Math.sin(i / 2) * 20
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#c92a2a",
          lineWidth: 2
        }} />

          <ScatterPlot data={Array.from({
          length: 30
        }, (_, i) => ({
          x: i * 3.33,
          y: 50 + Math.cos(i / 3) * 25
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#51cf66",
          strokeStyle: "#2f9e44",
          lineWidth: 2
        }} />

          <ScatterPlot data={Array.from({
          length: 30
        }, (_, i) => ({
          x: i * 3.33,
          y: 70 + Math.sin(i / 4) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      id: "y1",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 0,
      max: 100
    }, {
      id: "y2",
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
          key: "dual",
          xViaScaleId: "x",
          yViaScaleId: "y1"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4499ff22"
          })} />
          </ChartAreaInteractions>

          {/* First dataset on left Y-axis */}
          <ScatterPlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: 50 + Math.sin(i / 2) * 30
        }))} xScaleId="x" yScaleId="y1" style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#c92a2a",
          lineWidth: 2
        }} />

          {/* Second dataset on right Y-axis */}
          <ScatterPlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: Math.cos(i / 3) * 800
        }))} xScaleId="x" yScaleId="y2" style={{
          fillStyle: "#51cf66",
          strokeStyle: "#2f9e44",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const j=["Basic","WithInteractions","TimeSeries","MultipleDatasets","DualYAxis"];export{r as Basic,c as DualYAxis,d as MultipleDatasets,l as TimeSeries,s as WithInteractions,j as __namedExportsOrder,C as default};
