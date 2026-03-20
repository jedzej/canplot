import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./frameContext-CzVEpgAD.js";import{L as a}from"./LinePlot-ZQ1ScYo2.js";import{S as W}from"./ScatterPlot-C0eKBXaK.js";import{C as d}from"./ChartAreaInteractions-DSEDSStD.js";import{C as c}from"./CrossHair-DTrEgWcV.js";import{S as x}from"./SelectBox-FH_YNtg5.js";import"./iframe-BNSWpFgR.js";import"./preload-helper-PPVm8Dsz.js";const V={component:s,parameters:{layout:"fullscreen"},tags:["autodocs"]},h={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:n.jsx(a,{data:Array.from({length:20},(t,e)=>({x:e*5,y:50+Math.sin(e/2)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"blue",lineWidth:2}})})})}},p={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(d,{sync:{key:"line",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(c,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#4499ff44"})})]}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*25+Math.cos(e/3)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:3}})]})})}},m={render:()=>{const i=Date.parse("2025-11-01T12:00:00Z"),t=[{id:"t",axis:{position:"bottom",size:50},origin:"x",min:i-1e3*60*60*24*7,max:i},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsxs(d,{sync:{key:"timeseries-line",xViaScaleId:"t",yViaScaleId:"y"},children:[n.jsx(c,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(a,{data:Array.from({length:100},(e,o)=>({x:i-1e3*60*60*24*7+o*1e3*60*60*24*7/100,y:50+Math.sin(o/10)*20+Math.random()*10})),xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}})]})})}},g={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(d,{sync:{key:"multi-line",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(c,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#ffd43b44"})})]}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:30+Math.sin(e/5)*20})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:2}}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.cos(e/6)*25})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:70+Math.sin(e/4)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})})}},f={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(d,{sync:{key:"styles",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(c,{makeXStyle:({keys:t})=>t.altKey?{borderColor:"blue"}:void 0}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#9f7aea44"})})]}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:25+Math.sin(e/5)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:1}}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.cos(e/6)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:3}}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:75+Math.sin(e/4)*10})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:5}})]})})}},S={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=Array.from({length:20},(e,o)=>({x:o*5,y:50+Math.sin(o/2)*30}));return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(d,{sync:{key:"line-points",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(c,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#ed893644"})})]}),n.jsx(a,{data:t,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#e67700",lineWidth:2}}),n.jsx(W,{data:t,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#fab005",strokeStyle:"#e67700",lineWidth:2}})]})})}},u={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:-50,max:50}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(d,{sync:{key:"smooth",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(c,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#f0639744"})})]}),n.jsx(a,{data:Array.from({length:100},(t,e)=>({x:e,y:Math.sin(e/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#f06397",lineWidth:2}}),n.jsx(a,{data:Array.from({length:100},(t,e)=>({x:e,y:Math.cos(e/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})})}},I={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:50},origin:"y",min:0,max:100},{id:"y2",axis:{position:"right",size:50},origin:"y",min:-1e3,max:1e3}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(d,{sync:{key:"dual-line",xViaScaleId:"x",yViaScaleId:"y1"},children:[n.jsx(c,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#4499ff22"})})]}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),xScaleId:"x",yScaleId:"y1",style:{strokeStyle:"#ff6b6b",lineWidth:2}}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:Math.cos(e/6)*800})),xScaleId:"x",yScaleId:"y2",style:{strokeStyle:"#51cf66",lineWidth:2}})]})})}},b={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(d,{sync:{key:"alpha-line",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(c,{}),n.jsx(x,{makeStyle:()=>({backgroundColor:"#4499ff22"})})]}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:30+Math.sin(e/5)*25})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:4},globalAlpha:1}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.cos(e/4)*25})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:4},globalAlpha:.7}),n.jsx(a,{data:Array.from({length:50},(t,e)=>({x:e*2,y:70+Math.sin(e/3)*20})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:4},globalAlpha:.4})]})})}},k={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:-10,max:110}],t=l=>Array.from({length:100},(y,r)=>({x:r,y:l+Math.sin(r/8)*12})),e=[{label:"solid  ([])",lineDash:[],color:"#4c6ef5"},{label:"dashed  ([8, 4])",lineDash:[8,4],color:"#f03e3e"},{label:"dotted  ([2, 4])",lineDash:[2,4],color:"#2f9e44"},{label:"dash-dot  ([10, 4, 2, 4])",lineDash:[10,4,2,4],color:"#e67700"},{label:"long dash  ([16, 6])",lineDash:[16,6],color:"#9c36b5"},{label:"sparse dots  ([2, 12])",lineDash:[2,12],color:"#0c8599"}],o=100/(e.length+1);return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h3",{style:{marginBottom:"12px"},children:"Line Dash Patterns"}),n.jsx(s,{style:{width:"100%",height:"420px"},configuration:{padding:{bottom:20,left:20,right:140,top:20},scales:i},children:e.map(({lineDash:l,color:y},r)=>n.jsx(a,{data:t(o*(r+1)),xScaleId:"x",yScaleId:"y",style:{strokeStyle:y,lineWidth:2,lineDash:l}},r))}),n.jsx("div",{style:{marginTop:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:e.map(({label:l,lineDash:y,color:r})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"13px"},children:[n.jsx("svg",{width:60,height:12,children:n.jsx("line",{x1:0,y1:6,x2:60,y2:6,stroke:r,strokeWidth:2,strokeDasharray:y.join(" ")})}),n.jsx("span",{style:{color:"#444"},children:l})]},l))})]})}},j={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:-20,max:120}],t=(l,y)=>Array.from({length:20},(r,C)=>({x:l+C,y:y+Math.sin(C/3)*15})),e=[...t(0,80),...t(35,80),...t(70,80)],o=[...t(0,30),...t(35,30),...t(70,30)];return n.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[n.jsx("h3",{style:{marginBottom:"4px"},children:"Gaps via xGapWidth"}),n.jsxs("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 12px"},children:["Data has jumps of ~16 units between segments."," ",n.jsx("code",{children:"xGapWidth"})," (canvas px) controls whether those jumps render as bridged lines or visual gaps."]}),n.jsxs(s,{style:{width:"100%",height:"360px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(a,{data:e,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#f03e3e",lineWidth:2}}),n.jsx(a,{data:o,xScaleId:"x",yScaleId:"y",xGapWidth:50,style:{strokeStyle:"#4c6ef5",lineWidth:2}})]}),n.jsxs("div",{style:{marginTop:"12px",display:"flex",flexDirection:"column",gap:"6px",fontSize:"13px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx("svg",{width:40,height:12,children:n.jsx("line",{x1:0,y1:6,x2:40,y2:6,stroke:"#f03e3e",strokeWidth:2})}),n.jsxs("span",{style:{color:"#444"},children:["No ",n.jsx("code",{children:"xGapWidth"})," — bridged across jump"]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[n.jsxs("svg",{width:40,height:12,children:[n.jsx("line",{x1:0,y1:6,x2:14,y2:6,stroke:"#4c6ef5",strokeWidth:2}),n.jsx("line",{x1:26,y1:6,x2:40,y2:6,stroke:"#4c6ef5",strokeWidth:2})]}),n.jsxs("span",{style:{color:"#444"},children:[n.jsx("code",{children:"xGapWidth=50"})," — breaks at jump"]})]})]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4499ff44"
          })} />
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          key: "timeseries-line",
          xViaScaleId: "t",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#51cf6644"
          })} />
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
          key: "multi-line",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ffd43b44"
          })} />
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
          key: "styles",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair makeXStyle={({
            keys
          }) => keys.altKey ? {
            borderColor: "blue"
          } : undefined} />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#9f7aea44"
          })} />
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ed893644"
          })} />
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
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
            <SelectBox makeStyle={() => ({
            backgroundColor: "#f0639744"
          })} />
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
}`,...u.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
          key: "dual-line",
          xViaScaleId: "x",
          yViaScaleId: "y1"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4499ff22"
          })} />
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
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
          key: "alpha-line",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4499ff22"
          })} />
          </ChartAreaInteractions>

          {/* Full opacity (default) */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 30 + Math.sin(i / 5) * 25
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 4
        }} globalAlpha={1} />

          {/* 70% opacity */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 4) * 25
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 4
        }} globalAlpha={0.7} />

          {/* 40% opacity */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 70 + Math.sin(i / 3) * 20
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 4
        }} globalAlpha={0.4} />
        </CanPlot>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        size: 50
      },
      origin: "y",
      min: -10,
      max: 110
    }];
    const wave = (offset: number) => Array.from({
      length: 100
    }, (_, i) => ({
      x: i,
      y: offset + Math.sin(i / 8) * 12
    }));
    const patterns: {
      label: string;
      lineDash: number[];
      color: string;
    }[] = [{
      label: "solid  ([])",
      lineDash: [],
      color: "#4c6ef5"
    }, {
      label: "dashed  ([8, 4])",
      lineDash: [8, 4],
      color: "#f03e3e"
    }, {
      label: "dotted  ([2, 4])",
      lineDash: [2, 4],
      color: "#2f9e44"
    }, {
      label: "dash-dot  ([10, 4, 2, 4])",
      lineDash: [10, 4, 2, 4],
      color: "#e67700"
    }, {
      label: "long dash  ([16, 6])",
      lineDash: [16, 6],
      color: "#9c36b5"
    }, {
      label: "sparse dots  ([2, 12])",
      lineDash: [2, 12],
      color: "#0c8599"
    }];
    const spacing = 100 / (patterns.length + 1);
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h3 style={{
        marginBottom: "12px"
      }}>Line Dash Patterns</h3>
        <CanPlot style={{
        width: "100%",
        height: "420px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 140,
          top: 20
        },
        scales
      }}>
          {patterns.map(({
          lineDash,
          color
        }, idx) => <LinePlot key={idx} data={wave(spacing * (idx + 1))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: color,
          lineWidth: 2,
          lineDash
        }} />)}
        </CanPlot>

        {/* Legend */}
        <div style={{
        marginTop: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "6px"
      }}>
          {patterns.map(({
          label,
          lineDash,
          color
        }) => <div key={label} style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "13px"
        }}>
              <svg width={60} height={12}>
                <line x1={0} y1={6} x2={60} y2={6} stroke={color} strokeWidth={2} strokeDasharray={lineDash.join(" ")} />
              </svg>
              <span style={{
            color: "#444"
          }}>{label}</span>
            </div>)}
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
        size: 50
      },
      origin: "y",
      min: -20,
      max: 120
    }];

    // Three segments with deliberate large x-jumps between them
    const segment = (xStart: number, yOffset: number) => Array.from({
      length: 20
    }, (_, i) => ({
      x: xStart + i,
      y: yOffset + Math.sin(i / 3) * 15
    }));
    const dataWithGaps = [...segment(0, 80),
    // x: 0–19
    ...segment(35, 80),
    // x: 35–54  (gap 19→35, +16 units)
    ...segment(70, 80) // x: 70–89  (gap 54→70, +16 units)
    ];
    const dataWithGaps2 = [...segment(0, 30), ...segment(35, 30), ...segment(70, 30)];
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h3 style={{
        marginBottom: "4px"
      }}>Gaps via xGapWidth</h3>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 12px"
      }}>
          Data has jumps of ~16 units between segments.{" "}
          <code>xGapWidth</code> (canvas px) controls whether those jumps render
          as bridged lines or visual gaps.
        </p>

        <CanPlot style={{
        width: "100%",
        height: "360px"
      }} configuration={{
        padding: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          {/* Top pair: no xGapWidth → connected across the jump */}
          <LinePlot data={dataWithGaps} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#f03e3e",
          lineWidth: 2
        }} />

          {/* Bottom pair: xGapWidth=50 → line breaks at the jump */}
          <LinePlot data={dataWithGaps2} xScaleId="x" yScaleId="y" xGapWidth={50} style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />
        </CanPlot>

        <div style={{
        marginTop: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        fontSize: "13px"
      }}>
          <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
            <svg width={40} height={12}><line x1={0} y1={6} x2={40} y2={6} stroke="#f03e3e" strokeWidth={2} /></svg>
            <span style={{
            color: "#444"
          }}>No <code>xGapWidth</code> — bridged across jump</span>
          </div>
          <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
            <svg width={40} height={12}><line x1={0} y1={6} x2={14} y2={6} stroke="#4c6ef5" strokeWidth={2} /><line x1={26} y1={6} x2={40} y2={6} stroke="#4c6ef5" strokeWidth={2} /></svg>
            <span style={{
            color: "#444"
          }}><code>xGapWidth=50</code> — breaks at jump</span>
          </div>
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const G=["Basic","WithInteractions","TimeSeries","MultipleLines","DifferentStyles","LineWithPoints","SmoothCurves","DualYAxis","GlobalAlpha","LineDash","Gaps"];export{h as Basic,f as DifferentStyles,I as DualYAxis,j as Gaps,b as GlobalAlpha,k as LineDash,S as LineWithPoints,g as MultipleLines,u as SmoothCurves,m as TimeSeries,p as WithInteractions,G as __namedExportsOrder,V as default};
