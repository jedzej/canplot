import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{u as R,b as T,C as l}from"./CanPlot-tc9inbpQ.js";import{C as o}from"./ChartAreaInteractions-BW7_z-LO.js";import{C as s}from"./CrossHair-abfp6pc3.js";import{S as d}from"./SelectBox-CLRTQawc.js";import"./iframe-CpxcZYpa.js";import"./preload-helper-PPVm8Dsz.js";const a=({data:e,stroked:i,xScaleId:t,yScaleId:x,style:c})=>(R(({getCtx:A,clampXPosToChartArea:W,clampYPosToChartArea:h,valToPos:_})=>{const p=[],r=A();for(const y of e){const B=W(_(y.x,t)),V=h(_(y.y,x));p.push({x:B,y:V})}const g=p.at(0),z=p.at(-1);if(!g||!z)return;const w=h(_(0,x));r.save(),r.beginPath(),T(r,c),r.moveTo(g.x,w);for(const y of p)r.lineTo(y.x,y.y);if(r.lineTo(z.x,w),r.closePath(),r.fill(),i){r.beginPath(),r.moveTo(g.x,g.y);for(const y of p)r.lineTo(y.x,y.y);r.stroke()}r.restore()},[e,i,t,x,c]),null),N={title:"CanPlot/SparklinePlot",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},m={render:()=>{const e=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:50+Math.sin(t/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2,fillStyle:"rgba(76, 110, 245, 0.3)"}})})})}},f={render:()=>{const e=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(o,{sync:{key:"sparkline",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(d,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(a,{data:Array.from({length:60},(i,t)=>({x:t*1.67,y:50+Math.sin(t/8)*25+Math.random()*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2,fillStyle:"rgba(81, 207, 102, 0.3)"}})]})})}},S={render:()=>{const e=Date.parse("2025-11-01T12:00:00Z"),i=[{id:"t",type:"time",timeZone:"UTC",axis:{position:"bottom",size:50},origin:"x",min:e-1e3*60*60*24*30,max:e},{id:"y",type:"linear",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(o,{sync:{key:"timeseries-sparkline",xViaScaleId:"t",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(d,{makeStyle:()=>({backgroundColor:"#ff6b6b44"})})]}),n.jsx(a,{data:Array.from({length:100},(t,x)=>({x:e-1e3*60*60*24*30+x*1e3*60*60*24*30/100,y:50+Math.sin(x/10)*25+Math.random()*10})),xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:2,fillStyle:"rgba(255, 107, 107, 0.2)"}})]})})}},b={render:()=>{const e=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(o,{sync:{key:"multi-sparkline",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(d,{makeStyle:()=>({backgroundColor:"#ffd43b44"})})]}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:30+Math.sin(t/5)*20})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:2,fillStyle:"rgba(255, 107, 107, 0.2)"}}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:50+Math.cos(t/6)*25})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2,fillStyle:"rgba(81, 207, 102, 0.2)"}}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:70+Math.sin(t/4)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2,fillStyle:"rgba(76, 110, 245, 0.2)"}})]})})}},k={render:()=>{const e=[{id:"x",type:"linear",axis:null,origin:"x",min:0,max:100},{id:"y",type:"linear",axis:null,origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px"},children:[n.jsx("h3",{style:{margin:"0 0 5px 0"},children:"Sales Trend"}),n.jsx(l,{style:{width:"200px",height:"50px"},configuration:{padding:{bottom:5,left:5,right:5,top:5},scales:e},children:n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:50+Math.sin(t/3)*20+Math.random()*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:1.5,fillStyle:"rgba(81, 207, 102, 0.3)"}})})]}),n.jsxs("div",{style:{marginBottom:"10px"},children:[n.jsx("h3",{style:{margin:"0 0 5px 0"},children:"Website Traffic"}),n.jsx(l,{style:{width:"200px",height:"50px"},configuration:{padding:{bottom:5,left:5,right:5,top:5},scales:e},children:n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:40+Math.cos(t/4)*30+Math.random()*10})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:1.5,fillStyle:"rgba(76, 110, 245, 0.3)"}})})]}),n.jsxs("div",{children:[n.jsx("h3",{style:{margin:"0 0 5px 0"},children:"Server Load"}),n.jsx(l,{style:{width:"200px",height:"50px"},configuration:{padding:{bottom:5,left:5,right:5,top:5},scales:e},children:n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:60+Math.sin(t/2)*25+Math.random()*12})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:1.5,fillStyle:"rgba(255, 107, 107, 0.3)"}})})]})]})}},u={render:()=>{const e=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:50},origin:"y",min:80,max:120}],i=100,t=Array.from({length:100},(x,c)=>{const A=c/100*10,W=Math.random()*4-2,h=Math.sin(c/10)*3;return{x:c,y:i+A+W+h}});return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(o,{sync:{key:"stock",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(d,{makeStyle:()=>({backgroundColor:"#51cf6644"})})]}),n.jsx(a,{data:t,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2,fillStyle:"rgba(81, 207, 102, 0.2)"}})]})})}},I={render:()=>{const e=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(o,{sync:{key:"volatile",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(d,{makeStyle:()=>({backgroundColor:"#ed893644"})})]}),n.jsx(a,{data:Array.from({length:80},(i,t)=>({x:t*1.25,y:50+Math.random()*40-20+Math.sin(t/10)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#e67700",lineWidth:2,fillStyle:"rgba(237, 137, 54, 0.2)"}})]})})}},j={render:()=>{const e=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(o,{sync:{key:"fills",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(d,{makeStyle:()=>({backgroundColor:"#9f7aea44"})})]}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:25+Math.sin(t/5)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:2,fillStyle:"rgba(255, 107, 107, 0.1)"}}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:50+Math.cos(t/6)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2,fillStyle:"rgba(81, 207, 102, 0.3)"}}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:75+Math.sin(t/4)*10})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2,fillStyle:"rgba(76, 110, 245, 0.5)"}})]})})}},v={render:()=>{const e=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(o,{sync:{key:"stroke-only",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(d,{makeStyle:()=>({backgroundColor:"#f0639744"})})]}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:25+Math.sin(t/5)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:1}}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:50+Math.cos(t/6)*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:75+Math.sin(t/4)*10})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:3}})]})})}},C={render:()=>{const e=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(o,{sync:{key:"fill-only",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(d,{makeStyle:()=>({backgroundColor:"#fab00544"})})]}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:25+Math.sin(t/5)*15})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(255, 107, 107, 0.4)"}}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:50+Math.cos(t/6)*15})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(81, 207, 102, 0.5)"}}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:75+Math.sin(t/4)*10})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(76, 110, 245, 0.6)"}})]})})}},P={render:()=>{const e=[{id:"x",type:"linear",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",type:"linear",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(o,{sync:{key:"mixed",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(s,{}),n.jsx(d,{makeStyle:()=>({backgroundColor:"#e64980aa"})})]}),n.jsx(a,{data:Array.from({length:50},(i,t)=>({x:t*2,y:20+Math.sin(t/5)*12})),xScaleId:"x",yScaleId:"y",stroked:!0,style:{fillStyle:"#33000033",strokeStyle:"#ff6b6b",lineWidth:2}})]})})}},M={render:()=>{const e=[{id:"x",type:"linear",axis:null,origin:"x",min:0,max:100},{id:"y",type:"linear",axis:null,origin:"y",min:-50,max:100}];return n.jsxs("div",{style:{padding:"20px",display:"flex",gap:"20px",flexWrap:"wrap"},children:[n.jsxs("div",{style:{flex:"1",minWidth:"200px"},children:[n.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Stroke Only"}),n.jsxs("div",{style:{marginBottom:"15px",padding:"10px",background:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:"CPU Usage"}),n.jsx(l,{style:{width:"100%",height:"60px"},configuration:{padding:{bottom:5,left:5,right:5,top:5},scales:e},children:n.jsx(a,{data:Array.from({length:40},(i,t)=>({x:t*2.5,y:Math.sin(t/3)*25+Math.random()*10})),xScaleId:"x",yScaleId:"y",stroked:!0,style:{fillStyle:"#4c6ef577",strokeStyle:"#4c6ef5",lineWidth:2}})})]}),n.jsxs("div",{style:{marginBottom:"15px",padding:"10px",background:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:"Network Traffic"}),n.jsx(l,{style:{width:"100%",height:"60px"},configuration:{padding:{bottom:5,left:5,right:5,top:5},scales:e},children:n.jsx(a,{data:Array.from({length:40},(i,t)=>({x:t*2.5,y:60+Math.cos(t/4)*20+Math.random()*15})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:1.5}})})]})]}),n.jsxs("div",{style:{flex:"1",minWidth:"200px"},children:[n.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Fill Only"}),n.jsxs("div",{style:{marginBottom:"15px",padding:"10px",background:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:"Revenue"}),n.jsx(l,{style:{width:"100%",height:"60px"},configuration:{padding:{bottom:5,left:5,right:5,top:5},scales:e},children:n.jsx(a,{data:Array.from({length:40},(i,t)=>({x:t*2.5,y:40+Math.sin(t/5)*25+Math.random()*10})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(81, 207, 102, 0.6)"}})})]}),n.jsxs("div",{style:{marginBottom:"15px",padding:"10px",background:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:"Active Users"}),n.jsx(l,{style:{width:"100%",height:"60px"},configuration:{padding:{bottom:5,left:5,right:5,top:5},scales:e},children:n.jsx(a,{data:Array.from({length:40},(i,t)=>({x:t*2.5,y:55+Math.cos(t/4)*30+Math.random()*8})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(255, 107, 107, 0.5)"}})})]})]}),n.jsxs("div",{style:{flex:"1",minWidth:"200px"},children:[n.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Stroke + Fill"}),n.jsxs("div",{style:{marginBottom:"15px",padding:"10px",background:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:"Storage Usage"}),n.jsx(l,{style:{width:"100%",height:"60px"},configuration:{padding:{bottom:5,left:5,right:5,top:5},scales:e},children:n.jsx(a,{data:Array.from({length:40},(i,t)=>({x:t*2.5,y:45+Math.sin(t/4)*20+Math.random()*12})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#e67700",lineWidth:2,fillStyle:"rgba(237, 137, 54, 0.3)"}})})]}),n.jsxs("div",{style:{marginBottom:"15px",padding:"10px",background:"#f8f9fa",borderRadius:"8px"},children:[n.jsx("div",{style:{fontSize:"12px",color:"#666",marginBottom:"5px"},children:"API Latency"}),n.jsx(l,{style:{width:"100%",height:"60px"},configuration:{padding:{bottom:5,left:5,right:5,top:5},scales:e},children:n.jsx(a,{data:Array.from({length:40},(i,t)=>({x:t*2.5,y:50+Math.cos(t/3)*25+Math.random()*10})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#9775fa",lineWidth:1.5,fillStyle:"rgba(151, 117, 250, 0.25)"}})})]})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2,
          fillStyle: "rgba(76, 110, 245, 0.3)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
          key: "sparkline",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#51cf6644"
          })} />
          </ChartAreaInteractions>

          <SparklinePlot data={Array.from({
          length: 60
        }, (_, i) => ({
          x: i * 1.67,
          y: 50 + Math.sin(i / 8) * 25 + Math.random() * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2,
          fillStyle: "rgba(81, 207, 102, 0.3)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      min: refPoint - 1000 * 60 * 60 * 24 * 30,
      // 30 days ago
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
          key: "timeseries-sparkline",
          xViaScaleId: "t",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ff6b6b44"
          })} />
          </ChartAreaInteractions>

          <SparklinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: refPoint - 1000 * 60 * 60 * 24 * 30 + i * 1000 * 60 * 60 * 24 * 30 / 100,
          y: 50 + Math.sin(i / 10) * 25 + Math.random() * 10
        }))} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2,
          fillStyle: "rgba(255, 107, 107, 0.2)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
          key: "multi-sparkline",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ffd43b44"
          })} />
          </ChartAreaInteractions>

          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 30 + Math.sin(i / 5) * 20
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2,
          fillStyle: "rgba(255, 107, 107, 0.2)"
        }} />

          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 6) * 25
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2,
          fillStyle: "rgba(81, 207, 102, 0.2)"
        }} />

          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 70 + Math.sin(i / 4) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2,
          fillStyle: "rgba(76, 110, 245, 0.2)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: null,
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      type: "linear",
      axis: null,
      origin: "y",
      min: 0,
      max: 100
    }];
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "10px"
      }}>
          <h3 style={{
          margin: "0 0 5px 0"
        }}>Sales Trend</h3>
          <CanPlot style={{
          width: "200px",
          height: "50px"
        }} configuration={{
          padding: {
            bottom: 5,
            left: 5,
            right: 5,
            top: 5
          },
          scales
        }}>
            <SparklinePlot data={Array.from({
            length: 30
          }, (_, i) => ({
            x: i * 3.33,
            y: 50 + Math.sin(i / 3) * 20 + Math.random() * 15
          }))} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#51cf66",
            lineWidth: 1.5,
            fillStyle: "rgba(81, 207, 102, 0.3)"
          }} />
          </CanPlot>
        </div>

        <div style={{
        marginBottom: "10px"
      }}>
          <h3 style={{
          margin: "0 0 5px 0"
        }}>Website Traffic</h3>
          <CanPlot style={{
          width: "200px",
          height: "50px"
        }} configuration={{
          padding: {
            bottom: 5,
            left: 5,
            right: 5,
            top: 5
          },
          scales
        }}>
            <SparklinePlot data={Array.from({
            length: 30
          }, (_, i) => ({
            x: i * 3.33,
            y: 40 + Math.cos(i / 4) * 30 + Math.random() * 10
          }))} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#4c6ef5",
            lineWidth: 1.5,
            fillStyle: "rgba(76, 110, 245, 0.3)"
          }} />
          </CanPlot>
        </div>

        <div>
          <h3 style={{
          margin: "0 0 5px 0"
        }}>Server Load</h3>
          <CanPlot style={{
          width: "200px",
          height: "50px"
        }} configuration={{
          padding: {
            bottom: 5,
            left: 5,
            right: 5,
            top: 5
          },
          scales
        }}>
            <SparklinePlot data={Array.from({
            length: 30
          }, (_, i) => ({
            x: i * 3.33,
            y: 60 + Math.sin(i / 2) * 25 + Math.random() * 12
          }))} xScaleId="x" yScaleId="y" style={{
            strokeStyle: "#ff6b6b",
            lineWidth: 1.5,
            fillStyle: "rgba(255, 107, 107, 0.3)"
          }} />
          </CanPlot>
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
        size: 50
      },
      origin: "y",
      min: 80,
      max: 120
    }];

    // Generate stock-like data with trend
    const basePrice = 100;
    const data = Array.from({
      length: 100
    }, (_, i) => {
      const trend = i / 100 * 10; // Upward trend
      const volatility = Math.random() * 4 - 2; // Random fluctuation
      const wave = Math.sin(i / 10) * 3; // Small wave pattern
      return {
        x: i,
        y: basePrice + trend + volatility + wave
      };
    });
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
          key: "stock",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#51cf6644"
          })} />
          </ChartAreaInteractions>

          <SparklinePlot data={data} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2,
          fillStyle: "rgba(81, 207, 102, 0.2)"
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
          key: "volatile",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ed893644"
          })} />
          </ChartAreaInteractions>

          <SparklinePlot data={Array.from({
          length: 80
        }, (_, i) => ({
          x: i * 1.25,
          y: 50 + Math.random() * 40 - 20 + Math.sin(i / 10) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#e67700",
          lineWidth: 2,
          fillStyle: "rgba(237, 137, 54, 0.2)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
          key: "fills",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#9f7aea44"
          })} />
          </ChartAreaInteractions>

          {/* Light fill */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 25 + Math.sin(i / 5) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2,
          fillStyle: "rgba(255, 107, 107, 0.1)"
        }} />

          {/* Medium fill */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 6) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2,
          fillStyle: "rgba(81, 207, 102, 0.3)"
        }} />

          {/* Heavy fill */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 75 + Math.sin(i / 4) * 10
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2,
          fillStyle: "rgba(76, 110, 245, 0.5)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
          key: "stroke-only",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#f0639744"
          })} />
          </ChartAreaInteractions>

          {/* Thin stroke, no fill */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 25 + Math.sin(i / 5) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 1
        }} />

          {/* Medium stroke, no fill */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 6) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />

          {/* Thick stroke, no fill */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 75 + Math.sin(i / 4) * 10
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 3
        }} />
        </CanPlot>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
          key: "fill-only",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#fab00544"
          })} />
          </ChartAreaInteractions>

          {/* Light fill, no stroke */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 25 + Math.sin(i / 5) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(255, 107, 107, 0.4)"
        }} />

          {/* Medium fill, no stroke */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.cos(i / 6) * 15
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(81, 207, 102, 0.5)"
        }} />

          {/* Solid fill, no stroke */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 75 + Math.sin(i / 4) * 10
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(76, 110, 245, 0.6)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
          key: "mixed",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#e64980aa"
          })} />
          </ChartAreaInteractions>

          {/* Stroke only - outline only */}
          <SparklinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 20 + Math.sin(i / 5) * 12
        }))} xScaleId="x" yScaleId="y" stroked style={{
          fillStyle: "#33000033",
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      type: "linear",
      axis: null,
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y",
      type: "linear",
      axis: null,
      origin: "y",
      min: -50,
      max: 100
    }];
    return <div style={{
      padding: "20px",
      display: "flex",
      gap: "20px",
      flexWrap: "wrap"
    }}>
        {/* Stroke only sparklines */}
        <div style={{
        flex: "1",
        minWidth: "200px"
      }}>
          <h3 style={{
          margin: "0 0 10px 0"
        }}>Stroke Only</h3>
          <div style={{
          marginBottom: "15px",
          padding: "10px",
          background: "#f8f9fa",
          borderRadius: "8px"
        }}>
            <div style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "5px"
          }}>
              CPU Usage
            </div>
            <CanPlot style={{
            width: "100%",
            height: "60px"
          }} configuration={{
            padding: {
              bottom: 5,
              left: 5,
              right: 5,
              top: 5
            },
            scales
          }}>
              <SparklinePlot data={Array.from({
              length: 40
            }, (_, i) => ({
              x: i * 2.5,
              y: Math.sin(i / 3) * 25 + Math.random() * 10
            }))} xScaleId="x" yScaleId="y" stroked style={{
              fillStyle: "#4c6ef577",
              strokeStyle: "#4c6ef5",
              lineWidth: 2
            }} />
            </CanPlot>
          </div>

          <div style={{
          marginBottom: "15px",
          padding: "10px",
          background: "#f8f9fa",
          borderRadius: "8px"
        }}>
            <div style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "5px"
          }}>
              Network Traffic
            </div>
            <CanPlot style={{
            width: "100%",
            height: "60px"
          }} configuration={{
            padding: {
              bottom: 5,
              left: 5,
              right: 5,
              top: 5
            },
            scales
          }}>
              <SparklinePlot data={Array.from({
              length: 40
            }, (_, i) => ({
              x: i * 2.5,
              y: 60 + Math.cos(i / 4) * 20 + Math.random() * 15
            }))} xScaleId="x" yScaleId="y" style={{
              strokeStyle: "#51cf66",
              lineWidth: 1.5
            }} />
            </CanPlot>
          </div>
        </div>

        {/* Fill only sparklines */}
        <div style={{
        flex: "1",
        minWidth: "200px"
      }}>
          <h3 style={{
          margin: "0 0 10px 0"
        }}>Fill Only</h3>
          <div style={{
          marginBottom: "15px",
          padding: "10px",
          background: "#f8f9fa",
          borderRadius: "8px"
        }}>
            <div style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "5px"
          }}>
              Revenue
            </div>
            <CanPlot style={{
            width: "100%",
            height: "60px"
          }} configuration={{
            padding: {
              bottom: 5,
              left: 5,
              right: 5,
              top: 5
            },
            scales
          }}>
              <SparklinePlot data={Array.from({
              length: 40
            }, (_, i) => ({
              x: i * 2.5,
              y: 40 + Math.sin(i / 5) * 25 + Math.random() * 10
            }))} xScaleId="x" yScaleId="y" style={{
              fillStyle: "rgba(81, 207, 102, 0.6)"
            }} />
            </CanPlot>
          </div>

          <div style={{
          marginBottom: "15px",
          padding: "10px",
          background: "#f8f9fa",
          borderRadius: "8px"
        }}>
            <div style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "5px"
          }}>
              Active Users
            </div>
            <CanPlot style={{
            width: "100%",
            height: "60px"
          }} configuration={{
            padding: {
              bottom: 5,
              left: 5,
              right: 5,
              top: 5
            },
            scales
          }}>
              <SparklinePlot data={Array.from({
              length: 40
            }, (_, i) => ({
              x: i * 2.5,
              y: 55 + Math.cos(i / 4) * 30 + Math.random() * 8
            }))} xScaleId="x" yScaleId="y" style={{
              fillStyle: "rgba(255, 107, 107, 0.5)"
            }} />
            </CanPlot>
          </div>
        </div>

        {/* Stroke + Fill sparklines */}
        <div style={{
        flex: "1",
        minWidth: "200px"
      }}>
          <h3 style={{
          margin: "0 0 10px 0"
        }}>Stroke + Fill</h3>
          <div style={{
          marginBottom: "15px",
          padding: "10px",
          background: "#f8f9fa",
          borderRadius: "8px"
        }}>
            <div style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "5px"
          }}>
              Storage Usage
            </div>
            <CanPlot style={{
            width: "100%",
            height: "60px"
          }} configuration={{
            padding: {
              bottom: 5,
              left: 5,
              right: 5,
              top: 5
            },
            scales
          }}>
              <SparklinePlot data={Array.from({
              length: 40
            }, (_, i) => ({
              x: i * 2.5,
              y: 45 + Math.sin(i / 4) * 20 + Math.random() * 12
            }))} xScaleId="x" yScaleId="y" style={{
              strokeStyle: "#e67700",
              lineWidth: 2,
              fillStyle: "rgba(237, 137, 54, 0.3)"
            }} />
            </CanPlot>
          </div>

          <div style={{
          marginBottom: "15px",
          padding: "10px",
          background: "#f8f9fa",
          borderRadius: "8px"
        }}>
            <div style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "5px"
          }}>
              API Latency
            </div>
            <CanPlot style={{
            width: "100%",
            height: "60px"
          }} configuration={{
            padding: {
              bottom: 5,
              left: 5,
              right: 5,
              top: 5
            },
            scales
          }}>
              <SparklinePlot data={Array.from({
              length: 40
            }, (_, i) => ({
              x: i * 2.5,
              y: 50 + Math.cos(i / 3) * 25 + Math.random() * 10
            }))} xScaleId="x" yScaleId="y" style={{
              strokeStyle: "#9775fa",
              lineWidth: 1.5,
              fillStyle: "rgba(151, 117, 250, 0.25)"
            }} />
            </CanPlot>
          </div>
        </div>
      </div>;
  }
}`,...M.parameters?.docs?.source}}};const G=["Basic","WithInteractions","TimeSeries","MultipleSparklines","MinimalSparkline","StockPrice","VolatileData","DifferentFillStyles","WithStrokeOnly","WithFillOnly","MixedStrokeAndFill","DashboardStyle"];export{m as Basic,M as DashboardStyle,j as DifferentFillStyles,k as MinimalSparkline,P as MixedStrokeAndFill,b as MultipleSparklines,u as StockPrice,S as TimeSeries,I as VolatileData,C as WithFillOnly,f as WithInteractions,v as WithStrokeOnly,G as __namedExportsOrder,N as default};
