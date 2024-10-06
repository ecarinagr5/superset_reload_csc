"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9074],{13686:(e,t,n)=>{n.d(t,{t:()=>v});var a=n(77189);const i=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,l=String.raw`(?:TODAY|NOW)`,r=String.raw`[+-]?[1-9][0-9]*`,o=String.raw`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`,c=RegExp(String.raw`^DATEADD\(DATETIME\("(${i}|${l})"\),\s(${r}),\s(${o})\)$`,"i"),d=RegExp(String.raw`^${i}$|^${l}$`,"i"),s=["now","today"],u=new Date;u.setHours(0,0,0,0);const h=new Date;h.setHours(0,0,0,0);const m={sinceDatetime:u.setDate(u.getDate()-7).toString(),sinceMode:"relative",sinceGrain:"day",sinceGrainValue:-7,untilDatetime:h.toString(),untilMode:"specific",untilGrain:"day",untilGrainValue:7,anchorMode:"now",anchorValue:"now"},v=e=>{const t=e.split(a.wv);if(2===t.length){const[e,n]=t;if(d.test(e)&&d.test(n)){const t=s.includes(e)?e:"specific",a=s.includes(n)?n:"specific";return{customRange:{...m,sinceDatetime:e,untilDatetime:n,sinceMode:t,untilMode:a},matchedFlag:!0}}const a=e.match(c);if(a&&d.test(n)&&e.includes(n)){const[e,t,i]=a.slice(1),l=s.includes(n)?n:"specific";return{customRange:{...m,sinceGrain:i,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilDatetime:e,sinceMode:"relative",untilMode:l},matchedFlag:!0}}const i=n.match(c);if(d.test(e)&&i&&n.includes(e)){const[t,n,a]=[...i.slice(1)],l=s.includes(e)?e:"specific";return{customRange:{...m,untilGrain:a,untilGrainValue:parseInt(n,10),sinceDatetime:t,untilDatetime:t,untilMode:"relative",sinceMode:l},matchedFlag:!0}}if(a&&i){const[e,t,n]=[...a.slice(1)],[l,r,o]=[...i.slice(1)];if(e===l)return{customRange:{...m,sinceGrain:n,sinceGrainValue:parseInt(t,10),sinceDatetime:e,untilGrain:o,untilGrainValue:parseInt(r,10),untilDatetime:l,anchorValue:e,sinceMode:"relative",untilMode:"relative",anchorMode:"now"===e?"now":"specific"},matchedFlag:!0}}}return{customRange:m,matchedFlag:!1}}},77189:(e,t,n)=>{n.d(t,{wv:()=>s,x9:()=>v});var a=n(62193),i=n.n(a),l=n(58561),r=n.n(l),o=n(62952),c=n(35742),d=n(51436);const s=" : ",u=(e,t)=>`${e}${s}${t}`,h=(e,t)=>e.replace("T00:00:00","")||(t?"-∞":"∞"),m=(e,t="col")=>{const n=e.split(s);return 1===n.length?e:`${h(n[0],!0)} ≤ ${t} < ${h(n[1])}`},v=async(e,t="col",n)=>{let a,l;if(i()(n))a=r().encode_uri(e),l=`/api/v1/time_range/?q=${a}`;else{const t=(0,o.A)(n).map((t=>({timeRange:e,shift:t})));a=r().encode_uri([{timeRange:e},...t]),l=`/api/v1/time_range/?q=${a}`}try{var v;const e=await c.A.get({endpoint:l});if(i()(n)){var p,g,f,b;const n=u((null==e||null==(p=e.json)||null==(g=p.result[0])?void 0:g.since)||"",(null==e||null==(f=e.json)||null==(b=f.result[0])?void 0:b.until)||"");return{value:m(n,t)}}const a=null==e||null==(v=e.json)?void 0:v.result.map((e=>u(e.since,e.until)));return{value:a.slice(1).map((e=>((e,t,n="col")=>{const a=e.split(s),i=t.split(s);return`${n}: ${h(a[0],!0)} to ${h(a[1])} vs\n  ${h(i[0],!0)} to ${h(i[1])}`})(a[0],e,t)))}}catch(e){const t=await(0,d.h4)(e);return{error:t.message||t.error||e.statusText}}}},6094:(e,t,n)=>{n.d(t,{c:()=>r,l:()=>o});var a=n(78362),i=n(96453);const l=a.A.RangePicker,r=(0,i.I4)(l)`
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,o=a.A},10044:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(16146),i=n(2445);const l=e=>(0,i.Y)(a.A,{...e})},22533:(e,t,n)=>{n.d(t,{A:()=>c,v:()=>r});var a=n(96540),i=n(10044),l=n(2445);const r=()=>{var e;return null==(e=document.getElementById("controlSections"))?void 0:e.lastElementChild},o=e=>{var t,n;const a=null==(t=window)?void 0:t.innerHeight,i=null==e||null==(n=e.getBoundingClientRect())?void 0:n.top;return a&&i?i/a:0},c=({getPopupContainer:e,getVisibilityRatio:t=o,visible:n,destroyTooltipOnHide:c=!1,...d})=>{const s=(0,a.useRef)(),[u,h]=(0,a.useState)(void 0===n?d.defaultVisible:n),[m,v]=a.useState("right"),p=(0,a.useCallback)((()=>{const e=t(s.current);v(e<.35&&"rightTop"!==m?"rightTop":e>.65&&"rightBottom"!==m?"rightBottom":"right")}),[t]),g=(0,a.useCallback)((e=>{const t=r();t&&t.style.setProperty("overflow-y",e?"hidden":"auto","important")}),[p]),f=(0,a.useCallback)((t=>(s.current=t,(null==e?void 0:e(t))||document.body)),[p,e]),b=(0,a.useCallback)((e=>{void 0===e&&g(e),h(!!e),null==d.onVisibleChange||d.onVisibleChange(!!e)}),[d,g]),Y=(0,a.useCallback)((e=>{"Escape"===e.key&&(h(!1),null==d.onVisibleChange||d.onVisibleChange(!1))}),[d]);return(0,a.useEffect)((()=>{void 0!==n&&h(!!n)}),[n]),(0,a.useEffect)((()=>{void 0!==u&&g(u)}),[u,g]),(0,a.useEffect)((()=>(u&&document.addEventListener("keydown",Y),()=>{document.removeEventListener("keydown",Y)})),[Y,u]),(0,a.useEffect)((()=>{u&&p()}),[u,p]),(0,l.Y)(i.A,{...d,visible:u,arrowPointAtCenter:!0,placement:m,onVisibleChange:b,getPopupContainer:f,destroyTooltipOnHide:c})}},45267:(e,t,n)=>{n.d(t,{A:()=>Z});var a=n(96540),i=n(96453),l=n(17437),r=n(37827),o=n(96627),c=n(77189),d=n(95579),s=n(46920),u=n(50317),h=n(85861),m=n(15595),v=n(12249),p=n(28990),g=n(19129),f=n(85183),b=n(27023),Y=n(15151),C=n(22533),y=n(39942),w=n(78697),D=n(2445);function A(e){let t="Last week";return y.Be.has(e.value)?t=e.value:e.onChange(t),(0,D.FD)(D.FK,{children:[(0,D.Y)("div",{className:"section-title",children:(0,d.t)("Configure Time Range: Last...")}),(0,D.Y)(w.s.Group,{value:t,onChange:t=>e.onChange(t.target.value),children:y.z6.map((({value:e,label:t})=>(0,D.Y)(w.s,{value:e,className:"vertical-radio",children:t},e)))})]})}var E=n(7987);function $({onChange:e,value:t}){return(0,a.useEffect)((()=>{y.oo.has(t)||e(E.sw)}),[e,t]),y.oo.has(t)?(0,D.FD)(D.FK,{children:[(0,D.Y)("div",{className:"section-title",children:(0,d.t)("Configure Time Range: Previous...")}),(0,D.Y)(w.s.Group,{value:t,onChange:t=>e(t.target.value),children:y.cn.map((({value:e,label:t})=>(0,D.Y)(w.s,{value:e,className:"vertical-radio",children:t},e)))})]}):null}function x({onChange:e,value:t}){return(0,a.useEffect)((()=>{y.yI.has(t)||e(E.ke)}),[t]),y.yI.has(t)?(0,D.FD)(D.FK,{children:[(0,D.Y)("div",{className:"section-title",children:(0,d.t)("Configure Time Range: Current...")}),(0,D.Y)(w.s.Group,{value:t,onChange:t=>{let n=t.target.value;n=n.trim(),""!==n&&e(n)},children:y.ZC.map((({value:e,label:t})=>(0,D.Y)(w.s,{value:e,className:"vertical-radio",children:t},e)))})]}):null}var S=n(64846),T=n.n(S),F=n(61225),I=n(13686),N=n(66537),k=n(90868),M=n(6094),V=n(17444);function R(e){const{customRange:t,matchedFlag:n}=(0,I.t)(e.value),[i,l]=(0,a.useState)(null);n||e.onChange((0,y.IS)(t));const{sinceDatetime:r,sinceMode:o,sinceGrain:c,sinceGrainValue:s,untilDatetime:u,untilMode:h,untilGrain:v,untilGrainValue:g,anchorValue:f,anchorMode:b}={...t};function Y(n,a){e.onChange((0,y.IS)({...t,[n]:a}))}function C(n,a){T()(a)&&a>0&&e.onChange((0,y.IS)({...t,[n]:a}))}const A=(0,F.d4)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.locale}));return(0,a.useEffect)((()=>{null===i&&(A&&y.mb[A]?y.mb[A]().then((e=>l(e.default))).catch((()=>l(void 0))):l(void 0))}),[i,A]),null===i?(0,D.Y)(V.A,{position:"inline-centered"}):(0,D.FD)("div",{children:[(0,D.Y)("div",{className:"section-title",children:(0,d.t)("Configure custom time range")}),(0,D.FD)(m.fI,{gutter:24,children:[(0,D.FD)(m.fv,{span:12,children:[(0,D.FD)("div",{className:"control-label",children:[(0,d.t)("START (INCLUSIVE)")," ",(0,D.Y)(N.W,{tooltip:(0,d.t)("Start date included in time range"),placement:"right"})]}),(0,D.Y)(p.A,{ariaLabel:(0,d.t)("START (INCLUSIVE)"),options:y.Wm,value:o,onChange:e=>Y("sinceMode",e)}),"specific"===o&&(0,D.Y)(m.fI,{children:(0,D.Y)(M.l,{showTime:!0,defaultValue:(0,y.d$)(r),onChange:e=>Y("sinceDatetime",e.format(y.zz)),allowClear:!1,locale:i})}),"relative"===o&&(0,D.FD)(m.fI,{gutter:8,children:[(0,D.Y)(m.fv,{span:11,children:(0,D.Y)(k.YI,{placeholder:(0,d.t)("Relative quantity"),value:Math.abs(s),min:1,defaultValue:1,onChange:e=>C("sinceGrainValue",e||1),onStep:e=>C("sinceGrainValue",e||1)})}),(0,D.Y)(m.fv,{span:13,children:(0,D.Y)(p.A,{ariaLabel:(0,d.t)("Relative period"),options:y.IZ,value:c,onChange:e=>Y("sinceGrain",e)})})]})]}),(0,D.FD)(m.fv,{span:12,children:[(0,D.FD)("div",{className:"control-label",children:[(0,d.t)("END (EXCLUSIVE)")," ",(0,D.Y)(N.W,{tooltip:(0,d.t)("End date excluded from time range"),placement:"right"})]}),(0,D.Y)(p.A,{ariaLabel:(0,d.t)("END (EXCLUSIVE)"),options:y.OP,value:h,onChange:e=>Y("untilMode",e)}),"specific"===h&&(0,D.Y)(m.fI,{children:(0,D.Y)(M.l,{showTime:!0,defaultValue:(0,y.d$)(u),onChange:e=>Y("untilDatetime",e.format(y.zz)),allowClear:!1,locale:i})}),"relative"===h&&(0,D.FD)(m.fI,{gutter:8,children:[(0,D.Y)(m.fv,{span:11,children:(0,D.Y)(k.YI,{placeholder:(0,d.t)("Relative quantity"),value:g,min:1,defaultValue:1,onChange:e=>C("untilGrainValue",e||1),onStep:e=>C("untilGrainValue",e||1)})}),(0,D.Y)(m.fv,{span:13,children:(0,D.Y)(p.A,{ariaLabel:(0,d.t)("Relative period"),options:y.s6,value:v,onChange:e=>Y("untilGrain",e)})})]})]})]}),"relative"===o&&"relative"===h&&(0,D.FD)("div",{className:"control-anchor-to",children:[(0,D.Y)("div",{className:"control-label",children:(0,d.t)("Anchor to")}),(0,D.FD)(m.fI,{align:"middle",children:[(0,D.Y)(m.fv,{children:(0,D.FD)(w.s.Group,{onChange:function(n){const a=n.target.value;"now"===a?e.onChange((0,y.IS)({...t,anchorValue:"now",anchorMode:a})):e.onChange((0,y.IS)({...t,anchorValue:y.bd,anchorMode:a}))},defaultValue:"now",value:b,children:[(0,D.Y)(w.s,{value:"now",children:(0,d.t)("NOW")},"now"),(0,D.Y)(w.s,{value:"specific",children:(0,d.t)("Date/Time")},"specific")]})}),"now"!==b&&(0,D.Y)(m.fv,{children:(0,D.Y)(M.l,{showTime:!0,defaultValue:(0,y.d$)(f),onChange:e=>Y("anchorValue",e.format(y.zz)),allowClear:!1,className:"control-anchor-to-datetime",locale:i})})]})]})]})}const L=(0,D.FD)(D.FK,{children:[(0,D.FD)("div",{children:[(0,D.Y)("h3",{children:"DATETIME"}),(0,D.Y)("p",{children:(0,d.t)("Return to specific datetime.")}),(0,D.Y)("h4",{children:(0,d.t)("Syntax")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:"datetime([string])"})}),(0,D.Y)("h4",{children:(0,d.t)("Example")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:'datetime("2020-03-01 12:00:00")\ndatetime("now")\ndatetime("last year")'})})]}),(0,D.FD)("div",{children:[(0,D.Y)("h3",{children:"DATEADD"}),(0,D.Y)("p",{children:(0,d.t)("Moves the given set of dates by a specified interval.")}),(0,D.Y)("h4",{children:(0,d.t)("Syntax")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:"dateadd([datetime], [integer], [dateunit])\ndateunit = (year | quarter | month | week | day | hour | minute | second)"})}),(0,D.Y)("h4",{children:(0,d.t)("Example")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:'dateadd(datetime("today"), -13, day)\ndateadd(datetime("2020-03-01"), 2, day)'})})]}),(0,D.FD)("div",{children:[(0,D.Y)("h3",{children:"DATETRUNC"}),(0,D.Y)("p",{children:(0,d.t)("Truncates the specified date to the accuracy specified by the date unit.")}),(0,D.Y)("h4",{children:(0,d.t)("Syntax")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:"datetrunc([datetime], [dateunit])\ndateunit = (year | quarter | month | week)"})}),(0,D.Y)("h4",{children:(0,d.t)("Example")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:'datetrunc(datetime("2020-03-01"), week)\ndatetrunc(datetime("2020-03-01"), month)'})})]}),(0,D.FD)("div",{children:[(0,D.Y)("h3",{children:"LASTDAY"}),(0,D.Y)("p",{children:(0,d.t)("Get the last date by the date unit.")}),(0,D.Y)("h4",{children:(0,d.t)("Syntax")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:"lastday([datetime], [dateunit])\ndateunit = (year | month | week)"})}),(0,D.Y)("h4",{children:(0,d.t)("Example")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:'lastday(datetime("today"), month)'})})]}),(0,D.FD)("div",{children:[(0,D.Y)("h3",{children:"HOLIDAY"}),(0,D.Y)("p",{children:(0,d.t)("Get the specify date for the holiday")}),(0,D.Y)("h4",{children:(0,d.t)("Syntax")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:"holiday([string])\nholiday([holiday string], [datetime])\nholiday([holiday string], [datetime], [country name])"})}),(0,D.Y)("h4",{children:(0,d.t)("Example")}),(0,D.Y)("pre",{children:(0,D.Y)("code",{children:'holiday("new year")\nholiday("christmas", datetime("2019"))\nholiday("christmas", dateadd(datetime("2019"), 1, year))\nholiday("christmas", datetime("2 years ago"))\nholiday("Easter Monday", datetime("2019"), "UK")'})})]})]}),G=e=>{const t=(0,i.DP)();return(0,D.Y)(l.Z2,{children:({css:n})=>(0,D.Y)(g.m,{overlayClassName:n`
            .ant-tooltip-content {
              min-width: ${125*t.gridUnit}px;
              max-height: 410px;
              overflow-y: scroll;

              .ant-tooltip-inner {
                max-width: ${125*t.gridUnit}px;
                h3 {
                  font-size: ${t.typography.sizes.m}px;
                  font-weight: ${t.typography.weights.bold};
                }
                h4 {
                  font-size: ${t.typography.sizes.m}px;
                  font-weight: ${t.typography.weights.bold};
                }
                pre {
                  border: none;
                  text-align: left;
                  word-break: break-word;
                  font-size: ${t.typography.sizes.s}px;
                }
              }
            }
          `,...e})})};function P(e){return(0,D.Y)(G,{title:L,...e})}function O(e){return e.includes(c.wv)?e:e.startsWith("Last")?[e,""].join(c.wv):e.startsWith("Next")?["",e].join(c.wv):c.wv}function W(e){const t=O(e.value||""),[n,a]=t.split(c.wv);function i(t,i){"since"===t?e.onChange(`${i}${c.wv}${a}`):e.onChange(`${n}${c.wv}${i}`)}return t!==e.value&&e.onChange(O(e.value||"")),(0,D.FD)(D.FK,{children:[(0,D.FD)("div",{className:"section-title",children:[(0,d.t)("Configure Advanced Time Range "),(0,D.Y)(P,{placement:"rightBottom",children:(0,D.Y)("i",{className:"fa fa-info-circle text-muted"})})]}),(0,D.FD)("div",{className:"control-label",children:[(0,d.t)("START (INCLUSIVE)")," ",(0,D.Y)(N.W,{tooltip:(0,d.t)("Start date included in time range"),placement:"right"})]}),(0,D.Y)(k.pd,{value:n,onChange:e=>i("since",e.target.value)},"since"),(0,D.FD)("div",{className:"control-label",children:[(0,d.t)("END (EXCLUSIVE)")," ",(0,D.Y)(N.W,{tooltip:(0,d.t)("End date excluded from time range"),placement:"right"})]}),(0,D.Y)(k.pd,{value:a,onChange:e=>i("until",e.target.value)},"until")]})}const z="#45BED6",U=i.I4.div`
  ${({theme:e,isActive:t,isPlaceholder:n})=>l.AH`
    width: 100%;
    height: ${8*e.gridUnit}px;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    padding: 0 ${3*e.gridUnit}px;

    background-color: ${e.colors.grayscale.light5};

    border: 1px solid
      ${t?z:e.colors.grayscale.light2};
    border-radius: ${e.borderRadius}px;

    cursor: pointer;

    transition: border-color 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
    :hover,
    :focus {
      border-color: ${z};
    }

    .date-label-content {
      color: ${n?e.colors.grayscale.light1:e.colors.grayscale.dark1};
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      flex-shrink: 1;
      white-space: nowrap;
    }

    span[role='img'] {
      margin-left: auto;
      padding-left: ${e.gridUnit}px;

      & > span[role='img'] {
        line-height: 0;
      }
    }
  `}
`,H=(0,a.forwardRef)(((e,t)=>{const n=(0,i.DP)();return(0,D.FD)(U,{...e,tabIndex:0,children:[(0,D.Y)("span",{className:"date-label-content",ref:t,children:"string"==typeof e.label?(0,d.t)(e.label):e.label}),(0,D.Y)(v.A.CalendarOutlined,{iconSize:"s",iconColor:n.colors.grayscale.base})]})})),B=(0,i.I4)(p.A)`
  width: 272px;
`,q=i.I4.div`
  ${({theme:e})=>l.AH`
    .ant-row {
      margin-top: 8px;
    }

    .ant-input-number {
      width: 100%;
    }

    .ant-picker {
      padding: 4px 17px 4px;
      border-radius: 4px;
      width: 100%;
    }

    .ant-divider-horizontal {
      margin: 16px 0;
    }

    .control-label {
      font-size: 11px;
      font-weight: ${e.typography.weights.medium};
      color: ${e.colors.grayscale.light2};
      line-height: 16px;
      margin: 8px 0;
    }

    .vertical-radio {
      display: block;
      height: 40px;
      line-height: 40px;
    }

    .section-title {
      font-style: normal;
      font-weight: ${e.typography.weights.bold};
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 8px;
    }

    .control-anchor-to {
      margin-top: 16px;
    }

    .control-anchor-to-datetime {
      width: 217px;
    }

    .footer {
      text-align: right;
    }
  `}
`,_=i.I4.span`
  span {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({theme:e})=>e.colors.error.base};
  }
`,K=(e,t,n)=>e?(0,D.FD)("div",{children:[t&&(0,D.Y)("strong",{children:t}),n&&(0,D.Y)("div",{css:e=>l.AH`
            margin-top: ${e.gridUnit}px;
          `,children:n})]}):n||null;function Z(e){var t;const{onChange:n,onOpenPopover:l=Y.fZ,onClosePopover:p=Y.fZ,overlayStyle:w="Popover",isOverflowingFilterBar:E=!1}=e,S=(0,y.IM)(),T=null!=(t=e.value)?t:S,[F,I]=(0,a.useState)(T),[N,k]=(0,a.useState)(!1),M=(0,a.useMemo)((()=>(0,y.J5)(T)),[T]),[V,L]=(0,a.useState)(M),[G,P]=(0,a.useState)(T),[O,z]=(0,a.useState)(T),[U,Z]=(0,a.useState)(!1),[J,j]=(0,a.useState)(T),[Q,X]=(0,a.useState)(T),ee=(0,i.DP)(),[te,ne]=(0,r.A)();function ae(){z(T),L(M),k(!1),p()}(0,a.useEffect)((()=>{if(T===o.WC)return I(o.WC),X(null),void Z(!0);(0,c.x9)(T).then((({value:e,error:t})=>{t?(j(t||""),Z(!1),X(T||null)):("Common"===M||"Calendar"===M||"Current"===M||"No filter"===M?(I(T),X(K(ne,T,e))):(I(e||""),X(K(ne,e,T))),Z(!0)),P(T),j(e||T)}))}),[M,ne,te,T]),(0,f.sv)((()=>{if(O===o.WC)return j(o.WC),P(o.WC),void Z(!0);G!==O&&(0,c.x9)(O).then((({value:e,error:t})=>{t?(j(t||""),Z(!1)):(j(e||""),Z(!0)),P(O)}))}),b.Qs,[O]);const ie=()=>{N?ae():(z(T),L(M),k(!0),l())},le=(0,D.FD)(q,{children:[(0,D.Y)("div",{className:"control-label",children:(0,d.t)("RANGE TYPE")}),(0,D.Y)(B,{ariaLabel:(0,d.t)("RANGE TYPE"),options:y.BJ,value:V,onChange:function(e){e===o.WC&&z(o.WC),L(e)}}),"No filter"!==V&&(0,D.Y)(m.cG,{}),"Common"===V&&(0,D.Y)(A,{value:O,onChange:z}),"Calendar"===V&&(0,D.Y)($,{value:O,onChange:z}),"Current"===V&&(0,D.Y)(x,{value:O,onChange:z}),"Advanced"===V&&(0,D.Y)(W,{value:O,onChange:z}),"Custom"===V&&(0,D.Y)(R,{value:O,onChange:z}),"No filter"===V&&(0,D.Y)("div",{}),(0,D.Y)(m.cG,{}),(0,D.FD)("div",{children:[(0,D.Y)("div",{className:"section-title",children:(0,d.t)("Actual time range")}),U&&(0,D.Y)("div",{children:"No filter"===J?(0,d.t)("No filter"):J}),!U&&(0,D.FD)(_,{className:"warning",children:[(0,D.Y)(v.A.ErrorSolidSmall,{iconColor:ee.colors.error.base}),(0,D.Y)("span",{className:"text error",children:J})]})]}),(0,D.Y)(m.cG,{}),(0,D.FD)("div",{className:"footer",children:[(0,D.Y)(s.A,{buttonStyle:"secondary",cta:!0,onClick:ae,children:(0,d.t)("CANCEL")},"cancel"),(0,D.Y)(s.A,{buttonStyle:"primary",cta:!0,disabled:!U,onClick:function(){n(O),k(!1),p()},children:(0,d.t)("APPLY")},"apply")]})]}),re=(0,D.FD)(_,{children:[(0,D.Y)(v.A.EditAlt,{iconColor:ee.colors.grayscale.base}),(0,D.Y)("span",{className:"text",children:(0,d.t)("Edit time range")})]}),oe=(0,D.Y)(C.A,{placement:"right",trigger:"click",content:le,title:re,defaultVisible:N,visible:N,onVisibleChange:ie,overlayStyle:{width:"600px"},getPopupContainer:e=>E?e.parentNode:document.body,destroyTooltipOnHide:!0,children:(0,D.Y)(g.m,{placement:"top",title:Q,getPopupContainer:e=>e.parentElement,children:(0,D.Y)(H,{label:F,isActive:N,isPlaceholder:F===o.WC,ref:te})})}),ce=(0,D.FD)(D.FK,{children:[(0,D.Y)(g.m,{placement:"top",title:Q,getPopupContainer:e=>e.parentElement,children:(0,D.Y)(H,{onClick:ie,label:F,isActive:N,isPlaceholder:F===o.WC,ref:te})}),(0,D.Y)(h.A,{title:re,show:N,onHide:ie,width:"600px",hideFooter:!0,zIndex:1030,children:le})]});return(0,D.FD)(D.FK,{children:[(0,D.Y)(u.A,{...e}),"Modal"===w?ce:oe]})}},39074:(e,t,n)=>{n.d(t,{Ay:()=>a.A});var a=n(45267);n(39942)},7987:(e,t,n)=>{n.d(t,{RV:()=>d,be:()=>l,cJ:()=>c,ke:()=>o,kw:()=>s,oF:()=>i,sw:()=>a,u_:()=>r});const a="previous calendar week",i="previous calendar month",l="previous calendar year",r="Current day",o="Current week",c="Current month",d="Current year",s="Current quarter"},39942:(e,t,n)=>{n.d(t,{cn:()=>s,oo:()=>C,nS:()=>u,z6:()=>c,Be:()=>Y,OL:()=>d,yI:()=>y,ZC:()=>h,Ex:()=>m,BJ:()=>o,mb:()=>A,bd:()=>D,zz:()=>w,IZ:()=>p,Wm:()=>f,s6:()=>g,OP:()=>b,IS:()=>I,d$:()=>T,J5:()=>V,IM:()=>R});var a=n(95093),i=n.n(a),l=n(95579),r=n(7987);const o=[{value:"Common",label:(0,l.t)("Last")},{value:"Calendar",label:(0,l.t)("Previous")},{value:"Current",label:(0,l.t)("Current")},{value:"Custom",label:(0,l.t)("Custom")},{value:"Advanced",label:(0,l.t)("Advanced")},{value:"No filter",label:(0,l.t)("No filter")}],c=[{value:"Last day",label:(0,l.t)("Last day")},{value:"Last week",label:(0,l.t)("Last week")},{value:"Last month",label:(0,l.t)("Last month")},{value:"Last quarter",label:(0,l.t)("Last quarter")},{value:"Last year",label:(0,l.t)("Last year")}],d=new Set(c.map((({value:e})=>e))),s=[{value:r.sw,label:(0,l.t)("previous calendar week")},{value:r.oF,label:(0,l.t)("previous calendar month")},{value:r.be,label:(0,l.t)("previous calendar year")}],u=new Set(s.map((({value:e})=>e))),h=[{value:r.u_,label:(0,l.t)("Current day")},{value:r.ke,label:(0,l.t)("Current week")},{value:r.cJ,label:(0,l.t)("Current month")},{value:r.kw,label:(0,l.t)("Current quarter")},{value:r.RV,label:(0,l.t)("Current year")}],m=new Set(h.map((({value:e})=>e))),v=[{value:"second",label:e=>(0,l.t)("Seconds %s",e)},{value:"minute",label:e=>(0,l.t)("Minutes %s",e)},{value:"hour",label:e=>(0,l.t)("Hours %s",e)},{value:"day",label:e=>(0,l.t)("Days %s",e)},{value:"week",label:e=>(0,l.t)("Weeks %s",e)},{value:"month",label:e=>(0,l.t)("Months %s",e)},{value:"quarter",label:e=>(0,l.t)("Quarters %s",e)},{value:"year",label:e=>(0,l.t)("Years %s",e)}],p=v.map((e=>({value:e.value,label:e.label((0,l.t)("Before"))}))),g=v.map((e=>({value:e.value,label:e.label((0,l.t)("After"))}))),f=[{value:"specific",label:(0,l.t)("Specific Date/Time")},{value:"relative",label:(0,l.t)("Relative Date/Time")},{value:"now",label:(0,l.t)("Now")},{value:"today",label:(0,l.t)("Midnight")}],b=f.slice(),Y=new Set(["Last day","Last week","Last month","Last quarter","Last year"]),C=new Set([r.sw,r.oF,r.be]),y=new Set([r.u_,r.ke,r.cJ,r.kw,r.RV]),w="YYYY-MM-DD[T]HH:mm:ss",D=(i()().utc().startOf("day").subtract(7,"days").format(w),i()().utc().startOf("day").format(w)),A={en:()=>Promise.resolve().then(n.bind(n,33087)),fr:()=>n.e(4394).then(n.bind(n,64394)),es:()=>n.e(9062).then(n.bind(n,9062)),it:()=>n.e(2936).then(n.bind(n,92936)),zh:()=>n.e(3009).then(n.bind(n,83009)),ja:()=>n.e(7595).then(n.bind(n,97595)),de:()=>n.e(12).then(n.bind(n,50012)),pt:()=>n.e(4998).then(n.bind(n,94998)),pt_BR:()=>n.e(1330).then(n.bind(n,21330)),ru:()=>n.e(5860).then(n.bind(n,95860)),ko:()=>n.e(6461).then(n.bind(n,6461)),sk:()=>n.e(3610).then(n.bind(n,23610)),sl:()=>n.e(8639).then(n.bind(n,78639)),nl:()=>n.e(1982).then(n.bind(n,21982))};var E;!function(e){e.CommonFrame="common-frame",e.ModalOverlay="modal-overlay",e.PopoverOverlay="time-range-trigger",e.NoFilter="no-filter",e.CancelButton="cancel-button",e.ApplyButton="date-filter-control__apply-button"}(E||(E={}));const $=String.raw`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`,x=String.raw`(?:TODAY|NOW)`,S=(RegExp(String.raw`^${$}$|^${x}$`,"i"),["specific","today","now"]),T=e=>"now"===e?i()().utc().startOf("second"):"today"===e?i()().utc().startOf("day"):i()(e),F=e=>T(e).format(w),I=e=>{const{sinceDatetime:t,sinceMode:n,sinceGrain:a,sinceGrainValue:i,untilDatetime:l,untilMode:r,untilGrain:o,untilGrainValue:c,anchorValue:d}={...e};if(S.includes(n)&&S.includes(r))return`${"specific"===n?F(t):n} : ${"specific"===r?F(l):r}`;if(S.includes(n)&&"relative"===r){const e="specific"===n?F(t):n;return`${e} : DATEADD(DATETIME("${e}"), ${c}, ${o})`}if("relative"===n&&S.includes(r)){const e="specific"===r?F(l):r;return`DATEADD(DATETIME("${e}"), ${-Math.abs(i)}, ${a}) : ${e}`}return`DATEADD(DATETIME("${d}"), ${-Math.abs(i)}, ${a}) : DATEADD(DATETIME("${d}"), ${c}, ${o})`};var N=n(96627),k=n(13686),M=n(61225);const V=e=>d.has(e)?"Common":u.has(e)?"Calendar":m.has(e)?"Current":e===N.WC?"No filter":(0,k.t)(e).matchedFlag?"Custom":"Advanced";function R(){var e;return null!=(e=(0,M.d4)((e=>{var t,n;return null==e||null==(t=e.common)||null==(n=t.conf)?void 0:n.DEFAULT_TIME_FILTER})))?e:N.WC}}}]);
//# sourceMappingURL=26901942e0491921c025.chunk.js.map