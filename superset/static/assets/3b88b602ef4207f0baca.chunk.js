"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8372],{28372:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(85867),a=r(28166),l=r(2445);function s(e){const{height:t,width:r,echartOptions:s,selectedValues:c,refs:u}=e,i=(0,a.j7)(e);return(0,l.Y)(n.A,{refs:u,height:t,width:r,echartOptions:s,eventHandlers:i,selectedValues:c})}},85867:(e,t,r)=>{r.d(t,{A:()=>Y});var n=r(96540),a=r(96453),l=r(3087),s=r(92351),c=r(56995),u=r(3073),i=r(74508),o=r(61030),h=r(45567),d=r(49714),f=r(58052),p=r(80491),g=r(25652),v=r(73900),m=r(32003),b=r(22329),w=r(31441),y=r(12458),k=r(39539),E=r(5553),F=r(53626),O=r(82724),V=r(45620),I=r(39838),M=r(42998),j=r(69380),C=r(71439),x=r(29022),A=r(12312),R=r(35278),D=r(2445);const H=a.I4.div`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
`;function T({width:e,height:t,echartOptions:r,eventHandlers:a,zrEventHandlers:l,selectedValues:c={},refs:u},i){const o=(0,n.useRef)(null);u&&(u.divRef=o);const h=(0,n.useRef)(),d=(0,n.useMemo)((()=>Object.keys(c)||[]),[c]),f=(0,n.useRef)([]);(0,n.useImperativeHandle)(i,(()=>({getEchartInstance:()=>h.current}))),(0,n.useEffect)((()=>{o.current&&(h.current||(h.current=(0,s.Ts)(o.current)),Object.entries(a||{}).forEach((([e,t])=>{var r,n;null==(r=h.current)||r.off(e),null==(n=h.current)||n.on(e,t)})),Object.entries(l||{}).forEach((([e,t])=>{var r,n;null==(r=h.current)||r.getZr().off(e),null==(n=h.current)||n.getZr().on(e,t)})),h.current.setOption(r,!0))}),[r,a,l]),(0,n.useEffect)((()=>{h.current&&(h.current.dispatchAction({type:"downplay",dataIndex:f.current.filter((e=>!d.includes(e)))}),d.length&&h.current.dispatchAction({type:"highlight",dataIndex:d}),f.current=d)}),[d]);const p=(0,n.useCallback)((({width:e,height:t})=>{h.current&&h.current.resize({width:e,height:t})}),[]);return(0,n.useEffect)((()=>(p({width:e,height:t}),()=>{var e;return null==(e=h.current)?void 0:e.dispose()})),[]),(0,n.useLayoutEffect)((()=>{p({width:e,height:t})}),[e,t,p]),(0,D.Y)(H,{ref:o,height:t,width:e})}(0,l.Y)([k.a,c.a,u.a,i.a,o.a,h.a,d.a,f.a,p.a,g.a,v.a,m.a,b.a,w.a,y.a,E.a,F.a,O.a,V.a,I.a,M.a,j.a,C.a,x.a,A.a,R._]);const Y=(0,n.forwardRef)(T)},28166:(e,t,r)=>{r.d(t,{j7:()=>d});var n=r(63950),a=r.n(n),l=r(7349),s=r(32142),c=r(86444),u=r(71194);const i=(e,t,r)=>n=>{const a=Object.values(e);let l;l=a.includes(n)?a.filter((e=>e!==n)):[n];const s=l.map((e=>r[e]));return{dataMask:{extraFormData:{filters:0===l.length?[]:t.map(((e,t)=>{const r=s.map((e=>e[t]));return null==r?{col:e,op:"IS NULL"}:{col:e,op:"IN",val:r}}))},filterState:{value:s.length?s:null,selectedValues:l.length?l:null}},isCurrentValueSelected:a.includes(n)}},o=(e,t,r)=>({name:n})=>{var a;if(!r)return;const l=null==(a=e(n))?void 0:a.dataMask;l&&t(l)},h=(e,t,r,n,a,i)=>o=>{if(t){o.event.stop();const h=o.event.event,d=[];if(e.length>0){const t=r[o.name];e.forEach(((e,r)=>{d.push({col:e,op:"==",val:t[r],formattedVal:(0,u.Wy)(t[r],{timeFormatter:(0,l.mo)(a.dateFormat),numberFormatter:(0,s.gV)(a.numberFormat),coltype:null==i?void 0:i[(0,c.A)(e)]})})}))}t(h.clientX,h.clientY,{drillToDetail:d,crossFilter:e.length>0?n(o.name):void 0,drillBy:{filters:d,groupbyFieldName:"groupby"}})}},d=e=>{const{groupby:t,onContextMenu:r,setDataMask:n,labelMap:l,emitCrossFilters:s,selectedValues:c,coltypeMapping:u,formData:d}=e;return{click:t.length>0?o(i(c,t,l),n,s):a(),contextmenu:h(t,r,l,i(c,t,l),d,u)}}}}]);
//# sourceMappingURL=3b88b602ef4207f0baca.chunk.js.map