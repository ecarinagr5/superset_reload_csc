"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9019],{18575:(e,t,a)=>{t.w$=t.uv=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=l(a(96540)),i=l(a(5556)),o=a(11447);function l(e){return e&&e.__esModule?e:{default:e}}t.uv=function(e){var t=e.itemTypeToComponent,a=e.WrapperComponent,l=void 0===a?"div":a,s=function(e){var a=e.currentPage,i=e.totalPages,s=e.boundaryPagesRange,d=e.siblingPagesRange,c=e.hideEllipsis,u=e.hidePreviousAndNextPageLinks,g=e.hideFirstAndLastPageLinks,h=e.onChange,p=e.disabled,P=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),m=(0,o.getPaginationModel)({currentPage:a,totalPages:i,boundaryPagesRange:s,siblingPagesRange:d,hideEllipsis:c,hidePreviousAndNextPageLinks:u,hideFirstAndLastPageLinks:g}),E=function(e,t,a){return function(i){var o,l,s,d=e[i.type],c=(l=(o=i).value,s=o.isDisabled,function(){!s&&a&&t!==l&&a(l)});return r.default.createElement(d,n({onClick:c},i))}}(t,a,h);return r.default.createElement(l,P,m.map((function(e){return E(n({},e,{isDisabled:!!p}))})))};return s.propTypes={currentPage:i.default.number.isRequired,totalPages:i.default.number.isRequired,boundaryPagesRange:i.default.number,siblingPagesRange:i.default.number,hideEllipsis:i.default.bool,hidePreviousAndNextPageLinks:i.default.bool,hideFirstAndLastPageLinks:i.default.bool,onChange:i.default.func,disabled:i.default.bool},s},t.w$=o.ITEM_TYPES},12397:(e,t,a)=>{a.d(t,{U:()=>l});var n=a(19129),r=a(25106),i=a(95579),o=a(2445);const l=({user:e,date:t})=>{const a=(0,o.Y)("span",{className:"no-wrap",children:t});if(e){const t=(0,r.A)(e),l=(0,i.t)("Modified by: %s",t);return(0,o.Y)(n.m,{title:l,placement:"bottom",children:a})}return a}},83691:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(96453),r=a(19129),i=a(12249),o=a(2445);const l=n.I4.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,s=n.I4.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,o.Y)(l,{className:"actions",children:e.map(((e,t)=>{const a=i.A[e.icon];return e.tooltip?(0,o.Y)(r.m,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,children:(0,o.Y)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,o.Y)(a,{})})},t):(0,o.Y)(s,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,children:(0,o.Y)(a,{})},t)}))})}},1761:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var n=a(96540),r=a(58561),i=a.n(r),o=a(95579),l=a(35742),s=a(61574),d=a(71519),c=a(50500),u=a(30703),g=a(5261),h=a(51713),p=a(83691),P=a(39854),m=a(37020),E=a(63358),b=a(96453),y=a(12249),f=a(85861),_=a(2445);const v=b.I4.div`
  margin: ${({theme:e})=>2*e.gridUnit}px auto
    ${({theme:e})=>4*e.gridUnit}px auto;
