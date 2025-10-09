(function(){"use strict";var Gh={exports:{}},Ea={},Wh={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),b0=Symbol.for("react.portal"),P0=Symbol.for("react.fragment"),L0=Symbol.for("react.strict_mode"),I0=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),U0=Symbol.for("react.forward_ref"),F0=Symbol.for("react.suspense"),O0=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),Xh=Symbol.iterator;function B0(n){return n===null||typeof n!="object"?null:(n=Xh&&n[Xh]||n["@@iterator"],typeof n=="function"?n:null)}var jh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$h=Object.assign,Yh={};function Kr(n,e,t){this.props=n,this.context=e,this.refs=Yh,this.updater=t||jh}Kr.prototype.isReactComponent={},Kr.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")},Kr.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Kh(){}Kh.prototype=Kr.prototype;function Iu(n,e,t){this.props=n,this.context=e,this.refs=Yh,this.updater=t||jh}var Du=Iu.prototype=new Kh;Du.constructor=Iu,$h(Du,Kr.prototype),Du.isPureReactComponent=!0;var qh=Array.isArray,Zh=Object.prototype.hasOwnProperty,Nu={current:null},Jh={key:!0,ref:!0,__self:!0,__source:!0};function Qh(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zh.call(e,i)&&!Jh.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:lo,type:n,key:s,ref:o,props:r,_owner:Nu.current}}function z0(n,e){return{$$typeof:lo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Uu(n){return typeof n=="object"&&n!==null&&n.$$typeof===lo}function H0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ep=/\/+/g;function Fu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?H0(""+n.key):e.toString(36)}function Ta(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case lo:case b0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Fu(o,0):i,qh(r)?(t="",n!=null&&(t=n.replace(ep,"$&/")+"/"),Ta(r,e,t,"",function(u){return u})):r!=null&&(Uu(r)&&(r=z0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ep,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",qh(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Fu(s,a);o+=Ta(s,e,t,l,r)}else if(l=B0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Fu(s,a++),o+=Ta(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(n,e,t){if(n==null)return n;var i=[],r=0;return Ta(n,i,"","",function(s){return e.call(t,s,r++)}),i}function V0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Kt={current:null},Aa={transition:null},G0={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:Nu};function tp(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:wa,forEach:function(n,e,t){wa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return wa(n,function(){e++}),e},toArray:function(n){return wa(n,function(e){return e})||[]},only:function(n){if(!Uu(n))throw Error("React.Children.only expected to receive a single React element child.");return n}},Ve.Component=Kr,Ve.Fragment=P0,Ve.Profiler=I0,Ve.PureComponent=Iu,Ve.StrictMode=L0,Ve.Suspense=F0,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G0,Ve.act=tp,Ve.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=$h({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nu.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Zh.call(e,l)&&!Jh.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:lo,type:n.type,key:r,ref:s,props:i,_owner:o}},Ve.createContext=function(n){return n={$$typeof:N0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:D0,_context:n},n.Consumer=n},Ve.createElement=Qh,Ve.createFactory=function(n){var e=Qh.bind(null,n);return e.type=n,e},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(n){return{$$typeof:U0,render:n}},Ve.isValidElement=Uu,Ve.lazy=function(n){return{$$typeof:k0,_payload:{_status:-1,_result:n},_init:V0}},Ve.memo=function(n,e){return{$$typeof:O0,type:n,compare:e===void 0?null:e}},Ve.startTransition=function(n){var e=Aa.transition;Aa.transition={};try{n()}finally{Aa.transition=e}},Ve.unstable_act=tp,Ve.useCallback=function(n,e){return Kt.current.useCallback(n,e)},Ve.useContext=function(n){return Kt.current.useContext(n)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(n){return Kt.current.useDeferredValue(n)},Ve.useEffect=function(n,e){return Kt.current.useEffect(n,e)},Ve.useId=function(){return Kt.current.useId()},Ve.useImperativeHandle=function(n,e,t){return Kt.current.useImperativeHandle(n,e,t)},Ve.useInsertionEffect=function(n,e){return Kt.current.useInsertionEffect(n,e)},Ve.useLayoutEffect=function(n,e){return Kt.current.useLayoutEffect(n,e)},Ve.useMemo=function(n,e){return Kt.current.useMemo(n,e)},Ve.useReducer=function(n,e,t){return Kt.current.useReducer(n,e,t)},Ve.useRef=function(n){return Kt.current.useRef(n)},Ve.useState=function(n){return Kt.current.useState(n)},Ve.useSyncExternalStore=function(n,e,t){return Kt.current.useSyncExternalStore(n,e,t)},Ve.useTransition=function(){return Kt.current.useTransition()},Ve.version="18.3.1",Wh.exports=Ve;var je=Wh.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=je,X0=Symbol.for("react.element"),j0=Symbol.for("react.fragment"),$0=Object.prototype.hasOwnProperty,Y0=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K0={key:!0,ref:!0,__self:!0,__source:!0};function np(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)$0.call(e,i)&&!K0.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:X0,type:n,key:s,ref:o,props:r,_owner:Y0.current}}Ea.Fragment=j0,Ea.jsx=np,Ea.jsxs=np,Gh.exports=Ea;var Ie=Gh.exports,ip={exports:{}},mn={},rp={exports:{}},sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,$){var q=I.length;I.push($);e:for(;0<q;){var ae=q-1>>>1,Ee=I[ae];if(0<r(Ee,$))I[ae]=$,I[q]=Ee,q=ae;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var $=I[0],q=I.pop();if(q!==$){I[0]=q;e:for(var ae=0,Ee=I.length,tt=Ee>>>1;ae<tt;){var Je=2*(ae+1)-1,Ke=I[Je],X=Je+1,Z=I[X];if(0>r(Ke,q))X<Ee&&0>r(Z,Ke)?(I[ae]=Z,I[X]=q,ae=X):(I[ae]=Ke,I[Je]=q,ae=Je);else if(X<Ee&&0>r(Z,q))I[ae]=Z,I[X]=q,ae=X;else break e}}return $}function r(I,$){var q=I.sortIndex-$.sortIndex;return q!==0?q:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,c=null,d=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=I)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function x(I){if(v=!1,y(I),!g)if(t(l)!==null)g=!0,V(A);else{var $=t(u);$!==null&&ne(x,$.startTime-I)}}function A(I,$){g=!1,v&&(v=!1,h(b),b=-1),p=!0;var q=d;try{for(y($),c=t(l);c!==null&&(!(c.expirationTime>$)||I&&!L());){var ae=c.callback;if(typeof ae=="function"){c.callback=null,d=c.priorityLevel;var Ee=ae(c.expirationTime<=$);$=n.unstable_now(),typeof Ee=="function"?c.callback=Ee:c===t(l)&&i(l),y($)}else i(l);c=t(l)}if(c!==null)var tt=!0;else{var Je=t(u);Je!==null&&ne(x,Je.startTime-$),tt=!1}return tt}finally{c=null,d=q,p=!1}}var w=!1,R=null,b=-1,E=5,S=-1;function L(){return!(n.unstable_now()-S<E)}function k(){if(R!==null){var I=n.unstable_now();S=I;var $=!0;try{$=R(!0,I)}finally{$?H():(w=!1,R=null)}}else w=!1}var H;if(typeof _=="function")H=function(){_(k)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Y=W.port2;W.port1.onmessage=k,H=function(){Y.postMessage(null)}}else H=function(){m(k,0)};function V(I){R=I,w||(w=!0,H())}function ne(I,$){b=m(function(){I(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,V(A))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var q=d;d=$;try{return I()}finally{d=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=d;d=I;try{return $()}finally{d=q}},n.unstable_scheduleCallback=function(I,$,q){var ae=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ae+q:ae):q=ae,I){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=q+Ee,I={id:f++,callback:$,priorityLevel:I,startTime:q,expirationTime:Ee,sortIndex:-1},q>ae?(I.sortIndex=q,e(u,I),t(l)===null&&I===t(u)&&(v?(h(b),b=-1):v=!0,ne(x,q-ae))):(I.sortIndex=Ee,e(l,I),g||p||(g=!0,V(A))),I},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(I){var $=d;return function(){var q=d;d=$;try{return I.apply(this,arguments)}finally{d=q}}}})(sp),rp.exports=sp;var q0=rp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=je,gn=q0;function Q(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var op=new Set,uo={};function vr(n,e){qr(n,e),qr(n+"Capture",e)}function qr(n,e){for(uo[n]=e,n=0;n<e.length;n++)op.add(e[n])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=Object.prototype.hasOwnProperty,J0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ap={},lp={};function Q0(n){return Ou.call(lp,n)?!0:Ou.call(ap,n)?!1:J0.test(n)?lp[n]=!0:(ap[n]=!0,!1)}function ey(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ty(n,e,t,i){if(e===null||typeof e>"u"||ey(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){kt[n]=new qt(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];kt[e]=new qt(e,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){kt[n]=new qt(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){kt[n]=new qt(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){kt[n]=new qt(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){kt[n]=new qt(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){kt[n]=new qt(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){kt[n]=new qt(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){kt[n]=new qt(n,5,!1,n.toLowerCase(),null,!1,!1)});var ku=/[\-:]([a-z])/g;function Bu(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ku,Bu);kt[e]=new qt(e,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ku,Bu);kt[e]=new qt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ku,Bu);kt[e]=new qt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){kt[n]=new qt(n,1,!1,n.toLowerCase(),null,!1,!1)}),kt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){kt[n]=new qt(n,1,!1,n.toLowerCase(),null,!0,!0)});function zu(n,e,t,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ty(e,t,r,i)&&(t=null),i||r===null?Q0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var gi=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),Hu=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),up=Symbol.for("react.provider"),cp=Symbol.for("react.context"),Gu=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),fp=Symbol.for("react.offscreen"),dp=Symbol.iterator;function co(n){return n===null||typeof n!="object"?null:(n=dp&&n[dp]||n["@@iterator"],typeof n=="function"?n:null)}var _t=Object.assign,$u;function fo(n){if($u===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+n}var Yu=!1;function Ku(n,e){if(!n||Yu)return"";Yu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?fo(n):""}function ny(n){switch(n.tag){case 5:return fo(n.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return n=Ku(n.type,!1),n;case 11:return n=Ku(n.type.render,!1),n;case 1:return n=Ku(n.type,!0),n;default:return""}}function qu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Jr:return"Fragment";case Zr:return"Portal";case Vu:return"Profiler";case Hu:return"StrictMode";case Wu:return"Suspense";case Xu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case cp:return(n.displayName||"Context")+".Consumer";case up:return(n._context.displayName||"Context")+".Provider";case Gu:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ju:return e=n.displayName||null,e!==null?e:qu(n.type)||"Memo";case ki:e=n._payload,n=n._init;try{return qu(n(e))}catch{}}return null}function iy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===Hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function hp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ry(n){var e=hp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ca(n){n._valueTracker||(n._valueTracker=ry(n))}function pp(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=hp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ba(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Zu(n,e){var t=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function mp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Bi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gp(n,e){e=e.checked,e!=null&&zu(n,"checked",e,!1)}function Ju(n,e){gp(n,e);var t=Bi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Qu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Qu(n,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function _p(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Qu(n,e,t){(e!=="number"||ba(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ho=Array.isArray;function Qr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Bi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ec(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function vp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Q(92));if(ho(t)){if(1<t.length)throw Error(Q(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Bi(t)}}function yp(n,e){var t=Bi(e.value),i=Bi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function xp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Sp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Sp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pa,Mp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Pa=Pa||document.createElement("div"),Pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function po(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sy=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(n){sy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),mo[e]=mo[n]})});function Ep(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||mo.hasOwnProperty(n)&&mo[n]?(""+e).trim():e+"px"}function Tp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ep(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var oy=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(n,e){if(e){if(oy[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function ic(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rc=null;function sc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var oc=null,es=null,ts=null;function wp(n){if(n=Oo(n)){if(typeof oc!="function")throw Error(Q(280));var e=n.stateNode;e&&(e=Qa(e),oc(n.stateNode,n.type,e))}}function Ap(n){es?ts?ts.push(n):ts=[n]:es=n}function Rp(){if(es){var n=es,e=ts;if(ts=es=null,wp(n),e)for(n=0;n<e.length;n++)wp(e[n])}}function Cp(n,e){return n(e)}function bp(){}var ac=!1;function Pp(n,e,t){if(ac)return n(e,t);ac=!0;try{return Cp(n,e,t)}finally{ac=!1,(es!==null||ts!==null)&&(bp(),Rp())}}function go(n,e){var t=n.stateNode;if(t===null)return null;var i=Qa(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Q(231,e,typeof t));return t}var lc=!1;if(mi)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){lc=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{lc=!1}function ay(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var vo=!1,La=null,Ia=!1,uc=null,ly={onError:function(n){vo=!0,La=n}};function uy(n,e,t,i,r,s,o,a,l){vo=!1,La=null,ay.apply(ly,arguments)}function cy(n,e,t,i,r,s,o,a,l){if(uy.apply(this,arguments),vo){if(vo){var u=La;vo=!1,La=null}else throw Error(Q(198));Ia||(Ia=!0,uc=u)}}function yr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Lp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Ip(n){if(yr(n)!==n)throw Error(Q(188))}function fy(n){var e=n.alternate;if(!e){if(e=yr(n),e===null)throw Error(Q(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Ip(r),n;if(s===i)return Ip(r),e;s=s.sibling}throw Error(Q(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(t.alternate!==i)throw Error(Q(190))}if(t.tag!==3)throw Error(Q(188));return t.stateNode.current===t?n:e}function Dp(n){return n=fy(n),n!==null?Np(n):null}function Np(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Np(n);if(e!==null)return e;n=n.sibling}return null}var Up=gn.unstable_scheduleCallback,Fp=gn.unstable_cancelCallback,dy=gn.unstable_shouldYield,hy=gn.unstable_requestPaint,wt=gn.unstable_now,py=gn.unstable_getCurrentPriorityLevel,cc=gn.unstable_ImmediatePriority,Op=gn.unstable_UserBlockingPriority,Da=gn.unstable_NormalPriority,my=gn.unstable_LowPriority,kp=gn.unstable_IdlePriority,Na=null,Jn=null;function gy(n){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Na,n,void 0,(n.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:yy,_y=Math.log,vy=Math.LN2;function yy(n){return n>>>=0,n===0?32:31-(_y(n)/vy|0)|0}var Ua=64,Fa=4194304;function yo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Oa(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=yo(a):(s&=o,s!==0&&(i=yo(s)))}else o=t&~r,o!==0?i=yo(o):s!==0&&(i=yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-On(e),r=1<<t,i|=n[t],e&=~r;return i}function xy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=xy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function fc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bp(){var n=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),n}function dc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function xo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-On(e),n[e]=t}function My(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-On(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function hc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-On(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var it=0;function zp(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Hp,pc,Vp,Gp,Wp,mc=!1,ka=[],zi=null,Hi=null,Vi=null,So=new Map,Mo=new Map,Gi=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(n,e){switch(n){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Eo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oo(e),e!==null&&pc(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Ty(n,e,t,i,r){switch(e){case"focusin":return zi=Eo(zi,n,e,t,i,r),!0;case"dragenter":return Hi=Eo(Hi,n,e,t,i,r),!0;case"mouseover":return Vi=Eo(Vi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return So.set(s,Eo(So.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Mo.set(s,Eo(Mo.get(s)||null,n,e,t,i,r)),!0}return!1}function jp(n){var e=xr(n.target);if(e!==null){var t=yr(e);if(t!==null){if(e=t.tag,e===13){if(e=Lp(t),e!==null){n.blockedOn=e,Wp(n.priority,function(){Vp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ba(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=_c(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);rc=i,t.target.dispatchEvent(i),rc=null}else return e=Oo(t),e!==null&&pc(e),n.blockedOn=t,!1;e.shift()}return!0}function $p(n,e,t){Ba(n)&&t.delete(e)}function wy(){mc=!1,zi!==null&&Ba(zi)&&(zi=null),Hi!==null&&Ba(Hi)&&(Hi=null),Vi!==null&&Ba(Vi)&&(Vi=null),So.forEach($p),Mo.forEach($p)}function To(n,e){n.blockedOn===e&&(n.blockedOn=null,mc||(mc=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,wy)))}function wo(n){function e(r){return To(r,n)}if(0<ka.length){To(ka[0],n);for(var t=1;t<ka.length;t++){var i=ka[t];i.blockedOn===n&&(i.blockedOn=null)}}for(zi!==null&&To(zi,n),Hi!==null&&To(Hi,n),Vi!==null&&To(Vi,n),So.forEach(e),Mo.forEach(e),t=0;t<Gi.length;t++)i=Gi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Gi.length&&(t=Gi[0],t.blockedOn===null);)jp(t),t.blockedOn===null&&Gi.shift()}var ns=gi.ReactCurrentBatchConfig,za=!0;function Ay(n,e,t,i){var r=it,s=ns.transition;ns.transition=null;try{it=1,gc(n,e,t,i)}finally{it=r,ns.transition=s}}function Ry(n,e,t,i){var r=it,s=ns.transition;ns.transition=null;try{it=4,gc(n,e,t,i)}finally{it=r,ns.transition=s}}function gc(n,e,t,i){if(za){var r=_c(n,e,t,i);if(r===null)Nc(n,e,i,Ha,t),Xp(n,i);else if(Ty(r,n,e,t,i))i.stopPropagation();else if(Xp(n,i),e&4&&-1<Ey.indexOf(n)){for(;r!==null;){var s=Oo(r);if(s!==null&&Hp(s),s=_c(n,e,t,i),s===null&&Nc(n,e,i,Ha,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(n,e,i,null,t)}}var Ha=null;function _c(n,e,t,i){if(Ha=null,n=sc(i),n=xr(n),n!==null)if(e=yr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Lp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ha=n,null}function Yp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(py()){case cc:return 1;case Op:return 4;case Da:case my:return 16;case kp:return 536870912;default:return 16}default:return 16}}var Wi=null,vc=null,Va=null;function Kp(){if(Va)return Va;var n,e=vc,t=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Va=r.slice(n,1<i?1-i:void 0)}function Ga(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Wa(){return!0}function qp(){return!1}function _n(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:qp,this.isPropagationStopped=qp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=_n(is),Ao=_t({},is,{view:0,detail:0}),Cy=_n(Ao),xc,Sc,Ro,Xa=_t({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ro&&(Ro&&n.type==="mousemove"?(xc=n.screenX-Ro.screenX,Sc=n.screenY-Ro.screenY):Sc=xc=0,Ro=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),Zp=_n(Xa),by=_t({},Xa,{dataTransfer:0}),Py=_n(by),Ly=_t({},Ao,{relatedTarget:0}),Mc=_n(Ly),Iy=_t({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Dy=_n(Iy),Ny=_t({},is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Uy=_n(Ny),Fy=_t({},is,{data:0}),Jp=_n(Fy),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=By[n])?!!e[n]:!1}function Ec(){return zy}var Hy=_t({},Ao,{key:function(n){if(n.key){var e=Oy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ga(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ky[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(n){return n.type==="keypress"?Ga(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ga(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vy=_n(Hy),Gy=_t({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=_n(Gy),Wy=_t({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),Xy=_n(Wy),jy=_t({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),$y=_n(jy),Yy=_t({},Xa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ky=_n(Yy),qy=[9,13,27,32],Tc=mi&&"CompositionEvent"in window,Co=null;mi&&"documentMode"in document&&(Co=document.documentMode);var Zy=mi&&"TextEvent"in window&&!Co,em=mi&&(!Tc||Co&&8<Co&&11>=Co),tm=" ",nm=!1;function im(n,e){switch(n){case"keyup":return qy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var rs=!1;function Jy(n,e){switch(n){case"compositionend":return rm(e);case"keypress":return e.which!==32?null:(nm=!0,tm);case"textInput":return n=e.data,n===tm&&nm?null:n;default:return null}}function Qy(n,e){if(rs)return n==="compositionend"||!Tc&&im(n,e)?(n=Kp(),Va=vc=Wi=null,rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return em&&e.locale!=="ko"?null:e.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!ex[n.type]:e==="textarea"}function om(n,e,t,i){Ap(i),e=qa(e,"onChange"),0<e.length&&(t=new yc("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var bo=null,Po=null;function tx(n){Tm(n,0)}function ja(n){var e=us(n);if(pp(e))return n}function nx(n,e){if(n==="change")return e}var am=!1;if(mi){var wc;if(mi){var Ac="oninput"in document;if(!Ac){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Ac=typeof lm.oninput=="function"}wc=Ac}else wc=!1;am=wc&&(!document.documentMode||9<document.documentMode)}function um(){bo&&(bo.detachEvent("onpropertychange",cm),Po=bo=null)}function cm(n){if(n.propertyName==="value"&&ja(Po)){var e=[];om(e,Po,n,sc(n)),Pp(tx,e)}}function ix(n,e,t){n==="focusin"?(um(),bo=e,Po=t,bo.attachEvent("onpropertychange",cm)):n==="focusout"&&um()}function rx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ja(Po)}function sx(n,e){if(n==="click")return ja(e)}function ox(n,e){if(n==="input"||n==="change")return ja(e)}function ax(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var kn=typeof Object.is=="function"?Object.is:ax;function Lo(n,e){if(kn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ou.call(e,r)||!kn(n[r],e[r]))return!1}return!0}function fm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function dm(n,e){var t=fm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fm(t)}}function hm(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?hm(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function pm(){for(var n=window,e=ba();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ba(n.document)}return e}function Rc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function lx(n){var e=pm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&hm(t.ownerDocument.documentElement,t)){if(i!==null&&Rc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=dm(t,s);var o=dm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ux=mi&&"documentMode"in document&&11>=document.documentMode,ss=null,Cc=null,Io=null,bc=!1;function mm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bc||ss==null||ss!==ba(i)||(i=ss,"selectionStart"in i&&Rc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&Lo(Io,i)||(Io=i,i=qa(Cc,"onSelect"),0<i.length&&(e=new yc("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ss)))}function $a(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var os={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},Pc={},gm={};mi&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Ya(n){if(Pc[n])return Pc[n];if(!os[n])return n;var e=os[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in gm)return Pc[n]=e[t];return n}var _m=Ya("animationend"),vm=Ya("animationiteration"),ym=Ya("animationstart"),xm=Ya("transitionend"),Sm=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(n,e){Sm.set(n,e),vr(e,[n])}for(var Lc=0;Lc<Mm.length;Lc++){var Ic=Mm[Lc],cx=Ic.toLowerCase(),fx=Ic[0].toUpperCase()+Ic.slice(1);Xi(cx,"on"+fx)}Xi(_m,"onAnimationEnd"),Xi(vm,"onAnimationIteration"),Xi(ym,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(xm,"onTransitionEnd"),qr("onMouseEnter",["mouseout","mouseover"]),qr("onMouseLeave",["mouseout","mouseover"]),qr("onPointerEnter",["pointerout","pointerover"]),qr("onPointerLeave",["pointerout","pointerover"]),vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vr("onBeforeInput",["compositionend","keypress","textInput","paste"]),vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Em(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,cy(i,e,void 0,n),n.currentTarget=null}function Tm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Em(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Em(r,a,u),s=l}}}if(Ia)throw n=uc,Ia=!1,uc=null,n}function ft(n,e){var t=e[zc];t===void 0&&(t=e[zc]=new Set);var i=n+"__bubble";t.has(i)||(wm(e,n,2,!1),t.add(i))}function Dc(n,e,t){var i=0;e&&(i|=4),wm(t,n,i,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function No(n){if(!n[Ka]){n[Ka]=!0,op.forEach(function(t){t!=="selectionchange"&&(dx.has(t)||Dc(t,!1,n),Dc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,Dc("selectionchange",!1,e))}}function wm(n,e,t,i){switch(Yp(e)){case 1:var r=Ay;break;case 4:r=Ry;break;default:r=gc}t=r.bind(null,e,t,n),r=void 0,!lc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Nc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Pp(function(){var u=s,f=sc(t),c=[];e:{var d=Sm.get(n);if(d!==void 0){var p=yc,g=n;switch(n){case"keypress":if(Ga(t)===0)break e;case"keydown":case"keyup":p=Vy;break;case"focusin":g="focus",p=Mc;break;case"focusout":g="blur",p=Mc;break;case"beforeblur":case"afterblur":p=Mc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Xy;break;case _m:case vm:case ym:p=Dy;break;case xm:p=$y;break;case"scroll":p=Cy;break;case"wheel":p=Ky;break;case"copy":case"cut":case"paste":p=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qp}var v=(e&4)!==0,m=!v&&n==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var _=u,y;_!==null;){y=_;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=go(_,h),x!=null&&v.push(Uo(_,x,y)))),m)break;_=_.return}0<v.length&&(d=new p(d,g,null,t,f),c.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==rc&&(g=t.relatedTarget||t.fromElement)&&(xr(g)||g[_i]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?xr(g):null,g!==null&&(m=yr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=Zp,x="onMouseLeave",h="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(v=Qp,x="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?d:us(p),y=g==null?d:us(g),d=new v(x,_+"leave",p,t,f),d.target=m,d.relatedTarget=y,x=null,xr(f)===u&&(v=new v(h,_+"enter",g,t,f),v.target=y,v.relatedTarget=m,x=v),m=x,p&&g)t:{for(v=p,h=g,_=0,y=v;y;y=as(y))_++;for(y=0,x=h;x;x=as(x))y++;for(;0<_-y;)v=as(v),_--;for(;0<y-_;)h=as(h),y--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=as(v),h=as(h)}v=null}else v=null;p!==null&&Am(c,d,p,v,!1),g!==null&&m!==null&&Am(c,m,g,v,!0)}}e:{if(d=u?us(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=nx;else if(sm(d))if(am)A=ox;else{A=rx;var w=ix}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=sx);if(A&&(A=A(n,u))){om(c,A,t,f);break e}w&&w(n,d,u),n==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Qu(d,"number",d.value)}switch(w=u?us(u):window,n){case"focusin":(sm(w)||w.contentEditable==="true")&&(ss=w,Cc=u,Io=null);break;case"focusout":Io=Cc=ss=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,mm(c,t,f);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":mm(c,t,f)}var R;if(Tc)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else rs?im(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(em&&t.locale!=="ko"&&(rs||b!=="onCompositionStart"?b==="onCompositionEnd"&&rs&&(R=Kp()):(Wi=f,vc="value"in Wi?Wi.value:Wi.textContent,rs=!0)),w=qa(u,b),0<w.length&&(b=new Jp(b,n,null,t,f),c.push({event:b,listeners:w}),R?b.data=R:(R=rm(t),R!==null&&(b.data=R)))),(R=Zy?Jy(n,t):Qy(n,t))&&(u=qa(u,"onBeforeInput"),0<u.length&&(f=new Jp("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=R))}Tm(c,e)})}function Uo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function qa(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=go(n,t),s!=null&&i.unshift(Uo(n,s,r)),s=go(n,e),s!=null&&i.push(Uo(n,s,r))),n=n.return}return i}function as(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Am(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=go(t,s),l!=null&&o.unshift(Uo(t,l,a))):r||(l=go(t,s),l!=null&&o.push(Uo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var hx=/\r\n?/g,px=/\u0000|\uFFFD/g;function Rm(n){return(typeof n=="string"?n:""+n).replace(hx,`
`).replace(px,"")}function Za(n,e,t){if(e=Rm(e),Rm(n)!==e&&t)throw Error(Q(425))}function Ja(){}var Uc=null,Fc=null;function Oc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(n){return Cm.resolve(null).then(n).catch(_x)}:kc;function _x(n){setTimeout(function(){throw n})}function Bc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),wo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);wo(e)}function ji(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function bm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ls=Math.random().toString(36).slice(2),Qn="__reactFiber$"+ls,Fo="__reactProps$"+ls,_i="__reactContainer$"+ls,zc="__reactEvents$"+ls,vx="__reactListeners$"+ls,yx="__reactHandles$"+ls;function xr(n){var e=n[Qn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[_i]||t[Qn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=bm(n);n!==null;){if(t=n[Qn])return t;n=bm(n)}return e}n=t,t=n.parentNode}return null}function Oo(n){return n=n[Qn]||n[_i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Q(33))}function Qa(n){return n[Fo]||null}var Hc=[],cs=-1;function $i(n){return{current:n}}function dt(n){0>cs||(n.current=Hc[cs],Hc[cs]=null,cs--)}function ut(n,e){cs++,Hc[cs]=n.current,n.current=e}var Yi={},Vt=$i(Yi),an=$i(!1),Sr=Yi;function fs(n,e){var t=n.type.contextTypes;if(!t)return Yi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ln(n){return n=n.childContextTypes,n!=null}function el(){dt(an),dt(Vt)}function Pm(n,e,t){if(Vt.current!==Yi)throw Error(Q(168));ut(Vt,e),ut(an,t)}function Lm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,iy(n)||"Unknown",r));return _t({},t,i)}function tl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yi,Sr=Vt.current,ut(Vt,n),ut(an,an.current),!0}function Im(n,e,t){var i=n.stateNode;if(!i)throw Error(Q(169));t?(n=Lm(n,e,Sr),i.__reactInternalMemoizedMergedChildContext=n,dt(an),dt(Vt),ut(Vt,n)):dt(an),ut(an,t)}var vi=null,nl=!1,Vc=!1;function Dm(n){vi===null?vi=[n]:vi.push(n)}function xx(n){nl=!0,Dm(n)}function Ki(){if(!Vc&&vi!==null){Vc=!0;var n=0,e=it;try{var t=vi;for(it=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}vi=null,nl=!1}catch(r){throw vi!==null&&(vi=vi.slice(n+1)),Up(cc,Ki),r}finally{it=e,Vc=!1}}return null}var ds=[],hs=0,il=null,rl=0,An=[],Rn=0,Mr=null,yi=1,xi="";function Er(n,e){ds[hs++]=rl,ds[hs++]=il,il=n,rl=e}function Nm(n,e,t){An[Rn++]=yi,An[Rn++]=xi,An[Rn++]=Mr,Mr=n;var i=yi;n=xi;var r=32-On(i)-1;i&=~(1<<r),t+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-On(e)+r|t<<r|i,xi=s+n}else yi=1<<s|t<<r|i,xi=n}function Gc(n){n.return!==null&&(Er(n,1),Nm(n,1,0))}function Wc(n){for(;n===il;)il=ds[--hs],ds[hs]=null,rl=ds[--hs],ds[hs]=null;for(;n===Mr;)Mr=An[--Rn],An[Rn]=null,xi=An[--Rn],An[Rn]=null,yi=An[--Rn],An[Rn]=null}var vn=null,yn=null,pt=!1,Bn=null;function Um(n,e){var t=Ln(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Fm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,vn=n,yn=ji(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,vn=n,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Mr!==null?{id:yi,overflow:xi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ln(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,vn=n,yn=null,!0):!1;default:return!1}}function Xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if(pt){var e=yn;if(e){var t=e;if(!Fm(n,e)){if(Xc(n))throw Error(Q(418));e=ji(t.nextSibling);var i=vn;e&&Fm(n,e)?Um(i,t):(n.flags=n.flags&-4097|2,pt=!1,vn=n)}}else{if(Xc(n))throw Error(Q(418));n.flags=n.flags&-4097|2,pt=!1,vn=n}}}function Om(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vn=n}function sl(n){if(n!==vn)return!1;if(!pt)return Om(n),pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Oc(n.type,n.memoizedProps)),e&&(e=yn)){if(Xc(n))throw km(),Error(Q(418));for(;e;)Um(n,e),e=ji(e.nextSibling)}if(Om(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Q(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yn=ji(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yn=null}}else yn=vn?ji(n.stateNode.nextSibling):null;return!0}function km(){for(var n=yn;n;)n=ji(n.nextSibling)}function ps(){yn=vn=null,pt=!1}function $c(n){Bn===null?Bn=[n]:Bn.push(n)}var Sx=gi.ReactCurrentBatchConfig;function ko(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Q(309));var i=t.stateNode}if(!i)throw Error(Q(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Q(284));if(!t._owner)throw Error(Q(290,n))}return n}function ol(n,e){throw n=Object.prototype.toString.call(e),Error(Q(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Bm(n){var e=n._init;return e(n._payload)}function zm(n){function e(h,_){if(n){var y=h.deletions;y===null?(h.deletions=[_],h.flags|=16):y.push(_)}}function t(h,_){if(!n)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=ir(h,_),h.index=0,h.sibling=null,h}function s(h,_,y){return h.index=y,n?(y=h.alternate,y!==null?(y=y.index,y<_?(h.flags|=2,_):y):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,_,y,x){return _===null||_.tag!==6?(_=Bf(y,h.mode,x),_.return=h,_):(_=r(_,y),_.return=h,_)}function l(h,_,y,x){var A=y.type;return A===Jr?f(h,_,y.props.children,x,y.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ki&&Bm(A)===_.type)?(x=r(_,y.props),x.ref=ko(h,_,y),x.return=h,x):(x=Pl(y.type,y.key,y.props,null,h.mode,x),x.ref=ko(h,_,y),x.return=h,x)}function u(h,_,y,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=zf(y,h.mode,x),_.return=h,_):(_=r(_,y.children||[]),_.return=h,_)}function f(h,_,y,x,A){return _===null||_.tag!==7?(_=Lr(y,h.mode,x,A),_.return=h,_):(_=r(_,y),_.return=h,_)}function c(h,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Bf(""+_,h.mode,y),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:return y=Pl(_.type,_.key,_.props,null,h.mode,y),y.ref=ko(h,null,_),y.return=h,y;case Zr:return _=zf(_,h.mode,y),_.return=h,_;case ki:var x=_._init;return c(h,x(_._payload),y)}if(ho(_)||co(_))return _=Lr(_,h.mode,y,null),_.return=h,_;ol(h,_)}return null}function d(h,_,y,x){var A=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:a(h,_,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ra:return y.key===A?l(h,_,y,x):null;case Zr:return y.key===A?u(h,_,y,x):null;case ki:return A=y._init,d(h,_,A(y._payload),x)}if(ho(y)||co(y))return A!==null?null:f(h,_,y,x,null);ol(h,y)}return null}function p(h,_,y,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(_,h,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ra:return h=h.get(x.key===null?y:x.key)||null,l(_,h,x,A);case Zr:return h=h.get(x.key===null?y:x.key)||null,u(_,h,x,A);case ki:var w=x._init;return p(h,_,y,w(x._payload),A)}if(ho(x)||co(x))return h=h.get(y)||null,f(_,h,x,A,null);ol(_,x)}return null}function g(h,_,y,x){for(var A=null,w=null,R=_,b=_=0,E=null;R!==null&&b<y.length;b++){R.index>b?(E=R,R=null):E=R.sibling;var S=d(h,R,y[b],x);if(S===null){R===null&&(R=E);break}n&&R&&S.alternate===null&&e(h,R),_=s(S,_,b),w===null?A=S:w.sibling=S,w=S,R=E}if(b===y.length)return t(h,R),pt&&Er(h,b),A;if(R===null){for(;b<y.length;b++)R=c(h,y[b],x),R!==null&&(_=s(R,_,b),w===null?A=R:w.sibling=R,w=R);return pt&&Er(h,b),A}for(R=i(h,R);b<y.length;b++)E=p(R,h,b,y[b],x),E!==null&&(n&&E.alternate!==null&&R.delete(E.key===null?b:E.key),_=s(E,_,b),w===null?A=E:w.sibling=E,w=E);return n&&R.forEach(function(L){return e(h,L)}),pt&&Er(h,b),A}function v(h,_,y,x){var A=co(y);if(typeof A!="function")throw Error(Q(150));if(y=A.call(y),y==null)throw Error(Q(151));for(var w=A=null,R=_,b=_=0,E=null,S=y.next();R!==null&&!S.done;b++,S=y.next()){R.index>b?(E=R,R=null):E=R.sibling;var L=d(h,R,S.value,x);if(L===null){R===null&&(R=E);break}n&&R&&L.alternate===null&&e(h,R),_=s(L,_,b),w===null?A=L:w.sibling=L,w=L,R=E}if(S.done)return t(h,R),pt&&Er(h,b),A;if(R===null){for(;!S.done;b++,S=y.next())S=c(h,S.value,x),S!==null&&(_=s(S,_,b),w===null?A=S:w.sibling=S,w=S);return pt&&Er(h,b),A}for(R=i(h,R);!S.done;b++,S=y.next())S=p(R,h,b,S.value,x),S!==null&&(n&&S.alternate!==null&&R.delete(S.key===null?b:S.key),_=s(S,_,b),w===null?A=S:w.sibling=S,w=S);return n&&R.forEach(function(k){return e(h,k)}),pt&&Er(h,b),A}function m(h,_,y,x){if(typeof y=="object"&&y!==null&&y.type===Jr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ra:e:{for(var A=y.key,w=_;w!==null;){if(w.key===A){if(A=y.type,A===Jr){if(w.tag===7){t(h,w.sibling),_=r(w,y.props.children),_.return=h,h=_;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ki&&Bm(A)===w.type){t(h,w.sibling),_=r(w,y.props),_.ref=ko(h,w,y),_.return=h,h=_;break e}t(h,w);break}else e(h,w);w=w.sibling}y.type===Jr?(_=Lr(y.props.children,h.mode,x,y.key),_.return=h,h=_):(x=Pl(y.type,y.key,y.props,null,h.mode,x),x.ref=ko(h,_,y),x.return=h,h=x)}return o(h);case Zr:e:{for(w=y.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){t(h,_.sibling),_=r(_,y.children||[]),_.return=h,h=_;break e}else{t(h,_);break}else e(h,_);_=_.sibling}_=zf(y,h.mode,x),_.return=h,h=_}return o(h);case ki:return w=y._init,m(h,_,w(y._payload),x)}if(ho(y))return g(h,_,y,x);if(co(y))return v(h,_,y,x);ol(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(t(h,_.sibling),_=r(_,y),_.return=h,h=_):(t(h,_),_=Bf(y,h.mode,x),_.return=h,h=_),o(h)):t(h,_)}return m}var ms=zm(!0),Hm=zm(!1),al=$i(null),ll=null,gs=null,Yc=null;function Kc(){Yc=gs=ll=null}function qc(n){var e=al.current;dt(al),n._currentValue=e}function Zc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function _s(n,e){ll=n,Yc=gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(un=!0),n.firstContext=null)}function Cn(n){var e=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:e,next:null},gs===null){if(ll===null)throw Error(Q(308));gs=n,ll.dependencies={lanes:0,firstContext:n}}else gs=gs.next=n;return e}var Tr=null;function Jc(n){Tr===null?Tr=[n]:Tr.push(n)}function Vm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Jc(e)):(t.next=r.next,r.next=t),e.interleaved=t,Si(n,i)}function Si(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var qi=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Mi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(n,t)}return r=i.interleaved,r===null?(e.next=e,Jc(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(n,t)}function ul(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,hc(n,t)}}function Wm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function cl(n,e,t,i){var r=n.updateQueue;qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=n.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,v=a;switch(d=e,p=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){c=g.call(p,c,d);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,c,d):g,d==null)break e;c=_t({},c,d);break e;case 2:qi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=c):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=o,n.lanes=o,n.memoizedState=c}}function Xm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var Bo={},ei=$i(Bo),zo=$i(Bo),Ho=$i(Bo);function wr(n){if(n===Bo)throw Error(Q(174));return n}function ef(n,e){switch(ut(Ho,e),ut(zo,n),ut(ei,Bo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=tc(e,n)}dt(ei),ut(ei,e)}function vs(){dt(ei),dt(zo),dt(Ho)}function jm(n){wr(Ho.current);var e=wr(ei.current),t=tc(e,n.type);e!==t&&(ut(zo,n),ut(ei,t))}function tf(n){zo.current===n&&(dt(ei),dt(zo))}var vt=$i(0);function fl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nf=[];function rf(){for(var n=0;n<nf.length;n++)nf[n]._workInProgressVersionPrimary=null;nf.length=0}var dl=gi.ReactCurrentDispatcher,sf=gi.ReactCurrentBatchConfig,Ar=0,yt=null,bt=null,Dt=null,hl=!1,Vo=!1,Go=0,Mx=0;function Gt(){throw Error(Q(321))}function of(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!kn(n[t],e[t]))return!1;return!0}function af(n,e,t,i,r,s){if(Ar=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=n===null||n.memoizedState===null?Ax:Rx,n=t(i,r),Vo){s=0;do{if(Vo=!1,Go=0,25<=s)throw Error(Q(301));s+=1,Dt=bt=null,e.updateQueue=null,dl.current=Cx,n=t(i,r)}while(Vo)}if(dl.current=gl,e=bt!==null&&bt.next!==null,Ar=0,Dt=bt=yt=null,hl=!1,e)throw Error(Q(300));return n}function lf(){var n=Go!==0;return Go=0,n}function ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?yt.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function bn(){if(bt===null){var n=yt.alternate;n=n!==null?n.memoizedState:null}else n=bt.next;var e=Dt===null?yt.memoizedState:Dt.next;if(e!==null)Dt=e,bt=n;else{if(n===null)throw Error(Q(310));bt=n,n={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Dt===null?yt.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}function Wo(n,e){return typeof e=="function"?e(n):e}function uf(n){var e=bn(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=bt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Ar&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=i):l=l.next=c,yt.lanes|=f,Rr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,yt.lanes|=s,Rr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function cf(n){var e=bn(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function $m(){}function Ym(n,e){var t=yt,i=bn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,ff(Zm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(t.flags|=2048,Xo(9,qm.bind(null,t,i,r,e),void 0,null),Nt===null)throw Error(Q(349));Ar&30||Km(t,e,r)}return r}function Km(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function qm(n,e,t,i){e.value=t,e.getSnapshot=i,Jm(e)&&Qm(n)}function Zm(n,e,t){return t(function(){Jm(e)&&Qm(n)})}function Jm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!kn(n,t)}catch{return!0}}function Qm(n){var e=Si(n,1);e!==null&&Gn(e,n,1,-1)}function eg(n){var e=ti();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},e.queue=n,n=n.dispatch=wx.bind(null,yt,n),[e.memoizedState,n]}function Xo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function tg(){return bn().memoizedState}function pl(n,e,t,i){var r=ti();yt.flags|=n,r.memoizedState=Xo(1|e,t,void 0,i===void 0?null:i)}function ml(n,e,t,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&of(i,o.deps)){r.memoizedState=Xo(e,t,s,i);return}}yt.flags|=n,r.memoizedState=Xo(1|e,t,s,i)}function ng(n,e){return pl(8390656,8,n,e)}function ff(n,e){return ml(2048,8,n,e)}function ig(n,e){return ml(4,2,n,e)}function rg(n,e){return ml(4,4,n,e)}function sg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function og(n,e,t){return t=t!=null?t.concat([n]):null,ml(4,4,sg.bind(null,e,n),t)}function df(){}function ag(n,e){var t=bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function lg(n,e){var t=bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function ug(n,e,t){return Ar&21?(kn(t,e)||(t=Bp(),yt.lanes|=t,Rr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=t)}function Ex(n,e){var t=it;it=t!==0&&4>t?t:4,n(!0);var i=sf.transition;sf.transition={};try{n(!1),e()}finally{it=t,sf.transition=i}}function cg(){return bn().memoizedState}function Tx(n,e,t){var i=tr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},fg(n))dg(e,t);else if(t=Vm(n,e,t,i),t!==null){var r=Jt();Gn(t,n,i,r),hg(t,e,i)}}function wx(n,e,t){var i=tr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(fg(n))dg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,Jc(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Vm(n,e,r,i),t!==null&&(r=Jt(),Gn(t,n,i,r),hg(t,e,i))}}function fg(n){var e=n.alternate;return n===yt||e!==null&&e===yt}function dg(n,e){Vo=hl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function hg(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,hc(n,t)}}var gl={readContext:Cn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Ax={readContext:Cn,useCallback:function(n,e){return ti().memoizedState=[n,e===void 0?null:e],n},useContext:Cn,useEffect:ng,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,pl(4194308,4,sg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return pl(4194308,4,n,e)},useInsertionEffect:function(n,e){return pl(4,2,n,e)},useMemo:function(n,e){var t=ti();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ti();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Tx.bind(null,yt,n),[i.memoizedState,n]},useRef:function(n){var e=ti();return n={current:n},e.memoizedState=n},useState:eg,useDebugValue:df,useDeferredValue:function(n){return ti().memoizedState=n},useTransition:function(){var n=eg(!1),e=n[0];return n=Ex.bind(null,n[1]),ti().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=yt,r=ti();if(pt){if(t===void 0)throw Error(Q(407));t=t()}else{if(t=e(),Nt===null)throw Error(Q(349));Ar&30||Km(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ng(Zm.bind(null,i,s,n),[n]),i.flags|=2048,Xo(9,qm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ti(),e=Nt.identifierPrefix;if(pt){var t=xi,i=yi;t=(i&~(1<<32-On(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Go++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Mx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Rx={readContext:Cn,useCallback:ag,useContext:Cn,useEffect:ff,useImperativeHandle:og,useInsertionEffect:ig,useLayoutEffect:rg,useMemo:lg,useReducer:uf,useRef:tg,useState:function(){return uf(Wo)},useDebugValue:df,useDeferredValue:function(n){var e=bn();return ug(e,bt.memoizedState,n)},useTransition:function(){var n=uf(Wo)[0],e=bn().memoizedState;return[n,e]},useMutableSource:$m,useSyncExternalStore:Ym,useId:cg,unstable_isNewReconciler:!1},Cx={readContext:Cn,useCallback:ag,useContext:Cn,useEffect:ff,useImperativeHandle:og,useInsertionEffect:ig,useLayoutEffect:rg,useMemo:lg,useReducer:cf,useRef:tg,useState:function(){return cf(Wo)},useDebugValue:df,useDeferredValue:function(n){var e=bn();return bt===null?e.memoizedState=n:ug(e,bt.memoizedState,n)},useTransition:function(){var n=cf(Wo)[0],e=bn().memoizedState;return[n,e]},useMutableSource:$m,useSyncExternalStore:Ym,useId:cg,unstable_isNewReconciler:!1};function zn(n,e){if(n&&n.defaultProps){e=_t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function hf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:_t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var _l={isMounted:function(n){return(n=n._reactInternals)?yr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Jt(),r=tr(n),s=Mi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(Gn(e,n,r,i),ul(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Jt(),r=tr(n),s=Mi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(Gn(e,n,r,i),ul(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Jt(),i=tr(n),r=Mi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(n,r,i),e!==null&&(Gn(e,n,i,t),ul(e,n,i))}};function pg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Lo(t,i)||!Lo(r,s):!0}function mg(n,e,t){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=ln(e)?Sr:Vt.current,i=e.contextTypes,s=(i=i!=null)?fs(n,r):Yi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function gg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&_l.enqueueReplaceState(e,e.state,null)}function pf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Qc(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=ln(e)?Sr:Vt.current,r.context=fs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_l.enqueueReplaceState(r,r.state,null),cl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ys(n,e){try{var t="",i=e;do t+=ny(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function mf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function gf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var bx=typeof WeakMap=="function"?WeakMap:Map;function _g(n,e,t){t=Mi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Tl||(Tl=!0,Lf=i),gf(n,e)},t}function vg(n,e,t){t=Mi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){gf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){gf(n,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function yg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new bx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Gx.bind(null,n,e,t),e.then(n,n))}function xg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Sg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Mi(-1,1),e.tag=2,Zi(t,e,1))),t.lanes|=1),n)}var Px=gi.ReactCurrentOwner,un=!1;function Zt(n,e,t,i){e.child=n===null?Hm(e,null,t,i):ms(e,n.child,t,i)}function Mg(n,e,t,i,r){t=t.render;var s=e.ref;return _s(e,r),i=af(n,e,t,i,s,r),t=lf(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ei(n,e,r)):(pt&&t&&Gc(e),e.flags|=1,Zt(n,e,i,r),e.child)}function Eg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!kf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Tg(n,e,s,i,r)):(n=Pl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Lo,t(o,i)&&n.ref===e.ref)return Ei(n,e,r)}return e.flags|=1,n=ir(s,i),n.ref=e.ref,n.return=e,e.child=n}function Tg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Lo(s,i)&&n.ref===e.ref)if(un=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(un=!0);else return e.lanes=n.lanes,Ei(n,e,r)}return _f(n,e,t,i,r)}function wg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Ss,xn),xn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ut(Ss,xn),xn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ut(Ss,xn),xn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ut(Ss,xn),xn|=i;return Zt(n,e,r,t),e.child}function Ag(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function _f(n,e,t,i,r){var s=ln(t)?Sr:Vt.current;return s=fs(e,s),_s(e,r),t=af(n,e,t,i,s,r),i=lf(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ei(n,e,r)):(pt&&i&&Gc(e),e.flags|=1,Zt(n,e,t,r),e.child)}function Rg(n,e,t,i,r){if(ln(t)){var s=!0;tl(e)}else s=!1;if(_s(e,r),e.stateNode===null)yl(n,e),mg(e,t,i),pf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=ln(t)?Sr:Vt.current,u=fs(e,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&gg(e,o,i,u),qi=!1;var d=e.memoizedState;o.state=d,cl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||an.current||qi?(typeof f=="function"&&(hf(e,t,f,i),l=e.memoizedState),(a=qi||pg(e,t,a,i,d,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Gm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,c=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=ln(t)?Sr:Vt.current,l=fs(e,l));var p=t.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||d!==l)&&gg(e,o,i,l),qi=!1,d=e.memoizedState,o.state=d,cl(e,i,o,r);var g=e.memoizedState;a!==c||d!==g||an.current||qi?(typeof p=="function"&&(hf(e,t,p,i),g=e.memoizedState),(u=qi||pg(e,t,u,i,d,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return vf(n,e,t,i,s,r)}function vf(n,e,t,i,r,s){Ag(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Im(e,t,!1),Ei(n,e,s);i=e.stateNode,Px.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ms(e,n.child,null,s),e.child=ms(e,null,a,s)):Zt(n,e,a,s),e.memoizedState=i.state,r&&Im(e,t,!0),e.child}function Cg(n){var e=n.stateNode;e.pendingContext?Pm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Pm(n,e.context,!1),ef(n,e.containerInfo)}function bg(n,e,t,i,r){return ps(),$c(r),e.flags|=256,Zt(n,e,t,i),e.child}var yf={dehydrated:null,treeContext:null,retryLane:0};function xf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pg(n,e,t){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ut(vt,r&1),n===null)return jc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ll(o,i,0,null),n=Lr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=xf(t),e.memoizedState=yf,n):Sf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Lx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Lr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?xf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=yf,i}return s=n.child,n=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Sf(n,e){return e=Ll({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function vl(n,e,t,i){return i!==null&&$c(i),ms(e,n.child,null,t),n=Sf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Lx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=mf(Error(Q(422))),vl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ll({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ms(e,n.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=yf,s);if(!(e.mode&1))return vl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=mf(s,i,void 0),vl(n,e,o,i)}if(a=(o&n.childLanes)!==0,un||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(n,r),Gn(i,n,r,-1))}return Of(),i=mf(Error(Q(421))),vl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Wx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yn=ji(r.nextSibling),vn=e,pt=!0,Bn=null,n!==null&&(An[Rn++]=yi,An[Rn++]=xi,An[Rn++]=Mr,yi=n.id,xi=n.overflow,Mr=e),e=Sf(e,i.children),e.flags|=4096,e)}function Lg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Zc(n.return,e,t)}function Mf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Ig(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(n,e,i.children,t),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lg(n,t,e);else if(n.tag===19)Lg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ut(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&fl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Mf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&fl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Mf(e,!0,t,null,s);break;case"together":Mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ei(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Rr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Q(153));if(e.child!==null){for(n=e.child,t=ir(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ir(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Ix(n,e,t){switch(e.tag){case 3:Cg(e),ps();break;case 5:jm(e);break;case 1:ln(e.type)&&tl(e);break;case 4:ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(vt,vt.current&1),e.flags|=128,null):t&e.child.childLanes?Pg(n,e,t):(ut(vt,vt.current&1),n=Ei(n,e,t),n!==null?n.sibling:null);ut(vt,vt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Ig(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,wg(n,e,t)}return Ei(n,e,t)}var Dg,Ef,Ng,Ug;Dg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Ef=function(){},Ng=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,wr(ei.current);var s=null;switch(t){case"input":r=Zu(n,r),i=Zu(n,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=ec(n,r),i=ec(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ja)}nc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}},Ug=function(n,e,t,i){t!==i&&(e.flags|=4)};function jo(n,e){if(!pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Wt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Dx(n,e,t){var i=e.pendingProps;switch(Wc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return ln(e.type)&&el(),Wt(e),null;case 3:return i=e.stateNode,vs(),dt(an),dt(Vt),rf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(sl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(Nf(Bn),Bn=null))),Ef(n,e),Wt(e),null;case 5:tf(e);var r=wr(Ho.current);if(t=e.type,n!==null&&e.stateNode!=null)Ng(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return Wt(e),null}if(n=wr(ei.current),sl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Fo]=s,n=(e.mode&1)!==0,t){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Do.length;r++)ft(Do[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":mp(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":vp(i,s),ft("invalid",i)}nc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,n),r=["children",""+a]):uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(t){case"input":Ca(i),_p(i,s,!0);break;case"textarea":Ca(i),xp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ja)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Sp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Qn]=e,n[Fo]=i,Dg(n,e,!1,!1),e.stateNode=n;e:{switch(o=ic(t,i),t){case"dialog":ft("cancel",n),ft("close",n),r=i;break;case"iframe":case"object":case"embed":ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<Do.length;r++)ft(Do[r],n);r=i;break;case"source":ft("error",n),r=i;break;case"img":case"image":case"link":ft("error",n),ft("load",n),r=i;break;case"details":ft("toggle",n),r=i;break;case"input":mp(n,i),r=Zu(n,i),ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ft("invalid",n);break;case"textarea":vp(n,i),r=ec(n,i),ft("invalid",n);break;default:r=i}nc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tp(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&po(n,l):typeof l=="number"&&po(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",n):l!=null&&zu(n,s,l,o))}switch(t){case"input":Ca(n),_p(n,i,!1);break;case"textarea":Ca(n),xp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Bi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Qr(n,!!i.multiple,s,!1):i.defaultValue!=null&&Qr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ja)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(n&&e.stateNode!=null)Ug(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(t=wr(Ho.current),wr(ei.current),sl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==t)&&(n=vn,n!==null))switch(n.tag){case 3:Za(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Za(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Wt(e),null;case 13:if(dt(vt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pt&&yn!==null&&e.mode&1&&!(e.flags&128))km(),ps(),e.flags|=98560,s=!1;else if(s=sl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[Qn]=e}else ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Bn!==null&&(Nf(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||vt.current&1?Pt===0&&(Pt=3):Of())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return vs(),Ef(n,e),n===null&&No(e.stateNode.containerInfo),Wt(e),null;case 10:return qc(e.type._context),Wt(e),null;case 17:return ln(e.type)&&el(),Wt(e),null;case 19:if(dt(vt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)jo(s,!1);else{if(Pt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=fl(n),o!==null){for(e.flags|=128,jo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ut(vt,vt.current&1|2),e.child}n=n.sibling}s.tail!==null&&wt()>Ms&&(e.flags|=128,i=!0,jo(s,!1),e.lanes=4194304)}else{if(!i)if(n=fl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Wt(e),null}else 2*wt()-s.renderingStartTime>Ms&&t!==1073741824&&(e.flags|=128,i=!0,jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,t=vt.current,ut(vt,i?t&1|2:t&1),e):(Wt(e),null);case 22:case 23:return Ff(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function Nx(n,e){switch(Wc(e),e.tag){case 1:return ln(e.type)&&el(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return vs(),dt(an),dt(Vt),rf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return tf(e),null;case 13:if(dt(vt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));ps()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return dt(vt),null;case 4:return vs(),null;case 10:return qc(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var xl=!1,Xt=!1,Ux=typeof WeakSet=="function"?WeakSet:Set,de=null;function xs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Et(n,e,i)}else t.current=null}function Tf(n,e,t){try{t()}catch(i){Et(n,e,i)}}var Fg=!1;function Fx(n,e){if(Uc=za,n=pm(),Rc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,f=0,c=n,d=null;t:for(;;){for(var p;c!==t||r!==0&&c.nodeType!==3||(a=o+r),c!==s||i!==0&&c.nodeType!==3||(l=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)d=c,c=p;for(;;){if(c===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(p=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fc={focusedElem:n,selectionRange:t},za=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:zn(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(x){Et(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return g=Fg,Fg=!1,g}function $o(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tf(e,t,s)}r=r.next}while(r!==i)}}function Sl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function wf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Og(n){var e=n.alternate;e!==null&&(n.alternate=null,Og(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Qn],delete e[Fo],delete e[zc],delete e[vx],delete e[yx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kg(n){return n.tag===5||n.tag===3||n.tag===4}function Bg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Af(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ja));else if(i!==4&&(n=n.child,n!==null))for(Af(n,e,t),n=n.sibling;n!==null;)Af(n,e,t),n=n.sibling}function Rf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Rf(n,e,t),n=n.sibling;n!==null;)Rf(n,e,t),n=n.sibling}var Bt=null,Hn=!1;function Ji(n,e,t){for(t=t.child;t!==null;)zg(n,e,t),t=t.sibling}function zg(n,e,t){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Na,t)}catch{}switch(t.tag){case 5:Xt||xs(t,e);case 6:var i=Bt,r=Hn;Bt=null,Ji(n,e,t),Bt=i,Hn=r,Bt!==null&&(Hn?(n=Bt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Bt.removeChild(t.stateNode));break;case 18:Bt!==null&&(Hn?(n=Bt,t=t.stateNode,n.nodeType===8?Bc(n.parentNode,t):n.nodeType===1&&Bc(n,t),wo(n)):Bc(Bt,t.stateNode));break;case 4:i=Bt,r=Hn,Bt=t.stateNode.containerInfo,Hn=!0,Ji(n,e,t),Bt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(t,e,o),r=r.next}while(r!==i)}Ji(n,e,t);break;case 1:if(!Xt&&(xs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Et(t,e,a)}Ji(n,e,t);break;case 21:Ji(n,e,t);break;case 22:t.mode&1?(Xt=(i=Xt)||t.memoizedState!==null,Ji(n,e,t),Xt=i):Ji(n,e,t);break;default:Ji(n,e,t)}}function Hg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Ux),e.forEach(function(i){var r=Xx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Vn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Hn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Hn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Bt===null)throw Error(Q(160));zg(s,o,r),Bt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Et(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vg(e,n),e=e.sibling}function Vg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(e,n),ni(n),i&4){try{$o(3,n,n.return),Sl(3,n)}catch(v){Et(n,n.return,v)}try{$o(5,n,n.return)}catch(v){Et(n,n.return,v)}}break;case 1:Vn(e,n),ni(n),i&512&&t!==null&&xs(t,t.return);break;case 5:if(Vn(e,n),ni(n),i&512&&t!==null&&xs(t,t.return),n.flags&32){var r=n.stateNode;try{po(r,"")}catch(v){Et(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gp(r,s),ic(a,o);var u=ic(a,s);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?Tp(r,c):f==="dangerouslySetInnerHTML"?Mp(r,c):f==="children"?po(r,c):zu(r,f,c,u)}switch(a){case"input":Ju(r,s);break;case"textarea":yp(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Qr(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Qr(r,!!s.multiple,s.defaultValue,!0):Qr(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fo]=s}catch(v){Et(n,n.return,v)}}break;case 6:if(Vn(e,n),ni(n),i&4){if(n.stateNode===null)throw Error(Q(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Et(n,n.return,v)}}break;case 3:if(Vn(e,n),ni(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(v){Et(n,n.return,v)}break;case 4:Vn(e,n),ni(n);break;case 13:Vn(e,n),ni(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pf=wt())),i&4&&Hg(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(Xt=(u=Xt)||f,Vn(e,n),Xt=u):Vn(e,n),ni(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!f&&n.mode&1)for(de=n,f=n.child;f!==null;){for(c=de=f;de!==null;){switch(d=de,p=d.child,d.tag){case 0:case 11:case 14:case 15:$o(4,d,d.return);break;case 1:xs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Et(i,t,v)}}break;case 5:xs(d,d.return);break;case 22:if(d.memoizedState!==null){Xg(c);continue}}p!==null?(p.return=d,de=p):Xg(c)}f=f.sibling}e:for(f=null,c=n;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ep("display",o))}catch(v){Et(n,n.return,v)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Et(n,n.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===n)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Vn(e,n),ni(n),i&4&&Hg(n);break;case 21:break;default:Vn(e,n),ni(n)}}function ni(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(kg(t)){var i=t;break e}t=t.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(po(r,""),i.flags&=-33);var s=Bg(n);Rf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Bg(n);Af(n,a,o);break;default:throw Error(Q(161))}}catch(l){Et(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ox(n,e,t){de=n,Gg(n)}function Gg(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||xl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=xl;var u=Xt;if(xl=o,(Xt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?jg(r):l!==null?(l.return=o,de=l):jg(r);for(;s!==null;)de=s,Gg(s),s=s.sibling;de=r,xl=a,Xt=u}Wg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Wg(n)}}function Wg(n){for(;de!==null;){var e=de;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Sl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:zn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Xm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&wo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Xt||e.flags&512&&wf(e)}catch(d){Et(e,e.return,d)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Xg(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function jg(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Sl(4,e)}catch(l){Et(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{wf(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{wf(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var kx=Math.ceil,Ml=gi.ReactCurrentDispatcher,Cf=gi.ReactCurrentOwner,Pn=gi.ReactCurrentBatchConfig,Ze=0,Nt=null,Rt=null,zt=0,xn=0,Ss=$i(0),Pt=0,Yo=null,Rr=0,El=0,bf=0,Ko=null,cn=null,Pf=0,Ms=1/0,Ti=null,Tl=!1,Lf=null,Qi=null,wl=!1,er=null,Al=0,qo=0,If=null,Rl=-1,Cl=0;function Jt(){return Ze&6?wt():Rl!==-1?Rl:Rl=wt()}function tr(n){return n.mode&1?Ze&2&&zt!==0?zt&-zt:Sx.transition!==null?(Cl===0&&(Cl=Bp()),Cl):(n=it,n!==0||(n=window.event,n=n===void 0?16:Yp(n.type)),n):1}function Gn(n,e,t,i){if(50<qo)throw qo=0,If=null,Error(Q(185));xo(n,t,i),(!(Ze&2)||n!==Nt)&&(n===Nt&&(!(Ze&2)&&(El|=t),Pt===4&&nr(n,zt)),fn(n,i),t===1&&Ze===0&&!(e.mode&1)&&(Ms=wt()+500,nl&&Ki()))}function fn(n,e){var t=n.callbackNode;Sy(n,e);var i=Oa(n,n===Nt?zt:0);if(i===0)t!==null&&Fp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Fp(t),e===1)n.tag===0?xx(Yg.bind(null,n)):Dm(Yg.bind(null,n)),gx(function(){!(Ze&6)&&Ki()}),t=null;else{switch(zp(i)){case 1:t=cc;break;case 4:t=Op;break;case 16:t=Da;break;case 536870912:t=kp;break;default:t=Da}t=n_(t,$g.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function $g(n,e){if(Rl=-1,Cl=0,Ze&6)throw Error(Q(327));var t=n.callbackNode;if(Es()&&n.callbackNode!==t)return null;var i=Oa(n,n===Nt?zt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=bl(n,i);else{e=i;var r=Ze;Ze|=2;var s=qg();(Nt!==n||zt!==e)&&(Ti=null,Ms=wt()+500,br(n,e));do try{Hx();break}catch(a){Kg(n,a)}while(!0);Kc(),Ml.current=s,Ze=r,Rt!==null?e=0:(Nt=null,zt=0,e=Pt)}if(e!==0){if(e===2&&(r=fc(n),r!==0&&(i=r,e=Df(n,r))),e===1)throw t=Yo,br(n,0),nr(n,i),fn(n,wt()),t;if(e===6)nr(n,i);else{if(r=n.current.alternate,!(i&30)&&!Bx(r)&&(e=bl(n,i),e===2&&(s=fc(n),s!==0&&(i=s,e=Df(n,s))),e===1))throw t=Yo,br(n,0),nr(n,i),fn(n,wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:Pr(n,cn,Ti);break;case 3:if(nr(n,i),(i&130023424)===i&&(e=Pf+500-wt(),10<e)){if(Oa(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Jt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=kc(Pr.bind(null,n,cn,Ti),e);break}Pr(n,cn,Ti);break;case 4:if(nr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kx(i/1960))-i,10<i){n.timeoutHandle=kc(Pr.bind(null,n,cn,Ti),i);break}Pr(n,cn,Ti);break;case 5:Pr(n,cn,Ti);break;default:throw Error(Q(329))}}}return fn(n,wt()),n.callbackNode===t?$g.bind(null,n):null}function Df(n,e){var t=Ko;return n.current.memoizedState.isDehydrated&&(br(n,e).flags|=256),n=bl(n,e),n!==2&&(e=cn,cn=t,e!==null&&Nf(e)),n}function Nf(n){cn===null?cn=n:cn.push.apply(cn,n)}function Bx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(n,e){for(e&=~bf,e&=~El,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-On(e),i=1<<t;n[t]=-1,e&=~i}}function Yg(n){if(Ze&6)throw Error(Q(327));Es();var e=Oa(n,0);if(!(e&1))return fn(n,wt()),null;var t=bl(n,e);if(n.tag!==0&&t===2){var i=fc(n);i!==0&&(e=i,t=Df(n,i))}if(t===1)throw t=Yo,br(n,0),nr(n,e),fn(n,wt()),t;if(t===6)throw Error(Q(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Pr(n,cn,Ti),fn(n,wt()),null}function Uf(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(Ms=wt()+500,nl&&Ki())}}function Cr(n){er!==null&&er.tag===0&&!(Ze&6)&&Es();var e=Ze;Ze|=1;var t=Pn.transition,i=it;try{if(Pn.transition=null,it=1,n)return n()}finally{it=i,Pn.transition=t,Ze=e,!(Ze&6)&&Ki()}}function Ff(){xn=Ss.current,dt(Ss)}function br(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,mx(t)),Rt!==null)for(t=Rt.return;t!==null;){var i=t;switch(Wc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&el();break;case 3:vs(),dt(an),dt(Vt),rf();break;case 5:tf(i);break;case 4:vs();break;case 13:dt(vt);break;case 19:dt(vt);break;case 10:qc(i.type._context);break;case 22:case 23:Ff()}t=t.return}if(Nt=n,Rt=n=ir(n.current,null),zt=xn=e,Pt=0,Yo=null,bf=El=Rr=0,cn=Ko=null,Tr!==null){for(e=0;e<Tr.length;e++)if(t=Tr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Tr=null}return n}function Kg(n,e){do{var t=Rt;try{if(Kc(),dl.current=gl,hl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hl=!1}if(Ar=0,Dt=bt=yt=null,Vo=!1,Go=0,Cf.current=null,t===null||t.return===null){Pt=1,Yo=e,Rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=xg(o);if(p!==null){p.flags&=-257,Sg(p,o,a,s,e),p.mode&1&&yg(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){yg(s,u,e),Of();break e}l=Error(Q(426))}}else if(pt&&a.mode&1){var m=xg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Sg(m,o,a,s,e),$c(ys(l,a));break e}}s=l=ys(l,a),Pt!==4&&(Pt=2),Ko===null?Ko=[s]:Ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=_g(s,l,e);Wm(s,h);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Qi===null||!Qi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=vg(s,a,e);Wm(s,x);break e}}s=s.return}while(s!==null)}Jg(t)}catch(A){e=A,Rt===t&&t!==null&&(Rt=t=t.return);continue}break}while(!0)}function qg(){var n=Ml.current;return Ml.current=gl,n===null?gl:n}function Of(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Nt===null||!(Rr&268435455)&&!(El&268435455)||nr(Nt,zt)}function bl(n,e){var t=Ze;Ze|=2;var i=qg();(Nt!==n||zt!==e)&&(Ti=null,br(n,e));do try{zx();break}catch(r){Kg(n,r)}while(!0);if(Kc(),Ze=t,Ml.current=i,Rt!==null)throw Error(Q(261));return Nt=null,zt=0,Pt}function zx(){for(;Rt!==null;)Zg(Rt)}function Hx(){for(;Rt!==null&&!dy();)Zg(Rt)}function Zg(n){var e=t_(n.alternate,n,xn);n.memoizedProps=n.pendingProps,e===null?Jg(n):Rt=e,Cf.current=null}function Jg(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Nx(t,e),t!==null){t.flags&=32767,Rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pt=6,Rt=null;return}}else if(t=Dx(t,e,xn),t!==null){Rt=t;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=n}while(e!==null);Pt===0&&(Pt=5)}function Pr(n,e,t){var i=it,r=Pn.transition;try{Pn.transition=null,it=1,Vx(n,e,t,i)}finally{Pn.transition=r,it=i}return null}function Vx(n,e,t,i){do Es();while(er!==null);if(Ze&6)throw Error(Q(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Q(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(My(n,s),n===Nt&&(Rt=Nt=null,zt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wl||(wl=!0,n_(Da,function(){return Es(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=it;it=1;var a=Ze;Ze|=4,Cf.current=null,Fx(n,t),Vg(t,n),lx(Fc),za=!!Uc,Fc=Uc=null,n.current=t,Ox(t),hy(),Ze=a,it=o,Pn.transition=s}else n.current=t;if(wl&&(wl=!1,er=n,Al=r),s=n.pendingLanes,s===0&&(Qi=null),gy(t.stateNode),fn(n,wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Tl)throw Tl=!1,n=Lf,Lf=null,n;return Al&1&&n.tag!==0&&Es(),s=n.pendingLanes,s&1?n===If?qo++:(qo=0,If=n):qo=0,Ki(),null}function Es(){if(er!==null){var n=zp(Al),e=Pn.transition,t=it;try{if(Pn.transition=null,it=16>n?16:n,er===null)var i=!1;else{if(n=er,er=null,Al=0,Ze&6)throw Error(Q(331));var r=Ze;for(Ze|=4,de=n.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:$o(8,f,s)}var c=f.child;if(c!==null)c.return=f,de=c;else for(;de!==null;){f=de;var d=f.sibling,p=f.return;if(Og(f),f===u){de=null;break}if(d!==null){d.return=p,de=d;break}de=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,de=h;break e}de=s.return}}var _=n.current;for(de=_;de!==null;){o=de;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,de=y;else e:for(o=_;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sl(9,a)}}catch(A){Et(a,a.return,A)}if(a===o){de=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,de=x;break e}de=a.return}}if(Ze=r,Ki(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Na,n)}catch{}i=!0}return i}finally{it=t,Pn.transition=e}}return!1}function Qg(n,e,t){e=ys(t,e),e=_g(n,e,1),n=Zi(n,e,1),e=Jt(),n!==null&&(xo(n,1,e),fn(n,e))}function Et(n,e,t){if(n.tag===3)Qg(n,n,t);else for(;e!==null;){if(e.tag===3){Qg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){n=ys(t,n),n=vg(e,n,1),e=Zi(e,n,1),n=Jt(),e!==null&&(xo(e,1,n),fn(e,n));break}}e=e.return}}function Gx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Jt(),n.pingedLanes|=n.suspendedLanes&t,Nt===n&&(zt&t)===t&&(Pt===4||Pt===3&&(zt&130023424)===zt&&500>wt()-Pf?br(n,0):bf|=t),fn(n,e)}function e_(n,e){e===0&&(n.mode&1?(e=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):e=1);var t=Jt();n=Si(n,e),n!==null&&(xo(n,e,t),fn(n,t))}function Wx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),e_(n,t)}function Xx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),e_(n,t)}var t_;t_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||an.current)un=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return un=!1,Ix(n,e,t);un=!!(n.flags&131072)}else un=!1,pt&&e.flags&1048576&&Nm(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(n,e),n=e.pendingProps;var r=fs(e,Vt.current);_s(e,t),r=af(null,e,i,n,r,t);var s=lf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qc(e),r.updater=_l,e.stateNode=r,r._reactInternals=e,pf(e,i,n,t),e=vf(null,e,i,!0,s,t)):(e.tag=0,pt&&s&&Gc(e),Zt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$x(i),n=zn(i,n),r){case 0:e=_f(null,e,i,n,t);break e;case 1:e=Rg(null,e,i,n,t);break e;case 11:e=Mg(null,e,i,n,t);break e;case 14:e=Eg(null,e,i,zn(i.type,n),t);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),_f(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Rg(n,e,i,r,t);case 3:e:{if(Cg(e),n===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gm(n,e),cl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ys(Error(Q(423)),e),e=bg(n,e,i,t,r);break e}else if(i!==r){r=ys(Error(Q(424)),e),e=bg(n,e,i,t,r);break e}else for(yn=ji(e.stateNode.containerInfo.firstChild),vn=e,pt=!0,Bn=null,t=Hm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ps(),i===r){e=Ei(n,e,t);break e}Zt(n,e,i,t)}e=e.child}return e;case 5:return jm(e),n===null&&jc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Oc(i,r)?o=null:s!==null&&Oc(i,s)&&(e.flags|=32),Ag(n,e),Zt(n,e,o,t),e.child;case 6:return n===null&&jc(e),null;case 13:return Pg(n,e,t);case 4:return ef(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ms(e,null,i,t):Zt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Mg(n,e,i,r,t);case 7:return Zt(n,e,e.pendingProps,t),e.child;case 8:return Zt(n,e,e.pendingProps.children,t),e.child;case 12:return Zt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(al,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!an.current){e=Ei(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Zc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Zc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,t),r=Cn(r),i=i(r),e.flags|=1,Zt(n,e,i,t),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Eg(n,e,i,r,t);case 15:return Tg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),yl(n,e),e.tag=1,ln(i)?(n=!0,tl(e)):n=!1,_s(e,t),mg(e,i,r),pf(e,i,r,t),vf(null,e,i,!0,n,t);case 19:return Ig(n,e,t);case 22:return wg(n,e,t)}throw Error(Q(156,e.tag))};function n_(n,e){return Up(n,e)}function jx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(n,e,t,i){return new jx(n,e,t,i)}function kf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $x(n){if(typeof n=="function")return kf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Gu)return 11;if(n===ju)return 14}return 2}function ir(n,e){var t=n.alternate;return t===null?(t=Ln(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Pl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")kf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Jr:return Lr(t.children,r,s,e);case Hu:o=8,r|=8;break;case Vu:return n=Ln(12,t,e,r|2),n.elementType=Vu,n.lanes=s,n;case Wu:return n=Ln(13,t,e,r),n.elementType=Wu,n.lanes=s,n;case Xu:return n=Ln(19,t,e,r),n.elementType=Xu,n.lanes=s,n;case fp:return Ll(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case up:o=10;break e;case cp:o=9;break e;case Gu:o=11;break e;case ju:o=14;break e;case ki:o=16,i=null;break e}throw Error(Q(130,n==null?n:typeof n,""))}return e=Ln(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Lr(n,e,t,i){return n=Ln(7,n,i,e),n.lanes=t,n}function Ll(n,e,t,i){return n=Ln(22,n,i,e),n.elementType=fp,n.lanes=t,n.stateNode={isHidden:!1},n}function Bf(n,e,t){return n=Ln(6,n,null,e),n.lanes=t,n}function zf(n,e,t){return e=Ln(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Yx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dc(0),this.expirationTimes=dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hf(n,e,t,i,r,s,o,a,l){return n=new Yx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(s),n}function Kx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function i_(n){if(!n)return Yi;n=n._reactInternals;e:{if(yr(n)!==n||n.tag!==1)throw Error(Q(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(n.tag===1){var t=n.type;if(ln(t))return Lm(n,t,e)}return e}function r_(n,e,t,i,r,s,o,a,l){return n=Hf(t,i,!0,n,r,s,o,a,l),n.context=i_(null),t=n.current,i=Jt(),r=tr(t),s=Mi(i,r),s.callback=e??null,Zi(t,s,r),n.current.lanes=r,xo(n,r,i),fn(n,i),n}function Il(n,e,t,i){var r=e.current,s=Jt(),o=tr(r);return t=i_(t),e.context===null?e.context=t:e.pendingContext=t,e=Mi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Zi(r,e,o),n!==null&&(Gn(n,r,o,s),ul(n,r,o)),o}function Dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function s_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Vf(n,e){s_(n,e),(n=n.alternate)&&s_(n,e)}function qx(){return null}var o_=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gf(n){this._internalRoot=n}Nl.prototype.render=Gf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Q(409));Il(n,e,null,null)},Nl.prototype.unmount=Gf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Cr(function(){Il(null,n,null,null)}),e[_i]=null}};function Nl(n){this._internalRoot=n}Nl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Gp();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Gi.length&&e!==0&&e<Gi[t].priority;t++);Gi.splice(t,0,n),t===0&&jp(n)}};function Wf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function a_(){}function Zx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Dl(o);s.call(u)}}var o=r_(e,i,n,0,null,!1,!1,"",a_);return n._reactRootContainer=o,n[_i]=o.current,No(n.nodeType===8?n.parentNode:n),Cr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Dl(l);a.call(u)}}var l=Hf(n,0,!1,null,null,!1,!1,"",a_);return n._reactRootContainer=l,n[_i]=l.current,No(n.nodeType===8?n.parentNode:n),Cr(function(){Il(e,l,t,i)}),l}function Fl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Dl(o);a.call(l)}}Il(e,o,n,r)}else o=Zx(t,e,n,r,i);return Dl(o)}Hp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=yo(e.pendingLanes);t!==0&&(hc(e,t|1),fn(e,wt()),!(Ze&6)&&(Ms=wt()+500,Ki()))}break;case 13:Cr(function(){var i=Si(n,1);if(i!==null){var r=Jt();Gn(i,n,1,r)}}),Vf(n,1)}},pc=function(n){if(n.tag===13){var e=Si(n,134217728);if(e!==null){var t=Jt();Gn(e,n,134217728,t)}Vf(n,134217728)}},Vp=function(n){if(n.tag===13){var e=tr(n),t=Si(n,e);if(t!==null){var i=Jt();Gn(t,n,e,i)}Vf(n,e)}},Gp=function(){return it},Wp=function(n,e){var t=it;try{return it=n,e()}finally{it=t}},oc=function(n,e,t){switch(e){case"input":if(Ju(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Qa(i);if(!r)throw Error(Q(90));pp(i),Ju(i,r)}}}break;case"textarea":yp(n,t);break;case"select":e=t.value,e!=null&&Qr(n,!!t.multiple,e,!1)}},Cp=Uf,bp=Cr;var Jx={usingClientEntryPoint:!1,Events:[Oo,us,Qa,Ap,Rp,Uf]},Zo={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qx={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Dp(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Na=Ol.inject(Qx),Jn=Ol}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jx,mn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(Q(200));return Kx(n,e,null,t)},mn.createRoot=function(n,e){if(!Wf(n))throw Error(Q(299));var t=!1,i="",r=o_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hf(n,1,!1,null,null,t,!1,i,r),n[_i]=e.current,No(n.nodeType===8?n.parentNode:n),new Gf(e)},mn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Q(188)):(n=Object.keys(n).join(","),Error(Q(268,n)));return n=Dp(e),n=n===null?null:n.stateNode,n},mn.flushSync=function(n){return Cr(n)},mn.hydrate=function(n,e,t){if(!Ul(e))throw Error(Q(200));return Fl(null,n,e,!0,t)},mn.hydrateRoot=function(n,e,t){if(!Wf(n))throw Error(Q(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=o_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=r_(e,null,n,1,t??null,r,!1,s,o),n[_i]=e.current,No(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Nl(e)},mn.render=function(n,e,t){if(!Ul(e))throw Error(Q(200));return Fl(null,n,e,!1,t)},mn.unmountComponentAtNode=function(n){if(!Ul(n))throw Error(Q(40));return n._reactRootContainer?(Cr(function(){Fl(null,null,n,!1,function(){n._reactRootContainer=null,n[_i]=null})}),!0):!1},mn.unstable_batchedUpdates=Uf,mn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ul(t))throw Error(Q(200));if(n==null||n._reactInternals===void 0)throw Error(Q(38));return Fl(n,e,t,!1,i)},mn.version="18.3.1-next-f1338f8080-20240426";function l_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l_)}catch(n){console.error(n)}}l_(),ip.exports=mn;var eS=ip.exports,Xf,u_=eS;Xf=u_.createRoot,u_.hydrateRoot;const Ts="https://crhnspzmicnswhylloxk.supabase.co/functions/v1",ws="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyaG5zcHptaWNuc3doeWxsb3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5OTIyOTQsImV4cCI6MjA3NDU2ODI5NH0.uKqhxlrEEWn8DBoe3dHNo9U8fKA80GK9V2dZXYiXkYM";function tS(){const n=Intl.DateTimeFormat().resolvedOptions().timeZone;return new Intl.DateTimeFormat("en-CA",{timeZone:n,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)}async function c_(){const n=tS(),e=await fetch(`${Ts}/get-today?date=${encodeURIComponent(n)}`,{headers:{authorization:`Bearer ${ws}`}});return e.ok?(await e.json()).labubu:null}async function nS(n=10){const e=await fetch(`${Ts}/get-leaderboard?limit=${n}`,{headers:{authorization:`Bearer ${ws}`}});return e.ok?(await e.json()).rows:[]}async function iS(n){const e=await fetch(`${Ts}/get-my-score?user_id=${encodeURIComponent(n)}`,{headers:{authorization:`Bearer ${ws}`}});return e.ok?(await e.json()).score??0:0}async function rS(n,e){const t=await fetch(`${Ts}/join`,{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${ws}`},body:JSON.stringify({user_id:n,username:e})});return t.ok?{ok:!0}:{ok:!1,reason:await t.text()}}async function sS(n,e,t=1){const i=await fetch(`${Ts}/claim`,{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${ws}`},body:JSON.stringify({player_id:n,labubu_id:e,points:t})}),r=await i.json().catch(()=>({}));return i.ok?r:{ok:!1,error:(r==null?void 0:r.error)??`${i.status} ${i.statusText}`}}async function f_(n,e){const t=await fetch(`${Ts}/is-claimed?player_id=${encodeURIComponent(n)}&labubu_id=${encodeURIComponent(e)}`,{method:"GET",headers:{"content-type":"application/json",authorization:`Bearer ${ws}`}});return t.ok?!!(await t.json()).claimed:(console.warn("[isClaimed] request failed",await t.text()),!1)}const kl="react-marble-hud",oS=2147483647,d_="wl_hud_collapsed";async function aS(){var n;try{if((n=chrome==null?void 0:chrome.storage)!=null&&n.sync){const{player_id:e}=await chrome.storage.sync.get(["player_id"]);if(e)return e;const t=crypto.randomUUID();return await chrome.storage.sync.set({player_id:t}),t}}catch{}try{const e="__player_id";let t=localStorage.getItem(e);return t||(t=crypto.randomUUID(),localStorage.setItem(e,t)),t}catch{return crypto.randomUUID()}}async function lS(){var n;try{if((n=chrome==null?void 0:chrome.storage)!=null&&n.sync){const{username:e}=await chrome.storage.sync.get(["username"]);return e||null}}catch{}try{return localStorage.getItem("__username")}catch{return null}}async function uS(n){var e;try{if((e=chrome==null?void 0:chrome.storage)!=null&&e.sync){await chrome.storage.sync.set({username:n});return}}catch{}try{localStorage.setItem("__username",n)}catch{}}function cS(){let n=document.getElementById(kl);return n||(n=document.createElement("div"),n.id=kl,n.style.position="fixed",n.style.top="16px",n.style.right="16px",n.style.zIndex=String(oS),n.style.background="rgba(18,18,20,.92)",n.style.color="#fff",n.style.borderRadius="14px",n.style.boxShadow="0 10px 30px rgba(0,0,0,.35)",n.style.backdropFilter="blur(8px)",n.style.fontFamily='ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',n.style.overflow="hidden",n.style.pointerEvents="auto",n.style.transition="width .18s ease, height .18s ease, border-radius .18s ease",(document.body??document.documentElement).appendChild(n),new MutationObserver(()=>{document.getElementById(kl)||(document.body??document.documentElement).appendChild(n)}).observe(document.documentElement,{childList:!0,subtree:!0})),n}function fS({label:n,value:e}){return Ie.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,fontSize:12,opacity:.9,paddingTop:4},children:[Ie.jsx("span",{children:n}),Ie.jsx("span",{children:e})]})}function dS({title:n,children:e}){return Ie.jsxs("div",{style:{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.08)",borderRadius:10,padding:10},children:[Ie.jsx("div",{style:{fontSize:12,opacity:.8,textTransform:"uppercase"},children:n}),Ie.jsx("div",{style:{fontSize:14,marginTop:6},children:e})]})}function hS({onDone:n,defaultUsername:e}){const[t,i]=je.useState(e??""),[r,s]=je.useState(!1),[o,a]=je.useState(null),l=t.trim().length>=3&&!r;return Ie.jsxs("div",{style:{display:"grid",gap:12,padding:"12px 14px"},children:[Ie.jsx("div",{style:{fontSize:13,opacity:.9},children:"Pick a username and join the hunt 😈"}),Ie.jsx("input",{placeholder:"your-name",value:t,onChange:u=>i(u.target.value),onKeyDown:u=>{var f;u.key==="Enter"&&l&&((f=u.currentTarget.nextSibling)==null||f.click())},style:{width:"100%",padding:"10px 12px",background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.12)",borderRadius:10,color:"#fff",fontSize:14}}),Ie.jsx("button",{disabled:!l,onClick:async()=>{try{s(!0),a(null),n(t.trim())}catch(u){a((u==null?void 0:u.message)||"Failed. Try a different name?")}finally{s(!1)}},style:{all:"unset",textAlign:"center",padding:"10px 12px",background:l?"#7A5AF8":"rgba(255,255,255,.12)",borderRadius:10,cursor:l?"pointer":"not-allowed",fontWeight:700},children:r?"Joining…":"Join the Hunt"}),o&&Ie.jsx("div",{style:{color:"#ff9c9c",fontSize:12},children:o})]})}function pS(){var R,b;const[n,e]=je.useState(null),[t,i]=je.useState(()=>{try{return localStorage.getItem(d_)==="1"}catch{return!1}}),[r,s]=je.useState(null),[o,a]=je.useState(null),[l,u]=je.useState(null),[f,c]=je.useState([]),[d,p]=je.useState(0),[g,v]=je.useState(null),[m,h]=je.useState(!1),[_,y]=je.useState(!1),[x,A]=je.useState(!1);if(je.useEffect(()=>{const E=document.getElementById(kl);E&&(t?(E.style.width="56px",E.style.height="56px",E.style.borderRadius="12px"):(E.style.width="320px",E.style.height="auto",E.style.borderRadius="14px"))},[t]),je.useEffect(()=>{try{localStorage.setItem(d_,t?"1":"0")}catch{}},[t]),je.useEffect(()=>{const E=S=>{const L=S==null?void 0:S.data;!L||!L.__mt||L.type==="MT_COORDS"&&e({x:+L.x||0,y:+L.y||0,z:+L.z||0})};return window.addEventListener("message",E,!0),()=>window.removeEventListener("message",E,!0)},[]),je.useEffect(()=>{const E=L=>{const k=L.detail||{};A(!!(k!=null&&k.near))};window.addEventListener("LABUBU_PROXIMITY",E,!0);const S=()=>h(!0);return window.addEventListener("LABUBU_CLAIMED",S,!0),()=>{window.removeEventListener("LABUBU_PROXIMITY",E,!0),window.removeEventListener("LABUBU_CLAIMED",S,!0)}},[]),je.useEffect(()=>{(async()=>{const E=await aS(),S=await lS();s(E),a(S)})()},[]),je.useEffect(()=>{if(!r||!o)return;let E=!1;return(async()=>{try{v(null);const[S,L,k]=await Promise.all([c_(),nS(10),iS(r)]);if(E)return;u(S),c(L),p(k);try{const H=(()=>{try{const Y=location.pathname.match(/\/world\/([0-9a-fA-F-]{36})/);return Y?Y[1]:null}catch{return null}})(),W=S==null?void 0:S.world_id;y(!!(H&&W&&H===W))}catch{}try{const H=(S==null?void 0:S.labubu_id)??(S==null?void 0:S.id);if(H){const W=await f_(r,H);E||h(!!W)}else E||h(!1)}catch{}}catch(S){E||v((S==null?void 0:S.message)||"Failed to load data")}})(),()=>{E=!0}},[r,o]),t)return Ie.jsx("button",{"aria-label":"Expand Labubus HUD",onClick:()=>i(!1),style:{all:"unset",display:"grid",placeItems:"center",width:56,height:56,cursor:"pointer"},children:Ie.jsx("img",{src:(R=chrome==null?void 0:chrome.runtime)!=null&&R.getURL?chrome.runtime.getURL("logo.png"):"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%237A5AF8'/%3E%3C/svg%3E",alt:"Labubus",style:{width:40,height:40,borderRadius:10,display:"block"}})});const w=Ie.jsxs("div",{onClick:()=>i(!0),title:"Click to collapse",style:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",background:"#7A5AF8",cursor:"pointer",userSelect:"none"},children:[Ie.jsx("img",{src:(b=chrome==null?void 0:chrome.runtime)!=null&&b.getURL?chrome.runtime.getURL("logo.png"):"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' fill='%237A5AF8'/%3E%3C/svg%3E",alt:"Labubus",style:{width:48,height:48,display:"block",borderRadius:10}}),Ie.jsxs("div",{children:[Ie.jsx("div",{style:{fontWeight:800,letterSpacing:".2px"},children:"World Labubus"}),Ie.jsx("div",{style:{fontSize:12,opacity:.9},children:o?"Find today's Labubu":"Join the daily hunt"})]})]});return!o||!r?Ie.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[w,Ie.jsx(hS,{defaultUsername:o,onDone:async E=>{if(!r)return;const S=await rS(r,E);if(!S.ok){alert(S.reason??"Failed to join");return}await uS(E),a(E)}})]}):Ie.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[w,Ie.jsxs("div",{style:{padding:"12px 14px",display:"grid",gap:12},children:[Ie.jsxs(dS,{title:"Today",children:[Ie.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8},children:[Ie.jsx("span",{children:(l==null?void 0:l.hint)??"Explore more worlds"}),Ie.jsxs("span",{style:{opacity:.9},children:["Score: ",Ie.jsx("b",{children:d})]})]}),Ie.jsx("div",{style:{fontSize:11,opacity:.8,paddingTop:6},children:l?`Hunt #${l.day_no}`:"No hunt live right now"})]}),Ie.jsxs("div",{children:[Ie.jsx("div",{style:{fontSize:12,opacity:.8,textTransform:"uppercase",marginBottom:6},children:"Leaderboard"}),Ie.jsx("div",{style:{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.08)",borderRadius:10},children:f.length===0?Ie.jsx("div",{style:{padding:"10px 12px",fontSize:14,opacity:.8},children:g?`Error: ${g}`:"No entries yet — be the first!"}):f.map((E,S)=>Ie.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:14,padding:"8px 10px",borderTop:S===0?"none":"1px solid rgba(255,255,255,.08)"},children:[Ie.jsxs("span",{children:[S+1,". ",E.username||E.player_id.slice(0,6)]}),Ie.jsx("span",{children:E.total_finds})]},E.player_id))})]}),Ie.jsxs("div",{style:{background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.08)",borderRadius:10,padding:10},children:[Ie.jsx(fS,{label:"Camera",value:n?`${n.x.toFixed(2)}, ${n.y.toFixed(2)}, ${n.z.toFixed(2)}`:"…"}),Ie.jsxs("div",{style:{fontSize:11,opacity:.8,paddingTop:2},children:["press ",Ie.jsx("b",{children:"C"})," to copy (handled by your page-core)"]})]})]}),Ie.jsx("div",{style:{padding:"10px 14px"},children:(()=>{let E="#ef4444";return m?E="#22c55e":_&&(E="#f59e0b"),Ie.jsx("div",{"aria-label":"labubu-status",title:m?"claimed":_?x?"near":"in-world":"wrong-world",style:{width:"100%",height:6,borderRadius:999,background:E,boxShadow:"inset 0 0 0 1px rgba(255,255,255,.12)"}})})()})]})}console.log("[HUD] Starting HUD renderer…");try{const n=cS();console.log("[HUD] Container created, mounting React…"),Xf(n).render(Ie.jsx(pS,{})),console.log("[HUD] Successfully mounted React component")}catch(n){console.error("[HUD] Failed to mount:",n)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="180",mS=0,h_=1,gS=2,p_=1,_S=2,wi=3,Ai=0,dn=1,ii=2,rr=0,As=1,m_=2,g_=3,__=4,vS=5,Ir=100,yS=101,xS=102,SS=103,MS=104,ES=200,TS=201,wS=202,AS=203,$f=204,Yf=205,RS=206,CS=207,bS=208,PS=209,LS=210,IS=211,DS=212,NS=213,US=214,Kf=0,qf=1,Zf=2,Rs=3,Jf=4,Qf=5,ed=6,td=7,v_=0,FS=1,OS=2,sr=0,kS=1,BS=2,zS=3,HS=4,VS=5,GS=6,WS=7,y_="attached",XS="detached",x_=300,Cs=301,bs=302,nd=303,id=304,Bl=306,Ps=1e3,or=1001,zl=1002,Qt=1003,S_=1004,Jo=1005,Sn=1006,Hl=1007,Ri=1008,ri=1009,M_=1010,E_=1011,Qo=1012,rd=1013,Dr=1014,Wn=1015,ea=1016,sd=1017,od=1018,ta=1020,T_=35902,w_=35899,A_=1021,R_=1022,In=1023,na=1026,ia=1027,ad=1028,ld=1029,C_=1030,ud=1031,cd=1033,Vl=33776,Gl=33777,Wl=33778,Xl=33779,fd=35840,dd=35841,hd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37808,yd=37809,xd=37810,Sd=37811,Md=37812,Ed=37813,Td=37814,wd=37815,Ad=37816,Rd=37817,Cd=37818,bd=37819,Pd=37820,Ld=37821,Id=36492,Dd=36494,Nd=36495,Ud=36283,Fd=36284,Od=36285,kd=36286,ra=2300,sa=2301,Bd=2302,b_=2400,P_=2401,L_=2402,jS=2500,$S=0,I_=1,zd=2,YS=3200,KS=3201,D_=0,qS=1,ar="",Ht="srgb",en="srgb-linear",jl="linear",ot="srgb",Ls=7680,N_=519,ZS=512,JS=513,QS=514,U_=515,eM=516,tM=517,nM=518,iM=519,Hd=35044,F_="300 es",si=2e3,$l=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let O_=1234567;const oa=Math.PI/180,Ds=180/Math.PI;function Xn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function Vd(n,e){return(n%e+e)%e}function rM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sM(n,e,t){return n!==e?(t-n)/(e-n):0}function aa(n,e,t){return(1-t)*n+t*e}function oM(n,e,t,i){return aa(n,e,1-Math.exp(-t*i))}function aM(n,e=1){return e-Math.abs(Vd(n,e*2)-e)}function lM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function uM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fM(n,e){return n+Math.random()*(e-n)}function dM(n){return n*(.5-Math.random())}function hM(n){n!==void 0&&(O_=n);let e=O_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pM(n){return n*oa}function mM(n){return n*Ds}function gM(n){return(n&n-1)===0&&n!==0}function _M(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),f=o((e+i)/2),c=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*f,l*c,l*d,a*u);break;case"YZY":n.set(l*d,a*f,l*c,a*u);break;case"ZXZ":n.set(l*c,l*d,a*f,a*u);break;case"XZX":n.set(a*f,l*g,l*p,a*u);break;case"YXY":n.set(l*p,a*f,l*g,a*u);break;case"ZYZ":n.set(l*g,l*p,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const xM={DEG2RAD:oa,RAD2DEG:Ds,generateUUID:Xn,clamp:Ge,euclideanModulo:Vd,mapLinear:rM,inverseLerp:sM,lerp:aa,damp:oM,pingpong:aM,smoothstep:lM,smootherstep:uM,randInt:cM,randFloat:fM,randFloatSpread:dM,seededRandom:hM,degToRad:pM,radToDeg:mM,isPowerOfTwo:gM,ceilPowerOfTwo:_M,floorPowerOfTwo:vM,setQuaternionFromProperEuler:yM,normalize:rt,denormalize:jn};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],c=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(c!==v||l!==d||u!==p||f!==g){let m=1-a;const h=l*d+u*p+f*g+c*v,_=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,h*_);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const x=a*_;if(l=l*m+d*x,u=u*m+p*x,f=f*m+g*x,c=c*m+v*x,m===1-a){const A=1/Math.sqrt(l*l+u*u+f*f+c*c);l*=A,u*=A,f*=A,c*=A}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],c=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+f*c+l*p-u*d,e[t+1]=l*g+f*d+u*c-a*p,e[t+2]=u*g+f*p+a*d-l*c,e[t+3]=f*g-a*c-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),c=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*f*c+u*p*g,this._y=u*p*c-d*f*g,this._z=u*f*g+d*p*c,this._w=u*f*c-d*p*g;break;case"YXZ":this._x=d*f*c+u*p*g,this._y=u*p*c-d*f*g,this._z=u*f*g-d*p*c,this._w=u*f*c+d*p*g;break;case"ZXY":this._x=d*f*c-u*p*g,this._y=u*p*c+d*f*g,this._z=u*f*g+d*p*c,this._w=u*f*c-d*p*g;break;case"ZYX":this._x=d*f*c-u*p*g,this._y=u*p*c+d*f*g,this._z=u*f*g-d*p*c,this._w=u*f*c+d*p*g;break;case"YZX":this._x=d*f*c+u*p*g,this._y=u*p*c+d*f*g,this._z=u*f*g-d*p*c,this._w=u*f*c-d*p*g;break;case"XZY":this._x=d*f*c-u*p*g,this._y=u*p*c-d*f*g,this._z=u*f*g+d*p*c,this._w=u*f*c+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],f=t[6],c=t[10],d=i+a+c;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>c){const p=2*Math.sqrt(1+i-a-c);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>c){const p=2*Math.sqrt(1+a-i-c);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+c-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),c=Math.sin((1-t)*f)/u,d=Math.sin(t*f)/u;return this._w=o*c+this._w*d,this._x=i*c+this._x*d,this._y=r*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(k_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(k_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*t-s*r),c=2*(s*i-o*t);return this.x=t+l*u+o*c-a*f,this.y=i+l*f+a*u-s*c,this.z=r+l*c+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gd.copy(this).projectOnVector(e),this.sub(Gd)}reflect(e){return this.sub(Gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new N,k_=new lr;class Oe{constructor(e,t,i,r,s,o,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],c=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],_=r[1],y=r[4],x=r[7],A=r[2],w=r[5],R=r[8];return s[0]=o*v+a*_+l*A,s[3]=o*m+a*y+l*w,s[6]=o*h+a*x+l*R,s[1]=u*v+f*_+c*A,s[4]=u*m+f*y+c*w,s[7]=u*h+f*x+c*R,s[2]=d*v+p*_+g*A,s[5]=d*m+p*y+g*w,s[8]=d*h+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=f*o-a*u,d=a*l-f*s,p=u*s-o*l,g=t*c+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=c*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wd.makeScale(e,t)),this}rotate(e){return this.premultiply(Wd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wd=new Oe;function B_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function SM(){const n=la("canvas");return n.style.display="block",n}const z_={};function ua(n){n in z_||(z_[n]=!0,console.warn(n))}function MM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const H_=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EM(){const n={enabled:!0,workingColorSpace:en,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?jl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ua("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ua("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[en]:{primaries:e,whitePoint:i,transfer:jl,toXYZ:H_,fromXYZ:V_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:H_,fromXYZ:V_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}const Ye=EM();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Us;class TM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Us===void 0&&(Us=la("canvas")),Us.width=e.width,Us.height=e.height;const r=Us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ci(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wM=0;class Xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jd(r[o].image)):s.push(jd(r[o]))}else s=jd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function jd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?TM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AM=0;const $d=new N;class Ut extends Is{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=or,r=or,s=Sn,o=Ri,a=In,l=ri,u=Ut.DEFAULT_ANISOTROPY,f=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Xn(),this.name="",this.source=new Xd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($d).x}get height(){return this.source.getSize($d).y}get depth(){return this.source.getSize($d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=x_,Ut.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],f=l[4],c=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(f-d)<.01&&Math.abs(c-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(c+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,x=(p+1)/2,A=(h+1)/2,w=(f+d)/4,R=(c+v)/4,b=(g+m)/4;return y>x&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=R/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=b/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(c-v)*(c-v)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(c-v)/_,this.z=(d-f)/_,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RM extends Is{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ut(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends RM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class G_ extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CM extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Kl.subVectors(this.max,ca),Fs.subVectors(e.a,ca),Os.subVectors(e.b,ca),ks.subVectors(e.c,ca),ur.subVectors(Os,Fs),cr.subVectors(ks,Os),Ur.subVectors(Fs,ks);let t=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ur.z,Ur.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ur.z,0,-Ur.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ur.y,Ur.x,0];return!Yd(t,Fs,Os,ks,Kl)||(t=[1,0,0,0,1,0,0,0,1],!Yd(t,Fs,Os,ks,Kl))?!1:(ql.crossVectors(ur,cr),t=[ql.x,ql.y,ql.z],Yd(t,Fs,Os,ks,Kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new N,new N,new N,new N,new N,new N,new N,new N],$n=new N,Yl=new oi,Fs=new N,Os=new N,ks=new N,ur=new N,cr=new N,Ur=new N,ca=new N,Kl=new N,ql=new N,Fr=new N;function Yd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fr.fromArray(n,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),u=t.dot(Fr),f=i.dot(Fr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const bM=new oi,fa=new N,Kd=new N;class ai{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Kd)),this.expandByPoint(fa.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pi=new N,qd=new N,Zl=new N,fr=new N,Zd=new N,Jl=new N,Jd=new N;class Ql{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qd.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(qd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zl),a=fr.dot(this.direction),l=-fr.dot(Zl),u=fr.lengthSq(),f=Math.abs(1-o*o);let c,d,p,g;if(f>0)if(c=o*l-a,d=o*a-l,g=s*f,c>=0)if(d>=-g)if(d<=g){const v=1/f;c*=v,d*=v,p=c*(c+o*d+2*a)+d*(o*c+d+2*l)+u}else d=s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;else d=-s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;else d<=-g?(c=Math.max(0,-(-o*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+u):d<=g?(c=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(c=Math.max(0,-(o*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),p=-c*c+d*(d+2*l)+u);else d=o>0?-s:s,c=Math.max(0,-(o*d+a)),p=-c*c+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(qd).addScaledVector(Zl,d),p}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,r,s){Zd.subVectors(t,e),Jl.subVectors(i,e),Jd.crossVectors(Zd,Jl);let o=this.direction.dot(Jd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(Jl.crossVectors(fr,Jl));if(l<0)return null;const u=a*this.direction.dot(Zd.cross(fr));if(u<0||l+u>o)return null;const f=-a*fr.dot(Jd);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,i,r,s,o,a,l,u,f,c,d,p,g,v,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,f,c,d,p,g,v,m)}set(e,t,i,r,s,o,a,l,u,f,c,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=f,h[10]=c,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*c,g=a*f,v=a*c;t[0]=l*f,t[4]=-l*c,t[8]=u,t[1]=p+g*u,t[5]=d-v*u,t[9]=-a*l,t[2]=v-d*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*c,g=u*f,v=u*c;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*c,t[5]=o*f,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*c,g=u*f,v=u*c;t[0]=d-v*a,t[4]=-o*c,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*f,t[9]=v-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*c,g=a*f,v=a*c;t[0]=l*f,t[4]=g*u-p,t[8]=d*u+v,t[1]=l*c,t[5]=v*u+d,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,v=a*u;t[0]=l*f,t[4]=v-d*c,t[8]=g*c+p,t[1]=c,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=p*c+g,t[10]=d-v*c}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,v=a*u;t[0]=l*f,t[4]=-c,t[8]=u*f,t[1]=d*c+v,t[5]=o*f,t[9]=p*c-g,t[2]=g*c-p,t[6]=a*f,t[10]=v*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,LM)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),dr.crossVectors(i,Mn),dr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),dr.crossVectors(i,Mn)),dr.normalize(),eu.crossVectors(Mn,dr),r[0]=dr.x,r[4]=eu.x,r[8]=Mn.x,r[1]=dr.y,r[5]=eu.y,r[9]=Mn.y,r[2]=dr.z,r[6]=eu.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],c=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],_=i[3],y=i[7],x=i[11],A=i[15],w=r[0],R=r[4],b=r[8],E=r[12],S=r[1],L=r[5],k=r[9],H=r[13],W=r[2],Y=r[6],V=r[10],ne=r[14],I=r[3],$=r[7],q=r[11],ae=r[15];return s[0]=o*w+a*S+l*W+u*I,s[4]=o*R+a*L+l*Y+u*$,s[8]=o*b+a*k+l*V+u*q,s[12]=o*E+a*H+l*ne+u*ae,s[1]=f*w+c*S+d*W+p*I,s[5]=f*R+c*L+d*Y+p*$,s[9]=f*b+c*k+d*V+p*q,s[13]=f*E+c*H+d*ne+p*ae,s[2]=g*w+v*S+m*W+h*I,s[6]=g*R+v*L+m*Y+h*$,s[10]=g*b+v*k+m*V+h*q,s[14]=g*E+v*H+m*ne+h*ae,s[3]=_*w+y*S+x*W+A*I,s[7]=_*R+y*L+x*Y+A*$,s[11]=_*b+y*k+x*V+A*q,s[15]=_*E+y*H+x*ne+A*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],c=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*c-r*u*c-s*a*d+i*u*d+r*a*p-i*l*p)+v*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*f-s*l*f)+m*(+t*u*c-t*a*p-s*o*c+i*o*p+s*a*f-i*u*f)+h*(-r*a*f-t*l*c+t*a*d+r*o*c-i*o*d+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],_=c*m*u-v*d*u+v*l*p-a*m*p-c*l*h+a*d*h,y=g*d*u-f*m*u-g*l*p+o*m*p+f*l*h-o*d*h,x=f*v*u-g*c*u+g*a*p-o*v*p-f*a*h+o*c*h,A=g*c*l-f*v*l-g*a*d+o*v*d+f*a*m-o*c*m,w=t*_+i*y+r*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=_*R,e[1]=(v*d*s-c*m*s-v*r*p+i*m*p+c*r*h-i*d*h)*R,e[2]=(a*m*s-v*l*s+v*r*u-i*m*u-a*r*h+i*l*h)*R,e[3]=(c*l*s-a*d*s-c*r*u+i*d*u+a*r*p-i*l*p)*R,e[4]=y*R,e[5]=(f*m*s-g*d*s+g*r*p-t*m*p-f*r*h+t*d*h)*R,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*h-t*l*h)*R,e[7]=(o*d*s-f*l*s+f*r*u-t*d*u-o*r*p+t*l*p)*R,e[8]=x*R,e[9]=(g*c*s-f*v*s-g*i*p+t*v*p+f*i*h-t*c*h)*R,e[10]=(o*v*s-g*a*s+g*i*u-t*v*u-o*i*h+t*a*h)*R,e[11]=(f*a*s-o*c*s-f*i*u+t*c*u+o*i*p-t*a*p)*R,e[12]=A*R,e[13]=(f*v*r-g*c*r+g*i*d-t*v*d-f*i*m+t*c*m)*R,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*R,e[15]=(o*c*r-f*a*r+f*i*l-t*c*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,f=o+o,c=a+a,d=s*u,p=s*f,g=s*c,v=o*f,m=o*c,h=a*c,_=l*u,y=l*f,x=l*c,A=i.x,w=i.y,R=i.z;return r[0]=(1-(v+h))*A,r[1]=(p+x)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(d+h))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(g+y)*R,r[9]=(m-_)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Bs.set(r[0],r[1],r[2]).length();const o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const u=1/s,f=1/o,c=1/a;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=f,Yn.elements[5]*=f,Yn.elements[6]*=f,Yn.elements[8]*=c,Yn.elements[9]*=c,Yn.elements[10]*=c,t.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=si,l=!1){const u=this.elements,f=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===si)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===$l)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=c,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=si,l=!1){const u=this.elements,f=2/(t-e),c=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===si)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===$l)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=c,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bs=new N,Yn=new Be,PM=new N(0,0,0),LM=new N(1,1,1),dr=new N,eu=new N,Mn=new N,W_=new Be,X_=new lr;class li{constructor(e=0,t=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],c=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return W_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(W_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return X_.setFromEuler(this),this.setFromQuaternion(X_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class j_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IM=0;const $_=new N,zs=new lr,Li=new Be,tu=new N,da=new N,DM=new N,NM=new lr,Y_=new N(1,0,0),K_=new N(0,1,0),q_=new N(0,0,1),Z_={type:"added"},UM={type:"removed"},Hs={type:"childadded",child:null},Qd={type:"childremoved",child:null};class xt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new N,t=new li,i=new lr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new Oe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Y_,e)}rotateY(e){return this.rotateOnAxis(K_,e)}rotateZ(e){return this.rotateOnAxis(q_,e)}translateOnAxis(e,t){return $_.copy(e).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Y_,e)}translateY(e){return this.translateOnAxis(K_,e)}translateZ(e){return this.translateOnAxis(q_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tu.copy(e):tu.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(da,tu,this.up):Li.lookAt(tu,da,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),zs.setFromRotationMatrix(Li),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Z_),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(UM),Qd.child=e,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Z_),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,DM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,NM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),c=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new N(0,1,0),xt.DEFAULT_MATRIX_AUTO_UPDATE=!0,xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new N,Ii=new N,eh=new N,Di=new N,Vs=new N,Gs=new N,J_=new N,th=new N,nh=new N,ih=new N,rh=new et,sh=new et,oh=new et;class qn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kn.subVectors(r,t),Ii.subVectors(i,t),eh.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Ii),l=Kn.dot(eh),u=Ii.dot(Ii),f=Ii.dot(eh),c=o*u-a*a;if(c===0)return s.set(0,0,0),null;const d=1/c,p=(u*l-a*f)*d,g=(o*f-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return rh.setScalar(0),sh.setScalar(0),oh.setScalar(0),rh.fromBufferAttribute(e,t),sh.fromBufferAttribute(e,i),oh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rh,s.x),o.addScaledVector(sh,s.y),o.addScaledVector(oh,s.z),o}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),Ii.subVectors(e,t),Kn.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Kn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Vs.subVectors(r,i),Gs.subVectors(s,i),th.subVectors(e,i);const l=Vs.dot(th),u=Gs.dot(th);if(l<=0&&u<=0)return t.copy(i);nh.subVectors(e,r);const f=Vs.dot(nh),c=Gs.dot(nh);if(f>=0&&c<=f)return t.copy(r);const d=l*c-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Vs,o);ih.subVectors(e,s);const p=Vs.dot(ih),g=Gs.dot(ih);if(g>=0&&p<=g)return t.copy(s);const v=p*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Gs,a);const m=f*g-p*c;if(m<=0&&c-f>=0&&p-g>=0)return J_.subVectors(s,r),a=(c-f)/(c-f+(p-g)),t.copy(r).addScaledVector(J_,a);const h=1/(m+v+d);return o=v*h,a=d*h,t.copy(i).addScaledVector(Vs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},nu={h:0,s:0,l:0};function ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Vd(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ah(o,s,e+1/3),this.g=ah(o,s,e),this.b=ah(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Ht){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=Q_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Ye.workingToColorSpace($t.copy(this),e),Math.round(Ge($t.r*255,0,255))*65536+Math.round(Ge($t.g*255,0,255))*256+Math.round(Ge($t.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=f<=.5?c/(o+a):c/(2-o-a),o){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ht){Ye.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+t,hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hr),e.getHSL(nu);const i=aa(hr.h,nu.h,t),r=aa(hr.s,nu.s,t),s=aa(hr.l,nu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ne;Ne.NAMES=Q_;let FM=0;class ui extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=As,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Yf,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$f&&(i.blendSrc=this.blendSrc),this.blendDst!==Yf&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Or extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=v_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new N,iu=new $e;let OM=0;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hd,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)iu.fromBufferAttribute(this,t),iu.applyMatrix3(e),this.setXY(t,iu.x,iu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hd&&(e.usage=this.usage),e}}class ev extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tv extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ni extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kM=0;const Dn=new Be,lh=new xt,Ws=new N,En=new oi,ha=new oi,Ft=new N;class ci extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B_(e)?tv:ev)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ni(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(En.min,ha.min),En.expandByPoint(Ft),Ft.addVectors(En.max,ha.max),En.expandByPoint(Ft)):(En.expandByPoint(ha.min),En.expandByPoint(ha.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Ft.fromBufferAttribute(a,u),l&&(Ws.fromBufferAttribute(e,u),Ft.add(Ws)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new N,l[b]=new N;const u=new N,f=new N,c=new N,d=new $e,p=new $e,g=new $e,v=new N,m=new N;function h(b,E,S){u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,E),c.fromBufferAttribute(i,S),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),f.sub(u),c.sub(u),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(c,-p.y).multiplyScalar(L),m.copy(c).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(L),a[b].add(v),a[E].add(v),a[S].add(v),l[b].add(m),l[E].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,E=_.length;b<E;++b){const S=_[b],L=S.start,k=S.count;for(let H=L,W=L+k;H<W;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new N,x=new N,A=new N,w=new N;function R(b){A.fromBufferAttribute(r,b),w.copy(A);const E=a[b];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),x.crossVectors(w,E);const L=x.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,L)}for(let b=0,E=_.length;b<E;++b){const S=_[b],L=S.start,k=S.count;for(let H=L,W=L+k;H<W;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,f=new N,c=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,c=a.normalized,d=new u.constructor(l.length*f);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*f;for(let h=0;h<f;h++)d[g++]=u[p++]}return new tn(d,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,c=u.length;f<c;f++){const d=u[f],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let c=0,d=u.length;c<d;c++){const p=u[c];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],c=s[u];for(let d=0,p=c.length;d<p;d++)f.push(c[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nv=new Be,kr=new Ql,ru=new ai,iv=new N,su=new N,ou=new N,au=new N,uh=new N,lu=new N,rv=new N,uu=new N;class hn extends xt{constructor(e=new ci,t=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){lu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],c=s[l];f!==0&&(uh.fromBufferAttribute(c,e),o?lu.addScaledVector(uh,f):lu.addScaledVector(uh.sub(t),f))}t.add(lu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ru.copy(i.boundingSphere),ru.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(ru.containsPoint(kr.origin)===!1&&(kr.intersectSphere(ru,iv)===null||kr.origin.distanceToSquared(iv)>(e.far-e.near)**2))&&(nv.copy(s).invert(),kr.copy(e.ray).applyMatrix4(nv),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,c=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=y;x<A;x+=3){const w=a.getX(x),R=a.getX(x+1),b=a.getX(x+2);r=cu(this,h,e,i,u,f,c,w,R,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=cu(this,o,e,i,u,f,c,_,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=y;x<A;x+=3){const w=x,R=x+1,b=x+2;r=cu(this,h,e,i,u,f,c,w,R,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=m,y=m+1,x=m+2;r=cu(this,o,e,i,u,f,c,_,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function BM(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ai,a),l===null)return null;uu.copy(a),uu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(uu);return u<t.near||u>t.far?null:{distance:u,point:uu.clone(),object:n}}function cu(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,su),n.getVertexPosition(l,ou),n.getVertexPosition(u,au);const f=BM(n,e,t,i,su,ou,au,rv);if(f){const c=new N;qn.getBarycoord(rv,su,ou,au,c),r&&(f.uv=qn.getInterpolatedAttribute(r,a,l,u,c,new $e)),s&&(f.uv1=qn.getInterpolatedAttribute(s,a,l,u,c,new $e)),o&&(f.normal=qn.getInterpolatedAttribute(o,a,l,u,c,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new N,materialIndex:0};qn.getNormal(su,ou,au,d.normal),f.face=d,f.barycoord=c}return f}class Xs extends ci{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],c=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ni(u,3)),this.setAttribute("normal",new Ni(f,3)),this.setAttribute("uv",new Ni(c,2));function g(v,m,h,_,y,x,A,w,R,b,E){const S=x/R,L=A/b,k=x/2,H=A/2,W=w/2,Y=R+1,V=b+1;let ne=0,I=0;const $=new N;for(let q=0;q<V;q++){const ae=q*L-H;for(let Ee=0;Ee<Y;Ee++){const tt=Ee*S-k;$[v]=tt*_,$[m]=ae*y,$[h]=W,u.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[h]=w>0?1:-1,f.push($.x,$.y,$.z),c.push(Ee/R),c.push(1-q/b),ne+=1}}for(let q=0;q<b;q++)for(let ae=0;ae<R;ae++){const Ee=d+ae+Y*q,tt=d+ae+Y*(q+1),Je=d+(ae+1)+Y*(q+1),Ke=d+(ae+1)+Y*q;l.push(Ee,tt,Ke),l.push(tt,Je,Ke),I+=6}a.addGroup(p,I,E),p+=I,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=js(n[t]);for(const r in i)e[r]=i[r]}return e}function zM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const HM={clone:js,merge:nn};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=zM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ov extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new N,av=new $e,lv=new $e;class rn extends ov{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,av,lv),t.subVectors(lv,av)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Ys=1;class WM extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn($s,Ys,e,t);r.layers=this.layers,this.add(r);const s=new rn($s,Ys,e,t);s.layers=this.layers,this.add(s);const o=new rn($s,Ys,e,t);o.layers=this.layers,this.add(o);const a=new rn($s,Ys,e,t);a.layers=this.layers,this.add(a);const l=new rn($s,Ys,e,t);l.layers=this.layers,this.add(l);const u=new rn($s,Ys,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(c,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class uv extends Ut{constructor(e=[],t=Cs,i,r,s,o,a,l,u,f){super(e,t,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XM extends Nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xs(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:rr});s.uniforms.tEquirect.value=t;const o=new hn(r,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Sn),new WM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Br extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jM={type:"move"};class ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(u,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=f.position.distanceTo(c.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $M extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class YM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hd,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new N;class fh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cv=new N,fv=new et,dv=new et,KM=new N,hv=new Be,fu=new N,dh=new ai,pv=new Be,hh=new Ql;class qM extends hn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=y_,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fu),this.boundingBox.expandByPoint(fu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fu),this.boundingSphere.expandByPoint(fu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dh.copy(this.boundingSphere),dh.applyMatrix4(r),e.ray.intersectsSphere(dh)!==!1&&(pv.copy(r).invert(),hh.copy(e.ray).applyMatrix4(pv),!(this.boundingBox!==null&&hh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===y_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===XS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;fv.fromBufferAttribute(r.attributes.skinIndex,e),dv.fromBufferAttribute(r.attributes.skinWeight,e),cv.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=dv.getComponent(s);if(o!==0){const a=fv.getComponent(s);hv.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(KM.copy(cv).applyMatrix4(hv),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mv extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gv extends Ut{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Qt,f=Qt,c,d){super(null,o,a,l,u,f,r,s,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _v=new Be,ZM=new Be;class ph{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:ZM;_v.multiplyMatrices(a,t[s]),_v.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ph(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new gv(t,e,e,In,Wn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new mv),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class mh extends tn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ks=new Be,vv=new Be,du=[],yv=new oi,JM=new Be,pa=new hn,ma=new ai;class QM extends hn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,JM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),yv.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(yv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ks),ma.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ks),vv.multiplyMatrices(i,Ks),pa.matrixWorld=vv,pa.raycast(e,du);for(let o=0,a=du.length;o<a;o++){const l=du[o];l.instanceId=s,l.object=this,t.push(l)}du.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new gv(new Float32Array(r*this.count),r,this.count,ad,Wn));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gh=new N,eE=new N,tE=new Oe;class zr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=gh.subVectors(i,t).cross(eE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tE.getNormalMatrix(e),r=this.coplanarPoint(gh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new ai,nE=new $e(.5,.5),hu=new N;class _h{constructor(e=new zr,t=new zr,i=new zr,r=new zr,s=new zr,o=new zr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],f=s[4],c=s[5],d=s[6],p=s[7],g=s[8],v=s[9],m=s[10],h=s[11],_=s[12],y=s[13],x=s[14],A=s[15];if(r[0].setComponents(u-o,p-f,h-g,A-_).normalize(),r[1].setComponents(u+o,p+f,h+g,A+_).normalize(),r[2].setComponents(u+a,p+c,h+v,A+y).normalize(),r[3].setComponents(u-a,p-c,h-v,A-y).normalize(),i)r[4].setComponents(l,d,m,x).normalize(),r[5].setComponents(u-l,p-d,h-m,A-x).normalize();else if(r[4].setComponents(u-l,p-d,h-m,A-x).normalize(),t===si)r[5].setComponents(u+l,p+d,h+m,A+x).normalize();else if(t===$l)r[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const t=nE.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(hu.x=r.normal.x>0?e.max.x:e.min.x,hu.y=r.normal.y>0?e.max.y:e.min.y,hu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xv extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pu=new N,mu=new N,Sv=new Be,ga=new Ql,gu=new ai,vh=new N,Mv=new N;class yh extends xt{constructor(e=new ci,t=new xv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)pu.fromBufferAttribute(t,r-1),mu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=pu.distanceTo(mu);e.setAttribute("lineDistance",new Ni(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gu.copy(i.boundingSphere),gu.applyMatrix4(r),gu.radius+=s,e.ray.intersectsSphere(gu)===!1)return;Sv.copy(r).invert(),ga.copy(e.ray).applyMatrix4(Sv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=u){const h=f.getX(v),_=f.getX(v+1),y=_u(this,e,ga,l,h,_,v);y&&t.push(y)}if(this.isLineLoop){const v=f.getX(g-1),m=f.getX(p),h=_u(this,e,ga,l,v,m,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=u){const h=_u(this,e,ga,l,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=_u(this,e,ga,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _u(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(pu.fromBufferAttribute(a,r),mu.fromBufferAttribute(a,s),t.distanceSqToSegment(pu,mu,vh,Mv)>i)return;vh.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(vh);if(!(u<e.near||u>e.far))return{distance:u,point:Mv.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ev=new N,Tv=new N;class iE extends yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ev.fromBufferAttribute(t,r),Tv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ev.distanceTo(Tv);e.setAttribute("lineDistance",new Ni(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rE extends yh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wv extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Av=new Be,xh=new Ql,vu=new ai,yu=new N;class sE extends xt{constructor(e=new ci,t=new wv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vu.copy(i.boundingSphere),vu.applyMatrix4(r),vu.radius+=s,e.ray.intersectsSphere(vu)===!1)return;Av.copy(r).invert(),xh.copy(e.ray).applyMatrix4(Av);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,c=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=u.getX(g);yu.fromBufferAttribute(c,m),Rv(yu,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++)yu.fromBufferAttribute(c,g),Rv(yu,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rv(n,e,t,i,r,s,o){const a=xh.distanceSqToPoint(n);if(a<t){const l=new N;xh.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Cv extends Ut{constructor(e,t,i=Dr,r,s,o,a=Qt,l=Qt,u,f=na,c=1){if(f!==na&&f!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:c};super(d,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bv extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xu extends ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,c=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<f;h++){const _=h*d-o;for(let y=0;y<u;y++){const x=y*c-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const y=_+u*h,x=_+u*(h+1),A=_+1+u*(h+1),w=_+1+u*h;p.push(y,x,w),p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new Ni(g,3)),this.setAttribute("normal",new Ni(v,3)),this.setAttribute("uv",new Ni(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Su extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D_,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fi extends Su{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class oE extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aE extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Mu(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function uE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Pv(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Lv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class _a{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cE extends _a{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:b_,endingEnd:b_}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case P_:s=e,a=2*t-i;break;case L_:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case P_:o=e,l=2*i-t;break;case L_:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const u=(i-t)*.5,f=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-i),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,f=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,h=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*v+.5*g,x=p*m-p*v;for(let A=0;A!==a;++A)s[A]=h*o[f+A]+_*o[u+A]+y*o[l+A]+x*o[c+A];return s}}class fE extends _a{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,f=(i-t)/(r-t),c=1-f;for(let d=0;d!==a;++d)s[d]=o[u+d]*c+o[l+d]*f;return s}}class dE extends _a{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mu(t,this.TimeBufferType),this.values=Mu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mu(e.times,Array),values:Mu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case sa:t=this.InterpolantFactoryMethodLinear;break;case Bd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return Bd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lE(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Bd,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],f=e[a+1];if(u!==f&&(a!==1||u!==e[0]))if(r)l=!0;else{const c=a*i,d=c-i,p=c+i;for(let g=0;g!==i;++g){const v=t[c+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const c=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[c+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,u=0;u!==i;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Zn.prototype.ValueTypeName="",Zn.prototype.TimeBufferType=Float32Array,Zn.prototype.ValueBufferType=Float32Array,Zn.prototype.DefaultInterpolation=sa;class qs extends Zn{constructor(e,t,i){super(e,t,i)}}qs.prototype.ValueTypeName="bool",qs.prototype.ValueBufferType=Array,qs.prototype.DefaultInterpolation=ra,qs.prototype.InterpolantFactoryMethodLinear=void 0,qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Iv extends Zn{constructor(e,t,i,r){super(e,t,i,r)}}Iv.prototype.ValueTypeName="color";class Zs extends Zn{constructor(e,t,i,r){super(e,t,i,r)}}Zs.prototype.ValueTypeName="number";class hE extends _a{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let u=e*a;for(let f=u+a;u!==f;u+=4)lr.slerpFlat(s,0,o,u-a,o,u,l);return s}}class Js extends Zn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new hE(this.times,this.values,this.getValueSize(),e)}}Js.prototype.ValueTypeName="quaternion",Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends Zn{constructor(e,t,i){super(e,t,i)}}Qs.prototype.ValueTypeName="string",Qs.prototype.ValueBufferType=Array,Qs.prototype.DefaultInterpolation=ra,Qs.prototype.InterpolantFactoryMethodLinear=void 0,Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends Zn{constructor(e,t,i,r){super(e,t,i,r)}}eo.prototype.ValueTypeName="vector";class pE{constructor(e="",t=-1,i=[],r=jS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(gE(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(Zn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const f=uE(l);l=Pv(l,1,f),u=Pv(u,1,f),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new Zs(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],f=u.name.match(s);if(f&&f.length>1){const c=f[1];let d=r[c];d||(r[c]=d=[]),d.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(c,d,p,g,v){if(p.length!==0){const m=[],h=[];Lv(p,m,h,g),m.length!==0&&v.push(new c(d,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let c=0;c<u.length;c++){const d=u[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const m=[],h=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),h.push(y.morphTarget===v?1:0)}r.push(new Zs(".morphTargetInfluence["+v+"]",m,h))}l=p.length*o}else{const p=".bones["+t[c].name+"]";i(eo,p+".position",d,"pos",r),i(Js,p+".quaternion",d,"rot",r),i(eo,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function mE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zs;case"vector":case"vector2":case"vector3":case"vector4":return eo;case"color":return Iv;case"quaternion":return Js;case"bool":case"boolean":return qs;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function gE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mE(n.type);if(n.times===void 0){const t=[],i=[];Lv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ui={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class _E{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,c){return u.push(f,c),this},this.removeHandler=function(f){const c=u.indexOf(f);return c!==-1&&u.splice(c,2),this},this.getHandler=function(f){for(let c=0,d=u.length;c<d;c+=2){const p=u[c],g=u[c+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const vE=new _E;class to{constructor(e){this.manager=e!==void 0?e:vE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}to.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi={};class yE extends Error{constructor(e,t){super(e),this.response=t}}class Dv extends to{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ui.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:i,onError:r});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=Fi[e],c=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(h){_();function _(){c.read().then(({done:y,value:x})=>{if(y)h.close();else{v+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let w=0,R=f.length;w<R;w++){const b=f[w];b.onProgress&&b.onProgress(A)}h.enqueue(x),_()}},y=>{h.error(y)})}}});return new Response(m)}else throw new yE(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a==="")return u.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{Ui.add(`file:${e}`,u);const f=Fi[e];delete Fi[e];for(let c=0,d=f.length;c<d;c++){const p=f[c];p.onLoad&&p.onLoad(u)}}).catch(u=>{const f=Fi[e];if(f===void 0)throw this.manager.itemError(e),u;delete Fi[e];for(let c=0,d=f.length;c<d;c++){const p=f[c];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const no=new WeakMap;class xE extends to{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ui.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let c=no.get(o);c===void 0&&(c=[],no.set(o,c)),c.push({onLoad:t,onError:r})}return o}const a=la("img");function l(){f(),t&&t(this);const c=no.get(this)||[];for(let d=0;d<c.length;d++){const p=c[d];p.onLoad&&p.onLoad(this)}no.delete(this),s.manager.itemEnd(e)}function u(c){f(),r&&r(c),Ui.remove(`image:${e}`);const d=no.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(c)}no.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ui.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class SE extends to{constructor(e){super(e)}load(e,t,i,r){const s=new Ut,o=new xE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Eu extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Sh=new Be,Nv=new N,Uv=new N;class Mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _h,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nv),Uv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uv),t.updateMatrixWorld(),Sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ME extends Mh{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ds*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class EE extends Eu{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ME}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fv=new Be,va=new N,Eh=new N;class TE extends Mh{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),Eh.copy(i.position),Eh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Eh),i.updateMatrixWorld(),r.makeTranslation(-va.x,-va.y,-va.z),Fv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fv,i.coordinateSystem,i.reversedDepth)}}class wE extends Eu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new TE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Th extends ov{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class AE extends Mh{constructor(){super(new Th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ov extends Eu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new AE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RE extends Eu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ya{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const wh=new WeakMap;class CE extends to{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ui.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(u=>{if(wh.has(o)===!0)r&&r(wh.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(u),s.manager.itemEnd(e),u});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Ui.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),wh.set(l,u),Ui.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ui.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class bE extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ah="\\[\\]\\.:\\/",PE=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",LE="[^"+Ah.replace("\\.","")+"]",IE=/((?:WC+[\/:])*)/.source.replace("WC",Rh),DE=/(WCOD+)?/.source.replace("WCOD",LE),NE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),UE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),FE=new RegExp("^"+IE+DE+NE+UE+"$"),OE=["material","materials","bones","map"];class kE{constructor(e,t,i){const r=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class st{constructor(e,t,i){this.path=t,this.parsedPath=i||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,i):new st(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(PE,"")}static parseTrackName(e){const t=FE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);OE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=kE,st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray],st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function kv(n,e,t,i){const r=BE(i);switch(t){case A_:return n*e;case ad:return n*e/r.components*r.byteLength;case ld:return n*e/r.components*r.byteLength;case C_:return n*e*2/r.components*r.byteLength;case ud:return n*e*2/r.components*r.byteLength;case R_:return n*e*3/r.components*r.byteLength;case In:return n*e*4/r.components*r.byteLength;case cd:return n*e*4/r.components*r.byteLength;case Vl:case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dd:case pd:return Math.max(n,16)*Math.max(e,8)/4;case fd:case hd:return Math.max(n,8)*Math.max(e,8)/2;case md:case gd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Td:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Id:case Dd:case Nd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ud:case Fd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Od:case kd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BE(n){switch(n){case ri:case M_:return{byteLength:1,components:1};case Qo:case E_:case ea:return{byteLength:2,components:1};case sd:case od:return{byteLength:2,components:4};case Dr:case rd:case Wn:return{byteLength:4,components:1};case T_:case w_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zE(n){const e=new WeakMap;function t(a,l){const u=a.array,f=a.usage,c=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:c}}function i(a,l,u){const f=l.array,c=l.updateRanges;if(n.bindBuffer(u,a),c.length===0)n.bufferSubData(u,0,f);else{c.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<c.length;p++){const g=c[d],v=c[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,c[d]=v)}c.length=d+1;for(let p=0,g=c.length;p<g;p++){const v=c[p];n.bufferSubData(u,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VE=`#ifdef USE_ALPHAHASH
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
#endif`,GE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
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
#endif`,YE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KE=`#ifdef USE_BATCHING
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
#endif`,qE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eT=`#ifdef USE_IRIDESCENCE
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
#endif`,tT=`#ifdef USE_BUMPMAP
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
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cT=`#define PI 3.141592653589793
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
} // validated`,fT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dT=`vec3 transformedNormal = objectNormal;
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
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_T="gl_FragColor = linearToOutputTexel( gl_FragColor );",vT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yT=`#ifdef USE_ENVMAP
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
#endif`,xT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
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
#endif`,TT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CT=`#ifdef USE_GRADIENTMAP
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
}`,bT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IT=`uniform bool receiveShadow;
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
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,NT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kT=`PhysicalMaterial material;
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
#endif`,BT=`struct PhysicalMaterial {
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
}`,zT=`
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
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
#endif`,VT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qT=`#if defined( USE_POINTS_UV )
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
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nw=`#ifdef USE_MORPHTARGETS
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
#endif`,iw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uw=`#ifdef USE_NORMALMAP
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
#endif`,cw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_w=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ww=`float getShadowMask() {
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
}`,Aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rw=`#ifdef USE_SKINNING
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
#endif`,Cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bw=`#ifdef USE_SKINNING
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
#endif`,Pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nw=`#ifdef USE_TRANSMISSION
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
#endif`,Uw=`#ifdef USE_TRANSMISSION
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ze={alphahash_fragment:HE,alphahash_pars_fragment:VE,alphamap_fragment:GE,alphamap_pars_fragment:WE,alphatest_fragment:XE,alphatest_pars_fragment:jE,aomap_fragment:$E,aomap_pars_fragment:YE,batching_pars_vertex:KE,batching_vertex:qE,begin_vertex:ZE,beginnormal_vertex:JE,bsdfs:QE,iridescence_fragment:eT,bumpmap_pars_fragment:tT,clipping_planes_fragment:nT,clipping_planes_pars_fragment:iT,clipping_planes_pars_vertex:rT,clipping_planes_vertex:sT,color_fragment:oT,color_pars_fragment:aT,color_pars_vertex:lT,color_vertex:uT,common:cT,cube_uv_reflection_fragment:fT,defaultnormal_vertex:dT,displacementmap_pars_vertex:hT,displacementmap_vertex:pT,emissivemap_fragment:mT,emissivemap_pars_fragment:gT,colorspace_fragment:_T,colorspace_pars_fragment:vT,envmap_fragment:yT,envmap_common_pars_fragment:xT,envmap_pars_fragment:ST,envmap_pars_vertex:MT,envmap_physical_pars_fragment:DT,envmap_vertex:ET,fog_vertex:TT,fog_pars_vertex:wT,fog_fragment:AT,fog_pars_fragment:RT,gradientmap_pars_fragment:CT,lightmap_pars_fragment:bT,lights_lambert_fragment:PT,lights_lambert_pars_fragment:LT,lights_pars_begin:IT,lights_toon_fragment:NT,lights_toon_pars_fragment:UT,lights_phong_fragment:FT,lights_phong_pars_fragment:OT,lights_physical_fragment:kT,lights_physical_pars_fragment:BT,lights_fragment_begin:zT,lights_fragment_maps:HT,lights_fragment_end:VT,logdepthbuf_fragment:GT,logdepthbuf_pars_fragment:WT,logdepthbuf_pars_vertex:XT,logdepthbuf_vertex:jT,map_fragment:$T,map_pars_fragment:YT,map_particle_fragment:KT,map_particle_pars_fragment:qT,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:JT,morphinstance_vertex:QT,morphcolor_vertex:ew,morphnormal_vertex:tw,morphtarget_pars_vertex:nw,morphtarget_vertex:iw,normal_fragment_begin:rw,normal_fragment_maps:sw,normal_pars_fragment:ow,normal_pars_vertex:aw,normal_vertex:lw,normalmap_pars_fragment:uw,clearcoat_normal_fragment_begin:cw,clearcoat_normal_fragment_maps:fw,clearcoat_pars_fragment:dw,iridescence_pars_fragment:hw,opaque_fragment:pw,packing:mw,premultiplied_alpha_fragment:gw,project_vertex:_w,dithering_fragment:vw,dithering_pars_fragment:yw,roughnessmap_fragment:xw,roughnessmap_pars_fragment:Sw,shadowmap_pars_fragment:Mw,shadowmap_pars_vertex:Ew,shadowmap_vertex:Tw,shadowmask_pars_fragment:ww,skinbase_vertex:Aw,skinning_pars_vertex:Rw,skinning_vertex:Cw,skinnormal_vertex:bw,specularmap_fragment:Pw,specularmap_pars_fragment:Lw,tonemapping_fragment:Iw,tonemapping_pars_fragment:Dw,transmission_fragment:Nw,transmission_pars_fragment:Uw,uv_pars_fragment:Fw,uv_pars_vertex:Ow,uv_vertex:kw,worldpos_vertex:Bw,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},le={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},di={basic:{uniforms:nn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:nn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:nn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:nn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:nn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:nn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:nn([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:nn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:nn([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:nn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:nn([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:nn([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:nn([le.lights,le.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};di.physical={uniforms:nn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Tu={r:0,b:0,g:0},Vr=new li,zw=new Be;function Hw(n,e,t,i,r,s,o){const a=new Ne(0);let l=s===!0?0:1,u,f,c=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const A=g(y);A===null?h(a,l):A&&A.isColor&&(h(A,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Bl)?(f===void 0&&(f=new hn(new Xs(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:js(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Vr.copy(x.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(zw.makeRotationFromEuler(Vr)),f.material.toneMapped=Ye.getTransfer(A.colorSpace)!==ot,(c!==A||d!==A.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,c=A,d=A.version,p=n.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new hn(new xu(2,2),new pr({name:"BackgroundMaterial",uniforms:js(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(A.colorSpace)!==ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(c!==A||d!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,c=A,d=A.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function h(y,x){y.getRGB(Tu,sv(n)),i.buffers.color.setClear(Tu.r,Tu.g,Tu.b,x,o)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(a,l)},render:v,addToRenderList:m,dispose:_}}function Vw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,L,k,H,W){let Y=!1;const V=c(H,k,L);s!==V&&(s=V,u(s.object)),Y=p(S,H,k,W),Y&&g(S,H,k,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(S,L,k,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function f(S){return n.deleteVertexArray(S)}function c(S,L,k){const H=k.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let Y=W[L.id];Y===void 0&&(Y={},W[L.id]=Y);let V=Y[H];return V===void 0&&(V=d(l()),Y[H]=V),V}function d(S){const L=[],k=[],H=[];for(let W=0;W<t;W++)L[W]=0,k[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,L,k,H){const W=s.attributes,Y=L.attributes;let V=0;const ne=k.getAttributes();for(const I in ne)if(ne[I].location>=0){const q=W[I];let ae=Y[I];if(ae===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),q===void 0||q.attribute!==ae||ae&&q.data!==ae.data)return!0;V++}return s.attributesNum!==V||s.index!==H}function g(S,L,k,H){const W={},Y=L.attributes;let V=0;const ne=k.getAttributes();for(const I in ne)if(ne[I].location>=0){let q=Y[I];q===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const ae={};ae.attribute=q,q&&q.data&&(ae.data=q.data),W[I]=ae,V++}s.attributes=W,s.attributesNum=V,s.index=H}function v(){const S=s.newAttributes;for(let L=0,k=S.length;L<k;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const k=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;k[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),W[S]!==L&&(n.vertexAttribDivisor(S,L),W[S]=L)}function _(){const S=s.newAttributes,L=s.enabledAttributes;for(let k=0,H=L.length;k<H;k++)L[k]!==S[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function y(S,L,k,H,W,Y,V){V===!0?n.vertexAttribIPointer(S,L,k,W,Y):n.vertexAttribPointer(S,L,k,H,W,Y)}function x(S,L,k,H){v();const W=H.attributes,Y=k.getAttributes(),V=L.defaultAttributeValues;for(const ne in Y){const I=Y[ne];if(I.location>=0){let $=W[ne];if($===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const q=$.normalized,ae=$.itemSize,Ee=e.get($);if(Ee===void 0)continue;const tt=Ee.buffer,Je=Ee.type,Ke=Ee.bytesPerElement,X=Je===n.INT||Je===n.UNSIGNED_INT||$.gpuType===rd;if($.isInterleavedBufferAttribute){const Z=$.data,me=Z.stride,De=$.offset;if(Z.isInstancedInterleavedBuffer){for(let we=0;we<I.locationSize;we++)h(I.location+we,Z.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let we=0;we<I.locationSize;we++)m(I.location+we);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let we=0;we<I.locationSize;we++)y(I.location+we,ae/I.locationSize,Je,q,me*Ke,(De+ae/I.locationSize*we)*Ke,X)}else{if($.isInstancedBufferAttribute){for(let Z=0;Z<I.locationSize;Z++)h(I.location+Z,$.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Z=0;Z<I.locationSize;Z++)m(I.location+Z);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Z=0;Z<I.locationSize;Z++)y(I.location+Z,ae/I.locationSize,Je,q,ae*Ke,ae/I.locationSize*Z*Ke,X)}}else if(V!==void 0){const q=V[ne];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(I.location,q);break;case 3:n.vertexAttrib3fv(I.location,q);break;case 4:n.vertexAttrib4fv(I.location,q);break;default:n.vertexAttrib1fv(I.location,q)}}}}_()}function A(){b();for(const S in i){const L=i[S];for(const k in L){const H=L[k];for(const W in H)f(H[W].object),delete H[W];delete L[k]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const k in L){const H=L[k];for(const W in H)f(H[W].object),delete H[W];delete L[k]}delete i[S.id]}function R(S){for(const L in i){const k=i[L];if(k[S.id]===void 0)continue;const H=k[S.id];for(const W in H)f(H[W].object),delete H[W];delete k[S.id]}}function b(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Gw(n,e,t){let i;function r(u){i=u}function s(u,f){n.drawArrays(i,u,f),t.update(f,i,1)}function o(u,f,c){c!==0&&(n.drawArraysInstanced(i,u,f,c),t.update(f,i,c))}function a(u,f,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,c);let p=0;for(let g=0;g<c;g++)p+=f[g];t.update(p,i,1)}function l(u,f,c,d){if(c===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],f[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,c);let g=0;for(let v=0;v<c;v++)g+=f[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ww(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==In&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Wn&&!b)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const c=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function Xw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const p=c.length!==0||d||i!==0||r;return r=d,i=c.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){t=f(c,d,0)},this.setState=function(c,d,p){const g=c.clippingPlanes,v=c.clipIntersection,m=c.clipShadows,h=n.get(c);if(!r||g===null||g.length===0||s&&!m)s?f(null):u();else{const _=s?0:i,y=_*4;let x=h.clippingState||null;l.value=x,x=f(g,d,y,p);for(let A=0;A!==y;++A)x[A]=t[A];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(c,d,p,g){const v=c!==null?c.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==v;++y,x+=4)o.copy(c[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function jw(n){let e=new WeakMap;function t(o,a){return a===nd?o.mapping=Cs:a===id&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nd||a===id)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new XM(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const io=4,zv=[.125,.215,.35,.446,.526,.582],Gr=20,Ch=new Th,Hv=new Ne;let bh=null,Ph=0,Lh=0,Ih=!1;const Wr=(1+Math.sqrt(5))/2,ro=1/Wr,Vv=[new N(-Wr,ro,0),new N(Wr,ro,0),new N(-ro,0,Wr),new N(ro,0,Wr),new N(0,Wr,-ro),new N(0,Wr,ro),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],$w=new N;class Gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=$w}=s;bh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Ph,Lh),this._renderer.xr.enabled=Ih,e.scissorTest=!1,wu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ea,format:In,colorSpace:en,depthBuffer:!1},r=Wv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yw(s)),this._blurMaterial=Kw(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Ch)}_sceneToCubeUV(e,t,i,r,s){const l=new rn(90,1,t,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,p=c.toneMapping;c.getClearColor(Hv),c.toneMapping=sr,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null));const v=new Or({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new hn(new Xs,v);let h=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,h=!0):(v.color.copy(Hv),h=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):x===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const A=this._cubeSize;wu(r,x*A,y>2?A:0,A,A),c.setRenderTarget(r),h&&c.render(m,l),c.render(e,l)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=p,c.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Cs||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ch)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vv[(r-s-1)%Vv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new hn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gr-1),v=s/g,m=isFinite(s)?1+Math.floor(f*v):Gr;m>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const h=[];let _=0;for(let R=0;R<Gr;++R){const b=R/v,E=Math.exp(-b*b/2);h.push(E),R===0?_+=E:R<m&&(_+=2*E)}for(let R=0;R<h.length;R++)h[R]=h[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[r],A=3*x*(r>y-io?r-y+io:0),w=4*(this._cubeSize-x);wu(t,A,w,3*x,2*x),l.setRenderTarget(t),l.render(c,Ch)}}function Yw(n){const e=[],t=[],i=[];let r=n;const s=n-io+1+zv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-io?l=zv[o-n+io-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,c=1+u,d=[f,f,c,f,c,c,f,f,c,c,f,c],p=6,g=6,v=3,m=2,h=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,b=w>2?0:-1,E=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];_.set(E,v*g*w),y.set(d,m*g*w);const S=[w,w,w,w,w,w];x.set(S,h*g*w)}const A=new ci;A.setAttribute("position",new tn(_,v)),A.setAttribute("uv",new tn(y,m)),A.setAttribute("faceIndex",new tn(x,h)),e.push(A),r>io&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wv(n,e,t){const i=new Nr(n,e,t);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Kw(n,e,t){const i=new Float32Array(Gr),r=new N(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Xv(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function jv(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Dh(){return`

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
	`}function qw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===nd||l===id,f=l===Cs||l===bs;if(u||f){let c=e.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Gv(n)),c=u?t.fromEquirectangular(a,c):t.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(t===null&&(t=new Gv(n)),c=u?t.fromEquirectangular(a):t.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Zw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ua("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jw(n,e,t,i){const r={},s=new WeakMap;function o(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function u(c){const d=[],p=c.index,g=c.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){const A=_[y+0],w=_[y+1],R=_[y+2];d.push(A,w,w,R,R,A)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const A=y+0,w=y+1,R=y+2;d.push(A,w,w,R,R,A)}}else return;const m=new(B_(d)?tv:ev)(d,1);m.version=v;const h=s.get(c);h&&e.remove(h),s.set(c,m)}function f(c){const d=s.get(c);if(d){const p=c.index;p!==null&&d.version<p.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:f}}function Qw(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function u(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function f(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function c(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_]*v[_];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=c}function e1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function t1(n,e,t){const i=new WeakMap,r=new et;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==c){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*A*4*c),R=new G_(w,x,A,c);R.type=Wn,R.needsUpdate=!0;const b=y*4;for(let S=0;S<c;S++){const L=m[S],k=h[S],H=_[S],W=x*A*4*S;for(let Y=0;Y<L.count;Y++){const V=Y*b;p===!0&&(r.fromBufferAttribute(L,Y),w[W+V+0]=r.x,w[W+V+1]=r.y,w[W+V+2]=r.z,w[W+V+3]=0),g===!0&&(r.fromBufferAttribute(k,Y),w[W+V+4]=r.x,w[W+V+5]=r.y,w[W+V+6]=r.z,w[W+V+7]=0),v===!0&&(r.fromBufferAttribute(H,Y),w[W+V+8]=r.x,w[W+V+9]=r.y,w[W+V+10]=r.z,w[W+V+11]=H.itemSize===4?r.w:1)}}d={count:c,texture:R,size:new $e(x,A)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<u.length;v++)p+=u[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function n1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,c=e.get(l,f);if(r.get(c)!==u&&(e.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return c}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const $v=new Ut,Yv=new Cv(1,1),Kv=new G_,qv=new CM,Zv=new uv,Jv=[],Qv=[],e0=new Float32Array(16),t0=new Float32Array(9),n0=new Float32Array(4);function so(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jv[r];if(s===void 0&&(s=new Float32Array(r),Jv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Au(n,e){let t=Qv[e];t===void 0&&(t=new Int32Array(e),Qv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function i1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function r1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function s1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function a1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;n0.set(i),n.uniformMatrix2fv(this.addr,!1,n0),It(t,i)}}function l1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;t0.set(i),n.uniformMatrix3fv(this.addr,!1,t0),It(t,i)}}function u1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;e0.set(i),n.uniformMatrix4fv(this.addr,!1,e0),It(t,i)}}function c1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function p1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function g1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function v1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yv.compareFunction=U_,s=Yv):s=$v,t.setTexture2D(e||s,r)}function y1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qv,r)}function x1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zv,r)}function S1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kv,r)}function M1(n){switch(n){case 5126:return i1;case 35664:return r1;case 35665:return s1;case 35666:return o1;case 35674:return a1;case 35675:return l1;case 35676:return u1;case 5124:case 35670:return c1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return h1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return S1}}function E1(n,e){n.uniform1fv(this.addr,e)}function T1(n,e){const t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function w1(n,e){const t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function A1(n,e){const t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function R1(n,e){const t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C1(n,e){const t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function b1(n,e){const t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P1(n,e){n.uniform1iv(this.addr,e)}function L1(n,e){n.uniform2iv(this.addr,e)}function I1(n,e){n.uniform3iv(this.addr,e)}function D1(n,e){n.uniform4iv(this.addr,e)}function N1(n,e){n.uniform1uiv(this.addr,e)}function U1(n,e){n.uniform2uiv(this.addr,e)}function F1(n,e){n.uniform3uiv(this.addr,e)}function O1(n,e){n.uniform4uiv(this.addr,e)}function k1(n,e,t){const i=this.cache,r=e.length,s=Au(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$v,s[o])}function B1(n,e,t){const i=this.cache,r=e.length,s=Au(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||qv,s[o])}function z1(n,e,t){const i=this.cache,r=e.length,s=Au(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Zv,s[o])}function H1(n,e,t){const i=this.cache,r=e.length,s=Au(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kv,s[o])}function V1(n){switch(n){case 5126:return E1;case 35664:return T1;case 35665:return w1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return b1;case 5124:case 35670:return P1;case 35667:case 35671:return L1;case 35668:case 35672:return I1;case 35669:case 35673:return D1;case 5125:return N1;case 36294:return U1;case 36295:return F1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return H1}}class G1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M1(t.type)}}class W1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V1(t.type)}}class X1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function i0(n,e){n.seq.push(e),n.map[e.id]=e}function j1(n,e,t){const i=n.name,r=i.length;for(Nh.lastIndex=0;;){const s=Nh.exec(i),o=Nh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){i0(t,u===void 0?new G1(a,n,e):new W1(a,n,e));break}else{let c=t.map[a];c===void 0&&(c=new X1(a),i0(t,c)),t=c}}}class Ru{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);j1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function r0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $1=37297;let Y1=0;function K1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const s0=new Oe;function q1(n){Ye._getMatrix(s0,Ye.workingColorSpace,n);const e=`mat3( ${s0.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case jl:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function o0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+K1(n.getShaderSource(e),a)}else return s}function Z1(n,e){const t=q1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J1(n,e){let t;switch(e){case kS:t="Linear";break;case BS:t="Reinhard";break;case zS:t="Cineon";break;case HS:t="ACESFilmic";break;case GS:t="AgX";break;case WS:t="Neutral";break;case VS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cu=new N;function Q1(){Ye.getLuminanceCoefficients(Cu);const n=Cu.x.toFixed(4),e=Cu.y.toFixed(4),t=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function tA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xa(n){return n!==""}function a0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(n){return n.replace(iA,sA)}const rA=new Map;function sA(n,e){let t=ze[e];if(t===void 0){const i=rA.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uh(t)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(n){return n.replace(oA,aA)}function aA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function c0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function uA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case bs:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function fA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case v_:e="ENVMAP_BLENDING_MULTIPLY";break;case FS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function dA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lA(t),u=uA(t),f=cA(t),c=fA(t),d=dA(t),p=eA(t),g=tA(s),v=r.createProgram();let m,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),h.length>0&&(h+=`
`)):(m=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),h=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?ze.tonemapping_pars_fragment:"",t.toneMapping!==sr?J1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Z1("linearToOutputTexel",t.outputColorSpace),Q1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),o=Uh(o),o=a0(o,t),o=l0(o,t),a=Uh(a),a=a0(a,t),a=l0(a,t),o=u0(o),a=u0(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===F_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===F_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=_+m+o,x=_+h+a,A=r0(r,r.VERTEX_SHADER,y),w=r0(r,r.FRAGMENT_SHADER,x);r.attachShader(v,A),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(L){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(A)||"",W=r.getShaderInfoLog(w)||"",Y=k.trim(),V=H.trim(),ne=W.trim();let I=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,w);else{const q=o0(r,A,"vertex"),ae=o0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+q+`
`+ae)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(V===""||ne==="")&&($=!1);$&&(L.diagnostics={runnable:I,programLog:Y,vertexShader:{log:V,prefix:m},fragmentShader:{log:ne,prefix:h}})}r.deleteShader(A),r.deleteShader(w),b=new Ru(r,v),E=nA(r,v)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,$1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gA(e),t.set(e,i)),i}}class gA{constructor(e){this.id=pA++,this.code=e,this.usedTimes=0}}function _A(n,e,t,i,r,s,o){const a=new j_,l=new mA,u=new Set,f=[],c=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,L,k,H){const W=k.fog,Y=H.geometry,V=E.isMeshStandardMaterial?k.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),I=ne&&ne.mapping===Bl?ne.image.height:null,$=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ae=q!==void 0?q.length:0;let Ee=0;Y.morphAttributes.position!==void 0&&(Ee=1),Y.morphAttributes.normal!==void 0&&(Ee=2),Y.morphAttributes.color!==void 0&&(Ee=3);let tt,Je,Ke,X;if($){const nt=di[$];tt=nt.vertexShader,Je=nt.fragmentShader}else tt=E.vertexShader,Je=E.fragmentShader,l.update(E),Ke=l.getVertexShaderID(E),X=l.getFragmentShaderID(E);const Z=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),De=H.isInstancedMesh===!0,we=H.isBatchedMesh===!0,qe=!!E.map,Yt=!!E.matcap,P=!!ne,mt=!!E.aoMap,Fe=!!E.lightMap,Pe=!!E.bumpMap,ve=!!E.normalMap,gt=!!E.displacementMap,ye=!!E.emissiveMap,He=!!E.metalnessMap,Ot=!!E.roughnessMap,At=E.anisotropy>0,C=E.clearcoat>0,M=E.dispersion>0,O=E.iridescence>0,j=E.sheen>0,J=E.transmission>0,G=At&&!!E.anisotropyMap,Te=C&&!!E.clearcoatMap,se=C&&!!E.clearcoatNormalMap,xe=C&&!!E.clearcoatRoughnessMap,Se=O&&!!E.iridescenceMap,ie=O&&!!E.iridescenceThicknessMap,fe=j&&!!E.sheenColorMap,be=j&&!!E.sheenRoughnessMap,Me=!!E.specularMap,ue=!!E.specularColorMap,ke=!!E.specularIntensityMap,D=J&&!!E.transmissionMap,re=J&&!!E.thicknessMap,oe=!!E.gradientMap,pe=!!E.alphaMap,ee=E.alphaTest>0,K=!!E.alphaHash,_e=!!E.extensions;let Ue=sr;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const ct={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:tt,fragmentShader:Je,defines:E.defines,customVertexShaderID:Ke,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:we,batchingColor:we&&H._colorsTexture!==null,instancing:De,instancingColor:De&&H.instanceColor!==null,instancingMorph:De&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:en,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:Yt,envMap:P,envMapMode:P&&ne.mapping,envMapCubeUVHeight:I,aoMap:mt,lightMap:Fe,bumpMap:Pe,normalMap:ve,displacementMap:d&&gt,emissiveMap:ye,normalMapObjectSpace:ve&&E.normalMapType===qS,normalMapTangentSpace:ve&&E.normalMapType===D_,metalnessMap:He,roughnessMap:Ot,anisotropy:At,anisotropyMap:G,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:M,iridescence:O,iridescenceMap:Se,iridescenceThicknessMap:ie,sheen:j,sheenColorMap:fe,sheenRoughnessMap:be,specularMap:Me,specularColorMap:ue,specularIntensityMap:ke,transmission:J,transmissionMap:D,thicknessMap:re,gradientMap:oe,opaque:E.transparent===!1&&E.blending===As&&E.alphaToCoverage===!1,alphaMap:pe,alphaTest:ee,alphaHash:K,combine:E.combine,mapUv:qe&&v(E.map.channel),aoMapUv:mt&&v(E.aoMap.channel),lightMapUv:Fe&&v(E.lightMap.channel),bumpMapUv:Pe&&v(E.bumpMap.channel),normalMapUv:ve&&v(E.normalMap.channel),displacementMapUv:gt&&v(E.displacementMap.channel),emissiveMapUv:ye&&v(E.emissiveMap.channel),metalnessMapUv:He&&v(E.metalnessMap.channel),roughnessMapUv:Ot&&v(E.roughnessMap.channel),anisotropyMapUv:G&&v(E.anisotropyMap.channel),clearcoatMapUv:Te&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(E.sheenRoughnessMap.channel),specularMapUv:Me&&v(E.specularMap.channel),specularColorMapUv:ue&&v(E.specularColorMap.channel),specularIntensityMapUv:ke&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:re&&v(E.thicknessMap.channel),alphaMapUv:pe&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ve||At),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(qe||pe),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:me,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===ot,decodeVideoTextureEmissive:ye&&E.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(E.emissiveMap.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ii,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_e&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ct.vertexUv1s=u.has(1),ct.vertexUv2s=u.has(2),ct.vertexUv3s=u.has(3),u.clear(),ct}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(_(S,E),y(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let L;if(S){const k=di[S];L=HM.clone(k.uniforms)}else L=E.uniforms;return L}function A(E,S){let L;for(let k=0,H=f.length;k<H;k++){const W=f[k];if(W.cacheKey===S){L=W,++L.usedTimes;break}}return L===void 0&&(L=new hA(n,S,E,s),f.push(L)),L}function w(E){if(--E.usedTimes===0){const S=f.indexOf(E);f[S]=f[f.length-1],f.pop(),E.destroy()}}function R(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:f,dispose:b}}function vA(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function yA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function f0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function d0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(c,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:c.id,object:c,geometry:d,material:p,groupOrder:g,renderOrder:c.renderOrder,z:v,group:m},n[e]=h):(h.id=c.id,h.object=c,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=c.renderOrder,h.z=v,h.group=m),e++,h}function a(c,d,p,g,v,m){const h=o(c,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(c,d,p,g,v,m){const h=o(c,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(c,d){t.length>1&&t.sort(c||yA),i.length>1&&i.sort(d||f0),r.length>1&&r.sort(d||f0)}function f(){for(let c=e,d=n.length;c<d;c++){const p=n[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function xA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new d0,n.set(i,[o])):r>=s.length?(o=new d0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function SA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ne};break;case"SpotLight":t={position:new N,direction:new N,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function MA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let EA=0;function TA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wA(n){const e=new SA,t=MA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new Be,o=new Be;function a(u){let f=0,c=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,_=0,y=0,x=0,A=0,w=0,R=0;u.sort(TA);for(let E=0,S=u.length;E<S;E++){const L=u[E],k=L.color,H=L.intensity,W=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=k.r*H,c+=k.g*H,d+=k.b*H;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],H);R++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,I=t.get(L);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=V,p++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(k).multiplyScalar(H),V.distance=W,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[v]=V;const ne=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,ne.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[v]=ne.matrix,L.castShadow){const I=t.get(L);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.spotShadow[v]=I,i.spotShadowMap[v]=Y,x++}v++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(k).multiplyScalar(H),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const ne=L.shadow,I=t.get(L);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,I.shadowCameraNear=ne.camera.near,I.shadowCameraFar=ne.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=V,g++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(H),V.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[h]=V,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==v||b.rectAreaLength!==m||b.hemiLength!==h||b.numDirectionalShadows!==_||b.numPointShadows!==y||b.numSpotShadows!==x||b.numSpotMaps!==A||b.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,b.directionalLength=p,b.pointLength=g,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=h,b.numDirectionalShadows=_,b.numPointShadows=y,b.numSpotShadows=x,b.numSpotMaps=A,b.numLightProbes=R,i.version=EA++)}function l(u,f){let c=0,d=0,p=0,g=0,v=0;const m=f.matrixWorldInverse;for(let h=0,_=u.length;h<_;h++){const y=u[h];if(y.isDirectionalLight){const x=i.directional[c];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),c++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function h0(n){const e=new wA(n),t=[],i=[];function r(f){u.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function o(f){i.push(f)}function a(){e.setup(t)}function l(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AA(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new h0(n),e.set(r,[a])):s>=o.length?(a=new h0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const RA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`;function bA(n,e,t){let i=new _h;const r=new $e,s=new $e,o=new et,a=new oE({depthPacking:KS}),l=new aE,u={},f=t.maxTextureSize,c={[Ai]:dn,[dn]:Ai,[ii]:ii},d=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:RA,fragmentShader:CA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ci;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new hn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=p_;let h=this.type;this.render=function(w,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(rr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=h!==wi&&this.type===wi,W=h===wi&&this.type!==wi;for(let Y=0,V=w.length;Y<V;Y++){const ne=w[Y],I=ne.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const $=I.getFrameExtents();if(r.multiply($),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,I.mapSize.y=s.y)),I.map===null||H===!0||W===!0){const ae=this.type!==wi?{minFilter:Qt,magFilter:Qt}:{};I.map!==null&&I.map.dispose(),I.map=new Nr(r.x,r.y,ae),I.map.texture.name=ne.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const q=I.getViewportCount();for(let ae=0;ae<q;ae++){const Ee=I.getViewport(ae);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),k.viewport(o),I.updateMatrices(ne,ae),i=I.getFrustum(),x(R,b,I.camera,ne,this.type)}I.isPointLightShadow!==!0&&this.type===wi&&_(I,b),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,L)};function _(w,R){const b=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nr(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,b,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,b,p,v,null)}function y(w,R,b,E){let S=null;const L=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=b.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=S.uuid,H=R.uuid;let W=u[k];W===void 0&&(W={},u[k]=W);let Y=W[H];Y===void 0&&(Y=S.clone(),W[H]=Y,R.addEventListener("dispose",A)),S=Y}if(S.visible=R.visible,S.wireframe=R.wireframe,E===wi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:c[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=n.properties.get(S);k.light=b}return S}function x(w,R,b,E,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===wi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const H=e.update(w),W=w.material;if(Array.isArray(W)){const Y=H.groups;for(let V=0,ne=Y.length;V<ne;V++){const I=Y[V],$=W[I.materialIndex];if($&&$.visible){const q=y(w,$,E,S);w.onBeforeShadow(n,w,R,b,H,q,I),n.renderBufferDirect(b,null,H,q,w,I),w.onAfterShadow(n,w,R,b,H,q,I)}}}else if(W.visible){const Y=y(w,W,E,S);w.onBeforeShadow(n,w,R,b,H,Y,null),n.renderBufferDirect(b,null,H,Y,w,null),w.onAfterShadow(n,w,R,b,H,Y,null)}}const k=w.children;for(let H=0,W=k.length;H<W;H++)x(k[H],R,b,E,S)}function A(w){w.target.removeEventListener("dispose",A);for(const b in u){const E=u[b],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const PA={[Kf]:qf,[Zf]:ed,[Jf]:td,[Rs]:Qf,[qf]:Kf,[ed]:Zf,[td]:Jf,[Qf]:Rs};function LA(n,e){function t(){let D=!1;const re=new et;let oe=null;const pe=new et(0,0,0,0);return{setMask:function(ee){oe!==ee&&!D&&(n.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){D=ee},setClear:function(ee,K,_e,Ue,ct){ct===!0&&(ee*=Ue,K*=Ue,_e*=Ue),re.set(ee,K,_e,Ue),pe.equals(re)===!1&&(n.clearColor(ee,K,_e,Ue),pe.copy(re))},reset:function(){D=!1,oe=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,re=!1,oe=null,pe=null,ee=null;return{setReversed:function(K){if(re!==K){const _e=e.get("EXT_clip_control");K?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),re=K;const Ue=ee;ee=null,this.setClear(Ue)}},getReversed:function(){return re},setTest:function(K){K?Z(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(K){oe!==K&&!D&&(n.depthMask(K),oe=K)},setFunc:function(K){if(re&&(K=PA[K]),pe!==K){switch(K){case Kf:n.depthFunc(n.NEVER);break;case qf:n.depthFunc(n.ALWAYS);break;case Zf:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case Jf:n.depthFunc(n.EQUAL);break;case Qf:n.depthFunc(n.GEQUAL);break;case ed:n.depthFunc(n.GREATER);break;case td:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=K}},setLocked:function(K){D=K},setClear:function(K){ee!==K&&(re&&(K=1-K),n.clearDepth(K),ee=K)},reset:function(){D=!1,oe=null,pe=null,ee=null,re=!1}}}function r(){let D=!1,re=null,oe=null,pe=null,ee=null,K=null,_e=null,Ue=null,ct=null;return{setTest:function(nt){D||(nt?Z(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(nt){re!==nt&&!D&&(n.stencilMask(nt),re=nt)},setFunc:function(nt,Oi,pi){(oe!==nt||pe!==Oi||ee!==pi)&&(n.stencilFunc(nt,Oi,pi),oe=nt,pe=Oi,ee=pi)},setOp:function(nt,Oi,pi){(K!==nt||_e!==Oi||Ue!==pi)&&(n.stencilOp(nt,Oi,pi),K=nt,_e=Oi,Ue=pi)},setLocked:function(nt){D=nt},setClear:function(nt){ct!==nt&&(n.clearStencil(nt),ct=nt)},reset:function(){D=!1,re=null,oe=null,pe=null,ee=null,K=null,_e=null,Ue=null,ct=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let f={},c={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,_=null,y=null,x=null,A=null,w=null,R=new Ne(0,0,0),b=0,E=!1,S=null,L=null,k=null,H=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ne=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(I)[1]),V=ne>=1):I.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),V=ne>=2);let $=null,q={};const ae=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),tt=new et().fromArray(ae),Je=new et().fromArray(Ee);function Ke(D,re,oe,pe){const ee=new Uint8Array(4),K=n.createTexture();n.bindTexture(D,K),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<oe;_e++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(re+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return K}const X={};X[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(Rs),Pe(!1),ve(h_),Z(n.CULL_FACE),mt(rr);function Z(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function me(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function De(D,re){return c[D]!==re?(n.bindFramebuffer(D,re),c[D]=re,D===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=re),D===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=re),!0):!1}function we(D,re){let oe=p,pe=!1;if(D){oe=d.get(re),oe===void 0&&(oe=[],d.set(re,oe));const ee=D.textures;if(oe.length!==ee.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let K=0,_e=ee.length;K<_e;K++)oe[K]=n.COLOR_ATTACHMENT0+K;oe.length=ee.length,pe=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,pe=!0);pe&&n.drawBuffers(oe)}function qe(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const Yt={[Ir]:n.FUNC_ADD,[yS]:n.FUNC_SUBTRACT,[xS]:n.FUNC_REVERSE_SUBTRACT};Yt[SS]=n.MIN,Yt[MS]=n.MAX;const P={[ES]:n.ZERO,[TS]:n.ONE,[wS]:n.SRC_COLOR,[$f]:n.SRC_ALPHA,[LS]:n.SRC_ALPHA_SATURATE,[bS]:n.DST_COLOR,[RS]:n.DST_ALPHA,[AS]:n.ONE_MINUS_SRC_COLOR,[Yf]:n.ONE_MINUS_SRC_ALPHA,[PS]:n.ONE_MINUS_DST_COLOR,[CS]:n.ONE_MINUS_DST_ALPHA,[IS]:n.CONSTANT_COLOR,[DS]:n.ONE_MINUS_CONSTANT_COLOR,[NS]:n.CONSTANT_ALPHA,[US]:n.ONE_MINUS_CONSTANT_ALPHA};function mt(D,re,oe,pe,ee,K,_e,Ue,ct,nt){if(D===rr){v===!0&&(me(n.BLEND),v=!1);return}if(v===!1&&(Z(n.BLEND),v=!0),D!==vS){if(D!==m||nt!==E){if((h!==Ir||x!==Ir)&&(n.blendEquation(n.FUNC_ADD),h=Ir,x=Ir),nt)switch(D){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case m_:n.blendFunc(n.ONE,n.ONE);break;case g_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case __:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case m_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case g_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case __:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,y=null,A=null,w=null,R.set(0,0,0),b=0,m=D,E=nt}return}ee=ee||re,K=K||oe,_e=_e||pe,(re!==h||ee!==x)&&(n.blendEquationSeparate(Yt[re],Yt[ee]),h=re,x=ee),(oe!==_||pe!==y||K!==A||_e!==w)&&(n.blendFuncSeparate(P[oe],P[pe],P[K],P[_e]),_=oe,y=pe,A=K,w=_e),(Ue.equals(R)===!1||ct!==b)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ct),R.copy(Ue),b=ct),m=D,E=!1}function Fe(D,re){D.side===ii?me(n.CULL_FACE):Z(n.CULL_FACE);let oe=D.side===dn;re&&(oe=!oe),Pe(oe),D.blending===As&&D.transparent===!1?mt(rr):mt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;a.setTest(pe),pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(D){S!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),S=D)}function ve(D){D!==mS?(Z(n.CULL_FACE),D!==L&&(D===h_?n.cullFace(n.BACK):D===gS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),L=D}function gt(D){D!==k&&(V&&n.lineWidth(D),k=D)}function ye(D,re,oe){D?(Z(n.POLYGON_OFFSET_FILL),(H!==re||W!==oe)&&(n.polygonOffset(re,oe),H=re,W=oe)):me(n.POLYGON_OFFSET_FILL)}function He(D){D?Z(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Ot(D){D===void 0&&(D=n.TEXTURE0+Y-1),$!==D&&(n.activeTexture(D),$=D)}function At(D,re,oe){oe===void 0&&($===null?oe=n.TEXTURE0+Y-1:oe=$);let pe=q[oe];pe===void 0&&(pe={type:void 0,texture:void 0},q[oe]=pe),(pe.type!==D||pe.texture!==re)&&($!==oe&&(n.activeTexture(oe),$=oe),n.bindTexture(D,re||X[D]),pe.type=D,pe.texture=re)}function C(){const D=q[$];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(D){tt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function be(D){Je.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Je.copy(D))}function Me(D,re){let oe=u.get(re);oe===void 0&&(oe=new WeakMap,u.set(re,oe));let pe=oe.get(D);pe===void 0&&(pe=n.getUniformBlockIndex(re,D.name),oe.set(D,pe))}function ue(D,re){const pe=u.get(re).get(D);l.get(re)!==pe&&(n.uniformBlockBinding(re,pe,D.__bindingPointIndex),l.set(re,pe))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},$=null,q={},c={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,_=null,y=null,x=null,A=null,w=null,R=new Ne(0,0,0),b=0,E=!1,S=null,L=null,k=null,H=null,W=null,tt.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:me,bindFramebuffer:De,drawBuffers:we,useProgram:qe,setBlending:mt,setMaterial:Fe,setFlipSided:Pe,setCullFace:ve,setLineWidth:gt,setPolygonOffset:ye,setScissorTest:He,activeTexture:Ot,bindTexture:At,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:Se,texImage3D:ie,updateUBOMapping:Me,uniformBlockBinding:ue,texStorage2D:se,texStorage3D:xe,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:G,compressedTexSubImage3D:Te,scissor:fe,viewport:be,reset:ke}}function IA(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,f=new WeakMap;let c;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):la("canvas")}function v(C,M,O){let j=1;const J=At(C);if((J.width>O||J.height>O)&&(j=O/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const G=Math.floor(j*J.width),Te=Math.floor(j*J.height);c===void 0&&(c=g(G,Te));const se=M?g(G,Te):c;return se.width=G,se.height=Te,se.getContext("2d").drawImage(C,0,0,G,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+Te+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function h(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,M,O,j,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let G=M;if(M===n.RED&&(O===n.FLOAT&&(G=n.R32F),O===n.HALF_FLOAT&&(G=n.R16F),O===n.UNSIGNED_BYTE&&(G=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.R8UI),O===n.UNSIGNED_SHORT&&(G=n.R16UI),O===n.UNSIGNED_INT&&(G=n.R32UI),O===n.BYTE&&(G=n.R8I),O===n.SHORT&&(G=n.R16I),O===n.INT&&(G=n.R32I)),M===n.RG&&(O===n.FLOAT&&(G=n.RG32F),O===n.HALF_FLOAT&&(G=n.RG16F),O===n.UNSIGNED_BYTE&&(G=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RG8UI),O===n.UNSIGNED_SHORT&&(G=n.RG16UI),O===n.UNSIGNED_INT&&(G=n.RG32UI),O===n.BYTE&&(G=n.RG8I),O===n.SHORT&&(G=n.RG16I),O===n.INT&&(G=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RGB8UI),O===n.UNSIGNED_SHORT&&(G=n.RGB16UI),O===n.UNSIGNED_INT&&(G=n.RGB32UI),O===n.BYTE&&(G=n.RGB8I),O===n.SHORT&&(G=n.RGB16I),O===n.INT&&(G=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),O===n.UNSIGNED_INT&&(G=n.RGBA32UI),O===n.BYTE&&(G=n.RGBA8I),O===n.SHORT&&(G=n.RGBA16I),O===n.INT&&(G=n.RGBA32I)),M===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),M===n.RGBA){const Te=J?jl:Ye.getTransfer(j);O===n.FLOAT&&(G=n.RGBA32F),O===n.HALF_FLOAT&&(G=n.RGBA16F),O===n.UNSIGNED_BYTE&&(G=Te===ot?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(C,M){let O;return C?M===null||M===Dr||M===ta?O=n.DEPTH24_STENCIL8:M===Wn?O=n.DEPTH32F_STENCIL8:M===Qo&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Dr||M===ta?O=n.DEPTH_COMPONENT24:M===Wn?O=n.DEPTH_COMPONENT32F:M===Qo&&(O=n.DEPTH_COMPONENT16),O}function A(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){const M=C.target;M.removeEventListener("dispose",w),b(M),M.isVideoTexture&&f.delete(M)}function R(C){const M=C.target;M.removeEventListener("dispose",R),S(M)}function b(C){const M=i.get(C);if(M.__webglInit===void 0)return;const O=C.source,j=d.get(O);if(j){const J=j[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(C),Object.keys(j).length===0&&d.delete(O)}i.remove(C)}function E(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const O=C.source,j=d.get(O);delete j[M.__cacheKey],o.memory.textures--}function S(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let J=0;J<M.__webglFramebuffer[j].length;J++)n.deleteFramebuffer(M.__webglFramebuffer[j][J]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=C.textures;for(let j=0,J=O.length;j<J;j++){const G=i.get(O[j]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(C)}let L=0;function k(){L=0}function H(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function W(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){const O=i.get(C);if(C.isVideoTexture&&He(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,C,M);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}function V(C,M){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){X(O,C,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)}function ne(C,M){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){X(O,C,M);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)}function I(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){Z(O,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)}const $={[Ps]:n.REPEAT,[or]:n.CLAMP_TO_EDGE,[zl]:n.MIRRORED_REPEAT},q={[Qt]:n.NEAREST,[S_]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Hl]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},ae={[ZS]:n.NEVER,[iM]:n.ALWAYS,[JS]:n.LESS,[U_]:n.LEQUAL,[QS]:n.EQUAL,[nM]:n.GEQUAL,[eM]:n.GREATER,[tM]:n.NOTEQUAL};function Ee(C,M){if(M.type===Wn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Sn||M.magFilter===Hl||M.magFilter===Jo||M.magFilter===Ri||M.minFilter===Sn||M.minFilter===Hl||M.minFilter===Jo||M.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,$[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,$[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,$[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,q[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==Jo&&M.minFilter!==Ri||M.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function tt(C,M){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));const j=M.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const G=W(M);if(G!==C.__cacheKey){J[G]===void 0&&(J[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[G].usedTimes++;const Te=J[C.__cacheKey];Te!==void 0&&(J[C.__cacheKey].usedTimes--,Te.usedTimes===0&&E(M)),C.__cacheKey=G,C.__webglTexture=J[G].texture}return O}function Je(C,M,O){return Math.floor(Math.floor(C/O)/M)}function Ke(C,M,O,j){const G=C.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,O,j,M.data);else{G.sort((ie,fe)=>ie.start-fe.start);let Te=0;for(let ie=1;ie<G.length;ie++){const fe=G[Te],be=G[ie],Me=fe.start+fe.count,ue=Je(be.start,M.width,4),ke=Je(fe.start,M.width,4);be.start<=Me+1&&ue===ke&&Je(be.start+be.count-1,M.width,4)===ue?fe.count=Math.max(fe.count,be.start+be.count-fe.start):(++Te,G[Te]=be)}G.length=Te+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ie=0,fe=G.length;ie<fe;ie++){const be=G[ie],Me=Math.floor(be.start/4),ue=Math.ceil(be.count/4),ke=Me%M.width,D=Math.floor(Me/M.width),re=ue,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,ke,D,re,oe,O,j,M.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function X(C,M,O){let j=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=n.TEXTURE_3D);const J=tt(C,M),G=M.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+O);const Te=i.get(G);if(G.version!==Te.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const se=Ye.getPrimaries(Ye.workingColorSpace),xe=M.colorSpace===ar?null:Ye.getPrimaries(M.colorSpace),Se=M.colorSpace===ar||se===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ie=v(M.image,!1,r.maxTextureSize);ie=Ot(M,ie);const fe=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let Me=y(M.internalFormat,fe,be,M.colorSpace,M.isVideoTexture);Ee(j,M);let ue;const ke=M.mipmaps,D=M.isVideoTexture!==!0,re=Te.__version===void 0||J===!0,oe=G.dataReady,pe=A(M,ie);if(M.isDepthTexture)Me=x(M.format===ia,M.type),re&&(D?t.texStorage2D(n.TEXTURE_2D,1,Me,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Me,ie.width,ie.height,0,fe,be,null));else if(M.isDataTexture)if(ke.length>0){D&&re&&t.texStorage2D(n.TEXTURE_2D,pe,Me,ke[0].width,ke[0].height);for(let ee=0,K=ke.length;ee<K;ee++)ue=ke[ee],D?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,be,ue.data):t.texImage2D(n.TEXTURE_2D,ee,Me,ue.width,ue.height,0,fe,be,ue.data);M.generateMipmaps=!1}else D?(re&&t.texStorage2D(n.TEXTURE_2D,pe,Me,ie.width,ie.height),oe&&Ke(M,ie,fe,be)):t.texImage2D(n.TEXTURE_2D,0,Me,ie.width,ie.height,0,fe,be,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,ke[0].width,ke[0].height,ie.depth);for(let ee=0,K=ke.length;ee<K;ee++)if(ue=ke[ee],M.format!==In)if(fe!==null)if(D){if(oe)if(M.layerUpdates.size>0){const _e=kv(ue.width,ue.height,M.format,M.type);for(const Ue of M.layerUpdates){const ct=ue.data.subarray(Ue*_e/ue.data.BYTES_PER_ELEMENT,(Ue+1)*_e/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Ue,ue.width,ue.height,1,fe,ct)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,fe,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Me,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,fe,be,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Me,ue.width,ue.height,ie.depth,0,fe,be,ue.data)}else{D&&re&&t.texStorage2D(n.TEXTURE_2D,pe,Me,ke[0].width,ke[0].height);for(let ee=0,K=ke.length;ee<K;ee++)ue=ke[ee],M.format!==In?fe!==null?D?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,be,ue.data):t.texImage2D(n.TEXTURE_2D,ee,Me,ue.width,ue.height,0,fe,be,ue.data)}else if(M.isDataArrayTexture)if(D){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,ie.width,ie.height,ie.depth),oe)if(M.layerUpdates.size>0){const ee=kv(ie.width,ie.height,M.format,M.type);for(const K of M.layerUpdates){const _e=ie.data.subarray(K*ee/ie.data.BYTES_PER_ELEMENT,(K+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,fe,be,_e)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,be,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,fe,be,ie.data);else if(M.isData3DTexture)D?(re&&t.texStorage3D(n.TEXTURE_3D,pe,Me,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,be,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,fe,be,ie.data);else if(M.isFramebufferTexture){if(re)if(D)t.texStorage2D(n.TEXTURE_2D,pe,Me,ie.width,ie.height);else{let ee=ie.width,K=ie.height;for(let _e=0;_e<pe;_e++)t.texImage2D(n.TEXTURE_2D,_e,Me,ee,K,0,fe,be,null),ee>>=1,K>>=1}}else if(ke.length>0){if(D&&re){const ee=At(ke[0]);t.texStorage2D(n.TEXTURE_2D,pe,Me,ee.width,ee.height)}for(let ee=0,K=ke.length;ee<K;ee++)ue=ke[ee],D?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,fe,be,ue):t.texImage2D(n.TEXTURE_2D,ee,Me,fe,be,ue);M.generateMipmaps=!1}else if(D){if(re){const ee=At(ie);t.texStorage2D(n.TEXTURE_2D,pe,Me,ee.width,ee.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,be,ie)}else t.texImage2D(n.TEXTURE_2D,0,Me,fe,be,ie);m(M)&&h(j),Te.__version=G.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Z(C,M,O){if(M.image.length!==6)return;const j=tt(C,M),J=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+O);const G=i.get(J);if(J.version!==G.__version||j===!0){t.activeTexture(n.TEXTURE0+O);const Te=Ye.getPrimaries(Ye.workingColorSpace),se=M.colorSpace===ar?null:Ye.getPrimaries(M.colorSpace),xe=M.colorSpace===ar||Te===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!Se&&!ie?fe[K]=v(M.image[K],!0,r.maxCubemapSize):fe[K]=ie?M.image[K].image:M.image[K],fe[K]=Ot(M,fe[K]);const be=fe[0],Me=s.convert(M.format,M.colorSpace),ue=s.convert(M.type),ke=y(M.internalFormat,Me,ue,M.colorSpace),D=M.isVideoTexture!==!0,re=G.__version===void 0||j===!0,oe=J.dataReady;let pe=A(M,be);Ee(n.TEXTURE_CUBE_MAP,M);let ee;if(Se){D&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ke,be.width,be.height);for(let K=0;K<6;K++){ee=fe[K].mipmaps;for(let _e=0;_e<ee.length;_e++){const Ue=ee[_e];M.format!==In?Me!==null?D?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Ue.width,Ue.height,Me,ue,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,ke,Ue.width,Ue.height,0,Me,ue,Ue.data)}}}else{if(ee=M.mipmaps,D&&re){ee.length>0&&pe++;const K=At(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ke,K.width,K.height)}for(let K=0;K<6;K++)if(ie){D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Me,ue,fe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,fe[K].width,fe[K].height,0,Me,ue,fe[K].data);for(let _e=0;_e<ee.length;_e++){const ct=ee[_e].image[K].image;D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,ct.width,ct.height,Me,ue,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,ke,ct.width,ct.height,0,Me,ue,ct.data)}}else{D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,ue,fe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,Me,ue,fe[K]);for(let _e=0;_e<ee.length;_e++){const Ue=ee[_e];D?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,Me,ue,Ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,ke,Me,ue,Ue.image[K])}}}m(M)&&h(n.TEXTURE_CUBE_MAP),G.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function me(C,M,O,j,J,G){const Te=s.convert(O.format,O.colorSpace),se=s.convert(O.type),xe=y(O.internalFormat,Te,se,O.colorSpace),Se=i.get(M),ie=i.get(O);if(ie.__renderTarget=M,!Se.__hasExternalTextures){const fe=Math.max(1,M.width>>G),be=Math.max(1,M.height>>G);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,G,xe,fe,be,M.depth,0,Te,se,null):t.texImage2D(J,G,xe,fe,be,0,Te,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,ie.__webglTexture,0,gt(M)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,ie.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(C,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const j=M.depthTexture,J=j&&j.isDepthTexture?j.type:null,G=x(M.stencilBuffer,J),Te=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=gt(M);ye(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,G,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,G,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,G,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,C)}else{const j=M.textures;for(let J=0;J<j.length;J++){const G=j[J],Te=s.convert(G.format,G.colorSpace),se=s.convert(G.type),xe=y(G.internalFormat,Te,se,G.colorSpace),Se=gt(M);O&&ye(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,xe,M.width,M.height):ye(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,xe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,xe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const J=j.__webglTexture,G=gt(M);if(M.depthTexture.format===na)ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(M.depthTexture.format===ia)ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function qe(C){const M=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=j}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const j=C.texture.mipmaps;j&&j.length>0?we(M.__webglFramebuffer[0],C):we(M.__webglFramebuffer,C)}else if(O){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=n.createRenderbuffer(),De(M.__webglDepthbuffer[j],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,G)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),De(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(C,M,O){const j=i.get(C);M!==void 0&&me(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&qe(C)}function P(C){const M=C.texture,O=i.get(C),j=i.get(M);C.addEventListener("dispose",R);const J=C.textures,G=C.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=M.version,o.memory.textures++),G){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let xe=0;xe<M.mipmaps.length;xe++)O.__webglFramebuffer[se][xe]=n.createFramebuffer()}else O.__webglFramebuffer[se]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)O.__webglFramebuffer[se]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Te)for(let se=0,xe=J.length;se<xe;se++){const Se=i.get(J[se]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ye(C)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const xe=J[se];O.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const Se=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),fe=y(xe.internalFormat,Se,ie,xe.colorSpace,C.isXRRenderTarget===!0),be=gt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,fe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,O.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),De(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)me(O.__webglFramebuffer[se][xe],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe);else me(O.__webglFramebuffer[se],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(M)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let se=0,xe=J.length;se<xe;se++){const Se=J[se],ie=i.get(Se);let fe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),Ee(fe,Se),me(O.__webglFramebuffer,C,Se,n.COLOR_ATTACHMENT0+se,fe,0),m(Se)&&h(fe)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),Ee(se,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)me(O.__webglFramebuffer[xe],C,M,n.COLOR_ATTACHMENT0,se,xe);else me(O.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,se,0);m(M)&&h(se),t.unbindTexture()}C.depthBuffer&&qe(C)}function mt(C){const M=C.textures;for(let O=0,j=M.length;O<j;O++){const J=M[O];if(m(J)){const G=_(C),Te=i.get(J).__webglTexture;t.bindTexture(G,Te),h(G),t.unbindTexture()}}}const Fe=[],Pe=[];function ve(C){if(C.samples>0){if(ye(C)===!1){const M=C.textures,O=C.width,j=C.height;let J=n.COLOR_BUFFER_BIT;const G=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(C),se=M.length>1;if(se)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const xe=C.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ie=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,J,n.NEAREST),l===!0&&(Fe.length=0,Pe.length=0,Fe.push(n.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Fe.push(G),Pe.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ie=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function gt(C){return Math.min(r.maxSamples,C.samples)}function ye(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function He(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Ot(C,M){const O=C.colorSpace,j=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==en&&O!==ar&&(Ye.getTransfer(O)===ot?(j!==In||J!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function At(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=ne,this.setTextureCube=I,this.rebindTextures=Yt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function DA(n,e){function t(i,r=ar){let s;const o=Ye.getTransfer(r);if(i===ri)return n.UNSIGNED_BYTE;if(i===sd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===od)return n.UNSIGNED_SHORT_5_5_5_1;if(i===T_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===w_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===M_)return n.BYTE;if(i===E_)return n.SHORT;if(i===Qo)return n.UNSIGNED_SHORT;if(i===rd)return n.INT;if(i===Dr)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===ea)return n.HALF_FLOAT;if(i===A_)return n.ALPHA;if(i===R_)return n.RGB;if(i===In)return n.RGBA;if(i===na)return n.DEPTH_COMPONENT;if(i===ia)return n.DEPTH_STENCIL;if(i===ad)return n.RED;if(i===ld)return n.RED_INTEGER;if(i===C_)return n.RG;if(i===ud)return n.RG_INTEGER;if(i===cd)return n.RGBA_INTEGER;if(i===Vl||i===Gl||i===Wl||i===Xl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fd||i===dd||i===hd||i===pd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===md||i===gd||i===_d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===md||i===gd)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_d)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vd||i===yd||i===xd||i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Rd||i===Cd||i===bd||i===Pd||i===Ld)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Md)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ed)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Td)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ad)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ld)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Id||i===Dd||i===Nd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Id)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ud||i===Fd||i===Od||i===kd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ud)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Od)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class FA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pr({vertexShader:NA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new xu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends Is{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,c=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new FA,h={},_=t.getContextAttributes();let y=null,x=null;const A=[],w=[],R=new $e;let b=null;const E=new rn;E.viewport=new et;const S=new rn;S.viewport=new et;const L=[E,S],k=new bE;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=A[X];return Z===void 0&&(Z=new ch,A[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=A[X];return Z===void 0&&(Z=new ch,A[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=A[X];return Z===void 0&&(Z=new ch,A[X]=Z),Z.getHandSpace()};function Y(X){const Z=w.indexOf(X.inputSource);if(Z===-1)return;const me=A[Z];me!==void 0&&(me.update(X.inputSource,X.frame,u||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",ne);for(let X=0;X<A.length;X++){const Z=w[X];Z!==null&&(w[X]=null,A[X].disconnect(Z))}H=null,W=null,m.reset();for(const X in h)delete h[X];e.setRenderTarget(y),p=null,d=null,c=null,r=null,x=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(r,t)),c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",V),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,De=null,we=null;_.depth&&(we=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?ia:na,De=_.stencil?ta:Dr);const qe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};c=this.getBinding(),d=c.createProjectionLayer(qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Nr(d.textureWidth,d.textureHeight,{format:In,type:ri,depthTexture:new Cv(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Nr(p.framebufferWidth,p.framebufferHeight,{format:In,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(X){for(let Z=0;Z<X.removed.length;Z++){const me=X.removed[Z],De=w.indexOf(me);De>=0&&(w[De]=null,A[De].disconnect(me))}for(let Z=0;Z<X.added.length;Z++){const me=X.added[Z];let De=w.indexOf(me);if(De===-1){for(let qe=0;qe<A.length;qe++)if(qe>=w.length){w.push(me),De=qe;break}else if(w[qe]===null){w[qe]=me,De=qe;break}if(De===-1)break}const we=A[De];we&&we.connect(me)}}const I=new N,$=new N;function q(X,Z,me){I.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(me.matrixWorld);const De=I.distanceTo($),we=Z.projectionMatrix.elements,qe=me.projectionMatrix.elements,Yt=we[14]/(we[10]-1),P=we[14]/(we[10]+1),mt=(we[9]+1)/we[5],Fe=(we[9]-1)/we[5],Pe=(we[8]-1)/we[0],ve=(qe[8]+1)/qe[0],gt=Yt*Pe,ye=Yt*ve,He=De/(-Pe+ve),Ot=He*-Pe;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ot),X.translateZ(He),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const At=Yt+He,C=P+He,M=gt-Ot,O=ye+(De-Ot),j=mt*P/C*At,J=Fe*P/C*At;X.projectionMatrix.makePerspective(M,O,j,J,At,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ae(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Z=X.near,me=X.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(me=m.depthFar)),k.near=S.near=E.near=Z,k.far=S.far=E.far=me,(H!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,W=k.far),k.layers.mask=X.layers.mask|6,E.layers.mask=k.layers.mask&3,S.layers.mask=k.layers.mask&5;const De=X.parent,we=k.cameras;ae(k,De);for(let qe=0;qe<we.length;qe++)ae(we[qe],De);we.length===2?q(k,E,S):k.projectionMatrix.copy(E.projectionMatrix),Ee(X,k,De)};function Ee(X,Z,me){me===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ds*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(X){return h[X]};let tt=null;function Je(X,Z){if(f=Z.getViewerPose(u||o),g=Z,f!==null){const me=f.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let De=!1;me.length!==k.cameras.length&&(k.cameras.length=0,De=!0);for(let P=0;P<me.length;P++){const mt=me[P];let Fe=null;if(p!==null)Fe=p.getViewport(mt);else{const ve=c.getViewSubImage(d,mt);Fe=ve.viewport,P===0&&(e.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(x))}let Pe=L[P];Pe===void 0&&(Pe=new rn,Pe.layers.enable(P),Pe.viewport=new et,L[P]=Pe),Pe.matrix.fromArray(mt.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(mt.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),P===0&&(k.matrix.copy(Pe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),De===!0&&k.cameras.push(Pe)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){c=i.getBinding();const P=c.getDepthInformation(me[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),c=i.getBinding();for(let P=0;P<me.length;P++){const mt=me[P].camera;if(mt){let Fe=h[mt];Fe||(Fe=new bv,h[mt]=Fe);const Pe=c.getCameraImage(mt);Fe.sourceTexture=Pe}}}}for(let me=0;me<A.length;me++){const De=w[me],we=A[me];De!==null&&we!==void 0&&we.update(De,Z,u||o)}tt&&tt(X,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ke=new Bv;Ke.setAnimationLoop(Je),this.setAnimationLoop=function(X){tt=X},this.dispose=function(){}}}const Xr=new li,kA=new Be;function BA(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,sv(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),c(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,y):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===dn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===dn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Xr.copy(x),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(kA.makeRotationFromEuler(Xr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function c(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===dn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zA(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function u(_,y){let x=r[_.id];x===void 0&&(g(_),x=f(_),r[_.id]=x,_.addEventListener("dispose",m));const A=y.program;i.updateUBOMapping(_,A);const w=e.render.frame;s[_.id]!==w&&(d(_),s[_.id]=w)}function f(_){const y=c();_.__bindingPointIndex=y;const x=n.createBuffer(),A=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function c(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=r[_.id],x=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,R=x.length;w<R;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,S=b.length;E<S;E++){const L=b[E];if(p(L,w,E,A)===!0){const k=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Y=0;Y<H.length;Y++){const V=H[Y],ne=v(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,k+W,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,y,x,A){const w=_.value,R=y+"_"+x;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const b=A[R];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return A[R]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function g(_){const y=_.uniforms;let x=0;const A=16;for(let R=0,b=y.length;R<b;R++){const E=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,L=E.length;S<L;S++){const k=E[S],H=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Y=H.length;W<Y;W++){const V=H[W],ne=v(V),I=x%A,$=I%ne.boundary,q=I+$;x+=$,q!==0&&A-q<ne.storage&&(x+=A-q),k.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ne.storage}}}const w=x%A;return w>0&&(x+=A-w),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class HA{constructor(e={}){const{canvas:t=SM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Ht;let w=0,R=0,b=null,E=-1,S=null;const L=new et,k=new et;let H=null;const W=new Ne(0);let Y=0,V=t.width,ne=t.height,I=1,$=null,q=null;const ae=new et(0,0,V,ne),Ee=new et(0,0,V,ne);let tt=!1;const Je=new _h;let Ke=!1,X=!1;const Z=new Be,me=new N,De=new et,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Yt(){return b===null?I:1}let P=i;function mt(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jf}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),P===null){const U="webgl2";if(P=mt(U,T),P===null)throw mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,Pe,ve,gt,ye,He,Ot,At,C,M,O,j,J,G,Te,se,xe,Se,ie,fe,be,Me,ue,ke;function D(){Fe=new Zw(P),Fe.init(),Me=new DA(P,Fe),Pe=new Ww(P,Fe,e,Me),ve=new LA(P,Fe),Pe.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),gt=new e1(P),ye=new vA,He=new IA(P,Fe,ve,ye,Pe,Me,gt),Ot=new jw(x),At=new qw(x),C=new zE(P),ue=new Vw(P,C),M=new Jw(P,C,gt,ue),O=new n1(P,M,C,gt),ie=new t1(P,Pe,He),se=new Xw(ye),j=new _A(x,Ot,At,Fe,Pe,ue,se),J=new BA(x,ye),G=new xA,Te=new AA(Fe),Se=new Hw(x,Ot,At,ve,O,p,l),xe=new bA(x,O,Pe),ke=new zA(P,gt,Pe,ve),fe=new Gw(P,Fe,gt),be=new Qw(P,Fe,gt),gt.programs=j.programs,x.capabilities=Pe,x.extensions=Fe,x.properties=ye,x.renderLists=G,x.shadowMap=xe,x.state=ve,x.info=gt}D();const re=new OA(x,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(V,ne,!1))},this.getSize=function(T){return T.set(V,ne)},this.setSize=function(T,U,B=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,ne=U,t.width=Math.floor(T*I),t.height=Math.floor(U*I),B===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(V*I,ne*I).floor()},this.setDrawingBufferSize=function(T,U,B){V=T,ne=U,I=B,t.width=Math.floor(T*B),t.height=Math.floor(U*B),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,U,B,z){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,U,B,z),ve.viewport(L.copy(ae).multiplyScalar(I).round())},this.getScissor=function(T){return T.copy(Ee)},this.setScissor=function(T,U,B,z){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,U,B,z),ve.scissor(k.copy(Ee).multiplyScalar(I).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(T){ve.setScissorTest(tt=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,B=!0){let z=0;if(T){let F=!1;if(b!==null){const te=b.texture.format;F=te===cd||te===ud||te===ld}if(F){const te=b.texture.type,ce=te===ri||te===Dr||te===Qo||te===ta||te===sd||te===od,ge=Se.getClearColor(),he=Se.getClearAlpha(),Ce=ge.r,Le=ge.g,Ae=ge.b;ce?(g[0]=Ce,g[1]=Le,g[2]=Ae,g[3]=he,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Ce,v[1]=Le,v[2]=Ae,v[3]=he,P.clearBufferiv(P.COLOR,0,v))}else z|=P.COLOR_BUFFER_BIT}U&&(z|=P.DEPTH_BUFFER_BIT),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Se.dispose(),G.dispose(),Te.dispose(),ye.dispose(),Ot.dispose(),At.dispose(),O.dispose(),ue.dispose(),ke.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",pi),re.removeEventListener("sessionend",E0),$r.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=gt.autoReset,U=xe.enabled,B=xe.autoUpdate,z=xe.needsUpdate,F=xe.type;D(),gt.autoReset=T,xe.enabled=U,xe.autoUpdate=B,xe.needsUpdate=z,xe.type=F}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function K(T){const U=T.target;U.removeEventListener("dispose",K),_e(U)}function _e(T){Ue(T),ye.remove(T)}function Ue(T){const U=ye.get(T).programs;U!==void 0&&(U.forEach(function(B){j.releaseProgram(B)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,B,z,F,te){U===null&&(U=we);const ce=F.isMesh&&F.matrixWorld.determinant()<0,ge=AR(T,U,B,z,F);ve.setMaterial(z,ce);let he=B.index,Ce=1;if(z.wireframe===!0){if(he=M.getWireframeAttribute(B),he===void 0)return;Ce=2}const Le=B.drawRange,Ae=B.attributes.position;let Xe=Le.start*Ce,at=(Le.start+Le.count)*Ce;te!==null&&(Xe=Math.max(Xe,te.start*Ce),at=Math.min(at,(te.start+te.count)*Ce)),he!==null?(Xe=Math.max(Xe,0),at=Math.min(at,he.count)):Ae!=null&&(Xe=Math.max(Xe,0),at=Math.min(at,Ae.count));const Tt=at-Xe;if(Tt<0||Tt===1/0)return;ue.setup(F,z,ge,B,he);let ht,lt=fe;if(he!==null&&(ht=C.get(he),lt=be,lt.setIndex(ht)),F.isMesh)z.wireframe===!0?(ve.setLineWidth(z.wireframeLinewidth*Yt()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(F.isLine){let Re=z.linewidth;Re===void 0&&(Re=1),ve.setLineWidth(Re*Yt()),F.isLineSegments?lt.setMode(P.LINES):F.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else F.isPoints?lt.setMode(P.POINTS):F.isSprite&&lt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ua("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))lt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Re=F._multiDrawStarts,St=F._multiDrawCounts,Qe=F._multiDrawCount,Tn=he?C.get(he).bytesPerElement:1,ao=ye.get(z).currentProgram.getUniforms();for(let wn=0;wn<Qe;wn++)ao.setValue(P,"_gl_DrawID",wn),lt.render(Re[wn]/Tn,St[wn])}else if(F.isInstancedMesh)lt.renderInstances(Xe,Tt,F.count);else if(B.isInstancedBufferGeometry){const Re=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,St=Math.min(B.instanceCount,Re);lt.renderInstances(Xe,Tt,St)}else lt.render(Xe,Tt)};function ct(T,U,B){T.transparent===!0&&T.side===ii&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,Lu(T,U,B),T.side=Ai,T.needsUpdate=!0,Lu(T,U,B),T.side=ii):Lu(T,U,B)}this.compile=function(T,U,B=null){B===null&&(B=T),h=Te.get(B),h.init(U),y.push(h),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),T!==B&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const z=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){const ge=te[ce];ct(ge,B,F),z.add(ge)}else ct(te,B,F),z.add(te)}),h=y.pop(),z},this.compileAsync=function(T,U,B=null){const z=this.compile(T,U,B);return new Promise(F=>{function te(){if(z.forEach(function(ce){ye.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){F(T);return}setTimeout(te,10)}Fe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let nt=null;function Oi(T){nt&&nt(T)}function pi(){$r.stop()}function E0(){$r.start()}const $r=new Bv;$r.setAnimationLoop(Oi),typeof self<"u"&&$r.setContext(self),this.setAnimationLoop=function(T){nt=T,re.setAnimationLoop(T),T===null?$r.stop():$r.start()},re.addEventListener("sessionstart",pi),re.addEventListener("sessionend",E0),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,b),h=Te.get(T,y.length),h.init(U),y.push(h),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Je.setFromProjectionMatrix(Z,si,U.reversedDepth),X=this.localClippingEnabled,Ke=se.init(this.clippingPlanes,X),m=G.get(T,_.length),m.init(),_.push(m),re.enabled===!0&&re.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&Hh(te,U,-1/0,x.sortObjects)}Hh(T,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,q),qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,qe&&Se.addToRenderList(m,T),this.info.render.frame++,Ke===!0&&se.beginShadows();const B=h.state.shadowsArray;xe.render(B,T,U),Ke===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(h.setupLights(),U.isArrayCamera){const te=U.cameras;if(F.length>0)for(let ce=0,ge=te.length;ce<ge;ce++){const he=te[ce];w0(z,F,T,he)}qe&&Se.render(T);for(let ce=0,ge=te.length;ce<ge;ce++){const he=te[ce];T0(m,T,he,he.viewport)}}else F.length>0&&w0(z,F,T,U),qe&&Se.render(T),T0(m,T,U);b!==null&&R===0&&(He.updateMultisampleRenderTarget(b),He.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,U),ue.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(h=y[y.length-1],Ke===!0&&se.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Hh(T,U,B,z){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Je.intersectsSprite(T)){z&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const ce=O.update(T),ge=T.material;ge.visible&&m.push(T,ce,ge,B,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Je.intersectsObject(T))){const ce=O.update(T),ge=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),De.copy(ce.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(ge)){const he=ce.groups;for(let Ce=0,Le=he.length;Ce<Le;Ce++){const Ae=he[Ce],Xe=ge[Ae.materialIndex];Xe&&Xe.visible&&m.push(T,ce,Xe,B,De.z,Ae)}}else ge.visible&&m.push(T,ce,ge,B,De.z,null)}}const te=T.children;for(let ce=0,ge=te.length;ce<ge;ce++)Hh(te[ce],U,B,z)}function T0(T,U,B,z){const F=T.opaque,te=T.transmissive,ce=T.transparent;h.setupLightsView(B),Ke===!0&&se.setGlobalState(x.clippingPlanes,B),z&&ve.viewport(L.copy(z)),F.length>0&&Pu(F,U,B),te.length>0&&Pu(te,U,B),ce.length>0&&Pu(ce,U,B),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function w0(T,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new Nr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?ea:ri,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const te=h.state.transmissionRenderTarget[z.id],ce=z.viewport||L;te.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);const ge=x.getRenderTarget(),he=x.getActiveCubeFace(),Ce=x.getActiveMipmapLevel();x.setRenderTarget(te),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),qe&&Se.render(B);const Le=x.toneMapping;x.toneMapping=sr;const Ae=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),Ke===!0&&se.setGlobalState(x.clippingPlanes,z),Pu(T,B,z),He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let at=0,Tt=U.length;at<Tt;at++){const ht=U[at],lt=ht.object,Re=ht.geometry,St=ht.material,Qe=ht.group;if(St.side===ii&&lt.layers.test(z.layers)){const Tn=St.side;St.side=dn,St.needsUpdate=!0,A0(lt,B,z,Re,St,Qe),St.side=Tn,St.needsUpdate=!0,Xe=!0}}Xe===!0&&(He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te))}x.setRenderTarget(ge,he,Ce),x.setClearColor(W,Y),Ae!==void 0&&(z.viewport=Ae),x.toneMapping=Le}function Pu(T,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,te=T.length;F<te;F++){const ce=T[F],ge=ce.object,he=ce.geometry,Ce=ce.group;let Le=ce.material;Le.allowOverride===!0&&z!==null&&(Le=z),ge.layers.test(B.layers)&&A0(ge,U,B,he,Le,Ce)}}function A0(T,U,B,z,F,te){T.onBeforeRender(x,U,B,z,F,te),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,U,B,z,T,te),F.transparent===!0&&F.side===ii&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,x.renderBufferDirect(B,U,z,F,T,te),F.side=Ai,F.needsUpdate=!0,x.renderBufferDirect(B,U,z,F,T,te),F.side=ii):x.renderBufferDirect(B,U,z,F,T,te),T.onAfterRender(x,U,B,z,F,te)}function Lu(T,U,B){U.isScene!==!0&&(U=we);const z=ye.get(T),F=h.state.lights,te=h.state.shadowsArray,ce=F.state.version,ge=j.getParameters(T,F.state,te,U,B),he=j.getProgramCacheKey(ge);let Ce=z.programs;z.environment=T.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(T.isMeshStandardMaterial?At:Ot).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",K),Ce=new Map,z.programs=Ce);let Le=Ce.get(he);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===ce)return C0(T,ge),Le}else ge.uniforms=j.getUniforms(T),T.onBeforeCompile(ge,x),Le=j.acquireProgram(ge,he),Ce.set(he,Le),z.uniforms=ge.uniforms;const Ae=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=se.uniform),C0(T,ge),z.needsLights=CR(T),z.lightsStateVersion=ce,z.needsLights&&(Ae.ambientLightColor.value=F.state.ambient,Ae.lightProbe.value=F.state.probe,Ae.directionalLights.value=F.state.directional,Ae.directionalLightShadows.value=F.state.directionalShadow,Ae.spotLights.value=F.state.spot,Ae.spotLightShadows.value=F.state.spotShadow,Ae.rectAreaLights.value=F.state.rectArea,Ae.ltc_1.value=F.state.rectAreaLTC1,Ae.ltc_2.value=F.state.rectAreaLTC2,Ae.pointLights.value=F.state.point,Ae.pointLightShadows.value=F.state.pointShadow,Ae.hemisphereLights.value=F.state.hemi,Ae.directionalShadowMap.value=F.state.directionalShadowMap,Ae.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ae.spotShadowMap.value=F.state.spotShadowMap,Ae.spotLightMatrix.value=F.state.spotLightMatrix,Ae.spotLightMap.value=F.state.spotLightMap,Ae.pointShadowMap.value=F.state.pointShadowMap,Ae.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function R0(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Ru.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function C0(T,U){const B=ye.get(T);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function AR(T,U,B,z,F){U.isScene!==!0&&(U=we),He.resetTextureUnits();const te=U.fog,ce=z.isMeshStandardMaterial?U.environment:null,ge=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:en,he=(z.isMeshStandardMaterial?At:Ot).get(z.envMap||ce),Ce=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,at=!!B.morphAttributes.color;let Tt=sr;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const ht=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,lt=ht!==void 0?ht.length:0,Re=ye.get(z),St=h.state.lights;if(Ke===!0&&(X===!0||T!==S)){const on=T===S&&z.id===E;se.setState(z,T,on)}let Qe=!1;z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==St.state.version||Re.outputColorSpace!==ge||F.isBatchedMesh&&Re.batching===!1||!F.isBatchedMesh&&Re.batching===!0||F.isBatchedMesh&&Re.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Re.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Re.instancing===!1||!F.isInstancedMesh&&Re.instancing===!0||F.isSkinnedMesh&&Re.skinning===!1||!F.isSkinnedMesh&&Re.skinning===!0||F.isInstancedMesh&&Re.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Re.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Re.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Re.instancingMorph===!1&&F.morphTexture!==null||Re.envMap!==he||z.fog===!0&&Re.fog!==te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Ce||Re.vertexTangents!==Le||Re.morphTargets!==Ae||Re.morphNormals!==Xe||Re.morphColors!==at||Re.toneMapping!==Tt||Re.morphTargetsCount!==lt)&&(Qe=!0):(Qe=!0,Re.__version=z.version);let Tn=Re.currentProgram;Qe===!0&&(Tn=Lu(z,U,F));let ao=!1,wn=!1,Ma=!1;const Mt=Tn.getUniforms(),Un=Re.uniforms;if(ve.useProgram(Tn.program)&&(ao=!0,wn=!0,Ma=!0),z.id!==E&&(E=z.id,wn=!0),ao||S!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(P,"projectionMatrix",T.projectionMatrix),Mt.setValue(P,"viewMatrix",T.matrixWorldInverse);const pn=Mt.map.cameraPosition;pn!==void 0&&pn.setValue(P,me.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,wn=!0,Ma=!0)}if(F.isSkinnedMesh){Mt.setOptional(P,F,"bindMatrix"),Mt.setOptional(P,F,"bindMatrixInverse");const on=F.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Mt.setValue(P,"boneTexture",on.boneTexture,He))}F.isBatchedMesh&&(Mt.setOptional(P,F,"batchingTexture"),Mt.setValue(P,"batchingTexture",F._matricesTexture,He),Mt.setOptional(P,F,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",F._indirectTexture,He),Mt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",F._colorsTexture,He));const Fn=B.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&ie.update(F,B,Tn),(wn||Re.receiveShadow!==F.receiveShadow)&&(Re.receiveShadow=F.receiveShadow,Mt.setValue(P,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Un.envMap.value=he,Un.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Un.envMapIntensity.value=U.environmentIntensity),wn&&(Mt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&RR(Un,Ma),te&&z.fog===!0&&J.refreshFogUniforms(Un,te),J.refreshMaterialUniforms(Un,z,I,ne,h.state.transmissionRenderTarget[T.id]),Ru.upload(P,R0(Re),Un,He)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ru.upload(P,R0(Re),Un,He),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(P,"center",F.center),Mt.setValue(P,"modelViewMatrix",F.modelViewMatrix),Mt.setValue(P,"normalMatrix",F.normalMatrix),Mt.setValue(P,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const on=z.uniformsGroups;for(let pn=0,Vh=on.length;pn<Vh;pn++){const Yr=on[pn];ke.update(Yr,Tn),ke.bind(Yr,Tn)}}return Tn}function RR(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function CR(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,U,B){const z=ye.get(T);z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ye.get(T.texture).__webglTexture=U,ye.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const B=ye.get(T);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const bR=P.createFramebuffer();this.setRenderTarget=function(T,U=0,B=0){b=T,w=U,R=B;let z=!0,F=null,te=!1,ce=!1;if(T){const he=ye.get(T);if(he.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(he.__webglFramebuffer===void 0)He.setupRenderTarget(T);else if(he.__hasExternalTextures)He.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ae=T.depthTexture;if(he.__boundDepthTexture!==Ae){if(Ae!==null&&ye.has(Ae)&&(T.width!==Ae.image.width||T.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ce=!0);const Le=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?F=Le[U][B]:F=Le[U],te=!0):T.samples>0&&He.useMultisampledRTT(T)===!1?F=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[B]:F=Le,L.copy(T.viewport),k.copy(T.scissor),H=T.scissorTest}else L.copy(ae).multiplyScalar(I).floor(),k.copy(Ee).multiplyScalar(I).floor(),H=tt;if(B!==0&&(F=bR),ve.bindFramebuffer(P.FRAMEBUFFER,F)&&z&&ve.drawBuffers(T,F),ve.viewport(L),ve.scissor(k),ve.setScissorTest(H),te){const he=ye.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,B)}else if(ce){const he=U;for(let Ce=0;Ce<T.textures.length;Ce++){const Le=ye.get(T.textures[Ce]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,B,he)}}else if(T!==null&&B!==0){const he=ye.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,he.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(T,U,B,z,F,te,ce,ge=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he){ve.bindFramebuffer(P.FRAMEBUFFER,he);try{const Ce=T.textures[ge],Le=Ce.format,Ae=Ce.type;if(!Pe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-z&&B>=0&&B<=T.height-F&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(U,B,z,F,Me.convert(Le),Me.convert(Ae),te))}finally{const Ce=b!==null?ye.get(b).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,U,B,z,F,te,ce,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he)if(U>=0&&U<=T.width-z&&B>=0&&B<=T.height-F){ve.bindFramebuffer(P.FRAMEBUFFER,he);const Ce=T.textures[ge],Le=Ce.format,Ae=Ce.type;if(!Pe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.bufferData(P.PIXEL_PACK_BUFFER,te.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(U,B,z,F,Me.convert(Le),Me.convert(Ae),0);const at=b!==null?ye.get(b).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,at);const Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await MM(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,te),P.deleteBuffer(Xe),P.deleteSync(Tt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,B=0){const z=Math.pow(2,-B),F=Math.floor(T.image.width*z),te=Math.floor(T.image.height*z),ce=U!==null?U.x:0,ge=U!==null?U.y:0;He.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ce,ge,F,te),ve.unbindTexture()};const PR=P.createFramebuffer(),LR=P.createFramebuffer();this.copyTextureToTexture=function(T,U,B=null,z=null,F=0,te=null){te===null&&(F!==0?(ua("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let ce,ge,he,Ce,Le,Ae,Xe,at,Tt;const ht=T.isCompressedTexture?T.mipmaps[te]:T.image;if(B!==null)ce=B.max.x-B.min.x,ge=B.max.y-B.min.y,he=B.isBox3?B.max.z-B.min.z:1,Ce=B.min.x,Le=B.min.y,Ae=B.isBox3?B.min.z:0;else{const Fn=Math.pow(2,-F);ce=Math.floor(ht.width*Fn),ge=Math.floor(ht.height*Fn),T.isDataArrayTexture?he=ht.depth:T.isData3DTexture?he=Math.floor(ht.depth*Fn):he=1,Ce=0,Le=0,Ae=0}z!==null?(Xe=z.x,at=z.y,Tt=z.z):(Xe=0,at=0,Tt=0);const lt=Me.convert(U.format),Re=Me.convert(U.type);let St;U.isData3DTexture?(He.setTexture3D(U,0),St=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),St=P.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),St=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Qe=P.getParameter(P.UNPACK_ROW_LENGTH),Tn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ao=P.getParameter(P.UNPACK_SKIP_PIXELS),wn=P.getParameter(P.UNPACK_SKIP_ROWS),Ma=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae);const Mt=T.isDataArrayTexture||T.isData3DTexture,Un=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Fn=ye.get(T),on=ye.get(U),pn=ye.get(Fn.__renderTarget),Vh=ye.get(on.__renderTarget);ve.bindFramebuffer(P.READ_FRAMEBUFFER,pn.__webglFramebuffer),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,Vh.__webglFramebuffer);for(let Yr=0;Yr<he;Yr++)Mt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,F,Ae+Yr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,te,Tt+Yr)),P.blitFramebuffer(Ce,Le,ce,ge,Xe,at,ce,ge,P.DEPTH_BUFFER_BIT,P.NEAREST);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||ye.has(T)){const Fn=ye.get(T),on=ye.get(U);ve.bindFramebuffer(P.READ_FRAMEBUFFER,PR),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,LR);for(let pn=0;pn<he;pn++)Mt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fn.__webglTexture,F,Ae+pn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Fn.__webglTexture,F),Un?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,on.__webglTexture,te,Tt+pn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,on.__webglTexture,te),F!==0?P.blitFramebuffer(Ce,Le,ce,ge,Xe,at,ce,ge,P.COLOR_BUFFER_BIT,P.NEAREST):Un?P.copyTexSubImage3D(St,te,Xe,at,Tt+pn,Ce,Le,ce,ge):P.copyTexSubImage2D(St,te,Xe,at,Ce,Le,ce,ge);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Un?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(St,te,Xe,at,Tt,ce,ge,he,lt,Re,ht.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(St,te,Xe,at,Tt,ce,ge,he,lt,ht.data):P.texSubImage3D(St,te,Xe,at,Tt,ce,ge,he,lt,Re,ht):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,te,Xe,at,ce,ge,lt,Re,ht.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,te,Xe,at,ht.width,ht.height,lt,ht.data):P.texSubImage2D(P.TEXTURE_2D,te,Xe,at,ce,ge,lt,Re,ht);P.pixelStorei(P.UNPACK_ROW_LENGTH,Qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ao),P.pixelStorei(P.UNPACK_SKIP_ROWS,wn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ma),te===0&&U.generateMipmaps&&P.generateMipmap(St),ve.unbindTexture()},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&He.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?He.setTextureCube(T,0):T.isData3DTexture?He.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?He.setTexture2DArray(T,0):He.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){w=0,R=0,b=null,ve.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}function p0(n,e){if(e===$S)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===zd||e===I_){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===zd)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class VA extends to{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $A(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new aR(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=ya.extractUrlBase(e);o=ya.resolveURL(u,this.path)}else o=ya.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Dv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,o,function(f){t(f),s.manager.itemEnd(e)},a)}catch(f){a(f)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===m0){try{o[We.KHR_BINARY_GLTF]=new lR(e)}catch(c){r&&r(c);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new SR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const c=this.pluginCallbacks[f](u);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,o[c.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const c=s.extensionsUsed[f],d=s.extensionsRequired||[];switch(c){case We.KHR_MATERIALS_UNLIT:o[c]=new XA;break;case We.KHR_DRACO_MESH_COMPRESSION:o[c]=new uR(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[c]=new cR;break;case We.KHR_MESH_QUANTIZATION:o[c]=new fR;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function GA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class WA{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const f=new Ne(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],en);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Ov(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new wE(f),u.distance=c;break;case"spot":u=new EE(f),u.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),hi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class XA{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Or}extendParams(e,t,i){const r=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],en),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Ht))}return Promise.all(r)}}class jA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class $A{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(s)}}class YA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class KA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class qA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class ZA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class JA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],en),Promise.all(s)}}class QA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class eR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(s)}}class tR{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class nR{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class iR{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class rR{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return i.loadTextureImage(e,o.source,l)}}class sR{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const u=i.options.manager.getHandler(a.uri);u!==null&&(l=u)}return i.loadTextureImage(e,o.source,l)}}class oR{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,u=r.byteLength||0,f=r.count,c=r.byteStride,d=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,c,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(f*c);return o.decodeGltfBuffer(new Uint8Array(p),f,c,d,r.mode,r.filter),p})})}else return null}}class aR{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==Nn.TRIANGLES&&u.mode!==Nn.TRIANGLE_STRIP&&u.mode!==Nn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(f=>(l[u]=f,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const f=u.pop(),c=f.isGroup?f.children:[f],d=u[0].count,p=[];for(const g of c){const v=new Be,m=new N,h=new lr,_=new N(1,1,1),y=new QM(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,v.compose(m,h,_));for(const x in l)if(x==="_COLOR_0"){const A=l[x];y.instanceColor=new mh(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);xt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return f.isGroup?(f.clear(),f.add(...p),f):p[0]}))}}const m0="glTF",Sa=12,g0={JSON:1313821514,BIN:5130562};class lR{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Sa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==m0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Sa,s=new DataView(e,Sa);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===g0.JSON){const u=new Uint8Array(e,Sa+o,a);this.content=i.decode(u)}else if(l===g0.BIN){const u=Sa+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const f in o){const c=Oh[f]||f.toLowerCase();a[c]=o[f]}for(const f in e.attributes){const c=Oh[f]||f.toLowerCase();if(o[f]!==void 0){const d=i.accessors[e.attributes[f]],p=oo[d.componentType];u[c]=p.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(c,d){r.decodeDracoFile(f,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}c(p)},a,u,en,d)})})}}class cR{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fR{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class _0 extends _a{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,f=r-t,c=(i-t)/f,d=c*c,p=d*c,g=e*u,v=g-u,m=-2*p+3*d,h=p-d,_=1-m,y=h-d+c;for(let x=0;x!==a;x++){const A=o[v+x+a],w=o[v+x+l]*f,R=o[g+x+a],b=o[g+x]*f;s[x]=_*A+y*w+m*R+h*b}return s}}const dR=new lr;class hR extends _0{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return dR.fromArray(s).normalize().toArray(s),s}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},oo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},v0={9728:Qt,9729:Sn,9984:S_,9985:Hl,9986:Jo,9987:Ri},y0={33071:or,33648:zl,10497:Ps},Fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pR={CUBICSPLINE:void 0,LINEAR:sa,STEP:ra},kh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Su({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),n.DefaultMaterial}function jr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function hi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gR(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,f=e.length;u<f;u++){const c=e[u];if(c.POSITION!==void 0&&(i=!0),c.NORMAL!==void 0&&(r=!0),c.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let u=0,f=e.length;u<f;u++){const c=e[u];if(i){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):n.attributes.position;o.push(d)}if(r){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const f=u[0],c=u[1],d=u[2];return i&&(n.morphAttributes.position=f),r&&(n.morphAttributes.normal=c),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function _R(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vR(n){let e;const t=n.extensions&&n.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bh(t.attributes):e=n.indices+":"+Bh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Bh(n.targets[i]);return e}function Bh(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function zh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xR=new Be;class SR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new GA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new SE(this.options.manager):this.textureLoader=new CE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return jr(s,a,r),hi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,f]of o.children.entries())s(f,a.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(ya.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Fh[r.type],a=oo[r.componentType],l=r.normalized===!0,u=new a(r.count*o);return Promise.resolve(new tn(u,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Fh[r.type],u=oo[r.componentType],f=u.BYTES_PER_ELEMENT,c=f*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(p&&p!==c){const h=Math.floor(d/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let y=t.cache.get(_);y||(v=new u(a,h*p,r.count*p/f),y=new YM(v,p/f),t.cache.add(_,y)),m=new fh(y,l,d%p/f,g)}else a===null?v=new u(r.count*l):v=new u(a,d,r.count*l),m=new tn(v,l,g);if(r.sparse!==void 0){const h=Fh.SCALAR,_=oo[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,A=new _(o[1],y,r.sparse.count*h),w=new u(o[2],x,r.sparse.count*l);a!==null&&(m=new tn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,b=A.length;R<b;R++){const E=A[R];if(m.setX(E,w[R*l]),l>=2&&m.setY(E,w[R*l+1]),l>=3&&m.setZ(E,w[R*l+2]),l>=4&&m.setW(E,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(f){f.flipY=!1,f.name=o.name||a.name||"",f.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(f.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return f.magFilter=v0[d.magFilter]||Sn,f.minFilter=v0[d.minFilter]||Ri,f.wrapS=y0[d.wrapS]||Ps,f.wrapT=y0[d.wrapT]||Ps,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Qt&&f.minFilter!==Sn,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(c){u=!0;const d=new Blob([c],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(c){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Ut(v);m.needsUpdate=!0,d(m)}),t.load(ya.resolveURL(c,s.path),g,void 0,p)})}).then(function(c){return u===!0&&a.revokeObjectURL(l),hi(c,o),c.userData.mimeType=o.mimeType||yR(o.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=f,f}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new wv,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new xv,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Su}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},u=[];if(l[We.KHR_MATERIALS_UNLIT]){const c=r[We.KHR_MATERIALS_UNLIT];o=c.getMaterialType(),u.push(c.extendParams(a,s,t))}else{const c=s.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],en),a.opacity=d[3]}c.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",c.baseColorTexture,Ht)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ii);const f=s.alphaMode||kh.OPAQUE;if(f===kh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===kh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Or&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $e(1,1),s.normalTexture.scale!==void 0)){const c=s.normalTexture.scale;a.normalScale.set(c,c)}if(s.occlusionTexture!==void 0&&o!==Or&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Or){const c=s.emissiveFactor;a.emissive=new Ne().setRGB(c[0],c[1],c[2],en)}return s.emissiveTexture!==void 0&&o!==Or&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ht)),Promise.all(u).then(function(){const c=new o(a);return s.name&&(c.name=s.name),hi(c,s),t.associations.set(c,{materials:e}),s.extensions&&jr(r,c,s),c})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return x0(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],f=vR(u),c=r[f];if(c)o.push(c.promise);else{let d;u.extensions&&u.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(u):d=x0(new ci,u,t),r[f]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const f=o[l].material===void 0?mR(this.cache):this.getDependency("material",o[l].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),f=l[l.length-1],c=[];for(let p=0,g=f.length;p<g;p++){const v=f[p],m=o[p];let h;const _=u[p];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new qM(v,_):new hn(v,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?h.geometry=p0(h.geometry,I_):m.mode===Nn.TRIANGLE_FAN&&(h.geometry=p0(h.geometry,zd));else if(m.mode===Nn.LINES)h=new iE(v,_);else if(m.mode===Nn.LINE_STRIP)h=new yh(v,_);else if(m.mode===Nn.LINE_LOOP)h=new rE(v,_);else if(m.mode===Nn.POINTS)h=new sE(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&_R(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),hi(h,s),m.extensions&&jr(r,h,m),t.assignFinalMaterial(h),c.push(h)}for(let p=0,g=c.length;p<g;p++)t.associations.set(c[p],{meshes:e,primitives:p});if(c.length===1)return s.extensions&&jr(r,c[0],s),c[0];const d=new Br;s.extensions&&jr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=c.length;p<g;p++)d.add(c[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new rn(xM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Th(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),hi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let u=0,f=o.length;u<f;u++){const c=o[u];if(c){a.push(c);const d=new Be;s!==null&&d.fromArray(s.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new ph(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],u=[],f=[];for(let c=0,d=r.channels.length;c<d;c++){const p=r.channels[c],g=r.samplers[p.sampler],v=p.target,m=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",_)),u.push(g),f.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(f)]).then(function(c){const d=c[0],p=c[1],g=c[2],v=c[3],m=c[4],h=[];for(let y=0,x=d.length;y<x;y++){const A=d[y],w=p[y],R=g[y],b=v[y],E=m[y];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const S=i._createAnimationTracks(A,w,R,b,E);if(S)for(let L=0;L<S.length;L++)h.push(S[L])}const _=new pE(s,void 0,h);return hi(_,r),_})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=r.weights.length;l<u;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let u=0,f=a.length;u<f;u++)o.push(i.getDependency("node",a[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(u){const f=u[0],c=u[1],d=u[2];d!==null&&f.traverse(function(p){p.isSkinnedMesh&&p.bind(d,xR)});for(let p=0,g=c.length;p<g;p++)f.add(c[p]);return f})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let f;if(s.isBone===!0?f=new mv:u.length>1?f=new Br:u.length===1?f=u[0]:f=new xt,f!==u[0])for(let c=0,d=u.length;c<d;c++)f.add(u[c]);if(s.name&&(f.userData.name=s.name,f.name=o),hi(f,s),s.extensions&&jr(i,f,s),s.matrix!==void 0){const c=new Be;c.fromArray(s.matrix),f.applyMatrix4(c)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);if(!r.associations.has(f))r.associations.set(f,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const c=r.associations.get(f);r.associations.set(f,{...c})}return r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Br;i.name&&(s.name=r.createUniqueName(i.name)),hi(s,i),i.extensions&&jr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let f=0,c=l.length;f<c;f++)s.add(l[f]);const u=f=>{const c=new Map;for(const[d,p]of r.associations)(d instanceof ui||d instanceof Ut)&&c.set(d,p);return f.traverse(d=>{const p=r.associations.get(d);p!=null&&c.set(d,p)}),c};return r.associations=u(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];gr[s.path]===gr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let u;switch(gr[s.path]){case gr.weights:u=Zs;break;case gr.rotation:u=Js;break;case gr.translation:case gr.scale:u=eo;break;default:switch(i.itemSize){case 1:u=Zs;break;case 2:case 3:default:u=eo;break}break}const f=r.interpolation!==void 0?pR[r.interpolation]:sa,c=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new u(l[d]+"."+gr[s.path],t.array,c,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=zh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Js?hR:_0;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MR(n,e,t){const i=e.attributes,r=new oi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(u[0],u[1],u[2])),a.normalized){const f=zh(oo[a.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let u=0,f=s.length;u<f;u++){const c=s[u];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const v=zh(oo[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new ai;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function x0(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Oh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ye.workingColorSpace!==en&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),hi(n,e),MR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?gR(n,e.targets,t):n})}const _r="labubu-renderer",bu=160;function ER(){let n=document.getElementById(_r);return n||(n=document.createElement("div"),n.id=_r,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.transform="translate(-50%, -50%)",n.style.zIndex="2147483646",n.style.pointerEvents="auto",n.style.width=`${bu}px`,n.style.height=`${bu}px`,n.style.display="none",(document.body??document.documentElement).appendChild(n),new MutationObserver(()=>{document.getElementById(_r)||(document.body??document.documentElement).appendChild(n)}).observe(document.documentElement,{childList:!0,subtree:!0})),n}function S0(){try{const n=location.pathname.match(/\/world\/([0-9a-fA-F-]{36})/);return n?n[1]:null}catch{return null}}async function M0(){var n;try{if((n=chrome==null?void 0:chrome.storage)!=null&&n.sync){const{player_id:e}=await chrome.storage.sync.get(["player_id"]);if(e)return e;const t=crypto.randomUUID();return await chrome.storage.sync.set({player_id:t}),t}}catch{}try{const e="__player_id";let t=localStorage.getItem(e);return t||(t=crypto.randomUUID(),localStorage.setItem(e,t)),t}catch{return crypto.randomUUID()}}function TR(){const n=je.useRef(null),[e,t]=je.useState(!1),i=je.useRef(null),r=je.useRef(.01),s=je.useRef(null),o=je.useRef(!1),a=je.useRef(null),l=je.useRef(null),u=f=>{const c=a.current;c&&c.traverse(d=>{const p=d;if(p.isMesh&&p.material){const g=p.material;f?(g.color.setHex(6736998),g.emissive.setHex(2245666),g.emissiveIntensity=.3):(g.color.setHex(16777215),g.emissive.setHex(16777215),g.emissiveIntensity=.7),g.needsUpdate=!0}})};return je.useEffect(()=>{let f=!1;return(async()=>{try{const c=await c_();if(f||!c)return;const d=S0(),p=c.world_id??null;if(l.current=p,!d||!p||d!==p){s.current=null,i.current=null;const y=document.getElementById(_r);y&&(y.style.display="none"),t(!1);return}const g=c.labubu_id??c.id??null;s.current=g,r.current=Math.max(.1,Number(c.radius_m??2));const v=c.pos??{},m=Number(v.x??0),h=Number(v.y??0),_=Number(v.z??0);i.current=new N(m,h,_);try{if(s.current){const y=await M0(),x=await f_(y,s.current);o.current=!!x,a.current&&u(o.current)}}catch(y){console.warn("[Labubu] isClaimed failed",y)}t(!0)}catch(c){console.warn("[Labubu] Failed to load today",c)}})(),()=>{f=!0}},[]),je.useEffect(()=>{let f=!1;const c=()=>{if(f)return;const v=S0(),m=l.current,h=!!v&&!!m&&v===m;if(!h&&e){s.current=null,i.current=null;const _=document.getElementById(_r);_&&(_.style.display="none"),t(!1)}else h&&!e&&i.current&&t(!0)},d=()=>{try{c()}catch{}},p=()=>{try{c()}catch{}},g=setInterval(c,1e3);return window.addEventListener("popstate",d),window.addEventListener("hashchange",p),()=>{f=!0,clearInterval(g),window.removeEventListener("popstate",d),window.removeEventListener("hashchange",p)}},[e]),je.useEffect(()=>{let f=!1;const c=d=>{const p=d==null?void 0:d.data;if(!p||!p.__mt||p.type!=="MT_COORDS")return;if(!e){const x=document.getElementById(_r);x&&(x.style.display="none");return}const g=new N(Number(p.x)||0,Number(p.y)||0,Number(p.z)||0),v=i.current,m=r.current||0;let h=!1,_=NaN;v&&(_=g.distanceTo(v),h=_<=m),console.log(`[Labubu] Coords: pos=(${g.x.toFixed(2)}, ${g.y.toFixed(2)}, ${g.z.toFixed(2)}) tgt=${v?v.toArray().map(x=>x.toFixed(2)).join(","):"n/a"} radius=${m.toFixed(2)} dist=${isNaN(_)?"?":_.toFixed(2)} -> ${h?"SHOW":"HIDE"} (labubu_id=${s.current??"null"})`);const y=document.getElementById(_r);if(y){const x=o.current===!0;y.style.display=h?"block":"none",y.style.cursor=h&&!x?"pointer":"default",y.style.background="transparent"}if(h!==f){f=h;try{window.dispatchEvent(new CustomEvent("LABUBU_PROXIMITY",{detail:{near:h}}))}catch{}}};return window.addEventListener("message",c,!0),()=>window.removeEventListener("message",c,!0)},[e]),je.useEffect(()=>{var A;if(!e)return;const f=n.current,c=new HA({antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setSize(f.clientWidth,f.clientHeight),c.domElement.style.display="block",c.domElement.style.pointerEvents="none",f.appendChild(c.domElement);const d=new $M,p=new rn(45,f.clientWidth/f.clientHeight,.1,100);p.position.set(.6,1,2.2),d.add(new RE(16777215,.8));const g=new Ov(16777215,1.2);g.position.set(2,4,3),d.add(g);const v=()=>{const w=f.clientWidth||bu,R=f.clientHeight||bu;c.setSize(w,R),p.aspect=w/R,p.updateProjectionMatrix()},m=new ResizeObserver(v);m.observe(f);const h=(A=chrome==null?void 0:chrome.runtime)!=null&&A.getURL?chrome.runtime.getURL("labubu.glb"):"labubu.glb";new VA().load(h,w=>{const R=w.scene;a.current=R,R.scale.set(.5,.5,.5),R.traverse(W=>{const Y=W;if(Y.isMesh&&Y.material){const V=Y.material;V.color.setHex(16777215),V.metalness=.25,V.roughness=.15,V.emissive.setHex(16777215),V.emissiveIntensity=.7,V.needsUpdate=!0}}),d.add(R),o.current&&u(!0);const b=new oi().setFromObject(R),E=b.getSize(new N),S=b.getCenter(new N),L=Math.max(E.x,E.y,E.z),k=p.fov*(Math.PI/180);let H=Math.abs(L/2/Math.tan(k/2))*1.5;p.position.set(S.x,S.y,H),p.lookAt(S),p.updateProjectionMatrix()},void 0,w=>{console.error("[Labubu] GLB load error:",w);const R=new Xs(1,1,1),b=new Su({color:16777215}),E=new hn(R,b);a.current=E,E.scale.set(.5,.5,.5),d.add(E)});let y=0;const x=()=>{y=requestAnimationFrame(x),a.current&&(a.current.rotation.y+=.01),c.render(d,p)};return x(),()=>{cancelAnimationFrame(y),m.disconnect(),c.dispose(),d.traverse(w=>{var b,E,S;const R=w;if(R.isMesh){(E=(b=R.geometry)==null?void 0:b.dispose)==null||E.call(b);const L=R.material;Array.isArray(L)?L.forEach(k=>{var H;return(H=k.dispose)==null?void 0:H.call(k)}):(S=L==null?void 0:L.dispose)==null||S.call(L)}}),f.removeChild(c.domElement)}},[e]),je.useEffect(()=>{const f=document.getElementById(_r);if(!f)return;let c=!1;const d=async()=>{try{if(c||(c=!0,f.style.display==="none")||o.current)return;const p=s.current;if(!p)return;const g=await M0(),v=await sS(g,p,1);if(!v.ok)console.warn("[Labubu] Claim failed:",v);else if(v.already_found)console.log("[Labubu] Already claimed today. Score:",v.user_score),o.current=!0,u(!0);else{console.log("[Labubu] Claimed! New score:",v.user_score),o.current=!0,u(!0);try{window.dispatchEvent(new CustomEvent("LABUBU_CLAIMED"))}catch{}}}catch(p){console.error("[Labubu] Claim error",p)}finally{c=!1}};return f.addEventListener("click",d,!0),()=>f.removeEventListener("click",d,!0)},[]),Ie.jsx("div",{ref:n,style:{width:"100%",height:"100%",background:"transparent"}})}function wR(){return Ie.jsx(TR,{})}try{const n=ER();Xf(n).render(Ie.jsx(wR,{})),console.log("[Labubu] Mounted (clean simple mode)")}catch(n){console.error("[Labubu] Failed to mount:",n)}})();
//# sourceMappingURL=hud.js.map
