"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4235],{13090:(e,t,n)=>{n.d(t,{a1:()=>z,nf:()=>d.A,hq:()=>A.A,hs:()=>r,oZ:()=>i.A,XB:()=>w.A,Oj:()=>u.A,Ho:()=>m.A,mu:()=>p.A,Am:()=>f.A,aT:()=>b.A,qw:()=>g.A,lM:()=>v.A,VJ:()=>x.A,qO:()=>a.A,w_:()=>y.A,CP:()=>N.A,zM:()=>s.A,wI:()=>S.w,Ck:()=>h.A,fH:()=>T.fH,iw:()=>T.iw,LC:()=>k.A,F5:()=>F.A,RE:()=>c.A,o3:()=>C.o3,yG:()=>C.yG,nn:()=>o.A,OB:()=>C.OB,HG:()=>T.Ay,cH:()=>l.A,E2:()=>C.E2,Ob:()=>C.Ob});var r=n(94963),i=n(10526),a=n(20750),o=n(76968),s=n(54249),l=n(69161),c=n(30885),h=n(22054),d=n(94584),u=n(9755),m=n(35638),p=n(65621),f=n(32215),g=n(33269),y=n(44767),v=n(32637),b=n(67051),w=n(66361),A=n(58540),x=n(49482),N=n(20455),k=n(58966),F=n(17838),C=n(39472),S=n(63756),T=n(7148);const z="#00A699"},73865:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(35725);function i(e,t,n){let r=e,i=t(r);for(;!n(i);){if(r-=1,r<0){r=e;break}i=t(r)}return r}function a(e){const{idealFontSize:t,maxWidth:n,maxHeight:a,style:o,...s}=e;let l;if(null!=t)l=t;else{if(null==a)throw new Error("You must specify at least one of maxHeight or idealFontSize");l=Math.floor(a)}function c(e){return(0,r.A)({...s,style:{...o,fontSize:`${e}px`}})}return null!=n&&(l=i(l,c,(e=>e.width>0&&e.width<=n))),null!=a&&(l=i(l,c,(e=>e.height>0&&e.height<=a))),l}},35725:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(76977),i=n(79305),a=n(55856);function o(e,t){const{text:n,className:o,style:s,container:l}=e;if(0===n.length)return{height:0,width:0};const c=a.z.createInContainer(l),h=a.k.createInContainer(c);(0,r.A)(h,{className:o,style:s,text:n});const d=(0,i.A)(h,t);return setTimeout((()=>{a.k.removeFromContainer(c),a.z.removeFromContainer(l)}),500),d}},55856:(e,t,n)=>{n.d(t,{z:()=>a,k:()=>o});class r{constructor(e){this.activeNodes=new Map,this.factoryFn=void 0,this.factoryFn=e}createInContainer(e=document.body){if(this.activeNodes.has(e)){const t=this.activeNodes.get(e);return t.counter+=1,t.node}const t=this.factoryFn();return e.append(t),this.activeNodes.set(e,{counter:1,node:t}),t}removeFromContainer(e=document.body){if(this.activeNodes.has(e)){const t=this.activeNodes.get(e);t.counter-=1,0===t.counter&&(e.removeChild(t.node),this.activeNodes.delete(e))}}}const i="http://www.w3.org/2000/svg",a=new r((function(){const e=document.createElementNS(i,"svg");return e.style.position="absolute",e.style.top="-100%",e.style.left="-100%",e.style.width="0",e.style.height="0",e.style.opacity="0",e.style.pointerEvents="none",e})),o=new r((function(){return document.createElementNS(i,"text")}))},79305:(e,t,n)=>{n.d(t,{A:()=>i});const r={height:20,width:100};function i(e,t=r){const{width:n,height:i}=e.getBBox?e.getBBox():t;return{height:Math.ceil(i),width:Math.ceil(n)}}},76977:(e,t,n)=>{n.d(t,{A:()=>i});const r=["font","fontWeight","fontStyle","fontSize","fontFamily","letterSpacing"];function i(e,{className:t,style:n={},text:i}={}){const a=e;return a.textContent!==i&&(a.textContent=void 0===i?null:i),a.getAttribute("class")!==t&&a.setAttribute("class",null!=t?t:""),a.style.removeProperty("font"),a.style.removeProperty("font-weight"),a.style.removeProperty("font-style"),a.style.removeProperty("font-size"),a.style.removeProperty("font-family"),a.style.removeProperty("letter-spacing"),r.filter((e=>void 0!==n[e]&&null!==n[e])).forEach((e=>{a.style[e]=`${n[e]}`})),a}},64235:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(96540),i=n(32142),a=n(95579),o=n(73865),s=n(7349),l=n(58928),c=n(13090),h=n(96453),d=n(85867),u=n(2445);const m=(0,i.gV)(),p=.3;class f extends r.PureComponent{getClassName(){const{className:e,showTrendLine:t,bigNumberFallback:n}=this.props,r=`superset-legacy-chart-big-number ${e} ${n?"is-fallback-value":""}`;return t?r:`${r} no-trendline`}createTemporaryContainer(){const e=document.createElement("div");return e.className=this.getClassName(),e.style.position="absolute",e.style.opacity="0",e}renderFallbackWarning(){const{bigNumberFallback:e,formatTime:t,showTimestamp:n}=this.props;return t&&e&&!n?(0,u.Y)("span",{className:"alert alert-warning",role:"alert",title:(0,a.t)("Last available value seen on %s",t(e[0])),children:(0,a.t)("Not up to date")}):null}renderKicker(e){const{timestamp:t,showTimestamp:n,formatTime:r,width:i}=this.props;if(!r||!n||"string"==typeof t||"boolean"==typeof t)return null;const a=null===t?"":r(t),s=this.createTemporaryContainer();document.body.append(s);const l=(0,o.A)({text:a,maxWidth:i,maxHeight:e,className:"kicker",container:s});return s.remove(),(0,u.Y)("div",{className:"kicker",style:{fontSize:l,height:e},children:a})}renderHeader(e){const{bigNumber:t,headerFormatter:n,width:r,colorThresholdFormatters:i}=this.props,s=null===t?(0,a.t)("No data"):n(t);let l;Array.isArray(i)&&i.length>0?i.forEach((e=>{const n=!!t&&e.getColorFromValue(t);n&&(l=n)})):l="black";const c=this.createTemporaryContainer();document.body.append(c);const h=(0,o.A)({text:s,maxWidth:r-8,maxHeight:e,className:"header-line",container:c});return c.remove(),(0,u.Y)("div",{className:"header-line",style:{fontSize:h,height:e,color:l},onContextMenu:e=>{this.props.onContextMenu&&(e.preventDefault(),this.props.onContextMenu(e.nativeEvent.clientX,e.nativeEvent.clientY))},children:s})}renderSubheader(e){const{bigNumber:t,subheader:n,width:r,bigNumberFallback:i}=this.props;let s=0;const l=(0,a.t)("No data after filtering or data is NULL for the latest time record"),c=(0,a.t)("Try applying different filters or ensuring your datasource has data");let h=n;if(null===t&&(h=i?c:l),h){const t=this.createTemporaryContainer();return document.body.append(t),s=(0,o.A)({text:h,maxWidth:r,maxHeight:e,className:"subheader-line",container:t}),t.remove(),(0,u.Y)("div",{className:"subheader-line",style:{fontSize:s,height:e},children:h})}return null}renderTrendline(e){const{width:t,trendLineData:n,echartOptions:r,refs:i}=this.props;if(null==n||!n.some((e=>null!==e[1])))return null;const a={contextmenu:e=>{if(this.props.onContextMenu){e.event.stop();const{data:a}=e;if(a){var t,n,r,i;const o=e.event.event,s=[];s.push({col:null==(t=this.props.formData)?void 0:t.granularitySqla,grain:null==(n=this.props.formData)?void 0:n.timeGrainSqla,op:"==",val:a[0],formattedVal:null==(r=(i=this.props).xValueFormatter)?void 0:r.call(i,a[0])}),this.props.onContextMenu(o.clientX,o.clientY,{drillToDetail:s})}}}};return r&&(0,u.Y)(d.A,{refs:i,width:Math.floor(t),height:e,echartOptions:r,eventHandlers:a})}render(){const{showTrendLine:e,height:t,kickerFontSize:n,headerFontSize:r,subheaderFontSize:i}=this.props,a=this.getClassName();if(e){const e=Math.floor(p*t),o=t-e;return(0,u.FD)("div",{className:a,children:[(0,u.FD)("div",{className:"text-container",style:{height:o},children:[this.renderFallbackWarning(),this.renderKicker(Math.ceil(.7*(n||0)*t)),this.renderHeader(Math.ceil(.7*r*t)),this.renderSubheader(Math.ceil(.7*i*t))]}),this.renderTrendline(e)]})}return(0,u.FD)("div",{className:a,style:{height:t},children:[this.renderFallbackWarning(),this.renderKicker((n||0)*t),this.renderHeader(Math.ceil(r*t)),this.renderSubheader(Math.ceil(i*t))]})}}f.defaultProps={className:"",headerFormatter:m,formatTime:(0,s.mo)(l.M),headerFontSize:.3,kickerFontSize:.1,mainColor:c.a1,showTimestamp:!1,showTrendLine:!1,startYAxisAtZero:!0,subheader:"",subheaderFontSize:.125,timeRangeFixed:!1};const g=(0,h.I4)(f)`
  ${({theme:e})=>`\n    font-family: ${e.typography.families.sansSerif};\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n\n    &.no-trendline .subheader-line {\n      padding-bottom: 0.3em;\n    }\n\n    .text-container {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      .alert {\n        font-size: ${e.typography.sizes.s};\n        margin: -0.5em 0 0.4em;\n        line-height: 1;\n        padding: ${e.gridUnit}px;\n        border-radius: ${e.gridUnit}px;\n      }\n    }\n\n    .kicker {\n      line-height: 1em;\n      padding-bottom: 2em;\n    }\n\n    .header-line {\n      position: relative;\n      line-height: 1em;\n      white-space: nowrap;\n      span {\n        position: absolute;\n        bottom: 0;\n      }\n    }\n\n    .subheader-line {\n      line-height: 1em;\n      padding-bottom: 0;\n    }\n\n    &.is-fallback-value {\n      .kicker,\n      .header-line,\n      .subheader-line {\n        opacity: ${e.opacity.mediumHeavy};\n      }\n    }\n  `}
