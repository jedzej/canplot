import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-B_ZNLO9M.js";import{C as l}from"./CanPlot-DcHqXOCz.js";import{L as d}from"./LinePlot-Bqsyb75c.js";import{S as C}from"./ScatterPlot-Dsuhhp_5.js";import{A as o}from"./AxisOverlay-koR-NA1p.js";import"./preload-helper-PPVm8Dsz.js";const P={component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},c={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}}),n.jsx(o,{scaleId:"x",children:n.jsx("div",{style:{color:"#fff",padding:"10px",fontSize:"12px",fontWeight:"bold"},children:"X Axis"})}),n.jsx(o,{scaleId:"y",children:n.jsx("div",{style:{color:"#fff",padding:"10px",fontSize:"12px",fontWeight:"bold"},children:"Y Axis"})})]})})}},g={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y1",axis:{position:"left",size:50},origin:"y",min:0,max:100},{id:"y2",axis:{position:"right",size:50},origin:"y",min:-1e3,max:1e3}];return n.jsx("div",{style:{padding:"20px",backgroundColor:"#ff0000"},children:n.jsxs(l,{style:{width:"100%",height:"400px",backgroundColor:"#fff"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),xScaleId:"x",yScaleId:"y1",style:{strokeStyle:"#ff6b6b",lineWidth:2}}),n.jsx(d,{data:Array.from({length:50},(t,e)=>({x:e*2,y:Math.cos(e/6)*800})),xScaleId:"x",yScaleId:"y2",style:{strokeStyle:"#51cf66",lineWidth:2}}),n.jsx(o,{scaleId:"x",children:n.jsx("div",{style:{color:"#fff",padding:"8px",fontSize:"11px",textAlign:"center"},children:"Time (units)"})}),n.jsx(o,{scaleId:"y1",children:n.jsx("div",{style:{color:"#fff",padding:"8px",fontSize:"11px",writingMode:"vertical-rl",textOrientation:"mixed"},children:"Temperature (°C)"})}),n.jsx(o,{scaleId:"y2",style:{backgroundColor:"rgba(81, 207, 102, 0.2)"},children:n.jsx("div",{style:{color:"#fff",padding:"8px",fontSize:"11px",writingMode:"vertical-rl",textOrientation:"mixed",marginLeft:"auto"},children:"Pressure (Pa)"})})]})})}},p={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(C,{data:Array.from({length:30},(t,e)=>({x:e*3.33,y:50+Math.sin(e/3)*30+Math.random()*10})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#4c6ef5",strokeStyle:"#364fc7",lineWidth:2}}),n.jsx(o,{scaleId:"x",style:{backgroundColor:"rgba(76, 110, 245, 0.1)",border:"2px solid rgba(76, 110, 245, 0.3)",borderRadius:"4px"},children:n.jsx("div",{style:{color:"#364fc7",padding:"10px",fontSize:"12px",fontWeight:"600",textAlign:"center"},children:"X Axis - Custom Border"})}),n.jsx(o,{scaleId:"y",style:{background:"linear-gradient(90deg, rgba(76, 110, 245, 0.2), rgba(76, 110, 245, 0.05))",borderLeft:"3px solid #4c6ef5"},children:n.jsx("div",{style:{color:"#364fc7",padding:"10px",fontSize:"12px",fontWeight:"600",writingMode:"vertical-rl",textOrientation:"mixed"},children:"Y Axis - Gradient"})})]})})}},y={render:()=>{const i=[{id:"x",axis:{position:"bottom",size:50},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#51cf66",lineWidth:2}}),n.jsx(o,{scaleId:"x",style:{backgroundColor:"rgba(81, 207, 102, 0.1)",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:t=>{t.currentTarget.style.backgroundColor="rgba(81, 207, 102, 0.3)"},onMouseLeave:t=>{t.currentTarget.style.backgroundColor="rgba(81, 207, 102, 0.1)"},children:n.jsx("div",{style:{color:"#2f9e44",padding:"10px",fontSize:"12px",fontWeight:"bold",textAlign:"center"},children:"Hover me! - X Axis"})}),n.jsx(o,{scaleId:"y",style:{backgroundColor:"rgba(81, 207, 102, 0.1)",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:t=>{t.currentTarget.style.backgroundColor="rgba(81, 207, 102, 0.3)"},onMouseLeave:t=>{t.currentTarget.style.backgroundColor="rgba(81, 207, 102, 0.1)"},children:n.jsx("div",{style:{color:"#2f9e44",padding:"10px",fontSize:"12px",fontWeight:"bold",writingMode:"vertical-rl",textOrientation:"mixed"},children:"Hover me! - Y Axis"})})]})})}},m={render:()=>{const i=Date.parse("2025-11-01T12:00:00Z"),t=[{id:"t",axis:{position:"bottom",size:50},origin:"x",min:i-1e3*60*60*24*7,max:i},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[n.jsx(d,{data:Array.from({length:100},(e,x)=>({x:i-1e3*60*60*24*7+x*1e3*60*60*24*7/100,y:50+Math.sin(x/10)*25+Math.random()*10})),xScaleId:"t",yScaleId:"y",style:{strokeStyle:"#e67700",lineWidth:2}}),n.jsx(o,{scaleId:"t",style:{backgroundColor:"rgba(237, 137, 54, 0.15)"},children:n.jsx("div",{style:{color:"#e67700",padding:"10px",fontSize:"12px",fontWeight:"600",textAlign:"center"},children:"📅 Time Axis (7 days)"})}),n.jsx(o,{scaleId:"y",style:{backgroundColor:"rgba(237, 137, 54, 0.15)"},children:n.jsx("div",{style:{color:"#e67700",padding:"10px",fontSize:"12px",fontWeight:"600",writingMode:"vertical-rl",textOrientation:"mixed"},children:"📊 Value (%)"})})]})})}},f={render:()=>{const[i,t]=u.useState({min:0,max:100}),[e,x]=u.useState({min:0,max:100}),b=()=>{const s=i.max-i.min,r=(i.max+i.min)/2,a=s*.8;t({min:r-a/2,max:r+a/2})},v=()=>{const s=i.max-i.min,r=(i.max+i.min)/2,a=s*1.25;t({min:Math.max(0,r-a/2),max:Math.min(100,r+a/2)})},S=()=>{const s=e.max-e.min,r=(e.max+e.min)/2,a=s*.8;x({min:r-a/2,max:r+a/2})},z=()=>{const s=e.max-e.min,r=(e.max+e.min)/2,a=s*1.25;x({min:Math.max(0,r-a/2),max:Math.min(100,r+a/2)})},A=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:i.min,max:i.max},{id:"y",axis:{position:"left",size:60},origin:"y",min:e.min,max:e.max}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:A},children:[n.jsx(d,{data:Array.from({length:50},(s,r)=>({x:r*2,y:50+Math.sin(r/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#f06595",lineWidth:2}}),n.jsxs(o,{scaleId:"x",style:{backgroundColor:"rgba(240, 101, 149, 0.1)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 10px"},children:[n.jsx("button",{style:{padding:"4px 8px",fontSize:"11px",backgroundColor:"#fff",border:"1px solid #f06595",borderRadius:"4px",cursor:"pointer",color:"#f06595"},onClick:b,children:"Zoom In"}),n.jsxs("span",{style:{fontSize:"12px",color:"#c92a2a"},children:["X: ",i.min.toFixed(1)," - ",i.max.toFixed(1)]}),n.jsx("button",{style:{padding:"4px 8px",fontSize:"11px",backgroundColor:"#fff",border:"1px solid #f06595",borderRadius:"4px",cursor:"pointer",color:"#f06595"},onClick:v,children:"Zoom Out"})]}),n.jsxs(o,{scaleId:"y",style:{backgroundColor:"rgba(240, 101, 149, 0.1)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"10px 0"},children:[n.jsx("button",{style:{padding:"4px 8px",fontSize:"11px",backgroundColor:"#fff",border:"1px solid #f06595",borderRadius:"4px",cursor:"pointer",color:"#f06595",writingMode:"horizontal-tb"},onClick:S,children:"+"}),n.jsxs("span",{style:{fontSize:"11px",color:"#c92a2a",writingMode:"vertical-rl",textOrientation:"mixed"},children:["Y: ",e.min.toFixed(1),"-",e.max.toFixed(1)]}),n.jsx("button",{style:{padding:"4px 8px",fontSize:"11px",backgroundColor:"#fff",border:"1px solid #f06595",borderRadius:"4px",cursor:"pointer",color:"#f06595",writingMode:"horizontal-tb"},onClick:z,children:"-"})]})]})})}},h={render:()=>{const i=[{id:"x-bottom",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"x-top",axis:{position:"top",size:40},origin:"x",min:0,max:100},{id:"y-left",axis:{position:"left",size:50},origin:"y",min:0,max:100},{id:"y-right",axis:{position:"right",size:50},origin:"y",min:0,max:100}];return n.jsx("div",{style:{padding:"20px"},children:n.jsxs(l,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:i},children:[n.jsx(d,{data:Array.from({length:50},(t,e)=>({x:e*2,y:50+Math.sin(e/5)*30})),xScaleId:"x-bottom",yScaleId:"y-left",style:{strokeStyle:"#4c6ef5",lineWidth:2}}),n.jsx(o,{scaleId:"x-bottom",style:{backgroundColor:"rgba(76, 110, 245, 0.15)"},children:n.jsx("div",{style:{textAlign:"center",color:"#364fc7",fontSize:"11px",padding:"8px"},children:"Bottom Axis"})}),n.jsx(o,{scaleId:"x-top",style:{backgroundColor:"rgba(255, 107, 107, 0.15)"},children:n.jsx("div",{style:{textAlign:"center",color:"#c92a2a",fontSize:"11px",padding:"8px"},children:"Top Axis"})}),n.jsx(o,{scaleId:"y-left",style:{backgroundColor:"rgba(81, 207, 102, 0.15)"},children:n.jsx("div",{style:{writingMode:"vertical-rl",textOrientation:"mixed",color:"#2f9e44",fontSize:"11px",padding:"8px"},children:"Left Axis"})}),n.jsx(o,{scaleId:"y-right",style:{backgroundColor:"rgba(237, 137, 54, 0.15)"},children:n.jsx("div",{style:{writingMode:"vertical-rl",textOrientation:"mixed",color:"#e67700",fontSize:"11px",padding:"8px",marginLeft:"auto"},children:"Right Axis"})})]})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />

          <AxisOverlay scaleId="x">
            <div style={{
            color: "#fff",
            padding: "10px",
            fontSize: "12px",
            fontWeight: "bold"
          }}>
              X Axis
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y">
            <div style={{
            color: "#fff",
            padding: "10px",
            fontSize: "12px",
            fontWeight: "bold"
          }}>
              Y Axis
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      padding: "20px",
      backgroundColor: "#ff0000"
    }}>
        <CanPlot style={{
        width: "100%",
        height: "400px",
        backgroundColor: "#fff"
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
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y1" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 2
        }} />

          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: Math.cos(i / 6) * 800
        }))} xScaleId="x" yScaleId="y2" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />

          <AxisOverlay scaleId="x">
            <div style={{
            color: "#fff",
            padding: "8px",
            fontSize: "11px",
            textAlign: "center"
          }}>
              Time (units)
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y1">
            <div style={{
            color: "#fff",
            padding: "8px",
            fontSize: "11px",
            writingMode: "vertical-rl",
            textOrientation: "mixed"
          }}>
              Temperature (°C)
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y2" style={{
          backgroundColor: "rgba(81, 207, 102, 0.2)"
        }}>
            <div style={{
            color: "#fff",
            padding: "8px",
            fontSize: "11px",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            marginLeft: "auto"
          }}>
              Pressure (Pa)
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
          length: 30
        }, (_, i) => ({
          x: i * 3.33,
          y: 50 + Math.sin(i / 3) * 30 + Math.random() * 10
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#4c6ef5",
          strokeStyle: "#364fc7",
          lineWidth: 2
        }} />

          <AxisOverlay scaleId="x" style={{
          backgroundColor: "rgba(76, 110, 245, 0.1)",
          border: "2px solid rgba(76, 110, 245, 0.3)",
          borderRadius: "4px"
        }}>
            <div style={{
            color: "#364fc7",
            padding: "10px",
            fontSize: "12px",
            fontWeight: "600",
            textAlign: "center"
          }}>
              X Axis - Custom Border
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y" style={{
          background: "linear-gradient(90deg, rgba(76, 110, 245, 0.2), rgba(76, 110, 245, 0.05))",
          borderLeft: "3px solid #4c6ef5"
        }}>
            <div style={{
            color: "#364fc7",
            padding: "10px",
            fontSize: "12px",
            fontWeight: "600",
            writingMode: "vertical-rl",
            textOrientation: "mixed"
          }}>
              Y Axis - Gradient
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 50
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
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#51cf66",
          lineWidth: 2
        }} />

          <AxisOverlay scaleId="x" style={{
          backgroundColor: "rgba(81, 207, 102, 0.1)",
          cursor: "pointer",
          transition: "background-color 0.2s"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "rgba(81, 207, 102, 0.3)";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "rgba(81, 207, 102, 0.1)";
        }}>
            <div style={{
            color: "#2f9e44",
            padding: "10px",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center"
          }}>
              Hover me! - X Axis
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y" style={{
          backgroundColor: "rgba(81, 207, 102, 0.1)",
          cursor: "pointer",
          transition: "background-color 0.2s"
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "rgba(81, 207, 102, 0.3)";
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "rgba(81, 207, 102, 0.1)";
        }}>
            <div style={{
            color: "#2f9e44",
            padding: "10px",
            fontSize: "12px",
            fontWeight: "bold",
            writingMode: "vertical-rl",
            textOrientation: "mixed"
          }}>
              Hover me! - Y Axis
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <LinePlot data={Array.from({
          length: 100
        }, (_, i) => ({
          x: refPoint - 1000 * 60 * 60 * 24 * 7 + i * 1000 * 60 * 60 * 24 * 7 / 100,
          y: 50 + Math.sin(i / 10) * 25 + Math.random() * 10
        }))} xScaleId="t" yScaleId="y" style={{
          strokeStyle: "#e67700",
          lineWidth: 2
        }} />

          <AxisOverlay scaleId="t" style={{
          backgroundColor: "rgba(237, 137, 54, 0.15)"
        }}>
            <div style={{
            color: "#e67700",
            padding: "10px",
            fontSize: "12px",
            fontWeight: "600",
            textAlign: "center"
          }}>
              📅 Time Axis (7 days)
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y" style={{
          backgroundColor: "rgba(237, 137, 54, 0.15)"
        }}>
            <div style={{
            color: "#e67700",
            padding: "10px",
            fontSize: "12px",
            fontWeight: "600",
            writingMode: "vertical-rl",
            textOrientation: "mixed"
          }}>
              📊 Value (%)
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [xRange, setXRange] = useState({
      min: 0,
      max: 100
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yRange, setYRange] = useState({
      min: 0,
      max: 100
    });
    const zoomInX = () => {
      const range = xRange.max - xRange.min;
      const center = (xRange.max + xRange.min) / 2;
      const newRange = range * 0.8;
      setXRange({
        min: center - newRange / 2,
        max: center + newRange / 2
      });
    };
    const zoomOutX = () => {
      const range = xRange.max - xRange.min;
      const center = (xRange.max + xRange.min) / 2;
      const newRange = range * 1.25;
      setXRange({
        min: Math.max(0, center - newRange / 2),
        max: Math.min(100, center + newRange / 2)
      });
    };
    const zoomInY = () => {
      const range = yRange.max - yRange.min;
      const center = (yRange.max + yRange.min) / 2;
      const newRange = range * 0.8;
      setYRange({
        min: center - newRange / 2,
        max: center + newRange / 2
      });
    };
    const zoomOutY = () => {
      const range = yRange.max - yRange.min;
      const center = (yRange.max + yRange.min) / 2;
      const newRange = range * 1.25;
      setYRange({
        min: Math.max(0, center - newRange / 2),
        max: Math.min(100, center + newRange / 2)
      });
    };
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: xRange.min,
      max: xRange.max
    }, {
      id: "y",
      axis: {
        position: "left",
        size: 60
      },
      origin: "y",
      min: yRange.min,
      max: yRange.max
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
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#f06595",
          lineWidth: 2
        }} />

          <AxisOverlay scaleId="x" style={{
          backgroundColor: "rgba(240, 101, 149, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px"
        }}>
            <button style={{
            padding: "4px 8px",
            fontSize: "11px",
            backgroundColor: "#fff",
            border: "1px solid #f06595",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#f06595"
          }} onClick={zoomInX}>
              Zoom In
            </button>
            <span style={{
            fontSize: "12px",
            color: "#c92a2a"
          }}>
              X: {xRange.min.toFixed(1)} - {xRange.max.toFixed(1)}
            </span>
            <button style={{
            padding: "4px 8px",
            fontSize: "11px",
            backgroundColor: "#fff",
            border: "1px solid #f06595",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#f06595"
          }} onClick={zoomOutX}>
              Zoom Out
            </button>
          </AxisOverlay>

          <AxisOverlay scaleId="y" style={{
          backgroundColor: "rgba(240, 101, 149, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0"
        }}>
            <button style={{
            padding: "4px 8px",
            fontSize: "11px",
            backgroundColor: "#fff",
            border: "1px solid #f06595",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#f06595",
            writingMode: "horizontal-tb"
          }} onClick={zoomInY}>
              +
            </button>
            <span style={{
            fontSize: "11px",
            color: "#c92a2a",
            writingMode: "vertical-rl",
            textOrientation: "mixed"
          }}>
              Y: {yRange.min.toFixed(1)}-{yRange.max.toFixed(1)}
            </span>
            <button style={{
            padding: "4px 8px",
            fontSize: "11px",
            backgroundColor: "#fff",
            border: "1px solid #f06595",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#f06595",
            writingMode: "horizontal-tb"
          }} onClick={zoomOutY}>
              -
            </button>
          </AxisOverlay>
        </CanPlot>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x-bottom",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "x-top",
      axis: {
        position: "top",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, {
      id: "y-left",
      axis: {
        position: "left",
        size: 50
      },
      origin: "y",
      min: 0,
      max: 100
    }, {
      id: "y-right",
      axis: {
        position: "right",
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
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 30
        }))} xScaleId="x-bottom" yScaleId="y-left" style={{
          strokeStyle: "#4c6ef5",
          lineWidth: 2
        }} />

          <AxisOverlay scaleId="x-bottom" style={{
          backgroundColor: "rgba(76, 110, 245, 0.15)"
        }}>
            <div style={{
            textAlign: "center",
            color: "#364fc7",
            fontSize: "11px",
            padding: "8px"
          }}>
              Bottom Axis
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="x-top" style={{
          backgroundColor: "rgba(255, 107, 107, 0.15)"
        }}>
            <div style={{
            textAlign: "center",
            color: "#c92a2a",
            fontSize: "11px",
            padding: "8px"
          }}>
              Top Axis
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y-left" style={{
          backgroundColor: "rgba(81, 207, 102, 0.15)"
        }}>
            <div style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            color: "#2f9e44",
            fontSize: "11px",
            padding: "8px"
          }}>
              Left Axis
            </div>
          </AxisOverlay>

          <AxisOverlay scaleId="y-right" style={{
          backgroundColor: "rgba(237, 137, 54, 0.15)"
        }}>
            <div style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            color: "#e67700",
            fontSize: "11px",
            padding: "8px",
            marginLeft: "auto"
          }}>
              Right Axis
            </div>
          </AxisOverlay>
        </CanPlot>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};const W=["Basic","MultipleAxes","CustomStyles","InteractiveOverlay","TimeSeriesOverlay","WithControls","AllAxisPositions"];export{h as AllAxisPositions,c as Basic,p as CustomStyles,y as InteractiveOverlay,g as MultipleAxes,m as TimeSeriesOverlay,f as WithControls,W as __namedExportsOrder,P as default};
