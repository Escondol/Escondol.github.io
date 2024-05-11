function pp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var mp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fc={exports:{}},oi={},dc={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),hp=Symbol.for("react.portal"),vp=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),xp=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),kp=Symbol.for("react.suspense"),_p=Symbol.for("react.memo"),Ep=Symbol.for("react.lazy"),Vs=Symbol.iterator;function Cp(e){return e===null||typeof e!="object"?null:(e=Vs&&e[Vs]||e["@@iterator"],typeof e=="function"?e:null)}var pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mc=Object.assign,hc={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=hc,this.updater=n||pc}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vc(){}vc.prototype=Bn.prototype;function Na(e,t,n){this.props=e,this.context=t,this.refs=hc,this.updater=n||pc}var Ta=Na.prototype=new vc;Ta.constructor=Na;mc(Ta,Bn.prototype);Ta.isPureReactComponent=!0;var Bs=Array.isArray,yc=Object.prototype.hasOwnProperty,Oa={current:null},gc={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)yc.call(t,r)&&!gc.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ur,type:e,key:i,ref:a,props:o,_owner:Oa.current}}function Pp(e,t){return{$$typeof:Ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function La(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ws=/\/+/g;function Ji(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jp(""+e.key):t.toString(36)}function ho(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ur:case hp:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ji(a,0):r,Bs(o)?(n="",e!=null&&(n=e.replace(Ws,"$&/")+"/"),ho(o,t,n,"",function(s){return s})):o!=null&&(La(o)&&(o=Pp(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ws,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Bs(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+Ji(i,l);a+=ho(i,t,n,u,o)}else if(u=Cp(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+Ji(i,l++),a+=ho(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Kr(e,t,n){if(e==null)return e;var r=[],o=0;return ho(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Np(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},vo={transition:null},Tp={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:vo,ReactCurrentOwner:Oa};function xc(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!La(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Bn;V.Fragment=vp;V.Profiler=gp;V.PureComponent=Na;V.StrictMode=yp;V.Suspense=kp;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;V.act=xc;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mc({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Oa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)yc.call(t,u)&&!gc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:Ur,type:e.type,key:o,ref:i,props:r,_owner:a}};V.createContext=function(e){return e={$$typeof:xp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wp,_context:e},e.Consumer=e};V.createElement=wc;V.createFactory=function(e){var t=wc.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Sp,render:e}};V.isValidElement=La;V.lazy=function(e){return{$$typeof:Ep,_payload:{_status:-1,_result:e},_init:Np}};V.memo=function(e,t){return{$$typeof:_p,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};V.unstable_act=xc;V.useCallback=function(e,t){return Le.current.useCallback(e,t)};V.useContext=function(e){return Le.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};V.useEffect=function(e,t){return Le.current.useEffect(e,t)};V.useId=function(){return Le.current.useId()};V.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Le.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};V.useRef=function(e){return Le.current.useRef(e)};V.useState=function(e){return Le.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Le.current.useTransition()};V.version="18.3.1";dc.exports=V;var z=dc.exports;const Sc=cc(z),jl=pp({__proto__:null,default:Sc},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=z,Lp=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),Rp=Object.prototype.hasOwnProperty,Mp=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$p={key:!0,ref:!0,__self:!0,__source:!0};function kc(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Rp.call(t,r)&&!$p.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Lp,type:e,key:i,ref:a,props:o,_owner:Mp.current}}oi.Fragment=zp;oi.jsx=kc;oi.jsxs=kc;fc.exports=oi;var C=fc.exports,_c={exports:{}},Ye={},Ec={exports:{}},Cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,O){var j=R.length;R.push(O);e:for(;0<j;){var F=j-1>>>1,A=R[F];if(0<o(A,O))R[F]=O,R[j]=A,j=F;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var O=R[0],j=R.pop();if(j!==O){R[0]=j;e:for(var F=0,A=R.length,Ne=A>>>1;F<Ne;){var _=2*(F+1)-1,fn=R[_],I=_+1,Q=R[I];if(0>o(fn,j))I<A&&0>o(Q,fn)?(R[F]=Q,R[I]=j,F=I):(R[F]=fn,R[_]=j,F=_);else if(I<A&&0>o(Q,j))R[F]=Q,R[I]=j,F=I;else break e}}return O}function o(R,O){var j=R.sortIndex-O.sortIndex;return j!==0?j:R.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],s=[],c=1,f=null,p=3,m=!1,y=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var O=n(s);O!==null;){if(O.callback===null)r(s);else if(O.startTime<=R)r(s),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(s)}}function w(R){if(g=!1,v(R),!y)if(n(u)!==null)y=!0,W(S);else{var O=n(s);O!==null&&Fe(w,O.startTime-R)}}function S(R,O){y=!1,g&&(g=!1,h(P),P=-1),m=!0;var j=p;try{for(v(O),f=n(u);f!==null&&(!(f.expirationTime>O)||R&&!M());){var F=f.callback;if(typeof F=="function"){f.callback=null,p=f.priorityLevel;var A=F(f.expirationTime<=O);O=e.unstable_now(),typeof A=="function"?f.callback=A:f===n(u)&&r(u),v(O)}else r(u);f=n(u)}if(f!==null)var Ne=!0;else{var _=n(s);_!==null&&Fe(w,_.startTime-O),Ne=!1}return Ne}finally{f=null,p=j,m=!1}}var E=!1,k=null,P=-1,D=5,L=-1;function M(){return!(e.unstable_now()-L<D)}function U(){if(k!==null){var R=e.unstable_now();L=R;var O=!0;try{O=k(!0,R)}finally{O?B():(E=!1,k=null)}}else E=!1}var B;if(typeof d=="function")B=function(){d(U)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,J=K.port2;K.port1.onmessage=U,B=function(){J.postMessage(null)}}else B=function(){x(U,0)};function W(R){k=R,E||(E=!0,B())}function Fe(R,O){P=x(function(){R(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,W(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var j=p;p=O;try{return R()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,O){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=p;p=R;try{return O()}finally{p=j}},e.unstable_scheduleCallback=function(R,O,j){var F=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?F+j:F):j=F,R){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=j+A,R={id:c++,callback:O,priorityLevel:R,startTime:j,expirationTime:A,sortIndex:-1},j>F?(R.sortIndex=j,t(s,R),n(u)===null&&R===n(s)&&(g?(h(P),P=-1):g=!0,Fe(w,j-F))):(R.sortIndex=A,t(u,R),y||m||(y=!0,W(S))),R},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(R){var O=p;return function(){var j=p;p=O;try{return R.apply(this,arguments)}finally{p=j}}}})(Cc);Ec.exports=Cc;var Ip=Ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap=z,Qe=Ip;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pc=new Set,yr={};function sn(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(yr[e]=t,e=0;e<t.length;e++)Pc.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=Object.prototype.hasOwnProperty,Dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hs={},Qs={};function Fp(e){return Nl.call(Qs,e)?!0:Nl.call(Hs,e)?!1:Dp.test(e)?Qs[e]=!0:(Hs[e]=!0,!1)}function Up(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vp(e,t,n,r){if(t===null||typeof t>"u"||Up(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var za=/[\-:]([a-z])/g;function Ra(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(za,Ra);xe[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(za,Ra);xe[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(za,Ra);xe[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ma(e,t,n,r){var o=xe.hasOwnProperty(t)?xe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vp(t,n,o,r)&&(n=null),r||o===null?Fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),mn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),$a=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),jc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Ia=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),Aa=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Tc=Symbol.for("react.offscreen"),Ys=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=Ys&&e[Ys]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,qi;function or(e){if(qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||""}return`
`+qi+e}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{el=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Bp(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case mn:return"Portal";case Tl:return"Profiler";case $a:return"StrictMode";case Ol:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nc:return(e.displayName||"Context")+".Consumer";case jc:return(e._context.displayName||"Context")+".Provider";case Ia:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Aa:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function Wp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===$a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hp(e){var t=Oc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){e._valueTracker||(e._valueTracker=Hp(e))}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Oc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zc(e,t){t=t.checked,t!=null&&Ma(e,"checked",t,!1)}function Ml(e,t){zc(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$l(e,t.type,n):t.hasOwnProperty("defaultValue")&&$l(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $l(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(ir(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Rc(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,$c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qp=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){Qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function Ic(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function Ac(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ic(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Yp=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dl(e,t){if(t){if(Yp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function Da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,jn=null,Nn=null;function Zs(e){if(e=Wr(e)){if(typeof Vl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ui(t),Vl(e.stateNode,e.type,t))}}function Dc(e){jn?Nn?Nn.push(e):Nn=[e]:jn=e}function Fc(){if(jn){var e=jn,t=Nn;if(Nn=jn=null,Zs(e),t)for(e=0;e<t.length;e++)Zs(t[e])}}function Uc(e,t){return e(t)}function Vc(){}var nl=!1;function Bc(e,t,n){if(nl)return e(t,n);nl=!0;try{return Uc(e,t,n)}finally{nl=!1,(jn!==null||Nn!==null)&&(Vc(),Fc())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Bl=!1;if(_t)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Bl=!1}function Xp(e,t,n,r,o,i,a,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}}var ur=!1,Lo=null,zo=!1,Wl=null,Kp={onError:function(e){ur=!0,Lo=e}};function Gp(e,t,n,r,o,i,a,l,u){ur=!1,Lo=null,Xp.apply(Kp,arguments)}function bp(e,t,n,r,o,i,a,l,u){if(Gp.apply(this,arguments),ur){if(ur){var s=Lo;ur=!1,Lo=null}else throw Error(N(198));zo||(zo=!0,Wl=s)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Js(e){if(un(e)!==e)throw Error(N(188))}function Zp(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Js(o),e;if(i===r)return Js(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Hc(e){return e=Zp(e),e!==null?Qc(e):null}function Qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qc(e);if(t!==null)return t;e=e.sibling}return null}var Yc=Qe.unstable_scheduleCallback,qs=Qe.unstable_cancelCallback,Jp=Qe.unstable_shouldYield,qp=Qe.unstable_requestPaint,se=Qe.unstable_now,e0=Qe.unstable_getCurrentPriorityLevel,Fa=Qe.unstable_ImmediatePriority,Xc=Qe.unstable_UserBlockingPriority,Ro=Qe.unstable_NormalPriority,t0=Qe.unstable_LowPriority,Kc=Qe.unstable_IdlePriority,ii=null,ht=null;function n0(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:i0,r0=Math.log,o0=Math.LN2;function i0(e){return e>>>=0,e===0?32:31-(r0(e)/o0|0)|0}var Jr=64,qr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=lr(l):(i&=a,i!==0&&(r=lr(i)))}else a=n&~o,a!==0?r=lr(a):i!==0&&(r=lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),o=1<<n,r|=e[n],t&=~o;return r}function l0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),l=1<<a,u=o[a];u===-1?(!(l&n)||l&r)&&(o[a]=l0(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gc(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function s0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ua(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function bc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zc,Va,Jc,qc,ef,Ql=!1,eo=[],$t=null,It=null,At=null,xr=new Map,Sr=new Map,Lt=[],u0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Zn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Wr(t),t!==null&&Va(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function c0(e,t,n,r,o){switch(t){case"focusin":return $t=Zn($t,e,t,n,r,o),!0;case"dragenter":return It=Zn(It,e,t,n,r,o),!0;case"mouseover":return At=Zn(At,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return xr.set(i,Zn(xr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Sr.set(i,Zn(Sr.get(i)||null,e,t,n,r,o)),!0}return!1}function tf(e){var t=bt(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=Wc(n),t!==null){e.blockedOn=t,ef(e.priority,function(){Jc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ul=r,n.target.dispatchEvent(r),Ul=null}else return t=Wr(n),t!==null&&Va(t),e.blockedOn=n,!1;t.shift()}return!0}function tu(e,t,n){yo(e)&&n.delete(t)}function f0(){Ql=!1,$t!==null&&yo($t)&&($t=null),It!==null&&yo(It)&&(It=null),At!==null&&yo(At)&&(At=null),xr.forEach(tu),Sr.forEach(tu)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ql||(Ql=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,f0)))}function kr(e){function t(o){return Jn(o,e)}if(0<eo.length){Jn(eo[0],e);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&Jn($t,e),It!==null&&Jn(It,e),At!==null&&Jn(At,e),xr.forEach(t),Sr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)tf(n),n.blockedOn===null&&Lt.shift()}var Tn=jt.ReactCurrentBatchConfig,$o=!0;function d0(e,t,n,r){var o=G,i=Tn.transition;Tn.transition=null;try{G=1,Ba(e,t,n,r)}finally{G=o,Tn.transition=i}}function p0(e,t,n,r){var o=G,i=Tn.transition;Tn.transition=null;try{G=4,Ba(e,t,n,r)}finally{G=o,Tn.transition=i}}function Ba(e,t,n,r){if($o){var o=Yl(e,t,n,r);if(o===null)pl(e,t,r,Io,n),eu(e,r);else if(c0(o,e,t,n,r))r.stopPropagation();else if(eu(e,r),t&4&&-1<u0.indexOf(e)){for(;o!==null;){var i=Wr(o);if(i!==null&&Zc(i),i=Yl(e,t,n,r),i===null&&pl(e,t,r,Io,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var Io=null;function Yl(e,t,n,r){if(Io=null,e=Da(r),e=bt(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Io=e,null}function nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e0()){case Fa:return 1;case Xc:return 4;case Ro:case t0:return 16;case Kc:return 536870912;default:return 16}default:return 16}}var Rt=null,Wa=null,go=null;function rf(){if(go)return go;var e,t=Wa,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return go=o.slice(e,1<r?1-r:void 0)}function wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function nu(){return!1}function Xe(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?to:nu,this.isPropagationStopped=nu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Xe(Wn),Br=le({},Wn,{view:0,detail:0}),m0=Xe(Br),ol,il,qn,li=le({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(ol=e.screenX-qn.screenX,il=e.screenY-qn.screenY):il=ol=0,qn=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:il}}),ru=Xe(li),h0=le({},li,{dataTransfer:0}),v0=Xe(h0),y0=le({},Br,{relatedTarget:0}),ll=Xe(y0),g0=le({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),w0=Xe(g0),x0=le({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S0=Xe(x0),k0=le({},Wn,{data:0}),ou=Xe(k0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C0[e])?!!t[e]:!1}function Qa(){return P0}var j0=le({},Br,{key:function(e){if(e.key){var t=_0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qa,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),N0=Xe(j0),T0=le({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=Xe(T0),O0=le({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qa}),L0=Xe(O0),z0=le({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=Xe(z0),M0=le({},li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=Xe(M0),I0=[9,13,27,32],Ya=_t&&"CompositionEvent"in window,cr=null;_t&&"documentMode"in document&&(cr=document.documentMode);var A0=_t&&"TextEvent"in window&&!cr,of=_t&&(!Ya||cr&&8<cr&&11>=cr),lu=" ",au=!1;function lf(e,t){switch(e){case"keyup":return I0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function D0(e,t){switch(e){case"compositionend":return af(t);case"keypress":return t.which!==32?null:(au=!0,lu);case"textInput":return e=t.data,e===lu&&au?null:e;default:return null}}function F0(e,t){if(vn)return e==="compositionend"||!Ya&&lf(e,t)?(e=rf(),go=Wa=Rt=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return of&&t.locale!=="ko"?null:t.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U0[e.type]:t==="textarea"}function sf(e,t,n,r){Dc(r),t=Ao(t,"onChange"),0<t.length&&(n=new Ha("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,_r=null;function V0(e){wf(e,0)}function ai(e){var t=wn(e);if(Lc(t))return e}function B0(e,t){if(e==="change")return t}var uf=!1;if(_t){var al;if(_t){var sl="oninput"in document;if(!sl){var uu=document.createElement("div");uu.setAttribute("oninput","return;"),sl=typeof uu.oninput=="function"}al=sl}else al=!1;uf=al&&(!document.documentMode||9<document.documentMode)}function cu(){fr&&(fr.detachEvent("onpropertychange",cf),_r=fr=null)}function cf(e){if(e.propertyName==="value"&&ai(_r)){var t=[];sf(t,_r,e,Da(e)),Bc(V0,t)}}function W0(e,t,n){e==="focusin"?(cu(),fr=t,_r=n,fr.attachEvent("onpropertychange",cf)):e==="focusout"&&cu()}function H0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(_r)}function Q0(e,t){if(e==="click")return ai(t)}function Y0(e,t){if(e==="input"||e==="change")return ai(t)}function X0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:X0;function Er(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Nl.call(t,o)||!ut(e[o],t[o]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,t){var n=fu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fu(n)}}function ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function df(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function K0(e){var t=df(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ff(n.ownerDocument.documentElement,n)){if(r!==null&&Xa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=du(n,i);var a=du(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G0=_t&&"documentMode"in document&&11>=document.documentMode,yn=null,Xl=null,dr=null,Kl=!1;function pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||yn==null||yn!==Oo(r)||(r=yn,"selectionStart"in r&&Xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&Er(dr,r)||(dr=r,r=Ao(Xl,"onSelect"),0<r.length&&(t=new Ha("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function no(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},ul={},pf={};_t&&(pf=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function si(e){if(ul[e])return ul[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pf)return ul[e]=t[n];return e}var mf=si("animationend"),hf=si("animationiteration"),vf=si("animationstart"),yf=si("transitionend"),gf=new Map,mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){gf.set(e,t),sn(t,[e])}for(var cl=0;cl<mu.length;cl++){var fl=mu[cl],b0=fl.toLowerCase(),Z0=fl[0].toUpperCase()+fl.slice(1);Qt(b0,"on"+Z0)}Qt(mf,"onAnimationEnd");Qt(hf,"onAnimationIteration");Qt(vf,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(yf,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bp(r,t,void 0,e),e.currentTarget=null}function wf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;hu(o,l,s),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,s=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;hu(o,l,s),i=u}}}if(zo)throw e=Wl,zo=!1,Wl=null,e}function ee(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(xf(t,e,2,!1),n.add(r))}function dl(e,t,n){var r=0;t&&(r|=4),xf(n,e,r,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Cr(e){if(!e[ro]){e[ro]=!0,Pc.forEach(function(n){n!=="selectionchange"&&(J0.has(n)||dl(n,!1,e),dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,dl("selectionchange",!1,t))}}function xf(e,t,n,r){switch(nf(t)){case 1:var o=d0;break;case 4:o=p0;break;default:o=Ba}n=o.bind(null,t,n,e),o=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;l!==null;){if(a=bt(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Bc(function(){var s=i,c=Da(n),f=[];e:{var p=gf.get(e);if(p!==void 0){var m=Ha,y=e;switch(e){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":m=N0;break;case"focusin":y="focus",m=ll;break;case"focusout":y="blur",m=ll;break;case"beforeblur":case"afterblur":m=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=L0;break;case mf:case hf:case vf:m=w0;break;case yf:m=R0;break;case"scroll":m=m0;break;case"wheel":m=$0;break;case"copy":case"cut":case"paste":m=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=iu}var g=(t&4)!==0,x=!g&&e==="scroll",h=g?p!==null?p+"Capture":null:p;g=[];for(var d=s,v;d!==null;){v=d;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=wr(d,h),w!=null&&g.push(Pr(d,w,v)))),x)break;d=d.return}0<g.length&&(p=new m(p,y,null,n,c),f.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Ul&&(y=n.relatedTarget||n.fromElement)&&(bt(y)||y[Et]))break e;if((m||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=s,y=y?bt(y):null,y!==null&&(x=un(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=s),m!==y)){if(g=ru,w="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(g=iu,w="onPointerLeave",h="onPointerEnter",d="pointer"),x=m==null?p:wn(m),v=y==null?p:wn(y),p=new g(w,d+"leave",m,n,c),p.target=x,p.relatedTarget=v,w=null,bt(c)===s&&(g=new g(h,d+"enter",y,n,c),g.target=v,g.relatedTarget=x,w=g),x=w,m&&y)t:{for(g=m,h=y,d=0,v=g;v;v=pn(v))d++;for(v=0,w=h;w;w=pn(w))v++;for(;0<d-v;)g=pn(g),d--;for(;0<v-d;)h=pn(h),v--;for(;d--;){if(g===h||h!==null&&g===h.alternate)break t;g=pn(g),h=pn(h)}g=null}else g=null;m!==null&&vu(f,p,m,g,!1),y!==null&&x!==null&&vu(f,x,y,g,!0)}}e:{if(p=s?wn(s):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var S=B0;else if(su(p))if(uf)S=Y0;else{S=H0;var E=W0}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Q0);if(S&&(S=S(e,s))){sf(f,S,n,c);break e}E&&E(e,p,s),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&$l(p,"number",p.value)}switch(E=s?wn(s):window,e){case"focusin":(su(E)||E.contentEditable==="true")&&(yn=E,Xl=s,dr=null);break;case"focusout":dr=Xl=yn=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,pu(f,n,c);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":pu(f,n,c)}var k;if(Ya)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else vn?lf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(of&&n.locale!=="ko"&&(vn||P!=="onCompositionStart"?P==="onCompositionEnd"&&vn&&(k=rf()):(Rt=c,Wa="value"in Rt?Rt.value:Rt.textContent,vn=!0)),E=Ao(s,P),0<E.length&&(P=new ou(P,e,null,n,c),f.push({event:P,listeners:E}),k?P.data=k:(k=af(n),k!==null&&(P.data=k)))),(k=A0?D0(e,n):F0(e,n))&&(s=Ao(s,"onBeforeInput"),0<s.length&&(c=new ou("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:s}),c.data=k))}wf(f,t)})}function Pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=wr(e,n),i!=null&&r.unshift(Pr(e,i,o)),i=wr(e,t),i!=null&&r.push(Pr(e,i,o))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vu(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&s!==null&&(l=s,o?(u=wr(n,i),u!=null&&a.unshift(Pr(n,u,l))):o||(u=wr(n,i),u!=null&&a.push(Pr(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var q0=/\r\n?/g,em=/\u0000|\uFFFD/g;function yu(e){return(typeof e=="string"?e:""+e).replace(q0,`
`).replace(em,"")}function oo(e,t,n){if(t=yu(t),yu(e)!==t&&n)throw Error(N(425))}function Do(){}var Gl=null,bl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,tm=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,nm=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(rm)}:Jl;function rm(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);kr(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Hn,jr="__reactProps$"+Hn,Et="__reactContainer$"+Hn,ql="__reactEvents$"+Hn,om="__reactListeners$"+Hn,im="__reactHandles$"+Hn;function bt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wu(e);e!==null;){if(n=e[mt])return n;e=wu(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[mt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ui(e){return e[jr]||null}var ea=[],xn=-1;function Yt(e){return{current:e}}function te(e){0>xn||(e.current=ea[xn],ea[xn]=null,xn--)}function q(e,t){xn++,ea[xn]=e.current,e.current=t}var Ht={},je=Yt(Ht),$e=Yt(!1),nn=Ht;function $n(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function Fo(){te($e),te(je)}function xu(e,t,n){if(je.current!==Ht)throw Error(N(168));q(je,t),q($e,n)}function Sf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,Wp(e)||"Unknown",o));return le({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,nn=je.current,q(je,e),q($e,$e.current),!0}function Su(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Sf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,te($e),te(je),q(je,e)):te($e),q($e,n)}var wt=null,ci=!1,hl=!1;function kf(e){wt===null?wt=[e]:wt.push(e)}function lm(e){ci=!0,kf(e)}function Xt(){if(!hl&&wt!==null){hl=!0;var e=0,t=G;try{var n=wt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,ci=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),Yc(Fa,Xt),o}finally{G=t,hl=!1}}return null}var Sn=[],kn=0,Vo=null,Bo=0,be=[],Ze=0,rn=null,xt=1,St="";function Kt(e,t){Sn[kn++]=Bo,Sn[kn++]=Vo,Vo=e,Bo=t}function _f(e,t,n){be[Ze++]=xt,be[Ze++]=St,be[Ze++]=rn,rn=e;var r=xt;e=St;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,xt=1<<32-at(t)+o|n<<o|r,St=i+e}else xt=1<<i|n<<o|r,St=e}function Ka(e){e.return!==null&&(Kt(e,1),_f(e,1,0))}function Ga(e){for(;e===Vo;)Vo=Sn[--kn],Sn[kn]=null,Bo=Sn[--kn],Sn[kn]=null;for(;e===rn;)rn=be[--Ze],be[Ze]=null,St=be[--Ze],be[Ze]=null,xt=be[--Ze],be[Ze]=null}var Be=null,Ve=null,re=!1,lt=null;function Ef(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Ve=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:xt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Ve=null,!0):!1;default:return!1}}function ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(re){var t=Ve;if(t){var n=t;if(!ku(e,t)){if(ta(e))throw Error(N(418));t=Dt(n.nextSibling);var r=Be;t&&ku(e,t)?Ef(r,n):(e.flags=e.flags&-4097|2,re=!1,Be=e)}}else{if(ta(e))throw Error(N(418));e.flags=e.flags&-4097|2,re=!1,Be=e}}}function _u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function io(e){if(e!==Be)return!1;if(!re)return _u(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=Ve)){if(ta(e))throw Cf(),Error(N(418));for(;t;)Ef(e,t),t=Dt(t.nextSibling)}if(_u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Be?Dt(e.stateNode.nextSibling):null;return!0}function Cf(){for(var e=Ve;e;)e=Dt(e.nextSibling)}function In(){Ve=Be=null,re=!1}function ba(e){lt===null?lt=[e]:lt.push(e)}var am=jt.ReactCurrentBatchConfig;function er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Eu(e){var t=e._init;return t(e._payload)}function Pf(e){function t(h,d){if(e){var v=h.deletions;v===null?(h.deletions=[d],h.flags|=16):v.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function o(h,d){return h=Bt(h,d),h.index=0,h.sibling=null,h}function i(h,d,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<d?(h.flags|=2,d):v):(h.flags|=2,d)):(h.flags|=1048576,d)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,d,v,w){return d===null||d.tag!==6?(d=kl(v,h.mode,w),d.return=h,d):(d=o(d,v),d.return=h,d)}function u(h,d,v,w){var S=v.type;return S===hn?c(h,d,v.props.children,w,v.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Eu(S)===d.type)?(w=o(d,v.props),w.ref=er(h,d,v),w.return=h,w):(w=Po(v.type,v.key,v.props,null,h.mode,w),w.ref=er(h,d,v),w.return=h,w)}function s(h,d,v,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=_l(v,h.mode,w),d.return=h,d):(d=o(d,v.children||[]),d.return=h,d)}function c(h,d,v,w,S){return d===null||d.tag!==7?(d=tn(v,h.mode,w,S),d.return=h,d):(d=o(d,v),d.return=h,d)}function f(h,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=kl(""+d,h.mode,v),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gr:return v=Po(d.type,d.key,d.props,null,h.mode,v),v.ref=er(h,null,d),v.return=h,v;case mn:return d=_l(d,h.mode,v),d.return=h,d;case Tt:var w=d._init;return f(h,w(d._payload),v)}if(ir(d)||Gn(d))return d=tn(d,h.mode,v,null),d.return=h,d;lo(h,d)}return null}function p(h,d,v,w){var S=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:l(h,d,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gr:return v.key===S?u(h,d,v,w):null;case mn:return v.key===S?s(h,d,v,w):null;case Tt:return S=v._init,p(h,d,S(v._payload),w)}if(ir(v)||Gn(v))return S!==null?null:c(h,d,v,w,null);lo(h,v)}return null}function m(h,d,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,l(d,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gr:return h=h.get(w.key===null?v:w.key)||null,u(d,h,w,S);case mn:return h=h.get(w.key===null?v:w.key)||null,s(d,h,w,S);case Tt:var E=w._init;return m(h,d,v,E(w._payload),S)}if(ir(w)||Gn(w))return h=h.get(v)||null,c(d,h,w,S,null);lo(d,w)}return null}function y(h,d,v,w){for(var S=null,E=null,k=d,P=d=0,D=null;k!==null&&P<v.length;P++){k.index>P?(D=k,k=null):D=k.sibling;var L=p(h,k,v[P],w);if(L===null){k===null&&(k=D);break}e&&k&&L.alternate===null&&t(h,k),d=i(L,d,P),E===null?S=L:E.sibling=L,E=L,k=D}if(P===v.length)return n(h,k),re&&Kt(h,P),S;if(k===null){for(;P<v.length;P++)k=f(h,v[P],w),k!==null&&(d=i(k,d,P),E===null?S=k:E.sibling=k,E=k);return re&&Kt(h,P),S}for(k=r(h,k);P<v.length;P++)D=m(k,h,P,v[P],w),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?P:D.key),d=i(D,d,P),E===null?S=D:E.sibling=D,E=D);return e&&k.forEach(function(M){return t(h,M)}),re&&Kt(h,P),S}function g(h,d,v,w){var S=Gn(v);if(typeof S!="function")throw Error(N(150));if(v=S.call(v),v==null)throw Error(N(151));for(var E=S=null,k=d,P=d=0,D=null,L=v.next();k!==null&&!L.done;P++,L=v.next()){k.index>P?(D=k,k=null):D=k.sibling;var M=p(h,k,L.value,w);if(M===null){k===null&&(k=D);break}e&&k&&M.alternate===null&&t(h,k),d=i(M,d,P),E===null?S=M:E.sibling=M,E=M,k=D}if(L.done)return n(h,k),re&&Kt(h,P),S;if(k===null){for(;!L.done;P++,L=v.next())L=f(h,L.value,w),L!==null&&(d=i(L,d,P),E===null?S=L:E.sibling=L,E=L);return re&&Kt(h,P),S}for(k=r(h,k);!L.done;P++,L=v.next())L=m(k,h,P,L.value,w),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?P:L.key),d=i(L,d,P),E===null?S=L:E.sibling=L,E=L);return e&&k.forEach(function(U){return t(h,U)}),re&&Kt(h,P),S}function x(h,d,v,w){if(typeof v=="object"&&v!==null&&v.type===hn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Gr:e:{for(var S=v.key,E=d;E!==null;){if(E.key===S){if(S=v.type,S===hn){if(E.tag===7){n(h,E.sibling),d=o(E,v.props.children),d.return=h,h=d;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Eu(S)===E.type){n(h,E.sibling),d=o(E,v.props),d.ref=er(h,E,v),d.return=h,h=d;break e}n(h,E);break}else t(h,E);E=E.sibling}v.type===hn?(d=tn(v.props.children,h.mode,w,v.key),d.return=h,h=d):(w=Po(v.type,v.key,v.props,null,h.mode,w),w.ref=er(h,d,v),w.return=h,h=w)}return a(h);case mn:e:{for(E=v.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(h,d.sibling),d=o(d,v.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=_l(v,h.mode,w),d.return=h,h=d}return a(h);case Tt:return E=v._init,x(h,d,E(v._payload),w)}if(ir(v))return y(h,d,v,w);if(Gn(v))return g(h,d,v,w);lo(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(h,d.sibling),d=o(d,v),d.return=h,h=d):(n(h,d),d=kl(v,h.mode,w),d.return=h,h=d),a(h)):n(h,d)}return x}var An=Pf(!0),jf=Pf(!1),Wo=Yt(null),Ho=null,_n=null,Za=null;function Ja(){Za=_n=Ho=null}function qa(e){var t=Wo.current;te(Wo),e._currentValue=t}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Ho=e,Za=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(Za!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(Ho===null)throw Error(N(308));_n=e,Ho.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var Zt=null;function es(e){Zt===null?Zt=[e]:Zt.push(e)}function Nf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,es(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ct(e,n)}return o=r.interleaved,o===null?(t.next=t,es(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ct(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}function Cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qo(e,t,n,r){var o=e.updateQueue;Ot=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,s=u.next;u.next=null,a===null?i=s:a.next=s,a=u;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=s:l.next=s,c.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;a=0,c=s=u=null,l=i;do{var p=l.lane,m=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,g=l;switch(p=t,m=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){f=y.call(m,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,p=typeof y=="function"?y.call(m,f,p):y,p==null)break e;f=le({},f,p);break e;case 2:Ot=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(s=c=m,u=f):c=c.next=m,a|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(c===null&&(u=f),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ln|=a,e.lanes=a,e.memoizedState=f}}function Pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var Hr={},vt=Yt(Hr),Nr=Yt(Hr),Tr=Yt(Hr);function Jt(e){if(e===Hr)throw Error(N(174));return e}function ns(e,t){switch(q(Tr,t),q(Nr,e),q(vt,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Al(t,e)}te(vt),q(vt,t)}function Dn(){te(vt),te(Nr),te(Tr)}function Of(e){Jt(Tr.current);var t=Jt(vt.current),n=Al(t,e.type);t!==n&&(q(Nr,e),q(vt,n))}function rs(e){Nr.current===e&&(te(vt),te(Nr))}var oe=Yt(0);function Yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function os(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var So=jt.ReactCurrentDispatcher,yl=jt.ReactCurrentBatchConfig,on=0,ie=null,de=null,me=null,Xo=!1,pr=!1,Or=0,sm=0;function _e(){throw Error(N(321))}function is(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function ls(e,t,n,r,o,i){if(on=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?dm:pm,e=n(r,o),pr){i=0;do{if(pr=!1,Or=0,25<=i)throw Error(N(301));i+=1,me=de=null,t.updateQueue=null,So.current=mm,e=n(r,o)}while(pr)}if(So.current=Ko,t=de!==null&&de.next!==null,on=0,me=de=ie=null,Xo=!1,t)throw Error(N(300));return e}function as(){var e=Or!==0;return Or=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ie.memoizedState=me=e:me=me.next=e,me}function tt(){if(de===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=me===null?ie.memoizedState:me.next;if(t!==null)me=t,de=e;else{if(e===null)throw Error(N(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},me===null?ie.memoizedState=me=e:me=me.next=e}return me}function Lr(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=tt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=de,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,u=null,s=i;do{var c=s.lane;if((on&c)===c)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var f={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(l=u=f,a=r):u=u.next=f,ie.lanes|=c,ln|=c}s=s.next}while(s!==null&&s!==i);u===null?a=r:u.next=l,ut(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,ln|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wl(e){var t=tt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);ut(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Lf(){}function zf(e,t){var n=ie,r=tt(),o=t(),i=!ut(r.memoizedState,o);if(i&&(r.memoizedState=o,Me=!0),r=r.queue,ss($f.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,zr(9,Mf.bind(null,n,r,o,t),void 0,null),he===null)throw Error(N(349));on&30||Rf(n,t,o)}return o}function Rf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mf(e,t,n,r){t.value=n,t.getSnapshot=r,If(t)&&Af(e)}function $f(e,t,n){return n(function(){If(t)&&Af(e)})}function If(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Af(e){var t=Ct(e,1);t!==null&&st(t,e,1,-1)}function ju(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=fm.bind(null,ie,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Df(){return tt().memoizedState}function ko(e,t,n,r){var o=ft();ie.flags|=e,o.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function fi(e,t,n,r){var o=tt();r=r===void 0?null:r;var i=void 0;if(de!==null){var a=de.memoizedState;if(i=a.destroy,r!==null&&is(r,a.deps)){o.memoizedState=zr(t,n,i,r);return}}ie.flags|=e,o.memoizedState=zr(1|t,n,i,r)}function Nu(e,t){return ko(8390656,8,e,t)}function ss(e,t){return fi(2048,8,e,t)}function Ff(e,t){return fi(4,2,e,t)}function Uf(e,t){return fi(4,4,e,t)}function Vf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bf(e,t,n){return n=n!=null?n.concat([e]):null,fi(4,4,Vf.bind(null,t,e),n)}function us(){}function Wf(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&is(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hf(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&is(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qf(e,t,n){return on&21?(ut(n,t)||(n=Gc(),ie.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function um(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{G=n,yl.transition=r}}function Yf(){return tt().memoizedState}function cm(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xf(e))Kf(t,n);else if(n=Nf(e,t,n,r),n!==null){var o=Oe();st(n,e,r,o),Gf(n,t,r)}}function fm(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xf(e))Kf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,ut(l,a)){var u=t.interleaved;u===null?(o.next=o,es(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Nf(e,t,o,r),n!==null&&(o=Oe(),st(n,e,r,o),Gf(n,t,r))}}function Xf(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Kf(e,t){pr=Xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}var Ko={readContext:et,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},dm={readContext:et,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ko(4194308,4,Vf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cm.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:ju,useDebugValue:us,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=ju(!1),t=e[0];return e=um.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=ft();if(re){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),he===null)throw Error(N(349));on&30||Rf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Nu($f.bind(null,r,i,e),[e]),r.flags|=2048,zr(9,Mf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=he.identifierPrefix;if(re){var n=St,r=xt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pm={readContext:et,useCallback:Wf,useContext:et,useEffect:ss,useImperativeHandle:Bf,useInsertionEffect:Ff,useLayoutEffect:Uf,useMemo:Hf,useReducer:gl,useRef:Df,useState:function(){return gl(Lr)},useDebugValue:us,useDeferredValue:function(e){var t=tt();return Qf(t,de.memoizedState,e)},useTransition:function(){var e=gl(Lr)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Lf,useSyncExternalStore:zf,useId:Yf,unstable_isNewReconciler:!1},mm={readContext:et,useCallback:Wf,useContext:et,useEffect:ss,useImperativeHandle:Bf,useInsertionEffect:Ff,useLayoutEffect:Uf,useMemo:Hf,useReducer:wl,useRef:Df,useState:function(){return wl(Lr)},useDebugValue:us,useDeferredValue:function(e){var t=tt();return de===null?t.memoizedState=e:Qf(t,de.memoizedState,e)},useTransition:function(){var e=wl(Lr)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Lf,useSyncExternalStore:zf,useId:Yf,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var di={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=Vt(e),i=kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(st(t,e,o,r),xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=Vt(e),i=kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(st(t,e,o,r),xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=Vt(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(st(t,e,r,n),xo(t,e,r))}};function Tu(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(o,i):!0}function bf(e,t,n){var r=!1,o=Ht,i=t.contextType;return typeof i=="object"&&i!==null?i=et(i):(o=Ie(t)?nn:je.current,r=t.contextTypes,i=(r=r!=null)?$n(e,o):Ht),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function ia(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ts(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=et(i):(i=Ie(t)?nn:je.current,o.context=$n(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(oa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&di.enqueueReplaceState(o,o.state,null),Qo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=Bp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function la(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hm=typeof WeakMap=="function"?WeakMap:Map;function Zf(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bo||(bo=!0,va=r),la(e,t)},n}function Jf(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){la(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){la(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Tm.bind(null,e,t,n),t.then(e,e))}function zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var vm=jt.ReactCurrentOwner,Me=!1;function Te(e,t,n,r){t.child=e===null?jf(t,null,n,r):An(t,e.child,n,r)}function Mu(e,t,n,r,o){n=n.render;var i=t.ref;return On(t,o),r=ls(e,t,n,r,i,o),n=as(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(re&&n&&Ka(t),t.flags|=1,Te(e,t,r,o),t.child)}function $u(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ys(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,qf(e,t,i,r,o)):(e=Po(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Er,n(a,r)&&e.ref===t.ref)return Pt(e,t,o)}return t.flags|=1,e=Bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function qf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Er(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Pt(e,t,o)}return aa(e,t,n,r,o)}function ed(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Cn,Ue),Ue|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Cn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(Cn,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(Cn,Ue),Ue|=r;return Te(e,t,o,n),t.child}function td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aa(e,t,n,r,o){var i=Ie(n)?nn:je.current;return i=$n(t,i),On(t,o),n=ls(e,t,n,r,i,o),r=as(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(re&&r&&Ka(t),t.flags|=1,Te(e,t,n,o),t.child)}function Iu(e,t,n,r,o){if(Ie(n)){var i=!0;Uo(t)}else i=!1;if(On(t,o),t.stateNode===null)_o(e,t),bf(t,n,r),ia(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,s=n.contextType;typeof s=="object"&&s!==null?s=et(s):(s=Ie(n)?nn:je.current,s=$n(t,s));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==s)&&Ou(t,a,r,s),Ot=!1;var p=t.memoizedState;a.state=p,Qo(t,r,a,o),u=t.memoizedState,l!==r||p!==u||$e.current||Ot?(typeof c=="function"&&(oa(t,n,c,r),u=t.memoizedState),(l=Ot||Tu(t,n,l,r,p,u,s))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=s,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Tf(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:ot(t.type,l),a.props=s,f=t.pendingProps,p=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=et(u):(u=Ie(n)?nn:je.current,u=$n(t,u));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==u)&&Ou(t,a,r,u),Ot=!1,p=t.memoizedState,a.state=p,Qo(t,r,a,o);var y=t.memoizedState;l!==f||p!==y||$e.current||Ot?(typeof m=="function"&&(oa(t,n,m,r),y=t.memoizedState),(s=Ot||Tu(t,n,s,r,p,y,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=u,r=s):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return sa(e,t,n,r,i,o)}function sa(e,t,n,r,o,i){td(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Su(t,n,!1),Pt(e,t,i);r=t.stateNode,vm.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=An(t,e.child,null,i),t.child=An(t,null,l,i)):Te(e,t,l,i),t.memoizedState=r.state,o&&Su(t,n,!0),t.child}function nd(e){var t=e.stateNode;t.pendingContext?xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xu(e,t.context,!1),ns(e,t.containerInfo)}function Au(e,t,n,r,o){return In(),ba(o),t.flags|=256,Te(e,t,n,r),t.child}var ua={dehydrated:null,treeContext:null,retryLane:0};function ca(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(oe,o&1),e===null)return na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=hi(a,r,0,null),e=tn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ca(n),t.memoizedState=ua,e):cs(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return ym(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Bt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Bt(l,i):(i=tn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ca(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ua,r}return i=e.child,e=i.sibling,r=Bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cs(e,t){return t=hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&ba(r),An(t,e.child,null,n),e=cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ym(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=xl(Error(N(422))),ao(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=hi({mode:"visible",children:r.children},o,0,null),i=tn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&An(t,e.child,null,a),t.child.memoizedState=ca(a),t.memoizedState=ua,i);if(!(t.mode&1))return ao(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(N(419)),r=xl(i,r,void 0),ao(e,t,a,r)}if(l=(a&e.childLanes)!==0,Me||l){if(r=he,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ct(e,o),st(r,e,o,-1))}return vs(),r=xl(Error(N(421))),ao(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=Dt(o.nextSibling),Be=t,re=!0,lt=null,e!==null&&(be[Ze++]=xt,be[Ze++]=St,be[Ze++]=rn,xt=e.id,St=e.overflow,rn=t),t=cs(t,r.children),t.flags|=4096,t)}function Du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Sl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function od(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Te(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Du(e,n,t);else if(e.tag===19)Du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(oe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Yo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Sl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Yo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Sl(t,!0,n,null,i);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gm(e,t,n){switch(t.tag){case 3:nd(t),In();break;case 5:Of(t);break;case 1:Ie(t.type)&&Uo(t);break;case 4:ns(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(Wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?rd(e,t,n):(q(oe,oe.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);q(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return od(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,ed(e,t,n)}return Pt(e,t,n)}var id,fa,ld,ad;id=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fa=function(){};ld=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Jt(vt.current);var i=null;switch(n){case"input":o=Rl(e,o),r=Rl(e,r),i=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":o=Il(e,o),r=Il(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Do)}Dl(n,r);var a;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var l=o[s];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yr.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(l=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==l&&(u!=null||l!=null))if(s==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(yr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&ee("scroll",e),i||l===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};ad=function(e,t,n,r){n!==r&&(t.flags|=4)};function tr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wm(e,t,n){var r=t.pendingProps;switch(Ga(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ie(t.type)&&Fo(),Ee(t),null;case 3:return r=t.stateNode,Dn(),te($e),te(je),os(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(wa(lt),lt=null))),fa(e,t),Ee(t),null;case 5:rs(t);var o=Jt(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)ld(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ee(t),null}if(e=Jt(vt.current),io(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[jr]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(o=0;o<ar.length;o++)ee(ar[o],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Xs(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":Gs(r,i),ee("invalid",r)}Dl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,l,e),o=["children",""+l]):yr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ee("scroll",r)}switch(n){case"input":br(r),Ks(r,i,!0);break;case"textarea":br(r),bs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Do)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[mt]=t,e[jr]=r,id(e,t,!1,!1),t.stateNode=e;e:{switch(a=Fl(n,r),n){case"dialog":ee("cancel",e),ee("close",e),o=r;break;case"iframe":case"object":case"embed":ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<ar.length;o++)ee(ar[o],e);o=r;break;case"source":ee("error",e),o=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=r;break;case"details":ee("toggle",e),o=r;break;case"input":Xs(e,r),o=Rl(e,r),ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Gs(e,r),o=Il(e,r),ee("invalid",e);break;default:o=r}Dl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Ac(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$c(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&gr(e,u):typeof u=="number"&&gr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(yr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ee("scroll",e):u!=null&&Ma(e,i,u,a))}switch(n){case"input":br(e),Ks(e,r,!1);break;case"textarea":br(e),bs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Pn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)ad(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Jt(Tr.current),Jt(vt.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ee(t),null;case 13:if(te(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ve!==null&&t.mode&1&&!(t.flags&128))Cf(),In(),t.flags|=98560,i=!1;else if(i=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[mt]=t}else In(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else lt!==null&&(wa(lt),lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?pe===0&&(pe=3):vs())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Dn(),fa(e,t),e===null&&Cr(t.stateNode.containerInfo),Ee(t),null;case 10:return qa(t.type._context),Ee(t),null;case 17:return Ie(t.type)&&Fo(),Ee(t),null;case 19:if(te(oe),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)tr(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Yo(e),a!==null){for(t.flags|=128,tr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>Un&&(t.flags|=128,r=!0,tr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!re)return Ee(t),null}else 2*se()-i.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,tr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=oe.current,q(oe,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return hs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function xm(e,t){switch(Ga(t),t.tag){case 1:return Ie(t.type)&&Fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),te($e),te(je),os(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rs(t),null;case 13:if(te(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(oe),null;case 4:return Dn(),null;case 10:return qa(t.type._context),null;case 22:case 23:return hs(),null;case 24:return null;default:return null}}var so=!1,Pe=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,$=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function da(e,t,n){try{n()}catch(r){ae(e,t,r)}}var Fu=!1;function km(e,t){if(Gl=$o,e=df(),Xa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,s=0,c=0,f=e,p=null;t:for(;;){for(var m;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++s===o&&(l=a),p===i&&++c===r&&(u=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},$o=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,x=y.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:ot(t.type,g),x);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return y=Fu,Fu=!1,y}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&da(t,n,i)}o=o.next}while(o!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sd(e){var t=e.alternate;t!==null&&(e.alternate=null,sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[jr],delete t[ql],delete t[om],delete t[im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ud(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Do));else if(r!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}var ye=null,it=!1;function Nt(e,t,n){for(n=n.child;n!==null;)cd(e,t,n),n=n.sibling}function cd(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 5:Pe||En(n,t);case 6:var r=ye,o=it;ye=null,Nt(e,t,n),ye=r,it=o,ye!==null&&(it?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(it?(e=ye,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),kr(e)):ml(ye,n.stateNode));break;case 4:r=ye,o=it,ye=n.stateNode.containerInfo,it=!0,Nt(e,t,n),ye=r,it=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&da(n,t,a),o=o.next}while(o!==r)}Nt(e,t,n);break;case 1:if(!Pe&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ae(n,t,l)}Nt(e,t,n);break;case 21:Nt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Nt(e,t,n),Pe=r):Nt(e,t,n);break;default:Nt(e,t,n)}}function Vu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sm),t.forEach(function(r){var o=Lm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,it=!1;break e;case 3:ye=l.stateNode.containerInfo,it=!0;break e;case 4:ye=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(ye===null)throw Error(N(160));cd(i,a,o),ye=null,it=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){ae(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fd(t,e),t=t.sibling}function fd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),ct(e),r&4){try{mr(3,e,e.return),pi(3,e)}catch(g){ae(e,e.return,g)}try{mr(5,e,e.return)}catch(g){ae(e,e.return,g)}}break;case 1:rt(t,e),ct(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(rt(t,e),ct(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var o=e.stateNode;try{gr(o,"")}catch(g){ae(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&zc(o,i),Fl(l,a);var s=Fl(l,i);for(a=0;a<u.length;a+=2){var c=u[a],f=u[a+1];c==="style"?Ac(o,f):c==="dangerouslySetInnerHTML"?$c(o,f):c==="children"?gr(o,f):Ma(o,c,f,s)}switch(l){case"input":Ml(o,i);break;case"textarea":Rc(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Pn(o,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?Pn(o,!!i.multiple,i.defaultValue,!0):Pn(o,!!i.multiple,i.multiple?[]:"",!1))}o[jr]=i}catch(g){ae(e,e.return,g)}}break;case 6:if(rt(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){ae(e,e.return,g)}}break;case 3:if(rt(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(g){ae(e,e.return,g)}break;case 4:rt(t,e),ct(e);break;case 13:rt(t,e),ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ps=se())),r&4&&Vu(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(s=Pe)||c,rt(t,e),Pe=s):rt(t,e),ct(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!c&&e.mode&1)for($=e,c=e.child;c!==null;){for(f=$=c;$!==null;){switch(p=$,m=p.child,p.tag){case 0:case 11:case 14:case 15:mr(4,p,p.return);break;case 1:En(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){ae(r,n,g)}}break;case 5:En(p,p.return);break;case 22:if(p.memoizedState!==null){Wu(f);continue}}m!==null?(m.return=p,$=m):Wu(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ic("display",a))}catch(g){ae(e,e.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=s?"":f.memoizedProps}catch(g){ae(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:rt(t,e),ct(e),r&4&&Vu(e);break;case 21:break;default:rt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ud(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(gr(o,""),r.flags&=-33);var i=Uu(e);ha(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Uu(e);ma(e,l,a);break;default:throw Error(N(161))}}catch(u){ae(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _m(e,t,n){$=e,dd(e)}function dd(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||so;if(!a){var l=o.alternate,u=l!==null&&l.memoizedState!==null||Pe;l=so;var s=Pe;if(so=a,(Pe=u)&&!s)for($=o;$!==null;)a=$,u=a.child,a.tag===22&&a.memoizedState!==null?Hu(o):u!==null?(u.return=a,$=u):Hu(o);for(;i!==null;)$=i,dd(i),i=i.sibling;$=o,so=l,Pe=s}Bu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):Bu(e)}}function Bu(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pu(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var c=s.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&kr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Pe||t.flags&512&&pa(t)}catch(p){ae(t,t.return,p)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Wu(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Hu(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(u){ae(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ae(t,o,u)}}var i=t.return;try{pa(t)}catch(u){ae(t,i,u)}break;case 5:var a=t.return;try{pa(t)}catch(u){ae(t,a,u)}}}catch(u){ae(t,t.return,u)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var Em=Math.ceil,Go=jt.ReactCurrentDispatcher,fs=jt.ReactCurrentOwner,qe=jt.ReactCurrentBatchConfig,H=0,he=null,ce=null,we=0,Ue=0,Cn=Yt(0),pe=0,Rr=null,ln=0,mi=0,ds=0,hr=null,Re=null,ps=0,Un=1/0,gt=null,bo=!1,va=null,Ut=null,uo=!1,Mt=null,Zo=0,vr=0,ya=null,Eo=-1,Co=0;function Oe(){return H&6?se():Eo!==-1?Eo:Eo=se()}function Vt(e){return e.mode&1?H&2&&we!==0?we&-we:am.transition!==null?(Co===0&&(Co=Gc()),Co):(e=G,e!==0||(e=window.event,e=e===void 0?16:nf(e.type)),e):1}function st(e,t,n,r){if(50<vr)throw vr=0,ya=null,Error(N(185));Vr(e,n,r),(!(H&2)||e!==he)&&(e===he&&(!(H&2)&&(mi|=n),pe===4&&zt(e,we)),Ae(e,r),n===1&&H===0&&!(t.mode&1)&&(Un=se()+500,ci&&Xt()))}function Ae(e,t){var n=e.callbackNode;a0(e,t);var r=Mo(e,e===he?we:0);if(r===0)n!==null&&qs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qs(n),t===1)e.tag===0?lm(Qu.bind(null,e)):kf(Qu.bind(null,e)),nm(function(){!(H&6)&&Xt()}),n=null;else{switch(bc(r)){case 1:n=Fa;break;case 4:n=Xc;break;case 16:n=Ro;break;case 536870912:n=Kc;break;default:n=Ro}n=xd(n,pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pd(e,t){if(Eo=-1,Co=0,H&6)throw Error(N(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=Mo(e,e===he?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jo(e,r);else{t=r;var o=H;H|=2;var i=hd();(he!==e||we!==t)&&(gt=null,Un=se()+500,en(e,t));do try{jm();break}catch(l){md(e,l)}while(!0);Ja(),Go.current=i,H=o,ce!==null?t=0:(he=null,we=0,t=pe)}if(t!==0){if(t===2&&(o=Hl(e),o!==0&&(r=o,t=ga(e,o))),t===1)throw n=Rr,en(e,0),zt(e,r),Ae(e,se()),n;if(t===6)zt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Cm(o)&&(t=Jo(e,r),t===2&&(i=Hl(e),i!==0&&(r=i,t=ga(e,i))),t===1))throw n=Rr,en(e,0),zt(e,r),Ae(e,se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Gt(e,Re,gt);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=ps+500-se(),10<t)){if(Mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Jl(Gt.bind(null,e,Re,gt),t);break}Gt(e,Re,gt);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-at(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Em(r/1960))-r,10<r){e.timeoutHandle=Jl(Gt.bind(null,e,Re,gt),r);break}Gt(e,Re,gt);break;case 5:Gt(e,Re,gt);break;default:throw Error(N(329))}}}return Ae(e,se()),e.callbackNode===n?pd.bind(null,e):null}function ga(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=Jo(e,t),e!==2&&(t=Re,Re=n,t!==null&&wa(t)),e}function wa(e){Re===null?Re=e:Re.push.apply(Re,e)}function Cm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ut(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~ds,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Qu(e){if(H&6)throw Error(N(327));Ln();var t=Mo(e,0);if(!(t&1))return Ae(e,se()),null;var n=Jo(e,t);if(e.tag!==0&&n===2){var r=Hl(e);r!==0&&(t=r,n=ga(e,r))}if(n===1)throw n=Rr,en(e,0),zt(e,t),Ae(e,se()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,Re,gt),Ae(e,se()),null}function ms(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Un=se()+500,ci&&Xt())}}function an(e){Mt!==null&&Mt.tag===0&&!(H&6)&&Ln();var t=H;H|=1;var n=qe.transition,r=G;try{if(qe.transition=null,G=1,e)return e()}finally{G=r,qe.transition=n,H=t,!(H&6)&&Xt()}}function hs(){Ue=Cn.current,te(Cn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tm(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Ga(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:Dn(),te($e),te(je),os();break;case 5:rs(r);break;case 4:Dn();break;case 13:te(oe);break;case 19:te(oe);break;case 10:qa(r.type._context);break;case 22:case 23:hs()}n=n.return}if(he=e,ce=e=Bt(e.current,null),we=Ue=t,pe=0,Rr=null,ds=mi=ln=0,Re=hr=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Zt=null}return e}function md(e,t){do{var n=ce;try{if(Ja(),So.current=Ko,Xo){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Xo=!1}if(on=0,me=de=ie=null,pr=!1,Or=0,fs.current=null,n===null||n.return===null){pe=1,Rr=t,ce=null;break}e:{var i=e,a=n.return,l=n,u=t;if(t=we,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=zu(a);if(m!==null){m.flags&=-257,Ru(m,a,l,i,t),m.mode&1&&Lu(i,s,t),t=m,u=s;var y=t.updateQueue;if(y===null){var g=new Set;g.add(u),t.updateQueue=g}else y.add(u);break e}else{if(!(t&1)){Lu(i,s,t),vs();break e}u=Error(N(426))}}else if(re&&l.mode&1){var x=zu(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ru(x,a,l,i,t),ba(Fn(u,l));break e}}i=u=Fn(u,l),pe!==4&&(pe=2),hr===null?hr=[i]:hr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Zf(i,u,t);Cu(i,h);break e;case 1:l=u;var d=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ut===null||!Ut.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Jf(i,l,t);Cu(i,w);break e}}i=i.return}while(i!==null)}yd(n)}catch(S){t=S,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function hd(){var e=Go.current;return Go.current=Ko,e===null?Ko:e}function vs(){(pe===0||pe===3||pe===2)&&(pe=4),he===null||!(ln&268435455)&&!(mi&268435455)||zt(he,we)}function Jo(e,t){var n=H;H|=2;var r=hd();(he!==e||we!==t)&&(gt=null,en(e,t));do try{Pm();break}catch(o){md(e,o)}while(!0);if(Ja(),H=n,Go.current=r,ce!==null)throw Error(N(261));return he=null,we=0,pe}function Pm(){for(;ce!==null;)vd(ce)}function jm(){for(;ce!==null&&!Jp();)vd(ce)}function vd(e){var t=wd(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?yd(e):ce=t,fs.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xm(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(n=wm(n,t,Ue),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function Gt(e,t,n){var r=G,o=qe.transition;try{qe.transition=null,G=1,Nm(e,t,n,r)}finally{qe.transition=o,G=r}return null}function Nm(e,t,n,r){do Ln();while(Mt!==null);if(H&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(s0(e,i),e===he&&(ce=he=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,xd(Ro,function(){return Ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qe.transition,qe.transition=null;var a=G;G=1;var l=H;H|=4,fs.current=null,km(e,n),fd(n,e),K0(bl),$o=!!Gl,bl=Gl=null,e.current=n,_m(n),qp(),H=l,G=a,qe.transition=i}else e.current=n;if(uo&&(uo=!1,Mt=e,Zo=o),i=e.pendingLanes,i===0&&(Ut=null),n0(n.stateNode),Ae(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(bo)throw bo=!1,e=va,va=null,e;return Zo&1&&e.tag!==0&&Ln(),i=e.pendingLanes,i&1?e===ya?vr++:(vr=0,ya=e):vr=0,Xt(),null}function Ln(){if(Mt!==null){var e=bc(Zo),t=qe.transition,n=G;try{if(qe.transition=null,G=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Zo=0,H&6)throw Error(N(331));var o=H;for(H|=4,$=e.current;$!==null;){var i=$,a=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var s=l[u];for($=s;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:mr(8,c,i)}var f=c.child;if(f!==null)f.return=c,$=f;else for(;$!==null;){c=$;var p=c.sibling,m=c.return;if(sd(c),c===s){$=null;break}if(p!==null){p.return=m,$=p;break}$=m}}}var y=i.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}$=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,$=a;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,$=h;break e}$=i.return}}var d=e.current;for($=d;$!==null;){a=$;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,$=v;else e:for(a=d;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pi(9,l)}}catch(S){ae(l,l.return,S)}if(l===a){$=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,$=w;break e}$=l.return}}if(H=o,Xt(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ii,e)}catch{}r=!0}return r}finally{G=n,qe.transition=t}}return!1}function Yu(e,t,n){t=Fn(n,t),t=Zf(e,t,1),e=Ft(e,t,1),t=Oe(),e!==null&&(Vr(e,1,t),Ae(e,t))}function ae(e,t,n){if(e.tag===3)Yu(e,e,n);else for(;t!==null;){if(t.tag===3){Yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Fn(n,e),e=Jf(t,e,1),t=Ft(t,e,1),e=Oe(),t!==null&&(Vr(t,1,e),Ae(t,e));break}}t=t.return}}function Tm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(we&n)===n&&(pe===4||pe===3&&(we&130023424)===we&&500>se()-ps?en(e,0):ds|=n),Ae(e,t)}function gd(e,t){t===0&&(e.mode&1?(t=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):t=1);var n=Oe();e=Ct(e,t),e!==null&&(Vr(e,t,n),Ae(e,n))}function Om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gd(e,n)}function Lm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),gd(e,n)}var wd;wd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,gm(e,t,n);Me=!!(e.flags&131072)}else Me=!1,re&&t.flags&1048576&&_f(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_o(e,t),e=t.pendingProps;var o=$n(t,je.current);On(t,n),o=ls(null,t,r,e,o,n);var i=as();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(i=!0,Uo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ts(t),o.updater=di,t.stateNode=o,o._reactInternals=t,ia(t,r,e,n),t=sa(null,t,r,!0,i,n)):(t.tag=0,re&&i&&Ka(t),Te(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_o(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Rm(r),e=ot(r,e),o){case 0:t=aa(null,t,r,e,n);break e;case 1:t=Iu(null,t,r,e,n);break e;case 11:t=Mu(null,t,r,e,n);break e;case 14:t=$u(null,t,r,ot(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),aa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Iu(e,t,r,o,n);case 3:e:{if(nd(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Tf(e,t),Qo(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Fn(Error(N(423)),t),t=Au(e,t,r,n,o);break e}else if(r!==o){o=Fn(Error(N(424)),t),t=Au(e,t,r,n,o);break e}else for(Ve=Dt(t.stateNode.containerInfo.firstChild),Be=t,re=!0,lt=null,n=jf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(In(),r===o){t=Pt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Of(t),e===null&&na(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Zl(r,o)?a=null:i!==null&&Zl(r,i)&&(t.flags|=32),td(e,t),Te(e,t,a,n),t.child;case 6:return e===null&&na(t),null;case 13:return rd(e,t,n);case 4:return ns(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Mu(e,t,r,o,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,q(Wo,r._currentValue),r._currentValue=a,i!==null)if(ut(i.value,a)){if(i.children===o.children&&!$e.current){t=Pt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=kt(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var c=s.pending;c===null?u.next=u:(u.next=c.next,c.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ra(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ra(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Te(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,On(t,n),o=et(o),r=r(o),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,o=ot(r,t.pendingProps),o=ot(r.type,o),$u(e,t,r,o,n);case 15:return qf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),_o(e,t),t.tag=1,Ie(r)?(e=!0,Uo(t)):e=!1,On(t,n),bf(t,r,o),ia(t,r,o,n),sa(null,t,r,!0,e,n);case 19:return od(e,t,n);case 22:return ed(e,t,n)}throw Error(N(156,t.tag))};function xd(e,t){return Yc(e,t)}function zm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new zm(e,t,n,r)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rm(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ia)return 11;if(e===Aa)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")ys(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hn:return tn(n.children,o,i,t);case $a:a=8,o|=8;break;case Tl:return e=Je(12,n,t,o|2),e.elementType=Tl,e.lanes=i,e;case Ol:return e=Je(13,n,t,o),e.elementType=Ol,e.lanes=i,e;case Ll:return e=Je(19,n,t,o),e.elementType=Ll,e.lanes=i,e;case Tc:return hi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jc:a=10;break e;case Nc:a=9;break e;case Ia:a=11;break e;case Aa:a=14;break e;case Tt:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Je(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function tn(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function hi(e,t,n,r){return e=Je(22,e,r,t),e.elementType=Tc,e.lanes=n,e.stateNode={isHidden:!1},e}function kl(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function gs(e,t,n,r,o,i,a,l,u){return e=new Mm(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ts(i),e}function $m(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sd(e){if(!e)return Ht;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Sf(e,n,t)}return t}function kd(e,t,n,r,o,i,a,l,u){return e=gs(n,r,!0,e,o,i,a,l,u),e.context=Sd(null),n=e.current,r=Oe(),o=Vt(n),i=kt(r,o),i.callback=t??null,Ft(n,i,o),e.current.lanes=o,Vr(e,o,r),Ae(e,r),e}function vi(e,t,n,r){var o=t.current,i=Oe(),a=Vt(o);return n=Sd(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,a),e!==null&&(st(e,o,a,i),xo(e,o,a)),a}function qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ws(e,t){Xu(e,t),(e=e.alternate)&&Xu(e,t)}function Im(){return null}var _d=typeof reportError=="function"?reportError:function(e){console.error(e)};function xs(e){this._internalRoot=e}yi.prototype.render=xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));vi(e,t,null,null)};yi.prototype.unmount=xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){vi(null,e,null,null)}),t[Et]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&tf(e)}};function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ku(){}function Am(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=qo(a);i.call(s)}}var a=kd(t,r,e,0,null,!1,!1,"",Ku);return e._reactRootContainer=a,e[Et]=a.current,Cr(e.nodeType===8?e.parentNode:e),an(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var s=qo(u);l.call(s)}}var u=gs(e,0,!1,null,null,!1,!1,"",Ku);return e._reactRootContainer=u,e[Et]=u.current,Cr(e.nodeType===8?e.parentNode:e),an(function(){vi(t,u,n,r)}),u}function wi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var u=qo(a);l.call(u)}}vi(t,a,e,o)}else a=Am(n,t,e,o,r);return qo(a)}Zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(Ua(t,n|1),Ae(t,se()),!(H&6)&&(Un=se()+500,Xt()))}break;case 13:an(function(){var r=Ct(e,1);if(r!==null){var o=Oe();st(r,e,1,o)}}),ws(e,1)}};Va=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Oe();st(t,e,134217728,n)}ws(e,134217728)}};Jc=function(e){if(e.tag===13){var t=Vt(e),n=Ct(e,t);if(n!==null){var r=Oe();st(n,e,t,r)}ws(e,t)}};qc=function(){return G};ef=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Vl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ui(r);if(!o)throw Error(N(90));Lc(r),Ml(r,o)}}}break;case"textarea":Rc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};Uc=ms;Vc=an;var Dm={usingClientEntryPoint:!1,Events:[Wr,wn,ui,Dc,Fc,ms]},nr={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fm={bundleType:nr.bundleType,version:nr.version,rendererPackageName:nr.rendererPackageName,rendererConfig:nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hc(e),e===null?null:e.stateNode},findFiberByHostInstance:nr.findFiberByHostInstance||Im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{ii=co.inject(Fm),ht=co}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ss(t))throw Error(N(200));return $m(e,t,null,n)};Ye.createRoot=function(e,t){if(!Ss(e))throw Error(N(299));var n=!1,r="",o=_d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=gs(e,1,!1,null,null,n,!1,r,o),e[Et]=t.current,Cr(e.nodeType===8?e.parentNode:e),new xs(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Hc(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return an(e)};Ye.hydrate=function(e,t,n){if(!gi(t))throw Error(N(200));return wi(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Ss(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=_d;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=kd(t,null,e,1,n??null,o,!1,i,a),e[Et]=t.current,Cr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new yi(t)};Ye.render=function(e,t,n){if(!gi(t))throw Error(N(200));return wi(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!gi(e))throw Error(N(40));return e._reactRootContainer?(an(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Ye.unstable_batchedUpdates=ms;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gi(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return wi(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function Ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed)}catch(e){console.error(e)}}Ed(),_c.exports=Ye;var Um=_c.exports;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mr.apply(this,arguments)}var qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qt||(qt={}));const Gu="popstate";function Vm(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return xa("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ei(o)}return Hm(t,n,null,e)}function We(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wm(){return Math.random().toString(36).substr(2,8)}function bu(e,t){return{usr:e.state,key:e.key,idx:t}}function xa(e,t,n,r){return n===void 0&&(n=null),Mr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xi(t):t,{state:n,key:t&&t.key||r||Wm()})}function ei(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=qt.Pop,u=null,s=c();s==null&&(s=0,a.replaceState(Mr({},a.state,{idx:s}),""));function c(){return(a.state||{idx:null}).idx}function f(){l=qt.Pop;let x=c(),h=x==null?null:x-s;s=x,u&&u({action:l,location:g.location,delta:h})}function p(x,h){l=qt.Push;let d=xa(g.location,x,h);s=c()+1;let v=bu(d,s),w=g.createHref(d);try{a.pushState(v,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(w)}i&&u&&u({action:l,location:g.location,delta:1})}function m(x,h){l=qt.Replace;let d=xa(g.location,x,h);s=c();let v=bu(d,s),w=g.createHref(d);a.replaceState(v,"",w),i&&u&&u({action:l,location:g.location,delta:0})}function y(x){let h=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof x=="string"?x:ei(x);return d=d.replace(/ $/,"%20"),We(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let g={get action(){return l},get location(){return e(o,a)},listen(x){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Gu,f),u=x,()=>{o.removeEventListener(Gu,f),u=null}},createHref(x){return t(o,x)},createURL:y,encodeLocation(x){let h=y(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:m,go(x){return a.go(x)}};return g}var Zu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Zu||(Zu={}));function Ju(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((s,c,f)=>{let{paramName:p,isOptional:m}=c;if(p==="*"){let g=l[f]||"";a=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const y=l[f];return m&&!y?s[p]=void 0:s[p]=(y||"").replace(/%2F/g,"/"),s},{}),pathname:i,pathnameBase:a,pattern:e}}function Qm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function $r(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ym(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?xi(e):e;return{pathname:n?n.startsWith("/")?n:Xm(n,t):t,search:Gm(r),hash:bm(o)}}function Xm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function El(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Km(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Cd(e,t){let n=Km(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=xi(e):(o=Mr({},e),We(!o.pathname||!o.pathname.includes("?"),El("?","pathname","search",o)),We(!o.pathname||!o.pathname.includes("#"),El("#","pathname","hash",o)),We(!o.search||!o.search.includes("#"),El("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}l=f>=0?t[f]:"/"}let u=Ym(o,l),s=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||c)&&(u.pathname+="/"),u}const jd=e=>e.join("/").replace(/\/\/+/g,"/"),Gm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Nd=["post","put","patch","delete"];new Set(Nd);const Zm=["get",...Nd];new Set(Zm);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}const ks=z.createContext(null),Jm=z.createContext(null),cn=z.createContext(null),_s=z.createContext(null),Si=z.createContext({outlet:null,matches:[],isDataRoute:!1});function qm(e,t){let{relative:n}=t===void 0?{}:t;ki()||We(!1);let{basename:r,navigator:o}=z.useContext(cn),{hash:i,pathname:a,search:l}=Ei(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:jd([r,a])),o.createHref({pathname:u,search:l,hash:i})}function ki(){return z.useContext(_s)!=null}function _i(){return ki()||We(!1),z.useContext(_s).location}function Td(e){z.useContext(cn).static||z.useLayoutEffect(e)}function eh(){let{isDataRoute:e}=z.useContext(Si);return e?ih():th()}function th(){ki()||We(!1);let e=z.useContext(ks),{basename:t,future:n,navigator:r}=z.useContext(cn),{matches:o}=z.useContext(Si),{pathname:i}=_i(),a=JSON.stringify(Cd(o,n.v7_relativeSplatPath)),l=z.useRef(!1);return Td(()=>{l.current=!0}),z.useCallback(function(s,c){if(c===void 0&&(c={}),!l.current)return;if(typeof s=="number"){r.go(s);return}let f=Pd(s,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:jd([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,a,i,e])}function Ei(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=z.useContext(cn),{matches:o}=z.useContext(Si),{pathname:i}=_i(),a=JSON.stringify(Cd(o,r.v7_relativeSplatPath));return z.useMemo(()=>Pd(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}var Od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Od||{}),Ld=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ld||{});function nh(e){let t=z.useContext(ks);return t||We(!1),t}function rh(e){let t=z.useContext(Si);return t||We(!1),t}function oh(e){let t=rh(),n=t.matches[t.matches.length-1];return n.route.id||We(!1),n.route.id}function ih(){let{router:e}=nh(Od.UseNavigateStable),t=oh(Ld.UseNavigateStable),n=z.useRef(!1);return Td(()=>{n.current=!0}),z.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ti({fromRouteId:t},i)))},[e,t])}function lh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=qt.Pop,navigator:i,static:a=!1,future:l}=e;ki()&&We(!1);let u=t.replace(/^\/*/,"/"),s=z.useMemo(()=>({basename:u,navigator:i,static:a,future:ti({v7_relativeSplatPath:!1},l)}),[u,l,i,a]);typeof r=="string"&&(r=xi(r));let{pathname:c="/",search:f="",hash:p="",state:m=null,key:y="default"}=r,g=z.useMemo(()=>{let x=$r(c,u);return x==null?null:{location:{pathname:x,search:f,hash:p,state:m,key:y},navigationType:o}},[u,c,f,p,m,y,o]);return g==null?null:z.createElement(cn.Provider,{value:s},z.createElement(_s.Provider,{children:n,value:g}))}new Promise(()=>{});/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}function zd(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ah(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sh(e,t){return e.button===0&&(!t||t==="_self")&&!ah(e)}const uh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ch=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],fh="6";try{window.__reactRouterVersion=fh}catch{}const dh=z.createContext({isTransitioning:!1}),ph="startTransition",qu=jl[ph];function mh(e){let{basename:t,children:n,future:r,window:o}=e,i=z.useRef();i.current==null&&(i.current=Vm({window:o,v5Compat:!0}));let a=i.current,[l,u]=z.useState({action:a.action,location:a.location}),{v7_startTransition:s}=r||{},c=z.useCallback(f=>{s&&qu?qu(()=>u(f)):u(f)},[u,s]);return z.useLayoutEffect(()=>a.listen(c),[a,c]),z.createElement(lh,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const hh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yh=z.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:u,to:s,preventScrollReset:c,unstable_viewTransition:f}=t,p=zd(t,uh),{basename:m}=z.useContext(cn),y,g=!1;if(typeof s=="string"&&vh.test(s)&&(y=s,hh))try{let v=new URL(window.location.href),w=s.startsWith("//")?new URL(v.protocol+s):new URL(s),S=$r(w.pathname,m);w.origin===v.origin&&S!=null?s=S+w.search+w.hash:g=!0}catch{}let x=qm(s,{relative:o}),h=xh(s,{replace:a,state:l,target:u,preventScrollReset:c,relative:o,unstable_viewTransition:f});function d(v){r&&r(v),v.defaultPrevented||h(v)}return z.createElement("a",ni({},p,{href:y||x,onClick:g||i?r:d,ref:n,target:u}))}),gh=z.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:u,unstable_viewTransition:s,children:c}=t,f=zd(t,ch),p=Ei(u,{relative:f.relative}),m=_i(),y=z.useContext(Jm),{navigator:g,basename:x}=z.useContext(cn),h=y!=null&&Sh(p)&&s===!0,d=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,v=m.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(v=v.toLowerCase(),w=w?w.toLowerCase():null,d=d.toLowerCase()),w&&x&&(w=$r(w,x)||w);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let E=v===d||!a&&v.startsWith(d)&&v.charAt(S)==="/",k=w!=null&&(w===d||!a&&w.startsWith(d)&&w.charAt(d.length)==="/"),P={isActive:E,isPending:k,isTransitioning:h},D=E?r:void 0,L;typeof i=="function"?L=i(P):L=[i,E?"active":null,k?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let M=typeof l=="function"?l(P):l;return z.createElement(yh,ni({},f,{"aria-current":D,className:L,ref:n,style:M,to:u,unstable_viewTransition:s}),typeof c=="function"?c(P):c)});var Sa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sa||(Sa={}));var ec;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ec||(ec={}));function wh(e){let t=z.useContext(ks);return t||We(!1),t}function xh(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,u=eh(),s=_i(),c=Ei(e,{relative:a});return z.useCallback(f=>{if(sh(f,n)){f.preventDefault();let p=r!==void 0?r:ei(s)===ei(c);u(e,{replace:p,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[s,u,c,r,o,n,e,i,a,l])}function Sh(e,t){t===void 0&&(t={});let n=z.useContext(dh);n==null&&We(!1);let{basename:r}=wh(Sa.useViewTransitionState),o=Ei(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=$r(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=$r(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ju(o.pathname,a)!=null||Ju(o.pathname,i)!=null}var ka={},tc=Um;ka.createRoot=tc.createRoot,ka.hydrateRoot=tc.hydrateRoot;const kh="https://escondol.github.io/assets/Perfil1-Chpc5VQb.jpeg",_h=()=>{const[e,t]=z.useState(!1),n=()=>{t(!e)},r=()=>{e&&n()};return C.jsxs("header",{children:[C.jsxs("div",{className:"logo",children:[C.jsx("img",{src:kh,alt:"My Image",title:"Guante desarrollado por Angel Gabrir"}),C.jsxs("div",{className:"text-container",children:[C.jsx("h1",{title:"Soy Mecatrónico",children:"Dojanni Contreras"}),C.jsx("p",{children:"Tecnólogo en Mecatrónica"})]})]}),C.jsxs("div",{className:"hamburger",onClick:n,children:[C.jsx("div",{className:"line"}),C.jsx("div",{className:"line"}),C.jsx("div",{className:"line"})]}),C.jsx("nav",{className:`nav-bar ${e?"active":""}`,children:C.jsxs("ul",{children:[C.jsx("li",{children:C.jsx("a",{href:"./",onClick:r,children:"Inicio"})}),C.jsx("li",{children:C.jsx("a",{href:"#sobre",onClick:r,children:"Sobre mi"})}),C.jsx("li",{children:C.jsx("a",{href:"#proyectos",onClick:r,children:"Proyectos"})}),C.jsx("li",{children:C.jsx(gh,{to:"/enlaces",onClick:r,children:"Contacto"})})]})})]})};var Rd={exports:{}};(function(e,t){(function(n,r){e.exports=r(z)})(typeof self<"u"?self:mp,n=>(()=>{var r={7403:(l,u,s)=>{s.d(u,{default:()=>R});var c=s(4087),f=s.n(c);const p=function(O){return new RegExp(/<[a-z][\s\S]*>/i).test(O)},m=function(O,j){return Math.floor(Math.random()*(j-O+1))+O};var y="TYPE_CHARACTER",g="REMOVE_CHARACTER",x="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",d="PAUSE_FOR",v="CALL_FUNCTION",w="ADD_HTML_TAG_ELEMENT",S="CHANGE_DELETE_SPEED",E="CHANGE_DELAY",k="CHANGE_CURSOR",P="PASTE_STRING",D="HTML_TAG";function L(O){return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},L(O)}function M(O,j){var F=Object.keys(O);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(O);j&&(A=A.filter(function(Ne){return Object.getOwnPropertyDescriptor(O,Ne).enumerable})),F.push.apply(F,A)}return F}function U(O){for(var j=1;j<arguments.length;j++){var F=arguments[j]!=null?arguments[j]:{};j%2?M(Object(F),!0).forEach(function(A){W(O,A,F[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(F)):M(Object(F)).forEach(function(A){Object.defineProperty(O,A,Object.getOwnPropertyDescriptor(F,A))})}return O}function B(O){return function(j){if(Array.isArray(j))return K(j)}(O)||function(j){if(typeof Symbol<"u"&&j[Symbol.iterator]!=null||j["@@iterator"]!=null)return Array.from(j)}(O)||function(j,F){if(j){if(typeof j=="string")return K(j,F);var A=Object.prototype.toString.call(j).slice(8,-1);return A==="Object"&&j.constructor&&(A=j.constructor.name),A==="Map"||A==="Set"?Array.from(j):A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)?K(j,F):void 0}}(O)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function K(O,j){(j==null||j>O.length)&&(j=O.length);for(var F=0,A=new Array(j);F<j;F++)A[F]=O[F];return A}function J(O,j){for(var F=0;F<j.length;F++){var A=j[F];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(O,Fe(A.key),A)}}function W(O,j,F){return(j=Fe(j))in O?Object.defineProperty(O,j,{value:F,enumerable:!0,configurable:!0,writable:!0}):O[j]=F,O}function Fe(O){var j=function(F,A){if(L(F)!=="object"||F===null)return F;var Ne=F[Symbol.toPrimitive];if(Ne!==void 0){var _=Ne.call(F,"string");if(L(_)!=="object")return _;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(F)}(O);return L(j)==="symbol"?j:String(j)}const R=function(){function O(A,Ne){var _=this;if(function(I,Q){if(!(I instanceof Q))throw new TypeError("Cannot call a class as a function")}(this,O),W(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),W(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),W(this,"setupWrapperElement",function(){_.state.elements.container&&(_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor))}),W(this,"start",function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_}),W(this,"pause",function(){return _.state.eventLoopPaused=!0,_}),W(this,"stop",function(){return _.state.eventLoop&&((0,c.cancel)(_.state.eventLoop),_.state.eventLoop=null),_}),W(this,"pauseFor",function(I){return _.addEventToQueue(d,{ms:I}),_}),W(this,"typeOutAllStrings",function(){return typeof _.options.strings=="string"?(_.typeString(_.options.strings).pauseFor(_.options.pauseFor),_):(_.options.strings.forEach(function(I){_.typeString(I).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed)}),_)}),W(this,"typeString",function(I){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(p(I))return _.typeOutHTMLString(I,Q);if(I){var Se=(_.options||{}).stringSplitter,ke=typeof Se=="function"?Se(I):I.split("");_.typeCharacters(ke,Q)}return _}),W(this,"pasteString",function(I){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return p(I)?_.typeOutHTMLString(I,Q,!0):(I&&_.addEventToQueue(P,{character:I,node:Q}),_)}),W(this,"typeOutHTMLString",function(I){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Se=arguments.length>2?arguments[2]:void 0,ke=function(Yn){var Xn=document.createElement("div");return Xn.innerHTML=Yn,Xn.childNodes}(I);if(ke.length>0)for(var ne=0;ne<ke.length;ne++){var Ge=ke[ne],dn=Ge.innerHTML;Ge&&Ge.nodeType!==3?(Ge.innerHTML="",_.addEventToQueue(w,{node:Ge,parentNode:Q}),Se?_.pasteString(dn,Ge):_.typeString(dn,Ge)):Ge.textContent&&(Se?_.pasteString(Ge.textContent,Q):_.typeString(Ge.textContent,Q))}return _}),W(this,"deleteAll",function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return _.addEventToQueue(x,{speed:I}),_}),W(this,"changeDeleteSpeed",function(I){if(!I)throw new Error("Must provide new delete speed");return _.addEventToQueue(S,{speed:I}),_}),W(this,"changeDelay",function(I){if(!I)throw new Error("Must provide new delay");return _.addEventToQueue(E,{delay:I}),_}),W(this,"changeCursor",function(I){if(!I)throw new Error("Must provide new cursor");return _.addEventToQueue(k,{cursor:I}),_}),W(this,"deleteChars",function(I){if(!I)throw new Error("Must provide amount of characters to delete");for(var Q=0;Q<I;Q++)_.addEventToQueue(g);return _}),W(this,"callFunction",function(I,Q){if(!I||typeof I!="function")throw new Error("Callback must be a function");return _.addEventToQueue(v,{cb:I,thisArg:Q}),_}),W(this,"typeCharacters",function(I){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I||!Array.isArray(I))throw new Error("Characters must be an array");return I.forEach(function(Se){_.addEventToQueue(y,{character:Se,node:Q})}),_}),W(this,"removeCharacters",function(I){if(!I||!Array.isArray(I))throw new Error("Characters must be an array");return I.forEach(function(){_.addEventToQueue(g)}),_}),W(this,"addEventToQueue",function(I,Q){var Se=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return _.addEventToStateProperty(I,Q,Se,"eventQueue")}),W(this,"addReverseCalledEvent",function(I,Q){var Se=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return _.options.loop?_.addEventToStateProperty(I,Q,Se,"reverseCalledEvents"):_}),W(this,"addEventToStateProperty",function(I,Q){var Se=arguments.length>2&&arguments[2]!==void 0&&arguments[2],ke=arguments.length>3?arguments[3]:void 0,ne={eventName:I,eventArgs:Q||{}};return _.state[ke]=Se?[ne].concat(B(_.state[ke])):[].concat(B(_.state[ke]),[ne]),_}),W(this,"runEventLoop",function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var I=Date.now(),Q=I-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=B(_.state.calledEvents),_.state.calledEvents=[],_.options=U({},_.state.initialOptions)}if(_.state.eventLoop=f()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(I<_.state.pauseUntil)return;_.state.pauseUntil=null}var Se,ke=B(_.state.eventQueue),ne=ke.shift();if(!(Q<=(Se=ne.eventName===h||ne.eventName===g?_.options.deleteSpeed==="natural"?m(40,80):_.options.deleteSpeed:_.options.delay==="natural"?m(120,160):_.options.delay))){var Ge=ne.eventName,dn=ne.eventArgs;switch(_.logInDevMode({currentEvent:ne,state:_.state,delay:Se}),Ge){case P:case y:var Yn=dn.character,Xn=dn.node,As=document.createTextNode(Yn),Kn=As;_.options.onCreateTextNode&&typeof _.options.onCreateTextNode=="function"&&(Kn=_.options.onCreateTextNode(Yn,As)),Kn&&(Xn?Xn.appendChild(Kn):_.state.elements.wrapper.appendChild(Kn)),_.state.visibleNodes=[].concat(B(_.state.visibleNodes),[{type:"TEXT_NODE",character:Yn,node:Kn}]);break;case g:ke.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case d:var ip=ne.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(ip);break;case v:var Ds=ne.eventArgs,lp=Ds.cb,ap=Ds.thisArg;lp.call(ap,{elements:_.state.elements});break;case w:var Fs=ne.eventArgs,Ki=Fs.node,Gi=Fs.parentNode;Gi?Gi.appendChild(Ki):_.state.elements.wrapper.appendChild(Ki),_.state.visibleNodes=[].concat(B(_.state.visibleNodes),[{type:D,node:Ki,parentNode:Gi||_.state.elements.wrapper}]);break;case x:var sp=_.state.visibleNodes,bi=dn.speed,Yr=[];bi&&Yr.push({eventName:S,eventArgs:{speed:bi,temp:!0}});for(var Us=0,up=sp.length;Us<up;Us++)Yr.push({eventName:h,eventArgs:{removingCharacterNode:!1}});bi&&Yr.push({eventName:S,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),ke.unshift.apply(ke,Yr);break;case h:var cp=ne.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var Zi=_.state.visibleNodes.pop(),fp=Zi.type,Xr=Zi.node,dp=Zi.character;_.options.onRemoveNode&&typeof _.options.onRemoveNode=="function"&&_.options.onRemoveNode({node:Xr,character:dp}),Xr&&Xr.parentNode.removeChild(Xr),fp===D&&cp&&ke.unshift({eventName:h,eventArgs:{}})}break;case S:_.options.deleteSpeed=ne.eventArgs.speed;break;case E:_.options.delay=ne.eventArgs.delay;break;case k:_.options.cursor=ne.eventArgs.cursor,_.state.elements.cursor.innerHTML=ne.eventArgs.cursor}_.options.loop&&(ne.eventName===h||ne.eventArgs&&ne.eventArgs.temp||(_.state.calledEvents=[].concat(B(_.state.calledEvents),[ne]))),_.state.eventQueue=ke,_.state.lastFrameTime=I}}}),A)if(typeof A=="string"){var fn=document.querySelector(A);if(!fn)throw new Error("Could not find container element");this.state.elements.container=fn}else this.state.elements.container=A;Ne&&(this.options=U(U({},this.options),Ne)),this.state.initialOptions=U({},this.options),this.init()}var j,F;return j=O,(F=[{key:"init",value:function(){var A,Ne;this.setupWrapperElement(),this.addEventToQueue(k,{cursor:this.options.cursor},!0),this.addEventToQueue(x,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(A=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Ne=document.createElement("style")).appendChild(document.createTextNode(A)),document.head.appendChild(Ne),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(A){this.options.devMode&&console.log(A)}}])&&J(j.prototype,F),Object.defineProperty(j,"prototype",{writable:!1}),O}()},8552:(l,u,s)=>{var c=s(852)(s(5639),"DataView");l.exports=c},1989:(l,u,s)=>{var c=s(1789),f=s(401),p=s(7667),m=s(1327),y=s(1866);function g(x){var h=-1,d=x==null?0:x.length;for(this.clear();++h<d;){var v=x[h];this.set(v[0],v[1])}}g.prototype.clear=c,g.prototype.delete=f,g.prototype.get=p,g.prototype.has=m,g.prototype.set=y,l.exports=g},8407:(l,u,s)=>{var c=s(7040),f=s(4125),p=s(2117),m=s(7518),y=s(4705);function g(x){var h=-1,d=x==null?0:x.length;for(this.clear();++h<d;){var v=x[h];this.set(v[0],v[1])}}g.prototype.clear=c,g.prototype.delete=f,g.prototype.get=p,g.prototype.has=m,g.prototype.set=y,l.exports=g},7071:(l,u,s)=>{var c=s(852)(s(5639),"Map");l.exports=c},3369:(l,u,s)=>{var c=s(4785),f=s(1285),p=s(6e3),m=s(9916),y=s(5265);function g(x){var h=-1,d=x==null?0:x.length;for(this.clear();++h<d;){var v=x[h];this.set(v[0],v[1])}}g.prototype.clear=c,g.prototype.delete=f,g.prototype.get=p,g.prototype.has=m,g.prototype.set=y,l.exports=g},3818:(l,u,s)=>{var c=s(852)(s(5639),"Promise");l.exports=c},8525:(l,u,s)=>{var c=s(852)(s(5639),"Set");l.exports=c},8668:(l,u,s)=>{var c=s(3369),f=s(619),p=s(2385);function m(y){var g=-1,x=y==null?0:y.length;for(this.__data__=new c;++g<x;)this.add(y[g])}m.prototype.add=m.prototype.push=f,m.prototype.has=p,l.exports=m},6384:(l,u,s)=>{var c=s(8407),f=s(7465),p=s(3779),m=s(7599),y=s(4758),g=s(4309);function x(h){var d=this.__data__=new c(h);this.size=d.size}x.prototype.clear=f,x.prototype.delete=p,x.prototype.get=m,x.prototype.has=y,x.prototype.set=g,l.exports=x},2705:(l,u,s)=>{var c=s(5639).Symbol;l.exports=c},1149:(l,u,s)=>{var c=s(5639).Uint8Array;l.exports=c},577:(l,u,s)=>{var c=s(852)(s(5639),"WeakMap");l.exports=c},4963:l=>{l.exports=function(u,s){for(var c=-1,f=u==null?0:u.length,p=0,m=[];++c<f;){var y=u[c];s(y,c,u)&&(m[p++]=y)}return m}},4636:(l,u,s)=>{var c=s(2545),f=s(5694),p=s(1469),m=s(4144),y=s(5776),g=s(6719),x=Object.prototype.hasOwnProperty;l.exports=function(h,d){var v=p(h),w=!v&&f(h),S=!v&&!w&&m(h),E=!v&&!w&&!S&&g(h),k=v||w||S||E,P=k?c(h.length,String):[],D=P.length;for(var L in h)!d&&!x.call(h,L)||k&&(L=="length"||S&&(L=="offset"||L=="parent")||E&&(L=="buffer"||L=="byteLength"||L=="byteOffset")||y(L,D))||P.push(L);return P}},2488:l=>{l.exports=function(u,s){for(var c=-1,f=s.length,p=u.length;++c<f;)u[p+c]=s[c];return u}},2908:l=>{l.exports=function(u,s){for(var c=-1,f=u==null?0:u.length;++c<f;)if(s(u[c],c,u))return!0;return!1}},8470:(l,u,s)=>{var c=s(7813);l.exports=function(f,p){for(var m=f.length;m--;)if(c(f[m][0],p))return m;return-1}},8866:(l,u,s)=>{var c=s(2488),f=s(1469);l.exports=function(p,m,y){var g=m(p);return f(p)?g:c(g,y(p))}},4239:(l,u,s)=>{var c=s(2705),f=s(9607),p=s(2333),m=c?c.toStringTag:void 0;l.exports=function(y){return y==null?y===void 0?"[object Undefined]":"[object Null]":m&&m in Object(y)?f(y):p(y)}},9454:(l,u,s)=>{var c=s(4239),f=s(7005);l.exports=function(p){return f(p)&&c(p)=="[object Arguments]"}},939:(l,u,s)=>{var c=s(2492),f=s(7005);l.exports=function p(m,y,g,x,h){return m===y||(m==null||y==null||!f(m)&&!f(y)?m!=m&&y!=y:c(m,y,g,x,p,h))}},2492:(l,u,s)=>{var c=s(6384),f=s(7114),p=s(8351),m=s(6096),y=s(4160),g=s(1469),x=s(4144),h=s(6719),d="[object Arguments]",v="[object Array]",w="[object Object]",S=Object.prototype.hasOwnProperty;l.exports=function(E,k,P,D,L,M){var U=g(E),B=g(k),K=U?v:y(E),J=B?v:y(k),W=(K=K==d?w:K)==w,Fe=(J=J==d?w:J)==w,R=K==J;if(R&&x(E)){if(!x(k))return!1;U=!0,W=!1}if(R&&!W)return M||(M=new c),U||h(E)?f(E,k,P,D,L,M):p(E,k,K,P,D,L,M);if(!(1&P)){var O=W&&S.call(E,"__wrapped__"),j=Fe&&S.call(k,"__wrapped__");if(O||j){var F=O?E.value():E,A=j?k.value():k;return M||(M=new c),L(F,A,P,D,M)}}return!!R&&(M||(M=new c),m(E,k,P,D,L,M))}},8458:(l,u,s)=>{var c=s(3560),f=s(5346),p=s(3218),m=s(346),y=/^\[object .+?Constructor\]$/,g=Function.prototype,x=Object.prototype,h=g.toString,d=x.hasOwnProperty,v=RegExp("^"+h.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");l.exports=function(w){return!(!p(w)||f(w))&&(c(w)?v:y).test(m(w))}},8749:(l,u,s)=>{var c=s(4239),f=s(1780),p=s(7005),m={};m["[object Float32Array]"]=m["[object Float64Array]"]=m["[object Int8Array]"]=m["[object Int16Array]"]=m["[object Int32Array]"]=m["[object Uint8Array]"]=m["[object Uint8ClampedArray]"]=m["[object Uint16Array]"]=m["[object Uint32Array]"]=!0,m["[object Arguments]"]=m["[object Array]"]=m["[object ArrayBuffer]"]=m["[object Boolean]"]=m["[object DataView]"]=m["[object Date]"]=m["[object Error]"]=m["[object Function]"]=m["[object Map]"]=m["[object Number]"]=m["[object Object]"]=m["[object RegExp]"]=m["[object Set]"]=m["[object String]"]=m["[object WeakMap]"]=!1,l.exports=function(y){return p(y)&&f(y.length)&&!!m[c(y)]}},280:(l,u,s)=>{var c=s(5726),f=s(6916),p=Object.prototype.hasOwnProperty;l.exports=function(m){if(!c(m))return f(m);var y=[];for(var g in Object(m))p.call(m,g)&&g!="constructor"&&y.push(g);return y}},2545:l=>{l.exports=function(u,s){for(var c=-1,f=Array(u);++c<u;)f[c]=s(c);return f}},1717:l=>{l.exports=function(u){return function(s){return u(s)}}},4757:l=>{l.exports=function(u,s){return u.has(s)}},4429:(l,u,s)=>{var c=s(5639)["__core-js_shared__"];l.exports=c},7114:(l,u,s)=>{var c=s(8668),f=s(2908),p=s(4757);l.exports=function(m,y,g,x,h,d){var v=1&g,w=m.length,S=y.length;if(w!=S&&!(v&&S>w))return!1;var E=d.get(m),k=d.get(y);if(E&&k)return E==y&&k==m;var P=-1,D=!0,L=2&g?new c:void 0;for(d.set(m,y),d.set(y,m);++P<w;){var M=m[P],U=y[P];if(x)var B=v?x(U,M,P,y,m,d):x(M,U,P,m,y,d);if(B!==void 0){if(B)continue;D=!1;break}if(L){if(!f(y,function(K,J){if(!p(L,J)&&(M===K||h(M,K,g,x,d)))return L.push(J)})){D=!1;break}}else if(M!==U&&!h(M,U,g,x,d)){D=!1;break}}return d.delete(m),d.delete(y),D}},8351:(l,u,s)=>{var c=s(2705),f=s(1149),p=s(7813),m=s(7114),y=s(8776),g=s(1814),x=c?c.prototype:void 0,h=x?x.valueOf:void 0;l.exports=function(d,v,w,S,E,k,P){switch(w){case"[object DataView]":if(d.byteLength!=v.byteLength||d.byteOffset!=v.byteOffset)return!1;d=d.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(d.byteLength!=v.byteLength||!k(new f(d),new f(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return p(+d,+v);case"[object Error]":return d.name==v.name&&d.message==v.message;case"[object RegExp]":case"[object String]":return d==v+"";case"[object Map]":var D=y;case"[object Set]":var L=1&S;if(D||(D=g),d.size!=v.size&&!L)return!1;var M=P.get(d);if(M)return M==v;S|=2,P.set(d,v);var U=m(D(d),D(v),S,E,k,P);return P.delete(d),U;case"[object Symbol]":if(h)return h.call(d)==h.call(v)}return!1}},6096:(l,u,s)=>{var c=s(8234),f=Object.prototype.hasOwnProperty;l.exports=function(p,m,y,g,x,h){var d=1&y,v=c(p),w=v.length;if(w!=c(m).length&&!d)return!1;for(var S=w;S--;){var E=v[S];if(!(d?E in m:f.call(m,E)))return!1}var k=h.get(p),P=h.get(m);if(k&&P)return k==m&&P==p;var D=!0;h.set(p,m),h.set(m,p);for(var L=d;++S<w;){var M=p[E=v[S]],U=m[E];if(g)var B=d?g(U,M,E,m,p,h):g(M,U,E,p,m,h);if(!(B===void 0?M===U||x(M,U,y,g,h):B)){D=!1;break}L||(L=E=="constructor")}if(D&&!L){var K=p.constructor,J=m.constructor;K==J||!("constructor"in p)||!("constructor"in m)||typeof K=="function"&&K instanceof K&&typeof J=="function"&&J instanceof J||(D=!1)}return h.delete(p),h.delete(m),D}},1957:(l,u,s)=>{var c=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g;l.exports=c},8234:(l,u,s)=>{var c=s(8866),f=s(9551),p=s(3674);l.exports=function(m){return c(m,p,f)}},5050:(l,u,s)=>{var c=s(7019);l.exports=function(f,p){var m=f.__data__;return c(p)?m[typeof p=="string"?"string":"hash"]:m.map}},852:(l,u,s)=>{var c=s(8458),f=s(7801);l.exports=function(p,m){var y=f(p,m);return c(y)?y:void 0}},9607:(l,u,s)=>{var c=s(2705),f=Object.prototype,p=f.hasOwnProperty,m=f.toString,y=c?c.toStringTag:void 0;l.exports=function(g){var x=p.call(g,y),h=g[y];try{g[y]=void 0;var d=!0}catch{}var v=m.call(g);return d&&(x?g[y]=h:delete g[y]),v}},9551:(l,u,s)=>{var c=s(4963),f=s(479),p=Object.prototype.propertyIsEnumerable,m=Object.getOwnPropertySymbols,y=m?function(g){return g==null?[]:(g=Object(g),c(m(g),function(x){return p.call(g,x)}))}:f;l.exports=y},4160:(l,u,s)=>{var c=s(8552),f=s(7071),p=s(3818),m=s(8525),y=s(577),g=s(4239),x=s(346),h="[object Map]",d="[object Promise]",v="[object Set]",w="[object WeakMap]",S="[object DataView]",E=x(c),k=x(f),P=x(p),D=x(m),L=x(y),M=g;(c&&M(new c(new ArrayBuffer(1)))!=S||f&&M(new f)!=h||p&&M(p.resolve())!=d||m&&M(new m)!=v||y&&M(new y)!=w)&&(M=function(U){var B=g(U),K=B=="[object Object]"?U.constructor:void 0,J=K?x(K):"";if(J)switch(J){case E:return S;case k:return h;case P:return d;case D:return v;case L:return w}return B}),l.exports=M},7801:l=>{l.exports=function(u,s){return u==null?void 0:u[s]}},1789:(l,u,s)=>{var c=s(4536);l.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:l=>{l.exports=function(u){var s=this.has(u)&&delete this.__data__[u];return this.size-=s?1:0,s}},7667:(l,u,s)=>{var c=s(4536),f=Object.prototype.hasOwnProperty;l.exports=function(p){var m=this.__data__;if(c){var y=m[p];return y==="__lodash_hash_undefined__"?void 0:y}return f.call(m,p)?m[p]:void 0}},1327:(l,u,s)=>{var c=s(4536),f=Object.prototype.hasOwnProperty;l.exports=function(p){var m=this.__data__;return c?m[p]!==void 0:f.call(m,p)}},1866:(l,u,s)=>{var c=s(4536);l.exports=function(f,p){var m=this.__data__;return this.size+=this.has(f)?0:1,m[f]=c&&p===void 0?"__lodash_hash_undefined__":p,this}},5776:l=>{var u=/^(?:0|[1-9]\d*)$/;l.exports=function(s,c){var f=typeof s;return!!(c=c??9007199254740991)&&(f=="number"||f!="symbol"&&u.test(s))&&s>-1&&s%1==0&&s<c}},7019:l=>{l.exports=function(u){var s=typeof u;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?u!=="__proto__":u===null}},5346:(l,u,s)=>{var c,f=s(4429),p=(c=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";l.exports=function(m){return!!p&&p in m}},5726:l=>{var u=Object.prototype;l.exports=function(s){var c=s&&s.constructor;return s===(typeof c=="function"&&c.prototype||u)}},7040:l=>{l.exports=function(){this.__data__=[],this.size=0}},4125:(l,u,s)=>{var c=s(8470),f=Array.prototype.splice;l.exports=function(p){var m=this.__data__,y=c(m,p);return!(y<0||(y==m.length-1?m.pop():f.call(m,y,1),--this.size,0))}},2117:(l,u,s)=>{var c=s(8470);l.exports=function(f){var p=this.__data__,m=c(p,f);return m<0?void 0:p[m][1]}},7518:(l,u,s)=>{var c=s(8470);l.exports=function(f){return c(this.__data__,f)>-1}},4705:(l,u,s)=>{var c=s(8470);l.exports=function(f,p){var m=this.__data__,y=c(m,f);return y<0?(++this.size,m.push([f,p])):m[y][1]=p,this}},4785:(l,u,s)=>{var c=s(1989),f=s(8407),p=s(7071);l.exports=function(){this.size=0,this.__data__={hash:new c,map:new(p||f),string:new c}}},1285:(l,u,s)=>{var c=s(5050);l.exports=function(f){var p=c(this,f).delete(f);return this.size-=p?1:0,p}},6e3:(l,u,s)=>{var c=s(5050);l.exports=function(f){return c(this,f).get(f)}},9916:(l,u,s)=>{var c=s(5050);l.exports=function(f){return c(this,f).has(f)}},5265:(l,u,s)=>{var c=s(5050);l.exports=function(f,p){var m=c(this,f),y=m.size;return m.set(f,p),this.size+=m.size==y?0:1,this}},8776:l=>{l.exports=function(u){var s=-1,c=Array(u.size);return u.forEach(function(f,p){c[++s]=[p,f]}),c}},4536:(l,u,s)=>{var c=s(852)(Object,"create");l.exports=c},6916:(l,u,s)=>{var c=s(5569)(Object.keys,Object);l.exports=c},1167:(l,u,s)=>{l=s.nmd(l);var c=s(1957),f=u&&!u.nodeType&&u,p=f&&l&&!l.nodeType&&l,m=p&&p.exports===f&&c.process,y=function(){try{return p&&p.require&&p.require("util").types||m&&m.binding&&m.binding("util")}catch{}}();l.exports=y},2333:l=>{var u=Object.prototype.toString;l.exports=function(s){return u.call(s)}},5569:l=>{l.exports=function(u,s){return function(c){return u(s(c))}}},5639:(l,u,s)=>{var c=s(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,p=c||f||Function("return this")();l.exports=p},619:l=>{l.exports=function(u){return this.__data__.set(u,"__lodash_hash_undefined__"),this}},2385:l=>{l.exports=function(u){return this.__data__.has(u)}},1814:l=>{l.exports=function(u){var s=-1,c=Array(u.size);return u.forEach(function(f){c[++s]=f}),c}},7465:(l,u,s)=>{var c=s(8407);l.exports=function(){this.__data__=new c,this.size=0}},3779:l=>{l.exports=function(u){var s=this.__data__,c=s.delete(u);return this.size=s.size,c}},7599:l=>{l.exports=function(u){return this.__data__.get(u)}},4758:l=>{l.exports=function(u){return this.__data__.has(u)}},4309:(l,u,s)=>{var c=s(8407),f=s(7071),p=s(3369);l.exports=function(m,y){var g=this.__data__;if(g instanceof c){var x=g.__data__;if(!f||x.length<199)return x.push([m,y]),this.size=++g.size,this;g=this.__data__=new p(x)}return g.set(m,y),this.size=g.size,this}},346:l=>{var u=Function.prototype.toString;l.exports=function(s){if(s!=null){try{return u.call(s)}catch{}try{return s+""}catch{}}return""}},7813:l=>{l.exports=function(u,s){return u===s||u!=u&&s!=s}},5694:(l,u,s)=>{var c=s(9454),f=s(7005),p=Object.prototype,m=p.hasOwnProperty,y=p.propertyIsEnumerable,g=c(function(){return arguments}())?c:function(x){return f(x)&&m.call(x,"callee")&&!y.call(x,"callee")};l.exports=g},1469:l=>{var u=Array.isArray;l.exports=u},8612:(l,u,s)=>{var c=s(3560),f=s(1780);l.exports=function(p){return p!=null&&f(p.length)&&!c(p)}},4144:(l,u,s)=>{l=s.nmd(l);var c=s(5639),f=s(5062),p=u&&!u.nodeType&&u,m=p&&l&&!l.nodeType&&l,y=m&&m.exports===p?c.Buffer:void 0,g=(y?y.isBuffer:void 0)||f;l.exports=g},8446:(l,u,s)=>{var c=s(939);l.exports=function(f,p){return c(f,p)}},3560:(l,u,s)=>{var c=s(4239),f=s(3218);l.exports=function(p){if(!f(p))return!1;var m=c(p);return m=="[object Function]"||m=="[object GeneratorFunction]"||m=="[object AsyncFunction]"||m=="[object Proxy]"}},1780:l=>{l.exports=function(u){return typeof u=="number"&&u>-1&&u%1==0&&u<=9007199254740991}},3218:l=>{l.exports=function(u){var s=typeof u;return u!=null&&(s=="object"||s=="function")}},7005:l=>{l.exports=function(u){return u!=null&&typeof u=="object"}},6719:(l,u,s)=>{var c=s(8749),f=s(1717),p=s(1167),m=p&&p.isTypedArray,y=m?f(m):c;l.exports=y},3674:(l,u,s)=>{var c=s(4636),f=s(280),p=s(8612);l.exports=function(m){return p(m)?c(m):f(m)}},479:l=>{l.exports=function(){return[]}},5062:l=>{l.exports=function(){return!1}},75:function(l){(function(){var u,s,c,f,p,m;typeof performance<"u"&&performance!==null&&performance.now?l.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(l.exports=function(){return(u()-p)/1e6},s=process.hrtime,f=(u=function(){var y;return 1e9*(y=s())[0]+y[1]})(),m=1e9*process.uptime(),p=f-m):Date.now?(l.exports=function(){return Date.now()-c},c=Date.now()):(l.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(l,u,s)=>{for(var c=s(75),f=typeof window>"u"?s.g:window,p=["moz","webkit"],m="AnimationFrame",y=f["request"+m],g=f["cancel"+m]||f["cancelRequest"+m],x=0;!y&&x<p.length;x++)y=f[p[x]+"Request"+m],g=f[p[x]+"Cancel"+m]||f[p[x]+"CancelRequest"+m];if(!y||!g){var h=0,d=0,v=[];y=function(w){if(v.length===0){var S=c(),E=Math.max(0,16.666666666666668-(S-h));h=E+S,setTimeout(function(){var k=v.slice(0);v.length=0;for(var P=0;P<k.length;P++)if(!k[P].cancelled)try{k[P].callback(h)}catch(D){setTimeout(function(){throw D},0)}},Math.round(E))}return v.push({handle:++d,callback:w,cancelled:!1}),d},g=function(w){for(var S=0;S<v.length;S++)v[S].handle===w&&(v[S].cancelled=!0)}}l.exports=function(w){return y.call(f,w)},l.exports.cancel=function(){g.apply(f,arguments)},l.exports.polyfill=function(w){w||(w=f),w.requestAnimationFrame=y,w.cancelAnimationFrame=g}},8156:l=>{l.exports=n}},o={};function i(l){var u=o[l];if(u!==void 0)return u.exports;var s=o[l]={id:l,loaded:!1,exports:{}};return r[l].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return i.d(u,{a:u}),u},i.d=(l,u)=>{for(var s in u)i.o(u,s)&&!i.o(l,s)&&Object.defineProperty(l,s,{enumerable:!0,get:u[s]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),i.nmd=l=>(l.paths=[],l.children||(l.children=[]),l);var a={};return(()=>{i.d(a,{default:()=>v});var l=i(8156),u=i.n(l),s=i(7403),c=i(8446),f=i.n(c);function p(w){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},p(w)}function m(w,S){for(var E=0;E<S.length;E++){var k=S[E];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(w,h(k.key),k)}}function y(w,S){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,k){return E.__proto__=k,E},y(w,S)}function g(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}function x(w){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(S){return S.__proto__||Object.getPrototypeOf(S)},x(w)}function h(w){var S=function(E,k){if(p(E)!=="object"||E===null)return E;var P=E[Symbol.toPrimitive];if(P!==void 0){var D=P.call(E,"string");if(p(D)!=="object")return D;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(E)}(w);return p(S)==="symbol"?S:String(S)}var d=function(w){(function(M,U){if(typeof U!="function"&&U!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(U&&U.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),U&&y(M,U)})(L,w);var S,E,k,P,D=(k=L,P=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var M,U=x(k);if(P){var B=x(this).constructor;M=Reflect.construct(U,arguments,B)}else M=U.apply(this,arguments);return function(K,J){if(J&&(p(J)==="object"||typeof J=="function"))return J;if(J!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(K)}(this,M)});function L(){var M,U,B,K;(function(R,O){if(!(R instanceof O))throw new TypeError("Cannot call a class as a function")})(this,L);for(var J=arguments.length,W=new Array(J),Fe=0;Fe<J;Fe++)W[Fe]=arguments[Fe];return U=g(M=D.call.apply(D,[this].concat(W))),K={instance:null},(B=h(B="state"))in U?Object.defineProperty(U,B,{value:K,enumerable:!0,configurable:!0,writable:!0}):U[B]=K,M}return S=L,(E=[{key:"componentDidMount",value:function(){var M=this,U=new s.default(this.typewriter,this.props.options);this.setState({instance:U},function(){var B=M.props.onInit;B&&B(U)})}},{key:"componentDidUpdate",value:function(M){f()(this.props.options,M.options)||this.setState({instance:new s.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var M=this,U=this.props.component;return u().createElement(U,{ref:function(B){return M.typewriter=B},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(S.prototype,E),Object.defineProperty(S,"prototype",{writable:!1}),L}(l.Component);d.defaultProps={component:"div"};const v=d})(),a.default})())})(Rd);var Eh=Rd.exports;const Ch=cc(Eh),Ph=()=>C.jsx(Ch,{onInit:e=>{e.typeString('<strong>Hola, soy <span style="color: #f1dac4;">Dojanni Contreras</span></strong>').start()}});function jh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Nh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Th=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Nh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=jh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ce="-ms-",ri="-moz-",Y="-webkit-",Md="comm",Es="rule",Cs="decl",Oh="@import",$d="@keyframes",Lh="@layer",zh=Math.abs,Ci=String.fromCharCode,Rh=Object.assign;function Mh(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Id(e){return e.trim()}function $h(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function _a(e,t){return e.indexOf(t)}function ge(e,t){return e.charCodeAt(t)|0}function Ir(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function Ps(e){return e.length}function fo(e,t){return t.push(e),e}function Ih(e,t){return e.map(t).join("")}var Pi=1,Vn=1,Ad=0,De=0,ue=0,Qn="";function ji(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Pi,column:Vn,length:a,return:""}}function rr(e,t){return Rh(ji("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ah(){return ue}function Dh(){return ue=De>0?ge(Qn,--De):0,Vn--,ue===10&&(Vn=1,Pi--),ue}function He(){return ue=De<Ad?ge(Qn,De++):0,Vn++,ue===10&&(Vn=1,Pi++),ue}function yt(){return ge(Qn,De)}function jo(){return De}function Qr(e,t){return Ir(Qn,e,t)}function Ar(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dd(e){return Pi=Vn=1,Ad=dt(Qn=e),De=0,[]}function Fd(e){return Qn="",e}function No(e){return Id(Qr(De-1,Ea(e===91?e+2:e===40?e+1:e)))}function Fh(e){for(;(ue=yt())&&ue<33;)He();return Ar(e)>2||Ar(ue)>3?"":" "}function Uh(e,t){for(;--t&&He()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return Qr(e,jo()+(t<6&&yt()==32&&He()==32))}function Ea(e){for(;He();)switch(ue){case e:return De;case 34:case 39:e!==34&&e!==39&&Ea(ue);break;case 40:e===41&&Ea(e);break;case 92:He();break}return De}function Vh(e,t){for(;He()&&e+ue!==57;)if(e+ue===84&&yt()===47)break;return"/*"+Qr(t,De-1)+"*"+Ci(e===47?e:He())}function Bh(e){for(;!Ar(yt());)He();return Qr(e,De)}function Wh(e){return Fd(To("",null,null,null,[""],e=Dd(e),0,[0],e))}function To(e,t,n,r,o,i,a,l,u){for(var s=0,c=0,f=a,p=0,m=0,y=0,g=1,x=1,h=1,d=0,v="",w=o,S=i,E=r,k=v;x;)switch(y=d,d=He()){case 40:if(y!=108&&ge(k,f-1)==58){_a(k+=X(No(d),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=No(d);break;case 9:case 10:case 13:case 32:k+=Fh(y);break;case 92:k+=Uh(jo()-1,7);continue;case 47:switch(yt()){case 42:case 47:fo(Hh(Vh(He(),jo()),t,n),u);break;default:k+="/"}break;case 123*g:l[s++]=dt(k)*h;case 125*g:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+c:h==-1&&(k=X(k,/\f/g,"")),m>0&&dt(k)-f&&fo(m>32?rc(k+";",r,n,f-1):rc(X(k," ","")+";",r,n,f-2),u);break;case 59:k+=";";default:if(fo(E=nc(k,t,n,s,c,o,l,v,w=[],S=[],f),i),d===123)if(c===0)To(k,t,E,E,w,i,f,l,S);else switch(p===99&&ge(k,3)===110?100:p){case 100:case 108:case 109:case 115:To(e,E,E,r&&fo(nc(e,E,E,0,0,o,l,v,o,w=[],f),S),o,S,f,l,r?w:S);break;default:To(k,E,E,E,[""],S,0,l,S)}}s=c=m=0,g=h=1,v=k="",f=a;break;case 58:f=1+dt(k),m=y;default:if(g<1){if(d==123)--g;else if(d==125&&g++==0&&Dh()==125)continue}switch(k+=Ci(d),d*g){case 38:h=c>0?1:(k+="\f",-1);break;case 44:l[s++]=(dt(k)-1)*h,h=1;break;case 64:yt()===45&&(k+=No(He())),p=yt(),c=f=dt(v=k+=Bh(jo())),d++;break;case 45:y===45&&dt(k)==2&&(g=0)}}return i}function nc(e,t,n,r,o,i,a,l,u,s,c){for(var f=o-1,p=o===0?i:[""],m=Ps(p),y=0,g=0,x=0;y<r;++y)for(var h=0,d=Ir(e,f+1,f=zh(g=a[y])),v=e;h<m;++h)(v=Id(g>0?p[h]+" "+d:X(d,/&\f/g,p[h])))&&(u[x++]=v);return ji(e,t,n,o===0?Es:l,u,s,c)}function Hh(e,t,n){return ji(e,t,n,Md,Ci(Ah()),Ir(e,2,-2),0)}function rc(e,t,n,r){return ji(e,t,n,Cs,Ir(e,0,r),Ir(e,r+1,-1),r)}function zn(e,t){for(var n="",r=Ps(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Qh(e,t,n,r){switch(e.type){case Lh:if(e.children.length)break;case Oh:case Cs:return e.return=e.return||e.value;case Md:return"";case $d:return e.return=e.value+"{"+zn(e.children,r)+"}";case Es:e.value=e.props.join(",")}return dt(n=zn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yh(e){var t=Ps(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Xh(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Gh=function(t,n,r){for(var o=0,i=0;o=i,i=yt(),o===38&&i===12&&(n[r]=1),!Ar(i);)He();return Qr(t,De)},bh=function(t,n){var r=-1,o=44;do switch(Ar(o)){case 0:o===38&&yt()===12&&(n[r]=1),t[r]+=Gh(De-1,n,r);break;case 2:t[r]+=No(o);break;case 4:if(o===44){t[++r]=yt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ci(o)}while(o=He());return t},Zh=function(t,n){return Fd(bh(Dd(t),n))},oc=new WeakMap,Jh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!oc.get(r))&&!o){oc.set(t,!0);for(var i=[],a=Zh(n,i),l=r.props,u=0,s=0;u<a.length;u++)for(var c=0;c<l.length;c++,s++)t.props[s]=i[u]?a[u].replace(/&\f/g,l[c]):l[c]+" "+a[u]}}},qh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ud(e,t){switch(Mh(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+ri+e+Ce+e+e;case 6828:case 4268:return Y+e+Ce+e+e;case 6165:return Y+e+Ce+"flex-"+e+e;case 5187:return Y+e+X(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Ce+"flex-$1$2")+e;case 5443:return Y+e+Ce+"flex-item-"+X(e,/flex-|-self/,"")+e;case 4675:return Y+e+Ce+"flex-line-pack"+X(e,/align-content|flex-|-self/,"")+e;case 5548:return Y+e+Ce+X(e,"shrink","negative")+e;case 5292:return Y+e+Ce+X(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+X(e,"-grow","")+Y+e+Ce+X(e,"grow","positive")+e;case 4554:return Y+X(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return X(X(X(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+ri+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_a(e,"stretch")?Ud(X(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ge(e,t+1)!==115)break;case 6444:switch(ge(e,dt(e)-3-(~_a(e,"!important")&&10))){case 107:return X(e,":",":"+Y)+e;case 101:return X(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(ge(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Ce+"$2box$3")+e}break;case 5936:switch(ge(e,t+11)){case 114:return Y+e+Ce+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+Ce+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+Ce+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Y+e+Ce+e+e}return e}var e1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Cs:t.return=Ud(t.value,t.length);break;case $d:return zn([rr(t,{value:X(t.value,"@","@"+Y)})],o);case Es:if(t.length)return Ih(t.props,function(i){switch($h(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return zn([rr(t,{props:[X(i,/:(read-\w+)/,":"+ri+"$1")]})],o);case"::placeholder":return zn([rr(t,{props:[X(i,/:(plac\w+)/,":"+Y+"input-$1")]}),rr(t,{props:[X(i,/:(plac\w+)/,":"+ri+"$1")]}),rr(t,{props:[X(i,/:(plac\w+)/,Ce+"input-$1")]})],o)}return""})}},t1=[e1],n1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var x=g.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||t1,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var x=g.getAttribute("data-emotion").split(" "),h=1;h<x.length;h++)i[x[h]]=!0;l.push(g)});var u,s=[Jh,qh];{var c,f=[Qh,Xh(function(g){c.insert(g)})],p=Yh(s.concat(o,f)),m=function(x){return zn(Wh(x),p)};u=function(x,h,d,v){c=d,m(x?x+"{"+h.styles+"}":h.styles),v&&(y.inserted[h.name]=!0)}}var y={key:n,sheet:new Th({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:u};return y.sheet.hydrate(l),y},Vd={exports:{}},b={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=typeof Symbol=="function"&&Symbol.for,js=ve?Symbol.for("react.element"):60103,Ns=ve?Symbol.for("react.portal"):60106,Ni=ve?Symbol.for("react.fragment"):60107,Ti=ve?Symbol.for("react.strict_mode"):60108,Oi=ve?Symbol.for("react.profiler"):60114,Li=ve?Symbol.for("react.provider"):60109,zi=ve?Symbol.for("react.context"):60110,Ts=ve?Symbol.for("react.async_mode"):60111,Ri=ve?Symbol.for("react.concurrent_mode"):60111,Mi=ve?Symbol.for("react.forward_ref"):60112,$i=ve?Symbol.for("react.suspense"):60113,r1=ve?Symbol.for("react.suspense_list"):60120,Ii=ve?Symbol.for("react.memo"):60115,Ai=ve?Symbol.for("react.lazy"):60116,o1=ve?Symbol.for("react.block"):60121,i1=ve?Symbol.for("react.fundamental"):60117,l1=ve?Symbol.for("react.responder"):60118,a1=ve?Symbol.for("react.scope"):60119;function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case js:switch(e=e.type,e){case Ts:case Ri:case Ni:case Oi:case Ti:case $i:return e;default:switch(e=e&&e.$$typeof,e){case zi:case Mi:case Ai:case Ii:case Li:return e;default:return t}}case Ns:return t}}}function Bd(e){return Ke(e)===Ri}b.AsyncMode=Ts;b.ConcurrentMode=Ri;b.ContextConsumer=zi;b.ContextProvider=Li;b.Element=js;b.ForwardRef=Mi;b.Fragment=Ni;b.Lazy=Ai;b.Memo=Ii;b.Portal=Ns;b.Profiler=Oi;b.StrictMode=Ti;b.Suspense=$i;b.isAsyncMode=function(e){return Bd(e)||Ke(e)===Ts};b.isConcurrentMode=Bd;b.isContextConsumer=function(e){return Ke(e)===zi};b.isContextProvider=function(e){return Ke(e)===Li};b.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===js};b.isForwardRef=function(e){return Ke(e)===Mi};b.isFragment=function(e){return Ke(e)===Ni};b.isLazy=function(e){return Ke(e)===Ai};b.isMemo=function(e){return Ke(e)===Ii};b.isPortal=function(e){return Ke(e)===Ns};b.isProfiler=function(e){return Ke(e)===Oi};b.isStrictMode=function(e){return Ke(e)===Ti};b.isSuspense=function(e){return Ke(e)===$i};b.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ni||e===Ri||e===Oi||e===Ti||e===$i||e===r1||typeof e=="object"&&e!==null&&(e.$$typeof===Ai||e.$$typeof===Ii||e.$$typeof===Li||e.$$typeof===zi||e.$$typeof===Mi||e.$$typeof===i1||e.$$typeof===l1||e.$$typeof===a1||e.$$typeof===o1)};b.typeOf=Ke;Vd.exports=b;var s1=Vd.exports,Wd=s1,u1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hd={};Hd[Wd.ForwardRef]=u1;Hd[Wd.Memo]=c1;var f1=!0;function Qd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Os=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||f1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Yd=function(t,n,r){Os(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function d1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var p1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},m1=/[A-Z]|^ms/g,h1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Xd=function(t){return t.charCodeAt(1)===45},ic=function(t){return t!=null&&typeof t!="boolean"},Cl=Kh(function(e){return Xd(e)?e:e.replace(m1,"-$&").toLowerCase()}),lc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(h1,function(r,o,i){return pt={name:o,styles:i,next:pt},o})}return p1[t]!==1&&!Xd(t)&&typeof n=="number"&&n!==0?n+"px":n};function Dr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var o=n.styles+";";return o}return v1(e,t,n)}case"function":{if(e!==void 0){var i=pt,a=n(e);return pt=i,Dr(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function v1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Dr(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":ic(a)&&(r+=Cl(i)+":"+lc(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)ic(a[l])&&(r+=Cl(i)+":"+lc(i,a[l])+";");else{var u=Dr(e,t,a);switch(i){case"animation":case"animationName":{r+=Cl(i)+":"+u+";";break}default:r+=i+"{"+u+"}"}}}return r}var ac=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,Ls=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";pt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Dr(r,n,a)):i+=a[0];for(var l=1;l<t.length;l++)i+=Dr(r,n,t[l]),o&&(i+=a[l]);ac.lastIndex=0;for(var u="",s;(s=ac.exec(i))!==null;)u+="-"+s[1];var c=d1(i)+u;return{name:c,styles:i,next:pt}},y1=function(t){return t()},g1=jl.useInsertionEffect?jl.useInsertionEffect:!1,Kd=g1||y1,zs={}.hasOwnProperty,Gd=z.createContext(typeof HTMLElement<"u"?n1({key:"css"}):null);Gd.Provider;var bd=function(t){return z.forwardRef(function(n,r){var o=z.useContext(Gd);return t(n,o,r)})},Zd=z.createContext({}),Ca="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",w1=function(t,n){var r={};for(var o in n)zs.call(n,o)&&(r[o]=n[o]);return r[Ca]=t,r},x1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Os(n,r,o),Kd(function(){return Yd(n,r,o)}),null},S1=bd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ca],i=[r],a="";typeof e.className=="string"?a=Qd(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var l=Ls(i,void 0,z.useContext(Zd));a+=t.key+"-"+l.name;var u={};for(var s in e)zs.call(e,s)&&s!=="css"&&s!==Ca&&(u[s]=e[s]);return u.ref=n,u.className=a,z.createElement(z.Fragment,null,z.createElement(x1,{cache:t,serialized:l,isStringTag:typeof o=="string"}),z.createElement(o,u))}),k1=S1,_1=C.Fragment;function fe(e,t,n){return zs.call(t,"css")?C.jsx(k1,w1(e,t),n):C.jsx(e,t,n)}function Jd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ls(t)}var T=function(){var t=Jd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},E1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))a=e(i);else{a="";for(var l in i)i[l]&&l&&(a&&(a+=" "),a+=l)}break}default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function C1(e,t,n){var r=[],o=Qd(e,r,n);return r.length<2?n:o+t(r)}var P1=function(t){var n=t.cache,r=t.serializedArr;return Kd(function(){for(var o=0;o<r.length;o++)Yd(n,r[o],!1)}),null},Pl=bd(function(e,t){var n=!1,r=[],o=function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];var p=Ls(c,t.registered);return r.push(p),Os(t,p,!1),t.key+"-"+p.name},i=function(){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];return C1(t.registered,o,E1(c))},a={css:o,cx:i,theme:z.useContext(Zd)},l=e.children(a);return n=!0,z.createElement(z.Fragment,null,z.createElement(P1,{cache:t,serializedArr:r}),l)}),j1=Object.defineProperty,N1=(e,t,n)=>t in e?j1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,po=(e,t,n)=>(N1(e,typeof t!="symbol"?t+"":t,n),n),Pa=new Map,mo=new WeakMap,sc=0,T1=void 0;function O1(e){return e?(mo.has(e)||(sc+=1,mo.set(e,sc.toString())),mo.get(e)):"0"}function L1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?O1(e.root):e[t]}`).toString()}function z1(e){const t=L1(e);let n=Pa.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(a=>{a.forEach(l=>{var u;const s=l.isIntersecting&&o.some(c=>l.intersectionRatio>=c);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=s),(u=r.get(l.target))==null||u.forEach(c=>{c(s,l)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Pa.set(t,n)}return n}function qd(e,t,n={},r=T1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const u=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:o,observer:i,elements:a}=z1(n),l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(a.delete(e),i.unobserve(e)),a.size===0&&(i.disconnect(),Pa.delete(o))}}function R1(e){return typeof e.children!="function"}var uc=class extends z.Component{constructor(e){super(e),po(this,"node",null),po(this,"_unobserveCb",null),po(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),po(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),R1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=qd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:m,entry:y}=this.state;return e({inView:m,entry:y,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:a,skip:l,trackVisibility:u,delay:s,initialInView:c,fallbackInView:f,...p}=this.props;return z.createElement(t||"div",{ref:this.handleNode,...p},e)}};function ep({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:a,initialInView:l,fallbackInView:u,onChange:s}={}){var c;const[f,p]=z.useState(null),m=z.useRef(),[y,g]=z.useState({inView:!!l,entry:void 0});m.current=s,z.useEffect(()=>{if(a||!f)return;let v;return v=qd(f,(w,S)=>{g({inView:w,entry:S}),m.current&&m.current(w,S),S.isIntersecting&&i&&v&&(v(),v=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},u),()=>{v&&v()}},[Array.isArray(e)?e.toString():e,f,o,r,i,a,n,u,t]);const x=(c=y.entry)==null?void 0:c.target,h=z.useRef();!f&&x&&!i&&!a&&h.current!==x&&(h.current=x,g({inView:!!l,entry:void 0}));const d=[p,y.inView,y.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}var tp={exports:{}},Z={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Fi=Symbol.for("react.strict_mode"),Ui=Symbol.for("react.profiler"),Vi=Symbol.for("react.provider"),Bi=Symbol.for("react.context"),M1=Symbol.for("react.server_context"),Wi=Symbol.for("react.forward_ref"),Hi=Symbol.for("react.suspense"),Qi=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),$1=Symbol.for("react.offscreen"),np;np=Symbol.for("react.module.reference");function nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Rs:switch(e=e.type,e){case Di:case Ui:case Fi:case Hi:case Qi:return e;default:switch(e=e&&e.$$typeof,e){case M1:case Bi:case Wi:case Xi:case Yi:case Vi:return e;default:return t}}case Ms:return t}}}Z.ContextConsumer=Bi;Z.ContextProvider=Vi;Z.Element=Rs;Z.ForwardRef=Wi;Z.Fragment=Di;Z.Lazy=Xi;Z.Memo=Yi;Z.Portal=Ms;Z.Profiler=Ui;Z.StrictMode=Fi;Z.Suspense=Hi;Z.SuspenseList=Qi;Z.isAsyncMode=function(){return!1};Z.isConcurrentMode=function(){return!1};Z.isContextConsumer=function(e){return nt(e)===Bi};Z.isContextProvider=function(e){return nt(e)===Vi};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rs};Z.isForwardRef=function(e){return nt(e)===Wi};Z.isFragment=function(e){return nt(e)===Di};Z.isLazy=function(e){return nt(e)===Xi};Z.isMemo=function(e){return nt(e)===Yi};Z.isPortal=function(e){return nt(e)===Ms};Z.isProfiler=function(e){return nt(e)===Ui};Z.isStrictMode=function(e){return nt(e)===Fi};Z.isSuspense=function(e){return nt(e)===Hi};Z.isSuspenseList=function(e){return nt(e)===Qi};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Di||e===Ui||e===Fi||e===Hi||e===Qi||e===$1||typeof e=="object"&&e!==null&&(e.$$typeof===Xi||e.$$typeof===Yi||e.$$typeof===Vi||e.$$typeof===Bi||e.$$typeof===Wi||e.$$typeof===np||e.getModuleId!==void 0)};Z.typeOf=nt;tp.exports=Z;var I1=tp.exports;T`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;T`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;T`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;T`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;T`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;T`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;T`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;T`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;T`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;T`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;T`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;T`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const A1=T`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,D1=T`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F1=T`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,U1=T`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,V1=T`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$s=T`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,B1=T`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,W1=T`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,H1=T`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Q1=T`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Y1=T`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,X1=T`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,K1=T`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function G1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=$s,iterationCount:o=1}){return Jd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function b1(e){return e==null}function Z1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function rp(e,t){return n=>n?e():t()}function Fr(e){return rp(e,()=>null)}function ja(e){return Fr(()=>({opacity:0}))(e)}const Is=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:a=$s,triggerOnce:l=!1,className:u,style:s,childClassName:c,childStyle:f,children:p,onVisibilityChange:m}=e,y=z.useMemo(()=>G1({keyframes:a,duration:o}),[o,a]);return b1(p)?null:Z1(p)?fe(q1,{...e,animationStyles:y,children:String(p)}):I1.isFragment(p)?fe(op,{...e,animationStyles:y}):fe(_1,{children:z.Children.map(p,(g,x)=>{if(!z.isValidElement(g))return null;const h=r+(t?x*o*n:0);switch(g.type){case"ol":case"ul":return fe(Pl,{children:({cx:d})=>fe(g.type,{...g.props,className:d(u,g.props.className),style:Object.assign({},s,g.props.style),children:fe(Is,{...e,children:g.props.children})})});case"li":return fe(uc,{threshold:i,triggerOnce:l,onChange:m,children:({inView:d,ref:v})=>fe(Pl,{children:({cx:w})=>fe(g.type,{...g.props,ref:v,className:w(c,g.props.className),css:Fr(()=>y)(d),style:Object.assign({},f,g.props.style,ja(!d),{animationDelay:h+"ms"})})})});default:return fe(uc,{threshold:i,triggerOnce:l,onChange:m,children:({inView:d,ref:v})=>fe("div",{ref:v,className:u,css:Fr(()=>y)(d),style:Object.assign({},s,ja(!d),{animationDelay:h+"ms"}),children:fe(Pl,{children:({cx:w})=>fe(g.type,{...g.props,className:w(c,g.props.className),style:Object.assign({},f,g.props.style)})})})})}})})},J1={display:"inline-block",whiteSpace:"pre"},q1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:a=0,triggerOnce:l=!1,className:u,style:s,children:c,onVisibilityChange:f}=e,{ref:p,inView:m}=ep({triggerOnce:l,threshold:a,onChange:f});return rp(()=>fe("div",{ref:p,className:u,style:Object.assign({},s,J1),children:c.split("").map((y,g)=>fe("span",{css:Fr(()=>t)(m),style:{animationDelay:o+g*i*r+"ms"},children:y},g))}),()=>fe(op,{...e,children:c}))(n)},op=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:a,onVisibilityChange:l}=e,{ref:u,inView:s}=ep({triggerOnce:r,threshold:n,onChange:l});return fe("div",{ref:u,className:o,css:Fr(()=>t)(s),style:Object.assign({},i,ja(!s)),children:a})};T`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;T`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;T`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;T`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;T`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;T`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const ev=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,tv=T`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,nv=T`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,rv=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ov=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,iv=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,lv=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,av=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,sv=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,uv=T`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,cv=T`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,fv=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,dv=T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function pv(e,t,n){switch(n){case"bottom-left":return t?tv:D1;case"bottom-right":return t?nv:F1;case"down":return e?t?ov:V1:t?rv:U1;case"left":return e?t?lv:B1:t?iv:$s;case"right":return e?t?sv:H1:t?av:W1;case"top-left":return t?uv:Q1;case"top-right":return t?cv:Y1;case"up":return e?t?dv:K1:t?fv:X1;default:return t?ev:A1}}const Rn=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=z.useMemo(()=>pv(t,r,n),[t,n,r]);return fe(Is,{keyframes:i,...o})};T`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;T`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;T`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;T`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;T`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;T`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;T`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;T`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;T`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;T`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;T`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const mv=T`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,hv=T`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,vv=T`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,yv=T`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,gv=T`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,wv=T`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,xv=T`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Sv=T`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,kv=T`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,_v=T`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Ev(e,t){switch(t){case"down":return e?xv:hv;case"left":return e?Sv:vv;case"right":return e?kv:yv;case"up":return e?_v:gv;default:return e?wv:mv}}const Cv=e=>{const{direction:t,reverse:n=!1,...r}=e,o=z.useMemo(()=>Ev(n,t),[t,n]);return fe(Is,{keyframes:o,...r})},Pv=()=>C.jsx("section",{className:"inicio",id:"inicio",children:C.jsxs("div",{className:"inicio__content",children:[C.jsx("div",{className:"inicio__content__type",children:C.jsx(Rn,{direction:"down",triggerOnce:!0,children:C.jsx(Ph,{})})}),C.jsx("div",{className:"inicio__content__parag",children:C.jsx(Rn,{delay:4300,triggerOnce:!0,children:C.jsx("p",{children:"Sean bienvenidos todos a un mundo mental, por mí creado y que por hoy los pienso dejar pasar..."})})}),C.jsx("div",{className:"inicio__button",children:C.jsx(Rn,{delay:5500,direction:"up",triggerOnce:!0,children:C.jsx("a",{href:"#proyectos",children:"Proyectos"})})})]})}),jv="https://escondol.github.io/assets/Resume%20Dojanni%20Contreras-BgASnRVZ.pdf",Nv="https://escondol.github.io/assets/certificado_ciber-BG-dm5HK.pdf",Tv="https://escondol.github.io/assets/Crash%20Course%20on%20Python-CsCfYJAR.pdf",Ov="https://escondol.github.io/assets/Introduction%20to%20the%20IoT%20and%20Embedded%20Systems-mvVOGZtB.pdf",Lv="https://escondol.github.io/assets/Interfacing%20with%20the%20Arduino-CM5rPP5e.pdf",zv="https://escondol.github.io/assets/The%20Arduino%20Platform%20and%20C%20Programming-Icb-g7wg.pdf",Rv="https://escondol.github.io/assets/What%20is%20Data%20Science-DoP8Ej2B.pdf",Mv="https://escondol.github.io/assets/Tools%20for%20Data%20Science-BLAb8goy.pdf",$v=()=>C.jsx(C.Fragment,{children:C.jsxs("section",{className:"sobre",id:"sobre",children:[C.jsx("div",{className:"sobre__presentacion",children:C.jsxs(Cv,{children:[C.jsx("h1",{children:"Sobre Mí"}),C.jsx("p",{children:"Aqui encontrarás información acerca de mi, lo que hago y mis habilidades."})]})}),C.jsxs("div",{className:"sobre__content",children:[C.jsx("div",{className:"sobre__content__conoceme",children:C.jsxs(Rn,{direction:"left",children:[C.jsx("h2",{children:"Conóceme!"}),C.jsx("p",{children:"Soy una persona interesada en todo lo relacionado con la electricidad, electronica y automatización. En estos días estoy enfocado en aprender HTML, CSS y JS para poder tener mi propia página web que represente mi portafolio."})]})}),C.jsx("div",{className:"sobre__content__logros",children:C.jsxs(Rn,{direction:"right",children:[C.jsx("h2",{children:"Logros"}),C.jsxs("ul",{children:[C.jsx("li",{children:"Documentos Personales"}),C.jsx("ul",{children:C.jsx("li",{children:C.jsx("a",{href:jv,children:"Curriculum Vitae"})})}),C.jsx("li",{children:"Certificados"}),C.jsxs("ul",{children:[C.jsx("li",{children:C.jsx("a",{href:Nv,children:"Taller Introduccion a la Ciberseguridad"})}),C.jsx("li",{children:C.jsx("a",{href:Tv,children:"Crash Course on Python"})}),C.jsx("li",{children:C.jsx("a",{href:Ov,children:"Introduction to the IoT and Embedded Systems"})}),C.jsx("li",{children:C.jsx("a",{href:Lv,children:"Interfacing with the Arduino"})}),C.jsx("li",{children:C.jsx("a",{href:zv,children:"The Arduino Platform and C Programming"})}),C.jsx("li",{children:C.jsx("a",{href:Rv,children:"What is Data Science?"})}),C.jsx("li",{children:C.jsx("a",{href:Mv,children:"Tools for Data Science"})})]})]})]})}),C.jsx("div",{className:"sobre__content_habilidades",children:C.jsxs(Rn,{direction:"left",children:[C.jsx("h2",{children:"Habilidades"}),C.jsxs("ul",{children:[C.jsx("li",{children:"KiCad"}),C.jsx("li",{children:"EasyEDA"}),C.jsx("li",{children:"Fusion 360"}),C.jsx("li",{children:"AutoCad"}),C.jsx("li",{children:"Github"}),C.jsx("li",{children:"MATLAB"}),C.jsx("li",{children:"C/C++"}),C.jsx("li",{children:"Verilog"}),C.jsx("li",{children:"Python"}),C.jsx("li",{children:"HTML"}),C.jsx("li",{children:"CSS"}),C.jsx("li",{children:"GRAFCET"}),C.jsx("li",{children:"Ladder"}),C.jsx("li",{children:"Controles Eléctricos"})]})]})}),C.jsx("h2",{children:"Contactame"}),C.jsxs("ul",{children:[C.jsxs("li",{children:["Correo: ",C.jsx("a",{href:"mailto:esmerling.contreras@gmail.com?Subject=¿Qué%20necesitas%3F%20Con%20gusto%20te%20ayudaré",children:"esmerling.contreras@gmail.com"})]}),C.jsxs("li",{children:["Linkedin: ",C.jsx("a",{href:"https://www.linkedin.com/in/dojanni-contreras-93b31728a/",children:"Dojanni Contreras"})]}),C.jsxs("li",{children:["Github: ",C.jsx("a",{href:"https://github.com/Escondol",children:"Escondol"})]}),C.jsx("li",{children:"Twitter: "})]})]})]})}),Iv=()=>C.jsx(C.Fragment,{children:C.jsx("section",{id:"proyectos",children:C.jsxs("div",{className:"proyectos__main",children:[C.jsxs("div",{className:"proyectos__introduccion",children:[C.jsx("h1",{children:"Proyectos"}),C.jsx("p",{children:"Aquí encontrarás los proyectos que he realizado desde mi carrera tecnológica hasta proyectos personales."})]}),C.jsxs("div",{children:[C.jsx("p",{children:"Aquí encontrarás los proyectos que he realizado desde mi carrera tecnológica hasta proyectos personales."}),C.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur officiis cumque rem nostrum ipsa, quae maxime. Reprehenderit ex, ea dolores ad facere quae dolorum accusantium ullam numquam rem. Dignissimos, mollitia."}),C.jsx("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quod sapiente ipsam, tenetur praesentium cumque, modi voluptas vero ad eius incidunt quibusdam placeat, molestiae ex soluta et harum officia iste."})]})]})})});function Av(){return C.jsxs(C.Fragment,{children:[C.jsx(_h,{}),C.jsx(Pv,{}),C.jsx($v,{}),C.jsx(Iv,{})]})}ka.createRoot(document.getElementById("root")).render(C.jsx(Sc.StrictMode,{children:C.jsx(mh,{children:C.jsx(Av,{})})}));
