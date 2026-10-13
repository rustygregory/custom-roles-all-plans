var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function te(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var T=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ie(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(T,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(T,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ie(s,l);c+=ae(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ie(s,l++),c+=ae(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function E(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D={current:null},O={transition:null},se={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:O,ReactCurrentOwner:C};function ce(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:E,forEach:function(e,t,n){E(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return E(e,function(){t++}),t},toArray:function(e){return E(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,e.act=ce,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=ee,e.createFactory=function(e){var t=ee.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},e.unstable_act=ce,e.useCallback=function(e,t){return D.current.useCallback(e,t)},e.useContext=function(e){return D.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return D.current.useDeferredValue(e)},e.useEffect=function(e,t){return D.current.useEffect(e,t)},e.useId=function(){return D.current.useId()},e.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return D.current.useMemo(e,t)},e.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},e.useRef=function(e){return D.current.useRef(e)},e.useState=function(e){return D.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return D.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,E(x);else{var t=n(l);t!==null&&oe(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&oe(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,ee=5,te=-1;function ne(){return!(e.unstable_now()-te<ee)}function re(){if(C!==null){var t=e.unstable_now();te=t;var n=!0;try{n=C(!0,t)}finally{n?T():(S=!1,C=null)}}else S=!1}var T;if(typeof v==`function`)T=function(){v(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,T=function(){ae.postMessage(null)}}else T=function(){g(re,0)};function E(e){C=e,S||(S=!0,T())}function oe(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,E(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,oe(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,E(x))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),ee=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),re=Symbol.for(`react.profiler`),T=Symbol.for(`react.provider`),ie=Symbol.for(`react.context`),ae=Symbol.for(`react.forward_ref`),E=Symbol.for(`react.suspense`),oe=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),se=Symbol.for(`react.offscreen`),ce=Symbol.iterator;function le(e){return typeof e!=`object`||!e?null:(e=ce&&e[ce]||e[`@@iterator`],typeof e==`function`?e:null)}var k=Object.assign,ue;function de(e){if(ue===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ue=t&&t[1]||``}return`
`+ue+e}var fe=!1;function pe(e,t){if(!e||fe)return``;fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?de(e):``}function me(e){switch(e.tag){case 5:return de(e.type);case 16:return de(`Lazy`);case 13:return de(`Suspense`);case 19:return de(`SuspenseList`);case 0:case 2:case 15:return e=pe(e.type,!1),e;case 11:return e=pe(e.type.render,!1),e;case 1:return e=pe(e.type,!0),e;default:return``}}function he(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case ee:return`Portal`;case re:return`Profiler`;case ne:return`StrictMode`;case E:return`Suspense`;case oe:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ie:return(e.displayName||`Context`)+`.Consumer`;case T:return(e._context.displayName||`Context`)+`.Provider`;case ae:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?he(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return he(t);case 8:return t===ne?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function _e(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ye(e){var t=ve(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function be(e){e._valueTracker||=ye(e)}function xe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ve(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Se(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ce(e,t){var n=t.checked;return k({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function we(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=_e(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Te(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function Ee(e,t){Te(e,t);var n=_e(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Oe(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Oe(e,t.type,_e(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function De(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Oe(e,t,n){(t!==`number`||Se(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var ke=Array.isArray;function Ae(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+_e(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function je(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return k({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Me(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(ke(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:_e(n)}}function Ne(e,t){var n=_e(t.value),r=_e(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Pe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Fe(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ie(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Fe(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Le,Re=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Le||=document.createElement(`div`),Le.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Le.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ze(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ve=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Be).forEach(function(e){Ve.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Be[t]=Be[e]})});function He(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Be.hasOwnProperty(e)&&Be[e]?(``+t).trim():t+`px`}function Ue(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=He(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var We=k({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(e,t){if(t){if(We[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ke(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var qe=null;function Je(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ye=null,Xe=null,Ze=null;function Qe(e){if(e=Ki(e)){if(typeof Ye!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ji(t),Ye(e.stateNode,e.type,t))}}function $e(e){Xe?Ze?Ze.push(e):Ze=[e]:Xe=e}function et(){if(Xe){var e=Xe,t=Ze;if(Ze=Xe=null,Qe(e),t)for(e=0;e<t.length;e++)Qe(t[e])}}function tt(e,t){return e(t)}function nt(){}var rt=!1;function it(e,t,n){if(rt)return e(t,n);rt=!0;try{return tt(e,t,n)}finally{rt=!1,(Xe!==null||Ze!==null)&&(nt(),et())}}function at(e,t){var n=e.stateNode;if(n===null)return null;var i=Ji(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var ot=!1;if(c)try{var st={};Object.defineProperty(st,"passive",{get:function(){ot=!0}}),window.addEventListener(`test`,st,st),window.removeEventListener(`test`,st,st)}catch{ot=!1}function ct(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var lt=!1,ut=null,dt=!1,ft=null,pt={onError:function(e){lt=!0,ut=e}};function mt(e,t,n,r,i,a,o,s,c){lt=!1,ut=null,ct.apply(pt,arguments)}function ht(e,t,n,i,a,o,s,c,l){if(mt.apply(this,arguments),lt){if(lt){var u=ut;lt=!1,ut=null}else throw Error(r(198));dt||(dt=!0,ft=u)}}function gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _t(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vt(e){if(gt(e)!==e)throw Error(r(188))}function yt(e){var t=e.alternate;if(!t){if(t=gt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return vt(a),e;if(o===i)return vt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function bt(e){return e=yt(e),e===null?null:xt(e)}function xt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xt(e);if(t!==null)return t;e=e.sibling}return null}var St=n.unstable_scheduleCallback,Ct=n.unstable_cancelCallback,wt=n.unstable_shouldYield,Tt=n.unstable_requestPaint,Et=n.unstable_now,Dt=n.unstable_getCurrentPriorityLevel,A=n.unstable_ImmediatePriority,Ot=n.unstable_UserBlockingPriority,j=n.unstable_NormalPriority,kt=n.unstable_LowPriority,At=n.unstable_IdlePriority,jt=null,Mt=null;function Nt(e){if(Mt&&typeof Mt.onCommitFiberRoot==`function`)try{Mt.onCommitFiberRoot(jt,e,void 0,(e.current.flags&128)==128)}catch{}}var Pt=Math.clz32?Math.clz32:Lt,Ft=Math.log,It=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(Ft(e)/It|0)|0}var Rt=64,zt=4194304;function Bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Bt(a))):r=Bt(s)}else o=n&~i,o===0?a!==0&&(r=Bt(a)):r=Bt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function M(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Pt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=M(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ut(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Wt(){var e=Rt;return Rt<<=1,!(Rt&4194240)&&(Rt=64),e}function Gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function qt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Jt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var N=0;function Yt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xt,Zt,Qt,$t,en,tn=!1,nn=[],rn=null,an=null,on=null,sn=new Map,cn=new Map,ln=[],un=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function dn(e,t){switch(e){case`focusin`:case`focusout`:rn=null;break;case`dragenter`:case`dragleave`:an=null;break;case`mouseover`:case`mouseout`:on=null;break;case`pointerover`:case`pointerout`:sn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:cn.delete(t.pointerId)}}function fn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Zt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pn(e,t,n,r,i){switch(t){case`focusin`:return rn=fn(rn,e,t,n,r,i),!0;case`dragenter`:return an=fn(an,e,t,n,r,i),!0;case`mouseover`:return on=fn(on,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return sn.set(a,fn(sn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,cn.set(a,fn(cn.get(a)||null,e,t,n,r,i)),!0}return!1}function mn(e){var t=Gi(e.target);if(t!==null){var n=gt(t);if(n!==null){if(t=n.tag,t===13){if(t=_t(n),t!==null){e.blockedOn=t,en(e.priority,function(){Qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=En(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qe=r,n.target.dispatchEvent(r),qe=null}else return t=Ki(n),t!==null&&Zt(t),e.blockedOn=n,!1;t.shift()}return!0}function gn(e,t,n){hn(e)&&n.delete(t)}function _n(){tn=!1,rn!==null&&hn(rn)&&(rn=null),an!==null&&hn(an)&&(an=null),on!==null&&hn(on)&&(on=null),sn.forEach(gn),cn.forEach(gn)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,tn||(tn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,_n)))}function yn(e){function t(t){return vn(t,e)}if(0<nn.length){vn(nn[0],e);for(var n=1;n<nn.length;n++){var r=nn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&vn(rn,e),an!==null&&vn(an,e),on!==null&&vn(on,e),sn.forEach(t),cn.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)mn(n),n.blockedOn===null&&ln.shift()}var bn=C.ReactCurrentBatchConfig,xn=!0;function Sn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=1,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function Cn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=4,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function wn(e,t,n,r){if(xn){var i=En(e,t,n,r);if(i===null)yi(e,t,r,Tn,n),dn(e,r);else if(pn(i,e,t,n,r))r.stopPropagation();else if(dn(e,r),t&4&&-1<un.indexOf(e)){for(;i!==null;){var a=Ki(i);if(a!==null&&Xt(a),a=En(e,t,n,r),a===null&&yi(e,t,r,Tn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else yi(e,t,r,null,n)}}var Tn=null;function En(e,t,n,r){if(Tn=null,e=Je(r),e=Gi(e),e!==null)if(t=gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_t(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tn=e,null}function Dn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Dt()){case A:return 1;case Ot:return 4;case j:case kt:return 16;case At:return 536870912;default:return 16}default:return 16}}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=k({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=k({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(k({},Un,{dataTransfer:0})),Kn=Fn(k({},Rn,{relatedTarget:0})),qn=Fn(k({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(k({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(k({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Fn(k({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Fn(k({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Fn(k({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ir=Fn(k({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=Fn(k({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=[9,13,27,32],sr=c&&`CompositionEvent`in window,cr=null;c&&`documentMode`in document&&(cr=document.documentMode);var lr=c&&`TextEvent`in window&&!cr,ur=c&&(!sr||cr&&8<cr&&11>=cr),dr=` `,fr=!1;function pr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function mr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var hr=!1;function gr(e,t){switch(e){case`compositionend`:return mr(t);case`keypress`:return t.which===32?(fr=!0,dr):null;case`textInput`:return e=t.data,e===dr&&fr?null:e;default:return null}}function _r(e,t){if(hr)return e===`compositionend`||!sr&&pr(e,t)?(e=jn(),An=kn=On=null,hr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var vr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!vr[e.type]:t===`textarea`}function br(e,t,n,r){$e(r),t=xi(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var xr=null,Sr=null;function Cr(e){mi(e,0)}function wr(e){if(xe(qi(e)))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(c){var Dr;if(c){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){xr&&(xr.detachEvent(`onpropertychange`,jr),Sr=xr=null)}function jr(e){if(e.propertyName===`value`&&wr(Sr)){var t=[];br(t,Sr,e,Je(e)),it(Cr,t)}}function Mr(e,t,n){e===`focusin`?(Ar(),xr=t,Sr=n,xr.attachEvent(`onpropertychange`,jr)):e===`focusout`&&Ar()}function Nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Sr)}function Pr(e,t){if(e===`click`)return wr(t)}function Fr(e,t){if(e===`input`||e===`change`)return wr(t)}function Ir(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Lr=typeof Object.is==`function`?Object.is:Ir;function Rr(e,t){if(Lr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Lr(e[i],t[i]))return!1}return!0}function zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Br(e,t){var n=zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=zr(n)}}function Vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hr(){for(var e=window,t=Se();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Se(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Wr(e){var t=Hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vr(n.ownerDocument.documentElement,n)){if(r!==null&&Ur(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Br(n,a);var o=Br(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gr=c&&`documentMode`in document&&11>=document.documentMode,Kr=null,qr=null,Jr=null,Yr=!1;function Xr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yr||Kr==null||Kr!==Se(r)||(r=Kr,`selectionStart`in r&&Ur(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Rr(Jr,r)||(Jr=r,r=xi(qr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Qr={animationend:Zr(`Animation`,`AnimationEnd`),animationiteration:Zr(`Animation`,`AnimationIteration`),animationstart:Zr(`Animation`,`AnimationStart`),transitionend:Zr(`Transition`,`TransitionEnd`)},$r={},ei={};c&&(ei=document.createElement(`div`).style,`AnimationEvent`in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),`TransitionEvent`in window||delete Qr.transitionend.transition);function ti(e){if($r[e])return $r[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ei)return $r[e]=t[n];return e}var ni=ti(`animationend`),ri=ti(`animationiteration`),ii=ti(`animationstart`),ai=ti(`transitionend`),oi=new Map,si=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ci(e,t){oi.set(e,t),o(t,[e])}for(var li=0;li<si.length;li++){var ui=si[li];ci(ui.toLowerCase(),`on`+(ui[0].toUpperCase()+ui.slice(1)))}ci(ni,`onAnimationEnd`),ci(ri,`onAnimationIteration`),ci(ii,`onAnimationStart`),ci(`dblclick`,`onDoubleClick`),ci(`focusin`,`onFocus`),ci(`focusout`,`onBlur`),ci(ai,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var di=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),fi=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(di));function pi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,ht(r,t,void 0,e),e.currentTarget=null}function mi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;pi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;pi(i,s,l),a=c}}}if(dt)throw e=ft,dt=!1,ft=null,e}function P(e,t){var n=t[Hi];n===void 0&&(n=t[Hi]=new Set);var r=e+`__bubble`;n.has(r)||(vi(t,e,2,!1),n.add(r))}function hi(e,t,n){var r=0;t&&(r|=4),vi(n,e,r,t)}var gi=`_reactListening`+Math.random().toString(36).slice(2);function _i(e){if(!e[gi]){e[gi]=!0,i.forEach(function(t){t!==`selectionchange`&&(fi.has(t)||hi(t,!1,e),hi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,hi(`selectionchange`,!1,t))}}function vi(e,t,n,r){switch(Dn(t)){case 1:var i=Sn;break;case 4:i=Cn;break;default:i=wn}n=i.bind(null,t,n,e),i=void 0,!ot||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function yi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Gi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}it(function(){var r=a,i=Je(n),o=[];a:{var s=oi.get(e);if(s!==void 0){var c=Ln,l=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:c=tr;break;case`focusin`:l=`focus`,c=Kn;break;case`focusout`:l=`blur`,c=Kn;break;case`beforeblur`:case`afterblur`:c=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=rr;break;case ni:case ri:case ii:c=qn;break;case ai:c=ir;break;case`scroll`:c=zn;break;case`wheel`:c=ar;break;case`copy`:case`cut`:case`paste`:c=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=nr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=at(p,f),h!=null&&u.push(bi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==qe&&(l=n.relatedTarget||n.fromElement)&&(Gi(l)||l[Vi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Gi(l):null,l!==null&&(d=gt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Wn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=nr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:qi(c),m=l==null?s:qi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Gi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=Si(m))p++;for(m=0,h=f;h;h=Si(h))m++;for(;0<p-m;)u=Si(u),p--;for(;0<m-p;)f=Si(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=Si(u),f=Si(f)}u=null}else u=null;c!==null&&Ci(o,s,c,u,!1),l!==null&&d!==null&&Ci(o,d,l,u,!0)}}a:{if(s=r?qi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Tr;else if(yr(s))if(Er)g=Fr;else{g=Nr;var _=Mr}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Pr);if(g&&=g(e,r)){br(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Oe(s,`number`,s.value)}switch(_=r?qi(r):window,e){case`focusin`:(yr(_)||_.contentEditable===`true`)&&(Kr=_,qr=r,Jr=null);break;case`focusout`:Jr=qr=Kr=null;break;case`mousedown`:Yr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Yr=!1,Xr(o,n,i);break;case`selectionchange`:if(Gr)break;case`keydown`:case`keyup`:Xr(o,n,i)}var v;if(sr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else hr?pr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(ur&&n.locale!==`ko`&&(hr||y!==`onCompositionStart`?y===`onCompositionEnd`&&hr&&(v=jn()):(On=i,kn=`value`in On?On.value:On.textContent,hr=!0)),_=xi(r,y),0<_.length&&(y=new Yn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=mr(n),v!==null&&(y.data=v)))),(v=lr?gr(e,n):_r(e,n))&&(r=xi(r,`onBeforeInput`),0<r.length&&(i=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}mi(o,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=at(e,n),a!=null&&r.unshift(bi(e,a,i)),a=at(e,t),a!=null&&r.push(bi(e,a,i))),e=e.return}return r}function Si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ci(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=at(n,a),c!=null&&o.unshift(bi(n,c,s))):i||(c=at(n,a),c!=null&&o.push(bi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var wi=/\r\n?/g,Ti=/\u0000|\uFFFD/g;function F(e){return(typeof e==`string`?e:``+e).replace(wi,`
`).replace(Ti,``)}function Ei(e,t,n){if(t=F(t),F(e)!==t&&n)throw Error(r(425))}function Di(){}var I=null,Oi=null;function ki(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout==`function`?setTimeout:void 0,ji=typeof clearTimeout==`function`?clearTimeout:void 0,Mi=typeof Promise==`function`?Promise:void 0,Ni=typeof queueMicrotask==`function`?queueMicrotask:Mi===void 0?Ai:function(e){return Mi.resolve(null).then(e).catch(Pi)};function Pi(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),yn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);yn(t)}function Ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Li(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ri=Math.random().toString(36).slice(2),zi=`__reactFiber$`+Ri,Bi=`__reactProps$`+Ri,Vi=`__reactContainer$`+Ri,Hi=`__reactEvents$`+Ri,Ui=`__reactListeners$`+Ri,Wi=`__reactHandles$`+Ri;function Gi(e){var t=e[zi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vi]||n[zi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Li(e);e!==null;){if(n=e[zi])return n;e=Li(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[zi]||e[Vi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ji(e){return e[Bi]||null}var Yi=[],Xi=-1;function Zi(e){return{current:e}}function L(e){0>Xi||(e.current=Yi[Xi],Yi[Xi]=null,Xi--)}function R(e,t){Xi++,Yi[Xi]=e.current,e.current=t}var Qi={},z=Zi(Qi),$i=Zi(!1),ea=Qi;function ta(e,t){var n=e.type.contextTypes;if(!n)return Qi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function na(e){return e=e.childContextTypes,e!=null}function ra(){L($i),L(z)}function ia(e,t,n){if(z.current!==Qi)throw Error(r(168));R(z,t),R($i,n)}function aa(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ge(e)||`Unknown`,a));return k({},n,i)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qi,ea=z.current,R(z,e),R($i,$i.current),!0}function sa(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=aa(e,t,ea),i.__reactInternalMemoizedMergedChildContext=e,L($i),L(z),R(z,e)):L($i),R($i,n)}var ca=null,la=!1,ua=!1;function da(e){ca===null?ca=[e]:ca.push(e)}function fa(e){la=!0,da(e)}function pa(){if(!ua&&ca!==null){ua=!0;var e=0,t=N;try{var n=ca;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ca=null,la=!1}catch(t){throw ca!==null&&(ca=ca.slice(e+1)),St(A,pa),t}finally{N=t,ua=!1}}return null}var ma=[],ha=0,ga=null,_a=0,B=[],va=0,ya=null,ba=1,xa=``;function Sa(e,t){ma[ha++]=_a,ma[ha++]=ga,ga=e,_a=t}function Ca(e,t,n){B[va++]=ba,B[va++]=xa,B[va++]=ya,ya=e;var r=ba;e=xa;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var a=32-Pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ba=1<<32-Pt(t)+i|n<<i|r,xa=a+e}else ba=1<<a|n<<i|r,xa=e}function wa(e){e.return!==null&&(Sa(e,1),Ca(e,1,0))}function Ta(e){for(;e===ga;)ga=ma[--ha],ma[ha]=null,_a=ma[--ha],ma[ha]=null;for(;e===ya;)ya=B[--va],B[va]=null,xa=B[--va],B[va]=null,ba=B[--va],B[va]=null}var Ea=null,Da=null,Oa=!1,ka=null;function Aa(e,t){var n=Ql(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Ea=e,Da=Ii(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Ea=e,Da=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=ya===null?null:{id:ba,overflow:xa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ql(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ea=e,Da=null,!0);default:return!1}}function Ma(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Na(e){if(Oa){var t=Da;if(t){var n=t;if(!ja(e,t)){if(Ma(e))throw Error(r(418));t=Ii(n.nextSibling);var i=Ea;t&&ja(e,t)?Aa(i,n):(e.flags=e.flags&-4097|2,Oa=!1,Ea=e)}}else{if(Ma(e))throw Error(r(418));e.flags=e.flags&-4097|2,Oa=!1,Ea=e}}}function Pa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ea=e}function Fa(e){if(e!==Ea)return!1;if(!Oa)return Pa(e),Oa=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!ki(e.type,e.memoizedProps)),t&&=Da){if(Ma(e))throw Ia(),Error(r(418));for(;t;)Aa(e,t),t=Ii(t.nextSibling)}if(Pa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Da=Ii(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Da=null}}else Da=Ea?Ii(e.stateNode.nextSibling):null;return!0}function Ia(){for(var e=Da;e;)e=Ii(e.nextSibling)}function La(){Da=Ea=null,Oa=!1}function Ra(e){ka===null?ka=[e]:ka.push(e)}var za=C.ReactCurrentBatchConfig;function Ba(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Va(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function V(e){var t=e._init;return t(e._payload)}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=tu(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=au(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&V(i)===t.type)?(r=a(t,n.props),r.ref=Ba(e,t,n),r.return=e,r):(r=nu(n.type,n.key,n.props,null,e.mode,r),r.ref=Ba(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ou(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ru(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=au(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=nu(t.type,t.key,t.props,null,e.mode,n),n.ref=Ba(e,null,t),n.return=e,n;case ee:return t=ou(t,e.mode,n),t.return=e,t;case O:var r=t._init;return f(e,r(t._payload),n)}if(ke(t)||le(t))return t=ru(t,e.mode,n,null),t.return=e,t;Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case O:return i=n._init,p(e,t,i(n._payload),r)}if(ke(n)||le(n))return i===null?d(e,t,n,r,null):null;Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:var a=r._init;return m(e,t,n,a(r._payload),i)}if(ke(r)||le(r))return e=e.get(n)||null,d(t,e,r,i,null);Va(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),Oa&&Sa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Oa&&Sa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),Oa&&Sa(r,h),l}function g(a,s,c,l){var u=le(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Oa&&Sa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Oa&&Sa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Oa&&Sa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===te&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===te){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===O&&V(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Ba(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===te?(r=ru(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=nu(i.type,i.key,i.props,null,e.mode,o),o.ref=Ba(e,r,i),o.return=e,e=o)}return s(e);case ee:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=ou(i,e.mode,o),r.return=e,e=r}return s(e);case O:return l=i._init,_(e,r,l(i._payload),o)}if(ke(i))return h(e,r,i,o);if(le(i))return g(e,r,i,o);Va(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=au(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ua=Ha(!0),Wa=Ha(!1),Ga=Zi(null),Ka=null,qa=null,Ja=null;function Ya(){Ja=qa=Ka=null}function Xa(e){var t=Ga.current;L(Ga),e._currentValue=t}function Za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qa(e,t){Ka=e,Ja=qa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Bs=!0),e.firstContext=null)}function $a(e){var t=e._currentValue;if(Ja!==e)if(e={context:e,memoizedValue:t,next:null},qa===null){if(Ka===null)throw Error(r(308));qa=e,Ka.dependencies={lanes:0,firstContext:e}}else qa=qa.next=e;return t}var eo=null;function to(e){eo===null?eo=[e]:eo.push(e)}function no(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,to(t)):(n.next=i.next,i.next=n),t.interleaved=n,ro(e,r)}function ro(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var io=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function so(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function co(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ro(e,n)}return i=r.interleaved,i===null?(t.next=t,to(r)):(t.next=i.next,i.next=t),r.interleaved=t,ro(e,n)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}function uo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var i=e.updateQueue;io=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=k({},d,f);break a;case 2:io=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);el|=o,e.lanes=o,e.memoizedState=d}}function po(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var mo={},ho=Zi(mo),go=Zi(mo),_o=Zi(mo);function vo(e){if(e===mo)throw Error(r(174));return e}function yo(e,t){switch(R(_o,t),R(go,e),R(ho,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ie(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ie(t,e)}L(ho),R(ho,t)}function bo(){L(ho),L(go),L(_o)}function xo(e){vo(_o.current);var t=vo(ho.current),n=Ie(t,e.type);t!==n&&(R(go,e),R(ho,n))}function So(e){go.current===e&&(L(ho),L(go))}var Co=Zi(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var To=[];function Eo(){for(var e=0;e<To.length;e++)To[e]._workInProgressVersionPrimary=null;To.length=0}var Do=C.ReactCurrentDispatcher,Oo=C.ReactCurrentBatchConfig,ko=0,Ao=null,jo=null,Mo=null,No=!1,Po=!1,Fo=0,Io=0;function Lo(){throw Error(r(321))}function Ro(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function zo(e,t,n,i,a,o){if(ko=o,Ao=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?xs:Ss,e=n(i,a),Po){o=0;do{if(Po=!1,Fo=0,25<=o)throw Error(r(301));o+=1,Mo=jo=null,t.updateQueue=null,Do.current=Cs,e=n(i,a)}while(Po)}if(Do.current=bs,t=jo!==null&&jo.next!==null,ko=0,Mo=jo=Ao=null,No=!1,t)throw Error(r(300));return e}function Bo(){var e=Fo!==0;return Fo=0,e}function Vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mo===null?Ao.memoizedState=Mo=e:Mo=Mo.next=e,Mo}function Ho(){if(jo===null){var e=Ao.alternate;e=e===null?null:e.memoizedState}else e=jo.next;var t=Mo===null?Ao.memoizedState:Mo.next;if(t!==null)Mo=t,jo=e;else{if(e===null)throw Error(r(310));jo=e,e={memoizedState:jo.memoizedState,baseState:jo.baseState,baseQueue:jo.baseQueue,queue:jo.queue,next:null},Mo===null?Ao.memoizedState=Mo=e:Mo=Mo.next=e}return Mo}function Uo(e,t){return typeof t==`function`?t(e):t}function Wo(e){var t=Ho(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=jo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((ko&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,Ao.lanes|=d,el|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Lr(i,t.memoizedState)||(Bs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,Ao.lanes|=o,el|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=Ho(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Lr(o,t.memoizedState)||(Bs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Ko(){}function qo(e,t){var n=Ao,i=Ho(),a=t(),o=!Lr(i.memoizedState,a);if(o&&(i.memoizedState=a,Bs=!0),i=i.queue,as(Xo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Mo!==null&&Mo.memoizedState.tag&1){if(n.flags|=2048,es(9,Yo.bind(null,n,i,a,t),void 0,null),qc===null)throw Error(r(349));ko&30||Jo(n,t,a)}return a}function Jo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ao.updateQueue,t===null?(t={lastEffect:null,stores:null},Ao.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yo(e,t,n,r){t.value=n,t.getSnapshot=r,Zo(t)&&Qo(e)}function Xo(e,t,n){return n(function(){Zo(t)&&Qo(e)})}function Zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lr(e,n)}catch{return!0}}function Qo(e){var t=ro(e,1);t!==null&&bl(t,e,1,-1)}function $o(e){var t=Vo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t.queue=e,e=e.dispatch=gs.bind(null,Ao,e),[t.memoizedState,e]}function es(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ao.updateQueue,t===null?(t={lastEffect:null,stores:null},Ao.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ts(){return Ho().memoizedState}function ns(e,t,n,r){var i=Vo();Ao.flags|=e,i.memoizedState=es(1|t,n,void 0,r===void 0?null:r)}function rs(e,t,n,r){var i=Ho();r=r===void 0?null:r;var a=void 0;if(jo!==null){var o=jo.memoizedState;if(a=o.destroy,r!==null&&Ro(r,o.deps)){i.memoizedState=es(t,n,a,r);return}}Ao.flags|=e,i.memoizedState=es(1|t,n,a,r)}function is(e,t){return ns(8390656,8,e,t)}function as(e,t){return rs(2048,8,e,t)}function os(e,t){return rs(4,2,e,t)}function ss(e,t){return rs(4,4,e,t)}function cs(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ls(e,t,n){return n=n==null?null:n.concat([e]),rs(4,4,cs.bind(null,t,e),n)}function us(){}function ds(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ro(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fs(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ro(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ps(e,t,n){return ko&21?(Lr(n,t)||(n=Wt(),Ao.lanes|=n,el|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Bs=!0),e.memoizedState=n)}function H(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=Oo.transition;Oo.transition={};try{e(!1),t()}finally{N=n,Oo.transition=r}}function ms(){return Ho().memoizedState}function hs(e,t,n){var r=yl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_s(e))vs(t,n);else if(n=no(e,t,n,r),n!==null){var i=vl();bl(n,e,r,i),ys(n,t,r)}}function gs(e,t,n){var r=yl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_s(e))vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Lr(s,o)){var c=t.interleaved;c===null?(i.next=i,to(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=no(e,t,i,r),n!==null&&(i=vl(),bl(n,e,r,i),ys(n,t,r))}}function _s(e){var t=e.alternate;return e===Ao||t!==null&&t===Ao}function vs(e,t){Po=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ys(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}var bs={readContext:$a,useCallback:Lo,useContext:Lo,useEffect:Lo,useImperativeHandle:Lo,useInsertionEffect:Lo,useLayoutEffect:Lo,useMemo:Lo,useReducer:Lo,useRef:Lo,useState:Lo,useDebugValue:Lo,useDeferredValue:Lo,useTransition:Lo,useMutableSource:Lo,useSyncExternalStore:Lo,useId:Lo,unstable_isNewReconciler:!1},xs={readContext:$a,useCallback:function(e,t){return Vo().memoizedState=[e,t===void 0?null:t],e},useContext:$a,useEffect:is,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),ns(4194308,4,cs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return ns(4,2,e,t)},useMemo:function(e,t){var n=Vo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hs.bind(null,Ao,e),[r.memoizedState,e]},useRef:function(e){var t=Vo();return e={current:e},t.memoizedState=e},useState:$o,useDebugValue:us,useDeferredValue:function(e){return Vo().memoizedState=e},useTransition:function(){var e=$o(!1),t=e[0];return e=H.bind(null,e[1]),Vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Ao,a=Vo();if(Oa){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),qc===null)throw Error(r(349));ko&30||Jo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,is(Xo.bind(null,i,o,e),[e]),i.flags|=2048,es(9,Yo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Vo(),t=qc.identifierPrefix;if(Oa){var n=xa,r=ba;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Fo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Io++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},Ss={readContext:$a,useCallback:ds,useContext:$a,useEffect:as,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:Wo,useRef:ts,useState:function(){return Wo(Uo)},useDebugValue:us,useDeferredValue:function(e){return ps(Ho(),jo.memoizedState,e)},useTransition:function(){return[Wo(Uo)[0],Ho().memoizedState]},useMutableSource:Ko,useSyncExternalStore:qo,useId:ms,unstable_isNewReconciler:!1},Cs={readContext:$a,useCallback:ds,useContext:$a,useEffect:as,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:Go,useRef:ts,useState:function(){return Go(Uo)},useDebugValue:us,useDeferredValue:function(e){var t=Ho();return jo===null?t.memoizedState=e:ps(t,jo.memoizedState,e)},useTransition:function(){return[Go(Uo)[0],Ho().memoizedState]},useMutableSource:Ko,useSyncExternalStore:qo,useId:ms,unstable_isNewReconciler:!1};function ws(e,t){if(e&&e.defaultProps){for(var n in t=k({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Es={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vl(),i=yl(e),a=so(r,i);a.payload=t,n!=null&&(a.callback=n),t=co(e,a,i),t!==null&&(bl(t,e,i,r),lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vl(),i=yl(e),a=so(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=co(e,a,i),t!==null&&(bl(t,e,i,r),lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vl(),r=yl(e),i=so(n,r);i.tag=2,t!=null&&(i.callback=t),t=co(e,i,r),t!==null&&(bl(t,e,r,n),lo(t,e,r))}};function Ds(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,a):!0}function Os(e,t,n){var r=!1,i=Qi,a=t.contextType;return typeof a==`object`&&a?a=$a(a):(i=na(t)?ea:z.current,r=t.contextTypes,a=(r=r!=null)?ta(e,i):Qi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Es,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Es.enqueueReplaceState(t,t.state,null)}function As(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ao(e);var a=t.contextType;typeof a==`object`&&a?i.context=$a(a):(a=na(t)?ea:z.current,i.context=ta(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Ts(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Es.enqueueReplaceState(i,i.state,null),fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function js(e,t){try{var n=``,r=t;do n+=me(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ns(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ps=typeof WeakMap==`function`?WeakMap:Map;function Fs(e,t,n){n=so(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cl||(cl=!0,ll=r),Ns(e,t)},n}function Is(e,t,n){n=so(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ns(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ns(e,t),typeof r!=`function`&&(ul===null?ul=new Set([this]):ul.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ps;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Gl.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function U(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=so(-1,1),t.tag=2,co(n,t,1))),n.lanes|=1),e)}var zs=C.ReactCurrentOwner,Bs=!1;function Vs(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function Hs(e,t,n,r,i){n=n.render;var a=t.ref;return Qa(t,i),r=zo(e,t,n,r,a,i),n=Bo(),e!==null&&!Bs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cc(e,t,i)):(Oa&&n&&wa(t),t.flags|=1,Vs(e,t,r,i),t.child)}function Us(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!$l(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ws(e,t,a,r,i)):(e=nu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Rr:n,n(o,r)&&e.ref===t.ref)return cc(e,t,i)}return t.flags|=1,e=tu(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ws(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Rr(a,r)&&e.ref===t.ref)if(Bs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Bs=!0);else return t.lanes=e.lanes,cc(e,t,i)}return qs(e,t,n,r,i)}function Gs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Zc,Xc),Xc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Zc,Xc),Xc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,R(Zc,Xc),Xc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),R(Zc,Xc),Xc|=r;return Vs(e,t,i,n),t.child}function Ks(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qs(e,t,n,r,i){var a=na(n)?ea:z.current;return a=ta(t,a),Qa(t,i),n=zo(e,t,n,r,a,i),r=Bo(),e!==null&&!Bs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cc(e,t,i)):(Oa&&r&&wa(t),t.flags|=1,Vs(e,t,n,i),t.child)}function Js(e,t,n,r,i){if(na(n)){var a=!0;oa(t)}else a=!1;if(Qa(t,i),t.stateNode===null)sc(e,t),Os(t,n,r),As(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=$a(l):(l=na(n)?ea:z.current,l=ta(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&ks(t,o,r,l),io=!1;var f=t.memoizedState;o.state=f,fo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||$i.current||io?(typeof u==`function`&&(Ts(t,n,u,r),c=t.memoizedState),(s=io||Ds(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,oo(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:ws(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=$a(c):(c=na(n)?ea:z.current,c=ta(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&ks(t,o,r,c),io=!1,f=t.memoizedState,o.state=f,fo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||$i.current||io?(typeof p==`function`&&(Ts(t,n,p,r),m=t.memoizedState),(l=io||Ds(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ys(e,t,n,r,a,i)}function Ys(e,t,n,r,i,a){Ks(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&sa(t,n,!1),cc(e,t,a);r=t.stateNode,zs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ua(t,e.child,null,a),t.child=Ua(t,null,s,a)):Vs(e,t,s,a),t.memoizedState=r.state,i&&sa(t,n,!0),t.child}function Xs(e){var t=e.stateNode;t.pendingContext?ia(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ia(e,t.context,!1),yo(e,t.containerInfo)}function Zs(e,t,n,r,i){return La(),Ra(i),t.flags|=256,Vs(e,t,n,r),t.child}var Qs={dehydrated:null,treeContext:null,retryLane:0};function $s(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,t,n){var r=t.pendingProps,i=Co.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),R(Co,i&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=iu(o,r,0,null),e=ru(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=$s(n),t.memoizedState=Qs,e):tc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return rc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=tu(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=ru(a,o,n,null),a.flags|=2):a=tu(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?$s(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Qs,r}return a=e.child,e=a.sibling,r=tu(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tc(e,t){return t=iu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function nc(e,t,n,r){return r!==null&&Ra(r),Ua(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Ms(Error(r(422))),nc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=iu({mode:`visible`,children:i.children},a,0,null),o=ru(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ua(t,e.child,null,s),t.child.memoizedState=$s(s),t.memoizedState=Qs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return nc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Ms(o,i,void 0),nc(e,t,s,i)}if(c=(s&e.childLanes)!==0,Bs||c){if(i=qc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,ro(e,a),bl(i,e,a,-1))}return Pl(),i=Ms(Error(r(421))),nc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=ql.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Da=Ii(a.nextSibling),Ea=t,Oa=!0,ka=null,e!==null&&(B[va++]=ba,B[va++]=xa,B[va++]=ya,ba=e.id,xa=e.overflow,ya=t),t=tc(t,i.children),t.flags|=4096,t)}function ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Za(e.return,t,n)}function ac(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Vs(e,t,r.children,n),r=Co.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,n,t);else if(e.tag===19)ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(Co,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ac(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ac(t,!0,n,null,a);break;case`together`:ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),el|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=tu(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tu(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lc(e,t,n){switch(t.tag){case 3:Xs(t),La();break;case 5:xo(t);break;case 1:na(t.type)&&oa(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;R(Ga,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(R(Co,Co.current&1),e=cc(e,t,n),e===null?null:e.sibling):ec(e,t,n):(R(Co,Co.current&1),t.flags|=128,null);R(Co,Co.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(Co,Co.current),r)break;return null;case 22:case 23:return t.lanes=0,Gs(e,t,n)}return cc(e,t,n)}var uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},dc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vo(ho.current);var o=null;switch(n){case`input`:i=Ce(e,i),r=Ce(e,r),o=[];break;case`select`:i=k({},i,{value:void 0}),r=k({},r,{value:void 0}),o=[];break;case`textarea`:i=je(e,i),r=je(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Di)}Ge(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&P(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function pc(e,t){if(!Oa)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hc(e,t,n){var i=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mc(t),null;case 1:return na(t.type)&&ra(),mc(t),null;case 3:return i=t.stateNode,bo(),L($i),L(z),Eo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ka!==null&&(wl(ka),ka=null))),mc(t),null;case 5:So(t);var o=vo(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)dc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return mc(t),null}if(e=vo(ho.current),Fa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[zi]=t,i[Bi]=s,e=(t.mode&1)!=0,n){case`dialog`:P(`cancel`,i),P(`close`,i);break;case`iframe`:case`object`:case`embed`:P(`load`,i);break;case`video`:case`audio`:for(o=0;o<di.length;o++)P(di[o],i);break;case`source`:P(`error`,i);break;case`img`:case`image`:case`link`:P(`error`,i),P(`load`,i);break;case`details`:P(`toggle`,i);break;case`input`:we(i,s),P(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},P(`invalid`,i);break;case`textarea`:Me(i,s),P(`invalid`,i)}for(var c in Ge(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ei(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ei(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&P(`scroll`,i)}switch(n){case`input`:be(i),De(i,s,!0);break;case`textarea`:be(i),Pe(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Di)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Fe(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[zi]=t,e[Bi]=i,uc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ke(n,i),n){case`dialog`:P(`cancel`,e),P(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:P(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<di.length;o++)P(di[o],e);o=i;break;case`source`:P(`error`,e),o=i;break;case`img`:case`image`:case`link`:P(`error`,e),P(`load`,e),o=i;break;case`details`:P(`toggle`,e),o=i;break;case`input`:we(e,i),o=Ce(e,i),P(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=k({},i,{value:void 0}),P(`invalid`,e);break;case`textarea`:Me(e,i),o=je(e,i),P(`invalid`,e);break;default:o=i}for(s in Ge(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ue(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Re(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&ze(e,u):typeof u==`number`&&ze(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&P(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:be(e),De(e,i,!1);break;case`textarea`:be(e),Pe(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+_e(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ae(e,!!i.multiple,i.defaultValue,!0):Ae(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Di)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mc(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=vo(_o.current),vo(ho.current),Fa(t)){if(i=t.stateNode,n=t.memoizedProps,i[zi]=t,(s=i.nodeValue!==n)&&(e=Ea,e!==null))switch(e.tag){case 3:Ei(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ei(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zi]=t,t.stateNode=i}return mc(t),null;case 13:if(L(Co),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oa&&Da!==null&&t.mode&1&&!(t.flags&128))Ia(),La(),t.flags|=98560,s=!1;else if(s=Fa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[zi]=t}else La(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mc(t),s=!1}else ka!==null&&(wl(ka),ka=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Co.current&1?Qc===0&&(Qc=3):Pl())),t.updateQueue!==null&&(t.flags|=4),mc(t),null);case 4:return bo(),e===null&&_i(t.stateNode.containerInfo),mc(t),null;case 10:return Xa(t.type._context),mc(t),null;case 17:return na(t.type)&&ra(),mc(t),null;case 19:if(L(Co),s=t.memoizedState,s===null)return mc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)pc(s,!1);else{if(Qc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=wo(e),c!==null){for(t.flags|=128,pc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(Co,Co.current&1|2),t.child}e=e.sibling}s.tail!==null&&Et()>ol&&(t.flags|=128,i=!0,pc(s,!1),t.lanes=4194304)}else{if(!i)if(e=wo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!Oa)return mc(t),null}else 2*Et()-s.renderingStartTime>ol&&n!==1073741824&&(t.flags|=128,i=!0,pc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(mc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Et(),t.sibling=null,n=Co.current,R(Co,i?n&1|2:n&1),t);case 22:case 23:return Al(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Xc&1073741824&&(mc(t),t.subtreeFlags&6&&(t.flags|=8192)):mc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function gc(e,t){switch(Ta(t),t.tag){case 1:return na(t.type)&&ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bo(),L($i),L(z),Eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if(L(Co),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Co),null;case 4:return bo(),null;case 10:return Xa(t.type._context),null;case 22:case 23:return Al(),null;case 24:return null;default:return null}}var _c=!1,vc=!1,yc=typeof WeakSet==`function`?WeakSet:Set,W=null;function bc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Wl(e,t,n)}else n.current=null}function xc(e,t,n){try{n()}catch(n){Wl(e,t,n)}}var Sc=!1;function Cc(e,t){if(I=xn,e=Hr(),Ur(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},xn=!1,W=t;W!==null;)if(t=W,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ws(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Wl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return h=Sc,Sc=!1,h}function wc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&xc(t,n,a)}i=i.next}while(i!==r)}}function Tc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Dc(e){var t=e.alternate;t!==null&&(e.alternate=null,Dc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zi],delete t[Bi],delete t[Hi],delete t[Ui],delete t[Wi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function kc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}function G(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(G(e,t,n),e=e.sibling;e!==null;)G(e,t,n),e=e.sibling}var K=null,jc=!1;function Mc(e,t,n){for(n=n.child;n!==null;)Nc(e,t,n),n=n.sibling}function Nc(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount==`function`)try{Mt.onCommitFiberUnmount(jt,n)}catch{}switch(n.tag){case 5:vc||bc(n,t);case 6:var r=K,i=jc;K=null,Mc(e,t,n),K=r,jc=i,K!==null&&(jc?(e=K,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):K.removeChild(n.stateNode));break;case 18:K!==null&&(jc?(e=K,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),yn(e)):Fi(K,n.stateNode));break;case 4:r=K,i=jc,K=n.stateNode.containerInfo,jc=!0,Mc(e,t,n),K=r,jc=i;break;case 0:case 11:case 14:case 15:if(!vc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&xc(n,t,o),i=i.next}while(i!==r)}Mc(e,t,n);break;case 1:if(!vc&&(bc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Wl(n,t,e)}Mc(e,t,n);break;case 21:Mc(e,t,n);break;case 22:n.mode&1?(vc=(r=vc)||n.memoizedState!==null,Mc(e,t,n),vc=r):Mc(e,t,n);break;default:Mc(e,t,n)}}function Pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yc),t.forEach(function(t){var r=Jl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Fc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:K=c.stateNode,jc=!1;break a;case 3:K=c.stateNode.containerInfo,jc=!0;break a;case 4:K=c.stateNode.containerInfo,jc=!0;break a}c=c.return}if(K===null)throw Error(r(160));Nc(o,s,a),K=null,jc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Wl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fc(t,e),Lc(e),i&4){try{wc(3,e,e.return),Tc(3,e)}catch(t){Wl(e,e.return,t)}try{wc(5,e,e.return)}catch(t){Wl(e,e.return,t)}}break;case 1:Fc(t,e),Lc(e),i&512&&n!==null&&bc(n,n.return);break;case 5:if(Fc(t,e),Lc(e),i&512&&n!==null&&bc(n,n.return),e.flags&32){var a=e.stateNode;try{ze(a,``)}catch(t){Wl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Te(a,o),Ke(c,s);var u=Ke(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ue(a,f):d===`dangerouslySetInnerHTML`?Re(a,f):d===`children`?ze(a,f):S(a,d,f,u)}switch(c){case`input`:Ee(a,o);break;case`textarea`:Ne(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ae(a,!!o.multiple,o.multiple?[]:``,!1):Ae(a,!!o.multiple,o.defaultValue,!0)):Ae(a,!!o.multiple,m,!1)}a[Bi]=o}catch(t){Wl(e,e.return,t)}}break;case 6:if(Fc(t,e),Lc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Wl(e,e.return,t)}}break;case 3:if(Fc(t,e),Lc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yn(t.containerInfo)}catch(t){Wl(e,e.return,t)}break;case 4:Fc(t,e),Lc(e);break;case 13:Fc(t,e),Lc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(al=Et())),i&4&&Pc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(vc=(u=vc)||d,Fc(t,e),vc=u):Fc(t,e),Lc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(p=W,m=p.child,p.tag){case 0:case 11:case 14:case 15:wc(4,p,p.return);break;case 1:bc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Wl(i,n,e)}}break;case 5:bc(p,p.return);break;case 22:if(p.memoizedState!==null){Vc(f);continue}}m===null?Vc(f):(m.return=p,W=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=He(`display`,s))}catch(t){Wl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Wl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fc(t,e),Lc(e),i&4&&Pc(e);break;case 21:break;default:Fc(t,e),Lc(e)}}function Lc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Oc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(ze(a,``),i.flags&=-33),G(e,kc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Ac(e,kc(e),o);break;default:throw Error(r(161))}}catch(t){Wl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rc(e,t,n){W=e,zc(e,t,n)}function zc(e,t,n){for(var r=(e.mode&1)!=0;W!==null;){var i=W,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_c;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||vc;s=_c;var l=vc;if(_c=o,(vc=c)&&!l)for(W=i;W!==null;)o=W,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Hc(i):(c.return=o,W=c);for(;a!==null;)W=a,zc(a,t,n),a=a.sibling;W=i,_c=s,vc=l}Bc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,W=a):Bc(e,t,n)}}function Bc(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:vc||Tc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!vc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ws(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&po(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}po(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}vc||t.flags&512&&Ec(t)}catch(e){Wl(t,t.return,e)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Vc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Hc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tc(4,t)}catch(e){Wl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Wl(t,i,e)}}var a=t.return;try{Ec(t)}catch(e){Wl(t,a,e)}break;case 5:var o=t.return;try{Ec(t)}catch(e){Wl(t,o,e)}}}catch(e){Wl(t,t.return,e)}if(t===e){W=null;break}var s=t.sibling;if(s!==null){s.return=t.return,W=s;break}W=t.return}}var Uc=Math.ceil,Wc=C.ReactCurrentDispatcher,Gc=C.ReactCurrentOwner,Kc=C.ReactCurrentBatchConfig,q=0,qc=null,Jc=null,Yc=0,Xc=0,Zc=Zi(0),Qc=0,$c=null,el=0,tl=0,nl=0,rl=null,il=null,al=0,ol=1/0,sl=null,cl=!1,ll=null,ul=null,dl=!1,fl=null,pl=0,ml=0,hl=null,gl=-1,_l=0;function vl(){return q&6?Et():gl===-1?gl=Et():gl}function yl(e){return e.mode&1?q&2&&Yc!==0?Yc&-Yc:za.transition===null?(e=N,e===0?(e=window.event,e=e===void 0?16:Dn(e.type),e):e):(_l===0&&(_l=Wt()),_l):1}function bl(e,t,n,i){if(50<ml)throw ml=0,hl=null,Error(r(185));Kt(e,n,i),(!(q&2)||e!==qc)&&(e===qc&&(!(q&2)&&(tl|=n),Qc===4&&El(e,Yc)),xl(e,i),n===1&&q===0&&!(t.mode&1)&&(ol=Et()+500,la&&pa()))}function xl(e,t){var n=e.callbackNode;Ht(e,t);var r=Vt(e,e===qc?Yc:0);if(r===0)n!==null&&Ct(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ct(n),t===1)e.tag===0?fa(Dl.bind(null,e)):da(Dl.bind(null,e)),Ni(function(){!(q&6)&&pa()}),n=null;else{switch(Yt(r)){case 1:n=A;break;case 4:n=Ot;break;case 16:n=j;break;case 536870912:n=At;break;default:n=j}n=Xl(n,Sl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sl(e,t){if(gl=-1,_l=0,q&6)throw Error(r(327));var n=e.callbackNode;if(Hl()&&e.callbackNode!==n)return null;var i=Vt(e,e===qc?Yc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Fl(e,i);else{t=i;var a=q;q|=2;var o=Nl();(qc!==e||Yc!==t)&&(sl=null,ol=Et()+500,jl(e,t));do try{Ll();break}catch(t){Ml(e,t)}while(1);Ya(),Wc.current=o,q=a,Jc===null?(qc=null,Yc=0,t=Qc):t=0}if(t!==0){if(t===2&&(a=Ut(e),a!==0&&(i=a,t=Cl(e,a))),t===1)throw n=$c,jl(e,0),El(e,i),xl(e,Et()),n;if(t===6)El(e,i);else{if(a=e.current.alternate,!(i&30)&&!Tl(a)&&(t=Fl(e,i),t===2&&(o=Ut(e),o!==0&&(i=o,t=Cl(e,o))),t===1))throw n=$c,jl(e,0),El(e,i),xl(e,Et()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Bl(e,il,sl);break;case 3:if(El(e,i),(i&130023424)===i&&(t=al+500-Et(),10<t)){if(Vt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){vl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ai(Bl.bind(null,e,il,sl),t);break}Bl(e,il,sl);break;case 4:if(El(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Pt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Uc(i/1960))-i,10<i){e.timeoutHandle=Ai(Bl.bind(null,e,il,sl),i);break}Bl(e,il,sl);break;case 5:Bl(e,il,sl);break;default:throw Error(r(329))}}}return xl(e,Et()),e.callbackNode===n?Sl.bind(null,e):null}function Cl(e,t){var n=rl;return e.current.memoizedState.isDehydrated&&(jl(e,t).flags|=256),e=Fl(e,t),e!==2&&(t=il,il=n,t!==null&&wl(t)),e}function wl(e){il===null?il=e:il.push.apply(il,e)}function Tl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Lr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function El(e,t){for(t&=~nl,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function Dl(e){if(q&6)throw Error(r(327));Hl();var t=Vt(e,0);if(!(t&1))return xl(e,Et()),null;var n=Fl(e,t);if(e.tag!==0&&n===2){var i=Ut(e);i!==0&&(t=i,n=Cl(e,i))}if(n===1)throw n=$c,jl(e,0),El(e,t),xl(e,Et()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bl(e,il,sl),xl(e,Et()),null}function Ol(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(ol=Et()+500,la&&pa())}}function kl(e){fl!==null&&fl.tag===0&&!(q&6)&&Hl();var t=q;q|=1;var n=Kc.transition,r=N;try{if(Kc.transition=null,N=1,e)return e()}finally{N=r,Kc.transition=n,q=t,!(q&6)&&pa()}}function Al(){Xc=Zc.current,L(Zc)}function jl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ji(n)),Jc!==null)for(n=Jc.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ra();break;case 3:bo(),L($i),L(z),Eo();break;case 5:So(r);break;case 4:bo();break;case 13:L(Co);break;case 19:L(Co);break;case 10:Xa(r.type._context);break;case 22:case 23:Al()}n=n.return}if(qc=e,Jc=e=tu(e.current,null),Yc=Xc=t,Qc=0,$c=null,nl=tl=el=0,il=rl=null,eo!==null){for(t=0;t<eo.length;t++)if(n=eo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}eo=null}return e}function Ml(e,t){do{var n=Jc;try{if(Ya(),Do.current=bs,No){for(var i=Ao.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}No=!1}if(ko=0,Mo=jo=Ao=null,Po=!1,Fo=0,Gc.current=null,n===null||n.return===null){Qc=1,$c=t,Jc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Yc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Rs(s);if(m!==null){m.flags&=-257,U(m,s,c,o,t),m.mode&1&&Ls(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Ls(o,u,t),Pl();break a}l=Error(r(426))}}else if(Oa&&c.mode&1){var _=Rs(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),U(_,s,c,o,t),Ra(js(l,c));break a}}o=l=js(l,c),Qc!==4&&(Qc=2),rl===null?rl=[o]:rl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Fs(o,l,t);uo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ul===null||!ul.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Is(o,c,t);uo(o,x);break a}}o=o.return}while(o!==null)}zl(n)}catch(e){t=e,Jc===n&&n!==null&&(Jc=n=n.return);continue}break}while(1)}function Nl(){var e=Wc.current;return Wc.current=bs,e===null?bs:e}function Pl(){(Qc===0||Qc===3||Qc===2)&&(Qc=4),qc===null||!(el&268435455)&&!(tl&268435455)||El(qc,Yc)}function Fl(e,t){var n=q;q|=2;var i=Nl();(qc!==e||Yc!==t)&&(sl=null,jl(e,t));do try{Il();break}catch(t){Ml(e,t)}while(1);if(Ya(),q=n,Wc.current=i,Jc!==null)throw Error(r(261));return qc=null,Yc=0,Qc}function Il(){for(;Jc!==null;)Rl(Jc)}function Ll(){for(;Jc!==null&&!wt();)Rl(Jc)}function Rl(e){var t=Yl(e.alternate,e,Xc);e.memoizedProps=e.pendingProps,t===null?zl(e):Jc=t,Gc.current=null}function zl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gc(n,t),n!==null){n.flags&=32767,Jc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qc=6,Jc=null;return}}else if(n=hc(n,t,Xc),n!==null){Jc=n;return}if(t=t.sibling,t!==null){Jc=t;return}Jc=t=e}while(t!==null);Qc===0&&(Qc=5)}function Bl(e,t,n){var r=N,i=Kc.transition;try{Kc.transition=null,N=1,Vl(e,t,n,r)}finally{Kc.transition=i,N=r}return null}function Vl(e,t,n,i){do Hl();while(fl!==null);if(q&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qt(e,o),e===qc&&(Jc=qc=null,Yc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,Xl(j,function(){return Hl(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Kc.transition,Kc.transition=null;var s=N;N=1;var c=q;q|=4,Gc.current=null,Cc(e,n),Ic(n,e),Wr(Oi),xn=!!I,Oi=I=null,e.current=n,Rc(n,e,a),Tt(),q=c,N=s,Kc.transition=o}else e.current=n;if(dl&&(dl=!1,fl=e,pl=a),o=e.pendingLanes,o===0&&(ul=null),Nt(n.stateNode,i),xl(e,Et()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(cl)throw cl=!1,e=ll,ll=null,e;return pl&1&&e.tag!==0&&Hl(),o=e.pendingLanes,o&1?e===hl?ml++:(ml=0,hl=e):ml=0,pa(),null}function Hl(){if(fl!==null){var e=Yt(pl),t=Kc.transition,n=N;try{if(Kc.transition=null,N=16>e?16:e,fl===null)var i=!1;else{if(e=fl,fl=null,pl=0,q&6)throw Error(r(331));var a=q;for(q|=4,W=e.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:wc(8,d,o)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var p=d.sibling,m=d.return;if(Dc(d),d===u){W=null;break}if(p!==null){p.return=m,W=p;break}W=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else b:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,W=v;break b}W=o.return}}var y=e.current;for(W=y;W!==null;){s=W;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,W=b;else b:for(s=y;W!==null;){if(c=W,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Tc(9,c)}}catch(e){Wl(c,c.return,e)}if(c===s){W=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,W=x;break b}W=c.return}}if(q=a,pa(),Mt&&typeof Mt.onPostCommitFiberRoot==`function`)try{Mt.onPostCommitFiberRoot(jt,e)}catch{}i=!0}return i}finally{N=n,Kc.transition=t}}return!1}function Ul(e,t,n){t=js(n,t),t=Fs(e,t,1),e=co(e,t,1),t=vl(),e!==null&&(Kt(e,1,t),xl(e,t))}function Wl(e,t,n){if(e.tag===3)Ul(e,e,n);else for(;t!==null;){if(t.tag===3){Ul(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ul===null||!ul.has(r))){e=js(n,e),e=Is(t,e,1),t=co(t,e,1),e=vl(),t!==null&&(Kt(t,1,e),xl(t,e));break}}t=t.return}}function Gl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vl(),e.pingedLanes|=e.suspendedLanes&n,qc===e&&(Yc&n)===n&&(Qc===4||Qc===3&&(Yc&130023424)===Yc&&500>Et()-al?jl(e,0):nl|=n),xl(e,t)}function Kl(e,t){t===0&&(e.mode&1?(t=zt,zt<<=1,!(zt&130023424)&&(zt=4194304)):t=1);var n=vl();e=ro(e,t),e!==null&&(Kt(e,t,n),xl(e,n))}function ql(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kl(e,n)}function Jl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Kl(e,n)}var Yl=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$i.current)Bs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Bs=!1,lc(e,t,n);Bs=!!(e.flags&131072)}else Bs=!1,Oa&&t.flags&1048576&&Ca(t,_a,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;sc(e,t),e=t.pendingProps;var a=ta(t,z.current);Qa(t,n),a=zo(null,t,i,e,a,n);var o=Bo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,na(i)?(o=!0,oa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ao(t),a.updater=Es,t.stateNode=a,a._reactInternals=t,As(t,i,e,n),t=Ys(null,t,i,!0,o,n)):(t.tag=0,Oa&&o&&wa(t),Vs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(sc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=eu(i),e=ws(i,e),a){case 0:t=qs(null,t,i,e,n);break a;case 1:t=Js(null,t,i,e,n);break a;case 11:t=Hs(null,t,i,e,n);break a;case 14:t=Us(null,t,i,ws(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),qs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),Js(e,t,i,a,n);case 3:a:{if(Xs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,oo(e,t),fo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=js(Error(r(423)),t),t=Zs(e,t,i,n,a);break a}else if(i!==a){a=js(Error(r(424)),t),t=Zs(e,t,i,n,a);break a}else for(Da=Ii(t.stateNode.containerInfo.firstChild),Ea=t,Oa=!0,ka=null,n=Wa(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(La(),i===a){t=cc(e,t,n);break a}Vs(e,t,i,n)}t=t.child}return t;case 5:return xo(t),e===null&&Na(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,ki(i,a)?s=null:o!==null&&ki(i,o)&&(t.flags|=32),Ks(e,t),Vs(e,t,s,n),t.child;case 6:return e===null&&Na(t),null;case 13:return ec(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ua(t,null,i,n):Vs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),Hs(e,t,i,a,n);case 7:return Vs(e,t,t.pendingProps,n),t.child;case 8:return Vs(e,t,t.pendingProps.children,n),t.child;case 12:return Vs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,R(Ga,i._currentValue),i._currentValue=s,o!==null)if(Lr(o.value,s)){if(o.children===a.children&&!$i.current){t=cc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=so(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Za(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Za(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Vs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Qa(t,n),a=$a(a),i=i(a),t.flags|=1,Vs(e,t,i,n),t.child;case 14:return i=t.type,a=ws(i,t.pendingProps),a=ws(i.type,a),Us(e,t,i,a,n);case 15:return Ws(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),sc(e,t),t.tag=1,na(i)?(e=!0,oa(t)):e=!1,Qa(t,n),Os(t,i,a),As(t,i,a,n),Ys(null,t,i,!0,e,n);case 19:return oc(e,t,n);case 22:return Gs(e,t,n)}throw Error(r(156,t.tag))};function Xl(e,t){return St(e,t)}function Zl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ql(e,t,n,r){return new Zl(e,t,n,r)}function $l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eu(e){if(typeof e==`function`)return+!!$l(e);if(e!=null){if(e=e.$$typeof,e===ae)return 11;if(e===D)return 14}return 2}function tu(e,t){var n=e.alternate;return n===null?(n=Ql(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nu(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)$l(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case te:return ru(n.children,a,o,t);case ne:s=8,a|=8;break;case re:return e=Ql(12,n,t,a|2),e.elementType=re,e.lanes=o,e;case E:return e=Ql(13,n,t,a),e.elementType=E,e.lanes=o,e;case oe:return e=Ql(19,n,t,a),e.elementType=oe,e.lanes=o,e;case se:return iu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case T:s=10;break a;case ie:s=9;break a;case ae:s=11;break a;case D:s=14;break a;case O:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Ql(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function ru(e,t,n,r){return e=Ql(7,e,r,t),e.lanes=n,e}function iu(e,t,n,r){return e=Ql(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function au(e,t,n){return e=Ql(6,e,null,t),e.lanes=n,e}function ou(e,t,n){return t=Ql(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function su(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gt(0),this.expirationTimes=Gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cu(e,t,n,r,i,a,o,s,c){return e=new su(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Ql(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ao(a),e}function lu(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function uu(e){if(!e)return Qi;e=e._reactInternals;a:{if(gt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(na(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(na(n))return aa(e,n,t)}return t}function du(e,t,n,r,i,a,o,s,c){return e=cu(n,r,!0,e,i,a,o,s,c),e.context=uu(null),n=e.current,r=vl(),i=yl(n),a=so(r,i),a.callback=t??null,co(n,a,i),e.current.lanes=i,Kt(e,i,r),xl(e,r),e}function fu(e,t,n,r){var i=t.current,a=vl(),o=yl(i);return n=uu(n),t.context===null?t.context=n:t.pendingContext=n,t=so(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=co(i,t,o),e!==null&&(bl(e,i,o,a),lo(e,i,o)),o}function pu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function gu(){return null}var _u=typeof reportError==`function`?reportError:function(e){console.error(e)};function vu(e){this._internalRoot=e}yu.prototype.render=vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));fu(e,t,null,null)},yu.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kl(function(){fu(null,e,null,null)}),t[Vi]=null}};function yu(e){this._internalRoot=e}yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=$t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&mn(e)}};function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function Su(){}function Cu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=pu(o);a.call(e)}}var o=du(t,r,e,0,null,!1,!1,``,Su);return e._reactRootContainer=o,e[Vi]=o.current,_i(e.nodeType===8?e.parentNode:e),kl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=pu(c);s.call(e)}}var c=cu(e,0,!1,null,null,!1,!1,``,Su);return e._reactRootContainer=c,e[Vi]=c.current,_i(e.nodeType===8?e.parentNode:e),kl(function(){fu(t,c,n,r)}),c}function wu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=pu(o);s.call(e)}}fu(t,o,e,i)}else o=Cu(n,t,e,i,r);return pu(o)}Xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bt(t.pendingLanes);n!==0&&(Jt(t,n|1),xl(t,Et()),!(q&6)&&(ol=Et()+500,pa()))}break;case 13:kl(function(){var t=ro(e,1);t!==null&&bl(t,e,1,vl())}),hu(e,1)}},Zt=function(e){if(e.tag===13){var t=ro(e,134217728);t!==null&&bl(t,e,134217728,vl()),hu(e,134217728)}},Qt=function(e){if(e.tag===13){var t=yl(e),n=ro(e,t);n!==null&&bl(n,e,t,vl()),hu(e,t)}},$t=function(){return N},en=function(e,t){var n=N;try{return N=e,t()}finally{N=n}},Ye=function(e,t,n){switch(t){case`input`:if(Ee(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ji(i);if(!a)throw Error(r(90));xe(i),Ee(i,a)}}}break;case`textarea`:Ne(e,n);break;case`select`:t=n.value,t!=null&&Ae(e,!!n.multiple,t,!1)}},tt=Ol,nt=kl;var Tu={usingClientEntryPoint:!1,Events:[Ki,qi,Ji,$e,et,Ol]},Eu={findFiberByHostInstance:Gi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Du={bundleType:Eu.bundleType,version:Eu.version,rendererPackageName:Eu.rendererPackageName,rendererConfig:Eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bt(e),e===null?null:e.stateNode},findFiberByHostInstance:Eu.findFiberByHostInstance||gu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ou.isDisabled&&Ou.supportsFiber)try{jt=Ou.inject(Du),Mt=Ou}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(t))throw Error(r(200));return lu(e,t,null,n)},e.createRoot=function(e,t){if(!bu(e))throw Error(r(299));var n=!1,i=``,a=_u;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=cu(e,1,!1,null,null,n,!1,i,a),e[Vi]=t.current,_i(e.nodeType===8?e.parentNode:e),new vu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=bt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return kl(e)},e.hydrate=function(e,t,n){if(!xu(t))throw Error(r(200));return wu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!bu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=_u;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=du(t,null,e,1,n??null,a,!1,o,s),e[Vi]=t.current,_i(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new yu(t)},e.render=function(e,t,n){if(!xu(t))throw Error(r(200));return wu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!xu(e))throw Error(r(40));return e._reactRootContainer?(kl(function(){wu(null,null,e,!1,function(){e._reactRootContainer=null,e[Vi]=null})}),!0):!1},e.unstable_batchedUpdates=Ol,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!xu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return wu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u()),_=h(),v=c(m());function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}var b;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(b||={});var x=`popstate`;function S(e){e===void 0&&(e={});function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=T(e.location.hash.substr(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),ne(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:re(t))}function r(e,t){w(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(`+JSON.stringify(t)+`)`)}return ie(t,n,r,e)}function C(e,t){if(e===!1||e==null)throw Error(t)}function w(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substr(2,8)}function te(e,t){return{usr:e.state,key:e.key,idx:t}}function ne(e,t,n,r){return n===void 0&&(n=null),y({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?T(t):t,{state:n,key:t&&t.key||r||ee()})}function re(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function T(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=b.Pop,c=null,l=u();l??(l=0,o.replaceState(y({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=b.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=b.Push;let r=ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=b.Replace;let r=ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:re(e);return n=n.replace(/ $/,`%20`),C(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(x,d),c=e,()=>{i.removeEventListener(x,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var ae;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(ae||={});function E(e,t,n){return n===void 0&&(n=`/`),oe(e,t,n,!1)}function oe(e,t,n,r){let i=be((typeof t==`string`?T(t):t).pathname||`/`,n);if(i==null)return null;let a=D(e);se(a);let o=null,s=ye(i);for(let e=0;o==null&&e<a.length;++e)o=ge(a[e],s,r);return o}function D(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(C(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=Ae([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(C(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),D(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:me(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of O(e.path))i(e,t,n)}),t}function O(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=O(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function se(e){e.sort((e,t)=>e.score===t.score?he(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ce=/^:[\w-]+$/,le=3,k=2,ue=1,de=10,fe=-2,pe=e=>e===`*`;function me(e,t){let n=e.split(`/`),r=n.length;return n.some(pe)&&(r+=fe),t&&(r+=k),n.filter(e=>!pe(e)).reduce((e,t)=>e+(ce.test(t)?le:t===``?ue:de),r)}function he(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ge(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=_e({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=_e({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ae([a,u.pathname]),pathnameBase:je(Ae([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ae([a,u.pathnameBase]))}return o}function _e(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ve(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return i&&!c?e[r]=void 0:e[r]=(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function ve(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),w(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ye(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return w(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function be(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var xe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=e=>xe.test(e);function Ce(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?T(e):e,a;if(n)if(Se(n))a=n;else{if(n.includes(`//`)){let e=n;n=ke(n),w(!1,`Pathnames cannot have embedded double slashes - normalizing `+(e+` -> `+n))}a=n.startsWith(`/`)?we(n.substring(1),`/`):we(n,t)}else a=t;return{pathname:a,search:Me(r),hash:Ne(i)}}function we(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Te(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function Ee(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function De(e,t){let n=Ee(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function Oe(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=T(e):(i=y({},e),C(!i.pathname||!i.pathname.includes(`?`),Te(`?`,`pathname`,`search`,i)),C(!i.pathname||!i.pathname.includes(`#`),Te(`#`,`pathname`,`hash`,i)),C(!i.search||!i.search.includes(`#`),Te(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ce(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ke=e=>e.replace(/\/\/+/g,`/`),Ae=e=>ke(e.join(`/`)),je=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Me=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ne=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function Pe(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var Fe=[`post`,`put`,`patch`,`delete`];new Set(Fe);var Ie=[`get`,...Fe];new Set(Ie);function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(null,arguments)}var Re=g.createContext(null),ze=g.createContext(null),Be=g.createContext(null),Ve=g.createContext(null),He=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Ue=g.createContext(null);function We(){return g.useContext(Ve)!=null}function Ge(){return!We()&&C(!1),g.useContext(Ve).location}function Ke(e){g.useContext(Be).static||g.useLayoutEffect(e)}function qe(){let{isDataRoute:e}=g.useContext(He);return e?ut():Je()}function Je(){!We()&&C(!1);let e=g.useContext(Re),{basename:t,future:n,navigator:r}=g.useContext(Be),{matches:i}=g.useContext(He),{pathname:a}=Ge(),o=JSON.stringify(De(i,n.v7_relativeSplatPath)),s=g.useRef(!1);return Ke(()=>{s.current=!0}),g.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=Oe(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ae([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}function Ye(){let{matches:e}=g.useContext(He),t=e[e.length-1];return t?t.params:{}}function Xe(e,t){return Ze(e,t)}function Ze(e,t,n,r){!We()&&C(!1);let{navigator:i}=g.useContext(Be),{matches:a}=g.useContext(He),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=Ge(),u;if(t){let e=typeof t==`string`?T(t):t;!(c===`/`||e.pathname?.startsWith(c))&&C(!1),u=e}else u=l;let d=u.pathname||`/`,f=d;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);f=`/`+d.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let p=E(e,{pathname:f}),m=nt(p&&p.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:Ae([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ae([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&m?g.createElement(Ve.Provider,{value:{location:Le({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:b.Pop}},m):m}function Qe(){let e=lt(),t=Pe(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return g.createElement(g.Fragment,null,g.createElement(`h2`,null,`Unexpected Application Error!`),g.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?g.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var $e=g.createElement(Qe,null),et=class extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:g.createElement(He.Provider,{value:this.props.routeContext},g.createElement(Ue.Provider,{value:this.state.error,children:this.props.component}))}};function tt(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(Re);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(He.Provider,{value:t},r)}function nt(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&C(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||$e,s&&(c<0&&i===0?(ft(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?g.createElement(r.route.Component,null):r.route.element?r.route.element:e,g.createElement(tt,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?g.createElement(et,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var rt=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(rt||{}),it=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(it||{});function at(e){let t=g.useContext(Re);return!t&&C(!1),t}function ot(e){let t=g.useContext(ze);return!t&&C(!1),t}function st(e){let t=g.useContext(He);return!t&&C(!1),t}function ct(e){let t=st(e),n=t.matches[t.matches.length-1];return!n.route.id&&C(!1),n.route.id}function lt(){let e=g.useContext(Ue),t=ot(it.UseRouteError),n=ct(it.UseRouteError);return e===void 0?t.errors?.[n]:e}function ut(){let{router:e}=at(rt.UseNavigateStable),t=ct(it.UseNavigateStable),n=g.useRef(!1);return Ke(()=>{n.current=!0}),g.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,Le({fromRouteId:t},i)))},[e,t])}var dt={};function ft(e,t,n){!t&&!dt[e]&&(dt[e]=!0)}var pt=(e,t,n)=>(``+t+("You can use the `"+e+"` future flag to opt-in early. ")+(`For more information, see `+n+`.`),void 0);function mt(e,t){e?.v7_startTransition===void 0&&pt(`v7_startTransition`,"React Router will begin wrapping state updates in `React.startTransition` in v7",`https://reactrouter.com/v6/upgrading/future#v7_starttransition`),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&pt(`v7_relativeSplatPath`,`Relative route resolution within Splat routes is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`),t&&(t.v7_fetcherPersist===void 0&&pt(`v7_fetcherPersist`,`The persistence behavior of fetchers is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`),t.v7_normalizeFormMethod===void 0&&pt(`v7_normalizeFormMethod`,"Casing of `formMethod` fields is being normalized to uppercase in v7",`https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`),t.v7_partialHydration===void 0&&pt(`v7_partialHydration`,"`RouterProvider` hydration behavior is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_partialhydration`),t.v7_skipActionErrorRevalidation===void 0&&pt(`v7_skipActionErrorRevalidation`,"The revalidation behavior after 4xx/5xx `action` responses is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))}function ht(e){let{to:t,replace:n,state:r,relative:i}=e;!We()&&C(!1);let{future:a,static:o}=g.useContext(Be),{matches:s}=g.useContext(He),{pathname:c}=Ge(),l=qe(),u=Oe(t,De(s,a.v7_relativeSplatPath),c,i===`path`),d=JSON.stringify(u);return g.useEffect(()=>l(JSON.parse(d),{replace:n,state:r,relative:i}),[l,d,i,n,r]),null}function gt(e){C(!1)}function _t(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=b.Pop,navigator:a,static:o=!1,future:s}=e;We()&&C(!1);let c=t.replace(/^\/*/,`/`),l=g.useMemo(()=>({basename:c,navigator:a,static:o,future:Le({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=T(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=g.useMemo(()=>{let e=be(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:g.createElement(Be.Provider,{value:l},g.createElement(Ve.Provider,{children:n,value:h}))}function vt(e){let{children:t,location:n}=e;return Xe(bt(t),n)}var yt=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(yt||{});new Promise(()=>{}),g.Component;function bt(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(e,r)=>{if(!g.isValidElement(e))return;let i=[...t,r];if(e.type===g.Fragment){n.push.apply(n,bt(e.props.children,i));return}e.type!==gt&&C(!1),!(!e.props.index||!e.props.children)&&C(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=bt(e.props.children,i)),n.push(a)}),n}var xt=`6`;try{window.__reactRouterVersion=xt}catch{}var St=g.startTransition;function Ct(e){let{basename:t,children:n,future:r,window:i}=e,a=g.useRef();a.current??=S({window:i,v5Compat:!0});let o=a.current,[s,c]=g.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=g.useCallback(e=>{l&&St?St(()=>c(e)):c(e)},[c,l]);return g.useLayoutEffect(()=>o.listen(u),[o,u]),g.useEffect(()=>mt(r),[r]),g.createElement(_t,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}typeof window<`u`&&window.document!==void 0&&window.document.createElement;var wt;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(wt||={});var Tt;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(Tt||={});var Et=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),Dt=o(((e,t)=>{t.exports=Et()})),A=`-ms-`,Ot=`-moz-`,j=`-webkit-`,kt=`comm`,At=`rule`,jt=`decl`,Mt=`@import`,Nt=`@namespace`,Pt=`@keyframes`,Ft=`@layer`,It=Math.abs,Lt=String.fromCharCode,Rt=Object.assign;function zt(e,t){return Ut(e,0)^45?(((t<<2^Ut(e,0))<<2^Ut(e,1))<<2^Ut(e,2))<<2^Ut(e,3):0}function Bt(e){return e.trim()}function Vt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Ht(e,t,n){return e.indexOf(t,n)}function Ut(e,t){return e.charCodeAt(t)|0}function Wt(e,t,n){return e.slice(t,n)}function Gt(e){return e.length}function Kt(e){return e.length}function qt(e,t){return t.push(e),e}function Jt(e,t){return e.map(t).join(``)}function N(e,t){return e.filter(function(e){return!Vt(e,t)})}var Yt=1,Xt=1,Zt=0,Qt=0,$t=0,en=``;function tn(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Yt,column:Xt,length:o,return:``,siblings:s}}function nn(e,t){return Rt(tn(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function rn(e){for(;e.root;)e=nn(e.root,{children:[e]});qt(e,e.siblings)}function an(){return $t}function on(){return $t=Qt>0?Ut(en,--Qt):0,Xt--,$t===10&&(Xt=1,Yt--),$t}function sn(){return $t=Qt<Zt?Ut(en,Qt++):0,Xt++,$t===10&&(Xt=1,Yt++),$t}function cn(){return Ut(en,Qt)}function ln(){return Qt}function un(e,t){return Wt(en,e,t)}function dn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fn(e){return Yt=Xt=1,Zt=Gt(en=e),Qt=0,[]}function pn(e){return en=``,e}function mn(e){return Bt(un(Qt-1,_n(e===91?e+2:e===40?e+1:e)))}function hn(e){for(;($t=cn())&&$t<33;)sn();return dn(e)>2||dn($t)>3?``:` `}function gn(e,t){for(;--t&&sn()&&!($t<48||$t>102||$t>57&&$t<65||$t>70&&$t<97););return un(e,ln()+(t<6&&cn()==32&&sn()==32))}function _n(e){for(;sn();)switch($t){case e:return Qt;case 34:case 39:e!==34&&e!==39&&_n($t);break;case 40:e===41&&_n(e);break;case 92:sn();break}return Qt}function vn(e,t){for(;sn()&&e+$t!==57&&!(e+$t===84&&cn()===47););return`/*`+un(t,Qt-1)+`*`+Lt(e===47?e:sn())}function yn(e){for(;!dn(cn());)sn();return un(e,Qt)}function bn(e){return pn(xn(``,null,null,null,[``],e=fn(e),0,[0],e))}function xn(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=sn()){case 40:if(m!=108&&Ut(C,d-1)==58){Ht(C+=M(mn(v),`&`,`&\f`),`&\f`,It(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=mn(v);break;case 9:case 10:case 13:case 32:C+=hn(m);break;case 92:C+=gn(ln()-1,7);continue;case 47:switch(cn()){case 42:case 47:qt(Cn(vn(sn(),ln()),t,n,c),c),(dn(m||1)==5||dn(cn()||1)==5)&&Gt(C)&&Wt(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=Gt(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=M(C,/\f/g,``)),p>0&&(Gt(C)-d||h===0&&m===47)&&qt(p>32?wn(C+`;`,r,n,d-1,c):wn(M(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(qt(S=Sn(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)xn(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(Ut(C,3)===110)break;case 108:if(Ut(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?xn(e,S,S,r&&qt(Sn(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):xn(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Gt(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&on()==125)continue}switch(C+=Lt(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Gt(C)-1)*_,_=1;break;case 64:cn()===45&&(C+=mn(sn())),f=cn(),u=d=Gt(y=C+=yn(ln())),v++;break;case 45:m===45&&Gt(C)==2&&(h=0)}}return a}function Sn(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Kt(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Wt(e,f+1,f=It(g=o[h])),b=e;v<m;++v)(b=Bt(g>0?p[v]+` `+y:M(y,/&\f/g,p[v])))&&(c[_++]=b);return tn(e,t,n,i===0?At:s,c,l,u,d)}function Cn(e,t,n,r){return tn(e,t,n,kt,Lt(an()),Wt(e,2,-2),0,r)}function wn(e,t,n,r,i){return tn(e,t,n,jt,Wt(e,0,r),Wt(e,r+1,-1),r,i)}function Tn(e,t,n){switch(zt(e,t)){case 5103:return j+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return j+e+e;case 4855:return j+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Ot+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+Ot+e+A+e+e;case 5936:switch(Ut(e,t+11)){case 114:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return j+e+A+e+e;case 6165:return j+e+A+`flex-`+e+e;case 5187:return j+e+M(e,/(\w+).+(:[^]+)/,j+`box-$1$2`+A+`flex-$1$2`)+e;case 5443:return j+e+A+`flex-item-`+M(e,/flex-|-self/g,``)+(Vt(e,/flex-|baseline/)?``:A+`grid-row-`+M(e,/flex-|-self/g,``))+e;case 4675:return j+e+A+`flex-line-pack`+M(e,/align-content|flex-|-self/g,``)+e;case 5548:return j+e+A+M(e,`shrink`,`negative`)+e;case 5292:return j+e+A+M(e,`basis`,`preferred-size`)+e;case 6060:return j+`box-`+M(e,`-grow`,``)+j+e+A+M(e,`grow`,`positive`)+e;case 4554:return j+M(e,/([^-])(transform)/g,`$1`+j+`$2`)+e;case 6187:return M(M(M(e,/(zoom-|grab)/,j+`$1`),/(image-set)/,j+`$1`),e,``)+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,j+`box-pack:$3`+A+`flex-pack:$3`),/space-between/,`justify`)+j+e+e;case 4200:if(!Vt(e,/flex-|baseline/))return A+`grid-column-align`+Wt(e,t)+e;break;case 2592:case 3360:return A+M(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Vt(e.props,/grid-\w+-end/)})?~Ht(e+(n=n[t].value),`span`,0)?e:A+M(e,`-start`,``)+e+A+`grid-row-span:`+(~Ht(n,`span`,0)?Vt(n,/\d+/):Vt(n,/\d+/)-+Vt(e,/\d+/))+`;`:A+M(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Vt(e.props,/grid-\w+-start/)})?e:A+M(M(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,j+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(e)-1-t>6)switch(Ut(e,t+1)){case 109:if(Ut(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,`$1`+j+`$2-$3$1`+Ot+(Ut(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Ht(e,`stretch`,0)?Tn(M(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return A+n+`:`+r+s+(i?A+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Ut(e,t+6)===121)return M(e,`:`,`:`+j)+e;break;case 6444:switch(Ut(e,Ut(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+j+(Ut(e,14)===45?`inline-`:``)+`box$3$1`+j+`$2$3$1`+A+`$2box$3`)+e;case 100:return M(e,`:`,`:`+A)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,`scroll-`,`scroll-snap-`)+e}return e}function En(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Dn(e,t,n,r){switch(e.type){case Ft:if(e.children.length)break;case Mt:case Nt:case jt:return e.return=e.return||e.value;case kt:return``;case Pt:return e.return=e.value+`{`+En(e.children,r)+`}`;case At:if(!Gt(e.value=e.props.join(`,`)))return``}return Gt(n=En(e.children,r))?e.return=e.value+`{`+n+`}`:``}function On(e){var t=Kt(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function kn(e){return function(t){t.root||(t=t.return)&&e(t)}}function An(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jt:e.return=Tn(e.value,e.length,n);return;case Pt:return En([nn(e,{value:M(e.value,`@`,`@`+j)})],r);case At:if(e.length)return Jt(n=e.props,function(t){switch(Vt(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:rn(nn(e,{props:[M(t,/:(read-\w+)/,`:`+Ot+`$1`)]})),rn(nn(e,{props:[t]})),Rt(e,{props:N(n,r)});break;case`::placeholder`:rn(nn(e,{props:[M(t,/:(plac\w+)/,`:`+j+`input-$1`)]})),rn(nn(e,{props:[M(t,/:(plac\w+)/,`:`+Ot+`$1`)]})),rn(nn(e,{props:[M(t,/:(plac\w+)/,A+`input-$1`)]})),rn(nn(e,{props:[t]})),Rt(e,{props:N(n,r)});break}return``})}}var jn=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Mn=`active`,Nn=`data-styled-version`,Pn=`6.4.3`,Fn=`/*!sc*/
`,In=typeof window<`u`&&typeof document<`u`;function Ln(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Rn=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Ln(`REACT_APP_SC_DISABLE_SPEEDY`)??Ln(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),zn=`sc-keyframes-`,Bn={};function Vn(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Hn=new Map,Un=new Map,Wn=1,Gn=e=>{if(Hn.has(e))return Hn.get(e);for(;Un.has(Wn);)Wn++;let t=Wn++;return Hn.set(e,t),Un.set(t,e),t},Kn=e=>Un.get(e),qn=(e,t)=>{Wn=t+1,Hn.set(e,t),Un.set(t,e)},Jn=Object.freeze([]),Yn=Object.freeze({});function Xn(e,t,n=Yn){return e.theme!==n.theme&&e.theme||t||n.theme}var Zn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qn=/(^-|-$)/g;function $n(e){return e.replace(Zn,`-`).replace(Qn,``)}var er=/(a)(d)/gi,tr=e=>String.fromCharCode(e+(e>25?39:97));function nr(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=tr(t%52)+n;return(tr(t%52)+n).replace(er,`$1-$2`)}var rr=5381,ir=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ar=e=>ir(rr,e);function or(e){return nr(ar(e)>>>0)}function sr(e){return e.displayName||e.name||`Component`}function cr(e){return typeof e==`string`&&!0}function lr(e){return cr(e)?`styled.${e}`:`Styled(${sr(e)})`}var ur=Symbol.for(`react.memo`),dr=Symbol.for(`react.forward_ref`),fr={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},pr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hr={[dr]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ur]:mr};function gr(e){return(`type`in(t=e)&&t.type.$$typeof)===ur?mr:`$$typeof`in e?hr[e.$$typeof]:fr;var t}var _r=Object.defineProperty,vr=Object.getOwnPropertyNames,yr=Object.getOwnPropertySymbols,br=Object.getOwnPropertyDescriptor,xr=Object.getPrototypeOf,Sr=Object.prototype;function Cr(e,t,n){if(typeof t!=`string`){let r=xr(t);r&&r!==Sr&&Cr(e,r,n);let i=vr(t).concat(yr(t)),a=gr(e),o=gr(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in pr||n&&n[s]||o&&s in o||a&&s in a)){let n=br(t,s);try{_r(e,s,n)}catch{}}}}return e}function wr(e){return typeof e==`function`}var Tr=Symbol.for(`react.forward_ref`);function Er(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Tr&&`styledComponentId`in e}function Dr(e,t){return e&&t?e+` `+t:e||t||``}function Or(e,t){return e.join(t||``)}function kr(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Ar(e,t,n=!1){if(!n&&!kr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Ar(e[n],t[n]);else if(kr(t))for(let n in t)e[n]=Ar(e[n],t[n]);return e}function jr(e,t){Object.defineProperty(e,"toString",{value:t})}var Mr=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Vn(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Fn;return t}},Nr=`style[${jn}][${Nn}="${Pn}"]`,Pr=RegExp(`^${jn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Fr=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Ir=e=>{if(!e)return document;if(Fr(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Fr(t))return t}return document},Lr=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Rr=(e,t)=>{let n=(t.textContent??``).split(Fn),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Pr);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(qn(n,t),Lr(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},zr=e=>{let t=Ir(e.options.target).querySelectorAll(Nr);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(jn)!==Mn&&(Rr(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Br=!1;function Vr(){if(!1!==Br)return Br;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Br=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Br=t.getAttribute(`content`)||void 0}return Br=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Hr=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${jn}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(jn,Mn),i.setAttribute(Nn,Pn);let s=t||Vr();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Ur=class{constructor(e,t){this.element=Hr(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Vn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Wr=class{constructor(e,t){this.element=Hr(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Gr=In,Kr={isServer:!In,useCSSOMInjection:!Rn},qr=class e{static registerId(e){return Gn(e)}constructor(e=Yn,t={},n){this.options=Object.assign(Object.assign({},Kr),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&In&&Gr&&(Gr=!1,zr(this)),jr(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Kn(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=jn+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&In&&zr(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&In&&t.target!==this.options.target&&Ir(this.options.target)!==Ir(t.target)&&zr(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Ur(t,n):new Wr(t,n))(this.options),new Mr(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Gn(e),e.startsWith(zn)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Gn(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Gn(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Jr=new WeakSet,Yr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xr(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Yr||e.startsWith(`--`)?String(t).trim():t+`px`}var Zr=47;function Qr(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var $r=Symbol.for(`sc-keyframes`);function ei(e){return typeof e==`object`&&!!e&&$r in e}function ti(e){return wr(e)&&!(e.prototype&&e.prototype.isReactComponent)}var ni=e=>e==null||!1===e||e===``,ri=Symbol.for(`react.client.reference`);function ii(e){return e.$$typeof===ri}function ai(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!ni(r)&&(Array.isArray(r)&&Jr.has(r)||wr(r)?t.push(Qr(n)+`:`,r,`;`):kr(r)?(t.push(n+` {`),ai(r,t),t.push(`}`)):t.push(Qr(n)+`: `+Xr(n,r)+`;`))}}function oi(e,t,n,r,i=[]){if(ni(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return ii(e)?i:ti(e)&&t?oi(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)oi(e[a],t,n,r,i);return i}return Er(e)?(i.push(`.${e.styledComponentId}`),i):ei(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):ii(e)?i:kr(e)&&e.toString===Object.prototype.toString?(ai(e,i),i):(i.push(e.toString()),i)}var si=ar(Pn),ci=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=ir(si,t),this.baseStyle=n,qr.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(ti(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Or(oi(r,e,t,n)))}else i+=Or(oi(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=nr(ir(ir(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Dr(r,a)}}return r}},li=/&/g;function ui(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function di(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==Zr||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===Zr&&(o=!1,c++);else if(l!==34&&l!==39||ui(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function fi(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&fi(a.children,t)}return e}function pi({options:e=Yn,plugins:t=Jn}=Yn){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(li,r).replace(i,a))}),e.prefix&&o.push(An),o.push(Dn);let s=[],c=On(o.concat(kn(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return di(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||ui(e,o))if(s===0)if(t===Zr&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==Zr);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===Zr)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Zr&&o+1<r&&e.charCodeAt(o+1)===Zr){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:di(i)):l===0?e:di(e)}(t),d=bn(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=fi(d,e.namespace)),s=[],En(d,c),s},u=e,d=rr;for(let e=0;e<t.length;e++)t[e].name||Vn(15),d=ir(d,t[e].name);return u!=null&&u.namespace&&(d=ir(d,u.namespace)),u!=null&&u.prefix&&(d=ir(d,`p`)),l.hash=d===rr?``:d.toString(),l}var mi=new qr,P=pi(),hi=g.createContext({shouldForwardProp:void 0,styleSheet:mi,stylis:P,stylisPlugins:void 0});hi.Consumer;function gi(){return g.useContext(hi)}var _i=g.createContext(void 0);_i.Consumer;function vi(e){let t=g.useContext(_i),n=g.useMemo(()=>function(e,t){if(!e)throw Vn(14);if(wr(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Vn(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?g.createElement(_i.Provider,{value:n},e.children):null}var yi=Object.prototype.hasOwnProperty,bi={};function xi(e,t){let n=typeof e==`string`?$n(e):`sc`;bi[n]=(bi[n]||0)+1;let r=n+`-`+or(Pn+n+bi[n]);return t?t+`-`+r:r}function Si(e,t,n){let r=Er(e),i=e,a=!cr(e),{attrs:o=Jn,componentId:s=xi(t.displayName,t.parentComponentId),displayName:c=lr(e)}=t,l=t.displayName&&t.componentId?$n(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new ci(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=g.useContext(_i),u=gi(),d=e.shouldForwardProp||u.shouldForwardProp,f=Xn(t,l,a)||Yn,p,m;{let e=g.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(yi.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=wr(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Dr(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Dr(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)yi.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,_=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),v=Dr(o,s);return m&&(v+=` `+m),p.className&&(v+=` `+p.className),_[cr(h)&&h.includes(`-`)?`class`:`className`]=v,n&&(_.ref=n),(0,g.createElement)(h,_)}(m,e,t)}p.displayName=c;let m=g.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Dr(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Ar(e,n,!0);return e}({},i.defaultProps,e):e}}),jr(m,()=>`.${m.styledComponentId}`),a&&Cr(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Ci=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function wi(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ti=e=>(Jr.add(e),e);function F(e,...t){if(wr(e)||kr(e))return Ti(oi(wi(Jn,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?oi(n):Ti(oi(wi(n,t)))}function Ei(e,t,n=Yn){if(!t)throw Vn(1,t);let r=(r,...i)=>e(t,n,F(r,...i));return r.attrs=r=>Ei(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Ei(e,t,Object.assign(Object.assign({},n),r)),r}var Di=e=>Ei(Si,e),I=Di;Ci.forEach(e=>{I[e]=Di(e)});var Oi=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(wr(n)&&!Er(n))return!1}return!0}(e),qr.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Or(oi(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function ki(e,...t){let n=F(e,...t),r=`sc-global-${or(JSON.stringify(n))}`,i=new Oi(n,r),a=e=>{let t=gi(),n=g.useContext(_i),a;{let e=g.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=g.useRef(i);g.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),g.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Bn,n,o);else{let s=Object.assign(Object.assign({},t),{theme:Xn(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return g.memo(a)}var Ai,ji=class{constructor(e,t){this[Ai]=!0,this.inject=(e,t=P)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=zn+e,this.rules=t,Gn(this.id),jr(this,()=>{throw Vn(12,String(this.name))})}getName(e=P){return e.hash?this.name+nr(e.hash>>>0):this.name}};function Mi(e,...t){let n=Or(F(e,...t));return new ji(or(n),n)}Ai=$r,`${jn}`,`${jn}`,`${jn}`;var Ni=o(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),Pi=o(((e,t)=>{var n=Ni();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),Fi=o(((e,t)=>{t.exports=Pi()()})),Ii={black:`#000`,white:`#fff`,product:{support:`#00a656`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f8f9f9`,200:`#e8eaec`,300:`#d8dcde`,400:`#b0b8be`,500:`#919ca5`,600:`#848f99`,700:`#5c6970`,800:`#39434b`,900:`#293239`,1e3:`#1c2227`,1100:`#151a1e`,1200:`#0a0d0e`},blue:{100:`#edf7ff`,200:`#ddecf8`,300:`#cce0f1`,400:`#93bcdc`,500:`#66a0cd`,600:`#2694d6`,700:`#1f73b7`,800:`#13456d`,900:`#0f3655`,1e3:`#0a2338`,1100:`#061420`,1200:`#040d15`},red:{100:`#fff2f3`,200:`#fee3e5`,300:`#f5d5d8`,400:`#f2a1a8`,500:`#ea7881`,600:`#eb5c69`,700:`#cd3642`,800:`#7e1d25`,900:`#671219`,1e3:`#3d1418`,1100:`#1d1011`,1200:`#100b0c`},yellow:{100:`#fff3e4`,200:`#ffe6cb`,300:`#fed6a9`,400:`#fca347`,500:`#e38215`,600:`#d67305`,700:`#ac5918`,800:`#673515`,900:`#4c2c17`,1e3:`#2d1e15`,1100:`#18120f`,1200:`#0e0c0b`},green:{100:`#eef8f4`,200:`#daeee6`,300:`#cae3d9`,400:`#94c1b0`,500:`#4eab89`,600:`#26a178`,700:`#037f52`,800:`#104b35`,900:`#0b3b29`,1e3:`#0c261c`,1100:`#0a1511`,1200:`#080d0c`},kale:{100:`#ecf9f9`,200:`#daeded`,300:`#cbe2e1`,400:`#97bfbf`,500:`#6ba4a5`,600:`#4a9999`,700:`#40787a`,800:`#16494f`,900:`#063940`,1e3:`#03252a`,1100:`#061517`,1200:`#060e0e`},fuschia:{100:`#fbf3f8`,200:`#f7e6f1`,300:`#f2d5e7`,400:`#e3a4cc`,500:`#d77db7`,600:`#d16aac`,700:`#b34496`,800:`#78116c`,900:`#5a0d51`,1e3:`#3f0939`,1100:`#31072c`,1200:`#1b0418`},pink:{100:`#fcf3f4`,200:`#f7e5e8`,300:`#f3d6dc`,400:`#e5a6b4`,500:`#d98193`,600:`#d96b81`,700:`#d62054`,800:`#75263d`,900:`#561d2e`,1e3:`#3c141f`,1100:`#2e0f18`,1200:`#17080c`},crimson:{100:`#fbf3f2`,200:`#f7e7e4`,300:`#f1d7d2`,400:`#e2aaa0`,500:`#d58678`,600:`#cf7464`,700:`#be4938`,800:`#811b12`,900:`#61140d`,1e3:`#440e09`,1100:`#340b07`,1200:`#1c0604`},orange:{100:`#fdf3ed`,200:`#fae7d8`,300:`#f7d7be`,400:`#eda875`,500:`#e58035`,600:`#d57428`,700:`#af5626`,800:`#693317`,900:`#4d2711`,1e3:`#361a0c`,1100:`#291409`,1200:`#150a04`},lemon:{100:`#fff7d4`,200:`#ffea97`,300:`#ffdc4f`,400:`#efab00`,500:`#c79100`,600:`#b68500`,700:`#8f6900`,800:`#563e00`,900:`#3f2e00`,1e3:`#2b2000`,1100:`#221800`,1200:`#110c00`},lime:{100:`#ecfae7`,200:`#d1f3c7`,300:`#b3eda3`,400:`#4fd12b`,500:`#45b025`,600:`#509f2d`,700:`#3d7e19`,800:`#2c491b`,900:`#203614`,1e3:`#16250e`,1100:`#111d0a`,1200:`#090e05`},mint:{100:`#d6ffeb`,200:`#9affce`,300:`#0afe89`,400:`#00d26d`,500:`#01b15c`,600:`#16a260`,700:`#2d7e55`,800:`#1b4b33`,900:`#143726`,1e3:`#0e261a`,1100:`#0b1d14`,1200:`#050e0a`},teal:{100:`#d4fefa`,200:`#88fdf1`,300:`#0bf8e1`,400:`#03cdb8`,500:`#02ad9c`,600:`#2a9d8f`,700:`#367a74`,800:`#254846`,900:`#1b3534`,1e3:`#122423`,1100:`#0e1c1a`,1200:`#070d0d`},azure:{100:`#eff7fe`,200:`#d9ecfc`,300:`#c4e0fa`,400:`#82bcf4`,500:`#4b9fee`,600:`#3191ea`,700:`#2770c3`,800:`#23446b`,900:`#1a3250`,1e3:`#122238`,1100:`#0e1a2a`,1200:`#070d14`},royal:{100:`#f4f5fc`,200:`#e7e9f8`,300:`#d8dcf4`,400:`#acb4e7`,500:`#8a96dd`,600:`#7a88d9`,700:`#4c67d3`,800:`#1833ab`,900:`#122680`,1e3:`#0d1a5a`,1100:`#0a1445`,1200:`#050a25`},purple:{100:`#f9f3fb`,200:`#f2e7f6`,300:`#e9d8f1`,400:`#d0a9e0`,500:`#bb86d3`,600:`#b276cd`,700:`#9256b1`,800:`#58209a`,900:`#411973`,1e3:`#2e1150`,1100:`#230d3f`,1200:`#120720`}},Li=4,Ri={sm:`${Li/2}px`,md:`${Li}px`,lg:`${Li*2}px`},zi={solid:`solid`},Bi={sm:`1px`,md:`3px`},Vi={sm:`${Bi.sm} ${zi.solid}`,md:`${Bi.md} ${zi.solid}`},Hi={xs:`0px`,sm:`${Li*144}px`,md:`${Li*192}px`,lg:`${Li*248}px`,xl:`${Li*300}px`},Ui={primaryHue:`blue`,dangerHue:`red`,warningHue:`yellow`,successHue:`green`,neutralHue:`grey`,chromeHue:`kale`,variables:{dark:{background:{default:`neutralHue.1100`,raised:`neutralHue.1000`,recessed:`neutralHue.1200`,subtle:`neutralHue.1000`,emphasis:`neutralHue.600`,success:`successHue.1000`,warning:`warningHue.1000`,danger:`dangerHue.1000`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`rgba(white, 100)`},border:{default:`neutralHue.800`,emphasis:`neutralHue.600`,subtle:`neutralHue.900`,success:`successHue.900`,warning:`warningHue.900`,danger:`dangerHue.900`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`neutralHue.800`},foreground:{default:`neutralHue.300`,subtle:`neutralHue.500`,onEmphasis:`neutralHue.1100`,primary:`primaryHue.600`,success:`successHue.400`,warning:`warningHue.400`,danger:`dangerHue.400`,successEmphasis:`successHue.300`,warningEmphasis:`warningHue.300`,dangerEmphasis:`dangerHue.300`,disabled:`neutralHue.700`},shadow:{small:`rgba(neutralHue.1200, 1100)`,medium:`rgba(neutralHue.1200, 800)`,large:`rgba(neutralHue.1200, 1000)`}},light:{background:{default:`palette.white`,raised:`palette.white`,recessed:`neutralHue.100`,subtle:`neutralHue.100`,emphasis:`neutralHue.700`,success:`successHue.100`,warning:`warningHue.100`,danger:`dangerHue.100`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`rgba(neutralHue.700, 100)`},border:{default:`neutralHue.300`,emphasis:`neutralHue.600`,subtle:`neutralHue.200`,success:`successHue.300`,warning:`warningHue.300`,danger:`dangerHue.300`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`neutralHue.300`},foreground:{default:`neutralHue.900`,subtle:`neutralHue.700`,onEmphasis:`palette.white`,primary:`primaryHue.700`,success:`successHue.700`,warning:`warningHue.700`,danger:`dangerHue.700`,successEmphasis:`successHue.900`,warningEmphasis:`warningHue.900`,dangerEmphasis:`dangerHue.900`,disabled:`neutralHue.600`},shadow:{small:`rgba(neutralHue.1200, 200)`,medium:`rgba(neutralHue.1200, 200)`,large:`rgba(neutralHue.1200, 200)`}}}},Wi={mono:[`SFMono-Regular`,`Consolas`,`"Liberation Mono"`,`Menlo`,`Courier`,`monospace`].join(`,`),system:[`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`Oxygen-Sans`,`Ubuntu`,`Cantarell`,`"Helvetica Neue"`,`Arial`,`sans-serif`].join(`,`)},Gi={xs:`10px`,sm:`12px`,md:`14px`,lg:`18px`,xl:`22px`,xxl:`26px`,xxxl:`36px`},Ki={thin:100,extralight:200,light:300,regular:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},qi={sm:`12px`,md:`16px`,lg:`26px`},Ji={sm:`${Li*4}px`,md:`${Li*5}px`,lg:`${Li*6}px`,xl:`${Li*7}px`,xxl:`${Li*8}px`,xxxl:`${Li*11}px`},Yi={100:.08,200:.16,300:.24,400:.32,500:.4,600:.48,700:.56,800:.64,900:.72,1e3:.8,1100:.88,1200:.96},Xi={...Ii};delete Xi.product;var Zi={xs:`1px`,sm:`2px`,md:`3px`},L={xs:e=>`0 0 0 ${Zi.xs} ${e}`,sm:e=>`0 0 0 ${Zi.sm} ${e}`,md:e=>`0 0 0 ${Zi.md} ${e}`,lg:(e,t,n)=>`0 ${e} ${t} 0 ${n}`},R={base:Li,xxs:`${Li}px`,xs:`${Li*2}px`,sm:`${Li*3}px`,md:`${Li*5}px`,lg:`${Li*8}px`,xl:`${Li*10}px`,xxl:`${Li*12}px`},Qi={borders:Vi,borderRadii:Ri,borderStyles:zi,borderWidths:Bi,breakpoints:Hi,colors:{base:`light`,...Ui},components:{},fonts:Wi,fontSizes:Gi,fontWeights:Ki,iconSizes:qi,lineHeights:Ji,opacity:Yi,palette:Xi,rtl:!1,shadowWidths:Zi,shadows:L,space:R},z=e=>{let t,n=e.theme.components,r=e.componentId||e[`data-garden-id`];return n&&r&&(t=n[r],typeof t==`function`&&(t=t(e))),t};function $i(e,t,n){return Math.min(Math.max(e,n),t)}var ea=class extends Error{constructor(e){super(`Failed to parse color: "${e}"`)}};function ta(e){if(typeof e!=`string`)throw new ea(e);if(e.trim().toLowerCase()===`transparent`)return[0,0,0,0];let t=e.trim();t=da.test(e)?aa(e):e;let n=sa.exec(t);if(n){let e=Array.from(n).slice(1);return[...e.slice(0,3).map(e=>parseInt(oa(e,2),16)),parseInt(oa(e[3]||`f`,2),16)/255]}let r=ca.exec(t);if(r){let e=Array.from(r).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,16)),parseInt(e[3]||`ff`,16)/255]}let i=la.exec(t);if(i){let e=Array.from(i).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,10)),parseFloat(e[3]||`1`)]}let a=ua.exec(t);if(a){let[t,n,r,i]=Array.from(a).slice(1).map(parseFloat);if($i(0,100,n)!==n||$i(0,100,r)!==r)throw new ea(e);return[...pa(t,n,r),Number.isNaN(i)?1:i]}throw new ea(e)}function na(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}var ra=e=>parseInt(e.replace(/_/g,``),36),ia=`1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm`.split(` `).reduce((e,t)=>{let n=ra(t.substring(0,3)),r=ra(t.substring(3)).toString(16),i=``;for(let e=0;e<6-r.length;e++)i+=`0`;return e[n]=`${i}${r}`,e},{});function aa(e){let t=ia[na(e.toLowerCase().trim())];if(!t)throw new ea(e);return`#${t}`}var oa=(e,t)=>Array.from(Array(t)).map(()=>e).join(``),sa=RegExp(`^#${oa(`([a-f0-9])`,3)}([a-f0-9])?$`,`i`),ca=RegExp(`^#${oa(`([a-f0-9]{2})`,3)}([a-f0-9]{2})?$`,`i`),la=RegExp(`^rgba?\\(\\s*(\\d+)\\s*${oa(`,\\s*(\\d+)\\s*`,2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,`i`),ua=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,da=/^[a-z]+$/i,fa=e=>Math.round(e*255),pa=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(fa);let i=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);let u=r-a/2;return[s+u,c+u,l+u].map(fa)};function ma(e,t,n,r){return`rgba(${$i(0,255,e).toFixed()}, ${$i(0,255,t).toFixed()}, ${$i(0,255,n).toFixed()}, ${parseFloat($i(0,1,r).toFixed(3))})`}function ha(e,t,n){let r=(e,t)=>t===3?e:e/255,[i,a,o,s]=ta(e).map(r),[c,l,u,d]=ta(t).map(r),f=d-s,p=n*2-1,m=((p*f===-1?p:p+f/(1+p*f))+1)/2,h=1-m;return ma((i*h+c*m)*255,(a*h+l*m)*255,(o*h+u*m)*255,d*n+s*(1-n))}function ga(...e){return t=>{let n=e.length-1,r=$i(0,n,Math.floor(t*n)),i=$i(0,n,Math.ceil(t*n)),a=e[r],o=e[i],s=1/n;return ha(a,o,(t-s*r)/s)}}function _a(e){let[t,n,r,i]=ta(e),a=e=>{let t=$i(0,255,e).toString(16);return t.length===1?`0${t}`:t};return`#${a(t)}${a(n)}${a(r)}${i<1?a(Math.round(i*255)):``}`}function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(null,arguments)}function va(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function ya(e,t){return ya=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ya(e,t)}function ba(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ya(e,t)}function xa(e){return xa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},xa(e)}function Sa(e){try{return Function.toString.call(e).indexOf(`[native code]`)!==-1}catch{return typeof e==`function`}}function Ca(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ca=function(){return!!e})()}function wa(e,t,n){if(Ca())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&ya(i,n.prototype),i}function Ta(e){var t=typeof Map==`function`?new Map:void 0;return Ta=function(e){if(e===null||!Sa(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return wa(e,arguments,xa(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ya(n,e)},Ta(e)}function Ea(){var e;return e=arguments.length-1,e<0||arguments.length<=e?void 0:arguments[e]}function Da(e){return-e}function Oa(e,t){return e+t}function ka(e,t){return e-t}function Aa(e,t){return e*t}function ja(e,t){return e/t}function Ma(){return Math.max.apply(Math,arguments)}function Na(){return Math.min.apply(Math,arguments)}function Pa(){return Array.of.apply(Array,arguments)}var Fa={symbols:{"*":{infix:{symbol:`*`,f:Aa,notation:`infix`,precedence:4,rightToLeft:0,argCount:2},symbol:`*`,regSymbol:`\\*`},"/":{infix:{symbol:`/`,f:ja,notation:`infix`,precedence:4,rightToLeft:0,argCount:2},symbol:`/`,regSymbol:`/`},"+":{infix:{symbol:`+`,f:Oa,notation:`infix`,precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:`+`,f:Ea,notation:`prefix`,precedence:3,rightToLeft:0,argCount:1},symbol:`+`,regSymbol:`\\+`},"-":{infix:{symbol:`-`,f:ka,notation:`infix`,precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:`-`,f:Da,notation:`prefix`,precedence:3,rightToLeft:0,argCount:1},symbol:`-`,regSymbol:`-`},",":{infix:{symbol:`,`,f:Pa,notation:`infix`,precedence:1,rightToLeft:0,argCount:2},symbol:`,`,regSymbol:`,`},"(":{prefix:{symbol:`(`,f:Ea,notation:`prefix`,precedence:0,rightToLeft:0,argCount:1},symbol:`(`,regSymbol:`\\(`},")":{postfix:{symbol:`)`,f:void 0,notation:`postfix`,precedence:0,rightToLeft:0,argCount:1},symbol:`)`,regSymbol:`\\)`},min:{func:{symbol:`min`,f:Na,notation:`func`,precedence:0,rightToLeft:0,argCount:1},symbol:`min`,regSymbol:`min\\b`},max:{func:{symbol:`max`,f:Ma,notation:`func`,precedence:0,rightToLeft:0,argCount:1},symbol:`max`,regSymbol:`max\\b`}}},Ia=function(e){ba(t,e);function t(t){return va(e.call(this,`An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#`+t+` for more information.`)||this)}return t}(Ta(Error)),La=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function Ra(e){var t={};return t.symbols=e?B({},Fa.symbols,e.symbols):B({},Fa.symbols),t}function za(e,t){var n,r=e.pop();return t.push(r.f.apply(r,(n=[]).concat.apply(n,t.splice(-r.argCount)))),r.precedence}function Ba(e,t){var n=Ra(t),r,i=[n.symbols[`(`].prefix],a=[],o=RegExp(`\\d+(?:\\.\\d+)?|`+Object.keys(n.symbols).map(function(e){return n.symbols[e]}).sort(function(e,t){return t.symbol.length-e.symbol.length}).map(function(e){return e.regSymbol}).join(`|`)+`|(\\S)`,`g`);o.lastIndex=0;var s=!1;do{r=o.exec(e);var c=r||[`)`,void 0],l=c[0],u=c[1],d=n.symbols[l],f=d&&!d.prefix&&!d.func,p=!d||!d.postfix&&!d.infix;if(u||(s?p:f))throw new Ia(37,r?r.index:e.length,e);if(s){var m=d.postfix||d.infix;do{var h=i[i.length-1];if((m.precedence-h.precedence||h.rightToLeft)>0)break}while(za(i,a));s=m.notation===`postfix`,m.symbol!==`)`&&(i.push(m),s&&za(i,a))}else if(d){if(i.push(d.prefix||d.func),d.func&&(r=o.exec(e),!r||r[0]!==`(`))throw new Ia(38,r?r.index:e.length,e)}else a.push(+l),s=!0}while(r&&i.length);if(i.length)throw new Ia(39,r?r.index:e.length,e);if(r)throw new Ia(40,r?r.index:e.length,e);return a.pop()}function Va(e){return e.split(``).reverse().join(``)}function V(e,t){var n=Va(e),r=n.match(La);if(r&&!r.every(function(e){return e===r[0]}))throw new Ia(41);return``+Ba(Va(n.replace(La,``)),t)+(r?Va(r[0]):``)}function Ha(e,t){return e.substr(-t.length)===t}var Ua=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function Wa(e){return typeof e==`string`&&e.match(Ua)?parseFloat(e):e}var Ga=function(e){return function(t,n){n===void 0&&(n=`16px`);var r=t,i=n;if(typeof t==`string`){if(!Ha(t,`px`))throw new Ia(69,e,t);r=Wa(t)}if(typeof n==`string`){if(!Ha(n,`px`))throw new Ia(70,e,n);i=Wa(n)}if(typeof r==`string`)throw new Ia(71,t,e);if(typeof i==`string`)throw new Ia(72,n,e);return``+r/i+e}}(`em`),Ka=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function qa(e){if(typeof e!=`string`)return[e,``];var t=e.match(Ka);return t?[parseFloat(e),t[2]]:[e,void 0]}function Ja(){return{border:`0`,clip:`rect(0 0 0 0)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:`0`,position:`absolute`,whiteSpace:`nowrap`,width:`1px`}}function Ya(e){return Math.round(e*255)}function Xa(e,t,n){return Ya(e)+`,`+Ya(t)+`,`+Ya(n)}function Za(e,t,n,r){if(r===void 0&&(r=Xa),t===0)return r(n,n,n);var i=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*t,o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);var u=n-a/2,d=s+u,f=c+u,p=l+u;return r(d,f,p)}var Qa={aliceblue:`f0f8ff`,antiquewhite:`faebd7`,aqua:`00ffff`,aquamarine:`7fffd4`,azure:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`000`,blanchedalmond:`ffebcd`,blue:`0000ff`,blueviolet:`8a2be2`,brown:`a52a2a`,burlywood:`deb887`,cadetblue:`5f9ea0`,chartreuse:`7fff00`,chocolate:`d2691e`,coral:`ff7f50`,cornflowerblue:`6495ed`,cornsilk:`fff8dc`,crimson:`dc143c`,cyan:`00ffff`,darkblue:`00008b`,darkcyan:`008b8b`,darkgoldenrod:`b8860b`,darkgray:`a9a9a9`,darkgreen:`006400`,darkgrey:`a9a9a9`,darkkhaki:`bdb76b`,darkmagenta:`8b008b`,darkolivegreen:`556b2f`,darkorange:`ff8c00`,darkorchid:`9932cc`,darkred:`8b0000`,darksalmon:`e9967a`,darkseagreen:`8fbc8f`,darkslateblue:`483d8b`,darkslategray:`2f4f4f`,darkslategrey:`2f4f4f`,darkturquoise:`00ced1`,darkviolet:`9400d3`,deeppink:`ff1493`,deepskyblue:`00bfff`,dimgray:`696969`,dimgrey:`696969`,dodgerblue:`1e90ff`,firebrick:`b22222`,floralwhite:`fffaf0`,forestgreen:`228b22`,fuchsia:`ff00ff`,gainsboro:`dcdcdc`,ghostwhite:`f8f8ff`,gold:`ffd700`,goldenrod:`daa520`,gray:`808080`,green:`008000`,greenyellow:`adff2f`,grey:`808080`,honeydew:`f0fff0`,hotpink:`ff69b4`,indianred:`cd5c5c`,indigo:`4b0082`,ivory:`fffff0`,khaki:`f0e68c`,lavender:`e6e6fa`,lavenderblush:`fff0f5`,lawngreen:`7cfc00`,lemonchiffon:`fffacd`,lightblue:`add8e6`,lightcoral:`f08080`,lightcyan:`e0ffff`,lightgoldenrodyellow:`fafad2`,lightgray:`d3d3d3`,lightgreen:`90ee90`,lightgrey:`d3d3d3`,lightpink:`ffb6c1`,lightsalmon:`ffa07a`,lightseagreen:`20b2aa`,lightskyblue:`87cefa`,lightslategray:`789`,lightslategrey:`789`,lightsteelblue:`b0c4de`,lightyellow:`ffffe0`,lime:`0f0`,limegreen:`32cd32`,linen:`faf0e6`,magenta:`f0f`,maroon:`800000`,mediumaquamarine:`66cdaa`,mediumblue:`0000cd`,mediumorchid:`ba55d3`,mediumpurple:`9370db`,mediumseagreen:`3cb371`,mediumslateblue:`7b68ee`,mediumspringgreen:`00fa9a`,mediumturquoise:`48d1cc`,mediumvioletred:`c71585`,midnightblue:`191970`,mintcream:`f5fffa`,mistyrose:`ffe4e1`,moccasin:`ffe4b5`,navajowhite:`ffdead`,navy:`000080`,oldlace:`fdf5e6`,olive:`808000`,olivedrab:`6b8e23`,orange:`ffa500`,orangered:`ff4500`,orchid:`da70d6`,palegoldenrod:`eee8aa`,palegreen:`98fb98`,paleturquoise:`afeeee`,palevioletred:`db7093`,papayawhip:`ffefd5`,peachpuff:`ffdab9`,peru:`cd853f`,pink:`ffc0cb`,plum:`dda0dd`,powderblue:`b0e0e6`,purple:`800080`,rebeccapurple:`639`,red:`f00`,rosybrown:`bc8f8f`,royalblue:`4169e1`,saddlebrown:`8b4513`,salmon:`fa8072`,sandybrown:`f4a460`,seagreen:`2e8b57`,seashell:`fff5ee`,sienna:`a0522d`,silver:`c0c0c0`,skyblue:`87ceeb`,slateblue:`6a5acd`,slategray:`708090`,slategrey:`708090`,snow:`fffafa`,springgreen:`00ff7f`,steelblue:`4682b4`,tan:`d2b48c`,teal:`008080`,thistle:`d8bfd8`,tomato:`ff6347`,turquoise:`40e0d0`,violet:`ee82ee`,wheat:`f5deb3`,white:`fff`,whitesmoke:`f5f5f5`,yellow:`ff0`,yellowgreen:`9acd32`};function $a(e){if(typeof e!=`string`)return e;var t=e.toLowerCase();return Qa[t]?`#`+Qa[t]:e}var eo=/^#[a-fA-F0-9]{6}$/,to=/^#[a-fA-F0-9]{8}$/,no=/^#[a-fA-F0-9]{3}$/,ro=/^#[a-fA-F0-9]{4}$/,io=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ao=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,oo=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,so=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function co(e){if(typeof e!=`string`)throw new Ia(3);var t=$a(e);if(t.match(eo))return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16)};if(t.match(to)){var n=parseFloat((parseInt(``+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16),alpha:n}}if(t.match(no))return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16)};if(t.match(ro)){var r=parseFloat((parseInt(``+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16),alpha:r}}var i=io.exec(t);if(i)return{red:parseInt(``+i[1],10),green:parseInt(``+i[2],10),blue:parseInt(``+i[3],10)};var a=ao.exec(t.substring(0,50));if(a)return{red:parseInt(``+a[1],10),green:parseInt(``+a[2],10),blue:parseInt(``+a[3],10),alpha:parseFloat(``+a[4])>1?parseFloat(``+a[4])/100:parseFloat(``+a[4])};var o=oo.exec(t);if(o){var s=`rgb(`+Za(parseInt(``+o[1],10),parseInt(``+o[2],10)/100,parseInt(``+o[3],10)/100)+`)`,c=io.exec(s);if(!c)throw new Ia(4,t,s);return{red:parseInt(``+c[1],10),green:parseInt(``+c[2],10),blue:parseInt(``+c[3],10)}}var l=so.exec(t.substring(0,50));if(l){var u=`rgb(`+Za(parseInt(``+l[1],10),parseInt(``+l[2],10)/100,parseInt(``+l[3],10)/100)+`)`,d=io.exec(u);if(!d)throw new Ia(4,t,u);return{red:parseInt(``+d[1],10),green:parseInt(``+d[2],10),blue:parseInt(``+d[3],10),alpha:parseFloat(``+l[4])>1?parseFloat(``+l[4])/100:parseFloat(``+l[4])}}throw new Ia(5)}function lo(e){var t=e.red/255,n=e.green/255,r=e.blue/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2;if(i===a)return e.alpha===void 0?{hue:0,saturation:0,lightness:o}:{hue:0,saturation:0,lightness:o,alpha:e.alpha};var s,c=i-a,l=o>.5?c/(2-i-a):c/(i+a);switch(i){case t:s=(n-r)/c+(n<r?6:0);break;case n:s=(r-t)/c+2;break;default:s=(t-n)/c+4;break}return s*=60,e.alpha===void 0?{hue:s,saturation:l,lightness:o}:{hue:s,saturation:l,lightness:o,alpha:e.alpha}}function uo(e){return lo(co(e))}var fo=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?`#`+e[1]+e[3]+e[5]:e};function po(e){var t=e.toString(16);return t.length===1?`0`+t:t}function mo(e){return po(Math.round(e*255))}function ho(e,t,n){return fo(`#`+mo(e)+mo(t)+mo(n))}function go(e,t,n){return Za(e,t,n,ho)}function _o(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return go(e,t,n);if(typeof e==`object`&&t===void 0&&n===void 0)return go(e.hue,e.saturation,e.lightness);throw new Ia(1)}function vo(e,t,n,r){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?go(e,t,n):`rgba(`+Za(e,t,n)+`,`+r+`)`;if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?go(e.hue,e.saturation,e.lightness):`rgba(`+Za(e.hue,e.saturation,e.lightness)+`,`+e.alpha+`)`;throw new Ia(2)}function yo(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return fo(`#`+po(e)+po(t)+po(n));if(typeof e==`object`&&t===void 0&&n===void 0)return fo(`#`+po(e.red)+po(e.green)+po(e.blue));throw new Ia(6)}function bo(e,t,n,r){if(typeof e==`string`&&typeof t==`number`){var i=co(e);return`rgba(`+i.red+`,`+i.green+`,`+i.blue+`,`+t+`)`}else if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?yo(e,t,n):`rgba(`+e+`,`+t+`,`+n+`,`+r+`)`;else if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?yo(e.red,e.green,e.blue):`rgba(`+e.red+`,`+e.green+`,`+e.blue+`,`+e.alpha+`)`;throw new Ia(7)}var xo=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},So=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&typeof e.alpha==`number`},Co=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},wo=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&typeof e.alpha==`number`};function To(e){if(typeof e!=`object`)throw new Ia(8);if(So(e))return bo(e);if(xo(e))return yo(e);if(wo(e))return vo(e);if(Co(e))return _o(e);throw new Ia(8)}function Eo(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):Eo(e,t,r)}}function Do(e){return Eo(e,e.length,[])}function Oo(e,t){if(t===`transparent`)return t;var n=uo(t);return To(B({},n,{hue:n.hue+parseFloat(e)}))}Do(Oo);function ko(e,t,n){return Math.max(e,Math.min(t,n))}function Ao(e,t){if(t===`transparent`)return t;var n=uo(t);return To(B({},n,{lightness:ko(0,1,n.lightness-parseFloat(e))}))}var jo=Do(Ao);function Mo(e,t){if(t===`transparent`)return t;var n=uo(t);return To(B({},n,{saturation:ko(0,1,n.saturation-parseFloat(e))}))}Do(Mo);function No(e){if(e===`transparent`)return 0;var t=co(e),n=Object.keys(t).map(function(e){var n=t[e]/255;return n<=.03928?n/12.92:((n+.055)/1.055)**2.4}),r=n[0],i=n[1],a=n[2];return parseFloat((.2126*r+.7152*i+.0722*a).toFixed(3))}function Po(e,t){var n=No(e),r=No(t);return parseFloat((n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)).toFixed(2))}function Fo(e,t){if(t===`transparent`)return t;var n=uo(t);return To(B({},n,{lightness:ko(0,1,n.lightness+parseFloat(e))}))}var Io=Do(Fo);function Lo(e,t,n){if(t===`transparent`)return n;if(n===`transparent`)return t;if(e===0)return n;var r=co(t),i=B({},r,{alpha:typeof r.alpha==`number`?r.alpha:1}),a=co(n),o=B({},a,{alpha:typeof a.alpha==`number`?a.alpha:1}),s=i.alpha-o.alpha,c=parseFloat(e)*2-1,l=((c*s===-1?c:c+s)/(1+c*s)+1)/2,u=1-l;return bo({red:Math.floor(i.red*l+o.red*u),green:Math.floor(i.green*l+o.green*u),blue:Math.floor(i.blue*l+o.blue*u),alpha:i.alpha*parseFloat(e)+o.alpha*(1-parseFloat(e))})}var Ro=Do(Lo);function zo(e,t){if(t===`transparent`)return t;var n=co(t);return bo(B({},n,{alpha:ko(0,1,((typeof n.alpha==`number`?n.alpha:1)*100+parseFloat(e)*100)/100)}))}Do(zo);var Bo=`#000`,Vo=`#fff`;function Ho(e,t,n,r){t===void 0&&(t=Bo),n===void 0&&(n=Vo),r===void 0&&(r=!0);var i=No(e)>.179,a=i?t:n;return!r||Po(e,a)>=4.5?a:i?Bo:Vo}function Uo(e,t){if(t===`transparent`)return t;var n=uo(t);return To(B({},n,{saturation:ko(0,1,n.saturation+parseFloat(e))}))}Do(Uo);function Wo(e,t){return t===`transparent`?t:To(B({},uo(t),{hue:parseFloat(e)}))}Do(Wo);function Go(e,t){return t===`transparent`?t:To(B({},uo(t),{lightness:parseFloat(e)}))}Do(Go);function Ko(e,t){return t===`transparent`?t:To(B({},uo(t),{saturation:parseFloat(e)}))}Do(Ko);function qo(e,t){return t===`transparent`?t:Ro(parseFloat(e),`rgb(0, 0, 0)`,t)}Do(qo);function Jo(e,t){return t===`transparent`?t:Ro(parseFloat(e),`rgb(255, 255, 255)`,t)}Do(Jo);function Yo(e,t){if(t===`transparent`)return t;var n=co(t);return bo(B({},n,{alpha:ko(0,1,((typeof n.alpha==`number`?n.alpha:1)*100-parseFloat(e)*100).toFixed(2)/100)}))}Do(Yo);var Xo=o(((e,t)=>{var n=`__lodash_hash_undefined__`,r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/,a=/^\./,o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/[\\^$.*+?()[\]{}|]/g,c=/\\(\\)?/g,l=/^\[object .+?Constructor\]$/,u=typeof global==`object`&&global&&global.Object===Object&&global,d=typeof self==`object`&&self&&self.Object===Object&&self,f=u||d||Function(`return this`)();function p(e,t){return e?.[t]}function m(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var h=Array.prototype,g=Function.prototype,_=Object.prototype,v=f[`__core-js_shared__`],y=function(){var e=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),b=g.toString,x=_.hasOwnProperty,S=_.toString,C=RegExp(`^`+b.call(x).replace(s,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),w=f.Symbol,ee=h.splice,te=we(f,`Map`),ne=we(Object,`create`),re=w?w.prototype:void 0,T=re?re.toString:void 0;function ie(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ae(){this.__data__=ne?ne(null):{}}function E(e){return this.has(e)&&delete this.__data__[e]}function oe(e){var t=this.__data__;if(ne){var r=t[e];return r===n?void 0:r}return x.call(t,e)?t[e]:void 0}function D(e){var t=this.__data__;return ne?t[e]!==void 0:x.call(t,e)}function O(e,t){var r=this.__data__;return r[e]=ne&&t===void 0?n:t,this}ie.prototype.clear=ae,ie.prototype.delete=E,ie.prototype.get=oe,ie.prototype.has=D,ie.prototype.set=O;function se(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ce(){this.__data__=[]}function le(e){var t=this.__data__,n=ve(t,e);return n<0?!1:(n==t.length-1?t.pop():ee.call(t,n,1),!0)}function k(e){var t=this.__data__,n=ve(t,e);return n<0?void 0:t[n][1]}function ue(e){return ve(this.__data__,e)>-1}function de(e,t){var n=this.__data__,r=ve(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}se.prototype.clear=ce,se.prototype.delete=le,se.prototype.get=k,se.prototype.has=ue,se.prototype.set=de;function fe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function pe(){this.__data__={hash:new ie,map:new(te||se),string:new ie}}function me(e){return Ce(this,e).delete(e)}function he(e){return Ce(this,e).get(e)}function ge(e){return Ce(this,e).has(e)}function _e(e,t){return Ce(this,e).set(e,t),this}fe.prototype.clear=pe,fe.prototype.delete=me,fe.prototype.get=he,fe.prototype.has=ge,fe.prototype.set=_e;function ve(e,t){for(var n=e.length;n--;)if(Me(e[n][0],t))return n;return-1}function ye(e,t){t=Te(t,e)?[t]:Se(t);for(var n=0,r=t.length;e!=null&&n<r;)e=e[ke(t[n++])];return n&&n==r?e:void 0}function be(e){return!Fe(e)||De(e)?!1:(Pe(e)||m(e)?C:l).test(Ae(e))}function xe(e){if(typeof e==`string`)return e;if(Le(e))return T?T.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Se(e){return Ne(e)?e:Oe(e)}function Ce(e,t){var n=e.__data__;return Ee(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function we(e,t){var n=p(e,t);return be(n)?n:void 0}function Te(e,t){if(Ne(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||Le(e)?!0:i.test(e)||!r.test(e)||t!=null&&e in Object(t)}function Ee(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function De(e){return!!y&&y in e}var Oe=je(function(e){e=Re(e);var t=[];return a.test(e)&&t.push(``),e.replace(o,function(e,n,r,i){t.push(r?i.replace(c,`$1`):n||e)}),t});function ke(e){if(typeof e==`string`||Le(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Ae(e){if(e!=null){try{return b.call(e)}catch{}try{return e+``}catch{}}return``}function je(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(`Expected a function`);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o),o};return n.cache=new(je.Cache||fe),n}je.Cache=fe;function Me(e,t){return e===t||e!==e&&t!==t}var Ne=Array.isArray;function Pe(e){var t=Fe(e)?S.call(e):``;return t==`[object Function]`||t==`[object GeneratorFunction]`}function Fe(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function Ie(e){return!!e&&typeof e==`object`}function Le(e){return typeof e==`symbol`||Ie(e)&&S.call(e)==`[object Symbol]`}function Re(e){return e==null?``:xe(e)}function ze(e,t,n){var r=e==null?void 0:ye(e,t);return r===void 0?n:r}t.exports=ze})),Zo=o(((e,t)=>{var n=`__lodash_hash_undefined__`,r=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,a=typeof global==`object`&&global&&global.Object===Object&&global,o=typeof self==`object`&&self&&self.Object===Object&&self,s=a||o||Function(`return this`)();function c(e,t){return e?.[t]}function l(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var u=Array.prototype,d=Function.prototype,f=Object.prototype,p=s[`__core-js_shared__`],m=function(){var e=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),h=d.toString,g=f.hasOwnProperty,_=f.toString,v=RegExp(`^`+h.call(g).replace(r,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),y=u.splice,b=pe(s,`Map`),x=pe(Object,`create`);function S(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function C(){this.__data__=x?x(null):{}}function w(e){return this.has(e)&&delete this.__data__[e]}function ee(e){var t=this.__data__;if(x){var r=t[e];return r===n?void 0:r}return g.call(t,e)?t[e]:void 0}function te(e){var t=this.__data__;return x?t[e]!==void 0:g.call(t,e)}function ne(e,t){var r=this.__data__;return r[e]=x&&t===void 0?n:t,this}S.prototype.clear=C,S.prototype.delete=w,S.prototype.get=ee,S.prototype.has=te,S.prototype.set=ne;function re(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function T(){this.__data__=[]}function ie(e){var t=this.__data__,n=ue(t,e);return n<0?!1:(n==t.length-1?t.pop():y.call(t,n,1),!0)}function ae(e){var t=this.__data__,n=ue(t,e);return n<0?void 0:t[n][1]}function E(e){return ue(this.__data__,e)>-1}function oe(e,t){var n=this.__data__,r=ue(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}re.prototype.clear=T,re.prototype.delete=ie,re.prototype.get=ae,re.prototype.has=E,re.prototype.set=oe;function D(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function O(){this.__data__={hash:new S,map:new(b||re),string:new S}}function se(e){return fe(this,e).delete(e)}function ce(e){return fe(this,e).get(e)}function le(e){return fe(this,e).has(e)}function k(e,t){return fe(this,e).set(e,t),this}D.prototype.clear=O,D.prototype.delete=se,D.prototype.get=ce,D.prototype.has=le,D.prototype.set=k;function ue(e,t){for(var n=e.length;n--;)if(ve(e[n][0],t))return n;return-1}function de(e){return!be(e)||he(e)?!1:(ye(e)||l(e)?v:i).test(ge(e))}function fe(e,t){var n=e.__data__;return me(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function pe(e,t){var n=c(e,t);return de(n)?n:void 0}function me(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function he(e){return!!m&&m in e}function ge(e){if(e!=null){try{return h.call(e)}catch{}try{return e+``}catch{}}return``}function _e(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(`Expected a function`);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o),o};return n.cache=new(_e.Cache||D),n}_e.Cache=D;function ve(e,t){return e===t||e!==e&&t!==t}function ye(e){var t=be(e)?_.call(e):``;return t==`[object Function]`||t==`[object GeneratorFunction]`}function be(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}t.exports=_e})),Qo=c(Xo()),$o=c(Zo()),es=(e,t,n)=>{if(t!==n){let r=Math.abs(t-n)/100*.05;return t>n?jo(r,e):Io(r,e)}return e},ts=(e,t,n,r)=>{let i;if(e===void 0)i=r===`dark`?n===void 0?600:500:700;else if(i=parseInt(e.toString(),10),isNaN(i))throw TypeError(`Error: unexpected '${typeof e}' type for color shade "${e}"`);return i+(t||0)},ns=(e,t,n,r,i)=>{let a=ts(t,n,r,i),o=e[a];if(!o){let t=Object.keys(e).map(e=>parseInt(e,10)).reduce((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e);o=es(e[t],a,t)}return o},rs=e=>{let t=[`currentcolor`,`inherit`,`transparent`].includes(e);if(!t)try{t=!!ta(e)}catch{t=!1}return t};function is(e,t,n=0){if(typeof e!=`number`||isNaN(e))throw Error(`Target must be a number.`);if(!Array.isArray(t))throw Error(`Second argument must be an array.`);let r=n,i=t.length-1;if(e<t[r])return r;if(e>t[i])return i;for(;r<=i;){let n=Math.floor((r+i)/2);if(t[n]===e)return n;t[n]<e?r=n+1:i=n-1}return t[r]-e<e-t[i]?r:i}var as={100:1.08,200:1.2,300:1.35,400:2,500:2.8,600:3.3,700:5,800:10,900:13,1e3:16,1100:17.5,1200:19},os=(0,$o.default)(e=>{let t=ga(`#FFF`,e,`#000`),n=e=>t(e/200),r=[],i=[];for(let e=0;e<=200;e++){let t=_a(n(e));r.push(t),i.push(Po(`#FFF`,t))}let a={},o=0;for(let e in as)if(Object.prototype.hasOwnProperty.call(as,e)){let t=as[e],n=is(t,i,o);o=n+1,a[e]=r[n]}return a}),ss=(e,t,n,r,i,a,o,s)=>{let c,l=e[i]||i;if(Object.prototype.hasOwnProperty.call(t,l)&&(l=t[l]),typeof l==`object`?c=ns(l,a,o,s,r):rs(l)&&(a===void 0?c=l:(l=os(l),c=ns(l,a,o,s,r))),c&&s){let e=s>1?n[s]:s;if(e===void 0)throw Error("Error: invalid `transparency` parameter");c=bo(c,e)}return c},cs=(e,t)=>{let n=(0,Qo.default)(e,t);if(typeof n==`string`)return n;throw n===void 0?ReferenceError(`Error: color variable '${t}' is not defined`):TypeError(`Error: unexpected '${typeof n}' type for color variable "${t}"`)},ls=e=>{let t;try{let[n,r,i,a]=ta(e);t={property:_a(`rgb(${n}, ${r}, ${i})`),transparency:a}}catch{let n=/rgba\s*\(\s*(?<property>[#\w.]+)\s*,\s*(?<alpha>[\w.]+)\s*\)/gu.exec(e);if(n&&n.groups)t={property:n.groups.property,transparency:parseFloat(n.groups.alpha)};else throw Error(`Error: invalid \`rgba\` value "${e}"`)}return t},us=(e,t,n)=>{let r={},i=cs(t,e);if(i.startsWith(`rgba`)){let e=ls(i);i=e.property,r.transparency=e.transparency}let[a,o]=i.split(/\.(?<value>.*)/u);return a===`palette`?r.hue=cs(n,o):(r.hue=a,o!==void 0&&(r.shade=parseInt(o,10))),r},ds=new WeakMap,fs={colors:0,palette:0,opacity:0};ds.set(Qi.colors,fs.colors),ds.set(Qi.palette,fs.palette),ds.set(Qi.opacity,fs.opacity);var ps=({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c;a.colors&&(c=ds.get(a.colors),c===void 0&&(c=++fs.colors,ds.set(a.colors,c)));let l;a.opacity&&(l=ds.get(a.opacity),l===void 0&&(l=++fs.opacity,ds.set(a.opacity,l)));let u;a.palette&&(u=ds.get(a.palette),u===void 0&&(u=++fs.palette,ds.set(a.palette,u)));let d=`{${c},${u},${l}}`;return s!==void 0&&(d+=`,${s}`),t!==void 0&&(d+=`,${t}`),i!==void 0&&(d+=`,${i}`),r!==void 0&&(d+=`,${r}`),o!==void 0&&(d+=`,${o}`),e!==void 0&&(d+=`,${JSON.stringify(e)}`),n!==void 0&&(d+=`,${JSON.stringify(n)}`),d},H=(0,$o.default)(({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c,l=a.palette&&Object.keys(a.palette).length>0?a.palette:Qi.palette,{base:u,variables:d,...f}=a.colors&&Object.keys(a.colors).length>0?a.colors:Qi.colors,p=u===`dark`?`dark`:`light`,m=p===`dark`?e:n,h=m?.hue||t,g=m?.shade===void 0?i:m.shade,_=m?.offset===void 0?r:m.offset,v=m?.transparency===void 0?o:m.transparency;if(s){let e=us(s,d?.[p]?d[p]:Qi.colors.variables[p],l);h=e.hue,g=e.shade,v=v===void 0?e.transparency:v}if(h&&(c=ss(f,l,a.opacity&&Object.keys(a.opacity).length>0?a.opacity:Qi.opacity,p,h,g,_,v)),c===void 0)throw Error("Error: invalid `getColor` parameters");return c},({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>ps({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})),ms={black:`#000`,white:`#fff`,product:{support:`#00a656`,message:`#37b8af`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,connect:`#ff6224`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f8f9f9`,200:`#e9ebed`,300:`#d8dcde`,400:`#c2c8cc`,500:`#87929d`,600:`#68737d`,700:`#49545c`,800:`#2f3941`},blue:{100:`#edf7ff`,200:`#cee2f2`,300:`#adcce4`,400:`#5293c7`,500:`#337fbd`,600:`#1f73b7`,700:`#144a75`,800:`#0f3554`},red:{100:`#fff0f1`,200:`#f5d5d8`,300:`#f5b5ba`,400:`#e35b66`,500:`#d93f4c`,600:`#cc3340`,700:`#8c232c`,800:`#681219`},yellow:{100:`#fff7ed`,200:`#ffeedb`,300:`#fed6a8`,400:`#ffb057`,500:`#f79a3e`,600:`#ed8f1c`,700:`#ad5918`,800:`#703815`},green:{100:`#edf8f4`,200:`#d1e8df`,300:`#aecfc2`,400:`#5eae91`,500:`#228f67`,600:`#038153`,700:`#186146`,800:`#0b3b29`},kale:{100:`#f5fcfc`,200:`#daeded`,300:`#bdd9d7`,400:`#90bbbb`,500:`#498283`,600:`#17494d`,700:`#03363d`,800:`#012b30`},fuschia:{400:`#d653c2`,600:`#a81897`,M400:`#cf62a8`,M600:`#a8458c`},pink:{400:`#ec4d63`,600:`#d42054`,M400:`#d57287`,M600:`#b23a5d`},crimson:{400:`#e34f32`,600:`#c72a1c`,M400:`#cc6c5b`,M600:`#b24a3c`},orange:{400:`#de701d`,600:`#bf5000`,M400:`#d4772c`,M600:`#b35827`},lemon:{400:`#ffd424`,600:`#ffbb10`,M400:`#e7a500`,M600:`#c38f00`},lime:{400:`#43b324`,600:`#2e8200`,M400:`#519e2d`,M600:`#47782c`},mint:{400:`#00a656`,600:`#058541`,M400:`#299c66`,M600:`#2e8057`},teal:{400:`#02a191`,600:`#028079`,M400:`#2d9e8f`,M600:`#3c7873`},azure:{400:`#3091ec`,600:`#1371d6`,M400:`#5f8dcf`,M600:`#3a70b2`},royal:{400:`#5d7df5`,600:`#3353e2`,M400:`#7986d8`,M600:`#4b61c3`},purple:{400:`#b552e2`,600:`#6a27b8`,M400:`#b072cc`,M600:`#9358b0`}},hs=(e,t,n)=>{if(t!==n){let r=Math.abs(t-n)/100*.05;return t>n?jo(r,e):Io(r,e)}return e},gs=new WeakMap,_s={colors:0,palette:0};gs.set(Qi.colors,_s.colors),gs.set(Qi.palette,_s.palette);var vs=({hue:e,shade:t,theme:n,transparency:r})=>{let i=`${typeof e==`object`?JSON.stringify(e):e}`;if(t!==void 0&&(i+=`,${t}`),n!==void 0){let e;n.colors&&(e=gs.get(n.colors),e===void 0&&(e=++_s.colors,gs.set(n.colors,e)));let t;n.palette&&(t=gs.get(n.palette),t===void 0&&(t=++_s.palette,gs.set(n.palette,t))),i+=`,{${e},${t}}`}return r!==void 0&&(i+=`,${r}`),i},ys=(0,$o.default)((e,t=600,n,r)=>{let i;if(isNaN(t))return;let a={background:ms.white,foreground:ms.grey[800],...n&&n.palette?{...n.palette,...ms}:{...Qi.palette,...ms}},o=n&&n.colors?n.colors:Qi.colors,s;if(s=typeof e==`string`&&o[e]||e,Object.prototype.hasOwnProperty.call(a,s)&&(s=a[s]),typeof s==`object`){if(i=s[t],!i){let e=Object.keys(s).map(e=>parseInt(e,10)).reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e);i=hs(s[e],t,e)}}else i=hs(s,t,600);return r&&(i=bo(i,r)),i},(e,t,n,r)=>vs({hue:e,shade:t,theme:n,transparency:r})),bs=({boxShadow:e,inset:t=!1,color:n={variable:`border.primaryEmphasis`},shadowWidth:r=`md`,spacerColor:i={variable:`background.default`},spacerWidth:a=`xs`,theme:o=Qi,...s})=>{let c=s,l=c.hue?ys(c.hue,c.shade,o):H({...n,theme:o}),u=o.shadows[r](l);if(a===null)return`${t?`inset`:``} ${u}`;let d=c.spacerHue?ys(c.spacerHue,c.spacerShade,o):H({...i,theme:o}),f=`
    ${t?`inset`:``} ${o.shadows[a](d)},
    ${t?`inset`:``} ${u}`;return e?`${f}, ${e}`:f},xs=({theme:e,value:t})=>H(/^[a-z]+\.[a-z]+$/giu.test(t)?{variable:t,theme:e}:{hue:t,theme:e});function Ss(e,t){let[n,r]=qa(e.toString()),[i,a]=qa(t.toString());if(r&&r!==`px`)throw Error(`Unexpected \`height\` with '${r}' units.`);if(a&&a!==`px`)throw Error(`Unexpected \`fontSize\` with '${a}' units.`);return n/i}var Cs=(e,t,n,r,i=!0)=>{let a=i?t[n]:void 0;return(0,g.useMemo)(()=>{if(i){if(n===`children`)throw Error("Error: `children` is not a valid `useText` prop.");if(a===null||a===``)throw Error(e.displayName?`Error: you must provide a valid \`${n}\` text value for <${e.displayName}>.`:`Error: you must provide a valid \`${n}\` text value.`);if(a===void 0)return r}return a},[e.displayName,a,n,r,i])},ws=`&:focus-visible`,Ts=({condition:e=!0,selector:t=ws,shadowWidth:n=`md`,spacerWidth:r=`xs`,styles:{boxShadow:i,...a}={},theme:o,...s})=>{let c=e?bs({boxShadow:i,shadowWidth:n,spacerWidth:r,theme:o,...s}):i,l,u;return r===null?l=o.shadowWidths[n]:(l=`${V(`${o.shadowWidths[n]} - ${o.shadowWidths[r]}`)} solid transparent`,u=o.shadowWidths[r]),F([`&:focus{outline:none;}`,`{outline:`,`;outline-offset:`,`;box-shadow:`,`;`,`}`],t,l,u,c,a)},Es=I(({children:e,theme:t,...n})=>(0,g.cloneElement)(g.Children.only(e),n)).withConfig({displayName:`StyledBaseIcon`,componentId:`sc-1moykgb-0`})([``]),Ds=[`small`,`medium`,`large`];[...Ds];var Os=`typography.font`;[...Ds];var ks={small:`sm`,medium:`md`,large:`lg`,extralarge:`xl`,"2xlarge":`xxl`,"3xlarge":`xxxl`},As=({$hue:e,$isBold:t,$isMonospace:n,$size:r,theme:i})=>{let a=n&&[`inherit`,`small`,`medium`,`large`].indexOf(r)!==-1,o=a&&i.fonts.mono,s=i.rtl?`rtl`:`ltr`,c=e?xs({theme:i,value:e}):void 0,l,u,d;if(a)if(r===`inherit`)l=`calc(1em - 1px)`,d=`normal`;else{let e=ks[r];l=V(`${i.fontSizes[e]} - 1px`),d=V(`${i.lineHeights[e]} - 1px`)}else if(r!==`inherit`){let e=ks[r];l=i.fontSizes[e],d=i.lineHeights[e]}return t===!0?u=i.fontWeights.semibold:(t===!1||r!==`inherit`)&&(u=i.fontWeights.regular),F([`transition:color 0.1s ease-in-out;line-height:`,`;color:`,`;font-family:`,`;font-size:`,`;font-weight:`,`;direction:`,`;`],d,c,o,l,u,s)},js=I.div.attrs(e=>({"data-garden-id":Os,"data-garden-version":`9.15.6`,$size:e.$size??`inherit`})).withConfig({displayName:`StyledFont`,componentId:`sc-1iildbo-0`})([``,`;&[hidden]{display:inline;`,`;}`,`;`],e=>!e.hidden&&As(e),Ja(),z),Ms=`typography.icon`,Ns=e=>{let t=e.$isStart&&`${e.theme.space.base*2}px`,n=e.theme.iconSizes.md;return F([`margin-`,`:`,`;width:`,`;height:`,`;`],e.theme.rtl?`left`:`right`,t,n,n)},Ps=I(Es).attrs({"data-garden-id":Ms,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledIcon`,componentId:`sc-10rfb5b-0`})([`position:relative;top:-1px;vertical-align:middle;`,`;`,`;`],e=>Ns(e),z),Fs=e=>g.createElement(Ps,Object.assign({$isStart:!0},e));Fs.displayName=`Span.StartIcon`;var Is=Fs,Ls=e=>g.createElement(Ps,e);Ls.displayName=`Span.Icon`;var Rs=Ls,U=c(Fi()),zs=(0,g.forwardRef)(({hue:e,isBold:t,isMonospace:n,tag:r=`span`,...i},a)=>g.createElement(js,Object.assign({$hue:e,$isBold:t,$isMonospace:n,$size:`inherit`,as:r,ref:a},i)));zs.displayName=`Span`,zs.propTypes={tag:U.default.any,isBold:U.default.bool,isMonospace:U.default.bool,hue:U.default.string};var Bs=zs;Bs.Icon=Rs,Bs.StartIcon=Is;var Vs;function Hs(){return Hs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hs.apply(null,arguments)}var Us=function(e){return g.createElement(`svg`,Hs({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Vs||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:6,cy:6,r:5.5}),g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5.5 3v3.5H8`})))},Ws;function Gs(){return Gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gs.apply(null,arguments)}var Ks=function(e){return g.createElement(`svg`,Gs({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Ws||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:8,cy:8,r:7.5}),g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M7.5 3v5.5H11`})))},qs;function Js(){return Js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Js.apply(null,arguments)}var Ys=function(e){return g.createElement(`svg`,Js({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),qs||=g.createElement(`path`,{fill:`currentColor`,d:`M2.146 6.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L3.707 6H9.5a.5.5 0 0 1 0 1H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2Z`}))},Xs;function Zs(){return Zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zs.apply(null,arguments)}var Qs=function(e){return g.createElement(`svg`,Zs({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Xs||=g.createElement(`path`,{fill:`currentColor`,d:`M3.146 8.854a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L4.707 8H12.5a.5.5 0 0 1 0 1H4.707l2.147 2.146a.5.5 0 1 1-.708.707l-3-3Z`}))},$s=[`extraextrasmall`,`extrasmall`,`small`,`medium`,`large`],ec=[`available`,`away`,`transfers`,`offline`],tc=I.span.attrs({"data-garden-id":`avatars.text`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledText`,componentId:`sc-1a6hivh-0`})([`overflow:hidden;text-align:center;white-space:nowrap;`,`;`],z),[nc,rc,ic,ac,oc]=$s,sc=.25,cc={active:{hue:`crimson`,light:{shade:700},dark:{shade:600}},available:{hue:`mint`,light:{shade:500},dark:{shade:400}},away:{hue:`orange`,light:{shade:500},dark:{shade:400}},transfers:{hue:`azure`,light:{shade:500},dark:{shade:400}},offline:{hue:`grey`,light:{shade:500},dark:{shade:400}}};function lc(e,t){if(t===void 0)return`transparent`;let n=cc[t];return n?H({...n,theme:e}):`transparent`}function uc(e){return e.$size===nc?V(`${e.theme.shadowWidths.sm} - 1`):e.theme.shadowWidths.sm}function dc(e,t){let n=e.$type===`active`;switch(e.$size){case nc:return V(`${e.theme.space.base}px - ${t}`);case rc:return V(`${e.theme.space.base*2}px - (${t} * 2)`);case ic:return V(`${e.theme.space.base*3}px ${n?``:`- (${t} * 2)`}`);case ac:case oc:return V(`${e.theme.space.base*4}px ${n?``:`- (${t} * 2)`}`);default:return`0`}}function fc(e,t){return e.includes(t)}var pc=`avatars.status-indicator.base`,mc=Mi([`0%{opacity:0;}100%{opacity:1;}`]),hc=I.div.attrs({"data-garden-id":pc,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledStatusIndicatorBase`,componentId:`sc-1rininy-0`})([`transition:inherit;`,` `,` `,`;`],e=>{let t=uc(e),n=dc(e,t);return F([`border:`,` `,`;border-radius:`,`;min-width:`,`;height:`,`;line-height:`,`;& > svg{position:absolute;top:-`,`;inset-inline-start:-`,`;transform-origin:50% 50%;animation:`,` `,`s;max-height:unset;&[data-icon-status='transfers']{transform:scale(`,`,1);inset-inline-start:`,`;}&[data-icon-status='away'] circle{display:none;}}`],t,e.theme.borderStyles.solid,n,n,n,n,t,t,mc,sc,e.theme.rtl?-1:1,e.$size===`extrasmall`?`-1px`:void 0)},({theme:e,$type:t})=>{let n=H({variable:`foreground.onEmphasis`,theme:e}),r,i;return t===`offline`?(i=lc(e,t),r=H({variable:`background.default`,theme:e})):(r=lc(e,t),i=r),F([`border-color:`,`;background-color:`,`;color:`,`;`],i,r,n)},z),gc=`avatars.status_indicator`,[_c,vc,yc,W,bc]=$s,xc=I(hc).attrs(e=>({"data-garden-id":gc,"data-garden-version":`9.15.6`,$size:e.$size??`medium`})).withConfig({displayName:`StyledStatusIndicator`,componentId:`sc-16t9if3-0`})([``,` `,` `,`;`],e=>{let t=e.$size!==_c,n=e.$size===vc?`${e.theme.space.base*2}px`:void 0,r=uc(e),i=`0`;return e.$size===yc?i=V(`${e.theme.space.base+1}px - (${r} * 2)`):fc([W,bc],e.$size)&&(i=V(`${e.theme.space.base+3}px - (${r} * 2)`)),F([`max-width:calc(2em + (`,` * 3));box-sizing:content-box;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;font-size:`,`;font-weight:`,`;& > span{display:`,`;padding:0 `,`;max-width:2em;overflow:inherit;text-align:inherit;text-overflow:inherit;white-space:inherit;}& > svg{`,` width:`,`;height:`,`;}`],r,e.theme.fontSizes.xs,e.theme.fontWeights.semibold,t?`inline-block`:`none`,i,!t&&`display: none;`,n,n)},({theme:e,$type:t,$size:n,$borderColor:r,$surfaceColor:i})=>{let a=n===_c?`xs`:`sm`,o,s=i?.includes(`.`)?H({variable:i,theme:e}):i;return o=t?e.shadows[a](s||H({theme:e,variable:`background.default`})):e.shadows[a](s||e.palette.white),F([`border-color:`,`;box-shadow:`,`;`],r,o)},z),Sc=`avatars.avatar`,Cc=e=>{let[t,n,r,i,a]=$s,o=`${e.theme.space.base*-1}px`;switch(e.$size){case t:case n:o=V(`${o}  + 3`);break;case r:case i:case a:o=V(`${o}  + 2`);break}let s=Mi([`0%{transform:scale(.1);}`]);return F([`position:absolute;`,`:`,`;bottom:`,`;transition:all `,`s ease-in-out;`,``],e.theme.rtl?`left`:`right`,o,o,sc,e.$status===`active`&&F([`animation:`,` `,`s ease-in-out;`],s,.25*1.5))},wc=({theme:e,$foregroundColor:t=e.palette.white,$surfaceColor:n=`background.default`,$backgroundColor:r=`transparent`,$status:i})=>{let a=lc(e,i),o=xs({theme:e,value:r}),s=xs({theme:e,value:t}),c=i?xs({theme:e,value:n}):`transparent`;return F([`box-shadow:`,`;background-color:`,`;&&{color:`,`;}& > svg,& `,`{color:`,`;}`],e.shadows.sm(a),o,c,tc,s)},Tc=e=>{let t,n,r,i,a;return e.$size===`extraextrasmall`?(t=`0 0 0 ${V(`${e.theme.shadowWidths.sm} - 1`)}`,n=e.$isSystem?V(`${e.theme.borderRadii.md} - 1`):`50%`,r=`${e.theme.space.base*4}px`,i=0,a=`${e.theme.space.base*3}px`):e.$size===`extrasmall`?(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?V(`${e.theme.borderRadii.md} - 1`):`50%`,r=`${e.theme.space.base*6}px`,i=e.theme.fontSizes.sm,a=`${e.theme.space.base*3}px`):e.$size===`small`?(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?V(`${e.theme.borderRadii.md} - 1`):`50%`,r=`${e.theme.space.base*8}px`,i=e.theme.fontSizes.md,a=`${e.theme.space.base*3}px`):e.$size===`large`?(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?V(`${e.theme.borderRadii.md} + 1`):`50%`,r=`${e.theme.space.base*12}px`,i=e.theme.fontSizes.xl,a=`${e.theme.space.base*6}px`):(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?e.theme.borderRadii.md:`50%`,r=`${e.theme.space.base*10}px`,i=e.theme.fontSizes.lg,a=`${e.theme.space.base*4}px`),F([`border-radius:`,`;width:`,` !important;height:`,` !important;&::before{box-shadow:`,`;}& > svg{font-size:`,`;}& `,`{line-height:`,`;font-size:`,`;}`],n,r,r,t,a,tc,r,i)},Ec=I.figure.attrs(e=>({"data-garden-id":Sc,"data-garden-version":`9.15.6`,$size:e.$size??`medium`})).withConfig({displayName:`StyledAvatar`,componentId:`sc-608m04-0`})([`display:inline-flex;position:relative;align-items:center;justify-content:center;transition:box-shadow `,`s ease-in-out,color 0.1s ease-in-out;margin:0;vertical-align:middle;box-sizing:border-box;`,`;`,`;&::before{position:absolute;top:0;left:0;transition:box-shadow `,`s ease-in-out;content:'';}&::before,&& > img{border-radius:inherit;width:100%;height:100%;}&& > img{box-sizing:inherit;vertical-align:bottom;object-fit:cover;}&& > svg{width:1em;height:1em;}& > `,`{`,`;}`,`;`],sc,e=>Tc(e),e=>wc(e),sc,xc,Cc,z),Dc=(0,g.forwardRef)((e,t)=>g.createElement(tc,Object.assign({ref:t},e)));Dc.displayName=`Avatar.Text`;var Oc=Dc,kc=(0,g.forwardRef)(({"aria-hidden":e,backgroundColor:t,badge:n,children:r,foregroundColor:i,isSystem:a,size:o=`medium`,status:s,statusLabel:c,surfaceColor:l,...u},d)=>{let f=n===void 0?s:`active`,p=Us,m=Ys;[`large`,`medium`].includes(o)&&(p=Ks,m=Qs);let h=(0,g.useMemo)(()=>{let e=f;if(f===`active`){let t=typeof n==`string`?parseInt(n,10):n;e=`active. ${t>0?`${t} notification${t>1?`s`:``}`:`no notifications`}`}return[`status`].concat(e||[]).join(`: `)},[f,n]),_=Cs(kc,{statusLabel:c},`statusLabel`,h,f!==void 0&&e!==!0);return g.createElement(Ec,Object.assign({ref:d,$isSystem:a,$size:o,$status:f,$surfaceColor:l,$backgroundColor:t,$foregroundColor:i,"aria-atomic":`true`,"aria-hidden":e,"aria-live":`polite`},u),g.Children.only(r),!!f&&g.createElement(xc,{$size:o,$type:f,$surfaceColor:l,as:`figcaption`},e!==!0&&g.createElement(Bs,{hidden:!0},_),f===`active`?g.createElement(`span`,{"aria-hidden":!0},n):g.createElement(g.Fragment,null,f===`away`?g.createElement(p,{"data-icon-status":f}):null,f===`transfers`?g.createElement(m,{"data-icon-status":f}):null)))});kc.displayName=`Avatar`,kc.propTypes={backgroundColor:U.default.string,foregroundColor:U.default.string,surfaceColor:U.default.string,isSystem:U.default.bool,badge:U.default.oneOfType([U.default.string,U.default.number]),size:U.default.oneOf($s),status:U.default.oneOf(ec),statusLabel:U.default.string};var Ac=kc;Ac.Text=Oc;var G=Dt(),K=({children:e,size:t=20,color:n=`currentColor`,...r})=>(0,G.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...r,children:e}),jc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{d:`M11.4163 2.87911C10.5632 2.29258 9.43683 2.29258 8.58367 2.87911L3.58367 6.31661C2.90529 6.78299 2.5 7.55347 2.5 8.37671V15C2.5 16.3807 3.61929 17.5 5 17.5H7.08333C7.54357 17.5 7.91667 17.1269 7.91667 16.6666V13.75C7.91667 12.5994 8.84942 11.6666 10 11.6666C11.1506 11.6666 12.0833 12.5994 12.0833 13.75V16.6666C12.0833 17.1269 12.4564 17.5 12.9167 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V8.37671C17.5 7.55347 17.0947 6.78299 16.4163 6.31661L11.4163 2.87911Z`,fill:t})}),Mc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M5.00003 2.50001L15 2.5C16.3807 2.5 17.5 3.61929 17.5 5V10H13.2283C12.8481 10 12.5161 10.2574 12.4213 10.6256C12.1437 11.7041 11.1637 12.5 10 12.5C8.83625 12.5 7.85629 11.7041 7.57872 10.6256C7.48394 10.2574 7.15192 10 6.77169 10H2.50003L2.50003 5C2.50003 3.61929 3.61933 2.50001 5.00003 2.50001Z`,fill:t}),(0,G.jsx)(`path`,{d:`M17.5 11.6667V15C17.5 16.3807 16.3807 17.5 15 17.5H5C3.61928 17.5 2.49999 16.3807 2.5 15L2.50003 10L2.50003 11.6667H6.18032C6.8232 13.1379 8.29065 14.1667 10 14.1667C11.7093 14.1667 13.1768 13.1379 13.8197 11.6667H17.5Z`,fill:t})]}),Nc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.83337 1.66669C4.45267 1.66669 3.33337 2.78598 3.33337 4.16669V16.25C3.33337 17.4006 4.26612 18.3334 5.41671 18.3334H15.8334C16.2936 18.3334 16.6667 17.9603 16.6667 17.5C16.6667 17.0398 16.2936 16.6667 15.8334 16.6667H5.41671C5.18659 16.6667 5.00004 16.4801 5.00004 16.25C5.00004 16.0199 5.18659 15.8334 5.41671 15.8334H15.8334C16.2936 15.8334 16.6667 15.4603 16.6667 15V3.33335C16.6667 2.41288 15.9205 1.66669 15 1.66669H5.83337ZM10 5.83335C9.19462 5.83335 8.54171 6.48627 8.54171 7.29169C8.54171 8.0971 9.19462 8.75002 10 8.75002C10.8055 8.75002 11.4584 8.0971 11.4584 7.29169C11.4584 6.48627 10.8055 5.83335 10 5.83335ZM10 9.16669C9.25529 9.16669 8.69146 9.3231 8.27652 9.59377C7.85302 9.87002 7.65388 10.2203 7.56682 10.4753C7.32847 11.1733 7.92705 11.6667 8.42546 11.6667H11.5746C12.073 11.6667 12.6716 11.1733 12.4333 10.4753C12.3462 10.2203 12.147 9.87002 11.7235 9.59377C11.3086 9.3231 10.7448 9.16669 10 9.16669Z`,fill:t})}),Pc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M16.6666 15.8333V5C16.6666 3.61929 15.5474 2.5 14.1666 2.5H5.83329C4.45258 2.5 3.33329 3.61929 3.33329 5V15.8333H2.49996C2.03973 15.8333 1.66663 16.2064 1.66663 16.6667C1.66663 17.1269 2.03973 17.5 2.49996 17.5H17.5C17.9602 17.5 18.3333 17.1269 18.3333 16.6667C18.3333 16.2064 17.9602 15.8333 17.5 15.8333H16.6666ZM7.49996 5.83333C7.03973 5.83333 6.66663 6.20643 6.66663 6.66667C6.66663 7.1269 7.03973 7.5 7.49996 7.5H8.33329C8.79354 7.5 9.16663 7.1269 9.16663 6.66667C9.16663 6.20643 8.79354 5.83333 8.33329 5.83333H7.49996ZM11.6666 5.83333C11.2064 5.83333 10.8333 6.20643 10.8333 6.66667C10.8333 7.1269 11.2064 7.5 11.6666 7.5H12.5C12.9602 7.5 13.3333 7.1269 13.3333 6.66667C13.3333 6.20643 12.9602 5.83333 12.5 5.83333H11.6666ZM7.49996 9.16667C7.03973 9.16667 6.66663 9.53975 6.66663 10C6.66663 10.4602 7.03973 10.8333 7.49996 10.8333H8.33329C8.79354 10.8333 9.16663 10.4602 9.16663 10C9.16663 9.53975 8.79354 9.16667 8.33329 9.16667H7.49996ZM11.6666 9.16667C11.2064 9.16667 10.8333 9.53975 10.8333 10C10.8333 10.4602 11.2064 10.8333 11.6666 10.8333H12.5C12.9602 10.8333 13.3333 10.4602 13.3333 10C13.3333 9.53975 12.9602 9.16667 12.5 9.16667H11.6666ZM7.49996 12.5C7.03973 12.5 6.66663 12.8731 6.66663 13.3333C6.66663 13.7936 7.03973 14.1667 7.49996 14.1667H8.33329C8.79354 14.1667 9.16663 13.7936 9.16663 13.3333C9.16663 12.8731 8.79354 12.5 8.33329 12.5H7.49996ZM11.6666 12.5C11.2064 12.5 10.8333 12.8731 10.8333 13.3333C10.8333 13.7936 11.2064 14.1667 11.6666 14.1667H12.5C12.9602 14.1667 13.3333 13.7936 13.3333 13.3333C13.3333 12.8731 12.9602 12.5 12.5 12.5H11.6666Z`,fill:t})}),Fc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M6.15541 7.40126C5.99781 7.67423 5.99781 8.01053 6.15541 8.2835C6.313 8.55646 6.60426 8.72462 6.91945 8.72462L13.0317 8.72462C13.3469 8.72462 13.6382 8.55646 13.7958 8.2835C13.9533 8.01054 13.9534 7.67424 13.7957 7.40127L10.7397 2.10787C10.5821 1.83492 10.2908 1.66671 9.97558 1.66675C9.66042 1.66669 9.36918 1.83486 9.21154 2.10785L6.15541 7.40126Z`,fill:t}),(0,G.jsx)(`path`,{d:`M14.3868 10.4891C12.4378 10.4891 10.8578 12.069 10.8578 14.018C10.8578 15.967 12.4378 17.547 14.3868 17.547C16.3358 17.547 17.9157 15.967 17.9157 14.018C17.9157 12.069 16.3358 10.4891 14.3868 10.4891Z`,fill:t}),(0,G.jsx)(`path`,{d:`M2.91772 12.4741C2.91772 11.4996 3.7077 10.7097 4.68219 10.7097H7.77002C8.74451 10.7097 9.53449 11.4996 9.53449 12.4741V15.5619C9.53449 16.5364 8.74451 17.3264 7.77002 17.3264H4.68219C3.7077 17.3264 2.91772 16.5364 2.91772 15.5619V12.4741Z`,fill:t})]}),Ic=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V9.16667H6.15164C6.78292 9.16667 7.36003 9.52333 7.64235 10.088L8.33333 11.4699L10.9213 6.29399C11.0625 6.01167 11.351 5.83333 11.6667 5.83333C11.9823 5.83333 12.2708 6.01167 12.412 6.29399L13.8483 9.16667H17.5V5C17.5 3.61929 16.3807 2.5 15 2.5H5Z`,fill:t}),(0,G.jsx)(`path`,{d:`M2.5 15.0002C2.5 16.3809 3.61929 17.5002 5 17.5002H15C16.3807 17.5002 17.5 16.3809 17.5 15.0002V10.8335H13.8483C13.2171 10.8335 12.64 10.4769 12.3577 9.91219L11.6667 8.53027L9.07867 13.7062C8.9375 13.9885 8.649 14.1669 8.33333 14.1669C8.01769 14.1669 7.72913 13.9885 7.58797 13.7062L6.15164 10.8335H2.5V15.0002Z`,fill:t})]}),Lc=Ic,Rc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M8.15431 2.65438C8.56571 2.03728 9.25829 1.66663 9.99996 1.66663C10.7416 1.66663 11.4342 2.03728 11.8456 2.65438L12.3091 3.34961C12.4967 3.63099 12.8389 3.76687 13.1684 3.69083L13.7401 3.55888C14.4968 3.38427 15.29 3.61176 15.839 4.16085C16.3881 4.70993 16.6156 5.50315 16.441 6.25979L16.3091 6.83155C16.233 7.16107 16.369 7.50324 16.6503 7.69083L17.3455 8.15431C17.9626 8.56571 18.3333 9.25829 18.3333 9.99996C18.3333 10.7416 17.9626 11.4342 17.3455 11.8456L16.6503 12.3091C16.369 12.4967 16.233 12.8389 16.3091 13.1684L16.441 13.7401C16.6156 14.4968 16.3881 15.29 15.839 15.839C15.29 16.3881 14.4968 16.6156 13.7401 16.441L13.1684 16.3091C12.8389 16.233 12.4967 16.369 12.3091 16.6503L11.8456 17.3455C11.4342 17.9626 10.7416 18.3333 9.99996 18.3333C9.25829 18.3333 8.56571 17.9626 8.15431 17.3455L7.69083 16.6503C7.50324 16.369 7.16107 16.233 6.83155 16.3091L6.25979 16.441C5.50315 16.6156 4.70993 16.3881 4.16085 15.839C3.61176 15.29 3.38427 14.4968 3.55888 13.7401L3.69083 13.1684C3.76687 12.8389 3.63099 12.4967 3.34961 12.3091L2.65438 11.8456C2.03728 11.4342 1.66663 10.7416 1.66663 9.99996C1.66663 9.25829 2.03729 8.56571 2.65438 8.15431L3.34961 7.69083C3.63099 7.50324 3.76687 7.16107 3.69083 6.83155L3.55888 6.25979C3.38427 5.50315 3.61176 4.70993 4.16085 4.16085C4.70993 3.61176 5.50315 3.38427 6.25979 3.55888L6.83155 3.69083C7.16107 3.76687 7.50324 3.63099 7.69083 3.34961L8.15431 2.65438ZM7.08329 9.99996C7.08329 8.38913 8.38913 7.08329 9.99996 7.08329C11.6108 7.08329 12.9166 8.38913 12.9166 9.99996C12.9166 11.6108 11.6108 12.9166 9.99996 12.9166C8.38913 12.9166 7.08329 11.6108 7.08329 9.99996Z`,fill:t})}),zc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{d:`M10.042 1.25C13.1599 1.25 16.5705 3.15864 16.8887 7.74414C17.8535 7.92625 18.584 8.77424 18.584 9.79199V12.083C18.584 13.0385 17.9405 13.8442 17.0635 14.0898C16.723 16.1403 15.021 17.7296 12.918 17.9004C12.6069 18.414 12.0447 18.7588 11.4004 18.7588C10.4201 18.7586 9.62502 17.9638 9.625 16.9834C9.625 16.003 10.4201 15.2082 11.4004 15.208C12.1044 15.208 12.711 15.6188 12.998 16.2129C14.1147 16.0374 15.0214 15.2301 15.3379 14.167H15.25C14.7899 14.1668 14.417 13.7931 14.417 13.333V8.54199C14.417 8.09663 14.7665 7.733 15.2061 7.70996C14.8758 4.14899 12.3202 2.91699 10.042 2.91699C7.7638 2.91699 5.20819 4.14899 4.87793 7.70996C5.31756 7.73299 5.66699 8.09663 5.66699 8.54199V13.333C5.66699 13.7931 5.29407 14.1668 4.83398 14.167H3.58398C2.43339 14.167 1.5 13.2336 1.5 12.083V9.79199C1.5 8.77424 2.23051 7.92625 3.19531 7.74414C3.51351 3.15864 6.92412 1.25 10.042 1.25Z`,fill:t})}),Bc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M1.66663 7.5C1.66663 4.73857 3.9052 2.5 6.66663 2.5H13.3333C16.0947 2.5 18.3333 4.73857 18.3333 7.5V12.5C18.3333 15.2614 16.0947 17.5 13.3333 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V7.5ZM6.66663 11.0417C6.09133 11.0417 5.62496 10.5753 5.62496 10C5.62496 9.42467 6.09133 8.95833 6.66663 8.95833C7.24193 8.95833 7.70829 9.42467 7.70829 10C7.70829 10.5753 7.24193 11.0417 6.66663 11.0417ZM9.99996 11.0417C9.42463 11.0417 8.95829 10.5753 8.95829 10C8.95829 9.42467 9.42463 8.95833 9.99996 8.95833C10.5753 8.95833 11.0416 9.42467 11.0416 10C11.0416 10.5753 10.5753 11.0417 9.99996 11.0417ZM12.2916 10C12.2916 10.5753 12.758 11.0417 13.3333 11.0417C13.9086 11.0417 14.375 10.5753 14.375 10C14.375 9.42467 13.9086 8.95833 13.3333 8.95833C12.758 8.95833 12.2916 9.42467 12.2916 10Z`,fill:t})}),Vc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{d:`M5.00049 2.5C3.65146 2.5 2.42543 3.61963 2.6096 5.0996C3.4076 11.5121 8.48838 16.5929 14.9009 17.3909C16.3809 17.5751 17.5005 16.349 17.5005 15V13.9068C17.5005 12.8027 16.7763 11.8294 15.7189 11.5122L14.4434 11.1295C13.6138 10.8807 12.7146 11.1073 12.1022 11.7198C11.8801 11.9419 11.5945 11.9558 11.4134 11.8438C10.0917 11.026 8.97446 9.90875 8.15671 8.58717C8.04462 8.406 8.0586 8.12039 8.28074 7.89826C8.89313 7.28586 9.11988 6.38666 8.87096 5.55713L8.48829 4.28163C8.17109 3.22418 7.19779 2.5 6.09377 2.5H5.00049Z`,fill:t})}),Hc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 1.66669C6.75502 1.66669 4.08007 4.21124 3.91802 7.45217L3.76851 10.4424C3.76275 10.5576 3.73314 10.6704 3.68157 10.7735L2.65915 12.8184C2.55449 13.0277 2.5 13.2584 2.5 13.4925C2.5 14.3251 3.17493 15 4.00752 15H5.91668C6.30274 16.9019 7.9842 18.3334 10 18.3334C12.0158 18.3334 13.6972 16.9019 14.0833 15H15.9925C16.8251 15 17.5 14.3251 17.5 13.4925C17.5 13.2584 17.4455 13.0277 17.3408 12.8184L16.3184 10.7735C16.2668 10.6704 16.2373 10.5576 16.2315 10.4424L16.082 7.45217C15.9199 4.21124 13.245 1.66669 10 1.66669ZM10 16.6667C8.9115 16.6667 7.98545 15.971 7.64226 15H12.3577C12.0146 15.971 11.0885 16.6667 10 16.6667Z`,fill:t})}),Uc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{d:`M9.16602 2.5C12.8477 2.5 15.8327 5.48442 15.833 9.16602C15.833 10.7064 15.309 12.1241 14.4316 13.2529L17.2559 16.0771C17.5812 16.4026 17.5812 16.9305 17.2559 17.2559C16.9305 17.5813 16.4026 17.5812 16.0771 17.2559L13.2529 14.4316C12.1241 15.309 10.7065 15.833 9.16602 15.833C5.48441 15.8327 2.5 12.8477 2.5 9.16602C2.50036 5.48463 5.48463 2.50034 9.16602 2.5ZM9.16602 4.16602C6.4051 4.16636 4.16637 6.40511 4.16602 9.16602C4.16602 11.9272 6.40488 14.1657 9.16602 14.166C11.9274 14.166 14.166 11.9274 14.166 9.16602C14.1657 6.4049 11.9272 4.16602 9.16602 4.16602Z`,fill:t})}),Wc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M3.54748 4.72616C2.37192 6.16272 1.66663 7.99904 1.66663 10.0001C1.66663 12.0012 2.37194 13.8375 3.54754 15.2741L6.82503 11.9966C6.46073 11.4185 6.24996 10.7339 6.24996 10.0001C6.24996 9.26633 6.46071 8.58175 6.82498 8.00366L3.54748 4.72616Z`,fill:t}),(0,G.jsx)(`path`,{d:`M4.72599 3.54765L8.00348 6.82514C8.58163 6.46085 9.26613 6.25008 9.99996 6.25008C10.7338 6.25008 11.4184 6.46085 11.9965 6.82515L15.274 3.54766C13.8374 2.37206 12.001 1.66675 9.99996 1.66675C7.99888 1.66675 6.16255 2.37206 4.72599 3.54765Z`,fill:t}),(0,G.jsx)(`path`,{d:`M16.4525 4.72618L13.175 8.00368C13.5392 8.58175 13.75 9.26633 13.75 10.0001C13.75 10.7339 13.5392 11.4184 13.1749 11.9966L16.4524 15.2741C17.628 13.8375 18.3333 12.0012 18.3333 10.0001C18.3333 7.99904 17.628 6.16273 16.4525 4.72618Z`,fill:t}),(0,G.jsx)(`path`,{d:`M15.2739 16.4526L11.9964 13.1751C11.4183 13.5393 10.7337 13.7501 9.99996 13.7501C9.26621 13.7501 8.58163 13.5393 8.00356 13.1751L4.72606 16.4526C6.16261 17.6282 7.99892 18.3334 9.99996 18.3334C12.001 18.3334 13.8373 17.6281 15.2739 16.4526Z`,fill:t})]}),Gc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M15.835 2.5C17.2157 2.5 18.335 3.61929 18.335 5V10C18.335 11.3807 17.2157 12.5 15.835 12.5H15.0017V13.3333C15.0017 14.7141 13.8824 15.8333 12.5017 15.8333H8.96763L5.40638 17.8118C5.14827 17.9552 4.83354 17.9513 4.57907 17.8016C4.32458 17.6518 4.16833 17.3786 4.16833 17.0833V15.8333C2.78763 15.8333 1.66833 14.7141 1.66833 13.3333V8.33333C1.66833 6.95262 2.78763 5.83333 4.16833 5.83333H5.00167V5C5.00167 3.61929 6.12096 2.5 7.50167 2.5H15.835ZM6.66833 5.83333H12.5017C13.8824 5.83333 15.0017 6.95262 15.0017 8.33333V10.8333H15.835C16.2952 10.8333 16.6684 10.4602 16.6684 10V5C16.6684 4.53977 16.2952 4.16667 15.835 4.16667H7.50167C7.04144 4.16667 6.66833 4.53977 6.66833 5V5.83333Z`,fill:t})}),Kc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M11.4645 2.49975H5.75951C5.32024 2.49974 4.94124 2.49972 4.62911 2.52522C4.29965 2.55215 3.97197 2.61157 3.65665 2.77224C3.18625 3.01192 2.80379 3.39437 2.56411 3.86477C2.40345 4.18009 2.34402 4.50777 2.3171 4.83723C2.2916 5.14936 2.29161 5.52831 2.29163 5.96756V14.0319C2.29161 14.4711 2.2916 14.8501 2.3171 15.1623C2.34402 15.4917 2.40345 15.8194 2.56411 16.1347C2.80379 16.6051 3.18625 16.9875 3.65665 17.2273C3.97197 17.388 4.29965 17.4474 4.62911 17.4743C4.94124 17.4998 5.32021 17.4998 5.75949 17.4997H13.8238C14.263 17.4998 14.642 17.4998 14.9541 17.4743C15.2836 17.4474 15.6113 17.388 15.9266 17.2273C16.397 16.9875 16.7795 16.6051 17.0191 16.1347C17.1798 15.8194 17.2392 15.4917 17.2661 15.1623C17.2916 14.8501 17.2916 14.4711 17.2916 14.0319V8.74363L15.101 10.9342C14.6322 11.403 13.9964 11.6664 13.3333 11.6664H10.8333C9.45254 11.6664 8.33329 10.5471 8.33329 9.16638V6.66641C8.33329 6.00337 8.59671 5.36749 9.06554 4.89865L11.4645 2.49975Z`,fill:t}),(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M16.4225 3.43418C16.0971 3.10875 15.5695 3.10875 15.244 3.43418L11.6666 7.0116V8.33308H12.9881L16.5655 4.75567C16.891 4.43023 16.891 3.9026 16.5655 3.57716L16.4225 3.43418ZM14.0655 2.25567C15.0419 1.27936 16.6247 1.27936 17.601 2.25567L17.744 2.39865C18.7204 3.37495 18.7204 4.95787 17.744 5.93418L13.9225 9.75563C13.7663 9.91196 13.5543 9.99971 13.3333 9.99971H10.8333C10.373 9.99971 9.99996 9.62663 9.99996 9.16638V6.66641C9.99996 6.44541 10.0878 6.23344 10.244 6.07716L14.0655 2.25567Z`,fill:t})]}),q=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{d:`M18.333 7.91675C18.333 11.3685 15.5349 14.1667 12.083 14.1667C11.222 14.1667 10.4018 13.9927 9.65537 13.6777L5.4312 17.9019C4.61761 18.7155 3.29851 18.7155 2.48492 17.9019L2.09786 17.5149C1.28427 16.7013 1.28427 15.3822 2.09786 14.5686L6.32206 10.3444C6.00715 9.59808 5.83306 8.77775 5.83306 7.91675C5.83306 4.46497 8.63129 1.66675 12.083 1.66675C12.7714 1.66675 13.4338 1.77803 14.0531 1.98358C14.581 2.15879 14.6789 2.82091 14.2855 3.21425L11.6664 5.83342C10.976 6.52377 10.976 7.64306 11.6664 8.33342C12.3567 9.02375 13.476 9.02375 14.1664 8.33342L16.7855 5.71425C17.1789 5.32091 17.841 5.41873 18.0162 5.94666C18.2218 6.56603 18.333 7.2284 18.333 7.91675Z`,fill:t})}),qc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M16.6667 4.58329C16.6667 3.95522 16.308 3.46951 15.9126 3.13565C15.5134 2.79853 14.985 2.53248 14.4051 2.32537C13.238 1.90856 11.6805 1.66663 10 1.66663C8.31955 1.66663 6.76204 1.90856 5.59497 2.32537C5.01507 2.53248 4.48675 2.79853 4.08749 3.13565C3.69211 3.46951 3.33337 3.95522 3.33337 4.58329V8.33329C3.33337 8.96138 3.69211 9.44704 4.08749 9.78096C4.48675 10.118 5.01507 10.3841 5.59497 10.5912C6.76204 11.008 8.31955 11.25 10 11.25C11.6805 11.25 13.238 11.008 14.4051 10.5912C14.985 10.3841 15.5134 10.118 15.9126 9.78096C16.308 9.44704 16.6667 8.96138 16.6667 8.33329V4.58329ZM5.16275 4.40908C5.05872 4.49691 5.01938 4.55563 5.00532 4.58329C5.01938 4.61095 5.05872 4.66968 5.16275 4.75751C5.35386 4.91888 5.67982 5.10175 6.15553 5.27165C7.09971 5.60885 8.45887 5.83329 10 5.83329C11.5412 5.83329 12.9004 5.60885 13.8445 5.27165C14.3203 5.10175 14.6462 4.91888 14.8374 4.75751C14.9414 4.66968 14.9807 4.61095 14.9948 4.58329C14.9807 4.55563 14.9414 4.49691 14.8374 4.40908C14.6462 4.24771 14.3203 4.06483 13.8445 3.89493C12.9004 3.55773 11.5412 3.33329 10 3.33329C8.45887 3.33329 7.09971 3.55773 6.15553 3.89493C5.67982 4.06483 5.35386 4.24771 5.16275 4.40908Z`,fill:t}),(0,G.jsx)(`path`,{d:`M14.9657 12.1608C15.533 11.9581 16.1323 11.6834 16.6667 11.3031V15.4166C16.6667 16.0447 16.308 16.5304 15.9126 16.8643C15.5134 17.2014 14.985 17.4675 14.4051 17.6745C13.238 18.0914 11.6805 18.3333 10 18.3333C8.31955 18.3333 6.76204 18.0914 5.59497 17.6745C5.01507 17.4675 4.48675 17.2014 4.08749 16.8643C3.69211 16.5304 3.33337 16.0447 3.33337 15.4166V11.3031C3.86779 11.6834 4.46704 11.9581 5.03441 12.1608C6.42439 12.6572 8.18024 12.9166 10 12.9166C11.8199 12.9166 13.5757 12.6572 14.9657 12.1608Z`,fill:t})]}),Jc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M2.50208 4.99963C2.50208 3.62007 3.62043 2.50171 4.99999 2.50171H6.66666C8.04623 2.50171 9.16458 3.62007 9.16458 4.99963V6.66629C9.16458 8.04586 8.04623 9.16425 6.66666 9.16425H4.99999C3.62043 9.16425 2.50208 8.04586 2.50208 6.66629V4.99963Z`,fill:t}),(0,G.jsx)(`path`,{d:`M2.50208 13.333C2.50208 11.9534 3.62043 10.8351 4.99999 10.8351H6.66666C8.04623 10.8351 9.16458 11.9534 9.16458 13.333V14.9997C9.16458 16.3792 8.04623 17.4976 6.66666 17.4976H4.99999C3.62043 17.4976 2.50208 16.3792 2.50208 14.9997V13.333Z`,fill:t}),(0,G.jsx)(`path`,{d:`M10.8354 4.99963C10.8354 3.62007 11.9537 2.50171 13.3333 2.50171H15C16.3796 2.50171 17.4979 3.62007 17.4979 4.99963V6.66629C17.4979 8.04586 16.3796 9.16425 15 9.16425H13.3333C11.9537 9.16425 10.8354 8.04586 10.8354 6.66629V4.99963Z`,fill:t}),(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M14.1667 10.8351C12.3268 10.8351 10.8354 12.3265 10.8354 14.1663C10.8354 16.0061 12.3268 17.4976 14.1667 17.4976C16.0065 17.4976 17.4979 16.0061 17.4979 14.1663C17.4979 12.3265 16.0065 10.8351 14.1667 10.8351ZM12.4979 14.1663C12.4979 13.2447 13.2451 12.4976 14.1667 12.4976C15.0883 12.4976 15.8354 13.2447 15.8354 14.1663C15.8354 15.0879 15.0883 15.8351 14.1667 15.8351C13.2451 15.8351 12.4979 15.0879 12.4979 14.1663Z`,fill:t})]}),Yc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{d:`M8.33337 2.50008C8.33337 2.03985 7.96027 1.66675 7.50004 1.66675C7.03981 1.66675 6.66671 2.03985 6.66671 2.50008V5.00008H5.83337C4.45267 5.00008 3.33337 6.11937 3.33337 7.50008V11.6667C3.33337 13.9679 5.19886 15.8334 7.50004 15.8334H9.16671V17.5001C9.16671 17.9603 9.53979 18.3334 10 18.3334C10.4603 18.3334 10.8334 17.9603 10.8334 17.5001V15.8334H12.5C14.8012 15.8334 16.6667 13.9679 16.6667 11.6667V7.50008C16.6667 6.11937 15.5475 5.00008 14.1667 5.00008H13.3334V2.50008C13.3334 2.03985 12.9603 1.66675 12.5 1.66675C12.0398 1.66675 11.6667 2.03985 11.6667 2.50008V5.00008H8.33337V2.50008Z`,fill:t})}),Xc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M5.96788 2.5H9.16667V7.5H2.5V5.96788C2.49998 5.5286 2.49998 5.14962 2.52548 4.83748C2.55239 4.50803 2.61183 4.18034 2.77248 3.86503C3.01217 3.39462 3.39462 3.01217 3.86503 2.77248C4.18034 2.61183 4.50803 2.55239 4.83748 2.52548C5.14962 2.49998 5.52861 2.49998 5.96788 2.5Z`,fill:t}),(0,G.jsx)(`path`,{d:`M2.5 9.16667V14.0321C2.49998 14.4714 2.49998 14.8504 2.52548 15.1625C2.55239 15.492 2.61183 15.8197 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.18034 17.3882 4.50803 17.4476 4.83748 17.4745C5.14962 17.5 5.52858 17.5 5.96787 17.5H9.16667V9.16667H2.5Z`,fill:t}),(0,G.jsx)(`path`,{d:`M10.8333 17.5H14.0322C14.4714 17.5 14.8504 17.5 15.1625 17.4745C15.492 17.4476 15.8197 17.3882 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.3882 15.8197 17.4476 15.492 17.4745 15.1625C17.5 14.8504 17.5 14.4714 17.5 14.0322V12.5H10.8333V17.5Z`,fill:t}),(0,G.jsx)(`path`,{d:`M17.5 10.8333V5.96787C17.5 5.52858 17.5 5.14962 17.4745 4.83748C17.4476 4.50803 17.3882 4.18034 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.8197 2.61183 15.492 2.55239 15.1625 2.52548C14.8504 2.49998 14.4714 2.49998 14.0322 2.5H10.8333V10.8333H17.5Z`,fill:t})]}),Zc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M4.66524 6.80408C5.57167 4.76038 7.61827 3.33337 10 3.33337C12.9643 3.33337 15.412 5.54432 15.7844 8.40704C17.7106 8.77396 19.1667 10.467 19.1667 12.5C19.1667 14.8012 17.3012 16.6667 15 16.6667H5.83337C3.07195 16.6667 0.833374 14.4281 0.833374 11.6667C0.833374 9.30721 2.46705 7.33047 4.66524 6.80408ZM9.16671 7.50004C9.16671 7.03981 9.53979 6.66671 10 6.66671C10.4603 6.66671 10.8334 7.03981 10.8334 7.50004V10.9049L11.4941 10.2441C11.8195 9.91871 12.3472 9.91871 12.6726 10.2441C12.998 10.5695 12.998 11.0972 12.6726 11.4226L10.5893 13.506C10.2639 13.8314 9.73621 13.8314 9.41079 13.506L7.32745 11.4226C7.00202 11.0972 7.00202 10.5695 7.32745 10.2441C7.65289 9.91871 8.18052 9.91871 8.50596 10.2441L9.16671 10.9049V7.50004Z`,fill:t})}),Qc=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.96788 2.5H14.0321C14.4714 2.49998 14.8504 2.49998 15.1625 2.52548C15.492 2.55239 15.8197 2.61183 16.135 2.77248C16.6054 3.01217 16.9878 3.39463 17.2275 3.86503C17.3882 4.18034 17.4476 4.50803 17.4745 4.83748C17.5 5.14962 17.5 5.52858 17.5 5.96787V14.0322C17.5 14.4714 17.5 14.8504 17.4745 15.1625C17.4476 15.492 17.3882 15.8197 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.8197 17.3882 15.492 17.4476 15.1625 17.4745C14.8504 17.5 14.4714 17.5 14.0322 17.5H5.96787C5.52858 17.5 5.14962 17.5 4.83748 17.4745C4.50803 17.4476 4.18034 17.3882 3.86503 17.2275C3.39463 16.9878 3.01217 16.6054 2.77248 16.135C2.61183 15.8197 2.55239 15.492 2.52548 15.1625C2.49998 14.8504 2.49998 14.4714 2.5 14.0322V5.96785C2.49998 5.52859 2.49998 5.14961 2.52548 4.83748C2.55239 4.50803 2.61183 4.18034 2.77248 3.86503C3.01217 3.39463 3.39463 3.01217 3.86503 2.77248C4.18034 2.61183 4.50803 2.55239 4.83748 2.52548C5.14961 2.49998 5.52862 2.49998 5.96788 2.5ZM13.5033 8.71425C13.8287 8.38883 13.8287 7.86119 13.5033 7.53575C13.1778 7.21032 12.6502 7.21032 12.3248 7.53575L9.164 10.6965L8.08656 9.61908C7.76112 9.29367 7.23348 9.29367 6.90805 9.61908C6.58261 9.9445 6.58261 10.4722 6.90805 10.7976L8.57475 12.4643C8.90017 12.7897 9.42775 12.7897 9.75325 12.4643L13.5033 8.71425Z`,fill:t})}),$c=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M10.3448 2.57469C10.1257 2.4751 9.87425 2.4751 9.65517 2.57469L0.488497 6.74136C0.191002 6.87659 0 7.17322 0 7.5C0 7.82679 0.191002 8.12342 0.488497 8.25864L9.65517 12.4253C9.87425 12.5249 10.1257 12.5249 10.3448 12.4253L18.3333 8.79417V13.3333C18.3333 13.7936 18.7064 14.1667 19.1667 14.1667C19.6269 14.1667 20 13.7936 20 13.3333V7.5C20 7.17322 19.809 6.87659 19.5115 6.74136L10.3448 2.57469Z`,fill:t}),(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M3.75 10.6675V12.9343C3.75 13.8483 4.24882 14.6894 5.05084 15.1278L8.80083 17.1778C9.54808 17.5863 10.4518 17.5863 11.1991 17.1778L14.9492 15.1278C15.7512 14.6894 16.25 13.8483 16.25 12.9343V10.6675L10.5673 13.5613C10.2108 13.7428 9.78917 13.7428 9.43275 13.5613L3.75 10.6675Z`,fill:t})]}),el=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M8.63396 6.77702C8.26669 6.70461 7.88747 6.66671 7.49996 6.66671C4.2783 6.66671 1.66663 9.27837 1.66663 12.5C1.66663 15.7217 4.2783 18.3334 7.49996 18.3334H13.75C16.2813 18.3334 18.3333 16.2814 18.3333 13.75C18.3333 12.1767 17.5407 10.7899 16.3349 9.96487C16.5484 9.46346 16.6666 8.91171 16.6666 8.33337C16.6666 6.03219 14.8011 4.16671 12.5 4.16671C10.7486 4.16671 9.25054 5.24667 8.63396 6.77702ZM10.2082 7.33233C11.0463 7.77232 11.7634 8.40971 12.2984 9.18221C12.356 9.26538 12.5053 9.33512 12.6575 9.29796C13.0084 9.21204 13.3745 9.16671 13.75 9.16671C14.1145 9.16671 14.4696 9.20937 14.8105 9.29021C14.9326 8.99587 15 8.67296 15 8.33337C15 6.95267 13.8807 5.83337 12.5 5.83337C11.4756 5.83337 10.5942 6.45002 10.2082 7.33233Z`,fill:t}),(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M12.5 0.833374C12.9602 0.833374 13.3333 1.20647 13.3333 1.66671V2.08337C13.3333 2.54361 12.9602 2.91671 12.5 2.91671C12.0397 2.91671 11.6666 2.54361 11.6666 2.08337V1.66671C11.6666 1.20647 12.0397 0.833374 12.5 0.833374ZM7.49013 2.908C7.81557 2.58256 8.34321 2.58256 8.66863 2.908L8.96329 3.20262C9.28871 3.52807 9.28871 4.0557 8.96329 4.38114C8.63779 4.70657 8.11019 4.70657 7.78476 4.38114L7.49013 4.08651C7.16469 3.76107 7.16469 3.23343 7.49013 2.908ZM17.5065 2.908C17.832 3.23343 17.832 3.76107 17.5065 4.08651L17.2119 4.38114C16.8865 4.70657 16.3588 4.70657 16.0334 4.38113C15.708 4.0557 15.708 3.52807 16.0334 3.20262L16.328 2.908C16.6535 2.58256 17.1811 2.58256 17.5065 2.908ZM17.9166 7.91671C17.9166 7.45647 18.2897 7.08337 18.75 7.08337H19.1666C19.6269 7.08337 20 7.45647 20 7.91671C20 8.37696 19.6269 8.75004 19.1666 8.75004H18.75C18.2897 8.75004 17.9166 8.37696 17.9166 7.91671Z`,fill:t})]}),tl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M6.66667 1.66669C7.1269 1.66669 7.5 2.03979 7.5 2.50002V3.33335H12.5V2.50002C12.5 2.03979 12.8731 1.66669 13.3333 1.66669C13.7936 1.66669 14.1667 2.03979 14.1667 2.50002V3.33335H15C16.3807 3.33335 17.5 4.45265 17.5 5.83335V7.50002H2.5V5.83335C2.5 4.45265 3.61929 3.33335 5 3.33335H5.83333V2.50002C5.83333 2.03979 6.20643 1.66669 6.66667 1.66669Z`,fill:t}),(0,G.jsx)(`path`,{d:`M2.5 15V9.16669H17.5V15C17.5 16.3808 16.3807 17.5 15 17.5H5C3.61929 17.5 2.5 16.3808 2.5 15Z`,fill:t})]}),nl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 2C14.4184 2 18 5.58158 18 10C18 14.4185 14.4185 18 10 18C5.58155 18 2 14.4184 2 10C2.00004 5.58158 5.58158 2 10 2ZM11.1826 10.5996C10.7724 10.5997 10.4286 10.9104 10.3867 11.3184L10.2412 12.748C10.2155 13.0006 10.3111 13.2511 10.499 13.4219L11.708 14.5195C11.9013 14.6954 11.9963 14.9547 11.9629 15.2139L11.8633 15.9824C11.857 16.0309 11.8546 16.079 11.8564 16.125C12.9968 15.7798 14.0019 15.1254 14.7754 14.2588L14.4102 12.3955C14.3727 12.2051 14.2669 12.0345 14.1133 11.916L12.6221 10.7666C12.4823 10.6588 12.3103 10.5998 12.1338 10.5996H11.1826ZM10 3.59961C7.64387 3.59978 5.58546 4.87352 4.47461 6.76953L4.53809 8.50586C4.54675 8.74249 4.66067 8.96314 4.84766 9.1084L6.89062 10.6953C7.39238 11.0847 8.12629 10.7619 8.17871 10.1289L8.30078 8.6543C8.33513 8.23947 8.68239 7.91992 9.09863 7.91992H9.79102C10.123 7.91992 10.4219 7.71451 10.54 7.4043L10.8574 6.56934C10.9192 6.40745 11.0321 6.26912 11.1787 6.17676L12.4541 5.37402C12.9023 5.09139 12.9312 4.50641 12.624 4.16211C11.8233 3.80168 10.9351 3.59965 10 3.59961Z`,fill:t})}),rl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M2.74408 6.91058C3.06952 6.58515 3.59715 6.58515 3.92259 6.91058L9.41075 12.3988C9.73617 12.7242 10.2638 12.7242 10.5893 12.3988L16.0774 6.91058C16.4028 6.58515 16.9305 6.58515 17.2559 6.91058C17.5813 7.23602 17.5813 7.76365 17.2559 8.0891L11.7677 13.5773C10.7915 14.5536 9.20858 14.5536 8.23225 13.5773L2.74408 8.0891C2.41864 7.76365 2.41864 7.23602 2.74408 6.91058Z`,fill:t})}),il=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M7.5 4.16667V15.8333H15C15.4602 15.8333 15.8333 15.4602 15.8333 15V5C15.8333 4.53977 15.4602 4.16667 15 4.16667H7.5ZM2.5 5C2.5 3.61929 3.61929 2.5 5 2.5H15C16.3807 2.5 17.5 3.61929 17.5 5V15C17.5 16.3807 16.3807 17.5 15 17.5H5C3.61929 17.5 2.5 16.3807 2.5 15V5Z`,fill:t})}),al=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{d:`M9.16638 16.6663V10.8333H3.33337C2.87325 10.8333 2.50054 10.4603 2.50037 10.0002C2.50037 9.54001 2.87314 9.16626 3.33337 9.16626H9.16638V3.33325C9.16638 2.87301 9.54013 2.50024 10.0004 2.50024C10.4605 2.50042 10.8334 2.87312 10.8334 3.33325V9.16626H16.6664C17.1266 9.16626 17.5004 9.54001 17.5004 10.0002C17.5002 10.4603 17.1265 10.8333 16.6664 10.8333H10.8334V16.6663C10.8334 17.1264 10.4605 17.5001 10.0004 17.5002C9.54013 17.5002 9.16638 17.1265 9.16638 16.6663Z`,fill:t})}),ol=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M9.44231 6.90365V16.1985H1.75L9.44231 6.90365ZM9.44231 3.57031C9.44231 5.6857 7.71154 7.41647 5.59615 7.41647C3.48077 7.41647 1.75 5.6857 1.75 3.57031H9.44231ZM10.7244 16.1985C10.7244 14.0831 12.4551 12.3524 14.5705 12.3524C16.6859 12.3524 18.4167 14.0831 18.4167 16.1985H10.7244ZM10.7244 12.8652V3.57031H18.4167L10.7244 12.8652Z`,fill:t})}),sl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.83337 1.66669C4.45267 1.66669 3.33337 2.78598 3.33337 4.16669V15.8334C3.33337 17.2141 4.45267 18.3334 5.83337 18.3334H14.1667C15.5475 18.3334 16.6667 17.2141 16.6667 15.8334V4.16669C16.6667 2.78598 15.5475 1.66669 14.1667 1.66669H5.83337ZM5.00004 15.8334C5.00004 16.2936 5.37314 16.6667 5.83337 16.6667H14.1667C14.627 16.6667 15 16.2936 15 15.8334V14.8578C14.7394 14.9499 14.4589 15 14.1667 15H5.83337C5.37314 15 5.00004 15.3731 5.00004 15.8334ZM7.50004 5.00002C7.03981 5.00002 6.66671 5.37312 6.66671 5.83335C6.66671 6.29359 7.03981 6.66669 7.50004 6.66669H12.5C12.9603 6.66669 13.3334 6.29359 13.3334 5.83335C13.3334 5.37312 12.9603 5.00002 12.5 5.00002H7.50004ZM6.66671 9.16669C6.66671 8.70644 7.03981 8.33335 7.50004 8.33335H10C10.4603 8.33335 10.8334 8.70644 10.8334 9.16669C10.8334 9.62694 10.4603 10 10 10H7.50004C7.03981 10 6.66671 9.62694 6.66671 9.16669Z`,fill:t})}),cl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10.8333 2.50002C10.8333 2.03979 10.4602 1.66669 10 1.66669C9.53975 1.66669 9.16667 2.03979 9.16667 2.50002V3.33335H4.58333C3.20262 3.33335 2.08333 4.45265 2.08333 5.83335V6.88965C1.58517 7.17783 1.25 7.71645 1.25 8.33335C1.25 8.95027 1.58517 9.48885 2.08333 9.77702V13.3334C2.08333 15.1743 3.57572 16.6667 5.41667 16.6667H14.5833C16.4242 16.6667 17.9167 15.1743 17.9167 13.3334V9.77702C18.4148 9.48885 18.75 8.95027 18.75 8.33335C18.75 7.71645 18.4148 7.17783 17.9167 6.88965V5.83335C17.9167 4.45265 16.7974 3.33335 15.4167 3.33335H10.8333V2.50002ZM7.08333 7.08335C6.39297 7.08335 5.83333 7.643 5.83333 8.33335C5.83333 9.02369 6.39297 9.58335 7.08333 9.58335C7.77369 9.58335 8.33333 9.02369 8.33333 8.33335C8.33333 7.643 7.77369 7.08335 7.08333 7.08335ZM12.9167 7.08335C12.2263 7.08335 11.6667 7.643 11.6667 8.33335C11.6667 9.02369 12.2263 9.58335 12.9167 9.58335C13.607 9.58335 14.1667 9.02369 14.1667 8.33335C14.1667 7.643 13.607 7.08335 12.9167 7.08335ZM8.33333 11.6667C7.8731 11.6667 7.5 12.0398 7.5 12.5C7.5 12.9603 7.8731 13.3334 8.33333 13.3334H11.6667C12.1269 13.3334 12.5 12.9603 12.5 12.5C12.5 12.0398 12.1269 11.6667 11.6667 11.6667H8.33333Z`,fill:t})}),ll=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M9.30825 2.5C8.61792 2.5 8.05827 3.05964 8.05827 3.75V16.2508C8.05827 16.9412 8.61792 17.5008 9.30825 17.5008H10.6999C11.3903 17.5008 11.9499 16.9412 11.9499 16.2508V3.75C11.9499 3.05964 11.3903 2.5 10.6999 2.5H9.30825Z`,fill:t}),(0,G.jsx)(`path`,{d:`M3.75 10.8342C3.05964 10.8342 2.5 11.3938 2.5 12.0842V16.2508C2.5 16.9412 3.05964 17.5008 3.75 17.5008H5.14167C5.83203 17.5008 6.39167 16.9412 6.39167 16.2508V12.0842C6.39167 11.3938 5.83203 10.8342 5.14167 10.8342H3.75Z`,fill:t}),(0,G.jsx)(`path`,{d:`M13.6165 7.91667C13.6165 7.22631 14.1762 6.66667 14.8665 6.66667H16.2582C16.9486 6.66667 17.5082 7.22631 17.5082 7.91667V16.2508C17.5082 16.9412 16.9486 17.5008 16.2582 17.5008H14.8665C14.1762 17.5008 13.6165 16.9412 13.6165 16.2508V7.91667Z`,fill:t})]}),ul=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V15C2.5 16.3807 3.61929 17.5 5 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V5C17.5 3.61929 16.3807 2.5 15 2.5H5ZM4.16667 5C4.16667 4.53977 4.53977 4.16667 5 4.16667H15C15.4602 4.16667 15.8333 4.53977 15.8333 5V5.83333H4.16667V5ZM7.70833 10C7.70833 10.5753 7.24197 11.0417 6.66667 11.0417C6.09137 11.0417 5.625 10.5753 5.625 10C5.625 9.42467 6.09137 8.95833 6.66667 8.95833C7.24197 8.95833 7.70833 9.42467 7.70833 10ZM7.70833 13.3333C7.70833 13.9087 7.24197 14.375 6.66667 14.375C6.09137 14.375 5.625 13.9087 5.625 13.3333C5.625 12.758 6.09137 12.2917 6.66667 12.2917C7.24197 12.2917 7.70833 12.758 7.70833 13.3333ZM10 11.0417C10.5753 11.0417 11.0417 10.5753 11.0417 10C11.0417 9.42467 10.5753 8.95833 10 8.95833C9.42467 8.95833 8.95833 9.42467 8.95833 10C8.95833 10.5753 9.42467 11.0417 10 11.0417ZM11.0417 13.3333C11.0417 13.9087 10.5753 14.375 10 14.375C9.42467 14.375 8.95833 13.9087 8.95833 13.3333C8.95833 12.758 9.42467 12.2917 10 12.2917C10.5753 12.2917 11.0417 12.758 11.0417 13.3333ZM13.3333 11.0417C13.9087 11.0417 14.375 10.5753 14.375 10C14.375 9.42467 13.9087 8.95833 13.3333 8.95833C12.758 8.95833 12.2917 9.42467 12.2917 10C12.2917 10.5753 12.758 11.0417 13.3333 11.0417Z`,fill:t})}),dl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.97559 3.33335C6.31878 2.36236 7.24482 1.66669 8.33333 1.66669H11.6667C12.7552 1.66669 13.6812 2.36236 14.0244 3.33335H15C16.3807 3.33335 17.5 4.45265 17.5 5.83335V15.8334C17.5 17.2141 16.3807 18.3334 15 18.3334H5C3.61929 18.3334 2.5 17.2141 2.5 15.8334V5.83335C2.5 4.45265 3.61929 3.33335 5 3.33335H5.97559ZM7.5 4.16669V5.00002H12.5V4.16669C12.5 3.70645 12.1269 3.33335 11.6667 3.33335H8.33333C7.8731 3.33335 7.5 3.70645 7.5 4.16669ZM13.1004 9.42202C13.4196 9.75359 13.4095 10.2811 13.0779 10.6003L9.74461 13.809C9.41458 14.1267 8.89001 14.1184 8.57015 13.7905L6.90346 12.0818C6.5821 11.7524 6.58866 11.2248 6.91812 10.9034C7.24758 10.582 7.77517 10.5886 8.09654 10.9181L9.18518 12.0341L11.9221 9.39957C12.2537 9.08039 12.7812 9.09044 13.1004 9.42202Z`,fill:t})}),fl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M11.2513 5.41669C11.2513 3.34562 9.57242 1.66669 7.50134 1.66669C5.43027 1.66669 3.75134 3.34562 3.75134 5.41669C3.75134 7.48775 5.43027 9.16669 7.50134 9.16669C9.57242 9.16669 11.2513 7.48775 11.2513 5.41669Z`,fill:t}),(0,G.jsx)(`path`,{d:`M14.5847 5.41669C14.5847 4.26609 13.6519 3.33335 12.5013 3.33335C12.0411 3.33335 11.668 2.96025 11.668 2.50002C11.668 2.03979 12.0411 1.66669 12.5013 1.66669C14.5724 1.66669 16.2513 3.34562 16.2513 5.41669C16.2513 7.48775 14.5724 9.16669 12.5013 9.16669C12.0411 9.16669 11.668 8.7936 11.668 8.33335C11.668 7.87312 12.0411 7.50002 12.5013 7.50002C13.6519 7.50002 14.5847 6.56728 14.5847 5.41669Z`,fill:t}),(0,G.jsx)(`path`,{d:`M14.2744 16.7337C13.8373 17.2174 13.1858 17.5 12.5015 17.5H2.50148C1.81718 17.5 1.16563 17.2174 0.728594 16.7337C0.277181 16.234 0.060212 15.5156 0.310834 14.7647C1.24903 11.9537 4.16277 10 7.50148 10C10.8403 10 13.7539 11.9537 14.6922 14.7647C14.9428 15.5156 14.7257 16.234 14.2744 16.7337Z`,fill:t}),(0,G.jsx)(`path`,{d:`M17.5014 17.5C18.1858 17.5 18.8373 17.2174 19.2743 16.7338C19.7257 16.2342 19.9428 15.5157 19.6922 14.7648C19.0273 12.7728 17.3646 11.2103 15.2797 10.4719C14.8458 10.3182 14.3696 10.5454 14.2159 10.9791C14.0623 11.4129 14.2894 11.8892 14.7233 12.0429C16.3896 12.6331 17.6298 13.8497 18.1112 15.2924C18.152 15.4146 18.1291 15.5152 18.0378 15.6164C17.9319 15.7334 17.7377 15.8334 17.5014 15.8334H17.0848C16.6246 15.8334 16.2514 16.2064 16.2514 16.6667C16.2514 17.1269 16.6246 17.5 17.0848 17.5H17.5014Z`,fill:t})]}),pl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{d:`M15 2.5C16.3807 2.5 17.5 3.61929 17.5 5V15C17.5 16.3807 16.3807 17.5 15 17.5H5C3.61929 17.5 2.5 16.3807 2.5 15V5C2.5 3.61929 3.61929 2.5 5 2.5H15ZM11.2373 6.83008C10.7773 6.83019 10.4045 7.20307 10.4043 7.66309C10.4044 8.12314 10.7772 8.49599 11.2373 8.49609H12.5254L10.6484 10.373C10.3666 10.6549 9.90892 10.6546 9.62695 10.373C8.75254 9.49894 7.36872 9.44417 6.43066 10.209L6.24902 10.373L4.875 11.748C4.54968 12.0734 4.54981 12.6003 4.875 12.9258C5.20045 13.2508 5.72743 13.251 6.05273 12.9258L7.42773 11.5518L7.54102 11.459C7.82107 11.2743 8.20165 11.3054 8.44824 11.5518C9.38095 12.4841 10.8934 12.4841 11.8262 11.5518L13.7031 9.6748V10.9619C13.7033 11.4219 14.0762 11.7956 14.5361 11.7959C14.9961 11.7956 15.37 11.4219 15.3701 10.9619V7.66309C15.37 7.23206 15.0418 6.87706 14.6221 6.83398L14.5361 6.83008H11.2373Z`,fill:t})}),ml=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M9.45817 1.80518C9.80933 1.68449 10.1907 1.68449 10.5418 1.80518L16.3752 3.81039C17.0482 4.04174 17.5 4.67488 17.5 5.38654V9.92706C17.5 12.2661 16.5426 13.9516 15.1562 15.2641C13.8459 16.5046 12.1293 17.4303 10.5266 18.2946L10.3957 18.3651C10.1487 18.4984 9.85125 18.4984 9.60433 18.3651L9.47342 18.2946C7.8707 17.4303 6.15411 16.5046 4.84375 15.2641C3.45742 13.9516 2.5 12.2661 2.5 9.92706V5.38654C2.5 4.67488 2.95187 4.04174 3.62487 3.81039L9.45817 1.80518ZM10 6.66665C8.84942 6.66665 7.91667 7.59939 7.91667 8.74998C7.91667 9.60431 8.43083 10.3385 9.16667 10.66V12.5C9.16667 12.9602 9.53975 13.3333 10 13.3333C10.4602 13.3333 10.8333 12.9602 10.8333 12.5V10.66C11.5692 10.3385 12.0833 9.60431 12.0833 8.74998C12.0833 7.59939 11.1506 6.66665 10 6.66665Z`,fill:t})}),hl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M2.91589 5.83333C2.91589 3.99238 4.40827 2.5 6.24922 2.5C8.09017 2.5 9.58254 3.99238 9.58254 5.83333C9.58254 7.67428 8.09017 9.16667 6.24922 9.16667C4.40827 9.16667 2.91589 7.67428 2.91589 5.83333Z`,fill:t}),(0,G.jsx)(`path`,{d:`M10.4159 5.83333C10.4159 3.99238 11.9083 2.5 13.7492 2.5C15.5902 2.5 17.0825 3.99238 17.0825 5.83333C17.0825 7.67428 15.5902 9.16667 13.7492 9.16667C11.9083 9.16667 10.4159 7.67428 10.4159 5.83333Z`,fill:t}),(0,G.jsx)(`path`,{d:`M6.24901 10C8.64129 10 10.9105 11.6506 11.7552 14.6779C12.1968 16.2609 10.8467 17.5 9.46071 17.5H3.0373C1.65133 17.5 0.30124 16.2609 0.742855 14.6779C1.58744 11.6506 3.85669 10 6.24901 10Z`,fill:t}),(0,G.jsx)(`path`,{d:`M13.3612 14.2301C12.9547 12.773 12.2558 11.5405 11.3575 10.5851C12.1037 10.1988 12.9193 10 13.7496 10C16.142 10 18.4112 11.6506 19.2558 14.6779C19.6974 16.2609 18.3473 17.5 16.9613 17.5H12.7748C13.4149 16.6291 13.7071 15.4701 13.3612 14.2301Z`,fill:t})]}),gl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{d:`M2.33546 4.64324C1.86867 3.24288 3.31833 1.97173 4.64571 2.61748L16.7403 8.50133C17.9904 9.1095 17.9904 10.8907 16.7403 11.4988L4.64571 17.3827C3.31833 18.0284 1.86868 16.7573 2.33546 15.3569L3.84335 10.8333H7.4995C7.95974 10.8333 8.33284 10.4602 8.33284 9.99992C8.33284 9.53967 7.95974 9.16658 7.4995 9.16658H3.84324L2.33546 4.64324Z`,fill:t})}),_l=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M1.66663 5C1.66663 3.61929 2.78592 2.5 4.16663 2.5H15.8333C17.214 2.5 18.3333 3.61929 18.3333 5V11.6667C18.3333 13.0474 17.214 14.1667 15.8333 14.1667H4.16663C2.78592 14.1667 1.66663 13.0474 1.66663 11.6667V5Z`,fill:t}),(0,G.jsx)(`path`,{d:`M5.27124 17.4547C6.75712 16.9436 8.34671 16.6667 10.0002 16.6667C11.6537 16.6667 13.2433 16.9436 14.7291 17.4547C15.1644 17.6044 15.6385 17.3729 15.7882 16.9377C15.9379 16.5025 15.7065 16.0283 15.2712 15.8787C13.6138 15.3085 11.8411 15 10.0002 15C8.15925 15 6.38661 15.3085 4.72913 15.8787C4.29392 16.0283 4.06247 16.5025 4.21217 16.9377C4.36187 17.3729 4.83603 17.6044 5.27124 17.4547Z`,fill:t})]}),vl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M10.0002 1.25C8.47324 1.25 7.22039 2.42328 7.09396 3.91747C5.10461 4.75431 3.55308 6.42324 2.87382 8.48983C2.73011 8.92708 2.96805 9.398 3.40529 9.54175C3.84251 9.68542 4.31345 9.4475 4.45715 9.01025C4.95174 7.50553 6.04335 6.27005 7.45089 5.58491C7.94924 6.47877 8.90407 7.08333 10.0002 7.08333C11.611 7.08333 12.9168 5.7775 12.9168 4.16667C12.9168 2.55583 11.611 1.25 10.0002 1.25Z`,fill:t}),(0,G.jsx)(`path`,{d:`M15.6565 5.90823C15.3542 5.56125 14.8278 5.52507 14.4808 5.82744C14.1338 6.1298 14.0976 6.65619 14.4 7.00317C15.2934 8.02841 15.8335 9.3668 15.8335 10.8335C15.8335 10.9737 15.8286 11.1127 15.8189 11.2503C14.7944 11.2335 13.7915 11.7582 13.2428 12.7085C12.4374 14.1034 12.9154 15.887 14.3103 16.6923C15.7051 17.4976 17.4887 17.0197 18.294 15.6249C19.0565 14.3042 18.6686 12.635 17.4413 11.7777C17.4802 11.4681 17.5002 11.153 17.5002 10.8335C17.5002 8.94913 16.8043 7.22535 15.6565 5.90823Z`,fill:t}),(0,G.jsx)(`path`,{d:`M6.75101 12.7084C5.94568 11.3136 4.16209 10.8357 2.76724 11.641C1.37238 12.4463 0.894476 14.2299 1.69979 15.6248C2.46351 16.9475 4.10703 17.4457 5.46446 16.8068C6.72381 17.7643 8.29636 18.3333 10.0002 18.3333C10.4798 18.3333 10.9496 18.2882 11.4054 18.2018C11.8576 18.1159 12.1547 17.6798 12.0688 17.2277C11.9831 16.7755 11.547 16.4785 11.0948 16.5643C10.7409 16.6314 10.3751 16.6667 10.0002 16.6667C8.78708 16.6667 7.66172 16.2971 6.7287 15.6638C7.25286 14.7855 7.2987 13.6571 6.75101 12.7084Z`,fill:t})]}),yl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M2.50208 4.99963C2.50208 3.62007 3.62043 2.50171 4.99999 2.50171H6.66666C8.04623 2.50171 9.16458 3.62007 9.16458 4.99963V6.66629C9.16458 8.04586 8.04623 9.16425 6.66666 9.16425H4.99999C3.62043 9.16425 2.50208 8.04586 2.50208 6.66629V4.99963Z`,fill:t}),(0,G.jsx)(`path`,{d:`M2.50208 13.333C2.50208 11.9534 3.62043 10.8351 4.99999 10.8351H6.66666C8.04623 10.8351 9.16458 11.9534 9.16458 13.333V14.9997C9.16458 16.3792 8.04623 17.4976 6.66666 17.4976H4.99999C3.62043 17.4976 2.50208 16.3792 2.50208 14.9997V13.333Z`,fill:t}),(0,G.jsx)(`path`,{d:`M10.8354 4.99963C10.8354 3.62007 11.9537 2.50171 13.3333 2.50171H15C16.3796 2.50171 17.4979 3.62007 17.4979 4.99963V6.66629C17.4979 8.04586 16.3796 9.16425 15 9.16425H13.3333C11.9537 9.16425 10.8354 8.04586 10.8354 6.66629V4.99963Z`,fill:t}),(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M14.1667 10.8351C12.3268 10.8351 10.8354 12.3265 10.8354 14.1663C10.8354 16.0061 12.3268 17.4976 14.1667 17.4976C16.0065 17.4976 17.4979 16.0061 17.4979 14.1663C17.4979 12.3265 16.0065 10.8351 14.1667 10.8351ZM12.4979 14.1663C12.4979 13.2447 13.2451 12.4976 14.1667 12.4976C15.0883 12.4976 15.8354 13.2447 15.8354 14.1663C15.8354 15.0879 15.0883 15.8351 14.1667 15.8351C13.2451 15.8351 12.4979 15.0879 12.4979 14.1663Z`,fill:t})]}),bl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M9.16663 4.37799L4.70895 3.38739C3.14767 3.04044 1.66663 4.22849 1.66663 5.82787V14.0799C1.66663 15.2516 2.48046 16.2662 3.6243 16.5204L9.16663 17.7519V4.37799Z`,fill:t}),(0,G.jsx)(`path`,{d:`M10.8333 17.7519L16.3756 16.5204C17.5195 16.2662 18.3333 15.2516 18.3333 14.0799V5.82787C18.3333 4.22849 16.8522 3.04044 15.291 3.38739L10.8333 4.37799V17.7519Z`,fill:t})]}),xl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.00159 2.50002L15.0015 2.5C16.3823 2.5 17.5016 3.61928 17.5016 5V13.3632C17.5016 14.7438 16.3823 15.8631 15.0016 15.8632H12.813L10.5297 17.7548C10.2199 18.0115 9.77096 18.0102 9.46271 17.7517L7.2096 15.8632H5.00159C3.62088 15.8632 2.50159 14.7438 2.50159 13.3632V5.00002C2.50159 3.61931 3.62088 2.50002 5.00159 2.50002ZM12.8807 8.29759C13.2061 7.97215 13.2061 7.44452 12.8807 7.11907C12.5552 6.79364 12.0276 6.79364 11.7022 7.11907L9.37479 9.4465L8.71404 8.78575C8.38854 8.46033 7.86094 8.46033 7.5355 8.78575C7.21006 9.11117 7.21006 9.63883 7.5355 9.96425L8.78554 11.2142C8.94179 11.3705 9.15371 11.4583 9.37479 11.4583C9.59579 11.4583 9.80771 11.3705 9.96404 11.2142L12.8807 8.29759Z`,fill:t})}),Sl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M6.66671 2.5C5.286 2.5 4.16671 3.61929 4.16671 5V5.83333H3.33337C1.95267 5.83333 0.833374 6.95262 0.833374 8.33333V15C0.833374 16.3807 1.95267 17.5 3.33337 17.5H13.3334C14.7141 17.5 15.8334 16.3807 15.8334 15V14.1667H16.6667C18.0475 14.1667 19.1667 13.0474 19.1667 11.6667V6.66667C19.1667 5.28596 18.0475 4.16667 16.6667 4.16667H12.0119L11.0775 3.23223C10.6086 2.76339 9.97271 2.5 9.30971 2.5H6.66671ZM15.8334 12.5H16.6667C17.127 12.5 17.5 12.1269 17.5 11.6667V6.66667C17.5 6.20643 17.127 5.83333 16.6667 5.83333H12.0119C11.5699 5.83333 11.146 5.65774 10.8334 5.34517L9.89896 4.41074C9.74263 4.25447 9.53071 4.16667 9.30971 4.16667H6.66671C6.20647 4.16667 5.83337 4.53977 5.83337 5V5.83333H5.97635C6.63939 5.83333 7.27527 6.09672 7.74412 6.56557L8.67854 7.5H13.3334C14.7141 7.5 15.8334 8.61925 15.8334 10V12.5Z`,fill:t})}),Cl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M1.66663 9.99992C1.66663 5.58343 5.4431 2.08325 9.99996 2.08325C14.5568 2.08325 18.3333 5.58343 18.3333 9.99992C18.3333 11.562 17.913 12.6835 16.9574 13.2783C16.0843 13.8218 14.9975 13.7541 14.1464 13.6434C13.8439 13.6041 13.5252 13.5514 13.2263 13.5021C13.0904 13.4796 12.9585 13.4578 12.8341 13.4383C12.4142 13.3723 12.0475 13.3259 11.7265 13.3213C11.0814 13.3118 10.8666 13.4633 10.7453 13.7059C10.6762 13.8443 10.6605 14.0336 10.7693 14.3558C10.867 14.6452 11.023 14.9277 11.2033 15.2539C11.2355 15.3123 11.2685 15.372 11.3021 15.4335C11.402 15.6163 11.5154 15.8305 11.5951 16.0417C11.6684 16.2353 11.7641 16.5521 11.6931 16.8989C11.606 17.3247 11.3133 17.6088 10.9717 17.7559C10.6767 17.8829 10.3344 17.9166 9.99996 17.9166C5.4431 17.9166 1.66663 14.4164 1.66663 9.99992ZM8.74996 7.91658C9.44029 7.91658 9.99996 7.35694 9.99996 6.66658C9.99996 5.97623 9.44029 5.41659 8.74996 5.41659C8.0596 5.41659 7.49996 5.97623 7.49996 6.66658C7.49996 7.35694 8.0596 7.91658 8.74996 7.91658ZM7.29163 10.2083C7.29163 10.8986 6.73198 11.4583 6.04163 11.4583C5.35127 11.4583 4.79163 10.8986 4.79163 10.2083C4.79163 9.51792 5.35127 8.95825 6.04163 8.95825C6.73198 8.95825 7.29163 9.51792 7.29163 10.2083ZM12.9166 9.16658C13.607 9.16658 14.1666 8.60692 14.1666 7.91658C14.1666 7.22623 13.607 6.66658 12.9166 6.66658C12.2263 6.66658 11.6666 7.22623 11.6666 7.91658C11.6666 8.60692 12.2263 9.16658 12.9166 9.16658Z`,fill:t})}),wl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M9.99996 1.66675C7.92889 1.66675 6.24996 3.34568 6.24996 5.41675C6.24996 7.48781 7.92889 9.16675 9.99996 9.16675C12.071 9.16675 13.75 7.48781 13.75 5.41675C13.75 3.34568 12.071 1.66675 9.99996 1.66675Z`,fill:t}),(0,G.jsx)(`path`,{d:`M10.0012 10.0001C6.80794 10.0001 4.36401 11.9136 3.37167 14.5967C3.08798 15.3638 3.2822 16.1199 3.73317 16.6573C4.17264 17.1811 4.85107 17.5001 5.58189 17.5001H12.2916V14.8328C11.4003 14.0697 10.8333 12.9354 10.8333 11.6667C10.8333 11.1067 10.9438 10.5726 11.1441 10.0847C10.7754 10.029 10.394 10.0001 10.0012 10.0001Z`,fill:t}),(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M15 9.16675C13.6192 9.16675 12.5 10.286 12.5 11.6667C12.5 12.6757 13.0976 13.5451 13.9583 13.9401V16.8832C13.9583 17.0097 14.0158 17.1294 14.1147 17.2085L14.7397 17.7085C14.8919 17.8302 15.108 17.8302 15.2602 17.7085L15.8852 17.2085C15.9841 17.1294 16.0416 17.0097 16.0416 16.8832V16.1892L15.4166 15.6251L16.0416 15.0001V13.9401C16.9023 13.5451 17.5 12.6757 17.5 11.6667C17.5 10.286 16.3807 9.16675 15 9.16675ZM14.1666 11.6667C14.1666 11.2065 14.5397 10.8334 15 10.8334C15.4602 10.8334 15.8333 11.2065 15.8333 11.6667C15.8333 12.127 15.4602 12.5001 15 12.5001C14.5397 12.5001 14.1666 12.127 14.1666 11.6667Z`,fill:t})]}),Tl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsxs)(K,{size:e,...n,children:[(0,G.jsx)(`path`,{d:`M9.99996 1.66675C7.92889 1.66675 6.24996 3.34568 6.24996 5.41675C6.24996 7.48781 7.92889 9.16675 9.99996 9.16675C12.071 9.16675 13.75 7.48781 13.75 5.41675C13.75 3.34568 12.071 1.66675 9.99996 1.66675Z`,fill:t}),(0,G.jsx)(`path`,{d:`M10.0012 10.0001C6.80794 10.0001 4.36401 11.9136 3.37167 14.5967C3.08798 15.3638 3.2822 16.1199 3.73317 16.6573C4.17264 17.1811 4.85107 17.5001 5.58189 17.5001H14.4205C15.1513 17.5001 15.8297 17.1811 16.2692 16.6573C16.7202 16.1199 16.9144 15.3638 16.6307 14.5967C15.6384 11.9136 13.1945 10.0001 10.0012 10.0001Z`,fill:t})]}),El=({size:e=20,color:t=`#5C6970`,...n})=>(0,G.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...n,children:(0,G.jsx)(`path`,{fill:t,d:`M2.499 11a.5.5 0 0 1 .477.348l.256.797a1.01 1.01 0 0 0 .63.633l.789.248a.5.5 0 0 1 .001.954l-.79.252a1.007 1.007 0 0 0-.63.633l-.252.787a.5.5 0 0 1-.95.008l-.266-.79a1.034 1.034 0 0 0-.636-.639l-.781-.252a.5.5 0 0 1-.002-.95l.794-.26a1.023 1.023 0 0 0 .636-.634l.248-.786A.5.5 0 0 1 2.5 11ZM1 7.513a1 1 0 0 1 .69-.953l2.583-.844a3.95 3.95 0 0 0 2.465-2.457l.808-2.56A1 1 0 0 1 9.452.695l.832 2.598a3.906 3.906 0 0 0 2.448 2.453l2.569.811a1 1 0 0 1 .004 1.906l-2.572.823a3.896 3.896 0 0 0-2.449 2.454l-.82 2.565a1 1 0 0 1-1.9.014l-.866-2.567v-.002A3.971 3.971 0 0 0 4.24 9.284l-2.547-.821A1 1 0 0 1 1 7.513Z`})}),Dl=({size:e,color:t=`#5C6970`,...n})=>(0,G.jsx)(K,{size:e,...n,children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M12.5 12.4269L9.99996 14.5519V16.028L12.0954 14.7707C12.3464 14.6202 12.5 14.3489 12.5 14.0562V12.4269ZM8.33329 14.5117L5.48812 11.6665H3.97178C2.67629 11.6665 1.87611 10.2532 2.54263 9.14233L3.79988 7.04695C4.25168 6.29394 5.06545 5.83319 5.94361 5.83319H9.01221C11.116 3.60805 13.5005 1.97393 16.5951 1.7053C17.5694 1.62072 18.3791 2.43041 18.2945 3.40466C18.0259 6.49924 16.3918 8.88383 14.1666 10.9877V14.0562C14.1666 14.9343 13.7059 15.7482 12.9529 16.1999L10.8575 17.4572C9.74654 18.1237 8.33329 17.3235 8.33329 16.028V14.5117ZM7.57293 7.49986H5.94361C5.65089 7.49986 5.37963 7.65344 5.22903 7.90445L3.97178 9.99983H5.44793L7.57293 7.49986ZM1.66663 15.8332C1.66663 14.4525 2.78592 13.3332 4.16663 13.3332C5.54733 13.3332 6.66663 14.4525 6.66663 15.8332C6.66663 17.2139 5.54733 18.3332 4.16663 18.3332H2.49996C2.03973 18.3332 1.66663 17.9601 1.66663 17.4998V15.8332Z`,fill:t})}),Ol=I.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 256px;
  background-color: white;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0px 16px 24px 0px rgba(10, 13, 14, 0.16);
  padding: 4px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,kl=I.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  width: 100%;
  border: none;
  background-color: ${e=>e.$isActive?`#293239`:`transparent`};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${e=>e.$isActive?`white`:`#293239`};
  text-align: left;

  &:hover {
    background-color: ${e=>e.$isActive?`#293239`:`rgba(0, 0, 0, 0.04)`};
  }

  &:active {
    background-color: ${e=>e.$isActive?`#293239`:`rgba(0, 0, 0, 0.08)`};
  }
`,Al=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,jl=[{id:`support`,name:`Support`,icon:zc},{id:`knowledge`,name:`Knowledge`,icon:sl},{id:`ai-agents`,name:`AI agents`,icon:cl},{id:`chat`,name:`Chat`,icon:Bc},{id:`voice`,name:`Voice`,icon:Vc},{id:`analytics`,name:`Analytics`,icon:ll},{id:`workforce-management`,name:`Workforce management`,icon:ul},{id:`quality-assurance`,name:`Quality assurance`,icon:dl},{id:`community`,name:`Community`,icon:fl},{id:`sales`,name:`Sales`,icon:pl},{id:`admin-center`,name:`Admin center`,icon:ml}],Ml=({currentProduct:e=`support`,onSelectProduct:t,onClose:n})=>{let r=e=>{t?.(e),n?.()};return(0,G.jsx)(Ol,{children:jl.map(t=>{let n=t.icon,i=t.id===e;return(0,G.jsxs)(kl,{$isActive:i,onClick:()=>r(t.id),children:[(0,G.jsx)(Al,{children:(0,G.jsx)(n,{size:20,color:i?`white`:`#5C6970`})}),(0,G.jsx)(`span`,{children:t.name})]},t.id)})})},Nl=I.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`,Pl=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Fl=I.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`,Il=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ll=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`,Rl=I.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,zl=I.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`,Bl=I.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;
`,Vl=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 320px;
  min-width: 240px;
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #b0b8be;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #5c6970;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #87929d;
  }

  &:focus-within {
    border-color: #1f73b7;
    outline: none;
  }
`,Hl=I.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ul=I.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`,Wl=I.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
  }
`,Gl=I.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
    background-color: transparent;
  }
`,Kl=I.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;
  position: relative;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,ql=I.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  background-color: #d93f4c;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.12px;
  color: white;
`;I.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;var Jl=({currentProduct:e=`support`,onProductChange:t})=>{let[n,r]=(0,g.useState)(!1),i=(0,g.useRef)(null),a=e=>{t?.(e)};(0,g.useEffect)(()=>{let e=e=>{i.current&&!i.current.contains(e.target)&&r(!1)};if(n)return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[n]);let o=jl.find(t=>t.id===e)||jl[0],s=e===`admin-center`,c=e===`knowledge`,l=e===`ai-agents`,u=e===`workforce-management`,d=e===`quality-assurance`,f=e===`analytics`;return(0,G.jsxs)(Nl,{children:[(0,G.jsxs)(Pl,{children:[(0,G.jsx)(Ll,{children:(0,G.jsx)(ol,{size:20})}),(0,G.jsxs)(Rl,{ref:i,onClick:()=>r(!n),children:[(0,G.jsx)(zl,{children:o.name}),(0,G.jsx)(rl,{size:12}),n&&(0,G.jsx)(Ml,{currentProduct:e,onSelectProduct:a,onClose:()=>r(!1)})]})]}),(0,G.jsx)(Fl,{children:s?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,G.jsx)(Hl,{children:(0,G.jsx)(Ul,{})}),(0,G.jsx)(Bl,{children:`Camera obscura`})]}),(0,G.jsxs)(Il,{children:[(0,G.jsxs)(Vl,{children:[(0,G.jsx)(Uc,{size:16}),(0,G.jsx)(`span`,{children:`Search admin center`})]}),(0,G.jsx)(Kl,{children:(0,G.jsx)(Wc,{size:20})}),(0,G.jsx)(Ac,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,G.jsx)(Tl,{size:16,color:`#5C6970`})})]})]}):c?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,G.jsx)(Hl,{children:(0,G.jsx)(Ul,{})}),(0,G.jsxs)(Rl,{children:[(0,G.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:600,lineHeight:`16px`,letterSpacing:`-0.0004px`,color:`#293239`},children:`Joe's Coffee`}),(0,G.jsx)(rl,{size:12})]})]}),(0,G.jsxs)(Il,{children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,G.jsx)(Gl,{size:`small`,children:`Create content`}),(0,G.jsx)(Gl,{size:`small`,disabled:!0,children:`Help center`})]}),(0,G.jsx)(Kl,{children:(0,G.jsx)(Wc,{size:20})}),(0,G.jsx)(Ac,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,G.jsx)(Tl,{size:16,color:`#5C6970`})})]})]}):l?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,G.jsx)(Hl,{children:(0,G.jsx)(Ul,{})}),(0,G.jsx)(Bl,{children:`Camera obscura`})]}),(0,G.jsxs)(Il,{children:[(0,G.jsxs)(Rl,{children:[(0,G.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:600,lineHeight:`16px`,letterSpacing:`-0.0004px`,color:`#293239`},children:`Test bot`}),(0,G.jsx)(rl,{size:12})]}),(0,G.jsx)(Kl,{children:(0,G.jsx)(Wc,{size:20})}),(0,G.jsx)(Ac,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,G.jsx)(Tl,{size:16,color:`#5C6970`})})]})]}):u?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`div`,{}),(0,G.jsxs)(Il,{children:[(0,G.jsxs)(Vl,{children:[(0,G.jsx)(Uc,{size:16}),(0,G.jsx)(`span`,{children:`Search`})]}),(0,G.jsx)(Kl,{children:(0,G.jsx)(nl,{size:20})}),(0,G.jsx)(Ac,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,G.jsx)(Tl,{size:16,color:`#5C6970`})})]})]}):d||f?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`div`,{}),(0,G.jsxs)(Il,{children:[(0,G.jsxs)(Vl,{children:[(0,G.jsx)(Uc,{size:16}),(0,G.jsx)(`span`,{children:`Search`})]}),(0,G.jsx)(Ac,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,G.jsx)(Tl,{size:16,color:`#5C6970`})})]})]}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,G.jsx)(Hl,{children:(0,G.jsx)(Ul,{})}),(0,G.jsxs)(Wl,{children:[(0,G.jsx)(al,{size:12}),(0,G.jsx)(`span`,{children:`Add`})]})]}),(0,G.jsxs)(Il,{children:[(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,G.jsx)(Kl,{children:(0,G.jsx)(Uc,{size:20})}),(0,G.jsx)(Gl,{size:`small`,disabled:!0,children:`Conversations`}),(0,G.jsx)(Kl,{children:(0,G.jsx)(Bc,{size:20})}),(0,G.jsx)(Kl,{children:(0,G.jsx)(Vc,{size:20})})]}),(0,G.jsx)(Hl,{children:(0,G.jsx)(Ul,{})}),(0,G.jsxs)(Kl,{children:[(0,G.jsx)(Hc,{size:20}),(0,G.jsx)(ql,{children:`1`})]}),(0,G.jsx)(Kl,{children:(0,G.jsx)(Dl,{size:20})}),(0,G.jsx)(Ac,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,G.jsx)(Tl,{size:16,color:`#5C6970`})})]})]})})]})},Yl=I.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 56px;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`,Xl=I.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`,Zl=I.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`,Ql=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`,$l=I.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${e=>e.$isActive?`#293239`:`transparent`};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 0;

  &:hover {
    background-color: ${e=>e.$isActive?`#293239`:`rgba(0, 0, 0, 0.08)`};
  }
`,eu=I.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`,tu=I.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 56px;
  height: 48px;
  padding: 0 16px;
`,nu=I.div`
  width: 23px;
  height: 1px;
  background-color: #d8dcde;
`,ru=I.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.15s;
  padding: 0;
  box-shadow: 0px 4px 8px 0px rgba(10, 13, 14, 0.16);

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,iu=[{id:0,icon:jc,label:`Home`},{id:1,icon:Mc,label:`Inbox`},{id:2,icon:Nc,label:`Contacts`},{id:3,icon:Pc,label:`Organization`},{id:4,icon:Fc,label:`Custom Objects`},{id:5,icon:Ic,label:`Analytics`},{id:6,icon:Rc,label:`Settings`}],au=[{id:0,icon:jc,label:`Home`},{id:1,icon:Pc,label:`Account`},{id:2,icon:hl,label:`People`},{id:3,icon:gl,label:`Channels`},{id:4,icon:El,label:`AI`},{id:5,icon:_l,label:`Workspaces`},{id:6,icon:vl,label:`Objects & rules`},{id:7,icon:yl,label:`Apps and integrations`}],ou=[{id:0,icon:jc,label:`Home`},{id:1,icon:bl,label:`Knowledge`},{id:2,icon:xl,label:`Moderate content`},{id:3,icon:Sl,label:`Arrange content`},{id:4,icon:Cl,label:`Customize design`},{id:5,icon:wl,label:`User permissions`},{id:6,icon:Rc,label:`Settings`}],su=[{id:0,icon:Ic,label:`Analytics`},{id:1,icon:Kc,label:`Content`},{id:2,icon:Gc,label:`Conversations`},{id:3,icon:Rc,label:`Settings`},{id:4,icon:null,label:`separator`},{id:5,icon:q,label:`AI agent management`},{id:6,icon:wl,label:`Permissions`},{id:7,icon:qc,label:`Database`},{id:8,icon:Jc,label:`Apps`},{id:9,icon:Yc,label:`Integrations`}],cu=[{id:0,icon:Lc,label:`Real-time monitoring`},{id:1,icon:Xc,label:`Dashboard`},{id:2,icon:Ic,label:`Reports`},{id:3,icon:qc,label:`Data`},{id:4,icon:Zc,label:`Export`},{id:5,icon:Rc,label:`Settings`}],lu=[{id:0,icon:Xc,label:`Dashboard`},{id:1,icon:Gc,label:`Conversations`},{id:2,icon:Qc,label:`Reviews`},{id:3,icon:Mc,label:`Inbox`},{id:4,icon:$c,label:`Training`}],uu=[{id:0,icon:Lc,label:`Real-time monitoring`},{id:1,icon:Ic,label:`Analytics`},{id:2,icon:el,label:`Forecasting`},{id:3,icon:tl,label:`Scheduling`},{id:4,icon:hl,label:`Team`},{id:5,icon:Rc,label:`Settings`}],du=({currentProduct:e,activeNavItem:t,setActiveNavItem:n,isSubnavExpanded:r,setIsSubnavExpanded:i})=>{let a=e===`admin-center`?au:e===`knowledge`?ou:e===`ai-agents`?su:e===`analytics`?cu:e===`quality-assurance`?lu:e===`workforce-management`?uu:iu,o=e===`knowledge`||e===`ai-agents`;return(0,G.jsxs)(Yl,{children:[(0,G.jsx)(Xl,{}),(0,G.jsx)(Zl,{children:a.map(e=>{if(e.label===`separator`)return(0,G.jsx)(tu,{children:(0,G.jsx)(nu,{})},e.id);let r=t===e.id,i=typeof e.icon==`function`?e.icon:null;return(0,G.jsx)(Ql,{children:(0,G.jsx)($l,{$isActive:r,onClick:()=>n(e.id),"aria-label":e.label,children:i?(0,G.jsx)(i,{size:20,color:r?`white`:`#5C6970`}):e.icon})},e.id)})}),(0,G.jsx)(eu,{children:o&&(0,G.jsx)(ru,{onClick:()=>i(!r),"aria-label":r?`Collapse`:`Expand`,children:(0,G.jsx)(il,{size:20,color:`#5C6970`})})})]})};I.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`,I.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`,I.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`,I.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,I.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`;var fu=I.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${e=>e.$isCurrent?`#293239`:`transparent`};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${e=>e.$isCurrent?`#293239`:`rgba(92, 105, 112, 0.08)`};
  }

  &:active {
    background-color: ${e=>e.$isCurrent?`#293239`:`rgba(92, 105, 112, 0.16)`};
  }
`;I.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${e=>e.$isCurrent?`white`:`#2f3941`};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`,I.div`
  display: flex;
  align-items: center;
  justify-center: center;
  min-width: 20px;
  height: 20px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #49545c;
  text-align: center;
`,I.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,I.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,I.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`,I.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #68737d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`,I.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`,I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`,I(fu)`
  padding-left: ${e=>e.$depth*24+12}px;
`,I.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`,I.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
`,I.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #293239;
  margin: 0;
  padding: 4px 0;
`,I(I.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`)`
  width: 24px;
  height: 24px;
  border-radius: 4px;
`,I.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`,I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${e=>e.$isCurrent?`#293239`:`transparent`};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${e=>e.$isCurrent?`#293239`:`rgba(92, 105, 112, 0.08)`};
  }

  &:active {
    background-color: ${e=>e.$isCurrent?`#293239`:`rgba(92, 105, 112, 0.16)`};
  }
`,I.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,I.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${e=>e.$isCurrent?`white`:`#293239`};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`,I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 16px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #2f3941;
  text-align: center;
  flex-shrink: 0;
`,I.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,I.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,I.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 4px 12px 8px;
`,I.p`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #5c6970;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  flex-shrink: 0;
`,I.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
  min-width: 0;
`,I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
`,I.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`,I.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`,I.div`
  display: flex;
`,I.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 4px;
  isolation: isolate;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(10, 13, 14, 0.16);
  border-radius: 8px 0px 0px 0px;
  flex: 1;
  align-self: stretch;
`;var pu=e=>F`
  ${e.fg&&`color: ${e.fg};`}
  ${e.bg&&`background-color: ${e.bg};`}
  ${e.border&&`border-color: ${e.border};`}

  &:hover {
    ${e.hoverFg&&`color: ${e.hoverFg};`}
    ${e.hoverBg&&`background-color: ${e.hoverBg};`}
    ${e.hoverBorder&&`border-color: ${e.hoverBorder};`}
  }

  &:active,
  &[aria-pressed='true'],
  &[aria-pressed='mixed'] {
    ${e.activeFg&&`color: ${e.activeFg};`}
    ${e.activeBg&&`background-color: ${e.activeBg};`}
    ${e.activeBorder&&`border-color: ${e.activeBorder};`}
  }

  &:disabled {
    color: ${H({theme:e.theme,variable:`foreground.disabled`})};
    ${e.disabledBg&&`background-color: ${e.disabledBg};`}
    ${e.disabledBorder&&`border-color: ${e.disabledBorder};`}
  }
`,mu=({theme:e,$isPill:t,$isPrimary:n,$isBasic:r,$isNeutral:i,$isDanger:a,$isLink:o})=>{let s={};return o&&a?(s.fg=H({theme:e,variable:`foreground.danger`}),s.hoverFg=H({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),s.activeFg=H({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}})):o?(s.fg=H({theme:e,variable:`foreground.primary`}),s.hoverFg=H({theme:e,variable:`foreground.primary`,light:{offset:100},dark:{offset:-100}}),s.activeFg=H({theme:e,variable:`foreground.primary`,light:{offset:200},dark:{offset:-200}})):n&&a?(s.bg=H({theme:e,variable:`background.dangerEmphasis`}),s.fg=H({theme:e,variable:`foreground.onEmphasis`}),s.hoverBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),s.activeBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),s.disabledBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):n?(s.bg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.fg=H({theme:e,variable:`foreground.onEmphasis`,light:{offset:0},dark:{offset:0}}),s.hoverBg=H({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),s.activeBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),s.disabledBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):r&&a?(s.fg=H({theme:e,variable:`foreground.danger`}),s.hoverFg=H({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),s.hoverBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),s.activeFg=H({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),s.activeBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),s.disabledBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):r?(s.fg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.hoverFg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.hoverBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),s.activeFg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.activeBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),s.disabledBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):a?(s.fg=H({theme:e,variable:`foreground.danger`}),s.border=H({theme:e,variable:`border.dangerEmphasis`}),s.hoverFg=H({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),s.hoverBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),s.hoverBorder=H({theme:e,variable:`border.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),s.activeFg=H({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),s.activeBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),s.activeBorder=H({theme:e,variable:`border.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),s.disabledBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):(s.fg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.border=H({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),s.hoverFg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.hoverBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),s.hoverBorder=H({theme:e,hue:`neutralHue`,light:{shade:600},dark:{shade:500}}),s.activeFg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.activeBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),s.activeBorder=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:400}}),s.disabledBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),s.disabledBorder=`transparent`),i===!1&&!n&&!o&&!a&&(s.fg=H({theme:e,variable:`foreground.primary`}),s.hoverFg=H({theme:e,variable:`foreground.primary`,light:{offset:100},dark:{offset:-100}}),s.activeFg=H({theme:e,variable:`foreground.primary`,light:{offset:200},dark:{offset:-200}})),F`
    ${!o&&`font-weight: ${e.fontWeights.semibold};`}
    border-radius: ${o||t===!1?e.borderRadii.md:e.borderRadii.full};
    ${pu({theme:e,...s})}

    && svg {
      width: ${e.space.md};
      height: ${e.space.md};
    }
  `},hu=({theme:e,$isPill:t,$isPrimary:n,$isBasic:r,$isDanger:i})=>{let a={};return n&&i?(a.bg=H({theme:e,variable:`background.dangerEmphasis`}),a.fg=H({theme:e,variable:`foreground.onEmphasis`}),a.hoverBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),a.activeBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),a.disabledBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):n?(a.bg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.fg=H({theme:e,variable:`foreground.onEmphasis`,light:{offset:0},dark:{offset:0}}),a.hoverBg=H({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),a.activeBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),a.disabledBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):i&&!r?(a.fg=H({theme:e,variable:`foreground.danger`}),a.border=H({theme:e,variable:`border.dangerEmphasis`}),a.hoverFg=H({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),a.hoverBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),a.hoverBorder=H({theme:e,variable:`border.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),a.activeFg=H({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),a.activeBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),a.activeBorder=H({theme:e,variable:`border.dangerEmphasis`,light:{offset:200},dark:{offset:-200}})):i?(a.fg=H({theme:e,variable:`foreground.danger`}),a.hoverFg=H({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),a.hoverBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),a.activeFg=H({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),a.activeBg=H({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]})):r?(a.fg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:500}}),a.hoverFg=H({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:400}}),a.hoverBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),a.activeFg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.activeBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]})):(a.fg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:500}}),a.border=H({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),a.hoverFg=H({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:400}}),a.hoverBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),a.hoverBorder=H({theme:e,hue:`neutralHue`,light:{shade:600},dark:{shade:700}}),a.activeFg=H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.activeBg=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),a.activeBorder=H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:400}})),F`
    border-radius: ${t===!1?e.borderRadii.md:e.borderRadii.full};
    ${pu({theme:e,...a})}

    && svg {
      width: ${e.space.md};
      height: ${e.space.md};
    }
  `},gu=e=>({bg:H({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),hoverBg:H({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),activeBg:H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),disabledBg:H({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[300]})}),_u=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r,disabledBg:i}=gu(e),a=H({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),o=H({theme:e,variable:`border.disabled`}),s=H({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),c=H({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),l=H({theme:e,variable:`border.primaryEmphasis`});return F`
    /* Shape */
    && ~ label::before {
      border-radius: ${e.borderRadii.sm};
    }

    /* Unchecked default */
    &&:not(:checked):not(:indeterminate) ~ label::before {
      background-color: transparent;
      border: ${e.borderWidths.sm} solid ${a};
    }

    /* Unchecked hover */
    &&:enabled:not(:checked):not(:indeterminate) ~ label:hover::before {
      background-color: ${s};
      border-color: ${l};
    }

    /* Unchecked active */
    &&:enabled:not(:checked):not(:indeterminate) ~ label:active::before {
      background-color: ${c};
      border-color: ${l};
    }

    /* Unchecked disabled */
    &&:disabled:not(:checked):not(:indeterminate) ~ label::before {
      background-color: transparent;
      border-color: ${o};
    }

    /* Checked / indeterminate default: solid neutral fill */
    &&:checked ~ label::before,
    &&:indeterminate ~ label::before {
      background-color: ${t};
      border: ${e.borderWidths.sm} solid transparent;
    }

    /* Checked / indeterminate hover */
    &&:enabled:checked ~ label:hover::before,
    &&:enabled:indeterminate ~ label:hover::before {
      background-color: ${n};
    }

    /* Checked / indeterminate active */
    &&:enabled:checked ~ label:active::before,
    &&:enabled:indeterminate ~ label:active::before {
      background-color: ${r};
    }

    /* Checked / indeterminate disabled */
    &&:disabled:checked ~ label::before,
    &&:disabled:indeterminate ~ label::before {
      background-color: ${i};
    }

    /* Check / dash icon: white when checked */
    &&:checked ~ label > svg,
    &&:indeterminate ~ label > svg {
      color: ${H({theme:e,variable:`foreground.onEmphasis`})};
    }
  `},vu=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r,disabledBg:i}=gu(e),a=H({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),o=H({theme:e,variable:`border.disabled`}),s=H({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),c=H({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),l=H({theme:e,variable:`border.primaryEmphasis`});return F`
    /* Unchecked default */
    &&:not(:checked) ~ label::before {
      background-color: transparent;
      border: ${e.borderWidths.sm} solid ${a};
    }

    /* Unchecked hover */
    &&:enabled:not(:checked) ~ label:hover::before {
      background-color: ${s};
      border-color: ${l};
    }

    /* Unchecked active */
    &&:enabled:not(:checked) ~ label:active::before {
      background-color: ${c};
      border-color: ${l};
    }

    /* Unchecked disabled */
    &&:disabled:not(:checked) ~ label::before {
      background-color: transparent;
      border-color: ${o};
    }

    /* Checked default: solid neutral fill */
    &&:checked ~ label::before {
      background-color: ${t};
      border: ${e.borderWidths.sm} solid transparent;
    }

    /* Checked hover */
    &&:enabled:checked ~ label:hover::before {
      background-color: ${n};
    }

    /* Checked active */
    &&:enabled:checked ~ label:active::before {
      background-color: ${r};
    }

    /* Checked disabled */
    &&:disabled:checked ~ label::before {
      background-color: ${i};
    }
  `},yu=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r,disabledBg:i}=gu(e),a=H({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),o=H({theme:e,variable:`border.disabled`}),s=H({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),c=H({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),l=H({theme:e,variable:`border.primaryEmphasis`}),u=H({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),d=H({theme:e,variable:`foreground.onEmphasis`});return F`
    /* Track shape */
    && ~ label::before {
      border-radius: ${e.borderRadii.full};
    }

    /* Unchecked default: border-only, transparent fill */
    &&:not(:checked) ~ label::before {
      background-color: transparent;
      border: ${e.borderWidths.sm} solid ${a};
    }

    /* Unchecked hover */
    &&:enabled:not(:checked) ~ label:hover::before {
      background-color: ${s};
      border-color: ${l};
    }

    /* Unchecked active */
    &&:enabled:not(:checked) ~ label:active::before {
      background-color: ${c};
      border-color: ${l};
    }

    /* Unchecked disabled */
    &&:disabled:not(:checked) ~ label::before {
      background-color: transparent;
      border-color: ${o};
    }

    /* Checked default: solid neutral fill */
    &&:checked ~ label::before {
      background-color: ${t};
      border: ${e.borderWidths.sm} solid transparent;
    }

    /* Checked hover */
    &&:enabled:checked ~ label:hover::before {
      background-color: ${n};
    }

    /* Checked active */
    &&:enabled:checked ~ label:active::before {
      background-color: ${r};
    }

    /* Checked disabled */
    &&:disabled:checked ~ label::before {
      background-color: ${i};
    }

    /* Thumb: grey when unchecked, white when checked */
    &&:not(:checked) ~ label > svg {
      color: ${u};
    }

    &&:checked ~ label > svg {
      color: ${d};
    }
  `},bu=({theme:e})=>F`
  border-radius: ${e.borderRadii.xl};
`,xu=({theme:e})=>F`
  margin-inline-start: ${e.space.base*3}px;

  &:first-child {
    margin-inline-start: 0;
  }
`,Su=({theme:e})=>F`
  border-radius: ${e.borderRadii.xxl};
  border: none;
  margin: ${e.space.xxs};
  height: calc(100% - ${e.space.xxs} * 2);
`,Cu=({theme:e})=>F`
  border-radius: ${e.borderRadii.lg};
`,wu=({theme:e})=>F`
  border-radius: ${e.borderRadii.xl};
`,Tu=({theme:e})=>F`
  padding-top: ${e.space.xs};
`,Eu=({theme:e})=>F`
  padding-top: ${e.space.sm};
`,Du=({theme:e})=>`${e.space.base/2}px`,Ou=`> li:not([data-garden-id='dropdowns.menu.separator']) + li:not([data-garden-id='dropdowns.menu.separator'])`,ku=({theme:e,$isActive:t,$type:n})=>{if(n===`group`)return``;let r=t&&n!==`header`;return F`
    border-radius: ${e.borderRadii.sm};

    ${r&&F`
      overflow: hidden;
      box-shadow: none;

      &::before {
        position: absolute;
        box-sizing: border-box;
        top: 0;
        bottom: 0;
        inset-inline-start: 0;
        width: ${e.space.base}px;
        border-inline-end: ${e.borderWidths.sm} solid ${H({theme:e,variable:`background.default`})};
        background-color: ${H({theme:e,variable:`border.primaryEmphasis`})};
        pointer-events: none;
        content: '';
      }
    `}

    &[aria-disabled='true'] {
      &::before {
        display: none;
      }
    }
  `},Au=({theme:e})=>F`
  && {
    padding: ${e.space.xxs};
  }

  ${Ou} {
    margin-block-start: ${Du({theme:e})};
  }
`,ju=e=>ku(e),Mu=e=>ku(e),Nu=({theme:e})=>F`
  margin: ${e.space.xxs} ${e.space.xs};
`,Pu=({theme:e})=>F`
  ${Ou} {
    margin-block-start: ${Du({theme:e})};
  }
`,Fu=({theme:e,$type:t})=>{switch(t){case`success`:return H({theme:e,hue:`successHue`,light:{shade:200},dark:{shade:900}});case`error`:return H({theme:e,hue:`dangerHue`,light:{shade:200},dark:{shade:900}});case`warning`:return H({theme:e,hue:`warningHue`,light:{shade:200},dark:{shade:900}});case`info`:return H({theme:e,hue:`neutralHue`,light:{shade:200},dark:{shade:900}});default:return H({theme:e,hue:`neutralHue`,light:{shade:200},dark:{shade:900}})}},Iu=({theme:e,$type:t})=>{switch(t){case`success`:return H({theme:e,variable:`foreground.successEmphasis`});case`error`:return H({theme:e,variable:`foreground.dangerEmphasis`});case`warning`:return H({theme:e,variable:`foreground.warningEmphasis`});case`info`:return H({theme:e,variable:`foreground.default`});default:return H({theme:e,variable:`foreground.default`})}},Lu=({theme:e,$type:t})=>F`
  padding: ${e.space.base*4}px ${e.space.base*10}px;
  border-radius: ${e.borderRadii.xl};
  border-color: transparent;
  background-color: ${Fu({theme:e,$type:t})};
  color: ${Iu({theme:e,$type:t})};
`,Ru=({theme:e})=>F`
  padding: ${e.space.base*4}px ${e.space.base*10}px;
  border-radius: ${e.borderRadii.xl};
  box-shadow: 0 ${e.space.base}px ${e.space.base*2}px ${H({theme:e,variable:`shadow.medium`})};
`,zu=({theme:e})=>F`
  top: ${e.space.base*3}px;
  ${e.rtl?`left`:`right`}: ${e.space.base*3}px;
`,Bu=({theme:e})=>F`
  ${e.rtl?`right`:`left`}: ${e.space.base*3}px;
  margin-top: 0;
  top: ${e.space.base*4}px;
`,Vu={"buttons.button":mu,"buttons.icon_button":hu},Hu={"forms.checkbox":_u,"forms.radio":vu,"forms.toggle":yu},Uu={"modals.modal":bu,"modals.footer_item":xu,"modals.drawer":Su,"modals.drawer.close":Cu,"modals.tooltip_dialog":wu,"modals.tooltip_dialog.body":Tu,"modals.tooltip_dialog.footer":Eu},Wu={"dropdowns.menu":Au,"dropdowns.menu.item":ju,"dropdowns.menu.item_anchor":Mu,"dropdowns.menu.separator":Nu,"dropdowns.menu.item_group":Pu},Gu={"notifications.alert":Lu,"notifications.notification":Ru,"notifications.close":zu,"notifications.icon":Bu},J={black:`#000`,white:`#ffffff`,product:{support:`#00a656`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f7f7f7`,200:`#eae9e8`,300:`#dcdcda`,400:`#b7b7b3`,500:`#999b97`,600:`#8b8e89`,700:`#646864`,800:`#404241`,900:`#2f3130`,1e3:`#202121`,1100:`#19191a`,1200:`#0c0c0d`},blue:{100:`#f3f6fb`,200:`#e4eaf6`,300:`#d4ddf0`,400:`#a3b7df`,500:`#7f9bd3`,600:`#698cd3`,700:`#406cc4`,800:`#284173`,900:`#1f335a`,1e3:`#14213b`,1100:`#0c1322`,1200:`#080c16`},red:{100:`#fbf3f3`,200:`#f7e5e6`,300:`#f3d7d9`,400:`#e5a8ab`,500:`#da8286`,600:`#d46f74`,700:`#c63f46`,800:`#792428`,900:`#5f1c20`,1e3:`#3f1315`,1100:`#260b0d`,1200:`#190708`},yellow:{100:`#faf6da`,200:`#f6eba6`,300:`#eedf7a`,400:`#ccb748`,500:`#b09b0f`,600:`#a08d0e`,700:`#7f7004`,800:`#4c4207`,900:`#3b3405`,1e3:`#262203`,1100:`#171402`,1200:`#0e0d01`},green:{100:`#eff9e6`,200:`#ddf0c9`,300:`#c6e8a1`,400:`#91c466`,500:`#6dab2c`,600:`#649c28`,700:`#4b7d04`,800:`#2f4913`,900:`#25390f`,1e3:`#18250a`,1100:`#0e1606`,1200:`#090e04`},purple:{100:`#f7f4fa`,200:`#eee7f3`,300:`#e5daec`,400:`#c6aed7`,500:`#af8ec7`,600:`#a47ebf`,700:`#8d59b1`,800:`#54356a`,900:`#422953`,1e3:`#2b1b36`,1100:`#191020`,1200:`#100a14`},fuschia:{100:`#fbf3f8`,200:`#f7e6f1`,300:`#f2d5e7`,400:`#e3a4cc`,500:`#d77db7`,600:`#d16aac`,700:`#b34496`,800:`#78116c`,900:`#5a0d51`,1e3:`#3f0939`,1100:`#31072c`,1200:`#1b0418`},pink:{100:`#fcf3f4`,200:`#f7e5e8`,300:`#f3d6dc`,400:`#e5a6b4`,500:`#d98193`,600:`#d96b81`,700:`#d62054`,800:`#75263d`,900:`#561d2e`,1e3:`#3c141f`,1100:`#2e0f18`,1200:`#17080c`},crimson:{100:`#fbf3f2`,200:`#f7e7e4`,300:`#f1d7d2`,400:`#e2aaa0`,500:`#d58678`,600:`#cf7464`,700:`#be4938`,800:`#811b12`,900:`#61140d`,1e3:`#440e09`,1100:`#340b07`,1200:`#1c0604`},orange:{100:`#fdf3ed`,200:`#fae7d8`,300:`#f7d7be`,400:`#eda875`,500:`#e58035`,600:`#d57428`,700:`#af5626`,800:`#693317`,900:`#4d2711`,1e3:`#361a0c`,1100:`#291409`,1200:`#150a04`},lemon:{100:`#fff7d4`,200:`#ffea97`,300:`#ffdc4f`,400:`#efab00`,500:`#c79100`,600:`#b68500`,700:`#8f6900`,800:`#563e00`,900:`#3f2e00`,1e3:`#2b2000`,1100:`#221800`,1200:`#110c00`},lime:{100:`#ecfae7`,200:`#d1f3c7`,300:`#b3eda3`,400:`#4fd12b`,500:`#45b025`,600:`#509f2d`,700:`#3d7e19`,800:`#2c491b`,900:`#203614`,1e3:`#16250e`,1100:`#111d0a`,1200:`#090e05`},mint:{100:`#d6ffeb`,200:`#9affce`,300:`#0afe89`,400:`#00d26d`,500:`#01b15c`,600:`#16a260`,700:`#2d7e55`,800:`#1b4b33`,900:`#143726`,1e3:`#0e261a`,1100:`#0b1d14`,1200:`#050e0a`},teal:{100:`#d4fefa`,200:`#88fdf1`,300:`#0bf8e1`,400:`#03cdb8`,500:`#02ad9c`,600:`#2a9d8f`,700:`#367a74`,800:`#254846`,900:`#1b3534`,1e3:`#122423`,1100:`#0e1c1a`,1200:`#070d0d`},azure:{100:`#eff7fe`,200:`#d9ecfc`,300:`#c4e0fa`,400:`#82bcf4`,500:`#4b9fee`,600:`#3191ea`,700:`#2770c3`,800:`#23446b`,900:`#1a3250`,1e3:`#122238`,1100:`#0e1a2a`,1200:`#070d14`},royal:{100:`#f4f5fc`,200:`#e7e9f8`,300:`#d8dcf4`,400:`#acb4e7`,500:`#8a96dd`,600:`#7a88d9`,700:`#4c67d3`,800:`#1833ab`,900:`#122680`,1e3:`#0d1a5a`,1100:`#0a1445`,1200:`#050a25`},kale:{100:`#ecf9f9`,200:`#daeded`,300:`#cbe2e1`,400:`#97bfbf`,500:`#6ba4a5`,600:`#4a9999`,700:`#40787a`,800:`#16494f`,900:`#063940`,1e3:`#03252a`,1100:`#061517`,1200:`#060e0e`}},{product:Ku,...qu}=J,Ju={primaryHue:`blue`,dangerHue:`red`,warningHue:`yellow`,successHue:`green`,neutralHue:`grey`,chromeHue:`kale`,variables:{dark:{background:{default:`neutralHue.1100`,raised:`neutralHue.1000`,recessed:`neutralHue.1200`,subtle:`neutralHue.1000`,emphasis:`neutralHue.600`,success:`successHue.1000`,warning:`warningHue.1000`,danger:`dangerHue.1000`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`rgba(white, 100)`},border:{default:`neutralHue.800`,emphasis:`neutralHue.600`,subtle:`neutralHue.900`,success:`successHue.900`,warning:`warningHue.900`,danger:`dangerHue.900`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`neutralHue.800`},foreground:{default:`neutralHue.300`,subtle:`neutralHue.500`,onEmphasis:`neutralHue.1100`,primary:`primaryHue.600`,success:`successHue.400`,warning:`warningHue.400`,danger:`dangerHue.400`,successEmphasis:`successHue.300`,warningEmphasis:`warningHue.300`,dangerEmphasis:`dangerHue.300`,disabled:`neutralHue.700`},shadow:{small:`rgba(neutralHue.1200, 1100)`,medium:`rgba(neutralHue.1200, 800)`,large:`rgba(neutralHue.1200, 1000)`}},light:{background:{default:`palette.white`,raised:`palette.white`,recessed:`neutralHue.100`,subtle:`neutralHue.100`,emphasis:`neutralHue.700`,success:`successHue.100`,warning:`warningHue.100`,danger:`dangerHue.100`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`rgba(neutralHue.700, 100)`},border:{default:`neutralHue.300`,emphasis:`neutralHue.600`,subtle:`neutralHue.200`,success:`successHue.300`,warning:`warningHue.300`,danger:`dangerHue.300`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`neutralHue.300`},foreground:{default:`neutralHue.900`,subtle:`neutralHue.700`,onEmphasis:`palette.white`,primary:`primaryHue.700`,success:`successHue.700`,warning:`warningHue.700`,danger:`dangerHue.700`,successEmphasis:`successHue.900`,warningEmphasis:`warningHue.900`,dangerEmphasis:`dangerHue.900`,disabled:`neutralHue.600`},shadow:{small:`rgba(neutralHue.1200, 200)`,medium:`rgba(neutralHue.1200, 200)`,large:`rgba(neutralHue.1200, 200)`}}}},Yu=(e=Qi)=>({...e,components:{...e.components,...Vu,...Hu,...Wu,...Uu,...Gu},borders:{...e.borders},borderRadii:{...e.borderRadii,xs:`2px`,sm:`4px`,md:`8px`,lg:`12px`,xl:`16px`,xxl:`24px`,full:`9999px`},borderStyles:{...e.borderStyles},borderWidths:{...e.borderWidths},breakpoints:{...e.breakpoints},fonts:{...e.fonts},fontSizes:{...e.fontSizes},fontWeights:{...e.fontWeights},iconSizes:{...e.iconSizes},lineHeights:{...e.lineHeights},opacity:{...e.opacity},shadowWidths:{...e.shadowWidths},shadows:{...e.shadows},space:{...e.space},colors:{...e.colors,...Ju,base:e.colors?.base??`light`},palette:{...e.palette,...qu}});Yu();var Xu=({theme:e=Yu,...t})=>(0,G.jsx)(vi,{theme:e,...t}),Zu=[{id:`fillmore`,name:`Fillmore`,role:`Admin`,email:`fill.more@email.com`,status:`Active`,brand:`Dinoco`,extraBrands:1,group:`Support`,productAccess:`Support, Knowledge, AI agents`,lastSignIn:`Never`,aiAgentsAccess:`Full Access`},{id:`mater`,name:`T. Mater`,role:`Test API`,email:`t.mater@email.com`,status:`Active`,brand:`Rusteze`,extraBrands:0,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:`No Access`},{id:`jams-concord`,name:`Jams Concord`,role:`Test API`,email:`jams@email.com`,status:`Active`,brand:`Dinoco`,extraBrands:1,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:`Limited Access`},{id:`kim-pop`,name:`Kim Pop`,role:`Test API`,email:`email@email.com`,status:`Active`,brand:`Dinoco`,extraBrands:1,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:`Full Access`},{id:`masked-agent`,name:`Masked Agent James Carter`,role:`Test API`,email:`masked.agent.james.carter@gmail.com`,status:`Active`,brand:`Rusteze`,extraBrands:0,group:`Support`,productAccess:`Support, Knowledge, Chat`,lastSignIn:`Nov 14, 2025`,aiAgentsAccess:`No Access`}],Qu={admin:[`Lightning McQueen`,`Sally Carrera`,`Doc Hudson`,`Ramone`,`Flo`,`Sheriff`],contributor:[`Boost`,`DJ`,`Wingo`,`Snot Rod`,`Finn McMissile`,`Holley Shiftwell`,`Francesco Bernoulli`,`Professor Zundapp`,`Grem`,`Acer`],"light-agent":[`Cruz Ramirez`,`Smokey`,`Jackson Storm`,`Sterling`,`Natalie Certain`,`Miss Fritter`,`Cal Weathers`,`Bobby Swift`,`Brick Yardley`,`River Scott`,`Junior Moon`,`Louise Nash`,`Darrell Cartrip`,`Bob Cutlass`,`Brent Mustangburger`],advisor:[`Woody`,`Buzz Lightyear`,`Jessie`,`Bullseye`,`Rex`,`Hamm`,`Slinky Dog`,`Bo Peep`,`Mr. Potato Head`,`Mrs. Potato Head`,`Forky`,`Ducky`,`Bunny`,`Duke Caboom`,`Gabby Gabby`,`Lotso Bear`,`Ken`,`Barbie`,`Wheezy`,`RC`,...Array.from({length:307},(e,t)=>`Advisor Agent ${t+21}`)],counselor:[`Joy`,`Sadness`,`Anger`,`Fear`,`Disgust`,`Bing Bong`,`Riley`,`Mom Andersen`,`Dad Andersen`,`Jangles`,`Rainbow Unicorn`,`Fritz`,`Lance Slashblade`]},$u={admin:`Admin`,contributor:`Contributor`,"light-agent":`Subtle agent`,advisor:`Advisor`,counselor:`Counselor`},ed=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``),td={no_access:`No access`,client_admin:`Client admin`,client_editor:`Client editor`,client_user:`Client user`},nd=[{id:`support`,name:`Support`},{id:`knowledge`,name:`Knowledge`},{id:`analytics`,name:`Analytics`},{id:`voice`,name:`Voice`},{id:`chat`,name:`Chat`},{id:`ai-agents`,name:`AI agents`},{id:`qa`,name:`Quality assurance`,disabled:!0}],rd=nd.filter(e=>e.id!==`chat`),id=nd.filter(e=>!e.disabled&&e.id!==`ai-agents`),ad=rd.filter(e=>!e.disabled&&e.id!==`ai-agents`),od=[`No Access`,`Full Access`,`Limited Access`],sd=Object.entries(Qu).flatMap(([e,t])=>t.map((t,n)=>({id:ed(t),name:t,role:$u[e],email:`${ed(t)}@z3nrusteze.zendesk.com`,status:`Active`,brand:n%2==0?`Dinoco`:`Rusteze`,extraBrands:0,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:od[n%3]}))),cd=[...Zu,...sd],ld=[`No access`,`Client admin`,`Client editor`,`Client user`],ud=[`No access`,`Client admin`,`Client editor`],dd=Object.fromEntries(cd.map((e,t)=>[e.id,Object.fromEntries(id.map((n,r)=>e.role===`Advisor`?[n.id,ud[(t+r)%ud.length]]:[n.id,ld[(t+r)%ld.length]]))])),fd=Object.fromEntries(Object.entries(Qu).map(([e,t])=>[e,t.map(ed)])),pd=[{id:`admin`,name:`Admin`,type:`System`,description:`Can manage all settings, except billing`},{id:`contributor`,name:`Contributor`,type:`System`,description:`Can provide limited support`},{id:`light-agent`,name:`Subtle agent`,type:`System`,description:`Can view and add private comments to tickets`},{id:`advisor`,name:`Advisor`,type:`Custom`,description:`Can automate ticket workflows, manage channels and make private comments on tickets`},{id:`counselor`,name:`Counselor`,type:`Custom`,description:`Agent support when it gets complicated`}],md=[{product:`Support`,role:`Admin`,access:`yes`,icon:`support`},{product:`Knowledge`,role:`Admin`,access:`checkbox`,checked:!0,hasInfo:!0,icon:`knowledge`},{product:`Analytics`,role:`Admin`,access:`checkbox`,checked:!0,hasInfo:!0,icon:`analytics`},{product:`Voice`,role:`Agent`,access:`checkbox`,checked:!1,icon:`voice`},{product:`Chat`,role:`Agent`,access:`checkbox`,checked:!1,icon:`chat`},{product:`AI agents`,role:`Client admin`,access:`ai_agents`,checked:!0,icon:`ai_agents`},{product:`Quality assurance`,role:null,access:`disabled`,message:`Subscription limit reached`,icon:`qa`}],hd=(0,g.createContext)();function gd({children:e}){let[t,n]=(0,g.useState)(`v3`),[r,i]=(0,g.useState)({}),[a,o]=(0,g.useState)(pd),s={optedIn:!1,saved:!1,accessLevel:null},c=e=>r[e]||s,l=(e,t)=>{i(n=>({...n,[e]:{...s,...n[e],...t}}))},[u,d]=(0,g.useState)(null),[f,p]=(0,g.useState)(fd);(0,g.useEffect)(()=>{p(e=>{let t={...e};for(let[e,n]of Object.entries(fd))t[e]=n;return t})},[fd]);let m={optedIn:!1,saved:!1,accessLevel:null},[h,_]=(0,g.useState)({}),v=(0,g.useRef)(!0);return(0,g.useEffect)(()=>{if(v.current){v.current=!1;return}i({}),_({})},[t]),(0,G.jsx)(hd.Provider,{value:{version:t,setVersion:n,getAiAgentsState:c,updateAiAgentsState:l,roles:a,addRole:e=>{o(t=>[...t,e])},aiAgentsRoleId:u,setAiAgentsRoleId:d,roleAssignments:f,assignMembersToRole:(e,t)=>{p(n=>{let r=n[e]||[],i=Array.from(new Set([...r,...t]));return{...n,[e]:i}})},isMemberAiAgentsMigrated:e=>u?(f[u]||[]).includes(e):!1,getMemberAssignedRole:e=>{let t=Object.keys(f).find(t=>(f[t]||[]).includes(e));return t&&a.find(e=>e.id===t)||null},getProductAccess:(e,t)=>h[e]?.[t]||m,updateProductAccess:(e,t,n)=>{_(r=>({...r,[e]:{...r[e]||{},[t]:{...m,...r[e]?.[t],...n}}}))},saveProductAccess:e=>{_(t=>{let n=t[e];if(!n)return t;let r=Object.fromEntries(Object.entries(n).map(([e,t])=>[e,t.optedIn?{...t,saved:!0}:t]));return{...t,[e]:r}})},copyProductAccess:(e,t)=>{_(n=>{let{[e]:r,...i}=n;if(!r)return n;let a=Object.fromEntries(Object.entries(r).map(([e,t])=>[e,t.optedIn?{...t,saved:!0}:t]));return{...i,[t]:a}})}},children:e})}function _d(){return(0,g.useContext)(hd)}var vd=I.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: 9500;
  width: 420px;
  max-height: min(70vh, 640px);
  overflow-y: auto;
  background: #ffffff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  color: #2f3941;
`,yd=I.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: #ffffff;
  border-bottom: 1px solid #e9ebed;
`,bd=I.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,xd=I.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  color: #68737d;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #f8f9f9;
    color: #2f3941;
  }
`,Sd=I.div`
  padding: 4px 16px 16px;
`,Cd=I.div`
  padding: 16px 0;

  & + & {
    border-top: 1px solid #e9ebed;
  }
`,wd=I.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
`,Td=I.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Ed=I.span`
  flex-shrink: 0;
  font-size: 12px;
  color: #87929d;
`,Dd=I.p`
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.5;
  color: #49545c;
`,Od=I.div`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`,kd=I.h3`
  margin: 0 0 4px;
  font-size: 12px;
  font-weight: 600;
  color: #68737d;
`,Ad=I.ul`
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  line-height: 1.5;
  color: #2f3941;

  li + li {
    margin-top: 4px;
  }
`,jd=I.button`
  margin-top: 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  background: #fff;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.disabled?`#a4a9ac`:`#1f73b7`};
  cursor: ${e=>e.disabled?`default`:`pointer`};

  &:hover {
    background: ${e=>e.disabled?`#fff`:`#f8f9f9`};
    border-color: ${e=>e.disabled?`#d8dcde`:`#1f73b7`};
  }
`;function Md({entries:e,versions:t,activeVersionId:n,onGoToVersion:r,onClose:i}){let a=e=>t?.find(t=>t.id===e)?.label??e;return(0,G.jsxs)(vd,{role:`dialog`,"aria-label":`Version notes`,children:[(0,G.jsxs)(yd,{children:[(0,G.jsx)(bd,{children:`Version notes`}),(0,G.jsx)(xd,{type:`button`,onClick:i,"aria-label":`Close version notes`,children:(0,G.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,G.jsx)(`path`,{d:`M1 1L11 11M11 1L1 11`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})})]}),(0,G.jsx)(Sd,{children:e?.map(e=>{let t=e.versionId===n;return(0,G.jsxs)(Cd,{children:[(0,G.jsxs)(wd,{children:[(0,G.jsx)(Td,{children:a(e.versionId)}),(0,G.jsx)(Ed,{children:e.date})]}),(0,G.jsx)(Dd,{children:e.summary}),e.sections?.map((e,t)=>(0,G.jsxs)(Od,{children:[e.title&&(0,G.jsx)(kd,{children:e.title}),(0,G.jsx)(Ad,{children:e.bullets.map((e,t)=>(0,G.jsx)(`li`,{children:e},t))})]},t)),(0,G.jsx)(jd,{type:`button`,disabled:t,onClick:()=>!t&&r?.(e.versionId),children:t?`Currently viewing`:`Go to ${a(e.versionId)} →`})]},e.versionId)})})]})}var Nd=9500,Pd=`#01b15c`,Fd=I.header`
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: ${48}px;
  padding: 0 16px;
  background-color: ${e=>e.$inspectActive?Pd:`#1a1f24`};
  color: #ffffff;
  font-family: inherit;
  user-select: none;
  transition: background-color 0.15s ease;
`,Id=I.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
`,Ld=I.span`
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Rd=I.span`
  flex-shrink: 0;
  color: #363d44;
  font-size: 13px;
  line-height: 1;
`,zd=I.span`
  flex-shrink: 0;
  color: #7c8590;
  font-size: 12px;
  white-space: nowrap;
`,Bd=[null,`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function Vd(e){if(typeof e!=`string`)return null;let[t,n,r]=e.split(`-`).map(Number);return!t||!n||!r||!Bd[n]?null:`${Bd[n]} ${r}, ${t}`}var Hd=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,Ud=I.div`
  position: relative;
`,Wd=I.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 28px;
  padding: 0 10px;
  border: 1px solid ${e=>e.$open?`#555e66`:`#363d44`};
  border-radius: 4px;
  background: ${e=>e.$open?`#262c32`:`transparent`};
  color: #c8cdd0;
  font-family: inherit;
  font-size: 13px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #262c32;
    border-color: #555e66;
    color: #ffffff;
  }
`,Gd=I.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
`,Kd=I.span`
  font-weight: 600;
`,qd=I.span`
  font-weight: 400;
  color: #7c8590;
  font-size: 12px;
`,Jd=I.svg`
  flex-shrink: 0;
  transform: ${e=>e.$open?`rotate(180deg)`:`none`};
`,Yd=({$open:e})=>(0,G.jsx)(Jd,{$open:e,width:`8`,height:`5`,viewBox:`0 0 8 5`,fill:`currentColor`,"aria-hidden":`true`,focusable:`false`,children:(0,G.jsx)(`path`,{d:`M0 0 L4 5 L8 0 Z`})}),Xd=I.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: ${Nd};
  padding: 4px 0;
  border: 1px solid #363d44;
  border-radius: 4px;
  background-color: #262c32;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  width: max-content;
`,Zd=I.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 7px 14px;
  border: 0;
  background: ${e=>e.$selected?`#323b44`:`transparent`};
  color: ${e=>e.$selected?`#ffffff`:`#c8cdd0`};
  font-family: inherit;
  font-size: 13px;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #323b44;
    color: #ffffff;
  }
`,Qd=I.span`
  flex-shrink: 0;
  width: 12px;
  color: #6ba4e0;
  font-size: 11px;
`,$d=I.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`,ef=I.span`
  font-weight: 600;
`,tf=I.span`
  font-weight: 400;
  font-size: 12px;
  color: #7c8590;
`,nf=I.div`
  height: 1px;
  background: #363d44;
  margin: 4px 0;
`,rf=I.div`
  padding: 5px 14px 2px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #555e66;
`,af=I.div`
  display: flex;
  align-items: center;
`,of=I.div`
  position: relative;
`,sf=I.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border: 1px solid ${e=>e.$open?`#555e66`:`#363d44`};
  border-radius: 4px;
  background: ${e=>e.$open?`#262c32`:`transparent`};
  color: #c8cdd0;
  font-family: inherit;
  font-size: 13px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #262c32;
    border-color: #555e66;
    color: #ffffff;
  }
`,cf=()=>(0,G.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,G.jsx)(`path`,{d:`M3 1.5h6l2 2v9H3v-11z`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinejoin:`round`}),(0,G.jsx)(`path`,{d:`M5 6h4M5 8.5h4`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`})]});function lf({title:e,meta:t,versions:n,versionId:r,onVersionChange:i,versionLabel:a=`Version`,versionNotes:o,commentSlotRef:s,inspectSlotRef:c,inspectActive:l=!1}){let[u,d]=(0,g.useState)(!1),[f,p]=(0,g.useState)(!1),m=(0,g.useRef)(null),h=(0,g.useRef)(null),_=n?.find(e=>e.id===r),v=n?.filter(e=>!e.archived)??[],y=n?.filter(e=>e.archived)??[],b=Vd(`2026-10-13`),x=[t,b?`Updated ${b}`:null].filter(Boolean).join(` · `);return(0,g.useEffect)(()=>{if(!u)return;let e=e=>{m.current?.contains(e.target)||d(!1)},t=e=>{e.key===`Escape`&&d(!1)};return document.addEventListener(`pointerdown`,e,!0),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e,!0),document.removeEventListener(`keydown`,t)}},[u]),(0,g.useEffect)(()=>{if(!f)return;let e=e=>{h.current?.contains(e.target)||p(!1)},t=e=>{e.key===`Escape`&&p(!1)};return document.addEventListener(`pointerdown`,e,!0),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e,!0),document.removeEventListener(`keydown`,t)}},[f]),(0,G.jsxs)(Fd,{$inspectActive:l,children:[(0,G.jsxs)(Id,{children:[(0,G.jsx)(Ld,{children:e}),x&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Rd,{"aria-hidden":`true`,children:`|`}),(0,G.jsx)(zd,{children:x})]})]}),(0,G.jsxs)(Hd,{children:[n?.length>0&&(0,G.jsxs)(Ud,{ref:m,children:[(0,G.jsxs)(Wd,{type:`button`,$open:u,onClick:()=>{p(!1),d(e=>!e)},"aria-expanded":u,"aria-haspopup":`listbox`,children:[(0,G.jsxs)(Gd,{children:[(0,G.jsx)(Kd,{children:_?.label??a}),_?.description&&(0,G.jsx)(qd,{children:_.description})]}),(0,G.jsx)(Yd,{$open:u})]}),u&&(0,G.jsxs)(Xd,{role:`listbox`,"aria-label":a,children:[v.map(e=>(0,G.jsxs)(Zd,{type:`button`,role:`option`,"aria-selected":e.id===r,$selected:e.id===r,onClick:()=>{d(!1),e.id!==r&&i?.(e.id)},children:[(0,G.jsx)(Qd,{children:e.id===r?`✓`:``}),(0,G.jsxs)($d,{children:[(0,G.jsx)(ef,{children:e.label}),e.description&&(0,G.jsx)(tf,{children:e.description})]})]},e.id)),y.length>0&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(nf,{}),(0,G.jsx)(rf,{children:`Archive`}),y.map(e=>(0,G.jsxs)(Zd,{type:`button`,role:`option`,"aria-selected":e.id===r,$selected:e.id===r,onClick:()=>{d(!1),e.id!==r&&i?.(e.id)},children:[(0,G.jsx)(Qd,{children:e.id===r?`✓`:``}),(0,G.jsxs)($d,{children:[(0,G.jsx)(ef,{children:e.label}),e.description&&(0,G.jsx)(tf,{children:e.description})]})]},e.id))]})]})]}),o?.length>0&&(0,G.jsxs)(of,{ref:h,children:[(0,G.jsxs)(sf,{type:`button`,$open:f,onClick:()=>{d(!1),p(e=>!e)},"aria-expanded":f,"aria-haspopup":`dialog`,children:[(0,G.jsx)(cf,{}),`Version notes`]}),f&&(0,G.jsx)(Md,{entries:o,versions:n,activeVersionId:r,onGoToVersion:e=>{p(!1),e!==r&&i?.(e)},onClose:()=>p(!1)})]}),(0,G.jsx)(af,{ref:c}),(0,G.jsx)(af,{ref:s})]})]})}var uf=[{versionId:`v3.5`,date:`Sep 2026`,summary:`Same panel redesign and filter drawer as V3, but topic filters strip matching permissions out of capsules and hide empty ones.`,sections:[{title:`Deep filters`,bullets:[`Same Flora Filter button → Drawer (with scrim) as V3`,`Topic filters remove non-matching permission rows inside capsules`,`Capsules with nothing left to show are hidden`,`Matching content keeps its capsule title for context`]}]},{versionId:`v3`,date:`Sep 2026`,summary:`Panel redesign for centralized product access: grouped Settings vs Products, no opt-ins, merged Knowledge, and Flora filters that show or hide whole capsules.`,sections:[{title:`Role page`,bullets:[`Settings and Products grouped as separate sections`,`Product access goes straight to radios (no opt-in) for Support, Knowledge, Analytics, Voice, AI agents, QA`,`Chat removed (sunset); Knowledge settings + product access merged into one capsule`,`Tickets → Security and privacy unchanged; Reporting stays in Settings`,`Search permissions + Flora Filter drawer (scrim); filters show/hide whole capsules only`,`Optional “Only available settings” filter (off by default; includes plan-limited QA until applied)`,`Hidden search tags on capsules for discoverability`,`Default version on load`]}]},{versionId:`v2.5`,date:`Sep 2026`,summary:`Same product opt-ins as V2, but scales the team-member impact preview: one summary warning plus a work-area table instead of a banner on every name.`,sections:[{title:`Team members panel`,bullets:[`Single warning below the Team members explanation when opt-ins would change access`,`Title: Access changed for N team members; body lists affected products`,`Preview access change Anchor opens a work-area preview (not a modal)`]},{title:`Preview access change`,bullets:[`Breadcrumbed screen: Roles › [role] › Preview access change`,`Table: team member (link to profile), product, current access, new access`,`Search, product filter, and pagination for large rosters`]}]},{versionId:`v2`,date:`Aug 2026`,summary:`Scales the AI agents access change preview to every product on the role, and adds a search field for the settings themselves.`,sections:[{title:`Role page`,bullets:[`One opt-in capsule per product (Support, Knowledge, Analytics, Voice, Chat, AI agents), following the AI agents opt-in pattern`,`Quality assurance renders disabled, showing "Subscription limit reached"`,`AI agents capsule starts closed, like every other capsule`,`Search permissions field above the capsules that highlights matches in yellow/300 and opens any capsule with a hit`]},{title:`Team members panel`,bullets:[`A single "Access change(s)" warning per member, listing every product that would change`,`Each line: product name, then a bullet with current access to new access`]}]},{versionId:`v1`,date:`Jul 2026`,summary:`The original custom roles flow, an AI agents only access change preview.`,sections:[{title:null,bullets:[`AI agents capsule: opt-in checkbox, then access-level radios (No access / Client admin / Client editor / Client user)`,`Team members side panel warns when a role change would affect a member’s AI agents access`,`Assign role modal: search and multi-select team members to assign`]}]}],df=`data-comment-root`,ff=`data-comment-anchor`,pf=[`[data-comment-anchor]`,`tr`,`th`,`button`,`a[href]`,`label`,`input`,`select`,`section`,`nav`],mf=()=>document.querySelector(`[${df}]`),hf=(e,t)=>{let n=mf();if(!n)return null;let r=document.elementsFromPoint(e,t).find(e=>n.contains(e));if(!r)return null;for(let e of pf){let t=r.closest(e);if(t&&n.contains(t))return t}return r},gf=e=>{let t=mf();if(!t||!t.contains(e))return null;let n=[],r=e;for(;r&&r!==t;){let e=r.parentElement;if(!e)return null;let t=r.tagName.toLowerCase(),i=[...e.children].filter(e=>e.tagName===r.tagName);n.unshift(i.length>1?`${t}:nth-of-type(${i.indexOf(r)+1})`:t),r=e}return n.join(` > `)},_f=e=>{if(!e.children.length){let t=(e.textContent||``).replace(/\s+/g,` `).trim();return t&&t!==`—`?[t]:[]}return[...e.children].flatMap(_f)},vf=e=>{if(!e)return``;let t=e.getAttribute(`aria-label`);if(t)return t.replace(/\s+/g,` `).trim().slice(0,80);let n=_f(e);return n.length?n.join(` · `).slice(0,80):(e.textContent||``).replace(/\s+/g,` `).trim().slice(0,80)},yf=(e,t,n)=>{let r=hf(e,t);if(!r)return null;let i=r.getBoundingClientRect();return{context:n,id:r.getAttribute(ff)||null,path:gf(r),label:vf(r),fraction:{x:i.width?(e-i.left)/i.width:.5,y:i.height?(t-i.top)/i.height:.5}}},bf=e=>{let t=mf();if(!t||!e)return null;if(e.id){let n=t.querySelector(`[${ff}="${CSS.escape(e.id)}"]`);if(n)return n}if(!e.path)return null;let n=null;try{n=t.querySelector(e.path)}catch{return null}return n},xf=e=>{let t=bf(e);if(!t)return null;let n=t.getBoundingClientRect();if(!n.width&&!n.height)return null;let r=e.fraction||{x:.5,y:.5};return{x:n.left+r.x*n.width,y:n.top+r.y*n.height,drifted:!!e.label&&vf(t)!==e.label}},Sf=(e,t)=>{if(!e||!t)return!1;let n=new Set([...Object.keys(e),...Object.keys(t)]);for(let r of n)if(e[r]!==t[r])return!1;return!0},Cf=`https://thaugdzjxphjhviwdwgi.supabase.co`,wf=`sb_publishable_gnUhxN43I7bY6dKrNkVmPA_wjRmciBQ`,Tf=`prototype_comments`,Ef=`prototype_comments_view`,Df=`id,project,author,body,parent_id,number,anchor,resolved,created_at`,Of=`custom-roles-all-plans`,kf=!!wf,Af=`prototype-comments:${Of}`,jf=`prototype-comments:owner-key`,Mf=()=>{try{return crypto.randomUUID()}catch{return`k-${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`}},Nf=()=>{try{let e=window.localStorage.getItem(jf);if(e)return e;let t=Mf();return window.localStorage.setItem(jf,t),t}catch{return Mf()}},Pf=()=>{try{return JSON.parse(window.localStorage.getItem(Af)||`[]`)}catch{return[]}},Ff=e=>{try{window.localStorage.setItem(Af,JSON.stringify(e))}catch{}},If=()=>({apikey:wf,Authorization:`Bearer ${wf}`,"Content-Type":`application/json`,"x-comment-key":Nf()}),Lf=async(e,t={})=>{let n=await fetch(`${Cf}/rest/v1/${e}`,{...t,headers:{...If(),...t.headers}});if(!n.ok){let e=await n.text();throw n.status===403?Error(`Supabase 403: the comment was rejected by its access rules. If this happens on every comment, see src/comments/SETUP.md.`):Error(`Supabase ${n.status}: ${e.slice(0,200)}`)}return n.status===204?null:n.json()},Rf=async()=>{if(!kf)return Pf().map(e=>Hf({...e,is_mine:!0}));let e=`project=eq.${encodeURIComponent(Of)}&order=created_at.asc`;try{return(await Lf(`${Ef}?${e}`)).map(Hf)}catch(t){if(!/\b404\b/.test(t.message))throw t;return(await Lf(`${Tf}?${e}&select=${Df}`)).map(Hf)}},zf=async({author:e,body:t,anchor:n,parentId:r=null,number:i=null})=>{let a={project:Of,author:e,body:t,parent_id:r,number:i,anchor:n||null,resolved:!1};if(!kf){let e=Pf(),t={...a,id:`local-${e.length+1}-${String(e.length)}`,created_at:new Date().toISOString(),is_mine:!0};return Ff([...e,t]),Hf(t)}let[o]=await Lf(`${Tf}?select=${Df}`,{method:`POST`,headers:{Prefer:`return=representation`},body:JSON.stringify(a)});return Hf({...o,is_mine:!0})},Bf=async(e,t)=>{if(!kf){Ff(Pf().map(n=>n.id===e?{...n,resolved:t}:n));return}await Lf(`${Tf}?id=eq.${encodeURIComponent(e)}`,{method:`PATCH`,body:JSON.stringify({resolved:t})})},Vf=async e=>{if(!kf){Ff(Pf().filter(t=>t.id!==e&&t.parent_id!==e));return}let t=await Lf(`${Tf}?id=eq.${encodeURIComponent(e)}&select=id`,{method:`DELETE`,headers:{Prefer:`return=representation`}});if(!t||t.length===0)throw Error(`That comment is already gone — someone may have deleted it first.`)},Hf=e=>({id:e.id,author:e.author,body:e.body,parentId:e.parent_id??null,number:e.number??null,anchor:e.anchor??null,resolved:!!e.resolved,createdAt:e.created_at,isMine:!!e.is_mine}),Uf=`prototype-comments:author`,Wf=()=>{try{return window.localStorage.getItem(Uf)||``}catch{return``}},Gf=e=>{try{window.localStorage.setItem(Uf,e)}catch{}},Kf=`prototype-comment-at`;function qf(e,t){window.dispatchEvent(new CustomEvent(Kf,{detail:{clientX:e,clientY:t}}))}function Jf(e){let t=t=>{let{clientX:n,clientY:r}=t.detail||{};typeof n==`number`&&typeof r==`number`&&e(n,r)};return window.addEventListener(Kf,t),()=>window.removeEventListener(Kf,t)}function Yf(e){e?document.documentElement.dataset.inspectMode=`true`:delete document.documentElement.dataset.inspectMode}var Xf=9e3,Zf=I.button`
  position: ${e=>e.$inline?`static`:`fixed`};
  ${e=>e.$inline?``:`bottom: 24px;`}
  z-index: ${9002};
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  min-height: ${e=>e.$inline?28:40}px;
  padding: ${e=>e.$inline?`0 10px`:`0 16px`};
  /* Inline: dark outlined to match the prototype bar's control set.
     Floating: white pill with shadow, the original floating style. */
  border: ${e=>e.$active?`1px solid #4d7fd4`:e.$inline?`1px solid #363d44`:`1px solid #dcdcda`};
  border-radius: ${e=>e.$inline?`4px`:`20px`};
  background-color: ${e=>e.$active?`#406cc4`:e.$inline?`transparent`:`#ffffff`};
  color: ${e=>e.$active?`#ffffff`:e.$inline?`#c8cdd0`:`#2f3130`};
  box-shadow: ${e=>e.$inline?`none`:`0 2px 8px rgba(10, 13, 14, 0.16)`};
  font-family: inherit;
  font-size: ${e=>e.$inline?13:14}px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.$active?`#284173`:e.$inline?`#262c32`:`#f7f7f7`};
    border-color: ${e=>e.$active?`#4d7fd4`:e.$inline?`#555e66`:`#dcdcda`};
    color: ${e=>e.$inline?`#ffffff`:void 0};
  }
`,Qf=I.div`
  position: fixed;
  z-index: ${Xf};
  cursor: crosshair;
  /* No background at all: a tint over the design would change the colours being
     reviewed, which is the one thing a design review can't tolerate. */
  background-color: transparent;
`,$f=I.button`
  position: fixed;
  z-index: ${9001};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  /* Figma's teardrop: round except for the corner that points at the anchor. */
  border: 2px solid #ffffff;
  border-radius: 50% 50% 50% 2px;
  background-color: ${e=>e.$resolved?`#999b97`:`#406cc4`};
  box-shadow: 0 2px 6px rgba(10, 13, 14, 0.28);
  color: #ffffff;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  /* The anchor point is the pin's bottom-left corner, so the pin sits above and
     right of what it points at rather than covering it. */
  transform: translate(0, -100%);
  opacity: ${e=>e.$dimmed?.45:1};

  &:hover {
    background-color: ${e=>e.$resolved?`#646864`:`#284173`};
  }
`,ep=I.div`
  position: fixed;
  z-index: ${9002};
  box-sizing: border-box;
  width: 300px;
  padding: 12px;
  border-radius: 8px;
  background-color: #17494d;
  box-shadow: 0 6px 20px rgba(10, 13, 14, 0.32);
  color: #ffffff;
  font-size: 14px;
`,tp=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #c2f0e0;
  font-size: 12px;
`,np=I.div`
  display: flex;
  gap: 4px;
`,rp=I.button`
  box-sizing: border-box;
  padding: 2px 6px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: #c2f0e0;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.14);
    color: #ffffff;
  }
`,ip=I.div`
  margin-bottom: 10px;

  & + & {
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }
`,ap=I.div`
  margin-bottom: 2px;
  color: #c2f0e0;
  font-size: 12px;
`,op=I.div`
  white-space: pre-wrap;
  word-break: break-word;
`,sp=I.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,cp=I.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 60px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-family: inherit;
  font-size: 14px;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`,lp=I.input`
  box-sizing: border-box;
  width: 100%;
  padding: 6px 8px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-family: inherit;
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`,up=I.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,dp=I.button`
  box-sizing: border-box;
  min-height: 32px;
  padding: 0 12px;
  border: 0;
  border-radius: 4px;
  background-color: #406cc4;
  color: #ffffff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`,fp=I.div`
  margin-bottom: 8px;
  color: #c2f0e0;
  font-size: 12px;
  word-break: break-word;
`,pp=ki`
  #root {
    width: calc(100% - 320px);
    transition: width 120ms ease-out;
  }

  /* Neutralises viewport-relative widths inside the app. A page container set to
     width: 100vw ignores a narrower #root entirely and keeps sliding under the
     sidebar — max-width re-anchors it to its parent without the app needing to
     know the comment layer exists. */
  #root > * {
    max-width: 100%;
  }
`,mp=I.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${9003};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 320px;
  border-left: 1px solid #dcdcda;
  background-color: #ffffff;
  box-shadow: -4px 0 16px rgba(10, 13, 14, 0.12);
`,hp=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px;
  border-bottom: 1px solid #eae9e8;
  font-size: 14px;
  font-weight: 600;
`,gp=I.div`
  flex: 1;
  box-sizing: border-box;
  padding: 8px;
  overflow-y: auto;
`,_p=I.button`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 4px;
  padding: 10px;
  border: 0;
  border-left: 2px solid ${e=>e.$resolved?`#dcdcda`:`#406cc4`};
  border-radius: 0 4px 4px 0;
  background-color: ${e=>e.$active?`#f3f6fb`:`transparent`};
  color: #2f3130;
  font-family: inherit;
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`,vp=I.div`
  display: flex;
  gap: 6px;
  margin-bottom: 4px;
  color: #646864;
  font-size: 12px;
`,yp=I.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,bp=I.div`
  margin-top: 4px;
  overflow: hidden;
  color: #646864;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xp=I.div`
  padding: 16px;
  color: #646864;
  font-size: 14px;
`,Sp={error:{background:`#fff0f1`,color:`#2f3130`},warn:{background:`#fff7d6`,color:`#2f3130`},info:{background:`#f7f7f7`,color:`#646864`}},Cp=I.div`
  box-sizing: border-box;
  padding: 8px 16px;
  background-color: ${e=>(Sp[e.$tone]||Sp.info).background};
  color: ${e=>(Sp[e.$tone]||Sp.info).color};
  font-size: 12px;
`,wp=24,Tp=200,Ep=()=>{let e=[...document.querySelectorAll(`nav`)].map(e=>e.getBoundingClientRect()).find(e=>e.left<=0&&e.width>0);return Math.min((e?.width||0)+wp,Tp)},Dp=(e,t)=>{let n=new Date(e).getTime();if(Number.isNaN(n))return``;let r=Math.max(0,Math.round((t-n)/1e3));if(r<60)return`just now`;let i=Math.round(r/60);if(i<60)return`${i}m ago`;let a=Math.round(i/60);if(a<24)return`${a}h ago`;let o=Math.round(a/24);return o<31?`${o}d ago`:`${Math.round(o/30)}mo ago`};function Op({context:e,onRestoreContext:t,toggleLeft:n,toggleContainer:r}){let[i,a]=(0,g.useState)(!1),[o,s]=(0,g.useState)([]),[c,l]=(0,g.useState)(null),[u,d]=(0,g.useState)(Wf),[f,p]=(0,g.useState)(()=>!Wf()),[m,h]=(0,g.useState)(null),[_,y]=(0,g.useState)(null),[b,x]=(0,g.useState)(``),[S,C]=(0,g.useState)(``),[w,ee]=(0,g.useState)(0),[te,ne]=(0,g.useState)(()=>Date.now()),[re,T]=(0,g.useState)(wp),ie=n??re;(0,g.useEffect)(()=>{let e=!1;return Rf().then(t=>{e||s(t)}).catch(t=>{e||l(t.message)}),()=>{e=!0}},[]),(0,g.useEffect)(()=>(i?document.documentElement.dataset.commentMode=`true`:delete document.documentElement.dataset.commentMode,()=>{delete document.documentElement.dataset.commentMode}),[i]),(0,g.useEffect)(()=>{if(i)return Jf((t,n)=>{let r=yf(t,n,e);r&&(y(null),x(``),h({anchor:r}))})},[i,e]),(0,g.useEffect)(()=>{if(!i)return;let e=()=>ee(e=>e+1),t=mf();window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e);let n=new ResizeObserver(e);t&&n.observe(t);let r=setTimeout(e,60);return()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e),n.disconnect(),clearTimeout(r)}},[i]),(0,g.useEffect)(()=>{if(r||n!==void 0)return;let e=()=>T(Ep()),t=requestAnimationFrame(e),i=setTimeout(e,200);return window.addEventListener(`resize`,e),()=>{cancelAnimationFrame(t),clearTimeout(i),window.removeEventListener(`resize`,e)}},[n,r]),(0,g.useEffect)(()=>{if(!i)return;let e=setInterval(()=>ne(Date.now()),3e4);return()=>clearInterval(e)},[i]),(0,g.useEffect)(()=>{if(!i)return;let e=e=>{e.key===`Escape`&&(m?h(null):_?y(null):a(!1))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[i,m,_]);let ae=(0,g.useMemo)(()=>o.filter(e=>!e.parentId),[o]),E=(0,g.useCallback)(e=>o.filter(t=>t.parentId===e),[o]),oe=(0,g.useMemo)(()=>ae.map(t=>{if(!Sf(t.anchor?.context,e))return null;let n=xf(t.anchor);return n?{comment:t,position:n}:null}).filter(Boolean),[ae,e,w]),D=(0,g.useMemo)(()=>ae.filter(t=>!Sf(t.anchor?.context,e)),[ae,e]),O=(0,g.useMemo)(()=>{let e=mf();if(!e)return null;let t=e.getBoundingClientRect();return{left:t.left,top:t.top,width:t.width,height:t.height}},[w]),se=(0,g.useMemo)(()=>m?xf(m.anchor):null,[m,w]),ce=_?o.find(e=>e.id===_):null,le=(0,g.useMemo)(()=>ce?xf(ce.anchor):null,[ce,w]),k=t=>{if(document.documentElement.dataset.inspectMode===`true`&&!(t.metaKey||t.ctrlKey))return;if((t.metaKey||t.ctrlKey||t.altKey)&&document.documentElement.dataset.inspectMode!==`true`){let e=document.elementsFromPoint(t.clientX,t.clientY).find(e=>mf()?.contains(e))?.closest(`a[href], button, input, select, [role="button"]`);e&&e.click();return}let n=yf(t.clientX,t.clientY,e);if(!n){y(null),h(null);return}y(null),x(``),h({anchor:n})},ue=async e=>{if(e.preventDefault(),!(!b.trim()||!u.trim())){Gf(u.trim()),p(!1);try{let e=await zf({author:u.trim(),body:b.trim(),anchor:m.anchor,number:ae.length+1});s(t=>[...t,e]),h(null),x(``),y(e.id)}catch(e){l(e.message)}}},de=async e=>{if(e.preventDefault(),!(!S.trim()||!u.trim()||!ce)){Gf(u.trim()),p(!1);try{let e=await zf({author:u.trim(),body:S.trim(),anchor:null,parentId:ce.id});s(t=>[...t,e]),C(``)}catch(e){l(e.message)}}},fe=async e=>{try{await Bf(e.id,!e.resolved),s(t=>t.map(t=>t.id===e.id?{...t,resolved:!e.resolved}:t))}catch(e){l(e.message)}},pe=async e=>{try{await Vf(e.id),s(t=>t.filter(t=>t.id!==e.id&&t.parentId!==e.id)),_===e.id&&y(null)}catch(e){l(e.message)}},me=n=>{let r=n.anchor?.context;r&&!Sf(r,e)&&t?.(r),y(n.id),h(null),C(``);let i=0,a=()=>{let e=bf(n.anchor);if(e){e.scrollIntoView({block:`center`,inline:`nearest`}),ee(e=>e+1);return}i++<10&&requestAnimationFrame(a)};requestAnimationFrame(a)},he=ae.filter(e=>!e.resolved).length,ge=(0,G.jsxs)(Zf,{type:`button`,$inline:!!r,style:r?void 0:{left:ie},$active:i,onClick:()=>{a(e=>!e),h(null),y(null)},"aria-pressed":i,children:[i?`Exit comment mode`:`Comment`,!i&&he>0?` (${he})`:``]});return(0,G.jsxs)(G.Fragment,{children:[r?(0,v.createPortal)(ge,r):ge,i&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(pp,{}),O&&(0,G.jsx)(Qf,{onClick:k,style:{left:O.left,top:O.top,width:O.width,height:O.height}}),oe.map(({comment:e,position:t})=>(0,G.jsx)($f,{type:`button`,style:{left:t.x,top:t.y},$resolved:e.resolved,$dimmed:_!==null&&_!==e.id,onClick:t=>{t.stopPropagation(),h(null),C(``),y(e.id===_?null:e.id)},"aria-label":`Comment ${e.number??``} by ${e.author}`,children:e.number??`•`},e.id)),m&&se&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)($f,{as:`div`,style:{left:se.x,top:se.y},"aria-hidden":`true`,children:`+`}),(0,G.jsxs)(ep,{style:Np(se),onClick:e=>e.stopPropagation(),children:[(0,G.jsxs)(tp,{children:[(0,G.jsx)(`span`,{children:`New comment`}),(0,G.jsx)(np,{children:(0,G.jsx)(rp,{type:`button`,onClick:()=>h(null),children:`Cancel`})})]}),m.anchor.label&&(0,G.jsxs)(fp,{children:[`On: `,m.anchor.label]}),(0,G.jsxs)(sp,{onSubmit:ue,children:[f&&(0,G.jsx)(lp,{value:u,onChange:e=>d(e.target.value),placeholder:`Your name`,"aria-label":`Your name`}),(0,G.jsx)(cp,{value:b,onChange:e=>x(e.target.value),placeholder:`Add a comment`,"aria-label":`Comment`,autoFocus:!0}),(0,G.jsx)(up,{children:(0,G.jsx)(dp,{type:`submit`,disabled:!b.trim()||!u.trim(),children:`Comment`})})]})]})]}),ce&&le&&!m&&(0,G.jsxs)(ep,{style:Np(le),onClick:e=>e.stopPropagation(),children:[(0,G.jsxs)(tp,{children:[(0,G.jsxs)(`span`,{children:[`#`,ce.number??`—`,le.drifted?` · content changed since`:``]}),(0,G.jsxs)(np,{children:[(0,G.jsx)(rp,{type:`button`,onClick:()=>fe(ce),children:ce.resolved?`Unresolve`:`Resolve`}),(0,G.jsx)(rp,{type:`button`,onClick:()=>pe(ce),children:`Delete`}),(0,G.jsx)(rp,{type:`button`,onClick:()=>y(null),children:`Close`})]})]}),(0,G.jsxs)(ip,{children:[(0,G.jsxs)(ap,{children:[ce.author,` · `,Dp(ce.createdAt,te)]}),(0,G.jsx)(op,{children:ce.body})]}),E(ce.id).map(e=>(0,G.jsxs)(ip,{children:[(0,G.jsxs)(ap,{children:[e.author,` · `,Dp(e.createdAt,te)]}),(0,G.jsx)(op,{children:e.body})]},e.id)),(0,G.jsxs)(sp,{onSubmit:de,children:[f&&(0,G.jsx)(lp,{value:u,onChange:e=>d(e.target.value),placeholder:`Your name`,"aria-label":`Your name`}),(0,G.jsx)(cp,{value:S,onChange:e=>C(e.target.value),placeholder:`Reply`,"aria-label":`Reply`}),(0,G.jsx)(up,{children:(0,G.jsx)(dp,{type:`submit`,disabled:!S.trim()||!u.trim(),children:`Reply`})})]})]}),(0,G.jsxs)(mp,{"data-comment-sidebar":`true`,onClick:e=>e.stopPropagation(),children:[(0,G.jsxs)(hp,{children:[(0,G.jsxs)(`span`,{children:[`Comments (`,ae.length,`)`]}),(0,G.jsx)(rp,{type:`button`,style:{color:`#646864`},onClick:()=>a(!1),children:`Close`})]}),kf?(0,G.jsx)(Cp,{$tone:`info`,children:`Shared — everyone with this link sees these comments. You can delete your own.`}):(0,G.jsx)(Cp,{$tone:`warn`,children:`Stored in this browser only — others won't see these. See src/comments/SETUP.md to share them.`}),c&&(0,G.jsx)(Cp,{$tone:`error`,children:c}),D.length>0&&(0,G.jsxs)(Cp,{$tone:`info`,children:[D.length,` comment`,D.length===1?``:`s`,` on another view — click to jump there.`]}),(0,G.jsx)(Cp,{$tone:`info`,children:`Click the design to comment. ⌘-click (or Ctrl-click) to navigate without leaving comment mode.`}),(0,G.jsx)(gp,{children:ae.length===0?(0,G.jsx)(xp,{children:`Click anywhere on the design to leave a comment.`}):ae.map(e=>(0,G.jsxs)(_p,{type:`button`,$active:e.id===_,$resolved:e.resolved,onClick:()=>me(e),children:[(0,G.jsxs)(vp,{children:[(0,G.jsxs)(`span`,{children:[`#`,e.number??`—`]}),(0,G.jsx)(`span`,{children:e.author}),(0,G.jsx)(`span`,{children:Dp(e.createdAt,te)}),e.resolved&&(0,G.jsx)(`span`,{children:`· resolved`})]}),(0,G.jsx)(yp,{children:e.body}),e.anchor?.label&&(0,G.jsxs)(bp,{children:[`On: `,e.anchor.label]})]},e.id))})]})]})]})}var kp=300,Ap=320,jp=320,Mp=12,Np=e=>{let t=window.innerWidth-jp-kp-Mp,n=Math.max(Mp,Math.min(e.x+16,t)),r=window.innerHeight-Ap-Mp;return{left:n,top:Math.max(Mp,Math.min(e.y,r))}},Pp={"foreground.default":`fg/default`,"foreground.subtle":`fg/subtle`,"foreground.primary":`fg/primary`,"foreground.success":`fg/success`,"foreground.warning":`fg/warning`,"foreground.danger":`fg/danger`,"foreground.onEmphasis":`fg/onEmphasis`,"foreground.disabled":`fg/disabled`,"foreground.warningEmphasis":`fg/warningEmphasis`,"foreground.successEmphasis":`fg/successEmphasis`,"foreground.dangerEmphasis":`fg/dangerEmphasis`,"background.default":`bg/default`,"background.subtle":`bg/subtle`,"background.raised":`bg/raised`,"background.recessed":`bg/recessed`,"background.primaryEmphasis":`bg/primaryEmphasis`,"background.success":`bg/success`,"background.warning":`bg/warning`,"background.danger":`bg/danger`,"border.default":`border/default`,"border.subtle":`border/subtle`,"border.emphasis":`border/emphasis`,"border.primaryEmphasis":`border/primaryEmphasis`},Fp=(()=>{let e=new Map,t=(t,n)=>{t&&e.set(Ip(t),n)};return t(J.grey[900],`fg/default`),t(J.grey[700],`fg/subtle`),t(J.blue[700],`fg/primary`),t(J.green[700],`fg/success`),t(J.yellow[700],`fg/warning`),t(J.red[700],`fg/danger`),t(J.white,`fg/onEmphasis`),t(J.grey[600],`fg/disabled`),t(J.yellow[900],`fg/warningEmphasis`),t(J.green[900],`fg/successEmphasis`),t(J.red[900],`fg/dangerEmphasis`),t(J.white,`bg/default`),t(J.grey[100],`bg/subtle`),t(J.blue[700],`bg/primaryEmphasis`),t(J.green[100],`bg/success`),t(J.yellow[100],`bg/warning`),t(J.yellow[200],`bg/warning`),t(J.red[100],`bg/danger`),t(J.grey[300],`border/default`),t(J.grey[200],`border/subtle`),t(J.grey[600],`border/emphasis`),e})();function Ip(e){if(!e||e===`transparent`||e===`rgba(0, 0, 0, 0)`)return null;let t=Ip._ctx||=document.createElement(`canvas`).getContext(`2d`);if(!t)return String(e).trim().toLowerCase();t.fillStyle=`#000`,t.fillStyle=e;let n=t.fillStyle;if(n.startsWith(`#`)){if(n.length===4){let e=n[1],t=n[2],r=n[3];return`#${e}${e}${t}${t}${r}${r}`.toLowerCase()}return n.toLowerCase()}let r=n.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);return r?`#${[r[1],r[2],r[3]].map(e=>Number(e).toString(16).padStart(2,`0`)).join(``)}`:String(e).trim().toLowerCase()}function Lp(e){if(e==null||e===``)return null;let t=parseFloat(e);return Number.isNaN(t)?String(e):t===0?`0`:`${Number.isInteger(t)?t:Math.round(t*100)/100}px`}function Rp(e){return!e||e===`0`||e===`0px`}function zp(e,t,n,r){let i=Lp(e),a=Lp(t),o=Lp(n),s=Lp(r);return[i,a,o,s].every(Rp)?null:i===a&&a===o&&o===s?i:i===o&&a===s?`${i} ${a}`:`${i} ${a} ${o} ${s}`}function Bp(e,t,n,r){if(r)return{label:e,value:r,detail:t?`rendered ${Ip(t)||t}`:null,kind:`token`};let i=Vp(n);if(i)return{label:e,value:Pp[i]||i,detail:t?`rendered ${Ip(t)||t}`:null,kind:`token`};let a=Ip(t);if(!a)return null;let o=Fp.get(a);return o?{label:e,value:o,detail:`rendered ${a}`,kind:`token`}:{label:e,value:a,detail:`computed color`,kind:`computed`}}function Vp(e){if(!e||typeof e!=`string`)return null;let t=e.match(/var\(\s*(--[\w-]+)/);if(t)return t[1];if(e.includes(`foreground.`)||e.includes(`background.`)||e.includes(`border.`)){let t=Object.keys(Pp).find(t=>e.includes(t));if(t)return t}return null}function Hp(e,t){try{return e.style?.getPropertyValue?.(t)||``}catch{return``}}function Up(e){let t=e.closest(`[data-inspect-name]`);if(t?.getAttribute(`data-inspect-name`))return{name:t.getAttribute(`data-inspect-name`),source:`data-inspect-name`};let n=e.closest(`[data-garden-id]`);return n?.getAttribute(`data-garden-id`)?{name:n.getAttribute(`data-garden-id`),source:`data-garden-id`}:null}function Wp(e){let t=[],n=e;for(;n&&n.nodeType===1;){let e=n.getAttribute?.(`data-inspect-token`);if(e&&e.split(/\s+/).filter(Boolean).forEach(e=>{t.includes(e)||t.push(e)}),n.getAttribute?.(`data-inspect-root`)||n.getAttribute?.(`data-comment-root`))break;n=n.parentElement}return t}function Gp(e){if(!(e instanceof Element))return{rows:[],copyText:``,title:`Element`};let t=window.getComputedStyle(e),n=e.getBoundingClientRect(),r=[],i=Up(e);i&&r.push({label:i.source===`data-inspect-name`?`Flora component`:`Component id`,value:i.name,kind:`meta`});let a=e.tagName.toLowerCase();r.push({label:`Element`,value:a+(e.className&&typeof e.className==`string`&&e.className.trim()?`.${e.className.trim().split(/\s+/).slice(0,2).join(`.`)}`:``)}),Wp(e).forEach(e=>{r.push({label:`Token (metadata)`,value:e,kind:`token`})});let o=Bp(`Text color`,t.color,Hp(e,`color`),e.getAttribute(`data-inspect-token-color`));o&&r.push(o);let s=Bp(`Background`,t.backgroundColor,Hp(e,`background-color`),e.getAttribute(`data-inspect-token-bg`));s&&r.push(s);let c=Bp(`Border color`,t.borderTopColor,Hp(e,`border-color`)||Hp(e,`border-top-color`),e.getAttribute(`data-inspect-token-border`));c&&t.borderTopWidth&&t.borderTopWidth!==`0px`&&r.push(c);let l=zp(t.paddingTop,t.paddingRight,t.paddingBottom,t.paddingLeft);l&&r.push({label:`Padding`,value:l});let u=zp(t.marginTop,t.marginRight,t.marginBottom,t.marginLeft);if(u&&r.push({label:`Margin`,value:u}),t.gap&&t.gap!==`normal`&&t.gap!==`0px`)r.push({label:`Gap`,value:Lp(t.gap)});else{let e=t.rowGap&&t.rowGap!==`normal`?Lp(t.rowGap):null,n=t.columnGap&&t.columnGap!==`normal`?Lp(t.columnGap):null;e&&e!==`0`&&r.push({label:`Row gap`,value:e}),n&&n!==`0`&&r.push({label:`Column gap`,value:n})}r.push({label:`Width`,value:`${Math.round(n.width)}px`}),r.push({label:`Height`,value:`${Math.round(n.height)}px`}),t.fontSize&&r.push({label:`Typography`,value:`${Lp(t.fontSize)} / ${Lp(t.lineHeight)||t.lineHeight}, weight ${t.fontWeight}`}),t.borderTopWidth&&t.borderTopWidth!==`0px`&&r.push({label:`Border`,value:`${Lp(t.borderTopWidth)} ${t.borderTopStyle}`});let d=t.borderRadius;d&&d!==`0px`&&r.push({label:`Radius`,value:d.includes(` `)?d:Lp(d)});let f=t.boxShadow;f&&f!==`none`&&r.push({label:`Shadow`,value:f.length>80?`${f.slice(0,77)}…`:f});let p=i?.name||a;return{rows:r,copyText:r.map(e=>{let t=e.detail?` (${e.detail})`:``;return`${e.label}: ${e.value}${t}`}).join(`
`),title:p}}function Kp(e,t,n){if(!n)return null;let r=document.elementsFromPoint(e,t);for(let e of r)if(e instanceof Element&&!e.closest(`[data-inspect-ui="true"]`)&&!e.closest(`[data-comment-ui="true"]`)&&n.contains(e)&&e!==n)return e;return null}var qp=9100,Jp=J.mint[500];function Yp(){return document.querySelector(`[data-inspect-root="true"]`)||document.querySelector(`[data-comment-root="true"]`)}var Xp=I.button`
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  min-height: 28px;
  padding: 0 10px;
  border: 1px solid ${e=>e.$active?Jp:`#363d44`};
  border-radius: 4px;
  background-color: ${e=>e.$active?Jp:`transparent`};
  color: ${e=>e.$active?`#ffffff`:`#c8cdd0`};
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.$active?`#16a260`:`#262c32`};
    border-color: ${e=>e.$active?Jp:`#555e66`};
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #9affce;
    outline-offset: 2px;
  }
`,Zp=I.div`
  position: fixed;
  z-index: ${qp};
  cursor: crosshair;
  background: transparent;
`,Qp=I.div`
  position: fixed;
  z-index: ${9101};
  pointer-events: none;
  box-sizing: border-box;
  border: 2px solid ${Jp};
  background: rgba(1, 177, 92, 0.12);
  border-radius: 2px;
`,$p=I.aside`
  position: fixed;
  z-index: ${9102};
  top: 64px;
  right: 16px;
  width: 300px;
  max-height: calc(100vh - 88px);
  overflow: auto;
  box-sizing: border-box;
  padding: 12px 14px 14px;
  border-radius: 8px;
  background: #1a1f24;
  color: #e8eaed;
  border: 1px solid #363d44;
  box-shadow: 0 8px 24px rgba(10, 13, 14, 0.28);
  font-family: inherit;
  font-size: 12px;
  line-height: 16px;
`,em=I.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`,tm=I.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  color: #ffffff;
  word-break: break-word;
`,nm=I.div`
  margin: 0 0 10px;
  color: #8b9298;
  font-size: 11px;
  line-height: 14px;
`,rm=I.button`
  flex-shrink: 0;
  border: none;
  background: transparent;
  color: #c8cdd0;
  cursor: pointer;
  padding: 0 2px;
  font-size: 16px;
  line-height: 1;

  &:hover {
    color: #ffffff;
  }
`,im=I.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 6px 8px;
  padding: 5px 0;
  border-top: 1px solid #2c333a;
`,am=I.div`
  color: #8b9298;
`,om=I.div`
  color: ${e=>e.$token?`#9affce`:`#e8eaed`};
  word-break: break-word;
`,sm=I.div`
  grid-column: 2;
  color: #6b737a;
  font-size: 11px;
  margin-top: -2px;
`,cm=I.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin-right: 6px;
  vertical-align: -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: ${e=>e.$color};
`,lm=I.button`
  margin-top: 12px;
  width: 100%;
  min-height: 28px;
  border: 1px solid #555e66;
  border-radius: 4px;
  background: transparent;
  color: #e8eaed;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #262c32;
    border-color: #6b737a;
  }
`;function um(e){if(!e)return null;let t=e.getBoundingClientRect();return{left:t.left,top:t.top,width:t.width,height:t.height}}function dm(){try{return new URLSearchParams(window.location.search).get(`inspect`)===`true`}catch{return!1}}function fm({toggleContainer:e,onActiveChange:t}){let[n,r]=(0,g.useState)(dm),[i,a]=(0,g.useState)(null),[o,s]=(0,g.useState)(null),[c,l]=(0,g.useState)(0),[u,d]=(0,g.useState)(!1);(0,g.useEffect)(()=>(Yf(n),t?.(n),n||(a(null),s(null)),()=>Yf(!1)),[n,t]),(0,g.useEffect)(()=>{if(!n)return;let e=()=>l(e=>e+1),t=Yp();window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e);let r=new ResizeObserver(e);return t&&r.observe(t),()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e),r.disconnect()}},[n]),(0,g.useEffect)(()=>{if(!n)return;let e=e=>{if(e.key===`Escape`){if(o){e.stopImmediatePropagation(),s(null);return}e.stopImmediatePropagation(),r(!1)}};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,o]);let f=(0,g.useMemo)(()=>n?um(Yp()):null,[c,n]),p=(0,g.useMemo)(()=>um(i),[i,c]),m=(0,g.useMemo)(()=>um(o),[o,c]),h=(0,g.useMemo)(()=>o?Gp(o):null,[o,c]),_=(0,g.useCallback)(e=>{let t=Yp(),n=Kp(e.clientX,e.clientY,t);a(n)},[]),y=(0,g.useCallback)(e=>{if(e.preventDefault(),e.stopPropagation(),e.metaKey||e.ctrlKey){if(document.documentElement.dataset.commentMode===`true`){qf(e.clientX,e.clientY);return}let t=Yp(),n=document.elementsFromPoint(e.clientX,e.clientY).find(e=>e instanceof Element&&t?.contains(e)&&!e.closest(`[data-inspect-ui="true"]`))?.closest?.(`a[href], button, input, select, [role="button"]`);n&&n.click();return}let t=Yp(),n=Kp(e.clientX,e.clientY,t);s(n)},[]),b=async()=>{if(h?.copyText)try{await navigator.clipboard.writeText(h.copyText),d(!0),setTimeout(()=>d(!1),1500)}catch{d(!1)}},x=(0,G.jsx)(Xp,{type:`button`,$active:n,"aria-pressed":n,onClick:()=>r(e=>!e),children:n?`Exit inspect`:`Inspect`});return(0,G.jsxs)(G.Fragment,{children:[e?(0,v.createPortal)(x,e):x,n&&f&&(0,G.jsx)(Zp,{"data-inspect-ui":`true`,onMouseMove:_,onMouseLeave:()=>a(null),onClick:y,style:{left:f.left,top:f.top,width:f.width,height:f.height}}),n&&p&&i!==o&&(0,G.jsx)(Qp,{"data-inspect-ui":`true`,style:{left:p.left,top:p.top,width:p.width,height:p.height}}),n&&m&&(0,G.jsx)(Qp,{"data-inspect-ui":`true`,style:{left:m.left,top:m.top,width:m.width,height:m.height,borderWidth:2,background:`rgba(1, 177, 92, 0.18)`}}),n&&h&&(0,G.jsxs)($p,{"data-inspect-ui":`true`,role:`dialog`,"aria-label":`Inspect details`,children:[(0,G.jsxs)(em,{children:[(0,G.jsx)(tm,{children:h.title}),(0,G.jsx)(rm,{type:`button`,"aria-label":`Clear selection`,onClick:()=>s(null),children:`×`})]}),(0,G.jsx)(nm,{children:`Esc clears selection, then exits Inspect. ⌘/Ctrl+click places a comment when Comment is on.`}),h.rows.map(e=>(0,G.jsxs)(im,{children:[(0,G.jsx)(am,{children:e.label}),(0,G.jsxs)(om,{$token:e.kind===`token`,children:[e.kind===`computed`&&/^#|[rgb]/.test(e.value)&&(0,G.jsx)(cm,{$color:e.value}),e.kind===`token`&&e.detail?.includes(`#`)&&(0,G.jsx)(cm,{$color:e.detail.replace(/^rendered\s+/,``)}),e.value]}),e.detail&&(0,G.jsx)(sm,{children:e.detail})]},`${e.label}:${e.value}`)),(0,G.jsx)(lm,{type:`button`,onClick:b,children:u?`Copied`:`Copy values`})]})]})}var pm=I.nav`
  width: 240px;
  min-width: 240px;
  background: transparent;
  overflow-y: auto;
  padding: 16px 12px;
  height: 100%;
  box-sizing: border-box;
`,mm=I.div`
  font-size: 12px;
  font-weight: 600;
  color: #68737d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 12px 4px;
  margin-top: ${e=>e.$first?`0`:`8px`};
`,hm=I.div`
  padding: 6px 12px;
  font-size: 14px;
  color: ${e=>e.$active?`#fff`:`#2f3941`};
  font-weight: ${e=>e.$active?`500`:`400`};
  background: ${e=>e.$active?`#2f3941`:`transparent`};
  border-radius: 6px;
  cursor: ${e=>e.$clickable?`pointer`:`default`};
  margin: 1px 0;

  &:hover {
    background: ${e=>e.$clickable?e.$active?`#2f3941`:`#e9ebed`:`transparent`};
  }
`,gm=I.div`
  font-size: 15px;
  font-weight: 600;
  color: #2f3941;
  padding: 4px 12px 12px;
`;function _m(){let e=Ge(),t=qe(),n=e.pathname,r=n.startsWith(`/team-members`),i=n.startsWith(`/roles`);return(0,G.jsxs)(pm,{children:[(0,G.jsx)(gm,{children:`People`}),(0,G.jsx)(mm,{$first:!0,children:`Team`}),(0,G.jsx)(hm,{$active:r,$clickable:!0,onClick:()=>t(`/team-members`),children:`Team members`}),(0,G.jsx)(hm,{$active:i,$clickable:!0,onClick:()=>t(`/roles`),children:`Roles`}),(0,G.jsx)(hm,{children:`Groups`}),(0,G.jsx)(mm,{children:`Configuration`}),(0,G.jsx)(hm,{children:`User fields`}),(0,G.jsx)(hm,{children:`Organization fields`}),(0,G.jsx)(hm,{children:`Events`}),(0,G.jsx)(hm,{children:`Profiles`}),(0,G.jsx)(hm,{children:`End users`}),(0,G.jsx)(hm,{children:`Tags`}),(0,G.jsx)(mm,{children:`Bulk actions`}),(0,G.jsx)(hm,{children:`Import users`}),(0,G.jsx)(hm,{children:`Import organizations`}),(0,G.jsx)(mm,{children:`Deleted users`}),(0,G.jsx)(hm,{children:`Deleted users`}),(0,G.jsx)(mm,{children:`Restrictions`}),(0,G.jsx)(hm,{children:`Banned IP addresses`})]})}var vm=I.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`,ym=I.span`
  color: #406cc4;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  &:hover {
    color: #284173;
    text-decoration: underline;
  }

  &:active {
    color: #1f335a;
  }
`,bm=I.span`
  color: #646864;
  margin: 0 2px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`,xm=I.span`
  color: #646864;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;function Sm({items:e}){let t=qe();return(0,G.jsx)(vm,{children:e.map((e,n)=>{let r=!!e.path;return(0,G.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`4px`},children:[n>0&&(0,G.jsx)(bm,{children:`>`}),r?(0,G.jsx)(ym,{onClick:()=>t(e.path),children:e.label}):(0,G.jsx)(xm,{children:e.label})]},n)})})}var Cm=I.div`
  padding: 24px 32px;
  overflow-y: auto;
  flex: 1;
`,wm=I.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`,Tm=I.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px;
`,Em=I.p`
  font-size: 14px;
  color: #49545c;
  margin: 0;
`,Dm=I.a`
  color: #1f73b7;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`,Om=I.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,km=I.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  background: #fff;
  color: #1f73b7;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #edf5fa;
  }
`,Am=I.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #1f73b7;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #144a75;
  }
`,jm=I.div`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`,Mm=I.div`
  position: relative;
  max-width: 560px;
  margin-bottom: 16px;

  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #68737d;
    pointer-events: none;
  }
`,Nm=I.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px 10px 36px;
  border: 1px solid #87929d;
  border-radius: 4px;
  font-size: 14px;
  color: #2f3941;

  &:focus {
    outline: none;
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.25);
  }
`,Pm=I.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  background: #fff;
  color: #1f73b7;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #edf5fa;
  }
`,Fm=I.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 8px;
`,Im=I.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Lm=I.a`
  font-size: 14px;
  color: #1f73b7;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #144a75;
  }
`,Rm=I.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`,zm=I.th`
  text-align: left;
  padding: 12px 16px 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  border-bottom: 1px solid #d8dcde;
  white-space: nowrap;

  &:first-child {
    padding-left: 0;
    width: 32px;
  }
`,Bm=I.span`
  color: #87929d;
  margin-left: 4px;
  font-size: 11px;
`,Vm=I.td`
  padding: 12px 16px 12px 0;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`,Hm=I.tr`
  &:last-child td {
    border-bottom: none;
  }
`,Um=I.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
`,Wm=I.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Gm=[[`#d4e7f5`,`#17494d`],[`#f5d4d8`,`#8c232c`],[`#e2d9f3`,`#55237a`],[`#d3f0e2`,`#186146`],[`#f8e5c8`,`#8a5a1e`]],Km=I.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
  background: ${e=>e.$bg};
  color: ${e=>e.$fg};
`,qm=I.span`
  display: block;
  color: #1f73b7;
  font-weight: 500;
`,Jm=I.span`
  display: block;
  color: #68737d;
  font-size: 13px;
  margin-top: 2px;
`,Ym=I.span`
  display: block;
  color: #1f73b7;
  font-size: 13px;
  margin-top: 2px;
`,Xm=I.button`
  border: none;
  background: transparent;
  color: #68737d;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;

  &:hover {
    background: #e9ebed;
  }
`;function Zm(){let e=qe(),[t,n]=(0,g.useState)(``),r=t.trim().toLowerCase(),i=r?cd.filter(e=>e.name.toLowerCase().includes(r)||e.email.toLowerCase().includes(r)):cd;return(0,G.jsxs)(Cm,{children:[(0,G.jsx)(Sm,{items:[{label:`People`},{label:`Team`},{label:`Team members`}]}),(0,G.jsxs)(wm,{children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(Tm,{children:`Team members`}),(0,G.jsxs)(Em,{children:[`Find and manage team members, from agents to admins.`,(0,G.jsx)(`br`,{}),(0,G.jsx)(Dm,{href:`#`,children:`Learn about the Team members page ↗`})]})]}),(0,G.jsxs)(Om,{children:[(0,G.jsxs)(km,{children:[`Actions`,(0,G.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,G.jsx)(Am,{children:`Create team member`})]})]}),(0,G.jsx)(jm,{children:`Search team members`}),(0,G.jsxs)(Mm,{children:[(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,G.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,G.jsx)(`path`,{d:`M11 11L14 14`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,G.jsx)(Nm,{value:t,onChange:e=>n(e.target.value)})]}),(0,G.jsxs)(Pm,{children:[(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M2 3h10M4 7h6M6 11h2`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),`Filter`]}),(0,G.jsxs)(Fm,{children:[(0,G.jsxs)(Im,{children:[i.length,` team members`]}),(0,G.jsx)(Lm,{children:`Bulk manage ↗`})]}),(0,G.jsxs)(Rm,{children:[(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(zm,{children:(0,G.jsx)(Um,{})}),(0,G.jsx)(zm,{children:`Team member`}),(0,G.jsx)(zm,{children:`Brand`}),(0,G.jsx)(zm,{children:`Group`}),(0,G.jsx)(zm,{children:`Product access`}),(0,G.jsx)(zm,{children:`Support role`}),(0,G.jsxs)(zm,{children:[`Last sign-in`,(0,G.jsx)(Bm,{children:`⇅`})]}),(0,G.jsx)(zm,{})]})}),(0,G.jsx)(`tbody`,{children:i.map(t=>{let n=t.name.charAt(0).toUpperCase(),[r,i]=Gm[n.charCodeAt(0)%Gm.length];return(0,G.jsxs)(Hm,{children:[(0,G.jsx)(Vm,{children:(0,G.jsx)(Um,{onClick:e=>e.stopPropagation()})}),(0,G.jsx)(Vm,{onClick:()=>e(`/team-members/${t.id}`),style:{cursor:`pointer`},children:(0,G.jsxs)(Wm,{children:[(0,G.jsx)(Km,{$bg:r,$fg:i,children:n}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(qm,{children:t.name}),(0,G.jsx)(Jm,{children:t.email})]})]})}),(0,G.jsxs)(Vm,{children:[t.brand,t.extraBrands>0&&(0,G.jsxs)(Ym,{children:[`+`,t.extraBrands,` more`]})]}),(0,G.jsx)(Vm,{children:t.group}),(0,G.jsx)(Vm,{children:t.productAccess}),(0,G.jsx)(Vm,{children:t.role}),(0,G.jsx)(Vm,{children:t.lastSignIn}),(0,G.jsx)(Vm,{children:(0,G.jsx)(Xm,{"aria-label":`More actions for ${t.name}`,children:`⋮`})})]},t.id)})})]})]})}var Qm=[`small`,`medium`,`large`],$m=I.div.attrs({"data-garden-id":`buttons.button_group_view`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledSplitButton`,componentId:`sc-1u4v04v-0`})([`display:inline-flex;position:relative;z-index:0;direction:`,`;white-space:nowrap;`,`;`],e=>e.theme.rtl&&`rtl`,z),eh=`buttons.icon`,th=e=>{let t;return e.$position===`start`?t=`margin-${e.theme.rtl?`left`:`right`}`:e.$position===`end`&&(t=`margin-${e.theme.rtl?`right`:`left`}`),t&&F([``,`:`,`px;`],t,e.theme.space.base*2)},nh=I(Es).attrs({"data-garden-id":eh,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledIcon`,componentId:`sc-19meqgg-0`})([`transform:`,`;transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;`,`;`,`;`],e=>e.$isRotated&&`rotate(${e.theme.rtl?`-`:`+`}180deg)`,e=>th(e),z),rh=e=>e.$isPill?`100px`:e.theme.borderRadii.md,ih=e=>e.$size===`small`?`${e.theme.space.base*8}px`:e.$size===`large`?`${e.theme.space.base*12}px`:`${e.theme.space.base*10}px`,ah=({theme:e,$isLink:t,$isBasic:n,$isDanger:r,$isNeutral:i,$isPrimary:a,$focusInset:o})=>{let s,c=H({theme:e,variable:`background.disabled`}),l=H({theme:e,variable:`foreground.disabled`}),u={dark:{offset:-100},light:{offset:100}},d={dark:{offset:-200},light:{offset:200}};if(t){let t={theme:e,variable:r?`foreground.danger`:`foreground.primary`},n=H(t),i=H({...t,...u}),a=H({...t,...d});s=F([`outline-color:transparent;background-color:transparent;color:`,`;`,` &:hover{color:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:`,`;}&:disabled{color:`,`;}`],n,Ts({theme:e,condition:!1,styles:{color:n,outlineColor:H({theme:e,variable:`border.primaryEmphasis`})}}),i,a,l)}else if(a){let t;t=r?`background.dangerEmphasis`:i?`background.emphasis`:`background.primaryEmphasis`;let n={theme:e,variable:t},a=H(n),f=H({...n,...u}),p=H({...n,...d});s=F([`outline-color:transparent;background-color:`,`;color:`,`;&:hover{background-color:`,`;}`,` &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{background-color:`,`;}&:disabled{background-color:`,`;color:`,`;}`],a,H({theme:e,variable:`foreground.onEmphasis`}),f,Ts({theme:e,inset:o,shadowWidth:o?`sm`:`md`,spacerWidth:o?`sm`:`xs`,styles:(r||i)&&o?{borderColor:H({theme:e,variable:`border.primaryEmphasis`})}:void 0}),p,c,l)}else{let t,a,f,p,m,h;if(r){if(!n){let n={theme:e,variable:`border.dangerEmphasis`};t=H(n),a=H({...n,...u}),f=H({...n,...d}),i&&(p=H(n))}m=`background.dangerEmphasis`,h=i?`foreground.default`:`foreground.danger`}else{if(!n){let n={theme:e,variable:`border.primaryEmphasis`};i?(t=H({theme:e,variable:`border.default`,...u}),a=H(n),p=a,f=H({...n,...u})):(t=H(n),a=H({...n,...u}),f=H({...n,...d}))}m=`background.primaryEmphasis`,h=i?`foreground.default`:`foreground.primary`}let g=H({theme:e,variable:m,transparency:e.opacity[100]}),_=H({theme:e,variable:m,transparency:e.opacity[200]}),v={theme:e,variable:h},y=H(v),b,x,S,C,w;if(i){let t={theme:e,variable:`foreground.subtle`};S=H(t),C=H({...t,...u}),w=H({...t,...d})}else b=H({...v,...u}),x=H({...v,...d});s=F([`outline-color:transparent;border-color:`,`;background-color:transparent;color:`,`;&:hover{border-color:`,`;background-color:`,`;color:`,`;}`,` &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{border-color:`,`;background-color:`,`;color:`,`;}&:disabled{border-color:transparent;background-color:`,`;color:`,`;}& `,`{color:`,`;}&:hover `,`,&:focus-visible `,`{color:`,`;}&:active `,`{color:`,`;}&:disabled `,`{color:`,`;}`],t,y,a,g,b,Ts({theme:e,inset:o,styles:{borderColor:p}}),f,_,x,c,l,nh,S,nh,nh,C,nh,w,nh,l)}return s},oh=({theme:e,$isPrimary:t,$isBasic:n,$isPill:r,$focusInset:i})=>{let{rtl:a,borderWidths:o,borders:s}=e,c=a?`right`:`left`,l=a?`left`:`right`,u=o.sm,d=`${t||n?``:`-`}${u}`,f=r&&`-2px`,p=!t&&H({theme:e,variable:`background.disabled`}),m=n?`transparent`:`revert`,h=H({theme:e,variable:`border.primaryEmphasis`}),g=n&&!t&&bs({theme:e,inset:i,spacerColor:{hue:h},color:{hue:`transparent`}});return F([`position:relative;transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,margin-`,` 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;border:`,` `,`;`,`{border-color:`,`;box-shadow:`,`;}&:hover,&:active,`,`{z-index:1;}&:disabled{z-index:-1;background-color:`,`;}&:not(:first-of-type){margin-`,`:`,`;}&:not(:first-of-type):disabled{margin-`,`:`,`;}&:not(:first-of-type):not(:last-of-type){border-radius:0;}&:first-of-type:not(:last-of-type){border-top-`,`-radius:0;border-bottom-`,`-radius:0;}&:last-of-type:not(:first-of-type){border-top-`,`-radius:0;border-bottom-`,`-radius:0;}&:first-of-type:not(:last-of-type) `,`{margin-`,`:`,`;}&:last-of-type:not(:first-of-type) `,`{margin-`,`:`,`;}`],c,s.sm,m,ws,h,g,ws,p,c,d,c,u,l,l,c,c,nh,l,f,nh,c,f)},sh=e=>{let t=e.$size===`small`?e.theme.iconSizes.sm:e.theme.iconSizes.md;return F([`width:`,`;min-width:`,`;height:`,`;vertical-align:`,`;`],t,t,t,e.$isLink&&`middle`)},ch=e=>{let t;if(e.$isLink)t=F([`padding:0;font-size:inherit;`]);else{let n=ih(e),r=V(`${n} - (${e.theme.borderWidths.sm} * 2)`),i,a;e.$size===`small`?(a=e.theme.fontSizes.sm,i=`${e.theme.space.base*3}px`):(a=e.theme.fontSizes.md,i=e.$size===`large`?`${e.theme.space.base*5}px`:`${e.theme.space.base*4}px`),t=F([`padding:0 `,`;height:`,`;line-height:`,`;font-size:`,`;`],Ga(V(`${i} - ${e.theme.borderWidths.sm}`),a),n,r,a)}return t},lh=I.button.attrs(e=>({"data-garden-id":e[`data-garden-id`]||`buttons.button`,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledButton`,componentId:`sc-qe3ace-0`})([`display:`,`;align-items:`,`;justify-content:`,`;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:`,`;border-radius:`,`;cursor:pointer;width:`,`;overflow:hidden;text-decoration:`,`;text-overflow:ellipsis;white-space:`,`;font-family:inherit;font-weight:`,`;-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:`,`;-webkit-touch-callout:none;`,`;&::-moz-focus-inner{border:0;padding:0;}`,`{text-decoration:none;}&:hover{text-decoration:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:`,`;}`,`;&:disabled{cursor:default;text-decoration:`,`;}& `,`{`,`}`,` &&{`,`}`,``],e=>e.$isLink?`inline`:`inline-flex`,e=>!e.$isLink&&`center`,e=>!e.$isLink&&`center`,e=>`${e.$isLink?`0px solid`:e.theme.borders.sm} transparent`,e=>rh(e),e=>e.$isStretched?`100%`:``,e=>e.$isUnderlined?`underline`:`none`,e=>!e.$isLink&&`nowrap`,e=>e.$isLink?`inherit`:e.theme.fontWeights.regular,e=>!e.$isLink&&`none`,e=>ch(e),ws,e=>e.$isLink?`underline`:`none`,e=>e.$isLink?`underline`:`none`,e=>ah(e),e=>e.$isLink&&`none`,nh,e=>sh(e),$m,e=>oh(e),z),uh=`buttons.anchor`,dh=I(lh).attrs(e=>({"data-garden-id":uh,"data-garden-version":`9.15.8`,as:e.as||`a`,dir:e.theme.rtl?`rtl`:void 0,$isLink:!0,type:void 0})).withConfig({displayName:`StyledAnchor`,componentId:`sc-xshgmo-0`})([`direction:`,`;`,`;`],e=>e.theme.rtl&&`rtl`,z),fh;function ph(){return ph=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ph.apply(null,arguments)}var mh=I(function(e){return g.createElement(`svg`,ph({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),fh||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M10.5 8.5V10c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h1.5M6 6l4-4m-3.5-.5H10c.3 0 .5.2.5.5v3.5`}))}).attrs({"data-garden-id":`buttons.external_icon`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledExternalIcon`,componentId:`sc-16oz07e-0`})([`transform:`,`;margin-bottom:-0.085em;padding-left:0.25em;box-sizing:content-box;width:0.85em;height:0.85em;`,`;`],e=>e.theme.rtl&&`scaleX(-1)`,z),hh=`buttons.icon_button`,gh=({theme:e})=>{let t={theme:e,variable:`foreground.subtle`};return F([`color:`,`;&:hover{color:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:`,`;}`],H(t),H({...t,dark:{offset:-100},light:{offset:100}}),H({...t,dark:{offset:-200},light:{offset:200}}))},_h=I(lh).attrs(e=>{let t=e[`data-garden-id`];return{"data-garden-id":t&&t!==`buttons.button`?t:hh,"data-garden-version":`9.15.8`}}).withConfig({displayName:`StyledIconButton`,componentId:`sc-1t0ughp-0`})([``,`;& `,`{`,`}`,`;`],e=>{let t=ih(e);return F([`border:`,`;padding:0;width:`,`;min-width:`,`;`,`;&:disabled{background-color:`,`;}`],e.$isBasic&&`none`,t,t,e.$isBasic&&!(e.$isPrimary||e.$isDanger||e.disabled)&&gh(e),!e.$isPrimary&&`transparent`)},nh,e=>{let t=e.theme.iconSizes.md;return F([`width:`,`;height:`,`;& > svg{transition:opacity 0.15s ease-in-out;}`],t,t)},z),vh=(0,g.createContext)(void 0),yh=()=>(0,g.useContext)(vh),bh=({isRotated:e,...t})=>g.createElement(nh,Object.assign({$position:`start`,$isRotated:e},t));bh.displayName=`Button.StartIcon`;var xh=bh,Sh=({isRotated:e,...t})=>g.createElement(nh,Object.assign({$position:`end`,$isRotated:e},t));Sh.displayName=`Button.EndIcon`;var Ch=Sh,wh=(0,g.forwardRef)(({focusInset:e,isBasic:t,isDanger:n,isLink:r,isNeutral:i,isPill:a,isPrimary:o,isStretched:s,size:c=`medium`,type:l=`button`,...u},d)=>{let f=yh();return g.createElement(lh,Object.assign({},u,{type:l,$focusInset:e||f,$isBasic:t,$isDanger:n,$isLink:r,$isNeutral:i,$isPill:a,$isPrimary:o,$isStretched:s,$isUnderlined:r,$size:c,ref:d}))});wh.displayName=`Button`,wh.propTypes={focusInset:U.default.bool,isBasic:U.default.bool,isDanger:U.default.bool,isLink:U.default.bool,isNeutral:U.default.bool,isPill:U.default.bool,isPrimary:U.default.bool,isStretched:U.default.bool,size:U.default.oneOf(Qm)};var Th=wh;Th.EndIcon=Ch,Th.StartIcon=xh;var Eh=(0,g.forwardRef)(({children:e,externalIconLabel:t,isDanger:n,isExternal:r,isUnderlined:i=!0,...a},o)=>{let s=a;r&&(s={target:`_blank`,rel:`noopener noreferrer`,...s});let c=Cs(Eh,r?{externalIconLabel:t}:{noIconLabel:`true`},r?`externalIconLabel`:`noIconLabel`,`(opens in a new tab)`);return g.createElement(dh,Object.assign({ref:o,$isDanger:n,$isUnderlined:i},s),e,!!r&&g.createElement(mh,{role:`img`,"aria-label":c,"aria-hidden":void 0}))});Eh.displayName=`Anchor`,Eh.propTypes={isExternal:U.default.bool,isDanger:U.default.bool,isUnderlined:U.default.bool,externalIconLabel:U.default.string};var Dh=(0,g.forwardRef)(({children:e,focusInset:t,isBasic:n=!0,isDanger:r,isNeutral:i,isPill:a=!0,isPrimary:o,isRotated:s,size:c=`medium`,type:l=`button`,...u},d)=>{let f=yh();return g.createElement(_h,Object.assign({},u,{type:l,$isBasic:n,$isDanger:r,$isNeutral:i,$isPill:a,$isPrimary:o,$size:c,$focusInset:t||f,ref:d}),g.createElement(nh,{$isRotated:s},e))});Dh.displayName=`IconButton`,Dh.propTypes={focusInset:U.default.bool,isBasic:U.default.bool,isDanger:U.default.bool,isNeutral:U.default.bool,isPill:U.default.bool,isPrimary:U.default.bool,isRotated:U.default.bool,size:U.default.oneOf(Qm)};var Oh=[`success`,`warning`,`error`,`info`],kh,Ah;function jh(){return jh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jh.apply(null,arguments)}var Mh=function(e){return g.createElement(`svg`,jh({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),kh||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 4.5V9`})),Ah||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},Nh;function Ph(){return Ph=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ph.apply(null,arguments)}var Fh=function(e){return g.createElement(`svg`,Ph({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Nh||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 9l2.5 2.5 5-5`}),g.createElement(`circle`,{cx:7.5,cy:8.5,r:7})))},Ih,Lh;function Rh(){return Rh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rh.apply(null,arguments)}var zh=function(e){return g.createElement(`svg`,Rh({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Ih||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5`}),Lh||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},Bh,Vh;function Hh(){return Hh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hh.apply(null,arguments)}var Uh=function(e){return g.createElement(`svg`,Hh({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Bh||=g.createElement(`g`,{stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7,fill:`none`}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 12.5V8`})),Vh||=g.createElement(`circle`,{cx:7.5,cy:5,r:1,fill:`currentColor`}))},Wh={success:Fh,error:Mh,warning:zh,info:Uh},Gh={success:`success`,error:`error`,warning:`warning`,info:`info`},Kh=I(Dh).attrs({"data-garden-id":`notifications.close`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledClose`,componentId:`sc-1mr9nx1-0`})([`position:absolute;top:`,`px;right:`,`;left:`,`;`,` `,`;`],e=>e.theme.space.base,e=>!e.theme.rtl&&`${e.theme.space.base}px`,e=>e.theme.rtl&&`${e.theme.space.base}px`,({theme:e,$type:t})=>{let n;switch(t){case Gh.warning:n=`foreground.warning`;break;case Gh.error:n=`foreground.danger`;break;case Gh.success:n=`foreground.success`;break;default:n=`foreground.subtle`;break}return F([`color:`,`;&:hover{background-color:transparent;color:`,`;}&:active{background-color:transparent;color:`,`;}`],H({variable:n,theme:e}),H({variable:n,light:{offset:100},dark:{offset:-100},theme:e}),H({variable:n,light:{offset:200},dark:{offset:-200},theme:e}))},z),qh=I.p.attrs({"data-garden-id":`notifications.paragraph`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledParagraph`,componentId:`sc-12tmd6p-0`})([`margin:`,`px 0 0;`,`;`],e=>e.theme.space.base*2,z),Jh=I.div.attrs({"data-garden-id":`notifications.title`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledTitle`,componentId:`sc-xx4jsv-0`})([`margin:0;color:`,`;font-weight:`,`;`,`;`],e=>H({variable:`foreground.default`,theme:e.theme}),e=>e.$isRegular?e.theme.fontWeights.regular:e.theme.fontWeights.semibold,z),Yh=I.div.attrs({"data-garden-id":`notifications.base_container`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledBase`,componentId:`sc-14syaqw-0`})([`position:relative;border:`,`;border-radius:`,`;padding:`,`;line-height:`,`;font-size:`,`;direction:`,`;`,`;`,``],e=>e.theme.borders.sm,e=>e.theme.borderRadii.md,e=>{let{space:t}=e.theme;return`${`${t.base*5}px`} ${`${t.base*10}px`}`},e=>Ss(e.theme.space.base*5,e.theme.fontSizes.md),e=>e.theme.fontSizes.md,e=>e.theme.rtl&&`rtl`,({theme:e,$type:t,$isFloating:n})=>{let{space:r,shadows:i}=e,a,o,s;if(!n&&t&&Gh[t])switch(t){case Gh.success:a=`background.success`,o=`border.success`,s=`foreground.success`;break;case Gh.error:a=`background.danger`,o=`border.danger`,s=`foreground.danger`;break;case Gh.warning:a=`background.warning`,o=`border.warning`,s=`foreground.warning`;break;case Gh.info:a=`background.subtle`,o=`border.default`,s=`foreground.subtle`;break}else a=`background.raised`,o=`border.default`,s=`foreground.default`;let c=H({variable:a,theme:e}),l=H({variable:o,theme:e}),u=H({variable:s,theme:e}),d=`${r.base*5}px`,f=`${r.base*7}px`;return F([`border-color:`,`;box-shadow:`,`;background-color:`,`;color:`,`;`],l,n?i.lg(d,f,H({variable:`shadow.large`,theme:e})):void 0,c,u)},z),Xh=I(Yh).attrs({"data-garden-id":`notifications.alert`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledAlert`,componentId:`sc-fyn8jp-0`})([``,` `,`;`],e=>{let{$type:t,theme:n}=e,r;switch(t){case Gh.success:r=`foreground.successEmphasis`;break;case Gh.error:r=`foreground.dangerEmphasis`;break;case Gh.warning:r=`foreground.warningEmphasis`;break;case Gh.info:r=`foreground.default`;break}return F([``,`{color:`,`;}`],Jh,r?H({variable:r,theme:n}):void 0)},z),Zh=I(Yh).attrs({"data-garden-id":`notifications.notification`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledNotification`,componentId:`sc-uf6jh-0`})([``,` `,`;`],e=>{let{$type:t,theme:n}=e,r;switch(t){case Gh.success:r=`foreground.success`;break;case Gh.error:r=`foreground.danger`;break;case Gh.warning:r=`foreground.warning`;break;case Gh.info:r=`foreground.default`;break}return F([``,`{color:`,`;}`],Jh,r?H({variable:r,theme:n}):`inherit`)},z);Zh.propTypes={$type:U.default.oneOf(Oh)};var Qh=I(Es).attrs({"data-garden-id":`notifications.icon`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledIcon`,componentId:`sc-msklws-0`})([`position:absolute;`,` `,` `,``],({theme:{rtl:e,space:t}})=>F([`right:`,`;left:`,`;margin-top:`,`px;`],e&&`${t.base*4}px`,!e&&`${t.base*4}px`,t.base/2),({theme:e,$type:t})=>{let n;switch(t){case Gh.success:n=`foreground.success`;break;case Gh.error:n=`foreground.danger`;break;case Gh.warning:n=`foreground.warning`;break;case Gh.info:n=`foreground.subtle`;break;default:n=`foreground.default`;break}return F([`color:`,`;`],H({variable:n,theme:e}))},z),$h=(0,g.createContext)(void 0),eg=()=>(0,g.useContext)($h),tg=g.forwardRef(({isRegular:e,...t},n)=>g.createElement(Jh,Object.assign({ref:n,$isRegular:e},t)));tg.displayName=`Alert.Title`;var ng=g.forwardRef((e,t)=>g.createElement(qh,Object.assign({ref:t},e)));ng.displayName=`Alert.Paragraph`;var rg;function ig(){return ig=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ig.apply(null,arguments)}var ag=function(e){return g.createElement(`svg`,ig({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),rg||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,d:`M3 13L13 3m0 10L3 3`}))},og=g.forwardRef((e,t)=>{let n=Cs(og,e,`aria-label`,`Close`),r=eg();return g.createElement(Kh,Object.assign({ref:t,$type:r,"aria-label":n},e,{focusInset:!0,size:`small`}),g.createElement(ag,null))});og.displayName=`Alert.Close`;var sg=g.forwardRef(({role:e,type:t,...n},r)=>{let i=Wh[t];return g.createElement($h.Provider,{value:t},g.createElement(Xh,Object.assign({ref:r,$type:t,role:e===void 0?`alert`:e},n),g.createElement(Qh,{$type:t},g.createElement(i,null)),n.children))});sg.displayName=`Alert`,sg.propTypes={type:U.default.oneOf(Oh).isRequired};var cg=sg;cg.Close=og,cg.Paragraph=ng,cg.Title=tg;var lg=g.forwardRef(({isRegular:e,...t},n)=>g.createElement(Jh,Object.assign({ref:n,$isRegular:e},t)));lg.displayName=`Notification.Title`;var ug=g.forwardRef((e,t)=>g.createElement(qh,Object.assign({ref:t},e)));ug.displayName=`Notification.Paragraph`;var dg=g.forwardRef((e,t)=>{let n=Cs(dg,e,`aria-label`,`Close`),r=eg();return g.createElement(Kh,Object.assign({ref:t,$type:r,"aria-label":n},e,{focusInset:!0,size:`small`}),g.createElement(ag,null))});dg.displayName=`Notification.Close`;var fg=(0,g.forwardRef)(({children:e,type:t,...n},r)=>{let i=t?Wh[t]:Uh;return g.createElement(Zh,Object.assign({ref:r,$type:t,$isFloating:!0,role:`alert`},n),!!t&&g.createElement(Qh,{$type:t},g.createElement(i,null)),e)});fg.displayName=`Notification`,fg.propTypes={type:U.default.oneOf(Oh)};var pg=fg;pg.Close=dg,pg.Paragraph=ug,pg.Title=lg;var mg=I.div`
  max-width: 640px;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  overflow: hidden;
`,hg=I.table`
  width: 100%;
  border-collapse: collapse;
`,gg=I.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 400;
  color: #68737d;
  border-bottom: 1px solid #d8dcde;
`,_g=I.td`
  padding: 20px 16px;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`,vg=I.tr`
  &:last-child td {
    border-bottom: none;
  }
`,yg=I.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,bg=I.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #68737d;
`,xg=I.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  color: #2f3941;
  background: #fff;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2368737D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
  min-width: 180px;
`,Sg=I.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #2f3941;
`,Cg=I.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #87929d;
  font-size: 10px;
  color: #87929d;
  margin-left: 8px;
  cursor: help;
`,wg=I.span`
  color: #87929d;
  font-size: 14px;
`,Tg=I.div`
  font-size: 14px;
  color: #49545c;
`,Eg=I.span`
  color: #1f73b7;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`;function Dg({memberId:e}){let{isMemberAiAgentsMigrated:t,aiAgentsRoleId:n,roles:r,getMemberAssignedRole:i,getAiAgentsState:a}=_d(),o=qe(),s=e?t(e):!1,c=r.find(e=>e.id===n)?.name||`Roles`,l=s?td[a(n).accessLevel]:null,u=e?i(e):null,d=()=>{o(`/roles/${n}`,{state:{scrollToAiAgents:!0}})},f=e=>e.access===`yes`?(0,G.jsx)(`span`,{children:`Yes`}):e.access===`checkbox`?(0,G.jsx)(Sg,{defaultChecked:e.checked}):e.access===`disabled`?null:e.access===`ai_agents`?s?l?(0,G.jsx)(`span`,{children:l}):null:(0,G.jsx)(Sg,{defaultChecked:e.checked}):null,p=e=>e.access===`disabled`?(0,G.jsx)(wg,{children:e.message}):e.access===`ai_agents`&&s?(0,G.jsxs)(Tg,{children:[`Settings for `,e.product,` can be found in roles.`,(0,G.jsx)(`br`,{}),(0,G.jsxs)(Eg,{onClick:d,children:[`View `,c,` role`]})]}):e.icon===`support`&&u?(0,G.jsx)(`div`,{style:{display:`flex`,alignItems:`center`},children:(0,G.jsx)(xg,{value:u.name,onChange:()=>{},children:(0,G.jsx)(`option`,{value:u.name,children:u.name})})}):e.role?(0,G.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,G.jsxs)(xg,{defaultValue:e.role,children:[(0,G.jsx)(`option`,{value:`Admin`,children:`Admin`}),(0,G.jsx)(`option`,{value:`Agent`,children:`Agent`}),(0,G.jsx)(`option`,{value:`Client admin`,children:`Client admin`})]}),e.hasInfo&&(0,G.jsx)(Cg,{children:`i`})]}):null,m={support:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.4c-1.77 0-3.2-1.43-3.2-3.2h1.6c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6h1.6c0 1.77-1.43 3.2-3.2 3.2zM10 4c2.65 0 4.8 2.15 4.8 4.8v1.6H5.2V8.8C5.2 6.15 7.35 4 10 4z`,fill:`currentColor`})}),knowledge:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M4 3h12v14H4V3zm2 2v10h8V5H6zm1 2h6v1H7V7zm0 3h6v1H7v-1zm0 3h4v1H7v-1z`,fill:`currentColor`})}),analytics:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M4 15h3V8H4v7zm5 0h3V5H9v10zm5 0h3v-4h-3v4z`,fill:`currentColor`})}),voice:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M5.2 3h2.4l2 4-1.5 1.1c.7 1.4 1.8 2.5 3.2 3.2L12.4 9.8l4 2v2.4c0 .9-.7 1.6-1.6 1.6C8.8 15.8 4.2 11.2 4.2 4.6c0-.9.7-1.6 1.6-1.6z`,fill:`currentColor`})}),chat:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M4 4h12v9H7l-3 3V4zm2 3h8v1H6V7zm0 3h6v1H6v-1z`,fill:`currentColor`})}),ai_agents:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M10 2L4 5v4c0 4.1 2.6 7.8 6 9 3.4-1.2 6-4.9 6-9V5l-6-3zm-1 12l-3-3 1.4-1.4L9 11.2l3.6-3.6L14 9l-5 5z`,fill:`currentColor`})}),qa:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M4 4h12v12H4V4zm2 2v8h8V6H6zm1 1h2v2H7V7zm3 0h2v2h-2V7zm-3 3h2v2H7v-2zm3 0h2v2h-2v-2z`,fill:`currentColor`})})};return(0,G.jsx)(mg,{children:(0,G.jsxs)(hg,{children:[(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(gg,{children:`Product`}),(0,G.jsx)(gg,{children:`Role`}),(0,G.jsx)(gg,{children:`Access`})]})}),(0,G.jsx)(`tbody`,{children:md.map((e,t)=>(0,G.jsxs)(vg,{children:[(0,G.jsx)(_g,{children:(0,G.jsxs)(yg,{children:[(0,G.jsx)(bg,{children:m[e.icon]}),e.product]})}),(0,G.jsx)(_g,{children:p(e)}),(0,G.jsx)(_g,{children:f(e)})]},t))})]})})}var Og=I.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`,kg=I.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`,Ag=I.div`
  padding: 24px 32px;
  flex: 1;
`,jg=I.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px;
  border-top: 1px solid #e9ebed;
  background: #fff;
`,Mg=I.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
    min-width: 410px;
  }
`,Ng=I.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`,Pg=I.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`,Fg=I.a`
  font-size: 13px;
  color: #1f73b7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`,Ig=I.div`
  margin-bottom: 24px;
`,Lg=I.div`
  display: flex;
  border-bottom: 2px solid #e9ebed;
  margin-bottom: 0;
`,Rg=I.button`
  background: none;
  border: none;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: ${e=>e.$active?`600`:`400`};
  color: ${e=>e.$active?`#2f3941`:`#68737d`};
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${e=>e.$active?`#1f73b7`:`transparent`};
  }

  &:hover {
    color: #2f3941;
  }
`,zg=I.div`
  padding-top: 24px;
`,Bg=I.div`
  padding: 32px;
  background: #f8f9f9;
  border: 1px solid #e9ebed;
  border-radius: 4px;
  color: #68737d;
  text-align: center;
  font-size: 14px;
`;function Vg(){let{id:e}=Ye(),t=qe(),n=Ge(),{roles:r}=_d(),[i,a]=(0,g.useState)(`roles`),[o,s]=(0,g.useState)(!1),c=cd.find(t=>t.id===e)||cd[0],l=n.state?.fromRoleId,u=!!n.state?.fromAccessPreview,d=l?r.find(e=>e.id===l):null,f=u&&d?[{label:`People`},{label:`Team`},{label:`Roles`,path:`/roles`},{label:d.name,path:`/roles/${l}`},{label:`Preview team members access change`,path:`/roles/${l}/access-preview`},{label:c.name}]:d?[{label:`People`},{label:`Team`},{label:`Roles`,path:`/roles`},{label:d.name,path:`/roles/${l}`},{label:c.name}]:[{label:`People`},{label:`Team`},{label:`Team members`,path:`/team-members`},{label:c.name}];return(0,G.jsxs)(Og,{children:[o&&(0,G.jsx)(Mg,{children:(0,G.jsxs)(pg,{type:`success`,children:[(0,G.jsx)(pg.Title,{children:`Team member saved`}),(0,G.jsx)(pg.Close,{"aria-label":`Close`,onClick:()=>s(!1)})]})}),(0,G.jsx)(kg,{children:(0,G.jsxs)(Ag,{children:[(0,G.jsx)(Sm,{items:f}),(0,G.jsxs)(Ng,{children:[(0,G.jsx)(Pg,{children:c.name}),(0,G.jsx)(Fg,{href:`#`,children:`View in Support ↗`})]}),(0,G.jsx)(Ig,{children:(0,G.jsxs)(Lg,{children:[(0,G.jsx)(Rg,{$active:i===`account`,onClick:()=>a(`account`),children:`Account`}),(0,G.jsx)(Rg,{$active:i===`roles`,onClick:()=>a(`roles`),children:`Roles and access`})]})}),i===`account`&&(0,G.jsx)(zg,{children:(0,G.jsx)(Bg,{children:`Account settings content would appear here.`})}),i===`roles`&&(0,G.jsx)(zg,{children:(0,G.jsx)(Dg,{memberId:c.id})})]})}),(0,G.jsxs)(jg,{children:[(0,G.jsx)(Th,{onClick:()=>{t(u&&l?`/roles/${l}/access-preview`:l?`/roles/${l}`:`/team-members`)},children:`Cancel`}),(0,G.jsx)(Th,{isPrimary:!0,onClick:()=>{s(!0),setTimeout(()=>s(!1),4e3)},children:`Save`})]})]})}var Hg=I.div`
  padding: 24px 32px;
  overflow-y: auto;
  flex: 1;
`,Ug=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Wg=I.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 4px;
`,Gg=I.p`
  font-size: 14px;
  color: #49545c;
  margin: 0;
`,Kg=I.a`
  color: #1f73b7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,qg=I.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,Jg=I.span`
  color: #1f73b7;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Yg=I.div`
  font-size: 14px;
  color: #49545c;
  margin-bottom: 12px;
`,Xg=I.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #1f73b7;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #144a75;
  }
`,Zg=I.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`,Qg=I.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  border-bottom: 1px solid #d8dcde;
`,$g=I.td`
  padding: 16px;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`,e_=I.tr`
  cursor: pointer;

  &:hover {
    background: #f8f9f9;
  }

  &:last-child td {
    border-bottom: none;
  }
`,t_=I.span`
  color: #2f3941;
`,n_=I.span`
  color: #68737d;
  font-weight: 400;
`,r_=I.span`
  color: #49545c;
`,i_=I.span`
  display: inline-flex;
  align-items: center;
  background: ${e=>e.$system?`#e9ebed`:`#edf7f0`};
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.$system?`#68737d`:`#2f3941`};
`,a_=I.span`
  font-size: 14px;
  color: #2f3941;
`;function o_(){let e=qe(),{roles:t,roleAssignments:n}=_d(),r=e=>(n[e.id]||[]).length;return(0,G.jsxs)(Hg,{children:[(0,G.jsx)(Sm,{items:[{label:`People`},{label:`Team`},{label:`Roles`}]}),(0,G.jsxs)(Ug,{children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(Wg,{children:`Roles`}),(0,G.jsxs)(Gg,{children:[`Create, assign, and manage roles for your team.`,` `,(0,G.jsx)(Kg,{href:`#`,children:`Learn about managing roles ↗`})]})]}),(0,G.jsxs)(qg,{children:[(0,G.jsx)(Jg,{children:`Compare roles`}),(0,G.jsx)(Xg,{onClick:()=>e(`/roles/create`),children:`Create role`})]})]}),(0,G.jsxs)(Yg,{children:[t.length,` roles`]}),(0,G.jsxs)(Zg,{children:[(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(Qg,{children:`Name`}),(0,G.jsx)(Qg,{children:`Type`}),(0,G.jsx)(Qg,{children:`Team members`}),(0,G.jsx)(Qg,{children:`Description`})]})}),(0,G.jsx)(`tbody`,{children:t.map(t=>(0,G.jsxs)(e_,{onClick:()=>e(`/roles/${t.id}`),children:[(0,G.jsx)($g,{children:(0,G.jsxs)(t_,{children:[t.name,t.id===`counselor`&&(0,G.jsx)(n_,{children:` (Error state here)`})]})}),(0,G.jsx)($g,{children:t.type&&(0,G.jsx)(i_,{$system:t.type===`System`,children:t.type})}),(0,G.jsx)($g,{children:(0,G.jsx)(a_,{children:r(t)})}),(0,G.jsx)($g,{children:(0,G.jsx)(r_,{children:t.description})})]},t.id))})]})]})}function s_(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}var c_=s_()?g.useLayoutEffect:g.useEffect,l_=!1,u_=0;function d_(){return++u_}var f_=g.useId;function p_(e){if(f_!==void 0){let t=f_();return e??t}let t=e??(l_?d_():null),[n,r]=g.useState(t);return c_(()=>{n===null&&r(d_())},[]),g.useEffect(()=>{l_===!1&&(l_=!0)},[]),e??n??void 0}function m_(...e){return(t,...n)=>e.some(e=>(e&&e(t,...n),t&&t.defaultPrevented))}function h_(...e){for(let t of e)if(t!==void 0)return t}var g_=0,__=e=>{let t=p_(e);return t=t==null?`id:${g_++}`:`${t}`,t},v_=({idPrefix:e,hasHint:t,hasMessage:n})=>{let r=__(e),i=`${r}--input`,a=`${r}--label`,o=`${r}--hint`,s=`${r}--message`,c=(0,g.useCallback)(({id:e=a,htmlFor:t=i,...n}={})=>({"data-garden-container-id":`containers.field.label`,"data-garden-container-version":`3.0.22`,id:e,htmlFor:t,...n}),[a,i]),l=(0,g.useCallback)(({id:e=o,...t}={})=>({"data-garden-container-id":`containers.field.hint`,"data-garden-container-version":`3.0.22`,id:e,...t}),[o]),u=(0,g.useCallback)(({id:e=i,"aria-describedby":r,...c}={})=>({"data-garden-container-id":`containers.field.input`,"data-garden-container-version":`3.0.22`,id:e,"aria-labelledby":a,"aria-describedby":(()=>{if(r)return r;let e=[];return t&&e.push(o),n&&e.push(s),e.length>0?e.join(` `):void 0})(),...c}),[i,a,o,s,t,n]),d=(0,g.useCallback)(({id:e=s,role:t=`alert`,...n}={})=>({"data-garden-container-id":`containers.field.message`,"data-garden-container-version":`3.0.22`,role:t===null?void 0:t,id:e,...n}),[s]);return(0,g.useMemo)(()=>({getLabelProps:c,getHintProps:l,getInputProps:u,getMessageProps:d}),[c,l,u,d])},y_=({children:e,render:t=e,...n})=>g.createElement(g.Fragment,null,t(v_(n)));y_.propTypes={children:U.default.func,render:U.default.func,idPrefix:U.default.string,hasHint:U.default.bool,hasMessage:U.default.bool};var b_=(0,g.createContext)(void 0),x_=()=>(0,g.useContext)(b_),S_=I.div.attrs({"data-garden-id":`forms.field`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledField`,componentId:`sc-12gzfsu-0`})([`position:relative;direction:`,`;margin:0;border:0;padding:0;font-size:0;`,`;`],e=>e.theme.rtl?`rtl`:`ltr`,z),C_=`forms.input_label`,w_=I.label.attrs(e=>({"data-garden-id":e[`data-garden-id`]||C_,"data-garden-version":e[`data-garden-version`]||`9.15.6`})).withConfig({displayName:`StyledLabel`,componentId:`sc-2utmsz-0`})([`direction:`,`;vertical-align:middle;line-height:`,`;color:`,`;font-size:`,`;font-weight:`,`;&[hidden]{display:`,`;vertical-align:`,`;text-indent:`,`;font-size:`,`;`,`;}`,`;`],e=>e.theme.rtl&&`rtl`,e=>Ss(e.theme.space.base*5,e.theme.fontSizes.md),e=>H({theme:e.theme,variable:`foreground.default`}),e=>e.theme.fontSizes.md,e=>e.$isRegular?e.theme.fontWeights.regular:e.theme.fontWeights.semibold,e=>e.$isRadio?`inline-block`:`inline`,e=>e.$isRadio&&`top`,e=>e.$isRadio&&`-100%`,e=>e.$isRadio&&`0`,e=>!e.$isRadio&&Ja(),z),T_=`forms.input_hint`,E_=I.div.attrs(e=>({"data-garden-id":e[`data-garden-id`]||T_,"data-garden-version":e[`data-garden-version`]||`9.15.6`})).withConfig({displayName:`StyledHint`,componentId:`sc-17c2wu8-0`})([`direction:`,`;display:block;vertical-align:middle;line-height:`,`;color:`,`;font-size:`,`;`,`;`],e=>e.theme.rtl&&`rtl`,e=>Ss(e.theme.space.base*5,e.theme.fontSizes.md),e=>H({theme:e.theme,variable:`foreground.subtle`}),e=>e.theme.fontSizes.md,z),D_=I(Es).attrs({"data-garden-id":`forms.input_message_icon`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledMessageIcon`,componentId:`sc-1ph2gba-0`})([`width:`,`;height:`,`;`,`;`],e=>e.theme.iconSizes.md,e=>e.theme.iconSizes.md,z),O_=`forms.input_message`,k_=I.div.attrs(e=>({"data-garden-id":e[`data-garden-id`]||O_,"data-garden-version":e[`data-garden-version`]||`9.15.6`})).withConfig({displayName:`StyledMessage`,componentId:`sc-30hgg7-0`})([`direction:`,`;display:inline-block;position:relative;vertical-align:middle;`,`;`,`;& `,`{position:absolute;top:-1px;`,`:0;}`,`:not([hidden]) + &{display:block;}`,`;`],e=>e.theme.rtl&&`rtl`,({theme:e,$validation:t})=>{let n=e.fontSizes.sm,r=Ss(e.iconSizes.md,e.fontSizes.sm),i=`${e.space.base}px`,a=t?V(`${e.space.base*2} + ${e.iconSizes.md}`):void 0;return F([`padding-`,`:`,`;line-height:`,`;font-size:`,`;`,`:not([hidden]) + &{margin-top:`,`;}`],e.rtl?`right`:`left`,a,r,n,w_,i)},({theme:e,$validation:t})=>{let n;return n=t===`error`?`foreground.danger`:t===`success`?`foreground.success`:t===`warning`?`foreground.warning`:`foreground.subtle`,F([`color:`,`;`],H({theme:e,variable:n}))},D_,e=>e.theme.rtl?`right`:`left`,w_,z),A_=`forms.input`,j_=e=>e===`warning`||e===`error`,M_=I.input.attrs(e=>({"data-garden-id":A_,"data-garden-version":`9.15.6`,"aria-invalid":j_(e.$validation)})).withConfig({displayName:`StyledTextInput`,componentId:`sc-1r6733h-0`})([`appearance:none;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;direction:`,`;border:`,`;border-radius:`,`;width:100%;box-sizing:border-box;vertical-align:middle;font-family:inherit;&::-ms-browse{border-radius:`,`;}&::-ms-clear,&::-ms-reveal{display:none;}&::-moz-color-swatch{border:none;border-radius:`,`;}&::-webkit-color-swatch{border:none;border-radius:`,`;}&::-webkit-color-swatch-wrapper{padding:0;}&::-webkit-clear-button,&::-webkit-inner-spin-button,&::-webkit-search-cancel-button,&::-webkit-search-results-button{display:none;}&::-webkit-datetime-edit{direction:`,`;line-height:1;}&::-webkit-calendar-picker-indicator{border-radius:100%;}&:invalid{box-shadow:none;}&[type='file']::-ms-value{display:none;}@media screen and (min--moz-device-pixel-ratio:0){&[type='number']{appearance:textfield;}}`,`;`,`;&:disabled{cursor:default;}`,`;`],e=>e.theme.rtl&&`rtl`,e=>e.$isBare?`none`:e.theme.borders.sm,e=>e.$isBare?`0`:e.theme.borderRadii.md,e=>e.theme.borderRadii.sm,e=>e.theme.borderRadii.sm,e=>e.theme.borderRadii.sm,e=>e.theme.rtl&&`rtl`,({theme:e,$isBare:t,$isCompact:n})=>{let r=e.fontSizes.md,i=`${e.space.base*3}px`,a,o,s,c;n?(a=`${e.space.base*8}px`,o=`${e.space.base*1.5}px`,s=V(`${e.fontSizes.sm} - 1`),c=`${e.space.base*6}px`):(a=`${e.space.base*10}px`,o=`${e.space.base*2.5}px`,s=e.fontSizes.sm,c=`${e.space.base*7}px`);let l=V(`${a} - (${o} * 2) - (${e.borderWidths.sm} * 2)`),u=t?`0`:`${Ga(o,r)} ${Ga(i,r)}`,d=V(`(${l} - ${c}) / 2`),f=V(`${o} + ${d} - ${i}`),p=`${e.space.base*5}px`,m=e.iconSizes.md;return F([`padding:`,`;min-height:`,`;line-height:`,`;font-size:`,`;&::-ms-browse{font-size:`,`;}&[type='date'],&[type='datetime-local'],&[type='file'],&[type='month'],&[type='time'],&[type='week']{max-height:`,`;}&[type='file']{line-height:1;}@supports (-ms-ime-align:auto){&[type='color']{padding:`,`;}}&::-moz-color-swatch{margin-top:`,`;margin-left:`,`;width:calc(100% + `,`);height:`,`;}&::-webkit-calendar-picker-indicator{background-position:center;background-size:`,`;padding:0;width:`,`;height:`,`;}&::-webkit-color-swatch{margin:`,` `,`;}`,`:not([hidden]) + &&,`,` + &&,`,` + &&,&& + `,`,&& ~ `,`{margin-top:`,`px;}`],u,t?`1em`:a,Ss(l,r),r,s,a,n?`0 2px`:`1px 3px`,d,f,V(`${f} * -2`),c,m,p,p,d,f,w_,E_,k_,E_,k_,e.space.base*(n?1:2))},({theme:e,$isBare:t,$isHovered:n,$focusInset:r,$validation:i})=>{let a=H({theme:e,variable:`foreground.default`}),o=t?`transparent`:H({theme:e,variable:`background.default`}),s,c,l,u;i?(i===`success`?l=`border.successEmphasis`:i===`warning`?l=`border.warningEmphasis`:i===`error`&&(l=`border.dangerEmphasis`),s=H({theme:e,variable:l}),c=s,u=s):(s=H({theme:e,variable:`border.default`,dark:{offset:-100},light:{offset:100}}),l=`border.primaryEmphasis`,c=H({theme:e,variable:l}),u=c);let d=t?void 0:H({theme:e,variable:`background.disabled`}),f=H({theme:e,variable:`border.disabled`}),p=H({theme:e,variable:`foreground.disabled`}),m=p,h=d,g=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" aria-hidden="true" color="${H({theme:e,variable:`foreground.subtle`})}">
      <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"/>
    </svg>`,_=`url("data:image/svg+xml,${encodeURIComponent(g)}")`;return F([`border-color:`,`;background-color:`,`;color:`,`;&::placeholder{opacity:1;color:`,`;}&::-webkit-datetime-edit{color:`,`;}&::-webkit-calendar-picker-indicator{background-image:`,`;}&[readonly],&[aria-readonly='true']{background-color:`,`;}&:hover{border-color:`,`;}`,` &::-webkit-calendar-picker-indicator:focus-visible{`,`}&:disabled,&[aria-disabled='true']{border-color:`,`;background-color:`,`;color:`,`;}`],n?c:s,o,a,m,m,_,h,c,Ts({theme:e,inset:r,color:{variable:l},styles:{borderColor:u},condition:!t}),Ts({theme:e}),f,d,p)},z),N_=`forms.textarea`,P_=`
  visibility: hidden;
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 0;
  left: 0;
  transform: translateZ(0);
`,F_=I(M_).attrs({as:`textarea`,"data-garden-id":N_,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledTextarea`,componentId:`sc-wxschl-0`})([`resize:`,`;overflow:auto;`,`;`,`;`],e=>e.$isResizable?`vertical`:`none`,e=>e.$isHidden&&P_,z),I_=I(Es).attrs({"data-garden-id":`forms.media_figure`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledTextMediaFigure`,componentId:`sc-1qepknj-0`})([`transform:`,`;transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;`,`;`,` `,`;`],e=>e.$isRotated&&`rotate(${e.theme.rtl?`-`:`+`}180deg)`,e=>{let t=e.theme.iconSizes.md,n=`1px ${e.theme.space.base*2}px auto 0`,r=`1px 0 auto ${e.theme.space.base*2}px`,i;return i=e.$position===`start`?e.theme.rtl?r:n:e.theme.rtl?n:r,F([`margin:`,`;width:`,`;height:`,`;`],i,t,t)},({theme:e,$isDisabled:t,$isHovered:n,$isFocused:r})=>{let i;if(t)i=H({theme:e,variable:`foreground.disabled`});else{let t={theme:e,variable:`foreground.subtle`};i=H(n||r?{...t,dark:{offset:-100},light:{offset:100}}:t)}return F([`color:`,`;`],i)},z),L_=`forms.faux_input`,R_=I(M_).attrs(e=>({as:`div`,"aria-readonly":e.$isReadOnly,"aria-disabled":e.$isDisabled,"data-garden-id":L_,"data-garden-version":`9.15.6`})).withConfig({displayName:`StyledTextFauxInput`,componentId:`sc-yqw7j9-0`})([`display:`,`;align-items:`,`;cursor:`,`;overflow:hidden;`,` & > `,`{vertical-align:`,`;`,`{box-shadow:unset;}}& > `,`{flex-shrink:`,`;}`,`;`],e=>e.$mediaLayout?`inline-flex`:`inline-block`,e=>e.$mediaLayout&&`baseline`,e=>e.$mediaLayout&&!e.$isDisabled?`text`:`default`,({theme:e,$validation:t,$focusInset:n,$isBare:r,$isFocused:i})=>{let a,o;return t?(t===`success`?a=`border.successEmphasis`:t===`warning`?a=`border.warningEmphasis`:t===`error`&&(a=`border.dangerEmphasis`),o=H({theme:e,variable:a})):(a=`border.primaryEmphasis`,o=H({theme:e,variable:a})),F([``,``],Ts({theme:e,inset:n,color:{variable:a},selector:i?`&`:`&:focus-within`,styles:{borderColor:o},condition:!r}))},M_,e=>!e.$mediaLayout&&`baseline`,ws,I_,e=>e.$mediaLayout&&`0`,z),z_=I(M_).attrs({"data-garden-id":`forms.media_input`,"data-garden-version":`9.15.6`,$isBare:!0}).withConfig({displayName:`StyledTextMediaInput`,componentId:`sc-12i9xfi-0`})([`flex-grow:1;`,`;`],z),B_=`forms.radio_label`,V_=e=>{let t=e.theme.space.base*4,n=t+e.theme.space.base*2,r=e.theme.space.base*5;return F([`padding-`,`:`,`px;&[hidden]{padding-`,`:`,`px;height:`,`px;line-height:`,`px;}`],e.theme.rtl?`right`:`left`,n,e.theme.rtl?`right`:`left`,t,r,r)},H_=I(w_).attrs({"data-garden-id":B_,"data-garden-version":`9.15.6`,$isRadio:!0}).withConfig({displayName:`StyledRadioLabel`,componentId:`sc-1aq2e5t-0`})([`display:inline-block;position:relative;cursor:pointer;`,`;`,`;`],e=>V_(e),z),U_=I(H_).attrs({"data-garden-id":`forms.checkbox_label`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCheckLabel`,componentId:`sc-x7nr1-0`})([``,`;`],z),W_=I(E_).attrs({"data-garden-id":`forms.radio_hint`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledRadioHint`,componentId:`sc-eo8twg-0`})([`padding-`,`:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,e=>V(`${e.theme.space.base} * 6px`),z),G_=I(W_).attrs({"data-garden-id":`forms.checkbox_hint`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCheckHint`,componentId:`sc-1kl8e8c-0`})([``,`;`],z),K_=I.input.attrs({"data-garden-id":`forms.radio`,"data-garden-version":`9.15.6`,type:`radio`}).withConfig({displayName:`StyledRadioInput`,componentId:`sc-qsavpv-0`})([`position:absolute;opacity:0;margin:0;& ~ `,`::before{position:absolute;`,`:0;transition:border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;border-radius:50%;background-repeat:no-repeat;background-position:center;content:'';}& ~ `,` > svg{position:absolute;}`,`;&:focus ~ `,`::before{outline:none;}& ~ `,`:active::before{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,color 0.1s ease-in-out;}`,`;&:disabled ~ `,`{cursor:default;}`,`;`],H_,e=>e.theme.rtl?`right`:`left`,H_,({theme:e,$isCompact:t})=>{let n=`${e.space.base*5}px`,r=`${e.space.base*4}px`,i=V(`(${n} - ${r}) / 2`),a=e.iconSizes.sm,o=V(`(${r} - ${a}) / 2`),s=V(`${o} + ${i}`),c=`${e.space.base*(t?1:2)}px`;return F([`top:`,`;width:`,`;height:`,`;& ~ `,`::before{top:`,`;border:`,`;background-size:`,`;width:`,`;height:`,`;box-sizing:border-box;}& ~ `,` > svg{top:`,`;`,`:`,`;width:`,`;height:`,`;}&& ~ `,` ~ `,`{margin-top:`,`;}`],i,r,r,H_,i,e.borders.sm,e.iconSizes.sm,r,r,H_,s,e.rtl?`right`:`left`,o,a,a,H_,k_,c)},H_,H_,({theme:e})=>{let t=H({theme:e,variable:`border.emphasis`}),n=H({theme:e,variable:`background.default`}),r=H({theme:e,variable:`foreground.onEmphasis`}),i={theme:e,variable:`background.primaryEmphasis`},a={theme:e,variable:`border.primaryEmphasis`},o=H({...i,transparency:e.opacity[100]}),s=H(a),c=s,l=H({...i,transparency:e.opacity[200]}),u=c,d=H(i),f=c,p={dark:{offset:-100},light:{offset:100}},m={dark:{offset:-200},light:{offset:200}},h=H({...i,...p}),g=H({...a,...p}),_=H({...i,...m}),v=H({...a,...m}),y=H({theme:e,variable:`background.disabled`,transparency:e.opacity[300]});return F([`& ~ `,`::before{border-color:`,`;background-color:`,`;}& ~ `,` > svg{color:`,`;}& ~ `,`:hover::before{border-color:`,`;background-color:`,`;}`,` & ~ `,`:active::before{border-color:`,`;background-color:`,`;}&:checked ~ `,`::before{border-color:`,`;background-color:`,`;}&:enabled:checked ~ `,`:hover::before{border-color:`,`;background-color:`,`;}&:enabled:checked ~ `,`:active::before{border-color:`,`;background-color:`,`;}&:disabled ~ `,`::before{border-color:transparent;background-color:`,`;}`],H_,t,n,H_,r,H_,s,o,Ts({theme:e,styles:{borderColor:c},selector:`&:focus-visible ~ ${H_}::before`}),H_,u,l,H_,f,d,H_,g,h,H_,v,_,H_,y)},H_,z),q_=I(K_).attrs({"data-garden-id":`forms.checkbox`,"data-garden-version":`9.15.6`,type:`checkbox`}).withConfig({displayName:`StyledCheckInput`,componentId:`sc-176jxxe-0`})([`& ~ `,`::before{border-radius:`,`;}`,`;`,`;`],U_,e=>e.theme.borderRadii.md,({theme:e})=>{let t={theme:e,variable:`background.primaryEmphasis`},n={theme:e,variable:`border.primaryEmphasis`},r=H(t),i=H(n),a={dark:{offset:-100},light:{offset:100}},o={dark:{offset:-200},light:{offset:200}},s=H({...t,...a}),c=H({...n,...a}),l=H({...t,...o});return F([`&:indeterminate ~ `,`::before{border-color:`,`;background-color:`,`;}&:enabled:indeterminate ~ `,`:hover::before{border-color:`,`;background-color:`,`;}&:enabled:indeterminate ~ `,`:active::before{border-color:`,`;background-color:`,`;}&:disabled:indeterminate ~ `,`::before{border-color:transparent;background-color:`,`;}`],U_,i,r,U_,c,s,U_,H({...n,...o}),l,U_,H({theme:e,variable:`background.disabled`,transparency:e.opacity[300]}))},z),J_=I(k_).attrs({"data-garden-id":`forms.radio_message`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledRadioMessage`,componentId:`sc-1pmi0q8-0`})([`padding-`,`:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,e=>V(`${e.theme.space.base} * 6px`),z),Y_=I(J_).attrs({"data-garden-id":`forms.checkbox_message`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCheckMessage`,componentId:`sc-s4p6kd-0`})([``,`;`],z),X_;function Z_(){return Z_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z_.apply(null,arguments)}var Q_=I(function(e){return g.createElement(`svg`,Z_({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),X_||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 6l2 2 4-4`}))}).attrs({"data-garden-id":`forms.check_svg`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCheckSvg`,componentId:`sc-fvxetk-0`})([`transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;`,`:checked ~ `,` > &{opacity:1;}`,`:indeterminate ~ `,` > &{opacity:0;}`,`;`],q_,U_,q_,U_,z),$_;function ev(){return ev=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ev.apply(null,arguments)}var tv=I(function(e){return g.createElement(`svg`,ev({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),$_||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:2,d:`M3 6h6`}))}).attrs({"data-garden-id":`forms.dash_svg`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledDashSvg`,componentId:`sc-z3vq71-0`})([`transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;`,`:indeterminate ~ `,` > &{opacity:1;}`,`;`],q_,U_,z),nv;function rv(){return rv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rv.apply(null,arguments)}var iv=I(function(e){return g.createElement(`svg`,rv({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),nv||=g.createElement(`circle`,{cx:6,cy:6,r:2,fill:`currentColor`}))}).attrs({"data-garden-id":`forms.radio_svg`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledRadioSvg`,componentId:`sc-1r1qtr1-0`})([`transition:opacity 0.25s ease-in-out;opacity:0;`,`:checked ~ `,` > &{opacity:1;}`,`;`],K_,H_,z),av=`forms.toggle_label`,ov=e=>{let t=e.theme.space.base*10,n=t+e.theme.space.base*2;return F([`padding-`,`:`,`px;&[hidden]{padding-`,`:`,`px;}`],e.theme.rtl?`right`:`left`,n,e.theme.rtl?`right`:`left`,t)},sv=I(U_).attrs({"data-garden-id":av,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledToggleLabel`,componentId:`sc-e0asdk-0`})([``,`;`,`;`],e=>ov(e),z),cv=I(E_).attrs({"data-garden-id":`forms.toggle_hint`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledToggleHint`,componentId:`sc-nziggu-0`})([`padding-`,`:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,e=>V(`${e.theme.space.base} * 12px`),z),lv=I(k_).attrs({"data-garden-id":`forms.toggle_message`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledToggleMessage`,componentId:`sc-13vuvl1-0`})([`padding-`,`:`,`;& `,`{`,`:`,`;}`,`;`],e=>e.theme.rtl?`right`:`left`,e=>V(`${e.theme.space.base} * 12px`),D_,e=>e.theme.rtl?`right`:`left`,e=>V(`${e.theme.space.base} * 10px - ${e.theme.iconSizes.md}`),z),uv;function dv(){return dv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dv.apply(null,arguments)}var fv=I(function(e){return g.createElement(`svg`,dv({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),uv||=g.createElement(`circle`,{cx:8,cy:8,r:6,fill:`currentColor`}))}).attrs({"data-garden-id":`forms.toggle_svg`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledToggleSvg`,componentId:`sc-162xbyx-0`})([`transition:all 0.15s ease-in-out;`,`;`],z),pv=I(M_).attrs({"data-garden-id":`forms.select`,"data-garden-version":`9.15.6`,as:`select`}).withConfig({displayName:`StyledSelect`,componentId:`sc-8xdxpt-0`})([`opacity:1;cursor:pointer;text-overflow:ellipsis;`,`;`,`;&::-ms-expand{display:none;}&::-ms-value{background-color:transparent;color:inherit;}&:-moz-focusring{transition:none;text-shadow:0 0 0 `,`;color:transparent;}& + `,`{position:absolute;pointer-events:none;}`],({theme:e,$isBare:t,$isCompact:n})=>{let r=t?void 0:V(`${e.iconSizes.md} + ${e.space.base*5}`),i=`${e.space.base*(n?1.5:2.5)+1}px`,a=`${e.space.base*3}px`;return F([`padding-`,`:`,`;& + `,`{top:`,`;`,`:`,`;}`],e.rtl?`left`:`right`,r,I_,i,e.rtl?`left`:`right`,a)},({theme:e})=>F([`&:hover + `,`,&:focus + `,`,&:focus-visible + `,`{color:`,`;}&:disabled + `,`{color:`,`;}`],I_,I_,I_,H({theme:e,variable:`foreground.subtle`,dark:{offset:-100},light:{offset:100}}),I_,H({theme:e,variable:`foreground.disabled`})),e=>H({theme:e.theme,variable:`foreground.default`}),I_),mv=I(R_).attrs({"data-garden-id":`forms.select_wrapper`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledSelectWrapper`,componentId:`sc-i7b6hw-0`})([`position:relative;padding:0;overflow:visible;`,`;& > `,`{border-color:transparent;background-color:transparent;`,`{box-shadow:unset;}}`],({theme:e,$isCompact:t})=>F([`max-height:`,`;`],`${e.space.base*(t?8:10)}px`),pv,ws),hv=(0,g.createContext)(void 0),gv=()=>(0,g.useContext)(hv),_v=g.forwardRef((e,t)=>{let{hasHint:n,setHasHint:r,getHintProps:i}=x_()||{},a=gv();(0,g.useEffect)(()=>(!n&&r&&r(!0),()=>{n&&r&&r(!1)}),[n,r]);let o;o=a===`checkbox`?G_:a===`radio`?W_:a===`toggle`?cv:E_;let s=e;return i&&(s=i(s)),g.createElement(o,Object.assign({ref:t},s))});_v.displayName=`Field.Hint`;var vv=[`success`,`warning`,`error`],yv,bv;function xv(){return xv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xv.apply(null,arguments)}var Sv=function(e){return g.createElement(`svg`,xv({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),yv||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 4.5V9`})),bv||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},Cv,wv;function Tv(){return Tv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tv.apply(null,arguments)}var Ev=function(e){return g.createElement(`svg`,Tv({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Cv||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5`}),wv||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},Dv;function Ov(){return Ov=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ov.apply(null,arguments)}var kv=function(e){return g.createElement(`svg`,Ov({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Dv||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 9l2.5 2.5 5-5`}),g.createElement(`circle`,{cx:7.5,cy:8.5,r:7})))},Av=({validation:e,children:t,...n})=>g.createElement(D_,Object.assign({"aria-hidden":!1,role:`img`},n),e?{error:g.createElement(Sv,null),success:g.createElement(kv,null),warning:g.createElement(Ev,null)}[e]:t);Av.displayName=`Field.MessageIcon`,Av.propTypes={validation:U.default.oneOf(vv)};var jv=g.forwardRef(({validation:e,validationLabel:t,children:n,...r},i)=>{let{hasMessage:a,setHasMessage:o,getMessageProps:s}=x_()||{},c=gv();(0,g.useEffect)(()=>(!a&&o&&o(!0),()=>{a&&o&&o(!1)}),[a,o]);let l;l=c===`checkbox`?Y_:c===`radio`?J_:c===`toggle`?lv:k_;let u={$validation:e,$validationLabel:t,...r};s&&(u=s(u));let d=Cs(jv,u,`$validationLabel`,e,e!==void 0);return g.createElement(l,Object.assign({ref:i},u),!!e&&g.createElement(Av,{validation:e,"aria-label":d}),n)});jv.displayName=`Field.Message`,jv.propTypes={validation:U.default.oneOf(vv),validationLabel:U.default.string};var Mv=(0,g.createContext)(void 0),Nv=()=>(0,g.useContext)(Mv),Pv=g.forwardRef(({children:e,isRegular:t,...n},r)=>{let i=x_(),a=Nv(),o=gv(),s=a&&t===void 0?!0:t,c=n;if(i&&(c=i.getLabelProps(c),o===void 0)){let{setIsLabelActive:e,setIsLabelHovered:t}=i;c.onMouseUp=m_(n.onMouseUp,()=>{e(!1)}),c.onMouseDown=m_(n.onMouseDown,()=>{e(!0)}),c.onMouseEnter=m_(n.onMouseEnter,()=>{t(!0)}),c.onMouseLeave=m_(n.onMouseLeave,()=>{t(!1)})}return o===`radio`?g.createElement(H_,Object.assign({ref:r},c,{$isRegular:s}),g.createElement(iv,null),e):o===`checkbox`?(c.onClick=m_(c.onClick,e=>{let t=navigator?.userAgent.toLowerCase().indexOf(`firefox`)>-1;if(i&&t&&e.target instanceof Element){let t=e.target.getAttribute(`for`);if(!t)return;let n=document.getElementById(t);n&&n.type===`checkbox`&&(e.shiftKey&&(n.click(),n.checked=!0),n.focus())}}),g.createElement(U_,Object.assign({ref:r},c,{$isRegular:s}),g.createElement(Q_,null),g.createElement(tv,null),e)):o===`toggle`?g.createElement(sv,Object.assign({ref:r},c,{$isRegular:s}),g.createElement(fv,null),e):g.createElement(w_,Object.assign({ref:r},c,{$isRegular:s}),e)});Pv.displayName=`Field.Label`,Pv.propTypes={isRegular:U.default.bool};var Fv=g.forwardRef((e,t)=>{let[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)(!1),[o,s]=(0,g.useState)(!1),[c,l]=(0,g.useState)(!1),{getInputProps:u,getMessageProps:d,...f}=v_({idPrefix:e.id,hasHint:n,hasMessage:i}),p=(0,g.useMemo)(()=>({...f,getInputProps:u,getMessageProps:d,isLabelActive:o,setIsLabelActive:s,isLabelHovered:c,setIsLabelHovered:l,hasHint:n,setHasHint:r,hasMessage:i,setHasMessage:a}),[f,u,d,o,c,n,i]);return g.createElement(b_.Provider,{value:p},g.createElement(S_,Object.assign({},e,{ref:t})))});Fv.displayName=`Field`;var Iv=Fv;Iv.Hint=_v,Iv.Label=Pv,Iv.Message=jv;var Lv=(0,g.createContext)(void 0),Rv=()=>(0,g.useContext)(Lv),zv=g.forwardRef(({onSelect:e,isBare:t,isCompact:n,focusInset:r,validation:i,...a},o)=>{let s=x_(),c=Rv(),l=a;s&&(l=s.getInputProps(l));let u=a.readOnly?m_(e,e=>{e.currentTarget.select()}):e;return g.createElement(M_,Object.assign({ref:o,onSelect:u},l,{$isBare:t,$isCompact:c?c.isCompact:n,$focusInset:c&&r===void 0?!0:r,$validation:i}))});zv.propTypes={isCompact:U.default.bool,isBare:U.default.bool,focusInset:U.default.bool,validation:U.default.oneOf(vv)},zv.displayName=`Input`;function Bv(e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var Vv=e=>parseInt(e,10)||0,Hv=g.forwardRef(({isCompact:e,isBare:t,focusInset:n,isResizable:r,minRows:i,maxRows:a,style:o,validation:s,onChange:c,onSelect:l,...u},d)=>{let f=x_(),p=(0,g.useRef)(),m=(0,g.useRef)(null),[h,_]=(0,g.useState)({overflow:!1,height:0}),v=u.value!==null&&u.value!==void 0,y=(i!==void 0||a!==void 0)&&!r,b=(0,g.useCallback)(()=>{if(!y)return;let e=p.current,t=window.getComputedStyle(e),n=m.current;n.style.width=t.width,n.value=e.value||e.placeholder||` `;let r=t.boxSizing,o=Vv(t.paddingBottom)+Vv(t.paddingTop),s=Vv(t.borderTopWidth)+Vv(t.borderBottomWidth),c=n.scrollHeight-o;n.value=`x`;let l=n.scrollHeight-o,u=c;i&&(u=Math.max(Number(i)*l,u)),a&&(u=Math.min(Number(a)*l,u)),u=Math.max(u,l);let d=u+(r===`border-box`?o+s:0),f=Math.abs(u-c)<=1;_(e=>d>0&&Math.abs((e.height||0)-d)>1||e.overflow!==f?{overflow:f,height:d}:e)},[a,i,p,y]),x=(0,g.useCallback)(e=>{v||b(),c&&c(e)},[b,v,c]);(0,g.useLayoutEffect)(()=>{b()});let S={};y&&(S.height=h.height,S.overflow=h.overflow?`hidden`:void 0);let C={$focusInset:n,$isBare:t,$isCompact:e,$isResizable:r,$validation:s,onChange:x,onSelect:u.readOnly?m_(l,e=>{e.currentTarget.select()}):l,ref:Bv([p,d]),rows:i,style:{...S,...o},...u};return f&&(C=f.getInputProps(C)),g.createElement(g.Fragment,null,g.createElement(F_,C),!!y&&g.createElement(F_,{$isBare:t,$isCompact:e,$isHidden:!0,"aria-hidden":!0,className:u.className,readOnly:!0,ref:m,style:o,tabIndex:-1}))});Hv.propTypes={isCompact:U.default.bool,isBare:U.default.bool,focusInset:U.default.bool,isResizable:U.default.bool,minRows:U.default.number,maxRows:U.default.number,validation:U.default.oneOf(vv)},Hv.displayName=`Textarea`;var Uv;function Wv(){return Wv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wv.apply(null,arguments)}var Gv=function(e){return g.createElement(`svg`,Wv({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Uv||=g.createElement(`path`,{fill:`currentColor`,d:`M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z`}))},Kv=({isDisabled:e,isFocused:t,isHovered:n,isRotated:r,...i})=>g.createElement(I_,Object.assign({$position:`start`,$isDisabled:e,$isFocused:t,$isHovered:n,$isRotated:r},i));Kv.displayName=`FauxInput.StartIcon`;var qv=Kv,Jv=({isDisabled:e,isFocused:t,isHovered:n,isRotated:r,...i})=>g.createElement(I_,Object.assign({$position:`end`,$isDisabled:e,$isFocused:t,$isHovered:n,$isRotated:r},i));Jv.displayName=`FauxInput.EndIcon`;var Yv=Jv,Xv=(0,g.forwardRef)(({disabled:e,focusInset:t,isBare:n,isCompact:r,isFocused:i,isHovered:a,onBlur:o,onFocus:s,readOnly:c,validation:l,mediaLayout:u,...d},f)=>{let[p,m]=(0,g.useState)(!1),h=m_(s,()=>{m(!0)}),_=m_(o,()=>{m(!1)});return g.createElement(R_,Object.assign({onFocus:h,onBlur:_,$focusInset:t,$isBare:n,$isCompact:r,$isDisabled:e,$isFocused:i===void 0?p:i,$isHovered:a,$isReadOnly:c,$mediaLayout:u,$validation:l,tabIndex:e?void 0:0},d,{ref:f}))});Xv.displayName=`FauxInput`,Xv.propTypes={isCompact:U.default.bool,isBare:U.default.bool,focusInset:U.default.bool,disabled:U.default.bool,readOnly:U.default.bool,validation:U.default.oneOf(vv),isFocused:U.default.bool,isHovered:U.default.bool};var Zv=Xv;Zv.EndIcon=Yv,Zv.StartIcon=qv;var Qv=g.forwardRef(({disabled:e,isCompact:t,validation:n,focusInset:r,isBare:i,...a},o)=>{let s=x_(),c={$focusInset:r,$isBare:i,$isCompact:t,$validation:n,disabled:e,ref:o,...a};return s&&(c=s.getInputProps(c)),g.createElement(mv,{$isCompact:t,$isBare:i,$isDisabled:e,$validation:n,$focusInset:r},g.createElement(pv,c),!i&&g.createElement(Zv.EndIcon,{isDisabled:e},g.createElement(Gv,null)))});Qv.propTypes={isCompact:U.default.bool,isBare:U.default.bool,focusInset:U.default.bool,validation:U.default.oneOf(vv)},Qv.displayName=`Select`;var $v=g.forwardRef(({start:e,end:t,disabled:n,isCompact:r,isBare:i,focusInset:a,readOnly:o,validation:s,wrapperProps:c={},wrapperRef:l,onSelect:u,...d},f)=>{let p=x_(),m=(0,g.useRef)(),[h,_]=(0,g.useState)(!1),[v,y]=(0,g.useState)(!1),{onClick:b,onFocus:x,onBlur:S,onMouseOver:C,onMouseOut:w,...ee}=c,te=m_(b,()=>{m.current&&m.current.focus()}),ne=m_(x,()=>{_(!0)}),re=m_(S,()=>{_(!1)}),T=m_(C,()=>{y(!0)}),ie=m_(w,()=>{y(!1)}),ae=o?m_(u,e=>{e.currentTarget.select()}):u,E={disabled:n,readOnly:o,ref:Bv([m,f]),onSelect:ae,...d},oe;return p&&(E=p.getInputProps(E),oe=p.isLabelHovered),g.createElement(Zv,Object.assign({tabIndex:null,onClick:te,onFocus:ne,onBlur:re,onMouseOver:T,onMouseOut:ie,disabled:n,isFocused:h,isHovered:v||oe,isCompact:r,isBare:i,focusInset:a,readOnly:o,validation:s,mediaLayout:!0},ee,{ref:l}),!!e&&g.createElement(Zv.StartIcon,{isDisabled:n,isFocused:h,isHovered:v||oe},e),g.createElement(z_,E),!!t&&g.createElement(Zv.EndIcon,{isDisabled:n,isFocused:h,isHovered:v||oe},t))});$v.propTypes={isCompact:U.default.bool,isBare:U.default.bool,focusInset:U.default.bool,validation:U.default.oneOf(vv),start:U.default.any,end:U.default.any,wrapperProps:U.default.object,wrapperRef:U.default.any},$v.displayName=`MediaInput`;var ey=[`small`,`medium`,`large`],ty=I(Es).attrs({"data-garden-id":`tags.avatar`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledAvatar`,componentId:`sc-3kdmgt-0`})([`flex-shrink:0;font-size:0;`,`;`],z),ny=I.button.attrs({"data-garden-id":`tags.close`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledClose`,componentId:`sc-d6lrpn-0`})([`display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:`,`;border:0;background:transparent;cursor:pointer;padding:0;color:inherit;font-size:0;appearance:none;&:hover{opacity:`,`;}&:focus{outline:none;}&:active{opacity:`,`;}`,`;`],e=>e.theme.opacity[1e3],e=>e.theme.opacity[1100],e=>e.theme.opacity[1200],z),ry=`tags.tag_view`,iy=({theme:e,$hue:t})=>{let n,r;if(t)switch(r=H({theme:e,variable:`foreground.onEmphasis`}),t){case`grey`:case`neutralHue`:n=H({theme:e,variable:`background.emphasis`,dark:{offset:-300}});break;case`blue`:case`primaryHue`:n=H({theme:e,variable:`background.primaryEmphasis`});break;case`red`:case`dangerHue`:n=H({theme:e,variable:`background.dangerEmphasis`});break;case`green`:case`successHue`:n=H({theme:e,variable:`background.successEmphasis`});break;case`yellow`:case`warningHue`:n=H({theme:e,hue:`warningHue`,shade:400}),e.colors.base===`light`&&(r=H({theme:e,variable:`foreground.warningEmphasis`}));break;case`kale`:case`chromeHue`:n=H({theme:e,hue:`chromeHue`,dark:{shade:500},light:{shade:800}});break;default:{let i={...e,colors:{...e.colors,base:`light`}},a={...e,colors:{...e.colors,base:`dark`}},o=`foreground.onEmphasis`;n=H({theme:e,hue:t}),r=Ho(n,H({theme:a,variable:o}),H({theme:i,variable:o}),!1);break}}else n=H({theme:e,hue:`neutralHue`,dark:{shade:800},light:{shade:200}}),r=H({theme:e,variable:`foreground.default`});return F([`background-color:`,`;color:`,`;&:hover{color:`,`;}`,``],n,r,r,Ts({theme:e,shadowWidth:`sm`,selector:`&:focus`}))},ay=({$isPill:e,$isRound:t,$size:n,theme:r})=>{let i,a,o,s,c,l;n===`small`?(i=r.borderRadii.sm,a=r.space.base,o=r.space.base*4,s=r.fontSizes.xs,l=0):n===`large`?(i=r.borderRadii.md,a=r.space.base*3,o=r.space.base*8,s=r.fontSizes.sm,l=r.space.base*6):(i=r.borderRadii.sm,a=r.space.base*2,o=r.space.base*5,s=r.fontSizes.sm,l=r.space.base*4);let u=n===`large`?V(`${i} - 1`):i,d=(o-l)/2,f=t?d:d*2;return t?(i=`50%`,a=0,c=o,u=`50%`):e&&(i=`100px`,u=`50%`,n===`small`?(a=r.space.base*1.5,c=r.space.base*6):c=n===`large`?r.space.base*12:r.space.base*7.5),F([`border-radius:`,`;padding:0 `,`px;min-width:`,`;height:`,`px;line-height:`,`;font-size:`,`;& > *{width:100%;min-width:`,`;}& `,`{margin-`,`:-`,`px;margin-`,`:`,`px;border-radius:`,`;width:`,`px;min-width:`,`px;height:`,`px;}& `,`{margin-`,`:-`,`px;border-radius:`,`;width:`,`px;height:`,`px;}`],i,a,c?`${c}px`:`calc(${a*2}px + 1ch)`,o,Ss(o,s),s,c?`${c-a*2}px`:`1ch`,ty,r.rtl?`right`:`left`,a-d,r.rtl?`left`:`right`,f,u,l,l,l,ny,r.rtl?`left`:`right`,a,i,o,o)},oy=I.div.attrs(()=>({"data-garden-id":ry,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledTag`,componentId:`sc-1jvbe03-0`})([`display:inline-flex;flex-wrap:nowrap;align-items:center;justify-content:`,`;transition:box-shadow 0.1s ease-in-out;box-sizing:border-box;border:0;max-width:100%;overflow:hidden;vertical-align:middle;text-decoration:none;white-space:nowrap;font-weight:`,`;direction:`,`;`,`;&:hover{cursor:default;text-decoration:none;}&:link:hover,&:visited:hover{cursor:pointer;}&:any-link:hover{cursor:pointer;}`,`{text-decoration:none;}`,`;& > *{overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;}& b{font-weight:`,`;}& `,`{display:`,`;}& `,`{display:`,`;}`,`;`],e=>e.$isRound&&`center`,e=>!e.$isRegular&&e.theme.fontWeights.semibold,e=>e.theme.rtl?`rtl`:`ltr`,e=>ay(e),ws,e=>iy(e),e=>e.theme.fontWeights.semibold,ty,e=>(e.$isRound||e.$size===`small`)&&`none`,ny,e=>e.$isRound&&`none`,z),sy;function cy(){return cy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cy.apply(null,arguments)}var ly=function(e){return g.createElement(`svg`,cy({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),sy||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,d:`M3 9l6-6m0 6L3 3`}))},uy=(0,g.forwardRef)((e,t)=>{let n=Cs(uy,e,`aria-label`,`Remove`);return g.createElement(ny,Object.assign({ref:t,"aria-label":n},e,{type:`button`,tabIndex:-1}),g.createElement(ly,null))});uy.displayName=`Tag.Close`;var dy=uy,fy=e=>g.createElement(ty,e);fy.displayName=`Tag.Avatar`;var py=fy,my=(0,g.forwardRef)(({isPill:e,isRound:t,isRegular:n,size:r=`medium`,hue:i,...a},o)=>g.createElement(oy,Object.assign({$hue:i,$isPill:e,$isRegular:n,$isRound:t,$size:r,ref:o},a)));my.displayName=`Tag`,my.propTypes={size:U.default.oneOf(ey),hue:U.default.string,isPill:U.default.bool,isRound:U.default.bool,isRegular:U.default.bool};var hy=my;hy.Avatar=py,hy.Close=dy;var gy=I.mark`
  background: ${J.yellow[300]};
  color: inherit;
  padding: 0;
  border-radius: 2px;
`;function _y(e,t){if(!t||typeof e!=`string`||!e)return e;let n=e.toLowerCase(),r=t.toLowerCase(),i=[],a=0,o=0;for(;;){let t=n.indexOf(r,a);if(t===-1){i.push(e.slice(a));break}t>a&&i.push(e.slice(a,t)),i.push((0,G.jsx)(gy,{children:e.slice(t,t+r.length)},o++)),a=t+r.length}return i}function vy(e,t){if(!t||e==null||typeof e==`boolean`)return e;if(typeof e==`string`)return _y(e,t);if(typeof e==`number`)return e;if(Array.isArray(e))return e.map((e,n)=>(0,G.jsx)(g.Fragment,{children:vy(e,t)},n));if(g.isValidElement(e)){if(e.type===`input`||e.type===`textarea`)return e;let n=e.props?.children;return n==null?e:g.cloneElement(e,void 0,vy(n,t))}return e}function yy(e){return e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(yy).join(` `):g.isValidElement(e)?yy(e.props?.children):``}var by=I.div`
  padding-bottom: 8px;
`,xy=I(cg)`
  max-width: 630px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #f8f9f9;
  border-color: #d8dcde;
  padding: 16px;
  padding-left: 40px;

  [data-garden-id="notifications.icon"] {
    left: 16px;
    margin-top: 0;
  }

  [data-garden-id="notifications.title"] {
    margin: 0;
  }

  [data-garden-id="notifications.paragraph"] {
    margin: 0;
  }
`,Sy=I.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
  font-weight: 500;
`,Cy=I.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`,wy=I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`,Ty=I.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
`,Ey=I.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,Dy=I.div`
  display: flex;
  flex-direction: column;
`,Oy=I.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3941;
`,ky=I.span`
  font-size: 13px;
  color: #68737d;
  margin-top: 2px;
`,Ay=[{value:`no_access`,label:`No access`,description:`Users with this custom role can’t view or access AI agents. Selecting this option doesn’t hide AI agents from the product icons menu, but users can’t access the AI agents dashboard.`},{value:`client_admin`,label:`Client admin`,description:`Users can manage all AI agent capabilities, including creating, editing, publishing, and deleting agents, configuring settings, and managing API integrations.`},{value:`client_editor`,label:`Client editor`,description:`Users can create and edit AI agents, but can’t publish or delete agents, configure settings, or manage API integrations.`},{value:`client_user`,label:`Client user`,description:`Users can manage AI agents with restrictions on sensitive capabilities, such as agents cannot access API integration.`}],jy=[`Opt in for AI agents`,`Opting in to AI agents moves settings to this page`,`AI agent settings will only be available here in the roles and permissions pages.`,...Ay.flatMap(e=>[e.label,e.description])].join(` `);function My({roleId:e,query:t,directAccess:n=!1}){let r=(0,g.useRef)(null),{getAiAgentsState:i,updateAiAgentsState:a}=_d(),{optedIn:o,saved:s,accessLevel:c}=i(e),l=Ay,u=n||o||s;return(0,g.useEffect)(()=>{n&&(c?o||a(e,{optedIn:!0,saved:!0}):a(e,{optedIn:!0,saved:!0,accessLevel:`no_access`}))},[n,c,o,e,a]),(0,G.jsxs)(by,{children:[!n&&!s&&(0,G.jsxs)(Sy,{children:[(0,G.jsx)(Cy,{checked:o,onChange:t=>{a(e,{optedIn:t.target.checked,saved:!1,...t.target.checked&&!c?{accessLevel:`no_access`}:{}}),t.target.checked&&setTimeout(()=>{r.current?.scrollIntoView({behavior:`smooth`,block:`center`})},50)}}),_y(`Opt in for AI agents`,t)]}),!n&&!s&&(0,G.jsxs)(xy,{type:`info`,role:`note`,children:[(0,G.jsx)(cg.Title,{children:_y(`Opting in to AI agents moves settings to this page`,t)}),(0,G.jsx)(cg.Paragraph,{children:_y(`AI agent settings will only be available here in the roles and permissions pages.`,t)})]}),u&&(0,G.jsx)(wy,{ref:r,style:n?{marginTop:0}:void 0,children:l.map(n=>(0,G.jsxs)(Ty,{children:[(0,G.jsx)(Ey,{name:`ai-agents-access-${e}`,value:n.value,checked:c===n.value,onChange:()=>a(e,{optedIn:!0,saved:!1,accessLevel:n.value})}),(0,G.jsxs)(Dy,{children:[(0,G.jsx)(Oy,{children:_y(n.label,t)}),(0,G.jsx)(ky,{children:_y(n.description,t)})]})]},n.value))})]})}var Ny=I.div`
  padding-bottom: 8px;
`,Py=I(cg)`
  max-width: 630px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #f8f9f9;
  border-color: #d8dcde;
  padding: 16px;
  padding-left: 40px;

  [data-garden-id="notifications.icon"] {
    left: 16px;
    margin-top: 0;
  }

  [data-garden-id="notifications.title"] {
    margin: 0;
  }

  [data-garden-id="notifications.paragraph"] {
    margin: 0;
  }
`,Fy=I.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
  font-weight: 500;
`,Iy=I.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`,Ly=I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`,Ry=I.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
`,zy=I.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,By=I.div`
  display: flex;
  flex-direction: column;
`,Vy=I.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3941;
`,Hy=I.span`
  font-size: 13px;
  color: #68737d;
  margin-top: 2px;
`,Uy=I.div`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e9ebed;
`,Wy=I.div`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`,Gy=I.span`
  font-size: 12px;
  color: #68737d;
  display: block;
  margin: 4px 0 0 24px;
`,Ky=e=>[{value:`no_access`,label:`No access`,description:`Users with this custom role can’t view or access ${e}. Selecting this option doesn’t hide ${e} from the product icons menu, but users can’t access the ${e} dashboard.`},{value:`client_admin`,label:`Client admin`,description:`Users can manage all ${e} capabilities, including creating, editing, publishing, and deleting, configuring settings, and managing API integrations.`},{value:`client_editor`,label:`Client editor`,description:`Users can create and edit ${e}, but can’t publish or delete, configure settings, or manage API integrations.`},{value:`client_user`,label:`Client user`,description:`Users can manage ${e} with restrictions on sensitive capabilities, such as no access to API integrations.`}],qy=(e,{directAccess:t=!1,includeManage:n=!1}={})=>[...t?[]:[`Opt in for ${e}`,`Opting in to ${e} moves settings to this page`,`${e} settings will only be available here in the roles and permissions pages.`],...Ky(e).flatMap(e=>[e.label,e.description]),...n?[`Manage Guide`,`manage articles`,`themes`,`settings`,`knowledge`]:[]].join(` `);function Jy({roleId:e,product:t,query:n,directAccess:r=!1,includeManageKnowledge:i=!1}){let a=(0,g.useRef)(null),{getProductAccess:o,updateProductAccess:s}=_d(),{optedIn:c,saved:l,accessLevel:u}=o(e,t.id),d=Ky(t.name),f=r||c||l;return(0,g.useEffect)(()=>{r&&(u?c||s(e,t.id,{optedIn:!0,saved:!0}):s(e,t.id,{optedIn:!0,saved:!0,accessLevel:`no_access`}))},[r,u,c,e,t.id,s]),(0,G.jsxs)(Ny,{children:[!r&&!l&&(0,G.jsxs)(Fy,{children:[(0,G.jsx)(Iy,{checked:c,onChange:n=>{s(e,t.id,{optedIn:n.target.checked,saved:!1,...n.target.checked&&!u?{accessLevel:`no_access`}:{}}),n.target.checked&&setTimeout(()=>{a.current?.scrollIntoView({behavior:`smooth`,block:`center`})},50)}}),_y(`Opt in for ${t.name}`,n)]}),!r&&!l&&(0,G.jsxs)(Py,{type:`info`,role:`note`,children:[(0,G.jsx)(cg.Title,{children:_y(`Opting in to ${t.name} moves settings to this page`,n)}),(0,G.jsx)(cg.Paragraph,{children:_y(`${t.name} settings will only be available here in the roles and permissions pages.`,n)})]}),f&&(0,G.jsx)(Ly,{ref:a,style:r?{marginTop:0}:void 0,children:d.map(r=>(0,G.jsxs)(Ry,{children:[(0,G.jsx)(zy,{name:`${t.id}-access-${e}`,value:r.value,checked:u===r.value,onChange:()=>s(e,t.id,{optedIn:!0,saved:!1,accessLevel:r.value})}),(0,G.jsxs)(By,{children:[(0,G.jsx)(Vy,{children:_y(r.label,n)}),(0,G.jsx)(Hy,{children:_y(r.description,n)})]})]},r.value))}),i&&(0,G.jsxs)(Uy,{children:[(0,G.jsx)(Wy,{children:_y(`Manage Knowledge`,n)}),(0,G.jsxs)(Fy,{style:{marginBottom:0},children:[(0,G.jsx)(Iy,{defaultChecked:!0}),_y(`Manage Guide`,n)]}),(0,G.jsx)(Gy,{children:_y(`Can by default have an admin and can manage articles, themes, and settings.`,n)})]})]})}var Yy=({label:e=`Error`})=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,role:`img`,"aria-label":e,focusable:`false`,children:[(0,G.jsx)(`path`,{d:`M10 12.166C10.5522 12.166 10.9998 12.6139 11 13.166C11 13.7183 10.5523 14.166 10 14.166C9.44772 14.166 9 13.7183 9 13.166C9.0002 12.6139 9.44784 12.166 10 12.166Z`,fill:`currentColor`}),(0,G.jsx)(`path`,{d:`M10 5.83301C10.4602 5.83303 10.833 6.20677 10.833 6.66699V10.417C10.8329 10.8771 10.4601 11.25 10 11.25C9.53986 11.25 9.16715 10.8771 9.16699 10.417V6.66699C9.16699 6.20675 9.53976 5.83301 10 5.83301Z`,fill:`currentColor`}),(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 1.66699C14.6024 1.66701 18.333 5.39764 18.333 10C18.333 14.6023 14.6023 18.333 10 18.333C5.39764 18.333 1.66701 14.6024 1.66699 10C1.66699 5.39763 5.39763 1.66699 10 1.66699ZM10 3.33301C6.3181 3.33301 3.33301 6.3181 3.33301 10C3.33303 13.6819 6.31812 16.667 10 16.667C13.6819 16.667 16.667 13.6819 16.667 10C16.667 6.31812 13.6819 3.33303 10 3.33301Z`,fill:`currentColor`})]}),Xy=I.div.attrs({role:`alert`})`
  display: inline-flex;
  align-items: flex-start;
  /* 8px ink-to-text: Central 20px icon has ~1.67px empty on each side. */
  gap: 6.33px;
  margin-top: 8px;
  max-width: 100%;
  color: #c63f46;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,Zy=I.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
`,Qy=I.span`
  padding-block: 2px;
  min-width: 0;
`;function $y({children:e,validationLabel:t=`Error`}){return(0,G.jsxs)(Xy,{children:[(0,G.jsx)(Zy,{children:(0,G.jsx)(Yy,{label:t})}),(0,G.jsx)(Qy,{children:e})]})}var eb=[`Dinoco`,`Rusteze`,`Pistons Cup`],tb=[`Support`,`Billing`,`Engineering`,`Success`],nb=I.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,rb=I.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: #68737d;
  line-height: 1.45;
`,ib=I.a`
  color: #1f73b7;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,ab=I.h3`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,ob=I.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: #68737d;
  line-height: 1.45;
`,sb=I.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,cb=I.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
`,lb=I.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,ub=I.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,db=I.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`,fb=I.span`
  font-size: 13px;
  color: #68737d;
  line-height: 1.4;
`,pb=I.div`
  margin: 12px 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,mb=I.div`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,hb=I.div`
  font-size: 13px;
  color: #68737d;
  margin-top: -8px;
`,gb=()=>(0,G.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,G.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`#68737d`,strokeWidth:`1.25`}),(0,G.jsx)(`path`,{d:`M8 7v4M8 5.25v.5`,stroke:`#68737d`,strokeWidth:`1.25`,strokeLinecap:`round`})]}),_b=({$open:e})=>(0,G.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,"aria-hidden":`true`,style:{transform:e?`rotate(180deg)`:`none`},children:(0,G.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),vb=I(Iv)`
  max-width: 400px;
`,yb=I(Zv)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 40px;
  cursor: pointer;
`,bb=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,xb=I.ul`
  position: absolute;
  z-index: 5;
  top: calc(100% - 4px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 4px 0;
  list-style: none;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(47, 57, 65, 0.12);
  max-height: 200px;
  overflow-y: auto;
`,Sb=I.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
  background: ${e=>e.$selected?`#edf0f2`:`transparent`};

  &:hover {
    background: #edf0f2;
  }
`,Cb=I.span`
  flex: 1;
  min-width: 0;
`,wb=()=>(0,G.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,G.jsx)(`path`,{d:`M2 6.2L4.8 9L10 3`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})});function Tb({label:e,options:t,value:n,onChange:r,errorMessage:i,showError:a}){let[o,s]=(0,g.useState)(!1),c=(0,g.useRef)(null);(0,g.useEffect)(()=>{if(!o)return;let e=e=>{c.current?.contains(e.target)||s(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[o]);let l=e=>{r(n.includes(e)?n.filter(t=>t!==e):[...n,e])},u=e=>{r(n.filter(t=>t!==e))};return(0,G.jsx)(`div`,{ref:c,style:{position:`relative`},children:(0,G.jsxs)(vb,{style:{marginTop:12},children:[(0,G.jsx)(Iv.Label,{children:e}),(0,G.jsxs)(yb,{validation:a?`error`:void 0,onClick:()=>s(e=>!e),role:`combobox`,"aria-expanded":o,"aria-haspopup":`listbox`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s(e=>!e))},children:[(0,G.jsx)(bb,{children:n.map(e=>(0,G.jsxs)(hy,{isPill:!1,children:[(0,G.jsx)(`span`,{children:e}),(0,G.jsx)(hy.Close,{"aria-label":`Remove ${e}`,onClick:t=>{t.stopPropagation(),u(e)}})]},e))}),(0,G.jsx)(_b,{$open:o})]}),a&&(0,G.jsx)($y,{children:i}),o&&(0,G.jsx)(xb,{role:`listbox`,"aria-label":e,"aria-multiselectable":`true`,children:t.map(e=>{let t=n.includes(e);return(0,G.jsxs)(Sb,{role:`option`,"aria-selected":t,$selected:t,onClick:t=>{t.stopPropagation(),l(e)},children:[(0,G.jsx)(Cb,{children:e}),t&&(0,G.jsx)(wb,{})]},e)})})]})})}var Eb=[`Reporting and analytics`,`Analytics`,`View dashboards`,`Data access`,`Brands`,`Groups`,`Select at least 1 brand`,`Select at least 1 group`,`Manage reports and dashboards`].join(` `);function Db({onSaveErrorsChange:e}){let[t,n]=(0,g.useState)(`view`),[r,i]=(0,g.useState)(`selected`),[a,o]=(0,g.useState)([]),[s,c]=(0,g.useState)([]),l=t===`view`&&r===`selected`,u=l&&a.length===0,d=l&&s.length===0;return(0,g.useEffect)(()=>{let t=[];u&&t.push(`Brands`),d&&t.push(`Groups`),e?.(t)},[u,d,e]),(0,G.jsxs)(nb,{children:[(0,G.jsxs)(rb,{children:[`Choose the analytics permissions for this role.`,` `,(0,G.jsx)(ib,{href:`#`,children:`Learn about analytics permissions`})]}),(0,G.jsx)(ab,{children:`Analytics`}),(0,G.jsxs)(ob,{children:[`Defines what they can do in Analytics. For datasets and permissions go to`,` `,(0,G.jsx)(ib,{href:`#`,children:`Analytics settings`})]}),(0,G.jsxs)(sb,{children:[(0,G.jsxs)(cb,{children:[(0,G.jsx)(lb,{name:`counselor-analytics`,checked:t===`none`,onChange:()=>n(`none`)}),(0,G.jsx)(ub,{children:(0,G.jsx)(db,{children:`No access`})})]}),(0,G.jsxs)(cb,{as:`div`,children:[(0,G.jsx)(lb,{name:`counselor-analytics`,checked:t===`view`,onChange:()=>n(`view`)}),(0,G.jsxs)(ub,{children:[(0,G.jsx)(db,{children:`View dashboards`}),(0,G.jsx)(fb,{children:`Can view dashboards shared with them.`}),t===`view`&&(0,G.jsxs)(pb,{children:[(0,G.jsx)(mb,{children:`Data access`}),(0,G.jsx)(hb,{children:`Define what data this role can access.`}),(0,G.jsxs)(cb,{children:[(0,G.jsx)(lb,{name:`counselor-data-access`,checked:r===`belong`,onChange:()=>i(`belong`)}),(0,G.jsx)(ub,{children:(0,G.jsxs)(db,{children:[`Data from brands and groups they belong to`,(0,G.jsx)(gb,{})]})})]}),(0,G.jsxs)(cb,{as:`div`,children:[(0,G.jsx)(lb,{name:`counselor-data-access`,checked:r===`selected`,onChange:()=>i(`selected`)}),(0,G.jsxs)(ub,{children:[(0,G.jsxs)(db,{children:[`Data from selected brands and groups`,(0,G.jsx)(gb,{})]}),r===`selected`&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Tb,{label:`Brands`,options:eb,value:a,onChange:o,showError:u,errorMessage:`Select at least 1 brand`}),(0,G.jsx)(Tb,{label:`Groups`,options:tb,value:s,onChange:c,showError:d,errorMessage:`Select at least 1 group`})]})]})]}),(0,G.jsxs)(cb,{children:[(0,G.jsx)(lb,{name:`counselor-data-access`,checked:r===`all`,onChange:()=>i(`all`)}),(0,G.jsx)(ub,{children:(0,G.jsx)(db,{children:`All data`})})]})]})]})]}),(0,G.jsxs)(cb,{children:[(0,G.jsx)(lb,{name:`counselor-analytics`,checked:t===`manage`,onChange:()=>n(`manage`)}),(0,G.jsxs)(ub,{children:[(0,G.jsx)(db,{children:`Manage reports and dashboards`}),(0,G.jsx)(fb,{children:`Can create, edit, and delete reports and dashboards.`})]})]}),(0,G.jsxs)(cb,{children:[(0,G.jsx)(lb,{name:`counselor-analytics`,checked:t===`admin`,onChange:()=>n(`admin`)}),(0,G.jsxs)(ub,{children:[(0,G.jsx)(db,{children:`Manage reports, dashboards and dataset permissions`}),(0,G.jsx)(fb,{children:`Can manage administrative settings and permissions for Explore.`})]})]})]})]})}var Ob=I.section`
  box-sizing: border-box;
  max-width: ${e=>e.$maxWidth||630}px;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
`,kb=I.button.attrs({type:`button`})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 14px 16px;
  border: none;
  background: none;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
`,Ab=I.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,jb=I.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Mb=I.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
`,Nb=I.span`
  display: inline-flex;
  align-items: flex-start;
  /* Match FloraValidationMessage: 8px ink-to-text on 20px Central icon. */
  gap: 6.33px;
  margin-top: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #c63f46;
`,Pb=I.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
`,Fb=I.span`
  padding-block: 2px;
`,Ib=I.svg`
  flex-shrink: 0;
  color: #646864;
  transform: ${e=>e.$open?`rotate(180deg)`:`none`};
`,Lb=I.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 16px 16px;
  border-top: 1px solid #e9ebed;
`;function Rb({title:e,description:t,open:n,onToggle:r,query:i,searchText:a,maxWidth:o,errorCount:s,children:c}){let l=(i||``).trim(),u=!!l&&`${e} ${t||``} ${a??yy(c)}`.toLowerCase().includes(l.toLowerCase()),d=n||u,f=Number(s)||0;return(0,G.jsxs)(Ob,{$maxWidth:o,children:[(0,G.jsxs)(kb,{onClick:r,"aria-expanded":d,children:[(0,G.jsxs)(Ab,{children:[(0,G.jsx)(jb,{children:_y(e,l)}),t&&(0,G.jsx)(Mb,{children:_y(t,l)}),f>0&&(0,G.jsxs)(Nb,{children:[(0,G.jsx)(Pb,{children:(0,G.jsx)(Yy,{})}),(0,G.jsxs)(Fb,{children:[`Contains `,f,` `,f===1?`error`:`errors`]})]})]}),(0,G.jsx)(Ib,{$open:d,width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,"aria-hidden":`true`,children:(0,G.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),d&&(0,G.jsx)(Lb,{children:vy(c,l)})]})}var zb=I.div`
  position: fixed;
  inset: 0;
  background: rgba(47, 57, 65, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`,Bb=I.div`
  background: #fff;
  border-radius: 12px;
  width: 560px;
  max-width: calc(100vw - 48px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`,Vb=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e9ebed;
`,Hb=I.h2`
  font-size: 18px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`,Ub=I.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: #68737d;
  padding: 4px;

  &:hover {
    color: #2f3941;
  }
`,Wb=I.div`
  padding: 24px;
`,Gb=I.p`
  font-size: 14px;
  color: #2f3941;
  line-height: 1.5;
  margin: 0 0 24px;
`,Kb=I.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`,qb=I.div`
  position: relative;
`,Jb=I.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  min-height: 40px;
  padding: 0 40px 0 10px;
  border: 1px solid ${e=>e.$open?`#1f73b7`:`#d8dcde`};
  border-radius: 6px;
  cursor: text;
  box-shadow: ${e=>e.$open?`0 0 0 3px rgba(31, 115, 183, 0.15)`:`none`};
`,Yb=I.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) ${e=>e.$open?`rotate(180deg)`:`none`};
  pointer-events: none;
  display: inline-flex;
  color: #68737d;
`,Xb=I.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #e9ebed;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Zb=I.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 14px;
  line-height: 1;
  padding: 0;

  &:hover {
    color: #2f3941;
  }
`,Qb=I.input`
  flex: 1;
  min-width: 60px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0;
  height: 38px;
`,$b=I.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 6px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  max-height: 280px;
  overflow-y: auto;
  z-index: 10;
`,ex=I.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: ${e=>e.$disabled?`default`:`pointer`};
  background: ${e=>e.$highlighted?`#f8f9f9`:`transparent`};
  border-left: 3px solid ${e=>e.$highlighted?`#1f73b7`:`transparent`};

  &:hover {
    background: ${e=>e.$disabled?`transparent`:`#f8f9f9`};
  }
`,tx=I.span`
  width: 16px;
  color: #1f73b7;
  font-size: 14px;
`,nx=I.div`
  display: flex;
  flex-direction: column;
`,rx=I.span`
  font-size: 15px;
  color: ${e=>e.$disabled?`#c2c8cc`:`#2f3941`};
`,ix=I.span`
  font-size: 13px;
  color: ${e=>e.$disabled?`#c2c8cc`:`#68737d`};
`,ax=I.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
`;function ox({onClose:e,onAssign:t}){let[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)([]),[o,s]=(0,g.useState)(``),c=(0,g.useRef)(null);(0,g.useEffect)(()=>{let e=e=>{c.current&&!c.current.contains(e.target)&&r(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let l=e=>{e.disabled||(a(t=>t.some(t=>t.id===e.id)?t.filter(t=>t.id!==e.id):[...t,e]),s(``))},u=e=>{a(t=>t.filter(t=>t.id!==e))},d=[...cd,{id:`rusty-admin`,name:`Rusty Admin`,role:`Admin (can't change your own role)`,disabled:!0}],f=o.trim().toLowerCase(),p=f?d.filter(e=>e.name.toLowerCase().includes(f)||(e.email||``).toLowerCase().includes(f)||e.role.toLowerCase().includes(f)):d;return(0,G.jsx)(zb,{onMouseDown:t=>{t.target===t.currentTarget&&e()},children:(0,G.jsxs)(Bb,{children:[(0,G.jsxs)(Vb,{children:[(0,G.jsx)(Hb,{children:`Assign role`}),(0,G.jsx)(Ub,{"aria-label":`Close`,onClick:e,children:`✕`})]}),(0,G.jsxs)(Wb,{children:[(0,G.jsx)(Gb,{children:`Team members can only have one role at a time. When their role changes, their permissions change too.`}),(0,G.jsx)(Kb,{children:`Select team members`}),(0,G.jsxs)(qb,{ref:c,children:[(0,G.jsxs)(Jb,{$open:n,onClick:()=>r(!0),children:[i.map(e=>(0,G.jsxs)(Xb,{children:[e.name,(0,G.jsx)(Zb,{onClick:t=>{t.stopPropagation(),u(e.id)},children:`✕`})]},e.id)),(0,G.jsx)(Qb,{value:o,placeholder:i.length===0?`Search team members`:``,onChange:e=>{s(e.target.value),r(!0)},onFocus:()=>r(!0)}),(0,G.jsx)(Yb,{$open:n,children:(0,G.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,G.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),n&&(0,G.jsxs)($b,{children:[p.length===0&&(0,G.jsx)(ex,{$disabled:!0,children:(0,G.jsx)(nx,{children:(0,G.jsxs)(ix,{$disabled:!0,children:[`No results for "`,o.trim(),`"`]})})}),p.map(e=>{let t=i.some(t=>t.id===e.id);return(0,G.jsxs)(ex,{$disabled:e.disabled,$highlighted:t,onClick:()=>l(e),children:[(0,G.jsx)(tx,{children:t?`✓`:``}),(0,G.jsxs)(nx,{children:[(0,G.jsx)(rx,{$disabled:e.disabled,children:e.name}),(0,G.jsx)(ix,{$disabled:e.disabled,children:e.role})]})]},e.id)})]})]})]}),(0,G.jsxs)(ax,{children:[(0,G.jsx)(Th,{isBasic:!0,onClick:e,children:`Cancel`}),(0,G.jsx)(Th,{isPrimary:!0,onClick:()=>t(i.map(e=>e.id)),children:`Assign role`})]})]})})}var sx=[{id:`user-management`,label:`User management`},{id:`gdpr`,label:`GDPR & privacy`},{id:`tickets`,label:`Tickets`},{id:`workflow`,label:`Agent workflow`},{id:`automation`,label:`Automations & rules`},{id:`reporting`,label:`Reporting`},{id:`knowledge`,label:`Knowledge`},{id:`ai-agents`,label:`AI agents`}],cx=[{id:`settings`,label:`Settings`},{id:`products`,label:`Products`}],lx={tickets:{group:`settings`,available:!0,tags:[`tickets`,`workflow`]},"custom-objects":{group:`settings`,available:!0,tags:[`tickets`]},people:{group:`settings`,available:!0,tags:[`user-management`]},channels:{group:`settings`,available:!0,tags:[`tickets`,`channels`]},"agent-workflow":{group:`settings`,available:!0,tags:[`workflow`]},"business-rules":{group:`settings`,available:!0,tags:[`automation`,`workflow`]},security:{group:`settings`,available:!0,tags:[`gdpr`,`user-management`,`security`]},knowledge:{group:`products`,available:!0,tags:[`knowledge`]},reporting:{group:`settings`,available:!0,tags:[`reporting`]},support:{group:`products`,available:!0,tags:[`tickets`,`user-management`]},analytics:{group:`products`,available:!0,tags:[`reporting`]},voice:{group:`products`,available:!0,tags:[`tickets`,`channels`]},chat:{group:`products`,available:!0,tags:[`tickets`,`channels`]},"ai-agents":{group:`products`,available:!0,tags:[`ai-agents`]},qa:{group:`products`,available:!1,tags:[`reporting`,`workflow`]}},ux={availableOnly:!1,groups:[],topics:[]},dx=e=>{let t=lx[e];if(!t)return``;let n=sx.filter(e=>t.tags.includes(e.id)).map(e=>e.label);return[...t.tags,...n,t.group].join(` `)};function fx(e,t){let n=lx[e];return!n||!(t.availableOnly&&!n.available||t.groups.length&&!t.groups.includes(n.group)||t.topics.length&&!t.topics.some(e=>n.tags.includes(e)))}function px(e,t){return!t.topics.length||e.some(e=>t.topics.includes(e))}function mx(e){let t=0;return e.availableOnly&&(t+=1),t+=e.groups.length,t+=e.topics.length,t}var hx=I.div`
  position: fixed;
  top: ${48}px;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(47, 57, 65, 0.45);
  z-index: 1100;
`,gx=I.div`
  position: fixed;
  top: ${48}px;
  right: 0;
  bottom: 0;
  width: min(380px, 100vw);
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0;
  box-shadow: -4px 0 16px rgba(47, 57, 65, 0.12);
  z-index: 1101;
  overflow: hidden;
`,_x=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 20px 16px;
  flex-shrink: 0;
`,vx=I.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #2f3941;
`,yx=I.button.attrs({type:`button`})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 0;
  background: transparent;
  color: #68737d;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #2f3941;
  }
`,bx=I.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 24px;
`,xx=I.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid #e9ebed;
  background: #fff;
  flex-shrink: 0;
`,Sx=I.div`
  margin-bottom: 28px;
`,Cx=I.h3`
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,wx=I.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Tx=I.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`,Ex=I.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-top: 2px;
  accent-color: #1f73b7;
  cursor: pointer;
`;function Dx(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}var Ox=()=>(0,G.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,G.jsx)(`path`,{d:`M1 1l10 10M11 1L1 11`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})});function kx({isOpen:e,onClose:t,value:n,onApply:r}){let[i,a]=(0,g.useState)(n);if((0,g.useEffect)(()=>{e&&a(n)},[e,n]),(0,g.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t()};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[e,t]),!e)return null;let o=()=>{r(i),t()},s=document.querySelector(`[data-comment-root="true"]`)||document.body;return(0,v.createPortal)((0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(hx,{onClick:t,"aria-hidden":`true`}),(0,G.jsxs)(gx,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`permissions-filter-title`,children:[(0,G.jsxs)(_x,{children:[(0,G.jsx)(vx,{id:`permissions-filter-title`,children:`Filter`}),(0,G.jsx)(yx,{"aria-label":`Close`,onClick:t,children:(0,G.jsx)(Ox,{})})]}),(0,G.jsxs)(bx,{children:[(0,G.jsxs)(Sx,{children:[(0,G.jsx)(Cx,{children:`Availability`}),(0,G.jsxs)(Tx,{children:[(0,G.jsx)(Ex,{checked:i.availableOnly,onChange:()=>a(e=>({...e,availableOnly:!e.availableOnly}))}),`Only available settings`]})]}),(0,G.jsxs)(Sx,{children:[(0,G.jsx)(Cx,{children:`Group`}),(0,G.jsx)(wx,{children:cx.map(e=>(0,G.jsxs)(Tx,{children:[(0,G.jsx)(Ex,{checked:i.groups.includes(e.id),onChange:()=>a(t=>({...t,groups:Dx(t.groups,e.id)}))}),e.label]},e.id))})]}),(0,G.jsxs)(Sx,{children:[(0,G.jsx)(Cx,{children:`Topic`}),(0,G.jsx)(wx,{children:sx.map(e=>(0,G.jsxs)(Tx,{children:[(0,G.jsx)(Ex,{checked:i.topics.includes(e.id),onChange:()=>a(t=>({...t,topics:Dx(t.topics,e.id)}))}),e.label]},e.id))})]})]}),(0,G.jsxs)(xx,{children:[(0,G.jsx)(Th,{isBasic:!0,onClick:t,children:`Cancel`}),(0,G.jsx)(Th,{isPrimary:!0,onClick:o,children:`Apply Filters`})]})]})]}),s)}var Ax=(0,g.createContext)({version:`v2`,filters:{availableOnly:!1,groups:[],topics:[]}});function jx({version:e,filters:t,children:n}){return(0,G.jsx)(Ax.Provider,{value:{version:e,filters:t},children:n})}function Mx(){return(0,g.useContext)(Ax)}var Nx=I.div``;function Y({tags:e=[],children:t}){let{version:n,filters:r}=Mx();return n===`v3.5`&&!px(e,r)?null:(0,G.jsx)(Nx,{children:t})}function Px({members:e,version:t,roleKey:n,getProductAccess:r,getAiAgentsState:i,radioProducts:a=id}){let o=[],s=new Map,c=new Set,l=i(n),u=l.optedIn&&!l.saved&&!!l.accessLevel,d=td[l.accessLevel];for(let i of e){if(t!==`v1`)for(let e of a){let t=r(n,e.id);if(t.optedIn&&!t.saved&&t.accessLevel){let n=dd[i.id]?.[e.id],r=td[t.accessLevel];n&&n!==r&&(o.push({memberId:i.id,memberName:i.name,productId:e.id,product:e.name,current:n,next:r}),s.set(e.id,e.name),c.add(i.id))}}u&&(l.accessLevel===`no_access`&&i.aiAgentsAccess===`No Access`||(o.push({memberId:i.id,memberName:i.name,productId:`ai-agents`,product:`AI agents`,current:i.aiAgentsAccess,next:d}),s.set(`ai-agents`,`AI agents`),c.add(i.id)))}let f=[...a.map(e=>e.id),`ai-agents`].filter(e=>s.has(e)).map(e=>({id:e,name:s.get(e)}));return{affectedMemberCount:c.size,products:f,rows:o}}var Fx=I.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`,Ix=I.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`,Lx=I.div`
  padding: 24px 32px;
  flex: 1;
`,Rx=I.aside`
  width: 380px;
  min-width: 380px;
  padding: 24px;
  box-sizing: border-box;
  border-left: 1px solid #e9ebed;
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 100%;
  overflow-y: auto;
`,zx=I.h3`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 24px;
`,Bx=I.div`
  text-align: center;
  padding: 40px 20px;
`,Vx=I.div`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`,Hx=I.div`
  font-size: 14px;
  color: #68737d;
  line-height: 1.5;
  margin-bottom: 16px;
`,Ux=I.p`
  font-size: 14px;
  color: #68737d;
  line-height: 1.5;
  margin: 0 0 24px;
`,Wx=I.div`
  border-top: 1px solid #e9ebed;
`,Gx=I.div`
  padding: 12px 0;
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
`,Kx=I.div`
  padding: 14px 0;
  border-bottom: 1px solid #e9ebed;
`,qx=I.span`
  font-size: 14px;
  color: #1f73b7;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Jx=I(cg).attrs({"data-inspect-name":`Alert`,"data-inspect-token-bg":`bg/warning`,"data-inspect-token-color":`fg/warningEmphasis`})`
  position: relative;
  margin-top: 8px;
  padding: 16px 16px 16px 40px;
  border: none;
  border-radius: 16px;
  font-size: 14px;
  line-height: 20px;
  background-color: #f6eba6;
  color: #3b3405;

  /* Garden ships stroke; Flora Alert uses filled Central Exclamation triangle. */
  [data-garden-id="notifications.icon"] {
    display: none;
  }

  [data-garden-id="notifications.title"] {
    margin: 0;
    color: #3b3405;
  }

  [data-garden-id="notifications.paragraph"] {
    margin: 0;
    color: #3b3405;
  }
`,Yx=I(Jx)`
  margin: 0 0 16px;
`,Xx=I.ul`
  margin: 2px 0 0;
  padding-left: 1.25em;
  font-size: 14px;
  line-height: 20px;
  color: #3b3405;

  li {
    margin: 0;
  }
`,Zx=I(Eh)`
  display: inline-block;
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  /* Override alert ink so this stays Flora primary blue (blue.600 / .700). */
  color: #698cd3 !important;

  &:hover {
    color: #406cc4 !important;
  }
`,Qx=I.div`
  font-size: 14px;
  color: #87929d;
`,$x=I.div`
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 20px;
  color: #3b3405;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eS=()=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,focusable:`false`,style:{position:`absolute`,left:12,top:16,color:`#7f7004`},children:(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,fill:`currentColor`,d:`M7.84403 3.73819C8.8072 2.08705 11.1923 2.08717 12.1556 3.73819L17.9905 13.745C18.9606 15.4089 17.7619 17.4995 15.8352 17.4999H4.16532C2.2385 17.4997 1.039 15.409 2.00907 13.745L7.84403 3.73819ZM10.0003 7.51651C10.4604 7.51666 10.8333 7.88938 10.8333 8.34952V10.8446C10.8331 11.3046 10.4603 11.6775 10.0003 11.6776C9.54014 11.6776 9.16645 11.3047 9.1663 10.8446V8.34952C9.1663 7.88928 9.54005 7.51651 10.0003 7.51651ZM10.0003 12.2919C10.5754 12.2921 11.0412 12.7578 11.0413 13.3329C11.0413 13.9081 10.5755 14.3748 10.0003 14.3749C9.42496 14.3749 8.95829 13.9082 8.95829 13.3329C8.95843 12.7577 9.42505 12.2919 10.0003 12.2919Z`})}),tS=I.div``,nS=I.div`
  height: 28px;
  flex-shrink: 0;
`,rS=I.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px;
  border-top: 1px solid #e9ebed;
  background: #fff;
`,iS=I.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
    min-width: 410px;
  }
`,aS=I.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`,oS=I.div`
  position: relative;
  flex-shrink: 0;
  /* Container already pads 24px top / 32px right — add the remainder for 40px total */
  margin-top: 16px;
  margin-right: 8px;
`,sS=I(Th)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1f73b7;
  border-color: #1f73b7;

  &:hover {
    color: #144a75;
    border-color: #144a75;
  }
`,cS=I.span`
  display: inline-flex;
  transform: ${e=>e.$open?`rotate(180deg)`:`none`};
`,lS=I.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 200px;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  padding: 8px 0;
  z-index: 20;
`,uS=I.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 15px;
  color: ${e=>e.$danger?`#cc3340`:`#2f3941`};
  cursor: pointer;

  &:hover {
    background: #f8f9f9;
  }
`,dS=I.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 4px;
`,fS=I.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 32px;
`,pS=I.div`
  margin-bottom: 28px;
`,mS=I.div`
  display: flex;
  justify-content: ${e=>e.$endOnly?`flex-end`:`space-between`};
  align-items: flex-end;
  gap: 16px;
  box-sizing: border-box;
  max-width: ${e=>e.$maxWidth||630}px;
  margin-bottom: 12px;
`,hS=I.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: ${e=>e.$maxWidth||630}px;
  width: 100%;
  margin-bottom: 32px;
`,gS=I.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  width: 100%;
`,_S=I.div`
  flex: 1;
  min-width: 0;
  max-width: ${e=>e.$maxWidth||400}px;
  color: #68737d;
`,vS=I(Th)`
  flex-shrink: 0;
`,yS=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,"aria-hidden":`true`,focusable:`false`,...e,width:`20`,height:`20`,viewBox:`0 0 20 20`,children:[(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.83301 2.5C6.29314 2.5 6.66682 2.87292 6.66699 3.33301V4.27148C8.10484 4.64145 9.16699 5.94638 9.16699 7.5C9.16699 9.05362 8.10484 10.3586 6.66699 10.7285V16.667C6.66682 17.1271 6.29314 17.5 5.83301 17.5C5.37303 17.4998 5.00018 17.127 5 16.667V10.7285C3.56202 10.3586 2.5 9.05371 2.5 7.5C2.5 5.94629 3.56202 4.64135 5 4.27148V3.33301C5.00018 2.87303 5.37303 2.50018 5.83301 2.5ZM5.83301 5.83301C4.91214 5.83318 4.16699 6.5791 4.16699 7.5C4.16699 8.4209 4.91214 9.16682 5.83301 9.16699C6.75402 9.16699 7.5 8.42101 7.5 7.5C7.5 6.57899 6.75402 5.83301 5.83301 5.83301Z`,fill:`currentColor`}),(0,G.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M14.167 2.5C14.627 2.50018 14.9998 2.87303 15 3.33301V10.9385C16.438 11.3084 17.5 12.6133 17.5 14.167C17.4998 16.0082 16.0082 17.4998 14.167 17.5C12.3256 17.5 10.8332 16.0083 10.833 14.167C10.833 12.6134 11.8952 11.3085 13.333 10.9385V3.33301C13.3332 2.87292 13.7069 2.5 14.167 2.5ZM14.167 12.5C13.246 12.5 12.5 13.246 12.5 14.167C12.5002 15.0879 13.2461 15.833 14.167 15.833C15.0877 15.8328 15.8328 15.0877 15.833 14.167C15.833 13.2461 15.0879 12.5002 14.167 12.5Z`,fill:`currentColor`})]}),bS=I.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* Flora Filters: 8px between tags; 12px above via PermissionsFilterBlock gap. */
  gap: 8px;
  width: 100%;
`,xS=I(Th).attrs({isBasic:!0,size:`small`})`
  flex-shrink: 0;
  /* Sit on the medium Tag row without the full small-button chrome. */
  height: 20px;
  min-height: 20px;
  padding: 0 4px;
  line-height: 20px;
`,SS=I.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: #2f3130;
  margin: ${e=>e.$flush?`0`:`28px 0 8px`};
  max-width: ${e=>e.$maxWidth||400}px;

  &:first-of-type {
    margin-top: ${e=>e.$flush?`0`:void 0};
  }
`,CS=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
  max-width: ${e=>e.$maxWidth||630}px;
  margin: 0 0 8px;
`,wS=I.button.attrs({type:`button`})`
  border: none;
  background: none;
  padding: 0;
  font-family: inherit;
  font-size: 14px;
  color: #1f73b7;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,X=I.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  /* Within-section title → controls; between-section spacing is Body gap 24px. */
  margin: 0 0 8px;
`,TS=I.div`
  max-width: ${e=>e.$maxWidth||400}px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,ES=I.div.attrs({role:`alert`})`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 630px;
  margin: 0 0 24px;
  padding: 16px;
  border-radius: 16px;
  border: none;
  background: #f7e5e6;
  color: #5f1c20;
`,DS=I.span`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  /* Flora Alert type icon: filled danger/700, white bang. */
  color: #c63f46;
`,OS=I.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,kS=I.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;
  color: #5f1c20;
`,AS=I.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #5f1c20;

  ul {
    margin: 8px 0 0;
    padding-left: 1.25em;
  }

  li {
    margin: 2px 0;
  }
`,jS=()=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 16 16`,"aria-hidden":`true`,focusable:`false`,children:[(0,G.jsx)(`circle`,{cx:`7.5`,cy:`8.5`,r:`7.5`,fill:`#fff`}),(0,G.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M7.5 1C3.36 1 0 4.36 0 8.5 0 12.64 3.36 16 7.5 16S15 12.64 15 8.5C15 4.36 11.64 1 7.5 1zM7 4.5c0-.28.22-.5.5-.5s.5.22.5.5V9c0 .28-.22.5-.5.5S7 9.28 7 9V4.5zm.5 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z`})]}),MS=I.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #2f3941;
  margin-bottom: 4px;
`,NS=I.span`
  font-size: 12px;
  color: #68737d;
  font-weight: 400;
`,Z=I.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Q=I.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`,$=I.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
`,PS=I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,FS=I.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`,IS=I.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
`,LS=I.span`
  color: #1f73b7;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`,RS=[`tickets`,`custom-objects`,`people`,`channels`,`agent-workflow`,`business-rules`,`security`,`knowledge`,`reporting`,`ai-agents`],zS=[...RS.filter(e=>e!==`ai-agents`),...nd.map(e=>e.id)],BS=RS.filter(e=>e!==`ai-agents`&&e!==`knowledge`),VS=rd.map(e=>e.id),HS=[...BS,...VS],US={tickets:[[`tickets`],[`tickets`],[`tickets`],[`tickets`],[`tickets`],[`tickets`]],"custom-objects":[[`tickets`]],people:[[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`]],channels:[[`channels`,`tickets`],[`channels`,`tickets`]],"agent-workflow":[[`workflow`],[`workflow`],[`workflow`],[`workflow`],[`workflow`],[`workflow`]],"business-rules":[[`automation`],[`automation`],[`automation`],[`automation`],[`automation`]],security:[[`gdpr`,`security`],[`gdpr`,`security`],[`gdpr`,`user-management`]],reporting:[[`reporting`],[`reporting`],[`reporting`]]};function WS(e,t,n){if(n!==`v3.5`||!t.topics.length)return!0;let r=US[e];return!r||r.some(e=>px(e,t))}function GS(){let{id:e}=Ye(),t=qe(),n=Ge(),{version:r,getAiAgentsState:i,updateAiAgentsState:a,roles:o,addRole:s,setAiAgentsRoleId:c,roleAssignments:l,assignMembersToRole:u,getProductAccess:d,saveProductAccess:f,copyProductAccess:p}=_d(),m=r===`v3`||r===`v3.5`,h=r===`v2.5`,_=m?rd:nd,v=m?ad:id,[y,b]=(0,g.useState)(!1),[x,S]=(0,g.useState)(`Role saved successfully`),[C,w]=(0,g.useState)(!1),[ee,te]=(0,g.useState)(!1),[ne,re]=(0,g.useState)(!1),[T,ie]=(0,g.useState)(ux),ae=(0,g.useRef)(null),E=e===`create`,oe=E?null:o.find(t=>t.id===e),D=oe?.name||``,O=e===`counselor`,[se,ce]=(0,g.useState)([`Brands`,`Groups`]),[le,k]=(0,g.useState)(null),ue=E?le:e,de=ue||`create`,fe=i(de),pe=fe.optedIn&&!fe.saved&&!!fe.accessLevel,me=td[fe.accessLevel],he=e=>!(fe.accessLevel===`no_access`&&e.aiAgentsAccess===`No Access`),ge=e=>{if(m||h)return[];let t=[];if(r===`v2`)for(let n of v){let r=d(de,n.id);if(r.optedIn&&!r.saved&&r.accessLevel){let i=dd[e.id]?.[n.id],a=td[r.accessLevel];i&&i!==a&&t.push({key:n.id,product:n.name,body:`${i} to ${a}`})}}return pe&&he(e)&&t.push({key:`ai-agents`,product:`AI agents`,body:`${e.aiAgentsAccess} to ${me}`}),t},[_e,ve]=(0,g.useState)(oe?.name||``),[ye,be]=(0,g.useState)(oe?.description||``),xe=(0,g.useRef)(null),Se=(0,g.useRef)(null),Ce=(0,g.useRef)(null),[we,Te]=(0,g.useState)(()=>e===`counselor`?{reporting:!0}:r===`v1`?{"ai-agents":!0}:{}),[Ee,De]=(0,g.useState)(``),Oe=Ee.trim();(0,g.useEffect)(()=>{ve(oe?.name||``),be(oe?.description||``),Te(e===`counselor`?{reporting:!0}:r===`v1`?{"ai-agents":!0}:{}),ce(e===`counselor`?[`Brands`,`Groups`]:[]),De(``),ie(m?ux:{availableOnly:!1,groups:[],topics:[]}),re(!1)},[e,oe?.name,oe?.description,r,m]),(0,g.useEffect)(()=>{n.state?.scrollToAiAgents&&setTimeout(()=>{xe.current?.scrollIntoView({behavior:`smooth`,block:`start`})},100)},[n.state]),(0,g.useEffect)(()=>{let e=e=>{ae.current&&!ae.current.contains(e.target)&&te(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let ke=(ue&&l[ue]||[]).map(e=>cd.find(t=>t.id===e)).filter(Boolean),Ae=h&&!O?Px({members:ke,version:r,roleKey:de,getProductAccess:d,getAiAgentsState:i,radioProducts:v}):null,je=!!(Ae&&Ae.affectedMemberCount>0),Me=!E||!!le,Ne=Me,Pe=()=>{if(O&&se.length>0){Se.current?.scrollTo({top:0,behavior:`smooth`}),Ce.current?.scrollIntoView({behavior:`smooth`,block:`start`});return}if(E&&_e.trim()){let e=_e.toLowerCase().replace(/\s+/g,`-`);o.some(t=>t.id===e)||s({id:e,name:_e.trim(),type:`Custom`,description:ye.trim()}),k(e),fe.optedIn&&(a(e,{...fe,saved:!0}),c(e)),p(`create`,e),a(`create`,{optedIn:!1,saved:!1,accessLevel:null})}else!E&&fe.optedIn&&(a(e,{saved:!0}),c(e));E||f(e),S(E?`Role created`:`Role saved successfully`),b(!0),setTimeout(()=>b(!1),4e3)},Fe=e=>{ue&&u(ue,e),w(!1),S(`Team member assigned`),b(!0),setTimeout(()=>b(!1),4e3)},Ie=r===`v1`?RS:m?HS:zS,Le=Ie.every(e=>we[e]),Re=()=>{Te(Le?{}:Object.fromEntries(Ie.map(e=>[e,!0])))},ze=e=>{Te(t=>({...t,[e]:!t[e]}))},Be=e=>({open:!!we[e],onToggle:()=>ze(e),query:Oe,maxWidth:630}),Ve=e=>m?fx(e,T)?r===`v3.5`&&US[e]?WS(e,T,r):!0:!1:!0,He=(e,t)=>{ie(n=>e===`available`?{...n,availableOnly:!1}:e===`group`?{...n,groups:n.groups.filter(e=>e!==t)}:e===`topic`?{...n,topics:n.topics.filter(e=>e!==t)}:n)},Ue=()=>{ie({availableOnly:!1,groups:[],topics:[]})},We=mx(T),Ke=[];T.availableOnly&&Ke.push({key:`available`,kind:`available`,id:`available`,label:`Only available settings`}),T.groups.forEach(e=>{let t=cx.find(t=>t.id===e);t&&Ke.push({key:`group-${e}`,kind:`group`,id:e,label:t.label})}),T.topics.forEach(e=>{let t=sx.find(t=>t.id===e);t&&Ke.push({key:`topic-${e}`,kind:`topic`,id:e,label:t.label})});let Je=(e,t=``)=>[t,m?dx(e):``].filter(Boolean).join(` `);return(0,g.useEffect)(()=>{if(!m||!(T.groups.length>0||T.topics.length>0))return;let e=(r===`v3.5`||r===`v3`?HS:zS).filter(e=>fx(e,T)?r===`v3.5`&&US[e]?WS(e,T,r):!0:!1);e.length&&Te(t=>{let n={...t},r=!1;for(let t of e)n[t]||(n[t]=!0,r=!0);return r?n:t})},[m,T,r]),(0,G.jsxs)(Fx,{children:[y&&(0,G.jsx)(iS,{children:(0,G.jsxs)(pg,{type:`success`,children:[(0,G.jsx)(pg.Title,{children:x}),(0,G.jsx)(pg.Close,{"aria-label":`Close`,onClick:()=>b(!1)})]})}),(0,G.jsxs)(Ix,{ref:Se,children:[(0,G.jsxs)(Lx,{children:[(0,G.jsx)(Sm,{items:[{label:`People`},{label:`Team`},{label:`Roles`,path:`/roles`},{label:Me&&E?`Edit role`:E?`Create role`:D}]}),(0,G.jsxs)(aS,{children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(dS,{children:E&&!Me?`Create role`:_e.trim()||D||`Role`}),(0,G.jsx)(fS,{children:`Learn about role permissions and access`})]}),Ne&&(0,G.jsxs)(oS,{ref:ae,children:[(0,G.jsxs)(sS,{onClick:()=>te(e=>!e),children:[`Actions`,(0,G.jsx)(cS,{$open:ee,children:(0,G.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,G.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),ee&&(0,G.jsxs)(lS,{children:[(0,G.jsx)(uS,{onClick:()=>te(!1),children:`Clone role`}),(0,G.jsx)(uS,{onClick:()=>{te(!1),w(!0)},children:`Assign role`}),(0,G.jsx)(uS,{$danger:!0,onClick:()=>te(!1),children:`Delete role`})]})]})]}),O&&se.length>0&&(0,G.jsxs)(ES,{ref:Ce,children:[(0,G.jsx)(DS,{children:(0,G.jsx)(jS,{})}),(0,G.jsxs)(OS,{children:[(0,G.jsx)(kS,{children:`Can't save this role`}),(0,G.jsxs)(AS,{children:[`You must finish the setting up the role`,(0,G.jsx)(`ul`,{children:se.map(e=>(0,G.jsx)(`li`,{children:e},e))})]})]})]}),(0,G.jsxs)(pS,{children:[(0,G.jsx)(TS,{$maxWidth:400,children:(0,G.jsxs)(Iv,{children:[(0,G.jsx)(Iv.Label,{children:`Name*`}),(0,G.jsx)(zv,{value:_e,onChange:e=>ve(e.target.value),required:!0})]})}),(0,G.jsx)(TS,{$maxWidth:400,children:(0,G.jsxs)(Iv,{children:[(0,G.jsx)(Iv.Label,{children:`Description`}),(0,G.jsx)(Hv,{value:ye,onChange:e=>be(e.target.value),minRows:3,isResizable:!0})]})})]}),m?(0,G.jsxs)(hS,{$maxWidth:630,children:[(0,G.jsxs)(gS,{children:[(0,G.jsx)(_S,{$maxWidth:400,children:(0,G.jsxs)(Iv,{children:[(0,G.jsx)(Iv.Label,{children:`Search permissions`}),(0,G.jsx)($v,{start:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,G.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.25`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,G.jsx)(`path`,{d:`M11.2 11.2L15 15`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),value:Ee,onChange:e=>De(e.target.value)})]})}),(0,G.jsxs)(vS,{onClick:()=>re(!0),children:[(0,G.jsx)(Th.StartIcon,{children:(0,G.jsx)(yS,{})}),`Filter`,We>0?` (${We})`:``]})]}),Ke.length>0&&(0,G.jsxs)(bS,{children:[Ke.map(e=>(0,G.jsxs)(hy,{isPill:!1,children:[(0,G.jsx)(`span`,{children:e.label}),(0,G.jsx)(hy.Close,{"aria-label":`Remove filter`,onClick:()=>He(e.kind,e.id)})]},e.key)),(0,G.jsx)(xS,{onClick:Ue,children:`Clear filters`})]})]}):(0,G.jsxs)(mS,{$maxWidth:630,children:[(0,G.jsx)(_S,{$maxWidth:400,children:(0,G.jsxs)(Iv,{children:[(0,G.jsx)(Iv.Label,{children:`Search permissions`}),(0,G.jsx)($v,{start:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,G.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.25`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,G.jsx)(`path`,{d:`M11.2 11.2L15 15`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),value:Ee,onChange:e=>De(e.target.value)})]})}),(0,G.jsx)(wS,{onClick:Re,children:Le?`Close all`:`Open all`})]}),(0,G.jsxs)(jx,{version:r,filters:T,children:[m&&(0,G.jsxs)(CS,{$maxWidth:630,children:[(0,G.jsx)(SS,{$maxWidth:630,$flush:!0,children:`Settings`}),(0,G.jsx)(wS,{onClick:Re,children:Le?`Close all`:`Open all`})]}),Ve(`tickets`)&&(0,G.jsxs)(Rb,{title:`Tickets`,description:`Choose the ticket permissions for this role.`,searchText:Je(`tickets`),...Be(`tickets`),children:[(0,G.jsxs)(Y,{tags:[`tickets`],children:[(0,G.jsx)(MS,{style:{marginBottom:`12px`},children:`Tickets they can access`}),(0,G.jsxs)(PS,{children:[(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`ticket-access`,defaultChecked:!0}),` Requested by and users in their organizations`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`ticket-access`}),` Within their groups`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`ticket-access`}),` Within their group and all public groups`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`ticket-access`}),` All, including those in private groups`]})]})]}),(0,G.jsxs)(Y,{tags:[`tickets`],children:[(0,G.jsx)(X,{children:`Manage suspended tickets`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Each allowed `,(0,G.jsx)(NS,{children:`- Automatically suspends tickets that may be risky or malicious`})]})})]}),(0,G.jsxs)(Y,{tags:[`tickets`],children:[(0,G.jsx)(X,{children:`Edit ticket properties`}),(0,G.jsxs)(Z,{children:[(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Can tag and edit tickets and edit properties`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Delete tickets`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Restrict ticket content`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Merge tickets`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Edit ticket tags`]})]})]}),(0,G.jsxs)(Y,{tags:[`tickets`],children:[(0,G.jsx)(X,{children:`Commenting permissions`}),(0,G.jsxs)(Z,{children:[(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Private comments only`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Public and private comments`]})]})]}),(0,G.jsxs)(Y,{tags:[`tickets`],children:[(0,G.jsx)(X,{children:`Manage ticket forms`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can access the Ticket Forms admin page and create, edit, update, and delete ticket forms`]})})]}),(0,G.jsxs)(Y,{tags:[`tickets`],children:[(0,G.jsx)(X,{children:`Manage ticket fields`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can customize Ticket Fields admin page and create, edit, update, and delete ticket fields`]})})]})]}),Ve(`custom-objects`)&&(0,G.jsx)(Rb,{title:`Custom objects`,description:`No objects yet.`,searchText:Je(`custom-objects`),...Be(`custom-objects`),children:(0,G.jsx)(Y,{tags:[`tickets`],children:(0,G.jsx)(LS,{children:`Can view and edit objects`})})}),Ve(`people`)&&(0,G.jsxs)(Rb,{title:`People`,description:`Choose the people permissions for this role.`,searchText:Je(`people`),...Be(`people`),children:[(0,G.jsxs)(Y,{tags:[`user-management`],children:[(0,G.jsx)(MS,{style:{marginBottom:`12px`},children:`Manage and users`}),(0,G.jsxs)(Z,{children:[(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` View only`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Add, edit, and assume profiles in organizations they belong to`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Add, edit, delete, and assume profiles for any end user`]})]})]}),(0,G.jsxs)(Y,{tags:[`user-management`],children:[(0,G.jsx)(X,{children:`Search and view lists of end users`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Find end users by name, email, phone, or organization. Without this, agents can only view individual and team profiles.`]})})]}),(0,G.jsxs)(Y,{tags:[`user-management`],children:[(0,G.jsx)(X,{children:`Manage team members`}),(0,G.jsxs)(Z,{children:[(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Not allowed`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` View only`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Create, assign roles, add, and delete`]})]})]}),(0,G.jsxs)(Y,{tags:[`user-management`],children:[(0,G.jsx)(X,{children:`Manage groups`}),(0,G.jsxs)(Z,{children:[(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Add and remove team members from groups`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Create, edit, and delete groups`]})]})]}),(0,G.jsxs)(Y,{tags:[`user-management`],children:[(0,G.jsx)(X,{children:`Manage organizations`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Add, update, delete organizations`]})})]}),(0,G.jsxs)(Y,{tags:[`user-management`],children:[(0,G.jsx)(X,{children:`Manage organization fields`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can add, edit, and delete organization fields`]})})]}),(0,G.jsxs)(Y,{tags:[`user-management`],children:[(0,G.jsx)(X,{children:`Manage roles`}),(0,G.jsxs)(Z,{children:[(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Create, edit, and delete roles`]}),(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can only edit subdomain roles`]})]})]}),(0,G.jsxs)(Y,{tags:[`user-management`],children:[(0,G.jsx)(X,{children:`Manage user fields`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can access the User Fields admin page and create, edit, update, and delete user fields`]})})]})]}),Ve(`channels`)&&(0,G.jsxs)(Rb,{title:`Channels`,description:`Choose the channel permissions for this role.`,searchText:Je(`channels`),...Be(`channels`),children:[(0,G.jsxs)(Y,{tags:[`tickets`,`channels`],children:[(0,G.jsx)(MS,{style:{marginBottom:`8px`},children:`Manage channels and extensions`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Channels include email, social messaging apps, and other means of communication. Extensions include triggers, automations, and integrations.`]})})]}),(0,G.jsxs)(Y,{tags:[`tickets`,`channels`],children:[(0,G.jsx)(X,{children:`Manage Facebook pages`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can set Facebook pages to create tickets from Facebook wall posts`]})})]})]}),Ve(`agent-workflow`)&&(0,G.jsxs)(Rb,{title:`Agent workflow`,description:`Choose the agent workflow permissions for this role.`,searchText:Je(`agent-workflow`),...Be(`agent-workflow`),children:[(0,G.jsxs)(Y,{tags:[`workflow`],children:[(0,G.jsx)(MS,{style:{marginBottom:`12px`},children:`Manage permissions`}),(0,G.jsxs)(PS,{children:[(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`views`,defaultChecked:!0}),` My views only`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`views`}),` See views only`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`views`}),` Add and edit personal views`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`views`}),` Add and edit personal and group views`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`views`}),` Add and edit personal, group, and global views`]})]})]}),(0,G.jsxs)(Y,{tags:[`workflow`],children:[(0,G.jsx)(X,{children:`Limit number of views`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Limit views to 12 shared views and 8 personal views`]})})]}),(0,G.jsxs)(Y,{tags:[`workflow`],children:[(0,G.jsx)(X,{children:`Access view filtering`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Can view and filter views`]})})]}),(0,G.jsxs)(Y,{tags:[`workflow`],children:[(0,G.jsx)(X,{children:`Macro permissions`}),(0,G.jsxs)(PS,{children:[(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`macros`}),` Apply only`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`macros`,defaultChecked:!0}),` Add and edit personal macros`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`macros`}),` Add and edit personal and group macros`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`macros`}),` Add and edit personal, group, and global macros`]})]})]}),(0,G.jsxs)(Y,{tags:[`workflow`],children:[(0,G.jsx)(X,{children:`Access dynamic content`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can view, edit, and add dynamic content`]})})]}),(0,G.jsxs)(Y,{tags:[`workflow`],children:[(0,G.jsx)(X,{children:`Manage contextual workspaces`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can view, edit, and edit contextual workspaces`]})})]})]}),Ve(`business-rules`)&&(0,G.jsxs)(Rb,{title:`Business rules`,description:`Choose the business rules permissions for this role.`,searchText:Je(`business-rules`),...Be(`business-rules`),children:[(0,G.jsxs)(Y,{tags:[`automation`],children:[(0,G.jsx)(MS,{style:{marginBottom:`8px`},children:`Automations`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can view, add, edit, and delete automations`]})})]}),(0,G.jsxs)(Y,{tags:[`automation`],children:[(0,G.jsx)(X,{children:`Skills`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can view, add, edit, and delete skills`]})})]}),(0,G.jsxs)(Y,{tags:[`automation`],children:[(0,G.jsx)(X,{children:`Service level agreements`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can view, add, edit, and delete service level agreements`]})})]}),(0,G.jsxs)(Y,{tags:[`automation`],children:[(0,G.jsx)(X,{children:`Triggers`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can view, edit, add, and delete triggers`]})})]}),(0,G.jsxs)(Y,{tags:[`automation`],children:[(0,G.jsx)(X,{children:`Business rules analysis`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Can view, edit, add, and delete business rule analysis`]})})]})]}),Ve(`security`)&&(0,G.jsxs)(Rb,{title:`Security and privacy`,description:`Choose the security and privacy permissions for this role.`,searchText:Je(`security`),...Be(`security`),children:[(0,G.jsx)(Y,{tags:[`gdpr`,`security`],children:(0,G.jsx)(MS,{style:{marginBottom:`8px`},children:`Manage access and security permissions for this role.`})}),(0,G.jsxs)(Y,{tags:[`gdpr`,`security`],children:[(0,G.jsx)(X,{children:`Manage deletion schedules`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Admins or Admins automatically delete data like tickets.`]})})]}),(0,G.jsxs)(Y,{tags:[`gdpr`,`user-management`],children:[(0,G.jsx)(X,{children:`Data handling`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Hide end user personally identifiable information (PII) from this role`]})}),(0,G.jsx)(`div`,{style:{marginTop:`12px`},children:(0,G.jsxs)(`table`,{style:{fontSize:`13px`,color:`#49545c`},children:[(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`th`,{style:{textAlign:`left`,padding:`4px 16px 4px 0`,fontWeight:500},children:`User field`}),(0,G.jsx)(`th`,{style:{textAlign:`left`,padding:`4px 0`,fontWeight:500},children:`Access`})]})}),(0,G.jsxs)(`tbody`,{children:[(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`td`,{style:{padding:`4px 16px 4px 0`},children:`Name`}),(0,G.jsx)(`td`,{children:`✓`})]}),(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`td`,{style:{padding:`4px 16px 4px 0`},children:`Phone`}),(0,G.jsx)(`td`,{children:`✓`})]}),(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(`td`,{style:{padding:`4px 16px 4px 0`},children:`Email`}),(0,G.jsx)(`td`,{children:`✓`})]})]})]})})]})]}),!m&&(0,G.jsx)(Rb,{title:`Knowledge`,description:`Choose whether or not this role includes managing Knowledge.`,...Be(`knowledge`),children:(0,G.jsxs)(Z,{children:[(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Manage Guide`]}),(0,G.jsx)(NS,{style:{marginLeft:`24px`,display:`block`},children:`Can by default have an admin and can manage articles, themes, and settings.`})]})}),Ve(`reporting`)&&(0,G.jsx)(Rb,{title:`Reporting and analytics`,description:O?`Choose the analytics permissions for this role.`:`Choose the reporting and analytics permissions for this role.`,searchText:Je(`reporting`,O?Eb:``),errorCount:O?se.length:0,...Be(`reporting`),children:O?(0,G.jsx)(Y,{tags:[`reporting`],children:(0,G.jsx)(Db,{onSaveErrorsChange:ce})}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(Y,{tags:[`reporting`],children:[(0,G.jsx)(MS,{style:{marginBottom:`12px`},children:`Explore permissions`}),(0,G.jsxs)(PS,{children:[(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`explore`}),` No access`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`explore`,defaultChecked:!0}),` View reports`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`explore`}),` Create reports`]}),(0,G.jsxs)(FS,{children:[(0,G.jsx)(IS,{name:`explore`}),` Create reports and manage permissions`]})]})]}),(0,G.jsxs)(Y,{tags:[`reporting`],children:[(0,G.jsx)(X,{children:`Reports permissions`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{}),` Refer to the Reports tab in Support, not reports within Explore. These who can also export data.`]})})]}),(0,G.jsxs)(Y,{tags:[`reporting`],children:[(0,G.jsx)(X,{children:`View Talk dashboard`}),(0,G.jsx)(Z,{children:(0,G.jsxs)(Q,{children:[(0,G.jsx)($,{defaultChecked:!0}),` Can track phone calls on the Talk dashboard`]})})]})]})}),r===`v1`&&(0,G.jsx)(tS,{ref:xe,children:(0,G.jsx)(Rb,{title:`AI agents`,description:`Choose whether this role can access AI agents.`,searchText:jy,...Be(`ai-agents`),children:(0,G.jsx)(My,{roleId:de,query:Oe})})}),m&&(0,G.jsx)(SS,{$maxWidth:630,children:`Products`}),r!==`v1`&&_.map(e=>Ve(e.id)?e.id===`ai-agents`?(0,G.jsx)(tS,{ref:xe,children:(0,G.jsx)(Rb,{title:`AI agents`,description:`Choose whether this role can access AI agents.`,searchText:Je(`ai-agents`,jy),...Be(`ai-agents`),children:(0,G.jsx)(My,{roleId:de,query:Oe,directAccess:m})})},e.id):(0,G.jsx)(Rb,{title:e.name,description:e.id===`knowledge`&&m?`Choose product access and whether this role can manage Knowledge.`:`Choose whether this role can access ${e.name}.`,searchText:Je(e.id,e.disabled?`Subscription limit reached`:qy(e.name,{directAccess:m,includeManage:e.id===`knowledge`&&m})),...Be(e.id),children:e.disabled?(0,G.jsx)(Qx,{children:`Subscription limit reached`}):(0,G.jsx)(Jy,{roleId:de,product:e,query:Oe,directAccess:m,includeManageKnowledge:e.id===`knowledge`&&m})},e.id):null)]}),(0,G.jsx)(nS,{})]}),Me&&(0,G.jsxs)(Rx,{children:[(0,G.jsxs)(zx,{children:[`Team members (`,ke.length,`)`]}),ke.length===0?(0,G.jsxs)(Bx,{children:[(0,G.jsx)(Vx,{children:`No one in sight`}),(0,G.jsx)(Hx,{children:`There's nobody in this role. You can assign it to team members via their profiles.`}),(0,G.jsx)(Th,{onClick:()=>w(!0),children:`Assign role`})]}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Ux,{children:`You can assign this role to team members via their profiles. To change roles for a team member in this role, select their name to go to their profile.`}),je&&(0,G.jsxs)(Yx,{type:`warning`,role:`note`,children:[(0,G.jsx)(eS,{}),(0,G.jsxs)(cg.Title,{children:[`Access changed for `,Ae.affectedMemberCount,` team member`,Ae.affectedMemberCount===1?``:`s`]}),(0,G.jsx)(Zx,{href:`#/roles/${ue}/access-preview`,isUnderlined:!0,onClick:e=>{e.preventDefault(),t(`/roles/${ue}/access-preview`)},children:`Preview team members access change`}),(0,G.jsx)(Xx,{children:Ae.products.map(e=>(0,G.jsx)(`li`,{children:e.name},e.id))})]}),(0,G.jsxs)(Wx,{children:[(0,G.jsx)(Gx,{children:`Name`}),ke.map(e=>{let n=O||h?[]:ge(e);return(0,G.jsxs)(Kx,{children:[(0,G.jsx)(qx,{onClick:()=>t(`/team-members/${e.id}`,{state:{fromRoleId:ue}}),children:e.name}),n.length>0&&(0,G.jsxs)(Jx,{type:`warning`,role:`note`,children:[(0,G.jsx)(eS,{}),(0,G.jsx)(cg.Title,{children:n.length>1?`Access changes`:`Access change`}),(0,G.jsx)($x,{children:n.map(e=>(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`div`,{children:e.product}),(0,G.jsxs)(`div`,{children:[`• `,e.body]})]},e.key))})]})]},e.id)})]})]})]})]}),(0,G.jsxs)(rS,{children:[(0,G.jsx)(Th,{onClick:()=>t(`/roles`),children:`Cancel`}),(0,G.jsx)(Th,{isPrimary:!0,onClick:Pe,children:`Save`})]}),C&&(0,G.jsx)(ox,{onClose:()=>w(!1),onAssign:Fe}),m&&(0,G.jsx)(kx,{isOpen:ne,onClose:()=>re(!1),value:T,onApply:ie})]})}var KS=I.ul.attrs({"data-garden-id":`pagination.list`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledList`,componentId:`sc-1uz2jxo-0`})([`direction:`,`;display:flex;justify-content:center;margin:0;padding:0;list-style:none;white-space:nowrap;`,` &:focus{outline:none;}`,`;`],e=>e.theme.rtl&&`rtl`,({theme:e})=>F([`color:`,`;`],H({variable:`foreground.subtle`,theme:e})),z),qS=I.li.attrs({"data-garden-id":`pagination.list_item`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledListItem`,componentId:`sc-16j4sju-0`})([`box-sizing:border-box;margin-left:`,`;user-select:none;&`,`{margin-left:0;}`,`;`],e=>`${e.theme.space.base}px`,e=>e.theme.rtl?`:last-of-type`:`:first-of-type`,z),JS=`pagination.page`,YS=({theme:e})=>{let t=H({variable:`foreground.disabled`,theme:e}),n=H({variable:`foreground.subtle`,theme:e}),r=H({variable:`foreground.subtle`,light:{offset:100},dark:{offset:-100},theme:e}),i=H({variable:`background.primaryEmphasis`,transparency:e.opacity[100],dark:{offset:-100},theme:e}),a=H({variable:`foreground.subtle`,light:{offset:200},dark:{offset:-200},theme:e}),o=H({variable:`background.primaryEmphasis`,transparency:e.opacity[200],dark:{offset:-100},theme:e}),s=a,c=i,l=o,u=H({variable:`background.primaryEmphasis`,transparency:e.opacity[300],dark:{offset:-100},theme:e});return F([`border:none;background:transparent;color:`,`;&:hover{background-color:`,`;color:`,`;}`,` &:active,&:focus-visible:active{background-color:`,`;color:`,`;}&[aria-current='page']{background-color:`,`;color:`,`;}&[aria-current='page']:hover{background-color:`,`;}&[aria-current='page']:active{background-color:`,`;}&:disabled,&[aria-disabled='true']{background-color:transparent;color:`,`;}`],n,i,r,Ts({theme:e,inset:!0}),o,a,c,s,l,u,t)},XS=e=>{let t=e.theme.fontSizes.md,n=`${e.theme.space.base*8}px`,r=Ss(n,t);return F([`padding:0 `,`;height:`,`;line-height:`,`;font-size:`,`;`],`${e.theme.space.base*1.5}px`,n,r,t)},ZS=I.button.attrs({"data-garden-id":JS,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledPageBase`,componentId:`sc-ttwj4u-0`})([`box-sizing:border-box;display:inline-block;transition:box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;visibility:`,`;border-radius:`,`;cursor:pointer;overflow:hidden;text-align:center;text-overflow:ellipsis;font-family:inherit;user-select:none;`,`;&[aria-current='page']{font-weight:`,`;}&::-moz-focus-inner{border:0;}&:disabled,[aria-disabled='true']{cursor:default;}`,`;`,`;`],e=>e.hidden&&`hidden`,e=>e.theme.borderRadii.md,e=>XS(e),e=>e.theme.fontWeights.semibold,e=>YS(e),z),QS=`pagination.page`,$S=e=>{let t=e.theme.space.base*8;return F([`min-width:`,`px;max-width:`,`px;&[aria-current='true']{max-width:none;}`],t,t*2)},eC=I(ZS).attrs({"data-garden-id":QS,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledPage`,componentId:`sc-sxjfwy-0`})([``,`;&[aria-current="true"]{font-weight:`,`;}`,`;`],e=>$S(e),e=>e.theme.fontWeights.semibold,z),tC=I(qS).attrs({"data-garden-id":`pagination.gap`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledGapListItem`,componentId:`sc-10wd0iz-0`})([`display:inline-block;text-align:center;`,`;`,` &:hover{color:inherit;}`,`;`],e=>{let t=V(`${e.theme.fontSizes.md} + 2`),n=`${e.theme.space.base*8}px`,r=Ss(n,t);return F([`padding:0 `,`;min-width:`,`;max-width:`,`;height:`,`;line-height:`,`;font-size:`,`;`],`${e.theme.space.base*1.5}px`,n,V(`${n} * 2`),n,r,t)},({theme:e})=>F([`color:`,`;`],H({variable:`foreground.subtle`,theme:e})),z),nC=I(eC).attrs({"data-garden-id":`pagination.navigation`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledNavigation`,componentId:`sc-1lpl8pp-0`})([`display:flex;align-items:center;justify-content:center;`,`;`],z),rC=I.nav.attrs({"data-garden-id":`pagination.pagination_view`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledNav`,componentId:`sc-ppnpkw-0`})([``,`;`],z),iC;function aC(){return aC=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},aC.apply(null,arguments)}var oC=function(e){return g.createElement(`svg`,aC({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),iC||=g.createElement(`path`,{fill:`currentColor`,d:`M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z`}))},sC;function cC(){return cC=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cC.apply(null,arguments)}var lC=function(e){return g.createElement(`svg`,cC({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),sC||=g.createElement(`path`,{fill:`currentColor`,d:`M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z`}))},uC=(0,g.forwardRef)((e,t)=>{let n=Cs(uC,e,`aria-label`,`Previous page`),r=(0,g.useContext)(_i);return g.createElement(nC,Object.assign({type:`button`},e,{"aria-label":n,ref:t}),r.rtl?g.createElement(lC,null):g.createElement(oC,null))});uC.displayName=`Pagination.Previous`;var dC=uC,fC=(0,g.forwardRef)((e,t)=>{let n=Cs(fC,e,`aria-label`,`Next page`),r=(0,g.useContext)(_i);return g.createElement(nC,Object.assign({type:`button`},e,{"aria-label":n,ref:t}),r.rtl?g.createElement(oC,null):g.createElement(lC,null))});fC.displayName=`Pagination.Next`;var pC=fC,mC=(0,g.forwardRef)((e,t)=>{let n=Cs(mC,e,`aria-label`,`Page ${e.children}`);return g.createElement(eC,Object.assign({type:`button`},e,{"aria-label":n,ref:t}))});mC.displayName=`Pagination.Page`;var hC=mC,gC=(0,g.forwardRef)((e,t)=>{let n=Cs(gC,e,`aria-label`,`Ellipsis indicating non-visible pages`);return g.createElement(tC,Object.assign({},e,{"aria-label":n,ref:t}),`…`)});gC.displayName=`Pagination.Gap`;var _C=gC,vC=`previous`,yC=`next`,bC=(0,g.forwardRef)(({currentPage:e,totalPages:t,pagePadding:n=2,pageGap:r=2,onChange:i,"aria-label":a,labels:o,...s},c)=>{let[l,u]=(0,g.useState)(),[d,f]=(0,g.useState)(1),p=Cs(bC,{"aria-label":a},`aria-label`,`Pagination`),m=h_(e,d),h=(0,g.useCallback)(e=>{u(e)},[]),_=(0,g.useCallback)(e=>{let n=e,r=l;n===vC&&m>1?(n=m-1,n===1&&l===vC&&(r=1)):n===yC&&m<t&&(n=m+1,n===t&&r===yC&&(r=t)),i&&n!==void 0&&i(n),u(r),f(n)},[m,l,i,t]),v=()=>{let e=t>0&&m===1;return g.createElement(qS,null,g.createElement(dC,{hidden:e,onFocus:()=>h(`previous`),onClick:()=>_(`previous`),"aria-label":o?.previous}))},y=()=>{let e=m===t;return g.createElement(qS,null,g.createElement(pC,{hidden:e,onFocus:()=>h(`next`),onClick:()=>_(`next`),"aria-label":o?.next}))},b=e=>g.createElement(_C,{key:`gap-${e}`,"aria-label":o?.gap}),x=e=>g.createElement(qS,{key:e},g.createElement(hC,{onFocus:()=>h(e),onClick:()=>_(e),"aria-current":m===e?`page`:void 0,"aria-label":o?.renderPage?.(e)},e));return g.createElement(rC,{"aria-label":p},g.createElement(KS,Object.assign({},s,{ref:c}),v(),t>0&&(()=>{let e=[],i=n,a=r;for(let n=1;n<=t;n++){if(n===m||n<a||n>t-a+1){e.push(x(n));continue}let r,o;if(m<=a+i?(r=a+1,o=r+i*2):m>=t-a-i?(o=t-a,r=o-i*2):(r=m-i,o=m+i),n>=r&&n<=m||n>=m&&n<=o){e.push(x(n));continue}if(n===a){r>a+1&&m>a+i+1?e.push(b(n)):e.push(x(n));continue}if(n===t-a+1){o<t-a&&m<t-a-i?e.push(b(n)):e.push(x(n));continue}}return e})(),y()))});bC.propTypes={currentPage:U.default.number.isRequired,totalPages:U.default.number.isRequired,pagePadding:U.default.number,pageGap:U.default.number,onChange:U.default.func,labels:U.default.any},bC.displayName=`OffsetPagination`;var xC=I.tbody.attrs({"data-garden-id":`tables.body`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledBody`,componentId:`sc-14ud6y-0`})([``,`;`],z),SC=I.caption.attrs({"data-garden-id":`tables.caption`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCaption`,componentId:`sc-113y327-0`})([`display:table-caption;text-align:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,z),CC=I.tr.withConfig({displayName:`StyledBaseRow`,componentId:`sc-1t4zqg4-0`})([`display:table-row;transition:background-color 0.1s ease-in-out;`,` `,``],({theme:e})=>F([`border-bottom:`,`;vertical-align:top;box-sizing:border-box;`],e.borders.sm),({theme:e,$isStriped:t})=>{let n=H({variable:`border.subtle`,theme:e}),r=H({variable:`background.subtle`,transparency:e.opacity[100],light:{offset:300},dark:{offset:-600},theme:e});return F([`border-bottom-color:`,`;background-color:`,`;`],n,t&&r)}),wC=e=>e.$size===`large`?`${e.theme.space.base*16}px`:e.$size===`small`?`${e.theme.space.base*8}px`:`${e.theme.space.base*10}px`,TC=I(Dh).attrs({"data-garden-id":`tables.overflow_button`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledOverflowButton`,componentId:`sc-1eba2ml-0`})([`margin-top:calc(`,` - 1em);width:100%;min-width:unset;height:`,`;font-size:inherit;`,`;`],e=>V(`${wC(e)} / 2`),`2em`,z),EC=`tables.header_row`,DC=e=>e.$size===`large`?`${e.theme.space.base*18}px`:e.$size===`small`?`${e.theme.space.base*10}px`:`${e.theme.space.base*12}px`,OC=I(CC).attrs({"data-garden-id":EC,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledHeaderRow`,componentId:`sc-16ogvdx-0`})([`font-weight:`,`;`,` `,` `,`{opacity:1;}`,`;`],e=>e.theme.fontWeights.semibold,e=>{let t=DC(e);return F([`height:`,`;vertical-align:bottom;`,`{margin-top:0;margin-bottom:calc(`,` - 1em);}`],t,TC,V(`${t} / 2`))},({theme:e})=>F([`border-bottom-color:`,`;`],H({variable:`border.default`,theme:e})),TC,z),kC=`tables.table`,AC=e=>`${e.theme.space.base*5}px`,jC=I.table.attrs({"data-garden-id":kC,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledTable`,componentId:`sc-gje7na-0`})([`display:table;border:none;width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;line-height:`,`;color:`,`;font-size:`,`;direction:`,`;`,`;`],e=>AC(e),e=>H({variable:`foreground.default`,theme:e.theme}),e=>e.theme.fontSizes.md,e=>e.theme.rtl&&`rtl`,z),MC=`tables.cell`,NC=F([`overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`]),PC=e=>{let t=`border-box`,n,r=e.width,i;return e.$hasOverflow?(t=`content-box`,r=`2em`,i=`inherit`,n=e.theme.rtl?`0 0 0 ${e.theme.space.base}px`:`0 ${e.theme.space.base}px 0 0`):n=`${V(`(${wC(e)} - ${AC(e)}) / 2`)} ${`${e.theme.space.base*3}px`}`,e.$isMinimum&&(t=`content-box`,r=`1em`),F([`box-sizing:`,`;padding:`,`;width:`,`;height:`,`;`],t,n,r,i)},FC=I.td.attrs({"data-garden-id":MC,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCell`,componentId:`sc-8hpncx-0`})([`display:table-cell;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out;`,`;`,`;`,`;`],e=>PC(e),e=>e.$isTruncated&&NC,z),IC=`tables.sortable`,LC=I.div.withConfig({displayName:`StyledSortableButton__StyledBaseIconWrapper`,componentId:`sc-2s1dli-0`})([`display:flex;position:absolute;top:0;`,`:0;align-items:center;justify-content:center;opacity:0;width:`,`;height:100%;color:inherit;fill:inherit;`],e=>e.theme.rtl?`left`:`right`,e=>e.theme.iconSizes.sm),RC=I(LC).withConfig({displayName:`StyledSortableButton__StyledSortableStrokeIconWrapper`,componentId:`sc-2s1dli-1`})([``]),zC=I(LC).withConfig({displayName:`StyledSortableButton__StyledSortableFillIconWrapper`,componentId:`sc-2s1dli-2`})([``]),BC=I.button.attrs({"data-garden-id":IC,"data-garden-version":`9.15.6`,type:`button`}).withConfig({displayName:`StyledSortableButton`,componentId:`sc-2s1dli-3`})([`position:relative;transition:box-shadow 0.1s ease-in-out;border:none;border-radius:`,`;background-color:transparent;cursor:pointer;padding:0;padding-`,`:`,`;width:`,`;text-decoration:none;color:inherit;font-family:inherit;font-size:inherit;font-weight:`,`;`,`{opacity:`,`;}`,`{opacity:`,`;}&:hover,`,`{text-decoration:none;}`,` `,`;`],e=>e.theme.borderRadii.sm,e=>e.theme.rtl?`left`:`right`,e=>V(`${e.theme.space.base} + ${e.theme.iconSizes.sm}`),e=>e.width,e=>e.theme.fontWeights.semibold,RC,e=>e.$sort===void 0&&1,zC,e=>e.$sort!==void 0&&1,ws,({theme:e,$sort:t})=>{let n=H({variable:`foreground.subtle`,transparency:e.opacity[200],theme:e}),r=H({variable:`foreground.subtle`,theme:e}),i=H({variable:`foreground.primary`,theme:e}),a=H({variable:`foreground.primary`,theme:e,dark:{offset:-100},transparency:e.opacity[200]}),o=r,s=r;return t===`asc`?(o=r,s=n):t===`desc`&&(o=n,s=r),F([``,`{color:`,`;fill:`,`;}`,`{color:`,`;fill:`,`;}&:hover,`,`{color:`,`;`,`;`,` `,`}`,``],RC,r,r,zC,o,s,ws,i,t===void 0&&`
        ${zC} {
          opacity: 1;
          color: ${i};
          fill: ${i};
        }

        ${RC} {
          opacity: 0;
        }
      `,t===`asc`&&`
        ${zC} {
          color: ${i};
          fill: ${a};
        }
      `,t===`desc`&&`
        ${zC} {
          color: ${a};
          fill: ${i};
        }
      `,Ts({theme:e}))},z),VC=`tables.header_cell`,HC=F([``,`{max-width:100%;overflow:hidden;text-overflow:ellipsis;}`],BC),UC=e=>{let t;return e.$hasOverflow||(t=V(`(${wC(e)} - ${AC(e)}) / 2`)),F([`padding-top:`,`;padding-bottom:`,`;`],t,t)},WC=I(FC).attrs({as:`th`,"data-garden-id":VC,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledHeaderCell`,componentId:`sc-fzagoe-0`})([`text-align:`,`;font-weight:inherit;`,` `,` `,`;`],e=>{if(!e.$hasOverflow)return e.theme.rtl?`right`:`left`},e=>UC(e),e=>e.$isTruncated&&HC,z),GC=`tables.head`,KC=({theme:e})=>{let t=H({variable:`border.default`,theme:e});return F([`background-color:`,`;& > `,`:last-child{border-bottom-color:transparent;& > `,`{box-shadow:inset 0 -`,` 0 `,`;}}`],H({variable:`background.default`,theme:e}),OC,WC,e.borderWidths.sm,t)},qC=()=>F([`position:sticky;top:0;z-index:1;`]),JC=I.thead.attrs({"data-garden-id":GC,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledHead`,componentId:`sc-spf23a-0`})([``,` `,` `,`;`],e=>e.$isSticky&&qC(),KC,z),YC=I(CC).attrs({"data-garden-id":`tables.group_row`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledGroupRow`,componentId:`sc-mpd0r8-0`})([``,` `,` `,`;`],e=>{let t=`${e.theme.space.base*8}px`,n=AC(e);return F([`height:`,`;line-height:`,`;font-size:`,`;`,`{padding:`,` `,`px;}`],t,n,e.theme.fontSizes.sm,FC,V(`(${t} - ${n}) / 2`),e.theme.space.base*3)},({theme:e})=>F([`background-color:`,`;`],H({variable:`background.subtle`,transparency:e.opacity[100],light:{offset:300},dark:{offset:-600},theme:e})),z),XC=I.div.attrs({"data-garden-id":`tables.hidden_cell`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledHiddenCell`,componentId:`sc-1x454xw-0`})([``,` `,`;`],Ja(),z),ZC=I(CC).attrs({"data-garden-id":`tables.row`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledRow`,componentId:`sc-ek66ow-0`})([``,` `,` `,`;`],e=>F([`height:`,`;`],wC(e)),({theme:e,$isFocused:t,$isSelected:n,$isHovered:r,$isReadOnly:i})=>{let a=H({variable:`background.primaryEmphasis`,transparency:e.opacity[100],dark:{offset:-100},theme:e}),o=H({variable:`border.primaryEmphasis`,transparency:e.opacity[200],dark:{offset:-100},theme:e}),s=H({variable:`background.primaryEmphasis`,transparency:e.opacity[200],dark:{offset:-100},theme:e}),c=H({variable:`border.primaryEmphasis`,light:{offset:-400},dark:{offset:300},theme:e}),l=H({variable:`background.primaryEmphasis`,transparency:e.opacity[300],dark:{offset:-100},theme:e}),u=H({variable:`border.primaryEmphasis`,theme:e}),d=`inset ${e.rtl?`-`:``}${e.shadowWidths.md} 0 0 0 ${u}`,f,p,m,h;return n?(f=r?l:s,p=c,m=c,h=l):r?(f=a,p=o):i||(m=o,h=a),F([`border-bottom-color:`,`;background-color:`,`;&:hover{border-bottom-color:`,`;background-color:`,`;`,`{opacity:1;}}&:focus{outline:none;}`,`:first-of-type{box-shadow:`,`;&:focus{box-shadow:`,`;}}`],p,f,m,h,TC,FC,t&&d,d)},z),QC=(0,g.forwardRef)((e,t)=>g.createElement(xC,Object.assign({ref:t},e)));QC.displayName=`Table.Body`;var $C=(0,g.forwardRef)((e,t)=>g.createElement(SC,Object.assign({ref:t},e)));$C.displayName=`Table.Caption`;var ew=g.createContext({size:`medium`,isReadOnly:!1}),tw=()=>(0,g.useContext)(ew),nw=g.forwardRef(({hidden:e,isMinimum:t,isTruncated:n,hasOverflow:r,...i},a)=>{let{size:o}=tw();return g.createElement(FC,Object.assign({ref:a,$size:o,$isMinimum:t,$isTruncated:n,$hasOverflow:r},i),e&&i.children?g.createElement(XC,null,i.children):i.children)});nw.displayName=`Table.Cell`,nw.propTypes={isMinimum:U.default.bool,isTruncated:U.default.bool,hasOverflow:U.default.bool,width:U.default.oneOfType([U.default.string,U.default.number])};var rw=(0,g.forwardRef)((e,t)=>{let{size:n}=tw();return g.createElement(YC,Object.assign({ref:t,$size:n},e))});rw.displayName=`Table.GroupRow`;var iw=(0,g.forwardRef)(({isSticky:e,...t},n)=>g.createElement(JC,Object.assign({ref:n,$isSticky:e},t)));iw.displayName=`Table.Head`;var aw=(0,g.forwardRef)(({hidden:e,isMinimum:t,isTruncated:n,hasOverflow:r,...i},a)=>{let{size:o}=tw();return g.createElement(WC,Object.assign({ref:a,$size:o,$isMinimum:t,$isTruncated:n,$hasOverflow:r},i),e&&i.children?g.createElement(XC,null,i.children):i.children)});aw.displayName=`Table.HeaderCell`,aw.propTypes=nw.propTypes;var ow=g.forwardRef((e,t)=>{let{size:n}=tw();return g.createElement(OC,Object.assign({ref:t,$size:n},e))});ow.displayName=`Table.HeaderRow`;var sw;function cw(){return cw=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cw.apply(null,arguments)}var lw=function(e){return g.createElement(`svg`,cw({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),sw||=g.createElement(`path`,{fill:`currentColor`,d:`M9.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z`}))},uw=(0,g.forwardRef)((e,t)=>{let{size:n}=tw();return g.createElement(TC,Object.assign({type:`button`,$size:n,ref:t},e,{focusInset:!0}),g.createElement(lw,null))});uw.displayName=`Table.OverflowButton`;var dw=(0,g.forwardRef)(({onFocus:e,onBlur:t,isSelected:n,isStriped:r,isHovered:i,isFocused:a,...o},s)=>{let[c,l]=(0,g.useState)(!1),{size:u,isReadOnly:d}=tw(),f=(0,g.useMemo)(()=>a===void 0?!d&&c:a,[a,c,d]),p=(0,g.useMemo)(()=>m_(e,()=>{l(!0)}),[e,l]),m=(0,g.useMemo)(()=>m_(t,()=>{l(!1)}),[t,l]);return g.createElement(ZC,Object.assign({onFocus:p,onBlur:m,ref:s,$size:u,$isReadOnly:d,$isFocused:f,$isHovered:i,$isStriped:r,$isSelected:n},o,{tabIndex:d?void 0:-1}))});dw.displayName=`Table.Row`,dw.propTypes={isStriped:U.default.bool,isFocused:U.default.bool,isHovered:U.default.bool,isSelected:U.default.bool};var fw;function pw(){return pw=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pw.apply(null,arguments)}var mw=function(e){return g.createElement(`svg`,pw({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),fw||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M2.5 4L5.6.9c.2-.2.5-.2.7 0L9.5 4m-7 4l3.1 3.1c.2.2.5.2.7 0L9.5 8`}))},hw,gw;function _w(){return _w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_w.apply(null,arguments)}var vw=function(e){return g.createElement(`svg`,_w({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),hw||=g.createElement(`path`,{fill:`currentColor`,d:`M10 5H2a.5.5 0 01-.46-.31.47.47 0 01.11-.54L5.29.5A1 1 0 016.7.5l3.65 3.65a.49.49 0 01.11.54A.51.51 0 0110 5z`}),gw||=g.createElement(`path`,{d:`M2 7a.5.5 0 00-.46.31.47.47 0 00.11.54L5.3 11.5a1 1 0 001.41 0l3.65-3.65a.49.49 0 00.11-.54A.53.53 0 0010 7z`}))},yw=[`small`,`medium`,`large`],bw=[`asc`,`desc`],xw=(0,g.forwardRef)(({sort:e,cellProps:t={},width:n,children:r,...i},a)=>{let{isMinimum:o,isTruncated:s,hasOverflow:c,...l}=t,u=`none`;e===`asc`?u=`ascending`:e===`desc`&&(u=`descending`);let d=e===void 0?mw:vw;return g.createElement(WC,Object.assign({"aria-sort":u,width:n,$isMinimum:o,$isTruncated:s,$hasOverflow:c},l),g.createElement(BC,Object.assign({$sort:e,ref:a},i),r,g.createElement(RC,null,g.createElement(d,null)),g.createElement(zC,null,g.createElement(vw,null))))});xw.displayName=`Table.SortableCell`,xw.propTypes={sort:U.default.oneOf(bw),cellProps:U.default.any,width:U.default.oneOfType([U.default.string,U.default.number])};var Sw=g.forwardRef(({isReadOnly:e,size:t=`medium`,...n},r)=>{let i=(0,g.useMemo)(()=>({size:t,isReadOnly:e}),[t,e]);return g.createElement(ew.Provider,{value:i},g.createElement(jC,Object.assign({ref:r},n)))});Sw.displayName=`Table`,Sw.propTypes={size:U.default.oneOf(yw),isReadOnly:U.default.bool};var Cw=Sw;Cw.Body=QC,Cw.Caption=$C,Cw.Cell=nw,Cw.GroupRow=rw,Cw.Head=iw,Cw.HeaderCell=aw,Cw.HeaderRow=ow,Cw.OverflowButton=uw,Cw.Row=dw,Cw.SortableCell=xw;var ww=100,Tw=`1px solid ${J.grey[200]}`,Ew=I.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`,Dw=I.div`
  flex: 1;
  overflow-y: auto;
`,Ow=I.div`
  padding: 24px 40px 40px 32px;
  width: 100%;
  box-sizing: border-box;
`,kw=I.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 500;
  color: #2f3130;
  margin: 0 0 4px;
`,Aw=I.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 24px;
  max-width: 630px;
`,jw=I.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px 16px;
  margin-bottom: 12px;
`,Mw=I.div`
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  flex: 0 0 400px;
`,Nw=I.div`
  width: 200px;
`,Pw=I.div`
  font-size: 13px;
  line-height: 20px;
  color: #2f3130;
  /* 8px between counter and table header */
  margin-bottom: 8px;
`,Fw=I(Eh)`
  font-size: 14px;
  color: ${J.blue[700]} !important;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${J.blue[800]} !important;
    text-decoration: underline;
  }

  &:active {
    color: ${J.blue[900]} !important;
    text-decoration: underline;
  }
`,Iw=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`,Lw=I.div`
  padding: 40px 16px;
  text-align: center;
  color: ${J.grey[700]};
  font-size: 14px;
`,Rw=I.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 40px 0 32px;
  border-top: 1px solid ${J.grey[300]};
  background: ${J.white};
`,zw=I.div`
  width: 100%;
`,Bw=I(Cw)`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;

  [data-garden-id='tables.header_row'],
  [data-garden-id='tables.row'] {
    border-bottom: none !important;
    background-color: transparent !important;
  }

  /* Group hover: name + every product row for that member. */
  [data-garden-id='tables.row'][data-group-hover='true'],
  [data-garden-id='tables.row'][data-group-hover='true'] [data-garden-id='tables.cell'] {
    background-color: ${J.grey[100]} !important;
  }

  [data-garden-id='tables.header_cell'],
  [data-garden-id='tables.cell'] {
    padding: 0 12px !important;
    box-shadow: none !important;
    border-bottom: none !important;
  }

  /* Flora 🌸 Header cell — Default / Default */
  [data-garden-id='tables.header_cell'] {
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    background-color: #f7f7f7 !important;
    background-clip: padding-box;
    /* Flora spacing/block/xs — 4px gap between header and body */
    border-bottom: 4px solid transparent !important;
  }

  [data-garden-id='tables.header_cell']:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  [data-garden-id='tables.header_cell']:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  /* Flora 🌸 Header cell — Sortable (label + chevron-up-down, gap 4px) */
  [data-garden-id='tables.sortable'] {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    max-width: 100%;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #2f3130;
    /* Room for the absolute-positioned Garden sort icon */
    padding-right: 20px !important;
  }

  [data-garden-id='tables.sortable'] svg {
    color: #646864;
  }

  [data-garden-id='tables.cell'] {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
  }

  /* Must beat the cell reset above — sketch rules live on these attrs. */
  [data-garden-id='tables.cell'][data-sketch='member'],
  [data-garden-id='tables.cell'][data-sketch='side'] {
    border-bottom: ${Tw} !important;
  }

  [data-garden-id='tables.cell'][data-sketch='member'] {
    /* Match middle-aligned product text in the first span row (40px / 20px lh). */
    vertical-align: top !important;
    padding-top: 10px !important;
  }
`,Vw=I(Cw.Cell).attrs({"data-sketch":`member`})``,Hw=I(Cw.Cell).attrs({"data-sketch":`side`})``,Uw=()=>(0,G.jsxs)(`colgroup`,{children:[(0,G.jsx)(`col`,{style:{width:`28%`}}),(0,G.jsx)(`col`,{style:{width:`24%`}}),(0,G.jsx)(`col`,{style:{width:`24%`}}),(0,G.jsx)(`col`,{style:{width:`24%`}})]});function Ww(e){let t=[],n=0;for(;n<e.length;){let r=n+1;for(;r<e.length&&e[r].memberId===e[n].memberId;)r+=1;let i=r-n;for(let a=n;a<r;a+=1)t.push({...e[a],isFirstInGroup:a===n,isLastInGroup:a===r-1,rowSpan:a===n?i:0});n=r}return t}function Gw(){let{id:e}=Ye(),t=qe(),{version:n,roles:r,roleAssignments:i,getProductAccess:a,getAiAgentsState:o}=_d(),s=r.find(t=>t.id===e)?.name||`Role`,c=(0,g.useMemo)(()=>(i[e]||[]).map(e=>cd.find(t=>t.id===e)).filter(Boolean),[i,e]),l=(0,g.useMemo)(()=>Px({members:c,version:n,roleKey:e,getProductAccess:a,getAiAgentsState:o,radioProducts:id}),[c,n,e,a,o]),[u,d]=(0,g.useState)(``),[f,p]=(0,g.useState)(`all`),[m,h]=(0,g.useState)(1),[_,v]=(0,g.useState)(null),[y,b]=(0,g.useState)(void 0),x=(0,g.useMemo)(()=>{let e=u.trim().toLowerCase();return l.rows.filter(t=>!(f!==`all`&&t.productId!==f||e&&!t.memberName.toLowerCase().includes(e)))},[l.rows,u,f]),S=(0,g.useMemo)(()=>{let e=[],t=new Map,n=new Set;for(let r of x)n.has(r.memberId)||(n.add(r.memberId),e.push(r.memberId),t.set(r.memberId,r.memberName));if(!y)return e;let r=[...e];return r.sort((e,n)=>{let r=(t.get(e)||``).localeCompare(t.get(n)||``,void 0,{sensitivity:`base`});return y===`asc`?r:-r}),r},[x,y]),C=()=>{b(e=>{if(e===void 0)return`asc`;if(e===`asc`)return`desc`}),h(1)},w=S.length,ee=Math.max(1,Math.ceil(w/ww)),te=Math.min(m,ee),ne=(0,g.useMemo)(()=>{let e=(te-1)*ww;return S.slice(e,e+ww)},[S,te]),re=ne.length,T=(0,g.useMemo)(()=>{let e=new Set(ne),t=new Map;for(let n of x){if(!e.has(n.memberId))continue;let r=t.get(n.memberId);r?r.push(n):t.set(n.memberId,[n])}return ne.flatMap(e=>t.get(e)||[])},[x,ne]),ie=Ww(T);return(0,G.jsxs)(Ew,{children:[(0,G.jsx)(Dw,{children:(0,G.jsxs)(Ow,{children:[(0,G.jsx)(Sm,{items:[{label:`People`},{label:`Team`},{label:`Roles`,path:`/roles`},{label:s,path:`/roles/${e}`},{label:`Preview team members access change`}]}),(0,G.jsx)(kw,{children:`Preview team members access change`}),(0,G.jsx)(Aw,{children:`Review how saving this role would change product access for assigned team members. Select a name to open their profile.`}),(0,G.jsxs)(jw,{children:[(0,G.jsx)(Mw,{children:(0,G.jsxs)(Iv,{children:[(0,G.jsx)(Iv.Label,{children:`Search team members`}),(0,G.jsx)($v,{value:u,onChange:e=>{d(e.target.value),h(1)},start:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,G.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.25`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,G.jsx)(`path`,{d:`M11.2 11.2L15 15`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]})})]})}),(0,G.jsx)(Nw,{children:(0,G.jsxs)(Iv,{children:[(0,G.jsx)(Iv.Label,{children:`Product`}),(0,G.jsxs)(Qv,{value:f,onChange:e=>{p(e.target.value),h(1)},children:[(0,G.jsx)(`option`,{value:`all`,children:`All products`}),l.products.map(e=>(0,G.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]})})]}),(0,G.jsx)(Pw,{children:w===0?`No matching access changes`:`${re} of ${w} team members`}),T.length===0?(0,G.jsx)(Lw,{children:l.rows.length===0?`There are no pending access changes for this role.`:`No rows match your search or filter.`}):(0,G.jsx)(zw,{children:(0,G.jsxs)(Bw,{size:`medium`,isReadOnly:!0,"aria-label":`Preview team members access change`,children:[(0,G.jsx)(Uw,{}),(0,G.jsx)(Cw.Head,{children:(0,G.jsxs)(Cw.HeaderRow,{children:[(0,G.jsx)(Cw.SortableCell,{sort:y,onClick:C,"aria-label":y===`asc`?`Team member, sorted ascending`:y===`desc`?`Team member, sorted descending`:`Team member, not sorted`,children:`Team member`}),(0,G.jsx)(Cw.HeaderCell,{children:`Product`}),(0,G.jsx)(Cw.HeaderCell,{children:`Current access`}),(0,G.jsx)(Cw.HeaderCell,{children:`New access`})]})}),(0,G.jsx)(Cw.Body,{children:ie.map(n=>(0,G.jsxs)(Cw.Row,{"data-member":n.memberId,"data-group-hover":_===n.memberId?`true`:void 0,onMouseEnter:()=>v(n.memberId),onMouseLeave:e=>{let t=e.relatedTarget;t instanceof Element&&t.closest(`[data-member="${n.memberId}"]`)||v(null)},children:[n.isFirstInGroup&&(0,G.jsx)(Vw,{rowSpan:n.rowSpan,children:(0,G.jsx)(Fw,{isUnderlined:!1,href:`#/team-members/${n.memberId}`,onClick:r=>{r.preventDefault(),t(`/team-members/${n.memberId}`,{state:{fromRoleId:e,fromAccessPreview:!0}})},children:n.memberName})}),(0,G.jsx)(Hw,{children:n.product}),(0,G.jsx)(Hw,{children:n.current}),(0,G.jsx)(Hw,{children:n.next})]},`${n.memberId}-${n.productId}`))})]})}),w>ww&&(0,G.jsx)(Iw,{children:(0,G.jsx)(bC,{totalPages:ee,currentPage:te,onChange:e=>h(e),"aria-label":`Pagination`})})]})}),(0,G.jsx)(Rw,{children:(0,G.jsx)(Th,{onClick:()=>t(`/roles/${e}`),children:`Back to role`})})]})}var Kw=I.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,qw=I.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
  background-color: #f8f9f9;
  overflow: hidden;
`,Jw=I.div`
  display: flex;
  flex: 1;
  min-height: 0;
  width: 100%;
  overflow: hidden;
`,Yw=I.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,Xw=I.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  background: #fff;
  border-top-left-radius: 12px;
`,Zw=[{id:`v2`,label:`V2 Access change alerts`},{id:`v2.5`,label:`V2.5 Access change preview page`},{id:`v3`,label:`V3 Redesign, filter capsules`},{id:`v3.5`,label:`V3.5 Redesign, filter capsules and items`,archived:!0},{id:`v1`,label:`V1`,archived:!0}];function Qw(){let{version:e,setVersion:t}=_d(),[n,r]=(0,g.useState)(null),[i,a]=(0,g.useState)(null),[o,s]=(0,g.useState)(!1),c=Ge(),l=qe();return(0,g.useEffect)(()=>{performance.getEntriesByType(`navigation`)[0]?.type===`reload`&&c.pathname!==`/roles`&&l(`/roles`,{replace:!0})},[]),(0,G.jsxs)(Kw,{children:[(0,G.jsx)(lf,{title:`Custom roles on all plans`,meta:`Started Aug 2026`,versions:Zw,versionId:e,onVersionChange:t,versionNotes:uf,commentSlotRef:r,inspectSlotRef:a,inspectActive:o}),(0,G.jsxs)(qw,{children:[(0,G.jsx)(Jl,{}),(0,G.jsxs)(Jw,{children:[(0,G.jsx)(du,{currentProduct:`admin_center`}),(0,G.jsxs)(Yw,{children:[(0,G.jsx)(_m,{}),(0,G.jsx)(Xw,{"data-comment-root":`true`,"data-inspect-root":`true`,children:(0,G.jsxs)(vt,{children:[(0,G.jsx)(gt,{path:`/`,element:(0,G.jsx)(ht,{to:`/roles`,replace:!0})}),(0,G.jsx)(gt,{path:`/team-members`,element:(0,G.jsx)(Zm,{})}),(0,G.jsx)(gt,{path:`/team-members/:id`,element:(0,G.jsx)(Vg,{})}),(0,G.jsx)(gt,{path:`/roles`,element:(0,G.jsx)(o_,{})}),(0,G.jsx)(gt,{path:`/roles/:id/access-preview`,element:(0,G.jsx)(Gw,{})}),(0,G.jsx)(gt,{path:`/roles/:id`,element:(0,G.jsx)(GS,{})})]})})]})]})]}),(0,G.jsx)(fm,{toggleContainer:i,onActiveChange:s}),(0,G.jsx)(Op,{toggleContainer:n,context:{version:e,route:c.pathname},onRestoreContext:e=>{Zw.some(t=>t.id===e.version)&&t(e.version),e.route&&l(e.route)}})]})}function $w(){return(0,G.jsx)(Xu,{children:(0,G.jsx)(gd,{children:(0,G.jsx)(Ct,{children:(0,G.jsx)(Qw,{})})})})}(0,_.createRoot)(document.getElementById(`root`)).render((0,G.jsx)(g.StrictMode,{children:(0,G.jsx)($w,{})}));