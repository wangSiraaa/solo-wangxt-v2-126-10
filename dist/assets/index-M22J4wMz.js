var Jx=Object.defineProperty;var Qx=(t,e,n)=>e in t?Jx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var tt=(t,e,n)=>Qx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function e3(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mv={exports:{}},Hu={},gv={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=Symbol.for("react.element"),t3=Symbol.for("react.portal"),n3=Symbol.for("react.fragment"),i3=Symbol.for("react.strict_mode"),r3=Symbol.for("react.profiler"),s3=Symbol.for("react.provider"),o3=Symbol.for("react.context"),a3=Symbol.for("react.forward_ref"),l3=Symbol.for("react.suspense"),c3=Symbol.for("react.memo"),u3=Symbol.for("react.lazy"),Mm=Symbol.iterator;function f3(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var vv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_v=Object.assign,xv={};function Go(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||vv}Go.prototype.isReactComponent={};Go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yv(){}yv.prototype=Go.prototype;function Kh(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||vv}var Zh=Kh.prototype=new yv;Zh.constructor=Kh;_v(Zh,Go.prototype);Zh.isPureReactComponent=!0;var Em=Array.isArray,Sv=Object.prototype.hasOwnProperty,Jh={current:null},Mv={key:!0,ref:!0,__self:!0,__source:!0};function Ev(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Sv.call(e,i)&&!Mv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:hl,type:t,key:s,ref:o,props:r,_owner:Jh.current}}function d3(t,e){return{$$typeof:hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===hl}function h3(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wm=/\/+/g;function gf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h3(""+t.key):e.toString(36)}function Ac(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hl:case t3:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+gf(o,0):i,Em(r)?(n="",t!=null&&(n=t.replace(wm,"$&/")+"/"),Ac(r,e,n,"",function(c){return c})):r!=null&&(Qh(r)&&(r=d3(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Em(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+gf(s,a);o+=Ac(s,e,n,l,r)}else if(l=f3(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+gf(s,a++),o+=Ac(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tl(t,e,n){if(t==null)return t;var i=[],r=0;return Ac(t,i,"","",function(s){return e.call(n,s,r++)}),i}function p3(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},Cc={transition:null},m3={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Cc,ReactCurrentOwner:Jh};function wv(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Tl,forEach:function(t,e,n){Tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tl(t,function(){e++}),e},toArray:function(t){return Tl(t,function(e){return e})||[]},only:function(t){if(!Qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Go;$e.Fragment=n3;$e.Profiler=r3;$e.PureComponent=Kh;$e.StrictMode=i3;$e.Suspense=l3;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m3;$e.act=wv;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_v({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Sv.call(e,l)&&!Mv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:hl,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:o3,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s3,_context:t},t.Consumer=t};$e.createElement=Ev;$e.createFactory=function(t){var e=Ev.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:a3,render:t}};$e.isValidElement=Qh;$e.lazy=function(t){return{$$typeof:u3,_payload:{_status:-1,_result:t},_init:p3}};$e.memo=function(t,e){return{$$typeof:c3,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Cc.transition;Cc.transition={};try{t()}finally{Cc.transition=e}};$e.unstable_act=wv;$e.useCallback=function(t,e){return fn.current.useCallback(t,e)};$e.useContext=function(t){return fn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return fn.current.useEffect(t,e)};$e.useId=function(){return fn.current.useId()};$e.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return fn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};$e.useRef=function(t){return fn.current.useRef(t)};$e.useState=function(t){return fn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return fn.current.useTransition()};$e.version="18.3.1";gv.exports=$e;var Oe=gv.exports;const g3=e3(Oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v3=Oe,_3=Symbol.for("react.element"),x3=Symbol.for("react.fragment"),y3=Object.prototype.hasOwnProperty,S3=v3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M3={key:!0,ref:!0,__self:!0,__source:!0};function Tv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)y3.call(e,i)&&!M3.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_3,type:t,key:s,ref:o,props:r,_owner:S3.current}}Hu.Fragment=x3;Hu.jsx=Tv;Hu.jsxs=Tv;mv.exports=Hu;var D=mv.exports,I0={},Av={exports:{}},Ln={},Cv={exports:{}},Rv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Z){var X=L.length;L.push(Z);e:for(;0<X;){var ne=X-1>>>1,ye=L[ne];if(0<r(ye,Z))L[ne]=Z,L[X]=ye,X=ne;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Z=L[0],X=L.pop();if(X!==Z){L[0]=X;e:for(var ne=0,ye=L.length,Ie=ye>>>1;ne<Ie;){var Y=2*(ne+1)-1,ee=L[Y],le=Y+1,ue=L[le];if(0>r(ee,X))le<ye&&0>r(ue,ee)?(L[ne]=ue,L[le]=X,ne=le):(L[ne]=ee,L[Y]=X,ne=Y);else if(le<ye&&0>r(ue,X))L[ne]=ue,L[le]=X,ne=le;else break e}}return Z}function r(L,Z){var X=L.sortIndex-Z.sortIndex;return X!==0?X:L.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,p=3,h=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=L)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function S(L){if(x=!1,v(L),!g)if(n(l)!==null)g=!0,I(R);else{var Z=n(c);Z!==null&&q(S,Z.startTime-L)}}function R(L,Z){g=!1,x&&(x=!1,f(P),P=-1),h=!0;var X=p;try{for(v(Z),d=n(l);d!==null&&(!(d.expirationTime>Z)||L&&!M());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,p=d.priorityLevel;var ye=ne(d.expirationTime<=Z);Z=t.unstable_now(),typeof ye=="function"?d.callback=ye:d===n(l)&&i(l),v(Z)}else i(l);d=n(l)}if(d!==null)var Ie=!0;else{var Y=n(c);Y!==null&&q(S,Y.startTime-Z),Ie=!1}return Ie}finally{d=null,p=X,h=!1}}var A=!1,T=null,P=-1,k=5,y=-1;function M(){return!(t.unstable_now()-y<k)}function H(){if(T!==null){var L=t.unstable_now();y=L;var Z=!0;try{Z=T(!0,L)}finally{Z?B():(A=!1,T=null)}}else A=!1}var B;if(typeof _=="function")B=function(){_(H)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,N=W.port2;W.port1.onmessage=H,B=function(){N.postMessage(null)}}else B=function(){m(H,0)};function I(L){T=L,A||(A=!0,B())}function q(L,Z){P=m(function(){L(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,I(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var X=p;p=Z;try{return L()}finally{p=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=p;p=L;try{return Z()}finally{p=X}},t.unstable_scheduleCallback=function(L,Z,X){var ne=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ne+X:ne):X=ne,L){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=X+ye,L={id:u++,callback:Z,priorityLevel:L,startTime:X,expirationTime:ye,sortIndex:-1},X>ne?(L.sortIndex=X,e(c,L),n(l)===null&&L===n(c)&&(x?(f(P),P=-1):x=!0,q(S,X-ne))):(L.sortIndex=ye,e(l,L),g||h||(g=!0,I(R))),L},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(L){var Z=p;return function(){var X=p;p=Z;try{return L.apply(this,arguments)}finally{p=X}}}})(Rv);Cv.exports=Rv;var E3=Cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w3=Oe,bn=E3;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pv=new Set,Ha={};function Ss(t,e){Eo(t,e),Eo(t+"Capture",e)}function Eo(t,e){for(Ha[t]=e,t=0;t<e.length;t++)Pv.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N0=Object.prototype.hasOwnProperty,T3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tm={},Am={};function A3(t){return N0.call(Am,t)?!0:N0.call(Tm,t)?!1:T3.test(t)?Am[t]=!0:(Tm[t]=!0,!1)}function C3(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R3(t,e,n,i){if(e===null||typeof e>"u"||C3(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ep=/[\-:]([a-z])/g;function tp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ep,tp);jt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ep,tp);jt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ep,tp);jt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function np(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R3(e,n,r,i)&&(n=null),i||r===null?A3(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=w3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Al=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),U0=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),Dv=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),F0=Symbol.for("react.suspense"),z0=Symbol.for("react.suspense_list"),sp=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Lv=Symbol.for("react.offscreen"),Cm=Symbol.iterator;function Ko(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,vf;function va(t){if(vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vf=e&&e[1]||""}return`
`+vf+t}var _f=!1;function xf(t,e){if(!t||_f)return"";_f=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_f=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?va(t):""}function P3(t){switch(t.tag){case 5:return va(t.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 2:case 15:return t=xf(t.type,!1),t;case 11:return t=xf(t.type.render,!1),t;case 1:return t=xf(t.type,!0),t;default:return""}}function O0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case Ys:return"Portal";case U0:return"Profiler";case ip:return"StrictMode";case F0:return"Suspense";case z0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dv:return(t.displayName||"Context")+".Consumer";case bv:return(t._context.displayName||"Context")+".Provider";case rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sp:return e=t.displayName||null,e!==null?e:O0(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return O0(t(e))}catch{}}return null}function b3(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return O0(e);case 8:return e===ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Iv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D3(t){var e=Iv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cl(t){t._valueTracker||(t._valueTracker=D3(t))}function Nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Iv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k0(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uv(t,e){e=e.checked,e!=null&&np(t,"checked",e,!1)}function B0(t,e){Uv(t,e);var n=Pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?H0(t,e.type,n):e.hasOwnProperty("defaultValue")&&H0(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function H0(t,e,n){(e!=="number"||qc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _a=Array.isArray;function ho(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function V0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(_a(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function Fv(t,e){var n=Pr(e.value),i=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function G0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Rl,Ov=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Rl=Rl||document.createElement("div"),Rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L3=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(t){L3.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ra[e]=Ra[t]})});function kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ra.hasOwnProperty(t)&&Ra[t]?(""+e).trim():e+"px"}function Bv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=kv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var I3=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function W0(t,e){if(e){if(I3[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function $0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j0=null;function op(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var X0=null,po=null,mo=null;function Lm(t){if(t=gl(t)){if(typeof X0!="function")throw Error(re(280));var e=t.stateNode;e&&(e=ju(e),X0(t.stateNode,t.type,e))}}function Hv(t){po?mo?mo.push(t):mo=[t]:po=t}function Vv(){if(po){var t=po,e=mo;if(mo=po=null,Lm(t),e)for(t=0;t<e.length;t++)Lm(e[t])}}function Gv(t,e){return t(e)}function Wv(){}var yf=!1;function $v(t,e,n){if(yf)return t(e,n);yf=!0;try{return Gv(t,e,n)}finally{yf=!1,(po!==null||mo!==null)&&(Wv(),Vv())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var i=ju(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Y0=!1;if(ji)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){Y0=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{Y0=!1}function N3(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Pa=!1,Kc=null,Zc=!1,q0=null,U3={onError:function(t){Pa=!0,Kc=t}};function F3(t,e,n,i,r,s,o,a,l){Pa=!1,Kc=null,N3.apply(U3,arguments)}function z3(t,e,n,i,r,s,o,a,l){if(F3.apply(this,arguments),Pa){if(Pa){var c=Kc;Pa=!1,Kc=null}else throw Error(re(198));Zc||(Zc=!0,q0=c)}}function Ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Im(t){if(Ms(t)!==t)throw Error(re(188))}function O3(t){var e=t.alternate;if(!e){if(e=Ms(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Im(r),t;if(s===i)return Im(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Xv(t){return t=O3(t),t!==null?Yv(t):null}function Yv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yv(t);if(e!==null)return e;t=t.sibling}return null}var qv=bn.unstable_scheduleCallback,Nm=bn.unstable_cancelCallback,k3=bn.unstable_shouldYield,B3=bn.unstable_requestPaint,Ct=bn.unstable_now,H3=bn.unstable_getCurrentPriorityLevel,ap=bn.unstable_ImmediatePriority,Kv=bn.unstable_UserBlockingPriority,Jc=bn.unstable_NormalPriority,V3=bn.unstable_LowPriority,Zv=bn.unstable_IdlePriority,Vu=null,wi=null;function G3(t){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(Vu,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:j3,W3=Math.log,$3=Math.LN2;function j3(t){return t>>>=0,t===0?32:31-(W3(t)/$3|0)|0}var Pl=64,bl=4194304;function xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=xa(a):(s&=o,s!==0&&(i=xa(s)))}else o=n&~r,o!==0?i=xa(o):s!==0&&(i=xa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function X3(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y3(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=X3(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function K0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jv(){var t=Pl;return Pl<<=1,!(Pl&4194240)&&(Pl=64),t}function Sf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function q3(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function lp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Qv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e_,cp,t_,n_,i_,Z0=!1,Dl=[],xr=null,yr=null,Sr=null,Wa=new Map,$a=new Map,hr=[],K3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function Jo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=gl(e),e!==null&&cp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Z3(t,e,n,i,r){switch(e){case"focusin":return xr=Jo(xr,t,e,n,i,r),!0;case"dragenter":return yr=Jo(yr,t,e,n,i,r),!0;case"mouseover":return Sr=Jo(Sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wa.set(s,Jo(Wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$a.set(s,Jo($a.get(s)||null,t,e,n,i,r)),!0}return!1}function r_(t){var e=Jr(t.target);if(e!==null){var n=Ms(e);if(n!==null){if(e=n.tag,e===13){if(e=jv(n),e!==null){t.blockedOn=e,i_(t.priority,function(){t_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=J0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);j0=i,n.target.dispatchEvent(i),j0=null}else return e=gl(n),e!==null&&cp(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){Rc(t)&&n.delete(e)}function J3(){Z0=!1,xr!==null&&Rc(xr)&&(xr=null),yr!==null&&Rc(yr)&&(yr=null),Sr!==null&&Rc(Sr)&&(Sr=null),Wa.forEach(Fm),$a.forEach(Fm)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Z0||(Z0=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,J3)))}function ja(t){function e(r){return Qo(r,t)}if(0<Dl.length){Qo(Dl[0],t);for(var n=1;n<Dl.length;n++){var i=Dl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(xr!==null&&Qo(xr,t),yr!==null&&Qo(yr,t),Sr!==null&&Qo(Sr,t),Wa.forEach(e),$a.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)r_(n),n.blockedOn===null&&hr.shift()}var go=Qi.ReactCurrentBatchConfig,eu=!0;function Q3(t,e,n,i){var r=lt,s=go.transition;go.transition=null;try{lt=1,up(t,e,n,i)}finally{lt=r,go.transition=s}}function ey(t,e,n,i){var r=lt,s=go.transition;go.transition=null;try{lt=4,up(t,e,n,i)}finally{lt=r,go.transition=s}}function up(t,e,n,i){if(eu){var r=J0(t,e,n,i);if(r===null)Df(t,e,i,tu,n),Um(t,i);else if(Z3(r,t,e,n,i))i.stopPropagation();else if(Um(t,i),e&4&&-1<K3.indexOf(t)){for(;r!==null;){var s=gl(r);if(s!==null&&e_(s),s=J0(t,e,n,i),s===null&&Df(t,e,i,tu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Df(t,e,i,null,n)}}var tu=null;function J0(t,e,n,i){if(tu=null,t=op(i),t=Jr(t),t!==null)if(e=Ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tu=t,null}function s_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H3()){case ap:return 1;case Kv:return 4;case Jc:case V3:return 16;case Zv:return 536870912;default:return 16}default:return 16}}var gr=null,fp=null,Pc=null;function o_(){if(Pc)return Pc;var t,e=fp,n=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pc=r.slice(t,1<i?1-i:void 0)}function bc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function zm(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ll:zm,this.isPropagationStopped=zm,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),e}var Wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dp=In(Wo),ml=Et({},Wo,{view:0,detail:0}),ty=In(ml),Mf,Ef,ea,Gu=Et({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(Mf=t.screenX-ea.screenX,Ef=t.screenY-ea.screenY):Ef=Mf=0,ea=t),Mf)},movementY:function(t){return"movementY"in t?t.movementY:Ef}}),Om=In(Gu),ny=Et({},Gu,{dataTransfer:0}),iy=In(ny),ry=Et({},ml,{relatedTarget:0}),wf=In(ry),sy=Et({},Wo,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=In(sy),ay=Et({},Wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ly=In(ay),cy=Et({},Wo,{data:0}),km=In(cy),uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dy[t])?!!e[t]:!1}function hp(){return hy}var py=Et({},ml,{key:function(t){if(t.key){var e=uy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(t){return t.type==="keypress"?bc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),my=In(py),gy=Et({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=In(gy),vy=Et({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),_y=In(vy),xy=Et({},Wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),yy=In(xy),Sy=Et({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),My=In(Sy),Ey=[9,13,27,32],pp=ji&&"CompositionEvent"in window,ba=null;ji&&"documentMode"in document&&(ba=document.documentMode);var wy=ji&&"TextEvent"in window&&!ba,a_=ji&&(!pp||ba&&8<ba&&11>=ba),Hm=" ",Vm=!1;function l_(t,e){switch(t){case"keyup":return Ey.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ks=!1;function Ty(t,e){switch(t){case"compositionend":return c_(e);case"keypress":return e.which!==32?null:(Vm=!0,Hm);case"textInput":return t=e.data,t===Hm&&Vm?null:t;default:return null}}function Ay(t,e){if(Ks)return t==="compositionend"||!pp&&l_(t,e)?(t=o_(),Pc=fp=gr=null,Ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a_&&e.locale!=="ko"?null:e.data;default:return null}}var Cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Cy[t.type]:e==="textarea"}function u_(t,e,n,i){Hv(i),e=nu(e,"onChange"),0<e.length&&(n=new dp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Da=null,Xa=null;function Ry(t){S_(t,0)}function Wu(t){var e=Qs(t);if(Nv(e))return t}function Py(t,e){if(t==="change")return e}var f_=!1;if(ji){var Tf;if(ji){var Af="oninput"in document;if(!Af){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),Af=typeof Wm.oninput=="function"}Tf=Af}else Tf=!1;f_=Tf&&(!document.documentMode||9<document.documentMode)}function $m(){Da&&(Da.detachEvent("onpropertychange",d_),Xa=Da=null)}function d_(t){if(t.propertyName==="value"&&Wu(Xa)){var e=[];u_(e,Xa,t,op(t)),$v(Ry,e)}}function by(t,e,n){t==="focusin"?($m(),Da=e,Xa=n,Da.attachEvent("onpropertychange",d_)):t==="focusout"&&$m()}function Dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(Xa)}function Ly(t,e){if(t==="click")return Wu(e)}function Iy(t,e){if(t==="input"||t==="change")return Wu(e)}function Ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:Ny;function Ya(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!N0.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,e){var n=jm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jm(n)}}function h_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p_(){for(var t=window,e=qc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qc(t.document)}return e}function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Uy(t){var e=p_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h_(n.ownerDocument.documentElement,n)){if(i!==null&&mp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Xm(n,s);var o=Xm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fy=ji&&"documentMode"in document&&11>=document.documentMode,Zs=null,Q0=null,La=null,ed=!1;function Ym(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||Zs==null||Zs!==qc(i)||(i=Zs,"selectionStart"in i&&mp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),La&&Ya(La,i)||(La=i,i=nu(Q0,"onSelect"),0<i.length&&(e=new dp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zs)))}function Il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Js={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},Cf={},m_={};ji&&(m_=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function $u(t){if(Cf[t])return Cf[t];if(!Js[t])return t;var e=Js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m_)return Cf[t]=e[n];return t}var g_=$u("animationend"),v_=$u("animationiteration"),__=$u("animationstart"),x_=$u("transitionend"),y_=new Map,qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){y_.set(t,e),Ss(e,[t])}for(var Rf=0;Rf<qm.length;Rf++){var Pf=qm[Rf],zy=Pf.toLowerCase(),Oy=Pf[0].toUpperCase()+Pf.slice(1);Ir(zy,"on"+Oy)}Ir(g_,"onAnimationEnd");Ir(v_,"onAnimationIteration");Ir(__,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(x_,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function Km(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,z3(i,e,void 0,t),t.currentTarget=null}function S_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Km(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Km(r,a,c),s=l}}}if(Zc)throw t=q0,Zc=!1,q0=null,t}function pt(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var i=t+"__bubble";n.has(i)||(M_(e,t,2,!1),n.add(i))}function bf(t,e,n){var i=0;e&&(i|=4),M_(n,t,i,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[Nl]){t[Nl]=!0,Pv.forEach(function(n){n!=="selectionchange"&&(ky.has(n)||bf(n,!1,t),bf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,bf("selectionchange",!1,e))}}function M_(t,e,n,i){switch(s_(e)){case 1:var r=Q3;break;case 4:r=ey;break;default:r=up}n=r.bind(null,e,n,t),r=void 0,!Y0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Df(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$v(function(){var c=s,u=op(n),d=[];e:{var p=y_.get(t);if(p!==void 0){var h=dp,g=t;switch(t){case"keypress":if(bc(n)===0)break e;case"keydown":case"keyup":h=my;break;case"focusin":g="focus",h=wf;break;case"focusout":g="blur",h=wf;break;case"beforeblur":case"afterblur":h=wf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=_y;break;case g_:case v_:case __:h=oy;break;case x_:h=yy;break;case"scroll":h=ty;break;case"wheel":h=My;break;case"copy":case"cut":case"paste":h=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Bm}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?p!==null?p+"Capture":null:p;x=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=Ga(_,f),S!=null&&x.push(Ka(_,S,v)))),m)break;_=_.return}0<x.length&&(p=new h(p,g,null,n,u),d.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&n!==j0&&(g=n.relatedTarget||n.fromElement)&&(Jr(g)||g[Xi]))break e;if((h||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=c,g=g?Jr(g):null,g!==null&&(m=Ms(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=c),h!==g)){if(x=Om,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Bm,S="onPointerLeave",f="onPointerEnter",_="pointer"),m=h==null?p:Qs(h),v=g==null?p:Qs(g),p=new x(S,_+"leave",h,n,u),p.target=m,p.relatedTarget=v,S=null,Jr(u)===c&&(x=new x(f,_+"enter",g,n,u),x.target=v,x.relatedTarget=m,S=x),m=S,h&&g)t:{for(x=h,f=g,_=0,v=x;v;v=Ts(v))_++;for(v=0,S=f;S;S=Ts(S))v++;for(;0<_-v;)x=Ts(x),_--;for(;0<v-_;)f=Ts(f),v--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=Ts(x),f=Ts(f)}x=null}else x=null;h!==null&&Zm(d,p,h,x,!1),g!==null&&m!==null&&Zm(d,m,g,x,!0)}}e:{if(p=c?Qs(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var R=Py;else if(Gm(p))if(f_)R=Iy;else{R=Dy;var A=by}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=Ly);if(R&&(R=R(t,c))){u_(d,R,n,u);break e}A&&A(t,p,c),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&H0(p,"number",p.value)}switch(A=c?Qs(c):window,t){case"focusin":(Gm(A)||A.contentEditable==="true")&&(Zs=A,Q0=c,La=null);break;case"focusout":La=Q0=Zs=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,Ym(d,n,u);break;case"selectionchange":if(Fy)break;case"keydown":case"keyup":Ym(d,n,u)}var T;if(pp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ks?l_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(a_&&n.locale!=="ko"&&(Ks||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ks&&(T=o_()):(gr=u,fp="value"in gr?gr.value:gr.textContent,Ks=!0)),A=nu(c,P),0<A.length&&(P=new km(P,t,null,n,u),d.push({event:P,listeners:A}),T?P.data=T:(T=c_(n),T!==null&&(P.data=T)))),(T=wy?Ty(t,n):Ay(t,n))&&(c=nu(c,"onBeforeInput"),0<c.length&&(u=new km("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}S_(d,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ga(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Ga(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ga(n,s),l!=null&&o.unshift(Ka(n,l,a))):r||(l=Ga(n,s),l!=null&&o.push(Ka(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var By=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function Jm(t){return(typeof t=="string"?t:""+t).replace(By,`
`).replace(Hy,"")}function Ul(t,e,n){if(e=Jm(e),Jm(t)!==e&&n)throw Error(re(425))}function iu(){}var td=null,nd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(t){return Qm.resolve(null).then(t).catch(Wy)}:rd;function Wy(t){setTimeout(function(){throw t})}function Lf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ja(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function eg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $o=Math.random().toString(36).slice(2),yi="__reactFiber$"+$o,Za="__reactProps$"+$o,Xi="__reactContainer$"+$o,sd="__reactEvents$"+$o,$y="__reactListeners$"+$o,jy="__reactHandles$"+$o;function Jr(t){var e=t[yi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xi]||n[yi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=eg(t);t!==null;){if(n=t[yi])return n;t=eg(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[yi]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function ju(t){return t[Za]||null}var od=[],eo=-1;function Nr(t){return{current:t}}function gt(t){0>eo||(t.current=od[eo],od[eo]=null,eo--)}function dt(t,e){eo++,od[eo]=t.current,t.current=e}var br={},tn=Nr(br),vn=Nr(!1),ls=br;function wo(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function ru(){gt(vn),gt(tn)}function tg(t,e,n){if(tn.current!==br)throw Error(re(168));dt(tn,e),dt(vn,n)}function E_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,b3(t)||"Unknown",r));return Et({},n,i)}function su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,ls=tn.current,dt(tn,t),dt(vn,vn.current),!0}function ng(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=E_(t,e,ls),i.__reactInternalMemoizedMergedChildContext=t,gt(vn),gt(tn),dt(tn,t)):gt(vn),dt(vn,n)}var Fi=null,Xu=!1,If=!1;function w_(t){Fi===null?Fi=[t]:Fi.push(t)}function Xy(t){Xu=!0,w_(t)}function Ur(){if(!If&&Fi!==null){If=!0;var t=0,e=lt;try{var n=Fi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Fi=null,Xu=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(t+1)),qv(ap,Ur),r}finally{lt=e,If=!1}}return null}var to=[],no=0,ou=null,au=0,On=[],kn=0,cs=null,ki=1,Bi="";function $r(t,e){to[no++]=au,to[no++]=ou,ou=t,au=e}function T_(t,e,n){On[kn++]=ki,On[kn++]=Bi,On[kn++]=cs,cs=t;var i=ki;t=Bi;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ki=1<<32-di(e)+r|n<<r|i,Bi=s+t}else ki=1<<s|n<<r|i,Bi=t}function gp(t){t.return!==null&&($r(t,1),T_(t,1,0))}function vp(t){for(;t===ou;)ou=to[--no],to[no]=null,au=to[--no],to[no]=null;for(;t===cs;)cs=On[--kn],On[kn]=null,Bi=On[--kn],On[kn]=null,ki=On[--kn],On[kn]=null}var Pn=null,Cn=null,_t=!1,oi=null;function A_(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:ki,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Cn=null,!0):!1;default:return!1}}function ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(_t){var e=Cn;if(e){var n=e;if(!ig(t,e)){if(ad(t))throw Error(re(418));e=Mr(n.nextSibling);var i=Pn;e&&ig(t,e)?A_(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(ad(t))throw Error(re(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function rg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Fl(t){if(t!==Pn)return!1;if(!_t)return rg(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=Cn)){if(ad(t))throw C_(),Error(re(418));for(;e;)A_(t,e),e=Mr(e.nextSibling)}if(rg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Pn?Mr(t.stateNode.nextSibling):null;return!0}function C_(){for(var t=Cn;t;)t=Mr(t.nextSibling)}function To(){Cn=Pn=null,_t=!1}function _p(t){oi===null?oi=[t]:oi.push(t)}var Yy=Qi.ReactCurrentBatchConfig;function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function zl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sg(t){var e=t._init;return e(t._payload)}function R_(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Ar(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,S){return _===null||_.tag!==6?(_=Bf(v,f.mode,S),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,S){var R=v.type;return R===qs?u(f,_,v.props.children,S,v.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fr&&sg(R)===_.type)?(S=r(_,v.props),S.ref=ta(f,_,v),S.return=f,S):(S=zc(v.type,v.key,v.props,null,f.mode,S),S.ref=ta(f,_,v),S.return=f,S)}function c(f,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Hf(v,f.mode,S),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function u(f,_,v,S,R){return _===null||_.tag!==7?(_=os(v,f.mode,S,R),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Bf(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Al:return v=zc(_.type,_.key,_.props,null,f.mode,v),v.ref=ta(f,null,_),v.return=f,v;case Ys:return _=Hf(_,f.mode,v),_.return=f,_;case fr:var S=_._init;return d(f,S(_._payload),v)}if(_a(_)||Ko(_))return _=os(_,f.mode,v,null),_.return=f,_;zl(f,_)}return null}function p(f,_,v,S){var R=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(f,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Al:return v.key===R?l(f,_,v,S):null;case Ys:return v.key===R?c(f,_,v,S):null;case fr:return R=v._init,p(f,_,R(v._payload),S)}if(_a(v)||Ko(v))return R!==null?null:u(f,_,v,S,null);zl(f,v)}return null}function h(f,_,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,a(_,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Al:return f=f.get(S.key===null?v:S.key)||null,l(_,f,S,R);case Ys:return f=f.get(S.key===null?v:S.key)||null,c(_,f,S,R);case fr:var A=S._init;return h(f,_,v,A(S._payload),R)}if(_a(S)||Ko(S))return f=f.get(v)||null,u(_,f,S,R,null);zl(_,S)}return null}function g(f,_,v,S){for(var R=null,A=null,T=_,P=_=0,k=null;T!==null&&P<v.length;P++){T.index>P?(k=T,T=null):k=T.sibling;var y=p(f,T,v[P],S);if(y===null){T===null&&(T=k);break}t&&T&&y.alternate===null&&e(f,T),_=s(y,_,P),A===null?R=y:A.sibling=y,A=y,T=k}if(P===v.length)return n(f,T),_t&&$r(f,P),R;if(T===null){for(;P<v.length;P++)T=d(f,v[P],S),T!==null&&(_=s(T,_,P),A===null?R=T:A.sibling=T,A=T);return _t&&$r(f,P),R}for(T=i(f,T);P<v.length;P++)k=h(T,f,P,v[P],S),k!==null&&(t&&k.alternate!==null&&T.delete(k.key===null?P:k.key),_=s(k,_,P),A===null?R=k:A.sibling=k,A=k);return t&&T.forEach(function(M){return e(f,M)}),_t&&$r(f,P),R}function x(f,_,v,S){var R=Ko(v);if(typeof R!="function")throw Error(re(150));if(v=R.call(v),v==null)throw Error(re(151));for(var A=R=null,T=_,P=_=0,k=null,y=v.next();T!==null&&!y.done;P++,y=v.next()){T.index>P?(k=T,T=null):k=T.sibling;var M=p(f,T,y.value,S);if(M===null){T===null&&(T=k);break}t&&T&&M.alternate===null&&e(f,T),_=s(M,_,P),A===null?R=M:A.sibling=M,A=M,T=k}if(y.done)return n(f,T),_t&&$r(f,P),R;if(T===null){for(;!y.done;P++,y=v.next())y=d(f,y.value,S),y!==null&&(_=s(y,_,P),A===null?R=y:A.sibling=y,A=y);return _t&&$r(f,P),R}for(T=i(f,T);!y.done;P++,y=v.next())y=h(T,f,P,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?P:y.key),_=s(y,_,P),A===null?R=y:A.sibling=y,A=y);return t&&T.forEach(function(H){return e(f,H)}),_t&&$r(f,P),R}function m(f,_,v,S){if(typeof v=="object"&&v!==null&&v.type===qs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Al:e:{for(var R=v.key,A=_;A!==null;){if(A.key===R){if(R=v.type,R===qs){if(A.tag===7){n(f,A.sibling),_=r(A,v.props.children),_.return=f,f=_;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===fr&&sg(R)===A.type){n(f,A.sibling),_=r(A,v.props),_.ref=ta(f,A,v),_.return=f,f=_;break e}n(f,A);break}else e(f,A);A=A.sibling}v.type===qs?(_=os(v.props.children,f.mode,S,v.key),_.return=f,f=_):(S=zc(v.type,v.key,v.props,null,f.mode,S),S.ref=ta(f,_,v),S.return=f,f=S)}return o(f);case Ys:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Hf(v,f.mode,S),_.return=f,f=_}return o(f);case fr:return A=v._init,m(f,_,A(v._payload),S)}if(_a(v))return g(f,_,v,S);if(Ko(v))return x(f,_,v,S);zl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=Bf(v,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return m}var Ao=R_(!0),P_=R_(!1),lu=Nr(null),cu=null,io=null,xp=null;function yp(){xp=io=cu=null}function Sp(t){var e=lu.current;gt(lu),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vo(t,e){cu=t,xp=io=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(xp!==t)if(t={context:t,memoizedValue:e,next:null},io===null){if(cu===null)throw Error(re(308));io=t,cu.dependencies={lanes:0,firstContext:t}}else io=io.next=t;return e}var Qr=null;function Mp(t){Qr===null?Qr=[t]:Qr.push(t)}function b_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Yi(t,i)}function Yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function Ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Mp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(t,n)}function Dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lp(t,n)}}function og(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var p=a.lane,h=a.eventTime;if((i&p)===p){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(p=e,h=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(h,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,p=typeof g=="function"?g.call(h,d,p):g,p==null)break e;d=Et({},d,p);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);fs|=o,t.lanes=o,t.memoizedState=d}}function ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var vl={},Ti=Nr(vl),Ja=Nr(vl),Qa=Nr(vl);function es(t){if(t===vl)throw Error(re(174));return t}function wp(t,e){switch(dt(Qa,e),dt(Ja,t),dt(Ti,vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:G0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=G0(e,t)}gt(Ti),dt(Ti,e)}function Co(){gt(Ti),gt(Ja),gt(Qa)}function L_(t){es(Qa.current);var e=es(Ti.current),n=G0(e,t.type);e!==n&&(dt(Ja,t),dt(Ti,n))}function Tp(t){Ja.current===t&&(gt(Ti),gt(Ja))}var yt=Nr(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nf=[];function Ap(){for(var t=0;t<Nf.length;t++)Nf[t]._workInProgressVersionPrimary=null;Nf.length=0}var Lc=Qi.ReactCurrentDispatcher,Uf=Qi.ReactCurrentBatchConfig,us=0,Mt=null,It=null,Ot=null,du=!1,Ia=!1,el=0,qy=0;function Xt(){throw Error(re(321))}function Cp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function Rp(t,e,n,i,r,s){if(us=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lc.current=t===null||t.memoizedState===null?Qy:eS,t=n(i,r),Ia){s=0;do{if(Ia=!1,el=0,25<=s)throw Error(re(301));s+=1,Ot=It=null,e.updateQueue=null,Lc.current=tS,t=n(i,r)}while(Ia)}if(Lc.current=hu,e=It!==null&&It.next!==null,us=0,Ot=It=Mt=null,du=!1,e)throw Error(re(300));return t}function Pp(){var t=el!==0;return el=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Mt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Kn(){if(It===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Ot===null?Mt.memoizedState:Ot.next;if(e!==null)Ot=e,It=t;else{if(t===null)throw Error(re(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Ot===null?Mt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function tl(t,e){return typeof e=="function"?e(t):e}function Ff(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((us&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=u,fs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,fs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zf(t){var e=Kn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function I_(){}function N_(t,e){var n=Mt,i=Kn(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,bp(z_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,nl(9,F_.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(re(349));us&30||U_(n,e,r)}return r}function U_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F_(t,e,n,i){e.value=n,e.getSnapshot=i,O_(e)&&k_(t)}function z_(t,e,n){return n(function(){O_(e)&&k_(t)})}function O_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function k_(t){var e=Yi(t,1);e!==null&&hi(e,t,1,-1)}function lg(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:t},e.queue=t,t=t.dispatch=Jy.bind(null,Mt,t),[e.memoizedState,t]}function nl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function B_(){return Kn().memoizedState}function Ic(t,e,n,i){var r=vi();Mt.flags|=t,r.memoizedState=nl(1|e,n,void 0,i===void 0?null:i)}function Yu(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&Cp(i,o.deps)){r.memoizedState=nl(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=nl(1|e,n,s,i)}function cg(t,e){return Ic(8390656,8,t,e)}function bp(t,e){return Yu(2048,8,t,e)}function H_(t,e){return Yu(4,2,t,e)}function V_(t,e){return Yu(4,4,t,e)}function G_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W_(t,e,n){return n=n!=null?n.concat([t]):null,Yu(4,4,G_.bind(null,e,t),n)}function Dp(){}function $_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function j_(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function X_(t,e,n){return us&21?(pi(n,e)||(n=Jv(),Mt.lanes|=n,fs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function Ky(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Uf.transition;Uf.transition={};try{t(!1),e()}finally{lt=n,Uf.transition=i}}function Y_(){return Kn().memoizedState}function Zy(t,e,n){var i=Tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},q_(t))K_(e,n);else if(n=b_(t,e,n,i),n!==null){var r=ln();hi(n,t,i,r),Z_(n,e,i)}}function Jy(t,e,n){var i=Tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(q_(t))K_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,Mp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=b_(t,e,r,i),n!==null&&(r=ln(),hi(n,t,i,r),Z_(n,e,i))}}function q_(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function K_(t,e){Ia=du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lp(t,n)}}var hu={readContext:qn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},Qy={readContext:qn,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4194308,4,G_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ic(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Zy.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:lg,useDebugValue:Dp,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=lg(!1),e=t[0];return t=Ky.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=vi();if(_t){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Bt===null)throw Error(re(349));us&30||U_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cg(z_.bind(null,i,s,t),[t]),i.flags|=2048,nl(9,F_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=Bt.identifierPrefix;if(_t){var n=Bi,i=ki;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=el++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eS={readContext:qn,useCallback:$_,useContext:qn,useEffect:bp,useImperativeHandle:W_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:j_,useReducer:Ff,useRef:B_,useState:function(){return Ff(tl)},useDebugValue:Dp,useDeferredValue:function(t){var e=Kn();return X_(e,It.memoizedState,t)},useTransition:function(){var t=Ff(tl)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:I_,useSyncExternalStore:N_,useId:Y_,unstable_isNewReconciler:!1},tS={readContext:qn,useCallback:$_,useContext:qn,useEffect:bp,useImperativeHandle:W_,useInsertionEffect:H_,useLayoutEffect:V_,useMemo:j_,useReducer:zf,useRef:B_,useState:function(){return zf(tl)},useDebugValue:Dp,useDeferredValue:function(t){var e=Kn();return It===null?e.memoizedState=t:X_(e,It.memoizedState,t)},useTransition:function(){var t=zf(tl)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:I_,useSyncExternalStore:N_,useId:Y_,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ud(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qu={isMounted:function(t){return(t=t._reactInternals)?Ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=Tr(t),s=Wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(hi(e,t,r,i),Dc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=Tr(t),s=Wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,r),e!==null&&(hi(e,t,r,i),Dc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=Tr(t),r=Wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Er(t,r,i),e!==null&&(hi(e,t,i,n),Dc(e,t,i))}};function ug(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ya(n,i)||!Ya(r,s):!0}function J_(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=_n(e)?ls:tn.current,i=e.contextTypes,s=(i=i!=null)?wo(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&qu.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ep(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=_n(e)?ls:tn.current,r.context=wo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ud(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&qu.enqueueReplaceState(r,r.state,null),uu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ro(t,e){try{var n="",i=e;do n+=P3(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Of(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nS=typeof WeakMap=="function"?WeakMap:Map;function Q_(t,e,n){n=Wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){mu||(mu=!0,Md=i),dd(t,e)},n}function e2(t,e,n){n=Wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dd(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gS.bind(null,t,e,n),e.then(t,t))}function hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wi(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var iS=Qi.ReactCurrentOwner,gn=!1;function sn(t,e,n,i){e.child=t===null?P_(e,null,n,i):Ao(e,t.child,n,i)}function mg(t,e,n,i,r){n=n.render;var s=e.ref;return vo(e,r),i=Rp(t,e,n,i,s,r),n=Pp(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(_t&&n&&gp(e),e.flags|=1,sn(t,e,i,r),e.child)}function gg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,t2(t,e,s,i,r)):(t=zc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(o,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function t2(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ya(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return hd(t,e,n,i,r)}function n2(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(so,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(so,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(so,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(so,An),An|=i;return sn(t,e,r,n),e.child}function i2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hd(t,e,n,i,r){var s=_n(n)?ls:tn.current;return s=wo(e,s),vo(e,r),n=Rp(t,e,n,i,s,r),i=Pp(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(_t&&i&&gp(e),e.flags|=1,sn(t,e,n,r),e.child)}function vg(t,e,n,i,r){if(_n(n)){var s=!0;su(e)}else s=!1;if(vo(e,r),e.stateNode===null)Nc(t,e),J_(e,n,i),fd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=_n(n)?ls:tn.current,c=wo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&fg(e,o,i,c),dr=!1;var p=e.memoizedState;o.state=p,uu(e,i,o,r),l=e.memoizedState,a!==i||p!==l||vn.current||dr?(typeof u=="function"&&(ud(e,n,u,i),l=e.memoizedState),(a=dr||ug(e,n,a,i,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,D_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ri(e.type,a),o.props=c,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=_n(n)?ls:tn.current,l=wo(e,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&fg(e,o,i,l),dr=!1,p=e.memoizedState,o.state=p,uu(e,i,o,r);var g=e.memoizedState;a!==d||p!==g||vn.current||dr?(typeof h=="function"&&(ud(e,n,h,i),g=e.memoizedState),(c=dr||ug(e,n,c,i,p,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return pd(t,e,n,i,s,r)}function pd(t,e,n,i,r,s){i2(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ng(e,n,!1),qi(t,e,s);i=e.stateNode,iS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ao(e,t.child,null,s),e.child=Ao(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&ng(e,n,!0),e.child}function r2(t){var e=t.stateNode;e.pendingContext?tg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tg(t,e.context,!1),wp(t,e.containerInfo)}function _g(t,e,n,i,r){return To(),_p(r),e.flags|=256,sn(t,e,n,i),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function s2(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(yt,r&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ju(o,i,0,null),t=os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gd(n),e.memoizedState=md,t):Lp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=os(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=md,i}return s=t.child,t=s.sibling,i=Ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lp(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ol(t,e,n,i){return i!==null&&_p(i),Ao(e,t.child,null,n),t=Lp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Of(Error(re(422))),Ol(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ju({mode:"visible",children:i.children},r,0,null),s=os(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ao(e,t.child,null,o),e.child.memoizedState=gd(o),e.memoizedState=md,s);if(!(e.mode&1))return Ol(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Of(s,i,void 0),Ol(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yi(t,r),hi(i,t,r,-1))}return Op(),i=Of(Error(re(421))),Ol(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=Mr(r.nextSibling),Pn=e,_t=!0,oi=null,t!==null&&(On[kn++]=ki,On[kn++]=Bi,On[kn++]=cs,ki=t.id,Bi=t.overflow,cs=e),e=Lp(e,i.children),e.flags|=4096,e)}function xg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cd(t.return,e,n)}function kf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function o2(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,n,e);else if(t.tag===19)xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kf(e,!0,n,null,s);break;case"together":kf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sS(t,e,n){switch(e.tag){case 3:r2(e),To();break;case 5:L_(e);break;case 1:_n(e.type)&&su(e);break;case 4:wp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(lu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?s2(t,e,n):(dt(yt,yt.current&1),t=qi(t,e,n),t!==null?t.sibling:null);dt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return o2(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,n2(t,e,n)}return qi(t,e,n)}var a2,vd,l2,c2;a2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};l2=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,es(Ti.current);var s=null;switch(n){case"input":r=k0(t,r),i=k0(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=V0(t,r),i=V0(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=iu)}W0(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};c2=function(t,e,n,i){n!==i&&(e.flags|=4)};function na(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oS(t,e,n){var i=e.pendingProps;switch(vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return _n(e.type)&&ru(),Yt(e),null;case 3:return i=e.stateNode,Co(),gt(vn),gt(tn),Ap(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,oi!==null&&(Td(oi),oi=null))),vd(t,e),Yt(e),null;case 5:Tp(e);var r=es(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)l2(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Yt(e),null}if(t=es(Ti.current),Fl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<ya.length;r++)pt(ya[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Rm(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":bm(i,s),pt("invalid",i)}W0(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(i.textContent,a,t),r=["children",""+a]):Ha.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":Cl(i),Pm(i,s,!0);break;case"textarea":Cl(i),Dm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=iu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[yi]=e,t[Za]=i,a2(t,e,!1,!1),e.stateNode=t;e:{switch(o=$0(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ya.length;r++)pt(ya[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Rm(t,i),r=k0(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",t);break;case"textarea":bm(t,i),r=V0(t,i),pt("invalid",t);break;default:r=i}W0(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Bv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ov(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&np(t,s,l,o))}switch(n){case"input":Cl(t),Pm(t,i,!1);break;case"textarea":Cl(t),Dm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ho(t,!!i.multiple,s,!1):i.defaultValue!=null&&ho(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)c2(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=es(Qa.current),es(Ti.current),Fl(e)){if(i=e.stateNode,n=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Ul(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return Yt(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Cn!==null&&e.mode&1&&!(e.flags&128))C_(),To(),e.flags|=98560,s=!1;else if(s=Fl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[yi]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else oi!==null&&(Td(oi),oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Nt===0&&(Nt=3):Op())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Co(),vd(t,e),t===null&&qa(e.stateNode.containerInfo),Yt(e),null;case 10:return Sp(e.type._context),Yt(e),null;case 17:return _n(e.type)&&ru(),Yt(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)na(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,na(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Po&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304)}else{if(!i)if(t=fu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Yt(e),null}else 2*Ct()-s.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=yt.current,dt(yt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return zp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function aS(t,e){switch(vp(e),e.tag){case 1:return _n(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Co(),gt(vn),gt(tn),Ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tp(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return Co(),null;case 10:return Sp(e.type._context),null;case 22:case 23:return zp(),null;case 24:return null;default:return null}}var kl=!1,Jt=!1,lS=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function _d(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var yg=!1;function cS(t,e){if(td=eu,t=p_(),mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,p=null;t:for(;;){for(var h;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++u===i&&(l=o),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},eu=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:ri(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return g=yg,yg=!1,g}function Na(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_d(e,n,s)}r=r.next}while(r!==i)}}function Ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u2(t){var e=t.alternate;e!==null&&(t.alternate=null,u2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yi],delete e[Za],delete e[sd],delete e[$y],delete e[jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function f2(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var Vt=null,si=!1;function nr(t,e,n){for(n=n.child;n!==null;)d2(t,e,n),n=n.sibling}function d2(t,e,n){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(Vu,n)}catch{}switch(n.tag){case 5:Jt||ro(n,e);case 6:var i=Vt,r=si;Vt=null,nr(t,e,n),Vt=i,si=r,Vt!==null&&(si?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(si?(t=Vt,n=n.stateNode,t.nodeType===8?Lf(t.parentNode,n):t.nodeType===1&&Lf(t,n),ja(t)):Lf(Vt,n.stateNode));break;case 4:i=Vt,r=si,Vt=n.stateNode.containerInfo,si=!0,nr(t,e,n),Vt=i,si=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_d(n,e,o),r=r.next}while(r!==i)}nr(t,e,n);break;case 1:if(!Jt&&(ro(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,nr(t,e,n),Jt=i):nr(t,e,n);break;default:nr(t,e,n)}}function Mg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lS),e.forEach(function(i){var r=_S.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,si=!1;break e;case 3:Vt=a.stateNode.containerInfo,si=!0;break e;case 4:Vt=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(Vt===null)throw Error(re(160));d2(s,o,r),Vt=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)h2(e,t),e=e.sibling}function h2(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),mi(t),i&4){try{Na(3,t,t.return),Ku(3,t)}catch(x){Tt(t,t.return,x)}try{Na(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Qn(e,t),mi(t),i&512&&n!==null&&ro(n,n.return);break;case 5:if(Qn(e,t),mi(t),i&512&&n!==null&&ro(n,n.return),t.flags&32){var r=t.stateNode;try{Va(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Uv(r,s),$0(a,o);var c=$0(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Bv(r,d):u==="dangerouslySetInnerHTML"?Ov(r,d):u==="children"?Va(r,d):np(r,u,d,c)}switch(a){case"input":B0(r,s);break;case"textarea":Fv(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?ho(r,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?ho(r,!!s.multiple,s.defaultValue,!0):ho(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Qn(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Qn(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Qn(e,t),mi(t);break;case 13:Qn(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Up=Ct())),i&4&&Mg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||u,Qn(e,t),Jt=c):Qn(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(_e=t,u=t.child;u!==null;){for(d=_e=u;_e!==null;){switch(p=_e,h=p.child,p.tag){case 0:case 11:case 14:case 15:Na(4,p,p.return);break;case 1:ro(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:ro(p,p.return);break;case 22:if(p.memoizedState!==null){wg(d);continue}}h!==null?(h.return=p,_e=h):wg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kv("display",o))}catch(x){Tt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qn(e,t),mi(t),i&4&&Mg(t);break;case 21:break;default:Qn(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(f2(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Va(r,""),i.flags&=-33);var s=Sg(t);Sd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sg(t);yd(t,a,o);break;default:throw Error(re(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uS(t,e,n){_e=t,p2(t)}function p2(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||kl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=kl;var c=Jt;if(kl=o,(Jt=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?Tg(r):l!==null?(l.return=o,_e=l):Tg(r);for(;s!==null;)_e=s,p2(s),s=s.sibling;_e=r,kl=a,Jt=c}Eg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Eg(t)}}function Eg(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Ku(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ag(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ag(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ja(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Jt||e.flags&512&&xd(e)}catch(p){Tt(e,e.return,p)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function wg(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Tg(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ku(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{xd(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{xd(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var fS=Math.ceil,pu=Qi.ReactCurrentDispatcher,Ip=Qi.ReactCurrentOwner,Xn=Qi.ReactCurrentBatchConfig,Je=0,Bt=null,Dt=null,$t=0,An=0,so=Nr(0),Nt=0,il=null,fs=0,Zu=0,Np=0,Ua=null,mn=null,Up=0,Po=1/0,Ui=null,mu=!1,Md=null,wr=null,Bl=!1,vr=null,gu=0,Fa=0,Ed=null,Uc=-1,Fc=0;function ln(){return Je&6?Ct():Uc!==-1?Uc:Uc=Ct()}function Tr(t){return t.mode&1?Je&2&&$t!==0?$t&-$t:Yy.transition!==null?(Fc===0&&(Fc=Jv()),Fc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:s_(t.type)),t):1}function hi(t,e,n,i){if(50<Fa)throw Fa=0,Ed=null,Error(re(185));pl(t,n,i),(!(Je&2)||t!==Bt)&&(t===Bt&&(!(Je&2)&&(Zu|=n),Nt===4&&pr(t,$t)),xn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Po=Ct()+500,Xu&&Ur()))}function xn(t,e){var n=t.callbackNode;Y3(t,e);var i=Qc(t,t===Bt?$t:0);if(i===0)n!==null&&Nm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Nm(n),e===1)t.tag===0?Xy(Ag.bind(null,t)):w_(Ag.bind(null,t)),Gy(function(){!(Je&6)&&Ur()}),n=null;else{switch(Qv(i)){case 1:n=ap;break;case 4:n=Kv;break;case 16:n=Jc;break;case 536870912:n=Zv;break;default:n=Jc}n=M2(n,m2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function m2(t,e){if(Uc=-1,Fc=0,Je&6)throw Error(re(327));var n=t.callbackNode;if(_o()&&t.callbackNode!==n)return null;var i=Qc(t,t===Bt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vu(t,i);else{e=i;var r=Je;Je|=2;var s=v2();(Bt!==t||$t!==e)&&(Ui=null,Po=Ct()+500,ss(t,e));do try{pS();break}catch(a){g2(t,a)}while(!0);yp(),pu.current=s,Je=r,Dt!==null?e=0:(Bt=null,$t=0,e=Nt)}if(e!==0){if(e===2&&(r=K0(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=il,ss(t,0),pr(t,i),xn(t,Ct()),n;if(e===6)pr(t,i);else{if(r=t.current.alternate,!(i&30)&&!dS(r)&&(e=vu(t,i),e===2&&(s=K0(t),s!==0&&(i=s,e=wd(t,s))),e===1))throw n=il,ss(t,0),pr(t,i),xn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:jr(t,mn,Ui);break;case 3:if(pr(t,i),(i&130023424)===i&&(e=Up+500-Ct(),10<e)){if(Qc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rd(jr.bind(null,t,mn,Ui),e);break}jr(t,mn,Ui);break;case 4:if(pr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fS(i/1960))-i,10<i){t.timeoutHandle=rd(jr.bind(null,t,mn,Ui),i);break}jr(t,mn,Ui);break;case 5:jr(t,mn,Ui);break;default:throw Error(re(329))}}}return xn(t,Ct()),t.callbackNode===n?m2.bind(null,t):null}function wd(t,e){var n=Ua;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=vu(t,e),t!==2&&(e=mn,mn=n,e!==null&&Td(e)),t}function Td(t){mn===null?mn=t:mn.push.apply(mn,t)}function dS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Np,e&=~Zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function Ag(t){if(Je&6)throw Error(re(327));_o();var e=Qc(t,0);if(!(e&1))return xn(t,Ct()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var i=K0(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=il,ss(t,0),pr(t,e),xn(t,Ct()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,mn,Ui),xn(t,Ct()),null}function Fp(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Po=Ct()+500,Xu&&Ur())}}function ds(t){vr!==null&&vr.tag===0&&!(Je&6)&&_o();var e=Je;Je|=1;var n=Xn.transition,i=lt;try{if(Xn.transition=null,lt=1,t)return t()}finally{lt=i,Xn.transition=n,Je=e,!(Je&6)&&Ur()}}function zp(){An=so.current,gt(so)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vy(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(vp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ru();break;case 3:Co(),gt(vn),gt(tn),Ap();break;case 5:Tp(i);break;case 4:Co();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:Sp(i.type._context);break;case 22:case 23:zp()}n=n.return}if(Bt=t,Dt=t=Ar(t.current,null),$t=An=e,Nt=0,il=null,Np=Zu=fs=0,mn=Ua=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Qr=null}return t}function g2(t,e){do{var n=Dt;try{if(yp(),Lc.current=hu,du){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}du=!1}if(us=0,Ot=It=Mt=null,Ia=!1,el=0,Ip.current=null,n===null||n.return===null){Nt=1,il=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=hg(o);if(h!==null){h.flags&=-257,pg(h,o,a,s,e),h.mode&1&&dg(s,c,e),e=h,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){dg(s,c,e),Op();break e}l=Error(re(426))}}else if(_t&&a.mode&1){var m=hg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),pg(m,o,a,s,e),_p(Ro(l,a));break e}}s=l=Ro(l,a),Nt!==4&&(Nt=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Q_(s,l,e);og(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(wr===null||!wr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=e2(s,a,e);og(s,S);break e}}s=s.return}while(s!==null)}x2(n)}catch(R){e=R,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function v2(){var t=pu.current;return pu.current=hu,t===null?hu:t}function Op(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Bt===null||!(fs&268435455)&&!(Zu&268435455)||pr(Bt,$t)}function vu(t,e){var n=Je;Je|=2;var i=v2();(Bt!==t||$t!==e)&&(Ui=null,ss(t,e));do try{hS();break}catch(r){g2(t,r)}while(!0);if(yp(),Je=n,pu.current=i,Dt!==null)throw Error(re(261));return Bt=null,$t=0,Nt}function hS(){for(;Dt!==null;)_2(Dt)}function pS(){for(;Dt!==null&&!k3();)_2(Dt)}function _2(t){var e=S2(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?x2(t):Dt=e,Ip.current=null}function x2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aS(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Dt=null;return}}else if(n=oS(n,e,An),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Nt===0&&(Nt=5)}function jr(t,e,n){var i=lt,r=Xn.transition;try{Xn.transition=null,lt=1,mS(t,e,n,i)}finally{Xn.transition=r,lt=i}return null}function mS(t,e,n,i){do _o();while(vr!==null);if(Je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(q3(t,s),t===Bt&&(Dt=Bt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bl||(Bl=!0,M2(Jc,function(){return _o(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=lt;lt=1;var a=Je;Je|=4,Ip.current=null,cS(t,n),h2(n,t),Uy(nd),eu=!!td,nd=td=null,t.current=n,uS(n),B3(),Je=a,lt=o,Xn.transition=s}else t.current=n;if(Bl&&(Bl=!1,vr=t,gu=r),s=t.pendingLanes,s===0&&(wr=null),G3(n.stateNode),xn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(mu)throw mu=!1,t=Md,Md=null,t;return gu&1&&t.tag!==0&&_o(),s=t.pendingLanes,s&1?t===Ed?Fa++:(Fa=0,Ed=t):Fa=0,Ur(),null}function _o(){if(vr!==null){var t=Qv(gu),e=Xn.transition,n=lt;try{if(Xn.transition=null,lt=16>t?16:t,vr===null)var i=!1;else{if(t=vr,vr=null,gu=0,Je&6)throw Error(re(331));var r=Je;for(Je|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var u=_e;switch(u.tag){case 0:case 11:case 15:Na(8,u,s)}var d=u.child;if(d!==null)d.return=u,_e=d;else for(;_e!==null;){u=_e;var p=u.sibling,h=u.return;if(u2(u),u===c){_e=null;break}if(p!==null){p.return=h,_e=p;break}_e=h}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,_e=f;break e}_e=s.return}}var _=t.current;for(_e=_;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=_;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ku(9,a)}}catch(R){Tt(a,a.return,R)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(Je=r,Ur(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(Vu,t)}catch{}i=!0}return i}finally{lt=n,Xn.transition=e}}return!1}function Cg(t,e,n){e=Ro(n,e),e=Q_(t,e,1),t=Er(t,e,1),e=ln(),t!==null&&(pl(t,1,e),xn(t,e))}function Tt(t,e,n){if(t.tag===3)Cg(t,t,n);else for(;e!==null;){if(e.tag===3){Cg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=Ro(n,t),t=e2(e,t,1),e=Er(e,t,1),t=ln(),e!==null&&(pl(e,1,t),xn(e,t));break}}e=e.return}}function gS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&($t&n)===n&&(Nt===4||Nt===3&&($t&130023424)===$t&&500>Ct()-Up?ss(t,0):Np|=n),xn(t,e)}function y2(t,e){e===0&&(t.mode&1?(e=bl,bl<<=1,!(bl&130023424)&&(bl=4194304)):e=1);var n=ln();t=Yi(t,e),t!==null&&(pl(t,e,n),xn(t,n))}function vS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),y2(t,n)}function _S(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),y2(t,n)}var S2;S2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,sS(t,e,n);gn=!!(t.flags&131072)}else gn=!1,_t&&e.flags&1048576&&T_(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nc(t,e),t=e.pendingProps;var r=wo(e,tn.current);vo(e,n),r=Rp(null,e,i,t,r,n);var s=Pp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,su(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ep(e),r.updater=qu,e.stateNode=r,r._reactInternals=e,fd(e,i,t,n),e=pd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&gp(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yS(i),t=ri(i,t),r){case 0:e=hd(null,e,i,t,n);break e;case 1:e=vg(null,e,i,t,n);break e;case 11:e=mg(null,e,i,t,n);break e;case 14:e=gg(null,e,i,ri(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),hd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),vg(t,e,i,r,n);case 3:e:{if(r2(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,D_(t,e),uu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ro(Error(re(423)),e),e=_g(t,e,i,n,r);break e}else if(i!==r){r=Ro(Error(re(424)),e),e=_g(t,e,i,n,r);break e}else for(Cn=Mr(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,oi=null,n=P_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),i===r){e=qi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return L_(e),t===null&&ld(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,id(i,r)?o=null:s!==null&&id(i,s)&&(e.flags|=32),i2(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&ld(e),null;case 13:return s2(t,e,n);case 4:return wp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ao(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),mg(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(lu,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!vn.current){e=qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vo(e,n),r=qn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),gg(t,e,i,r,n);case 15:return t2(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Nc(t,e),e.tag=1,_n(i)?(t=!0,su(e)):t=!1,vo(e,n),J_(e,i,r),fd(e,i,r,n),pd(null,e,i,!0,t,n);case 19:return o2(t,e,n);case 22:return n2(t,e,n)}throw Error(re(156,e.tag))};function M2(t,e){return qv(t,e)}function xS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new xS(t,e,n,i)}function kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yS(t){if(typeof t=="function")return kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rp)return 11;if(t===sp)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")kp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qs:return os(n.children,r,s,e);case ip:o=8,r|=8;break;case U0:return t=Gn(12,n,e,r|2),t.elementType=U0,t.lanes=s,t;case F0:return t=Gn(13,n,e,r),t.elementType=F0,t.lanes=s,t;case z0:return t=Gn(19,n,e,r),t.elementType=z0,t.lanes=s,t;case Lv:return Ju(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bv:o=10;break e;case Dv:o=9;break e;case rp:o=11;break e;case sp:o=14;break e;case fr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Ju(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=Lv,t.lanes=n,t.stateNode={isHidden:!1},t}function Bf(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function Hf(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sf(0),this.expirationTimes=Sf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bp(t,e,n,i,r,s,o,a,l){return t=new SS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ep(s),t}function MS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function E2(t){if(!t)return br;t=t._reactInternals;e:{if(Ms(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(_n(n))return E_(t,n,e)}return e}function w2(t,e,n,i,r,s,o,a,l){return t=Bp(n,i,!0,t,r,s,o,a,l),t.context=E2(null),n=t.current,i=ln(),r=Tr(n),s=Wi(i,r),s.callback=e??null,Er(n,s,r),t.current.lanes=r,pl(t,r,i),xn(t,i),t}function Qu(t,e,n,i){var r=e.current,s=ln(),o=Tr(r);return n=E2(n),e.context===null?e.context=n:e.pendingContext=n,e=Wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Er(r,e,o),t!==null&&(hi(t,r,o,s),Dc(t,r,o)),o}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hp(t,e){Rg(t,e),(t=t.alternate)&&Rg(t,e)}function ES(){return null}var T2=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vp(t){this._internalRoot=t}ef.prototype.render=Vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Qu(t,e,null,null)};ef.prototype.unmount=Vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){Qu(null,t,null,null)}),e[Xi]=null}};function ef(t){this._internalRoot=t}ef.prototype.unstable_scheduleHydration=function(t){if(t){var e=n_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&r_(t)}};function Gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pg(){}function wS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=_u(o);s.call(c)}}var o=w2(e,i,t,0,null,!1,!1,"",Pg);return t._reactRootContainer=o,t[Xi]=o.current,qa(t.nodeType===8?t.parentNode:t),ds(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=_u(l);a.call(c)}}var l=Bp(t,0,!1,null,null,!1,!1,"",Pg);return t._reactRootContainer=l,t[Xi]=l.current,qa(t.nodeType===8?t.parentNode:t),ds(function(){Qu(e,l,n,i)}),l}function nf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=_u(o);a.call(l)}}Qu(e,o,t,r)}else o=wS(n,e,t,r,i);return _u(o)}e_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xa(e.pendingLanes);n!==0&&(lp(e,n|1),xn(e,Ct()),!(Je&6)&&(Po=Ct()+500,Ur()))}break;case 13:ds(function(){var i=Yi(t,1);if(i!==null){var r=ln();hi(i,t,1,r)}}),Hp(t,1)}};cp=function(t){if(t.tag===13){var e=Yi(t,134217728);if(e!==null){var n=ln();hi(e,t,134217728,n)}Hp(t,134217728)}};t_=function(t){if(t.tag===13){var e=Tr(t),n=Yi(t,e);if(n!==null){var i=ln();hi(n,t,e,i)}Hp(t,e)}};n_=function(){return lt};i_=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};X0=function(t,e,n){switch(e){case"input":if(B0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ju(i);if(!r)throw Error(re(90));Nv(i),B0(i,r)}}}break;case"textarea":Fv(t,n);break;case"select":e=n.value,e!=null&&ho(t,!!n.multiple,e,!1)}};Gv=Fp;Wv=ds;var TS={usingClientEntryPoint:!1,Events:[gl,Qs,ju,Hv,Vv,Fp]},ia={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AS={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xv(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||ES,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{Vu=Hl.inject(AS),wi=Hl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gp(e))throw Error(re(200));return MS(t,e,null,n)};Ln.createRoot=function(t,e){if(!Gp(t))throw Error(re(299));var n=!1,i="",r=T2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bp(t,1,!1,null,null,n,!1,i,r),t[Xi]=e.current,qa(t.nodeType===8?t.parentNode:t),new Vp(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Xv(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return ds(t)};Ln.hydrate=function(t,e,n){if(!tf(e))throw Error(re(200));return nf(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!Gp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=T2;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=w2(e,null,t,1,n??null,r,!1,s,o),t[Xi]=e.current,qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ef(e)};Ln.render=function(t,e,n){if(!tf(e))throw Error(re(200));return nf(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!tf(t))throw Error(re(40));return t._reactRootContainer?(ds(function(){nf(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1};Ln.unstable_batchedUpdates=Fp;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tf(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return nf(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function A2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A2)}catch(t){console.error(t)}}A2(),Av.exports=Ln;var CS=Av.exports,bg=CS;I0.createRoot=bg.createRoot,I0.hydrateRoot=bg.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wp="169",RS=0,Dg=1,PS=2,C2=1,bS=2,Li=3,Dr=0,cn=1,Si=2,Cr=0,xo=1,Lg=2,Ig=3,Ng=4,DS=5,qr=100,LS=101,IS=102,NS=103,US=104,FS=200,zS=201,OS=202,kS=203,Ad=204,Cd=205,BS=206,HS=207,VS=208,GS=209,WS=210,$S=211,jS=212,XS=213,YS=214,Rd=0,Pd=1,bd=2,bo=3,Dd=4,Ld=5,Id=6,Nd=7,R2=0,qS=1,KS=2,Rr=0,ZS=1,JS=2,QS=3,eM=4,tM=5,nM=6,iM=7,P2=300,Do=301,Lo=302,Ud=303,Fd=304,rf=306,zd=1e3,ts=1001,Od=1002,Wn=1003,rM=1004,Vl=1005,ai=1006,Vf=1007,ns=1008,Ki=1009,b2=1010,D2=1011,rl=1012,$p=1013,hs=1014,Hi=1015,_l=1016,jp=1017,Xp=1018,Io=1020,L2=35902,I2=1021,N2=1022,ci=1023,U2=1024,F2=1025,yo=1026,No=1027,z2=1028,Yp=1029,O2=1030,qp=1031,Kp=1033,Oc=33776,kc=33777,Bc=33778,Hc=33779,kd=35840,Bd=35841,Hd=35842,Vd=35843,Gd=36196,Wd=37492,$d=37496,jd=37808,Xd=37809,Yd=37810,qd=37811,Kd=37812,Zd=37813,Jd=37814,Qd=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,Vc=36492,oh=36494,ah=36495,k2=36283,lh=36284,ch=36285,uh=36286,sM=3200,oM=3201,aM=0,lM=1,mr="",_i="srgb",Fr="srgb-linear",Zp="display-p3",sf="display-p3-linear",xu="linear",mt="srgb",yu="rec709",Su="p3",As=7680,Ug=519,cM=512,uM=513,fM=514,B2=515,dM=516,hM=517,pM=518,mM=519,fh=35044,Fg="300 es",Vi=2e3,Mu=2001;class jo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zg=1234567;const za=Math.PI/180,sl=180/Math.PI;function $i(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function Jp(t,e){return(t%e+e)%e}function gM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function vM(t,e,n){return t!==e?(n-t)/(e-t):0}function Oa(t,e,n){return(1-n)*t+n*e}function _M(t,e,n,i){return Oa(t,e,1-Math.exp(-n*i))}function xM(t,e=1){return e-Math.abs(Jp(t,e*2)-e)}function yM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function SM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function MM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function EM(t,e){return t+Math.random()*(e-t)}function wM(t){return t*(.5-Math.random())}function TM(t){t!==void 0&&(zg=t);let e=zg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AM(t){return t*za}function CM(t){return t*sl}function RM(t){return(t&t-1)===0&&t!==0}function PM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function bM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function DM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),p=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*p,a*c);break;case"YZY":t.set(l*p,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*p,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function at(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Og={DEG2RAD:za,RAD2DEG:sl,generateUUID:$i,clamp:on,euclideanModulo:Jp,mapLinear:gM,inverseLerp:vM,lerp:Oa,damp:_M,pingpong:xM,smoothstep:yM,smootherstep:SM,randInt:MM,randFloat:EM,randFloatSpread:wM,seededRandom:TM,degToRad:AM,radToDeg:CM,isPowerOfTwo:RM,ceilPowerOfTwo:PM,floorPowerOfTwo:bM,setQuaternionFromProperEuler:DM,normalize:at,denormalize:li};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],h=i[5],g=i[8],x=r[0],m=r[3],f=r[6],_=r[1],v=r[4],S=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*m+a*v+l*A,s[6]=o*f+a*S+l*T,s[1]=c*x+u*_+d*R,s[4]=c*m+u*v+d*A,s[7]=c*f+u*S+d*T,s[2]=p*x+h*_+g*R,s[5]=p*m+h*v+g*A,s[8]=p*f+h*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,p=a*l-u*s,h=c*s-o*l,g=n*d+i*p+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=p*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=h*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gf.makeScale(e,n)),this}rotate(e){return this.premultiply(Gf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gf=new Ge;function H2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Eu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LM(){const t=Eu("canvas");return t.style.display="block",t}const kg={};function Gc(t){t in kg||(kg[t]=!0,console.warn(t))}function IM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function NM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function UM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bg=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hg=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[Fr]:{transfer:xu,primaries:yu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[_i]:{transfer:mt,primaries:yu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[sf]:{transfer:xu,primaries:Su,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Hg),fromReference:t=>t.applyMatrix3(Bg)},[Zp]:{transfer:mt,primaries:Su,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Hg),fromReference:t=>t.applyMatrix3(Bg).convertLinearToSRGB()}},FM=new Set([Fr,sf]),st={enabled:!0,_workingColorSpace:Fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!FM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ra[e].toReference,r=ra[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ra[t].primaries},getTransfer:function(t){return t===mr?xu:ra[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ra[e].luminanceCoefficients)}};function So(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cs;class zM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=Eu("canvas")),Cs.width=e.width,Cs.height=e.height;const i=Cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Eu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=So(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(So(n[i]/255)*255):n[i]=So(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OM=0;class V2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($f(r[o].image)):s.push($f(r[o]))}else s=$f(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $f(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kM=0;class un extends jo{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=ts,r=ts,s=ai,o=ns,a=ci,l=Ki,c=un.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=$i(),this.name="",this.source=new V2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=P2;un.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],h=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(h+1)/2,R=(f+1)/2,A=(u+p)/4,T=(d+x)/4,P=(g+m)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(p-u)/_,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BM extends jo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new V2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends BM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class G2 extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],h=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=p,e[n+1]=h,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==p||c!==h||u!==g){let m=1-a;const f=l*p+c*h+u*g+d*x,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,f*_);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*_;if(l=l*m+p*S,c=c*m+h*S,u=u*m+g*S,d=d*m+x*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],p=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*h-c*p,e[n+1]=l*g+u*p+c*d-a*h,e[n+2]=c*g+u*h+a*p-l*d,e[n+3]=u*g-a*d-l*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),p=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*u*d+c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d-p*h*g;break;case"YXZ":this._x=p*u*d+c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d+p*h*g;break;case"ZXY":this._x=p*u*d-c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d-p*h*g;break;case"ZYX":this._x=p*u*d-c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d+p*h*g;break;case"YZX":this._x=p*u*d+c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d-p*h*g;break;case"XZY":this._x=p*u*d-c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d+p*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],p=i+a+d;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,p=Math.sin(n*u)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new O,Vg=new ms;class xl{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Wl.subVectors(this.max,sa),Rs.subVectors(e.a,sa),Ps.subVectors(e.b,sa),bs.subVectors(e.c,sa),ir.subVectors(Ps,Rs),rr.subVectors(bs,Ps),kr.subVectors(Rs,bs);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-kr.z,kr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,kr.z,0,-kr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-kr.y,kr.x,0];return!Xf(n,Rs,Ps,bs,Wl)||(n=[1,0,0,0,1,0,0,0,1],!Xf(n,Rs,Ps,bs,Wl))?!1:($l.crossVectors(ir,rr),n=[$l.x,$l.y,$l.z],Xf(n,Rs,Ps,bs,Wl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new O,new O,new O,new O,new O,new O,new O,new O],ei=new O,Gl=new xl,Rs=new O,Ps=new O,bs=new O,ir=new O,rr=new O,kr=new O,sa=new O,Wl=new O,$l=new O,Br=new O;function Xf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Br.fromArray(t,s);const a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=n.dot(Br),u=i.dot(Br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const VM=new xl,oa=new O,Yf=new O;class yl{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):VM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const n=oa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Yf)),this.expandByPoint(oa.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new O,qf=new O,jl=new O,sr=new O,Kf=new O,Xl=new O,Zf=new O;class of{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qf.copy(e).add(n).multiplyScalar(.5),jl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(qf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(jl),a=sr.dot(this.direction),l=-sr.dot(jl),c=sr.lengthSq(),u=Math.abs(1-o*o);let d,p,h,g;if(u>0)if(d=o*l-a,p=o*a-l,g=s*u,d>=0)if(p>=-g)if(p<=g){const x=1/u;d*=x,p*=x,h=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+a)),h=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+a)),h=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),h=p*(p+2*l)+c):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),h=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qf).addScaledVector(jl,p),h}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){Kf.subVectors(n,e),Xl.subVectors(i,e),Zf.crossVectors(Kf,Xl);let o=this.direction.dot(Zf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(Xl.crossVectors(sr,Xl));if(l<0)return null;const c=a*this.direction.dot(Kf.cross(sr));if(c<0||l+c>o)return null;const u=-a*sr.dot(Zf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,u,d,p,h,g,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,p,h,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,d,p,h,g,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=h,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*u,h=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+g*c,n[5]=p-x*c,n[9]=-a*l,n[2]=x-p*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*u,h=l*d,g=c*u,x=c*d;n[0]=p+x*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=x+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*u,h=l*d,g=c*u,x=c*d;n[0]=p-x*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=x-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*u,h=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=g*c-h,n[8]=p*c+x,n[1]=l*d,n[5]=x*c+p,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,h=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-p*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+g,n[10]=p-x*d}else if(e.order==="XZY"){const p=o*l,h=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=p*d+x,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=x*d+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,WM)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),or.crossVectors(i,wn),or.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),or.crossVectors(i,wn)),or.normalize(),Yl.crossVectors(wn,or),r[0]=or.x,r[4]=Yl.x,r[8]=wn.x,r[1]=or.y,r[5]=Yl.y,r[9]=wn.y,r[2]=or.z,r[6]=Yl.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],h=i[13],g=i[2],x=i[6],m=i[10],f=i[14],_=i[3],v=i[7],S=i[11],R=i[15],A=r[0],T=r[4],P=r[8],k=r[12],y=r[1],M=r[5],H=r[9],B=r[13],W=r[2],N=r[6],I=r[10],q=r[14],L=r[3],Z=r[7],X=r[11],ne=r[15];return s[0]=o*A+a*y+l*W+c*L,s[4]=o*T+a*M+l*N+c*Z,s[8]=o*P+a*H+l*I+c*X,s[12]=o*k+a*B+l*q+c*ne,s[1]=u*A+d*y+p*W+h*L,s[5]=u*T+d*M+p*N+h*Z,s[9]=u*P+d*H+p*I+h*X,s[13]=u*k+d*B+p*q+h*ne,s[2]=g*A+x*y+m*W+f*L,s[6]=g*T+x*M+m*N+f*Z,s[10]=g*P+x*H+m*I+f*X,s[14]=g*k+x*B+m*q+f*ne,s[3]=_*A+v*y+S*W+R*L,s[7]=_*T+v*M+S*N+R*Z,s[11]=_*P+v*H+S*I+R*X,s[15]=_*k+v*B+S*q+R*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],h=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*p+i*c*p+r*a*h-i*l*h)+x*(+n*l*h-n*c*p+s*o*p-r*o*h+r*c*u-s*l*u)+m*(+n*c*d-n*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*p+r*o*d-i*o*p+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],h=e[11],g=e[12],x=e[13],m=e[14],f=e[15],_=d*m*c-x*p*c+x*l*h-a*m*h-d*l*f+a*p*f,v=g*p*c-u*m*c-g*l*h+o*m*h+u*l*f-o*p*f,S=u*x*c-g*d*c+g*a*h-o*x*h-u*a*f+o*d*f,R=g*d*l-u*x*l-g*a*p+o*x*p+u*a*m-o*d*m,A=n*_+i*v+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*p*s-d*m*s-x*r*h+i*m*h+d*r*f-i*p*f)*T,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*T,e[3]=(d*l*s-a*p*s-d*r*c+i*p*c+a*r*h-i*l*h)*T,e[4]=v*T,e[5]=(u*m*s-g*p*s+g*r*h-n*m*h-u*r*f+n*p*f)*T,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*f-n*l*f)*T,e[7]=(o*p*s-u*l*s+u*r*c-n*p*c-o*r*h+n*l*h)*T,e[8]=S*T,e[9]=(g*d*s-u*x*s-g*i*h+n*x*h+u*i*f-n*d*f)*T,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*f+n*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*h-n*a*h)*T,e[12]=R*T,e[13]=(u*x*r-g*d*r+g*i*p-n*x*p-u*i*m+n*d*m)*T,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*p+n*a*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,p=s*c,h=s*u,g=s*d,x=o*u,m=o*d,f=a*d,_=l*c,v=l*u,S=l*d,R=i.x,A=i.y,T=i.z;return r[0]=(1-(x+f))*R,r[1]=(h+S)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(h-S)*A,r[5]=(1-(p+f))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+v)*T,r[9]=(m-_)*T,r[10]=(1-(p+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ds.set(r[0],r[1],r[2]).length();const o=Ds.set(r[4],r[5],r[6]).length(),a=Ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,u=1/o,d=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,n.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let h,g;if(a===Vi)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Mu)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),p=(n+e)*c,h=(i+r)*u;let g,x;if(a===Vi)g=(o+s)*d,x=-2*d;else if(a===Mu)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ds=new O,ti=new xt,GM=new O(0,0,0),WM=new O(1,1,1),or=new O,Yl=new O,wn=new O,Gg=new xt,Wg=new ms;class Zi{constructor(e=0,n=0,i=0,r=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wg.setFromEuler(this),this.setFromQuaternion(Wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class Qp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $M=0;const $g=new O,Ls=new ms,Pi=new xt,ql=new O,aa=new O,jM=new O,XM=new ms,jg=new O(1,0,0),Xg=new O(0,1,0),Yg=new O(0,0,1),qg={type:"added"},YM={type:"removed"},Is={type:"childadded",child:null},Jf={type:"childremoved",child:null};class en extends jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new O,n=new Zi,i=new ms,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ge}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(jg,e)}rotateY(e){return this.rotateOnAxis(Xg,e)}rotateZ(e){return this.rotateOnAxis(Yg,e)}translateOnAxis(e,n){return $g.copy(e).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jg,e)}translateY(e){return this.translateOnAxis(Xg,e)}translateZ(e){return this.translateOnAxis(Yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ql.copy(e):ql.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(aa,ql,this.up):Pi.lookAt(ql,aa,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Ls.setFromRotationMatrix(Pi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qg),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YM),Jf.child=e,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qg),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,jM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new O(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new O,bi=new O,Qf=new O,Di=new O,Ns=new O,Us=new O,Kg=new O,e0=new O,t0=new O,n0=new O,i0=new Rt,r0=new Rt,s0=new Rt;class Hn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),bi.subVectors(i,n),Qf.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(bi),l=ni.dot(Qf),c=bi.dot(bi),u=bi.dot(Qf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,h=(c*l-a*u)*p,g=(o*u-a*l)*p;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return i0.setScalar(0),r0.setScalar(0),s0.setScalar(0),i0.fromBufferAttribute(e,n),r0.fromBufferAttribute(e,i),s0.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(i0,s.x),o.addScaledVector(r0,s.y),o.addScaledVector(s0,s.z),o}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),bi.subVectors(e,n),ni.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ni.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ns.subVectors(r,i),Us.subVectors(s,i),e0.subVectors(e,i);const l=Ns.dot(e0),c=Us.dot(e0);if(l<=0&&c<=0)return n.copy(i);t0.subVectors(e,r);const u=Ns.dot(t0),d=Us.dot(t0);if(u>=0&&d<=u)return n.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ns,o);n0.subVectors(e,s);const h=Ns.dot(n0),g=Us.dot(n0);if(g>=0&&h<=g)return n.copy(s);const x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Us,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Kg.subVectors(s,r),a=(d-u)/(d-u+(h-g)),n.copy(r).addScaledVector(Kg,a);const f=1/(m+x+p);return o=x*f,a=p*f,n.copy(i).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function o0(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Jp(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=o0(o,s,e+1/3),this.g=o0(o,s,e),this.b=o0(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=_i){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_i){const i=W2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return st.fromWorkingColorSpace(Kt.copy(this),e),Math.round(on(Kt.r*255,0,255))*65536+Math.round(on(Kt.g*255,0,255))*256+Math.round(on(Kt.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=_i){st.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==_i?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(Kl);const i=Oa(ar.h,Kl.h,n),r=Oa(ar.s,Kl.s,n),s=Oa(ar.l,Kl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new je;je.NAMES=W2;let qM=0;class Es extends jo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=xo,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==Dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wu extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=R2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new O,Zl=new Xe;class an{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zl.fromBufferAttribute(this,n),Zl.applyMatrix3(e),this.setXY(n,Zl.x,Zl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=li(n,this.array)),n}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=li(n,this.array)),n}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=li(n,this.array)),n}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=li(n,this.array)),n}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}}class $2 extends an{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class j2 extends an{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yn extends an{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KM=0;const Un=new xt,a0=new en,Fs=new O,Tn=new xl,la=new xl,zt=new O;class kt extends jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H2(e)?j2:$2)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return a0.lookAt(e),a0.updateMatrix(),this.applyMatrix4(a0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];la.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Tn.min,la.min),Tn.expandByPoint(zt),zt.addVectors(Tn.max,la.max),Tn.expandByPoint(zt)):(Tn.expandByPoint(la.min),Tn.expandByPoint(la.max))}Tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),zt.add(Fs)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new O,l[P]=new O;const c=new O,u=new O,d=new O,p=new Xe,h=new Xe,g=new Xe,x=new O,m=new O;function f(P,k,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,k),d.fromBufferAttribute(i,y),p.fromBufferAttribute(s,P),h.fromBufferAttribute(s,k),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),h.sub(p),g.sub(p);const M=1/(h.x*g.y-g.x*h.y);isFinite(M)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(M),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(M),a[P].add(x),a[k].add(x),a[y].add(x),l[P].add(m),l[k].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,k=_.length;P<k;++P){const y=_[P],M=y.start,H=y.count;for(let B=M,W=M+H;B<W;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new O,S=new O,R=new O,A=new O;function T(P){R.fromBufferAttribute(r,P),A.copy(R);const k=a[P];v.copy(k),v.sub(R.multiplyScalar(R.dot(k))).normalize(),S.crossVectors(A,k);const M=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,M)}for(let P=0,k=_.length;P<k;++P){const y=_[P],M=y.start,H=y.count;for(let B=M,W=M+H;B<W;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,h=i.count;p<h;p++)i.setXYZ(p,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let p=0,h=e.count;p<h;p+=3){const g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=n.count;p<h;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u);let h=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let f=0;f<u;f++)p[g++]=c[h++]}return new an(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const p=c[u],h=e(p,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,h=d.length;p<h;p++)u.push(d[p].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zg=new xt,Hr=new of,Jl=new yl,Jg=new O,Ql=new O,ec=new O,tc=new O,l0=new O,nc=new O,Qg=new O,ic=new O;class ui extends en{constructor(e=new kt,n=new wu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(l0.fromBufferAttribute(d,e),o?nc.addScaledVector(l0,u):nc.addScaledVector(l0.sub(n),u))}n.add(nc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(Jl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Jl,Jg)===null||Hr.origin.distanceToSquared(Jg)>(e.far-e.near)**2))&&(Zg.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(Zg),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const m=p[g],f=o[m.materialIndex],_=Math.max(m.start,h.start),v=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=_,R=v;S<R;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=rc(this,f,e,i,c,u,d,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,f=x;m<f;m+=3){const _=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=rc(this,o,e,i,c,u,d,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const m=p[g],f=o[m.materialIndex],_=Math.max(m.start,h.start),v=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=_,R=v;S<R;S+=3){const A=S,T=S+1,P=S+2;r=rc(this,f,e,i,c,u,d,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,f=x;m<f;m+=3){const _=m,v=m+1,S=m+2;r=rc(this,o,e,i,c,u,d,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ZM(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Dr,a),l===null)return null;ic.copy(a),ic.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ic);return c<n.near||c>n.far?null:{distance:c,point:ic.clone(),object:t}}function rc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ql),t.getVertexPosition(l,ec),t.getVertexPosition(c,tc);const u=ZM(t,e,n,i,Ql,ec,tc,Qg);if(u){const d=new O;Hn.getBarycoord(Qg,Ql,ec,tc,d),r&&(u.uv=Hn.getInterpolatedAttribute(r,a,l,c,d,new Xe)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,a,l,c,d,new Xe)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new O,materialIndex:0};Hn.getNormal(Ql,ec,tc,p.normal),u.face=p,u.barycoord=d}return u}class Sl extends kt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let p=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(d,2));function g(x,m,f,_,v,S,R,A,T,P,k){const y=S/T,M=R/P,H=S/2,B=R/2,W=A/2,N=T+1,I=P+1;let q=0,L=0;const Z=new O;for(let X=0;X<I;X++){const ne=X*M-B;for(let ye=0;ye<N;ye++){const Ie=ye*y-H;Z[x]=Ie*_,Z[m]=ne*v,Z[f]=W,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[f]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(ye/T),d.push(1-X/P),q+=1}}for(let X=0;X<P;X++)for(let ne=0;ne<T;ne++){const ye=p+ne+N*X,Ie=p+ne+N*(X+1),Y=p+(ne+1)+N*(X+1),ee=p+(ne+1)+N*X;l.push(ye,Ie,ee),l.push(Ie,Y,ee),L+=6}a.addGroup(h,L,k),h+=L,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Uo(t[n]);for(const r in i)e[r]=i[r]}return e}function JM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function X2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const QM={clone:Uo,merge:rn};var eE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eE,this.fragmentShader=tE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=JM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Y2 extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new O,e1=new Xe,t1=new Xe;class Bn extends Y2{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,n){return this.getViewBounds(e,e1,t1),n.subVectors(t1,e1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,Os=1;class nE extends en{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(zs,Os,e,n);r.layers=this.layers,this.add(r);const s=new Bn(zs,Os,e,n);s.layers=this.layers,this.add(s);const o=new Bn(zs,Os,e,n);o.layers=this.layers,this.add(o);const a=new Bn(zs,Os,e,n);a.layers=this.layers,this.add(a);const l=new Bn(zs,Os,e,n);l.layers=this.layers,this.add(l);const c=new Bn(zs,Os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,p,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class q2 extends un{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Do,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iE extends ps{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new q2(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Sl(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Cr});s.uniforms.tEquirect.value=n;const o=new ui(r,s),a=n.minFilter;return n.minFilter===ns&&(n.minFilter=ai),new nE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const c0=new O,rE=new O,sE=new Ge;class Xr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=c0.subVectors(i,n).cross(rE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(c0),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sE.getNormalMatrix(e),r=this.coplanarPoint(c0).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new yl,sc=new O;class K2{constructor(e=new Xr,n=new Xr,i=new Xr,r=new Xr,s=new Xr,o=new Xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],h=r[8],g=r[9],x=r[10],m=r[11],f=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,p-c,m-h,S-f).normalize(),i[1].setComponents(l+s,p+c,m+h,S+f).normalize(),i[2].setComponents(l+o,p+u,m+g,S+_).normalize(),i[3].setComponents(l-o,p-u,m-g,S-_).normalize(),i[4].setComponents(l-a,p-d,m-x,S-v).normalize(),n===Vi)i[5].setComponents(l+a,p+d,m+x,S+v).normalize();else if(n===Mu)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sc.x=r.normal.x>0?e.max.x:e.min.x,sc.y=r.normal.y>0?e.max.y:e.min.y,sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Z2(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let p=0;for(let h=1;h<d.length;h++){const g=d[p],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let h=0,g=d.length;h<g;h++){const x=d[h];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class af extends kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,p=n/l,h=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const _=f*p-o;for(let v=0;v<c;v++){const S=v*d-s;g.push(S,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+c*f,S=_+c*(f+1),R=_+1+c*(f+1),A=_+1+c*f;h.push(v,S,A),h.push(S,R,A)}this.setIndex(h),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(x,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.width,e.height,e.widthSegments,e.heightSegments)}}var aE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zE="gl_FragColor = linearToOutputTexel( gl_FragColor );",OE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t4=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i4=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r4=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s4=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o4=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a4=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l4=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c4=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u4=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f4=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g4=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M4=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T4=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P4=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U4=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V4=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,G4=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q4=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ew=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ow=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:aE,alphahash_pars_fragment:lE,alphamap_fragment:cE,alphamap_pars_fragment:uE,alphatest_fragment:fE,alphatest_pars_fragment:dE,aomap_fragment:hE,aomap_pars_fragment:pE,batching_pars_vertex:mE,batching_vertex:gE,begin_vertex:vE,beginnormal_vertex:_E,bsdfs:xE,iridescence_fragment:yE,bumpmap_pars_fragment:SE,clipping_planes_fragment:ME,clipping_planes_pars_fragment:EE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:TE,color_fragment:AE,color_pars_fragment:CE,color_pars_vertex:RE,color_vertex:PE,common:bE,cube_uv_reflection_fragment:DE,defaultnormal_vertex:LE,displacementmap_pars_vertex:IE,displacementmap_vertex:NE,emissivemap_fragment:UE,emissivemap_pars_fragment:FE,colorspace_fragment:zE,colorspace_pars_fragment:OE,envmap_fragment:kE,envmap_common_pars_fragment:BE,envmap_pars_fragment:HE,envmap_pars_vertex:VE,envmap_physical_pars_fragment:QE,envmap_vertex:GE,fog_vertex:WE,fog_pars_vertex:$E,fog_fragment:jE,fog_pars_fragment:XE,gradientmap_pars_fragment:YE,lightmap_pars_fragment:qE,lights_lambert_fragment:KE,lights_lambert_pars_fragment:ZE,lights_pars_begin:JE,lights_toon_fragment:e4,lights_toon_pars_fragment:t4,lights_phong_fragment:n4,lights_phong_pars_fragment:i4,lights_physical_fragment:r4,lights_physical_pars_fragment:s4,lights_fragment_begin:o4,lights_fragment_maps:a4,lights_fragment_end:l4,logdepthbuf_fragment:c4,logdepthbuf_pars_fragment:u4,logdepthbuf_pars_vertex:f4,logdepthbuf_vertex:d4,map_fragment:h4,map_pars_fragment:p4,map_particle_fragment:m4,map_particle_pars_fragment:g4,metalnessmap_fragment:v4,metalnessmap_pars_fragment:_4,morphinstance_vertex:x4,morphcolor_vertex:y4,morphnormal_vertex:S4,morphtarget_pars_vertex:M4,morphtarget_vertex:E4,normal_fragment_begin:w4,normal_fragment_maps:T4,normal_pars_fragment:A4,normal_pars_vertex:C4,normal_vertex:R4,normalmap_pars_fragment:P4,clearcoat_normal_fragment_begin:b4,clearcoat_normal_fragment_maps:D4,clearcoat_pars_fragment:L4,iridescence_pars_fragment:I4,opaque_fragment:N4,packing:U4,premultiplied_alpha_fragment:F4,project_vertex:z4,dithering_fragment:O4,dithering_pars_fragment:k4,roughnessmap_fragment:B4,roughnessmap_pars_fragment:H4,shadowmap_pars_fragment:V4,shadowmap_pars_vertex:G4,shadowmap_vertex:W4,shadowmask_pars_fragment:$4,skinbase_vertex:j4,skinning_pars_vertex:X4,skinning_vertex:Y4,skinnormal_vertex:q4,specularmap_fragment:K4,specularmap_pars_fragment:Z4,tonemapping_fragment:J4,tonemapping_pars_fragment:Q4,transmission_fragment:ew,transmission_pars_fragment:tw,uv_pars_fragment:nw,uv_pars_vertex:iw,uv_vertex:rw,worldpos_vertex:sw,background_vert:ow,background_frag:aw,backgroundCube_vert:lw,backgroundCube_frag:cw,cube_vert:uw,cube_frag:fw,depth_vert:dw,depth_frag:hw,distanceRGBA_vert:pw,distanceRGBA_frag:mw,equirect_vert:gw,equirect_frag:vw,linedashed_vert:_w,linedashed_frag:xw,meshbasic_vert:yw,meshbasic_frag:Sw,meshlambert_vert:Mw,meshlambert_frag:Ew,meshmatcap_vert:ww,meshmatcap_frag:Tw,meshnormal_vert:Aw,meshnormal_frag:Cw,meshphong_vert:Rw,meshphong_frag:Pw,meshphysical_vert:bw,meshphysical_frag:Dw,meshtoon_vert:Lw,meshtoon_frag:Iw,points_vert:Nw,points_frag:Uw,shadow_vert:Fw,shadow_frag:zw,sprite_vert:Ow,sprite_frag:kw},ce={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},xi={basic:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:rn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:rn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:rn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:rn([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:rn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:rn([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:rn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:rn([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:rn([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:rn([ce.lights,ce.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xi.physical={uniforms:rn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const oc={r:0,b:0,g:0},Gr=new Zi,Bw=new xt;function Hw(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,u,d=null,p=0,h=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const S=g(_);S===null?f(a,l):S&&S.isColor&&(f(S,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===rf)?(u===void 0&&(u=new ui(new Sl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Uo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Gr.copy(v.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(Gr)),u.material.toneMapped=st.getTransfer(S.colorSpace)!==mt,(d!==S||p!==S.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,p=S.version,h=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ui(new af(2,2),new Ji({name:"BackgroundMaterial",uniforms:Uo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,h=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(oc,X2(t)),i.buffers.color.setClear(oc.r,oc.g,oc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m}}function Vw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(y,M,H,B,W){let N=!1;const I=d(B,H,M);s!==I&&(s=I,c(s.object)),N=h(y,B,H,W),N&&g(y,B,H,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,S(y,M,H,B),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,M,H){const B=H.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let N=W[M.id];N===void 0&&(N={},W[M.id]=N);let I=N[B];return I===void 0&&(I=p(l()),N[B]=I),I}function p(y){const M=[],H=[],B=[];for(let W=0;W<n;W++)M[W]=0,H[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:H,attributeDivisors:B,object:y,attributes:{},index:null}}function h(y,M,H,B){const W=s.attributes,N=M.attributes;let I=0;const q=H.getAttributes();for(const L in q)if(q[L].location>=0){const X=W[L];let ne=N[L];if(ne===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),X===void 0||X.attribute!==ne||ne&&X.data!==ne.data)return!0;I++}return s.attributesNum!==I||s.index!==B}function g(y,M,H,B){const W={},N=M.attributes;let I=0;const q=H.getAttributes();for(const L in q)if(q[L].location>=0){let X=N[L];X===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(X=y.instanceColor));const ne={};ne.attribute=X,X&&X.data&&(ne.data=X.data),W[L]=ne,I++}s.attributes=W,s.attributesNum=I,s.index=B}function x(){const y=s.newAttributes;for(let M=0,H=y.length;M<H;M++)y[M]=0}function m(y){f(y,0)}function f(y,M){const H=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;H[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),W[y]!==M&&(t.vertexAttribDivisor(y,M),W[y]=M)}function _(){const y=s.newAttributes,M=s.enabledAttributes;for(let H=0,B=M.length;H<B;H++)M[H]!==y[H]&&(t.disableVertexAttribArray(H),M[H]=0)}function v(y,M,H,B,W,N,I){I===!0?t.vertexAttribIPointer(y,M,H,W,N):t.vertexAttribPointer(y,M,H,B,W,N)}function S(y,M,H,B){x();const W=B.attributes,N=H.getAttributes(),I=M.defaultAttributeValues;for(const q in N){const L=N[q];if(L.location>=0){let Z=W[q];if(Z===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const X=Z.normalized,ne=Z.itemSize,ye=e.get(Z);if(ye===void 0)continue;const Ie=ye.buffer,Y=ye.type,ee=ye.bytesPerElement,le=Y===t.INT||Y===t.UNSIGNED_INT||Z.gpuType===$p;if(Z.isInterleavedBufferAttribute){const ue=Z.data,Ue=ue.stride,V=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let Ne=0;Ne<L.locationSize;Ne++)f(L.location+Ne,ue.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ne=0;Ne<L.locationSize;Ne++)m(L.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let Ne=0;Ne<L.locationSize;Ne++)v(L.location+Ne,ne/L.locationSize,Y,X,Ue*ee,(V+ne/L.locationSize*Ne)*ee,le)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<L.locationSize;ue++)f(L.location+ue,Z.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<L.locationSize;ue++)m(L.location+ue);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let ue=0;ue<L.locationSize;ue++)v(L.location+ue,ne/L.locationSize,Y,X,ne*ee,ne/L.locationSize*ue*ee,le)}}else if(I!==void 0){const X=I[q];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(L.location,X);break;case 3:t.vertexAttrib3fv(L.location,X);break;case 4:t.vertexAttrib4fv(L.location,X);break;default:t.vertexAttrib1fv(L.location,X)}}}}_()}function R(){P();for(const y in i){const M=i[y];for(const H in M){const B=M[H];for(const W in B)u(B[W].object),delete B[W];delete M[H]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const H in M){const B=M[H];for(const W in B)u(B[W].object),delete B[W];delete M[H]}delete i[y.id]}function T(y){for(const M in i){const H=i[M];if(H[y.id]===void 0)continue;const B=H[y.id];for(const W in B)u(B[W].object),delete B[W];delete H[y.id]}}function P(){k(),o=!0,s!==r&&(s=r,c(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:k,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Gw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];n.update(h,i,1)}function l(c,u,d,p){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];for(let x=0;x<p.length;x++)n.update(g,i,p[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ww(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ci&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===_l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ki&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hi&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function $w(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Xr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const h=d.length!==0||p||i!==0||r;return r=p,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){n=u(d,p,0)},this.setState=function(d,p,h){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,v=_*4;let S=f.clippingState||null;l.value=S,S=u(g,p,v,h);for(let R=0;R!==v;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,h,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=h+x*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=h;v!==x;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function jw(t){let e=new WeakMap;function n(o,a){return a===Ud?o.mapping=Do:a===Fd&&(o.mapping=Lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ud||a===Fd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Xw extends Y2{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const oo=4,n1=[.125,.215,.35,.446,.526,.582],Kr=20,u0=new Xw,i1=new je;let f0=null,d0=0,h0=0,p0=!1;const Yr=(1+Math.sqrt(5))/2,ks=1/Yr,r1=[new O(-Yr,ks,0),new O(Yr,ks,0),new O(-ks,0,Yr),new O(ks,0,Yr),new O(0,Yr,-ks),new O(0,Yr,ks),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class s1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){f0=this._renderer.getRenderTarget(),d0=this._renderer.getActiveCubeFace(),h0=this._renderer.getActiveMipmapLevel(),p0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(f0,d0,h0),this._renderer.xr.enabled=p0,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Do||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),f0=this._renderer.getRenderTarget(),d0=this._renderer.getActiveCubeFace(),h0=this._renderer.getActiveMipmapLevel(),p0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:_l,format:ci,colorSpace:Fr,depthBuffer:!1},r=o1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o1(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yw(s)),this._blurMaterial=qw(s,e,n)}return r}_compileMaterial(e){const n=new ui(this._lodPlanes[0],e);this._renderer.compile(n,u0)}_sceneToCubeUV(e,n,i,r){const a=new Bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(i1),u.toneMapping=Rr,u.autoClear=!1;const h=new wu({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new ui(new Sl,h);let x=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,x=!0):(h.color.copy(i1),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;ac(r,_*v,f>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Do||e.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=l1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ui(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ac(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,u0)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=r1[(r-s-1)%r1.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ui(this._lodPlanes[r],c),p=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Kr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Kr;m>Kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);const f=[];let _=0;for(let T=0;T<Kr;++T){const P=T/x,k=Math.exp(-P*P/2);f.push(k),T===0?_+=k:T<m&&(_+=2*k)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-oo?r-v+oo:0),A=4*(this._cubeSize-S);ac(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(d,u0)}}function Yw(t){const e=[],n=[],i=[];let r=t;const s=t-oo+1+n1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-oo?l=n1[o-t+oo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*h),v=new Float32Array(m*g*h),S=new Float32Array(f*g*h);for(let A=0;A<h;A++){const T=A%3*2/3-1,P=A>2?0:-1,k=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];_.set(k,x*g*A),v.set(p,m*g*A);const y=[A,A,A,A,A,A];S.set(y,f*g*A)}const R=new kt;R.setAttribute("position",new an(_,x)),R.setAttribute("uv",new an(v,m)),R.setAttribute("faceIndex",new an(S,f)),e.push(R),r>oo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function o1(t,e,n){const i=new ps(t,e,n);return i.texture.mapping=rf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ac(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qw(t,e,n){const i=new Float32Array(Kr),r=new O(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function a1(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function l1(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function em(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ud||l===Fd,u=l===Do||l===Lo;if(c||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new s1(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new s1(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Zw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Gc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jw(t,e,n,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const x=p.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];const h=s.get(p);h&&(e.remove(h),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)e.update(p[g],t.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const x=h[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const p=[],h=d.index,g=d.attributes.position;let x=0;if(h!==null){const _=h.array;x=h.version;for(let v=0,S=_.length;v<S;v+=3){const R=_[v+0],A=_[v+1],T=_[v+2];p.push(R,A,A,T,T,R)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const R=v+0,A=v+1,T=v+2;p.push(R,A,A,T,T,R)}}else return;const m=new(H2(p)?j2:$2)(p,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const p=s.get(d);if(p){const h=d.index;h!==null&&p.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Qw(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,h){t.drawElements(i,h,s,p*o),n.update(h,i,1)}function c(p,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,p*o,g),n.update(h,i,g))}function u(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,p,0,g);let m=0;for(let f=0;f<g;f++)m+=h[f];n.update(m,i,1)}function d(p,h,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,h[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,p,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=h[_];for(let _=0;_<x.length;_++)n.update(f,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tT(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*A*4*d),P=new G2(T,R,A,d);P.type=Hi,P.needsUpdate=!0;const k=S*4;for(let M=0;M<d;M++){const H=f[M],B=_[M],W=v[M],N=R*A*4*M;for(let I=0;I<H.count;I++){const q=I*k;g===!0&&(r.fromBufferAttribute(H,I),T[N+q+0]=r.x,T[N+q+1]=r.y,T[N+q+2]=r.z,T[N+q+3]=0),x===!0&&(r.fromBufferAttribute(B,I),T[N+q+4]=r.x,T[N+q+5]=r.y,T[N+q+6]=r.z,T[N+q+7]=0),m===!0&&(r.fromBufferAttribute(W,I),T[N+q+8]=r.x,T[N+q+9]=r.y,T[N+q+10]=r.z,T[N+q+11]=W.itemSize===4?r.w:1)}}p={count:d,texture:P,size:new Xe(R,A)},i.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function nT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class J2 extends un{constructor(e,n,i,r,s,o,a,l,c,u=yo){if(u!==yo&&u!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yo&&(i=hs),i===void 0&&u===No&&(i=Io),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Q2=new un,c1=new J2(1,1),ex=new G2,tx=new HM,nx=new q2,u1=[],f1=[],d1=new Float32Array(16),h1=new Float32Array(9),p1=new Float32Array(4);function Xo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=u1[r];if(s===void 0&&(s=new Float32Array(r),u1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lf(t,e){let n=f1[e];n===void 0&&(n=new Int32Array(e),f1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;p1.set(i),t.uniformMatrix2fv(this.addr,!1,p1),Ft(n,i)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;h1.set(i),t.uniformMatrix3fv(this.addr,!1,h1),Ft(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;d1.set(i),t.uniformMatrix4fv(this.addr,!1,d1),Ft(n,i)}}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(c1.compareFunction=B2,s=c1):s=Q2,n.setTexture2D(e||s,r)}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||tx,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||nx,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ex,r)}function MT(t){switch(t){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function ET(t,e){t.uniform1fv(this.addr,e)}function wT(t,e){const n=Xo(e,this.size,2);t.uniform2fv(this.addr,n)}function TT(t,e){const n=Xo(e,this.size,3);t.uniform3fv(this.addr,n)}function AT(t,e){const n=Xo(e,this.size,4);t.uniform4fv(this.addr,n)}function CT(t,e){const n=Xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RT(t,e){const n=Xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PT(t,e){const n=Xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bT(t,e){t.uniform1iv(this.addr,e)}function DT(t,e){t.uniform2iv(this.addr,e)}function LT(t,e){t.uniform3iv(this.addr,e)}function IT(t,e){t.uniform4iv(this.addr,e)}function NT(t,e){t.uniform1uiv(this.addr,e)}function UT(t,e){t.uniform2uiv(this.addr,e)}function FT(t,e){t.uniform3uiv(this.addr,e)}function zT(t,e){t.uniform4uiv(this.addr,e)}function OT(t,e,n){const i=this.cache,r=e.length,s=lf(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Q2,s[o])}function kT(t,e,n){const i=this.cache,r=e.length,s=lf(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||tx,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=lf(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||nx,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=lf(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ex,s[o])}function VT(t){switch(t){case 5126:return ET;case 35664:return wT;case 35665:return TT;case 35666:return AT;case 35674:return CT;case 35675:return RT;case 35676:return PT;case 5124:case 35670:return bT;case 35667:case 35671:return DT;case 35668:case 35672:return LT;case 35669:case 35673:return IT;case 5125:return NT;case 36294:return UT;case 36295:return FT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class GT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MT(n.type)}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VT(n.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const m0=/(\w+)(\])?(\[|\.)?/g;function m1(t,e){t.seq.push(e),t.map[e.id]=e}function jT(t,e,n){const i=t.name,r=i.length;for(m0.lastIndex=0;;){const s=m0.exec(i),o=m0.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){m1(n,c===void 0?new GT(a,t,e):new WT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new $T(a),m1(n,d)),n=d}}}class Wc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);jT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function g1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const XT=37297;let YT=0;function qT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function KT(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===Su&&n===yu?i="LinearDisplayP3ToLinearSRGB":e===yu&&n===Su&&(i="LinearSRGBToLinearDisplayP3"),t){case Fr:case sf:return[i,"LinearTransferOETF"];case _i:case Zp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function v1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qT(t.getShaderSource(e),o)}else return r}function ZT(t,e){const n=KT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function JT(t,e){let n;switch(e){case ZS:n="Linear";break;case JS:n="Reinhard";break;case QS:n="Cineon";break;case eM:n="ACESFilmic";break;case nM:n="AgX";break;case iM:n="Neutral";break;case tM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const lc=new O;function QT(){st.getLuminanceCoefficients(lc);const t=lc.x.toFixed(4),e=lc.y.toFixed(4),n=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e6(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function t6(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function n6(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Sa(t){return t!==""}function _1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i6=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(t){return t.replace(i6,s6)}const r6=new Map;function s6(t,e){let n=Ve[e];if(n===void 0){const i=r6.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dh(n)}const o6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y1(t){return t.replace(o6,a6)}function a6(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function S1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l6(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===C2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function c6(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Do:case Lo:e="ENVMAP_TYPE_CUBE";break;case rf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u6(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Lo:e="ENVMAP_MODE_REFRACTION";break}return e}function f6(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case R2:e="ENVMAP_BLENDING_MULTIPLY";break;case qS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function d6(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function h6(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=l6(n),c=c6(n),u=u6(n),d=f6(n),p=d6(n),h=e6(n),g=t6(s),x=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Sa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Sa).join(`
`),f.length>0&&(f+=`
`)):(m=[S1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),f=[S1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Rr?"#define TONE_MAPPING":"",n.toneMapping!==Rr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Rr?JT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,ZT("linearToOutputTexel",n.outputColorSpace),QT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sa).join(`
`)),o=dh(o),o=_1(o,n),o=x1(o,n),a=dh(a),a=_1(a,n),a=x1(a,n),o=y1(o),a=y1(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+m+o,S=_+f+a,R=g1(r,r.VERTEX_SHADER,v),A=g1(r,r.FRAGMENT_SHADER,S);r.attachShader(x,R),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(M){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(A).trim();let N=!0,I=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,A);else{const q=v1(r,R,"vertex"),L=v1(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+H+`
`+q+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||W==="")&&(I=!1);I&&(M.diagnostics={runnable:N,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(R),r.deleteShader(A),P=new Wc(r,x),k=n6(r,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let k;this.getAttributes=function(){return k===void 0&&T(this),k};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,XT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let p6=0;class m6{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new g6(e),n.set(e,i)),i}}class g6{constructor(e){this.id=p6++,this.code=e,this.usedTimes=0}}function v6(t,e,n,i,r,s,o){const a=new Qp,l=new m6,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,h=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,M,H,B,W){const N=B.fog,I=W.geometry,q=y.isMeshStandardMaterial?B.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||q),Z=L&&L.mapping===rf?L.image.height:null,X=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ye=ne!==void 0?ne.length:0;let Ie=0;I.morphAttributes.position!==void 0&&(Ie=1),I.morphAttributes.normal!==void 0&&(Ie=2),I.morphAttributes.color!==void 0&&(Ie=3);let Y,ee,le,ue;if(X){const pn=xi[X];Y=pn.vertexShader,ee=pn.fragmentShader}else Y=y.vertexShader,ee=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const Ue=t.getRenderTarget(),V=W.isInstancedMesh===!0,Ne=W.isBatchedMesh===!0,Qe=!!y.map,he=!!y.matcap,b=!!L,We=!!y.aoMap,Ce=!!y.lightMap,Le=!!y.bumpMap,Re=!!y.normalMap,oe=!!y.displacementMap,fe=!!y.emissiveMap,C=!!y.metalnessMap,E=!!y.roughnessMap,G=y.anisotropy>0,J=y.clearcoat>0,ie=y.dispersion>0,Q=y.iridescence>0,Pe=y.sheen>0,de=y.transmission>0,Se=G&&!!y.anisotropyMap,et=J&&!!y.clearcoatMap,se=J&&!!y.clearcoatNormalMap,Me=J&&!!y.clearcoatRoughnessMap,ke=Q&&!!y.iridescenceMap,Be=Q&&!!y.iridescenceThicknessMap,Ee=Pe&&!!y.sheenColorMap,Ye=Pe&&!!y.sheenRoughnessMap,He=!!y.specularMap,ut=!!y.specularColorMap,U=!!y.specularIntensityMap,ge=de&&!!y.transmissionMap,K=de&&!!y.thicknessMap,te=!!y.gradientMap,pe=!!y.alphaMap,ve=y.alphaTest>0,Ke=!!y.alphaHash,Pt=!!y.extensions;let hn=Rr;y.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(hn=t.toneMapping);const nt={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:ee,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ne,batchingColor:Ne&&W._colorsTexture!==null,instancing:V,instancingColor:V&&W.instanceColor!==null,instancingMorph:V&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ue===null?t.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Fr,alphaToCoverage:!!y.alphaToCoverage,map:Qe,matcap:he,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:Z,aoMap:We,lightMap:Ce,bumpMap:Le,normalMap:Re,displacementMap:h&&oe,emissiveMap:fe,normalMapObjectSpace:Re&&y.normalMapType===lM,normalMapTangentSpace:Re&&y.normalMapType===aM,metalnessMap:C,roughnessMap:E,anisotropy:G,anisotropyMap:Se,clearcoat:J,clearcoatMap:et,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:ie,iridescence:Q,iridescenceMap:ke,iridescenceThicknessMap:Be,sheen:Pe,sheenColorMap:Ee,sheenRoughnessMap:Ye,specularMap:He,specularColorMap:ut,specularIntensityMap:U,transmission:de,transmissionMap:ge,thicknessMap:K,gradientMap:te,opaque:y.transparent===!1&&y.blending===xo&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:ve,alphaHash:Ke,combine:y.combine,mapUv:Qe&&m(y.map.channel),aoMapUv:We&&m(y.aoMap.channel),lightMapUv:Ce&&m(y.lightMap.channel),bumpMapUv:Le&&m(y.bumpMap.channel),normalMapUv:Re&&m(y.normalMap.channel),displacementMapUv:oe&&m(y.displacementMap.channel),emissiveMapUv:fe&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:Se&&m(y.anisotropyMap.channel),clearcoatMapUv:et&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(y.sheenRoughnessMap.channel),specularMapUv:He&&m(y.specularMap.channel),specularColorMapUv:ut&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:ge&&m(y.transmissionMap.channel),thicknessMapUv:K&&m(y.thicknessMap.channel),alphaMapUv:pe&&m(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Re||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!I.attributes.uv&&(Qe||pe),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:W.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:hn,decodeVideoTexture:Qe&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Si,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&y.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function _(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)M.push(H),M.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const M=x[y.type];let H;if(M){const B=xi[M];H=QM.clone(B.uniforms)}else H=y.uniforms;return H}function A(y,M){let H;for(let B=0,W=u.length;B<W;B++){const N=u[B];if(N.cacheKey===M){H=N,++H.usedTimes;break}}return H===void 0&&(H=new h6(t,M,y,s),u.push(H)),H}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:k}}function _6(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function x6(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function M1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function E1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,p,h,g,x,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:h,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=h,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,p,h,g,x,m){const f=o(d,p,h,g,x,m);h.transmission>0?i.push(f):h.transparent===!0?r.push(f):n.push(f)}function l(d,p,h,g,x,m){const f=o(d,p,h,g,x,m);h.transmission>0?i.unshift(f):h.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,p){n.length>1&&n.sort(d||x6),i.length>1&&i.sort(p||M1),r.length>1&&r.sort(p||M1)}function u(){for(let d=e,p=t.length;d<p;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function y6(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new E1,t.set(i,[o])):r>=s.length?(o=new E1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function S6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new je};break;case"SpotLight":n={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function M6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let E6=0;function w6(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function T6(t){const e=new S6,n=M6(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new xt,o=new xt;function a(c){let u=0,d=0,p=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let h=0,g=0,x=0,m=0,f=0,_=0,v=0,S=0,R=0,A=0,T=0;c.sort(w6);for(let k=0,y=c.length;k<y;k++){const M=c[k],H=M.color,B=M.intensity,W=M.distance,N=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=H.r*B,d+=H.g*B,p+=H.b*B;else if(M.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(M.sh.coefficients[I],B);T++}else if(M.isDirectionalLight){const I=e.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const q=M.shadow,L=n.get(M);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.directionalShadow[h]=L,i.directionalShadowMap[h]=N,i.directionalShadowMatrix[h]=M.shadow.matrix,_++}i.directional[h]=I,h++}else if(M.isSpotLight){const I=e.get(M);I.position.setFromMatrixPosition(M.matrixWorld),I.color.copy(H).multiplyScalar(B),I.distance=W,I.coneCos=Math.cos(M.angle),I.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),I.decay=M.decay,i.spot[x]=I;const q=M.shadow;if(M.map&&(i.spotLightMap[R]=M.map,R++,q.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[x]=q.matrix,M.castShadow){const L=n.get(M);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=N,S++}x++}else if(M.isRectAreaLight){const I=e.get(M);I.color.copy(H).multiplyScalar(B),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=I,m++}else if(M.isPointLight){const I=e.get(M);if(I.color.copy(M.color).multiplyScalar(M.intensity),I.distance=M.distance,I.decay=M.decay,M.castShadow){const q=M.shadow,L=n.get(M);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,L.shadowCameraNear=q.camera.near,L.shadowCameraFar=q.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=M.shadow.matrix,v++}i.point[g]=I,g++}else if(M.isHemisphereLight){const I=e.get(M);I.skyColor.copy(M.color).multiplyScalar(B),I.groundColor.copy(M.groundColor).multiplyScalar(B),i.hemi[f]=I,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const P=i.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=h,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=T,i.version=E6++)}function l(c,u){let d=0,p=0,h=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const v=c[f];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function w1(t){const e=new T6(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function A6(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new w1(t),e.set(r,[a])):s>=o.length?(a=new w1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class C6 extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R6 extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const P6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D6(t,e,n){let i=new K2;const r=new Xe,s=new Xe,o=new Rt,a=new C6({depthPacking:oM}),l=new R6,c={},u=n.maxTextureSize,d={[Dr]:cn,[cn]:Dr,[Si]:Si},p=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:P6,fragmentShader:b6}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ui(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C2;let f=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const k=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Cr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=f!==Li&&this.type===Li,W=f===Li&&this.type!==Li;for(let N=0,I=A.length;N<I;N++){const q=A[N],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Z=L.getFrameExtents();if(r.multiply(Z),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,L.mapSize.y=s.y)),L.map===null||B===!0||W===!0){const ne=this.type!==Li?{minFilter:Wn,magFilter:Wn}:{};L.map!==null&&L.map.dispose(),L.map=new ps(r.x,r.y,ne),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const X=L.getViewportCount();for(let ne=0;ne<X;ne++){const ye=L.getViewport(ne);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),H.viewport(o),L.updateMatrices(q,ne),i=L.getFrustum(),S(T,P,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===Li&&_(L,P),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(k,y,M)};function _(A,T){const P=e.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ps(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,p,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,h,x,null)}function v(A,T,P,k){let y=null;const M=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)y=M;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=y.uuid,B=T.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let N=W[B];N===void 0&&(N=y.clone(),W[B]=N,T.addEventListener("dispose",R)),y=N}if(y.visible=T.visible,y.wireframe=T.wireframe,k===Li?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=t.properties.get(y);H.light=P}return y}function S(A,T,P,k,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Li)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const N=B.groups;for(let I=0,q=N.length;I<q;I++){const L=N[I],Z=W[L.materialIndex];if(Z&&Z.visible){const X=v(A,Z,k,y);A.onBeforeShadow(t,A,T,P,B,X,L),t.renderBufferDirect(P,null,B,X,A,L),A.onAfterShadow(t,A,T,P,B,X,L)}}}else if(W.visible){const N=v(A,W,k,y);A.onBeforeShadow(t,A,T,P,B,N,null),t.renderBufferDirect(P,null,B,N,A,null),A.onAfterShadow(t,A,T,P,B,N,null)}}const H=A.children;for(let B=0,W=H.length;B<W;B++)S(H[B],T,P,k,y)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const k=c[P],y=A.target.uuid;y in k&&(k[y].dispose(),delete k[y])}}}const L6={[Rd]:Pd,[bd]:Id,[Dd]:Nd,[bo]:Ld,[Pd]:Rd,[Id]:bd,[Nd]:Dd,[Ld]:bo};function I6(t){function e(){let U=!1;const ge=new Rt;let K=null;const te=new Rt(0,0,0,0);return{setMask:function(pe){K!==pe&&!U&&(t.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){U=pe},setClear:function(pe,ve,Ke,Pt,hn){hn===!0&&(pe*=Pt,ve*=Pt,Ke*=Pt),ge.set(pe,ve,Ke,Pt),te.equals(ge)===!1&&(t.clearColor(pe,ve,Ke,Pt),te.copy(ge))},reset:function(){U=!1,K=null,te.set(-1,0,0,0)}}}function n(){let U=!1,ge=!1,K=null,te=null,pe=null;return{setReversed:function(ve){ge=ve},setTest:function(ve){ve?le(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ve){K!==ve&&!U&&(t.depthMask(ve),K=ve)},setFunc:function(ve){if(ge&&(ve=L6[ve]),te!==ve){switch(ve){case Rd:t.depthFunc(t.NEVER);break;case Pd:t.depthFunc(t.ALWAYS);break;case bd:t.depthFunc(t.LESS);break;case bo:t.depthFunc(t.LEQUAL);break;case Dd:t.depthFunc(t.EQUAL);break;case Ld:t.depthFunc(t.GEQUAL);break;case Id:t.depthFunc(t.GREATER);break;case Nd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ve}},setLocked:function(ve){U=ve},setClear:function(ve){pe!==ve&&(t.clearDepth(ve),pe=ve)},reset:function(){U=!1,K=null,te=null,pe=null}}}function i(){let U=!1,ge=null,K=null,te=null,pe=null,ve=null,Ke=null,Pt=null,hn=null;return{setTest:function(nt){U||(nt?le(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!U&&(t.stencilMask(nt),ge=nt)},setFunc:function(nt,pn,Ai){(K!==nt||te!==pn||pe!==Ai)&&(t.stencilFunc(nt,pn,Ai),K=nt,te=pn,pe=Ai)},setOp:function(nt,pn,Ai){(ve!==nt||Ke!==pn||Pt!==Ai)&&(t.stencilOp(nt,pn,Ai),ve=nt,Ke=pn,Pt=Ai)},setLocked:function(nt){U=nt},setClear:function(nt){hn!==nt&&(t.clearStencil(nt),hn=nt)},reset:function(){U=!1,ge=null,K=null,te=null,pe=null,ve=null,Ke=null,Pt=null,hn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,p=[],h=null,g=!1,x=null,m=null,f=null,_=null,v=null,S=null,R=null,A=new je(0,0,0),T=0,P=!1,k=null,y=null,M=null,H=null,B=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(q)[1]),N=I>=1):q.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),N=I>=2);let L=null,Z={};const X=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ye=new Rt().fromArray(X),Ie=new Rt().fromArray(ne);function Y(U,ge,K,te){const pe=new Uint8Array(4),ve=t.createTexture();t.bindTexture(U,ve),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<K;Ke++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ge+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ve}const ee={};ee[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(bo),Ce(!1),Le(Dg),le(t.CULL_FACE),b(Cr);function le(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function ue(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Ue(U,ge){return u[U]!==ge?(t.bindFramebuffer(U,ge),u[U]=ge,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ge),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function V(U,ge){let K=p,te=!1;if(U){K=d.get(ge),K===void 0&&(K=[],d.set(ge,K));const pe=U.textures;if(K.length!==pe.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ke=pe.length;ve<Ke;ve++)K[ve]=t.COLOR_ATTACHMENT0+ve;K.length=pe.length,te=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,te=!0);te&&t.drawBuffers(K)}function Ne(U){return h!==U?(t.useProgram(U),h=U,!0):!1}const Qe={[qr]:t.FUNC_ADD,[LS]:t.FUNC_SUBTRACT,[IS]:t.FUNC_REVERSE_SUBTRACT};Qe[NS]=t.MIN,Qe[US]=t.MAX;const he={[FS]:t.ZERO,[zS]:t.ONE,[OS]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[WS]:t.SRC_ALPHA_SATURATE,[VS]:t.DST_COLOR,[BS]:t.DST_ALPHA,[kS]:t.ONE_MINUS_SRC_COLOR,[Cd]:t.ONE_MINUS_SRC_ALPHA,[GS]:t.ONE_MINUS_DST_COLOR,[HS]:t.ONE_MINUS_DST_ALPHA,[$S]:t.CONSTANT_COLOR,[jS]:t.ONE_MINUS_CONSTANT_COLOR,[XS]:t.CONSTANT_ALPHA,[YS]:t.ONE_MINUS_CONSTANT_ALPHA};function b(U,ge,K,te,pe,ve,Ke,Pt,hn,nt){if(U===Cr){g===!0&&(ue(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),U!==DS){if(U!==x||nt!==P){if((m!==qr||v!==qr)&&(t.blendEquation(t.FUNC_ADD),m=qr,v=qr),nt)switch(U){case xo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.ONE,t.ONE);break;case Ig:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ng:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ig:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ng:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,_=null,S=null,R=null,A.set(0,0,0),T=0,x=U,P=nt}return}pe=pe||ge,ve=ve||K,Ke=Ke||te,(ge!==m||pe!==v)&&(t.blendEquationSeparate(Qe[ge],Qe[pe]),m=ge,v=pe),(K!==f||te!==_||ve!==S||Ke!==R)&&(t.blendFuncSeparate(he[K],he[te],he[ve],he[Ke]),f=K,_=te,S=ve,R=Ke),(Pt.equals(A)===!1||hn!==T)&&(t.blendColor(Pt.r,Pt.g,Pt.b,hn),A.copy(Pt),T=hn),x=U,P=!1}function We(U,ge){U.side===Si?ue(t.CULL_FACE):le(t.CULL_FACE);let K=U.side===cn;ge&&(K=!K),Ce(K),U.blending===xo&&U.transparent===!1?b(Cr):b(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const te=U.stencilWrite;o.setTest(te),te&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(U){k!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),k=U)}function Le(U){U!==RS?(le(t.CULL_FACE),U!==y&&(U===Dg?t.cullFace(t.BACK):U===PS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),y=U}function Re(U){U!==M&&(N&&t.lineWidth(U),M=U)}function oe(U,ge,K){U?(le(t.POLYGON_OFFSET_FILL),(H!==ge||B!==K)&&(t.polygonOffset(ge,K),H=ge,B=K)):ue(t.POLYGON_OFFSET_FILL)}function fe(U){U?le(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function C(U){U===void 0&&(U=t.TEXTURE0+W-1),L!==U&&(t.activeTexture(U),L=U)}function E(U,ge,K){K===void 0&&(L===null?K=t.TEXTURE0+W-1:K=L);let te=Z[K];te===void 0&&(te={type:void 0,texture:void 0},Z[K]=te),(te.type!==U||te.texture!==ge)&&(L!==K&&(t.activeTexture(K),L=K),t.bindTexture(U,ge||ee[U]),te.type=U,te.texture=ge)}function G(){const U=Z[L];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(U){ye.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ye.copy(U))}function Ee(U){Ie.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function Ye(U,ge){let K=l.get(ge);K===void 0&&(K=new WeakMap,l.set(ge,K));let te=K.get(U);te===void 0&&(te=t.getUniformBlockIndex(ge,U.name),K.set(U,te))}function He(U,ge){const te=l.get(ge).get(U);a.get(ge)!==te&&(t.uniformBlockBinding(ge,te,U.__bindingPointIndex),a.set(ge,te))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,Z={},u={},d=new WeakMap,p=[],h=null,g=!1,x=null,m=null,f=null,_=null,v=null,S=null,R=null,A=new je(0,0,0),T=0,P=!1,k=null,y=null,M=null,H=null,B=null,ye.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ue,bindFramebuffer:Ue,drawBuffers:V,useProgram:Ne,setBlending:b,setMaterial:We,setFlipSided:Ce,setCullFace:Le,setLineWidth:Re,setPolygonOffset:oe,setScissorTest:fe,activeTexture:C,bindTexture:E,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:Me,texImage3D:ke,updateUBOMapping:Ye,uniformBlockBinding:He,texStorage2D:et,texStorage3D:se,texSubImage2D:Q,texSubImage3D:Pe,compressedTexSubImage2D:de,compressedTexSubImage3D:Se,scissor:Be,viewport:Ee,reset:ut}}function T1(t,e,n,i){const r=N6(i);switch(n){case I2:return t*e;case U2:return t*e;case F2:return t*e*2;case z2:return t*e/r.components*r.byteLength;case Yp:return t*e/r.components*r.byteLength;case O2:return t*e*2/r.components*r.byteLength;case qp:return t*e*2/r.components*r.byteLength;case N2:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case Kp:return t*e*4/r.components*r.byteLength;case Oc:case kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Vd:return Math.max(t,16)*Math.max(e,8)/4;case kd:case Hd:return Math.max(t,8)*Math.max(e,8)/2;case Gd:case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vc:case oh:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*16;case k2:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ch:case uh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function N6(t){switch(t){case Ki:case b2:return{byteLength:1,components:1};case rl:case D2:case _l:return{byteLength:2,components:1};case jp:case Xp:return{byteLength:2,components:4};case hs:case $p:case Hi:return{byteLength:4,components:1};case L2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function U6(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let d;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return h?new OffscreenCanvas(C,E):Eu("canvas")}function x(C,E,G){let J=1;const ie=fe(C);if((ie.width>G||ie.height>G)&&(J=G/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(J*ie.width),Pe=Math.floor(J*ie.height);d===void 0&&(d=g(Q,Pe));const de=E?g(Q,Pe):d;return de.width=Q,de.height=Pe,de.getContext("2d").drawImage(C,0,0,Q,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Pe+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Wn&&C.minFilter!==ai}function f(C){t.generateMipmap(C)}function _(C,E,G,J,ie=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=E;if(E===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),E===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),G===t.UNSIGNED_INT&&(Q=t.RGB32UI),G===t.BYTE&&(Q=t.RGB8I),G===t.SHORT&&(Q=t.RGB16I),G===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),G===t.UNSIGNED_INT&&(Q=t.RGBA32UI),G===t.BYTE&&(Q=t.RGBA8I),G===t.SHORT&&(Q=t.RGBA16I),G===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),E===t.RGBA){const Pe=ie?xu:st.getTransfer(J);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=Pe===mt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(C,E){let G;return C?E===null||E===hs||E===Io?G=t.DEPTH24_STENCIL8:E===Hi?G=t.DEPTH32F_STENCIL8:E===rl&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hs||E===Io?G=t.DEPTH_COMPONENT24:E===Hi?G=t.DEPTH_COMPONENT32F:E===rl&&(G=t.DEPTH_COMPONENT16),G}function S(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wn&&C.minFilter!==ai?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function R(C){const E=C.target;E.removeEventListener("dispose",R),T(E),E.isVideoTexture&&u.delete(E)}function A(C){const E=C.target;E.removeEventListener("dispose",A),k(E)}function T(C){const E=i.get(C);if(E.__webglInit===void 0)return;const G=C.source,J=p.get(G);if(J){const ie=J[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(C),Object.keys(J).length===0&&p.delete(G)}i.remove(C)}function P(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const G=C.source,J=p.get(G);delete J[E.__cacheKey],o.memory.textures--}function k(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ie=0;ie<E.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=C.textures;for(let J=0,ie=G.length;J<ie;J++){const Q=i.get(G[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[J])}i.remove(C)}let y=0;function M(){y=0}function H(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function B(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function W(C,E){const G=i.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(G,C,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function N(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Ie(G,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function I(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Ie(G,C,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function q(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const L={[zd]:t.REPEAT,[ts]:t.CLAMP_TO_EDGE,[Od]:t.MIRRORED_REPEAT},Z={[Wn]:t.NEAREST,[rM]:t.NEAREST_MIPMAP_NEAREST,[Vl]:t.NEAREST_MIPMAP_LINEAR,[ai]:t.LINEAR,[Vf]:t.LINEAR_MIPMAP_NEAREST,[ns]:t.LINEAR_MIPMAP_LINEAR},X={[cM]:t.NEVER,[mM]:t.ALWAYS,[uM]:t.LESS,[B2]:t.LEQUAL,[fM]:t.EQUAL,[pM]:t.GEQUAL,[dM]:t.GREATER,[hM]:t.NOTEQUAL};function ne(C,E){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ai||E.magFilter===Vf||E.magFilter===Vl||E.magFilter===ns||E.minFilter===ai||E.minFilter===Vf||E.minFilter===Vl||E.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,X[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wn||E.minFilter!==Vl&&E.minFilter!==ns||E.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ye(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",R));const J=E.source;let ie=p.get(J);ie===void 0&&(ie={},p.set(J,ie));const Q=B(E);if(Q!==C.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Q].usedTimes++;const Pe=ie[C.__cacheKey];Pe!==void 0&&(ie[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&P(E)),C.__cacheKey=Q,C.__webglTexture=ie[Q].texture}return G}function Ie(C,E,G){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const ie=ye(C,E),Q=E.source;n.bindTexture(J,C.__webglTexture,t.TEXTURE0+G);const Pe=i.get(Q);if(Q.version!==Pe.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const de=st.getPrimaries(st.workingColorSpace),Se=E.colorSpace===mr?null:st.getPrimaries(E.colorSpace),et=E.colorSpace===mr||de===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let se=x(E.image,!1,r.maxTextureSize);se=oe(E,se);const Me=s.convert(E.format,E.colorSpace),ke=s.convert(E.type);let Be=_(E.internalFormat,Me,ke,E.colorSpace,E.isVideoTexture);ne(J,E);let Ee;const Ye=E.mipmaps,He=E.isVideoTexture!==!0,ut=Pe.__version===void 0||ie===!0,U=Q.dataReady,ge=S(E,se);if(E.isDepthTexture)Be=v(E.format===No,E.type),ut&&(He?n.texStorage2D(t.TEXTURE_2D,1,Be,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Be,se.width,se.height,0,Me,ke,null));else if(E.isDataTexture)if(Ye.length>0){He&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,Be,Ye[0].width,Ye[0].height);for(let K=0,te=Ye.length;K<te;K++)Ee=Ye[K],He?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Me,ke,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Be,Ee.width,Ee.height,0,Me,ke,Ee.data);E.generateMipmaps=!1}else He?(ut&&n.texStorage2D(t.TEXTURE_2D,ge,Be,se.width,se.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Me,ke,se.data)):n.texImage2D(t.TEXTURE_2D,0,Be,se.width,se.height,0,Me,ke,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Be,Ye[0].width,Ye[0].height,se.depth);for(let K=0,te=Ye.length;K<te;K++)if(Ee=Ye[K],E.format!==ci)if(Me!==null)if(He){if(U)if(E.layerUpdates.size>0){const pe=T1(Ee.width,Ee.height,E.format,E.type);for(const ve of E.layerUpdates){const Ke=Ee.data.subarray(ve*pe/Ee.data.BYTES_PER_ELEMENT,(ve+1)*pe/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,ve,Ee.width,Ee.height,1,Me,Ke,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,se.depth,Me,Ee.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Be,Ee.width,Ee.height,se.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,se.depth,Me,ke,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Be,Ee.width,Ee.height,se.depth,0,Me,ke,Ee.data)}else{He&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,Be,Ye[0].width,Ye[0].height);for(let K=0,te=Ye.length;K<te;K++)Ee=Ye[K],E.format!==ci?Me!==null?He?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Me,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Me,ke,Ee.data):n.texImage2D(t.TEXTURE_2D,K,Be,Ee.width,Ee.height,0,Me,ke,Ee.data)}else if(E.isDataArrayTexture)if(He){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Be,se.width,se.height,se.depth),U)if(E.layerUpdates.size>0){const K=T1(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const pe=se.data.subarray(te*K/se.data.BYTES_PER_ELEMENT,(te+1)*K/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,Me,ke,pe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,ke,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,se.width,se.height,se.depth,0,Me,ke,se.data);else if(E.isData3DTexture)He?(ut&&n.texStorage3D(t.TEXTURE_3D,ge,Be,se.width,se.height,se.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,ke,se.data)):n.texImage3D(t.TEXTURE_3D,0,Be,se.width,se.height,se.depth,0,Me,ke,se.data);else if(E.isFramebufferTexture){if(ut)if(He)n.texStorage2D(t.TEXTURE_2D,ge,Be,se.width,se.height);else{let K=se.width,te=se.height;for(let pe=0;pe<ge;pe++)n.texImage2D(t.TEXTURE_2D,pe,Be,K,te,0,Me,ke,null),K>>=1,te>>=1}}else if(Ye.length>0){if(He&&ut){const K=fe(Ye[0]);n.texStorage2D(t.TEXTURE_2D,ge,Be,K.width,K.height)}for(let K=0,te=Ye.length;K<te;K++)Ee=Ye[K],He?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me,ke,Ee):n.texImage2D(t.TEXTURE_2D,K,Be,Me,ke,Ee);E.generateMipmaps=!1}else if(He){if(ut){const K=fe(se);n.texStorage2D(t.TEXTURE_2D,ge,Be,K.width,K.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,ke,se)}else n.texImage2D(t.TEXTURE_2D,0,Be,Me,ke,se);m(E)&&f(J),Pe.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Y(C,E,G){if(E.image.length!==6)return;const J=ye(C,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const Q=i.get(ie);if(ie.version!==Q.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const Pe=st.getPrimaries(st.workingColorSpace),de=E.colorSpace===mr?null:st.getPrimaries(E.colorSpace),Se=E.colorSpace===mr||Pe===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!et&&!se?Me[te]=x(E.image[te],!0,r.maxCubemapSize):Me[te]=se?E.image[te].image:E.image[te],Me[te]=oe(E,Me[te]);const ke=Me[0],Be=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),Ye=_(E.internalFormat,Be,Ee,E.colorSpace),He=E.isVideoTexture!==!0,ut=Q.__version===void 0||J===!0,U=ie.dataReady;let ge=S(E,ke);ne(t.TEXTURE_CUBE_MAP,E);let K;if(et){He&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ye,ke.width,ke.height);for(let te=0;te<6;te++){K=Me[te].mipmaps;for(let pe=0;pe<K.length;pe++){const ve=K[pe];E.format!==ci?Be!==null?He?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,ve.width,ve.height,Be,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,ve.width,ve.height,Be,Ee,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Ye,ve.width,ve.height,0,Be,Ee,ve.data)}}}else{if(K=E.mipmaps,He&&ut){K.length>0&&ge++;const te=fe(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ye,te.width,te.height)}for(let te=0;te<6;te++)if(se){He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,Be,Ee,Me[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,Me[te].width,Me[te].height,0,Be,Ee,Me[te].data);for(let pe=0;pe<K.length;pe++){const Ke=K[pe].image[te].image;He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ke.width,Ke.height,Be,Ee,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Ye,Ke.width,Ke.height,0,Be,Ee,Ke.data)}}else{He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Be,Ee,Me[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,Be,Ee,Me[te]);for(let pe=0;pe<K.length;pe++){const ve=K[pe];He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Be,Ee,ve.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Ye,Be,Ee,ve.image[te])}}}m(E)&&f(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ee(C,E,G,J,ie,Q){const Pe=s.convert(G.format,G.colorSpace),de=s.convert(G.type),Se=_(G.internalFormat,Pe,de,G.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>Q),Me=Math.max(1,E.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Q,Se,se,Me,E.depth,0,Pe,de,null):n.texImage2D(ie,Q,Se,se,Me,0,Pe,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Le(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ie,i.get(G).__webglTexture,0,Ce(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ie,i.get(G).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(C,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const J=E.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Q=v(E.stencilBuffer,ie),Pe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Ce(E);Le(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Q,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,C)}else{const J=E.textures;for(let ie=0;ie<J.length;ie++){const Q=J[ie],Pe=s.convert(Q.format,Q.colorSpace),de=s.convert(Q.type),Se=_(Q.internalFormat,Pe,de,Q.colorSpace),et=Ce(E);G&&Le(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,et,Se,E.width,E.height):Le(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,Se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Se,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,ie=Ce(E);if(E.depthTexture.format===yo)Le(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===No)Le(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ue(C){const E=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=J}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ue(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=t.createRenderbuffer(),le(E.__webglDepthbuffer[J],C,!1);else{const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(C,E,G){const J=i.get(C);E!==void 0&&ee(J.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ue(C)}function Ne(C){const E=C.texture,G=i.get(C),J=i.get(E);C.addEventListener("dispose",A);const ie=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let Se=0;Se<E.mipmaps.length;Se++)G.__webglFramebuffer[de][Se]=t.createFramebuffer()}else G.__webglFramebuffer[de]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)G.__webglFramebuffer[de]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let de=0,Se=ie.length;de<Se;de++){const et=i.get(ie[de]);et.__webglTexture===void 0&&(et.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Le(C)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const Se=ie[de];G.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const et=s.convert(Se.format,Se.colorSpace),se=s.convert(Se.type),Me=_(Se.internalFormat,et,se,Se.colorSpace,C.isXRRenderTarget===!0),ke=Ce(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Me,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,G.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),le(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ne(t.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ee(G.__webglFramebuffer[de][Se],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else ee(G.__webglFramebuffer[de],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let de=0,Se=ie.length;de<Se;de++){const et=ie[de],se=i.get(et);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ne(t.TEXTURE_2D,et),ee(G.__webglFramebuffer,C,et,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(et)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,J.__webglTexture),ne(de,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)ee(G.__webglFramebuffer[Se],C,E,t.COLOR_ATTACHMENT0,de,Se);else ee(G.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,de,0);m(E)&&f(de),n.unbindTexture()}C.depthBuffer&&Ue(C)}function Qe(C){const E=C.textures;for(let G=0,J=E.length;G<J;G++){const ie=E[G];if(m(ie)){const Q=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Pe=i.get(ie).__webglTexture;n.bindTexture(Q,Pe),f(Q),n.unbindTexture()}}}const he=[],b=[];function We(C){if(C.samples>0){if(Le(C)===!1){const E=C.textures,G=C.width,J=C.height;let ie=t.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(C),de=E.length>1;if(de)for(let Se=0;Se<E.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Se]);const et=i.get(E[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,et,0)}t.blitFramebuffer(0,0,G,J,0,0,G,J,ie,t.NEAREST),l===!0&&(he.length=0,b.length=0,he.push(t.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(he.push(Q),b.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Se=0;Se<E.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Se]);const et=i.get(E[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,et,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ce(C){return Math.min(r.maxSamples,C.samples)}function Le(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function oe(C,E){const G=C.colorSpace,J=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Fr&&G!==mr&&(st.getTransfer(G)===mt?(J!==ci||ie!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=M,this.setTexture2D=W,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=q,this.rebindTextures=V,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Le}function F6(t,e){function n(i,r=mr){let s;const o=st.getTransfer(r);if(i===Ki)return t.UNSIGNED_BYTE;if(i===jp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===L2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===b2)return t.BYTE;if(i===D2)return t.SHORT;if(i===rl)return t.UNSIGNED_SHORT;if(i===$p)return t.INT;if(i===hs)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===_l)return t.HALF_FLOAT;if(i===I2)return t.ALPHA;if(i===N2)return t.RGB;if(i===ci)return t.RGBA;if(i===U2)return t.LUMINANCE;if(i===F2)return t.LUMINANCE_ALPHA;if(i===yo)return t.DEPTH_COMPONENT;if(i===No)return t.DEPTH_STENCIL;if(i===z2)return t.RED;if(i===Yp)return t.RED_INTEGER;if(i===O2)return t.RG;if(i===qp)return t.RG_INTEGER;if(i===Kp)return t.RGBA_INTEGER;if(i===Oc||i===kc||i===Bc||i===Hc)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kd||i===Bd||i===Hd||i===Vd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gd||i===Wd||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gd||i===Wd)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$d)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jd||i===Xd||i===Yd||i===qd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===th)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ih)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vc||i===oh||i===ah)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vc)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ah)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===k2||i===lh||i===ch||i===uh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ch)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class z6 extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class is extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O6={type:"move"};class g0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&p>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O6)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new is;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const k6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B6=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:k6,fragmentShader:B6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ui(new af(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V6 extends jo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,h=null,g=null;const x=new H6,m=n.getContextAttributes();let f=null,_=null;const v=[],S=[],R=new Xe;let A=null;const T=new Bn;T.layers.enable(1),T.viewport=new Rt;const P=new Bn;P.layers.enable(2),P.viewport=new Rt;const k=[T,P],y=new z6;y.layers.enable(1),y.layers.enable(2);let M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=v[Y];return ee===void 0&&(ee=new g0,v[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=v[Y];return ee===void 0&&(ee=new g0,v[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=v[Y];return ee===void 0&&(ee=new g0,v[Y]=ee),ee.getHandSpace()};function B(Y){const ee=S.indexOf(Y.inputSource);if(ee===-1)return;const le=v[ee];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||o),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",N);for(let Y=0;Y<v.length;Y++){const ee=S[Y];ee!==null&&(S[Y]=null,v[Y].disconnect(ee))}M=null,H=null,x.reset(),e.setRenderTarget(f),h=null,p=null,d=null,r=null,_=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new ps(h.framebufferWidth,h.framebufferHeight,{format:ci,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,le=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=m.stencil?No:yo,le=m.stencil?Io:hs);const Ue={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,n),p=d.createProjectionLayer(Ue),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new ps(p.textureWidth,p.textureHeight,{format:ci,type:Ki,depthTexture:new J2(p.textureWidth,p.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(Y){for(let ee=0;ee<Y.removed.length;ee++){const le=Y.removed[ee],ue=S.indexOf(le);ue>=0&&(S[ue]=null,v[ue].disconnect(le))}for(let ee=0;ee<Y.added.length;ee++){const le=Y.added[ee];let ue=S.indexOf(le);if(ue===-1){for(let V=0;V<v.length;V++)if(V>=S.length){S.push(le),ue=V;break}else if(S[V]===null){S[V]=le,ue=V;break}if(ue===-1)break}const Ue=v[ue];Ue&&Ue.connect(le)}}const I=new O,q=new O;function L(Y,ee,le){I.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const ue=I.distanceTo(q),Ue=ee.projectionMatrix.elements,V=le.projectionMatrix.elements,Ne=Ue[14]/(Ue[10]-1),Qe=Ue[14]/(Ue[10]+1),he=(Ue[9]+1)/Ue[5],b=(Ue[9]-1)/Ue[5],We=(Ue[8]-1)/Ue[0],Ce=(V[8]+1)/V[0],Le=Ne*We,Re=Ne*Ce,oe=ue/(-We+Ce),fe=oe*-We;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(fe),Y.translateZ(oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ue[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const C=Ne+oe,E=Qe+oe,G=Le-fe,J=Re+(ue-fe),ie=he*Qe/E*C,Q=b*Qe/E*C;Y.projectionMatrix.makePerspective(G,J,ie,Q,C,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Z(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,le=Y.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(le=x.depthFar)),y.near=P.near=T.near=ee,y.far=P.far=T.far=le,(M!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,H=y.far);const ue=Y.parent,Ue=y.cameras;Z(y,ue);for(let V=0;V<Ue.length;V++)Z(Ue[V],ue);Ue.length===2?L(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),X(Y,y,ue)};function X(Y,ee,le){le===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=sl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ne=null;function ye(Y,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const le=u.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let ue=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let V=0;V<le.length;V++){const Ne=le[V];let Qe=null;if(h!==null)Qe=h.getViewport(Ne);else{const b=d.getViewSubImage(p,Ne);Qe=b.viewport,V===0&&(e.setRenderTargetTextures(_,b.colorTexture,p.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let he=k[V];he===void 0&&(he=new Bn,he.layers.enable(V),he.viewport=new Rt,k[V]=he),he.matrix.fromArray(Ne.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Ne.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),V===0&&(y.matrix.copy(he.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(he)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const V=d.getDepthInformation(le[0]);V&&V.isValid&&V.texture&&x.init(e,V,r.renderState)}}for(let le=0;le<v.length;le++){const ue=S[le],Ue=v[le];ue!==null&&Ue!==void 0&&Ue.update(ue,ee,c||o)}ne&&ne(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ie=new Z2;Ie.setAnimationLoop(ye),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const Wr=new Zi,G6=new xt;function W6(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,X2(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&h(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),v=_.envMap,S=_.envMapRotation;v&&(m.envMap.value=v,Wr.copy(S),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),m.envMapRotation.value.setFromMatrix4(G6.makeRotationFromEuler(Wr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $6(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(g(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(_,R);const A=e.render.frame;s[_.id]!==A&&(p(_),s[_.id]=A)}function u(_){const v=d();_.__bindingPointIndex=v;const S=t.createBuffer(),R=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const v=r[_.id],S=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let k=0,y=P.length;k<y;k++){const M=P[k];if(h(M,A,k,R)===!0){const H=M.__offset,B=Array.isArray(M.value)?M.value:[M.value];let W=0;for(let N=0;N<B.length;N++){const I=B[N],q=x(I);typeof I=="number"||typeof I=="boolean"?(M.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,H+W,M.__data)):I.isMatrix3?(M.__data[0]=I.elements[0],M.__data[1]=I.elements[1],M.__data[2]=I.elements[2],M.__data[3]=0,M.__data[4]=I.elements[3],M.__data[5]=I.elements[4],M.__data[6]=I.elements[5],M.__data[7]=0,M.__data[8]=I.elements[6],M.__data[9]=I.elements[7],M.__data[10]=I.elements[8],M.__data[11]=0):(I.toArray(M.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(_,v,S,R){const A=_.value,T=v+"_"+S;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const P=R[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(_){const v=_.uniforms;let S=0;const R=16;for(let T=0,P=v.length;T<P;T++){const k=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,M=k.length;y<M;y++){const H=k[y],B=Array.isArray(H.value)?H.value:[H.value];for(let W=0,N=B.length;W<N;W++){const I=B[W],q=x(I),L=S%R,Z=L%q.boundary,X=L+Z;S+=Z,X!==0&&R-X<q.storage&&(S+=R-X),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=q.storage}}}const A=S%R;return A>0&&(S+=R-A),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class j6{constructor(e={}){const{canvas:n=LM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const h=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this.toneMapping=Rr,this.toneMappingExposure=1;const v=this;let S=!1,R=0,A=0,T=null,P=-1,k=null;const y=new Rt,M=new Rt;let H=null;const B=new je(0);let W=0,N=n.width,I=n.height,q=1,L=null,Z=null;const X=new Rt(0,0,N,I),ne=new Rt(0,0,N,I);let ye=!1;const Ie=new K2;let Y=!1,ee=!1;const le=new xt,ue=new xt,Ue=new O,V=new Rt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function he(){return T===null?q:1}let b=i;function We(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",ve,!1),b===null){const F="webgl2";if(b=We(F,w),b===null)throw We(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ce,Le,Re,oe,fe,C,E,G,J,ie,Q,Pe,de,Se,et,se,Me,ke,Be,Ee,Ye,He,ut,U;function ge(){Ce=new Zw(b),Ce.init(),He=new F6(b,Ce),Le=new Ww(b,Ce,e,He),Re=new I6(b),Le.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),oe=new eT(b),fe=new _6,C=new U6(b,Ce,Re,fe,Le,He,oe),E=new jw(v),G=new Kw(v),J=new oE(b),ut=new Vw(b,J),ie=new Jw(b,J,oe,ut),Q=new nT(b,ie,J,oe),Be=new tT(b,Le,C),se=new $w(fe),Pe=new v6(v,E,G,Ce,Le,ut,se),de=new W6(v,fe),Se=new y6,et=new A6(Ce),ke=new Hw(v,E,G,Re,Q,p,l),Me=new D6(v,Q,Le),U=new $6(b,oe,Le,Re),Ee=new Gw(b,Ce,oe),Ye=new Qw(b,Ce,oe),oe.programs=Pe.programs,v.capabilities=Le,v.extensions=Ce,v.properties=fe,v.renderLists=Se,v.shadowMap=Me,v.state=Re,v.info=oe}ge();const K=new V6(v,b);this.xr=K,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(N,I,!1))},this.getSize=function(w){return w.set(N,I)},this.setSize=function(w,F,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,I=F,n.width=Math.floor(w*q),n.height=Math.floor(F*q),$===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(N*q,I*q).floor()},this.setDrawingBufferSize=function(w,F,$){N=w,I=F,q=$,n.width=Math.floor(w*$),n.height=Math.floor(F*$),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,F,$,j){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,F,$,j),Re.viewport(y.copy(X).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,F,$,j){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,F,$,j),Re.scissor(M.copy(ne).multiplyScalar(q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){Re.setScissorTest(ye=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(w=!0,F=!0,$=!0){let j=0;if(w){let z=!1;if(T!==null){const ae=T.texture.format;z=ae===Kp||ae===qp||ae===Yp}if(z){const ae=T.texture.type,me=ae===Ki||ae===hs||ae===rl||ae===Io||ae===jp||ae===Xp,we=ke.getClearColor(),Ae=ke.getClearAlpha(),Fe=we.r,ze=we.g,be=we.b;me?(h[0]=Fe,h[1]=ze,h[2]=be,h[3]=Ae,b.clearBufferuiv(b.COLOR,0,h)):(g[0]=Fe,g[1]=ze,g[2]=be,g[3]=Ae,b.clearBufferiv(b.COLOR,0,g))}else j|=b.COLOR_BUFFER_BIT}F&&(j|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(j|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),et.dispose(),fe.dispose(),E.dispose(),G.dispose(),Q.dispose(),ut.dispose(),U.dispose(),Pe.dispose(),K.dispose(),K.removeEventListener("sessionstart",pm),K.removeEventListener("sessionend",mm),Or.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=oe.autoReset,F=Me.enabled,$=Me.autoUpdate,j=Me.needsUpdate,z=Me.type;ge(),oe.autoReset=w,Me.enabled=F,Me.autoUpdate=$,Me.needsUpdate=j,Me.type=z}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const F=w.target;F.removeEventListener("dispose",Ke),Pt(F)}function Pt(w){hn(w),fe.remove(w)}function hn(w){const F=fe.get(w).programs;F!==void 0&&(F.forEach(function($){Pe.releaseProgram($)}),w.isShaderMaterial&&Pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,$,j,z,ae){F===null&&(F=Ne);const me=z.isMesh&&z.matrixWorld.determinant()<0,we=Yx(w,F,$,j,z);Re.setMaterial(j,me);let Ae=$.index,Fe=1;if(j.wireframe===!0){if(Ae=ie.getWireframeAttribute($),Ae===void 0)return;Fe=2}const ze=$.drawRange,be=$.attributes.position;let ot=ze.start*Fe,ht=(ze.start+ze.count)*Fe;ae!==null&&(ot=Math.max(ot,ae.start*Fe),ht=Math.min(ht,(ae.start+ae.count)*Fe)),Ae!==null?(ot=Math.max(ot,0),ht=Math.min(ht,Ae.count)):be!=null&&(ot=Math.max(ot,0),ht=Math.min(ht,be.count));const wt=ht-ot;if(wt<0||wt===1/0)return;ut.setup(z,j,we,$,Ae);let Mn,it=Ee;if(Ae!==null&&(Mn=J.get(Ae),it=Ye,it.setIndex(Mn)),z.isMesh)j.wireframe===!0?(Re.setLineWidth(j.wireframeLinewidth*he()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(z.isLine){let De=j.linewidth;De===void 0&&(De=1),Re.setLineWidth(De*he()),z.isLineSegments?it.setMode(b.LINES):z.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else z.isPoints?it.setMode(b.POINTS):z.isSprite&&it.setMode(b.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)it.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))it.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const De=z._multiDrawStarts,Ht=z._multiDrawCounts,rt=z._multiDrawCount,Jn=Ae?J.get(Ae).bytesPerElement:1,ws=fe.get(j).currentProgram.getUniforms();for(let En=0;En<rt;En++)ws.setValue(b,"_gl_DrawID",En),it.render(De[En]/Jn,Ht[En])}else if(z.isInstancedMesh)it.renderInstances(ot,wt,z.count);else if($.isInstancedBufferGeometry){const De=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ht=Math.min($.instanceCount,De);it.renderInstances(ot,wt,Ht)}else it.render(ot,wt)};function nt(w,F,$){w.transparent===!0&&w.side===Si&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,wl(w,F,$),w.side=Dr,w.needsUpdate=!0,wl(w,F,$),w.side=Si):wl(w,F,$)}this.compile=function(w,F,$=null){$===null&&($=w),m=et.get($),m.init(F),_.push(m),$.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),w!==$&&w.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const j=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ae=z.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const we=ae[me];nt(we,$,z),j.add(we)}else nt(ae,$,z),j.add(ae)}),_.pop(),m=null,j},this.compileAsync=function(w,F,$=null){const j=this.compile(w,F,$);return new Promise(z=>{function ae(){if(j.forEach(function(me){fe.get(me).currentProgram.isReady()&&j.delete(me)}),j.size===0){z(w);return}setTimeout(ae,10)}Ce.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let pn=null;function Ai(w){pn&&pn(w)}function pm(){Or.stop()}function mm(){Or.start()}const Or=new Z2;Or.setAnimationLoop(Ai),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(w){pn=w,K.setAnimationLoop(w),w===null?Or.stop():Or.start()},K.addEventListener("sessionstart",pm),K.addEventListener("sessionend",mm),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,T),m=et.get(w,_.length),m.init(F),_.push(m),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,Y=se.init(this.clippingPlanes,ee),x=Se.get(w,f.length),x.init(),f.push(x),K.enabled===!0&&K.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&df(ae,F,-1/0,v.sortObjects)}df(w,F,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(L,Z),Qe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Qe&&ke.addToRenderList(x,w),this.info.render.frame++,Y===!0&&se.beginShadows();const $=m.state.shadowsArray;Me.render($,w,F),Y===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,z=x.transmissive;if(m.setupLights(),F.isArrayCamera){const ae=F.cameras;if(z.length>0)for(let me=0,we=ae.length;me<we;me++){const Ae=ae[me];vm(j,z,w,Ae)}Qe&&ke.render(w);for(let me=0,we=ae.length;me<we;me++){const Ae=ae[me];gm(x,w,Ae,Ae.viewport)}}else z.length>0&&vm(j,z,w,F),Qe&&ke.render(w),gm(x,w,F);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,F),ut.resetDefaultState(),P=-1,k=null,_.pop(),_.length>0?(m=_[_.length-1],Y===!0&&se.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function df(w,F,$,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){j&&V.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const me=Q.update(w),we=w.material;we.visible&&x.push(w,me,we,$,V.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){const me=Q.update(w),we=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),V.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),V.copy(me.boundingSphere.center)),V.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(we)){const Ae=me.groups;for(let Fe=0,ze=Ae.length;Fe<ze;Fe++){const be=Ae[Fe],ot=we[be.materialIndex];ot&&ot.visible&&x.push(w,me,ot,$,V.z,be)}}else we.visible&&x.push(w,me,we,$,V.z,null)}}const ae=w.children;for(let me=0,we=ae.length;me<we;me++)df(ae[me],F,$,j)}function gm(w,F,$,j){const z=w.opaque,ae=w.transmissive,me=w.transparent;m.setupLightsView($),Y===!0&&se.setGlobalState(v.clippingPlanes,$),j&&Re.viewport(y.copy(j)),z.length>0&&El(z,F,$),ae.length>0&&El(ae,F,$),me.length>0&&El(me,F,$),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function vm(w,F,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new ps(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?_l:Ki,minFilter:ns,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ae=m.state.transmissionRenderTarget[j.id],me=j.viewport||y;ae.setSize(me.z,me.w);const we=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(B),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Qe&&ke.render($);const Ae=v.toneMapping;v.toneMapping=Rr;const Fe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),Y===!0&&se.setGlobalState(v.clippingPlanes,j),El(w,$,j),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let be=0,ot=F.length;be<ot;be++){const ht=F[be],wt=ht.object,Mn=ht.geometry,it=ht.material,De=ht.group;if(it.side===Si&&wt.layers.test(j.layers)){const Ht=it.side;it.side=cn,it.needsUpdate=!0,_m(wt,$,j,Mn,it,De),it.side=Ht,it.needsUpdate=!0,ze=!0}}ze===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}v.setRenderTarget(we),v.setClearColor(B,W),Fe!==void 0&&(j.viewport=Fe),v.toneMapping=Ae}function El(w,F,$){const j=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ae=w.length;z<ae;z++){const me=w[z],we=me.object,Ae=me.geometry,Fe=j===null?me.material:j,ze=me.group;we.layers.test($.layers)&&_m(we,F,$,Ae,Fe,ze)}}function _m(w,F,$,j,z,ae){w.onBeforeRender(v,F,$,j,z,ae),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,F,$,j,w,ae),z.transparent===!0&&z.side===Si&&z.forceSinglePass===!1?(z.side=cn,z.needsUpdate=!0,v.renderBufferDirect($,F,j,z,w,ae),z.side=Dr,z.needsUpdate=!0,v.renderBufferDirect($,F,j,z,w,ae),z.side=Si):v.renderBufferDirect($,F,j,z,w,ae),w.onAfterRender(v,F,$,j,z,ae)}function wl(w,F,$){F.isScene!==!0&&(F=Ne);const j=fe.get(w),z=m.state.lights,ae=m.state.shadowsArray,me=z.state.version,we=Pe.getParameters(w,z.state,ae,F,$),Ae=Pe.getProgramCacheKey(we);let Fe=j.programs;j.environment=w.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",Ke),Fe=new Map,j.programs=Fe);let ze=Fe.get(Ae);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===me)return ym(w,we),ze}else we.uniforms=Pe.getUniforms(w),w.onBeforeCompile(we,v),ze=Pe.acquireProgram(we,Ae),Fe.set(Ae,ze),j.uniforms=we.uniforms;const be=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=se.uniform),ym(w,we),j.needsLights=Kx(w),j.lightsStateVersion=me,j.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.directionalShadowMap.value=z.state.directionalShadowMap,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotShadowMap.value=z.state.spotShadowMap,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMap.value=z.state.pointShadowMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function xm(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Wc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ym(w,F){const $=fe.get(w);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Yx(w,F,$,j,z){F.isScene!==!0&&(F=Ne),C.resetTextureUnits();const ae=F.fog,me=j.isMeshStandardMaterial?F.environment:null,we=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Fr,Ae=(j.isMeshStandardMaterial?G:E).get(j.envMap||me),Fe=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),be=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,ht=!!$.morphAttributes.color;let wt=Rr;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=v.toneMapping);const Mn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,it=Mn!==void 0?Mn.length:0,De=fe.get(j),Ht=m.state.lights;if(Y===!0&&(ee===!0||w!==k)){const Nn=w===k&&j.id===P;se.setState(j,w,Nn)}let rt=!1;j.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ht.state.version||De.outputColorSpace!==we||z.isBatchedMesh&&De.batching===!1||!z.isBatchedMesh&&De.batching===!0||z.isBatchedMesh&&De.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&De.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&De.instancing===!1||!z.isInstancedMesh&&De.instancing===!0||z.isSkinnedMesh&&De.skinning===!1||!z.isSkinnedMesh&&De.skinning===!0||z.isInstancedMesh&&De.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&De.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&De.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&De.instancingMorph===!1&&z.morphTexture!==null||De.envMap!==Ae||j.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==ze||De.morphTargets!==be||De.morphNormals!==ot||De.morphColors!==ht||De.toneMapping!==wt||De.morphTargetsCount!==it)&&(rt=!0):(rt=!0,De.__version=j.version);let Jn=De.currentProgram;rt===!0&&(Jn=wl(j,F,z));let ws=!1,En=!1,hf=!1;const At=Jn.getUniforms(),tr=De.uniforms;if(Re.useProgram(Jn.program)&&(ws=!0,En=!0,hf=!0),j.id!==P&&(P=j.id,En=!0),ws||k!==w){Le.reverseDepthBuffer?(le.copy(w.projectionMatrix),NM(le),UM(le),At.setValue(b,"projectionMatrix",le)):At.setValue(b,"projectionMatrix",w.projectionMatrix),At.setValue(b,"viewMatrix",w.matrixWorldInverse);const Nn=At.map.cameraPosition;Nn!==void 0&&Nn.setValue(b,Ue.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&At.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&At.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,En=!0,hf=!0)}if(z.isSkinnedMesh){At.setOptional(b,z,"bindMatrix"),At.setOptional(b,z,"bindMatrixInverse");const Nn=z.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),At.setValue(b,"boneTexture",Nn.boneTexture,C))}z.isBatchedMesh&&(At.setOptional(b,z,"batchingTexture"),At.setValue(b,"batchingTexture",z._matricesTexture,C),At.setOptional(b,z,"batchingIdTexture"),At.setValue(b,"batchingIdTexture",z._indirectTexture,C),At.setOptional(b,z,"batchingColorTexture"),z._colorsTexture!==null&&At.setValue(b,"batchingColorTexture",z._colorsTexture,C));const pf=$.morphAttributes;if((pf.position!==void 0||pf.normal!==void 0||pf.color!==void 0)&&Be.update(z,$,Jn),(En||De.receiveShadow!==z.receiveShadow)&&(De.receiveShadow=z.receiveShadow,At.setValue(b,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(tr.envMap.value=Ae,tr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(tr.envMapIntensity.value=F.environmentIntensity),En&&(At.setValue(b,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&qx(tr,hf),ae&&j.fog===!0&&de.refreshFogUniforms(tr,ae),de.refreshMaterialUniforms(tr,j,q,I,m.state.transmissionRenderTarget[w.id]),Wc.upload(b,xm(De),tr,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Wc.upload(b,xm(De),tr,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&At.setValue(b,"center",z.center),At.setValue(b,"modelViewMatrix",z.modelViewMatrix),At.setValue(b,"normalMatrix",z.normalMatrix),At.setValue(b,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Nn=j.uniformsGroups;for(let mf=0,Zx=Nn.length;mf<Zx;mf++){const Sm=Nn[mf];U.update(Sm,Jn),U.bind(Sm,Jn)}}return Jn}function qx(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Kx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,F,$){fe.get(w.texture).__webglTexture=F,fe.get(w.depthTexture).__webglTexture=$;const j=fe.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const $=fe.get(w);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,$=0){T=w,R=F,A=$;let j=!0,z=null,ae=!1,me=!1;if(w){const Ae=fe.get(w);if(Ae.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(b.FRAMEBUFFER,null),j=!1;else if(Ae.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Ae.__hasExternalTextures)C.rebindTextures(w,fe.get(w.texture).__webglTexture,fe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const be=w.depthTexture;if(Ae.__boundDepthTexture!==be){if(be!==null&&fe.has(be)&&(w.width!==be.image.width||w.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);const ze=fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?z=ze[F][$]:z=ze[F],ae=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?z=fe.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[$]:z=ze,y.copy(w.viewport),M.copy(w.scissor),H=w.scissorTest}else y.copy(X).multiplyScalar(q).floor(),M.copy(ne).multiplyScalar(q).floor(),H=ye;if(Re.bindFramebuffer(b.FRAMEBUFFER,z)&&j&&Re.drawBuffers(w,z),Re.viewport(y),Re.scissor(M),Re.setScissorTest(H),ae){const Ae=fe.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,$)}else if(me){const Ae=fe.get(w.texture),Fe=F||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.__webglTexture,$||0,Fe)}P=-1},this.readRenderTargetPixels=function(w,F,$,j,z,ae,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){Re.bindFramebuffer(b.FRAMEBUFFER,we);try{const Ae=w.texture,Fe=Ae.format,ze=Ae.type;if(!Le.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&$>=0&&$<=w.height-z&&b.readPixels(F,$,j,z,He.convert(Fe),He.convert(ze),ae)}finally{const Ae=T!==null?fe.get(T).__webglFramebuffer:null;Re.bindFramebuffer(b.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,F,$,j,z,ae,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){const Ae=w.texture,Fe=Ae.format,ze=Ae.type;if(!Le.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-j&&$>=0&&$<=w.height-z){Re.bindFramebuffer(b.FRAMEBUFFER,we);const be=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,be),b.bufferData(b.PIXEL_PACK_BUFFER,ae.byteLength,b.STREAM_READ),b.readPixels(F,$,j,z,He.convert(Fe),He.convert(ze),0);const ot=T!==null?fe.get(T).__webglFramebuffer:null;Re.bindFramebuffer(b.FRAMEBUFFER,ot);const ht=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await IM(b,ht,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,be),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ae),b.deleteBuffer(be),b.deleteSync(ht),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,$=0){w.isTexture!==!0&&(Gc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-$),z=Math.floor(w.image.width*j),ae=Math.floor(w.image.height*j),me=F!==null?F.x:0,we=F!==null?F.y:0;C.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,$,0,0,me,we,z,ae),Re.unbindTexture()},this.copyTextureToTexture=function(w,F,$=null,j=null,z=0){w.isTexture!==!0&&(Gc("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],F=arguments[2],z=arguments[3]||0,$=null);let ae,me,we,Ae,Fe,ze;$!==null?(ae=$.max.x-$.min.x,me=$.max.y-$.min.y,we=$.min.x,Ae=$.min.y):(ae=w.image.width,me=w.image.height,we=0,Ae=0),j!==null?(Fe=j.x,ze=j.y):(Fe=0,ze=0);const be=He.convert(F.format),ot=He.convert(F.type);C.setTexture2D(F,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,F.unpackAlignment);const ht=b.getParameter(b.UNPACK_ROW_LENGTH),wt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Mn=b.getParameter(b.UNPACK_SKIP_PIXELS),it=b.getParameter(b.UNPACK_SKIP_ROWS),De=b.getParameter(b.UNPACK_SKIP_IMAGES),Ht=w.isCompressedTexture?w.mipmaps[z]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ht.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ae),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,z,Fe,ze,ae,me,be,ot,Ht.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,z,Fe,ze,Ht.width,Ht.height,be,Ht.data):b.texSubImage2D(b.TEXTURE_2D,z,Fe,ze,ae,me,be,ot,Ht),b.pixelStorei(b.UNPACK_ROW_LENGTH,ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Mn),b.pixelStorei(b.UNPACK_SKIP_ROWS,it),b.pixelStorei(b.UNPACK_SKIP_IMAGES,De),z===0&&F.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,F,$=null,j=null,z=0){w.isTexture!==!0&&(Gc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,w=arguments[2],F=arguments[3],z=arguments[4]||0);let ae,me,we,Ae,Fe,ze,be,ot,ht;const wt=w.isCompressedTexture?w.mipmaps[z]:w.image;$!==null?(ae=$.max.x-$.min.x,me=$.max.y-$.min.y,we=$.max.z-$.min.z,Ae=$.min.x,Fe=$.min.y,ze=$.min.z):(ae=wt.width,me=wt.height,we=wt.depth,Ae=0,Fe=0,ze=0),j!==null?(be=j.x,ot=j.y,ht=j.z):(be=0,ot=0,ht=0);const Mn=He.convert(F.format),it=He.convert(F.type);let De;if(F.isData3DTexture)C.setTexture3D(F,0),De=b.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),De=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,F.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,F.unpackAlignment);const Ht=b.getParameter(b.UNPACK_ROW_LENGTH),rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Jn=b.getParameter(b.UNPACK_SKIP_PIXELS),ws=b.getParameter(b.UNPACK_SKIP_ROWS),En=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,wt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ae),b.pixelStorei(b.UNPACK_SKIP_ROWS,Fe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ze),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(De,z,be,ot,ht,ae,me,we,Mn,it,wt.data):F.isCompressedArrayTexture?b.compressedTexSubImage3D(De,z,be,ot,ht,ae,me,we,Mn,wt.data):b.texSubImage3D(De,z,be,ot,ht,ae,me,we,Mn,it,wt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Jn),b.pixelStorei(b.UNPACK_SKIP_ROWS,ws),b.pixelStorei(b.UNPACK_SKIP_IMAGES,En),z===0&&F.generateMipmaps&&b.generateMipmap(De),Re.unbindTexture()},this.initRenderTarget=function(w){fe.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Re.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zp?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===sf?"display-p3":"srgb"}}class X6 extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Y6{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new O;class Tu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=li(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=li(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=li(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=li(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=at(n,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new an(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ix extends Es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const ca=new O,Hs=new O,Vs=new O,Gs=new Xe,ua=new Xe,rx=new xt,cc=new O,fa=new O,uc=new O,A1=new Xe,v0=new Xe,C1=new Xe;class q6 extends en{constructor(e=new ix){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new kt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Y6(n,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Tu(i,3,0,!1)),Bs.setAttribute("uv",new Tu(i,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new Xe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),rx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;fc(cc.set(-.5,-.5,0),Vs,o,Hs,r,s),fc(fa.set(.5,-.5,0),Vs,o,Hs,r,s),fc(uc.set(.5,.5,0),Vs,o,Hs,r,s),A1.set(0,0),v0.set(1,0),C1.set(1,1);let a=e.ray.intersectTriangle(cc,fa,uc,!1,ca);if(a===null&&(fc(fa.set(-.5,.5,0),Vs,o,Hs,r,s),v0.set(0,1),a=e.ray.intersectTriangle(cc,uc,fa,!1,ca),a===null))return;const l=e.ray.origin.distanceTo(ca);l<e.near||l>e.far||n.push({distance:l,point:ca.clone(),uv:Hn.getInterpolation(ca,cc,fa,uc,A1,v0,C1,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fc(t,e,n,i,r,s){Gs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ua.x=s*Gs.x-r*Gs.y,ua.y=r*Gs.x+s*Gs.y):ua.copy(Gs),t.copy(e),t.x+=ua.x,t.y+=ua.y,t.applyMatrix4(rx)}class js extends Es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Au=new O,Cu=new O,R1=new xt,da=new of,dc=new yl,_0=new O,P1=new O;class hh extends en{constructor(e=new kt,n=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Au.fromBufferAttribute(n,r-1),Cu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Au.distanceTo(Cu);e.setAttribute("lineDistance",new yn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(r),dc.radius+=s,e.ray.intersectsSphere(dc)===!1)return;R1.copy(r).invert(),da.copy(e.ray).applyMatrix4(R1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=h,m=g-1;x<m;x+=c){const f=u.getX(x),_=u.getX(x+1),v=hc(this,e,da,l,f,_);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(h),f=hc(this,e,da,l,x,m);f&&n.push(f)}}else{const h=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=h,m=g-1;x<m;x+=c){const f=hc(this,e,da,l,x,x+1);f&&n.push(f)}if(this.isLineLoop){const x=hc(this,e,da,l,g-1,h);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hc(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Au.fromBufferAttribute(o,r),Cu.fromBufferAttribute(o,s),n.distanceSqToSegment(Au,Cu,_0,P1)>i)return;_0.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(_0);if(!(l<e.near||l>e.far))return{distance:l,point:P1.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class x0 extends hh{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class K6 extends Es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const b1=new xt,ph=new of,pc=new yl,mc=new O;class Z6 extends en{constructor(e=new kt,n=new K6){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(r),pc.radius+=s,e.ray.intersectsSphere(pc)===!1)return;b1.copy(r).invert(),ph.copy(e.ray).applyMatrix4(b1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=p,x=h;g<x;g++){const m=c.getX(g);mc.fromBufferAttribute(d,m),D1(mc,m,l,r,e,n,this)}}else{const p=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=p,x=h;g<x;g++)mc.fromBufferAttribute(d,g),D1(mc,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function D1(t,e,n,i,r,s,o){const a=ph.distanceSqToPoint(t);if(a<n){const l=new O;ph.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class J6 extends un{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tm extends kt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const p=(n-e)/r,h=new O,g=new Xe;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const f=s+m/i*o;h.x=d*Math.cos(f),h.y=d*Math.sin(f),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/n+1)/2,g.y=(h.y/n+1)/2,u.push(g.x,g.y)}d+=p}for(let x=0;x<r;x++){const m=x*(i+1);for(let f=0;f<i;f++){const _=f+m,v=_,S=_+i+1,R=_+i+2,A=_+1;a.push(v,S,A),a.push(S,R,A)}}this.setIndex(a),this.setAttribute("position",new yn(l,3)),this.setAttribute("normal",new yn(c,3)),this.setAttribute("uv",new yn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nm extends kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new O,p=new O,h=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const _=[],v=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const A=R/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),m.push(A+S,1-v),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const v=u[f][_+1],S=u[f][_],R=u[f+1][_],A=u[f+1][_+1];(f!==0||o>0)&&h.push(v,S,A),(f!==i-1||l<Math.PI)&&h.push(S,R,A)}this.setIndex(h),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(x,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const L1=new xt;class Q6{constructor(e,n,i=0,r=1/0){this.ray=new of(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Qp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return L1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(L1),this}intersectObject(e,n=!0,i=[]){return mh(e,this,i,n),i.sort(I1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)mh(e[r],this,i,n);return i.sort(I1),i}}function I1(t,e){return t.distance-e.distance}function mh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)mh(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wp);const fi=Math.PI/180,gh=180/Math.PI;function sx(t){return Math.max(-1,Math.min(1,t))}function vh(t,e,n,i){const r=(i-e)*fi;let s=((n-t+540)%360-180)*fi;const o=Math.sin(r/2),a=Math.sin(s/2),l=o*o+Math.cos(e*fi)*Math.cos(i*fi)*a*a;return 2*Math.asin(sx(Math.sqrt(l)))*gh}function im(t,e,n,i){const r=i*fi,s=n*fi,o=e*fi,a=t*fi,l=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),c=Math.asin(sx(l)),u=Math.sin(s)*Math.sin(r)*Math.cos(o),d=Math.cos(r)-Math.sin(o)*l;return[((a+Math.atan2(u,d))*gh%360+360)%360,c*gh]}function e5(t,e,n,i=128){const r=[];for(let s=0;s<=i;s++)r.push(im(t,e,360*s/i,n));return r}function Yo(t){const n=(t%360+360)%360/15,i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${String(i).padStart(2,"0")}h${String(r).padStart(2,"0")}m${String(s%60).padStart(2,"0")}s`}function qo(t){const e=t<0?"−":"+";let n=Math.abs(t);const i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${e}${String(i).padStart(2,"0")}°${String(r).padStart(2,"0")}′${String(s%60).padStart(2,"0")}″`}function Ru(t){return["北","东北","东","东南","南","西南","西","西北"][Math.round((t%360+360)%360/45)%8]}const cr=1;function t5(t){return t.kind==="sun"?new je(16765565):t.kind==="moon"?new je(14673650):t.kind==="planet"?new je(10406911):new je(16777215)}function N1(t){return t==="sun"||t==="moon"?"diamond":t==="planet"?"square":"circle"}function n5(t){var p;const{sky:e,fov:n,horizonClip:i,showGraticule:r,annotations:s,selectedId:o,hoverId:a}=t,l=Oe.useRef(null),c=Oe.useRef(null),[u,d]=Oe.useState(null);return Oe.useEffect(()=>{if(l.current)try{const h=new i5(l.current,t);return c.current=h,()=>{h.dispose(),c.current=null}}catch{d("当前环境无法初始化 WebGL，三维球面视图不可用（右侧两种投影不受影响）。")}},[]),Oe.useEffect(()=>{var h;(h=c.current)==null||h.update(t)}),Oe.useEffect(()=>{var g;if(!t.focusToken)return;const h=e.targets.find(x=>x.id===t.focusToken.id);h&&((g=c.current)==null||g.flyTo(h.hx,h.hy,h.hz))},[(p=t.focusToken)==null?void 0:p.nonce]),D.jsxs("div",{className:"globe-wrap",children:[u?D.jsx("div",{className:"globe-mount globe-error",children:u}):D.jsx("div",{ref:l,className:"globe-mount"}),D.jsxs("div",{className:"globe-hint",children:["拖拽旋转 · 滚轮缩放 · 点击星点定位（与右侧两图联动）",D.jsx("br",{}),"地平坐标系：红圈=地平（N/E/S/W），绿圈=视场（角半径 ",n.radiusDeg.toFixed(1),"°），网格=J2000 赤道坐标",i?" · 已开启地平线裁切":""]})]})}class i5{constructor(e,n){tt(this,"renderer");tt(this,"scene");tt(this,"camera");tt(this,"raf",0);tt(this,"mount");tt(this,"resizeObs");tt(this,"points");tt(this,"pointMaterial");tt(this,"fovLine");tt(this,"horizonLine");tt(this,"groundDisc");tt(this,"graticuleGroup",new is);tt(this,"equatorLine",null);tt(this,"highlight");tt(this,"labelsGroup",new is);tt(this,"annotationsGroup",new is);tt(this,"raycaster",new Q6);tt(this,"pickSphere");tt(this,"drag",{active:!1,x:0,y:0,moved:0});tt(this,"camDir",new O(0,0,1));tt(this,"camTargetDir",new O(0,0,1));tt(this,"props");tt(this,"positionData",[]);tt(this,"disposed",!1);tt(this,"cleanupEvents",()=>{});tt(this,"everMoved",!1);tt(this,"animate",()=>{this.disposed||(this.raf=requestAnimationFrame(this.animate),this.camDir.lerp(this.camTargetDir,.12).normalize(),this.camera.lookAt(this.camDir.clone().multiplyScalar(cr)),this.camera.up.set(0,0,1),this.renderer.render(this.scene,this.camera))});this.mount=e,this.props=n,this.renderer=new j6({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.scene=new X6,this.scene.background=new je(461332),this.camera=new Bn(60,1,.01,10),this.camera.position.set(0,0,1e-4),this.camera.up.set(0,0,1),this.camera.lookAt(this.camDir),this.pickSphere=new ui(new nm(cr,48,32),new wu({visible:!1,side:cn})),this.scene.add(this.pickSphere),this.highlight=new ui(new tm(.022,.032,32),new wu({color:16766282,side:Si,transparent:!0,opacity:.95})),this.highlight.visible=!1,this.scene.add(this.highlight),this.scene.add(this.graticuleGroup),this.scene.add(this.labelsGroup),this.scene.add(this.annotationsGroup),this.initStars(),this.initStaticFrames(),this.resize(),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.bindEvents(),this.update(n),this.animate()}initStars(){const n=new kt,i=new Float32Array(256*3),r=new Float32Array(256),s=new Float32Array(256*3),o=new Float32Array(256);n.setAttribute("position",new an(i,3)),n.setAttribute("aSize",new an(r,1)),n.setAttribute("aColor",new an(s,3)),n.setAttribute("aShape",new an(o,1)),n.setDrawRange(0,0),this.pointMaterial=new Ji({transparent:!0,depthWrite:!1,uniforms:{uPxRatio:{value:this.renderer.getPixelRatio()}},vertexShader:`
        attribute float aSize;
        attribute vec3 aColor;
        attribute float aShape;
        uniform float uPxRatio;
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vColor = aColor;
          vShape = aShape;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPxRatio * 220.0 / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float alpha = 0.0;
          if (vShape < 0.5) {
            // 圆星点
            alpha = smoothstep(0.5, 0.18, d);
          } else if (vShape < 1.5) {
            // 方形（行星）
            vec2 q = abs(uv);
            alpha = (max(q.x, q.y) < 0.34) ? 1.0 : 0.0;
          } else {
            // 菱形（日月）
            float d2 = abs(uv.x) + abs(uv.y);
            alpha = smoothstep(0.5, 0.3, d2);
          }
          if (alpha <= 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }`}),this.points=new Z6(n,this.pointMaterial),this.points.frustumCulled=!1,this.scene.add(this.points)}makeLine(e,n,i=1){const r=new kt().setFromPoints(e),s=new js({color:n,transparent:i<1,opacity:i});return new x0(r,s)}initStaticFrames(){const e=[];for(let r=0;r<128;r++){const s=2*Math.PI*r/128;e.push(new O(Math.cos(s),-Math.sin(s),0))}this.horizonLine=new x0(new kt().setFromPoints(e),new js({color:16735581})),this.scene.add(this.horizonLine);const n=[];for(let r=0;r<=128;r++){const s=2*Math.PI*r/128;n.push(new O(Math.cos(s)*cr,-Math.sin(s)*cr,-.002))}this.groundDisc=new hh(new kt().setFromPoints([...n,new O(0,0,-cr*.98),n[0]]),new js({color:16735581,transparent:!0,opacity:.25})),this.scene.add(this.groundDisc);const i=[["N 北",1,0,0],["E 东",0,-1,0],["S 南",-1,0,0],["W 西",0,1,0]];for(const[r,s,o,a]of i)this.labelsGroup.add(this.makeTextSprite(r,new O(s,o,a),"#ff8a8a"));this.labelsGroup.add(this.makeTextSprite("天顶 Z",new O(0,0,1),"#9fd0ff")),this.labelsGroup.add(this.makeTextSprite("天底",new O(0,0,-1),"#8a6a6a"))}makeTextSprite(e,n,i){const r=document.createElement("canvas");r.width=256,r.height=64;const s=r.getContext("2d");s.font="28px sans-serif",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(e,128,32);const o=new J6(r),a=new ix({map:o,transparent:!0,depthTest:!1,depthWrite:!1}),l=new q6(a);return l.position.copy(n.clone().multiplyScalar(cr*1.01)),l.scale.set(.09,.0225,1),l}bindEvents(){const e=this.renderer.domElement;e.style.cursor="grab";const n=o=>{this.drag={active:!0,x:o.clientX,y:o.clientY,moved:0},e.setPointerCapture(o.pointerId),e.style.cursor="grabbing"},i=o=>{const a=e.getBoundingClientRect();if(this.drag.active){const l=o.clientX-this.drag.x,c=o.clientY-this.drag.y;this.drag.moved+=Math.abs(l)+Math.abs(c),this.drag.x=o.clientX,this.drag.y=o.clientY,this.orbit(l,c)}else{const l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onHover(l),e.style.cursor=l?"pointer":"grab"}},r=o=>{if(this.drag.active&&this.drag.moved<5){const a=e.getBoundingClientRect(),l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onSelect(l)}this.drag.active=!1,e.style.cursor="grab"},s=o=>{o.preventDefault();const a=Og.clamp(this.camera.fov+o.deltaY*.05,8,100);this.camera.fov=a,this.camera.updateProjectionMatrix()};e.addEventListener("pointerdown",n),e.addEventListener("pointermove",i),window.addEventListener("pointerup",r),e.addEventListener("wheel",s,{passive:!1}),this.cleanupEvents=()=>{e.removeEventListener("pointerdown",n),e.removeEventListener("pointermove",i),window.removeEventListener("pointerup",r),e.removeEventListener("wheel",s)}}orbit(e,n){const r=this.camDir,s=new O(0,0,1),o=new O().crossVectors(s,r).normalize(),a=new ms().setFromAxisAngle(s,-e*.25*Math.PI/180),l=new ms().setFromAxisAngle(o,-n*.25*Math.PI/180);r.applyQuaternion(a).applyQuaternion(l).normalize(),Math.abs(r.z)>.999&&(r.z=Math.sign(r.z)*.999,r.normalize()),this.camTargetDir.copy(r),this.everMoved=!0}pick(e,n){const i=this.renderer.domElement.getBoundingClientRect(),r=new Xe(e/i.width*2-1,-(n/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera),this.raycaster;let s=null;for(const o of this.positionData){const a=o.vec,l=a.dot(this.camDir);if(l<=0)continue;const c=a.clone().project(this.camera),u=(c.x+1)/2*i.width,d=(-c.y+1)/2*i.height,p=(r.x+1)/2*i.width,h=(-r.y+1)/2*i.height;Math.hypot(u-p,d-h)<10&&(!s||l>s.dot)&&(s={id:o.id,dot:l})}return(s==null?void 0:s.id)??null}flyTo(e,n,i){this.camTargetDir.set(e,n,i).normalize(),this.camera.fov=35,this.camera.updateProjectionMatrix()}updateStars(e,n){const i=e.targets.filter(u=>u.inFov&&u.passesMag&&(!n||u.aboveHorizon)),r=this.points.geometry.getAttribute("position").count,s=Math.min(i.length,r),o=this.points.geometry.getAttribute("position"),a=this.points.geometry.getAttribute("aSize"),l=this.points.geometry.getAttribute("aColor"),c=this.points.geometry.getAttribute("aShape");this.positionData=[];for(let u=0;u<s;u++){const d=i[u],p=new O(d.hx,d.hy,d.hz).multiplyScalar(cr);o.setXYZ(u,p.x,p.y,p.z);const h=d.id===this.props.selectedId||d.id===this.props.hoverId;let g=Og.clamp(2.6-d.mag*.28,.5,3.4)*.012;d.kind!=="star"&&(g=Math.max(g,.04)),h&&(g*=1.6),a.setX(u,g);const x=t5(d);l.setXYZ(u,x.r,x.g,x.b),c.setX(u,N1(d.kind)==="circle"?0:N1(d.kind)==="square"?1:2),this.positionData.push({id:d.id,vec:new O(d.hx,d.hy,d.hz)})}this.points.geometry.setDrawRange(0,s),o.needsUpdate=!0,a.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0}update(e){this.props=e,this.updateStars(e.sky,e.horizonClip),this.rebuildFovCircle(e),this.graticuleGroup.visible=e.showGraticule,this.rebuildGraticuleContent(e),this.rebuildAnnotations(e);const n=e.selectedId?e.sky.targets.find(i=>i.id===e.selectedId):null;if(n?(this.highlight.visible=!0,this.highlight.position.set(n.hx,n.hy,n.hz),this.highlight.lookAt(0,0,0)):this.highlight.visible=!1,!this.everMoved){const i=this.centerVec(e);this.camDir.copy(i),this.camTargetDir.copy(i)}}centerVec(e){const n=e.sky.centerAz*fi,i=e.sky.centerAlt*fi;return new O(Math.cos(i)*Math.cos(n),-Math.cos(i)*Math.sin(n),Math.sin(i)).normalize()}rebuildFovCircle(e){this.fovLine&&(this.scene.remove(this.fovLine),this.fovLine.geometry.dispose());const n=this.centerVec(e),i=e.fov.radiusDeg*fi,r=Math.abs(n.z)<.9?new O(0,0,1):new O(1,0,0),s=new O().crossVectors(r,n).normalize(),o=new O().crossVectors(n,s).normalize(),a=[];for(let l=0;l<128;l++){const c=2*Math.PI*l/128,u=n.clone().multiplyScalar(Math.cos(i)).add(s.clone().multiplyScalar(Math.sin(i)*Math.cos(c))).add(o.clone().multiplyScalar(Math.sin(i)*Math.sin(c))).normalize().multiplyScalar(cr*1.002);a.push(u)}this.fovLine=new x0(new kt().setFromPoints(a),new js({color:5759881})),this.scene.add(this.fovLine)}rebuildGraticuleContent(e){if([...this.graticuleGroup.children].forEach(i=>{var s,o;(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.graticuleGroup.clear(),!e.showGraticule){this.equatorLine&&(this.scene.remove(this.equatorLine),this.equatorLine=null);return}const n=e.graticuleHorizontal;if(n)for(const i of[...n.parallels,...n.meridians]){const r=i.map(([o,a,l])=>new O(o,a,l)),s=new hh(new kt().setFromPoints(r),new js({color:3820139,transparent:!0,opacity:.7}));this.graticuleGroup.add(s)}}rebuildAnnotations(e){[...this.annotationsGroup.children].forEach(n=>{var r,s,o;const i=n;(r=i.material.map)==null||r.dispose(),(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.annotationsGroup.clear();for(const n of e.annotations){const i=e.sky.targets.find(s=>Math.abs(s.ra-n.ra)<1e-9&&Math.abs(s.dec-n.dec)<1e-9);if(!i)continue;const r=this.makeTextSprite(`📝 ${n.text}`,new O(i.hx,i.hy,i.hz),n.color);this.annotationsGroup.add(r)}}resize(){const e=this.mount.clientWidth||1,n=this.mount.clientHeight||1;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.cleanupEvents(),this.resizeObs.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove()}}class gs{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const n=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=n[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(n[i++]=a),e=o}return n[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let n=this._n,i,r,s,o=0;if(n>0){for(o=e[--n];n>0&&(i=o,r=e[--n],o=i+r,s=r-(o-i),!s););n>0&&(s<0&&e[n-1]<0||s>0&&e[n-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}function*r5(t){for(const e of t)yield*e}function ox(t){return Array.from(r5(t))}function ao(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var i=-1,r=Math.max(0,Math.ceil((e-t)/n))|0,s=new Array(r);++i<r;)s[i]=t+i*n;return s}var qe=1e-6,Ze=Math.PI,$n=Ze/2,U1=Ze/4,Zn=Ze*2,ii=180/Ze,Gt=Ze/180,vt=Math.abs,ax=Math.atan,Fo=Math.atan2,ft=Math.cos,gc=Math.ceil,ct=Math.sin,s5=Math.sign||function(t){return t>0?1:t<0?-1:0},zr=Math.sqrt;function lx(t){return t>1?0:t<-1?Ze:Math.acos(t)}function zo(t){return t>1?$n:t<-1?-$n:Math.asin(t)}function jn(){}function Pu(t,e){t&&z1.hasOwnProperty(t.type)&&z1[t.type](t,e)}var F1={Feature:function(t,e){Pu(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,i=-1,r=n.length;++i<r;)Pu(n[i].geometry,e)}},z1={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)t=n[i],e.point(t[0],t[1],t[2])},LineString:function(t,e){_h(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)_h(n[i],e,0)},Polygon:function(t,e){O1(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)O1(n[i],e)},GeometryCollection:function(t,e){for(var n=t.geometries,i=-1,r=n.length;++i<r;)Pu(n[i],e)}};function _h(t,e,n){var i=-1,r=t.length-n,s;for(e.lineStart();++i<r;)s=t[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function O1(t,e){var n=-1,i=t.length;for(e.polygonStart();++n<i;)_h(t[n],e,1);e.polygonEnd()}function Xs(t,e){t&&F1.hasOwnProperty(t.type)?F1[t.type](t,e):Pu(t,e)}function xh(t){return[Fo(t[1],t[0]),zo(t[2])]}function Oo(t){var e=t[0],n=t[1],i=ft(n);return[i*ft(e),i*ct(e),ct(n)]}function vc(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function bu(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function y0(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function _c(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function yh(t){var e=zr(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function Ws(t){return function(){return t}}function Sh(t,e){function n(i,r){return i=t(i,r),e(i[0],i[1])}return t.invert&&e.invert&&(n.invert=function(i,r){return i=e.invert(i,r),i&&t.invert(i[0],i[1])}),n}function Mh(t,e){return vt(t)>Ze&&(t-=Math.round(t/Zn)*Zn),[t,e]}Mh.invert=Mh;function cx(t,e,n){return(t%=Zn)?e||n?Sh(B1(t),H1(e,n)):B1(t):e||n?H1(e,n):Mh}function k1(t){return function(e,n){return e+=t,vt(e)>Ze&&(e-=Math.round(e/Zn)*Zn),[e,n]}}function B1(t){var e=k1(t);return e.invert=k1(-t),e}function H1(t,e){var n=ft(t),i=ct(t),r=ft(e),s=ct(e);function o(a,l){var c=ft(l),u=ft(a)*c,d=ct(a)*c,p=ct(l),h=p*n+u*i;return[Fo(d*r-h*s,u*n-p*i),zo(h*r+d*s)]}return o.invert=function(a,l){var c=ft(l),u=ft(a)*c,d=ct(a)*c,p=ct(l),h=p*r-d*s;return[Fo(d*r+p*s,u*n+h*i),zo(h*n-u*i)]},o}function ux(t,e,n,i,r,s){if(n){var o=ft(e),a=ct(e),l=i*n;r==null?(r=e+i*Zn,s=e-l/2):(r=V1(o,r),s=V1(o,s),(i>0?r<s:r>s)&&(r+=i*Zn));for(var c,u=r;i>0?u>s:u<s;u-=l)c=xh([o,-a*ft(u),-a*ct(u)]),t.point(c[0],c[1])}}function V1(t,e){e=Oo(e),e[0]-=t,yh(e);var n=lx(-e[1]);return((-e[2]<0?-n:n)+Zn-qe)%Zn}function rm(){var t=Ws([0,0]),e=Ws(90),n=Ws(2),i,r,s={point:o};function o(l,c){i.push(l=r(l,c)),l[0]*=ii,l[1]*=ii}function a(){var l=t.apply(this,arguments),c=e.apply(this,arguments)*Gt,u=n.apply(this,arguments)*Gt;return i=[],r=cx(-l[0]*Gt,-l[1]*Gt,0).invert,ux(s,c,u,1),l={type:"Polygon",coordinates:[i]},i=r=null,l}return a.center=function(l){return arguments.length?(t=typeof l=="function"?l:Ws([+l[0],+l[1]]),a):t},a.radius=function(l){return arguments.length?(e=typeof l=="function"?l:Ws(+l),a):e},a.precision=function(l){return arguments.length?(n=typeof l=="function"?l:Ws(+l),a):n},a}function fx(){var t=[],e;return{point:function(n,i,r){e.push([n,i,r])},lineStart:function(){t.push(e=[])},lineEnd:jn,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t;return t=[],e=null,n}}}function $c(t,e){return vt(t[0]-e[0])<qe&&vt(t[1]-e[1])<qe}function xc(t,e,n,i){this.x=t,this.z=e,this.o=n,this.e=i,this.v=!1,this.n=this.p=null}function dx(t,e,n,i,r){var s=[],o=[],a,l;if(t.forEach(function(g){if(!((x=g.length-1)<=0)){var x,m=g[0],f=g[x],_;if($c(m,f)){if(!m[2]&&!f[2]){for(r.lineStart(),a=0;a<x;++a)r.point((m=g[a])[0],m[1]);r.lineEnd();return}f[0]+=2*qe}s.push(_=new xc(m,g,null,!0)),o.push(_.o=new xc(m,null,_,!1)),s.push(_=new xc(f,g,null,!1)),o.push(_.o=new xc(f,null,_,!0))}}),!!s.length){for(o.sort(e),G1(s),G1(o),a=0,l=o.length;a<l;++a)o[a].e=n=!n;for(var c=s[0],u,d;;){for(var p=c,h=!0;p.v;)if((p=p.n)===c)return;u=p.z,r.lineStart();do{if(p.v=p.o.v=!0,p.e){if(h)for(a=0,l=u.length;a<l;++a)r.point((d=u[a])[0],d[1]);else i(p.x,p.n.x,1,r);p=p.n}else{if(h)for(u=p.p.z,a=u.length-1;a>=0;--a)r.point((d=u[a])[0],d[1]);else i(p.x,p.p.x,-1,r);p=p.p}p=p.o,u=p.z,h=!h}while(!p.v);r.lineEnd()}}}function G1(t){if(e=t.length){for(var e,n=0,i=t[0],r;++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}function S0(t){return vt(t[0])<=Ze?t[0]:s5(t[0])*((vt(t[0])+Ze)%Zn-Ze)}function o5(t,e){var n=S0(e),i=e[1],r=ct(i),s=[ct(n),-ft(n),0],o=0,a=0,l=new gs;r===1?i=$n+qe:r===-1&&(i=-$n-qe);for(var c=0,u=t.length;c<u;++c)if(p=(d=t[c]).length)for(var d,p,h=d[p-1],g=S0(h),x=h[1]/2+U1,m=ct(x),f=ft(x),_=0;_<p;++_,g=S,m=A,f=T,h=v){var v=d[_],S=S0(v),R=v[1]/2+U1,A=ct(R),T=ft(R),P=S-g,k=P>=0?1:-1,y=k*P,M=y>Ze,H=m*A;if(l.add(Fo(H*k*ct(y),f*T+H*ft(y))),o+=M?P+k*Zn:P,M^g>=n^S>=n){var B=bu(Oo(h),Oo(v));yh(B);var W=bu(s,B);yh(W);var N=(M^P>=0?-1:1)*zo(W[2]);(i>N||i===N&&(B[0]||B[1]))&&(a+=M^P>=0?1:-1)}}return(o<-qe||o<qe&&l<-1e-12)^a&1}function hx(t,e,n,i){return function(r){var s=e(r),o=fx(),a=e(o),l=!1,c,u,d,p={point:h,lineStart:x,lineEnd:m,polygonStart:function(){p.point=f,p.lineStart=_,p.lineEnd=v,u=[],c=[]},polygonEnd:function(){p.point=h,p.lineStart=x,p.lineEnd=m,u=ox(u);var S=o5(c,i);u.length?(l||(r.polygonStart(),l=!0),dx(u,l5,S,n,r)):S&&(l||(r.polygonStart(),l=!0),r.lineStart(),n(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),n(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function h(S,R){t(S,R)&&r.point(S,R)}function g(S,R){s.point(S,R)}function x(){p.point=g,s.lineStart()}function m(){p.point=h,s.lineEnd()}function f(S,R){d.push([S,R]),a.point(S,R)}function _(){a.lineStart(),d=[]}function v(){f(d[0][0],d[0][1]),a.lineEnd();var S=a.clean(),R=o.result(),A,T=R.length,P,k,y;if(d.pop(),c.push(d),d=null,!!T){if(S&1){if(k=R[0],(P=k.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),A=0;A<P;++A)r.point((y=k[A])[0],y[1]);r.lineEnd()}return}T>1&&S&2&&R.push(R.pop().concat(R.shift())),u.push(R.filter(a5))}}return p}}function a5(t){return t.length>1}function l5(t,e){return((t=t.x)[0]<0?t[1]-$n-qe:$n-t[1])-((e=e.x)[0]<0?e[1]-$n-qe:$n-e[1])}const W1=hx(function(){return!0},c5,f5,[-Ze,-$n]);function c5(t){var e=NaN,n=NaN,i=NaN,r;return{lineStart:function(){t.lineStart(),r=1},point:function(s,o){var a=s>0?Ze:-Ze,l=vt(s-e);vt(l-Ze)<qe?(t.point(e,n=(n+o)/2>0?$n:-$n),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),t.point(s,n),r=0):i!==a&&l>=Ze&&(vt(e-i)<qe&&(e-=i*qe),vt(s-a)<qe&&(s-=a*qe),n=u5(e,n,s,o),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),r=0),t.point(e=s,n=o),i=a},lineEnd:function(){t.lineEnd(),e=n=NaN},clean:function(){return 2-r}}}function u5(t,e,n,i){var r,s,o=ct(t-n);return vt(o)>qe?ax((ct(e)*(s=ft(i))*ct(n)-ct(i)*(r=ft(e))*ct(t))/(r*s*o)):(e+i)/2}function f5(t,e,n,i){var r;if(t==null)r=n*$n,i.point(-Ze,r),i.point(0,r),i.point(Ze,r),i.point(Ze,0),i.point(Ze,-r),i.point(0,-r),i.point(-Ze,-r),i.point(-Ze,0),i.point(-Ze,r);else if(vt(t[0]-e[0])>qe){var s=t[0]<e[0]?Ze:-Ze;r=n*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function d5(t){var e=ft(t),n=2*Gt,i=e>0,r=vt(e)>qe;function s(u,d,p,h){ux(h,t,n,p,u,d)}function o(u,d){return ft(u)*ft(d)>e}function a(u){var d,p,h,g,x;return{lineStart:function(){g=h=!1,x=1},point:function(m,f){var _=[m,f],v,S=o(m,f),R=i?S?0:c(m,f):S?c(m+(m<0?Ze:-Ze),f):0;if(!d&&(g=h=S)&&u.lineStart(),S!==h&&(v=l(d,_),(!v||$c(d,v)||$c(_,v))&&(_[2]=1)),S!==h)x=0,S?(u.lineStart(),v=l(_,d),u.point(v[0],v[1])):(v=l(d,_),u.point(v[0],v[1],2),u.lineEnd()),d=v;else if(r&&d&&i^S){var A;!(R&p)&&(A=l(_,d,!0))&&(x=0,i?(u.lineStart(),u.point(A[0][0],A[0][1]),u.point(A[1][0],A[1][1]),u.lineEnd()):(u.point(A[1][0],A[1][1]),u.lineEnd(),u.lineStart(),u.point(A[0][0],A[0][1],3)))}S&&(!d||!$c(d,_))&&u.point(_[0],_[1]),d=_,h=S,p=R},lineEnd:function(){h&&u.lineEnd(),d=null},clean:function(){return x|(g&&h)<<1}}}function l(u,d,p){var h=Oo(u),g=Oo(d),x=[1,0,0],m=bu(h,g),f=vc(m,m),_=m[0],v=f-_*_;if(!v)return!p&&u;var S=e*f/v,R=-e*_/v,A=bu(x,m),T=_c(x,S),P=_c(m,R);y0(T,P);var k=A,y=vc(T,k),M=vc(k,k),H=y*y-M*(vc(T,T)-1);if(!(H<0)){var B=zr(H),W=_c(k,(-y-B)/M);if(y0(W,T),W=xh(W),!p)return W;var N=u[0],I=d[0],q=u[1],L=d[1],Z;I<N&&(Z=N,N=I,I=Z);var X=I-N,ne=vt(X-Ze)<qe,ye=ne||X<qe;if(!ne&&L<q&&(Z=q,q=L,L=Z),ye?ne?q+L>0^W[1]<(vt(W[0]-N)<qe?q:L):q<=W[1]&&W[1]<=L:X>Ze^(N<=W[0]&&W[0]<=I)){var Ie=_c(k,(-y+B)/M);return y0(Ie,T),[W,xh(Ie)]}}}function c(u,d){var p=i?t:Ze-t,h=0;return u<-p?h|=1:u>p&&(h|=2),d<-p?h|=4:d>p&&(h|=8),h}return hx(o,a,s,i?[0,-t]:[-Ze,t-Ze])}function h5(t,e,n,i,r,s){var o=t[0],a=t[1],l=e[0],c=e[1],u=0,d=1,p=l-o,h=c-a,g;if(g=n-o,!(!p&&g>0)){if(g/=p,p<0){if(g<u)return;g<d&&(d=g)}else if(p>0){if(g>d)return;g>u&&(u=g)}if(g=r-o,!(!p&&g<0)){if(g/=p,p<0){if(g>d)return;g>u&&(u=g)}else if(p>0){if(g<u)return;g<d&&(d=g)}if(g=i-a,!(!h&&g>0)){if(g/=h,h<0){if(g<u)return;g<d&&(d=g)}else if(h>0){if(g>d)return;g>u&&(u=g)}if(g=s-a,!(!h&&g<0)){if(g/=h,h<0){if(g>d)return;g>u&&(u=g)}else if(h>0){if(g<u)return;g<d&&(d=g)}return u>0&&(t[0]=o+u*p,t[1]=a+u*h),d<1&&(e[0]=o+d*p,e[1]=a+d*h),!0}}}}}var Ma=1e9,yc=-Ma;function p5(t,e,n,i){function r(c,u){return t<=c&&c<=n&&e<=u&&u<=i}function s(c,u,d,p){var h=0,g=0;if(c==null||(h=o(c,d))!==(g=o(u,d))||l(c,u)<0^d>0)do p.point(h===0||h===3?t:n,h>1?i:e);while((h=(h+d+4)%4)!==g);else p.point(u[0],u[1])}function o(c,u){return vt(c[0]-t)<qe?u>0?0:3:vt(c[0]-n)<qe?u>0?2:1:vt(c[1]-e)<qe?u>0?1:0:u>0?3:2}function a(c,u){return l(c.x,u.x)}function l(c,u){var d=o(c,1),p=o(u,1);return d!==p?d-p:d===0?u[1]-c[1]:d===1?c[0]-u[0]:d===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,d=fx(),p,h,g,x,m,f,_,v,S,R,A,T={point:P,lineStart:H,lineEnd:B,polygonStart:y,polygonEnd:M};function P(N,I){r(N,I)&&u.point(N,I)}function k(){for(var N=0,I=0,q=h.length;I<q;++I)for(var L=h[I],Z=1,X=L.length,ne=L[0],ye,Ie,Y=ne[0],ee=ne[1];Z<X;++Z)ye=Y,Ie=ee,ne=L[Z],Y=ne[0],ee=ne[1],Ie<=i?ee>i&&(Y-ye)*(i-Ie)>(ee-Ie)*(t-ye)&&++N:ee<=i&&(Y-ye)*(i-Ie)<(ee-Ie)*(t-ye)&&--N;return N}function y(){u=d,p=[],h=[],A=!0}function M(){var N=k(),I=A&&N,q=(p=ox(p)).length;(I||q)&&(c.polygonStart(),I&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),q&&dx(p,a,N,s,c),c.polygonEnd()),u=c,p=h=g=null}function H(){T.point=W,h&&h.push(g=[]),R=!0,S=!1,_=v=NaN}function B(){p&&(W(x,m),f&&S&&d.rejoin(),p.push(d.result())),T.point=P,S&&u.lineEnd()}function W(N,I){var q=r(N,I);if(h&&g.push([N,I]),R)x=N,m=I,f=q,R=!1,q&&(u.lineStart(),u.point(N,I));else if(q&&S)u.point(N,I);else{var L=[_=Math.max(yc,Math.min(Ma,_)),v=Math.max(yc,Math.min(Ma,v))],Z=[N=Math.max(yc,Math.min(Ma,N)),I=Math.max(yc,Math.min(Ma,I))];h5(L,Z,t,e,n,i)?(S||(u.lineStart(),u.point(L[0],L[1])),u.point(Z[0],Z[1]),q||u.lineEnd(),A=!1):q&&(u.lineStart(),u.point(N,I),A=!1)}_=N,v=I,S=q}return T}}function $1(t,e,n){var i=ao(t,e-qe,n).concat(e);return function(r){return i.map(function(s){return[r,s]})}}function j1(t,e,n){var i=ao(t,e-qe,n).concat(e);return function(r){return i.map(function(s){return[s,r]})}}function m5(){var t,e,n,i,r,s,o,a,l=10,c=l,u=90,d=360,p,h,g,x,m=2.5;function f(){return{type:"MultiLineString",coordinates:_()}}function _(){return ao(gc(i/u)*u,n,u).map(g).concat(ao(gc(a/d)*d,o,d).map(x)).concat(ao(gc(e/l)*l,t,l).filter(function(v){return vt(v%u)>qe}).map(p)).concat(ao(gc(s/c)*c,r,c).filter(function(v){return vt(v%d)>qe}).map(h))}return f.lines=function(){return _().map(function(v){return{type:"LineString",coordinates:v}})},f.outline=function(){return{type:"Polygon",coordinates:[g(i).concat(x(o).slice(1),g(n).reverse().slice(1),x(a).reverse().slice(1))]}},f.extent=function(v){return arguments.length?f.extentMajor(v).extentMinor(v):f.extentMinor()},f.extentMajor=function(v){return arguments.length?(i=+v[0][0],n=+v[1][0],a=+v[0][1],o=+v[1][1],i>n&&(v=i,i=n,n=v),a>o&&(v=a,a=o,o=v),f.precision(m)):[[i,a],[n,o]]},f.extentMinor=function(v){return arguments.length?(e=+v[0][0],t=+v[1][0],s=+v[0][1],r=+v[1][1],e>t&&(v=e,e=t,t=v),s>r&&(v=s,s=r,r=v),f.precision(m)):[[e,s],[t,r]]},f.step=function(v){return arguments.length?f.stepMajor(v).stepMinor(v):f.stepMinor()},f.stepMajor=function(v){return arguments.length?(u=+v[0],d=+v[1],f):[u,d]},f.stepMinor=function(v){return arguments.length?(l=+v[0],c=+v[1],f):[l,c]},f.precision=function(v){return arguments.length?(m=+v,p=$1(s,r,90),h=j1(e,t,m),g=$1(a,o,90),x=j1(i,n,m),f):m},f.extentMajor([[-180,-90+qe],[180,90-qe]]).extentMinor([[-180,-80-qe],[180,80+qe]])}function g5(){return m5()()}const Eh=t=>t;var M0=new gs,wh=new gs,px,mx,Th,Ah,zi={point:jn,lineStart:jn,lineEnd:jn,polygonStart:function(){zi.lineStart=v5,zi.lineEnd=x5},polygonEnd:function(){zi.lineStart=zi.lineEnd=zi.point=jn,M0.add(vt(wh)),wh=new gs},result:function(){var t=M0/2;return M0=new gs,t}};function v5(){zi.point=_5}function _5(t,e){zi.point=gx,px=Th=t,mx=Ah=e}function gx(t,e){wh.add(Ah*t-Th*e),Th=t,Ah=e}function x5(){gx(px,mx)}var ko=1/0,Du=ko,ol=-ko,Lu=ol,Iu={point:y5,lineStart:jn,lineEnd:jn,polygonStart:jn,polygonEnd:jn,result:function(){var t=[[ko,Du],[ol,Lu]];return ol=Lu=-(Du=ko=1/0),t}};function y5(t,e){t<ko&&(ko=t),t>ol&&(ol=t),e<Du&&(Du=e),e>Lu&&(Lu=e)}var Ch=0,Rh=0,Ea=0,Nu=0,Uu=0,lo=0,Ph=0,bh=0,wa=0,vx,_x,Mi,Ei,Vn={point:vs,lineStart:X1,lineEnd:Y1,polygonStart:function(){Vn.lineStart=E5,Vn.lineEnd=w5},polygonEnd:function(){Vn.point=vs,Vn.lineStart=X1,Vn.lineEnd=Y1},result:function(){var t=wa?[Ph/wa,bh/wa]:lo?[Nu/lo,Uu/lo]:Ea?[Ch/Ea,Rh/Ea]:[NaN,NaN];return Ch=Rh=Ea=Nu=Uu=lo=Ph=bh=wa=0,t}};function vs(t,e){Ch+=t,Rh+=e,++Ea}function X1(){Vn.point=S5}function S5(t,e){Vn.point=M5,vs(Mi=t,Ei=e)}function M5(t,e){var n=t-Mi,i=e-Ei,r=zr(n*n+i*i);Nu+=r*(Mi+t)/2,Uu+=r*(Ei+e)/2,lo+=r,vs(Mi=t,Ei=e)}function Y1(){Vn.point=vs}function E5(){Vn.point=T5}function w5(){xx(vx,_x)}function T5(t,e){Vn.point=xx,vs(vx=Mi=t,_x=Ei=e)}function xx(t,e){var n=t-Mi,i=e-Ei,r=zr(n*n+i*i);Nu+=r*(Mi+t)/2,Uu+=r*(Ei+e)/2,lo+=r,r=Ei*t-Mi*e,Ph+=r*(Mi+t),bh+=r*(Ei+e),wa+=r*3,vs(Mi=t,Ei=e)}function yx(t){this._context=t}yx.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:{this._context.moveTo(t,e),this._point=1;break}case 1:{this._context.lineTo(t,e);break}default:{this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Zn);break}}},result:jn};var Dh=new gs,E0,Sx,Mx,Ta,Aa,al={point:jn,lineStart:function(){al.point=A5},lineEnd:function(){E0&&Ex(Sx,Mx),al.point=jn},polygonStart:function(){E0=!0},polygonEnd:function(){E0=null},result:function(){var t=+Dh;return Dh=new gs,t}};function A5(t,e){al.point=Ex,Sx=Ta=t,Mx=Aa=e}function Ex(t,e){Ta-=t,Aa-=e,Dh.add(zr(Ta*Ta+Aa*Aa)),Ta=t,Aa=e}let q1,Fu,K1,Z1;class J1{constructor(e){this._append=e==null?wx:C5(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,n){switch(this._point){case 0:{this._append`M${e},${n}`,this._point=1;break}case 1:{this._append`L${e},${n}`;break}default:{if(this._append`M${e},${n}`,this._radius!==K1||this._append!==Fu){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,K1=i,Fu=this._append,Z1=this._,this._=r}this._+=Z1;break}}}result(){const e=this._;return this._="",e.length?e:null}}function wx(t){let e=1;this._+=t[0];for(const n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function C5(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return wx;if(e!==q1){const n=10**e;q1=e,Fu=function(r){let s=1;this._+=r[0];for(const o=r.length;s<o;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}return Fu}function R5(t,e){let n=3,i=4.5,r,s;function o(a){return a&&(typeof i=="function"&&s.pointRadius(+i.apply(this,arguments)),Xs(a,r(s))),s.result()}return o.area=function(a){return Xs(a,r(zi)),zi.result()},o.measure=function(a){return Xs(a,r(al)),al.result()},o.bounds=function(a){return Xs(a,r(Iu)),Iu.result()},o.centroid=function(a){return Xs(a,r(Vn)),Vn.result()},o.projection=function(a){return arguments.length?(r=a==null?(t=null,Eh):(t=a).stream,o):t},o.context=function(a){return arguments.length?(s=a==null?(e=null,new J1(n)):new yx(e=a),typeof i!="function"&&s.pointRadius(i),o):e},o.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(s.pointRadius(+a),+a),o):i},o.digits=function(a){if(!arguments.length)return n;if(a==null)n=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);n=l}return e===null&&(s=new J1(n)),o},o.projection(t).digits(n).context(e)}function sm(t){return function(e){var n=new Lh;for(var i in t)n[i]=t[i];return n.stream=e,n}}function Lh(){}Lh.prototype={constructor:Lh,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function om(t,e,n){var i=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),i!=null&&t.clipExtent(null),Xs(n,t.stream(Iu)),e(Iu.result()),i!=null&&t.clipExtent(i),t}function Tx(t,e,n){return om(t,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;t.scale(150*o).translate([a,l])},n)}function P5(t,e,n){return Tx(t,[[0,0],e],n)}function b5(t,e,n){return om(t,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];t.scale(150*s).translate([o,a])},n)}function D5(t,e,n){return om(t,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;t.scale(150*s).translate([o,a])},n)}var Q1=16,L5=ft(30*Gt);function ev(t,e){return+e?N5(t,e):I5(t)}function I5(t){return sm({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}function N5(t,e){function n(i,r,s,o,a,l,c,u,d,p,h,g,x,m){var f=c-i,_=u-r,v=f*f+_*_;if(v>4*e&&x--){var S=o+p,R=a+h,A=l+g,T=zr(S*S+R*R+A*A),P=zo(A/=T),k=vt(vt(A)-1)<qe||vt(s-d)<qe?(s+d)/2:Fo(R,S),y=t(k,P),M=y[0],H=y[1],B=M-i,W=H-r,N=_*B-f*W;(N*N/v>e||vt((f*B+_*W)/v-.5)>.3||o*p+a*h+l*g<L5)&&(n(i,r,s,o,a,l,M,H,k,S/=T,R/=T,A,x,m),m.point(M,H),n(M,H,k,S,R,A,c,u,d,p,h,g,x,m))}}return function(i){var r,s,o,a,l,c,u,d,p,h,g,x,m={point:f,lineStart:_,lineEnd:S,polygonStart:function(){i.polygonStart(),m.lineStart=R},polygonEnd:function(){i.polygonEnd(),m.lineStart=_}};function f(P,k){P=t(P,k),i.point(P[0],P[1])}function _(){d=NaN,m.point=v,i.lineStart()}function v(P,k){var y=Oo([P,k]),M=t(P,k);n(d,p,u,h,g,x,d=M[0],p=M[1],u=P,h=y[0],g=y[1],x=y[2],Q1,i),i.point(d,p)}function S(){m.point=f,i.lineEnd()}function R(){_(),m.point=A,m.lineEnd=T}function A(P,k){v(r=P,k),s=d,o=p,a=h,l=g,c=x,m.point=v}function T(){n(d,p,u,h,g,x,s,o,r,a,l,c,Q1,i),m.lineEnd=S,S()}return m}}var U5=sm({point:function(t,e){this.stream.point(t*Gt,e*Gt)}});function F5(t){return sm({point:function(e,n){var i=t(e,n);return this.stream.point(i[0],i[1])}})}function z5(t,e,n,i,r){function s(o,a){return o*=i,a*=r,[e+t*o,n-t*a]}return s.invert=function(o,a){return[(o-e)/t*i,(n-a)/t*r]},s}function tv(t,e,n,i,r,s){if(!s)return z5(t,e,n,i,r);var o=ft(s),a=ct(s),l=o*t,c=a*t,u=o/t,d=a/t,p=(a*n-o*e)/t,h=(a*e+o*n)/t;function g(x,m){return x*=i,m*=r,[l*x-c*m+e,n-c*x-l*m]}return g.invert=function(x,m){return[i*(u*x-d*m+p),r*(h-d*x-u*m)]},g}function Ax(t){return O5(function(){return t})()}function O5(t){var e,n=150,i=480,r=250,s=0,o=0,a=0,l=0,c=0,u,d=0,p=1,h=1,g=null,x=W1,m=null,f,_,v,S=Eh,R=.5,A,T,P,k,y;function M(N){return P(N[0]*Gt,N[1]*Gt)}function H(N){return N=P.invert(N[0],N[1]),N&&[N[0]*ii,N[1]*ii]}M.stream=function(N){return k&&y===N?k:k=U5(F5(u)(x(A(S(y=N)))))},M.preclip=function(N){return arguments.length?(x=N,g=void 0,W()):x},M.postclip=function(N){return arguments.length?(S=N,m=f=_=v=null,W()):S},M.clipAngle=function(N){return arguments.length?(x=+N?d5(g=N*Gt):(g=null,W1),W()):g*ii},M.clipExtent=function(N){return arguments.length?(S=N==null?(m=f=_=v=null,Eh):p5(m=+N[0][0],f=+N[0][1],_=+N[1][0],v=+N[1][1]),W()):m==null?null:[[m,f],[_,v]]},M.scale=function(N){return arguments.length?(n=+N,B()):n},M.translate=function(N){return arguments.length?(i=+N[0],r=+N[1],B()):[i,r]},M.center=function(N){return arguments.length?(s=N[0]%360*Gt,o=N[1]%360*Gt,B()):[s*ii,o*ii]},M.rotate=function(N){return arguments.length?(a=N[0]%360*Gt,l=N[1]%360*Gt,c=N.length>2?N[2]%360*Gt:0,B()):[a*ii,l*ii,c*ii]},M.angle=function(N){return arguments.length?(d=N%360*Gt,B()):d*ii},M.reflectX=function(N){return arguments.length?(p=N?-1:1,B()):p<0},M.reflectY=function(N){return arguments.length?(h=N?-1:1,B()):h<0},M.precision=function(N){return arguments.length?(A=ev(T,R=N*N),W()):zr(R)},M.fitExtent=function(N,I){return Tx(M,N,I)},M.fitSize=function(N,I){return P5(M,N,I)},M.fitWidth=function(N,I){return b5(M,N,I)},M.fitHeight=function(N,I){return D5(M,N,I)};function B(){var N=tv(n,0,0,p,h,d).apply(null,e(s,o)),I=tv(n,i-N[0],r-N[1],p,h,d);return u=cx(a,l,c),T=Sh(e,I),P=Sh(u,T),A=ev(T,R),W()}function W(){return k=y=null,M}return function(){return e=t.apply(this,arguments),M.invert=e.invert&&H,B()}}function k5(t){return function(e,n){var i=ft(e),r=ft(n),s=t(i*r);return s===1/0?[2,0]:[s*r*ct(e),s*ct(n)]}}function Cx(t){return function(e,n){var i=zr(e*e+n*n),r=t(i),s=ct(r),o=ft(r);return[Fo(e*s,i*o),zo(i&&n*s/i)]}}var Rx=k5(function(t){return(t=lx(t))&&t/ct(t)});Rx.invert=Cx(function(t){return t});function B5(){return Ax(Rx).scale(79.4188).clipAngle(180-.001)}function Px(t,e){var n=ft(e),i=1+ft(t)*n;return[n*ct(t)/i,ct(e)/i]}Px.invert=Cx(function(t){return 2*ax(t)});function H5(){return Ax(Px).scale(250).clipAngle(142)}const _s=210,Rn=560;function V5(t,e,n,i){const[r,s]=im(e,n,90,i);let o=10,a=1e5;for(let l=0;l<44;l++){const c=(o+a)/2;t.scale(c);const u=t([r,s]),d=t([e,n]);if(!u||!d){o=c;continue}Math.hypot(u[0]-d[0],u[1]-d[1])<_s?o=c:a=c}return(o+a)/2}function cf(t,e,n,i){const r=t==="stereographic"?H5():B5();r.rotate([-e,-n]).clipAngle(i+.02).precision(.1);const s=V5(r,e,n,i);r.scale(s).translate([Rn/2,Rn/2]);const o=R5(r),a=u=>o(u)??"",l=u=>{const[d,p]=im(e,n,90,u),h=r([d,p]),g=r([e,n]);return!h||!g?0:Math.hypot(h[0]-g[0],h[1]-g[1])},c=l(1);return{projection:r,path:a,label:t==="stereographic"?"立体投影（Stereographic）":"等距方位投影（Azimuthal Equidistant）",radialPixels:l,pxPerDegreeAtCenter:c,scaleRatioAt:u=>l(u)/u/(c||1)}}function am(){return g5()}function Bo(t,e,n,i=128){return rm().center([t,e]).radius(n).precision(.1)()}function lm(t,e){return rm().center([t,e]).radius(90-1e-4).precision(.1)()}function cm(t,e){return rm().center([t,e]).radius(90).precision(.05)()}function w0(t,e,n){const i=t([e,n]);return i?[i[0],i[1]]:null}const Fn=Rn/2;function nv(t){const{kind:e,sky:n,fov:i,horizonClip:r,showHorizon:s}=t,o=Oe.useMemo(()=>cf(e,i.centerRa,i.centerDec,i.radiusDeg),[e,i.centerRa,i.centerDec,i.radiusDeg]),a=Oe.useMemo(()=>{const g=o.path(am()),x=i.radiusDeg<=20?5:i.radiusDeg<=45?10:20,m=[];for(let S=x;S<i.radiusDeg;S+=x)m.push({d:o.path(Bo(i.centerRa,i.centerDec,S)),rDeg:S});const f=o.path(Bo(i.centerRa,i.centerDec,i.radiusDeg)),_=o.path(cm(n.horizon.nadirRa,n.horizon.nadirDec)),v=o.path(lm(n.horizon.nadirRa,n.horizon.nadirDec));return{grat:g,rings:m,fovPath:f,horizon:_,below:v}},[o,i,n.horizon.nadirRa,n.horizon.nadirDec]),l=Oe.useMemo(()=>{const g=[];for(const x of n.targets){if(!x.inFov||!x.passesMag||r&&!x.aboveHorizon)continue;const m=w0(o.projection,x.ra,x.dec);if(!m)continue;const f=Math.max(1.6,Math.min(7,6.2-x.mag*.9)),_=x.kind==="star"?f:Math.max(f,5);g.push({t:x,x:m[0],y:m[1],r:_})}return g},[o,n.targets,r]),c=Oe.useMemo(()=>l.filter(g=>g.t.id===t.selectedId||g.t.id===t.hoverId||g.t.kind!=="star"||g.t.mag<=1.6),[l,t.selectedId,t.hoverId]),u=Oe.useMemo(()=>{const g=m=>m.trim().split(/\s+/).pop()??m,x=[];for(const m of n.horizon.cardinalPoints){const f=w0(o.projection,m.ra,m.dec);f&&x.push({x:f[0],y:f[1],label:g(m.label)})}return x},[o,n.horizon.cardinalPoints]),d=Oe.useMemo(()=>t.annotations.map(g=>{const x=w0(o.projection,g.ra,g.dec);return x?{a:g,x:x[0],y:x[1]}:null}).filter(g=>g!==null),[o,t.annotations]),p=t.selectedId?n.targets.find(g=>g.id===t.selectedId):null,h=o.scaleRatioAt(i.radiusDeg);return D.jsxs("div",{className:"proj-view",children:[D.jsxs("div",{className:"proj-title",children:[D.jsx("strong",{children:o.label}),D.jsxs("span",{className:"proj-sub",children:["中心 ",Yo(i.centerRa)," / ",qo(i.centerDec)," · 视场角半径 ",i.radiusDeg.toFixed(1),"°"]})]}),D.jsxs("svg",{width:Rn,height:Rn,viewBox:`0 0 ${Rn} ${Rn}`,className:"proj-svg",onMouseLeave:()=>t.onHover(null),children:[D.jsx("defs",{children:D.jsx("clipPath",{id:`disc-${e}`,children:D.jsx("circle",{cx:Fn,cy:Fn,r:_s})})}),D.jsx("circle",{cx:Fn,cy:Fn,r:_s,fill:"#0b1020",stroke:"#3b4a6b",strokeWidth:1.5}),D.jsxs("g",{clipPath:`url(#disc-${e})`,children:[D.jsx("path",{d:a.grat,fill:"none",stroke:"#27406a",strokeWidth:.6,opacity:.9}),a.rings.map(g=>D.jsx("path",{d:g.d,fill:"none",stroke:"#3d6ea5",strokeWidth:.7,strokeDasharray:"2 3"},g.rDeg)),s&&D.jsxs(D.Fragment,{children:[D.jsx("path",{d:a.below,fill:"#5a1f24",opacity:.35}),D.jsx("path",{d:a.horizon,fill:"none",stroke:"#ff5d5d",strokeWidth:1.6})]}),D.jsx("path",{d:a.fovPath,fill:"none",stroke:"#57e389",strokeWidth:1.4,opacity:.9}),s&&u.map((g,x)=>D.jsx("text",{x:g.x,y:g.y-5,fill:"#ff9a9a",fontSize:11,textAnchor:"middle",children:g.label},x)),l.map(({t:g,x,y:m,r:f})=>{const _=g.id===t.selectedId,v=g.id===t.hoverId,S=!g.aboveHorizon,R=g.kind==="sun"?"#ffd27d":g.kind==="moon"?"#dfe6f2":g.kind==="planet"?"#9ecbff":"#ffffff";return D.jsxs("g",{transform:`translate(${x},${m})`,className:"star-marker",onMouseEnter:()=>t.onHover(g.id),onClick:A=>{A.stopPropagation(),t.onSelect(g.id)},children:[_&&D.jsx("circle",{r:f+6,fill:"none",stroke:"#ffd54a",strokeWidth:2}),v&&!_&&D.jsx("circle",{r:f+4,fill:"none",stroke:"#9fd0ff",strokeWidth:1.2}),g.kind==="star"?D.jsx("circle",{r:f,fill:R,opacity:S&&!r?.35:1}):g.kind==="planet"?D.jsx("rect",{x:-f,y:-f,width:f*2,height:f*2,fill:R}):D.jsx("polygon",{points:`0,${-f} ${f},0 0,${f} ${-f},0`,fill:R})]},g.id)}),c.map(({t:g,x,y:m})=>D.jsx("text",{x:x+7,y:m+3,fill:"#cfe0ff",fontSize:10.5,className:"proj-label",children:g.name},`l-${g.id}`)),d.map(({a:g,x,y:m})=>D.jsxs("g",{transform:`translate(${x},${m})`,children:[D.jsx("circle",{r:5,fill:"none",stroke:g.color,strokeWidth:1.6}),D.jsx("text",{x:8,y:4,fill:g.color,fontSize:11,children:g.text})]},g.uuid)),D.jsxs("g",{stroke:"#8aa0c8",strokeWidth:1,children:[D.jsx("line",{x1:Fn-7,y1:Fn,x2:Fn+7,y2:Fn}),D.jsx("line",{x1:Fn,y1:Fn-7,x2:Fn,y2:Fn+7})]})]})]}),D.jsxs("div",{className:"proj-foot",children:[D.jsxs("span",{children:["中心比例尺 ≈ ",o.pxPerDegreeAtCenter.toFixed(1)," px/°",e==="stereographic"?`（立体投影边缘径向外放 ×${h.toFixed(2)}，图上距离≠角距）`:"（等距方位：径向 r 与角距成正比，同心圆为等角距参考环）"]}),p&&D.jsxs("span",{className:"proj-foot-sel",children:[p.name,"：距视场中心 ",p.sepFromCenter.toFixed(2),"°（球面角距）· 高度 ",p.alt.toFixed(1),"°"]})]})]})}const zu=[{id:"beijing",name:"北京（古观象台附近）",latitude:39.9042,longitude:116.4074,height:50},{id:"shanghai",name:"上海（佘山天文台）",latitude:31.0989,longitude:121.1958,height:100},{id:"lhasa",name:"拉萨",latitude:29.652,longitude:91.1721,height:3650},{id:"sanya",name:"三亚",latitude:18.2528,longitude:109.512,height:10},{id:"mohe",name:"漠河",latitude:53.4722,longitude:122.3464,height:400},{id:"london",name:"伦敦（格林威治）",latitude:51.4769,longitude:-5e-4,height:50},{id:"sidingspring",name:"赛丁泉天文台（澳大利亚）",latitude:-31.2733,longitude:149.0644,height:1165},{id:"custom",name:"自定义位置",latitude:0,longitude:0,height:0}],jc=[{id:"polar",label:"极区天区",description:"以北天极为中心的视场，检查极区在球面与两种方位投影下的表现；含北极星、小熊座、仙后座。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:0,centerDecDeg:90,fovRadiusDeg:35,magLimit:5,horizonClip:!1,suggestSelectId:"polaris"},{id:"zero",label:"赤经跨零点",description:"视场中心 RA 358°，边界跨过 0h 线（飞马座四边形 / 仙女座 / 仙后座），不应出现横贯整图的连线。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:358,centerDecDeg:30,fovRadiusDeg:30,magLimit:5,horizonClip:!1,suggestSelectId:"alpheratz"},{id:"horizon",label:"地平线附近目标",description:"北京 2026-09-30 21:00（UTC+8），大角星位于正西偏北、地平高度约 0.1°；开启地平线裁切可见取舍。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:213.9,centerDecDeg:19.2,fovRadiusDeg:30,magLimit:4.5,horizonClip:!1,suggestSelectId:"arcturus"}];function G5(t){var u,d,p;const[e,n]=Oe.useState(""),[i,r]=Oe.useState(""),[s,o]=Oe.useState("#ffd54a"),a=h=>t.onChangeFov({...t.fov,centerRa:(h%360+360)%360}),l=h=>t.onChangeFov({...t.fov,centerDec:Math.max(-90,Math.min(90,h))}),c=h=>t.onChangeFov({...t.fov,radiusDeg:Math.max(1,Math.min(90,h))});return D.jsxs("div",{className:"controls",children:[D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"演示场景"}),D.jsx("div",{className:"btn-row",children:jc.map(h=>D.jsx("button",{className:"btn scenario",onClick:()=>t.onApplyScenario(h.id),title:h.description,children:h.label},h.id))}),D.jsx("p",{className:"hint",title:(u=jc.find(h=>h.id==="horizon"))==null?void 0:u.description,children:(d=jc.find(h=>h.id==="horizon"))==null?void 0:d.description})]}),D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"观测位置与时间"}),D.jsxs("label",{children:["位置",D.jsx("select",{value:t.site.id,onChange:h=>{const g=zu.find(x=>x.id===h.target.value);t.onChangeSite({...g})},children:zu.map(h=>D.jsx("option",{value:h.id,children:h.name},h.id))})]}),t.site.id==="custom"&&D.jsxs("div",{className:"num-row",children:[D.jsxs("label",{children:["纬度°",D.jsx("input",{type:"number",value:t.site.latitude,step:1e-4,onChange:h=>t.onChangeSite({...t.site,latitude:Number(h.target.value)})})]}),D.jsxs("label",{children:["经度°",D.jsx("input",{type:"number",value:t.site.longitude,step:1e-4,onChange:h=>t.onChangeSite({...t.site,longitude:Number(h.target.value)})})]})]}),D.jsxs("label",{children:["时间（UTC，非本地时区）",D.jsx("input",{type:"datetime-local",step:1,value:t.timeUtcIso.slice(0,19),onChange:h=>t.onChangeTime(h.target.value+"Z")})]}),D.jsx("p",{className:"hint",children:"北京时间 = UTC + 8 小时。默认 2026-09-30 13:00 UTC（北京 21:00，大角星近地平）。"})]}),D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"视场（J2000 赤道坐标）"}),D.jsxs("div",{className:"num-row",children:[D.jsxs("label",{children:["中心赤经°",D.jsx("input",{type:"number",value:T0(t.fov.centerRa),min:0,max:360,step:.1,onChange:h=>a(Number(h.target.value))})]}),D.jsxs("label",{children:["中心赤纬°",D.jsx("input",{type:"number",value:T0(t.fov.centerDec),min:-90,max:90,step:.1,onChange:h=>l(Number(h.target.value))})]}),D.jsxs("label",{children:["角半径°",D.jsx("input",{type:"number",value:T0(t.fov.radiusDeg),min:1,max:90,step:.5,onChange:h=>c(Number(h.target.value))})]})]}),D.jsx("p",{className:"hint",children:"视场边界是围绕中心的球面小圆；中心在极点时赤经自动失效。"}),D.jsxs("div",{className:"save-row",children:[D.jsx("input",{placeholder:"命名当前视场…",value:e,onChange:h=>n(h.target.value)}),D.jsx("button",{className:"btn",disabled:!e.trim(),onClick:()=>{t.onSaveFov(e.trim()),n("")},children:"存视场"})]}),t.savedFovs.length>0&&D.jsx("ul",{className:"store-list",children:t.savedFovs.slice(0,6).map(h=>D.jsxs("li",{children:[D.jsx("button",{className:"link-btn",title:`RA ${h.fov.centerRa.toFixed(1)}° Dec ${h.fov.centerDec.toFixed(1)}° r ${h.fov.radiusDeg}°`,onClick:()=>t.onLoadFov(h),children:h.name}),D.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteFov(h.uuid),children:"×"})]},h.uuid))})]}),D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"筛选（两条相互独立）"}),D.jsxs("label",{className:"range-label",children:["星等上限（仅恒星）：≤ ",t.magLimit.toFixed(1),D.jsx("input",{type:"range",min:-2,max:6,step:.1,value:t.magLimit,onChange:h=>t.onChangeMag(Number(h.target.value))})]}),D.jsxs("label",{className:"check",children:[D.jsx("input",{type:"checkbox",checked:t.horizonClip,onChange:h=>t.onToggleHorizonClip(h.target.checked)}),"地平线裁切：仅显示地平以上目标"]}),D.jsxs("label",{className:"check",children:[D.jsx("input",{type:"checkbox",checked:t.showHorizon,onChange:h=>t.onToggleShowHorizon(h.target.checked)}),"显示地平圈与地平以下区域"]}),D.jsxs("label",{className:"check",children:[D.jsx("input",{type:"checkbox",checked:t.showGraticule,onChange:h=>t.onToggleGraticule(h.target.checked)}),"显示 J2000 经纬网"]})]}),D.jsxs("section",{className:"ctl-block",children:[D.jsx("h3",{children:"批注（绑定天球坐标，存 IndexedDB）"}),D.jsxs("div",{className:"save-row",children:[D.jsx("input",{type:"color",value:s,onChange:h=>o(h.target.value)}),D.jsx("input",{placeholder:"批注文字（锚定当前选中目标）",value:i,onChange:h=>r(h.target.value)}),D.jsx("button",{className:"btn",disabled:!i.trim(),onClick:()=>{t.onAddAnnotation(i.trim(),s),r("")},children:"添加"})]}),t.annotations.length>0&&D.jsx("ul",{className:"store-list",children:t.annotations.map(h=>D.jsxs("li",{children:[D.jsx("span",{className:"dot",style:{background:h.color}}),D.jsx("button",{className:"link-btn",onClick:()=>t.onChangeFov({centerRa:h.ra,centerDec:h.dec,radiusDeg:Math.max(10,t.fov.radiusDeg)}),title:"把视场中心移到批注位置",children:h.text}),D.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteAnnotation(h.uuid),children:"×"})]},h.uuid))})]}),D.jsxs("section",{className:"ctl-block handout-block",children:[D.jsx("h3",{children:"离线讲义编排（打印 / 导出）"}),D.jsxs("p",{className:"hint",children:["版式只把选择保存在本地（引用 + 投影）；星图与坐标一律按",D.jsx("b",{children:"当前可重算视图"}),"生成，不缓存快照、不拉取网络图层。"]}),D.jsxs("label",{children:["引用已保存视场",D.jsxs("select",{value:t.handoutDraft.fovUuid??"",onChange:h=>t.onChangeHandoutDraft({fovUuid:h.target.value||null}),children:[D.jsx("option",{value:"",children:"不引用（使用当前视场）"}),t.savedFovs.map(h=>D.jsx("option",{value:h.uuid,children:h.name},h.uuid))]})]}),t.handoutDraft.fovUuid&&(()=>{const h=t.savedFovs.find(g=>g.uuid===t.handoutDraft.fovUuid);return h?D.jsxs("p",{className:"hint",children:[D.jsx("button",{className:"link-btn-inline",onClick:()=>t.onLoadFov(h),children:"载入该视场"}),"后再生成，星图即与引用一致；否则星图按当前视图绘制。"]}):D.jsxs("p",{className:"hint handout-missing",children:["原视场已删除（未复原内容）。",D.jsx("button",{className:"link-btn-inline",onClick:()=>t.onChangeHandoutDraft({fovUuid:null}),children:"移除引用"})]})})(),D.jsxs("label",{children:["主目标（取自当前视场，含地平以下）",D.jsxs("select",{value:t.handoutDraft.targetId??"",onChange:h=>t.onChangeHandoutDraft({targetId:h.target.value||null}),children:[D.jsx("option",{value:"",children:"不指定主目标"}),t.handoutTargets.map(h=>D.jsxs("option",{value:h.id,children:[h.name,h.aboveHorizon?"":"（地平以下·不可见）",h.kind==="star"?` · ${h.mag.toFixed(1)}等`:""]},h.id))]})]}),t.handoutDraft.targetId&&!t.handoutTargets.some(h=>h.id===t.handoutDraft.targetId)&&D.jsxs("p",{className:"hint handout-missing",children:["目标不在当前视图（视场/星等/地平筛选外），讲义不复原其坐标。",D.jsx("button",{className:"link-btn-inline",onClick:()=>t.onChangeHandoutDraft({targetId:null}),children:"移除引用"})]}),D.jsx("div",{className:"handout-anno-head",children:"选用现有批注："}),t.annotations.length===0?D.jsx("p",{className:"hint",children:"还没有批注。"}):D.jsx("ul",{className:"handout-anno-list",children:t.annotations.map(h=>{const g=t.handoutDraft.annotationUuids.includes(h.uuid);return D.jsx("li",{children:D.jsxs("label",{className:"check",children:[D.jsx("input",{type:"checkbox",checked:g,onChange:x=>t.onChangeHandoutDraft({annotationUuids:x.target.checked?[...t.handoutDraft.annotationUuids,h.uuid]:t.handoutDraft.annotationUuids.filter(m=>m!==h.uuid)})}),D.jsx("span",{className:"dot",style:{background:h.color}}),D.jsx("span",{className:"handout-anno-text",children:h.text})]})},h.uuid)})}),(()=>{const h=t.handoutDraft.annotationUuids.filter(g=>!t.annotations.some(x=>x.uuid===g));return h.length===0?null:D.jsxs("p",{className:"hint handout-missing",children:[h.length," 条原批注已删除，未凭空复原。",D.jsx("button",{className:"link-btn-inline",onClick:()=>t.onChangeHandoutDraft({annotationUuids:t.handoutDraft.annotationUuids.filter(g=>!h.includes(g))}),children:"从版式移除"})]})})(),D.jsxs("label",{className:"check",children:[D.jsx("input",{type:"radio",name:"handout-proj",checked:t.handoutDraft.projection==="stereographic",onChange:()=>t.onChangeHandoutDraft({projection:"stereographic"})}),"立体投影 Stereographic"]}),D.jsxs("label",{className:"check",children:[D.jsx("input",{type:"radio",name:"handout-proj",checked:t.handoutDraft.projection==="equidistant",onChange:()=>t.onChangeHandoutDraft({projection:"equidistant"})}),"等距方位投影 Azimuthal Equidistant"]}),D.jsxs("div",{className:"save-row",children:[D.jsx("input",{placeholder:"版式名称（如：科普活动讲义A）",value:t.handoutDraft.name,onChange:h=>t.onChangeHandoutDraft({name:h.target.value})}),D.jsx("button",{className:"btn",disabled:!t.handoutDraft.name.trim(),onClick:t.onSaveHandout,children:"存版式"})]}),t.savedHandouts.length>0&&D.jsx("ul",{className:"store-list",children:t.savedHandouts.map(h=>D.jsxs("li",{children:[D.jsxs("button",{className:"link-btn",onClick:()=>t.onLoadHandout(h),title:`${h.annotationUuids.length} 条批注 · ${h.projection}`,children:[h.name,D.jsx("span",{className:"handout-layout-tag",children:h.projection==="stereographic"?"立体":"等距"})]}),D.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteHandout(h.uuid),children:"×"})]},h.uuid))}),D.jsx("button",{className:"btn handout-generate",onClick:t.onOpenHandout,children:"生成可打印讲义（当前视图）"}),((p=t.handoutResolved)==null?void 0:p.hasMissingRefs)&&D.jsx("p",{className:"hint handout-missing",children:"当前版式存在引用缺失，讲义页会如实列出且不复原内容。"})]})]})}function T0(t){return Math.round(t*1e3)/1e3}const W5={star:"恒星（星表 J2000.0）",sun:"太阳（动态视位置）",moon:"月球（动态视位置）",planet:"行星（动态视位置）"};function $5({target:t,centerAlt:e,centerAz:n,gmstHours:i,julianDay:r}){return D.jsxs("div",{className:"info-panel",children:[t?D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"info-head",children:[D.jsx("span",{className:"info-name",children:t.name}),D.jsx("span",{className:"info-desig",children:t.designation}),D.jsx("span",{className:"info-kind",children:W5[t.kind]})]}),D.jsxs("div",{className:"info-grid",children:[D.jsxs("div",{children:[D.jsx("label",{children:"赤经 RA (J2000)"}),D.jsx("strong",{children:Yo(t.ra)}),D.jsxs("span",{className:"sub",children:[t.ra.toFixed(4),"°"]})]}),D.jsxs("div",{children:[D.jsx("label",{children:"赤纬 Dec (J2000)"}),D.jsx("strong",{children:qo(t.dec)}),D.jsxs("span",{className:"sub",children:[t.dec.toFixed(4),"°"]})]}),D.jsxs("div",{children:[D.jsx("label",{children:"方位角 A（北=0 顺时针）"}),D.jsxs("strong",{children:[t.az.toFixed(2),"°"]}),D.jsxs("span",{className:"sub",children:[Ru(t.az),"方"]})]}),D.jsxs("div",{children:[D.jsx("label",{children:"地平高度 h"}),D.jsxs("strong",{className:t.alt>=0?"up":"down",children:[t.alt.toFixed(2),"°"]}),D.jsx("span",{className:"sub",children:t.alt>=0?"地平以上":"地平以下"})]}),D.jsxs("div",{children:[D.jsx("label",{children:"视星等"}),D.jsx("strong",{children:t.mag.toFixed(2)}),t.kind==="moon"&&t.phaseFraction!==void 0&&D.jsxs("span",{className:"sub",children:["月相照亮 ",(t.phaseFraction*100).toFixed(0),"%"]})]}),D.jsxs("div",{children:[D.jsx("label",{children:"距视场中心（球面角距）"}),D.jsxs("strong",{children:[t.sepFromCenter.toFixed(3),"°"]}),D.jsx("span",{className:"sub",children:"haversine 计算，非图上像素距离"})]})]})]}):D.jsxs("div",{className:"info-empty",children:["点击球面视图或右侧任一投影图中的星点，即可在三种视图中定位同一目标。",D.jsxs("ul",{children:[D.jsx("li",{children:"圆形＝恒星，方形＝行星，菱形＝太阳/月球"}),D.jsx("li",{children:"绿色圆＝视场边界，红色线＝地平圈，蓝色虚线＝等角距参考环"})]})]}),D.jsxs("div",{className:"info-meta",children:["视场中心：高度 ",e.toFixed(2),"°，方位 ",n.toFixed(2),"°（",Ru(n),"）· GMST ",i.toFixed(4)," h · JD(TT) ",r.toFixed(4)]})]})}const j5={star:"恒星（星表 J2000.0）",sun:"太阳（动态视位置）",moon:"月球（动态视位置）",planet:"行星（动态视位置）"};function X5(t,e){return Math.abs(t.centerRa-e.centerRa)<1e-9&&Math.abs(t.centerDec-e.centerDec)<1e-9&&Math.abs(t.radiusDeg-e.radiusDeg)<1e-9}function Y5(t,e){const n=t.projection,i=n==="stereographic"?"立体投影（Stereographic）":"等距方位投影（Azimuthal Equidistant）",r=[];let s=null,o=!1,a=!1;t.fovUuid&&(s=e.savedFovs.find(p=>p.uuid===t.fovUuid)??null,s?X5(s.fov,e.fov)||(a=!0):(o=!0,r.push({kind:"fov",uuid:t.fovUuid})));let l=null,c=!1;t.targetId&&(l=e.sky.targets.find(p=>p.id===t.targetId)??null,l||(c=!0,r.push({kind:"target",uuid:t.targetId})));const u=!!l&&l.inFov,d=[];for(const p of t.annotationUuids){const h=e.annotations.find(x=>x.uuid===p);if(!h){r.push({kind:"annotation",uuid:p});continue}const g=vh(e.fov.centerRa,e.fov.centerDec,h.ra,h.dec);d.push({annotation:h,inFov:g<=e.fov.radiusDeg})}return{layout:t,kind:n,projectionLabel:i,sky:e.sky,fov:e.fov,meta:e.meta,fovMissing:o,fovMismatch:a,savedFov:s,target:l,targetMissing:c,annotations:d,missing:r,targetInFov:u,hasMissingRefs:r.length>0}}const gi=794,ha=1123,zn=40,Xc=114,co=470,pa=(gi-co)/2,q5=22,iv=560,Ho="#16233d",Wt="#5a6b88",ll="#9db2d4",K5="#ffffff",Z5="#f4f7fc",Ih="#c0392b",bx="#1e8449";function Qt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J5(t){return t.replace(".000Z","Z").replace("T"," ")}function Q5(t){const e=Date.parse(t);return Number.isNaN(e)?"—":`${new Date(e+8*3600*1e3).toISOString().replace(".000Z","Z").replace("T"," ")}（UTC+8）`}function eA(t,e){const n=[];let i="",r=0;for(const s of t){const o=/[　-鿿＀-￯]/.test(s)?12:6.4;r+o>e&&i?(n.push(i),i=s,r=o):(i+=s,r+=o)}return i&&n.push(i),n}function tA(t){return t==="stereographic"?"本图为立体投影（Stereographic，等角方位投影）：自球面一点透视投影到切平面，保持局部角度（小范围形状）不变；面积与径向比例尺随离中心距离迅速放大，视场边缘被外放。图上像素距离不代表真实角距，蓝色等角距参考环在图上的间距向外递增。":"本图为等距方位投影（Azimuthal Equidistant）：自投影中心起算的径向距离与真实球面角距成正比（r ∝ θ），蓝色等角距参考环在图上等间距；但垂直径向的方向存在拉伸、面积随离中心距离增大而变形，只有沿半径方向可用图上距离量角距。"}function nA(t){const e=iA(t),n=Xc+co+q5,i=14,r=(gi-zn*2-i)/2,s=zn,o=zn+r+i,a=rA(t,s,n,r),l=sA(t,o,n,r),c=Math.max(a.height,l.height),u=n+c+10,d=oA(t,s,u,gi-zn*2),p=u+d.height+10,h=aA(t,s,p,gi-zn*2),g=p+h.height+10,m=t.hasMissingRefs||t.fovMismatch?lA(t,s,g,gi-zn*2):null,f=`星图讲义 · ${t.projectionLabel}`,_=`视场中心 ${Yo(t.fov.centerRa)} / ${qo(t.fov.centerDec)}（J2000.0），球面角半径 ${t.fov.radiusDeg.toFixed(1)}°`,v=ha-30;return`<svg xmlns="http://www.w3.org/2000/svg" width="${gi}" height="${ha}" viewBox="0 0 ${gi} ${ha}" font-family="'PingFang SC','Microsoft YaHei','Noto Sans CJK SC',sans-serif">
<rect width="${gi}" height="${ha}" fill="${K5}"/>
<rect x="14" y="14" width="${gi-28}" height="${ha-28}" fill="none" stroke="${ll}" stroke-width="1"/>

<text x="${zn}" y="44" font-size="21" font-weight="bold" fill="${Ho}">${Qt(f)}</text>
<text x="${zn}" y="68" font-size="11.5" fill="${Wt}">${Qt(_)}；角距一律按球面（haversine）计算，图上像素距离不充当实际角距。</text>
<text x="${zn}" y="86" font-size="11" fill="${Wt}">本页由本地星图工具离线生成，无任何网络图层；星表为 J2000 近似值（约 0.01°），太阳系天体为含光行差的 J2000 视位置，仅供科普制图。</text>
<line x1="${zn}" y1="98" x2="${gi-zn}" y2="98" stroke="${ll}" stroke-width="0.8"/>

${e}

${a.svg}
${l.svg}
${d.svg}
${h.svg}
${m?m.svg:""}

<text x="${zn}" y="${v}" font-size="10" fill="${Wt}">本地星图工具离线讲义 · 数据随当前视图实时重算（无快照、无网络）· 地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正</text>
</svg>`}function iA(t){var x;const e=cf(t.kind,t.fov.centerRa,t.fov.centerDec,t.fov.radiusDeg),n=iv/2,i=co/iv,r=e.path(am()),s=t.fov.radiusDeg<=20?5:t.fov.radiusDeg<=45?10:20,o=[];for(let m=s;m<t.fov.radiusDeg;m+=s)o.push(e.path(Bo(t.fov.centerRa,t.fov.centerDec,m)));const a=e.path(cm(t.sky.horizon.nadirRa,t.sky.horizon.nadirDec)),l=e.path(lm(t.sky.horizon.nadirRa,t.sky.horizon.nadirDec)),c=e.path(Bo(t.fov.centerRa,t.fov.centerDec,t.fov.radiusDeg)),u=[];for(const m of t.sky.targets){if(!m.inFov||!m.passesMag||t.meta.horizonClip&&!m.aboveHorizon)continue;const f=e.projection([m.ra,m.dec]);if(!f)continue;const _=Math.max(1.8,Math.min(7,6.2-m.mag*.9)),v=((x=t.target)==null?void 0:x.id)===m.id,S=!m.aboveHorizon,R=S&&!t.meta.horizonClip?.32:1;let A;m.kind==="star"?A=`<circle cx="${f[0].toFixed(1)}" cy="${f[1].toFixed(1)}" r="${_.toFixed(1)}" fill="#ffffff" opacity="${R}"/>`:m.kind==="planet"?A=`<rect x="${(f[0]-_).toFixed(1)}" y="${(f[1]-_).toFixed(1)}" width="${(_*2).toFixed(1)}" height="${(_*2).toFixed(1)}" fill="#9ecbff" opacity="${R}"/>`:A=`<polygon points="${f[0].toFixed(1)},${(f[1]-_).toFixed(1)} ${(f[0]+_).toFixed(1)},${f[1].toFixed(1)} ${f[0].toFixed(1)},${(f[1]+_).toFixed(1)} ${(f[0]-_).toFixed(1)},${f[1].toFixed(1)}" fill="${m.kind==="sun"?"#ffd27d":"#dfe6f2"}" opacity="${R}"/>`;let T="";(v||m.kind!=="star"||m.mag<=1.6)&&(T=`<text x="${(f[0]+7).toFixed(1)}" y="${(f[1]+3).toFixed(1)}" font-size="10.5" fill="#cfe0ff" paint-order="stroke" stroke="#0b1020" stroke-width="3">${Qt(m.name)}${S?"（地平下）":""}</text>`);const P=v?S?`<circle cx="${f[0].toFixed(1)}" cy="${f[1].toFixed(1)}" r="${(_+6).toFixed(1)}" fill="none" stroke="#e74c3c" stroke-width="2.2" stroke-dasharray="4 3"/>`:`<circle cx="${f[0].toFixed(1)}" cy="${f[1].toFixed(1)}" r="${(_+6).toFixed(1)}" fill="none" stroke="#d4a017" stroke-width="2.2"/>`:"";u.push(P+A+T)}const d=t.annotations.filter(m=>m.inFov).map(({annotation:m})=>{const f=e.projection([m.ra,m.dec]);return f?`<circle cx="${f[0].toFixed(1)}" cy="${f[1].toFixed(1)}" r="5" fill="none" stroke="${m.color}" stroke-width="1.6"/><text x="${(f[0]+8).toFixed(1)}" y="${(f[1]+4).toFixed(1)}" font-size="11" fill="${m.color}" paint-order="stroke" stroke="#0b1020" stroke-width="3">${Qt(m.text)}</text>`:""}).join(`
`),p=e.scaleRatioAt(t.fov.radiusDeg),h=Xc+co+14,g=t.kind==="stereographic"?`星图（${Qt(t.projectionLabel)}）· 中心比例尺 ≈ ${e.pxPerDegreeAtCenter.toFixed(1)} px/°，边缘径向外放 ×${p.toFixed(2)}；绿圆＝视场边界，蓝虚线环＝等角距参考环，红线＝地平圈，红色半透明区＝地平以下。`:`星图（${Qt(t.projectionLabel)}）· 中心比例尺 ≈ ${e.pxPerDegreeAtCenter.toFixed(1)} px/°，径向 r 与球面角距成正比；绿圆＝视场边界，蓝虚线环＝等角距参考环（图上等间距），红线＝地平圈，红色半透明区＝地平以下。`;return`<rect x="${pa}" y="${Xc}" width="${co}" height="${co}" fill="#0b1020" stroke="${ll}" stroke-width="1" rx="4"/>
<g transform="translate(${pa},${Xc}) scale(${i})">
<circle cx="${n}" cy="${n}" r="${_s}" fill="#0b1020"/>
<clipPath id="hd-disc"><circle cx="${n}" cy="${n}" r="${_s}"/></clipPath>
<g clip-path="url(#hd-disc)">
<path d="${r}" fill="none" stroke="#27406a" stroke-width="0.6"/>
${o.map(m=>`<path d="${m}" fill="none" stroke="#3d6ea5" stroke-width="0.7" stroke-dasharray="2 3"/>`).join(`
`)}
<path d="${l}" fill="#c0392b" opacity="0.22"/>
<path d="${a}" fill="none" stroke="#e74c3c" stroke-width="1.6"/>
<path d="${c}" fill="none" stroke="#27ae60" stroke-width="1.4"/>
${u.join(`
`)}
${d}
<g stroke="#8aa0c8" stroke-width="1"><line x1="${n-7}" y1="${n}" x2="${n+7}" y2="${n}"/><line x1="${n}" y1="${n-7}" x2="${n}" y2="${n+7}"/></g>
</g>
</g>
<text x="${pa}" y="${h}" font-size="10.5" fill="${Wt}">${g}</text>${t.meta.horizonClip?`
<text x="${pa}" y="${h+14}" font-size="10" fill="${bx}">当前视图开启地平线裁切：地平以下目标不绘入星图；主目标若在地平以下，信息区仍明确标注「不可见」。</text>`:`
<text x="${pa}" y="${h+14}" font-size="10" fill="${Wt}">当前视图关闭地平线裁切：地平以下目标半透明显示并在名称后注「地平下」，不得作为可见目标使用。</text>`}`}function Ml(t,e,n,i,r,s){return`<rect x="${t}" y="${e}" width="${n}" height="${i}" rx="6" fill="${Z5}" stroke="${ll}" stroke-width="0.8"/>
<text x="${t+12}" y="${e+22}" font-size="12.5" font-weight="bold" fill="${Ho}">${Qt(r)}</text>
<line x1="${t+10}" y1="${e+30}" x2="${t+n-10}" y2="${e+30}" stroke="${ll}" stroke-width="0.6"/>
${s}`}function Oi(t,e,n,i,r=Ho,s=12){return`<text x="${t}" y="${e}" font-size="10.5" fill="${Wt}">${Qt(n)}</text><text x="${t}" y="${e+16}" font-size="${s}" font-weight="bold" fill="${r}">${Qt(i)}</text>`}function rA(t,e,n,i){let s;if(!t.layout.targetId)s=`<text x="${e+12}" y="${n+60}" font-size="12" fill="${Wt}">本讲义未指定主目标。</text><text x="${e+12}" y="${n+82}" font-size="11" fill="${Wt}">可在编排区从当前视场目标中选择一个；坐标将随当前视图实时重算。</text>`;else if(t.targetMissing||!t.target)s=`<text x="${e+12}" y="${n+56}" font-size="12" fill="${Ih}">指定目标当前无法在视图中解析。</text>
<text x="${e+12}" y="${n+78}" font-size="11" fill="${Wt}">目标 id：${Qt(t.layout.targetId)}</text>
<text x="${e+12}" y="${n+98}" font-size="11" fill="${Wt}">可能因星等/地平线筛选或不在任何数据源中而缺失；讲义不凭空复原其坐标。</text>
<text x="${e+12}" y="${n+118}" font-size="11" fill="${Wt}">请改选目标，或在编排区移除该引用。</text>`;else{const o=t.target,a=o.aboveHorizon,l=a?`可见 · 高度 ${o.alt.toFixed(2)}°，方位 ${o.az.toFixed(2)}°（${Ru(o.az)}方）`:`地平以下 · 不可见 · 高度 ${o.alt.toFixed(2)}°，方位 ${o.az.toFixed(2)}°（${Ru(o.az)}方）`;s=`${Oi(e+12,n+46,"目标",`${o.name}（${o.designation}）`)}
${Oi(e+i/2,n+46,"类型",j5[o.kind],Wt,10.5)}
${Oi(e+12,n+90,"赤经 RA（J2000.0）",`${Yo(o.ra)} ＝ ${o.ra.toFixed(4)}°`)}
${Oi(e+i/2,n+90,"赤纬 Dec（J2000.0）",`${qo(o.dec)} ＝ ${o.dec.toFixed(4)}°`)}
<text x="${e+12}" y="${n+138}" font-size="12.5" font-weight="bold" fill="${a?bx:Ih}">${Qt(l)}</text>
<text x="${e+12}" y="${n+158}" font-size="10.5" fill="${Wt}">视星等 ${o.mag.toFixed(2)} · 距视场中心球面角距 ${o.sepFromCenter.toFixed(2)}°${t.targetInFov?"":"（目标在当前视场圆外，星图中不绘出）"}</text>`}return{svg:Ml(e,n,i,172,"① 主目标 · J2000 坐标与可见性",s),height:172}}function sA(t,e,n,i){const r=t.meta,s=172,o=`${Oi(e+12,n+46,"观测台站",r.site.name)}
${Oi(e+i/2,n+46,"海拔",`${r.site.height} m`,Wt,11)}
${Oi(e+12,n+90,"纬度（北纬为正）",`${r.site.latitude.toFixed(4)}°`)}
${Oi(e+i/2,n+90,"经度（东经为正）",`${r.site.longitude.toFixed(4)}°`)}
${Oi(e+12,n+134,"观测时间（UTC）",J5(r.timeUtcIso))}
<text x="${e+12}" y="${n+158}" font-size="10.5" fill="${Wt}">北京时间 ${Qt(Q5(r.timeUtcIso))}；JD(TT) ${r.julianDay.toFixed(5)}；GMST ${r.gmstHours.toFixed(4)} h</text>`;return{svg:Ml(e,n,i,s,"② 台站与观测时间（UTC）",o),height:s}}function oA(t,e,n,i){const r=cf(t.kind,t.fov.centerRa,t.fov.centerDec,t.fov.radiusDeg),s=r.scaleRatioAt(t.fov.radiusDeg),o=`投影：${t.projectionLabel}｜中心比例尺 ≈ ${r.pxPerDegreeAtCenter.toFixed(1)} px/°，视场边缘相对比例尺 ×${s.toFixed(2)}`,a=eA(tA(t.kind),i-28),l=50+a.length*15+8,c=`<text x="${e+12}" y="${n+48}" font-size="11" font-weight="bold" fill="${Ho}">${Qt(o)}</text>`+a.map((u,d)=>`<text x="${e+12}" y="${n+68+d*15}" font-size="10.8" fill="${Ho}">${Qt(u)}</text>`).join("");return{svg:Ml(e,n,i,l,"③ 投影名称及变形说明",c),height:l}}function aA(t,e,n,i){let s;return t.annotations.length===0?s=`<text x="${e+12}" y="${n+52}" font-size="11" fill="${Wt}">未选用批注。批注锚定 J2000 天球坐标；锚点在视场圆外时只列文字、不画进星图。</text>`:(s=t.annotations.slice(0,3).map(({annotation:a,inFov:l},c)=>{const u=n+50+c*16;return`<circle cx="${e+16}" cy="${u-4}" r="4" fill="${a.color}"/>
<text x="${e+26}" y="${u}" font-size="10.8" fill="${Ho}">${Qt(a.text)} 〈锚点 ${Yo(a.ra)} / ${qo(a.dec)} J2000〉${l?"":"（锚点在当前视场外，未画入星图）"}</text>`}).join(""),t.annotations.length>3&&(s+=`<text x="${e+12}" y="${n+50+3*16}" font-size="10.5" fill="${Wt}">另有 ${t.annotations.length-3} 条批注未在本页列出。</text>`)),{svg:Ml(e,n,i,96,"④ 选用批注（引用现有批注）",s),height:96}}function lA(t,e,n,i){var l;const r=[];t.fovMissing&&r.push("版式引用的已保存视场已被删除：星图已按当前视图参数绘制，请改引其他视场或在编排区移除该引用。"),t.fovMismatch&&!t.fovMissing&&r.push(`引用视场「${((l=t.savedFov)==null?void 0:l.name)??""}」的参数与当前视图不一致：本页星图按当前可重算视图绘制，不是引用视场的旧快照。`);for(const c of t.missing)c.kind==="annotation"&&r.push("引用的一条批注已被删除：未复原任何文字或位置，可在编排区将其从版式移除。");for(const c of t.missing)c.kind==="target"&&r.push("指定目标当前无法解析：未复原坐标，可改选目标或在编排区移除引用。");const s=40+r.length*15+8,o=t.hasMissingRefs?"⑤ 引用缺失提示（内容未被复原）":"⑤ 版式与当前视图不一致提示",a=r.map((c,u)=>`<text x="${e+12}" y="${n+50+u*15}" font-size="10.8" fill="${Ih}">• ${Qt(c)}</text>`).join("");return{svg:Ml(e,n,i,s,o,a),height:s}}function cA(t){return t.replace(".000Z","Z").replace("T"," ")}function rv(t,e,n,i,r){const s=cf(t,r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg),o=Rn/2,a=30,l=70,c=92,u=Rn+a*2,d=Rn+a*2+l+c,p=a,h=l,g=s.path(am()),x=r.fov.radiusDeg<=20?5:r.fov.radiusDeg<=45?10:20,m=[];for(let P=x;P<r.fov.radiusDeg;P+=x)m.push(s.path(Bo(r.fov.centerRa,r.fov.centerDec,P)));const f=s.path(Bo(r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg)),_=s.path(cm(e.horizon.nadirRa,e.horizon.nadirDec)),v=s.path(lm(e.horizon.nadirRa,e.horizon.nadirDec)),S=P=>P.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),R=n.map(P=>{const k=s.projection([P.ra,P.dec]);if(!k)return"";const y=Math.max(1.6,Math.min(7,6.2-P.mag*.9));return P.kind==="star"?`<circle cx="${k[0].toFixed(1)}" cy="${k[1].toFixed(1)}" r="${y.toFixed(1)}" fill="#fff" opacity="${P.aboveHorizon?1:.35}"/>`:P.kind==="planet"?`<rect x="${(k[0]-y).toFixed(1)}" y="${(k[1]-y).toFixed(1)}" width="${(y*2).toFixed(1)}" height="${(y*2).toFixed(1)}" fill="#9ecbff"/>`:`<polygon points="${k[0].toFixed(1)},${(k[1]-y).toFixed(1)} ${(k[0]+y).toFixed(1)},${k[1].toFixed(1)} ${k[0].toFixed(1)},${(k[1]+y).toFixed(1)} ${(k[0]-y).toFixed(1)},${k[1].toFixed(1)}" fill="${P.kind==="sun"?"#ffd27d":"#dfe6f2"}"/>`}).join(""),A=n.filter(P=>P.kind!=="star"||P.mag<=1.6).map(P=>{const k=s.projection([P.ra,P.dec]);return k?`<text x="${(k[0]+7).toFixed(1)}" y="${(k[1]+3).toFixed(1)}" font-size="10.5" fill="#cfe0ff">${S(P.name)}</text>`:""}).join(""),T=i.map(P=>{const k=s.projection([P.ra,P.dec]);return k?`<circle cx="${k[0].toFixed(1)}" cy="${k[1].toFixed(1)}" r="5" fill="none" stroke="${P.color}" stroke-width="1.6"/><text x="${(k[0]+8).toFixed(1)}" y="${(k[1]+4).toFixed(1)}" font-size="11" fill="${P.color}">${S(P.text)}</text>`:""}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${d}" viewBox="0 0 ${u} ${d}" font-family="sans-serif">
<rect width="${u}" height="${d}" fill="#070a14"/>
<text x="${p}" y="28" font-size="20" font-weight="bold" fill="#eaf1ff">本地星图 · ${S(r.projectionLabel)}</text>
<text x="${p}" y="52" font-size="12" fill="#9fb4d8">
坐标系：J2000.0 平赤道/平春分点（赤经、赤纬）；视场中心 ${Yo(r.fov.centerRa)} / ${qo(r.fov.centerDec)}，
球面角半径 ${r.fov.radiusDeg.toFixed(1)}°；同心虚线环为等角距参考环（${t==="stereographic"?"立体投影下变形放大":"等距方位投影下等距"}）。
</text>
<g transform="translate(${p},${h})">
<circle cx="${o}" cy="${o}" r="${_s}" fill="#0b1020" stroke="#3b4a6b" stroke-width="1.5"/>
<clipPath id="expdisc"><circle cx="${o}" cy="${o}" r="${_s}"/></clipPath>
<g clip-path="url(#expdisc)">
<path d="${g}" fill="none" stroke="#27406a" stroke-width="0.6"/>
${m.map(P=>`<path d="${P}" fill="none" stroke="#3d6ea5" stroke-width="0.7" stroke-dasharray="2 3"/>`).join(`
`)}
<path d="${v}" fill="#5a1f24" opacity="0.35"/>
<path d="${_}" fill="none" stroke="#ff5d5d" stroke-width="1.6"/>
<path d="${f}" fill="none" stroke="#57e389" stroke-width="1.4"/>
${R}
${A}
${T}
</g>
</g>
<g transform="translate(${p},${h+Rn+26})" font-size="11.5" fill="#9fb4d8">
<text x="0" y="0">时间基准：${cA(r.timeUtcIso)}（UTC）；儒略日 JD = ${r.julianDay.toFixed(5)}（力学时 TT）；格林威治视恒星时 ${r.gmstHours.toFixed(4)} h</text>
<text x="0" y="18">观测位置：${S(r.site.name)}（纬度 ${r.site.latitude.toFixed(4)}°，经度 ${r.site.longitude.toFixed(4)}°，海拔 ${r.site.height} m）</text>
<text x="0" y="36">筛选：星等 ≤ ${r.magLimit}（仅恒星）；地平线裁切：${r.horizonClip?"开启（仅地平以上）":"关闭（地平以下目标半透明显示）"}。地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正。</text>
<text x="0" y="54">角距均按球面（haversine）计算；图上像素距离不作为实际角距。太阳系天体坐标为含光行差的 J2000 视位置。星表为 J2000 近似值，仅供科普制图。</text>
</g>
</svg>`}function Nh(t,e,n){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function Dx(t,e,n=2){const i=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(i),s=new Image;await new Promise((d,p)=>{s.onload=()=>d(),s.onerror=()=>p(new Error("SVG 栅格化失败")),s.src=r});const o=t.match(/width="(\d+)"\s+height="(\d+)"/),a=o?Number(o[1]):Rn,l=o?Number(o[2]):Rn,c=document.createElement("canvas");c.width=a*n,c.height=l*n;const u=c.getContext("2d");u.fillStyle="#070a14",u.fillRect(0,0,c.width,c.height),u.drawImage(s,0,0,c.width,c.height),URL.revokeObjectURL(r),c.toBlob(d=>{if(!d)return;const p=URL.createObjectURL(d),h=document.createElement("a");h.href=p,h.download=e,h.click(),setTimeout(()=>URL.revokeObjectURL(p),1e3)},"image/png")}function uA(t,e,n,i){return JSON.stringify({tool:"local-starchart",coordinateSystem:"J2000.0 mean equator & equinox (ICRS-aligned catalog approximations)",timeStandard:{utc:i.timeUtcIso,julianDayTT:i.julianDay,gmstHours:i.gmstHours},observer:i.site,fieldOfView:{centerRA_J2000_deg:i.fov.centerRa,centerDec_J2000_deg:i.fov.centerDec,angularRadius_deg:i.fov.radiusDeg},filters:{magnitudeLimitStars:i.magLimit,horizonClip:i.horizonClip},targets:e.map(r=>({id:r.id,name:r.name,designation:r.designation,kind:r.kind,ra_J2000_deg:Number(r.ra.toFixed(5)),dec_J2000_deg:Number(r.dec.toFixed(5)),magnitude:r.mag,azimuth_deg:Number(r.az.toFixed(3)),altitude_deg:Number(r.alt.toFixed(3)),angularSeparationFromCenter_deg:Number(r.sepFromCenter.toFixed(3))})),annotations:n},null,2)}function fA({data:t,onClose:e}){const n=Oe.useMemo(()=>nA(t),[t]),[i,r]=Oe.useState(!1);Oe.useEffect(()=>{const l=c=>{c.key==="Escape"&&e()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e]);const s=()=>{const l=window.open("","_blank","width=860,height=1100");if(!l){alert("浏览器拦截了打印窗口，请允许弹出窗口后重试。");return}l.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>星图讲义</title>
<style>
  @page { size: A4 portrait; margin: 10mm; }
  html,body{margin:0;padding:0;background:#fff;}
  svg{display:block;width:100%;height:auto;}
</style></head><body>${n}</body></html>`),l.document.close(),l.focus(),l.onload=()=>{setTimeout(()=>{l.print()},150)},setTimeout(()=>{try{l.print()}catch{}},300)},o=()=>{Nh(`星图讲义_${t.kind}_${t.meta.timeUtcIso.slice(0,10)}.svg`,n,"image/svg+xml;charset=utf-8")},a=async()=>{r(!0);try{await Dx(n,`星图讲义_${t.kind}_${t.meta.timeUtcIso.slice(0,10)}.png`,2)}finally{r(!1)}};return D.jsx("div",{className:"handout-overlay",onClick:e,children:D.jsxs("div",{className:"handout-modal",onClick:l=>l.stopPropagation(),children:[D.jsxs("div",{className:"handout-modal-bar",children:[D.jsxs("strong",{children:["讲义预览 · ",t.projectionLabel,t.hasMissingRefs&&D.jsx("span",{className:"handout-warn-badge",children:"有引用缺失"})]}),D.jsxs("div",{className:"export-bar",children:[D.jsx("button",{className:"btn",onClick:s,children:"打印（A4）"}),D.jsx("button",{className:"btn",onClick:o,children:"导出 SVG"}),D.jsx("button",{className:"btn",disabled:i,onClick:a,children:i?"栅格化中…":"导出 PNG"}),D.jsx("button",{className:"btn",onClick:e,children:"关闭"})]})]}),D.jsx("div",{className:"handout-modal-scroll",dangerouslySetInnerHTML:{__html:n}})]})})}/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const Lx=173.1446326846693,Zr=14959787069098932e-8,Lt=.017453292519943295,xs=57.29577951308232,dA=3.819718634205488,hA=365.24217,sv=new Date("2000-01-01T12:00:00Z"),Ii=2*Math.PI,ur=3600*(180/Math.PI),uo=484813681109536e-20,Ix=180*60*60,pA=2*Ix,ov=7292115e-11,mA=Ix/Math.PI,gA=-.17-5*Math.log10(mA),Uh=.996647180302104,vA=Uh*Uh,Fh=6378.1366,_A=Fh/Zr,Nx=81.30056,um=.0002959122082855911,zh=2825345909524226e-22,Oh=8459715185680659e-23,kh=1292024916781969e-23,Bh=1524358900784276e-23;function Ou(t){if(t!==!0&&t!==!1)throw console.trace(),`Value is not boolean: ${t}`;return t}function Yn(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function $s(t){return t-Math.floor(t)}function xA(t,e){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: first vector is too short.";const i=e.x*e.x+e.y*e.y+e.z*e.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";const r=(t.x*e.x+t.y*e.y+t.z*e.z)/Math.sqrt(n*i);return r<=-1?180:r>=1?0:xs*Math.acos(r)}var Te;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(Te||(Te={}));const yA=[Te.Star1,Te.Star2,Te.Star3,Te.Star4,Te.Star5,Te.Star6,Te.Star7,Te.Star8],SA=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function MA(t){const e=yA.indexOf(t);return e>=0?SA[e]:null}function fm(t){const e=MA(t);return e&&e.dist>0?e:null}var Dn;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Dn||(Dn={}));const Gi={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function EA(t){var e,n,i,r,s,o,a;const l=2e3+(t-14)/hA;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,10583.6-1014.41*e+33.78311*n-5.952053*i-.1798452*r+.022174192*s+.0090316521*o):l<1600?(e=(l-1e3)/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,1574.2-556.01*e+71.23472*n+.319781*i-.8503463*r-.005050998*s+.0083572073*o):l<1700?(e=l-1600,n=e*e,i=e*n,120-.9808*e-.01532*n+i/7129):l<1800?(e=l-1700,n=e*e,i=e*n,r=n*n,8.83+.1603*e-.0059285*n+13336e-8*i-r/1174e3):l<1860?(e=l-1800,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,a=i*r,13.72-.332447*e+.0068612*n+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*o+875e-12*a):l<1900?(e=l-1860,n=e*e,i=e*n,r=n*n,s=n*i,7.62+.5737*e-.251754*n+.01680668*i-.0004473624*r+s/233174):l<1920?(e=l-1900,n=e*e,i=e*n,r=n*n,-2.79+1.494119*e-.0598939*n+.0061966*i-197e-6*r):l<1941?(e=l-1920,n=e*e,i=e*n,21.2+.84493*e-.0761*n+.0020936*i):l<1961?(e=l-1950,n=e*e,i=e*n,29.07+.407*e-n/233+i/2547):l<1986?(e=l-1975,n=e*e,i=e*n,45.45+1.067*e-n/260-i/718):l<2005?(e=l-2e3,n=e*e,i=e*n,r=n*n,s=n*i,63.86+.3345*e-.060374*n+.0017275*i+651814e-9*r+2373599e-11*s):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let wA=EA;function av(t){return t+wA(t)/86400}class as{constructor(e){if(e instanceof as){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const n=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-sv.getTime())/n,this.tt=av(this.ut);return}if(Number.isFinite(e)){this.date=new Date(sv.getTime()+e*n),this.ut=e,this.tt=av(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let n=new as(e);for(;;){const i=e-n.tt;if(Math.abs(i)<1e-12)return n;n=n.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new as(this.ut+e)}}function Sn(t){return t instanceof as?t:new as(t)}function TA(t){function e(p){return p%pA*uo}const n=t.tt/36525,i=e(128710479305e-5+n*1295965810481e-4),r=e(335779.526232+n*17395272628478e-4),s=e(107226070369e-5+n*1602961601209e-3),o=e(450160.398036-n*69628905431e-4);let a=Math.sin(o),l=Math.cos(o),c=(-172064161-174666*n)*a+33386*l,u=(92052331+9086*n)*l+15377*a,d=2*(r-s+o);return a=Math.sin(d),l=Math.cos(d),c+=(-13170906-1675*n)*a-13696*l,u+=(5730336-3015*n)*l-4587*a,d=2*(r+o),a=Math.sin(d),l=Math.cos(d),c+=(-2276413-234*n)*a+2796*l,u+=(978459-485*n)*l+1374*a,d=2*o,a=Math.sin(d),l=Math.cos(d),c+=(2074554+207*n)*a-698*l,u+=(-897492+470*n)*l-291*a,a=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*n)*a+11817*l,u+=(73871-184*n)*l-1924*a,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function Ux(t){var e=t.tt/36525,n=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return n/3600}var Sc;function dm(t){if(!Sc||Math.abs(Sc.tt-t.tt)>1e-6){const e=TA(t),n=Ux(t),i=n+e.deps/3600;Sc={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(n*Lt)/15,mobl:n,tobl:i}}return Sc}function AA(t,e){const n=t*Lt,i=Math.cos(n),r=Math.sin(n);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function CA(t,e){return AA(Ux(t),e)}function RA(t){const e=t.tt/36525;function n(he,b){const We=[];let Ce;for(Ce=0;Ce<=b-he;++Ce)We.push(0);return{min:he,array:We}}function i(he,b,We,Ce){const Le=[];for(let Re=0;Re<=b-he;++Re)Le.push(n(We,Ce));return{min:he,array:Le}}function r(he,b,We){const Ce=he.array[b-he.min];return Ce.array[We-Ce.min]}function s(he,b,We,Ce){const Le=he.array[b-he.min];Le.array[We-Le.min]=Ce}let o,a,l,c,u,d,p,h,g,x,m,f,_,v,S,R,A,T,P,k,y,M,H,B=i(-6,6,1,4),W=i(-6,6,1,4);function N(he,b){return r(B,he,b)}function I(he,b){return r(W,he,b)}function q(he,b,We){return s(B,he,b,We)}function L(he,b,We){return s(W,he,b,We)}function Z(he,b,We,Ce,Le){Le(he*We-b*Ce,b*We+he*Ce)}function X(he){return Math.sin(Ii*he)}p=e*e,g=0,H=0,m=0,f=3422.7;var ne=X(.19833+.05611*e),ye=X(.27869+.04508*e),Ie=X(.16827-.36903*e),Y=X(.34734-5.37261*e),ee=X(.10498-5.37899*e),le=X(.42681-.41855*e),ue=X(.14943-5.37511*e);for(T=.84*ne+.31*ye+14.27*Ie+7.26*Y+.28*ee+.24*le,P=2.94*ne+.31*ye+14.27*Ie+9.34*Y+1.12*ee+.83*le,k=-6.4*ne-1.89*le,y=.21*ne+.31*ye+14.27*Ie-88.7*Y-15.3*ee+.24*le-1.86*ue,M=T-k,h=-3332e-9*X(.59734-5.37261*e)-539e-9*X(.35498-5.37899*e)-64e-9*X(.39943-5.37511*e),_=Ii*$s(.60643382+1336.85522467*e-313e-8*p)+T/ur,v=Ii*$s(.37489701+1325.55240982*e+2565e-8*p)+P/ur,S=Ii*$s(.99312619+99.99735956*e-44e-8*p)+k/ur,R=Ii*$s(.25909118+1342.2278298*e-892e-8*p)+y/ur,A=Ii*$s(.82736186+1236.85308708*e-397e-8*p)+M/ur,u=1;u<=4;++u){switch(u){case 1:l=v,a=4,c=1.000002208;break;case 2:l=S,a=3,c=.997504612-.002495388*e;break;case 3:l=R,a=4,c=1.000002708+139.978*h;break;case 4:l=A,a=6,c=1;break;default:throw`Internal error: I = ${u}`}for(q(0,u,1),q(1,u,Math.cos(l)*c),L(0,u,0),L(1,u,Math.sin(l)*c),d=2;d<=a;++d)Z(N(d-1,u),I(d-1,u),N(1,u),I(1,u),(he,b)=>(q(d,u,he),L(d,u,b)));for(d=1;d<=a;++d)q(-d,u,N(d,u)),L(-d,u,-I(d,u))}function Ue(he,b,We,Ce){for(var Le={x:1,y:0},Re=[0,he,b,We,Ce],oe=1;oe<=4;++oe)Re[oe]!==0&&Z(Le.x,Le.y,N(Re[oe],oe),I(Re[oe],oe),(fe,C)=>(Le.x=fe,Le.y=C));return Le}function V(he,b,We,Ce,Le,Re,oe,fe){var C=Ue(Le,Re,oe,fe);g+=he*C.y,H+=b*C.y,m+=We*C.x,f+=Ce*C.x}V(13.902,14.06,-.001,.2607,0,0,0,4),V(.403,-4.01,.394,.0023,0,0,0,3),V(2369.912,2373.36,.601,28.2333,0,0,0,2),V(-125.154,-112.79,-.725,-.9781,0,0,0,1),V(1.979,6.98,-.445,.0433,1,0,0,4),V(191.953,192.72,.029,3.0861,1,0,0,2),V(-8.466,-13.51,.455,-.1093,1,0,0,1),V(22639.5,22609.07,.079,186.5398,1,0,0,0),V(18.609,3.59,-.094,.0118,1,0,0,-1),V(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),V(3.215,5.44,.192,-.0386,1,0,0,-3),V(-38.428,-38.64,.001,.6008,1,0,0,-4),V(-.393,-1.43,-.092,.0086,1,0,0,-6),V(-.289,-1.59,.123,-.0053,0,1,0,4),V(-24.42,-25.1,.04,-.3,0,1,0,2),V(18.023,17.93,.007,.1494,0,1,0,1),V(-668.146,-126.98,-1.302,-.3997,0,1,0,0),V(.56,.32,-.001,-.0037,0,1,0,-1),V(-165.145,-165.06,.054,1.9178,0,1,0,-2),V(-1.877,-6.46,-.416,.0339,0,1,0,-4),V(.213,1.02,-.074,.0054,2,0,0,4),V(14.387,14.78,-.017,.2833,2,0,0,2),V(-.586,-1.2,.054,-.01,2,0,0,1),V(769.016,767.96,.107,10.1657,2,0,0,0),V(1.75,2.01,-.018,.0155,2,0,0,-1),V(-211.656,-152.53,5.679,-.3039,2,0,0,-2),V(1.225,.91,-.03,-.0088,2,0,0,-3),V(-30.773,-34.07,-.308,.3722,2,0,0,-4),V(-.57,-1.4,-.074,.0109,2,0,0,-6),V(-2.921,-11.75,.787,-.0484,1,1,0,2),V(1.267,1.52,-.022,.0164,1,1,0,1),V(-109.673,-115.18,.461,-.949,1,1,0,0),V(-205.962,-182.36,2.056,1.4437,1,1,0,-2),V(.233,.36,.012,-.0025,1,1,0,-3),V(-4.391,-9.66,-.471,.0673,1,1,0,-4),V(.283,1.53,-.111,.006,1,-1,0,4),V(14.577,31.7,-1.54,.2302,1,-1,0,2),V(147.687,138.76,.679,1.1528,1,-1,0,0),V(-1.089,.55,.021,0,1,-1,0,-1),V(28.475,23.59,-.443,-.2257,1,-1,0,-2),V(-.276,-.38,-.006,-.0036,1,-1,0,-3),V(.636,2.27,.146,-.0102,1,-1,0,-4),V(-.189,-1.68,.131,-.0028,0,2,0,2),V(-7.486,-.66,-.037,-.0086,0,2,0,0),V(-8.096,-16.35,-.74,.0918,0,2,0,-2),V(-5.741,-.04,0,-9e-4,0,0,2,2),V(.255,0,0,0,0,0,2,1),V(-411.608,-.2,0,-.0124,0,0,2,0),V(.584,.84,0,.0071,0,0,2,-1),V(-55.173,-52.14,0,-.1052,0,0,2,-2),V(.254,.25,0,-.0017,0,0,2,-3),V(.025,-1.67,0,.0031,0,0,2,-4),V(1.06,2.96,-.166,.0243,3,0,0,2),V(36.124,50.64,-1.3,.6215,3,0,0,0),V(-13.193,-16.4,.258,-.1187,3,0,0,-2),V(-1.187,-.74,.042,.0074,3,0,0,-4),V(-.293,-.31,-.002,.0046,3,0,0,-6),V(-.29,-1.45,.116,-.0051,2,1,0,2),V(-7.649,-10.56,.259,-.1038,2,1,0,0),V(-8.627,-7.59,.078,-.0192,2,1,0,-2),V(-2.74,-2.54,.022,.0324,2,1,0,-4),V(1.181,3.32,-.212,.0213,2,-1,0,2),V(9.703,11.67,-.151,.1268,2,-1,0,0),V(-.352,-.37,.001,-.0028,2,-1,0,-1),V(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),V(.36,.2,-.012,-.0043,2,-1,0,-4),V(-1.167,-1.25,.008,-.0106,1,2,0,0),V(-7.412,-6.12,.117,.0484,1,2,0,-2),V(-.311,-.65,-.032,.0044,1,2,0,-4),V(.757,1.82,-.105,.0112,1,-2,0,2),V(2.58,2.32,.027,.0196,1,-2,0,0),V(2.533,2.4,-.014,-.0212,1,-2,0,-2),V(-.344,-.57,-.025,.0036,0,3,0,-2),V(-.992,-.02,0,0,1,0,2,2),V(-45.099,-.02,0,-.001,1,0,2,0),V(-.179,-9.52,0,-.0833,1,0,2,-2),V(-.301,-.33,0,.0014,1,0,2,-4),V(-6.382,-3.37,0,-.0481,1,0,-2,2),V(39.528,85.13,0,-.7136,1,0,-2,0),V(9.366,.71,0,-.0112,1,0,-2,-2),V(.202,.02,0,0,1,0,-2,-4),V(.415,.1,0,.0013,0,1,2,0),V(-2.152,-2.26,0,-.0066,0,1,2,-2),V(-1.44,-1.3,0,.0014,0,1,-2,2),V(.384,-.04,0,0,0,1,-2,-2),V(1.938,3.6,-.145,.0401,4,0,0,0),V(-.952,-1.58,.052,-.013,4,0,0,-2),V(-.551,-.94,.032,-.0097,3,1,0,0),V(-.482,-.57,.005,-.0045,3,1,0,-2),V(.681,.96,-.026,.0115,3,-1,0,0),V(-.297,-.27,.002,-9e-4,2,2,0,-2),V(.254,.21,-.003,0,2,-2,0,-2),V(-.25,-.22,.004,.0014,1,3,0,-2),V(-3.996,0,0,4e-4,2,0,2,0),V(.557,-.75,0,-.009,2,0,2,-2),V(-.459,-.38,0,-.0053,2,0,-2,2),V(-1.298,.74,0,4e-4,2,0,-2,0),V(.538,1.14,0,-.0141,2,0,-2,-2),V(.263,.02,0,0,1,1,2,0),V(.426,.07,0,-6e-4,1,1,-2,-2),V(-.304,.03,0,3e-4,1,-1,2,0),V(-.372,-.19,0,-.0027,1,-1,-2,2),V(.418,0,0,0,0,0,4,0),V(-.33,-.04,0,0,3,0,2,0);function Ne(he,b,We,Ce,Le){return he*Ue(b,We,Ce,Le).y}x=0,x+=Ne(-526.069,0,0,1,-2),x+=Ne(-3.352,0,0,1,-4),x+=Ne(44.297,1,0,1,-2),x+=Ne(-6,1,0,1,-4),x+=Ne(20.599,-1,0,1,0),x+=Ne(-30.598,-1,0,1,-2),x+=Ne(-24.649,-2,0,1,0),x+=Ne(-2,-2,0,1,-2),x+=Ne(-22.571,0,1,1,-2),x+=Ne(10.985,0,-1,1,-2),g+=.82*X(.7736-62.5512*e)+.31*X(.0466-125.1025*e)+.35*X(.5785-25.1042*e)+.66*X(.4591+1335.8075*e)+.64*X(.313-91.568*e)+1.14*X(.148+1331.2898*e)+.21*X(.5918+1056.5859*e)+.44*X(.5784+1322.8595*e)+.24*X(.2275-5.7374*e)+.28*X(.2965+2.6929*e)+.33*X(.3132+6.3368*e),o=R+H/ur;let Qe=(1.000002708+139.978*h)*(18518.511+1.189+m)*Math.sin(o)-6.24*Math.sin(3*o)+x;return{geo_eclip_lon:Ii*$s((_+g/ur)/Ii),geo_eclip_lat:Math.PI/(180*3600)*Qe,distance_au:ur*_A/(.999953253*f)}}function Fx(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function ku(t,e,n){const i=zx(e,n);return Fx(i,t)}function zx(t,e){const n=t.tt/36525;let i=84381.406,r=((((-951e-10*n+132851e-9)*n-.00114045)*n-1.0790069)*n+5038.481507)*n,s=((((3337e-10*n-467e-9)*n-.00772503)*n+.0512623)*n-.025754)*n+i,o=((((-56e-9*n+170663e-9)*n-.00121197)*n-2.3814292)*n+10.556403)*n;i*=uo,r*=uo,s*=uo,o*=uo;const a=Math.sin(i),l=Math.cos(i),c=Math.sin(-r),u=Math.cos(-r),d=Math.sin(-s),p=Math.cos(-s),h=Math.sin(o),g=Math.cos(o),x=g*u-c*h*p,m=g*c*l+h*p*u*l-a*h*d,f=g*c*a+h*p*u*a+l*h*d,_=-h*u-c*g*p,v=-h*c*l+g*p*u*l-a*g*d,S=-h*c*a+g*p*u*a+l*g*d,R=c*d,A=-d*u*l-a*p,T=-d*u*a+p*l;if(e===Dn.Into2000)return new Lr([[x,m,f],[_,v,S],[R,A,T]]);if(e===Dn.From2000)return new Lr([[x,_,R],[m,v,A],[f,S,T]]);throw"Invalid precess direction"}function PA(t){const e=.779057273264+.00273781191135448*t.ut,n=t.ut%1;let i=360*((e+n)%1);return i<0&&(i+=360),i}let Mc;function hm(t){if(!Mc||Mc.tt!==t.tt){const e=t.tt/36525;let n=15*dm(t).ee;const i=PA(t);let s=((n+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;s<0&&(s+=24),Mc={tt:t.tt,st:s}}return Mc.st}function bA(t){const e=Sn(t);return hm(e)}function DA(t,e){const n=t.latitude*Lt,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,Uh*i),o=vA*s,a=t.height/1e3,l=Fh*s+a,c=Fh*o+a,u=(15*e+t.longitude)*Lt,d=Math.sin(u),p=Math.cos(u);return{pos:[l*r*p/Zr,l*r*d/Zr,c*i/Zr],vel:[-ov*l*r*d*86400/Zr,ov*l*r*p*86400/Zr,0]}}function Hh(t,e,n){const i=Ox(e,n);return Fx(i,t)}function Ox(t,e){const n=dm(t),i=n.mobl*Lt,r=n.tobl*Lt,s=n.dpsi*uo,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s),p=u,h=-d*o,g=-d*a,x=d*l,m=u*o*l+a*c,f=u*a*l-o*c,_=d*c,v=u*o*c-a*l,S=u*a*c+o*l;if(e===Dn.From2000)return new Lr([[p,x,_],[h,m,v],[g,f,S]]);if(e===Dn.Into2000)return new Lr([[p,h,g],[x,m,f],[_,v,S]]);throw"Invalid precess direction"}function LA(t,e,n){return n===Dn.Into2000?ku(Hh(t,e,n),e,n):Hh(ku(t,e,n),e,n)}function IA(t,e){const n=hm(t),i=DA(e,n).pos;return LA(i,t,Dn.Into2000)}class St{constructor(e,n,i,r){this.x=e,this.y=n,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class _r{constructor(e,n,i,r,s,o,a){this.x=e,this.y=n,this.z=i,this.vx=r,this.vy=s,this.vz=o,this.t=a}}class ka{constructor(e,n,i){this.lat=Yn(e),this.lon=Yn(n),this.dist=Yn(i)}}class lv{constructor(e,n,i,r){this.ra=Yn(e),this.dec=Yn(n),this.dist=Yn(i),this.vec=r}}class Lr{constructor(e){this.rot=e}}class NA{constructor(e,n,i){this.vec=e,this.elat=Yn(n),this.elon=Yn(i)}}function UA(t,e){return new St(t[0],t[1],t[2],e)}function FA(t,e){const n=UA(t,e),i=n.x*n.x+n.y*n.y,r=Math.sqrt(i+n.z*n.z);if(i===0){if(n.z===0)throw"Indeterminate sky coordinates";return new lv(0,n.z<0?-90:90,r,n)}let s=dA*Math.atan2(n.y,n.x);s<0&&(s+=24);const o=xs*Math.atan2(t[2],Math.sqrt(i));return new lv(s,o,r,n)}function A0(t,e){const n=t*Lt,i=Math.cos(n),r=Math.sin(n);return[i*e[0]+r*e[1],i*e[1]-r*e[0],e[2]]}function kx(t){if(!(t instanceof Bx))throw`Not an instance of the Observer class: ${t}`;if(Yn(t.latitude),Yn(t.longitude),Yn(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class Bx{constructor(e,n,i){this.latitude=e,this.longitude=n,this.height=i,kx(this)}}function zA(t,e,n,i,r){kx(n),Ou(i),Ou(r);const s=Sn(e),o=IA(s,n),a=qA(t,s,r),l=[a.x-o[0],a.y-o[1],a.z-o[2]];return FA(l,s)}function OA(t,e,n){const i=t.x,r=t.y*e+t.z*n,s=-t.y*n+t.z*e,o=Math.hypot(i,r);let a=0;o>0&&(a=xs*Math.atan2(r,i),a<0&&(a+=360));let l=xs*Math.atan2(s,o),c=new St(i,r,s,t.t);return new NA(c,l,a)}function kA(t){const e=dm(t.t),n=[t.x,t.y,t.z],i=ku(n,t.t,Dn.From2000),[r,s,o]=Hh(i,t.t,Dn.From2000),a=new St(r,s,o,t.t),l=e.tobl*Lt;return OA(a,Math.cos(l),Math.sin(l))}function Vo(t){const e=Sn(t),n=RA(e),i=n.distance_au*Math.cos(n.geo_eclip_lat),r=[i*Math.cos(n.geo_eclip_lon),i*Math.sin(n.geo_eclip_lon),n.distance_au*Math.sin(n.geo_eclip_lat)],s=CA(e,r),o=ku(s,e,Dn.Into2000);return new St(o[0],o[1],o[2],e)}function Hx(t){const e=Sn(t),n=1e-5,i=e.AddDays(-n),r=e.AddDays(+n),s=Vo(i),o=Vo(r);return new _r((s.x+o.x)/2,(s.y+o.y)/2,(s.z+o.z)/2,(o.x-s.x)/(2*n),(o.y-s.y)/(2*n),(o.z-s.z)/(2*n),e)}function BA(t){const e=Sn(t),n=Hx(e),i=1+Nx;return new _r(n.x/i,n.y/i,n.z/i,n.vx/i,n.vy/i,n.vz/i,e)}function Mo(t,e,n){let i=1,r=0;for(let s of t){let o=0;for(let[l,c,u]of s)o+=l*Math.cos(c+e*u);let a=i*o;n&&(a%=Ii),r+=a,i*=e}return r}function C0(t,e){let n=1,i=0,r=0,s=0;for(let o of t){let a=0,l=0;for(let[c,u,d]of o){let p=u+e*d;a+=c*d*Math.sin(p),s>0&&(l+=c*Math.cos(p))}r+=s*i*l-n*a,i=n,n*=e,++s}return r}const Ca=365250,Vh=0,Gh=1,Wh=2;function $h(t){return new Zt(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function Vx(t,e,n){const i=n*Math.cos(e),r=Math.cos(t),s=Math.sin(t);return[i*r,i*s,n*Math.sin(e)]}function Ba(t,e){const n=e.tt/Ca,i=Mo(t[Vh],n,!0),r=Mo(t[Gh],n,!1),s=Mo(t[Wh],n,!1),o=Vx(i,r,s);return $h(o).ToAstroVector(e)}function jh(t,e){const n=e/Ca,i=Mo(t[Vh],n,!0),r=Mo(t[Gh],n,!1),s=Mo(t[Wh],n,!1),o=C0(t[Vh],n),a=C0(t[Gh],n),l=C0(t[Wh],n),c=Math.cos(i),u=Math.sin(i),d=Math.cos(r),p=Math.sin(r),h=+(l*d*c)-s*p*c*a-s*d*u*o,g=+(l*d*u)-s*p*u*a+s*d*c*o,x=+(l*p)+s*d*a,m=Vx(i,r,s),f=[h/Ca,g/Ca,x/Ca],_=$h(m),v=$h(f);return new ys(e,_,v)}function Ec(t,e,n,i){const r=i/(i+um),s=Ba(Gi[n],e);t.x+=r*s.x,t.y+=r*s.y,t.z+=r*s.z}function HA(t){const e=new St(0,0,0,t);return Ec(e,t,Te.Jupiter,zh),Ec(e,t,Te.Saturn,Oh),Ec(e,t,Te.Uranus,kh),Ec(e,t,Te.Neptune,Bh),e}const Xh=51,VA=29200,fo=146,Ni=201,rs=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Zt{constructor(e,n,i){this.x=e,this.y=n,this.z=i}clone(){return new Zt(this.x,this.y,this.z)}ToAstroVector(e){return new St(this.x,this.y,this.z,e)}static zero(){return new Zt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Zt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Zt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Zt(e*this.x,e*this.y,e*this.z)}div(e){return new Zt(this.x/e,this.y/e,this.z/e)}mean(e){return new Zt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Zt(-this.x,-this.y,-this.z)}}class ys{constructor(e,n,i){this.tt=e,this.r=n,this.v=i}clone(){return new ys(this.tt,this.r,this.v)}sub(e){return new ys(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function GA(t){let[e,[n,i,r],[s,o,a]]=t;return new ys(e,new Zt(n,i,r),new Zt(s,o,a))}function wc(t,e,n,i){const r=i/(i+um),s=jh(Gi[n],e);return t.r.incr(s.r.mul(r)),t.v.incr(s.v.mul(r)),s}function ma(t,e,n){const i=n.sub(t),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class uf{constructor(e){let n=new ys(e,new Zt(0,0,0),new Zt(0,0,0));this.Jupiter=wc(n,e,Te.Jupiter,zh),this.Saturn=wc(n,e,Te.Saturn,Oh),this.Uranus=wc(n,e,Te.Uranus,kh),this.Neptune=wc(n,e,Te.Neptune,Bh),this.Jupiter.r.decr(n.r),this.Jupiter.v.decr(n.v),this.Saturn.r.decr(n.r),this.Saturn.v.decr(n.v),this.Uranus.r.decr(n.r),this.Uranus.v.decr(n.v),this.Neptune.r.decr(n.r),this.Neptune.v.decr(n.v),this.Sun=new ys(e,n.r.mul(-1),n.v.mul(-1))}Acceleration(e){let n=ma(e,um,this.Sun.r);return n.incr(ma(e,zh,this.Jupiter.r)),n.incr(ma(e,Oh,this.Saturn.r)),n.incr(ma(e,kh,this.Uranus.r)),n.incr(ma(e,Bh,this.Neptune.r)),n}}class ff{constructor(e,n,i,r){this.tt=e,this.r=n,this.v=i,this.a=r}clone(){return new ff(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class Gx{constructor(e,n){this.bary=e,this.grav=n}}function Bu(t,e,n,i){return new Zt(e.x+t*(n.x+t*i.x/2),e.y+t*(n.y+t*i.y/2),e.z+t*(n.z+t*i.z/2))}function cv(t,e,n){return new Zt(e.x+t*n.x,e.y+t*n.y,e.z+t*n.z)}function Yh(t,e){const n=t-e.tt,i=new uf(t),r=Bu(n,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),o=Bu(n,e.r,e.v,s),a=e.v.add(s.mul(n)),l=i.Acceleration(o),c=new ff(t,o,a,l);return new Gx(i,c)}const WA=[];function Wx(t,e){const n=Math.floor(t);return n<0?0:n>=e?e-1:n}function qh(t){const e=GA(t),n=new uf(e.tt),i=e.r.add(n.Sun.r),r=e.v.add(n.Sun.v),s=n.Acceleration(i),o=new ff(e.tt,i,r,s);return new Gx(n,o)}function $A(t,e){const n=rs[0][0];if(e<n||e>rs[Xh-1][0])return null;const i=Wx((e-n)/VA,Xh-1);if(!t[i]){const s=t[i]=[];s[0]=qh(rs[i]).grav,s[Ni-1]=qh(rs[i+1]).grav;let o,a=s[0].tt;for(o=1;o<Ni-1;++o)s[o]=Yh(a+=fo,s[o-1]).grav;a=s[Ni-1].tt;var r=[];for(r[Ni-1]=s[Ni-1],o=Ni-2;o>0;--o)r[o]=Yh(a-=fo,r[o+1]).grav;for(o=Ni-2;o>0;--o){const l=o/(Ni-1);s[o].r=s[o].r.mul(1-l).add(r[o].r.mul(l)),s[o].v=s[o].v.mul(1-l).add(r[o].v.mul(l)),s[o].a=s[o].a.mul(1-l).add(r[o].a.mul(l))}}return t[i]}function uv(t,e,n){let i=qh(t);const r=Math.ceil((e-i.grav.tt)/n);for(let s=0;s<r;++s)i=Yh(s+1===r?e:i.grav.tt+n,i.grav);return i}function $x(t,e){let n,i,r;const s=$A(WA,t.tt);if(s){const o=Wx((t.tt-s[0].tt)/fo,Ni-1),a=s[o],l=s[o+1],c=a.a.mean(l.a),u=Bu(t.tt-a.tt,a.r,a.v,c),d=cv(t.tt-a.tt,a.v,c),p=Bu(t.tt-l.tt,l.r,l.v,c),h=cv(t.tt-l.tt,l.v,c),g=(t.tt-a.tt)/fo;n=u.mul(1-g).add(p.mul(g)),i=d.mul(1-g).add(h.mul(g))}else{let o;t.tt<rs[0][0]?o=uv(rs[0],t.tt,-fo):o=uv(rs[Xh-1],t.tt,+fo),n=o.grav.r,i=o.grav.v,r=o.bary}return r||(r=new uf(t.tt)),n=n.sub(r.Sun.r),i=i.sub(r.Sun.v),new _r(n.x,n.y,n.z,i.x,i.y,i.z,t)}function cl(t,e){var n=Sn(e);if(t in Gi)return Ba(Gi[t],n);if(t===Te.Pluto){const o=$x(n);return new St(o.x,o.y,o.z,n)}if(t===Te.Sun)return new St(0,0,0,n);if(t===Te.Moon){var i=Ba(Gi.Earth,n),r=Vo(n);return new St(i.x+r.x,i.y+r.y,i.z+r.z,n)}if(t===Te.EMB){const o=Ba(Gi.Earth,n),a=Vo(n),l=1+Nx;return new St(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,n)}if(t===Te.SSB)return HA(n);const s=fm(t);if(s){const o=new ka(s.dec,15*s.ra,s.dist);return Yc(o,n)}throw`HelioVector: Unknown body "${t}"`}function jA(t,e){let n=e,i=0;for(let r=0;r<10;++r){const s=t(n),o=s.Length()/Lx;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(i=Math.abs(a.tt-n.tt),i<1e-9)return s;n=a}throw`Light-travel time solver did not converge: dt = ${i}`}class XA{constructor(e,n,i,r){this.observerBody=e,this.targetBody=n,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=cl(this.observerBody,e));const n=cl(this.targetBody,e);return new St(n.x-this.observerPos.x,n.y-this.observerPos.y,n.z-this.observerPos.z,e)}}function YA(t,e,n,i){Ou(i);const r=Sn(t);if(fm(n)){const a=cl(n,r);{const l=ZA(e,r),c=new St(a.x-l.x,a.y-l.y,a.z-l.z,r),u=Lx/c.Length();return new St(c.x+l.vx/u,c.y+l.vy/u,c.z+l.vz/u,r)}}let s;s=new St(0,0,0,r);const o=new XA(e,n,i,s);return jA(a=>o.Position(a),r)}function qA(t,e,n){Ou(n);const i=Sn(e);switch(t){case Te.Earth:return new St(0,0,0,i);case Te.Moon:return Vo(i);default:const r=YA(i,Te.Earth,t,n);return r.t=i,r}}function KA(t,e){return new _r(t.r.x,t.r.y,t.r.z,t.v.x,t.v.y,t.v.z,e)}function ZA(t,e){const n=Sn(e);switch(t){case Te.Sun:return new _r(0,0,0,0,0,0,n);case Te.SSB:const i=new uf(n.tt);return new _r(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,n);case Te.Mercury:case Te.Venus:case Te.Earth:case Te.Mars:case Te.Jupiter:case Te.Saturn:case Te.Uranus:case Te.Neptune:const r=jh(Gi[t],n.tt);return KA(r,n);case Te.Pluto:return $x(n);case Te.Moon:case Te.EMB:const s=jh(Gi.Earth,n.tt),o=t==Te.Moon?Hx(n):BA(n);return new _r(o.x+s.r.x,o.y+s.r.y,o.z+s.r.z,o.vx+s.v.x,o.vy+s.v.y,o.vz+s.v.z,n);default:if(fm(t)){const a=cl(t,n);return new _r(a.x,a.y,a.z,0,0,0,n)}throw`HelioState: Unsupported body "${t}"`}}function JA(t,e,n,i){let r,s=0,o=0,a=0;switch(t){case Te.Mercury:r=-.6,s=4.98,o=-4.88,a=3.02;break;case Te.Venus:e<163.6?(r=-4.47,s=1.03,o=.57,a=.13):(r=.98,s=-1.02);break;case Te.Mars:r=-1.52,s=1.6;break;case Te.Jupiter:r=-9.4,s=.5;break;case Te.Uranus:r=-7.19,s=.25;break;case Te.Neptune:r=-6.87;break;case Te.Pluto:r=-1,s=4;break;default:throw`VisualMagnitude: unsupported body ${t}`}const l=e/100;let c=r+l*(s+l*(o+l*a));return c+=5*Math.log10(n*i),c}function QA(t,e,n,i,r){const s=kA(i),o=Lt*28.06,a=Lt*(169.51+382e-7*r.tt),l=Lt*s.elat,c=Lt*s.elon,u=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(c-a)),d=Math.sin(Math.abs(u));let p=-9+.044*t;return p+=d*(-2.6+1.2*d),p+=5*Math.log10(e*n),{mag:p,ring_tilt:xs*u}}function e8(t,e,n){let i=t*Lt,r=i*i,s=r*r,o=-12.717+1.49*Math.abs(i)+.0431*s;const a=385000.6/Zr;let l=n/a;return o+=5*Math.log10(e*l),o}class t8{constructor(e,n,i,r,s,o,a,l){this.time=e,this.mag=n,this.phase_angle=i,this.helio_dist=r,this.geo_dist=s,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(Lt*i))/2}}function n8(t,e){if(t===Te.Earth)throw"The illumination of the Earth is not defined.";const n=Sn(e),i=Ba(Gi.Earth,n);let r,s,o,a;t===Te.Sun?(o=new St(-i.x,-i.y,-i.z,n),s=new St(0,0,0,n),r=0):(t===Te.Moon?(o=Vo(n),s=new St(i.x+o.x,i.y+o.y,i.z+o.z,n)):(s=cl(t,e),o=new St(s.x-i.x,s.y-i.y,s.z-i.z,n)),r=xA(o,s));let l=o.Length(),c=s.Length(),u;if(t===Te.Sun)a=gA+5*Math.log10(l);else if(t===Te.Moon)a=e8(r,c,l);else if(t===Te.Saturn){const d=QA(r,c,l,o,n);a=d.mag,u=d.ring_tilt}else a=JA(t,r,c,l);return new t8(n,a,r,c,l,o,s,u)}var fv;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(fv||(fv={}));function jx(t){return new Lr([[t.rot[0][0],t.rot[1][0],t.rot[2][0]],[t.rot[0][1],t.rot[1][1],t.rot[2][1]],[t.rot[0][2],t.rot[1][2],t.rot[2][2]]])}function Xx(t,e){return new Lr([[e.rot[0][0]*t.rot[0][0]+e.rot[1][0]*t.rot[0][1]+e.rot[2][0]*t.rot[0][2],e.rot[0][1]*t.rot[0][0]+e.rot[1][1]*t.rot[0][1]+e.rot[2][1]*t.rot[0][2],e.rot[0][2]*t.rot[0][0]+e.rot[1][2]*t.rot[0][1]+e.rot[2][2]*t.rot[0][2]],[e.rot[0][0]*t.rot[1][0]+e.rot[1][0]*t.rot[1][1]+e.rot[2][0]*t.rot[1][2],e.rot[0][1]*t.rot[1][0]+e.rot[1][1]*t.rot[1][1]+e.rot[2][1]*t.rot[1][2],e.rot[0][2]*t.rot[1][0]+e.rot[1][2]*t.rot[1][1]+e.rot[2][2]*t.rot[1][2]],[e.rot[0][0]*t.rot[2][0]+e.rot[1][0]*t.rot[2][1]+e.rot[2][0]*t.rot[2][2],e.rot[0][1]*t.rot[2][0]+e.rot[1][1]*t.rot[2][1]+e.rot[2][1]*t.rot[2][2],e.rot[0][2]*t.rot[2][0]+e.rot[1][2]*t.rot[2][1]+e.rot[2][2]*t.rot[2][2]]])}function Yc(t,e){e=Sn(e);const n=t.lat*Lt,i=t.lon*Lt,r=t.dist*Math.cos(n);return new St(r*Math.cos(i),r*Math.sin(i),t.dist*Math.sin(n),e)}function i8(t){const e=t.x*t.x+t.y*t.y,n=Math.sqrt(e+t.z*t.z);let i,r;if(e===0){if(t.z===0)throw"Zero-length vector not allowed.";r=0,i=t.z<0?-90:90}else r=xs*Math.atan2(t.y,t.x),r<0&&(r+=360),i=xs*Math.atan2(t.z,Math.sqrt(e));return new ka(i,r,n)}function r8(t){return t=360-t,t>=360?t-=360:t<0&&(t+=360),t}function s8(t,e){const n=i8(t);return n.lon=r8(n.lon),n.lat+=o8(e,n.lat),n}function o8(t,e){let n;return Yn(e),e<-90||e>90?0:(n=0,n)}function ga(t,e){return new St(t.rot[0][0]*e.x+t.rot[1][0]*e.y+t.rot[2][0]*e.z,t.rot[0][1]*e.x+t.rot[1][1]*e.y+t.rot[2][1]*e.z,t.rot[0][2]*e.x+t.rot[1][2]*e.y+t.rot[2][2]*e.z,e.t)}function a8(t){t=Sn(t);const e=Ox(t,Dn.Into2000),n=zx(t,Dn.Into2000);return Xx(e,n)}function l8(t,e){t=Sn(t);const n=Math.sin(e.latitude*Lt),i=Math.cos(e.latitude*Lt),r=Math.sin(e.longitude*Lt),s=Math.cos(e.longitude*Lt),o=[i*s,i*r,n],a=[-n*s,-n*r,i],l=[r,-s,0],c=-15*hm(t),u=A0(c,o),d=A0(c,a),p=A0(c,l);return new Lr([[d[0],p[0],u[0]],[d[1],p[1],u[1]],[d[2],p[2],u[2]]])}function c8(t,e){const n=l8(t,e);return jx(n)}function u8(t,e){t=Sn(t);const n=c8(t,e),i=a8(t);return Xx(n,i)}function f8(t,e){const n=u8(t,e);return jx(n)}var dv;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(dv||(dv={}));var hv;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(hv||(hv={}));function d8(t){const e=t.rot;return new Lr([[e[0][0],e[1][0],e[2][0]],[e[0][1],e[1][1],e[2][1]],[e[0][2],e[1][2],e[2][2]]])}class h8{constructor(e,n){tt(this,"time");tt(this,"observer");tt(this,"rEqjToHor");tt(this,"rHorToEqj");this.time=new as(e),this.observer=new Bx(n.latitude,n.longitude,n.height),this.rEqjToHor=f8(this.time,this.observer),this.rHorToEqj=d8(this.rEqjToHor)}julianDay(){return 2451545+this.time.tt}gmstHours(){return bA(this.time)}equatorialToHorizontal(e,n){const i=Yc(new ka(n,e,1),this.time),r=ga(this.rEqjToHor,i),s=s8(r,null);return{azDeg:(s.lon%360+360)%360,altDeg:s.lat,hx:r.x,hy:r.y,hz:r.z}}centerHorizontalVec(e,n){const i=Yc(new ka(n,e,1),this.time),r=ga(this.rEqjToHor,i),s=Math.hypot(r.x,r.y,r.z)||1;return[r.x/s,r.y/s,r.z/s]}graticuleHorizontal(){const e=[],n=[],r=(s,o)=>{const a=ga(this.rEqjToHor,Yc(new ka(o,s,1),this.time)),l=Math.hypot(a.x,a.y,a.z)||1;return[a.x/l,a.y/l,a.z/l]};for(const s of[-60,-30,0,30,60]){const o=[],a=[];for(let l=0;l<=96;l++)a.push(r(360*l/96,s));o.push(a),e.push(...o)}for(let s=0;s<360;s+=30){const o=[];for(let a=0;a<=96;a++)o.push(r(s,-90+180*a/96));n.push(o)}return{parallels:e,meridians:n}}nadirEquatorial(){const e=ga(this.rHorToEqj,new St(0,0,-1,this.time)),n=(Math.atan2(e.y,e.x)*180/Math.PI%360+360)%360,i=Math.asin(Math.max(-1,Math.min(1,e.z)))*180/Math.PI;return{ra:n,dec:i}}horizonPointEquatorial(e){const n=e*Math.PI/180,i=new St(Math.cos(n),-Math.sin(n),0,this.time),r=ga(this.rHorToEqj,i),s=Math.hypot(r.x,r.y,r.z)||1,o=(Math.atan2(r.y/s,r.x/s)*180/Math.PI%360+360)%360,a=Math.asin(Math.max(-1,Math.min(1,r.z/s)))*180/Math.PI;return{ra:o,dec:a}}solarSystemBodies(){return[{body:Te.Sun,name:"太阳"},{body:Te.Moon,name:"月球"},{body:Te.Mercury,name:"水星"},{body:Te.Venus,name:"金星"},{body:Te.Mars,name:"火星"},{body:Te.Jupiter,name:"木星"},{body:Te.Saturn,name:"土星"}].map(({body:n,name:i})=>{const r=zA(n,this.time,this.observer,!1,!0),s=n8(n,this.time);return{body:n,name:i,ra:r.ra*15,dec:r.dec,mag:s.mag,phaseFraction:n===Te.Moon?s.phase_fraction:void 0}})}}const xe=t=>t*15,p8=[{id:"polaris",name:"勾陈一（北极星）",designation:"α UMi",ra:xe(2+31/60+49.1/3600),dec:89.2641,mag:1.98,tags:["polar","bright"]},{id:"kochab",name:"帝（北极二）",designation:"β UMi",ra:xe(14+50/60+42.3/3600),dec:74.1555,mag:2.07,tags:["polar"]},{id:"pherkad",name:"太子（北极一）",designation:"γ UMi",ra:xe(15+20/60+43.7/3600),dec:71.8344,mag:3.04,tags:["polar"]},{id:"zeta-umi",name:"开阳增一",designation:"ζ UMi",ra:xe(16+0/60),dec:77.8,mag:4.32,tags:["polar"]},{id:"yildun",name:"勾陈二",designation:"δ UMi",ra:xe(17+32/60+13/3600),dec:86.5851,mag:4.36,tags:["polar"]},{id:"epsilon-umi",name:"勾陈四",designation:"ε UMi",ra:xe(16+45/60+58/3600),dec:82.0411,mag:4.21,tags:["polar"]},{id:"cassiopeia-alpha",name:"王良一",designation:"α Cas",ra:xe(0+40/60+30.4/3600),dec:56.5373,mag:2.24,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-beta",name:"王良四",designation:"β Cas",ra:xe(0+9/60+10.7/3600),dec:59.1498,mag:2.27,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-gamma",name:"策",designation:"γ Cas",ra:xe(0+56/60+42.5/3600),dec:60.7167,mag:2.47,tags:["polar","zero-cross"]},{id:"cassiopeia-delta",name:"阁道三",designation:"δ Cas",ra:xe(1+25/60+49/3600),dec:60.2353,mag:2.68,tags:["polar"]},{id:"cephei-alpha",name:"天钩五",designation:"α Cep",ra:xe(21+18/60+34.6/3600),dec:62.5856,mag:2.51,tags:["polar","bright"]},{id:"cephei-gamma",name:"少卫增八",designation:"γ Cep",ra:xe(23+39/60+20.9/3600),dec:77.6322,mag:3.21,tags:["polar","zero-cross"]},{id:"draco-thuban",name:"右枢（古北极星）",designation:"α Dra",ra:xe(14+4/60+23.4/3600),dec:64.3758,mag:3.65,tags:["polar"]},{id:"ursa-minor-eta",name:"勾陈增九",designation:"η UMi",ra:xe(16+17/60+30.5/3600),dec:75.7553,mag:4.95,tags:["polar"]},{id:"alpheratz",name:"壁宿二",designation:"α And",ra:xe(0+8/60+23.3/3600),dec:29.0904,mag:2.06,tags:["zero-cross","bright"]},{id:"algenib",name:"壁宿一",designation:"γ Peg",ra:xe(0+13/60+14.2/3600),dec:15.1836,mag:2.83,tags:["zero-cross","bright"]},{id:"markab",name:"室宿一",designation:"α Peg",ra:xe(23+4/60+46.5/3600),dec:15.2053,mag:2.49,tags:["zero-cross","bright"]},{id:"scheat",name:"室宿二",designation:"β Peg",ra:xe(23+3/60+46.5/3600),dec:28.083,mag:2.42,tags:["zero-cross","bright"]},{id:"alrescha",name:"外屏七",designation:"α Psc",ra:xe(2+2/60+2.8/3600),dec:2.7486,mag:3.82,tags:["zero-cross"]},{id:"eta-and",name:"奎宿四（仙女座η）",designation:"η And",ra:xe(0+57/60+12.4/3600),dec:23.4236,mag:4.4,tags:["zero-cross"]},{id:"delta-psc",name:"外屏一",designation:"δ Psc",ra:xe(0+48/60+40.9/3600),dec:7.5786,mag:4.43,tags:["zero-cross"]},{id:"epsilon-psc",name:"外屏二",designation:"ε Psc",ra:xe(1+2/60+56.6/3600),dec:7.8883,mag:4.27,tags:["zero-cross"]},{id:"mirach",name:"奎宿九",designation:"β And",ra:xe(1+9/60+43.9/3600),dec:35.6206,mag:2.05,tags:["zero-cross","bright"]},{id:"mu-and",name:"天大将军一",designation:"μ And",ra:xe(0+56/60+45.2/3600),dec:38.4995,mag:3.86,tags:["zero-cross"]},{id:"51-and",name:"车府增廿一",designation:"51 And",ra:xe(1+37/60+59.6/3600),dec:48.6333,mag:3.57,tags:[]},{id:"phoenicis-alpha",name:"火鸟六",designation:"α Phe",ra:xe(0+26/60+17/3600),dec:-42.306,mag:2.39,tags:["zero-cross","bright"]},{id:"arcturus",name:"大角星",designation:"α Boo",ra:xe(14+15/60+39.7/3600),dec:19.1825,mag:-.05,tags:["bright"]},{id:"vega",name:"织女一（织女星）",designation:"α Lyr",ra:xe(18+36/60+56.3/3600),dec:38.7837,mag:.03,tags:["bright"]},{id:"capella",name:"五车二",designation:"α Aur",ra:xe(5+16/60+41.4/3600),dec:45.998,mag:.08,tags:["bright"]},{id:"rigel",name:"参宿七",designation:"β Ori",ra:xe(5+14/60+32.3/3600),dec:-8.2017,mag:.13,tags:["bright"]},{id:"procyon",name:"南河三",designation:"α CMi",ra:xe(7+39/60+18.1/3600),dec:5.225,mag:.34,tags:["bright"]},{id:"betelgeuse",name:"参宿四",designation:"α Ori",ra:xe(5+55/60+10.3/3600),dec:7.4071,mag:.45,tags:["bright"]},{id:"altair",name:"河鼓二（牛郎星）",designation:"α Aql",ra:xe(19+50/60+47/3600),dec:8.8683,mag:.77,tags:["bright"]},{id:"aldebaran",name:"毕宿五",designation:"α Tau",ra:xe(4+35/60+55.2/3600),dec:16.5093,mag:.85,tags:["bright"]},{id:"antares",name:"心宿二（火星之敌）",designation:"α Sco",ra:xe(16+29/60+24.5/3600),dec:-26.432,mag:1.06,tags:["bright"]},{id:"spica",name:"角宿一",designation:"α Vir",ra:xe(13+25/60+11.6/3600),dec:-11.1614,mag:.98,tags:["bright"]},{id:"pollux",name:"北河三",designation:"β Gem",ra:xe(7+45/60+18.9/3600),dec:28.0262,mag:1.14,tags:["bright"]},{id:"deneb",name:"天津四",designation:"α Cyg",ra:xe(20+41/60+25.9/3600),dec:45.2803,mag:1.25,tags:["bright"]},{id:"regulus",name:"轩辕十四",designation:"α Leo",ra:xe(10+8/60+22.3/3600),dec:11.9672,mag:1.35,tags:["bright"]},{id:"castor",name:"北河二",designation:"α Gem",ra:xe(7+34/60+35.9/3600),dec:31.8884,mag:1.58,tags:["bright"]},{id:"bellatrix",name:"参宿五",designation:"γ Ori",ra:xe(5+25/60+7.9/3600),dec:6.3497,mag:1.64,tags:["bright"]},{id:"eltanin",name:"天棓四",designation:"γ Dra",ra:xe(17+56/60+36.4/3600),dec:51.4889,mag:2.24,tags:["bright"]},{id:"dubhe",name:"天枢",designation:"α UMa",ra:xe(11+3/60+43.7/3600),dec:61.751,mag:1.79,tags:["bright","polar"]},{id:"merak",name:"天璇",designation:"β UMa",ra:xe(11+1/60+50.5/3600),dec:56.3824,mag:2.37,tags:["bright","polar"]},{id:"alioth",name:"玉衡",designation:"ε UMa",ra:xe(12+54/60+1.7/3600),dec:55.9598,mag:1.77,tags:["bright","polar"]},{id:"mizar",name:"开阳",designation:"ζ UMa",ra:xe(13+23/60+55.5/3600),dec:54.9254,mag:2.27,tags:["bright","polar"]},{id:"fomalhaut",name:"北落师门",designation:"α PsA",ra:xe(22+57/60+39/3600),dec:-29.6222,mag:1.16,tags:["bright","zero-cross"]},{id:"achernar",name:"水委一",designation:"α Eri",ra:xe(1+37/60+42.8/3600),dec:-57.2367,mag:.46,tags:["bright"]},{id:"canopus",name:"老人星",designation:"α Car",ra:xe(6+23/60+57.1/3600),dec:-52.6957,mag:-.74,tags:["bright"]},{id:"sirius",name:"天狼星",designation:"α CMa",ra:xe(6+45/60+9/3600),dec:-16.7161,mag:-1.46,tags:["bright"]},{id:"hadar",name:"马腹一",designation:"β Cen",ra:xe(14+3/60+49.4/3600),dec:-60.373,mag:.61,tags:["bright"]},{id:"rigil-kent",name:"南门二",designation:"α Cen",ra:xe(14+39/60+36.5/3600),dec:-60.8334,mag:-.27,tags:["bright"]},{id:"acrux",name:"十字架二",designation:"α Cru",ra:xe(12+26/60+35.9/3600),dec:-63.0991,mag:.77,tags:["bright"]},{id:"mimosa",name:"十字架三",designation:"β Cru",ra:xe(12+47/60+43.3/3600),dec:-59.6887,mag:1.25,tags:["bright"]},{id:"avior",name:"海石一",designation:"ε Car",ra:xe(8+22/60+30.8/3600),dec:-59.5095,mag:1.86,tags:["bright"]},{id:"suhail",name:"天记",designation:"γ Vel",ra:xe(8+9/60+32/3600),dec:-47.3428,mag:1.78,tags:["bright"]},{id:"peacock",name:"孔雀十一",designation:"α Pav",ra:xe(20+25/60+38.9/3600),dec:-56.7351,mag:1.94,tags:["bright"]},{id:"ankaa",name:"火鸟九",designation:"β Phe",ra:xe(23+26/60),dec:-46.95,mag:3.31,tags:["zero-cross"]},{id:"hamal",name:"娄宿三",designation:"α Ari",ra:xe(2+7/60+10.4/3600),dec:23.4624,mag:2,tags:["bright"]},{id:"denebola",name:"五帝座一",designation:"β Leo",ra:xe(11+49/60+3.6/3600),dec:14.572,mag:2.14,tags:["bright"]},{id:"alphecca",name:"贯索四",designation:"α CrB",ra:xe(15+34/60+41.3/3600),dec:26.7147,mag:2.23,tags:["bright"]},{id:"rasalhague",name:"侯（蛇夫座α）",designation:"α Oph",ra:xe(17+34/60+56.1/3600),dec:12.5601,mag:2.07,tags:["bright"]},{id:"enif",name:"危宿三",designation:"ε Peg",ra:xe(21+44/60+11.2/3600),dec:9.875,mag:2.39,tags:["bright"]},{id:"algol",name:"大陵五（魔星）",designation:"β Per",ra:xe(3+8/60+10.1/3600),dec:40.9556,mag:2.12,tags:["bright"]},{id:"mirfak",name:"天船三",designation:"α Per",ra:xe(3+24/60+19.4/3600),dec:49.8612,mag:1.79,tags:["bright","polar"]}];function m8(t){return t==="太阳"?"sun":t==="月球"?"moon":"planet"}function g8(t,e,n,i,r){const s=t.solarSystemBodies(),o=[];for(const h of p8){const g=t.equatorialToHorizontal(h.ra,h.dec),x=vh(e.centerRa,e.centerDec,h.ra,h.dec),m=x<=e.radiusDeg,f=g.altDeg>=0;o.push({id:h.id,name:h.name,designation:h.designation,kind:"star",ra:h.ra,dec:h.dec,mag:h.mag,az:g.azDeg,alt:g.altDeg,hx:g.hx,hy:g.hy,hz:g.hz,sepFromCenter:x,inFov:m,passesMag:h.mag<=n,aboveHorizon:f,tags:h.tags})}for(const h of s){const g=t.equatorialToHorizontal(h.ra,h.dec),x=vh(e.centerRa,e.centerDec,h.ra,h.dec),m=x<=e.radiusDeg,f=g.altDeg>=0;o.push({id:`body-${h.body}`,name:h.name,designation:h.name,kind:m8(h.name),ra:h.ra,dec:h.dec,mag:h.mag,az:g.azDeg,alt:g.altDeg,hx:g.hx,hy:g.hy,hz:g.hz,sepFromCenter:x,inFov:m,passesMag:!0,aboveHorizon:f,tags:[],phaseFraction:h.phaseFraction})}const a=[],l=[],c={0:"北点 N",90:"东点 E",180:"南点 S",270:"西点 W"},u=240;for(let h=0;h<u;h++){const g=360*h/u,x=t.horizonPointEquatorial(g);a.push([x.ra,x.dec]),g in c&&l.push({label:c[g],ra:x.ra,dec:x.dec})}a.push(a[0]);const d=t.nadirEquatorial(),p=t.equatorialToHorizontal(e.centerRa,e.centerDec);for(const h of o)h.inFov=h.sepFromCenter<=e.radiusDeg;return{targets:o,horizon:{ring:a,nadirRa:d.ra,nadirDec:d.dec,cardinalPoints:l},centerAlt:p.altDeg,centerAz:p.azDeg,gmstHours:t.gmstHours(),julianDay:t.julianDay(),fovBoundary:r}}function R0(t,e){return t.inFov&&t.passesMag&&(!e||t.aboveHorizon)}const v8="local-starchart",_8=2,ul="fovs",fl="annotations",dl="handouts";let Tc=null;function x8(){return Tc||(Tc=new Promise((t,e)=>{const n=indexedDB.open(v8,_8);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(ul)||i.createObjectStore(ul,{keyPath:"uuid"}),i.objectStoreNames.contains(fl)||i.createObjectStore(fl,{keyPath:"uuid"}),i.objectStoreNames.contains(dl)||i.createObjectStore(dl,{keyPath:"uuid"})},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),Tc)}function er(t,e,n){return x8().then(i=>new Promise((r,s)=>{const o=i.transaction(t,e),a=n(o.objectStore(t));a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)}))}async function y8(t){await er(ul,"readwrite",e=>e.put(t))}async function P0(){return(await er(ul,"readonly",e=>e.getAll())).sort((e,n)=>n.createdAt-e.createdAt)}async function S8(t){await er(ul,"readwrite",e=>e.delete(t))}async function M8(t){await er(fl,"readwrite",e=>e.put(t))}async function b0(){return(await er(fl,"readonly",e=>e.getAll())).sort((e,n)=>e.createdAt-n.createdAt)}async function E8(t){await er(fl,"readwrite",e=>e.delete(t))}async function w8(t){await er(dl,"readwrite",e=>e.put(t))}async function D0(){return(await er(dl,"readonly",e=>e.getAll())).sort((e,n)=>n.createdAt-e.createdAt)}async function T8(t){await er(dl,"readwrite",e=>e.delete(t))}const pv=zu[0],A8="2026-09-30T13:00:00Z",C8={centerRa:213.9,centerDec:19.2,radiusDeg:30};function L0(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2)}function R8(){const[t,e]=Oe.useState(pv),[n,i]=Oe.useState(A8),[r,s]=Oe.useState(C8),[o,a]=Oe.useState(4.5),[l,c]=Oe.useState(!1),[u,d]=Oe.useState(!0),[p,h]=Oe.useState(!0),[g,x]=Oe.useState(null),[m,f]=Oe.useState(null),[_,v]=Oe.useState(null),[S,R]=Oe.useState([]),[A,T]=Oe.useState([]),[P,k]=Oe.useState([]),[y,M]=Oe.useState(!1),[H,B]=Oe.useState({name:"",fovUuid:null,targetId:null,annotationUuids:[],projection:"stereographic"});Oe.useEffect(()=>{P0().then(R).catch(()=>{}),b0().then(T).catch(()=>{}),D0().then(k).catch(()=>{})},[]);const W=Oe.useMemo(()=>{const oe=new Date(n);return Number.isNaN(oe.getTime())?null:new h8(oe,t)},[t.latitude,t.longitude,t.height,n]),N=Oe.useMemo(()=>e5(r.centerRa,r.centerDec,r.radiusDeg,128),[r]),I=Oe.useMemo(()=>W?g8(W,r,o,l,N):null,[W,r,o,l,N]),q=Oe.useMemo(()=>W==null?void 0:W.graticuleHorizontal(),[W]),L=Oe.useMemo(()=>g&&I?I.targets.find(oe=>oe.id===g)??null:null,[g,I]),Z=oe=>{x(oe),oe&&v({id:oe,nonce:Date.now()})},X=oe=>{const fe=jc.find(E=>E.id===oe);if(!fe)return;const C=zu.find(E=>E.id===fe.siteId)??pv;e({...C}),i(fe.timeUtcIso),s({centerRa:fe.centerRaDeg,centerDec:fe.centerDecDeg,radiusDeg:fe.fovRadiusDeg}),a(fe.magLimit),c(fe.horizonClip),fe.suggestSelectId&&(x(fe.suggestSelectId),v({id:fe.suggestSelectId,nonce:Date.now()}))},ne=oe=>{const fe={uuid:L0(),name:oe,createdAt:Date.now(),fov:{...r},siteId:t.id,timeUtcIso:n};y8(fe).then(()=>P0().then(R))},ye=oe=>S8(oe).then(()=>P0().then(R)),Ie=oe=>s({...oe.fov}),Y=(oe,fe)=>{if(!L){alert("请先在任一视图中点击一个目标，批注将锚定在该目标的 J2000 坐标上。");return}const C={uuid:L0(),createdAt:Date.now(),ra:L.ra,dec:L.dec,text:oe,color:fe};M8(C).then(()=>b0().then(T))},ee=oe=>E8(oe).then(()=>b0().then(T)),le=oe=>I?{projectionLabel:oe,site:t,timeUtcIso:n,fov:r,julianDay:I.julianDay,gmstHours:I.gmstHours,horizonClip:l,magLimit:o}:null,ue=oe=>{if(!I)return;const C=le(oe==="stereographic"?"立体投影 Stereographic":"等距方位投影 Azimuthal Equidistant"),E=I.targets.filter(J=>R0(J,l)),G=rv(oe,I,E,A,C);Nh(`星图_${oe}_${n.slice(0,10)}.svg`,G,"image/svg+xml;charset=utf-8")},Ue=async oe=>{if(!I)return;const C=le("立体投影 Stereographic"),E=I.targets.filter(J=>R0(J,l)),G=rv(oe,I,E,A,C);await Dx(G,`星图_${oe}_${n.slice(0,10)}.png`)},V=()=>{if(!I)return;const oe=le("数据导出 JSON"),fe=I.targets.filter(C=>R0(C,l));Nh(`星表视场_${n.slice(0,10)}.json`,uA(I,fe,A,oe),"application/json")},Ne=Oe.useMemo(()=>I?{site:t,timeUtcIso:n,julianDay:I.julianDay,gmstHours:I.gmstHours,magLimit:o,horizonClip:l}:null,[I,t,n,o,l]),Qe=Oe.useMemo(()=>I?I.targets.filter(oe=>oe.inFov&&oe.passesMag):[],[I]),he=Oe.useMemo(()=>({uuid:"draft",name:H.name||"未命名版式",createdAt:0,fovUuid:H.fovUuid,targetId:H.targetId,annotationUuids:H.annotationUuids,projection:H.projection}),[H]),b=Oe.useMemo(()=>!I||!Ne?null:Y5(he,{sky:I,fov:r,meta:Ne,savedFovs:S,annotations:A}),[he,I,r,Ne,S,A]),We=oe=>B(fe=>({...fe,...oe})),Ce=()=>{if(!H.name.trim())return;const oe={uuid:L0(),name:H.name.trim(),createdAt:Date.now(),fovUuid:H.fovUuid,targetId:H.targetId,annotationUuids:[...H.annotationUuids],projection:H.projection};w8(oe).then(()=>D0().then(k))},Le=oe=>{B({name:oe.name,fovUuid:oe.fovUuid,targetId:oe.targetId,annotationUuids:[...oe.annotationUuids],projection:oe.projection});const fe=oe.fovUuid?S.find(C=>C.uuid===oe.fovUuid):null;fe&&s({...fe.fov})},Re=oe=>T8(oe).then(()=>D0().then(k));return D.jsxs("div",{className:"app",children:[D.jsxs("header",{className:"app-header",children:[D.jsxs("div",{children:[D.jsx("h1",{children:"本地星图工具"}),D.jsx("p",{children:"球面（Three.js） · 立体投影 · 等距方位投影（D3 geo）三视对照 — 同一片天区、同一组目标"})]}),D.jsxs("div",{className:"export-bar",children:[D.jsx("button",{className:"btn",onClick:()=>ue("stereographic"),children:"导出 立体 SVG"}),D.jsx("button",{className:"btn",onClick:()=>ue("equidistant"),children:"导出 等距 SVG"}),D.jsx("button",{className:"btn",onClick:()=>Ue("stereographic"),children:"导出 PNG"}),D.jsx("button",{className:"btn",onClick:V,children:"导出 JSON"})]})]}),D.jsxs("div",{className:"main-grid",children:[D.jsx("aside",{className:"sidebar",children:D.jsx(G5,{site:t,timeUtcIso:n,fov:r,magLimit:o,horizonClip:l,showHorizon:u,showGraticule:p,savedFovs:S,annotations:A,onChangeSite:e,onChangeTime:i,onChangeFov:s,onChangeMag:a,onToggleHorizonClip:c,onToggleShowHorizon:d,onToggleGraticule:h,onApplyScenario:X,onSaveFov:ne,onLoadFov:Ie,onDeleteFov:ye,onAddAnnotation:Y,onDeleteAnnotation:ee,handoutDraft:H,savedHandouts:P,handoutTargets:Qe,handoutResolved:b,onChangeHandoutDraft:We,onSaveHandout:Ce,onLoadHandout:Le,onDeleteHandout:Re,onOpenHandout:()=>M(!0)})}),D.jsx("main",{className:"content",children:I?D.jsxs(D.Fragment,{children:[D.jsxs("section",{className:"view-row globe-section",children:[D.jsx("h2",{className:"view-label",children:"球面视图 · 本地地平天球（Three.js）"}),D.jsx(n5,{sky:I,fov:r,horizonClip:l,showGraticule:p,annotations:A,selectedId:g,hoverId:m,onSelect:Z,onHover:f,focusToken:_,graticuleHorizontal:q})]}),D.jsxs("section",{className:"view-row proj-section",children:[D.jsx(nv,{kind:"stereographic",sky:I,fov:r,horizonClip:l,showHorizon:u,annotations:A,selectedId:g,hoverId:m,onSelect:Z,onHover:f}),D.jsx(nv,{kind:"equidistant",sky:I,fov:r,horizonClip:l,showHorizon:u,annotations:A,selectedId:g,hoverId:m,onSelect:Z,onHover:f})]}),D.jsx($5,{target:L,centerAlt:I.centerAlt,centerAz:I.centerAz,gmstHours:I.gmstHours,julianDay:I.julianDay})]}):D.jsx("div",{className:"bad-time",children:"时间格式无效，请检查 UTC 时间输入。"})})]}),D.jsx("footer",{className:"app-footer",children:"纯前端本地应用，无后端、无网络请求 · 星表 J2000.0 近似坐标 · 地平坐标转换 astronomy-engine（Rotation_EQJ_HOR，无大气折射）· 角距一律按球面 haversine 计算，图上像素距离不代表实际角距"}),y&&b&&D.jsx(fA,{data:b,onClose:()=>M(!1)})]})}I0.createRoot(document.getElementById("root")).render(D.jsx(g3.StrictMode,{children:D.jsx(R8,{})}));
