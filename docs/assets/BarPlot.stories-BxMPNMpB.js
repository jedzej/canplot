import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CRxhtb6P.js";import{C as a}from"./frameContext-ClpSaL7J.js";import{B as o}from"./BarPlot-B4urhyTl.js";import{L as z}from"./LinePlot-D8f2Zo0X.js";import{C as W}from"./ChartAreaInteractions-DRUk4mCz.js";import{C as k}from"./CrossHair-EDcW-zYc.js";import"./preload-helper-PPVm8Dsz.js";const Z={component:a,parameters:{layout:"fullscreen"},tags:["autodocs"]},c={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55},{x:7,y:80},{x:8,y:65},{x:9,y:50},{x:10,y:75}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(a,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:n.jsx(o,{data:i,xScaleId:"x",yScaleId:"y",barWidth:.5,xPositionOffset:0,style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}})})})}},m={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:8},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55}],e=[{x:1,y:40},{x:2,y:35},{x:3,y:50},{x:4,y:45},{x:5,y:60},{x:6,y:65}],s=[{x:1,y:25},{x:2,y:55},{x:3,y:40},{x:4,y:50},{x:5,y:45},{x:6,y:70}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(a,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(o,{data:i,xScaleId:"x",yScaleId:"y",barWidth:.25,xPositionOffset:-1,style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}}),n.jsx(o,{data:e,xScaleId:"x",yScaleId:"y",barWidth:.25,xPositionOffset:0,style:{fillStyle:"#51cf66",strokeStyle:"#37b24d",lineWidth:1}}),n.jsx(o,{data:s,xScaleId:"x",yScaleId:"y",barWidth:.25,xPositionOffset:1,style:{fillStyle:"#ff6b6b",strokeStyle:"#f03e3e",lineWidth:1}})]})})}},g={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55},{x:7,y:80},{x:8,y:65},{x:9,y:50},{x:10,y:75}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(a,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(o,{data:i,xScaleId:"x",yScaleId:"y",barWidth:.6,xPositionOffset:0,style:{fillStyle:"#9775fa",strokeStyle:"#7950f2",lineWidth:2}}),n.jsx(W,{children:n.jsx(k,{})})]})})}},p={render:()=>{const t=new Date("2024-01-01T00:00:00Z"),i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:t.getTime(),max:t.getTime()+720*60*60*1e3},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:500}],e=Array.from({length:30},(s,d)=>({x:t.getTime()+d*24*60*60*1e3,y:200+Math.sin(d/5)*100+Math.random()*50}));return n.jsx("div",{style:{padding:"20px"},children:n.jsx(a,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:n.jsx(o,{data:e,xScaleId:"x",yScaleId:"y",barWidth:.8*24*60*60*1e3,xPositionOffset:0,style:{fillStyle:"#20c997",strokeStyle:"#12b886",lineWidth:1}})})})}},f={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:13},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:40},{x:2,y:60},{x:3,y:55}],e=[{x:5,y:50},{x:6,y:70},{x:7,y:45}],s=[{x:9,y:65},{x:10,y:55},{x:11,y:80}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(a,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(o,{data:i,xScaleId:"x",yScaleId:"y",barWidth:.4,xPositionOffset:0,style:{fillStyle:"#4c6ef5"}}),n.jsx(o,{data:e,xScaleId:"x",yScaleId:"y",barWidth:.4,xPositionOffset:0,style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:3}}),n.jsx(o,{data:s,xScaleId:"x",yScaleId:"y",barWidth:.7,xPositionOffset:0,style:{fillStyle:"#ff6b6b",strokeStyle:"#f03e3e",lineWidth:1}})]})})}},h={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55},{x:7,y:80},{x:8,y:65},{x:9,y:50},{x:10,y:75}],e=[{x:1,y:40},{x:2,y:50},{x:3,y:55},{x:4,y:52},{x:5,y:60},{x:6,y:62},{x:7,y:68},{x:8,y:70},{x:9,y:65},{x:10,y:72}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(a,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(o,{data:i,xScaleId:"x",yScaleId:"y",barWidth:.5,xPositionOffset:0,style:{fillStyle:"rgba(76, 110, 245, 0.5)",strokeStyle:"#4c6ef5",lineWidth:1}}),n.jsx(z,{data:e,xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:3}})]})})}},S={render:()=>{const[t,i]=u.useState({min:0,max:12}),[e,s]=u.useState({min:0,max:100}),d=()=>{const x=t.max-t.min,r=e.max-e.min,l=(t.max+t.min)/2,y=(e.max+e.min)/2;i({min:l-x*.4,max:l+x*.4}),s({min:y-r*.4,max:y+r*.4})},I=()=>{const x=t.max-t.min,r=e.max-e.min,l=(t.max+t.min)/2,y=(e.max+e.min)/2;i({min:Math.max(0,l-x*.625),max:Math.min(12,l+x*.625)}),s({min:Math.max(0,y-r*.625),max:Math.min(100,y+r*.625)})},P=()=>{i({min:0,max:12}),s({min:0,max:100})},C=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:t.min,max:t.max},{id:"y",axis:{position:"left",size:40},origin:"y",min:e.min,max:e.max}],R=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55},{x:7,y:80},{x:8,y:65},{x:9,y:50},{x:10,y:75}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"10px",display:"flex",gap:"10px"},children:[n.jsx("button",{onClick:d,style:{padding:"8px 16px",backgroundColor:"#4c6ef5",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Zoom In"}),n.jsx("button",{onClick:I,style:{padding:"8px 16px",backgroundColor:"#51cf66",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Zoom Out"}),n.jsx("button",{onClick:P,style:{padding:"8px 16px",backgroundColor:"#868e96",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Reset"})]}),n.jsx(a,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:C},children:n.jsx(o,{data:R,xScaleId:"x",yScaleId:"y",barWidth:.5,xPositionOffset:0,style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1}})})]})}},b={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:12},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],i=[{x:1,y:30},{x:2,y:45},{x:3,y:60},{x:4,y:35},{x:5,y:70},{x:6,y:55},{x:7,y:80},{x:8,y:65},{x:9,y:50},{x:10,y:75}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(a,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:n.jsx(o,{data:i,xScaleId:"x",yScaleId:"y",barWidth:.6,xPositionOffset:0,radius:8,style:{fillStyle:"#7950f2",strokeStyle:"#5f3dc4",lineWidth:2}})})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    const data = [{
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
    }, {
      x: 7,
      y: 80
    }, {
      x: 8,
      y: 65
    }, {
      x: 9,
      y: 50
    }, {
      x: 10,
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" barWidth={0.5} xPositionOffset={0} style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} />
        </CanPlot>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    const series1 = [{
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
    const series2 = [{
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
    const series3 = [{
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
          <BarPlot data={series1} xScaleId="x" yScaleId="y" barWidth={0.25} xPositionOffset={-1} style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} />
          <BarPlot data={series2} xScaleId="x" yScaleId="y" barWidth={0.25} xPositionOffset={0} style={{
          fillStyle: "#51cf66",
          strokeStyle: "#37b24d",
          lineWidth: 1
        }} />
          <BarPlot data={series3} xScaleId="x" yScaleId="y" barWidth={0.25} xPositionOffset={1} style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#f03e3e",
          lineWidth: 1
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
    const data = [{
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
    }, {
      x: 7,
      y: 80
    }, {
      x: 8,
      y: 65
    }, {
      x: 9,
      y: 50
    }, {
      x: 10,
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" barWidth={0.6} xPositionOffset={0} style={{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const now = new Date("2024-01-01T00:00:00Z");
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: now.getTime(),
      max: now.getTime() + 30 * 24 * 60 * 60 * 1000 // 30 days
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
    const data = Array.from({
      length: 30
    }, (_, i) => ({
      x: now.getTime() + i * 24 * 60 * 60 * 1000,
      y: 200 + Math.sin(i / 5) * 100 + Math.random() * 50
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" barWidth={0.8 * 24 * 60 * 60 * 1000} xPositionOffset={0} style={{
          fillStyle: "#20c997",
          strokeStyle: "#12b886",
          lineWidth: 1
        }} />
        </CanPlot>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    const solidBars = [{
      x: 1,
      y: 40
    }, {
      x: 2,
      y: 60
    }, {
      x: 3,
      y: 55
    }];
    const thickStroke = [{
      x: 5,
      y: 50
    }, {
      x: 6,
      y: 70
    }, {
      x: 7,
      y: 45
    }];
    const wideBars = [{
      x: 9,
      y: 65
    }, {
      x: 10,
      y: 55
    }, {
      x: 11,
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
          <BarPlot data={solidBars} xScaleId="x" yScaleId="y" barWidth={0.4} xPositionOffset={0} style={{
          fillStyle: "#4c6ef5"
        }} />
          <BarPlot data={thickStroke} xScaleId="x" yScaleId="y" barWidth={0.4} xPositionOffset={0} style={{
          fillStyle: "#51cf66",
          strokeStyle: "#2f9e44",
          lineWidth: 3
        }} />
          <BarPlot data={wideBars} xScaleId="x" yScaleId="y" barWidth={0.7} xPositionOffset={0} style={{
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
    const barData = [{
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
    }, {
      x: 7,
      y: 80
    }, {
      x: 8,
      y: 65
    }, {
      x: 9,
      y: 50
    }, {
      x: 10,
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
          <BarPlot data={barData} xScaleId="x" yScaleId="y" barWidth={0.5} xPositionOffset={0} style={{
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    const data = [{
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
    }, {
      x: 7,
      y: 80
    }, {
      x: 8,
      y: 65
    }, {
      x: 9,
      y: 50
    }, {
      x: 10,
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" barWidth={0.5} xPositionOffset={0} style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} />
        </CanPlot>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    const data = [{
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
    }, {
      x: 7,
      y: 80
    }, {
      x: 8,
      y: 65
    }, {
      x: 9,
      y: 50
    }, {
      x: 10,
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
          <BarPlot data={data} xScaleId="x" yScaleId="y" barWidth={0.6} xPositionOffset={0} radius={8} style={{
          fillStyle: "#7950f2",
          strokeStyle: "#5f3dc4",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const A=["Basic","MultipleBarSeries","WithInteractions","TimeSeries","DifferentStyles","WithLineOverlay","InteractiveZoom","RoundedCorners"];export{c as Basic,f as DifferentStyles,S as InteractiveZoom,m as MultipleBarSeries,b as RoundedCorners,p as TimeSeries,g as WithInteractions,h as WithLineOverlay,A as __namedExportsOrder,Z as default};
