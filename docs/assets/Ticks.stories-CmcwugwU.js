import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CanPlot-Bu1g0GpU.js";import{L as l}from"./LinePlot-DaSRgxtp.js";import{X as a,m as i,Y as o,a as T}from"./tickUtils-BLMoMzuH.js";import"./iframe-mNfbeEQq.js";import"./preload-helper-PPVm8Dsz.js";const L={title:"CanPlot/Ticks",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"]},y={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Default Tick Styles"}),n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(a,{scaleId:"x",ticks:i()}),n.jsx(o,{scaleId:"y",ticks:i()}),n.jsx(l,{data:Array.from({length:20},(r,e)=>({x:e*5,y:50+Math.sin(e/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]})}},p={render:()=>{const t=[{id:"x1",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:60},origin:"y",min:0,max:100}],r=[{id:"x2",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:60},origin:"y",min:0,max:100}],e=[{id:"x3",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y3",axis:{position:"left",size:60},origin:"y",min:0,max:100}],c=Array.from({length:20},(d,x)=>({x:x*5,y:50+Math.sin(x/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Small Ticks (tickSize: 3)"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(a,{scaleId:"x1",ticks:i(),tickSize:3}),n.jsx(o,{scaleId:"y1",ticks:i(),tickSize:3}),n.jsx(l,{data:c,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#51cf66",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Medium Ticks (tickSize: 8)"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(a,{scaleId:"x2",ticks:i(),tickSize:8}),n.jsx(o,{scaleId:"y2",ticks:i(),tickSize:8}),n.jsx(l,{data:c,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Large Ticks (tickSize: 15)"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(a,{scaleId:"x3",ticks:i(),tickSize:15}),n.jsx(o,{scaleId:"y3",ticks:i(),tickSize:15}),n.jsx(l,{data:c,xScaleId:"x3",yScaleId:"y3",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]})]})}},f={render:()=>{const t=[{id:"x1",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:60},origin:"y",min:0,max:100}],r=[{id:"x2",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:60},origin:"y",min:0,max:100}],e=[{id:"x3",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y3",axis:{position:"left",size:60},origin:"y",min:0,max:100}],c=Array.from({length:20},(d,x)=>({x:x*5,y:50+Math.sin(x/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Thin Blue Ticks"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(a,{scaleId:"x1",ticks:i(),tickStyle:{strokeStyle:"#4c6ef5",lineWidth:1},labelStyle:{fillStyle:"#4c6ef5",font:"12px sans-serif"}}),n.jsx(o,{scaleId:"y1",ticks:i(),tickStyle:{strokeStyle:"#4c6ef5",lineWidth:1},labelStyle:{fillStyle:"#4c6ef5",font:"12px sans-serif"}}),n.jsx(l,{data:c,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Bold Red Ticks"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(a,{scaleId:"x2",ticks:i(),tickStyle:{strokeStyle:"#ff6b6b",lineWidth:3},labelStyle:{fillStyle:"#ff6b6b",font:"bold 14px sans-serif"}}),n.jsx(o,{scaleId:"y2",ticks:i(),tickStyle:{strokeStyle:"#ff6b6b",lineWidth:3},labelStyle:{fillStyle:"#ff6b6b",font:"bold 14px sans-serif"}}),n.jsx(l,{data:c,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#ff6b6b",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Italic Green Ticks with Serif Font"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(a,{scaleId:"x3",ticks:i(),tickStyle:{strokeStyle:"#51cf66",lineWidth:2},labelStyle:{fillStyle:"#51cf66",font:"italic 13px serif"}}),n.jsx(o,{scaleId:"y3",ticks:i(),tickStyle:{strokeStyle:"#51cf66",lineWidth:2},labelStyle:{fillStyle:"#51cf66",font:"italic 13px serif"}}),n.jsx(l,{data:c,xScaleId:"x3",yScaleId:"y3",style:{strokeStyle:"#51cf66",lineWidth:2}})]})]})}},m={render:()=>{const t=[{id:"x1",axis:{position:"bottom",size:70},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:70},origin:"y",min:0,max:100}],r=[{id:"x2",axis:{position:"bottom",size:70},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:70},origin:"y",min:0,max:100}],e=[{id:"x3",axis:{position:"bottom",size:80},origin:"x",min:0,max:100},{id:"y3",axis:{position:"left",size:80},origin:"y",min:0,max:100}],c=Array.from({length:20},(d,x)=>({x:x*5,y:50+Math.sin(x/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Small Sans-Serif Font"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(a,{scaleId:"x1",ticks:i(),labelStyle:{font:"10px sans-serif",fillStyle:"#495057"}}),n.jsx(o,{scaleId:"y1",ticks:i(),labelStyle:{font:"10px sans-serif",fillStyle:"#495057"}}),n.jsx(l,{data:c,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#868e96",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Bold Large Font"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(a,{scaleId:"x2",ticks:i(),labelStyle:{font:"bold 16px sans-serif",fillStyle:"#212529"}}),n.jsx(o,{scaleId:"y2",ticks:i(),labelStyle:{font:"bold 16px sans-serif",fillStyle:"#212529"}}),n.jsx(l,{data:c,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#343a40",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Monospace Font with Color"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(a,{scaleId:"x3",ticks:i(),labelStyle:{font:"14px monospace",fillStyle:"#9775fa"}}),n.jsx(o,{scaleId:"y3",ticks:i(),labelStyle:{font:"14px monospace",fillStyle:"#9775fa"}}),n.jsx(l,{data:c,xScaleId:"x3",yScaleId:"y3",style:{strokeStyle:"#9775fa",lineWidth:2}})]})]})}},h={render:()=>{const t=[{id:"x1",axis:{position:"bottom",size:70},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:70},origin:"y",min:0,max:100}],r=[{id:"x2",axis:{position:"bottom",size:90},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:90},origin:"y",min:0,max:100}],e=Array.from({length:20},(c,d)=>({x:d*5,y:50+Math.sin(d/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Tight Label Gap (labelGap: 8)"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(a,{scaleId:"x1",ticks:i(),labelGap:8,labelStyle:{font:"11px sans-serif"}}),n.jsx(o,{scaleId:"y1",ticks:i(),labelGap:8,labelStyle:{font:"11px sans-serif"}}),n.jsx(l,{data:e,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#f59f00",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Loose Label Gap (labelGap: 20)"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(a,{scaleId:"x2",ticks:i(),labelGap:20,labelStyle:{font:"13px sans-serif"}}),n.jsx(o,{scaleId:"y2",ticks:i(),labelGap:20,labelStyle:{font:"13px sans-serif"}}),n.jsx(l,{data:e,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#cc5de8",lineWidth:2}})]})]})}},k={render:()=>{const t=[{id:"x",axis:{position:"top",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"right",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Top and Right Axis with Custom Ticks"}),n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(a,{scaleId:"x",ticks:i(),tickSize:10,tickStyle:{strokeStyle:"#e03131",lineWidth:2},labelStyle:{fillStyle:"#e03131",font:"bold 13px sans-serif"}}),n.jsx(o,{scaleId:"y",ticks:i(),tickSize:10,tickStyle:{strokeStyle:"#1971c2",lineWidth:2},labelStyle:{fillStyle:"#1971c2",font:"bold 13px sans-serif"}}),n.jsx(l,{data:Array.from({length:20},(r,e)=>({x:e*5,y:50+Math.sin(e/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7950f2",lineWidth:2}})]})]})}},S={render:()=>{const t=Date.parse("2025-11-01T12:00:00Z"),r=[{id:"t",axis:{position:"bottom",size:80},origin:"x",min:t-1e3*60*60*24*7,max:t},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Time Ticks with Custom Styles"}),n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(a,{scaleId:"t",ticks:T({timeZone:"UTC"}),tickSize:12,tickStyle:{strokeStyle:"#1098ad",lineWidth:2},labelStyle:{fillStyle:"#0c8599",font:"12px sans-serif"},labelGap:14}),n.jsx(o,{scaleId:"y",ticks:i(),tickSize:8,tickStyle:{strokeStyle:"#1098ad",lineWidth:1},labelStyle:{fillStyle:"#0c8599",font:"12px sans-serif"}}),n.jsx(l,{data:Array.from({length:100},(e,c)=>({x:t-1e3*60*60*24*7+c*1e3*60*60*24*7/100,y:50+Math.sin(c/10)*20+Math.random()*10})),xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#15aabf",lineWidth:2}})]})]})}},g={render:()=>{const t=[{id:"x1",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:60},origin:"y",min:0,max:100}],r=[{id:"x2",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y2",axis:{position:"left",size:60},origin:"y",min:0,max:100}],e=Array.from({length:20},(c,d)=>({x:d*5,y:50+Math.sin(d/2)*30}));return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Dense Ticks (space: 30)"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(a,{scaleId:"x1",ticks:i({space:30})}),n.jsx(o,{scaleId:"y1",ticks:i({space:30})}),n.jsx(l,{data:e,xScaleId:"x1",yScaleId:"y1",style:{strokeStyle:"#f76707",lineWidth:2}})]}),n.jsx("h3",{style:{marginTop:"40px"},children:"Sparse Ticks (space: 150)"}),n.jsxs(s,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:r},children:[n.jsx(a,{scaleId:"x2",ticks:i({space:150})}),n.jsx(o,{scaleId:"y2",ticks:i({space:150})}),n.jsx(l,{data:e,xScaleId:"x2",yScaleId:"y2",style:{strokeStyle:"#2f9e44",lineWidth:2}})]})]})}},b={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:80},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:80},origin:"y",min:-50,max:50}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{children:"Fully Customized Ticks"}),n.jsx("p",{children:"Large ticks with custom colors, bold fonts, and custom spacing"}),n.jsxs(s,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(a,{scaleId:"x",ticks:i({space:80}),tickSize:12,labelGap:16,tickStyle:{strokeStyle:"#d9480f",lineWidth:3},labelStyle:{fillStyle:"#c92a2a",font:"bold 15px Georgia, serif"}}),n.jsx(o,{scaleId:"y",ticks:i({space:60}),tickSize:12,labelGap:16,tickStyle:{strokeStyle:"#1864ab",lineWidth:3},labelStyle:{fillStyle:"#1971c2",font:"bold 15px Georgia, serif"}}),n.jsx(l,{data:Array.from({length:100},(r,e)=>({x:e,y:Math.sin(e/5)*30+Math.cos(e/3)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#7048e8",lineWidth:3}})]})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <h3>Default Tick Styles</h3>
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
          <XTicks scaleId="x" ticks={makeLinearTicks()} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />

          <LinePlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: 50 + Math.sin(i / 2) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales3: PlotScaleConfig[] = [{
      id: "x3",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y3",
      axis: {
        position: "left",
        size: 60
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
        <h3>Small Ticks (tickSize: 3)</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks()} tickSize={3} />
          <YTicks scaleId="y1" ticks={makeLinearTicks()} tickSize={3} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Medium Ticks (tickSize: 8)</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks()} tickSize={8} />
          <YTicks scaleId="y2" ticks={makeLinearTicks()} tickSize={8} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Large Ticks (tickSize: 15)</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales3
      }}>
          <XTicks scaleId="x3" ticks={makeLinearTicks()} tickSize={15} />
          <YTicks scaleId="y3" ticks={makeLinearTicks()} tickSize={15} />

          <LinePlot data={data} xScaleId="x3" yScaleId="y3" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales3: PlotScaleConfig[] = [{
      id: "x3",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y3",
      axis: {
        position: "left",
        size: 60
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
        <h3>Thin Blue Ticks</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#4c6ef5",
          lineWidth: 1
        }} labelStyle={{
          fillStyle: "#4c6ef5",
          font: "12px sans-serif"
        }} />
          <YTicks scaleId="y1" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#4c6ef5",
          lineWidth: 1
        }} labelStyle={{
          fillStyle: "#4c6ef5",
          font: "12px sans-serif"
        }} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Bold Red Ticks</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#ff6b6b",
          lineWidth: 3
        }} labelStyle={{
          fillStyle: "#ff6b6b",
          font: "bold 14px sans-serif"
        }} />
          <YTicks scaleId="y2" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#ff6b6b",
          lineWidth: 3
        }} labelStyle={{
          fillStyle: "#ff6b6b",
          font: "bold 14px sans-serif"
        }} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Italic Green Ticks with Serif Font</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales3
      }}>
          <XTicks scaleId="x3" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#51cf66",
          font: "italic 13px serif"
        }} />
          <YTicks scaleId="y3" ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#51cf66",
          font: "italic 13px serif"
        }} />

          <LinePlot data={data} xScaleId="x3" yScaleId="y3" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 70
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 70
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 70
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 70
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales3: PlotScaleConfig[] = [{
      id: "x3",
      axis: {
        position: "bottom",
        size: 80
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y3",
      axis: {
        position: "left",
        size: 80
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
        <h3>Small Sans-Serif Font</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks()} labelStyle={{
          font: "10px sans-serif",
          fillStyle: "#495057"
        }} />
          <YTicks scaleId="y1" ticks={makeLinearTicks()} labelStyle={{
          font: "10px sans-serif",
          fillStyle: "#495057"
        }} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#868e96",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Bold Large Font</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks()} labelStyle={{
          font: "bold 16px sans-serif",
          fillStyle: "#212529"
        }} />
          <YTicks scaleId="y2" ticks={makeLinearTicks()} labelStyle={{
          font: "bold 16px sans-serif",
          fillStyle: "#212529"
        }} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#343a40",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Monospace Font with Color</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales3
      }}>
          <XTicks scaleId="x3" ticks={makeLinearTicks()} labelStyle={{
          font: "14px monospace",
          fillStyle: "#9775fa"
        }} />
          <YTicks scaleId="y3" ticks={makeLinearTicks()} labelStyle={{
          font: "14px monospace",
          fillStyle: "#9775fa"
        }} />

          <LinePlot data={data} xScaleId="x3" yScaleId="y3" style={{
          strokeStyle: "#9775fa",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 70
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 70
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 90
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 90
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
        <h3>Tight Label Gap (labelGap: 8)</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks()} labelGap={8} labelStyle={{
          font: "11px sans-serif"
        }} />
          <YTicks scaleId="y1" ticks={makeLinearTicks()} labelGap={8} labelStyle={{
          font: "11px sans-serif"
        }} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#f59f00",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Loose Label Gap (labelGap: 20)</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks()} labelGap={20} labelStyle={{
          font: "13px sans-serif"
        }} />
          <YTicks scaleId="y2" ticks={makeLinearTicks()} labelGap={20} labelStyle={{
          font: "13px sans-serif"
        }} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#cc5de8",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "top",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "right",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <h3>Top and Right Axis with Custom Ticks</h3>
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
          <XTicks scaleId="x" ticks={makeLinearTicks()} tickSize={10} tickStyle={{
          strokeStyle: "#e03131",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#e03131",
          font: "bold 13px sans-serif"
        }} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} tickSize={10} tickStyle={{
          strokeStyle: "#1971c2",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#1971c2",
          font: "bold 13px sans-serif"
        }} />

          <LinePlot data={Array.from({
          length: 20
        }, (_, i) => ({
          x: i * 5,
          y: 50 + Math.sin(i / 2) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#7950f2",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const refPoint = Date.parse("2025-11-01T12:00:00Z");
    const scales: PlotScaleConfig[] = [{
      id: "t",
      axis: {
        position: "bottom",
        size: 80
      },
      origin: "x",
      min: refPoint - 1000 * 60 * 60 * 24 * 7,
      // 7 days ago
      max: refPoint
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <h3>Time Ticks with Custom Styles</h3>
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
          <XTicks scaleId="t" ticks={makeTimeTicks({
          timeZone: "UTC"
        })} tickSize={12} tickStyle={{
          strokeStyle: "#1098ad",
          lineWidth: 2
        }} labelStyle={{
          fillStyle: "#0c8599",
          font: "12px sans-serif"
        }} labelGap={14} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} tickSize={8} tickStyle={{
          strokeStyle: "#1098ad",
          lineWidth: 1
        }} labelStyle={{
          fillStyle: "#0c8599",
          font: "12px sans-serif"
        }} />

          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: refPoint - 1000 * 60 * 60 * 24 * 7 + i * 1000 * 60 * 60 * 24 * 7 / 100,
          y: 50 + Math.sin(i / 10) * 20 + Math.random() * 10
        }))} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "#15aabf",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x1",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y1",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: 0,
      max: 100
    }];
    const scales2: PlotScaleConfig[] = [{
      id: "x2",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y2",
      axis: {
        position: "left",
        size: 60
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
        <h3>Dense Ticks (space: 30)</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales
      }}>
          <XTicks scaleId="x1" ticks={makeLinearTicks({
          space: 30
        })} />
          <YTicks scaleId="y1" ticks={makeLinearTicks({
          space: 30
        })} />

          <LinePlot data={data} xScaleId="x1" yScaleId="y1" style={{
          strokeStyle: "#f76707",
          lineWidth: 2
        }} />
        </CanPlot>

        <h3 style={{
        marginTop: "40px"
      }}>Sparse Ticks (space: 150)</h3>
        <CanPlot style={{
        width: "100%",
        height: "300px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales: scales2
      }}>
          <XTicks scaleId="x2" ticks={makeLinearTicks({
          space: 150
        })} />
          <YTicks scaleId="y2" ticks={makeLinearTicks({
          space: 150
        })} />

          <LinePlot data={data} xScaleId="x2" yScaleId="y2" style={{
          strokeStyle: "#2f9e44",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 80
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 80
      },
      origin: "y",
      min: -50,
      max: 50
    }];
    return <div style={{
      padding: "20px"
    }}>
        <h3>Fully Customized Ticks</h3>
        <p>
          Large ticks with custom colors, bold fonts, and custom spacing
        </p>
        <CanPlot style={{
        width: "100%",
        height: "500px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <XTicks scaleId="x" ticks={makeLinearTicks({
          space: 80
        })} tickSize={12} labelGap={16} tickStyle={{
          strokeStyle: "#d9480f",
          lineWidth: 3
        }} labelStyle={{
          fillStyle: "#c92a2a",
          font: "bold 15px Georgia, serif"
        }} />
          <YTicks scaleId="y" ticks={makeLinearTicks({
          space: 60
        })} tickSize={12} labelGap={16} tickStyle={{
          strokeStyle: "#1864ab",
          lineWidth: 3
        }} labelStyle={{
          fillStyle: "#1971c2",
          font: "bold 15px Georgia, serif"
        }} />

          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: i,
          y: Math.sin(i / 5) * 30 + Math.cos(i / 3) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#7048e8",
          lineWidth: 3
        }} />
        </CanPlot>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const W=["DefaultTicks","DifferentTickSizes","DifferentTickStyles","DifferentLabelStyles","CustomLabelGap","DifferentAxisPositions","TimeTicksWithStyles","CustomTickSpacing","FullyCustomized"];export{h as CustomLabelGap,g as CustomTickSpacing,y as DefaultTicks,k as DifferentAxisPositions,m as DifferentLabelStyles,p as DifferentTickSizes,f as DifferentTickStyles,b as FullyCustomized,S as TimeTicksWithStyles,W as __namedExportsOrder,L as default};
