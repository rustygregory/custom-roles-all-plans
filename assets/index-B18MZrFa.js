var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function te(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var E=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function D(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+re(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(E,`$&/`)+`/`),D(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(E,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+re(s,l);c+=D(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+re(s,l++),c+=D(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ie(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O={current:null},oe={transition:null},se={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:oe,ReactCurrentOwner:C};function k(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:ie,forEach:function(e,t,n){ie(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ie(e,function(){t++}),t},toArray:function(e){return ie(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,e.act=k,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=ee,e.createFactory=function(e){var t=ee.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=oe.transition;oe.transition={};try{e()}finally{oe.transition=t}},e.unstable_act=k,e.useCallback=function(e,t){return O.current.useCallback(e,t)},e.useContext=function(e){return O.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return O.current.useDeferredValue(e)},e.useEffect=function(e,t){return O.current.useEffect(e,t)},e.useId=function(){return O.current.useId()},e.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return O.current.useMemo(e,t)},e.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},e.useRef=function(e){return O.current.useRef(e)},e.useState=function(e){return O.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return O.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,ie(x);else{var t=n(l);t!==null&&ae(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ae(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,ee=5,te=-1;function ne(){return!(e.unstable_now()-te<ee)}function T(){if(C!==null){var t=e.unstable_now();te=t;var n=!0;try{n=C(!0,t)}finally{n?E():(S=!1,C=null)}}else S=!1}var E;if(typeof v==`function`)E=function(){v(T)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,D=re.port2;re.port1.onmessage=T,E=function(){D.postMessage(null)}}else E=function(){g(T,0)};function ie(e){C=e,S||(S=!0,E())}function ae(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ie(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,ae(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ie(x))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),ee=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),T=Symbol.for(`react.profiler`),E=Symbol.for(`react.provider`),re=Symbol.for(`react.context`),D=Symbol.for(`react.forward_ref`),ie=Symbol.for(`react.suspense`),ae=Symbol.for(`react.suspense_list`),O=Symbol.for(`react.memo`),oe=Symbol.for(`react.lazy`),se=Symbol.for(`react.offscreen`),k=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=k&&e[k]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Object.assign,le;function ue(e){if(le===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);le=t&&t[1]||``}return`
`+le+e}var de=!1;function fe(e,t){if(!e||de)return``;de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{de=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?ue(e):``}function pe(e){switch(e.tag){case 5:return ue(e.type);case 16:return ue(`Lazy`);case 13:return ue(`Suspense`);case 19:return ue(`SuspenseList`);case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return``}}function me(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case ee:return`Portal`;case T:return`Profiler`;case ne:return`StrictMode`;case ie:return`Suspense`;case ae:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case re:return(e.displayName||`Context`)+`.Consumer`;case E:return(e._context.displayName||`Context`)+`.Provider`;case D:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case O:return t=e.displayName||null,t===null?me(e.type)||`Memo`:t;case oe:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return me(t);case 8:return t===ne?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function ge(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function _e(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ve(e){var t=_e(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ye(e){e._valueTracker||=ve(e)}function be(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=_e(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function xe(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Se(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ce(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=ge(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function we(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function Te(e,t){we(e,t);var n=ge(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?De(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&De(e,t.type,ge(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ee(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function De(e,t,n){(t!==`number`||xe(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Oe=Array.isArray;function ke(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ge(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ae(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return A({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function je(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Oe(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:ge(n)}}function Me(e,t){var n=ge(t.value),r=ge(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Ne(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Pe(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Fe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Pe(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Ie,Le=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Ie||=document.createElement(`div`),Ie.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Ie.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Re(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(ze).forEach(function(e){Be.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ze[t]=ze[e]})});function Ve(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||ze.hasOwnProperty(e)&&ze[e]?(``+t).trim():t+`px`}function He(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ve(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ue=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(e,t){if(t){if(Ue[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ge(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ke=null;function qe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Je=null,Ye=null,Xe=null;function Ze(e){if(e=Gi(e)){if(typeof Je!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=qi(t),Je(e.stateNode,e.type,t))}}function Qe(e){Ye?Xe?Xe.push(e):Xe=[e]:Ye=e}function $e(){if(Ye){var e=Ye,t=Xe;if(Xe=Ye=null,Ze(e),t)for(e=0;e<t.length;e++)Ze(t[e])}}function et(e,t){return e(t)}function tt(){}var nt=!1;function rt(e,t,n){if(nt)return e(t,n);nt=!0;try{return et(e,t,n)}finally{nt=!1,(Ye!==null||Xe!==null)&&(tt(),$e())}}function it(e,t){var n=e.stateNode;if(n===null)return null;var i=qi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var at=!1;if(c)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){at=!0}}),window.addEventListener(`test`,ot,ot),window.removeEventListener(`test`,ot,ot)}catch{at=!1}function st(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ct=!1,lt=null,ut=!1,dt=null,ft={onError:function(e){ct=!0,lt=e}};function pt(e,t,n,r,i,a,o,s,c){ct=!1,lt=null,st.apply(ft,arguments)}function mt(e,t,n,i,a,o,s,c,l){if(pt.apply(this,arguments),ct){if(ct){var u=lt;ct=!1,lt=null}else throw Error(r(198));ut||(ut=!0,dt=u)}}function ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _t(e){if(ht(e)!==e)throw Error(r(188))}function vt(e){var t=e.alternate;if(!t){if(t=ht(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return _t(a),e;if(o===i)return _t(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function yt(e){return e=vt(e),e===null?null:bt(e)}function bt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bt(e);if(t!==null)return t;e=e.sibling}return null}var xt=n.unstable_scheduleCallback,St=n.unstable_cancelCallback,Ct=n.unstable_shouldYield,wt=n.unstable_requestPaint,Tt=n.unstable_now,Et=n.unstable_getCurrentPriorityLevel,j=n.unstable_ImmediatePriority,Dt=n.unstable_UserBlockingPriority,M=n.unstable_NormalPriority,Ot=n.unstable_LowPriority,kt=n.unstable_IdlePriority,At=null,jt=null;function Mt(e){if(jt&&typeof jt.onCommitFiberRoot==`function`)try{jt.onCommitFiberRoot(At,e,void 0,(e.current.flags&128)==128)}catch{}}var Nt=Math.clz32?Math.clz32:It,Pt=Math.log,Ft=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(Pt(e)/Ft|0)|0}var Lt=64,Rt=4194304;function zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=zt(a))):r=zt(s)}else o=n&~i,o===0?a!==0&&(r=zt(a)):r=zt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function N(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=N(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ht(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Ut(){var e=Lt;return Lt<<=1,!(Lt&4194240)&&(Lt=64),e}function Wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function Kt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function qt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var P=0;function Jt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yt,Xt,Zt,Qt,$t,en=!1,tn=[],nn=null,rn=null,an=null,on=new Map,sn=new Map,cn=[],ln=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function un(e,t){switch(e){case`focusin`:case`focusout`:nn=null;break;case`dragenter`:case`dragleave`:rn=null;break;case`mouseover`:case`mouseout`:an=null;break;case`pointerover`:case`pointerout`:on.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:sn.delete(t.pointerId)}}function dn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Gi(t),t!==null&&Xt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fn(e,t,n,r,i){switch(t){case`focusin`:return nn=dn(nn,e,t,n,r,i),!0;case`dragenter`:return rn=dn(rn,e,t,n,r,i),!0;case`mouseover`:return an=dn(an,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return on.set(a,dn(on.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,sn.set(a,dn(sn.get(a)||null,e,t,n,r,i)),!0}return!1}function pn(e){var t=Wi(e.target);if(t!==null){var n=ht(t);if(n!==null){if(t=n.tag,t===13){if(t=gt(n),t!==null){e.blockedOn=t,$t(e.priority,function(){Zt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ke=r,n.target.dispatchEvent(r),Ke=null}else return t=Gi(n),t!==null&&Xt(t),e.blockedOn=n,!1;t.shift()}return!0}function hn(e,t,n){mn(e)&&n.delete(t)}function gn(){en=!1,nn!==null&&mn(nn)&&(nn=null),rn!==null&&mn(rn)&&(rn=null),an!==null&&mn(an)&&(an=null),on.forEach(hn),sn.forEach(hn)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,en||(en=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,gn)))}function vn(e){function t(t){return _n(t,e)}if(0<tn.length){_n(tn[0],e);for(var n=1;n<tn.length;n++){var r=tn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&_n(nn,e),rn!==null&&_n(rn,e),an!==null&&_n(an,e),on.forEach(t),sn.forEach(t),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)pn(n),n.blockedOn===null&&cn.shift()}var yn=C.ReactCurrentBatchConfig,bn=!0;function xn(e,t,n,r){var i=P,a=yn.transition;yn.transition=null;try{P=1,Cn(e,t,n,r)}finally{P=i,yn.transition=a}}function Sn(e,t,n,r){var i=P,a=yn.transition;yn.transition=null;try{P=4,Cn(e,t,n,r)}finally{P=i,yn.transition=a}}function Cn(e,t,n,r){if(bn){var i=Tn(e,t,n,r);if(i===null)vi(e,t,r,wn,n),un(e,r);else if(fn(i,e,t,n,r))r.stopPropagation();else if(un(e,r),t&4&&-1<ln.indexOf(e)){for(;i!==null;){var a=Gi(i);if(a!==null&&Yt(a),a=Tn(e,t,n,r),a===null&&vi(e,t,r,wn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else vi(e,t,r,null,n)}}var wn=null;function Tn(e,t,n,r){if(wn=null,e=qe(r),e=Wi(e),e!==null)if(t=ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wn=e,null}function En(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Et()){case j:return 1;case Dt:return 4;case M:case Ot:return 16;case kt:return 536870912;default:return 16}default:return 16}}var Dn=null,On=null,kn=null;function An(){if(kn)return kn;var e,t=On,n=t.length,r,i=`value`in Dn?Dn.value:Dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return kn=i.slice(e,1<r?1-r:void 0)}function jn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mn(){return!0}function Nn(){return!1}function Pn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Mn:Nn,this.isPropagationStopped=Nn,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},In=Pn(Fn),Ln=A({},Fn,{view:0,detail:0}),Rn=Pn(Ln),zn,Bn,Vn,Hn=A({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Vn&&(Vn&&e.type===`mousemove`?(zn=e.screenX-Vn.screenX,Bn=e.screenY-Vn.screenY):Bn=zn=0,Vn=e),zn)},movementY:function(e){return`movementY`in e?e.movementY:Bn}}),Un=Pn(Hn),Wn=Pn(A({},Hn,{dataTransfer:0})),Gn=Pn(A({},Ln,{relatedTarget:0})),Kn=Pn(A({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0})),qn=Pn(A({},Fn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Jn=Pn(A({},Fn,{data:0})),Yn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Xn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zn[e])?!!t[e]:!1}function $n(){return Qn}var er=Pn(A({},Ln,{key:function(e){if(e.key){var t=Yn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=jn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Xn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(e){return e.type===`keypress`?jn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?jn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),tr=Pn(A({},Hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nr=Pn(A({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n})),rr=Pn(A({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0})),ir=Pn(A({},Hn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ar=[9,13,27,32],or=c&&`CompositionEvent`in window,sr=null;c&&`documentMode`in document&&(sr=document.documentMode);var cr=c&&`TextEvent`in window&&!sr,lr=c&&(!or||sr&&8<sr&&11>=sr),ur=` `,dr=!1;function fr(e,t){switch(e){case`keyup`:return ar.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function pr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var mr=!1;function hr(e,t){switch(e){case`compositionend`:return pr(t);case`keypress`:return t.which===32?(dr=!0,ur):null;case`textInput`:return e=t.data,e===ur&&dr?null:e;default:return null}}function gr(e,t){if(mr)return e===`compositionend`||!or&&fr(e,t)?(e=An(),kn=On=Dn=null,mr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return lr&&t.locale!==`ko`?null:t.data;default:return null}}var _r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!_r[e.type]:t===`textarea`}function yr(e,t,n,r){Qe(r),t=bi(t,`onChange`),0<t.length&&(n=new In(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var br=null,xr=null;function Sr(e){pi(e,0)}function Cr(e){if(be(Ki(e)))return e}function wr(e,t){if(e===`change`)return t}var Tr=!1;if(c){var Er;if(c){var Dr=`oninput`in document;if(!Dr){var Or=document.createElement(`div`);Or.setAttribute(`oninput`,`return;`),Dr=typeof Or.oninput==`function`}Er=Dr}else Er=!1;Tr=Er&&(!document.documentMode||9<document.documentMode)}function kr(){br&&(br.detachEvent(`onpropertychange`,Ar),xr=br=null)}function Ar(e){if(e.propertyName===`value`&&Cr(xr)){var t=[];yr(t,xr,e,qe(e)),rt(Sr,t)}}function jr(e,t,n){e===`focusin`?(kr(),br=t,xr=n,br.attachEvent(`onpropertychange`,Ar)):e===`focusout`&&kr()}function Mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Cr(xr)}function Nr(e,t){if(e===`click`)return Cr(t)}function Pr(e,t){if(e===`input`||e===`change`)return Cr(t)}function Fr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ir=typeof Object.is==`function`?Object.is:Fr;function Lr(e,t){if(Ir(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Ir(e[i],t[i]))return!1}return!0}function Rr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var n=Rr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Rr(n)}}function Br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Br(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vr(){for(var e=window,t=xe();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=xe(e.document)}return t}function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Ur(e){var t=Vr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Br(n.ownerDocument.documentElement,n)){if(r!==null&&Hr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=zr(n,a);var o=zr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wr=c&&`documentMode`in document&&11>=document.documentMode,Gr=null,Kr=null,qr=null,Jr=!1;function Yr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jr||Gr==null||Gr!==xe(r)||(r=Gr,`selectionStart`in r&&Hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Lr(qr,r)||(qr=r,r=bi(Kr,`onSelect`),0<r.length&&(t=new In(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Gr)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Zr={animationend:Xr(`Animation`,`AnimationEnd`),animationiteration:Xr(`Animation`,`AnimationIteration`),animationstart:Xr(`Animation`,`AnimationStart`),transitionend:Xr(`Transition`,`TransitionEnd`)},Qr={},$r={};c&&($r=document.createElement(`div`).style,`AnimationEvent`in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),`TransitionEvent`in window||delete Zr.transitionend.transition);function ei(e){if(Qr[e])return Qr[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $r)return Qr[e]=t[n];return e}var ti=ei(`animationend`),ni=ei(`animationiteration`),ri=ei(`animationstart`),ii=ei(`transitionend`),ai=new Map,oi=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function si(e,t){ai.set(e,t),o(t,[e])}for(var ci=0;ci<oi.length;ci++){var li=oi[ci];si(li.toLowerCase(),`on`+(li[0].toUpperCase()+li.slice(1)))}si(ti,`onAnimationEnd`),si(ni,`onAnimationIteration`),si(ri,`onAnimationStart`),si(`dblclick`,`onDoubleClick`),si(`focusin`,`onFocus`),si(`focusout`,`onBlur`),si(ii,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ui=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),di=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ui));function fi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,mt(r,t,void 0,e),e.currentTarget=null}function pi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;fi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;fi(i,s,l),a=c}}}if(ut)throw e=dt,ut=!1,dt=null,e}function F(e,t){var n=t[Vi];n===void 0&&(n=t[Vi]=new Set);var r=e+`__bubble`;n.has(r)||(_i(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),_i(n,e,r,t)}var hi=`_reactListening`+Math.random().toString(36).slice(2);function gi(e){if(!e[hi]){e[hi]=!0,i.forEach(function(t){t!==`selectionchange`&&(di.has(t)||mi(t,!1,e),mi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,mi(`selectionchange`,!1,t))}}function _i(e,t,n,r){switch(En(t)){case 1:var i=xn;break;case 4:i=Sn;break;default:i=Cn}n=i.bind(null,t,n,e),i=void 0,!at||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function vi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Wi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}rt(function(){var r=a,i=qe(n),o=[];a:{var s=ai.get(e);if(s!==void 0){var c=In,l=e;switch(e){case`keypress`:if(jn(n)===0)break a;case`keydown`:case`keyup`:c=er;break;case`focusin`:l=`focus`,c=Gn;break;case`focusout`:l=`blur`,c=Gn;break;case`beforeblur`:case`afterblur`:c=Gn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Un;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Wn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=nr;break;case ti:case ni:case ri:c=Kn;break;case ii:c=rr;break;case`scroll`:c=Rn;break;case`wheel`:c=ir;break;case`copy`:case`cut`:case`paste`:c=qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=tr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=it(p,f),h!=null&&u.push(yi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ke&&(l=n.relatedTarget||n.fromElement)&&(Wi(l)||l[Bi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Wi(l):null,l!==null&&(d=ht(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Un,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=tr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Ki(c),m=l==null?s:Ki(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Wi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=xi(m))p++;for(m=0,h=f;h;h=xi(h))m++;for(;0<p-m;)u=xi(u),p--;for(;0<m-p;)f=xi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=xi(u),f=xi(f)}u=null}else u=null;c!==null&&Si(o,s,c,u,!1),l!==null&&d!==null&&Si(o,d,l,u,!0)}}a:{if(s=r?Ki(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=wr;else if(vr(s))if(Tr)g=Pr;else{g=Mr;var _=jr}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Nr);if(g&&=g(e,r)){yr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&De(s,`number`,s.value)}switch(_=r?Ki(r):window,e){case`focusin`:(vr(_)||_.contentEditable===`true`)&&(Gr=_,Kr=r,qr=null);break;case`focusout`:qr=Kr=Gr=null;break;case`mousedown`:Jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Jr=!1,Yr(o,n,i);break;case`selectionchange`:if(Wr)break;case`keydown`:case`keyup`:Yr(o,n,i)}var v;if(or)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else mr?fr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(lr&&n.locale!==`ko`&&(mr||y!==`onCompositionStart`?y===`onCompositionEnd`&&mr&&(v=An()):(Dn=i,On=`value`in Dn?Dn.value:Dn.textContent,mr=!0)),_=bi(r,y),0<_.length&&(y=new Jn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=pr(n),v!==null&&(y.data=v)))),(v=cr?hr(e,n):gr(e,n))&&(r=bi(r,`onBeforeInput`),0<r.length&&(i=new Jn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}pi(o,t)})}function yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=it(e,n),a!=null&&r.unshift(yi(e,a,i)),a=it(e,t),a!=null&&r.push(yi(e,a,i))),e=e.return}return r}function xi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Si(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=it(n,a),c!=null&&o.unshift(yi(n,c,s))):i||(c=it(n,a),c!=null&&o.push(yi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ci=/\r\n?/g,wi=/\u0000|\uFFFD/g;function I(e){return(typeof e==`string`?e:``+e).replace(Ci,`
`).replace(wi,``)}function Ti(e,t,n){if(t=I(t),I(e)!==t&&n)throw Error(r(425))}function Ei(){}var L=null,Di=null;function Oi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ki=typeof setTimeout==`function`?setTimeout:void 0,Ai=typeof clearTimeout==`function`?clearTimeout:void 0,ji=typeof Promise==`function`?Promise:void 0,Mi=typeof queueMicrotask==`function`?queueMicrotask:ji===void 0?ki:function(e){return ji.resolve(null).then(e).catch(Ni)};function Ni(e){setTimeout(function(){throw e})}function Pi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),vn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);vn(t)}function Fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Ii(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Li=Math.random().toString(36).slice(2),Ri=`__reactFiber$`+Li,zi=`__reactProps$`+Li,Bi=`__reactContainer$`+Li,Vi=`__reactEvents$`+Li,Hi=`__reactListeners$`+Li,Ui=`__reactHandles$`+Li;function Wi(e){var t=e[Ri];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bi]||n[Ri]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ii(e);e!==null;){if(n=e[Ri])return n;e=Ii(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[Ri]||e[Bi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function qi(e){return e[zi]||null}var Ji=[],Yi=-1;function Xi(e){return{current:e}}function R(e){0>Yi||(e.current=Ji[Yi],Ji[Yi]=null,Yi--)}function z(e,t){Yi++,Ji[Yi]=e.current,e.current=t}var Zi={},B=Xi(Zi),Qi=Xi(!1),$i=Zi;function ea(e,t){var n=e.type.contextTypes;if(!n)return Zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ta(e){return e=e.childContextTypes,e!=null}function na(){R(Qi),R(B)}function ra(e,t,n){if(B.current!==Zi)throw Error(r(168));z(B,t),z(Qi,n)}function ia(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,he(e)||`Unknown`,a));return A({},n,i)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zi,$i=B.current,z(B,e),z(Qi,Qi.current),!0}function oa(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ia(e,t,$i),i.__reactInternalMemoizedMergedChildContext=e,R(Qi),R(B),z(B,e)):R(Qi),z(Qi,n)}var sa=null,ca=!1,la=!1;function ua(e){sa===null?sa=[e]:sa.push(e)}function da(e){ca=!0,ua(e)}function fa(){if(!la&&sa!==null){la=!0;var e=0,t=P;try{var n=sa;for(P=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sa=null,ca=!1}catch(t){throw sa!==null&&(sa=sa.slice(e+1)),xt(j,fa),t}finally{P=t,la=!1}}return null}var pa=[],ma=0,ha=null,ga=0,V=[],_a=0,va=null,ya=1,ba=``;function xa(e,t){pa[ma++]=ga,pa[ma++]=ha,ha=e,ga=t}function Sa(e,t,n){V[_a++]=ya,V[_a++]=ba,V[_a++]=va,va=e;var r=ya;e=ba;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ya=1<<32-Nt(t)+i|n<<i|r,ba=a+e}else ya=1<<a|n<<i|r,ba=e}function Ca(e){e.return!==null&&(xa(e,1),Sa(e,1,0))}function wa(e){for(;e===ha;)ha=pa[--ma],pa[ma]=null,ga=pa[--ma],pa[ma]=null;for(;e===va;)va=V[--_a],V[_a]=null,ba=V[--_a],V[_a]=null,ya=V[--_a],V[_a]=null}var Ta=null,Ea=null,Da=!1,Oa=null;function ka(e,t){var n=Zl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Ta=e,Ea=Fi(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Ta=e,Ea=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=va===null?null:{id:ya,overflow:ba},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Zl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ta=e,Ea=null,!0);default:return!1}}function ja(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Ma(e){if(Da){var t=Ea;if(t){var n=t;if(!Aa(e,t)){if(ja(e))throw Error(r(418));t=Fi(n.nextSibling);var i=Ta;t&&Aa(e,t)?ka(i,n):(e.flags=e.flags&-4097|2,Da=!1,Ta=e)}}else{if(ja(e))throw Error(r(418));e.flags=e.flags&-4097|2,Da=!1,Ta=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ta=e}function Pa(e){if(e!==Ta)return!1;if(!Da)return Na(e),Da=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Oi(e.type,e.memoizedProps)),t&&=Ea){if(ja(e))throw Fa(),Error(r(418));for(;t;)ka(e,t),t=Fi(t.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Ea=Fi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Ea=null}}else Ea=Ta?Fi(e.stateNode.nextSibling):null;return!0}function Fa(){for(var e=Ea;e;)e=Fi(e.nextSibling)}function Ia(){Ea=Ta=null,Da=!1}function La(e){Oa===null?Oa=[e]:Oa.push(e)}var Ra=C.ReactCurrentBatchConfig;function za(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ba(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function H(e){var t=e._init;return t(e._payload)}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=eu(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=iu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===oe&&H(i)===t.type)?(r=a(t,n.props),r.ref=za(e,t,n),r.return=e,r):(r=tu(n.type,n.key,n.props,null,e.mode,r),r.ref=za(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=au(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=nu(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=iu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=tu(t.type,t.key,t.props,null,e.mode,n),n.ref=za(e,null,t),n.return=e,n;case ee:return t=au(t,e.mode,n),t.return=e,t;case oe:var r=t._init;return f(e,r(t._payload),n)}if(Oe(t)||ce(t))return t=nu(t,e.mode,n,null),t.return=e,t;Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case oe:return i=n._init,p(e,t,i(n._payload),r)}if(Oe(n)||ce(n))return i===null?d(e,t,n,r,null):null;Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case oe:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Oe(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);Ba(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),Da&&xa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Da&&xa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),Da&&xa(r,h),l}function g(a,s,c,l){var u=ce(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Da&&xa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Da&&xa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Da&&xa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===te&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===te){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===oe&&H(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=za(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===te?(r=nu(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=tu(i.type,i.key,i.props,null,e.mode,o),o.ref=za(e,r,i),o.return=e,e=o)}return s(e);case ee:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=au(i,e.mode,o),r.return=e,e=r}return s(e);case oe:return l=i._init,_(e,r,l(i._payload),o)}if(Oe(i))return h(e,r,i,o);if(ce(i))return g(e,r,i,o);Ba(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=iu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ha=Va(!0),Ua=Va(!1),Wa=Xi(null),Ga=null,Ka=null,qa=null;function Ja(){qa=Ka=Ga=null}function Ya(e){var t=Wa.current;R(Wa),e._currentValue=t}function Xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Za(e,t){Ga=e,qa=Ka=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(zs=!0),e.firstContext=null)}function Qa(e){var t=e._currentValue;if(qa!==e)if(e={context:e,memoizedValue:t,next:null},Ka===null){if(Ga===null)throw Error(r(308));Ka=e,Ga.dependencies={lanes:0,firstContext:e}}else Ka=Ka.next=e;return t}var $a=null;function eo(e){$a===null?$a=[e]:$a.push(e)}function to(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,eo(t)):(n.next=i.next,i.next=n),t.interleaved=n,no(e,r)}function no(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ro=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function oo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function so(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,no(e,n)}return i=r.interleaved,i===null?(t.next=t,eo(r)):(t.next=i.next,i.next=t),r.interleaved=t,no(e,n)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qt(e,n)}}function lo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var i=e.updateQueue;ro=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=A({},d,f);break a;case 2:ro=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);$c|=o,e.lanes=o,e.memoizedState=d}}function fo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var po={},mo=Xi(po),ho=Xi(po),go=Xi(po);function _o(e){if(e===po)throw Error(r(174));return e}function vo(e,t){switch(z(go,t),z(ho,e),z(mo,po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fe(t,e)}R(mo),z(mo,t)}function yo(){R(mo),R(ho),R(go)}function bo(e){_o(go.current);var t=_o(mo.current),n=Fe(t,e.type);t!==n&&(z(ho,e),z(mo,n))}function xo(e){ho.current===e&&(R(mo),R(ho))}var So=Xi(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=[];function To(){for(var e=0;e<wo.length;e++)wo[e]._workInProgressVersionPrimary=null;wo.length=0}var Eo=C.ReactCurrentDispatcher,Do=C.ReactCurrentBatchConfig,Oo=0,ko=null,Ao=null,jo=null,Mo=!1,No=!1,Po=0,Fo=0;function Io(){throw Error(r(321))}function Lo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ir(e[n],t[n]))return!1;return!0}function Ro(e,t,n,i,a,o){if(Oo=o,ko=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?bs:xs,e=n(i,a),No){o=0;do{if(No=!1,Po=0,25<=o)throw Error(r(301));o+=1,jo=Ao=null,t.updateQueue=null,Eo.current=Ss,e=n(i,a)}while(No)}if(Eo.current=ys,t=Ao!==null&&Ao.next!==null,Oo=0,jo=Ao=ko=null,Mo=!1,t)throw Error(r(300));return e}function zo(){var e=Po!==0;return Po=0,e}function Bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jo===null?ko.memoizedState=jo=e:jo=jo.next=e,jo}function Vo(){if(Ao===null){var e=ko.alternate;e=e===null?null:e.memoizedState}else e=Ao.next;var t=jo===null?ko.memoizedState:jo.next;if(t!==null)jo=t,Ao=e;else{if(e===null)throw Error(r(310));Ao=e,e={memoizedState:Ao.memoizedState,baseState:Ao.baseState,baseQueue:Ao.baseQueue,queue:Ao.queue,next:null},jo===null?ko.memoizedState=jo=e:jo=jo.next=e}return jo}function Ho(e,t){return typeof t==`function`?t(e):t}function Uo(e){var t=Vo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Ao,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Oo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,ko.lanes|=d,$c|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Ir(i,t.memoizedState)||(zs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,ko.lanes|=o,$c|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wo(e){var t=Vo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ir(o,t.memoizedState)||(zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Go(){}function Ko(e,t){var n=ko,i=Vo(),a=t(),o=!Ir(i.memoizedState,a);if(o&&(i.memoizedState=a,zs=!0),i=i.queue,is(Yo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||jo!==null&&jo.memoizedState.tag&1){if(n.flags|=2048,$o(9,Jo.bind(null,n,i,a,t),void 0,null),Kc===null)throw Error(r(349));Oo&30||qo(n,t,a)}return a}function qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ko.updateQueue,t===null?(t={lastEffect:null,stores:null},ko.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jo(e,t,n,r){t.value=n,t.getSnapshot=r,Xo(t)&&Zo(e)}function Yo(e,t,n){return n(function(){Xo(t)&&Zo(e)})}function Xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ir(e,n)}catch{return!0}}function Zo(e){var t=no(e,1);t!==null&&yl(t,e,1,-1)}function Qo(e){var t=Bo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t.queue=e,e=e.dispatch=hs.bind(null,ko,e),[t.memoizedState,e]}function $o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ko.updateQueue,t===null?(t={lastEffect:null,stores:null},ko.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function es(){return Vo().memoizedState}function ts(e,t,n,r){var i=Bo();ko.flags|=e,i.memoizedState=$o(1|t,n,void 0,r===void 0?null:r)}function ns(e,t,n,r){var i=Vo();r=r===void 0?null:r;var a=void 0;if(Ao!==null){var o=Ao.memoizedState;if(a=o.destroy,r!==null&&Lo(r,o.deps)){i.memoizedState=$o(t,n,a,r);return}}ko.flags|=e,i.memoizedState=$o(1|t,n,a,r)}function rs(e,t){return ts(8390656,8,e,t)}function is(e,t){return ns(2048,8,e,t)}function as(e,t){return ns(4,2,e,t)}function os(e,t){return ns(4,4,e,t)}function ss(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cs(e,t,n){return n=n==null?null:n.concat([e]),ns(4,4,ss.bind(null,t,e),n)}function ls(){}function us(e,t){var n=Vo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ds(e,t){var n=Vo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fs(e,t,n){return Oo&21?(Ir(n,t)||(n=Ut(),ko.lanes|=n,$c|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,zs=!0),e.memoizedState=n)}function U(e,t){var n=P;P=n!==0&&4>n?n:4,e(!0);var r=Do.transition;Do.transition={};try{e(!1),t()}finally{P=n,Do.transition=r}}function ps(){return Vo().memoizedState}function ms(e,t,n){var r=vl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gs(e))_s(t,n);else if(n=to(e,t,n,r),n!==null){var i=_l();yl(n,e,r,i),vs(n,t,r)}}function hs(e,t,n){var r=vl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gs(e))_s(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ir(s,o)){var c=t.interleaved;c===null?(i.next=i,eo(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=to(e,t,i,r),n!==null&&(i=_l(),yl(n,e,r,i),vs(n,t,r))}}function gs(e){var t=e.alternate;return e===ko||t!==null&&t===ko}function _s(e,t){No=Mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qt(e,n)}}var ys={readContext:Qa,useCallback:Io,useContext:Io,useEffect:Io,useImperativeHandle:Io,useInsertionEffect:Io,useLayoutEffect:Io,useMemo:Io,useReducer:Io,useRef:Io,useState:Io,useDebugValue:Io,useDeferredValue:Io,useTransition:Io,useMutableSource:Io,useSyncExternalStore:Io,useId:Io,unstable_isNewReconciler:!1},bs={readContext:Qa,useCallback:function(e,t){return Bo().memoizedState=[e,t===void 0?null:t],e},useContext:Qa,useEffect:rs,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),ts(4194308,4,ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return ts(4,2,e,t)},useMemo:function(e,t){var n=Bo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ms.bind(null,ko,e),[r.memoizedState,e]},useRef:function(e){var t=Bo();return e={current:e},t.memoizedState=e},useState:Qo,useDebugValue:ls,useDeferredValue:function(e){return Bo().memoizedState=e},useTransition:function(){var e=Qo(!1),t=e[0];return e=U.bind(null,e[1]),Bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ko,a=Bo();if(Da){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Kc===null)throw Error(r(349));Oo&30||qo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,rs(Yo.bind(null,i,o,e),[e]),i.flags|=2048,$o(9,Jo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Bo(),t=Kc.identifierPrefix;if(Da){var n=ba,r=ya;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Po++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Fo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},xs={readContext:Qa,useCallback:us,useContext:Qa,useEffect:is,useImperativeHandle:cs,useInsertionEffect:as,useLayoutEffect:os,useMemo:ds,useReducer:Uo,useRef:es,useState:function(){return Uo(Ho)},useDebugValue:ls,useDeferredValue:function(e){return fs(Vo(),Ao.memoizedState,e)},useTransition:function(){return[Uo(Ho)[0],Vo().memoizedState]},useMutableSource:Go,useSyncExternalStore:Ko,useId:ps,unstable_isNewReconciler:!1},Ss={readContext:Qa,useCallback:us,useContext:Qa,useEffect:is,useImperativeHandle:cs,useInsertionEffect:as,useLayoutEffect:os,useMemo:ds,useReducer:Wo,useRef:es,useState:function(){return Wo(Ho)},useDebugValue:ls,useDeferredValue:function(e){var t=Vo();return Ao===null?t.memoizedState=e:fs(t,Ao.memoizedState,e)},useTransition:function(){return[Wo(Ho)[0],Vo().memoizedState]},useMutableSource:Go,useSyncExternalStore:Ko,useId:ps,unstable_isNewReconciler:!1};function Cs(e,t){if(e&&e.defaultProps){for(var n in t=A({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ts={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_l(),i=vl(e),a=oo(r,i);a.payload=t,n!=null&&(a.callback=n),t=so(e,a,i),t!==null&&(yl(t,e,i,r),co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_l(),i=vl(e),a=oo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=so(e,a,i),t!==null&&(yl(t,e,i,r),co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_l(),r=vl(e),i=oo(n,r);i.tag=2,t!=null&&(i.callback=t),t=so(e,i,r),t!==null&&(yl(t,e,r,n),co(t,e,r))}};function Es(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,a):!0}function Ds(e,t,n){var r=!1,i=Zi,a=t.contextType;return typeof a==`object`&&a?a=Qa(a):(i=ta(t)?$i:B.current,r=t.contextTypes,a=(r=r!=null)?ea(e,i):Zi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Os(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ts.enqueueReplaceState(t,t.state,null)}function ks(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},io(e);var a=t.contextType;typeof a==`object`&&a?i.context=Qa(a):(a=ta(t)?$i:B.current,i.context=ea(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(ws(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Ts.enqueueReplaceState(i,i.state,null),uo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function As(e,t){try{var n=``,r=t;do n+=pe(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function js(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ms(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ns=typeof WeakMap==`function`?WeakMap:Map;function Ps(e,t,n){n=oo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,cl=r),Ms(e,t)},n}function Fs(e,t,n){n=oo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ms(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ms(e,t),typeof r!=`function`&&(ll===null?ll=new Set([this]):ll.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Is(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ns;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wl.bind(null,e,t,n),t.then(e,e))}function Ls(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function W(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=oo(-1,1),t.tag=2,so(n,t,1))),n.lanes|=1),e)}var Rs=C.ReactCurrentOwner,zs=!1;function Bs(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function Vs(e,t,n,r,i){n=n.render;var a=t.ref;return Za(t,i),r=Ro(e,t,n,r,a,i),n=zo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(Da&&n&&Ca(t),t.flags|=1,Bs(e,t,r,i),t.child)}function Hs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Us(e,t,a,r,i)):(e=tu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Lr:n,n(o,r)&&e.ref===t.ref)return sc(e,t,i)}return t.flags|=1,e=eu(a,r),e.ref=t.ref,e.return=t,t.child=e}function Us(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Lr(a,r)&&e.ref===t.ref)if(zs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(zs=!0);else return t.lanes=e.lanes,sc(e,t,i)}return Ks(e,t,n,r,i)}function Ws(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Xc,Yc),Yc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Xc,Yc),Yc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,z(Xc,Yc),Yc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),z(Xc,Yc),Yc|=r;return Bs(e,t,i,n),t.child}function Gs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,r,i){var a=ta(n)?$i:B.current;return a=ea(t,a),Za(t,i),n=Ro(e,t,n,r,a,i),r=zo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(Da&&r&&Ca(t),t.flags|=1,Bs(e,t,n,i),t.child)}function qs(e,t,n,r,i){if(ta(n)){var a=!0;aa(t)}else a=!1;if(Za(t,i),t.stateNode===null)oc(e,t),Ds(t,n,r),ks(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Qa(l):(l=ta(n)?$i:B.current,l=ea(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Os(t,o,r,l),ro=!1;var f=t.memoizedState;o.state=f,uo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Qi.current||ro?(typeof u==`function`&&(ws(t,n,u,r),c=t.memoizedState),(s=ro||Es(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ao(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Cs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Qa(c):(c=ta(n)?$i:B.current,c=ea(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Os(t,o,r,c),ro=!1,f=t.memoizedState,o.state=f,uo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Qi.current||ro?(typeof p==`function`&&(ws(t,n,p,r),m=t.memoizedState),(l=ro||Es(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Js(e,t,n,r,a,i)}function Js(e,t,n,r,i,a){Gs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&oa(t,n,!1),sc(e,t,a);r=t.stateNode,Rs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ha(t,e.child,null,a),t.child=Ha(t,null,s,a)):Bs(e,t,s,a),t.memoizedState=r.state,i&&oa(t,n,!0),t.child}function Ys(e){var t=e.stateNode;t.pendingContext?ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ra(e,t.context,!1),vo(e,t.containerInfo)}function Xs(e,t,n,r,i){return Ia(),La(i),t.flags|=256,Bs(e,t,n,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function $s(e,t,n){var r=t.pendingProps,i=So.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(So,i&1),e===null)return Ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ru(o,r,0,null),e=nu(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Qs(n),t.memoizedState=Zs,e):ec(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return nc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=eu(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=nu(a,o,n,null),a.flags|=2):a=eu(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Qs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Zs,r}return a=e.child,e=a.sibling,r=eu(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=ru({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function tc(e,t,n,r){return r!==null&&La(r),Ha(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=js(Error(r(422))),tc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=ru({mode:`visible`,children:i.children},a,0,null),o=nu(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ha(t,e.child,null,s),t.child.memoizedState=Qs(s),t.memoizedState=Zs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return tc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=js(o,i,void 0),tc(e,t,s,i)}if(c=(s&e.childLanes)!==0,zs||c){if(i=Kc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,no(e,a),yl(i,e,a,-1))}return Nl(),i=js(Error(r(421))),tc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Kl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ea=Fi(a.nextSibling),Ta=t,Da=!0,Oa=null,e!==null&&(V[_a++]=ya,V[_a++]=ba,V[_a++]=va,ya=e.id,ba=e.overflow,va=t),t=ec(t,i.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xa(e.return,t,n)}function ic(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Bs(e,t,r.children,n),r=So.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(So,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ic(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ic(t,!0,n,null,a);break;case`together`:ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$c|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=eu(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=eu(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cc(e,t,n){switch(t.tag){case 3:Ys(t),Ia();break;case 5:bo(t);break;case 1:ta(t.type)&&aa(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(Wa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(z(So,So.current&1),e=sc(e,t,n),e===null?null:e.sibling):$s(e,t,n):(z(So,So.current&1),t.flags|=128,null);z(So,So.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(So,So.current),r)break;return null;case 22:case 23:return t.lanes=0,Ws(e,t,n)}return sc(e,t,n)}var lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},uc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_o(mo.current);var o=null;switch(n){case`input`:i=Se(e,i),r=Se(e,r),o=[];break;case`select`:i=A({},i,{value:void 0}),r=A({},r,{value:void 0}),o=[];break;case`textarea`:i=Ae(e,i),r=Ae(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Ei)}We(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&F(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function fc(e,t){if(!Da)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mc(e,t,n){var i=t.pendingProps;switch(wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pc(t),null;case 1:return ta(t.type)&&na(),pc(t),null;case 3:return i=t.stateNode,yo(),R(Qi),R(B),To(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oa!==null&&(Cl(Oa),Oa=null))),pc(t),null;case 5:xo(t);var o=_o(go.current);if(n=t.type,e!==null&&t.stateNode!=null)uc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return pc(t),null}if(e=_o(mo.current),Pa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ri]=t,i[zi]=s,e=(t.mode&1)!=0,n){case`dialog`:F(`cancel`,i),F(`close`,i);break;case`iframe`:case`object`:case`embed`:F(`load`,i);break;case`video`:case`audio`:for(o=0;o<ui.length;o++)F(ui[o],i);break;case`source`:F(`error`,i);break;case`img`:case`image`:case`link`:F(`error`,i),F(`load`,i);break;case`details`:F(`toggle`,i);break;case`input`:Ce(i,s),F(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},F(`invalid`,i);break;case`textarea`:je(i,s),F(`invalid`,i)}for(var c in We(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&F(`scroll`,i)}switch(n){case`input`:ye(i),Ee(i,s,!0);break;case`textarea`:ye(i),Ne(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Ei)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Pe(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ri]=t,e[zi]=i,lc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ge(n,i),n){case`dialog`:F(`cancel`,e),F(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:F(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ui.length;o++)F(ui[o],e);o=i;break;case`source`:F(`error`,e),o=i;break;case`img`:case`image`:case`link`:F(`error`,e),F(`load`,e),o=i;break;case`details`:F(`toggle`,e),o=i;break;case`input`:Ce(e,i),o=Se(e,i),F(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=A({},i,{value:void 0}),F(`invalid`,e);break;case`textarea`:je(e,i),o=Ae(e,i),F(`invalid`,e);break;default:o=i}for(s in We(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?He(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Le(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Re(e,u):typeof u==`number`&&Re(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&F(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:ye(e),Ee(e,i,!1);break;case`textarea`:ye(e),Ne(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+ge(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&ke(e,!!i.multiple,i.defaultValue,!0):ke(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Ei)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pc(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=_o(go.current),_o(mo.current),Pa(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ri]=t,(s=i.nodeValue!==n)&&(e=Ta,e!==null))switch(e.tag){case 3:Ti(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ti(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ri]=t,t.stateNode=i}return pc(t),null;case 13:if(R(So),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Da&&Ea!==null&&t.mode&1&&!(t.flags&128))Fa(),Ia(),t.flags|=98560,s=!1;else if(s=Pa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ri]=t}else Ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pc(t),s=!1}else Oa!==null&&(Cl(Oa),Oa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||So.current&1?Zc===0&&(Zc=3):Nl())),t.updateQueue!==null&&(t.flags|=4),pc(t),null);case 4:return yo(),e===null&&gi(t.stateNode.containerInfo),pc(t),null;case 10:return Ya(t.type._context),pc(t),null;case 17:return ta(t.type)&&na(),pc(t),null;case 19:if(R(So),s=t.memoizedState,s===null)return pc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)fc(s,!1);else{if(Zc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Co(e),c!==null){for(t.flags|=128,fc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(So,So.current&1|2),t.child}e=e.sibling}s.tail!==null&&Tt()>al&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304)}else{if(!i)if(e=Co(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!Da)return pc(t),null}else 2*Tt()-s.renderingStartTime>al&&n!==1073741824&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(pc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Tt(),t.sibling=null,n=So.current,z(So,i?n&1|2:n&1),t);case 22:case 23:return kl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Yc&1073741824&&(pc(t),t.subtreeFlags&6&&(t.flags|=8192)):pc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function hc(e,t){switch(wa(t),t.tag){case 1:return ta(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yo(),R(Qi),R(B),To(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(R(So),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(So),null;case 4:return yo(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return kl(),null;case 24:return null;default:return null}}var gc=!1,_c=!1,vc=typeof WeakSet==`function`?WeakSet:Set,G=null;function yc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Ul(e,t,n)}else n.current=null}function bc(e,t,n){try{n()}catch(n){Ul(e,t,n)}}var xc=!1;function Sc(e,t){if(L=bn,e=Vr(),Hr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Di={focusedElem:e,selectionRange:n},bn=!1,G=t;G!==null;)if(t=G,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:Cs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Ul(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return h=xc,xc=!1,h}function Cc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&bc(t,n,a)}i=i.next}while(i!==r)}}function wc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ri],delete t[zi],delete t[Vi],delete t[Hi],delete t[Ui])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}function K(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(K(e,t,n),e=e.sibling;e!==null;)K(e,t,n),e=e.sibling}var q=null,Ac=!1;function jc(e,t,n){for(n=n.child;n!==null;)Mc(e,t,n),n=n.sibling}function Mc(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount==`function`)try{jt.onCommitFiberUnmount(At,n)}catch{}switch(n.tag){case 5:_c||yc(n,t);case 6:var r=q,i=Ac;q=null,jc(e,t,n),q=r,Ac=i,q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?Pi(e.parentNode,n):e.nodeType===1&&Pi(e,n),vn(e)):Pi(q,n.stateNode));break;case 4:r=q,i=Ac,q=n.stateNode.containerInfo,Ac=!0,jc(e,t,n),q=r,Ac=i;break;case 0:case 11:case 14:case 15:if(!_c&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&bc(n,t,o),i=i.next}while(i!==r)}jc(e,t,n);break;case 1:if(!_c&&(yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Ul(n,t,e)}jc(e,t,n);break;case 21:jc(e,t,n);break;case 22:n.mode&1?(_c=(r=_c)||n.memoizedState!==null,jc(e,t,n),_c=r):jc(e,t,n);break;default:jc(e,t,n)}}function Nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vc),t.forEach(function(t){var r=ql.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Pc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:q=c.stateNode,Ac=!1;break a;case 3:q=c.stateNode.containerInfo,Ac=!0;break a;case 4:q=c.stateNode.containerInfo,Ac=!0;break a}c=c.return}if(q===null)throw Error(r(160));Mc(o,s,a),q=null,Ac=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Ul(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}function Fc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pc(t,e),Ic(e),i&4){try{Cc(3,e,e.return),wc(3,e)}catch(t){Ul(e,e.return,t)}try{Cc(5,e,e.return)}catch(t){Ul(e,e.return,t)}}break;case 1:Pc(t,e),Ic(e),i&512&&n!==null&&yc(n,n.return);break;case 5:if(Pc(t,e),Ic(e),i&512&&n!==null&&yc(n,n.return),e.flags&32){var a=e.stateNode;try{Re(a,``)}catch(t){Ul(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&we(a,o),Ge(c,s);var u=Ge(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?He(a,f):d===`dangerouslySetInnerHTML`?Le(a,f):d===`children`?Re(a,f):S(a,d,f,u)}switch(c){case`input`:Te(a,o);break;case`textarea`:Me(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?ke(a,!!o.multiple,o.multiple?[]:``,!1):ke(a,!!o.multiple,o.defaultValue,!0)):ke(a,!!o.multiple,m,!1)}a[zi]=o}catch(t){Ul(e,e.return,t)}}break;case 6:if(Pc(t,e),Ic(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Ul(e,e.return,t)}}break;case 3:if(Pc(t,e),Ic(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vn(t.containerInfo)}catch(t){Ul(e,e.return,t)}break;case 4:Pc(t,e),Ic(e);break;case 13:Pc(t,e),Ic(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(il=Tt())),i&4&&Nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(_c=(u=_c)||d,Pc(t,e),_c=u):Pc(t,e),Ic(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(f=G=d;G!==null;){switch(p=G,m=p.child,p.tag){case 0:case 11:case 14:case 15:Cc(4,p,p.return);break;case 1:yc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Ul(i,n,e)}}break;case 5:yc(p,p.return);break;case 22:if(p.memoizedState!==null){Bc(f);continue}}m===null?Bc(f):(m.return=p,G=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ve(`display`,s))}catch(t){Ul(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Ul(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pc(t,e),Ic(e),i&4&&Nc(e);break;case 21:break;default:Pc(t,e),Ic(e)}}function Ic(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Dc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Re(a,``),i.flags&=-33),K(e,Oc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;kc(e,Oc(e),o);break;default:throw Error(r(161))}}catch(t){Ul(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lc(e,t,n){G=e,Rc(e,t,n)}function Rc(e,t,n){for(var r=(e.mode&1)!=0;G!==null;){var i=G,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||_c;s=gc;var l=_c;if(gc=o,(_c=c)&&!l)for(G=i;G!==null;)o=G,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Vc(i):(c.return=o,G=c);for(;a!==null;)G=a,Rc(a,t,n),a=a.sibling;G=i,gc=s,_c=l}zc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,G=a):zc(e,t,n)}}function zc(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_c||wc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!_c)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Cs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&fo(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fo(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&vn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}_c||t.flags&512&&Tc(t)}catch(e){Ul(t,t.return,e)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function Bc(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function Vc(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wc(4,t)}catch(e){Ul(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Ul(t,i,e)}}var a=t.return;try{Tc(t)}catch(e){Ul(t,a,e)}break;case 5:var o=t.return;try{Tc(t)}catch(e){Ul(t,o,e)}}}catch(e){Ul(t,t.return,e)}if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}var Hc=Math.ceil,Uc=C.ReactCurrentDispatcher,Wc=C.ReactCurrentOwner,Gc=C.ReactCurrentBatchConfig,J=0,Kc=null,qc=null,Jc=0,Yc=0,Xc=Xi(0),Zc=0,Qc=null,$c=0,el=0,tl=0,nl=null,rl=null,il=0,al=1/0,ol=null,sl=!1,cl=null,ll=null,ul=!1,dl=null,fl=0,pl=0,ml=null,hl=-1,gl=0;function _l(){return J&6?Tt():hl===-1?hl=Tt():hl}function vl(e){return e.mode&1?J&2&&Jc!==0?Jc&-Jc:Ra.transition===null?(e=P,e===0?(e=window.event,e=e===void 0?16:En(e.type),e):e):(gl===0&&(gl=Ut()),gl):1}function yl(e,t,n,i){if(50<pl)throw pl=0,ml=null,Error(r(185));Gt(e,n,i),(!(J&2)||e!==Kc)&&(e===Kc&&(!(J&2)&&(el|=n),Zc===4&&Tl(e,Jc)),bl(e,i),n===1&&J===0&&!(t.mode&1)&&(al=Tt()+500,ca&&fa()))}function bl(e,t){var n=e.callbackNode;Vt(e,t);var r=Bt(e,e===Kc?Jc:0);if(r===0)n!==null&&St(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&St(n),t===1)e.tag===0?da(El.bind(null,e)):ua(El.bind(null,e)),Mi(function(){!(J&6)&&fa()}),n=null;else{switch(Jt(r)){case 1:n=j;break;case 4:n=Dt;break;case 16:n=M;break;case 536870912:n=kt;break;default:n=M}n=Yl(n,xl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xl(e,t){if(hl=-1,gl=0,J&6)throw Error(r(327));var n=e.callbackNode;if(Vl()&&e.callbackNode!==n)return null;var i=Bt(e,e===Kc?Jc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Pl(e,i);else{t=i;var a=J;J|=2;var o=Ml();(Kc!==e||Jc!==t)&&(ol=null,al=Tt()+500,Al(e,t));do try{Il();break}catch(t){jl(e,t)}while(1);Ja(),Uc.current=o,J=a,qc===null?(Kc=null,Jc=0,t=Zc):t=0}if(t!==0){if(t===2&&(a=Ht(e),a!==0&&(i=a,t=Sl(e,a))),t===1)throw n=Qc,Al(e,0),Tl(e,i),bl(e,Tt()),n;if(t===6)Tl(e,i);else{if(a=e.current.alternate,!(i&30)&&!wl(a)&&(t=Pl(e,i),t===2&&(o=Ht(e),o!==0&&(i=o,t=Sl(e,o))),t===1))throw n=Qc,Al(e,0),Tl(e,i),bl(e,Tt()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:zl(e,rl,ol);break;case 3:if(Tl(e,i),(i&130023424)===i&&(t=il+500-Tt(),10<t)){if(Bt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){_l(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ki(zl.bind(null,e,rl,ol),t);break}zl(e,rl,ol);break;case 4:if(Tl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Nt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hc(i/1960))-i,10<i){e.timeoutHandle=ki(zl.bind(null,e,rl,ol),i);break}zl(e,rl,ol);break;case 5:zl(e,rl,ol);break;default:throw Error(r(329))}}}return bl(e,Tt()),e.callbackNode===n?xl.bind(null,e):null}function Sl(e,t){var n=nl;return e.current.memoizedState.isDehydrated&&(Al(e,t).flags|=256),e=Pl(e,t),e!==2&&(t=rl,rl=n,t!==null&&Cl(t)),e}function Cl(e){rl===null?rl=e:rl.push.apply(rl,e)}function wl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ir(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tl(e,t){for(t&=~tl,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function El(e){if(J&6)throw Error(r(327));Vl();var t=Bt(e,0);if(!(t&1))return bl(e,Tt()),null;var n=Pl(e,t);if(e.tag!==0&&n===2){var i=Ht(e);i!==0&&(t=i,n=Sl(e,i))}if(n===1)throw n=Qc,Al(e,0),Tl(e,t),bl(e,Tt()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zl(e,rl,ol),bl(e,Tt()),null}function Dl(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(al=Tt()+500,ca&&fa())}}function Ol(e){dl!==null&&dl.tag===0&&!(J&6)&&Vl();var t=J;J|=1;var n=Gc.transition,r=P;try{if(Gc.transition=null,P=1,e)return e()}finally{P=r,Gc.transition=n,J=t,!(J&6)&&fa()}}function kl(){Yc=Xc.current,R(Xc)}function Al(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ai(n)),qc!==null)for(n=qc.return;n!==null;){var r=n;switch(wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:yo(),R(Qi),R(B),To();break;case 5:xo(r);break;case 4:yo();break;case 13:R(So);break;case 19:R(So);break;case 10:Ya(r.type._context);break;case 22:case 23:kl()}n=n.return}if(Kc=e,qc=e=eu(e.current,null),Jc=Yc=t,Zc=0,Qc=null,tl=el=$c=0,rl=nl=null,$a!==null){for(t=0;t<$a.length;t++)if(n=$a[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}$a=null}return e}function jl(e,t){do{var n=qc;try{if(Ja(),Eo.current=ys,Mo){for(var i=ko.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Mo=!1}if(Oo=0,jo=Ao=ko=null,No=!1,Po=0,Wc.current=null,n===null||n.return===null){Zc=1,Qc=t,qc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Jc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ls(s);if(m!==null){m.flags&=-257,W(m,s,c,o,t),m.mode&1&&Is(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Is(o,u,t),Nl();break a}l=Error(r(426))}}else if(Da&&c.mode&1){var _=Ls(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),W(_,s,c,o,t),La(As(l,c));break a}}o=l=As(l,c),Zc!==4&&(Zc=2),nl===null?nl=[o]:nl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ps(o,l,t);lo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ll===null||!ll.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Fs(o,c,t);lo(o,x);break a}}o=o.return}while(o!==null)}Rl(n)}catch(e){t=e,qc===n&&n!==null&&(qc=n=n.return);continue}break}while(1)}function Ml(){var e=Uc.current;return Uc.current=ys,e===null?ys:e}function Nl(){(Zc===0||Zc===3||Zc===2)&&(Zc=4),Kc===null||!($c&268435455)&&!(el&268435455)||Tl(Kc,Jc)}function Pl(e,t){var n=J;J|=2;var i=Ml();(Kc!==e||Jc!==t)&&(ol=null,Al(e,t));do try{Fl();break}catch(t){jl(e,t)}while(1);if(Ja(),J=n,Uc.current=i,qc!==null)throw Error(r(261));return Kc=null,Jc=0,Zc}function Fl(){for(;qc!==null;)Ll(qc)}function Il(){for(;qc!==null&&!Ct();)Ll(qc)}function Ll(e){var t=Jl(e.alternate,e,Yc);e.memoizedProps=e.pendingProps,t===null?Rl(e):qc=t,Wc.current=null}function Rl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hc(n,t),n!==null){n.flags&=32767,qc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Zc=6,qc=null;return}}else if(n=mc(n,t,Yc),n!==null){qc=n;return}if(t=t.sibling,t!==null){qc=t;return}qc=t=e}while(t!==null);Zc===0&&(Zc=5)}function zl(e,t,n){var r=P,i=Gc.transition;try{Gc.transition=null,P=1,Bl(e,t,n,r)}finally{Gc.transition=i,P=r}return null}function Bl(e,t,n,i){do Vl();while(dl!==null);if(J&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kt(e,o),e===Kc&&(qc=Kc=null,Jc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Yl(M,function(){return Vl(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Gc.transition,Gc.transition=null;var s=P;P=1;var c=J;J|=4,Wc.current=null,Sc(e,n),Fc(n,e),Ur(Di),bn=!!L,Di=L=null,e.current=n,Lc(n,e,a),wt(),J=c,P=s,Gc.transition=o}else e.current=n;if(ul&&(ul=!1,dl=e,fl=a),o=e.pendingLanes,o===0&&(ll=null),Mt(n.stateNode,i),bl(e,Tt()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(sl)throw sl=!1,e=cl,cl=null,e;return fl&1&&e.tag!==0&&Vl(),o=e.pendingLanes,o&1?e===ml?pl++:(pl=0,ml=e):pl=0,fa(),null}function Vl(){if(dl!==null){var e=Jt(fl),t=Gc.transition,n=P;try{if(Gc.transition=null,P=16>e?16:e,dl===null)var i=!1;else{if(e=dl,dl=null,fl=0,J&6)throw Error(r(331));var a=J;for(J|=4,G=e.current;G!==null;){var o=G,s=o.child;if(G.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(G=u;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:Cc(8,d,o)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var p=d.sibling,m=d.return;if(Ec(d),d===u){G=null;break}if(p!==null){p.return=m,G=p;break}G=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}G=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,G=s;else b:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,G=v;break b}G=o.return}}var y=e.current;for(G=y;G!==null;){s=G;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,G=b;else b:for(s=y;G!==null;){if(c=G,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:wc(9,c)}}catch(e){Ul(c,c.return,e)}if(c===s){G=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,G=x;break b}G=c.return}}if(J=a,fa(),jt&&typeof jt.onPostCommitFiberRoot==`function`)try{jt.onPostCommitFiberRoot(At,e)}catch{}i=!0}return i}finally{P=n,Gc.transition=t}}return!1}function Hl(e,t,n){t=As(n,t),t=Ps(e,t,1),e=so(e,t,1),t=_l(),e!==null&&(Gt(e,1,t),bl(e,t))}function Ul(e,t,n){if(e.tag===3)Hl(e,e,n);else for(;t!==null;){if(t.tag===3){Hl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ll===null||!ll.has(r))){e=As(n,e),e=Fs(t,e,1),t=so(t,e,1),e=_l(),t!==null&&(Gt(t,1,e),bl(t,e));break}}t=t.return}}function Wl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_l(),e.pingedLanes|=e.suspendedLanes&n,Kc===e&&(Jc&n)===n&&(Zc===4||Zc===3&&(Jc&130023424)===Jc&&500>Tt()-il?Al(e,0):tl|=n),bl(e,t)}function Gl(e,t){t===0&&(e.mode&1?(t=Rt,Rt<<=1,!(Rt&130023424)&&(Rt=4194304)):t=1);var n=_l();e=no(e,t),e!==null&&(Gt(e,t,n),bl(e,n))}function Kl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gl(e,n)}function ql(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Gl(e,n)}var Jl=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qi.current)zs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return zs=!1,cc(e,t,n);zs=!!(e.flags&131072)}else zs=!1,Da&&t.flags&1048576&&Sa(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;oc(e,t),e=t.pendingProps;var a=ea(t,B.current);Za(t,n),a=Ro(null,t,i,e,a,n);var o=zo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ta(i)?(o=!0,aa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,io(t),a.updater=Ts,t.stateNode=a,a._reactInternals=t,ks(t,i,e,n),t=Js(null,t,i,!0,o,n)):(t.tag=0,Da&&o&&Ca(t),Bs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(oc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=$l(i),e=Cs(i,e),a){case 0:t=Ks(null,t,i,e,n);break a;case 1:t=qs(null,t,i,e,n);break a;case 11:t=Vs(null,t,i,e,n);break a;case 14:t=Hs(null,t,i,Cs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Cs(i,a),Ks(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Cs(i,a),qs(e,t,i,a,n);case 3:a:{if(Ys(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,ao(e,t),uo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=As(Error(r(423)),t),t=Xs(e,t,i,n,a);break a}else if(i!==a){a=As(Error(r(424)),t),t=Xs(e,t,i,n,a);break a}else for(Ea=Fi(t.stateNode.containerInfo.firstChild),Ta=t,Da=!0,Oa=null,n=Ua(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ia(),i===a){t=sc(e,t,n);break a}Bs(e,t,i,n)}t=t.child}return t;case 5:return bo(t),e===null&&Ma(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Oi(i,a)?s=null:o!==null&&Oi(i,o)&&(t.flags|=32),Gs(e,t),Bs(e,t,s,n),t.child;case 6:return e===null&&Ma(t),null;case 13:return $s(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ha(t,null,i,n):Bs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Cs(i,a),Vs(e,t,i,a,n);case 7:return Bs(e,t,t.pendingProps,n),t.child;case 8:return Bs(e,t,t.pendingProps.children,n),t.child;case 12:return Bs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,z(Wa,i._currentValue),i._currentValue=s,o!==null)if(Ir(o.value,s)){if(o.children===a.children&&!Qi.current){t=sc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=oo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xa(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Xa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Bs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Za(t,n),a=Qa(a),i=i(a),t.flags|=1,Bs(e,t,i,n),t.child;case 14:return i=t.type,a=Cs(i,t.pendingProps),a=Cs(i.type,a),Hs(e,t,i,a,n);case 15:return Us(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Cs(i,a),oc(e,t),t.tag=1,ta(i)?(e=!0,aa(t)):e=!1,Za(t,n),Ds(t,i,a),ks(t,i,a,n),Js(null,t,i,!0,e,n);case 19:return ac(e,t,n);case 22:return Ws(e,t,n)}throw Error(r(156,t.tag))};function Yl(e,t){return xt(e,t)}function Xl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zl(e,t,n,r){return new Xl(e,t,n,r)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $l(e){if(typeof e==`function`)return+!!Ql(e);if(e!=null){if(e=e.$$typeof,e===D)return 11;if(e===O)return 14}return 2}function eu(e,t){var n=e.alternate;return n===null?(n=Zl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function tu(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case te:return nu(n.children,a,o,t);case ne:s=8,a|=8;break;case T:return e=Zl(12,n,t,a|2),e.elementType=T,e.lanes=o,e;case ie:return e=Zl(13,n,t,a),e.elementType=ie,e.lanes=o,e;case ae:return e=Zl(19,n,t,a),e.elementType=ae,e.lanes=o,e;case se:return ru(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case E:s=10;break a;case re:s=9;break a;case D:s=11;break a;case O:s=14;break a;case oe:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Zl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function nu(e,t,n,r){return e=Zl(7,e,r,t),e.lanes=n,e}function ru(e,t,n,r){return e=Zl(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function iu(e,t,n){return e=Zl(6,e,null,t),e.lanes=n,e}function au(e,t,n){return t=Zl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ou(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wt(0),this.expirationTimes=Wt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function su(e,t,n,r,i,a,o,s,c){return e=new ou(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Zl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},io(a),e}function cu(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function lu(e){if(!e)return Zi;e=e._reactInternals;a:{if(ht(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ta(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ta(n))return ia(e,n,t)}return t}function uu(e,t,n,r,i,a,o,s,c){return e=su(n,r,!0,e,i,a,o,s,c),e.context=lu(null),n=e.current,r=_l(),i=vl(n),a=oo(r,i),a.callback=t??null,so(n,a,i),e.current.lanes=i,Gt(e,i,r),bl(e,r),e}function du(e,t,n,r){var i=t.current,a=_l(),o=vl(i);return n=lu(n),t.context===null?t.context=n:t.pendingContext=n,t=oo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=so(i,t,o),e!==null&&(yl(e,i,o,a),co(e,i,o)),o}function fu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mu(e,t){pu(e,t),(e=e.alternate)&&pu(e,t)}function hu(){return null}var gu=typeof reportError==`function`?reportError:function(e){console.error(e)};function _u(e){this._internalRoot=e}vu.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));du(e,t,null,null)},vu.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ol(function(){du(null,e,null,null)}),t[Bi]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&pn(e)}};function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function xu(){}function Su(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=fu(o);a.call(e)}}var o=uu(t,r,e,0,null,!1,!1,``,xu);return e._reactRootContainer=o,e[Bi]=o.current,gi(e.nodeType===8?e.parentNode:e),Ol(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=fu(c);s.call(e)}}var c=su(e,0,!1,null,null,!1,!1,``,xu);return e._reactRootContainer=c,e[Bi]=c.current,gi(e.nodeType===8?e.parentNode:e),Ol(function(){du(t,c,n,r)}),c}function Cu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=fu(o);s.call(e)}}du(t,o,e,i)}else o=Su(n,t,e,i,r);return fu(o)}Yt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zt(t.pendingLanes);n!==0&&(qt(t,n|1),bl(t,Tt()),!(J&6)&&(al=Tt()+500,fa()))}break;case 13:Ol(function(){var t=no(e,1);t!==null&&yl(t,e,1,_l())}),mu(e,1)}},Xt=function(e){if(e.tag===13){var t=no(e,134217728);t!==null&&yl(t,e,134217728,_l()),mu(e,134217728)}},Zt=function(e){if(e.tag===13){var t=vl(e),n=no(e,t);n!==null&&yl(n,e,t,_l()),mu(e,t)}},Qt=function(){return P},$t=function(e,t){var n=P;try{return P=e,t()}finally{P=n}},Je=function(e,t,n){switch(t){case`input`:if(Te(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=qi(i);if(!a)throw Error(r(90));be(i),Te(i,a)}}}break;case`textarea`:Me(e,n);break;case`select`:t=n.value,t!=null&&ke(e,!!n.multiple,t,!1)}},et=Dl,tt=Ol;var wu={usingClientEntryPoint:!1,Events:[Gi,Ki,qi,Qe,$e,Dl]},Tu={findFiberByHostInstance:Wi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Eu={bundleType:Tu.bundleType,version:Tu.version,rendererPackageName:Tu.rendererPackageName,rendererConfig:Tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yt(e),e===null?null:e.stateNode},findFiberByHostInstance:Tu.findFiberByHostInstance||hu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Du.isDisabled&&Du.supportsFiber)try{At=Du.inject(Eu),jt=Du}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(t))throw Error(r(200));return cu(e,t,null,n)},e.createRoot=function(e,t){if(!yu(e))throw Error(r(299));var n=!1,i=``,a=gu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=su(e,1,!1,null,null,n,!1,i,a),e[Bi]=t.current,gi(e.nodeType===8?e.parentNode:e),new _u(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=yt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Ol(e)},e.hydrate=function(e,t,n){if(!bu(t))throw Error(r(200));return Cu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!yu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=gu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=uu(t,null,e,1,n??null,a,!1,o,s),e[Bi]=t.current,gi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new vu(t)},e.render=function(e,t,n){if(!bu(t))throw Error(r(200));return Cu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!bu(e))throw Error(r(40));return e._reactRootContainer?(Ol(function(){Cu(null,null,e,!1,function(){e._reactRootContainer=null,e[Bi]=null})}),!0):!1},e.unstable_batchedUpdates=Dl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!bu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Cu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u()),_=h(),v=c(m());function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}var b;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(b||={});var x=`popstate`;function S(e){e===void 0&&(e={});function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=E(e.location.hash.substr(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),ne(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:T(t))}function r(e,t){w(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(`+JSON.stringify(t)+`)`)}return re(t,n,r,e)}function C(e,t){if(e===!1||e==null)throw Error(t)}function w(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substr(2,8)}function te(e,t){return{usr:e.state,key:e.key,idx:t}}function ne(e,t,n,r){return n===void 0&&(n=null),y({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?E(t):t,{state:n,key:t&&t.key||r||ee()})}function T(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function E(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function re(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=b.Pop,c=null,l=u();l??(l=0,o.replaceState(y({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=b.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=b.Push;let r=ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=b.Replace;let r=ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:T(e);return n=n.replace(/ $/,`%20`),C(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(x,d),c=e,()=>{i.removeEventListener(x,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var D;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(D||={});function ie(e,t,n){return n===void 0&&(n=`/`),ae(e,t,n,!1)}function ae(e,t,n,r){let i=ye((typeof t==`string`?E(t):t).pathname||`/`,n);if(i==null)return null;let a=O(e);se(a);let o=null,s=ve(i);for(let e=0;o==null&&e<a.length;++e)o=he(a[e],s,r);return o}function O(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(C(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=ke([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(C(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),O(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:pe(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of oe(e.path))i(e,t,n)}),t}function oe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=oe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function se(e){e.sort((e,t)=>e.score===t.score?me(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var k=/^:[\w-]+$/,ce=3,A=2,le=1,ue=10,de=-2,fe=e=>e===`*`;function pe(e,t){let n=e.split(`/`),r=n.length;return n.some(fe)&&(r+=de),t&&(r+=A),n.filter(e=>!fe(e)).reduce((e,t)=>e+(k.test(t)?ce:t===``?le:ue),r)}function me(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function he(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ge({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ge({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:ke([a,u.pathname]),pathnameBase:Ae(ke([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=ke([a,u.pathnameBase]))}return o}function ge(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_e(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return i&&!c?e[r]=void 0:e[r]=(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function _e(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),w(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ve(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return w(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function ye(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var be=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=e=>be.test(e);function Se(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?E(e):e,a;if(n)if(xe(n))a=n;else{if(n.includes(`//`)){let e=n;n=Oe(n),w(!1,`Pathnames cannot have embedded double slashes - normalizing `+(e+` -> `+n))}a=n.startsWith(`/`)?Ce(n.substring(1),`/`):Ce(n,t)}else a=t;return{pathname:a,search:je(r),hash:Me(i)}}function Ce(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function we(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function Te(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ee(e,t){let n=Te(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function De(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=E(e):(i=y({},e),C(!i.pathname||!i.pathname.includes(`?`),we(`?`,`pathname`,`search`,i)),C(!i.pathname||!i.pathname.includes(`#`),we(`#`,`pathname`,`hash`,i)),C(!i.search||!i.search.includes(`#`),we(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Se(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Oe=e=>e.replace(/\/\/+/g,`/`),ke=e=>Oe(e.join(`/`)),Ae=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),je=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Me=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function Ne(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var Pe=[`post`,`put`,`patch`,`delete`];new Set(Pe);var Fe=[`get`,...Pe];new Set(Fe);function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ie.apply(null,arguments)}var Le=g.createContext(null),Re=g.createContext(null),ze=g.createContext(null),Be=g.createContext(null),Ve=g.createContext({outlet:null,matches:[],isDataRoute:!1}),He=g.createContext(null);function Ue(){return g.useContext(Be)!=null}function We(){return!Ue()&&C(!1),g.useContext(Be).location}function Ge(e){g.useContext(ze).static||g.useLayoutEffect(e)}function Ke(){let{isDataRoute:e}=g.useContext(Ve);return e?lt():qe()}function qe(){!Ue()&&C(!1);let e=g.useContext(Le),{basename:t,future:n,navigator:r}=g.useContext(ze),{matches:i}=g.useContext(Ve),{pathname:a}=We(),o=JSON.stringify(Ee(i,n.v7_relativeSplatPath)),s=g.useRef(!1);return Ge(()=>{s.current=!0}),g.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=De(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:ke([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}function Je(){let{matches:e}=g.useContext(Ve),t=e[e.length-1];return t?t.params:{}}function Ye(e,t){return Xe(e,t)}function Xe(e,t,n,r){!Ue()&&C(!1);let{navigator:i}=g.useContext(ze),{matches:a}=g.useContext(Ve),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=We(),u;if(t){let e=typeof t==`string`?E(t):t;!(c===`/`||e.pathname?.startsWith(c))&&C(!1),u=e}else u=l;let d=u.pathname||`/`,f=d;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);f=`/`+d.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let p=ie(e,{pathname:f}),m=tt(p&&p.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:ke([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:ke([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&m?g.createElement(Be.Provider,{value:{location:Ie({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:b.Pop}},m):m}function Ze(){let e=ct(),t=Ne(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return g.createElement(g.Fragment,null,g.createElement(`h2`,null,`Unexpected Application Error!`),g.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?g.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var Qe=g.createElement(Ze,null),$e=class extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:g.createElement(Ve.Provider,{value:this.props.routeContext},g.createElement(He.Provider,{value:this.state.error,children:this.props.component}))}};function et(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(Le);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(Ve.Provider,{value:t},r)}function tt(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&C(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||Qe,s&&(c<0&&i===0?(dt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?g.createElement(r.route.Component,null):r.route.element?r.route.element:e,g.createElement(et,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?g.createElement($e,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var nt=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(nt||{}),rt=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(rt||{});function it(e){let t=g.useContext(Le);return!t&&C(!1),t}function at(e){let t=g.useContext(Re);return!t&&C(!1),t}function ot(e){let t=g.useContext(Ve);return!t&&C(!1),t}function st(e){let t=ot(e),n=t.matches[t.matches.length-1];return!n.route.id&&C(!1),n.route.id}function ct(){let e=g.useContext(He),t=at(rt.UseRouteError),n=st(rt.UseRouteError);return e===void 0?t.errors?.[n]:e}function lt(){let{router:e}=it(nt.UseNavigateStable),t=st(rt.UseNavigateStable),n=g.useRef(!1);return Ge(()=>{n.current=!0}),g.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,Ie({fromRouteId:t},i)))},[e,t])}var ut={};function dt(e,t,n){!t&&!ut[e]&&(ut[e]=!0)}var ft=(e,t,n)=>(``+t+("You can use the `"+e+"` future flag to opt-in early. ")+(`For more information, see `+n+`.`),void 0);function pt(e,t){e?.v7_startTransition===void 0&&ft(`v7_startTransition`,"React Router will begin wrapping state updates in `React.startTransition` in v7",`https://reactrouter.com/v6/upgrading/future#v7_starttransition`),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&ft(`v7_relativeSplatPath`,`Relative route resolution within Splat routes is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`),t&&(t.v7_fetcherPersist===void 0&&ft(`v7_fetcherPersist`,`The persistence behavior of fetchers is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`),t.v7_normalizeFormMethod===void 0&&ft(`v7_normalizeFormMethod`,"Casing of `formMethod` fields is being normalized to uppercase in v7",`https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`),t.v7_partialHydration===void 0&&ft(`v7_partialHydration`,"`RouterProvider` hydration behavior is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_partialhydration`),t.v7_skipActionErrorRevalidation===void 0&&ft(`v7_skipActionErrorRevalidation`,"The revalidation behavior after 4xx/5xx `action` responses is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))}function mt(e){let{to:t,replace:n,state:r,relative:i}=e;!Ue()&&C(!1);let{future:a,static:o}=g.useContext(ze),{matches:s}=g.useContext(Ve),{pathname:c}=We(),l=Ke(),u=De(t,Ee(s,a.v7_relativeSplatPath),c,i===`path`),d=JSON.stringify(u);return g.useEffect(()=>l(JSON.parse(d),{replace:n,state:r,relative:i}),[l,d,i,n,r]),null}function ht(e){C(!1)}function gt(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=b.Pop,navigator:a,static:o=!1,future:s}=e;Ue()&&C(!1);let c=t.replace(/^\/*/,`/`),l=g.useMemo(()=>({basename:c,navigator:a,static:o,future:Ie({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=E(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=g.useMemo(()=>{let e=ye(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:g.createElement(ze.Provider,{value:l},g.createElement(Be.Provider,{children:n,value:h}))}function _t(e){let{children:t,location:n}=e;return Ye(yt(t),n)}var vt=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(vt||{});new Promise(()=>{}),g.Component;function yt(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(e,r)=>{if(!g.isValidElement(e))return;let i=[...t,r];if(e.type===g.Fragment){n.push.apply(n,yt(e.props.children,i));return}e.type!==ht&&C(!1),!(!e.props.index||!e.props.children)&&C(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=yt(e.props.children,i)),n.push(a)}),n}var bt=`6`;try{window.__reactRouterVersion=bt}catch{}var xt=g.startTransition;function St(e){let{basename:t,children:n,future:r,window:i}=e,a=g.useRef();a.current??=S({window:i,v5Compat:!0});let o=a.current,[s,c]=g.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=g.useCallback(e=>{l&&xt?xt(()=>c(e)):c(e)},[c,l]);return g.useLayoutEffect(()=>o.listen(u),[o,u]),g.useEffect(()=>pt(r),[r]),g.createElement(gt,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}typeof window<`u`&&window.document!==void 0&&window.document.createElement;var Ct;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(Ct||={});var wt;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(wt||={});var Tt=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),Et=o(((e,t)=>{t.exports=Tt()})),j=`-ms-`,Dt=`-moz-`,M=`-webkit-`,Ot=`comm`,kt=`rule`,At=`decl`,jt=`@import`,Mt=`@namespace`,Nt=`@keyframes`,Pt=`@layer`,Ft=Math.abs,It=String.fromCharCode,Lt=Object.assign;function Rt(e,t){return Ht(e,0)^45?(((t<<2^Ht(e,0))<<2^Ht(e,1))<<2^Ht(e,2))<<2^Ht(e,3):0}function zt(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function Vt(e,t,n){return e.indexOf(t,n)}function Ht(e,t){return e.charCodeAt(t)|0}function Ut(e,t,n){return e.slice(t,n)}function Wt(e){return e.length}function Gt(e){return e.length}function Kt(e,t){return t.push(e),e}function qt(e,t){return e.map(t).join(``)}function P(e,t){return e.filter(function(e){return!Bt(e,t)})}var Jt=1,Yt=1,Xt=0,Zt=0,Qt=0,$t=``;function en(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Jt,column:Yt,length:o,return:``,siblings:s}}function tn(e,t){return Lt(en(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function nn(e){for(;e.root;)e=tn(e.root,{children:[e]});Kt(e,e.siblings)}function rn(){return Qt}function an(){return Qt=Zt>0?Ht($t,--Zt):0,Yt--,Qt===10&&(Yt=1,Jt--),Qt}function on(){return Qt=Zt<Xt?Ht($t,Zt++):0,Yt++,Qt===10&&(Yt=1,Jt++),Qt}function sn(){return Ht($t,Zt)}function cn(){return Zt}function ln(e,t){return Ut($t,e,t)}function un(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dn(e){return Jt=Yt=1,Xt=Wt($t=e),Zt=0,[]}function fn(e){return $t=``,e}function pn(e){return zt(ln(Zt-1,gn(e===91?e+2:e===40?e+1:e)))}function mn(e){for(;(Qt=sn())&&Qt<33;)on();return un(e)>2||un(Qt)>3?``:` `}function hn(e,t){for(;--t&&on()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return ln(e,cn()+(t<6&&sn()==32&&on()==32))}function gn(e){for(;on();)switch(Qt){case e:return Zt;case 34:case 39:e!==34&&e!==39&&gn(Qt);break;case 40:e===41&&gn(e);break;case 92:on();break}return Zt}function _n(e,t){for(;on()&&e+Qt!==57&&!(e+Qt===84&&sn()===47););return`/*`+ln(t,Zt-1)+`*`+It(e===47?e:on())}function vn(e){for(;!un(sn());)on();return ln(e,Zt)}function yn(e){return fn(bn(``,null,null,null,[``],e=dn(e),0,[0],e))}function bn(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=on()){case 40:if(m!=108&&Ht(C,d-1)==58){Vt(C+=N(pn(v),`&`,`&\f`),`&\f`,Ft(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=pn(v);break;case 9:case 10:case 13:case 32:C+=mn(m);break;case 92:C+=hn(cn()-1,7);continue;case 47:switch(sn()){case 42:case 47:Kt(Sn(_n(on(),cn()),t,n,c),c),(un(m||1)==5||un(sn()||1)==5)&&Wt(C)&&Ut(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=Wt(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=N(C,/\f/g,``)),p>0&&(Wt(C)-d||h===0&&m===47)&&Kt(p>32?Cn(C+`;`,r,n,d-1,c):Cn(N(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(Kt(S=xn(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)bn(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(Ht(C,3)===110)break;case 108:if(Ht(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?bn(e,S,S,r&&Kt(xn(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):bn(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Wt(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&an()==125)continue}switch(C+=It(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Wt(C)-1)*_,_=1;break;case 64:sn()===45&&(C+=pn(on())),f=sn(),u=d=Wt(y=C+=vn(cn())),v++;break;case 45:m===45&&Wt(C)==2&&(h=0)}}return a}function xn(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Gt(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Ut(e,f+1,f=Ft(g=o[h])),b=e;v<m;++v)(b=zt(g>0?p[v]+` `+y:N(y,/&\f/g,p[v])))&&(c[_++]=b);return en(e,t,n,i===0?kt:s,c,l,u,d)}function Sn(e,t,n,r){return en(e,t,n,Ot,It(rn()),Ut(e,2,-2),0,r)}function Cn(e,t,n,r,i){return en(e,t,n,At,Ut(e,0,r),Ut(e,r+1,-1),r,i)}function wn(e,t,n){switch(Rt(e,t)){case 5103:return M+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return M+e+e;case 4855:return M+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Dt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Dt+e+j+e+e;case 5936:switch(Ht(e,t+11)){case 114:return M+e+j+N(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return M+e+j+N(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return M+e+j+N(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return M+e+j+e+e;case 6165:return M+e+j+`flex-`+e+e;case 5187:return M+e+N(e,/(\w+).+(:[^]+)/,M+`box-$1$2`+j+`flex-$1$2`)+e;case 5443:return M+e+j+`flex-item-`+N(e,/flex-|-self/g,``)+(Bt(e,/flex-|baseline/)?``:j+`grid-row-`+N(e,/flex-|-self/g,``))+e;case 4675:return M+e+j+`flex-line-pack`+N(e,/align-content|flex-|-self/g,``)+e;case 5548:return M+e+j+N(e,`shrink`,`negative`)+e;case 5292:return M+e+j+N(e,`basis`,`preferred-size`)+e;case 6060:return M+`box-`+N(e,`-grow`,``)+M+e+j+N(e,`grow`,`positive`)+e;case 4554:return M+N(e,/([^-])(transform)/g,`$1`+M+`$2`)+e;case 6187:return N(N(N(e,/(zoom-|grab)/,M+`$1`),/(image-set)/,M+`$1`),e,``)+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,M+`box-pack:$3`+j+`flex-pack:$3`),/space-between/,`justify`)+M+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return j+`grid-column-align`+Ut(e,t)+e;break;case 2592:case 3360:return j+N(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Bt(e.props,/grid-\w+-end/)})?~Vt(e+(n=n[t].value),`span`,0)?e:j+N(e,`-start`,``)+e+j+`grid-row-span:`+(~Vt(n,`span`,0)?Bt(n,/\d+/):Bt(n,/\d+/)-+Bt(e,/\d+/))+`;`:j+N(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Bt(e.props,/grid-\w+-start/)})?e:j+N(N(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,M+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wt(e)-1-t>6)switch(Ht(e,t+1)){case 109:if(Ht(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,`$1`+M+`$2-$3$1`+Dt+(Ht(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Vt(e,`stretch`,0)?wn(N(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return j+n+`:`+r+s+(i?j+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Ht(e,t+6)===121)return N(e,`:`,`:`+M)+e;break;case 6444:switch(Ht(e,Ht(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+M+(Ht(e,14)===45?`inline-`:``)+`box$3$1`+M+`$2$3$1`+j+`$2box$3`)+e;case 100:return N(e,`:`,`:`+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,`scroll-`,`scroll-snap-`)+e}return e}function Tn(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function En(e,t,n,r){switch(e.type){case Pt:if(e.children.length)break;case jt:case Mt:case At:return e.return=e.return||e.value;case Ot:return``;case Nt:return e.return=e.value+`{`+Tn(e.children,r)+`}`;case kt:if(!Wt(e.value=e.props.join(`,`)))return``}return Wt(n=Tn(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Dn(e){var t=Gt(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function On(e){return function(t){t.root||(t=t.return)&&e(t)}}function kn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case At:e.return=wn(e.value,e.length,n);return;case Nt:return Tn([tn(e,{value:N(e.value,`@`,`@`+M)})],r);case kt:if(e.length)return qt(n=e.props,function(t){switch(Bt(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:nn(tn(e,{props:[N(t,/:(read-\w+)/,`:`+Dt+`$1`)]})),nn(tn(e,{props:[t]})),Lt(e,{props:P(n,r)});break;case`::placeholder`:nn(tn(e,{props:[N(t,/:(plac\w+)/,`:`+M+`input-$1`)]})),nn(tn(e,{props:[N(t,/:(plac\w+)/,`:`+Dt+`$1`)]})),nn(tn(e,{props:[N(t,/:(plac\w+)/,j+`input-$1`)]})),nn(tn(e,{props:[t]})),Lt(e,{props:P(n,r)});break}return``})}}var An=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,jn=`active`,Mn=`data-styled-version`,Nn=`6.4.3`,Pn=`/*!sc*/
`,Fn=typeof window<`u`&&typeof document<`u`;function In(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Ln=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:In(`REACT_APP_SC_DISABLE_SPEEDY`)??In(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Rn=`sc-keyframes-`,zn={};function Bn(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Vn=new Map,Hn=new Map,Un=1,Wn=e=>{if(Vn.has(e))return Vn.get(e);for(;Hn.has(Un);)Un++;let t=Un++;return Vn.set(e,t),Hn.set(t,e),t},Gn=e=>Hn.get(e),Kn=(e,t)=>{Un=t+1,Vn.set(e,t),Hn.set(t,e)},qn=Object.freeze([]),Jn=Object.freeze({});function Yn(e,t,n=Jn){return e.theme!==n.theme&&e.theme||t||n.theme}var Xn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zn=/(^-|-$)/g;function Qn(e){return e.replace(Xn,`-`).replace(Zn,``)}var $n=/(a)(d)/gi,er=e=>String.fromCharCode(e+(e>25?39:97));function tr(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=er(t%52)+n;return(er(t%52)+n).replace($n,`$1-$2`)}var nr=5381,rr=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ir=e=>rr(nr,e);function ar(e){return tr(ir(e)>>>0)}function or(e){return e.displayName||e.name||`Component`}function sr(e){return typeof e==`string`&&!0}function cr(e){return sr(e)?`styled.${e}`:`Styled(${or(e)})`}var lr=Symbol.for(`react.memo`),ur=Symbol.for(`react.forward_ref`),dr={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},fr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mr={[ur]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[lr]:pr};function hr(e){return(`type`in(t=e)&&t.type.$$typeof)===lr?pr:`$$typeof`in e?mr[e.$$typeof]:dr;var t}var gr=Object.defineProperty,_r=Object.getOwnPropertyNames,vr=Object.getOwnPropertySymbols,yr=Object.getOwnPropertyDescriptor,br=Object.getPrototypeOf,xr=Object.prototype;function Sr(e,t,n){if(typeof t!=`string`){let r=br(t);r&&r!==xr&&Sr(e,r,n);let i=_r(t).concat(vr(t)),a=hr(e),o=hr(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in fr||n&&n[s]||o&&s in o||a&&s in a)){let n=yr(t,s);try{gr(e,s,n)}catch{}}}}return e}function Cr(e){return typeof e==`function`}var wr=Symbol.for(`react.forward_ref`);function Tr(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===wr&&`styledComponentId`in e}function Er(e,t){return e&&t?e+` `+t:e||t||``}function Dr(e,t){return e.join(t||``)}function Or(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function kr(e,t,n=!1){if(!n&&!Or(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=kr(e[n],t[n]);else if(Or(t))for(let n in t)e[n]=kr(e[n],t[n]);return e}function Ar(e,t){Object.defineProperty(e,"toString",{value:t})}var jr=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Bn(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Pn;return t}},Mr=`style[${An}][${Mn}="${Nn}"]`,Nr=RegExp(`^${An}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Pr=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Fr=e=>{if(!e)return document;if(Pr(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Pr(t))return t}return document},Ir=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Lr=(e,t)=>{let n=(t.textContent??``).split(Pn),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Nr);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Kn(n,t),Ir(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Rr=e=>{let t=Fr(e.options.target).querySelectorAll(Mr);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(An)!==jn&&(Lr(e,r),r.parentNode&&r.parentNode.removeChild(r))}},zr=!1;function Br(){if(!1!==zr)return zr;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return zr=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return zr=t.getAttribute(`content`)||void 0}return zr=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Vr=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${An}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(An,jn),i.setAttribute(Mn,Nn);let s=t||Br();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Hr=class{constructor(e,t){this.element=Vr(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Bn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Ur=class{constructor(e,t){this.element=Vr(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Wr=Fn,Gr={isServer:!Fn,useCSSOMInjection:!Ln},Kr=class e{static registerId(e){return Wn(e)}constructor(e=Jn,t={},n){this.options=Object.assign(Object.assign({},Gr),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Fn&&Wr&&(Wr=!1,Rr(this)),Ar(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Gn(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=An+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Fn&&Rr(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Fn&&t.target!==this.options.target&&Fr(this.options.target)!==Fr(t.target)&&Rr(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Hr(t,n):new Ur(t,n))(this.options),new jr(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Wn(e),e.startsWith(Rn)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Wn(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Wn(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},qr=new WeakSet,Jr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yr(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Jr||e.startsWith(`--`)?String(t).trim():t+`px`}var Xr=47;function Zr(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Qr=Symbol.for(`sc-keyframes`);function $r(e){return typeof e==`object`&&!!e&&Qr in e}function ei(e){return Cr(e)&&!(e.prototype&&e.prototype.isReactComponent)}var ti=e=>e==null||!1===e||e===``,ni=Symbol.for(`react.client.reference`);function ri(e){return e.$$typeof===ni}function ii(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!ti(r)&&(Array.isArray(r)&&qr.has(r)||Cr(r)?t.push(Zr(n)+`:`,r,`;`):Or(r)?(t.push(n+` {`),ii(r,t),t.push(`}`)):t.push(Zr(n)+`: `+Yr(n,r)+`;`))}}function ai(e,t,n,r,i=[]){if(ti(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return ri(e)?i:ei(e)&&t?ai(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)ai(e[a],t,n,r,i);return i}return Tr(e)?(i.push(`.${e.styledComponentId}`),i):$r(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):ri(e)?i:Or(e)&&e.toString===Object.prototype.toString?(ii(e,i),i):(i.push(e.toString()),i)}var oi=ir(Nn),si=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=rr(oi,t),this.baseStyle=n,Kr.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(ei(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Dr(ai(r,e,t,n)))}else i+=Dr(ai(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=tr(rr(rr(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Er(r,a)}}return r}},ci=/&/g;function li(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function ui(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==Xr||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===Xr&&(o=!1,c++);else if(l!==34&&l!==39||li(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function di(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&di(a.children,t)}return e}function fi({options:e=Jn,plugins:t=qn}=Jn){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(ci,r).replace(i,a))}),e.prefix&&o.push(kn),o.push(En);let s=[],c=Dn(o.concat(On(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return ui(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||li(e,o))if(s===0)if(t===Xr&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==Xr);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===Xr)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Xr&&o+1<r&&e.charCodeAt(o+1)===Xr){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:ui(i)):l===0?e:ui(e)}(t),d=yn(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=di(d,e.namespace)),s=[],Tn(d,c),s},u=e,d=nr;for(let e=0;e<t.length;e++)t[e].name||Bn(15),d=rr(d,t[e].name);return u!=null&&u.namespace&&(d=rr(d,u.namespace)),u!=null&&u.prefix&&(d=rr(d,`p`)),l.hash=d===nr?``:d.toString(),l}var pi=new Kr,F=fi(),mi=g.createContext({shouldForwardProp:void 0,styleSheet:pi,stylis:F,stylisPlugins:void 0});mi.Consumer;function hi(){return g.useContext(mi)}var gi=g.createContext(void 0);gi.Consumer;function _i(e){let t=g.useContext(gi),n=g.useMemo(()=>function(e,t){if(!e)throw Bn(14);if(Cr(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Bn(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?g.createElement(gi.Provider,{value:n},e.children):null}var vi=Object.prototype.hasOwnProperty,yi={};function bi(e,t){let n=typeof e==`string`?Qn(e):`sc`;yi[n]=(yi[n]||0)+1;let r=n+`-`+ar(Nn+n+yi[n]);return t?t+`-`+r:r}function xi(e,t,n){let r=Tr(e),i=e,a=!sr(e),{attrs:o=qn,componentId:s=bi(t.displayName,t.parentComponentId),displayName:c=cr(e)}=t,l=t.displayName&&t.componentId?Qn(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new si(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=g.useContext(gi),u=hi(),d=e.shouldForwardProp||u.shouldForwardProp,f=Yn(t,l,a)||Jn,p,m;{let e=g.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(vi.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=Cr(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Er(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Er(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)vi.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,_=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),v=Er(o,s);return m&&(v+=` `+m),p.className&&(v+=` `+p.className),_[sr(h)&&h.includes(`-`)?`class`:`className`]=v,n&&(_.ref=n),(0,g.createElement)(h,_)}(m,e,t)}p.displayName=c;let m=g.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Er(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)kr(e,n,!0);return e}({},i.defaultProps,e):e}}),Ar(m,()=>`.${m.styledComponentId}`),a&&Sr(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Si=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Ci(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var wi=e=>(qr.add(e),e);function I(e,...t){if(Cr(e)||Or(e))return wi(ai(Ci(qn,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?ai(n):wi(ai(Ci(n,t)))}function Ti(e,t,n=Jn){if(!t)throw Bn(1,t);let r=(r,...i)=>e(t,n,I(r,...i));return r.attrs=r=>Ti(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Ti(e,t,Object.assign(Object.assign({},n),r)),r}var Ei=e=>Ti(xi,e),L=Ei;Si.forEach(e=>{L[e]=Ei(e)});var Di=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(Cr(n)&&!Tr(n))return!1}return!0}(e),Kr.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Dr(ai(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function Oi(e,...t){let n=I(e,...t),r=`sc-global-${ar(JSON.stringify(n))}`,i=new Di(n,r),a=e=>{let t=hi(),n=g.useContext(gi),a;{let e=g.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=g.useRef(i);g.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),g.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,zn,n,o);else{let s=Object.assign(Object.assign({},t),{theme:Yn(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return g.memo(a)}var ki,Ai=class{constructor(e,t){this[ki]=!0,this.inject=(e,t=F)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=Rn+e,this.rules=t,Wn(this.id),Ar(this,()=>{throw Bn(12,String(this.name))})}getName(e=F){return e.hash?this.name+tr(e.hash>>>0):this.name}};function ji(e,...t){let n=Dr(I(e,...t));return new Ai(ar(n),n)}ki=Qr,`${An}`,`${An}`,`${An}`;var Mi=o(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),Ni=o(((e,t)=>{var n=Mi();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),Pi=o(((e,t)=>{t.exports=Ni()()})),Fi={black:`#000`,white:`#fff`,product:{support:`#00a656`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f8f9f9`,200:`#e8eaec`,300:`#d8dcde`,400:`#b0b8be`,500:`#919ca5`,600:`#848f99`,700:`#5c6970`,800:`#39434b`,900:`#293239`,1e3:`#1c2227`,1100:`#151a1e`,1200:`#0a0d0e`},blue:{100:`#edf7ff`,200:`#ddecf8`,300:`#cce0f1`,400:`#93bcdc`,500:`#66a0cd`,600:`#2694d6`,700:`#1f73b7`,800:`#13456d`,900:`#0f3655`,1e3:`#0a2338`,1100:`#061420`,1200:`#040d15`},red:{100:`#fff2f3`,200:`#fee3e5`,300:`#f5d5d8`,400:`#f2a1a8`,500:`#ea7881`,600:`#eb5c69`,700:`#cd3642`,800:`#7e1d25`,900:`#671219`,1e3:`#3d1418`,1100:`#1d1011`,1200:`#100b0c`},yellow:{100:`#fff3e4`,200:`#ffe6cb`,300:`#fed6a9`,400:`#fca347`,500:`#e38215`,600:`#d67305`,700:`#ac5918`,800:`#673515`,900:`#4c2c17`,1e3:`#2d1e15`,1100:`#18120f`,1200:`#0e0c0b`},green:{100:`#eef8f4`,200:`#daeee6`,300:`#cae3d9`,400:`#94c1b0`,500:`#4eab89`,600:`#26a178`,700:`#037f52`,800:`#104b35`,900:`#0b3b29`,1e3:`#0c261c`,1100:`#0a1511`,1200:`#080d0c`},kale:{100:`#ecf9f9`,200:`#daeded`,300:`#cbe2e1`,400:`#97bfbf`,500:`#6ba4a5`,600:`#4a9999`,700:`#40787a`,800:`#16494f`,900:`#063940`,1e3:`#03252a`,1100:`#061517`,1200:`#060e0e`},fuschia:{100:`#fbf3f8`,200:`#f7e6f1`,300:`#f2d5e7`,400:`#e3a4cc`,500:`#d77db7`,600:`#d16aac`,700:`#b34496`,800:`#78116c`,900:`#5a0d51`,1e3:`#3f0939`,1100:`#31072c`,1200:`#1b0418`},pink:{100:`#fcf3f4`,200:`#f7e5e8`,300:`#f3d6dc`,400:`#e5a6b4`,500:`#d98193`,600:`#d96b81`,700:`#d62054`,800:`#75263d`,900:`#561d2e`,1e3:`#3c141f`,1100:`#2e0f18`,1200:`#17080c`},crimson:{100:`#fbf3f2`,200:`#f7e7e4`,300:`#f1d7d2`,400:`#e2aaa0`,500:`#d58678`,600:`#cf7464`,700:`#be4938`,800:`#811b12`,900:`#61140d`,1e3:`#440e09`,1100:`#340b07`,1200:`#1c0604`},orange:{100:`#fdf3ed`,200:`#fae7d8`,300:`#f7d7be`,400:`#eda875`,500:`#e58035`,600:`#d57428`,700:`#af5626`,800:`#693317`,900:`#4d2711`,1e3:`#361a0c`,1100:`#291409`,1200:`#150a04`},lemon:{100:`#fff7d4`,200:`#ffea97`,300:`#ffdc4f`,400:`#efab00`,500:`#c79100`,600:`#b68500`,700:`#8f6900`,800:`#563e00`,900:`#3f2e00`,1e3:`#2b2000`,1100:`#221800`,1200:`#110c00`},lime:{100:`#ecfae7`,200:`#d1f3c7`,300:`#b3eda3`,400:`#4fd12b`,500:`#45b025`,600:`#509f2d`,700:`#3d7e19`,800:`#2c491b`,900:`#203614`,1e3:`#16250e`,1100:`#111d0a`,1200:`#090e05`},mint:{100:`#d6ffeb`,200:`#9affce`,300:`#0afe89`,400:`#00d26d`,500:`#01b15c`,600:`#16a260`,700:`#2d7e55`,800:`#1b4b33`,900:`#143726`,1e3:`#0e261a`,1100:`#0b1d14`,1200:`#050e0a`},teal:{100:`#d4fefa`,200:`#88fdf1`,300:`#0bf8e1`,400:`#03cdb8`,500:`#02ad9c`,600:`#2a9d8f`,700:`#367a74`,800:`#254846`,900:`#1b3534`,1e3:`#122423`,1100:`#0e1c1a`,1200:`#070d0d`},azure:{100:`#eff7fe`,200:`#d9ecfc`,300:`#c4e0fa`,400:`#82bcf4`,500:`#4b9fee`,600:`#3191ea`,700:`#2770c3`,800:`#23446b`,900:`#1a3250`,1e3:`#122238`,1100:`#0e1a2a`,1200:`#070d14`},royal:{100:`#f4f5fc`,200:`#e7e9f8`,300:`#d8dcf4`,400:`#acb4e7`,500:`#8a96dd`,600:`#7a88d9`,700:`#4c67d3`,800:`#1833ab`,900:`#122680`,1e3:`#0d1a5a`,1100:`#0a1445`,1200:`#050a25`},purple:{100:`#f9f3fb`,200:`#f2e7f6`,300:`#e9d8f1`,400:`#d0a9e0`,500:`#bb86d3`,600:`#b276cd`,700:`#9256b1`,800:`#58209a`,900:`#411973`,1e3:`#2e1150`,1100:`#230d3f`,1200:`#120720`}},Ii=4,Li={sm:`${Ii/2}px`,md:`${Ii}px`,lg:`${Ii*2}px`},Ri={solid:`solid`},zi={sm:`1px`,md:`3px`},Bi={sm:`${zi.sm} ${Ri.solid}`,md:`${zi.md} ${Ri.solid}`},Vi={xs:`0px`,sm:`${Ii*144}px`,md:`${Ii*192}px`,lg:`${Ii*248}px`,xl:`${Ii*300}px`},Hi={primaryHue:`blue`,dangerHue:`red`,warningHue:`yellow`,successHue:`green`,neutralHue:`grey`,chromeHue:`kale`,variables:{dark:{background:{default:`neutralHue.1100`,raised:`neutralHue.1000`,recessed:`neutralHue.1200`,subtle:`neutralHue.1000`,emphasis:`neutralHue.600`,success:`successHue.1000`,warning:`warningHue.1000`,danger:`dangerHue.1000`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`rgba(white, 100)`},border:{default:`neutralHue.800`,emphasis:`neutralHue.600`,subtle:`neutralHue.900`,success:`successHue.900`,warning:`warningHue.900`,danger:`dangerHue.900`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`neutralHue.800`},foreground:{default:`neutralHue.300`,subtle:`neutralHue.500`,onEmphasis:`neutralHue.1100`,primary:`primaryHue.600`,success:`successHue.400`,warning:`warningHue.400`,danger:`dangerHue.400`,successEmphasis:`successHue.300`,warningEmphasis:`warningHue.300`,dangerEmphasis:`dangerHue.300`,disabled:`neutralHue.700`},shadow:{small:`rgba(neutralHue.1200, 1100)`,medium:`rgba(neutralHue.1200, 800)`,large:`rgba(neutralHue.1200, 1000)`}},light:{background:{default:`palette.white`,raised:`palette.white`,recessed:`neutralHue.100`,subtle:`neutralHue.100`,emphasis:`neutralHue.700`,success:`successHue.100`,warning:`warningHue.100`,danger:`dangerHue.100`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`rgba(neutralHue.700, 100)`},border:{default:`neutralHue.300`,emphasis:`neutralHue.600`,subtle:`neutralHue.200`,success:`successHue.300`,warning:`warningHue.300`,danger:`dangerHue.300`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`neutralHue.300`},foreground:{default:`neutralHue.900`,subtle:`neutralHue.700`,onEmphasis:`palette.white`,primary:`primaryHue.700`,success:`successHue.700`,warning:`warningHue.700`,danger:`dangerHue.700`,successEmphasis:`successHue.900`,warningEmphasis:`warningHue.900`,dangerEmphasis:`dangerHue.900`,disabled:`neutralHue.600`},shadow:{small:`rgba(neutralHue.1200, 200)`,medium:`rgba(neutralHue.1200, 200)`,large:`rgba(neutralHue.1200, 200)`}}}},Ui={mono:[`SFMono-Regular`,`Consolas`,`"Liberation Mono"`,`Menlo`,`Courier`,`monospace`].join(`,`),system:[`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`Oxygen-Sans`,`Ubuntu`,`Cantarell`,`"Helvetica Neue"`,`Arial`,`sans-serif`].join(`,`)},Wi={xs:`10px`,sm:`12px`,md:`14px`,lg:`18px`,xl:`22px`,xxl:`26px`,xxxl:`36px`},Gi={thin:100,extralight:200,light:300,regular:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},Ki={sm:`12px`,md:`16px`,lg:`26px`},qi={sm:`${Ii*4}px`,md:`${Ii*5}px`,lg:`${Ii*6}px`,xl:`${Ii*7}px`,xxl:`${Ii*8}px`,xxxl:`${Ii*11}px`},Ji={100:.08,200:.16,300:.24,400:.32,500:.4,600:.48,700:.56,800:.64,900:.72,1e3:.8,1100:.88,1200:.96},Yi={...Fi};delete Yi.product;var Xi={xs:`1px`,sm:`2px`,md:`3px`},R={xs:e=>`0 0 0 ${Xi.xs} ${e}`,sm:e=>`0 0 0 ${Xi.sm} ${e}`,md:e=>`0 0 0 ${Xi.md} ${e}`,lg:(e,t,n)=>`0 ${e} ${t} 0 ${n}`},z={base:Ii,xxs:`${Ii}px`,xs:`${Ii*2}px`,sm:`${Ii*3}px`,md:`${Ii*5}px`,lg:`${Ii*8}px`,xl:`${Ii*10}px`,xxl:`${Ii*12}px`},Zi={borders:Bi,borderRadii:Li,borderStyles:Ri,borderWidths:zi,breakpoints:Vi,colors:{base:`light`,...Hi},components:{},fonts:Ui,fontSizes:Wi,fontWeights:Gi,iconSizes:Ki,lineHeights:qi,opacity:Ji,palette:Yi,rtl:!1,shadowWidths:Xi,shadows:R,space:z},B=e=>{let t,n=e.theme.components,r=e.componentId||e[`data-garden-id`];return n&&r&&(t=n[r],typeof t==`function`&&(t=t(e))),t};function Qi(e,t,n){return Math.min(Math.max(e,n),t)}var $i=class extends Error{constructor(e){super(`Failed to parse color: "${e}"`)}};function ea(e){if(typeof e!=`string`)throw new $i(e);if(e.trim().toLowerCase()===`transparent`)return[0,0,0,0];let t=e.trim();t=ua.test(e)?ia(e):e;let n=oa.exec(t);if(n){let e=Array.from(n).slice(1);return[...e.slice(0,3).map(e=>parseInt(aa(e,2),16)),parseInt(aa(e[3]||`f`,2),16)/255]}let r=sa.exec(t);if(r){let e=Array.from(r).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,16)),parseInt(e[3]||`ff`,16)/255]}let i=ca.exec(t);if(i){let e=Array.from(i).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,10)),parseFloat(e[3]||`1`)]}let a=la.exec(t);if(a){let[t,n,r,i]=Array.from(a).slice(1).map(parseFloat);if(Qi(0,100,n)!==n||Qi(0,100,r)!==r)throw new $i(e);return[...fa(t,n,r),Number.isNaN(i)?1:i]}throw new $i(e)}function ta(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}var na=e=>parseInt(e.replace(/_/g,``),36),ra=`1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm`.split(` `).reduce((e,t)=>{let n=na(t.substring(0,3)),r=na(t.substring(3)).toString(16),i=``;for(let e=0;e<6-r.length;e++)i+=`0`;return e[n]=`${i}${r}`,e},{});function ia(e){let t=ra[ta(e.toLowerCase().trim())];if(!t)throw new $i(e);return`#${t}`}var aa=(e,t)=>Array.from(Array(t)).map(()=>e).join(``),oa=RegExp(`^#${aa(`([a-f0-9])`,3)}([a-f0-9])?$`,`i`),sa=RegExp(`^#${aa(`([a-f0-9]{2})`,3)}([a-f0-9]{2})?$`,`i`),ca=RegExp(`^rgba?\\(\\s*(\\d+)\\s*${aa(`,\\s*(\\d+)\\s*`,2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,`i`),la=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,ua=/^[a-z]+$/i,da=e=>Math.round(e*255),fa=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(da);let i=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);let u=r-a/2;return[s+u,c+u,l+u].map(da)};function pa(e,t,n,r){return`rgba(${Qi(0,255,e).toFixed()}, ${Qi(0,255,t).toFixed()}, ${Qi(0,255,n).toFixed()}, ${parseFloat(Qi(0,1,r).toFixed(3))})`}function ma(e,t,n){let r=(e,t)=>t===3?e:e/255,[i,a,o,s]=ea(e).map(r),[c,l,u,d]=ea(t).map(r),f=d-s,p=n*2-1,m=((p*f===-1?p:p+f/(1+p*f))+1)/2,h=1-m;return pa((i*h+c*m)*255,(a*h+l*m)*255,(o*h+u*m)*255,d*n+s*(1-n))}function ha(...e){return t=>{let n=e.length-1,r=Qi(0,n,Math.floor(t*n)),i=Qi(0,n,Math.ceil(t*n)),a=e[r],o=e[i],s=1/n;return ma(a,o,(t-s*r)/s)}}function ga(e){let[t,n,r,i]=ea(e),a=e=>{let t=Qi(0,255,e).toString(16);return t.length===1?`0${t}`:t};return`#${a(t)}${a(n)}${a(r)}${i<1?a(Math.round(i*255)):``}`}function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(null,arguments)}function _a(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function va(e,t){return va=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},va(e,t)}function ya(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,va(e,t)}function ba(e){return ba=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ba(e)}function xa(e){try{return Function.toString.call(e).indexOf(`[native code]`)!==-1}catch{return typeof e==`function`}}function Sa(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Sa=function(){return!!e})()}function Ca(e,t,n){if(Sa())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&va(i,n.prototype),i}function wa(e){var t=typeof Map==`function`?new Map:void 0;return wa=function(e){if(e===null||!xa(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Ca(e,arguments,ba(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),va(n,e)},wa(e)}function Ta(){var e;return e=arguments.length-1,e<0||arguments.length<=e?void 0:arguments[e]}function Ea(e){return-e}function Da(e,t){return e+t}function Oa(e,t){return e-t}function ka(e,t){return e*t}function Aa(e,t){return e/t}function ja(){return Math.max.apply(Math,arguments)}function Ma(){return Math.min.apply(Math,arguments)}function Na(){return Array.of.apply(Array,arguments)}var Pa={symbols:{"*":{infix:{symbol:`*`,f:ka,notation:`infix`,precedence:4,rightToLeft:0,argCount:2},symbol:`*`,regSymbol:`\\*`},"/":{infix:{symbol:`/`,f:Aa,notation:`infix`,precedence:4,rightToLeft:0,argCount:2},symbol:`/`,regSymbol:`/`},"+":{infix:{symbol:`+`,f:Da,notation:`infix`,precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:`+`,f:Ta,notation:`prefix`,precedence:3,rightToLeft:0,argCount:1},symbol:`+`,regSymbol:`\\+`},"-":{infix:{symbol:`-`,f:Oa,notation:`infix`,precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:`-`,f:Ea,notation:`prefix`,precedence:3,rightToLeft:0,argCount:1},symbol:`-`,regSymbol:`-`},",":{infix:{symbol:`,`,f:Na,notation:`infix`,precedence:1,rightToLeft:0,argCount:2},symbol:`,`,regSymbol:`,`},"(":{prefix:{symbol:`(`,f:Ta,notation:`prefix`,precedence:0,rightToLeft:0,argCount:1},symbol:`(`,regSymbol:`\\(`},")":{postfix:{symbol:`)`,f:void 0,notation:`postfix`,precedence:0,rightToLeft:0,argCount:1},symbol:`)`,regSymbol:`\\)`},min:{func:{symbol:`min`,f:Ma,notation:`func`,precedence:0,rightToLeft:0,argCount:1},symbol:`min`,regSymbol:`min\\b`},max:{func:{symbol:`max`,f:ja,notation:`func`,precedence:0,rightToLeft:0,argCount:1},symbol:`max`,regSymbol:`max\\b`}}},Fa=function(e){ya(t,e);function t(t){return _a(e.call(this,`An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#`+t+` for more information.`)||this)}return t}(wa(Error)),Ia=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;function La(e){var t={};return t.symbols=e?V({},Pa.symbols,e.symbols):V({},Pa.symbols),t}function Ra(e,t){var n,r=e.pop();return t.push(r.f.apply(r,(n=[]).concat.apply(n,t.splice(-r.argCount)))),r.precedence}function za(e,t){var n=La(t),r,i=[n.symbols[`(`].prefix],a=[],o=RegExp(`\\d+(?:\\.\\d+)?|`+Object.keys(n.symbols).map(function(e){return n.symbols[e]}).sort(function(e,t){return t.symbol.length-e.symbol.length}).map(function(e){return e.regSymbol}).join(`|`)+`|(\\S)`,`g`);o.lastIndex=0;var s=!1;do{r=o.exec(e);var c=r||[`)`,void 0],l=c[0],u=c[1],d=n.symbols[l],f=d&&!d.prefix&&!d.func,p=!d||!d.postfix&&!d.infix;if(u||(s?p:f))throw new Fa(37,r?r.index:e.length,e);if(s){var m=d.postfix||d.infix;do{var h=i[i.length-1];if((m.precedence-h.precedence||h.rightToLeft)>0)break}while(Ra(i,a));s=m.notation===`postfix`,m.symbol!==`)`&&(i.push(m),s&&Ra(i,a))}else if(d){if(i.push(d.prefix||d.func),d.func&&(r=o.exec(e),!r||r[0]!==`(`))throw new Fa(38,r?r.index:e.length,e)}else a.push(+l),s=!0}while(r&&i.length);if(i.length)throw new Fa(39,r?r.index:e.length,e);if(r)throw new Fa(40,r?r.index:e.length,e);return a.pop()}function Ba(e){return e.split(``).reverse().join(``)}function H(e,t){var n=Ba(e),r=n.match(Ia);if(r&&!r.every(function(e){return e===r[0]}))throw new Fa(41);return``+za(Ba(n.replace(Ia,``)),t)+(r?Ba(r[0]):``)}function Va(e,t){return e.substr(-t.length)===t}var Ha=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function Ua(e){return typeof e==`string`&&e.match(Ha)?parseFloat(e):e}var Wa=function(e){return function(t,n){n===void 0&&(n=`16px`);var r=t,i=n;if(typeof t==`string`){if(!Va(t,`px`))throw new Fa(69,e,t);r=Ua(t)}if(typeof n==`string`){if(!Va(n,`px`))throw new Fa(70,e,n);i=Ua(n)}if(typeof r==`string`)throw new Fa(71,t,e);if(typeof i==`string`)throw new Fa(72,n,e);return``+r/i+e}}(`em`),Ga=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function Ka(e){if(typeof e!=`string`)return[e,``];var t=e.match(Ga);return t?[parseFloat(e),t[2]]:[e,void 0]}function qa(){return{border:`0`,clip:`rect(0 0 0 0)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:`0`,position:`absolute`,whiteSpace:`nowrap`,width:`1px`}}function Ja(e){return Math.round(e*255)}function Ya(e,t,n){return Ja(e)+`,`+Ja(t)+`,`+Ja(n)}function Xa(e,t,n,r){if(r===void 0&&(r=Ya),t===0)return r(n,n,n);var i=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*t,o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);var u=n-a/2,d=s+u,f=c+u,p=l+u;return r(d,f,p)}var Za={aliceblue:`f0f8ff`,antiquewhite:`faebd7`,aqua:`00ffff`,aquamarine:`7fffd4`,azure:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`000`,blanchedalmond:`ffebcd`,blue:`0000ff`,blueviolet:`8a2be2`,brown:`a52a2a`,burlywood:`deb887`,cadetblue:`5f9ea0`,chartreuse:`7fff00`,chocolate:`d2691e`,coral:`ff7f50`,cornflowerblue:`6495ed`,cornsilk:`fff8dc`,crimson:`dc143c`,cyan:`00ffff`,darkblue:`00008b`,darkcyan:`008b8b`,darkgoldenrod:`b8860b`,darkgray:`a9a9a9`,darkgreen:`006400`,darkgrey:`a9a9a9`,darkkhaki:`bdb76b`,darkmagenta:`8b008b`,darkolivegreen:`556b2f`,darkorange:`ff8c00`,darkorchid:`9932cc`,darkred:`8b0000`,darksalmon:`e9967a`,darkseagreen:`8fbc8f`,darkslateblue:`483d8b`,darkslategray:`2f4f4f`,darkslategrey:`2f4f4f`,darkturquoise:`00ced1`,darkviolet:`9400d3`,deeppink:`ff1493`,deepskyblue:`00bfff`,dimgray:`696969`,dimgrey:`696969`,dodgerblue:`1e90ff`,firebrick:`b22222`,floralwhite:`fffaf0`,forestgreen:`228b22`,fuchsia:`ff00ff`,gainsboro:`dcdcdc`,ghostwhite:`f8f8ff`,gold:`ffd700`,goldenrod:`daa520`,gray:`808080`,green:`008000`,greenyellow:`adff2f`,grey:`808080`,honeydew:`f0fff0`,hotpink:`ff69b4`,indianred:`cd5c5c`,indigo:`4b0082`,ivory:`fffff0`,khaki:`f0e68c`,lavender:`e6e6fa`,lavenderblush:`fff0f5`,lawngreen:`7cfc00`,lemonchiffon:`fffacd`,lightblue:`add8e6`,lightcoral:`f08080`,lightcyan:`e0ffff`,lightgoldenrodyellow:`fafad2`,lightgray:`d3d3d3`,lightgreen:`90ee90`,lightgrey:`d3d3d3`,lightpink:`ffb6c1`,lightsalmon:`ffa07a`,lightseagreen:`20b2aa`,lightskyblue:`87cefa`,lightslategray:`789`,lightslategrey:`789`,lightsteelblue:`b0c4de`,lightyellow:`ffffe0`,lime:`0f0`,limegreen:`32cd32`,linen:`faf0e6`,magenta:`f0f`,maroon:`800000`,mediumaquamarine:`66cdaa`,mediumblue:`0000cd`,mediumorchid:`ba55d3`,mediumpurple:`9370db`,mediumseagreen:`3cb371`,mediumslateblue:`7b68ee`,mediumspringgreen:`00fa9a`,mediumturquoise:`48d1cc`,mediumvioletred:`c71585`,midnightblue:`191970`,mintcream:`f5fffa`,mistyrose:`ffe4e1`,moccasin:`ffe4b5`,navajowhite:`ffdead`,navy:`000080`,oldlace:`fdf5e6`,olive:`808000`,olivedrab:`6b8e23`,orange:`ffa500`,orangered:`ff4500`,orchid:`da70d6`,palegoldenrod:`eee8aa`,palegreen:`98fb98`,paleturquoise:`afeeee`,palevioletred:`db7093`,papayawhip:`ffefd5`,peachpuff:`ffdab9`,peru:`cd853f`,pink:`ffc0cb`,plum:`dda0dd`,powderblue:`b0e0e6`,purple:`800080`,rebeccapurple:`639`,red:`f00`,rosybrown:`bc8f8f`,royalblue:`4169e1`,saddlebrown:`8b4513`,salmon:`fa8072`,sandybrown:`f4a460`,seagreen:`2e8b57`,seashell:`fff5ee`,sienna:`a0522d`,silver:`c0c0c0`,skyblue:`87ceeb`,slateblue:`6a5acd`,slategray:`708090`,slategrey:`708090`,snow:`fffafa`,springgreen:`00ff7f`,steelblue:`4682b4`,tan:`d2b48c`,teal:`008080`,thistle:`d8bfd8`,tomato:`ff6347`,turquoise:`40e0d0`,violet:`ee82ee`,wheat:`f5deb3`,white:`fff`,whitesmoke:`f5f5f5`,yellow:`ff0`,yellowgreen:`9acd32`};function Qa(e){if(typeof e!=`string`)return e;var t=e.toLowerCase();return Za[t]?`#`+Za[t]:e}var $a=/^#[a-fA-F0-9]{6}$/,eo=/^#[a-fA-F0-9]{8}$/,to=/^#[a-fA-F0-9]{3}$/,no=/^#[a-fA-F0-9]{4}$/,ro=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,io=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,ao=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,oo=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function so(e){if(typeof e!=`string`)throw new Fa(3);var t=Qa(e);if(t.match($a))return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16)};if(t.match(eo)){var n=parseFloat((parseInt(``+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16),alpha:n}}if(t.match(to))return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16)};if(t.match(no)){var r=parseFloat((parseInt(``+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16),alpha:r}}var i=ro.exec(t);if(i)return{red:parseInt(``+i[1],10),green:parseInt(``+i[2],10),blue:parseInt(``+i[3],10)};var a=io.exec(t.substring(0,50));if(a)return{red:parseInt(``+a[1],10),green:parseInt(``+a[2],10),blue:parseInt(``+a[3],10),alpha:parseFloat(``+a[4])>1?parseFloat(``+a[4])/100:parseFloat(``+a[4])};var o=ao.exec(t);if(o){var s=`rgb(`+Xa(parseInt(``+o[1],10),parseInt(``+o[2],10)/100,parseInt(``+o[3],10)/100)+`)`,c=ro.exec(s);if(!c)throw new Fa(4,t,s);return{red:parseInt(``+c[1],10),green:parseInt(``+c[2],10),blue:parseInt(``+c[3],10)}}var l=oo.exec(t.substring(0,50));if(l){var u=`rgb(`+Xa(parseInt(``+l[1],10),parseInt(``+l[2],10)/100,parseInt(``+l[3],10)/100)+`)`,d=ro.exec(u);if(!d)throw new Fa(4,t,u);return{red:parseInt(``+d[1],10),green:parseInt(``+d[2],10),blue:parseInt(``+d[3],10),alpha:parseFloat(``+l[4])>1?parseFloat(``+l[4])/100:parseFloat(``+l[4])}}throw new Fa(5)}function co(e){var t=e.red/255,n=e.green/255,r=e.blue/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2;if(i===a)return e.alpha===void 0?{hue:0,saturation:0,lightness:o}:{hue:0,saturation:0,lightness:o,alpha:e.alpha};var s,c=i-a,l=o>.5?c/(2-i-a):c/(i+a);switch(i){case t:s=(n-r)/c+(n<r?6:0);break;case n:s=(r-t)/c+2;break;default:s=(t-n)/c+4;break}return s*=60,e.alpha===void 0?{hue:s,saturation:l,lightness:o}:{hue:s,saturation:l,lightness:o,alpha:e.alpha}}function lo(e){return co(so(e))}var uo=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?`#`+e[1]+e[3]+e[5]:e};function fo(e){var t=e.toString(16);return t.length===1?`0`+t:t}function po(e){return fo(Math.round(e*255))}function mo(e,t,n){return uo(`#`+po(e)+po(t)+po(n))}function ho(e,t,n){return Xa(e,t,n,mo)}function go(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return ho(e,t,n);if(typeof e==`object`&&t===void 0&&n===void 0)return ho(e.hue,e.saturation,e.lightness);throw new Fa(1)}function _o(e,t,n,r){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?ho(e,t,n):`rgba(`+Xa(e,t,n)+`,`+r+`)`;if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?ho(e.hue,e.saturation,e.lightness):`rgba(`+Xa(e.hue,e.saturation,e.lightness)+`,`+e.alpha+`)`;throw new Fa(2)}function vo(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return uo(`#`+fo(e)+fo(t)+fo(n));if(typeof e==`object`&&t===void 0&&n===void 0)return uo(`#`+fo(e.red)+fo(e.green)+fo(e.blue));throw new Fa(6)}function yo(e,t,n,r){if(typeof e==`string`&&typeof t==`number`){var i=so(e);return`rgba(`+i.red+`,`+i.green+`,`+i.blue+`,`+t+`)`}else if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?vo(e,t,n):`rgba(`+e+`,`+t+`,`+n+`,`+r+`)`;else if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?vo(e.red,e.green,e.blue):`rgba(`+e.red+`,`+e.green+`,`+e.blue+`,`+e.alpha+`)`;throw new Fa(7)}var bo=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},xo=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&typeof e.alpha==`number`},So=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},Co=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&typeof e.alpha==`number`};function wo(e){if(typeof e!=`object`)throw new Fa(8);if(xo(e))return yo(e);if(bo(e))return vo(e);if(Co(e))return _o(e);if(So(e))return go(e);throw new Fa(8)}function To(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):To(e,t,r)}}function Eo(e){return To(e,e.length,[])}function Do(e,t){if(t===`transparent`)return t;var n=lo(t);return wo(V({},n,{hue:n.hue+parseFloat(e)}))}Eo(Do);function Oo(e,t,n){return Math.max(e,Math.min(t,n))}function ko(e,t){if(t===`transparent`)return t;var n=lo(t);return wo(V({},n,{lightness:Oo(0,1,n.lightness-parseFloat(e))}))}var Ao=Eo(ko);function jo(e,t){if(t===`transparent`)return t;var n=lo(t);return wo(V({},n,{saturation:Oo(0,1,n.saturation-parseFloat(e))}))}Eo(jo);function Mo(e){if(e===`transparent`)return 0;var t=so(e),n=Object.keys(t).map(function(e){var n=t[e]/255;return n<=.03928?n/12.92:((n+.055)/1.055)**2.4}),r=n[0],i=n[1],a=n[2];return parseFloat((.2126*r+.7152*i+.0722*a).toFixed(3))}function No(e,t){var n=Mo(e),r=Mo(t);return parseFloat((n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)).toFixed(2))}function Po(e,t){if(t===`transparent`)return t;var n=lo(t);return wo(V({},n,{lightness:Oo(0,1,n.lightness+parseFloat(e))}))}var Fo=Eo(Po);function Io(e,t,n){if(t===`transparent`)return n;if(n===`transparent`)return t;if(e===0)return n;var r=so(t),i=V({},r,{alpha:typeof r.alpha==`number`?r.alpha:1}),a=so(n),o=V({},a,{alpha:typeof a.alpha==`number`?a.alpha:1}),s=i.alpha-o.alpha,c=parseFloat(e)*2-1,l=((c*s===-1?c:c+s)/(1+c*s)+1)/2,u=1-l;return yo({red:Math.floor(i.red*l+o.red*u),green:Math.floor(i.green*l+o.green*u),blue:Math.floor(i.blue*l+o.blue*u),alpha:i.alpha*parseFloat(e)+o.alpha*(1-parseFloat(e))})}var Lo=Eo(Io);function Ro(e,t){if(t===`transparent`)return t;var n=so(t);return yo(V({},n,{alpha:Oo(0,1,((typeof n.alpha==`number`?n.alpha:1)*100+parseFloat(e)*100)/100)}))}Eo(Ro);var zo=`#000`,Bo=`#fff`;function Vo(e,t,n,r){t===void 0&&(t=zo),n===void 0&&(n=Bo),r===void 0&&(r=!0);var i=Mo(e)>.179,a=i?t:n;return!r||No(e,a)>=4.5?a:i?zo:Bo}function Ho(e,t){if(t===`transparent`)return t;var n=lo(t);return wo(V({},n,{saturation:Oo(0,1,n.saturation+parseFloat(e))}))}Eo(Ho);function Uo(e,t){return t===`transparent`?t:wo(V({},lo(t),{hue:parseFloat(e)}))}Eo(Uo);function Wo(e,t){return t===`transparent`?t:wo(V({},lo(t),{lightness:parseFloat(e)}))}Eo(Wo);function Go(e,t){return t===`transparent`?t:wo(V({},lo(t),{saturation:parseFloat(e)}))}Eo(Go);function Ko(e,t){return t===`transparent`?t:Lo(parseFloat(e),`rgb(0, 0, 0)`,t)}Eo(Ko);function qo(e,t){return t===`transparent`?t:Lo(parseFloat(e),`rgb(255, 255, 255)`,t)}Eo(qo);function Jo(e,t){if(t===`transparent`)return t;var n=so(t);return yo(V({},n,{alpha:Oo(0,1,((typeof n.alpha==`number`?n.alpha:1)*100-parseFloat(e)*100).toFixed(2)/100)}))}Eo(Jo);var Yo=o(((e,t)=>{var n=`__lodash_hash_undefined__`,r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/,a=/^\./,o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/[\\^$.*+?()[\]{}|]/g,c=/\\(\\)?/g,l=/^\[object .+?Constructor\]$/,u=typeof global==`object`&&global&&global.Object===Object&&global,d=typeof self==`object`&&self&&self.Object===Object&&self,f=u||d||Function(`return this`)();function p(e,t){return e?.[t]}function m(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var h=Array.prototype,g=Function.prototype,_=Object.prototype,v=f[`__core-js_shared__`],y=function(){var e=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),b=g.toString,x=_.hasOwnProperty,S=_.toString,C=RegExp(`^`+b.call(x).replace(s,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),w=f.Symbol,ee=h.splice,te=Ce(f,`Map`),ne=Ce(Object,`create`),T=w?w.prototype:void 0,E=T?T.toString:void 0;function re(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function D(){this.__data__=ne?ne(null):{}}function ie(e){return this.has(e)&&delete this.__data__[e]}function ae(e){var t=this.__data__;if(ne){var r=t[e];return r===n?void 0:r}return x.call(t,e)?t[e]:void 0}function O(e){var t=this.__data__;return ne?t[e]!==void 0:x.call(t,e)}function oe(e,t){var r=this.__data__;return r[e]=ne&&t===void 0?n:t,this}re.prototype.clear=D,re.prototype.delete=ie,re.prototype.get=ae,re.prototype.has=O,re.prototype.set=oe;function se(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function k(){this.__data__=[]}function ce(e){var t=this.__data__,n=_e(t,e);return n<0?!1:(n==t.length-1?t.pop():ee.call(t,n,1),!0)}function A(e){var t=this.__data__,n=_e(t,e);return n<0?void 0:t[n][1]}function le(e){return _e(this.__data__,e)>-1}function ue(e,t){var n=this.__data__,r=_e(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}se.prototype.clear=k,se.prototype.delete=ce,se.prototype.get=A,se.prototype.has=le,se.prototype.set=ue;function de(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function fe(){this.__data__={hash:new re,map:new(te||se),string:new re}}function pe(e){return Se(this,e).delete(e)}function me(e){return Se(this,e).get(e)}function he(e){return Se(this,e).has(e)}function ge(e,t){return Se(this,e).set(e,t),this}de.prototype.clear=fe,de.prototype.delete=pe,de.prototype.get=me,de.prototype.has=he,de.prototype.set=ge;function _e(e,t){for(var n=e.length;n--;)if(je(e[n][0],t))return n;return-1}function ve(e,t){t=we(t,e)?[t]:xe(t);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Oe(t[n++])];return n&&n==r?e:void 0}function ye(e){return!Pe(e)||Ee(e)?!1:(Ne(e)||m(e)?C:l).test(ke(e))}function be(e){if(typeof e==`string`)return e;if(Ie(e))return E?E.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function xe(e){return Me(e)?e:De(e)}function Se(e,t){var n=e.__data__;return Te(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Ce(e,t){var n=p(e,t);return ye(n)?n:void 0}function we(e,t){if(Me(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||Ie(e)?!0:i.test(e)||!r.test(e)||t!=null&&e in Object(t)}function Te(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Ee(e){return!!y&&y in e}var De=Ae(function(e){e=Le(e);var t=[];return a.test(e)&&t.push(``),e.replace(o,function(e,n,r,i){t.push(r?i.replace(c,`$1`):n||e)}),t});function Oe(e){if(typeof e==`string`||Ie(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function ke(e){if(e!=null){try{return b.call(e)}catch{}try{return e+``}catch{}}return``}function Ae(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(`Expected a function`);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o),o};return n.cache=new(Ae.Cache||de),n}Ae.Cache=de;function je(e,t){return e===t||e!==e&&t!==t}var Me=Array.isArray;function Ne(e){var t=Pe(e)?S.call(e):``;return t==`[object Function]`||t==`[object GeneratorFunction]`}function Pe(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function Fe(e){return!!e&&typeof e==`object`}function Ie(e){return typeof e==`symbol`||Fe(e)&&S.call(e)==`[object Symbol]`}function Le(e){return e==null?``:be(e)}function Re(e,t,n){var r=e==null?void 0:ve(e,t);return r===void 0?n:r}t.exports=Re})),Xo=o(((e,t)=>{var n=`__lodash_hash_undefined__`,r=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,a=typeof global==`object`&&global&&global.Object===Object&&global,o=typeof self==`object`&&self&&self.Object===Object&&self,s=a||o||Function(`return this`)();function c(e,t){return e?.[t]}function l(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var u=Array.prototype,d=Function.prototype,f=Object.prototype,p=s[`__core-js_shared__`],m=function(){var e=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),h=d.toString,g=f.hasOwnProperty,_=f.toString,v=RegExp(`^`+h.call(g).replace(r,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),y=u.splice,b=fe(s,`Map`),x=fe(Object,`create`);function S(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function C(){this.__data__=x?x(null):{}}function w(e){return this.has(e)&&delete this.__data__[e]}function ee(e){var t=this.__data__;if(x){var r=t[e];return r===n?void 0:r}return g.call(t,e)?t[e]:void 0}function te(e){var t=this.__data__;return x?t[e]!==void 0:g.call(t,e)}function ne(e,t){var r=this.__data__;return r[e]=x&&t===void 0?n:t,this}S.prototype.clear=C,S.prototype.delete=w,S.prototype.get=ee,S.prototype.has=te,S.prototype.set=ne;function T(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function E(){this.__data__=[]}function re(e){var t=this.__data__,n=le(t,e);return n<0?!1:(n==t.length-1?t.pop():y.call(t,n,1),!0)}function D(e){var t=this.__data__,n=le(t,e);return n<0?void 0:t[n][1]}function ie(e){return le(this.__data__,e)>-1}function ae(e,t){var n=this.__data__,r=le(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}T.prototype.clear=E,T.prototype.delete=re,T.prototype.get=D,T.prototype.has=ie,T.prototype.set=ae;function O(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function oe(){this.__data__={hash:new S,map:new(b||T),string:new S}}function se(e){return de(this,e).delete(e)}function k(e){return de(this,e).get(e)}function ce(e){return de(this,e).has(e)}function A(e,t){return de(this,e).set(e,t),this}O.prototype.clear=oe,O.prototype.delete=se,O.prototype.get=k,O.prototype.has=ce,O.prototype.set=A;function le(e,t){for(var n=e.length;n--;)if(_e(e[n][0],t))return n;return-1}function ue(e){return!ye(e)||me(e)?!1:(ve(e)||l(e)?v:i).test(he(e))}function de(e,t){var n=e.__data__;return pe(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function fe(e,t){var n=c(e,t);return ue(n)?n:void 0}function pe(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function me(e){return!!m&&m in e}function he(e){if(e!=null){try{return h.call(e)}catch{}try{return e+``}catch{}}return``}function ge(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(`Expected a function`);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o),o};return n.cache=new(ge.Cache||O),n}ge.Cache=O;function _e(e,t){return e===t||e!==e&&t!==t}function ve(e){var t=ye(e)?_.call(e):``;return t==`[object Function]`||t==`[object GeneratorFunction]`}function ye(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}t.exports=ge})),Zo=c(Yo()),Qo=c(Xo()),$o=(e,t,n)=>{if(t!==n){let r=Math.abs(t-n)/100*.05;return t>n?Ao(r,e):Fo(r,e)}return e},es=(e,t,n,r)=>{let i;if(e===void 0)i=r===`dark`?n===void 0?600:500:700;else if(i=parseInt(e.toString(),10),isNaN(i))throw TypeError(`Error: unexpected '${typeof e}' type for color shade "${e}"`);return i+(t||0)},ts=(e,t,n,r,i)=>{let a=es(t,n,r,i),o=e[a];if(!o){let t=Object.keys(e).map(e=>parseInt(e,10)).reduce((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e);o=$o(e[t],a,t)}return o},ns=e=>{let t=[`currentcolor`,`inherit`,`transparent`].includes(e);if(!t)try{t=!!ea(e)}catch{t=!1}return t};function rs(e,t,n=0){if(typeof e!=`number`||isNaN(e))throw Error(`Target must be a number.`);if(!Array.isArray(t))throw Error(`Second argument must be an array.`);let r=n,i=t.length-1;if(e<t[r])return r;if(e>t[i])return i;for(;r<=i;){let n=Math.floor((r+i)/2);if(t[n]===e)return n;t[n]<e?r=n+1:i=n-1}return t[r]-e<e-t[i]?r:i}var is={100:1.08,200:1.2,300:1.35,400:2,500:2.8,600:3.3,700:5,800:10,900:13,1e3:16,1100:17.5,1200:19},as=(0,Qo.default)(e=>{let t=ha(`#FFF`,e,`#000`),n=e=>t(e/200),r=[],i=[];for(let e=0;e<=200;e++){let t=ga(n(e));r.push(t),i.push(No(`#FFF`,t))}let a={},o=0;for(let e in is)if(Object.prototype.hasOwnProperty.call(is,e)){let t=is[e],n=rs(t,i,o);o=n+1,a[e]=r[n]}return a}),os=(e,t,n,r,i,a,o,s)=>{let c,l=e[i]||i;if(Object.prototype.hasOwnProperty.call(t,l)&&(l=t[l]),typeof l==`object`?c=ts(l,a,o,s,r):ns(l)&&(a===void 0?c=l:(l=as(l),c=ts(l,a,o,s,r))),c&&s){let e=s>1?n[s]:s;if(e===void 0)throw Error("Error: invalid `transparency` parameter");c=yo(c,e)}return c},ss=(e,t)=>{let n=(0,Zo.default)(e,t);if(typeof n==`string`)return n;throw n===void 0?ReferenceError(`Error: color variable '${t}' is not defined`):TypeError(`Error: unexpected '${typeof n}' type for color variable "${t}"`)},cs=e=>{let t;try{let[n,r,i,a]=ea(e);t={property:ga(`rgb(${n}, ${r}, ${i})`),transparency:a}}catch{let n=/rgba\s*\(\s*(?<property>[#\w.]+)\s*,\s*(?<alpha>[\w.]+)\s*\)/gu.exec(e);if(n&&n.groups)t={property:n.groups.property,transparency:parseFloat(n.groups.alpha)};else throw Error(`Error: invalid \`rgba\` value "${e}"`)}return t},ls=(e,t,n)=>{let r={},i=ss(t,e);if(i.startsWith(`rgba`)){let e=cs(i);i=e.property,r.transparency=e.transparency}let[a,o]=i.split(/\.(?<value>.*)/u);return a===`palette`?r.hue=ss(n,o):(r.hue=a,o!==void 0&&(r.shade=parseInt(o,10))),r},us=new WeakMap,ds={colors:0,palette:0,opacity:0};us.set(Zi.colors,ds.colors),us.set(Zi.palette,ds.palette),us.set(Zi.opacity,ds.opacity);var fs=({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c;a.colors&&(c=us.get(a.colors),c===void 0&&(c=++ds.colors,us.set(a.colors,c)));let l;a.opacity&&(l=us.get(a.opacity),l===void 0&&(l=++ds.opacity,us.set(a.opacity,l)));let u;a.palette&&(u=us.get(a.palette),u===void 0&&(u=++ds.palette,us.set(a.palette,u)));let d=`{${c},${u},${l}}`;return s!==void 0&&(d+=`,${s}`),t!==void 0&&(d+=`,${t}`),i!==void 0&&(d+=`,${i}`),r!==void 0&&(d+=`,${r}`),o!==void 0&&(d+=`,${o}`),e!==void 0&&(d+=`,${JSON.stringify(e)}`),n!==void 0&&(d+=`,${JSON.stringify(n)}`),d},U=(0,Qo.default)(({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c,l=a.palette&&Object.keys(a.palette).length>0?a.palette:Zi.palette,{base:u,variables:d,...f}=a.colors&&Object.keys(a.colors).length>0?a.colors:Zi.colors,p=u===`dark`?`dark`:`light`,m=p===`dark`?e:n,h=m?.hue||t,g=m?.shade===void 0?i:m.shade,_=m?.offset===void 0?r:m.offset,v=m?.transparency===void 0?o:m.transparency;if(s){let e=ls(s,d?.[p]?d[p]:Zi.colors.variables[p],l);h=e.hue,g=e.shade,v=v===void 0?e.transparency:v}if(h&&(c=os(f,l,a.opacity&&Object.keys(a.opacity).length>0?a.opacity:Zi.opacity,p,h,g,_,v)),c===void 0)throw Error("Error: invalid `getColor` parameters");return c},({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>fs({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})),ps={black:`#000`,white:`#fff`,product:{support:`#00a656`,message:`#37b8af`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,connect:`#ff6224`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f8f9f9`,200:`#e9ebed`,300:`#d8dcde`,400:`#c2c8cc`,500:`#87929d`,600:`#68737d`,700:`#49545c`,800:`#2f3941`},blue:{100:`#edf7ff`,200:`#cee2f2`,300:`#adcce4`,400:`#5293c7`,500:`#337fbd`,600:`#1f73b7`,700:`#144a75`,800:`#0f3554`},red:{100:`#fff0f1`,200:`#f5d5d8`,300:`#f5b5ba`,400:`#e35b66`,500:`#d93f4c`,600:`#cc3340`,700:`#8c232c`,800:`#681219`},yellow:{100:`#fff7ed`,200:`#ffeedb`,300:`#fed6a8`,400:`#ffb057`,500:`#f79a3e`,600:`#ed8f1c`,700:`#ad5918`,800:`#703815`},green:{100:`#edf8f4`,200:`#d1e8df`,300:`#aecfc2`,400:`#5eae91`,500:`#228f67`,600:`#038153`,700:`#186146`,800:`#0b3b29`},kale:{100:`#f5fcfc`,200:`#daeded`,300:`#bdd9d7`,400:`#90bbbb`,500:`#498283`,600:`#17494d`,700:`#03363d`,800:`#012b30`},fuschia:{400:`#d653c2`,600:`#a81897`,M400:`#cf62a8`,M600:`#a8458c`},pink:{400:`#ec4d63`,600:`#d42054`,M400:`#d57287`,M600:`#b23a5d`},crimson:{400:`#e34f32`,600:`#c72a1c`,M400:`#cc6c5b`,M600:`#b24a3c`},orange:{400:`#de701d`,600:`#bf5000`,M400:`#d4772c`,M600:`#b35827`},lemon:{400:`#ffd424`,600:`#ffbb10`,M400:`#e7a500`,M600:`#c38f00`},lime:{400:`#43b324`,600:`#2e8200`,M400:`#519e2d`,M600:`#47782c`},mint:{400:`#00a656`,600:`#058541`,M400:`#299c66`,M600:`#2e8057`},teal:{400:`#02a191`,600:`#028079`,M400:`#2d9e8f`,M600:`#3c7873`},azure:{400:`#3091ec`,600:`#1371d6`,M400:`#5f8dcf`,M600:`#3a70b2`},royal:{400:`#5d7df5`,600:`#3353e2`,M400:`#7986d8`,M600:`#4b61c3`},purple:{400:`#b552e2`,600:`#6a27b8`,M400:`#b072cc`,M600:`#9358b0`}},ms=(e,t,n)=>{if(t!==n){let r=Math.abs(t-n)/100*.05;return t>n?Ao(r,e):Fo(r,e)}return e},hs=new WeakMap,gs={colors:0,palette:0};hs.set(Zi.colors,gs.colors),hs.set(Zi.palette,gs.palette);var _s=({hue:e,shade:t,theme:n,transparency:r})=>{let i=`${typeof e==`object`?JSON.stringify(e):e}`;if(t!==void 0&&(i+=`,${t}`),n!==void 0){let e;n.colors&&(e=hs.get(n.colors),e===void 0&&(e=++gs.colors,hs.set(n.colors,e)));let t;n.palette&&(t=hs.get(n.palette),t===void 0&&(t=++gs.palette,hs.set(n.palette,t))),i+=`,{${e},${t}}`}return r!==void 0&&(i+=`,${r}`),i},vs=(0,Qo.default)((e,t=600,n,r)=>{let i;if(isNaN(t))return;let a={background:ps.white,foreground:ps.grey[800],...n&&n.palette?{...n.palette,...ps}:{...Zi.palette,...ps}},o=n&&n.colors?n.colors:Zi.colors,s;if(s=typeof e==`string`&&o[e]||e,Object.prototype.hasOwnProperty.call(a,s)&&(s=a[s]),typeof s==`object`){if(i=s[t],!i){let e=Object.keys(s).map(e=>parseInt(e,10)).reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e);i=ms(s[e],t,e)}}else i=ms(s,t,600);return r&&(i=yo(i,r)),i},(e,t,n,r)=>_s({hue:e,shade:t,theme:n,transparency:r})),ys=({boxShadow:e,inset:t=!1,color:n={variable:`border.primaryEmphasis`},shadowWidth:r=`md`,spacerColor:i={variable:`background.default`},spacerWidth:a=`xs`,theme:o=Zi,...s})=>{let c=s,l=c.hue?vs(c.hue,c.shade,o):U({...n,theme:o}),u=o.shadows[r](l);if(a===null)return`${t?`inset`:``} ${u}`;let d=c.spacerHue?vs(c.spacerHue,c.spacerShade,o):U({...i,theme:o}),f=`
    ${t?`inset`:``} ${o.shadows[a](d)},
    ${t?`inset`:``} ${u}`;return e?`${f}, ${e}`:f},bs=({theme:e,value:t})=>U(/^[a-z]+\.[a-z]+$/giu.test(t)?{variable:t,theme:e}:{hue:t,theme:e});function xs(e,t){let[n,r]=Ka(e.toString()),[i,a]=Ka(t.toString());if(r&&r!==`px`)throw Error(`Unexpected \`height\` with '${r}' units.`);if(a&&a!==`px`)throw Error(`Unexpected \`fontSize\` with '${a}' units.`);return n/i}var Ss=(e,t,n,r,i=!0)=>{let a=i?t[n]:void 0;return(0,g.useMemo)(()=>{if(i){if(n===`children`)throw Error("Error: `children` is not a valid `useText` prop.");if(a===null||a===``)throw Error(e.displayName?`Error: you must provide a valid \`${n}\` text value for <${e.displayName}>.`:`Error: you must provide a valid \`${n}\` text value.`);if(a===void 0)return r}return a},[e.displayName,a,n,r,i])},Cs=`&:focus-visible`,ws=({condition:e=!0,selector:t=Cs,shadowWidth:n=`md`,spacerWidth:r=`xs`,styles:{boxShadow:i,...a}={},theme:o,...s})=>{let c=e?ys({boxShadow:i,shadowWidth:n,spacerWidth:r,theme:o,...s}):i,l,u;return r===null?l=o.shadowWidths[n]:(l=`${H(`${o.shadowWidths[n]} - ${o.shadowWidths[r]}`)} solid transparent`,u=o.shadowWidths[r]),I([`&:focus{outline:none;}`,`{outline:`,`;outline-offset:`,`;box-shadow:`,`;`,`}`],t,l,u,c,a)},Ts=L(({children:e,theme:t,...n})=>(0,g.cloneElement)(g.Children.only(e),n)).withConfig({displayName:`StyledBaseIcon`,componentId:`sc-1moykgb-0`})([``]),Es=[`small`,`medium`,`large`];[...Es];var Ds=`typography.font`;[...Es];var Os={small:`sm`,medium:`md`,large:`lg`,extralarge:`xl`,"2xlarge":`xxl`,"3xlarge":`xxxl`},ks=({$hue:e,$isBold:t,$isMonospace:n,$size:r,theme:i})=>{let a=n&&[`inherit`,`small`,`medium`,`large`].indexOf(r)!==-1,o=a&&i.fonts.mono,s=i.rtl?`rtl`:`ltr`,c=e?bs({theme:i,value:e}):void 0,l,u,d;if(a)if(r===`inherit`)l=`calc(1em - 1px)`,d=`normal`;else{let e=Os[r];l=H(`${i.fontSizes[e]} - 1px`),d=H(`${i.lineHeights[e]} - 1px`)}else if(r!==`inherit`){let e=Os[r];l=i.fontSizes[e],d=i.lineHeights[e]}return t===!0?u=i.fontWeights.semibold:(t===!1||r!==`inherit`)&&(u=i.fontWeights.regular),I([`transition:color 0.1s ease-in-out;line-height:`,`;color:`,`;font-family:`,`;font-size:`,`;font-weight:`,`;direction:`,`;`],d,c,o,l,u,s)},As=L.div.attrs(e=>({"data-garden-id":Ds,"data-garden-version":`9.15.6`,$size:e.$size??`inherit`})).withConfig({displayName:`StyledFont`,componentId:`sc-1iildbo-0`})([``,`;&[hidden]{display:inline;`,`;}`,`;`],e=>!e.hidden&&ks(e),qa(),B),js=`typography.icon`,Ms=e=>{let t=e.$isStart&&`${e.theme.space.base*2}px`,n=e.theme.iconSizes.md;return I([`margin-`,`:`,`;width:`,`;height:`,`;`],e.theme.rtl?`left`:`right`,t,n,n)},Ns=L(Ts).attrs({"data-garden-id":js,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledIcon`,componentId:`sc-10rfb5b-0`})([`position:relative;top:-1px;vertical-align:middle;`,`;`,`;`],e=>Ms(e),B),Ps=e=>g.createElement(Ns,Object.assign({$isStart:!0},e));Ps.displayName=`Span.StartIcon`;var Fs=Ps,Is=e=>g.createElement(Ns,e);Is.displayName=`Span.Icon`;var Ls=Is,W=c(Pi()),Rs=(0,g.forwardRef)(({hue:e,isBold:t,isMonospace:n,tag:r=`span`,...i},a)=>g.createElement(As,Object.assign({$hue:e,$isBold:t,$isMonospace:n,$size:`inherit`,as:r,ref:a},i)));Rs.displayName=`Span`,Rs.propTypes={tag:W.default.any,isBold:W.default.bool,isMonospace:W.default.bool,hue:W.default.string};var zs=Rs;zs.Icon=Ls,zs.StartIcon=Fs;var Bs;function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vs.apply(null,arguments)}var Hs=function(e){return g.createElement(`svg`,Vs({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Bs||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:6,cy:6,r:5.5}),g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5.5 3v3.5H8`})))},Us;function Ws(){return Ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ws.apply(null,arguments)}var Gs=function(e){return g.createElement(`svg`,Ws({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Us||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:8,cy:8,r:7.5}),g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M7.5 3v5.5H11`})))},Ks;function qs(){return qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qs.apply(null,arguments)}var Js=function(e){return g.createElement(`svg`,qs({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Ks||=g.createElement(`path`,{fill:`currentColor`,d:`M2.146 6.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L3.707 6H9.5a.5.5 0 0 1 0 1H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2Z`}))},Ys;function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(null,arguments)}var Zs=function(e){return g.createElement(`svg`,Xs({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Ys||=g.createElement(`path`,{fill:`currentColor`,d:`M3.146 8.854a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L4.707 8H12.5a.5.5 0 0 1 0 1H4.707l2.147 2.146a.5.5 0 1 1-.708.707l-3-3Z`}))},Qs=[`extraextrasmall`,`extrasmall`,`small`,`medium`,`large`],$s=[`available`,`away`,`transfers`,`offline`],ec=L.span.attrs({"data-garden-id":`avatars.text`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledText`,componentId:`sc-1a6hivh-0`})([`overflow:hidden;text-align:center;white-space:nowrap;`,`;`],B),[tc,nc,rc,ic,ac]=Qs,oc=.25,sc={active:{hue:`crimson`,light:{shade:700},dark:{shade:600}},available:{hue:`mint`,light:{shade:500},dark:{shade:400}},away:{hue:`orange`,light:{shade:500},dark:{shade:400}},transfers:{hue:`azure`,light:{shade:500},dark:{shade:400}},offline:{hue:`grey`,light:{shade:500},dark:{shade:400}}};function cc(e,t){if(t===void 0)return`transparent`;let n=sc[t];return n?U({...n,theme:e}):`transparent`}function lc(e){return e.$size===tc?H(`${e.theme.shadowWidths.sm} - 1`):e.theme.shadowWidths.sm}function uc(e,t){let n=e.$type===`active`;switch(e.$size){case tc:return H(`${e.theme.space.base}px - ${t}`);case nc:return H(`${e.theme.space.base*2}px - (${t} * 2)`);case rc:return H(`${e.theme.space.base*3}px ${n?``:`- (${t} * 2)`}`);case ic:case ac:return H(`${e.theme.space.base*4}px ${n?``:`- (${t} * 2)`}`);default:return`0`}}function dc(e,t){return e.includes(t)}var fc=`avatars.status-indicator.base`,pc=ji([`0%{opacity:0;}100%{opacity:1;}`]),mc=L.div.attrs({"data-garden-id":fc,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledStatusIndicatorBase`,componentId:`sc-1rininy-0`})([`transition:inherit;`,` `,` `,`;`],e=>{let t=lc(e),n=uc(e,t);return I([`border:`,` `,`;border-radius:`,`;min-width:`,`;height:`,`;line-height:`,`;& > svg{position:absolute;top:-`,`;inset-inline-start:-`,`;transform-origin:50% 50%;animation:`,` `,`s;max-height:unset;&[data-icon-status='transfers']{transform:scale(`,`,1);inset-inline-start:`,`;}&[data-icon-status='away'] circle{display:none;}}`],t,e.theme.borderStyles.solid,n,n,n,n,t,t,pc,oc,e.theme.rtl?-1:1,e.$size===`extrasmall`?`-1px`:void 0)},({theme:e,$type:t})=>{let n=U({variable:`foreground.onEmphasis`,theme:e}),r,i;return t===`offline`?(i=cc(e,t),r=U({variable:`background.default`,theme:e})):(r=cc(e,t),i=r),I([`border-color:`,`;background-color:`,`;color:`,`;`],i,r,n)},B),hc=`avatars.status_indicator`,[gc,_c,vc,G,yc]=Qs,bc=L(mc).attrs(e=>({"data-garden-id":hc,"data-garden-version":`9.15.6`,$size:e.$size??`medium`})).withConfig({displayName:`StyledStatusIndicator`,componentId:`sc-16t9if3-0`})([``,` `,` `,`;`],e=>{let t=e.$size!==gc,n=e.$size===_c?`${e.theme.space.base*2}px`:void 0,r=lc(e),i=`0`;return e.$size===vc?i=H(`${e.theme.space.base+1}px - (${r} * 2)`):dc([G,yc],e.$size)&&(i=H(`${e.theme.space.base+3}px - (${r} * 2)`)),I([`max-width:calc(2em + (`,` * 3));box-sizing:content-box;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;font-size:`,`;font-weight:`,`;& > span{display:`,`;padding:0 `,`;max-width:2em;overflow:inherit;text-align:inherit;text-overflow:inherit;white-space:inherit;}& > svg{`,` width:`,`;height:`,`;}`],r,e.theme.fontSizes.xs,e.theme.fontWeights.semibold,t?`inline-block`:`none`,i,!t&&`display: none;`,n,n)},({theme:e,$type:t,$size:n,$borderColor:r,$surfaceColor:i})=>{let a=n===gc?`xs`:`sm`,o,s=i?.includes(`.`)?U({variable:i,theme:e}):i;return o=t?e.shadows[a](s||U({theme:e,variable:`background.default`})):e.shadows[a](s||e.palette.white),I([`border-color:`,`;box-shadow:`,`;`],r,o)},B),xc=`avatars.avatar`,Sc=e=>{let[t,n,r,i,a]=Qs,o=`${e.theme.space.base*-1}px`;switch(e.$size){case t:case n:o=H(`${o}  + 3`);break;case r:case i:case a:o=H(`${o}  + 2`);break}let s=ji([`0%{transform:scale(.1);}`]);return I([`position:absolute;`,`:`,`;bottom:`,`;transition:all `,`s ease-in-out;`,``],e.theme.rtl?`left`:`right`,o,o,oc,e.$status===`active`&&I([`animation:`,` `,`s ease-in-out;`],s,.25*1.5))},Cc=({theme:e,$foregroundColor:t=e.palette.white,$surfaceColor:n=`background.default`,$backgroundColor:r=`transparent`,$status:i})=>{let a=cc(e,i),o=bs({theme:e,value:r}),s=bs({theme:e,value:t}),c=i?bs({theme:e,value:n}):`transparent`;return I([`box-shadow:`,`;background-color:`,`;&&{color:`,`;}& > svg,& `,`{color:`,`;}`],e.shadows.sm(a),o,c,ec,s)},wc=e=>{let t,n,r,i,a;return e.$size===`extraextrasmall`?(t=`0 0 0 ${H(`${e.theme.shadowWidths.sm} - 1`)}`,n=e.$isSystem?H(`${e.theme.borderRadii.md} - 1`):`50%`,r=`${e.theme.space.base*4}px`,i=0,a=`${e.theme.space.base*3}px`):e.$size===`extrasmall`?(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?H(`${e.theme.borderRadii.md} - 1`):`50%`,r=`${e.theme.space.base*6}px`,i=e.theme.fontSizes.sm,a=`${e.theme.space.base*3}px`):e.$size===`small`?(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?H(`${e.theme.borderRadii.md} - 1`):`50%`,r=`${e.theme.space.base*8}px`,i=e.theme.fontSizes.md,a=`${e.theme.space.base*3}px`):e.$size===`large`?(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?H(`${e.theme.borderRadii.md} + 1`):`50%`,r=`${e.theme.space.base*12}px`,i=e.theme.fontSizes.xl,a=`${e.theme.space.base*6}px`):(t=`inset 0 0 0 ${e.theme.shadowWidths.sm}`,n=e.$isSystem?e.theme.borderRadii.md:`50%`,r=`${e.theme.space.base*10}px`,i=e.theme.fontSizes.lg,a=`${e.theme.space.base*4}px`),I([`border-radius:`,`;width:`,` !important;height:`,` !important;&::before{box-shadow:`,`;}& > svg{font-size:`,`;}& `,`{line-height:`,`;font-size:`,`;}`],n,r,r,t,a,ec,r,i)},Tc=L.figure.attrs(e=>({"data-garden-id":xc,"data-garden-version":`9.15.6`,$size:e.$size??`medium`})).withConfig({displayName:`StyledAvatar`,componentId:`sc-608m04-0`})([`display:inline-flex;position:relative;align-items:center;justify-content:center;transition:box-shadow `,`s ease-in-out,color 0.1s ease-in-out;margin:0;vertical-align:middle;box-sizing:border-box;`,`;`,`;&::before{position:absolute;top:0;left:0;transition:box-shadow `,`s ease-in-out;content:'';}&::before,&& > img{border-radius:inherit;width:100%;height:100%;}&& > img{box-sizing:inherit;vertical-align:bottom;object-fit:cover;}&& > svg{width:1em;height:1em;}& > `,`{`,`;}`,`;`],oc,e=>wc(e),e=>Cc(e),oc,bc,Sc,B),Ec=(0,g.forwardRef)((e,t)=>g.createElement(ec,Object.assign({ref:t},e)));Ec.displayName=`Avatar.Text`;var Dc=Ec,Oc=(0,g.forwardRef)(({"aria-hidden":e,backgroundColor:t,badge:n,children:r,foregroundColor:i,isSystem:a,size:o=`medium`,status:s,statusLabel:c,surfaceColor:l,...u},d)=>{let f=n===void 0?s:`active`,p=Hs,m=Js;[`large`,`medium`].includes(o)&&(p=Gs,m=Zs);let h=(0,g.useMemo)(()=>{let e=f;if(f===`active`){let t=typeof n==`string`?parseInt(n,10):n;e=`active. ${t>0?`${t} notification${t>1?`s`:``}`:`no notifications`}`}return[`status`].concat(e||[]).join(`: `)},[f,n]),_=Ss(Oc,{statusLabel:c},`statusLabel`,h,f!==void 0&&e!==!0);return g.createElement(Tc,Object.assign({ref:d,$isSystem:a,$size:o,$status:f,$surfaceColor:l,$backgroundColor:t,$foregroundColor:i,"aria-atomic":`true`,"aria-hidden":e,"aria-live":`polite`},u),g.Children.only(r),!!f&&g.createElement(bc,{$size:o,$type:f,$surfaceColor:l,as:`figcaption`},e!==!0&&g.createElement(zs,{hidden:!0},_),f===`active`?g.createElement(`span`,{"aria-hidden":!0},n):g.createElement(g.Fragment,null,f===`away`?g.createElement(p,{"data-icon-status":f}):null,f===`transfers`?g.createElement(m,{"data-icon-status":f}):null)))});Oc.displayName=`Avatar`,Oc.propTypes={backgroundColor:W.default.string,foregroundColor:W.default.string,surfaceColor:W.default.string,isSystem:W.default.bool,badge:W.default.oneOfType([W.default.string,W.default.number]),size:W.default.oneOf(Qs),status:W.default.oneOf($s),statusLabel:W.default.string};var kc=Oc;kc.Text=Dc;var K=Et(),q=({children:e,size:t=20,color:n=`currentColor`,...r})=>(0,K.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...r,children:e}),Ac=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{d:`M11.4163 2.87911C10.5632 2.29258 9.43683 2.29258 8.58367 2.87911L3.58367 6.31661C2.90529 6.78299 2.5 7.55347 2.5 8.37671V15C2.5 16.3807 3.61929 17.5 5 17.5H7.08333C7.54357 17.5 7.91667 17.1269 7.91667 16.6666V13.75C7.91667 12.5994 8.84942 11.6666 10 11.6666C11.1506 11.6666 12.0833 12.5994 12.0833 13.75V16.6666C12.0833 17.1269 12.4564 17.5 12.9167 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V8.37671C17.5 7.55347 17.0947 6.78299 16.4163 6.31661L11.4163 2.87911Z`,fill:t})}),jc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M5.00003 2.50001L15 2.5C16.3807 2.5 17.5 3.61929 17.5 5V10H13.2283C12.8481 10 12.5161 10.2574 12.4213 10.6256C12.1437 11.7041 11.1637 12.5 10 12.5C8.83625 12.5 7.85629 11.7041 7.57872 10.6256C7.48394 10.2574 7.15192 10 6.77169 10H2.50003L2.50003 5C2.50003 3.61929 3.61933 2.50001 5.00003 2.50001Z`,fill:t}),(0,K.jsx)(`path`,{d:`M17.5 11.6667V15C17.5 16.3807 16.3807 17.5 15 17.5H5C3.61928 17.5 2.49999 16.3807 2.5 15L2.50003 10L2.50003 11.6667H6.18032C6.8232 13.1379 8.29065 14.1667 10 14.1667C11.7093 14.1667 13.1768 13.1379 13.8197 11.6667H17.5Z`,fill:t})]}),Mc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.83337 1.66669C4.45267 1.66669 3.33337 2.78598 3.33337 4.16669V16.25C3.33337 17.4006 4.26612 18.3334 5.41671 18.3334H15.8334C16.2936 18.3334 16.6667 17.9603 16.6667 17.5C16.6667 17.0398 16.2936 16.6667 15.8334 16.6667H5.41671C5.18659 16.6667 5.00004 16.4801 5.00004 16.25C5.00004 16.0199 5.18659 15.8334 5.41671 15.8334H15.8334C16.2936 15.8334 16.6667 15.4603 16.6667 15V3.33335C16.6667 2.41288 15.9205 1.66669 15 1.66669H5.83337ZM10 5.83335C9.19462 5.83335 8.54171 6.48627 8.54171 7.29169C8.54171 8.0971 9.19462 8.75002 10 8.75002C10.8055 8.75002 11.4584 8.0971 11.4584 7.29169C11.4584 6.48627 10.8055 5.83335 10 5.83335ZM10 9.16669C9.25529 9.16669 8.69146 9.3231 8.27652 9.59377C7.85302 9.87002 7.65388 10.2203 7.56682 10.4753C7.32847 11.1733 7.92705 11.6667 8.42546 11.6667H11.5746C12.073 11.6667 12.6716 11.1733 12.4333 10.4753C12.3462 10.2203 12.147 9.87002 11.7235 9.59377C11.3086 9.3231 10.7448 9.16669 10 9.16669Z`,fill:t})}),Nc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M16.6666 15.8333V5C16.6666 3.61929 15.5474 2.5 14.1666 2.5H5.83329C4.45258 2.5 3.33329 3.61929 3.33329 5V15.8333H2.49996C2.03973 15.8333 1.66663 16.2064 1.66663 16.6667C1.66663 17.1269 2.03973 17.5 2.49996 17.5H17.5C17.9602 17.5 18.3333 17.1269 18.3333 16.6667C18.3333 16.2064 17.9602 15.8333 17.5 15.8333H16.6666ZM7.49996 5.83333C7.03973 5.83333 6.66663 6.20643 6.66663 6.66667C6.66663 7.1269 7.03973 7.5 7.49996 7.5H8.33329C8.79354 7.5 9.16663 7.1269 9.16663 6.66667C9.16663 6.20643 8.79354 5.83333 8.33329 5.83333H7.49996ZM11.6666 5.83333C11.2064 5.83333 10.8333 6.20643 10.8333 6.66667C10.8333 7.1269 11.2064 7.5 11.6666 7.5H12.5C12.9602 7.5 13.3333 7.1269 13.3333 6.66667C13.3333 6.20643 12.9602 5.83333 12.5 5.83333H11.6666ZM7.49996 9.16667C7.03973 9.16667 6.66663 9.53975 6.66663 10C6.66663 10.4602 7.03973 10.8333 7.49996 10.8333H8.33329C8.79354 10.8333 9.16663 10.4602 9.16663 10C9.16663 9.53975 8.79354 9.16667 8.33329 9.16667H7.49996ZM11.6666 9.16667C11.2064 9.16667 10.8333 9.53975 10.8333 10C10.8333 10.4602 11.2064 10.8333 11.6666 10.8333H12.5C12.9602 10.8333 13.3333 10.4602 13.3333 10C13.3333 9.53975 12.9602 9.16667 12.5 9.16667H11.6666ZM7.49996 12.5C7.03973 12.5 6.66663 12.8731 6.66663 13.3333C6.66663 13.7936 7.03973 14.1667 7.49996 14.1667H8.33329C8.79354 14.1667 9.16663 13.7936 9.16663 13.3333C9.16663 12.8731 8.79354 12.5 8.33329 12.5H7.49996ZM11.6666 12.5C11.2064 12.5 10.8333 12.8731 10.8333 13.3333C10.8333 13.7936 11.2064 14.1667 11.6666 14.1667H12.5C12.9602 14.1667 13.3333 13.7936 13.3333 13.3333C13.3333 12.8731 12.9602 12.5 12.5 12.5H11.6666Z`,fill:t})}),Pc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M6.15541 7.40126C5.99781 7.67423 5.99781 8.01053 6.15541 8.2835C6.313 8.55646 6.60426 8.72462 6.91945 8.72462L13.0317 8.72462C13.3469 8.72462 13.6382 8.55646 13.7958 8.2835C13.9533 8.01054 13.9534 7.67424 13.7957 7.40127L10.7397 2.10787C10.5821 1.83492 10.2908 1.66671 9.97558 1.66675C9.66042 1.66669 9.36918 1.83486 9.21154 2.10785L6.15541 7.40126Z`,fill:t}),(0,K.jsx)(`path`,{d:`M14.3868 10.4891C12.4378 10.4891 10.8578 12.069 10.8578 14.018C10.8578 15.967 12.4378 17.547 14.3868 17.547C16.3358 17.547 17.9157 15.967 17.9157 14.018C17.9157 12.069 16.3358 10.4891 14.3868 10.4891Z`,fill:t}),(0,K.jsx)(`path`,{d:`M2.91772 12.4741C2.91772 11.4996 3.7077 10.7097 4.68219 10.7097H7.77002C8.74451 10.7097 9.53449 11.4996 9.53449 12.4741V15.5619C9.53449 16.5364 8.74451 17.3264 7.77002 17.3264H4.68219C3.7077 17.3264 2.91772 16.5364 2.91772 15.5619V12.4741Z`,fill:t})]}),Fc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V9.16667H6.15164C6.78292 9.16667 7.36003 9.52333 7.64235 10.088L8.33333 11.4699L10.9213 6.29399C11.0625 6.01167 11.351 5.83333 11.6667 5.83333C11.9823 5.83333 12.2708 6.01167 12.412 6.29399L13.8483 9.16667H17.5V5C17.5 3.61929 16.3807 2.5 15 2.5H5Z`,fill:t}),(0,K.jsx)(`path`,{d:`M2.5 15.0002C2.5 16.3809 3.61929 17.5002 5 17.5002H15C16.3807 17.5002 17.5 16.3809 17.5 15.0002V10.8335H13.8483C13.2171 10.8335 12.64 10.4769 12.3577 9.91219L11.6667 8.53027L9.07867 13.7062C8.9375 13.9885 8.649 14.1669 8.33333 14.1669C8.01769 14.1669 7.72913 13.9885 7.58797 13.7062L6.15164 10.8335H2.5V15.0002Z`,fill:t})]}),Ic=Fc,Lc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M8.15431 2.65438C8.56571 2.03728 9.25829 1.66663 9.99996 1.66663C10.7416 1.66663 11.4342 2.03728 11.8456 2.65438L12.3091 3.34961C12.4967 3.63099 12.8389 3.76687 13.1684 3.69083L13.7401 3.55888C14.4968 3.38427 15.29 3.61176 15.839 4.16085C16.3881 4.70993 16.6156 5.50315 16.441 6.25979L16.3091 6.83155C16.233 7.16107 16.369 7.50324 16.6503 7.69083L17.3455 8.15431C17.9626 8.56571 18.3333 9.25829 18.3333 9.99996C18.3333 10.7416 17.9626 11.4342 17.3455 11.8456L16.6503 12.3091C16.369 12.4967 16.233 12.8389 16.3091 13.1684L16.441 13.7401C16.6156 14.4968 16.3881 15.29 15.839 15.839C15.29 16.3881 14.4968 16.6156 13.7401 16.441L13.1684 16.3091C12.8389 16.233 12.4967 16.369 12.3091 16.6503L11.8456 17.3455C11.4342 17.9626 10.7416 18.3333 9.99996 18.3333C9.25829 18.3333 8.56571 17.9626 8.15431 17.3455L7.69083 16.6503C7.50324 16.369 7.16107 16.233 6.83155 16.3091L6.25979 16.441C5.50315 16.6156 4.70993 16.3881 4.16085 15.839C3.61176 15.29 3.38427 14.4968 3.55888 13.7401L3.69083 13.1684C3.76687 12.8389 3.63099 12.4967 3.34961 12.3091L2.65438 11.8456C2.03728 11.4342 1.66663 10.7416 1.66663 9.99996C1.66663 9.25829 2.03729 8.56571 2.65438 8.15431L3.34961 7.69083C3.63099 7.50324 3.76687 7.16107 3.69083 6.83155L3.55888 6.25979C3.38427 5.50315 3.61176 4.70993 4.16085 4.16085C4.70993 3.61176 5.50315 3.38427 6.25979 3.55888L6.83155 3.69083C7.16107 3.76687 7.50324 3.63099 7.69083 3.34961L8.15431 2.65438ZM7.08329 9.99996C7.08329 8.38913 8.38913 7.08329 9.99996 7.08329C11.6108 7.08329 12.9166 8.38913 12.9166 9.99996C12.9166 11.6108 11.6108 12.9166 9.99996 12.9166C8.38913 12.9166 7.08329 11.6108 7.08329 9.99996Z`,fill:t})}),Rc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{d:`M10.042 1.25C13.1599 1.25 16.5705 3.15864 16.8887 7.74414C17.8535 7.92625 18.584 8.77424 18.584 9.79199V12.083C18.584 13.0385 17.9405 13.8442 17.0635 14.0898C16.723 16.1403 15.021 17.7296 12.918 17.9004C12.6069 18.414 12.0447 18.7588 11.4004 18.7588C10.4201 18.7586 9.62502 17.9638 9.625 16.9834C9.625 16.003 10.4201 15.2082 11.4004 15.208C12.1044 15.208 12.711 15.6188 12.998 16.2129C14.1147 16.0374 15.0214 15.2301 15.3379 14.167H15.25C14.7899 14.1668 14.417 13.7931 14.417 13.333V8.54199C14.417 8.09663 14.7665 7.733 15.2061 7.70996C14.8758 4.14899 12.3202 2.91699 10.042 2.91699C7.7638 2.91699 5.20819 4.14899 4.87793 7.70996C5.31756 7.73299 5.66699 8.09663 5.66699 8.54199V13.333C5.66699 13.7931 5.29407 14.1668 4.83398 14.167H3.58398C2.43339 14.167 1.5 13.2336 1.5 12.083V9.79199C1.5 8.77424 2.23051 7.92625 3.19531 7.74414C3.51351 3.15864 6.92412 1.25 10.042 1.25Z`,fill:t})}),zc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M1.66663 7.5C1.66663 4.73857 3.9052 2.5 6.66663 2.5H13.3333C16.0947 2.5 18.3333 4.73857 18.3333 7.5V12.5C18.3333 15.2614 16.0947 17.5 13.3333 17.5H2.49996C2.03973 17.5 1.66663 17.1269 1.66663 16.6667V7.5ZM6.66663 11.0417C6.09133 11.0417 5.62496 10.5753 5.62496 10C5.62496 9.42467 6.09133 8.95833 6.66663 8.95833C7.24193 8.95833 7.70829 9.42467 7.70829 10C7.70829 10.5753 7.24193 11.0417 6.66663 11.0417ZM9.99996 11.0417C9.42463 11.0417 8.95829 10.5753 8.95829 10C8.95829 9.42467 9.42463 8.95833 9.99996 8.95833C10.5753 8.95833 11.0416 9.42467 11.0416 10C11.0416 10.5753 10.5753 11.0417 9.99996 11.0417ZM12.2916 10C12.2916 10.5753 12.758 11.0417 13.3333 11.0417C13.9086 11.0417 14.375 10.5753 14.375 10C14.375 9.42467 13.9086 8.95833 13.3333 8.95833C12.758 8.95833 12.2916 9.42467 12.2916 10Z`,fill:t})}),Bc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{d:`M5.00049 2.5C3.65146 2.5 2.42543 3.61963 2.6096 5.0996C3.4076 11.5121 8.48838 16.5929 14.9009 17.3909C16.3809 17.5751 17.5005 16.349 17.5005 15V13.9068C17.5005 12.8027 16.7763 11.8294 15.7189 11.5122L14.4434 11.1295C13.6138 10.8807 12.7146 11.1073 12.1022 11.7198C11.8801 11.9419 11.5945 11.9558 11.4134 11.8438C10.0917 11.026 8.97446 9.90875 8.15671 8.58717C8.04462 8.406 8.0586 8.12039 8.28074 7.89826C8.89313 7.28586 9.11988 6.38666 8.87096 5.55713L8.48829 4.28163C8.17109 3.22418 7.19779 2.5 6.09377 2.5H5.00049Z`,fill:t})}),Vc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 1.66669C6.75502 1.66669 4.08007 4.21124 3.91802 7.45217L3.76851 10.4424C3.76275 10.5576 3.73314 10.6704 3.68157 10.7735L2.65915 12.8184C2.55449 13.0277 2.5 13.2584 2.5 13.4925C2.5 14.3251 3.17493 15 4.00752 15H5.91668C6.30274 16.9019 7.9842 18.3334 10 18.3334C12.0158 18.3334 13.6972 16.9019 14.0833 15H15.9925C16.8251 15 17.5 14.3251 17.5 13.4925C17.5 13.2584 17.4455 13.0277 17.3408 12.8184L16.3184 10.7735C16.2668 10.6704 16.2373 10.5576 16.2315 10.4424L16.082 7.45217C15.9199 4.21124 13.245 1.66669 10 1.66669ZM10 16.6667C8.9115 16.6667 7.98545 15.971 7.64226 15H12.3577C12.0146 15.971 11.0885 16.6667 10 16.6667Z`,fill:t})}),Hc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{d:`M9.16602 2.5C12.8477 2.5 15.8327 5.48442 15.833 9.16602C15.833 10.7064 15.309 12.1241 14.4316 13.2529L17.2559 16.0771C17.5812 16.4026 17.5812 16.9305 17.2559 17.2559C16.9305 17.5813 16.4026 17.5812 16.0771 17.2559L13.2529 14.4316C12.1241 15.309 10.7065 15.833 9.16602 15.833C5.48441 15.8327 2.5 12.8477 2.5 9.16602C2.50036 5.48463 5.48463 2.50034 9.16602 2.5ZM9.16602 4.16602C6.4051 4.16636 4.16637 6.40511 4.16602 9.16602C4.16602 11.9272 6.40488 14.1657 9.16602 14.166C11.9274 14.166 14.166 11.9274 14.166 9.16602C14.1657 6.4049 11.9272 4.16602 9.16602 4.16602Z`,fill:t})}),Uc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M3.54748 4.72616C2.37192 6.16272 1.66663 7.99904 1.66663 10.0001C1.66663 12.0012 2.37194 13.8375 3.54754 15.2741L6.82503 11.9966C6.46073 11.4185 6.24996 10.7339 6.24996 10.0001C6.24996 9.26633 6.46071 8.58175 6.82498 8.00366L3.54748 4.72616Z`,fill:t}),(0,K.jsx)(`path`,{d:`M4.72599 3.54765L8.00348 6.82514C8.58163 6.46085 9.26613 6.25008 9.99996 6.25008C10.7338 6.25008 11.4184 6.46085 11.9965 6.82515L15.274 3.54766C13.8374 2.37206 12.001 1.66675 9.99996 1.66675C7.99888 1.66675 6.16255 2.37206 4.72599 3.54765Z`,fill:t}),(0,K.jsx)(`path`,{d:`M16.4525 4.72618L13.175 8.00368C13.5392 8.58175 13.75 9.26633 13.75 10.0001C13.75 10.7339 13.5392 11.4184 13.1749 11.9966L16.4524 15.2741C17.628 13.8375 18.3333 12.0012 18.3333 10.0001C18.3333 7.99904 17.628 6.16273 16.4525 4.72618Z`,fill:t}),(0,K.jsx)(`path`,{d:`M15.2739 16.4526L11.9964 13.1751C11.4183 13.5393 10.7337 13.7501 9.99996 13.7501C9.26621 13.7501 8.58163 13.5393 8.00356 13.1751L4.72606 16.4526C6.16261 17.6282 7.99892 18.3334 9.99996 18.3334C12.001 18.3334 13.8373 17.6281 15.2739 16.4526Z`,fill:t})]}),Wc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M15.835 2.5C17.2157 2.5 18.335 3.61929 18.335 5V10C18.335 11.3807 17.2157 12.5 15.835 12.5H15.0017V13.3333C15.0017 14.7141 13.8824 15.8333 12.5017 15.8333H8.96763L5.40638 17.8118C5.14827 17.9552 4.83354 17.9513 4.57907 17.8016C4.32458 17.6518 4.16833 17.3786 4.16833 17.0833V15.8333C2.78763 15.8333 1.66833 14.7141 1.66833 13.3333V8.33333C1.66833 6.95262 2.78763 5.83333 4.16833 5.83333H5.00167V5C5.00167 3.61929 6.12096 2.5 7.50167 2.5H15.835ZM6.66833 5.83333H12.5017C13.8824 5.83333 15.0017 6.95262 15.0017 8.33333V10.8333H15.835C16.2952 10.8333 16.6684 10.4602 16.6684 10V5C16.6684 4.53977 16.2952 4.16667 15.835 4.16667H7.50167C7.04144 4.16667 6.66833 4.53977 6.66833 5V5.83333Z`,fill:t})}),Gc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M11.4645 2.49975H5.75951C5.32024 2.49974 4.94124 2.49972 4.62911 2.52522C4.29965 2.55215 3.97197 2.61157 3.65665 2.77224C3.18625 3.01192 2.80379 3.39437 2.56411 3.86477C2.40345 4.18009 2.34402 4.50777 2.3171 4.83723C2.2916 5.14936 2.29161 5.52831 2.29163 5.96756V14.0319C2.29161 14.4711 2.2916 14.8501 2.3171 15.1623C2.34402 15.4917 2.40345 15.8194 2.56411 16.1347C2.80379 16.6051 3.18625 16.9875 3.65665 17.2273C3.97197 17.388 4.29965 17.4474 4.62911 17.4743C4.94124 17.4998 5.32021 17.4998 5.75949 17.4997H13.8238C14.263 17.4998 14.642 17.4998 14.9541 17.4743C15.2836 17.4474 15.6113 17.388 15.9266 17.2273C16.397 16.9875 16.7795 16.6051 17.0191 16.1347C17.1798 15.8194 17.2392 15.4917 17.2661 15.1623C17.2916 14.8501 17.2916 14.4711 17.2916 14.0319V8.74363L15.101 10.9342C14.6322 11.403 13.9964 11.6664 13.3333 11.6664H10.8333C9.45254 11.6664 8.33329 10.5471 8.33329 9.16638V6.66641C8.33329 6.00337 8.59671 5.36749 9.06554 4.89865L11.4645 2.49975Z`,fill:t}),(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M16.4225 3.43418C16.0971 3.10875 15.5695 3.10875 15.244 3.43418L11.6666 7.0116V8.33308H12.9881L16.5655 4.75567C16.891 4.43023 16.891 3.9026 16.5655 3.57716L16.4225 3.43418ZM14.0655 2.25567C15.0419 1.27936 16.6247 1.27936 17.601 2.25567L17.744 2.39865C18.7204 3.37495 18.7204 4.95787 17.744 5.93418L13.9225 9.75563C13.7663 9.91196 13.5543 9.99971 13.3333 9.99971H10.8333C10.373 9.99971 9.99996 9.62663 9.99996 9.16638V6.66641C9.99996 6.44541 10.0878 6.23344 10.244 6.07716L14.0655 2.25567Z`,fill:t})]}),J=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{d:`M18.333 7.91675C18.333 11.3685 15.5349 14.1667 12.083 14.1667C11.222 14.1667 10.4018 13.9927 9.65537 13.6777L5.4312 17.9019C4.61761 18.7155 3.29851 18.7155 2.48492 17.9019L2.09786 17.5149C1.28427 16.7013 1.28427 15.3822 2.09786 14.5686L6.32206 10.3444C6.00715 9.59808 5.83306 8.77775 5.83306 7.91675C5.83306 4.46497 8.63129 1.66675 12.083 1.66675C12.7714 1.66675 13.4338 1.77803 14.0531 1.98358C14.581 2.15879 14.6789 2.82091 14.2855 3.21425L11.6664 5.83342C10.976 6.52377 10.976 7.64306 11.6664 8.33342C12.3567 9.02375 13.476 9.02375 14.1664 8.33342L16.7855 5.71425C17.1789 5.32091 17.841 5.41873 18.0162 5.94666C18.2218 6.56603 18.333 7.2284 18.333 7.91675Z`,fill:t})}),Kc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M16.6667 4.58329C16.6667 3.95522 16.308 3.46951 15.9126 3.13565C15.5134 2.79853 14.985 2.53248 14.4051 2.32537C13.238 1.90856 11.6805 1.66663 10 1.66663C8.31955 1.66663 6.76204 1.90856 5.59497 2.32537C5.01507 2.53248 4.48675 2.79853 4.08749 3.13565C3.69211 3.46951 3.33337 3.95522 3.33337 4.58329V8.33329C3.33337 8.96138 3.69211 9.44704 4.08749 9.78096C4.48675 10.118 5.01507 10.3841 5.59497 10.5912C6.76204 11.008 8.31955 11.25 10 11.25C11.6805 11.25 13.238 11.008 14.4051 10.5912C14.985 10.3841 15.5134 10.118 15.9126 9.78096C16.308 9.44704 16.6667 8.96138 16.6667 8.33329V4.58329ZM5.16275 4.40908C5.05872 4.49691 5.01938 4.55563 5.00532 4.58329C5.01938 4.61095 5.05872 4.66968 5.16275 4.75751C5.35386 4.91888 5.67982 5.10175 6.15553 5.27165C7.09971 5.60885 8.45887 5.83329 10 5.83329C11.5412 5.83329 12.9004 5.60885 13.8445 5.27165C14.3203 5.10175 14.6462 4.91888 14.8374 4.75751C14.9414 4.66968 14.9807 4.61095 14.9948 4.58329C14.9807 4.55563 14.9414 4.49691 14.8374 4.40908C14.6462 4.24771 14.3203 4.06483 13.8445 3.89493C12.9004 3.55773 11.5412 3.33329 10 3.33329C8.45887 3.33329 7.09971 3.55773 6.15553 3.89493C5.67982 4.06483 5.35386 4.24771 5.16275 4.40908Z`,fill:t}),(0,K.jsx)(`path`,{d:`M14.9657 12.1608C15.533 11.9581 16.1323 11.6834 16.6667 11.3031V15.4166C16.6667 16.0447 16.308 16.5304 15.9126 16.8643C15.5134 17.2014 14.985 17.4675 14.4051 17.6745C13.238 18.0914 11.6805 18.3333 10 18.3333C8.31955 18.3333 6.76204 18.0914 5.59497 17.6745C5.01507 17.4675 4.48675 17.2014 4.08749 16.8643C3.69211 16.5304 3.33337 16.0447 3.33337 15.4166V11.3031C3.86779 11.6834 4.46704 11.9581 5.03441 12.1608C6.42439 12.6572 8.18024 12.9166 10 12.9166C11.8199 12.9166 13.5757 12.6572 14.9657 12.1608Z`,fill:t})]}),qc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M2.50208 4.99963C2.50208 3.62007 3.62043 2.50171 4.99999 2.50171H6.66666C8.04623 2.50171 9.16458 3.62007 9.16458 4.99963V6.66629C9.16458 8.04586 8.04623 9.16425 6.66666 9.16425H4.99999C3.62043 9.16425 2.50208 8.04586 2.50208 6.66629V4.99963Z`,fill:t}),(0,K.jsx)(`path`,{d:`M2.50208 13.333C2.50208 11.9534 3.62043 10.8351 4.99999 10.8351H6.66666C8.04623 10.8351 9.16458 11.9534 9.16458 13.333V14.9997C9.16458 16.3792 8.04623 17.4976 6.66666 17.4976H4.99999C3.62043 17.4976 2.50208 16.3792 2.50208 14.9997V13.333Z`,fill:t}),(0,K.jsx)(`path`,{d:`M10.8354 4.99963C10.8354 3.62007 11.9537 2.50171 13.3333 2.50171H15C16.3796 2.50171 17.4979 3.62007 17.4979 4.99963V6.66629C17.4979 8.04586 16.3796 9.16425 15 9.16425H13.3333C11.9537 9.16425 10.8354 8.04586 10.8354 6.66629V4.99963Z`,fill:t}),(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M14.1667 10.8351C12.3268 10.8351 10.8354 12.3265 10.8354 14.1663C10.8354 16.0061 12.3268 17.4976 14.1667 17.4976C16.0065 17.4976 17.4979 16.0061 17.4979 14.1663C17.4979 12.3265 16.0065 10.8351 14.1667 10.8351ZM12.4979 14.1663C12.4979 13.2447 13.2451 12.4976 14.1667 12.4976C15.0883 12.4976 15.8354 13.2447 15.8354 14.1663C15.8354 15.0879 15.0883 15.8351 14.1667 15.8351C13.2451 15.8351 12.4979 15.0879 12.4979 14.1663Z`,fill:t})]}),Jc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{d:`M8.33337 2.50008C8.33337 2.03985 7.96027 1.66675 7.50004 1.66675C7.03981 1.66675 6.66671 2.03985 6.66671 2.50008V5.00008H5.83337C4.45267 5.00008 3.33337 6.11937 3.33337 7.50008V11.6667C3.33337 13.9679 5.19886 15.8334 7.50004 15.8334H9.16671V17.5001C9.16671 17.9603 9.53979 18.3334 10 18.3334C10.4603 18.3334 10.8334 17.9603 10.8334 17.5001V15.8334H12.5C14.8012 15.8334 16.6667 13.9679 16.6667 11.6667V7.50008C16.6667 6.11937 15.5475 5.00008 14.1667 5.00008H13.3334V2.50008C13.3334 2.03985 12.9603 1.66675 12.5 1.66675C12.0398 1.66675 11.6667 2.03985 11.6667 2.50008V5.00008H8.33337V2.50008Z`,fill:t})}),Yc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M5.96788 2.5H9.16667V7.5H2.5V5.96788C2.49998 5.5286 2.49998 5.14962 2.52548 4.83748C2.55239 4.50803 2.61183 4.18034 2.77248 3.86503C3.01217 3.39462 3.39462 3.01217 3.86503 2.77248C4.18034 2.61183 4.50803 2.55239 4.83748 2.52548C5.14962 2.49998 5.52861 2.49998 5.96788 2.5Z`,fill:t}),(0,K.jsx)(`path`,{d:`M2.5 9.16667V14.0321C2.49998 14.4714 2.49998 14.8504 2.52548 15.1625C2.55239 15.492 2.61183 15.8197 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86503 17.2275C4.18034 17.3882 4.50803 17.4476 4.83748 17.4745C5.14962 17.5 5.52858 17.5 5.96787 17.5H9.16667V9.16667H2.5Z`,fill:t}),(0,K.jsx)(`path`,{d:`M10.8333 17.5H14.0322C14.4714 17.5 14.8504 17.5 15.1625 17.4745C15.492 17.4476 15.8197 17.3882 16.135 17.2275C16.6054 16.9878 16.9878 16.6054 17.2275 16.135C17.3882 15.8197 17.4476 15.492 17.4745 15.1625C17.5 14.8504 17.5 14.4714 17.5 14.0322V12.5H10.8333V17.5Z`,fill:t}),(0,K.jsx)(`path`,{d:`M17.5 10.8333V5.96787C17.5 5.52858 17.5 5.14962 17.4745 4.83748C17.4476 4.50803 17.3882 4.18034 17.2275 3.86503C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.8197 2.61183 15.492 2.55239 15.1625 2.52548C14.8504 2.49998 14.4714 2.49998 14.0322 2.5H10.8333V10.8333H17.5Z`,fill:t})]}),Xc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M4.66524 6.80408C5.57167 4.76038 7.61827 3.33337 10 3.33337C12.9643 3.33337 15.412 5.54432 15.7844 8.40704C17.7106 8.77396 19.1667 10.467 19.1667 12.5C19.1667 14.8012 17.3012 16.6667 15 16.6667H5.83337C3.07195 16.6667 0.833374 14.4281 0.833374 11.6667C0.833374 9.30721 2.46705 7.33047 4.66524 6.80408ZM9.16671 7.50004C9.16671 7.03981 9.53979 6.66671 10 6.66671C10.4603 6.66671 10.8334 7.03981 10.8334 7.50004V10.9049L11.4941 10.2441C11.8195 9.91871 12.3472 9.91871 12.6726 10.2441C12.998 10.5695 12.998 11.0972 12.6726 11.4226L10.5893 13.506C10.2639 13.8314 9.73621 13.8314 9.41079 13.506L7.32745 11.4226C7.00202 11.0972 7.00202 10.5695 7.32745 10.2441C7.65289 9.91871 8.18052 9.91871 8.50596 10.2441L9.16671 10.9049V7.50004Z`,fill:t})}),Zc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.96788 2.5H14.0321C14.4714 2.49998 14.8504 2.49998 15.1625 2.52548C15.492 2.55239 15.8197 2.61183 16.135 2.77248C16.6054 3.01217 16.9878 3.39463 17.2275 3.86503C17.3882 4.18034 17.4476 4.50803 17.4745 4.83748C17.5 5.14962 17.5 5.52858 17.5 5.96787V14.0322C17.5 14.4714 17.5 14.8504 17.4745 15.1625C17.4476 15.492 17.3882 15.8197 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.8197 17.3882 15.492 17.4476 15.1625 17.4745C14.8504 17.5 14.4714 17.5 14.0322 17.5H5.96787C5.52858 17.5 5.14962 17.5 4.83748 17.4745C4.50803 17.4476 4.18034 17.3882 3.86503 17.2275C3.39463 16.9878 3.01217 16.6054 2.77248 16.135C2.61183 15.8197 2.55239 15.492 2.52548 15.1625C2.49998 14.8504 2.49998 14.4714 2.5 14.0322V5.96785C2.49998 5.52859 2.49998 5.14961 2.52548 4.83748C2.55239 4.50803 2.61183 4.18034 2.77248 3.86503C3.01217 3.39463 3.39463 3.01217 3.86503 2.77248C4.18034 2.61183 4.50803 2.55239 4.83748 2.52548C5.14961 2.49998 5.52862 2.49998 5.96788 2.5ZM13.5033 8.71425C13.8287 8.38883 13.8287 7.86119 13.5033 7.53575C13.1778 7.21032 12.6502 7.21032 12.3248 7.53575L9.164 10.6965L8.08656 9.61908C7.76112 9.29367 7.23348 9.29367 6.90805 9.61908C6.58261 9.9445 6.58261 10.4722 6.90805 10.7976L8.57475 12.4643C8.90017 12.7897 9.42775 12.7897 9.75325 12.4643L13.5033 8.71425Z`,fill:t})}),Qc=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M10.3448 2.57469C10.1257 2.4751 9.87425 2.4751 9.65517 2.57469L0.488497 6.74136C0.191002 6.87659 0 7.17322 0 7.5C0 7.82679 0.191002 8.12342 0.488497 8.25864L9.65517 12.4253C9.87425 12.5249 10.1257 12.5249 10.3448 12.4253L18.3333 8.79417V13.3333C18.3333 13.7936 18.7064 14.1667 19.1667 14.1667C19.6269 14.1667 20 13.7936 20 13.3333V7.5C20 7.17322 19.809 6.87659 19.5115 6.74136L10.3448 2.57469Z`,fill:t}),(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M3.75 10.6675V12.9343C3.75 13.8483 4.24882 14.6894 5.05084 15.1278L8.80083 17.1778C9.54808 17.5863 10.4518 17.5863 11.1991 17.1778L14.9492 15.1278C15.7512 14.6894 16.25 13.8483 16.25 12.9343V10.6675L10.5673 13.5613C10.2108 13.7428 9.78917 13.7428 9.43275 13.5613L3.75 10.6675Z`,fill:t})]}),$c=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M8.63396 6.77702C8.26669 6.70461 7.88747 6.66671 7.49996 6.66671C4.2783 6.66671 1.66663 9.27837 1.66663 12.5C1.66663 15.7217 4.2783 18.3334 7.49996 18.3334H13.75C16.2813 18.3334 18.3333 16.2814 18.3333 13.75C18.3333 12.1767 17.5407 10.7899 16.3349 9.96487C16.5484 9.46346 16.6666 8.91171 16.6666 8.33337C16.6666 6.03219 14.8011 4.16671 12.5 4.16671C10.7486 4.16671 9.25054 5.24667 8.63396 6.77702ZM10.2082 7.33233C11.0463 7.77232 11.7634 8.40971 12.2984 9.18221C12.356 9.26538 12.5053 9.33512 12.6575 9.29796C13.0084 9.21204 13.3745 9.16671 13.75 9.16671C14.1145 9.16671 14.4696 9.20937 14.8105 9.29021C14.9326 8.99587 15 8.67296 15 8.33337C15 6.95267 13.8807 5.83337 12.5 5.83337C11.4756 5.83337 10.5942 6.45002 10.2082 7.33233Z`,fill:t}),(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M12.5 0.833374C12.9602 0.833374 13.3333 1.20647 13.3333 1.66671V2.08337C13.3333 2.54361 12.9602 2.91671 12.5 2.91671C12.0397 2.91671 11.6666 2.54361 11.6666 2.08337V1.66671C11.6666 1.20647 12.0397 0.833374 12.5 0.833374ZM7.49013 2.908C7.81557 2.58256 8.34321 2.58256 8.66863 2.908L8.96329 3.20262C9.28871 3.52807 9.28871 4.0557 8.96329 4.38114C8.63779 4.70657 8.11019 4.70657 7.78476 4.38114L7.49013 4.08651C7.16469 3.76107 7.16469 3.23343 7.49013 2.908ZM17.5065 2.908C17.832 3.23343 17.832 3.76107 17.5065 4.08651L17.2119 4.38114C16.8865 4.70657 16.3588 4.70657 16.0334 4.38113C15.708 4.0557 15.708 3.52807 16.0334 3.20262L16.328 2.908C16.6535 2.58256 17.1811 2.58256 17.5065 2.908ZM17.9166 7.91671C17.9166 7.45647 18.2897 7.08337 18.75 7.08337H19.1666C19.6269 7.08337 20 7.45647 20 7.91671C20 8.37696 19.6269 8.75004 19.1666 8.75004H18.75C18.2897 8.75004 17.9166 8.37696 17.9166 7.91671Z`,fill:t})]}),el=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M6.66667 1.66669C7.1269 1.66669 7.5 2.03979 7.5 2.50002V3.33335H12.5V2.50002C12.5 2.03979 12.8731 1.66669 13.3333 1.66669C13.7936 1.66669 14.1667 2.03979 14.1667 2.50002V3.33335H15C16.3807 3.33335 17.5 4.45265 17.5 5.83335V7.50002H2.5V5.83335C2.5 4.45265 3.61929 3.33335 5 3.33335H5.83333V2.50002C5.83333 2.03979 6.20643 1.66669 6.66667 1.66669Z`,fill:t}),(0,K.jsx)(`path`,{d:`M2.5 15V9.16669H17.5V15C17.5 16.3808 16.3807 17.5 15 17.5H5C3.61929 17.5 2.5 16.3808 2.5 15Z`,fill:t})]}),tl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10 2C14.4184 2 18 5.58158 18 10C18 14.4185 14.4185 18 10 18C5.58155 18 2 14.4184 2 10C2.00004 5.58158 5.58158 2 10 2ZM11.1826 10.5996C10.7724 10.5997 10.4286 10.9104 10.3867 11.3184L10.2412 12.748C10.2155 13.0006 10.3111 13.2511 10.499 13.4219L11.708 14.5195C11.9013 14.6954 11.9963 14.9547 11.9629 15.2139L11.8633 15.9824C11.857 16.0309 11.8546 16.079 11.8564 16.125C12.9968 15.7798 14.0019 15.1254 14.7754 14.2588L14.4102 12.3955C14.3727 12.2051 14.2669 12.0345 14.1133 11.916L12.6221 10.7666C12.4823 10.6588 12.3103 10.5998 12.1338 10.5996H11.1826ZM10 3.59961C7.64387 3.59978 5.58546 4.87352 4.47461 6.76953L4.53809 8.50586C4.54675 8.74249 4.66067 8.96314 4.84766 9.1084L6.89062 10.6953C7.39238 11.0847 8.12629 10.7619 8.17871 10.1289L8.30078 8.6543C8.33513 8.23947 8.68239 7.91992 9.09863 7.91992H9.79102C10.123 7.91992 10.4219 7.71451 10.54 7.4043L10.8574 6.56934C10.9192 6.40745 11.0321 6.26912 11.1787 6.17676L12.4541 5.37402C12.9023 5.09139 12.9312 4.50641 12.624 4.16211C11.8233 3.80168 10.9351 3.59965 10 3.59961Z`,fill:t})}),nl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M2.74408 6.91058C3.06952 6.58515 3.59715 6.58515 3.92259 6.91058L9.41075 12.3988C9.73617 12.7242 10.2638 12.7242 10.5893 12.3988L16.0774 6.91058C16.4028 6.58515 16.9305 6.58515 17.2559 6.91058C17.5813 7.23602 17.5813 7.76365 17.2559 8.0891L11.7677 13.5773C10.7915 14.5536 9.20858 14.5536 8.23225 13.5773L2.74408 8.0891C2.41864 7.76365 2.41864 7.23602 2.74408 6.91058Z`,fill:t})}),rl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M7.5 4.16667V15.8333H15C15.4602 15.8333 15.8333 15.4602 15.8333 15V5C15.8333 4.53977 15.4602 4.16667 15 4.16667H7.5ZM2.5 5C2.5 3.61929 3.61929 2.5 5 2.5H15C16.3807 2.5 17.5 3.61929 17.5 5V15C17.5 16.3807 16.3807 17.5 15 17.5H5C3.61929 17.5 2.5 16.3807 2.5 15V5Z`,fill:t})}),il=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{d:`M9.16638 16.6663V10.8333H3.33337C2.87325 10.8333 2.50054 10.4603 2.50037 10.0002C2.50037 9.54001 2.87314 9.16626 3.33337 9.16626H9.16638V3.33325C9.16638 2.87301 9.54013 2.50024 10.0004 2.50024C10.4605 2.50042 10.8334 2.87312 10.8334 3.33325V9.16626H16.6664C17.1266 9.16626 17.5004 9.54001 17.5004 10.0002C17.5002 10.4603 17.1265 10.8333 16.6664 10.8333H10.8334V16.6663C10.8334 17.1264 10.4605 17.5001 10.0004 17.5002C9.54013 17.5002 9.16638 17.1265 9.16638 16.6663Z`,fill:t})}),al=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M9.44231 6.90365V16.1985H1.75L9.44231 6.90365ZM9.44231 3.57031C9.44231 5.6857 7.71154 7.41647 5.59615 7.41647C3.48077 7.41647 1.75 5.6857 1.75 3.57031H9.44231ZM10.7244 16.1985C10.7244 14.0831 12.4551 12.3524 14.5705 12.3524C16.6859 12.3524 18.4167 14.0831 18.4167 16.1985H10.7244ZM10.7244 12.8652V3.57031H18.4167L10.7244 12.8652Z`,fill:t})}),ol=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.83337 1.66669C4.45267 1.66669 3.33337 2.78598 3.33337 4.16669V15.8334C3.33337 17.2141 4.45267 18.3334 5.83337 18.3334H14.1667C15.5475 18.3334 16.6667 17.2141 16.6667 15.8334V4.16669C16.6667 2.78598 15.5475 1.66669 14.1667 1.66669H5.83337ZM5.00004 15.8334C5.00004 16.2936 5.37314 16.6667 5.83337 16.6667H14.1667C14.627 16.6667 15 16.2936 15 15.8334V14.8578C14.7394 14.9499 14.4589 15 14.1667 15H5.83337C5.37314 15 5.00004 15.3731 5.00004 15.8334ZM7.50004 5.00002C7.03981 5.00002 6.66671 5.37312 6.66671 5.83335C6.66671 6.29359 7.03981 6.66669 7.50004 6.66669H12.5C12.9603 6.66669 13.3334 6.29359 13.3334 5.83335C13.3334 5.37312 12.9603 5.00002 12.5 5.00002H7.50004ZM6.66671 9.16669C6.66671 8.70644 7.03981 8.33335 7.50004 8.33335H10C10.4603 8.33335 10.8334 8.70644 10.8334 9.16669C10.8334 9.62694 10.4603 10 10 10H7.50004C7.03981 10 6.66671 9.62694 6.66671 9.16669Z`,fill:t})}),sl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10.8333 2.50002C10.8333 2.03979 10.4602 1.66669 10 1.66669C9.53975 1.66669 9.16667 2.03979 9.16667 2.50002V3.33335H4.58333C3.20262 3.33335 2.08333 4.45265 2.08333 5.83335V6.88965C1.58517 7.17783 1.25 7.71645 1.25 8.33335C1.25 8.95027 1.58517 9.48885 2.08333 9.77702V13.3334C2.08333 15.1743 3.57572 16.6667 5.41667 16.6667H14.5833C16.4242 16.6667 17.9167 15.1743 17.9167 13.3334V9.77702C18.4148 9.48885 18.75 8.95027 18.75 8.33335C18.75 7.71645 18.4148 7.17783 17.9167 6.88965V5.83335C17.9167 4.45265 16.7974 3.33335 15.4167 3.33335H10.8333V2.50002ZM7.08333 7.08335C6.39297 7.08335 5.83333 7.643 5.83333 8.33335C5.83333 9.02369 6.39297 9.58335 7.08333 9.58335C7.77369 9.58335 8.33333 9.02369 8.33333 8.33335C8.33333 7.643 7.77369 7.08335 7.08333 7.08335ZM12.9167 7.08335C12.2263 7.08335 11.6667 7.643 11.6667 8.33335C11.6667 9.02369 12.2263 9.58335 12.9167 9.58335C13.607 9.58335 14.1667 9.02369 14.1667 8.33335C14.1667 7.643 13.607 7.08335 12.9167 7.08335ZM8.33333 11.6667C7.8731 11.6667 7.5 12.0398 7.5 12.5C7.5 12.9603 7.8731 13.3334 8.33333 13.3334H11.6667C12.1269 13.3334 12.5 12.9603 12.5 12.5C12.5 12.0398 12.1269 11.6667 11.6667 11.6667H8.33333Z`,fill:t})}),cl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M9.30825 2.5C8.61792 2.5 8.05827 3.05964 8.05827 3.75V16.2508C8.05827 16.9412 8.61792 17.5008 9.30825 17.5008H10.6999C11.3903 17.5008 11.9499 16.9412 11.9499 16.2508V3.75C11.9499 3.05964 11.3903 2.5 10.6999 2.5H9.30825Z`,fill:t}),(0,K.jsx)(`path`,{d:`M3.75 10.8342C3.05964 10.8342 2.5 11.3938 2.5 12.0842V16.2508C2.5 16.9412 3.05964 17.5008 3.75 17.5008H5.14167C5.83203 17.5008 6.39167 16.9412 6.39167 16.2508V12.0842C6.39167 11.3938 5.83203 10.8342 5.14167 10.8342H3.75Z`,fill:t}),(0,K.jsx)(`path`,{d:`M13.6165 7.91667C13.6165 7.22631 14.1762 6.66667 14.8665 6.66667H16.2582C16.9486 6.66667 17.5082 7.22631 17.5082 7.91667V16.2508C17.5082 16.9412 16.9486 17.5008 16.2582 17.5008H14.8665C14.1762 17.5008 13.6165 16.9412 13.6165 16.2508V7.91667Z`,fill:t})]}),ll=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V15C2.5 16.3807 3.61929 17.5 5 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V5C17.5 3.61929 16.3807 2.5 15 2.5H5ZM4.16667 5C4.16667 4.53977 4.53977 4.16667 5 4.16667H15C15.4602 4.16667 15.8333 4.53977 15.8333 5V5.83333H4.16667V5ZM7.70833 10C7.70833 10.5753 7.24197 11.0417 6.66667 11.0417C6.09137 11.0417 5.625 10.5753 5.625 10C5.625 9.42467 6.09137 8.95833 6.66667 8.95833C7.24197 8.95833 7.70833 9.42467 7.70833 10ZM7.70833 13.3333C7.70833 13.9087 7.24197 14.375 6.66667 14.375C6.09137 14.375 5.625 13.9087 5.625 13.3333C5.625 12.758 6.09137 12.2917 6.66667 12.2917C7.24197 12.2917 7.70833 12.758 7.70833 13.3333ZM10 11.0417C10.5753 11.0417 11.0417 10.5753 11.0417 10C11.0417 9.42467 10.5753 8.95833 10 8.95833C9.42467 8.95833 8.95833 9.42467 8.95833 10C8.95833 10.5753 9.42467 11.0417 10 11.0417ZM11.0417 13.3333C11.0417 13.9087 10.5753 14.375 10 14.375C9.42467 14.375 8.95833 13.9087 8.95833 13.3333C8.95833 12.758 9.42467 12.2917 10 12.2917C10.5753 12.2917 11.0417 12.758 11.0417 13.3333ZM13.3333 11.0417C13.9087 11.0417 14.375 10.5753 14.375 10C14.375 9.42467 13.9087 8.95833 13.3333 8.95833C12.758 8.95833 12.2917 9.42467 12.2917 10C12.2917 10.5753 12.758 11.0417 13.3333 11.0417Z`,fill:t})}),ul=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.97559 3.33335C6.31878 2.36236 7.24482 1.66669 8.33333 1.66669H11.6667C12.7552 1.66669 13.6812 2.36236 14.0244 3.33335H15C16.3807 3.33335 17.5 4.45265 17.5 5.83335V15.8334C17.5 17.2141 16.3807 18.3334 15 18.3334H5C3.61929 18.3334 2.5 17.2141 2.5 15.8334V5.83335C2.5 4.45265 3.61929 3.33335 5 3.33335H5.97559ZM7.5 4.16669V5.00002H12.5V4.16669C12.5 3.70645 12.1269 3.33335 11.6667 3.33335H8.33333C7.8731 3.33335 7.5 3.70645 7.5 4.16669ZM13.1004 9.42202C13.4196 9.75359 13.4095 10.2811 13.0779 10.6003L9.74461 13.809C9.41458 14.1267 8.89001 14.1184 8.57015 13.7905L6.90346 12.0818C6.5821 11.7524 6.58866 11.2248 6.91812 10.9034C7.24758 10.582 7.77517 10.5886 8.09654 10.9181L9.18518 12.0341L11.9221 9.39957C12.2537 9.08039 12.7812 9.09044 13.1004 9.42202Z`,fill:t})}),dl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M11.2513 5.41669C11.2513 3.34562 9.57242 1.66669 7.50134 1.66669C5.43027 1.66669 3.75134 3.34562 3.75134 5.41669C3.75134 7.48775 5.43027 9.16669 7.50134 9.16669C9.57242 9.16669 11.2513 7.48775 11.2513 5.41669Z`,fill:t}),(0,K.jsx)(`path`,{d:`M14.5847 5.41669C14.5847 4.26609 13.6519 3.33335 12.5013 3.33335C12.0411 3.33335 11.668 2.96025 11.668 2.50002C11.668 2.03979 12.0411 1.66669 12.5013 1.66669C14.5724 1.66669 16.2513 3.34562 16.2513 5.41669C16.2513 7.48775 14.5724 9.16669 12.5013 9.16669C12.0411 9.16669 11.668 8.7936 11.668 8.33335C11.668 7.87312 12.0411 7.50002 12.5013 7.50002C13.6519 7.50002 14.5847 6.56728 14.5847 5.41669Z`,fill:t}),(0,K.jsx)(`path`,{d:`M14.2744 16.7337C13.8373 17.2174 13.1858 17.5 12.5015 17.5H2.50148C1.81718 17.5 1.16563 17.2174 0.728594 16.7337C0.277181 16.234 0.060212 15.5156 0.310834 14.7647C1.24903 11.9537 4.16277 10 7.50148 10C10.8403 10 13.7539 11.9537 14.6922 14.7647C14.9428 15.5156 14.7257 16.234 14.2744 16.7337Z`,fill:t}),(0,K.jsx)(`path`,{d:`M17.5014 17.5C18.1858 17.5 18.8373 17.2174 19.2743 16.7338C19.7257 16.2342 19.9428 15.5157 19.6922 14.7648C19.0273 12.7728 17.3646 11.2103 15.2797 10.4719C14.8458 10.3182 14.3696 10.5454 14.2159 10.9791C14.0623 11.4129 14.2894 11.8892 14.7233 12.0429C16.3896 12.6331 17.6298 13.8497 18.1112 15.2924C18.152 15.4146 18.1291 15.5152 18.0378 15.6164C17.9319 15.7334 17.7377 15.8334 17.5014 15.8334H17.0848C16.6246 15.8334 16.2514 16.2064 16.2514 16.6667C16.2514 17.1269 16.6246 17.5 17.0848 17.5H17.5014Z`,fill:t})]}),fl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{d:`M15 2.5C16.3807 2.5 17.5 3.61929 17.5 5V15C17.5 16.3807 16.3807 17.5 15 17.5H5C3.61929 17.5 2.5 16.3807 2.5 15V5C2.5 3.61929 3.61929 2.5 5 2.5H15ZM11.2373 6.83008C10.7773 6.83019 10.4045 7.20307 10.4043 7.66309C10.4044 8.12314 10.7772 8.49599 11.2373 8.49609H12.5254L10.6484 10.373C10.3666 10.6549 9.90892 10.6546 9.62695 10.373C8.75254 9.49894 7.36872 9.44417 6.43066 10.209L6.24902 10.373L4.875 11.748C4.54968 12.0734 4.54981 12.6003 4.875 12.9258C5.20045 13.2508 5.72743 13.251 6.05273 12.9258L7.42773 11.5518L7.54102 11.459C7.82107 11.2743 8.20165 11.3054 8.44824 11.5518C9.38095 12.4841 10.8934 12.4841 11.8262 11.5518L13.7031 9.6748V10.9619C13.7033 11.4219 14.0762 11.7956 14.5361 11.7959C14.9961 11.7956 15.37 11.4219 15.3701 10.9619V7.66309C15.37 7.23206 15.0418 6.87706 14.6221 6.83398L14.5361 6.83008H11.2373Z`,fill:t})}),pl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M9.45817 1.80518C9.80933 1.68449 10.1907 1.68449 10.5418 1.80518L16.3752 3.81039C17.0482 4.04174 17.5 4.67488 17.5 5.38654V9.92706C17.5 12.2661 16.5426 13.9516 15.1562 15.2641C13.8459 16.5046 12.1293 17.4303 10.5266 18.2946L10.3957 18.3651C10.1487 18.4984 9.85125 18.4984 9.60433 18.3651L9.47342 18.2946C7.8707 17.4303 6.15411 16.5046 4.84375 15.2641C3.45742 13.9516 2.5 12.2661 2.5 9.92706V5.38654C2.5 4.67488 2.95187 4.04174 3.62487 3.81039L9.45817 1.80518ZM10 6.66665C8.84942 6.66665 7.91667 7.59939 7.91667 8.74998C7.91667 9.60431 8.43083 10.3385 9.16667 10.66V12.5C9.16667 12.9602 9.53975 13.3333 10 13.3333C10.4602 13.3333 10.8333 12.9602 10.8333 12.5V10.66C11.5692 10.3385 12.0833 9.60431 12.0833 8.74998C12.0833 7.59939 11.1506 6.66665 10 6.66665Z`,fill:t})}),ml=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M2.91589 5.83333C2.91589 3.99238 4.40827 2.5 6.24922 2.5C8.09017 2.5 9.58254 3.99238 9.58254 5.83333C9.58254 7.67428 8.09017 9.16667 6.24922 9.16667C4.40827 9.16667 2.91589 7.67428 2.91589 5.83333Z`,fill:t}),(0,K.jsx)(`path`,{d:`M10.4159 5.83333C10.4159 3.99238 11.9083 2.5 13.7492 2.5C15.5902 2.5 17.0825 3.99238 17.0825 5.83333C17.0825 7.67428 15.5902 9.16667 13.7492 9.16667C11.9083 9.16667 10.4159 7.67428 10.4159 5.83333Z`,fill:t}),(0,K.jsx)(`path`,{d:`M6.24901 10C8.64129 10 10.9105 11.6506 11.7552 14.6779C12.1968 16.2609 10.8467 17.5 9.46071 17.5H3.0373C1.65133 17.5 0.30124 16.2609 0.742855 14.6779C1.58744 11.6506 3.85669 10 6.24901 10Z`,fill:t}),(0,K.jsx)(`path`,{d:`M13.3612 14.2301C12.9547 12.773 12.2558 11.5405 11.3575 10.5851C12.1037 10.1988 12.9193 10 13.7496 10C16.142 10 18.4112 11.6506 19.2558 14.6779C19.6974 16.2609 18.3473 17.5 16.9613 17.5H12.7748C13.4149 16.6291 13.7071 15.4701 13.3612 14.2301Z`,fill:t})]}),hl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{d:`M2.33546 4.64324C1.86867 3.24288 3.31833 1.97173 4.64571 2.61748L16.7403 8.50133C17.9904 9.1095 17.9904 10.8907 16.7403 11.4988L4.64571 17.3827C3.31833 18.0284 1.86868 16.7573 2.33546 15.3569L3.84335 10.8333H7.4995C7.95974 10.8333 8.33284 10.4602 8.33284 9.99992C8.33284 9.53967 7.95974 9.16658 7.4995 9.16658H3.84324L2.33546 4.64324Z`,fill:t})}),gl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M1.66663 5C1.66663 3.61929 2.78592 2.5 4.16663 2.5H15.8333C17.214 2.5 18.3333 3.61929 18.3333 5V11.6667C18.3333 13.0474 17.214 14.1667 15.8333 14.1667H4.16663C2.78592 14.1667 1.66663 13.0474 1.66663 11.6667V5Z`,fill:t}),(0,K.jsx)(`path`,{d:`M5.27124 17.4547C6.75712 16.9436 8.34671 16.6667 10.0002 16.6667C11.6537 16.6667 13.2433 16.9436 14.7291 17.4547C15.1644 17.6044 15.6385 17.3729 15.7882 16.9377C15.9379 16.5025 15.7065 16.0283 15.2712 15.8787C13.6138 15.3085 11.8411 15 10.0002 15C8.15925 15 6.38661 15.3085 4.72913 15.8787C4.29392 16.0283 4.06247 16.5025 4.21217 16.9377C4.36187 17.3729 4.83603 17.6044 5.27124 17.4547Z`,fill:t})]}),_l=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M10.0002 1.25C8.47324 1.25 7.22039 2.42328 7.09396 3.91747C5.10461 4.75431 3.55308 6.42324 2.87382 8.48983C2.73011 8.92708 2.96805 9.398 3.40529 9.54175C3.84251 9.68542 4.31345 9.4475 4.45715 9.01025C4.95174 7.50553 6.04335 6.27005 7.45089 5.58491C7.94924 6.47877 8.90407 7.08333 10.0002 7.08333C11.611 7.08333 12.9168 5.7775 12.9168 4.16667C12.9168 2.55583 11.611 1.25 10.0002 1.25Z`,fill:t}),(0,K.jsx)(`path`,{d:`M15.6565 5.90823C15.3542 5.56125 14.8278 5.52507 14.4808 5.82744C14.1338 6.1298 14.0976 6.65619 14.4 7.00317C15.2934 8.02841 15.8335 9.3668 15.8335 10.8335C15.8335 10.9737 15.8286 11.1127 15.8189 11.2503C14.7944 11.2335 13.7915 11.7582 13.2428 12.7085C12.4374 14.1034 12.9154 15.887 14.3103 16.6923C15.7051 17.4976 17.4887 17.0197 18.294 15.6249C19.0565 14.3042 18.6686 12.635 17.4413 11.7777C17.4802 11.4681 17.5002 11.153 17.5002 10.8335C17.5002 8.94913 16.8043 7.22535 15.6565 5.90823Z`,fill:t}),(0,K.jsx)(`path`,{d:`M6.75101 12.7084C5.94568 11.3136 4.16209 10.8357 2.76724 11.641C1.37238 12.4463 0.894476 14.2299 1.69979 15.6248C2.46351 16.9475 4.10703 17.4457 5.46446 16.8068C6.72381 17.7643 8.29636 18.3333 10.0002 18.3333C10.4798 18.3333 10.9496 18.2882 11.4054 18.2018C11.8576 18.1159 12.1547 17.6798 12.0688 17.2277C11.9831 16.7755 11.547 16.4785 11.0948 16.5643C10.7409 16.6314 10.3751 16.6667 10.0002 16.6667C8.78708 16.6667 7.66172 16.2971 6.7287 15.6638C7.25286 14.7855 7.2987 13.6571 6.75101 12.7084Z`,fill:t})]}),vl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M2.50208 4.99963C2.50208 3.62007 3.62043 2.50171 4.99999 2.50171H6.66666C8.04623 2.50171 9.16458 3.62007 9.16458 4.99963V6.66629C9.16458 8.04586 8.04623 9.16425 6.66666 9.16425H4.99999C3.62043 9.16425 2.50208 8.04586 2.50208 6.66629V4.99963Z`,fill:t}),(0,K.jsx)(`path`,{d:`M2.50208 13.333C2.50208 11.9534 3.62043 10.8351 4.99999 10.8351H6.66666C8.04623 10.8351 9.16458 11.9534 9.16458 13.333V14.9997C9.16458 16.3792 8.04623 17.4976 6.66666 17.4976H4.99999C3.62043 17.4976 2.50208 16.3792 2.50208 14.9997V13.333Z`,fill:t}),(0,K.jsx)(`path`,{d:`M10.8354 4.99963C10.8354 3.62007 11.9537 2.50171 13.3333 2.50171H15C16.3796 2.50171 17.4979 3.62007 17.4979 4.99963V6.66629C17.4979 8.04586 16.3796 9.16425 15 9.16425H13.3333C11.9537 9.16425 10.8354 8.04586 10.8354 6.66629V4.99963Z`,fill:t}),(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M14.1667 10.8351C12.3268 10.8351 10.8354 12.3265 10.8354 14.1663C10.8354 16.0061 12.3268 17.4976 14.1667 17.4976C16.0065 17.4976 17.4979 16.0061 17.4979 14.1663C17.4979 12.3265 16.0065 10.8351 14.1667 10.8351ZM12.4979 14.1663C12.4979 13.2447 13.2451 12.4976 14.1667 12.4976C15.0883 12.4976 15.8354 13.2447 15.8354 14.1663C15.8354 15.0879 15.0883 15.8351 14.1667 15.8351C13.2451 15.8351 12.4979 15.0879 12.4979 14.1663Z`,fill:t})]}),yl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M9.16663 4.37799L4.70895 3.38739C3.14767 3.04044 1.66663 4.22849 1.66663 5.82787V14.0799C1.66663 15.2516 2.48046 16.2662 3.6243 16.5204L9.16663 17.7519V4.37799Z`,fill:t}),(0,K.jsx)(`path`,{d:`M10.8333 17.7519L16.3756 16.5204C17.5195 16.2662 18.3333 15.2516 18.3333 14.0799V5.82787C18.3333 4.22849 16.8522 3.04044 15.291 3.38739L10.8333 4.37799V17.7519Z`,fill:t})]}),bl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.00159 2.50002L15.0015 2.5C16.3823 2.5 17.5016 3.61928 17.5016 5V13.3632C17.5016 14.7438 16.3823 15.8631 15.0016 15.8632H12.813L10.5297 17.7548C10.2199 18.0115 9.77096 18.0102 9.46271 17.7517L7.2096 15.8632H5.00159C3.62088 15.8632 2.50159 14.7438 2.50159 13.3632V5.00002C2.50159 3.61931 3.62088 2.50002 5.00159 2.50002ZM12.8807 8.29759C13.2061 7.97215 13.2061 7.44452 12.8807 7.11907C12.5552 6.79364 12.0276 6.79364 11.7022 7.11907L9.37479 9.4465L8.71404 8.78575C8.38854 8.46033 7.86094 8.46033 7.5355 8.78575C7.21006 9.11117 7.21006 9.63883 7.5355 9.96425L8.78554 11.2142C8.94179 11.3705 9.15371 11.4583 9.37479 11.4583C9.59579 11.4583 9.80771 11.3705 9.96404 11.2142L12.8807 8.29759Z`,fill:t})}),xl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M6.66671 2.5C5.286 2.5 4.16671 3.61929 4.16671 5V5.83333H3.33337C1.95267 5.83333 0.833374 6.95262 0.833374 8.33333V15C0.833374 16.3807 1.95267 17.5 3.33337 17.5H13.3334C14.7141 17.5 15.8334 16.3807 15.8334 15V14.1667H16.6667C18.0475 14.1667 19.1667 13.0474 19.1667 11.6667V6.66667C19.1667 5.28596 18.0475 4.16667 16.6667 4.16667H12.0119L11.0775 3.23223C10.6086 2.76339 9.97271 2.5 9.30971 2.5H6.66671ZM15.8334 12.5H16.6667C17.127 12.5 17.5 12.1269 17.5 11.6667V6.66667C17.5 6.20643 17.127 5.83333 16.6667 5.83333H12.0119C11.5699 5.83333 11.146 5.65774 10.8334 5.34517L9.89896 4.41074C9.74263 4.25447 9.53071 4.16667 9.30971 4.16667H6.66671C6.20647 4.16667 5.83337 4.53977 5.83337 5V5.83333H5.97635C6.63939 5.83333 7.27527 6.09672 7.74412 6.56557L8.67854 7.5H13.3334C14.7141 7.5 15.8334 8.61925 15.8334 10V12.5Z`,fill:t})}),Sl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M1.66663 9.99992C1.66663 5.58343 5.4431 2.08325 9.99996 2.08325C14.5568 2.08325 18.3333 5.58343 18.3333 9.99992C18.3333 11.562 17.913 12.6835 16.9574 13.2783C16.0843 13.8218 14.9975 13.7541 14.1464 13.6434C13.8439 13.6041 13.5252 13.5514 13.2263 13.5021C13.0904 13.4796 12.9585 13.4578 12.8341 13.4383C12.4142 13.3723 12.0475 13.3259 11.7265 13.3213C11.0814 13.3118 10.8666 13.4633 10.7453 13.7059C10.6762 13.8443 10.6605 14.0336 10.7693 14.3558C10.867 14.6452 11.023 14.9277 11.2033 15.2539C11.2355 15.3123 11.2685 15.372 11.3021 15.4335C11.402 15.6163 11.5154 15.8305 11.5951 16.0417C11.6684 16.2353 11.7641 16.5521 11.6931 16.8989C11.606 17.3247 11.3133 17.6088 10.9717 17.7559C10.6767 17.8829 10.3344 17.9166 9.99996 17.9166C5.4431 17.9166 1.66663 14.4164 1.66663 9.99992ZM8.74996 7.91658C9.44029 7.91658 9.99996 7.35694 9.99996 6.66658C9.99996 5.97623 9.44029 5.41659 8.74996 5.41659C8.0596 5.41659 7.49996 5.97623 7.49996 6.66658C7.49996 7.35694 8.0596 7.91658 8.74996 7.91658ZM7.29163 10.2083C7.29163 10.8986 6.73198 11.4583 6.04163 11.4583C5.35127 11.4583 4.79163 10.8986 4.79163 10.2083C4.79163 9.51792 5.35127 8.95825 6.04163 8.95825C6.73198 8.95825 7.29163 9.51792 7.29163 10.2083ZM12.9166 9.16658C13.607 9.16658 14.1666 8.60692 14.1666 7.91658C14.1666 7.22623 13.607 6.66658 12.9166 6.66658C12.2263 6.66658 11.6666 7.22623 11.6666 7.91658C11.6666 8.60692 12.2263 9.16658 12.9166 9.16658Z`,fill:t})}),Cl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M9.99996 1.66675C7.92889 1.66675 6.24996 3.34568 6.24996 5.41675C6.24996 7.48781 7.92889 9.16675 9.99996 9.16675C12.071 9.16675 13.75 7.48781 13.75 5.41675C13.75 3.34568 12.071 1.66675 9.99996 1.66675Z`,fill:t}),(0,K.jsx)(`path`,{d:`M10.0012 10.0001C6.80794 10.0001 4.36401 11.9136 3.37167 14.5967C3.08798 15.3638 3.2822 16.1199 3.73317 16.6573C4.17264 17.1811 4.85107 17.5001 5.58189 17.5001H12.2916V14.8328C11.4003 14.0697 10.8333 12.9354 10.8333 11.6667C10.8333 11.1067 10.9438 10.5726 11.1441 10.0847C10.7754 10.029 10.394 10.0001 10.0012 10.0001Z`,fill:t}),(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M15 9.16675C13.6192 9.16675 12.5 10.286 12.5 11.6667C12.5 12.6757 13.0976 13.5451 13.9583 13.9401V16.8832C13.9583 17.0097 14.0158 17.1294 14.1147 17.2085L14.7397 17.7085C14.8919 17.8302 15.108 17.8302 15.2602 17.7085L15.8852 17.2085C15.9841 17.1294 16.0416 17.0097 16.0416 16.8832V16.1892L15.4166 15.6251L16.0416 15.0001V13.9401C16.9023 13.5451 17.5 12.6757 17.5 11.6667C17.5 10.286 16.3807 9.16675 15 9.16675ZM14.1666 11.6667C14.1666 11.2065 14.5397 10.8334 15 10.8334C15.4602 10.8334 15.8333 11.2065 15.8333 11.6667C15.8333 12.127 15.4602 12.5001 15 12.5001C14.5397 12.5001 14.1666 12.127 14.1666 11.6667Z`,fill:t})]}),wl=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsxs)(q,{size:e,...n,children:[(0,K.jsx)(`path`,{d:`M9.99996 1.66675C7.92889 1.66675 6.24996 3.34568 6.24996 5.41675C6.24996 7.48781 7.92889 9.16675 9.99996 9.16675C12.071 9.16675 13.75 7.48781 13.75 5.41675C13.75 3.34568 12.071 1.66675 9.99996 1.66675Z`,fill:t}),(0,K.jsx)(`path`,{d:`M10.0012 10.0001C6.80794 10.0001 4.36401 11.9136 3.37167 14.5967C3.08798 15.3638 3.2822 16.1199 3.73317 16.6573C4.17264 17.1811 4.85107 17.5001 5.58189 17.5001H14.4205C15.1513 17.5001 15.8297 17.1811 16.2692 16.6573C16.7202 16.1199 16.9144 15.3638 16.6307 14.5967C15.6384 11.9136 13.1945 10.0001 10.0012 10.0001Z`,fill:t})]}),Tl=({size:e=20,color:t=`#5C6970`,...n})=>(0,K.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...n,children:(0,K.jsx)(`path`,{fill:t,d:`M2.499 11a.5.5 0 0 1 .477.348l.256.797a1.01 1.01 0 0 0 .63.633l.789.248a.5.5 0 0 1 .001.954l-.79.252a1.007 1.007 0 0 0-.63.633l-.252.787a.5.5 0 0 1-.95.008l-.266-.79a1.034 1.034 0 0 0-.636-.639l-.781-.252a.5.5 0 0 1-.002-.95l.794-.26a1.023 1.023 0 0 0 .636-.634l.248-.786A.5.5 0 0 1 2.5 11ZM1 7.513a1 1 0 0 1 .69-.953l2.583-.844a3.95 3.95 0 0 0 2.465-2.457l.808-2.56A1 1 0 0 1 9.452.695l.832 2.598a3.906 3.906 0 0 0 2.448 2.453l2.569.811a1 1 0 0 1 .004 1.906l-2.572.823a3.896 3.896 0 0 0-2.449 2.454l-.82 2.565a1 1 0 0 1-1.9.014l-.866-2.567v-.002A3.971 3.971 0 0 0 4.24 9.284l-2.547-.821A1 1 0 0 1 1 7.513Z`})}),El=({size:e,color:t=`#5C6970`,...n})=>(0,K.jsx)(q,{size:e,...n,children:(0,K.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M12.5 12.4269L9.99996 14.5519V16.028L12.0954 14.7707C12.3464 14.6202 12.5 14.3489 12.5 14.0562V12.4269ZM8.33329 14.5117L5.48812 11.6665H3.97178C2.67629 11.6665 1.87611 10.2532 2.54263 9.14233L3.79988 7.04695C4.25168 6.29394 5.06545 5.83319 5.94361 5.83319H9.01221C11.116 3.60805 13.5005 1.97393 16.5951 1.7053C17.5694 1.62072 18.3791 2.43041 18.2945 3.40466C18.0259 6.49924 16.3918 8.88383 14.1666 10.9877V14.0562C14.1666 14.9343 13.7059 15.7482 12.9529 16.1999L10.8575 17.4572C9.74654 18.1237 8.33329 17.3235 8.33329 16.028V14.5117ZM7.57293 7.49986H5.94361C5.65089 7.49986 5.37963 7.65344 5.22903 7.90445L3.97178 9.99983H5.44793L7.57293 7.49986ZM1.66663 15.8332C1.66663 14.4525 2.78592 13.3332 4.16663 13.3332C5.54733 13.3332 6.66663 14.4525 6.66663 15.8332C6.66663 17.2139 5.54733 18.3332 4.16663 18.3332H2.49996C2.03973 18.3332 1.66663 17.9601 1.66663 17.4998V15.8332Z`,fill:t})}),Dl=L.div`
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
`,Ol=L.button`
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
`,kl=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,Al=[{id:`support`,name:`Support`,icon:Rc},{id:`knowledge`,name:`Knowledge`,icon:ol},{id:`ai-agents`,name:`AI agents`,icon:sl},{id:`chat`,name:`Chat`,icon:zc},{id:`voice`,name:`Voice`,icon:Bc},{id:`analytics`,name:`Analytics`,icon:cl},{id:`workforce-management`,name:`Workforce management`,icon:ll},{id:`quality-assurance`,name:`Quality assurance`,icon:ul},{id:`community`,name:`Community`,icon:dl},{id:`sales`,name:`Sales`,icon:fl},{id:`admin-center`,name:`Admin center`,icon:pl}],jl=({currentProduct:e=`support`,onSelectProduct:t,onClose:n})=>{let r=e=>{t?.(e),n?.()};return(0,K.jsx)(Dl,{children:Al.map(t=>{let n=t.icon,i=t.id===e;return(0,K.jsxs)(Ol,{$isActive:i,onClick:()=>r(t.id),children:[(0,K.jsx)(kl,{children:(0,K.jsx)(n,{size:20,color:i?`white`:`#5C6970`})}),(0,K.jsx)(`span`,{children:t.name})]},t.id)})})},Ml=L.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`,Nl=L.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Pl=L.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`,Fl=L.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Il=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`,Ll=L.div`
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
`,Rl=L.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`,zl=L.div`
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
`,Bl=L.div`
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
`,Vl=L.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Hl=L.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`,Ul=L.button`
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
`,Wl=L.button`
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
`,Gl=L.button`
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
`,Kl=L.div`
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
`;L.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;var ql=({currentProduct:e=`support`,onProductChange:t})=>{let[n,r]=(0,g.useState)(!1),i=(0,g.useRef)(null),a=e=>{t?.(e)};(0,g.useEffect)(()=>{let e=e=>{i.current&&!i.current.contains(e.target)&&r(!1)};if(n)return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[n]);let o=Al.find(t=>t.id===e)||Al[0],s=e===`admin-center`,c=e===`knowledge`,l=e===`ai-agents`,u=e===`workforce-management`,d=e===`quality-assurance`,f=e===`analytics`;return(0,K.jsxs)(Ml,{children:[(0,K.jsxs)(Nl,{children:[(0,K.jsx)(Il,{children:(0,K.jsx)(al,{size:20})}),(0,K.jsxs)(Ll,{ref:i,onClick:()=>r(!n),children:[(0,K.jsx)(Rl,{children:o.name}),(0,K.jsx)(nl,{size:12}),n&&(0,K.jsx)(jl,{currentProduct:e,onSelectProduct:a,onClose:()=>r(!1)})]})]}),(0,K.jsx)(Pl,{children:s?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,K.jsx)(Vl,{children:(0,K.jsx)(Hl,{})}),(0,K.jsx)(zl,{children:`Camera obscura`})]}),(0,K.jsxs)(Fl,{children:[(0,K.jsxs)(Bl,{children:[(0,K.jsx)(Hc,{size:16}),(0,K.jsx)(`span`,{children:`Search admin center`})]}),(0,K.jsx)(Gl,{children:(0,K.jsx)(Uc,{size:20})}),(0,K.jsx)(kc,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,K.jsx)(wl,{size:16,color:`#5C6970`})})]})]}):c?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,K.jsx)(Vl,{children:(0,K.jsx)(Hl,{})}),(0,K.jsxs)(Ll,{children:[(0,K.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:600,lineHeight:`16px`,letterSpacing:`-0.0004px`,color:`#293239`},children:`Joe's Coffee`}),(0,K.jsx)(nl,{size:12})]})]}),(0,K.jsxs)(Fl,{children:[(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,K.jsx)(Wl,{size:`small`,children:`Create content`}),(0,K.jsx)(Wl,{size:`small`,disabled:!0,children:`Help center`})]}),(0,K.jsx)(Gl,{children:(0,K.jsx)(Uc,{size:20})}),(0,K.jsx)(kc,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,K.jsx)(wl,{size:16,color:`#5C6970`})})]})]}):l?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,K.jsx)(Vl,{children:(0,K.jsx)(Hl,{})}),(0,K.jsx)(zl,{children:`Camera obscura`})]}),(0,K.jsxs)(Fl,{children:[(0,K.jsxs)(Ll,{children:[(0,K.jsx)(`span`,{style:{fontSize:`12px`,fontWeight:600,lineHeight:`16px`,letterSpacing:`-0.0004px`,color:`#293239`},children:`Test bot`}),(0,K.jsx)(nl,{size:12})]}),(0,K.jsx)(Gl,{children:(0,K.jsx)(Uc,{size:20})}),(0,K.jsx)(kc,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,K.jsx)(wl,{size:16,color:`#5C6970`})})]})]}):u?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`div`,{}),(0,K.jsxs)(Fl,{children:[(0,K.jsxs)(Bl,{children:[(0,K.jsx)(Hc,{size:16}),(0,K.jsx)(`span`,{children:`Search`})]}),(0,K.jsx)(Gl,{children:(0,K.jsx)(tl,{size:20})}),(0,K.jsx)(kc,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,K.jsx)(wl,{size:16,color:`#5C6970`})})]})]}):d||f?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`div`,{}),(0,K.jsxs)(Fl,{children:[(0,K.jsxs)(Bl,{children:[(0,K.jsx)(Hc,{size:16}),(0,K.jsx)(`span`,{children:`Search`})]}),(0,K.jsx)(kc,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,K.jsx)(wl,{size:16,color:`#5C6970`})})]})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,K.jsx)(Vl,{children:(0,K.jsx)(Hl,{})}),(0,K.jsxs)(Ul,{children:[(0,K.jsx)(il,{size:12}),(0,K.jsx)(`span`,{children:`Add`})]})]}),(0,K.jsxs)(Fl,{children:[(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,K.jsx)(Gl,{children:(0,K.jsx)(Hc,{size:20})}),(0,K.jsx)(Wl,{size:`small`,disabled:!0,children:`Conversations`}),(0,K.jsx)(Gl,{children:(0,K.jsx)(zc,{size:20})}),(0,K.jsx)(Gl,{children:(0,K.jsx)(Bc,{size:20})})]}),(0,K.jsx)(Vl,{children:(0,K.jsx)(Hl,{})}),(0,K.jsxs)(Gl,{children:[(0,K.jsx)(Vc,{size:20}),(0,K.jsx)(Kl,{children:`1`})]}),(0,K.jsx)(Gl,{children:(0,K.jsx)(El,{size:20})}),(0,K.jsx)(kc,{size:`small`,backgroundColor:`#f8f9f9`,children:(0,K.jsx)(wl,{size:16,color:`#5C6970`})})]})]})})]})},Jl=L.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 56px;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`,Yl=L.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`,Xl=L.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`,Zl=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`,Ql=L.button`
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
`,$l=L.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`,eu=L.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 56px;
  height: 48px;
  padding: 0 16px;
`,tu=L.div`
  width: 23px;
  height: 1px;
  background-color: #d8dcde;
`,nu=L.button`
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
`,ru=[{id:0,icon:Ac,label:`Home`},{id:1,icon:jc,label:`Inbox`},{id:2,icon:Mc,label:`Contacts`},{id:3,icon:Nc,label:`Organization`},{id:4,icon:Pc,label:`Custom Objects`},{id:5,icon:Fc,label:`Analytics`},{id:6,icon:Lc,label:`Settings`}],iu=[{id:0,icon:Ac,label:`Home`},{id:1,icon:Nc,label:`Account`},{id:2,icon:ml,label:`People`},{id:3,icon:hl,label:`Channels`},{id:4,icon:Tl,label:`AI`},{id:5,icon:gl,label:`Workspaces`},{id:6,icon:_l,label:`Objects & rules`},{id:7,icon:vl,label:`Apps and integrations`}],au=[{id:0,icon:Ac,label:`Home`},{id:1,icon:yl,label:`Knowledge`},{id:2,icon:bl,label:`Moderate content`},{id:3,icon:xl,label:`Arrange content`},{id:4,icon:Sl,label:`Customize design`},{id:5,icon:Cl,label:`User permissions`},{id:6,icon:Lc,label:`Settings`}],ou=[{id:0,icon:Fc,label:`Analytics`},{id:1,icon:Gc,label:`Content`},{id:2,icon:Wc,label:`Conversations`},{id:3,icon:Lc,label:`Settings`},{id:4,icon:null,label:`separator`},{id:5,icon:J,label:`AI agent management`},{id:6,icon:Cl,label:`Permissions`},{id:7,icon:Kc,label:`Database`},{id:8,icon:qc,label:`Apps`},{id:9,icon:Jc,label:`Integrations`}],su=[{id:0,icon:Ic,label:`Real-time monitoring`},{id:1,icon:Yc,label:`Dashboard`},{id:2,icon:Fc,label:`Reports`},{id:3,icon:Kc,label:`Data`},{id:4,icon:Xc,label:`Export`},{id:5,icon:Lc,label:`Settings`}],cu=[{id:0,icon:Yc,label:`Dashboard`},{id:1,icon:Wc,label:`Conversations`},{id:2,icon:Zc,label:`Reviews`},{id:3,icon:jc,label:`Inbox`},{id:4,icon:Qc,label:`Training`}],lu=[{id:0,icon:Ic,label:`Real-time monitoring`},{id:1,icon:Fc,label:`Analytics`},{id:2,icon:$c,label:`Forecasting`},{id:3,icon:el,label:`Scheduling`},{id:4,icon:ml,label:`Team`},{id:5,icon:Lc,label:`Settings`}],uu=({currentProduct:e,activeNavItem:t,setActiveNavItem:n,isSubnavExpanded:r,setIsSubnavExpanded:i})=>{let a=e===`admin-center`?iu:e===`knowledge`?au:e===`ai-agents`?ou:e===`analytics`?su:e===`quality-assurance`?cu:e===`workforce-management`?lu:ru,o=e===`knowledge`||e===`ai-agents`;return(0,K.jsxs)(Jl,{children:[(0,K.jsx)(Yl,{}),(0,K.jsx)(Xl,{children:a.map(e=>{if(e.label===`separator`)return(0,K.jsx)(eu,{children:(0,K.jsx)(tu,{})},e.id);let r=t===e.id,i=typeof e.icon==`function`?e.icon:null;return(0,K.jsx)(Zl,{children:(0,K.jsx)(Ql,{$isActive:r,onClick:()=>n(e.id),"aria-label":e.label,children:i?(0,K.jsx)(i,{size:20,color:r?`white`:`#5C6970`}):e.icon})},e.id)})}),(0,K.jsx)($l,{children:o&&(0,K.jsx)(nu,{onClick:()=>i(!r),"aria-label":r?`Collapse`:`Expand`,children:(0,K.jsx)(rl,{size:20,color:`#5C6970`})})})]})};L.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`,L.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`,L.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`,L.button`
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
`,L.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`;var du=L.div`
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
`;L.p`
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
`,L.div`
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
`,L.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,L.div`
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
`,L.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`,L.p`
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
`,L.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`,L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`,L(du)`
  padding-left: ${e=>e.$depth*24+12}px;
`,L.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`,L.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
`,L.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #293239;
  margin: 0;
  padding: 4px 0;
`,L(L.button`
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
`,L.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`,L.div`
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
`,L.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,L.p`
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
`,L.div`
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
`,L.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,L.div`
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
`,L.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 4px 12px 8px;
`,L.p`
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
`,L.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
  min-width: 0;
`,L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
`,L.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`,L.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`,L.div`
  display: flex;
`,L.main`
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
`;var fu=e=>I`
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
`,pu=({theme:e,$isPill:t,$isPrimary:n,$isBasic:r,$isNeutral:i,$isDanger:a,$isLink:o})=>{let s={};return o&&a?(s.fg=U({theme:e,variable:`foreground.danger`}),s.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),s.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}})):o?(s.fg=U({theme:e,variable:`foreground.primary`}),s.hoverFg=U({theme:e,variable:`foreground.primary`,light:{offset:100},dark:{offset:-100}}),s.activeFg=U({theme:e,variable:`foreground.primary`,light:{offset:200},dark:{offset:-200}})):n&&a?(s.bg=U({theme:e,variable:`background.dangerEmphasis`}),s.fg=U({theme:e,variable:`foreground.onEmphasis`}),s.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),s.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):n?(s.bg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.fg=U({theme:e,variable:`foreground.onEmphasis`,light:{offset:0},dark:{offset:0}}),s.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),s.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):r&&a?(s.fg=U({theme:e,variable:`foreground.danger`}),s.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),s.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),s.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),s.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):r?(s.fg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.hoverFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),s.activeFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):a?(s.fg=U({theme:e,variable:`foreground.danger`}),s.border=U({theme:e,variable:`border.dangerEmphasis`}),s.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),s.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),s.hoverBorder=U({theme:e,variable:`border.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),s.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),s.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),s.activeBorder=U({theme:e,variable:`border.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):(s.fg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.border=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),s.hoverFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),s.hoverBorder=U({theme:e,hue:`neutralHue`,light:{shade:600},dark:{shade:500}}),s.activeFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),s.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),s.activeBorder=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:400}}),s.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),s.disabledBorder=`transparent`),i===!1&&!n&&!o&&!a&&(s.fg=U({theme:e,variable:`foreground.primary`}),s.hoverFg=U({theme:e,variable:`foreground.primary`,light:{offset:100},dark:{offset:-100}}),s.activeFg=U({theme:e,variable:`foreground.primary`,light:{offset:200},dark:{offset:-200}})),I`
    ${!o&&`font-weight: ${e.fontWeights.semibold};`}
    border-radius: ${o||t===!1?e.borderRadii.md:e.borderRadii.full};
    ${fu({theme:e,...s})}

    && svg {
      width: ${e.space.md};
      height: ${e.space.md};
    }
  `},mu=({theme:e,$isPill:t,$isPrimary:n,$isBasic:r,$isDanger:i})=>{let a={};return n&&i?(a.bg=U({theme:e,variable:`background.dangerEmphasis`}),a.fg=U({theme:e,variable:`foreground.onEmphasis`}),a.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),a.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:200},dark:{offset:-200}}),a.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):n?(a.bg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.fg=U({theme:e,variable:`foreground.onEmphasis`,light:{offset:0},dark:{offset:0}}),a.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),a.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),a.disabledBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]})):i&&!r?(a.fg=U({theme:e,variable:`foreground.danger`}),a.border=U({theme:e,variable:`border.dangerEmphasis`}),a.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),a.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),a.hoverBorder=U({theme:e,variable:`border.dangerEmphasis`,light:{offset:100},dark:{offset:-100}}),a.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),a.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]}),a.activeBorder=U({theme:e,variable:`border.dangerEmphasis`,light:{offset:200},dark:{offset:-200}})):i?(a.fg=U({theme:e,variable:`foreground.danger`}),a.hoverFg=U({theme:e,variable:`foreground.danger`,light:{offset:100},dark:{offset:-100}}),a.hoverBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[100]}),a.activeFg=U({theme:e,variable:`foreground.danger`,light:{offset:200},dark:{offset:-200}}),a.activeBg=U({theme:e,variable:`background.dangerEmphasis`,light:{offset:0},dark:{offset:0},transparency:e.opacity[200]})):r?(a.fg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:500}}),a.hoverFg=U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:400}}),a.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),a.activeFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]})):(a.fg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:500}}),a.border=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),a.hoverFg=U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:400}}),a.hoverBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[100]}),a.hoverBorder=U({theme:e,hue:`neutralHue`,light:{shade:600},dark:{shade:700}}),a.activeFg=U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),a.activeBg=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[200]}),a.activeBorder=U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:400}})),I`
    border-radius: ${t===!1?e.borderRadii.md:e.borderRadii.full};
    ${fu({theme:e,...a})}

    && svg {
      width: ${e.space.md};
      height: ${e.space.md};
    }
  `},hu=e=>({bg:U({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:300}}),hoverBg:U({theme:e,hue:`neutralHue`,light:{shade:800},dark:{shade:200}}),activeBg:U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{shade:100}}),disabledBg:U({theme:e,hue:`neutralHue`,light:{shade:700},dark:{hue:`white`},transparency:e.opacity[300]})}),gu=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r,disabledBg:i}=hu(e),a=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),o=U({theme:e,variable:`border.disabled`}),s=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),c=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),l=U({theme:e,variable:`border.primaryEmphasis`});return I`
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
  `},_u=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r,disabledBg:i}=hu(e),a=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),o=U({theme:e,variable:`border.disabled`}),s=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),c=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),l=U({theme:e,variable:`border.primaryEmphasis`});return I`
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
  `},vu=({theme:e})=>{let{bg:t,hoverBg:n,activeBg:r,disabledBg:i}=hu(e),a=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),o=U({theme:e,variable:`border.disabled`}),s=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[100]}),c=U({theme:e,variable:`background.primaryEmphasis`,transparency:e.opacity[200]}),l=U({theme:e,variable:`border.primaryEmphasis`}),u=U({theme:e,hue:`neutralHue`,light:{shade:500},dark:{shade:600}}),d=U({theme:e,variable:`foreground.onEmphasis`});return I`
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
  `},yu=({theme:e})=>I`
  border-radius: ${e.borderRadii.xl};
`,bu=({theme:e})=>I`
  margin-inline-start: ${e.space.base*3}px;

  &:first-child {
    margin-inline-start: 0;
  }
`,xu=({theme:e})=>I`
  border-radius: ${e.borderRadii.xxl};
  border: none;
  margin: ${e.space.xxs};
  height: calc(100% - ${e.space.xxs} * 2);
`,Su=({theme:e})=>I`
  border-radius: ${e.borderRadii.lg};
`,Cu=({theme:e})=>I`
  border-radius: ${e.borderRadii.xl};
`,wu=({theme:e})=>I`
  padding-top: ${e.space.xs};
`,Tu=({theme:e})=>I`
  padding-top: ${e.space.sm};
`,Eu=({theme:e})=>`${e.space.base/2}px`,Du=`> li:not([data-garden-id='dropdowns.menu.separator']) + li:not([data-garden-id='dropdowns.menu.separator'])`,Ou=({theme:e,$isActive:t,$type:n})=>{if(n===`group`)return``;let r=t&&n!==`header`;return I`
    border-radius: ${e.borderRadii.sm};

    ${r&&I`
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
  `},ku=({theme:e})=>I`
  && {
    padding: ${e.space.xxs};
  }

  ${Du} {
    margin-block-start: ${Eu({theme:e})};
  }
`,Au=e=>Ou(e),ju=e=>Ou(e),Mu=({theme:e})=>I`
  margin: ${e.space.xxs} ${e.space.xs};
`,Nu=({theme:e})=>I`
  ${Du} {
    margin-block-start: ${Eu({theme:e})};
  }
`,Pu=({theme:e,$type:t})=>{switch(t){case`success`:return U({theme:e,hue:`successHue`,light:{shade:200},dark:{shade:900}});case`error`:return U({theme:e,hue:`dangerHue`,light:{shade:200},dark:{shade:900}});case`warning`:return U({theme:e,hue:`warningHue`,light:{shade:200},dark:{shade:900}});case`info`:return U({theme:e,hue:`neutralHue`,light:{shade:200},dark:{shade:900}});default:return U({theme:e,hue:`neutralHue`,light:{shade:200},dark:{shade:900}})}},Fu=({theme:e,$type:t})=>{switch(t){case`success`:return U({theme:e,variable:`foreground.successEmphasis`});case`error`:return U({theme:e,variable:`foreground.dangerEmphasis`});case`warning`:return U({theme:e,variable:`foreground.warningEmphasis`});case`info`:return U({theme:e,variable:`foreground.default`});default:return U({theme:e,variable:`foreground.default`})}},Iu=({theme:e,$type:t})=>I`
  padding: ${e.space.base*4}px ${e.space.base*10}px;
  border-radius: ${e.borderRadii.xl};
  border-color: transparent;
  background-color: ${Pu({theme:e,$type:t})};
  color: ${Fu({theme:e,$type:t})};
`,Lu=({theme:e})=>I`
  padding: ${e.space.base*4}px ${e.space.base*10}px;
  border-radius: ${e.borderRadii.xl};
  box-shadow: 0 ${e.space.base}px ${e.space.base*2}px ${U({theme:e,variable:`shadow.medium`})};
`,Ru=({theme:e})=>I`
  top: ${e.space.base*3}px;
  ${e.rtl?`left`:`right`}: ${e.space.base*3}px;
`,zu=({theme:e})=>I`
  ${e.rtl?`right`:`left`}: ${e.space.base*3}px;
  margin-top: 0;
  top: ${e.space.base*4}px;
`,Bu={"buttons.button":pu,"buttons.icon_button":mu},Vu={"forms.checkbox":gu,"forms.radio":_u,"forms.toggle":vu},Hu={"modals.modal":yu,"modals.footer_item":bu,"modals.drawer":xu,"modals.drawer.close":Su,"modals.tooltip_dialog":Cu,"modals.tooltip_dialog.body":wu,"modals.tooltip_dialog.footer":Tu},Uu={"dropdowns.menu":ku,"dropdowns.menu.item":Au,"dropdowns.menu.item_anchor":ju,"dropdowns.menu.separator":Mu,"dropdowns.menu.item_group":Nu},Wu={"notifications.alert":Iu,"notifications.notification":Lu,"notifications.close":Ru,"notifications.icon":zu},Gu={black:`#000`,white:`#ffffff`,product:{support:`#00a656`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f7f7f7`,200:`#eae9e8`,300:`#dcdcda`,400:`#b7b7b3`,500:`#999b97`,600:`#8b8e89`,700:`#646864`,800:`#404241`,900:`#2f3130`,1e3:`#202121`,1100:`#19191a`,1200:`#0c0c0d`},blue:{100:`#f3f6fb`,200:`#e4eaf6`,300:`#d4ddf0`,400:`#a3b7df`,500:`#7f9bd3`,600:`#698cd3`,700:`#406cc4`,800:`#284173`,900:`#1f335a`,1e3:`#14213b`,1100:`#0c1322`,1200:`#080c16`},red:{100:`#fbf3f3`,200:`#f7e5e6`,300:`#f3d7d9`,400:`#e5a8ab`,500:`#da8286`,600:`#d46f74`,700:`#c63f46`,800:`#792428`,900:`#5f1c20`,1e3:`#3f1315`,1100:`#260b0d`,1200:`#190708`},yellow:{100:`#faf6da`,200:`#f6eba6`,300:`#eedf7a`,400:`#ccb748`,500:`#b09b0f`,600:`#a08d0e`,700:`#7f7004`,800:`#4c4207`,900:`#3b3405`,1e3:`#262203`,1100:`#171402`,1200:`#0e0d01`},green:{100:`#eff9e6`,200:`#ddf0c9`,300:`#c6e8a1`,400:`#91c466`,500:`#6dab2c`,600:`#649c28`,700:`#4b7d04`,800:`#2f4913`,900:`#25390f`,1e3:`#18250a`,1100:`#0e1606`,1200:`#090e04`},purple:{100:`#f7f4fa`,200:`#eee7f3`,300:`#e5daec`,400:`#c6aed7`,500:`#af8ec7`,600:`#a47ebf`,700:`#8d59b1`,800:`#54356a`,900:`#422953`,1e3:`#2b1b36`,1100:`#191020`,1200:`#100a14`},fuschia:{100:`#fbf3f8`,200:`#f7e6f1`,300:`#f2d5e7`,400:`#e3a4cc`,500:`#d77db7`,600:`#d16aac`,700:`#b34496`,800:`#78116c`,900:`#5a0d51`,1e3:`#3f0939`,1100:`#31072c`,1200:`#1b0418`},pink:{100:`#fcf3f4`,200:`#f7e5e8`,300:`#f3d6dc`,400:`#e5a6b4`,500:`#d98193`,600:`#d96b81`,700:`#d62054`,800:`#75263d`,900:`#561d2e`,1e3:`#3c141f`,1100:`#2e0f18`,1200:`#17080c`},crimson:{100:`#fbf3f2`,200:`#f7e7e4`,300:`#f1d7d2`,400:`#e2aaa0`,500:`#d58678`,600:`#cf7464`,700:`#be4938`,800:`#811b12`,900:`#61140d`,1e3:`#440e09`,1100:`#340b07`,1200:`#1c0604`},orange:{100:`#fdf3ed`,200:`#fae7d8`,300:`#f7d7be`,400:`#eda875`,500:`#e58035`,600:`#d57428`,700:`#af5626`,800:`#693317`,900:`#4d2711`,1e3:`#361a0c`,1100:`#291409`,1200:`#150a04`},lemon:{100:`#fff7d4`,200:`#ffea97`,300:`#ffdc4f`,400:`#efab00`,500:`#c79100`,600:`#b68500`,700:`#8f6900`,800:`#563e00`,900:`#3f2e00`,1e3:`#2b2000`,1100:`#221800`,1200:`#110c00`},lime:{100:`#ecfae7`,200:`#d1f3c7`,300:`#b3eda3`,400:`#4fd12b`,500:`#45b025`,600:`#509f2d`,700:`#3d7e19`,800:`#2c491b`,900:`#203614`,1e3:`#16250e`,1100:`#111d0a`,1200:`#090e05`},mint:{100:`#d6ffeb`,200:`#9affce`,300:`#0afe89`,400:`#00d26d`,500:`#01b15c`,600:`#16a260`,700:`#2d7e55`,800:`#1b4b33`,900:`#143726`,1e3:`#0e261a`,1100:`#0b1d14`,1200:`#050e0a`},teal:{100:`#d4fefa`,200:`#88fdf1`,300:`#0bf8e1`,400:`#03cdb8`,500:`#02ad9c`,600:`#2a9d8f`,700:`#367a74`,800:`#254846`,900:`#1b3534`,1e3:`#122423`,1100:`#0e1c1a`,1200:`#070d0d`},azure:{100:`#eff7fe`,200:`#d9ecfc`,300:`#c4e0fa`,400:`#82bcf4`,500:`#4b9fee`,600:`#3191ea`,700:`#2770c3`,800:`#23446b`,900:`#1a3250`,1e3:`#122238`,1100:`#0e1a2a`,1200:`#070d14`},royal:{100:`#f4f5fc`,200:`#e7e9f8`,300:`#d8dcf4`,400:`#acb4e7`,500:`#8a96dd`,600:`#7a88d9`,700:`#4c67d3`,800:`#1833ab`,900:`#122680`,1e3:`#0d1a5a`,1100:`#0a1445`,1200:`#050a25`},kale:{100:`#ecf9f9`,200:`#daeded`,300:`#cbe2e1`,400:`#97bfbf`,500:`#6ba4a5`,600:`#4a9999`,700:`#40787a`,800:`#16494f`,900:`#063940`,1e3:`#03252a`,1100:`#061517`,1200:`#060e0e`}},{product:Ku,...qu}=Gu,Ju={primaryHue:`blue`,dangerHue:`red`,warningHue:`yellow`,successHue:`green`,neutralHue:`grey`,chromeHue:`kale`,variables:{dark:{background:{default:`neutralHue.1100`,raised:`neutralHue.1000`,recessed:`neutralHue.1200`,subtle:`neutralHue.1000`,emphasis:`neutralHue.600`,success:`successHue.1000`,warning:`warningHue.1000`,danger:`dangerHue.1000`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`rgba(white, 100)`},border:{default:`neutralHue.800`,emphasis:`neutralHue.600`,subtle:`neutralHue.900`,success:`successHue.900`,warning:`warningHue.900`,danger:`dangerHue.900`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`neutralHue.800`},foreground:{default:`neutralHue.300`,subtle:`neutralHue.500`,onEmphasis:`neutralHue.1100`,primary:`primaryHue.600`,success:`successHue.400`,warning:`warningHue.400`,danger:`dangerHue.400`,successEmphasis:`successHue.300`,warningEmphasis:`warningHue.300`,dangerEmphasis:`dangerHue.300`,disabled:`neutralHue.700`},shadow:{small:`rgba(neutralHue.1200, 1100)`,medium:`rgba(neutralHue.1200, 800)`,large:`rgba(neutralHue.1200, 1000)`}},light:{background:{default:`palette.white`,raised:`palette.white`,recessed:`neutralHue.100`,subtle:`neutralHue.100`,emphasis:`neutralHue.700`,success:`successHue.100`,warning:`warningHue.100`,danger:`dangerHue.100`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`rgba(neutralHue.700, 100)`},border:{default:`neutralHue.300`,emphasis:`neutralHue.600`,subtle:`neutralHue.200`,success:`successHue.300`,warning:`warningHue.300`,danger:`dangerHue.300`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`neutralHue.300`},foreground:{default:`neutralHue.900`,subtle:`neutralHue.700`,onEmphasis:`palette.white`,primary:`primaryHue.700`,success:`successHue.700`,warning:`warningHue.700`,danger:`dangerHue.700`,successEmphasis:`successHue.900`,warningEmphasis:`warningHue.900`,dangerEmphasis:`dangerHue.900`,disabled:`neutralHue.600`},shadow:{small:`rgba(neutralHue.1200, 200)`,medium:`rgba(neutralHue.1200, 200)`,large:`rgba(neutralHue.1200, 200)`}}}},Yu=(e=Zi)=>({...e,components:{...e.components,...Bu,...Vu,...Uu,...Hu,...Wu},borders:{...e.borders},borderRadii:{...e.borderRadii,xs:`2px`,sm:`4px`,md:`8px`,lg:`12px`,xl:`16px`,xxl:`24px`,full:`9999px`},borderStyles:{...e.borderStyles},borderWidths:{...e.borderWidths},breakpoints:{...e.breakpoints},fonts:{...e.fonts},fontSizes:{...e.fontSizes},fontWeights:{...e.fontWeights},iconSizes:{...e.iconSizes},lineHeights:{...e.lineHeights},opacity:{...e.opacity},shadowWidths:{...e.shadowWidths},shadows:{...e.shadows},space:{...e.space},colors:{...e.colors,...Ju,base:e.colors?.base??`light`},palette:{...e.palette,...qu}});Yu();var Xu=({theme:e=Yu,...t})=>(0,K.jsx)(_i,{theme:e,...t}),Zu=[{id:`fillmore`,name:`Fillmore`,role:`Admin`,email:`fill.more@email.com`,status:`Active`,brand:`Dinoco`,extraBrands:1,group:`Support`,productAccess:`Support, Knowledge, AI agents`,lastSignIn:`Never`,aiAgentsAccess:`Full Access`},{id:`mater`,name:`T. Mater`,role:`Test API`,email:`t.mater@email.com`,status:`Active`,brand:`Rusteze`,extraBrands:0,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:`No Access`},{id:`jams-concord`,name:`Jams Concord`,role:`Test API`,email:`jams@email.com`,status:`Active`,brand:`Dinoco`,extraBrands:1,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:`Limited Access`},{id:`kim-pop`,name:`Kim Pop`,role:`Test API`,email:`email@email.com`,status:`Active`,brand:`Dinoco`,extraBrands:1,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:`Full Access`},{id:`masked-agent`,name:`Masked Agent James Carter`,role:`Test API`,email:`masked.agent.james.carter@gmail.com`,status:`Active`,brand:`Rusteze`,extraBrands:0,group:`Support`,productAccess:`Support, Knowledge, Chat`,lastSignIn:`Nov 14, 2025`,aiAgentsAccess:`No Access`}],Qu={admin:[`Lightning McQueen`,`Sally Carrera`,`Doc Hudson`,`Ramone`,`Flo`,`Sheriff`],contributor:[`Boost`,`DJ`,`Wingo`,`Snot Rod`,`Finn McMissile`,`Holley Shiftwell`,`Francesco Bernoulli`,`Professor Zundapp`,`Grem`,`Acer`],"light-agent":[`Cruz Ramirez`,`Smokey`,`Jackson Storm`,`Sterling`,`Natalie Certain`,`Miss Fritter`,`Cal Weathers`,`Bobby Swift`,`Brick Yardley`,`River Scott`,`Junior Moon`,`Louise Nash`,`Darrell Cartrip`,`Bob Cutlass`,`Brent Mustangburger`],advisor:[`Woody`,`Buzz Lightyear`,`Jessie`,`Bullseye`,`Rex`,`Hamm`,`Slinky Dog`,`Bo Peep`,`Mr. Potato Head`,`Mrs. Potato Head`,`Forky`,`Ducky`,`Bunny`,`Duke Caboom`,`Gabby Gabby`,`Lotso Bear`,`Ken`,`Barbie`,`Wheezy`,`RC`]},$u={admin:`Admin`,contributor:`Contributor`,"light-agent":`Subtle agent`,advisor:`Advisor`},ed=e=>e.toLowerCase().replace(/[^a-z]+/g,`-`).replace(/-$/,``),td={no_access:`No access`,client_admin:`Client admin`,client_editor:`Client editor`,client_user:`Client user`},nd=[{id:`support`,name:`Support`},{id:`knowledge`,name:`Knowledge`},{id:`analytics`,name:`Analytics`},{id:`voice`,name:`Voice`},{id:`chat`,name:`Chat`},{id:`ai-agents`,name:`AI agents`},{id:`qa`,name:`Quality assurance`,disabled:!0}],rd=nd.filter(e=>e.id!==`chat`),id=nd.filter(e=>!e.disabled&&e.id!==`ai-agents`),ad=rd.filter(e=>!e.disabled&&e.id!==`ai-agents`),od=[`No Access`,`Full Access`,`Limited Access`],sd=Object.entries(Qu).flatMap(([e,t])=>t.map((t,n)=>({id:ed(t),name:t,role:$u[e],email:`${ed(t)}@z3nrusteze.zendesk.com`,status:`Active`,brand:n%2==0?`Dinoco`:`Rusteze`,extraBrands:0,group:`Support`,productAccess:`Support, Knowledge`,lastSignIn:`Never`,aiAgentsAccess:od[n%3]}))),cd=[...Zu,...sd],ld=[`No access`,`Client admin`,`Client editor`,`Client user`],ud=Object.fromEntries(cd.map((e,t)=>[e.id,Object.fromEntries(id.map((e,n)=>[e.id,ld[(t+n)%ld.length]]))])),dd=Object.fromEntries(Object.entries(Qu).map(([e,t])=>[e,t.map(ed)])),fd=[{id:`admin`,name:`Admin`,type:`System`,description:`Can manage all settings, except billing`},{id:`contributor`,name:`Contributor`,type:`System`,description:`Can provide limited support`},{id:`light-agent`,name:`Subtle agent`,type:`System`,description:`Can view and add private comments to tickets`},{id:`advisor`,name:`Advisor`,type:`Custom`,description:`Can automate ticket workflows, manage channels and make private comments on tickets`}],pd=[{product:`Support`,role:`Admin`,access:`yes`,icon:`support`},{product:`Knowledge`,role:`Admin`,access:`checkbox`,checked:!0,hasInfo:!0,icon:`knowledge`},{product:`Analytics`,role:`Admin`,access:`checkbox`,checked:!0,hasInfo:!0,icon:`analytics`},{product:`Voice`,role:`Agent`,access:`checkbox`,checked:!1,icon:`voice`},{product:`Chat`,role:`Agent`,access:`checkbox`,checked:!1,icon:`chat`},{product:`AI agents`,role:`Client admin`,access:`ai_agents`,checked:!0,icon:`ai_agents`},{product:`Quality assurance`,role:null,access:`disabled`,message:`Subscription limit reached`,icon:`qa`}],md=(0,g.createContext)();function hd({children:e}){let[t,n]=(0,g.useState)(`v3`),[r,i]=(0,g.useState)({}),[a,o]=(0,g.useState)(fd),s={optedIn:!1,saved:!1,accessLevel:null},c=e=>r[e]||s,l=(e,t)=>{i(n=>({...n,[e]:{...s,...n[e],...t}}))},[u,d]=(0,g.useState)(null),[f,p]=(0,g.useState)(dd),m={optedIn:!1,saved:!1,accessLevel:null},[h,_]=(0,g.useState)({});return(0,K.jsx)(md.Provider,{value:{version:t,setVersion:n,getAiAgentsState:c,updateAiAgentsState:l,roles:a,addRole:e=>{o(t=>[...t,e])},aiAgentsRoleId:u,setAiAgentsRoleId:d,roleAssignments:f,assignMembersToRole:(e,t)=>{p(n=>{let r=n[e]||[],i=Array.from(new Set([...r,...t]));return{...n,[e]:i}})},isMemberAiAgentsMigrated:e=>u?(f[u]||[]).includes(e):!1,getMemberAssignedRole:e=>{let t=Object.keys(f).find(t=>(f[t]||[]).includes(e));return t&&a.find(e=>e.id===t)||null},getProductAccess:(e,t)=>h[e]?.[t]||m,updateProductAccess:(e,t,n)=>{_(r=>({...r,[e]:{...r[e]||{},[t]:{...m,...r[e]?.[t],...n}}}))},saveProductAccess:e=>{_(t=>{let n=t[e];if(!n)return t;let r=Object.fromEntries(Object.entries(n).map(([e,t])=>[e,t.optedIn?{...t,saved:!0}:t]));return{...t,[e]:r}})},copyProductAccess:(e,t)=>{_(n=>{let{[e]:r,...i}=n;if(!r)return n;let a=Object.fromEntries(Object.entries(r).map(([e,t])=>[e,t.optedIn?{...t,saved:!0}:t]));return{...i,[t]:a}})}},children:e})}function gd(){return(0,g.useContext)(md)}var _d=L.div`
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
`,vd=L.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: #ffffff;
  border-bottom: 1px solid #e9ebed;
`,yd=L.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,bd=L.button`
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
`,xd=L.div`
  padding: 4px 16px 16px;
`,Sd=L.div`
  padding: 16px 0;

  & + & {
    border-top: 1px solid #e9ebed;
  }
`,Cd=L.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
`,wd=L.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Td=L.span`
  flex-shrink: 0;
  font-size: 12px;
  color: #87929d;
`,Ed=L.p`
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.5;
  color: #49545c;
`,Dd=L.div`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`,Od=L.h3`
  margin: 0 0 4px;
  font-size: 12px;
  font-weight: 600;
  color: #68737d;
`,kd=L.ul`
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  line-height: 1.5;
  color: #2f3941;

  li + li {
    margin-top: 4px;
  }
`,Ad=L.button`
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
`;function jd({entries:e,versions:t,activeVersionId:n,onGoToVersion:r,onClose:i}){let a=e=>t?.find(t=>t.id===e)?.label??e;return(0,K.jsxs)(_d,{role:`dialog`,"aria-label":`Version notes`,children:[(0,K.jsxs)(vd,{children:[(0,K.jsx)(yd,{children:`Version notes`}),(0,K.jsx)(bd,{type:`button`,onClick:i,"aria-label":`Close version notes`,children:(0,K.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:(0,K.jsx)(`path`,{d:`M1 1L11 11M11 1L1 11`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})})]}),(0,K.jsx)(xd,{children:e?.map(e=>{let t=e.versionId===n;return(0,K.jsxs)(Sd,{children:[(0,K.jsxs)(Cd,{children:[(0,K.jsx)(wd,{children:a(e.versionId)}),(0,K.jsx)(Td,{children:e.date})]}),(0,K.jsx)(Ed,{children:e.summary}),e.sections?.map((e,t)=>(0,K.jsxs)(Dd,{children:[e.title&&(0,K.jsx)(Od,{children:e.title}),(0,K.jsx)(kd,{children:e.bullets.map((e,t)=>(0,K.jsx)(`li`,{children:e},t))})]},t)),(0,K.jsx)(Ad,{type:`button`,disabled:t,onClick:()=>!t&&r?.(e.versionId),children:t?`Currently viewing`:`Go to ${a(e.versionId)} →`})]},e.versionId)})})]})}var Md=9500,Nd=L.header`
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: ${48}px;
  padding: 0 16px;
  background-color: #1a1f24;
  color: #ffffff;
  font-family: inherit;
  user-select: none;
`,Pd=L.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
`,Fd=L.span`
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Id=L.span`
  flex-shrink: 0;
  color: #363d44;
  font-size: 13px;
  line-height: 1;
`,Ld=L.span`
  flex-shrink: 0;
  color: #7c8590;
  font-size: 12px;
  white-space: nowrap;
`,Rd=L.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,zd=L.div`
  position: relative;
`,Bd=L.button`
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
`,Vd=L.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
`,Hd=L.span`
  font-weight: 600;
`,Ud=L.span`
  font-weight: 400;
  color: #7c8590;
  font-size: 12px;
`,Wd=L.svg`
  flex-shrink: 0;
  transform: ${e=>e.$open?`rotate(180deg)`:`none`};
`,Gd=({$open:e})=>(0,K.jsx)(Wd,{$open:e,width:`8`,height:`5`,viewBox:`0 0 8 5`,fill:`currentColor`,"aria-hidden":`true`,focusable:`false`,children:(0,K.jsx)(`path`,{d:`M0 0 L4 5 L8 0 Z`})}),Kd=L.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: ${Md};
  padding: 4px 0;
  border: 1px solid #363d44;
  border-radius: 4px;
  background-color: #262c32;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  width: max-content;
`,qd=L.button`
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
`,Jd=L.span`
  flex-shrink: 0;
  width: 12px;
  color: #6ba4e0;
  font-size: 11px;
`,Yd=L.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`,Xd=L.span`
  font-weight: 600;
`,Zd=L.span`
  font-weight: 400;
  font-size: 12px;
  color: #7c8590;
`,Qd=L.div`
  height: 1px;
  background: #363d44;
  margin: 4px 0;
`,$d=L.div`
  padding: 5px 14px 2px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #555e66;
`,ef=L.div`
  display: flex;
  align-items: center;
`,tf=L.div`
  position: relative;
`,nf=L.button`
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
`,rf=()=>(0,K.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,K.jsx)(`path`,{d:`M3 1.5h6l2 2v9H3v-11z`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinejoin:`round`}),(0,K.jsx)(`path`,{d:`M5 6h4M5 8.5h4`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`})]});function af({title:e,meta:t,versions:n,versionId:r,onVersionChange:i,versionLabel:a=`Version`,versionNotes:o,commentSlotRef:s}){let[c,l]=(0,g.useState)(!1),[u,d]=(0,g.useState)(!1),f=(0,g.useRef)(null),p=(0,g.useRef)(null),m=n?.find(e=>e.id===r),h=n?.filter(e=>!e.archived)??[],_=n?.filter(e=>e.archived)??[];return(0,g.useEffect)(()=>{if(!c)return;let e=e=>{f.current?.contains(e.target)||l(!1)},t=e=>{e.key===`Escape`&&l(!1)};return document.addEventListener(`pointerdown`,e,!0),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e,!0),document.removeEventListener(`keydown`,t)}},[c]),(0,g.useEffect)(()=>{if(!u)return;let e=e=>{p.current?.contains(e.target)||d(!1)},t=e=>{e.key===`Escape`&&d(!1)};return document.addEventListener(`pointerdown`,e,!0),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e,!0),document.removeEventListener(`keydown`,t)}},[u]),(0,K.jsxs)(Nd,{children:[(0,K.jsxs)(Pd,{children:[(0,K.jsx)(Fd,{children:e}),t&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Id,{"aria-hidden":`true`,children:`|`}),(0,K.jsx)(Ld,{children:t})]})]}),(0,K.jsxs)(Rd,{children:[n?.length>0&&(0,K.jsxs)(zd,{ref:f,children:[(0,K.jsxs)(Bd,{type:`button`,$open:c,onClick:()=>{d(!1),l(e=>!e)},"aria-expanded":c,"aria-haspopup":`listbox`,children:[(0,K.jsxs)(Vd,{children:[(0,K.jsx)(Hd,{children:m?.label??a}),m?.description&&(0,K.jsx)(Ud,{children:m.description})]}),(0,K.jsx)(Gd,{$open:c})]}),c&&(0,K.jsxs)(Kd,{role:`listbox`,"aria-label":a,children:[h.map(e=>(0,K.jsxs)(qd,{type:`button`,role:`option`,"aria-selected":e.id===r,$selected:e.id===r,onClick:()=>{l(!1),e.id!==r&&i?.(e.id)},children:[(0,K.jsx)(Jd,{children:e.id===r?`✓`:``}),(0,K.jsxs)(Yd,{children:[(0,K.jsx)(Xd,{children:e.label}),e.description&&(0,K.jsx)(Zd,{children:e.description})]})]},e.id)),_.length>0&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Qd,{}),(0,K.jsx)($d,{children:`Archive`}),_.map(e=>(0,K.jsxs)(qd,{type:`button`,role:`option`,"aria-selected":e.id===r,$selected:e.id===r,onClick:()=>{l(!1),e.id!==r&&i?.(e.id)},children:[(0,K.jsx)(Jd,{children:e.id===r?`✓`:``}),(0,K.jsxs)(Yd,{children:[(0,K.jsx)(Xd,{children:e.label}),e.description&&(0,K.jsx)(Zd,{children:e.description})]})]},e.id))]})]})]}),o?.length>0&&(0,K.jsxs)(tf,{ref:p,children:[(0,K.jsxs)(nf,{type:`button`,$open:u,onClick:()=>{l(!1),d(e=>!e)},"aria-expanded":u,"aria-haspopup":`dialog`,children:[(0,K.jsx)(rf,{}),`Version notes`]}),u&&(0,K.jsx)(jd,{entries:o,versions:n,activeVersionId:r,onGoToVersion:e=>{d(!1),e!==r&&i?.(e)},onClose:()=>d(!1)})]}),(0,K.jsx)(ef,{ref:s})]})]})}var of=[{versionId:`v3.5`,date:`Sep 2026`,summary:`Same panel redesign and filter drawer as V3, but topic filters strip matching permissions out of capsules and hide empty ones.`,sections:[{title:`Deep filters`,bullets:[`Same Flora Filter button → Drawer (with scrim) as V3`,`Topic filters remove non-matching permission rows inside capsules`,`Capsules with nothing left to show are hidden`,`Matching content keeps its capsule title for context`]}]},{versionId:`v3`,date:`Sep 2026`,summary:`Panel redesign for centralized product access: grouped Settings vs Products, no opt-ins, merged Knowledge, and Flora filters that show or hide whole capsules.`,sections:[{title:`Role page`,bullets:[`Settings and Products grouped as separate sections`,`Product access goes straight to radios (no opt-in) for Support, Knowledge, Analytics, Voice, AI agents, QA`,`Chat removed (sunset); Knowledge settings + product access merged into one capsule`,`Tickets → Security and privacy unchanged; Reporting stays in Settings`,`Search permissions + Flora Filter drawer (scrim); filters show/hide whole capsules only`,`Pre-filter: Only available settings (clears to show all, including plan-limited QA)`,`Hidden search tags on capsules for discoverability`,`Default version on load`]}]},{versionId:`v2`,date:`Aug 2026`,summary:`Scales the AI agents access change preview to every product on the role, and adds a search field for the settings themselves.`,sections:[{title:`Role page`,bullets:[`One opt-in capsule per product (Support, Knowledge, Analytics, Voice, Chat, AI agents), following the AI agents opt-in pattern`,`Quality assurance renders disabled, showing "Subscription limit reached"`,`AI agents capsule starts closed, like every other capsule`,`Search permissions field above the capsules that highlights matches in yellow/300 and opens any capsule with a hit`]},{title:`Team members panel`,bullets:[`A single "Access change(s)" warning per member, listing every product that would change`,`Each line: product name, then a bullet with current access to new access`]}]},{versionId:`v1`,date:`Jul 2026`,summary:`The original custom roles flow, an AI agents only access change preview.`,sections:[{title:null,bullets:[`AI agents capsule: opt-in checkbox, then access-level radios (No access / Client admin / Client editor / Client user)`,`Team members side panel warns when a role change would affect a member’s AI agents access`,`Assign role modal: search and multi-select team members to assign`]}]}],sf=`data-comment-root`,cf=`data-comment-anchor`,lf=[`[data-comment-anchor]`,`tr`,`th`,`button`,`a[href]`,`label`,`input`,`select`,`section`,`nav`],uf=()=>document.querySelector(`[${sf}]`),df=(e,t)=>{let n=uf();if(!n)return null;let r=document.elementsFromPoint(e,t).find(e=>n.contains(e));if(!r)return null;for(let e of lf){let t=r.closest(e);if(t&&n.contains(t))return t}return r},ff=e=>{let t=uf();if(!t||!t.contains(e))return null;let n=[],r=e;for(;r&&r!==t;){let e=r.parentElement;if(!e)return null;let t=r.tagName.toLowerCase(),i=[...e.children].filter(e=>e.tagName===r.tagName);n.unshift(i.length>1?`${t}:nth-of-type(${i.indexOf(r)+1})`:t),r=e}return n.join(` > `)},pf=e=>{if(!e.children.length){let t=(e.textContent||``).replace(/\s+/g,` `).trim();return t&&t!==`—`?[t]:[]}return[...e.children].flatMap(pf)},mf=e=>{if(!e)return``;let t=e.getAttribute(`aria-label`);if(t)return t.replace(/\s+/g,` `).trim().slice(0,80);let n=pf(e);return n.length?n.join(` · `).slice(0,80):(e.textContent||``).replace(/\s+/g,` `).trim().slice(0,80)},hf=(e,t,n)=>{let r=df(e,t);if(!r)return null;let i=r.getBoundingClientRect();return{context:n,id:r.getAttribute(cf)||null,path:ff(r),label:mf(r),fraction:{x:i.width?(e-i.left)/i.width:.5,y:i.height?(t-i.top)/i.height:.5}}},gf=e=>{let t=uf();if(!t||!e)return null;if(e.id){let n=t.querySelector(`[${cf}="${CSS.escape(e.id)}"]`);if(n)return n}if(!e.path)return null;let n=null;try{n=t.querySelector(e.path)}catch{return null}return n},_f=e=>{let t=gf(e);if(!t)return null;let n=t.getBoundingClientRect();if(!n.width&&!n.height)return null;let r=e.fraction||{x:.5,y:.5};return{x:n.left+r.x*n.width,y:n.top+r.y*n.height,drifted:!!e.label&&mf(t)!==e.label}},vf=(e,t)=>{if(!e||!t)return!1;let n=new Set([...Object.keys(e),...Object.keys(t)]);for(let r of n)if(e[r]!==t[r])return!1;return!0},yf=`https://thaugdzjxphjhviwdwgi.supabase.co`,bf=`sb_publishable_gnUhxN43I7bY6dKrNkVmPA_wjRmciBQ`,xf=`prototype_comments`,Sf=`prototype_comments_view`,Cf=`id,project,author,body,parent_id,number,anchor,resolved,created_at`,wf=`custom-roles-all-plans`,Tf=!!bf,Ef=`prototype-comments:${wf}`,Df=`prototype-comments:owner-key`,Of=()=>{try{return crypto.randomUUID()}catch{return`k-${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`}},kf=()=>{try{let e=window.localStorage.getItem(Df);if(e)return e;let t=Of();return window.localStorage.setItem(Df,t),t}catch{return Of()}},Af=()=>{try{return JSON.parse(window.localStorage.getItem(Ef)||`[]`)}catch{return[]}},jf=e=>{try{window.localStorage.setItem(Ef,JSON.stringify(e))}catch{}},Mf=()=>({apikey:bf,Authorization:`Bearer ${bf}`,"Content-Type":`application/json`,"x-comment-key":kf()}),Nf=async(e,t={})=>{let n=await fetch(`${yf}/rest/v1/${e}`,{...t,headers:{...Mf(),...t.headers}});if(!n.ok){let e=await n.text();throw n.status===403?Error(`Supabase 403: the comment was rejected by its access rules. If this happens on every comment, see src/comments/SETUP.md.`):Error(`Supabase ${n.status}: ${e.slice(0,200)}`)}return n.status===204?null:n.json()},Pf=async()=>{if(!Tf)return Af().map(e=>Rf({...e,is_mine:!0}));let e=`project=eq.${encodeURIComponent(wf)}&order=created_at.asc`;try{return(await Nf(`${Sf}?${e}`)).map(Rf)}catch(t){if(!/\b404\b/.test(t.message))throw t;return(await Nf(`${xf}?${e}&select=${Cf}`)).map(Rf)}},Ff=async({author:e,body:t,anchor:n,parentId:r=null,number:i=null})=>{let a={project:wf,author:e,body:t,parent_id:r,number:i,anchor:n||null,resolved:!1};if(!Tf){let e=Af(),t={...a,id:`local-${e.length+1}-${String(e.length)}`,created_at:new Date().toISOString(),is_mine:!0};return jf([...e,t]),Rf(t)}let[o]=await Nf(`${xf}?select=${Cf}`,{method:`POST`,headers:{Prefer:`return=representation`},body:JSON.stringify(a)});return Rf({...o,is_mine:!0})},If=async(e,t)=>{if(!Tf){jf(Af().map(n=>n.id===e?{...n,resolved:t}:n));return}await Nf(`${xf}?id=eq.${encodeURIComponent(e)}`,{method:`PATCH`,body:JSON.stringify({resolved:t})})},Lf=async e=>{if(!Tf){jf(Af().filter(t=>t.id!==e&&t.parent_id!==e));return}let t=await Nf(`${xf}?id=eq.${encodeURIComponent(e)}&select=id`,{method:`DELETE`,headers:{Prefer:`return=representation`}});if(!t||t.length===0)throw Error(`That comment is already gone — someone may have deleted it first.`)},Rf=e=>({id:e.id,author:e.author,body:e.body,parentId:e.parent_id??null,number:e.number??null,anchor:e.anchor??null,resolved:!!e.resolved,createdAt:e.created_at,isMine:!!e.is_mine}),zf=`prototype-comments:author`,Bf=()=>{try{return window.localStorage.getItem(zf)||``}catch{return``}},Vf=e=>{try{window.localStorage.setItem(zf,e)}catch{}},Hf=9e3,Uf=L.button`
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
`,Wf=L.div`
  position: fixed;
  z-index: ${Hf};
  cursor: crosshair;
  /* No background at all: a tint over the design would change the colours being
     reviewed, which is the one thing a design review can't tolerate. */
  background-color: transparent;
`,Gf=L.button`
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
`,Kf=L.div`
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
`,qf=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #c2f0e0;
  font-size: 12px;
`,Jf=L.div`
  display: flex;
  gap: 4px;
`,Yf=L.button`
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
`,Xf=L.div`
  margin-bottom: 10px;

  & + & {
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }
`,Zf=L.div`
  margin-bottom: 2px;
  color: #c2f0e0;
  font-size: 12px;
`,Qf=L.div`
  white-space: pre-wrap;
  word-break: break-word;
`,$f=L.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ep=L.textarea`
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
`,tp=L.input`
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
`,np=L.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,rp=L.button`
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
`,ip=L.div`
  margin-bottom: 8px;
  color: #c2f0e0;
  font-size: 12px;
  word-break: break-word;
`,ap=Oi`
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
`,op=L.aside`
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
`,sp=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px;
  border-bottom: 1px solid #eae9e8;
  font-size: 14px;
  font-weight: 600;
`,cp=L.div`
  flex: 1;
  box-sizing: border-box;
  padding: 8px;
  overflow-y: auto;
`,lp=L.button`
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
`,up=L.div`
  display: flex;
  gap: 6px;
  margin-bottom: 4px;
  color: #646864;
  font-size: 12px;
`,dp=L.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`,fp=L.div`
  margin-top: 4px;
  overflow: hidden;
  color: #646864;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,pp=L.div`
  padding: 16px;
  color: #646864;
  font-size: 14px;
`,mp={error:{background:`#fff0f1`,color:`#2f3130`},warn:{background:`#fff7d6`,color:`#2f3130`},info:{background:`#f7f7f7`,color:`#646864`}},hp=L.div`
  box-sizing: border-box;
  padding: 8px 16px;
  background-color: ${e=>(mp[e.$tone]||mp.info).background};
  color: ${e=>(mp[e.$tone]||mp.info).color};
  font-size: 12px;
`,gp=24,_p=200,vp=()=>{let e=[...document.querySelectorAll(`nav`)].map(e=>e.getBoundingClientRect()).find(e=>e.left<=0&&e.width>0);return Math.min((e?.width||0)+gp,_p)},yp=(e,t)=>{let n=new Date(e).getTime();if(Number.isNaN(n))return``;let r=Math.max(0,Math.round((t-n)/1e3));if(r<60)return`just now`;let i=Math.round(r/60);if(i<60)return`${i}m ago`;let a=Math.round(i/60);if(a<24)return`${a}h ago`;let o=Math.round(a/24);return o<31?`${o}d ago`:`${Math.round(o/30)}mo ago`};function bp({context:e,onRestoreContext:t,toggleLeft:n,toggleContainer:r}){let[i,a]=(0,g.useState)(!1),[o,s]=(0,g.useState)([]),[c,l]=(0,g.useState)(null),[u,d]=(0,g.useState)(Bf),[f,p]=(0,g.useState)(()=>!Bf()),[m,h]=(0,g.useState)(null),[_,y]=(0,g.useState)(null),[b,x]=(0,g.useState)(``),[S,C]=(0,g.useState)(``),[w,ee]=(0,g.useState)(0),[te,ne]=(0,g.useState)(()=>Date.now()),[T,E]=(0,g.useState)(gp),re=n??T;(0,g.useEffect)(()=>{let e=!1;return Pf().then(t=>{e||s(t)}).catch(t=>{e||l(t.message)}),()=>{e=!0}},[]),(0,g.useEffect)(()=>{if(!i)return;let e=()=>ee(e=>e+1),t=uf();window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e);let n=new ResizeObserver(e);t&&n.observe(t);let r=setTimeout(e,60);return()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e),n.disconnect(),clearTimeout(r)}},[i]),(0,g.useEffect)(()=>{if(r||n!==void 0)return;let e=()=>E(vp()),t=requestAnimationFrame(e),i=setTimeout(e,200);return window.addEventListener(`resize`,e),()=>{cancelAnimationFrame(t),clearTimeout(i),window.removeEventListener(`resize`,e)}},[n,r]),(0,g.useEffect)(()=>{if(!i)return;let e=setInterval(()=>ne(Date.now()),3e4);return()=>clearInterval(e)},[i]),(0,g.useEffect)(()=>{if(!i)return;let e=e=>{e.key===`Escape`&&(m?h(null):_?y(null):a(!1))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[i,m,_]);let D=(0,g.useMemo)(()=>o.filter(e=>!e.parentId),[o]),ie=(0,g.useCallback)(e=>o.filter(t=>t.parentId===e),[o]),ae=(0,g.useMemo)(()=>D.map(t=>{if(!vf(t.anchor?.context,e))return null;let n=_f(t.anchor);return n?{comment:t,position:n}:null}).filter(Boolean),[D,e,w]),O=(0,g.useMemo)(()=>D.filter(t=>!vf(t.anchor?.context,e)),[D,e]),oe=(0,g.useMemo)(()=>{let e=uf();if(!e)return null;let t=e.getBoundingClientRect();return{left:t.left,top:t.top,width:t.width,height:t.height}},[w]),se=(0,g.useMemo)(()=>m?_f(m.anchor):null,[m,w]),k=_?o.find(e=>e.id===_):null,ce=(0,g.useMemo)(()=>k?_f(k.anchor):null,[k,w]),A=t=>{if(t.metaKey||t.ctrlKey||t.altKey){let e=document.elementsFromPoint(t.clientX,t.clientY).find(e=>uf()?.contains(e))?.closest(`a[href], button, input, select, [role="button"]`);e&&e.click();return}let n=hf(t.clientX,t.clientY,e);if(!n){y(null),h(null);return}y(null),x(``),h({anchor:n})},le=async e=>{if(e.preventDefault(),!(!b.trim()||!u.trim())){Vf(u.trim()),p(!1);try{let e=await Ff({author:u.trim(),body:b.trim(),anchor:m.anchor,number:D.length+1});s(t=>[...t,e]),h(null),x(``),y(e.id)}catch(e){l(e.message)}}},ue=async e=>{if(e.preventDefault(),!(!S.trim()||!u.trim()||!k)){Vf(u.trim()),p(!1);try{let e=await Ff({author:u.trim(),body:S.trim(),anchor:null,parentId:k.id});s(t=>[...t,e]),C(``)}catch(e){l(e.message)}}},de=async e=>{try{await If(e.id,!e.resolved),s(t=>t.map(t=>t.id===e.id?{...t,resolved:!e.resolved}:t))}catch(e){l(e.message)}},fe=async e=>{try{await Lf(e.id),s(t=>t.filter(t=>t.id!==e.id&&t.parentId!==e.id)),_===e.id&&y(null)}catch(e){l(e.message)}},pe=n=>{let r=n.anchor?.context;r&&!vf(r,e)&&t?.(r),y(n.id),h(null),C(``);let i=0,a=()=>{let e=gf(n.anchor);if(e){e.scrollIntoView({block:`center`,inline:`nearest`}),ee(e=>e+1);return}i++<10&&requestAnimationFrame(a)};requestAnimationFrame(a)},me=D.filter(e=>!e.resolved).length,he=(0,K.jsxs)(Uf,{type:`button`,$inline:!!r,style:r?void 0:{left:re},$active:i,onClick:()=>{a(e=>!e),h(null),y(null)},"aria-pressed":i,children:[i?`Exit comment mode`:`Comment`,!i&&me>0?` (${me})`:``]});return(0,K.jsxs)(K.Fragment,{children:[r?(0,v.createPortal)(he,r):he,i&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(ap,{}),oe&&(0,K.jsx)(Wf,{onClick:A,style:{left:oe.left,top:oe.top,width:oe.width,height:oe.height}}),ae.map(({comment:e,position:t})=>(0,K.jsx)(Gf,{type:`button`,style:{left:t.x,top:t.y},$resolved:e.resolved,$dimmed:_!==null&&_!==e.id,onClick:t=>{t.stopPropagation(),h(null),C(``),y(e.id===_?null:e.id)},"aria-label":`Comment ${e.number??``} by ${e.author}`,children:e.number??`•`},e.id)),m&&se&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Gf,{as:`div`,style:{left:se.x,top:se.y},"aria-hidden":`true`,children:`+`}),(0,K.jsxs)(Kf,{style:Tp(se),onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(qf,{children:[(0,K.jsx)(`span`,{children:`New comment`}),(0,K.jsx)(Jf,{children:(0,K.jsx)(Yf,{type:`button`,onClick:()=>h(null),children:`Cancel`})})]}),m.anchor.label&&(0,K.jsxs)(ip,{children:[`On: `,m.anchor.label]}),(0,K.jsxs)($f,{onSubmit:le,children:[f&&(0,K.jsx)(tp,{value:u,onChange:e=>d(e.target.value),placeholder:`Your name`,"aria-label":`Your name`}),(0,K.jsx)(ep,{value:b,onChange:e=>x(e.target.value),placeholder:`Add a comment`,"aria-label":`Comment`,autoFocus:!0}),(0,K.jsx)(np,{children:(0,K.jsx)(rp,{type:`submit`,disabled:!b.trim()||!u.trim(),children:`Comment`})})]})]})]}),k&&ce&&!m&&(0,K.jsxs)(Kf,{style:Tp(ce),onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(qf,{children:[(0,K.jsxs)(`span`,{children:[`#`,k.number??`—`,ce.drifted?` · content changed since`:``]}),(0,K.jsxs)(Jf,{children:[(0,K.jsx)(Yf,{type:`button`,onClick:()=>de(k),children:k.resolved?`Unresolve`:`Resolve`}),(0,K.jsx)(Yf,{type:`button`,onClick:()=>fe(k),children:`Delete`}),(0,K.jsx)(Yf,{type:`button`,onClick:()=>y(null),children:`Close`})]})]}),(0,K.jsxs)(Xf,{children:[(0,K.jsxs)(Zf,{children:[k.author,` · `,yp(k.createdAt,te)]}),(0,K.jsx)(Qf,{children:k.body})]}),ie(k.id).map(e=>(0,K.jsxs)(Xf,{children:[(0,K.jsxs)(Zf,{children:[e.author,` · `,yp(e.createdAt,te)]}),(0,K.jsx)(Qf,{children:e.body})]},e.id)),(0,K.jsxs)($f,{onSubmit:ue,children:[f&&(0,K.jsx)(tp,{value:u,onChange:e=>d(e.target.value),placeholder:`Your name`,"aria-label":`Your name`}),(0,K.jsx)(ep,{value:S,onChange:e=>C(e.target.value),placeholder:`Reply`,"aria-label":`Reply`}),(0,K.jsx)(np,{children:(0,K.jsx)(rp,{type:`submit`,disabled:!S.trim()||!u.trim(),children:`Reply`})})]})]}),(0,K.jsxs)(op,{"data-comment-sidebar":`true`,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(sp,{children:[(0,K.jsxs)(`span`,{children:[`Comments (`,D.length,`)`]}),(0,K.jsx)(Yf,{type:`button`,style:{color:`#646864`},onClick:()=>a(!1),children:`Close`})]}),Tf?(0,K.jsx)(hp,{$tone:`info`,children:`Shared — everyone with this link sees these comments. You can delete your own.`}):(0,K.jsx)(hp,{$tone:`warn`,children:`Stored in this browser only — others won't see these. See src/comments/SETUP.md to share them.`}),c&&(0,K.jsx)(hp,{$tone:`error`,children:c}),O.length>0&&(0,K.jsxs)(hp,{$tone:`info`,children:[O.length,` comment`,O.length===1?``:`s`,` on another view — click to jump there.`]}),(0,K.jsx)(hp,{$tone:`info`,children:`Click the design to comment. ⌘-click (or Ctrl-click) to navigate without leaving comment mode.`}),(0,K.jsx)(cp,{children:D.length===0?(0,K.jsx)(pp,{children:`Click anywhere on the design to leave a comment.`}):D.map(e=>(0,K.jsxs)(lp,{type:`button`,$active:e.id===_,$resolved:e.resolved,onClick:()=>pe(e),children:[(0,K.jsxs)(up,{children:[(0,K.jsxs)(`span`,{children:[`#`,e.number??`—`]}),(0,K.jsx)(`span`,{children:e.author}),(0,K.jsx)(`span`,{children:yp(e.createdAt,te)}),e.resolved&&(0,K.jsx)(`span`,{children:`· resolved`})]}),(0,K.jsx)(dp,{children:e.body}),e.anchor?.label&&(0,K.jsxs)(fp,{children:[`On: `,e.anchor.label]})]},e.id))})]})]})]})}var xp=300,Sp=320,Cp=320,wp=12,Tp=e=>{let t=window.innerWidth-Cp-xp-wp,n=Math.max(wp,Math.min(e.x+16,t)),r=window.innerHeight-Sp-wp;return{left:n,top:Math.max(wp,Math.min(e.y,r))}},Ep=L.nav`
  width: 240px;
  min-width: 240px;
  background: transparent;
  overflow-y: auto;
  padding: 16px 12px;
  height: 100%;
  box-sizing: border-box;
`,Dp=L.div`
  font-size: 12px;
  font-weight: 600;
  color: #68737d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 12px 4px;
  margin-top: ${e=>e.$first?`0`:`8px`};
`,Op=L.div`
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
`,kp=L.div`
  font-size: 15px;
  font-weight: 600;
  color: #2f3941;
  padding: 4px 12px 12px;
`;function Ap(){let e=We(),t=Ke(),n=e.pathname,r=n.startsWith(`/team-members`),i=n.startsWith(`/roles`);return(0,K.jsxs)(Ep,{children:[(0,K.jsx)(kp,{children:`People`}),(0,K.jsx)(Dp,{$first:!0,children:`Team`}),(0,K.jsx)(Op,{$active:r,$clickable:!0,onClick:()=>t(`/team-members`),children:`Team members`}),(0,K.jsx)(Op,{$active:i,$clickable:!0,onClick:()=>t(`/roles`),children:`Roles`}),(0,K.jsx)(Op,{children:`Groups`}),(0,K.jsx)(Dp,{children:`Configuration`}),(0,K.jsx)(Op,{children:`User fields`}),(0,K.jsx)(Op,{children:`Organization fields`}),(0,K.jsx)(Op,{children:`Events`}),(0,K.jsx)(Op,{children:`Profiles`}),(0,K.jsx)(Op,{children:`End users`}),(0,K.jsx)(Op,{children:`Tags`}),(0,K.jsx)(Dp,{children:`Bulk actions`}),(0,K.jsx)(Op,{children:`Import users`}),(0,K.jsx)(Op,{children:`Import organizations`}),(0,K.jsx)(Dp,{children:`Deleted users`}),(0,K.jsx)(Op,{children:`Deleted users`}),(0,K.jsx)(Dp,{children:`Restrictions`}),(0,K.jsx)(Op,{children:`Banned IP addresses`})]})}var jp=L.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 13px;
`,Mp=L.span`
  color: #1f73b7;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #144a75;
  }
`,Np=L.span`
  color: #68737d;
  margin: 0 2px;
`,Pp=L.span`
  color: #68737d;
`;function Fp({items:e}){let t=Ke();return(0,K.jsx)(jp,{children:e.map((e,n)=>{let r=!!e.path;return(0,K.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`4px`},children:[n>0&&(0,K.jsx)(Np,{children:`>`}),r?(0,K.jsx)(Mp,{onClick:()=>t(e.path),children:e.label}):(0,K.jsx)(Pp,{children:e.label})]},n)})})}var Ip=L.div`
  padding: 24px 32px;
  overflow-y: auto;
  flex: 1;
`,Lp=L.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`,Rp=L.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px;
`,zp=L.p`
  font-size: 14px;
  color: #49545c;
  margin: 0;
`,Bp=L.a`
  color: #1f73b7;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`,Vp=L.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Hp=L.button`
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
`,Up=L.button`
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
`,Wp=L.div`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`,Gp=L.div`
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
`,Kp=L.input`
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
`,qp=L.button`
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
`,Jp=L.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 8px;
`,Yp=L.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Xp=L.a`
  font-size: 14px;
  color: #1f73b7;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #144a75;
  }
`,Zp=L.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`,Qp=L.th`
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
`,$p=L.span`
  color: #87929d;
  margin-left: 4px;
  font-size: 11px;
`,em=L.td`
  padding: 12px 16px 12px 0;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`,tm=L.tr`
  &:last-child td {
    border-bottom: none;
  }
`,nm=L.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
`,rm=L.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,im=[[`#d4e7f5`,`#17494d`],[`#f5d4d8`,`#8c232c`],[`#e2d9f3`,`#55237a`],[`#d3f0e2`,`#186146`],[`#f8e5c8`,`#8a5a1e`]],am=L.span`
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
`,om=L.span`
  display: block;
  color: #1f73b7;
  font-weight: 500;
`,sm=L.span`
  display: block;
  color: #68737d;
  font-size: 13px;
  margin-top: 2px;
`,cm=L.span`
  display: block;
  color: #1f73b7;
  font-size: 13px;
  margin-top: 2px;
`,lm=L.button`
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
`;function um(){let e=Ke(),[t,n]=(0,g.useState)(``),r=t.trim().toLowerCase(),i=r?cd.filter(e=>e.name.toLowerCase().includes(r)||e.email.toLowerCase().includes(r)):cd;return(0,K.jsxs)(Ip,{children:[(0,K.jsx)(Fp,{items:[{label:`People`},{label:`Team`},{label:`Team members`}]}),(0,K.jsxs)(Lp,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Rp,{children:`Team members`}),(0,K.jsxs)(zp,{children:[`Find and manage team members, from agents to admins.`,(0,K.jsx)(`br`,{}),(0,K.jsx)(Bp,{href:`#`,children:`Learn about the Team members page ↗`})]})]}),(0,K.jsxs)(Vp,{children:[(0,K.jsxs)(Hp,{children:[`Actions`,(0,K.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,children:(0,K.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,K.jsx)(Up,{children:`Create team member`})]})]}),(0,K.jsx)(Wp,{children:`Search team members`}),(0,K.jsxs)(Gp,{children:[(0,K.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,K.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,K.jsx)(`path`,{d:`M11 11L14 14`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,K.jsx)(Kp,{value:t,onChange:e=>n(e.target.value)})]}),(0,K.jsxs)(qp,{children:[(0,K.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,K.jsx)(`path`,{d:`M2 3h10M4 7h6M6 11h2`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),`Filter`]}),(0,K.jsxs)(Jp,{children:[(0,K.jsxs)(Yp,{children:[i.length,` team members`]}),(0,K.jsx)(Xp,{children:`Bulk manage ↗`})]}),(0,K.jsxs)(Zp,{children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(Qp,{children:(0,K.jsx)(nm,{})}),(0,K.jsx)(Qp,{children:`Team member`}),(0,K.jsx)(Qp,{children:`Brand`}),(0,K.jsx)(Qp,{children:`Group`}),(0,K.jsx)(Qp,{children:`Product access`}),(0,K.jsx)(Qp,{children:`Support role`}),(0,K.jsxs)(Qp,{children:[`Last sign-in`,(0,K.jsx)($p,{children:`⇅`})]}),(0,K.jsx)(Qp,{})]})}),(0,K.jsx)(`tbody`,{children:i.map(t=>{let n=t.name.charAt(0).toUpperCase(),[r,i]=im[n.charCodeAt(0)%im.length];return(0,K.jsxs)(tm,{children:[(0,K.jsx)(em,{children:(0,K.jsx)(nm,{onClick:e=>e.stopPropagation()})}),(0,K.jsx)(em,{onClick:()=>e(`/team-members/${t.id}`),style:{cursor:`pointer`},children:(0,K.jsxs)(rm,{children:[(0,K.jsx)(am,{$bg:r,$fg:i,children:n}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(om,{children:t.name}),(0,K.jsx)(sm,{children:t.email})]})]})}),(0,K.jsxs)(em,{children:[t.brand,t.extraBrands>0&&(0,K.jsxs)(cm,{children:[`+`,t.extraBrands,` more`]})]}),(0,K.jsx)(em,{children:t.group}),(0,K.jsx)(em,{children:t.productAccess}),(0,K.jsx)(em,{children:t.role}),(0,K.jsx)(em,{children:t.lastSignIn}),(0,K.jsx)(em,{children:(0,K.jsx)(lm,{"aria-label":`More actions for ${t.name}`,children:`⋮`})})]},t.id)})})]})]})}var dm=[`small`,`medium`,`large`],fm=L.div.attrs({"data-garden-id":`buttons.button_group_view`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledSplitButton`,componentId:`sc-1u4v04v-0`})([`display:inline-flex;position:relative;z-index:0;direction:`,`;white-space:nowrap;`,`;`],e=>e.theme.rtl&&`rtl`,B),pm=`buttons.icon`,mm=e=>{let t;return e.$position===`start`?t=`margin-${e.theme.rtl?`left`:`right`}`:e.$position===`end`&&(t=`margin-${e.theme.rtl?`right`:`left`}`),t&&I([``,`:`,`px;`],t,e.theme.space.base*2)},hm=L(Ts).attrs({"data-garden-id":pm,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledIcon`,componentId:`sc-19meqgg-0`})([`transform:`,`;transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;`,`;`,`;`],e=>e.$isRotated&&`rotate(${e.theme.rtl?`-`:`+`}180deg)`,e=>mm(e),B),gm=e=>e.$isPill?`100px`:e.theme.borderRadii.md,_m=e=>e.$size===`small`?`${e.theme.space.base*8}px`:e.$size===`large`?`${e.theme.space.base*12}px`:`${e.theme.space.base*10}px`,vm=({theme:e,$isLink:t,$isBasic:n,$isDanger:r,$isNeutral:i,$isPrimary:a,$focusInset:o})=>{let s,c=U({theme:e,variable:`background.disabled`}),l=U({theme:e,variable:`foreground.disabled`}),u={dark:{offset:-100},light:{offset:100}},d={dark:{offset:-200},light:{offset:200}};if(t){let t={theme:e,variable:r?`foreground.danger`:`foreground.primary`},n=U(t),i=U({...t,...u}),a=U({...t,...d});s=I([`outline-color:transparent;background-color:transparent;color:`,`;`,` &:hover{color:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:`,`;}&:disabled{color:`,`;}`],n,ws({theme:e,condition:!1,styles:{color:n,outlineColor:U({theme:e,variable:`border.primaryEmphasis`})}}),i,a,l)}else if(a){let t;t=r?`background.dangerEmphasis`:i?`background.emphasis`:`background.primaryEmphasis`;let n={theme:e,variable:t},a=U(n),f=U({...n,...u}),p=U({...n,...d});s=I([`outline-color:transparent;background-color:`,`;color:`,`;&:hover{background-color:`,`;}`,` &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{background-color:`,`;}&:disabled{background-color:`,`;color:`,`;}`],a,U({theme:e,variable:`foreground.onEmphasis`}),f,ws({theme:e,inset:o,shadowWidth:o?`sm`:`md`,spacerWidth:o?`sm`:`xs`,styles:(r||i)&&o?{borderColor:U({theme:e,variable:`border.primaryEmphasis`})}:void 0}),p,c,l)}else{let t,a,f,p,m,h;if(r){if(!n){let n={theme:e,variable:`border.dangerEmphasis`};t=U(n),a=U({...n,...u}),f=U({...n,...d}),i&&(p=U(n))}m=`background.dangerEmphasis`,h=i?`foreground.default`:`foreground.danger`}else{if(!n){let n={theme:e,variable:`border.primaryEmphasis`};i?(t=U({theme:e,variable:`border.default`,...u}),a=U(n),p=a,f=U({...n,...u})):(t=U(n),a=U({...n,...u}),f=U({...n,...d}))}m=`background.primaryEmphasis`,h=i?`foreground.default`:`foreground.primary`}let g=U({theme:e,variable:m,transparency:e.opacity[100]}),_=U({theme:e,variable:m,transparency:e.opacity[200]}),v={theme:e,variable:h},y=U(v),b,x,S,C,w;if(i){let t={theme:e,variable:`foreground.subtle`};S=U(t),C=U({...t,...u}),w=U({...t,...d})}else b=U({...v,...u}),x=U({...v,...d});s=I([`outline-color:transparent;border-color:`,`;background-color:transparent;color:`,`;&:hover{border-color:`,`;background-color:`,`;color:`,`;}`,` &:active,&[aria-pressed='true'],&[aria-pressed='mixed']{border-color:`,`;background-color:`,`;color:`,`;}&:disabled{border-color:transparent;background-color:`,`;color:`,`;}& `,`{color:`,`;}&:hover `,`,&:focus-visible `,`{color:`,`;}&:active `,`{color:`,`;}&:disabled `,`{color:`,`;}`],t,y,a,g,b,ws({theme:e,inset:o,styles:{borderColor:p}}),f,_,x,c,l,hm,S,hm,hm,C,hm,w,hm,l)}return s},ym=({theme:e,$isPrimary:t,$isBasic:n,$isPill:r,$focusInset:i})=>{let{rtl:a,borderWidths:o,borders:s}=e,c=a?`right`:`left`,l=a?`left`:`right`,u=o.sm,d=`${t||n?``:`-`}${u}`,f=r&&`-2px`,p=!t&&U({theme:e,variable:`background.disabled`}),m=n?`transparent`:`revert`,h=U({theme:e,variable:`border.primaryEmphasis`}),g=n&&!t&&ys({theme:e,inset:i,spacerColor:{hue:h},color:{hue:`transparent`}});return I([`position:relative;transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,margin-`,` 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;border:`,` `,`;`,`{border-color:`,`;box-shadow:`,`;}&:hover,&:active,`,`{z-index:1;}&:disabled{z-index:-1;background-color:`,`;}&:not(:first-of-type){margin-`,`:`,`;}&:not(:first-of-type):disabled{margin-`,`:`,`;}&:not(:first-of-type):not(:last-of-type){border-radius:0;}&:first-of-type:not(:last-of-type){border-top-`,`-radius:0;border-bottom-`,`-radius:0;}&:last-of-type:not(:first-of-type){border-top-`,`-radius:0;border-bottom-`,`-radius:0;}&:first-of-type:not(:last-of-type) `,`{margin-`,`:`,`;}&:last-of-type:not(:first-of-type) `,`{margin-`,`:`,`;}`],c,s.sm,m,Cs,h,g,Cs,p,c,d,c,u,l,l,c,c,hm,l,f,hm,c,f)},bm=e=>{let t=e.$size===`small`?e.theme.iconSizes.sm:e.theme.iconSizes.md;return I([`width:`,`;min-width:`,`;height:`,`;vertical-align:`,`;`],t,t,t,e.$isLink&&`middle`)},xm=e=>{let t;if(e.$isLink)t=I([`padding:0;font-size:inherit;`]);else{let n=_m(e),r=H(`${n} - (${e.theme.borderWidths.sm} * 2)`),i,a;e.$size===`small`?(a=e.theme.fontSizes.sm,i=`${e.theme.space.base*3}px`):(a=e.theme.fontSizes.md,i=e.$size===`large`?`${e.theme.space.base*5}px`:`${e.theme.space.base*4}px`),t=I([`padding:0 `,`;height:`,`;line-height:`,`;font-size:`,`;`],Wa(H(`${i} - ${e.theme.borderWidths.sm}`),a),n,r,a)}return t},Sm=L.button.attrs(e=>({"data-garden-id":e[`data-garden-id`]||`buttons.button`,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledButton`,componentId:`sc-qe3ace-0`})([`display:`,`;align-items:`,`;justify-content:`,`;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:`,`;border-radius:`,`;cursor:pointer;width:`,`;overflow:hidden;text-decoration:`,`;text-overflow:ellipsis;white-space:`,`;font-family:inherit;font-weight:`,`;-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:`,`;-webkit-touch-callout:none;`,`;&::-moz-focus-inner{border:0;padding:0;}`,`{text-decoration:none;}&:hover{text-decoration:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,color 0.1s ease-in-out,outline-color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:`,`;}`,`;&:disabled{cursor:default;text-decoration:`,`;}& `,`{`,`}`,` &&{`,`}`,``],e=>e.$isLink?`inline`:`inline-flex`,e=>!e.$isLink&&`center`,e=>!e.$isLink&&`center`,e=>`${e.$isLink?`0px solid`:e.theme.borders.sm} transparent`,e=>gm(e),e=>e.$isStretched?`100%`:``,e=>e.$isUnderlined?`underline`:`none`,e=>!e.$isLink&&`nowrap`,e=>e.$isLink?`inherit`:e.theme.fontWeights.regular,e=>!e.$isLink&&`none`,e=>xm(e),Cs,e=>e.$isLink?`underline`:`none`,e=>e.$isLink?`underline`:`none`,e=>vm(e),e=>e.$isLink&&`none`,hm,e=>bm(e),fm,e=>ym(e),B),Cm=`buttons.icon_button`,wm=({theme:e})=>{let t={theme:e,variable:`foreground.subtle`};return I([`color:`,`;&:hover{color:`,`;}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:`,`;}`],U(t),U({...t,dark:{offset:-100},light:{offset:100}}),U({...t,dark:{offset:-200},light:{offset:200}}))},Tm=L(Sm).attrs(e=>{let t=e[`data-garden-id`];return{"data-garden-id":t&&t!==`buttons.button`?t:Cm,"data-garden-version":`9.15.8`}}).withConfig({displayName:`StyledIconButton`,componentId:`sc-1t0ughp-0`})([``,`;& `,`{`,`}`,`;`],e=>{let t=_m(e);return I([`border:`,`;padding:0;width:`,`;min-width:`,`;`,`;&:disabled{background-color:`,`;}`],e.$isBasic&&`none`,t,t,e.$isBasic&&!(e.$isPrimary||e.$isDanger||e.disabled)&&wm(e),!e.$isPrimary&&`transparent`)},hm,e=>{let t=e.theme.iconSizes.md;return I([`width:`,`;height:`,`;& > svg{transition:opacity 0.15s ease-in-out;}`],t,t)},B),Em=(0,g.createContext)(void 0),Dm=()=>(0,g.useContext)(Em),Om=({isRotated:e,...t})=>g.createElement(hm,Object.assign({$position:`start`,$isRotated:e},t));Om.displayName=`Button.StartIcon`;var km=Om,Am=({isRotated:e,...t})=>g.createElement(hm,Object.assign({$position:`end`,$isRotated:e},t));Am.displayName=`Button.EndIcon`;var jm=Am,Mm=(0,g.forwardRef)(({focusInset:e,isBasic:t,isDanger:n,isLink:r,isNeutral:i,isPill:a,isPrimary:o,isStretched:s,size:c=`medium`,type:l=`button`,...u},d)=>{let f=Dm();return g.createElement(Sm,Object.assign({},u,{type:l,$focusInset:e||f,$isBasic:t,$isDanger:n,$isLink:r,$isNeutral:i,$isPill:a,$isPrimary:o,$isStretched:s,$isUnderlined:r,$size:c,ref:d}))});Mm.displayName=`Button`,Mm.propTypes={focusInset:W.default.bool,isBasic:W.default.bool,isDanger:W.default.bool,isLink:W.default.bool,isNeutral:W.default.bool,isPill:W.default.bool,isPrimary:W.default.bool,isStretched:W.default.bool,size:W.default.oneOf(dm)};var Nm=Mm;Nm.EndIcon=jm,Nm.StartIcon=km;var Pm=(0,g.forwardRef)(({children:e,focusInset:t,isBasic:n=!0,isDanger:r,isNeutral:i,isPill:a=!0,isPrimary:o,isRotated:s,size:c=`medium`,type:l=`button`,...u},d)=>{let f=Dm();return g.createElement(Tm,Object.assign({},u,{type:l,$isBasic:n,$isDanger:r,$isNeutral:i,$isPill:a,$isPrimary:o,$size:c,$focusInset:t||f,ref:d}),g.createElement(hm,{$isRotated:s},e))});Pm.displayName=`IconButton`,Pm.propTypes={focusInset:W.default.bool,isBasic:W.default.bool,isDanger:W.default.bool,isNeutral:W.default.bool,isPill:W.default.bool,isPrimary:W.default.bool,isRotated:W.default.bool,size:W.default.oneOf(dm)};var Fm=[`success`,`warning`,`error`,`info`],Im,Lm;function Rm(){return Rm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rm.apply(null,arguments)}var zm=function(e){return g.createElement(`svg`,Rm({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Im||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 4.5V9`})),Lm||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},Bm;function Vm(){return Vm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vm.apply(null,arguments)}var Hm=function(e){return g.createElement(`svg`,Vm({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Bm||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 9l2.5 2.5 5-5`}),g.createElement(`circle`,{cx:7.5,cy:8.5,r:7})))},Um,Wm;function Gm(){return Gm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gm.apply(null,arguments)}var Km=function(e){return g.createElement(`svg`,Gm({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),Um||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5`}),Wm||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},qm,Jm;function Ym(){return Ym=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ym.apply(null,arguments)}var Xm=function(e){return g.createElement(`svg`,Ym({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),qm||=g.createElement(`g`,{stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7,fill:`none`}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 12.5V8`})),Jm||=g.createElement(`circle`,{cx:7.5,cy:5,r:1,fill:`currentColor`}))},Zm={success:Hm,error:zm,warning:Km,info:Xm},Qm={success:`success`,error:`error`,warning:`warning`,info:`info`},$m=L(Pm).attrs({"data-garden-id":`notifications.close`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledClose`,componentId:`sc-1mr9nx1-0`})([`position:absolute;top:`,`px;right:`,`;left:`,`;`,` `,`;`],e=>e.theme.space.base,e=>!e.theme.rtl&&`${e.theme.space.base}px`,e=>e.theme.rtl&&`${e.theme.space.base}px`,({theme:e,$type:t})=>{let n;switch(t){case Qm.warning:n=`foreground.warning`;break;case Qm.error:n=`foreground.danger`;break;case Qm.success:n=`foreground.success`;break;default:n=`foreground.subtle`;break}return I([`color:`,`;&:hover{background-color:transparent;color:`,`;}&:active{background-color:transparent;color:`,`;}`],U({variable:n,theme:e}),U({variable:n,light:{offset:100},dark:{offset:-100},theme:e}),U({variable:n,light:{offset:200},dark:{offset:-200},theme:e}))},B),eh=L.p.attrs({"data-garden-id":`notifications.paragraph`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledParagraph`,componentId:`sc-12tmd6p-0`})([`margin:`,`px 0 0;`,`;`],e=>e.theme.space.base*2,B),th=L.div.attrs({"data-garden-id":`notifications.title`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledTitle`,componentId:`sc-xx4jsv-0`})([`margin:0;color:`,`;font-weight:`,`;`,`;`],e=>U({variable:`foreground.default`,theme:e.theme}),e=>e.$isRegular?e.theme.fontWeights.regular:e.theme.fontWeights.semibold,B),nh=L.div.attrs({"data-garden-id":`notifications.base_container`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledBase`,componentId:`sc-14syaqw-0`})([`position:relative;border:`,`;border-radius:`,`;padding:`,`;line-height:`,`;font-size:`,`;direction:`,`;`,`;`,``],e=>e.theme.borders.sm,e=>e.theme.borderRadii.md,e=>{let{space:t}=e.theme;return`${`${t.base*5}px`} ${`${t.base*10}px`}`},e=>xs(e.theme.space.base*5,e.theme.fontSizes.md),e=>e.theme.fontSizes.md,e=>e.theme.rtl&&`rtl`,({theme:e,$type:t,$isFloating:n})=>{let{space:r,shadows:i}=e,a,o,s;if(!n&&t&&Qm[t])switch(t){case Qm.success:a=`background.success`,o=`border.success`,s=`foreground.success`;break;case Qm.error:a=`background.danger`,o=`border.danger`,s=`foreground.danger`;break;case Qm.warning:a=`background.warning`,o=`border.warning`,s=`foreground.warning`;break;case Qm.info:a=`background.subtle`,o=`border.default`,s=`foreground.subtle`;break}else a=`background.raised`,o=`border.default`,s=`foreground.default`;let c=U({variable:a,theme:e}),l=U({variable:o,theme:e}),u=U({variable:s,theme:e}),d=`${r.base*5}px`,f=`${r.base*7}px`;return I([`border-color:`,`;box-shadow:`,`;background-color:`,`;color:`,`;`],l,n?i.lg(d,f,U({variable:`shadow.large`,theme:e})):void 0,c,u)},B),rh=L(nh).attrs({"data-garden-id":`notifications.alert`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledAlert`,componentId:`sc-fyn8jp-0`})([``,` `,`;`],e=>{let{$type:t,theme:n}=e,r;switch(t){case Qm.success:r=`foreground.successEmphasis`;break;case Qm.error:r=`foreground.dangerEmphasis`;break;case Qm.warning:r=`foreground.warningEmphasis`;break;case Qm.info:r=`foreground.default`;break}return I([``,`{color:`,`;}`],th,r?U({variable:r,theme:n}):void 0)},B),ih=L(nh).attrs({"data-garden-id":`notifications.notification`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledNotification`,componentId:`sc-uf6jh-0`})([``,` `,`;`],e=>{let{$type:t,theme:n}=e,r;switch(t){case Qm.success:r=`foreground.success`;break;case Qm.error:r=`foreground.danger`;break;case Qm.warning:r=`foreground.warning`;break;case Qm.info:r=`foreground.default`;break}return I([``,`{color:`,`;}`],th,r?U({variable:r,theme:n}):`inherit`)},B);ih.propTypes={$type:W.default.oneOf(Fm)};var ah=L(Ts).attrs({"data-garden-id":`notifications.icon`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledIcon`,componentId:`sc-msklws-0`})([`position:absolute;`,` `,` `,``],({theme:{rtl:e,space:t}})=>I([`right:`,`;left:`,`;margin-top:`,`px;`],e&&`${t.base*4}px`,!e&&`${t.base*4}px`,t.base/2),({theme:e,$type:t})=>{let n;switch(t){case Qm.success:n=`foreground.success`;break;case Qm.error:n=`foreground.danger`;break;case Qm.warning:n=`foreground.warning`;break;case Qm.info:n=`foreground.subtle`;break;default:n=`foreground.default`;break}return I([`color:`,`;`],U({variable:n,theme:e}))},B),oh=(0,g.createContext)(void 0),sh=()=>(0,g.useContext)(oh),ch=g.forwardRef(({isRegular:e,...t},n)=>g.createElement(th,Object.assign({ref:n,$isRegular:e},t)));ch.displayName=`Alert.Title`;var lh=g.forwardRef((e,t)=>g.createElement(eh,Object.assign({ref:t},e)));lh.displayName=`Alert.Paragraph`;var uh;function dh(){return dh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dh.apply(null,arguments)}var fh=function(e){return g.createElement(`svg`,dh({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),uh||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,d:`M3 13L13 3m0 10L3 3`}))},ph=g.forwardRef((e,t)=>{let n=Ss(ph,e,`aria-label`,`Close`),r=sh();return g.createElement($m,Object.assign({ref:t,$type:r,"aria-label":n},e,{focusInset:!0,size:`small`}),g.createElement(fh,null))});ph.displayName=`Alert.Close`;var mh=g.forwardRef(({role:e,type:t,...n},r)=>{let i=Zm[t];return g.createElement(oh.Provider,{value:t},g.createElement(rh,Object.assign({ref:r,$type:t,role:e===void 0?`alert`:e},n),g.createElement(ah,{$type:t},g.createElement(i,null)),n.children))});mh.displayName=`Alert`,mh.propTypes={type:W.default.oneOf(Fm).isRequired};var hh=mh;hh.Close=ph,hh.Paragraph=lh,hh.Title=ch;var gh=g.forwardRef(({isRegular:e,...t},n)=>g.createElement(th,Object.assign({ref:n,$isRegular:e},t)));gh.displayName=`Notification.Title`;var _h=g.forwardRef((e,t)=>g.createElement(eh,Object.assign({ref:t},e)));_h.displayName=`Notification.Paragraph`;var vh=g.forwardRef((e,t)=>{let n=Ss(vh,e,`aria-label`,`Close`),r=sh();return g.createElement($m,Object.assign({ref:t,$type:r,"aria-label":n},e,{focusInset:!0,size:`small`}),g.createElement(fh,null))});vh.displayName=`Notification.Close`;var yh=(0,g.forwardRef)(({children:e,type:t,...n},r)=>{let i=t?Zm[t]:Xm;return g.createElement(ih,Object.assign({ref:r,$type:t,$isFloating:!0,role:`alert`},n),!!t&&g.createElement(ah,{$type:t},g.createElement(i,null)),e)});yh.displayName=`Notification`,yh.propTypes={type:W.default.oneOf(Fm)};var bh=yh;bh.Close=vh,bh.Paragraph=_h,bh.Title=gh;var xh=L.div`
  max-width: 640px;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  overflow: hidden;
`,Sh=L.table`
  width: 100%;
  border-collapse: collapse;
`,Ch=L.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 400;
  color: #68737d;
  border-bottom: 1px solid #d8dcde;
`,wh=L.td`
  padding: 20px 16px;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`,Th=L.tr`
  &:last-child td {
    border-bottom: none;
  }
`,Eh=L.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Dh=L.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #68737d;
`,Oh=L.select`
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
`,kh=L.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #2f3941;
`,Ah=L.span`
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
`,jh=L.span`
  color: #87929d;
  font-size: 14px;
`,Mh=L.div`
  font-size: 14px;
  color: #49545c;
`,Nh=L.span`
  color: #1f73b7;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`;function Ph({memberId:e}){let{isMemberAiAgentsMigrated:t,aiAgentsRoleId:n,roles:r,getMemberAssignedRole:i,getAiAgentsState:a}=gd(),o=Ke(),s=e?t(e):!1,c=r.find(e=>e.id===n)?.name||`Roles`,l=s?td[a(n).accessLevel]:null,u=e?i(e):null,d=()=>{o(`/roles/${n}`,{state:{scrollToAiAgents:!0}})},f=e=>e.access===`yes`?(0,K.jsx)(`span`,{children:`Yes`}):e.access===`checkbox`?(0,K.jsx)(kh,{defaultChecked:e.checked}):e.access===`disabled`?null:e.access===`ai_agents`?s?l?(0,K.jsx)(`span`,{children:l}):null:(0,K.jsx)(kh,{defaultChecked:e.checked}):null,p=e=>e.access===`disabled`?(0,K.jsx)(jh,{children:e.message}):e.access===`ai_agents`&&s?(0,K.jsxs)(Mh,{children:[`Settings for `,e.product,` can be found in roles.`,(0,K.jsx)(`br`,{}),(0,K.jsxs)(Nh,{onClick:d,children:[`View `,c,` role`]})]}):e.icon===`support`&&u?(0,K.jsx)(`div`,{style:{display:`flex`,alignItems:`center`},children:(0,K.jsx)(Oh,{value:u.name,onChange:()=>{},children:(0,K.jsx)(`option`,{value:u.name,children:u.name})})}):e.role?(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,K.jsxs)(Oh,{defaultValue:e.role,children:[(0,K.jsx)(`option`,{value:`Admin`,children:`Admin`}),(0,K.jsx)(`option`,{value:`Agent`,children:`Agent`}),(0,K.jsx)(`option`,{value:`Client admin`,children:`Client admin`})]}),e.hasInfo&&(0,K.jsx)(Ah,{children:`i`})]}):null,m={support:(0,K.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,K.jsx)(`path`,{d:`M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.4c-1.77 0-3.2-1.43-3.2-3.2h1.6c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6h1.6c0 1.77-1.43 3.2-3.2 3.2zM10 4c2.65 0 4.8 2.15 4.8 4.8v1.6H5.2V8.8C5.2 6.15 7.35 4 10 4z`,fill:`currentColor`})}),knowledge:(0,K.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,K.jsx)(`path`,{d:`M4 3h12v14H4V3zm2 2v10h8V5H6zm1 2h6v1H7V7zm0 3h6v1H7v-1zm0 3h4v1H7v-1z`,fill:`currentColor`})}),analytics:(0,K.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,K.jsx)(`path`,{d:`M4 15h3V8H4v7zm5 0h3V5H9v10zm5 0h3v-4h-3v4z`,fill:`currentColor`})}),voice:(0,K.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,K.jsx)(`path`,{d:`M5.2 3h2.4l2 4-1.5 1.1c.7 1.4 1.8 2.5 3.2 3.2L12.4 9.8l4 2v2.4c0 .9-.7 1.6-1.6 1.6C8.8 15.8 4.2 11.2 4.2 4.6c0-.9.7-1.6 1.6-1.6z`,fill:`currentColor`})}),chat:(0,K.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,K.jsx)(`path`,{d:`M4 4h12v9H7l-3 3V4zm2 3h8v1H6V7zm0 3h6v1H6v-1z`,fill:`currentColor`})}),ai_agents:(0,K.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,K.jsx)(`path`,{d:`M10 2L4 5v4c0 4.1 2.6 7.8 6 9 3.4-1.2 6-4.9 6-9V5l-6-3zm-1 12l-3-3 1.4-1.4L9 11.2l3.6-3.6L14 9l-5 5z`,fill:`currentColor`})}),qa:(0,K.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:(0,K.jsx)(`path`,{d:`M4 4h12v12H4V4zm2 2v8h8V6H6zm1 1h2v2H7V7zm3 0h2v2h-2V7zm-3 3h2v2H7v-2zm3 0h2v2h-2v-2z`,fill:`currentColor`})})};return(0,K.jsx)(xh,{children:(0,K.jsxs)(Sh,{children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(Ch,{children:`Product`}),(0,K.jsx)(Ch,{children:`Role`}),(0,K.jsx)(Ch,{children:`Access`})]})}),(0,K.jsx)(`tbody`,{children:pd.map((e,t)=>(0,K.jsxs)(Th,{children:[(0,K.jsx)(wh,{children:(0,K.jsxs)(Eh,{children:[(0,K.jsx)(Dh,{children:m[e.icon]}),e.product]})}),(0,K.jsx)(wh,{children:p(e)}),(0,K.jsx)(wh,{children:f(e)})]},t))})]})})}var Fh=L.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`,Ih=L.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`,Lh=L.div`
  padding: 24px 32px;
  flex: 1;
`,Rh=L.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px;
  border-top: 1px solid #e9ebed;
  background: #fff;
`,zh=L.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
    min-width: 410px;
  }
`,Bh=L.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`,Vh=L.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`,Hh=L.a`
  font-size: 13px;
  color: #1f73b7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`,Uh=L.div`
  margin-bottom: 24px;
`,Wh=L.div`
  display: flex;
  border-bottom: 2px solid #e9ebed;
  margin-bottom: 0;
`,Gh=L.button`
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
`,Kh=L.div`
  padding-top: 24px;
`,qh=L.div`
  padding: 32px;
  background: #f8f9f9;
  border: 1px solid #e9ebed;
  border-radius: 4px;
  color: #68737d;
  text-align: center;
  font-size: 14px;
`;function Jh(){let{id:e}=Je(),t=Ke(),[n,r]=(0,g.useState)(`roles`),[i,a]=(0,g.useState)(!1),o=cd.find(t=>t.id===e)||cd[0];return(0,K.jsxs)(Fh,{children:[i&&(0,K.jsx)(zh,{children:(0,K.jsxs)(bh,{type:`success`,children:[(0,K.jsx)(bh.Title,{children:`Team member saved`}),(0,K.jsx)(bh.Close,{"aria-label":`Close`,onClick:()=>a(!1)})]})}),(0,K.jsx)(Ih,{children:(0,K.jsxs)(Lh,{children:[(0,K.jsx)(Fp,{items:[{label:`People`},{label:`Team`},{label:`Team members`,path:`/team-members`},{label:o.name}]}),(0,K.jsxs)(Bh,{children:[(0,K.jsx)(Vh,{children:o.name}),(0,K.jsx)(Hh,{href:`#`,children:`View in Support ↗`})]}),(0,K.jsx)(Uh,{children:(0,K.jsxs)(Wh,{children:[(0,K.jsx)(Gh,{$active:n===`account`,onClick:()=>r(`account`),children:`Account`}),(0,K.jsx)(Gh,{$active:n===`roles`,onClick:()=>r(`roles`),children:`Roles and access`})]})}),n===`account`&&(0,K.jsx)(Kh,{children:(0,K.jsx)(qh,{children:`Account settings content would appear here.`})}),n===`roles`&&(0,K.jsx)(Kh,{children:(0,K.jsx)(Ph,{memberId:o.id})})]})}),(0,K.jsxs)(Rh,{children:[(0,K.jsx)(Nm,{onClick:()=>t(`/team-members`),children:`Cancel`}),(0,K.jsx)(Nm,{isPrimary:!0,onClick:()=>{a(!0),setTimeout(()=>a(!1),4e3)},children:`Save`})]})]})}var Yh=L.div`
  padding: 24px 32px;
  overflow-y: auto;
  flex: 1;
`,Xh=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Zh=L.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px;
`,Qh=L.p`
  font-size: 14px;
  color: #49545c;
  margin: 0;
`,$h=L.a`
  color: #1f73b7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,eg=L.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,tg=L.span`
  color: #1f73b7;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,ng=L.div`
  font-size: 14px;
  color: #49545c;
  margin-bottom: 12px;
`,rg=L.button`
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
`,ig=L.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`,ag=L.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  border-bottom: 1px solid #d8dcde;
`,og=L.td`
  padding: 16px;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`,sg=L.tr`
  cursor: pointer;

  &:hover {
    background: #f8f9f9;
  }

  &:last-child td {
    border-bottom: none;
  }
`,cg=L.span`
  color: #2f3941;
`,lg=L.span`
  color: #49545c;
`,ug=L.span`
  display: inline-flex;
  align-items: center;
  background: ${e=>e.$system?`#e9ebed`:`#edf7f0`};
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.$system?`#68737d`:`#2f3941`};
`,dg=L.span`
  font-size: 14px;
  color: #2f3941;
`;function fg(){let e=Ke(),{roles:t,roleAssignments:n}=gd(),r=e=>(n[e.id]||[]).length;return(0,K.jsxs)(Yh,{children:[(0,K.jsx)(Fp,{items:[{label:`People`},{label:`Team`},{label:`Roles`}]}),(0,K.jsxs)(Xh,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Zh,{children:`Roles`}),(0,K.jsxs)(Qh,{children:[`Create, assign, and manage roles for your team.`,` `,(0,K.jsx)($h,{href:`#`,children:`Learn about managing roles ↗`})]})]}),(0,K.jsxs)(eg,{children:[(0,K.jsx)(tg,{children:`Compare roles`}),(0,K.jsx)(rg,{onClick:()=>e(`/roles/create`),children:`Create role`})]})]}),(0,K.jsxs)(ng,{children:[t.length,` roles`]}),(0,K.jsxs)(ig,{children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(ag,{children:`Name`}),(0,K.jsx)(ag,{children:`Type`}),(0,K.jsx)(ag,{children:`Team members`}),(0,K.jsx)(ag,{children:`Description`})]})}),(0,K.jsx)(`tbody`,{children:t.map(t=>(0,K.jsxs)(sg,{onClick:()=>e(`/roles/${t.id}`),children:[(0,K.jsx)(og,{children:(0,K.jsx)(cg,{children:t.name})}),(0,K.jsx)(og,{children:t.type&&(0,K.jsx)(ug,{$system:t.type===`System`,children:t.type})}),(0,K.jsx)(og,{children:(0,K.jsx)(dg,{children:r(t)})}),(0,K.jsx)(og,{children:(0,K.jsx)(lg,{children:t.description})})]},t.id))})]})]})}function pg(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}var mg=pg()?g.useLayoutEffect:g.useEffect,hg=!1,gg=0;function _g(){return++gg}var vg=g.useId;function yg(e){if(vg!==void 0){let t=vg();return e??t}let t=e??(hg?_g():null),[n,r]=g.useState(t);return mg(()=>{n===null&&r(_g())},[]),g.useEffect(()=>{hg===!1&&(hg=!0)},[]),e??n??void 0}function bg(...e){return(t,...n)=>e.some(e=>(e&&e(t,...n),t&&t.defaultPrevented))}var xg=0,Sg=e=>{let t=yg(e);return t=t==null?`id:${xg++}`:`${t}`,t},Cg=({idPrefix:e,hasHint:t,hasMessage:n})=>{let r=Sg(e),i=`${r}--input`,a=`${r}--label`,o=`${r}--hint`,s=`${r}--message`,c=(0,g.useCallback)(({id:e=a,htmlFor:t=i,...n}={})=>({"data-garden-container-id":`containers.field.label`,"data-garden-container-version":`3.0.22`,id:e,htmlFor:t,...n}),[a,i]),l=(0,g.useCallback)(({id:e=o,...t}={})=>({"data-garden-container-id":`containers.field.hint`,"data-garden-container-version":`3.0.22`,id:e,...t}),[o]),u=(0,g.useCallback)(({id:e=i,"aria-describedby":r,...c}={})=>({"data-garden-container-id":`containers.field.input`,"data-garden-container-version":`3.0.22`,id:e,"aria-labelledby":a,"aria-describedby":(()=>{if(r)return r;let e=[];return t&&e.push(o),n&&e.push(s),e.length>0?e.join(` `):void 0})(),...c}),[i,a,o,s,t,n]),d=(0,g.useCallback)(({id:e=s,role:t=`alert`,...n}={})=>({"data-garden-container-id":`containers.field.message`,"data-garden-container-version":`3.0.22`,role:t===null?void 0:t,id:e,...n}),[s]);return(0,g.useMemo)(()=>({getLabelProps:c,getHintProps:l,getInputProps:u,getMessageProps:d}),[c,l,u,d])},wg=({children:e,render:t=e,...n})=>g.createElement(g.Fragment,null,t(Cg(n)));wg.propTypes={children:W.default.func,render:W.default.func,idPrefix:W.default.string,hasHint:W.default.bool,hasMessage:W.default.bool};var Tg=(0,g.createContext)(void 0),Eg=()=>(0,g.useContext)(Tg),Dg=L.div.attrs({"data-garden-id":`forms.field`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledField`,componentId:`sc-12gzfsu-0`})([`position:relative;direction:`,`;margin:0;border:0;padding:0;font-size:0;`,`;`],e=>e.theme.rtl?`rtl`:`ltr`,B),Og=`forms.input_label`,kg=L.label.attrs(e=>({"data-garden-id":e[`data-garden-id`]||Og,"data-garden-version":e[`data-garden-version`]||`9.15.6`})).withConfig({displayName:`StyledLabel`,componentId:`sc-2utmsz-0`})([`direction:`,`;vertical-align:middle;line-height:`,`;color:`,`;font-size:`,`;font-weight:`,`;&[hidden]{display:`,`;vertical-align:`,`;text-indent:`,`;font-size:`,`;`,`;}`,`;`],e=>e.theme.rtl&&`rtl`,e=>xs(e.theme.space.base*5,e.theme.fontSizes.md),e=>U({theme:e.theme,variable:`foreground.default`}),e=>e.theme.fontSizes.md,e=>e.$isRegular?e.theme.fontWeights.regular:e.theme.fontWeights.semibold,e=>e.$isRadio?`inline-block`:`inline`,e=>e.$isRadio&&`top`,e=>e.$isRadio&&`-100%`,e=>e.$isRadio&&`0`,e=>!e.$isRadio&&qa(),B),Ag=`forms.input_hint`,jg=L.div.attrs(e=>({"data-garden-id":e[`data-garden-id`]||Ag,"data-garden-version":e[`data-garden-version`]||`9.15.6`})).withConfig({displayName:`StyledHint`,componentId:`sc-17c2wu8-0`})([`direction:`,`;display:block;vertical-align:middle;line-height:`,`;color:`,`;font-size:`,`;`,`;`],e=>e.theme.rtl&&`rtl`,e=>xs(e.theme.space.base*5,e.theme.fontSizes.md),e=>U({theme:e.theme,variable:`foreground.subtle`}),e=>e.theme.fontSizes.md,B),Mg=L(Ts).attrs({"data-garden-id":`forms.input_message_icon`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledMessageIcon`,componentId:`sc-1ph2gba-0`})([`width:`,`;height:`,`;`,`;`],e=>e.theme.iconSizes.md,e=>e.theme.iconSizes.md,B),Ng=`forms.input_message`,Pg=L.div.attrs(e=>({"data-garden-id":e[`data-garden-id`]||Ng,"data-garden-version":e[`data-garden-version`]||`9.15.6`})).withConfig({displayName:`StyledMessage`,componentId:`sc-30hgg7-0`})([`direction:`,`;display:inline-block;position:relative;vertical-align:middle;`,`;`,`;& `,`{position:absolute;top:-1px;`,`:0;}`,`:not([hidden]) + &{display:block;}`,`;`],e=>e.theme.rtl&&`rtl`,({theme:e,$validation:t})=>{let n=e.fontSizes.sm,r=xs(e.iconSizes.md,e.fontSizes.sm),i=`${e.space.base}px`,a=t?H(`${e.space.base*2} + ${e.iconSizes.md}`):void 0;return I([`padding-`,`:`,`;line-height:`,`;font-size:`,`;`,`:not([hidden]) + &{margin-top:`,`;}`],e.rtl?`right`:`left`,a,r,n,kg,i)},({theme:e,$validation:t})=>{let n;return n=t===`error`?`foreground.danger`:t===`success`?`foreground.success`:t===`warning`?`foreground.warning`:`foreground.subtle`,I([`color:`,`;`],U({theme:e,variable:n}))},Mg,e=>e.theme.rtl?`right`:`left`,kg,B),Fg=`forms.input`,Ig=e=>e===`warning`||e===`error`,Lg=L.input.attrs(e=>({"data-garden-id":Fg,"data-garden-version":`9.15.6`,"aria-invalid":Ig(e.$validation)})).withConfig({displayName:`StyledTextInput`,componentId:`sc-1r6733h-0`})([`appearance:none;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;direction:`,`;border:`,`;border-radius:`,`;width:100%;box-sizing:border-box;vertical-align:middle;font-family:inherit;&::-ms-browse{border-radius:`,`;}&::-ms-clear,&::-ms-reveal{display:none;}&::-moz-color-swatch{border:none;border-radius:`,`;}&::-webkit-color-swatch{border:none;border-radius:`,`;}&::-webkit-color-swatch-wrapper{padding:0;}&::-webkit-clear-button,&::-webkit-inner-spin-button,&::-webkit-search-cancel-button,&::-webkit-search-results-button{display:none;}&::-webkit-datetime-edit{direction:`,`;line-height:1;}&::-webkit-calendar-picker-indicator{border-radius:100%;}&:invalid{box-shadow:none;}&[type='file']::-ms-value{display:none;}@media screen and (min--moz-device-pixel-ratio:0){&[type='number']{appearance:textfield;}}`,`;`,`;&:disabled{cursor:default;}`,`;`],e=>e.theme.rtl&&`rtl`,e=>e.$isBare?`none`:e.theme.borders.sm,e=>e.$isBare?`0`:e.theme.borderRadii.md,e=>e.theme.borderRadii.sm,e=>e.theme.borderRadii.sm,e=>e.theme.borderRadii.sm,e=>e.theme.rtl&&`rtl`,({theme:e,$isBare:t,$isCompact:n})=>{let r=e.fontSizes.md,i=`${e.space.base*3}px`,a,o,s,c;n?(a=`${e.space.base*8}px`,o=`${e.space.base*1.5}px`,s=H(`${e.fontSizes.sm} - 1`),c=`${e.space.base*6}px`):(a=`${e.space.base*10}px`,o=`${e.space.base*2.5}px`,s=e.fontSizes.sm,c=`${e.space.base*7}px`);let l=H(`${a} - (${o} * 2) - (${e.borderWidths.sm} * 2)`),u=t?`0`:`${Wa(o,r)} ${Wa(i,r)}`,d=H(`(${l} - ${c}) / 2`),f=H(`${o} + ${d} - ${i}`),p=`${e.space.base*5}px`,m=e.iconSizes.md;return I([`padding:`,`;min-height:`,`;line-height:`,`;font-size:`,`;&::-ms-browse{font-size:`,`;}&[type='date'],&[type='datetime-local'],&[type='file'],&[type='month'],&[type='time'],&[type='week']{max-height:`,`;}&[type='file']{line-height:1;}@supports (-ms-ime-align:auto){&[type='color']{padding:`,`;}}&::-moz-color-swatch{margin-top:`,`;margin-left:`,`;width:calc(100% + `,`);height:`,`;}&::-webkit-calendar-picker-indicator{background-position:center;background-size:`,`;padding:0;width:`,`;height:`,`;}&::-webkit-color-swatch{margin:`,` `,`;}`,`:not([hidden]) + &&,`,` + &&,`,` + &&,&& + `,`,&& ~ `,`{margin-top:`,`px;}`],u,t?`1em`:a,xs(l,r),r,s,a,n?`0 2px`:`1px 3px`,d,f,H(`${f} * -2`),c,m,p,p,d,f,kg,jg,Pg,jg,Pg,e.space.base*(n?1:2))},({theme:e,$isBare:t,$isHovered:n,$focusInset:r,$validation:i})=>{let a=U({theme:e,variable:`foreground.default`}),o=t?`transparent`:U({theme:e,variable:`background.default`}),s,c,l,u;i?(i===`success`?l=`border.successEmphasis`:i===`warning`?l=`border.warningEmphasis`:i===`error`&&(l=`border.dangerEmphasis`),s=U({theme:e,variable:l}),c=s,u=s):(s=U({theme:e,variable:`border.default`,dark:{offset:-100},light:{offset:100}}),l=`border.primaryEmphasis`,c=U({theme:e,variable:l}),u=c);let d=t?void 0:U({theme:e,variable:`background.disabled`}),f=U({theme:e,variable:`border.disabled`}),p=U({theme:e,variable:`foreground.disabled`}),m=p,h=d,g=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16" aria-hidden="true" color="${U({theme:e,variable:`foreground.subtle`})}">
      <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"/>
    </svg>`,_=`url("data:image/svg+xml,${encodeURIComponent(g)}")`;return I([`border-color:`,`;background-color:`,`;color:`,`;&::placeholder{opacity:1;color:`,`;}&::-webkit-datetime-edit{color:`,`;}&::-webkit-calendar-picker-indicator{background-image:`,`;}&[readonly],&[aria-readonly='true']{background-color:`,`;}&:hover{border-color:`,`;}`,` &::-webkit-calendar-picker-indicator:focus-visible{`,`}&:disabled,&[aria-disabled='true']{border-color:`,`;background-color:`,`;color:`,`;}`],n?c:s,o,a,m,m,_,h,c,ws({theme:e,inset:r,color:{variable:l},styles:{borderColor:u},condition:!t}),ws({theme:e}),f,d,p)},B),Rg=L(Ts).attrs({"data-garden-id":`forms.media_figure`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledTextMediaFigure`,componentId:`sc-1qepknj-0`})([`transform:`,`;transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;`,`;`,` `,`;`],e=>e.$isRotated&&`rotate(${e.theme.rtl?`-`:`+`}180deg)`,e=>{let t=e.theme.iconSizes.md,n=`1px ${e.theme.space.base*2}px auto 0`,r=`1px 0 auto ${e.theme.space.base*2}px`,i;return i=e.$position===`start`?e.theme.rtl?r:n:e.theme.rtl?n:r,I([`margin:`,`;width:`,`;height:`,`;`],i,t,t)},({theme:e,$isDisabled:t,$isHovered:n,$isFocused:r})=>{let i;if(t)i=U({theme:e,variable:`foreground.disabled`});else{let t={theme:e,variable:`foreground.subtle`};i=U(n||r?{...t,dark:{offset:-100},light:{offset:100}}:t)}return I([`color:`,`;`],i)},B),zg=`forms.faux_input`,Bg=L(Lg).attrs(e=>({as:`div`,"aria-readonly":e.$isReadOnly,"aria-disabled":e.$isDisabled,"data-garden-id":zg,"data-garden-version":`9.15.6`})).withConfig({displayName:`StyledTextFauxInput`,componentId:`sc-yqw7j9-0`})([`display:`,`;align-items:`,`;cursor:`,`;overflow:hidden;`,` & > `,`{vertical-align:`,`;`,`{box-shadow:unset;}}& > `,`{flex-shrink:`,`;}`,`;`],e=>e.$mediaLayout?`inline-flex`:`inline-block`,e=>e.$mediaLayout&&`baseline`,e=>e.$mediaLayout&&!e.$isDisabled?`text`:`default`,({theme:e,$validation:t,$focusInset:n,$isBare:r,$isFocused:i})=>{let a,o;return t?(t===`success`?a=`border.successEmphasis`:t===`warning`?a=`border.warningEmphasis`:t===`error`&&(a=`border.dangerEmphasis`),o=U({theme:e,variable:a})):(a=`border.primaryEmphasis`,o=U({theme:e,variable:a})),I([``,``],ws({theme:e,inset:n,color:{variable:a},selector:i?`&`:`&:focus-within`,styles:{borderColor:o},condition:!r}))},Lg,e=>!e.$mediaLayout&&`baseline`,Cs,Rg,e=>e.$mediaLayout&&`0`,B),Vg=L(Lg).attrs({"data-garden-id":`forms.media_input`,"data-garden-version":`9.15.6`,$isBare:!0}).withConfig({displayName:`StyledTextMediaInput`,componentId:`sc-12i9xfi-0`})([`flex-grow:1;`,`;`],B),Hg=`forms.radio_label`,Ug=e=>{let t=e.theme.space.base*4,n=t+e.theme.space.base*2,r=e.theme.space.base*5;return I([`padding-`,`:`,`px;&[hidden]{padding-`,`:`,`px;height:`,`px;line-height:`,`px;}`],e.theme.rtl?`right`:`left`,n,e.theme.rtl?`right`:`left`,t,r,r)},Wg=L(kg).attrs({"data-garden-id":Hg,"data-garden-version":`9.15.6`,$isRadio:!0}).withConfig({displayName:`StyledRadioLabel`,componentId:`sc-1aq2e5t-0`})([`display:inline-block;position:relative;cursor:pointer;`,`;`,`;`],e=>Ug(e),B),Gg=L(Wg).attrs({"data-garden-id":`forms.checkbox_label`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCheckLabel`,componentId:`sc-x7nr1-0`})([``,`;`],B),Kg=L(jg).attrs({"data-garden-id":`forms.radio_hint`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledRadioHint`,componentId:`sc-eo8twg-0`})([`padding-`,`:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,e=>H(`${e.theme.space.base} * 6px`),B),qg=L(Kg).attrs({"data-garden-id":`forms.checkbox_hint`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCheckHint`,componentId:`sc-1kl8e8c-0`})([``,`;`],B),Jg=L.input.attrs({"data-garden-id":`forms.radio`,"data-garden-version":`9.15.6`,type:`radio`}).withConfig({displayName:`StyledRadioInput`,componentId:`sc-qsavpv-0`})([`position:absolute;opacity:0;margin:0;& ~ `,`::before{position:absolute;`,`:0;transition:border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;border-radius:50%;background-repeat:no-repeat;background-position:center;content:'';}& ~ `,` > svg{position:absolute;}`,`;&:focus ~ `,`::before{outline:none;}& ~ `,`:active::before{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,color 0.1s ease-in-out;}`,`;&:disabled ~ `,`{cursor:default;}`,`;`],Wg,e=>e.theme.rtl?`right`:`left`,Wg,({theme:e,$isCompact:t})=>{let n=`${e.space.base*5}px`,r=`${e.space.base*4}px`,i=H(`(${n} - ${r}) / 2`),a=e.iconSizes.sm,o=H(`(${r} - ${a}) / 2`),s=H(`${o} + ${i}`),c=`${e.space.base*(t?1:2)}px`;return I([`top:`,`;width:`,`;height:`,`;& ~ `,`::before{top:`,`;border:`,`;background-size:`,`;width:`,`;height:`,`;box-sizing:border-box;}& ~ `,` > svg{top:`,`;`,`:`,`;width:`,`;height:`,`;}&& ~ `,` ~ `,`{margin-top:`,`;}`],i,r,r,Wg,i,e.borders.sm,e.iconSizes.sm,r,r,Wg,s,e.rtl?`right`:`left`,o,a,a,Wg,Pg,c)},Wg,Wg,({theme:e})=>{let t=U({theme:e,variable:`border.emphasis`}),n=U({theme:e,variable:`background.default`}),r=U({theme:e,variable:`foreground.onEmphasis`}),i={theme:e,variable:`background.primaryEmphasis`},a={theme:e,variable:`border.primaryEmphasis`},o=U({...i,transparency:e.opacity[100]}),s=U(a),c=s,l=U({...i,transparency:e.opacity[200]}),u=c,d=U(i),f=c,p={dark:{offset:-100},light:{offset:100}},m={dark:{offset:-200},light:{offset:200}},h=U({...i,...p}),g=U({...a,...p}),_=U({...i,...m}),v=U({...a,...m}),y=U({theme:e,variable:`background.disabled`,transparency:e.opacity[300]});return I([`& ~ `,`::before{border-color:`,`;background-color:`,`;}& ~ `,` > svg{color:`,`;}& ~ `,`:hover::before{border-color:`,`;background-color:`,`;}`,` & ~ `,`:active::before{border-color:`,`;background-color:`,`;}&:checked ~ `,`::before{border-color:`,`;background-color:`,`;}&:enabled:checked ~ `,`:hover::before{border-color:`,`;background-color:`,`;}&:enabled:checked ~ `,`:active::before{border-color:`,`;background-color:`,`;}&:disabled ~ `,`::before{border-color:transparent;background-color:`,`;}`],Wg,t,n,Wg,r,Wg,s,o,ws({theme:e,styles:{borderColor:c},selector:`&:focus-visible ~ ${Wg}::before`}),Wg,u,l,Wg,f,d,Wg,g,h,Wg,v,_,Wg,y)},Wg,B),Yg=L(Jg).attrs({"data-garden-id":`forms.checkbox`,"data-garden-version":`9.15.6`,type:`checkbox`}).withConfig({displayName:`StyledCheckInput`,componentId:`sc-176jxxe-0`})([`& ~ `,`::before{border-radius:`,`;}`,`;`,`;`],Gg,e=>e.theme.borderRadii.md,({theme:e})=>{let t={theme:e,variable:`background.primaryEmphasis`},n={theme:e,variable:`border.primaryEmphasis`},r=U(t),i=U(n),a={dark:{offset:-100},light:{offset:100}},o={dark:{offset:-200},light:{offset:200}},s=U({...t,...a}),c=U({...n,...a}),l=U({...t,...o});return I([`&:indeterminate ~ `,`::before{border-color:`,`;background-color:`,`;}&:enabled:indeterminate ~ `,`:hover::before{border-color:`,`;background-color:`,`;}&:enabled:indeterminate ~ `,`:active::before{border-color:`,`;background-color:`,`;}&:disabled:indeterminate ~ `,`::before{border-color:transparent;background-color:`,`;}`],Gg,i,r,Gg,c,s,Gg,U({...n,...o}),l,Gg,U({theme:e,variable:`background.disabled`,transparency:e.opacity[300]}))},B),Xg=L(Pg).attrs({"data-garden-id":`forms.radio_message`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledRadioMessage`,componentId:`sc-1pmi0q8-0`})([`padding-`,`:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,e=>H(`${e.theme.space.base} * 6px`),B),Zg=L(Xg).attrs({"data-garden-id":`forms.checkbox_message`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCheckMessage`,componentId:`sc-s4p6kd-0`})([``,`;`],B),Qg;function $g(){return $g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$g.apply(null,arguments)}var e_=L(function(e){return g.createElement(`svg`,$g({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Qg||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M3 6l2 2 4-4`}))}).attrs({"data-garden-id":`forms.check_svg`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledCheckSvg`,componentId:`sc-fvxetk-0`})([`transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;`,`:checked ~ `,` > &{opacity:1;}`,`:indeterminate ~ `,` > &{opacity:0;}`,`;`],Yg,Gg,Yg,Gg,B),t_;function n_(){return n_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n_.apply(null,arguments)}var r_=L(function(e){return g.createElement(`svg`,n_({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),t_||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:2,d:`M3 6h6`}))}).attrs({"data-garden-id":`forms.dash_svg`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledDashSvg`,componentId:`sc-z3vq71-0`})([`transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;`,`:indeterminate ~ `,` > &{opacity:1;}`,`;`],Yg,Gg,B),i_;function a_(){return a_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a_.apply(null,arguments)}var o_=L(function(e){return g.createElement(`svg`,a_({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),i_||=g.createElement(`circle`,{cx:6,cy:6,r:2,fill:`currentColor`}))}).attrs({"data-garden-id":`forms.radio_svg`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledRadioSvg`,componentId:`sc-1r1qtr1-0`})([`transition:opacity 0.25s ease-in-out;opacity:0;`,`:checked ~ `,` > &{opacity:1;}`,`;`],Jg,Wg,B),s_=`forms.toggle_label`,c_=e=>{let t=e.theme.space.base*10,n=t+e.theme.space.base*2;return I([`padding-`,`:`,`px;&[hidden]{padding-`,`:`,`px;}`],e.theme.rtl?`right`:`left`,n,e.theme.rtl?`right`:`left`,t)},l_=L(Gg).attrs({"data-garden-id":s_,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledToggleLabel`,componentId:`sc-e0asdk-0`})([``,`;`,`;`],e=>c_(e),B),u_=L(jg).attrs({"data-garden-id":`forms.toggle_hint`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledToggleHint`,componentId:`sc-nziggu-0`})([`padding-`,`:`,`;`,`;`],e=>e.theme.rtl?`right`:`left`,e=>H(`${e.theme.space.base} * 12px`),B),d_=L(Pg).attrs({"data-garden-id":`forms.toggle_message`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledToggleMessage`,componentId:`sc-13vuvl1-0`})([`padding-`,`:`,`;& `,`{`,`:`,`;}`,`;`],e=>e.theme.rtl?`right`:`left`,e=>H(`${e.theme.space.base} * 12px`),Mg,e=>e.theme.rtl?`right`:`left`,e=>H(`${e.theme.space.base} * 10px - ${e.theme.iconSizes.md}`),B),f_;function p_(){return p_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p_.apply(null,arguments)}var m_=L(function(e){return g.createElement(`svg`,p_({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),f_||=g.createElement(`circle`,{cx:8,cy:8,r:6,fill:`currentColor`}))}).attrs({"data-garden-id":`forms.toggle_svg`,"data-garden-version":`9.15.6`}).withConfig({displayName:`StyledToggleSvg`,componentId:`sc-162xbyx-0`})([`transition:all 0.15s ease-in-out;`,`;`],B),h_=(0,g.createContext)(void 0),g_=()=>(0,g.useContext)(h_),__=g.forwardRef((e,t)=>{let{hasHint:n,setHasHint:r,getHintProps:i}=Eg()||{},a=g_();(0,g.useEffect)(()=>(!n&&r&&r(!0),()=>{n&&r&&r(!1)}),[n,r]);let o;o=a===`checkbox`?qg:a===`radio`?Kg:a===`toggle`?u_:jg;let s=e;return i&&(s=i(s)),g.createElement(o,Object.assign({ref:t},s))});__.displayName=`Field.Hint`;var v_=[`success`,`warning`,`error`],y_,b_;function x_(){return x_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x_.apply(null,arguments)}var S_=function(e){return g.createElement(`svg`,x_({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),y_||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`circle`,{cx:7.5,cy:8.5,r:7}),g.createElement(`path`,{strokeLinecap:`round`,d:`M7.5 4.5V9`})),b_||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},C_,w_;function T_(){return T_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T_.apply(null,arguments)}var E_=function(e){return g.createElement(`svg`,T_({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),C_||=g.createElement(`path`,{fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,d:`M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5`}),w_||=g.createElement(`circle`,{cx:7.5,cy:12,r:1,fill:`currentColor`}))},D_;function O_(){return O_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O_.apply(null,arguments)}var k_=function(e){return g.createElement(`svg`,O_({xmlns:`http://www.w3.org/2000/svg`,width:16,height:16,focusable:`false`,viewBox:`0 0 16 16`,"aria-hidden":`true`},e),D_||=g.createElement(`g`,{fill:`none`,stroke:`currentColor`},g.createElement(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 9l2.5 2.5 5-5`}),g.createElement(`circle`,{cx:7.5,cy:8.5,r:7})))},A_=({validation:e,children:t,...n})=>g.createElement(Mg,Object.assign({"aria-hidden":!1,role:`img`},n),e?{error:g.createElement(S_,null),success:g.createElement(k_,null),warning:g.createElement(E_,null)}[e]:t);A_.displayName=`Field.MessageIcon`,A_.propTypes={validation:W.default.oneOf(v_)};var j_=g.forwardRef(({validation:e,validationLabel:t,children:n,...r},i)=>{let{hasMessage:a,setHasMessage:o,getMessageProps:s}=Eg()||{},c=g_();(0,g.useEffect)(()=>(!a&&o&&o(!0),()=>{a&&o&&o(!1)}),[a,o]);let l;l=c===`checkbox`?Zg:c===`radio`?Xg:c===`toggle`?d_:Pg;let u={$validation:e,$validationLabel:t,...r};s&&(u=s(u));let d=Ss(j_,u,`$validationLabel`,e,e!==void 0);return g.createElement(l,Object.assign({ref:i},u),!!e&&g.createElement(A_,{validation:e,"aria-label":d}),n)});j_.displayName=`Field.Message`,j_.propTypes={validation:W.default.oneOf(v_),validationLabel:W.default.string};var M_=(0,g.createContext)(void 0),N_=()=>(0,g.useContext)(M_),P_=g.forwardRef(({children:e,isRegular:t,...n},r)=>{let i=Eg(),a=N_(),o=g_(),s=a&&t===void 0?!0:t,c=n;if(i&&(c=i.getLabelProps(c),o===void 0)){let{setIsLabelActive:e,setIsLabelHovered:t}=i;c.onMouseUp=bg(n.onMouseUp,()=>{e(!1)}),c.onMouseDown=bg(n.onMouseDown,()=>{e(!0)}),c.onMouseEnter=bg(n.onMouseEnter,()=>{t(!0)}),c.onMouseLeave=bg(n.onMouseLeave,()=>{t(!1)})}return o===`radio`?g.createElement(Wg,Object.assign({ref:r},c,{$isRegular:s}),g.createElement(o_,null),e):o===`checkbox`?(c.onClick=bg(c.onClick,e=>{let t=navigator?.userAgent.toLowerCase().indexOf(`firefox`)>-1;if(i&&t&&e.target instanceof Element){let t=e.target.getAttribute(`for`);if(!t)return;let n=document.getElementById(t);n&&n.type===`checkbox`&&(e.shiftKey&&(n.click(),n.checked=!0),n.focus())}}),g.createElement(Gg,Object.assign({ref:r},c,{$isRegular:s}),g.createElement(e_,null),g.createElement(r_,null),e)):o===`toggle`?g.createElement(l_,Object.assign({ref:r},c,{$isRegular:s}),g.createElement(m_,null),e):g.createElement(kg,Object.assign({ref:r},c,{$isRegular:s}),e)});P_.displayName=`Field.Label`,P_.propTypes={isRegular:W.default.bool};var F_=g.forwardRef((e,t)=>{let[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)(!1),[o,s]=(0,g.useState)(!1),[c,l]=(0,g.useState)(!1),{getInputProps:u,getMessageProps:d,...f}=Cg({idPrefix:e.id,hasHint:n,hasMessage:i}),p=(0,g.useMemo)(()=>({...f,getInputProps:u,getMessageProps:d,isLabelActive:o,setIsLabelActive:s,isLabelHovered:c,setIsLabelHovered:l,hasHint:n,setHasHint:r,hasMessage:i,setHasMessage:a}),[f,u,d,o,c,n,i]);return g.createElement(Tg.Provider,{value:p},g.createElement(Dg,Object.assign({},e,{ref:t})))});F_.displayName=`Field`;var I_=F_;I_.Hint=__,I_.Label=P_,I_.Message=j_;function L_(e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var R_=({isDisabled:e,isFocused:t,isHovered:n,isRotated:r,...i})=>g.createElement(Rg,Object.assign({$position:`start`,$isDisabled:e,$isFocused:t,$isHovered:n,$isRotated:r},i));R_.displayName=`FauxInput.StartIcon`;var z_=R_,B_=({isDisabled:e,isFocused:t,isHovered:n,isRotated:r,...i})=>g.createElement(Rg,Object.assign({$position:`end`,$isDisabled:e,$isFocused:t,$isHovered:n,$isRotated:r},i));B_.displayName=`FauxInput.EndIcon`;var V_=B_,H_=(0,g.forwardRef)(({disabled:e,focusInset:t,isBare:n,isCompact:r,isFocused:i,isHovered:a,onBlur:o,onFocus:s,readOnly:c,validation:l,mediaLayout:u,...d},f)=>{let[p,m]=(0,g.useState)(!1),h=bg(s,()=>{m(!0)}),_=bg(o,()=>{m(!1)});return g.createElement(Bg,Object.assign({onFocus:h,onBlur:_,$focusInset:t,$isBare:n,$isCompact:r,$isDisabled:e,$isFocused:i===void 0?p:i,$isHovered:a,$isReadOnly:c,$mediaLayout:u,$validation:l,tabIndex:e?void 0:0},d,{ref:f}))});H_.displayName=`FauxInput`,H_.propTypes={isCompact:W.default.bool,isBare:W.default.bool,focusInset:W.default.bool,disabled:W.default.bool,readOnly:W.default.bool,validation:W.default.oneOf(v_),isFocused:W.default.bool,isHovered:W.default.bool};var U_=H_;U_.EndIcon=V_,U_.StartIcon=z_;var W_=g.forwardRef(({start:e,end:t,disabled:n,isCompact:r,isBare:i,focusInset:a,readOnly:o,validation:s,wrapperProps:c={},wrapperRef:l,onSelect:u,...d},f)=>{let p=Eg(),m=(0,g.useRef)(),[h,_]=(0,g.useState)(!1),[v,y]=(0,g.useState)(!1),{onClick:b,onFocus:x,onBlur:S,onMouseOver:C,onMouseOut:w,...ee}=c,te=bg(b,()=>{m.current&&m.current.focus()}),ne=bg(x,()=>{_(!0)}),T=bg(S,()=>{_(!1)}),E=bg(C,()=>{y(!0)}),re=bg(w,()=>{y(!1)}),D=o?bg(u,e=>{e.currentTarget.select()}):u,ie={disabled:n,readOnly:o,ref:L_([m,f]),onSelect:D,...d},ae;return p&&(ie=p.getInputProps(ie),ae=p.isLabelHovered),g.createElement(U_,Object.assign({tabIndex:null,onClick:te,onFocus:ne,onBlur:T,onMouseOver:E,onMouseOut:re,disabled:n,isFocused:h,isHovered:v||ae,isCompact:r,isBare:i,focusInset:a,readOnly:o,validation:s,mediaLayout:!0},ee,{ref:l}),!!e&&g.createElement(U_.StartIcon,{isDisabled:n,isFocused:h,isHovered:v||ae},e),g.createElement(Vg,ie),!!t&&g.createElement(U_.EndIcon,{isDisabled:n,isFocused:h,isHovered:v||ae},t))});W_.propTypes={isCompact:W.default.bool,isBare:W.default.bool,focusInset:W.default.bool,validation:W.default.oneOf(v_),start:W.default.any,end:W.default.any,wrapperProps:W.default.object,wrapperRef:W.default.any},W_.displayName=`MediaInput`;var G_=[`small`,`medium`,`large`],K_=L(Ts).attrs({"data-garden-id":`tags.avatar`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledAvatar`,componentId:`sc-3kdmgt-0`})([`flex-shrink:0;font-size:0;`,`;`],B),q_=L.button.attrs({"data-garden-id":`tags.close`,"data-garden-version":`9.15.8`}).withConfig({displayName:`StyledClose`,componentId:`sc-d6lrpn-0`})([`display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:`,`;border:0;background:transparent;cursor:pointer;padding:0;color:inherit;font-size:0;appearance:none;&:hover{opacity:`,`;}&:focus{outline:none;}&:active{opacity:`,`;}`,`;`],e=>e.theme.opacity[1e3],e=>e.theme.opacity[1100],e=>e.theme.opacity[1200],B),J_=`tags.tag_view`,Y_=({theme:e,$hue:t})=>{let n,r;if(t)switch(r=U({theme:e,variable:`foreground.onEmphasis`}),t){case`grey`:case`neutralHue`:n=U({theme:e,variable:`background.emphasis`,dark:{offset:-300}});break;case`blue`:case`primaryHue`:n=U({theme:e,variable:`background.primaryEmphasis`});break;case`red`:case`dangerHue`:n=U({theme:e,variable:`background.dangerEmphasis`});break;case`green`:case`successHue`:n=U({theme:e,variable:`background.successEmphasis`});break;case`yellow`:case`warningHue`:n=U({theme:e,hue:`warningHue`,shade:400}),e.colors.base===`light`&&(r=U({theme:e,variable:`foreground.warningEmphasis`}));break;case`kale`:case`chromeHue`:n=U({theme:e,hue:`chromeHue`,dark:{shade:500},light:{shade:800}});break;default:{let i={...e,colors:{...e.colors,base:`light`}},a={...e,colors:{...e.colors,base:`dark`}},o=`foreground.onEmphasis`;n=U({theme:e,hue:t}),r=Vo(n,U({theme:a,variable:o}),U({theme:i,variable:o}),!1);break}}else n=U({theme:e,hue:`neutralHue`,dark:{shade:800},light:{shade:200}}),r=U({theme:e,variable:`foreground.default`});return I([`background-color:`,`;color:`,`;&:hover{color:`,`;}`,``],n,r,r,ws({theme:e,shadowWidth:`sm`,selector:`&:focus`}))},X_=({$isPill:e,$isRound:t,$size:n,theme:r})=>{let i,a,o,s,c,l;n===`small`?(i=r.borderRadii.sm,a=r.space.base,o=r.space.base*4,s=r.fontSizes.xs,l=0):n===`large`?(i=r.borderRadii.md,a=r.space.base*3,o=r.space.base*8,s=r.fontSizes.sm,l=r.space.base*6):(i=r.borderRadii.sm,a=r.space.base*2,o=r.space.base*5,s=r.fontSizes.sm,l=r.space.base*4);let u=n===`large`?H(`${i} - 1`):i,d=(o-l)/2,f=t?d:d*2;return t?(i=`50%`,a=0,c=o,u=`50%`):e&&(i=`100px`,u=`50%`,n===`small`?(a=r.space.base*1.5,c=r.space.base*6):c=n===`large`?r.space.base*12:r.space.base*7.5),I([`border-radius:`,`;padding:0 `,`px;min-width:`,`;height:`,`px;line-height:`,`;font-size:`,`;& > *{width:100%;min-width:`,`;}& `,`{margin-`,`:-`,`px;margin-`,`:`,`px;border-radius:`,`;width:`,`px;min-width:`,`px;height:`,`px;}& `,`{margin-`,`:-`,`px;border-radius:`,`;width:`,`px;height:`,`px;}`],i,a,c?`${c}px`:`calc(${a*2}px + 1ch)`,o,xs(o,s),s,c?`${c-a*2}px`:`1ch`,K_,r.rtl?`right`:`left`,a-d,r.rtl?`left`:`right`,f,u,l,l,l,q_,r.rtl?`left`:`right`,a,i,o,o)},Z_=L.div.attrs(()=>({"data-garden-id":J_,"data-garden-version":`9.15.8`})).withConfig({displayName:`StyledTag`,componentId:`sc-1jvbe03-0`})([`display:inline-flex;flex-wrap:nowrap;align-items:center;justify-content:`,`;transition:box-shadow 0.1s ease-in-out;box-sizing:border-box;border:0;max-width:100%;overflow:hidden;vertical-align:middle;text-decoration:none;white-space:nowrap;font-weight:`,`;direction:`,`;`,`;&:hover{cursor:default;text-decoration:none;}&:link:hover,&:visited:hover{cursor:pointer;}&:any-link:hover{cursor:pointer;}`,`{text-decoration:none;}`,`;& > *{overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;}& b{font-weight:`,`;}& `,`{display:`,`;}& `,`{display:`,`;}`,`;`],e=>e.$isRound&&`center`,e=>!e.$isRegular&&e.theme.fontWeights.semibold,e=>e.theme.rtl?`rtl`:`ltr`,e=>X_(e),Cs,e=>Y_(e),e=>e.theme.fontWeights.semibold,K_,e=>(e.$isRound||e.$size===`small`)&&`none`,q_,e=>e.$isRound&&`none`,B),Q_;function $_(){return $_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$_.apply(null,arguments)}var ev=function(e){return g.createElement(`svg`,$_({xmlns:`http://www.w3.org/2000/svg`,width:12,height:12,focusable:`false`,viewBox:`0 0 12 12`,"aria-hidden":`true`},e),Q_||=g.createElement(`path`,{stroke:`currentColor`,strokeLinecap:`round`,d:`M3 9l6-6m0 6L3 3`}))},tv=(0,g.forwardRef)((e,t)=>{let n=Ss(tv,e,`aria-label`,`Remove`);return g.createElement(q_,Object.assign({ref:t,"aria-label":n},e,{type:`button`,tabIndex:-1}),g.createElement(ev,null))});tv.displayName=`Tag.Close`;var nv=tv,rv=e=>g.createElement(K_,e);rv.displayName=`Tag.Avatar`;var iv=rv,av=(0,g.forwardRef)(({isPill:e,isRound:t,isRegular:n,size:r=`medium`,hue:i,...a},o)=>g.createElement(Z_,Object.assign({$hue:i,$isPill:e,$isRegular:n,$isRound:t,$size:r,ref:o},a)));av.displayName=`Tag`,av.propTypes={size:W.default.oneOf(G_),hue:W.default.string,isPill:W.default.bool,isRound:W.default.bool,isRegular:W.default.bool};var ov=av;ov.Avatar=iv,ov.Close=nv;var sv=L.mark`
  background: ${Gu.yellow[300]};
  color: inherit;
  padding: 0;
  border-radius: 2px;
`;function cv(e,t){if(!t||typeof e!=`string`||!e)return e;let n=e.toLowerCase(),r=t.toLowerCase(),i=[],a=0,o=0;for(;;){let t=n.indexOf(r,a);if(t===-1){i.push(e.slice(a));break}t>a&&i.push(e.slice(a,t)),i.push((0,K.jsx)(sv,{children:e.slice(t,t+r.length)},o++)),a=t+r.length}return i}function lv(e,t){if(!t||e==null||typeof e==`boolean`)return e;if(typeof e==`string`)return cv(e,t);if(typeof e==`number`)return e;if(Array.isArray(e))return e.map((e,n)=>(0,K.jsx)(g.Fragment,{children:lv(e,t)},n));if(g.isValidElement(e)){if(e.type===`input`||e.type===`textarea`)return e;let n=e.props?.children;return n==null?e:g.cloneElement(e,void 0,lv(n,t))}return e}function uv(e){return e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(uv).join(` `):g.isValidElement(e)?uv(e.props?.children):``}var dv=L.div`
  padding-bottom: 8px;
`,fv=L(hh)`
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
`,pv=L.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
  font-weight: 500;
`,mv=L.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`,hv=L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`,gv=L.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
`,_v=L.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,vv=L.div`
  display: flex;
  flex-direction: column;
`,yv=L.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3941;
`,bv=L.span`
  font-size: 13px;
  color: #68737d;
  margin-top: 2px;
`,xv=[{value:`no_access`,label:`No access`,description:`Users with this custom role can’t view or access AI agents. Selecting this option doesn’t hide AI agents from the product icons menu, but users can’t access the AI agents dashboard.`},{value:`client_admin`,label:`Client admin`,description:`Users can manage all AI agent capabilities, including creating, editing, publishing, and deleting agents, configuring settings, and managing API integrations.`},{value:`client_editor`,label:`Client editor`,description:`Users can create and edit AI agents, but can’t publish or delete agents, configure settings, or manage API integrations.`},{value:`client_user`,label:`Client user`,description:`Users can manage AI agents with restrictions on sensitive capabilities, such as agents cannot access API integration.`}],Sv=[`Opt in for AI agents`,`Opting in to AI agents moves settings to this page`,`AI agent settings will only be available here in the roles and permissions pages.`,...xv.flatMap(e=>[e.label,e.description])].join(` `);function Cv({roleId:e,query:t,directAccess:n=!1}){let r=(0,g.useRef)(null),{getAiAgentsState:i,updateAiAgentsState:a}=gd(),{optedIn:o,saved:s,accessLevel:c}=i(e),l=xv,u=n||o||s;return(0,g.useEffect)(()=>{n&&(c?o||a(e,{optedIn:!0}):a(e,{optedIn:!0,accessLevel:`no_access`}))},[n,c,o,e,a]),(0,K.jsxs)(dv,{children:[!n&&!s&&(0,K.jsxs)(pv,{children:[(0,K.jsx)(mv,{checked:o,onChange:t=>{a(e,{optedIn:t.target.checked,...t.target.checked&&!c?{accessLevel:`no_access`}:{}}),t.target.checked&&setTimeout(()=>{r.current?.scrollIntoView({behavior:`smooth`,block:`center`})},50)}}),cv(`Opt in for AI agents`,t)]}),!n&&!s&&(0,K.jsxs)(fv,{type:`info`,role:`note`,children:[(0,K.jsx)(hh.Title,{children:cv(`Opting in to AI agents moves settings to this page`,t)}),(0,K.jsx)(hh.Paragraph,{children:cv(`AI agent settings will only be available here in the roles and permissions pages.`,t)})]}),u&&(0,K.jsx)(hv,{ref:r,style:n?{marginTop:0}:void 0,children:l.map(n=>(0,K.jsxs)(gv,{children:[(0,K.jsx)(_v,{name:`ai-agents-access-${e}`,value:n.value,checked:c===n.value,onChange:()=>a(e,{optedIn:!0,accessLevel:n.value})}),(0,K.jsxs)(vv,{children:[(0,K.jsx)(yv,{children:cv(n.label,t)}),(0,K.jsx)(bv,{children:cv(n.description,t)})]})]},n.value))})]})}var wv=L.div`
  padding-bottom: 8px;
`,Tv=L(hh)`
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
`,Ev=L.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
  font-weight: 500;
`,Dv=L.input.attrs({type:`checkbox`})`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`,Ov=L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`,kv=L.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
`,Av=L.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`,jv=L.div`
  display: flex;
  flex-direction: column;
`,Mv=L.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3941;
`,Nv=L.span`
  font-size: 13px;
  color: #68737d;
  margin-top: 2px;
`,Pv=L.div`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e9ebed;
`,Fv=L.div`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`,Iv=L.span`
  font-size: 12px;
  color: #68737d;
  display: block;
  margin: 4px 0 0 24px;
`,Lv=e=>[{value:`no_access`,label:`No access`,description:`Users with this custom role can’t view or access ${e}. Selecting this option doesn’t hide ${e} from the product icons menu, but users can’t access the ${e} dashboard.`},{value:`client_admin`,label:`Client admin`,description:`Users can manage all ${e} capabilities, including creating, editing, publishing, and deleting, configuring settings, and managing API integrations.`},{value:`client_editor`,label:`Client editor`,description:`Users can create and edit ${e}, but can’t publish or delete, configure settings, or manage API integrations.`},{value:`client_user`,label:`Client user`,description:`Users can manage ${e} with restrictions on sensitive capabilities, such as no access to API integrations.`}],Rv=(e,{directAccess:t=!1,includeManage:n=!1}={})=>[...t?[]:[`Opt in for ${e}`,`Opting in to ${e} moves settings to this page`,`${e} settings will only be available here in the roles and permissions pages.`],...Lv(e).flatMap(e=>[e.label,e.description]),...n?[`Manage Guide`,`manage articles`,`themes`,`settings`,`knowledge`]:[]].join(` `);function zv({roleId:e,product:t,query:n,directAccess:r=!1,includeManageKnowledge:i=!1}){let a=(0,g.useRef)(null),{getProductAccess:o,updateProductAccess:s}=gd(),{optedIn:c,saved:l,accessLevel:u}=o(e,t.id),d=Lv(t.name),f=r||c||l;return(0,g.useEffect)(()=>{r&&(u?c||s(e,t.id,{optedIn:!0}):s(e,t.id,{optedIn:!0,accessLevel:`no_access`}))},[r,u,c,e,t.id,s]),(0,K.jsxs)(wv,{children:[!r&&!l&&(0,K.jsxs)(Ev,{children:[(0,K.jsx)(Dv,{checked:c,onChange:n=>{s(e,t.id,{optedIn:n.target.checked,...n.target.checked&&!u?{accessLevel:`no_access`}:{}}),n.target.checked&&setTimeout(()=>{a.current?.scrollIntoView({behavior:`smooth`,block:`center`})},50)}}),cv(`Opt in for ${t.name}`,n)]}),!r&&!l&&(0,K.jsxs)(Tv,{type:`info`,role:`note`,children:[(0,K.jsx)(hh.Title,{children:cv(`Opting in to ${t.name} moves settings to this page`,n)}),(0,K.jsx)(hh.Paragraph,{children:cv(`${t.name} settings will only be available here in the roles and permissions pages.`,n)})]}),f&&(0,K.jsx)(Ov,{ref:a,style:r?{marginTop:0}:void 0,children:d.map(r=>(0,K.jsxs)(kv,{children:[(0,K.jsx)(Av,{name:`${t.id}-access-${e}`,value:r.value,checked:u===r.value,onChange:()=>s(e,t.id,{optedIn:!0,accessLevel:r.value})}),(0,K.jsxs)(jv,{children:[(0,K.jsx)(Mv,{children:cv(r.label,n)}),(0,K.jsx)(Nv,{children:cv(r.description,n)})]})]},r.value))}),i&&(0,K.jsxs)(Pv,{children:[(0,K.jsx)(Fv,{children:cv(`Manage Knowledge`,n)}),(0,K.jsxs)(Ev,{style:{marginBottom:0},children:[(0,K.jsx)(Dv,{defaultChecked:!0}),cv(`Manage Guide`,n)]}),(0,K.jsx)(Iv,{children:cv(`Can by default have an admin and can manage articles, themes, and settings.`,n)})]})]})}var Bv=L.section`
  box-sizing: border-box;
  max-width: ${e=>e.$maxWidth||630}px;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
`,Vv=L.button.attrs({type:`button`})`
  display: flex;
  align-items: flex-start;
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
`,Hv=L.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Uv=L.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Wv=L.span`
  font-size: 13px;
  color: #68737d;
  line-height: 1.45;
`,Gv=L.svg`
  flex-shrink: 0;
  margin-top: 5px;
  color: #68737d;
  transform: ${e=>e.$open?`rotate(180deg)`:`none`};
`,Kv=L.div`
  padding: 20px 16px 16px;
  border-top: 1px solid #e9ebed;
`;function qv({title:e,description:t,open:n,onToggle:r,query:i,searchText:a,maxWidth:o,children:s}){let c=(i||``).trim(),l=!!c&&`${e} ${t||``} ${a??uv(s)}`.toLowerCase().includes(c.toLowerCase()),u=n||l;return(0,K.jsxs)(Bv,{$maxWidth:o,children:[(0,K.jsxs)(Vv,{onClick:r,"aria-expanded":u,children:[(0,K.jsxs)(Hv,{children:[(0,K.jsx)(Uv,{children:cv(e,c)}),t&&(0,K.jsx)(Wv,{children:cv(t,c)})]}),(0,K.jsx)(Gv,{$open:u,width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,"aria-hidden":`true`,children:(0,K.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),u&&(0,K.jsx)(Kv,{children:lv(s,c)})]})}var Jv=L.div`
  position: fixed;
  inset: 0;
  background: rgba(47, 57, 65, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`,Yv=L.div`
  background: #fff;
  border-radius: 12px;
  width: 560px;
  max-width: calc(100vw - 48px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`,Xv=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e9ebed;
`,Zv=L.h2`
  font-size: 18px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`,Qv=L.button`
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
`,$v=L.div`
  padding: 24px;
`,ey=L.p`
  font-size: 14px;
  color: #2f3941;
  line-height: 1.5;
  margin: 0 0 24px;
`,ty=L.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`,ny=L.div`
  position: relative;
`,ry=L.div`
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
`,iy=L.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) ${e=>e.$open?`rotate(180deg)`:`none`};
  pointer-events: none;
  display: inline-flex;
  color: #68737d;
`,ay=L.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #e9ebed;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,oy=L.button`
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
`,sy=L.input`
  flex: 1;
  min-width: 60px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0;
  height: 38px;
`,cy=L.div`
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
`,ly=L.div`
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
`,uy=L.span`
  width: 16px;
  color: #1f73b7;
  font-size: 14px;
`,dy=L.div`
  display: flex;
  flex-direction: column;
`,fy=L.span`
  font-size: 15px;
  color: ${e=>e.$disabled?`#c2c8cc`:`#2f3941`};
`,py=L.span`
  font-size: 13px;
  color: ${e=>e.$disabled?`#c2c8cc`:`#68737d`};
`,my=L.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
`;function hy({onClose:e,onAssign:t}){let[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)([]),[o,s]=(0,g.useState)(``),c=(0,g.useRef)(null);(0,g.useEffect)(()=>{let e=e=>{c.current&&!c.current.contains(e.target)&&r(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let l=e=>{e.disabled||(a(t=>t.some(t=>t.id===e.id)?t.filter(t=>t.id!==e.id):[...t,e]),s(``))},u=e=>{a(t=>t.filter(t=>t.id!==e))},d=[...cd,{id:`rusty-admin`,name:`Rusty Admin`,role:`Admin (can't change your own role)`,disabled:!0}],f=o.trim().toLowerCase(),p=f?d.filter(e=>e.name.toLowerCase().includes(f)||(e.email||``).toLowerCase().includes(f)||e.role.toLowerCase().includes(f)):d;return(0,K.jsx)(Jv,{onMouseDown:t=>{t.target===t.currentTarget&&e()},children:(0,K.jsxs)(Yv,{children:[(0,K.jsxs)(Xv,{children:[(0,K.jsx)(Zv,{children:`Assign role`}),(0,K.jsx)(Qv,{"aria-label":`Close`,onClick:e,children:`✕`})]}),(0,K.jsxs)($v,{children:[(0,K.jsx)(ey,{children:`Team members can only have one role at a time. When their role changes, their permissions change too.`}),(0,K.jsx)(ty,{children:`Select team members`}),(0,K.jsxs)(ny,{ref:c,children:[(0,K.jsxs)(ry,{$open:n,onClick:()=>r(!0),children:[i.map(e=>(0,K.jsxs)(ay,{children:[e.name,(0,K.jsx)(oy,{onClick:t=>{t.stopPropagation(),u(e.id)},children:`✕`})]},e.id)),(0,K.jsx)(sy,{value:o,placeholder:i.length===0?`Search team members`:``,onChange:e=>{s(e.target.value),r(!0)},onFocus:()=>r(!0)}),(0,K.jsx)(iy,{$open:n,children:(0,K.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),n&&(0,K.jsxs)(cy,{children:[p.length===0&&(0,K.jsx)(ly,{$disabled:!0,children:(0,K.jsx)(dy,{children:(0,K.jsxs)(py,{$disabled:!0,children:[`No results for "`,o.trim(),`"`]})})}),p.map(e=>{let t=i.some(t=>t.id===e.id);return(0,K.jsxs)(ly,{$disabled:e.disabled,$highlighted:t,onClick:()=>l(e),children:[(0,K.jsx)(uy,{children:t?`✓`:``}),(0,K.jsxs)(dy,{children:[(0,K.jsx)(fy,{$disabled:e.disabled,children:e.name}),(0,K.jsx)(py,{$disabled:e.disabled,children:e.role})]})]},e.id)})]})]})]}),(0,K.jsxs)(my,{children:[(0,K.jsx)(Nm,{isBasic:!0,onClick:e,children:`Cancel`}),(0,K.jsx)(Nm,{isPrimary:!0,onClick:()=>t(i.map(e=>e.id)),children:`Assign role`})]})]})})}var gy=[{id:`user-management`,label:`User management`},{id:`gdpr`,label:`GDPR & privacy`},{id:`tickets`,label:`Tickets`},{id:`workflow`,label:`Agent workflow`},{id:`automation`,label:`Automations & rules`},{id:`reporting`,label:`Reporting`},{id:`knowledge`,label:`Knowledge`},{id:`ai-agents`,label:`AI agents`}],_y=[{id:`settings`,label:`Settings`},{id:`products`,label:`Products`}],vy={tickets:{group:`settings`,available:!0,tags:[`tickets`,`workflow`]},"custom-objects":{group:`settings`,available:!0,tags:[`tickets`]},people:{group:`settings`,available:!0,tags:[`user-management`]},channels:{group:`settings`,available:!0,tags:[`tickets`,`channels`]},"agent-workflow":{group:`settings`,available:!0,tags:[`workflow`]},"business-rules":{group:`settings`,available:!0,tags:[`automation`,`workflow`]},security:{group:`settings`,available:!0,tags:[`gdpr`,`user-management`,`security`]},knowledge:{group:`products`,available:!0,tags:[`knowledge`]},reporting:{group:`settings`,available:!0,tags:[`reporting`]},support:{group:`products`,available:!0,tags:[`tickets`,`user-management`]},analytics:{group:`products`,available:!0,tags:[`reporting`]},voice:{group:`products`,available:!0,tags:[`tickets`,`channels`]},chat:{group:`products`,available:!0,tags:[`tickets`,`channels`]},"ai-agents":{group:`products`,available:!0,tags:[`ai-agents`]},qa:{group:`products`,available:!1,tags:[`reporting`,`workflow`]}},yy={availableOnly:!0,groups:[],topics:[]},by=e=>{let t=vy[e];if(!t)return``;let n=gy.filter(e=>t.tags.includes(e.id)).map(e=>e.label);return[...t.tags,...n,t.group].join(` `)};function xy(e,t){let n=vy[e];return!n||!(t.availableOnly&&!n.available||t.groups.length&&!t.groups.includes(n.group)||t.topics.length&&!t.topics.some(e=>n.tags.includes(e)))}function Sy(e,t){return!t.topics.length||e.some(e=>t.topics.includes(e))}function Cy(e){let t=0;return e.availableOnly&&(t+=1),t+=e.groups.length,t+=e.topics.length,t}var wy=L.div`
  position: fixed;
  top: ${48}px;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(47, 57, 65, 0.45);
  z-index: 1100;
`,Ty=L.div`
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
`,Ey=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 20px 16px;
  flex-shrink: 0;
`,Dy=L.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #2f3941;
`,Oy=L.button.attrs({type:`button`})`
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
`,ky=L.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 24px;
`,Ay=L.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid #e9ebed;
  background: #fff;
  flex-shrink: 0;
`,jy=L.div`
  margin-bottom: 28px;
`,My=L.h3`
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Ny=L.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Py=L.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`,Fy=L.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-top: 2px;
  accent-color: #1f73b7;
  cursor: pointer;
`;function Iy(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}var Ly=()=>(0,K.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,K.jsx)(`path`,{d:`M1 1l10 10M11 1L1 11`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})});function Ry({isOpen:e,onClose:t,value:n,onApply:r}){let[i,a]=(0,g.useState)(n);if((0,g.useEffect)(()=>{e&&a(n)},[e,n]),(0,g.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t()};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[e,t]),!e)return null;let o=()=>{r(i),t()},s=document.querySelector(`[data-comment-root="true"]`)||document.body;return(0,v.createPortal)((0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(wy,{onClick:t,"aria-hidden":`true`}),(0,K.jsxs)(Ty,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`permissions-filter-title`,children:[(0,K.jsxs)(Ey,{children:[(0,K.jsx)(Dy,{id:`permissions-filter-title`,children:`Filter`}),(0,K.jsx)(Oy,{"aria-label":`Close`,onClick:t,children:(0,K.jsx)(Ly,{})})]}),(0,K.jsxs)(ky,{children:[(0,K.jsxs)(jy,{children:[(0,K.jsx)(My,{children:`Availability`}),(0,K.jsxs)(Py,{children:[(0,K.jsx)(Fy,{checked:i.availableOnly,onChange:()=>a(e=>({...e,availableOnly:!e.availableOnly}))}),`Only available settings`]})]}),(0,K.jsxs)(jy,{children:[(0,K.jsx)(My,{children:`Group`}),(0,K.jsx)(Ny,{children:_y.map(e=>(0,K.jsxs)(Py,{children:[(0,K.jsx)(Fy,{checked:i.groups.includes(e.id),onChange:()=>a(t=>({...t,groups:Iy(t.groups,e.id)}))}),e.label]},e.id))})]}),(0,K.jsxs)(jy,{children:[(0,K.jsx)(My,{children:`Topic`}),(0,K.jsx)(Ny,{children:gy.map(e=>(0,K.jsxs)(Py,{children:[(0,K.jsx)(Fy,{checked:i.topics.includes(e.id),onChange:()=>a(t=>({...t,topics:Iy(t.topics,e.id)}))}),e.label]},e.id))})]})]}),(0,K.jsxs)(Ay,{children:[(0,K.jsx)(Nm,{isBasic:!0,onClick:t,children:`Cancel`}),(0,K.jsx)(Nm,{isPrimary:!0,onClick:o,children:`Apply Filters`})]})]})]}),s)}var zy=(0,g.createContext)({version:`v2`,filters:{availableOnly:!1,groups:[],topics:[]}});function By({version:e,filters:t,children:n}){return(0,K.jsx)(zy.Provider,{value:{version:e,filters:t},children:n})}function Vy(){return(0,g.useContext)(zy)}function Y({tags:e=[],children:t}){let{version:n,filters:r}=Vy();return n===`v3.5`&&!Sy(e,r)?null:t}var Hy=L.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`,Uy=L.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`,Wy=L.div`
  padding: 24px 32px;
  flex: 1;
`,Gy=L.aside`
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
`,Ky=L.h3`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 24px;
`,qy=L.div`
  text-align: center;
  padding: 40px 20px;
`,Jy=L.div`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`,Yy=L.div`
  font-size: 14px;
  color: #68737d;
  line-height: 1.5;
  margin-bottom: 16px;
`,Xy=L.p`
  font-size: 14px;
  color: #68737d;
  line-height: 1.5;
  margin: 0 0 24px;
`,Zy=L.div`
  border-top: 1px solid #e9ebed;
`,Qy=L.div`
  padding: 12px 0;
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
`,$y=L.div`
  padding: 14px 0;
  border-bottom: 1px solid #e9ebed;
`,eb=L.span`
  font-size: 14px;
  color: #1f73b7;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,tb=L(hh)`
  position: relative;
  margin-top: 8px;
  padding: 8px 12px 8px 32px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.4;
  background-color: #f6eba6;
  border-color: #f6eba6;

  /* Garden ships the outlined warning glyph; swap it for the filled one. */
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
`,nb=L.div`
  font-size: 14px;
  color: #87929d;
`,rb=L.div`
  margin: 2px 0 0;
  font-size: 13px;
  line-height: 1.4;
  color: #3b3405;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ib=()=>(0,K.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,"aria-hidden":`true`,focusable:`false`,style:{position:`absolute`,left:10,top:10,color:`#7f7004`},children:(0,K.jsx)(`path`,{fillRule:`evenodd`,fill:`currentColor`,d:`M8.9 1.9c-.4-.8-1.4-.8-1.8 0L.7 12.6c-.5.8.1 1.9 1 1.9h12.6c.9 0 1.5-1.1 1-1.9L8.9 1.9zM7.25 6h1.5v4.5h-1.5V6zM8 13.25a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9z`})}),ab=L.div``,ob=L.div`
  height: 28px;
  flex-shrink: 0;
`,sb=L.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px;
  border-top: 1px solid #e9ebed;
  background: #fff;
`,cb=L.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
    min-width: 410px;
  }
`,lb=L.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`,ub=L.div`
  position: relative;
  flex-shrink: 0;
  /* Container already pads 24px top / 32px right — add the remainder for 40px total */
  margin-top: 16px;
  margin-right: 8px;
`,db=L(Nm)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1f73b7;
  border-color: #1f73b7;

  &:hover {
    color: #144a75;
    border-color: #144a75;
  }
`,fb=L.span`
  display: inline-flex;
  transform: ${e=>e.$open?`rotate(180deg)`:`none`};
`,pb=L.div`
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
`,mb=L.button`
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
`,hb=L.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px;
`,gb=L.p`
  font-size: 13px;
  color: #68737d;
  margin: 0 0 32px;
`,_b=L.div`
  margin-bottom: 28px;
`,vb=L.div`
  display: flex;
  justify-content: ${e=>e.$endOnly?`flex-end`:`space-between`};
  align-items: flex-end;
  gap: 16px;
  box-sizing: border-box;
  max-width: ${e=>e.$maxWidth||630}px;
  margin-bottom: 12px;
`,yb=L.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  max-width: ${e=>e.$maxWidth||400}px;
  width: 100%;
  margin-bottom: ${e=>e.$spaceBeforeSettings?20:12}px;
`,bb=L.div`
  width: 100%;
  max-width: ${e=>e.$maxWidth||320}px;
  color: #68737d;
`,xb=L(Nm)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,Sb=L.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  max-width: ${e=>e.$maxWidth||630}px;
  margin-bottom: 20px;
`,Cb=L.button.attrs({type:`button`})`
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
`,wb=L.h2`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 28px 0 8px;
  max-width: ${e=>e.$maxWidth||400}px;

  &:first-of-type {
    margin-top: 0;
  }
`,Tb=L.p`
  font-size: 13px;
  color: #68737d;
  margin: 0 0 12px;
  max-width: ${e=>e.$maxWidth||400}px;
  line-height: 1.45;
`,Eb=L.button.attrs({type:`button`})`
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
`,X=L.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 16px 0 8px;
`,Db=L.div`
  margin-bottom: 16px;
`,Ob=L.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #2f3941;
  margin-bottom: 4px;
`,kb=L.span`
  font-size: 12px;
  color: #68737d;
  font-weight: 400;
`,Ab=L.input`
  width: 100%;
  max-width: 400px;
  padding: 8px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.15);
  }
`,jb=L.textarea`
  width: 100%;
  max-width: 400px;
  padding: 8px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  min-height: 60px;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.15);
  }
`,Z=L.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Q=L.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`,$=L.input.attrs({type:`checkbox`})`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
`,Mb=L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`,Nb=L.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`,Pb=L.input.attrs({type:`radio`})`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
`,Fb=L.span`
  color: #1f73b7;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`,Ib=[`tickets`,`custom-objects`,`people`,`channels`,`agent-workflow`,`business-rules`,`security`,`knowledge`,`reporting`,`ai-agents`],Lb=[...Ib.filter(e=>e!==`ai-agents`),...nd.map(e=>e.id)],Rb=Ib.filter(e=>e!==`ai-agents`&&e!==`knowledge`),zb=rd.map(e=>e.id),Bb=[...Rb,...zb],Vb={tickets:[[`tickets`],[`tickets`],[`tickets`],[`tickets`],[`tickets`],[`tickets`]],"custom-objects":[[`tickets`]],people:[[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`],[`user-management`]],channels:[[`channels`,`tickets`],[`channels`,`tickets`]],"agent-workflow":[[`workflow`],[`workflow`],[`workflow`],[`workflow`],[`workflow`],[`workflow`]],"business-rules":[[`automation`],[`automation`],[`automation`],[`automation`],[`automation`]],security:[[`gdpr`,`security`],[`gdpr`,`security`],[`gdpr`,`user-management`]],reporting:[[`reporting`],[`reporting`],[`reporting`]]};function Hb(e,t,n){if(n!==`v3.5`||!t.topics.length)return!0;let r=Vb[e];return!r||r.some(e=>Sy(e,t))}function Ub(){let{id:e}=Je(),t=Ke(),n=We(),{version:r,getAiAgentsState:i,updateAiAgentsState:a,roles:o,addRole:s,setAiAgentsRoleId:c,roleAssignments:l,assignMembersToRole:u,getProductAccess:d,saveProductAccess:f,copyProductAccess:p}=gd(),m=r===`v3`||r===`v3.5`,h=m?rd:nd,_=m?ad:id,[v,y]=(0,g.useState)(!1),[b,x]=(0,g.useState)(`Role saved successfully`),[S,C]=(0,g.useState)(!1),[w,ee]=(0,g.useState)(!1),[te,ne]=(0,g.useState)(!1),[T,E]=(0,g.useState)(yy),re=(0,g.useRef)(null),D=e===`create`,ie=D?null:o.find(t=>t.id===e),ae=ie?.name||``,[O,oe]=(0,g.useState)(null),se=D?O:e,k=se||`create`,ce=i(k),A=ce.optedIn&&!ce.saved&&!!ce.accessLevel,le=td[ce.accessLevel],ue=e=>!(ce.accessLevel===`no_access`&&e.aiAgentsAccess===`No Access`),de=e=>{let t=[];if(r!==`v1`)for(let n of _){let r=d(k,n.id);if(r.optedIn&&!r.saved&&r.accessLevel){let i=ud[e.id]?.[n.id],a=td[r.accessLevel];i&&i!==a&&t.push({key:n.id,product:n.name,body:`${i} to ${a}`})}}return A&&ue(e)&&t.push({key:`ai-agents`,product:`AI agents`,body:`${e.aiAgentsAccess} to ${le}`}),t},[fe,pe]=(0,g.useState)(ie?.name||``),[me,he]=(0,g.useState)(ie?.description||``),ge=(0,g.useRef)(null),[_e,ve]=(0,g.useState)(r===`v1`?{"ai-agents":!0}:{}),[ye,be]=(0,g.useState)(``),xe=ye.trim();(0,g.useEffect)(()=>{pe(ie?.name||``),he(ie?.description||``),ve(r===`v1`?{"ai-agents":!0}:{}),be(``),E(m?yy:{availableOnly:!1,groups:[],topics:[]}),ne(!1)},[e,ie?.name,ie?.description,r,m]),(0,g.useEffect)(()=>{n.state?.scrollToAiAgents&&setTimeout(()=>{ge.current?.scrollIntoView({behavior:`smooth`,block:`start`})},100)},[n.state]),(0,g.useEffect)(()=>{let e=e=>{re.current&&!re.current.contains(e.target)&&ee(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let Se=(se&&l[se]||[]).map(e=>cd.find(t=>t.id===e)).filter(Boolean),Ce=!D||!!O,we=Ce,Te=()=>{if(D&&fe.trim()){let e=fe.toLowerCase().replace(/\s+/g,`-`);o.some(t=>t.id===e)||s({id:e,name:fe.trim(),type:`Custom`,description:me.trim()}),oe(e),ce.optedIn&&(a(e,{...ce,saved:!0}),c(e)),p(`create`,e),a(`create`,{optedIn:!1,saved:!1,accessLevel:null})}else!D&&ce.optedIn&&(a(e,{saved:!0}),c(e));D||f(e),x(D?`Role created`:`Role saved successfully`),y(!0),setTimeout(()=>y(!1),4e3)},Ee=e=>{se&&u(se,e),C(!1),x(`Team member assigned`),y(!0),setTimeout(()=>y(!1),4e3)},De=r===`v1`?Ib:m?Bb:Lb,Oe=De.every(e=>_e[e]),ke=()=>{ve(Oe?{}:Object.fromEntries(De.map(e=>[e,!0])))},Ae=e=>{ve(t=>({...t,[e]:!t[e]}))},je=e=>({open:!!_e[e],onToggle:()=>Ae(e),query:xe,maxWidth:630}),Me=e=>m?xy(e,T)?r===`v3.5`&&Vb[e]?Hb(e,T,r):!0:!1:!0,Ne=(e,t)=>{E(n=>e===`available`?{...n,availableOnly:!1}:e===`group`?{...n,groups:n.groups.filter(e=>e!==t)}:e===`topic`?{...n,topics:n.topics.filter(e=>e!==t)}:n)},Pe=()=>{E({availableOnly:!1,groups:[],topics:[]})},Fe=Cy(T),Ie=[];T.availableOnly&&Ie.push({key:`available`,kind:`available`,id:`available`,label:`Only available settings`}),T.groups.forEach(e=>{let t=_y.find(t=>t.id===e);t&&Ie.push({key:`group-${e}`,kind:`group`,id:e,label:t.label})}),T.topics.forEach(e=>{let t=gy.find(t=>t.id===e);t&&Ie.push({key:`topic-${e}`,kind:`topic`,id:e,label:t.label})});let Le=(e,t=``)=>[t,m?by(e):``].filter(Boolean).join(` `);return(0,g.useEffect)(()=>{if(!m||!(T.groups.length>0||T.topics.length>0))return;let e=(r===`v3.5`||r===`v3`?Bb:Lb).filter(e=>xy(e,T)?r===`v3.5`&&Vb[e]?Hb(e,T,r):!0:!1);e.length&&ve(t=>{let n={...t},r=!1;for(let t of e)n[t]||(n[t]=!0,r=!0);return r?n:t})},[m,T,r]),(0,K.jsxs)(Hy,{children:[v&&(0,K.jsx)(cb,{children:(0,K.jsxs)(bh,{type:`success`,children:[(0,K.jsx)(bh.Title,{children:b}),(0,K.jsx)(bh.Close,{"aria-label":`Close`,onClick:()=>y(!1)})]})}),(0,K.jsxs)(Uy,{children:[(0,K.jsxs)(Wy,{children:[(0,K.jsx)(Fp,{items:[{label:`People`},{label:`Team`},{label:`Roles`,path:`/roles`},{label:Ce&&D?`Edit role`:D?`Create role`:ae}]}),(0,K.jsxs)(lb,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(hb,{children:D?Ce?fe:`Create role`:ae}),(0,K.jsx)(gb,{children:`Learn about role permissions and access`})]}),we&&(0,K.jsxs)(ub,{ref:re,children:[(0,K.jsxs)(db,{onClick:()=>ee(e=>!e),children:[`Actions`,(0,K.jsx)(fb,{$open:w,children:(0,K.jsx)(`svg`,{width:`12`,height:`8`,viewBox:`0 0 12 8`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsx)(`path`,{d:`M1 1.5L6 6.5L11 1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),w&&(0,K.jsxs)(pb,{children:[(0,K.jsx)(mb,{onClick:()=>ee(!1),children:`Clone role`}),(0,K.jsx)(mb,{onClick:()=>{ee(!1),C(!0)},children:`Assign role`}),(0,K.jsx)(mb,{$danger:!0,onClick:()=>ee(!1),children:`Delete role`})]})]})]}),(0,K.jsxs)(_b,{children:[(0,K.jsxs)(Db,{children:[(0,K.jsx)(Ob,{children:`Name* (required)`}),(0,K.jsx)(Ab,{value:fe,onChange:e=>pe(e.target.value)})]}),(0,K.jsxs)(Db,{children:[(0,K.jsx)(Ob,{children:`Description`}),(0,K.jsx)(jb,{value:me,onChange:e=>he(e.target.value)})]})]}),m?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(yb,{$maxWidth:400,$spaceBeforeSettings:Ie.length===0,children:[(0,K.jsx)(bb,{$maxWidth:400,children:(0,K.jsxs)(I_,{children:[(0,K.jsx)(I_.Label,{children:`Search permissions`}),(0,K.jsx)(W_,{start:(0,K.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,K.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.25`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,K.jsx)(`path`,{d:`M11.2 11.2L15 15`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),value:ye,onChange:e=>be(e.target.value)})]})}),(0,K.jsxs)(xb,{onClick:()=>ne(!0),children:[`Filter`,Fe>0?` (${Fe})`:``]})]}),Ie.length>0&&(0,K.jsxs)(Sb,{$maxWidth:630,children:[Ie.map(e=>(0,K.jsxs)(ov,{children:[(0,K.jsx)(`span`,{children:e.label}),(0,K.jsx)(ov.Close,{"aria-label":`Remove filter`,onClick:()=>Ne(e.kind,e.id)})]},e.key)),(0,K.jsx)(Cb,{onClick:Pe,children:`Clear filters`})]})]}):(0,K.jsxs)(vb,{$maxWidth:630,children:[(0,K.jsx)(bb,{$maxWidth:320,children:(0,K.jsxs)(I_,{children:[(0,K.jsx)(I_.Label,{children:`Search permissions`}),(0,K.jsx)(W_,{start:(0,K.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,focusable:`false`,children:[(0,K.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.25`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,K.jsx)(`path`,{d:`M11.2 11.2L15 15`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),value:ye,onChange:e=>be(e.target.value)})]})}),(0,K.jsx)(Eb,{onClick:ke,children:Oe?`Close all`:`Open all`})]}),(0,K.jsxs)(By,{version:r,filters:T,children:[m&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(wb,{$maxWidth:630,children:`Settings`}),(0,K.jsx)(Tb,{$maxWidth:630,children:`Support permissions for this role: tickets, people, channels, and more.`}),(0,K.jsx)(vb,{$maxWidth:630,$endOnly:!0,children:(0,K.jsx)(Eb,{onClick:ke,children:Oe?`Close all`:`Open all`})})]}),Me(`tickets`)&&(0,K.jsxs)(qv,{title:`Tickets`,description:`Choose the ticket permissions for this role.`,searchText:Le(`tickets`),...je(`tickets`),children:[(0,K.jsxs)(Y,{tags:[`tickets`],children:[(0,K.jsx)(Ob,{style:{marginBottom:`12px`},children:`Tickets they can access`}),(0,K.jsxs)(Mb,{children:[(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`ticket-access`,defaultChecked:!0}),` Requested by and users in their organizations`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`ticket-access`}),` Within their groups`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`ticket-access`}),` Within their group and all public groups`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`ticket-access`}),` All, including those in private groups`]})]})]}),(0,K.jsxs)(Y,{tags:[`tickets`],children:[(0,K.jsx)(X,{children:`Manage suspended tickets`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Each allowed `,(0,K.jsx)(kb,{children:`- Automatically suspends tickets that may be risky or malicious`})]})})]}),(0,K.jsxs)(Y,{tags:[`tickets`],children:[(0,K.jsx)(X,{children:`Edit ticket properties`}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Can tag and edit tickets and edit properties`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Delete tickets`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Restrict ticket content`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Merge tickets`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Edit ticket tags`]})]})]}),(0,K.jsxs)(Y,{tags:[`tickets`],children:[(0,K.jsx)(X,{children:`Commenting permissions`}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Private comments only`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Public and private comments`]})]})]}),(0,K.jsxs)(Y,{tags:[`tickets`],children:[(0,K.jsx)(X,{children:`Manage ticket forms`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can access the Ticket Forms admin page and create, edit, update, and delete ticket forms`]})})]}),(0,K.jsxs)(Y,{tags:[`tickets`],children:[(0,K.jsx)(X,{children:`Manage ticket fields`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can customize Ticket Fields admin page and create, edit, update, and delete ticket fields`]})})]})]}),Me(`custom-objects`)&&(0,K.jsx)(qv,{title:`Custom objects`,description:`No objects yet.`,searchText:Le(`custom-objects`),...je(`custom-objects`),children:(0,K.jsx)(Y,{tags:[`tickets`],children:(0,K.jsx)(Fb,{children:`Can view and edit objects`})})}),Me(`people`)&&(0,K.jsxs)(qv,{title:`People`,description:`Choose the people permissions for this role.`,searchText:Le(`people`),...je(`people`),children:[(0,K.jsxs)(Y,{tags:[`user-management`],children:[(0,K.jsx)(Ob,{style:{marginBottom:`12px`},children:`Manage and users`}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` View only`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Add, edit, and assume profiles in organizations they belong to`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Add, edit, delete, and assume profiles for any end user`]})]})]}),(0,K.jsxs)(Y,{tags:[`user-management`],children:[(0,K.jsx)(X,{children:`Search and view lists of end users`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Find end users by name, email, phone, or organization. Without this, agents can only view individual and team profiles.`]})})]}),(0,K.jsxs)(Y,{tags:[`user-management`],children:[(0,K.jsx)(X,{children:`Manage team members`}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Not allowed`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` View only`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Create, assign roles, add, and delete`]})]})]}),(0,K.jsxs)(Y,{tags:[`user-management`],children:[(0,K.jsx)(X,{children:`Manage groups`}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Add and remove team members from groups`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Create, edit, and delete groups`]})]})]}),(0,K.jsxs)(Y,{tags:[`user-management`],children:[(0,K.jsx)(X,{children:`Manage organizations`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Add, update, delete organizations`]})})]}),(0,K.jsxs)(Y,{tags:[`user-management`],children:[(0,K.jsx)(X,{children:`Manage organization fields`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can add, edit, and delete organization fields`]})})]}),(0,K.jsxs)(Y,{tags:[`user-management`],children:[(0,K.jsx)(X,{children:`Manage roles`}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Create, edit, and delete roles`]}),(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can only edit subdomain roles`]})]})]}),(0,K.jsxs)(Y,{tags:[`user-management`],children:[(0,K.jsx)(X,{children:`Manage user fields`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can access the User Fields admin page and create, edit, update, and delete user fields`]})})]})]}),Me(`channels`)&&(0,K.jsxs)(qv,{title:`Channels`,description:`Choose the channel permissions for this role.`,searchText:Le(`channels`),...je(`channels`),children:[(0,K.jsxs)(Y,{tags:[`tickets`,`channels`],children:[(0,K.jsx)(Ob,{style:{marginBottom:`8px`},children:`Manage channels and extensions`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Channels include email, social messaging apps, and other means of communication. Extensions include triggers, automations, and integrations.`]})})]}),(0,K.jsxs)(Y,{tags:[`tickets`,`channels`],children:[(0,K.jsx)(X,{children:`Manage Facebook pages`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can set Facebook pages to create tickets from Facebook wall posts`]})})]})]}),Me(`agent-workflow`)&&(0,K.jsxs)(qv,{title:`Agent workflow`,description:`Choose the agent workflow permissions for this role.`,searchText:Le(`agent-workflow`),...je(`agent-workflow`),children:[(0,K.jsxs)(Y,{tags:[`workflow`],children:[(0,K.jsx)(Ob,{style:{marginBottom:`12px`},children:`Manage permissions`}),(0,K.jsxs)(Mb,{children:[(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`views`,defaultChecked:!0}),` My views only`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`views`}),` See views only`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`views`}),` Add and edit personal views`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`views`}),` Add and edit personal and group views`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`views`}),` Add and edit personal, group, and global views`]})]})]}),(0,K.jsxs)(Y,{tags:[`workflow`],children:[(0,K.jsx)(X,{children:`Limit number of views`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Limit views to 12 shared views and 8 personal views`]})})]}),(0,K.jsxs)(Y,{tags:[`workflow`],children:[(0,K.jsx)(X,{children:`Access view filtering`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Can view and filter views`]})})]}),(0,K.jsxs)(Y,{tags:[`workflow`],children:[(0,K.jsx)(X,{children:`Macro permissions`}),(0,K.jsxs)(Mb,{children:[(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`macros`}),` Apply only`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`macros`,defaultChecked:!0}),` Add and edit personal macros`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`macros`}),` Add and edit personal and group macros`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`macros`}),` Add and edit personal, group, and global macros`]})]})]}),(0,K.jsxs)(Y,{tags:[`workflow`],children:[(0,K.jsx)(X,{children:`Access dynamic content`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can view, edit, and add dynamic content`]})})]}),(0,K.jsxs)(Y,{tags:[`workflow`],children:[(0,K.jsx)(X,{children:`Manage contextual workspaces`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can view, edit, and edit contextual workspaces`]})})]})]}),Me(`business-rules`)&&(0,K.jsxs)(qv,{title:`Business rules`,description:`Choose the business rules permissions for this role.`,searchText:Le(`business-rules`),...je(`business-rules`),children:[(0,K.jsxs)(Y,{tags:[`automation`],children:[(0,K.jsx)(Ob,{style:{marginBottom:`8px`},children:`Automations`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can view, add, edit, and delete automations`]})})]}),(0,K.jsxs)(Y,{tags:[`automation`],children:[(0,K.jsx)(X,{children:`Skills`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can view, add, edit, and delete skills`]})})]}),(0,K.jsxs)(Y,{tags:[`automation`],children:[(0,K.jsx)(X,{children:`Service level agreements`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can view, add, edit, and delete service level agreements`]})})]}),(0,K.jsxs)(Y,{tags:[`automation`],children:[(0,K.jsx)(X,{children:`Triggers`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can view, edit, add, and delete triggers`]})})]}),(0,K.jsxs)(Y,{tags:[`automation`],children:[(0,K.jsx)(X,{children:`Business rules analysis`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Can view, edit, add, and delete business rule analysis`]})})]})]}),Me(`security`)&&(0,K.jsxs)(qv,{title:`Security and privacy`,description:`Choose the security and privacy permissions for this role.`,searchText:Le(`security`),...je(`security`),children:[(0,K.jsx)(Y,{tags:[`gdpr`,`security`],children:(0,K.jsx)(Ob,{style:{marginBottom:`8px`},children:`Manage access and security permissions for this role.`})}),(0,K.jsxs)(Y,{tags:[`gdpr`,`security`],children:[(0,K.jsx)(X,{children:`Manage deletion schedules`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Admins or Admins automatically delete data like tickets.`]})})]}),(0,K.jsxs)(Y,{tags:[`gdpr`,`user-management`],children:[(0,K.jsx)(X,{children:`Data handling`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Hide end user personally identifiable information (PII) from this role`]})}),(0,K.jsx)(`div`,{style:{marginTop:`12px`},children:(0,K.jsxs)(`table`,{style:{fontSize:`13px`,color:`#49545c`},children:[(0,K.jsx)(`thead`,{children:(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`th`,{style:{textAlign:`left`,padding:`4px 16px 4px 0`,fontWeight:500},children:`User field`}),(0,K.jsx)(`th`,{style:{textAlign:`left`,padding:`4px 0`,fontWeight:500},children:`Access`})]})}),(0,K.jsxs)(`tbody`,{children:[(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{style:{padding:`4px 16px 4px 0`},children:`Name`}),(0,K.jsx)(`td`,{children:`✓`})]}),(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{style:{padding:`4px 16px 4px 0`},children:`Phone`}),(0,K.jsx)(`td`,{children:`✓`})]}),(0,K.jsxs)(`tr`,{children:[(0,K.jsx)(`td`,{style:{padding:`4px 16px 4px 0`},children:`Email`}),(0,K.jsx)(`td`,{children:`✓`})]})]})]})})]})]}),!m&&(0,K.jsx)(qv,{title:`Knowledge`,description:`Choose whether or not this role includes managing Knowledge.`,...je(`knowledge`),children:(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Manage Guide`]}),(0,K.jsx)(kb,{style:{marginLeft:`24px`,display:`block`},children:`Can by default have an admin and can manage articles, themes, and settings.`})]})}),Me(`reporting`)&&(0,K.jsxs)(qv,{title:`Reporting and analytics`,description:`Choose the reporting and analytics permissions for this role.`,searchText:Le(`reporting`),...je(`reporting`),children:[(0,K.jsxs)(Y,{tags:[`reporting`],children:[(0,K.jsx)(Ob,{style:{marginBottom:`12px`},children:`Explore permissions`}),(0,K.jsxs)(Mb,{children:[(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`explore`}),` No access`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`explore`,defaultChecked:!0}),` View reports`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`explore`}),` Create reports`]}),(0,K.jsxs)(Nb,{children:[(0,K.jsx)(Pb,{name:`explore`}),` Create reports and manage permissions`]})]})]}),(0,K.jsxs)(Y,{tags:[`reporting`],children:[(0,K.jsx)(X,{children:`Reports permissions`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{}),` Refer to the Reports tab in Support, not reports within Explore. These who can also export data.`]})})]}),(0,K.jsxs)(Y,{tags:[`reporting`],children:[(0,K.jsx)(X,{children:`View Talk dashboard`}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Q,{children:[(0,K.jsx)($,{defaultChecked:!0}),` Can track phone calls on the Talk dashboard`]})})]})]}),r===`v1`&&(0,K.jsx)(ab,{ref:ge,children:(0,K.jsx)(qv,{title:`AI agents`,description:`Choose whether this role can access AI agents.`,searchText:Sv,...je(`ai-agents`),children:(0,K.jsx)(Cv,{roleId:k,query:xe})})}),m&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(wb,{$maxWidth:630,children:`Products`}),(0,K.jsx)(Tb,{$maxWidth:630,children:`Product access for this role. Radios are filler except AI agents.`})]}),r!==`v1`&&h.map(e=>Me(e.id)?e.id===`ai-agents`?(0,K.jsx)(ab,{ref:ge,children:(0,K.jsx)(qv,{title:`AI agents`,description:`Choose whether this role can access AI agents.`,searchText:Le(`ai-agents`,Sv),...je(`ai-agents`),children:(0,K.jsx)(Cv,{roleId:k,query:xe,directAccess:m})})},e.id):(0,K.jsx)(qv,{title:e.name,description:e.id===`knowledge`&&m?`Choose product access and whether this role can manage Knowledge.`:`Choose whether this role can access ${e.name}.`,searchText:Le(e.id,e.disabled?`Subscription limit reached`:Rv(e.name,{directAccess:m,includeManage:e.id===`knowledge`&&m})),...je(e.id),children:e.disabled?(0,K.jsx)(nb,{children:`Subscription limit reached`}):(0,K.jsx)(zv,{roleId:k,product:e,query:xe,directAccess:m,includeManageKnowledge:e.id===`knowledge`&&m})},e.id):null)]}),(0,K.jsx)(ob,{})]}),Ce&&(0,K.jsxs)(Gy,{children:[(0,K.jsxs)(Ky,{children:[`Team members (`,Se.length,`)`]}),Se.length===0?(0,K.jsxs)(qy,{children:[(0,K.jsx)(Jy,{children:`No one in sight`}),(0,K.jsx)(Yy,{children:`There's nobody in this role. You can assign it to team members via their profiles.`}),(0,K.jsx)(Nm,{onClick:()=>C(!0),children:`Assign role`})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Xy,{children:`You can assign this role to team members via their profiles. To change roles for a team member in this role, select their name to go to their profile.`}),(0,K.jsxs)(Zy,{children:[(0,K.jsx)(Qy,{children:`Name`}),Se.map(e=>{let n=de(e);return(0,K.jsxs)($y,{children:[(0,K.jsx)(eb,{onClick:()=>t(`/team-members/${e.id}`,{state:{fromRoleId:se}}),children:e.name}),n.length>0&&(0,K.jsxs)(tb,{type:`warning`,role:`note`,children:[(0,K.jsx)(ib,{}),(0,K.jsx)(hh.Title,{children:n.length>1?`Access changes`:`Access change`}),(0,K.jsx)(rb,{children:n.map(e=>(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`div`,{children:e.product}),(0,K.jsxs)(`div`,{children:[`• `,e.body]})]},e.key))})]})]},e.id)})]})]})]})]}),(0,K.jsxs)(sb,{children:[(0,K.jsx)(Nm,{onClick:()=>t(`/roles`),children:`Cancel`}),(0,K.jsx)(Nm,{isPrimary:!0,onClick:Te,children:`Save`})]}),S&&(0,K.jsx)(hy,{onClose:()=>C(!1),onAssign:Ee}),m&&(0,K.jsx)(Ry,{isOpen:te,onClose:()=>ne(!1),value:T,onApply:E})]})}var Wb=L.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,Gb=L.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
  background-color: #f8f9f9;
  overflow: hidden;
`,Kb=L.div`
  display: flex;
  flex: 1;
  min-height: 0;
  width: 100%;
  overflow: hidden;
`,qb=L.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`,Jb=L.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  background: #fff;
  border-top-left-radius: 12px;
`,Yb=[{id:`v1`,label:`V1`},{id:`v2`,label:`V2 Scaled access change`},{id:`v3`,label:`V3 Panel redesign`},{id:`v3.5`,label:`V3.5 Deep filters`}];function Xb(){let{version:e,setVersion:t}=gd(),[n,r]=(0,g.useState)(null),i=We(),a=Ke();return(0,g.useEffect)(()=>{performance.getEntriesByType(`navigation`)[0]?.type===`reload`&&i.pathname!==`/roles`&&a(`/roles`,{replace:!0})},[]),(0,K.jsxs)(Wb,{children:[(0,K.jsx)(af,{title:`Custom roles on all plans`,meta:`Aug 2026`,versions:Yb,versionId:e,onVersionChange:t,versionNotes:of,commentSlotRef:r}),(0,K.jsxs)(Gb,{children:[(0,K.jsx)(ql,{}),(0,K.jsxs)(Kb,{children:[(0,K.jsx)(uu,{currentProduct:`admin_center`}),(0,K.jsxs)(qb,{children:[(0,K.jsx)(Ap,{}),(0,K.jsx)(Jb,{"data-comment-root":`true`,children:(0,K.jsxs)(_t,{children:[(0,K.jsx)(ht,{path:`/`,element:(0,K.jsx)(mt,{to:`/roles`,replace:!0})}),(0,K.jsx)(ht,{path:`/team-members`,element:(0,K.jsx)(um,{})}),(0,K.jsx)(ht,{path:`/team-members/:id`,element:(0,K.jsx)(Jh,{})}),(0,K.jsx)(ht,{path:`/roles`,element:(0,K.jsx)(fg,{})}),(0,K.jsx)(ht,{path:`/roles/:id`,element:(0,K.jsx)(Ub,{})})]})})]})]})]}),(0,K.jsx)(bp,{toggleContainer:n,context:{version:e,route:i.pathname},onRestoreContext:e=>{Yb.some(t=>t.id===e.version)&&t(e.version),e.route&&a(e.route)}})]})}function Zb(){return(0,K.jsx)(Xu,{children:(0,K.jsx)(hd,{children:(0,K.jsx)(St,{children:(0,K.jsx)(Xb,{})})})})}(0,_.createRoot)(document.getElementById(`root`)).render((0,K.jsx)(g.StrictMode,{children:(0,K.jsx)(Zb,{})}));