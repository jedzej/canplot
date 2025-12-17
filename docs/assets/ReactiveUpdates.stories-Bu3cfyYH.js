import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as S,u,a as R}from"./frameContext-CrXrEaLj.js";import{L as I}from"./LinePlot-ujVJxzNp.js";import{S as B}from"./ScatterPlot-B7zLWRLd.js";import"./BarPlot-Bu-wIg7R.js";import"./AreaPlot-DoMDCi9z.js";import"./SparklinePlot-BsC-EJc3.js";import{X as P,m as z,Y as T}from"./tickUtils-DbpChurw.js";import"./ChartAreaInteractions-BzkCe_6_.js";import{r as x}from"./iframe-m42l96Zd.js";import"./CrossHair-ss4jebC2.js";import"./SelectBox-DO-mRQFB.js";import"./AxisOverlay-Cizt_259.js";import"./preload-helper-PPVm8Dsz.js";const V={component:S,parameters:{layout:"fullscreen"},tags:["autodocs"]},k={render:()=>{const n=[{id:"x",axis:{position:"bottom",size:60},origin:"x",min:0,max:1},{id:"y",axis:{position:"left",size:60},origin:"y",min:0,max:100}];return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Default Tick Styles"}),e.jsxs(S,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:n},children:[e.jsx(d,{color:"red"}),e.jsx(d,{color:"blue"}),e.jsx(d,{color:"green"}),e.jsx(d,{color:"orange"}),e.jsx(d,{color:"purple"}),e.jsx(d,{color:"black"}),e.jsx(d,{color:"gray"}),e.jsx(d,{color:"pink"}),e.jsx(d,{color:"brown"}),e.jsx(d,{color:"cyan"})]})]})}},d=({color:n})=>{const[i,t]=x.useState(.5);return x.useEffect(()=>{const r=setInterval(()=>{t(Math.random())},1);return()=>clearInterval(r)},[]),u("TOP",({clampYPosToChartArea:r,ctx:s,valToPos:a})=>{const p=a(i,"x","canvas"),f=r(-1/0,"canvas"),g=r(1/0,"canvas");s.save(),s.beginPath(),s.moveTo(p,f),s.lineTo(p,g),s.strokeStyle=n,s.lineWidth=2,s.stroke(),s.closePath(),s.restore()},[i,n]),null},v={render:()=>{const[n,i]=x.useState([{id:1,color:"#ff6b6b",data:Array.from({length:50},(l,c)=>({x:c*2,y:50+Math.sin(c/5)*25}))}]),[t,r]=x.useState(2),s=["#4c6ef5","#51cf66","#ff6b6b","#f59f00","#7950f2","#f06595","#20c997","#fab005"],a=()=>{const l={id:t,color:s[t%s.length],data:Array.from({length:50},(c,y)=>({x:y*2,y:50+Math.sin((y+t*10)/5)*25+Math.cos((y+t*5)/3)*15}))};i([...n,l]),r(t+1)},p=()=>{const l={id:t,color:s[t%s.length],data:Array.from({length:30},()=>({x:Math.random()*100,y:Math.random()*100}))};i([...n,l]),r(t+1)},f=l=>{i(n.filter(c=>c.id!==l))},g=()=>{n.length>0&&i(n.slice(0,-1))},j=()=>{i([])},b=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Dynamic Series Management"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"15px"},children:"Add and remove series dynamically. Each series is rendered as a separate component."}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"15px"},children:[e.jsx("button",{onClick:a,style:{padding:"8px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"#4c6ef5",color:"white",border:"none",borderRadius:"4px"},children:"Add Line Series"}),e.jsx("button",{onClick:p,style:{padding:"8px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"#51cf66",color:"white",border:"none",borderRadius:"4px"},children:"Add Scatter Series"}),e.jsx("button",{onClick:g,disabled:n.length===0,style:{padding:"8px 16px",fontSize:"14px",cursor:n.length===0?"not-allowed":"pointer",backgroundColor:n.length===0?"#dee2e6":"#f59f00",color:"white",border:"none",borderRadius:"4px",opacity:n.length===0?.6:1},children:"Remove Last"}),e.jsx("button",{onClick:j,disabled:n.length===0,style:{padding:"8px 16px",fontSize:"14px",cursor:n.length===0?"not-allowed":"pointer",backgroundColor:n.length===0?"#dee2e6":"#ff6b6b",color:"white",border:"none",borderRadius:"4px",opacity:n.length===0?.6:1},children:"Clear All"})]}),e.jsxs("div",{style:{fontSize:"14px",color:"#495057",marginBottom:"10px"},children:["Active Series: ",n.length]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:n.map(l=>e.jsxs("div",{style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#f1f3f5",border:`2px solid ${l.color}`,borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("span",{style:{color:l.color,fontWeight:"bold"},children:["Series ",l.id]}),e.jsx("button",{onClick:()=>f(l.id),style:{padding:"2px 6px",fontSize:"12px",cursor:"pointer",backgroundColor:"#ff6b6b",color:"white",border:"none",borderRadius:"3px"},children:"×"})]},l.id))})]}),e.jsx(S,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:60,left:70,right:20,top:20},scales:b},children:n.map(l=>l.data.length<40?e.jsx(B,{data:l.data,xScaleId:"x",yScaleId:"y",radius:4,style:{fillStyle:l.color,strokeStyle:l.color,lineWidth:2}},l.id):e.jsx(I,{data:l.data,xScaleId:"x",yScaleId:"y",style:{strokeStyle:l.color,lineWidth:2}},l.id))})]})}},C={render:()=>{const[n,i]=x.useState([{id:"y1",color:"#4c6ef5",position:"left"}]),[t,r]=x.useState(2),s=["#4c6ef5","#51cf66","#ff6b6b","#f59f00","#7950f2","#f06595","#20c997","#fab005"],a=()=>{const o={id:`y${t}`,color:s[(t-1)%s.length],position:"left"};i([...n,o]),r(t+1)},p=()=>{const o={id:`y${t}`,color:s[(t-1)%s.length],position:"right"};i([...n,o]),r(t+1)},f=o=>{n.length>1&&i(n.filter(h=>h.id!==o))},g=()=>{n.length>1&&i(n.slice(0,-1))},j=()=>{i([n[0]])},b=n.filter(o=>o.position==="left"),l=n.filter(o=>o.position==="right"),c=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},...n.map(o=>{const m=(o.position==="left"?b:l).findIndex(L=>L.id===o.id)*60;return{id:o.id,axis:{position:o.position,size:50,offset:m},origin:"y",min:0,max:100}})],y=n.map((o,h)=>({scaleId:o.id,color:o.color,data:Array.from({length:50},(A,m)=>({x:m*2,y:50+Math.sin((m+h*15)/5)*25+Math.cos((m+h*8)/4)*20}))}));return e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Dynamic Scales with Ticks"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"15px"},children:"Add and remove Y-axes dynamically. Each scale has its own ticks and can be positioned on the left or right."}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"15px"},children:[e.jsx("button",{onClick:a,style:{padding:"8px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"#4c6ef5",color:"white",border:"none",borderRadius:"4px"},children:"Add Left Scale"}),e.jsx("button",{onClick:p,style:{padding:"8px 16px",fontSize:"14px",cursor:"pointer",backgroundColor:"#51cf66",color:"white",border:"none",borderRadius:"4px"},children:"Add Right Scale"}),e.jsx("button",{onClick:g,disabled:n.length<=1,style:{padding:"8px 16px",fontSize:"14px",cursor:n.length<=1?"not-allowed":"pointer",backgroundColor:n.length<=1?"#dee2e6":"#f59f00",color:"white",border:"none",borderRadius:"4px",opacity:n.length<=1?.6:1},children:"Remove Last"}),e.jsx("button",{onClick:j,disabled:n.length<=1,style:{padding:"8px 16px",fontSize:"14px",cursor:n.length<=1?"not-allowed":"pointer",backgroundColor:n.length<=1?"#dee2e6":"#ff6b6b",color:"white",border:"none",borderRadius:"4px",opacity:n.length<=1?.6:1},children:"Clear All"})]}),e.jsxs("div",{style:{fontSize:"14px",color:"#495057",marginBottom:"10px"},children:["Active Scales: ",n.length," (",b.length," left,"," ",l.length," right)"]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:n.map(o=>e.jsxs("div",{style:{padding:"6px 12px",fontSize:"13px",backgroundColor:"#f1f3f5",border:`2px solid ${o.color}`,borderRadius:"4px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("span",{style:{color:o.color,fontWeight:"bold"},children:[o.id," (",o.position,")"]}),n.length>1&&e.jsx("button",{onClick:()=>f(o.id),style:{padding:"2px 6px",fontSize:"12px",cursor:"pointer",backgroundColor:"#ff6b6b",color:"white",border:"none",borderRadius:"3px"},children:"×"})]},o.id))})]}),e.jsxs(S,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:60,left:20,right:20,top:20},scales:c},children:[e.jsx(P,{scaleId:"x",ticks:z()}),n.map(o=>e.jsx(T,{scaleId:o.id,ticks:z(),tickStyle:{strokeStyle:o.color,lineWidth:2},labelStyle:{fillStyle:o.color,font:"12px sans-serif"}},o.id)),y.map(o=>e.jsx(I,{data:o.data,xScaleId:"x",yScaleId:o.scaleId,style:{strokeStyle:o.color,lineWidth:2}},o.scaleId))]})]})}},w={render:()=>{const n=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return e.jsxs("div",{style:{padding:"20px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 10px 0"},children:"Drawing Priorities Test"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"10px"},children:"This demonstrates the drawing layer system. Lower priority numbers draw first (background), higher numbers draw last (foreground)."}),e.jsxs("div",{style:{fontSize:"13px",color:"#495057",marginBottom:"15px"},children:[e.jsx("div",{children:e.jsx("strong",{children:"Layer Order (from back to front):"})}),e.jsx("div",{children:"• BACKGROUND (100) - Blue filled rectangle"}),e.jsx("div",{children:"• BOTTOM (200) - Green filled circle"}),e.jsx("div",{children:"• MIDDLE (200) - Red line plot (default for plots)"}),e.jsx("div",{children:"• TOP (300) - Yellow annotation text"}),e.jsx("div",{children:"• Custom (350) - Purple crosshair overlay"})]})]}),e.jsxs(S,{style:{width:"100%",height:"500px"},configuration:{padding:{bottom:60,left:70,right:20,top:20},scales:n},children:[e.jsx(D,{}),e.jsx(M,{}),e.jsx(I,{data:Array.from({length:50},(i,t)=>({x:t*2,y:50+Math.sin(t/5)*30})),xScaleId:"x",yScaleId:"y",style:{strokeStyle:"#ff6b6b",lineWidth:3}}),e.jsx(N,{}),e.jsx(O,{})]})]})}},D=()=>(u(R.BACKGROUND,({ctx:n,valToPos:i})=>{n.save(),n.fillStyle="#4c6ef5aa";const t=i(15,"x"),r=i(70,"y"),s=i(60,"x"),a=i(30,"y");n.fillRect(t,r,s-t,a-r),n.fillStyle="#fff",n.font="bold 14px sans-serif",n.fillText("BACKGROUND (100)",t+10,r+25),n.restore()},[]),null),M=()=>(u(R.BOTTOM,({ctx:n,valToPos:i})=>{n.save(),n.fillStyle="#51cf66dd",n.strokeStyle="#2f9e44",n.lineWidth=3;const t=i(40,"x"),r=i(55,"y"),s=60;n.beginPath(),n.arc(t,r,s,0,Math.PI*2),n.fill(),n.stroke(),n.fillStyle="#fff",n.font="bold 14px sans-serif",n.textAlign="center",n.fillText("BOTTOM",t,r-8),n.fillText("(200)",t,r+10),n.restore()},[]),null),N=()=>(u(R.TOP,({ctx:n,valToPos:i})=>{n.save(),n.fillStyle="#ffd43bee",n.strokeStyle="#f59f00",n.lineWidth=3;const t=i(25,"x"),r=i(80,"y"),s=i(70,"x"),a=i(40,"y");n.fillRect(t,r,s-t,a-r),n.strokeRect(t,r,s-t,a-r),n.fillStyle="#000",n.font="bold 14px sans-serif",n.textAlign="left",n.fillText("TOP (300)",t+10,r+25),n.restore()},[]),null),O=()=>(u(350,({ctx:n,valToPos:i})=>{n.save(),n.fillStyle="#7950f2ee",n.strokeStyle="#5f3dc4",n.lineWidth=4;const t=i(50,"x"),r=i(65,"y"),s=i(85,"x"),a=i(45,"y");n.fillRect(t,r,s-t,a-r),n.strokeRect(t,r,s-t,a-r),n.fillStyle="#fff",n.font="bold 14px sans-serif",n.textAlign="left",n.fillText("CUSTOM (350)",t+10,r+25),n.restore()},[]),null);k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const Z=["ReactiveUpdates","DynamicSeries","DynamicScales","DrawingPriorities"];export{w as DrawingPriorities,C as DynamicScales,v as DynamicSeries,k as ReactiveUpdates,Z as __namedExportsOrder,V as default};
