import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b as Z,d as U,h as on,C as j}from"./CanPlot-CfMimGA8.js";import{S as J}from"./ScatterPlot-BwTWnKV5.js";import{C as _}from"./ChartAreaInteractions-BSwIeNTT.js";import{C as z}from"./CrossHair-D-vH-R7N.js";import{S as D}from"./SelectBox-DebENUK6.js";import"./iframe-D0RbRrVO.js";import"./AxisOverlay-CRjmXz6R.js";import"./preload-helper-PPVm8Dsz.js";const k=({data:e,xScaleId:t,yScaleId:n,style:a})=>(Z(({getCtx:l,clampXPosToChartArea:i,clampYPosToChartArea:h,valToPos:m})=>{const y=[];for(const s of e){const d=i(m(s.x,t)),c=h(m(s.y[0],n)),x=h(m(s.y[1],n));y.push({x:d,y:c}),y.unshift({x:d,y:x})}const r=l();if(y.length>0){r.save(),r.beginPath(),U(r,a),r.moveTo(y[0].x,y[0].y);for(const s of y)r.lineTo(s.x,s.y);r.closePath(),r.fill(),r.restore()}},[e,t,n,a]),null),Q=({scaleId:e,tickStyle:t,labelStyle:n,labelGap:a,tickSize:l,ticks:i})=>(Z(({getCtx:h,valToPos:m,getScale:y,getFrame:r})=>{const s=h(),d=y(e);if(!d||!d.axis||d.origin!=="x")return;const c=d.axis,x=c.position==="top"?c.canvasRect.y+c.canvasRect.height:c.canvasRect.y,u=window.devicePixelRatio||1,C=x,p=(l??6)*u,g=c.position==="top"?x-p:x+p,S=(a??12)*u;s.save(),s.fontKerning="auto",U(s,{...t}),s.beginPath();const M=Array.isArray(i)?i:i({...d,axis:c},r());for(const{value:I}of M){const f=m(I,e,"canvas");s.moveTo(f,C),s.lineTo(f,g)}s.stroke(),s.restore(),s.save(),U(s,{textBaseline:c.position==="top"?"bottom":"top",textAlign:"center",...t,...n});for(const{value:I,label:f}of M){const b=m(I,e,"canvas"),w=f.split(`
`);for(let T=0;T<w.length;T++)s.fillText(w[T],b,g+u*2+T*S)}s.restore()},[i,e,t,n]),null),nn=({scaleId:e,tickStyle:t,labelStyle:n,labelGap:a,tickSize:l,ticks:i})=>(Z(({getCtx:h,valToPos:m,getScale:y,getFrame:r})=>{const s=h(),d=y(e);if(!d||!d.axis||d.origin!=="y")return;const c=d.axis,x=c.position==="left"?c.canvasRect.x+c.canvasRect.width:c.canvasRect.x,u=window.devicePixelRatio||1,C=x,p=(l??6)*u,g=c.position==="left"?x-p:x+p,S=(a??12)*u,M=Array.isArray(i)?i:i({...d,axis:c},r());s.save(),s.fontKerning="auto",U(s,{...t}),s.beginPath();for(const{value:I}of M){const f=m(I,e,"canvas");s.moveTo(C,f),s.lineTo(g,f)}s.stroke(),s.restore(),s.save(),U(s,{textBaseline:"middle",textAlign:c.position==="left"?"right":"left",...t,...n});for(const{value:I,label:f}of M){const b=m(I,e,"canvas"),w=f.split(`
`);for(let T=0;T<w.length;T++)s.fillText(` ${w[T]} `,g,b+T*S)}s.restore()},[i,e,t,n]),null),en=60,rn=30,tn="UTC",ln="en-GB",Y=({space:e,formatter:t}={})=>(n,a)=>{const{min:l,max:i}=n,h=[],m=window.devicePixelRatio||1,y=(e??(n.origin==="x"?en:rn))*m,r=on(a,y,n.id),s=F.find(c=>c>r)??1;let d=l%s<Number.EPSILON?l:l+s-l%s;for(;d<=i;)h.push(d),d+=s;return(t??cn)(h)},cn=e=>{const t=Math.max(0,Math.ceil(-Math.log10(e[1]-e[0])));return e.map(n=>({value:n,label:n.toFixed(t)}))},F=[];for(let e=-12;e<=12;e++)F.push(1*10**e),F.push(2*10**e),F.push(5*10**e);const dn=1,sn=1e3*dn,G=60*sn,O=60*G,$=24*O,yn=30*$,xn=365*$,mn=[[1,"milliseconds"],[2,"milliseconds"],[5,"milliseconds"],[10,"milliseconds"],[20,"milliseconds"],[50,"milliseconds"],[100,"milliseconds"],[200,"milliseconds"],[500,"milliseconds"],[1,"seconds"],[5,"seconds"],[10,"seconds"],[15,"seconds"],[30,"seconds"],[1,"minutes"],[5,"minutes"],[10,"minutes"],[15,"minutes"],[30,"minutes"],[1,"hours"],[2,"hours"],[3,"hours"],[4,"hours"],[6,"hours"],[8,"hours"],[12,"hours"],[1,"days"],[3,"days"],[5,"days"],[7,"days"],[10,"days"],[15,"days"],[1,"months"],[2,"months"],[3,"months"],[4,"months"],[6,"months"],[1,"years"],[2,"years"],[5,"years"],[10,"years"],[25,"years"],[50,"years"],[100,"years"]],W=e=>{const[t,n]=e;switch(n){case"milliseconds":return t;case"seconds":return t*sn;case"minutes":return t*G;case"hours":return t*O;case"days":return t*$;case"months":return t*yn;case"years":return t*xn}},hn=(e,t)=>{const n=new Date(e);return n.setUTCMilliseconds(n.getUTCMilliseconds()+t),n.getTime()},un=(e,t)=>{const n=new Date(e);return n.setUTCSeconds(n.getUTCSeconds()+t),n.getTime()},gn=(e,t)=>{const n=new Date(e);return n.setUTCMinutes(n.getUTCMinutes()+t),n.getTime()},fn=(e,t)=>{const n=new Date(e);return n.setUTCHours(n.getUTCHours()+t),n.getTime()},pn=(e,t)=>{const n=new Date(e);return n.setUTCDate(n.getUTCDate()+t),n.getTime()},q=(e,t)=>{const n=new Date(e);return n.setUTCMonth(n.getUTCMonth()+t),n.getTime()},A=(e,t)=>{const[n,a]=t;switch(a){case"milliseconds":return hn(e,n);case"seconds":return un(e,n);case"minutes":return gn(e,n);case"hours":return fn(e,n);case"days":return pn(e,n);case"months":return q(e,n);case"years":return q(e,n*12)}};function H(e,t){const n=new Date(e),a=new Date(n.toLocaleString("en-US",{timeZone:t})),l=new Date(n.toLocaleString("en-US",{timeZone:"UTC"}));return(a.getTime()-l.getTime())/(3600*1e3)}const Sn=(e,t,n="UTC")=>{const[a,l]=t;let i=new Date(e);const h=()=>{i.setUTCHours(-H(i,n),0,0,0)};switch(l){case"milliseconds":i.setUTCMilliseconds(Math.ceil(i.getUTCMilliseconds()/a)*a);break;case"seconds":i.setUTCSeconds(Math.ceil(i.getUTCSeconds()/a)*a,0);break;case"minutes":i.setUTCMinutes(Math.ceil(i.getTime()%O/G/a)*a,0,0);break;case"hours":i.setUTCHours(Math.ceil(i.getTime()%$/O/a)*a,0,0,0);break;case"days":case"months":case"years":l==="months"?i.setUTCDate(1):l==="years"&&i.setUTCMonth(0,1),h(),i.getTime()<e&&(i=new Date(A(i,[1,l])));break}return i.getTime()},bn=({timeZone:e=tn,space:t=en,formatter:n,locale:a,showTimezone:l}={})=>(i,h)=>{const{min:m,max:y}=i,r=Math.floor(h.chartAreaCanvasPX.width/t)+1,d=(y-m)/r,[c,x]=mn.find(S=>W(S)>=d)??[1,"milliseconds"],u=Sn(m,[c,x],e),C=H(u,e),p=[u];let g;for(;;){switch(x){case"milliseconds":case"seconds":case"minutes":case"hours":{g=A(u,[p.length*c,x]);break}case"days":{const S=A(u,[p.length*c,x]);g=A(S,[C-H(S,e),"hours"]);break}case"months":case"years":{const S=A(A(A(u,[C,"hours"]),[p.length*c,x]),[-C,"hours"]);g=A(S,[C-H(S,e),"hours"]);break}}if(g>y)break;p.push(g)}return(n??Tn({locale:a,showTimezone:l,timeZone:e}))(p)},v=(e,t,n)=>e.find(a=>a.type===n)?.value!==t.find(a=>a.type===n)?.value,Tn=({timeZone:e=tn,locale:t=ln,showTimezone:n=!0})=>{const a=new Intl.DateTimeFormat(t,{year:"numeric",day:"numeric",month:"short",hour:"numeric",hourCycle:"h23",minute:"numeric",second:"numeric",fractionalSecondDigits:3,timeZoneName:"short",timeZone:e});return l=>{const i=l[1]-l[0],h=i<W([1,"days"]),m=i<W([1,"minutes"]),y=i<W([1,"seconds"]);return l.map(r=>({value:r,label:a.formatToParts(new Date(r))})).map((r,s,d)=>{const c=d[s-1],x=s===0||v(r.label,c.label,"year"),u=s===0||v(r.label,c.label,"day"),C=s===0||v(r.label,c.label,"month"),p=s===0||v(r.label,c.label,"hour"),g=s===0||v(r.label,c.label,"timeZoneName"),S=s===0||v(r.label,c.label,"minute"),M=s===0||v(r.label,c.label,"second"),I=s===0||v(r.label,c.label,"fractionalSecond"),f=[];if(h&&(p||S||g||M||I)){const b=r.label.find(P=>P.type==="hour")?.value,w=r.label.find(P=>P.type==="minute")?.value,T=r.label.find(P=>P.type==="timeZoneName")?.value;let K="";if(m){const P=r.label.find(X=>X.type==="second")?.value,an=r.label.find(X=>X.type==="fractionalSecond")?.value;K=`:${P}`+(y?`.${an}`:"")}f.push(`${b}:${w}${K}`+(n&&g?` ${T}`:""))}return(u||C)&&f.push([r.label.find(b=>b.type==="month")?.value,u&&r.label.find(b=>b.type==="day")?.value].filter(Boolean).join(" ")),x&&f.push(r.label.find(b=>b.type==="year")?.value),{value:r.value,label:f.filter(b=>b).join(`
`)}})}},Un={title:"CanPlot/AreaPlot",component:j,parameters:{layout:"fullscreen"},tags:["autodocs"]},V={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return o.jsx("div",{style:{padding:"20px"},children:o.jsxs(j,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[o.jsx(k,{data:Array.from({length:50},(t,n)=>({x:n*2,y:[30+Math.sin(n/5)*15,70+Math.sin(n/5)*15]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(66, 153, 225, 0.5)"}}),o.jsx(Q,{scaleId:"x",ticks:Y()}),o.jsx(nn,{scaleId:"y",ticks:Y()})]})})}},L={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return o.jsx("div",{style:{padding:"20px"},children:o.jsxs(j,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[o.jsxs(_,{sync:{key:"area",xViaScaleId:"x",yViaScaleId:"y"},children:[o.jsx(z,{}),o.jsx(D,{makeStyle:()=>({backgroundColor:"#4299e144"})})]}),o.jsx(k,{data:Array.from({length:60},(t,n)=>{const a=n*1.67,l=50+Math.sin(n/8)*20,i=15+Math.cos(n/10)*10;return{x:a,y:[l-i,l+i]}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(72, 187, 120, 0.6)"}})]})})}},E={render:()=>{const e=Date.parse("2025-11-01T12:00:00Z"),t=[{id:"t",axis:{position:"bottom",size:50},origin:"x",min:e-1e3*60*60*24*7,max:e},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return o.jsx("div",{style:{padding:"20px"},children:o.jsxs(j,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[o.jsxs(_,{sync:{key:"timeseries-area",xViaScaleId:"t",yViaScaleId:"y"},children:[o.jsx(z,{}),o.jsx(D,{makeStyle:()=>({backgroundColor:"#ed8936aa"})})]}),o.jsx(k,{data:Array.from({length:100},(n,a)=>{const l=e-6048e5+a*1e3*60*60*24*7/100,i=50+Math.sin(a/10)*20;return{x:l,y:[i-15,i+15]}}),xScaleId:"t",yScaleId:"y",style:{fillStyle:"rgba(237, 137, 54, 0.5)"}}),o.jsx(Q,{scaleId:"t",ticks:bn({})}),o.jsx(nn,{scaleId:"y",ticks:Y()})]})})}},B={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return o.jsx("div",{style:{padding:"20px"},children:o.jsxs(j,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[o.jsxs(_,{sync:{key:"multi-area",xViaScaleId:"x",yViaScaleId:"y"},children:[o.jsx(z,{}),o.jsx(D,{makeStyle:()=>({backgroundColor:"#9f7aea44"})})]}),o.jsx(k,{data:Array.from({length:50},(t,n)=>({x:n*2,y:[10+Math.sin(n/5)*8,30+Math.sin(n/5)*8]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(66, 153, 225, 0.4)"}}),o.jsx(k,{data:Array.from({length:50},(t,n)=>({x:n*2,y:[40+Math.cos(n/6)*10,60+Math.cos(n/6)*10]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(72, 187, 120, 0.4)"}}),o.jsx(k,{data:Array.from({length:50},(t,n)=>({x:n*2,y:[70+Math.sin(n/4)*6,90+Math.sin(n/4)*6]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(237, 137, 54, 0.4)"}})]})})}},N={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}],t=Array.from({length:40},(n,a)=>({x:a*2.5,center:50+Math.sin(a/5)*25}));return o.jsx("div",{style:{padding:"20px"},children:o.jsxs(j,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[o.jsxs(_,{sync:{key:"area-scatter",xViaScaleId:"x",yViaScaleId:"y"},children:[o.jsx(z,{}),o.jsx(D,{makeStyle:()=>({backgroundColor:"#f6ad5544"})})]}),o.jsx(k,{data:t.map(n=>({x:n.x,y:[n.center-12,n.center+12]})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(159, 122, 234, 0.3)"}}),o.jsx(J,{data:t.map(n=>({x:n.x,y:n.center})),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#805ad5",strokeStyle:"#553c9a",lineWidth:2}})]})})}},R={render:()=>{const e=[{id:"x",axis:{position:"bottom",size:40},origin:"x",min:0,max:100},{id:"y",axis:{position:"left",size:40},origin:"y",min:0,max:100}];return o.jsx("div",{style:{padding:"20px"},children:o.jsxs(j,{style:{width:"100%",height:"400px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:e},children:[o.jsxs(_,{sync:{key:"confidence",xViaScaleId:"x",yViaScaleId:"y"},children:[o.jsx(z,{}),o.jsx(D,{makeStyle:()=>({backgroundColor:"#fc864944"})})]}),o.jsx(k,{data:Array.from({length:100},(t,n)=>{const a=n*1.25,l=50+(a-50)*.3;return{x:a,y:[l-20,l+20]}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(252, 129, 129, 0.2)"}}),o.jsx(k,{data:Array.from({length:100},(t,n)=>{const a=n*1.25,l=50+(a-50)*.3;return{x:a,y:[l-8,l+8]}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"rgba(252, 129, 129, 0.5)"}}),o.jsx(J,{data:Array.from({length:80},(t,n)=>{const a=n*1.25;return{x:a,y:50+(a-50)*.3}}),xScaleId:"x",yScaleId:"y",style:{fillStyle:"#c92a2a",strokeStyle:"#c92a2a",lineWidth:2}})]})})}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
          <AreaPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: [30 + Math.sin(i / 5) * 15, 70 + Math.sin(i / 5) * 15]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(66, 153, 225, 0.5)"
        }} />
          <XTicks scaleId="x" ticks={makeLinearTicks()} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />
        </CanPlot>
      </div>;
  }
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
          key: "area",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#4299e144"
          })} />
          </ChartAreaInteractions>

          <AreaPlot data={Array.from({
          length: 60
        }, (_, i) => {
          const x = i * 1.67;
          const center = 50 + Math.sin(i / 8) * 20;
          const width = 15 + Math.cos(i / 10) * 10;
          return {
            x,
            y: [center - width, center + width]
          };
        })} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(72, 187, 120, 0.6)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
          key: "timeseries-area",
          xViaScaleId: "t",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#ed8936aa"
          })} />
          </ChartAreaInteractions>

          <AreaPlot data={Array.from({
          length: 100
        }, (_, i) => {
          const x = refPoint - 1000 * 60 * 60 * 24 * 7 + i * 1000 * 60 * 60 * 24 * 7 / 100;
          const baseValue = 50 + Math.sin(i / 10) * 20;
          return {
            x,
            y: [baseValue - 15, baseValue + 15]
          };
        })} xScaleId="t" yScaleId="y" style={{
          fillStyle: "rgba(237, 137, 54, 0.5)"
        }} />
          <XTicks scaleId="t" ticks={makeTimeTicks({})} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />
        </CanPlot>
      </div>;
  }
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
          key: "multi-area",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#9f7aea44"
          })} />
          </ChartAreaInteractions>

          <AreaPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: [10 + Math.sin(i / 5) * 8, 30 + Math.sin(i / 5) * 8]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(66, 153, 225, 0.4)"
        }} />

          <AreaPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: [40 + Math.cos(i / 6) * 10, 60 + Math.cos(i / 6) * 10]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(72, 187, 120, 0.4)"
        }} />

          <AreaPlot data={Array.from({
          length: 50
        }, (_, i) => ({
          x: i * 2,
          y: [70 + Math.sin(i / 4) * 6, 90 + Math.sin(i / 4) * 6]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(237, 137, 54, 0.4)"
        }} />
        </CanPlot>
      </div>;
  }
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
    const dataPoints = Array.from({
      length: 40
    }, (_, i) => ({
      x: i * 2.5,
      center: 50 + Math.sin(i / 5) * 25
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
          key: "area-scatter",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#f6ad5544"
          })} />
          </ChartAreaInteractions>

          {/* Area plot showing the range/uncertainty */}
          <AreaPlot data={dataPoints.map(d => ({
          x: d.x,
          y: [d.center - 12, d.center + 12]
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(159, 122, 234, 0.3)"
        }} />

          {/* Scatter plot showing the actual values */}
          <ScatterPlot data={dataPoints.map(d => ({
          x: d.x,
          y: d.center
        }))} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#805ad5",
          strokeStyle: "#553c9a",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
          key: "confidence",
          xViaScaleId: "x",
          yViaScaleId: "y"
        }}>
            <Crosshair />
            <SelectBox makeStyle={() => ({
            backgroundColor: "#fc864944"
          })} />
          </ChartAreaInteractions>

          {/* Wide confidence band */}
          <AreaPlot data={Array.from({
          length: 100
        }, (_, i) => {
          const x = i * 1.25;
          const center = 50 + (x - 50) * 0.3;
          return {
            x,
            y: [center - 20, center + 20]
          };
        })} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(252, 129, 129, 0.2)"
        }} />

          {/* Narrow confidence band */}
          <AreaPlot data={Array.from({
          length: 100
        }, (_, i) => {
          const x = i * 1.25;
          const center = 50 + (x - 50) * 0.3;
          return {
            x,
            y: [center - 8, center + 8]
          };
        })} xScaleId="x" yScaleId="y" style={{
          fillStyle: "rgba(252, 129, 129, 0.5)"
        }} />

          {/* Center line */}
          <ScatterPlot data={Array.from({
          length: 80
        }, (_, i) => {
          const x = i * 1.25;
          return {
            x,
            y: 50 + (x - 50) * 0.3
          };
        })} xScaleId="x" yScaleId="y" style={{
          fillStyle: "#c92a2a",
          strokeStyle: "#c92a2a",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...R.parameters?.docs?.source}}};const _n=["Basic","WithInteractions","TimeSeries","MultipleAreas","WithScatterOverlay","ConfidenceBands"];export{V as Basic,R as ConfidenceBands,B as MultipleAreas,E as TimeSeries,L as WithInteractions,N as WithScatterOverlay,_n as __namedExportsOrder,Un as default};
