"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3784],{93784:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=a(96540),l=a(58863),n=a(96627),s=a(7349),u=a(32142),o=a(86444),i=a(85867),c=a(71194),h=a(2445);function d({height:e,width:t,echartOptions:a,setDataMask:d,labelMap:p,labelMapB:f,groupby:g,groupbyB:m,selectedValues:b,formData:v,emitCrossFilters:y,seriesBreakdown:w,onContextMenu:k,onFocusedSeries:F,xValueFormatter:x,xAxis:C,refs:E,coltypeMapping:V}){const I=(0,r.useCallback)((e=>e<w),[w]),M=(0,r.useCallback)(((e,t)=>{const a=Object.values(b||{});let r;r=a.includes(e)?a.filter((t=>t!==e)):[e];const l=I(t)?g:m,n=I(t)?p:f,s=r.map((e=>null==n?void 0:n[e])).filter((e=>!!e));return{dataMask:{extraFormData:{filters:0===r.length?[]:[...l.map(((e,t)=>{const a=s.map((e=>e[t]));return null==a?{col:e,op:"IS NULL"}:{col:e,op:"IN",val:a}}))]},filterState:{value:s.length?s:null,selectedValues:r.length?r:null}},isCurrentValueSelected:a.includes(e)}}),[g,m,I,p,f,b]),N=(0,r.useCallback)(((e,t)=>{const a=I(t);!y||a&&0===g.length||!a&&0===m.length||d(M(e,t).dataMask)}),[I,y,g.length,m.length,d,M]),O={click:e=>{const{seriesName:t,seriesIndex:a}=e;N(t,a)},mouseout:()=>{F(null)},mouseover:e=>{F(e.seriesName)},contextmenu:async e=>{if(k){e.event.stop();const{data:t,seriesName:a,seriesIndex:r}=e,i=e.event.event,h=[],d=[],b=I(r),y=[...e.name?[e.name]:[],...(b?p:f)[e.seriesName]||[]];t&&C.type===l.Gw.Time&&h.push({col:C.label===n.Tf?v.granularitySqla:C.label,grain:v.timeGrainSqla,op:"==",val:t[0],formattedVal:x(t[0])}),[...t&&C.type===l.Gw.Category?[C.label]:[],...b?v.groupby:v.groupbyB].forEach(((e,t)=>h.push({col:e,op:"==",val:y[t],formattedVal:String(y[t])}))),[...b?v.groupby:v.groupbyB].forEach(((e,t)=>d.push({col:e,op:"==",val:y[t],formattedVal:(0,c.Wy)(y[t],{timeFormatter:(0,s.mo)(v.dateFormat),numberFormatter:(0,u.gV)(v.numberFormat),coltype:null==V?void 0:V[(0,o.A)(e)]})})));const w=b&&g.length>0||!b&&m.length>0;k(i.clientX,i.clientY,{drillToDetail:h,crossFilter:w?M(a,r):void 0,drillBy:{filters:d,groupbyFieldName:b?"groupby":"groupby_b",adhocFilterFieldName:b?"adhoc_filters":"adhoc_filters_b"}})}}};return(0,h.Y)(i.A,{refs:E,height:e,width:t,echartOptions:a,eventHandlers:O,selectedValues:b})}},85867:(e,t,a)=>{a.d(t,{A:()=>_});var r=a(96540),l=a(96453),n=a(3087),s=a(92351),u=a(56995),o=a(3073),i=a(74508),c=a(61030),h=a(45567),d=a(49714),p=a(58052),f=a(80491),g=a(25652),m=a(73900),b=a(32003),v=a(22329),y=a(31441),w=a(12458),k=a(39539),F=a(5553),x=a(53626),C=a(82724),E=a(45620),V=a(39838),I=a(42998),M=a(69380),N=a(71439),O=a(29022),S=a(12312),A=a(35278),B=a(2445);const T=l.I4.div`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
`;function R({width:e,height:t,echartOptions:a,eventHandlers:l,zrEventHandlers:n,selectedValues:u={},refs:o},i){const c=(0,r.useRef)(null);o&&(o.divRef=c);const h=(0,r.useRef)(),d=(0,r.useMemo)((()=>Object.keys(u)||[]),[u]),p=(0,r.useRef)([]);(0,r.useImperativeHandle)(i,(()=>({getEchartInstance:()=>h.current}))),(0,r.useEffect)((()=>{c.current&&(h.current||(h.current=(0,s.Ts)(c.current)),Object.entries(l||{}).forEach((([e,t])=>{var a,r;null==(a=h.current)||a.off(e),null==(r=h.current)||r.on(e,t)})),Object.entries(n||{}).forEach((([e,t])=>{var a,r;null==(a=h.current)||a.getZr().off(e),null==(r=h.current)||r.getZr().on(e,t)})),h.current.setOption(a,!0))}),[a,l,n]),(0,r.useEffect)((()=>{h.current&&(h.current.dispatchAction({type:"downplay",dataIndex:p.current.filter((e=>!d.includes(e)))}),d.length&&h.current.dispatchAction({type:"highlight",dataIndex:d}),p.current=d)}),[d]);const f=(0,r.useCallback)((({width:e,height:t})=>{h.current&&h.current.resize({width:e,height:t})}),[]);return(0,r.useEffect)((()=>(f({width:e,height:t}),()=>{var e;return null==(e=h.current)?void 0:e.dispose()})),[]),(0,r.useLayoutEffect)((()=>{f({width:e,height:t})}),[e,t,f]),(0,B.Y)(T,{ref:c,height:t,width:e})}(0,n.Y)([k.a,u.a,o.a,i.a,c.a,h.a,d.a,p.a,f.a,g.a,m.a,b.a,v.a,y.a,w.a,F.a,x.a,C.a,E.a,V.a,I.a,M.a,N.a,O.a,S.a,A._]);const _=(0,r.forwardRef)(R)}}]);
//# sourceMappingURL=98e3c22e8edf499ca85f.chunk.js.map