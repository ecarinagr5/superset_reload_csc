/*! For license information please see 11391d1ff0cc3209ad5b.chunk.js.LICENSE.txt */
(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5026],{78325:(e,t,n)=>{var i=n(83120),r=n(55378);e.exports=function(e,t){return i(r(e,t),1/0)}},72827:(e,t,n)=>{"use strict";n.d(t,{DragLayer:()=>B,DragSource:()=>P,DropTarget:()=>H});var i=n(72954);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){return"function"==typeof e}function a(){}function s(e){if(!function(e){return"object"===r(e)&&null!==e}(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function l(e){var t=e.current;return null==t?null:t.decoratedRef?t.decoratedRef.current:t}function d(e){return(t=e)&&t.prototype&&"function"==typeof t.prototype.render||function(e){var t;return"Symbol(react.forward_ref)"===(null==e||null===(t=e.$$typeof)||void 0===t?void 0:t.toString())}(e);var t}var c=n(96540),h=n(49194),u=n(4146),p=n.n(u),m=n(44697);function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function b(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var v=function(){var e=function(){function e(t){g(this,e),this.isDisposed=!1,this.action=o(t)?t:a}return b(e,[{key:"dispose",value:function(){this.isDisposed||(this.action(),this.isDisposed=!0)}}],[{key:"isDisposable",value:function(e){return Boolean(e&&o(e.dispose))}},{key:"_fixup",value:function(t){return e.isDisposable(t)?t:e.empty}},{key:"create",value:function(t){return new e(t)}}]),e}();return e.empty={dispose:a},e}(),y=function(){function e(){g(this,e),this.isDisposed=!1;for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.disposables=n}return b(e,[{key:"add",value:function(e){this.isDisposed?e.dispose():this.disposables.push(e)}},{key:"remove",value:function(e){var t=!1;if(!this.isDisposed){var n=this.disposables.indexOf(e);-1!==n&&(t=!0,this.disposables.splice(n,1),e.dispose())}return t}},{key:"clear",value:function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.disposables=[];for(var i=0;i<e;i++)t[i].dispose()}}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.disposables=[];for(var i=0;i<e;i++)t[i].dispose()}}}]),e}(),x=function(){function e(){g(this,e),this.isDisposed=!1}return b(e,[{key:"getDisposable",value:function(){return this.current}},{key:"setDisposable",value:function(e){var t=this.isDisposed;if(!t){var n=this.current;this.current=e,n&&n.dispose()}t&&e&&e.dispose()}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=void 0,e&&e.dispose()}}}]),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function w(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function F(e){var t=e.DecoratedComponent,n=e.createHandler,r=e.createMonitor,o=e.createConnector,a=e.registerHandler,s=e.containerDisplayName,l=e.getType,u=e.collect,g=e.options.arePropsEqual,f=void 0===g?h.b:g,b=t,F=t.displayName||t.name||"Component",$=function(){var e=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(R,e);var t,s,p,g,$=(p=R,g=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t,n,i=I(p);if(g){var r=I(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return t=this,!(n=e)||"object"!==C(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n});function R(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,R),(t=$.call(this,e)).decoratedRef=c.createRef(),t.handleChange=function(){var e=t.getCurrentState();(0,h.b)(e,t.state)||t.setState(e)},t.disposable=new x,t.receiveProps(e),t.dispose(),t}return t=R,(s=[{key:"getHandlerId",value:function(){return this.handlerId}},{key:"getDecoratedComponentInstance",value:function(){return(0,i.V)(this.decoratedRef.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.decoratedRef.current}},{key:"shouldComponentUpdate",value:function(e,t){return!f(e,this.props)||!(0,h.b)(t,this.state)}},{key:"componentDidMount",value:function(){this.disposable=new x,this.currentType=void 0,this.receiveProps(this.props),this.handleChange()}},{key:"componentDidUpdate",value:function(e){f(this.props,e)||(this.receiveProps(this.props),this.handleChange())}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"receiveProps",value:function(e){this.handler&&(this.handler.receiveProps(e),this.receiveType(l(e)))}},{key:"receiveType",value:function(e){if(this.handlerMonitor&&this.manager&&this.handlerConnector&&e!==this.currentType){this.currentType=e;var t=(o=a(e,this.handler,this.manager),s=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}}(o,s)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(o,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=t[0],i=t[1];this.handlerId=n,this.handlerMonitor.receiveHandlerId(n),this.handlerConnector.receiveHandlerId(n);var r=this.manager.getMonitor().subscribeToStateChange(this.handleChange,{handlerIds:[n]});this.disposable.setDisposable(new y(new v(r),new v(i)))}var o,s}},{key:"dispose",value:function(){this.disposable.dispose(),this.handlerConnector&&this.handlerConnector.receiveHandlerId(null)}},{key:"getCurrentState",value:function(){return this.handlerConnector?u(this.handlerConnector.hooks,this.handlerMonitor,this.props):{}}},{key:"render",value:function(){var e=this;return c.createElement(m.M.Consumer,null,(function(t){var n=t.dragDropManager;return e.receiveDragDropManager(n),"undefined"!=typeof requestAnimationFrame&&requestAnimationFrame((function(){var t;return null===(t=e.handlerConnector)||void 0===t?void 0:t.reconnect()})),c.createElement(b,Object.assign({},e.props,e.getCurrentState(),{ref:d(b)?e.decoratedRef:null}))}))}},{key:"receiveDragDropManager",value:function(e){void 0===this.manager&&((0,i.V)(void 0!==e,"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",F,F),void 0!==e&&(this.manager=e,this.handlerMonitor=r(e),this.handlerConnector=o(e.getBackend()),this.handler=n(this.handlerMonitor,this.decoratedRef)))}}])&&w(t.prototype,s),R}(c.Component);return e.DecoratedComponent=t,e.displayName="".concat(s,"(").concat(F,")"),e}();return p()($,t)}var $=n(63207),R=n(44745),k=n(52904);function Y(e){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function T(e,t){return"string"==typeof e||"symbol"===Y(e)||!!t&&Array.isArray(e)&&e.every((function(e){return T(e,!1)}))}function M(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var A=["canDrag","beginDrag","isDragging","endDrag"],E=["beginDrag"],_=function(){function e(t,n,i){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.beginDrag=function(){if(r.props)return r.spec.beginDrag(r.props,r.monitor,r.ref.current)},this.spec=t,this.monitor=n,this.ref=i}var t,n;return t=e,(n=[{key:"receiveProps",value:function(e){this.props=e}},{key:"canDrag",value:function(){return!!this.props&&(!this.spec.canDrag||this.spec.canDrag(this.props,this.monitor))}},{key:"isDragging",value:function(e,t){return!!this.props&&(this.spec.isDragging?this.spec.isDragging(this.props,this.monitor):t===e.getSourceId())}},{key:"endDrag",value:function(){this.props&&this.spec.endDrag&&this.spec.endDrag(this.props,this.monitor,l(this.ref))}}])&&M(t.prototype,n),e}();function P(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.V)(T(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',e),o=function(){return e}),(0,i.V)(s(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',t);var a=function(e){return Object.keys(e).forEach((function(t){(0,i.V)(A.indexOf(t)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',A.join(", "),t),(0,i.V)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),E.forEach((function(t){(0,i.V)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),function(t,n){return new _(e,t,n)}}(t);return(0,i.V)("function"==typeof n,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',n),(0,i.V)(s(r),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',n),function(e){return F({containerDisplayName:"DragSource",createHandler:a,registerHandler:$.V,createConnector:function(e){return new k.b(e)},createMonitor:function(e){return new R.G(e)},DecoratedComponent:e,getType:o,collect:n,options:r})}}var z=n(50384),U=n(64080);function O(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var q=["canDrop","hover","drop"],N=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.spec=t,this.monitor=n,this.ref=i}var t,n;return t=e,(n=[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveMonitor",value:function(e){this.monitor=e}},{key:"canDrop",value:function(){return!this.spec.canDrop||this.spec.canDrop(this.props,this.monitor)}},{key:"hover",value:function(){this.spec.hover&&this.props&&this.spec.hover(this.props,this.monitor,l(this.ref))}},{key:"drop",value:function(){if(this.spec.drop)return this.spec.drop(this.props,this.monitor,this.ref.current)}}])&&O(t.prototype,n),e}();function H(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.V)(T(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',e),o=function(){return e}),(0,i.V)(s(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',t);var a=function(e){return Object.keys(e).forEach((function(t){(0,i.V)(q.indexOf(t)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',q.join(", "),t),(0,i.V)("function"==typeof e[t],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",t,t,e[t])})),function(t,n){return new N(e,t,n)}}(t);return(0,i.V)("function"==typeof n,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',n),(0,i.V)(s(r),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',n),function(e){return F({containerDisplayName:"DropTarget",createHandler:a,registerHandler:$.l,createMonitor:function(e){return new U.b(e)},createConnector:function(e){return new z.P(e)},DecoratedComponent:e,getType:o,collect:n,options:r})}}function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function L(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.V)("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer",e),(0,i.V)(s(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',t),function(n){var r=n,o=t.arePropsEqual,a=void 0===o?h.b:o,s=r.displayName||r.name||"Component",l=function(){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(g,t);var n,o,l,u,p=(l=g,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t,n,i=W(l);if(u){var r=W(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return t=this,!(n=e)||"object"!==V(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n});function g(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(e=p.apply(this,arguments)).isCurrentlyMounted=!1,e.ref=c.createRef(),e.handleChange=function(){if(e.isCurrentlyMounted){var t=e.getCurrentState();(0,h.b)(t,e.state)||e.setState(t)}},e}return n=g,(o=[{key:"getDecoratedComponentInstance",value:function(){return(0,i.V)(this.ref.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.ref.current}},{key:"shouldComponentUpdate",value:function(e,t){return!a(e,this.props)||!(0,h.b)(t,this.state)}},{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,this.handleChange()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange&&(this.unsubscribeFromOffsetChange(),this.unsubscribeFromOffsetChange=void 0),this.unsubscribeFromStateChange&&(this.unsubscribeFromStateChange(),this.unsubscribeFromStateChange=void 0)}},{key:"render",value:function(){var e=this;return c.createElement(m.M.Consumer,null,(function(t){var n=t.dragDropManager;return void 0===n?null:(e.receiveDragDropManager(n),e.isCurrentlyMounted?c.createElement(r,Object.assign({},e.props,e.state,{ref:d(r)?e.ref:null})):null)}))}},{key:"receiveDragDropManager",value:function(e){if(void 0===this.manager){this.manager=e,(0,i.V)("object"===V(e),"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",s,s);var t=this.manager.getMonitor();this.unsubscribeFromOffsetChange=t.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=t.subscribeToStateChange(this.handleChange)}}},{key:"getCurrentState",value:function(){if(!this.manager)return{};var t=this.manager.getMonitor();return e(t,this.props)}}])&&L(n.prototype,o),g}(c.Component);return t.displayName="DragLayer(".concat(s,")"),t.DecoratedComponent=n,t}();return p()(l,n)}}},89628:(e,t,n)=>{"use strict";n.d(t,{DragLayer:()=>r.DragLayer,DragSource:()=>r.DragSource,DropTarget:()=>r.DropTarget});var i=n(74653);n.o(i,"DragLayer")&&n.d(t,{DragLayer:function(){return i.DragLayer}}),n.o(i,"DragSource")&&n.d(t,{DragSource:function(){return i.DragSource}}),n.o(i,"DropTarget")&&n.d(t,{DropTarget:function(){return i.DropTarget}});var r=n(72827)},75241:()=>{},44309:()=>{},74653:(e,t,n)=>{"use strict";var i=n(10994);n.o(i,"DragLayer")&&n.d(t,{DragLayer:function(){return i.DragLayer}}),n.o(i,"DragSource")&&n.d(t,{DragSource:function(){return i.DragSource}}),n.o(i,"DropTarget")&&n.d(t,{DropTarget:function(){return i.DropTarget}});var r=n(44309);n.o(r,"DragLayer")&&n.d(t,{DragLayer:function(){return r.DragLayer}}),n.o(r,"DragSource")&&n.d(t,{DragSource:function(){return r.DragSource}}),n.o(r,"DropTarget")&&n.d(t,{DropTarget:function(){return r.DropTarget}});var o=n(35535);n.o(o,"DragLayer")&&n.d(t,{DragLayer:function(){return o.DragLayer}}),n.o(o,"DragSource")&&n.d(t,{DragSource:function(){return o.DragSource}}),n.o(o,"DropTarget")&&n.d(t,{DropTarget:function(){return o.DropTarget}});var a=n(75241);n.o(a,"DragLayer")&&n.d(t,{DragLayer:function(){return a.DragLayer}}),n.o(a,"DragSource")&&n.d(t,{DragSource:function(){return a.DragSource}}),n.o(a,"DropTarget")&&n.d(t,{DropTarget:function(){return a.DropTarget}})},10994:()=>{},35535:()=>{},50246:(e,t,n)=>{"use strict";t.HI=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(96540),o=l(r),a=l(n(5556)),s=n(33688);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={searchTerm:n.props.value||""},n.updateSearch=n.updateSearch.bind(n),n.filter=n.filter.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.value&&e.value!==this.props.value){var t={target:{value:e.value}};this.updateSearch(t)}}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.onChange,e.caseSensitive,e.sortResults,e.throttle,e.filterKeys,e.value,e.fuzzy,e.inputClassName),i=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["className","onChange","caseSensitive","sortResults","throttle","filterKeys","value","fuzzy","inputClassName"]);return i.type=i.type||"search",i.value=this.state.searchTerm,i.onChange=this.updateSearch,i.className=n,i.placeholder=i.placeholder||"Search",o.default.createElement("div",{className:t},o.default.createElement("input",i))}},{key:"updateSearch",value:function(e){var t=this,n=e.target.value;this.setState({searchTerm:n},(function(){t._throttleTimeout&&clearTimeout(t._throttleTimeout),t._throttleTimeout=setTimeout((function(){return t.props.onChange(n)}),t.props.throttle)}))}},{key:"filter",value:function(e){var t=this.props,n=t.filterKeys,i=t.caseSensitive,r=t.fuzzy,o=t.sortResults;return(0,s.createFilter)(this.state.searchTerm,e||n,{caseSensitive:i,fuzzy:r,sortResults:o})}}]),t}(r.Component);d.defaultProps={className:"",onChange:function(){},caseSensitive:!1,fuzzy:!1,throttle:200},d.propTypes={className:a.default.string,inputClassName:a.default.string,onChange:a.default.func,caseSensitive:a.default.bool,sortResults:a.default.bool,fuzzy:a.default.bool,throttle:a.default.number,filterKeys:a.default.oneOf([a.default.string,a.default.arrayOf(a.default.string)]),value:a.default.string},t.HI=s.createFilter},33688:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getValuesForKey=a,t.searchStrings=s,t.createFilter=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(i){if(""===e)return!0;n.caseSensitive||(e=e.toLowerCase());var r=e.split(" ");return t?("string"==typeof t&&(t=[t]),r.every((function(e){var r=void 0;if(-1!==e.indexOf(":")){var o=e.split(":")[0];e=e.split(":")[1],r=t.filter((function(e){return e.toLowerCase().indexOf(o)>-1}))}else r=t;return r.some((function(t){return s(a(t,i),e,n)}))}))):r.every((function(e){return s([i],e,n)}))}};var i,r=(i=n(49168))&&i.__esModule?i:{default:i};function o(e){return e.reduce((function(e,t){return e.concat(Array.isArray(t)?o(t):t)}),[])}function a(e,t){var n=e.split("."),i=[t];return n.forEach((function(e){var t=[];i.forEach((function(n){if(n)if(n instanceof Array){var i=parseInt(e,10);if(!isNaN(i))return t.push(n[i]);n.forEach((function(n){t.push(n[e])}))}else n&&"function"==typeof n.get?t.push(n.get(e)):t.push(n[e])})),i=t})),(i=o(i=i.map((function(e){return e&&e.push&&e.toArray?e.toArray():e})))).filter((function(e){return"string"==typeof e||"number"==typeof e}))}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.caseSensitive,o=n.fuzzy,a=n.sortResults,s=n.exactMatch;e=e.map((function(e){return e.toString()}));try{return o?("function"==typeof e.toJS&&(e=e.toJS()),new r.default(e.map((function(e){return{id:e}})),{keys:["id"],id:"id",caseSensitive:i,shouldSort:a}).search(t).length):e.some((function(e){try{return i||(e=e.toLowerCase()),s&&(t=new RegExp("^"+t+"$","i")),!(!e||-1===e.search(t))}catch(e){return!1}}))}catch(e){return!1}}},49168:function(e){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=n(1),a=n(7),s=a.get,l=(a.deepValue,a.isArray),d=function(){function e(t,n){var i=n.location,r=void 0===i?0:i,o=n.distance,a=void 0===o?100:o,l=n.threshold,d=void 0===l?.6:l,c=n.maxPatternLength,h=void 0===c?32:c,u=n.caseSensitive,p=void 0!==u&&u,m=n.tokenSeparator,g=void 0===m?/ +/g:m,f=n.findAllMatches,b=void 0!==f&&f,v=n.minMatchCharLength,y=void 0===v?1:v,x=n.id,C=void 0===x?null:x,S=n.keys,w=void 0===S?[]:S,D=n.shouldSort,I=void 0===D||D,F=n.getFn,$=void 0===F?s:F,R=n.sortFn,k=void 0===R?function(e,t){return e.score-t.score}:R,Y=n.tokenize,T=void 0!==Y&&Y,M=n.matchAllTokens,A=void 0!==M&&M,E=n.includeMatches,_=void 0!==E&&E,P=n.includeScore,z=void 0!==P&&P,U=n.verbose,O=void 0!==U&&U;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:d,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:g,findAllMatches:b,minMatchCharLength:y,id:C,keys:w,includeMatches:_,includeScore:z,shouldSort:I,getFn:$,sortFn:k,verbose:O,tokenize:T,matchAllTokens:A},this.setCollection(t),this._processKeys(w)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var i=e[t];this._keyWeights[i]=1,this._keyNames.push(i)}else{for(var r=null,o=null,a=0,s=0,l=e.length;s<l;s+=1){var d=e[s];if(!d.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var c=d.name;if(this._keyNames.push(c),!d.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var h=d.weight;if(h<0||h>1)throw new Error('"weight" property in key must bein the range of [0, 1)');o=null==o?h:Math.max(o,h),r=null==r?h:Math.min(r,h),this._keyWeights[c]=h,a+=h}if(a>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),i=n.tokenSearchers,r=n.fullSearcher,o=this._search(i,r);return this._computeScore(o),this.options.shouldSort&&this._sort(o),t.limit&&"number"==typeof t.limit&&(o=o.slice(0,t.limit)),this._format(o)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),i=0,r=n.length;i<r;i+=1)t.push(new o(n[i],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,i={},r=[];if("string"==typeof n[0]){for(var o=0,a=n.length;o<a;o+=1)this._analyze({key:"",value:n[o],record:o,index:o},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t});return r}for(var s=0,l=n.length;s<l;s+=1)for(var d=n[s],c=0,h=this._keyNames.length;c<h;c+=1){var u=this._keyNames[c];this._analyze({key:u,value:this.options.getFn(d,u),record:d,index:s},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t})}return r}},{key:"_analyze",value:function(e,t){var n=this,i=e.key,r=e.arrayIndex,o=void 0===r?-1:r,a=e.value,s=e.record,d=e.index,c=t.tokenSearchers,h=void 0===c?[]:c,u=t.fullSearcher,p=t.resultMap,m=void 0===p?{}:p,g=t.results,f=void 0===g?[]:g;!function e(t,r,o,a){if(null!=r)if("string"==typeof r){var s=!1,d=-1,c=0;n._log("\nKey: ".concat(""===i?"--":i));var p=u.search(r);if(n._log('Full text: "'.concat(r,'", score: ').concat(p.score)),n.options.tokenize){for(var g=r.split(n.options.tokenSeparator),b=g.length,v=[],y=0,x=h.length;y<x;y+=1){var C=h[y];n._log('\nPattern: "'.concat(C.pattern,'"'));for(var S=!1,w=0;w<b;w+=1){var D=g[w],I=C.search(D),F={};I.isMatch?(F[D]=I.score,s=!0,S=!0,v.push(I.score)):(F[D]=1,n.options.matchAllTokens||v.push(1)),n._log('Token: "'.concat(D,'", score: ').concat(F[D]))}S&&(c+=1)}d=v[0];for(var $=v.length,R=1;R<$;R+=1)d+=v[R];d/=$,n._log("Token score average:",d)}var k=p.score;d>-1&&(k=(k+d)/2),n._log("Score average:",k);var Y=!n.options.tokenize||!n.options.matchAllTokens||c>=h.length;if(n._log("\nCheck Matches: ".concat(Y)),(s||p.isMatch)&&Y){var T={key:i,arrayIndex:t,value:r,score:k};n.options.includeMatches&&(T.matchedIndices=p.matchedIndices);var M=m[a];M?M.output.push(T):(m[a]={item:o,output:[T]},f.push(m[a]))}}else if(l(r))for(var A=0,E=r.length;A<E;A+=1)e(A,r[A],o,a)}(o,a,s,d)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,i=0,r=e.length;i<r;i+=1){for(var o=e[i],a=o.output,s=a.length,l=1,d=0;d<s;d+=1){var c=a[d],h=c.key,u=n?t[h]:1,p=0===c.score&&t&&t[h]>0?Number.EPSILON:c.score;l*=Math.pow(p,u)}o.score=l,this._log(o)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===i(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var n=e.output;t.matches=[];for(var i=0,r=n.length;i<r;i+=1){var o=n[i];if(0!==o.matchedIndices.length){var a={indices:o.matchedIndices,value:o.value};o.key&&(a.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(a.arrayIndex=o.arrayIndex),t.matches.push(a)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,a=e.length;o<a;o+=1){var s=e[o];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),r.length){for(var l={item:s.item},d=0,c=r.length;d<c;d+=1)r[d](s,l);t.push(l)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,n),e}();e.exports=d},function(e,t,n){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=n(2),o=n(3),a=n(6),s=function(){function e(t,n){var i=n.location,r=void 0===i?0:i,o=n.distance,s=void 0===o?100:o,l=n.threshold,d=void 0===l?.6:l,c=n.maxPatternLength,h=void 0===c?32:c,u=n.isCaseSensitive,p=void 0!==u&&u,m=n.tokenSeparator,g=void 0===m?/ +/g:m,f=n.findAllMatches,b=void 0!==f&&f,v=n.minMatchCharLength,y=void 0===v?1:v,x=n.includeMatches,C=void 0!==x&&x;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:d,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:g,findAllMatches:b,includeMatches:C,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=a(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,i=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return i&&(a.matchedIndices=[[0,e.length-1]]),a}var s=this.options,l=s.maxPatternLength,d=s.tokenSeparator;if(this.pattern.length>l)return r(e,this.pattern,d);var c=this.options,h=c.location,u=c.distance,p=c.threshold,m=c.findAllMatches,g=c.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:h,distance:u,threshold:p,findAllMatches:m,minMatchCharLength:g,includeMatches:i})}}])&&i(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(n,"\\$&").replace(i,"|")),o=e.match(r),a=!!o,s=[];if(a)for(var l=0,d=o.length;l<d;l+=1){var c=o[l];s.push([e.indexOf(c),c.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var i=n(4),r=n(5);e.exports=function(e,t,n,o){for(var a=o.location,s=void 0===a?0:a,l=o.distance,d=void 0===l?100:l,c=o.threshold,h=void 0===c?.6:c,u=o.findAllMatches,p=void 0!==u&&u,m=o.minMatchCharLength,g=void 0===m?1:m,f=o.includeMatches,b=void 0!==f&&f,v=s,y=e.length,x=h,C=e.indexOf(t,v),S=t.length,w=[],D=0;D<y;D+=1)w[D]=0;if(-1!==C){var I=i(t,{errors:0,currentLocation:C,expectedLocation:v,distance:d});if(x=Math.min(I,x),-1!==(C=e.lastIndexOf(t,v+S))){var F=i(t,{errors:0,currentLocation:C,expectedLocation:v,distance:d});x=Math.min(F,x)}}C=-1;for(var $=[],R=1,k=S+y,Y=1<<(S<=31?S-1:30),T=0;T<S;T+=1){for(var M=0,A=k;M<A;)i(t,{errors:T,currentLocation:v+A,expectedLocation:v,distance:d})<=x?M=A:k=A,A=Math.floor((k-M)/2+M);k=A;var E=Math.max(1,v-A+1),_=p?y:Math.min(v+A,y)+S,P=Array(_+2);P[_+1]=(1<<T)-1;for(var z=_;z>=E;z-=1){var U=z-1,O=n[e.charAt(U)];if(O&&(w[U]=1),P[z]=(P[z+1]<<1|1)&O,0!==T&&(P[z]|=($[z+1]|$[z])<<1|1|$[z+1]),P[z]&Y&&(R=i(t,{errors:T,currentLocation:U,expectedLocation:v,distance:d}))<=x){if(x=R,(C=U)<=v)break;E=Math.max(1,2*v-C)}}if(i(t,{errors:T+1,currentLocation:v,expectedLocation:v,distance:d})>x)break;$=P}var q={isMatch:C>=0,score:0===R?.001:R};return b&&(q.matchedIndices=r(w,g)),q}},function(e,t){e.exports=function(e,t){var n=t.errors,i=void 0===n?0:n,r=t.currentLocation,o=void 0===r?0:r,a=t.expectedLocation,s=void 0===a?0:a,l=t.distance,d=void 0===l?100:l,c=i/e.length,h=Math.abs(s-o);return d?c+h/d:h?1:c}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],i=-1,r=-1,o=0,a=e.length;o<a;o+=1){var s=e[o];s&&-1===i?i=o:s||-1===i||((r=o-1)-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,i=0;i<n;i+=1)t[e.charAt(i)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},i=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},r=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e};e.exports={get:function(e,t){var a=[];return function e(t,s){if(s){var l=s.indexOf("."),d=s,c=null;-1!==l&&(d=s.slice(0,l),c=s.slice(l+1));var h=t[d];if(null!=h)if(c||!r(h)&&!o(h))if(n(h))for(var u=0,p=h.length;u<p;u+=1)e(h[u],c);else c&&e(h,c);else a.push(i(h))}else a.push(t)}(e,t),a},isArray:n,isString:r,isNum:o,toString:i}}])},46785:(e,t,n)=>{"use strict";n.d(t,{n:()=>r});var i=n(96540);const r=(e,t)=>{const n=(0,i.useRef)(!1);(0,i.useEffect)((()=>{n.current?e():n.current=!0}),[...t||[e]])}},45991:(e,t,n)=>{"use strict";n.d(t,{N:()=>r});var i=n(96540);function r(e){const t=(0,i.useRef)(null),[n,r]=(0,i.useState)(!1),o=e=>{const[t]=e;r(t.intersectionRatio<1)};return(0,i.useEffect)((()=>{const n=new IntersectionObserver(o,e),i=t.current;return i&&n.observe(i),()=>{i&&n.unobserve(i)}}),[t,e]),[t,n]}},47163:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var i=n(96540);const r=()=>{const[e,t]=(0,i.useState)(0),[n,r]=(0,i.useState)(!1),o=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,i.useLayoutEffect)((()=>{var e;const n=()=>{const e=o.current;if(!e)return;const n=a.current,{scrollWidth:i,clientWidth:s,childNodes:l}=e;if(i>s){const e=6,i=(null==n?void 0:n.offsetWidth)||0,o=s-e,a=l.length;let d=0,c=0;for(let e=0;e<a;e+=1)o-d-i<=0&&(c+=1),d+=l[e].offsetWidth;a>1&&c?(r(!0),t(c)):(r(!1),t(1))}else r(!1),t(0)},i=new ResizeObserver(n),s=null==(e=o.current)?void 0:e.parentElement;return s&&i.observe(s),n(),()=>{i.disconnect()}}),[a.current]),[o,a,e,n]}},69945:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var i=n(96453),r=n(49666),o=n(2445);const a=(0,i.I4)((e=>(0,o.Y)(r.A,{...e})))`
  ${({theme:e,color:t,count:n})=>`\n    & > sup,\n    & > sup.antd5-badge-count {\n      ${void 0!==n?`background: ${t||e.colors.primary.base};`:""}\n    }\n  `}
`},99551:(e,t,n)=>{"use strict";n.d(t,{g:()=>d});var i=n(20249),r=n.n(i),o=n(15595),a=n(96453),s=n(2445);const l=a.I4.div`
  .ant-btn-group {
    button.ant-btn {
      background-color: ${({theme:e})=>e.colors.primary.dark1};
      border-color: transparent;
      color: ${({theme:e})=>e.colors.grayscale.light5};
      font-size: 12px;
      line-height: 13px;
      outline: none;
      &:first-of-type {
        border-radius: ${({theme:e})=>`${e.gridUnit}px 0 0 ${e.gridUnit}px`};
        margin: 0;
      }

      &:disabled {
        background-color: ${({theme:e})=>e.colors.grayscale.light2};
        color: ${({theme:e})=>e.colors.grayscale.base};
      }
      &:nth-of-type(2) {
        margin: 0;
        border-radius: ${({theme:e})=>`0 ${e.gridUnit}px ${e.gridUnit}px 0`};
        width: ${({theme:e})=>9*e.gridUnit}px;
        &:before,
        &:hover:before {
          border-left: 1px solid ${({theme:e})=>e.colors.grayscale.light5};
          content: '';
          display: block;
          height: ${({theme:e})=>8*e.gridUnit}px;
          margin: 0;
          position: absolute;
          width: ${({theme:e})=>.25*e.gridUnit}px;
        }

        &:disabled:before {
          border-left: 1px solid ${({theme:e})=>e.colors.grayscale.base};
        }
      }
    }
  }
`,d=({overlay:e,tooltip:t,placement:n,...i})=>{const a=(t={})=>(0,s.Y)(l,{children:(0,s.Y)(o.rM.Button,{overlay:e,...i,...t})});return t?a({buttonsRender:([e,i])=>[(0,s.Y)(o.$B,{placement:n,id:`${r()(t)}-tooltip`,title:t,children:e}),i]}):a()}},46022:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var i=n(96540),r=n(71519),o=n(46942),a=n.n(o),s=n(96453),l=n(95579),d=n(17437),c=n(19129),h=n(58132),u=n(2445);const p=(0,s.I4)(h.A)`
  vertical-align: middle;
`;function m({canEdit:e=!1,editing:t=!1,extraClasses:n,multiLine:o=!1,noPermitTooltip:s,onSaveTitle:h,showTooltip:m=!0,style:g,title:f="",defaultTitle:b="",placeholder:v="",certifiedBy:y,certificationDetails:x,url:C,...S}){const[w,D]=(0,i.useState)(t),[I,F]=(0,i.useState)(f),[$,R]=(0,i.useState)(f),[k,Y]=(0,i.useState)(null),T=(0,i.useRef)();function M(){if(!e||w)return;const t=T.current?T.current.getBoundingClientRect():null;D(!0),Y(t)}function A(){const t=I.trim();e&&(D(!1),t.length?($!==t&&R(t),f!==t&&h(t)):F($))}function E(e){" "===e.key&&e.stopPropagation(),"Enter"===e.key&&(e.preventDefault(),A())}function _(t){e&&F(t.target.value)}function P(e){"Enter"===e.key&&(e.preventDefault(),A())}let z;(0,i.useEffect)((()=>{f!==I&&(R(I),F(f))}),[f]),(0,i.useEffect)((()=>{if(w&&(T.current.focus(),T.current.setSelectionRange)){const{length:e}=T.current.value;T.current.setSelectionRange(e,e),T.current.scrollLeft=T.current.scrollWidth,T.current.scrollTop=T.current.scrollHeight}}),[w]),z=I,w||I||(z=b||f);const U=w&&k?{height:`${k.height}px`}:void 0;let O=o&&w?(0,u.Y)("textarea",{ref:T,value:z,className:f?void 0:"text-muted",onKeyDown:E,onChange:_,onBlur:A,onClick:M,onKeyPress:P,placeholder:v,style:U}):(0,u.Y)("input",{ref:T,type:w?"text":"button",value:z,className:f?void 0:"text-muted",onKeyDown:E,onChange:_,onBlur:A,onClick:M,onKeyPress:P,placeholder:v});return m&&!w&&(O=(0,u.Y)(c.m,{id:"title-tooltip",title:e?(0,l.t)("Click to edit"):s||(0,l.t)("You don't have the rights to alter this title."),children:O})),e||(O=C?(0,u.Y)(r.N_,{to:C,css:e=>d.AH`
          color: ${e.colors.grayscale.dark1};
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
          display: inline-block;
        `,children:z}):(0,u.Y)("span",{children:z})),(0,u.FD)("span",{className:a()("editable-title",n,e&&"editable-title--editable",w&&"editable-title--editing"),style:g,...S,children:[y&&(0,u.FD)(u.FK,{children:[(0,u.Y)(p,{certifiedBy:y,details:x,size:"xl"})," "]}),O]})}},41621:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var i=n(33149),r=n(96453),o=n(96540),a=n(62221),s=n(2445);const l=r.I4.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,d=({id:e,initialWidth:t,minWidth:n,maxWidth:r,enable:d,children:c})=>{const[h,u]=function(e,t){const n=(0,o.useRef)(),[i,r]=(0,o.useState)(t);return(0,o.useEffect)((()=>{var t;n.current=null!=(t=n.current)?t:(0,a.Gq)(a.Hh.CommonResizableSidebarWidths,{}),n.current[e]&&r(n.current[e])}),[e]),[i,function(t){r(t),(0,a.SO)(a.Hh.CommonResizableSidebarWidths,{...n.current,[e]:t})}]}(e,t);return(0,s.FD)(s.FK,{children:[(0,s.Y)(l,{children:(0,s.Y)(i.c,{enable:{right:d},handleClasses:{right:"sidebar-resizer"},size:{width:h,height:"100%"},minWidth:n,maxWidth:r,onResizeStop:(e,t,n,i)=>u(h+i.width)})}),c(h)]})}},85545:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Bh});var i=n(46942),r=n.n(i),o=n(96540),a=n(96453),s=n(17437),l=n(39472),d=n(27366),c=n(45991),h=n(95579),u=n(61225),p=n(49544),m=n(52720),g=n(48327),f=n(82960),b=n(80464),v=n(71086),y=n.n(v),x=n(38221),C=n.n(x),S=n(5556),w=n.n(S),D=n(70713),I=n(5373),F=n(50246),$=n(90868),R=n(15595),k=n(17444),Y=n(46920),T=n(12249),M=n(62221),A=n(49588),E=n(81151),_=n(4881),P=n(50068),z=n(66537),U=n(29307),O=n(36053),q=n(19129),N=n(78532),H=n(2445);const V=({children:e,tooltipText:t,...n})=>{const[i,r]=(0,o.useState)(!1),a=(0,o.useRef)(null);(0,o.useEffect)((()=>{r(!!a.current&&a.current.scrollWidth>a.current.clientWidth)}),[e]);const l=(0,H.Y)("div",{...n,ref:a,css:s.AH`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      `,children:e});return i?(0,H.Y)(q.m,{title:t||e,children:l}):l},L=({label:e,value:t,tooltipText:n})=>(0,H.FD)("div",{css:e=>s.AH`
      font-size: ${e.typography.sizes.s}px;
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: ${e.gridUnit}px;
      }
    `,children:[(0,H.Y)("span",{css:e=>s.AH`
        margin-right: ${4*e.gridUnit}px;
        color: ${e.colors.grayscale.base};
      `,children:e}),(0,H.Y)("span",{css:s.AH`
        min-width: 0;
      `,children:(0,H.Y)(V,{tooltipText:n,children:t})})]}),j=({showThumbnails:e,placeholderRef:t})=>(0,H.Y)("div",{ref:t,css:t=>s.AH`
      /* Display styles */
      border: 1px solid ${t.colors.primary.dark1};
      border-radius: ${t.gridUnit}px;
      color: ${t.colors.primary.dark1};
      font-size: ${t.typography.sizes.xs}px;
      letter-spacing: 0.02em;
      padding: ${t.gridUnit/2}px ${2*t.gridUnit}px;
      margin-left: ${4*t.gridUnit}px;
      pointer-events: none;

      /* Position styles */
      visibility: hidden;
      position: ${e?"absolute":"unset"};
      top: ${e?"72px":"unset"};
      left: ${e?"84px":"unset"};
    `,children:(0,h.t)("Added")}),W=({placeholder:e})=>(0,H.Y)("div",{css:t=>s.AH`
      /* Display styles */
      border: 1px solid ${t.colors.primary.dark1};
      border-radius: ${t.gridUnit}px;
      color: ${t.colors.primary.dark1};
      font-size: ${t.typography.sizes.xs}px;
      letter-spacing: 0.02em;
      padding: ${t.gridUnit/2}px ${2*t.gridUnit}px;
      margin-left: ${4*t.gridUnit}px;
      pointer-events: none;

      /* Position styles */
      display: ${e?"unset":"none"};
      position: absolute;
      top: ${e?`${e.offsetTop}px`:"unset"};
      left: ${e?e.offsetLeft-2+"px":"unset"};
    `,children:(0,h.t)("Added")}),B=({datasourceUrl:e,datasourceName:t="-",innerRef:n,isSelected:i=!1,lastModified:r,sliceName:a,style:l={},thumbnailUrl:c,visType:u})=>{const p=(0,d.G7)(d.TO.Thumbnails),[m,g]=(0,o.useState)(),{mountedPluginMetadata:f}=(0,O.Q)(),b=(0,o.useMemo)((()=>{var e;return(null==(e=f[u])?void 0:e.name)||(0,h.t)("Unknown type")}),[f,u]);return(0,H.FD)("div",{ref:n,style:l,children:[(0,H.Y)("div",{css:e=>s.AH`
          border: 1px solid ${e.colors.grayscale.light2};
          border-radius: ${e.gridUnit}px;
          background: ${e.colors.grayscale.light5};
          padding: ${4*e.gridUnit}px;
          margin: 0 ${3*e.gridUnit}px ${3*e.gridUnit}px
            ${3*e.gridUnit}px;
          position: relative;
          cursor: ${i?"not-allowed":"move"};
          white-space: nowrap;
          overflow: hidden;
          line-height: 1.3;
          color: ${e.colors.grayscale.dark1};

          &:hover {
            background: ${e.colors.grayscale.light4};
          }

          opacity: ${i?.4:"unset"};
        `,children:(0,H.FD)("div",{css:s.AH`
            display: flex;
          `,children:[p?(0,H.FD)("div",{css:s.AH`
                width: 146px;
                height: 82px;
                flex-shrink: 0;
                margin-right: 16px;
              `,children:[(0,H.Y)(U.A,{src:c||"",fallback:"/static/assets/images/chart-card-fallback.svg",position:"top"}),i&&p?(0,H.Y)(j,{placeholderRef:g,showThumbnails:p}):null]}):null,(0,H.FD)("div",{css:s.AH`
              flex-grow: 1;
              min-width: 0;
            `,children:[(0,H.FD)("div",{css:e=>s.AH`
                margin-bottom: ${2*e.gridUnit}px;
                font-weight: ${e.typography.weights.bold};
                display: flex;
                justify-content: space-between;
                align-items: center;
              `,children:[(0,H.Y)(V,{children:a}),i&&!p?(0,H.Y)(j,{placeholderRef:g}):null]}),(0,H.FD)("div",{css:s.AH`
                display: flex;
                flex-direction: column;
              `,children:[(0,H.Y)(L,{label:(0,h.t)("Viz type"),value:b}),(0,H.Y)(L,{label:(0,h.t)("Dataset"),value:e?(0,H.Y)(N.K,{to:e,children:t}):t,tooltipText:t}),(0,H.Y)(L,{label:(0,h.t)("Modified"),value:r})]})]})]})}),(0,H.Y)(W,{placeholder:m})]})};var K=n(89628);const G={position:"fixed",pointerEvents:"none",top:0,left:0,zIndex:101,width:344},Q={dragItem:w().shape({index:w().number.isRequired}),slices:w().arrayOf(_.VE),isDragging:w().bool.isRequired,currentOffset:w().shape({x:w().number.isRequired,y:w().number.isRequired})};function X({dragItem:e,slices:t,isDragging:n,currentOffset:i}){if(!(n&&i&&e&&t))return null;const r=t[e.index];return r&&e.parentType===A.cP&&e.type===A.oT?(0,H.Y)(B,{style:{...G,transform:`translate(${i.x}px, ${i.y}px)`},sliceName:r.slice_name,lastModified:r.changed_on_humanized,visType:r.viz_type,datasourceUrl:r.datasource_url,datasourceName:r.datasource_name}):null}X.propTypes=Q,X.defaultProps={currentOffset:null,dragItem:null,slices:null};const Z=(0,K.DragLayer)((e=>({dragItem:e.getItem(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()})))(X);var J,ee=n(7350),te=n.n(ee),ne=n(35043);let ie;const re=te()((function(e,t,n){var i,r,o;if(!n.mounted)return;const a=(0,ne.Ay)(t,n);!function(e){const t="SCROLL_TOP"===e&&!ie&&0!==document.documentElement.scrollTop,n=ie&&("SCROLL_TOP"!==e||0===document.documentElement.scrollTop);t?ie=setInterval((()=>{if(0===document.documentElement.scrollTop)return clearInterval(ie),void(ie=null);let e=document.documentElement.scrollTop-120;e<0&&(e=0),window.scroll({top:e,behavior:"smooth"})}),50):n&&(clearInterval(ie),ie=null)}((null==n||null==(i=n.props)||null==(r=i.component)?void 0:r.type)===A.tq?"SCROLL_TOP":null),a?(null==n||null==(o=n.props)||o.onHover(),n.setState((()=>({dropIndicator:a})))):n.setState((()=>({dropIndicator:null})))}),100),oe="DRAG_DROPPABLE",ae=[oe,{canDrag:e=>!e.disableDragDrop,beginDrag(e){const{component:t,index:n,parentComponent:i={}}=e;return{type:t.type,id:t.id,meta:t.meta,index:n,parentId:i.id,parentType:i.type}}},function(e,t){var n,i;return{dragSourceRef:e.dragSource(),dragPreviewRef:e.dragPreview(),isDragging:t.isDragging(),dragComponentType:null==(n=t.getItem())?void 0:n.type,dragComponentId:null==(i=t.getItem())?void 0:i.id}}],se=[oe,{canDrop:e=>!e.disableDragDrop,hover(e,t,n){n&&n.mounted&&re(e,t,n)},drop(e,t,n){const i=t.getDropResult();if((!i||!i.destination)&&n.mounted)return function(e,t,n){if(!n.mounted)return;n.setState((()=>({dropIndicator:null})));const i=(0,ne.Ay)(t,n);if(!i||i===ne.aN)return;const{parentComponent:r,component:o,index:a,onDrop:s,dropToChild:l}=n.props,d=t.getItem(),c={source:{id:d.parentId,type:d.parentType,index:d.index},dragging:{id:d.id,type:d.type,meta:d.meta},position:i};if("function"==typeof l?l(d):l)c.destination={id:o.id,type:o.type,index:o.children.length};else if(r){const e=r&&d.parentId===r.id&&d.index<a&&d.type!==o.type?a-1:a;c.destination={id:r.id,type:r.type,index:e}}else c.destination={id:o.id,type:o.type,index:a};return s(c),(0,ne.Vl)(),c}(0,t,n)}},function(e,t){return{droppableRef:e.dropTarget(),isDraggingOver:t.isOver(),isDraggingOverShallow:t.isOver({shallow:!0})}}],le={children:w().func,className:w().string,component:_.nB,parentComponent:_.nB,depth:w().number.isRequired,disableDragDrop:w().bool,dropToChild:w().bool,orientation:w().oneOf(["row","column"]),index:w().number.isRequired,style:w().object,onDrop:w().func,onHover:w().func,onDropIndicatorChange:w().func,onDragTab:w().func,editMode:w().bool,useEmptyDragPreview:w().bool,isDragging:w().bool,isDraggingOver:w().bool,isDraggingOverShallow:w().bool,dragComponentType:w().string,dragComponentId:w().oneOfType([w().string,w().number]),droppableRef:w().func,dragSourceRef:w().func,dragPreviewRef:w().func},de={className:null,style:null,parentComponent:null,disableDragDrop:!1,dropToChild:!1,children(){},onDrop(){},onHover(){},onDropIndicatorChange(){},onDragTab(){},orientation:"row",useEmptyDragPreview:!1,isDragging:!1,isDraggingOver:!1,isDraggingOverShallow:!1,droppableRef(){},dragSourceRef(){},dragPreviewRef(){}},ce=a.I4.div`
  ${({theme:e})=>s.AH`
    position: relative;
    /*
      Next line is a workaround for a bug in react-dnd where the drag
      preview expands outside of the bounds of the drag source card, see:
      https://github.com/react-dnd/react-dnd/issues/832#issuecomment-442071628
    */
    &.dragdroppable--edit-mode {
      transform: translate3d(0, 0, 0);
    }

    &.dragdroppable--dragging {
      opacity: 0.2;
    }

    &.dragdroppable-row {
      width: 100%;
    }

    &.dragdroppable-column .resizable-container span div {
      z-index: 10;
    }

    & {
      .drop-indicator {
        display: block;
        background-color: ${e.colors.primary.base};
        position: absolute;
        z-index: 10;
        opacity: 0.3;
        width: 100%;
        height: 100%;
        &.drop-indicator--forbidden {
          background-color: ${e.colors.error.light1};
        }
      }
    }
  `};
`;class he extends o.PureComponent{constructor(e){super(e),this.state={dropIndicator:null},this.setRef=this.setRef.bind(this)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}componentDidUpdate(e,t){const{onDropIndicatorChange:n,isDraggingOver:i,component:r,index:o,dragComponentId:a,onDragTab:s}=this.props,{dropIndicator:l}=this.state,d=r.type===A.B8,c=l!==t.dropIndicator||i!==e.isDraggingOver||o!==e.index;n&&d&&c&&n({dropIndicator:l,isDraggingOver:i,index:o}),a!==e.dragComponentId&&setTimeout((()=>{s(a)}))}setRef(e){var t,n;this.ref=e,this.props.useEmptyDragPreview?this.props.dragPreviewRef((J||((J=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),J),{captureDraggingState:!0}):this.props.dragPreviewRef(e),null==(t=(n=this.props).droppableRef)||t.call(n,e)}render(){const{children:e,className:t,orientation:n,dragSourceRef:i,disableDragDrop:o,isDragging:a,isDraggingOver:s,style:l,editMode:d,component:c,dragComponentType:h}=this.props,{dropIndicator:u}=this.state,p=s&&u&&!o?{className:r()("drop-indicator",u===ne.aN&&"drop-indicator--forbidden")}:null,m=c.type===A.B8&&h===A.B8,g=d?{dragSourceRef:i,dropIndicatorProps:p,draggingTabOnTab:m}:{};return(0,H.Y)(ce,{style:l,ref:this.setRef,className:r()("dragdroppable",d&&"dragdroppable--edit-mode","row"===n&&"dragdroppable-row","column"===n&&"dragdroppable-column",a&&"dragdroppable--dragging",t),children:e(g)})}}he.propTypes=le,he.defaultProps=de;const ue=(0,K.DragSource)(...ae)(he),pe=(0,K.DropTarget)(...se)(he),me=(0,K.DragSource)(...ae)((0,K.DropTarget)(...se)(he)),ge={fetchSlices:w().func.isRequired,updateSlices:w().func.isRequired,isLoading:w().bool.isRequired,slices:w().objectOf(_.VE).isRequired,lastUpdated:w().number.isRequired,errorMessage:w().string,userId:w().number.isRequired,selectedSliceIds:w().arrayOf(w().number),editMode:w().bool,dashboardId:w().number},fe=["slice_name","viz_type","datasource_name"],be={slice_name:(0,h.t)("name"),viz_type:(0,h.t)("viz type"),datasource_name:(0,h.t)("dataset"),changed_on:(0,h.t)("recent")},ve=a.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row;\n    padding:\n      ${4*e.gridUnit}px\n      ${3*e.gridUnit}px\n      ${4*e.gridUnit}px\n      ${3*e.gridUnit}px;\n  `}
`,ye=(0,a.I4)(R.l6)`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  min-width: 150px;
`,xe=a.I4.div`
  ${({theme:e})=>s.AH`
    display: flex;
    justify-content: flex-end;
    padding-right: ${2*e.gridUnit}px;
  `}
`,Ce=(0,a.I4)(Y.A)`
  ${({theme:e})=>s.AH`
    height: auto;
    & > .anticon + span {
      margin-left: 0;
    }
    & > [role='img']:first-of-type {
      margin-right: ${e.gridUnit}px;
      padding-bottom: 1px;
      line-height: 0;
    }
  `}
`,Se=a.I4.div`
  flex-grow: 1;
  min-height: 0;
`;class we extends o.Component{static sortByComparator(e){const t="changed_on"===e?-1:1;return(n,i)=>n[e]<i[e]?-1*t:n[e]>i[e]?1*t:0}constructor(e){super(e),this.handleChange=C()((e=>{this.searchUpdated(e),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),e,this.state.sortBy)}),300),this.state={filteredSlices:[],searchTerm:"",sortBy:"changed_on",selectedSliceIdsSet:new Set(e.selectedSliceIds),showOnlyMyCharts:(0,M.Gq)(M.Hh.DashboardEditorShowOnlyMyCharts,!0)},this.rowRenderer=this.rowRenderer.bind(this),this.searchUpdated=this.searchUpdated.bind(this),this.handleSelect=this.handleSelect.bind(this),this.userIdForFetch=this.userIdForFetch.bind(this),this.onShowOnlyMyCharts=this.onShowOnlyMyCharts.bind(this)}userIdForFetch(){return this.state.showOnlyMyCharts?this.props.userId:void 0}componentDidMount(){this.slicesRequest=this.props.fetchSlices(this.userIdForFetch())}UNSAFE_componentWillReceiveProps(e){const t={};e.lastUpdated!==this.props.lastUpdated&&(t.filteredSlices=this.getFilteredSortedSlices(e.slices,this.state.searchTerm,this.state.sortBy,this.state.showOnlyMyCharts)),e.selectedSliceIds!==this.props.selectedSliceIds&&(t.selectedSliceIdsSet=new Set(e.selectedSliceIds)),Object.keys(t).length&&this.setState(t)}componentWillUnmount(){const e=y()(this.props.slices,(e=>this.state.selectedSliceIdsSet.has(e.slice_id)));this.props.updateSlices(e),this.slicesRequest&&this.slicesRequest.abort&&this.slicesRequest.abort()}getFilteredSortedSlices(e,t,n,i){return Object.values(e).filter((e=>!i||e.owners&&e.owners.find((e=>e.id===this.props.userId))||e.created_by&&e.created_by.id===this.props.userId)).filter((0,F.HI)(t,fe)).sort(we.sortByComparator(n))}searchUpdated(e){this.setState((t=>({searchTerm:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,e,t.sortBy,t.showOnlyMyCharts)})))}handleSelect(e){this.setState((t=>({sortBy:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,e,t.showOnlyMyCharts)}))),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),this.state.searchTerm,e)}rowRenderer({key:e,index:t,style:n}){const{filteredSlices:i,selectedSliceIdsSet:r}=this.state,o=i[t],a=r.has(o.slice_id),s=A.oT,l=E.Ie,d={chartId:o.slice_id,sliceName:o.slice_name};return(0,H.Y)(me,{component:{type:s,id:l,meta:d},parentComponent:{id:E.k0,type:A.cP},index:t,depth:0,disableDragDrop:a,editMode:this.props.editMode,useEmptyDragPreview:!0,style:{},children:({dragSourceRef:e})=>(0,H.Y)(B,{innerRef:e,style:n,sliceName:o.slice_name,lastModified:o.changed_on_humanized,visType:o.viz_type,datasourceUrl:o.datasource_url,datasourceName:o.datasource_name,thumbnailUrl:o.thumbnail_url,isSelected:a})},e)}onShowOnlyMyCharts(e){e||(this.slicesRequest=this.props.fetchSlices(void 0,this.state.searchTerm,this.state.sortBy)),this.setState((t=>({showOnlyMyCharts:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,t.sortBy,e)}))),(0,M.SO)(M.Hh.DashboardEditorShowOnlyMyCharts,e)}render(){return(0,H.FD)("div",{css:s.AH`
          height: 100%;
          display: flex;
          flex-direction: column;
        `,children:[(0,H.Y)(xe,{children:(0,H.FD)(Ce,{buttonStyle:"link",buttonSize:"xsmall",onClick:()=>window.open(`/chart/add?dashboard_id=${this.props.dashboardId}`,"_blank","noopener noreferrer"),children:[(0,H.Y)(T.A.PlusSmall,{}),(0,h.t)("Create new chart")]})}),(0,H.FD)(ve,{children:[(0,H.Y)($.pd,{placeholder:this.state.showOnlyMyCharts?(0,h.t)("Filter your charts"):(0,h.t)("Filter charts"),className:"search-input",onChange:e=>this.handleChange(e.target.value)}),(0,H.Y)(ye,{id:"slice-adder-sortby",value:this.state.sortBy,onChange:this.handleSelect,options:Object.entries(be).map((([e,t])=>({label:(0,h.t)("Sort by %s",t),value:e}))),placeholder:(0,h.t)("Sort by")})]}),(0,H.FD)("div",{css:e=>s.AH`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: ${e.gridUnit}px;
            padding: 0 ${3*e.gridUnit}px ${4*e.gridUnit}px
              ${3*e.gridUnit}px;
          `,children:[(0,H.Y)(P.Ay,{onChange:this.onShowOnlyMyCharts,checked:this.state.showOnlyMyCharts}),(0,h.t)("Show only my charts"),(0,H.Y)(z.W,{placement:"top",tooltip:(0,h.t)("You can choose to display all charts that you have access to or only the ones you own.\n              Your filter selection will be saved and remain active until you choose to change it.")})]}),this.props.isLoading&&(0,H.Y)(k.A,{}),!this.props.isLoading&&this.state.filteredSlices.length>0&&(0,H.Y)(Se,{children:(0,H.Y)(D.Ay,{children:({height:e,width:t})=>(0,H.Y)(I.Y1,{width:t,height:e,itemCount:this.state.filteredSlices.length,itemSize:128,searchTerm:this.state.searchTerm,sortBy:this.state.sortBy,selectedSliceIds:this.props.selectedSliceIds,children:this.rowRenderer})})}),this.props.errorMessage&&(0,H.Y)("div",{css:s.AH`
              padding: 16px;
            `,children:this.props.errorMessage}),(0,H.Y)(Z,{slices:this.state.filteredSlices})]})}}we.propTypes=ge,we.defaultProps={selectedSliceIds:[],editMode:!1,errorMessage:""};const De=we,Ie=(0,u.Ng)((function({sliceEntities:e,dashboardInfo:t,dashboardState:n},i){return{height:i.height,userId:+t.userId,dashboardId:t.id,selectedSliceIds:n.sliceIds,slices:e.slices,isLoading:e.isLoading,errorMessage:e.errorMessage,lastUpdated:e.lastUpdated,editMode:n.editMode}}),(function(e){return(0,f.zH)({fetchSlices:b.sH,updateSlices:b.Nv},e)}))(De),Fe=({registryKeys:e,registry:t})=>()=>e.map((e=>t[e])),$e=({registryKeys:e,registry:t})=>n=>{e=e.filter((e=>e!==n)),delete t[n]},Re=({registry:e})=>t=>e[t],ke=((e=[])=>{const t={registry:{},registryKeys:[]},n=(({registryKeys:e,registry:t})=>(n,i)=>{e.push(n),t[n]={key:n,metadata:i.metadata,Component:(0,o.lazy)(i.loadComponent)}})(t);return e.forEach((({key:e,item:t})=>{n(e,t)})),{set:n,get:Re(t),delete:$e(t),getAll:Fe(t)}})([]),Ye={id:w().string.isRequired,type:w().string.isRequired,label:w().string.isRequired,className:w().string},Te=a.I4.div`
  ${({theme:e})=>s.AH`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: ${4*e.gridUnit}px;
    background: ${e.colors.grayscale.light5};
    cursor: move;

    &:not(.static):hover {
      background: ${e.colors.grayscale.light4};
    }
  `}
`,Me=a.I4.div`
  ${({theme:e})=>s.AH`
    position: relative;
    background: ${e.colors.grayscale.light4};
    width: ${10*e.gridUnit}px;
    height: ${10*e.gridUnit}px;
    margin-right: ${4*e.gridUnit}px;
    border: 1px solid ${e.colors.grayscale.light5};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e.colors.text.label};
    font-size: ${e.typography.sizes.xxl}px;

    &.fa-window-restore {
      font-size: ${e.typography.sizes.l}px;
    }

    &.fa-area-chart {
      font-size: ${e.typography.sizes.xl}px;
    }

    &.divider-placeholder:after {
      content: '';
      height: 2px;
      width: 100%;
      background-color: ${e.colors.grayscale.light2};
    }
  `}
`;class Ae extends o.PureComponent{render(){const{label:e,id:t,type:n,className:i,meta:o}=this.props;return(0,H.Y)(me,{component:{type:n,id:t,meta:o},parentComponent:{id:E.k0,type:A.cP},index:0,depth:0,editMode:!0,children:({dragSourceRef:t})=>(0,H.FD)(Te,{ref:t,children:[(0,H.Y)(Me,{className:r()("new-component-placeholder",i)}),e]})})}}function Ee(){return(0,H.Y)(Ae,{id:E.wN,type:A.QP,label:(0,h.t)("Column"),className:"fa fa-long-arrow-down"})}function _e(){return(0,H.Y)(Ae,{id:E.fB,type:A.n6,label:(0,h.t)("Divider"),className:"divider-placeholder"})}function Pe(){return(0,H.Y)(Ae,{id:E.LH,type:A.PP,label:(0,h.t)("Header"),className:"fa fa-header"})}function ze(){return(0,H.Y)(Ae,{id:E.KD,type:A._8,label:(0,h.t)("Row"),className:"fa fa-long-arrow-right"})}function Ue(){return(0,H.Y)(Ae,{id:E.IS,type:A.wc,label:(0,h.t)("Tabs"),className:"fa fa-window-restore"})}function Oe(){return(0,H.Y)(Ae,{id:E.RY,type:A.xY,label:(0,h.t)("Text / Markdown"),className:"fa fa-font"})}Ae.propTypes=Ye,Ae.defaultProps={className:null};const qe=({componentKey:e,metadata:t})=>(0,H.Y)(Ae,{id:E.nS,type:A.rG,label:t.name,meta:{metadata:t,componentKey:e},className:`fa fa-${t.iconName}`}),Ne=({topOffset:e=0})=>(0,H.Y)("div",{css:s.AH`
      position: sticky;
      right: 0;
      top: ${e}px;
      height: calc(100vh - ${e}px);
      width: ${374}px;
    `,children:(0,H.Y)("div",{css:e=>s.AH`
        position: absolute;
        height: 100%;
        width: ${374}px;
        box-shadow: -4px 0 4px 0 ${(0,m.rgba)(e.colors.grayscale.dark2,.1)};
        background-color: ${e.colors.grayscale.light5};
      `,children:(0,H.FD)(g.Ay,{id:"tabs",css:e=>s.AH`
          line-height: inherit;
          margin-top: ${2*e.gridUnit}px;
          height: 100%;

          & .ant-tabs-content-holder {
            height: 100%;
            & .ant-tabs-content {
              height: 100%;
            }
          }
        `,children:[(0,H.Y)(g.Ay.TabPane,{tab:(0,h.t)("Charts"),css:s.AH`
            height: 100%;
          `,children:(0,H.Y)(Ie,{})},1),(0,H.FD)(g.Ay.TabPane,{tab:(0,h.t)("Layout elements"),children:[(0,H.Y)(Ue,{}),(0,H.Y)(ze,{}),(0,H.Y)(Ee,{}),(0,H.Y)(Pe,{}),(0,H.Y)(Oe,{}),(0,H.Y)(_e,{}),ke.getAll().map((({key:e,metadata:t})=>(0,H.Y)(qe,{metadata:t,componentKey:e})))]},2)]})})});var He=n(95004),Ve=n(95093),Le=n.n(Ve),je=n(72391),We=n(35700),Be=n(84666),Ke=n(12066),Ge=n(62193),Qe=n.n(Ge),Xe=n(6749),Ze=n(27023),Je=n(73135),et=n(5362),tt=n(32132),nt=n(10504);const it=e=>{const{copyMenuItemTitle:t,emailMenuItemTitle:n,emailSubject:i,emailBody:r,addDangerToast:o,addSuccessToast:a,dashboardId:s,dashboardComponentId:l,copyMenuItemRef:d,shareByEmailMenuItemRef:c,selectedKeys:p,...m}=e,{dataMask:g,activeTabs:f}=(0,u.d4)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs})));async function b(){return(0,tt.oq)({dashboardId:s,dataMask:g,activeTabs:f,anchor:l})}return(0,H.FD)(Xe.W1,{selectable:!1,selectedKeys:p,onClick:e=>e.key===nt.IG.CopyLink?async function(){try{await(0,Je.A)(b),a((0,h.t)("Copied to clipboard!"))}catch(e){et.A.error(e),o((0,h.t)("Sorry, something went wrong. Try again later."))}}():async function(){try{const e=encodeURIComponent(`${r}${await b()}`),t=encodeURIComponent(i);window.location.href=`mailto:?Subject=${t}%20&Body=${e}`}catch(e){et.A.error(e),o((0,h.t)("Sorry, something went wrong. Try again later."))}}(),children:[(0,H.Y)(Xe.W1.Item,{ref:d,...m,children:(0,H.Y)("div",{role:"button",tabIndex:0,children:t})},nt.IG.CopyLink),(0,H.Y)(Xe.W1.Item,{ref:c,...m,children:(0,H.Y)("div",{role:"button",tabIndex:0,children:n})},nt.IG.ShareByEmail)]})};var rt,ot=n(68090),at=n.n(ot),st=n(35742),lt=n(5261);function dt({text:e,logEvent:t,dashboardId:n,format:i,...r}){const o=(0,u.d4)((e=>e.dashboardState.activeTabs||void 0)),a=(0,u.d4)((e=>at()(e.dashboardState.directPathToChild)||void 0)),s=(0,u.d4)((e=>e.dataMask||void 0)),{addDangerToast:l,addSuccessToast:d,addInfoToast:c}=(0,lt.Yf)();return(0,H.Y)(Xe.W1.Item,{...r,children:(0,H.Y)("div",{onClick:()=>{let e=0;const r=t=>{(e=>st.A.get({endpoint:`/api/v1/dashboard/${n}/screenshot/${e}/?download_format=${i}`,headers:{Accept:"application/pdf, image/png"},parseMethod:"raw"}).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`screenshot.${i}`,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(t)})).catch((e=>{if(404===e.status)throw new Error("Image not ready")})))(t).then((()=>{d((0,h.t)("The screenshot is now being downloaded."))})).catch((n=>{e<30?(e+=1,c((0,h.t)("The screenshot is being generated. Please, do not leave the page."),{noDuplicate:!0}),setTimeout((()=>r(t)),3e3)):(l((0,h.t)("The screenshot could not be downloaded. Please, try again later.")),et.A.error(n))}))};st.A.post({endpoint:`/api/v1/dashboard/${n}/cache_dashboard_screenshot/`,jsonPayload:{anchor:a,activeTabs:o,dataMask:s}}).then((({json:e})=>{const t=null==e?void 0:e.cache_key;if(!t)throw new Error("No image URL in response");c((0,h.t)("The screenshot is being generated. Please, do not leave the page.")),r(t)})).catch((e=>{et.A.error(e),l((0,h.t)("The screenshot could not be downloaded. Please, try again later."))})).finally((()=>{null==t||t(i===rt.PNG?We.cm:We.PN)}))},role:"button",tabIndex:0,children:e})},i)}!function(e){e.PDF="pdf",e.PNG="png"}(rt||(rt={}));const ct=e=>{const{pdfMenuItemTitle:t,imageMenuItemTitle:n,logEvent:i,dashboardId:r,...o}=e;return(0,H.FD)(Xe.W1,{selectable:!1,children:[(0,H.Y)(dt,{text:t,dashboardId:r,logEvent:i,format:rt.PDF,...o}),(0,H.Y)(dt,{text:n,dashboardId:r,logEvent:i,format:rt.PNG,...o})]})};var ht=n(18301),ut=n(24976);const pt=a.I4.div`
  ${({theme:e})=>`\n    .css-editor-header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      margin-bottom: ${2*e.gridUnit}px;\n\n      h5 {\n        margin-top: ${e.gridUnit}px;\n      }\n    }\n    .css-editor {\n      border: 1px solid ${e.colors.grayscale.light1};\n    }\n  `}
`;class mt extends o.PureComponent{constructor(e){super(e),this.state={css:e.initialCss},this.changeCss=this.changeCss.bind(this),this.changeCssTemplate=this.changeCssTemplate.bind(this)}componentDidMount(){ut.rN.preload(),st.A.get({endpoint:"/csstemplateasyncmodelview/api/read"}).then((({json:e})=>{const t=e.result.map((e=>({value:e.template_name,css:e.css,label:e.template_name})));this.setState({templates:t})})).catch((()=>{this.props.addDangerToast((0,h.t)("An error occurred while fetching available CSS templates"))}))}changeCss(e){this.setState({css:e},(()=>{this.props.onChange(e)}))}changeCssTemplate(e){const t=String(e.key);this.changeCss(t)}renderTemplateSelector(){if(this.state.templates){const e=(0,H.Y)(Xe.W1,{onClick:this.changeCssTemplate,children:this.state.templates.map((e=>(0,H.Y)(Xe.W1.Item,{children:e.label},e.css)))});return(0,H.Y)(R.rM,{overlay:e,placement:"bottomRight",children:(0,H.Y)(Y.A,{children:(0,h.t)("Load a CSS template")})})}return null}render(){return(0,H.Y)(ht.A,{triggerNode:this.props.triggerNode,modalTitle:(0,h.t)("CSS"),modalBody:(0,H.FD)(pt,{children:[(0,H.FD)("div",{className:"css-editor-header",children:[(0,H.Y)("h5",{children:(0,h.t)("Live CSS editor")}),this.renderTemplateSelector()]}),(0,H.Y)(ut.rN,{className:"css-editor",minLines:12,maxLines:30,onChange:this.changeCss,height:"200px",width:"100%",editorProps:{$blockScrolling:!0},enableLiveAutocompletion:!0,value:this.state.css||""})]})})}}mt.defaultProps={initialCss:"",onChange:()=>{}};const gt=mt;var ft=n(28990),bt=n(25946),vt=n(40563),yt=n(3175);const xt=(0,a.I4)(ht.A)`
  .ant-modal-body {
    overflow: visible;
  }
`,Ct=a.I4.div`
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,St=a.I4.div`
  display: flex;
  margin-top: ${({theme:e})=>3*e.gridUnit}px;
`,wt=a.I4.div`
  width: 30%;
  margin: auto;
`;class Dt extends o.PureComponent{constructor(e){super(e),this.modalRef=void 0,this.modalRef=(0,o.createRef)(),this.state={refreshFrequency:e.refreshFrequency,custom_hour:0,custom_min:0,custom_sec:0,custom_block:!1},this.handleFrequencyChange=this.handleFrequencyChange.bind(this),this.onSave=this.onSave.bind(this),this.onCancel=this.onCancel.bind(this)}onSave(){var e,t;this.props.onChange(this.state.refreshFrequency,this.props.editMode),null==(e=this.modalRef)||null==(t=e.current)||t.close(),this.props.addSuccessToast((0,h.t)("Refresh interval saved"))}onCancel(){var e,t;this.setState({refreshFrequency:this.props.refreshFrequency}),null==(e=this.modalRef)||null==(t=e.current)||t.close()}handleFrequencyChange(e){const{refreshIntervalOptions:t}=this.props;this.setState({refreshFrequency:e||t[0][0]}),this.setState({custom_block:-1===e}),-1===e&&this.setState({custom_hour:0,custom_min:0,custom_sec:0})}onSaveValue(e){var t,n;this.props.onChange(e,this.props.editMode),null==(t=this.modalRef)||null==(n=t.current)||n.close(),this.props.addSuccessToast((0,h.t)("Refresh interval saved"))}createIntervalOptions(e){const t=[];return t.push({value:-1,label:(0,h.t)("Custom interval")}),t.push(...e.map((e=>({value:e[0],label:(0,h.t)(e[1])})))),t}min_sec_options(e){return Array.from({length:60},((t,n)=>({value:n,label:`${n} ${e}`})))}refresh_custom_val(e,t,n,i){if(!0===e){const e=t,r=n,o=i;(e<0||r<0||o<0||r>=60||o>=60)&&this.props.addSuccessToast((0,h.t)("Put positive values and valid minute and second value less than 60"));const a=60*e*60+60*r+o;if(0===a)return void this.props.addSuccessToast((0,h.t)("Put some positive value greater than 0"));this.handleFrequencyChange(a),this.onSaveValue(a)}else this.onSave()}render(){const{refreshLimit:e=0,refreshWarning:t,editMode:n,refreshIntervalOptions:i}=this.props,{refreshFrequency:r=0,custom_hour:o=0,custom_min:a=0,custom_sec:s=0,custom_block:l=!1}=this.state,d=!!r&&!!t&&r<e;return(0,H.Y)(xt,{ref:this.modalRef,triggerNode:this.props.triggerNode,modalTitle:(0,h.t)("Refresh interval"),modalBody:(0,H.FD)("div",{children:[(0,H.FD)("div",{id:"refresh_from_dropdown",children:[(0,H.Y)(vt.lR,{children:(0,H.Y)("b",{children:(0,h.t)("Refresh frequency")})}),(0,H.Y)(ft.A,{ariaLabel:(0,h.t)("Refresh interval"),options:this.createIntervalOptions(i),value:r,onChange:this.handleFrequencyChange,sortComparator:(0,yt.qw)("value")})]}),l&&(0,H.FD)(St,{children:[(0,H.FD)(wt,{children:[(0,H.Y)(vt.lR,{children:(0,H.Y)("b",{children:(0,h.t)("HOUR")})})," ",(0,H.Y)("br",{}),(0,H.Y)($.pd,{type:"number",min:"0",className:"form-control input-sm",placeholder:(0,h.t)("Type a number"),onChange:e=>{this.setState({custom_hour:Number(e.target.value)})},value:o})]}),(0,H.FD)(wt,{children:[(0,H.Y)(vt.lR,{children:(0,H.Y)("b",{children:(0,h.t)("MINUTE")})})," ",(0,H.Y)("br",{}),(0,H.Y)(ft.A,{ariaLabel:(0,h.t)("Minutes value"),options:this.min_sec_options("minutes"),value:a,onChange:e=>{this.setState({custom_min:e})},sortComparator:(0,yt.qw)("value")})]}),(0,H.FD)(wt,{children:[(0,H.Y)(vt.lR,{children:(0,H.Y)("b",{children:(0,h.t)("SECOND")})})," ",(0,H.Y)("br",{}),(0,H.Y)(ft.A,{ariaLabel:(0,h.t)("Seconds value"),options:this.min_sec_options("seconds"),value:s,onChange:e=>{this.setState({custom_sec:e})},sortComparator:(0,yt.qw)("value")})]})]}),d&&(0,H.Y)(Ct,{children:(0,H.Y)(bt.A,{type:"warning",message:(0,H.FD)(H.FK,{children:[(0,H.Y)("div",{children:t}),(0,H.Y)("br",{}),(0,H.Y)("strong",{children:(0,h.t)("Are you sure you want to proceed?")})]})})})]}),modalFooter:(0,H.FD)(H.FK,{children:[(0,H.Y)(Y.A,{onClick:this.onCancel,buttonSize:"small",children:(0,h.t)("Cancel")}),(0,H.Y)(Y.A,{buttonStyle:"primary",buttonSize:"small",onClick:()=>this.refresh_custom_val(l,o,a,s),children:n?(0,h.t)("Save"):(0,h.t)("Save for this session")})]})})}}Dt.defaultProps={refreshLimit:0,refreshWarning:null};const It=Dt;var Ft=n(78697);const $t={saveType:E.LA,colorNamespace:void 0,colorScheme:void 0,shouldPersistRefreshFrequency:!1};class Rt extends o.PureComponent{constructor(e){super(e),this.modal=void 0,this.onSave=void 0,this.state={saveType:e.saveType,newDashName:`${e.dashboardTitle} ${(0,h.t)("[copy]")}`,duplicateSlices:!1},this.handleSaveTypeChange=this.handleSaveTypeChange.bind(this),this.handleNameChange=this.handleNameChange.bind(this),this.saveDashboard=this.saveDashboard.bind(this),this.toggleDuplicateSlices=this.toggleDuplicateSlices.bind(this),this.onSave=this.props.onSave.bind(this),this.modal=(0,o.createRef)()}toggleDuplicateSlices(){this.setState((e=>({duplicateSlices:!e.duplicateSlices})))}handleSaveTypeChange(e){this.setState({saveType:e.target.value})}handleNameChange(e){this.setState({newDashName:e,saveType:E.gb})}saveDashboard(){var e;const{saveType:t,newDashName:n}=this.state,{dashboardTitle:i,dashboardInfo:r,layout:o,customCss:a,dashboardId:s,refreshFrequency:l,shouldPersistRefreshFrequency:d,lastModifiedTime:c}=this.props,u=d?l:null==(e=r.metadata)?void 0:e.refresh_frequency,p={certified_by:r.certified_by,certification_details:r.certification_details,css:a,dashboard_title:t===E.gb?n:i,duplicate_slices:this.state.duplicateSlices,last_modified_time:c,owners:r.owners,roles:r.roles,metadata:{...null==r?void 0:r.metadata,positions:o,refresh_frequency:u}};var m,g;t!==E.gb||n?(this.onSave(p,s,t).then((e=>{var n,i;t===E.gb&&null!=(n=e.json)&&null!=(i=n.result)&&i.id&&(window.location.href=`/superset/dashboard/${e.json.result.id}/`)})),null==(m=this.modal)||null==(g=m.current)||null==g.close||g.close()):this.props.addDangerToast((0,h.t)("You must pick a name for the new dashboard"))}render(){return(0,H.Y)(ht.A,{ref:this.modal,triggerNode:this.props.triggerNode,modalTitle:(0,h.t)("Save dashboard"),modalBody:(0,H.FD)("div",{children:[(0,H.Y)(Ft.s,{value:E.LA,onChange:this.handleSaveTypeChange,checked:this.state.saveType===E.LA,disabled:!this.props.canOverwrite,children:(0,h.t)("Overwrite Dashboard [%s]",this.props.dashboardTitle)}),(0,H.Y)("hr",{}),(0,H.Y)(Ft.s,{value:E.gb,onChange:this.handleSaveTypeChange,checked:this.state.saveType===E.gb,children:(0,h.t)("Save as:")}),(0,H.Y)($.pd,{type:"text",placeholder:(0,h.t)("[dashboard name]"),value:this.state.newDashName,onFocus:e=>this.handleNameChange(e.target.value),onChange:e=>this.handleNameChange(e.target.value)}),(0,H.FD)("div",{className:"m-l-25 m-t-5",children:[(0,H.Y)(P.Ay,{checked:this.state.duplicateSlices,onChange:()=>this.toggleDuplicateSlices()}),(0,H.Y)("span",{className:"m-l-5",children:(0,h.t)("also copy (duplicate) charts")})]})]}),modalFooter:(0,H.Y)("div",{children:(0,H.Y)(Y.A,{buttonStyle:"primary",onClick:this.saveDashboard,children:(0,h.t)("Save")})})})}}Rt.defaultProps=$t;const kt=Rt;var Yt=n(32850),Tt=n(5007),Mt=n(888),At=n(36878);function Et({pathname:e,filters:t={},hash:n="",standalone:i}){const r=new URLSearchParams(window.location.search);Qe()(t)||r.set(Ze.vX.preselectFilters.name,JSON.stringify((0,At.A)(t))),i?r.set(Ze.vX.standalone.name,i.toString()):r.delete(Ze.vX.standalone.name);const o=(0,tt.P3)(Ze.vX.nativeFiltersKey);o&&r.set(Ze.vX.nativeFiltersKey.name,o);const a=n?`#${n}`:"";return`${e}?${r.toString()}${a}`}var _t=n(68921);const Pt={addSuccessToast:w().func.isRequired,addDangerToast:w().func.isRequired,dashboardInfo:w().object.isRequired,dashboardId:w().number,dashboardTitle:w().string,dataMask:w().object.isRequired,customCss:w().string,colorNamespace:w().string,colorScheme:w().string,directPathToChild:w().array,onChange:w().func.isRequired,updateCss:w().func.isRequired,forceRefreshAllCharts:w().func.isRequired,refreshFrequency:w().number,shouldPersistRefreshFrequency:w().bool.isRequired,setRefreshFrequency:w().func.isRequired,startPeriodicRender:w().func.isRequired,editMode:w().bool.isRequired,userCanEdit:w().bool,userCanShare:w().bool,userCanSave:w().bool,userCanCurate:w().bool.isRequired,isLoading:w().bool.isRequired,layout:w().object.isRequired,expandedSlices:w().object,onSave:w().func.isRequired,showPropertiesModal:w().func.isRequired,manageEmbedded:w().func.isRequired,logEvent:w().func,refreshLimit:w().number,refreshWarning:w().string,lastModifiedTime:w().number.isRequired};class zt extends o.PureComponent{static discardChanges(){window.location.reload()}constructor(e){super(e),this.state={css:e.customCss,showReportSubMenu:null},this.changeCss=this.changeCss.bind(this),this.changeRefreshInterval=this.changeRefreshInterval.bind(this),this.handleMenuClick=this.handleMenuClick.bind(this),this.setShowReportSubMenu=this.setShowReportSubMenu.bind(this)}UNSAFE_componentWillReceiveProps(e){this.props.customCss!==e.customCss&&this.setState({css:e.customCss},(()=>{(0,Tt.A)(e.customCss)}))}setShowReportSubMenu(e){this.setState({showReportSubMenu:e})}changeCss(e){this.props.onChange(),this.props.updateCss(e)}changeRefreshInterval(e,t){this.props.setRefreshFrequency(e,t),this.props.startPeriodicRender(1e3*e)}handleMenuClick({key:e}){switch(e){case nt.IG.RefreshDashboard:this.props.forceRefreshAllCharts(),this.props.addSuccessToast((0,h.t)("Refreshing charts"));break;case nt.IG.EditProperties:this.props.showPropertiesModal();break;case nt.IG.ToggleFullscreen:{const e=Et({pathname:window.location.pathname,filters:(0,_t.ug)(),hash:window.location.hash,standalone:!(0,tt.P3)(Ze.vX.standalone)});window.location.replace(e);break}case nt.IG.ManageEmbedded:this.props.manageEmbedded()}}render(){var e,t,n;const{dashboardTitle:i,dashboardId:r,dashboardInfo:o,refreshFrequency:a,shouldPersistRefreshFrequency:s,editMode:l,customCss:d,colorNamespace:c,colorScheme:u,layout:p,expandedSlices:m,onSave:g,userCanEdit:f,userCanShare:b,userCanSave:v,userCanCurate:y,isLoading:x,refreshLimit:C,refreshWarning:S,lastModifiedTime:w,addSuccessToast:D,addDangerToast:I,setIsDropdownVisible:F,isDropdownVisible:$,directPathToChild:R,...k}=this.props,Y=`${(0,h.t)("Superset dashboard")} ${i}`,T=(0,h.t)("Check out this dashboard: "),M=!(null!=o&&o.userId),A=Et({pathname:window.location.pathname,filters:(0,_t.ug)(),hash:window.location.hash}),_=null==(e=o.common)||null==(t=e.conf)?void 0:t.DASHBOARD_AUTO_REFRESH_INTERVALS,P=[...R||[]].pop();return(0,H.FD)(Xe.W1,{selectable:!1,...k,children:[!l&&(0,H.Y)(Xe.W1.Item,{disabled:x,onClick:this.handleMenuClick,children:(0,h.t)("Refresh dashboard")},nt.IG.RefreshDashboard),!l&&!M&&(0,H.Y)(Xe.W1.Item,{onClick:this.handleMenuClick,children:(0,tt.P3)(Ze.vX.standalone)?(0,h.t)("Exit fullscreen"):(0,h.t)("Enter fullscreen")},nt.IG.ToggleFullscreen),l&&(0,H.Y)(Xe.W1.Item,{onClick:this.handleMenuClick,children:(0,h.t)("Edit properties")},nt.IG.EditProperties),l&&(0,H.Y)(Xe.W1.Item,{children:(0,H.Y)(gt,{triggerNode:(0,H.Y)("span",{children:(0,h.t)("Edit CSS")}),initialCss:this.state.css,onChange:this.changeCss,addDangerToast:I})},nt.IG.EditCss),(0,H.Y)(Xe.W1.Divider,{}),v&&(0,H.Y)(Xe.W1.Item,{children:(0,H.Y)(kt,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:r,dashboardTitle:i,dashboardInfo:o,saveType:E.gb,layout:p,expandedSlices:m,refreshFrequency:a,shouldPersistRefreshFrequency:s,lastModifiedTime:w,customCss:d,colorNamespace:c,colorScheme:u,onSave:g,triggerNode:(0,H.Y)("span",{children:(0,h.t)("Save as")}),canOverwrite:f})},nt.IG.SaveModal),(0,H.Y)(Xe.W1.SubMenu,{disabled:x,title:(0,h.t)("Download"),logEvent:this.props.logEvent,children:(0,H.Y)(ct,{pdfMenuItemTitle:(0,h.t)("Export to PDF"),imageMenuItemTitle:(0,h.t)("Download as Image"),dashboardTitle:i,dashboardId:r})},nt.IG.Download),b&&(0,H.Y)(Xe.W1.SubMenu,{disabled:x,title:(0,h.t)("Share"),children:(0,H.Y)(it,{url:A,copyMenuItemTitle:(0,h.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,h.t)("Share permalink by email"),emailSubject:Y,emailBody:T,addSuccessToast:D,addDangerToast:I,dashboardId:r,dashboardComponentId:P})},nt.IG.Share),!l&&y&&(0,H.Y)(Xe.W1.Item,{onClick:this.handleMenuClick,children:(0,h.t)("Embed dashboard")},nt.IG.ManageEmbedded),(0,H.Y)(Xe.W1.Divider,{}),l?null:this.state.showReportSubMenu?(0,H.FD)(H.FK,{children:[(0,H.Y)(Xe.W1.SubMenu,{title:(0,h.t)("Manage email report"),children:(0,H.Y)(Yt.A,{dashboardId:o.id,setShowReportSubMenu:this.setShowReportSubMenu,showReportSubMenu:this.state.showReportSubMenu,setIsDropdownVisible:F,isDropdownVisible:$,useTextMenu:!0})}),(0,H.Y)(Xe.W1.Divider,{})]}):(0,H.Y)(Xe.W1,{children:(0,H.Y)(Yt.A,{dashboardId:o.id,setShowReportSubMenu:this.setShowReportSubMenu,setIsDropdownVisible:F,isDropdownVisible:$,useTextMenu:!0})}),l&&!Qe()(null==o||null==(n=o.metadata)?void 0:n.filter_scopes)&&(0,H.Y)(Xe.W1.Item,{children:(0,H.Y)(Mt.A,{className:"m-r-5",triggerNode:(0,h.t)("Set filter mapping")})},nt.IG.SetFilterMapping),(0,H.Y)(Xe.W1.Item,{children:(0,H.Y)(It,{addSuccessToast:this.props.addSuccessToast,refreshFrequency:a,refreshLimit:C,refreshWarning:S,onChange:this.changeRefreshInterval,editMode:l,refreshIntervalOptions:_,triggerNode:(0,H.Y)("span",{children:(0,h.t)("Set auto-refresh interval")})})},nt.IG.AutorefreshModal)]})}}zt.propTypes=Pt,zt.defaultProps={colorNamespace:void 0,colorScheme:void 0,refreshLimit:0,refreshWarning:null};const Ut=(0,u.Ng)((e=>({directPathToChild:e.dashboardState.directPathToChild})))(zt);var Ot=n(2738);const qt={dashboardId:w().number,isPublished:w().bool.isRequired,savePublished:w().func.isRequired,canEdit:w().bool,canSave:w().bool},Nt=(0,h.t)("This dashboard is not published, it will not show up in the list of dashboards. Click here to publish this dashboard."),Ht=(0,h.t)("This dashboard is not published which means it will not show up in the list of dashboards. Favorite it to see it there or access it by using the URL directly."),Vt=(0,h.t)("This dashboard is published. Click to make it a draft.");class Lt extends o.Component{componentDidMount(){this.togglePublished=this.togglePublished.bind(this)}togglePublished(){this.props.savePublished(this.props.dashboardId,!this.props.isPublished)}render(){return this.props.isPublished?this.props.canEdit&&this.props.canSave?(0,H.Y)(q.m,{id:"published-dashboard-tooltip",placement:"bottom",title:Vt,children:(0,H.Y)(Ot.A,{onClick:()=>{this.togglePublished()},children:(0,h.t)("Published")})}):null:this.props.canEdit&&this.props.canSave?(0,H.Y)(q.m,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:Nt,children:(0,H.Y)(Ot.A,{onClick:()=>{this.togglePublished()},children:(0,h.t)("Draft")})}):(0,H.Y)(q.m,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:Ht,children:(0,H.Y)(Ot.A,{children:(0,h.t)("Draft")})})}}Lt.propTypes=qt;const jt={onUndo:w().func.isRequired,onRedo:w().func.isRequired};class Wt extends o.PureComponent{constructor(e){super(e),this.handleKeydown=this.handleKeydown.bind(this)}componentDidMount(){document.addEventListener("keydown",this.handleKeydown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){if(e.ctrlKey||e.metaKey){const t="z"===e.key||90===e.keyCode,n="y"===e.key||89===e.keyCode,i=document&&document.querySelector(".dashboard-markdown--editing"),r=document&&document.querySelector(".editable-title--editing");i||r||!t&&!n||(e.preventDefault(),(t?this.props.onUndo:this.props.onRedo)())}}render(){return null}}Wt.propTypes=jt;const Bt=Wt;var Kt=n(8706),Gt=n(25106);const Qt=e=>{e&&clearInterval(e)};var Xt=n(51848),Zt=n(13917),Jt=n(93505),en=n(85861);const tn=(0,je.a)(),nn=e=>e.split(/(?:\s|,)+/).filter((e=>e)),rn=a.I4.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`,on=({dashboardId:e,onHide:t})=>{var n;const{addInfoToast:i,addDangerToast:r}=(0,lt.Yf)(),[a,s]=(0,o.useState)(!0),[l,d]=(0,o.useState)(!1),[c,u]=(0,o.useState)(null),[p,m]=(0,o.useState)(""),g=`/api/v1/dashboard/${e}/embedded`,f=!c||nn(p).join()!==c.allowed_domains.join(),b=(0,o.useCallback)((()=>{d(!0),(0,Jt.A)({method:"POST",endpoint:g})({allowed_domains:nn(p)}).then((({result:e})=>{u(e),m(e.allowed_domains.join(", ")),i((0,h.t)("Changes saved."))}),(e=>{console.error(e),r((0,h.t)((0,h.t)("Sorry, something went wrong. The changes could not be saved.")))})).finally((()=>{d(!1)}))}),[g,p]),v=(0,o.useCallback)((()=>{en.A.confirm({title:(0,h.t)("Disable embedding?"),content:(0,h.t)("This will remove your current embed configuration."),okType:"danger",onOk:()=>{d(!0),(0,Jt.A)({method:"DELETE",endpoint:g})({}).then((()=>{u(null),m(""),i((0,h.t)("Embedding deactivated.")),t()}),(e=>{console.error(e),r((0,h.t)("Sorry, something went wrong. Embedding could not be deactivated."))})).finally((()=>{d(!1)}))}})}),[g]);if((0,o.useEffect)((()=>{s(!1),(0,Jt.A)({method:"GET",endpoint:g})({}).catch((e=>{if(404===e.status)return{result:null};throw r((0,h.t)("Sorry, something went wrong. Please try again.")),e})).then((({result:e})=>{s(!0),u(e),m(e?e.allowed_domains.join(", "):"")}))}),[e]),!a)return(0,H.Y)(k.A,{});const y=tn.get("embedded.documentation.configuration_details"),x=tn.get("embedded.documentation.description"),C=null!=(n=tn.get("embedded.documentation.url"))?n:"https://www.npmjs.com/package/@superset-ui/embedded-sdk";return(0,H.FD)(H.FK,{children:[c?y?(0,H.Y)(y,{embeddedId:c.uuid}):(0,H.FD)("p",{children:[(0,h.t)("This dashboard is ready to embed. In your application, pass the following id to the SDK:"),(0,H.Y)("br",{}),(0,H.Y)("code",{children:c.uuid})]}):(0,H.Y)("p",{children:(0,h.t)("Configure this dashboard to embed it into an external web application.")}),(0,H.FD)("p",{children:[(0,h.t)("For further instructions, consult the")," ",(0,H.Y)("a",{href:C,target:"_blank",rel:"noreferrer",children:x?x():(0,h.t)("Superset Embedded SDK documentation.")})]}),(0,H.Y)("h3",{children:(0,h.t)("Settings")}),(0,H.FD)(vt.eI,{children:[(0,H.FD)("label",{htmlFor:"allowed-domains",children:[(0,h.t)("Allowed Domains (comma separated)")," ",(0,H.Y)(z.W,{tooltip:(0,h.t)("A list of domain names that can embed this dashboard. Leaving this field empty will allow embedding from any domain.")})]}),(0,H.Y)($.pd,{name:"allowed-domains",id:"allowed-domains",value:p,placeholder:"superset.example.com",onChange:e=>m(e.target.value)})]}),(0,H.Y)(rn,{children:c?(0,H.FD)(H.FK,{children:[(0,H.Y)(Y.A,{onClick:v,buttonStyle:"secondary",loading:l,children:(0,h.t)("Deactivate")}),(0,H.Y)(Y.A,{onClick:b,buttonStyle:"primary",disabled:!f,loading:l,children:(0,h.t)("Save changes")})]}):(0,H.Y)(Y.A,{onClick:b,buttonStyle:"primary",loading:l,children:(0,h.t)("Enable embedding")})})]})},an=e=>{const{show:t,onHide:n}=e,i=tn.get("embedded.modal");return i?(0,H.Y)(i,{...e}):(0,H.Y)(en.A,{show:t,onHide:n,title:(0,h.t)("Embed"),hideFooter:!0,children:(0,H.Y)(on,{...e})})},sn=(0,n(49262).A)((()=>n.e(2024).then(n.bind(n,52024)))),ln=()=>{const e=(0,u.d4)((({dashboardState:e})=>e.overwriteConfirmMetadata));return(0,H.Y)(H.FK,{children:e&&(0,H.Y)(sn,{overwriteConfirmMetadata:e})})},dn=(0,je.a)(),cn={addSuccessToast:w().func.isRequired,addDangerToast:w().func.isRequired,addWarningToast:w().func.isRequired,user:w().object,dashboardInfo:w().object.isRequired,dashboardTitle:w().string,dataMask:w().object.isRequired,charts:w().objectOf(_.tb).isRequired,layout:w().object.isRequired,expandedSlices:w().object,customCss:w().string,colorNamespace:w().string,colorScheme:w().string,setColorScheme:w().func.isRequired,setUnsavedChanges:w().func.isRequired,isStarred:w().bool.isRequired,isPublished:w().bool.isRequired,isLoading:w().bool.isRequired,onSave:w().func.isRequired,onChange:w().func.isRequired,fetchFaveStar:w().func.isRequired,fetchCharts:w().func.isRequired,saveFaveStar:w().func.isRequired,savePublished:w().func.isRequired,updateDashboardTitle:w().func.isRequired,editMode:w().bool.isRequired,setEditMode:w().func.isRequired,showBuilderPane:w().func.isRequired,updateCss:w().func.isRequired,logEvent:w().func.isRequired,hasUnsavedChanges:w().bool.isRequired,maxUndoHistoryExceeded:w().bool.isRequired,lastModifiedTime:w().number.isRequired,onRefresh:w().func.isRequired,onUndo:w().func.isRequired,onRedo:w().func.isRequired,undoLength:w().number.isRequired,redoLength:w().number.isRequired,setMaxUndoHistoryExceeded:w().func.isRequired,maxUndoHistoryToast:w().func.isRequired,refreshFrequency:w().number,shouldPersistRefreshFrequency:w().bool.isRequired,setRefreshFrequency:w().func.isRequired,dashboardInfoChanged:w().func.isRequired,dashboardTitleChanged:w().func.isRequired},hn=e=>s.AH`
  border-bottom: 1px solid ${e.colors.grayscale.light2};
`,un=e=>s.AH`
  color: ${e.colors.primary.dark2};
`,pn=e=>s.AH`
  display: flex;
  align-items: center;

  .action-schedule-report {
    margin-left: ${2*e.gridUnit}px;
  }

  .undoRedo {
    display: flex;
    margin-right: ${2*e.gridUnit}px;
  }
`,mn=(0,a.I4)(R.$n)`
  // TODO: check if we need this.
  padding: 0;
  &:hover {
    background: transparent;
  }
`,gn=e=>s.AH`
  color: ${e.colors.grayscale.light1};
  &:hover {
    color: ${e.colors.grayscale.base};
  }
`,fn=e=>s.AH`
  color: ${e.colors.grayscale.base};
`,bn=e=>s.AH`
  color: ${e.colors.grayscale.light2};
`,vn=e=>s.AH`
  min-width: ${17*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`,yn=e=>s.AH`
  min-width: ${22*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`;class xn extends o.PureComponent{static discardChanges(){const e=new URL(window.location.href);e.searchParams.delete("edit"),window.location.assign(e)}constructor(e){super(e),this.showEmbedModal=()=>{this.setState({showingEmbedModal:!0})},this.hideEmbedModal=()=>{this.setState({showingEmbedModal:!1})},this.getMetadataItems=()=>{const{dashboardInfo:e}=this.props;return[{type:Zt.QD.LastModified,value:e.changed_on_delta_humanized,modifiedBy:(0,Gt.A)(e.changed_by)||(0,h.t)("Not available")},{type:Zt.QD.Owner,createdBy:(0,Gt.A)(e.created_by)||(0,h.t)("Not available"),owners:e.owners.length>0?e.owners.map(Gt.A):(0,h.t)("None"),createdOn:e.created_on_delta_humanized}]},this.state={didNotifyMaxUndoHistoryToast:!1,emphasizeUndo:!1,emphasizeRedo:!1,showingPropertiesModal:!1,isDropdownVisible:!1},this.handleChangeText=this.handleChangeText.bind(this),this.handleCtrlZ=this.handleCtrlZ.bind(this),this.handleCtrlY=this.handleCtrlY.bind(this),this.toggleEditMode=this.toggleEditMode.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.startPeriodicRender=this.startPeriodicRender.bind(this),this.overwriteDashboard=this.overwriteDashboard.bind(this),this.showPropertiesModal=this.showPropertiesModal.bind(this),this.hidePropertiesModal=this.hidePropertiesModal.bind(this),this.setIsDropdownVisible=this.setIsDropdownVisible.bind(this)}componentDidMount(){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}componentDidUpdate(e){if(this.props.refreshFrequency!==e.refreshFrequency){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}}UNSAFE_componentWillReceiveProps(e){E.nc-e.undoLength<=0&&!this.state.didNotifyMaxUndoHistoryToast&&(this.setState((()=>({didNotifyMaxUndoHistoryToast:!0}))),this.props.maxUndoHistoryToast()),e.undoLength>E.nc&&!this.props.maxUndoHistoryExceeded&&this.props.setMaxUndoHistoryExceeded()}componentWillUnmount(){Qt(this.refreshTimer),this.props.setRefreshFrequency(0),clearTimeout(this.ctrlYTimeout),clearTimeout(this.ctrlZTimeout)}handleChangeText(e){const{updateDashboardTitle:t,onChange:n}=this.props;e&&this.props.dashboardTitle!==e&&(t(e),n())}setIsDropdownVisible(e){this.setState({isDropdownVisible:e})}handleCtrlY(){this.props.onRedo(),this.setState({emphasizeRedo:!0},(()=>{this.ctrlYTimeout&&clearTimeout(this.ctrlYTimeout),this.ctrlYTimeout=setTimeout((()=>{this.setState({emphasizeRedo:!1})}),100)}))}handleCtrlZ(){this.props.onUndo(),this.setState({emphasizeUndo:!0},(()=>{this.ctrlZTimeout&&clearTimeout(this.ctrlZTimeout),this.ctrlZTimeout=setTimeout((()=>{this.setState({emphasizeUndo:!1})}),100)}))}forceRefresh(){if(!this.props.isLoading){const e=Object.keys(this.props.charts);return this.props.logEvent(We.oW,{force:!0,interval:0,chartCount:e.length}),this.props.onRefresh(e,!0,0,this.props.dashboardInfo.id)}return!1}startPeriodicRender(e){let t;if(e){var n,i;const{dashboardInfo:r}=this.props,o=(null==(n=r.common)||null==(i=n.conf)?void 0:i.DASHBOARD_AUTO_REFRESH_INTERVALS).find((t=>Number(t[0])===e/1e3));t=o?(0,h.t)(o[1]):Le().duration(e,"millisecond").humanize()}this.refreshTimer=function({interval:e=0,periodicRender:t,refreshTimer:n}){return Qt(n),e>0?setInterval(t,e):0}({interval:e,periodicRender:()=>{const{fetchCharts:n,logEvent:i,charts:r,dashboardInfo:o}=this.props,{metadata:a}=o,s=a.timed_refresh_immune_slices||[],l=Object.values(r).filter((e=>-1===s.indexOf(e.id))).map((e=>e.id));return i(We.hl,{interval:e,chartCount:l.length}),this.props.addWarningToast((0,h.t)("This dashboard is currently auto refreshing; the next auto refresh will be in %s.",t)),"fetch"===o.common.conf.DASHBOARD_AUTO_REFRESH_MODE?n(l,!1,.2*e,o.id):n(l,!0,.2*e,o.id)},refreshTimer:this.refreshTimer})}toggleEditMode(){this.props.logEvent(We.U7,{edit_mode:!this.props.editMode}),this.props.setEditMode(!this.props.editMode)}overwriteDashboard(){var e,t,n;const{dashboardTitle:i,layout:r,colorScheme:o,colorNamespace:a,customCss:s,dashboardInfo:l,refreshFrequency:d,shouldPersistRefreshFrequency:c,lastModifiedTime:u,slug:p}=this.props,m=c?d:null==(e=l.metadata)?void 0:e.refresh_frequency,g=(null==l||null==(t=l.metadata)?void 0:t.color_namespace)||a,f=(null==l||null==(n=l.metadata)?void 0:n.color_scheme)||o,b={certified_by:l.certified_by,certification_details:l.certification_details,css:s,dashboard_title:i,last_modified_time:u,owners:l.owners,roles:l.roles,slug:p,metadata:{...null==l?void 0:l.metadata,color_namespace:g,color_scheme:f,positions:r,refresh_frequency:m}},v=(0,Ke.J)(r).length,y=l.common.conf.SUPERSET_DASHBOARD_POSITION_DATA_LIMIT||E.Gc;v>=y?this.props.addDangerToast((0,h.t)("Your dashboard is too large. Please reduce its size before saving it.")):(v>=.9*y&&this.props.addWarningToast("Your dashboard is near the size limit."),this.props.onSave(b,l.id,E.LA))}showPropertiesModal(){this.setState({showingPropertiesModal:!0})}hidePropertiesModal(){this.setState({showingPropertiesModal:!1})}render(){var e,t,n,i;const{dashboardTitle:r,layout:o,expandedSlices:a,customCss:l,colorNamespace:c,dataMask:u,setColorScheme:p,setUnsavedChanges:m,colorScheme:g,onUndo:f,onRedo:b,undoLength:v,redoLength:y,onChange:x,onSave:C,updateCss:S,editMode:w,isPublished:D,user:I,dashboardInfo:F,hasUnsavedChanges:$,isLoading:k,refreshFrequency:Y,shouldPersistRefreshFrequency:M,setRefreshFrequency:A,lastModifiedTime:E,logEvent:_}=this.props,P=F.dash_edit_perm&&!F.is_managed_externally,z=F.dash_share_perm,U=F.dash_save_perm,O=(0,d.G7)(d.TO.EmbeddedSuperset)&&(0,Be.L)("can_set_embedded","Dashboard",I.roles),N=null==(e=F.common)||null==(t=e.conf)?void 0:t.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT,V=null==(n=F.common)||null==(i=n.conf)?void 0:i.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_WARNING_MESSAGE,L=dn.get("dashboard.nav.right");return(0,H.FD)("div",{css:hn,"data-test-id":F.id,className:"dashboard-header-container",children:[(0,H.Y)(Xt.U,{editableTitleProps:{title:r,canEdit:P&&w,onSave:this.handleChangeText,placeholder:(0,h.t)("Add the name of the dashboard"),label:(0,h.t)("Dashboard title"),showTooltip:!1},certificatiedBadgeProps:{certifiedBy:F.certified_by,details:F.certification_details},faveStarProps:{itemId:F.id,fetchFaveStar:this.props.fetchFaveStar,saveFaveStar:this.props.saveFaveStar,isStarred:this.props.isStarred,showTooltip:!0},titlePanelAdditionalItems:[!w&&(0,H.Y)(Lt,{dashboardId:F.id,isPublished:D,savePublished:this.props.savePublished,canEdit:P,canSave:U,visible:!w}),!w&&(0,H.Y)(Zt.Ay,{items:this.getMetadataItems(),tooltipPlacement:"bottom"})],rightPanelAdditionalItems:(0,H.FD)("div",{className:"button-container",children:[U&&(0,H.Y)("div",{className:"button-container",children:w&&(0,H.FD)("div",{css:pn,children:[(0,H.FD)("div",{className:"undoRedo",children:[(0,H.Y)(q.m,{id:"dashboard-undo-tooltip",title:(0,h.t)("Undo the action"),children:(0,H.Y)(mn,{buttonStyle:"link",disabled:v<1,onClick:v&&f,children:(0,H.Y)(T.A.Undo,{css:[gn,this.state.emphasizeUndo&&fn,v<1&&bn,"",""],iconSize:"xl"})})}),(0,H.Y)(q.m,{id:"dashboard-redo-tooltip",title:(0,h.t)("Redo the action"),children:(0,H.Y)(mn,{buttonStyle:"link",disabled:y<1,onClick:y&&b,children:(0,H.Y)(T.A.Redo,{css:[gn,this.state.emphasizeRedo&&fn,y<1&&bn,"",""],iconSize:"xl"})})})]}),(0,H.Y)(R.$n,{css:yn,buttonSize:"small",onClick:this.constructor.discardChanges,buttonStyle:"default","aria-label":(0,h.t)("Discard"),children:(0,h.t)("Discard")}),(0,H.Y)(R.$n,{css:vn,buttonSize:"small",disabled:!$,buttonStyle:"primary",onClick:this.overwriteDashboard,"aria-label":(0,h.t)("Save"),children:(0,h.t)("Save")})]})}),w?(0,H.Y)(Bt,{onUndo:this.handleCtrlZ,onRedo:this.handleCtrlY}):(0,H.FD)("div",{css:pn,children:[L&&(0,H.Y)(L,{}),P&&(0,H.Y)(R.$n,{buttonStyle:"secondary",onClick:this.toggleEditMode,className:"action-button",css:un,"aria-label":(0,h.t)("Edit dashboard"),children:(0,h.t)("Edit dashboard")})]})]}),menuDropdownProps:{getPopupContainer:e=>e.closest(".header-with-actions"),visible:this.state.isDropdownVisible,onVisibleChange:this.setIsDropdownVisible},additionalActionsMenu:(0,H.Y)(Ut,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:F.id,dashboardTitle:r,dashboardInfo:F,dataMask:u,layout:o,expandedSlices:a,customCss:l,colorNamespace:c,colorScheme:g,onSave:C,onChange:x,forceRefreshAllCharts:this.forceRefresh,startPeriodicRender:this.startPeriodicRender,refreshFrequency:Y,shouldPersistRefreshFrequency:M,setRefreshFrequency:A,updateCss:S,editMode:w,hasUnsavedChanges:$,userCanEdit:P,userCanShare:z,userCanSave:U,userCanCurate:O,isLoading:k,showPropertiesModal:this.showPropertiesModal,manageEmbedded:this.showEmbedModal,refreshLimit:N,refreshWarning:V,lastModifiedTime:E,isDropdownVisible:this.state.isDropdownVisible,setIsDropdownVisible:this.setIsDropdownVisible,logEvent:_}),showFaveStar:(null==I?void 0:I.userId)&&(null==F?void 0:F.id),showTitlePanelItems:!0}),this.state.showingPropertiesModal&&(0,H.Y)(Kt.A,{dashboardId:F.id,dashboardInfo:F,dashboardTitle:r,show:this.state.showingPropertiesModal,onHide:this.hidePropertiesModal,colorScheme:this.props.colorScheme,onSubmit:e=>{const{dashboardInfoChanged:t,dashboardTitleChanged:n}=this.props;p(e.colorScheme),t({slug:e.slug,metadata:JSON.parse(e.jsonMetadata||"{}"),certified_by:e.certifiedBy,certification_details:e.certificationDetails,owners:e.owners,roles:e.roles}),m(!0),n(e.title)},onlyApply:!0}),(0,H.Y)(ln,{}),O&&(0,H.Y)(an,{show:this.state.showingEmbedModal,onHide:this.hideEmbedModal,dashboardId:F.id}),(0,H.Y)(s.mL,{styles:s.AH`
            .ant-menu-vertical {
              border-right: none;
            }
          `})]})}}xn.propTypes=cn,xn.defaultProps={colorNamespace:void 0,colorScheme:void 0};const Cn=xn;function Sn(e){return Object.values(e).some((e=>e.chartUpdateStartTime>(e.chartUpdateEndTime||0)))}var wn=n(48285),Dn=n(72173),In=n(92475),Fn=n(95272),$n=n(7735);const Rn=(0,u.Ng)((function({dashboardLayout:e,dashboardState:t,reports:n,dashboardInfo:i,charts:r,dataMask:o,user:a}){return{dashboardInfo:i,undoLength:e.past.length,redoLength:e.future.length,layout:e.present,dashboardTitle:((e.present[E.XY]||{}).meta||{}).text,expandedSlices:t.expandedSlices,refreshFrequency:t.refreshFrequency,shouldPersistRefreshFrequency:!!t.shouldPersistRefreshFrequency,customCss:t.css,colorNamespace:t.colorNamespace,colorScheme:t.colorScheme,charts:r,dataMask:o,user:a,isStarred:!!t.isStarred,isPublished:!!t.isPublished,isLoading:Sn(r),hasUnsavedChanges:!!t.hasUnsavedChanges,maxUndoHistoryExceeded:!!t.maxUndoHistoryExceeded,lastModifiedTime:Math.max(t.lastModifiedTime,i.last_modified_time),editMode:!!t.editMode,slug:i.slug,metadata:i.metadata,reports:n}}),(function(e){return(0,f.zH)({addSuccessToast:Fn.WR,addDangerToast:Fn.iB,addWarningToast:Fn.Zd,onUndo:In.$K,onRedo:In.nH,setEditMode:Dn.op,showBuilderPane:Dn.vd,setColorScheme:Dn.r7,setUnsavedChanges:Dn.MR,fetchFaveStar:Dn.Xk,saveFaveStar:Dn.cv,savePublished:Dn.sE,fetchCharts:Dn.a9,updateDashboardTitle:In.qp,updateCss:Dn.Jr,onChange:Dn.k9,onSave:Dn.JA,setMaxUndoHistoryExceeded:Dn.G5,maxUndoHistoryToast:Dn.yG,logEvent:$n.logEvent,setRefreshFrequency:Dn.qK,onRefresh:Dn.d1,dashboardInfoChanged:wn.PD,dashboardTitleChanged:In.zp,updateDataMask:He.Mv},e)}))(Cn),kn=a.I4.div`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
  &:hover {
    color: ${({theme:e})=>e.colors.primary.base};
  }
`,Yn=a.I4.span`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`,Tn=({icon:e,label:t,onClick:n})=>(0,H.FD)(kn,{tabIndex:0,role:"button",onClick:e=>{e.preventDefault(),n(e)},children:[e,t&&(0,H.Y)(Yn,{children:t})]});var Mn=n(51436),An=n(10044),En=n(19966);function _n({dashboardId:e,anchorLinkId:t,placement:n="right",emailContent:i="",emailSubject:r=""}){const[a,s]=(0,o.useState)(""),{addDangerToast:l}=(0,lt.Yf)(),{dataMask:d,activeTabs:c}=(0,u.d4)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs}))),p=`mailto:?Subject=${r}%20&Body=${i}${a||""}`;return(0,H.Y)(An.A,{trigger:"click",placement:n,content:(0,H.FD)("div",{id:"shorturl-popover",onClick:e=>{e.stopPropagation()},children:[(0,H.Y)(En.A,{text:a,copyNode:(0,H.Y)("i",{className:"fa fa-clipboard",title:(0,h.t)("Copy to clipboard")})}),"  ",(0,H.Y)("a",{href:p,children:(0,H.Y)("i",{className:"fa fa-envelope"})})]}),children:(0,H.FD)("span",{className:"short-link-trigger btn btn-default btn-sm",tabIndex:-1,role:"button",onClick:n=>{n.stopPropagation(),(async()=>{try{const n=await(0,tt.oq)({dashboardId:e,dataMask:d,activeTabs:c,anchor:t});s(n)}catch(e){e&&l((await(0,Mn.h4)(e)).error||(0,h.t)("Something went wrong."))}})()},children:[(0,H.Y)("i",{className:"short-link-trigger fa fa-link"})," "]})})}var Pn=n(37725);function zn({id:e,dashboardId:t,placement:n="right",scrollIntoView:i=!1,showShortLinkButton:r=!0}){const a=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({block:"center",behavior:"smooth"})},s=(0,Pn.A)();return(0,o.useEffect)((()=>{s&&e===s&&a(e)}),[s,e]),(0,o.useEffect)((()=>{i&&a(e)}),[e,i]),(0,H.Y)("span",{className:"anchor-link-container",id:e,children:r&&t&&(0,H.Y)(_n,{anchorLinkId:e,dashboardId:t,emailSubject:(0,h.t)("Superset chart"),emailContent:(0,h.t)("Check out this chart in dashboard:"),placement:n})})}var Un=n(78130),On=n(2514),qn=n(76295),Nn=n(2404),Hn=n.n(Nn),Vn=n(61574),Ln=n(85183),jn=n(62703),Wn=n(35839),Bn=n(60237),Kn=n(35837),Gn=n(46022),Qn=n(62952),Xn=n(80145),Zn=n(58863),Jn=n(93103),ei=n(72965),ti=n(15151);const ni=e=>{const t="MacOS"===(0,ti.UX)(),n=e?(0,h.t)("Click to edit %s.",e):(0,h.t)("Click to edit chart."),i=(0,h.t)("Use %s to open in a new tab.",t?(0,h.t)("⌘ + click"):(0,h.t)("ctrl + click"));return(0,H.FD)(H.FK,{children:[(0,H.Y)("div",{children:n}),(0,H.Y)("div",{children:i})]})};var ii=n(17432),ri=n(8786),oi=n(44230),ai=n(13270),si=n(12817);const li=(0,n(1081).Mz)((e=>e.charts),(e=>Object.values(e).map((e=>e.id)))),di=()=>((e,t)=>{const n=(0,o.useRef)(),i=n.current,r=((e,t)=>e===t||Hn()(e,t))(i,e);return(0,o.useEffect)((()=>{r||(n.current=e)})),(0,ai.A)(i)&&r?i:e})((0,u.d4)(li));var ci=n(73212);const hi=({type:e})=>e===A.B8||e===A.oT||e===A.tq,ui=(e,t,n,i,r,o,a)=>{var s;let l=t;if(e&&t&&hi(e)&&e.type!==A.tq&&null!=r&&null!=r.includes&&r.includes(e.id)){var d;const n=a((e=>{var t,n,i,r,o,a,s,l,d,c;return null!=(t=null!=(n=null!=(i=null!=(r=null!=(o=null==e||null==(a=e.meta)?void 0:a.sliceNameOverride)?o:null==e||null==(s=e.meta)?void 0:s.sliceName)?r:null==e||null==(l=e.meta)?void 0:l.text)?i:null==e||null==(d=e.meta)?void 0:d.defaultText)?n:null==e||null==(c=e.id)||null==c.toString?void 0:c.toString())?t:""})(e),null==o||null==o.includes?void 0:o.includes(null==(d=e.meta)?void 0:d.chartId),(0,h.t)("This chart might be incompatible with the filter (datasets don't match)")),i={key:e.id,title:n,children:[]};t.children.push(i),l=i}null==e||null==(s=e.children)||null==s.forEach||s.forEach((e=>{const t=null==n?void 0:n[e];t?ui(t,l,n,i,r,o,a):et.A.warn(`Unable to find item with id: ${e} in the dashboard layout. This may indicate you have invalid references in your dashboard and the references to id: ${e} should be removed.`)}))},pi=(e,t,n,i)=>{n.forEach((n=>{var r,o;pi(e,t,((e,t)=>{var n;return[...(null==(n=e[t])?void 0:n.children)||[],...Object.values(e).filter((n=>n.parents&&n.parents[n.parents.length-1]===t&&!hi(e[n.parents[n.parents.length-1]]))).map((({id:e})=>e))]})(t,n),i),(null==(r=t[n])?void 0:r.type)!==A.oT||i.includes(null==(o=t[n])?void 0:o.meta.chartId)||e.push(n)}))},mi=(e,t=[])=>({rootPath:[E.wv],excluded:e?[e,...t]:t}),gi=(e,t)=>!e||e.rootPath[0]===E.wv&&!e.excluded.filter((e=>e!==t)).length,fi=(e,t,n)=>{let i=(0,H.Y)("span",{children:e});return t&&(i=(0,H.FD)(H.FK,{children:[i," ",(0,H.Y)(q.m,{title:n,children:(0,H.Y)(T.A.Info,{iconSize:"m"})})]})),i},bi=({formScope:e,initialScope:t,forceUpdate:n,updateFormValues:i,chartId:r,initiallyExcludedCharts:a=[],title:s})=>{const[l,d]=(0,o.useState)([E.wv]),{treeData:c,layout:p}=function(e,t=[],n=(e=>e),i=(0,h.t)("All panels")){const r=(0,u.d4)((({dashboardLayout:{present:e}})=>e)),a=(0,u.d4)((({charts:e})=>e)),s={children:[],key:E.wv,type:A.tq,title:i},l=(0,o.useMemo)((()=>Object.values(r).reduce(((t,n)=>{const{id:i,parents:r=[],type:o,meta:a}=n;return o===A.oT&&e!==(null==a?void 0:a.chartId)?[...new Set([...t,...r,i])]:t}),[])),[r,e]);return(0,o.useMemo)((()=>{ui(r[E.wv],s,r,a,l,t,n)}),[r,s,a,t,n]),{treeData:[s],layout:r}}(r,a,fi,s),[m,g]=(0,o.useState)(!0),f=(0,o.useMemo)((()=>((e,t)=>{const n=[];return pi(n,t,[...e.rootPath],[...e.excluded]),[...new Set(n)]})({...e||t},p)),[e,t,p]);return(0,H.Y)(R.PH,{checkable:!0,selectable:!1,onExpand:e=>{d(e),g(!1)},expandedKeys:l,autoExpandParent:m,onCheck:e=>{n();const t=((e,t)=>{if(!e.length)return{rootPath:[],excluded:[]};const n=e.filter((e=>{var n;return(null==(n=t[e])?void 0:n.type)===A.oT})).map((e=>{var n;return[E.wv,...(null==(n=t[e])?void 0:n.parents)||[]].filter((e=>hi(t[e])))}));n.sort(((e,t)=>e.length-t.length));const i=n.map((e=>e[n[0].length-1])),r=[];return Object.entries(t).forEach((([t,n])=>{var o;const a=n.parents||[];n.type===A.oT&&null!=(o=[E.wv,...a])&&o.find((n=>((t,n)=>i.includes(t)&&!e.includes(n))(n,t)))&&r.push(n.meta.chartId)})),{rootPath:[...new Set(i)],excluded:r}})(e,p);void 0!==r&&(t.excluded=[...new Set([...t.excluded,r])]),i({scope:t})},checkedKeys:f,treeData:c})},vi=(0,o.memo)(bi),yi=-1,xi=a.I4.div`
  ${({theme:e})=>s.AH`
    font-size: ${e.typography.sizes.s}px;
    color: ${e.colors.grayscale.base};
    margin-bottom: ${7*e.gridUnit}px;
  `}
`,Ci=({value:e,onSelectChange:t,chartConfigs:n})=>{const i=(0,a.DP)(),r=(0,u.d4)((e=>e.dashboardLayout.present)),l=(0,o.useMemo)((()=>{const t=Object.values(r).filter((e=>e.type===A.oT));return Object.values(n).filter((t=>(0,nt.YD)(t.crossFilters.scope)||t.id===e&&e!==yi)).map((e=>{const n=t.find((t=>t.meta.chartId===Number(e.id)));return{value:Number(e.id),label:(null==n?void 0:n.meta.sliceNameOverride)||(null==n?void 0:n.meta.sliceName)||""}}))}),[n,r,e]);return(0,H.FD)("div",{css:s.AH`
        margin-bottom: ${6*i.gridUnit}px;
      `,children:[(0,H.FD)("div",{css:s.AH`
          display: flex;
          align-items: center;
          margin-bottom: ${i.gridUnit}px;
        `,children:[(0,H.Y)(xi,{css:s.AH`
            color: ${i.colors.grayscale.dark1};
            margin-right: ${i.gridUnit}px;
            margin-bottom: 0;
          `,children:`${(0,h.t)("Chart")} *`}),(0,H.Y)(q.m,{title:(0,h.t)("Tooltip"),placement:"top",children:(0,H.Y)(T.A.InfoCircleOutlined,{iconSize:"xs",iconColor:i.colors.grayscale.base,css:s.AH`
              & > span {
                line-height: 0;
              }
            `})})]}),(0,H.Y)(R.l6,{ariaLabel:(0,h.t)("Select chart"),options:l,value:e&&e===yi?void 0:e,onChange:e=>{t(Number(e))}})]})},Si=({onScopeUpdate:e,currentScope:t,chartId:n,onSelectChange:i,chartConfigs:r})=>{const o=(0,a.DP)(),l=(0,u.d4)((({dashboardInfo:e})=>e.crossFiltersEnabled));return(0,H.FD)("div",{css:s.AH`
        flex: 1;
      `,children:[!l&&(0,H.Y)(bt.A,{message:(0,H.Y)("span",{css:s.AH`
                font-weight: ${o.typography.weights.bold};
              `,children:(0,h.t)("Cross-filtering is not enabled in this dashboard")}),type:"info",closable:!1,css:s.AH`
            margin-bottom: ${6*o.gridUnit}px;
          `}),(0,ai.A)(n)&&(0,H.Y)(Ci,{value:n,onSelectChange:i,chartConfigs:r}),(0,H.Y)(xi,{children:(0,ai.A)(n)?(0,h.t)('Select the charts to which you want to apply cross-filters when interacting with this chart. You can select "All charts" to apply filters to all charts that use the same dataset or contain the same column name in the dashboard.'):(0,h.t)('Select the charts to which you want to apply cross-filters in this dashboard. Deselecting a chart will exclude it from being filtered when applying cross-filters from any chart on the dashboard. You can select "All charts" to apply cross-filters to all charts that use the same dataset or contain the same column name in the dashboard.')}),(0,H.Y)(vi,{updateFormValues:e,initialScope:t,forceUpdate:ti.fZ,chartId:n,title:(0,h.t)("All charts")})]})};var wi=n(30535),Di=n(26206);const Ii="FILTER",Fi=a.I4.div`
  ${({isDragging:e,theme:t})=>`\n    opacity: ${e?.3:1};\n    cursor: ${e?"grabbing":"pointer"};\n    width: 100%;\n    display: flex;\n    padding:  ${t.gridUnit}px;\n  `}
`,$i=(0,a.I4)(T.A.Drag,{shouldForwardProp:e=>"isDragging"!==e})`
  ${({isDragging:e,theme:t})=>`\n    font-size: ${t.typography.sizes.m}px;\n    margin-top: 15px;\n    cursor: ${e?"grabbing":"grab"};\n    padding-left: ${t.gridUnit}px;\n  `}
`;var Ri={name:"82a6rk",styles:"flex:1"};const ki=({index:e,onRearrange:t,filterIds:n,children:i})=>{const r=(0,o.useRef)(null),[{isDragging:a},s]=(0,wi.i)({item:{filterIds:n,type:Ii,index:e},collect:e=>({isDragging:e.isDragging()})}),[,l]=(0,Di.H)({accept:Ii,hover:(n,i)=>{var o;if(!r.current)return;const a=n.index,s=e;if(a===s)return;const l=null==(o=r.current)?void 0:o.getBoundingClientRect(),d=(l.bottom-l.top)/2,c=i.getClientOffset().y-l.top;a<s&&c<d||a>s&&c>d||(t(a,s),n.index=s)}});return s(l(r)),(0,H.FD)(Fi,{ref:r,isDragging:a,children:[(0,H.Y)($i,{isDragging:a,alt:"Move icon",className:"dragIcon",viewBox:"4 4 16 16"}),(0,H.Y)("div",{css:Ri,children:i})]})},Yi=a.I4.div`
  ${({theme:e})=>`\n      display: flex;\n      align-items: center;\n      padding: ${2*e.gridUnit}px;\n      width: 100%;\n      border-radius: ${e.borderRadius}px;\n      cursor: pointer;\n      &.active {\n        color: ${e.colors.grayscale.dark1};\n        border-radius: ${e.borderRadius}px;\n        background-color: ${e.colors.secondary.light4};\n        span, .anticon {\n          color: ${e.colors.grayscale.dark1};\n        }\n      }\n      &:hover {\n        color: ${e.colors.primary.light1};\n        span, .anticon {\n          color: ${e.colors.primary.light1};\n        }\n      }\n      &.errored div, &.errored .warning {\n        color: ${e.colors.error.base};\n      }\n  `}
`,Ti=(0,a.I4)(T.A.Trash)`
  color: ${({theme:e})=>e.colors.grayscale.light3};
`,Mi=(0,a.I4)(T.A.Warning)`
  color: ${({theme:e})=>e.colors.error.base};
  &.anticon {
    margin-left: auto;
  }
`,Ai=a.I4.div`
  height: 100%;
  overflow-y: auto;
`;var Ei={name:"7whenc",styles:"display:flex;width:100%"},_i={name:"1abjxqb",styles:"align-items:center;display:flex;word-break:break-all"},Pi={name:"1je5tt7",styles:"align-self:flex-end;margin-left:auto"},zi={name:"an0ls6",styles:"align-self:flex-start;margin-left:auto"};const Ui=(0,o.forwardRef)((({getFilterTitle:e,onChange:t,onRemove:n,restoreFilter:i,onRearrange:r,currentFilterId:o,removedFilters:a,filters:s,erroredFilters:l=[]},d)=>{const c=r=>{const s=!!a[r],d=l.includes(r),c=o===r,u=[];return d&&u.push("errored"),c&&u.push("active"),(0,H.FD)(Yi,{role:"tab",onClick:()=>t(r),className:u.join(" "),children:[(0,H.FD)("div",{css:Ei,children:[(0,H.Y)("div",{css:_i,children:s?(0,h.t)("(Removed)"):e(r)}),!a[r]&&d&&(0,H.Y)(Mi,{className:"warning"}),s&&(0,H.Y)("span",{css:Pi,role:"button",tabIndex:0,onClick:e=>{e.preventDefault(),i(r)},children:(0,h.t)("Undo?")})]}),(0,H.Y)("div",{css:zi,children:s?null:(0,H.Y)(Ti,{onClick:e=>{e.stopPropagation(),n(r)},alt:"RemoveFilter"})})]},`filter-title-tab-${r}`)};return(0,H.Y)(Ai,{ref:d,children:(()=>{const e=[];return s.forEach(((t,n)=>{e.push((0,H.Y)(ki,{onRearrange:r,index:n,filterIds:[t],children:c(t)},n))})),e})()})})),Oi=a.I4.div`
  ${({theme:e})=>s.AH`
    margin-top: ${2*e.gridUnit}px;

    & button > [role='img']:first-of-type {
      margin-right: ${e.gridUnit}px;
      line-height: 0;
    }

    span[role='img'] {
      padding-bottom: 1px;
    }

    .ant-btn > .anticon + span {
      margin-left: 0;
    }
  `}
`,qi=({isActive:e,onClick:t,id:n,label:i,onRemove:r})=>{const o=(0,a.DP)();return(0,H.FD)(Yi,{className:e?"active":"",onClick:()=>t(n),children:[i,(0,H.Y)(T.A.Trash,{iconColor:o.colors.grayscale.light3,onClick:e=>{e.stopPropagation(),r(n)},css:s.AH`
          margin-left: auto;
        `})]})},Ni=({activeChartId:e,chartConfigs:t,setCurrentChartId:n,removeCustomScope:i,addNewCustomScope:r})=>{const l=(0,a.DP)(),d=(0,u.d4)((e=>e.dashboardLayout.present)),c=(0,o.useMemo)((()=>{const e=Object.values(d).filter((e=>e.type===A.oT));return Object.values(t).filter((e=>!(0,nt.YD)(e.crossFilters.scope)&&e.id!==yi)).map((t=>{const n=e.find((e=>e.meta.chartId===t.id));return{id:t.id,label:(null==n?void 0:n.meta.sliceNameOverride)||(null==n?void 0:n.meta.sliceName)||""}}))}),[t,d]),p=t[-1];return(0,H.FD)(H.FK,{children:[(0,H.Y)(Oi,{children:(0,H.FD)(Y.A,{buttonStyle:"link",buttonSize:"xsmall",onClick:r,children:[(0,H.Y)(T.A.PlusSmall,{})," ",(0,h.t)("Add custom scoping")]})}),(0,H.Y)(Yi,{role:"button",onClick:()=>n(void 0),className:void 0===e?"active":"",children:(0,h.t)("All charts/global scoping")}),(0,H.Y)("div",{css:s.AH`
          width: 100%;
          height: 1px;
          background-color: ${l.colors.grayscale.light3};
          margin: ${3*l.gridUnit}px 0;
        `}),c.map((t=>(0,H.Y)(qi,{id:t.id,onClick:n,onRemove:i,isActive:e===t.id,label:t.label},t.id))),p&&(0,H.Y)(qi,{id:p.id,onClick:n,onRemove:i,isActive:e===p.id,label:`[${(0,h.t)("new custom scoping")}]`})]})},Hi=a.I4.div`
  ${({theme:e})=>s.AH`
    display: flex;
    height: 100%;
    & > div {
      padding: ${4*e.gridUnit}px;
    }
  `}
`,Vi=({chartId:e,currentScope:t,onScopeUpdate:n,onSelectChange:i,chartConfigs:r,setCurrentChartId:o,removeCustomScope:l,addNewCustomScope:d})=>{const c=(0,a.DP)();return(0,H.FD)(Hi,{children:[(0,H.Y)("div",{css:s.AH`
          width: 35%;
          border-right: 1px solid ${c.colors.grayscale.light2};
        `,children:(0,H.Y)(Ni,{setCurrentChartId:o,activeChartId:e,chartConfigs:r,removeCustomScope:l,addNewCustomScope:d})}),(0,H.Y)(Si,{chartId:e,currentScope:t,onScopeUpdate:n,onSelectChange:i,chartConfigs:r})]})},Li=(e,t)=>({rootPath:t.rootPath,excluded:t.excluded.filter((t=>t!==e))}),ji=({initialChartId:e,isVisible:t,closeModal:n})=>{const i=(0,u.wA)(),r=(0,u.d4)((e=>e.dashboardLayout.present)),a=di(),[s,l]=(0,o.useState)(e),d=(0,u.d4)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration)||{}})),c=(0,o.useMemo)((()=>({scope:ci.e2,chartsInScope:a})),[a]),p=(0,u.d4)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.global_chart_configuration)||c})),[m,g]=(0,o.useState)((0,ai.A)(e)&&(0,nt.YD)(null==(f=d[e])?void 0:f.crossFilters.scope)?{...d,[e]:{id:e,crossFilters:{scope:Li(e,p.scope),chartsInScope:null==(b=d[e])?void 0:b.crossFilters.chartsInScope}}}:d);var f,b;const[v,y]=(0,o.useState)(p),x=(0,o.useCallback)((()=>{const e={...m};e[-1]&&delete e[-1],i((0,wn.Iw)({chartConfiguration:e,globalChartConfiguration:v})),n()}),[m,n,i,v]),C=(0,o.useCallback)((({scope:e})=>{if((0,ai.A)(s))g((t=>({...t,[s]:{id:s,crossFilters:{scope:e,chartsInScope:(0,si._)(e,a,r)}}})));else{const t=(0,si._)(e,a,r);y({scope:e,chartsInScope:t}),g((e=>((e,t)=>Object.entries(e).reduce(((e,[n,i])=>((0,nt.YD)(i.crossFilters.scope)?e[n]={id:Number(i.id),crossFilters:{scope:nt.TY,chartsInScope:t.filter((e=>e!==Number(i.id)))}}:e[n]=i,e)),{}))(e,t)))}}),[s,a,r]),S=(0,o.useCallback)((e=>{g((t=>{const n={...t};return e===yi?delete n[-1]:n[e]={id:e,crossFilters:{scope:nt.TY,chartsInScope:v.chartsInScope.filter((t=>t!==e))}},n})),s===e&&l(void 0)}),[s,v.chartsInScope]),w=(0,o.useCallback)((()=>{l(yi),m[-1]||g((e=>({...e,[yi]:{id:yi,crossFilters:{scope:v.scope,chartsInScope:v.chartsInScope}}})))}),[m,v.chartsInScope,v.scope]),D=(0,o.useCallback)((e=>{if((0,ai.A)(s)){var t;const n=(0,nt.YD)(null==(t=m[s])?void 0:t.crossFilters.scope)?v.scope:m[s].crossFilters.scope,i={rootPath:n.rootPath,excluded:[...n.excluded.filter((e=>e!==s)),e]},o={id:e,crossFilters:{scope:i,chartsInScope:(0,si._)(i,a,r)}};g((t=>{const n={...t,[e]:o};return s===yi?delete n[-1]:n[s]={id:s,crossFilters:{scope:nt.TY,chartsInScope:v.chartsInScope.filter((e=>e!==s))}},n})),l(e)}}),[m,a,s,v.chartsInScope,v.scope,r]),I=(0,o.useMemo)((()=>{var e,t,n,i;const r=v.scope;return(0,ai.A)(s)?(0,nt.YD)(null==(e=m[s])||null==(t=e.crossFilters)?void 0:t.scope)?Li(s,r):null==(n=m[s])||null==(i=n.crossFilters)?void 0:i.scope:r}),[m,s,v.scope]);return(0,H.Y)(en.A,{onHide:n,show:t,title:(0,h.t)("Cross-filtering scoping"),onHandledPrimaryAction:x,primaryButtonName:(0,h.t)("Save"),responsive:!0,destroyOnClose:!0,bodyStyle:{padding:0,height:700},children:(0,H.Y)(Vi,{chartConfigs:m,currentScope:I,onScopeUpdate:C,chartId:s,setCurrentChartId:l,onSelectChange:D,removeCustomScope:S,addNewCustomScope:w})})},Wi=e=>{const[t,n]=(0,o.useState)(!1),i=(0,o.useCallback)((()=>n(!0)),[]),r=(0,o.useCallback)((()=>n(!1)),[]);return[i,t?(0,H.Y)(ji,{initialChartId:e,closeModal:r,isVisible:t}):null]},Bi="Tab",Ki=a.I4.div`
  padding: ${({theme:e})=>e.gridUnit/4}px
    ${({theme:e})=>1.5*e.gridUnit}px;

  .dot {
    display: block;

    height: ${({theme:e})=>e.gridUnit}px;
    width: ${({theme:e})=>e.gridUnit}px;
    border-radius: 50%;
    margin: ${({theme:e})=>e.gridUnit/2}px 0;

    background-color: ${({theme:e})=>e.colors.text.label};
  }

  &:hover {
    cursor: pointer;
  }
`,Gi=a.I4.div`
  height: auto;
  margin: ${({theme:e})=>e.gridUnit}px 0;
  color: ${({theme:e})=>e.colors.grayscale.base};
  line-height: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`,Qi=()=>(0,H.FD)(Ki,{children:[(0,H.Y)("span",{className:"dot"}),(0,H.Y)("span",{className:"dot"}),(0,H.Y)("span",{className:"dot"})]}),Xi=s.AH`
  &&.anticon > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`,Zi=e=>{const t=null==e?void 0:e.props;return t?Object.values(t).filter((e=>(0,Xe.Np)(e))):[]},Ji=(e,t)=>{const n=t||[];return(0,Qn.A)(e).forEach((e=>{var t;const i=(0,Xe.eJ)(e),r=Zi(e);if(i){const{key:t}=e;t&&n.push({key:t})}if(r.length&&n.push(...r.map((e=>({key:e.current.props.eventKey,ref:e})))),null!=e&&null!=(t=e.props)&&t.children){const t=Ji(e.props.children,n);n.push(...t)}})),n},er=(e,t,n,i="up")=>{var r;const o="up"===i?-1:1,a="up"===i?-2:2,s="up"===i?0:e.length,l="up"===i?Math.max:Math.min;let d,c=e[l(n+o,s)];if(!c)return{selectedKey:e[0],openKey:void 0};if((null==(r=t[c])?void 0:r.type)===Xe.DJ.SubMenu&&(c=e[l(n+a,s)]),(0,Xe.YX)(t[c].type)){const e=t[c].parent;e&&(d=e)}else d=void 0;return{selectedKey:c,openKey:d}},tr=({canExplore:e,exploreUrl:t,triggerNode:n,modalTitle:i,modalBody:r,showModal:l=!1,setShowModal:d})=>{const c=(0,Vn.W6)(),u=(0,a.DP)(),p=(0,o.useCallback)((()=>d(!0)),[]),m=(0,o.useCallback)((()=>d(!1)),[]);return(0,H.FD)(H.FK,{children:[(0,H.Y)("span",{onClick:p,role:"button",tabIndex:0,children:n}),(0,H.Y)(en.A,{css:s.AH`
            .ant-modal-body {
              display: flex;
              flex-direction: column;
            }
          `,show:l,onHide:m,closable:!0,title:i,footer:(0,H.FD)(H.FK,{children:[(0,H.Y)(Y.A,{buttonStyle:"secondary",buttonSize:"small",onClick:()=>c.push(t),disabled:!e,tooltip:e?void 0:(0,h.t)("You do not have sufficient permissions to edit the chart"),children:(0,h.t)("Edit chart")}),(0,H.Y)(Y.A,{buttonStyle:"primary",buttonSize:"small",onClick:m,css:s.AH`
                  margin-left: ${2*u.gridUnit}px;
                `,children:(0,h.t)("Close")})]}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*u.gridUnit,minWidth:128*u.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0,children:r})]})},nr=(0,Vn.y)((e=>{var t,n;const[i,r]=(0,o.useState)(!1),[a,l]=(0,o.useState)(!1),[c,p]=(0,o.useState)(!1),[m,g]=(0,o.useState)([]),[f,b]=(0,o.useState)(void 0),[v,y]=Wi(e.slice.slice_id),x=(0,Vn.W6)(),C=(0,o.useRef)(null),S=(0,o.useRef)(null),w=(0,o.useRef)(null),D=(0,o.useRef)(null),I=(0,o.useRef)(null),F=({close:e}={})=>{r(!(e||i)),g([])},$=(0,u.d4)((({dashboardInfo:e})=>e.dash_edit_perm))&&(0,d.G7)(d.TO.DashboardCrossFilters)&&(null==(t=(0,Xn.A)().get(e.slice.viz_type))||null==(n=t.behaviors)?void 0:n.includes(Zn.nS.InteractiveChart)),R=e.supersetCanExplore,k=(0,u.d4)((e=>{var t;return(0,Be.L)("can_samples","Datasource",null==(t=e.user)?void 0:t.roles)})),Y=(0,u.d4)((e=>{var t;return(0,Be.L)("can_drill","Dashboard",null==(t=e.user)?void 0:t.roles)})),M=(R||Y)&&k,A=(0,u.d4)((e=>{var t;return(0,Be.L)("can_view_query","Dashboard",null==(t=e.user)?void 0:t.roles)})),E=(0,u.d4)((e=>{var t;return(0,Be.L)("can_view_chart_as_table","Dashboard",null==(t=e.user)?void 0:t.roles)})),{componentId:_,dashboardId:P,slice:z,isFullSize:U,cachedDttm:O=[],updatedDttm:N=null,addSuccessToast:V=(()=>{}),addDangerToast:L=(()=>{}),supersetCanShare:j=!1,isCached:W=[]}=e,B="table"===z.viz_type,K="pivot_table_v2"===z.viz_type,G=(O||[]).map((e=>Le().utc(e).fromNow())),Q=N?Le().utc(N).fromNow():"",X=[...new Set(W.map((e=>e?(0,h.t)("Cached %s",G):Q?(0,h.t)("Fetched %s",Q):""))||"")],Z=X.map(((e,t)=>(0,H.Y)("div",{children:X.length>1?(0,h.t)("Query %s: %s",t+1,e):e},`tooltip-${t}`))),J=U?(0,h.t)("Exit fullscreen"):(0,h.t)("Enter fullscreen"),ee={zIndex:U?101:99,animationDuration:"0s"},te={};f&&(te.openKeys=f);const ne=(0,H.FD)(Xe.W1,{onClick:({key:t,domEvent:n})=>{switch(F({close:!0}),t){case nt.IG.ForceRefresh:e.updatedDttm&&e.forceRefresh(e.slice.slice_id,e.dashboardId),e.addSuccessToast((0,h.t)("Data refreshed"));break;case nt.IG.ToggleChartDescription:null==e.toggleExpandSlice||e.toggleExpandSlice(e.slice.slice_id);break;case nt.IG.ExploreChart:null==e.logExploreChart||e.logExploreChart(e.slice.slice_id),n.metaKey||n.ctrlKey?(n.preventDefault(),window.open(e.exploreUrl,"_blank")):x.push(e.exploreUrl);break;case nt.IG.ExportCsv:null==e.exportCSV||e.exportCSV(e.slice.slice_id);break;case nt.IG.ExportPivotCsv:null==e.exportPivotCSV||e.exportPivotCSV(e.slice.slice_id);break;case nt.IG.Fullscreen:e.handleToggleFullSize();break;case nt.IG.ExportFullCsv:null==e.exportFullCSV||e.exportFullCSV(e.slice.slice_id);break;case nt.IG.ExportFullXlsx:null==e.exportFullXLSX||e.exportFullXLSX(e.slice.slice_id);break;case nt.IG.ExportXlsx:null==e.exportXLSX||e.exportXLSX(e.slice.slice_id);break;case nt.IG.DownloadAsImage:{const t=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");t&&(t.style.visibility="hidden"),(0,ei.A)((i=e.slice.slice_id,`.dashboard-chart-id-${i}`),e.slice.slice_name,!0)(n).then((()=>{t&&(t.style.visibility="visible")})),null==e.logEvent||e.logEvent(We.C7,{chartId:e.slice.slice_id});break}case nt.IG.CrossFilterScoping:v();break;case nt.IG.ViewResults:a||l(!0);break;case nt.IG.DrillToDetail:p(!c);break;case nt.IG.ViewQuery:C.current&&!C.current.showModal&&C.current.open(n)}var i},selectable:!1,selectedKeys:m,id:`slice_${z.slice_id}-menu`,ref:S,forceSubMenuRender:!0,...te,children:[(0,H.FD)(Xe.W1.Item,{disabled:"loading"===e.chartStatus,style:{height:"auto",lineHeight:"initial"},children:[(0,h.t)("Force refresh"),(0,H.Y)(Gi,{children:Z})]},nt.IG.ForceRefresh),(0,H.Y)(Xe.W1.Item,{children:J},nt.IG.Fullscreen),(0,H.Y)(Xe.W1.Divider,{}),z.description&&(0,H.Y)(Xe.W1.Item,{children:e.isDescriptionExpanded?(0,h.t)("Hide chart description"):(0,h.t)("Show chart description")},nt.IG.ToggleChartDescription),R&&(0,H.Y)(Xe.W1.Item,{children:(0,H.Y)(q.m,{title:ni(e.slice.slice_name),children:(0,h.t)("Edit chart")})},nt.IG.ExploreChart),$&&(0,H.Y)(Xe.W1.Item,{children:(0,h.t)("Cross-filtering scoping")},nt.IG.CrossFilterScoping),(R||$)&&(0,H.Y)(Xe.W1.Divider,{}),(R||A)&&(0,H.Y)(Xe.W1.Item,{children:(0,H.Y)(ht.A,{triggerNode:(0,H.Y)("span",{children:(0,h.t)("View query")}),modalTitle:(0,h.t)("View query"),modalBody:(0,H.Y)(ii.A,{latestQueryFormData:e.formData}),draggable:!0,resizable:!0,responsive:!0,ref:C})},nt.IG.ViewQuery),(R||E)&&(0,H.Y)(Xe.W1.Item,{children:(0,H.Y)(tr,{canExplore:e.supersetCanExplore,exploreUrl:e.exploreUrl,triggerNode:(0,H.Y)("span",{children:(0,h.t)("View as table")}),setShowModal:l,showModal:a,modalTitle:(0,h.t)("Chart Data: %s",z.slice_name),modalBody:(0,H.Y)(ri.ih,{queryFormData:e.formData,queryForce:!1,dataSize:20,isRequest:!0,isVisible:!0,canDownload:!!e.supersetCanCSV})})},nt.IG.ViewResults),(0,d.G7)(d.TO.DrillToDetail)&&M&&(0,H.Y)(oi.k,{chartId:z.slice_id,formData:e.formData,showModal:c,setShowModal:p,drillToDetailMenuRef:I},nt.IG.DrillToDetail),(z.description||R)&&(0,H.Y)(Xe.W1.Divider,{}),j&&(0,H.Y)(Xe.W1.SubMenu,{title:(0,h.t)("Share"),onTitleMouseEnter:()=>b(void 0),children:(0,H.Y)(it,{dashboardId:P,dashboardComponentId:_,copyMenuItemTitle:(0,h.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,h.t)("Share chart by email"),emailSubject:(0,h.t)("Superset chart"),emailBody:(0,h.t)("Check out this chart: "),addSuccessToast:V,addDangerToast:L,copyMenuItemRef:w,shareByEmailMenuItemRef:D,selectedKeys:m.filter((e=>e===nt.IG.CopyLink||e===nt.IG.ShareByEmail))})},nt.IG.Share),e.supersetCanCSV&&(0,H.FD)(Xe.W1.SubMenu,{title:(0,h.t)("Download"),onTitleMouseEnter:()=>b(void 0),children:[(0,H.Y)(Xe.W1.Item,{icon:(0,H.Y)(T.A.FileOutlined,{css:Xi}),children:(0,h.t)("Export to .CSV")},nt.IG.ExportCsv),K&&(0,H.Y)(Xe.W1.Item,{icon:(0,H.Y)(T.A.FileOutlined,{css:Xi}),children:(0,h.t)("Export to Pivoted .CSV")},nt.IG.ExportPivotCsv),(0,H.Y)(Xe.W1.Item,{icon:(0,H.Y)(T.A.FileOutlined,{css:Xi}),children:(0,h.t)("Export to Excel")},nt.IG.ExportXlsx),(0,d.G7)(d.TO.AllowFullCsvExport)&&e.supersetCanCSV&&B&&(0,H.FD)(H.FK,{children:[(0,H.Y)(Xe.W1.Item,{icon:(0,H.Y)(T.A.FileOutlined,{css:Xi}),children:(0,h.t)("Export to full .CSV")},nt.IG.ExportFullCsv),(0,H.Y)(Xe.W1.Item,{icon:(0,H.Y)(T.A.FileOutlined,{css:Xi}),children:(0,h.t)("Export to full Excel")},nt.IG.ExportFullXlsx)]}),(0,H.Y)(Xe.W1.Item,{icon:(0,H.Y)(T.A.FileImageOutlined,{css:Xi}),children:(0,h.t)("Download as image")},nt.IG.DownloadAsImage)]},nt.IG.Download)]});return(0,H.FD)(H.FK,{children:[U&&(0,H.Y)(T.A.FullscreenExitOutlined,{style:{fontSize:22},onClick:()=>{e.handleToggleFullSize()}}),(0,H.Y)(Jn.R2,{overlay:ne,overlayStyle:ee,trigger:["click"],placement:"bottomRight",visible:i,onVisibleChange:e=>F({close:!e}),onKeyDown:e=>((e,t,n,i,r,o)=>{if(e.key===Bi&&!t)return;const a=n.props||{},s=(e=>{const t={};return(0,Qn.A)(e).forEach((e=>{var n;const i=(0,Xe.eJ)(e),r=(0,Xe.ez)(e),o=Zi(e);if(i||r){const n=null==e?void 0:e.key;n&&(t[n]={},t[n].type=r?Xe.DJ.SubMenu:Xe.DJ.MenuItem)}if(o.length&&o.forEach((n=>{const i=n.current.props.eventKey;t[i]={},t[i].type=r?Xe.DJ.SubMenu:Xe.DJ.MenuItem,t[i].parent=e.key,t[i].ref=n})),null!=e&&null!=(n=e.props)&&n.children){var a;const n=null==e||null==(a=e.props)?void 0:a.children;Ji(n).forEach((n=>{const i=n.key;t[i]={},t[i].type=Xe.DJ.SubMenuItem,t[i].parent=e.key,n.ref&&(t[i].ref=n.ref)}))}})),t})(a.children),l=Object.keys(s),{selectedKeys:d=[]}=a,c=l.indexOf(d[0]);switch(e.key){case"Enter":case"Spacebar":case" ":if(d.length){const t=d[0],n=s[d];if(null==a.onClick||a.onClick({key:t,domEvent:e}),null!=n&&n.ref){const i=n.ref.current.props;null==i.onClick||i.onClick({key:t,domEvent:e})}r([]),o([]),e.currentTarget.focus()}i();break;case"ArrowDown":case Bi&&!e.shiftKey:{const{selectedKey:e,openKey:t}=er(l,s,c,"down");r([e]),o(t?[t]:[]);break}case"ArrowUp":case Bi&&e.shiftKey:{const{selectedKey:e,openKey:t}=er(l,s,c,"up");r([e]),o(t?[t]:[]);break}case"Escape":i()}})(e,i,ne,F,g,b),children:(0,H.Y)("span",{css:()=>s.AH`
            display: flex;
            align-items: center;
          `,id:`slice_${z.slice_id}-controls`,role:"button","aria-label":"More Options","aria-haspopup":"true",tabIndex:0,children:(0,H.Y)(Qi,{})})}),$&&y]})}));var ir=n(9063),rr=n.n(ir),or=n(83505),ar=n(69945);a.I4.div`
  ${({theme:e})=>s.AH`
    display: flex;
    color: ${e.colors.grayscale.light5};
    background: ${e.colors.grayscale.base};
    border-radius: 1em;
    vertical-align: text-top;
    padding: ${e.gridUnit}px ${2*e.gridUnit}px;
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
    min-width: 1em;
    min-height: 1em;
    line-height: 1em;
    vertical-align: middle;
    white-space: nowrap;

    svg {
      position: relative;
      color: ${e.colors.grayscale.light5};
      width: 1em;
      height: 1em;
      display: inline-block;
      vertical-align: middle;
    }

    &:hover {
      cursor: pointer;
      background: ${e.colors.grayscale.dark1};
    }

    &.has-cross-filters {
      background: ${e.colors.primary.base};
      &:hover {
        background: ${e.colors.primary.dark1};
      }
    }
  `}
`;const sr=a.I4.span`
  ${({theme:e})=>s.AH`
    font-weight: ${e.typography.weights.bold};
  `}
`,lr=a.I4.span`
  ${({theme:e})=>s.AH`
    padding-right: ${e.gridUnit}px;
    font-style: italic;
    & > * {
      margin-right: ${e.gridUnit}px;
    }
  `}
`,dr=a.I4.button`
  ${({theme:e})=>s.AH`
    cursor: pointer;
    display: flex;
    text-align: left;
    padding: 0;
    border: none;
    background: none;
    outline: none;
    width: 100%;

    &::-moz-focus-inner {
      border: 0;
    }

    & i svg {
      opacity: ${e.opacity.mediumLight};
      margin-right: ${e.gridUnit}px;
      transition: opacity ease-in-out ${e.transitionTiming};
    }

    &:hover i svg,
    &:focus-visible i svg {
      opacity: 1;
    }
  `}
`,cr=a.I4.div`
  ${({theme:e})=>s.AH`
    margin-top: ${e.gridUnit}px;
    &:not(:last-child) {
      padding-bottom: ${3*e.gridUnit}px;
    }
  `}
`,hr=a.I4.div`
  ${({theme:e})=>s.AH`
    min-width: 200px;
    max-width: 300px;
    overflow-x: hidden;

    color: ${e.colors.grayscale.light5};
  `}
`,ur=a.I4.span`
  max-width: 100%;
  flex-grow: 1;
  overflow: auto;
`,pr=a.I4.div`
  ${({theme:e})=>s.AH`
    width: 100%;
    height: 1px;
    background-color: ${e.colors.grayscale.light1};
    margin: ${4*e.gridUnit}px 0;
  `}
`;var mr=n(25062);const gr=(0,o.forwardRef)((({indicator:{column:e,name:t,value:n,path:i=[]},onClick:r},o)=>{const a=(0,mr.Pz)(n);return(0,H.FD)(dr,{ref:o,onClick:r?()=>r([...i,`LABEL-${e}`]):void 0,tabIndex:-1,children:[r&&(0,H.Y)("i",{children:(0,H.Y)(T.A.SearchOutlined,{iconSize:"m",css:s.AH`
                span {
                  vertical-align: 0;
                }
              `})}),(0,H.FD)("div",{children:[(0,H.FD)(lr,{children:[t,a?": ":""]}),(0,H.Y)(ur,{children:a})]})]})})),fr=({appliedCrossFilterIndicators:e=[],appliedIndicators:t=[],onHighlightFilterSource:n,children:i,popoverVisible:r,popoverContentRef:a,popoverTriggerRef:l,setPopoverVisible:d})=>{const c=(0,u.d4)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs})),p=(0,o.useRef)([]);(0,o.useEffect)((()=>{r&&window.addEventListener("resize",(()=>d(!1)),{once:!0})}),[r]),(0,o.useEffect)((()=>{d(!1)}),[c]);const m=e=>`${e.column} - ${e.name}`,g=(0,H.FD)(hr,{ref:a,tabIndex:-1,onMouseLeave:()=>d(!1),onKeyDown:e=>{switch(e.key){case"Escape":case"Enter":setTimeout((()=>{var e;null==l||null==(e=l.current)||e.focus(),d(!1)}));break;case"ArrowDown":case"ArrowUp":{var t;e.preventDefault();const n=p.current.findIndex((e=>e===document.activeElement)),i=p.current.length-1;let r=0;"ArrowDown"===e.key?r=n>=i?0:n+1:"ArrowUp"===e.key&&(r=n<=0?i:n-1),null==(t=p.current[r])||t.focus();break}case"Tab":e.preventDefault()}},role:"menu",children:[(0,H.Y)(s.mL,{styles:e=>(0,s.AH)(".filterStatusPopover{.ant-popover-inner{background-color:",e.colors.grayscale.dark2,"cc;.ant-popover-inner-content{padding:",2*e.gridUnit,"px;}}&.ant-popover-placement-bottom,&.ant-popover-placement-bottomLeft,&.ant-popover-placement-bottomRight{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-top,&.ant-popover-placement-topLeft,&.ant-popover-placement-topRight{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-left,&.ant-popover-placement-leftTop,&.ant-popover-placement-leftBottom{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-right,&.ant-popover-placement-rightTop,&.ant-popover-placement-rightBottom{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover{color:",e.colors.grayscale.light4,";z-index:99;}}","")}),(0,H.FD)("div",{children:[e.length?(0,H.FD)("div",{children:[(0,H.Y)(sr,{children:(0,h.t)("Applied cross-filters (%d)",e.length)}),(0,H.Y)(cr,{children:e.map((e=>(0,H.Y)(gr,{ref:e=>p.current.push(e),indicator:e,onClick:n},m(e))))})]}):null,e.length&&t.length?(0,H.Y)(pr,{}):null,t.length?(0,H.FD)("div",{children:[(0,H.Y)(sr,{children:(0,h.t)("Applied filters (%d)",t.length)}),(0,H.Y)(cr,{children:t.map((e=>(0,H.Y)(gr,{ref:e=>p.current.push(e),indicator:e,onClick:n},m(e))))})]}):null]})]});return(0,H.Y)(An.A,{overlayClassName:"filterStatusPopover",content:g,visible:r,onVisibleChange:e=>{d(e)},placement:"bottomRight",trigger:["hover"],children:i})};var br,vr=n(96627),yr=n(86444),xr=n(73992),Cr=n(95483);!function(e){e.Unset="UNSET",e.Applied="APPLIED",e.Incompatible="INCOMPATIBLE",e.CrossFilterApplied="CROSS_FILTER_APPLIED"}(br||(br={}));const Sr=new Set(Object.values(Cr.II)),wr=e=>{var t;return null==e||!e.label||null!=e&&null!=(t=e.label)&&t.includes(void 0)?null!=e&&e.value?(0,Qn.A)(null==e?void 0:e.value).join(", "):null:e.label},Dr=(e,t,n)=>{const i=t.columns[e],r=Array.isArray(i)?i:[i];if(null==i||t.isDateFilter&&i===vr.WC||0===r.length)return[];if(t.isDateFilter&&Sr.has(e)){const t=((e===Cr.II.time_grain_sqla?n.time_grain_sqla:n.granularity)||[]).reduce(((e,[t,n])=>({...e,[t]:n})),{});return r.map((e=>t[e]||e))}return r},Ir=e=>{var t,n;return new Set(((null==e||null==(t=e.queriesResponse)||null==(n=t[0])?void 0:n.applied_filters)||[]).map((e=>e.column)))},Fr=e=>{var t,n;return new Set(((null==e||null==(t=e.queriesResponse)||null==(n=t[0])?void 0:n.rejected_filters)||[]).map((e=>(0,yr.A)(e.column))))},$r=(e,t,n)=>{var i,r,o,a,s;const l=null==t?void 0:t.filterState,d=null==t||null==(i=t.extraFormData)?void 0:i.filters,c=wr(l),h=null==l?void 0:l.filters,u=(null==d||null==(r=d[0])?void 0:r.col)||h&&Object.keys(h)[0],p=Object.values(n).find((t=>{var n;return(null==t||null==(n=t.meta)?void 0:n.chartId)===e}));return{column:u,name:(null==p||null==(o=p.meta)?void 0:o.sliceNameOverride)||(null==p||null==(a=p.meta)?void 0:a.sliceName)||"",path:[...null!=(s=null==p?void 0:p.parents)?s:[],(null==p?void 0:p.id)||""],value:c}},Rr={},kr={},Yr=({label:e,column:t,type:n=xr.p_.NativeFilters,rejectedColumns:i,appliedColumns:r})=>{const o=null!==e,a=n===xr.p_.CrossFilters?br.CrossFilterApplied:br.Applied;return!t&&o?a:t&&null!=i&&i.has(t)?br.Incompatible:t&&null!=r&&r.has(t)&&o?a:br.Unset},Tr={},Mr={},Ar={},Er=a.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    cursor: pointer;\n    margin-right: ${e.gridUnit}px;\n    padding-left: ${2*e.gridUnit}px;\n    padding-right: ${2*e.gridUnit}px;\n    background: ${e.colors.grayscale.light4};\n    border-radius: 4px;\n    height: 100%;\n    .anticon {\n      vertical-align: middle;\n      color: ${e.colors.grayscale.base};\n      &:hover {\n        color: ${e.colors.grayscale.light1};\n      }\n    }\n\n    .incompatible-count {\n      font-size: ${e.typography.sizes.s}px;\n    }\n    &:focus-visible {\n      outline: 2px solid ${e.colors.primary.dark2};\n    }\n  `}
`,_r=(0,a.I4)(ar.A)`
  ${({theme:e})=>`\n    margin-left: ${2*e.gridUnit}px;\n    &>sup.antd5-badge-count {\n      padding: 0 ${e.gridUnit}px;\n      min-width: ${4*e.gridUnit}px;\n      height: ${4*e.gridUnit}px;\n      line-height: 1.5;\n      font-weight: ${e.typography.weights.medium};\n      font-size: ${e.typography.sizes.s-1}px;\n      box-shadow: none;\n      padding: 0 ${e.gridUnit}px;\n    }\n  `}
`,Pr=[],zr=({chartId:e})=>{const t=(0,u.wA)(),n=(0,u.d4)((e=>e.datasources)),i=(0,u.d4)((e=>e.dashboardFilters)),a=(0,u.d4)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters})),s=(0,u.d4)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),l=(0,u.d4)((t=>t.charts[e])),c=(0,u.d4)((e=>e.dashboardLayout.present)),p=(0,u.d4)((e=>e.dataMask)),[m,g]=(0,o.useState)(Pr),[f,b]=(0,o.useState)(Pr),[v,y]=(0,o.useState)(!1),x=(0,o.useRef)(null),C=(0,o.useRef)(null),S=(0,o.useCallback)((e=>{t((0,Dn.I)(e))}),[t]),w=(0,or.Z)(l),D=null==w?void 0:w.chartStatus,I=(0,or.Z)(i),F=(0,or.Z)(n),$=(null==l?void 0:l.chartStatus)&&["rendered","success"].includes(l.chartStatus);(0,o.useEffect)((()=>{v&&setTimeout((()=>{var e;null==x||null==(e=x.current)||e.focus({preventScroll:!0})}))}),[v]),(0,o.useEffect)((()=>{if(!$&&f.length>0)b(Pr);else if("success"!==D){var t,r,o,a,s,d,c,h;(null==l||null==(t=l.queriesResponse)||null==(r=t[0])?void 0:r.rejected_filters)===(null==w||null==(o=w.queriesResponse)||null==(a=o[0])?void 0:a.rejected_filters)&&(null==l||null==(s=l.queriesResponse)||null==(d=s[0])?void 0:d.applied_filters)===(null==w||null==(c=w.queriesResponse)||null==(h=c[0])?void 0:h.applied_filters)&&i===I&&n===F||b(((e,t,n,i)=>{const r=Ir(i),o=Fr(i),a=Object.values(t).filter((t=>t.chartId!==e)),s=Object.entries(n).filter((([e])=>a.find((t=>t.datasourceId===e)))).map((([,e])=>e)),l=kr[e];if(Rr[e]&&(0,Wn.r$)(null==l?void 0:l.appliedColumns,r)&&(0,Wn.r$)(null==l?void 0:l.rejectedColumns,o)&&(0,Wn.r$)(null==l?void 0:l.matchingFilters,a)&&(0,Wn.r$)(null==l?void 0:l.matchingDatasources,s))return Rr[e];const d=a.reduce(((t,i)=>t.concat(((e,t,n,i,r)=>{const o=(e,t)=>i.has(e)&&t.columns[e]?br.Applied:r.has(e)?br.Incompatible:br.Unset;return Object.keys(t.columns).filter((n=>(0,_t._i)({filterScope:t.scopes[n]}).includes(e))).map((e=>({column:e,name:t.labels[e]||e,value:Dr(e,t,n),status:o(e,t),path:t.directPathToFilter})))})(e,i,n[i.datasourceId]||{},r,o))),[]);return d.sort(((e,t)=>e.name.localeCompare(t.name))),Rr[e]=d,kr[e]={appliedColumns:r,rejectedColumns:o,matchingFilters:a,matchingDatasources:s},d})(e,i,n,l))}}),[l,e,i,f.length,n,null==w?void 0:w.queriesResponse,D,I,F,$]);const R=(0,or.Z)(a),k=(0,or.Z)(c),Y=(0,or.Z)(p),M=(0,or.Z)(s);(0,o.useEffect)((()=>{if(!$&&m.length>0)g(Pr);else if("success"!==D){var t,n,i,r,o,h,u,f;(null==l||null==(t=l.queriesResponse)||null==(n=t[0])?void 0:n.rejected_filters)===(null==w||null==(i=w.queriesResponse)||null==(r=i[0])?void 0:r.rejected_filters)&&(null==l||null==(o=l.queriesResponse)||null==(h=o[0])?void 0:h.applied_filters)===(null==w||null==(u=w.queriesResponse)||null==(f=u[0])?void 0:f.applied_filters)&&a===R&&c===k&&p===Y&&M===s||g(((e,t,n,i,r,o=Tr)=>{const a=Ir(i),s=Fr(i),l=Ar[n];if(Mr[n]&&(0,Wn.r$)(null==l?void 0:l.appliedColumns,a)&&(0,Wn.r$)(null==l?void 0:l.rejectedColumns,s)&&(null==l?void 0:l.nativeFilters)===e&&(null==l?void 0:l.dashboardLayout)===r&&(null==l?void 0:l.chartConfiguration)===o&&(null==l?void 0:l.dataMask)===t)return Mr[n];const c=e&&Object.values(e).filter((e=>{var t;return e.type===xr.EH.NativeFilter&&(null==(t=e.chartsInScope)?void 0:t.includes(n))})).map((e=>{var n,i,r,o;const l=null==(n=e.targets)||null==(i=n[0])||null==(r=i.column)?void 0:r.name,d=null==(o=t[e.id])?void 0:o.filterState,c=wr(d);return{column:l,name:e.name,path:[e.id],status:Yr({label:c,column:l,rejectedColumns:s,appliedColumns:a}),value:c}}));let h=[];(0,d.G7)(d.TO.DashboardCrossFilters)&&(h=((e,t,n,i=Tr,r,o,a=!1)=>{let s=[];return(0,d.G7)(d.TO.DashboardCrossFilters)&&(s=Object.values(i).filter((e=>{var n,i;const r=null==(n=e.crossFilters)||null==(i=n.chartsInScope)?void 0:i.includes(t);return!(a||!r)||!(!a||r)})).map((t=>{const i=$r(Number(t.id),e[t.id],n),a=Yr({label:i.value,column:i.column?(0,yr.A)(i.column):void 0,type:xr.p_.CrossFilters,appliedColumns:r,rejectedColumns:o});return{...i,status:a}})).filter((e=>e.status===br.CrossFilterApplied))),s})(t,n,r,o,a,s));const u=h.concat(c);return Mr[n]=u,Ar[n]={nativeFilters:e,dashboardLayout:r,chartConfiguration:o,dataMask:t,appliedColumns:a,rejectedColumns:s},u})(a,p,e,l,c,s))}}),[l,e,s,p,a,m.length,c,null==w?void 0:w.queriesResponse,M,D,k,Y,R,$]);const A=(0,o.useMemo)((()=>rr()((e=>{const t=[br.Applied,br.Unset,br.Incompatible];return e.sort(((e,n)=>t.indexOf(e.status)-t.indexOf(n.status)))})([...f,...m]),((e,t)=>e.column===t.column&&e.name===t.name&&(e.status!==br.Applied||t.status!==br.Applied)))),[f,m]),E=(0,o.useMemo)((()=>A.filter((e=>e.status===br.CrossFilterApplied))),[A]),_=(0,o.useMemo)((()=>A.filter((e=>e.status===br.Applied))),[A]),P=_.length+E.length;return E.length||_.length?(0,H.Y)(fr,{appliedCrossFilterIndicators:E,appliedIndicators:_,onHighlightFilterSource:S,setPopoverVisible:y,popoverVisible:v,popoverContentRef:x,popoverTriggerRef:C,children:(0,H.FD)(Er,{"aria-label":(0,h.t)("Applied filters (%s)",P),"aria-haspopup":"true",role:"button",ref:C,className:r()("filter-counts",!!E.length&&"has-cross-filters"),tabIndex:0,onKeyDown:e=>{"Enter"===e.key&&y(!0)},children:[(0,H.Y)(T.A.Filter,{iconSize:"m"}),(0,H.Y)(_r,{className:"applied-count",count:P,showZero:!0})]})}):null},Ur=(0,o.memo)(zr);var Or=n(94229);const qr=(0,je.a)(),Nr=(0,h.t)("Annotation layers are still loading."),Hr=(0,h.t)("One or more annotation layers failed loading."),Vr=(0,a.I4)(T.A.ApartmentOutlined)`
  ${({theme:e})=>`\n    cursor: default;\n    color: ${e.colors.primary.base};\n    line-height: 1.8;\n  `}
`,Lr=a.I4.div`
  ${({theme:e})=>s.AH`
    font-size: ${e.typography.sizes.l}px;
    font-weight: ${e.typography.weights.bold};
    margin-bottom: ${e.gridUnit}px;
    display: flex;
    max-width: 100%;
    align-items: flex-start;
    min-height: 0;

    & > .header-title {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      flex-grow: 1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      & > span.ant-tooltip-open {
        display: inline;
      }
    }

    & > .header-controls {
      display: flex;
      align-items: center;
      height: 24px;

      & > * {
        margin-left: ${2*e.gridUnit}px;
      }
    }

    .dropdown.btn-group {
      pointer-events: none;
      vertical-align: top;
      & > * {
        pointer-events: auto;
      }
    }

    .dropdown-toggle.btn.btn-default {
      background: none;
      border: none;
      box-shadow: none;
    }

    .dropdown-menu.dropdown-menu-right {
      top: ${5*e.gridUnit}px;
    }

    .divider {
      margin: ${e.gridUnit}px 0;
    }

    .refresh-tooltip {
      display: block;
      height: ${4*e.gridUnit}px;
      margin: ${e.gridUnit}px 0;
      color: ${e.colors.text.label};
    }
  `}
`,jr=({innerRef:e=null,forceRefresh:t=(()=>({})),updateSliceName:n=(()=>({})),toggleExpandSlice:i=(()=>({})),logExploreChart:r=(()=>({})),logEvent:a,exportCSV:s=(()=>({})),exportXLSX:l=(()=>({})),editMode:d=!1,annotationQuery:c={},annotationError:p={},cachedDttm:m=null,updatedDttm:g=null,isCached:f=[],isExpanded:b=!1,sliceName:v="",supersetCanExplore:y=!1,supersetCanShare:x=!1,supersetCanCSV:C=!1,exportPivotCSV:S,exportFullCSV:w,exportFullXLSX:D,slice:I,componentId:F,dashboardId:$,addSuccessToast:R,addDangerToast:k,handleToggleFullSize:Y,isFullSize:T,chartStatus:M,formData:A,width:E,height:_})=>{const P=qr.get("dashboard.slice.header"),z=(0,Kn.Q1)(),U=(0,o.useContext)(Or.DashboardPageIdContext),[O,N]=(0,o.useState)(null),V=(0,o.useRef)(null),L=(0,u.d4)((e=>{var t,n;return null==(t=e.dataMask[null==I?void 0:I.slice_id])||null==(n=t.filterState)?void 0:n.value})),j=(0,u.d4)((({dashboardInfo:e})=>e.crossFiltersEnabled)),W=!d&&y;(0,o.useEffect)((()=>{const e=V.current;W?N(ni(v)):e&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight)?N(null!=v?v:null):N(null)}),[v,E,_,W]);const B=`/explore/?dashboard_page_id=${U}&slice_id=${I.slice_id}`;return(0,H.FD)(Lr,{ref:e,children:[(0,H.FD)("div",{className:"header-title",ref:V,children:[(0,H.Y)(q.m,{title:O,children:(0,H.Y)(Gn.A,{title:v||(d?"---":""),canEdit:d,onSaveTitle:n,showTooltip:!1,url:W?B:void 0})}),!!Object.values(c).length&&(0,H.Y)(q.m,{id:"annotations-loading-tooltip",placement:"top",title:Nr,children:(0,H.Y)("i",{role:"img","aria-label":Nr,className:"fa fa-refresh warning"})}),!!Object.values(p).length&&(0,H.Y)(q.m,{id:"annotation-errors-tooltip",placement:"top",title:Hr,children:(0,H.Y)("i",{role:"img","aria-label":Hr,className:"fa fa-exclamation-circle danger"})})]}),(0,H.Y)("div",{className:"header-controls",children:!d&&(0,H.FD)(H.FK,{children:[P&&(0,H.Y)(P,{sliceId:I.slice_id,dashboardId:$}),L&&(0,H.Y)(q.m,{placement:"top",title:(0,h.t)("This chart applies cross-filters to charts whose datasets contain columns with the same name."),children:(0,H.Y)(Vr,{iconSize:"m"})}),!z.hideChartControls&&(0,H.Y)(Ur,{chartId:I.slice_id}),!z.hideChartControls&&(0,H.Y)(nr,{slice:I,isCached:f,isExpanded:b,cachedDttm:m,updatedDttm:g,toggleExpandSlice:i,forceRefresh:t,logExploreChart:r,logEvent:a,exportCSV:s,exportPivotCSV:S,exportFullCSV:w,exportXLSX:l,exportFullXLSX:D,supersetCanExplore:y,supersetCanShare:x,supersetCanCSV:C,componentId:F,dashboardId:$,addSuccessToast:R,addDangerToast:k,handleToggleFullSize:Y,isFullSize:T,isDescriptionExpanded:b,chartStatus:M,formData:A,exploreUrl:B,crossFiltersEnabled:j})]})})]})},Wr={height:w().number.isRequired};function Br({height:e}){return(0,H.Y)("div",{className:"missing-chart-container",style:{height:e+20},children:(0,H.FD)("div",{className:"missing-chart-body",children:[(0,h.t)("There is no chart definition associated with this component, could it have been deleted?"),(0,H.Y)("br",{}),(0,H.Y)("br",{}),(0,h.t)("Delete this container and save to remove this message.")]})})}Br.propTypes=Wr;const Kr={id:w().number.isRequired,componentId:w().string.isRequired,dashboardId:w().number.isRequired,width:w().number.isRequired,height:w().number.isRequired,updateSliceName:w().func.isRequired,isComponentVisible:w().bool,handleToggleFullSize:w().func.isRequired,setControlValue:w().func,chart:_.tb.isRequired,formData:w().object.isRequired,labelsColor:w().object,labelsColorMap:w().object,datasource:w().object,slice:_.VE.isRequired,sliceName:w().string.isRequired,timeout:w().number.isRequired,maxRows:w().number.isRequired,filters:w().object.isRequired,refreshChart:w().func.isRequired,logEvent:w().func.isRequired,toggleExpandSlice:w().func.isRequired,changeFilter:w().func.isRequired,setFocusedFilterField:w().func.isRequired,unsetFocusedFilterField:w().func.isRequired,editMode:w().bool.isRequired,isExpanded:w().bool.isRequired,isCached:w().bool,supersetCanExplore:w().bool.isRequired,supersetCanShare:w().bool.isRequired,supersetCanCSV:w().bool.isRequired,addSuccessToast:w().func.isRequired,addDangerToast:w().func.isRequired,ownState:w().object,filterState:w().object,postTransformProps:w().func,datasetsStatus:w().oneOf(["loading","error","complete"]),isInView:w().bool,emitCrossFilters:w().bool},Gr=Object.keys(Kr).filter((e=>"width"!==e&&"height"!==e&&"isComponentVisible"!==e)),Qr=a.I4.div`
  overflow: hidden;
  position: relative;

  &.dashboard-chart--overflowable {
    overflow: visible;
  }
`,Xr=a.I4.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`,Zr=a.I4.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;class Jr extends o.Component{constructor(e){super(e),this.logExploreChart=()=>{this.props.logEvent(We.tw,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached})},this.onExploreChart=async e=>{const t=e.shiftKey||e.ctrlKey||e.metaKey;try{const e=window.localStorage.getItem("last_tab_id"),n=e?String(Number.parseInt(e,10)+1):void 0,i=await(0,Bn.T3)(this.props.datasource.id,this.props.datasource.type,this.props.formData,this.props.slice.slice_id,n),r=(0,Ln.eX)(null,{[Ze.vX.formDataKey.name]:i,[Ze.vX.sliceId.name]:this.props.slice.slice_id});t?window.open(r,"_blank","noreferrer"):this.props.history.push(r)}catch(e){et.A.error(e),this.props.addDangerToast((0,h.t)("An error occurred while opening Explore"))}},this.state={width:e.width,height:e.height,descriptionHeight:0},this.changeFilter=this.changeFilter.bind(this),this.handleFilterMenuOpen=this.handleFilterMenuOpen.bind(this),this.handleFilterMenuClose=this.handleFilterMenuClose.bind(this),this.exportCSV=this.exportCSV.bind(this),this.exportPivotCSV=this.exportPivotCSV.bind(this),this.exportFullCSV=this.exportFullCSV.bind(this),this.exportXLSX=this.exportXLSX.bind(this),this.exportFullXLSX=this.exportFullXLSX.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.resize=C()(this.resize.bind(this),500),this.setDescriptionRef=this.setDescriptionRef.bind(this),this.setHeaderRef=this.setHeaderRef.bind(this),this.getChartHeight=this.getChartHeight.bind(this),this.getDescriptionHeight=this.getDescriptionHeight.bind(this)}shouldComponentUpdate(e,t){var n,i,r,o,a,s,l,d,c;if(t.width!==this.state.width||t.height!==this.state.height||t.descriptionHeight!==this.state.descriptionHeight||!Hn()(e.datasource,this.props.datasource))return!0;if((null==(n=this.props)||null==(i=n.chart)?void 0:i.chartStatus)!==(null==e||null==(r=e.chart)?void 0:r.chartStatus)&&"loading"===(null==(o=this.props)||null==(a=o.chart)?void 0:a.chartStatus))return!0;if(e.isComponentVisible){if(e.chart.triggerQuery)return!0;if(e.isFullSize!==this.props.isFullSize)return this.resize(),!1;e.width===this.props.width&&e.height===this.props.height&&e.width===this.state.width&&e.height===this.state.height||this.resize();for(let t=0;t<Gr.length;t+=1){const n=Gr[t];if(!(0,Wn.r$)(e[n],this.props[n]))return!0}}else if((null==(s=e.formData)?void 0:s.color_scheme)!==(null==(l=this.props.formData)?void 0:l.color_scheme)||!(0,Wn.r$)(null==(d=e.formData)?void 0:d.label_colors,null==(c=this.props.formData)?void 0:c.label_colors))return!0;return this.props.cacheBusterProp!==e.cacheBusterProp}componentDidMount(){if(this.props.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}componentWillUnmount(){this.resize.cancel()}componentDidUpdate(e){if(this.props.isExpanded!==e.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}getDescriptionHeight(){return this.props.isExpanded&&this.descriptionRef?this.descriptionRef.offsetHeight:0}getChartHeight(){const e=this.getHeaderHeight();return Math.max(this.state.height-e-this.state.descriptionHeight,20)}getHeaderHeight(){if(this.headerRef){const e=getComputedStyle(this.headerRef).getPropertyValue("margin-bottom"),t=parseInt(e,10)||0;return this.headerRef.offsetHeight+t}return 22}setDescriptionRef(e){this.descriptionRef=e}setHeaderRef(e){this.headerRef=e}resize(){const{width:e,height:t}=this.props;this.setState((()=>({width:e,height:t})))}changeFilter(e={}){this.props.logEvent(We.c1,{id:this.props.chart.id,columns:Object.keys(e).filter((t=>null!==e[t]))}),this.props.changeFilter(this.props.chart.id,e)}handleFilterMenuOpen(e,t){this.props.setFocusedFilterField(e,t)}handleFilterMenuClose(e,t){this.props.unsetFocusedFilterField(e,t)}exportFullCSV(){this.exportCSV(!0)}exportCSV(e=!1){this.exportTable("csv",e)}exportPivotCSV(){this.exportTable("csv",!1,!0)}exportXLSX(){this.exportTable("xlsx",!1)}exportFullXLSX(){this.exportTable("xlsx",!0)}exportTable(e,t,n=!1){const i="csv"===e?We.r2:We.wc;this.props.logEvent(i,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),(0,Ln.RY)({formData:t?{...this.props.formData,row_limit:this.props.maxRows}:this.props.formData,resultType:n?"post_processed":"full",resultFormat:e,force:!0,ownState:this.props.ownState})}forceRefresh(){return this.props.logEvent(We.ky,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),this.props.refreshChart(this.props.chart.id,!0,this.props.dashboardId)}render(){const{id:e,componentId:t,dashboardId:n,chart:i,slice:o,datasource:a,isExpanded:s,editMode:l,filters:d,formData:c,labelsColor:h,labelsColorMap:u,updateSliceName:p,sliceName:m,toggleExpandSlice:g,timeout:f,supersetCanExplore:b,supersetCanShare:v,supersetCanCSV:y,addSuccessToast:x,addDangerToast:C,ownState:S,filterState:w,handleToggleFullSize:D,isFullSize:I,setControlValue:F,postTransformProps:$,datasetsStatus:R,isInView:k,emitCrossFilters:Y,logEvent:T}=this.props,{width:M}=this.state;if(!i||!o)return(0,H.Y)(Br,{height:this.getChartHeight()});const{queriesResponse:A,chartUpdateEndTime:E,chartStatus:_}=i,P="loading"===_,z=(null==A?void 0:A.map((({is_cached:e})=>e)))||[],U=(null==A?void 0:A.map((({cached_dttm:e})=>e)))||[];return(0,H.FD)(Zr,{className:"chart-slice","data-test-chart-id":e,"data-test-viz-type":o.viz_type,"data-test-chart-name":o.slice_name,children:[(0,H.Y)(jr,{innerRef:this.setHeaderRef,slice:o,isExpanded:s,isCached:z,cachedDttm:U,updatedDttm:E,toggleExpandSlice:g,forceRefresh:this.forceRefresh,editMode:l,annotationQuery:i.annotationQuery,logExploreChart:this.logExploreChart,logEvent:T,onExploreChart:this.onExploreChart,exportCSV:this.exportCSV,exportPivotCSV:this.exportPivotCSV,exportXLSX:this.exportXLSX,exportFullCSV:this.exportFullCSV,exportFullXLSX:this.exportFullXLSX,updateSliceName:p,sliceName:m,supersetCanExplore:b,supersetCanShare:v,supersetCanCSV:y,componentId:t,dashboardId:n,filters:d,addSuccessToast:x,addDangerToast:C,handleToggleFullSize:D,isFullSize:I,chartStatus:i.chartStatus,formData:c,width:M,height:this.getHeaderHeight()}),s&&o.description_markeddown&&(0,H.Y)("div",{className:"slice_description bs-callout bs-callout-default",ref:this.setDescriptionRef,dangerouslySetInnerHTML:{__html:o.description_markeddown},role:"complementary"}),(0,H.FD)(Qr,{className:r()("dashboard-chart"),"aria-label":o.description,children:[P&&(0,H.Y)(Xr,{style:{width:M,height:this.getChartHeight()}}),(0,H.Y)(jn.A,{width:M,height:this.getChartHeight(),addFilter:this.changeFilter,onFilterMenuOpen:this.handleFilterMenuOpen,onFilterMenuClose:this.handleFilterMenuClose,annotationData:i.annotationData,chartAlert:i.chartAlert,chartId:e,chartStatus:_,datasource:a,dashboardId:n,initialValues:{},formData:c,labelsColor:h,labelsColorMap:u,ownState:S,filterState:w,queriesResponse:i.queriesResponse,timeout:f,triggerQuery:i.triggerQuery,vizType:o.viz_type,setControlValue:F,postTransformProps:$,datasetsStatus:R,isInView:k,emitCrossFilters:Y})]})]})}}Jr.propTypes=Kr,Jr.defaultProps={isCached:!1,isComponentVisible:!0};const eo=(0,Vn.y)(Jr),to={},no=(0,u.Ng)((function({charts:e,dashboardInfo:t,dashboardState:n,dataMask:i,datasources:r,sliceEntities:o,nativeFilters:a,common:s},l){var d,c,h,u,p;const{id:m,extraControls:g,setControlValue:f}=l,b=e[m]||to,v=b&&b.form_data&&r[b.form_data.datasource]||ci.As,{colorScheme:y,colorNamespace:x,datasetsStatus:C}=n,S=(null==t||null==(d=t.metadata)?void 0:d.label_colors)||{},w=(null==t||null==(c=t.metadata)?void 0:c.shared_label_colors)||{},D=(0,qn.A)({chart:b,chartConfiguration:null==(h=t.metadata)?void 0:h.chart_configuration,charts:e,filters:(0,_t.MB)(m),colorScheme:y,colorNamespace:x,sliceId:m,nativeFilters:null==a?void 0:a.filters,allSliceIds:n.sliceIds,dataMask:i,extraControls:g,labelsColor:S,labelsColorMap:w});return D.dashboardId=t.id,{chart:b,datasource:v,labelsColor:S,labelsColorMap:w,slice:o.slices[m],timeout:t.common.conf.SUPERSET_WEBSERVER_TIMEOUT,filters:(0,_t.ug)()||to,formData:D,editMode:n.editMode,isExpanded:!!n.expandedSlices[m],supersetCanExplore:!!t.superset_can_explore,supersetCanShare:!!t.superset_can_share,supersetCanCSV:!!t.superset_can_csv,ownState:null==(u=i[m])?void 0:u.ownState,filterState:null==(p=i[m])?void 0:p.filterState,maxRows:s.conf.SQL_MAX_ROW,setControlValue:f,datasetsStatus:C,emitCrossFilters:!!t.crossFiltersEnabled}}),(function(e){return(0,f.zH)({updateComponents:In.m2,addSuccessToast:Fn.WR,addDangerToast:Fn.iB,toggleExpandSlice:Dn.jX,changeFilter:Un.$u,setFocusedFilterField:Dn.ib,unsetFocusedFilterField:Dn.ZX,refreshChart:On.refreshChart,logEvent:$n.logEvent},e)}))(eo),io=({onDelete:e})=>(0,H.Y)(Tn,{onClick:e,icon:(0,H.Y)(T.A.Trash,{iconSize:"xl"})}),ro=a.I4.div`
  .hover-menu {
    opacity: 0;
    position: absolute;
    z-index: 11; // one more than DragDroppable
    font-size: ${({theme:e})=>e.typography.sizes.m};
  }

  .hover-menu--left {
    width: ${({theme:e})=>6*e.gridUnit}px;
    top: 50%;
    transform: translate(0, -50%);
    left: ${({theme:e})=>-7*e.gridUnit}px;
    padding: ${({theme:e})=>2*e.gridUnit}px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hover-menu--left > :nth-child(n):not(:only-child):not(:last-child) {
    margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }

  .hover-menu--top {
    height: ${({theme:e})=>6*e.gridUnit}px;
    top: ${({theme:e})=>-6*e.gridUnit}px;
    left: 50%;
    transform: translate(-50%);
    padding: 0 ${({theme:e})=>2*e.gridUnit}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;class oo extends o.PureComponent{constructor(...e){super(...e),this.handleMouseEnter=()=>{const{onHover:e}=this.props;e&&e({isHovered:!0})},this.handleMouseLeave=()=>{const{onHover:e}=this.props;e&&e({isHovered:!1})}}render(){const{innerRef:e,position:t,children:n}=this.props;return(0,H.Y)(ro,{className:"hover-menu-container",children:(0,H.Y)("div",{ref:e,className:r()("hover-menu","left"===t&&"hover-menu--left","top"===t&&"hover-menu--top"),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,children:n})})}}oo.defaultProps={position:"left",innerRef:null,children:null};var ao=n(33149);const so={right:function(){return(0,H.Y)("div",{className:"resize-handle resize-handle--right"})},bottom:function(){return(0,H.Y)("div",{className:"resize-handle resize-handle--bottom"})},bottomRight:function(){return(0,H.Y)("div",{className:"resize-handle resize-handle--bottom-right"})}},lo={top:!1,right:!0,bottom:!0,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},co={widthAndHeight:lo,widthOnly:{...lo,bottomRight:!1,bottom:!1},heightOnly:{...lo,bottomRight:!1,right:!1},notAdjustable:{...lo,bottomRight:!1,bottom:!1,right:!1}},ho=Number.MAX_VALUE,uo={id:w().string.isRequired,children:w().node,adjustableWidth:w().bool,adjustableHeight:w().bool,gutterWidth:w().number,widthStep:w().number,heightStep:w().number,widthMultiple:w().number,heightMultiple:w().number,minWidthMultiple:w().number,maxWidthMultiple:w().number,minHeightMultiple:w().number,maxHeightMultiple:w().number,staticHeight:w().number,staticHeightMultiple:w().number,staticWidth:w().number,staticWidthMultiple:w().number,onResizeStop:w().func,onResize:w().func,onResizeStart:w().func,editMode:w().bool.isRequired},po={children:null,adjustableWidth:!0,adjustableHeight:!0,gutterWidth:E.BD,widthStep:E.iF,heightStep:E.iF,widthMultiple:null,heightMultiple:null,minWidthMultiple:1,maxWidthMultiple:ho,minHeightMultiple:1,maxHeightMultiple:ho,staticHeight:null,staticHeightMultiple:null,staticWidth:null,staticWidthMultiple:null,onResizeStop:null,onResize:null,onResizeStart:null},mo=[E.iF,E.iF],go={right:"resizable-container-handle--right",bottom:"resizable-container-handle--bottom"},fo=(0,a.I4)(ao.c)`
  ${({theme:e})=>s.AH`
    &.resizable-container {
      background-color: transparent;
      position: relative;

      /* re-resizable sets an empty div to 100% width and height, which doesn't
      play well with many 100% height containers we need */

      & ~ div {
        width: auto !important;
        height: auto !important;
      }
    }

    &.resizable-container--resizing {
      /* after ensures border visibility on top of any children */

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 0 2px ${e.colors.primary.base};
      }

      & > span .resize-handle {
        border-color: ${e.colors.primary.base};
      }
    }

    .resize-handle {
      opacity: 0;
      z-index: 10;

      &--bottom-right {
        position: absolute;
        border-right: 1px solid ${e.colors.text.label};
        border-bottom: 1px solid ${e.colors.text.label};
        right: ${4*e.gridUnit}px;
        bottom: ${4*e.gridUnit}px;
        width: ${2*e.gridUnit}px;
        height: ${2*e.gridUnit}px;
      }

      &--right {
        width: ${e.gridUnit/2}px;
        height: ${5*e.gridUnit}px;
        right: ${e.gridUnit}px;
        top: 50%;
        transform: translate(0, -50%);
        position: absolute;
        border-left: 1px solid ${e.colors.text.label};
        border-right: 1px solid ${e.colors.text.label};
      }

      &--bottom {
        height: ${e.gridUnit/2}px;
        width: ${5*e.gridUnit}px;
        bottom: ${e.gridUnit}px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        border-top: 1px solid ${e.colors.text.label};
        border-bottom: 1px solid ${e.colors.text.label};
      }
    }
  `}

  &.resizable-container:hover .resize-handle,
  &.resizable-container--resizing .resize-handle {
    opacity: 1;
  }

  .dragdroppable-column & .resizable-container-handle--right {
    /* override the default because the inner column's handle's mouse target is very small */
    right: 0 !important;
  }

  & .resizable-container-handle--bottom {
    bottom: 0 !important;
  }
`;class bo extends o.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResize=this.handleResize.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this)}handleResizeStart(e,t,n){const{id:i,onResizeStart:r}=this.props;r&&r({id:i,direction:t,ref:n}),this.setState((()=>({isResizing:!0})))}handleResize(e,t,n){const{onResize:i,id:r}=this.props;i&&i({id:r,direction:t,ref:n})}handleResizeStop(e,t,n,i){const{id:r,onResizeStop:o,widthStep:a,heightStep:s,widthMultiple:l,heightMultiple:d,adjustableHeight:c,adjustableWidth:h,gutterWidth:u}=this.props;if(o){const e=l+Math.round(i.width/(a+u)),t=d+Math.round(i.height/s);o({id:r,widthMultiple:h?e:null,heightMultiple:c?t:null}),this.setState((()=>({isResizing:!1})))}}render(){const{children:e,adjustableWidth:t,adjustableHeight:n,widthStep:i,heightStep:o,widthMultiple:a,heightMultiple:s,staticHeight:l,staticHeightMultiple:d,staticWidth:c,staticWidthMultiple:h,minWidthMultiple:u,maxWidthMultiple:p,minHeightMultiple:m,maxHeightMultiple:g,gutterWidth:f,editMode:b}=this.props,v={width:t?(i+f)*a-f:h&&h*i||c||void 0,height:n?o*s:d&&d*o||l||void 0};let y=co.notAdjustable;b&&t&&n?y=co.widthAndHeight:b&&t?y=co.widthOnly:b&&n&&(y=co.heightOnly);const{isResizing:x}=this.state;return(0,H.Y)(fo,{enable:y,grid:mo,minWidth:t?u*(i+f)-f:void 0,minHeight:n?m*o:void 0,maxWidth:t?Math.max(v.width,Math.min(ho,p*(i+f)-f)):void 0,maxHeight:n?Math.max(v.height,Math.min(ho,g*o)):void 0,size:v,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,handleComponent:so,className:r()("resizable-container",x&&"resizable-container--resizing"),handleClasses:go,children:e})}}bo.propTypes=uo,bo.defaultProps=po;const vo=bo;function yo(e){const t={};if(e.length>0){const n=e.slice();for(;n.length;){const e=n.pop(),i=e.split("-")[0];if(t[i.toLowerCase()]=e,!E.pX.includes(i))break}}return t}const xo=s.AH`
  && {
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 0;
  }
`;var Co=n(16784);const So=(0,a.I4)(Xe.W1.Item)`
  &.ant-menu-item {
    height: auto;
    line-height: 1.4;

    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>e.gridUnit}px;

    margin-top: 0;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-bottom: 0;
    }

    &:hover {
      background: ${({theme:e})=>e.colors.grayscale.light3};
    }

    &.active {
      font-weight: ${({theme:e})=>e.typography.weights.bold};
      background: ${({theme:e})=>e.colors.grayscale.light2};
    }
  }

  &.ant-menu-item-selected {
    color: unset;
  }
`;var wo={name:"s5xdrg",styles:"display:flex;align-items:center"};const Do=e=>{const{value:t,options:n,onChange:i,renderButton:o=(e=>e.label),renderOption:l=(e=>(0,H.Y)("div",{className:e.className,children:e.label}))}=e,d=(0,a.DP)(),c=n.find((e=>e.value===t));return(0,H.Y)(R.rM,{trigger:["click"],overlayStyle:{zIndex:d.zIndex.max},overlay:(0,H.Y)(Xe.W1,{onClick:({key:e})=>i(e),children:n.map((e=>(0,H.Y)(So,{id:"menu-item",className:r()("dropdown-item",{active:e.value===t}),children:l(e)},e.value)))}),children:(0,H.FD)("div",{role:"button",css:wo,children:[c&&o(c),(0,H.Y)(T.A.CaretDown,{iconColor:d.colors.grayscale.base,css:(0,s.AH)({marginTop:.5*d.gridUnit},"","")})]})})},Io=[{value:"edit",label:(0,h.t)("Edit")},{value:"preview",label:(0,h.t)("Preview")}];class Fo extends o.PureComponent{render(){const{id:e,value:t,onChange:n}=this.props;return(0,H.Y)(Do,{id:e,options:Io,value:t,onChange:n})}}const $o=a.I4.div`
  ${({theme:e})=>s.AH`
    position: relative;
    outline: none;

    &.with-popover-menu--focused:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid ${e.colors.primary.base};
      pointer-events: none;
    }

    .dashboard-component-tabs li &.with-popover-menu--focused:after {
      top: ${-3*e.gridUnit}px;
      left: ${-2*e.gridUnit}px;
      width: calc(100% + ${4*e.gridUnit}px);
      height: calc(100% + ${7*e.gridUnit}px);
    }
  `}
`,Ro=a.I4.div`
  ${({theme:e})=>s.AH`
    position: absolute;
    flex-wrap: nowrap;
    left: 1px;
    top: -42px;
    height: ${10*e.gridUnit}px;
    padding: 0 ${4*e.gridUnit}px;
    background: ${e.colors.grayscale.light5};
    box-shadow: 0 1px 2px 1px
      ${(0,l.o3)(e.colors.grayscale.dark2,parseFloat(e.opacity.mediumLight)/100)};
    font-size: ${e.typography.sizes.m}px;
    cursor: default;
    z-index: 3000;

    &,
    .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* vertical spacer after each menu item */
    .menu-item:not(:last-child):after {
      content: '';
      width: 1px;
      height: 100%;
      background: ${e.colors.grayscale.light2};
      margin: 0 ${4*e.gridUnit}px;
    }
  `}
`;class ko extends o.PureComponent{constructor(e){super(e),this.container=void 0,this.state={isFocused:e.isFocused},this.setRef=this.setRef.bind(this),this.handleClick=this.handleClick.bind(this)}UNSAFE_componentWillReceiveProps(e){e.editMode&&e.isFocused&&!this.state.isFocused?(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState({isFocused:!0})):this.state.isFocused&&!e.editMode&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState({isFocused:!1}))}componentWillUnmount(){document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick)}setRef(e){this.container=e}handleClick(e){if(!this.props.editMode)return;const{onChangeFocus:t,shouldFocus:n,disableClick:i}=this.props,r=n(e,this.container);i||!r||this.state.isFocused?!r&&this.state.isFocused&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!1}))),t&&t(!1)):(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!0}))),t&&t(!0))}render(){var e;const{children:t,menuItems:n,editMode:i,style:o}=this.props,{isFocused:a}=this.state;return(0,H.FD)($o,{ref:this.setRef,onClick:this.handleClick,role:"none",className:r()("with-popover-menu",i&&a&&"with-popover-menu--focused"),style:o,children:[t,i&&a&&(null!=(e=null==n?void 0:n.length)?e:0)>0&&(0,H.Y)(Ro,{children:n.map(((e,t)=>(0,H.Y)("div",{className:"menu-item",children:e},`menu-item-${t}`)))})]})}}ko.defaultProps={children:null,disableClick:!1,onChangeFocus:null,menuItems:[],isFocused:!1,shouldFocus:(e,t)=>{var n;return(null==t?void 0:t.contains(e.target))||"menu-item"===e.target.id||"menu-item"===(null==(n=e.target.parentNode)?void 0:n.id)},style:null};const Yo={id:w().string.isRequired,parentId:w().string.isRequired,component:_.nB.isRequired,parentComponent:_.nB.isRequired,index:w().number.isRequired,depth:w().number.isRequired,editMode:w().bool.isRequired,logEvent:w().func.isRequired,addDangerToast:w().func.isRequired,undoLength:w().number.isRequired,redoLength:w().number.isRequired,availableColumnCount:w().number.isRequired,columnWidth:w().number.isRequired,onResizeStart:w().func.isRequired,onResize:w().func.isRequired,onResizeStop:w().func.isRequired,deleteComponent:w().func.isRequired,handleComponentDrop:w().func.isRequired,updateComponents:w().func.isRequired,htmlSanitization:w().bool,htmlSchemaOverrides:w().object},To="# ✨Header 1\n## ✨Header 2\n### ✨Header 3\n\n<br />\n\nClick here to learn more about [markdown formatting](https://bit.ly/1dQOfRK)",Mo=(0,h.t)("This markdown component has an error."),Ao=a.I4.div`
  ${({theme:e})=>s.AH`
    &.dashboard-markdown {
      overflow: hidden;

      h4,
      h5,
      h6 {
        font-weight: ${e.typography.weights.normal};
      }

      h5 {
        color: ${e.colors.grayscale.base};
      }

      h6 {
        font-size: ${e.typography.sizes.s}px;
      }

      .dashboard-component-chart-holder {
        overflow-y: auto;
        overflow-x: hidden;
      }

      .dashboard--editing & {
        cursor: move;
      }
    }
  `}
`;class Eo extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1,markdownSource:e.component.meta.code,editor:null,editorMode:"preview",undoLength:e.undoLength,redoLength:e.redoLength},this.renderStartTime=We.Vy.getTimestamp(),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleChangeEditorMode=this.handleChangeEditorMode.bind(this),this.handleMarkdownChange=this.handleMarkdownChange.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleResizeStart=this.handleResizeStart.bind(this),this.setEditor=this.setEditor.bind(this)}componentDidMount(){this.props.logEvent(We.tE,{viz_type:"markdown",start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:We.Vy.getTimestamp()-this.renderStartTime})}static getDerivedStateFromProps(e,t){const{hasError:n,editorMode:i,markdownSource:r,undoLength:o,redoLength:a}=t,{component:s,undoLength:l,redoLength:d}=e;return l!==o||d!==a?{...t,undoLength:l,redoLength:d,markdownSource:s.meta.code,hasError:!1}:n||"preview"!==i||s.meta.code===r?t:{...t,markdownSource:s.meta.code}}static getDerivedStateFromError(){return{hasError:!0}}componentDidUpdate(e){!this.state.editor||e.component.meta.width===this.props.component.meta.width&&e.columnWidth===this.props.columnWidth||this.state.editor.resize(!0),this.props.editMode&&ut.nt.preload()}componentDidCatch(){this.state.editor&&"preview"===this.state.editorMode&&this.props.addDangerToast((0,h.t)("This markdown component has an error. Please revert your recent changes."))}setEditor(e){e.getSession().setUseWrapMode(!0),this.setState({editor:e})}handleChangeFocus(e){const t=!!e,n=t?"edit":"preview";this.setState((()=>({isFocused:t}))),this.handleChangeEditorMode(n)}handleChangeEditorMode(e){const t={...this.state,editorMode:e};"preview"===e&&(this.updateMarkdownContent(),t.hasError=!1),this.setState(t)}updateMarkdownContent(){const{updateComponents:e,component:t}=this.props;t.meta.code!==this.state.markdownSource&&e({[t.id]:{...t,meta:{...t.meta,code:this.state.markdownSource}}})}handleMarkdownChange(e){this.setState({markdownSource:e})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleResizeStart(e){const{editorMode:t}=this.state,{editMode:n,onResizeStart:i}=this.props,r="edit"===t;i(e),n&&r&&this.updateMarkdownContent()}renderEditMode(){return(0,H.Y)(ut.nt,{onChange:this.handleMarkdownChange,width:"100%",height:"100%",showGutter:!1,editorProps:{$blockScrolling:!0},value:"string"==typeof this.state.markdownSource?this.state.markdownSource:To,readOnly:!1,onLoad:this.setEditor})}renderPreviewMode(){const{hasError:e}=this.state;return(0,H.Y)(Co.A,{source:e?Mo:this.state.markdownSource||To,htmlSanitization:this.props.htmlSanitization,htmlSchemaOverrides:this.props.htmlSchemaOverrides})}render(){const{isFocused:e,editorMode:t}=this.state,{component:n,parentComponent:i,index:o,depth:a,availableColumnCount:s,columnWidth:l,onResize:d,onResizeStop:c,handleComponentDrop:h,editMode:u}=this.props,p=i.type===A.QP?i.meta.width||E.tK:n.meta.width||E.tK,m="edit"===t;return(0,H.Y)(ue,{component:n,parentComponent:i,orientation:i.type===A._8?"column":"row",index:o,depth:a,onDrop:h,disableDragDrop:e,editMode:u,children:({dragSourceRef:t})=>(0,H.Y)(ko,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,H.Y)(Fo,{id:`${n.id}-mode`,value:this.state.editorMode,onChange:this.handleChangeEditorMode})],editMode:u,children:(0,H.Y)(Ao,{className:r()("dashboard-markdown",m&&"dashboard-markdown--editing"),id:n.id,children:(0,H.Y)(vo,{id:n.id,adjustableWidth:i.type===A._8,adjustableHeight:!0,widthStep:l,widthMultiple:p,heightStep:E.iF,heightMultiple:n.meta.height,minWidthMultiple:E.tK,minHeightMultiple:E.B_,maxWidthMultiple:s+p,onResizeStart:this.handleResizeStart,onResize:d,onResizeStop:c,editMode:!e&&u,children:(0,H.FD)("div",{ref:t,className:"dashboard-component dashboard-component-chart-holder",children:[u&&(0,H.Y)(oo,{position:"top",children:(0,H.Y)(io,{onDelete:this.handleDeleteComponent})}),u&&m?this.renderEditMode():this.renderPreviewMode()]})})})})})}}Eo.propTypes=Yo,Eo.defaultProps={};const _o=(0,u.Ng)((function(e){return{undoLength:e.dashboardLayout.past.length,redoLength:e.dashboardLayout.future.length,htmlSanitization:e.common.conf.HTML_SANITIZATION,htmlSchemaOverrides:e.common.conf.HTML_SANITIZATION_SCHEMA_EXTENSIONS}}))(Eo),Po=a.I4.div`
  ${({theme:e,position:t})=>s.AH`
    height: ${5*e.gridUnit}px;
    overflow: hidden;
    cursor: move;
    ${"top"===t&&s.AH`
      transform: rotate(90deg);
    `}
    & path {
      fill: ${e.colors.grayscale.base};
    }
  `}
`;function zo({position:e="left",innerRef:t=null}){return(0,H.Y)(Po,{ref:t,position:e,children:(0,H.Y)(T.A.Drag,{})})}var Uo=n(56837);const Oo=a.I4.div`
  ${({theme:e})=>s.AH`
    display: inline-block;

    &:before {
      content: '';
      width: 1em;
      height: 1em;
      margin-right: ${2*e.gridUnit}px;
      display: inline-block;
      vertical-align: middle;
    }

    &.background--white {
      padding-left: 0;
      background: transparent;

      &:before {
        background: ${e.colors.grayscale.light5};
        border: 1px solid ${e.colors.grayscale.light2};
      }
    }

    /* Create the transparent rect icon */
    &.background--transparent:before {
      background-image: linear-gradient(
          45deg,
          ${e.colors.text.label} 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, ${e.colors.text.label} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${e.colors.text.label} 75%),
        linear-gradient(-45deg, transparent 75%, ${e.colors.text.label} 75%);
      background-size: ${2*e.gridUnit}px ${2*e.gridUnit}px;
      background-position:
        0 0,
        0 ${e.gridUnit}px,
        ${e.gridUnit}px ${-e.gridUnit}px,
        ${-e.gridUnit}px 0px;
    }
  `}
`;function qo(e){const t=(0,h.t)("background");return(0,H.Y)(Oo,{className:r()("background-style-option",e.className),children:`${e.label} ${t}`})}function No(e){return(0,H.Y)(Oo,{className:r()("background-style-option",e.className),children:e.label})}class Ho extends o.PureComponent{render(){const{id:e,value:t,onChange:n}=this.props;return(0,H.Y)(Do,{id:e,options:Uo.A,value:t,onChange:n,renderButton:qo,renderOption:No})}}const Vo={id:w().string.isRequired,parentId:w().string.isRequired,component:_.nB.isRequired,parentComponent:_.nB.isRequired,index:w().number.isRequired,depth:w().number.isRequired,editMode:w().bool.isRequired,availableColumnCount:w().number.isRequired,columnWidth:w().number.isRequired,minColumnWidth:w().number.isRequired,onResizeStart:w().func.isRequired,onResize:w().func.isRequired,onResizeStop:w().func.isRequired,deleteComponent:w().func.isRequired,handleComponentDrop:w().func.isRequired,updateComponents:w().func.isRequired},Lo=a.I4.div`
  ${({theme:e,editMode:t})=>s.AH`
    &.grid-column {
      width: 100%;
      position: relative;

      & > :not(.hover-menu):not(:last-child) {
        ${!t&&`margin-bottom: ${4*e.gridUnit}px;`}
      }
    }

    .dashboard--editing &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      pointer-events: none;
      border: 1px dashed ${e.colors.grayscale.light2};
    }
    .dashboard--editing .resizable-container--resizing:hover > &:after,
    .dashboard--editing .hover-menu:hover + &:after {
      border: 1px dashed ${e.colors.primary.base};
      z-index: 2;
    }

    & .empty-droptarget {
      &.droptarget-edge {
        position: absolute;
        z-index: ${ci.qe};
        &:first-child {
          inset-block-start: 0;
        }
      }
      &:first-child:not(.droptarget-edge) {
        position: absolute;
        z-index: ${ci.qe};
        width: 100%;
        height: 100%;
      }
    }
  `}
`,jo=e=>s.AH`
  min-height: ${25*e.gridUnit}px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class Wo extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}render(){const{component:e,parentComponent:t,index:n,availableColumnCount:i,columnWidth:a,minColumnWidth:s,depth:l,onResizeStart:d,onResize:c,onResizeStop:u,handleComponentDrop:p,editMode:m,onChangeTab:g,isComponentVisible:f}=this.props,b=e.children||[],v=Uo.A.find((t=>t.value===(e.meta.background||E.kn)));return(0,H.Y)(ue,{component:e,parentComponent:t,orientation:"column",index:n,depth:l,onDrop:p,editMode:m,children:({dragSourceRef:t})=>(0,H.Y)(vo,{id:e.id,adjustableWidth:!0,adjustableHeight:!1,widthStep:a,widthMultiple:e.meta.width,minWidthMultiple:s,maxWidthMultiple:i+(e.meta.width||0),onResizeStart:d,onResize:c,onResizeStop:u,editMode:m,children:(0,H.FD)(ko,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,H.Y)(Ho,{id:`${e.id}-background`,value:e.meta.background,onChange:this.handleChangeBackground})],editMode:m,children:[m&&(0,H.FD)(oo,{innerRef:t,position:"top",children:[(0,H.Y)(zo,{position:"top"}),(0,H.Y)(io,{onDelete:this.handleDeleteComponent}),(0,H.Y)(Tn,{onClick:this.handleChangeFocus,icon:(0,H.Y)(T.A.Cog,{iconSize:"xl"})})]}),(0,H.FD)(Lo,{className:r()("grid-column",v.className),editMode:m,children:[m&&(0,H.Y)(pe,{component:e,parentComponent:e,...0===b.length?{dropToChild:!0}:{component:b[0]},depth:l,index:0,orientation:"column",onDrop:p,className:r()("empty-droptarget",b.length>0&&"droptarget-edge"),editMode:!0,children:({dropIndicatorProps:e})=>e&&(0,H.Y)("div",{...e})}),0===b.length?(0,H.Y)("div",{css:jo,children:(0,h.t)("Empty column")}):b.map(((t,n)=>(0,H.FD)(o.Fragment,{children:[(0,H.Y)(_a,{id:t,parentId:e.id,depth:l+1,index:n,availableColumnCount:e.meta.width,columnWidth:a,onResizeStart:d,onResize:c,onResizeStop:u,isComponentVisible:f,onChangeTab:g}),m&&(0,H.Y)(pe,{component:b,parentComponent:e,depth:l,index:n+1,orientation:"column",onDrop:p,className:r()("empty-droptarget",n===b.length-1&&"droptarget-edge"),editMode:!0,children:({dropIndicatorProps:e})=>e&&(0,H.Y)("div",{...e})})]},t)))]})]})})})}}Wo.propTypes=Vo,Wo.defaultProps={};const Bo=Wo,Ko={id:w().string.isRequired,parentId:w().string.isRequired,component:_.nB.isRequired,depth:w().number.isRequired,parentComponent:_.nB.isRequired,index:w().number.isRequired,editMode:w().bool.isRequired,handleComponentDrop:w().func.isRequired,deleteComponent:w().func.isRequired},Go=a.I4.div`
  ${({theme:e})=>s.AH`
    width: 100%;
    padding: ${2*e.gridUnit}px 0; /* this is padding not margin to enable a larger mouse target */
    background-color: transparent;

    &:after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: ${e.colors.grayscale.light2};
      display: block;
    }

    div[draggable='true'] & {
      cursor: move;
    }

    .dashboard-component-tabs & {
      padding-left: ${4*e.gridUnit}px;
      padding-right: ${4*e.gridUnit}px;
    }
  `}
`;class Qo extends o.PureComponent{constructor(e){super(e),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}render(){const{component:e,depth:t,parentComponent:n,index:i,handleComponentDrop:r,editMode:o}=this.props;return(0,H.Y)(ue,{component:e,parentComponent:n,orientation:"row",index:i,depth:t,onDrop:r,editMode:o,children:({dragSourceRef:e})=>(0,H.FD)("div",{ref:e,children:[o&&(0,H.Y)(oo,{position:"left",children:(0,H.Y)(io,{onDelete:this.handleDeleteComponent})}),(0,H.Y)(Go,{className:"dashboard-component dashboard-component-divider"})]})})}}Qo.propTypes=Ko;const Xo=Qo;var Zo=n(44672);const Jo={id:w().string.isRequired,dashboardId:w().string.isRequired,parentId:w().string.isRequired,component:_.nB.isRequired,depth:w().number.isRequired,parentComponent:_.nB.isRequired,index:w().number.isRequired,editMode:w().bool.isRequired,handleComponentDrop:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired},ea=a.I4.div`
  ${({theme:e})=>s.AH`
    font-weight: ${e.typography.weights.bold};
    width: 100%;
    padding: ${4*e.gridUnit}px 0;

    &.header-small {
      font-size: ${e.typography.sizes.l}px;
    }

    &.header-medium {
      font-size: ${e.typography.sizes.xl}px;
    }

    &.header-large {
      font-size: ${e.typography.sizes.xxl}px;
    }

    .dashboard--editing .dashboard-grid & {
      &:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      &:hover:after {
        border: 1px dashed ${e.colors.primary.base};
        z-index: 2;
      }
    }

    .dashboard--editing .dragdroppable-row & {
      cursor: move;
    }

    /**
   * grids add margin between items, so don't double pad within columns
   * we'll not worry about double padding on top as it can serve as a visual separator
   */
    .grid-column > :not(:last-child) & {
      margin-bottom: ${-4*e.gridUnit}px;
    }

    .background--white &,
    &.background--white,
    .dashboard-component-tabs & {
      padding-left: ${4*e.gridUnit}px;
      padding-right: ${4*e.gridUnit}px;
    }
  `}
`;class ta extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeSize=this.handleUpdateMeta.bind(this,"headerSize"),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeText=this.handleUpdateMeta.bind(this,"text")}handleChangeFocus(e){this.setState((()=>({isFocused:e})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}render(){const{isFocused:e}=this.state,{dashboardId:t,component:n,depth:i,parentComponent:o,index:a,handleComponentDrop:s,editMode:l}=this.props,d=Zo.A.find((e=>e.value===(n.meta.headerSize||E.It))),c=Uo.A.find((e=>e.value===(n.meta.background||E.kn)));return(0,H.Y)(ue,{component:n,parentComponent:o,orientation:"row",index:a,depth:i,onDrop:s,disableDragDrop:e,editMode:l,children:({dragSourceRef:e})=>(0,H.FD)("div",{ref:e,children:[l&&i<=2&&(0,H.Y)(oo,{position:"left",children:(0,H.Y)(zo,{position:"left"})}),(0,H.Y)(ko,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,H.Y)(Do,{id:`${n.id}-header-style`,options:Zo.A,value:n.meta.headerSize,onChange:this.handleChangeSize}),(0,H.Y)(Ho,{id:`${n.id}-background`,value:n.meta.background,onChange:this.handleChangeBackground})],editMode:l,children:(0,H.FD)(ea,{className:r()("dashboard-component","dashboard-component-header",d.className,c.className),children:[l&&(0,H.Y)(oo,{position:"top",children:(0,H.Y)(io,{onDelete:this.handleDeleteComponent})}),(0,H.Y)(Gn.A,{title:n.meta.text,canEdit:l,onSaveTitle:this.handleChangeText,showTooltip:!1}),!l&&(0,H.Y)(zn,{id:n.id,dashboardId:t})]})})]})})}}ta.propTypes=Jo,ta.defaultProps={};const na=ta;var ia=n(87843),ra=n(92201);const oa={id:w().string.isRequired,parentId:w().string.isRequired,component:_.nB.isRequired,parentComponent:_.nB.isRequired,index:w().number.isRequired,depth:w().number.isRequired,editMode:w().bool.isRequired,availableColumnCount:w().number.isRequired,columnWidth:w().number.isRequired,occupiedColumnCount:w().number.isRequired,onResizeStart:w().func.isRequired,onResize:w().func.isRequired,onResizeStop:w().func.isRequired,maxChildrenHeight:w().number.isRequired,handleComponentDrop:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired},aa=a.I4.div`
  ${({theme:e,editMode:t})=>s.AH`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 100%;
    height: fit-content;

    & > :not(:last-child):not(.hover-menu) {
      ${!t&&`margin-right: ${4*e.gridUnit}px;`}
    }

    & .empty-droptarget {
      position: relative;
      align-self: center;
      &.empty-droptarget--vertical {
        min-width: ${4*e.gridUnit}px;
        &:not(:last-child) {
          width: ${4*e.gridUnit}px;
        }
        &:first-child:not(.droptarget-side) {
          z-index: ${ci.qe};
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
      &.droptarget-side {
        z-index: ${ci.qe};
        position: absolute;
        width: ${4*e.gridUnit}px;
        &:first-child {
          inset-inline-start: 0;
        }
      }
    }

    &.grid-row--empty {
      min-height: ${25*e.gridUnit}px;
    }
  `}
`,sa=e=>s.AH`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class la extends o.PureComponent{constructor(e){super(e),this.handleMenuHover=e=>{const{isHovered:t}=e;this.setState((()=>({hoverMenuHovered:t})))},this.state={isFocused:!1,isInView:!1,hoverMenuHovered:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleMenuHover=this.handleMenuHover.bind(this),this.setVerticalEmptyContainerHeight=C()(this.setVerticalEmptyContainerHeight.bind(this),ia.j),this.containerRef=(0,o.createRef)(),this.observerEnabler=null,this.observerDisabler=null}componentDidMount(){if((0,d.G7)(d.TO.DashboardVirtualization)&&!(0,ra.a)()){this.observerEnabler=new IntersectionObserver((([e])=>{e.isIntersecting&&!this.state.isInView&&this.setState({isInView:!0})}),{rootMargin:"100% 0px"}),this.observerDisabler=new IntersectionObserver((([e])=>{!e.isIntersecting&&this.state.isInView&&this.setState({isInView:!1})}),{rootMargin:"400% 0px"});const e=this.containerRef.current;e&&(this.observerEnabler.observe(e),this.observerDisabler.observe(e),this.setVerticalEmptyContainerHeight())}}componentDidUpdate(){this.setVerticalEmptyContainerHeight()}setVerticalEmptyContainerHeight(){var e;const{containerHeight:t}=this.state,{editMode:n}=this.props,i=null==(e=this.containerRef.current)?void 0:e.clientHeight;n&&this.containerRef.current&&i!==t&&this.setState({containerHeight:i})}componentWillUnmount(){var e,t;null==(e=this.observerEnabler)||e.disconnect(),null==(t=this.observerDisabler)||t.disconnect()}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,component:t,parentId:n}=this.props;e(t.id,n)}render(){const{component:e,parentComponent:t,index:n,availableColumnCount:i,columnWidth:a,occupiedColumnCount:s,depth:l,onResizeStart:d,onResize:c,onResizeStop:u,handleComponentDrop:p,editMode:m,onChangeTab:g,isComponentVisible:f}=this.props,{containerHeight:b,hoverMenuHovered:v}=this.state,y=e.children||[],x=Uo.A.find((t=>t.value===(e.meta.background||E.kn))),C=i-s;return(0,H.Y)(ue,{component:e,parentComponent:t,orientation:"row",index:n,depth:l,onDrop:p,editMode:m,children:({dragSourceRef:t})=>(0,H.FD)(ko,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,H.Y)(Ho,{id:`${e.id}-background`,value:x.value,onChange:this.handleChangeBackground})],editMode:m,children:[m&&(0,H.FD)(oo,{onHover:this.handleMenuHover,innerRef:t,position:"left",children:[(0,H.Y)(zo,{position:"left"}),(0,H.Y)(io,{onDelete:this.handleDeleteComponent}),(0,H.Y)(Tn,{onClick:this.handleChangeFocus,icon:(0,H.Y)(T.A.Cog,{iconSize:"xl"})})]}),(0,H.FD)(aa,{className:r()("grid-row",0===y.length&&"grid-row--empty",v&&"grid-row--hovered",x.className),ref:this.containerRef,editMode:m,children:[m&&(0,H.Y)(pe,{...0===y.length?{component:e,parentComponent:e,dropToChild:!0}:{component:y[0],parentComponent:e},depth:l,index:0,orientation:"row",onDrop:p,className:r()("empty-droptarget","empty-droptarget--vertical",y.length>0&&"droptarget-side"),editMode:!0,style:{height:y.length>0?b:"100%",...y.length>0&&{width:16}},children:({dropIndicatorProps:e})=>e&&(0,H.Y)("div",{...e})}),0===y.length&&(0,H.Y)("div",{css:sa,children:(0,h.t)("Empty row")}),y.length>0&&y.map(((t,n)=>(0,H.FD)(o.Fragment,{children:[(0,H.Y)(_a,{id:t,parentId:e.id,depth:l+1,index:n,availableColumnCount:C,columnWidth:a,onResizeStart:d,onResize:c,onResizeStop:u,isComponentVisible:f,onChangeTab:g,isInView:this.state.isInView},t),m&&(0,H.Y)(pe,{component:y,parentComponent:e,depth:l,index:n+1,orientation:"row",onDrop:p,className:r()("empty-droptarget","empty-droptarget--vertical",0===C&&n===y.length-1&&"droptarget-side"),editMode:!0,style:{height:b,...0===C&&n===y.length-1&&{width:16}},children:({dropIndicatorProps:e})=>e&&(0,H.Y)("div",{...e})})]},t)))]})]})})}}la.propTypes=oa;const da=la;var ca=n(87196);const ha="RENDER_TAB",ua="RENDER_TAB_CONTENT",pa={dashboardId:w().number.isRequired,id:w().string.isRequired,parentId:w().string.isRequired,component:_.nB.isRequired,parentComponent:_.nB.isRequired,index:w().number.isRequired,depth:w().number.isRequired,renderType:w().oneOf([ha,ua]).isRequired,onDropOnTab:w().func,onDropPositionChange:w().func,onDragTab:w().func,onHoverTab:w().func,editMode:w().bool.isRequired,canEdit:w().bool.isRequired,availableColumnCount:w().number,columnWidth:w().number,onResizeStart:w().func,onResize:w().func,onResizeStop:w().func,handleComponentDrop:w().func.isRequired,updateComponents:w().func.isRequired,setDirectPathToChild:w().func.isRequired,setEditMode:w().func.isRequired},ma={availableColumnCount:0,columnWidth:0,onDropOnTab(){},onDropPositionChange(){},onDragTab(){},onHoverTab(){},onResizeStart(){},onResize(){},onResizeStop(){}},ga=a.I4.div`
  ${({isHighlighted:e,theme:{gridUnit:t,colors:n}})=>`\n    padding: ${t}px ${2*t}px;\n    margin: ${-t}px ${-2*t}px;\n    transition: box-shadow 0.2s ease-in-out;\n    ${e&&`box-shadow: 0 0 ${t}px ${n.primary.light1};`}\n  `}
`,fa=a.I4.div`
  &.drop-indicator {
    position: absolute;
    top: 0;
    border-radius: 4px;
  }
`,ba=e=>e.dropIndicatorProps&&(0,H.Y)("div",{...e.dropIndicatorProps});class va extends o.PureComponent{constructor(e){super(e),this.handleChangeText=this.handleChangeText.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleOnHover=this.handleOnHover.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}handleChangeTab({pathToTabIndex:e}){this.props.setDirectPathToChild(e)}handleChangeText(e){const{updateComponents:t,component:n}=this.props;e&&e!==n.meta.text&&t({[n.id]:{...n,meta:{...n.meta,text:e}}})}handleDrop(e){this.props.handleComponentDrop(e),this.props.onDropOnTab(e)}handleOnHover(){this.props.onHoverTab()}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}shouldDropToChild(e){return e.type!==A.B8}renderTabContent(){const{component:e,depth:t,availableColumnCount:n,columnWidth:i,onResizeStart:a,onResize:s,onResizeStop:l,editMode:d,isComponentVisible:c,canEdit:u,setEditMode:p,dashboardId:m}=this.props,g=0===e.children.length;return(0,H.FD)("div",{className:"dashboard-component-tabs-content",children:[d&&(0,H.Y)(pe,{component:e,orientation:"column",index:0,depth:t,onDrop:0===e.children.length?this.handleTopDropTargetDrop:this.handleDrop,editMode:!0,className:r()({"empty-droptarget":!0,"empty-droptarget--full":0===e.children.length}),dropToChild:0===e.children.length,children:ba}),g&&(0,H.Y)(ca.uq,{title:d?(0,h.t)("Drag and drop components to this tab"):(0,h.t)("There are no components added to this tab"),description:u&&(d?(0,H.FD)("span",{children:[(0,h.t)("You can")," ",(0,H.Y)("a",{href:`/chart/add?dashboard_id=${m}`,rel:"noopener noreferrer",target:"_blank",children:(0,h.t)("create a new chart")})," ",(0,h.t)("or use existing ones from the panel on the right")]}):(0,H.FD)("span",{children:[(0,h.t)("You can add the components in the")," ",(0,H.Y)("span",{role:"button",tabIndex:0,onClick:()=>p(!0),children:(0,h.t)("edit mode")})]})),image:"chart.svg"}),e.children.map(((r,h)=>(0,H.FD)(o.Fragment,{children:[(0,H.Y)(_a,{id:r,parentId:e.id,depth:t,index:h,onDrop:this.handleDrop,onHover:this.handleOnHover,availableColumnCount:n,columnWidth:i,onResizeStart:a,onResize:s,onResizeStop:l,isComponentVisible:c,onChangeTab:this.handleChangeTab}),d&&(0,H.Y)(pe,{component:e,orientation:"column",index:h+1,depth:t,onDrop:this.handleDrop,editMode:!0,className:"empty-droptarget",children:ba})]},r)))]})}renderTab(){const{component:e,parentComponent:t,index:n,depth:i,editMode:r,isFocused:o,isHighlighted:a,onDropPositionChange:s,onDragTab:l}=this.props;return(0,H.Y)(me,{component:e,parentComponent:t,orientation:"column",index:n,depth:i,onDrop:this.handleDrop,onHover:this.handleOnHover,onDropIndicatorChange:s,onDragTab:l,editMode:r,dropToChild:this.shouldDropToChild,children:({dropIndicatorProps:t,dragSourceRef:i,draggingTabOnTab:s})=>(0,H.FD)(ga,{isHighlighted:a,className:"dragdroppable-tab",ref:i,children:[(0,H.Y)(Gn.A,{title:e.meta.text,defaultTitle:e.meta.defaultText,placeholder:e.meta.placeholder,canEdit:r&&o,onSaveTitle:this.handleChangeText,showTooltip:!1,editing:r&&o}),!r&&(0,H.Y)(zn,{id:e.id,dashboardId:this.props.dashboardId,placement:n>=5?"left":"right"}),t&&!s&&(0,H.Y)(fa,{className:t.className})]})})}render(){const{renderType:e}=this.props;return e===ha?this.renderTab():this.renderTabContent()}}va.propTypes=pa,va.defaultProps=ma;const ya=(0,u.Ng)((function(e){return{canEdit:e.dashboardInfo.dash_edit_perm}}),(function(e){return(0,f.zH)({setEditMode:Dn.op},e)}))(va);function xa({currentComponent:e,directPathToChild:t=[]}){if(!e||0===t.length||-1===t.indexOf(e.id))return-1;const n=t.findIndex((t=>t===e.id)),i=t[n+1];return e.children.indexOf(i)>=0?e.children.findIndex((e=>e===i)):-1}function Ca(e,t){const n=(e.parents||[]).slice();return n.push(e.id),n.push(e.children[t]),n}function Sa(e=[]){if(e.length>0){const t=e.slice();for(;t.length;){const e=t.pop(),n=e&&e.split("-")[0];if(!E.pX.includes(n))return e}}return null}const wa={id:w().string.isRequired,parentId:w().string.isRequired,component:_.nB.isRequired,parentComponent:_.nB.isRequired,index:w().number.isRequired,depth:w().number.isRequired,renderTabContent:w().bool,editMode:w().bool.isRequired,renderHoverMenu:w().bool,directPathToChild:w().arrayOf(w().string),activeTabs:w().arrayOf(w().string),logEvent:w().func.isRequired,setActiveTab:w().func,availableColumnCount:w().number,columnWidth:w().number,onResizeStart:w().func,onResize:w().func,onResizeStop:w().func,createComponent:w().func.isRequired,handleComponentDrop:w().func.isRequired,onChangeTab:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired},Da={renderTabContent:!0,renderHoverMenu:!0,availableColumnCount:0,columnWidth:0,activeTabs:[],directPathToChild:[],setActiveTab(){},onResizeStart(){},onResize(){},onResizeStop(){}},Ia=a.I4.div`
  width: 100%;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};

  .dashboard-component-tabs-content {
    min-height: ${({theme:e})=>12*e.gridUnit}px;
    margin-top: ${({theme:e})=>e.gridUnit/4}px;
    position: relative;
  }

  .ant-tabs {
    overflow: visible;

    .ant-tabs-nav-wrap {
      min-height: ${({theme:e})=>12.5*e.gridUnit}px;
    }

    .ant-tabs-content-holder {
      overflow: visible;
    }
  }

  div .ant-tabs-tab-btn {
    text-transform: none;
  }
`,Fa=(0,a.I4)(T.A.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,$a=a.I4.div`
  border: 2px solid ${({theme:e})=>e.colors.primary.base};
  width: 5px;
  height: 100%;
  position: absolute;
  top: 0;
  ${({pos:e})=>"left"===e?"left: -4px":"right: -4px"};
  border-radius: 2px;
`,Ra=e=>(0,H.FD)(H.FK,{children:[(0,H.Y)(Fa,{}),e.showDropIndicators.right&&(0,H.Y)($a,{className:"drop-indicator-right",pos:"right"})]});class ka extends o.PureComponent{constructor(e){super(e),this.getTabInfo=e=>{var t;let n=Math.max(0,xa({currentComponent:e.component,directPathToChild:e.directPathToChild}));0===n&&null!=(t=e.activeTabs)&&t.length&&e.component.children.forEach(((t,i)=>{0===n&&e.activeTabs.includes(t)&&(n=i)}));const{children:i}=e.component,r=i[n];return{tabIndex:n,activeKey:r}},this.showDeleteConfirmModal=e=>{const{component:t,deleteComponent:n}=this.props;R.nC.confirm({title:(0,h.t)("Delete dashboard tab?"),content:(0,H.FD)("span",{children:[(0,h.t)("Deleting a tab will remove all content within it and will deactivate any related alerts or reports. You may still reverse this action with the")," ",(0,H.Y)("b",{children:(0,h.t)("undo")})," ",(0,h.t)("button (cmd + z) until you save your changes.")]}),onOk:()=>{n(e,t.id);const i=t.children.indexOf(e);this.handleDeleteTab(i)},okType:"danger",okText:(0,h.t)("DELETE"),cancelText:(0,h.t)("CANCEL"),icon:null})},this.handleEdit=(e,t)=>{const{component:n,createComponent:i}=this.props;"add"===t?(null==e||null==e.stopPropagation||e.stopPropagation(),i({destination:{id:n.id,type:n.type,index:n.children.length},dragging:{id:E.nO,type:A.B8}})):"remove"===t&&this.showDeleteConfirmModal(e)};const{tabIndex:t,activeKey:n}=this.getTabInfo(e);this.state={tabIndex:t,activeKey:n},this.handleClickTab=this.handleClickTab.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleDeleteTab=this.handleDeleteTab.bind(this),this.handleDropOnTab=this.handleDropOnTab.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleGetDropPosition=this.handleGetDropPosition.bind(this),this.handleDragggingTab=this.handleDragggingTab.bind(this)}componentDidMount(){this.props.setActiveTab(this.state.activeKey)}componentDidUpdate(e,t){t.activeKey!==this.state.activeKey&&this.props.setActiveTab(this.state.activeKey,t.activeKey)}UNSAFE_componentWillReceiveProps(e){const t=Math.max(0,e.component.children.length-1),n=this.props.component.children,i=e.component.children;if(this.state.tabIndex>t&&this.setState((()=>({tabIndex:t}))),e.dashboardId!==this.props.dashboardId){const{tabIndex:t,activeKey:n}=this.getTabInfo(e);this.setState((()=>({tabIndex:t,activeKey:n})))}if(e.isComponentVisible){const t=Sa(e.directPathToChild),r=Sa(this.props.directPathToChild);if(t!==r||t===r&&n!==i){const t=xa({currentComponent:e.component,directPathToChild:e.directPathToChild});t>-1&&t!==this.state.tabIndex&&this.setState((()=>({tabIndex:t,activeKey:i[t]})))}}}handleClickTab(e){const{component:t}=this.props,{children:n}=t;if(e!==this.state.tabIndex){const n=Ca(t,e),i=n[n.length-1];this.props.logEvent(We.FA,{target_id:i,index:e}),this.props.onChangeTab({pathToTabIndex:n})}this.setState((()=>({activeKey:n[e]})))}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleDeleteTab(e){this.state.tabIndex===e&&this.handleClickTab(Math.max(0,e-1))}handleGetDropPosition(e){const{dropIndicator:t,isDraggingOver:n,index:i}=e;n?this.setState((()=>({dropPosition:t,dragOverTabIndex:i}))):this.setState((()=>({dropPosition:null})))}handleDropOnTab(e){const{component:t}=this.props,{destination:n}=e;if(n){const e=n.id===t.id?n.index:t.children.indexOf(n.id);e>-1&&setTimeout((()=>{this.handleClickTab(e)}),30)}}handleDrop(e){e.dragging.type!==A.wc&&this.props.handleComponentDrop(e)}handleDragggingTab(e){e?this.setState((()=>({draggingTabId:e}))):this.setState((()=>({draggingTabId:null})))}render(){const{depth:e,component:t,parentComponent:n,index:i,availableColumnCount:r,columnWidth:o,onResizeStart:a,onResize:s,onResizeStop:l,renderTabContent:d,renderHoverMenu:c,isComponentVisible:h,editMode:u,nativeFilters:p}=this.props,{children:m}=t,{tabIndex:f,activeKey:b,dropPosition:v,dragOverTabIndex:y}=this.state,x=e=>e===y&&{left:u&&v===ne.S4,right:u&&v===ne.Db},C=e=>this.state.draggingTabId===e;let S;const w=(null==p?void 0:p.focusedFilterId)||(null==p?void 0:p.hoveredFilterId);var D;return w&&(S=null==(D=p.filters[w])?void 0:D.tabsInScope),(0,H.Y)(ue,{component:t,parentComponent:n,orientation:"row",index:i,depth:e,onDrop:this.handleDrop,editMode:u,children:({dragSourceRef:n})=>(0,H.FD)(Ia,{className:"dashboard-component dashboard-component-tabs",children:[u&&c&&(0,H.FD)(oo,{innerRef:n,position:"left",children:[(0,H.Y)(zo,{position:"left"}),(0,H.Y)(io,{onDelete:this.handleDeleteComponent})]}),(0,H.Y)(g.pX,{id:t.id,activeKey:b,onChange:e=>{this.handleClickTab(m.indexOf(e))},onEdit:this.handleEdit,type:u?"editable-card":"card",children:m.map(((n,i)=>{var c;return(0,H.Y)(g.pX.TabPane,{tab:C(n)?(0,H.Y)(H.FK,{}):(0,H.FD)(H.FK,{children:[x(i).left&&(0,H.Y)($a,{className:"drop-indicator-left",pos:"left"}),(0,H.Y)(_a,{id:n,parentId:t.id,depth:e,index:i,renderType:ha,availableColumnCount:r,columnWidth:o,onDropOnTab:this.handleDropOnTab,onDropPositionChange:this.handleGetDropPosition,onDragTab:this.handleDragggingTab,onHoverTab:()=>this.handleClickTab(i),isFocused:b===n,isHighlighted:b!==n&&(null==(c=S)?void 0:c.includes(n))})]}),closeIcon:C(n)?(0,H.Y)(H.FK,{}):(0,H.Y)(Ra,{role:"button",tabIndex:i,showDropIndicators:x(i)}),children:d&&(0,H.Y)(_a,{id:n,parentId:t.id,depth:e,index:i,renderType:ua,availableColumnCount:r,columnWidth:o,onResizeStart:a,onResize:s,onResizeStop:l,onDropOnTab:this.handleDropOnTab,isComponentVisible:f===i&&h})},n)}))})]})})}}ka.propTypes=wa,ka.defaultProps=Da;const Ya=(0,u.Ng)((function(e){return{nativeFilters:e.nativeFilters,activeTabs:e.dashboardState.activeTabs,directPathToChild:e.dashboardState.directPathToChild}}))(ka),Ta={[A.oT]:({id:e,parentId:t,component:n,parentComponent:i,index:s,depth:l,availableColumnCount:d,columnWidth:c,onResizeStart:h,onResize:p,onResizeStop:m,editMode:g,isComponentVisible:f,dashboardId:b,fullSizeChartId:v,getComponentById:y=(()=>{}),deleteComponent:x,updateComponents:C,handleComponentDrop:S,setFullSizeChartId:w,isInView:D})=>{const{chartId:I}=n.meta,F=v===I,$=(e=>{const t=(0,a.DP)(),n=(0,u.d4)((e=>e.nativeFilters)),i=((e,t)=>{if(!e.focusedFilterField)return null;const{chartId:n,column:i}=e.focusedFilterField;return{chartId:n,scope:t[n].scopes[i]}})((0,u.d4)((e=>e.dashboardState)),(0,u.d4)((e=>e.dashboardFilters))),r=(null==n?void 0:n.focusedFilterId)||(null==n?void 0:n.hoveredFilterId);if(!i&&!r)return{};const o={borderColor:t.colors.primary.light2,opacity:1,boxShadow:`0px 0px ${2*t.gridUnit}px ${t.colors.primary.base}`,pointerEvents:"auto"};var s,l;if(r){if(null!=(s=n.filters[r])&&null!=(l=s.chartsInScope)&&l.includes(e))return o}else if(e===(null==i?void 0:i.chartId)||(0,_t._i)({filterScope:null==i?void 0:i.scope}).includes(e))return o;return{opacity:.3,pointerEvents:"none"}})(I),R=(0,u.d4)((e=>e.dashboardState)),[k,Y]=(0,o.useState)({}),[T,M]=(0,o.useState)(),[_,P]=(0,o.useState)(),[z,U]=(0,o.useState)(0),O=(0,o.useMemo)((()=>{var e;return null!=(e=null==R?void 0:R.directPathToChild)?e:[]}),[R]),q=(0,o.useMemo)((()=>{var e;return null!=(e=null==R?void 0:R.directPathLastUpdated)?e:0}),[R]),N=(0,o.useMemo)((()=>yo(O)),[O]);(0,o.useEffect)((()=>{const{label:e,chart:t}=N;q!==z&&n.id===t&&(U(q),M(n.id),P(e))}),[n,z,q,N]),(0,o.useEffect)((()=>{let e;return T&&(e=setTimeout((()=>{M(void 0),P(void 0)}),2e3)),()=>{e&&clearTimeout(e)}}),[T]);const V=(0,o.useMemo)((()=>{var e,t,r;const o=null==(e=y(null==(r=i.parents)?void 0:r.find((e=>e.startsWith(A.QP)))))||null==(t=e.meta)?void 0:t.width;let a=n.meta.width||E.tK;return i.type===A.QP?a=i.meta.width||E.tK:o&&a>o&&(a=o),a}),[n,y,i.meta.width,i.parents,i.type]),{chartWidth:L,chartHeight:j}=(0,o.useMemo)((()=>{let e=0,t=0;return F?(e=window.innerWidth-32,t=window.innerHeight-32):(e=Math.floor(V*c+(V-1)*E.BD-32),t=Math.floor(n.meta.height*E.iF-32)),{chartWidth:e,chartHeight:t}}),[c,n,F,V]),W=(0,o.useCallback)((()=>{x(e,t)}),[x,e,t]),B=(0,o.useCallback)((e=>{C({[n.id]:{...n,meta:{...n.meta,sliceNameOverride:e}}})}),[n,C]),K=(0,o.useCallback)((()=>{w(F?null:I)}),[I,F,w]),G=(0,o.useCallback)(((e,t)=>{Y((n=>({...n,[e]:t})))}),[]);return(0,H.Y)(ue,{component:n,parentComponent:i,orientation:i.type===A._8?"column":"row",index:s,depth:l,onDrop:S,disableDragDrop:!1,editMode:g,children:({dragSourceRef:e})=>(0,H.Y)(vo,{id:n.id,adjustableWidth:i.type===A._8,adjustableHeight:!0,widthStep:c,widthMultiple:V,heightStep:E.iF,heightMultiple:n.meta.height,minWidthMultiple:E.tK,minHeightMultiple:E.B_,maxWidthMultiple:d+V,onResizeStart:h,onResize:p,onResizeStop:m,editMode:g,children:(0,H.FD)("div",{ref:e,style:$,css:F?xo:void 0,className:r()("dashboard-component","dashboard-component-chart-holder",`dashboard-chart-id-${I}`,T?"fade-in":"fade-out"),children:[!g&&(0,H.Y)(zn,{id:n.id,scrollIntoView:T===n.id}),!!T&&(0,H.Y)("style",{children:`label[for=${_}] + .Select .Select__control {\n                    border-color: #00736a;\n                    transition: border-color 1s ease-in-out;\n                  }`}),(0,H.Y)(no,{componentId:n.id,id:n.meta.chartId,dashboardId:b,width:L,height:j,sliceName:n.meta.sliceNameOverride||n.meta.sliceName||"",updateSliceName:B,isComponentVisible:f,handleToggleFullSize:K,isFullSize:F,setControlValue:G,extraControls:k,isInView:D}),g&&(0,H.Y)(oo,{position:"top",children:(0,H.Y)("div",{children:(0,H.Y)(io,{onDelete:W})})})]})})})},[A.xY]:_o,[A.QP]:Bo,[A.n6]:Xo,[A.PP]:na,[A._8]:da,[A.B8]:ya,[A.wc]:Ya,[A.rG]:({component:e,parentComponent:t,index:n,depth:i,handleComponentDrop:a,editMode:s,columnWidth:l,availableColumnCount:d,onResizeStart:c,onResizeStop:p,onResize:m,deleteComponent:g,parentId:f,updateComponents:b,id:v})=>{const y=t.type===A.QP?t.meta.width||E.tK:e.meta.width||E.tK,x=()=>{g(v,f)},C=Uo.A.find((t=>t.value===(e.meta.background||E.kn))),{Component:S}=ke.get(e.meta.componentKey),w=(0,u.d4)((({nativeFilters:e,dataMask:t})=>({nativeFilters:e,dataMask:t})));return(0,H.Y)(ue,{component:e,parentComponent:t,orientation:t.type===A._8?"column":"row",index:n,depth:i,onDrop:a,editMode:s,children:({dragSourceRef:n})=>(0,H.Y)(ko,{menuItems:[(0,H.Y)(Ho,{id:`${e.id}-background`,value:e.meta.background,onChange:t=>{return"background",n=t,void b({[e.id]:{...e,meta:{...e.meta,background:n}}});var n}})],editMode:s,children:(0,H.Y)("div",{className:r()("dashboard-component",`dashboard-${e.componentKey}`,null==C?void 0:C.className),id:e.id,children:(0,H.Y)(vo,{id:e.id,adjustableWidth:t.type===A._8,widthStep:l,widthMultiple:y,heightStep:E.iF,adjustableHeight:!1,heightMultiple:e.meta.height,minWidthMultiple:E.tK,minHeightMultiple:E.tK,maxWidthMultiple:d+y,onResizeStart:c,onResize:m,onResizeStop:p,children:(0,H.FD)("div",{ref:n,className:"dashboard-component",children:[s&&(0,H.Y)(oo,{position:"top",children:(0,H.Y)(io,{onDelete:x})}),(0,H.Y)(o.Suspense,{fallback:(0,H.Y)("div",{children:(0,h.t)("Loading...")}),children:(0,H.Y)(S,{dashboardData:w})})]})})})})})}};var Ma=n(44407);const Aa={id:w().string,parentId:w().string,depth:w().number,index:w().number,renderHoverMenu:w().bool,renderTabContent:w().bool,onChangeTab:w().func,component:_.nB.isRequired,parentComponent:_.nB.isRequired,createComponent:w().func.isRequired,deleteComponent:w().func.isRequired,updateComponents:w().func.isRequired,handleComponentDrop:w().func.isRequired,logEvent:w().func.isRequired,directPathToChild:w().arrayOf(w().string),directPathLastUpdated:w().number,dashboardId:w().number.isRequired,isComponentVisible:w().bool};class Ea extends o.PureComponent{render(){const{component:e}=this.props,t=e?Ta[e.type]:null;return t?(0,H.Y)(t,{...this.props}):null}}Ea.propTypes=Aa,Ea.defaultProps={isComponentVisible:!0};const _a=(0,u.Ng)((function({dashboardLayout:e,dashboardState:t,dashboardInfo:n},i){const r=e.present,{id:o,parentId:a}=i,s=r[o],l={component:s,getComponentById:e=>r[e],parentComponent:r[a],editMode:t.editMode,filters:(0,_t.ug)(),dashboardId:n.id,dashboardInfo:n,fullSizeChartId:t.fullSizeChartId};if(s){const e=s.type;if(e===A._8||e===A.QP){const{occupiedWidth:t,minimumWidth:n}=(0,Ma.A)({id:o,components:r});e===A._8&&(l.occupiedColumnCount=t),e===A.QP&&(l.minColumnWidth=n)}}return l}),(function(e){return(0,f.zH)({addDangerToast:Fn.iB,createComponent:In.a0,deleteComponent:In.$5,updateComponents:In.m2,handleComponentDrop:In.lL,setDirectPathToChild:Dn.I,setFullSizeChartId:Dn.GM,setActiveTab:Dn.YF,logEvent:$n.logEvent},e)}))(Ea);var Pa=n(64687),za=n(56091),Ua=n(48422);const Oa=(e,t=!1)=>(n,i=!1)=>{const r=i||t;return!n&&e?r?e:{}:n&&!e?r?n:{}:n||e?r?`${e}__${n}`:{}:(console.warn('testWithId function has missed "prefix" and "id" params'),r?"":{})},qa=e=>Object.values(e).reduce(((e,t)=>({...e,[t.id]:t.extraFormData})),{}),Na=(e,t)=>{var n;const i=null==t?void 0:t.value;return(null==(n=e.controlValues)?void 0:n.enableEmptyFilter)&&null==i},Ha=()=>(0,u.d4)((e=>{const{charts:t,datasources:n}=e;return Object.keys(e.charts).reduce(((e,i)=>{var r,o;const a=n[null==(r=t[i])||null==(o=r.form_data)?void 0:o.datasource];return{...e,[i]:a?a.verbose_map:{}}}),{})})),Va=Oa("filter-bar");var La=n(58919);const ja=()=>{const e=(0,u.d4)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.preselectNativeFilters})),t=(0,u.d4)((e=>e.nativeFilters.filters));return(0,o.useMemo)((()=>Object.entries(t).reduce(((t,[n,i])=>({...t,[n]:{...i,preselect:null==e?void 0:e[n]}})),{})),[t,e])},Wa=()=>{const e=(0,u.d4)((e=>e.dataMask));return(0,o.useMemo)((()=>Object.values(e).filter((e=>String(e.id).startsWith(La._L))).reduce(((e,t)=>({...e,[t.id]:t})),{})),[e])};var Ba=n(39093);const Ka=e=>s.AH`
  display: flex;

  && > .filter-clear-all-button {
    color: ${e.colors.grayscale.base};
    margin-left: 0;
    &:hover {
      color: ${e.colors.primary.dark1};
    }

    &[disabled],
    &[disabled]:hover {
      color: ${e.colors.grayscale.light1};
    }
  }
`,Ga=(e,t)=>s.AH`
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  position: fixed;
  z-index: 100;

  // filter bar width minus 1px for border
  width: ${t-1}px;
  bottom: 0;

  padding: ${4*e.gridUnit}px;
  padding-top: ${6*e.gridUnit}px;

  background: linear-gradient(
    ${(0,m.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    pointer-events: auto;
  }

  & > .filter-apply-button {
    margin-bottom: ${3*e.gridUnit}px;
  }
`,Qa=e=>s.AH`
  align-items: center;
  margin-left: auto;
  && > .filter-clear-all-button {
    text-transform: capitalize;
    font-weight: ${e.typography.weights.normal};
  }
  & > .filter-apply-button {
    &[disabled],
    &[disabled]:hover {
      color: ${e.colors.grayscale.light1};
      background: ${e.colors.grayscale.light3};
    }
  }
`,Xa=({width:e=ci.l6,onApply:t,onClearAll:n,dataMaskApplied:i,dataMaskSelected:r,isApplyDisabled:a,filterBarOrientation:s=nt.QI.Vertical})=>{const l=(0,o.useMemo)((()=>Object.values(i).some((e=>{var t,n,i;return(0,ai.A)(null==(t=r[e.id])||null==(n=t.filterState)?void 0:n.value)||!r[e.id]&&(0,ai.A)(null==(i=e.filterState)?void 0:i.value)}))),[i,r]),d=s===nt.QI.Vertical;return(0,H.FD)("div",{css:t=>[Ka(t),d?Ga(t,e):Qa(t)],children:[(0,H.Y)(Y.A,{disabled:a,buttonStyle:"primary",htmlType:"submit",className:"filter-apply-button",onClick:t,...Va("apply-button"),children:d?(0,h.t)("Apply filters"):(0,h.t)("Apply")}),(0,H.Y)(Y.A,{disabled:!l,buttonStyle:"link",buttonSize:"small",className:"filter-clear-all-button",onClick:n,...Va("clear-button"),children:(0,h.t)("Clear all")})]})};var Za,Ja=n(28290),es=(Za=function(e,t){return Za=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},Za(e,t)},function(e,t){function n(){this.constructor=e}Za(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),ts="html",ns="svg",is=function(e,t){var n,i,r,o={};if(e===ts)r=document.createElement("div");else{if(e!==ns)throw new Error('Invalid element type "'+e+'" for createPortalNode: must be "html" or "svg".');r=document.createElementNS("http://www.w3.org/2000/svg","g")}if(t&&"object"==typeof t)for(var a=0,s=Object.entries(t.attributes);a<s.length;a++){var l=s[a],d=l[0],c=l[1];r.setAttribute(d,c)}var h={element:r,elementType:e,setPortalProps:function(e){o=e},getInitialPortalProps:function(){return o},mount:function(t,r){if(r!==i){if(h.unmount(),t!==n&&!function(e,t){if(t===ts)return e instanceof HTMLElement;if(t===ns)return e instanceof SVGElement;throw new Error('Unrecognized element type "'+t+'" for validateElementType.')}(t,e))throw new Error('Invalid element type for portal: "'+e+'" portalNodes must be used with '+e+" elements, but OutPortal is within <"+t.tagName+">.");t.replaceChild(h.element,r),n=t,i=r}},unmount:function(e){e&&e!==i||n&&i&&(n.replaceChild(i,h.element),n=void 0,i=void 0)}};return h},rs=function(e){function t(t){var n=e.call(this,t)||this;return n.addPropsChannel=function(){Object.assign(n.props.node,{setPortalProps:function(e){n.setState({nodeProps:e})}})},n.state={nodeProps:n.props.node.getInitialPortalProps()},n}return es(t,e),t.prototype.componentDidMount=function(){this.addPropsChannel()},t.prototype.componentDidUpdate=function(){this.addPropsChannel()},t.prototype.render=function(){var e=this,t=this.props,n=t.children,i=t.node;return Ja.createPortal(o.Children.map(n,(function(t){return o.isValidElement(t)?o.cloneElement(t,e.state.nodeProps):t})),i.element)},t}(o.PureComponent),os=function(e){function t(t){var n=e.call(this,t)||this;return n.placeholderNode=o.createRef(),n.passPropsThroughPortal(),n}return es(t,e),t.prototype.passPropsThroughPortal=function(){var e=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(e)},t.prototype.componentDidMount=function(){var e=this.props.node;this.currentPortalNode=e;var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentDidUpdate=function(){var e=this.props.node;this.currentPortalNode&&e!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode.setPortalProps({}),this.currentPortalNode=e);var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentWillUnmount=function(){var e=this.props.node;e.unmount(this.placeholderNode.current),e.setPortalProps({})},t.prototype.render=function(){return o.createElement("div",{ref:this.placeholderNode})},t}(o.PureComponent),as=is.bind(null,ts);is.bind(null,ns);const ss=[];function ls(){return(0,u.d4)((e=>{var t,n;return(null==(t=e.dashboardInfo)||null==(n=t.metadata)?void 0:n.native_filter_configuration)||ss}))}function ds(){return(0,u.d4)((e=>{var t;return null==(t=e.dashboardLayout)?void 0:t.present}))}function cs(){const e=ds();return(0,o.useMemo)((()=>Object.values(e).some((e=>e.type===A.B8))),[e])}function hs(){const e=(0,u.d4)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs})),t=function(){const e=ds();return t=>{const n=Object.values(e).find((e=>{var n;return(null==(n=e.meta)?void 0:n.chartId)===t}));return null==n?void 0:n.parents.filter((t=>{var n;return(null==(n=e[t])?void 0:n.type)===A.B8}))}}();return n=>{var i;return(0,xr.O2)(n)||"chartsInScope"in n&&(null==(i=n.chartsInScope)?void 0:i.some((n=>{const i=t(n);return 0===(null==i?void 0:i.length)||(null==i?void 0:i.every((t=>e.includes(t))))})))}}function us(e){const t=cs(),n=hs();return(0,o.useMemo)((()=>{let i=[];const r=[];return t?e.forEach((e=>{n(e)?i.push(e):r.push(e)})):i=e,[i,r]}),[e,t,n])}var ps=n(98250);const ms=(0,o.forwardRef)((({items:e,onOverflowingStateChange:t,dropdownContent:n,dropdownRef:i,dropdownStyle:r={},dropdownTriggerCount:l,dropdownTriggerIcon:d,dropdownTriggerText:c=(0,h.t)("More"),dropdownTriggerTooltip:u=null,forceRender:p,style:m},g)=>{const f=(0,a.DP)(),{ref:b,width:v=0}=(0,ps.uZ)(),y=(0,or.Z)(v)||0,{current:x}=b,[C,S]=(0,o.useState)([]),[w,D]=(0,o.useState)(!1),[I,F]=(0,o.useState)(-1);let $=(0,o.useRef)(null);i&&($=i);const[R,k]=(0,o.useState)(!1),M=e=>e.reduce((([e,t],n)=>(e.push({id:n.id,element:(0,o.cloneElement)(n.element,{key:n.id})}),t.push(n.id),[e,t])),[[],[]]),[A,E]=(0,o.useMemo)((()=>M(e.slice(0,-1!==I?I:e.length))),[e,I]),[_,P]=(0,o.useMemo)((()=>-1!==I?M(e.slice(I)):[[],[]]),[e,I]);(0,o.useLayoutEffect)((()=>{const t=null==x?void 0:x.children.item(0);if(t){const{children:n}=t,i=Array.from(n);if(C.length!==e.length){if(i.length!==e.length)return void F(-1);S(i.map((e=>e.getBoundingClientRect().width)))}const r=i.findIndex((e=>e.getBoundingClientRect().right>t.getBoundingClientRect().right+1));let o=-1===r&&_.length>0?e.length-_.length:r;if(v>y){const t=null==x?void 0:x.children.item(1),n=(null==t?void 0:t.getBoundingClientRect().right)||0,r=((null==x?void 0:x.getBoundingClientRect().right)||0)-n;let a=0;for(let t=i.length;t<e.length&&(a+=C[t],a<=r);t+=1)o=t+1}F(o)}}),[x,e.length,C,_.length,y,v]),(0,o.useEffect)((()=>{t&&t({notOverflowed:E,overflowed:P})}),[E,t,P]);const z=-1!==I?e.length-I:0,U=(0,o.useMemo)((()=>n||z?(0,H.Y)("div",{css:s.AH`
              display: flex;
              flex-direction: column;
              gap: ${4*f.gridUnit}px;
            `,style:r,ref:$,children:n?n(_):_.map((e=>e.element))}):null),[n,z,f.gridUnit,r,_]);return(0,o.useLayoutEffect)((()=>{w&&setTimeout((()=>{$.current&&k($.current.scrollHeight>500)}),100)}),[w]),(0,o.useImperativeHandle)(g,(()=>({...b.current,open:()=>D(!0)})),[b]),(0,o.useEffect)((()=>(document.onscroll=w?()=>D(!1):null,()=>{document.onscroll=null})),[w]),(0,H.FD)("div",{ref:b,css:s.AH`
          display: flex;
          align-items: center;
        `,children:[(0,H.Y)("div",{css:s.AH`
            display: flex;
            align-items: center;
            gap: ${4*f.gridUnit}px;
            margin-right: ${4*f.gridUnit}px;
            min-width: 0px;
          `,style:m,children:A.map((e=>e.element))}),U&&(0,H.FD)(H.FK,{children:[(0,H.Y)(s.mL,{styles:s.AH`
                .ant-popover-inner-content {
                  max-height: ${500}px;
                  overflow: ${R?"auto":"visible"};
                  padding: ${3*f.gridUnit}px ${4*f.gridUnit}px;

                  // Some OS versions only show the scroll when hovering.
                  // These settings will make the scroll always visible.
                  ::-webkit-scrollbar {
                    -webkit-appearance: none;
                    width: 14px;
                  }
                  ::-webkit-scrollbar-thumb {
                    border-radius: 9px;
                    background-color: ${f.colors.grayscale.light1};
                    border: 3px solid transparent;
                    background-clip: content-box;
                  }
                  ::-webkit-scrollbar-track {
                    background-color: ${f.colors.grayscale.light4};
                    border-left: 1px solid ${f.colors.grayscale.light2};
                  }
                }
              `}),(0,H.Y)(An.A,{content:U,trigger:"click",visible:w,onVisibleChange:e=>D(e),placement:"bottom",forceRender:p,children:(0,H.Y)(q.m,{title:u,children:(0,H.FD)(Y.A,{buttonStyle:"secondary",children:[d,c,(0,H.Y)(ar.A,{count:null!=l?l:z,color:(null!=l?l:z)>0?f.colors.primary.base:f.colors.grayscale.light1,showZero:!0,css:s.AH`
                      margin-left: ${2*f.gridUnit}px;
                    `}),(0,H.Y)(T.A.DownOutlined,{iconSize:"m",iconColor:f.colors.grayscale.light1,css:s.AH`
                      .anticon {
                        display: flex;
                      }
                    `})]})})})]})]})})),gs=({filtersOutOfScope:e,renderer:t,hasTopMargin:n,horizontalOverflow:i,forceRender:r=!1})=>(0,H.Y)(R.f5,{ghost:!0,bordered:!0,expandIconPosition:"right",collapsible:0===e.length?"disabled":void 0,css:e=>i?(0,s.AH)("&.ant-collapse>.ant-collapse-item{&>.ant-collapse-header{padding:0;&>.ant-collapse-arrow{right:0;padding:0;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;margin-bottom:",-4*e.gridUnit,"px;}}",""):(0,s.AH)("&.ant-collapse{margin-top:",n?6*e.gridUnit:0,"px;&>.ant-collapse-item{&>.ant-collapse-header{padding-left:0;padding-bottom:",2*e.gridUnit,"px;&>.ant-collapse-arrow{right:",e.gridUnit,"px;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;}}}",""),children:(0,H.Y)(R.f5.Panel,{forceRender:r,header:(0,H.Y)("span",{css:e=>(0,s.AH)("font-size:",e.typography.sizes.s,"px;",""),children:(0,h.t)("Filters out of scope (%d)",e.length)}),children:e.map(t)},"1")});var fs=n(37827),bs=n(29132),vs=n.n(bs),ys=n(28846);const xs=a.I4.div`
  display: flex;
  flex-direction: row;
  background-color: ${({level:e,theme:t})=>t.colors[e].light2};
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({level:e,theme:t})=>t.colors[e].base};
  color: ${({level:e,theme:t})=>t.colors[e].dark2};
  padding: ${({theme:e})=>2*e.gridUnit}px;
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  width: 100%;
`,Cs=a.I4.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  overflow: hidden;
`,Ss=a.I4.span`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`;function ws({body:e,level:t="error",title:n}){const i=(0,a.DP)().colors[t].base;return(0,H.FD)(xs,{level:t,role:"alert",children:["error"===t?(0,H.Y)(T.A.ErrorSolid,{iconColor:i}):(0,H.Y)(T.A.WarningSolid,{iconColor:i}),(0,H.FD)(Cs,{children:[(0,H.Y)(Ss,{children:n}),(0,H.Y)("p",{children:e})]})]})}var Ds=n(79427),Is=n(355),Fs=n(67874),$s=n(26415);const Rs=C()(((e,t)=>{e(t?(0,$s.X6)(t):(0,$s.cd)())}),Ze.jW),ks=C()(((e,t)=>{e(t?(0,$s.TH)(t):(0,$s.S9)())}),Ze.jW),Ys=()=>(0,u.d4)((e=>{var t;return{outlinedFilterId:null==(t=yo(e.dashboardState.directPathToChild||[]))?void 0:t.native_filter,lastUpdated:e.dashboardState.directPathLastUpdated}})),Ts=a.I4.div`
  & > div {
    height: auto !important;
    min-height: ${32}px;
  }
`,Ms=[{data:[{}]}],As=[Zn.nS.NativeFilter],Es=({dataMaskSelected:e,filter:t,onFilterSelectionChange:n,inView:i=!0,showOverflow:r,parentRef:a,setFilterActive:s,orientation:l=nt.QI.Vertical,overflow:c=!1,validateStatus:p})=>{var m,g;const{id:f,targets:b,filterType:v,adhoc_filters:y,time_range:x}=t,C=(0,Xn.A)().get(v),S=function(e,t){const n=(0,u.d4)((t=>{var n;return null==(n=t.nativeFilters.filters[e])?void 0:n.cascadeParentIds}),u.bN);return(0,o.useMemo)((()=>{let e={};return(0,Qn.A)(n).forEach((n=>{const i=null==t?void 0:t[n];e=(0,mr.pY)(e,null==i?void 0:i.extraFormData)})),e}),[t,n])}(f,e),w=(()=>{const e=(0,u.d4)((e=>e.dashboardState.isRefreshing)),t=(0,u.d4)((e=>e.dashboardState.isFiltersRefreshing));return!e&&t})(),[D,I]=(0,o.useState)([]),F=(0,u.d4)((e=>e.dashboardInfo.id)),[$,R]=(0,o.useState)(),[Y,T]=(0,o.useState)({inView:!1}),[M,A]=(0,o.useState)({}),[E,_]=(0,o.useState)(i),P=(0,o.useRef)(null),[z]=b,{datasetId:U,column:O={}}=z,{name:q}=O,N=!!U,[V,L]=(0,o.useState)(N),[j,W]=(0,o.useState)(!1),B=(0,u.wA)(),{outlinedFilterId:K,lastUpdated:G}=Ys(),Q=(0,o.useCallback)((()=>{W(!1),L(!1),w&&B((0,Dn.Xd)())}),[B,w]);(0,o.useEffect)((()=>{!E&&i&&_(!0)}),[i,E,_]),(0,o.useEffect)((()=>{var e;if(!E)return;const n=(0,mr.tg)({...t,datasetId:U,dependencies:S,groupby:q,adhoc_filters:y,time_range:x,dashboardId:F}),i=(null==(e=t.dataMask)?void 0:e.ownState)||{};if(!j&&(!vs()(Y,n,((e,t,n)=>"url_params"===n||void 0))||!Hn()(M,i)||w)){if(T(n),A(i),!N)return;W(!0),(0,On.getChartDataRequest)({formData:n,force:w,ownState:i}).then((({response:e,json:t})=>{if((0,d.G7)(d.TO.GlobalAsyncQueries)){const n="result"in t?t.result[0]:t;if(200===e.status)I([n]),Q();else{if(202!==e.status)throw new Error(`Received unexpected response status (${e.status}) while fetching chart data`);(0,Is.fv)(n).then((e=>{I(e),Q()})).catch((e=>{(0,Mn.h4)(e).then((e=>{R(e),Q()}))}))}}else I(t.result),R(void 0),Q()})).catch((e=>{(0,Mn.h4)(e).then((e=>{R(e),Q()}))}))}}),[E,S,U,q,Q,JSON.stringify(t),N,j,w]),(0,o.useEffect)((()=>{K&&K===t.id&&setTimeout((()=>{var e;null==P||null==(e=P.current)||e.focus()}),c?Ze.jW:0)}),[P,K,G,t.id,c]);const X=(0,o.useCallback)((e=>n(t,e)),[t,n]),Z=(0,o.useCallback)((()=>{K!==f&&ks(B,f)}),[B,f,K]),J=(0,o.useCallback)((()=>{ks(B),K===f&&B((0,Dn.I)([]))}),[B,f,K]),ee=(0,o.useCallback)((()=>Rs(B,f)),[B,f]),te=(0,o.useCallback)((()=>Rs(B)),[B]),ne=(0,o.useMemo)((()=>({setDataMask:X,setHoveredFilter:ee,unsetHoveredFilter:te,setFocusedFilter:Z,unsetFocusedFilter:J,setFilterActive:s})),[X,s,ee,te,Z,J]),ie=(0,o.useMemo)((()=>{var e;return{...null==(e=t.dataMask)?void 0:e.filterState,validateStatus:p}}),[null==(m=t.dataMask)?void 0:m.filterState,p]),re=(0,o.useMemo)((()=>({filterBarOrientation:l,isOverflowingFilterBar:c})),[l,c]);var oe;return $?(0,H.Y)(Ds.A,{error:null==(oe=$.errors)?void 0:oe[0],fallback:(0,H.Y)(ws,{title:(0,h.t)("Cannot load filter"),body:$.error,level:"error"})}):(0,H.Y)(Ts,{children:V?(0,H.Y)(k.A,{position:"inline-centered"}):(0,H.Y)(ys.A,{height:32,width:Fs.YH,showOverflow:r,formData:Y,displaySettings:re,parentRef:a,inputRef:P,queriesData:N?D:Ms,chartType:v,behaviors:As,filterState:ie,ownState:null==(g=t.dataMask)?void 0:g.ownState,enableNoResults:null==C?void 0:C.enableNoResults,isRefreshing:j,hooks:ne})})},_s=(0,o.memo)(Es);var Ps=n(47163);const zs=e=>{var t,n;return(null==e||null==(t=e.meta)?void 0:t.text)||(null==e||null==(n=e.meta)?void 0:n.defaultText)||""},Us=e=>{var t,n;return(null==e||null==(t=e.meta)?void 0:t.sliceNameOverride)||(null==e||null==(n=e.meta)?void 0:n.sliceName)||(null==e?void 0:e.id)||""},Os=a.I4.div`
  ${({theme:e})=>s.AH`
    display: flex;
    align-items: center;
    margin: ${e.gridUnit}px 0;
    font-size: ${e.typography.sizes.s}px;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    & .ant-tooltip-open {
      display: inline-flex;
    }
  `};
`,qs=a.I4.span`
  ${({theme:e})=>s.AH`
    color: ${e.colors.grayscale.base};
    padding-right: ${4*e.gridUnit}px;
    margin-right: auto;
    white-space: nowrap;
  `};
`,Ns=a.I4.div`
  ${({theme:e})=>s.AH`
    color: ${e.colors.grayscale.dark1};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline;
  `};
`,Hs=a.I4.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Vs=a.I4.span`
  text-decoration: underline;
  cursor: pointer;
`,Ls=a.I4.span`
  ${({theme:e})=>s.AH`
    color: ${e.colors.primary.base};
  `}
`,js=a.I4.ul`
  ${({theme:e})=>s.AH`
    padding-left: ${3*e.gridUnit}px;
    margin-bottom: 0;
  `};
`,Ws=a.I4.span`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,Bs=a.I4.div`
  min-width: 0;
  display: inline-flex;
  white-space: nowrap;
`,Ks=a.I4.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,Gs=({title:e,children:t,...n})=>(0,H.Y)(q.m,{title:e,placement:"bottom",overlayClassName:"filter-card-tooltip",...n,children:(0,H.Y)(Bs,{children:t})}),Qs=(e,t)=>Array.isArray(e)&&e.length>0?(0,H.FD)(H.FK,{children:[(0,H.FD)(Ws,{children:[t,":"]}),(0,H.Y)(js,{children:e.map((e=>(0,H.Y)("li",{children:e})))})]}):null,Xs=(0,o.memo)((({filter:e})=>{const t=(e=>{const t=(0,u.d4)((e=>e.dashboardLayout.present)),n=di();return(0,o.useMemo)((()=>{var i;let r;const o=t[E.wv].children[0];if(o.startsWith("TABS-")&&(r=t[o].children),0===e.scope.rootPath.length)return;if(0===e.scope.excluded.length&&(e.scope.rootPath[0]===E.wv||null!=(i=r)&&i.every((t=>e.scope.rootPath.includes(t)))))return{all:[(0,h.t)("All charts")]};if(0===e.scope.excluded.length&&r)return{tabs:e.scope.rootPath.map((e=>zs(t[e]))).filter(Boolean)};const a=Object.values(t).filter((e=>e.type===A.oT));if(e.scope.rootPath[0]===E.wv)return{charts:n.filter((t=>!e.scope.excluded.includes(t))).map((e=>{const t=a.find((t=>t.meta.chartId===e));return Us(t)})).filter(Boolean)};if(r){const i=[...e.scope.rootPath],r=a.filter((e=>e.parents.some((e=>i.includes(e)))));e.scope.excluded.forEach((e=>{const t=i.findIndex((t=>{var n;return null==(n=r.find((t=>t.meta.chartId===e)))?void 0:n.parents.includes(t)}));t>-1&&i.splice(t,1)}));const o=n.filter((t=>!e.scope.excluded.includes(t))).reduce(((e,t)=>{const n=r.find((e=>e.meta.chartId===t&&e.parents.every((e=>!i.includes(e)))));return n&&e.push(n),e}),[]);return{tabs:i.map((e=>zs(t[e]))).filter(Boolean),charts:o.map(Us).filter(Boolean)}}}),[n,e.scope.excluded,e.scope.rootPath,t])})(e),[n,i,r,a]=(0,Ps.A)(),s=(0,o.useMemo)((()=>0!==r&&t?t.all?(0,H.Y)("span",{children:(0,h.t)("All charts")}):(0,H.FD)("div",{children:[Qs(t.tabs,(0,h.t)("Tabs")),Qs(t.charts,(0,h.t)("Charts"))]}):null),[r,t]);return(0,H.FD)(Os,{children:[(0,H.Y)(qs,{children:(0,h.t)("Scope")}),(0,H.FD)(Gs,{title:s,children:[(0,H.Y)(Ns,{ref:n,children:t?Object.values(t).flat().map(((e,t)=>(0,H.Y)("span",{children:0===t?e:`, ${e}`},e))):(0,h.t)("None")}),a&&(0,H.FD)(Ls,{ref:i,children:["+",r]})]})]})})),Zs=({dependency:e,hasSeparator:t})=>{const n=(0,u.wA)(),i=(0,o.useCallback)((()=>{n((0,Dn.I)([e.id]))}),[e.id,n]);return(0,H.FD)("span",{children:[t&&(0,H.Y)("span",{children:", "}),(0,H.Y)(Vs,{role:"button",onClick:i,tabIndex:0,children:e.name})]})},Js=(0,o.memo)((({filter:e})=>{const t=(e=>{const t=(0,Qn.A)(e.cascadeParentIds);return(0,u.d4)((e=>0===t.length?[]:t.reduce(((t,n)=>(t.push(e.nativeFilters.filters[n]),t)),[])))})(e),[n,i,r,l]=(0,Ps.A)(),d=(0,a.DP)(),c=(0,o.useMemo)((()=>r>0&&t?(0,H.Y)(js,{children:t.map((e=>(0,H.Y)("li",{children:(0,H.Y)(Zs,{dependency:e})})))}):null),[r,t]);return Array.isArray(t)&&0!==t.length?(0,H.FD)(Os,{children:[(0,H.FD)(qs,{css:s.AH`
          display: inline-flex;
          align-items: center;
        `,children:[(0,h.t)("Dependent on")," ",(0,H.Y)(Gs,{title:(0,h.t)("Filter only displays values relevant to selections made in other filters."),children:(0,H.Y)(T.A.Info,{iconSize:"m",iconColor:d.colors.grayscale.light1,css:s.AH`
              margin-left: ${d.gridUnit}px;
            `})})]}),(0,H.FD)(Gs,{title:c,children:[(0,H.Y)(Ns,{ref:n,children:t.map(((e,t)=>(0,H.Y)(Zs,{dependency:e,hasSeparator:0!==t},e.id)))}),l&&(0,H.FD)(Ls,{ref:i,children:["+",r]})]})]}):null}));var el=n(33031),tl=n.n(el),nl=n(63375),il=n.n(nl),rl=n(86963);const ol=a.I4.div`
  ${({theme:e})=>`\n  cursor: pointer;\n  margin: ${4*e.gridUnit}px;\n  color: ${e.colors.primary.base};\n  &:hover {\n    color: ${e.colors.primary.dark1};\n  }\n`}
`,al=a.I4.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,sl=[{label:(0,h.t)("Filter"),type:xr.EH.NativeFilter},{label:(0,h.t)("Divider"),type:xr.EH.Divider}],ll=({getFilterTitle:e,onChange:t,onAdd:n,onRemove:i,onRearrange:r,restoreFilter:l,currentFilterId:d,filters:c,removedFilters:u,erroredFilters:p})=>{const m=(0,o.useRef)(null),g=(0,a.DP)(),f=(0,H.Y)(Xe.NG,{mode:"horizontal",children:sl.map((e=>(0,H.Y)(Xe.NG.Item,{onClick:()=>{return t=e.type,n(t),void setTimeout((()=>{var e;const t=document.getElementById("native-filters-tabs");if(t){const e=t.getElementsByClassName("ant-tabs-nav-list")[0];e.scrollTop=e.scrollHeight}null==m||null==(e=m.current)||null==e.scroll||e.scroll({top:m.current.scrollHeight,behavior:"smooth"})}),0);var t},children:e.label})))});return(0,H.FD)(al,{children:[(0,H.Y)(R.rM,{overlay:f,arrow:!0,placement:"topLeft",trigger:["hover"],children:(0,H.FD)(ol,{children:[(0,H.Y)("div",{className:"fa fa-plus"})," ",(0,H.Y)("span",{children:(0,h.t)("Add filters and dividers")})]})}),(0,H.Y)("div",{css:(0,s.AH)({height:"100%",overflowY:"auto",marginLeft:3*g.gridUnit},"",""),children:(0,H.Y)(Ui,{ref:m,filters:c,currentFilterId:d,removedFilters:u,getFilterTitle:e,erroredFilters:p,onChange:t,onRemove:i,onRearrange:r,restoreFilter:l})})]})},dl=a.I4.div`
  display: flex;
  height: 100%;
`,cl=a.I4.div`
  flex-grow: 3;
  margin-left: ${({theme:e})=>-1*e.gridUnit-1};
`,hl=a.I4.div`
  min-width: 300px;
  max-width: 300px;
  border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
`,ul=({getFilterTitle:e,onChange:t,onRemove:n,onRearrange:i,restoreFilter:r,onAdd:o,erroredFilters:a,children:s,currentFilterId:l,filters:d,removedFilters:c})=>(0,H.FD)(dl,{children:[(0,H.Y)(hl,{children:(0,H.Y)(ll,{currentFilterId:l,filters:d,removedFilters:c,erroredFilters:a,getFilterTitle:e,onChange:t,onAdd:e=>o(e),onRearrange:i,onRemove:e=>n(e),restoreFilter:r})}),(0,H.Y)(cl,{children:s})]});var pl=n(87903),ml=n(58561),gl=n.n(ml),fl=n(61693),bl=n(35233),vl=n(39074),yl=n(25671),xl=n(23876),Cl=n(64829);const Sl=a.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: ${({theme:e})=>10*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit+2}px;

  .checkbox {
    margin-bottom: ${({theme:e,checked:t})=>t?e.gridUnit:0}px;
  }

  & > div {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,wl=a.I4.div`
  margin-left: ${({theme:e})=>6*e.gridUnit}px;
`,Dl=e=>{const{checked:t,disabled:n,title:i,tooltip:r,children:a,onChange:s=(()=>{}),initialValue:l=!1}=e,[d,c]=(0,o.useState)(l);return(0,o.useEffect)((()=>{void 0!==t&&c(t)}),[t]),(0,H.FD)(Sl,{checked:d,children:[(0,H.Y)(R.vo,{className:"checkbox",checked:d,disabled:n,onChange:e=>{const n=e.target.checked;void 0===t&&c(n),s(n)},children:(0,H.FD)(H.FK,{children:[i," ",r&&(0,H.Y)(z.W,{placement:"top",tooltip:r})]})}),d&&(0,H.Y)(wl,{children:a})]})};var Il=n(45905);function Fl({allowClear:e=!1,filterValues:t=(()=>!0),form:n,formField:i="column",filterId:r,datasetId:a,value:s,onChange:l,mode:d}){var c;const[u,p]=(0,o.useState)(),[m,g]=(0,o.useState)(!1),{addDangerToast:f}=(0,lt.Yf)(),b=(0,o.useCallback)((()=>{n.setFields([{name:["filters",r,i],touched:!1,value:null}])}),[n,r,i]),v=(0,o.useMemo)((()=>(0,Qn.A)(u).filter(t).map((e=>e.column_name)).map((e=>({label:e,value:e})))),[u,t]),y=null==(c=n.getFieldValue("filters"))?void 0:c[r].filterType,x=(0,o.useMemo)((()=>null==u?void 0:u.find((e=>e.column_name===s))),[u,s]);return(0,o.useEffect)((()=>{x&&!t(x)&&b()}),[x,y,b]),(0,Il.h)(a,(e=>{null!=e&&(p([]),b()),null!=a&&(g(!0),(0,bl.w)({endpoint:`/api/v1/dataset/${a}?q=${gl().encode({columns:["columns.column_name","columns.is_dttm","columns.type_generic"]})}`}).then((({json:{result:e}})=>{const t=Array.isArray(s)?s:[s];e.columns.some((e=>null==t?void 0:t.includes(e.column_name)))||b(),p(e.columns)}),(async e=>{const{error:t,message:n}=await(0,Mn.h4)(e);let i=n||t||(0,h.t)("An error has occurred");"Forbidden"===n&&(i=(0,h.t)("You do not have permission to edit this dashboard")),f(i)})).finally((()=>g(!1))))})),(0,H.Y)(R.l6,{mode:d,value:"multiple"===d?s||[]:s,ariaLabel:(0,h.t)("Column select"),loading:m,onChange:l,options:v,placeholder:(0,h.t)("Select a column"),notFoundContent:(0,h.t)("No compatible columns found"),showSearch:!0,allowClear:e})}const $l=({onChange:e,value:t})=>{const n=(0,o.useCallback)((({error:e,message:t})=>{let n=t||e||(0,h.t)("An error has occurred");return"Forbidden"===t&&(n=(0,h.t)("You do not have permission to edit this dashboard")),n}),[]);return(0,H.Y)(R.DW,{ariaLabel:(0,h.t)("Dataset"),value:t,options:async(e,t,i)=>{const r=gl().encode({columns:["id","table_name","database.database_name","schema"],filters:[{col:"table_name",opr:"ct",value:e}],page:t,page_size:i,order_column:"table_name",order_direction:"asc"});return(0,bl.w)({endpoint:`/api/v1/dataset/?q=${r}`}).then((e=>({data:e.json.result.map((e=>({customLabel:(0,Cl.$)(e),label:e.table_name,value:e.id}))),totalCount:e.json.count}))).catch((async e=>{const t=n(await(0,Mn.h4)(e));throw new Error(t)}))},onChange:e,notFoundContent:(0,h.t)("No compatible datasets found"),placeholder:(0,h.t)("Select a dataset")})},Rl=e=>(0,o.useMemo)((()=>(0,H.Y)($l,{...e})),[]),kl={filter_time:[pl.s.Temporal],filter_timegrain:[pl.s.Temporal],filter_timecolumn:[pl.s.Temporal],filter_select:[pl.s.Boolean,pl.s.String,pl.s.Numeric,pl.s.Temporal],filter_range:[pl.s.Numeric]},Yl=({hasDefaultValue:e,filterId:t,hasDataset:n,form:i,setDataMask:r,formData:o,enableNoResults:a})=>{var s,l,d,c;const u=null==(s=i.getFieldValue("filters"))?void 0:s[t],p=null==u?void 0:u.defaultValueQueriesData,m=n&&null===p,g=null==u||null==(l=u.defaultDataMask)||null==(d=l.filterState)?void 0:d.value,f=e&&null==g;return m?(0,H.Y)(k.A,{position:"inline-centered"}):(0,H.Y)(ys.A,{height:32,width:"filter_time"===(null==u?void 0:u.filterType)?350:270,appSection:Zn.$s.FilterConfigModal,behaviors:[Zn.nS.NativeFilter],formData:o,queriesData:n?null==u?void 0:u.defaultValueQueriesData:[{data:[{}]}],chartType:null==u?void 0:u.filterType,hooks:{setDataMask:r},enableNoResults:a,filterState:{...null==u||null==(c=u.defaultDataMask)?void 0:c.filterState,validateMessage:f&&(0,h.t)("Value is required"),validateStatus:f&&"error"}})};var Tl,Ml=n(46785);!function(e){e[e.All=0]="All",e[e.Specific=1]="Specific"}(Tl||(Tl={}));const Al=a.I4.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: ${({theme:e})=>e.gridUnit}px;
  }
  padding: 0px ${({theme:e})=>4*e.gridUnit}px;
`,El=(0,a.I4)(R.Wq.Item)`
  margin-bottom: 0;
`,_l=({pathToFormValue:e=[],formScopingType:t,formFilterScope:n,forceUpdate:i,filterScope:r,updateFormValues:a,chartId:s,initiallyExcludedCharts:l})=>{const[d]=(0,o.useState)(r||mi(s,l)),c=(0,o.useRef)(d),[u]=(0,o.useState)(gi(d,s)?Tl.All:Tl.Specific),[p,m]=(0,o.useState)(!!r),g=(0,o.useCallback)((e=>{t===Tl.Specific&&(c.current=e.scope),a(e),m(!0)}),[t,a]),f=(0,o.useCallback)((()=>{if(r||p)return;const e=mi(s,l);a({scope:e,scoping:gi(e,s)?Tl.All:Tl.Specific})}),[s,r,p,l,a]);return(0,Ml.n)(f),(0,H.FD)(Al,{children:[(0,H.Y)(El,{name:[...e,"scoping"],initialValue:u,children:(0,H.FD)(Ft.s.Group,{onChange:({target:{value:e}})=>{const t=e===Tl.All?mi(s):c.current;a({scope:t}),m(!0),i()},children:[(0,H.Y)(Ft.s,{value:Tl.All,children:(0,h.t)("Apply to all panels")}),(0,H.Y)(Ft.s,{value:Tl.Specific,children:(0,h.t)("Apply to specific panels")})]})}),(0,H.Y)(R.o5.Text,{type:"secondary",children:(null!=t?t:u)===Tl.Specific?(0,h.t)("Only selected panels will be affected by this filter"):(0,h.t)("All panels with this column will be affected by this filter")}),(null!=t?t:u)===Tl.Specific&&(0,H.Y)(vi,{updateFormValues:g,initialScope:d,formScope:n,forceUpdate:i,chartId:s,initiallyExcludedCharts:l}),(0,H.Y)(El,{name:[...e,"scope"],hidden:!0,initialValue:d})]})};var Pl=n(18253),zl=n(78325),Ul=n.n(zl);const Ol="filters",ql=(e=!0)=>{const[,t]=(0,o.useState)({});return(0,o.useCallback)((()=>{e&&t({})}),[e])},Nl=(e,t,n)=>{const i=e.getFieldValue(Ol)||{};e.setFields([{name:Ol,value:{...i,[t]:{...i[t],...n}}}])},Hl=e=>{const t=(0,Qn.A)(null==e?void 0:e.column_types);return 0===t.length||t.includes(pl.s.Temporal)},Vl=(0,a.I4)(vt.eI)`
  margin-bottom: 0;
`;const Ll=a.I4.div`
  display: flex;
  flex-direction: column;
  height: 400px; // arbitrary
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,jl=({onClick:e})=>(0,H.FD)(Ll,{children:[(0,H.Y)("p",{children:(0,h.t)("You have removed this filter.")}),(0,H.Y)("div",{children:(0,H.Y)(Y.A,{buttonStyle:"primary",onClick:e,children:(0,h.t)("Restore Filter")})})]}),Wl=a.I4.div`
  display: flex;
  flex-direction: column;
`,Bl=a.I4.div`
  ${({theme:e})=>`\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    color: ${e.colors.primary.base};\n    &:hover {\n      color: ${e.colors.primary.dark1};\n    }\n  `}
`,Kl=(0,a.I4)(T.A.Trash)`
  ${({theme:e})=>`\n    cursor: pointer;\n    margin-left: ${2*e.gridUnit}px;\n    color: ${e.colors.grayscale.base};\n    &:hover {\n      color: ${e.colors.grayscale.dark1};\n    }\n  `}
`,Gl=a.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: ${e.gridUnit}px;\n\n    & > div {\n      width: 270px;\n    }\n  `}
`,Ql=a.I4.div`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,Xl=({availableFilters:e,selection:t,onChange:n,onDelete:i})=>{let r=e.find((e=>e.value===t)),o=e;return r||(r={label:(0,h.t)("(deleted or invalid type)"),value:t},o=[r,...o]),(0,H.FD)(Gl,{children:[(0,H.Y)(R.l6,{ariaLabel:(0,h.t)("Limit type"),labelInValue:!0,options:o,onChange:e=>n(t,e.value),value:r}),(0,H.Y)(Kl,{iconSize:"xl",onClick:()=>i(t)})]})},Zl=({availableFilters:e=[],dependencies:t=[],onDependenciesChange:n})=>{const[i,r]=(0,o.useState)(t),a=e=>{r(e),n(e)},s=(e,t)=>{const n=i.findIndex((t=>t===e)),r=[...i];r[n]=t,a(r)},l=e=>{const t=[...i];t.splice(i.indexOf(e),1),a(t)};return 0===e.length?(0,H.Y)("span",{children:(0,h.t)("No available filters.")}):(0,H.FD)(H.FK,{children:[i.map((t=>(0,H.Y)(Xl,{selection:t,availableFilters:e.filter((e=>e.value===t||!i.includes(e.value))),onChange:s,onDelete:l},t))),e.length>i.length&&(0,H.FD)(Bl,{role:"button",onClick:()=>{const t=e.find((e=>!i.includes(e.value)));if(t){const e=[...i];e.push(t.value),a(e)}},children:[(0,H.Y)(T.A.PlusSmall,{}),(0,h.t)("Add filter")]})]})},Jl=({availableFilters:e=[],dependencies:t=[],onDependenciesChange:n,getDependencySuggestion:i,children:r})=>{const o=e.length>0,a=t.length>0;return(0,H.Y)(Wl,{children:(0,H.FD)(Dl,{title:(0,h.t)("Values are dependent on other filters"),initialValue:a,onChange:e=>{const t=[];e&&!a&&o&&t.push(i()),n(t)},tooltip:(0,h.t)("Values selected in other filters will affect the filter options to only show relevant values"),children:[a&&(0,H.Y)(Ql,{children:(0,h.t)("Values dependent on")}),(0,H.Y)(Zl,{availableFilters:e,dependencies:t,onDependenciesChange:n,getDependencySuggestion:i}),r]})})},ed=(0,a.I4)(g.Ay.TabPane)`
  padding: ${({theme:e})=>4*e.gridUnit}px 0px;
`,td=a.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    padding: 0px ${4*e.gridUnit}px;\n  `}
`,nd=a.I4.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px ${({theme:e})=>4*e.gridUnit}px;
`,id=["enableEmptyFilter","defaultToFirstItem","multiSelect","searchAllOptions","inverseSelection"],rd=(0,a.I4)(vt.eI)`
  width: ${({expanded:e})=>e?"49%":"260px"};
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  & .ant-form-item-control-input {
    min-height: ${({theme:e})=>10*e.gridUnit}px;
  }
`,od=(0,a.I4)(vt.eI)`
  margin-bottom: 0;
  padding-bottom: 0;
  min-width: ${({expanded:e})=>e?"50%":"260px"};

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  & .ant-form-item-control-input {
    min-height: ${({theme:e})=>10*e.gridUnit}px;
  }
`,ad=(0,a.I4)(vt.eI)`
  min-width: ${({expanded:e})=>e?"50%":"260px"};

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  .ant-form-item-extra {
    display: none;
  }

  & .ant-form-item-control-input {
    height: auto;
  }
`,sd=a.I4.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,ld=(0,a.I4)(vt.eI)`
  margin-bottom: 0;
`,dd=a.I4.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,cd=(0,a.I4)(T.A.Refresh)`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  color: ${({theme:e})=>e.colors.primary.base};
`,hd=(0,a.I4)(fl.A)`
  border-left: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: 0;

  .ant-collapse-header {
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    margin-top: -1px;
    border-radius: 0;
  }

  .ant-collapse-content {
    border: 0;
  }

  .ant-collapse-content-box {
    padding-top: ${({theme:e})=>2*e.gridUnit}px;
  }

  &.ant-collapse > .ant-collapse-item {
    border: 0;
    border-radius: 0;
  }
`,ud=(0,a.I4)(g.Ay)`
  .ant-tabs-nav {
    position: sticky;
    top: 0;
    background: ${({theme:e})=>e.colors.grayscale.light5};
    z-index: 1;
  }

  .ant-tabs-nav-list {
    padding: 0;
  }

  .ant-form-item-label {
    padding-bottom: 0;
  }
`,pd=a.I4.span`
  color: ${({theme:e})=>e.colors.error.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-left: ${({theme:e})=>e.gridUnit-1}px;
  &:before {
    content: '*';
  }
`,md=a.I4.div`
  ${({theme:e,expanded:t})=>`\n    width: ${t?"49%":"260px"};\n    font-size: ${e.typography.sizes.s}px;\n    color: ${e.colors.grayscale.light1};\n    margin:\n      ${2*-e.gridUnit}px\n      0px\n      ${4*e.gridUnit}px\n      ${4*e.gridUnit}px;\n  `}
`,gd={configuration:{key:"configuration",name:(0,h.t)("Settings")},scoping:{key:"scoping",name:(0,h.t)("Scoping")}},fd={configuration:{key:"configuration",name:(0,h.t)("Filter Configuration")},settings:{key:"settings",name:(0,h.t)("Filter Settings")}},bd=["filter_select","filter_range"],vd={[(0,h.t)("Select filter")]:(0,h.t)("Value"),[(0,h.t)("Range filter")]:(0,h.t)("Numerical range"),[(0,h.t)("Time filter")]:(0,h.t)("Time range"),[(0,h.t)("Time column")]:(0,h.t)("Time column"),[(0,h.t)("Time grain")]:(0,h.t)("Time grain"),[(0,h.t)("Group By")]:(0,h.t)("Group by")},yd=({expanded:e,filterId:t,filterToEdit:n,removedFilters:i,form:r,getAvailableFilters:a,activeFilterPanelKeys:l,restoreFilter:c,handleActiveFilterPanelChange:p,setErroredFilters:m,validateDependencies:g,getDependencySuggestion:f,isActive:b},v)=>{var y,x,C,S,w,D,I,F,Y,T,M,A,E,_,P,U,O,N,V,L,j,W,B,K,G;const Q=!!i[t],[X,Z]=(0,o.useState)(),[J,ee]=(0,o.useState)([]),[te,ne]=(0,o.useState)(gd.configuration.key),ie=(0,u.d4)((e=>e.dashboardInfo.id)),[re,oe]=(0,o.useState)(null),ae=ql(b),[se,le]=(0,o.useState)(),de=(0,o.useMemo)((()=>({})),[]),ce=r.getFieldValue("filters"),he=null==ce?void 0:ce[t],ue=he||re||de,pe=(null==ue?void 0:ue.dependencies)||(null==n?void 0:n.cascadeParentIds)||[],me=(0,Xn.A)().items,ge=Object.entries(me).filter((([,{value:e}])=>{var t;return null==(t=e.behaviors)?void 0:t.includes(Zn.nS.NativeFilter)})).map((([e])=>e)),fe=(0,u.d4)((({datasources:e})=>e)),be=(0,u.d4)((({charts:e})=>e)),ve=(0,o.useMemo)((()=>Object.values(fe).some((e=>Hl(e)))),[fe]),ye=(0,o.useMemo)((()=>{const e=Object.values(fe).find((e=>{var t;return e.id===(null==ue||null==(t=ue.dataset)?void 0:t.value)}));return!e||Hl(e)}),[null==ue||null==(y=ue.dataset)?void 0:y.value,fe]),xe=!(null==(x=me[null==ue?void 0:ue.filterType])||null==(C=x.value)||!C.datasourceCount),Ce=null!=(S=null!=(w=null==ue||null==(D=ue.dataset)?void 0:D.value)?w:null==n||null==(I=n.targets[0])?void 0:I.datasetId)?S:((e,t)=>{var n;const i=new Map;let r="",o=0;return Object.values(t).forEach((e=>{const{form_data:t}=e;if(t){const{datasource:e}=t,n=(i.get(e)||0)+1;i.set(e,n),n>o&&(o=n,r=e)}})),null==(n=e[r])?void 0:n.id})(fe,be),{controlItems:Se={},mainControlItems:we={}}=ue?function({expanded:e,datasetId:t,disabled:n,forceUpdate:i,form:r,filterId:o,filterType:a,filterToEdit:s,formFilter:l,removed:d}){var c;const u=null!=(c=((e={})=>{var t,n;return null!=(t=null==(n=Ul()(e.controlPanelSections))?void 0:n.reduce(((e,{controlSetRows:t=[]})=>[...e,...Ul()(t)]),[]))?t:[]})((0,Pl.A)().get(a)))?c:[],p={},m={};return u.filter((e=>"groupby"===(null==e?void 0:e.name))).forEach((n=>{var a,c,u,p,g,f,b,v,y;const x=null!=(a=null==s||null==(c=s.controlValues)?void 0:c[n.name])?a:null==n||null==(u=n.config)?void 0:u.default,C=null==s||null==(p=s.targets[0])||null==(g=p.column)?void 0:g.name,S=(0,H.FD)(H.FK,{children:[(0,H.Y)(Vl,{name:["filters",o,"requiredFirst",n.name],hidden:!0,initialValue:(null==n||null==(f=n.config)?void 0:f.requiredFirst)&&(null==s?void 0:s.requiredFirst)}),(0,H.Y)(rd,{expanded:e,name:["filters",o,"column"],initialValue:C,label:(0,H.Y)(sd,{children:(null==(b=n.config)?void 0:b.label)||(0,h.t)("Column")}),rules:[{required:(null==(v=n.config)?void 0:v.required)&&!d,message:(0,h.t)("Column is required")}],children:(0,H.Y)(Fl,{mode:(null==(y=n.config)?void 0:y.multiple)&&"multiple",form:r,filterId:o,datasetId:t,filterValues:e=>((e,t)=>{var n;return!t.type_generic||!(e in kl)||(null==(n=kl[e])?void 0:n.includes(t.type_generic))})((null==l?void 0:l.filterType)||"",e),onChange:()=>{Nl(r,o,{defaultDataMask:null}),i()}})})]});m[n.name]={element:S,checked:x}})),u.filter((e=>{var t;return(null==e||null==(t=e.config)?void 0:t.renderTrigger)&&"sortAscending"!==e.name&&"enableSingleValue"!==e.name})).forEach((t=>{var a,d,c,u;const m=null!=(a=null==s||null==(d=s.controlValues)?void 0:d[t.name])?a:null==t||null==(c=t.config)?void 0:c.default,g=(0,H.FD)(H.FK,{children:[(0,H.Y)(Vl,{name:["filters",o,"requiredFirst",t.name],hidden:!0,initialValue:(null==t||null==(u=t.config)?void 0:u.requiredFirst)&&(null==s?void 0:s.requiredFirst)}),(0,H.Y)(q.m,{placement:"left",title:t.config.affectsDataMask&&n&&(0,h.t)('Populate "Default value" to enable this control'),children:(0,H.Y)(od,{expanded:e,name:["filters",o,"controlValues",t.name],initialValue:m,valuePropName:"checked",colon:!1,children:(0,H.FD)(R.vo,{disabled:t.config.affectsDataMask&&n,onChange:({target:{checked:e}})=>{t.config.requiredFirst&&Nl(r,o,{requiredFirst:{...null==l?void 0:l.requiredFirst,[t.name]:e}}),t.config.resetConfig&&Nl(r,o,{defaultDataMask:null}),i()},children:[t.config.label," ",t.config.description&&(0,H.Y)(z.W,{placement:"top",label:t.config.name,tooltip:t.config.description})]})},t.name)},t.name)]});p[t.name]={element:g,checked:m}})),{controlItems:p,mainControlItems:m}}({expanded:e,datasetId:Ce,disabled:!1,forceUpdate:ae,form:r,filterId:t,filterType:null==ue?void 0:ue.filterType,filterToEdit:n,formFilter:ue,removed:Q}):{},De=!!we.groupby,Ie=!(null==(Y=(null!=(F=me[null==ue?void 0:ue.filterType])?F:{}).value)||!Y.enableNoResults),Fe=De&&!!J.length,$e=!xe||Ce&&((null==ue?void 0:ue.column)||!De),Re=bd.includes(null==ue?void 0:ue.filterType),ke=Md.includes(null==ue?void 0:ue.filterType),Ye=null==(T=null==ue?void 0:ue.isDataDirty)||T,Te=e=>{Nl(r,t,e),Z(void 0),ae()};let Me={};pe&&pe.length>0&&ce&&pe.forEach((e=>{var t,n;const i=null==(t=ce[e])||null==(n=t.defaultDataMask)?void 0:n.extraFormData;Me=(0,mr.pY)(Me,i)}));const Ae=JSON.stringify(Me),Ee=(0,o.useCallback)(((e=!1)=>{var n,i;if(!xe||null==ue||null==(n=ue.dataset)||!n.value)return void ae();const o=(0,mr.tg)({datasetId:null==ue||null==(i=ue.dataset)?void 0:i.value,dashboardId:ie,groupby:null==ue?void 0:ue.column,...ue});o.extra_form_data=Me,Te({defaultValueQueriesData:null,isDataDirty:!1}),(0,On.getChartDataRequest)({formData:o,force:e}).then((({response:e,json:n})=>{if((0,d.G7)(d.TO.GlobalAsyncQueries)){const i="result"in n?n.result[0]:n;if(200===e.status)Te({defaultValueQueriesData:[i]});else{if(202!==e.status)throw new Error(`Received unexpected response status (${e.status}) while fetching chart data`);(0,Is.fv)(i).then((e=>{Te({defaultValueQueriesData:e})})).catch((e=>{(0,Mn.h4)(e).then((e=>{(e=>{Nl(r,t,{defaultValueQueriesData:null}),Z(e),ae()})(e)}))}))}}else Te({defaultValueQueriesData:n.result})})).catch((e=>{(0,Mn.h4)(e).then((e=>{Z(e)}))}))}),[t,ae,r,ue,xe,Ae]);(0,o.useEffect)((()=>Ee()),[Ae]);const _e=(0,mr.tg)({datasetId:Ce,groupby:De?null==ue?void 0:ue.column:void 0,...ue});_e.extra_form_data=Me;const[Pe,ze,Ue,Oe]=((e,t)=>{var n,i;const r=!(null==e||null==(n=e.controlValues)||!n.enableEmptyFilter),a=!(null==e||null==(i=e.controlValues)||!i.defaultToFirstItem),[s,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(r),[u,p]=(0,o.useState)(""),m=(e=!1)=>{const t=r&&!a;c(t),l(!!t||e)};return(0,o.useEffect)((()=>{var t,n;m(!a&&!(null==e||null==(t=e.defaultDataMask)||null==(n=t.filterState)||!n.value))}),[a,r]),(0,o.useEffect)((()=>{var e,n;m(!a&&!(null==t||null==(e=t.defaultDataMask)||null==(n=e.filterState)||!n.value))}),[]),(0,o.useEffect)((()=>{let e="";a?e=(0,h.t)('Default value set automatically when "Select first filter value by default" is checked'):d?e=(0,h.t)('Default value must be set when "Filter value is required" is checked'):s&&(e=(0,h.t)('Default value must be set when "Filter has default value" is checked')),p(e)}),[s,d,a]),[s,d,u,m]})(ue,n),qe=!Ce||se||(null==ue||null==(M=ue.dataset)?void 0:M.label),Ne=(0,o.useCallback)((()=>{r.setFields([{name:"changed",value:!0}])}),[r]),He=(0,o.useCallback)((e=>{Nl(r,t,e),Ne()}),[t,r,Ne]),Ve=!!(null!=ue&&ue.adhoc_filters||null!=ue&&ue.time_range||null!=n&&null!=(A=n.adhoc_filters)&&A.length||null!=n&&n.time_range),Le=void 0!==(null==ue||null==(E=ue.controlValues)?void 0:E.enableSingleValue)||void 0!==(null==n||null==(_=n.controlValues)?void 0:_.enableSingleValue);let je=null==n||null==(P=n.controlValues)?void 0:P.enableSingleValue;void 0!==(null==ue||null==(U=ue.controlValues)?void 0:U.enableSingleMaxValue)&&({enableSingleValue:je}=ue.controlValues);const We="boolean"==typeof(null==ue||null==(O=ue.controlValues)?void 0:O.sortAscending)||"boolean"==typeof(null==n||null==(N=n.controlValues)?void 0:N.sortAscending);let Be=null==n||null==(V=n.controlValues)?void 0:V.sortAscending;"boolean"==typeof(null==ue||null==(L=ue.controlValues)?void 0:L.sortAscending)&&(Be=ue.controlValues.sortAscending);const Ke=!xe||!Ye&&$e||!we.groupby,Ge=e=>{var n;const i=null==(n=r.getFieldValue("filters"))?void 0:n[t].controlValues;Nl(r,t,{controlValues:{...i,sortAscending:e}}),ae()},Qe=e=>{var n;const i=null==(n=r.getFieldValue("filters"))?void 0:n[t].controlValues;Nl(r,t,{controlValues:{...i,enableSingleValue:e}}),ae()},Xe=()=>setTimeout((()=>r.validateFields([["filters",t,"adhoc_filters"],["filters",t,"time_range"]])),0),Ze=(null==ue?void 0:ue.time_range)&&"No filter"!==ue.time_range,Je=(null==ue||null==(j=ue.adhoc_filters)?void 0:j.length)>0,et=null==ue||null==(W=ue.controlValues)?void 0:W.defaultToFirstItem,tt=(null==ue?void 0:ue.filterType)===(null==n?void 0:n.filterType)?null==n?void 0:n.defaultDataMask:null,nt=()=>Ze||Je?Promise.resolve():Promise.reject(new Error((0,h.t)("Pre-filter is required"))),it=a(t),rt=it.length>0,ot=it.filter((e=>"filter_time"===e.type)).some((e=>null==pe?void 0:pe.includes(e.value)));(0,o.useEffect)((()=>{Ce&&(0,bl.w)({endpoint:`/api/v1/dataset/${Ce}?q=${gl().encode({columns:["columns.column_name","columns.expression","columns.filterable","columns.is_dttm","columns.type","columns.verbose_name","database.id","database.database_name","datasource_type","filter_select_enabled","id","is_sqllab_view","main_dttm_col","metrics.metric_name","metrics.verbose_name","schema","sql","table_name"]})}`}).then((e=>{var t,n,i;ee(null==(t=e.json)||null==(n=t.result)?void 0:n.metrics);const r=null==(i=e.json)?void 0:i.result;r.type=r.datasource_type,r.filter_select=!0,le(r)})).catch((e=>{(0,Fn.iB)(e.message)}))}),[Ce]),(0,o.useImperativeHandle)(v,(()=>({changeTab(e){ne(e)}}))),((e,t)=>{var n,i;const r=ql(),a=null==(n=e.getFieldValue("filters"))?void 0:n[t];(0,o.useEffect)((()=>{Nl(e,t,{isDataDirty:!0,defaultValueQueriesData:null}),r()}),[e,null==a?void 0:a.filterType,null==a?void 0:a.column,null==a||null==(i=a.dataset)?void 0:i.value,JSON.stringify(null==a?void 0:a.adhoc_filters),null==a?void 0:a.time_range,r,t])})(r,t),(0,o.useEffect)((()=>{xe&&$e&&Pe&&Ye&&Ee()}),[xe,$e,Pe,Ye,Ee,qe]);const at=(0,o.useMemo)((()=>{var e;const t=[];return void 0===(null==ue||null==(e=ue.dataset)?void 0:e.value)?[]:(Object.values(be).forEach((e=>{var n,i,r;const o=null==(n=e.form_data)?void 0:n.datasource;void 0!==o&&(null==(i=fe[o])?void 0:i.id)!==(null==ue||null==(r=ue.dataset)?void 0:r.value)&&t.push(e.id)})),t)}),[JSON.stringify(be),null==ue||null==(B=ue.dataset)?void 0:B.value,JSON.stringify(fe)]);if((0,o.useEffect)((()=>{Q&&oe(he)}),[Q]),(0,o.useEffect)((()=>{re&&!Q&&(Nl(r,t,re),oe(null))}),[he,t,r,Q,re]),Q)return(0,H.Y)(jl,{onClick:()=>c(t)});const st=(0,H.Y)(od,{expanded:e,name:["filters",t,"granularity_sqla"],label:(0,H.FD)(H.FK,{children:[(0,H.Y)(sd,{children:(0,h.t)("Time column")})," ",(0,H.Y)(z.W,{placement:"top",tooltip:ot?(0,h.t)("Time column to apply dependent temporal filter to"):(0,h.t)("Time column to apply time range to")})]}),initialValue:null==n?void 0:n.granularity_sqla,children:(0,H.Y)(Fl,{allowClear:!0,form:r,formField:"granularity_sqla",filterId:t,filterValues:e=>!!e.is_dttm,datasetId:Ce,onChange:e=>{Nl(r,t,{granularity_sqla:e}),ae()}})});return(0,H.FD)(ud,{activeKey:te,onChange:e=>ne(e),centered:!0,children:[(0,H.FD)(ed,{tab:gd.configuration.name,forceRender:!0,children:[(0,H.FD)(td,{children:[(0,H.Y)(rd,{expanded:e,name:["filters",t,"type"],hidden:!0,initialValue:xr.EH.NativeFilter,children:(0,H.Y)($.pd,{})}),(0,H.Y)(rd,{expanded:e,name:["filters",t,"name"],label:(0,H.Y)(sd,{children:(0,h.t)("Filter name")}),initialValue:null==n?void 0:n.name,rules:[{required:!Q,message:(0,h.t)("Name is required")}],children:(0,H.Y)($.pd,{...Td("name-input")})}),(0,H.Y)(rd,{expanded:e,name:["filters",t,"filterType"],rules:[{required:!Q,message:(0,h.t)("Name is required")}],initialValue:(null==n?void 0:n.filterType)||"filter_select",label:(0,H.Y)(sd,{children:(0,h.t)("Filter Type")}),...Td("filter-type"),children:(0,H.Y)(R.l6,{ariaLabel:(0,h.t)("Filter type"),options:ge.map((e=>{var t,n,i;const r=null==(t=me[e])?void 0:t.value.name,o=r?vd[r]:void 0,a=1===(null==(n=kl[e])?void 0:n.length)&&(null==(i=kl[e])?void 0:i.includes(pl.s.Temporal))&&!ve;return{value:e,label:o||r,customLabel:a?(0,H.Y)(q.m,{title:(0,h.t)("Datasets do not contain a temporal column"),children:o||r}):void 0,disabled:a}})),onChange:e=>{Nl(r,t,{filterType:e,defaultDataMask:null,column:null}),ae()}})})]}),"filter_time"===(null==ue?void 0:ue.filterType)&&(0,H.Y)(md,{expanded:e,children:(0,h.t)("Dashboard time range filters apply to temporal columns defined in\n          the filter section of each chart. Add temporal columns to the chart\n          filters to have this dashboard filter impact those charts.")}),xe&&(0,H.FD)(nd,{children:[qe?(0,H.Y)(rd,{expanded:e,name:["filters",t,"dataset"],label:(0,H.Y)(sd,{children:(0,h.t)("Dataset")}),initialValue:se?{label:(0,Cl.$)({id:se.id,table_name:se.table_name,schema:se.schema,database:{database_name:se.database.database_name}}),value:se.id}:void 0,rules:[{required:!Q,message:(0,h.t)("Dataset is required")}],...Td("datasource-input"),children:(0,H.Y)(Rl,{onChange:e=>{e.value!==Ce&&Nl(r,t,{dataset:e,defaultDataMask:null,column:null}),ae()}})}):(0,H.Y)(rd,{expanded:e,label:(0,H.Y)(sd,{children:(0,h.t)("Dataset")}),children:(0,H.Y)(k.A,{position:"inline-centered"})}),xe&&Object.keys(we).map((e=>we[e].element))]}),(0,H.FD)(hd,{defaultActiveKey:l,onChange:e=>{p(e)},expandIconPosition:"right",children:["filter_time"!==(null==ue?void 0:ue.filterType)&&(0,H.FD)(fl.A.Panel,{forceRender:!0,header:fd.configuration.name,children:[ke&&rt&&(0,H.Y)(od,{expanded:e,name:["filters",t,"dependencies"],initialValue:pe,children:(0,H.Y)(Jl,{availableFilters:it,dependencies:pe,onDependenciesChange:e=>{Nl(r,t,{dependencies:e}),ae(),g(),Ne()},getDependencySuggestion:()=>f(t),children:ot?st:void 0})}),xe&&Re&&(0,H.Y)(ld,{name:["filters",t,"preFilter"],children:(0,H.FD)(Dl,{initialValue:Ve,title:(0,h.t)("Pre-filter available values"),tooltip:(0,h.t)("Add filter clauses to control the filter's source query,\n                    though only in the context of the autocomplete i.e., these conditions\n                    do not impact how the filter is applied to the dashboard. This is useful\n                    when you want to improve the query's performance by only scanning a subset\n                    of the underlying data or limit the available values displayed in the filter."),onChange:e=>{Ne(),e&&Xe()},children:[(0,H.Y)(ad,{expanded:e,name:["filters",t,"adhoc_filters"],css:(0,s.AH)({width:270},"",""),initialValue:null==n?void 0:n.adhoc_filters,required:!0,rules:[{validator:nt}],children:(0,H.Y)(yl.A,{columns:(null==se||null==(K=se.columns)?void 0:K.filter((e=>e.filterable)))||[],savedMetrics:(null==se?void 0:se.metrics)||[],datasource:se,onChange:e=>{Nl(r,t,{adhoc_filters:e}),ae(),Xe()},label:(0,H.FD)("span",{children:[(0,H.Y)(sd,{children:(0,h.t)("Pre-filter")}),!Ze&&(0,H.Y)(pd,{})]})})}),ye&&(0,H.Y)(od,{expanded:e,name:["filters",t,"time_range"],label:(0,H.Y)(sd,{children:(0,h.t)("Time range")}),initialValue:(null==n?void 0:n.time_range)||(0,h.t)("No filter"),required:!Je,rules:[{validator:nt}],children:(0,H.Y)(vl.Ay,{name:"time_range",onChange:e=>{Nl(r,t,{time_range:e}),ae(),Xe()}})}),Ze&&!ot?st:void 0]})}),"filter_range"!==(null==ue?void 0:ue.filterType)?(0,H.Y)(ld,{name:["filters",t,"sortFilter"],children:(0,H.FD)(Dl,{initialValue:We,title:(0,h.t)("Sort filter values"),onChange:e=>{Ge(e||void 0),Ne()},children:[(0,H.Y)(od,{expanded:e,name:["filters",t,"controlValues","sortAscending"],initialValue:Be,label:(0,H.Y)(sd,{children:(0,h.t)("Sort type")}),children:(0,H.FD)(Ft.s.Group,{onChange:e=>{Ge(e.target.value)},children:[(0,H.Y)(Ft.s,{value:!0,children:(0,h.t)("Sort ascending")}),(0,H.Y)(Ft.s,{value:!1,children:(0,h.t)("Sort descending")})]})}),Fe&&(0,H.Y)(ad,{expanded:e,name:["filters",t,"sortMetric"],initialValue:null==n?void 0:n.sortMetric,label:(0,H.FD)(H.FK,{children:[(0,H.Y)(sd,{children:(0,h.t)("Sort Metric")})," ",(0,H.Y)(z.W,{placement:"top",tooltip:(0,h.t)("If a metric is specified, sorting will be done based on the metric value")})]}),children:(0,H.Y)(R.l6,{allowClear:!0,ariaLabel:(0,h.t)("Sort metric"),name:"sortMetric",options:J.map((e=>{var t;return{value:e.metric_name,label:null!=(t=e.verbose_name)?t:e.metric_name}})),onChange:e=>{void 0!==e&&(Nl(r,t,{sortMetric:e}),ae())}})})]})}):(0,H.Y)(ld,{name:["filters",t,"rangeFilter"],children:(0,H.Y)(Dl,{initialValue:Le,title:(0,h.t)("Single Value"),onChange:e=>{Qe(e?xl.y.Exact:void 0),Ne()},children:(0,H.Y)(od,{expanded:e,name:["filters",t,"controlValues","enableSingleValue"],initialValue:je,label:(0,H.Y)(sd,{children:(0,h.t)("Single value type")}),children:(0,H.FD)(Ft.s.Group,{onChange:e=>Qe(e.target.value),children:[(0,H.Y)(Ft.s,{value:xl.y.Minimum,children:(0,h.t)("Minimum")}),(0,H.Y)(Ft.s,{value:xl.y.Exact,children:(0,h.t)("Exact")}),(0,H.Y)(Ft.s,{value:xl.y.Maximum,children:(0,h.t)("Maximum")})]})})})})]},`${t}-${fd.configuration.key}`),(0,H.FD)(fl.A.Panel,{forceRender:!0,header:fd.settings.name,children:[(0,H.Y)(rd,{expanded:e,name:["filters",t,"description"],initialValue:null==n?void 0:n.description,label:(0,H.Y)(sd,{children:(0,h.t)("Description")}),children:(0,H.Y)($.fs,{})}),(0,H.Y)(ld,{name:["filters",t,"defaultValueQueriesData"],hidden:!0,initialValue:null}),(0,H.Y)(ld,{name:["filters",t,"defaultValue"],children:(0,H.Y)(Dl,{checked:Pe,disabled:ze||et,initialValue:Pe,title:(0,h.t)("Filter has default value"),tooltip:Ue,onChange:e=>{Oe(e),e||Nl(r,t,{defaultDataMask:null}),Ne()},children:!Q&&(0,H.Y)(ad,{expanded:e,name:["filters",t,"defaultDataMask"],initialValue:tt,label:(0,H.Y)(sd,{children:(0,h.t)("Default Value")}),required:Pe,rules:[{validator:()=>{var e,n;if(null!=ue&&null!=(e=ue.defaultDataMask)&&null!=(n=e.filterState)&&n.value){const e=r.getFieldsError();return m((t=>t.length&&!e.find((e=>e.errors.length>0))?[]:t)),Promise.resolve()}return m((e=>e.includes(t)?e:[...e,t])),Promise.reject(new Error((0,h.t)("Default value is required")))}}],children:X||Ke?(0,H.FD)(dd,{children:[X?(0,H.Y)(Ds.A,{error:null==(G=X.errors)?void 0:G[0],fallback:(0,H.Y)(ws,{title:(0,h.t)("Cannot load filter"),body:X.error,level:"error"})}):(0,H.Y)(Yl,{setDataMask:e=>{var n,i;Hn()(null==tt||null==(n=tt.filterState)?void 0:n.value,null==e||null==(i=e.filterState)?void 0:i.value)||Ne(),Nl(r,t,{defaultDataMask:e}),r.validateFields([["filters",t,"defaultDataMask"]]),ae()},hasDefaultValue:Pe,filterId:t,hasDataset:xe,form:r,formData:_e,enableNoResults:Ie}),xe&&Ce&&(0,H.Y)(q.m,{title:(0,h.t)("Refresh the default values"),children:(0,H.Y)(cd,{onClick:()=>Ee(!0)})})]}):(0,h.t)('Fill all required fields to enable "Default Value"')})})}),Object.keys(Se).sort(((e,t)=>id.indexOf(e)-id.indexOf(t))).map((e=>Se[e].element))]},`${t}-${fd.settings.key}`)]},`native-filter-config-${t}`)]},gd.configuration.key),(0,H.Y)(ed,{tab:gd.scoping.name,forceRender:!0,children:(0,H.Y)(_l,{updateFormValues:He,pathToFormValue:["filters",t],forceUpdate:ae,filterScope:null==n?void 0:n.scope,formFilterScope:null==ue?void 0:ue.scope,formScopingType:null==ue?void 0:ue.scoping,initiallyExcludedCharts:at})},gd.scoping.key)]})},xd=(0,o.memo)((0,o.forwardRef)(yd));var Cd={name:"1216n71",styles:"text-align:left;flex:1;& .ant-alert-action{align-self:center;}"},Sd={name:"zjik7",styles:"display:flex"};function wd({title:e,onConfirm:t,onDismiss:n,children:i}){return(0,H.Y)(bt.A,{closable:!1,type:"warning",message:e,css:Cd,description:i,action:(0,H.FD)("div",{css:Sd,children:[(0,H.Y)(Y.A,{buttonSize:"small",buttonStyle:"secondary",onClick:n,children:(0,h.t)("Keep editing")},"cancel"),(0,H.Y)(Y.A,{buttonSize:"small",buttonStyle:"primary",onClick:t,children:(0,h.t)("Yes, cancel")},"submit")]})},"alert")}const Dd=({canSave:e=!0,onCancel:t,handleSave:n,onDismiss:i,onConfirmCancel:r,saveAlertVisible:o})=>o?(0,H.Y)(wd,{title:(0,h.t)("There are unsaved changes."),onConfirm:r,onDismiss:i,children:(0,h.t)("Are you sure you want to cancel?")},"cancel-confirm"):(0,H.FD)(H.FK,{children:[(0,H.Y)(Y.A,{buttonStyle:"secondary",onClick:t,children:(0,h.t)("Cancel")},"cancel"),(0,H.Y)(Y.A,{disabled:!e,buttonStyle:"primary",onClick:n,children:(0,h.t)("Save")},"submit")]}),Id=a.I4.div`
  ${({theme:e})=>`\n    padding: ${4*e.gridUnit}px;\n  `}
`,Fd=({componentId:e,divider:t})=>(0,H.FD)(Id,{children:[(0,H.Y)(vt.eI,{initialValue:t?t.title:"",label:(0,h.t)("Title"),name:["filters",e,"title"],rules:[{required:!0,message:(0,h.t)("Title is required"),whitespace:!0}],children:(0,H.Y)($.pd,{})}),(0,H.Y)(vt.eI,{initialValue:t?t.description:"",label:(0,h.t)("Description"),name:["filters",e,"description"],children:(0,H.Y)($.fs,{rows:4})}),(0,H.Y)(vt.eI,{hidden:!0,name:["filters",e,"type"],initialValue:xr.EH.Divider})]}),$d=(0,a.I4)(en.v)`
  min-width: ${880}px;
  width: ${({expanded:e})=>e?"100%":880} !important;

  @media (max-width: ${912}px) {
    width: 100% !important;
    min-width: auto;
  }

  .ant-modal-body {
    padding: 0px;
  }

  ${({expanded:e})=>e&&s.AH`
      height: 100%;

      .ant-modal-body {
        flex: 1 1 auto;
      }
      .ant-modal-content {
        height: 100%;
      }
    `}
`,Rd=a.I4.div`
  display: flex;
  height: ${({expanded:e})=>e?"100%":"700px"};
  flex-direction: row;
  flex: 1;
  .filters-list {
    width: ${({theme:e})=>50*e.gridUnit}px;
    overflow: auto;
  }
`,kd=(0,a.I4)(R.Wq)`
  width: 100%;
`,Yd=a.I4.div`
  margin-left: ${({theme:e})=>4*e.gridUnit}px;
`,Td=Oa("filters-config-modal"),Md=["filter_range","filter_select","filter_time"],Ad=[],Ed={},_d={filters:{}};function Pd({isOpen:e,initialFilterId:t,createNewOnOpen:n,onSave:i,onCancel:r}){const l=(0,u.wA)(),d=(0,a.DP)(),[c]=R.Wq.useForm(),m=(0,o.useRef)(),g=ls(),f=function(){const e=ls();return(0,o.useMemo)((()=>e.reduce(((e,t)=>(e[t.id]=t,e)),{})),[e])}(),[b,v]=(0,o.useState)(Ad),[y,x]=(0,o.useState)(Ed),[S,w]=(0,o.useState)(!1),D=(0,o.useMemo)((()=>il()([...(0,La.fN)(g),...b]).filter((e=>{var t;return!y[e]||(null==(t=y[e])?void 0:t.isPending)}))),[g,b,y]),I=null!=t?t:D[0],[F,$]=(0,o.useState)(I),[k,Y]=(0,o.useState)(Ad),[M,A]=(0,o.useState)(_d),E=b.filter((e=>!y[e])),_=(0,o.useCallback)((e=>{const t=y[e];null!=t&&t.isPending&&clearTimeout(t.timerId),x((t=>({...t,[e]:null})))}),[y]),P=(0,o.useMemo)((()=>Object.keys(f)),[f]),[z,U]=(0,o.useState)(P),[O,q]=(0,o.useState)([I]),N=e=>[`${e}-${fd.configuration.key}`,`${e}-${fd.settings.key}`],[V,L]=(0,o.useState)(N(I)),j=(0,o.useCallback)((e=>{const t=(0,La.Z4)(e);v([...b,t]),$(t),w(!1),U([...z,t]),L(N(t))}),[b,z,$,U,v]);((e,t,n)=>{const i=(0,or.Z)(e);(0,o.useEffect)((()=>{n&&e&&!i&&t(xr.EH.NativeFilter)}),[n,e,i,t])})(e,j,n),((e,t,n,i)=>{(0,o.useEffect)((()=>{const r=e[t];if(r&&!r.isPending){const r=n.flat().find((n=>!e[n]&&n!==t));r&&i(r)}}),[t,e,n,i])})(y,F,z,$);const W=(0,La._k)(x,U,w),B=(e=!1)=>{v(Ad),$(I),x(Ed),w(!1),A(_d),Y(Ad),D.length>0&&L(N(D[0])),e||U(P),q([I]),c.resetFields(["filters"]),c.setFieldsValue({changed:!1})},K=(0,o.useCallback)((e=>{const t=M.filters[e],n=f[e];return t&&"name"in t&&t.name||t&&"title"in t&&t.title||n&&"name"in n&&n.name||n&&"title"in n&&n.title||(0,h.t)("[untitled]")}),[f,M.filters]),G=(0,o.useCallback)((e=>{var t;if(y[e])return!1;const n=(null==(t=c.getFieldValue("filters"))?void 0:t[e])||f[e];return n&&"filterType"in n&&Md.includes(n.filterType)}),[f,c,y]),Q=(0,o.useCallback)((e=>D.filter((t=>t!==e)).filter((e=>G(e))).map((e=>{var t;return{label:K(e),value:e,type:null==(t=f[e])?void 0:t.filterType}}))),[G,D,K]),X=(0,o.useCallback)((()=>{const e=c.getFieldsError(),t=[];e.forEach((e=>{const n=e.name[1];e.errors.length>0&&!t.includes(n)&&t.push(n)})),!t.length&&k.length>0?Y(Ad):t.length>0&&!Hn()(tl()(k),tl()(t))&&Y(t)}),[c,k]),Z=async()=>{const e=await(0,La.l)(c,F,$);if(X(),e){const t=(e=>{const t=Object.keys(f).reduce(((e,t)=>{var n;const i=f[t],r=null==(n=i.cascadeParentIds)?void 0:n.filter((e=>G(e)));return r&&l((0,$s.oB)(t,r)),{...e,[t]:{...i,cascadeParentIds:r}}}),{}),n=null==e?void 0:e.filters;return n&&Object.keys(n).forEach((e=>{const t=n[e];if(!("dependencies"in t))return;const{dependencies:i}=t;i&&(t.dependencies=i.filter((e=>G(e))))})),t})(e);(0,La.K1)(t,z,y,i,e)(),B(!0)}else{var t;null==(t=m.current)||null==t.changeTab||t.changeTab("configuration")}},J=()=>{B(),r()},ee=()=>{const e=c.getFieldValue("changed"),t=z.length!==P.length||z.some(((e,t)=>e!==P[t]));E.length>0||c.isFieldsTouched()||e||t?w(!0):J()},te=(0,o.useCallback)((()=>{const e=new Map,t=c.getFieldValue("filters");return t&&Object.keys(t).forEach((n=>{const i=t[n],r=f[n];let o=[];i&&"dependencies"in i?o=[...i.dependencies]:null!=r&&r.cascadeParentIds&&(o=[...r.cascadeParentIds]),e.set(n,o)})),e}),[f,c]),ne=(0,o.useCallback)((()=>{const e=te();D.filter((e=>!y[e])).forEach((t=>{const n={name:["filters",t,"dependencies"],errors:(0,La.Vp)(e,t)?[(0,h.t)("Cyclic dependency detected")]:[]};c.setFields([n])})),X()}),[te,D,c,X,y]),ie=(0,o.useCallback)((e=>{const t=te(),n=z.filter((t=>t!==e&&G(t)));return n.find((n=>{const i=t.get(e)||[];return i.push(n),!(0,La.Vp)(t,e)||(i.pop(),!1)}))||n[0]}),[te,G,z]),[re,oe]=(0,o.useState)(!1),ae=(0,rl.A)((()=>{oe(!re)})),se=re?T.A.FullscreenExitOutlined:T.A.FullscreenOutlined,le=(0,o.useMemo)((()=>C()(((e,t)=>{const n=e.filters&&Object.values(e.filters).some((e=>e.name&&null!==e.name)),i=e.filters&&Object.values(e.filters).some((e=>e.title&&null!==e.title));(n||i)&&A(t),w(!1),X()}),ia.Q)),[X]);(0,o.useEffect)((()=>{Qe()(y)||Y((e=>e.filter((e=>!y[e]))))}),[y]),(0,o.useEffect)((()=>{O.includes(F)||q([...O,F])}),[F]);const de=(0,o.useCallback)((e=>L(e)),[L]),ce=(0,o.useMemo)((()=>z.map((e=>{if(!O.includes(e))return null;const t=e.startsWith(La.E9),n=F===e;return(0,H.Y)("div",{style:{height:"100%",overflowY:"auto",display:n?"":"none"},children:t?(0,H.Y)(Fd,{componentId:e,divider:f[e]}):(0,H.Y)(xd,{expanded:re,ref:m,form:c,filterId:e,filterToEdit:f[e],removedFilters:y,restoreFilter:_,getAvailableFilters:Q,activeFilterPanelKeys:V,handleActiveFilterPanelChange:de,isActive:n,setErroredFilters:Y,validateDependencies:ne,getDependencySuggestion:ie},e)},e)}))),[O,z,F,f,c,y,_,Q,V,ne,ie,de,re]);return(0,H.Y)($d,{visible:e,maskClosable:!1,title:(0,h.t)("Add and edit filters"),expanded:re,destroyOnClose:!0,onCancel:ee,onOk:Z,centered:!0,footer:(0,H.FD)("div",{css:s.AH`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          `,children:[(0,H.Y)(Dd,{onDismiss:()=>w(!1),onCancel:ee,handleSave:Z,canSave:!k.length,saveAlertVisible:S,onConfirmCancel:J}),(0,H.Y)(Yd,{children:(0,H.Y)(se,{iconSize:"l",iconColor:d.colors.grayscale.dark2,onClick:ae})})]}),children:(0,H.Y)(p.A,{children:(0,H.Y)(Rd,{expanded:re,children:(0,H.Y)(kd,{form:c,onValuesChange:le,layout:"vertical",children:(0,H.Y)(ul,{erroredFilters:k,onRemove:W,onAdd:j,onChange:e=>{$(e),L(N(e))},getFilterTitle:K,currentFilterId:F,removedFilters:y,restoreFilter:_,onRearrange:(e,t)=>{const n=[...z],i=n.splice(e,1)[0];n.splice(t,0,i),U(n)},filters:z,children:ce})})})})})}const zd=(0,o.memo)(Pd),Ud=(0,a.I4)(Y.A)`
  padding: 0;
`,Od=({createNewOnOpen:e,dashboardId:t,initialFilterId:n,onClick:i,children:r})=>{const a=(0,u.wA)(),[s,l]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{l(!1)}),[l]),c=(0,o.useCallback)((async e=>{a(await(0,$s.dO)(e)),d()}),[a,d]),h=(0,o.useCallback)((()=>{l(!0),i&&i()}),[l,i]);return(0,H.FD)(H.FK,{children:[(0,H.Y)(Ud,{...Va("create-filter"),buttonStyle:"link",buttonSize:"xsmall",onClick:h,children:r}),(0,H.Y)(zd,{isOpen:s,onSave:c,onCancel:d,initialFilterId:n,createNewOnOpen:e},`filters-for-${t}`)]})},qd=(0,o.memo)(Od),Nd=({filter:e,hidePopover:t})=>{const n=(0,a.DP)(),[i,,r]=(0,Ps.A)(),o=(0,u.d4)((({dashboardInfo:e})=>e.id)),l=(0,u.d4)((({dashboardInfo:e})=>e.dash_edit_perm));return(0,H.FD)(Os,{css:e=>s.AH`
        margin-bottom: ${3*e.gridUnit}px;
        justify-content: space-between;
      `,children:[(0,H.FD)(Ks,{children:[(0,H.Y)(T.A.FilterSmall,{css:e=>s.AH`
            margin-right: ${e.gridUnit}px;
          `}),(0,H.Y)(Gs,{title:r?e.name:null,children:(0,H.Y)(Hs,{ref:i,children:e.name})})]}),l&&(0,H.Y)(Od,{dashboardId:o,onClick:t,initialFilterId:e.id,children:(0,H.Y)(T.A.Edit,{iconSize:"l",iconColor:n.colors.grayscale.light1})})]})},Hd=({filter:e})=>{const t=(0,o.useMemo)((()=>(0,Xn.A)().get(e.filterType)),[e.filterType]);return(0,H.FD)(Os,{children:[(0,H.Y)(qs,{children:(0,h.t)("Filter type")}),(0,H.Y)(Ns,{children:null==t?void 0:t.name})]})},Vd=({filter:e,hidePopover:t})=>(0,H.FD)("div",{children:[(0,H.Y)(Nd,{filter:e,hidePopover:t}),(0,H.Y)(Hd,{filter:e}),(0,H.Y)(Xs,{filter:e}),(0,H.Y)(Js,{filter:e})]}),Ld=({children:e,filter:t,getPopupContainer:n,isVisible:i=!0,placement:r})=>{const[a,s]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{i||s(!1)}),[i]),(0,H.Y)(An.A,{placement:r,overlayClassName:"filter-card-popover",mouseEnterDelay:.2,mouseLeaveDelay:.2,onVisibleChange:e=>{s(i&&e)},visible:i&&a,content:(0,H.Y)(Vd,{filter:t,hidePopover:()=>{s(!1)}}),getPopupContainer:null!=n?n:()=>document.body,children:e})};var jd=n(99551);const{SubMenu:Wd}=Xe.W1,Bd=(0,a.I4)(jd.g)`
  button.ant-btn:first-of-type {
    display: none;
  }
  > button.ant-btn:nth-of-type(2) {
    display: inline-flex;
    background-color: transparent !important;
    height: unset;
    padding: 0;
    border: none;
    width: auto !important;

    .anticon {
      line-height: 0;
    }
    &:after {
      box-shadow: none !important;
    }
  }
`,Kd=(0,a.I4)(Xe.W1)`
  ${({theme:e})=>`\n    .info {\n      font-size: ${e.typography.sizes.s}px;\n      color: ${e.colors.grayscale.base};\n      padding: ${e.gridUnit}px ${3*e.gridUnit}px ${e.gridUnit}px ${3*e.gridUnit}px;\n    }\n    .ant-dropdown-menu-item-selected {\n      color: ${e.colors.grayscale.dark1};\n      background-color: ${e.colors.primary.light5};\n    }\n  `}
`,Gd=(0,a.I4)(Xe.W1.Item)`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
  border-bottom: ${({divider:e,theme:t})=>e?`1px solid ${t.colors.grayscale.light3};`:"none;"};
`,Qd=a.I4.div`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
`,Xd=e=>{const t=(0,a.DP)(),{icon:n,info:i,menuItems:r,selectedKeys:s,onSelect:l}=e,d=(0,o.useMemo)((()=>(e,n,i)=>(0,H.Y)(Gd,{divider:i,children:(0,H.FD)(Qd,{children:[(0,H.Y)("span",{children:e}),(null==s?void 0:s.includes(n))&&(0,H.Y)(T.A.Check,{iconColor:t.colors.primary.base,className:"tick-menu-item",iconSize:"xl"})]})},n)),[s,t.colors.primary.base]),c=(0,o.useMemo)((()=>(0,H.FD)(Kd,{selectedKeys:s,onSelect:l,selectable:!0,children:[i&&(0,H.Y)("div",{className:"info",children:i}),r.map((e=>{var t;return null!=(t=e.children)&&t.length?(0,H.Y)(Wd,{title:e.label,children:e.children.map((e=>d(e.label,e.key)))},e.key):d(e.label,e.key,e.divider)}))]})),[s,l,i,r,d]);return(0,H.Y)(Bd,{overlay:c,trigger:["click"],icon:n})},Zd=a.I4.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .enable-cross-filters-text {
    padding-left: ${({theme:e})=>2*e.gridUnit+"px"};
  }
`,Jd=(0,a.I4)(P.Ay)`
  ${({theme:e})=>`\n  &,\n  svg {\n    display: inline-block;\n    width: ${4*e.gridUnit}px;\n    height: ${4*e.gridUnit}px;\n  }\n`}
`,ec="cross-filters-menu-key",tc="cross-filters-scoping-menu-key",nc=()=>{const e=(0,u.wA)(),t=(0,a.DP)(),n=(0,u.d4)((({dashboardInfo:e})=>e.crossFiltersEnabled)),i=(0,u.d4)((({dashboardInfo:e})=>e.filterBarOrientation)),[r,s]=(0,o.useState)(i),l=(0,d.G7)(d.TO.DashboardCrossFilters),c=n&&l,[p,m]=(0,o.useState)(c),g=(0,u.d4)((({dashboardInfo:e})=>e.dash_edit_perm)),f=g&&(0,d.G7)(d.TO.HorizontalFilterBar),[b,v]=Wi(),y=(0,o.useCallback)((async t=>{t||e((0,He.V9)()),await e((0,wn.tS)(t))}),[e]),x=(0,o.useCallback)((()=>{m(!p),y(!p)}),[p,y]),C=(0,o.useCallback)((async t=>{if(t!==i){s(t);try{await e((0,wn.ll)(t))}catch{s(i)}}}),[e,i]),S=(0,o.useCallback)((e=>{const t=e.key;var n;t===ec?x():(n=t)===nt.QI.Vertical||n===nt.QI.Horizontal?C(t):t===tc&&b()}),[b,x,C]),w=(0,o.useMemo)((()=>(0,H.FD)(Zd,{children:[(0,H.Y)(Jd,{className:"enable-cross-filters",checked:p,onChange:e=>m(e||!1)})," ",(0,H.Y)("span",{className:"enable-cross-filters-text",children:(0,h.t)("Enable cross-filtering")})]})),[p]),D=(0,o.useMemo)((()=>{const e=[];return l&&g&&(e.push({key:ec,label:w}),e.push({key:tc,label:(0,h.t)("Cross-filtering scoping"),divider:f})),f&&e.push({key:"placement",label:(0,h.t)("Orientation of filter bar"),children:[{key:nt.QI.Vertical,label:(0,h.t)("Vertical (Left)")},{key:nt.QI.Horizontal,label:(0,h.t)("Horizontal (Top)")}]}),e}),[g,f,w,l]);return D.length?(0,H.FD)(H.FK,{children:[(0,H.Y)(Xd,{onSelect:S,icon:(0,H.Y)(T.A.Gear,{name:"gear",iconColor:t.colors.grayscale.base}),menuItems:D,selectedKeys:[r]}),v]}):null},ic=a.I4.div`
  ${({theme:e})=>s.AH`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0 ${2*e.gridUnit}px ${2*e.gridUnit}px;

    & > span {
      font-size: ${e.typography.sizes.l}px;
      flex-grow: 1;
      font-weight: ${e.typography.weights.bold};
    }

    & > div:first-of-type {
      line-height: 0;
    }

    & > button > span.anticon {
      line-height: 0;
    }
  `}
`,rc=(0,a.I4)(Y.A)`
  padding: 0;
`,oc=a.I4.div`
  ${({theme:e})=>`\n    padding: ${3*e.gridUnit}px ${2*e.gridUnit}px ${e.gridUnit}px;\n\n    .ant-dropdown-trigger span {\n      padding-right: ${2*e.gridUnit}px;\n    }\n  `}
`,ac=a.I4.div`
  ${({theme:e})=>s.AH`
    margin-top: ${2*e.gridUnit}px;

    & button > [role='img']:first-of-type {
      margin-right: ${e.gridUnit}px;
      line-height: 0;
    }

    span[role='img'] {
      padding-bottom: 1px;
    }

    .ant-btn > .anticon + span {
      margin-left: 0;
    }
  `}
`,sc=({toggleFiltersBar:e})=>{const t=(0,a.DP)(),n=ja(),i=(0,o.useMemo)((()=>Object.values(n)),[n]),r=(0,u.d4)((({dashboardInfo:e})=>e.dash_edit_perm)),s=(0,u.d4)((({dashboardInfo:e})=>e.id));return(0,H.FD)(oc,{children:[(0,H.FD)(ic,{children:[(0,H.Y)("span",{children:(0,h.t)("Filters")}),(0,H.Y)(nc,{}),(0,H.Y)(rc,{...Va("collapse-button"),buttonStyle:"link",buttonSize:"xsmall",onClick:()=>e(!1),children:(0,H.Y)(T.A.Expand,{iconColor:t.colors.grayscale.base})})]}),r&&(0,H.Y)(ac,{children:(0,H.FD)(qd,{dashboardId:s,createNewOnOpen:0===i.length,children:[(0,H.Y)(T.A.PlusSmall,{})," ",(0,h.t)("Add/Edit Filters")]})})]})},lc=(0,o.memo)(sc),dc=e=>{const{dataMask:t,chartConfiguration:n,dashboardLayout:i,verboseMaps:r}=e;return Object.keys(n).map((e=>{const n=Number(e),o=$r(n,t[n],i);if((0,ai.A)(o.column)&&(0,ai.A)(o.value)){var a;const e=(null==(a=r[n])?void 0:a[(0,yr.A)(o.column)])||o.column;return{...o,column:e,emitterId:n}}return null})).filter(Boolean)};var cc=n(16707);const hc=s.AH`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
`,uc=a.I4.b`
  ${({theme:e})=>`\n    max-width: ${25*e.gridUnit}px;\n  `}
  ${hc}
`,pc=(0,a.I4)("span")`
  ${({theme:e})=>`\n    max-width: ${25*e.gridUnit}px;\n    padding-right: ${e.gridUnit}px;\n  `}
  ${hc}
`,mc=(0,a.I4)(R.vw)`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.grayscale.light3};\n    border-radius: 2px;\n    .anticon-close {\n      vertical-align: middle;\n    }\n  `}
`,gc=e=>{var t;const{filter:n,orientation:i,removeCrossFilter:r}=e,o=(0,a.DP)(),[l,d]=(0,fs.A)(),[c,h]=(0,fs.A)(),u=(0,yr.A)(null!=(t=n.column)?t:"");return(0,H.FD)(mc,{css:s.AH`
        ${i===nt.QI.Vertical?`\n            margin-top: ${2*o.gridUnit}px;\n          `:`\n            margin-left: ${2*o.gridUnit}px;\n          `}
      `,closable:!0,onClose:()=>r(n.emitterId),closeIcon:cc.v,children:[(0,H.Y)(q.m,{title:d?u:null,children:(0,H.Y)(pc,{ref:l,children:u})}),(0,H.Y)(q.m,{title:h?n.value:null,children:(0,H.Y)(uc,{ref:c,children:n.value})})]})},fc=a.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    font-size: ${e.typography.sizes.s}px;\n    color: ${e.colors.grayscale.base};\n    vertical-align: middle;\n    align-items: center;\n  `}
`,bc=(0,a.I4)(T.A.SearchOutlined)`
  ${({theme:e})=>`\n    & > span.anticon.anticon-search {\n      color: ${e.colors.grayscale.light1};\n      margin-left: ${e.gridUnit}px;\n      transition: 0.3s;\n      vertical-align: middle;\n      line-height: 0;\n      &:hover {\n        color: ${e.colors.grayscale.base};\n      }\n    }\n  `}
`,vc=e=>{const{title:t,orientation:n,onHighlightFilterSource:i}=e,[r,o]=(0,fs.A)(),l=(0,a.DP)();return(0,H.FD)(fc,{children:[(0,H.Y)(q.m,{title:o?t:null,children:(0,H.Y)("span",{css:s.AH`
            max-width: ${n===nt.QI.Vertical?45*l.gridUnit+"px":15*l.gridUnit+"px"};
            line-height: 1.4;
            ${hc}
          `,ref:r,children:t})}),(0,H.Y)(q.m,{title:(0,h.t)("Locate the chart"),children:(0,H.Y)(bc,{iconSize:"s",role:"button",tabIndex:0,onClick:i})})]})},yc=e=>{const{filter:t,orientation:n,last:i}=e,r=(0,a.DP)(),l=(0,u.wA)(),d=(0,o.useCallback)((e=>{e&&l((0,Dn.I)(e))}),[l]);return(0,H.FD)("div",{css:s.AH`
        ${n===nt.QI.Vertical?`\n            display: block;\n            margin-bottom: ${4*r.gridUnit}px;\n          `:"\n            display: flex;\n          "}
      `,children:[(0,H.Y)(vc,{title:t.name,orientation:n||nt.QI.Horizontal,onHighlightFilterSource:()=>d(t.path)}),(t.column||t.value)&&(0,H.Y)(gc,{filter:t,orientation:n,removeCrossFilter:e=>{l((0,He.Mv)(e,{extraFormData:{filters:[]},filterState:{value:null,selectedValues:null}}))}}),i&&(0,H.Y)("span",{css:s.AH`
            ${n===nt.QI.Horizontal?`\n                width: 1px;\n                height: 22px;\n                margin-left: ${4*r.gridUnit}px;\n                margin-right: ${r.gridUnit}px;\n              `:`\n                width: 100%;\n                height: 1px;\n                display: block;\n                margin-bottom: ${4*r.gridUnit}px;\n                margin-top: ${4*r.gridUnit}px;\n            `}
            background: ${r.colors.grayscale.light2};
          `})]},`${t.name}${t.emitterId}`)},xc=(0,a.I4)(fl.A)`
  ${({theme:e})=>`\n    .ant-collapse-header {\n      margin-bottom: ${4*e.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-header {\n      padding-bottom: 0;\n    }\n    .ant-collapse-item > .ant-collapse-header > .ant-collapse-arrow {\n      font-size: ${e.typography.sizes.xs}px;\n      padding-top: ${3*e.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {\n      padding-top: 0;\n    }\n  `}
`,Cc=a.I4.span`
  ${({theme:e})=>`\n    font-size: ${e.typography.sizes.s}px;\n  `}
`,Sc=e=>{const{crossFilters:t}=e,n=(0,a.DP)(),i=(0,o.useMemo)((()=>t.map((e=>(0,H.Y)(yc,{filter:e,orientation:nt.QI.Vertical},e.emitterId)))),[t]);return t.length?(0,H.Y)(xc,{ghost:!0,defaultActiveKey:"crossFilters",expandIconPosition:"right",children:(0,H.FD)(fl.A.Panel,{header:(0,H.Y)(Cc,{children:(0,h.t)("Cross-filters")}),children:[i,(0,H.Y)("span",{css:s.AH`
            width: 100%;
            height: 1px;
            display: block;
            background: ${n.colors.grayscale.light3};
            margin: ${8*n.gridUnit}px auto 0 auto;
          `})]},"crossFilters")}):null},wc=()=>{const e=(0,u.d4)((e=>e.dataMask)),t=(0,u.d4)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),n=(0,u.d4)((e=>e.dashboardLayout.present)),i=Ha(),r=dc({dataMask:e,chartConfiguration:t,dashboardLayout:n,verboseMaps:i});return(0,H.Y)(Sc,{crossFilters:r})},Dc=a.I4.div`
  width: ${({theme:e})=>8*e.gridUnit}px;

  & .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  &.open {
    width: ${({width:e})=>e}px; // arbitrary...
  }
`,Ic=a.I4.div`
  ${({theme:e,width:t})=>`\n    & .ant-typography-edit-content {\n      left: 0;\n      margin-top: 0;\n      width: 100%;\n    }\n    position: absolute;\n    top: 0;\n    left: 0;\n    flex-direction: column;\n    flex-grow: 1;\n    width: ${t}px;\n    background: ${e.colors.grayscale.light5};\n    border-right: 1px solid ${e.colors.grayscale.light2};\n    border-bottom: 1px solid ${e.colors.grayscale.light2};\n    min-height: 100%;\n    display: none;\n    &.open {\n      display: flex;\n    }\n  `}
`,Fc=a.I4.div`
  ${({theme:e,offset:t})=>`\n    position: absolute;\n    top: ${t}px;\n    left: 0;\n    height: 100%;\n    width: ${8*e.gridUnit}px;\n    padding-top: ${2*e.gridUnit}px;\n    display: none;\n    text-align: center;\n    &.open {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: ${2*e.gridUnit}px;\n    }\n    svg {\n      cursor: pointer;\n    }\n  `}
`,$c=(0,a.I4)(T.A.Collapse)`
  ${({theme:e})=>`\n    color: ${e.colors.primary.base};\n    margin-bottom: ${3*e.gridUnit}px;\n  `}
`,Rc=(0,a.I4)(T.A.Filter)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,kc=a.I4.div`
  margin-top: ${({theme:e})=>8*e.gridUnit}px;
`,Yc=a.I4.div`
  padding: ${({theme:e})=>4*e.gridUnit}px;
  // 108px padding to make room for buttons with position: absolute
  padding-bottom: ${({theme:e})=>27*e.gridUnit}px;
`,Tc=(0,o.createContext)(!1),Mc=({actions:e,canEdit:t,dataMaskSelected:n,filtersOpen:i,filterValues:a,height:l,isInitialized:c,offset:u,onSelectionChange:p,toggleFiltersBar:m,width:g})=>{const[f,b]=(0,o.useState)(!1),v=(0,o.useRef)(),y=(0,o.useCallback)((()=>m(!0)),[m]),x=(0,o.useMemo)((()=>te()((()=>{clearTimeout(v.current),b(!0),v.current=setTimeout((()=>{b(!1)}),300)}),200)),[]);(0,o.useEffect)((()=>(document.onscroll=x,()=>{document.onscroll=null})),[x]);const C=(0,o.useMemo)((()=>({overflow:"auto",height:l,overscrollBehavior:"contain"})),[l]),S=(0,o.useMemo)((()=>0===a.length?(0,H.Y)(kc,{children:(0,H.Y)(ca.u7,{title:(0,h.t)("No global filters are currently added"),image:"filter.svg",description:t&&(0,h.t)('Click on "+Add/Edit Filters" button to create new dashboard filters')})}):(0,H.Y)(Yc,{children:(0,H.Y)(oh,{dataMaskSelected:n,onFilterSelectionChange:p})})),[t,n,a.length,p]),w=(0,o.useMemo)((()=>(0,d.G7)(d.TO.DashboardCrossFilters)?(0,H.Y)(wc,{}):null),[]);return(0,H.Y)(Tc.Provider,{value:f,children:(0,H.FD)(Dc,{...Va(),className:r()({open:i}),width:g,children:[(0,H.FD)(Fc,{...Va("collapsable"),className:r()({open:!i}),onClick:y,role:"button",offset:u,children:[(0,H.Y)($c,{...Va("expand-button"),iconSize:"l"}),(0,H.Y)(Rc,{...Va("filter-icon"),iconSize:"l"})]}),(0,H.FD)(Ic,{className:r()({open:i}),width:g,children:[(0,H.Y)(lc,{toggleFiltersBar:m}),c?(0,H.Y)("div",{css:C,onScroll:x,children:(0,H.FD)(H.FK,{children:[w,S]})}):(0,H.Y)("div",{css:(0,s.AH)({height:l},"",""),children:(0,H.Y)(k.A,{})}),e]})]})})},Ac=(0,o.memo)(Mc);var Ec;!function(e){e.Right="right",e.Bottom="bottom",e.Left="left"}(Ec||(Ec={}));const _c=a.I4.div`
  position: absolute;
  right: 0;
`,Pc=a.I4.h4`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  margin: 0;
  overflow-wrap: anywhere;
`,zc=(0,a.I4)(Pc)`
  font-weight: ${({theme:e})=>e.typography.weights.normal};
  color: ${({theme:e})=>e.colors.grayscale.base};
  ${fs.P};
`,Uc=(0,a.I4)(zc)`
  max-width: none;
`,Oc=a.I4.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,qc=(0,a.I4)(Oc)`
  margin-bottom: unset;
`,Nc=(0,a.I4)(Oc)`
  width: 100%;
`,Hc=(0,a.I4)(vt.lV)`
  width: 100%;
  && .ant-form-item-label > label {
    text-transform: none;
    width: 100%;
    padding-right: ${({theme:e})=>11*e.gridUnit}px;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,Vc=(0,a.I4)(vt.lV)`
  && .ant-form-item-label > label {
    margin-bottom: 0;
    text-transform: none;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,Lc=(0,a.I4)(Hc)`
  && .ant-form-item-label {
    line-height: 1;
    & > label {
      padding-right: unset;
    }
  }
`,jc=(0,a.I4)(vt.eI)`
  .ant-form-item-label {
    overflow: visible;
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }
  }
`,Wc=(0,a.I4)(vt.eI)`
  && {
    margin-bottom: 0;
    align-items: center;
  }

  .ant-form-item-label {
    overflow: visible;
    padding-bottom: 0;
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }

    & > label::after {
      display: none;
    }
  }

  .ant-form-item-control {
    width: ${({theme:e})=>41*e.gridUnit}px;
  }
`,Bc=jc,Kc=a.I4.div`
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  display: flex;
`,Gc=()=>(0,H.Y)("span",{css:e=>({color:e.colors.error.base,fontSize:`${e.typography.sizes.s}px`,paddingLeft:"1px"}),children:"*"}),Qc=({description:e})=>(0,H.Y)(Kc,{children:(0,H.Y)(q.m,{title:e,placement:"right",overlayInnerStyle:{display:"-webkit-box",WebkitLineClamp:10,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"normal"},getPopupContainer:e=>e.parentElement,children:(0,H.Y)("i",{className:"fa fa-info-circle text-muted",css:e=>({paddingLeft:`${e.gridUnit}px`,cursor:"pointer"})})})}),Xc=({dataMaskSelected:e,filter:t,icon:n,onFilterSelectionChange:i,inView:r,showOverflow:a,parentRef:s,orientation:l=nt.QI.Vertical,overflow:d=!1})=>{var c,h,u;const p=(0,o.useMemo)((()=>as()),[]),[m,g]=(0,o.useState)(!1),{name:f="<undefined>"}=t,b=hs()(t)&&Na(t,null==(c=t.dataMask)?void 0:c.filterState)?"error":void 0,v=!(null==(h=t.controlValues)||!h.enableEmptyFilter),{FilterControlContainer:y,FormItem:x,FilterControlTitleBox:C,FilterControlTitle:S}=((e,t)=>(0,o.useMemo)((()=>e===nt.QI.Horizontal?t?{FilterControlContainer:Lc,FormItem:Bc,FilterControlTitleBox:Nc,FilterControlTitle:Uc}:{FilterControlContainer:Vc,FormItem:Wc,FilterControlTitleBox:qc,FilterControlTitle:zc}:{FilterControlContainer:Hc,FormItem:jc,FilterControlTitleBox:Oc,FilterControlTitle:Pc}),[e,t]))(l,d),w=(0,o.useMemo)((()=>{var e;return(0,H.FD)(C,{children:[(0,H.Y)(S,{children:f}),v&&(0,H.Y)(Gc,{}),(null==(e=t.description)?void 0:e.trim())&&(0,H.Y)(Qc,{description:t.description}),(0,H.Y)(_c,{children:n})]})}),[C,S,f,v,t.description,n]),D=(0,o.useContext)(Tc),I=(0,o.useMemo)((()=>l===nt.QI.Horizontal?d?Ec.Left:Ec.Bottom:Ec.Right),[l,d]);return(0,H.FD)(H.FK,{children:[(0,H.Y)(rs,{node:p,children:(0,H.Y)(_s,{dataMaskSelected:e,filter:t,showOverflow:a,onFilterSelectionChange:i,inView:r,parentRef:s,setFilterActive:g,orientation:l,overflow:d,validateStatus:b})}),(0,H.Y)(y,{layout:l!==nt.QI.Horizontal||d?"vertical":"horizontal",children:(0,H.Y)(Ld,{filter:t,isVisible:!m&&!D,placement:I,children:(0,H.Y)("div",{children:(0,H.Y)(x,{label:w,"aria-label":f,required:null==t||null==(u=t.controlValues)?void 0:u.enableEmptyFilter,validateStatus:b,children:(0,H.Y)(os,{node:p})})})})})]})},Zc=(0,o.memo)(Xc),Jc=({title:e,description:t})=>(0,H.FD)("div",{children:[(0,H.Y)("h3",{children:e}),t?(0,H.Y)("p",{children:t}):null]}),eh=({title:e,description:t})=>{const n=(0,a.DP)(),[i,r]=(0,fs.A)();return(0,H.FD)("div",{css:s.AH`
        display: flex;
        align-items: center;
        height: ${6*n.gridUnit}px;
        border-left: 1px solid ${n.colors.grayscale.light2};
        padding-left: ${4*n.gridUnit}px;

        .filter-item-wrapper:first-child & {
          border-left: none;
          padding-left: 0;
        }
      `,children:[(0,H.Y)(q.m,{overlay:r?e:null,children:(0,H.Y)("h3",{ref:i,css:s.AH`
            ${fs.P};
            max-width: ${32.5*n.gridUnit}px;
            font-size: ${n.typography.sizes.m}px;
            font-weight: ${n.typography.weights.normal};
            margin: 0;
            color: ${n.colors.grayscale.dark1};
          `,children:e})}),t?(0,H.Y)(q.m,{overlay:t,children:(0,H.Y)(T.A.BookOutlined,{iconSize:"l",iconColor:n.colors.grayscale.base,css:s.AH`
              margin: 0 ${1.5*n.gridUnit}px;
              vertical-align: unset;
              line-height: unset;
            `})}):null]})},th=({title:e,description:t})=>{const n=(0,a.DP)(),[i,r]=(0,fs.A)(),[o,l]=(0,fs.A)();return(0,H.FD)("div",{css:s.AH`
        border-top: 1px solid ${n.colors.grayscale.light2};
        padding-top: ${4*n.gridUnit}px;
        margin-bottom: ${4*n.gridUnit}px;
      `,children:[(0,H.Y)(q.m,{overlay:r?(0,H.Y)("strong",{children:e}):null,children:(0,H.Y)("h3",{ref:i,css:s.AH`
            ${fs.P};
            display: block;
            color: ${n.colors.grayscale.dark1};
            font-weight: ${n.typography.weights.normal};
            font-size: ${n.typography.sizes.m}px;
            margin: 0 0 ${n.gridUnit}px 0;
          `,children:e})}),t?(0,H.Y)(q.m,{overlay:l?t:null,children:(0,H.Y)("p",{ref:o,css:s.AH`
              ${fs.P};
              display: block;
              font-size: ${n.typography.sizes.s}px;
              color: ${n.colors.grayscale.base};
              margin: ${n.gridUnit}px 0 0 0;
            `,children:t})}):null]})},nh=({title:e,description:t,orientation:n=nt.QI.Vertical,overflow:i=!1})=>n===nt.QI.Horizontal?i?(0,H.Y)(th,{title:e,description:t}):(0,H.Y)(eh,{title:e,description:t}):(0,H.Y)(Jc,{title:e,description:t}),ih=({overflowedCrossFilters:e,filtersInScope:t,filtersOutOfScope:n,renderer:i,rendererCrossFilter:r,showCollapsePanel:o,forceRenderOutOfScope:a})=>(0,H.FD)("div",{css:e=>s.AH`
      width: ${56*e.gridUnit}px;
      padding: ${e.gridUnit}px 0;
    `,children:[e.map((t=>r(t,nt.QI.Vertical,e.at(-1)))),t.map(i),o&&(0,H.Y)(gs,{filtersOutOfScope:n,renderer:i,forceRender:a,horizontalOverflow:!0})]}),rh=({dataMaskSelected:e,onFilterSelectionChange:t})=>{const n=(0,u.d4)((({dashboardInfo:e})=>(0,d.G7)(d.TO.HorizontalFilterBar)?e.filterBarOrientation:nt.QI.Vertical)),{outlinedFilterId:i,lastUpdated:r}=Ys(),[a,l]=(0,o.useState)([]),c=(0,o.useRef)(null),p=(0,u.d4)((e=>e.dataMask)),m=(0,u.d4)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),g=(0,u.d4)((e=>e.dashboardLayout.present)),f=Ha(),b=(0,d.G7)(d.TO.DashboardCrossFilters),v=(0,o.useMemo)((()=>b?dc({dataMask:p,chartConfiguration:m,dashboardLayout:g,verboseMaps:f}):[]),[m,g,p,b]),{filterControlFactory:y,filtersWithValues:x}=((e,t)=>{const n=ja(),i=(0,o.useMemo)((()=>Object.values(n)),[n]),r=(0,o.useMemo)((()=>i.map((t=>({...t,dataMask:e[t.id]})))),[i,e]);return{filterControlFactory:(0,o.useCallback)(((n,i,o)=>{const a=r[n];return(0,xr.O2)(a)?(0,H.Y)(nh,{title:a.title,description:a.description,orientation:i,overflow:o}):(0,H.Y)(Zc,{dataMaskSelected:e,filter:a,onFilterSelectionChange:t,inView:!1,orientation:i,overflow:o})}),[r,e,t]),filtersWithValues:r}})(e,t),C=(0,o.useMemo)((()=>{const e=new Array(x.length);for(let t=0;t<x.length;t+=1)e[t]=as();return e}),[x.length]),S=new Set(x.map((e=>e.id))),[w,D]=us(x),I=(0,o.useMemo)((()=>x.some((e=>e.requiredFirst))),[x]),F=cs()&&x.length>0,$=(0,o.useCallback)((({id:e},t)=>{const n=x.findIndex((t=>t.id===e)),i=null!=t?t:e;return(0,H.FD)(o.Fragment,{children:["",(0,H.Y)(os,{node:C[n],inView:!0})]},i)}),[x,C]),R=(0,o.useMemo)((()=>w.filter((({id:e})=>null==a?void 0:a.includes(e)))),[w,a]),k=(0,o.useMemo)((()=>v.filter((({emitterId:e,name:t})=>null==a?void 0:a.includes(`${t}${e}`)))),[a,v]),Y=(0,o.useMemo)((()=>[...R.filter((e=>(0,xr.ee)(e))),...k]),[k,R]),M=(0,o.useCallback)(((e,t,n)=>(0,H.Y)(yc,{filter:e,orientation:t,last:w.length>0&&`${n.name}${n.emitterId}`==`${e.name}${e.emitterId}`})),[w.length]),A=(0,o.useMemo)((()=>[...v.map((e=>({id:`${e.name}${e.emitterId}`,element:M(e,nt.QI.Horizontal,v.at(-1))}))),...w.map(((e,t)=>({id:e.id,element:(0,H.Y)("div",{className:"filter-item-wrapper",css:s.AH`
            flex-shrink: 0;
          `,children:$(e,t)})})))]),[w,$,M,v]),E=(0,o.useMemo)((()=>{const e=new Set(D.map((({id:e})=>e))),t=new Set(R.map((({id:e})=>e)));return x.map((n=>e.has(n.id)||t.has(n.id)))}),[D,x,R]);return(0,o.useEffect)((()=>{var e;i&&a.includes(i)&&(null==c||null==(e=c.current)||e.open())}),[i,r,c,a]),(0,H.FD)(H.FK,{children:[C.filter(((e,t)=>S.has(x[t].id))).map(((e,t)=>(0,H.Y)(rs,{node:e,children:y(t,n,E[t])},x[t].id))),n===nt.QI.Vertical&&(0,H.FD)(H.FK,{children:[w.map($),F&&(0,H.Y)(gs,{filtersOutOfScope:D,forceRender:I,hasTopMargin:w.length>0,renderer:$})]}),n===nt.QI.Horizontal&&(0,H.Y)("div",{css:e=>s.AH`
        padding: 0 ${4*e.gridUnit}px;
        min-width: 0;
        flex: 1;
      `,children:(0,H.Y)(ms,{items:A,dropdownTriggerIcon:(0,H.Y)(T.A.FilterSmall,{css:s.AH`
              && {
                margin-right: -4px;
                display: flex;
              }
            `}),dropdownTriggerText:(0,h.t)("More filters"),dropdownTriggerCount:Y.length,dropdownTriggerTooltip:0===Y.length?(0,h.t)("No applied filters"):(0,h.t)("Applied filters: %s",Y.map((e=>e.name)).join(", ")),dropdownContent:R.length||k.length||D.length&&F?()=>(0,H.Y)(ih,{overflowedCrossFilters:k,filtersInScope:R,filtersOutOfScope:D,renderer:$,rendererCrossFilter:M,showCollapsePanel:F,forceRenderOutOfScope:I}):void 0,forceRender:I,ref:c,onOverflowingStateChange:({overflowed:e})=>{(e.length!==a.length||a.reduce(((t,n,i)=>t||n!==e[i]),!1))&&l(e)}})})]})},oh=(0,o.memo)(rh),ah=a.I4.div`
  ${({theme:e})=>`\n    padding: ${3*e.gridUnit}px ${2*e.gridUnit}px ${3*e.gridUnit}px ${4*e.gridUnit}px;\n    background: ${e.colors.grayscale.light5};\n    box-shadow: inset 0px -2px 2px -1px ${e.colors.grayscale.light2};\n  `}
`,sh=a.I4.div`
  ${({theme:e})=>`\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    line-height: 0;\n\n    .loading {\n      margin: ${2*e.gridUnit}px auto ${2*e.gridUnit}px;\n      padding: 0;\n    }\n  `}
`,lh=a.I4.div`
  ${({theme:e})=>`\n    font-weight: ${e.typography.weights.bold};\n    color: ${e.colors.grayscale.base};\n    font-size: ${e.typography.sizes.s}px;\n  `}
`,dh=a.I4.div`
  ${({theme:e,hasFilters:t})=>`\n    height: 24px;\n    display: flex;\n    align-items: center;\n    padding: 0 ${4*e.gridUnit}px 0 ${4*e.gridUnit}px;\n    border-right: ${t?`1px solid ${e.colors.grayscale.light2}`:0};\n\n    button {\n      display: flex;\n      align-items: center;\n      > .anticon {\n        height: 24px;\n        padding-right: ${e.gridUnit}px;\n      }\n      > .anticon + span, > .anticon {\n          margin-right: 0;\n          margin-left: 0;\n        }\n    }\n  `}
`,ch=({actions:e,canEdit:t,dashboardId:n,dataMaskSelected:i,filterValues:r,isInitialized:o,onSelectionChange:a})=>{const s=(0,u.d4)((e=>e.dataMask)),l=(0,u.d4)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),c=(0,u.d4)((e=>e.dashboardLayout.present)),p=(0,d.G7)(d.TO.DashboardCrossFilters),m=Ha(),g=p?dc({dataMask:s,chartConfiguration:l,dashboardLayout:c,verboseMaps:m}):[],f=r.length>0||g.length>0;return(0,H.Y)(ah,{...Va(),children:(0,H.Y)(sh,{children:o?(0,H.FD)(H.FK,{children:[(0,H.Y)(nc,{}),t&&(0,H.Y)(dh,{hasFilters:f,children:(0,H.FD)(qd,{dashboardId:n,createNewOnOpen:0===r.length,children:[(0,H.Y)(T.A.PlusSmall,{})," ",(0,h.t)("Add/Edit Filters")]})}),!f&&(0,H.Y)(lh,{children:(0,h.t)("No filters are currently added to this dashboard.")}),f&&(0,H.Y)(oh,{dataMaskSelected:i,onFilterSelectionChange:a}),e]}):(0,H.Y)(k.A,{position:"inline-centered"})})})},hh=(0,o.memo)(ch),uh=a.I4.div`
  display: none;
`,ph=[Ze.vX.nativeFilters.name,Ze.vX.permalinkKey.name],mh=C()((async(e,t,n,i,r)=>{const{location:o}=e,{search:a}=o,s=new URLSearchParams(a),l=new URLSearchParams;let d;s.forEach(((e,t)=>{ph.includes(t)||l.append(t,e)}));const c=(0,tt.P3)(Ze.vX.nativeFiltersKey),h=JSON.stringify(i);d=n&&c&&await(0,Ba.l6)(t,h,c,r)?c:await(0,Ba.Au)(t,h,r),d&&l.set(Ze.vX.nativeFiltersKey.name,d),window.location.pathname.includes("/superset/dashboard")&&(e.location.pathname=window.location.pathname,e.replace({search:l.toString()}))}),ia.Q),gh=({orientation:e=nt.QI.Vertical,verticalConfig:t,hidden:n=!1})=>{const i=(0,Vn.W6)(),r=Wa(),[a,s]=(0,Pa.e)(r),l=(0,u.wA)(),[d,c]=(0,o.useState)(0),h=(0,Ua.w)(),p=ja(),m=(0,or.Z)(p),g=Object.values(p),f=g.filter(xr.qQ),b=(0,u.d4)((({dashboardInfo:e})=>null==e?void 0:e.id)),v=(0,or.Z)(b),y=(0,u.d4)((({dashboardInfo:e})=>e.dash_edit_perm)),x=(0,u.d4)((e=>e.user)),[C]=us(f),S=(0,o.useRef)(a);S.current=a;const w=(0,o.useCallback)(((e,t)=>{s((n=>{var i,r,o;void 0!==(null==(i=t.filterState)?void 0:i.value)&&void 0===(null==(r=S.current[e.id])||null==(o=r.filterState)?void 0:o.value)&&e.requiredFirst&&l((0,He.Mv)(e.id,t)),n[e.id]={...(0,za.Z)(e.id),...t}}))}),[l,s]);(0,o.useEffect)((()=>{if(m&&b===v){const e={};Object.values(p).forEach((t=>{const n=null==m?void 0:m[t.id];if(!n)return;const i=t.filterType,r=t.targets,o=t.defaultDataMask,a=null==n?void 0:n.filterType,s=null==n?void 0:n.targets,l=null==n?void 0:n.defaultDataMask,d=i!==a,c=!Hn()(r,s),h=!Hn()(o,l);(d||c||h)&&(e[t.id]=(0,za.Z)(t.id))})),Qe()(e)||(s((t=>({...t,...e}))),Object.keys(e).forEach((e=>l((0,He.ml)(e)))))}}),[JSON.stringify(p),JSON.stringify(m),v]);const D=JSON.stringify(r);(0,o.useEffect)((()=>{s((()=>r))}),[D,s]),(0,o.useEffect)((()=>{null!=x&&x.userId&&mh(i,b,d,r,h)}),[b,D,i,d,h]);const I=(0,o.useCallback)((()=>{l((0,$n.logEvent)(We.c1,{}));const e=Object.keys(a);c(1),e.forEach((e=>{a[e]&&l((0,He.Mv)(e,a[e]))}))}),[a,l]),F=(0,o.useCallback)((()=>{const e=[];let t=!1;C.filter(xr.qQ).forEach((n=>{const{id:i}=n;var r;a[i]&&(null!=(r=n.controlValues)&&r.enableEmptyFilter&&(t=!1),e.push(i),s((e=>{var t;void 0!==(null==(t=e[i].filterState)?void 0:t.value)&&(e[i].filterState.value=void 0)})))})),t&&e.forEach((e=>l((0,He.ml)(e))))}),[a,l,C,s]);((e,t)=>{const n=ja(),i=Wa();(0,o.useEffect)((()=>{Object.keys(e).forEach((e=>{n[e]||t((t=>{delete t[e]}))}))}),[i,e,n,t])})(a,s);const $=((e,t,n)=>{const i=Object.values(e),r=Object.values(t);return(0,Wn.r$)(qa(e),qa(t),{ignoreUndefined:!0})||i.length!==r.length||n.some((t=>{var n;return Na(t,null==e||null==(n=e[null==t?void 0:t.id])?void 0:n.filterState)}))})(a,r,C.filter(xr.qQ)),R=(()=>{const[e,t]=(0,o.useState)(!1),n=ja(),i=(0,u.d4)((e=>e.charts));let r=0;return e||(r=document.querySelectorAll('[data-ui-anchor="chart"]').length),(0,o.useEffect)((()=>{if(e)return;if(Object.values(n).find((({requiredFirst:e})=>e)))return void t(!0);let o;0===r&&(o=setTimeout((()=>{t(!0)}),1e3)),r>0&&void 0!==o&&clearTimeout(o);const a=Object.values(i).filter((({chartStatus:e})=>"loading"!==e)).length;r>0&&a>=r&&t(!0)}),[i,e,r]),e})(),k=(0,H.Y)(Xa,{filterBarOrientation:e,width:null==t?void 0:t.width,onApply:I,onClearAll:F,dataMaskSelected:a,dataMaskApplied:r,isApplyDisabled:$}),Y=e===nt.QI.Horizontal?(0,H.Y)(hh,{actions:k,canEdit:y,dashboardId:b,dataMaskSelected:a,filterValues:g,isInitialized:R,onSelectionChange:w}):t?(0,H.Y)(Ac,{actions:k,canEdit:y,dataMaskSelected:a,filtersOpen:t.filtersOpen,filterValues:g,isInitialized:R,height:t.height,offset:t.offset,onSelectionChange:w,toggleFiltersBar:t.toggleFiltersBar,width:t.width}):null;return n?(0,H.Y)(uh,{children:Y}):Y},fh=(0,o.memo)(gh);var bh=n(41621);const vh=e=>{const t=e[E.wv],n=null==t?void 0:t.children[0];return n===E.mK?e[E.wv]:e[n]},yh=(e,t)=>"ant-tabs-nav-wrap"===e.target.className||t.contains(e.target);var xh=n(44383),Ch=n.n(xh),Sh=n(7148),wh=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall","resizeObserverPolyfill"];function Dh(){return Dh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Dh.apply(this,arguments)}var Ih=[],Fh={width:"100%",height:"100%"};function $h(e){var t=e.className,n=e.children,i=e.debounceTime,r=void 0===i?300:i,a=e.ignoreDimensions,s=void 0===a?Ih:a,l=e.parentSizeStyles,d=void 0===l?Fh:l,c=e.enableDebounceLeadingCall,h=void 0===c||c,u=e.resizeObserverPolyfill,p=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,wh),m=(0,o.useRef)(null),g=(0,o.useRef)(0),f=(0,o.useState)({width:0,height:0,top:0,left:0}),b=f[0],v=f[1],y=(0,o.useMemo)((function(){var e=Array.isArray(s)?s:[s];return C()((function(t){v((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),r,{leading:h})}),[r,h,s]);return(0,o.useEffect)((function(){var e=new(u||window.ResizeObserver)((function(e){e.forEach((function(e){var t,n=null!=(t=null==e?void 0:e.contentRect)?t:{},i=n.left,r=n.top,o=n.width,a=n.height;g.current=window.requestAnimationFrame((function(){y({width:o,height:a,top:r,left:i})}))}))}));return m.current&&e.observe(m.current),function(){window.cancelAnimationFrame(g.current),e.disconnect(),y.cancel()}}),[y,u]),o.createElement("div",Dh({style:d,ref:m,className:t},p),n(Dh({},b,{ref:m.current,resize:y})))}$h.propTypes={className:w().string,debounceTime:w().number,enableDebounceLeadingCall:w().bool,ignoreDimensions:w().oneOfType([w().any,w().arrayOf(w().any)]),children:w().func.isRequired};const Rh={depth:w().number.isRequired,editMode:w().bool,gridComponent:_.nB,handleComponentDrop:w().func.isRequired,isComponentVisible:w().bool.isRequired,resizeComponent:w().func.isRequired,setDirectPathToChild:w().func.isRequired,width:w().number.isRequired,dashboardId:w().number},kh=e=>e.dropIndicatorProps&&(0,H.Y)("div",{...e.dropIndicatorProps}),Yh=a.I4.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,Th=a.I4.div`
  ${({theme:e,editMode:t})=>s.AH`
    display: flex;
    flex-direction: column;

    /* gutters between rows */
    & > div:not(:last-child):not(.empty-droptarget) {
      ${!t&&`margin-bottom: ${4*e.gridUnit}px`};
    }

    .empty-droptarget {
      width: 100%;
      height: ${4*e.gridUnit}px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${e.gridUnit}px;
      overflow: hidden;

      &:before {
        content: '';
        display: block;
        width: calc(100% - ${2*e.gridUnit}px);
        height: calc(100% - ${2*e.gridUnit}px);
        border: 1px dashed transparent;
        border-radius: ${e.gridUnit}px;
        opacity: 0.5;
      }
    }

    & > .empty-droptarget:first-child {
      height: ${4*e.gridUnit}px;
      margin-top: ${-4*e.gridUnit}px;
    }

    & > .empty-droptarget:last-child {
      height: ${24*e.gridUnit}px;
    }

    & > .empty-droptarget.empty-droptarget--full:only-child {
      height: 80vh;
    }
  `}
`,Mh=a.I4.div`
  ${({theme:e})=>s.AH`
    // /* Editing guides */
    &.grid-column-guide {
      position: absolute;
      top: 0;
      min-height: 100%;
      background-color: ${(0,l.o3)(e.colors.primary.base,parseFloat(e.opacity.light)/100)};
      pointer-events: none;
      box-shadow: inset 0 0 0 1px
        ${(0,l.o3)(e.colors.primary.base,parseFloat(e.opacity.mediumHeavy)/100)};
    }
  `};
`;class Ah extends o.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.getRowGuidePosition=this.getRowGuidePosition.bind(this),this.setGridRef=this.setGridRef.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}getRowGuidePosition(e){return e&&this.grid?e.getBoundingClientRect().bottom-this.grid.getBoundingClientRect().top-2:null}setGridRef(e){this.grid=e}handleResizeStart(){this.setState((()=>({isResizing:!0})))}handleResizeStop({id:e,widthMultiple:t,heightMultiple:n}){this.props.resizeComponent({id:e,width:t,height:n}),this.setState((()=>({isResizing:!1})))}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}handleChangeTab({pathToTabIndex:e}){this.props.setDirectPathToChild(e)}render(){var e,t,n,i;const{gridComponent:a,handleComponentDrop:s,depth:l,width:d,isComponentVisible:c,editMode:u,canEdit:p,setEditMode:m,dashboardId:g}=this.props,f=(d+E.BD)/E.cV-E.BD,{isResizing:b}=this.state,v=0===(null==a||null==(e=a.children)?void 0:e.length),y=v&&a.type===A.B8,x=u&&(0,H.Y)(ca.nw,{title:(0,h.t)("Drag and drop components and charts to the dashboard"),description:(0,h.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,H.FD)(H.FK,{children:[(0,H.Y)("i",{className:"fa fa-plus"}),(0,h.t)("Create a new chart")]}),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${g}`,"_blank","noopener noreferrer")},image:"chart.svg"}),C=u?(0,H.Y)(ca.nw,{title:(0,h.t)("Drag and drop components to this tab"),description:(0,h.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,H.FD)(H.FK,{children:[(0,H.Y)("i",{className:"fa fa-plus"}),(0,h.t)("Create a new chart")]}),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${g}`,"_blank","noopener noreferrer")},image:"chart.svg"}):(0,H.Y)(ca.nw,{title:(0,h.t)("There are no components added to this tab"),description:p&&(0,h.t)("You can add the components in the edit mode."),buttonText:p&&(0,h.t)("Edit the dashboard"),buttonAction:p&&(()=>{m(!0)}),image:"chart.svg"});return d<100?null:(0,H.FD)(H.FK,{children:[v&&(0,H.Y)(Yh,{children:y?C:x}),(0,H.Y)("div",{className:"dashboard-grid",ref:this.setGridRef,children:(0,H.FD)(Th,{className:"grid-content",editMode:u,children:[u&&(0,H.Y)(pe,{component:a,depth:l,parentComponent:null,index:0,orientation:"column",onDrop:this.handleTopDropTargetDrop,className:r()({"empty-droptarget":!0,"empty-droptarget--full":0===(null==a||null==(t=a.children)?void 0:t.length)}),editMode:!0,dropToChild:0===(null==a||null==(n=a.children)?void 0:n.length),children:kh}),null==a||null==(i=a.children)?void 0:i.map(((e,t)=>(0,H.FD)(o.Fragment,{children:[(0,H.Y)(_a,{id:e,parentId:a.id,depth:l+1,index:t,availableColumnCount:E.cV,columnWidth:f,isComponentVisible:c,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,onChangeTab:this.handleChangeTab}),u&&(0,H.Y)(pe,{component:a,depth:l,parentComponent:null,index:t+1,orientation:"column",onDrop:s,className:"empty-droptarget",editMode:!0,children:kh})]},e))),b&&Array(E.cV).fill(null).map(((e,t)=>(0,H.Y)(Mh,{className:"grid-column-guide",style:{left:t*E.BD+t*f,width:f}},`grid-column-${t}`)))]})})]})}}Ah.propTypes=Rh,Ah.defaultProps={};const Eh=Ah,_h=(0,u.Ng)((function({dashboardState:e,dashboardInfo:t}){return{editMode:e.editMode,canEdit:t.dash_edit_perm,dashboardId:t.id}}),(function(e){return(0,f.zH)({handleComponentDrop:In.lL,resizeComponent:In.gn,setDirectPathToChild:Dn.I,setEditMode:Dn.op},e)}))(Eh);var Ph=n(55556);const zh=({topLevelTabs:e})=>{const t=(()=>{const e=(0,u.d4)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters}));return(0,o.useMemo)((()=>e?Object.values(e).map((e=>Ch()(e,["id","scope","type"]))):[]),[JSON.stringify(e)])})(),n=(0,u.wA)(),i=(0,u.d4)((e=>e.dashboardLayout.present)),r=(0,u.d4)((e=>e.dashboardInfo)),a=(0,u.d4)((e=>e.dashboardState.directPathToChild)),s=(0,u.d4)((e=>Object.values(e.charts).map((e=>e.id)))),l=(0,o.useRef)(),d=(0,o.useMemo)((()=>{const e=xa({currentComponent:vh(i),directPathToChild:a});var t;return-1===e?null!=(t=l.current)?t:0:(l.current=e,e)}),[i,a]);(0,o.useEffect)((()=>{if(0===t.length)return;const e=t.map((e=>{if(e.id.startsWith(La.E9))return{filterId:e.id,tabsInScope:[],chartsInScope:[]};const t=(0,si._)(e.scope,s,i),n=(0,mr.Kg)(i,t);return{filterId:e.id,tabsInScope:Array.from(n),chartsInScope:t}}));n((0,$s.Od)(e))}),[t,i,n]);const c=e?e.children:[E.mK],h=Math.min(d,c.length-1),p=0===h?E.mK:h.toString();return(0,o.useEffect)((()=>{setTimeout((()=>{n((0,Dn.sC)())}),500)}),[a,n]),(0,o.useEffect)((()=>{var e;const t=(0,Sh.Ay)(),n=(0,Ph.Z6)(null==r||null==(e=r.metadata)?void 0:e.color_namespace);return t.source=Sh.iw.Dashboard,(0,Ph.D2)(r.metadata),()=>{(0,Ph.Ky)((0,Ph.Z6)(n))}}),[r.id,n]),(0,H.Y)("div",{className:"grid-container",children:(0,H.Y)($h,{children:({width:e})=>(0,H.Y)(g.Ay,{id:E.mK,activeKey:p,renderTabBar:()=>(0,H.Y)(H.FK,{}),fullWidth:!1,animated:!1,allowOverflow:!0,onFocus:e=>{e.target.classList.contains("ant-tabs-tabpane")&&window.scrollY<220&&window.scrollTo(window.scrollX,0)},children:c.map(((t,n)=>(0,H.Y)(g.Ay.TabPane,{children:(0,H.Y)(_h,{gridComponent:i[t],depth:E.W3+1,width:e,isComponentVisible:n===d})},0===n?E.mK:n.toString())))})})})};var Uh=n(21335);const Oh=a.I4.div`
  ${({theme:e})=>s.AH`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    flex: 1;
    /* Special cases */

    &.dragdroppable--dragging {
      &
        .dashboard-component-tabs-content
        > .empty-droptarget.empty-droptarget--full {
        height: 100%;
      }
      & .empty-droptarget:before {
        display: block;
        border-color: ${e.colors.primary.light1};
        background-color: ${e.colors.primary.light3};
      }
      & .grid-row:after {
        border-style: hidden;
      }
      & .droptarget-side:last-child {
        inset-inline-end: 0;
      }
      & .droptarget-edge:last-child {
        inset-block-end: 0;
      }
    }

    /* A row within a column has inset hover menu */
    .dragdroppable-column .dragdroppable-row .hover-menu--left {
      left: ${-3*e.gridUnit}px;
      background: ${e.colors.grayscale.light5};
      border: 1px solid ${e.colors.grayscale.light2};
    }

    .dashboard-component-tabs {
      position: relative;
    }

    /* A column within a column or tabs has inset hover menu */
    .dragdroppable-column .dragdroppable-column .hover-menu--top,
    .dashboard-component-tabs .dragdroppable-column .hover-menu--top {
      top: ${-3*e.gridUnit}px;
      background: ${e.colors.grayscale.light5};
      border: 1px solid ${e.colors.grayscale.light2};
    }

    /* move Tabs hover menu to top near actual Tabs */
    .dashboard-component-tabs > .hover-menu-container > .hover-menu--left {
      top: 0;
      transform: unset;
      background: transparent;
    }

    /* push Chart actions to upper right */
    .dragdroppable-column .dashboard-component-chart-holder .hover-menu--top,
    .dragdroppable .dashboard-component-header .hover-menu--top {
      right: ${2*e.gridUnit}px;
      top: ${2*e.gridUnit}px;
      background: transparent;
      border: none;
      transform: unset;
      left: unset;
    }
    div:hover > .hover-menu-container .hover-menu,
    .hover-menu-container .hover-menu:hover {
      opacity: 1;
    }

    p {
      margin: 0 0 ${2*e.gridUnit}px 0;
    }

    i.danger {
      color: ${e.colors.error.base};
    }

    i.warning {
      color: ${e.colors.alert.base};
    }
  `}
`,qh=({children:e})=>{const t=(0,u.d4)((e=>e.dashboardState.editMode)),n=(0,Uh.u)(),[i,a]=(0,o.useState)(n.getMonitor().isDragging());return(0,o.useEffect)((()=>{const e=n.getMonitor(),t=C()(a,ia.j),i=e.subscribeToStateChange((()=>{e.isDragging()?t(!0):(t.cancel(),a(!1))}));return()=>{i(),t.cancel()}}),[n]),(0,H.Y)(Oh,{className:r()({"dragdroppable--dragging":t&&i}),children:e})},Nh=a.I4.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  z-index: 11;
  width: ${({width:e})=>e}px;
  ${({hidden:e})=>e&&"display: none;"}
`,Hh=a.I4.div`
  position: sticky;
  top: -1px;
  width: ${({width:e})=>e}px;
  flex: 0 0 ${({width:e})=>e}px;
`,Vh=a.I4.div`
  ${({theme:e})=>s.AH`
    grid-column: 2;
    grid-row: 1;
    position: sticky;
    top: 0;
    z-index: 100;
    max-width: 100vw;

    .empty-droptarget:before {
      position: absolute;
      content: '';
      display: none;
      width: calc(100% - ${2*e.gridUnit}px);
      height: calc(100% - ${2*e.gridUnit}px);
      left: ${e.gridUnit}px;
      top: ${e.gridUnit}px;
      border: 1px dashed transparent;
      border-radius: ${e.gridUnit}px;
      opacity: 0.5;
    }
  `}
`,Lh=a.I4.div`
  grid-column: 2;
  grid-row: 2;
  // @z-index-above-dashboard-header (100) + 1 = 101
  ${({fullSizeChartId:e})=>e&&"z-index: 101;"}
`,jh=a.I4.div`
  ${({theme:e})=>s.AH`
    &.dashboard {
      position: relative;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 100%;

      /* drop shadow for top-level tabs only */
      & .dashboard-component-tabs {
        box-shadow: 0 ${e.gridUnit}px ${e.gridUnit}px 0
          ${(0,l.o3)(e.colors.grayscale.dark2,parseFloat(e.opacity.light)/100)};
        padding-left: ${2*e.gridUnit}px; /* note this is added to tab-level padding, to match header */
      }

      .dropdown-toggle.btn.btn-primary .caret {
        color: ${e.colors.grayscale.light5};
      }

      .background--transparent {
        background-color: transparent;
      }

      .background--white {
        background-color: ${e.colors.grayscale.light5};
      }
    }
    &.dashboard--editing {
      .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      .grid-row.grid-row--hovered:after,
      .dashboard-component-tabs > .grid-row--hovered:after {
        border: 2px dashed ${e.colors.primary.base};
      }

      .resizable-container {
        & .dashboard-component-chart-holder {
          .dashboard-chart {
            .chart-container {
              cursor: move;
              opacity: 0.2;
            }

            .slice_container {
              /* disable chart interactions in edit mode */
              pointer-events: none;
            }
          }

          &:hover .dashboard-chart .chart-container {
            opacity: 0.7;
          }
        }

        &:hover,
        &.resizable-container--resizing:hover {
          & > .dashboard-component-chart-holder:after {
            border: 1px dashed ${e.colors.primary.base};
          }
        }
      }

      .resizable-container--resizing:hover > .grid-row:after,
      .hover-menu:hover + .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed ${e.colors.primary.base};
        z-index: 2;
      }

      .grid-row:after,
      .dashboard-component-tabs > .hover-menu + div:after {
        border: 1px dashed ${e.colors.grayscale.light2};
      }

      /* provide hit area in case row contents is edge to edge */
      .dashboard-component-tabs-content {
        > .dragdroppable-row {
          padding-top: ${4*e.gridUnit}px;
        }
      }

      .dashboard-component-chart-holder {
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
          border: 1px solid transparent;
        }

        &:hover:after {
          border: 1px dashed ${e.colors.primary.base};
          z-index: 2;
        }
      }

      .contract-trigger:before {
        display: none;
      }
    }

    & .dashboard-component-tabs-content {
      & > div:not(:last-child):not(.empty-droptarget) {
        margin-bottom: ${4*e.gridUnit}px;
      }

      & > .empty-droptarget {
        z-index: ${ci.qe};
        position: absolute;
        width: 100%;
      }

      & > .empty-droptarget:first-child:not(.empty-droptarget--full) {
        height: ${4*e.gridUnit}px;
        top: 0;
      }

      & > .empty-droptarget:last-child {
        height: ${4*e.gridUnit}px;
        bottom: ${4*-e.gridUnit}px;
      }
    }
  `}
`,Wh=a.I4.div`
  ${({theme:e,editMode:t,marginLeft:n})=>s.AH`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: auto;
    flex: 1;

    .grid-container .dashboard-component-tabs {
      box-shadow: none;
      padding-left: 0;
    }

    .grid-container {
      /* without this, the grid will not get smaller upon toggling the builder panel on */
      width: 0;
      flex: 1;
      position: relative;
      margin-top: ${6*e.gridUnit}px;
      margin-right: ${8*e.gridUnit}px;
      margin-bottom: ${6*e.gridUnit}px;
      margin-left: ${n}px;

      ${t&&`\n      max-width: calc(100% - ${ci.Xy+16*e.gridUnit}px);\n    `}

      /* this is the ParentSize wrapper */
    & > div:first-child {
        height: inherit !important;
      }
    }

    .dashboard-builder-sidepane {
      width: ${ci.Xy}px;
      z-index: 1;
    }

    .dashboard-component-chart-holder {
      width: 100%;
      height: 100%;
      background-color: ${e.colors.grayscale.light5};
      position: relative;
      padding: ${4*e.gridUnit}px;
      overflow-y: visible;

      // transitionable traits to show filter relevance
      transition:
        opacity ${e.transitionTiming}s ease-in-out,
        border-color ${e.transitionTiming}s ease-in-out,
        box-shadow ${e.transitionTiming}s ease-in-out;

      &.fade-in {
        border-radius: ${e.borderRadius}px;
        box-shadow:
          inset 0 0 0 2px ${e.colors.primary.base},
          0 0 0 3px
            ${(0,l.o3)(e.colors.primary.base,parseFloat(e.opacity.light)/100)};
      }

      &.fade-out {
        border-radius: ${e.borderRadius}px;
        box-shadow: none;
      }

      & .missing-chart-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        justify-content: center;

        .missing-chart-body {
          font-size: ${e.typography.sizes.s}px;
          position: relative;
          display: flex;
        }
      }
    }
  `}
`,Bh=()=>{var e,t;const i=(0,u.wA)(),l=(0,Kn.Q1)(),m=(0,a.DP)(),g=(0,u.d4)((({dashboardInfo:e})=>`${e.id}`)),f=(0,u.d4)((e=>e.dashboardLayout.present)),b=(0,u.d4)((e=>e.dashboardState.editMode)),v=(0,u.d4)((({dashboardInfo:e})=>e.dash_edit_perm)),y=(0,u.d4)((({dashboardState:e})=>e.dashboardIsSaving)),x=(0,u.d4)((e=>e.dashboardState.fullSizeChartId)),C=(0,d.G7)(d.TO.DashboardCrossFilters),S=(0,u.d4)((({dashboardInfo:e})=>(0,d.G7)(d.TO.HorizontalFilterBar)?e.filterBarOrientation:nt.QI.Vertical)),w=(0,o.useCallback)((({pathToTabIndex:e})=>{i((0,Dn.I)(e)),window.scrollTo(0,0)}),[i]),D=(0,o.useCallback)((()=>{i((0,In.zT)());const e=Ca(vh(f),0);i((0,Dn.I)(e))}),[f,i]),I=(0,o.useCallback)((e=>i((0,In.lL)(e))),[i]),F=(0,o.useRef)(null),$=f[E.wv],R=null==$?void 0:$.children[0],Y=R!==E.mK?f[R]:void 0,M=(0,tt.P3)(Ze.vX.standalone),A=M===E.hL.Report,_=l.hideTitle||M===E.hL.HideNavAndTitle||A,[P,z]=(0,o.useState)(0);(0,o.useEffect)((()=>{var e,t;let i;return z((null==(e=F.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0),n.g.hasOwnProperty("ResizeObserver")&&F.current&&(i=new ResizeObserver((e=>{z((t=>{var n,i;return(null==e||null==(n=e[0])||null==(i=n.contentRect)?void 0:i.height)||t}))})),i.observe(F.current)),()=>{var e;null==(e=i)||e.disconnect()}}),[]);const{showDashboard:U,missingInitialFilters:O,dashboardFiltersOpen:q,toggleDashboardFiltersOpen:N,nativeFiltersEnabled:V}=(()=>{const[e,t]=(0,o.useState)(!1),n=(0,u.d4)((({dashboardInfo:e})=>e.dash_edit_perm)),i=ja(),r=Object.values(i),a=(0,tt.P3)(Ze.vX.expandFilters),[s,l]=(0,o.useState)(null!=a?a:!!r.length),d=n||!n&&0!==r.length,c=r.filter((e=>e.requiredFirst)),h=Wa(),p=c.filter((({id:e})=>{var t,n;return void 0===(null==(t=h[e])||null==(n=t.filterState)?void 0:n.value)})).map((({name:e})=>e)),m=e||!d||0===p.length,g=(0,o.useCallback)((e=>{l(null!=e?e:!s)}),[s]);return(0,o.useEffect)((()=>{!1===a||0===r.length&&d?g(!1):g(!0)}),[r.length]),(0,o.useEffect)((()=>{m&&t(!0)}),[m]),{showDashboard:m,missingInitialFilters:p,dashboardFiltersOpen:s,toggleDashboardFiltersOpen:g,nativeFiltersEnabled:d}})(),[L,j]=(0,c.N)({threshold:[1]}),W=(C||V)&&!b,B=`calc(100vh - ${ci.jO+(j||M?0:ci._3)}px)`,K=q?0:P+20,G=(0,o.useMemo)((()=>({marginLeft:q||b||!V||S===nt.QI.Horizontal?0:-32})),[q,b,S,V]),Q=(0,o.useRef)(Y);(0,o.useEffect)((()=>{var e,t,n;const r=null==(e=Q.current)||null==(t=e.children)?void 0:t.length,o=null==Y||null==(n=Y.children)?void 0:n.length;if(void 0!==r&&void 0!==o&&o>r){const e=Ca(vh(f),o-1);i((0,Dn.I)(e))}Q.current=Y}),[Y]);const X=(0,o.useCallback)((({dropIndicatorProps:e})=>(0,H.FD)("div",{children:[!_&&(0,H.Y)(Rn,{}),W&&S===nt.QI.Horizontal&&(0,H.Y)(fh,{orientation:nt.QI.Horizontal,hidden:A}),e&&(0,H.Y)("div",{...e}),!A&&Y&&!l.hideNav&&(0,H.Y)(ko,{shouldFocus:yh,menuItems:[(0,H.Y)(Tn,{icon:(0,H.Y)(T.A.FallOutlined,{iconSize:"xl"}),label:(0,h.t)("Collapse tab content"),onClick:D})],editMode:b,children:(0,H.Y)(_a,{id:null==Y?void 0:Y.id,parentId:E.wv,depth:E.W3+1,index:0,renderTabContent:!1,renderHoverMenu:!1,onChangeTab:w})})]})),[V,S,b,w,D,_,A,Y,l.hideNav]),Z=q||b||!V||S===nt.QI.Horizontal?8*m.gridUnit:0;return(0,H.FD)(qh,{children:[W&&S===nt.QI.Vertical&&(0,H.Y)(H.FK,{children:(0,H.Y)(bh.A,{id:`dashboard:${g}`,enable:q,minWidth:ci.l6,maxWidth:ci._s,initialWidth:ci.l6,children:e=>{const t=q?e:ci.p_;return(0,H.Y)(Nh,{width:t,hidden:A,children:(0,H.Y)(Hh,{ref:L,width:t,children:(0,H.Y)(p.A,{children:(0,H.Y)(fh,{orientation:nt.QI.Vertical,verticalConfig:{filtersOpen:q,toggleFiltersBar:N,width:t,height:B,offset:K}})})})})}})}),(0,H.Y)(Vh,{ref:F,children:(0,H.Y)(pe,{className:r()(!Y&&b&&"empty-droptarget"),component:$,parentComponent:null,depth:E.W3,index:0,orientation:"column",onDrop:I,editMode:b,disableDragDrop:!!Y,style:G,children:X})}),(0,H.FD)(Lh,{fullSizeChartId:x,children:[(0,H.Y)(s.mL,{styles:s.AH`
            // @z-index-above-dashboard-header (100) + 1 = 101
            ${x&&"div > .filterStatusPopover.ant-popover{z-index: 101}"}
          `}),!b&&!Y&&0===(null==(e=f[E.mK])||null==(t=e.children)?void 0:t.length)&&(0,H.Y)(ca.nw,{title:(0,h.t)("There are no charts added to this dashboard"),description:v&&(0,h.t)("Go to the edit mode to configure the dashboard and add charts"),buttonText:v&&(0,h.t)("Edit the dashboard"),buttonAction:()=>i((0,Dn.op)(!0)),image:"dashboard.svg"}),(0,H.Y)(jh,{className:r()("dashboard",b&&"dashboard--editing"),children:(0,H.FD)(Wh,{className:"dashboard-content",editMode:b,marginLeft:Z,children:[U?O.length>0?(0,H.Y)("div",{css:s.AH`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex: 1;
                    & div {
                      width: 500px;
                    }
                  `,children:(0,H.Y)(ws,{title:(0,h.t)("Unable to load dashboard"),body:(0,h.t)("The following filters have the 'Select first filter value by default'\n                    option checked and could not be loaded, which is preventing the dashboard\n                    from rendering: %s",O.join(", "))})}):(0,H.Y)(zh,{topLevelTabs:Y}):(0,H.Y)(k.A,{}),b&&(0,H.Y)(Ne,{topOffset:P})]})})]}),y&&(0,H.Y)(k.A,{css:s.AH`
            && {
              position: fixed;
            }
          `})]})}},64829:(e,t,n)=>{"use strict";n.d(t,{$:()=>p});var i=n(19129),r=n(96453),o=n(95579),a=n(2445);const s=r.I4.div`
  ${({theme:e})=>`\n    .tooltip-header {\n      font-size: ${e.typography.sizes.m}px;\n      font-weight: ${e.typography.weights.bold};\n    }\n\n    .tooltip-description {\n      margin-top: ${2*e.gridUnit}px;\n      display: -webkit-box;\n      -webkit-line-clamp: 20;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  `}
`,l=r.I4.div`
  ${({theme:e})=>`\n    left: ${3*e.gridUnit}px;\n    right: ${3*e.gridUnit}px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n  `}
`,d=r.I4.span`
  ${({theme:e})=>`\n    left: ${3*e.gridUnit}px;\n    right: ${3*e.gridUnit}px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n  `}
`,c=r.I4.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  width: 100%;
`,h=r.I4.span`
  ${({theme:{typography:{sizes:e,weights:t}}})=>`\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: ${e.s}px;\n    font-weight: ${t.light};\n    line-height: 1.6;\n  `}
`,u=e=>!["null","none"].includes(e.toLowerCase())&&""!==e.trim(),p=e=>(0,a.Y)(i.m,{mouseEnterDelay:.2,placement:"right",title:(0,a.FD)(s,{children:[(0,a.Y)("div",{className:"tooltip-header",children:e.table_name&&u(e.table_name)?e.table_name:(0,o.t)("Not defined")}),(0,a.FD)("div",{className:"tooltip-description",children:[(0,a.FD)("div",{children:[(0,o.t)("Database"),": ",e.database.database_name]}),(0,a.FD)("div",{children:[(0,o.t)("Schema"),":"," ",e.schema&&u(e.schema)?e.schema:(0,o.t)("Not defined")]})]})]}),children:(0,a.FD)(l,{children:[(0,a.Y)(d,{children:e.table_name&&u(e.table_name)?e.table_name:e.database.database_name}),(0,a.FD)(c,{children:[(0,a.Y)(h,{children:e.database.database_name}),e.schema&&u(e.schema)&&(0,a.FD)(h,{children:[" - ",e.schema]})]})]})})},67874:(e,t,n)=>{"use strict";n.d(t,{JF:()=>s,Mo:()=>l,YH:()=>o,j3:()=>a});var i=n(96453),r=n(86523);const o=0,a=i.I4.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===o?"100%":`${e}px`};
`,s=(0,i.I4)(r.A)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,l=i.I4.div`
  color: ${({theme:e,status:t="error"})=>{var n;return null==(n=e.colors[t])?void 0:n.base}};
`},64687:(e,t,n)=>{"use strict";n.d(t,{A:()=>a,e:()=>o});var i=n(1932),r=n(96540);function o(e){var t=(0,r.useState)((function(){return(0,i.CN)("function"==typeof e?e():e,!0)})),n=t[1];return[t[0],(0,r.useCallback)((function(e){n("function"==typeof e?(0,i.jM)(e):(0,i.CN)(e))}),[])]}function a(e,t,n){var o=(0,r.useMemo)((function(){return(0,i.jM)(e)}),[e]);return(0,r.useReducer)(o,t,n)}}}]);
//# sourceMappingURL=11391d1ff0cc3209ad5b.chunk.js.map