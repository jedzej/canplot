import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as u,u as b,a as R}from"./CanPlot-Dt-Hk-bz.js";import{L as I}from"./LinePlot-b-xgx--s.js";import{S as B}from"./ScatterPlot-BrvkVfme.js";import{X as P,m as z,Y as T}from"./tickUtils-BqwLkjZo.js";import"./ChartAreaInteractions-B1xZ5UkT.js";import{r as f}from"./iframe-C_5h61o-.js";import"./CrossHair-DpqlzLdJ.js";import"./SelectBox-DpEsDMEq.js";import"./AxisOverlay-VPO56RJi.js";import"./preload-helper-PPVm8Dsz.js";const F={component:u,parameters:{layout:"fullscreen"},tags:["autodocs"]},v={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:1},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Default Tick Styles"}),e.jsxs(u,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[e.jsx(c,{color:"red"}),e.jsx(c,{color:"blue"}),e.jsx(c,{color:"green"}),e.jsx(c,{color:"orange"}),e.jsx(c,{color:"purple"}),e.jsx(c,{color:"black"}),e.jsx(c,{color:"gray"}),e.jsx(c,{color:"pink"}),e.jsx(c,{color:"brown"}),e.jsx(c,{color:"cyan"})]})]})}},c=({color:t})=>{const[i,n]=f.useState(.5);return f.useEffect(()=>{const s=setInterval(()=>{n(Math.random())},1);return()=>clearInterval(s)},[]),b("TOP",({clampYPosToChartArea:s,getCtx:r,valToPos:d})=>{const a=r(),p=d(i,"x","canvas"),g=s(-1/0,"canvas"),y=s(1/0,"canvas");a.save(),a.beginPath(),a.moveTo(p,g),a.lineTo(p,y),a.strokeStyle=t,a.lineWidth=2,a.stroke(),a.closePath(),a.restore()},[i,t]),null},C={render:()=>{const[t,i]=f.useState([{id:1,color:"#ff6b6b",data:Array.from({length:50},(l,x)=>({x:x*2,y:50+Math.sin(x/5)*25}))}]),[n,s]=f.useState(2),r=["#4c6ef5","#51cf66","#ff6b6b","#f59f00","#7950f2","#f06595","#20c997","#fab005"],d=()=>{const l={id:n,color:r[n%r.length],data:Array.from({length:50},(x,h)=>({x:h*2,y:50+Math.sin((h+n*10)/5)*25+Math.cos((h+n*5)/3)*15}))};i([...t,l]),s(n+1)},a=()=>{const l={id:n,color:r[n%r.length],data:Array.from({length:30},()=>({x:Math.random()*100,y:Math.random()*100}))};i([...t,l]),s(n+1)},p=l=>{i(t.filter(x=>x.id!==l))},g=()=>{t.length>0&&i(t.slice(0,-1))},y=()=>{i([])},k=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Dynamic Series Management"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"15px"},children:"Add and remove series dynamically. Each series is rendered as a separate component."}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"15px"},children:[e.jsx("button",{onClick:d,style:{padding:"8px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"#4c6ef5",color:"white",border:"none",borderRadius:"4px"},children:"Add Line Series"}),e.jsx("button",{onClick:a,style:{padding:"8px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"#51cf66",color:"white",border:"none",borderRadius:"4px"},children:"Add Scatter Series"}),e.jsx("button",{onClick:g,disabled:t.length===0,style:{padding:"8px 16px",fontSize:"14px",cursor:t.length===0?"not-allowed":"pointer",backgroundColor:t.length===0?"#dee2e6":"#f59f00",color:"white",border:"none",borderRadius:"4px",opacity:t.length===0?.6:1},children:"Remove Last"}),e.jsx("button",{onClick:y,disabled:t.length===0,style:{padding:"8px 16px",fontSize:"14px",cursor:t.length===0?"not-allowed":"pointer",backgroundColor:t.length===0?"#dee2e6":"#ff6b6b",color:"white",border:"none",borderRadius:"4px",opacity:t.length===0?.6:1},children:"Clear All"})]}),e.jsxs("div",{style:{fontSize:"14px",color:"#495057",marginBottom:"10px"},children:["Active Series: ",t.length]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:t.map(l=>e.jsxs("div",{style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#f1f3f5",border:`2px solid ${l.color}`,borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("span",{style:{color:l.color,fontWeight:"bold"},children:["Series ",l.id]}),e.jsx("button",{onClick:()=>p(l.id),style:{padding:"2px 6px",fontSize:"12px",cursor:"pointer",backgroundColor:"#ff6b6b",color:"white",border:"none",borderRadius:"3px"},children:"×"})]},l.id))})]}),e.jsx(u,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:60,left:70,right:20,top:20},scales:k},children:t.map(l=>l.data.length<40?e.jsx(B,{data:l.data,xScaleId:"x",yScaleId:"y",radius:4,style:{fillStyle:l.color,strokeStyle:l.color,lineWidth:2}},l.id):e.jsx(I,{data:l.data,xScaleId:"x",yScaleId:"y",style:{strokeStyle:l.color,lineWidth:2}},l.id))})]})}},w={render:()=>{const[t,i]=f.useState([{id:"y1",color:"#4c6ef5",position:"left"}]),[n,s]=f.useState(2),r=["#4c6ef5","#51cf66","#ff6b6b","#f59f00","#7950f2","#f06595","#20c997","#fab005"],d=()=>{const o={id:`y${n}`,color:r[(n-1)%r.length],position:"left"};i([...t,o]),s(n+1)},a=()=>{const o={id:`y${n}`,color:r[(n-1)%r.length],position:"right"};i([...t,o]),s(n+1)},p=o=>{t.length>1&&i(t.filter(m=>m.id!==o))},g=()=>{t.length>1&&i(t.slice(0,-1))},y=()=>{i([t[0]])},k=t.filter(o=>o.position==="left"),l=t.filter(o=>o.position==="right"),x=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},...t.map(o=>{const S=(o.position==="left"?k:l).findIndex(L=>L.id===o.id)*60;return{id:o.id,axis:{position:o.position,size:50,offset:S},origin:"y",min:0,max:100}})],h=t.map((o,m)=>({scaleId:o.id,color:o.color,data:Array.from({length:50},(A,S)=>({x:S*2,y:50+Math.sin((S+m*15)/5)*25+Math.cos((S+m*8)/4)*20}))}));return e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Dynamic Scales with Ticks"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"15px"},children:"Add and remove Y-axes dynamically. Each scale has its own ticks and can be positioned on the left or right."}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"15px"},children:[e.jsx("button",{onClick:d,style:{padding:"8px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"#4c6ef5",color:"white",border:"none",borderRadius:"4px"},children:"Add Left Scale"}),e.jsx("button",{onClick:a,style:{padding:"8px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"#51cf66",color:"white",border:"none",borderRadius:"4px"},children:"Add Right Scale"}),e.jsx("button",{onClick:g,disabled:t.length<=1,style:{padding:"8px 16px",fontSize:"14px",cursor:t.length<=1?"not-allowed":"pointer",backgroundColor:t.length<=1?"#dee2e6":"#f59f00",color:"white",border:"none",borderRadius:"4px",opacity:t.length<=1?.6:1},children:"Remove Last"}),e.jsx("button",{onClick:y,disabled:t.length<=1,style:{padding:"8px 16px",fontSize:"14px",cursor:t.length<=1?"not-allowed":"pointer",backgroundColor:t.length<=1?"#dee2e6":"#ff6b6b",color:"white",border:"none",borderRadius:"4px",opacity:t.length<=1?.6:1},children:"Clear All"})]}),e.jsxs("div",{style:{fontSize:"14px",color:"#495057",marginBottom:"10px"},children:["Active Scales: ",t.length," (",k.length," left,"," ",l.length," right)"]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:t.map(o=>e.jsxs("div",{style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#f1f3f5",border:`2px solid ${o.color}`,borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("span",{style:{color:o.color,fontWeight:"bold"},children:[o.id," (",o.position,")"]}),t.length>1&&e.jsx("button",{onClick:()=>p(o.id),style:{padding:"2px 6px",fontSize:"12px",cursor:"pointer",backgroundColor:"#ff6b6b",color:"white",border:"none",borderRadius:"3px"},children:"×"})]},o.id))})]}),e.jsxs(u,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:60,left:20,right:20,top:20},scales:x},children:[e.jsx(P,{scaleId:"x",ticks:z()}),t.map(o=>e.jsx(T,{scaleId:o.id,ticks:z(),tickStyle:{strokeStyle:o.color,lineWidth:2},labelStyle:{fillStyle:o.color,font:"12px sans-serif"}},o.id)),h.map(o=>e.jsx(I,{data:o.data,xScaleId:"x",yScaleId:o.scaleId,style:{strokeStyle:o.color,lineWidth:2}},o.scaleId))]})]})}},j={render:()=>{const t=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Drawing Priorities Test"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"10px"},children:"This demonstrates the drawing layer system. Lower priority numbers draw first (background), higher numbers draw last (foreground)."}),e.jsxs("div",{style:{fontSize:"13px",color:"#495057",marginBottom:"15px"},children:[e.jsx("div",{children:e.jsx("strong",{children:"Layer Order (from back to front):"})}),e.jsx("div",{children:"• BACKGROUND (100) - Blue filled rectangle"}),e.jsx("div",{children:"• BOTTOM (200) - Green filled circle"}),e.jsx("div",{children:"• MIDDLE (200) - Red line plot (default for plots)"}),e.jsx("div",{children:"• TOP (300) - Yellow annotation text"}),e.jsx("div",{children:"• Custom (350) - Purple crosshair overlay"})]})]}),e.jsxs(u,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:60,left:70,right:20,top:20},scales:t},children:[e.jsx(D,{}),e.jsx(M,{}),e.jsx(I,{data:Array.from({length:50},(i,n)=>({x:n*2,y:50+Math.sin(n/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:3}}),e.jsx(N,{}),e.jsx(O,{})]})]})}},D=()=>(b(R.BACKGROUND,({getCtx:t,valToPos:i})=>{const n=t();n.save(),n.fillStyle="#4c6ef5aa";const s=i(15,"x"),r=i(70,"y"),d=i(60,"x"),a=i(30,"y");n.fillRect(s,r,d-s,a-r),n.fillStyle="#fff",n.font="bold 14px sans-serif",n.fillText("BACKGROUND (100)",s+10,r+25),n.restore()},[]),null),M=()=>(b(R.BOTTOM,({getCtx:t,valToPos:i})=>{const n=t();n.save(),n.fillStyle="#51cf66dd",n.strokeStyle="#2f9e44",n.lineWidth=3;const s=i(40,"x"),r=i(55,"y"),d=60;n.beginPath(),n.arc(s,r,d,0,Math.PI*2),n.fill(),n.stroke(),n.fillStyle="#fff",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("BOTTOM",s,r-8),n.fillText("(200)",s,r+10),n.restore()},[]),null),N=()=>(b(R.TOP,({getCtx:t,valToPos:i})=>{const n=t();n.save(),n.fillStyle="#ffd43bee",n.strokeStyle="#f59f00",n.lineWidth=3;const s=i(25,"x"),r=i(80,"y"),d=i(70,"x"),a=i(40,"y");n.fillRect(s,r,d-s,a-r),n.strokeRect(s,r,d-s,a-r),n.fillStyle="#000",n.font="bold 14px sans-serif",n.textAlign="left",n.fillText("TOP (300)",s+10,r+25),n.restore()},[]),null),O=()=>(b(350,({getCtx:t,valToPos:i})=>{const n=t();n.save(),n.fillStyle="#7950f2ee",n.strokeStyle="#5f3dc4",n.lineWidth=4;const s=i(50,"x"),r=i(65,"y"),d=i(85,"x"),a=i(45,"y");n.fillRect(s,r,d-s,a-r),n.strokeRect(s,r,d-s,a-r),n.fillStyle="#fff",n.font="bold 14px sans-serif",n.textAlign="left",n.fillText("CUSTOM (350)",s+10,r+25),n.restore()},[]),null);v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: 0,
      max: 1
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
          <ReactiveChild color="red" />
          <ReactiveChild color="blue" />
          <ReactiveChild color="green" />
          <ReactiveChild color="orange" />
          <ReactiveChild color="purple" />
          <ReactiveChild color="black" />
          <ReactiveChild color="gray" />
          <ReactiveChild color="pink" />
          <ReactiveChild color="brown" />
          <ReactiveChild color="cyan" />
        </CanPlot>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [series, setSeries] = useState<Array<{
      id: number;
      color: string;
      data: Array<{
        x: number;
        y: number;
      }>;
    }>>([{
      id: 1,
      color: "#ff6b6b",
      data: Array.from({
        length: 50
      }, (_, i) => ({
        x: i * 2,
        y: 50 + Math.sin(i / 5) * 25
      }))
    }]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nextId, setNextId] = useState(2);
    const colors = ["#4c6ef5", "#51cf66", "#ff6b6b", "#f59f00", "#7950f2", "#f06595", "#20c997", "#fab005"];
    const addLineSeries = () => {
      const newSeries = {
        id: nextId,
        color: colors[nextId % colors.length],
        data: Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin((i + nextId * 10) / 5) * 25 + Math.cos((i + nextId * 5) / 3) * 15
        }))
      };
      setSeries([...series, newSeries]);
      setNextId(nextId + 1);
    };
    const addScatterSeries = () => {
      const newSeries = {
        id: nextId,
        color: colors[nextId % colors.length],
        data: Array.from({
          length: 30
        }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100
        }))
      };
      setSeries([...series, newSeries]);
      setNextId(nextId + 1);
    };
    const removeSeries = (id: number) => {
      setSeries(series.filter(s => s.id !== id));
    };
    const removeLastSeries = () => {
      if (series.length > 0) {
        setSeries(series.slice(0, -1));
      }
    };
    const clearAll = () => {
      setSeries([]);
    };
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
        <div style={{
        marginBottom: "20px"
      }}>
          <h3 style={{
          margin: "0 0 10px 0"
        }}>Dynamic Series Management</h3>
          <p style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "15px"
        }}>
            Add and remove series dynamically. Each series is rendered as a
            separate component.
          </p>
          <div style={{
          display: "flex",
          gap: "10px",
          marginBottom: "15px"
        }}>
            <button onClick={addLineSeries} style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: "pointer",
            backgroundColor: "#4c6ef5",
            color: "white",
            border: "none",
            borderRadius: "4px"
          }}>
              Add Line Series
            </button>
            <button onClick={addScatterSeries} style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: "pointer",
            backgroundColor: "#51cf66",
            color: "white",
            border: "none",
            borderRadius: "4px"
          }}>
              Add Scatter Series
            </button>
            <button onClick={removeLastSeries} disabled={series.length === 0} style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: series.length === 0 ? "not-allowed" : "pointer",
            backgroundColor: series.length === 0 ? "#dee2e6" : "#f59f00",
            color: "white",
            border: "none",
            borderRadius: "4px",
            opacity: series.length === 0 ? 0.6 : 1
          }}>
              Remove Last
            </button>
            <button onClick={clearAll} disabled={series.length === 0} style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: series.length === 0 ? "not-allowed" : "pointer",
            backgroundColor: series.length === 0 ? "#dee2e6" : "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "4px",
            opacity: series.length === 0 ? 0.6 : 1
          }}>
              Clear All
            </button>
          </div>
          <div style={{
          fontSize: "14px",
          color: "#495057",
          marginBottom: "10px"
        }}>
            Active Series: {series.length}
          </div>
          <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px"
        }}>
            {series.map(s => <div key={s.id} style={{
            padding: "6px 12px",
            fontSize: "13px",
            backgroundColor: "#f1f3f5",
            border: \`2px solid \${s.color}\`,
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
                <span style={{
              color: s.color,
              fontWeight: "bold"
            }}>
                  Series {s.id}
                </span>
                <button onClick={() => removeSeries(s.id)} style={{
              padding: "2px 6px",
              fontSize: "12px",
              cursor: "pointer",
              backgroundColor: "#ff6b6b",
              color: "white",
              border: "none",
              borderRadius: "3px"
            }}>
                  ×
                </button>
              </div>)}
          </div>
        </div>

        <CanPlot style={{
        width: "100%",
        height: "500px"
      }} configuration={{
        padding: {
          bottom: 60,
          left: 70,
          right: 20,
          top: 20
        },
        scales
      }}>
          {series.map(s => {
          // Alternate between LinePlot and ScatterPlot based on data characteristics
          const isScatter = s.data.length < 40;
          if (isScatter) {
            return <ScatterPlot key={s.id} data={s.data} xScaleId="x" yScaleId="y" radius={4} style={{
              fillStyle: s.color,
              strokeStyle: s.color,
              lineWidth: 2
            }} />;
          }
          return <LinePlot key={s.id} data={s.data} xScaleId="x" yScaleId="y" style={{
            strokeStyle: s.color,
            lineWidth: 2
          }} />;
        })}
        </CanPlot>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [yScales, setYScales] = useState<Array<{
      id: string;
      color: string;
      position: "left" | "right";
    }>>([{
      id: "y1",
      color: "#4c6ef5",
      position: "left"
    }]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nextScaleNum, setNextScaleNum] = useState(2);
    const colors = ["#4c6ef5", "#51cf66", "#ff6b6b", "#f59f00", "#7950f2", "#f06595", "#20c997", "#fab005"];
    const addLeftScale = () => {
      const newScale = {
        id: \`y\${nextScaleNum}\`,
        color: colors[(nextScaleNum - 1) % colors.length],
        position: "left" as const
      };
      setYScales([...yScales, newScale]);
      setNextScaleNum(nextScaleNum + 1);
    };
    const addRightScale = () => {
      const newScale = {
        id: \`y\${nextScaleNum}\`,
        color: colors[(nextScaleNum - 1) % colors.length],
        position: "right" as const
      };
      setYScales([...yScales, newScale]);
      setNextScaleNum(nextScaleNum + 1);
    };
    const removeScale = (id: string) => {
      if (yScales.length > 1) {
        setYScales(yScales.filter(s => s.id !== id));
      }
    };
    const removeLastScale = () => {
      if (yScales.length > 1) {
        setYScales(yScales.slice(0, -1));
      }
    };
    const clearAll = () => {
      // Keep at least one scale
      setYScales([yScales[0]]);
    };

    // Calculate offsets for scales
    const leftScales = yScales.filter(s => s.position === "left");
    const rightScales = yScales.filter(s => s.position === "right");
    const scales: PlotScaleConfig[] = [{
      id: "x",
      axis: {
        position: "bottom",
        size: 40
      },
      origin: "x",
      min: 0,
      max: 100
    }, ...yScales.map(scale => {
      const samePositionScales = scale.position === "left" ? leftScales : rightScales;
      const positionIndex = samePositionScales.findIndex(s => s.id === scale.id);
      const offset = positionIndex * 60;
      return {
        id: scale.id,
        axis: {
          position: scale.position,
          size: 50,
          offset
        },
        origin: "y" as const,
        min: 0,
        max: 100
      };
    })];

    // Generate data for each scale
    const seriesData = yScales.map((scale, index) => ({
      scaleId: scale.id,
      color: scale.color,
      data: Array.from({
        length: 50
      }, (_, i) => ({
        x: i * 2,
        y: 50 + Math.sin((i + index * 15) / 5) * 25 + Math.cos((i + index * 8) / 4) * 20
      }))
    }));
    return <div style={{
      padding: "20px"
    }}>
        <div style={{
        marginBottom: "20px"
      }}>
          <h3 style={{
          margin: "0 0 10px 0"
        }}>Dynamic Scales with Ticks</h3>
          <p style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "15px"
        }}>
            Add and remove Y-axes dynamically. Each scale has its own ticks and
            can be positioned on the left or right.
          </p>
          <div style={{
          display: "flex",
          gap: "10px",
          marginBottom: "15px"
        }}>
            <button onClick={addLeftScale} style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: "pointer",
            backgroundColor: "#4c6ef5",
            color: "white",
            border: "none",
            borderRadius: "4px"
          }}>
              Add Left Scale
            </button>
            <button onClick={addRightScale} style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: "pointer",
            backgroundColor: "#51cf66",
            color: "white",
            border: "none",
            borderRadius: "4px"
          }}>
              Add Right Scale
            </button>
            <button onClick={removeLastScale} disabled={yScales.length <= 1} style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: yScales.length <= 1 ? "not-allowed" : "pointer",
            backgroundColor: yScales.length <= 1 ? "#dee2e6" : "#f59f00",
            color: "white",
            border: "none",
            borderRadius: "4px",
            opacity: yScales.length <= 1 ? 0.6 : 1
          }}>
              Remove Last
            </button>
            <button onClick={clearAll} disabled={yScales.length <= 1} style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: yScales.length <= 1 ? "not-allowed" : "pointer",
            backgroundColor: yScales.length <= 1 ? "#dee2e6" : "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "4px",
            opacity: yScales.length <= 1 ? 0.6 : 1
          }}>
              Clear All
            </button>
          </div>
          <div style={{
          fontSize: "14px",
          color: "#495057",
          marginBottom: "10px"
        }}>
            Active Scales: {yScales.length} ({leftScales.length} left,{" "}
            {rightScales.length} right)
          </div>
          <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px"
        }}>
            {yScales.map(scale => <div key={scale.id} style={{
            padding: "6px 12px",
            fontSize: "13px",
            backgroundColor: "#f1f3f5",
            border: \`2px solid \${scale.color}\`,
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
                <span style={{
              color: scale.color,
              fontWeight: "bold"
            }}>
                  {scale.id} ({scale.position})
                </span>
                {yScales.length > 1 && <button onClick={() => removeScale(scale.id)} style={{
              padding: "2px 6px",
              fontSize: "12px",
              cursor: "pointer",
              backgroundColor: "#ff6b6b",
              color: "white",
              border: "none",
              borderRadius: "3px"
            }}>
                    ×
                  </button>}
              </div>)}
          </div>
        </div>

        <CanPlot style={{
        width: "100%",
        height: "500px"
      }} configuration={{
        padding: {
          bottom: 60,
          left: 20,
          right: 20,
          top: 20
        },
        scales
      }}>
          <XTicks scaleId="x" ticks={makeLinearTicks()} />

          {yScales.map(scale => <YTicks key={scale.id} scaleId={scale.id} ticks={makeLinearTicks()} tickStyle={{
          strokeStyle: scale.color,
          lineWidth: 2
        }} labelStyle={{
          fillStyle: scale.color,
          font: "12px sans-serif"
        }} />)}

          {seriesData.map(series => <LinePlot key={series.scaleId} data={series.data} xScaleId="x" yScaleId={series.scaleId} style={{
          strokeStyle: series.color,
          lineWidth: 2
        }} />)}
        </CanPlot>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
        <div style={{
        marginBottom: "20px"
      }}>
          <h3 style={{
          margin: "0 0 10px 0"
        }}>Drawing Priorities Test</h3>
          <p style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "10px"
        }}>
            This demonstrates the drawing layer system. Lower priority numbers
            draw first (background), higher numbers draw last (foreground).
          </p>
          <div style={{
          fontSize: "13px",
          color: "#495057",
          marginBottom: "15px"
        }}>
            <div>
              <strong>Layer Order (from back to front):</strong>
            </div>
            <div>• BACKGROUND (100) - Blue filled rectangle</div>
            <div>• BOTTOM (200) - Green filled circle</div>
            <div>• MIDDLE (200) - Red line plot (default for plots)</div>
            <div>• TOP (300) - Yellow annotation text</div>
            <div>• Custom (350) - Purple crosshair overlay</div>
          </div>
        </div>

        <CanPlot style={{
        width: "100%",
        height: "500px"
      }} configuration={{
        padding: {
          bottom: 60,
          left: 70,
          right: 20,
          top: 20
        },
        scales
      }}>
          {/* BACKGROUND layer - draws first */}
          <BackgroundLayer />

          {/* BOTTOM layer - draws after background */}
          <BottomLayer />

          {/* MIDDLE layer - default for LinePlot */}
          <LinePlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: 50 + Math.sin(i / 5) * 30
        }))} xScaleId="x" yScaleId="y" style={{
          strokeStyle: "#ff6b6b",
          lineWidth: 3
        }} />

          {/* TOP layer - draws after plots */}
          <TopLayer />

          {/* Custom high priority - draws last */}
          <HighPriorityLayer />
        </CanPlot>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const J=["ReactiveUpdates","DynamicSeries","DynamicScales","DrawingPriorities"];export{j as DrawingPriorities,w as DynamicScales,C as DynamicSeries,v as ReactiveUpdates,J as __namedExportsOrder,F as default};
