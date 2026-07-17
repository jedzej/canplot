import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as l}from"./frameContext-DY6mtHib.js";import{L as f}from"./LinePlot-Dz_NYnX4.js";import{X as h,a as x,Y as u,m as k,b as S}from"./tickUtils-DK7z9o3l.js";import"./iframe-Aps066pu.js";import"./preload-helper-PPVm8Dsz.js";const R={component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},i=Date.parse("2025-11-05T12:00:00Z"),p=1e3*60*60*24*7,b=Array.from({length:200},(n,t)=>({x:i-p+t*p/200,y:50+Math.sin(t/8)*25+Math.cos(t/3)*5})),j=[{locale:"en-US",label:"English (United States)"},{locale:"en-GB",label:"English (United Kingdom)"},{locale:"de-DE",label:"German (Germany)"},{locale:"fr-FR",label:"French (France)"},{locale:"es-ES",label:"Spanish (Spain)"},{locale:"pl-PL",label:"Polish (Poland)"},{locale:"ja-JP",label:"Japanese (Japan)"},{locale:"zh-Hans",label:"Chinese (Simplified, China)"},{locale:"zh-Hant",label:"Chinese (Traditional, Taiwan)"},{locale:"ru-RU",label:"Russian (Russia)"},{locale:"ar-EG",label:"Arabic (Egypt)"}],L=({locale:n,label:t,timeZone:a="UTC",showTimezone:s=!1})=>{const o=`t-${n}`,y=[{id:o,axis:{position:"bottom",size:60},origin:"x",min:i-p,max:i},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h4",{style:{margin:"0 0 2px"},children:t}),e.jsxs("p",{style:{color:"#888",fontSize:"12px",margin:"0 0 6px"},children:["locale: ",e.jsx("code",{children:n})," · timeZone: ",e.jsx("code",{children:a})]}),e.jsxs(l,{style:{width:"100%",height:"220px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:y},children:[e.jsx(h,{scaleId:o,ticks:x({locale:n,timeZone:a,showTimezone:s})}),e.jsx(u,{scaleId:"y",ticks:k()}),e.jsx(f,{data:b,xScaleId:o,yScaleId:"y",style:{strokeStyle:"#4c6ef5",lineWidth:2}})]})]})},r={render:()=>e.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[e.jsx("h2",{style:{marginBottom:"4px"},children:"Locale Comparison"}),e.jsxs("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 24px"},children:["The same one-week range rendered with different ",e.jsx("code",{children:"locale"})," ","values passed to ",e.jsx("code",{children:"makeTimeTicks"}),". The locale controls how"," ","month names, day-of-week and number formats are displayed by"," ",e.jsx("code",{children:"Intl.DateTimeFormat"}),"."]}),j.map(({locale:n,label:t})=>e.jsx(L,{locale:n,label:t},n))]})},z=[{locale:"en-US",timeZone:"America/New_York",label:"New York"},{locale:"en-GB",timeZone:"Europe/London",label:"London"},{locale:"de-DE",timeZone:"Europe/Berlin",label:"Berlin"},{locale:"ja-JP",timeZone:"Asia/Tokyo",label:"Tokyo"},{locale:"en-AU",timeZone:"Australia/Sydney",label:"Sydney"}],c={render:()=>e.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[e.jsx("h2",{style:{marginBottom:"4px"},children:"Locale + Time Zone"}),e.jsxs("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 24px"},children:["The same 24-hour range shown in different locales and time zones with"," ",e.jsx("code",{children:"showTimezone"})," enabled, so both the localized formatting and the time-zone abbreviation are visible on the axis."]}),z.map(({locale:t,timeZone:a,label:s})=>{const o=`hz-${a}`,y=[{id:o,axis:{position:"bottom",size:60},origin:"x",min:i-864e5,max:i},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h4",{style:{margin:"0 0 2px"},children:s}),e.jsxs("p",{style:{color:"#888",fontSize:"12px",margin:"0 0 6px"},children:["locale: ",e.jsx("code",{children:t})," · timeZone:"," ",e.jsx("code",{children:a})]}),e.jsxs(l,{style:{width:"100%",height:"220px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:y},children:[e.jsx(h,{scaleId:o,ticks:x({locale:t,timeZone:a,showTimezone:!0})}),e.jsx(u,{scaleId:"y",ticks:k()}),e.jsx(f,{data:Array.from({length:200},(I,T)=>({x:i-864e5+T*864e5/200,y:50+Math.sin(T/8)*25})),xScaleId:o,yScaleId:"y",style:{strokeStyle:"#12b886",lineWidth:2}})]})]},a)})]})},w=[{title:"Sub-second (1 second range)",min:i,max:i+1e3},{title:"Minutes (1 hour range)",min:i,max:i+1e3*60*60},{title:"Hours (1 day range)",min:i,max:i+1e3*60*60*24},{title:"Days (1 month range)",min:i,max:i+1e3*60*60*24*30},{title:"Months (1 year range)",min:i,max:i+1e3*60*60*24*365},{title:"Years (5 year range)",min:i,max:i+1e3*60*60*24*365*5}],g=["en-US","de-DE","ja-JP"],d={render:()=>e.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[e.jsx("h2",{style:{marginBottom:"4px"},children:"Locale Across Granularities"}),e.jsxs("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 24px"},children:["Locale formatting applied to a variety of time-tick granularities. Each row shows the same range formatted with"," ",g.map(n=>e.jsx("code",{style:{marginRight:4},children:n},n)),"."]}),w.map(n=>e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:n.title}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${g.length}, 1fr)`,gap:"16px"},children:g.map(t=>{const a=`g-${n.title}-${t}`,s=[{id:a,axis:{position:"bottom",size:80},origin:"x",min:n.min,max:n.max}];return e.jsxs("div",{children:[e.jsx("p",{style:{color:"#888",fontSize:"12px",margin:"0 0 4px"},children:e.jsx("code",{children:t})}),e.jsx(l,{style:{width:"100%",height:"90px"},configuration:{padding:{bottom:0,left:30,right:30,top:0},scales:s},children:e.jsx(h,{scaleId:a,ticks:x({locale:t,timeZone:"UTC"})})})]},t)})})]},n.title))]})},m={render:()=>{const n="custom",t=[{id:n,axis:{position:"bottom",size:60},origin:"x",min:i-p,max:i},{id:"y",axis:{position:"left",size:50},origin:"y",min:0,max:100}];return e.jsxs("div",{style:{padding:"20px",fontFamily:"sans-serif"},children:[e.jsx("h2",{style:{marginBottom:"4px"},children:"Custom Locale Formatter"}),e.jsxs("p",{style:{color:"#666",fontSize:"13px",margin:"0 0 24px"},children:["A custom formatter built with ",e.jsx("code",{children:"makeTimeTickFormat"})," lets you pick the locale, time zone and whether the time-zone abbreviation is shown, independently of the tick generator."]}),e.jsxs(l,{style:{width:"100%",height:"300px"},configuration:{padding:{bottom:20,left:20,right:20,top:20},scales:t},children:[e.jsx(h,{scaleId:n,ticks:x({timeZone:"Europe/Warsaw",formatter:S({locale:"pl-PL",timeZone:"Europe/Warsaw",showTimezone:!0})})}),e.jsx(u,{scaleId:"y",ticks:k()}),e.jsx(f,{data:b,xScaleId:n,yScaleId:"y",style:{strokeStyle:"#e8590c",lineWidth:2}})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "20px",
    fontFamily: "sans-serif"
  }}>
      <h2 style={{
      marginBottom: "4px"
    }}>Locale Comparison</h2>
      <p style={{
      color: "#666",
      fontSize: "13px",
      margin: "0 0 24px"
    }}>
        The same one-week range rendered with different <code>locale</code>{" "}
        values passed to <code>makeTimeTicks</code>. The locale controls how{" "}
        month names, day-of-week and number formats are displayed by{" "}
        <code>Intl.DateTimeFormat</code>.
      </p>
      {LOCALES.map(({
      locale,
      label
    }) => <LocaleChart key={locale} locale={locale} label={label} />)}
    </div>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const dayMs = 1000 * 60 * 60 * 24;
    return <div style={{
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h2 style={{
        marginBottom: "4px"
      }}>Locale + Time Zone</h2>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 24px"
      }}>
          The same 24-hour range shown in different locales and time zones with{" "}
          <code>showTimezone</code> enabled, so both the localized formatting
          and the time-zone abbreviation are visible on the axis.
        </p>
        {HOUR_TIMEZONES.map(({
        locale,
        timeZone,
        label
      }) => {
        const scaleId = \`hz-\${timeZone}\`;
        const scales: PlotScaleConfig[] = [{
          id: scaleId,
          axis: {
            position: "bottom",
            size: 60
          },
          origin: "x",
          min: refPoint - dayMs,
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
        return <div key={timeZone} style={{
          marginBottom: "32px"
        }}>
              <h4 style={{
            margin: "0 0 2px"
          }}>{label}</h4>
              <p style={{
            color: "#888",
            fontSize: "12px",
            margin: "0 0 6px"
          }}>
                locale: <code>{locale}</code> · timeZone:{" "}
                <code>{timeZone}</code>
              </p>
              <CanPlot style={{
            width: "100%",
            height: "220px"
          }} configuration={{
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
              top: 20
            },
            scales
          }}>
                <XTicks scaleId={scaleId} ticks={makeTimeTicks({
              locale,
              timeZone,
              showTimezone: true
            })} />
                <YTicks scaleId="y" ticks={makeLinearTicks()} />
                <LinePlot data={Array.from({
              length: 200
            }, (_, i) => ({
              x: refPoint - dayMs + i * dayMs / 200,
              y: 50 + Math.sin(i / 8) * 25
            }))} xScaleId={scaleId} yScaleId="y" style={{
              strokeStyle: "#12b886",
              lineWidth: 2
            }} />
              </CanPlot>
            </div>;
      })}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "20px",
    fontFamily: "sans-serif"
  }}>
      <h2 style={{
      marginBottom: "4px"
    }}>Locale Across Granularities</h2>
      <p style={{
      color: "#666",
      fontSize: "13px",
      margin: "0 0 24px"
    }}>
        Locale formatting applied to a variety of time-tick granularities. Each
        row shows the same range formatted with{" "}
        {GRANULARITY_LOCALES.map(l => <code key={l} style={{
        marginRight: 4
      }}>
            {l}
          </code>)}
        .
      </p>
      {GRANULARITIES.map(granularity => <div key={granularity.title} style={{
      marginBottom: "32px"
    }}>
          <h4 style={{
        margin: "0 0 8px"
      }}>{granularity.title}</h4>
          <div style={{
        display: "grid",
        gridTemplateColumns: \`repeat(\${GRANULARITY_LOCALES.length}, 1fr)\`,
        gap: "16px"
      }}>
            {GRANULARITY_LOCALES.map(locale => {
          const scaleId = \`g-\${granularity.title}-\${locale}\`;
          const scales: PlotScaleConfig[] = [{
            id: scaleId,
            axis: {
              position: "bottom",
              size: 80
            },
            origin: "x",
            min: granularity.min,
            max: granularity.max
          }];
          return <div key={locale}>
                  <p style={{
              color: "#888",
              fontSize: "12px",
              margin: "0 0 4px"
            }}>
                    <code>{locale}</code>
                  </p>
                  <CanPlot style={{
              width: "100%",
              height: "90px"
            }} configuration={{
              padding: {
                bottom: 0,
                left: 30,
                right: 30,
                top: 0
              },
              scales
            }}>
                    <XTicks scaleId={scaleId} ticks={makeTimeTicks({
                locale,
                timeZone: "UTC"
              })} />
                  </CanPlot>
                </div>;
        })}
          </div>
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const scaleId = "custom";
    const scales: PlotScaleConfig[] = [{
      id: scaleId,
      axis: {
        position: "bottom",
        size: 60
      },
      origin: "x",
      min: refPoint - weekMs,
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
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
        <h2 style={{
        marginBottom: "4px"
      }}>Custom Locale Formatter</h2>
        <p style={{
        color: "#666",
        fontSize: "13px",
        margin: "0 0 24px"
      }}>
          A custom formatter built with <code>makeTimeTickFormat</code> lets you
          pick the locale, time zone and whether the time-zone abbreviation is
          shown, independently of the tick generator.
        </p>
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
        scales
      }}>
          <XTicks scaleId={scaleId} ticks={makeTimeTicks({
          timeZone: "Europe/Warsaw",
          formatter: makeTimeTickFormat({
            locale: "pl-PL",
            timeZone: "Europe/Warsaw",
            showTimezone: true
          })
        })} />
          <YTicks scaleId="y" ticks={makeLinearTicks()} />
          <LinePlot data={sampleData} xScaleId={scaleId} yScaleId="y" style={{
          strokeStyle: "#e8590c",
          lineWidth: 2
        }} />
        </CanPlot>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const Z=["LocaleComparison","LocaleWithTimezone","LocaleAcrossGranularities","CustomLocaleFormatter"];export{m as CustomLocaleFormatter,d as LocaleAcrossGranularities,r as LocaleComparison,c as LocaleWithTimezone,Z as __namedExportsOrder,R as default};
