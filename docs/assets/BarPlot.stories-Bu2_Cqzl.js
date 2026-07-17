import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./iframe-Aps066pu.js";import{C as s}from"./frameContext-DY6mtHib.js";import{B as o}from"./BarPlot-8BY-ENbJ.js";import{L as w}from"./LinePlot-Dz_NYnX4.js";import{C as B}from"./ChartAreaInteractions-BfourqYk.js";import{C as W}from"./CrossHair-CDoG9WsS.js";import"./preload-helper-PPVm8Dsz.js";const L={component:s,parameters:{layout:"fullscreen"},tags:["autodocs"]};function v(e,t,i=0){const a=t/2;return e.map(({x:r,y:x})=>{const l=r+i*t;return{x:[l-a,l+a],y:x}})}const g={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=[{x:[.75,1.25],y:30},{x:[1.75,2.25],y:45},{x:[2.75,3.25],y:60},{x:[3.75,4.25],y:35},{x:[4.75,5.25],y:70},{x:[5.75,6.25],y:55},{x:[6.75,7.25],y:80},{x:[7.75,8.25],y:65},{x:[8.75,9.25],y:50},{x:[9.75,10.25],y:75}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:n.jsx(o,{data:t,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}})})})}},f={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:8},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55}],i=[{x:1,y:40},{x:2,y:35},{x:3,y:50},{x:4,y:45},{x:5,y:60},{x:6,y:65}],a=[{x:1,y:25},{x:2,y:55},{x:3,y:40},{x:4,y:50},{x:5,y:45},{x:6,y:70}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(o,{data:v(t,.25,-1),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}}),n.jsx(o,{data:v(i,.25,0),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#51cf66",strokeStyle:"#37b24d",lineWidth:1}}),n.jsx(o,{data:v(a,.25,1),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#f03e3e",lineWidth:1}})]})})}},h={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=[{x:[.7,1.3],y:30},{x:[1.7,2.3],y:45},{x:[2.7,3.3],y:60},{x:[3.7,4.3],y:35},{x:[4.7,5.3],y:70},{x:[5.7,6.3],y:55},{x:[6.7,7.3],y:80},{x:[7.7,8.3],y:65},{x:[8.7,9.3],y:50},{x:[9.7,10.3],y:75}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(o,{data:t,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#9775fa",strokeStyle:"#7950f2",lineWidth:2}}),n.jsx(B,{children:n.jsx(W,{})})]})})}},S={render:()=>{const e=new Date("2024-01-01T00:00:00Z"),t=1440*60*1e3,i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:e.getTime(),max:e.getTime()+30*t},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:500}],a=.4*t,r=Array.from({length:30},(x,l)=>{const p=e.getTime()+l*t;return{x:[p-a,p+a],y:200+Math.sin(l/5)*100+Math.random()*50}});return n.jsx("div",{style:{padding:"20px"},children:n.jsx(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:n.jsx(o,{data:r,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#20c997",strokeStyle:"#12b886",lineWidth:1}})})})}},u={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:13},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=[{x:[.8,1.2],y:40},{x:[1.8,2.2],y:60},{x:[2.8,3.2],y:55}],i=[{x:[4.8,5.2],y:50},{x:[5.8,6.2],y:70},{x:[6.8,7.2],y:45}],a=[{x:[8.65,9.35],y:65},{x:[9.65,10.35],y:55},{x:[10.65,11.35],y:80}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(o,{data:t,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5"}}),n.jsx(o,{data:i,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:3}}),n.jsx(o,{data:a,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#f03e3e",lineWidth:1}})]})})}},b={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=[{x:[.75,1.25],y:30},{x:[1.75,2.25],y:45},{x:[2.75,3.25],y:60},{x:[3.75,4.25],y:35},{x:[4.75,5.25],y:70},{x:[5.75,6.25],y:55},{x:[6.75,7.25],y:80},{x:[7.75,8.25],y:65},{x:[8.75,9.25],y:50},{x:[9.75,10.25],y:75}],i=[{x:1,y:40},{x:2,y:50},{x:3,y:55},{x:4,y:52},{x:5,y:60},{x:6,y:62},{x:7,y:68},{x:8,y:70},{x:9,y:65},{x:10,y:72}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(o,{data:t,xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(76, 110, 245, 0.5)",strokeStyle:"#4c6ef5",lineWidth:1}}),n.jsx(w,{data:i,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:3}})]})})}},I={render:()=>{const[e,t]=P.useState({min:0,max:12}),[i,a]=P.useState({min:0,max:100}),r=()=>{const y=e.max-e.min,d=i.max-i.min,c=(e.max+e.min)/2,m=(i.max+i.min)/2;t({min:c-y*.4,max:c+y*.4}),a({min:m-d*.4,max:m+d*.4})},x=()=>{const y=e.max-e.min,d=i.max-i.min,c=(e.max+e.min)/2,m=(i.max+i.min)/2;t({min:Math.max(0,c-y*.625),max:Math.min(12,c+y*.625)}),a({min:Math.max(0,m-d*.625),max:Math.min(100,m+d*.625)})},l=()=>{t({min:0,max:12}),a({min:0,max:100})},p=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:e.min,max:e.max},{id:"y",axis:{position:"left",size:40},origin:"y",min:i.min,max:i.max}],j=[{x:[.75,1.25],y:30},{x:[1.75,2.25],y:45},{x:[2.75,3.25],y:60},{x:[3.75,4.25],y:35},{x:[4.75,5.25],y:70},{x:[5.75,6.25],y:55},{x:[6.75,7.25],y:80},{x:[7.75,8.25],y:65},{x:[8.75,9.25],y:50},{x:[9.75,10.25],y:75}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px"},children:[n.jsx("button",{onClick:r,style:{padding:"8px 16px",backgroundColor:"#4c6ef5",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Zoom In"}),n.jsx("button",{onClick:x,style:{padding:"8px 16px",backgroundColor:"#51cf66",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Zoom Out"}),n.jsx("button",{onClick:l,style:{padding:"8px 16px",backgroundColor:"#868e96",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Reset"})]}),n.jsx(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:p},children:n.jsx(o,{data:j,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}})})]})}},C={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=[{x:[.7,1.3],y:30},{x:[1.7,2.3],y:45},{x:[2.7,3.3],y:60},{x:[3.7,4.3],y:35},{x:[4.7,5.3],y:70},{x:[5.7,6.3],y:55},{x:[6.7,7.3],y:80},{x:[7.7,8.3],y:65},{x:[8.7,9.3],y:50},{x:[9.7,10.3],y:75}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:n.jsx(o,{data:t,xScaleId:"x",yScaleId:"y",radius:8,style:{fillStyle:"#7950f2",strokeStyle:"#5f3dc4",lineWidth:2}})})})}},z={render:()=>{const[e,t]=P.useState(()=>Array.from({length:1e3},(a,r)=>({x:[r-.4,r+.4],y:Math.random()*100})));P.useEffect(()=>{const a=setInterval(()=>{t(r=>r.map(x=>({...x,y:Math.max(0,Math.min(100,x.y+(Math.random()-.5)*10))})))},16);return()=>clearInterval(a)},[]);const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:1e3},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("p",{style:{marginBottom:"10px"},children:"Rendering 1000 bars with updates every 16ms (~60fps)"}),n.jsx(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:n.jsx(o,{data:e,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:0}})})]})}},R={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=[{x:[.2,1.8],y:70},{x:[2.2,3.8],y:60},{x:[4.2,5.8],y:90},{x:[6.2,7.8],y:80},{x:[8.2,9.8],y:70}],i=[{x:[.5,1.5],y:50},{x:[2.5,3.5],y:80},{x:[4.5,5.5],y:70},{x:[6.5,7.5],y:60},{x:[8.5,9.5],y:50}],a=[{x:[.8,1.2],y:80},{x:[2.8,3.2],y:60},{x:[4.8,5.2],y:50},{x:[6.8,7.2],y:40},{x:[8.8,9.2],y:90}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsx(o,{data:t,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:1},globalAlpha:1}),n.jsx(o,{data:i,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#51cf66",strokeStyle:"#2b8a3e",lineWidth:1},globalAlpha:.6}),n.jsx(o,{data:a,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1},globalAlpha:.3})]})})}},k={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:50}],t=[{x:[0,10],y:25},{x:[10,35],y:40},{x:[35,45],y:15},{x:[45,80],y:30},{x:[80,100],y:45}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(s,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:n.jsx(o,{data:t,xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}})})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 12
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
    const data: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0.75, 1.25],
      y: 30
    }, {
      x: [1.75, 2.25],
      y: 45
    }, {
      x: [2.75, 3.25],
      y: 60
    }, {
      x: [3.75, 4.25],
      y: 35
    }, {
      x: [4.75, 5.25],
      y: 70
    }, {
      x: [5.75, 6.25],
      y: 55
    }, {
      x: [6.75, 7.25],
      y: 80
    }, {
      x: [7.75, 8.25],
      y: 65
    }, {
      x: [8.75, 9.25],
      y: 50
    }, {
      x: [9.75, 10.25],
      y: 75
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
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
      max: 8
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
    const rawSeries1 = [{
      x: 1,
      y: 30
    }, {
      x: 2,
      y: 45
    }, {
      x: 3,
      y: 60
    }, {
      x: 4,
      y: 35
    }, {
      x: 5,
      y: 70
    }, {
      x: 6,
      y: 55
    }];
    const rawSeries2 = [{
      x: 1,
      y: 40
    }, {
      x: 2,
      y: 35
    }, {
      x: 3,
      y: 50
    }, {
      x: 4,
      y: 45
    }, {
      x: 5,
      y: 60
    }, {
      x: 6,
      y: 65
    }];
    const rawSeries3 = [{
      x: 1,
      y: 25
    }, {
      x: 2,
      y: 55
    }, {
      x: 3,
      y: 40
    }, {
      x: 4,
      y: 50
    }, {
      x: 5,
      y: 45
    }, {
      x: 6,
      y: 70
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
          <BarPlot data={toBars(rawSeries1, 0.25, -1)} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} />
          <BarPlot data={toBars(rawSeries2, 0.25, 0)} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#51cf66",
          strokeStyle: "#37b24d",
          lineWidth: 1
        }} />
          <BarPlot data={toBars(rawSeries3, 0.25, 1)} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#f03e3e",
          lineWidth: 1
        }} />
        </CanPlot>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 12
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
    const data: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0.7, 1.3],
      y: 30
    }, {
      x: [1.7, 2.3],
      y: 45
    }, {
      x: [2.7, 3.3],
      y: 60
    }, {
      x: [3.7, 4.3],
      y: 35
    }, {
      x: [4.7, 5.3],
      y: 70
    }, {
      x: [5.7, 6.3],
      y: 55
    }, {
      x: [6.7, 7.3],
      y: 80
    }, {
      x: [7.7, 8.3],
      y: 65
    }, {
      x: [8.7, 9.3],
      y: 50
    }, {
      x: [9.7, 10.3],
      y: 75
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#9775fa",
          strokeStyle: "#7950f2",
          lineWidth: 2
        }} />
          <ChartAreaInteractions>
            <Crosshair />
          </ChartAreaInteractions>
        </CanPlot>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const now = new Date("2024-01-01T00:00:00Z");
    const dayMs = 24 * 60 * 60 * 1000;
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: now.getTime(),
      max: now.getTime() + 30 * dayMs // 30 days
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: 0,
      max: 500
    }];
    const halfBar = 0.4 * dayMs;
    const data: Array<{
      x: [number, number];
      y: number;
    }> = Array.from({
      length: 30
    }, (_, i) => {
      const center = now.getTime() + i * dayMs;
      return {
        x: [center - halfBar, center + halfBar] as [number, number],
        y: 200 + Math.sin(i / 5) * 100 + Math.random() * 50
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#20c997",
          strokeStyle: "#12b886",
          lineWidth: 1
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
      max: 13
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
    const solidBars: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0.8, 1.2],
      y: 40
    }, {
      x: [1.8, 2.2],
      y: 60
    }, {
      x: [2.8, 3.2],
      y: 55
    }];
    const thickStroke: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [4.8, 5.2],
      y: 50
    }, {
      x: [5.8, 6.2],
      y: 70
    }, {
      x: [6.8, 7.2],
      y: 45
    }];
    const wideBars: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [8.65, 9.35],
      y: 65
    }, {
      x: [9.65, 10.35],
      y: 55
    }, {
      x: [10.65, 11.35],
      y: 80
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
          <BarPlot data={solidBars} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5"
        }} />
          <BarPlot data={thickStroke} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#51cf66",
          strokeStyle: "#2f9e44",
          lineWidth: 3
        }} />
          <BarPlot data={wideBars} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#f03e3e",
          lineWidth: 1
        }} />
        </CanPlot>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 12
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
    const barData: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0.75, 1.25],
      y: 30
    }, {
      x: [1.75, 2.25],
      y: 45
    }, {
      x: [2.75, 3.25],
      y: 60
    }, {
      x: [3.75, 4.25],
      y: 35
    }, {
      x: [4.75, 5.25],
      y: 70
    }, {
      x: [5.75, 6.25],
      y: 55
    }, {
      x: [6.75, 7.25],
      y: 80
    }, {
      x: [7.75, 8.25],
      y: 65
    }, {
      x: [8.75, 9.25],
      y: 50
    }, {
      x: [9.75, 10.25],
      y: 75
    }];
    const lineData = [{
      x: 1,
      y: 40
    }, {
      x: 2,
      y: 50
    }, {
      x: 3,
      y: 55
    }, {
      x: 4,
      y: 52
    }, {
      x: 5,
      y: 60
    }, {
      x: 6,
      y: 62
    }, {
      x: 7,
      y: 68
    }, {
      x: 8,
      y: 70
    }, {
      x: 9,
      y: 65
    }, {
      x: 10,
      y: 72
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
          <BarPlot data={barData} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(76, 110, 245, 0.5)",
          strokeStyle: "#4c6ef5",
          lineWidth: 1
        }} />
          <LinePlot data={lineData} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 3
        }} />
        </CanPlot>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({
      min: 0,
      max: 12
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange, setYRange] = useState({
      min: 0,
      max: 100
    });
    const zoomIn = () => {
      const xRangeSize = xRange.max - xRange.min;
      const yRangeSize = yRange.max - yRange.min;
      const xCenter = (xRange.max + xRange.min) / 2;
      const yCenter = (yRange.max + yRange.min) / 2;
      setXRange({
        min: xCenter - xRangeSize * 0.4,
        max: xCenter + xRangeSize * 0.4
      });
      setYRange({
        min: yCenter - yRangeSize * 0.4,
        max: yCenter + yRangeSize * 0.4
      });
    };
    const zoomOut = () => {
      const xRangeSize = xRange.max - xRange.min;
      const yRangeSize = yRange.max - yRange.min;
      const xCenter = (xRange.max + xRange.min) / 2;
      const yCenter = (yRange.max + yRange.min) / 2;
      setXRange({
        min: Math.max(0, xCenter - xRangeSize * 0.625),
        max: Math.min(12, xCenter + xRangeSize * 0.625)
      });
      setYRange({
        min: Math.max(0, yCenter - yRangeSize * 0.625),
        max: Math.min(100, yCenter + yRangeSize * 0.625)
      });
    };
    const reset = () => {
      setXRange({
        min: 0,
        max: 12
      });
      setYRange({
        min: 0,
        max: 100
      });
    };
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: xRange.min,
      max: xRange.max
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 40
      },
      origin: "y",
      min: yRange.min,
      max: yRange.max
    }];
    const data: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0.75, 1.25],
      y: 30
    }, {
      x: [1.75, 2.25],
      y: 45
    }, {
      x: [2.75, 3.25],
      y: 60
    }, {
      x: [3.75, 4.25],
      y: 35
    }, {
      x: [4.75, 5.25],
      y: 70
    }, {
      x: [5.75, 6.25],
      y: 55
    }, {
      x: [6.75, 7.25],
      y: 80
    }, {
      x: [7.75, 8.25],
      y: 65
    }, {
      x: [8.75, 9.25],
      y: 50
    }, {
      x: [9.75, 10.25],
      y: 75
    }];
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "10px",
        display: "flex",
        gap: "10px"
      }}>
          <button onClick={zoomIn} style={{
          padding: "8px 16px",
          backgroundColor: "#4c6ef5",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
            Zoom In
          </button>
          <button onClick={zoomOut} style={{
          padding: "8px 16px",
          backgroundColor: "#51cf66",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
            Zoom Out
          </button>
          <button onClick={reset} style={{
          padding: "8px 16px",
          backgroundColor: "#868e96",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
            Reset
          </button>
        </div>
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} />
        </CanPlot>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 12
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
    const data: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0.7, 1.3],
      y: 30
    }, {
      x: [1.7, 2.3],
      y: 45
    }, {
      x: [2.7, 3.3],
      y: 60
    }, {
      x: [3.7, 4.3],
      y: 35
    }, {
      x: [4.7, 5.3],
      y: 70
    }, {
      x: [5.7, 6.3],
      y: 55
    }, {
      x: [6.7, 7.3],
      y: 80
    }, {
      x: [7.7, 8.3],
      y: 65
    }, {
      x: [8.7, 9.3],
      y: 50
    }, {
      x: [9.7, 10.3],
      y: 75
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" radius={8} style={{
          fillStyle: "#7950f2",
          strokeStyle: "#5f3dc4",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(() => Array.from({
      length: 1000
    }, (_, i) => ({
      x: [i - 0.4, i + 0.4] as [number, number],
      y: Math.random() * 100
    })));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const interval = setInterval(() => {
        setData(prev => prev.map(point => ({
          ...point,
          y: Math.max(0, Math.min(100, point.y + (Math.random() - 0.5) * 10))
        })));
      }, 16);
      return () => clearInterval(interval);
    }, []);
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 1000
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
        <p style={{
        marginBottom: "10px"
      }}>
          Rendering 1000 bars with updates every 16ms (~60fps)
        </p>
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 0
        }} />
        </CanPlot>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 12
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
    const data1: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0.2, 1.8],
      y: 70
    }, {
      x: [2.2, 3.8],
      y: 60
    }, {
      x: [4.2, 5.8],
      y: 90
    }, {
      x: [6.2, 7.8],
      y: 80
    }, {
      x: [8.2, 9.8],
      y: 70
    }];
    const data2: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0.5, 1.5],
      y: 50
    }, {
      x: [2.5, 3.5],
      y: 80
    }, {
      x: [4.5, 5.5],
      y: 70
    }, {
      x: [6.5, 7.5],
      y: 60
    }, {
      x: [8.5, 9.5],
      y: 50
    }];
    const data3: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0.8, 1.2],
      y: 80
    }, {
      x: [2.8, 3.2],
      y: 60
    }, {
      x: [4.8, 5.2],
      y: 50
    }, {
      x: [6.8, 7.2],
      y: 40
    }, {
      x: [8.8, 9.2],
      y: 90
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
          {/* Full opacity (default) */}
          <BarPlot data={data1} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#c92a2a",
          lineWidth: 1
        }} globalAlpha={1} />

          {/* 60% opacity */}
          <BarPlot data={data2} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#51cf66",
          strokeStyle: "#2b8a3e",
          lineWidth: 1
        }} globalAlpha={0.6} />

          {/* 30% opacity */}
          <BarPlot data={data3} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} globalAlpha={0.3} />
        </CanPlot>
      </div>;
  }
}`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
      max: 50
    }];
    const data: Array<{
      x: [number, number];
      y: number;
    }> = [{
      x: [0, 10],
      y: 25
    }, {
      x: [10, 35],
      y: 40
    }, {
      x: [35, 45],
      y: 15
    }, {
      x: [45, 80],
      y: 30
    }, {
      x: [80, 100],
      y: 45
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} />
        </CanPlot>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};const X=["Basic","MultipleBarSeries","WithInteractions","TimeSeries","DifferentStyles","WithLineOverlay","InteractiveZoom","RoundedCorners","Performance","GlobalAlpha","VariableWidth"];export{g as Basic,u as DifferentStyles,R as GlobalAlpha,I as InteractiveZoom,f as MultipleBarSeries,z as Performance,C as RoundedCorners,S as TimeSeries,k as VariableWidth,h as WithInteractions,b as WithLineOverlay,X as __namedExportsOrder,L as default};
