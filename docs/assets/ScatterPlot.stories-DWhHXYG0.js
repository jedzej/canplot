import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as r}from"./frameContext-CMUXoEkQ.js";import{S as a}from"./ScatterPlot-BkwriMGa.js";import{C as x}from"./ChartAreaInteractions-DZIpulDx.js";import{C as p}from"./CrossHair-Crw19_gg.js";import{S as P}from"./SelectBox-C3wJetXN.js";import{r as j}from"./iframe-DOGe1Luy.js";import"./preload-helper-PPVm8Dsz.js";const F={component:r,parameters:{layout:"fullscreen"},tags:["autodocs"]},h={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsx(r,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:n.jsx(a,{data:Array.from({length:20},(i,t)=>({x:t*5,y:Math.random()*100})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"blue",strokeStyle:"darkblue",lineWidth:2}})})})}},m={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(r,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(x,{sync:{key:"demo",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(p,{}),n.jsx(P,{makeStyle:()=>({backgroundColor:"#4499ff44"})})]}),n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:50+Math.sin(t/3)*30+Math.random()*10})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:2}})]})})}},S={render:()=>{const e=Date.parse("2025-11-01T12:00:00Z"),i=[{id:"t",axis:{position:"bottom",size:50},origin:"x",min:e-1e3*60*60*24,max:e},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(r,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsxs(x,{sync:{key:"timeseries",xViaScaleId:"t",yViaScaleId:"y"},children:[n.jsx(p,{}),n.jsx(P,{makeStyle:()=>({backgroundColor:"#44992244"})})]}),n.jsx(a,{data:Array.from({length:50},(t,l)=>({x:e-1e3*60*60*24+l*1e3*60*60*24/50,y:50+Math.sin(l/5)*20+Math.random()*15})),xScaleId:"t",yScaleId:"y",style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:2}})]})})}},u={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(r,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(x,{sync:{key:"multi",xViaScaleId:"x",yViaScaleId:"y"},children:[n.jsx(p,{}),n.jsx(P,{makeStyle:()=>({backgroundColor:"#ffd43b44"})})]}),n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:30+Math.sin(t/2)*20})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:2}}),n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:50+Math.cos(t/3)*25})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:2}}),n.jsx(a,{data:Array.from({length:30},(i,t)=>({x:t*3.33,y:70+Math.sin(t/4)*15})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:2}})]})})}},b={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:50},origin:"y",min:0,max:100},{id:"y2",axis:{position:"right",size:50},origin:"y",min:-1e3,max:1e3}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(r,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[n.jsxs(x,{sync:{key:"dual",xViaScaleId:"x",yViaScaleId:"y1"},children:[n.jsx(p,{}),n.jsx(P,{makeStyle:()=>({backgroundColor:"#4499ff22"})})]}),n.jsx(a,{data:Array.from({length:20},(i,t)=>({x:t*5,y:50+Math.sin(t/2)*30})),xScaleId:"x",yScaleId:"y1",style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:2}}),n.jsx(a,{data:Array.from({length:20},(i,t)=>({x:t*5,y:Math.cos(t/3)*800})),xScaleId:"x",yScaleId:"y2",style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:2}})]})})}},I={render:()=>{const[e,i]=j.useState(null),t=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],l=[{x:10,y:20},{x:30,y:40},{x:50,y:60},{x:70,y:80},{x:90,y:50},{x:0,y:50},{x:100,y:50},{x:50,y:0},{x:50,y:100}],f=[{x:110,y:50},{x:120,y:80},{x:150,y:30},{x:-10,y:50},{x:-20,y:70}],c=[{x:50,y:120},{x:80,y:130},{x:30,y:150},{x:60,y:-20},{x:40,y:-30}],C=[{x:110,y:120},{x:150,y:150},{x:-10,y:-20},{x:120,y:-10}],g={"In Range":"#51cf66","X Out of Range":"#ff6b6b","Y Out of Range":"#ffd43b","Both Out of Range":"#a855f7"},O=d=>{if(!d.pointer||!d.frame)return;const w=d.pointer.scaled.x,A=d.pointer.scaled.y,z=o=>{const s=t.find(y=>y.id==="x");return s?Math.max(s.min,Math.min(s.max,o)):o},W=o=>{const s=t.find(y=>y.id==="y");return s?Math.max(s.min,Math.min(s.max,o)):o},Y=[...l.map(o=>({...o,category:"In Range",color:g["In Range"]})),...f.map(o=>({...o,category:"X Out of Range",color:g["X Out of Range"]})),...c.map(o=>({...o,category:"Y Out of Range",color:g["Y Out of Range"]})),...C.map(o=>({...o,category:"Both Out of Range",color:g["Both Out of Range"]}))];let k=null,M=1/0;for(const o of Y){const s=z(o.x),y=W(o.y),R=Math.sqrt(Math.pow(s-w,2)+Math.pow(y-A,2));R<M&&(M=R,k={x:o.x,y:o.y,category:o.category,color:o.color,mouseX:d.pointer.cssX??0,mouseY:d.pointer.cssY??0})}console.log(k),i(k)};return n.jsxs("div",{style:{padding:"20px"},children:[n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Scatter Plot with Points Outside Scale Boundaries"}),n.jsxs("p",{style:{fontSize:"14px",color:"#666",marginBottom:"15px"},children:['Demonstrates xStrategy and yStrategy with "clamp" mode. Points are color-coded: ',n.jsx("strong",{style:{color:"#51cf66"},children:"green"})," for in-range, ",n.jsx("strong",{style:{color:"#ff6b6b"},children:"red"})," for x out-of-range, ",n.jsx("strong",{style:{color:"#ffd43b"},children:"yellow"})," ","for y out-of-range, and"," ",n.jsx("strong",{style:{color:"#a855f7"},children:"purple"})," for both out-of-range."]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px",fontSize:"12px",color:"#495057"},children:[n.jsxs("div",{style:{padding:"10px",backgroundColor:"#d3f9d8",borderRadius:"4px",border:"2px solid #51cf66"},children:[n.jsx("strong",{children:"Green (In Range)"}),n.jsx("div",{children:"9 points with both x and y within [0, 100]"})]}),n.jsxs("div",{style:{padding:"10px",backgroundColor:"#ffe3e3",borderRadius:"4px",border:"2px solid #ff6b6b"},children:[n.jsx("strong",{children:"Red (X Out of Range)"}),n.jsx("div",{children:"5 points with x outside [0, 100]"})]}),n.jsxs("div",{style:{padding:"10px",backgroundColor:"#fff9db",borderRadius:"4px",border:"2px solid #ffd43b"},children:[n.jsx("strong",{children:"Yellow (Y Out of Range)"}),n.jsx("div",{children:"5 points with y outside [0, 100]"})]}),n.jsxs("div",{style:{padding:"10px",backgroundColor:"#f3e8ff",borderRadius:"4px",border:"2px solid #a855f7"},children:[n.jsx("strong",{children:"Purple (Both Out of Range)"}),n.jsx("div",{children:"4 points with both x and y outside [0, 100]"})]})]})]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs(r,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:60,left:60,right:20,top:20},scales:t},children:[n.jsx(x,{sync:{key:"points-over-limit"},onMouseMove:O,children:n.jsx(p,{})}),n.jsx(a,{data:l,xScaleId:"x",yScaleId:"y",xStrategy:"clamp",yStrategy:"clamp",radius:6,style:{fillStyle:"#51cf66",strokeStyle:"#2f9e44",lineWidth:2}}),n.jsx(a,{data:f,xScaleId:"x",yScaleId:"y",xStrategy:"clamp",yStrategy:"clamp",radius:6,style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:2}}),n.jsx(a,{data:c,xScaleId:"x",yScaleId:"y",xStrategy:"clamp",yStrategy:"clamp",radius:6,style:{fillStyle:"#ffd43b",strokeStyle:"#fab005",lineWidth:2}}),n.jsx(a,{data:C,xScaleId:"x",yScaleId:"y",xStrategy:"clamp",yStrategy:"clamp",radius:6,style:{fillStyle:"#a855f7",strokeStyle:"#7c3aed",lineWidth:2}})]}),e&&n.jsxs("div",{style:{position:"absolute",left:`${e.mouseX}px`,top:`${e.mouseY}px`,transform:"translate(10px, -50%)",backgroundColor:"rgba(0, 0, 0, 0.9)",color:"white",padding:"8px 12px",borderRadius:"4px",fontSize:"12px",whiteSpace:"nowrap",border:`2px solid ${e.color}`,pointerEvents:"none",zIndex:1e3},children:[n.jsx("div",{style:{fontWeight:"bold",marginBottom:"4px"},children:e.category}),n.jsxs("div",{children:["x: ",e.x.toFixed(2)]}),n.jsxs("div",{children:["y: ",e.y.toFixed(2)]})]})]})]})}},v={render:()=>{const[e,i]=j.useState(()=>Array.from({length:1e3},()=>({x:Math.random()*100,y:Math.random()*100})));j.useEffect(()=>{const l=setInterval(()=>{i(f=>f.map(c=>({x:Math.max(0,Math.min(100,c.x+(Math.random()-.5)*2)),y:Math.max(0,Math.min(100,c.y+(Math.random()-.5)*2))})))},16);return()=>clearInterval(l)},[]);const t=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("p",{style:{marginBottom:"10px"},children:"Rendering 1000 points across 5 series with random colors and alpha, updates every 16ms (~60fps)"}),n.jsxs(r,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(a,{data:e.slice(0,200),xScaleId:"x",yScaleId:"y",radius:3,style:{fillStyle:"#ff6b6b",strokeStyle:"#c92a2a",lineWidth:1},globalAlpha:.8}),n.jsx(a,{data:e.slice(200,400),xScaleId:"x",yScaleId:"y",radius:3,style:{fillStyle:"#51cf66",strokeStyle:"#2b8a3e",lineWidth:1},globalAlpha:.6}),n.jsx(a,{data:e.slice(400,600),xScaleId:"x",yScaleId:"y",radius:3,style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:1},globalAlpha:.5}),n.jsx(a,{data:e.slice(600,800),xScaleId:"x",yScaleId:"y",radius:3,style:{fillStyle:"#ffd43b",strokeStyle:"#fab005",lineWidth:1},globalAlpha:.7}),n.jsx(a,{data:e.slice(800,1e3),xScaleId:"x",yScaleId:"y",radius:3,style:{fillStyle:"#a855f7",strokeStyle:"#7c3aed",lineWidth:1},globalAlpha:.4})]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hoveredPoint, setHoveredPoint] = useState<{
      x: number;
      y: number;
      category: string;
      color: string;
      mouseX: number;
      mouseY: number;
    } | null>(null);
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

    // Generate data with points both inside and outside the scale boundaries
    const allData = [
    // Points inside the scale (green)
    {
      x: 10,
      y: 20
    }, {
      x: 30,
      y: 40
    }, {
      x: 50,
      y: 60
    }, {
      x: 70,
      y: 80
    }, {
      x: 90,
      y: 50
    }, {
      x: 0,
      y: 50
    }, {
      x: 100,
      y: 50
    }, {
      x: 50,
      y: 0
    }, {
      x: 50,
      y: 100
    }];
    const xOutOfRange = [
    // Points with x outside (red)
    {
      x: 110,
      y: 50
    }, {
      x: 120,
      y: 80
    }, {
      x: 150,
      y: 30
    }, {
      x: -10,
      y: 50
    }, {
      x: -20,
      y: 70
    }];
    const yOutOfRange = [
    // Points with y outside (yellow)
    {
      x: 50,
      y: 120
    }, {
      x: 80,
      y: 130
    }, {
      x: 30,
      y: 150
    }, {
      x: 60,
      y: -20
    }, {
      x: 40,
      y: -30
    }];
    const bothOutOfRange = [
    // Points with both x and y outside (purple - mix of red and yellow)
    {
      x: 110,
      y: 120
    }, {
      x: 150,
      y: 150
    }, {
      x: -10,
      y: -20
    }, {
      x: 120,
      y: -10
    }];
    const colors = {
      "In Range": "#51cf66",
      "X Out of Range": "#ff6b6b",
      "Y Out of Range": "#ffd43b",
      "Both Out of Range": "#a855f7"
    };
    const handleMouseMove = (event: MoveEvent) => {
      if (!event.pointer || !event.frame) return;
      const x = event.pointer.scaled.x;
      const y = event.pointer.scaled.y;
      const clampX = (x: number) => {
        const xScale = scales.find(s => s.id === "x");
        if (!xScale) return x;
        return Math.max(xScale.min, Math.min(xScale.max, x));
      };
      const clampY = (y: number) => {
        const yScale = scales.find(s => s.id === "y");
        if (!yScale) return y;
        return Math.max(yScale.min, Math.min(yScale.max, y));
      };

      // Check all point categories
      const allPoints = [...allData.map(p => ({
        ...p,
        category: "In Range",
        color: colors["In Range"]
      })), ...xOutOfRange.map(p => ({
        ...p,
        category: "X Out of Range",
        color: colors["X Out of Range"]
      })), ...yOutOfRange.map(p => ({
        ...p,
        category: "Y Out of Range",
        color: colors["Y Out of Range"]
      })), ...bothOutOfRange.map(p => ({
        ...p,
        category: "Both Out of Range",
        color: colors["Both Out of Range"]
      }))];
      let closestPoint = null;
      let closestDistance = Infinity;
      for (const point of allPoints) {
        const pointX = clampX(point.x);
        const pointY = clampY(point.y);
        const distance = Math.sqrt(Math.pow(pointX - x, 2) + Math.pow(pointY - y, 2));
        if (distance < closestDistance) {
          closestDistance = distance;
          closestPoint = {
            x: point.x,
            y: point.y,
            category: point.category,
            color: point.color,
            mouseX: event.pointer.cssX ?? 0,
            mouseY: event.pointer.cssY ?? 0
          };
        }
      }
      console.log(closestPoint);
      setHoveredPoint(closestPoint);
    };
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "20px"
      }}>
          <h3 style={{
          margin: "0 0 10px 0"
        }}>
            Scatter Plot with Points Outside Scale Boundaries
          </h3>
          <p style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "15px"
        }}>
            Demonstrates xStrategy and yStrategy with "clamp" mode. Points are
            color-coded: <strong style={{
            color: "#51cf66"
          }}>green</strong> for
            in-range, <strong style={{
            color: "#ff6b6b"
          }}>red</strong> for x
            out-of-range, <strong style={{
            color: "#ffd43b"
          }}>yellow</strong>{" "}
            for y out-of-range, and{" "}
            <strong style={{
            color: "#a855f7"
          }}>purple</strong> for both
            out-of-range.
          </p>
          <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
          fontSize: "12px",
          color: "#495057"
        }}>
            <div style={{
            padding: "10px",
            backgroundColor: "#d3f9d8",
            borderRadius: "4px",
            border: "2px solid #51cf66"
          }}>
              <strong>Green (In Range)</strong>
              <div>9 points with both x and y within [0, 100]</div>
            </div>
            <div style={{
            padding: "10px",
            backgroundColor: "#ffe3e3",
            borderRadius: "4px",
            border: "2px solid #ff6b6b"
          }}>
              <strong>Red (X Out of Range)</strong>
              <div>5 points with x outside [0, 100]</div>
            </div>
            <div style={{
            padding: "10px",
            backgroundColor: "#fff9db",
            borderRadius: "4px",
            border: "2px solid #ffd43b"
          }}>
              <strong>Yellow (Y Out of Range)</strong>
              <div>5 points with y outside [0, 100]</div>
            </div>
            <div style={{
            padding: "10px",
            backgroundColor: "#f3e8ff",
            borderRadius: "4px",
            border: "2px solid #a855f7"
          }}>
              <strong>Purple (Both Out of Range)</strong>
              <div>4 points with both x and y outside [0, 100]</div>
            </div>
          </div>
        </div>

        <div style={{
        position: "relative"
      }}>
          <CanPlot style={{
          width: "100%",
          height: "400px"
        }} configuration={{
          padding: {
            bottom: 60,
            left: 60,
            right: 20,
            top: 20
          },
          scales
        }}>
            <ChartAreaInteractions sync={{
            key: "points-over-limit"
          }} onMouseMove={handleMouseMove}>
              <Crosshair />
            </ChartAreaInteractions>

            {/* Green: Points in range */}
            <ScatterPlot data={allData} xScaleId="x" yScaleId="y" xStrategy="clamp" yStrategy="clamp" radius={6} style={{
            fillStyle: "#51cf66",
            strokeStyle: "#2f9e44",
            lineWidth: 2
          }} />

            {/* Red: X out of range */}
            <ScatterPlot data={xOutOfRange} xScaleId="x" yScaleId="y" xStrategy="clamp" yStrategy="clamp" radius={6} style={{
            fillStyle: "#ff6b6b",
            strokeStyle: "#c92a2a",
            lineWidth: 2
          }} />

            {/* Yellow: Y out of range */}
            <ScatterPlot data={yOutOfRange} xScaleId="x" yScaleId="y" xStrategy="clamp" yStrategy="clamp" radius={6} style={{
            fillStyle: "#ffd43b",
            strokeStyle: "#fab005",
            lineWidth: 2
          }} />

            {/* Purple: Both out of range */}
            <ScatterPlot data={bothOutOfRange} xScaleId="x" yScaleId="y" xStrategy="clamp" yStrategy="clamp" radius={6} style={{
            fillStyle: "#a855f7",
            strokeStyle: "#7c3aed",
            lineWidth: 2
          }} />
          </CanPlot>

          {hoveredPoint && <div style={{
          position: "absolute",
          left: \`\${hoveredPoint.mouseX}px\`,
          top: \`\${hoveredPoint.mouseY}px\`,
          transform: "translate(10px, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          color: "white",
          padding: "8px 12px",
          borderRadius: "4px",
          fontSize: "12px",
          whiteSpace: "nowrap",
          border: \`2px solid \${hoveredPoint.color}\`,
          pointerEvents: "none",
          zIndex: 1000
        }}>
              <div style={{
            fontWeight: "bold",
            marginBottom: "4px"
          }}>
                {hoveredPoint.category}
              </div>
              <div>x: {hoveredPoint.x.toFixed(2)}</div>
              <div>y: {hoveredPoint.y.toFixed(2)}</div>
            </div>}
        </div>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(() => Array.from({
      length: 1000
    }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    })));

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const interval = setInterval(() => {
        setData(prev => prev.map(point => ({
          x: Math.max(0, Math.min(100, point.x + (Math.random() - 0.5) * 2)),
          y: Math.max(0, Math.min(100, point.y + (Math.random() - 0.5) * 2))
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
        <p style={{
        marginBottom: "10px"
      }}>
          Rendering 1000 points across 5 series with random colors and alpha, updates every 16ms (~60fps)
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
          <ScatterPlot data={data.slice(0, 200)} xScaleId="x" yScaleId="y" radius={3} style={{
          fillStyle: "#ff6b6b",
          strokeStyle: "#c92a2a",
          lineWidth: 1
        }} globalAlpha={0.8} />
          <ScatterPlot data={data.slice(200, 400)} xScaleId="x" yScaleId="y" radius={3} style={{
          fillStyle: "#51cf66",
          strokeStyle: "#2b8a3e",
          lineWidth: 1
        }} globalAlpha={0.6} />
          <ScatterPlot data={data.slice(400, 600)} xScaleId="x" yScaleId="y" radius={3} style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 1
        }} globalAlpha={0.5} />
          <ScatterPlot data={data.slice(600, 800)} xScaleId="x" yScaleId="y" radius={3} style={{
          fillStyle: "#ffd43b",
          strokeStyle: "#fab005",
          lineWidth: 1
        }} globalAlpha={0.7} />
          <ScatterPlot data={data.slice(800, 1000)} xScaleId="x" yScaleId="y" radius={3} style={{
          fillStyle: "#a855f7",
          strokeStyle: "#7c3aed",
          lineWidth: 1
        }} globalAlpha={0.4} />
        </CanPlot>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const G=["Basic","WithInteractions","TimeSeries","MultipleDatasets","DualYAxis","PointsOverLimit","Performance"];export{h as Basic,b as DualYAxis,u as MultipleDatasets,v as Performance,I as PointsOverLimit,S as TimeSeries,m as WithInteractions,G as __namedExportsOrder,F as default};
