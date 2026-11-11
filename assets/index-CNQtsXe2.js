var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+A(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(k,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+A(s,l);c+=j(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+A(s,l++),c+=j(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ee(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M={current:null},ne={transition:null},re={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:ne,ReactCurrentOwner:C};function N(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:ee,forEach:function(e,t,n){ee(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ee(e,function(){t++}),t},toArray:function(e){return ee(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,e.act=N,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ne.transition;ne.transition={};try{e()}finally{ne.transition=t}},e.unstable_act=N,e.useCallback=function(e,t){return M.current.useCallback(e,t)},e.useContext=function(e){return M.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return M.current.useDeferredValue(e)},e.useEffect=function(e,t){return M.current.useEffect(e,t)},e.useId=function(){return M.current.useId()},e.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return M.current.useMemo(e,t)},e.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},e.useRef=function(e){return M.current.useRef(e)},e.useState=function(e){return M.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return M.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,ee(x);else{var t=n(l);t!==null&&te(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!D());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&te(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function D(){return!(e.unstable_now()-E<T)}function O(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?k():(S=!1,C=null)}}else S=!1}var k;if(typeof v==`function`)k=function(){v(O)};else if(typeof MessageChannel<`u`){var A=new MessageChannel,j=A.port2;A.port1.onmessage=O,k=function(){j.postMessage(null)}}else k=function(){g(O,0)};function ee(e){C=e,S||(S=!0,k())}function te(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ee(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,te(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee(x))),r},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),D=Symbol.for(`react.strict_mode`),O=Symbol.for(`react.profiler`),k=Symbol.for(`react.provider`),A=Symbol.for(`react.context`),j=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),M=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.offscreen`),N=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=N&&e[N]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Object.assign,oe;function se(e){if(oe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);oe=t&&t[1]||``}return`
`+oe+e}var ce=!1;function le(e,t){if(!e||ce)return``;ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{ce=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?se(e):``}function ue(e){switch(e.tag){case 5:return se(e.type);case 16:return se(`Lazy`);case 13:return se(`Suspense`);case 19:return se(`SuspenseList`);case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return``}}function de(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case O:return`Profiler`;case D:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case A:return(e.displayName||`Context`)+`.Consumer`;case k:return(e._context.displayName||`Context`)+`.Provider`;case j:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case M:return t=e.displayName||null,t===null?de(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function fe(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return de(t);case 8:return t===D?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function pe(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function he(e){var t=me(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ge(e){e._valueTracker||=he(e)}function _e(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=me(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function ve(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function ye(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function be(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=pe(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function xe(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function Se(e,t){xe(e,t);var n=pe(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?we(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&we(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ce(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function we(e,t,n){(t!==`number`||ve(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Te=Array.isArray;function Ee(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+pe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function P(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return ae({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function De(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Te(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:pe(n)}}function Oe(e,t){var n=pe(t.value),r=pe(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function ke(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Ae(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function je(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Ae(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var F,Me=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(F||=document.createElement(`div`),F.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=F.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ne(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Pe).forEach(function(e){Fe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pe[t]=Pe[e]})});function Ie(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Pe.hasOwnProperty(e)&&Pe[e]?(``+t).trim():t+`px`}function Le(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ie(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Re=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(e,t){if(t){if(Re[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Be(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ve=null;function He(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ue=null,We=null,Ge=null;function Ke(e){if(e=Vi(e)){if(typeof Ue!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ui(t),Ue(e.stateNode,e.type,t))}}function qe(e){We?Ge?Ge.push(e):Ge=[e]:We=e}function Je(){if(We){var e=We,t=Ge;if(Ge=We=null,Ke(e),t)for(e=0;e<t.length;e++)Ke(t[e])}}function Ye(e,t){return e(t)}function Xe(){}var Ze=!1;function Qe(e,t,n){if(Ze)return e(t,n);Ze=!0;try{return Ye(e,t,n)}finally{Ze=!1,(We!==null||Ge!==null)&&(Xe(),Je())}}function $e(e,t){var n=e.stateNode;if(n===null)return null;var i=Ui(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var et=!1;if(c)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){et=!0}}),window.addEventListener(`test`,tt,tt),window.removeEventListener(`test`,tt,tt)}catch{et=!1}function nt(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var rt=!1,it=null,at=!1,ot=null,st={onError:function(e){rt=!0,it=e}};function ct(e,t,n,r,i,a,o,s,c){rt=!1,it=null,nt.apply(st,arguments)}function lt(e,t,n,i,a,o,s,c,l){if(ct.apply(this,arguments),rt){if(rt){var u=it;rt=!1,it=null}else throw Error(r(198));at||(at=!0,ot=u)}}function ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ft(e){if(ut(e)!==e)throw Error(r(188))}function pt(e){var t=e.alternate;if(!t){if(t=ut(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ft(a),e;if(o===i)return ft(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function mt(e){return e=pt(e),e===null?null:ht(e)}function ht(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ht(e);if(t!==null)return t;e=e.sibling}return null}var gt=n.unstable_scheduleCallback,_t=n.unstable_cancelCallback,vt=n.unstable_shouldYield,yt=n.unstable_requestPaint,I=n.unstable_now,bt=n.unstable_getCurrentPriorityLevel,xt=n.unstable_ImmediatePriority,St=n.unstable_UserBlockingPriority,Ct=n.unstable_NormalPriority,wt=n.unstable_LowPriority,Tt=n.unstable_IdlePriority,Et=null,Dt=null;function Ot(e){if(Dt&&typeof Dt.onCommitFiberRoot==`function`)try{Dt.onCommitFiberRoot(Et,e,void 0,(e.current.flags&128)==128)}catch{}}var kt=Math.clz32?Math.clz32:Mt,At=Math.log,jt=Math.LN2;function Mt(e){return e>>>=0,e===0?32:31-(At(e)/jt|0)|0}var Nt=64,Pt=4194304;function L(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ft(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=L(a))):r=L(s)}else o=n&~i,o===0?a!==0&&(r=L(a)):r=L(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),i=1<<n,r|=e[n],t&=~i;return r}function It(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-kt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=It(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Rt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function zt(){var e=Nt;return Nt<<=1,!(Nt&4194240)&&(Nt=64),e}function Bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function Ht(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function Wt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gt,Kt,qt,Jt,Yt,Xt=!1,Zt=[],Qt=null,$t=null,en=null,tn=new Map,nn=new Map,rn=[],an=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function on(e,t){switch(e){case`focusin`:case`focusout`:Qt=null;break;case`dragenter`:case`dragleave`:$t=null;break;case`mouseover`:case`mouseout`:en=null;break;case`pointerover`:case`pointerout`:tn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:nn.delete(t.pointerId)}}function sn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Vi(t),t!==null&&Kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cn(e,t,n,r,i){switch(t){case`focusin`:return Qt=sn(Qt,e,t,n,r,i),!0;case`dragenter`:return $t=sn($t,e,t,n,r,i),!0;case`mouseover`:return en=sn(en,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return tn.set(a,sn(tn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,nn.set(a,sn(nn.get(a)||null,e,t,n,r,i)),!0}return!1}function ln(e){var t=Bi(e.target);if(t!==null){var n=ut(t);if(n!==null){if(t=n.tag,t===13){if(t=dt(n),t!==null){e.blockedOn=t,Yt(e.priority,function(){qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function un(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ve=r,n.target.dispatchEvent(r),Ve=null}else return t=Vi(n),t!==null&&Kt(t),e.blockedOn=n,!1;t.shift()}return!0}function dn(e,t,n){un(e)&&n.delete(t)}function fn(){Xt=!1,Qt!==null&&un(Qt)&&(Qt=null),$t!==null&&un($t)&&($t=null),en!==null&&un(en)&&(en=null),tn.forEach(dn),nn.forEach(dn)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xt||(Xt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,fn)))}function mn(e){function t(t){return pn(t,e)}if(0<Zt.length){pn(Zt[0],e);for(var n=1;n<Zt.length;n++){var r=Zt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&pn(Qt,e),$t!==null&&pn($t,e),en!==null&&pn(en,e),tn.forEach(t),nn.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)ln(n),n.blockedOn===null&&rn.shift()}var hn=C.ReactCurrentBatchConfig,gn=!0;function _n(e,t,n,r){var i=R,a=hn.transition;hn.transition=null;try{R=1,yn(e,t,n,r)}finally{R=i,hn.transition=a}}function vn(e,t,n,r){var i=R,a=hn.transition;hn.transition=null;try{R=4,yn(e,t,n,r)}finally{R=i,hn.transition=a}}function yn(e,t,n,r){if(gn){var i=xn(e,t,n,r);if(i===null)hi(e,t,r,bn,n),on(e,r);else if(cn(i,e,t,n,r))r.stopPropagation();else if(on(e,r),t&4&&-1<an.indexOf(e)){for(;i!==null;){var a=Vi(i);if(a!==null&&Gt(a),a=xn(e,t,n,r),a===null&&hi(e,t,r,bn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else hi(e,t,r,null,n)}}var bn=null;function xn(e,t,n,r){if(bn=null,e=He(r),e=Bi(e),e!==null)if(t=ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bn=e,null}function Sn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(bt()){case xt:return 1;case St:return 4;case Ct:case wt:return 16;case Tt:return 536870912;default:return 16}default:return 16}}var Cn=null,wn=null,Tn=null;function En(){if(Tn)return Tn;var e,t=wn,n=t.length,r,i=`value`in Cn?Cn.value:Cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Tn=i.slice(e,1<r?1-r:void 0)}function Dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function kn(){return!1}function An(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?On:kn,this.isPropagationStopped=kn,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mn=An(jn),Nn=ae({},jn,{view:0,detail:0}),Pn=An(Nn),Fn,In,Ln,Rn=ae({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Ln&&(Ln&&e.type===`mousemove`?(Fn=e.screenX-Ln.screenX,In=e.screenY-Ln.screenY):In=Fn=0,Ln=e),Fn)},movementY:function(e){return`movementY`in e?e.movementY:In}}),zn=An(Rn),Bn=An(ae({},Rn,{dataTransfer:0})),Vn=An(ae({},Nn,{relatedTarget:0})),Hn=An(ae({},jn,{animationName:0,elapsedTime:0,pseudoElement:0})),Un=An(ae({},jn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Wn=An(ae({},jn,{data:0})),Gn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qn[e])?!!t[e]:!1}function Yn(){return Jn}var Xn=An(ae({},Nn,{key:function(e){if(e.key){var t=Gn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(e){return e.type===`keypress`?Dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Zn=An(ae({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Qn=An(ae({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn})),$n=An(ae({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0})),er=An(ae({},Rn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),tr=[9,13,27,32],nr=c&&`CompositionEvent`in window,rr=null;c&&`documentMode`in document&&(rr=document.documentMode);var ir=c&&`TextEvent`in window&&!rr,ar=c&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=En(),Tn=wn=Cn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){qe(r),t=_i(t,`onChange`),0<t.length&&(n=new Mn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){li(e,0)}function yr(e){if(_e(Hi(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(c){var Sr;if(c){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,He(e)),Qe(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(){for(var e=window,t=ve();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ve(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function zr(e){var t=Lr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ir(n.ownerDocument.documentElement,n)){if(r!==null&&Rr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Fr(n,a);var o=Fr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Br=c&&`documentMode`in document&&11>=document.documentMode,Vr=null,Hr=null,Ur=null,Wr=!1;function Gr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wr||Vr==null||Vr!==ve(r)||(r=Vr,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Nr(Ur,r)||(Ur=r,r=_i(Hr,`onSelect`),0<r.length&&(t=new Mn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function Kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var qr={animationend:Kr(`Animation`,`AnimationEnd`),animationiteration:Kr(`Animation`,`AnimationIteration`),animationstart:Kr(`Animation`,`AnimationStart`),transitionend:Kr(`Transition`,`TransitionEnd`)},Jr={},Yr={};c&&(Yr=document.createElement(`div`).style,`AnimationEvent`in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),`TransitionEvent`in window||delete qr.transitionend.transition);function Xr(e){if(Jr[e])return Jr[e];if(!qr[e])return e;var t=qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yr)return Jr[e]=t[n];return e}var Zr=Xr(`animationend`),Qr=Xr(`animationiteration`),$r=Xr(`animationstart`),ei=Xr(`transitionend`),ti=new Map,ni=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ri(e,t){ti.set(e,t),o(t,[e])}for(var ii=0;ii<ni.length;ii++){var ai=ni[ii];ri(ai.toLowerCase(),`on`+(ai[0].toUpperCase()+ai.slice(1)))}ri(Zr,`onAnimationEnd`),ri(Qr,`onAnimationIteration`),ri($r,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(ei,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var oi=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),si=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(oi));function ci(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,lt(r,t,void 0,e),e.currentTarget=null}function li(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ci(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ci(i,s,l),a=c}}}if(at)throw e=ot,at=!1,ot=null,e}function ui(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var r=e+`__bubble`;n.has(r)||(mi(t,e,2,!1),n.add(r))}function di(e,t,n){var r=0;t&&(r|=4),mi(n,e,r,t)}var fi=`_reactListening`+Math.random().toString(36).slice(2);function pi(e){if(!e[fi]){e[fi]=!0,i.forEach(function(t){t!==`selectionchange`&&(si.has(t)||di(t,!1,e),di(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,di(`selectionchange`,!1,t))}}function mi(e,t,n,r){switch(Sn(t)){case 1:var i=_n;break;case 4:i=vn;break;default:i=yn}n=i.bind(null,t,n,e),i=void 0,!et||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function hi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Bi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}Qe(function(){var r=a,i=He(n),o=[];a:{var s=ti.get(e);if(s!==void 0){var c=Mn,l=e;switch(e){case`keypress`:if(Dn(n)===0)break a;case`keydown`:case`keyup`:c=Xn;break;case`focusin`:l=`focus`,c=Vn;break;case`focusout`:l=`blur`,c=Vn;break;case`beforeblur`:case`afterblur`:c=Vn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=zn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Bn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Qn;break;case Zr:case Qr:case $r:c=Hn;break;case ei:c=$n;break;case`scroll`:c=Pn;break;case`wheel`:c=er;break;case`copy`:case`cut`:case`paste`:c=Un;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Zn}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=$e(p,f),h!=null&&u.push(gi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ve&&(l=n.relatedTarget||n.fromElement)&&(Bi(l)||l[Ii]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Bi(l):null,l!==null&&(d=ut(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=zn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Zn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Hi(c),m=l==null?s:Hi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Bi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=vi(m))p++;for(m=0,h=f;h;h=vi(h))m++;for(;0<p-m;)u=vi(u),p--;for(;0<m-p;)f=vi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=vi(u),f=vi(f)}u=null}else u=null;c!==null&&yi(o,s,c,u,!1),l!==null&&d!==null&&yi(o,d,l,u,!0)}}a:{if(s=r?Hi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=br;else if(mr(s))if(xr)g=Ar;else{g=Or;var _=Dr}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=kr);if(g&&=g(e,r)){hr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&we(s,`number`,s.value)}switch(_=r?Hi(r):window,e){case`focusin`:(mr(_)||_.contentEditable===`true`)&&(Vr=_,Hr=r,Ur=null);break;case`focusout`:Ur=Hr=Vr=null;break;case`mousedown`:Wr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Wr=!1,Gr(o,n,i);break;case`selectionchange`:if(Br)break;case`keydown`:case`keyup`:Gr(o,n,i)}var v;if(nr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else ur?cr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(ar&&n.locale!==`ko`&&(ur||y!==`onCompositionStart`?y===`onCompositionEnd`&&ur&&(v=En()):(Cn=i,wn=`value`in Cn?Cn.value:Cn.textContent,ur=!0)),_=_i(r,y),0<_.length&&(y=new Wn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=lr(n),v!==null&&(y.data=v)))),(v=ir?dr(e,n):fr(e,n))&&(r=_i(r,`onBeforeInput`),0<r.length&&(i=new Wn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}li(o,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _i(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=$e(e,n),a!=null&&r.unshift(gi(e,a,i)),a=$e(e,t),a!=null&&r.push(gi(e,a,i))),e=e.return}return r}function vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=$e(n,a),c!=null&&o.unshift(gi(n,c,s))):i||(c=$e(n,a),c!=null&&o.push(gi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var z=/\r\n?/g,bi=/\u0000|\uFFFD/g;function xi(e){return(typeof e==`string`?e:``+e).replace(z,`
`).replace(bi,``)}function B(e,t,n){if(t=xi(t),xi(e)!==t&&n)throw Error(r(425))}function Si(){}var Ci=null,wi=null;function Ti(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout==`function`?setTimeout:void 0,Di=typeof clearTimeout==`function`?clearTimeout:void 0,V=typeof Promise==`function`?Promise:void 0,Oi=typeof queueMicrotask==`function`?queueMicrotask:V===void 0?Ei:function(e){return V.resolve(null).then(e).catch(ki)};function ki(e){setTimeout(function(){throw e})}function Ai(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),mn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);mn(t)}function ji(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Mi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),Pi=`__reactFiber$`+Ni,Fi=`__reactProps$`+Ni,Ii=`__reactContainer$`+Ni,Li=`__reactEvents$`+Ni,Ri=`__reactListeners$`+Ni,zi=`__reactHandles$`+Ni;function Bi(e){var t=e[Pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ii]||n[Pi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mi(e);e!==null;){if(n=e[Pi])return n;e=Mi(e)}return t}e=n,n=e.parentNode}return null}function Vi(e){return e=e[Pi]||e[Ii],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ui(e){return e[Fi]||null}var Wi=[],Gi=-1;function Ki(e){return{current:e}}function qi(e){0>Gi||(e.current=Wi[Gi],Wi[Gi]=null,Gi--)}function Ji(e,t){Gi++,Wi[Gi]=e.current,e.current=t}var Yi={},Xi=Ki(Yi),Zi=Ki(!1),Qi=Yi;function $i(e,t){var n=e.type.contextTypes;if(!n)return Yi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ea(e){return e=e.childContextTypes,e!=null}function ta(){qi(Zi),qi(Xi)}function na(e,t,n){if(Xi.current!==Yi)throw Error(r(168));Ji(Xi,t),Ji(Zi,n)}function ra(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,fe(e)||`Unknown`,a));return ae({},n,i)}function ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yi,Qi=Xi.current,Ji(Xi,e),Ji(Zi,Zi.current),!0}function aa(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ra(e,t,Qi),i.__reactInternalMemoizedMergedChildContext=e,qi(Zi),qi(Xi),Ji(Xi,e)):qi(Zi),Ji(Zi,n)}var oa=null,sa=!1,ca=!1;function la(e){oa===null?oa=[e]:oa.push(e)}function ua(e){sa=!0,la(e)}function da(){if(!ca&&oa!==null){ca=!0;var e=0,t=R;try{var n=oa;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}oa=null,sa=!1}catch(t){throw oa!==null&&(oa=oa.slice(e+1)),gt(xt,da),t}finally{R=t,ca=!1}}return null}var fa=[],pa=0,ma=null,ha=0,ga=[],_a=0,va=null,ya=1,ba=``;function xa(e,t){fa[pa++]=ha,fa[pa++]=ma,ma=e,ha=t}function Sa(e,t,n){ga[_a++]=ya,ga[_a++]=ba,ga[_a++]=va,va=e;var r=ya;e=ba;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var a=32-kt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ya=1<<32-kt(t)+i|n<<i|r,ba=a+e}else ya=1<<a|n<<i|r,ba=e}function Ca(e){e.return!==null&&(xa(e,1),Sa(e,1,0))}function wa(e){for(;e===ma;)ma=fa[--pa],fa[pa]=null,ha=fa[--pa],fa[pa]=null;for(;e===va;)va=ga[--_a],ga[_a]=null,ba=ga[--_a],ga[_a]=null,ya=ga[--_a],ga[_a]=null}var Ta=null,Ea=null,Da=!1,Oa=null;function ka(e,t){var n=eu(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Ta=e,Ea=ji(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Ta=e,Ea=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=va===null?null:{id:ya,overflow:ba},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=eu(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ta=e,Ea=null,!0);default:return!1}}function ja(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Ma(e){if(Da){var t=Ea;if(t){var n=t;if(!Aa(e,t)){if(ja(e))throw Error(r(418));t=ji(n.nextSibling);var i=Ta;t&&Aa(e,t)?ka(i,n):(e.flags=e.flags&-4097|2,Da=!1,Ta=e)}}else{if(ja(e))throw Error(r(418));e.flags=e.flags&-4097|2,Da=!1,Ta=e}}}function H(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ta=e}function Na(e){if(e!==Ta)return!1;if(!Da)return H(e),Da=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Ti(e.type,e.memoizedProps)),t&&=Ea){if(ja(e))throw Pa(),Error(r(418));for(;t;)ka(e,t),t=ji(t.nextSibling)}if(H(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Ea=ji(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Ea=null}}else Ea=Ta?ji(e.stateNode.nextSibling):null;return!0}function Pa(){for(var e=Ea;e;)e=ji(e.nextSibling)}function Fa(){Ea=Ta=null,Da=!1}function Ia(e){Oa===null?Oa=[e]:Oa.push(e)}var La=C.ReactCurrentBatchConfig;function Ra(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function za(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ba(e){var t=e._init;return t(e._payload)}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=ru(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=su(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&Ba(i)===t.type)?(r=a(t,n.props),r.ref=Ra(e,t,n),r.return=e,r):(r=iu(n.type,n.key,n.props,null,e.mode,r),r.ref=Ra(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=cu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=au(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=su(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=iu(t.type,t.key,t.props,null,e.mode,n),n.ref=Ra(e,null,t),n.return=e,n;case T:return t=cu(t,e.mode,n),t.return=e,t;case ne:var r=t._init;return f(e,r(t._payload),n)}if(Te(t)||ie(t))return t=au(t,e.mode,n,null),t.return=e,t;za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case ne:return i=n._init,p(e,t,i(n._payload),r)}if(Te(n)||ie(n))return i===null?d(e,t,n,r,null):null;za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Te(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);za(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),Da&&xa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Da&&xa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),Da&&xa(r,h),l}function g(a,s,c,l){var u=ie(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Da&&xa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Da&&xa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Da&&xa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ne&&Ba(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Ra(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===E?(r=au(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=iu(i.type,i.key,i.props,null,e.mode,o),o.ref=Ra(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=cu(i,e.mode,o),r.return=e,e=r}return s(e);case ne:return l=i._init,_(e,r,l(i._payload),o)}if(Te(i))return h(e,r,i,o);if(ie(i))return g(e,r,i,o);za(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=su(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ha=Va(!0),Ua=Va(!1),Wa=Ki(null),Ga=null,Ka=null,qa=null;function Ja(){qa=Ka=Ga=null}function Ya(e){var t=Wa.current;qi(Wa),e._currentValue=t}function Xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Za(e,t){Ga=e,qa=Ka=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Vs=!0),e.firstContext=null)}function Qa(e){var t=e._currentValue;if(qa!==e)if(e={context:e,memoizedValue:t,next:null},Ka===null){if(Ga===null)throw Error(r(308));Ka=e,Ga.dependencies={lanes:0,firstContext:e}}else Ka=Ka.next=e;return t}var $a=null;function eo(e){$a===null?$a=[e]:$a.push(e)}function to(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,eo(t)):(n.next=i.next,i.next=n),t.interleaved=n,no(e,r)}function no(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ro=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function oo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function so(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Yc&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,no(e,n)}return i=r.interleaved,i===null?(t.next=t,eo(r)):(t.next=i.next,i.next=t),r.interleaved=t,no(e,n)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ut(e,n)}}function lo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var i=e.updateQueue;ro=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=ae({},d,f);break a;case 2:ro=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);rl|=o,e.lanes=o,e.memoizedState=d}}function fo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var po={},mo=Ki(po),ho=Ki(po),go=Ki(po);function _o(e){if(e===po)throw Error(r(174));return e}function vo(e,t){switch(Ji(go,t),Ji(ho,e),Ji(mo,po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:je(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=je(t,e)}qi(mo),Ji(mo,t)}function yo(){qi(mo),qi(ho),qi(go)}function bo(e){_o(go.current);var t=_o(mo.current),n=je(t,e.type);t!==n&&(Ji(ho,e),Ji(mo,n))}function xo(e){ho.current===e&&(qi(mo),qi(ho))}var So=Ki(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=[];function To(){for(var e=0;e<wo.length;e++)wo[e]._workInProgressVersionPrimary=null;wo.length=0}var Eo=C.ReactCurrentDispatcher,Do=C.ReactCurrentBatchConfig,Oo=0,ko=null,Ao=null,jo=null,Mo=!1,No=!1,Po=0,Fo=0;function Io(){throw Error(r(321))}function Lo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function Ro(e,t,n,i,a,o){if(Oo=o,ko=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?xs:Ss,e=n(i,a),No){o=0;do{if(No=!1,Po=0,25<=o)throw Error(r(301));o+=1,jo=Ao=null,t.updateQueue=null,Eo.current=Cs,e=n(i,a)}while(No)}if(Eo.current=bs,t=Ao!==null&&Ao.next!==null,Oo=0,jo=Ao=ko=null,Mo=!1,t)throw Error(r(300));return e}function zo(){var e=Po!==0;return Po=0,e}function Bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jo===null?ko.memoizedState=jo=e:jo=jo.next=e,jo}function Vo(){if(Ao===null){var e=ko.alternate;e=e===null?null:e.memoizedState}else e=Ao.next;var t=jo===null?ko.memoizedState:jo.next;if(t!==null)jo=t,Ao=e;else{if(e===null)throw Error(r(310));Ao=e,e={memoizedState:Ao.memoizedState,baseState:Ao.baseState,baseQueue:Ao.baseQueue,queue:Ao.queue,next:null},jo===null?ko.memoizedState=jo=e:jo=jo.next=e}return jo}function Ho(e,t){return typeof t==`function`?t(e):t}function Uo(e){var t=Vo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Ao,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Oo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,ko.lanes|=d,rl|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Mr(i,t.memoizedState)||(Vs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,ko.lanes|=o,rl|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wo(e){var t=Vo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Mr(o,t.memoizedState)||(Vs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Go(){}function Ko(e,t){var n=ko,i=Vo(),a=t(),o=!Mr(i.memoizedState,a);if(o&&(i.memoizedState=a,Vs=!0),i=i.queue,is(Yo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||jo!==null&&jo.memoizedState.tag&1){if(n.flags|=2048,$o(9,Jo.bind(null,n,i,a,t),void 0,null),Xc===null)throw Error(r(349));Oo&30||qo(n,t,a)}return a}function qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ko.updateQueue,t===null?(t={lastEffect:null,stores:null},ko.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jo(e,t,n,r){t.value=n,t.getSnapshot=r,Xo(t)&&Zo(e)}function Yo(e,t,n){return n(function(){Xo(t)&&Zo(e)})}function Xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function Zo(e){var t=no(e,1);t!==null&&Sl(t,e,1,-1)}function Qo(e){var t=Bo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t.queue=e,e=e.dispatch=gs.bind(null,ko,e),[t.memoizedState,e]}function $o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ko.updateQueue,t===null?(t={lastEffect:null,stores:null},ko.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function es(){return Vo().memoizedState}function ts(e,t,n,r){var i=Bo();ko.flags|=e,i.memoizedState=$o(1|t,n,void 0,r===void 0?null:r)}function ns(e,t,n,r){var i=Vo();r=r===void 0?null:r;var a=void 0;if(Ao!==null){var o=Ao.memoizedState;if(a=o.destroy,r!==null&&Lo(r,o.deps)){i.memoizedState=$o(t,n,a,r);return}}ko.flags|=e,i.memoizedState=$o(1|t,n,a,r)}function rs(e,t){return ts(8390656,8,e,t)}function is(e,t){return ns(2048,8,e,t)}function as(e,t){return ns(4,2,e,t)}function os(e,t){return ns(4,4,e,t)}function ss(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cs(e,t,n){return n=n==null?null:n.concat([e]),ns(4,4,ss.bind(null,t,e),n)}function ls(){}function us(e,t){var n=Vo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ds(e,t){var n=Vo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fs(e,t,n){return Oo&21?(Mr(n,t)||(n=zt(),ko.lanes|=n,rl|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Vs=!0),e.memoizedState=n)}function ps(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Do.transition;Do.transition={};try{e(!1),t()}finally{R=n,Do.transition=r}}function ms(){return Vo().memoizedState}function hs(e,t,n){var r=xl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_s(e))vs(t,n);else if(n=to(e,t,n,r),n!==null){var i=bl();Sl(n,e,r,i),ys(n,t,r)}}function gs(e,t,n){var r=xl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_s(e))vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o)){var c=t.interleaved;c===null?(i.next=i,eo(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=to(e,t,i,r),n!==null&&(i=bl(),Sl(n,e,r,i),ys(n,t,r))}}function _s(e){var t=e.alternate;return e===ko||t!==null&&t===ko}function vs(e,t){No=Mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ys(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ut(e,n)}}var bs={readContext:Qa,useCallback:Io,useContext:Io,useEffect:Io,useImperativeHandle:Io,useInsertionEffect:Io,useLayoutEffect:Io,useMemo:Io,useReducer:Io,useRef:Io,useState:Io,useDebugValue:Io,useDeferredValue:Io,useTransition:Io,useMutableSource:Io,useSyncExternalStore:Io,useId:Io,unstable_isNewReconciler:!1},xs={readContext:Qa,useCallback:function(e,t){return Bo().memoizedState=[e,t===void 0?null:t],e},useContext:Qa,useEffect:rs,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),ts(4194308,4,ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return ts(4,2,e,t)},useMemo:function(e,t){var n=Bo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hs.bind(null,ko,e),[r.memoizedState,e]},useRef:function(e){var t=Bo();return e={current:e},t.memoizedState=e},useState:Qo,useDebugValue:ls,useDeferredValue:function(e){return Bo().memoizedState=e},useTransition:function(){var e=Qo(!1),t=e[0];return e=ps.bind(null,e[1]),Bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ko,a=Bo();if(Da){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Xc===null)throw Error(r(349));Oo&30||qo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,rs(Yo.bind(null,i,o,e),[e]),i.flags|=2048,$o(9,Jo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Bo(),t=Xc.identifierPrefix;if(Da){var n=ba,r=ya;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Po++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Fo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},Ss={readContext:Qa,useCallback:us,useContext:Qa,useEffect:is,useImperativeHandle:cs,useInsertionEffect:as,useLayoutEffect:os,useMemo:ds,useReducer:Uo,useRef:es,useState:function(){return Uo(Ho)},useDebugValue:ls,useDeferredValue:function(e){return fs(Vo(),Ao.memoizedState,e)},useTransition:function(){return[Uo(Ho)[0],Vo().memoizedState]},useMutableSource:Go,useSyncExternalStore:Ko,useId:ms,unstable_isNewReconciler:!1},Cs={readContext:Qa,useCallback:us,useContext:Qa,useEffect:is,useImperativeHandle:cs,useInsertionEffect:as,useLayoutEffect:os,useMemo:ds,useReducer:Wo,useRef:es,useState:function(){return Wo(Ho)},useDebugValue:ls,useDeferredValue:function(e){var t=Vo();return Ao===null?t.memoizedState=e:fs(t,Ao.memoizedState,e)},useTransition:function(){return[Wo(Ho)[0],Vo().memoizedState]},useMutableSource:Go,useSyncExternalStore:Ko,useId:ms,unstable_isNewReconciler:!1};function ws(e,t){if(e&&e.defaultProps){for(var n in t=ae({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Es={isMounted:function(e){return(e=e._reactInternals)?ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=bl(),i=xl(e),a=oo(r,i);a.payload=t,n!=null&&(a.callback=n),t=so(e,a,i),t!==null&&(Sl(t,e,i,r),co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=bl(),i=xl(e),a=oo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=so(e,a,i),t!==null&&(Sl(t,e,i,r),co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bl(),r=xl(e),i=oo(n,r);i.tag=2,t!=null&&(i.callback=t),t=so(e,i,r),t!==null&&(Sl(t,e,r,n),co(t,e,r))}};function Ds(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Os(e,t,n){var r=!1,i=Yi,a=t.contextType;return typeof a==`object`&&a?a=Qa(a):(i=ea(t)?Qi:Xi.current,r=t.contextTypes,a=(r=r!=null)?$i(e,i):Yi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Es,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Es.enqueueReplaceState(t,t.state,null)}function As(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},io(e);var a=t.contextType;typeof a==`object`&&a?i.context=Qa(a):(a=ea(t)?Qi:Xi.current,i.context=$i(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Ts(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Es.enqueueReplaceState(i,i.state,null),uo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function js(e,t){try{var n=``,r=t;do n+=ue(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ns(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ps=typeof WeakMap==`function`?WeakMap:Map;function Fs(e,t,n){n=oo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){dl||(dl=!0,fl=r),Ns(e,t)},n}function Is(e,t,n){n=oo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ns(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ns(e,t),typeof r!=`function`&&(pl===null?pl=new Set([this]):pl.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ps;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ql.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function zs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=oo(-1,1),t.tag=2,so(n,t,1))),n.lanes|=1),e)}var Bs=C.ReactCurrentOwner,Vs=!1;function Hs(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function Us(e,t,n,r,i){n=n.render;var a=t.ref;return Za(t,i),r=Ro(e,t,n,r,a,i),n=zo(),e!==null&&!Vs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cc(e,t,i)):(Da&&n&&Ca(t),t.flags|=1,Hs(e,t,r,i),t.child)}function Ws(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!tu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Gs(e,t,a,r,i)):(e=iu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return cc(e,t,i)}return t.flags|=1,e=ru(a,r),e.ref=t.ref,e.return=t,t.child=e}function Gs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref)if(Vs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Vs=!0);else return t.lanes=e.lanes,cc(e,t,i)}return Js(e,t,n,r,i)}function Ks(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ji(el,$c),$c|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ji(el,$c),$c|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,Ji(el,$c),$c|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),Ji(el,$c),$c|=r;return Hs(e,t,i,n),t.child}function qs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Js(e,t,n,r,i){var a=ea(n)?Qi:Xi.current;return a=$i(t,a),Za(t,i),n=Ro(e,t,n,r,a,i),r=zo(),e!==null&&!Vs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cc(e,t,i)):(Da&&r&&Ca(t),t.flags|=1,Hs(e,t,n,i),t.child)}function Ys(e,t,n,r,i){if(ea(n)){var a=!0;ia(t)}else a=!1;if(Za(t,i),t.stateNode===null)sc(e,t),Os(t,n,r),As(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Qa(l):(l=ea(n)?Qi:Xi.current,l=$i(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&ks(t,o,r,l),ro=!1;var f=t.memoizedState;o.state=f,uo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Zi.current||ro?(typeof u==`function`&&(Ts(t,n,u,r),c=t.memoizedState),(s=ro||Ds(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ao(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:ws(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Qa(c):(c=ea(n)?Qi:Xi.current,c=$i(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&ks(t,o,r,c),ro=!1,f=t.memoizedState,o.state=f,uo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Zi.current||ro?(typeof p==`function`&&(Ts(t,n,p,r),m=t.memoizedState),(l=ro||Ds(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Xs(e,t,n,r,a,i)}function Xs(e,t,n,r,i,a){qs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&aa(t,n,!1),cc(e,t,a);r=t.stateNode,Bs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ha(t,e.child,null,a),t.child=Ha(t,null,s,a)):Hs(e,t,s,a),t.memoizedState=r.state,i&&aa(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?na(e,t.pendingContext,t.pendingContext!==t.context):t.context&&na(e,t.context,!1),vo(e,t.containerInfo)}function Qs(e,t,n,r,i){return Fa(),Ia(i),t.flags|=256,Hs(e,t,n,r),t.child}var U={dehydrated:null,treeContext:null,retryLane:0};function $s(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,t,n){var r=t.pendingProps,i=So.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ji(So,i&1),e===null)return Ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ou(o,r,0,null),e=au(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=$s(n),t.memoizedState=U,e):tc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return rc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ru(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=au(a,o,n,null),a.flags|=2):a=ru(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?$s(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=U,r}return a=e.child,e=a.sibling,r=ru(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tc(e,t){return t=ou({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function nc(e,t,n,r){return r!==null&&Ia(r),Ha(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Ms(Error(r(422))),nc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=ou({mode:`visible`,children:i.children},a,0,null),o=au(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ha(t,e.child,null,s),t.child.memoizedState=$s(s),t.memoizedState=U,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return nc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Ms(o,i,void 0),nc(e,t,s,i)}if(c=(s&e.childLanes)!==0,Vs||c){if(i=Xc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,no(e,a),Sl(i,e,a,-1))}return Il(),i=Ms(Error(r(421))),nc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Yl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ea=ji(a.nextSibling),Ta=t,Da=!0,Oa=null,e!==null&&(ga[_a++]=ya,ga[_a++]=ba,ga[_a++]=va,ya=e.id,ba=e.overflow,va=t),t=tc(t,i.children),t.flags|=4096,t)}function ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xa(e.return,t,n)}function ac(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Hs(e,t,r.children,n),r=So.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,n,t);else if(e.tag===19)ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ji(So,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ac(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ac(t,!0,n,null,a);break;case`together`:ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rl|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=ru(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ru(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lc(e,t,n){switch(t.tag){case 3:Zs(t),Fa();break;case 5:bo(t);break;case 1:ea(t.type)&&ia(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ji(Wa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ji(So,So.current&1),e=cc(e,t,n),e===null?null:e.sibling):ec(e,t,n):(Ji(So,So.current&1),t.flags|=128,null);Ji(So,So.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ji(So,So.current),r)break;return null;case 22:case 23:return t.lanes=0,Ks(e,t,n)}return cc(e,t,n)}var uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},dc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_o(mo.current);var o=null;switch(n){case`input`:i=ye(e,i),r=ye(e,r),o=[];break;case`select`:i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),o=[];break;case`textarea`:i=P(e,i),r=P(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Si)}ze(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&ui(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function pc(e,t){if(!Da)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hc(e,t,n){var i=t.pendingProps;switch(wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mc(t),null;case 1:return ea(t.type)&&ta(),mc(t),null;case 3:return i=t.stateNode,yo(),qi(Zi),qi(Xi),To(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Na(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oa!==null&&(El(Oa),Oa=null))),mc(t),null;case 5:xo(t);var o=_o(go.current);if(n=t.type,e!==null&&t.stateNode!=null)dc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return mc(t),null}if(e=_o(mo.current),Na(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Pi]=t,i[Fi]=s,e=(t.mode&1)!=0,n){case`dialog`:ui(`cancel`,i),ui(`close`,i);break;case`iframe`:case`object`:case`embed`:ui(`load`,i);break;case`video`:case`audio`:for(o=0;o<oi.length;o++)ui(oi[o],i);break;case`source`:ui(`error`,i);break;case`img`:case`image`:case`link`:ui(`error`,i),ui(`load`,i);break;case`details`:ui(`toggle`,i);break;case`input`:be(i,s),ui(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},ui(`invalid`,i);break;case`textarea`:De(i,s),ui(`invalid`,i)}for(var c in ze(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&B(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&B(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&ui(`scroll`,i)}switch(n){case`input`:ge(i),Ce(i,s,!0);break;case`textarea`:ge(i),ke(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Si)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Ae(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Pi]=t,e[Fi]=i,uc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Be(n,i),n){case`dialog`:ui(`cancel`,e),ui(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:ui(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<oi.length;o++)ui(oi[o],e);o=i;break;case`source`:ui(`error`,e),o=i;break;case`img`:case`image`:case`link`:ui(`error`,e),ui(`load`,e),o=i;break;case`details`:ui(`toggle`,e),o=i;break;case`input`:be(e,i),o=ye(e,i),ui(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=ae({},i,{value:void 0}),ui(`invalid`,e);break;case`textarea`:De(e,i),o=P(e,i),ui(`invalid`,e);break;default:o=i}for(s in ze(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Le(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Me(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Ne(e,u):typeof u==`number`&&Ne(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&ui(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:ge(e),Ce(e,i,!1);break;case`textarea`:ge(e),ke(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+pe(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ee(e,!!i.multiple,i.defaultValue,!0):Ee(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Si)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mc(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=_o(go.current),_o(mo.current),Na(t)){if(i=t.stateNode,n=t.memoizedProps,i[Pi]=t,(s=i.nodeValue!==n)&&(e=Ta,e!==null))switch(e.tag){case 3:B(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&B(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Pi]=t,t.stateNode=i}return mc(t),null;case 13:if(qi(So),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Da&&Ea!==null&&t.mode&1&&!(t.flags&128))Pa(),Fa(),t.flags|=98560,s=!1;else if(s=Na(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Pi]=t}else Fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mc(t),s=!1}else Oa!==null&&(El(Oa),Oa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||So.current&1?tl===0&&(tl=3):Il())),t.updateQueue!==null&&(t.flags|=4),mc(t),null);case 4:return yo(),e===null&&pi(t.stateNode.containerInfo),mc(t),null;case 10:return Ya(t.type._context),mc(t),null;case 17:return ea(t.type)&&ta(),mc(t),null;case 19:if(qi(So),s=t.memoizedState,s===null)return mc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)pc(s,!1);else{if(tl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Co(e),c!==null){for(t.flags|=128,pc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ji(So,So.current&1|2),t.child}e=e.sibling}s.tail!==null&&I()>ll&&(t.flags|=128,i=!0,pc(s,!1),t.lanes=4194304)}else{if(!i)if(e=Co(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!Da)return mc(t),null}else 2*I()-s.renderingStartTime>ll&&n!==1073741824&&(t.flags|=128,i=!0,pc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(mc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=I(),t.sibling=null,n=So.current,Ji(So,i?n&1|2:n&1),t);case 22:case 23:return Ml(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?$c&1073741824&&(mc(t),t.subtreeFlags&6&&(t.flags|=8192)):mc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function gc(e,t){switch(wa(t),t.tag){case 1:return ea(t.type)&&ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yo(),qi(Zi),qi(Xi),To(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(qi(So),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qi(So),null;case 4:return yo(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var _c=!1,vc=!1,yc=typeof WeakSet==`function`?WeakSet:Set,W=null;function bc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Kl(e,t,n)}else n.current=null}function xc(e,t,n){try{n()}catch(n){Kl(e,t,n)}}var Sc=!1;function Cc(e,t){if(Ci=gn,e=Lr(),Rr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(wi={focusedElem:e,selectionRange:n},gn=!1,W=t;W!==null;)if(t=W,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ws(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Kl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return h=Sc,Sc=!1,h}function wc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&xc(t,n,a)}i=i.next}while(i!==r)}}function Tc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Dc(e){var t=e.alternate;t!==null&&(e.alternate=null,Dc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pi],delete t[Fi],delete t[Li],delete t[Ri],delete t[zi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oc(e){return e.tag===5||e.tag===3||e.tag===4}function kc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}function jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jc(e,t,n),e=e.sibling;e!==null;)jc(e,t,n),e=e.sibling}var Mc=null,Nc=!1;function Pc(e,t,n){for(n=n.child;n!==null;)Fc(e,t,n),n=n.sibling}function Fc(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount==`function`)try{Dt.onCommitFiberUnmount(Et,n)}catch{}switch(n.tag){case 5:vc||bc(n,t);case 6:var r=Mc,i=Nc;Mc=null,Pc(e,t,n),Mc=r,Nc=i,Mc!==null&&(Nc?(e=Mc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Mc.removeChild(n.stateNode));break;case 18:Mc!==null&&(Nc?(e=Mc,n=n.stateNode,e.nodeType===8?Ai(e.parentNode,n):e.nodeType===1&&Ai(e,n),mn(e)):Ai(Mc,n.stateNode));break;case 4:r=Mc,i=Nc,Mc=n.stateNode.containerInfo,Nc=!0,Pc(e,t,n),Mc=r,Nc=i;break;case 0:case 11:case 14:case 15:if(!vc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&xc(n,t,o),i=i.next}while(i!==r)}Pc(e,t,n);break;case 1:if(!vc&&(bc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Kl(n,t,e)}Pc(e,t,n);break;case 21:Pc(e,t,n);break;case 22:n.mode&1?(vc=(r=vc)||n.memoizedState!==null,Pc(e,t,n),vc=r):Pc(e,t,n);break;default:Pc(e,t,n)}}function Ic(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yc),t.forEach(function(t){var r=Xl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Lc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Mc=c.stateNode,Nc=!1;break a;case 3:Mc=c.stateNode.containerInfo,Nc=!0;break a;case 4:Mc=c.stateNode.containerInfo,Nc=!0;break a}c=c.return}if(Mc===null)throw Error(r(160));Fc(o,s,a),Mc=null,Nc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Kl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rc(t,e),t=t.sibling}function Rc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lc(t,e),zc(e),i&4){try{wc(3,e,e.return),Tc(3,e)}catch(t){Kl(e,e.return,t)}try{wc(5,e,e.return)}catch(t){Kl(e,e.return,t)}}break;case 1:Lc(t,e),zc(e),i&512&&n!==null&&bc(n,n.return);break;case 5:if(Lc(t,e),zc(e),i&512&&n!==null&&bc(n,n.return),e.flags&32){var a=e.stateNode;try{Ne(a,``)}catch(t){Kl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&xe(a,o),Be(c,s);var u=Be(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Le(a,f):d===`dangerouslySetInnerHTML`?Me(a,f):d===`children`?Ne(a,f):S(a,d,f,u)}switch(c){case`input`:Se(a,o);break;case`textarea`:Oe(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ee(a,!!o.multiple,o.multiple?[]:``,!1):Ee(a,!!o.multiple,o.defaultValue,!0)):Ee(a,!!o.multiple,m,!1)}a[Fi]=o}catch(t){Kl(e,e.return,t)}}break;case 6:if(Lc(t,e),zc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Kl(e,e.return,t)}}break;case 3:if(Lc(t,e),zc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{mn(t.containerInfo)}catch(t){Kl(e,e.return,t)}break;case 4:Lc(t,e),zc(e);break;case 13:Lc(t,e),zc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(cl=I())),i&4&&Ic(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(vc=(u=vc)||d,Lc(t,e),vc=u):Lc(t,e),zc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(p=W,m=p.child,p.tag){case 0:case 11:case 14:case 15:wc(4,p,p.return);break;case 1:bc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Kl(i,n,e)}}break;case 5:bc(p,p.return);break;case 22:if(p.memoizedState!==null){Uc(f);continue}}m===null?Uc(f):(m.return=p,W=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ie(`display`,s))}catch(t){Kl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Kl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lc(t,e),zc(e),i&4&&Ic(e);break;case 21:break;default:Lc(t,e),zc(e)}}function zc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Oc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ne(a,``),i.flags&=-33),jc(e,kc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Ac(e,kc(e),o);break;default:throw Error(r(161))}}catch(t){Kl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bc(e,t,n){W=e,Vc(e,t,n)}function Vc(e,t,n){for(var r=(e.mode&1)!=0;W!==null;){var i=W,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_c;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||vc;s=_c;var l=vc;if(_c=o,(vc=c)&&!l)for(W=i;W!==null;)o=W,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Wc(i):(c.return=o,W=c);for(;a!==null;)W=a,Vc(a,t,n),a=a.sibling;W=i,_c=s,vc=l}Hc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,W=a):Hc(e,t,n)}}function Hc(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:vc||Tc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!vc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ws(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&fo(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fo(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&mn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}vc||t.flags&512&&Ec(t)}catch(e){Kl(t,t.return,e)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Uc(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Wc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tc(4,t)}catch(e){Kl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Kl(t,i,e)}}var a=t.return;try{Ec(t)}catch(e){Kl(t,a,e)}break;case 5:var o=t.return;try{Ec(t)}catch(e){Kl(t,o,e)}}}catch(e){Kl(t,t.return,e)}if(t===e){W=null;break}var s=t.sibling;if(s!==null){s.return=t.return,W=s;break}W=t.return}}var Gc=Math.ceil,Kc=C.ReactCurrentDispatcher,qc=C.ReactCurrentOwner,Jc=C.ReactCurrentBatchConfig,Yc=0,Xc=null,Zc=null,Qc=0,$c=0,el=Ki(0),tl=0,nl=null,rl=0,il=0,al=0,ol=null,sl=null,cl=0,ll=1/0,ul=null,dl=!1,fl=null,pl=null,G=!1,ml=null,hl=0,gl=0,_l=null,vl=-1,yl=0;function bl(){return Yc&6?I():vl===-1?vl=I():vl}function xl(e){return e.mode&1?Yc&2&&Qc!==0?Qc&-Qc:La.transition===null?(e=R,e===0?(e=window.event,e=e===void 0?16:Sn(e.type),e):e):(yl===0&&(yl=zt()),yl):1}function Sl(e,t,n,i){if(50<gl)throw gl=0,_l=null,Error(r(185));Vt(e,n,i),(!(Yc&2)||e!==Xc)&&(e===Xc&&(!(Yc&2)&&(il|=n),tl===4&&Ol(e,Qc)),Cl(e,i),n===1&&Yc===0&&!(t.mode&1)&&(ll=I()+500,sa&&da()))}function Cl(e,t){var n=e.callbackNode;Lt(e,t);var r=Ft(e,e===Xc?Qc:0);if(r===0)n!==null&&_t(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_t(n),t===1)e.tag===0?ua(kl.bind(null,e)):la(kl.bind(null,e)),Oi(function(){!(Yc&6)&&da()}),n=null;else{switch(Wt(r)){case 1:n=xt;break;case 4:n=St;break;case 16:n=Ct;break;case 536870912:n=Tt;break;default:n=Ct}n=Ql(n,wl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wl(e,t){if(vl=-1,yl=0,Yc&6)throw Error(r(327));var n=e.callbackNode;if(Wl()&&e.callbackNode!==n)return null;var i=Ft(e,e===Xc?Qc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Ll(e,i);else{t=i;var a=Yc;Yc|=2;var o=Fl();(Xc!==e||Qc!==t)&&(ul=null,ll=I()+500,Nl(e,t));do try{zl();break}catch(t){Pl(e,t)}while(1);Ja(),Kc.current=o,Yc=a,Zc===null?(Xc=null,Qc=0,t=tl):t=0}if(t!==0){if(t===2&&(a=Rt(e),a!==0&&(i=a,t=Tl(e,a))),t===1)throw n=nl,Nl(e,0),Ol(e,i),Cl(e,I()),n;if(t===6)Ol(e,i);else{if(a=e.current.alternate,!(i&30)&&!Dl(a)&&(t=Ll(e,i),t===2&&(o=Rt(e),o!==0&&(i=o,t=Tl(e,o))),t===1))throw n=nl,Nl(e,0),Ol(e,i),Cl(e,I()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Hl(e,sl,ul);break;case 3:if(Ol(e,i),(i&130023424)===i&&(t=cl+500-I(),10<t)){if(Ft(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){bl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ei(Hl.bind(null,e,sl,ul),t);break}Hl(e,sl,ul);break;case 4:if(Ol(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-kt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=I()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Gc(i/1960))-i,10<i){e.timeoutHandle=Ei(Hl.bind(null,e,sl,ul),i);break}Hl(e,sl,ul);break;case 5:Hl(e,sl,ul);break;default:throw Error(r(329))}}}return Cl(e,I()),e.callbackNode===n?wl.bind(null,e):null}function Tl(e,t){var n=ol;return e.current.memoizedState.isDehydrated&&(Nl(e,t).flags|=256),e=Ll(e,t),e!==2&&(t=sl,sl=n,t!==null&&El(t)),e}function El(e){sl===null?sl=e:sl.push.apply(sl,e)}function Dl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ol(e,t){for(t&=~al,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function kl(e){if(Yc&6)throw Error(r(327));Wl();var t=Ft(e,0);if(!(t&1))return Cl(e,I()),null;var n=Ll(e,t);if(e.tag!==0&&n===2){var i=Rt(e);i!==0&&(t=i,n=Tl(e,i))}if(n===1)throw n=nl,Nl(e,0),Ol(e,t),Cl(e,I()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hl(e,sl,ul),Cl(e,I()),null}function Al(e,t){var n=Yc;Yc|=1;try{return e(t)}finally{Yc=n,Yc===0&&(ll=I()+500,sa&&da())}}function jl(e){ml!==null&&ml.tag===0&&!(Yc&6)&&Wl();var t=Yc;Yc|=1;var n=Jc.transition,r=R;try{if(Jc.transition=null,R=1,e)return e()}finally{R=r,Jc.transition=n,Yc=t,!(Yc&6)&&da()}}function Ml(){$c=el.current,qi(el)}function Nl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Di(n)),Zc!==null)for(n=Zc.return;n!==null;){var r=n;switch(wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ta();break;case 3:yo(),qi(Zi),qi(Xi),To();break;case 5:xo(r);break;case 4:yo();break;case 13:qi(So);break;case 19:qi(So);break;case 10:Ya(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(Xc=e,Zc=e=ru(e.current,null),Qc=$c=t,tl=0,nl=null,al=il=rl=0,sl=ol=null,$a!==null){for(t=0;t<$a.length;t++)if(n=$a[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}$a=null}return e}function Pl(e,t){do{var n=Zc;try{if(Ja(),Eo.current=bs,Mo){for(var i=ko.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Mo=!1}if(Oo=0,jo=Ao=ko=null,No=!1,Po=0,qc.current=null,n===null||n.return===null){tl=1,nl=t,Zc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Qc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Rs(s);if(m!==null){m.flags&=-257,zs(m,s,c,o,t),m.mode&1&&Ls(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Ls(o,u,t),Il();break a}l=Error(r(426))}}else if(Da&&c.mode&1){var _=Rs(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),zs(_,s,c,o,t),Ia(js(l,c));break a}}o=l=js(l,c),tl!==4&&(tl=2),ol===null?ol=[o]:ol.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Fs(o,l,t);lo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(pl===null||!pl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Is(o,c,t);lo(o,x);break a}}o=o.return}while(o!==null)}Vl(n)}catch(e){t=e,Zc===n&&n!==null&&(Zc=n=n.return);continue}break}while(1)}function Fl(){var e=Kc.current;return Kc.current=bs,e===null?bs:e}function Il(){(tl===0||tl===3||tl===2)&&(tl=4),Xc===null||!(rl&268435455)&&!(il&268435455)||Ol(Xc,Qc)}function Ll(e,t){var n=Yc;Yc|=2;var i=Fl();(Xc!==e||Qc!==t)&&(ul=null,Nl(e,t));do try{Rl();break}catch(t){Pl(e,t)}while(1);if(Ja(),Yc=n,Kc.current=i,Zc!==null)throw Error(r(261));return Xc=null,Qc=0,tl}function Rl(){for(;Zc!==null;)Bl(Zc)}function zl(){for(;Zc!==null&&!vt();)Bl(Zc)}function Bl(e){var t=Zl(e.alternate,e,$c);e.memoizedProps=e.pendingProps,t===null?Vl(e):Zc=t,qc.current=null}function Vl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gc(n,t),n!==null){n.flags&=32767,Zc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tl=6,Zc=null;return}}else if(n=hc(n,t,$c),n!==null){Zc=n;return}if(t=t.sibling,t!==null){Zc=t;return}Zc=t=e}while(t!==null);tl===0&&(tl=5)}function Hl(e,t,n){var r=R,i=Jc.transition;try{Jc.transition=null,R=1,Ul(e,t,n,r)}finally{Jc.transition=i,R=r}return null}function Ul(e,t,n,i){do Wl();while(ml!==null);if(Yc&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ht(e,o),e===Xc&&(Zc=Xc=null,Qc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||G||(G=!0,Ql(Ct,function(){return Wl(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Jc.transition,Jc.transition=null;var s=R;R=1;var c=Yc;Yc|=4,qc.current=null,Cc(e,n),Rc(n,e),zr(wi),gn=!!Ci,wi=Ci=null,e.current=n,Bc(n,e,a),yt(),Yc=c,R=s,Jc.transition=o}else e.current=n;if(G&&(G=!1,ml=e,hl=a),o=e.pendingLanes,o===0&&(pl=null),Ot(n.stateNode,i),Cl(e,I()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(dl)throw dl=!1,e=fl,fl=null,e;return hl&1&&e.tag!==0&&Wl(),o=e.pendingLanes,o&1?e===_l?gl++:(gl=0,_l=e):gl=0,da(),null}function Wl(){if(ml!==null){var e=Wt(hl),t=Jc.transition,n=R;try{if(Jc.transition=null,R=16>e?16:e,ml===null)var i=!1;else{if(e=ml,ml=null,hl=0,Yc&6)throw Error(r(331));var a=Yc;for(Yc|=4,W=e.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:wc(8,d,o)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var p=d.sibling,m=d.return;if(Dc(d),d===u){W=null;break}if(p!==null){p.return=m,W=p;break}W=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else b:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,W=v;break b}W=o.return}}var y=e.current;for(W=y;W!==null;){s=W;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,W=b;else b:for(s=y;W!==null;){if(c=W,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Tc(9,c)}}catch(e){Kl(c,c.return,e)}if(c===s){W=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,W=x;break b}W=c.return}}if(Yc=a,da(),Dt&&typeof Dt.onPostCommitFiberRoot==`function`)try{Dt.onPostCommitFiberRoot(Et,e)}catch{}i=!0}return i}finally{R=n,Jc.transition=t}}return!1}function Gl(e,t,n){t=js(n,t),t=Fs(e,t,1),e=so(e,t,1),t=bl(),e!==null&&(Vt(e,1,t),Cl(e,t))}function Kl(e,t,n){if(e.tag===3)Gl(e,e,n);else for(;t!==null;){if(t.tag===3){Gl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(pl===null||!pl.has(r))){e=js(n,e),e=Is(t,e,1),t=so(t,e,1),e=bl(),t!==null&&(Vt(t,1,e),Cl(t,e));break}}t=t.return}}function ql(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=bl(),e.pingedLanes|=e.suspendedLanes&n,Xc===e&&(Qc&n)===n&&(tl===4||tl===3&&(Qc&130023424)===Qc&&500>I()-cl?Nl(e,0):al|=n),Cl(e,t)}function Jl(e,t){t===0&&(e.mode&1?(t=Pt,Pt<<=1,!(Pt&130023424)&&(Pt=4194304)):t=1);var n=bl();e=no(e,t),e!==null&&(Vt(e,t,n),Cl(e,n))}function Yl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jl(e,n)}function Xl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Jl(e,n)}var Zl=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Zi.current)Vs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Vs=!1,lc(e,t,n);Vs=!!(e.flags&131072)}else Vs=!1,Da&&t.flags&1048576&&Sa(t,ha,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;sc(e,t),e=t.pendingProps;var a=$i(t,Xi.current);Za(t,n),a=Ro(null,t,i,e,a,n);var o=zo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ea(i)?(o=!0,ia(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,io(t),a.updater=Es,t.stateNode=a,a._reactInternals=t,As(t,i,e,n),t=Xs(null,t,i,!0,o,n)):(t.tag=0,Da&&o&&Ca(t),Hs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(sc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=nu(i),e=ws(i,e),a){case 0:t=Js(null,t,i,e,n);break a;case 1:t=Ys(null,t,i,e,n);break a;case 11:t=Us(null,t,i,e,n);break a;case 14:t=Ws(null,t,i,ws(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),Js(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),Ys(e,t,i,a,n);case 3:a:{if(Zs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,ao(e,t),uo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=js(Error(r(423)),t),t=Qs(e,t,i,n,a);break a}else if(i!==a){a=js(Error(r(424)),t),t=Qs(e,t,i,n,a);break a}else for(Ea=ji(t.stateNode.containerInfo.firstChild),Ta=t,Da=!0,Oa=null,n=Ua(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fa(),i===a){t=cc(e,t,n);break a}Hs(e,t,i,n)}t=t.child}return t;case 5:return bo(t),e===null&&Ma(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Ti(i,a)?s=null:o!==null&&Ti(i,o)&&(t.flags|=32),qs(e,t),Hs(e,t,s,n),t.child;case 6:return e===null&&Ma(t),null;case 13:return ec(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ha(t,null,i,n):Hs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),Us(e,t,i,a,n);case 7:return Hs(e,t,t.pendingProps,n),t.child;case 8:return Hs(e,t,t.pendingProps.children,n),t.child;case 12:return Hs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Ji(Wa,i._currentValue),i._currentValue=s,o!==null)if(Mr(o.value,s)){if(o.children===a.children&&!Zi.current){t=cc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=oo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xa(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Xa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Hs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Za(t,n),a=Qa(a),i=i(a),t.flags|=1,Hs(e,t,i,n),t.child;case 14:return i=t.type,a=ws(i,t.pendingProps),a=ws(i.type,a),Ws(e,t,i,a,n);case 15:return Gs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),sc(e,t),t.tag=1,ea(i)?(e=!0,ia(t)):e=!1,Za(t,n),Os(t,i,a),As(t,i,a,n),Xs(null,t,i,!0,e,n);case 19:return oc(e,t,n);case 22:return Ks(e,t,n)}throw Error(r(156,t.tag))};function Ql(e,t){return gt(e,t)}function $l(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function eu(e,t,n,r){return new $l(e,t,n,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nu(e){if(typeof e==`function`)return+!!tu(e);if(e!=null){if(e=e.$$typeof,e===j)return 11;if(e===M)return 14}return 2}function ru(e,t){var n=e.alternate;return n===null?(n=eu(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function iu(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)tu(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return au(n.children,a,o,t);case D:s=8,a|=8;break;case O:return e=eu(12,n,t,a|2),e.elementType=O,e.lanes=o,e;case ee:return e=eu(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=eu(19,n,t,a),e.elementType=te,e.lanes=o,e;case re:return ou(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case k:s=10;break a;case A:s=9;break a;case j:s=11;break a;case M:s=14;break a;case ne:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=eu(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function au(e,t,n,r){return e=eu(7,e,r,t),e.lanes=n,e}function ou(e,t,n,r){return e=eu(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function su(e,t,n){return e=eu(6,e,null,t),e.lanes=n,e}function cu(e,t,n){return t=eu(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uu(e,t,n,r,i,a,o,s,c){return e=new lu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=eu(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},io(a),e}function du(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function fu(e){if(!e)return Yi;e=e._reactInternals;a:{if(ut(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ea(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ea(n))return ra(e,n,t)}return t}function pu(e,t,n,r,i,a,o,s,c){return e=uu(n,r,!0,e,i,a,o,s,c),e.context=fu(null),n=e.current,r=bl(),i=xl(n),a=oo(r,i),a.callback=t??null,so(n,a,i),e.current.lanes=i,Vt(e,i,r),Cl(e,r),e}function mu(e,t,n,r){var i=t.current,a=bl(),o=xl(i);return n=fu(n),t.context===null?t.context=n:t.pendingContext=n,t=oo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=so(i,t,o),e!==null&&(Sl(e,i,o,a),co(e,i,o)),o}function hu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _u(e,t){gu(e,t),(e=e.alternate)&&gu(e,t)}function vu(){return null}var yu=typeof reportError==`function`?reportError:function(e){console.error(e)};function bu(e){this._internalRoot=e}xu.prototype.render=bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));mu(e,t,null,null)},xu.prototype.unmount=bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jl(function(){mu(null,e,null,null)}),t[Ii]=null}};function xu(e){this._internalRoot=e}xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&ln(e)}};function Su(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function wu(){}function Tu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=hu(o);a.call(e)}}var o=pu(t,r,e,0,null,!1,!1,``,wu);return e._reactRootContainer=o,e[Ii]=o.current,pi(e.nodeType===8?e.parentNode:e),jl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=hu(c);s.call(e)}}var c=uu(e,0,!1,null,null,!1,!1,``,wu);return e._reactRootContainer=c,e[Ii]=c.current,pi(e.nodeType===8?e.parentNode:e),jl(function(){mu(t,c,n,r)}),c}function Eu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=hu(o);s.call(e)}}mu(t,o,e,i)}else o=Tu(n,t,e,i,r);return hu(o)}Gt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=L(t.pendingLanes);n!==0&&(Ut(t,n|1),Cl(t,I()),!(Yc&6)&&(ll=I()+500,da()))}break;case 13:jl(function(){var t=no(e,1);t!==null&&Sl(t,e,1,bl())}),_u(e,1)}},Kt=function(e){if(e.tag===13){var t=no(e,134217728);t!==null&&Sl(t,e,134217728,bl()),_u(e,134217728)}},qt=function(e){if(e.tag===13){var t=xl(e),n=no(e,t);n!==null&&Sl(n,e,t,bl()),_u(e,t)}},Jt=function(){return R},Yt=function(e,t){var n=R;try{return R=e,t()}finally{R=n}},Ue=function(e,t,n){switch(t){case`input`:if(Se(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ui(i);if(!a)throw Error(r(90));_e(i),Se(i,a)}}}break;case`textarea`:Oe(e,n);break;case`select`:t=n.value,t!=null&&Ee(e,!!n.multiple,t,!1)}},Ye=Al,Xe=jl;var Du={usingClientEntryPoint:!1,Events:[Vi,Hi,Ui,qe,Je,Al]},Ou={findFiberByHostInstance:Bi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},ku={bundleType:Ou.bundleType,version:Ou.version,rendererPackageName:Ou.rendererPackageName,rendererConfig:Ou.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mt(e),e===null?null:e.stateNode},findFiberByHostInstance:Ou.findFiberByHostInstance||vu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Et=Au.inject(ku),Dt=Au}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Du,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(t))throw Error(r(200));return du(e,t,null,n)},e.createRoot=function(e,t){if(!Su(e))throw Error(r(299));var n=!1,i=``,a=yu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=uu(e,1,!1,null,null,n,!1,i,a),e[Ii]=t.current,pi(e.nodeType===8?e.parentNode:e),new bu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=mt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return jl(e)},e.hydrate=function(e,t,n){if(!Cu(t))throw Error(r(200));return Eu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!Su(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=yu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=pu(t,null,e,1,n??null,a,!1,o,s),e[Ii]=t.current,pi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new xu(t)},e.render=function(e,t,n){if(!Cu(t))throw Error(r(200));return Eu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!Cu(e))throw Error(r(40));return e._reactRootContainer?(jl(function(){Eu(null,null,e,!1,function(){e._reactRootContainer=null,e[Ii]=null})}),!0):!1},e.unstable_batchedUpdates=Al,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Cu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Eu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u()),_=h(),v=c(m());function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}var b;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(b||={});var x=`popstate`;function S(e){e===void 0&&(e={});function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=k(e.location.hash.substr(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),D(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:O(t))}function r(e,t){w(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(`+JSON.stringify(t)+`)`)}return A(t,n,r,e)}function C(e,t){if(e===!1||e==null)throw Error(t)}function w(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function T(){return Math.random().toString(36).substr(2,8)}function E(e,t){return{usr:e.state,key:e.key,idx:t}}function D(e,t,n,r){return n===void 0&&(n=null),y({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?k(t):t,{state:n,key:t&&t.key||r||T()})}function O(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function k(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function A(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=b.Pop,c=null,l=u();l??(l=0,o.replaceState(y({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=b.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=b.Push;let r=D(h.location,e,t);n&&n(r,e),l=u()+1;let d=E(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=b.Replace;let r=D(h.location,e,t);n&&n(r,e),l=u();let i=E(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:O(e);return n=n.replace(/ $/,`%20`),C(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(x,d),c=e,()=>{i.removeEventListener(x,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var j;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(j||={});function ee(e,t,n){return n===void 0&&(n=`/`),te(e,t,n,!1)}function te(e,t,n,r){let i=ge((typeof t==`string`?k(t):t).pathname||`/`,n);if(i==null)return null;let a=M(e);re(a);let o=null,s=he(i);for(let e=0;o==null&&e<a.length;++e)o=fe(a[e],s,r);return o}function M(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(C(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=Ee([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(C(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),M(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:ue(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of ne(e.path))i(e,t,n)}),t}function ne(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ne(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function re(e){e.sort((e,t)=>e.score===t.score?de(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var N=/^:[\w-]+$/,ie=3,ae=2,oe=1,se=10,ce=-2,le=e=>e===`*`;function ue(e,t){let n=e.split(`/`),r=n.length;return n.some(le)&&(r+=ce),t&&(r+=ae),n.filter(e=>!le(e)).reduce((e,t)=>e+(N.test(t)?ie:t===``?oe:se),r)}function de(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function fe(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=pe({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=pe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ee([a,u.pathname]),pathnameBase:P(Ee([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ee([a,u.pathnameBase]))}return o}function pe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=me(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return i&&!c?e[r]=void 0:e[r]=(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function me(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),w(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function he(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return w(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function ge(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var _e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ve=e=>_e.test(e);function ye(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?k(e):e,a;if(n)if(ve(n))a=n;else{if(n.includes(`//`)){let e=n;n=Te(n),w(!1,`Pathnames cannot have embedded double slashes - normalizing `+(e+` -> `+n))}a=n.startsWith(`/`)?be(n.substring(1),`/`):be(n,t)}else a=t;return{pathname:a,search:De(r),hash:Oe(i)}}function be(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function xe(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function Se(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ce(e,t){let n=Se(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function we(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=k(e):(i=y({},e),C(!i.pathname||!i.pathname.includes(`?`),xe(`?`,`pathname`,`search`,i)),C(!i.pathname||!i.pathname.includes(`#`),xe(`#`,`pathname`,`hash`,i)),C(!i.search||!i.search.includes(`#`),xe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=ye(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Te=e=>e.replace(/\/\/+/g,`/`),Ee=e=>Te(e.join(`/`)),P=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),De=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Oe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function ke(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var Ae=[`post`,`put`,`patch`,`delete`];new Set(Ae);var je=[`get`,...Ae];new Set(je);function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(null,arguments)}var Me=g.createContext(null),Ne=g.createContext(null),Pe=g.createContext(null),Fe=g.createContext(null),Ie=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Le=g.createContext(null);function Re(){return g.useContext(Fe)!=null}function ze(){return!Re()&&C(!1),g.useContext(Fe).location}function Be(e){g.useContext(Pe).static||g.useLayoutEffect(e)}function Ve(){let{isDataRoute:e}=g.useContext(Ie);return e?it():He()}function He(){!Re()&&C(!1);let e=g.useContext(Me),{basename:t,future:n,navigator:r}=g.useContext(Pe),{matches:i}=g.useContext(Ie),{pathname:a}=ze(),o=JSON.stringify(Ce(i,n.v7_relativeSplatPath)),s=g.useRef(!1);return Be(()=>{s.current=!0}),g.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=we(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ee([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}function Ue(){let{matches:e}=g.useContext(Ie),t=e[e.length-1];return t?t.params:{}}function We(e,t){return Ge(e,t)}function Ge(e,t,n,r){!Re()&&C(!1);let{navigator:i}=g.useContext(Pe),{matches:a}=g.useContext(Ie),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=ze(),u;if(t){let e=typeof t==`string`?k(t):t;!(c===`/`||e.pathname?.startsWith(c))&&C(!1),u=e}else u=l;let d=u.pathname||`/`,f=d;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);f=`/`+d.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let p=ee(e,{pathname:f}),m=Xe(p&&p.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:Ee([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ee([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&m?g.createElement(Fe.Provider,{value:{location:F({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:b.Pop}},m):m}function Ke(){let e=rt(),t=ke(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return g.createElement(g.Fragment,null,g.createElement(`h2`,null,`Unexpected Application Error!`),g.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?g.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var qe=g.createElement(Ke,null),Je=class extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:g.createElement(Ie.Provider,{value:this.props.routeContext},g.createElement(Le.Provider,{value:this.state.error,children:this.props.component}))}};function Ye(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(Me);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(Ie.Provider,{value:t},r)}function Xe(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&C(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||qe,s&&(c<0&&i===0?(ot(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?g.createElement(r.route.Component,null):r.route.element?r.route.element:e,g.createElement(Ye,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?g.createElement(Je,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var Ze=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(Ze||{}),Qe=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(Qe||{});function $e(e){let t=g.useContext(Me);return!t&&C(!1),t}function et(e){let t=g.useContext(Ne);return!t&&C(!1),t}function tt(e){let t=g.useContext(Ie);return!t&&C(!1),t}function nt(e){let t=tt(e),n=t.matches[t.matches.length-1];return!n.route.id&&C(!1),n.route.id}function rt(){let e=g.useContext(Le),t=et(Qe.UseRouteError),n=nt(Qe.UseRouteError);return e===void 0?t.errors?.[n]:e}function it(){let{router:e}=$e(Ze.UseNavigateStable),t=nt(Qe.UseNavigateStable),n=g.useRef(!1);return Be(()=>{n.current=!0}),g.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,F({fromRouteId:t},i)))},[e,t])}var at={};function ot(e,t,n){!t&&!at[e]&&(at[e]=!0)}var st=(e,t,n)=>(``+t+("You can use the `"+e+"` future flag to opt-in early. ")+(`For more information, see `+n+`.`),void 0);function ct(e,t){e?.v7_startTransition===void 0&&st(`v7_startTransition`,"React Router will begin wrapping state updates in `React.startTransition` in v7",`https://reactrouter.com/v6/upgrading/future#v7_starttransition`),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&st(`v7_relativeSplatPath`,`Relative route resolution within Splat routes is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`),t&&(t.v7_fetcherPersist===void 0&&st(`v7_fetcherPersist`,`The persistence behavior of fetchers is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`),t.v7_normalizeFormMethod===void 0&&st(`v7_normalizeFormMethod`,"Casing of `formMethod` fields is being normalized to uppercase in v7",`https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`),t.v7_partialHydration===void 0&&st(`v7_partialHydration`,"`RouterProvider` hydration behavior is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_partialhydration`),t.v7_skipActionErrorRevalidation===void 0&&st(`v7_skipActionErrorRevalidation`,"The revalidation behavior after 4xx/5xx `action` responses is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))}function lt(e){let{to:t,replace:n,state:r,relative:i}=e;!Re()&&C(!1);let{future:a,static:o}=g.useContext(Pe),{matches:s}=g.useContext(Ie),{pathname:c}=ze(),l=Ve(),u=we(t,Ce(s,a.v7_relativeSplatPath),c,i===`path`),d=JSON.stringify(u);return g.useEffect(()=>l(JSON.parse(d),{replace:n,state:r,relative:i}),[l,d,i,n,r]),null}function ut(e){C(!1)}function dt(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=b.Pop,navigator:a,static:o=!1,future:s}=e;Re()&&C(!1);let c=t.replace(/^\/*/,`/`),l=g.useMemo(()=>({basename:c,navigator:a,static:o,future:F({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=k(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=g.useMemo(()=>{let e=ge(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:g.createElement(Pe.Provider,{value:l},g.createElement(Fe.Provider,{children:n,value:h}))}function ft(e){let{children:t,location:n}=e;return We(mt(t),n)}var pt=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(pt||{});new Promise(()=>{}),g.Component;function mt(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(e,r)=>{if(!g.isValidElement(e))return;let i=[...t,r];if(e.type===g.Fragment){n.push.apply(n,mt(e.props.children,i));return}e.type!==ut&&C(!1),!(!e.props.index||!e.props.children)&&C(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=mt(e.props.children,i)),n.push(a)}),n}var ht=`6`;try{window.__reactRouterVersion=ht}catch{}var gt=g.startTransition;function _t(e){let{basename:t,children:n,future:r,window:i}=e,a=g.useRef();a.current??=S({window:i,v5Compat:!0});let o=a.current,[s,c]=g.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=g.useCallback(e=>{l&&gt?gt(()=>c(e)):c(e)},[c,l]);return g.useLayoutEffect(()=>o.listen(u),[o,u]),g.useEffect(()=>ct(r),[r]),g.createElement(dt,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}typeof window<`u`&&window.document!==void 0&&window.document.createElement;var vt;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(vt||={});var yt;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(yt||={});var I=`-ms-`,bt=`-moz-`,xt=`-webkit-`,St=`comm`,Ct=`rule`,wt=`decl`,Tt=`@import`,Et=`@namespace`,Dt=`@keyframes`,Ot=`@layer`,kt=Math.abs,At=String.fromCharCode,jt=Object.assign;function Mt(e,t){return It(e,0)^45?(((t<<2^It(e,0))<<2^It(e,1))<<2^It(e,2))<<2^It(e,3):0}function Nt(e){return e.trim()}function Pt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Ft(e,t,n){return e.indexOf(t,n)}function It(e,t){return e.charCodeAt(t)|0}function Lt(e,t,n){return e.slice(t,n)}function Rt(e){return e.length}function zt(e){return e.length}function Bt(e,t){return t.push(e),e}function Vt(e,t){return e.map(t).join(``)}function Ht(e,t){return e.filter(function(e){return!Pt(e,t)})}var Ut=1,R=1,Wt=0,Gt=0,Kt=0,qt=``;function Jt(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ut,column:R,length:o,return:``,siblings:s}}function Yt(e,t){return jt(Jt(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Xt(e){for(;e.root;)e=Yt(e.root,{children:[e]});Bt(e,e.siblings)}function Zt(){return Kt}function Qt(){return Kt=Gt>0?It(qt,--Gt):0,R--,Kt===10&&(R=1,Ut--),Kt}function $t(){return Kt=Gt<Wt?It(qt,Gt++):0,R++,Kt===10&&(R=1,Ut++),Kt}function en(){return It(qt,Gt)}function tn(){return Gt}function nn(e,t){return Lt(qt,e,t)}function rn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function an(e){return Ut=R=1,Wt=Rt(qt=e),Gt=0,[]}function on(e){return qt=``,e}function sn(e){return Nt(nn(Gt-1,un(e===91?e+2:e===40?e+1:e)))}function cn(e){for(;(Kt=en())&&Kt<33;)$t();return rn(e)>2||rn(Kt)>3?``:` `}function ln(e,t){for(;--t&&$t()&&!(Kt<48||Kt>102||Kt>57&&Kt<65||Kt>70&&Kt<97););return nn(e,tn()+(t<6&&en()==32&&$t()==32))}function un(e){for(;$t();)switch(Kt){case e:return Gt;case 34:case 39:e!==34&&e!==39&&un(Kt);break;case 40:e===41&&un(e);break;case 92:$t();break}return Gt}function dn(e,t){for(;$t()&&e+Kt!==57&&!(e+Kt===84&&en()===47););return`/*`+nn(t,Gt-1)+`*`+At(e===47?e:$t())}function fn(e){for(;!rn(en());)$t();return nn(e,Gt)}function pn(e){return on(mn(``,null,null,null,[``],e=an(e),0,[0],e))}function mn(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=$t()){case 40:if(m!=108&&It(C,d-1)==58){Ft(C+=L(sn(v),`&`,`&\f`),`&\f`,kt(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=sn(v);break;case 9:case 10:case 13:case 32:C+=cn(m);break;case 92:C+=ln(tn()-1,7);continue;case 47:switch(en()){case 42:case 47:Bt(gn(dn($t(),tn()),t,n,c),c),(rn(m||1)==5||rn(en()||1)==5)&&Rt(C)&&Lt(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=Rt(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=L(C,/\f/g,``)),p>0&&(Rt(C)-d||h===0&&m===47)&&Bt(p>32?_n(C+`;`,r,n,d-1,c):_n(L(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(Bt(S=hn(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)mn(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(It(C,3)===110)break;case 108:if(It(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?mn(e,S,S,r&&Bt(hn(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):mn(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Rt(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Qt()==125)continue}switch(C+=At(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Rt(C)-1)*_,_=1;break;case 64:en()===45&&(C+=sn($t())),f=en(),u=d=Rt(y=C+=fn(tn())),v++;break;case 45:m===45&&Rt(C)==2&&(h=0)}}return a}function hn(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=zt(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Lt(e,f+1,f=kt(g=o[h])),b=e;v<m;++v)(b=Nt(g>0?p[v]+` `+y:L(y,/&\f/g,p[v])))&&(c[_++]=b);return Jt(e,t,n,i===0?Ct:s,c,l,u,d)}function gn(e,t,n,r){return Jt(e,t,n,St,At(Zt()),Lt(e,2,-2),0,r)}function _n(e,t,n,r,i){return Jt(e,t,n,wt,Lt(e,0,r),Lt(e,r+1,-1),r,i)}function vn(e,t,n){switch(Mt(e,t)){case 5103:return xt+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return xt+e+e;case 4855:return xt+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return bt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return xt+e+bt+e+I+e+e;case 5936:switch(It(e,t+11)){case 114:return xt+e+I+L(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return xt+e+I+L(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return xt+e+I+L(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return xt+e+I+e+e;case 6165:return xt+e+I+`flex-`+e+e;case 5187:return xt+e+L(e,/(\w+).+(:[^]+)/,xt+`box-$1$2`+I+`flex-$1$2`)+e;case 5443:return xt+e+I+`flex-item-`+L(e,/flex-|-self/g,``)+(Pt(e,/flex-|baseline/)?``:I+`grid-row-`+L(e,/flex-|-self/g,``))+e;case 4675:return xt+e+I+`flex-line-pack`+L(e,/align-content|flex-|-self/g,``)+e;case 5548:return xt+e+I+L(e,`shrink`,`negative`)+e;case 5292:return xt+e+I+L(e,`basis`,`preferred-size`)+e;case 6060:return xt+`box-`+L(e,`-grow`,``)+xt+e+I+L(e,`grow`,`positive`)+e;case 4554:return xt+L(e,/([^-])(transform)/g,`$1`+xt+`$2`)+e;case 6187:return L(L(L(e,/(zoom-|grab)/,xt+`$1`),/(image-set)/,xt+`$1`),e,``)+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,xt+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,xt+`box-pack:$3`+I+`flex-pack:$3`),/space-between/,`justify`)+xt+e+e;case 4200:if(!Pt(e,/flex-|baseline/))return I+`grid-column-align`+Lt(e,t)+e;break;case 2592:case 3360:return I+L(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Pt(e.props,/grid-\w+-end/)})?~Ft(e+(n=n[t].value),`span`,0)?e:I+L(e,`-start`,``)+e+I+`grid-row-span:`+(~Ft(n,`span`,0)?Pt(n,/\d+/):Pt(n,/\d+/)-+Pt(e,/\d+/))+`;`:I+L(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Pt(e.props,/grid-\w+-start/)})?e:I+L(L(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,xt+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rt(e)-1-t>6)switch(It(e,t+1)){case 109:if(It(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,`$1`+xt+`$2-$3$1`+bt+(It(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Ft(e,`stretch`,0)?vn(L(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return I+n+`:`+r+s+(i?I+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(It(e,t+6)===121)return L(e,`:`,`:`+xt)+e;break;case 6444:switch(It(e,It(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+xt+(It(e,14)===45?`inline-`:``)+`box$3$1`+xt+`$2$3$1`+I+`$2box$3`)+e;case 100:return L(e,`:`,`:`+I)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,`scroll-`,`scroll-snap-`)+e}return e}function yn(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function bn(e,t,n,r){switch(e.type){case Ot:if(e.children.length)break;case Tt:case Et:case wt:return e.return=e.return||e.value;case St:return``;case Dt:return e.return=e.value+`{`+yn(e.children,r)+`}`;case Ct:if(!Rt(e.value=e.props.join(`,`)))return``}return Rt(n=yn(e.children,r))?e.return=e.value+`{`+n+`}`:``}function xn(e){var t=zt(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Sn(e){return function(t){t.root||(t=t.return)&&e(t)}}function Cn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wt:e.return=vn(e.value,e.length,n);return;case Dt:return yn([Yt(e,{value:L(e.value,`@`,`@`+xt)})],r);case Ct:if(e.length)return Vt(n=e.props,function(t){switch(Pt(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Xt(Yt(e,{props:[L(t,/:(read-\w+)/,`:`+bt+`$1`)]})),Xt(Yt(e,{props:[t]})),jt(e,{props:Ht(n,r)});break;case`::placeholder`:Xt(Yt(e,{props:[L(t,/:(plac\w+)/,`:`+xt+`input-$1`)]})),Xt(Yt(e,{props:[L(t,/:(plac\w+)/,`:`+bt+`$1`)]})),Xt(Yt(e,{props:[L(t,/:(plac\w+)/,I+`input-$1`)]})),Xt(Yt(e,{props:[t]})),jt(e,{props:Ht(n,r)});break}return``})}}var wn=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Tn=`active`,En=`data-styled-version`,Dn=`6.4.3`,On=`/*!sc*/
`,kn=typeof window<`u`&&typeof document<`u`;function An(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var jn=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:An(`REACT_APP_SC_DISABLE_SPEEDY`)??An(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Mn=`sc-keyframes-`,Nn={};function Pn(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Fn=new Map,In=new Map,Ln=1,Rn=e=>{if(Fn.has(e))return Fn.get(e);for(;In.has(Ln);)Ln++;let t=Ln++;return Fn.set(e,t),In.set(t,e),t},zn=e=>In.get(e),Bn=(e,t)=>{Ln=t+1,Fn.set(e,t),In.set(t,e)},Vn=Object.freeze([]),Hn=Object.freeze({});function Un(e,t,n=Hn){return e.theme!==n.theme&&e.theme||t||n.theme}var Wn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gn=/(^-|-$)/g;function Kn(e){return e.replace(Wn,`-`).replace(Gn,``)}var qn=/(a)(d)/gi,Jn=e=>String.fromCharCode(e+(e>25?39:97));function Yn(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Jn(t%52)+n;return(Jn(t%52)+n).replace(qn,`$1-$2`)}var Xn=5381,Zn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Qn=e=>Zn(Xn,e);function $n(e){return Yn(Qn(e)>>>0)}function er(e){return e.displayName||e.name||`Component`}function tr(e){return typeof e==`string`&&!0}function nr(e){return tr(e)?`styled.${e}`:`Styled(${er(e)})`}var rr=Symbol.for(`react.memo`),ir=Symbol.for(`react.forward_ref`),ar={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},or={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cr={[ir]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[rr]:sr};function lr(e){return(`type`in(t=e)&&t.type.$$typeof)===rr?sr:`$$typeof`in e?cr[e.$$typeof]:ar;var t}var ur=Object.defineProperty,dr=Object.getOwnPropertyNames,fr=Object.getOwnPropertySymbols,pr=Object.getOwnPropertyDescriptor,mr=Object.getPrototypeOf,hr=Object.prototype;function gr(e,t,n){if(typeof t!=`string`){let r=mr(t);r&&r!==hr&&gr(e,r,n);let i=dr(t).concat(fr(t)),a=lr(e),o=lr(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in or||n&&n[s]||o&&s in o||a&&s in a)){let n=pr(t,s);try{ur(e,s,n)}catch{}}}}return e}function _r(e){return typeof e==`function`}var vr=Symbol.for(`react.forward_ref`);function yr(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===vr&&`styledComponentId`in e}function br(e,t){return e&&t?e+` `+t:e||t||``}function xr(e,t){return e.join(t||``)}function Sr(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Cr(e,t,n=!1){if(!n&&!Sr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Cr(e[n],t[n]);else if(Sr(t))for(let n in t)e[n]=Cr(e[n],t[n]);return e}function wr(e,t){Object.defineProperty(e,"toString",{value:t})}var Tr=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Pn(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+On;return t}},Er=`style[${wn}][${En}="${Dn}"]`,Dr=RegExp(`^${wn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Or=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,kr=e=>{if(!e)return document;if(Or(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Or(t))return t}return document},Ar=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},jr=(e,t)=>{let n=(t.textContent??``).split(On),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Dr);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Bn(n,t),Ar(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Mr=e=>{let t=kr(e.options.target).querySelectorAll(Er);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(wn)!==Tn&&(jr(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Nr=!1;function Pr(){if(!1!==Nr)return Nr;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Nr=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Nr=t.getAttribute(`content`)||void 0}return Nr=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Fr=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${wn}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(wn,Tn),i.setAttribute(En,Dn);let s=t||Pr();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Ir=class{constructor(e,t){this.element=Fr(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Pn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Lr=class{constructor(e,t){this.element=Fr(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Rr=kn,zr={isServer:!kn,useCSSOMInjection:!jn},Br=class e{static registerId(e){return Rn(e)}constructor(e=Hn,t={},n){this.options=Object.assign(Object.assign({},zr),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&kn&&Rr&&(Rr=!1,Mr(this)),wr(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=zn(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=wn+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&kn&&Mr(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&kn&&t.target!==this.options.target&&kr(this.options.target)!==kr(t.target)&&Mr(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Ir(t,n):new Lr(t,n))(this.options),new Tr(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Rn(e),e.startsWith(Mn)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Rn(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Rn(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Vr=new WeakSet,Hr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ur(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Hr||e.startsWith(`--`)?String(t).trim():t+`px`}var Wr=47;function Gr(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Kr=Symbol.for(`sc-keyframes`);function qr(e){return typeof e==`object`&&!!e&&Kr in e}function Jr(e){return _r(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Yr=e=>e==null||!1===e||e===``,Xr=Symbol.for(`react.client.reference`);function Zr(e){return e.$$typeof===Xr}function Qr(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Yr(r)&&(Array.isArray(r)&&Vr.has(r)||_r(r)?t.push(Gr(n)+`:`,r,`;`):Sr(r)?(t.push(n+` {`),Qr(r,t),t.push(`}`)):t.push(Gr(n)+`: `+Ur(n,r)+`;`))}}function $r(e,t,n,r,i=[]){if(Yr(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return Zr(e)?i:Jr(e)&&t?$r(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)$r(e[a],t,n,r,i);return i}return yr(e)?(i.push(`.${e.styledComponentId}`),i):qr(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Zr(e)?i:Sr(e)&&e.toString===Object.prototype.toString?(Qr(e,i),i):(i.push(e.toString()),i)}var ei=Qn(Dn),ti=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Zn(ei,t),this.baseStyle=n,Br.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(Jr(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=xr($r(r,e,t,n)))}else i+=xr($r(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=Yn(Zn(Zn(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=br(r,a)}}return r}},ni=/&/g;function ri(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function ii(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==Wr||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===Wr&&(o=!1,c++);else if(l!==34&&l!==39||ri(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function ai(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&ai(a.children,t)}return e}function oi({options:e=Hn,plugins:t=Vn}=Hn){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(ni,r).replace(i,a))}),e.prefix&&o.push(Cn),o.push(bn);let s=[],c=xn(o.concat(Sn(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return ii(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||ri(e,o))if(s===0)if(t===Wr&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==Wr);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===Wr)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Wr&&o+1<r&&e.charCodeAt(o+1)===Wr){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:ii(i)):l===0?e:ii(e)}(t),d=pn(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=ai(d,e.namespace)),s=[],yn(d,c),s},u=e,d=Xn;for(let e=0;e<t.length;e++)t[e].name||Pn(15),d=Zn(d,t[e].name);return u!=null&&u.namespace&&(d=Zn(d,u.namespace)),u!=null&&u.prefix&&(d=Zn(d,`p`)),l.hash=d===Xn?``:d.toString(),l}var si=new Br,ci=oi(),li=g.createContext({shouldForwardProp:void 0,styleSheet:si,stylis:ci,stylisPlugins:void 0});li.Consumer;function ui(){return g.useContext(li)}var di=g.createContext(void 0);di.Consumer;function fi(e){let t=g.useContext(di),n=g.useMemo(()=>function(e,t){if(!e)throw Pn(14);if(_r(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Pn(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?g.createElement(di.Provider,{value:n},e.children):null}var pi=Object.prototype.hasOwnProperty,mi={};function hi(e,t){let n=typeof e==`string`?Kn(e):`sc`;mi[n]=(mi[n]||0)+1;let r=n+`-`+$n(Dn+n+mi[n]);return t?t+`-`+r:r}function gi(e,t,n){let r=yr(e),i=e,a=!tr(e),{attrs:o=Vn,componentId:s=hi(t.displayName,t.parentComponentId),displayName:c=nr(e)}=t,l=t.displayName&&t.componentId?Kn(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new ti(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=g.useContext(di),u=ui(),d=e.shouldForwardProp||u.shouldForwardProp,f=Un(t,l,a)||Hn,p,m;{let e=g.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(pi.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=_r(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=br(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=br(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)pi.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,_=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),v=br(o,s);return m&&(v+=` `+m),p.className&&(v+=` `+p.className),_[tr(h)&&h.includes(`-`)?`class`:`className`]=v,n&&(_.ref=n),(0,g.createElement)(h,_)}(m,e,t)}p.displayName=c;let m=g.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?br(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Cr(e,n,!0);return e}({},i.defaultProps,e):e}}),wr(m,()=>`.${m.styledComponentId}`),a&&gr(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var _i=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function vi(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var yi=e=>(Vr.add(e),e);function z(e,...t){if(_r(e)||Sr(e))return yi($r(vi(Vn,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?$r(n):yi($r(vi(n,t)))}function bi(e,t,n=Hn){if(!t)throw Pn(1,t);let r=(r,...i)=>e(t,n,z(r,...i));return r.attrs=r=>bi(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>bi(e,t,Object.assign(Object.assign({},n),r)),r}var xi=e=>bi(gi,e),B=xi;_i.forEach(e=>{B[e]=xi(e)});var Si=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(_r(n)&&!yr(n))return!1}return!0}(e),Br.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=xr($r(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function Ci(e,...t){let n=z(e,...t),r=`sc-global-${$n(JSON.stringify(n))}`,i=new Si(n,r),a=e=>{let t=ui(),n=g.useContext(di),a;{let e=g.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=g.useRef(i);g.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),g.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Nn,n,o);else{let s=Object.assign(Object.assign({},t),{theme:Un(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return g.memo(a)}var wi,Ti=class{constructor(e,t){this[wi]=!0,this.inject=(e,t=ci)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=Mn+e,this.rules=t,Rn(this.id),wr(this,()=>{throw Pn(12,String(this.name))})}getName(e=ci){return e.hash?this.name+Yn(e.hash>>>0):this.name}};function Ei(e,...t){let n=xr(z(e,...t));return new Ti($n(n),n)}wi=Kr,`${wn}`,`${wn}`,`${wn}`;var Di=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),V=o(((e,t)=>{t.exports=Di()}))(),Oi=({size:e=20,children:t,...n})=>(0,V.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,...n,children:t}),ki=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M9.44231 6.90365V16.1985H1.75L9.44231 6.90365ZM9.44231 3.57031C9.44231 5.6857 7.71154 7.41647 5.59615 7.41647C3.48077 7.41647 1.75 5.6857 1.75 3.57031H9.44231ZM10.7244 16.1985C10.7244 14.0831 12.4551 12.3524 14.5705 12.3524C16.6859 12.3524 18.4167 14.0831 18.4167 16.1985H10.7244ZM10.7244 12.8652V3.57031H18.4167L10.7244 12.8652Z`,fill:`currentColor`})}),Ai=e=>(0,V.jsx)(Oi,{size:12,...e,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M2.74408 6.91058C3.06952 6.58515 3.59715 6.58515 3.92259 6.91058L9.41075 12.3988C9.73617 12.7242 10.2638 12.7242 10.5893 12.3988L16.0774 6.91058C16.4028 6.58515 16.9305 6.58515 17.2559 6.91058C17.5813 7.23602 17.5813 7.76365 17.2559 8.0891L11.7677 13.5773C10.7915 14.5536 9.20858 14.5536 8.23225 13.5773L2.74408 8.0891C2.41864 7.76365 2.41864 7.23602 2.74408 6.91058Z`,fill:`currentColor`})}),ji=e=>(0,V.jsx)(Oi,{size:12,...e,children:(0,V.jsx)(`path`,{d:`M9.16638 16.6663V10.8333H3.33337C2.87325 10.8333 2.50054 10.4603 2.50037 10.0002C2.50037 9.54001 2.87314 9.16626 3.33337 9.16626H9.16638V3.33325C9.16638 2.87301 9.54013 2.50024 10.0004 2.50024C10.4605 2.50042 10.8334 2.87312 10.8334 3.33325V9.16626H16.6664C17.1266 9.16626 17.5004 9.54001 17.5004 10.0002C17.5002 10.4603 17.1265 10.8333 16.6664 10.8333H10.8334V16.6663C10.8334 17.1264 10.4605 17.5001 10.0004 17.5002C9.54013 17.5002 9.16638 17.1265 9.16638 16.6663Z`,fill:`currentColor`})}),Mi=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{d:`M9.16602 2.5C12.8477 2.5 15.8327 5.48442 15.833 9.16602C15.833 10.7064 15.309 12.1241 14.4316 13.2529L17.2559 16.0771C17.5812 16.4026 17.5812 16.9305 17.2559 17.2559C16.9305 17.5813 16.4026 17.5812 16.0771 17.2559L13.2529 14.4316C12.1241 15.309 10.7065 15.833 9.16602 15.833C5.48441 15.8327 2.5 12.8477 2.5 9.16602C2.50036 5.48463 5.48463 2.50034 9.16602 2.5ZM9.16602 4.16602C6.4051 4.16636 4.16637 6.40511 4.16602 9.16602C4.16602 11.9272 6.40488 14.1657 9.16602 14.166C11.9274 14.166 14.166 11.9274 14.166 9.16602C14.1657 6.4049 11.9272 4.16602 9.16602 4.16602Z`,fill:`currentColor`})}),Ni=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M1.66663 7.5C1.66663 4.73857 3.9052 2.5 6.66663 2.5H13.3333C16.0947 2.5 18.3333 4.73857 18.3333 7.5V12.5C18.3333 15.2614 16.0947 17.5 13.3333 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V7.5ZM6.66663 11.0417C6.09133 11.0417 5.62496 10.5753 5.62496 10C5.62496 9.42467 6.09133 8.95833 6.66663 8.95833C7.24193 8.95833 7.70829 9.42467 7.70829 10C7.70829 10.5753 7.24193 11.0417 6.66663 11.0417ZM9.99996 11.0417C9.42463 11.0417 8.95829 10.5753 8.95829 10C8.95829 9.42467 9.42463 8.95833 9.99996 8.95833C10.5753 8.95833 11.0416 9.42467 11.0416 10C11.0416 10.5753 10.5753 11.0417 9.99996 11.0417ZM12.2916 10C12.2916 10.5753 12.758 11.0417 13.3333 11.0417C13.9086 11.0417 14.375 10.5753 14.375 10C14.375 9.42467 13.9086 8.95833 13.3333 8.95833C12.758 8.95833 12.2916 9.42467 12.2916 10Z`,fill:`currentColor`})}),Pi=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{d:`M5.00049 2.5C3.65146 2.5 2.42543 3.61963 2.6096 5.0996C3.4076 11.5121 8.48838 16.5929 14.9009 17.3909C16.3809 17.5751 17.5005 16.349 17.5005 15V13.9068C17.5005 12.8027 16.7763 11.8294 15.7189 11.5122L14.4434 11.1295C13.6138 10.8807 12.7146 11.1073 12.1022 11.7198C11.8801 11.9419 11.5945 11.9558 11.4134 11.8438C10.0917 11.026 8.97446 9.90875 8.15671 8.58717C8.04462 8.406 8.0586 8.12039 8.28074 7.89826C8.89313 7.28586 9.11988 6.38666 8.87096 5.55713L8.48829 4.28163C8.17109 3.22418 7.19779 2.5 6.09377 2.5H5.00049Z`,fill:`currentColor`})}),Fi=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 1.66669C6.75502 1.66669 4.08007 4.21124 3.91802 7.45217L3.76851 10.4424C3.76275 10.5576 3.73314 10.6704 3.68157 10.7735L2.65915 12.8184C2.55449 13.0277 2.5 13.2584 2.5 13.4925C2.5 14.3251 3.17493 15 4.00752 15H5.91668C6.30274 16.9019 7.9842 18.3334 10 18.3334C12.0158 18.3334 13.6972 16.9019 14.0833 15H15.9925C16.8251 15 17.5 14.3251 17.5 13.4925C17.5 13.2584 17.4455 13.0277 17.3408 12.8184L16.3184 10.7735C16.2668 10.6704 16.2373 10.5576 16.2315 10.4424L16.082 7.45217C15.9199 4.21124 13.245 1.66669 10 1.66669ZM10 16.6667C8.9115 16.6667 7.98545 15.971 7.64226 15H12.3577C12.0146 15.971 11.0885 16.6667 10 16.6667Z`,fill:`currentColor`})}),Ii=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M12.5 12.4269L9.99996 14.5519V16.028L12.0954 14.7707C12.3464 14.6202 12.5 14.3489 12.5 14.0562V12.4269ZM8.33329 14.5117L5.48812 11.6665H3.97178C2.67629 11.6665 1.87611 10.2532 2.54263 9.14233L3.79988 7.04695C4.25168 6.29394 5.06545 5.83319 5.94361 5.83319H9.01221C11.116 3.60805 13.5005 1.97393 16.5951 1.7053C17.5694 1.62072 18.3791 2.43041 18.2945 3.40466C18.0259 6.49924 16.3918 8.88383 14.1666 10.9877V14.0562C14.1666 14.9343 13.7059 15.7482 12.9529 16.1999L10.8575 17.4572C9.74654 18.1237 8.33329 17.3235 8.33329 16.028V14.5117ZM7.57293 7.49986H5.94361C5.65089 7.49986 5.37963 7.65344 5.22903 7.90445L3.97178 9.99983H5.44793L7.57293 7.49986ZM1.66663 15.8332C1.66663 14.4525 2.78592 13.3332 4.16663 13.3332C5.54733 13.3332 6.66663 14.4525 6.66663 15.8332C6.66663 17.2139 5.54733 18.3332 4.16663 18.3332H2.49996C2.03973 18.3332 1.66663 17.9601 1.66663 17.4998V15.8332Z`,fill:`currentColor`})}),Li=e=>(0,V.jsxs)(Oi,{size:16,...e,children:[(0,V.jsx)(`path`,{d:`M9.99996 1.66675C7.92889 1.66675 6.24996 3.34568 6.24996 5.41675C6.24996 7.48781 7.92889 9.16675 9.99996 9.16675C12.071 9.16675 13.75 7.48781 13.75 5.41675C13.75 3.34568 12.071 1.66675 9.99996 1.66675Z`,fill:`currentColor`}),(0,V.jsx)(`path`,{d:`M10.0012 10.0001C6.80794 10.0001 4.36401 11.9136 3.37167 14.5967C3.08798 15.3638 3.2822 16.1199 3.73317 16.6573C4.17264 17.1811 4.85107 17.5001 5.58189 17.5001H14.4205C15.1513 17.5001 15.8297 17.1811 16.2692 16.6573C16.7202 16.1199 16.9144 15.3638 16.6307 14.5967C15.6384 11.9136 13.1945 10.0001 10.0012 10.0001Z`,fill:`currentColor`})]}),Ri=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{d:`M11.4163 2.87911C10.5632 2.29258 9.43683 2.29258 8.58367 2.87911L3.58367 6.31661C2.90529 6.78299 2.5 7.55347 2.5 8.37671V15C2.5 16.3807 3.61929 17.5 5 17.5H7.08333C7.54357 17.5 7.91667 17.1269 7.91667 16.6666V13.75C7.91667 12.5994 8.84942 11.6666 10 11.6666C11.1506 11.6666 12.0833 12.5994 12.0833 13.75V16.6666C12.0833 17.1269 12.4564 17.5 12.9167 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V8.37671C17.5 7.55347 17.0947 6.78299 16.4163 6.31661L11.4163 2.87911Z`,fill:`currentColor`})}),zi=e=>(0,V.jsxs)(Oi,{...e,children:[(0,V.jsx)(`path`,{d:`M5.00003 2.50001L15 2.5C16.3807 2.5 17.5 3.61929 17.5 5V10H13.2283C12.8481 10 12.5161 10.2574 12.4213 10.6256C12.1437 11.7041 11.1637 12.5 10 12.5C8.83625 12.5 7.85629 11.7041 7.57872 10.6256C7.48394 10.2574 7.15192 10 6.77169 10H2.50003L2.50003 5C2.50003 3.61929 3.61933 2.50001 5.00003 2.50001Z`,fill:`currentColor`}),(0,V.jsx)(`path`,{d:`M17.5 11.6667V15C17.5 16.3807 16.3807 17.5 15 17.5H5C3.61928 17.5 2.49999 16.3807 2.5 15L2.50003 10L2.50003 11.6667H6.18032C6.8232 13.1379 8.29065 14.1667 10 14.1667C11.7093 14.1667 13.1768 13.1379 13.8197 11.6667H17.5Z`,fill:`currentColor`})]}),Bi=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.83337 1.66669C4.45267 1.66669 3.33337 2.78598 3.33337 4.16669V16.25C3.33337 17.4006 4.26612 18.3334 5.41671 18.3334H15.8334C16.2936 18.3334 16.6667 17.9603 16.6667 17.5C16.6667 17.0398 16.2936 16.6667 15.8334 16.6667H5.41671C5.18659 16.6667 5.00004 16.4801 5.00004 16.25C5.00004 16.0199 5.18659 15.8334 5.41671 15.8334H15.8334C16.2936 15.8334 16.6667 15.4603 16.6667 15V3.33335C16.6667 2.41288 15.9205 1.66669 15 1.66669H5.83337ZM10 5.83335C9.19462 5.83335 8.54171 6.48627 8.54171 7.29169C8.54171 8.0971 9.19462 8.75002 10 8.75002C10.8055 8.75002 11.4584 8.0971 11.4584 7.29169C11.4584 6.48627 10.8055 5.83335 10 5.83335ZM10 9.16669C9.25529 9.16669 8.69146 9.3231 8.27652 9.59377C7.85302 9.87002 7.65388 10.2203 7.56682 10.4753C7.32847 11.1733 7.92705 11.6667 8.42546 11.6667H11.5746C12.073 11.6667 12.6716 11.1733 12.4333 10.4753C12.3462 10.2203 12.147 9.87002 11.7235 9.59377C11.3086 9.3231 10.7448 9.16669 10 9.16669Z`,fill:`currentColor`})}),Vi=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M16.6666 15.8333V5C16.6666 3.61929 15.5474 2.5 14.1666 2.5H5.83329C4.45258 2.5 3.33329 3.61929 3.33329 5V15.8333H2.49996C2.03973 15.8333 1.66663 16.2064 1.66663 16.6667C1.66663 17.1269 2.03973 17.5 2.49996 17.5H17.5C17.9602 17.5 18.3333 17.1269 18.3333 16.6667C18.3333 16.2064 17.9602 15.8333 17.5 15.8333H16.6666ZM7.49996 5.83333C7.03973 5.83333 6.66663 6.20643 6.66663 6.66667C6.66663 7.1269 7.03973 7.5 7.49996 7.5H8.33329C8.79354 7.5 9.16663 7.1269 9.16663 6.66667C9.16663 6.20643 8.79354 5.83333 8.33329 5.83333H7.49996ZM11.6666 5.83333C11.2064 5.83333 10.8333 6.20643 10.8333 6.66667C10.8333 7.1269 11.2064 7.5 11.6666 7.5H12.5C12.9602 7.5 13.3333 7.1269 13.3333 6.66667C13.3333 6.20643 12.9602 5.83333 12.5 5.83333H11.6666ZM7.49996 9.16667C7.03973 9.16667 6.66663 9.53975 6.66663 10C6.66663 10.4602 7.03973 10.8333 7.49996 10.8333H8.33329C8.79354 10.8333 9.16663 10.4602 9.16663 10C9.16663 9.53975 8.79354 9.16667 8.33329 9.16667H7.49996ZM11.6666 9.16667C11.2064 9.16667 10.8333 9.53975 10.8333 10C10.8333 10.4602 11.2064 10.8333 11.6666 10.8333H12.5C12.9602 10.8333 13.3333 10.4602 13.3333 10C13.3333 9.53975 12.9602 9.16667 12.5 9.16667H11.6666ZM7.49996 12.5C7.03973 12.5 6.66663 12.8731 6.66663 13.3333C6.66663 13.7936 7.03973 14.1667 7.49996 14.1667H8.33329C8.79354 14.1667 9.16663 13.7936 9.16663 13.3333C9.16663 12.8731 8.79354 12.5 8.33329 12.5H7.49996ZM11.6666 12.5C11.2064 12.5 10.8333 12.8731 10.8333 13.3333C10.8333 13.7936 11.2064 14.1667 11.6666 14.1667H12.5C12.9602 14.1667 13.3333 13.7936 13.3333 13.3333C13.3333 12.8731 12.9602 12.5 12.5 12.5H11.6666Z`,fill:`currentColor`})}),Hi=e=>(0,V.jsxs)(Oi,{...e,children:[(0,V.jsx)(`path`,{d:`M6.15541 7.40126C5.99781 7.67423 5.99781 8.01053 6.15541 8.2835C6.313 8.55646 6.60426 8.72462 6.91945 8.72462L13.0317 8.72462C13.3469 8.72462 13.6382 8.55646 13.7958 8.2835C13.9533 8.01054 13.9534 7.67424 13.7957 7.40127L10.7397 2.10787C10.5821 1.83492 10.2908 1.66671 9.97558 1.66675C9.66042 1.66669 9.36918 1.83486 9.21154 2.10785L6.15541 7.40126Z`,fill:`currentColor`}),(0,V.jsx)(`path`,{d:`M14.3868 10.4891C12.4378 10.4891 10.8578 12.069 10.8578 14.018C10.8578 15.967 12.4378 17.547 14.3868 17.547C16.3358 17.547 17.9157 15.967 17.9157 14.018C17.9157 12.069 16.3358 10.4891 14.3868 10.4891Z`,fill:`currentColor`}),(0,V.jsx)(`path`,{d:`M2.91772 12.4741C2.91772 11.4996 3.7077 10.7097 4.68219 10.7097H7.77002C8.74451 10.7097 9.53449 11.4996 9.53449 12.4741V15.5619C9.53449 16.5364 8.74451 17.3264 7.77002 17.3264H4.68219C3.7077 17.3264 2.91772 16.5364 2.91772 15.5619V12.4741Z`,fill:`currentColor`})]}),Ui=e=>(0,V.jsxs)(Oi,{...e,children:[(0,V.jsx)(`path`,{d:`M5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V9.16667H6.15164C6.78292 9.16667 7.36003 9.52333 7.64235 10.088L8.33333 11.4699L10.9213 6.29399C11.0625 6.01167 11.351 5.83333 11.6667 5.83333C11.9823 5.83333 12.2708 6.01167 12.412 6.29399L13.8483 9.16667H17.5V5C17.5 3.61929 16.3807 2.5 15 2.5H5Z`,fill:`currentColor`}),(0,V.jsx)(`path`,{d:`M2.5 15.0002C2.5 16.3809 3.61929 17.5002 5 17.5002H15C16.3807 17.5002 17.5 16.3809 17.5 15.0002V10.8335H13.8483C13.2171 10.8335 12.64 10.4769 12.3577 9.91219L11.6667 8.53027L9.07867 13.7062C8.9375 13.9885 8.649 14.1669 8.33333 14.1669C8.01769 14.1669 7.72913 13.9885 7.58797 13.7062L6.15164 10.8335H2.5V15.0002Z`,fill:`currentColor`})]}),Wi=e=>(0,V.jsx)(Oi,{...e,children:(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M8.15431 2.65438C8.56571 2.03728 9.25829 1.66663 9.99996 1.66663C10.7416 1.66663 11.4342 2.03728 11.8456 2.65438L12.3091 3.34961C12.4967 3.63099 12.8389 3.76687 13.1684 3.69083L13.7401 3.55888C14.4968 3.38427 15.29 3.61176 15.839 4.16085C16.3881 4.70993 16.6156 5.50315 16.441 6.25979L16.3091 6.83155C16.233 7.16107 16.369 7.50324 16.6503 7.69083L17.3455 8.15431C17.9626 8.56571 18.3333 9.25829 18.3333 9.99996C18.3333 10.7416 17.9626 11.4342 17.3455 11.8456L16.6503 12.3091C16.369 12.4967 16.233 12.8389 16.3091 13.1684L16.441 13.7401C16.6156 14.4968 16.3881 15.29 15.839 15.839C15.29 16.3881 14.4968 16.6156 13.7401 16.441L13.1684 16.3091C12.8389 16.233 12.4967 16.369 12.3091 16.6503L11.8456 17.3455C11.4342 17.9626 10.7416 18.3333 9.99996 18.3333C9.25829 18.3333 8.56571 17.9626 8.15431 17.3455L7.69083 16.6503C7.50324 16.369 7.16107 16.233 6.83155 16.3091L6.25979 16.441C5.50315 16.6156 4.70993 16.3881 4.16085 15.839C3.61176 15.29 3.38427 14.4968 3.55888 13.7401L3.69083 13.1684C3.76687 12.8389 3.63099 12.4967 3.34961 12.3091L2.65438 11.8456C2.03728 11.4342 1.66663 10.7416 1.66663 9.99996C1.66663 9.25829 2.03729 8.56571 2.65438 8.15431L3.34961 7.69083C3.63099 7.50324 3.76687 7.16107 3.69083 6.83155L3.55888 6.25979C3.38427 5.50315 3.61176 4.70993 4.16085 4.16085C4.70993 3.61176 5.50315 3.38427 6.25979 3.55888L6.83155 3.69083C7.16107 3.76687 7.50324 3.63099 7.69083 3.34961L8.15431 2.65438ZM7.08329 9.99996C7.08329 8.38913 8.38913 7.08329 9.99996 7.08329C11.6108 7.08329 12.9166 8.38913 12.9166 9.99996C12.9166 11.6108 11.6108 12.9166 9.99996 12.9166C8.38913 12.9166 7.08329 11.6108 7.08329 9.99996Z`,fill:`currentColor`})}),Gi=B.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  height: 64px;
  box-sizing: border-box;
  width: 100%;
  background: #f8f9f9;
  flex-shrink: 0;
`,Ki=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,qi=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 32px;
  color: #5c6970;
`,Ji=B.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #293239;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  cursor: default;

  svg {
    color: #5c6970;
  }
`,Yi=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  min-width: 0;
  padding-right: 4px;
`,Xi=B.div`
  display: flex;
  align-items: center;
`,Zi=B.div`
  width: 1px;
  height: 24px;
  background: #d8dcde;
  margin: 0 8px 0 4px;
`,Qi=B.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #293239;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  cursor: default;

  &:disabled {
    color: #848f99;
    cursor: default;
  }

  svg {
    color: #5c6970;
  }
`,$i=B.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #5c6970;
  cursor: default;
`,ea=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ta=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,na=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f8f9f9;
  color: #5c6970;
  box-shadow: inset 0 0 0 1px #d8dcde;
`;function ra(){return(0,V.jsxs)(Gi,{children:[(0,V.jsxs)(Ki,{children:[(0,V.jsx)(qi,{children:(0,V.jsx)(ki,{})}),(0,V.jsxs)(Ji,{type:`button`,tabIndex:-1,children:[(0,V.jsx)(`span`,{children:`Support`}),(0,V.jsx)(Ai,{})]})]}),(0,V.jsxs)(Yi,{children:[(0,V.jsxs)(Xi,{children:[(0,V.jsx)(Zi,{}),(0,V.jsxs)(Qi,{type:`button`,tabIndex:-1,children:[(0,V.jsx)(ji,{}),(0,V.jsx)(`span`,{children:`Add`})]})]}),(0,V.jsxs)(ea,{children:[(0,V.jsxs)(ta,{children:[(0,V.jsx)($i,{type:`button`,tabIndex:-1,"aria-label":`Search`,children:(0,V.jsx)(Mi,{})}),(0,V.jsx)(Qi,{type:`button`,tabIndex:-1,disabled:!0,children:`Conversations`}),(0,V.jsx)($i,{type:`button`,tabIndex:-1,"aria-label":`Chat`,children:(0,V.jsx)(Ni,{})}),(0,V.jsx)($i,{type:`button`,tabIndex:-1,"aria-label":`Phone`,children:(0,V.jsx)(Pi,{})})]}),(0,V.jsx)(Zi,{style:{margin:0}}),(0,V.jsx)($i,{type:`button`,tabIndex:-1,"aria-label":`Notifications`,children:(0,V.jsx)(Fi,{})}),(0,V.jsx)($i,{type:`button`,tabIndex:-1,"aria-label":`Help`,children:(0,V.jsx)(Ii,{})}),(0,V.jsx)(na,{"aria-hidden":`true`,children:(0,V.jsx)(Li,{})})]})]})]})}var ia=B.nav`
  display: flex;
  flex-direction: column;
  width: 56px;
  min-width: 56px;
  height: 100%;
  background: #f8f9f9;
  box-sizing: border-box;
  flex-shrink: 0;
`,aa=B.div`
  flex: ${e=>e.$flex||`0 0 auto`};
  height: ${e=>e.$height||`auto`};
`,oa=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,sa=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`,ca=B.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: ${e=>e.$active?`#e9ebed`:`transparent`};
  color: #5c6970;
  cursor: default;

  &:hover {
    background: ${e=>(e.$active,`#e9ebed`)};
  }
`,la=[{id:`home`,label:`Home`,Icon:Ri},{id:`inbox`,label:`Inbox`,Icon:zi},{id:`contacts`,label:`Contacts`,Icon:Bi},{id:`organization`,label:`Organization`,Icon:Vi},{id:`custom_objects`,label:`Custom Objects`,Icon:Hi},{id:`analytics`,label:`Analytics`,Icon:Ui},{id:`admin_center`,label:`Settings`,Icon:Wi}];function ua({currentProduct:e=`admin_center`}){return(0,V.jsxs)(ia,{"aria-label":`Product navigation`,children:[(0,V.jsx)(aa,{$height:`16px`}),(0,V.jsx)(oa,{children:la.map(({id:t,label:n,Icon:r})=>(0,V.jsx)(sa,{children:(0,V.jsx)(ca,{type:`button`,tabIndex:-1,"aria-label":n,"aria-current":t===e?`page`:void 0,$active:t===e,children:(0,V.jsx)(r,{})})},t))}),(0,V.jsx)(aa,{$flex:`1`})]})}var da=o(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),fa=o(((e,t)=>{var n=da();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),pa=o(((e,t)=>{t.exports=fa()()})),ma={black:`#000`,white:`#fff`,product:{support:`#00a656`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f8f9f9`,200:`#e8eaec`,300:`#d8dcde`,400:`#b0b8be`,500:`#919ca5`,600:`#848f99`,700:`#5c6970`,800:`#39434b`,900:`#293239`,1e3:`#1c2227`,1100:`#151a1e`,1200:`#0a0d0e`},blue:{100:`#edf7ff`,200:`#ddecf8`,300:`#cce0f1`,400:`#93bcdc`,500:`#66a0cd`,600:`#2694d6`,700:`#1f73b7`,800:`#13456d`,900:`#0f3655`,1e3:`#0a2338`,1100:`#061420`,1200:`#040d15`},red:{100:`#fff2f3`,200:`#fee3e5`,300:`#f5d5d8`,400:`#f2a1a8`,500:`#ea7881`,600:`#eb5c69`,700:`#cd3642`,800:`#7e1d25`,900:`#671219`,1e3:`#3d1418`,1100:`#1d1011`,1200:`#100b0c`},yellow:{100:`#fff3e4`,200:`#ffe6cb`,300:`#fed6a9`,400:`#fca347`,500:`#e38215`,600:`#d67305`,700:`#ac5918`,800:`#673515`,900:`#4c2c17`,1e3:`#2d1e15`,1100:`#18120f`,1200:`#0e0c0b`},green:{100:`#eef8f4`,200:`#daeee6`,300:`#cae3d9`,400:`#94c1b0`,500:`#4eab89`,600:`#26a178`,700:`#037f52`,800:`#104b35`,900:`#0b3b29`,1e3:`#0c261c`,1100:`#0a1511`,1200:`#080d0c`},kale:{100:`#ecf9f9`,200:`#daeded`,300:`#cbe2e1`,400:`#97bfbf`,500:`#6ba4a5`,600:`#4a9999`,700:`#40787a`,800:`#16494f`,900:`#063940`,1e3:`#03252a`,1100:`#061517`,1200:`#060e0e`},fuschia:{100:`#fbf3f8`,200:`#f7e6f1`,300:`#f2d5e7`,400:`#e3a4cc`,500:`#d77db7`,600:`#d16aac`,700:`#b34496`,800:`#78116c`,900:`#5a0d51`,1e3:`#3f0939`,1100:`#31072c`,1200:`#1b0418`},pink:{100:`#fcf3f4`,200:`#f7e5e8`,300:`#f3d6dc`,400:`#e5a6b4`,500:`#d98193`,600:`#d96b81`,700:`#d62054`,800:`#75263d`,900:`#561d2e`,1e3:`#3c141f`,1100:`#2e0f18`,1200:`#17080c`},crimson:{100:`#fbf3f2`,200:`#f7e7e4`,300:`#f1d7d2`,400:`#e2aaa0`,500:`#d58678`,600:`#cf7464`,700:`#be4938`,800:`#811b12`,900:`#61140d`,1e3:`#440e09`,1100:`#340b07`,1200:`#1c0604`},orange:{100:`#fdf3ed`,200:`#fae7d8`,300:`#f7d7be`,400:`#eda875`,500:`#e58035`,600:`#d57428`,700:`#af5626`,800:`#693317`,900:`#4d2711`,1e3:`#361a0c`,1100:`#291409`,1200:`#150a04`},lemon:{100:`#fff7d4`,200:`#ffea97`,300:`#ffdc4f`,400:`#efab00`,500:`#c79100`,600:`#b68500`,700:`#8f6900`,800:`#563e00`,900:`#3f2e00`,1e3:`#2b2000`,1100:`#221800`,1200:`#110c00`},lime:{100:`#ecfae7`,200:`#d1f3c7`,300:`#b3eda3`,400:`#4fd12b`,500:`#45b025`,600:`#509f2d`,700:`#3d7e19`,800:`#2c491b`,900:`#203614`,1e3:`#16250e`,1100:`#111d0a`,1200:`#090e05`},mint:{100:`#d6ffeb`,200:`#9affce`,300:`#0afe89`,400:`#00d26d`,500:`#01b15c`,600:`#16a260`,700:`#2d7e55`,800:`#1b4b33`,900:`#143726`,1e3:`#0e261a`,1100:`#0b1d14`,1200:`#050e0a`},teal:{100:`#d4fefa`,200:`#88fdf1`,300:`#0bf8e1`,400:`#03cdb8`,500:`#02ad9c`,600:`#2a9d8f`,700:`#367a74`,800:`#254846`,900:`#1b3534`,1e3:`#122423`,1100:`#0e1c1a`,1200:`#070d0d`},azure:{100:`#eff7fe`,200:`#d9ecfc`,300:`#c4e0fa`,400:`#82bcf4`,500:`#4b9fee`,600:`#3191ea`,700:`#2770c3`,800:`#23446b`,900:`#1a3250`,1e3:`#122238`,1100:`#0e1a2a`,1200:`#070d14`},royal:{100:`#f4f5fc`,200:`#e7e9f8`,300:`#d8dcf4`,400:`#acb4e7`,500:`#8a96dd`,600:`#7a88d9`,700:`#4c67d3`,800:`#1833ab`,900:`#122680`,1e3:`#0d1a5a`,1100:`#0a1445`,1200:`#050a25`},purple:{100:`#f9f3fb`,200:`#f2e7f6`,300:`#e9d8f1`,400:`#d0a9e0`,500:`#bb86d3`,600:`#b276cd`,700:`#9256b1`,800:`#58209a`,900:`#411973`,1e3:`#2e1150`,1100:`#230d3f`,1200:`#120720`}},ha=4,ga={sm:`${ha/2}px`,md:`${ha}px`,lg:`${ha*2}px`},_a={solid:`solid`},va={sm:`1px`,md:`3px`},ya={sm:`${va.sm} ${_a.solid}`,md:`${va.md} ${_a.solid}`},ba={xs:`0px`,sm:`${ha*144}px`,md:`${ha*192}px`,lg:`${ha*248}px`,xl:`${ha*300}px`},xa={primaryHue:`blue`,dangerHue:`red`,warningHue:`yellow`,successHue:`green`,neutralHue:`grey`,chromeHue:`kale`,variables:{dark:{background:{default:`neutralHue.1100`,raised:`neutralHue.1000`,recessed:`neutralHue.1200`,subtle:`neutralHue.1000`,emphasis:`neutralHue.600`,success:`successHue.1000`,warning:`warningHue.1000`,danger:`dangerHue.1000`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`rgba(white, 100)`},border:{default:`neutralHue.800`,emphasis:`neutralHue.600`,subtle:`neutralHue.900`,success:`successHue.900`,warning:`warningHue.900`,danger:`dangerHue.900`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`neutralHue.800`},foreground:{default:`neutralHue.300`,subtle:`neutralHue.500`,onEmphasis:`neutralHue.1100`,primary:`primaryHue.600`,success:`successHue.400`,warning:`warningHue.400`,danger:`dangerHue.400`,successEmphasis:`successHue.300`,warningEmphasis:`warningHue.300`,dangerEmphasis:`dangerHue.300`,disabled:`neutralHue.700`},shadow:{small:`rgba(neutralHue.1200, 1100)`,medium:`rgba(neutralHue.1200, 800)`,large:`rgba(neutralHue.1200, 1000)`}},light:{background:{default:`palette.white`,raised:`palette.white`,recessed:`neutralHue.100`,subtle:`neutralHue.100`,emphasis:`neutralHue.700`,success:`successHue.100`,warning:`warningHue.100`,danger:`dangerHue.100`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`rgba(neutralHue.700, 100)`},border:{default:`neutralHue.300`,emphasis:`neutralHue.600`,subtle:`neutralHue.200`,success:`successHue.300`,warning:`warningHue.300`,danger:`dangerHue.300`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`neutralHue.300`},foreground:{default:`neutralHue.900`,subtle:`neutralHue.700`,onEmphasis:`palette.white`,primary:`primaryHue.700`,success:`successHue.700`,warning:`warningHue.700`,danger:`dangerHue.700`,successEmphasis:`successHue.900`,warningEmphasis:`warningHue.900`,dangerEmphasis:`dangerHue.900`,disabled:`neutralHue.600`},shadow:{small:`rgba(neutralHue.1200, 200)`,medium:`rgba(neutralHue.1200, 200)`,large:`rgba(neutralHue.1200, 200)`}}}},Sa={mono:[`SFMono-Regular`,`Consolas`,`"Liberation Mono"`,`Menlo`,`Courier`,`monospace`].join(`,`),system:[`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`Oxygen-Sans`,`Ubuntu`,`Cantarell`,`"Helvetica Neue"`,`Arial`,`sans-serif`].join(`,`)},Ca={xs:`10px`,sm:`12px`,md:`14px`,lg:`18px`,xl:`22px`,xxl:`26px`,xxxl:`36px`},wa={thin:100,extralight:200,light:300,regular:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},Ta={sm:`12px`,md:`16px`,lg:`26px`},Ea={sm:`${ha*4}px`,md:`${ha*5}px`,lg:`${ha*6}px`,xl:`${ha*7}px`,xxl:`${ha*8}px`,xxxl:`${ha*11}px`},Da={100:.08,200:.16,300:.24,400:.32,500:.4,600:.48,700:.56,800:.64,900:.72,1e3:.8,1100:.88,1200:.96},Oa={...ma};delete Oa.product;var ka={xs:`1px`,sm:`2px`,md:`3px`},Aa={xs:e=>`0 0 0 ${ka.xs} ${e}`,sm:e=>`0 0 0 ${ka.sm} ${e}`,md:e=>`0 0 0 ${ka.md} ${e}`,lg:(e,t,n)=>`0 ${e} ${t} 0 ${n}`},ja={base:ha,xxs:`${ha}px`,xs:`${ha*2}px`,sm:`${ha*3}px`,md:`${ha*5}px`,lg:`${ha*8}px`,xl:`${ha*10}px`,xxl:`${ha*12}px`},Ma={borders:ya,borderRadii:ga,borderStyles:_a,borderWidths:va,breakpoints:ba,colors:{base:`light`,...xa},components:{},fonts:Sa,fontSizes:Ca,fontWeights:wa,iconSizes:Ta,lineHeights:Ea,opacity:Da,palette:Oa,rtl:!1,shadowWidths:ka,shadows:Aa,space:ja},H=e=>{let t,n=e.theme.components,r=e.componentId||e[`data-garden-id`];return n&&r&&(t=n[r],typeof t==`function`&&(t=t(e))),t},Na={top:`bottom`,"top-start":`bottom-left`,"top-end":`bottom-right`,right:`left`,"right-start":`left-top`,"right-end":`left-bottom`,bottom:`top`,"bottom-start":`top-left`,"bottom-end":`top-right`,left:`right`,"left-start":`right-top`,"left-end":`right-bottom`},Pa={"bottom-left":`bottom-right`,"bottom-right":`bottom-left`,"top-left":`top-right`,"top-right":`top-left`},Fa=(e,t)=>{let n=Na[t];return e.rtl&&(n=Pa[n]||n),n};function Ia(e,t,n){return Math.min(Math.max(e,n),t)}var La=class extends Error{constructor(e){super(`Failed to parse color: "${e}"`)}};function Ra(e){if(typeof e!=`string`)throw new La(e);if(e.trim().toLowerCase()===`transparent`)return[0,0,0,0];let t=e.trim();t=Ja.test(e)?Ha(e):e;let n=Wa.exec(t);if(n){let e=Array.from(n).slice(1);return[...e.slice(0,3).map(e=>parseInt(Ua(e,2),16)),parseInt(Ua(e[3]||`f`,2),16)/255]}let r=Ga.exec(t);if(r){let e=Array.from(r).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,16)),parseInt(e[3]||`ff`,16)/255]}let i=Ka.exec(t);if(i){let e=Array.from(i).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,10)),parseFloat(e[3]||`1`)]}let a=qa.exec(t);if(a){let[t,n,r,i]=Array.from(a).slice(1).map(parseFloat);if(Ia(0,100,n)!==n||Ia(0,100,r)!==r)throw new La(e);return[...Xa(t,n,r),Number.isNaN(i)?1:i]}throw new La(e)}function za(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}var Ba=e=>parseInt(e.replace(/_/g,``),36),Va=`1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm`.split(` `).reduce((e,t)=>{let n=Ba(t.substring(0,3)),r=Ba(t.substring(3)).toString(16),i=``;for(let e=0;e<6-r.length;e++)i+=`0`;return e[n]=`${i}${r}`,e},{});function Ha(e){let t=Va[za(e.toLowerCase().trim())];if(!t)throw new La(e);return`#${t}`}var Ua=(e,t)=>Array.from(Array(t)).map(()=>e).join(``),Wa=RegExp(`^#${Ua(`([a-f0-9])`,3)}([a-f0-9])?$`,`i`),Ga=RegExp(`^#${Ua(`([a-f0-9]{2})`,3)}([a-f0-9]{2})?$`,`i`),Ka=RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ua(`,\\s*(\\d+)\\s*`,2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,`i`),qa=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,Ja=/^[a-z]+$/i,Ya=e=>Math.round(e*255),Xa=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(Ya);let i=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);let u=r-a/2;return[s+u,c+u,l+u].map(Ya)};function Za(e,t,n,r){return`rgba(${Ia(0,255,e).toFixed()}, ${Ia(0,255,t).toFixed()}, ${Ia(0,255,n).toFixed()}, ${parseFloat(Ia(0,1,r).toFixed(3))})`}function Qa(e,t,n){let r=(e,t)=>t===3?e:e/255,[i,a,o,s]=Ra(e).map(r),[c,l,u,d]=Ra(t).map(r),f=d-s,p=n*2-1,m=((p*f===-1?p:p+f/(1+p*f))+1)/2,h=1-m;return Za((i*h+c*m)*255,(a*h+l*m)*255,(o*h+u*m)*255,d*n+s*(1-n))}function $a(...e){return t=>{let n=e.length-1,r=Ia(0,n,Math.floor(t*n)),i=Ia(0,n,Math.ceil(t*n)),a=e[r],o=e[i],s=1/n;return Qa(a,o,(t-s*r)/s)}}function eo(e){let[t,n,r,i]=Ra(e),a=e=>{let t=Ia(0,255,e).toString(16);return t.length===1?`0${t}`:t};return`#${a(t)}${a(n)}${a(r)}${i<1?a(Math.round(i*255)):``}`}function to(){return to=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},to.apply(null,arguments)}function no(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function ro(e,t){return ro=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ro(e,t)}function io(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ro(e,t)}function ao(e){return ao=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ao(e)}function oo(e){try{return Function.toString.call(e).indexOf(`[native code]`)!==-1}catch{return typeof e==`function`}}function so(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(so=function(){return!!e})()}function co(e,t,n){if(so())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&ro(i,n.prototype),i}function lo(e){var t=typeof Map==`function`?new Map:void 0;return lo=function(e){if(e===null||!oo(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return co(e,arguments,ao(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ro(n,e)},lo(e)}function uo(){var e;return e=arguments.length-1,e<0||arguments.length<=e?void 0:arguments[e]}function fo(e){return-e}function po(e,t){return e+t}function mo(e,t){return e-t}function ho(e,t){return e*t}function go(e,t){return e/t}function _o(){return Math.max.apply(Math,arguments)}function vo(){return Math.min.apply(Math,arguments)}function yo(){return Array.of.apply(Array,arguments)}var bo={symbols:{"*":{infix:{symbol:`*`,f:ho,notation:`infix`,precedence:4,rightToLeft:0,argCount:2},symbol:`*`,regSymbol:`\\*`},"/":{infix:{symbol:`/`,f:go,notation:`infix`,precedence:4,rightToLeft:0,argCount:2},symbol:`/`,regSymbol:`/`},"+":{infix:{symbol:`+`,f:po,notation:`infix`,precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:`+`,f:uo,notation:`prefix`,precedence:3,rightToLeft:0,argCount:1},symbol:`+`,regSymbol:`\\+`},"-":{infix:{symbol:`-`,f:mo,notation:`infix`,precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:`-`,f:fo,notation:`prefix`,precedence:3,rightToLeft:0,argCount:1},symbol:`-`,regSymbol:`-`},",":{infix:{symbol:`,`,f:yo,notation:`infix`,precedence:1,rightToLeft:0,argCount:2},symbol:`,`,regSymbol:`,`},"(":{prefix:{symbol:`(`,f:uo,notation:`prefix`,precedence:0,rightToLeft:0,argCount:1},symbol:`(`,regSymbol:`\\(`},")":{postfix:{symbol:`)`,f:void 0,notation:`postfix`,precedence:0,rightToLeft:0,argCount:1},symbol:`)`,regSymbol:`\\)`},min:{func:{symbol:`min`,f:vo,notation:`func`,precedence:0,rightToLeft:0,argCount:1},symbol:`min`,regSymbol:`min\\b`},max:{func:{symbol:`max`,f:_o,notation:`func`,precedence:0,rightToLeft:0,argCount:1},symbol:`max`,regSymbol:`max\\b`}}},xo=function(e){io(t,e);function t(t){return no(e.call(this,`An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#`+t+` for more information.`)||this)}return t}(lo(Error)),So=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function Co(e){var t={};return t.symbols=e?to({},bo.symbols,e.symbols):to({},bo.symbols),t}function wo(e,t){var n,r=e.pop();return t.push(r.f.apply(r,(n=[]).concat.apply(n,t.splice(-r.argCount)))),r.precedence}function To(e,t){var n=Co(t),r,i=[n.symbols[`(`].prefix],a=[],o=RegExp(`\\d+(?:\\.\\d+)?|`+Object.keys(n.symbols).map(function(e){return n.symbols[e]}).sort(function(e,t){return t.symbol.length-e.symbol.length}).map(function(e){return e.regSymbol}).join(`|`)+`|(\\S)`,`g`);o.lastIndex=0;var s=!1;do{r=o.exec(e);var c=r||[`)`,void 0],l=c[0],u=c[1],d=n.symbols[l],f=d&&!d.prefix&&!d.func,p=!d||!d.postfix&&!d.infix;if(u||(s?p:f))throw new xo(37,r?r.index:e.length,e);if(s){var m=d.postfix||d.infix;do{var h=i[i.length-1];if((m.precedence-h.precedence||h.rightToLeft)>0)break}while(wo(i,a));s=m.notation===`postfix`,m.symbol!==`)`&&(i.push(m),s&&wo(i,a))}else if(d){if(i.push(d.prefix||d.func),d.func&&(r=o.exec(e),!r||r[0]!==`(`))throw new xo(38,r?r.index:e.length,e)}else a.push(+l),s=!0}while(r&&i.length);if(i.length)throw new xo(39,r?r.index:e.length,e);if(r)throw new xo(40,r?r.index:e.length,e);return a.pop()}function Eo(e){return e.split(``).reverse().join(``)}function Do(e,t){var n=Eo(e),r=n.match(So);if(r&&!r.every(function(e){return e===r[0]}))throw new xo(41);return``+To(Eo(n.replace(So,``)),t)+(r?Eo(r[0]):``)}function Oo(e,t){return e.substr(-t.length)===t}var ko=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function Ao(e){return typeof e==`string`&&e.match(ko)?parseFloat(e):e}var jo=function(e){return function(t,n){n===void 0&&(n=`16px`);var r=t,i=n;if(typeof t==`string`){if(!Oo(t,`px`))throw new xo(69,e,t);r=Ao(t)}if(typeof n==`string`){if(!Oo(n,`px`))throw new xo(70,e,n);i=Ao(n)}if(typeof r==`string`)throw new xo(71,t,e);if(typeof i==`string`)throw new xo(72,n,e);return``+r/i+e}}(`em`),Mo=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function No(e){if(typeof e!=`string`)return[e,``];var t=e.match(Mo);return t?[parseFloat(e),t[2]]:[e,void 0]}function Po(){return{border:`0`,clip:`rect(0 0 0 0)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:`0`,position:`absolute`,whiteSpace:`nowrap`,width:`1px`}}function Fo(e){return Math.round(e*255)}function Io(e,t,n){return Fo(e)+`,`+Fo(t)+`,`+Fo(n)}function Lo(e,t,n,r){if(r===void 0&&(r=Io),t===0)return r(n,n,n);var i=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*t,o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);var u=n-a/2,d=s+u,f=c+u,p=l+u;return r(d,f,p)}var Ro={aliceblue:`f0f8ff`,antiquewhite:`faebd7`,aqua:`00ffff`,aquamarine:`7fffd4`,azure:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`000`,blanchedalmond:`ffebcd`,blue:`0000ff`,blueviolet:`8a2be2`,brown:`a52a2a`,burlywood:`deb887`,cadetblue:`5f9ea0`,chartreuse:`7fff00`,chocolate:`d2691e`,coral:`ff7f50`,cornflowerblue:`6495ed`,cornsilk:`fff8dc`,crimson:`dc143c`,cyan:`00ffff`,darkblue:`00008b`,darkcyan:`008b8b`,darkgoldenrod:`b8860b`,darkgray:`a9a9a9`,darkgreen:`006400`,darkgrey:`a9a9a9`,darkkhaki:`bdb76b`,darkmagenta:`8b008b`,darkolivegreen:`556b2f`,darkorange:`ff8c00`,darkorchid:`9932cc`,darkred:`8b0000`,darksalmon:`e9967a`,darkseagreen:`8fbc8f`,darkslateblue:`483d8b`,darkslategray:`2f4f4f`,darkslategrey:`2f4f4f`,darkturquoise:`00ced1`,darkviolet:`9400d3`,deeppink:`ff1493`,deepskyblue:`00bfff`,dimgray:`696969`,dimgrey:`696969`,dodgerblue:`1e90ff`,firebrick:`b22222`,floralwhite:`fffaf0`,forestgreen:`228b22`,fuchsia:`ff00ff`,gainsboro:`dcdcdc`,ghostwhite:`f8f8ff`,gold:`ffd700`,goldenrod:`daa520`,gray:`808080`,green:`008000`,greenyellow:`adff2f`,grey:`808080`,honeydew:`f0fff0`,hotpink:`ff69b4`,indianred:`cd5c5c`,indigo:`4b0082`,ivory:`fffff0`,khaki:`f0e68c`,lavender:`e6e6fa`,lavenderblush:`fff0f5`,lawngreen:`7cfc00`,lemonchiffon:`fffacd`,lightblue:`add8e6`,lightcoral:`f08080`,lightcyan:`e0ffff`,lightgoldenrodyellow:`fafad2`,lightgray:`d3d3d3`,lightgreen:`90ee90`,lightgrey:`d3d3d3`,lightpink:`ffb6c1`,lightsalmon:`ffa07a`,lightseagreen:`20b2aa`,lightskyblue:`87cefa`,lightslategray:`789`,lightslategrey:`789`,lightsteelblue:`b0c4de`,lightyellow:`ffffe0`,lime:`0f0`,limegreen:`32cd32`,linen:`faf0e6`,magenta:`f0f`,maroon:`800000`,mediumaquamarine:`66cdaa`,mediumblue:`0000cd`,mediumorchid:`ba55d3`,mediumpurple:`9370db`,mediumseagreen:`3cb371`,mediumslateblue:`7b68ee`,mediumspringgreen:`00fa9a`,mediumturquoise:`48d1cc`,mediumvioletred:`c71585`,midnightblue:`191970`,mintcream:`f5fffa`,mistyrose:`ffe4e1`,moccasin:`ffe4b5`,navajowhite:`ffdead`,navy:`000080`,oldlace:`fdf5e6`,olive:`808000`,olivedrab:`6b8e23`,orange:`ffa500`,orangered:`ff4500`,orchid:`da70d6`,palegoldenrod:`eee8aa`,palegreen:`98fb98`,paleturquoise:`afeeee`,palevioletred:`db7093`,papayawhip:`ffefd5`,peachpuff:`ffdab9`,peru:`cd853f`,pink:`ffc0cb`,plum:`dda0dd`,powderblue:`b0e0e6`,purple:`800080`,rebeccapurple:`639`,red:`f00`,rosybrown:`bc8f8f`,royalblue:`4169e1`,saddlebrown:`8b4513`,salmon:`fa8072`,sandybrown:`f4a460`,seagreen:`2e8b57`,seashell:`fff5ee`,sienna:`a0522d`,silver:`c0c0c0`,skyblue:`87ceeb`,slateblue:`6a5acd`,slategray:`708090`,slategrey:`708090`,snow:`fffafa`,springgreen:`00ff7f`,steelblue:`4682b4`,tan:`d2b48c`,teal:`008080`,thistle:`d8bfd8`,tomato:`ff6347`,turquoise:`40e0d0`,violet:`ee82ee`,wheat:`f5deb3`,white:`fff`,whitesmoke:`f5f5f5`,yellow:`ff0`,yellowgreen:`9acd32`};function zo(e){if(typeof e!=`string`)return e;var t=e.toLowerCase();return Ro[t]?`#`+Ro[t]:e}var Bo=/^#[a-fA-F0-9]{6}$/,Vo=/^#[a-fA-F0-9]{8}$/,Ho=/^#[a-fA-F0-9]{3}$/,Uo=/^#[a-fA-F0-9]{4}$/,Wo=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Go=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Ko=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,qo=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Jo(e){if(typeof e!=`string`)throw new xo(3);var t=zo(e);if(t.match(Bo))return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16)};if(t.match(Vo)){var n=parseFloat((parseInt(``+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16),alpha:n}}if(t.match(Ho))return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16)};if(t.match(Uo)){var r=parseFloat((parseInt(``+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16),alpha:r}}var i=Wo.exec(t);if(i)return{red:parseInt(``+i[1],10),green:parseInt(``+i[2],10),blue:parseInt(``+i[3],10)};var a=Go.exec(t.substring(0,50));if(a)return{red:parseInt(``+a[1],10),green:parseInt(``+a[2],10),blue:parseInt(``+a[3],10),alpha:parseFloat(``+a[4])>1?parseFloat(``+a[4])/100:parseFloat(``+a[4])};var o=Ko.exec(t);if(o){var s=`rgb(`+Lo(parseInt(``+o[1],10),parseInt(``+o[2],10)/100,parseInt(``+o[3],10)/100)+`)`,c=Wo.exec(s);if(!c)throw new xo(4,t,s);return{red:parseInt(``+c[1],10),green:parseInt(``+c[2],10),blue:parseInt(``+c[3],10)}}var l=qo.exec(t.substring(0,50));if(l){var u=`rgb(`+Lo(parseInt(``+l[1],10),parseInt(``+l[2],10)/100,parseInt(``+l[3],10)/100)+`)`,d=Wo.exec(u);if(!d)throw new xo(4,t,u);return{red:parseInt(``+d[1],10),green:parseInt(``+d[2],10),blue:parseInt(``+d[3],10),alpha:parseFloat(``+l[4])>1?parseFloat(``+l[4])/100:parseFloat(``+l[4])}}throw new xo(5)}function Yo(e){var t=e.red/255,n=e.green/255,r=e.blue/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2;if(i===a)return e.alpha===void 0?{hue:0,saturation:0,lightness:o}:{hue:0,saturation:0,lightness:o,alpha:e.alpha};var s,c=i-a,l=o>.5?c/(2-i-a):c/(i+a);switch(i){case t:s=(n-r)/c+(n<r?6:0);break;case n:s=(r-t)/c+2;break;default:s=(t-n)/c+4;break}return s*=60,e.alpha===void 0?{hue:s,saturation:l,lightness:o}:{hue:s,saturation:l,lightness:o,alpha:e.alpha}}function Xo(e){return Yo(Jo(e))}var Zo=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?`#`+e[1]+e[3]+e[5]:e};function Qo(e){var t=e.toString(16);return t.length===1?`0`+t:t}function $o(e){return Qo(Math.round(e*255))}function es(e,t,n){return Zo(`#`+$o(e)+$o(t)+$o(n))}function ts(e,t,n){return Lo(e,t,n,es)}function ns(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return ts(e,t,n);if(typeof e==`object`&&t===void 0&&n===void 0)return ts(e.hue,e.saturation,e.lightness);throw new xo(1)}function rs(e,t,n,r){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?ts(e,t,n):`rgba(`+Lo(e,t,n)+`,`+r+`)`;if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?ts(e.hue,e.saturation,e.lightness):`rgba(`+Lo(e.hue,e.saturation,e.lightness)+`,`+e.alpha+`)`;throw new xo(2)}function is(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return Zo(`#`+Qo(e)+Qo(t)+Qo(n));if(typeof e==`object`&&t===void 0&&n===void 0)return Zo(`#`+Qo(e.red)+Qo(e.green)+Qo(e.blue));throw new xo(6)}function as(e,t,n,r){if(typeof e==`string`&&typeof t==`number`){var i=Jo(e);return`rgba(`+i.red+`,`+i.green+`,`+i.blue+`,`+t+`)`}else if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?is(e,t,n):`rgba(`+e+`,`+t+`,`+n+`,`+r+`)`;else if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?is(e.red,e.green,e.blue):`rgba(`+e.red+`,`+e.green+`,`+e.blue+`,`+e.alpha+`)`;throw new xo(7)}var os=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},ss=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&typeof e.alpha==`number`},cs=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},ls=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&typeof e.alpha==`number`};function us(e){if(typeof e!=`object`)throw new xo(8);if(ss(e))return as(e);if(os(e))return is(e);if(ls(e))return rs(e);if(cs(e))return ns(e);throw new xo(8)}function ds(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):ds(e,t,r)}}function fs(e){return ds(e,e.length,[])}function ps(e,t){if(t===`transparent`)return t;var n=Xo(t);return us(to({},n,{hue:n.hue+parseFloat(e)}))}fs(ps);function ms(e,t,n){return Math.max(e,Math.min(t,n))}function hs(e,t){if(t===`transparent`)return t;var n=Xo(t);return us(to({},n,{lightness:ms(0,1,n.lightness-parseFloat(e))}))}var gs=fs(hs);function _s(e,t){if(t===`transparent`)return t;var n=Xo(t);return us(to({},n,{saturation:ms(0,1,n.saturation-parseFloat(e))}))}fs(_s);function vs(e){if(e===`transparent`)return 0;var t=Jo(e),n=Object.keys(t).map(function(e){var n=t[e]/255;return n<=.03928?n/12.92:((n+.055)/1.055)**2.4}),r=n[0],i=n[1],a=n[2];return parseFloat((.2126*r+.7152*i+.0722*a).toFixed(3))}function ys(e,t){var n=vs(e),r=vs(t);return parseFloat((n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)).toFixed(2))}function bs(e,t){if(t===`transparent`)return t;var n=Xo(t);return us(to({},n,{lightness:ms(0,1,n.lightness+parseFloat(e))}))}var xs=fs(bs);function Ss(e,t,n){if(t===`transparent`)return n;if(n===`transparent`)return t;if(e===0)return n;var r=Jo(t),i=to({},r,{alpha:typeof r.alpha==`number`?r.alpha:1}),a=Jo(n),o=to({},a,{alpha:typeof a.alpha==`number`?a.alpha:1}),s=i.alpha-o.alpha,c=parseFloat(e)*2-1,l=((c*s===-1?c:c+s)/(1+c*s)+1)/2,u=1-l;return as({red:Math.floor(i.red*l+o.red*u),green:Math.floor(i.green*l+o.green*u),blue:Math.floor(i.blue*l+o.blue*u),alpha:i.alpha*parseFloat(e)+o.alpha*(1-parseFloat(e))})}var Cs=fs(Ss);function ws(e,t){if(t===`transparent`)return t;var n=Jo(t);return as(to({},n,{alpha:ms(0,1,((typeof n.alpha==`number`?n.alpha:1)*100+parseFloat(e)*100)/100)}))}fs(ws);var Ts=`#000`,Es=`#fff`;function Ds(e,t,n,r){t===void 0&&(t=Ts),n===void 0&&(n=Es),r===void 0&&(r=!0);var i=vs(e)>.179,a=i?t:n;return!r||ys(e,a)>=4.5?a:i?Ts:Es}function Os(e,t){if(t===`transparent`)return t;var n=Xo(t);return us(to({},n,{saturation:ms(0,1,n.saturation+parseFloat(e))}))}fs(Os);function ks(e,t){return t===`transparent`?t:us(to({},Xo(t),{hue:parseFloat(e)}))}fs(ks);function As(e,t){return t===`transparent`?t:us(to({},Xo(t),{lightness:parseFloat(e)}))}fs(As);function js(e,t){return t===`transparent`?t:us(to({},Xo(t),{saturation:parseFloat(e)}))}fs(js);function Ms(e,t){return t===`transparent`?t:Cs(parseFloat(e),`rgb(0, 0, 0)`,t)}fs(Ms);function Ns(e,t){return t===`transparent`?t:Cs(parseFloat(e),`rgb(255, 255, 255)`,t)}fs(Ns);function Ps(e,t){if(t===`transparent`)return t;var n=Jo(t);return as(to({},n,{alpha:ms(0,1,((typeof n.alpha==`number`?n.alpha:1)*100-parseFloat(e)*100).toFixed(2)/100)}))}fs(Ps);var Fs=o(((e,t)=>{var n=`__lodash_hash_undefined__`,r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/,a=/^\./,o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/[\\^$.*+?()[\]{}|]/g,c=/\\(\\)?/g,l=/^\[object .+?Constructor\]$/,u=typeof global==`object`&&global&&global.Object===Object&&global,d=typeof self==`object`&&self&&self.Object===Object&&self,f=u||d||Function(`return this`)();function p(e,t){return e?.[t]}function m(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var h=Array.prototype,g=Function.prototype,_=Object.prototype,v=f[`__core-js_shared__`],y=function(){var e=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),b=g.toString,x=_.hasOwnProperty,S=_.toString,C=RegExp(`^`+b.call(x).replace(s,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),w=f.Symbol,T=h.splice,E=be(f,`Map`),D=be(Object,`create`),O=w?w.prototype:void 0,k=O?O.toString:void 0;function A(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function j(){this.__data__=D?D(null):{}}function ee(e){return this.has(e)&&delete this.__data__[e]}function te(e){var t=this.__data__;if(D){var r=t[e];return r===n?void 0:r}return x.call(t,e)?t[e]:void 0}function M(e){var t=this.__data__;return D?t[e]!==void 0:x.call(t,e)}function ne(e,t){var r=this.__data__;return r[e]=D&&t===void 0?n:t,this}A.prototype.clear=j,A.prototype.delete=ee,A.prototype.get=te,A.prototype.has=M,A.prototype.set=ne;function re(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function N(){this.__data__=[]}function ie(e){var t=this.__data__,n=me(t,e);return n<0?!1:(n==t.length-1?t.pop():T.call(t,n,1),!0)}function ae(e){var t=this.__data__,n=me(t,e);return n<0?void 0:t[n][1]}function oe(e){return me(this.__data__,e)>-1}function se(e,t){var n=this.__data__,r=me(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}re.prototype.clear=N,re.prototype.delete=ie,re.prototype.get=ae,re.prototype.has=oe,re.prototype.set=se;function ce(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function le(){this.__data__={hash:new A,map:new(E||re),string:new A}}function ue(e){return ye(this,e).delete(e)}function de(e){return ye(this,e).get(e)}function fe(e){return ye(this,e).has(e)}function pe(e,t){return ye(this,e).set(e,t),this}ce.prototype.clear=le,ce.prototype.delete=ue,ce.prototype.get=de,ce.prototype.has=fe,ce.prototype.set=pe;function me(e,t){for(var n=e.length;n--;)if(De(e[n][0],t))return n;return-1}function he(e,t){t=xe(t,e)?[t]:ve(t);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Te(t[n++])];return n&&n==r?e:void 0}function ge(e){return!Ae(e)||Ce(e)?!1:(ke(e)||m(e)?C:l).test(Ee(e))}function _e(e){if(typeof e==`string`)return e;if(F(e))return k?k.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function ve(e){return Oe(e)?e:we(e)}function ye(e,t){var n=e.__data__;return Se(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function be(e,t){var n=p(e,t);return ge(n)?n:void 0}function xe(e,t){if(Oe(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||F(e)?!0:i.test(e)||!r.test(e)||t!=null&&e in Object(t)}function Se(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Ce(e){return!!y&&y in e}var we=P(function(e){e=Me(e);var t=[];return a.test(e)&&t.push(``),e.replace(o,function(e,n,r,i){t.push(r?i.replace(c,`$1`):n||e)}),t});function Te(e){if(typeof e==`string`||F(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Ee(e){if(e!=null){try{return b.call(e)}catch{}try{return e+``}catch{}}return``}function P(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(`Expected a function`);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o),o};return n.cache=new(P.Cache||ce),n}P.Cache=ce;function De(e,t){return e===t||e!==e&&t!==t}var Oe=Array.isArray;function ke(e){var t=Ae(e)?S.call(e):``;return t==`[object Function]`||t==`[object GeneratorFunction]`}function Ae(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function je(e){return!!e&&typeof e==`object`}function F(e){return typeof e==`symbol`||je(e)&&S.call(e)==`[object Symbol]`}function Me(e){return e==null?``:_e(e)}function Ne(e,t,n){var r=e==null?void 0:he(e,t);return r===void 0?n:r}t.exports=Ne})),Is=o(((e,t)=>{var n=`__lodash_hash_undefined__`,r=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,a=typeof global==`object`&&global&&global.Object===Object&&global,o=typeof self==`object`&&self&&self.Object===Object&&self,s=a||o||Function(`return this`)();function c(e,t){return e?.[t]}function l(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var u=Array.prototype,d=Function.prototype,f=Object.prototype,p=s[`__core-js_shared__`],m=function(){var e=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),h=d.toString,g=f.hasOwnProperty,_=f.toString,v=RegExp(`^`+h.call(g).replace(r,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),y=u.splice,b=le(s,`Map`),x=le(Object,`create`);function S(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function C(){this.__data__=x?x(null):{}}function w(e){return this.has(e)&&delete this.__data__[e]}function T(e){var t=this.__data__;if(x){var r=t[e];return r===n?void 0:r}return g.call(t,e)?t[e]:void 0}function E(e){var t=this.__data__;return x?t[e]!==void 0:g.call(t,e)}function D(e,t){var r=this.__data__;return r[e]=x&&t===void 0?n:t,this}S.prototype.clear=C,S.prototype.delete=w,S.prototype.get=T,S.prototype.has=E,S.prototype.set=D;function O(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function k(){this.__data__=[]}function A(e){var t=this.__data__,n=oe(t,e);return n<0?!1:(n==t.length-1?t.pop():y.call(t,n,1),!0)}function j(e){var t=this.__data__,n=oe(t,e);return n<0?void 0:t[n][1]}function ee(e){return oe(this.__data__,e)>-1}function te(e,t){var n=this.__data__,r=oe(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}O.prototype.clear=k,O.prototype.delete=A,O.prototype.get=j,O.prototype.has=ee,O.prototype.set=te;function M(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ne(){this.__data__={hash:new S,map:new(b||O),string:new S}}function re(e){return ce(this,e).delete(e)}function N(e){return ce(this,e).get(e)}function ie(e){return ce(this,e).has(e)}function ae(e,t){return ce(this,e).set(e,t),this}M.prototype.clear=ne,M.prototype.delete=re,M.prototype.get=N,M.prototype.has=ie,M.prototype.set=ae;function oe(e,t){for(var n=e.length;n--;)if(me(e[n][0],t))return n;return-1}function se(e){return!ge(e)||de(e)?!1:(he(e)||l(e)?v:i).test(fe(e))}function ce(e,t){var n=e.__data__;return ue(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function le(e,t){var n=c(e,t);return se(n)?n:void 0}function ue(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function de(e){return!!m&&m in e}function fe(e){if(e!=null){try{return h.call(e)}catch{}try{return e+``}catch{}}return``}function pe(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(`Expected a function`);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o),o};return n.cache=new(pe.Cache||M),n}pe.Cache=M;function me(e,t){return e===t||e!==e&&t!==t}function he(e){var t=ge(e)?_.call(e):``;return t==`[object Function]`||t==`[object GeneratorFunction]`}function ge(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}t.exports=pe})),Ls=c(Fs()),Rs=c(Is()),zs=(e,t,n)=>{if(t!==n){let r=Math.abs(t-n)/100*.05;return t>n?gs(r,e):xs(r,e)}return e},Bs=(e,t,n,r)=>{let i;if(e===void 0)i=r===`dark`?n===void 0?600:500:700;else if(i=parseInt(e.toString(),10),isNaN(i))throw TypeError(`Error: unexpected '${typeof e}' type for color shade "${e}"`);return i+(t||0)},Vs=(e,t,n,r,i)=>{let a=Bs(t,n,r,i),o=e[a];if(!o){let t=Object.keys(e).map(e=>parseInt(e,10)).reduce((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e);o=zs(e[t],a,t)}return o},Hs=e=>{let t=[`currentcolor`,`inherit`,`transparent`].includes(e);if(!t)try{t=!!Ra(e)}catch{t=!1}return t};function Us(e,t,n=0){if(typeof e!=`number`||isNaN(e))throw Error(`Target must be a number.`);if(!Array.isArray(t))throw Error(`Second argument must be an array.`);let r=n,i=t.length-1;if(e<t[r])return r;if(e>t[i])return i;for(;r<=i;){let n=Math.floor((r+i)/2);if(t[n]===e)return n;t[n]<e?r=n+1:i=n-1}return t[r]-e<e-t[i]?r:i}var Ws={100:1.08,200:1.2,300:1.35,400:2,500:2.8,600:3.3,700:5,800:10,900:13,1e3:16,1100:17.5,1200:19},Gs=(0,Rs.default)(e=>{let t=$a(`#FFF`,e,`#000`),n=e=>t(e/200),r=[],i=[];for(let e=0;e<=200;e++){let t=eo(n(e));r.push(t),i.push(ys(`#FFF`,t))}let a={},o=0;for(let e in Ws)if(Object.prototype.hasOwnProperty.call(Ws,e)){let t=Ws[e],n=Us(t,i,o);o=n+1,a[e]=r[n]}return a}),Ks=(e,t,n,r,i,a,o,s)=>{let c,l=e[i]||i;if(Object.prototype.hasOwnProperty.call(t,l)&&(l=t[l]),typeof l==`object`?c=Vs(l,a,o,s,r):Hs(l)&&(a===void 0?c=l:(l=Gs(l),c=Vs(l,a,o,s,r))),c&&s){let e=s>1?n[s]:s;if(e===void 0)throw Error("Error: invalid `transparency` parameter");c=as(c,e)}return c},qs=(e,t)=>{let n=(0,Ls.default)(e,t);if(typeof n==`string`)return n;throw n===void 0?ReferenceError(`Error: color variable '${t}' is not defined`):TypeError(`Error: unexpected '${typeof n}' type for color variable "${t}"`)},Js=e=>{let t;try{let[n,r,i,a]=Ra(e);t={property:eo(`rgb(${n}, ${r}, ${i})`),transparency:a}}catch{let n=/rgba\s*\(\s*(?<property>[#\w.]+)\s*,\s*(?<alpha>[\w.]+)\s*\)/gu.exec(e);if(n&&n.groups)t={property:n.groups.property,transparency:parseFloat(n.groups.alpha)};else throw Error(`Error: invalid \`rgba\` value "${e}"`)}return t},Ys=(e,t,n)=>{let r={},i=qs(t,e);if(i.startsWith(`rgba`)){let e=Js(i);i=e.property,r.transparency=e.transparency}let[a,o]=i.split(/\.(?<value>.*)/u);return a===`palette`?r.hue=qs(n,o):(r.hue=a,o!==void 0&&(r.shade=parseInt(o,10))),r},Xs=new WeakMap,Zs={colors:0,palette:0,opacity:0};Xs.set(Ma.colors,Zs.colors),Xs.set(Ma.palette,Zs.palette),Xs.set(Ma.opacity,Zs.opacity);var Qs=({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c;a.colors&&(c=Xs.get(a.colors),c===void 0&&(c=++Zs.colors,Xs.set(a.colors,c)));let l;a.opacity&&(l=Xs.get(a.opacity),l===void 0&&(l=++Zs.opacity,Xs.set(a.opacity,l)));let u;a.palette&&(u=Xs.get(a.palette),u===void 0&&(u=++Zs.palette,Xs.set(a.palette,u)));let d=`{${c},${u},${l}}`;return s!==void 0&&(d+=`,${s}`),t!==void 0&&(d+=`,${t}`),i!==void 0&&(d+=`,${i}`),r!==void 0&&(d+=`,${r}`),o!==void 0&&(d+=`,${o}`),e!==void 0&&(d+=`,${JSON.stringify(e)}`),n!==void 0&&(d+=`,${JSON.stringify(n)}`),d},U=(0,Rs.default)(({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c,l=a.palette&&Object.keys(a.palette).length>0?a.palette:Ma.palette,{base:u,variables:d,...f}=a.colors&&Object.keys(a.colors).length>0?a.colors:Ma.colors,p=u===`dark`?`dark`:`light`,m=p===`dark`?e:n,h=m?.hue||t,g=m?.shade===void 0?i:m.shade,_=m?.offset===void 0?r:m.offset,v=m?.transparency===void 0?o:m.transparency;if(s){let e=Ys(s,d?.[p]?d[p]:Ma.colors.variables[p],l);h=e.hue,g=e.shade,v=v===void 0?e.transparency:v}if(h&&(c=Ks(f,l,a.opacity&&Object.keys(a.opacity).length>0?a.opacity:Ma.opacity,p,h,g,_,v)),c===void 0)throw Error("Error: invalid `getColor` parameters");return c},({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>Qs({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})),$s={black:`#000`,white:`#fff`,product:{support:`#00a656`,message:`#37b8af`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,connect:`#ff6224`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f8f9f9`,200:`#e9ebed`,300:`#d8dcde`,400:`#c2c8cc`,500:`#87929d`,600:`#68737d`,700:`#49545c`,800:`#2f3941`},blue:{100:`#edf7ff`,200:`#cee2f2`,300:`#adcce4`,400:`#5293c7`,500:`#337fbd`,600:`#1f73b7`,700:`#144a75`,800:`#0f3554`},red:{100:`#fff0f1`,200:`#f5d5d8`,300:`#f5b5ba`,400:`#e35b66`,500:`#d93f4c`,600:`#cc3340`,700:`#8c232c`,800:`#681219`},yellow:{100:`#fff7ed`,200:`#ffeedb`,300:`#fed6a8`,400:`#ffb057`,500:`#f79a3e`,600:`#ed8f1c`,700:`#ad5918`,800:`#703815`},green:{100:`#edf8f4`,200:`#d1e8df`,300:`#aecfc2`,400:`#5eae91`,500:`#228f67`,600:`#038153`,700:`#186146`,800:`#0b3b29`},kale:{100:`#f5fcfc`,200:`#daeded`,300:`#bdd9d7`,400:`#90bbbb`,500:`#498283`,600:`#17494d`,700:`#03363d`,800:`#012b30`},fuschia:{400:`#d653c2`,600:`#a81897`,M400:`#cf62a8`,M600:`#a8458c`},pink:{400:`#ec4d63`,600:`#d42054`,M400:`#d57287`,M600:`#b23a5d`},crimson:{400:`#e34f32`,600:`#c72a1c`,M400:`#cc6c5b`,M600:`#b24a3c`},orange:{400:`#de701d`,600:`#bf5000`,M400:`#d4772c`,M600:`#b35827`},lemon:{400:`#ffd424`,600:`#ffbb10`,M400:`#e7a500`,M600:`#c38f00`},lime:{400:`#43b324`,600:`#2e8200`,M400:`#519e2d`,M600:`#47782c`},mint:{400:`#00a656`,600:`#058541`,M400:`#299c66`,M600:`#2e8057`},teal:{400:`#02a191`,600:`#028079`,M400:`#2d9e8f`,M600:`#3c7873`},azure:{400:`#3091ec`,600:`#1371d6`,M400:`#5f8dcf`,M600:`#3a70b2`},royal:{400:`#5d7df5`,600:`#3353e2`,M400:`#7986d8`,M600:`#4b61c3`},purple:{400:`#b552e2`,600:`#6a27b8`,M400:`#b072cc`,M600:`#9358b0`}},ec=(e,t,n)=>{if(t!==n){let r=Math.abs(t-n)/100*.05;return t>n?gs(r,e):xs(r,e)}return e},tc=new WeakMap,nc={colors:0,palette:0};tc.set(Ma.colors,nc.colors),tc.set(Ma.palette,nc.palette);var rc=({hue:e,shade:t,theme:n,transparency:r})=>{let i=`${typeof e==`object`?JSON.stringify(e):e}`;if(t!==void 0&&(i+=`,${t}`),n!==void 0){let e;n.colors&&(e=tc.get(n.colors),e===void 0&&(e=++nc.colors,tc.set(n.colors,e)));let t;n.palette&&(t=tc.get(n.palette),t===void 0&&(t=++nc.palette,tc.set(n.palette,t))),i+=`,{${e},${t}}`}return r!==void 0&&(i+=`,${r}`),i},ic=(0,Rs.default)((e,t=600,n,r)=>{let i;if(isNaN(t))return;let a={background:$s.white,foreground:$s.grey[800],...n&&n.palette?{...n.palette,...$s}:{...Ma.palette,...$s}},o=n&&n.colors?n.colors:Ma.colors,s;if(s=typeof e==`string`&&o[e]||e,Object.prototype.hasOwnProperty.call(a,s)&&(s=a[s]),typeof s==`object`){if(i=s[t],!i){let e=Object.keys(s).map(e=>parseInt(e,10)).reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e);i=ec(s[e],t,e)}}else i=ec(s,t,600);return r&&(i=as(i,r)),i},(e,t,n,r)=>rc({hue:e,shade:t,theme:n,transparency:r})),ac={end:`right`,"end-top":`right-start`,"end-bottom":`right-end`,start:`left`,"start-top":`left-start`,"start-bottom":`left-end`},oc={left:`right`,"left-start":`right-start`,"left-end":`right-end`,right:`left`,"right-start":`left-start`,"right-end":`left-end`},sc=(e,t)=>{let n=ac[e]||e;return t.rtl&&(n=oc[n]||n),n},cc={top:[`top-start`,`top`,`top-end`],right:[`right-start`,`right`,`right-end`],bottom:[`bottom-start`,`bottom`,`bottom-end`],left:[`left-start`,`left`,`left-end`]},lc={top:`bottom`,right:`left`,bottom:`top`,left:`right`},uc=(e,t,n)=>{if(Array.isArray(n)&&n.length>0)return n.map(e=>sc(e,t));let r=e.split(`-`)[0],i=[...cc[r]],a=cc[lc[r]];return i.splice(i.indexOf(e),1),[...i,...a]},dc=(e,t,n)=>{let r=sc(t,e);return[r,uc(r,e,n)]},fc=({boxShadow:e,inset:t=!1,color:n={variable:`border.primaryEmphasis`},shadowWidth:r=`md`,spacerColor:i={variable:`background.default`},spacerWidth:a=`xs`,theme:o=Ma,...s})=>{let c=s,l=c.hue?ic(c.hue,c.shade,o):U({...n,theme:o}),u=o.shadows[r](l);if(a===null)return`${t?`inset`:``} ${u}`;let d=c.spacerHue?ic(c.spacerHue,c.spacerShade,o):U({...i,theme:o}),f=`
    ${t?`inset`:``} ${o.shadows[a](d)},
    ${t?`inset`:``} ${u}`;return e?`${f}, ${e}`:f};function pc(e,t){let[n,r]=No(e.toString()),[i,a]=No(t.toString());if(r&&r!==`px`)throw Error(`Unexpected \`height\` with '${r}' units.`);if(a&&a!==`px`)throw Error(`Unexpected \`fontSize\` with '${a}' units.`);return n/i}var mc=e=>e.split(`-`)[0],hc=(e,t)=>{let n=Object.keys(e),r=n.indexOf(t)+1;if(n[r]){let t=No(e[n[r]]);return`${t[0]-.02}${t[1]}`}};function gc(e,t,n){let r,i,a,o=n&&n.breakpoints?n.breakpoints:Ma.breakpoints;if(typeof t==`string`?e===`up`?i=o[t]:e===`down`?t===`xl`?i=Ma.breakpoints.xs:a=hc(o,t):e===`only`&&(i=o[t],a=hc(o,t)):e===`between`&&(i=o[t[0]],a=hc(o,t[1])),i)r=`@media (min-width: ${i})`,a&&(r=`${r} and (max-width: ${a})`);else if(a)r=`@media (max-width: ${a})`;else throw Error(`Unexpected query and breakpoint combination: '${e}', '${t}'.`);return r}var _c=(e,t)=>{let n=e.split(`-`)[0];return z([`&`,`::before,&`,`::after{animation:0.3s ease-in-out `,`;}`],t,t,Ei([`0%,66%{`,`:2px;border:transparent;}`],n))},vc=(e,t,n,r)=>{let i=t/-2,a=Math.round((i+n+.3)*100)/100,o=`${i}px`,s=`${a}px`,c=`${t+r}px`,l=r===0?`50%`:`calc(50% + ${r}px)`,u,d;return e.startsWith(`top`)?(d=`rotate(-135deg)`,u=z([`top:`,`;right:`,`;left:`,`;margin-left:`,`;`],s,e===`top-right`&&c,e===`top`?l:e===`top-left`&&c,e===`top`&&o)):e.startsWith(`right`)?(d=`rotate(-45deg)`,u=z([`top:`,`;right:`,`;bottom:`,`;margin-top:`,`;`],e===`right`?l:e===`right-top`&&c,s,e===`right-bottom`&&c,e===`right`&&o)):e.startsWith(`bottom`)?(d=`rotate(45deg)`,u=z([`right:`,`;bottom:`,`;left:`,`;margin-left:`,`;`],e===`bottom-right`&&c,s,e===`bottom`?l:e===`bottom-left`&&c,e===`bottom`&&o)):e.startsWith(`left`)&&(d=`rotate(135deg)`,u=z([`top:`,`;bottom:`,`;left:`,`;margin-top:`,`;`],e===`left`?l:e===`left-top`&&c,c,s,e===`left`&&o)),z([`&::before,&::after{transform:`,`;`,`;}`],d,u)};function yc(e,t={}){let n=Ao(t.inset||`0`),r=Ao(t.size||`6`),i=Ao(t.shift||`0`),a=r*2/Math.sqrt(2)+2,o=Math.round(a*100)/100,s=`${o}px`;return z([`position:relative;&::before,&::after{position:absolute;border-width:inherit;border-style:inherit;background-color:inherit;width:`,`;height:`,`;content:'';box-sizing:inherit;}&::before{border-color:inherit;clip-path:polygon(100% `,`px,`,`px 100%,100% 100%);}&::after{border-color:transparent;background-clip:content-box;clip-path:polygon(100% `,`px,`,`px 100%,100% 100%);}`,`;`,`;`],s,s,2,2,0,0,vc(e,o,n,i),t.animationModifier&&_c(e,t.animationModifier))}var W=e=>{let[t,n]=(0,g.useState)();return(0,g.useEffect)(()=>{e&&e.document?n(e.document):n(document)},[e]),t},bc=e=>{let[t,n]=(0,g.useState)();return(0,g.useEffect)(()=>{e&&e.window?n(e.window):n(window)},[e]),t},xc=(e,t,n,r,i=!0)=>{let a=i?t[n]:void 0;return(0,g.useMemo)(()=>{if(i){if(n===`children`)throw Error("Error: `children` is not a valid `useText` prop.");if(a===null||a===``)throw Error(e.displayName?`Error: you must provide a valid \`${n}\` text value for <${e.displayName}>.`:`Error: you must provide a valid \`${n}\` text value.`);if(a===void 0)return r}return a},[e.displayName,a,n,r,i])},Sc=(e,t)=>{let n=`${(t.theme||Ma).space.base*5}px`,r;e===`top`?r=`translateY`:e===`right`?(r=`translateX`,n=`-${n}`):e===`bottom`?(r=`translateY`,n=`-${n}`):r=`translateX`;let i=Ei([`0%{transform:`,`(`,`);pointer-events:none;}100%{pointer-events:auto;}`],r,n);return z([`&`,` `,`{animation:0.2s cubic-bezier(0.15,0.85,0.35,1.2) `,`;}`],t.animationModifier,t.childSelector||`> *`,i)},Cc=e=>{let t=U({theme:e,variable:`background.raised`}),n=U({theme:e,variable:`border.default`}),r=U({variable:`shadow.medium`,theme:e}),i=`${e.space.base*(e.colors.base===`dark`?5:6)}px`,a=`${e.space.base*(e.colors.base===`dark`?4:5)}px`,o=U({theme:e,variable:`foreground.default`});return z([`border-color:`,`;box-shadow:`,`;background-color:`,`;color:`,`;`],n,e.shadows.lg(a,i,r),t,o)},wc=e=>z([`transition:`,`;visibility:hidden;opacity:0;`],e.animationModifier&&`opacity 0.2s ease-in-out, 0.2s visibility 0s linear`);function Tc(e,t={}){let n=t.theme||Ma,r;return r=e===`top`?`margin-bottom`:e===`right`?`margin-left`:e===`bottom`?`margin-top`:`margin-right`,z([`position:absolute;z-index:`,`;`,`:`,`;line-height:0;font-size:0.01px;color-scheme:only `,`;& `,`{display:inline-block;position:relative;margin:0;box-sizing:border-box;border:`,`;border-radius:`,`;cursor:default;padding:0;text-align:`,`;white-space:normal;font-size:`,`;font-weight:`,`;direction:`,`;`,`;&:focus{outline:none;}}`,`;`,`;`],t.zIndex||0,r,t.margin,e=>e.theme.colors.base,t.childSelector||`> *`,n.borders.sm,n.borderRadii.md,n.rtl?`right`:`left`,n.fontSizes.md,n.fontWeights.regular,n.rtl&&`rtl`,Cc(n),t.animationModifier&&Sc(e,t),t.hidden&&wc(t))}var Ec=`&:focus-visible`,Dc=({condition:e=!0,selector:t=Ec,shadowWidth:n=`md`,spacerWidth:r=`xs`,styles:{boxShadow:i,...a}={},theme:o,...s})=>{let c=e?fc({boxShadow:i,shadowWidth:n,spacerWidth:r,theme:o,...s}):i,l,u;return r===null?l=o.shadowWidths[n]:(l=`${Do(`${o.shadowWidths[n]} - ${o.shadowWidths[r]}`)} solid transparent`,u=o.shadowWidths[r]),z([`&:focus{outline:none;}`,`{outline:`,`;outline-offset:`,`;box-shadow:`,`;`,`}`],t,l,u,c,a)},Oc=B(({children:e,theme:t,...n})=>(0,g.cloneElement)(g.Children.only(e),n)).withConfig({displayName:`StyledBaseIcon`,componentId:`sc-1moykgb-0`})([``]),kc=[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`end`,`end-top`,`end-bottom`,`start`,`start-top`,`start-bottom`],Ac=e=>z`
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
    color: ${U({theme:e.theme,variable:`foreground.disabled`})};
    ${e.disabledBg&&`background-color: ${e.disabledBg};`}
    ${e.disabledBorder&&`border-color: ${e.disabledBorder};`}
  }
`,jc=({theme:e,$isPill:t,$isPrimary:n,$isBasic:r,$isNeutral:i,$isDanger:a,$isLink:o})=>{let s={};return o&&a?(s.fg=U({theme:e,variable:`foreground.danger`}),s.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),s.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}})):o?(s.fg=U({theme:e,variable:`foreground.primary`}),s.hoverFg=U({theme:e,variable:`foreground.primary`,light:{offset:100},dark:{offset:-100}}),s.activeFg=U({theme:e,variable:`foreground.primary`,light:{offset:200},dark:{offset:-200}})):n&&a?(s.bg=U({theme:e,variable:`background.dangerEmphasis`}),s.fg=U({theme:e,variable:`foreground.onEmphasis`}),s.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),s.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):n?(s.bg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.fg=U({theme:e,variable:`foreground.onEmphasis`,light:{offset:0},dark:{offset:0}}),s.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),s.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):r&&a?(s.fg=U({theme:e,variable:`foreground.danger`}),s.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),s.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),s.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),s.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):r?(s.fg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.hoverFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),s.activeFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):a?(s.fg=U({theme:e,variable:`foreground.danger`}),s.border=U({theme:e,variable:`border.dangerEmphasis`}),s.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),s.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),s.hoverBorder=U({theme:e,variable:`border.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),s.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),s.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),s.activeBorder=U({theme:e,variable:`border.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):(s.fg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.border=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),s.hoverFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),s.hoverBorder=U({theme:e,hue:`neutralHue`,light:{shade:600},dark:{shade:500}}),s.activeFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),s.activeBorder=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:400}}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),s.disabledBorder=`transparent`),i===!1&&!n&&!o&&!a&&(s.fg=U({theme:e,variable:`foreground.primary`}),s.hoverFg=U({theme:e,variable:`foreground.primary`,light:{offset:100},dark:{offset:-100}}),s.activeFg=U({theme:e,variable:`foreground.primary`,light:{offset:200},dark:{offset:-200}})),z`
    ${!o&&`font-weight: ${e.fontWeights.semibold};`}
    border-radius: ${o||t===!1?e.borderRadii.md:e.borderRadii.full};
    ${Ac({theme:e,...s})}

    && svg {
      width: ${e.space.md};
      height: ${e.space.md};
    }
  `},Mc=({theme:e,$isPill:t,$isPrimary:n,$isBasic:r,$isDanger:i})=>{let a={};return n&&i?(a.bg=U({theme:e,variable:`background.dangerEmphasis`}),a.fg=U({theme:e,variable:`foreground.onEmphasis`}),a.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),a.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),a.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):n?(a.bg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.fg=U({theme:e,variable:`foreground.onEmphasis`,light:{offset:0},dark:{offset:0}}),a.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),a.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),a.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):i&&!r?(a.fg=U({theme:e,variable:`foreground.danger`}),a.border=U({theme:e,variable:`border.dangerEmphasis`}),a.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),a.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),a.hoverBorder=U({theme:e,variable:`border.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),a.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),a.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),a.activeBorder=U({theme:e,variable:`border.dangerEmphasis`,light:{offset:200},dark:{offset:-200}})):i?(a.fg=U({theme:e,variable:`foreground.danger`}),a.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),a.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),a.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),a.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]})):r?(a.fg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:500}}),a.hoverFg=U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:400}}),a.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),a.activeFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]})):(a.fg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:500}}),a.border=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),a.hoverFg=U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:400}}),a.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),a.hoverBorder=U({theme:e,hue:`neutralHue`,light:{shade:600},dark:{shade:700}}),a.activeFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),a.activeBorder=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:400}})),z`
    border-radius: ${t===!1?e.borderRadii.md:e.borderRadii.full};
    ${Ac({theme:e,...a})}

    && svg {
      width: ${e.space.md};
      height: ${e.space.md};
    }
  `},Nc=e=>({bg:U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),hoverBg:U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),activeBg:U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),disabledBg:U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[300]})}),Pc=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r,disabledBg:i}=Nc(e),a=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),o=U({theme:e,variable:`border.disabled`}),s=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),c=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),l=U({theme:e,variable:`border.primaryEmphasis`});return z`
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
      color: ${U({theme:e,variable:`foreground.onEmphasis`})};
    }
  `},Fc=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r,disabledBg:i}=Nc(e),a=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),o=U({theme:e,variable:`border.disabled`}),s=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),c=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),l=U({theme:e,variable:`border.primaryEmphasis`});return z`
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
  `},Ic=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r,disabledBg:i}=Nc(e),a=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),o=U({theme:e,variable:`border.disabled`}),s=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),c=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),l=U({theme:e,variable:`border.primaryEmphasis`}),u=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),d=U({theme:e,variable:`foreground.onEmphasis`});return z`
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
  `},Lc=({theme:e,$isRegular:t})=>z`
    display: block;
    color: ${U({theme:e,variable:`foreground.default`})};
    font-size: ${e.fontSizes.md};
    line-height: ${e.lineHeights.md};
    font-weight: ${t?e.fontWeights.regular:e.fontWeights.bold};
  `,Rc=({theme:e})=>z`
    display: block;
    color: ${U({theme:e,variable:`foreground.default`})};
    font-size: ${e.fontSizes.md};
    line-height: ${e.lineHeights.md};
    font-weight: ${e.fontWeights.bold};
  `,zc=({theme:e})=>{let t=U({theme:e,variable:`shadow.large`}),n=U({theme:e,variable:`background.default`}),r=`${e.space.base*5}px`,i=`${e.space.base*7}px`,a=e.shadows.lg(r,i,t);return z`
    border-radius: ${e.borderRadii.xl};
    background-color: ${n};
    /* overflow:visible so radius doesn't soft-clip the header border.
       Elevation + a surface-colored 2px outer ring: page text showing
       through the scrim (e.g. the Roles "Type" column) hard against the
       light divider reads as the stroke fading on the left. */
    overflow: visible;
    border: none;
    box-shadow: ${a}, 0 0 0 2px ${n};
  `},Bc=({theme:e})=>{let t=U({theme:e,variable:`background.default`}),n=U({theme:e,variable:`border.subtle`});return z`
    flex-shrink: 0;
    background-color: ${t};
    border-top-left-radius: ${e.borderRadii.xl};
    border-top-right-radius: ${e.borderRadii.xl};
    /* Native border paints inside the box — avoids edge AA against the scrim
       that made a full-bleed ::after read as fading on the left. */
    border-bottom: 1px solid ${n};
  `},Vc=()=>z`
  /* Scroll lives here so the shell can stay overflow:visible. */
  min-height: 0;
  overflow: auto;
`,Hc=({theme:e})=>z`
  flex-shrink: 0;
  background-color: ${U({theme:e,variable:`background.default`})};
  border-bottom-left-radius: ${e.borderRadii.xl};
  border-bottom-right-radius: ${e.borderRadii.xl};
`,Uc=({theme:e})=>z`
  margin-inline-start: ${e.space.base*3}px;

  &:first-child {
    margin-inline-start: 0;
  }
`,Wc=({theme:e})=>z`
  border-radius: ${e.borderRadii.xxl};
  border: none;
  margin: ${e.space.xxs};
  height: calc(100% - ${e.space.xxs} * 2);
`,Gc=({theme:e})=>z`
  border-radius: ${e.borderRadii.lg};
`,Kc=({theme:e})=>z`
  border-radius: ${e.borderRadii.xl};
`,qc=({theme:e})=>z`
  padding-top: ${e.space.xs};
`,Jc=({theme:e})=>z`
  padding-top: ${e.space.sm};
`,Yc=({theme:e})=>`${e.space.base/2}px`,Xc=`> li:not([data-garden-id='dropdowns.menu.separator']) + li:not([data-garden-id='dropdowns.menu.separator'])`,Zc=({theme:e,$isActive:t,$type:n})=>{if(n===`group`)return``;let r=t&&n!==`header`;return z`
    border-radius: ${e.borderRadii.sm};

    ${r&&z`
      overflow: hidden;
      box-shadow: none;

      &::before {
        position: absolute;
        box-sizing: border-box;
        top: 0;
        bottom: 0;
        inset-inline-start: 0;
        width: ${e.space.base}px;
        border-inline-end: ${e.borderWidths.sm} solid ${U({theme:e,variable:`background.default`})};
        background-color: ${U({theme:e,variable:`border.primaryEmphasis`})};
        pointer-events: none;
        content: '';
      }
    `}

    &[aria-disabled='true'] {
      &::before {
        display: none;
      }
    }
  `},Qc=({theme:e})=>z`
  && {
    padding: ${e.space.xxs};
  }

  ${Xc} {
    margin-block-start: ${Yc({theme:e})};
  }
`,$c=e=>Zc(e),el=e=>Zc(e),tl=({theme:e})=>z`
  margin: ${e.space.xxs} ${e.space.xs};
`,nl=({theme:e})=>z`
  ${Xc} {
    margin-block-start: ${Yc({theme:e})};
  }
`,rl=({theme:e,$type:t})=>{switch(t){case`success`:return U({theme:e,hue:`successHue`,light:{shade:200},dark:{shade:900}});case`error`:return U({theme:e,hue:`dangerHue`,light:{shade:200},dark:{shade:900}});case`warning`:return U({theme:e,hue:`warningHue`,light:{shade:200},dark:{shade:900}});case`info`:return U({theme:e,hue:`neutralHue`,light:{shade:200},dark:{shade:900}});default:return U({theme:e,hue:`neutralHue`,light:{shade:200},dark:{shade:900}})}},il=({theme:e,$type:t})=>{switch(t){case`success`:return U({theme:e,variable:`foreground.successEmphasis`});case`error`:return U({theme:e,variable:`foreground.dangerEmphasis`});case`warning`:return U({theme:e,variable:`foreground.warningEmphasis`});case`info`:return U({theme:e,variable:`foreground.default`});default:return U({theme:e,variable:`foreground.default`})}},al=({theme:e,$type:t})=>z`
  padding: ${e.space.base*4}px ${e.space.base*10}px;
  border-radius: ${e.borderRadii.xl};
  border-color: transparent;
  background-color: ${rl({theme:e,$type:t})};
  color: ${il({theme:e,$type:t})};
`,ol=({theme:e})=>z`
  padding: ${e.space.base*4}px ${e.space.base*10}px;
  border-radius: ${e.borderRadii.xl};
  box-shadow: 0 ${e.space.base}px ${e.space.base*2}px ${U({theme:e,variable:`shadow.medium`})};
`,sl=({theme:e})=>z`
  top: ${e.space.base*3}px;
  ${e.rtl?`left`:`right`}: ${e.space.base*3}px;
`,cl=({theme:e})=>z`
  ${e.rtl?`right`:`left`}: ${e.space.base*3}px;
  margin-top: 0;
  top: ${e.space.base*4}px;
`,ll={"buttons.button":jc,"buttons.icon_button":Mc},ul={"forms.checkbox":Pc,"forms.radio":Fc,"forms.toggle":Ic,"forms.input_label":Lc,"forms.fieldset_legend":Rc},dl={"modals.modal":zc,"modals.header":Bc,"modals.body":Vc,"modals.footer":Hc,"modals.footer_item":Uc,"modals.drawer":Wc,"modals.drawer.close":Gc,"modals.tooltip_dialog":Kc,"modals.tooltip_dialog.body":qc,"modals.tooltip_dialog.footer":Jc},fl={"dropdowns.menu":Qc,"dropdowns.menu.item":$c,"dropdowns.menu.item_anchor":el,"dropdowns.menu.separator":tl,"dropdowns.menu.item_group":nl},pl={"notifications.alert":al,"notifications.notification":ol,"notifications.close":sl,"notifications.icon":cl},G={black:`#000`,white:`#ffffff`,product:{support:`#00a656`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f7f7f7`,200:`#eae9e8`,300:`#dcdcda`,400:`#b7b7b3`,500:`#999b97`,600:`#8b8e89`,700:`#646864`,800:`#404241`,900:`#2f3130`,1e3:`#202121`,1100:`#19191a`,1200:`#0c0c0d`},blue:{100:`#f3f6fb`,200:`#e4eaf6`,300:`#d4ddf0`,400:`#a3b7df`,500:`#7f9bd3`,600:`#698cd3`,700:`#406cc4`,800:`#284173`,900:`#1f335a`,1e3:`#14213b`,1100:`#0c1322`,1200:`#080c16`},red:{100:`#fbf3f3`,200:`#f7e5e6`,300:`#f3d7d9`,400:`#e5a8ab`,500:`#da8286`,600:`#d46f74`,700:`#c63f46`,800:`#792428`,900:`#5f1c20`,1e3:`#3f1315`,1100:`#260b0d`,1200:`#190708`},yellow:{100:`#faf6da`,200:`#f6eba6`,300:`#eedf7a`,400:`#ccb748`,500:`#b09b0f`,600:`#a08d0e`,700:`#7f7004`,800:`#4c4207`,900:`#3b3405`,1e3:`#262203`,1100:`#171402`,1200:`#0e0d01`},green:{100:`#eff9e6`,200:`#ddf0c9`,300:`#c6e8a1`,400:`#91c466`,500:`#6dab2c`,600:`#649c28`,700:`#4b7d04`,800:`#2f4913`,900:`#25390f`,1e3:`#18250a`,1100:`#0e1606`,1200:`#090e04`},purple:{100:`#f7f4fa`,200:`#eee7f3`,300:`#e5daec`,400:`#c6aed7`,500:`#af8ec7`,600:`#a47ebf`,700:`#8d59b1`,800:`#54356a`,900:`#422953`,1e3:`#2b1b36`,1100:`#191020`,1200:`#100a14`},fuschia:{100:`#fbf3f8`,200:`#f7e6f1`,300:`#f2d5e7`,400:`#e3a4cc`,500:`#d77db7`,600:`#d16aac`,700:`#b34496`,800:`#78116c`,900:`#5a0d51`,1e3:`#3f0939`,1100:`#31072c`,1200:`#1b0418`},pink:{100:`#fcf3f4`,200:`#f7e5e8`,300:`#f3d6dc`,400:`#e5a6b4`,500:`#d98193`,600:`#d96b81`,700:`#d62054`,800:`#75263d`,900:`#561d2e`,1e3:`#3c141f`,1100:`#2e0f18`,1200:`#17080c`},crimson:{100:`#fbf3f2`,200:`#f7e7e4`,300:`#f1d7d2`,400:`#e2aaa0`,500:`#d58678`,600:`#cf7464`,700:`#be4938`,800:`#811b12`,900:`#61140d`,1e3:`#440e09`,1100:`#340b07`,1200:`#1c0604`},orange:{100:`#fdf3ed`,200:`#fae7d8`,300:`#f7d7be`,400:`#eda875`,500:`#e58035`,600:`#d57428`,700:`#af5626`,800:`#693317`,900:`#4d2711`,1e3:`#361a0c`,1100:`#291409`,1200:`#150a04`},lemon:{100:`#fff7d4`,200:`#ffea97`,300:`#ffdc4f`,400:`#efab00`,500:`#c79100`,600:`#b68500`,700:`#8f6900`,800:`#563e00`,900:`#3f2e00`,1e3:`#2b2000`,1100:`#221800`,1200:`#110c00`},lime:{100:`#ecfae7`,200:`#d1f3c7`,300:`#b3eda3`,400:`#4fd12b`,500:`#45b025`,600:`#509f2d`,700:`#3d7e19`,800:`#2c491b`,900:`#203614`,1e3:`#16250e`,1100:`#111d0a`,1200:`#090e05`},mint:{100:`#d6ffeb`,200:`#9affce`,300:`#0afe89`,400:`#00d26d`,500:`#01b15c`,600:`#16a260`,700:`#2d7e55`,800:`#1b4b33`,900:`#143726`,1e3:`#0e261a`,1100:`#0b1d14`,1200:`#050e0a`},teal:{100:`#d4fefa`,200:`#88fdf1`,300:`#0bf8e1`,400:`#03cdb8`,500:`#02ad9c`,600:`#2a9d8f`,700:`#367a74`,800:`#254846`,900:`#1b3534`,1e3:`#122423`,1100:`#0e1c1a`,1200:`#070d0d`},azure:{100:`#eff7fe`,200:`#d9ecfc`,300:`#c4e0fa`,400:`#82bcf4`,500:`#4b9fee`,600:`#3191ea`,700:`#2770c3`,800:`#23446b`,900:`#1a3250`,1e3:`#122238`,1100:`#0e1a2a`,1200:`#070d14`},royal:{100:`#f4f5fc`,200:`#e7e9f8`,300:`#d8dcf4`,400:`#acb4e7`,500:`#8a96dd`,600:`#7a88d9`,700:`#4c67d3`,800:`#1833ab`,900:`#122680`,1e3:`#0d1a5a`,1100:`#0a1445`,1200:`#050a25`},kale:{100:`#ecf9f9`,200:`#daeded`,300:`#cbe2e1`,400:`#97bfbf`,500:`#6ba4a5`,600:`#4a9999`,700:`#40787a`,800:`#16494f`,900:`#063940`,1e3:`#03252a`,1100:`#061517`,1200:`#060e0e`}},{product:ml,...hl}=G,gl={primaryHue:`blue`,dangerHue:`red`,warningHue:`yellow`,successHue:`green`,neutralHue:`grey`,chromeHue:`kale`,variables:{dark:{background:{default:`neutralHue.1100`,raised:`neutralHue.1000`,recessed:`neutralHue.1200`,subtle:`neutralHue.1000`,emphasis:`neutralHue.600`,success:`successHue.1000`,warning:`warningHue.1000`,danger:`dangerHue.1000`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`rgba(white, 100)`},border:{default:`neutralHue.800`,emphasis:`neutralHue.600`,subtle:`neutralHue.900`,success:`successHue.900`,warning:`warningHue.900`,danger:`dangerHue.900`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`neutralHue.800`},foreground:{default:`neutralHue.300`,subtle:`neutralHue.500`,onEmphasis:`neutralHue.1100`,primary:`primaryHue.600`,success:`successHue.400`,warning:`warningHue.400`,danger:`dangerHue.400`,successEmphasis:`successHue.300`,warningEmphasis:`warningHue.300`,dangerEmphasis:`dangerHue.300`,disabled:`neutralHue.700`},shadow:{small:`rgba(neutralHue.1200, 1100)`,medium:`rgba(neutralHue.1200, 800)`,large:`rgba(neutralHue.1200, 1000)`}},light:{background:{default:`palette.white`,raised:`palette.white`,recessed:`neutralHue.100`,subtle:`neutralHue.100`,emphasis:`neutralHue.700`,success:`successHue.100`,warning:`warningHue.100`,danger:`dangerHue.100`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`rgba(neutralHue.700, 100)`},border:{default:`neutralHue.300`,emphasis:`neutralHue.600`,subtle:`neutralHue.200`,success:`successHue.300`,warning:`warningHue.300`,danger:`dangerHue.300`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`neutralHue.300`},foreground:{default:`neutralHue.900`,subtle:`neutralHue.700`,onEmphasis:`palette.white`,primary:`primaryHue.700`,success:`successHue.700`,warning:`warningHue.700`,danger:`dangerHue.700`,successEmphasis:`successHue.900`,warningEmphasis:`warningHue.900`,dangerEmphasis:`dangerHue.900`,disabled:`neutralHue.600`},shadow:{small:`rgba(neutralHue.1200, 200)`,medium:`rgba(neutralHue.1200, 200)`,large:`rgba(neutralHue.1200, 200)`}}}},_l=(e=Ma)=>({...e,components:{...e.components,...ll,...ul,...fl,...dl,...pl},borders:{...e.borders},borderRadii:{...e.borderRadii,xs:`2px`,sm:`4px`,md:`8px`,lg:`12px`,xl:`16px`,xxl:`24px`,full:`9999px`},borderStyles:{...e.borderStyles},borderWidths:{...e.borderWidths},breakpoints:{...e.breakpoints},fonts:{...e.fonts},fontSizes:{...e.fontSizes},fontWeights:{...e.fontWeights},iconSizes:{...e.iconSizes},lineHeights:{...e.lineHeights},opacity:{...e.opacity},shadowWidths:{...e.shadowWidths},shadows:{...e.shadows},space:{...e.space},colors:{...e.colors,...gl,base:e.colors?.base??`light`},palette:{...e.palette,...hl}});_l();var vl=({theme:e=_l,...t})=>(0,V.jsx)(fi,{theme:e,...t}),yl=[{id:`fillmore`,name:`Fillmore`,role:`Admin`,email:`fill.more@email.com`,status:`Active`,brand:`Dinoco`,extraBrands:1,group:`Support`,productAccess:`Support, Knowledge, AI agents`,lastSignIn:`Never`,aiAgentsAccess:`Full Access`},{id:`mater`,name:`T. Mater`,role:`Test API`,email:`t.mater@email.com`,status:`Active`,brand:`Rusteze`,extraBrands:0,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:`No Access`},{id:`jams-concord`,name:`Jams Concord`,role:`Test API`,email:`jams@email.com`,status:`Active`,brand:`Dinoco`,extraBrands:1,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:`Limited Access`},{id:`kim-pop`,name:`Kim Pop`,role:`Test API`,email:`email@email.com`,status:`Active`,brand:`Dinoco`,extraBrands:1,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:`Full Access`},{id:`masked-agent`,name:`Masked Agent James Carter`,role:`Test API`,email:`masked.agent.james.carter@gmail.com`,status:`Active`,brand:`Rusteze`,extraBrands:0,group:`Support`,productAccess:`Support, Knowledge, Chat`,lastSignIn:`Nov 14, 2025`,aiAgentsAccess:`No Access`}],bl={admin:[`Lightning McQueen`,`Sally Carrera`,`Doc Hudson`,`Ramone`,`Flo`,`Sheriff`],contributor:[`Boost`,`DJ`,`Wingo`,`Snot Rod`,`Finn McMissile`,`Holley Shiftwell`,`Francesco Bernoulli`,`Professor Zundapp`,`Grem`,`Acer`],"light-agent":[`Cruz Ramirez`,`Smokey`,`Jackson Storm`,`Sterling`,`Natalie Certain`,`Miss Fritter`,`Cal Weathers`,`Bobby Swift`,`Brick Yardley`,`River Scott`,`Junior Moon`,`Louise Nash`,`Darrell Cartrip`,`Bob Cutlass`,`Brent Mustangburger`],advisor:[`Woody`,`Buzz Lightyear`,`Jessie`,`Bullseye`,`Rex`,`Hamm`,`Slinky Dog`,`Bo Peep`,`Mr. Potato Head`,`Mrs. Potato Head`,`Forky`,`Ducky`,`Bunny`,`Duke Caboom`,`Gabby Gabby`,`Lotso Bear`,`Ken`,`Barbie`,`Wheezy`,`RC`,...Array.from({length:307},(e,t)=>`Advisor Agent ${t+21}`)],counselor:[`Joy`,`Sadness`,`Anger`,`Fear`,`Disgust`,`Bing Bong`,`Riley`,`Mom Andersen`,`Dad Andersen`,`Jangles`,`Rainbow Unicorn`,`Fritz`,`Lance Slashblade`]},xl={admin:`Admin`,contributor:`Contributor`,"light-agent":`Subtle agent`,advisor:`Advisor`,counselor:`Counselor`},Sl=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``),Cl={no_access:`No access`,client_admin:`Client admin`,client_editor:`Client editor`,client_user:`Client user`,admin:`Admin`,agent:`Agent`,reviewer:`Reviewer`},wl=[{id:`support`,name:`Support`},{id:`knowledge`,name:`Knowledge`},{id:`analytics`,name:`Analytics`},{id:`voice`,name:`Voice`},{id:`chat`,name:`Chat`},{id:`ai-agents`,name:`AI agents`},{id:`qa`,name:`Quality assurance`}],Tl=wl.filter(e=>e.id!==`chat`),El=wl.filter(e=>!e.disabled&&e.id!==`ai-agents`),Dl=Tl.filter(e=>!e.disabled&&e.id!==`ai-agents`),Ol=[`No Access`,`Full Access`,`Limited Access`],kl=Object.entries(bl).flatMap(([e,t])=>t.map((t,n)=>({id:Sl(t),name:t,role:xl[e],email:`${Sl(t)}@z3nrusteze.zendesk.com`,status:`Active`,brand:n%2==0?`Dinoco`:`Rusteze`,extraBrands:0,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:Ol[n%3]}))),Al=[...yl,...kl],jl=[`No access`,`Client admin`,`Client editor`,`Client user`],Ml=[`No access`,`Client admin`,`Client editor`],Nl=[`Admin`,`Agent`,`Reviewer`],Pl=Object.fromEntries(Al.map((e,t)=>[e.id,Object.fromEntries(El.map((n,r)=>n.id===`qa`?[n.id,Nl[(t+r)%Nl.length]]:e.role===`Advisor`?[n.id,Ml[(t+r)%Ml.length]]:[n.id,jl[(t+r)%jl.length]]))])),Fl=Object.fromEntries(Object.entries(bl).map(([e,t])=>[e,t.map(Sl)])),Il=[{id:`admin`,name:`Admin`,type:`System`,description:`Can manage all settings, except billing`},{id:`contributor`,name:`Contributor`,type:`System`,description:`Can provide limited support`},{id:`light-agent`,name:`Subtle agent`,type:`System`,description:`Can view and add private comments to tickets`},{id:`advisor`,name:`Advisor`,type:`Custom`,description:`Can automate ticket workflows, manage channels and make private comments on tickets`},{id:`counselor`,name:`Counselor`,type:`Custom`,description:`Agent support when it gets complicated`}],Ll=[{product:`Support`,role:`Admin`,access:`yes`,icon:`support`},{product:`Knowledge`,role:`Admin`,access:`checkbox`,checked:!0,hasInfo:!0,icon:`knowledge`},{product:`Analytics`,role:`Admin`,access:`checkbox`,checked:!0,hasInfo:!0,icon:`analytics`},{product:`Voice`,role:`Agent`,access:`checkbox`,checked:!1,icon:`voice`},{product:`Chat`,role:`Agent`,access:`checkbox`,checked:!1,icon:`chat`},{product:`AI agents`,role:`Client admin`,access:`ai_agents`,checked:!0,icon:`ai_agents`},{product:`Quality assurance`,role:`Admin`,access:`yes`,icon:`qa`}],Rl=(0,g.createContext)();function zl({children:e}){let[t,n]=(0,g.useState)(`v4`),[r,i]=(0,g.useState)({}),[a,o]=(0,g.useState)(Il),s={optedIn:!1,saved:!1,accessLevel:null},c=e=>r[e]||s,l=(e,t)=>{i(n=>({...n,[e]:{...s,...n[e],...t}}))},[u,d]=(0,g.useState)(null),[f,p]=(0,g.useState)(Fl);(0,g.useEffect)(()=>{p(e=>{let t={...e};for(let[e,n]of Object.entries(Fl))t[e]=n;return t})},[Fl]);let m={optedIn:!1,saved:!1,accessLevel:null},[h,_]=(0,g.useState)({}),v=(0,g.useRef)(!0);return(0,g.useEffect)(()=>{if(v.current){v.current=!1;return}i({}),_({})},[t]),(0,V.jsx)(Rl.Provider,{value:{version:t,setVersion:n,getAiAgentsState:c,updateAiAgentsState:l,roles:a,addRole:e=>{o(t=>[...t,e])},aiAgentsRoleId:u,setAiAgentsRoleId:d,roleAssignments:f,assignMembersToRole:(e,t)=>{p(n=>{let r=n[e]||[],i=Array.from(new Set([...r,...t]));return{...n,[e]:i}})},isMemberAiAgentsMigrated:e=>u?(f[u]||[]).includes(e):!1,getMemberAssignedRole:e=>{let t=Object.keys(f).find(t=>(f[t]||[]).includes(e));return t&&a.find(e=>e.id===t)||null},getProductAccess:(e,t)=>h[e]?.[t]||m,updateProductAccess:(e,t,n)=>{_(r=>({...r,[e]:{...r[e]||{},[t]:{...m,...r[e]?.[t],...n}}}))},saveProductAccess:e=>{_(t=>{let n=t[e];if(!n)return t;let r=Object.fromEntries(Object.entries(n).map(([e,t])=>[e,t.optedIn?{...t,saved:!0}:t]));return{...t,[e]:r}})},copyProductAccess:(e,t)=>{_(n=>{let{[e]:r,...i}=n;if(!r)return n;let a=Object.fromEntries(Object.entries(r).map(([e,t])=>[e,t.optedIn?{...t,saved:!0}:t]));return{...i,[t]:a}})}},children:e})}function Bl(){return(0,g.useContext)(Rl)}var Vl=B.div`
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
`,Hl=B.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: #ffffff;
  border-bottom: 1px solid #e9ebed;
`,Ul=B.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Wl=B.button`
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
`,Gl=B.div`
  padding: 4px 16px 16px;
`,Kl=B.div`
  padding: 16px 0;

  & + & {
    border-top: 1px solid #e9ebed;
  }
`,ql=B.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
`,Jl=B.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Yl=B.span`
  flex-shrink: 0;
  font-size: 12px;
  color: #87929d;
`,Xl=B.p`
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.5;
  color: #49545c;
`,Zl=B.div`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`,Ql=B.h3`
  margin: 0 0 4px;
  font-size: 12px;
  font-weight: 600;
  color: #68737d;
`,$l=B.ul`
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  line-height: 1.5;
  color: #2f3941;

  li + li {
    margin-top: 4px;
  }
`,eu=B.button`
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
`;function tu({entries:e,versions:t,activeVersionId:n,onGoToVersion:r,onClose:i}){let a=e=>t?.find(t=>t.id===e)?.label??e;return(0,V.jsxs)(Vl,{role:`dialog`,"aria-label":`Version notes`,children:[(0,V.jsxs)(Hl,{children:[(0,V.jsx)(Ul,{children:`Version notes`}),(0,V.jsx)(Wl,{type:`button`,onClick:i,"aria-label":`Close version notes`,children:(0,V.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,V.jsx)(`path`,{d:`M1 1L11 11M11 1L1 11`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})})]}),(0,V.jsx)(Gl,{children:e?.map(e=>{let t=e.versionId===n;return(0,V.jsxs)(Kl,{children:[(0,V.jsxs)(ql,{children:[(0,V.jsx)(Jl,{children:a(e.versionId)}),(0,V.jsx)(Yl,{children:e.date})]}),(0,V.jsx)(Xl,{children:e.summary}),e.sections?.map((e,t)=>(0,V.jsxs)(Zl,{children:[e.title&&(0,V.jsx)(Ql,{children:e.title}),(0,V.jsx)($l,{children:e.bullets.map((e,t)=>(0,V.jsx)(`li`,{children:e},t))})]},t)),(0,V.jsx)(eu,{type:`button`,disabled:t,onClick:()=>!t&&r?.(e.versionId),children:t?`Currently viewing`:`Go to ${a(e.versionId)} →`})]},e.versionId)})})]})}var nu=9500,ru=`#01b15c`,iu=`#0e261a`,au=`#143726`,ou=`rgba(14, 38, 26, 0.4)`,su=`rgba(14, 38, 26, 0.12)`,cu=B.header`
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: ${48}px;
  padding: 0 16px;
  background-color: ${e=>e.$inspectActive?ru:`#1a1f24`};
  color: ${e=>e.$inspectActive?iu:`#ffffff`};
  font-family: inherit;
  user-select: none;
  transition: background-color 0.15s ease, color 0.15s ease;
`,lu=B.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
`,uu=B.span`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.$inspectActive?iu:`#ffffff`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,du=B.span`
  flex-shrink: 0;
  color: ${e=>e.$inspectActive?ou:`#363d44`};
  font-size: 13px;
  line-height: 1;
`,fu=B.span`
  flex-shrink: 0;
  color: ${e=>e.$inspectActive?au:`#7c8590`};
  font-size: 12px;
  white-space: nowrap;
`,pu=[null,`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];function mu(e){if(typeof e!=`string`)return null;let[t,n,r]=e.split(`-`).map(Number);return!t||!n||!r||!pu[n]?null:`${pu[n]} ${r}, ${t}`}var hu=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,gu=B.div`
  position: relative;
`,_u=B.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 28px;
  padding: 0 10px;
  border: 1px solid ${e=>e.$inspectActive?e.$open?iu:ou:e.$open?`#555e66`:`#363d44`};
  border-radius: 4px;
  background: ${e=>e.$inspectActive?e.$open?su:`transparent`:e.$open?`#262c32`:`transparent`};
  color: ${e=>e.$inspectActive?iu:`#c8cdd0`};
  font-family: inherit;
  font-size: 13px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.$inspectActive?su:`#262c32`};
    border-color: ${e=>e.$inspectActive?iu:`#555e66`};
    color: ${e=>e.$inspectActive?iu:`#ffffff`};
  }
`,vu=B.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
`,yu=B.span`
  font-weight: 600;
`,bu=B.span`
  font-weight: 400;
  color: ${e=>e.$inspectActive?au:`#7c8590`};
  font-size: 12px;
`,xu=B.svg`
  flex-shrink: 0;
  transform: ${e=>e.$open?`rotate(180deg)`:`none`};
`,Su=({$open:e})=>(0,V.jsx)(xu,{$open:e,width:`8`,height:`5`,viewBox:`0 0 8 5`,fill:`currentColor`,"aria-hidden":`true`,focusable:`false`,children:(0,V.jsx)(`path`,{d:`M0 0 L4 5 L8 0 Z`})}),Cu=B.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: ${nu};
  padding: 4px 0;
  border: 1px solid #363d44;
  border-radius: 4px;
  background-color: #262c32;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  width: max-content;
`,wu=B.button`
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
`,Tu=B.span`
  flex-shrink: 0;
  width: 12px;
  color: #6ba4e0;
  font-size: 11px;
`,Eu=B.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`,Du=B.span`
  font-weight: 600;
`,Ou=B.span`
  font-weight: 400;
  font-size: 12px;
  color: #7c8590;
`,ku=B.div`
  height: 1px;
  background: #363d44;
  margin: 4px 0;
`,Au=B.div`
  padding: 5px 14px 2px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #555e66;
`,ju=B.div`
  display: flex;
  align-items: center;
`,Mu=B.div`
  position: relative;
`,Nu=B.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border: 1px solid ${e=>e.$inspectActive?e.$open?iu:ou:e.$open?`#555e66`:`#363d44`};
  border-radius: 4px;
  background: ${e=>e.$inspectActive?e.$open?su:`transparent`:e.$open?`#262c32`:`transparent`};
  color: ${e=>e.$inspectActive?iu:`#c8cdd0`};
  font-family: inherit;
  font-size: 13px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.$inspectActive?su:`#262c32`};
    border-color: ${e=>e.$inspectActive?iu:`#555e66`};
    color: ${e=>e.$inspectActive?iu:`#ffffff`};
  }
`,Pu=()=>(0,V.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,V.jsx)(`path`,{d:`M3 1.5h6l2 2v9H3v-11z`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinejoin:`round`}),(0,V.jsx)(`path`,{d:`M5 6h4M5 8.5h4`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`})]});function Fu({title:e,meta:t,versions:n,versionId:r,onVersionChange:i,versionLabel:a=`Version`,versionNotes:o,commentSlotRef:s,inspectSlotRef:c,inspectActive:l=!1}){let[u,d]=(0,g.useState)(!1),[f,p]=(0,g.useState)(!1),m=(0,g.useRef)(null),h=(0,g.useRef)(null),_=n?.find(e=>e.id===r),v=n?.filter(e=>!e.archived)??[],y=n?.filter(e=>e.archived)??[],b=mu(`2026-11-11`),x=[t,b?`Updated ${b}`:null].filter(Boolean).join(` · `);return(0,g.useEffect)(()=>{if(!u)return;let e=e=>{m.current?.contains(e.target)||d(!1)},t=e=>{e.key===`Escape`&&d(!1)};return document.addEventListener(`pointerdown`,e,!0),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e,!0),document.removeEventListener(`keydown`,t)}},[u]),(0,g.useEffect)(()=>{if(!f)return;let e=e=>{h.current?.contains(e.target)||p(!1)},t=e=>{e.key===`Escape`&&p(!1)};return document.addEventListener(`pointerdown`,e,!0),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e,!0),document.removeEventListener(`keydown`,t)}},[f]),(0,V.jsxs)(cu,{$inspectActive:l,"data-inspect-console":l?`true`:void 0,children:[(0,V.jsxs)(lu,{children:[(0,V.jsx)(uu,{$inspectActive:l,children:e}),x&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(du,{$inspectActive:l,"aria-hidden":`true`,children:`|`}),(0,V.jsx)(fu,{$inspectActive:l,children:x})]})]}),(0,V.jsxs)(hu,{children:[n?.length>0&&(0,V.jsxs)(gu,{ref:m,children:[(0,V.jsxs)(_u,{type:`button`,$open:u,$inspectActive:l,onClick:()=>{p(!1),d(e=>!e)},"aria-expanded":u,"aria-haspopup":`listbox`,children:[(0,V.jsxs)(vu,{children:[(0,V.jsx)(yu,{children:_?.label??a}),_?.description&&(0,V.jsx)(bu,{$inspectActive:l,children:_.description})]}),(0,V.jsx)(Su,{$open:u})]}),u&&(0,V.jsxs)(Cu,{role:`listbox`,"aria-label":a,children:[v.map(e=>(0,V.jsxs)(wu,{type:`button`,role:`option`,"aria-selected":e.id===r,$selected:e.id===r,onClick:()=>{d(!1),e.id!==r&&i?.(e.id)},children:[(0,V.jsx)(Tu,{children:e.id===r?`✓`:``}),(0,V.jsxs)(Eu,{children:[(0,V.jsx)(Du,{children:e.label}),e.description&&(0,V.jsx)(Ou,{children:e.description})]})]},e.id)),y.length>0&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ku,{}),(0,V.jsx)(Au,{children:`Archive`}),y.map(e=>(0,V.jsxs)(wu,{type:`button`,role:`option`,"aria-selected":e.id===r,$selected:e.id===r,onClick:()=>{d(!1),e.id!==r&&i?.(e.id)},children:[(0,V.jsx)(Tu,{children:e.id===r?`✓`:``}),(0,V.jsxs)(Eu,{children:[(0,V.jsx)(Du,{children:e.label}),e.description&&(0,V.jsx)(Ou,{children:e.description})]})]},e.id))]})]})]}),o?.length>0&&(0,V.jsxs)(Mu,{ref:h,children:[(0,V.jsxs)(Nu,{type:`button`,$open:f,$inspectActive:l,onClick:()=>{d(!1),p(e=>!e)},"aria-expanded":f,"aria-haspopup":`dialog`,children:[(0,V.jsx)(Pu,{}),`Version notes`]}),f&&(0,V.jsx)(tu,{entries:o,versions:n,activeVersionId:r,onGoToVersion:e=>{p(!1),e!==r&&i?.(e)},onClose:()=>p(!1)})]}),(0,V.jsx)(ju,{ref:c}),(0,V.jsx)(ju,{ref:s})]})]})}var Iu=[{versionId:`v7`,date:`Nov 2026`,summary:`Combines V4 job sections with V6.5 table patterns: each QA group is its own collapsible Flora table.`,sections:[{title:`Sectioned permission tables`,bullets:[`Review work, Conduct reviews, Coaching and calibration, Workspace, Reporting, and Admin — each a collapsible table`,`Same V6.5 patterns per table: select-all, Added/Removed Status, static N permissions counter, hover/focus only`,`Access summary + Reset / Open all; role type radios and Customized tag carried over`]}]},{versionId:`v6.5`,date:`Nov 2026`,summary:`V6 simplified: one Customize permissions table. Checkboxes stay in place; Added/Removed tags mark deltas from the role type.`,sections:[{title:`Customize permissions`,bullets:[`Single Flora table (grouped); checkbox grants/revokes vs type preset without moving rows`,`Added / Removed tags inline; Access summary accordion for the resolved checklist; Reset to default`]}]},{versionId:`v6`,date:`Nov 2026`,summary:`Same role type + WFM as V4, but QA uses a layer cake: Account default → Role type → This role. The role only stores overrides (thin delta).`,sections:[{title:`QA layer cake`,bullets:[`Role type radios, then stroke accordions: Overrides, Add an exception, Full effective access`,`Exception table matches V6.5: select-all, flat rows, Added/Removed Status tags, hover/focus only`]}]},{versionId:`v5`,date:`Nov 2026`,summary:`Same role type + WFM as V4, but QA uses a domain map: pick Reviews / Coaching / Workspaces / Reporting / Admin, then edit only that domain’s settings.`,sections:[{title:`QA domain map`,bullets:[`Map of five conceptual domains (not product screens); click one to see ~6–14 settings`,`Breadcrumb All domains / {domain}; search highlights or opens matching domains`,`Admin / Agent / Reviewer presets, Customized tag, and Reset to default carried over from V4`]}]},{versionId:`v4`,date:`Nov 2026`,summary:`Role-type packages (Admin / Agent / Reviewer), WFM role assignment, and dense QA accordion permissions in one exploration.`,sections:[{title:`Role type`,bullets:[`Choose a role type modal on Create role; Role type radios on the create form`,`Admin / Agent / Reviewer packages seed settings and product access`]},{title:`Workforce Management`,bullets:[`WFM section peer to Settings/Products: one-way role assignment opt-in, WFM role picker, nested permission groups`,`Illustrative WFM roles: Agent / Admin / Team Lead / Scheduler`,`Filter drawer Group list includes WFM alongside Settings and Products`]},{title:`QA accordion settings`,bullets:[`Inside the Quality assurance product capsule: Admin / Agent / Reviewer radios seed ~40 fine-grained permissions`,`Custom changes persist per role type when switching radios; Customized tag; Reset to default (text) + Open all (outline)`,`Job groups as stroke accordions; capsule and groups start closed — expand QA to explore`]}]},{versionId:`v3.5`,date:`Sep 2026`,summary:`Same panel redesign and filter drawer as V3, but topic filters strip matching permissions out of capsules and hide empty ones.`,sections:[{title:`Deep filters`,bullets:[`Same Flora Filter button → Drawer (with scrim) as V3`,`Topic filters remove non-matching permission rows inside capsules`,`Capsules with nothing left to show are hidden`,`Matching content keeps its capsule title for context`]}]},{versionId:`v3`,date:`Sep 2026`,summary:`Panel redesign for centralized product access: grouped Settings vs Products, no opt-ins, merged Knowledge, and Flora filters that show or hide whole capsules.`,sections:[{title:`Role page`,bullets:[`Settings and Products grouped as separate sections`,`Product access goes straight to radios (no opt-in) for Support, Knowledge, Analytics, Voice, AI agents, QA`,`Chat removed (sunset); Knowledge settings + product access merged into one capsule`,`Tickets → Security and privacy unchanged; Reporting stays in Settings`,`Search permissions + Flora Filter drawer (scrim); filters show/hide whole capsules only`,`Optional “Only available settings” filter (off by default; includes plan-limited QA until applied)`,`Hidden search tags on capsules for discoverability`,`Default version on load`]}]},{versionId:`v2.5`,date:`Sep 2026`,summary:`Same product opt-ins as V2, but scales the team-member impact preview: one summary warning plus a work-area table instead of a banner on every name.`,sections:[{title:`Team members panel`,bullets:[`Single warning below the Team members explanation when opt-ins would change access`,`Title: Access changed for N team members; body lists affected products`,`Preview access change Anchor opens a work-area preview (not a modal)`]},{title:`Preview access change`,bullets:[`Breadcrumbed screen: Roles › [role] › Preview access change`,`Table: team member (link to profile), product, current access, new access`,`Search, product filter, and pagination for large rosters`]}]},{versionId:`v2`,date:`Aug 2026`,summary:`Scales the AI agents access change preview to every product on the role, and adds a search field for the settings themselves.`,sections:[{title:`Role page`,bullets:[`One opt-in capsule per product (Support, Knowledge, Analytics, Voice, Chat, AI agents), following the AI agents opt-in pattern`,`Quality assurance renders disabled, showing "Subscription limit reached"`,`AI agents capsule starts closed, like every other capsule`,`Search permissions field above the capsules that highlights matches in yellow/300 and opens any capsule with a hit`]},{title:`Team members panel`,bullets:[`A single "Access change(s)" warning per member, listing every product that would change`,`Each line: product name, then a bullet with current access to new access`]}]},{versionId:`v1`,date:`Jul 2026`,summary:`The original custom roles flow, an AI agents only access change preview.`,sections:[{title:null,bullets:[`AI agents capsule: opt-in checkbox, then access-level radios (No access / Client admin / Client editor / Client user)`,`Team members side panel warns when a role change would affect a member’s AI agents access`,`Assign role modal: search and multi-select team members to assign`]}]}],Lu=`data-comment-root`,Ru=`data-comment-anchor`,zu=[`[data-comment-anchor]`,`tr`,`th`,`button`,`a[href]`,`label`,`input`,`select`,`section`,`nav`],Bu=()=>document.querySelector(`[${Lu}]`),Vu=(e,t)=>{let n=Bu();if(!n)return null;let r=document.elementsFromPoint(e,t).find(e=>n.contains(e));if(!r)return null;for(let e of zu){let t=r.closest(e);if(t&&n.contains(t))return t}return r},Hu=e=>{let t=Bu();if(!t||!t.contains(e))return null;let n=[],r=e;for(;r&&r!==t;){let e=r.parentElement;if(!e)return null;let t=r.tagName.toLowerCase(),i=[...e.children].filter(e=>e.tagName===r.tagName);n.unshift(i.length>1?`${t}:nth-of-type(${i.indexOf(r)+1})`:t),r=e}return n.join(` > `)},Uu=e=>{if(!e.children.length){let t=(e.textContent||``).replace(/\s+/g,` `).trim();return t&&t!==`—`?[t]:[]}return[...e.children].flatMap(Uu)},Wu=e=>{if(!e)return``;let t=e.getAttribute(`aria-label`);if(t)return t.replace(/\s+/g,` `).trim().slice(0,80);let n=Uu(e);return n.length?n.join(` · `).slice(0,80):(e.textContent||``).replace(/\s+/g,` `).trim().slice(0,80)},Gu=(e,t,n)=>{let r=Vu(e,t);if(!r)return null;let i=r.getBoundingClientRect();return{context:n,id:r.getAttribute(Ru)||null,path:Hu(r),label:Wu(r),fraction:{x:i.width?(e-i.left)/i.width:.5,y:i.height?(t-i.top)/i.height:.5}}},Ku=e=>{let t=Bu();if(!t||!e)return null;if(e.id){let n=t.querySelector(`[${Ru}="${CSS.escape(e.id)}"]`);if(n)return n}if(!e.path)return null;let n=null;try{n=t.querySelector(e.path)}catch{return null}return n},qu=e=>{let t=Ku(e);if(!t)return null;let n=t.getBoundingClientRect();if(!n.width&&!n.height)return null;let r=e.fraction||{x:.5,y:.5};return{x:n.left+r.x*n.width,y:n.top+r.y*n.height,drifted:!!e.label&&Wu(t)!==e.label}},Ju=(e,t)=>{if(!e||!t)return!1;let n=new Set([...Object.keys(e),...Object.keys(t)]);for(let r of n)if(e[r]!==t[r])return!1;return!0},Yu=`https://thaugdzjxphjhviwdwgi.supabase.co`,Xu=`sb_publishable_gnUhxN43I7bY6dKrNkVmPA_wjRmciBQ`,Zu=`prototype_comments`,Qu=`prototype_comments_view`,$u=`id,project,author,body,parent_id,number,anchor,resolved,created_at`,ed=`custom-roles-all-plans`,td=!!Xu,nd=`prototype-comments:${ed}`,rd=`prototype-comments:owner-key`,id=()=>{try{return crypto.randomUUID()}catch{return`k-${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`}},ad=()=>{try{let e=window.localStorage.getItem(rd);if(e)return e;let t=id();return window.localStorage.setItem(rd,t),t}catch{return id()}},od=()=>{try{return JSON.parse(window.localStorage.getItem(nd)||`[]`)}catch{return[]}},sd=e=>{try{window.localStorage.setItem(nd,JSON.stringify(e))}catch{}},cd=()=>({apikey:Xu,Authorization:`Bearer ${Xu}`,"Content-Type":`application/json`,"x-comment-key":ad()}),ld=async(e,t={})=>{let n=await fetch(`${Yu}/rest/v1/${e}`,{...t,headers:{...cd(),...t.headers}});if(!n.ok){let e=await n.text();throw n.status===403?Error(`Supabase 403: the comment was rejected by its access rules. If this happens on every comment, see src/comments/SETUP.md.`):Error(`Supabase ${n.status}: ${e.slice(0,200)}`)}return n.status===204?null:n.json()},ud=async()=>{if(!td)return od().map(e=>md({...e,is_mine:!0}));let e=`project=eq.${encodeURIComponent(ed)}&order=created_at.asc`;try{return(await ld(`${Qu}?${e}`)).map(md)}catch(t){if(!/\b404\b/.test(t.message))throw t;return(await ld(`${Zu}?${e}&select=${$u}`)).map(md)}},dd=async({author:e,body:t,anchor:n,parentId:r=null,number:i=null})=>{let a={project:ed,author:e,body:t,parent_id:r,number:i,anchor:n||null,resolved:!1};if(!td){let e=od(),t={...a,id:`local-${e.length+1}-${String(e.length)}`,created_at:new Date().toISOString(),is_mine:!0};return sd([...e,t]),md(t)}let[o]=await ld(`${Zu}?select=${$u}`,{method:`POST`,headers:{Prefer:`return=representation`},body:JSON.stringify(a)});return md({...o,is_mine:!0})},fd=async(e,t)=>{if(!td){sd(od().map(n=>n.id===e?{...n,resolved:t}:n));return}await ld(`${Zu}?id=eq.${encodeURIComponent(e)}`,{method:`PATCH`,body:JSON.stringify({resolved:t})})},pd=async e=>{if(!td){sd(od().filter(t=>t.id!==e&&t.parent_id!==e));return}let t=await ld(`${Zu}?id=eq.${encodeURIComponent(e)}&select=id`,{method:`DELETE`,headers:{Prefer:`return=representation`}});if(!t||t.length===0)throw Error(`That comment is already gone — someone may have deleted it first.`)},md=e=>({id:e.id,author:e.author,body:e.body,parentId:e.parent_id??null,number:e.number??null,anchor:e.anchor??null,resolved:!!e.resolved,createdAt:e.created_at,isMine:!!e.is_mine}),hd=`prototype-comments:author`,gd=()=>{try{return window.localStorage.getItem(hd)||``}catch{return``}},_d=e=>{try{window.localStorage.setItem(hd,e)}catch{}},vd=`prototype-comment-at`;function yd(e,t){window.dispatchEvent(new CustomEvent(vd,{detail:{clientX:e,clientY:t}}))}function bd(e){let t=t=>{let{clientX:n,clientY:r}=t.detail||{};typeof n==`number`&&typeof r==`number`&&e(n,r)};return window.addEventListener(vd,t),()=>window.removeEventListener(vd,t)}function xd(e){e?document.documentElement.dataset.inspectMode=`true`:delete document.documentElement.dataset.inspectMode}var Sd=9e3,Cd=B.button`
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

  /* Mint Inspect console: dark ink for unreadably light greys on Mint/500. */
  header[data-inspect-console='true'] & {
    border-color: ${e=>e.$active?`#4d7fd4`:`rgba(14, 38, 26, 0.4)`};
    background-color: ${e=>e.$active?`#406cc4`:`transparent`};
    color: ${e=>e.$active?`#ffffff`:`#0e261a`};

    &:hover {
      background-color: ${e=>e.$active?`#284173`:`rgba(14, 38, 26, 0.12)`};
      border-color: ${e=>e.$active?`#4d7fd4`:`#0e261a`};
      color: ${e=>e.$active?`#ffffff`:`#0e261a`};
    }
  }
`,wd=B.div`
  position: fixed;
  z-index: ${Sd};
  cursor: crosshair;
  /* No background at all: a tint over the design would change the colours being
     reviewed, which is the one thing a design review can't tolerate. */
  background-color: transparent;
`,Td=B.button`
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
`,Ed=B.div`
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
`,Dd=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #c2f0e0;
  font-size: 12px;
`,Od=B.div`
  display: flex;
  gap: 4px;
`,kd=B.button`
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
`,Ad=B.div`
  margin-bottom: 10px;

  & + & {
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }
`,jd=B.div`
  margin-bottom: 2px;
  color: #c2f0e0;
  font-size: 12px;
`,Md=B.div`
  white-space: pre-wrap;
  word-break: break-word;
`,Nd=B.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Pd=B.textarea`
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
`,Fd=B.input`
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
`,Id=B.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,Ld=B.button`
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
`,Rd=B.div`
  margin-bottom: 8px;
  color: #c2f0e0;
  font-size: 12px;
  word-break: break-word;
`,zd=Ci`
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
`,Bd=B.aside`
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
`,Vd=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px;
  border-bottom: 1px solid #eae9e8;
  font-size: 14px;
  font-weight: 600;
`,Hd=B.div`
  flex: 1;
  box-sizing: border-box;
  padding: 8px;
  overflow-y: auto;
`,Ud=B.button`
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
`,Wd=B.div`
  display: flex;
  gap: 6px;
  margin-bottom: 4px;
  color: #646864;
  font-size: 12px;
`,Gd=B.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,Kd=B.div`
  margin-top: 4px;
  overflow: hidden;
  color: #646864;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,qd=B.div`
  padding: 16px;
  color: #646864;
  font-size: 14px;
`,Jd={error:{background:`#fff0f1`,color:`#2f3130`},warn:{background:`#fff7d6`,color:`#2f3130`},info:{background:`#f7f7f7`,color:`#646864`}},Yd=B.div`
  box-sizing: border-box;
  padding: 8px 16px;
  background-color: ${e=>(Jd[e.$tone]||Jd.info).background};
  color: ${e=>(Jd[e.$tone]||Jd.info).color};
  font-size: 12px;
`,Xd=24,Zd=200,Qd=()=>{let e=[...document.querySelectorAll(`nav`)].map(e=>e.getBoundingClientRect()).find(e=>e.left<=0&&e.width>0);return Math.min((e?.width||0)+Xd,Zd)},$d=(e,t)=>{let n=new Date(e).getTime();if(Number.isNaN(n))return``;let r=Math.max(0,Math.round((t-n)/1e3));if(r<60)return`just now`;let i=Math.round(r/60);if(i<60)return`${i}m ago`;let a=Math.round(i/60);if(a<24)return`${a}h ago`;let o=Math.round(a/24);return o<31?`${o}d ago`:`${Math.round(o/30)}mo ago`};function ef({context:e,onRestoreContext:t,toggleLeft:n,toggleContainer:r}){let[i,a]=(0,g.useState)(!1),[o,s]=(0,g.useState)([]),[c,l]=(0,g.useState)(null),[u,d]=(0,g.useState)(gd),[f,p]=(0,g.useState)(()=>!gd()),[m,h]=(0,g.useState)(null),[_,y]=(0,g.useState)(null),[b,x]=(0,g.useState)(``),[S,C]=(0,g.useState)(``),[w,T]=(0,g.useState)(0),[E,D]=(0,g.useState)(()=>Date.now()),[O,k]=(0,g.useState)(Xd),A=n??O;(0,g.useEffect)(()=>{let e=!1;return ud().then(t=>{e||s(t)}).catch(t=>{e||l(t.message)}),()=>{e=!0}},[]),(0,g.useEffect)(()=>(i?document.documentElement.dataset.commentMode=`true`:delete document.documentElement.dataset.commentMode,()=>{delete document.documentElement.dataset.commentMode}),[i]),(0,g.useEffect)(()=>{if(i)return bd((t,n)=>{let r=Gu(t,n,e);r&&(y(null),x(``),h({anchor:r}))})},[i,e]),(0,g.useEffect)(()=>{if(!i)return;let e=()=>T(e=>e+1),t=Bu();window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e);let n=new ResizeObserver(e);t&&n.observe(t);let r=setTimeout(e,60);return()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e),n.disconnect(),clearTimeout(r)}},[i]),(0,g.useEffect)(()=>{if(r||n!==void 0)return;let e=()=>k(Qd()),t=requestAnimationFrame(e),i=setTimeout(e,200);return window.addEventListener(`resize`,e),()=>{cancelAnimationFrame(t),clearTimeout(i),window.removeEventListener(`resize`,e)}},[n,r]),(0,g.useEffect)(()=>{if(!i)return;let e=setInterval(()=>D(Date.now()),3e4);return()=>clearInterval(e)},[i]),(0,g.useEffect)(()=>{if(!i)return;let e=e=>{e.key===`Escape`&&(m?h(null):_?y(null):a(!1))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[i,m,_]);let j=(0,g.useMemo)(()=>o.filter(e=>!e.parentId),[o]),ee=(0,g.useCallback)(e=>o.filter(t=>t.parentId===e),[o]),te=(0,g.useMemo)(()=>j.map(t=>{if(!Ju(t.anchor?.context,e))return null;let n=qu(t.anchor);return n?{comment:t,position:n}:null}).filter(Boolean),[j,e,w]),M=(0,g.useMemo)(()=>j.filter(t=>!Ju(t.anchor?.context,e)),[j,e]),ne=(0,g.useMemo)(()=>{let e=Bu();if(!e)return null;let t=e.getBoundingClientRect();return{left:t.left,top:t.top,width:t.width,height:t.height}},[w]),re=(0,g.useMemo)(()=>m?qu(m.anchor):null,[m,w]),N=_?o.find(e=>e.id===_):null,ie=(0,g.useMemo)(()=>N?qu(N.anchor):null,[N,w]),ae=t=>{if(document.documentElement.dataset.inspectMode===`true`&&!(t.metaKey||t.ctrlKey))return;if((t.metaKey||t.ctrlKey||t.altKey)&&document.documentElement.dataset.inspectMode!==`true`){let e=document.elementsFromPoint(t.clientX,t.clientY).find(e=>Bu()?.contains(e))?.closest(`a[href], button, input, select, [role="button"]`);e&&e.click();return}let n=Gu(t.clientX,t.clientY,e);if(!n){y(null),h(null);return}y(null),x(``),h({anchor:n})},oe=async e=>{if(e.preventDefault(),!(!b.trim()||!u.trim())){_d(u.trim()),p(!1);try{let e=await dd({author:u.trim(),body:b.trim(),anchor:m.anchor,number:j.length+1});s(t=>[...t,e]),h(null),x(``),y(e.id)}catch(e){l(e.message)}}},se=async e=>{if(e.preventDefault(),!(!S.trim()||!u.trim()||!N)){_d(u.trim()),p(!1);try{let e=await dd({author:u.trim(),body:S.trim(),anchor:null,parentId:N.id});s(t=>[...t,e]),C(``)}catch(e){l(e.message)}}},ce=async e=>{try{await fd(e.id,!e.resolved),s(t=>t.map(t=>t.id===e.id?{...t,resolved:!e.resolved}:t))}catch(e){l(e.message)}},le=async e=>{try{await pd(e.id),s(t=>t.filter(t=>t.id!==e.id&&t.parentId!==e.id)),_===e.id&&y(null)}catch(e){l(e.message)}},ue=n=>{let r=n.anchor?.context;r&&!Ju(r,e)&&t?.(r),y(n.id),h(null),C(``);let i=0,a=()=>{let e=Ku(n.anchor);if(e){e.scrollIntoView({block:`center`,inline:`nearest`}),T(e=>e+1);return}i++<10&&requestAnimationFrame(a)};requestAnimationFrame(a)},de=j.filter(e=>!e.resolved).length,fe=(0,V.jsxs)(Cd,{type:`button`,$inline:!!r,style:r?void 0:{left:A},$active:i,onClick:()=>{a(e=>!e),h(null),y(null)},"aria-pressed":i,children:[i?`Exit comment mode`:`Comment`,!i&&de>0?` (${de})`:``]});return(0,V.jsxs)(V.Fragment,{children:[r?(0,v.createPortal)(fe,r):fe,i&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(zd,{}),ne&&(0,V.jsx)(wd,{onClick:ae,style:{left:ne.left,top:ne.top,width:ne.width,height:ne.height}}),te.map(({comment:e,position:t})=>(0,V.jsx)(Td,{type:`button`,style:{left:t.x,top:t.y},$resolved:e.resolved,$dimmed:_!==null&&_!==e.id,onClick:t=>{t.stopPropagation(),h(null),C(``),y(e.id===_?null:e.id)},"aria-label":`Comment ${e.number??``} by ${e.author}`,children:e.number??`•`},e.id)),m&&re&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Td,{as:`div`,style:{left:re.x,top:re.y},"aria-hidden":`true`,children:`+`}),(0,V.jsxs)(Ed,{style:of(re),onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(Dd,{children:[(0,V.jsx)(`span`,{children:`New comment`}),(0,V.jsx)(Od,{children:(0,V.jsx)(kd,{type:`button`,onClick:()=>h(null),children:`Cancel`})})]}),m.anchor.label&&(0,V.jsxs)(Rd,{children:[`On: `,m.anchor.label]}),(0,V.jsxs)(Nd,{onSubmit:oe,children:[f&&(0,V.jsx)(Fd,{value:u,onChange:e=>d(e.target.value),placeholder:`Your name`,"aria-label":`Your name`}),(0,V.jsx)(Pd,{value:b,onChange:e=>x(e.target.value),placeholder:`Add a comment`,"aria-label":`Comment`,autoFocus:!0}),(0,V.jsx)(Id,{children:(0,V.jsx)(Ld,{type:`submit`,disabled:!b.trim()||!u.trim(),children:`Comment`})})]})]})]}),N&&ie&&!m&&(0,V.jsxs)(Ed,{style:of(ie),onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(Dd,{children:[(0,V.jsxs)(`span`,{children:[`#`,N.number??`—`,ie.drifted?` · content changed since`:``]}),(0,V.jsxs)(Od,{children:[(0,V.jsx)(kd,{type:`button`,onClick:()=>ce(N),children:N.resolved?`Unresolve`:`Resolve`}),(0,V.jsx)(kd,{type:`button`,onClick:()=>le(N),children:`Delete`}),(0,V.jsx)(kd,{type:`button`,onClick:()=>y(null),children:`Close`})]})]}),(0,V.jsxs)(Ad,{children:[(0,V.jsxs)(jd,{children:[N.author,` · `,$d(N.createdAt,E)]}),(0,V.jsx)(Md,{children:N.body})]}),ee(N.id).map(e=>(0,V.jsxs)(Ad,{children:[(0,V.jsxs)(jd,{children:[e.author,` · `,$d(e.createdAt,E)]}),(0,V.jsx)(Md,{children:e.body})]},e.id)),(0,V.jsxs)(Nd,{onSubmit:se,children:[f&&(0,V.jsx)(Fd,{value:u,onChange:e=>d(e.target.value),placeholder:`Your name`,"aria-label":`Your name`}),(0,V.jsx)(Pd,{value:S,onChange:e=>C(e.target.value),placeholder:`Reply`,"aria-label":`Reply`}),(0,V.jsx)(Id,{children:(0,V.jsx)(Ld,{type:`submit`,disabled:!S.trim()||!u.trim(),children:`Reply`})})]})]}),(0,V.jsxs)(Bd,{"data-comment-sidebar":`true`,onClick:e=>e.stopPropagation(),children:[(0,V.jsxs)(Vd,{children:[(0,V.jsxs)(`span`,{children:[`Comments (`,j.length,`)`]}),(0,V.jsx)(kd,{type:`button`,style:{color:`#646864`},onClick:()=>a(!1),children:`Close`})]}),td?(0,V.jsx)(Yd,{$tone:`info`,children:`Shared — everyone with this link sees these comments. You can delete your own.`}):(0,V.jsx)(Yd,{$tone:`warn`,children:`Stored in this browser only — others won't see these. See src/comments/SETUP.md to share them.`}),c&&(0,V.jsx)(Yd,{$tone:`error`,children:c}),M.length>0&&(0,V.jsxs)(Yd,{$tone:`info`,children:[M.length,` comment`,M.length===1?``:`s`,` on another view — click to jump there.`]}),(0,V.jsx)(Yd,{$tone:`info`,children:`Click the design to comment. ⌘-click (or Ctrl-click) to navigate without leaving comment mode.`}),(0,V.jsx)(Hd,{children:j.length===0?(0,V.jsx)(qd,{children:`Click anywhere on the design to leave a comment.`}):j.map(e=>(0,V.jsxs)(Ud,{type:`button`,$active:e.id===_,$resolved:e.resolved,onClick:()=>ue(e),children:[(0,V.jsxs)(Wd,{children:[(0,V.jsxs)(`span`,{children:[`#`,e.number??`—`]}),(0,V.jsx)(`span`,{children:e.author}),(0,V.jsx)(`span`,{children:$d(e.createdAt,E)}),e.resolved&&(0,V.jsx)(`span`,{children:`· resolved`})]}),(0,V.jsx)(Gd,{children:e.body}),e.anchor?.label&&(0,V.jsxs)(Kd,{children:[`On: `,e.anchor.label]})]},e.id))})]})]})]})}var tf=300,nf=320,rf=320,af=12,of=e=>{let t=window.innerWidth-rf-tf-af,n=Math.max(af,Math.min(e.x+16,t)),r=window.innerHeight-nf-af;return{left:n,top:Math.max(af,Math.min(e.y,r))}};function sf(e){return Number.isFinite(e)?Math.round(e):0}function cf(e){let t=parseFloat(e);return Number.isFinite(t)?t:0}function lf(e){if(!e||typeof getComputedStyle!=`function`)return{mode:`margin`,guides:[],bands:[],summary:[]};let t=getComputedStyle(e),n=e.getBoundingClientRect(),r=sf(cf(t.marginTop)),i=sf(cf(t.marginRight)),a=sf(cf(t.marginBottom)),o=sf(cf(t.marginLeft)),s=[],c=[],l=[];return r>0&&(c.push({id:`margin-band-top`,left:n.left,top:n.top-r,width:n.width,height:r}),s.push({id:`margin-top`,axis:`v`,x1:n.left+n.width/2,y1:n.top-r,x2:n.left+n.width/2,y2:n.top,labelX:n.left+n.width/2,labelY:n.top-r/2,px:r,label:`${r}`}),l.push(`Margin top ${r}px`)),a>0&&(c.push({id:`margin-band-bottom`,left:n.left,top:n.bottom,width:n.width,height:a}),s.push({id:`margin-bottom`,axis:`v`,x1:n.left+n.width/2,y1:n.bottom,x2:n.left+n.width/2,y2:n.bottom+a,labelX:n.left+n.width/2,labelY:n.bottom+a/2,px:a,label:`${a}`}),l.push(`Margin bottom ${a}px`)),o>0&&(c.push({id:`margin-band-left`,left:n.left-o,top:n.top,width:o,height:n.height}),s.push({id:`margin-left`,axis:`h`,x1:n.left-o,y1:n.top+n.height/2,x2:n.left,y2:n.top+n.height/2,labelX:n.left-o/2,labelY:n.top+n.height/2,px:o,label:`${o}`}),l.push(`Margin left ${o}px`)),i>0&&(c.push({id:`margin-band-right`,left:n.right,top:n.top,width:i,height:n.height}),s.push({id:`margin-right`,axis:`h`,x1:n.right,y1:n.top+n.height/2,x2:n.right+i,y2:n.top+n.height/2,labelX:n.right+i/2,labelY:n.top+n.height/2,px:i,label:`${i}`}),l.push(`Margin right ${i}px`)),l.length===0&&l.push(`Margin 0`),{mode:`margin`,guides:s,bands:c,summary:l}}function uf(e){return{left:e.left,top:e.top,right:e.left+e.width,bottom:e.top+e.height,width:e.width,height:e.height,midX:e.left+e.width/2,midY:e.top+e.height/2}}function df(e,t){return e.left<=t.left+.5&&e.top<=t.top+.5&&e.right>=t.right-.5&&e.bottom>=t.bottom-.5}function ff(e,t){if(!e||!t)return{mode:`gap`,guides:[],summary:[]};let n=uf(e),r=uf(t);return df(r,n)&&(r.width>n.width+1||r.height>n.height+1)?pf(n,r,`to container`):df(n,r)&&(n.width>r.width+1||n.height>r.height+1)?pf(r,n,`inside selection`):mf(n,r)}function pf(e,t,n){let r=[],i=[],a=sf(e.top-t.top),o=sf(t.right-e.right),s=sf(t.bottom-e.bottom),c=sf(e.left-t.left);return a>0&&(r.push({id:`inset-top`,axis:`v`,x1:e.midX,y1:t.top,x2:e.midX,y2:e.top,labelX:e.midX,labelY:(t.top+e.top)/2,px:a,label:`${a}`}),i.push(`Top inset ${a}px`)),s>0&&(r.push({id:`inset-bottom`,axis:`v`,x1:e.midX,y1:e.bottom,x2:e.midX,y2:t.bottom,labelX:e.midX,labelY:(e.bottom+t.bottom)/2,px:s,label:`${s}`}),i.push(`Bottom inset ${s}px`)),c>0&&(r.push({id:`inset-left`,axis:`h`,x1:t.left,y1:e.midY,x2:e.left,y2:e.midY,labelX:(t.left+e.left)/2,labelY:e.midY,px:c,label:`${c}`}),i.push(`Left inset ${c}px`)),o>0&&(r.push({id:`inset-right`,axis:`h`,x1:e.right,y1:e.midY,x2:t.right,y2:e.midY,labelX:(e.right+t.right)/2,labelY:e.midY,px:o,label:`${o}`}),i.push(`Right inset ${o}px`)),i.length===0?i.push(`Flush (${n})`):i.unshift(`Inset ${n}`),{mode:`inset`,guides:r,summary:i}}function mf(e,t){let n=[],r=[];if(e.right<t.left){let i=sf(t.left-e.right),a=hf(e.top,e.bottom,t.top,t.bottom)??(e.midY+t.midY)/2;n.push({id:`gap-h`,axis:`h`,x1:e.right,y1:a,x2:t.left,y2:a,labelX:(e.right+t.left)/2,labelY:a,px:i,label:`${i}`}),r.push(`Horizontal ${i}px`)}else if(t.right<e.left){let i=sf(e.left-t.right),a=hf(e.top,e.bottom,t.top,t.bottom)??(e.midY+t.midY)/2;n.push({id:`gap-h`,axis:`h`,x1:t.right,y1:a,x2:e.left,y2:a,labelX:(t.right+e.left)/2,labelY:a,px:i,label:`${i}`}),r.push(`Horizontal ${i}px`)}if(e.bottom<t.top){let i=sf(t.top-e.bottom),a=hf(e.left,e.right,t.left,t.right)??(e.midX+t.midX)/2;n.push({id:`gap-v`,axis:`v`,x1:a,y1:e.bottom,x2:a,y2:t.top,labelX:a,labelY:(e.bottom+t.top)/2,px:i,label:`${i}`}),r.push(`Vertical ${i}px`)}else if(t.bottom<e.top){let i=sf(e.top-t.bottom),a=hf(e.left,e.right,t.left,t.right)??(e.midX+t.midX)/2;n.push({id:`gap-v`,axis:`v`,x1:a,y1:t.bottom,x2:a,y2:e.top,labelX:a,labelY:(t.bottom+e.top)/2,px:i,label:`${i}`}),r.push(`Vertical ${i}px`)}if(n.length===0){let i=sf(Math.abs(t.midX-e.midX)),a=sf(Math.abs(t.midY-e.midY));if(i>0){let a=Math.min(e.midX,t.midX),o=Math.max(e.midX,t.midX);n.push({id:`center-h`,axis:`h`,x1:a,y1:e.midY,x2:o,y2:e.midY,labelX:(a+o)/2,labelY:e.midY,px:i,label:`${i}`}),r.push(`Center Δx ${i}px`)}if(a>0){let i=Math.min(e.midY,t.midY),o=Math.max(e.midY,t.midY);n.push({id:`center-v`,axis:`v`,x1:e.midX,y1:i,x2:e.midX,y2:o,labelX:e.midX,labelY:(i+o)/2,px:a,label:`${a}`}),r.push(`Center Δy ${a}px`)}}return r.length===0&&r.push(`Overlapping / aligned`),{mode:`gap`,guides:n,summary:r}}function hf(e,t,n,r){let i=Math.max(e,n),a=Math.min(t,r);return a<=i?null:(i+a)/2}var gf={"foreground.default":`fg/default`,"foreground.subtle":`fg/subtle`,"foreground.primary":`fg/primary`,"foreground.success":`fg/success`,"foreground.warning":`fg/warning`,"foreground.danger":`fg/danger`,"foreground.onEmphasis":`fg/onEmphasis`,"foreground.disabled":`fg/disabled`,"foreground.warningEmphasis":`fg/warningEmphasis`,"foreground.successEmphasis":`fg/successEmphasis`,"foreground.dangerEmphasis":`fg/dangerEmphasis`,"background.default":`bg/default`,"background.subtle":`bg/subtle`,"background.raised":`bg/raised`,"background.recessed":`bg/recessed`,"background.primaryEmphasis":`bg/primaryEmphasis`,"background.success":`bg/success`,"background.warning":`bg/warning`,"background.danger":`bg/danger`,"border.default":`border/default`,"border.subtle":`border/subtle`,"border.emphasis":`border/emphasis`,"border.primaryEmphasis":`border/primaryEmphasis`};function _f(e){let t=new Map;for(let[n,r]of e){let e=Sf(n);e&&t.set(e,r)}return t}var vf=()=>_f([[G.grey[900],`fg/default`],[G.grey[800],`fg/default`],[G.black,`fg/default`],[`#2f3941`,`fg/default`],[G.grey[700],`fg/subtle`],[`#68737d`,`fg/subtle`],[G.grey[600],`fg/disabled`],[G.blue[700],`fg/primary`],[G.green[700],`fg/success`],[G.yellow[700],`fg/warning`],[G.red[700],`fg/danger`],[G.white,`fg/onEmphasis`],[G.yellow[900],`fg/warningEmphasis`],[G.green[900],`fg/successEmphasis`],[G.red[900],`fg/dangerEmphasis`]]),yf=()=>_f([[G.white,`bg/default`],[G.grey[100],`bg/subtle`],[G.blue[700],`bg/primaryEmphasis`],[G.green[100],`bg/success`],[G.yellow[100],`bg/warning`],[G.yellow[200],`bg/warning`],[G.red[100],`bg/danger`]]),bf=()=>_f([[G.grey[300],`border/default`],[G.grey[200],`border/subtle`],[G.grey[600],`border/emphasis`],[G.blue[700],`border/primaryEmphasis`]]);function xf(e){if(!e||!e.startsWith(`#`)||e.length!==7)return!1;let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16),i=Math.max(t,n,r),a=Math.min(t,n,r),o=i===0?0:(i-a)/i,s=(i+a)/2/255;return o<.12&&s>.08&&s<.35}function Sf(e){if(!e||e===`transparent`||e===`rgba(0, 0, 0, 0)`)return null;let t=Sf._ctx||=document.createElement(`canvas`).getContext(`2d`);if(!t)return String(e).trim().toLowerCase();t.fillStyle=`#000`,t.fillStyle=e;let n=t.fillStyle;if(n.startsWith(`#`)){if(n.length===4){let e=n[1],t=n[2],r=n[3];return`#${e}${e}${t}${t}${r}${r}`.toLowerCase()}return n.toLowerCase()}let r=n.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);return r?`#${[r[1],r[2],r[3]].map(e=>Number(e).toString(16).padStart(2,`0`)).join(``)}`:String(e).trim().toLowerCase()}function Cf(e){if(e==null||e===``)return null;let t=parseFloat(e);return Number.isNaN(t)?String(e):t===0?`0`:`${Number.isInteger(t)?t:Math.round(t*100)/100}px`}function wf(e){return!e||e===`0`||e===`0px`}function Tf(e,t,n,r){let i=Cf(e),a=Cf(t),o=Cf(n),s=Cf(r);return[i,a,o,s].every(wf)?null:i===a&&a===o&&o===s?i:i===o&&a===s?`${i} ${a}`:`${i} ${a} ${o} ${s}`}function Ef(e,t,n,r,i=`text`){if(r)return{label:e,value:r,detail:t?`rendered ${Sf(t)||t}`:null,kind:`token`};let a=Df(n);if(a)return{label:e,value:gf[a]||a,detail:t?`rendered ${Sf(t)||t}`:null,kind:`token`};let o=Sf(t);if(!o)return null;let s=(i===`bg`?yf():i===`border`?bf():vf()).get(o);return!s&&i===`text`&&xf(o)&&(s=`fg/default`),s?{label:e,value:s,detail:`rendered ${o}`,kind:`token`}:{label:e,value:o,detail:`computed color`,kind:`computed`}}function Df(e){if(!e||typeof e!=`string`)return null;let t=e.match(/var\(\s*(--[\w-]+)/);if(t)return t[1];if(e.includes(`foreground.`)||e.includes(`background.`)||e.includes(`border.`)){let t=Object.keys(gf).find(t=>e.includes(t));if(t)return t}return null}function Of(e,t){try{return e.style?.getPropertyValue?.(t)||``}catch{return``}}function kf(e){let t=e.closest(`[data-inspect-name]`);if(t?.getAttribute(`data-inspect-name`))return{name:t.getAttribute(`data-inspect-name`),source:`data-inspect-name`};let n=e.closest(`[data-garden-id]`);return n?.getAttribute(`data-garden-id`)?{name:n.getAttribute(`data-garden-id`),source:`data-garden-id`}:null}function Af(e){let t=[],n=e;for(;n&&n.nodeType===1;){let e=n.getAttribute?.(`data-inspect-token`);if(e&&e.split(/\s+/).filter(Boolean).forEach(e=>{t.includes(e)||t.push(e)}),n.getAttribute?.(`data-inspect-root`)||n.getAttribute?.(`data-comment-root`))break;n=n.parentElement}return t}function jf(e){if(!(e instanceof Element))return{rows:[],copyText:``,title:`Element`};let t=window.getComputedStyle(e),n=e.getBoundingClientRect(),r=[],i=kf(e);i&&r.push({label:i.source===`data-inspect-name`?`Flora component`:`Component id`,value:i.name,kind:`meta`});let a=e.tagName.toLowerCase();r.push({label:`Element`,value:a+(e.className&&typeof e.className==`string`&&e.className.trim()?`.${e.className.trim().split(/\s+/).slice(0,2).join(`.`)}`:``)}),Af(e).forEach(e=>{r.push({label:`Token (metadata)`,value:e,kind:`token`})});let o=Ef(`Text color`,t.color,Of(e,`color`),e.getAttribute(`data-inspect-token-color`),`text`);o&&r.push(o);let s=Ef(`Background`,t.backgroundColor,Of(e,`background-color`),e.getAttribute(`data-inspect-token-bg`),`bg`);s&&r.push(s);let c=Ef(`Border color`,t.borderTopColor,Of(e,`border-color`)||Of(e,`border-top-color`),e.getAttribute(`data-inspect-token-border`),`border`);c&&t.borderTopWidth&&t.borderTopWidth!==`0px`&&r.push(c);let l=Tf(t.paddingTop,t.paddingRight,t.paddingBottom,t.paddingLeft);l&&r.push({label:`Padding`,value:l});let u=Tf(t.marginTop,t.marginRight,t.marginBottom,t.marginLeft);if(u&&r.push({label:`Margin`,value:u}),t.gap&&t.gap!==`normal`&&t.gap!==`0px`)r.push({label:`Gap`,value:Cf(t.gap)});else{let e=t.rowGap&&t.rowGap!==`normal`?Cf(t.rowGap):null,n=t.columnGap&&t.columnGap!==`normal`?Cf(t.columnGap):null;e&&e!==`0`&&r.push({label:`Row gap`,value:e}),n&&n!==`0`&&r.push({label:`Column gap`,value:n})}r.push({label:`Width`,value:`${Math.round(n.width)}px`}),r.push({label:`Height`,value:`${Math.round(n.height)}px`}),t.fontSize&&r.push({label:`Typography`,value:`${Cf(t.fontSize)} / ${Cf(t.lineHeight)||t.lineHeight}, weight ${t.fontWeight}`}),t.borderTopWidth&&t.borderTopWidth!==`0px`&&r.push({label:`Border`,value:`${Cf(t.borderTopWidth)} ${t.borderTopStyle}`});let d=t.borderRadius;d&&d!==`0px`&&r.push({label:`Radius`,value:d.includes(` `)?d:Cf(d)});let f=t.boxShadow;f&&f!==`none`&&r.push({label:`Shadow`,value:f.length>80?`${f.slice(0,77)}…`:f});let p=i?.name||a;return{rows:r,copyText:r.map(e=>{let t=e.detail?` (${e.detail})`:``;return`${e.label}: ${e.value}${t}`}).join(`
`),title:p}}var Mf=`[data-garden-id="modals.modal"]`,Nf=`[data-garden-id="modals.backdrop"]`;function Pf(e,t,n){if(!n)return null;let r=document.elementsFromPoint(e,t);for(let e of r){if(!(e instanceof Element)||e.closest(`[data-inspect-ui="true"]`)||e.closest(`[data-comment-ui="true"]`))continue;let t=e.closest(Mf);if(t){if(e===t)continue;return e}if(e.closest(Nf))return null;if(n.contains(e)&&e!==n)return e}return null}var Ff=9100,If=G.mint[500],Lf=`#ff6b4a`,Rf=300,zf=16;function Bf(){return{left:Math.max(zf,window.innerWidth-Rf-zf),top:64}}function Vf(e,t,n=240){let r=Math.max(zf,window.innerWidth-Rf-zf),i=Math.max(zf,window.innerHeight-Math.min(n,window.innerHeight-zf)-zf);return{left:Math.min(Math.max(zf,e),r),top:Math.min(Math.max(zf,t),i)}}function Hf(){return document.querySelector(`[data-inspect-root="true"]`)||document.querySelector(`[data-comment-root="true"]`)}var Uf=B.button`
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  min-height: 28px;
  padding: 0 10px;
  border: 1px solid ${e=>e.$active?If:`#363d44`};
  border-radius: 4px;
  background-color: ${e=>e.$active?If:`transparent`};
  color: ${e=>e.$active?`#ffffff`:`#c8cdd0`};
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.$active?`#16a260`:`#262c32`};
    border-color: ${e=>e.$active?If:`#555e66`};
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #9affce;
    outline-offset: 2px;
  }

  /* Mint console: dark ink so the control stays readable on Mint/500. */
  header[data-inspect-console='true'] & {
    border-color: ${e=>e.$active?`#0e261a`:`rgba(14, 38, 26, 0.4)`};
    background-color: ${e=>e.$active?`#0e261a`:`transparent`};
    color: ${e=>e.$active?`#ffffff`:`#0e261a`};

    &:hover {
      background-color: ${e=>e.$active?`#143726`:`rgba(14, 38, 26, 0.12)`};
      border-color: #0e261a;
      color: ${e=>e.$active?`#ffffff`:`#0e261a`};
    }

    &:focus-visible {
      outline-color: #0e261a;
    }
  }
`,Wf=B.div`
  position: fixed;
  z-index: ${Ff};
  cursor: crosshair;
  background: transparent;
`,Gf=B.div`
  position: fixed;
  z-index: ${9101};
  pointer-events: none;
  box-sizing: border-box;
  border: 2px solid ${If};
  background: rgba(1, 177, 92, 0.12);
  border-radius: 2px;
`,Kf=B.div`
  position: fixed;
  z-index: ${9102};
  pointer-events: none;
  background: rgba(255, 107, 74, 0.28);
`,qf=B.div`
  position: fixed;
  z-index: ${9103};
  pointer-events: none;
  background: ${Lf};
`,Jf=B.div`
  position: fixed;
  z-index: ${9104};
  pointer-events: none;
  transform: translate(-50%, -50%);
  padding: 1px 5px;
  border-radius: 3px;
  background: ${Lf};
  color: #ffffff;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
`,Yf=B.aside`
  position: fixed;
  z-index: ${9105};
  width: ${Rf}px;
  max-height: calc(100vh - 32px);
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
`,Xf=B.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin: -4px -6px 10px;
  padding: 4px 6px 8px;
  border-radius: 4px;
  cursor: grab;
  touch-action: none;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`,Zf=B.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  color: #ffffff;
  word-break: break-word;
`,Qf=B.div`
  margin: 0 0 10px;
  color: #8b9298;
  font-size: 11px;
  line-height: 14px;
`,$f=B.button`
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
`,ep=B.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 6px 8px;
  padding: 5px 0;
  border-top: 1px solid #2c333a;
`,tp=B.div`
  color: #8b9298;
`,np=B.div`
  color: ${e=>e.$token?`#9affce`:e.$measure?Lf:`#e8eaed`};
  word-break: break-word;
`,rp=B.div`
  grid-column: 2;
  color: #6b737a;
  font-size: 11px;
  margin-top: -2px;
`,ip=B.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin-right: 6px;
  vertical-align: -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: ${e=>e.$color};
`,ap=B.button`
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
`;function op(e){if(!e)return null;let t=e.getBoundingClientRect();return{left:t.left,top:t.top,width:t.width,height:t.height}}function sp(){try{return new URLSearchParams(window.location.search).get(`inspect`)===`true`}catch{return!1}}function cp({toggleContainer:e,onActiveChange:t}){let[n,r]=(0,g.useState)(sp),[i,a]=(0,g.useState)(null),[o,s]=(0,g.useState)(null),[c,l]=(0,g.useState)(0),[u,d]=(0,g.useState)(!1),[f,p]=(0,g.useState)(Bf),[m,h]=(0,g.useState)(!1),_=(0,g.useRef)(null),y=(0,g.useRef)(null);(0,g.useEffect)(()=>(xd(n),t?.(n),n||(a(null),s(null),h(!1)),()=>xd(!1)),[n,t]),(0,g.useEffect)(()=>{if(!n)return;let e=()=>l(e=>e+1),t=Hf();window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e);let r=new ResizeObserver(e);return t&&r.observe(t),()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e),r.disconnect()}},[n]),(0,g.useEffect)(()=>{if(!n)return;let e=e=>{if(e.key===`Escape`){if(o){e.stopImmediatePropagation(),s(null);return}e.stopImmediatePropagation(),r(!1)}};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,o]),(0,g.useEffect)(()=>{if(!n)return;let e=e=>!!e?.closest?.(`[data-garden-id="modals.modal"]`),t=()=>{let t=!!document.querySelector(`[data-garden-id="modals.backdrop"]`);h(t),t&&(s(t=>e(t)?t:null),a(t=>e(t)?t:null))};t();let r=new MutationObserver(t);return r.observe(document.body,{childList:!0,subtree:!0}),()=>r.disconnect()},[n]),(0,g.useEffect)(()=>{if(!n)return;let e=()=>{let e=_.current?.offsetHeight||240;p(t=>Vf(t.left,t.top,e))};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[n]);let b=e=>{if(e.button!=null&&e.button!==0||e.target.closest(`button`))return;let t=_.current?.offsetHeight||240;y.current={offsetX:e.clientX-f.left,offsetY:e.clientY-f.top,height:t},e.currentTarget.setPointerCapture?.(e.pointerId)},x=e=>{let t=y.current;t&&p(Vf(e.clientX-t.offsetX,e.clientY-t.offsetY,t.height))},S=()=>{y.current=null},C=(0,g.useMemo)(()=>n?op(Hf()):null,[c,n]),w=(0,g.useMemo)(()=>op(i),[i,c]),T=(0,g.useMemo)(()=>op(o),[o,c]),E=(0,g.useMemo)(()=>o?jf(o):null,[o,c]),D=(0,g.useMemo)(()=>o?lf(o):{mode:`margin`,guides:[],bands:[],summary:[]},[o,c]),O=(0,g.useMemo)(()=>!T||!w||!i||i===o?{mode:`gap`,guides:[],summary:[]}:ff(T,w),[T,w,i,o,c]),k=O.guides.length>0,A=k?O.guides:D.guides,j=k?O.summary:D.summary.filter(e=>e!==`Margin 0`),ee=(0,g.useCallback)(e=>{let t=Hf(),n=Pf(e.clientX,e.clientY,t);a(n)},[]),te=(0,g.useCallback)(e=>{if(e.preventDefault(),e.stopPropagation(),e.metaKey||e.ctrlKey){if(document.documentElement.dataset.commentMode===`true`){yd(e.clientX,e.clientY);return}let t=Hf(),n=document.elementsFromPoint(e.clientX,e.clientY).find(e=>!(e instanceof Element)||e.closest(`[data-inspect-ui="true"]`)?!1:e.closest(`[data-garden-id="modals.modal"]`)?!0:!e.closest(`[data-garden-id="modals.backdrop"]`)&&!!t?.contains(e))?.closest?.(`a[href], button, input, select, textarea, [role="button"], [role="combobox"]`);n&&n.click();return}let t=Hf(),n=Pf(e.clientX,e.clientY,t);s(n)},[]);(0,g.useEffect)(()=>{if(!n||!m)return;let e=e=>!!e?.closest?.(`[data-inspect-ui="true"], [data-inspect-console], [data-comment-ui="true"]`),t=t=>{e(t.target)||ee(t)},r=t=>{if(e(t.target))return;t.preventDefault(),t.stopPropagation();let n=Pf(t.clientX,t.clientY,Hf());s(n)};return document.addEventListener(`mousemove`,t,!0),document.addEventListener(`click`,r,!0),()=>{document.removeEventListener(`mousemove`,t,!0),document.removeEventListener(`click`,r,!0)}},[n,m,ee]);let M=async()=>{if(!E?.copyText)return;let e=j.length>0?`\n\nMeasure:\n${j.join(`
`)}`:``;try{await navigator.clipboard.writeText(`${E.copyText}${e}`),d(!0),setTimeout(()=>d(!1),1500)}catch{d(!1)}},ne=(0,V.jsx)(Uf,{type:`button`,$active:n,"aria-pressed":n,onClick:()=>r(e=>!e),children:n?`Exit inspect`:`Inspect`});return(0,V.jsxs)(V.Fragment,{children:[e?(0,v.createPortal)(ne,e):ne,n&&C&&(0,V.jsx)(Wf,{"data-inspect-ui":`true`,onMouseMove:m?void 0:ee,onMouseLeave:m?void 0:()=>a(null),onClick:m?void 0:te,style:{left:C.left,top:C.top,width:C.width,height:C.height,pointerEvents:m?`none`:`auto`}}),n&&w&&i!==o&&(0,V.jsx)(Gf,{"data-inspect-ui":`true`,style:{left:w.left,top:w.top,width:w.width,height:w.height}}),n&&T&&(0,V.jsx)(Gf,{"data-inspect-ui":`true`,style:{left:T.left,top:T.top,width:T.width,height:T.height,borderWidth:2,background:`rgba(1, 177, 92, 0.18)`}}),n&&!k&&D.bands.map(e=>(0,V.jsx)(Kf,{"data-inspect-ui":`true`,style:{left:e.left,top:e.top,width:e.width,height:e.height}},e.id)),n&&A.map(e=>{let t=e.axis===`h`,n=Math.abs(t?e.x2-e.x1:e.y2-e.y1);return n<1?null:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(qf,{"data-inspect-ui":`true`,style:t?{left:Math.min(e.x1,e.x2),top:e.y1-.5,width:n,height:1}:{left:e.x1-.5,top:Math.min(e.y1,e.y2),width:1,height:n}}),(0,V.jsxs)(Jf,{"data-inspect-ui":`true`,style:{left:e.labelX,top:e.labelY},children:[e.label,`px`]})]},e.id)}),n&&E&&(0,V.jsxs)(Yf,{ref:_,"data-inspect-ui":`true`,role:`dialog`,"aria-label":`Inspect details`,style:{left:f.left,top:f.top},children:[(0,V.jsxs)(Xf,{onPointerDown:b,onPointerMove:x,onPointerUp:S,onPointerCancel:S,title:`Drag to move`,children:[(0,V.jsx)(Zf,{children:E.title}),(0,V.jsx)($f,{type:`button`,"aria-label":`Clear selection`,onClick:()=>s(null),children:`×`})]}),(0,V.jsx)(Qf,{children:`Drag the header to move. Select an element to measure CSS margins; hover another for gaps or insets. Esc clears, then exits. ⌘/Ctrl+click places a comment when Comment is on.`}),j.map(e=>(0,V.jsxs)(ep,{children:[(0,V.jsx)(tp,{children:`Measure`}),(0,V.jsx)(np,{$measure:!0,children:e})]},e)),E.rows.map(e=>(0,V.jsxs)(ep,{children:[(0,V.jsx)(tp,{children:e.label}),(0,V.jsxs)(np,{$token:e.kind===`token`,children:[e.kind===`computed`&&/^#|[rgb]/.test(e.value)&&(0,V.jsx)(ip,{$color:e.value}),e.kind===`token`&&e.detail?.includes(`#`)&&(0,V.jsx)(ip,{$color:e.detail.replace(/^rendered\s+/,``)}),e.value]}),e.detail&&(0,V.jsx)(rp,{children:e.detail})]},`${e.label}:${e.value}`)),(0,V.jsx)(ap,{type:`button`,onClick:M,children:u?`Copied`:`Copy values`})]})]})}var lp=B.nav`
  width: 240px;
  min-width: 240px;
  background: transparent;
  overflow-y: auto;
  padding: 16px 12px;
  height: 100%;
  box-sizing: border-box;
`,up=B.div`
  font-size: 12px;
  font-weight: 600;
  color: #68737d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 12px 4px;
  margin-top: ${e=>e.$first?`0`:`8px`};
`,dp=B.div`
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
`,fp=B.div`
  font-size: 15px;
  font-weight: 600;
  color: #2f3941;
  padding: 4px 12px 12px;
`;function pp(){let e=ze(),t=Ve(),n=e.pathname,r=n.startsWith(`/team-members`),i=n.startsWith(`/roles`);return(0,V.jsxs)(lp,{children:[(0,V.jsx)(fp,{children:`People`}),(0,V.jsx)(up,{$first:!0,children:`Team`}),(0,V.jsx)(dp,{$active:r,$clickable:!0,onClick:()=>t(`/team-members`),children:`Team members`}),(0,V.jsx)(dp,{$active:i,$clickable:!0,onClick:()=>t(`/roles`),children:`Roles`}),(0,V.jsx)(dp,{children:`Groups`}),(0,V.jsx)(up,{children:`Configuration`}),(0,V.jsx)(dp,{children:`User fields`}),(0,V.jsx)(dp,{children:`Organization fields`}),(0,V.jsx)(dp,{children:`Events`}),(0,V.jsx)(dp,{children:`Profiles`}),(0,V.jsx)(dp,{children:`End users`}),(0,V.jsx)(dp,{children:`Tags`}),(0,V.jsx)(up,{children:`Bulk actions`}),(0,V.jsx)(dp,{children:`Import users`}),(0,V.jsx)(dp,{children:`Import organizations`}),(0,V.jsx)(up,{children:`Deleted users`}),(0,V.jsx)(dp,{children:`Deleted users`}),(0,V.jsx)(up,{children:`Restrictions`}),(0,V.jsx)(dp,{children:`Banned IP addresses`})]})}var mp;function hp(){return hp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hp.apply(null,arguments)}var gp=function(e){return g.createElement(`svg`,hp({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),mp||=g.createElement(`path`,{fill:`currentColor`,d:`M3.646 10.354a.5.5 0 01-.057-.638l.057-.07L7.293 6 3.646 2.354a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057l.07.057 4 4a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.708 0z`}))},K=c(pa()),_p=()=>({getContainerProps:e=>{let{role:t=`navigation`,...n}=e;return{role:t===null?void 0:t,"data-garden-container-id":`containers.breadcrumb`,"data-garden-container-version":`1.0.10`,...n}},getCurrentPageProps:e=>({"aria-current":`page`,...e})}),vp=e=>{let{children:t,render:n=t}=e;return g.createElement(g.Fragment,null,n(_p()))};vp.propTypes={render:K.default.func,children:K.default.func};var yp=B.ol.attrs({"data-garden-id":`breadcrumbs.list`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledBreadcrumb`,componentId:`sc-11jrinn-0`})([`display:flex;margin:0;padding:0;list-style:none;font-size:`,`;direction:`,`;`,`;`],e=>e.theme.fontSizes.md,e=>e.theme.rtl&&`rtl`,H),bp=B(Oc).withConfig({displayName:`StyledChevronIcon`,componentId:`sc-9r9qrm-0`})([`transform:`,`;margin:0 `,`;color:`,`;`],e=>e.theme.rtl&&`rotate(180deg);`,e=>jo(e.theme.space.base,e.theme.fontSizes.md),e=>U({variable:`foreground.subtle`,theme:e.theme})),xp=B.li.attrs({"data-garden-id":`breadcrumbs.item`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledBreadcrumbItem`,componentId:`sc-r0suq7-0`})([`font-size:inherit;`,` `,`;`,`;`],({theme:e})=>z([`line-height:`,`;white-space:nowrap;& > :link,& > :visited{white-space:inherit;}`],pc(e.space.base*5,e.fontSizes.md)),({$isCurrent:e,theme:t})=>z([`color:`,`;`,``],e?U({variable:`foreground.subtle`,theme:t}):`inherit`,e&&`
      & > :link,
      & > :visited,
      & > :link:hover,
      & > :visited:hover,
      & > :link:focus,
      & > :visited:focus {
        color: inherit; /* [1] */
      }
    `),H),Sp=B(xp).attrs({"aria-hidden":!0}).withConfig({displayName:`StyledCenteredBreadcrumbItem`,componentId:`sc-1ces9y2-0`})([`display:flex;align-items:center;`]),Cp=(0,g.forwardRef)((e,t)=>{let{getContainerProps:n,getCurrentPageProps:r}=_p(),i=g.Children.count(e.children),a=g.Children.map(e.children,(e,t)=>t===i-1?g.createElement(xp,{$isCurrent:!0},(0,g.cloneElement)(e,r())):g.createElement(g.Fragment,null,g.createElement(xp,null,e),g.createElement(Sp,null,g.createElement(bp,null,g.createElement(gp,null))))),o=xc(Cp,e,`aria-label`,`Breadcrumbs`);return g.createElement(`nav`,n({...e,ref:t,role:null,"aria-label":o}),g.createElement(yp,null,a))});Cp.displayName=`Breadcrumb`;var wp=[`small`,`medium`,`large`],Tp=B.div.attrs({"data-garden-id":`buttons.button_group_view`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledSplitButton`,componentId:`sc-1u4v04v-0`})([`display:inline-flex;position:relative;z-index:0;direction:`,`;white-space:nowrap;`,`;`],e=>e.theme.rtl&&`rtl`,H),Ep=`buttons.icon`,Dp=e=>{let t;return e.$position===`start`?t=`margin-${e.theme.rtl?`left`:`right`}`:e.$position===`end`&&(t=`margin-${e.theme.rtl?`right`:`left`}`),t&&z([``,`:`,`px;`],t,e.theme.space.base*2)},Op=B(Oc).attrs({"data-garden-id":Ep,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledIcon`,componentId:`sc-19meqgg-0`})([`transform:`,`;transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;`,`;`,`;`],e=>e.$isRotated&&`rotate(${e.theme.rtl?`-`:`+`}180deg)`,e=>Dp(e),H),kp=e=>e.$isPill?`100px`:e.theme.borderRadii.md,Ap=e=>e.$size===`small`?`${e.theme.space.base*8}px`:e.$size===`large`?`${e.theme.space.base*12}px`:`${e.theme.space.base*10}px`,jp=({theme:e,$isLink:t,$isBasic:n,$isDanger:r,$isNeutral:i,$isPrimary:a,$focusInset:o})=>{let s,c=U({theme:e,variable:`background.disabled`}),l=U({theme:e,variable:`foreground.disabled`}),u={dark:{offset:-100},light:{offset:100}},d={dark:{offset:-200},light:{offset:200}};if(t){let t={theme:e,variable:r?`foreground.danger`:`foreground.primary`},n=U(t),i=U({...t,...u}),a=U({...t,...d});s=z([`outline-color:transparent;background-color:transparent;color:`,`;`,` &:hover{color:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:`,`;}&:disabled{color:`,`;}`],n,Dc({theme:e,condition:!1,styles:{color:n,outlineColor:U({theme:e,variable:`border.primaryEmphasis`})}}),i,a,l)}else if(a){let t;t=r?`background.dangerEmphasis`:i?`background.emphasis`:`background.primaryEmphasis`;let n={theme:e,variable:t},a=U(n),f=U({...n,...u}),p=U({...n,...d});s=z([`outline-color:transparent;background-color:`,`;color:`,`;&:hover{background-color:`,`;}`,` &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{background-color:`,`;}&:disabled{background-color:`,`;color:`,`;}`],a,U({theme:e,variable:`foreground.onEmphasis`}),f,Dc({theme:e,inset:o,shadowWidth:o?`sm`:`md`,spacerWidth:o?`sm`:`xs`,styles:(r||i)&&o?{borderColor:U({theme:e,variable:`border.primaryEmphasis`})}:void 0}),p,c,l)}else{let t,a,f,p,m,h;if(r){if(!n){let n={theme:e,variable:`border.dangerEmphasis`};t=U(n),a=U({...n,...u}),f=U({...n,...d}),i&&(p=U(n))}m=`background.dangerEmphasis`,h=i?`foreground.default`:`foreground.danger`}else{if(!n){let n={theme:e,variable:`border.primaryEmphasis`};i?(t=U({theme:e,variable:`border.default`,...u}),a=U(n),p=a,f=U({...n,...u})):(t=U(n),a=U({...n,...u}),f=U({...n,...d}))}m=`background.primaryEmphasis`,h=i?`foreground.default`:`foreground.primary`}let g=U({theme:e,variable:m,transparency:e.opacity[100]}),_=U({theme:e,variable:m,transparency:e.opacity[200]}),v={theme:e,variable:h},y=U(v),b,x,S,C,w;if(i){let t={theme:e,variable:`foreground.subtle`};S=U(t),C=U({...t,...u}),w=U({...t,...d})}else b=U({...v,...u}),x=U({...v,...d});s=z([`outline-color:transparent;border-color:`,`;background-color:transparent;color:`,`;&:hover{border-color:`,`;background-color:`,`;color:`,`;}`,` &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{border-color:`,`;background-color:`,`;color:`,`;}&:disabled{border-color:transparent;background-color:`,`;color:`,`;}& `,`{color:`,`;}&:hover `,`,&:focus-visible `,`{color:`,`;}&:active `,`{color:`,`;}&:disabled `,`{color:`,`;}`],t,y,a,g,b,Dc({theme:e,inset:o,styles:{borderColor:p}}),f,_,x,c,l,Op,S,Op,Op,C,Op,w,Op,l)}return s},Mp=({theme:e,$isPrimary:t,$isBasic:n,$isPill:r,$focusInset:i})=>{let{rtl:a,borderWidths:o,borders:s}=e,c=a?`right`:`left`,l=a?`left`:`right`,u=o.sm,d=`${t||n?``:`-`}${u}`,f=r&&`-2px`,p=!t&&U({theme:e,variable:`background.disabled`}),m=n?`transparent`:`revert`,h=U({theme:e,variable:`border.primaryEmphasis`}),g=n&&!t&&fc({theme:e,inset:i,spacerColor:{hue:h},color:{hue:`transparent`}});return z([`position:relative;transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,margin-`,` 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;border:`,` `,`;`,`{border-color:`,`;box-shadow:`,`;}&:hover,&:active,`,`{z-index:1;}&:disabled{z-index:-1;background-color:`,`;}&:not(:first-of-type){margin-`,`:`,`;}&:not(:first-of-type):disabled{margin-`,`:`,`;}&:not(:first-of-type):not(:last-of-type){border-radius:0;}&:first-of-type:not(:last-of-type){border-top-`,`-radius:0;border-bottom-`,`-radius:0;}&:last-of-type:not(:first-of-type){border-top-`,`-radius:0;border-bottom-`,`-radius:0;}&:first-of-type:not(:last-of-type) `,`{margin-`,`:`,`;}&:last-of-type:not(:first-of-type) `,`{margin-`,`:`,`;}`],c,s.sm,m,Ec,h,g,Ec,p,c,d,c,u,l,l,c,c,Op,l,f,Op,c,f)},Np=e=>{let t=e.$size===`small`?e.theme.iconSizes.sm:e.theme.iconSizes.md;return z([`width:`,`;min-width:`,`;height:`,`;vertical-align:`,`;`],t,t,t,e.$isLink&&`middle`)},Pp=e=>{let t;if(e.$isLink)t=z([`padding:0;font-size:inherit;`]);else{let n=Ap(e),r=Do(`${n} - (${e.theme.borderWidths.sm} * 2)`),i,a;e.$size===`small`?(a=e.theme.fontSizes.sm,i=`${e.theme.space.base*3}px`):(a=e.theme.fontSizes.md,i=e.$size===`large`?`${e.theme.space.base*5}px`:`${e.theme.space.base*4}px`),t=z([`padding:0 `,`;height:`,`;line-height:`,`;font-size:`,`;`],jo(Do(`${i} - ${e.theme.borderWidths.sm}`),a),n,r,a)}return t},Fp=B.button.attrs(e=>({"data-garden-id":e[`data-garden-id`]||`buttons.button`,"data-garden-version":`9.16.1`})).withConfig({displayName:`StyledButton`,componentId:`sc-qe3ace-0`})([`display:`,`;align-items:`,`;justify-content:`,`;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:`,`;border-radius:`,`;cursor:pointer;width:`,`;overflow:hidden;text-decoration:`,`;text-overflow:ellipsis;white-space:`,`;font-family:inherit;font-weight:`,`;-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:`,`;-webkit-touch-callout:none;`,`;&::-moz-focus-inner{border:0;padding:0;}`,`{text-decoration:none;}&:hover{text-decoration:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:`,`;}`,`;&:disabled{cursor:default;text-decoration:`,`;}& `,`{`,`}`,` &&{`,`}`,``],e=>e.$isLink?`inline`:`inline-flex`,e=>!e.$isLink&&`center`,e=>!e.$isLink&&`center`,e=>`${e.$isLink?`0px solid`:e.theme.borders.sm} transparent`,e=>kp(e),e=>e.$isStretched?`100%`:``,e=>e.$isUnderlined?`underline`:`none`,e=>!e.$isLink&&`nowrap`,e=>e.$isLink?`inherit`:e.theme.fontWeights.regular,e=>!e.$isLink&&`none`,e=>Pp(e),Ec,e=>e.$isLink?`underline`:`none`,e=>e.$isLink?`underline`:`none`,e=>jp(e),e=>e.$isLink&&`none`,Op,e=>Np(e),Tp,e=>Mp(e),H),Ip=`buttons.anchor`,Lp=B(Fp).attrs(e=>({"data-garden-id":Ip,"data-garden-version":`9.16.1`,as:e.as||`a`,dir:e.theme.rtl?`rtl`:void 0,$isLink:!0,type:void 0})).withConfig({displayName:`StyledAnchor`,componentId:`sc-xshgmo-0`})([`direction:`,`;`,`;`],e=>e.theme.rtl&&`rtl`,H),Rp;function zp(){return zp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zp.apply(null,arguments)}var Bp=B(function(e){return g.createElement(`svg`,zp({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Rp||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M10.5 8.5V10c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h1.5M6 6l4-4m-3.5-.5H10c.3 0 .5.2.5.5v3.5`}))}).attrs({"data-garden-id":`buttons.external_icon`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledExternalIcon`,componentId:`sc-16oz07e-0`})([`transform:`,`;margin-bottom:-0.085em;padding-left:0.25em;box-sizing:content-box;width:0.85em;height:0.85em;`,`;`],e=>e.theme.rtl&&`scaleX(-1)`,H),Vp=`buttons.icon_button`,Hp=({theme:e})=>{let t={theme:e,variable:`foreground.subtle`};return z([`color:`,`;&:hover{color:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:`,`;}`],U(t),U({...t,dark:{offset:-100},light:{offset:100}}),U({...t,dark:{offset:-200},light:{offset:200}}))},Up=B(Fp).attrs(e=>{let t=e[`data-garden-id`];return{"data-garden-id":t&&t!==`buttons.button`?t:Vp,"data-garden-version":`9.16.1`}}).withConfig({displayName:`StyledIconButton`,componentId:`sc-1t0ughp-0`})([``,`;& `,`{`,`}`,`;`],e=>{let t=Ap(e);return z([`border:`,`;padding:0;width:`,`;min-width:`,`;`,`;&:disabled{background-color:`,`;}`],e.$isBasic&&`none`,t,t,e.$isBasic&&!(e.$isPrimary||e.$isDanger||e.disabled)&&Hp(e),!e.$isPrimary&&`transparent`)},Op,e=>{let t=e.theme.iconSizes.md;return z([`width:`,`;height:`,`;& > svg{transition:opacity 0.15s ease-in-out;}`],t,t)},H),Wp=(0,g.createContext)(void 0),Gp=()=>(0,g.useContext)(Wp),Kp=({isRotated:e,...t})=>g.createElement(Op,Object.assign({$position:`start`,$isRotated:e},t));Kp.displayName=`Button.StartIcon`;var qp=Kp,Jp=({isRotated:e,...t})=>g.createElement(Op,Object.assign({$position:`end`,$isRotated:e},t));Jp.displayName=`Button.EndIcon`;var Yp=Jp,Xp=(0,g.forwardRef)(({focusInset:e,isBasic:t,isDanger:n,isLink:r,isNeutral:i,isPill:a,isPrimary:o,isStretched:s,size:c=`medium`,type:l=`button`,...u},d)=>{let f=Gp();return g.createElement(Fp,Object.assign({},u,{type:l,$focusInset:e||f,$isBasic:t,$isDanger:n,$isLink:r,$isNeutral:i,$isPill:a,$isPrimary:o,$isStretched:s,$isUnderlined:r,$size:c,ref:d}))});Xp.displayName=`Button`,Xp.propTypes={focusInset:K.default.bool,isBasic:K.default.bool,isDanger:K.default.bool,isLink:K.default.bool,isNeutral:K.default.bool,isPill:K.default.bool,isPrimary:K.default.bool,isStretched:K.default.bool,size:K.default.oneOf(wp)};var Zp=Xp;Zp.EndIcon=Yp,Zp.StartIcon=qp;var Qp=(0,g.forwardRef)(({children:e,externalIconLabel:t,isDanger:n,isExternal:r,isUnderlined:i=!0,...a},o)=>{let s=a;r&&(s={target:`_blank`,rel:`noopener noreferrer`,...s});let c=xc(Qp,r?{externalIconLabel:t}:{noIconLabel:`true`},r?`externalIconLabel`:`noIconLabel`,`(opens in a new tab)`);return g.createElement(Lp,Object.assign({ref:o,$isDanger:n,$isUnderlined:i},s),e,!!r&&g.createElement(Bp,{role:`img`,"aria-label":c,"aria-hidden":void 0}))});Qp.displayName=`Anchor`,Qp.propTypes={isExternal:K.default.bool,isDanger:K.default.bool,isUnderlined:K.default.bool,externalIconLabel:K.default.string};var $p=(0,g.forwardRef)(({children:e,focusInset:t,isBasic:n=!0,isDanger:r,isNeutral:i,isPill:a=!0,isPrimary:o,isRotated:s,size:c=`medium`,type:l=`button`,...u},d)=>{let f=Gp();return g.createElement(Up,Object.assign({},u,{type:l,$isBasic:n,$isDanger:r,$isNeutral:i,$isPill:a,$isPrimary:o,$size:c,$focusInset:t||f,ref:d}),g.createElement(Op,{$isRotated:s},e))});$p.displayName=`IconButton`,$p.propTypes={focusInset:K.default.bool,isBasic:K.default.bool,isDanger:K.default.bool,isNeutral:K.default.bool,isPill:K.default.bool,isPrimary:K.default.bool,isRotated:K.default.bool,size:K.default.oneOf(wp)};var em=B.div`
  margin-bottom: 8px;
`,tm=B(Qp).attrs({isUnderlined:!1,"data-inspect-token-color":`fg/primary`})``,nm=B.span.attrs({"data-inspect-token-color":`fg/subtle`})`
  color: ${e=>U({theme:e.theme,variable:`foreground.subtle`})};
`,rm=B.span.attrs({"data-inspect-token-color":`fg/subtle`})`
  color: ${e=>U({theme:e.theme,variable:`foreground.subtle`})};
`;function im({items:e}){let t=Ve();return(0,V.jsx)(em,{children:(0,V.jsx)(Cp,{"aria-label":`Breadcrumbs`,children:e.map((n,r)=>r===e.length-1?(0,V.jsx)(rm,{children:n.label},`${n.label}-${r}`):n.path?(0,V.jsx)(tm,{href:n.path,onClick:e=>{e.preventDefault(),t(n.path)},children:n.label},`${n.label}-${r}`):(0,V.jsx)(nm,{children:n.label},`${n.label}-${r}`))})})}var am=B.div`
  padding: 24px 32px;
  overflow-y: auto;
  flex: 1;
`,om=B.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`,sm=B.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3130;
  margin: 0 0 4px;
`,cm=B.p`
  font-size: 14px;
  color: #49545c;
  margin: 0;
`,lm=B.a`
  color: #1f73b7;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`,um=B.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,dm=B.button`
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
`,fm=B.button`
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
`,pm=B.div`
  font-size: 16px;
  font-weight: 600;
  color: #2f3130;
  margin-bottom: 8px;
`,mm=B.div`
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
`,hm=B.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px 10px 36px;
  border: 1px solid #87929d;
  border-radius: 4px;
  font-size: 14px;
  color: #2f3130;

  &:focus {
    outline: none;
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.25);
  }
`,gm=B.button`
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
`,_m=B.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 8px;
`,vm=B.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
`,ym=B.a`
  font-size: 14px;
  color: #1f73b7;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #144a75;
  }
`,bm=B.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`,xm=B.th`
  text-align: left;
  padding: 12px 16px 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
  border-bottom: 1px solid #d8dcde;
  white-space: nowrap;

  &:first-child {
    padding-left: 0;
    width: 32px;
  }
`,Sm=B.span`
  color: #87929d;
  margin-left: 4px;
  font-size: 11px;
`,Cm=B.td`
  padding: 12px 16px 12px 0;
  font-size: 14px;
  color: #2f3130;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`,wm=B.tr`
  &:last-child td {
    border-bottom: none;
  }
`,Tm=B.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
`,Em=B.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Dm=[[`#d4e7f5`,`#17494d`],[`#f5d4d8`,`#8c232c`],[`#e2d9f3`,`#55237a`],[`#d3f0e2`,`#186146`],[`#f8e5c8`,`#8a5a1e`]],Om=B.span`
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
`,km=B.span`
  display: block;
  color: #1f73b7;
  font-weight: 500;
`,Am=B.span`
  display: block;
  color: #68737d;
  font-size: 13px;
  margin-top: 2px;
`,jm=B.span`
  display: block;
  color: #1f73b7;
  font-size: 13px;
  margin-top: 2px;
`,Mm=B.button`
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
`;function Nm(){let e=Ve(),[t,n]=(0,g.useState)(``),r=t.trim().toLowerCase(),i=r?Al.filter(e=>e.name.toLowerCase().includes(r)||e.email.toLowerCase().includes(r)):Al;return(0,V.jsxs)(am,{children:[(0,V.jsx)(im,{items:[{label:`People`},{label:`Team`},{label:`Team members`}]}),(0,V.jsxs)(om,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(sm,{children:`Team members`}),(0,V.jsxs)(cm,{children:[`Find and manage team members, from agents to admins.`,(0,V.jsx)(`br`,{}),(0,V.jsx)(lm,{href:`#`,children:`Learn about the Team members page ↗`})]})]}),(0,V.jsxs)(um,{children:[(0,V.jsxs)(dm,{children:[`Actions`,(0,V.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,V.jsx)(fm,{children:`Create team member`})]})]}),(0,V.jsx)(pm,{children:`Search team members`}),(0,V.jsxs)(mm,{children:[(0,V.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,V.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,V.jsx)(`path`,{d:`M11 11L14 14`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,V.jsx)(hm,{value:t,onChange:e=>n(e.target.value)})]}),(0,V.jsxs)(gm,{children:[(0,V.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M2 3h10M4 7h6M6 11h2`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),`Filter`]}),(0,V.jsxs)(_m,{children:[(0,V.jsxs)(vm,{children:[i.length,` team members`]}),(0,V.jsx)(ym,{children:`Bulk manage ↗`})]}),(0,V.jsxs)(bm,{children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(xm,{children:(0,V.jsx)(Tm,{})}),(0,V.jsx)(xm,{children:`Team member`}),(0,V.jsx)(xm,{children:`Brand`}),(0,V.jsx)(xm,{children:`Group`}),(0,V.jsx)(xm,{children:`Product access`}),(0,V.jsx)(xm,{children:`Support role`}),(0,V.jsxs)(xm,{children:[`Last sign-in`,(0,V.jsx)(Sm,{children:`⇅`})]}),(0,V.jsx)(xm,{})]})}),(0,V.jsx)(`tbody`,{children:i.map(t=>{let n=t.name.charAt(0).toUpperCase(),[r,i]=Dm[n.charCodeAt(0)%Dm.length];return(0,V.jsxs)(wm,{children:[(0,V.jsx)(Cm,{children:(0,V.jsx)(Tm,{onClick:e=>e.stopPropagation()})}),(0,V.jsx)(Cm,{onClick:()=>e(`/team-members/${t.id}`),style:{cursor:`pointer`},children:(0,V.jsxs)(Em,{children:[(0,V.jsx)(Om,{$bg:r,$fg:i,children:n}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(km,{children:t.name}),(0,V.jsx)(Am,{children:t.email})]})]})}),(0,V.jsxs)(Cm,{children:[t.brand,t.extraBrands>0&&(0,V.jsxs)(jm,{children:[`+`,t.extraBrands,` more`]})]}),(0,V.jsx)(Cm,{children:t.group}),(0,V.jsx)(Cm,{children:t.productAccess}),(0,V.jsx)(Cm,{children:t.role}),(0,V.jsx)(Cm,{children:t.lastSignIn}),(0,V.jsx)(Cm,{children:(0,V.jsx)(Mm,{"aria-label":`More actions for ${t.name}`,children:`⋮`})})]},t.id)})})]})]})}var Pm=[`success`,`warning`,`error`,`info`],Fm,Im;function Lm(){return Lm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lm.apply(null,arguments)}var Rm=function(e){return g.createElement(`svg`,Lm({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Fm||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 4.5V9`})),Im||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},zm;function Bm(){return Bm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bm.apply(null,arguments)}var Vm=function(e){return g.createElement(`svg`,Bm({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),zm||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 9l2.5 2.5 5-5`}),g.createElement(`circle`,{cx:7.5,cy:8.5,r:7})))},Hm,Um;function Wm(){return Wm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wm.apply(null,arguments)}var Gm=function(e){return g.createElement(`svg`,Wm({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Hm||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5`}),Um||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},Km,qm;function Jm(){return Jm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jm.apply(null,arguments)}var Ym=function(e){return g.createElement(`svg`,Jm({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Km||=g.createElement(`g`,{stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7,fill:`none`}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 12.5V8`})),qm||=g.createElement(`circle`,{cx:7.5,cy:5,r:1,fill:`currentColor`}))},Xm={success:Vm,error:Rm,warning:Gm,info:Ym},Zm={success:`success`,error:`error`,warning:`warning`,info:`info`},Qm=B($p).attrs({"data-garden-id":`notifications.close`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledClose`,componentId:`sc-1mr9nx1-0`})([`position:absolute;top:`,`px;right:`,`;left:`,`;`,` `,`;`],e=>e.theme.space.base,e=>!e.theme.rtl&&`${e.theme.space.base}px`,e=>e.theme.rtl&&`${e.theme.space.base}px`,({theme:e,$type:t})=>{let n;switch(t){case Zm.warning:n=`foreground.warning`;break;case Zm.error:n=`foreground.danger`;break;case Zm.success:n=`foreground.success`;break;default:n=`foreground.subtle`;break}return z([`color:`,`;&:hover{background-color:transparent;color:`,`;}&:active{background-color:transparent;color:`,`;}`],U({variable:n,theme:e}),U({variable:n,light:{offset:100},dark:{offset:-100},theme:e}),U({variable:n,light:{offset:200},dark:{offset:-200},theme:e}))},H),$m=B.p.attrs({"data-garden-id":`notifications.paragraph`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledParagraph`,componentId:`sc-12tmd6p-0`})([`margin:`,`px 0 0;`,`;`],e=>e.theme.space.base*2,H),eh=B.div.attrs({"data-garden-id":`notifications.title`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledTitle`,componentId:`sc-xx4jsv-0`})([`margin:0;color:`,`;font-weight:`,`;`,`;`],e=>U({variable:`foreground.default`,theme:e.theme}),e=>e.$isRegular?e.theme.fontWeights.regular:e.theme.fontWeights.semibold,H),th=B.div.attrs({"data-garden-id":`notifications.base_container`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledBase`,componentId:`sc-14syaqw-0`})([`position:relative;border:`,`;border-radius:`,`;padding:`,`;line-height:`,`;font-size:`,`;direction:`,`;`,`;`,``],e=>e.theme.borders.sm,e=>e.theme.borderRadii.md,e=>{let{space:t}=e.theme;return`${`${t.base*5}px`} ${`${t.base*10}px`}`},e=>pc(e.theme.space.base*5,e.theme.fontSizes.md),e=>e.theme.fontSizes.md,e=>e.theme.rtl&&`rtl`,({theme:e,$type:t,$isFloating:n})=>{let{space:r,shadows:i}=e,a,o,s;if(!n&&t&&Zm[t])switch(t){case Zm.success:a=`background.success`,o=`border.success`,s=`foreground.success`;break;case Zm.error:a=`background.danger`,o=`border.danger`,s=`foreground.danger`;break;case Zm.warning:a=`background.warning`,o=`border.warning`,s=`foreground.warning`;break;case Zm.info:a=`background.subtle`,o=`border.default`,s=`foreground.subtle`;break}else a=`background.raised`,o=`border.default`,s=`foreground.default`;let c=U({variable:a,theme:e}),l=U({variable:o,theme:e}),u=U({variable:s,theme:e}),d=`${r.base*5}px`,f=`${r.base*7}px`;return z([`border-color:`,`;box-shadow:`,`;background-color:`,`;color:`,`;`],l,n?i.lg(d,f,U({variable:`shadow.large`,theme:e})):void 0,c,u)},H),nh=B(th).attrs({"data-garden-id":`notifications.alert`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledAlert`,componentId:`sc-fyn8jp-0`})([``,` `,`;`],e=>{let{$type:t,theme:n}=e,r;switch(t){case Zm.success:r=`foreground.successEmphasis`;break;case Zm.error:r=`foreground.dangerEmphasis`;break;case Zm.warning:r=`foreground.warningEmphasis`;break;case Zm.info:r=`foreground.default`;break}return z([``,`{color:`,`;}`],eh,r?U({variable:r,theme:n}):void 0)},H),rh=B(th).attrs({"data-garden-id":`notifications.notification`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledNotification`,componentId:`sc-uf6jh-0`})([``,` `,`;`],e=>{let{$type:t,theme:n}=e,r;switch(t){case Zm.success:r=`foreground.success`;break;case Zm.error:r=`foreground.danger`;break;case Zm.warning:r=`foreground.warning`;break;case Zm.info:r=`foreground.default`;break}return z([``,`{color:`,`;}`],eh,r?U({variable:r,theme:n}):`inherit`)},H);rh.propTypes={$type:K.default.oneOf(Pm)};var ih=B(Oc).attrs({"data-garden-id":`notifications.icon`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledIcon`,componentId:`sc-msklws-0`})([`position:absolute;`,` `,` `,``],({theme:{rtl:e,space:t}})=>z([`right:`,`;left:`,`;margin-top:`,`px;`],e&&`${t.base*4}px`,!e&&`${t.base*4}px`,t.base/2),({theme:e,$type:t})=>{let n;switch(t){case Zm.success:n=`foreground.success`;break;case Zm.error:n=`foreground.danger`;break;case Zm.warning:n=`foreground.warning`;break;case Zm.info:n=`foreground.subtle`;break;default:n=`foreground.default`;break}return z([`color:`,`;`],U({variable:n,theme:e}))},H),ah=(0,g.createContext)(void 0),oh=()=>(0,g.useContext)(ah),sh=g.forwardRef(({isRegular:e,...t},n)=>g.createElement(eh,Object.assign({ref:n,$isRegular:e},t)));sh.displayName=`Alert.Title`;var ch=g.forwardRef((e,t)=>g.createElement($m,Object.assign({ref:t},e)));ch.displayName=`Alert.Paragraph`;var lh;function uh(){return uh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uh.apply(null,arguments)}var dh=function(e){return g.createElement(`svg`,uh({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),lh||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,d:`M3 13L13 3m0 10L3 3`}))},fh=g.forwardRef((e,t)=>{let n=xc(fh,e,`aria-label`,`Close`),r=oh();return g.createElement(Qm,Object.assign({ref:t,$type:r,"aria-label":n},e,{focusInset:!0,size:`small`}),g.createElement(dh,null))});fh.displayName=`Alert.Close`;var ph=g.forwardRef(({role:e,type:t,...n},r)=>{let i=Xm[t];return g.createElement(ah.Provider,{value:t},g.createElement(nh,Object.assign({ref:r,$type:t,role:e===void 0?`alert`:e},n),g.createElement(ih,{$type:t},g.createElement(i,null)),n.children))});ph.displayName=`Alert`,ph.propTypes={type:K.default.oneOf(Pm).isRequired};var mh=ph;mh.Close=fh,mh.Paragraph=ch,mh.Title=sh;var hh=g.forwardRef(({isRegular:e,...t},n)=>g.createElement(eh,Object.assign({ref:n,$isRegular:e},t)));hh.displayName=`Notification.Title`;var gh=g.forwardRef((e,t)=>g.createElement($m,Object.assign({ref:t},e)));gh.displayName=`Notification.Paragraph`;var _h=g.forwardRef((e,t)=>{let n=xc(_h,e,`aria-label`,`Close`),r=oh();return g.createElement(Qm,Object.assign({ref:t,$type:r,"aria-label":n},e,{focusInset:!0,size:`small`}),g.createElement(dh,null))});_h.displayName=`Notification.Close`;var vh=(0,g.forwardRef)(({children:e,type:t,...n},r)=>{let i=t?Xm[t]:Ym;return g.createElement(rh,Object.assign({ref:r,$type:t,$isFloating:!0,role:`alert`},n),!!t&&g.createElement(ih,{$type:t},g.createElement(i,null)),e)});vh.displayName=`Notification`,vh.propTypes={type:K.default.oneOf(Pm)};var yh=vh;yh.Close=_h,yh.Paragraph=gh,yh.Title=hh;var bh=B.div`
  max-width: 640px;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  overflow: hidden;
`,xh=B.table`
  width: 100%;
  border-collapse: collapse;
`,Sh=B.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 400;
  color: #68737d;
  border-bottom: 1px solid #d8dcde;
`,Ch=B.td`
  padding: 20px 16px;
  font-size: 14px;
  color: #2f3130;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`,wh=B.tr`
  &:last-child td {
    border-bottom: none;
  }
`,Th=B.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Eh=B.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #68737d;
`,Dh=B.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  color: #2f3130;
  background: #fff;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2368737D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
  min-width: 180px;
`,Oh=B.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #2f3130;
`,kh=B.span`
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
`,Ah=B.span`
  color: #87929d;
  font-size: 14px;
`,jh=B.div`
  font-size: 14px;
  color: #49545c;
`,Mh=B.span`
  color: #1f73b7;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`;function Nh({memberId:e}){let{isMemberAiAgentsMigrated:t,aiAgentsRoleId:n,roles:r,getMemberAssignedRole:i,getAiAgentsState:a}=Bl(),o=Ve(),s=e?t(e):!1,c=r.find(e=>e.id===n)?.name||`Roles`,l=s?Cl[a(n).accessLevel]:null,u=e?i(e):null,d=()=>{o(`/roles/${n}`,{state:{scrollToAiAgents:!0}})},f=e=>e.access===`yes`?(0,V.jsx)(`span`,{children:`Yes`}):e.access===`checkbox`?(0,V.jsx)(Oh,{defaultChecked:e.checked}):e.access===`disabled`?null:e.access===`ai_agents`?s?l?(0,V.jsx)(`span`,{children:l}):null:(0,V.jsx)(Oh,{defaultChecked:e.checked}):null,p=e=>e.access===`disabled`?(0,V.jsx)(Ah,{children:e.message}):e.access===`ai_agents`&&s?(0,V.jsxs)(jh,{children:[`Settings for `,e.product,` can be found in roles.`,(0,V.jsx)(`br`,{}),(0,V.jsxs)(Mh,{onClick:d,children:[`View `,c,` role`]})]}):e.icon===`support`&&u?(0,V.jsx)(`div`,{style:{display:`flex`,alignItems:`center`},children:(0,V.jsx)(Dh,{value:u.name,onChange:()=>{},children:(0,V.jsx)(`option`,{value:u.name,children:u.name})})}):e.role?(0,V.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,V.jsxs)(Dh,{defaultValue:e.role,children:[(0,V.jsx)(`option`,{value:`Admin`,children:`Admin`}),(0,V.jsx)(`option`,{value:`Agent`,children:`Agent`}),(0,V.jsx)(`option`,{value:`Client admin`,children:`Client admin`})]}),e.hasInfo&&(0,V.jsx)(kh,{children:`i`})]}):null,m={support:(0,V.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.4c-1.77 0-3.2-1.43-3.2-3.2h1.6c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6h1.6c0 1.77-1.43 3.2-3.2 3.2zM10 4c2.65 0 4.8 2.15 4.8 4.8v1.6H5.2V8.8C5.2 6.15 7.35 4 10 4z`,fill:`currentColor`})}),knowledge:(0,V.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M4 3h12v14H4V3zm2 2v10h8V5H6zm1 2h6v1H7V7zm0 3h6v1H7v-1zm0 3h4v1H7v-1z`,fill:`currentColor`})}),analytics:(0,V.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M4 15h3V8H4v7zm5 0h3V5H9v10zm5 0h3v-4h-3v4z`,fill:`currentColor`})}),voice:(0,V.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M5.2 3h2.4l2 4-1.5 1.1c.7 1.4 1.8 2.5 3.2 3.2L12.4 9.8l4 2v2.4c0 .9-.7 1.6-1.6 1.6C8.8 15.8 4.2 11.2 4.2 4.6c0-.9.7-1.6 1.6-1.6z`,fill:`currentColor`})}),chat:(0,V.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M4 4h12v9H7l-3 3V4zm2 3h8v1H6V7zm0 3h6v1H6v-1z`,fill:`currentColor`})}),ai_agents:(0,V.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M10 2L4 5v4c0 4.1 2.6 7.8 6 9 3.4-1.2 6-4.9 6-9V5l-6-3zm-1 12l-3-3 1.4-1.4L9 11.2l3.6-3.6L14 9l-5 5z`,fill:`currentColor`})}),qa:(0,V.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,V.jsx)(`path`,{d:`M4 4h12v12H4V4zm2 2v8h8V6H6zm1 1h2v2H7V7zm3 0h2v2h-2V7zm-3 3h2v2H7v-2zm3 0h2v2h-2v-2z`,fill:`currentColor`})})};return(0,V.jsx)(bh,{children:(0,V.jsxs)(xh,{children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(Sh,{children:`Product`}),(0,V.jsx)(Sh,{children:`Role`}),(0,V.jsx)(Sh,{children:`Access`})]})}),(0,V.jsx)(`tbody`,{children:Ll.map((e,t)=>(0,V.jsxs)(wh,{children:[(0,V.jsx)(Ch,{children:(0,V.jsxs)(Th,{children:[(0,V.jsx)(Eh,{children:m[e.icon]}),e.product]})}),(0,V.jsx)(Ch,{children:p(e)}),(0,V.jsx)(Ch,{children:f(e)})]},t))})]})})}var Ph=B.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`,Fh=B.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`,Ih=B.div`
  padding: 24px 32px;
  flex: 1;
`,Lh=B.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px;
  border-top: 1px solid #e9ebed;
  background: #fff;
`,Rh=B.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
    min-width: 410px;
  }
`,zh=B.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`,Bh=B.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3130;
  margin: 0;
`,Vh=B.a`
  font-size: 13px;
  color: #1f73b7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`,Hh=B.div`
  margin-bottom: 24px;
`,Uh=B.div`
  display: flex;
  border-bottom: 2px solid #e9ebed;
  margin-bottom: 0;
`,Wh=B.button`
  background: none;
  border: none;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: ${e=>e.$active?`600`:`400`};
  color: ${e=>e.$active?`#2f3130`:`#68737d`};
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
    color: #2f3130;
  }
`,Gh=B.div`
  padding-top: 24px;
`,Kh=B.div`
  padding: 32px;
  background: #f8f9f9;
  border: 1px solid #e9ebed;
  border-radius: 4px;
  color: #68737d;
  text-align: center;
  font-size: 14px;
`;function qh(){let{id:e}=Ue(),t=Ve(),n=ze(),{roles:r}=Bl(),[i,a]=(0,g.useState)(`roles`),[o,s]=(0,g.useState)(!1),c=Al.find(t=>t.id===e)||Al[0],l=n.state?.fromRoleId,u=!!n.state?.fromAccessPreview,d=l?r.find(e=>e.id===l):null,f=u&&d?[{label:`People`},{label:`Team`},{label:`Roles`,path:`/roles`},{label:d.name,path:`/roles/${l}`},{label:`Preview team members access change`,path:`/roles/${l}/access-preview`},{label:c.name}]:d?[{label:`People`},{label:`Team`},{label:`Roles`,path:`/roles`},{label:d.name,path:`/roles/${l}`},{label:c.name}]:[{label:`People`},{label:`Team`},{label:`Team members`,path:`/team-members`},{label:c.name}];return(0,V.jsxs)(Ph,{children:[o&&(0,V.jsx)(Rh,{children:(0,V.jsxs)(yh,{type:`success`,children:[(0,V.jsx)(yh.Title,{children:`Team member saved`}),(0,V.jsx)(yh.Close,{"aria-label":`Close`,onClick:()=>s(!1)})]})}),(0,V.jsx)(Fh,{children:(0,V.jsxs)(Ih,{children:[(0,V.jsx)(im,{items:f}),(0,V.jsxs)(zh,{children:[(0,V.jsx)(Bh,{children:c.name}),(0,V.jsx)(Vh,{href:`#`,children:`View in Support ↗`})]}),(0,V.jsx)(Hh,{children:(0,V.jsxs)(Uh,{children:[(0,V.jsx)(Wh,{$active:i===`account`,onClick:()=>a(`account`),children:`Account`}),(0,V.jsx)(Wh,{$active:i===`roles`,onClick:()=>a(`roles`),children:`Roles and access`})]})}),i===`account`&&(0,V.jsx)(Gh,{children:(0,V.jsx)(Kh,{children:`Account settings content would appear here.`})}),i===`roles`&&(0,V.jsx)(Gh,{children:(0,V.jsx)(Nh,{memberId:c.id})})]})}),(0,V.jsxs)(Lh,{children:[(0,V.jsx)(Zp,{onClick:()=>{t(u&&l?`/roles/${l}/access-preview`:l?`/roles/${l}`:`/team-members`)},children:`Cancel`}),(0,V.jsx)(Zp,{isPrimary:!0,onClick:()=>{s(!0),setTimeout(()=>s(!1),4e3)},children:`Save`})]})]})}function Jh(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}var Yh=Jh()?g.useLayoutEffect:g.useEffect,Xh=!1,Zh=0;function Qh(){return++Zh}var $h=g.useId;function eg(e){if($h!==void 0){let t=$h();return e??t}let t=e??(Xh?Qh():null),[n,r]=g.useState(t);return Yh(()=>{n===null&&r(Qh())},[]),g.useEffect(()=>{Xh===!1&&(Xh=!0)},[]),e??n??void 0}function q(...e){return(t,...n)=>e.some(e=>(e&&e(t,...n),t&&t.defaultPrevented))}function tg(...e){for(let t of e)if(t!==void 0)return t}var J={ALT:`Alt`,ASTERISK:`*`,BACKSPACE:`Backspace`,COMMA:`,`,DELETE:`Delete`,DOWN:`ArrowDown`,END:`End`,ENTER:`Enter`,ESCAPE:`Escape`,HOME:`Home`,LEFT:`ArrowLeft`,NUMPAD_ADD:`Add`,NUMPAD_DECIMAL:`Decimal`,NUMPAD_DIVIDE:`Divide`,NUMPAD_ENTER:`Enter`,NUMPAD_MULTIPLY:`Multiply`,NUMPAD_SUBTRACT:`Subtract`,PAGE_DOWN:`PageDown`,PAGE_UP:`PageUp`,PERIOD:`.`,RIGHT:`ArrowRight`,SHIFT:`Shift`,SPACE:` `,TAB:`Tab`,UNIDENTIFIED:`Unidentified`,UP:`ArrowUp`},ng=0,rg=e=>{let t=eg(e);return t=t==null?`id:${ng++}`:`${t}`,t},ig=({idPrefix:e,hasHint:t,hasMessage:n})=>{let r=rg(e),i=`${r}--input`,a=`${r}--label`,o=`${r}--hint`,s=`${r}--message`,c=(0,g.useCallback)(({id:e=a,htmlFor:t=i,...n}={})=>({"data-garden-container-id":`containers.field.label`,"data-garden-container-version":`3.0.22`,id:e,htmlFor:t,...n}),[a,i]),l=(0,g.useCallback)(({id:e=o,...t}={})=>({"data-garden-container-id":`containers.field.hint`,"data-garden-container-version":`3.0.22`,id:e,...t}),[o]),u=(0,g.useCallback)(({id:e=i,"aria-describedby":r,...c}={})=>({"data-garden-container-id":`containers.field.input`,"data-garden-container-version":`3.0.22`,id:e,"aria-labelledby":a,"aria-describedby":(()=>{if(r)return r;let e=[];return t&&e.push(o),n&&e.push(s),e.length>0?e.join(` `):void 0})(),...c}),[i,a,o,s,t,n]),d=(0,g.useCallback)(({id:e=s,role:t=`alert`,...n}={})=>({"data-garden-container-id":`containers.field.message`,"data-garden-container-version":`3.0.22`,role:t===null?void 0:t,id:e,...n}),[s]);return(0,g.useMemo)(()=>({getLabelProps:c,getHintProps:l,getInputProps:u,getMessageProps:d}),[c,l,u,d])},ag=({children:e,render:t=e,...n})=>g.createElement(g.Fragment,null,t(ig(n)));ag.propTypes={children:K.default.func,render:K.default.func,idPrefix:K.default.string,hasHint:K.default.bool,hasMessage:K.default.bool};var og=(0,g.createContext)(void 0),sg=()=>(0,g.useContext)(og),cg=B.div.attrs({"data-garden-id":`forms.field`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledField`,componentId:`sc-12gzfsu-0`})([`position:relative;direction:`,`;margin:0;border:0;padding:0;font-size:0;`,`;`],e=>e.theme.rtl?`rtl`:`ltr`,H),lg=B(cg).attrs({as:`fieldset`,"data-garden-id":`forms.fieldset`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledFieldset`,componentId:`sc-1vr4mxv-0`})([``,`{margin-top:`,`px;}`,`;`],cg,e=>e.theme.space.base*(e.$isCompact?1:2),H),ug=`forms.input_label`,dg=B.label.attrs(e=>({"data-garden-id":e[`data-garden-id`]||ug,"data-garden-version":e[`data-garden-version`]||`9.16.1`})).withConfig({displayName:`StyledLabel`,componentId:`sc-2utmsz-0`})([`direction:`,`;vertical-align:middle;line-height:`,`;color:`,`;font-size:`,`;font-weight:`,`;&[hidden]{display:`,`;vertical-align:`,`;text-indent:`,`;font-size:`,`;`,`;}`,`;`],e=>e.theme.rtl&&`rtl`,e=>pc(e.theme.space.base*5,e.theme.fontSizes.md),e=>U({theme:e.theme,variable:`foreground.default`}),e=>e.theme.fontSizes.md,e=>e.$isRegular?e.theme.fontWeights.regular:e.theme.fontWeights.semibold,e=>e.$isRadio?`inline-block`:`inline`,e=>e.$isRadio&&`top`,e=>e.$isRadio&&`-100%`,e=>e.$isRadio&&`0`,e=>!e.$isRadio&&Po(),H),fg=B(dg).attrs({as:`legend`,"data-garden-id":`forms.fieldset_legend`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledLegend`,componentId:`sc-6s0zwq-0`})([`padding:0;`,`;`],H),pg=`forms.input_hint`,mg=B.div.attrs(e=>({"data-garden-id":e[`data-garden-id`]||pg,"data-garden-version":e[`data-garden-version`]||`9.16.1`})).withConfig({displayName:`StyledHint`,componentId:`sc-17c2wu8-0`})([`direction:`,`;display:block;vertical-align:middle;line-height:`,`;color:`,`;font-size:`,`;`,`;`],e=>e.theme.rtl&&`rtl`,e=>pc(e.theme.space.base*5,e.theme.fontSizes.md),e=>U({theme:e.theme,variable:`foreground.subtle`}),e=>e.theme.fontSizes.md,H),hg=B(Oc).attrs({"data-garden-id":`forms.input_message_icon`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledMessageIcon`,componentId:`sc-1ph2gba-0`})([`width:`,`;height:`,`;`,`;`],e=>e.theme.iconSizes.md,e=>e.theme.iconSizes.md,H),gg=`forms.input_message`,_g=B.div.attrs(e=>({"data-garden-id":e[`data-garden-id`]||gg,"data-garden-version":e[`data-garden-version`]||`9.16.1`})).withConfig({displayName:`StyledMessage`,componentId:`sc-30hgg7-0`})([`direction:`,`;display:inline-block;position:relative;vertical-align:middle;`,`;`,`;& `,`{position:absolute;top:-1px;`,`:0;}`,`:not([hidden]) + &{display:block;}`,`;`],e=>e.theme.rtl&&`rtl`,({theme:e,$validation:t})=>{let n=e.fontSizes.sm,r=pc(e.iconSizes.md,e.fontSizes.sm),i=`${e.space.base}px`,a=t?Do(`${e.space.base*2} + ${e.iconSizes.md}`):void 0;return z([`padding-`,`:`,`;line-height:`,`;font-size:`,`;`,`:not([hidden]) + &{margin-top:`,`;}`],e.rtl?`right`:`left`,a,r,n,dg,i)},({theme:e,$validation:t})=>{let n;return n=t===`error`?`foreground.danger`:t===`success`?`foreground.success`:t===`warning`?`foreground.warning`:`foreground.subtle`,z([`color:`,`;`],U({theme:e,variable:n}))},hg,e=>e.theme.rtl?`right`:`left`,dg,H),vg=`forms.input`,yg=e=>e===`warning`||e===`error`,bg=B.input.attrs(e=>({"data-garden-id":e[`data-garden-id`]||vg,"data-garden-version":`9.16.1`,"aria-invalid":yg(e.$validation)})).withConfig({displayName:`StyledTextInput`,componentId:`sc-1r6733h-0`})([`appearance:none;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;direction:`,`;border:`,`;border-radius:`,`;width:100%;box-sizing:border-box;vertical-align:middle;font-family:inherit;&::-ms-browse{border-radius:`,`;}&::-ms-clear,&::-ms-reveal{display:none;}&::-moz-color-swatch{border:none;border-radius:`,`;}&::-webkit-color-swatch{border:none;border-radius:`,`;}&::-webkit-color-swatch-wrapper{padding:0;}&::-webkit-clear-button,&::-webkit-inner-spin-button,&::-webkit-search-cancel-button,&::-webkit-search-results-button{display:none;}&::-webkit-datetime-edit{direction:`,`;line-height:1;}&::-webkit-calendar-picker-indicator{border-radius:100%;}&:invalid{box-shadow:none;}&[type='file']::-ms-value{display:none;}@media screen and (min--moz-device-pixel-ratio:0){&[type='number']{appearance:textfield;}}`,`;`,`;&:disabled{cursor:default;}`,`;`],e=>e.theme.rtl&&`rtl`,e=>e.$isBare?`none`:e.theme.borders.sm,e=>e.$isBare?`0`:e.theme.borderRadii.md,e=>e.theme.borderRadii.sm,e=>e.theme.borderRadii.sm,e=>e.theme.borderRadii.sm,e=>e.theme.rtl&&`rtl`,({theme:e,$isBare:t,$isCompact:n})=>{let r=e.fontSizes.md,i=`${e.space.base*3}px`,a,o,s,c;n?(a=`${e.space.base*8}px`,o=`${e.space.base*1.5}px`,s=Do(`${e.fontSizes.sm} - 1`),c=`${e.space.base*6}px`):(a=`${e.space.base*10}px`,o=`${e.space.base*2.5}px`,s=e.fontSizes.sm,c=`${e.space.base*7}px`);let l=Do(`${a} - (${o} * 2) - (${e.borderWidths.sm} * 2)`),u=t?`0`:`${jo(o,r)} ${jo(i,r)}`,d=Do(`(${l} - ${c}) / 2`),f=Do(`${o} + ${d} - ${i}`),p=`${e.space.base*5}px`,m=e.iconSizes.md;return z([`padding:`,`;min-height:`,`;line-height:`,`;font-size:`,`;&::-ms-browse{font-size:`,`;}&[type='date'],&[type='datetime-local'],&[type='file'],&[type='month'],&[type='time'],&[type='week']{max-height:`,`;}&[type='file']{line-height:1;}@supports (-ms-ime-align:auto){&[type='color']{padding:`,`;}}&::-moz-color-swatch{margin-top:`,`;margin-left:`,`;width:calc(100% + `,`);height:`,`;}&::-webkit-calendar-picker-indicator{background-position:center;background-size:`,`;padding:0;width:`,`;height:`,`;}&::-webkit-color-swatch{margin:`,` `,`;}`,`:not([hidden]) + &&,`,` + &&,`,` + &&,&& + `,`,&& ~ `,`{margin-top:`,`px;}`],u,t?`1em`:a,pc(l,r),r,s,a,n?`0 2px`:`1px 3px`,d,f,Do(`${f} * -2`),c,m,p,p,d,f,dg,mg,_g,mg,_g,e.space.base*(n?1:2))},({theme:e,$isBare:t,$isHovered:n,$focusInset:r,$validation:i})=>{let a=U({theme:e,variable:`foreground.default`}),o=t?`transparent`:U({theme:e,variable:`background.default`}),s,c,l,u;i?(i===`success`?l=`border.successEmphasis`:i===`warning`?l=`border.warningEmphasis`:i===`error`&&(l=`border.dangerEmphasis`),s=U({theme:e,variable:l}),c=s,u=s):(s=U({theme:e,variable:`border.default`,dark:{offset:-100},light:{offset:100}}),l=`border.primaryEmphasis`,c=U({theme:e,variable:l}),u=c);let d=t?void 0:U({theme:e,variable:`background.disabled`}),f=U({theme:e,variable:`border.disabled`}),p=U({theme:e,variable:`foreground.disabled`}),m=p,h=d,g=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" aria-hidden="true" color="${U({theme:e,variable:`foreground.subtle`})}">
      <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"/>
    </svg>`,_=`url("data:image/svg+xml,${encodeURIComponent(g)}")`;return z([`border-color:`,`;background-color:`,`;color:`,`;&::placeholder{opacity:1;color:`,`;}&::-webkit-datetime-edit{color:`,`;}&::-webkit-calendar-picker-indicator{background-image:`,`;}&[readonly],&[aria-readonly='true']{background-color:`,`;}&:hover{border-color:`,`;}`,` &::-webkit-calendar-picker-indicator:focus-visible{`,`}&:disabled,&[aria-disabled='true']{border-color:`,`;background-color:`,`;color:`,`;}`],n?c:s,o,a,m,m,_,h,c,Dc({theme:e,inset:r,color:{variable:l},styles:{borderColor:u},condition:!t}),Dc({theme:e}),f,d,p)},H),xg=`forms.textarea`,Sg=`
  visibility: hidden;
  position: absolute;
  overflow: hidden;
  height: 0;
  top: 0;
  left: 0;
  transform: translateZ(0);
`,Cg=B(bg).attrs({as:`textarea`,"data-garden-id":xg,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledTextarea`,componentId:`sc-wxschl-0`})([`resize:`,`;overflow:auto;`,`;`,`;`],e=>e.$isResizable?`vertical`:`none`,e=>e.$isHidden&&Sg,H),wg=B(Oc).attrs({"data-garden-id":`forms.media_figure`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledTextMediaFigure`,componentId:`sc-1qepknj-0`})([`transform:`,`;transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;`,`;`,` `,`;`],e=>e.$isRotated&&`rotate(${e.theme.rtl?`-`:`+`}180deg)`,e=>{let t=e.theme.iconSizes.md,n=`1px ${e.theme.space.base*2}px auto 0`,r=`1px 0 auto ${e.theme.space.base*2}px`,i;return i=e.$position===`start`?e.theme.rtl?r:n:e.theme.rtl?n:r,z([`margin:`,`;width:`,`;height:`,`;`],i,t,t)},({theme:e,$isDisabled:t,$isHovered:n,$isFocused:r})=>{let i;if(t)i=U({theme:e,variable:`foreground.disabled`});else{let t={theme:e,variable:`foreground.subtle`};i=U(n||r?{...t,dark:{offset:-100},light:{offset:100}}:t)}return z([`color:`,`;`],i)},H),Tg=`forms.faux_input`,Eg=B(bg).attrs(e=>({as:`div`,"aria-readonly":e.$isReadOnly,"aria-disabled":e.$isDisabled,"data-garden-id":Tg,"data-garden-version":`9.16.1`})).withConfig({displayName:`StyledTextFauxInput`,componentId:`sc-yqw7j9-0`})([`display:`,`;align-items:`,`;cursor:`,`;overflow:hidden;`,` & > `,`{vertical-align:`,`;`,`{box-shadow:unset;}}& > `,`{flex-shrink:`,`;}`,`;`],e=>e.$mediaLayout?`inline-flex`:`inline-block`,e=>e.$mediaLayout&&`baseline`,e=>e.$mediaLayout&&!e.$isDisabled?`text`:`default`,({theme:e,$validation:t,$focusInset:n,$isBare:r,$isFocused:i})=>{let a,o;return t?(t===`success`?a=`border.successEmphasis`:t===`warning`?a=`border.warningEmphasis`:t===`error`&&(a=`border.dangerEmphasis`),o=U({theme:e,variable:a})):(a=`border.primaryEmphasis`,o=U({theme:e,variable:a})),z([``,``],Dc({theme:e,inset:n,color:{variable:a},selector:i?`&`:`&:focus-within`,styles:{borderColor:o},condition:!r}))},bg,e=>!e.$mediaLayout&&`baseline`,Ec,wg,e=>e.$mediaLayout&&`0`,H),Dg=B(bg).attrs({"data-garden-id":`forms.media_input`,"data-garden-version":`9.16.1`,$isBare:!0}).withConfig({displayName:`StyledTextMediaInput`,componentId:`sc-12i9xfi-0`})([`flex-grow:1;`,`;`],H),Og=(0,g.createContext)(void 0),kg=()=>(0,g.useContext)(Og),Ag=e=>{let t=kg(),n=(0,g.useRef)({}),{registerValidation:r,isUnified:i}=t||{};(0,g.useLayoutEffect)(()=>{if(!r||!i)return;let t=n.current;return r(t,e),()=>{r(t,void 0)}},[i,r,e])},jg=`forms.radio_label`,Mg=e=>{let t=e.theme.space.base*4,n=t+e.theme.space.base*2,r=e.theme.space.base*5;return z([`padding-`,`:`,`px;&[hidden]{padding-`,`:`,`px;height:`,`px;line-height:`,`px;}`],e.theme.rtl?`right`:`left`,n,e.theme.rtl?`right`:`left`,t,r,r)},Ng=B(dg).attrs({"data-garden-id":jg,"data-garden-version":`9.16.1`,$isRadio:!0}).withConfig({displayName:`StyledRadioLabel`,componentId:`sc-1aq2e5t-0`})([`display:inline-block;position:relative;cursor:pointer;`,`;`,`;`],e=>Mg(e),H),Pg=B(Ng).attrs({"data-garden-id":`forms.checkbox_label`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledCheckLabel`,componentId:`sc-x7nr1-0`})([``,`;`],H),Fg=B(mg).attrs({"data-garden-id":`forms.radio_hint`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledRadioHint`,componentId:`sc-eo8twg-0`})([`padding-`,`:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,e=>Do(`${e.theme.space.base} * 6px`),H),Ig=B(Fg).attrs({"data-garden-id":`forms.checkbox_hint`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledCheckHint`,componentId:`sc-1kl8e8c-0`})([``,`;`],H),Lg=B.input.attrs({"data-garden-id":`forms.radio`,"data-garden-version":`9.16.1`,type:`radio`}).withConfig({displayName:`StyledRadioInput`,componentId:`sc-qsavpv-0`})([`position:absolute;opacity:0;margin:0;& ~ `,`::before{position:absolute;`,`:0;transition:border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;border-radius:50%;background-repeat:no-repeat;background-position:center;content:'';}& ~ `,` > svg{position:absolute;}`,`;&:focus ~ `,`::before{outline:none;}& ~ `,`:active::before{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,color 0.1s ease-in-out;}`,`;&:disabled ~ `,`{cursor:default;}`,`;`],Ng,e=>e.theme.rtl?`right`:`left`,Ng,({theme:e,$isCompact:t})=>{let n=`${e.space.base*5}px`,r=`${e.space.base*4}px`,i=Do(`(${n} - ${r}) / 2`),a=e.iconSizes.sm,o=Do(`(${r} - ${a}) / 2`),s=Do(`${o} + ${i}`),c=`${e.space.base*(t?1:2)}px`;return z([`top:`,`;width:`,`;height:`,`;& ~ `,`::before{top:`,`;border:`,`;background-size:`,`;width:`,`;height:`,`;box-sizing:border-box;}& ~ `,` > svg{top:`,`;`,`:`,`;width:`,`;height:`,`;}&& ~ `,` ~ `,`{margin-top:`,`;}`],i,r,r,Ng,i,e.borders.sm,e.iconSizes.sm,r,r,Ng,s,e.rtl?`right`:`left`,o,a,a,Ng,_g,c)},Ng,Ng,({theme:e})=>{let t=U({theme:e,variable:`border.emphasis`}),n=U({theme:e,variable:`background.default`}),r=U({theme:e,variable:`foreground.onEmphasis`}),i={theme:e,variable:`background.primaryEmphasis`},a={theme:e,variable:`border.primaryEmphasis`},o=U({...i,transparency:e.opacity[100]}),s=U(a),c=s,l=U({...i,transparency:e.opacity[200]}),u=c,d=U(i),f=c,p={dark:{offset:-100},light:{offset:100}},m={dark:{offset:-200},light:{offset:200}},h=U({...i,...p}),g=U({...a,...p}),_=U({...i,...m}),v=U({...a,...m}),y=U({theme:e,variable:`background.disabled`,transparency:e.opacity[300]});return z([`& ~ `,`::before{border-color:`,`;background-color:`,`;}& ~ `,` > svg{color:`,`;}& ~ `,`:hover::before{border-color:`,`;background-color:`,`;}`,` & ~ `,`:active::before{border-color:`,`;background-color:`,`;}&:checked ~ `,`::before{border-color:`,`;background-color:`,`;}&:enabled:checked ~ `,`:hover::before{border-color:`,`;background-color:`,`;}&:enabled:checked ~ `,`:active::before{border-color:`,`;background-color:`,`;}&:disabled ~ `,`::before{border-color:transparent;background-color:`,`;}`],Ng,t,n,Ng,r,Ng,s,o,Dc({theme:e,styles:{borderColor:c},selector:`&:focus-visible ~ ${Ng}::before`}),Ng,u,l,Ng,f,d,Ng,g,h,Ng,v,_,Ng,y)},Ng,H),Rg=B(Lg).attrs({"data-garden-id":`forms.checkbox`,"data-garden-version":`9.16.1`,type:`checkbox`}).withConfig({displayName:`StyledCheckInput`,componentId:`sc-176jxxe-0`})([`& ~ `,`::before{border-radius:`,`;}`,`;`,`;`],Pg,e=>e.theme.borderRadii.md,({theme:e})=>{let t={theme:e,variable:`background.primaryEmphasis`},n={theme:e,variable:`border.primaryEmphasis`},r=U(t),i=U(n),a={dark:{offset:-100},light:{offset:100}},o={dark:{offset:-200},light:{offset:200}},s=U({...t,...a}),c=U({...n,...a}),l=U({...t,...o});return z([`&:indeterminate ~ `,`::before{border-color:`,`;background-color:`,`;}&:enabled:indeterminate ~ `,`:hover::before{border-color:`,`;background-color:`,`;}&:enabled:indeterminate ~ `,`:active::before{border-color:`,`;background-color:`,`;}&:disabled:indeterminate ~ `,`::before{border-color:transparent;background-color:`,`;}`],Pg,i,r,Pg,c,s,Pg,U({...n,...o}),l,Pg,U({theme:e,variable:`background.disabled`,transparency:e.opacity[300]}))},H),zg=B(_g).attrs({"data-garden-id":`forms.radio_message`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledRadioMessage`,componentId:`sc-1pmi0q8-0`})([`padding-`,`:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,e=>Do(`${e.theme.space.base} * 6px`),H),Bg=B(zg).attrs({"data-garden-id":`forms.checkbox_message`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledCheckMessage`,componentId:`sc-s4p6kd-0`})([``,`;`],H),Vg;function Hg(){return Hg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hg.apply(null,arguments)}var Ug=B(function(e){return g.createElement(`svg`,Hg({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Vg||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 6l2 2 4-4`}))}).attrs({"data-garden-id":`forms.check_svg`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledCheckSvg`,componentId:`sc-fvxetk-0`})([`transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;`,`:checked ~ `,` > &{opacity:1;}`,`:indeterminate ~ `,` > &{opacity:0;}`,`;`],Rg,Pg,Rg,Pg,H),Wg;function Gg(){return Gg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gg.apply(null,arguments)}var Kg=B(function(e){return g.createElement(`svg`,Gg({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Wg||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:2,d:`M3 6h6`}))}).attrs({"data-garden-id":`forms.dash_svg`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledDashSvg`,componentId:`sc-z3vq71-0`})([`transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;`,`:indeterminate ~ `,` > &{opacity:1;}`,`;`],Rg,Pg,H),qg;function Jg(){return Jg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jg.apply(null,arguments)}var Yg=B(function(e){return g.createElement(`svg`,Jg({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),qg||=g.createElement(`circle`,{cx:6,cy:6,r:2,fill:`currentColor`}))}).attrs({"data-garden-id":`forms.radio_svg`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledRadioSvg`,componentId:`sc-1r1qtr1-0`})([`transition:opacity 0.25s ease-in-out;opacity:0;`,`:checked ~ `,` > &{opacity:1;}`,`;`],Lg,Ng,H),Xg=`forms.toggle_label`,Zg=e=>{let t=e.theme.space.base*10,n=t+e.theme.space.base*2;return z([`padding-`,`:`,`px;&[hidden]{padding-`,`:`,`px;}`],e.theme.rtl?`right`:`left`,n,e.theme.rtl?`right`:`left`,t)},Qg=B(Pg).attrs({"data-garden-id":Xg,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledToggleLabel`,componentId:`sc-e0asdk-0`})([``,`;`,`;`],e=>Zg(e),H),$g=B(mg).attrs({"data-garden-id":`forms.toggle_hint`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledToggleHint`,componentId:`sc-nziggu-0`})([`padding-`,`:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,e=>Do(`${e.theme.space.base} * 12px`),H),e_=B(_g).attrs({"data-garden-id":`forms.toggle_message`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledToggleMessage`,componentId:`sc-13vuvl1-0`})([`padding-`,`:`,`;& `,`{`,`:`,`;}`,`;`],e=>e.theme.rtl?`right`:`left`,e=>Do(`${e.theme.space.base} * 12px`),hg,e=>e.theme.rtl?`right`:`left`,e=>Do(`${e.theme.space.base} * 10px - ${e.theme.iconSizes.md}`),H),t_;function n_(){return n_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n_.apply(null,arguments)}var r_=B(function(e){return g.createElement(`svg`,n_({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),t_||=g.createElement(`circle`,{cx:8,cy:8,r:6,fill:`currentColor`}))}).attrs({"data-garden-id":`forms.toggle_svg`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledToggleSvg`,componentId:`sc-162xbyx-0`})([`transition:all 0.15s ease-in-out;`,`;`],H),i_=B(bg).attrs({"data-garden-id":`forms.select`,"data-garden-version":`9.16.1`,as:`select`}).withConfig({displayName:`StyledSelect`,componentId:`sc-8xdxpt-0`})([`opacity:1;cursor:pointer;text-overflow:ellipsis;`,`;`,`;&::-ms-expand{display:none;}&::-ms-value{background-color:transparent;color:inherit;}&:-moz-focusring{transition:none;text-shadow:0 0 0 `,`;color:transparent;}& + `,`{position:absolute;pointer-events:none;}`],({theme:e,$isBare:t,$isCompact:n})=>{let r=t?void 0:Do(`${e.iconSizes.md} + ${e.space.base*5}`),i=`${e.space.base*(n?1.5:2.5)+1}px`,a=`${e.space.base*3}px`;return z([`padding-`,`:`,`;& + `,`{top:`,`;`,`:`,`;}`],e.rtl?`left`:`right`,r,wg,i,e.rtl?`left`:`right`,a)},({theme:e})=>z([`&:hover + `,`,&:focus + `,`,&:focus-visible + `,`{color:`,`;}&:disabled + `,`{color:`,`;}`],wg,wg,wg,U({theme:e,variable:`foreground.subtle`,dark:{offset:-100},light:{offset:100}}),wg,U({theme:e,variable:`foreground.disabled`})),e=>U({theme:e.theme,variable:`foreground.default`}),wg),a_=B(Eg).attrs({"data-garden-id":`forms.select_wrapper`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledSelectWrapper`,componentId:`sc-i7b6hw-0`})([`position:relative;padding:0;overflow:visible;`,`;& > `,`{border-color:transparent;background-color:transparent;`,`{box-shadow:unset;}}`],({theme:e,$isCompact:t})=>z([`max-height:`,`;`],`${e.space.base*(t?8:10)}px`),i_,Ec),o_=(0,g.createContext)(void 0),s_=()=>(0,g.useContext)(o_),c_=g.forwardRef((e,t)=>{let{hasHint:n,setHasHint:r,getHintProps:i}=sg()||{},a=s_();(0,g.useEffect)(()=>(!n&&r&&r(!0),()=>{n&&r&&r(!1)}),[n,r]);let o;o=a===`checkbox`?Ig:a===`radio`?Fg:a===`toggle`?$g:mg;let s=e;return i&&(s=i(s)),g.createElement(o,Object.assign({ref:t},s))});c_.displayName=`Field.Hint`;var l_=[`success`,`warning`,`error`],u_,d_;function f_(){return f_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f_.apply(null,arguments)}var p_=function(e){return g.createElement(`svg`,f_({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),u_||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 4.5V9`})),d_||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},m_,h_;function g_(){return g_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g_.apply(null,arguments)}var __=function(e){return g.createElement(`svg`,g_({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),m_||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5`}),h_||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},v_;function y_(){return y_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y_.apply(null,arguments)}var b_=function(e){return g.createElement(`svg`,y_({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),v_||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 9l2.5 2.5 5-5`}),g.createElement(`circle`,{cx:7.5,cy:8.5,r:7})))},x_=({validation:e,children:t,...n})=>g.createElement(hg,Object.assign({"aria-hidden":!1,role:`img`},n),e?{error:g.createElement(p_,null),success:g.createElement(b_,null),warning:g.createElement(__,null)}[e]:t);x_.displayName=`Field.MessageIcon`,x_.propTypes={validation:K.default.oneOf(l_)};var S_=g.forwardRef(({validation:e,validationLabel:t,children:n,...r},i)=>{let{hasMessage:a,setHasMessage:o,getMessageProps:s}=sg()||{},c=s_();(0,g.useEffect)(()=>(!a&&o&&o(!0),()=>{a&&o&&o(!1)}),[a,o]);let l;l=c===`checkbox`?Bg:c===`radio`?zg:c===`toggle`?e_:_g;let u={$validation:e,$validationLabel:t,...r};s&&(u=s(u));let d=xc(S_,u,`$validationLabel`,e,e!==void 0);return g.createElement(l,Object.assign({ref:i},u),!!e&&g.createElement(x_,{validation:e,"aria-label":d}),n)});S_.displayName=`Field.Message`,S_.propTypes={validation:K.default.oneOf(l_),validationLabel:K.default.string};var C_=(0,g.createContext)(void 0),w_=()=>(0,g.useContext)(C_),T_=g.forwardRef(({children:e,isRegular:t,...n},r)=>{let i=sg(),a=w_(),o=s_(),{setHasLabel:s}=i||{};(0,g.useEffect)(()=>(s?.(!0),()=>s?.(!1)),[s]);let c=a&&t===void 0?!0:t,l=n;if(i&&(l=i.getLabelProps(l),o===void 0)){let{setIsLabelActive:e,setIsLabelHovered:t}=i;l.onMouseUp=q(n.onMouseUp,()=>{e(!1)}),l.onMouseDown=q(n.onMouseDown,()=>{e(!0)}),l.onMouseEnter=q(n.onMouseEnter,()=>{t(!0)}),l.onMouseLeave=q(n.onMouseLeave,()=>{t(!1)})}return o===`radio`?g.createElement(Ng,Object.assign({ref:r},l,{$isRegular:c}),g.createElement(Yg,null),e):o===`checkbox`?(l.onClick=q(l.onClick,e=>{let t=navigator?.userAgent.toLowerCase().indexOf(`firefox`)>-1;if(i&&t&&e.target instanceof Element){let t=e.target.getAttribute(`for`);if(!t)return;let n=document.getElementById(t);n&&n.type===`checkbox`&&(e.shiftKey&&(n.click(),n.checked=!0),n.focus())}}),g.createElement(Pg,Object.assign({ref:r},l,{$isRegular:c}),g.createElement(Ug,null),g.createElement(Kg,null),e)):o===`toggle`?g.createElement(Qg,Object.assign({ref:r},l,{$isRegular:c}),g.createElement(r_,null),e):g.createElement(dg,Object.assign({ref:r},l,{$isRegular:c}),e)});T_.displayName=`Field.Label`,T_.propTypes={isRegular:K.default.bool};var E_=g.forwardRef((e,t)=>{let[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)(!1),[o,s]=(0,g.useState)(!1),[c,l]=(0,g.useState)(!1),[u,d]=(0,g.useState)(!1),{getInputProps:f,getMessageProps:p,...m}=ig({idPrefix:e.id,hasHint:n,hasMessage:i}),h=(0,g.useMemo)(()=>({...m,getInputProps:f,getMessageProps:p,isLabelActive:c,setIsLabelActive:l,isLabelHovered:u,setIsLabelHovered:d,hasHint:n,setHasHint:r,hasMessage:i,setHasMessage:a,hasLabel:o,setHasLabel:s}),[m,f,p,c,u,n,i,o]);return g.createElement(og.Provider,{value:h},g.createElement(cg,Object.assign({},e,{ref:t})))});E_.displayName=`Field`;var D_=E_;D_.Hint=c_,D_.Label=T_,D_.Message=S_;var O_=(0,g.forwardRef)((e,t)=>g.createElement(fg,Object.assign({},e,{ref:t})));O_.displayName=`Fieldset.Legend`;var k_=O_,A_=(0,g.forwardRef)(({isCompact:e,...t},n)=>{let r=(0,g.useMemo)(()=>({isCompact:e}),[e]);return g.createElement(C_.Provider,{value:r},g.createElement(lg,Object.assign({},t,{ref:n,$isCompact:e})))});A_.displayName=`Fieldset`,A_.propTypes={isCompact:K.default.bool};var j_=A_;j_.Legend=k_;var M_=g.forwardRef(({indeterminate:e,children:t,isCompact:n,...r},i)=>{let a=w_(),o=sg(),s=t=>{t&&(t.indeterminate=e)},c={$isCompact:a?a.isCompact:n,ref:e=>{[s,i].forEach(t=>{t&&(typeof t==`function`?t(e):t.current=e)})},...r};return o&&(c=o.getInputProps(c)),g.createElement(o_.Provider,{value:`checkbox`},g.createElement(Rg,c),t)});M_.displayName=`Checkbox`,M_.propTypes={isCompact:K.default.bool,indeterminate:K.default.bool};var N_=g.forwardRef(({onSelect:e,isBare:t,isCompact:n,focusInset:r,validation:i,...a},o)=>{let s=sg(),c=kg();Ag(i);let l=a;s&&(l=s.getInputProps(l));let u=a.readOnly?q(e,e=>{e.currentTarget.select()}):e;return g.createElement(bg,Object.assign({ref:o,onSelect:u},l,{$isBare:t===void 0&&c?.isUnified?!0:t,$isCompact:c?c.isCompact:n,$focusInset:c&&r===void 0?!0:r,$validation:i}))});N_.propTypes={isCompact:K.default.bool,isBare:K.default.bool,focusInset:K.default.bool,validation:K.default.oneOf(l_)},N_.displayName=`Input`;var P_=g.forwardRef(({children:e,isCompact:t,...n},r)=>{let i=w_(),a=sg(),o={$isCompact:i?i.isCompact:t,ref:r,...n};return a&&(o=a.getInputProps(o)),g.createElement(o_.Provider,{value:`radio`},g.createElement(Lg,o),e)});P_.displayName=`Radio`,P_.propTypes={isCompact:K.default.bool};function F_(e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var I_=e=>parseInt(e,10)||0,L_=g.forwardRef(({isCompact:e,isBare:t,focusInset:n,isResizable:r,minRows:i,maxRows:a,style:o,validation:s,onChange:c,onSelect:l,...u},d)=>{let f=sg(),p=(0,g.useRef)(),m=(0,g.useRef)(null),[h,_]=(0,g.useState)({overflow:!1,height:0}),v=u.value!==null&&u.value!==void 0,y=(i!==void 0||a!==void 0)&&!r,b=(0,g.useCallback)(()=>{if(!y)return;let e=p.current,t=window.getComputedStyle(e),n=m.current;n.style.width=t.width,n.value=e.value||e.placeholder||` `;let r=t.boxSizing,o=I_(t.paddingBottom)+I_(t.paddingTop),s=I_(t.borderTopWidth)+I_(t.borderBottomWidth),c=n.scrollHeight-o;n.value=`x`;let l=n.scrollHeight-o,u=c;i&&(u=Math.max(Number(i)*l,u)),a&&(u=Math.min(Number(a)*l,u)),u=Math.max(u,l);let d=u+(r===`border-box`?o+s:0),f=Math.abs(u-c)<=1;_(e=>d>0&&Math.abs((e.height||0)-d)>1||e.overflow!==f?{overflow:f,height:d}:e)},[a,i,p,y]),x=(0,g.useCallback)(e=>{v||b(),c&&c(e)},[b,v,c]);(0,g.useLayoutEffect)(()=>{b()});let S={};y&&(S.height=h.height,S.overflow=h.overflow?`hidden`:void 0);let C={$focusInset:n,$isBare:t,$isCompact:e,$isResizable:r,$validation:s,onChange:x,onSelect:u.readOnly?q(l,e=>{e.currentTarget.select()}):l,ref:F_([p,d]),rows:i,style:{...S,...o},...u};return f&&(C=f.getInputProps(C)),g.createElement(g.Fragment,null,g.createElement(Cg,C),!!y&&g.createElement(Cg,{$isBare:t,$isCompact:e,$isHidden:!0,"aria-hidden":!0,className:u.className,readOnly:!0,ref:m,style:o,tabIndex:-1}))});L_.propTypes={isCompact:K.default.bool,isBare:K.default.bool,focusInset:K.default.bool,isResizable:K.default.bool,minRows:K.default.number,maxRows:K.default.number,validation:K.default.oneOf(l_)},L_.displayName=`Textarea`;var R_;function z_(){return z_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z_.apply(null,arguments)}var B_=function(e){return g.createElement(`svg`,z_({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),R_||=g.createElement(`path`,{fill:`currentColor`,d:`M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z`}))},V_=({isDisabled:e,isFocused:t,isHovered:n,isRotated:r,...i})=>g.createElement(wg,Object.assign({$position:`start`,$isDisabled:e,$isFocused:t,$isHovered:n,$isRotated:r},i));V_.displayName=`FauxInput.StartIcon`;var H_=V_,U_=({isDisabled:e,isFocused:t,isHovered:n,isRotated:r,...i})=>g.createElement(wg,Object.assign({$position:`end`,$isDisabled:e,$isFocused:t,$isHovered:n,$isRotated:r},i));U_.displayName=`FauxInput.EndIcon`;var W_=U_,G_=(0,g.forwardRef)(({disabled:e,focusInset:t,isBare:n,isCompact:r,isFocused:i,isHovered:a,onBlur:o,onFocus:s,readOnly:c,validation:l,mediaLayout:u,...d},f)=>{let[p,m]=(0,g.useState)(!1),h=q(s,()=>{m(!0)}),_=q(o,()=>{m(!1)});return g.createElement(Eg,Object.assign({onFocus:h,onBlur:_,$focusInset:t,$isBare:n,$isCompact:r,$isDisabled:e,$isFocused:i===void 0?p:i,$isHovered:a,$isReadOnly:c,$mediaLayout:u,$validation:l,tabIndex:e?void 0:0},d,{ref:f}))});G_.displayName=`FauxInput`,G_.propTypes={isCompact:K.default.bool,isBare:K.default.bool,focusInset:K.default.bool,disabled:K.default.bool,readOnly:K.default.bool,validation:K.default.oneOf(l_),isFocused:K.default.bool,isHovered:K.default.bool};var K_=G_;K_.EndIcon=W_,K_.StartIcon=H_;var q_=g.forwardRef(({disabled:e,isCompact:t,validation:n,focusInset:r,isBare:i,...a},o)=>{let s=sg(),c={$focusInset:r,$isBare:i,$isCompact:t,$validation:n,disabled:e,ref:o,...a};return s&&(c=s.getInputProps(c)),g.createElement(a_,{$isCompact:t,$isBare:i,$isDisabled:e,$validation:n,$focusInset:r},g.createElement(i_,c),!i&&g.createElement(K_.EndIcon,{isDisabled:e},g.createElement(B_,null)))});q_.propTypes={isCompact:K.default.bool,isBare:K.default.bool,focusInset:K.default.bool,validation:K.default.oneOf(l_)},q_.displayName=`Select`;var J_=g.forwardRef(({start:e,end:t,disabled:n,isCompact:r,isBare:i,focusInset:a,readOnly:o,validation:s,wrapperProps:c={},wrapperRef:l,onSelect:u,...d},f)=>{let p=sg(),m=(0,g.useRef)(),[h,_]=(0,g.useState)(!1),[v,y]=(0,g.useState)(!1),{onClick:b,onFocus:x,onBlur:S,onMouseOver:C,onMouseOut:w,...T}=c,E=q(b,()=>{m.current&&m.current.focus()}),D=q(x,()=>{_(!0)}),O=q(S,()=>{_(!1)}),k=q(C,()=>{y(!0)}),A=q(w,()=>{y(!1)}),j=o?q(u,e=>{e.currentTarget.select()}):u,ee={disabled:n,readOnly:o,ref:F_([m,f]),onSelect:j,...d},te;return p&&(ee=p.getInputProps(ee),te=p.isLabelHovered),g.createElement(K_,Object.assign({tabIndex:null,onClick:E,onFocus:D,onBlur:O,onMouseOver:k,onMouseOut:A,disabled:n,isFocused:h,isHovered:v||te,isCompact:r,isBare:i,focusInset:a,readOnly:o,validation:s,mediaLayout:!0},T,{ref:l}),!!e&&g.createElement(K_.StartIcon,{isDisabled:n,isFocused:h,isHovered:v||te},e),g.createElement(Dg,ee),!!t&&g.createElement(K_.EndIcon,{isDisabled:n,isFocused:h,isHovered:v||te},t))});J_.propTypes={isCompact:K.default.bool,isBare:K.default.bool,focusInset:K.default.bool,validation:K.default.oneOf(l_),start:K.default.any,end:K.default.any,wrapperProps:K.default.object,wrapperRef:K.default.any},J_.displayName=`MediaInput`;var Y_=[`input:not([inert]):not([inert] *)`,`select:not([inert]):not([inert] *)`,`textarea:not([inert]):not([inert] *)`,`a[href]:not([inert]):not([inert] *)`,`area[href]:not([inert]):not([inert] *)`,`button:not([inert]):not([inert] *)`,`[tabindex]:not(slot):not([inert]):not([inert] *)`,`audio[controls]:not([inert]):not([inert] *)`,`video[controls]:not([inert]):not([inert] *)`,`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,`details>summary:first-of-type:not([inert]):not([inert] *)`,`details:not([inert]):not([inert] *)`].join(`,`),X_=typeof Element>`u`,Z_=X_?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Q_=!X_&&Element.prototype.getRootNode?function(e){return e?.getRootNode?.call(e)}:function(e){return e?.ownerDocument},$_=function(e,t){t===void 0&&(t=!0);var n=e?.getAttribute?.call(e,`inert`);return n===``||n===`true`||t&&e&&(typeof e.closest==`function`?e.closest(`[inert]`):$_(e.parentNode))},ev=function(e){var t=e?.getAttribute?.call(e,`contenteditable`);return t===``||t===`true`},tv=function(e,t,n){if($_(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Y_));return t&&Z_.call(e,Y_)&&r.unshift(e),r=r.filter(n),r},nv=function(e,t,n){for(var r=[],i=Array.from(e);i.length;){var a=i.shift();if(!$_(a,!1))if(a.tagName===`SLOT`){var o=a.assignedElements(),s=nv(o.length?o:a.children,!0,n);n.flatten?r.push.apply(r,s):r.push({scopeParent:a,candidates:s})}else{Z_.call(a,Y_)&&n.filter(a)&&(t||!e.includes(a))&&r.push(a);var c=a.shadowRoot||typeof n.getShadowRoot==`function`&&n.getShadowRoot(a),l=!$_(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(c&&l){var u=nv(c===!0?a.children:c.children,!0,n);n.flatten?r.push.apply(r,u):r.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}return r},rv=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},iv=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||ev(e))&&!rv(e)?0:e.tabIndex},av=function(e,t){var n=iv(e);return n<0&&t&&!rv(e)?0:n},ov=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},sv=function(e){return e.tagName===`INPUT`},cv=function(e){return sv(e)&&e.type===`hidden`},lv=function(e){return e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`})},uv=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},dv=function(e){if(!e.name)return!0;var t=e.form||Q_(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=uv(r,e.form);return!i||i===e},fv=function(e){return sv(e)&&e.type===`radio`},pv=function(e){return fv(e)&&!dv(e)},mv=function(e){var t=e&&Q_(e),n=t?.host,r=!1;if(t&&t!==e){var i,a,o;for(r=!!((i=n)!=null&&(a=i.ownerDocument)!=null&&a.contains(n)||e!=null&&(o=e.ownerDocument)!=null&&o.contains(e));!r&&n;){var s,c;t=Q_(n),n=t?.host,r=!!((s=n)!=null&&(c=s.ownerDocument)!=null&&c.contains(n))}}return r},hv=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},gv=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(n===`full-native`&&`checkVisibility`in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});var i=getComputedStyle(e).visibility;if(i===`hidden`||i===`collapse`)return!0;var a=Z_.call(e,`details>summary:first-of-type`)?e.parentElement:e;if(Z_.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`full-native`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=Q_(e);if(s&&!s.shadowRoot&&r(s)===!0)return hv(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(mv(e))return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return hv(e);return!1},_v=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return Z_.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},vv=function(e,t){return!(t.disabled||cv(t)||gv(t,e)||lv(t)||_v(t))},yv=function(e,t){return!(pv(t)||iv(t)<0||!vv(e,t))},bv=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},xv=function(e){var t=[],n=[];return e.forEach(function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,o=av(a,i),s=i?xv(e.candidates):a;o===0?i?t.push.apply(t,s):t.push(a):n.push({documentOrder:r,tabIndex:o,item:e,isScope:i,content:s})}),n.sort(ov).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},Sv=function(e,t){return t||={},xv(t.getShadowRoot?nv([e],t.includeContainer,{filter:yv.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:bv}):tv(e,t.includeContainer,yv.bind(null,t)))};function Cv(e){return e&&e.ownerDocument||document}function wv(e){e===void 0&&(e=Cv());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}var Tv=({focusOnMount:e=!0,restoreFocus:t=!0,environment:n,focusElem:r,containerRef:i}={containerRef:(0,g.createRef)()})=>{let a=(0,g.useRef)(null),[o,s]=(0,g.useState)(i.current);(0,g.useEffect)(()=>{i.current!==o&&s(i.current)});let c=(0,g.useCallback)(e=>{let t=e;r?r(t):t&&t.focus()},[r]),l=()=>{if(!o)throw Error(`Accessibility Error: You must apply the ref prop to your containing element.`)},u=()=>{let e=wv(n||document),t=o;return t.contains(e)?e:t},d=()=>{let e=Sv(o);return{firstItem:e[0]||u(),lastItem:e[e.length-1]||u()}};return(0,g.useEffect)(()=>{let r=n||document;return a.current=wv(r),e&&c(o),()=>{let e=a.current!==r.body,n=a.current!==null;e&&n&&t&&c(a.current)}},[e,t,n,c,o]),{getContainerProps:({onKeyDown:e,...t}={})=>({onKeyDown:q(e,e=>{if(e.key!==J.TAB)return;l();let t=d();e.shiftKey&&(e.target===t.firstItem||e.target===o)&&(c(t.lastItem),e.preventDefault()),!e.shiftKey&&e.target===t.lastItem&&(c(t.firstItem),e.preventDefault())}),"data-garden-container-id":`containers.focusjail`,"data-garden-container-version":`2.0.22`,...t}),focusElement:c}},Ev=({children:e,render:t=e,...n})=>g.createElement(g.Fragment,null,t(Tv(n)));Ev.propTypes={children:K.default.func,render:K.default.func,focusOnMount:K.default.bool,restoreFocus:K.default.bool,environment:K.default.any,containerRef:K.default.any.isRequired,focusElem:K.default.func},Ev.defaultProps={focusOnMount:!0,restoreFocus:!0};var Dv=({closeOnBlur:e,environment:t,focusOnMount:n,idPrefix:r,modalRef:i,onClose:a,restoreFocus:o})=>{let s=rg(r),c=`${s}__title`,l=`${s}__content`,u=(0,g.useRef)(!1),d=(0,g.useRef)(!1),f=e=>{a?.(e)},p=({onMouseDown:e,onMouseUp:t,...n}={})=>{let r=`containers.modal`;return{onMouseDown:q(e,()=>{u.current=!0}),onMouseUp:q(t,e=>{let t=e.target,n=r===t.getAttribute(`data-garden-container-id`);!d.current&&n&&f(e),d.current=!1,setTimeout(()=>{u.current=!1})}),"data-garden-container-id":r,"data-garden-container-version":`2.0.0`,...n}},m=({role:n=`dialog`,onBlur:r,onKeyDown:a,onMouseDown:o,...s}={})=>({role:n===null?void 0:n,tabIndex:-1,"aria-modal":!0,"aria-labelledby":c,"aria-describedby":l,onBlur:q(r,e?e=>{let n=t||document,r=e.relatedTarget;(r===null||!i.current?.contains(r))&&setTimeout(()=>{let t=n.activeElement;u.current||i.current?.contains(t)||f(e)})}:void 0),onMouseDown:q(o,()=>{d.current=!0}),onKeyDown:q(a,e=>{e.key===J.ESCAPE&&f(e)}),...s}),h=({id:e=c,...t}={})=>({id:e,...t}),_=({id:e=l,...t}={})=>({id:e,...t}),v=({onClick:e,...t})=>({onClick:q(e,e=>{f(e)}),...t}),{getContainerProps:y}=Tv({containerRef:i,focusOnMount:n,restoreFocus:o,environment:t});return{getBackdropProps:p,getModalProps:e=>y(m(e)),getTitleProps:h,getContentProps:_,getCloseProps:v,closeModal:f}},Ov=({children:e,render:t=e,...n})=>g.createElement(g.Fragment,null,t(Dv(n)));Ov.propTypes={children:K.default.func,render:K.default.func,onClose:K.default.func,modalRef:K.default.any.isRequired,idPrefix:K.default.string,focusOnMount:K.default.bool,restoreFocus:K.default.bool,environment:K.default.any},Ov.defaultProps={focusOnMount:!0,restoreFocus:!0};function kv(e){return`nodeType`in e&&e.nodeType===document.DOCUMENT_NODE}function Av(e){return`window`in e&&e.window===e?e:kv(e)&&e.defaultView||!1}function jv(e){return e&&e.ownerDocument||document}function Mv(e){var t=jv(e);return t&&t.defaultView||window}function Nv(e,t){return Mv(e).getComputedStyle(e,t)}var Pv=/([A-Z])/g;function Fv(e){return e.replace(Pv,`-$1`).toLowerCase()}var Iv=/^ms-/;function Lv(e){return Fv(e).replace(Iv,`-ms-`)}var Rv=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function zv(e){return!!(e&&Rv.test(e))}function Bv(e,t){var n=``,r=``;if(typeof t==`string`)return e.style.getPropertyValue(Lv(t))||Nv(e).getPropertyValue(Lv(t));Object.keys(t).forEach(function(i){var a=t[i];!a&&a!==0?e.style.removeProperty(Lv(i)):zv(i)?r+=i+`(`+a+`) `:n+=Lv(i)+`: `+a+`;`}),r&&(n+=`transform: `+r+`;`),e.style.cssText+=`;`+n}var Vv=!!(typeof window<`u`&&window.document&&window.document.createElement),Hv;function Uv(e){if((!Hv&&Hv!==0||e)&&Vv){var t=document.createElement(`div`);t.style.position=`absolute`,t.style.top=`-9999px`,t.style.width=`50px`,t.style.height=`50px`,t.style.overflow=`scroll`,document.body.appendChild(t),Hv=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Hv}var Wv=`modals.backdrop`,Gv=Ei([`0%{opacity:0;}100%{opacity:1;}`]),Kv=B.div.attrs({"data-garden-id":Wv,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledBackdrop`,componentId:`sc-mzdjpo-0`})([`display:flex;position:fixed;inset:0;align-items:`,`;justify-content:`,`;z-index:400;background-color:`,`;overflow:auto;-webkit-overflow-scrolling:touch;font-family:`,`;direction:`,`;`,`;`,`;`],e=>e.$isCentered&&`center`,e=>e.$isCentered&&`center`,({theme:e})=>U({theme:e,hue:`neutralHue`,transparency:e.opacity[1e3],light:{shade:900},dark:{shade:1200}}),e=>e.theme.fonts.system,e=>e.theme.rtl&&`rtl`,e=>e.$isAnimated?z([`animation:`,` 0.15s ease-in;`],Gv):``,H);Kv.propTypes={$isCentered:K.default.bool,$isAnimated:K.default.bool};var qv=B.div.attrs({"data-garden-id":`modals.body`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledBody`,componentId:`sc-14rzecg-0`})([`display:block;margin:0;padding:`,`;height:100%;overflow:auto;line-height:`,`;color-scheme:only `,`;color:`,`;font-size:`,`;`,`;`],e=>`${e.theme.space.base*5}px ${e.theme.space.base*10}px`,e=>pc(e.theme.lineHeights.md,e.theme.fontSizes.md),e=>e.theme.colors.base,({theme:e})=>U({theme:e,variable:`foreground.default`}),e=>e.theme.fontSizes.md,H),Jv=`modals.close`,Yv={top:2.5,side:6.5,size:10},Xv=B($p).attrs({"data-garden-id":Jv,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledClose`,componentId:`sc-iseudj-0`})([`position:absolute;top:`,`px;`,`:`,`;`,`;`],e=>e.theme.space.base*Yv.top,e=>e.theme.rtl?`left`:`right`,e=>`${e.theme.space.base*Yv.side}px`,H),Zv=B.div.attrs({"data-garden-id":`modals.footer`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledFooter`,componentId:`sc-d8pfdu-0`})([`display:flex;flex-shrink:0;align-items:center;justify-content:flex-end;border-top:`,`;padding:`,`;`,`;`],e=>e.$isLarge&&`${e.theme.borders.sm} ${U({theme:e.theme,variable:`border.default`})}`,e=>e.$isLarge?`${e.theme.space.base*8}px ${e.theme.space.base*10}px`:`${e.theme.space.base*5}px ${e.theme.space.base*10}px ${e.theme.space.base*8}px`,H),Qv=B.span.attrs({"data-garden-id":`modals.footer_item`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledFooterItem`,componentId:`sc-1mb76hl-0`})([`display:flex;margin-`,`:`,`px;min-width:0;&:first-child{margin-`,`:0;}`,`;`],e=>e.theme.rtl?`right`:`left`,e=>e.theme.space.base*5,e=>e.theme.rtl?`right`:`left`,H),$v=B.div.attrs({"data-garden-id":`modals.header`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledHeader`,componentId:`sc-1787r9v-0`})([`display:block;position:`,`;margin:0;border-bottom:`,`;padding:`,`;`,`  line-height:`,`;font-size:`,`;font-weight:`,`;`,`;`,`;`],e=>e.$isDanger&&`relative`,e=>e.theme.borders.sm,e=>`${e.theme.space.base*5}px ${e.theme.space.base*10}px`,e=>e.$isCloseButtonPresent&&`padding-${e.theme.rtl?`left`:`right`}: ${e.theme.space.base*(Yv.size+Yv.side+2)}px;`,e=>pc(e.theme.lineHeights.md,e.theme.fontSizes.md),e=>e.theme.fontSizes.md,e=>e.theme.fontWeights.semibold,({$isDanger:e,theme:t})=>z([`border-bottom-color:`,`;color:`,`;`],U({theme:t,variable:`border.subtle`}),U({theme:t,variable:e?`foreground.danger`:`foreground.default`})),H),ey,ty;function ny(){return ny=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ny.apply(null,arguments)}var ry=B(function(e){return g.createElement(`svg`,ny({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),ey||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 4.5V9`})),ty||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))}).withConfig({displayName:`StyledDangerIcon`,componentId:`sc-1kwbb39-0`})([`position:absolute;top:`,`px;`,`:`,`;`],e=>e.theme.space.base*5.5,e=>e.theme.rtl?`right`:`left`,e=>`${e.theme.space.base*4}px`),iy=`modals.modal`,ay=Ei([`0%{transform:scale(0);opacity:0;}50%{transform:scale(1.05);}100%{opacity:1;}`]),oy=B.div.attrs({"data-garden-id":iy,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledModal`,componentId:`sc-1pe1axu-0`})([`display:flex;position:fixed;flex-direction:column;animation-delay:0.01s;margin:`,`;border:`,`;border-radius:`,`;min-height:60px;max-height:calc(100vh - `,`px);overflow:auto;direction:`,`;`,`;`,`;`,`;&:focus{outline:none;}@media (max-height:399px){top:`,`px;bottom:auto;margin-bottom:`,`px;max-height:calc(100vh - `,`px);}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){right:`,`;bottom:`,`;transform:`,`;}`,`;`],e=>e.$isCentered?`0`:`${e.theme.space.base*12}px`,e=>e.theme.borders.sm,e=>e.theme.borderRadii.md,e=>e.theme.space.base*24,e=>e.theme.rtl&&`rtl`,e=>e.$isAnimated?z([`animation:`,` 0.3s ease-in;`],ay):``,e=>z([``,`{width:`,`;}`],gc(`up`,e.$isLarge?`md`:`sm`,e.theme),e.$isLarge?e.theme.breakpoints.md:e.theme.breakpoints.sm),({theme:e})=>{let t=`${e.space.base*5}px`,n=`${e.space.base*7}px`,r=U({variable:`shadow.large`,theme:e}),i=e.shadows.lg(t,n,r);return z([`border-color:`,`;box-shadow:`,`;background-color:`,`;`],U({theme:e,variable:`border.default`}),i,U({theme:e,variable:`background.raised`}))},e=>e.theme.space.base*6,e=>e.theme.space.base*6,e=>e.theme.space.base*12,e=>e.$isCentered&&`50%`,e=>e.$isCentered&&`50%`,e=>e.$isCentered&&`translate(50%, 50%)`,H);oy.propTypes={$isLarge:K.default.bool,$isAnimated:K.default.bool};var sy=(0,g.createContext)(void 0),cy=()=>{let e=(0,g.useContext)(sy);if(e===void 0)throw Error(`useModalContext must be used within a ModalsContext.Provider`);return e},ly=(0,g.forwardRef)((e,t)=>{let{getContentProps:n}=cy();return g.createElement(qv,Object.assign({},n(e),{ref:t}))});ly.displayName=`Modal.Body`;var uy;function dy(){return dy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dy.apply(null,arguments)}var fy=function(e){return g.createElement(`svg`,dy({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),uy||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,d:`M3 13L13 3m0 10L3 3`}))},py=(0,g.forwardRef)((e,t)=>{let{getCloseProps:n,setIsCloseButtonPresent:r}=cy();(0,g.useEffect)(()=>(r(!0),()=>r(!1)));let i=xc(py,e,`aria-label`,`Close modal`,e[`aria-describedby`]===void 0);return g.createElement(Xv,Object.assign({},n({...e,"aria-label":i}),{ref:t}),g.createElement(fy,null))});py.displayName=`Modal.Close`;var my=g.forwardRef((e,t)=>{let{isLarge:n}=cy();return g.createElement(Zv,Object.assign({ref:t,$isLarge:n},e))});my.displayName=`Modal.Footer`;var hy=g.forwardRef((e,t)=>g.createElement(Qv,Object.assign({ref:t},e)));hy.displayName=`Modal.FooterItem`;var gy=(0,g.forwardRef)(({children:e,isDanger:t,tag:n=`div`,...r},i)=>{let{isCloseButtonPresent:a,hasHeader:o,setHasHeader:s,getTitleProps:c}=cy();return(0,g.useEffect)(()=>(!o&&s&&s(!0),()=>{o&&s&&s(!1)}),[o,s]),g.createElement($v,Object.assign({},c(r),{as:n,$isCloseButtonPresent:a,$isDanger:t,ref:i}),!!t&&g.createElement(ry,null),e)});gy.displayName=`Modal.Header`,gy.propTypes={isDanger:K.default.bool,tag:K.default.any};var _y=e=>{let t=jv(e),n=Mv(t),r=e&&e.tagName.toLowerCase()===`body`;if(!Av(t)&&!r)return e.scrollHeight>e.clientHeight;let i=n.getComputedStyle(t.body),a=parseInt(i.getPropertyValue(`margin-left`),10),o=parseInt(i.getPropertyValue(`margin-right`),10);return a+t.body.clientWidth+o<n.innerWidth},vy=(0,g.forwardRef)(({backdropProps:e,children:t,onClose:n,isLarge:r,isCentered:i=!0,isAnimated:a=!0,id:o,appendToNode:s,focusOnMount:c,restoreFocus:l,...u},d)=>{let f=(0,g.useContext)(di),p=(0,g.useRef)(null),m=W(f),[h,_]=(0,g.useState)(!1),[y,b]=(0,g.useState)(!1),{getBackdropProps:x,getModalProps:S,getTitleProps:C,getContentProps:w,getCloseProps:T}=Dv({idPrefix:o,onClose:n,modalRef:p,focusOnMount:c,restoreFocus:l,environment:m});(0,g.useEffect)(()=>{if(!m)return;let e=m.querySelector(`html`),t=m.querySelector(`body`),n,r;if(t){if(_y(t)){let e=Uv(),n=parseInt(Bv(t,`paddingRight`)||`0`,10);r=t.style.paddingRight,t.style.paddingRight=`${n+e}px`}return e&&(n=e.style.overflow,e.style.overflow=`hidden`),()=>{e&&(e.style.overflow=n),t.style.paddingRight=r}}},[m]);let E=(0,g.useMemo)(()=>{if(s)return s;if(m)return m.body},[s,m]),D=(0,g.useMemo)(()=>({isLarge:r,isCloseButtonPresent:h,hasHeader:y,setHasHeader:b,getTitleProps:C,getContentProps:w,getCloseProps:T,setIsCloseButtonPresent:_}),[r,y,h,C,w,T]),O=S({"aria-describedby":void 0,...y?{}:{"aria-labelledby":void 0}}),k=y?`aria-labelledby`:`aria-label`,A=y?O[`aria-labelledby`]:`Modal dialog`,j=y?O[`aria-labelledby`]:u[`aria-label`],ee={[k]:xc(vy,{[k]:j},k,A,p.current!==null)};return E?(0,v.createPortal)(g.createElement(sy.Provider,{value:D},g.createElement(Kv,Object.assign({$isCentered:i,$isAnimated:a},x(e)),g.createElement(oy,Object.assign({$isCentered:i,$isAnimated:a,$isLarge:r},O,ee,u,{ref:F_([d,p])}),t))),E):null});vy.displayName=`Modal`,vy.propTypes={backdropProps:K.default.object,isLarge:K.default.bool,isAnimated:K.default.bool,isCentered:K.default.bool,focusOnMount:K.default.bool,restoreFocus:K.default.bool,onClose:K.default.func,appendToNode:K.default.any};var yy=vy;yy.Body=ly,yy.Close=py,yy.Footer=my,yy.FooterItem=hy,yy.Header=gy;var by=[`top`,`right`,`bottom`,`left`],xy=[`start`,`end`],Sy=by.reduce((e,t)=>e.concat(t,t+`-`+xy[0],t+`-`+xy[1]),[]),Cy=Math.min,wy=Math.max,Ty=Math.round,Ey=Math.floor,Dy=e=>({x:e,y:e}),Oy={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function ky(e,t){return typeof e==`function`?e(t):e}function Ay(e){return e.split(`-`)[0]}function jy(e){return e.split(`-`)[1]}function My(e){return e===`x`?`y`:`x`}function Ny(e){return e===`y`?`height`:`width`}function Py(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Fy(e){return My(Py(e))}function Iy(e,t,n){n===void 0&&(n=!1);let r=jy(e),i=Fy(e),a=Ny(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Gy(o)),[o,Gy(o)]}function Ly(e){let t=Gy(e);return[Ry(e),t,Ry(t)]}function Ry(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var zy=[`left`,`right`],By=[`right`,`left`],Vy=[`top`,`bottom`],Hy=[`bottom`,`top`];function Uy(e,t,n){switch(e){case`top`:case`bottom`:return n?t?By:zy:t?zy:By;case`left`:case`right`:return t?Vy:Hy;default:return[]}}function Wy(e,t,n,r){let i=jy(e),a=Uy(Ay(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Ry)))),a}function Gy(e){let t=Ay(e);return Oy[t]+e.slice(t.length)}function Ky(e){return{top:0,right:0,bottom:0,left:0,...e}}function qy(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Ky(e)}function Jy(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Yy(e,t,n){let{reference:r,floating:i}=e,a=Py(t),o=Fy(t),s=Ny(o),c=Ay(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(jy(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function Xy(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=ky(t,e),p=qy(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Jy(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Jy(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Zy=50,Qy=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Xy},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Yy(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Zy&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Yy(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}};function $y(e,t,n){return(e?[...n.filter(t=>jy(t)===e),...n.filter(t=>jy(t)!==e)]:n.filter(e=>Ay(e)===e)).filter(n=>!e||jy(n)===e||(t?Ry(n)!==n:!1))}var eb=function(e){return e===void 0&&(e={}),{name:`autoPlacement`,options:e,async fn(t){let{rects:n,middlewareData:r,placement:i,platform:a,elements:o}=t,{crossAxis:s=!1,alignment:c,allowedPlacements:l=Sy,autoAlignment:u=!0,...d}=ky(e,t),f=c!==void 0||l===Sy?$y(c||null,u,l):l,p=await a.detectOverflow(t,d),m=r.autoPlacement?.index||0,h=f[m];if(h==null)return{};let g=Iy(h,n,await(a.isRTL==null?void 0:a.isRTL(o.floating)));if(i!==h)return{reset:{placement:f[0]}};let _=[p[Ay(h)],p[g[0]],p[g[1]]],v=[...r.autoPlacement?.overflows||[],{placement:h,overflows:_}],y=f[m+1];if(y)return{data:{index:m+1,overflows:v},reset:{placement:y}};let b=v.map(e=>{let t=jy(e.placement);return[e.placement,t&&s?e.overflows.slice(0,2).reduce((e,t)=>e+t,0):e.overflows[0],e.overflows]}).sort((e,t)=>e[1]-t[1]),x=b.filter(e=>e[2].slice(0,jy(e[0])?2:3).every(e=>e<=0))[0]?.[0]||b[0][0];return x===i?{}:{data:{index:m+1,overflows:v},reset:{placement:x}}}}},tb=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=ky(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Ay(r),_=Py(o),v=Ay(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Gy(o)]:Ly(o)),x=p!==`none`;!d&&x&&b.push(...Wy(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Iy(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==Py(t))||T.every(e=>Py(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Py(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},nb=new Set([`left`,`top`]);async function rb(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Ay(n),s=jy(n),c=Py(n)===`y`,l=nb.has(o)?-1:1,u=a&&c?-1:1,d=ky(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var ib=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await rb(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},ab=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=ky(e,t),u=await o.detectOverflow(t,l),d=Ay(i),f=jy(i),p=Py(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=Cy(h-u[g],v),x=Cy(m-u[_],y),S=!t.middlewareData.shift,C=b,w=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(w=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=wy(u.left,0),t=wy(u.right,0),n=wy(u.top,0),r=wy(u.bottom,0);p?w=m-2*(e!==0||t!==0?e+t:wy(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:wy(u.top,u.bottom))}await c({...t,availableWidth:w,availableHeight:C});let T=await o.getDimensions(s.floating);return m!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}};function ob(){return typeof window<`u`}function sb(e){return ub(e)?(e.nodeName||``).toLowerCase():`#document`}function cb(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function lb(e){return((ub(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function ub(e){return ob()?e instanceof Node||e instanceof cb(e).Node:!1}function db(e){return ob()?e instanceof Element||e instanceof cb(e).Element:!1}function fb(e){return ob()?e instanceof HTMLElement||e instanceof cb(e).HTMLElement:!1}function pb(e){return!ob()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof cb(e).ShadowRoot}function mb(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Tb(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function hb(e){return/^(table|td|th)$/.test(sb(e))}function gb(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var _b=/transform|translate|scale|rotate|perspective|filter/,vb=/paint|layout|strict|content/,yb=e=>!!e&&e!==`none`,bb;function xb(e){let t=db(e)?Tb(e):e;return yb(t.transform)||yb(t.translate)||yb(t.scale)||yb(t.rotate)||yb(t.perspective)||!Cb()&&(yb(t.backdropFilter)||yb(t.filter))||_b.test(t.willChange||``)||vb.test(t.contain||``)}function Sb(e){let t=Db(e);for(;fb(t)&&!wb(t);){if(xb(t))return t;if(gb(t))return null;t=Db(t)}return null}function Cb(){return bb??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),bb}function wb(e){return/^(html|body|#document)$/.test(sb(e))}function Tb(e){return cb(e).getComputedStyle(e)}function Eb(e){return db(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Db(e){if(sb(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||pb(e)&&e.host||lb(e);return pb(t)?t.host:t}function Ob(e){let t=Db(e);return wb(t)?e.ownerDocument?e.ownerDocument.body:e.body:fb(t)&&mb(t)?t:Ob(t)}function kb(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Ob(e),i=r===e.ownerDocument?.body,a=cb(r);if(i){let e=Ab(a);return t.concat(a,a.visualViewport||[],mb(r)?r:[],e&&n?kb(e):[])}else return t.concat(r,kb(r,[],n))}function Ab(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function jb(e){let t=Tb(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=fb(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Ty(n)!==a||Ty(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Mb(e){return db(e)?e:e.contextElement}function Nb(e){let t=Mb(e);if(!fb(t))return Dy(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=jb(t),o=(a?Ty(n.width):n.width)/r,s=(a?Ty(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Pb=Dy(0);function Fb(e){let t=cb(e);return!Cb()||!t.visualViewport?Pb:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ib(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==cb(e)?!1:t}function Lb(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Mb(e),o=Dy(1);t&&(r?db(r)&&(o=Nb(r)):o=Nb(e));let s=Ib(a,n,r)?Fb(a):Dy(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=cb(a),t=r&&db(r)?cb(r):r,n=e,i=Ab(n);for(;i&&r&&t!==n;){let e=Nb(i),t=i.getBoundingClientRect(),r=Tb(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=cb(i),i=Ab(n)}}return Jy({width:u,height:d,x:c,y:l})}function Rb(e,t){let n=Eb(e).scrollLeft;return t?t.left+n:Lb(lb(e)).left+n}function zb(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Rb(e,n),y:n.top+t.scrollTop}}function Bb(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=lb(r),s=t?gb(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Dy(1),u=Dy(0),d=fb(r);if((d||!d&&!a)&&((sb(r)!==`body`||mb(o))&&(c=Eb(r)),d)){let e=Lb(r);l=Nb(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?zb(o,c):Dy(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Vb(e){return Array.from(e.getClientRects())}function Hb(e){let t=lb(e),n=Eb(e),r=e.ownerDocument.body,i=wy(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=wy(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Rb(e),s=-n.scrollTop;return Tb(r).direction===`rtl`&&(o+=wy(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var Ub=25;function Wb(e,t){let n=cb(e),r=lb(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Cb();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Rb(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=Ub&&(a-=o)}else l<=Ub&&(a+=l);return{width:a,height:o,x:s,y:c}}function Gb(e,t){let n=Lb(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=fb(e)?Nb(e):Dy(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Kb(e,t,n){let r;if(t===`viewport`)r=Wb(e,n);else if(t===`document`)r=Hb(lb(e));else if(db(t))r=Gb(t,n);else{let n=Fb(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Jy(r)}function qb(e,t){let n=Db(e);return n===t||!db(n)||wb(n)?!1:Tb(n).position===`fixed`||qb(n,t)}function Jb(e,t){let n=t.get(e);if(n)return n;let r=kb(e,[],!1).filter(e=>db(e)&&sb(e)!==`body`),i=null,a=Tb(e).position===`fixed`,o=a?Db(e):e;for(;db(o)&&!wb(o);){let t=Tb(o),n=xb(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||mb(o)&&!n&&qb(e,o))?r=r.filter(e=>e!==o):i=t,o=Db(o)}return t.set(e,r),r}function Yb(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?gb(t)?[]:Jb(t,this._c):[].concat(n),r],o=Kb(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Kb(t,a[e],i);s=wy(n.top,s),c=Cy(n.right,c),l=Cy(n.bottom,l),u=wy(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Xb(e){let{width:t,height:n}=jb(e);return{width:t,height:n}}function Zb(e,t,n){let r=fb(t),i=lb(t),a=n===`fixed`,o=Lb(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Dy(0);function l(){c.x=Rb(i)}if(r||!r&&!a)if((sb(t)!==`body`||mb(i))&&(s=Eb(t)),r){let e=Lb(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?zb(i,s):Dy(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Qb(e){return Tb(e).position===`static`}function $b(e,t){if(!fb(e)||Tb(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return lb(e)===n&&(n=n.ownerDocument.body),n}function ex(e,t){let n=cb(e);if(gb(e))return n;if(!fb(e)){let t=Db(e);for(;t&&!wb(t);){if(db(t)&&!Qb(t))return t;t=Db(t)}return n}let r=$b(e,t);for(;r&&hb(r)&&Qb(r);)r=$b(r,t);return r&&wb(r)&&Qb(r)&&!xb(r)?n:r||Sb(e)||n}var tx=async function(e){let t=this.getOffsetParent||ex,n=this.getDimensions,r=await n(e.floating);return{reference:Zb(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function nx(e){return Tb(e).direction===`rtl`}var rx={convertOffsetParentRelativeRectToViewportRelativeRect:Bb,getDocumentElement:lb,getClippingRect:Yb,getOffsetParent:ex,getElementRects:tx,getClientRects:Vb,getDimensions:Xb,getScale:Nb,isElement:db,isRTL:nx};function ix(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ax(e,t){let n=null,r,i=lb(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Ey(d),h=Ey(i.clientWidth-(u+f)),g=Ey(i.clientHeight-(d+p)),_=Ey(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:wy(0,Cy(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!ix(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function ox(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Mb(e),u=i||a?[...l?kb(l):[],...t?kb(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?ax(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Lb(e):null;c&&g();function g(){let t=Lb(e);h&&!ix(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var sx=ib,cx=eb,lx=tb,ux=ab,dx=(e,t,n)=>{let r=new Map,i={platform:rx,...n},a={...i.platform,_c:r};return Qy(e,t,{...i,platform:a})},fx=typeof document<`u`?g.useLayoutEffect:function(){};function px(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!px(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!px(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function mx(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function hx(e,t){let n=mx(e);return Math.round(t*n)/n}function gx(e){let t=g.useRef(e);return fx(()=>{t.current=e}),t}function _x(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=g.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=g.useState(r);px(f,r)||p(r);let[m,h]=g.useState(null),[_,y]=g.useState(null),b=g.useCallback(e=>{e!==w.current&&(w.current=e,h(e))},[]),x=g.useCallback(e=>{e!==T.current&&(T.current=e,y(e))},[]),S=a||m,C=o||_,w=g.useRef(null),T=g.useRef(null),E=g.useRef(u),D=c!=null,O=gx(c),k=gx(i),A=gx(l),j=g.useCallback(()=>{if(!w.current||!T.current)return;let e={placement:t,strategy:n,middleware:f};k.current&&(e.platform=k.current),dx(w.current,T.current,e).then(e=>{let t={...e,isPositioned:A.current!==!1};ee.current&&!px(E.current,t)&&(E.current=t,v.flushSync(()=>{d(t)}))})},[f,t,n,k,A]);fx(()=>{l===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let ee=g.useRef(!1);fx(()=>(ee.current=!0,()=>{ee.current=!1}),[]),fx(()=>{if(S&&(w.current=S),C&&(T.current=C),S&&C){if(O.current)return O.current(S,C,j);j()}},[S,C,j,O,D]);let te=g.useMemo(()=>({reference:w,floating:T,setReference:b,setFloating:x}),[b,x]),M=g.useMemo(()=>({reference:S,floating:C}),[S,C]),ne=g.useMemo(()=>{let e={position:n,left:0,top:0};if(!M.floating)return e;let t=hx(M.floating,u.x),r=hx(M.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...mx(M.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,M.floating,u.x,u.y]);return g.useMemo(()=>({...u,update:j,refs:te,elements:M,floatingStyles:ne}),[u,j,te,M,ne])}var vx=(e,t)=>{let n=sx(e);return{name:n.name,fn:n.fn,options:[e,t]}},yx=(e,t)=>{let n=lx(e);return{name:n.name,fn:n.fn,options:[e,t]}},bx=(e,t)=>{let n=ux(e);return{name:n.name,fn:n.fn,options:[e,t]}},xx=(e,t)=>{let n=cx(e);return{name:n.name,fn:n.fn,options:[e,t]}},Sx=[{value:`admin`,label:`Admin`,description:`Can see everything and manage all settings.`},{value:`agent`,label:`Agent`,description:`Can do day-to-day work within their assigned scope.`},{value:`reviewer`,label:`Reviewer`,description:`Can review work but can’t change settings.`}],Cx={ticketAccess:`org`,manageSuspended:!1,editTicketProperties:!1,deleteTickets:!1,restrictTicketContent:!1,mergeTickets:!1,editTicketTags:!1,privateComments:!1,publicPrivateComments:!1,manageTicketForms:!1,manageTicketFields:!1,endUsersViewOnly:!1,endUsersOrgEdit:!1,endUsersAnyEdit:!1,searchEndUsers:!1,teamMembers:`view`,manageGroupMembers:!1,manageGroups:!1,manageOrganizations:!1,manageOrgFields:!1,manageRoles:!1,manageSubdomainRoles:!1,manageUserFields:!1,manageChannels:!1,manageFacebook:!1,views:`my`,limitViews:!1,filterViews:!1,macros:`personal`,dynamicContent:!1,contextualWorkspaces:!1,automations:!1,skills:!1,slas:!1,triggers:!1,businessRulesAnalysis:!1,deletionSchedules:!1,hidePii:!1,manageGuide:!1,explore:`view`,supportReports:!1,talkDashboard:!1},wx={admin:{...Cx,ticketAccess:`all`,manageSuspended:!0,editTicketProperties:!0,deleteTickets:!0,restrictTicketContent:!0,mergeTickets:!0,editTicketTags:!0,privateComments:!0,publicPrivateComments:!0,manageTicketForms:!0,manageTicketFields:!0,endUsersViewOnly:!0,endUsersOrgEdit:!0,endUsersAnyEdit:!0,searchEndUsers:!0,teamMembers:`manage`,manageGroupMembers:!0,manageGroups:!0,manageOrganizations:!0,manageOrgFields:!0,manageRoles:!0,manageSubdomainRoles:!0,manageUserFields:!0,manageChannels:!0,manageFacebook:!0,views:`global`,limitViews:!1,filterViews:!0,macros:`global`,dynamicContent:!0,contextualWorkspaces:!0,automations:!0,skills:!0,slas:!0,triggers:!0,businessRulesAnalysis:!0,deletionSchedules:!0,hidePii:!1,manageGuide:!0,explore:`manage`,supportReports:!0,talkDashboard:!0},agent:{...Cx,ticketAccess:`groups`,manageSuspended:!0,editTicketProperties:!0,deleteTickets:!1,restrictTicketContent:!0,mergeTickets:!0,editTicketTags:!1,privateComments:!0,publicPrivateComments:!0,manageTicketForms:!1,manageTicketFields:!1,endUsersViewOnly:!0,endUsersOrgEdit:!0,endUsersAnyEdit:!1,searchEndUsers:!0,teamMembers:`view`,manageGroupMembers:!1,manageGroups:!1,manageOrganizations:!1,manageOrgFields:!1,manageRoles:!1,manageSubdomainRoles:!1,manageUserFields:!1,manageChannels:!1,manageFacebook:!1,views:`personal`,limitViews:!0,filterViews:!0,macros:`personal`,dynamicContent:!1,contextualWorkspaces:!1,automations:!1,skills:!1,slas:!1,triggers:!1,businessRulesAnalysis:!1,deletionSchedules:!1,hidePii:!1,manageGuide:!1,explore:`view`,supportReports:!1,talkDashboard:!0},reviewer:{...Cx,ticketAccess:`all`,manageSuspended:!1,editTicketProperties:!1,deleteTickets:!1,restrictTicketContent:!1,mergeTickets:!1,editTicketTags:!1,privateComments:!0,publicPrivateComments:!1,manageTicketForms:!1,manageTicketFields:!1,endUsersViewOnly:!0,endUsersOrgEdit:!1,endUsersAnyEdit:!1,searchEndUsers:!0,teamMembers:`view`,manageGroupMembers:!1,manageGroups:!1,manageOrganizations:!1,manageOrgFields:!1,manageRoles:!1,manageSubdomainRoles:!1,manageUserFields:!1,manageChannels:!1,manageFacebook:!1,views:`see`,limitViews:!0,filterViews:!0,macros:`apply`,dynamicContent:!1,contextualWorkspaces:!1,automations:!1,skills:!1,slas:!1,triggers:!1,businessRulesAnalysis:!1,deletionSchedules:!1,hidePii:!0,manageGuide:!1,explore:`view`,supportReports:!1,talkDashboard:!1}},Tx={admin:{support:`client_admin`,knowledge:`client_admin`,analytics:`client_admin`,voice:`client_admin`,chat:`client_admin`,qa:`admin`,"ai-agents":`client_admin`},agent:{support:`client_user`,knowledge:`client_user`,analytics:`client_user`,voice:`client_user`,chat:`client_user`,qa:`agent`,"ai-agents":`client_user`},reviewer:{support:`client_editor`,knowledge:`no_access`,analytics:`client_user`,voice:`no_access`,chat:`no_access`,qa:`reviewer`,"ai-agents":`no_access`}};function Ex(e){return{...wx[e]||Cx}}function Dx(e){return{...Tx[e]||{}}}function Ox(e,t){let n=wx[e];return!n||!t||Object.keys(Cx).every(e=>t[e]===n[e])}function kx(e,t){let n=Tx[e];return!n||typeof t!=`function`||Object.entries(n).every(([e,n])=>t(e)===n)}var Ax={admin:[`Full ticket access, including private groups`,`Manage people, channels, workflow, and business rules`,`Admin-level product access (Support, Knowledge, Analytics, Voice, QA, AI agents)`],agent:[`Tickets within their groups; day-to-day edit and comment`,`Personal views and macros; limited people access`,`User-level product access; QA Agent package`],reviewer:[`View tickets broadly; private comments only`,`View-oriented workflow; no admin settings`,`QA Reviewer package; limited or no other product admin`]},jx=({label:e=`Error`})=>(0,V.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,role:`img`,"aria-label":e,focusable:`false`,children:[(0,V.jsx)(`path`,{d:`M10 12.166C10.5522 12.166 10.9998 12.6139 11 13.166C11 13.7183 10.5523 14.166 10 14.166C9.44772 14.166 9 13.7183 9 13.166C9.0002 12.6139 9.44784 12.166 10 12.166Z`,fill:`currentColor`}),(0,V.jsx)(`path`,{d:`M10 5.83301C10.4602 5.83303 10.833 6.20677 10.833 6.66699V10.417C10.8329 10.8771 10.4601 11.25 10 11.25C9.53986 11.25 9.16715 10.8771 9.16699 10.417V6.66699C9.16699 6.20675 9.53976 5.83301 10 5.83301Z`,fill:`currentColor`}),(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 1.66699C14.6024 1.66701 18.333 5.39764 18.333 10C18.333 14.6023 14.6023 18.333 10 18.333C5.39764 18.333 1.66701 14.6024 1.66699 10C1.66699 5.39763 5.39763 1.66699 10 1.66699ZM10 3.33301C6.3181 3.33301 3.33301 6.3181 3.33301 10C3.33303 13.6819 6.31812 16.667 10 16.667C13.6819 16.667 16.667 13.6819 16.667 10C16.667 6.31812 13.6819 3.33303 10 3.33301Z`,fill:`currentColor`})]}),Mx=B.div.attrs({role:`alert`})`
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
`,Nx=B.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
`,Px=B.span`
  padding-block: 2px;
  min-width: 0;
`;function Fx({children:e,validationLabel:t=`Error`}){return(0,V.jsxs)(Mx,{children:[(0,V.jsx)(Nx,{children:(0,V.jsx)(jx,{label:t})}),(0,V.jsx)(Px,{children:e})]})}var Ix=B.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
`,Lx=B.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Rx=B.ul`
  margin: 6px 0 0;
  padding: 0 0 0 1.1em;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
`,zx=B.li`
  margin: 0 0 2px;

  &:last-child {
    margin-bottom: 0;
  }
`;function Bx({onClose:e,onContinue:t}){let[n,r]=(0,g.useState)(``),[i,a]=(0,g.useState)(!1),o=e=>{r(e),a(!1)};return(0,V.jsxs)(yy,{onClose:e,backdropProps:{style:{top:48}},children:[(0,V.jsx)(yy.Header,{tag:`h2`,children:`Choose a role type`}),(0,V.jsx)(yy.Body,{children:(0,V.jsxs)(j_,{children:[(0,V.jsx)(j_.Legend,{children:`Role type* (required)`}),(0,V.jsx)(Ix,{children:`Select a package for this role. You can change the role type and adjust permissions later.`}),(0,V.jsx)(Lx,{children:Sx.map(e=>(0,V.jsx)(D_,{children:(0,V.jsxs)(P_,{name:`create-role-package`,value:e.value,checked:n===e.value,onChange:()=>o(e.value),children:[(0,V.jsx)(D_.Label,{children:e.label}),(0,V.jsxs)(D_.Hint,{children:[e.description,(0,V.jsx)(Rx,{children:(Ax[e.value]||[]).map(e=>(0,V.jsx)(zx,{children:e},e))})]})]})},e.value))}),i&&(0,V.jsx)(Fx,{children:`Select a role type`})]})}),(0,V.jsxs)(yy.Footer,{children:[(0,V.jsx)(yy.FooterItem,{children:(0,V.jsx)(Zp,{isBasic:!0,onClick:e,children:`Cancel`})}),(0,V.jsx)(yy.FooterItem,{children:(0,V.jsx)(Zp,{isPrimary:!0,onClick:()=>{if(!n){a(!0);return}t(n)},children:`Continue`})})]}),(0,V.jsx)(yy.Close,{"aria-label":`Close modal`})]})}var Vx=B.div`
  padding: 24px 32px;
  overflow-y: auto;
  flex: 1;
`,Hx=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Ux=B.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 4px;
`,Wx=B.p`
  font-size: 14px;
  color: #2f3130;
  margin: 0;
`,Gx=B(Qp)`
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  vertical-align: baseline;
`,Kx=B.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,qx=B.span`
  color: #1f73b7;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Jx=B.div`
  font-size: 14px;
  color: #646864;
  margin-bottom: 12px;
`,Yx=B.button`
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
`,Xx=B.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`,Zx=B.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
  border-bottom: 1px solid #d8dcde;
`,Qx=B.td`
  padding: 16px;
  font-size: 14px;
  color: #2f3130;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`,$x=B.tr`
  cursor: pointer;

  &:hover {
    background: #f8f9f9;
  }

  &:last-child td {
    border-bottom: none;
  }
`,eS=B.span`
  color: #2f3130;
`,tS=B.span`
  color: #646864;
  font-weight: 400;
`,nS=B.span`
  color: #646864;
`,rS=B.span`
  display: inline-flex;
  align-items: center;
  background: ${e=>e.$system?`#e9ebed`:`#edf7f0`};
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.$system?`#646864`:`#2f3130`};
`,iS=B.span`
  font-size: 14px;
  color: #2f3130;
`;function aS(){let e=Ve(),{roles:t,roleAssignments:n,version:r}=Bl(),[i,a]=(0,g.useState)(!1),o=r===`v4`||r===`v5`||r===`v6`||r===`v6.5`||r===`v7`,s=e=>(n[e.id]||[]).length;return(0,V.jsxs)(Vx,{children:[o&&i&&(0,V.jsx)(Bx,{onClose:()=>a(!1),onContinue:t=>{a(!1),e(`/roles/create`,{state:{rolePackage:t}})}}),(0,V.jsx)(im,{items:[{label:`People`},{label:`Team`},{label:`Roles`}]}),(0,V.jsxs)(Hx,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(Ux,{children:`Roles`}),(0,V.jsxs)(Wx,{children:[`Create, assign, and manage roles for your team.`,` `,(0,V.jsx)(Gx,{isExternal:!0,href:`#`,children:`Learn about managing roles`})]})]}),(0,V.jsxs)(Kx,{children:[(0,V.jsx)(qx,{children:`Compare roles`}),(0,V.jsx)(Yx,{onClick:()=>{if(o){a(!0);return}e(`/roles/create`)},children:`Create role`})]})]}),(0,V.jsxs)(Jx,{children:[t.length,` roles`]}),(0,V.jsxs)(Xx,{children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(Zx,{children:`Name`}),(0,V.jsx)(Zx,{children:`Type`}),(0,V.jsx)(Zx,{children:`Team members`}),(0,V.jsx)(Zx,{children:`Description`})]})}),(0,V.jsx)(`tbody`,{children:t.map(t=>(0,V.jsxs)($x,{onClick:()=>e(`/roles/${t.id}`),children:[(0,V.jsx)(Qx,{children:(0,V.jsxs)(eS,{children:[t.name,t.id===`counselor`&&(0,V.jsx)(tS,{children:` (Error state here)`})]})}),(0,V.jsx)(Qx,{children:t.type&&(0,V.jsx)(rS,{$system:t.type===`System`,children:t.type})}),(0,V.jsx)(Qx,{children:(0,V.jsx)(iS,{children:s(t)})}),(0,V.jsx)(Qx,{children:(0,V.jsx)(nS,{children:t.description})})]},t.id))})]})]})}var oS=[`small`,`medium`,`large`],sS=B(Oc).attrs({"data-garden-id":`tags.avatar`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledAvatar`,componentId:`sc-3kdmgt-0`})([`flex-shrink:0;font-size:0;`,`;`],H),cS=B.button.attrs({"data-garden-id":`tags.close`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledClose`,componentId:`sc-d6lrpn-0`})([`display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:`,`;border:0;background:transparent;cursor:pointer;padding:0;color:inherit;font-size:0;appearance:none;&:hover{opacity:`,`;}&:focus{outline:none;}&:active{opacity:`,`;}`,`;`],e=>e.theme.opacity[1e3],e=>e.theme.opacity[1100],e=>e.theme.opacity[1200],H),lS=`tags.tag_view`,uS=({theme:e,$hue:t})=>{let n,r;if(t)switch(r=U({theme:e,variable:`foreground.onEmphasis`}),t){case`grey`:case`neutralHue`:n=U({theme:e,variable:`background.emphasis`,dark:{offset:-300}});break;case`blue`:case`primaryHue`:n=U({theme:e,variable:`background.primaryEmphasis`});break;case`red`:case`dangerHue`:n=U({theme:e,variable:`background.dangerEmphasis`});break;case`green`:case`successHue`:n=U({theme:e,variable:`background.successEmphasis`});break;case`yellow`:case`warningHue`:n=U({theme:e,hue:`warningHue`,shade:400}),e.colors.base===`light`&&(r=U({theme:e,variable:`foreground.warningEmphasis`}));break;case`kale`:case`chromeHue`:n=U({theme:e,hue:`chromeHue`,dark:{shade:500},light:{shade:800}});break;default:{let i={...e,colors:{...e.colors,base:`light`}},a={...e,colors:{...e.colors,base:`dark`}},o=`foreground.onEmphasis`;n=U({theme:e,hue:t}),r=Ds(n,U({theme:a,variable:o}),U({theme:i,variable:o}),!1);break}}else n=U({theme:e,hue:`neutralHue`,dark:{shade:800},light:{shade:200}}),r=U({theme:e,variable:`foreground.default`});return z([`background-color:`,`;color:`,`;&:hover{color:`,`;}`,``],n,r,r,Dc({theme:e,shadowWidth:`sm`,selector:`&:focus`}))},dS=({$isPill:e,$isRound:t,$size:n,theme:r})=>{let i,a,o,s,c,l;n===`small`?(i=r.borderRadii.sm,a=r.space.base,o=r.space.base*4,s=r.fontSizes.xs,l=0):n===`large`?(i=r.borderRadii.md,a=r.space.base*3,o=r.space.base*8,s=r.fontSizes.sm,l=r.space.base*6):(i=r.borderRadii.sm,a=r.space.base*2,o=r.space.base*5,s=r.fontSizes.sm,l=r.space.base*4);let u=n===`large`?Do(`${i} - 1`):i,d=(o-l)/2,f=t?d:d*2;return t?(i=`50%`,a=0,c=o,u=`50%`):e&&(i=`100px`,u=`50%`,n===`small`?(a=r.space.base*1.5,c=r.space.base*6):c=n===`large`?r.space.base*12:r.space.base*7.5),z([`border-radius:`,`;padding:0 `,`px;min-width:`,`;height:`,`px;line-height:`,`;font-size:`,`;& > *{width:100%;min-width:`,`;}& `,`{margin-`,`:-`,`px;margin-`,`:`,`px;border-radius:`,`;width:`,`px;min-width:`,`px;height:`,`px;}& `,`{margin-`,`:-`,`px;border-radius:`,`;width:`,`px;height:`,`px;}`],i,a,c?`${c}px`:`calc(${a*2}px + 1ch)`,o,pc(o,s),s,c?`${c-a*2}px`:`1ch`,sS,r.rtl?`right`:`left`,a-d,r.rtl?`left`:`right`,f,u,l,l,l,cS,r.rtl?`left`:`right`,a,i,o,o)},fS=B.div.attrs(()=>({"data-garden-id":lS,"data-garden-version":`9.16.1`})).withConfig({displayName:`StyledTag`,componentId:`sc-1jvbe03-0`})([`display:inline-flex;flex-wrap:nowrap;align-items:center;justify-content:`,`;transition:box-shadow 0.1s ease-in-out;box-sizing:border-box;border:0;max-width:100%;overflow:hidden;vertical-align:middle;text-decoration:none;white-space:nowrap;font-weight:`,`;direction:`,`;`,`;&:hover{cursor:default;text-decoration:none;}&:link:hover,&:visited:hover{cursor:pointer;}&:any-link:hover{cursor:pointer;}`,`{text-decoration:none;}`,`;& > *{overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;}& b{font-weight:`,`;}& `,`{display:`,`;}& `,`{display:`,`;}`,`;`],e=>e.$isRound&&`center`,e=>!e.$isRegular&&e.theme.fontWeights.semibold,e=>e.theme.rtl?`rtl`:`ltr`,e=>dS(e),Ec,e=>uS(e),e=>e.theme.fontWeights.semibold,sS,e=>(e.$isRound||e.$size===`small`)&&`none`,cS,e=>e.$isRound&&`none`,H),pS;function mS(){return mS=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mS.apply(null,arguments)}var hS=function(e){return g.createElement(`svg`,mS({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),pS||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,d:`M3 9l6-6m0 6L3 3`}))},gS=(0,g.forwardRef)((e,t)=>{let n=xc(gS,e,`aria-label`,`Remove`);return g.createElement(cS,Object.assign({ref:t,"aria-label":n},e,{type:`button`,tabIndex:-1}),g.createElement(hS,null))});gS.displayName=`Tag.Close`;var _S=gS,vS=e=>g.createElement(sS,e);vS.displayName=`Tag.Avatar`;var yS=vS,bS=(0,g.forwardRef)(({isPill:e,isRound:t,isRegular:n,size:r=`medium`,hue:i,...a},o)=>g.createElement(fS,Object.assign({$hue:i,$isPill:e,$isRegular:n,$isRound:t,$size:r,ref:o},a)));bS.displayName=`Tag`,bS.propTypes={size:K.default.oneOf(oS),hue:K.default.string,isPill:K.default.bool,isRound:K.default.bool,isRegular:K.default.bool};var xS=bS;xS.Avatar=yS,xS.Close=_S;var SS=B.mark`
  background: ${G.yellow[300]};
  color: inherit;
  padding: 0;
  border-radius: 2px;
`;function Y(e,t){if(!t||typeof e!=`string`||!e)return e;let n=e.toLowerCase(),r=t.toLowerCase(),i=[],a=0,o=0;for(;;){let t=n.indexOf(r,a);if(t===-1){i.push(e.slice(a));break}t>a&&i.push(e.slice(a,t)),i.push((0,V.jsx)(SS,{children:e.slice(t,t+r.length)},o++)),a=t+r.length}return i}function CS(e,t){if(!t||e==null||typeof e==`boolean`)return e;if(typeof e==`string`)return Y(e,t);if(typeof e==`number`)return e;if(Array.isArray(e))return e.map((e,n)=>(0,V.jsx)(g.Fragment,{children:CS(e,t)},n));if(g.isValidElement(e)){if(e.type===`input`||e.type===`textarea`)return e;let n=e.props?.children;return n==null?e:g.cloneElement(e,void 0,CS(n,t))}return e}function wS(e){return e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(wS).join(` `):g.isValidElement(e)?wS(e.props?.children):``}var TS=B.div`
  padding-bottom: 8px;
`,ES=B(mh)`
  max-width: 726px;
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
`,DS=B.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3130;
  font-weight: 500;
`,OS=B.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`,kS=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`,AS=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`,jS=B.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,MS=B.div`
  display: flex;
  flex-direction: column;
`,NS=B.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
`,PS=B.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;

  && {
    color: #646864;
  }
`,FS=[{value:`no_access`,label:`No access`,description:`Users with this custom role can’t view or access AI agents. Selecting this option doesn’t hide AI agents from the product icons menu, but users can’t access the AI agents dashboard.`},{value:`client_admin`,label:`Client admin`,description:`Users can manage all AI agent capabilities, including creating, editing, publishing, and deleting agents, configuring settings, and managing API integrations.`},{value:`client_editor`,label:`Client editor`,description:`Users can create and edit AI agents, but can’t publish or delete agents, configure settings, or manage API integrations.`},{value:`client_user`,label:`Client user`,description:`Users can manage AI agents with restrictions on sensitive capabilities, such as agents cannot access API integration.`}],IS=[`Opt in for AI agents`,`Opting in to AI agents moves settings to this page`,`AI agent settings will only be available here in the roles and permissions pages.`,...FS.flatMap(e=>[e.label,e.description])].join(` `);function LS({roleId:e,query:t,directAccess:n=!1}){let r=(0,g.useRef)(null),{getAiAgentsState:i,updateAiAgentsState:a}=Bl(),{optedIn:o,saved:s,accessLevel:c}=i(e),l=FS,u=n||o||s;return(0,g.useEffect)(()=>{n&&(c?o||a(e,{optedIn:!0,saved:!0}):a(e,{optedIn:!0,saved:!0,accessLevel:`no_access`}))},[n,c,o,e,a]),(0,V.jsxs)(TS,{children:[!n&&!s&&(0,V.jsxs)(DS,{children:[(0,V.jsx)(OS,{checked:o,onChange:t=>{a(e,{optedIn:t.target.checked,saved:!1,...t.target.checked&&!c?{accessLevel:`no_access`}:{}}),t.target.checked&&setTimeout(()=>{r.current?.scrollIntoView({behavior:`smooth`,block:`center`})},50)}}),Y(`Opt in for AI agents`,t)]}),!n&&!s&&(0,V.jsxs)(ES,{type:`info`,role:`note`,children:[(0,V.jsx)(mh.Title,{children:Y(`Opting in to AI agents moves settings to this page`,t)}),(0,V.jsx)(mh.Paragraph,{children:Y(`AI agent settings will only be available here in the roles and permissions pages.`,t)})]}),u&&(0,V.jsx)(kS,{ref:r,style:n?{marginTop:0}:void 0,children:l.map(n=>(0,V.jsxs)(AS,{children:[(0,V.jsx)(jS,{name:`ai-agents-access-${e}`,value:n.value,checked:c===n.value,onChange:()=>a(e,{optedIn:!0,saved:!1,accessLevel:n.value})}),(0,V.jsxs)(MS,{children:[(0,V.jsx)(NS,{children:Y(n.label,t)}),(0,V.jsx)(PS,{children:Y(n.description,t)})]})]},n.value))})]})}var RS=B.div`
  padding-bottom: 8px;
`,zS=B(mh)`
  max-width: 726px;
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
`,BS=B.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3130;
  font-weight: 500;
`,VS=B.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`,HS=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`,US=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`,WS=B.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,GS=B.div`
  display: flex;
  flex-direction: column;
`,KS=B.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
`,qS=B.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;

  && {
    color: #646864;
  }
`,JS=B.div`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e9ebed;
`,YS=B.div`
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
  margin-bottom: 8px;
`,XS=B.span`
  font-size: 12px;
  color: #646864;
  display: block;
  margin: 4px 0 0 24px;
`,ZS=[{value:`admin`,label:`Admin`,description:`Can see everything and manage all settings.`},{value:`agent`,label:`Agent`,description:`Can view their own conversations, reply to feedback, and view their customer reviews. They have workspace-specific conversations and can view and edit data within their assigned workspaces only. They also have access to their own dashboard and can perform self-reviews, if enabled.`},{value:`reviewer`,label:`Reviewer`,description:`Can view all reviews but cannot edit workspace settings. Can perform peer reviews.`}],QS=e=>{if(e.id===`qa`)return ZS;let t=e.name;return[{value:`no_access`,label:`No access`,description:`Users with this custom role can’t view or access ${t}. Selecting this option doesn’t hide ${t} from the product icons menu, but users can’t access the ${t} dashboard.`},{value:`client_admin`,label:`Client admin`,description:`Users can manage all ${t} capabilities, including creating, editing, publishing, and deleting, configuring settings, and managing API integrations.`},{value:`client_editor`,label:`Client editor`,description:`Users can create and edit ${t}, but can’t publish or delete, configure settings, or manage API integrations.`},{value:`client_user`,label:`Client user`,description:`Users can manage ${t} with restrictions on sensitive capabilities, such as no access to API integrations.`}]},$S=(e,{directAccess:t=!1,includeManage:n=!1}={})=>{let r=typeof e==`string`?e:e.name,i=QS(typeof e==`string`?{id:``,name:e}:e);return[...t?[]:[`Opt in for ${r}`,`Opting in to ${r} moves settings to this page`,`${r} settings will only be available here in the roles and permissions pages.`],...i.flatMap(e=>[e.label,e.description]),...n?[`Manage Guide`,`manage articles`,`themes`,`settings`,`knowledge`]:[]].join(` `)};function eC({roleId:e,product:t,query:n,directAccess:r=!1,includeManageKnowledge:i=!1}){let a=(0,g.useRef)(null),{getProductAccess:o,updateProductAccess:s}=Bl(),{optedIn:c,saved:l,accessLevel:u}=o(e,t.id),d=QS(t),f=d[0].value,p=r||c||l;return(0,g.useEffect)(()=>{r&&(u?c||s(e,t.id,{optedIn:!0,saved:!0}):s(e,t.id,{optedIn:!0,saved:!0,accessLevel:f}))},[r,u,c,e,t.id,f,s]),(0,V.jsxs)(RS,{children:[!r&&!l&&(0,V.jsxs)(BS,{children:[(0,V.jsx)(VS,{checked:c,onChange:n=>{s(e,t.id,{optedIn:n.target.checked,saved:!1,...n.target.checked&&!u?{accessLevel:f}:{}}),n.target.checked&&setTimeout(()=>{a.current?.scrollIntoView({behavior:`smooth`,block:`center`})},50)}}),Y(`Opt in for ${t.name}`,n)]}),!r&&!l&&(0,V.jsxs)(zS,{type:`info`,role:`note`,children:[(0,V.jsx)(mh.Title,{children:Y(`Opting in to ${t.name} moves settings to this page`,n)}),(0,V.jsx)(mh.Paragraph,{children:Y(`${t.name} settings will only be available here in the roles and permissions pages.`,n)})]}),p&&(0,V.jsx)(HS,{ref:a,style:r?{marginTop:0}:void 0,children:d.map(r=>(0,V.jsxs)(US,{children:[(0,V.jsx)(WS,{name:`${t.id}-access-${e}`,value:r.value,checked:u===r.value,onChange:()=>s(e,t.id,{optedIn:!0,saved:!1,accessLevel:r.value})}),(0,V.jsxs)(GS,{children:[(0,V.jsx)(KS,{children:Y(r.label,n)}),(0,V.jsx)(qS,{children:Y(r.description,n)})]})]},r.value))}),i&&(0,V.jsxs)(JS,{children:[(0,V.jsx)(YS,{children:Y(`Manage Knowledge`,n)}),(0,V.jsxs)(BS,{style:{marginBottom:0},children:[(0,V.jsx)(VS,{defaultChecked:!0}),Y(`Manage Guide`,n)]}),(0,V.jsx)(XS,{children:Y(`Can by default have an admin and can manage articles, themes, and settings.`,n)})]})]})}var tC=[{value:`admin`,label:`Admin`,description:`Full access to all QA activity, reviews, and workspace settings.`},{value:`agent`,label:`Agent`,description:`View personal reviews and conversations in assigned workspaces, with self-reviews when active.`},{value:`reviewer`,label:`Reviewer`,description:`View team reviews and conduct peer evaluations. Cannot manage workspace settings.`}],nC=[{id:`review-work`,title:`Review work`,permissions:[{id:`view_own_reviews`,label:`View own reviews`},{id:`view_team_reviews`,label:`View team reviews`},{id:`view_all_reviews`,label:`View all reviews`},{id:`filter_reviews_by_score`,label:`Filter reviews by score`},{id:`filter_reviews_by_date`,label:`Filter reviews by date range`},{id:`view_review_comments`,label:`View review comments`},{id:`download_review_attachments`,label:`Download review attachments`}]},{id:`conduct-reviews`,title:`Conduct reviews`,permissions:[{id:`self_review`,label:`Perform self-reviews`},{id:`peer_review`,label:`Perform peer reviews`},{id:`manager_review`,label:`Perform manager reviews`},{id:`edit_own_review_drafts`,label:`Edit own review drafts`},{id:`submit_reviews`,label:`Submit completed reviews`},{id:`dispute_reviews`,label:`Dispute reviews`},{id:`reply_to_feedback`,label:`Reply to feedback`}]},{id:`coaching`,title:`Coaching and calibration`,permissions:[{id:`view_coaching_sessions`,label:`View coaching sessions`},{id:`create_coaching_sessions`,label:`Create coaching sessions`},{id:`assign_coaching_actions`,label:`Assign coaching action items`},{id:`join_calibration`,label:`Join calibration sessions`},{id:`lead_calibration`,label:`Lead calibration sessions`},{id:`view_calibration_scores`,label:`View calibration scorecards`}]},{id:`workspace`,title:`Workspace configuration`,permissions:[{id:`view_workspaces`,label:`View workspaces`},{id:`edit_assigned_workspace`,label:`Edit assigned workspace data`},{id:`manage_workspace_members`,label:`Manage workspace members`},{id:`configure_scorecards`,label:`Configure scorecards`},{id:`configure_review_forms`,label:`Configure review forms`},{id:`manage_auto_qa_rules`,label:`Manage auto-QA rules`},{id:`manage_workspace_integrations`,label:`Manage workspace integrations`}]},{id:`reporting`,title:`Reporting and export`,permissions:[{id:`view_own_dashboard`,label:`View own dashboard`},{id:`view_team_dashboard`,label:`View team dashboard`},{id:`view_org_dashboard`,label:`View organization dashboard`},{id:`export_review_data`,label:`Export review data`},{id:`schedule_report_emails`,label:`Schedule report emails`},{id:`share_dashboards`,label:`Share dashboards`}]},{id:`admin`,title:`Admin settings`,permissions:[{id:`manage_qa_roles`,label:`Manage QA roles and packages`},{id:`manage_billing_usage`,label:`View billing and usage`},{id:`manage_api_keys`,label:`Manage API keys`},{id:`manage_sso_settings`,label:`Manage SSO settings`},{id:`delete_reviews`,label:`Delete reviews`},{id:`impersonate_reviewers`,label:`Impersonate reviewers for support`},{id:`manage_account_settings`,label:`Manage account-wide QA settings`}]}],rC=[{id:`reviews`,title:`Reviews`,description:`View reviews and conduct evaluations`,groupIds:[`review-work`,`conduct-reviews`]},{id:`coaching`,title:`Coaching`,description:`Coaching sessions and calibration`,groupIds:[`coaching`]},{id:`workspaces`,title:`Workspaces`,description:`Workspace setup, scorecards, and rules`,groupIds:[`workspace`]},{id:`reporting`,title:`Reporting`,description:`Dashboards, export, and sharing`,groupIds:[`reporting`]},{id:`admin`,title:`Admin`,description:`Account, security, and privileged actions`,groupIds:[`admin`]}].map(e=>({...e,groups:e.groupIds.map(e=>nC.find(t=>t.id===e)).filter(Boolean)})),iC=nC.flatMap(e=>e.permissions.map(e=>e.id)),aC=(...e)=>{let t=new Set(e);return Object.fromEntries(iC.map(e=>[e,t.has(e)]))},oC={admin:Object.fromEntries(iC.map(e=>[e,!0])),agent:aC(`view_own_reviews`,`view_team_reviews`,`filter_reviews_by_score`,`filter_reviews_by_date`,`view_review_comments`,`download_review_attachments`,`self_review`,`edit_own_review_drafts`,`submit_reviews`,`dispute_reviews`,`reply_to_feedback`,`view_coaching_sessions`,`view_workspaces`,`edit_assigned_workspace`,`view_own_dashboard`,`view_team_dashboard`),reviewer:aC(`view_own_reviews`,`view_team_reviews`,`view_all_reviews`,`filter_reviews_by_score`,`filter_reviews_by_date`,`view_review_comments`,`download_review_attachments`,`peer_review`,`edit_own_review_drafts`,`submit_reviews`,`dispute_reviews`,`view_coaching_sessions`,`join_calibration`,`view_calibration_scores`,`view_workspaces`,`view_own_dashboard`,`view_team_dashboard`,`view_org_dashboard`)};function sC(e){return{...oC[e]||oC.agent}}function cC(){return[`Quality assurance`,`Reset to default`,`Open all`,`Close all`,`Customized`,...tC.flatMap(e=>[e.label,e.description]),...nC.flatMap(e=>[e.title,...e.permissions.map(e=>e.label)])].join(` `)}function lC(e){let t=(e||``).trim().toLowerCase();return t?nC.filter(e=>e.title.toLowerCase().includes(t)?!0:e.permissions.some(e=>e.label.toLowerCase().includes(t))).map(e=>e.id):[]}function uC(e,t){let n=oC[e];return!n||!t||iC.every(e=>!!t[e]==!!n[e])}function dC(e,t){let n=oC[e];return!n||!t?[]:nC.filter(e=>e.permissions.some(e=>!!t[e.id]!=!!n[e.id])).map(e=>e.id)}function fC(){return[`Quality assurance`,`All domains`,`Reset to default`,`Customized`,`Choose a domain`,...tC.flatMap(e=>[e.label,e.description]),...rC.flatMap(e=>[e.title,e.description,...e.groups.flatMap(e=>[e.title,...e.permissions.map(e=>e.label)])])].join(` `)}function pC(e){let t=(e||``).trim().toLowerCase();return t?rC.filter(e=>e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)?!0:e.groups.some(e=>e.title.toLowerCase().includes(t)||e.permissions.some(e=>e.label.toLowerCase().includes(t)))).map(e=>e.id):[]}function mC(){return[`Quality assurance`,`Role type`,`Overrides`,`account baseline`,`Add an exception`,`Full effective access`,`Reset to default`,`Inheriting`,`Customized`,`Added`,`Removed`,...tC.flatMap(e=>[e.label,e.description]),...nC.flatMap(e=>[e.title,...e.permissions.map(e=>e.label)])].join(` `)}var hC=B.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
    min-width: 410px;
  }
`,gC=B.div`
  padding-bottom: 8px;
`,_C=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vC=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`,yC=B.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,bC=B.div`
  display: flex;
  flex-direction: column;
`,xC=B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,SC=B.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
`,CC=B(xS).attrs({size:`small`,isPill:!0})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: #fae7d7; /* tag/bg/orange */
  color: #4a290c; /* tag/fg/orange */

  &:hover {
    color: #4a290c;
  }
`,wC=B.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;
`,TC=B.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 32px;
`,EC=B(Zp).attrs({isBasic:!0,size:`small`})`
  flex-shrink: 0;
`,DC=B(Zp).attrs({size:`small`})`
  flex-shrink: 0;
  margin-inline-end: -15px;
`,OC=B.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  border-top: 1px solid #e9ebed;
`,kC=B.div`
  border-bottom: 1px solid #e9ebed;
  background: transparent;
`,AC=B.button.attrs({type:`button`})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
`,jC=B.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`,MC=B.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #646864;
  margin-left: 8px;
`,NC=B.span`
  display: inline-flex;
  flex-shrink: 0;
  color: #646864;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    transform: ${e=>e.$open?`rotate(180deg)`:`none`};
    transition: transform 120ms ease;
  }
`,PC=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 0 16px;
`,FC=B.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #2f3130;
  cursor: pointer;
`,IC=B.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-top: 2px;
  accent-color: #1f73b7;
  cursor: pointer;
`;function LC(){return(0,V.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,V.jsx)(`path`,{d:`M4 6l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function RC(e,t){return e.permissions.filter(e=>t[e.id]).length}function zC(){return Object.fromEntries(tC.map(e=>[e.value,sC(e.value)]))}function BC({roleId:e,query:t,packageAccessLevel:n,onPackageDivergenceChange:r}){let{getProductAccess:i,updateProductAccess:a}=Bl(),{accessLevel:o}=i(e,`qa`),s=o||`agent`,c=(t||``).trim(),[l,u]=(0,g.useState)(zC),[d,f]=(0,g.useState)({}),[p,m]=(0,g.useState)(!1),[h,_]=(0,g.useState)(``),v=l[s]||sC(s),y=(0,g.useMemo)(()=>lC(c),[c]),b=(0,g.useMemo)(()=>dC(s,v),[s,v]);(0,g.useEffect)(()=>{if(!r||!n)return;let e=l[n];r(!uC(n,e))},[l,n,r]),(0,g.useEffect)(()=>{y.length===0&&b.length===0||f(e=>{let t={...e},n=!1;return[...y,...b].forEach(e=>{t[e]||(t[e]=!0,n=!0)}),n?t:e})},[y,b]);let x=t=>{a(e,`qa`,{optedIn:!0,saved:!1,accessLevel:t})},S=(e,t)=>{u(n=>({...n,[s]:{...n[s],[e]:t}}))},C=()=>{if(uC(s,v))return;let e=(tC.find(e=>e.value===s)?.label||s).toLowerCase();u(e=>({...e,[s]:sC(s)})),_(`Quality assurance ${e} reset to default.`),m(!0),setTimeout(()=>m(!1),4e3)},w=e=>{f(t=>({...t,[e]:!t[e]}))},T=nC.every(e=>d[e.id]);return(0,V.jsxs)(gC,{children:[p&&(0,V.jsx)(hC,{children:(0,V.jsxs)(yh,{type:`success`,children:[(0,V.jsx)(yh.Title,{children:h}),(0,V.jsx)(yh.Close,{"aria-label":`Close`,onClick:()=>m(!1)})]})}),(0,V.jsx)(_C,{children:tC.map(t=>{let n=l[t.value],r=!uC(t.value,n);return(0,V.jsxs)(vC,{children:[(0,V.jsx)(yC,{name:`qa-dense-access-${e}`,value:t.value,checked:s===t.value,onChange:()=>x(t.value)}),(0,V.jsxs)(bC,{children:[(0,V.jsxs)(xC,{children:[(0,V.jsx)(SC,{children:Y(t.label,c)}),r&&(0,V.jsx)(CC,{children:`Customized`})]}),(0,V.jsx)(wC,{children:Y(t.description,c)})]})]},t.value)})}),(0,V.jsxs)(TC,{children:[(0,V.jsx)(EC,{onClick:C,children:`Reset to default`}),(0,V.jsx)(DC,{onClick:()=>{if(T){f({});return}f(Object.fromEntries(nC.map(e=>[e.id,!0])))},children:T?`Close all`:`Open all`})]}),(0,V.jsx)(OC,{children:nC.map(e=>{let t=!!d[e.id],n=RC(e,v);return(0,V.jsxs)(kC,{children:[(0,V.jsxs)(AC,{$open:t,"aria-expanded":t,onClick:()=>w(e.id),children:[(0,V.jsxs)(`span`,{children:[(0,V.jsx)(jC,{children:Y(e.title,c)}),(0,V.jsxs)(MC,{children:[n,`/`,e.permissions.length,` on`]})]}),(0,V.jsx)(NC,{$open:t,children:(0,V.jsx)(LC,{})})]}),t&&(0,V.jsx)(PC,{children:e.permissions.map(e=>(0,V.jsxs)(FC,{children:[(0,V.jsx)(IC,{checked:!!v[e.id],onChange:t=>S(e.id,t.target.checked)}),Y(e.label,c)]},e.id))})]},e.id)})})]})}var VC=B.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id='notifications.notification'] {
    min-width: 410px;
  }
`,HC=B.div`
  padding-bottom: 8px;
`,UC=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,WC=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`,GC=B.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,KC=B.div`
  display: flex;
  flex-direction: column;
`,qC=B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,JC=B.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
`,YC=B(xS).attrs({size:`small`,isPill:!0})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: #fae7d7;
  color: #4a290c;

  &:hover {
    color: #4a290c;
  }
`,XC=B.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;
`,ZC=B.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 32px;
`,QC=B(Zp).attrs({isBasic:!0,size:`small`})`
  flex-shrink: 0;
`,$C=B.div`
  min-height: ${e=>e.$minHeight?`${e.$minHeight}px`:`0`};
`,ew=B.p`
  margin: 24px 0 12px;
  font-size: 14px;
  line-height: 20px;
  color: #646864;
`,tw=B.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`,nw=B.button.attrs({type:`button`})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin: 0;
  padding: 16px;
  border: 1px solid ${e=>e.$hit?`#1f73b7`:`#dcdcda`};
  border-radius: 8px;
  background: ${e=>e.$hit?`#f0f7fc`:`#fff`};
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: #2f3130;
  transition: border-color 120ms ease, background 120ms ease;

  &:hover {
    border-color: #999b97;
    background: #f7f7f7;
  }

  &:focus-visible {
    outline: 2px solid #1f73b7;
    outline-offset: 2px;
  }
`,rw=B.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`,iw=B.span`
  font-size: 13px;
  line-height: 18px;
  color: #646864;
`,aw=B.span`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: #646864;
`,ow=B.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  margin: 24px 0 16px;
  font-size: 14px;
  line-height: 20px;
`,sw=B.button.attrs({type:`button`})`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: #1f73b7;
  cursor: pointer;
  font: inherit;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`,cw=B.span`
  color: #999b97;
`,lw=B.span`
  font-weight: 600;
  color: #2f3130;
`,uw=B.h3`
  margin: 0 0 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #2f3130;
`,dw=B.p`
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 20px;
  color: #646864;
`,fw=B.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,pw=B.h4`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 600;
  color: #646864;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,mw=B.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #2f3130;
  cursor: pointer;
`,hw=B.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-top: 2px;
  accent-color: #1f73b7;
  cursor: pointer;
`;function gw(e,t){return e.filter(e=>t[e.id]).length}function _w(e){return e.groups.reduce((e,t)=>e+t.permissions.length,0)}function vw(e,t){return e.groups.reduce((e,n)=>e+gw(n.permissions,t),0)}function yw(){return Object.fromEntries(tC.map(e=>[e.value,sC(e.value)]))}function bw({roleId:e,query:t,packageAccessLevel:n,onPackageDivergenceChange:r}){let{getProductAccess:i,updateProductAccess:a}=Bl(),{accessLevel:o}=i(e,`qa`),s=o||`agent`,c=(t||``).trim(),[l,u]=(0,g.useState)(yw),[d,f]=(0,g.useState)(null),[p,m]=(0,g.useState)(0),[h,_]=(0,g.useState)(!1),[v,y]=(0,g.useState)(``),b=(0,g.useRef)(null),x=(0,g.useRef)(null),S=(0,g.useRef)(null),C=l[s]||sC(s),w=(0,g.useMemo)(()=>pC(c),[c]),T=rC.find(e=>e.id===d)||null,E=()=>{if(!x.current)return;let e=x.current.offsetHeight;m(t=>Math.max(t,e))},D=()=>{b.current&&(S.current=b.current.getBoundingClientRect().top)},O=e=>{D(),E(),f(e)},k=()=>{D(),E(),f(null)};(0,g.useEffect)(()=>{if(!r||!n)return;let e=l[n];r(!uC(n,e))},[l,n,r]),(0,g.useEffect)(()=>{c&&w.length===1&&w[0]!==d&&O(w[0])},[c,w]),(0,g.useLayoutEffect)(()=>{if(S.current==null||!b.current)return;let e=b.current.getBoundingClientRect().top-S.current;if(S.current=null,Math.abs(e)<.5)return;let t=b.current.parentElement;for(;t&&t!==document.body;){let n=window.getComputedStyle(t);if(/(auto|scroll)/.test(n.overflowY)&&t.scrollHeight>t.clientHeight){t.scrollTop+=e;return}t=t.parentElement}window.scrollBy(0,e)},[d]),(0,g.useLayoutEffect)(()=>{if(!x.current)return;let e=x.current.offsetHeight;m(t=>Math.max(t,e))},[d,C]);let A=t=>{a(e,`qa`,{optedIn:!0,saved:!1,accessLevel:t})},j=(e,t)=>{u(n=>({...n,[s]:{...n[s],[e]:t}}))};return(0,V.jsxs)(HC,{ref:b,children:[h&&(0,V.jsx)(VC,{children:(0,V.jsxs)(yh,{type:`success`,children:[(0,V.jsx)(yh.Title,{children:v}),(0,V.jsx)(yh.Close,{"aria-label":`Close`,onClick:()=>_(!1)})]})}),(0,V.jsx)(UC,{children:tC.map(t=>{let n=l[t.value],r=!uC(t.value,n);return(0,V.jsxs)(WC,{children:[(0,V.jsx)(GC,{name:`qa-domain-access-${e}`,value:t.value,checked:s===t.value,onChange:()=>A(t.value)}),(0,V.jsxs)(KC,{children:[(0,V.jsxs)(qC,{children:[(0,V.jsx)(JC,{children:Y(t.label,c)}),r&&(0,V.jsx)(YC,{children:`Customized`})]}),(0,V.jsx)(XC,{children:Y(t.description,c)})]})]},t.value)})}),(0,V.jsx)(ZC,{children:(0,V.jsx)(QC,{onClick:()=>{if(uC(s,C))return;let e=(tC.find(e=>e.value===s)?.label||s).toLowerCase();u(e=>({...e,[s]:sC(s)})),y(`Quality assurance ${e} reset to default.`),_(!0),setTimeout(()=>_(!1),4e3)},children:`Reset to default`})}),(0,V.jsx)($C,{ref:x,$minHeight:p,children:T?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(ow,{children:[(0,V.jsx)(sw,{onClick:k,children:`All domains`}),(0,V.jsx)(cw,{children:`/`}),(0,V.jsx)(lw,{children:T.title})]}),(0,V.jsx)(uw,{children:Y(T.title,c)}),(0,V.jsx)(dw,{children:Y(T.description,c)}),T.groups.map(e=>(0,V.jsxs)(fw,{children:[T.groups.length>1&&(0,V.jsx)(pw,{children:Y(e.title,c)}),e.permissions.map(e=>(0,V.jsxs)(mw,{children:[(0,V.jsx)(hw,{checked:!!C[e.id],onChange:t=>j(e.id,t.target.checked)}),Y(e.label,c)]},e.id))]},e.id))]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ew,{children:`Choose a domain to review its settings. You only see one area at a time.`}),(0,V.jsx)(tw,{children:rC.map(e=>{let t=_w(e),n=vw(e,C),r=w.includes(e.id);return(0,V.jsxs)(nw,{$hit:r&&!!c,onClick:()=>O(e.id),children:[(0,V.jsx)(rw,{children:Y(e.title,c)}),(0,V.jsx)(iw,{children:Y(e.description,c)}),(0,V.jsxs)(aw,{children:[n,`/`,t,` on`]})]},e.id)})})]})})]})}var xw=B.tbody.attrs({"data-garden-id":`tables.body`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledBody`,componentId:`sc-14ud6y-0`})([``,`;`],H),Sw=B.caption.attrs({"data-garden-id":`tables.caption`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCaption`,componentId:`sc-113y327-0`})([`display:table-caption;text-align:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,H),Cw=B.tr.withConfig({displayName:`StyledBaseRow`,componentId:`sc-1t4zqg4-0`})([`display:table-row;transition:background-color 0.1s ease-in-out;`,` `,``],({theme:e})=>z([`border-bottom:`,`;vertical-align:top;box-sizing:border-box;`],e.borders.sm),({theme:e,$isStriped:t})=>{let n=U({variable:`border.subtle`,theme:e}),r=U({variable:`background.subtle`,transparency:e.opacity[100],light:{offset:300},dark:{offset:-600},theme:e});return z([`border-bottom-color:`,`;background-color:`,`;`],n,t&&r)}),ww=e=>e.$size===`large`?`${e.theme.space.base*16}px`:e.$size===`small`?`${e.theme.space.base*8}px`:`${e.theme.space.base*10}px`,Tw=B($p).attrs({"data-garden-id":`tables.overflow_button`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledOverflowButton`,componentId:`sc-1eba2ml-0`})([`margin-top:calc(`,` - 1em);width:100%;min-width:unset;height:`,`;font-size:inherit;`,`;`],e=>Do(`${ww(e)} / 2`),`2em`,H),Ew=`tables.header_row`,Dw=e=>e.$size===`large`?`${e.theme.space.base*18}px`:e.$size===`small`?`${e.theme.space.base*10}px`:`${e.theme.space.base*12}px`,Ow=B(Cw).attrs({"data-garden-id":Ew,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledHeaderRow`,componentId:`sc-16ogvdx-0`})([`font-weight:`,`;`,` `,` `,`{opacity:1;}`,`;`],e=>e.theme.fontWeights.semibold,e=>{let t=Dw(e);return z([`height:`,`;vertical-align:bottom;`,`{margin-top:0;margin-bottom:calc(`,` - 1em);}`],t,Tw,Do(`${t} / 2`))},({theme:e})=>z([`border-bottom-color:`,`;`],U({variable:`border.default`,theme:e})),Tw,H),kw=`tables.table`,Aw=e=>`${e.theme.space.base*5}px`,jw=B.table.attrs({"data-garden-id":kw,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledTable`,componentId:`sc-gje7na-0`})([`display:table;border:none;width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;line-height:`,`;color:`,`;font-size:`,`;direction:`,`;`,`;`],e=>Aw(e),e=>U({variable:`foreground.default`,theme:e.theme}),e=>e.theme.fontSizes.md,e=>e.theme.rtl&&`rtl`,H),Mw=`tables.cell`,Nw=z([`overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`]),Pw=e=>{let t=`border-box`,n,r=e.width,i;return e.$hasOverflow?(t=`content-box`,r=`2em`,i=`inherit`,n=e.theme.rtl?`0 0 0 ${e.theme.space.base}px`:`0 ${e.theme.space.base}px 0 0`):n=`${Do(`(${ww(e)} - ${Aw(e)}) / 2`)} ${`${e.theme.space.base*3}px`}`,e.$isMinimum&&(t=`content-box`,r=`1em`),z([`box-sizing:`,`;padding:`,`;width:`,`;height:`,`;`],t,n,r,i)},Fw=B.td.attrs({"data-garden-id":Mw,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCell`,componentId:`sc-8hpncx-0`})([`display:table-cell;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out;`,`;`,`;`,`;`],e=>Pw(e),e=>e.$isTruncated&&Nw,H),Iw=`tables.sortable`,Lw=B.div.withConfig({displayName:`StyledSortableButton__StyledBaseIconWrapper`,componentId:`sc-2s1dli-0`})([`display:flex;position:absolute;top:0;`,`:0;align-items:center;justify-content:center;opacity:0;width:`,`;height:100%;color:inherit;fill:inherit;`],e=>e.theme.rtl?`left`:`right`,e=>e.theme.iconSizes.sm),Rw=B(Lw).withConfig({displayName:`StyledSortableButton__StyledSortableStrokeIconWrapper`,componentId:`sc-2s1dli-1`})([``]),zw=B(Lw).withConfig({displayName:`StyledSortableButton__StyledSortableFillIconWrapper`,componentId:`sc-2s1dli-2`})([``]),Bw=B.button.attrs({"data-garden-id":Iw,"data-garden-version":`9.15.6`,type:`button`}).withConfig({displayName:`StyledSortableButton`,componentId:`sc-2s1dli-3`})([`position:relative;transition:box-shadow 0.1s ease-in-out;border:none;border-radius:`,`;background-color:transparent;cursor:pointer;padding:0;padding-`,`:`,`;width:`,`;text-decoration:none;color:inherit;font-family:inherit;font-size:inherit;font-weight:`,`;`,`{opacity:`,`;}`,`{opacity:`,`;}&:hover,`,`{text-decoration:none;}`,` `,`;`],e=>e.theme.borderRadii.sm,e=>e.theme.rtl?`left`:`right`,e=>Do(`${e.theme.space.base} + ${e.theme.iconSizes.sm}`),e=>e.width,e=>e.theme.fontWeights.semibold,Rw,e=>e.$sort===void 0&&1,zw,e=>e.$sort!==void 0&&1,Ec,({theme:e,$sort:t})=>{let n=U({variable:`foreground.subtle`,transparency:e.opacity[200],theme:e}),r=U({variable:`foreground.subtle`,theme:e}),i=U({variable:`foreground.primary`,theme:e}),a=U({variable:`foreground.primary`,theme:e,dark:{offset:-100},transparency:e.opacity[200]}),o=r,s=r;return t===`asc`?(o=r,s=n):t===`desc`&&(o=n,s=r),z([``,`{color:`,`;fill:`,`;}`,`{color:`,`;fill:`,`;}&:hover,`,`{color:`,`;`,`;`,` `,`}`,``],Rw,r,r,zw,o,s,Ec,i,t===void 0&&`
        ${zw} {
          opacity: 1;
          color: ${i};
          fill: ${i};
        }

        ${Rw} {
          opacity: 0;
        }
      `,t===`asc`&&`
        ${zw} {
          color: ${i};
          fill: ${a};
        }
      `,t===`desc`&&`
        ${zw} {
          color: ${a};
          fill: ${i};
        }
      `,Dc({theme:e}))},H),Vw=`tables.header_cell`,Hw=z([``,`{max-width:100%;overflow:hidden;text-overflow:ellipsis;}`],Bw),Uw=e=>{let t;return e.$hasOverflow||(t=Do(`(${ww(e)} - ${Aw(e)}) / 2`)),z([`padding-top:`,`;padding-bottom:`,`;`],t,t)},Ww=B(Fw).attrs({as:`th`,"data-garden-id":Vw,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledHeaderCell`,componentId:`sc-fzagoe-0`})([`text-align:`,`;font-weight:inherit;`,` `,` `,`;`],e=>{if(!e.$hasOverflow)return e.theme.rtl?`right`:`left`},e=>Uw(e),e=>e.$isTruncated&&Hw,H),Gw=`tables.head`,Kw=({theme:e})=>{let t=U({variable:`border.default`,theme:e});return z([`background-color:`,`;& > `,`:last-child{border-bottom-color:transparent;& > `,`{box-shadow:inset 0 -`,` 0 `,`;}}`],U({variable:`background.default`,theme:e}),Ow,Ww,e.borderWidths.sm,t)},qw=()=>z([`position:sticky;top:0;z-index:1;`]),Jw=B.thead.attrs({"data-garden-id":Gw,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledHead`,componentId:`sc-spf23a-0`})([``,` `,` `,`;`],e=>e.$isSticky&&qw(),Kw,H),Yw=B(Cw).attrs({"data-garden-id":`tables.group_row`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledGroupRow`,componentId:`sc-mpd0r8-0`})([``,` `,` `,`;`],e=>{let t=`${e.theme.space.base*8}px`,n=Aw(e);return z([`height:`,`;line-height:`,`;font-size:`,`;`,`{padding:`,` `,`px;}`],t,n,e.theme.fontSizes.sm,Fw,Do(`(${t} - ${n}) / 2`),e.theme.space.base*3)},({theme:e})=>z([`background-color:`,`;`],U({variable:`background.subtle`,transparency:e.opacity[100],light:{offset:300},dark:{offset:-600},theme:e})),H),Xw=B.div.attrs({"data-garden-id":`tables.hidden_cell`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledHiddenCell`,componentId:`sc-1x454xw-0`})([``,` `,`;`],Po(),H),Zw=B(Cw).attrs({"data-garden-id":`tables.row`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledRow`,componentId:`sc-ek66ow-0`})([``,` `,` `,`;`],e=>z([`height:`,`;`],ww(e)),({theme:e,$isFocused:t,$isSelected:n,$isHovered:r,$isReadOnly:i})=>{let a=U({variable:`background.primaryEmphasis`,transparency:e.opacity[100],dark:{offset:-100},theme:e}),o=U({variable:`border.primaryEmphasis`,transparency:e.opacity[200],dark:{offset:-100},theme:e}),s=U({variable:`background.primaryEmphasis`,transparency:e.opacity[200],dark:{offset:-100},theme:e}),c=U({variable:`border.primaryEmphasis`,light:{offset:-400},dark:{offset:300},theme:e}),l=U({variable:`background.primaryEmphasis`,transparency:e.opacity[300],dark:{offset:-100},theme:e}),u=U({variable:`border.primaryEmphasis`,theme:e}),d=`inset ${e.rtl?`-`:``}${e.shadowWidths.md} 0 0 0 ${u}`,f,p,m,h;return n?(f=r?l:s,p=c,m=c,h=l):r?(f=a,p=o):i||(m=o,h=a),z([`border-bottom-color:`,`;background-color:`,`;&:hover{border-bottom-color:`,`;background-color:`,`;`,`{opacity:1;}}&:focus{outline:none;}`,`:first-of-type{box-shadow:`,`;&:focus{box-shadow:`,`;}}`],p,f,m,h,Tw,Fw,t&&d,d)},H),Qw=(0,g.forwardRef)((e,t)=>g.createElement(xw,Object.assign({ref:t},e)));Qw.displayName=`Table.Body`;var $w=(0,g.forwardRef)((e,t)=>g.createElement(Sw,Object.assign({ref:t},e)));$w.displayName=`Table.Caption`;var eT=g.createContext({size:`medium`,isReadOnly:!1}),tT=()=>(0,g.useContext)(eT),nT=g.forwardRef(({hidden:e,isMinimum:t,isTruncated:n,hasOverflow:r,...i},a)=>{let{size:o}=tT();return g.createElement(Fw,Object.assign({ref:a,$size:o,$isMinimum:t,$isTruncated:n,$hasOverflow:r},i),e&&i.children?g.createElement(Xw,null,i.children):i.children)});nT.displayName=`Table.Cell`,nT.propTypes={isMinimum:K.default.bool,isTruncated:K.default.bool,hasOverflow:K.default.bool,width:K.default.oneOfType([K.default.string,K.default.number])};var rT=(0,g.forwardRef)((e,t)=>{let{size:n}=tT();return g.createElement(Yw,Object.assign({ref:t,$size:n},e))});rT.displayName=`Table.GroupRow`;var iT=(0,g.forwardRef)(({isSticky:e,...t},n)=>g.createElement(Jw,Object.assign({ref:n,$isSticky:e},t)));iT.displayName=`Table.Head`;var aT=(0,g.forwardRef)(({hidden:e,isMinimum:t,isTruncated:n,hasOverflow:r,...i},a)=>{let{size:o}=tT();return g.createElement(Ww,Object.assign({ref:a,$size:o,$isMinimum:t,$isTruncated:n,$hasOverflow:r},i),e&&i.children?g.createElement(Xw,null,i.children):i.children)});aT.displayName=`Table.HeaderCell`,aT.propTypes=nT.propTypes;var oT=g.forwardRef((e,t)=>{let{size:n}=tT();return g.createElement(Ow,Object.assign({ref:t,$size:n},e))});oT.displayName=`Table.HeaderRow`;var sT;function cT(){return cT=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cT.apply(null,arguments)}var lT=function(e){return g.createElement(`svg`,cT({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),sT||=g.createElement(`path`,{fill:`currentColor`,d:`M9.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z`}))},uT=(0,g.forwardRef)((e,t)=>{let{size:n}=tT();return g.createElement(Tw,Object.assign({type:`button`,$size:n,ref:t},e,{focusInset:!0}),g.createElement(lT,null))});uT.displayName=`Table.OverflowButton`;var dT=(0,g.forwardRef)(({onFocus:e,onBlur:t,isSelected:n,isStriped:r,isHovered:i,isFocused:a,...o},s)=>{let[c,l]=(0,g.useState)(!1),{size:u,isReadOnly:d}=tT(),f=(0,g.useMemo)(()=>a===void 0?!d&&c:a,[a,c,d]),p=(0,g.useMemo)(()=>q(e,()=>{l(!0)}),[e,l]),m=(0,g.useMemo)(()=>q(t,()=>{l(!1)}),[t,l]);return g.createElement(Zw,Object.assign({onFocus:p,onBlur:m,ref:s,$size:u,$isReadOnly:d,$isFocused:f,$isHovered:i,$isStriped:r,$isSelected:n},o,{tabIndex:d?void 0:-1}))});dT.displayName=`Table.Row`,dT.propTypes={isStriped:K.default.bool,isFocused:K.default.bool,isHovered:K.default.bool,isSelected:K.default.bool};var fT;function pT(){return pT=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pT.apply(null,arguments)}var mT=function(e){return g.createElement(`svg`,pT({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),fT||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M2.5 4L5.6.9c.2-.2.5-.2.7 0L9.5 4m-7 4l3.1 3.1c.2.2.5.2.7 0L9.5 8`}))},hT,gT;function _T(){return _T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_T.apply(null,arguments)}var vT=function(e){return g.createElement(`svg`,_T({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),hT||=g.createElement(`path`,{fill:`currentColor`,d:`M10 5H2a.5.5 0 01-.46-.31.47.47 0 01.11-.54L5.29.5A1 1 0 016.7.5l3.65 3.65a.49.49 0 01.11.54A.51.51 0 0110 5z`}),gT||=g.createElement(`path`,{d:`M2 7a.5.5 0 00-.46.31.47.47 0 00.11.54L5.3 11.5a1 1 0 001.41 0l3.65-3.65a.49.49 0 00.11-.54A.53.53 0 0010 7z`}))},yT=[`small`,`medium`,`large`],bT=[`asc`,`desc`],xT=(0,g.forwardRef)(({sort:e,cellProps:t={},width:n,children:r,...i},a)=>{let{isMinimum:o,isTruncated:s,hasOverflow:c,...l}=t,u=`none`;e===`asc`?u=`ascending`:e===`desc`&&(u=`descending`);let d=e===void 0?mT:vT;return g.createElement(Ww,Object.assign({"aria-sort":u,width:n,$isMinimum:o,$isTruncated:s,$hasOverflow:c},l),g.createElement(Bw,Object.assign({$sort:e,ref:a},i),r,g.createElement(Rw,null,g.createElement(d,null)),g.createElement(zw,null,g.createElement(vT,null))))});xT.displayName=`Table.SortableCell`,xT.propTypes={sort:K.default.oneOf(bT),cellProps:K.default.any,width:K.default.oneOfType([K.default.string,K.default.number])};var ST=g.forwardRef(({isReadOnly:e,size:t=`medium`,...n},r)=>{let i=(0,g.useMemo)(()=>({size:t,isReadOnly:e}),[t,e]);return g.createElement(eT.Provider,{value:i},g.createElement(jw,Object.assign({ref:r},n)))});ST.displayName=`Table`,ST.propTypes={size:K.default.oneOf(yT),isReadOnly:K.default.bool};var X=ST;X.Body=Qw,X.Caption=$w,X.Cell=nT,X.GroupRow=rT,X.Head=iT,X.HeaderCell=aT,X.HeaderRow=oT,X.OverflowButton=uT,X.Row=dT,X.SortableCell=xT;var CT=nC.flatMap(e=>e.permissions.map(t=>({...t,groupTitle:e.title}))),wT=B.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id='notifications.notification'] {
    min-width: 410px;
  }
`,TT=B.div`
  padding-bottom: 8px;
`,ET=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,DT=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`,OT=B.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,kT=B.div`
  display: flex;
  flex-direction: column;
`,AT=B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,jT=B.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
`,MT=B(xS).attrs({size:`small`,isPill:!0})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: #fae7d7;
  color: #4a290c;

  &:hover {
    color: #4a290c;
  }
`,NT=B(xS).attrs({size:`small`,isPill:!0})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: ${e=>e.$added?`#ddf0c9`:`#f7e5e6`};
  color: ${e=>e.$added?`#25390f`:`#5f1c20`};

  &:hover {
    color: ${e=>e.$added?`#25390f`:`#5f1c20`};
  }
`,PT=B.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;
`,FT=B.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`,IT=B.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
`,LT=B(Zp).attrs({isBasic:!0,size:`small`})`
  flex-shrink: 0;
`,RT=B.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  border-top: 1px solid #e9ebed;
`,zT=B.div`
  border-bottom: 1px solid #e9ebed;
  background: transparent;
`,BT=B.button.attrs({type:`button`})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
`,VT=B.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`,HT=B.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #646864;
  margin-left: 8px;
`,UT=B.span`
  display: inline-flex;
  flex-shrink: 0;
  color: #646864;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    transform: ${e=>e.$open?`rotate(180deg)`:`none`};
    transition: transform 120ms ease;
  }
`,WT=B.div`
  padding: 0 0 16px;
`,GT=B.p`
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 20px;
  color: #646864;
`,KT=B.div`
  padding: 16px;
  border: 1px dashed #dcdcda;
  border-radius: 8px;
  background: #fafafa;
  font-size: 14px;
  line-height: 20px;
  color: #646864;
`,qT=B.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,JT=B.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid #eae9e8;
  border-radius: 8px;
  background: #fff;
`,YT=B.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,XT=B.span`
  display: inline-flex;
  align-items: center;
  height: 16px;
  margin-top: 4px;
  padding: 0 6px;
  border-radius: 99px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  width: fit-content;
  background: ${e=>e.$added?`#ddf0c9`:`#f7e5e6`};
  color: ${e=>e.$added?`#25390f`:`#5f1c20`};
`,ZT=B.span`
  font-size: 14px;
  line-height: 20px;
  color: #2f3130;
`,QT=B.span`
  font-size: 12px;
  line-height: 16px;
  color: #646864;
`,$T=B(Zp).attrs({isBasic:!0,size:`small`})`
  flex-shrink: 0;
`,eE=B.div`
  max-height: 420px;
  overflow: auto;
  background: ${G.white};
`,tE=B(X)`
  width: 100%;

  [data-garden-id='tables.header_cell'],
  [data-garden-id='tables.cell'] {
    padding: 0 12px !important;
    box-shadow: none !important;
  }

  [data-garden-id='tables.header_cell'] {
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    background-color: ${G.grey[100]} !important;
    background-clip: padding-box;
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

  [data-garden-id='tables.cell'] {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    border-bottom: 1px solid ${G.grey[200]} !important;
  }

  /* Hover / focus only — no persistent selected (blue) row. */
  [data-garden-id='tables.row'],
  [data-garden-id='tables.row'][aria-selected='true'],
  [data-garden-id='tables.row'][data-garden-selected='true'] {
    background-color: transparent !important;
  }

  [data-garden-id='tables.row']:hover,
  [data-garden-id='tables.row']:hover [data-garden-id='tables.cell'] {
    background-color: ${G.grey[100]} !important;
  }

  [data-garden-id='tables.row']:focus-visible,
  [data-garden-id='tables.row']:focus-visible [data-garden-id='tables.cell'] {
    background-color: ${G.grey[100]} !important;
  }

  [data-garden-id='tables.row']:last-child [data-garden-id='tables.cell'] {
    border-bottom: none !important;
  }
`,nE=B(D_)`
  margin: 0;
  display: flex;
  align-items: center;
`,rE=B.span`
  display: inline-flex;
  align-items: center;
  min-height: 16px;
`,iE=B.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  columns: 2;
  column-gap: 24px;
`,aE=B.li`
  break-inside: avoid;
  font-size: 13px;
  line-height: 20px;
  color: ${e=>e.$on?`#2f3130`:`#646864`};
  margin-bottom: 4px;

  &::before {
    content: ${e=>e.$on?`"✓ "`:`"– "`};
  }
`;function oE(){return(0,V.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,V.jsx)(`path`,{d:`M4 6l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function sE(e,t){let n=sC(e);return CT.filter(e=>!!t[e.id]!=!!n[e.id]).map(e=>({...e,added:!!t[e.id]}))}function cE(){return Object.fromEntries(tC.map(e=>[e.value,sC(e.value)]))}function lE({roleId:e,query:t,packageAccessLevel:n,onPackageDivergenceChange:r}){let{getProductAccess:i,updateProductAccess:a}=Bl(),{accessLevel:o}=i(e,`qa`),s=o||`agent`,c=(t||``).trim(),[l,u]=(0,g.useState)(cE),[d,f]=(0,g.useState)({}),[p,m]=(0,g.useState)(!1),[h,_]=(0,g.useState)(``),v=l[s]||sC(s),y=tC.find(e=>e.value===s)?.label||`Agent`,b=(0,g.useMemo)(()=>sE(s,v),[s,v]),x=uC(s,v),S=sC(s),C=(0,g.useMemo)(()=>CT.filter(e=>!c||`${e.label} ${e.groupTitle}`.toLowerCase().includes(c.toLowerCase())),[c]),w=(0,g.useMemo)(()=>{if(C.length===0)return{checked:!1,indeterminate:!1};let e=C.reduce((e,t)=>e+ +!!v[t.id],0);return{checked:e===C.length,indeterminate:e>0&&e<C.length}},[C,v]);(0,g.useEffect)(()=>{if(!r||!n)return;let e=l[n];r(!uC(n,e))},[l,n,r]);let T=e=>{f(t=>({...t,[e]:!t[e]}))},E=t=>{a(e,`qa`,{optedIn:!0,saved:!1,accessLevel:t})},D=(e,t)=>{u(n=>({...n,[s]:{...n[s],[e]:t}}))},O=e=>{u(t=>{let n={...t[s]};for(let t of C)n[t.id]=e;return{...t,[s]:n}})},k=e=>{u(t=>({...t,[s]:{...t[s],[e]:!!S[e]}}))},A=()=>{x||(u(e=>({...e,[s]:sC(s)})),_(`Quality assurance ${y.toLowerCase()} reset to default.`),m(!0),setTimeout(()=>m(!1),4e3))},j=b.length===0?`Inheriting ${y}`:`${b.length} override${b.length===1?``:`s`}`;return(0,V.jsxs)(TT,{children:[p&&(0,V.jsx)(wT,{children:(0,V.jsxs)(yh,{type:`success`,children:[(0,V.jsx)(yh.Title,{children:h}),(0,V.jsx)(yh.Close,{"aria-label":`Close`,onClick:()=>m(!1)})]})}),(0,V.jsx)(FT,{children:`Role type`}),(0,V.jsx)(ET,{children:tC.map(t=>{let n=!uC(t.value,l[t.value]);return(0,V.jsxs)(DT,{children:[(0,V.jsx)(OT,{name:`qa-layer-access-${e}`,value:t.value,checked:s===t.value,onChange:()=>E(t.value)}),(0,V.jsxs)(kT,{children:[(0,V.jsxs)(AT,{children:[(0,V.jsx)(jT,{children:Y(t.label,c)}),n&&(0,V.jsx)(MT,{children:`Customized`})]}),(0,V.jsx)(PT,{children:Y(t.description,c)})]})]},t.value)})}),(0,V.jsxs)(RT,{children:[(0,V.jsxs)(zT,{children:[(0,V.jsxs)(BT,{"aria-expanded":!!d.overrides,onClick:()=>T(`overrides`),children:[(0,V.jsxs)(`span`,{children:[(0,V.jsx)(VT,{children:`Overrides`}),(0,V.jsx)(HT,{children:j})]}),(0,V.jsx)(UT,{$open:d.overrides,children:(0,V.jsx)(oE,{})})]}),d.overrides&&(0,V.jsxs)(WT,{children:[(0,V.jsxs)(GT,{children:[`Starts from the account’s recommended Agent baseline, then applies`,` `,y,`. This role only stores exceptions on top of that type — add overrides when this role must differ.`]}),b.length===0?(0,V.jsxs)(KT,{children:[`No overrides — this role fully inherits `,y,` QA access.`]}):(0,V.jsx)(qT,{children:b.map(e=>(0,V.jsxs)(JT,{children:[(0,V.jsxs)(YT,{children:[(0,V.jsx)(ZT,{children:Y(e.label,c)}),(0,V.jsx)(QT,{children:e.groupTitle}),(0,V.jsx)(XT,{$added:e.added,children:e.added?`Added`:`Removed`})]}),(0,V.jsx)($T,{onClick:()=>k(e.id),children:`Remove`})]},e.id))})]})]}),(0,V.jsxs)(zT,{children:[(0,V.jsxs)(BT,{"aria-expanded":!!d.exception,onClick:()=>T(`exception`),children:[(0,V.jsx)(`span`,{children:(0,V.jsx)(VT,{children:`Add an exception`})}),(0,V.jsx)(UT,{$open:d.exception,children:(0,V.jsx)(oE,{})})]}),d.exception&&(0,V.jsxs)(WT,{children:[(0,V.jsxs)(GT,{children:[`Check or uncheck a permission to flip it relative to `,y,`. That creates an override on this role — rows stay put; Added / Removed marks the delta.`]}),(0,V.jsx)(eE,{children:(0,V.jsxs)(tE,{children:[(0,V.jsx)(X.Head,{isSticky:!0,children:(0,V.jsxs)(X.HeaderRow,{children:[(0,V.jsx)(X.HeaderCell,{isMinimum:!0,children:(0,V.jsx)(nE,{children:(0,V.jsx)(M_,{checked:w.checked,indeterminate:w.indeterminate,onChange:e=>O(e.target.checked),children:(0,V.jsx)(D_.Label,{hidden:!0,children:`Select all permissions`})})})}),(0,V.jsx)(X.HeaderCell,{children:`Permission`}),(0,V.jsx)(X.HeaderCell,{width:120,children:`Status`})]})}),(0,V.jsx)(X.Body,{children:C.map(e=>{let t=!!v[e.id],n=t!==!!S[e.id];return(0,V.jsxs)(X.Row,{children:[(0,V.jsx)(X.Cell,{isMinimum:!0,children:(0,V.jsx)(nE,{children:(0,V.jsx)(M_,{checked:t,onChange:t=>D(e.id,t.target.checked),children:(0,V.jsx)(D_.Label,{hidden:!0,children:e.label})})})}),(0,V.jsx)(X.Cell,{children:Y(e.label,c)}),(0,V.jsx)(X.Cell,{children:(0,V.jsx)(rE,{children:n&&(0,V.jsx)(NT,{$added:t,children:t?`Added`:`Removed`})})})]},e.id)})})]})})]})]}),(0,V.jsxs)(zT,{children:[(0,V.jsxs)(BT,{"aria-expanded":!!d.resolved,onClick:()=>T(`resolved`),children:[(0,V.jsx)(`span`,{children:(0,V.jsx)(VT,{children:`Full effective access`})}),(0,V.jsx)(UT,{$open:d.resolved,children:(0,V.jsx)(oE,{})})]}),d.resolved&&(0,V.jsxs)(WT,{children:[(0,V.jsxs)(GT,{children:[`Effective access after account baseline → `,y,` → this role’s overrides.`]}),(0,V.jsx)(iE,{children:CT.map(e=>(0,V.jsx)(aE,{$on:!!v[e.id],children:Y(e.label,c)},e.id))})]})]})]}),(0,V.jsx)(IT,{children:(0,V.jsx)(LT,{onClick:A,children:`Reset to default`})})]})}var uE=nC.flatMap(e=>e.permissions.map(t=>({...t,groupTitle:e.title})));function dE(){return[`Quality assurance`,`Role type`,`Customize permissions`,`Access summary`,`Reset to default`,`Added`,`Removed`,`Customized`,`Inherits`,...tC.flatMap(e=>[e.label,e.description]),...nC.flatMap(e=>[e.title,...e.permissions.map(e=>e.label)])].join(` `)}var fE=B.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id='notifications.notification'] {
    min-width: 410px;
  }
`,pE=B.div`
  padding-bottom: 8px;
`,mE=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,hE=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`,gE=B.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,_E=B.div`
  display: flex;
  flex-direction: column;
`,vE=B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,yE=B.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
`,bE=B(xS).attrs({size:`small`,isPill:!0})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: #fae7d7;
  color: #4a290c;

  &:hover {
    color: #4a290c;
  }
`,xE=B(xS).attrs({size:`small`,isPill:!0})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: ${e=>e.$added?`#ddf0c9`:`#f7e5e6`};
  color: ${e=>e.$added?`#25390f`:`#5f1c20`};

  &:hover {
    color: ${e=>e.$added?`#25390f`:`#5f1c20`};
  }
`,SE=B.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;
`,CE=B.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`,wE=B.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
`,TE=B.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  border-top: 1px solid #e9ebed;
`,EE=B.div`
  border-bottom: 1px solid #e9ebed;
  background: transparent;
`,DE=B.button.attrs({type:`button`})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
`,OE=B.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,kE=B.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`,AE=B.span`
  display: inline-flex;
  flex-shrink: 0;
  margin-top: 2px;
  color: #646864;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    transform: ${e=>e.$open?`rotate(180deg)`:`none`};
    transition: transform 120ms ease;
  }
`,jE=B.div`
  padding: 0 0 16px;
`,ME=B.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  columns: 2;
  column-gap: 24px;
`,NE=B.li`
  break-inside: avoid;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${e=>e.$on?`#2f3130`:`#646864`};
  margin-bottom: 4px;

  &::before {
    content: ${e=>e.$on?`"✓ "`:`"– "`};
  }
`,PE=B.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
`,FE=B(Zp).attrs({isBasic:!0,size:`small`})`
  flex-shrink: 0;
`,IE=B.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2f3130;
`,LE=B.div`
  max-height: 420px;
  overflow: auto;
  background: ${G.white};
`,RE=B(X)`
  width: 100%;

  [data-garden-id='tables.header_cell'],
  [data-garden-id='tables.cell'] {
    padding: 0 12px !important;
    box-shadow: none !important;
  }

  [data-garden-id='tables.header_cell'] {
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    background-color: ${G.grey[100]} !important;
    background-clip: padding-box;
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

  [data-garden-id='tables.cell'] {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    border-bottom: 1px solid ${G.grey[200]} !important;
  }

  /* Hover / focus only — no persistent selected (blue) row. */
  [data-garden-id='tables.row'],
  [data-garden-id='tables.row'][aria-selected='true'],
  [data-garden-id='tables.row'][data-garden-selected='true'] {
    background-color: transparent !important;
  }

  [data-garden-id='tables.row']:hover,
  [data-garden-id='tables.row']:hover [data-garden-id='tables.cell'] {
    background-color: ${G.grey[100]} !important;
  }

  [data-garden-id='tables.row']:focus-visible,
  [data-garden-id='tables.row']:focus-visible [data-garden-id='tables.cell'] {
    background-color: ${G.grey[100]} !important;
  }

  [data-garden-id='tables.row']:last-child [data-garden-id='tables.cell'] {
    border-bottom: none !important;
  }
`,zE=B(D_)`
  margin: 0;
  display: flex;
  align-items: center;
`,BE=B.span`
  display: inline-flex;
  align-items: center;
  min-height: 16px;
`;function VE(){return(0,V.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,V.jsx)(`path`,{d:`M4 6l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function HE(){return Object.fromEntries(tC.map(e=>[e.value,sC(e.value)]))}function UE({roleId:e,query:t,packageAccessLevel:n,onPackageDivergenceChange:r}){let{getProductAccess:i,updateProductAccess:a}=Bl(),{accessLevel:o}=i(e,`qa`),s=o||`agent`,c=(t||``).trim(),[l,u]=(0,g.useState)(HE),[d,f]=(0,g.useState)(!0),[p,m]=(0,g.useState)(!1),[h,_]=(0,g.useState)(!1),[v,y]=(0,g.useState)(``),b=l[s]||sC(s),x=tC.find(e=>e.value===s)?.label||`Agent`,S=uC(s,b),C=sC(s),w=(0,g.useMemo)(()=>uE.filter(e=>!c||`${e.label} ${e.groupTitle}`.toLowerCase().includes(c.toLowerCase())),[c]),T=(0,g.useMemo)(()=>{if(w.length===0)return{checked:!1,indeterminate:!1};let e=w.reduce((e,t)=>e+ +!!b[t.id],0);return{checked:e===w.length,indeterminate:e>0&&e<w.length}},[w,b]);(0,g.useEffect)(()=>{if(!r||!n)return;let e=l[n];r(!uC(n,e))},[l,n,r]);let E=t=>{a(e,`qa`,{optedIn:!0,saved:!1,accessLevel:t})},D=(e,t)=>{u(n=>({...n,[s]:{...n[s],[e]:t}}))},O=e=>{u(t=>{let n={...t[s]};for(let t of w)n[t.id]=e;return{...t,[s]:n}})};return(0,V.jsxs)(pE,{children:[h&&(0,V.jsx)(fE,{children:(0,V.jsxs)(yh,{type:`success`,children:[(0,V.jsx)(yh.Title,{children:v}),(0,V.jsx)(yh.Close,{"aria-label":`Close`,onClick:()=>_(!1)})]})}),(0,V.jsx)(CE,{children:`Role type`}),(0,V.jsx)(mE,{children:tC.map(t=>{let n=!uC(t.value,l[t.value]);return(0,V.jsxs)(hE,{children:[(0,V.jsx)(gE,{name:`qa-layer65-access-${e}`,value:t.value,checked:s===t.value,onChange:()=>E(t.value)}),(0,V.jsxs)(_E,{children:[(0,V.jsxs)(vE,{children:[(0,V.jsx)(yE,{children:Y(t.label,c)}),n&&(0,V.jsx)(bE,{children:`Customized`})]}),(0,V.jsx)(SE,{children:Y(t.description,c)})]})]},t.value)})}),(0,V.jsxs)(TE,{children:[(0,V.jsxs)(EE,{children:[(0,V.jsxs)(DE,{"aria-expanded":d,onClick:()=>f(e=>!e),children:[(0,V.jsxs)(OE,{children:[(0,V.jsx)(kE,{children:`Customize permissions`}),(0,V.jsxs)(wE,{children:[`Inherits the account baseline through `,x,`. Check or uncheck to differ from that type — rows stay put; Added / Removed marks the delta.`]})]}),(0,V.jsx)(AE,{$open:d,children:(0,V.jsx)(VE,{})})]}),d&&(0,V.jsxs)(jE,{children:[(0,V.jsx)(IE,{children:`40 permissions`}),(0,V.jsx)(LE,{children:(0,V.jsxs)(RE,{children:[(0,V.jsx)(X.Head,{isSticky:!0,children:(0,V.jsxs)(X.HeaderRow,{children:[(0,V.jsx)(X.HeaderCell,{isMinimum:!0,children:(0,V.jsx)(zE,{children:(0,V.jsx)(M_,{checked:T.checked,indeterminate:T.indeterminate,onChange:e=>O(e.target.checked),children:(0,V.jsx)(D_.Label,{hidden:!0,children:`Select all permissions`})})})}),(0,V.jsx)(X.HeaderCell,{children:`Permission`}),(0,V.jsx)(X.HeaderCell,{width:120,children:`Status`})]})}),(0,V.jsx)(X.Body,{children:w.map(e=>{let t=!!b[e.id],n=t!==!!C[e.id];return(0,V.jsxs)(X.Row,{children:[(0,V.jsx)(X.Cell,{isMinimum:!0,children:(0,V.jsx)(zE,{children:(0,V.jsx)(M_,{checked:t,onChange:t=>D(e.id,t.target.checked),children:(0,V.jsx)(D_.Label,{hidden:!0,children:e.label})})})}),(0,V.jsx)(X.Cell,{children:Y(e.label,c)}),(0,V.jsx)(X.Cell,{children:(0,V.jsx)(BE,{children:n&&(0,V.jsx)(xE,{$added:t,children:t?`Added`:`Removed`})})})]},e.id)})})]})})]})]}),(0,V.jsxs)(EE,{children:[(0,V.jsxs)(DE,{"aria-expanded":p,onClick:()=>m(e=>!e),children:[(0,V.jsxs)(OE,{children:[(0,V.jsx)(kE,{children:`Access summary`}),(0,V.jsxs)(wE,{children:[`Read-only view of what `,x,` plus this role’s changes add up to.`]})]}),(0,V.jsx)(AE,{$open:p,children:(0,V.jsx)(VE,{})})]}),p&&(0,V.jsx)(jE,{children:(0,V.jsx)(ME,{children:uE.map(e=>(0,V.jsx)(NE,{$on:!!b[e.id],children:Y(e.label,c)},e.id))})})]})]}),(0,V.jsx)(PE,{children:(0,V.jsx)(FE,{onClick:()=>{S||(u(e=>({...e,[s]:sC(s)})),y(`Quality assurance ${x.toLowerCase()} reset to default.`),_(!0),setTimeout(()=>_(!1),4e3))},children:`Reset to default`})})]})}var WE=nC.flatMap(e=>e.permissions.map(t=>({...t,groupTitle:e.title,groupId:e.id})));function GE(){return[`Quality assurance`,`Role type`,`Access summary`,`Reset to default`,`Open all`,`Close all`,`Added`,`Removed`,`Customized`,`permissions`,...tC.flatMap(e=>[e.label,e.description]),...nC.flatMap(e=>[e.title,...e.permissions.map(e=>e.label)])].join(` `)}var KE=B.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id='notifications.notification'] {
    min-width: 410px;
  }
`,qE=B.div`
  padding-bottom: 8px;
`,JE=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,YE=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`,XE=B.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,ZE=B.div`
  display: flex;
  flex-direction: column;
`,QE=B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,$E=B.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
`,eD=B(xS).attrs({size:`small`,isPill:!0})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: #fae7d7;
  color: #4a290c;

  &:hover {
    color: #4a290c;
  }
`,tD=B(xS).attrs({size:`small`,isPill:!0})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: ${e=>e.$added?`#ddf0c9`:`#f7e5e6`};
  color: ${e=>e.$added?`#25390f`:`#5f1c20`};

  &:hover {
    color: ${e=>e.$added?`#25390f`:`#5f1c20`};
  }
`,nD=B.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;
`,rD=B.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`,iD=B.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
`,aD=B.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  border-top: 1px solid #e9ebed;
`,oD=B.div`
  border-bottom: 1px solid #e9ebed;
  background: transparent;
`,sD=B.button.attrs({type:`button`})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
`,cD=B.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,lD=B.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`,uD=B.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #646864;
  margin-left: 8px;
`,dD=B.span`
  display: inline-flex;
  flex-shrink: 0;
  margin-top: 2px;
  color: #646864;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    transform: ${e=>e.$open?`rotate(180deg)`:`none`};
    transition: transform 120ms ease;
  }
`,fD=B.div`
  padding: 0 0 16px;
`,pD=B.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  columns: 2;
  column-gap: 24px;
`,mD=B.li`
  break-inside: avoid;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${e=>e.$on?`#2f3130`:`#646864`};
  margin-bottom: 4px;

  &::before {
    content: ${e=>e.$on?`"✓ "`:`"– "`};
  }
`,hD=B.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`,gD=B(Zp).attrs({isBasic:!0,size:`small`})`
  flex-shrink: 0;
`,_D=B(Zp).attrs({isBasic:!0,size:`small`})`
  flex-shrink: 0;
`,vD=B.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2f3130;
`,yD=B.div`
  max-height: 420px;
  overflow: auto;
  background: ${G.white};
`,bD=B(X)`
  width: 100%;

  [data-garden-id='tables.header_cell'],
  [data-garden-id='tables.cell'] {
    padding: 0 12px !important;
    box-shadow: none !important;
  }

  [data-garden-id='tables.header_cell'] {
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    background-color: ${G.grey[100]} !important;
    background-clip: padding-box;
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

  [data-garden-id='tables.cell'] {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    border-bottom: 1px solid ${G.grey[200]} !important;
  }

  /* Hover / focus only — no persistent selected (blue) row. */
  [data-garden-id='tables.row'],
  [data-garden-id='tables.row'][aria-selected='true'],
  [data-garden-id='tables.row'][data-garden-selected='true'] {
    background-color: transparent !important;
  }

  [data-garden-id='tables.row']:hover,
  [data-garden-id='tables.row']:hover [data-garden-id='tables.cell'] {
    background-color: ${G.grey[100]} !important;
  }

  [data-garden-id='tables.row']:focus-visible,
  [data-garden-id='tables.row']:focus-visible [data-garden-id='tables.cell'] {
    background-color: ${G.grey[100]} !important;
  }

  [data-garden-id='tables.row']:last-child [data-garden-id='tables.cell'] {
    border-bottom: none !important;
  }
`,xD=B(D_)`
  margin: 0;
  display: flex;
  align-items: center;
`,SD=B.span`
  display: inline-flex;
  align-items: center;
  min-height: 16px;
`;function CD(){return(0,V.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,V.jsx)(`path`,{d:`M4 6l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function wD(){return Object.fromEntries(tC.map(e=>[e.value,sC(e.value)]))}function TD(e,t){if(e.length===0)return{checked:!1,indeterminate:!1};let n=e.reduce((e,n)=>e+ +!!t[n.id],0);return{checked:n===e.length,indeterminate:n>0&&n<e.length}}function ED(e,t){return e.permissions.filter(e=>t[e.id]).length}function DD({rows:e,values:t,preset:n,query:r,onToggle:i,onSelectAll:a,counterLabel:o}){let s=TD(e,t);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(vD,{children:o}),(0,V.jsx)(yD,{children:(0,V.jsxs)(bD,{children:[(0,V.jsx)(X.Head,{isSticky:!0,children:(0,V.jsxs)(X.HeaderRow,{children:[(0,V.jsx)(X.HeaderCell,{isMinimum:!0,children:(0,V.jsx)(xD,{children:(0,V.jsx)(M_,{checked:s.checked,indeterminate:s.indeterminate,onChange:e=>a(e.target.checked),children:(0,V.jsx)(D_.Label,{hidden:!0,children:`Select all permissions`})})})}),(0,V.jsx)(X.HeaderCell,{children:`Permission`}),(0,V.jsx)(X.HeaderCell,{width:120,children:`Status`})]})}),(0,V.jsx)(X.Body,{children:e.map(e=>{let a=!!t[e.id],o=a!==!!n[e.id];return(0,V.jsxs)(X.Row,{children:[(0,V.jsx)(X.Cell,{isMinimum:!0,children:(0,V.jsx)(xD,{children:(0,V.jsx)(M_,{checked:a,onChange:t=>i(e.id,t.target.checked),children:(0,V.jsx)(D_.Label,{hidden:!0,children:e.label})})})}),(0,V.jsx)(X.Cell,{children:Y(e.label,r)}),(0,V.jsx)(X.Cell,{children:(0,V.jsx)(SD,{children:o&&(0,V.jsx)(tD,{$added:a,children:a?`Added`:`Removed`})})})]},e.id)})})]})})]})}function OD({roleId:e,query:t,packageAccessLevel:n,onPackageDivergenceChange:r}){let{getProductAccess:i,updateProductAccess:a}=Bl(),{accessLevel:o}=i(e,`qa`),s=o||`agent`,c=(t||``).trim(),[l,u]=(0,g.useState)(wD),[d,f]=(0,g.useState)({}),[p,m]=(0,g.useState)(!1),[h,_]=(0,g.useState)(!1),[v,y]=(0,g.useState)(``),b=l[s]||sC(s),x=tC.find(e=>e.value===s)?.label||`Agent`,S=uC(s,b),C=sC(s),w=(0,g.useMemo)(()=>lC(c),[c]),T=(0,g.useMemo)(()=>dC(s,b),[s,b]),E=(0,g.useMemo)(()=>{if(!c)return nC;let e=new Set(w);return nC.filter(t=>e.has(t.id))},[c,w]);(0,g.useEffect)(()=>{if(!r||!n)return;let e=l[n];r(!uC(n,e))},[l,n,r]),(0,g.useEffect)(()=>{w.length===0&&T.length===0||f(e=>{let t={...e},n=!1;return[...w,...T].forEach(e=>{t[e]||(t[e]=!0,n=!0)}),n?t:e})},[w,T]);let D=t=>{a(e,`qa`,{optedIn:!0,saved:!1,accessLevel:t})},O=(e,t)=>{u(n=>({...n,[s]:{...n[s],[e]:t}}))},k=(e,t)=>{let n=e.permissions.filter(t=>!c||`${t.label} ${e.title}`.toLowerCase().includes(c.toLowerCase()));u(e=>{let r={...e[s]};for(let e of n)r[e.id]=t;return{...e,[s]:r}})},A=()=>{S||(u(e=>({...e,[s]:sC(s)})),y(`Quality assurance ${x.toLowerCase()} reset to default.`),_(!0),setTimeout(()=>_(!1),4e3))},j=e=>{f(t=>({...t,[e]:!t[e]}))},ee=E.length>0&&E.every(e=>d[e.id]),te=()=>{if(ee){f({});return}f(Object.fromEntries(E.map(e=>[e.id,!0])))},M=e=>c?e.permissions.filter(t=>`${t.label} ${e.title}`.toLowerCase().includes(c.toLowerCase())):e.permissions;return(0,V.jsxs)(qE,{children:[h&&(0,V.jsx)(KE,{children:(0,V.jsxs)(yh,{type:`success`,children:[(0,V.jsx)(yh.Title,{children:v}),(0,V.jsx)(yh.Close,{"aria-label":`Close`,onClick:()=>_(!1)})]})}),(0,V.jsx)(rD,{children:`Role type`}),(0,V.jsx)(JE,{children:tC.map(t=>{let n=!uC(t.value,l[t.value]);return(0,V.jsxs)(YE,{children:[(0,V.jsx)(XE,{name:`qa-sectioned-v7-access-${e}`,value:t.value,checked:s===t.value,onChange:()=>D(t.value)}),(0,V.jsxs)(ZE,{children:[(0,V.jsxs)(QE,{children:[(0,V.jsx)($E,{children:Y(t.label,c)}),n&&(0,V.jsx)(eD,{children:`Customized`})]}),(0,V.jsx)(nD,{children:Y(t.description,c)})]})]},t.value)})}),(0,V.jsxs)(hD,{children:[(0,V.jsx)(gD,{onClick:A,children:`Reset to default`}),(0,V.jsx)(_D,{onClick:te,children:ee?`Close all`:`Open all`})]}),(0,V.jsxs)(aD,{children:[E.map(e=>{let t=!!d[e.id],n=M(e),r=ED(e,b);return n.length===0?null:(0,V.jsxs)(oD,{children:[(0,V.jsxs)(sD,{"aria-expanded":t,onClick:()=>j(e.id),children:[(0,V.jsx)(cD,{children:(0,V.jsxs)(`span`,{children:[(0,V.jsx)(lD,{children:Y(e.title,c)}),(0,V.jsxs)(uD,{children:[r,`/`,e.permissions.length,` on`]})]})}),(0,V.jsx)(dD,{$open:t,children:(0,V.jsx)(CD,{})})]}),t&&(0,V.jsx)(fD,{children:(0,V.jsx)(DD,{rows:n,values:b,preset:C,query:c,counterLabel:`${e.permissions.length} permissions`,onToggle:O,onSelectAll:t=>k(e,t)})})]},e.id)}),(0,V.jsxs)(oD,{children:[(0,V.jsxs)(sD,{"aria-expanded":p,onClick:()=>m(e=>!e),children:[(0,V.jsxs)(cD,{children:[(0,V.jsx)(lD,{children:`Access summary`}),(0,V.jsxs)(iD,{children:[`Read-only view of what `,x,` plus this role’s changes add up to.`]})]}),(0,V.jsx)(dD,{$open:p,children:(0,V.jsx)(CD,{})})]}),p&&(0,V.jsx)(fD,{children:(0,V.jsx)(pD,{children:WE.map(e=>(0,V.jsx)(mD,{$on:!!b[e.id],children:Y(e.label,c)},e.id))})})]})]})]})}var kD=[`Dinoco`,`Rusteze`,`Pistons Cup`],AD=[`Support`,`Billing`,`Engineering`,`Success`],jD=B.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,MD=B.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: #646864;
  line-height: 1.45;
`,ND=B.a`
  color: #1f73b7;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`,PD=B.h3`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
`,FD=B.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: #646864;
  line-height: 1.45;
`,ID=B.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,LD=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`,RD=B.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,zD=B.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,BD=B.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  color: #2f3130;
`,VD=B.span`
  font-size: 13px;
  line-height: 1.4;
  color: #646864;

  && {
    color: #646864;
  }
`,HD=B.div`
  margin: 12px 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,UD=B.div`
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
`,WD=B.div`
  font-size: 13px;
  color: #646864;
  margin-top: -8px;
`,GD=()=>(0,V.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,V.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`#646864`,strokeWidth:`1.25`}),(0,V.jsx)(`path`,{d:`M8 7v4M8 5.25v.5`,stroke:`#646864`,strokeWidth:`1.25`,strokeLinecap:`round`})]}),KD=({$open:e})=>(0,V.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,"aria-hidden":`true`,style:{transform:e?`rotate(180deg)`:`none`},children:(0,V.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),qD=B(D_)`
  max-width: 400px;
`,JD=B(K_)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 40px;
  cursor: pointer;
`,YD=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,XD=B.ul`
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
`,ZD=B.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  font-size: 14px;
  color: #2f3130;
  cursor: pointer;
  background: ${e=>e.$selected?`#edf0f2`:`transparent`};

  &:hover {
    background: #edf0f2;
  }
`,QD=B.span`
  flex: 1;
  min-width: 0;
`,$D=()=>(0,V.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,V.jsx)(`path`,{d:`M2 6.2L4.8 9L10 3`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})});function eO({label:e,options:t,value:n,onChange:r,errorMessage:i,showError:a}){let[o,s]=(0,g.useState)(!1),c=(0,g.useRef)(null);(0,g.useEffect)(()=>{if(!o)return;let e=e=>{c.current?.contains(e.target)||s(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[o]);let l=e=>{r(n.includes(e)?n.filter(t=>t!==e):[...n,e])},u=e=>{r(n.filter(t=>t!==e))};return(0,V.jsx)(`div`,{ref:c,style:{position:`relative`},children:(0,V.jsxs)(qD,{style:{marginTop:12},children:[(0,V.jsx)(D_.Label,{children:e}),(0,V.jsxs)(JD,{validation:a?`error`:void 0,onClick:()=>s(e=>!e),role:`combobox`,"aria-expanded":o,"aria-haspopup":`listbox`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s(e=>!e))},children:[(0,V.jsx)(YD,{children:n.map(e=>(0,V.jsxs)(xS,{isPill:!1,children:[(0,V.jsx)(`span`,{children:e}),(0,V.jsx)(xS.Close,{"aria-label":`Remove ${e}`,onClick:t=>{t.stopPropagation(),u(e)}})]},e))}),(0,V.jsx)(KD,{$open:o})]}),a&&(0,V.jsx)(Fx,{children:i}),o&&(0,V.jsx)(XD,{role:`listbox`,"aria-label":e,"aria-multiselectable":`true`,children:t.map(e=>{let t=n.includes(e);return(0,V.jsxs)(ZD,{role:`option`,"aria-selected":t,$selected:t,onClick:t=>{t.stopPropagation(),l(e)},children:[(0,V.jsx)(QD,{children:e}),t&&(0,V.jsx)($D,{})]},e)})})]})})}var tO=[`Reporting and analytics`,`Analytics`,`View dashboards`,`Data access`,`Brands`,`Groups`,`Select at least 1 brand`,`Select at least 1 group`,`Manage reports and dashboards`].join(` `);function nO({onSaveErrorsChange:e}){let[t,n]=(0,g.useState)(`view`),[r,i]=(0,g.useState)(`selected`),[a,o]=(0,g.useState)([]),[s,c]=(0,g.useState)([]),l=t===`view`&&r===`selected`,u=l&&a.length===0,d=l&&s.length===0;return(0,g.useEffect)(()=>{let t=[];u&&t.push(`Brands`),d&&t.push(`Groups`),e?.(t)},[u,d,e]),(0,V.jsxs)(jD,{children:[(0,V.jsxs)(MD,{children:[`Choose the analytics permissions for this role.`,` `,(0,V.jsx)(ND,{href:`#`,children:`Learn about analytics permissions`})]}),(0,V.jsx)(PD,{children:`Analytics`}),(0,V.jsxs)(FD,{children:[`Defines what they can do in Analytics. For datasets and permissions go to`,` `,(0,V.jsx)(ND,{href:`#`,children:`Analytics settings`})]}),(0,V.jsxs)(ID,{children:[(0,V.jsxs)(LD,{children:[(0,V.jsx)(RD,{name:`counselor-analytics`,checked:t===`none`,onChange:()=>n(`none`)}),(0,V.jsx)(zD,{children:(0,V.jsx)(BD,{children:`No access`})})]}),(0,V.jsxs)(LD,{as:`div`,children:[(0,V.jsx)(RD,{name:`counselor-analytics`,checked:t===`view`,onChange:()=>n(`view`)}),(0,V.jsxs)(zD,{children:[(0,V.jsx)(BD,{children:`View dashboards`}),(0,V.jsx)(VD,{children:`Can view dashboards shared with them.`}),t===`view`&&(0,V.jsxs)(HD,{children:[(0,V.jsx)(UD,{children:`Data access`}),(0,V.jsx)(WD,{children:`Define what data this role can access.`}),(0,V.jsxs)(LD,{children:[(0,V.jsx)(RD,{name:`counselor-data-access`,checked:r===`belong`,onChange:()=>i(`belong`)}),(0,V.jsx)(zD,{children:(0,V.jsxs)(BD,{children:[`Data from brands and groups they belong to`,(0,V.jsx)(GD,{})]})})]}),(0,V.jsxs)(LD,{as:`div`,children:[(0,V.jsx)(RD,{name:`counselor-data-access`,checked:r===`selected`,onChange:()=>i(`selected`)}),(0,V.jsxs)(zD,{children:[(0,V.jsxs)(BD,{children:[`Data from selected brands and groups`,(0,V.jsx)(GD,{})]}),r===`selected`&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(eO,{label:`Brands`,options:kD,value:a,onChange:o,showError:u,errorMessage:`Select at least 1 brand`}),(0,V.jsx)(eO,{label:`Groups`,options:AD,value:s,onChange:c,showError:d,errorMessage:`Select at least 1 group`})]})]})]}),(0,V.jsxs)(LD,{children:[(0,V.jsx)(RD,{name:`counselor-data-access`,checked:r===`all`,onChange:()=>i(`all`)}),(0,V.jsx)(zD,{children:(0,V.jsx)(BD,{children:`All data`})})]})]})]})]}),(0,V.jsxs)(LD,{children:[(0,V.jsx)(RD,{name:`counselor-analytics`,checked:t===`manage`,onChange:()=>n(`manage`)}),(0,V.jsxs)(zD,{children:[(0,V.jsx)(BD,{children:`Manage reports and dashboards`}),(0,V.jsx)(VD,{children:`Can create, edit, and delete reports and dashboards.`})]})]}),(0,V.jsxs)(LD,{children:[(0,V.jsx)(RD,{name:`counselor-analytics`,checked:t===`admin`,onChange:()=>n(`admin`)}),(0,V.jsxs)(zD,{children:[(0,V.jsx)(BD,{children:`Manage reports, dashboards and dataset permissions`}),(0,V.jsx)(VD,{children:`Can manage administrative settings and permissions for Explore.`})]})]})]})]})}var rO;function iO(){return iO=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iO.apply(null,arguments)}var aO=function(e){return g.createElement(`svg`,iO({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),rO||=g.createElement(`path`,{fill:`currentColor`,d:`M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z`}))},oO=B.div.attrs({"data-garden-id":`dropdowns.combobox.floating`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledFloatingListbox`,componentId:`sc-1cp6spf-0`})([`top:0;left:0;`,`;`,`;`],e=>Tc(e.$position,{theme:e.theme,hidden:e.$isHidden,animationModifier:`[data-garden-animate="true"]`,zIndex:e.$zIndex}),H),sO=`dropdowns.combobox.option`,cO=({theme:e,$isActive:t,$type:n})=>{let r,i;if(t&&n!==`group`&&n!==`header`){let t=`background.primaryEmphasis`;r=U({theme:e,variable:t,transparency:e.opacity[100]}),i=`inset ${e.rtl?`-${e.shadowWidths.md}`:e.shadowWidths.md} 0 ${U({theme:e,variable:t})}`}let a;a=n===`add`?`foreground.primary`:n===`danger`?`foreground.danger`:`foreground.default`;let o=U({theme:e,variable:a}),s=U({theme:e,variable:`foreground.disabled`});return z([`box-shadow:`,`;background-color:`,`;color:`,`;&[aria-disabled='true']{background-color:transparent;color:`,`;}`],i,r,o,s)},lO=e=>e.theme.space.base*(e.$isCompact?7:9),uO=B.li.attrs({"data-garden-id":sO,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledOption`,componentId:`sc-jl4wn6-0`})([`display:flex;position:relative;transition:color 0.25s ease-in-out;cursor:`,`;overflow-wrap:anywhere;font-weight:`,`;user-select:none;&:focus{outline:none;}`,`;`,`;&[aria-disabled='true']{cursor:default;}&[aria-hidden='true']{`,`;}`,`;`],e=>e.$type===`group`||e.$type===`header`?`default`:`pointer`,e=>e.$type===`header`||e.$type===`previous`?e.theme.fontWeights.semibold:e.theme.fontWeights.regular,e=>{let t=e.theme.lineHeights.md,n=lO(e),r=e.$type===`group`?0:`${e.theme.space.base*9}px`;return z([`box-sizing:border-box;padding:`,` `,`;min-height:`,`px;line-height:`,`;`],e.$type===`group`?0:Do(`(${n} - ${t}) / 2`),r,n,t)},cO,Po(),H),dO=B.div.attrs({"data-garden-id":`dropdowns.combobox.option.content`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledOptionContent`,componentId:`sc-121ujpu-0`})([`display:flex;flex-direction:column;flex-grow:1;`,`;`],H),fO=B.ul.attrs({"data-garden-id":`dropdowns.combobox.optgroup`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledOptGroup`,componentId:`sc-1kavqsx-0`})([`margin:0;padding:0;list-style-type:none;`,`;`],H),pO=B.li.attrs({"data-garden-id":`dropdowns.combobox.separator`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledListboxSeparator`,componentId:`sc-1p6toh2-0`})([`cursor:default;`,`;`,`;`,`;`],e=>{let t=`${e.theme.space.base}px`,n=e.theme.borderWidths.sm;return z([`margin:`,` 0;height:`,`;`],t,n)},({theme:e})=>z([`background-color:`,`;`],U({theme:e,variable:`border.subtle`})),H),mO=B.ul.attrs({"data-garden-id":`dropdowns.combobox.listbox`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledListbox`,componentId:`sc-1k13ba7-0`})([`overflow-y:auto;list-style-type:none;`,`;&&&{display:block;}`,`:first-child `,` `,`:first-child `,`[role='none']:first-child{display:none;}`],e=>{let t=e.theme.space.base;return z([`min-height:`,`;max-height:`,`;&&&{padding-top:`,`px;padding-bottom:`,`px;}`],e.$minHeight===void 0?`${lO(e)+t*2}px`:e.$minHeight,e.$maxHeight,t,t)},uO,dO,fO,pO),hO=B(Oc).attrs({"data-garden-id":`dropdowns.combobox.option.icon`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledOptionIcon`,componentId:`sc-qsab3y-0`})([`flex-shrink:0;`,`;`,`;`,`;`],e=>{let t=e.theme.iconSizes.md,n=Do(`(${e.theme.lineHeights.md} - ${t}) / 2`),r=`${e.theme.space.base*2}px`;return z([`margin-top:`,`;margin-`,`:`,`;width:`,`;height:`,`;`],n,e.theme.rtl?`left`:`right`,r,t,t)},({theme:e,$isDisabled:t,$type:n})=>{let r;return r=t?`foreground.disabled`:n===`danger`?`foreground.danger`:n===`add`?`foreground.primary`:`foreground.subtle`,z([`color:`,`;`],U({theme:e,variable:r}))},H),gO=B.div.attrs({"data-garden-id":`dropdowns.combobox.option.meta`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledOptionMeta`,componentId:`sc-j6pu10-0`})([`transition:color 0.25s ease-in-out;font-weight:`,`;`,`;`,`;`,`;`],e=>e.theme.fontWeights.regular,e=>{let t=e.theme.lineHeights.sm,n=e.theme.fontSizes.sm;return z([`line-height:`,`;font-size:`,`;`],t,n)},({theme:e,$isDisabled:t})=>z([`color:`,`;`],U({theme:e,variable:t?`foreground.disabled`:`foreground.subtle`})),H),_O=B(Oc).attrs({"data-garden-id":`dropdowns.combobox.option.type_icon`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledOptionTypeIcon`,componentId:`sc-xpink2-0`})([`position:absolute;transform:`,`;transition:opacity 0.1s ease-in-out;`,`;`,`;`,`;`],e=>e.theme.rtl&&(e.$type===`next`||e.$type===`previous`)&&`rotate(180deg)`,e=>{let t=e.theme.iconSizes.md,n=`${e.theme.space.base*3}px`,r=Do(`(${lO(e)} - ${t}) / 2`),i;return i=e.$type===`next`?e.theme.rtl?`left`:`right`:e.theme.rtl?`right`:`left`,z([`top:`,`;`,`:`,`;width:`,`;height:`,`;`],r,i,n,t,t)},({theme:e,$type:t})=>{let n=t&&t!==`danger`?1:0,r;return r=t===`add`?`inherit`:U(t===`header`||t===`next`||t===`previous`?{theme:e,variable:`foreground.subtle`}:{theme:e,variable:`foreground.primary`}),z([`opacity:`,`;color:`,`;`,`[aria-selected='true'] > &{opacity:1;}`,`[aria-disabled='true'] > &{color:inherit;}`],n,r,uO,uO)},H),vO=B(mO).attrs({"data-garden-id":`dropdowns.menu`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledMenu`,componentId:`sc-f77ntu-0`})([`position:static !important;`,`;`,`;`],e=>e.$arrowPosition&&yc(e.$arrowPosition,{size:`${e.theme.space.base*1.5}px`,inset:`1px`,animationModifier:`[data-garden-animate-arrow="true"]`}),H),yO=B(oO).attrs({"data-garden-id":`dropdowns.menu.floating`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledFloatingMenu`,componentId:`sc-1rc7ahb-0`})([``,`;`],H),bO=B(uO).attrs({"data-garden-id":`dropdowns.menu.item`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledItem`,componentId:`sc-1jp99dq-0`})([``,`;`],H),xO=B(_O).attrs({"data-garden-id":`dropdowns.menu.item.type_icon`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledItemTypeIcon`,componentId:`sc-1pll3nu-0`})([``,`[aria-checked='true'] > &{opacity:1;}`,`;`],bO,H),SO=B(uO).attrs({"data-garden-id":`dropdowns.menu.item_anchor`,"data-garden-version":`9.16.1`,as:`a`}).withConfig({displayName:`StyledItemAnchor`,componentId:`sc-b75oa4-0`})([`text-decoration:none;color:unset;&&:hover{text-decoration:none;color:inherit;}&[aria-current='page'] > `,`{opacity:1;}`,`;`],xO,H),CO=B(dO).attrs({"data-garden-id":`dropdowns.menu.item.content`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledItemContent`,componentId:`sc-1opglsb-0`})([``,`;`],H),wO=B(fO).attrs({"data-garden-id":`dropdowns.menu.item_group`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledItemGroup`,componentId:`sc-1umk3cg-0`})([``,`;`],H),TO=B(hO).attrs({"data-garden-id":`dropdowns.menu.item.icon`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledItemIcon`,componentId:`sc-w9orqb-0`})([``,`;`],H),EO=B(gO).attrs({"data-garden-id":`dropdowns.menu.item.meta`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledItemMeta`,componentId:`sc-1unw3x1-0`})([``,`;`],H),DO=B(pO).attrs({"data-garden-id":`dropdowns.menu.separator`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledSeparator`,componentId:`sc-8kqwen-0`})([``,`;`],H),OO;function kO(){return kO=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kO.apply(null,arguments)}var AO=function(e){return g.createElement(`svg`,kO({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),OO||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,d:`M7.5 2.5v12m6-6h-12`}))},jO;function MO(){return MO=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},MO.apply(null,arguments)}var NO=function(e){return g.createElement(`svg`,MO({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),jO||=g.createElement(`path`,{fill:`currentColor`,d:`M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z`}))},PO;function FO(){return FO=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},FO.apply(null,arguments)}var IO=function(e){return g.createElement(`svg`,FO({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),PO||=g.createElement(`path`,{fill:`currentColor`,d:`M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z`}))},LO;function RO(){return RO=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},RO.apply(null,arguments)}var zO=function(e){return g.createElement(`svg`,RO({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),LO||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,d:`M1 9l4 4L15 3`}))},BO=[`add`,`danger`,`next`,`previous`],VO=[`auto`,...kc],HO=(e,t)=>{switch(t.type){case`END`:case`HOME`:case`FOCUS`:case`INCREMENT`:case`DECREMENT`:return{...e,focusedValue:t.payload};case`MOUSE_SELECT`:return{...e,selectedValue:t.payload,focusedValue:void 0};case`KEYBOARD_SELECT`:return{...e,selectedValue:t.payload};case`EXIT_WIDGET`:return{...e,focusedValue:void 0};default:return e}},UO=({values:e,direction:t=`horizontal`,defaultFocusedValue:n=e[0],defaultSelectedValue:r,rtl:i,selectedValue:a,focusedValue:o,allowDefaultOnSelect:s=!1,onSelect:c,onFocus:l})=>{let u=a!==void 0,d=o!==void 0,f=(0,g.useMemo)(()=>e.reduce((e,t)=>(e[t]=(0,g.createRef)(),e),{}),[e]),[p,m]=(0,g.useReducer)(HO,{selectedValue:a,focusedValue:o}),h=tg(o,p.focusedValue),_=tg(a,p.selectedValue);return(0,g.useEffect)(()=>{if(h!==void 0){let e=f[h];e?.current&&e.current.focus()}},[h]),(0,g.useEffect)(()=>{a===void 0&&r!==void 0&&(c&&c(r),u||m({type:`KEYBOARD_SELECT`,payload:r}))},[]),{focusedValue:h,selectedValue:_,getElementProps:({selectedAriaKey:r=`aria-selected`,onFocus:a,onKeyDown:g,onClick:v,value:y,...b})=>{let x=_===y,S=(h===void 0?x:h===y)||_===void 0&&h===void 0&&y===n?0:-1,C=t===`vertical`||t===`both`,w=t===`horizontal`||t===`both`,T=()=>{l&&l(y),!d&&m({type:`FOCUS`,payload:y})},E=()=>{c&&c(y),l&&l(y),!u&&m({type:`MOUSE_SELECT`,payload:y})},D=t=>{let n,r;r=d?e.find(e=>o===e):e.find(e=>p.focusedValue===e);let a=()=>{n=e[e.indexOf(r)+1],n||=e[0],!d&&m({type:`INCREMENT`,payload:n}),l&&l(n)},f=()=>{n=e[e.indexOf(r)-1],n||=e[e.length-1],!d&&m({type:`DECREMENT`,payload:n}),l&&l(n)};if(!(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey))if(t.key===J.UP&&C||t.key===J.LEFT&&w)i&&w?a():f(),t.preventDefault();else if(t.key===J.DOWN&&C||t.key===J.RIGHT&&w)i&&w?f():a(),t.preventDefault();else if(t.key===J.HOME){let n=e[0];!d&&m({type:`HOME`,payload:n}),l&&l(n),t.preventDefault()}else if(t.key===J.END){let n=e[e.length-1];!d&&m({type:`END`,payload:n}),l&&l(n),t.preventDefault()}else(t.key===J.SPACE||t.key===J.ENTER)&&(c&&c(y),!u&&m({type:`KEYBOARD_SELECT`,payload:y}),!s&&t.preventDefault())},O=e=>{e.target.tabIndex===0&&(m({type:`EXIT_WIDGET`}),l&&l())};return{tabIndex:S,[r]:r?x:void 0,ref:f[y],onFocus:q(a,T),onClick:q(v,E),onKeyDown:q(g,D),onBlur:O,...b}},getGroupProps:(0,g.useCallback)(({role:e=`group`,...t}={})=>({role:e===null?void 0:e,"data-garden-container-id":`containers.selection`,"data-garden-container-version":`3.1.5`,...t}),[])}},WO=({children:e,render:t=e,...n})=>g.createElement(g.Fragment,null,t(UO(n)));WO.defaultProps={direction:`horizontal`},WO.propTypes={children:K.default.func,render:K.default.func,values:K.default.arrayOf(K.default.any).isRequired,rtl:K.default.bool,direction:K.default.oneOf([`horizontal`,`vertical`,`both`]),defaultFocusedValue:K.default.string,defaultSelectedValue:K.default.string,focusedValue:K.default.any,selectedValue:K.default.any,onSelect:K.default.func,onFocus:K.default.func};var GO=(e,t)=>{let n=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,view:t});e.dispatchEvent(n)},Z={FnInternalUpdate:`fn:internalUpdate`,FnMenuTransitionFinish:`fn:menuTransitionFinish`,TriggerClick:`trigger:click`,TriggerKeyDownEnter:`trigger:keyDown:${J.ENTER}`,TriggerKeyDownSpace:`trigger:keyDown:Space`,TriggerKeyDownArrowDown:`trigger:keyDown:${J.DOWN}`,TriggerKeyDownArrowUp:`trigger:keyDown:${J.UP}`,MenuKeyDownEscape:`menu:keyDown:${J.ESCAPE}`,MenuKeyDownTab:`menu:keyDown:${J.TAB}`,MenuBlur:`menu:blur`,MenuMouseLeave:`menu:mouseLeave`,MenuItemClick:`menuItem:click`,MenuItemClickPrevious:`menuItem:click:previous`,MenuItemClickNext:`menuItem:click:next`,MenuItemMouseMove:`menuItem:mouseMove`,MenuItemKeyDown:`menuItem:keyDown`,MenuItemKeyDownPrevious:`menuItem:keyDown:previous`,MenuItemKeyDownNext:`menuItem:keyDown:next`,MenuItemKeyDownEnter:`menuItem:keyDown:${J.ENTER}`,MenuItemKeyDownSpace:`menuItem:keyDown:Space`,MenuItemKeyDownArrowUp:`menuItem:keyDown:${J.UP}`,MenuItemKeyDownArrowDown:`menuItem:keyDown:${J.DOWN}`,MenuItemKeyDownHome:`menuItem:keyDown:${J.HOME}`,MenuItemKeyDownEnd:`menuItem:keyDown:${J.END}`},KO=e=>Object.hasOwn(e,`items`),qO=e=>!e.disabled&&!e.separator&&!KO(e),JO=e=>`MenuItemKeyDown${e===J.SPACE?`Space`:e}`,YO=e=>{let t=null;for(let n in e)e[n]!==void 0&&(t||={},t[n]=e[n]);return t},XO=(e,t)=>{let n=null;switch(t.type){case Z.MenuBlur:case Z.MenuKeyDownEscape:case Z.MenuKeyDownTab:case Z.TriggerClick:case Z.TriggerKeyDownEnter:case Z.TriggerKeyDownSpace:case Z.TriggerKeyDownArrowDown:case Z.TriggerKeyDownArrowUp:{let{focusOnOpen:r,focusedValue:i,isExpanded:a}=t.payload,o=YO({focusOnOpen:r,focusedValue:i,isExpanded:a});o&&(n={...e,...o});break}case Z.MenuItemClick:case Z.MenuItemClickNext:case Z.MenuItemClickPrevious:case Z.MenuItemKeyDownSpace:case Z.MenuItemKeyDownEnter:{let{selectedItems:r,isExpanded:i,nestedPathIds:a,transitionType:o,isTransitionNext:s,isTransitionPrevious:c}=t.payload,l=YO({selectedItems:r,isExpanded:i,nestedPathIds:a,transitionType:o,isTransitionNext:s,isTransitionPrevious:c});l&&(n={...e,...l});break}case Z.MenuItemKeyDownArrowUp:case Z.MenuItemKeyDownArrowDown:case Z.MenuItemKeyDownNext:case Z.MenuItemKeyDownPrevious:case Z.MenuItemKeyDownHome:case Z.MenuItemKeyDownEnd:case Z.MenuItemKeyDown:case Z.MenuItemMouseMove:{let{focusedValue:r,nestedPathIds:i,transitionType:a,isTransitionNext:o,isTransitionPrevious:s}=t.payload,c=YO({focusedValue:r,nestedPathIds:i,transitionType:a,isTransitionNext:o,isTransitionPrevious:s});c&&(n={...e,...c});break}case Z.FnMenuTransitionFinish:{let{focusOnOpen:r,focusedValue:i,nestedPathIds:a,valuesRef:o}=t.payload,s=YO({focusOnOpen:r,focusedValue:i,nestedPathIds:a,valuesRef:o});s&&(n={...e,...s,transitionType:null,isTransitionNext:!1,isTransitionPrevious:!1});break}case Z.FnInternalUpdate:{let{...r}=t.payload;n={...e,...r};break}default:throw Error(`Error: unexpected menu action provided: `,t.type)}return n||e};function ZO(e,t){let n;return n=t||(e?e.document:window.document),n}var QO=({defaultExpanded:e=!1,defaultFocusedValue:t,document:n,focusedValue:r,idPrefix:i,isExpanded:a,items:o,menuRef:s,restoreFocus:c=!0,rtl:l=!1,selectedItems:u,triggerRef:d,window:f,onChange:p=()=>void 0})=>{let m=`${`${rg(i)}-`}menu-trigger`,h=a!==void 0,_=u!==void 0,v=r!==void 0,y=(0,g.useMemo)(()=>o.reduce((e,t)=>{if(KO(t)){let n=t.items.filter(qO);e.push(...n)}else qO(t)&&e.push(t);return e},[]),[o]),b=(0,g.useMemo)(()=>y.filter(e=>!!((e.href||e.type===`radio`||e.type===`checkbox`)&&e.selected)),[y]),x=(0,g.useMemo)(()=>y.map(e=>e.value),[y]),S=(0,g.useMemo)(()=>x.reduce((e,t)=>(e[t]=(0,g.createRef)(),e),{}),[x]),[C,w]=(0,g.useState)(!1),[T,E]=(0,g.useReducer)(XO,{focusedValue:r,isExpanded:a||e,selectedItems:b,valuesRef:x,focusOnOpen:!1,isTransitionNext:!1,isTransitionPrevious:!1,transitionType:null,nestedPathIds:[]}),D=tg(a,T.isExpanded),O=tg(u,T.selectedItems),k=T.focusedValue===null?void 0:T.focusedValue,{focusedValue:A,getGroupProps:j,getElementProps:ee}=UO({values:x,direction:`vertical`,selectedValue:r||k,focusedValue:r||k,allowDefaultOnSelect:!0}),te=(0,g.useCallback)(e=>{!e&&c&&d.current&&d.current.focus()},[d,c]),M=(0,g.useCallback)(e=>{E({type:e,payload:{...!h&&{isExpanded:!1}}}),p({type:e,isExpanded:!1})},[p,h]),ne=(0,g.useCallback)((e,t,n,r)=>{let i;return t===`checkbox`?i=!!O.find(t=>t.value===e):t===`radio`?i=O.filter(e=>e.name===n)[0]?.value===e:r&&(i=O.filter(t=>t.value===e)[0]?.value===e),i},[O]),re=(0,g.useCallback)(({value:e,key:t,isAlphanumericChar:n})=>{let r=e;if(n){let e=y.map(e=>e.label?e.label[0].toLowerCase():String(e.value)[0].toLowerCase()).indexOf(t),n=y[e];n&&(r=n.value)}else{let n=x.indexOf(e),i;t===J.UP?i=(n===0?x.length:n)-1:t===J.DOWN?i=(n===x.length-1?-1:n)+1:t===J.END?i=x.length-1:t===J.HOME&&(i=0),r=y[i].value}return r},[y,x]),N=(0,g.useCallback)(({value:e,type:t,name:n,label:r,selected:i,href:a})=>{if(a)return O;if(!t)return null;let o=[...O],s={value:e,type:t,label:r,...n&&{name:n}};if(t===`checkbox`)i?o=o.filter(t=>t.value!==e):o.push(s);else if(t===`radio`){let e=o.findIndex(e=>e.name===n);e>-1&&o.splice(e,1),o.push(s)}return o},[O]),ie=({isNext:e,isPrevious:t,type:n,value:r})=>{let i;i=e?`isNext`:t?`isPrevious`:n;let a={isNext:`isNext`,isPrevious:`isPrevious`,radio:`radio`,checkbox:`checkbox`}[i];throw Error(`Error: expected useMenu anchor item '${r}' to not use '${a}'`)},ae=(0,g.useCallback)(e=>{e.stopPropagation();let t=Z.TriggerClick;E({type:t,payload:{...!v&&{focusedValue:null},...!h&&{isExpanded:!D}}}),te(!D),p({type:t,focusedValue:null,isExpanded:!D})},[v,h,D,te,p]),oe=(0,g.useCallback)(e=>{let{key:n}=e,r=[J.DOWN,J.UP].includes(n),i=[J.ENTER,J.SPACE].includes(n),a,o;r?(a=Z[`TriggerKeyDown${n}`],o=J.UP===n?x[x.length-1]:x[0]):i&&(a=Z[`TriggerKeyDown${n===J.SPACE?`Space`:n}`],o=x[0]),a&&(e.preventDefault(),E({type:a,payload:{focusOnOpen:!0,...!v&&{focusedValue:t||o},...!h&&{isExpanded:!0}}}),te(),p({type:a,focusedValue:t||o,isExpanded:!0}))},[x,v,t,h,te,p]),se=(0,g.useCallback)(e=>{e.stopPropagation()},[]),ce=(0,g.useCallback)(e=>{let{key:t}=e;if([J.ESCAPE,J.TAB].includes(t)){e.preventDefault(),e.stopPropagation();let n=Z[t===J.ESCAPE?`MenuKeyDownEscape`:`MenuKeyDownTab`];te(),M(n)}},[M,te]),le=(0,g.useCallback)(e=>{let t=setTimeout(()=>{let r=ZO(f,n).activeElement;if(!(s.current?.contains(r)||d.current?.contains(r))){let t=!!e.relatedTarget&&e.relatedTarget?.nodeName!==`#document`;te(t||!D&&!t),M(Z.MenuBlur)}return()=>{clearTimeout(t)}})},[M,D,n,s,te,d,f]),ue=(0,g.useCallback)(()=>{p({type:Z.MenuMouseLeave})},[p]),de=(0,g.useCallback)((e,t)=>{let n=Z.MenuItemClick,{isNext:r,isPrevious:i,href:a,selected:o}=t,s=r||i;r?n=Z.MenuItemClickNext:i?n=Z.MenuItemClickPrevious:a&&o&&e.preventDefault();let c=N(t);E({type:n,payload:{...s&&{...r&&{nestedPathIds:[...T.nestedPathIds,t.value]},transitionType:n,isTransitionNext:r,isTransitionPrevious:i},...!h&&!s&&{isExpanded:!1},...!s&&{nestedPathIds:[]},...!_&&c&&{selectedItems:c}}}),te(s),p({type:n,value:t.value,...!s&&{isExpanded:!1},...c&&{selectedItems:c}})},[N,T.nestedPathIds,h,_,te,p]),fe=(0,g.useCallback)((e,t)=>{let{key:n}=e,{isNext:r,isPrevious:i}=t,a=[J.HOME,J.END].includes(n),o=[J.SPACE,J.ENTER].includes(n),s=[J.UP,J.DOWN].includes(n),c=n.length===1&&/\S/u.test(n),u=r||i,d,m={},g={};if(o){d=Z[JO(n)];let a=N(t);r?d=Z.MenuItemKeyDownNext:i&&(d=Z.MenuItemKeyDownPrevious),m={...!h&&!u&&{isExpanded:!1},...!u&&{nestedPathIds:[]},...!_&&a&&{selectedItems:a}},g={value:t.value,...!u&&{isExpanded:!1},...a&&{selectedItems:a}},e.preventDefault(),t.href&&GO(e.target,f||window),te(u)}else if(n===J.RIGHT)l&&i&&(d=Z.MenuItemKeyDownPrevious),!l&&r&&(d=Z.MenuItemKeyDownNext),d&&(e.preventDefault(),g={value:t.value});else if(n===J.LEFT)l&&r&&(d=Z.MenuItemKeyDownNext),!l&&i&&(d=Z.MenuItemKeyDownPrevious),d&&(e.preventDefault(),g={value:t.value});else if(s||a||c){e.preventDefault(),d=c?Z.MenuItemKeyDown:Z[JO(n)];let r=re({value:t.value,key:n,isAlphanumericChar:c});m={...!v&&{focusedValue:r}},g={focusedValue:r}}if(d){e.stopPropagation();let n=d.includes(`next`),a=d.includes(`previous`)||n;m={...m,...a&&{...r&&{nestedPathIds:[...T.nestedPathIds,t.value]},transitionType:d,isTransitionNext:r,isTransitionPrevious:i}},E({type:d,payload:m}),p({type:d,...g})}},[re,N,h,v,_,p,te,l,T.nestedPathIds,f]),pe=(0,g.useCallback)(e=>{let t=Z.MenuItemMouseMove;E({type:t,payload:{...!v&&{focusedValue:e}}}),p({type:t,focusedValue:e})},[v,p]);(0,g.useEffect)(()=>{w(D)},[D]),(0,g.useEffect)(()=>{let e=ZO(f,n);return D?e.addEventListener(`keydown`,ce,!0):D||e.removeEventListener(`keydown`,ce,!0),()=>{e.removeEventListener(`keydown`,ce,!0)}},[D,n,ce,f]),(0,g.useEffect)(()=>{if(T.focusOnOpen&&C&&A&&D){let e=S[A]?.current;e||=S[x[0]].current,e&&(e.focus(),E({type:Z.FnInternalUpdate,payload:{focusOnOpen:!1}}))}},[x,C,S,A,T.focusOnOpen,D]),(0,g.useEffect)(()=>{let e=JSON.stringify(x)!==JSON.stringify(T.valuesRef);if(e&&!T.isTransitionNext&&!T.isTransitionPrevious&&E({type:Z.FnInternalUpdate,payload:{valuesRef:x}}),e&&(T.isTransitionNext||T.isTransitionPrevious)){let e=T.isTransitionNext?x[0]:T.nestedPathIds.slice(-1)[0];E({type:Z.FnMenuTransitionFinish,payload:{valuesRef:x,focusOnOpen:!0,nestedPathIds:T.isTransitionNext?T.nestedPathIds:T.nestedPathIds.slice(0,-1),...!v&&{focusedValue:e}}}),p({type:Z.FnMenuTransitionFinish,focusedValue:e})}},[x,v,T.valuesRef,T.transitionType,T.isTransitionNext,T.isTransitionPrevious,T.nestedPathIds,p]);let me=(0,g.useCallback)(({onBlur:e,onClick:t,onKeyDown:n,type:r=`button`,role:i=`button`,disabled:a,...o}={})=>({...o,"data-garden-container-id":`containers.menu.trigger`,"data-garden-container-version":`2.0.1`,ref:d,id:m,"aria-expanded":D,"aria-haspopup":!0,disabled:a,tabIndex:a?-1:0,type:r===null?void 0:r,role:i===null?void 0:i,onBlur:q(e,le),onClick:q(t,ae),onKeyDown:q(n,oe)}),[D,le,ae,oe,m,d]),he=(0,g.useCallback)(({role:e=`menu`,onBlur:t,onClick:n,onMouseLeave:r,...i}={})=>({...i,...j({onMouseLeave:q(r,ue)}),"data-garden-container-id":`containers.menu`,"data-garden-container-version":`2.0.1`,"aria-labelledby":m,tabIndex:-1,role:e===null?void 0:e,ref:s,onBlur:q(t,le),onClick:q(n,se)}),[j,le,se,ue,s,m]),ge=(0,g.useCallback)(({role:e=`separator`,...t}={})=>({...t,"data-garden-container-id":`containers.menu.separator`,"data-garden-container-version":`2.0.1`,role:e===null?void 0:e}),[]),_e=(0,g.useCallback)(({role:e=`group`,...t})=>({...t,"data-garden-container-id":`containers.menu.item_group`,"data-garden-container-version":`2.0.1`,role:e===null?void 0:e}),[]),ve=(0,g.useCallback)(({role:e=`menuitem`,onClick:t,onKeyDown:n,onMouseEnter:r,item:i,...a})=>{let{disabled:o,type:s,name:c,value:l,href:u,isNext:d=!1,isPrevious:f=!1,label:p=l}=i,m=e,h={"data-garden-container-id":`containers.menu.item`,"data-garden-container-version":`2.0.1`,onClick:t,onKeyDown:n,onMouseEnter:r};if(u)return(d||f||s)&&ie(i),{...h,role:m===null?void 0:`none`,...a};s===`radio`?m=`menuitemradio`:s===`checkbox`&&(m=`menuitemcheckbox`);let g=ne(l,s,c),_={...h,"aria-selected":void 0,"aria-disabled":m===`none`?void 0:o,"aria-checked":g,role:m===null?void 0:m,...a};if(o)return _;let v=ee({value:l,..._,onClick:q(t,e=>de(e,{...i,label:p,selected:g,isNext:d,isPrevious:f})),onKeyDown:q(n,e=>fe(e,{...i,label:p,selected:g,isNext:d,isPrevious:f})),onMouseEnter:q(r,()=>pe(l))});return v.ref!==S[l]&&(S[l]=v.ref),v},[S,ne,ee,de,fe,pe]),ye=(0,g.useCallback)(({role:e=`menuitem`,onClick:t,onKeyDown:n,onMouseEnter:r,item:i,...a})=>{let{disabled:o,value:s,href:c,external:l,label:u=s}=i;if(!c)return;let d={"data-garden-container-id":`containers.menu.item.link`,"data-garden-container-version":`2.0.1`,"aria-disabled":o,"aria-selected":void 0,role:e===null?void 0:e,onClick:t,onKeyDown:n,onMouseEnter:r,...a},f=ne(s,void 0,void 0,c);if(o||(d.href=c,l&&(d.target=`_blank`,d.rel=`noopener noreferrer`),f&&(d[`aria-current`]=`page`)),o)return d;let p=ee({value:s,...d,onClick:q(t,e=>de(e,{...i,label:u,selected:f})),onKeyDown:q(n,e=>fe(e,{...i,label:u,selected:f})),onMouseEnter:q(r,()=>pe(s))});return p.ref!==S[s]&&(S[s]=p.ref),p},[S,ne,ee,de,fe,pe]);return(0,g.useMemo)(()=>({getAnchorProps:ye,getItemGroupProps:_e,getItemProps:ve,getMenuProps:he,getSeparatorProps:ge,getTriggerProps:me,isExpanded:D,selection:O,focusedValue:A}),[A,D,O,ye,_e,ve,he,ge,me])},$O=e=>{let{children:t,render:n=t,...r}=e;return g.createElement(g.Fragment,null,n(QO(r)))};$O.propTypes={children:K.default.func,render:K.default.func,items:K.default.arrayOf(K.default.any).isRequired,triggerRef:K.default.any.isRequired,menuRef:K.default.any.isRequired,idPrefix:K.default.string,document:K.default.any,window:K.default.any,onChange:K.default.func,isExpanded:K.default.bool,defaultExpanded:K.default.bool,selectedItems:K.default.arrayOf(K.default.any),focusedValue:K.default.oneOfType([K.default.string]),defaultFocusedValue:K.default.oneOfType([K.default.string]),restoreFocus:K.default.bool},$O.defaultProps={restoreFocus:!0};var ek=(0,g.createContext)(void 0),tk=()=>{let e=(0,g.useContext)(ek);if(!e)throw Error(`Error: this component must be rendered within a <Menu>.`);return e},nk=e=>({value:e.value,label:e.label,...e.name&&{name:e.name},...e.href&&{href:e.href},...e.isDisabled&&{disabled:e.isDisabled},...e.isExternal&&{external:e.isExternal},...e.isSelected&&{selected:e.isSelected},...e.selectionType&&{type:e.selectionType},...e.type===`next`&&{isNext:!0},...e.type===`previous`&&{isPrevious:!0}}),rk=(e,t)=>g.Children.toArray(e).reduce((e,n)=>{let r=e;if((0,g.isValidElement)(n))if(`value`in n.props)r.push(nk({...n.props,selectionType:t}));else{let e=n.props,t=e.legend||e[`aria-label`],i=e.type&&[`checkbox`,`radio`].includes(e.type);if(t||i){let t=rk(e.children,e.type);r.push({label:e.legend||e[`aria-label`],items:t})}}return r},[]),ik=`bottom-start`,ak=(0,g.forwardRef)(({appendToNode:e,hasArrow:t,isCompact:n,isExpanded:r,fallbackPlacements:i,maxHeight:a=`400px`,minHeight:o,placement:s=ik,triggerRef:c,zIndex:l=1e3,children:u,...d},f)=>{let p=(0,g.useRef)(null),m=(0,g.useRef)(!0),[h,_]=(0,g.useState)(r),[y,b]=(0,g.useState)(),x=(0,g.useContext)(di)||Ma,[S,C]=dc(x,s===`auto`?ik:s,i),{refs:w,placement:T,update:E,floatingStyles:{transform:D}}=_x({platform:{...rx,isRTL:()=>x.rtl},elements:{reference:c?.current,floating:p?.current},placement:S,middleware:[vx(x.space.base*(t?2:1)),s===`auto`?xx():yx({fallbackPlacements:C}),bx({apply:({rects:e,availableHeight:t})=>{o===null||o===`fit-content`||e.floating.height>t&&m.current&&b(t)}})]});(0,g.useEffect)(()=>(m.current=!0,()=>{m.current=!1}),[]),(0,g.useEffect)(()=>{let e;return r&&w.reference.current&&w.floating.current&&(e=ox(w.reference.current,w.floating.current,E,{elementResize:typeof ResizeObserver==`function`})),()=>e&&e()},[r,w.reference,w.floating,E]),(0,g.useEffect)(()=>{let e;return r?m.current&&_(!0):e=setTimeout(()=>{m.current&&(_(!1),b(void 0))},200),()=>clearTimeout(e)},[r]),(0,g.useEffect)(()=>{y&&(m.current&&b(void 0),E())},[u,E]);let O=g.createElement(yO,{"data-garden-animate":h,$isHidden:!r||!h,$position:mc(T),$zIndex:l,style:{transform:D},ref:p},g.createElement(vO,Object.assign({"data-garden-animate-arrow":h,$arrowPosition:t?Fa(x,T):void 0,$isCompact:n,$minHeight:o,$maxHeight:a,style:{height:y}},d,{ref:f}),!!h&&u));return e?(0,v.createPortal)(O,e):O});ak.displayName=`MenuList`,ak.propTypes={appendToNode:K.default.any,hasArrow:K.default.bool,isCompact:K.default.bool,isExpanded:K.default.bool,maxHeight:K.default.string,minHeight:K.default.string,placement:K.default.oneOf(VO),triggerRef:K.default.any,zIndex:K.default.number};var ok=(0,g.forwardRef)(({button:e,buttonProps:t={},children:n,isCompact:r,focusedValue:i,defaultFocusedValue:a,defaultExpanded:o,isExpanded:s,restoreFocus:c,selectedItems:l,onChange:u,onMouseLeave:d,maxHeight:f=`400px`,placement:p=`bottom-start`,zIndex:m=1e3,...h},_)=>{let v=(0,g.useRef)(null),y=(0,g.useRef)(null),b=rk(n),x=(0,g.useContext)(di)||Ma,S=bc(x),C=W(x),{isExpanded:w,focusedValue:T,getTriggerProps:E,getMenuProps:D,getAnchorProps:O,getItemProps:k,getItemGroupProps:A,getSeparatorProps:j}=QO({rtl:x.rtl,document:C,window:S,defaultFocusedValue:a,focusedValue:i,defaultExpanded:o,isExpanded:s,restoreFocus:c,selectedItems:l,items:b,menuRef:y,triggerRef:v,onChange:u}),{onClick:ee,onKeyDown:te,disabled:M,ref:ne,...re}=t,N={...r&&{size:`small`},...re,...E({type:`button`,onClick:ee,onKeyDown:te,disabled:M}),ref:F_([v,ne])},ie=typeof e==`function`?e(N):g.createElement(Zp,N,e,g.createElement(Zp.EndIcon,{isRotated:w},g.createElement(aO,null))),ae=(0,g.useMemo)(()=>({isCompact:r,focusedValue:T,getAnchorProps:O,getItemProps:k,getItemGroupProps:A,getSeparatorProps:j}),[T,O,A,k,j,r]);return g.createElement(ek.Provider,{value:ae},ie,g.createElement(ak,Object.assign({},h,D({onMouseLeave:d}),{ref:F_([y,_]),isCompact:r,isExpanded:w,triggerRef:v,maxHeight:f,placement:p,zIndex:m}),n))});ok.displayName=`Menu`,ok.propTypes={appendToNode:K.default.any,button:K.default.any.isRequired,buttonProps:K.default.object,defaultExpanded:K.default.bool,defaultFocusedValue:K.default.string,fallbackPlacements:K.default.arrayOf(K.default.any),focusedValue:K.default.string,hasArrow:K.default.bool,isCompact:K.default.bool,isExpanded:K.default.bool,maxHeight:K.default.string,minHeight:K.default.string,onChange:K.default.func,placement:K.default.oneOf(VO),restoreFocus:K.default.bool,selectedItems:K.default.arrayOf(K.default.any),zIndex:K.default.number};var sk=(0,g.createContext)({}),ck=()=>(0,g.useContext)(sk),lk=(0,g.forwardRef)(({children:e,content:t,legend:n,icon:r,"aria-label":i,type:a,...o},s)=>{let{isCompact:c,getItemGroupProps:l}=tk(),u=l({"aria-label":xc(lk,{"aria-label":i},`aria-label`,`Group`,!n)||n}),d=(0,g.useMemo)(()=>({type:a}),[a]);return g.createElement(sk.Provider,{value:d},g.createElement(bO,Object.assign({$isCompact:c,$type:`group`},o,{role:`none`,ref:s}),g.createElement(CO,null,!!(t||n)&&g.createElement(bO,{as:`div`,$isCompact:c,$type:`header`},!!r&&g.createElement(xO,{$isCompact:c,$type:`header`},r),t||n),g.createElement(wO,Object.assign({$isCompact:c},u),g.createElement(DO,{role:`none`}),e))))});lk.displayName=`ItemGroup`,lk.propTypes={content:K.default.any,icon:K.default.any,legend:K.default.string,type:K.default.oneOf([`checkbox`,`radio`,void 0])};var uk=(0,g.createContext)(void 0),dk=()=>{let e=(0,g.useContext)(uk);if(!e)throw Error(`Error: this component must be rendered within an <Item>.`);return e},fk=(0,g.forwardRef)((e,t)=>{let{isDisabled:n}=dk();return g.createElement(EO,Object.assign({$isDisabled:n},e,{ref:t}))});fk.displayName=`Item.Meta`;var pk=fk,mk=e=>{switch(e){case`add`:return g.createElement(AO,null);case`next`:return g.createElement(NO,null);case`previous`:return g.createElement(IO,null);default:return g.createElement(zO,null)}},hk=(0,g.forwardRef)(({children:e,value:t,label:n=t,href:r,isSelected:i,icon:a,isDisabled:o,isExternal:s,type:c,name:l,onClick:u,onKeyDown:d,onMouseEnter:f,...p},m)=>{let{type:h}=ck(),{focusedValue:_,getAnchorProps:v,getItemProps:y,isCompact:b}=tk(),x={...nk({value:t,label:n,name:l,type:c,isSelected:i,isDisabled:o,href:r,isExternal:s}),type:h},S=v({item:x});if(S&&(c===`add`||c===`danger`))throw Error(`Menu link item '${t}' can't use type '${c}'`);let{ref:C,...w}=y({item:x,onClick:u,onKeyDown:d,onMouseEnter:f}),T=(0,g.useMemo)(()=>({isDisabled:o,type:c}),[o,c]),E=g.createElement(g.Fragment,null,g.createElement(xO,{$isCompact:b,$type:c},mk(c)),!!a&&g.createElement(TO,{$isDisabled:o,$type:c},a),g.createElement(CO,null,e||n)),D={...p,...w,ref:F_([C,m])};return g.createElement(uk.Provider,{value:T},S?g.createElement(`li`,D,g.createElement(SO,Object.assign({$isCompact:b,$isActive:t===_},S),E)):g.createElement(bO,Object.assign({$isCompact:b,$isActive:t===_,$type:c},D),E))});hk.displayName=`Item`,hk.propTypes={href:K.default.string,icon:K.default.any,isDisabled:K.default.bool,isSelected:K.default.bool,isExternal:K.default.bool,label:K.default.string,name:K.default.string,type:K.default.oneOf(BO),value:K.default.string.isRequired};var gk=hk;gk.Meta=pk;var _k=B.div`
  padding-bottom: 8px;
`,vk=B.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3130;
  font-weight: 500;
`,yk=B.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`,bk=B.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: #646864;
`,xk=B(mh)`
  width: 100%;
  max-width: none;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #f8f9f9;
  border-color: #d8dcde;
  padding: 16px;
  padding-left: 40px;
  box-sizing: border-box;

  [data-garden-id='notifications.icon'] {
    left: 16px;
    margin-top: 0;
  }

  [data-garden-id='notifications.title'] {
    margin: 0;
  }

  [data-garden-id='notifications.paragraph'] {
    margin: 0;
  }
`,Sk=B.div`
  margin-top: 16px;
`,Ck=B(D_)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;

  & > * {
    margin-block: 0;
  }

  [data-garden-id='forms.input_label'],
  [data-garden-id='forms.input_hint'] {
    margin: 0;
    padding: 0;
  }

  [data-garden-id='forms.input_hint'] {
    margin-bottom: 8px;
    /* Flora fg/subtle */
    color: #646864;
  }
`,wk=250,Tk=B.div`
  width: ${wk}px;

  && button {
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
  }
`,Ek=B(Qp)`
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  vertical-align: baseline;
`;function Dk(e){e.preventDefault();let t=window.open(`about:blank`,`_blank`);if(t){try{t.opener=null}catch{}t.document.title=`Workforce Management`,t.document.body.innerHTML=``}}var Ok=[{value:`agent`,label:`Agent`},{value:`admin`,label:`Admin`},{value:`team_lead`,label:`Team Lead`},{value:`scheduler`,label:`Scheduler`}],kk=[{id:`scheduling`,title:`Scheduling`,permissions:[{id:`view-schedules`,label:`View schedules`},{id:`manage-schedules`,label:`Manage schedules`}]},{id:`forecasting`,title:`Forecasting`,permissions:[{id:`view-forecasts`,label:`View forecasts`},{id:`manage-forecasts`,label:`Manage forecasts`}]},{id:`team-management`,title:`Team management`,permissions:[{id:`view-teams`,label:`View teams`},{id:`manage-teams`,label:`Manage teams`}]}],Ak=[`WFM role assignment`,`Opt in for WFM role assignment`,`WFM role`,`Agent`,`Admin`,`Team Lead`,`Scheduler`,`Members receive this WFM role`,`Manage its permissions in Workforce Management`,`Workforce Management settings`,`Once you enable WFM role assignment for this role, you can’t turn it off`,`Scheduling`,`Forecasting`,`Team management`,`View schedules`,`Manage schedules`,`View forecasts`,`Manage forecasts`,`View teams`,`Manage teams`].join(` `),jk=B.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`,Mk=B.h3`
  /* Match Tickets: title → controls 8px; between-section spacing is 24px gap. */
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
`,Nk=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Pk=B.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #2f3130;
  cursor: pointer;
`,Fk=B.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
`;function Ik({query:e,saved:t=!1}){let[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)(``),o=e=>{if(t)return;let n=e.target.checked;r(n),n&&!i&&a(`agent`)},s=!t,c=n,l=Ok.find(e=>e.value===i),u=i?[{value:i,label:l?.label||i,type:`radio`}]:[];return(0,V.jsxs)(_k,{children:[s&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(vk,{children:[(0,V.jsx)(yk,{checked:n,onChange:o}),Y(`Opt in for WFM role assignment`,e)]}),(0,V.jsxs)(xk,{type:`info`,role:`note`,children:[(0,V.jsx)(mh.Title,{children:Y(`Once you enable WFM role assignment for this role, you can’t turn it off.`,e)}),(0,V.jsx)(mh.Paragraph,{children:Y(`You can change the selected WFM role later.`,e)})]})]}),c&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Sk,{style:t?{marginTop:0}:void 0,children:(0,V.jsxs)(Ck,{children:[(0,V.jsx)(D_.Label,{children:Y(`WFM role`,e)}),(0,V.jsxs)(D_.Hint,{children:[Y(`Members receive this WFM role. Manage its permissions in Workforce Management.`,e),` `,(0,V.jsx)(Ek,{isExternal:!0,href:`#workforce-management`,onClick:Dk,children:Y(`Workforce Management settings`,e)})]}),(0,V.jsx)(Tk,{children:(0,V.jsx)(ok,{button:l?.label||`Select a WFM role`,selectedItems:u,style:{width:wk,minWidth:wk,boxSizing:`border-box`},onChange:({selectedItems:e})=>{let t=e?.[0]?.value;t&&a(t)},children:(0,V.jsx)(lk,{type:`radio`,children:Ok.map(e=>(0,V.jsx)(gk,{value:e.value,label:e.label,name:`wfm-role`,children:e.label},e.value))})})})]})}),(0,V.jsx)(jk,{children:kk.map(t=>(0,V.jsxs)(`div`,{children:[(0,V.jsx)(Mk,{children:Y(t.title,e)}),(0,V.jsx)(Nk,{children:t.permissions.map(t=>(0,V.jsxs)(Pk,{children:[(0,V.jsx)(Fk,{}),Y(t.label,e)]},t.id))})]},t.id))})]}),t&&!n&&(0,V.jsx)(bk,{children:Y(`WFM role assignment for this role is managed in Workforce Management.`,e)})]})}var Lk=B.section.attrs({"data-inspect-name":`Accordion well`})`
  box-sizing: border-box;
  width: 100%;
  max-width: ${e=>e.$maxWidth||726}px;
  border: 1px solid ${e=>U({theme:e.theme,variable:`border.subtle`})};
  border-radius: 12px;
  background: ${e=>U({theme:e.theme,variable:e.$expanded?`background.subtle`:`background.default`})};
  overflow: hidden;
  margin-bottom: 12px;
  /* Closed default height; grow when header carries an error message. */
  ${e=>!e.$expanded&&!e.$hasError&&`
    height: 82px;
  `}
`,Rk=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: ${e=>e.$expanded||e.$hasError?`20px`:`0 20px`};
  box-sizing: border-box;
  height: ${e=>e.$expanded||e.$hasError?`auto`:`82px`};
  min-height: 82px;
  background: transparent;
`,zk=B.button.attrs({type:`button`})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
`,Bk=B.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: ${e=>U({theme:e.theme,variable:`foreground.default`})};
`,Vk=B.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${e=>U({theme:e.theme,variable:`foreground.subtle`})};
`,Hk=B.span`
  display: inline-flex;
  align-items: flex-start;
  /* Match FloraValidationMessage: 8px ink-to-text on 20px Central icon. */
  gap: 6.33px;
  margin-top: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${e=>U({theme:e.theme,variable:`foreground.danger`})};
`,Uk=B.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
`,Wk=B.span`
  padding-block: 2px;
`,Gk=B.button.attrs({type:`button`})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: ${e=>U({theme:e.theme,variable:`foreground.subtle`})};
  cursor: pointer;
  flex-shrink: 0;

  &:hover,
  &:active,
  &:focus {
    color: ${e=>U({theme:e.theme,variable:`foreground.subtle`})};
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;
    fill: currentColor;
    color: ${e=>U({theme:e.theme,variable:`foreground.subtle`})};
    transform: ${e=>e.$open?`rotate(180deg)`:`none`};
    transition: transform 120ms ease;
  }
`,Kk=B.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  background: ${e=>U({theme:e.theme,variable:`background.default`})};
  border-radius: 12px;
  border-top: none;
`;function qk({size:e=20}){return(0,V.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,V.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M2.74408 6.91058C3.06952 6.58515 3.59715 6.58515 3.92259 6.91058L9.41075 12.3988C9.73617 12.7242 10.2638 12.7242 10.5893 12.3988L16.0774 6.91058C16.4028 6.58515 16.9305 6.58515 17.2559 6.91058C17.5813 7.23602 17.5813 7.76365 17.2559 8.0891L11.7677 13.5773C10.7915 14.5536 9.20858 14.5536 8.23225 13.5773L2.74408 8.0891C2.41864 7.76365 2.41864 7.23602 2.74408 6.91058Z`})})}function Jk({title:e,description:t,open:n,onToggle:r,query:i,searchText:a,maxWidth:o,errorCount:s,children:c}){let l=(i||``).trim(),u=!!l&&`${e} ${t||``} ${a??wS(c)}`.toLowerCase().includes(l.toLowerCase()),d=n||u,f=Number(s)||0,p=f>0,m=d?`Collapse ${e}`:`Expand ${e}`;return(0,V.jsxs)(Lk,{$maxWidth:o,$expanded:d,$hasError:p,children:[(0,V.jsxs)(Rk,{$expanded:d,$hasError:p,children:[(0,V.jsxs)(zk,{onClick:r,"aria-expanded":d,"aria-label":m,children:[(0,V.jsx)(Bk,{children:Y(e,l)}),t&&(0,V.jsx)(Vk,{children:Y(t,l)}),p&&(0,V.jsxs)(Hk,{children:[(0,V.jsx)(Uk,{children:(0,V.jsx)(jx,{})}),(0,V.jsxs)(Wk,{children:[`Contains `,f,` `,f===1?`error`:`errors`]})]})]}),(0,V.jsx)(Gk,{$open:d,"aria-expanded":d,"aria-label":m,onClick:r,children:(0,V.jsx)(qk,{size:20})})]}),d&&(0,V.jsx)(Kk,{children:CS(c,l)})]})}var Yk=B.div`
  position: fixed;
  inset: 0;
  background: rgba(47, 57, 65, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`,Xk=B.div`
  background: #fff;
  border-radius: 12px;
  width: 560px;
  max-width: calc(100vw - 48px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`,Zk=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e9ebed;
`,Qk=B.h2`
  font-size: 18px;
  font-weight: 600;
  color: #2f3130;
  margin: 0;
`,$k=B.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: #68737d;
  padding: 4px;

  &:hover {
    color: #2f3130;
  }
`,eA=B.div`
  padding: 24px;
`,tA=B.p`
  font-size: 14px;
  color: #2f3130;
  line-height: 1.5;
  margin: 0 0 24px;
`,nA=B.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
  margin-bottom: 8px;
`,rA=B.div`
  position: relative;
`,iA=B.div`
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
`,aA=B.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) ${e=>e.$open?`rotate(180deg)`:`none`};
  pointer-events: none;
  display: inline-flex;
  color: #68737d;
`,oA=B.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #e9ebed;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
`,sA=B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 14px;
  line-height: 1;
  padding: 0;

  &:hover {
    color: #2f3130;
  }
`,cA=B.input`
  flex: 1;
  min-width: 60px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0;
  height: 38px;
`,lA=B.div`
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
`,uA=B.div`
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
`,dA=B.span`
  width: 16px;
  color: #1f73b7;
  font-size: 14px;
`,fA=B.div`
  display: flex;
  flex-direction: column;
`,pA=B.span`
  font-size: 15px;
  color: ${e=>e.$disabled?`#c2c8cc`:`#2f3130`};
`,mA=B.span`
  font-size: 13px;
  color: ${e=>e.$disabled?`#c2c8cc`:`#68737d`};
`,hA=B.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
`;function gA({onClose:e,onAssign:t}){let[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)([]),[o,s]=(0,g.useState)(``),c=(0,g.useRef)(null);(0,g.useEffect)(()=>{let e=e=>{c.current&&!c.current.contains(e.target)&&r(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let l=e=>{e.disabled||(a(t=>t.some(t=>t.id===e.id)?t.filter(t=>t.id!==e.id):[...t,e]),s(``))},u=e=>{a(t=>t.filter(t=>t.id!==e))},d=[...Al,{id:`rusty-admin`,name:`Rusty Admin`,role:`Admin (can't change your own role)`,disabled:!0}],f=o.trim().toLowerCase(),p=f?d.filter(e=>e.name.toLowerCase().includes(f)||(e.email||``).toLowerCase().includes(f)||e.role.toLowerCase().includes(f)):d;return(0,V.jsx)(Yk,{onMouseDown:t=>{t.target===t.currentTarget&&e()},children:(0,V.jsxs)(Xk,{children:[(0,V.jsxs)(Zk,{children:[(0,V.jsx)(Qk,{children:`Assign role`}),(0,V.jsx)($k,{"aria-label":`Close`,onClick:e,children:`✕`})]}),(0,V.jsxs)(eA,{children:[(0,V.jsx)(tA,{children:`Team members can only have one role at a time. When their role changes, their permissions change too.`}),(0,V.jsx)(nA,{children:`Select team members`}),(0,V.jsxs)(rA,{ref:c,children:[(0,V.jsxs)(iA,{$open:n,onClick:()=>r(!0),children:[i.map(e=>(0,V.jsxs)(oA,{children:[e.name,(0,V.jsx)(sA,{onClick:t=>{t.stopPropagation(),u(e.id)},children:`✕`})]},e.id)),(0,V.jsx)(cA,{value:o,placeholder:i.length===0?`Search team members`:``,onChange:e=>{s(e.target.value),r(!0)},onFocus:()=>r(!0)}),(0,V.jsx)(aA,{$open:n,children:(0,V.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,V.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),n&&(0,V.jsxs)(lA,{children:[p.length===0&&(0,V.jsx)(uA,{$disabled:!0,children:(0,V.jsx)(fA,{children:(0,V.jsxs)(mA,{$disabled:!0,children:[`No results for "`,o.trim(),`"`]})})}),p.map(e=>{let t=i.some(t=>t.id===e.id);return(0,V.jsxs)(uA,{$disabled:e.disabled,$highlighted:t,onClick:()=>l(e),children:[(0,V.jsx)(dA,{children:t?`✓`:``}),(0,V.jsxs)(fA,{children:[(0,V.jsx)(pA,{$disabled:e.disabled,children:e.name}),(0,V.jsx)(mA,{$disabled:e.disabled,children:e.role})]})]},e.id)})]})]})]}),(0,V.jsxs)(hA,{children:[(0,V.jsx)(Zp,{isBasic:!0,onClick:e,children:`Cancel`}),(0,V.jsx)(Zp,{isPrimary:!0,onClick:()=>t(i.map(e=>e.id)),children:`Assign role`})]})]})})}var _A=[{id:`user-management`,label:`User management`},{id:`gdpr`,label:`GDPR & privacy`},{id:`tickets`,label:`Tickets`},{id:`workflow`,label:`Agent workflow`},{id:`automation`,label:`Automations & rules`},{id:`reporting`,label:`Reporting`},{id:`knowledge`,label:`Knowledge`},{id:`ai-agents`,label:`AI agents`},{id:`wfm`,label:`Workforce Management`}],vA=[{id:`settings`,label:`Settings`},{id:`products`,label:`Products`},{id:`wfm`,label:`WFM`}];function yA(e){return e===`v4`||e===`v5`||e===`v6`||e===`v6.5`||e===`v7`?vA:vA.filter(e=>e.id!==`wfm`)}var bA={tickets:{group:`settings`,available:!0,tags:[`tickets`,`workflow`]},"custom-objects":{group:`settings`,available:!0,tags:[`tickets`]},people:{group:`settings`,available:!0,tags:[`user-management`]},channels:{group:`settings`,available:!0,tags:[`tickets`,`channels`]},"agent-workflow":{group:`settings`,available:!0,tags:[`workflow`]},"business-rules":{group:`settings`,available:!0,tags:[`automation`,`workflow`]},security:{group:`settings`,available:!0,tags:[`gdpr`,`user-management`,`security`]},knowledge:{group:`products`,available:!0,tags:[`knowledge`]},reporting:{group:`settings`,available:!0,tags:[`reporting`]},support:{group:`products`,available:!0,tags:[`tickets`,`user-management`]},analytics:{group:`products`,available:!0,tags:[`reporting`]},voice:{group:`products`,available:!0,tags:[`tickets`,`channels`]},chat:{group:`products`,available:!0,tags:[`tickets`,`channels`]},"ai-agents":{group:`products`,available:!0,tags:[`ai-agents`]},qa:{group:`products`,available:!0,tags:[`reporting`,`workflow`]},"wfm-role-assignment":{group:`wfm`,available:!0,tags:[`wfm`,`workflow`,`user-management`,`reporting`]}},xA={availableOnly:!1,groups:[],topics:[]},SA=e=>{let t=bA[e];if(!t)return``;let n=_A.filter(e=>t.tags.includes(e.id)).map(e=>e.label);return[...t.tags,...n,t.group].join(` `)};function CA(e,t){let n=bA[e];return!n||!(t.availableOnly&&!n.available||t.groups.length&&!t.groups.includes(n.group)||t.topics.length&&!t.topics.some(e=>n.tags.includes(e)))}function wA(e,t){return!t.topics.length||e.some(e=>t.topics.includes(e))}function TA(e){let t=0;return e.availableOnly&&(t+=1),t+=e.groups.length,t+=e.topics.length,t}var EA=B.div`
  position: fixed;
  top: ${48}px;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(47, 57, 65, 0.45);
  z-index: 1100;
`,DA=B.div`
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
`,OA=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 20px 16px;
  flex-shrink: 0;
`,kA=B.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #2f3130;
`,AA=B.button.attrs({type:`button`})`
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
    color: #2f3130;
  }
`,jA=B.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 24px;
`,MA=B.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid #e9ebed;
  background: #fff;
  flex-shrink: 0;
`,NA=B.div`
  margin-bottom: 28px;
`,PA=B.h3`
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
`,FA=B.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,IA=B.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #2f3130;
  cursor: pointer;
`,LA=B.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-top: 2px;
  accent-color: #1f73b7;
  cursor: pointer;
`;function RA(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}var zA=()=>(0,V.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,V.jsx)(`path`,{d:`M1 1l10 10M11 1L1 11`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})});function BA({isOpen:e,onClose:t,value:n,onApply:r,version:i}){let[a,o]=(0,g.useState)(n),s=yA(i);if((0,g.useEffect)(()=>{e&&o(n)},[e,n]),(0,g.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t()};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[e,t]),!e)return null;let c=()=>{r(a),t()},l=document.querySelector(`[data-comment-root="true"]`)||document.body;return(0,v.createPortal)((0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(EA,{onClick:t,"aria-hidden":`true`}),(0,V.jsxs)(DA,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`permissions-filter-title`,children:[(0,V.jsxs)(OA,{children:[(0,V.jsx)(kA,{id:`permissions-filter-title`,children:`Filter`}),(0,V.jsx)(AA,{"aria-label":`Close`,onClick:t,children:(0,V.jsx)(zA,{})})]}),(0,V.jsxs)(jA,{children:[(0,V.jsxs)(NA,{children:[(0,V.jsx)(PA,{children:`Availability`}),(0,V.jsxs)(IA,{children:[(0,V.jsx)(LA,{checked:a.availableOnly,onChange:()=>o(e=>({...e,availableOnly:!e.availableOnly}))}),`Only available settings`]})]}),(0,V.jsxs)(NA,{children:[(0,V.jsx)(PA,{children:`Group`}),(0,V.jsx)(FA,{children:s.map(e=>(0,V.jsxs)(IA,{children:[(0,V.jsx)(LA,{checked:a.groups.includes(e.id),onChange:()=>o(t=>({...t,groups:RA(t.groups,e.id)}))}),e.label]},e.id))})]}),(0,V.jsxs)(NA,{children:[(0,V.jsx)(PA,{children:`Topic`}),(0,V.jsx)(FA,{children:_A.map(e=>(0,V.jsxs)(IA,{children:[(0,V.jsx)(LA,{checked:a.topics.includes(e.id),onChange:()=>o(t=>({...t,topics:RA(t.topics,e.id)}))}),e.label]},e.id))})]})]}),(0,V.jsxs)(MA,{children:[(0,V.jsx)(Zp,{isBasic:!0,onClick:t,children:`Cancel`}),(0,V.jsx)(Zp,{isPrimary:!0,onClick:c,children:`Apply Filters`})]})]})]}),l)}var VA=(0,g.createContext)({version:`v2`,filters:{availableOnly:!1,groups:[],topics:[]}});function HA({version:e,filters:t,children:n}){return(0,V.jsx)(VA.Provider,{value:{version:e,filters:t},children:n})}function UA(){return(0,g.useContext)(VA)}var WA=B.div``;function GA({tags:e=[],children:t}){let{version:n,filters:r}=UA();return n===`v3.5`&&!wA(e,r)?null:(0,V.jsx)(WA,{children:t})}function KA({members:e,version:t,roleKey:n,getProductAccess:r,getAiAgentsState:i,radioProducts:a=El}){let o=[],s=new Map,c=new Set,l=i(n),u=l.optedIn&&!l.saved&&!!l.accessLevel,d=Cl[l.accessLevel];for(let i of e){if(t!==`v1`)for(let e of a){let t=r(n,e.id);if(t.optedIn&&!t.saved&&t.accessLevel){let n=Pl[i.id]?.[e.id],r=Cl[t.accessLevel];n&&n!==r&&(o.push({memberId:i.id,memberName:i.name,productId:e.id,product:e.name,current:n,next:r}),s.set(e.id,e.name),c.add(i.id))}}u&&(l.accessLevel===`no_access`&&i.aiAgentsAccess===`No Access`||(o.push({memberId:i.id,memberName:i.name,productId:`ai-agents`,product:`AI agents`,current:i.aiAgentsAccess,next:d}),s.set(`ai-agents`,`AI agents`),c.add(i.id)))}let f=[...a.map(e=>e.id),`ai-agents`].filter(e=>s.has(e)).map(e=>({id:e,name:s.get(e)}));return{affectedMemberCount:c.size,products:f,rows:o}}var qA=B.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`,JA=B.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`,YA=B.div`
  padding: 24px 32px;
  flex: 1;
`,XA=B.aside`
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
`,ZA=B.h3`
  font-size: 16px;
  font-weight: 600;
  color: #2f3130;
  margin: 0 0 24px;
`,QA=B.div`
  text-align: center;
  padding: 40px 20px;
`,$A=B.div`
  font-size: 16px;
  font-weight: 600;
  color: #2f3130;
  margin-bottom: 8px;
`,ej=B.div`
  font-size: 14px;
  color: #646864;
  line-height: 1.5;
  margin-bottom: 16px;
`,tj=B.p`
  font-size: 14px;
  color: #646864;
  line-height: 1.5;
  margin: 0 0 24px;
`,nj=B.div`
  border-top: 1px solid #e9ebed;
`,rj=B.div`
  padding: 12px 0;
  font-size: 13px;
  font-weight: 600;
  color: #2f3130;
  border-bottom: 1px solid #e9ebed;
`,ij=B.div`
  padding: 14px 0;
  border-bottom: 1px solid #e9ebed;
`,aj=B.span`
  font-size: 14px;
  color: #1f73b7;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,oj=B(mh).attrs({"data-inspect-name":`Alert`,"data-inspect-token-bg":`bg/warning`,"data-inspect-token-color":`fg/warningEmphasis`})`
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
`,sj=B(oj)`
  margin: 0 0 16px;
`,cj=B.ul`
  margin: 2px 0 0;
  padding-left: 1.25em;
  font-size: 14px;
  line-height: 20px;
  color: #3b3405;

  li {
    margin: 0;
  }
`,lj=B(Qp)`
  display: inline-block;
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  /* Override alert ink so this stays Flora primary blue (blue.600 / .700). */
  color: #698cd3 !important;

  &:hover {
    color: #406cc4 !important;
  }
`,uj=B.div`
  font-size: 14px;
  color: #87929d;
`,dj=B.div`
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 20px;
  color: #3b3405;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,fj=()=>(0,V.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,focusable:`false`,style:{position:`absolute`,left:12,top:16,color:`#7f7004`},children:(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,fill:`currentColor`,d:`M7.84403 3.73819C8.8072 2.08705 11.1923 2.08717 12.1556 3.73819L17.9905 13.745C18.9606 15.4089 17.7619 17.4995 15.8352 17.4999H4.16532C2.2385 17.4997 1.039 15.409 2.00907 13.745L7.84403 3.73819ZM10.0003 7.51651C10.4604 7.51666 10.8333 7.88938 10.8333 8.34952V10.8446C10.8331 11.3046 10.4603 11.6775 10.0003 11.6776C9.54014 11.6776 9.16645 11.3047 9.1663 10.8446V8.34952C9.1663 7.88928 9.54005 7.51651 10.0003 7.51651ZM10.0003 12.2919C10.5754 12.2921 11.0412 12.7578 11.0413 13.3329C11.0413 13.9081 10.5755 14.3748 10.0003 14.3749C9.42496 14.3749 8.95829 13.9082 8.95829 13.3329C8.95843 12.7577 9.42505 12.2919 10.0003 12.2919Z`})}),pj=B.div``,mj=B.div`
  height: 28px;
  flex-shrink: 0;
`,hj=B.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px;
  border-top: 1px solid #e9ebed;
  background: #fff;
`,gj=B.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
    min-width: 410px;
  }
`,_j=B.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`,vj=B.div`
  position: relative;
  flex-shrink: 0;
  /* Container already pads 24px top / 32px right — add the remainder for 40px total */
  margin-top: 16px;
  margin-right: 8px;
`,yj=B(Zp)`
  && {
    color: #2f3130;
    border-color: #999b97;
  }

  &&:hover {
    color: #2f3130;
    border-color: #8b8e89;
  }

  /* Chevron at 20px to match Flora media button icon sizing. */
  &&& svg {
    width: 20px !important;
    height: 20px !important;
    min-width: 20px !important;
    color: #646864;
  }
`,bj=e=>(0,V.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 12 12`,focusable:`false`,"aria-hidden":`true`,...e,children:(0,V.jsx)(`path`,{fill:`currentColor`,d:`M1.646 3.646a.5.5 0 01.638-.057l.07.057L6 7.293l3.646-3.647a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.638.057l-.07-.057-4-4a.5.5 0 010-.708z`})}),xj=B.div`
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
`,Sj=B.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 15px;
  color: ${e=>e.$danger?`#cc3340`:`#2f3130`};
  cursor: pointer;

  &:hover {
    background: #f8f9f9;
  }
`,Cj=B.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 4px;
`,wj=B.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 32px;
`,Tj=B.div`
  margin-bottom: 32px;
`,Ej=B.div`
  display: flex;
  justify-content: ${e=>e.$endOnly?`flex-end`:`space-between`};
  align-items: flex-end;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: ${e=>e.$maxWidth||726}px;
  margin-bottom: 12px;
`,Dj=B.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: ${e=>e.$maxWidth||726}px;
  width: 100%;
  margin-bottom: 32px;
`,Oj=B.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  width: 100%;
`,kj=B.div`
  flex: 1;
  min-width: 0;
  max-width: ${e=>e.$maxWidth||400}px;
  color: #646864;
`,Aj=B(Zp)`
  flex-shrink: 0;

  && {
    color: #2f3130;
    border-color: #999b97;
  }

  &&:hover {
    color: #2f3130;
    border-color: #8b8e89;
  }

  && svg {
    color: #646864;
  }
`,jj=e=>(0,V.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,"aria-hidden":`true`,focusable:`false`,...e,width:`20`,height:`20`,viewBox:`0 0 20 20`,children:[(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.83301 2.5C6.29314 2.5 6.66682 2.87292 6.66699 3.33301V4.27148C8.10484 4.64145 9.16699 5.94638 9.16699 7.5C9.16699 9.05362 8.10484 10.3586 6.66699 10.7285V16.667C6.66682 17.1271 6.29314 17.5 5.83301 17.5C5.37303 17.4998 5.00018 17.127 5 16.667V10.7285C3.56202 10.3586 2.5 9.05371 2.5 7.5C2.5 5.94629 3.56202 4.64135 5 4.27148V3.33301C5.00018 2.87303 5.37303 2.50018 5.83301 2.5ZM5.83301 5.83301C4.91214 5.83318 4.16699 6.5791 4.16699 7.5C4.16699 8.4209 4.91214 9.16682 5.83301 9.16699C6.75402 9.16699 7.5 8.42101 7.5 7.5C7.5 6.57899 6.75402 5.83301 5.83301 5.83301Z`,fill:`currentColor`}),(0,V.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M14.167 2.5C14.627 2.50018 14.9998 2.87303 15 3.33301V10.9385C16.438 11.3084 17.5 12.6133 17.5 14.167C17.4998 16.0082 16.0082 17.4998 14.167 17.5C12.3256 17.5 10.8332 16.0083 10.833 14.167C10.833 12.6134 11.8952 11.3085 13.333 10.9385V3.33301C13.3332 2.87292 13.7069 2.5 14.167 2.5ZM14.167 12.5C13.246 12.5 12.5 13.246 12.5 14.167C12.5002 15.0879 13.2461 15.833 14.167 15.833C15.0877 15.8328 15.8328 15.0877 15.833 14.167C15.833 13.2461 15.0879 12.5002 14.167 12.5Z`,fill:`currentColor`})]}),Mj=B.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* Flora Filters: 8px between tags; 12px above via PermissionsFilterBlock gap. */
  gap: 8px;
  width: 100%;
`,Nj=B(Zp).attrs({isBasic:!0,size:`small`})`
  flex-shrink: 0;
  /* Sit on the medium Tag row without the full small-button chrome. */
  height: 20px;
  min-height: 20px;
  padding: 0 4px;
  line-height: 20px;
`,Pj=B.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: #2f3130;
  margin: ${e=>e.$flush?`0`:`28px 0 8px`};
  max-width: ${e=>e.$maxWidth||400}px;

  &:first-of-type {
    margin-top: ${e=>e.$flush?`0`:void 0};
  }
`,Fj=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: ${e=>e.$maxWidth||726}px;
  margin: 0 0 8px;

  > :first-child {
    flex: 1;
    min-width: 0;
    max-width: none;
  }
`,Ij=B(Zp).attrs({isBasic:!0})`
  flex-shrink: 0;
  margin-inline-end: -15px;
`,Lj=B.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
  /* Within-section title → controls; between-section spacing is Body gap 24px. */
  margin: 0 0 8px;
`,Rj=B.div`
  max-width: ${e=>e.$maxWidth||400}px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`,zj=B(j_)`
  max-width: ${e=>e.$maxWidth||630}px;
`,Bj=B.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
`,Vj=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Hj=B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,Uj=B(xS).attrs({size:`small`,isPill:!0})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: #fae7d7;
  color: #4a290c;

  &:hover {
    color: #4a290c;
  }
`,Wj=B.div.attrs({role:`alert`})`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 726px;
  margin: 0 0 24px;
  padding: 16px;
  border-radius: 16px;
  border: none;
  background: #f7e5e6;
  color: #5f1c20;
`,Gj=B.span`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  /* Flora Alert type icon: filled danger/700, white bang. */
  color: #c63f46;
`,Kj=B.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,qj=B.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;
  color: #5f1c20;
`,Jj=B.div`
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
`,Yj=()=>(0,V.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 16 16`,"aria-hidden":`true`,focusable:`false`,children:[(0,V.jsx)(`circle`,{cx:`7.5`,cy:`8.5`,r:`7.5`,fill:`#fff`}),(0,V.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M7.5 1C3.36 1 0 4.36 0 8.5 0 12.64 3.36 16 7.5 16S15 12.64 15 8.5C15 4.36 11.64 1 7.5 1zM7 4.5c0-.28.22-.5.5-.5s.5.22.5.5V9c0 .28-.22.5-.5.5S7 9.28 7 9V4.5zm.5 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z`})]}),Xj=B.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
  margin-bottom: 4px;
`,Zj=B.span`
  font-size: 12px;
  color: #646864;
  font-weight: 400;
`,Qj=B.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Q=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #2f3130;
  cursor: pointer;
`,$=B.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
`,$j=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eM=B.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #2f3130;
  cursor: pointer;
`,tM=B.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
`,nM=B.span`
  color: #1f73b7;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`,rM=[`tickets`,`custom-objects`,`people`,`channels`,`agent-workflow`,`business-rules`,`security`,`knowledge`,`reporting`,`ai-agents`],iM=[...rM.filter(e=>e!==`ai-agents`),...wl.map(e=>e.id)],aM=rM.filter(e=>e!==`ai-agents`&&e!==`knowledge`),oM=Tl.map(e=>e.id),sM=[...aM,...oM],cM=[`wfm-role-assignment`,...sM],lM={tickets:[[`tickets`],[`tickets`],[`tickets`],[`tickets`],[`tickets`],[`tickets`]],"custom-objects":[[`tickets`]],people:[[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`]],channels:[[`channels`,`tickets`],[`channels`,`tickets`]],"agent-workflow":[[`workflow`],[`workflow`],[`workflow`],[`workflow`],[`workflow`],[`workflow`]],"business-rules":[[`automation`],[`automation`],[`automation`],[`automation`],[`automation`]],security:[[`gdpr`,`security`],[`gdpr`,`security`],[`gdpr`,`user-management`]],reporting:[[`reporting`],[`reporting`],[`reporting`]]};function uM(e,t,n){if(n!==`v3.5`||!t.topics.length)return!0;let r=lM[e];return!r||r.some(e=>wA(e,t))}function dM(){let{id:e}=Ue(),t=Ve(),n=ze(),{version:r,getAiAgentsState:i,updateAiAgentsState:a,roles:o,addRole:s,setAiAgentsRoleId:c,roleAssignments:l,assignMembersToRole:u,getProductAccess:d,updateProductAccess:f,saveProductAccess:p,copyProductAccess:m}=Bl(),h=r===`v3`||r===`v3.5`||r===`v4`||r===`v5`||r===`v6`||r===`v6.5`||r===`v7`,_=r===`v4`||r===`v5`||r===`v6`||r===`v6.5`||r===`v7`,v=r===`v4`||r===`v5`||r===`v6`||r===`v6.5`||r===`v7`,y=r===`v4`,b=r===`v5`,x=r===`v6`,S=r===`v6.5`,C=r===`v7`,w=r===`v2.5`,T=h?Tl:wl,E=h?Dl:El,[D,O]=(0,g.useState)(!1),[k,A]=(0,g.useState)(`Role saved successfully`),[j,ee]=(0,g.useState)(!1),[te,M]=(0,g.useState)(!1),[ne,re]=(0,g.useState)(!1),[N,ie]=(0,g.useState)(xA),ae=(0,g.useRef)(null),oe=e===`create`,se=oe?null:o.find(t=>t.id===e),ce=se?.name||``,le=e===`counselor`,[ue,de]=(0,g.useState)([`Brands`,`Groups`]),[fe,pe]=(0,g.useState)(null),me=oe?fe:e,he=me||`create`,ge=i(he),_e=ge.optedIn&&!ge.saved&&!!ge.accessLevel,ve=Cl[ge.accessLevel],ye=e=>!(ge.accessLevel===`no_access`&&e.aiAgentsAccess===`No Access`),be=e=>{if(h||w)return[];let t=[];if(r===`v2`)for(let n of E){let r=d(he,n.id);if(r.optedIn&&!r.saved&&r.accessLevel){let i=Pl[e.id]?.[n.id],a=Cl[r.accessLevel];i&&i!==a&&t.push({key:n.id,product:n.name,body:`${i} to ${a}`})}}return _e&&ye(e)&&t.push({key:`ai-agents`,product:`AI agents`,body:`${e.aiAgentsAccess} to ${ve}`}),t},[xe,Se]=(0,g.useState)(se?.name||``),[Ce,we]=(0,g.useState)(se?.description||``),[Te,Ee]=(0,g.useState)(()=>n.state?.rolePackage||``),[P,De]=(0,g.useState)(()=>Ex(n.state?.rolePackage||``)),[Oe,ke]=(0,g.useState)(()=>v&&e===`create`&&!n.state?.rolePackage),[Ae,je]=(0,g.useState)(!1),F=(e,t)=>{De(n=>({...n,[e]:t}))},Me=e=>{Ee(e),De(Ex(e)),je(!1);let t=Dx(e);for(let[e,n]of Object.entries(t))e===`ai-agents`?a(he,{optedIn:n!==`no_access`,saved:!1,accessLevel:n}):f(he,e,{optedIn:!0,saved:!1,accessLevel:n})},Ne=(0,g.useRef)(null),Pe=(0,g.useRef)(null),Fe=(0,g.useRef)(null),Ie=(0,g.useRef)(null),[Le,Re]=(0,g.useState)(()=>e===`counselor`?{reporting:!0}:r===`v1`?{"ai-agents":!0}:{}),[Be,He]=(0,g.useState)(``),We=Be.trim();(0,g.useEffect)(()=>{if(Se(se?.name||``),we(se?.description||``),oe){let e=v&&n.state?.rolePackage||``;e?Me(e):(Ee(``),De(Ex(``))),ke(v&&!e)}else ke(!1);Re(e===`counselor`?{reporting:!0}:r===`v1`?{"ai-agents":!0}:{}),de(e===`counselor`?[`Brands`,`Groups`]:[]),He(``),ie(h?xA:{availableOnly:!1,groups:[],topics:[]}),re(!1)},[e,se?.name,se?.description,r,h,v,oe,n.state?.rolePackage]),(0,g.useEffect)(()=>{n.state?.scrollToAiAgents&&setTimeout(()=>{Ne.current?.scrollIntoView({behavior:`smooth`,block:`start`})},100)},[n.state]),(0,g.useEffect)(()=>{let e=e=>{ae.current&&!ae.current.contains(e.target)&&M(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let Ge=(me&&l[me]||[]).map(e=>Al.find(t=>t.id===e)).filter(Boolean),Ke=w&&!le?KA({members:Ge,version:r,roleKey:he,getProductAccess:d,getAiAgentsState:i,radioProducts:E}):null,qe=!!(Ke&&Ke.affectedMemberCount>0),Je=!oe||!!fe,Ye=Je,Xe=()=>{if(le&&ue.length>0){Fe.current?.scrollTo({top:0,behavior:`smooth`}),Ie.current?.scrollIntoView({behavior:`smooth`,block:`start`});return}if(oe&&xe.trim()){let e=xe.toLowerCase().replace(/\s+/g,`-`);o.some(t=>t.id===e)||s({id:e,name:xe.trim(),type:`Custom`,description:Ce.trim()}),pe(e),ge.optedIn&&(a(e,{...ge,saved:!0}),c(e)),m(`create`,e),a(`create`,{optedIn:!1,saved:!1,accessLevel:null})}else!oe&&ge.optedIn&&(a(e,{saved:!0}),c(e));oe||p(e),A(oe?`Role created`:`Role saved successfully`),O(!0),setTimeout(()=>O(!1),4e3)},Ze=e=>{me&&u(me,e),ee(!1),A(`Team member assigned`),O(!0),setTimeout(()=>O(!1),4e3)},Qe=r===`v1`?rM:r===`v4`||r===`v5`||r===`v6`||r===`v6.5`||r===`v7`?cM:h?sM:iM,$e=Qe.every(e=>Le[e]),et=()=>{Re($e?{}:Object.fromEntries(Qe.map(e=>[e,!0])))},tt=e=>{Re(t=>({...t,[e]:!t[e]}))},nt=e=>({open:!!Le[e],onToggle:()=>tt(e),query:We,maxWidth:726}),rt=e=>h?CA(e,N)?r===`v3.5`&&lM[e]?uM(e,N,r):!0:!1:!0,it=(e,t)=>{ie(n=>e===`available`?{...n,availableOnly:!1}:e===`group`?{...n,groups:n.groups.filter(e=>e!==t)}:e===`topic`?{...n,topics:n.topics.filter(e=>e!==t)}:n)},at=()=>{ie({availableOnly:!1,groups:[],topics:[]})},ot=TA(N),st=[];N.availableOnly&&st.push({key:`available`,kind:`available`,id:`available`,label:`Only available settings`}),N.groups.forEach(e=>{let t=vA.find(t=>t.id===e);t&&st.push({key:`group-${e}`,kind:`group`,id:e,label:t.label})}),N.topics.forEach(e=>{let t=_A.find(t=>t.id===e);t&&st.push({key:`topic-${e}`,kind:`topic`,id:e,label:t.label})});let ct=(e,t=``)=>[t,h?SA(e):``].filter(Boolean).join(` `);return(0,g.useEffect)(()=>{if(!h||!(N.groups.length>0||N.topics.length>0))return;let e=(r===`v4`||r===`v5`||r===`v6`||r===`v6.5`||r===`v7`?cM:r===`v3.5`||r===`v3`?sM:iM).filter(e=>CA(e,N)?r===`v3.5`&&lM[e]?uM(e,N,r):!0:!1);e.length&&Re(t=>{let n={...t},r=!1;for(let t of e)n[t]||(n[t]=!0,r=!0);return r?n:t})},[h,N,r]),(0,V.jsxs)(qA,{children:[D&&(0,V.jsx)(gj,{children:(0,V.jsxs)(yh,{type:`success`,children:[(0,V.jsx)(yh.Title,{children:k}),(0,V.jsx)(yh.Close,{"aria-label":`Close`,onClick:()=>O(!1)})]})}),v&&oe&&!Je&&Oe&&(0,V.jsx)(Bx,{onClose:()=>t(`/roles`),onContinue:e=>{Me(e),ke(!1),t(`/roles/create`,{replace:!0,state:{rolePackage:e}})}}),(0,V.jsxs)(JA,{ref:Fe,children:[(0,V.jsxs)(YA,{children:[(0,V.jsx)(im,{items:[{label:`People`},{label:`Team`},{label:`Roles`,path:`/roles`},{label:Je&&oe?`Edit role`:oe?`Create role`:ce}]}),(0,V.jsxs)(_j,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(Cj,{children:oe&&!Je?`Create role`:xe.trim()||ce||`Role`}),(0,V.jsx)(wj,{children:`Learn about role permissions and access`})]}),Ye&&(0,V.jsxs)(vj,{ref:ae,children:[(0,V.jsxs)(yj,{onClick:()=>M(e=>!e),children:[`Actions`,(0,V.jsx)(Zp.EndIcon,{isRotated:te,children:(0,V.jsx)(bj,{})})]}),te&&(0,V.jsxs)(xj,{children:[(0,V.jsx)(Sj,{onClick:()=>M(!1),children:`Clone role`}),(0,V.jsx)(Sj,{onClick:()=>{M(!1),ee(!0)},children:`Assign role`}),(0,V.jsx)(Sj,{$danger:!0,onClick:()=>M(!1),children:`Delete role`})]})]})]}),le&&ue.length>0&&(0,V.jsxs)(Wj,{ref:Ie,children:[(0,V.jsx)(Gj,{children:(0,V.jsx)(Yj,{})}),(0,V.jsxs)(Kj,{children:[(0,V.jsx)(qj,{children:`Can't save this role`}),(0,V.jsxs)(Jj,{children:[`You must finish the setting up the role`,(0,V.jsx)(`ul`,{children:ue.map(e=>(0,V.jsx)(`li`,{children:e},e))})]})]})]}),(0,V.jsxs)(Tj,{children:[(0,V.jsx)(Rj,{$maxWidth:400,children:(0,V.jsxs)(D_,{children:[(0,V.jsx)(D_.Label,{children:`Name* (required)`}),(0,V.jsx)(N_,{value:xe,onChange:e=>Se(e.target.value),required:!0})]})}),(0,V.jsx)(Rj,{$maxWidth:630,children:(0,V.jsxs)(D_,{children:[(0,V.jsx)(D_.Label,{children:`Description`}),(0,V.jsx)(L_,{value:Ce,onChange:e=>we(e.target.value),minRows:3,isResizable:!0})]})})]}),v&&oe&&!Je&&Te&&(0,V.jsx)(Tj,{children:(0,V.jsxs)(zj,{$maxWidth:630,children:[(0,V.jsx)(j_.Legend,{children:`Role type`}),(0,V.jsx)(Bj,{children:`Applies a starting set of permissions across settings and products. Change the type to re-apply the package, or tweak anything below.`}),(0,V.jsx)(Vj,{children:Sx.map(e=>{let t=Te===e.value,n=t&&(!Ox(e.value,P)||!kx(e.value,e=>e===`ai-agents`?i(he).accessLevel:d(he,e).accessLevel)||Ae);return(0,V.jsx)(D_,{children:(0,V.jsxs)(P_,{name:`role-package`,value:e.value,checked:t,onChange:()=>Me(e.value),children:[(0,V.jsx)(D_.Label,{children:(0,V.jsxs)(Hj,{children:[(0,V.jsx)(`span`,{children:e.label}),n&&(0,V.jsx)(Uj,{children:`Customized`})]})}),(0,V.jsx)(D_.Hint,{children:e.description})]})},e.value)})})]})}),h?(0,V.jsxs)(Dj,{$maxWidth:726,children:[(0,V.jsxs)(Oj,{children:[(0,V.jsx)(kj,{$maxWidth:400,children:(0,V.jsxs)(D_,{children:[(0,V.jsx)(D_.Label,{children:`Search permissions`}),(0,V.jsx)(J_,{start:(0,V.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,V.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.25`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,V.jsx)(`path`,{d:`M11.2 11.2L15 15`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),value:Be,onChange:e=>He(e.target.value)})]})}),(0,V.jsxs)(Aj,{onClick:()=>re(!0),children:[(0,V.jsx)(Zp.StartIcon,{children:(0,V.jsx)(jj,{})}),`Filter`,ot>0?` (${ot})`:``]})]}),st.length>0&&(0,V.jsxs)(Mj,{children:[st.map(e=>(0,V.jsxs)(xS,{isPill:!1,children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(xS.Close,{"aria-label":`Remove filter`,onClick:()=>it(e.kind,e.id)})]},e.key)),(0,V.jsx)(Nj,{onClick:at,children:`Clear filters`})]})]}):(0,V.jsxs)(Ej,{$maxWidth:726,children:[(0,V.jsx)(kj,{$maxWidth:400,children:(0,V.jsxs)(D_,{children:[(0,V.jsx)(D_.Label,{children:`Search permissions`}),(0,V.jsx)(J_,{start:(0,V.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,V.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.25`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,V.jsx)(`path`,{d:`M11.2 11.2L15 15`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),value:Be,onChange:e=>He(e.target.value)})]})}),(0,V.jsx)(Ij,{onClick:et,children:$e?`Close all`:`Open all`})]}),(0,V.jsxs)(HA,{version:r,filters:N,children:[_&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(Fj,{$maxWidth:726,children:[(0,V.jsx)(Pj,{$maxWidth:726,$flush:!0,children:`Workforce Management (WFM)`}),(0,V.jsx)(Ij,{onClick:et,children:$e?`Close all`:`Open all`})]}),rt(`wfm-role-assignment`)&&(0,V.jsx)(`div`,{ref:Pe,children:(0,V.jsx)(Jk,{title:`WFM role assignment`,description:`Choose whether people in this Support role also receive a WFM role.`,searchText:ct(`wfm-role-assignment`,Ak),...nt(`wfm-role-assignment`),children:(0,V.jsx)(Ik,{query:We,saved:Je},`${r}-${e}`)})})]}),h&&(0,V.jsxs)(Fj,{$maxWidth:726,children:[(0,V.jsx)(Pj,{$maxWidth:726,$flush:!_,children:`Settings`}),!_&&(0,V.jsx)(Ij,{onClick:et,children:$e?`Close all`:`Open all`})]}),rt(`tickets`)&&(0,V.jsxs)(Jk,{title:`Tickets`,description:`Choose the ticket permissions for this role.`,searchText:ct(`tickets`),...nt(`tickets`),children:[(0,V.jsxs)(GA,{tags:[`tickets`],children:[(0,V.jsx)(Xj,{style:{marginBottom:`12px`},children:`Tickets they can access`}),(0,V.jsxs)($j,{children:[(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`ticket-access`,checked:P.ticketAccess===`org`,onChange:()=>F(`ticketAccess`,`org`)}),` Requested by and users in their organizations`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`ticket-access`,checked:P.ticketAccess===`groups`,onChange:()=>F(`ticketAccess`,`groups`)}),` Within their groups`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`ticket-access`,checked:P.ticketAccess===`public`,onChange:()=>F(`ticketAccess`,`public`)}),` Within their group and all public groups`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`ticket-access`,checked:P.ticketAccess===`all`,onChange:()=>F(`ticketAccess`,`all`)}),` All, including those in private groups`]})]})]}),(0,V.jsxs)(GA,{tags:[`tickets`],children:[(0,V.jsx)(Lj,{children:`Manage suspended tickets`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageSuspended,onChange:e=>F(`manageSuspended`,e.target.checked)}),` Each allowed `,(0,V.jsx)(Zj,{children:`- Automatically suspends tickets that may be risky or malicious`})]})})]}),(0,V.jsxs)(GA,{tags:[`tickets`],children:[(0,V.jsx)(Lj,{children:`Edit ticket properties`}),(0,V.jsxs)(Qj,{children:[(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.editTicketProperties,onChange:e=>F(`editTicketProperties`,e.target.checked)}),` Can tag and edit tickets and edit properties`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.deleteTickets,onChange:e=>F(`deleteTickets`,e.target.checked)}),` Delete tickets`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.restrictTicketContent,onChange:e=>F(`restrictTicketContent`,e.target.checked)}),` Restrict ticket content`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.mergeTickets,onChange:e=>F(`mergeTickets`,e.target.checked)}),` Merge tickets`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.editTicketTags,onChange:e=>F(`editTicketTags`,e.target.checked)}),` Edit ticket tags`]})]})]}),(0,V.jsxs)(GA,{tags:[`tickets`],children:[(0,V.jsx)(Lj,{children:`Commenting permissions`}),(0,V.jsxs)(Qj,{children:[(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.privateComments,onChange:e=>F(`privateComments`,e.target.checked)}),` Private comments only`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.publicPrivateComments,onChange:e=>F(`publicPrivateComments`,e.target.checked)}),` Public and private comments`]})]})]}),(0,V.jsxs)(GA,{tags:[`tickets`],children:[(0,V.jsx)(Lj,{children:`Manage ticket forms`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageTicketForms,onChange:e=>F(`manageTicketForms`,e.target.checked)}),` Can access the Ticket Forms admin page and create, edit, update, and delete ticket forms`]})})]}),(0,V.jsxs)(GA,{tags:[`tickets`],children:[(0,V.jsx)(Lj,{children:`Manage ticket fields`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageTicketFields,onChange:e=>F(`manageTicketFields`,e.target.checked)}),` Can customize Ticket Fields admin page and create, edit, update, and delete ticket fields`]})})]})]}),rt(`custom-objects`)&&(0,V.jsx)(Jk,{title:`Custom objects`,description:`No objects yet.`,searchText:ct(`custom-objects`),...nt(`custom-objects`),children:(0,V.jsx)(GA,{tags:[`tickets`],children:(0,V.jsx)(nM,{children:`Can view and edit objects`})})}),rt(`people`)&&(0,V.jsxs)(Jk,{title:`People`,description:`Choose the people permissions for this role.`,searchText:ct(`people`),...nt(`people`),children:[(0,V.jsxs)(GA,{tags:[`user-management`],children:[(0,V.jsx)(Xj,{style:{marginBottom:`12px`},children:`Manage and users`}),(0,V.jsxs)(Qj,{children:[(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.endUsersViewOnly,onChange:e=>F(`endUsersViewOnly`,e.target.checked)}),` View only`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.endUsersOrgEdit,onChange:e=>F(`endUsersOrgEdit`,e.target.checked)}),` Add, edit, and assume profiles in organizations they belong to`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.endUsersAnyEdit,onChange:e=>F(`endUsersAnyEdit`,e.target.checked)}),` Add, edit, delete, and assume profiles for any end user`]})]})]}),(0,V.jsxs)(GA,{tags:[`user-management`],children:[(0,V.jsx)(Lj,{children:`Search and view lists of end users`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.searchEndUsers,onChange:e=>F(`searchEndUsers`,e.target.checked)}),` Find end users by name, email, phone, or organization. Without this, agents can only view individual and team profiles.`]})})]}),(0,V.jsxs)(GA,{tags:[`user-management`],children:[(0,V.jsx)(Lj,{children:`Manage team members`}),(0,V.jsxs)(Qj,{children:[(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.teamMembers===`none`,onChange:()=>F(`teamMembers`,`none`)}),` Not allowed`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.teamMembers===`view`,onChange:()=>F(`teamMembers`,`view`)}),` View only`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.teamMembers===`manage`,onChange:()=>F(`teamMembers`,`manage`)}),` Create, assign roles, add, and delete`]})]})]}),(0,V.jsxs)(GA,{tags:[`user-management`],children:[(0,V.jsx)(Lj,{children:`Manage groups`}),(0,V.jsxs)(Qj,{children:[(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageGroupMembers,onChange:e=>F(`manageGroupMembers`,e.target.checked)}),` Add and remove team members from groups`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageGroups,onChange:e=>F(`manageGroups`,e.target.checked)}),` Create, edit, and delete groups`]})]})]}),(0,V.jsxs)(GA,{tags:[`user-management`],children:[(0,V.jsx)(Lj,{children:`Manage organizations`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageOrganizations,onChange:e=>F(`manageOrganizations`,e.target.checked)}),` Add, update, delete organizations`]})})]}),(0,V.jsxs)(GA,{tags:[`user-management`],children:[(0,V.jsx)(Lj,{children:`Manage organization fields`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageOrgFields,onChange:e=>F(`manageOrgFields`,e.target.checked)}),` Can add, edit, and delete organization fields`]})})]}),(0,V.jsxs)(GA,{tags:[`user-management`],children:[(0,V.jsx)(Lj,{children:`Manage roles`}),(0,V.jsxs)(Qj,{children:[(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageRoles,onChange:e=>F(`manageRoles`,e.target.checked)}),` Create, edit, and delete roles`]}),(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageSubdomainRoles,onChange:e=>F(`manageSubdomainRoles`,e.target.checked)}),` Can only edit subdomain roles`]})]})]}),(0,V.jsxs)(GA,{tags:[`user-management`],children:[(0,V.jsx)(Lj,{children:`Manage user fields`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageUserFields,onChange:e=>F(`manageUserFields`,e.target.checked)}),` Can access the User Fields admin page and create, edit, update, and delete user fields`]})})]})]}),rt(`channels`)&&(0,V.jsxs)(Jk,{title:`Channels`,description:`Choose the channel permissions for this role.`,searchText:ct(`channels`),...nt(`channels`),children:[(0,V.jsxs)(GA,{tags:[`tickets`,`channels`],children:[(0,V.jsx)(Xj,{style:{marginBottom:`8px`},children:`Manage channels and extensions`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageChannels,onChange:e=>F(`manageChannels`,e.target.checked)}),` Channels include email, social messaging apps, and other means of communication. Extensions include triggers, automations, and integrations.`]})})]}),(0,V.jsxs)(GA,{tags:[`tickets`,`channels`],children:[(0,V.jsx)(Lj,{children:`Manage Facebook pages`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageFacebook,onChange:e=>F(`manageFacebook`,e.target.checked)}),` Can set Facebook pages to create tickets from Facebook wall posts`]})})]})]}),rt(`agent-workflow`)&&(0,V.jsxs)(Jk,{title:`Agent workflow`,description:`Choose the agent workflow permissions for this role.`,searchText:ct(`agent-workflow`),...nt(`agent-workflow`),children:[(0,V.jsxs)(GA,{tags:[`workflow`],children:[(0,V.jsx)(Xj,{style:{marginBottom:`12px`},children:`Manage permissions`}),(0,V.jsxs)($j,{children:[(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`views`,checked:P.views===`my`,onChange:()=>F(`views`,`my`)}),` My views only`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`views`,checked:P.views===`see`,onChange:()=>F(`views`,`see`)}),` See views only`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`views`,checked:P.views===`personal`,onChange:()=>F(`views`,`personal`)}),` Add and edit personal views`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`views`,checked:P.views===`group`,onChange:()=>F(`views`,`group`)}),` Add and edit personal and group views`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`views`,checked:P.views===`global`,onChange:()=>F(`views`,`global`)}),` Add and edit personal, group, and global views`]})]})]}),(0,V.jsxs)(GA,{tags:[`workflow`],children:[(0,V.jsx)(Lj,{children:`Limit number of views`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.limitViews,onChange:e=>F(`limitViews`,e.target.checked)}),` Limit views to 12 shared views and 8 personal views`]})})]}),(0,V.jsxs)(GA,{tags:[`workflow`],children:[(0,V.jsx)(Lj,{children:`Access view filtering`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.filterViews,onChange:e=>F(`filterViews`,e.target.checked)}),` Can view and filter views`]})})]}),(0,V.jsxs)(GA,{tags:[`workflow`],children:[(0,V.jsx)(Lj,{children:`Macro permissions`}),(0,V.jsxs)($j,{children:[(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`macros`,checked:P.macros===`apply`,onChange:()=>F(`macros`,`apply`)}),` Apply only`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`macros`,checked:P.macros===`personal`,onChange:()=>F(`macros`,`personal`)}),` Add and edit personal macros`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`macros`,checked:P.macros===`group`,onChange:()=>F(`macros`,`group`)}),` Add and edit personal and group macros`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`macros`,checked:P.macros===`global`,onChange:()=>F(`macros`,`global`)}),` Add and edit personal, group, and global macros`]})]})]}),(0,V.jsxs)(GA,{tags:[`workflow`],children:[(0,V.jsx)(Lj,{children:`Access dynamic content`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.dynamicContent,onChange:e=>F(`dynamicContent`,e.target.checked)}),` Can view, edit, and add dynamic content`]})})]}),(0,V.jsxs)(GA,{tags:[`workflow`],children:[(0,V.jsx)(Lj,{children:`Manage contextual workspaces`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.contextualWorkspaces,onChange:e=>F(`contextualWorkspaces`,e.target.checked)}),` Can view, edit, and edit contextual workspaces`]})})]})]}),rt(`business-rules`)&&(0,V.jsxs)(Jk,{title:`Business rules`,description:`Choose the business rules permissions for this role.`,searchText:ct(`business-rules`),...nt(`business-rules`),children:[(0,V.jsxs)(GA,{tags:[`automation`],children:[(0,V.jsx)(Xj,{style:{marginBottom:`8px`},children:`Automations`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.automations,onChange:e=>F(`automations`,e.target.checked)}),` Can view, add, edit, and delete automations`]})})]}),(0,V.jsxs)(GA,{tags:[`automation`],children:[(0,V.jsx)(Lj,{children:`Skills`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.skills,onChange:e=>F(`skills`,e.target.checked)}),` Can view, add, edit, and delete skills`]})})]}),(0,V.jsxs)(GA,{tags:[`automation`],children:[(0,V.jsx)(Lj,{children:`Service level agreements`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.slas,onChange:e=>F(`slas`,e.target.checked)}),` Can view, add, edit, and delete service level agreements`]})})]}),(0,V.jsxs)(GA,{tags:[`automation`],children:[(0,V.jsx)(Lj,{children:`Triggers`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.triggers,onChange:e=>F(`triggers`,e.target.checked)}),` Can view, edit, add, and delete triggers`]})})]}),(0,V.jsxs)(GA,{tags:[`automation`],children:[(0,V.jsx)(Lj,{children:`Business rules analysis`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.businessRulesAnalysis,onChange:e=>F(`businessRulesAnalysis`,e.target.checked)}),` Can view, edit, add, and delete business rule analysis`]})})]})]}),rt(`security`)&&(0,V.jsxs)(Jk,{title:`Security and privacy`,description:`Choose the security and privacy permissions for this role.`,searchText:ct(`security`),...nt(`security`),children:[(0,V.jsx)(GA,{tags:[`gdpr`,`security`],children:(0,V.jsx)(Xj,{style:{marginBottom:`8px`},children:`Manage access and security permissions for this role.`})}),(0,V.jsxs)(GA,{tags:[`gdpr`,`security`],children:[(0,V.jsx)(Lj,{children:`Manage deletion schedules`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.deletionSchedules,onChange:e=>F(`deletionSchedules`,e.target.checked)}),` Admins or Admins automatically delete data like tickets.`]})})]}),(0,V.jsxs)(GA,{tags:[`gdpr`,`user-management`],children:[(0,V.jsx)(Lj,{children:`Data handling`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.hidePii,onChange:e=>F(`hidePii`,e.target.checked)}),` Hide end user personally identifiable information (PII) from this role`]})}),(0,V.jsx)(`div`,{style:{marginTop:`12px`},children:(0,V.jsxs)(`table`,{style:{fontSize:`13px`,color:`#2f3130`},children:[(0,V.jsx)(`thead`,{children:(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`th`,{style:{textAlign:`left`,padding:`4px 16px 4px 0`,fontWeight:500},children:`User field`}),(0,V.jsx)(`th`,{style:{textAlign:`left`,padding:`4px 0`,fontWeight:500},children:`Access`})]})}),(0,V.jsxs)(`tbody`,{children:[(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{style:{padding:`4px 16px 4px 0`},children:`Name`}),(0,V.jsx)(`td`,{children:`✓`})]}),(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{style:{padding:`4px 16px 4px 0`},children:`Phone`}),(0,V.jsx)(`td`,{children:`✓`})]}),(0,V.jsxs)(`tr`,{children:[(0,V.jsx)(`td`,{style:{padding:`4px 16px 4px 0`},children:`Email`}),(0,V.jsx)(`td`,{children:`✓`})]})]})]})})]})]}),!h&&(0,V.jsx)(Jk,{title:`Knowledge`,description:`Choose whether or not this role includes managing Knowledge.`,...nt(`knowledge`),children:(0,V.jsxs)(Qj,{children:[(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.manageGuide,onChange:e=>F(`manageGuide`,e.target.checked)}),` Manage Guide`]}),(0,V.jsx)(Zj,{style:{marginLeft:`24px`,display:`block`},children:`Can by default have an admin and can manage articles, themes, and settings.`})]})}),rt(`reporting`)&&(0,V.jsx)(Jk,{title:`Reporting and analytics`,description:le?`Choose the analytics permissions for this role.`:`Choose the reporting and analytics permissions for this role.`,searchText:ct(`reporting`,le?tO:``),errorCount:le?ue.length:0,...nt(`reporting`),children:le?(0,V.jsx)(GA,{tags:[`reporting`],children:(0,V.jsx)(nO,{onSaveErrorsChange:de})}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(GA,{tags:[`reporting`],children:[(0,V.jsx)(Xj,{style:{marginBottom:`12px`},children:`Explore permissions`}),(0,V.jsxs)($j,{children:[(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`explore`,checked:P.explore===`none`,onChange:()=>F(`explore`,`none`)}),` No access`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`explore`,checked:P.explore===`view`,onChange:()=>F(`explore`,`view`)}),` View reports`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`explore`,checked:P.explore===`create`,onChange:()=>F(`explore`,`create`)}),` Create reports`]}),(0,V.jsxs)(eM,{children:[(0,V.jsx)(tM,{name:`explore`,checked:P.explore===`manage`,onChange:()=>F(`explore`,`manage`)}),` Create reports and manage permissions`]})]})]}),(0,V.jsxs)(GA,{tags:[`reporting`],children:[(0,V.jsx)(Lj,{children:`Reports permissions`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.supportReports,onChange:e=>F(`supportReports`,e.target.checked)}),` Refer to the Reports tab in Support, not reports within Explore. These who can also export data.`]})})]}),(0,V.jsxs)(GA,{tags:[`reporting`],children:[(0,V.jsx)(Lj,{children:`View Talk dashboard`}),(0,V.jsx)(Qj,{children:(0,V.jsxs)(Q,{children:[(0,V.jsx)($,{checked:P.talkDashboard,onChange:e=>F(`talkDashboard`,e.target.checked)}),` Can track phone calls on the Talk dashboard`]})})]})]})}),r===`v1`&&(0,V.jsx)(pj,{ref:Ne,children:(0,V.jsx)(Jk,{title:`AI agents`,description:`Choose whether this role can access AI agents.`,searchText:IS,...nt(`ai-agents`),children:(0,V.jsx)(LS,{roleId:he,query:We})})}),h&&(0,V.jsx)(Pj,{$maxWidth:726,children:`Products`}),r!==`v1`&&T.map(e=>rt(e.id)?e.id===`ai-agents`?(0,V.jsx)(pj,{ref:Ne,children:(0,V.jsx)(Jk,{title:`AI agents`,description:`Choose whether this role can access AI agents.`,searchText:ct(`ai-agents`,IS),...nt(`ai-agents`),children:(0,V.jsx)(LS,{roleId:he,query:We,directAccess:h})})},e.id):(0,V.jsx)(g.Fragment,{children:(0,V.jsx)(Jk,{title:e.name,description:e.id===`knowledge`&&h?`Choose product access and whether this role can manage Knowledge.`:y&&e.id===`qa`?`Choose an access level, then refine permissions by job if needed.`:b&&e.id===`qa`?`Choose an access level, then open a domain to refine its settings.`:x&&e.id===`qa`?`Inherit from role type; add only the exceptions this role needs.`:S&&e.id===`qa`?`Choose a type, then customize permissions in place.`:C&&e.id===`qa`?`Choose a type, then customize permissions by job section.`:`Choose whether this role can access ${e.name}.`,searchText:ct(e.id,e.disabled?`Subscription limit reached`:y&&e.id===`qa`?cC():b&&e.id===`qa`?fC():x&&e.id===`qa`?mC():S&&e.id===`qa`?dE():C&&e.id===`qa`?GE():$S(e,{directAccess:h,includeManage:e.id===`knowledge`&&h})),...nt(e.id),children:e.disabled?(0,V.jsx)(uj,{children:`Subscription limit reached`}):y&&e.id===`qa`?(0,V.jsx)(BC,{roleId:he,query:We,packageAccessLevel:Te?Dx(Te).qa:void 0,onPackageDivergenceChange:je},Te||`qa`):b&&e.id===`qa`?(0,V.jsx)(bw,{roleId:he,query:We,packageAccessLevel:Te?Dx(Te).qa:void 0,onPackageDivergenceChange:je},Te||`qa-map`):x&&e.id===`qa`?(0,V.jsx)(lE,{roleId:he,query:We,packageAccessLevel:Te?Dx(Te).qa:void 0,onPackageDivergenceChange:je},Te||`qa-layers`):S&&e.id===`qa`?(0,V.jsx)(UE,{roleId:he,query:We,packageAccessLevel:Te?Dx(Te).qa:void 0,onPackageDivergenceChange:je},Te||`qa-layers-65`):C&&e.id===`qa`?(0,V.jsx)(OD,{roleId:he,query:We,packageAccessLevel:Te?Dx(Te).qa:void 0,onPackageDivergenceChange:je},Te||`qa-sectioned-v7`):(0,V.jsx)(eC,{roleId:he,product:e,query:We,directAccess:h,includeManageKnowledge:e.id===`knowledge`&&h})})},e.id):null)]}),(0,V.jsx)(mj,{})]}),Je&&(0,V.jsxs)(XA,{children:[(0,V.jsxs)(ZA,{children:[`Team members (`,Ge.length,`)`]}),Ge.length===0?(0,V.jsxs)(QA,{children:[(0,V.jsx)($A,{children:`No one in sight`}),(0,V.jsx)(ej,{children:`There's nobody in this role. You can assign it to team members via their profiles.`}),(0,V.jsx)(Zp,{onClick:()=>ee(!0),children:`Assign role`})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(tj,{children:`You can assign this role to team members via their profiles. To change roles for a team member in this role, select their name to go to their profile.`}),qe&&(0,V.jsxs)(sj,{type:`warning`,role:`note`,children:[(0,V.jsx)(fj,{}),(0,V.jsxs)(mh.Title,{children:[`Access changed for `,Ke.affectedMemberCount,` team member`,Ke.affectedMemberCount===1?``:`s`]}),(0,V.jsx)(lj,{href:`#/roles/${me}/access-preview`,isUnderlined:!0,onClick:e=>{e.preventDefault(),t(`/roles/${me}/access-preview`)},children:`Preview team members access change`}),(0,V.jsx)(cj,{children:Ke.products.map(e=>(0,V.jsx)(`li`,{children:e.name},e.id))})]}),(0,V.jsxs)(nj,{children:[(0,V.jsx)(rj,{children:`Name`}),Ge.map(e=>{let n=le||w?[]:be(e);return(0,V.jsxs)(ij,{children:[(0,V.jsx)(aj,{onClick:()=>t(`/team-members/${e.id}`,{state:{fromRoleId:me}}),children:e.name}),n.length>0&&(0,V.jsxs)(oj,{type:`warning`,role:`note`,children:[(0,V.jsx)(fj,{}),(0,V.jsx)(mh.Title,{children:n.length>1?`Access changes`:`Access change`}),(0,V.jsx)(dj,{children:n.map(e=>(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{children:e.product}),(0,V.jsxs)(`div`,{children:[`• `,e.body]})]},e.key))})]})]},e.id)})]})]})]})]}),(0,V.jsxs)(hj,{children:[(0,V.jsx)(Zp,{onClick:()=>t(`/roles`),children:`Cancel`}),(0,V.jsx)(Zp,{isPrimary:!0,onClick:Xe,children:`Save`})]}),j&&(0,V.jsx)(gA,{onClose:()=>ee(!1),onAssign:Ze}),h&&(0,V.jsx)(BA,{isOpen:ne,onClose:()=>re(!1),value:N,onApply:ie,version:r})]})}var fM=B.ul.attrs({"data-garden-id":`pagination.list`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledList`,componentId:`sc-1uz2jxo-0`})([`direction:`,`;display:flex;justify-content:center;margin:0;padding:0;list-style:none;white-space:nowrap;`,` &:focus{outline:none;}`,`;`],e=>e.theme.rtl&&`rtl`,({theme:e})=>z([`color:`,`;`],U({variable:`foreground.subtle`,theme:e})),H),pM=B.li.attrs({"data-garden-id":`pagination.list_item`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledListItem`,componentId:`sc-16j4sju-0`})([`box-sizing:border-box;margin-left:`,`;user-select:none;&`,`{margin-left:0;}`,`;`],e=>`${e.theme.space.base}px`,e=>e.theme.rtl?`:last-of-type`:`:first-of-type`,H),mM=`pagination.page`,hM=({theme:e})=>{let t=U({variable:`foreground.disabled`,theme:e}),n=U({variable:`foreground.subtle`,theme:e}),r=U({variable:`foreground.subtle`,light:{offset:100},dark:{offset:-100},theme:e}),i=U({variable:`background.primaryEmphasis`,transparency:e.opacity[100],dark:{offset:-100},theme:e}),a=U({variable:`foreground.subtle`,light:{offset:200},dark:{offset:-200},theme:e}),o=U({variable:`background.primaryEmphasis`,transparency:e.opacity[200],dark:{offset:-100},theme:e}),s=a,c=i,l=o,u=U({variable:`background.primaryEmphasis`,transparency:e.opacity[300],dark:{offset:-100},theme:e});return z([`border:none;background:transparent;color:`,`;&:hover{background-color:`,`;color:`,`;}`,` &:active,&:focus-visible:active{background-color:`,`;color:`,`;}&[aria-current='page']{background-color:`,`;color:`,`;}&[aria-current='page']:hover{background-color:`,`;}&[aria-current='page']:active{background-color:`,`;}&:disabled,&[aria-disabled='true']{background-color:transparent;color:`,`;}`],n,i,r,Dc({theme:e,inset:!0}),o,a,c,s,l,u,t)},gM=e=>{let t=e.theme.fontSizes.md,n=`${e.theme.space.base*8}px`,r=pc(n,t);return z([`padding:0 `,`;height:`,`;line-height:`,`;font-size:`,`;`],`${e.theme.space.base*1.5}px`,n,r,t)},_M=B.button.attrs({"data-garden-id":mM,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledPageBase`,componentId:`sc-ttwj4u-0`})([`box-sizing:border-box;display:inline-block;transition:box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;visibility:`,`;border-radius:`,`;cursor:pointer;overflow:hidden;text-align:center;text-overflow:ellipsis;font-family:inherit;user-select:none;`,`;&[aria-current='page']{font-weight:`,`;}&::-moz-focus-inner{border:0;}&:disabled,[aria-disabled='true']{cursor:default;}`,`;`,`;`],e=>e.hidden&&`hidden`,e=>e.theme.borderRadii.md,e=>gM(e),e=>e.theme.fontWeights.semibold,e=>hM(e),H),vM=`pagination.page`,yM=e=>{let t=e.theme.space.base*8;return z([`min-width:`,`px;max-width:`,`px;&[aria-current='true']{max-width:none;}`],t,t*2)},bM=B(_M).attrs({"data-garden-id":vM,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledPage`,componentId:`sc-sxjfwy-0`})([``,`;&[aria-current="true"]{font-weight:`,`;}`,`;`],e=>yM(e),e=>e.theme.fontWeights.semibold,H),xM=B(pM).attrs({"data-garden-id":`pagination.gap`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledGapListItem`,componentId:`sc-10wd0iz-0`})([`display:inline-block;text-align:center;`,`;`,` &:hover{color:inherit;}`,`;`],e=>{let t=Do(`${e.theme.fontSizes.md} + 2`),n=`${e.theme.space.base*8}px`,r=pc(n,t);return z([`padding:0 `,`;min-width:`,`;max-width:`,`;height:`,`;line-height:`,`;font-size:`,`;`],`${e.theme.space.base*1.5}px`,n,Do(`${n} * 2`),n,r,t)},({theme:e})=>z([`color:`,`;`],U({variable:`foreground.subtle`,theme:e})),H),SM=B(bM).attrs({"data-garden-id":`pagination.navigation`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledNavigation`,componentId:`sc-1lpl8pp-0`})([`display:flex;align-items:center;justify-content:center;`,`;`],H),CM=B.nav.attrs({"data-garden-id":`pagination.pagination_view`,"data-garden-version":`9.16.1`}).withConfig({displayName:`StyledNav`,componentId:`sc-ppnpkw-0`})([``,`;`],H),wM;function TM(){return TM=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},TM.apply(null,arguments)}var EM=function(e){return g.createElement(`svg`,TM({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),wM||=g.createElement(`path`,{fill:`currentColor`,d:`M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z`}))},DM;function OM(){return OM=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},OM.apply(null,arguments)}var kM=function(e){return g.createElement(`svg`,OM({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),DM||=g.createElement(`path`,{fill:`currentColor`,d:`M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z`}))},AM=(0,g.forwardRef)((e,t)=>{let n=xc(AM,e,`aria-label`,`Previous page`),r=(0,g.useContext)(di);return g.createElement(SM,Object.assign({type:`button`},e,{"aria-label":n,ref:t}),r.rtl?g.createElement(kM,null):g.createElement(EM,null))});AM.displayName=`Pagination.Previous`;var jM=AM,MM=(0,g.forwardRef)((e,t)=>{let n=xc(MM,e,`aria-label`,`Next page`),r=(0,g.useContext)(di);return g.createElement(SM,Object.assign({type:`button`},e,{"aria-label":n,ref:t}),r.rtl?g.createElement(EM,null):g.createElement(kM,null))});MM.displayName=`Pagination.Next`;var NM=MM,PM=(0,g.forwardRef)((e,t)=>{let n=xc(PM,e,`aria-label`,`Page ${e.children}`);return g.createElement(bM,Object.assign({type:`button`},e,{"aria-label":n,ref:t}))});PM.displayName=`Pagination.Page`;var FM=PM,IM=(0,g.forwardRef)((e,t)=>{let n=xc(IM,e,`aria-label`,`Ellipsis indicating non-visible pages`);return g.createElement(xM,Object.assign({},e,{"aria-label":n,ref:t}),`…`)});IM.displayName=`Pagination.Gap`;var LM=IM,RM=`previous`,zM=`next`,BM=(0,g.forwardRef)(({currentPage:e,totalPages:t,pagePadding:n=2,pageGap:r=2,onChange:i,"aria-label":a,labels:o,...s},c)=>{let[l,u]=(0,g.useState)(),[d,f]=(0,g.useState)(1),p=xc(BM,{"aria-label":a},`aria-label`,`Pagination`),m=tg(e,d),h=(0,g.useCallback)(e=>{u(e)},[]),_=(0,g.useCallback)(e=>{let n=e,r=l;n===RM&&m>1?(n=m-1,n===1&&l===RM&&(r=1)):n===zM&&m<t&&(n=m+1,n===t&&r===zM&&(r=t)),i&&n!==void 0&&i(n),u(r),f(n)},[m,l,i,t]),v=()=>{let e=t>0&&m===1;return g.createElement(pM,null,g.createElement(jM,{hidden:e,onFocus:()=>h(`previous`),onClick:()=>_(`previous`),"aria-label":o?.previous}))},y=()=>{let e=m===t;return g.createElement(pM,null,g.createElement(NM,{hidden:e,onFocus:()=>h(`next`),onClick:()=>_(`next`),"aria-label":o?.next}))},b=e=>g.createElement(LM,{key:`gap-${e}`,"aria-label":o?.gap}),x=e=>g.createElement(pM,{key:e},g.createElement(FM,{onFocus:()=>h(e),onClick:()=>_(e),"aria-current":m===e?`page`:void 0,"aria-label":o?.renderPage?.(e)},e));return g.createElement(CM,{"aria-label":p},g.createElement(fM,Object.assign({},s,{ref:c}),v(),t>0&&(()=>{let e=[],i=n,a=r;for(let n=1;n<=t;n++){if(n===m||n<a||n>t-a+1){e.push(x(n));continue}let r,o;if(m<=a+i?(r=a+1,o=r+i*2):m>=t-a-i?(o=t-a,r=o-i*2):(r=m-i,o=m+i),n>=r&&n<=m||n>=m&&n<=o){e.push(x(n));continue}if(n===a){r>a+1&&m>a+i+1?e.push(b(n)):e.push(x(n));continue}if(n===t-a+1){o<t-a&&m<t-a-i?e.push(b(n)):e.push(x(n));continue}}return e})(),y()))});BM.propTypes={currentPage:K.default.number.isRequired,totalPages:K.default.number.isRequired,pagePadding:K.default.number,pageGap:K.default.number,onChange:K.default.func,labels:K.default.any},BM.displayName=`OffsetPagination`;var VM=100,HM=`1px solid ${G.grey[200]}`,UM=B.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`,WM=B.div`
  flex: 1;
  overflow-y: auto;
`,GM=B.div`
  padding: 24px 40px 40px 32px;
  width: 100%;
  box-sizing: border-box;
`,KM=B.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 500;
  color: #2f3130;
  margin: 0 0 4px;
`,qM=B.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 24px;
  max-width: 726px;
`,JM=B.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px 16px;
  margin-bottom: 12px;
`,YM=B.div`
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  flex: 0 0 400px;
`,XM=B.div`
  width: 200px;
`,ZM=B.div`
  font-size: 13px;
  line-height: 20px;
  color: #2f3130;
  /* 8px between counter and table header */
  margin-bottom: 8px;
`,QM=B(Qp)`
  font-size: 14px;
  color: ${G.blue[700]} !important;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${G.blue[800]} !important;
    text-decoration: underline;
  }

  &:active {
    color: ${G.blue[900]} !important;
    text-decoration: underline;
  }
`,$M=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`,eN=B.div`
  padding: 40px 16px;
  text-align: center;
  color: ${G.grey[700]};
  font-size: 14px;
`,tN=B.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 40px 0 32px;
  border-top: 1px solid ${G.grey[300]};
  background: ${G.white};
`,nN=B.div`
  width: 100%;
`,rN=B(X)`
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
    background-color: ${G.grey[100]} !important;
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
    border-bottom: ${HM} !important;
  }

  [data-garden-id='tables.cell'][data-sketch='member'] {
    /* Match middle-aligned product text in the first span row (40px / 20px lh). */
    vertical-align: top !important;
    padding-top: 10px !important;
  }
`,iN=B(X.Cell).attrs({"data-sketch":`member`})``,aN=B(X.Cell).attrs({"data-sketch":`side`})``,oN=()=>(0,V.jsxs)(`colgroup`,{children:[(0,V.jsx)(`col`,{style:{width:`28%`}}),(0,V.jsx)(`col`,{style:{width:`24%`}}),(0,V.jsx)(`col`,{style:{width:`24%`}}),(0,V.jsx)(`col`,{style:{width:`24%`}})]});function sN(e){let t=[],n=0;for(;n<e.length;){let r=n+1;for(;r<e.length&&e[r].memberId===e[n].memberId;)r+=1;let i=r-n;for(let a=n;a<r;a+=1)t.push({...e[a],isFirstInGroup:a===n,isLastInGroup:a===r-1,rowSpan:a===n?i:0});n=r}return t}function cN(){let{id:e}=Ue(),t=Ve(),{version:n,roles:r,roleAssignments:i,getProductAccess:a,getAiAgentsState:o}=Bl(),s=r.find(t=>t.id===e)?.name||`Role`,c=(0,g.useMemo)(()=>(i[e]||[]).map(e=>Al.find(t=>t.id===e)).filter(Boolean),[i,e]),l=(0,g.useMemo)(()=>KA({members:c,version:n,roleKey:e,getProductAccess:a,getAiAgentsState:o,radioProducts:El}),[c,n,e,a,o]),[u,d]=(0,g.useState)(``),[f,p]=(0,g.useState)(`all`),[m,h]=(0,g.useState)(1),[_,v]=(0,g.useState)(null),[y,b]=(0,g.useState)(void 0),x=(0,g.useMemo)(()=>{let e=u.trim().toLowerCase();return l.rows.filter(t=>!(f!==`all`&&t.productId!==f||e&&!t.memberName.toLowerCase().includes(e)))},[l.rows,u,f]),S=(0,g.useMemo)(()=>{let e=[],t=new Map,n=new Set;for(let r of x)n.has(r.memberId)||(n.add(r.memberId),e.push(r.memberId),t.set(r.memberId,r.memberName));if(!y)return e;let r=[...e];return r.sort((e,n)=>{let r=(t.get(e)||``).localeCompare(t.get(n)||``,void 0,{sensitivity:`base`});return y===`asc`?r:-r}),r},[x,y]),C=()=>{b(e=>{if(e===void 0)return`asc`;if(e===`asc`)return`desc`}),h(1)},w=S.length,T=Math.max(1,Math.ceil(w/VM)),E=Math.min(m,T),D=(0,g.useMemo)(()=>{let e=(E-1)*VM;return S.slice(e,e+VM)},[S,E]),O=D.length,k=(0,g.useMemo)(()=>{let e=new Set(D),t=new Map;for(let n of x){if(!e.has(n.memberId))continue;let r=t.get(n.memberId);r?r.push(n):t.set(n.memberId,[n])}return D.flatMap(e=>t.get(e)||[])},[x,D]),A=sN(k);return(0,V.jsxs)(UM,{children:[(0,V.jsx)(WM,{children:(0,V.jsxs)(GM,{children:[(0,V.jsx)(im,{items:[{label:`People`},{label:`Team`},{label:`Roles`,path:`/roles`},{label:s,path:`/roles/${e}`},{label:`Preview team members access change`}]}),(0,V.jsx)(KM,{children:`Preview team members access change`}),(0,V.jsx)(qM,{children:`Review how saving this role would change product access for assigned team members. Select a name to open their profile.`}),(0,V.jsxs)(JM,{children:[(0,V.jsx)(YM,{children:(0,V.jsxs)(D_,{children:[(0,V.jsx)(D_.Label,{children:`Search team members`}),(0,V.jsx)(J_,{value:u,onChange:e=>{d(e.target.value),h(1)},start:(0,V.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,V.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.25`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,V.jsx)(`path`,{d:`M11.2 11.2L15 15`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]})})]})}),(0,V.jsx)(XM,{children:(0,V.jsxs)(D_,{children:[(0,V.jsx)(D_.Label,{children:`Product`}),(0,V.jsxs)(q_,{value:f,onChange:e=>{p(e.target.value),h(1)},children:[(0,V.jsx)(`option`,{value:`all`,children:`All products`}),l.products.map(e=>(0,V.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]})})]}),(0,V.jsx)(ZM,{children:w===0?`No matching access changes`:`${O} of ${w} team members`}),k.length===0?(0,V.jsx)(eN,{children:l.rows.length===0?`There are no pending access changes for this role.`:`No rows match your search or filter.`}):(0,V.jsx)(nN,{children:(0,V.jsxs)(rN,{size:`medium`,isReadOnly:!0,"aria-label":`Preview team members access change`,children:[(0,V.jsx)(oN,{}),(0,V.jsx)(X.Head,{children:(0,V.jsxs)(X.HeaderRow,{children:[(0,V.jsx)(X.SortableCell,{sort:y,onClick:C,"aria-label":y===`asc`?`Team member, sorted ascending`:y===`desc`?`Team member, sorted descending`:`Team member, not sorted`,children:`Team member`}),(0,V.jsx)(X.HeaderCell,{children:`Product`}),(0,V.jsx)(X.HeaderCell,{children:`Current access`}),(0,V.jsx)(X.HeaderCell,{children:`New access`})]})}),(0,V.jsx)(X.Body,{children:A.map(n=>(0,V.jsxs)(X.Row,{"data-member":n.memberId,"data-group-hover":_===n.memberId?`true`:void 0,onMouseEnter:()=>v(n.memberId),onMouseLeave:e=>{let t=e.relatedTarget;t instanceof Element&&t.closest(`[data-member="${n.memberId}"]`)||v(null)},children:[n.isFirstInGroup&&(0,V.jsx)(iN,{rowSpan:n.rowSpan,children:(0,V.jsx)(QM,{isUnderlined:!1,href:`#/team-members/${n.memberId}`,onClick:r=>{r.preventDefault(),t(`/team-members/${n.memberId}`,{state:{fromRoleId:e,fromAccessPreview:!0}})},children:n.memberName})}),(0,V.jsx)(aN,{children:n.product}),(0,V.jsx)(aN,{children:n.current}),(0,V.jsx)(aN,{children:n.next})]},`${n.memberId}-${n.productId}`))})]})}),w>VM&&(0,V.jsx)($M,{children:(0,V.jsx)(BM,{totalPages:T,currentPage:E,onChange:e=>h(e),"aria-label":`Pagination`})})]})}),(0,V.jsx)(tN,{children:(0,V.jsx)(Zp,{onClick:()=>t(`/roles/${e}`),children:`Back to role`})})]})}var lN=B.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,uN=B.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
  background-color: #f8f9f9;
  overflow: hidden;
`,dN=B.div`
  display: flex;
  flex: 1;
  min-height: 0;
  width: 100%;
  overflow: hidden;
`,fN=B.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,pN=B.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  background: #fff;
  border-top-left-radius: 12px;
`,mN=[{id:`v7`,label:`V7 QA sectioned tables`},{id:`v6.5`,label:`V6.5 QA customize permissions`},{id:`v6`,label:`V6 QA layer cake (inherit → override)`},{id:`v5`,label:`V5 QA domain map`},{id:`v4`,label:`V4 Role type and accordion settings`},{id:`v2`,label:`V2 Access change alerts`},{id:`v2.5`,label:`V2.5 Access change preview page`},{id:`v3`,label:`V3 Redesign, filter capsules`},{id:`v3.5`,label:`V3.5 Redesign, filter capsules and items`,archived:!0},{id:`v1`,label:`V1`,archived:!0}];function hN(){let{version:e,setVersion:t}=Bl(),[n,r]=(0,g.useState)(null),[i,a]=(0,g.useState)(null),[o,s]=(0,g.useState)(!1),c=ze(),l=Ve();return(0,g.useEffect)(()=>{performance.getEntriesByType(`navigation`)[0]?.type===`reload`&&c.pathname!==`/roles`&&l(`/roles`,{replace:!0})},[]),(0,V.jsxs)(lN,{children:[(0,V.jsx)(Fu,{title:`Custom roles on all plans`,meta:`Started Aug 2026`,versions:mN,versionId:e,onVersionChange:t,versionNotes:Iu,commentSlotRef:r,inspectSlotRef:a,inspectActive:o}),(0,V.jsxs)(uN,{children:[(0,V.jsx)(ra,{}),(0,V.jsxs)(dN,{children:[(0,V.jsx)(ua,{currentProduct:`admin_center`}),(0,V.jsxs)(fN,{children:[(0,V.jsx)(pp,{}),(0,V.jsx)(pN,{"data-comment-root":`true`,"data-inspect-root":`true`,children:(0,V.jsxs)(ft,{children:[(0,V.jsx)(ut,{path:`/`,element:(0,V.jsx)(lt,{to:`/roles`,replace:!0})}),(0,V.jsx)(ut,{path:`/team-members`,element:(0,V.jsx)(Nm,{})}),(0,V.jsx)(ut,{path:`/team-members/:id`,element:(0,V.jsx)(qh,{})}),(0,V.jsx)(ut,{path:`/roles`,element:(0,V.jsx)(aS,{})}),(0,V.jsx)(ut,{path:`/roles/:id/access-preview`,element:(0,V.jsx)(cN,{})}),(0,V.jsx)(ut,{path:`/roles/:id`,element:(0,V.jsx)(dM,{})})]})})]})]})]}),(0,V.jsx)(cp,{toggleContainer:i,onActiveChange:s}),(0,V.jsx)(ef,{toggleContainer:n,context:{version:e,route:c.pathname},onRestoreContext:e=>{mN.some(t=>t.id===e.version)&&t(e.version),e.route&&l(e.route)}})]})}function gN(){return(0,V.jsx)(vl,{children:(0,V.jsx)(zl,{children:(0,V.jsx)(_t,{children:(0,V.jsx)(hN,{})})})})}(0,_.createRoot)(document.getElementById(`root`)).render((0,V.jsx)(g.StrictMode,{children:(0,V.jsx)(gN,{})}));