`,A=b.I4.div`
  margin-bottom: ${({theme:e})=>10*e.gridUnit}px;

  .control-label {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .required {
    margin-left: ${({theme:e})=>e.gridUnit/2}px;
    color: ${({theme:e})=>e.colors.error.base};
  }

  textarea,
  input[type='text'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    width: 50%;
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    width: 100%;
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,S=(0,g.Ay)((({addDangerToast:e,addSuccessToast:t,onLayerAdd:a,onHide:r,show:i,layer:l=null})=>{const[s,d]=(0,n.useState)(!0),[g,h]=(0,n.useState)(),[p,P]=(0,n.useState)(!0),m=null!==l,{state:{loading:E,resource:b},fetchResource:S,createResource:I,updateResource:L}=(0,c.fn)("annotation_layer",(0,o.t)("annotation_layer"),e),T=()=>{h({name:"",descr:""})},N=()=>{P(!0),T(),r()},w=e=>{const{target:t}=e,a={...g,name:g?g.name:"",descr:g?g.descr:""};a[t.name]=t.value,h(a)};return(0,n.useEffect)((()=>{if(m&&(null==g||!g.id||l&&l.id!==g.id||p&&i)){if(i&&l&&null!==l.id&&!E){const e=l.id||0;S(e)}}else!m&&(!g||g.id||p&&i)&&T()}),[l,i]),(0,n.useEffect)((()=>{b&&h(b)}),[b]),(0,n.useEffect)((()=>{var e;null!=g&&null!=(e=g.name)&&e.length?d(!1):d(!0)}),[g?g.name:"",g?g.descr:""]),p&&i&&P(!1),(0,_.FD)(f.A,{disablePrimaryButton:s,onHandledPrimaryAction:()=>{if(m){if(null!=g&&g.id){const e=g.id;delete g.id,delete g.created_by,L(e,g).then((e=>{e&&(N(),t((0,o.t)("Annotation template updated")))}))}}else g&&I(g).then((e=>{e&&(a&&a(e),N(),t((0,o.t)("Annotation template created")))}))},onHide:N,primaryButtonName:m?(0,o.t)("Save"):(0,o.t)("Add"),show:i,width:"55%",title:(0,_.FD)("h4",{children:[m?(0,_.Y)(y.A.EditAlt,{css:u.vE}):(0,_.Y)(y.A.PlusLarge,{css:u.vE}),m?(0,o.t)("Edit annotation layer properties"):(0,o.t)("Add annotation layer")]}),children:[(0,_.Y)(v,{children:(0,_.Y)("h4",{children:(0,o.t)("Basic information")})}),(0,_.FD)(A,{children:[(0,_.FD)("div",{className:"control-label",children:[(0,o.t)("Annotation layer name"),(0,_.Y)("span",{className:"required",children:"*"})]}),(0,_.Y)("input",{name:"name",onChange:w,type:"text",value:null==g?void 0:g.name})]}),(0,_.FD)(A,{children:[(0,_.Y)("div",{className:"control-label",children:(0,o.t)("description")}),(0,_.Y)("textarea",{name:"descr",value:null==g?void 0:g.descr,placeholder:(0,o.t)("Description (this can be seen in the list)"),onChange:w})]})]})}));var I=a(12397),L=a(23193);const T=(0,g.Ay)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:r,resourceCount:g,resourceCollection:b,bulkSelectEnabled:y},hasPerm:f,fetchData:v,refreshData:A,toggleBulkSelect:T}=(0,c.RU)("annotation_layer",(0,o.t)("Annotation layers"),e),[N,w]=(0,n.useState)(!1),[k,Y]=(0,n.useState)(null),[M,R]=(0,n.useState)(null),x=f("can_write"),F=f("can_write"),K=f("can_write");function C(e){Y(e),w(!0)}const D=[{id:"name",desc:!0}],G=(0,n.useMemo)((()=>[{accessor:"name",Header:(0,o.t)("Name"),Cell:({row:{original:{id:e,name:t}}})=>{let a=!0;try{(0,s.W6)()}catch(e){a=!1}return a?(0,_.Y)(d.N_,{to:`/annotationlayer/${e}/annotation`,children:t}):(0,_.Y)("a",{href:`/annotationlayer/${e}/annotation`,children:t})}},{accessor:"descr",Header:(0,o.t)("Description")},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,_.Y)(I.U,{date:e,user:t}),Header:(0,o.t)("Last modified"),accessor:"changed_on",size:"xl"},{Cell:({row:{original:e}})=>{const t=[F?{label:"edit-action",tooltip:(0,o.t)("Edit template"),placement:"bottom",icon:"Edit",onClick:()=>C(e)}:null,K?{label:"delete-action",tooltip:(0,o.t)("Delete template"),placement:"bottom",icon:"Trash",onClick:()=>R(e)}:null].filter((e=>!!e));return(0,_.Y)(p.A,{actions:t})},Header:(0,o.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!F&&!K,size:"xl"},{accessor:L.H.ChangedBy,hidden:!0}]),[K,x]),$=[];x&&$.push({name:(0,_.FD)(_.FK,{children:[(0,_.Y)("i",{className:"fa fa-plus"})," ",(0,o.t)("Annotation layer")]}),buttonStyle:"primary",onClick:()=>{C(null)}}),K&&$.push({name:(0,o.t)("Bulk select"),onClick:T,buttonStyle:"secondary"});const U=(0,n.useMemo)((()=>[{Header:(0,o.t)("Name"),key:"search",id:"name",input:"search",operator:P.t.Contains},{Header:(0,o.t)("Changed by"),key:"changed_by",id:"changed_by",input:"select",operator:P.t.RelationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,u.u1)("annotation_layer","changed_by",(0,u.JF)((e=>(0,o.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[]),O={title:(0,o.t)("No annotation layers yet"),image:"filter-results.svg",buttonAction:()=>C(null),buttonText:(0,_.FD)(_.FK,{children:[(0,_.Y)("i",{className:"fa fa-plus"})," ",(0,o.t)("Annotation layer")]})};return(0,_.FD)(_.FK,{children:[(0,_.Y)(h.A,{name:(0,o.t)("Annotation layers"),buttons:$}),(0,_.Y)(S,{addDangerToast:e,layer:k,onLayerAdd:e=>{window.location.href=`/annotationlayer/${e}/annotation`},onHide:()=>{A(),w(!1)},show:N}),M&&(0,_.Y)(m.A,{description:(0,o.t)("This action will permanently delete the layer."),onConfirm:()=>{M&&(({id:a,name:n})=>{l.A.delete({endpoint:`/api/v1/annotation_layer/${a}`}).then((()=>{A(),R(null),t((0,o.t)("Deleted: %s",n))}),(0,u.JF)((t=>e((0,o.t)("There was an issue deleting %s: %s",n,t)))))})(M)},onHide:()=>R(null),open:!0,title:(0,o.t)("Delete Layer?")}),(0,_.Y)(E.A,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected layers?"),onConfirm:a=>{l.A.delete({endpoint:`/api/v1/annotation_layer/?q=${i().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{A(),t(e.message)}),(0,u.JF)((t=>e((0,o.t)("There was an issue deleting the selected layers: %s",t)))))},children:a=>{const n=K?[{key:"delete",name:(0,o.t)("Delete"),onSelect:a,type:"danger"}]:[];return(0,_.Y)(P.A,{className:"annotation-layers-list-view",columns:G,count:g,data:b,fetchData:v,filters:U,initialSort:D,loading:r,pageSize:25,bulkActions:n,bulkSelectEnabled:y,disableBulkSelect:T,addDangerToast:e,addSuccessToast:t,emptyState:O,refreshData:A})}})]})}))},52708:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},8960:(e,t,a)=>{var n=a(52708);t.createFirstEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.FIRST_PAGE_LINK,key:n.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:n.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.NEXT_PAGE_LINK,key:n.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(a,t+1),isActive:t===a}},t.createLastPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.LAST_PAGE_LINK,key:n.ITEM_KEYS.LAST_PAGE_LINK,value:a,isActive:t===a}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:n.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},17991:(e,t)=>{t.createRange=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a}},11447:(e,t,a)=>{var n=a(17991),r=a(8960);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var a=Number(e.currentPage);if(isNaN(a))throw new Error("getPaginationModel(): currentPage should be a number");if(a<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(a>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var i=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(i))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(i<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var o=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(o))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(o<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var l=Boolean(e.hidePreviousAndNextPageLinks),s=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),c=d?0:1,u=[],g=r.createPageFunctionFactory(e);if(s||u.push(r.createFirstPageLink(e)),l||u.push(r.createPreviousPageLink(e)),1+2*c+2*o+2*i>=t){var h=n.createRange(1,t).map(g);u.push.apply(u,h)}else{var p=i,P=n.createRange(1,p).map(g),m=t+1-i,E=t,b=n.createRange(m,E).map(g),y=Math.min(Math.max(a-o,p+c+1),m-c-2*o-1),f=y+2*o,_=n.createRange(y,f).map(g);if(u.push.apply(u,P),!d){var v=y-1,A=(v===p+1?g:r.createFirstEllipsis)(v);u.push(A)}if(u.push.apply(u,_),!d){var S=f+1,I=(S===m-1?g:r.createSecondEllipsis)(S);u.push(I)}u.push.apply(u,b)}return l||u.push(r.createNextPageLink(e)),s||u.push(r.createLastPageLink(e)),u};var i=a(52708);t.ITEM_TYPES=i.ITEM_TYPES,t.ITEM_KEYS=i.ITEM_KEYS}}]);
//# sourceMappingURL=9d8e21c5f1bf37d4c734.chunk.js.map