`},85867:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(96540),i=n(96453),a=n(3087),o=n(92351),s=n(56995),l=n(3073),c=n(74508),h=n(61030),d=n(45567),u=n(49714),m=n(58052),p=n(80491),f=n(25652),g=n(73900),y=n(32003),v=n(22329),b=n(31441),w=n(12458),A=n(39539),x=n(5553),N=n(53626),k=n(82724),F=n(45620),C=n(39838),S=n(42998),T=n(69380),z=n(71439),E=n(29022),M=n(12312),H=n(35278),O=n(2445);const $=i.I4.div`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
`;function Y({width:e,height:t,echartOptions:n,eventHandlers:i,zrEventHandlers:a,selectedValues:s={},refs:l},c){const h=(0,r.useRef)(null);l&&(l.divRef=h);const d=(0,r.useRef)(),u=(0,r.useMemo)((()=>Object.keys(s)||[]),[s]),m=(0,r.useRef)([]);(0,r.useImperativeHandle)(c,(()=>({getEchartInstance:()=>d.current}))),(0,r.useEffect)((()=>{h.current&&(d.current||(d.current=(0,o.Ts)(h.current)),Object.entries(i||{}).forEach((([e,t])=>{var n,r;null==(n=d.current)||n.off(e),null==(r=d.current)||r.on(e,t)})),Object.entries(a||{}).forEach((([e,t])=>{var n,r;null==(n=d.current)||n.getZr().off(e),null==(r=d.current)||r.getZr().on(e,t)})),d.current.setOption(n,!0))}),[n,i,a]),(0,r.useEffect)((()=>{d.current&&(d.current.dispatchAction({type:"downplay",dataIndex:m.current.filter((e=>!u.includes(e)))}),u.length&&d.current.dispatchAction({type:"highlight",dataIndex:u}),m.current=u)}),[u]);const p=(0,r.useCallback)((({width:e,height:t})=>{d.current&&d.current.resize({width:e,height:t})}),[]);return(0,r.useEffect)((()=>(p({width:e,height:t}),()=>{var e;return null==(e=d.current)?void 0:e.dispose()})),[]),(0,r.useLayoutEffect)((()=>{p({width:e,height:t})}),[e,t,p]),(0,O.Y)($,{ref:h,height:t,width:e})}(0,a.Y)([A.a,s.a,l.a,c.a,h.a,d.a,u.a,m.a,p.a,f.a,g.a,y.a,v.a,b.a,w.a,x.a,N.a,k.a,F.a,C.a,S.a,T.a,z.a,E.a,M.a,H._]);const I=(0,r.forwardRef)(Y)}}]);
//# sourceMappingURL=2b09aafda082659f8867.chunk.js.map