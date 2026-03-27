import{j as s,m as pl}from"./vendor-motion-D_unjqfS.js";import{a as dh,s as mh,r as He,t as ph,c as fh,u as hh,L as js,T as Dt,X as vh,B as fl,H as gh,P as xh,b as hl,C as bh,S as xm,d as vl,e as gl,F as Qi,f as Cm,g as xl,U as yh,N as jh,M as Sh,h as qh,i as Ah,j as Eh,k as Oh,l as Th,m as Mh,n as wm,o as zh,I as Uh,p as Dh,q as Ch,v as te}from"./vendor-misc-BsKz_5Cw.js";import{r as wh}from"./vendor-react-uyoktR_I.js";import{h as Nh}from"./vendor-syntax-BHh_OmOT.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))m(E);new MutationObserver(E=>{for(const O of E)if(O.type==="childList")for(const D of O.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&m(D)}).observe(document,{childList:!0,subtree:!0});function p(E){const O={};return E.integrity&&(O.integrity=E.integrity),E.referrerPolicy&&(O.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?O.credentials="include":E.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function m(E){if(E.ep)return;E.ep=!0;const O=p(E);fetch(E.href,O)}})();var cl={exports:{}},bs={},dl={exports:{}},ml={};var bm;function Rh(){return bm||(bm=1,(function(n){function c(q,M){var R=q.length;q.push(M);e:for(;0<R;){var re=R-1>>>1,ne=q[re];if(0<E(ne,M))q[re]=M,q[R]=ne,R=re;else break e}}function p(q){return q.length===0?null:q[0]}function m(q){if(q.length===0)return null;var M=q[0],R=q.pop();if(R!==M){q[0]=R;e:for(var re=0,ne=q.length,Ne=ne>>>1;re<Ne;){var ce=2*(re+1)-1,J=q[ce],qe=ce+1,xa=q[qe];if(0>E(J,R))qe<ne&&0>E(xa,J)?(q[re]=xa,q[qe]=R,re=qe):(q[re]=J,q[ce]=R,re=ce);else if(qe<ne&&0>E(xa,R))q[re]=xa,q[qe]=R,re=qe;else break e}}return M}function E(q,M){var R=q.sortIndex-M.sortIndex;return R!==0?R:q.id-M.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;n.unstable_now=function(){return O.now()}}else{var D=Date,T=D.now();n.unstable_now=function(){return D.now()-T}}var V=[],oe=[],H=1,ie=null,Q=3,fe=!1,X=!1,Z=!1,ge=!1,we=typeof setTimeout=="function"?setTimeout:null,Qe=typeof clearTimeout=="function"?clearTimeout:null,Se=typeof setImmediate<"u"?setImmediate:null;function Pe(q){for(var M=p(oe);M!==null;){if(M.callback===null)m(oe);else if(M.startTime<=q)m(oe),M.sortIndex=M.expirationTime,c(V,M);else break;M=p(oe)}}function aa(q){if(Z=!1,Pe(q),!X)if(p(V)!==null)X=!0,Ye||(Ye=!0,ta());else{var M=p(oe);M!==null&&Oa(aa,M.startTime-q)}}var Ye=!1,Ea=-1,ma=5,Ct=-1;function As(){return ge?!0:!(n.unstable_now()-Ct<ma)}function wt(){if(ge=!1,Ye){var q=n.unstable_now();Ct=q;var M=!0;try{e:{X=!1,Z&&(Z=!1,Qe(Ea),Ea=-1),fe=!0;var R=Q;try{a:{for(Pe(q),ie=p(V);ie!==null&&!(ie.expirationTime>q&&As());){var re=ie.callback;if(typeof re=="function"){ie.callback=null,Q=ie.priorityLevel;var ne=re(ie.expirationTime<=q);if(q=n.unstable_now(),typeof ne=="function"){ie.callback=ne,Pe(q),M=!0;break a}ie===p(V)&&m(V),Pe(q)}else m(V);ie=p(V)}if(ie!==null)M=!0;else{var Ne=p(oe);Ne!==null&&Oa(aa,Ne.startTime-q),M=!1}}break e}finally{ie=null,Q=R,fe=!1}M=void 0}}finally{M?ta():Ye=!1}}}var ta;if(typeof Se=="function")ta=function(){Se(wt)};else if(typeof MessageChannel<"u"){var Es=new MessageChannel,jo=Es.port2;Es.port1.onmessage=wt,ta=function(){jo.postMessage(null)}}else ta=function(){we(wt,0)};function Oa(q,M){Ea=we(function(){q(n.unstable_now())},M)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(q){q.callback=null},n.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ma=0<q?Math.floor(1e3/q):5},n.unstable_getCurrentPriorityLevel=function(){return Q},n.unstable_next=function(q){switch(Q){case 1:case 2:case 3:var M=3;break;default:M=Q}var R=Q;Q=M;try{return q()}finally{Q=R}},n.unstable_requestPaint=function(){ge=!0},n.unstable_runWithPriority=function(q,M){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var R=Q;Q=q;try{return M()}finally{Q=R}},n.unstable_scheduleCallback=function(q,M,R){var re=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?re+R:re):R=re,q){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=R+ne,q={id:H++,callback:M,priorityLevel:q,startTime:R,expirationTime:ne,sortIndex:-1},R>re?(q.sortIndex=R,c(oe,q),p(V)===null&&q===p(oe)&&(Z?(Qe(Ea),Ea=-1):Z=!0,Oa(aa,R-re))):(q.sortIndex=ne,c(V,q),X||fe||(X=!0,Ye||(Ye=!0,ta()))),q},n.unstable_shouldYield=As,n.unstable_wrapCallback=function(q){var M=Q;return function(){var R=Q;Q=M;try{return q.apply(this,arguments)}finally{Q=R}}}})(ml)),ml}var ym;function Vh(){return ym||(ym=1,dl.exports=Rh()),dl.exports}var jm;function Hh(){if(jm)return bs;jm=1;var n=Vh(),c=dh(),p=wh();function m(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function O(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function D(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function T(e){if(O(e)!==e)throw Error(m(188))}function V(e){var a=e.alternate;if(!a){if(a=O(e),a===null)throw Error(m(188));return a!==e?null:e}for(var t=e,o=a;;){var i=t.return;if(i===null)break;var r=i.alternate;if(r===null){if(o=i.return,o!==null){t=o;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===t)return T(i),e;if(r===o)return T(i),a;r=r.sibling}throw Error(m(188))}if(t.return!==o.return)t=i,o=r;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,o=r;break}if(u===o){l=!0,o=i,t=r;break}u=u.sibling}if(!l){for(u=r.child;u;){if(u===t){l=!0,t=r,o=i;break}if(u===o){l=!0,o=r,t=i;break}u=u.sibling}if(!l)throw Error(m(189))}}if(t.alternate!==o)throw Error(m(190))}if(t.tag!==3)throw Error(m(188));return t.stateNode.current===t?e:a}function oe(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=oe(e),a!==null)return a;e=e.sibling}return null}var H=Object.assign,ie=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),we=Symbol.for("react.provider"),Qe=Symbol.for("react.consumer"),Se=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),aa=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),ma=Symbol.for("react.lazy"),Ct=Symbol.for("react.activity"),As=Symbol.for("react.memo_cache_sentinel"),wt=Symbol.iterator;function ta(e){return e===null||typeof e!="object"?null:(e=wt&&e[wt]||e["@@iterator"],typeof e=="function"?e:null)}var Es=Symbol.for("react.client.reference");function jo(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Es?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case ge:return"Profiler";case Z:return"StrictMode";case aa:return"Suspense";case Ye:return"SuspenseList";case Ct:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case fe:return"Portal";case Se:return(e.displayName||"Context")+".Provider";case Qe:return(e._context.displayName||"Context")+".Consumer";case Pe:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ea:return a=e.displayName||null,a!==null?a:jo(e.type)||"Memo";case ma:a=e._payload,e=e._init;try{return jo(e(a))}catch{}}return null}var Oa=Array.isArray,q=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},re=[],ne=-1;function Ne(e){return{current:e}}function ce(e){0>ne||(e.current=re[ne],re[ne]=null,ne--)}function J(e,a){ne++,re[ne]=e.current,e.current=a}var qe=Ne(null),xa=Ne(null),_a=Ne(null),Os=Ne(null);function Ts(e,a){switch(J(_a,a),J(xa,e),J(qe,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Xd(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Xd(a),e=Fd(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ce(qe),J(qe,e)}function Nt(){ce(qe),ce(xa),ce(_a)}function Zi(e){e.memoizedState!==null&&J(Os,e);var a=qe.current,t=Fd(a,e.type);a!==t&&(J(xa,e),J(qe,t))}function Ms(e){xa.current===e&&(ce(qe),ce(xa)),Os.current===e&&(ce(Os),fs._currentValue=R)}var Ki=Object.prototype.hasOwnProperty,Ii=n.unstable_scheduleCallback,Ji=n.unstable_cancelCallback,_m=n.unstable_shouldYield,Qm=n.unstable_requestPaint,ba=n.unstable_now,Pm=n.unstable_getCurrentPriorityLevel,Ol=n.unstable_ImmediatePriority,Tl=n.unstable_UserBlockingPriority,zs=n.unstable_NormalPriority,Ym=n.unstable_LowPriority,Ml=n.unstable_IdlePriority,Xm=n.log,Fm=n.unstable_setDisableYieldValue,So=null,Xe=null;function Qa(e){if(typeof Xm=="function"&&Fm(e),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(So,e)}catch{}}var Fe=Math.clz32?Math.clz32:Im,Zm=Math.log,Km=Math.LN2;function Im(e){return e>>>=0,e===0?32:31-(Zm(e)/Km|0)|0}var Us=256,Ds=4194304;function pt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Cs(e,a,t){var o=e.pendingLanes;if(o===0)return 0;var i=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var u=o&134217727;return u!==0?(o=u&~r,o!==0?i=pt(o):(l&=u,l!==0?i=pt(l):t||(t=u&~e,t!==0&&(i=pt(t))))):(u=o&~r,u!==0?i=pt(u):l!==0?i=pt(l):t||(t=o&~e,t!==0&&(i=pt(t)))),i===0?0:a!==0&&a!==i&&(a&r)===0&&(r=i&-i,t=a&-a,r>=t||r===32&&(t&4194048)!==0)?a:i}function qo(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Jm(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zl(){var e=Us;return Us<<=1,(Us&4194048)===0&&(Us=256),e}function Ul(){var e=Ds;return Ds<<=1,(Ds&62914560)===0&&(Ds=4194304),e}function Wi(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Ao(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wm(e,a,t,o,i,r){var l=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var u=e.entanglements,d=e.expirationTimes,x=e.hiddenUpdates;for(t=l&~t;0<t;){var j=31-Fe(t),A=1<<j;u[j]=0,d[j]=-1;var b=x[j];if(b!==null)for(x[j]=null,j=0;j<b.length;j++){var y=b[j];y!==null&&(y.lane&=-536870913)}t&=~A}o!==0&&Dl(e,o,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~a))}function Dl(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var o=31-Fe(a);e.entangledLanes|=a,e.entanglements[o]=e.entanglements[o]|1073741824|t&4194090}function Cl(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var o=31-Fe(t),i=1<<o;i&a|e[o]&a&&(e[o]|=a),t&=~i}}function $i(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function er(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wl(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:mm(e.type))}function $m(e,a){var t=M.p;try{return M.p=e,a()}finally{M.p=t}}var Pa=Math.random().toString(36).slice(2),De="__reactFiber$"+Pa,Le="__reactProps$"+Pa,Rt="__reactContainer$"+Pa,ar="__reactEvents$"+Pa,ep="__reactListeners$"+Pa,ap="__reactHandles$"+Pa,Nl="__reactResources$"+Pa,Eo="__reactMarker$"+Pa;function tr(e){delete e[De],delete e[Le],delete e[ar],delete e[ep],delete e[ap]}function Vt(e){var a=e[De];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Rt]||t[De]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Jd(e);e!==null;){if(t=e[De])return t;e=Jd(e)}return a}e=t,t=e.parentNode}return null}function Ht(e){if(e=e[De]||e[Rt]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function Oo(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(m(33))}function Lt(e){var a=e[Nl];return a||(a=e[Nl]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ae(e){e[Eo]=!0}var Rl=new Set,Vl={};function ft(e,a){kt(e,a),kt(e+"Capture",a)}function kt(e,a){for(Vl[e]=a,e=0;e<a.length;e++)Rl.add(a[e])}var tp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hl={},Ll={};function op(e){return Ki.call(Ll,e)?!0:Ki.call(Hl,e)?!1:tp.test(e)?Ll[e]=!0:(Hl[e]=!0,!1)}function ws(e,a,t){if(op(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var o=a.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Ns(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Ta(e,a,t,o){if(o===null)e.removeAttribute(t);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+o)}}var or,kl;function Gt(e){if(or===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);or=a&&a[1]||"",kl=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+or+e+kl}var sr=!1;function ir(e,a){if(!e||sr)return"";sr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(a){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(y){var b=y}Reflect.construct(e,[],A)}else{try{A.call()}catch(y){b=y}e.call(A.prototype)}}else{try{throw Error()}catch(y){b=y}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(y){if(y&&b&&typeof y.stack=="string")return[y.stack,b.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),l=r[0],u=r[1];if(l&&u){var d=l.split(`
`),x=u.split(`
`);for(i=o=0;o<d.length&&!d[o].includes("DetermineComponentFrameRoot");)o++;for(;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;if(o===d.length||i===x.length)for(o=d.length-1,i=x.length-1;1<=o&&0<=i&&d[o]!==x[i];)i--;for(;1<=o&&0<=i;o--,i--)if(d[o]!==x[i]){if(o!==1||i!==1)do if(o--,i--,0>i||d[o]!==x[i]){var j=`
`+d[o].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=o&&0<=i);break}}}finally{sr=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Gt(t):""}function sp(e){switch(e.tag){case 26:case 27:case 5:return Gt(e.type);case 16:return Gt("Lazy");case 13:return Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return ir(e.type,!1);case 11:return ir(e.type.render,!1);case 1:return ir(e.type,!0);case 31:return Gt("Activity");default:return""}}function Gl(e){try{var a="";do a+=sp(e),e=e.return;while(e);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function oa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bl(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ip(e){var a=Bl(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),o=""+e[a];if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,r=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,r.call(this,l)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Rs(e){e._valueTracker||(e._valueTracker=ip(e))}function _l(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),o="";return e&&(o=Bl(e)?e.checked?"true":"false":e.value),e=o,e!==t?(a.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rp=/[\n"\\]/g;function sa(e){return e.replace(rp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function rr(e,a,t,o,i,r,l,u){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),a!=null?l==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+oa(a)):e.value!==""+oa(a)&&(e.value=""+oa(a)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),a!=null?nr(e,l,oa(a)):t!=null?nr(e,l,oa(t)):o!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+oa(u):e.removeAttribute("name")}function Ql(e,a,t,o,i,r,l,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),a!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||a!=null))return;t=t!=null?""+oa(t):"",a=a!=null?""+oa(a):t,u||a===e.value||(e.value=a),e.defaultValue=a}o=o??i,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=u?e.checked:!!o,e.defaultChecked=!!o,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l)}function nr(e,a,t){a==="number"&&Vs(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Bt(e,a,t,o){if(e=e.options,a){a={};for(var i=0;i<t.length;i++)a["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=a.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&o&&(e[t].defaultSelected=!0)}else{for(t=""+oa(t),a=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function Pl(e,a,t){if(a!=null&&(a=""+oa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+oa(t):""}function Yl(e,a,t,o){if(a==null){if(o!=null){if(t!=null)throw Error(m(92));if(Oa(o)){if(1<o.length)throw Error(m(93));o=o[0]}t=o}t==null&&(t=""),a=t}t=oa(a),e.defaultValue=t,o=e.textContent,o===t&&o!==""&&o!==null&&(e.value=o)}function _t(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xl(e,a,t){var o=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?o?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":o?e.setProperty(a,t):typeof t!="number"||t===0||np.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Fl(e,a,t){if(a!=null&&typeof a!="object")throw Error(m(62));if(e=e.style,t!=null){for(var o in t)!t.hasOwnProperty(o)||a!=null&&a.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var i in a)o=a[i],a.hasOwnProperty(i)&&t[i]!==o&&Xl(e,i,o)}else for(var r in a)a.hasOwnProperty(r)&&Xl(e,r,a[r])}function lr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hs(e){return up.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ur=null;function cr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qt=null,Pt=null;function Zl(e){var a=Ht(e);if(a&&(e=a.stateNode)){var t=e[Le]||null;e:switch(e=a.stateNode,a.type){case"input":if(rr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+sa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var o=t[a];if(o!==e&&o.form===e.form){var i=o[Le]||null;if(!i)throw Error(m(90));rr(o,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<t.length;a++)o=t[a],o.form===e.form&&_l(o)}break e;case"textarea":Pl(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&Bt(e,!!t.multiple,a,!1)}}}var dr=!1;function Kl(e,a,t){if(dr)return e(a,t);dr=!0;try{var o=e(a);return o}finally{if(dr=!1,(Qt!==null||Pt!==null)&&(Si(),Qt&&(a=Qt,e=Pt,Pt=Qt=null,Zl(a),e)))for(a=0;a<e.length;a++)Zl(e[a])}}function To(e,a){var t=e.stateNode;if(t===null)return null;var o=t[Le]||null;if(o===null)return null;t=o[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(m(231,a,typeof t));return t}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mr=!1;if(Ma)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){mr=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{mr=!1}var Ya=null,pr=null,Ls=null;function Il(){if(Ls)return Ls;var e,a=pr,t=a.length,o,i="value"in Ya?Ya.value:Ya.textContent,r=i.length;for(e=0;e<t&&a[e]===i[e];e++);var l=t-e;for(o=1;o<=l&&a[t-o]===i[r-o];o++);return Ls=i.slice(e,1<o?1-o:void 0)}function ks(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Gs(){return!0}function Jl(){return!1}function ke(e){function a(t,o,i,r,l){this._reactName=t,this._targetInst=i,this.type=o,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Gs:Jl,this.isPropagationStopped=Jl,this}return H(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),a}var ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bs=ke(ht),zo=H({},ht,{view:0,detail:0}),cp=ke(zo),fr,hr,Uo,_s=H({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(fr=e.screenX-Uo.screenX,hr=e.screenY-Uo.screenY):hr=fr=0,Uo=e),fr)},movementY:function(e){return"movementY"in e?e.movementY:hr}}),Wl=ke(_s),dp=H({},_s,{dataTransfer:0}),mp=ke(dp),pp=H({},zo,{relatedTarget:0}),vr=ke(pp),fp=H({},ht,{animationName:0,elapsedTime:0,pseudoElement:0}),hp=ke(fp),vp=H({},ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gp=ke(vp),xp=H({},ht,{data:0}),$l=ke(xp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sp(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=jp[e])?!!a[e]:!1}function gr(){return Sp}var qp=H({},zo,{key:function(e){if(e.key){var a=bp[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gr,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=ke(qp),Ep=H({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=ke(Ep),Op=H({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gr}),Tp=ke(Op),Mp=H({},ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),zp=ke(Mp),Up=H({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=ke(Up),Cp=H({},ht,{newState:0,oldState:0}),wp=ke(Cp),Np=[9,13,27,32],xr=Ma&&"CompositionEvent"in window,Do=null;Ma&&"documentMode"in document&&(Do=document.documentMode);var Rp=Ma&&"TextEvent"in window&&!Do,au=Ma&&(!xr||Do&&8<Do&&11>=Do),tu=" ",ou=!1;function su(e,a){switch(e){case"keyup":return Np.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function Vp(e,a){switch(e){case"compositionend":return iu(a);case"keypress":return a.which!==32?null:(ou=!0,tu);case"textInput":return e=a.data,e===tu&&ou?null:e;default:return null}}function Hp(e,a){if(Yt)return e==="compositionend"||!xr&&su(e,a)?(e=Il(),Ls=pr=Ya=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return au&&a.locale!=="ko"?null:a.data;default:return null}}var Lp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Lp[e.type]:a==="textarea"}function nu(e,a,t,o){Qt?Pt?Pt.push(o):Pt=[o]:Qt=o,a=Mi(a,"onChange"),0<a.length&&(t=new Bs("onChange","change",null,t,o),e.push({event:t,listeners:a}))}var Co=null,wo=null;function kp(e){Bd(e,0)}function Qs(e){var a=Oo(e);if(_l(a))return e}function lu(e,a){if(e==="change")return a}var uu=!1;if(Ma){var br;if(Ma){var yr="oninput"in document;if(!yr){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),yr=typeof cu.oninput=="function"}br=yr}else br=!1;uu=br&&(!document.documentMode||9<document.documentMode)}function du(){Co&&(Co.detachEvent("onpropertychange",mu),wo=Co=null)}function mu(e){if(e.propertyName==="value"&&Qs(wo)){var a=[];nu(a,wo,e,cr(e)),Kl(kp,a)}}function Gp(e,a,t){e==="focusin"?(du(),Co=a,wo=t,Co.attachEvent("onpropertychange",mu)):e==="focusout"&&du()}function Bp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qs(wo)}function _p(e,a){if(e==="click")return Qs(a)}function Qp(e,a){if(e==="input"||e==="change")return Qs(a)}function Pp(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ze=typeof Object.is=="function"?Object.is:Pp;function No(e,a){if(Ze(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),o=Object.keys(a);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var i=t[o];if(!Ki.call(a,i)||!Ze(e[i],a[i]))return!1}return!0}function pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fu(e,a){var t=pu(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=a&&o>=a)return{node:t,offset:a-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=pu(t)}}function hu(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?hu(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function vu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Vs(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Vs(e.document)}return a}function jr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Yp=Ma&&"documentMode"in document&&11>=document.documentMode,Xt=null,Sr=null,Ro=null,qr=!1;function gu(e,a,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;qr||Xt==null||Xt!==Vs(o)||(o=Xt,"selectionStart"in o&&jr(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ro&&No(Ro,o)||(Ro=o,o=Mi(Sr,"onSelect"),0<o.length&&(a=new Bs("onSelect","select",null,a,t),e.push({event:a,listeners:o}),a.target=Xt)))}function vt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var Ft={animationend:vt("Animation","AnimationEnd"),animationiteration:vt("Animation","AnimationIteration"),animationstart:vt("Animation","AnimationStart"),transitionrun:vt("Transition","TransitionRun"),transitionstart:vt("Transition","TransitionStart"),transitioncancel:vt("Transition","TransitionCancel"),transitionend:vt("Transition","TransitionEnd")},Ar={},xu={};Ma&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function gt(e){if(Ar[e])return Ar[e];if(!Ft[e])return e;var a=Ft[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in xu)return Ar[e]=a[t];return e}var bu=gt("animationend"),yu=gt("animationiteration"),ju=gt("animationstart"),Xp=gt("transitionrun"),Fp=gt("transitionstart"),Zp=gt("transitioncancel"),Su=gt("transitionend"),qu=new Map,Er="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Er.push("scrollEnd");function pa(e,a){qu.set(e,a),ft(a,[e])}var Au=new WeakMap;function ia(e,a){if(typeof e=="object"&&e!==null){var t=Au.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Gl(a)},Au.set(e,a),a)}return{value:e,source:a,stack:Gl(a)}}var ra=[],Zt=0,Or=0;function Ps(){for(var e=Zt,a=Or=Zt=0;a<e;){var t=ra[a];ra[a++]=null;var o=ra[a];ra[a++]=null;var i=ra[a];ra[a++]=null;var r=ra[a];if(ra[a++]=null,o!==null&&i!==null){var l=o.pending;l===null?i.next=i:(i.next=l.next,l.next=i),o.pending=i}r!==0&&Eu(t,i,r)}}function Ys(e,a,t,o){ra[Zt++]=e,ra[Zt++]=a,ra[Zt++]=t,ra[Zt++]=o,Or|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tr(e,a,t,o){return Ys(e,a,t,o),Xs(e)}function Kt(e,a){return Ys(e,null,null,a),Xs(e)}function Eu(e,a,t){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t);for(var i=!1,r=e.return;r!==null;)r.childLanes|=t,o=r.alternate,o!==null&&(o.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&a!==null&&(i=31-Fe(t),e=r.hiddenUpdates,o=e[i],o===null?e[i]=[a]:o.push(a),a.lane=t|536870912),r):null}function Xs(e){if(50<rs)throw rs=0,Nn=null,Error(m(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var It={};function Kp(e,a,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,a,t,o){return new Kp(e,a,t,o)}function Mr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function za(e,a){var t=e.alternate;return t===null?(t=Ke(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Ou(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Fs(e,a,t,o,i,r){var l=0;if(o=e,typeof e=="function")Mr(e)&&(l=1);else if(typeof e=="string")l=Wf(e,t,qe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ct:return e=Ke(31,t,a,i),e.elementType=Ct,e.lanes=r,e;case X:return xt(t.children,i,r,a);case Z:l=8,i|=24;break;case ge:return e=Ke(12,t,a,i|2),e.elementType=ge,e.lanes=r,e;case aa:return e=Ke(13,t,a,i),e.elementType=aa,e.lanes=r,e;case Ye:return e=Ke(19,t,a,i),e.elementType=Ye,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case we:case Se:l=10;break e;case Qe:l=9;break e;case Pe:l=11;break e;case Ea:l=14;break e;case ma:l=16,o=null;break e}l=29,t=Error(m(130,e===null?"null":typeof e,"")),o=null}return a=Ke(l,t,a,i),a.elementType=e,a.type=o,a.lanes=r,a}function xt(e,a,t,o){return e=Ke(7,e,o,a),e.lanes=t,e}function zr(e,a,t){return e=Ke(6,e,null,a),e.lanes=t,e}function Ur(e,a,t){return a=Ke(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Jt=[],Wt=0,Zs=null,Ks=0,na=[],la=0,bt=null,Ua=1,Da="";function yt(e,a){Jt[Wt++]=Ks,Jt[Wt++]=Zs,Zs=e,Ks=a}function Tu(e,a,t){na[la++]=Ua,na[la++]=Da,na[la++]=bt,bt=e;var o=Ua;e=Da;var i=32-Fe(o)-1;o&=~(1<<i),t+=1;var r=32-Fe(a)+i;if(30<r){var l=i-i%5;r=(o&(1<<l)-1).toString(32),o>>=l,i-=l,Ua=1<<32-Fe(a)+i|t<<i|o,Da=r+e}else Ua=1<<r|t<<i|o,Da=e}function Dr(e){e.return!==null&&(yt(e,1),Tu(e,1,0))}function Cr(e){for(;e===Zs;)Zs=Jt[--Wt],Jt[Wt]=null,Ks=Jt[--Wt],Jt[Wt]=null;for(;e===bt;)bt=na[--la],na[la]=null,Da=na[--la],na[la]=null,Ua=na[--la],na[la]=null}var Re=null,me=null,F=!1,jt=null,ya=!1,wr=Error(m(519));function St(e){var a=Error(m(418,""));throw Lo(ia(a,e)),wr}function Mu(e){var a=e.stateNode,t=e.type,o=e.memoizedProps;switch(a[De]=e,a[Le]=o,t){case"dialog":_("cancel",a),_("close",a);break;case"iframe":case"object":case"embed":_("load",a);break;case"video":case"audio":for(t=0;t<ls.length;t++)_(ls[t],a);break;case"source":_("error",a);break;case"img":case"image":case"link":_("error",a),_("load",a);break;case"details":_("toggle",a);break;case"input":_("invalid",a),Ql(a,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Rs(a);break;case"select":_("invalid",a);break;case"textarea":_("invalid",a),Yl(a,o.value,o.defaultValue,o.children),Rs(a)}t=o.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||o.suppressHydrationWarning===!0||Yd(a.textContent,t)?(o.popover!=null&&(_("beforetoggle",a),_("toggle",a)),o.onScroll!=null&&_("scroll",a),o.onScrollEnd!=null&&_("scrollend",a),o.onClick!=null&&(a.onclick=zi),a=!0):a=!1,a||St(e)}function zu(e){for(Re=e.return;Re;)switch(Re.tag){case 5:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:Re=Re.return}}function Vo(e){if(e!==Re)return!1;if(!F)return zu(e),F=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||In(e.type,e.memoizedProps)),t=!t),t&&me&&St(e),zu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(a===0){me=ha(e.nextSibling);break e}a--}else t!=="$"&&t!=="$!"&&t!=="$?"||a++;e=e.nextSibling}me=null}}else a===27?(a=me,nt(e.type)?(e=el,el=null,me=e):me=a):me=Re?ha(e.stateNode.nextSibling):null;return!0}function Ho(){me=Re=null,F=!1}function Uu(){var e=jt;return e!==null&&(_e===null?_e=e:_e.push.apply(_e,e),jt=null),e}function Lo(e){jt===null?jt=[e]:jt.push(e)}var Nr=Ne(null),qt=null,Ca=null;function Xa(e,a,t){J(Nr,a._currentValue),a._currentValue=t}function wa(e){e._currentValue=Nr.current,ce(Nr)}function Rr(e,a,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,o!==null&&(o.childLanes|=a)):o!==null&&(o.childLanes&a)!==a&&(o.childLanes|=a),e===t)break;e=e.return}}function Vr(e,a,t,o){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var l=i.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=i;for(var d=0;d<a.length;d++)if(u.context===a[d]){r.lanes|=t,u=r.alternate,u!==null&&(u.lanes|=t),Rr(r.return,t,e),o||(l=null);break e}r=u.next}}else if(i.tag===18){if(l=i.return,l===null)throw Error(m(341));l.lanes|=t,r=l.alternate,r!==null&&(r.lanes|=t),Rr(l,t,e),l=null}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}}function ko(e,a,t,o){e=null;for(var i=a,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var l=i.alternate;if(l===null)throw Error(m(387));if(l=l.memoizedProps,l!==null){var u=i.type;Ze(i.pendingProps.value,l.value)||(e!==null?e.push(u):e=[u])}}else if(i===Os.current){if(l=i.alternate,l===null)throw Error(m(387));l.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(fs):e=[fs])}i=i.return}e!==null&&Vr(a,e,t,o),a.flags|=262144}function Is(e){for(e=e.firstContext;e!==null;){if(!Ze(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function At(e){qt=e,Ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ce(e){return Du(qt,e)}function Js(e,a){return qt===null&&At(e),Du(e,a)}function Du(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Ca===null){if(e===null)throw Error(m(308));Ca=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ca=Ca.next=a;return t}var Ip=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,o){e.push(o)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Jp=n.unstable_scheduleCallback,Wp=n.unstable_NormalPriority,ye={$$typeof:Se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hr(){return{controller:new Ip,data:new Map,refCount:0}}function Go(e){e.refCount--,e.refCount===0&&Jp(Wp,function(){e.controller.abort()})}var Bo=null,Lr=0,$t=0,eo=null;function $p(e,a){if(Bo===null){var t=Bo=[];Lr=0,$t=Bn(),eo={status:"pending",value:void 0,then:function(o){t.push(o)}}}return Lr++,a.then(Cu,Cu),a}function Cu(){if(--Lr===0&&Bo!==null){eo!==null&&(eo.status="fulfilled");var e=Bo;Bo=null,$t=0,eo=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function ef(e,a){var t=[],o={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){o.status="fulfilled",o.value=a;for(var i=0;i<t.length;i++)(0,t[i])(a)},function(i){for(o.status="rejected",o.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),o}var wu=q.S;q.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&$p(e,a),wu!==null&&wu(e,a)};var Et=Ne(null);function kr(){var e=Et.current;return e!==null?e:se.pooledCache}function Ws(e,a){a===null?J(Et,Et.current):J(Et,a.pool)}function Nu(){var e=kr();return e===null?null:{parent:ye._currentValue,pool:e}}var _o=Error(m(460)),Ru=Error(m(474)),$s=Error(m(542)),Gr={then:function(){}};function Vu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ei(){}function Hu(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(ei,ei),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,ku(e),e;default:if(typeof a.status=="string")a.then(ei,ei);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=a,e.status="pending",e.then(function(o){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=o}},function(o){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=o}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,ku(e),e}throw Qo=a,_o}}var Qo=null;function Lu(){if(Qo===null)throw Error(m(459));var e=Qo;return Qo=null,e}function ku(e){if(e===_o||e===$s)throw Error(m(483))}var Fa=!1;function Br(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _r(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,a,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(K&2)!==0){var i=o.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),o.pending=a,a=Xs(e),Eu(e,null,t),a}return Ys(e,o,a,t),Xs(e)}function Po(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var o=a.lanes;o&=e.pendingLanes,t|=o,a.lanes=t,Cl(e,t)}}function Qr(e,a){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var i=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var l={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?i=r=l:r=r.next=l,t=t.next}while(t!==null);r===null?i=r=a:r=r.next=a}else i=r=a;t={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Pr=!1;function Yo(){if(Pr){var e=eo;if(e!==null)throw e}}function Xo(e,a,t,o){Pr=!1;var i=e.updateQueue;Fa=!1;var r=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,x=d.next;d.next=null,l===null?r=x:l.next=x,l=d;var j=e.alternate;j!==null&&(j=j.updateQueue,u=j.lastBaseUpdate,u!==l&&(u===null?j.firstBaseUpdate=x:u.next=x,j.lastBaseUpdate=d))}if(r!==null){var A=i.baseState;l=0,j=x=d=null,u=r;do{var b=u.lane&-536870913,y=b!==u.lane;if(y?(P&b)===b:(o&b)===b){b!==0&&b===$t&&(Pr=!0),j!==null&&(j=j.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var N=e,C=u;b=a;var ee=t;switch(C.tag){case 1:if(N=C.payload,typeof N=="function"){A=N.call(ee,A,b);break e}A=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=C.payload,b=typeof N=="function"?N.call(ee,A,b):N,b==null)break e;A=H({},A,b);break e;case 2:Fa=!0}}b=u.callback,b!==null&&(e.flags|=64,y&&(e.flags|=8192),y=i.callbacks,y===null?i.callbacks=[b]:y.push(b))}else y={lane:b,tag:u.tag,payload:u.payload,callback:u.callback,next:null},j===null?(x=j=y,d=A):j=j.next=y,l|=b;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;y=u,u=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);j===null&&(d=A),i.baseState=d,i.firstBaseUpdate=x,i.lastBaseUpdate=j,r===null&&(i.shared.lanes=0),ot|=l,e.lanes=l,e.memoizedState=A}}function Gu(e,a){if(typeof e!="function")throw Error(m(191,e));e.call(a)}function Bu(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Gu(t[e],a)}var ao=Ne(null),ai=Ne(0);function _u(e,a){e=Ga,J(ai,e),J(ao,a),Ga=e|a.baseLanes}function Yr(){J(ai,Ga),J(ao,ao.current)}function Xr(){Ga=ai.current,ce(ao),ce(ai)}var Ia=0,L=null,W=null,xe=null,ti=!1,to=!1,Ot=!1,oi=0,Fo=0,oo=null,af=0;function he(){throw Error(m(321))}function Fr(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Ze(e[t],a[t]))return!1;return!0}function Zr(e,a,t,o,i,r){return Ia=r,L=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,q.H=e===null||e.memoizedState===null?Ec:Oc,Ot=!1,r=t(o,i),Ot=!1,to&&(r=Pu(a,t,o,i)),Qu(e),r}function Qu(e){q.H=ui;var a=W!==null&&W.next!==null;if(Ia=0,xe=W=L=null,ti=!1,Fo=0,oo=null,a)throw Error(m(300));e===null||Ee||(e=e.dependencies,e!==null&&Is(e)&&(Ee=!0))}function Pu(e,a,t,o){L=e;var i=0;do{if(to&&(oo=null),Fo=0,to=!1,25<=i)throw Error(m(301));if(i+=1,xe=W=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}q.H=uf,r=a(t,o)}while(to);return r}function tf(){var e=q.H,a=e.useState()[0];return a=typeof a.then=="function"?Zo(a):a,e=e.useState()[0],(W!==null?W.memoizedState:null)!==e&&(L.flags|=1024),a}function Kr(){var e=oi!==0;return oi=0,e}function Ir(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Jr(e){if(ti){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ti=!1}Ia=0,xe=W=L=null,to=!1,Fo=oi=0,oo=null}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?L.memoizedState=xe=e:xe=xe.next=e,xe}function be(){if(W===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var a=xe===null?L.memoizedState:xe.next;if(a!==null)xe=a,W=e;else{if(e===null)throw L.alternate===null?Error(m(467)):Error(m(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},xe===null?L.memoizedState=xe=e:xe=xe.next=e}return xe}function Wr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var a=Fo;return Fo+=1,oo===null&&(oo=[]),e=Hu(oo,e,a),a=L,(xe===null?a.memoizedState:xe.next)===null&&(a=a.alternate,q.H=a===null||a.memoizedState===null?Ec:Oc),e}function si(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===Se)return Ce(e)}throw Error(m(438,String(e)))}function $r(e){var a=null,t=L.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var o=L.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(a={data:o.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Wr(),L.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),o=0;o<e;o++)t[o]=As;return a.index++,t}function Na(e,a){return typeof a=="function"?a(e):a}function ii(e){var a=be();return en(a,W,e)}function en(e,a,t){var o=e.queue;if(o===null)throw Error(m(311));o.lastRenderedReducer=t;var i=e.baseQueue,r=o.pending;if(r!==null){if(i!==null){var l=i.next;i.next=r.next,r.next=l}a.baseQueue=i=r,o.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{a=i.next;var u=l=null,d=null,x=a,j=!1;do{var A=x.lane&-536870913;if(A!==x.lane?(P&A)===A:(Ia&A)===A){var b=x.revertLane;if(b===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),A===$t&&(j=!0);else if((Ia&b)===b){x=x.next,b===$t&&(j=!0);continue}else A={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(u=d=A,l=r):d=d.next=A,L.lanes|=b,ot|=b;A=x.action,Ot&&t(r,A),r=x.hasEagerState?x.eagerState:t(r,A)}else b={lane:A,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(u=d=b,l=r):d=d.next=b,L.lanes|=A,ot|=A;x=x.next}while(x!==null&&x!==a);if(d===null?l=r:d.next=u,!Ze(r,e.memoizedState)&&(Ee=!0,j&&(t=eo,t!==null)))throw t;e.memoizedState=r,e.baseState=l,e.baseQueue=d,o.lastRenderedState=r}return i===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function an(e){var a=be(),t=a.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=e;var o=t.dispatch,i=t.pending,r=a.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do r=e(r,l.action),l=l.next;while(l!==i);Ze(r,a.memoizedState)||(Ee=!0),a.memoizedState=r,a.baseQueue===null&&(a.baseState=r),t.lastRenderedState=r}return[r,o]}function Yu(e,a,t){var o=L,i=be(),r=F;if(r){if(t===void 0)throw Error(m(407));t=t()}else t=a();var l=!Ze((W||i).memoizedState,t);l&&(i.memoizedState=t,Ee=!0),i=i.queue;var u=Zu.bind(null,o,i,e);if(Ko(2048,8,u,[e]),i.getSnapshot!==a||l||xe!==null&&xe.memoizedState.tag&1){if(o.flags|=2048,so(9,ri(),Fu.bind(null,o,i,t,a),null),se===null)throw Error(m(349));r||(Ia&124)!==0||Xu(o,a,t)}return t}function Xu(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=L.updateQueue,a===null?(a=Wr(),L.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Fu(e,a,t,o){a.value=t,a.getSnapshot=o,Ku(a)&&Iu(e)}function Zu(e,a,t){return t(function(){Ku(a)&&Iu(e)})}function Ku(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Ze(e,t)}catch{return!0}}function Iu(e){var a=Kt(e,2);a!==null&&ea(a,e,2)}function tn(e){var a=Ge();if(typeof e=="function"){var t=e;if(e=t(),Ot){Qa(!0);try{t()}finally{Qa(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},a}function Ju(e,a,t,o){return e.baseState=t,en(e,W,typeof o=="function"?o:Na)}function of(e,a,t,o,i){if(li(e))throw Error(m(485));if(e=a.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};q.T!==null?t(!0):r.isTransition=!1,o(r),t=a.pending,t===null?(r.next=a.pending=r,Wu(a,r)):(r.next=t.next,a.pending=t.next=r)}}function Wu(e,a){var t=a.action,o=a.payload,i=e.state;if(a.isTransition){var r=q.T,l={};q.T=l;try{var u=t(i,o),d=q.S;d!==null&&d(l,u),$u(e,a,u)}catch(x){on(e,a,x)}finally{q.T=r}}else try{r=t(i,o),$u(e,a,r)}catch(x){on(e,a,x)}}function $u(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(o){ec(e,a,o)},function(o){return on(e,a,o)}):ec(e,a,t)}function ec(e,a,t){a.status="fulfilled",a.value=t,ac(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Wu(e,t)))}function on(e,a,t){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do a.status="rejected",a.reason=t,ac(a),a=a.next;while(a!==o)}e.action=null}function ac(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function tc(e,a){return a}function oc(e,a){if(F){var t=se.formState;if(t!==null){e:{var o=L;if(F){if(me){a:{for(var i=me,r=ya;i.nodeType!==8;){if(!r){i=null;break a}if(i=ha(i.nextSibling),i===null){i=null;break a}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){me=ha(i.nextSibling),o=i.data==="F!";break e}}St(o)}o=!1}o&&(a=t[0])}}return t=Ge(),t.memoizedState=t.baseState=a,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tc,lastRenderedState:a},t.queue=o,t=Sc.bind(null,L,o),o.dispatch=t,o=tn(!1),r=un.bind(null,L,!1,o.queue),o=Ge(),i={state:a,dispatch:null,action:e,pending:null},o.queue=i,t=of.bind(null,L,i,r,t),i.dispatch=t,o.memoizedState=e,[a,t,!1]}function sc(e){var a=be();return ic(a,W,e)}function ic(e,a,t){if(a=en(e,a,tc)[0],e=ii(Na)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var o=Zo(a)}catch(l){throw l===_o?$s:l}else o=a;a=be();var i=a.queue,r=i.dispatch;return t!==a.memoizedState&&(L.flags|=2048,so(9,ri(),sf.bind(null,i,t),null)),[o,r,e]}function sf(e,a){e.action=a}function rc(e){var a=be(),t=W;if(t!==null)return ic(a,t,e);be(),a=a.memoizedState,t=be();var o=t.queue.dispatch;return t.memoizedState=e,[a,o,!1]}function so(e,a,t,o){return e={tag:e,create:t,deps:o,inst:a,next:null},a=L.updateQueue,a===null&&(a=Wr(),L.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,a.lastEffect=e),e}function ri(){return{destroy:void 0,resource:void 0}}function nc(){return be().memoizedState}function ni(e,a,t,o){var i=Ge();o=o===void 0?null:o,L.flags|=e,i.memoizedState=so(1|a,ri(),t,o)}function Ko(e,a,t,o){var i=be();o=o===void 0?null:o;var r=i.memoizedState.inst;W!==null&&o!==null&&Fr(o,W.memoizedState.deps)?i.memoizedState=so(a,r,t,o):(L.flags|=e,i.memoizedState=so(1|a,r,t,o))}function lc(e,a){ni(8390656,8,e,a)}function uc(e,a){Ko(2048,8,e,a)}function cc(e,a){return Ko(4,2,e,a)}function dc(e,a){return Ko(4,4,e,a)}function mc(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function pc(e,a,t){t=t!=null?t.concat([e]):null,Ko(4,4,mc.bind(null,a,e),t)}function sn(){}function fc(e,a){var t=be();a=a===void 0?null:a;var o=t.memoizedState;return a!==null&&Fr(a,o[1])?o[0]:(t.memoizedState=[e,a],e)}function hc(e,a){var t=be();a=a===void 0?null:a;var o=t.memoizedState;if(a!==null&&Fr(a,o[1]))return o[0];if(o=e(),Ot){Qa(!0);try{e()}finally{Qa(!1)}}return t.memoizedState=[o,a],o}function rn(e,a,t){return t===void 0||(Ia&1073741824)!==0?e.memoizedState=a:(e.memoizedState=t,e=xd(),L.lanes|=e,ot|=e,t)}function vc(e,a,t,o){return Ze(t,a)?t:ao.current!==null?(e=rn(e,t,o),Ze(e,a)||(Ee=!0),e):(Ia&42)===0?(Ee=!0,e.memoizedState=t):(e=xd(),L.lanes|=e,ot|=e,a)}function gc(e,a,t,o,i){var r=M.p;M.p=r!==0&&8>r?r:8;var l=q.T,u={};q.T=u,un(e,!1,a,t);try{var d=i(),x=q.S;if(x!==null&&x(u,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var j=ef(d,o);Io(e,a,j,$e(e))}else Io(e,a,o,$e(e))}catch(A){Io(e,a,{then:function(){},status:"rejected",reason:A},$e())}finally{M.p=r,q.T=l}}function rf(){}function nn(e,a,t,o){if(e.tag!==5)throw Error(m(476));var i=xc(e).queue;gc(e,i,a,R,t===null?rf:function(){return bc(e),t(o)})}function xc(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:R},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function bc(e){var a=xc(e).next.queue;Io(e,a,{},$e())}function ln(){return Ce(fs)}function yc(){return be().memoizedState}function jc(){return be().memoizedState}function nf(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=$e();e=Za(t);var o=Ka(a,e,t);o!==null&&(ea(o,a,t),Po(o,a,t)),a={cache:Hr()},e.payload=a;return}a=a.return}}function lf(e,a,t){var o=$e();t={lane:o,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},li(e)?qc(a,t):(t=Tr(e,a,t,o),t!==null&&(ea(t,e,o),Ac(t,a,o)))}function Sc(e,a,t){var o=$e();Io(e,a,t,o)}function Io(e,a,t,o){var i={lane:o,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(li(e))qc(a,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=a.lastRenderedReducer,r!==null))try{var l=a.lastRenderedState,u=r(l,t);if(i.hasEagerState=!0,i.eagerState=u,Ze(u,l))return Ys(e,a,i,0),se===null&&Ps(),!1}catch{}if(t=Tr(e,a,i,o),t!==null)return ea(t,e,o),Ac(t,a,o),!0}return!1}function un(e,a,t,o){if(o={lane:2,revertLane:Bn(),action:o,hasEagerState:!1,eagerState:null,next:null},li(e)){if(a)throw Error(m(479))}else a=Tr(e,t,o,2),a!==null&&ea(a,e,2)}function li(e){var a=e.alternate;return e===L||a!==null&&a===L}function qc(e,a){to=ti=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Ac(e,a,t){if((t&4194048)!==0){var o=a.lanes;o&=e.pendingLanes,t|=o,a.lanes=t,Cl(e,t)}}var ui={readContext:Ce,use:si,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he},Ec={readContext:Ce,use:si,useCallback:function(e,a){return Ge().memoizedState=[e,a===void 0?null:a],e},useContext:Ce,useEffect:lc,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,ni(4194308,4,mc.bind(null,a,e),t)},useLayoutEffect:function(e,a){return ni(4194308,4,e,a)},useInsertionEffect:function(e,a){ni(4,2,e,a)},useMemo:function(e,a){var t=Ge();a=a===void 0?null:a;var o=e();if(Ot){Qa(!0);try{e()}finally{Qa(!1)}}return t.memoizedState=[o,a],o},useReducer:function(e,a,t){var o=Ge();if(t!==void 0){var i=t(a);if(Ot){Qa(!0);try{t(a)}finally{Qa(!1)}}}else i=a;return o.memoizedState=o.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},o.queue=e,e=e.dispatch=lf.bind(null,L,e),[o.memoizedState,e]},useRef:function(e){var a=Ge();return e={current:e},a.memoizedState=e},useState:function(e){e=tn(e);var a=e.queue,t=Sc.bind(null,L,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:sn,useDeferredValue:function(e,a){var t=Ge();return rn(t,e,a)},useTransition:function(){var e=tn(!1);return e=gc.bind(null,L,e.queue,!0,!1),Ge().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var o=L,i=Ge();if(F){if(t===void 0)throw Error(m(407));t=t()}else{if(t=a(),se===null)throw Error(m(349));(P&124)!==0||Xu(o,a,t)}i.memoizedState=t;var r={value:t,getSnapshot:a};return i.queue=r,lc(Zu.bind(null,o,r,e),[e]),o.flags|=2048,so(9,ri(),Fu.bind(null,o,r,t,a),null),t},useId:function(){var e=Ge(),a=se.identifierPrefix;if(F){var t=Da,o=Ua;t=(o&~(1<<32-Fe(o)-1)).toString(32)+t,a="«"+a+"R"+t,t=oi++,0<t&&(a+="H"+t.toString(32)),a+="»"}else t=af++,a="«"+a+"r"+t.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:ln,useFormState:oc,useActionState:oc,useOptimistic:function(e){var a=Ge();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=un.bind(null,L,!0,t),t.dispatch=a,[e,a]},useMemoCache:$r,useCacheRefresh:function(){return Ge().memoizedState=nf.bind(null,L)}},Oc={readContext:Ce,use:si,useCallback:fc,useContext:Ce,useEffect:uc,useImperativeHandle:pc,useInsertionEffect:cc,useLayoutEffect:dc,useMemo:hc,useReducer:ii,useRef:nc,useState:function(){return ii(Na)},useDebugValue:sn,useDeferredValue:function(e,a){var t=be();return vc(t,W.memoizedState,e,a)},useTransition:function(){var e=ii(Na)[0],a=be().memoizedState;return[typeof e=="boolean"?e:Zo(e),a]},useSyncExternalStore:Yu,useId:yc,useHostTransitionStatus:ln,useFormState:sc,useActionState:sc,useOptimistic:function(e,a){var t=be();return Ju(t,W,e,a)},useMemoCache:$r,useCacheRefresh:jc},uf={readContext:Ce,use:si,useCallback:fc,useContext:Ce,useEffect:uc,useImperativeHandle:pc,useInsertionEffect:cc,useLayoutEffect:dc,useMemo:hc,useReducer:an,useRef:nc,useState:function(){return an(Na)},useDebugValue:sn,useDeferredValue:function(e,a){var t=be();return W===null?rn(t,e,a):vc(t,W.memoizedState,e,a)},useTransition:function(){var e=an(Na)[0],a=be().memoizedState;return[typeof e=="boolean"?e:Zo(e),a]},useSyncExternalStore:Yu,useId:yc,useHostTransitionStatus:ln,useFormState:rc,useActionState:rc,useOptimistic:function(e,a){var t=be();return W!==null?Ju(t,W,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:$r,useCacheRefresh:jc},io=null,Jo=0;function ci(e){var a=Jo;return Jo+=1,io===null&&(io=[]),Hu(io,e,a)}function Wo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function di(e,a){throw a.$$typeof===ie?Error(m(525)):(e=Object.prototype.toString.call(a),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Tc(e){var a=e._init;return a(e._payload)}function Mc(e){function a(h,f){if(e){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function t(h,f){if(!e)return null;for(;f!==null;)a(h,f),f=f.sibling;return null}function o(h){for(var f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(h,f){return h=za(h,f),h.index=0,h.sibling=null,h}function r(h,f,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=67108866,f):g):(h.flags|=67108866,f)):(h.flags|=1048576,f)}function l(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function u(h,f,g,S){return f===null||f.tag!==6?(f=zr(g,h.mode,S),f.return=h,f):(f=i(f,g),f.return=h,f)}function d(h,f,g,S){var z=g.type;return z===X?j(h,f,g.props.children,S,g.key):f!==null&&(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ma&&Tc(z)===f.type)?(f=i(f,g.props),Wo(f,g),f.return=h,f):(f=Fs(g.type,g.key,g.props,null,h.mode,S),Wo(f,g),f.return=h,f)}function x(h,f,g,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ur(g,h.mode,S),f.return=h,f):(f=i(f,g.children||[]),f.return=h,f)}function j(h,f,g,S,z){return f===null||f.tag!==7?(f=xt(g,h.mode,S,z),f.return=h,f):(f=i(f,g),f.return=h,f)}function A(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=zr(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Q:return g=Fs(f.type,f.key,f.props,null,h.mode,g),Wo(g,f),g.return=h,g;case fe:return f=Ur(f,h.mode,g),f.return=h,f;case ma:var S=f._init;return f=S(f._payload),A(h,f,g)}if(Oa(f)||ta(f))return f=xt(f,h.mode,g,null),f.return=h,f;if(typeof f.then=="function")return A(h,ci(f),g);if(f.$$typeof===Se)return A(h,Js(h,f),g);di(h,f)}return null}function b(h,f,g,S){var z=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return z!==null?null:u(h,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Q:return g.key===z?d(h,f,g,S):null;case fe:return g.key===z?x(h,f,g,S):null;case ma:return z=g._init,g=z(g._payload),b(h,f,g,S)}if(Oa(g)||ta(g))return z!==null?null:j(h,f,g,S,null);if(typeof g.then=="function")return b(h,f,ci(g),S);if(g.$$typeof===Se)return b(h,f,Js(h,g),S);di(h,g)}return null}function y(h,f,g,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(g)||null,u(f,h,""+S,z);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:return h=h.get(S.key===null?g:S.key)||null,d(f,h,S,z);case fe:return h=h.get(S.key===null?g:S.key)||null,x(f,h,S,z);case ma:var k=S._init;return S=k(S._payload),y(h,f,g,S,z)}if(Oa(S)||ta(S))return h=h.get(g)||null,j(f,h,S,z,null);if(typeof S.then=="function")return y(h,f,g,ci(S),z);if(S.$$typeof===Se)return y(h,f,g,Js(f,S),z);di(f,S)}return null}function N(h,f,g,S){for(var z=null,k=null,U=f,w=f=0,Te=null;U!==null&&w<g.length;w++){U.index>w?(Te=U,U=null):Te=U.sibling;var Y=b(h,U,g[w],S);if(Y===null){U===null&&(U=Te);break}e&&U&&Y.alternate===null&&a(h,U),f=r(Y,f,w),k===null?z=Y:k.sibling=Y,k=Y,U=Te}if(w===g.length)return t(h,U),F&&yt(h,w),z;if(U===null){for(;w<g.length;w++)U=A(h,g[w],S),U!==null&&(f=r(U,f,w),k===null?z=U:k.sibling=U,k=U);return F&&yt(h,w),z}for(U=o(U);w<g.length;w++)Te=y(U,h,w,g[w],S),Te!==null&&(e&&Te.alternate!==null&&U.delete(Te.key===null?w:Te.key),f=r(Te,f,w),k===null?z=Te:k.sibling=Te,k=Te);return e&&U.forEach(function(mt){return a(h,mt)}),F&&yt(h,w),z}function C(h,f,g,S){if(g==null)throw Error(m(151));for(var z=null,k=null,U=f,w=f=0,Te=null,Y=g.next();U!==null&&!Y.done;w++,Y=g.next()){U.index>w?(Te=U,U=null):Te=U.sibling;var mt=b(h,U,Y.value,S);if(mt===null){U===null&&(U=Te);break}e&&U&&mt.alternate===null&&a(h,U),f=r(mt,f,w),k===null?z=mt:k.sibling=mt,k=mt,U=Te}if(Y.done)return t(h,U),F&&yt(h,w),z;if(U===null){for(;!Y.done;w++,Y=g.next())Y=A(h,Y.value,S),Y!==null&&(f=r(Y,f,w),k===null?z=Y:k.sibling=Y,k=Y);return F&&yt(h,w),z}for(U=o(U);!Y.done;w++,Y=g.next())Y=y(U,h,w,Y.value,S),Y!==null&&(e&&Y.alternate!==null&&U.delete(Y.key===null?w:Y.key),f=r(Y,f,w),k===null?z=Y:k.sibling=Y,k=Y);return e&&U.forEach(function(ch){return a(h,ch)}),F&&yt(h,w),z}function ee(h,f,g,S){if(typeof g=="object"&&g!==null&&g.type===X&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Q:e:{for(var z=g.key;f!==null;){if(f.key===z){if(z=g.type,z===X){if(f.tag===7){t(h,f.sibling),S=i(f,g.props.children),S.return=h,h=S;break e}}else if(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ma&&Tc(z)===f.type){t(h,f.sibling),S=i(f,g.props),Wo(S,g),S.return=h,h=S;break e}t(h,f);break}else a(h,f);f=f.sibling}g.type===X?(S=xt(g.props.children,h.mode,S,g.key),S.return=h,h=S):(S=Fs(g.type,g.key,g.props,null,h.mode,S),Wo(S,g),S.return=h,h=S)}return l(h);case fe:e:{for(z=g.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(h,f.sibling),S=i(f,g.children||[]),S.return=h,h=S;break e}else{t(h,f);break}else a(h,f);f=f.sibling}S=Ur(g,h.mode,S),S.return=h,h=S}return l(h);case ma:return z=g._init,g=z(g._payload),ee(h,f,g,S)}if(Oa(g))return N(h,f,g,S);if(ta(g)){if(z=ta(g),typeof z!="function")throw Error(m(150));return g=z.call(g),C(h,f,g,S)}if(typeof g.then=="function")return ee(h,f,ci(g),S);if(g.$$typeof===Se)return ee(h,f,Js(h,g),S);di(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(t(h,f.sibling),S=i(f,g),S.return=h,h=S):(t(h,f),S=zr(g,h.mode,S),S.return=h,h=S),l(h)):t(h,f)}return function(h,f,g,S){try{Jo=0;var z=ee(h,f,g,S);return io=null,z}catch(U){if(U===_o||U===$s)throw U;var k=Ke(29,U,null,h.mode);return k.lanes=S,k.return=h,k}}}var ro=Mc(!0),zc=Mc(!1),ua=Ne(null),ja=null;function Ja(e){var a=e.alternate;J(je,je.current&1),J(ua,e),ja===null&&(a===null||ao.current!==null||a.memoizedState!==null)&&(ja=e)}function Uc(e){if(e.tag===22){if(J(je,je.current),J(ua,e),ja===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(ja=e)}}else Wa()}function Wa(){J(je,je.current),J(ua,ua.current)}function Ra(e){ce(ua),ja===e&&(ja=null),ce(je)}var je=Ne(0);function mi(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||$n(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function cn(e,a,t,o){a=e.memoizedState,t=t(o,a),t=t==null?a:H({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var dn={enqueueSetState:function(e,a,t){e=e._reactInternals;var o=$e(),i=Za(o);i.payload=a,t!=null&&(i.callback=t),a=Ka(e,i,o),a!==null&&(ea(a,e,o),Po(a,e,o))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var o=$e(),i=Za(o);i.tag=1,i.payload=a,t!=null&&(i.callback=t),a=Ka(e,i,o),a!==null&&(ea(a,e,o),Po(a,e,o))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=$e(),o=Za(t);o.tag=2,a!=null&&(o.callback=a),a=Ka(e,o,t),a!==null&&(ea(a,e,t),Po(a,e,t))}};function Dc(e,a,t,o,i,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,l):a.prototype&&a.prototype.isPureReactComponent?!No(t,o)||!No(i,r):!0}function Cc(e,a,t,o){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,o),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,o),a.state!==e&&dn.enqueueReplaceState(a,a.state,null)}function Tt(e,a){var t=a;if("ref"in a){t={};for(var o in a)o!=="ref"&&(t[o]=a[o])}if(e=e.defaultProps){t===a&&(t=H({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}var pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wc(e){pi(e)}function Nc(e){console.error(e)}function Rc(e){pi(e)}function fi(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(o){setTimeout(function(){throw o})}}function Vc(e,a,t){try{var o=e.onCaughtError;o(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function mn(e,a,t){return t=Za(t),t.tag=3,t.payload={element:null},t.callback=function(){fi(e,a)},t}function Hc(e){return e=Za(e),e.tag=3,e}function Lc(e,a,t,o){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=o.value;e.payload=function(){return i(r)},e.callback=function(){Vc(a,t,o)}}var l=t.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){Vc(a,t,o),typeof i!="function"&&(st===null?st=new Set([this]):st.add(this));var u=o.stack;this.componentDidCatch(o.value,{componentStack:u!==null?u:""})})}function cf(e,a,t,o,i){if(t.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(a=t.alternate,a!==null&&ko(a,t,i,!0),t=ua.current,t!==null){switch(t.tag){case 13:return ja===null?Vn():t.alternate===null&&pe===0&&(pe=3),t.flags&=-257,t.flags|=65536,t.lanes=i,o===Gr?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([o]):a.add(o),Ln(e,o,i)),!1;case 22:return t.flags|=65536,o===Gr?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([o])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([o]):t.add(o)),Ln(e,o,i)),!1}throw Error(m(435,t.tag))}return Ln(e,o,i),Vn(),!1}if(F)return a=ua.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,o!==wr&&(e=Error(m(422),{cause:o}),Lo(ia(e,t)))):(o!==wr&&(a=Error(m(423),{cause:o}),Lo(ia(a,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,o=ia(o,t),i=mn(e.stateNode,o,i),Qr(e,i),pe!==4&&(pe=2)),!1;var r=Error(m(520),{cause:o});if(r=ia(r,t),is===null?is=[r]:is.push(r),pe!==4&&(pe=2),a===null)return!0;o=ia(o,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=mn(t.stateNode,o,e),Qr(t,e),!1;case 1:if(a=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))))return t.flags|=65536,i&=-i,t.lanes|=i,i=Hc(i),Lc(i,e,t,o),Qr(t,i),!1}t=t.return}while(t!==null);return!1}var kc=Error(m(461)),Ee=!1;function Me(e,a,t,o){a.child=e===null?zc(a,null,t,o):ro(a,e.child,t,o)}function Gc(e,a,t,o,i){t=t.render;var r=a.ref;if("ref"in o){var l={};for(var u in o)u!=="ref"&&(l[u]=o[u])}else l=o;return At(a),o=Zr(e,a,t,l,r,i),u=Kr(),e!==null&&!Ee?(Ir(e,a,i),Va(e,a,i)):(F&&u&&Dr(a),a.flags|=1,Me(e,a,o,i),a.child)}function Bc(e,a,t,o,i){if(e===null){var r=t.type;return typeof r=="function"&&!Mr(r)&&r.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=r,_c(e,a,r,o,i)):(e=Fs(t.type,null,o,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(r=e.child,!yn(e,i)){var l=r.memoizedProps;if(t=t.compare,t=t!==null?t:No,t(l,o)&&e.ref===a.ref)return Va(e,a,i)}return a.flags|=1,e=za(r,o),e.ref=a.ref,e.return=a,a.child=e}function _c(e,a,t,o,i){if(e!==null){var r=e.memoizedProps;if(No(r,o)&&e.ref===a.ref)if(Ee=!1,a.pendingProps=o=r,yn(e,i))(e.flags&131072)!==0&&(Ee=!0);else return a.lanes=e.lanes,Va(e,a,i)}return pn(e,a,t,o,i)}function Qc(e,a,t){var o=a.pendingProps,i=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((a.flags&128)!==0){if(o=r!==null?r.baseLanes|t:t,e!==null){for(i=a.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;a.childLanes=r&~o}else a.childLanes=0,a.child=null;return Pc(e,a,o,t)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ws(a,r!==null?r.cachePool:null),r!==null?_u(a,r):Yr(),Uc(a);else return a.lanes=a.childLanes=536870912,Pc(e,a,r!==null?r.baseLanes|t:t,t)}else r!==null?(Ws(a,r.cachePool),_u(a,r),Wa(),a.memoizedState=null):(e!==null&&Ws(a,null),Yr(),Wa());return Me(e,a,i,t),a.child}function Pc(e,a,t,o){var i=kr();return i=i===null?null:{parent:ye._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&Ws(a,null),Yr(),Uc(a),e!==null&&ko(e,a,o,!0),null}function hi(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(m(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function pn(e,a,t,o,i){return At(a),t=Zr(e,a,t,o,void 0,i),o=Kr(),e!==null&&!Ee?(Ir(e,a,i),Va(e,a,i)):(F&&o&&Dr(a),a.flags|=1,Me(e,a,t,i),a.child)}function Yc(e,a,t,o,i,r){return At(a),a.updateQueue=null,t=Pu(a,o,t,i),Qu(e),o=Kr(),e!==null&&!Ee?(Ir(e,a,r),Va(e,a,r)):(F&&o&&Dr(a),a.flags|=1,Me(e,a,t,r),a.child)}function Xc(e,a,t,o,i){if(At(a),a.stateNode===null){var r=It,l=t.contextType;typeof l=="object"&&l!==null&&(r=Ce(l)),r=new t(o,r),a.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=dn,a.stateNode=r,r._reactInternals=a,r=a.stateNode,r.props=o,r.state=a.memoizedState,r.refs={},Br(a),l=t.contextType,r.context=typeof l=="object"&&l!==null?Ce(l):It,r.state=a.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(cn(a,t,l,o),r.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&dn.enqueueReplaceState(r,r.state,null),Xo(a,o,r,i),Yo(),r.state=a.memoizedState),typeof r.componentDidMount=="function"&&(a.flags|=4194308),o=!0}else if(e===null){r=a.stateNode;var u=a.memoizedProps,d=Tt(t,u);r.props=d;var x=r.context,j=t.contextType;l=It,typeof j=="object"&&j!==null&&(l=Ce(j));var A=t.getDerivedStateFromProps;j=typeof A=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=a.pendingProps!==u,j||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||x!==l)&&Cc(a,r,o,l),Fa=!1;var b=a.memoizedState;r.state=b,Xo(a,o,r,i),Yo(),x=a.memoizedState,u||b!==x||Fa?(typeof A=="function"&&(cn(a,t,A,o),x=a.memoizedState),(d=Fa||Dc(a,t,d,o,b,x,l))?(j||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(a.flags|=4194308)):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=o,a.memoizedState=x),r.props=o,r.state=x,r.context=l,o=d):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),o=!1)}else{r=a.stateNode,_r(e,a),l=a.memoizedProps,j=Tt(t,l),r.props=j,A=a.pendingProps,b=r.context,x=t.contextType,d=It,typeof x=="object"&&x!==null&&(d=Ce(x)),u=t.getDerivedStateFromProps,(x=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==A||b!==d)&&Cc(a,r,o,d),Fa=!1,b=a.memoizedState,r.state=b,Xo(a,o,r,i),Yo();var y=a.memoizedState;l!==A||b!==y||Fa||e!==null&&e.dependencies!==null&&Is(e.dependencies)?(typeof u=="function"&&(cn(a,t,u,o),y=a.memoizedState),(j=Fa||Dc(a,t,j,o,b,y,d)||e!==null&&e.dependencies!==null&&Is(e.dependencies))?(x||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,y,d),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,y,d)),typeof r.componentDidUpdate=="function"&&(a.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&b===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&b===e.memoizedState||(a.flags|=1024),a.memoizedProps=o,a.memoizedState=y),r.props=o,r.state=y,r.context=d,o=j):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&b===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&b===e.memoizedState||(a.flags|=1024),o=!1)}return r=o,hi(e,a),o=(a.flags&128)!==0,r||o?(r=a.stateNode,t=o&&typeof t.getDerivedStateFromError!="function"?null:r.render(),a.flags|=1,e!==null&&o?(a.child=ro(a,e.child,null,i),a.child=ro(a,null,t,i)):Me(e,a,t,i),a.memoizedState=r.state,e=a.child):e=Va(e,a,i),e}function Fc(e,a,t,o){return Ho(),a.flags|=256,Me(e,a,t,o),a.child}var fn={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hn(e){return{baseLanes:e,cachePool:Nu()}}function vn(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=ca),e}function Zc(e,a,t){var o=a.pendingProps,i=!1,r=(a.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),l&&(i=!0,a.flags&=-129),l=(a.flags&32)!==0,a.flags&=-33,e===null){if(F){if(i?Ja(a):Wa(),F){var u=me,d;if(d=u){e:{for(d=u,u=ya;d.nodeType!==8;){if(!u){u=null;break e}if(d=ha(d.nextSibling),d===null){u=null;break e}}u=d}u!==null?(a.memoizedState={dehydrated:u,treeContext:bt!==null?{id:Ua,overflow:Da}:null,retryLane:536870912,hydrationErrors:null},d=Ke(18,null,null,0),d.stateNode=u,d.return=a,a.child=d,Re=a,me=null,d=!0):d=!1}d||St(a)}if(u=a.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return $n(u)?a.lanes=32:a.lanes=536870912,null;Ra(a)}return u=o.children,o=o.fallback,i?(Wa(),i=a.mode,u=vi({mode:"hidden",children:u},i),o=xt(o,i,t,null),u.return=a,o.return=a,u.sibling=o,a.child=u,i=a.child,i.memoizedState=hn(t),i.childLanes=vn(e,l,t),a.memoizedState=fn,o):(Ja(a),gn(a,u))}if(d=e.memoizedState,d!==null&&(u=d.dehydrated,u!==null)){if(r)a.flags&256?(Ja(a),a.flags&=-257,a=xn(e,a,t)):a.memoizedState!==null?(Wa(),a.child=e.child,a.flags|=128,a=null):(Wa(),i=o.fallback,u=a.mode,o=vi({mode:"visible",children:o.children},u),i=xt(i,u,t,null),i.flags|=2,o.return=a,i.return=a,o.sibling=i,a.child=o,ro(a,e.child,null,t),o=a.child,o.memoizedState=hn(t),o.childLanes=vn(e,l,t),a.memoizedState=fn,a=i);else if(Ja(a),$n(u)){if(l=u.nextSibling&&u.nextSibling.dataset,l)var x=l.dgst;l=x,o=Error(m(419)),o.stack="",o.digest=l,Lo({value:o,source:null,stack:null}),a=xn(e,a,t)}else if(Ee||ko(e,a,t,!1),l=(t&e.childLanes)!==0,Ee||l){if(l=se,l!==null&&(o=t&-t,o=(o&42)!==0?1:$i(o),o=(o&(l.suspendedLanes|t))!==0?0:o,o!==0&&o!==d.retryLane))throw d.retryLane=o,Kt(e,o),ea(l,e,o),kc;u.data==="$?"||Vn(),a=xn(e,a,t)}else u.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=d.treeContext,me=ha(u.nextSibling),Re=a,F=!0,jt=null,ya=!1,e!==null&&(na[la++]=Ua,na[la++]=Da,na[la++]=bt,Ua=e.id,Da=e.overflow,bt=a),a=gn(a,o.children),a.flags|=4096);return a}return i?(Wa(),i=o.fallback,u=a.mode,d=e.child,x=d.sibling,o=za(d,{mode:"hidden",children:o.children}),o.subtreeFlags=d.subtreeFlags&65011712,x!==null?i=za(x,i):(i=xt(i,u,t,null),i.flags|=2),i.return=a,o.return=a,o.sibling=i,a.child=o,o=i,i=a.child,u=e.child.memoizedState,u===null?u=hn(t):(d=u.cachePool,d!==null?(x=ye._currentValue,d=d.parent!==x?{parent:x,pool:x}:d):d=Nu(),u={baseLanes:u.baseLanes|t,cachePool:d}),i.memoizedState=u,i.childLanes=vn(e,l,t),a.memoizedState=fn,o):(Ja(a),t=e.child,e=t.sibling,t=za(t,{mode:"visible",children:o.children}),t.return=a,t.sibling=null,e!==null&&(l=a.deletions,l===null?(a.deletions=[e],a.flags|=16):l.push(e)),a.child=t,a.memoizedState=null,t)}function gn(e,a){return a=vi({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function vi(e,a){return e=Ke(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xn(e,a,t){return ro(a,e.child,null,t),e=gn(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Kc(e,a,t){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a),Rr(e.return,a,t)}function bn(e,a,t,o,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:i}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=t,r.tailMode=i)}function Ic(e,a,t){var o=a.pendingProps,i=o.revealOrder,r=o.tail;if(Me(e,a,o.children,t),o=je.current,(o&2)!==0)o=o&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kc(e,t,a);else if(e.tag===19)Kc(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(J(je,o),i){case"forwards":for(t=a.child,i=null;t!==null;)e=t.alternate,e!==null&&mi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=a.child,a.child=null):(i=t.sibling,t.sibling=null),bn(a,!1,i,t,r);break;case"backwards":for(t=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){a.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}bn(a,!0,t,null,r);break;case"together":bn(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Va(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),ot|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(ko(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(m(153));if(a.child!==null){for(e=a.child,t=za(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=za(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function yn(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Is(e)))}function df(e,a,t){switch(a.tag){case 3:Ts(a,a.stateNode.containerInfo),Xa(a,ye,e.memoizedState.cache),Ho();break;case 27:case 5:Zi(a);break;case 4:Ts(a,a.stateNode.containerInfo);break;case 10:Xa(a,a.type,a.memoizedProps.value);break;case 13:var o=a.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Zc(e,a,t):(Ja(a),e=Va(e,a,t),e!==null?e.sibling:null);Ja(a);break;case 19:var i=(e.flags&128)!==0;if(o=(t&a.childLanes)!==0,o||(ko(e,a,t,!1),o=(t&a.childLanes)!==0),i){if(o)return Ic(e,a,t);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(je,je.current),o)break;return null;case 22:case 23:return a.lanes=0,Qc(e,a,t);case 24:Xa(a,ye,e.memoizedState.cache)}return Va(e,a,t)}function Jc(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ee=!0;else{if(!yn(e,t)&&(a.flags&128)===0)return Ee=!1,df(e,a,t);Ee=(e.flags&131072)!==0}else Ee=!1,F&&(a.flags&1048576)!==0&&Tu(a,Ks,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var o=a.elementType,i=o._init;if(o=i(o._payload),a.type=o,typeof o=="function")Mr(o)?(e=Tt(o,e),a.tag=1,a=Xc(null,a,o,e,t)):(a.tag=0,a=pn(null,a,o,e,t));else{if(o!=null){if(i=o.$$typeof,i===Pe){a.tag=11,a=Gc(null,a,o,e,t);break e}else if(i===Ea){a.tag=14,a=Bc(null,a,o,e,t);break e}}throw a=jo(o)||o,Error(m(306,a,""))}}return a;case 0:return pn(e,a,a.type,a.pendingProps,t);case 1:return o=a.type,i=Tt(o,a.pendingProps),Xc(e,a,o,i,t);case 3:e:{if(Ts(a,a.stateNode.containerInfo),e===null)throw Error(m(387));o=a.pendingProps;var r=a.memoizedState;i=r.element,_r(e,a),Xo(a,o,null,t);var l=a.memoizedState;if(o=l.cache,Xa(a,ye,o),o!==r.cache&&Vr(a,[ye],t,!0),Yo(),o=l.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:l.cache},a.updateQueue.baseState=r,a.memoizedState=r,a.flags&256){a=Fc(e,a,o,t);break e}else if(o!==i){i=ia(Error(m(424)),a),Lo(i),a=Fc(e,a,o,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,me=ha(e.firstChild),Re=a,F=!0,jt=null,ya=!0,t=zc(a,null,o,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ho(),o===i){a=Va(e,a,t);break e}Me(e,a,o,t)}a=a.child}return a;case 26:return hi(e,a),e===null?(t=am(a.type,null,a.pendingProps,null))?a.memoizedState=t:F||(t=a.type,e=a.pendingProps,o=Ui(_a.current).createElement(t),o[De]=a,o[Le]=e,Ue(o,t,e),Ae(o),a.stateNode=o):a.memoizedState=am(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Zi(a),e===null&&F&&(o=a.stateNode=Wd(a.type,a.pendingProps,_a.current),Re=a,ya=!0,i=me,nt(a.type)?(el=i,me=ha(o.firstChild)):me=i),Me(e,a,a.pendingProps.children,t),hi(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&F&&((i=o=me)&&(o=kf(o,a.type,a.pendingProps,ya),o!==null?(a.stateNode=o,Re=a,me=ha(o.firstChild),ya=!1,i=!0):i=!1),i||St(a)),Zi(a),i=a.type,r=a.pendingProps,l=e!==null?e.memoizedProps:null,o=r.children,In(i,r)?o=null:l!==null&&In(i,l)&&(a.flags|=32),a.memoizedState!==null&&(i=Zr(e,a,tf,null,null,t),fs._currentValue=i),hi(e,a),Me(e,a,o,t),a.child;case 6:return e===null&&F&&((e=t=me)&&(t=Gf(t,a.pendingProps,ya),t!==null?(a.stateNode=t,Re=a,me=null,e=!0):e=!1),e||St(a)),null;case 13:return Zc(e,a,t);case 4:return Ts(a,a.stateNode.containerInfo),o=a.pendingProps,e===null?a.child=ro(a,null,o,t):Me(e,a,o,t),a.child;case 11:return Gc(e,a,a.type,a.pendingProps,t);case 7:return Me(e,a,a.pendingProps,t),a.child;case 8:return Me(e,a,a.pendingProps.children,t),a.child;case 12:return Me(e,a,a.pendingProps.children,t),a.child;case 10:return o=a.pendingProps,Xa(a,a.type,o.value),Me(e,a,o.children,t),a.child;case 9:return i=a.type._context,o=a.pendingProps.children,At(a),i=Ce(i),o=o(i),a.flags|=1,Me(e,a,o,t),a.child;case 14:return Bc(e,a,a.type,a.pendingProps,t);case 15:return _c(e,a,a.type,a.pendingProps,t);case 19:return Ic(e,a,t);case 31:return o=a.pendingProps,t=a.mode,o={mode:o.mode,children:o.children},e===null?(t=vi(o,t),t.ref=a.ref,a.child=t,t.return=a,a=t):(t=za(e.child,o),t.ref=a.ref,a.child=t,t.return=a,a=t),a;case 22:return Qc(e,a,t);case 24:return At(a),o=Ce(ye),e===null?(i=kr(),i===null&&(i=se,r=Hr(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=t),i=r),a.memoizedState={parent:o,cache:i},Br(a),Xa(a,ye,i)):((e.lanes&t)!==0&&(_r(e,a),Xo(a,null,null,t),Yo()),i=e.memoizedState,r=a.memoizedState,i.parent!==o?(i={parent:o,cache:o},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),Xa(a,ye,o)):(o=r.cache,Xa(a,ye,o),o!==i.cache&&Vr(a,[ye],t,!0))),Me(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(m(156,a.tag))}function Ha(e){e.flags|=4}function Wc(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rm(a)){if(a=ua.current,a!==null&&((P&4194048)===P?ja!==null:(P&62914560)!==P&&(P&536870912)===0||a!==ja))throw Qo=Gr,Ru;e.flags|=8192}}function gi(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Ul():536870912,e.lanes|=a,co|=a)}function $o(e,a){if(!F)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function de(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(a)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags&65011712,o|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=t,a}function mf(e,a,t){var o=a.pendingProps;switch(Cr(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(a),null;case 1:return de(a),null;case 3:return t=a.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),wa(ye),Nt(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Vo(a)?Ha(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Uu())),de(a),null;case 26:return t=a.memoizedState,e===null?(Ha(a),t!==null?(de(a),Wc(a,t)):(de(a),a.flags&=-16777217)):t?t!==e.memoizedState?(Ha(a),de(a),Wc(a,t)):(de(a),a.flags&=-16777217):(e.memoizedProps!==o&&Ha(a),de(a),a.flags&=-16777217),null;case 27:Ms(a),t=_a.current;var i=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==o&&Ha(a);else{if(!o){if(a.stateNode===null)throw Error(m(166));return de(a),null}e=qe.current,Vo(a)?Mu(a):(e=Wd(i,o,t),a.stateNode=e,Ha(a))}return de(a),null;case 5:if(Ms(a),t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==o&&Ha(a);else{if(!o){if(a.stateNode===null)throw Error(m(166));return de(a),null}if(e=qe.current,Vo(a))Mu(a);else{switch(i=Ui(_a.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?i.createElement(t,{is:o.is}):i.createElement(t)}}e[De]=a,e[Le]=o;e:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=e;e:switch(Ue(e,t,o),t){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ha(a)}}return de(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==o&&Ha(a);else{if(typeof o!="string"&&a.stateNode===null)throw Error(m(166));if(e=_a.current,Vo(a)){if(e=a.stateNode,t=a.memoizedProps,o=null,i=Re,i!==null)switch(i.tag){case 27:case 5:o=i.memoizedProps}e[De]=a,e=!!(e.nodeValue===t||o!==null&&o.suppressHydrationWarning===!0||Yd(e.nodeValue,t)),e||St(a)}else e=Ui(e).createTextNode(o),e[De]=a,a.stateNode=e}return de(a),null;case 13:if(o=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Vo(a),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[De]=a}else Ho(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;de(a),i=!1}else i=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(Ra(a),a):(Ra(a),null)}if(Ra(a),(a.flags&128)!==0)return a.lanes=t,a;if(t=o!==null,e=e!==null&&e.memoizedState!==null,t){o=a.child,i=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(i=o.alternate.memoizedState.cachePool.pool);var r=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==i&&(o.flags|=2048)}return t!==e&&t&&(a.child.flags|=8192),gi(a,a.updateQueue),de(a),null;case 4:return Nt(),e===null&&Yn(a.stateNode.containerInfo),de(a),null;case 10:return wa(a.type),de(a),null;case 19:if(ce(je),i=a.memoizedState,i===null)return de(a),null;if(o=(a.flags&128)!==0,r=i.rendering,r===null)if(o)$o(i,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(r=mi(e),r!==null){for(a.flags|=128,$o(i,!1),e=r.updateQueue,a.updateQueue=e,gi(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Ou(t,e),t=t.sibling;return J(je,je.current&1|2),a.child}e=e.sibling}i.tail!==null&&ba()>yi&&(a.flags|=128,o=!0,$o(i,!1),a.lanes=4194304)}else{if(!o)if(e=mi(r),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,gi(a,e),$o(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!F)return de(a),null}else 2*ba()-i.renderingStartTime>yi&&t!==536870912&&(a.flags|=128,o=!0,$o(i,!1),a.lanes=4194304);i.isBackwards?(r.sibling=a.child,a.child=r):(e=i.last,e!==null?e.sibling=r:a.child=r,i.last=r)}return i.tail!==null?(a=i.tail,i.rendering=a,i.tail=a.sibling,i.renderingStartTime=ba(),a.sibling=null,e=je.current,J(je,o?e&1|2:e&1),a):(de(a),null);case 22:case 23:return Ra(a),Xr(),o=a.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(a.flags|=8192):o&&(a.flags|=8192),o?(t&536870912)!==0&&(a.flags&128)===0&&(de(a),a.subtreeFlags&6&&(a.flags|=8192)):de(a),t=a.updateQueue,t!==null&&gi(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==t&&(a.flags|=2048),e!==null&&ce(Et),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),wa(ye),de(a),null;case 25:return null;case 30:return null}throw Error(m(156,a.tag))}function pf(e,a){switch(Cr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return wa(ye),Nt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ms(a),null;case 13:if(Ra(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(m(340));Ho()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return ce(je),null;case 4:return Nt(),null;case 10:return wa(a.type),null;case 22:case 23:return Ra(a),Xr(),e!==null&&ce(Et),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return wa(ye),null;case 25:return null;default:return null}}function $c(e,a){switch(Cr(a),a.tag){case 3:wa(ye),Nt();break;case 26:case 27:case 5:Ms(a);break;case 4:Nt();break;case 13:Ra(a);break;case 19:ce(je);break;case 10:wa(a.type);break;case 22:case 23:Ra(a),Xr(),e!==null&&ce(Et);break;case 24:wa(ye)}}function es(e,a){try{var t=a.updateQueue,o=t!==null?t.lastEffect:null;if(o!==null){var i=o.next;t=i;do{if((t.tag&e)===e){o=void 0;var r=t.create,l=t.inst;o=r(),l.destroy=o}t=t.next}while(t!==i)}}catch(u){ae(a,a.return,u)}}function $a(e,a,t){try{var o=a.updateQueue,i=o!==null?o.lastEffect:null;if(i!==null){var r=i.next;o=r;do{if((o.tag&e)===e){var l=o.inst,u=l.destroy;if(u!==void 0){l.destroy=void 0,i=a;var d=t,x=u;try{x()}catch(j){ae(i,d,j)}}}o=o.next}while(o!==r)}}catch(j){ae(a,a.return,j)}}function ed(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Bu(a,t)}catch(o){ae(e,e.return,o)}}}function ad(e,a,t){t.props=Tt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(o){ae(e,a,o)}}function as(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof t=="function"?e.refCleanup=t(o):t.current=o}}catch(i){ae(e,a,i)}}function Sa(e,a){var t=e.ref,o=e.refCleanup;if(t!==null)if(typeof o=="function")try{o()}catch(i){ae(e,a,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){ae(e,a,i)}else t.current=null}function td(e){var a=e.type,t=e.memoizedProps,o=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&o.focus();break e;case"img":t.src?o.src=t.src:t.srcSet&&(o.srcset=t.srcSet)}}catch(i){ae(e,e.return,i)}}function jn(e,a,t){try{var o=e.stateNode;Nf(o,e.type,t,a),o[Le]=a}catch(i){ae(e,e.return,i)}}function od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&nt(e.type)||e.tag===4}function Sn(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&nt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qn(e,a,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=zi));else if(o!==4&&(o===27&&nt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(qn(e,a,t),e=e.sibling;e!==null;)qn(e,a,t),e=e.sibling}function xi(e,a,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(o!==4&&(o===27&&nt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(xi(e,a,t),e=e.sibling;e!==null;)xi(e,a,t),e=e.sibling}function sd(e){var a=e.stateNode,t=e.memoizedProps;try{for(var o=e.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Ue(a,o,t),a[De]=e,a[Le]=t}catch(r){ae(e,e.return,r)}}var La=!1,ve=!1,An=!1,id=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ff(e,a){if(e=e.containerInfo,Zn=Vi,e=vu(e),jr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var i=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var l=0,u=-1,d=-1,x=0,j=0,A=e,b=null;a:for(;;){for(var y;A!==t||i!==0&&A.nodeType!==3||(u=l+i),A!==r||o!==0&&A.nodeType!==3||(d=l+o),A.nodeType===3&&(l+=A.nodeValue.length),(y=A.firstChild)!==null;)b=A,A=y;for(;;){if(A===e)break a;if(b===t&&++x===i&&(u=l),b===r&&++j===o&&(d=l),(y=A.nextSibling)!==null)break;A=b,b=A.parentNode}A=y}t=u===-1||d===-1?null:{start:u,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Kn={focusedElem:e,selectionRange:t},Vi=!1,Oe=a;Oe!==null;)if(a=Oe,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,Oe=e;else for(;Oe!==null;){switch(a=Oe,r=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,t=a,i=r.memoizedProps,r=r.memoizedState,o=t.stateNode;try{var N=Tt(t.type,i,t.elementType===t.type);e=o.getSnapshotBeforeUpdate(N,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(C){ae(t,t.return,C)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Wn(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wn(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=a.sibling,e!==null){e.return=a.return,Oe=e;break}Oe=a.return}}function rd(e,a,t){var o=t.flags;switch(t.tag){case 0:case 11:case 15:et(e,t),o&4&&es(5,t);break;case 1:if(et(e,t),o&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(l){ae(t,t.return,l)}else{var i=Tt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(i,a,e.__reactInternalSnapshotBeforeUpdate)}catch(l){ae(t,t.return,l)}}o&64&&ed(t),o&512&&as(t,t.return);break;case 3:if(et(e,t),o&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Bu(e,a)}catch(l){ae(t,t.return,l)}}break;case 27:a===null&&o&4&&sd(t);case 26:case 5:et(e,t),a===null&&o&4&&td(t),o&512&&as(t,t.return);break;case 12:et(e,t);break;case 13:et(e,t),o&4&&ud(e,t),o&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=qf.bind(null,t),Bf(e,t))));break;case 22:if(o=t.memoizedState!==null||La,!o){a=a!==null&&a.memoizedState!==null||ve,i=La;var r=ve;La=o,(ve=a)&&!r?at(e,t,(t.subtreeFlags&8772)!==0):et(e,t),La=i,ve=r}break;case 30:break;default:et(e,t)}}function nd(e){var a=e.alternate;a!==null&&(e.alternate=null,nd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&tr(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ue=null,Be=!1;function ka(e,a,t){for(t=t.child;t!==null;)ld(e,a,t),t=t.sibling}function ld(e,a,t){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(So,t)}catch{}switch(t.tag){case 26:ve||Sa(t,a),ka(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ve||Sa(t,a);var o=ue,i=Be;nt(t.type)&&(ue=t.stateNode,Be=!1),ka(e,a,t),cs(t.stateNode),ue=o,Be=i;break;case 5:ve||Sa(t,a);case 6:if(o=ue,i=Be,ue=null,ka(e,a,t),ue=o,Be=i,ue!==null)if(Be)try{(ue.nodeType===9?ue.body:ue.nodeName==="HTML"?ue.ownerDocument.body:ue).removeChild(t.stateNode)}catch(r){ae(t,a,r)}else try{ue.removeChild(t.stateNode)}catch(r){ae(t,a,r)}break;case 18:ue!==null&&(Be?(e=ue,Id(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),xs(e)):Id(ue,t.stateNode));break;case 4:o=ue,i=Be,ue=t.stateNode.containerInfo,Be=!0,ka(e,a,t),ue=o,Be=i;break;case 0:case 11:case 14:case 15:ve||$a(2,t,a),ve||$a(4,t,a),ka(e,a,t);break;case 1:ve||(Sa(t,a),o=t.stateNode,typeof o.componentWillUnmount=="function"&&ad(t,a,o)),ka(e,a,t);break;case 21:ka(e,a,t);break;case 22:ve=(o=ve)||t.memoizedState!==null,ka(e,a,t),ve=o;break;default:ka(e,a,t)}}function ud(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xs(e)}catch(t){ae(a,a.return,t)}}function hf(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new id),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new id),a;default:throw Error(m(435,e.tag))}}function En(e,a){var t=hf(e);a.forEach(function(o){var i=Af.bind(null,e,o);t.has(o)||(t.add(o),o.then(i,i))})}function Ie(e,a){var t=a.deletions;if(t!==null)for(var o=0;o<t.length;o++){var i=t[o],r=e,l=a,u=l;e:for(;u!==null;){switch(u.tag){case 27:if(nt(u.type)){ue=u.stateNode,Be=!1;break e}break;case 5:ue=u.stateNode,Be=!1;break e;case 3:case 4:ue=u.stateNode.containerInfo,Be=!0;break e}u=u.return}if(ue===null)throw Error(m(160));ld(r,l,i),ue=null,Be=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)cd(a,e),a=a.sibling}var fa=null;function cd(e,a){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ie(a,e),Je(e),o&4&&($a(3,e,e.return),es(3,e),$a(5,e,e.return));break;case 1:Ie(a,e),Je(e),o&512&&(ve||t===null||Sa(t,t.return)),o&64&&La&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?o:t.concat(o))));break;case 26:var i=fa;if(Ie(a,e),Je(e),o&512&&(ve||t===null||Sa(t,t.return)),o&4){var r=t!==null?t.memoizedState:null;if(o=e.memoizedState,t===null)if(o===null)if(e.stateNode===null){e:{o=e.type,t=e.memoizedProps,i=i.ownerDocument||i;a:switch(o){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Eo]||r[De]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(o),i.head.insertBefore(r,i.querySelector("head > title"))),Ue(r,o,t),r[De]=e,Ae(r),o=r;break e;case"link":var l=sm("link","href",i).get(o+(t.href||""));if(l){for(var u=0;u<l.length;u++)if(r=l[u],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(u,1);break a}}r=i.createElement(o),Ue(r,o,t),i.head.appendChild(r);break;case"meta":if(l=sm("meta","content",i).get(o+(t.content||""))){for(u=0;u<l.length;u++)if(r=l[u],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(u,1);break a}}r=i.createElement(o),Ue(r,o,t),i.head.appendChild(r);break;default:throw Error(m(468,o))}r[De]=e,Ae(r),o=r}e.stateNode=o}else im(i,e.type,e.stateNode);else e.stateNode=om(i,o,e.memoizedProps);else r!==o?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,o===null?im(i,e.type,e.stateNode):om(i,o,e.memoizedProps)):o===null&&e.stateNode!==null&&jn(e,e.memoizedProps,t.memoizedProps)}break;case 27:Ie(a,e),Je(e),o&512&&(ve||t===null||Sa(t,t.return)),t!==null&&o&4&&jn(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Ie(a,e),Je(e),o&512&&(ve||t===null||Sa(t,t.return)),e.flags&32){i=e.stateNode;try{_t(i,"")}catch(y){ae(e,e.return,y)}}o&4&&e.stateNode!=null&&(i=e.memoizedProps,jn(e,i,t!==null?t.memoizedProps:i)),o&1024&&(An=!0);break;case 6:if(Ie(a,e),Je(e),o&4){if(e.stateNode===null)throw Error(m(162));o=e.memoizedProps,t=e.stateNode;try{t.nodeValue=o}catch(y){ae(e,e.return,y)}}break;case 3:if(wi=null,i=fa,fa=Di(a.containerInfo),Ie(a,e),fa=i,Je(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{xs(a.containerInfo)}catch(y){ae(e,e.return,y)}An&&(An=!1,dd(e));break;case 4:o=fa,fa=Di(e.stateNode.containerInfo),Ie(a,e),Je(e),fa=o;break;case 12:Ie(a,e),Je(e);break;case 13:Ie(a,e),Je(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Dn=ba()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,En(e,o)));break;case 22:i=e.memoizedState!==null;var d=t!==null&&t.memoizedState!==null,x=La,j=ve;if(La=x||i,ve=j||d,Ie(a,e),ve=j,La=x,Je(e),o&8192)e:for(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(t===null||d||La||ve||Mt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){d=t=a;try{if(r=d.stateNode,i)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{u=d.stateNode;var A=d.memoizedProps.style,b=A!=null&&A.hasOwnProperty("display")?A.display:null;u.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(y){ae(d,d.return,y)}}}else if(a.tag===6){if(t===null){d=a;try{d.stateNode.nodeValue=i?"":d.memoizedProps}catch(y){ae(d,d.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}o&4&&(o=e.updateQueue,o!==null&&(t=o.retryQueue,t!==null&&(o.retryQueue=null,En(e,t))));break;case 19:Ie(a,e),Je(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,En(e,o)));break;case 30:break;case 21:break;default:Ie(a,e),Je(e)}}function Je(e){var a=e.flags;if(a&2){try{for(var t,o=e.return;o!==null;){if(od(o)){t=o;break}o=o.return}if(t==null)throw Error(m(160));switch(t.tag){case 27:var i=t.stateNode,r=Sn(e);xi(e,r,i);break;case 5:var l=t.stateNode;t.flags&32&&(_t(l,""),t.flags&=-33);var u=Sn(e);xi(e,u,l);break;case 3:case 4:var d=t.stateNode.containerInfo,x=Sn(e);qn(e,x,d);break;default:throw Error(m(161))}}catch(j){ae(e,e.return,j)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function dd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;dd(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function et(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)rd(e,a.alternate,a),a=a.sibling}function Mt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),Mt(a);break;case 1:Sa(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&ad(a,a.return,t),Mt(a);break;case 27:cs(a.stateNode);case 26:case 5:Sa(a,a.return),Mt(a);break;case 22:a.memoizedState===null&&Mt(a);break;case 30:Mt(a);break;default:Mt(a)}e=e.sibling}}function at(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var o=a.alternate,i=e,r=a,l=r.flags;switch(r.tag){case 0:case 11:case 15:at(i,r,t),es(4,r);break;case 1:if(at(i,r,t),o=r,i=o.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(x){ae(o,o.return,x)}if(o=r,i=o.updateQueue,i!==null){var u=o.stateNode;try{var d=i.shared.hiddenCallbacks;if(d!==null)for(i.shared.hiddenCallbacks=null,i=0;i<d.length;i++)Gu(d[i],u)}catch(x){ae(o,o.return,x)}}t&&l&64&&ed(r),as(r,r.return);break;case 27:sd(r);case 26:case 5:at(i,r,t),t&&o===null&&l&4&&td(r),as(r,r.return);break;case 12:at(i,r,t);break;case 13:at(i,r,t),t&&l&4&&ud(i,r);break;case 22:r.memoizedState===null&&at(i,r,t),as(r,r.return);break;case 30:break;default:at(i,r,t)}a=a.sibling}}function On(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Go(t))}function Tn(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Go(e))}function qa(e,a,t,o){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)md(e,a,t,o),a=a.sibling}function md(e,a,t,o){var i=a.flags;switch(a.tag){case 0:case 11:case 15:qa(e,a,t,o),i&2048&&es(9,a);break;case 1:qa(e,a,t,o);break;case 3:qa(e,a,t,o),i&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Go(e)));break;case 12:if(i&2048){qa(e,a,t,o),e=a.stateNode;try{var r=a.memoizedProps,l=r.id,u=r.onPostCommit;typeof u=="function"&&u(l,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){ae(a,a.return,d)}}else qa(e,a,t,o);break;case 13:qa(e,a,t,o);break;case 23:break;case 22:r=a.stateNode,l=a.alternate,a.memoizedState!==null?r._visibility&2?qa(e,a,t,o):ts(e,a):r._visibility&2?qa(e,a,t,o):(r._visibility|=2,no(e,a,t,o,(a.subtreeFlags&10256)!==0)),i&2048&&On(l,a);break;case 24:qa(e,a,t,o),i&2048&&Tn(a.alternate,a);break;default:qa(e,a,t,o)}}function no(e,a,t,o,i){for(i=i&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var r=e,l=a,u=t,d=o,x=l.flags;switch(l.tag){case 0:case 11:case 15:no(r,l,u,d,i),es(8,l);break;case 23:break;case 22:var j=l.stateNode;l.memoizedState!==null?j._visibility&2?no(r,l,u,d,i):ts(r,l):(j._visibility|=2,no(r,l,u,d,i)),i&&x&2048&&On(l.alternate,l);break;case 24:no(r,l,u,d,i),i&&x&2048&&Tn(l.alternate,l);break;default:no(r,l,u,d,i)}a=a.sibling}}function ts(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,o=a,i=o.flags;switch(o.tag){case 22:ts(t,o),i&2048&&On(o.alternate,o);break;case 24:ts(t,o),i&2048&&Tn(o.alternate,o);break;default:ts(t,o)}a=a.sibling}}var os=8192;function lo(e){if(e.subtreeFlags&os)for(e=e.child;e!==null;)pd(e),e=e.sibling}function pd(e){switch(e.tag){case 26:lo(e),e.flags&os&&e.memoizedState!==null&&eh(fa,e.memoizedState,e.memoizedProps);break;case 5:lo(e);break;case 3:case 4:var a=fa;fa=Di(e.stateNode.containerInfo),lo(e),fa=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=os,os=16777216,lo(e),os=a):lo(e));break;default:lo(e)}}function fd(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ss(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var o=a[t];Oe=o,vd(o,e)}fd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hd(e),e=e.sibling}function hd(e){switch(e.tag){case 0:case 11:case 15:ss(e),e.flags&2048&&$a(9,e,e.return);break;case 3:ss(e);break;case 12:ss(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,bi(e)):ss(e);break;default:ss(e)}}function bi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var o=a[t];Oe=o,vd(o,e)}fd(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:$a(8,a,a.return),bi(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,bi(a));break;default:bi(a)}e=e.sibling}}function vd(e,a){for(;Oe!==null;){var t=Oe;switch(t.tag){case 0:case 11:case 15:$a(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var o=t.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Go(t.memoizedState.cache)}if(o=t.child,o!==null)o.return=t,Oe=o;else e:for(t=e;Oe!==null;){o=Oe;var i=o.sibling,r=o.return;if(nd(o),o===t){Oe=null;break e}if(i!==null){i.return=r,Oe=i;break e}Oe=r}}}var vf={getCacheForType:function(e){var a=Ce(ye),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t}},gf=typeof WeakMap=="function"?WeakMap:Map,K=0,se=null,B=null,P=0,I=0,We=null,tt=!1,uo=!1,Mn=!1,Ga=0,pe=0,ot=0,zt=0,zn=0,ca=0,co=0,is=null,_e=null,Un=!1,Dn=0,yi=1/0,ji=null,st=null,ze=0,it=null,mo=null,po=0,Cn=0,wn=null,gd=null,rs=0,Nn=null;function $e(){if((K&2)!==0&&P!==0)return P&-P;if(q.T!==null){var e=$t;return e!==0?e:Bn()}return wl()}function xd(){ca===0&&(ca=(P&536870912)===0||F?zl():536870912);var e=ua.current;return e!==null&&(e.flags|=32),ca}function ea(e,a,t){(e===se&&(I===2||I===9)||e.cancelPendingCommit!==null)&&(fo(e,0),rt(e,P,ca,!1)),Ao(e,t),((K&2)===0||e!==se)&&(e===se&&((K&2)===0&&(zt|=t),pe===4&&rt(e,P,ca,!1)),Aa(e))}function bd(e,a,t){if((K&6)!==0)throw Error(m(327));var o=!t&&(a&124)===0&&(a&e.expiredLanes)===0||qo(e,a),i=o?yf(e,a):Hn(e,a,!0),r=o;do{if(i===0){uo&&!o&&rt(e,a,0,!1);break}else{if(t=e.current.alternate,r&&!xf(t)){i=Hn(e,a,!1),r=!1;continue}if(i===2){if(r=a,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){a=l;e:{var u=e;i=is;var d=u.current.memoizedState.isDehydrated;if(d&&(fo(u,l).flags|=256),l=Hn(u,l,!1),l!==2){if(Mn&&!d){u.errorRecoveryDisabledLanes|=r,zt|=r,i=4;break e}r=_e,_e=i,r!==null&&(_e===null?_e=r:_e.push.apply(_e,r))}i=l}if(r=!1,i!==2)continue}}if(i===1){fo(e,0),rt(e,a,0,!0);break}e:{switch(o=e,r=i,r){case 0:case 1:throw Error(m(345));case 4:if((a&4194048)!==a)break;case 6:rt(o,a,ca,!tt);break e;case 2:_e=null;break;case 3:case 5:break;default:throw Error(m(329))}if((a&62914560)===a&&(i=Dn+300-ba(),10<i)){if(rt(o,a,ca,!tt),Cs(o,0,!0)!==0)break e;o.timeoutHandle=Zd(yd.bind(null,o,t,_e,ji,Un,a,ca,zt,co,tt,r,2,-0,0),i);break e}yd(o,t,_e,ji,Un,a,ca,zt,co,tt,r,0,-0,0)}}break}while(!0);Aa(e)}function yd(e,a,t,o,i,r,l,u,d,x,j,A,b,y){if(e.timeoutHandle=-1,A=a.subtreeFlags,(A&8192||(A&16785408)===16785408)&&(ps={stylesheets:null,count:0,unsuspend:$f},pd(a),A=ah(),A!==null)){e.cancelPendingCommit=A(Td.bind(null,e,a,r,t,o,i,l,u,d,j,1,b,y)),rt(e,r,l,!x);return}Td(e,a,r,t,o,i,l,u,d)}function xf(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var o=0;o<t.length;o++){var i=t[o],r=i.getSnapshot;i=i.value;try{if(!Ze(r(),i))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function rt(e,a,t,o){a&=~zn,a&=~zt,e.suspendedLanes|=a,e.pingedLanes&=~a,o&&(e.warmLanes|=a),o=e.expirationTimes;for(var i=a;0<i;){var r=31-Fe(i),l=1<<r;o[r]=-1,i&=~l}t!==0&&Dl(e,t,a)}function Si(){return(K&6)===0?(ns(0),!1):!0}function Rn(){if(B!==null){if(I===0)var e=B.return;else e=B,Ca=qt=null,Jr(e),io=null,Jo=0,e=B;for(;e!==null;)$c(e.alternate,e),e=e.return;B=null}}function fo(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Vf(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Rn(),se=e,B=t=za(e.current,null),P=a,I=0,We=null,tt=!1,uo=qo(e,a),Mn=!1,co=ca=zn=zt=ot=pe=0,_e=is=null,Un=!1,(a&8)!==0&&(a|=a&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=a;0<o;){var i=31-Fe(o),r=1<<i;a|=e[i],o&=~r}return Ga=a,Ps(),t}function jd(e,a){L=null,q.H=ui,a===_o||a===$s?(a=Lu(),I=3):a===Ru?(a=Lu(),I=4):I=a===kc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,We=a,B===null&&(pe=1,fi(e,ia(a,e.current)))}function Sd(){var e=q.H;return q.H=ui,e===null?ui:e}function qd(){var e=q.A;return q.A=vf,e}function Vn(){pe=4,tt||(P&4194048)!==P&&ua.current!==null||(uo=!0),(ot&134217727)===0&&(zt&134217727)===0||se===null||rt(se,P,ca,!1)}function Hn(e,a,t){var o=K;K|=2;var i=Sd(),r=qd();(se!==e||P!==a)&&(ji=null,fo(e,a)),a=!1;var l=pe;e:do try{if(I!==0&&B!==null){var u=B,d=We;switch(I){case 8:Rn(),l=6;break e;case 3:case 2:case 9:case 6:ua.current===null&&(a=!0);var x=I;if(I=0,We=null,ho(e,u,d,x),t&&uo){l=0;break e}break;default:x=I,I=0,We=null,ho(e,u,d,x)}}bf(),l=pe;break}catch(j){jd(e,j)}while(!0);return a&&e.shellSuspendCounter++,Ca=qt=null,K=o,q.H=i,q.A=r,B===null&&(se=null,P=0,Ps()),l}function bf(){for(;B!==null;)Ad(B)}function yf(e,a){var t=K;K|=2;var o=Sd(),i=qd();se!==e||P!==a?(ji=null,yi=ba()+500,fo(e,a)):uo=qo(e,a);e:do try{if(I!==0&&B!==null){a=B;var r=We;a:switch(I){case 1:I=0,We=null,ho(e,a,r,1);break;case 2:case 9:if(Vu(r)){I=0,We=null,Ed(a);break}a=function(){I!==2&&I!==9||se!==e||(I=7),Aa(e)},r.then(a,a);break e;case 3:I=7;break e;case 4:I=5;break e;case 7:Vu(r)?(I=0,We=null,Ed(a)):(I=0,We=null,ho(e,a,r,7));break;case 5:var l=null;switch(B.tag){case 26:l=B.memoizedState;case 5:case 27:var u=B;if(!l||rm(l)){I=0,We=null;var d=u.sibling;if(d!==null)B=d;else{var x=u.return;x!==null?(B=x,qi(x)):B=null}break a}}I=0,We=null,ho(e,a,r,5);break;case 6:I=0,We=null,ho(e,a,r,6);break;case 8:Rn(),pe=6;break e;default:throw Error(m(462))}}jf();break}catch(j){jd(e,j)}while(!0);return Ca=qt=null,q.H=o,q.A=i,K=t,B!==null?0:(se=null,P=0,Ps(),pe)}function jf(){for(;B!==null&&!_m();)Ad(B)}function Ad(e){var a=Jc(e.alternate,e,Ga);e.memoizedProps=e.pendingProps,a===null?qi(e):B=a}function Ed(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Yc(t,a,a.pendingProps,a.type,void 0,P);break;case 11:a=Yc(t,a,a.pendingProps,a.type.render,a.ref,P);break;case 5:Jr(a);default:$c(t,a),a=B=Ou(a,Ga),a=Jc(t,a,Ga)}e.memoizedProps=e.pendingProps,a===null?qi(e):B=a}function ho(e,a,t,o){Ca=qt=null,Jr(a),io=null,Jo=0;var i=a.return;try{if(cf(e,i,a,t,P)){pe=1,fi(e,ia(t,e.current)),B=null;return}}catch(r){if(i!==null)throw B=i,r;pe=1,fi(e,ia(t,e.current)),B=null;return}a.flags&32768?(F||o===1?e=!0:uo||(P&536870912)!==0?e=!1:(tt=e=!0,(o===2||o===9||o===3||o===6)&&(o=ua.current,o!==null&&o.tag===13&&(o.flags|=16384))),Od(a,e)):qi(a)}function qi(e){var a=e;do{if((a.flags&32768)!==0){Od(a,tt);return}e=a.return;var t=mf(a.alternate,a,Ga);if(t!==null){B=t;return}if(a=a.sibling,a!==null){B=a;return}B=a=e}while(a!==null);pe===0&&(pe=5)}function Od(e,a){do{var t=pf(e.alternate,e);if(t!==null){t.flags&=32767,B=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){B=e;return}B=e=t}while(e!==null);pe=6,B=null}function Td(e,a,t,o,i,r,l,u,d){e.cancelPendingCommit=null;do Ai();while(ze!==0);if((K&6)!==0)throw Error(m(327));if(a!==null){if(a===e.current)throw Error(m(177));if(r=a.lanes|a.childLanes,r|=Or,Wm(e,t,r,l,u,d),e===se&&(B=se=null,P=0),mo=a,it=e,po=t,Cn=r,wn=i,gd=o,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ef(zs,function(){return Cd(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||o){o=q.T,q.T=null,i=M.p,M.p=2,l=K,K|=4;try{ff(e,a,t)}finally{K=l,M.p=i,q.T=o}}ze=1,Md(),zd(),Ud()}}function Md(){if(ze===1){ze=0;var e=it,a=mo,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=q.T,q.T=null;var o=M.p;M.p=2;var i=K;K|=4;try{cd(a,e);var r=Kn,l=vu(e.containerInfo),u=r.focusedElem,d=r.selectionRange;if(l!==u&&u&&u.ownerDocument&&hu(u.ownerDocument.documentElement,u)){if(d!==null&&jr(u)){var x=d.start,j=d.end;if(j===void 0&&(j=x),"selectionStart"in u)u.selectionStart=x,u.selectionEnd=Math.min(j,u.value.length);else{var A=u.ownerDocument||document,b=A&&A.defaultView||window;if(b.getSelection){var y=b.getSelection(),N=u.textContent.length,C=Math.min(d.start,N),ee=d.end===void 0?C:Math.min(d.end,N);!y.extend&&C>ee&&(l=ee,ee=C,C=l);var h=fu(u,C),f=fu(u,ee);if(h&&f&&(y.rangeCount!==1||y.anchorNode!==h.node||y.anchorOffset!==h.offset||y.focusNode!==f.node||y.focusOffset!==f.offset)){var g=A.createRange();g.setStart(h.node,h.offset),y.removeAllRanges(),C>ee?(y.addRange(g),y.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),y.addRange(g))}}}}for(A=[],y=u;y=y.parentNode;)y.nodeType===1&&A.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<A.length;u++){var S=A[u];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Vi=!!Zn,Kn=Zn=null}finally{K=i,M.p=o,q.T=t}}e.current=a,ze=2}}function zd(){if(ze===2){ze=0;var e=it,a=mo,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=q.T,q.T=null;var o=M.p;M.p=2;var i=K;K|=4;try{rd(e,a.alternate,a)}finally{K=i,M.p=o,q.T=t}}ze=3}}function Ud(){if(ze===4||ze===3){ze=0,Qm();var e=it,a=mo,t=po,o=gd;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?ze=5:(ze=0,mo=it=null,Dd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(st=null),er(t),a=a.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(So,a,void 0,(a.current.flags&128)===128)}catch{}if(o!==null){a=q.T,i=M.p,M.p=2,q.T=null;try{for(var r=e.onRecoverableError,l=0;l<o.length;l++){var u=o[l];r(u.value,{componentStack:u.stack})}}finally{q.T=a,M.p=i}}(po&3)!==0&&Ai(),Aa(e),i=e.pendingLanes,(t&4194090)!==0&&(i&42)!==0?e===Nn?rs++:(rs=0,Nn=e):rs=0,ns(0)}}function Dd(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Go(a)))}function Ai(e){return Md(),zd(),Ud(),Cd()}function Cd(){if(ze!==5)return!1;var e=it,a=Cn;Cn=0;var t=er(po),o=q.T,i=M.p;try{M.p=32>t?32:t,q.T=null,t=wn,wn=null;var r=it,l=po;if(ze=0,mo=it=null,po=0,(K&6)!==0)throw Error(m(331));var u=K;if(K|=4,hd(r.current),md(r,r.current,l,t),K=u,ns(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(So,r)}catch{}return!0}finally{M.p=i,q.T=o,Dd(e,a)}}function wd(e,a,t){a=ia(t,a),a=mn(e.stateNode,a,2),e=Ka(e,a,2),e!==null&&(Ao(e,2),Aa(e))}function ae(e,a,t){if(e.tag===3)wd(e,e,t);else for(;a!==null;){if(a.tag===3){wd(a,e,t);break}else if(a.tag===1){var o=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(st===null||!st.has(o))){e=ia(t,e),t=Hc(2),o=Ka(a,t,2),o!==null&&(Lc(t,o,a,e),Ao(o,2),Aa(o));break}}a=a.return}}function Ln(e,a,t){var o=e.pingCache;if(o===null){o=e.pingCache=new gf;var i=new Set;o.set(a,i)}else i=o.get(a),i===void 0&&(i=new Set,o.set(a,i));i.has(t)||(Mn=!0,i.add(t),e=Sf.bind(null,e,a,t),a.then(e,e))}function Sf(e,a,t){var o=e.pingCache;o!==null&&o.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,se===e&&(P&t)===t&&(pe===4||pe===3&&(P&62914560)===P&&300>ba()-Dn?(K&2)===0&&fo(e,0):zn|=t,co===P&&(co=0)),Aa(e)}function Nd(e,a){a===0&&(a=Ul()),e=Kt(e,a),e!==null&&(Ao(e,a),Aa(e))}function qf(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Nd(e,t)}function Af(e,a){var t=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(m(314))}o!==null&&o.delete(a),Nd(e,t)}function Ef(e,a){return Ii(e,a)}var Ei=null,vo=null,kn=!1,Oi=!1,Gn=!1,Ut=0;function Aa(e){e!==vo&&e.next===null&&(vo===null?Ei=vo=e:vo=vo.next=e),Oi=!0,kn||(kn=!0,Tf())}function ns(e,a){if(!Gn&&Oi){Gn=!0;do for(var t=!1,o=Ei;o!==null;){if(e!==0){var i=o.pendingLanes;if(i===0)var r=0;else{var l=o.suspendedLanes,u=o.pingedLanes;r=(1<<31-Fe(42|e)+1)-1,r&=i&~(l&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,Ld(o,r))}else r=P,r=Cs(o,o===se?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||qo(o,r)||(t=!0,Ld(o,r));o=o.next}while(t);Gn=!1}}function Of(){Rd()}function Rd(){Oi=kn=!1;var e=0;Ut!==0&&(Rf()&&(e=Ut),Ut=0);for(var a=ba(),t=null,o=Ei;o!==null;){var i=o.next,r=Vd(o,a);r===0?(o.next=null,t===null?Ei=i:t.next=i,i===null&&(vo=t)):(t=o,(e!==0||(r&3)!==0)&&(Oi=!0)),o=i}ns(e)}function Vd(e,a){for(var t=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-Fe(r),u=1<<l,d=i[l];d===-1?((u&t)===0||(u&o)!==0)&&(i[l]=Jm(u,a)):d<=a&&(e.expiredLanes|=u),r&=~u}if(a=se,t=P,t=Cs(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,t===0||e===a&&(I===2||I===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ji(o),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||qo(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(o!==null&&Ji(o),er(t)){case 2:case 8:t=Tl;break;case 32:t=zs;break;case 268435456:t=Ml;break;default:t=zs}return o=Hd.bind(null,e),t=Ii(t,o),e.callbackPriority=a,e.callbackNode=t,a}return o!==null&&o!==null&&Ji(o),e.callbackPriority=2,e.callbackNode=null,2}function Hd(e,a){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ai()&&e.callbackNode!==t)return null;var o=P;return o=Cs(e,e===se?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(bd(e,o,a),Vd(e,ba()),e.callbackNode!=null&&e.callbackNode===t?Hd.bind(null,e):null)}function Ld(e,a){if(Ai())return null;bd(e,a,!0)}function Tf(){Hf(function(){(K&6)!==0?Ii(Ol,Of):Rd()})}function Bn(){return Ut===0&&(Ut=zl()),Ut}function kd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hs(""+e)}function Gd(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Mf(e,a,t,o,i){if(a==="submit"&&t&&t.stateNode===i){var r=kd((i[Le]||null).action),l=o.submitter;l&&(a=(a=l[Le]||null)?kd(a.formAction):l.getAttribute("formAction"),a!==null&&(r=a,l=null));var u=new Bs("action","action",null,o,i);e.push({event:u,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ut!==0){var d=l?Gd(i,l):new FormData(i);nn(t,{pending:!0,data:d,method:i.method,action:r},null,d)}}else typeof r=="function"&&(u.preventDefault(),d=l?Gd(i,l):new FormData(i),nn(t,{pending:!0,data:d,method:i.method,action:r},r,d))},currentTarget:i}]})}}for(var _n=0;_n<Er.length;_n++){var Qn=Er[_n],zf=Qn.toLowerCase(),Uf=Qn[0].toUpperCase()+Qn.slice(1);pa(zf,"on"+Uf)}pa(bu,"onAnimationEnd"),pa(yu,"onAnimationIteration"),pa(ju,"onAnimationStart"),pa("dblclick","onDoubleClick"),pa("focusin","onFocus"),pa("focusout","onBlur"),pa(Xp,"onTransitionRun"),pa(Fp,"onTransitionStart"),pa(Zp,"onTransitionCancel"),pa(Su,"onTransitionEnd"),kt("onMouseEnter",["mouseout","mouseover"]),kt("onMouseLeave",["mouseout","mouseover"]),kt("onPointerEnter",["pointerout","pointerover"]),kt("onPointerLeave",["pointerout","pointerover"]),ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Df=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ls));function Bd(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],i=o.event;o=o.listeners;e:{var r=void 0;if(a)for(var l=o.length-1;0<=l;l--){var u=o[l],d=u.instance,x=u.currentTarget;if(u=u.listener,d!==r&&i.isPropagationStopped())break e;r=u,i.currentTarget=x;try{r(i)}catch(j){pi(j)}i.currentTarget=null,r=d}else for(l=0;l<o.length;l++){if(u=o[l],d=u.instance,x=u.currentTarget,u=u.listener,d!==r&&i.isPropagationStopped())break e;r=u,i.currentTarget=x;try{r(i)}catch(j){pi(j)}i.currentTarget=null,r=d}}}}function _(e,a){var t=a[ar];t===void 0&&(t=a[ar]=new Set);var o=e+"__bubble";t.has(o)||(_d(a,e,2,!1),t.add(o))}function Pn(e,a,t){var o=0;a&&(o|=4),_d(t,e,o,a)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[Ti]){e[Ti]=!0,Rl.forEach(function(t){t!=="selectionchange"&&(Df.has(t)||Pn(t,!1,e),Pn(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Ti]||(a[Ti]=!0,Pn("selectionchange",!1,a))}}function _d(e,a,t,o){switch(mm(a)){case 2:var i=sh;break;case 8:i=ih;break;default:i=il}t=i.bind(null,a,t,e),i=void 0,!mr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(a,t,{capture:!0,passive:i}):e.addEventListener(a,t,!0):i!==void 0?e.addEventListener(a,t,{passive:i}):e.addEventListener(a,t,!1)}function Xn(e,a,t,o,i){var r=o;if((a&1)===0&&(a&2)===0&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var u=o.stateNode.containerInfo;if(u===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&l.stateNode.containerInfo===i)return;l=l.return}for(;u!==null;){if(l=Vt(u),l===null)return;if(d=l.tag,d===5||d===6||d===26||d===27){o=r=l;continue e}u=u.parentNode}}o=o.return}Kl(function(){var x=r,j=cr(t),A=[];e:{var b=qu.get(e);if(b!==void 0){var y=Bs,N=e;switch(e){case"keypress":if(ks(t)===0)break e;case"keydown":case"keyup":y=Ap;break;case"focusin":N="focus",y=vr;break;case"focusout":N="blur",y=vr;break;case"beforeblur":case"afterblur":y=vr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Tp;break;case bu:case yu:case ju:y=hp;break;case Su:y=zp;break;case"scroll":case"scrollend":y=cp;break;case"wheel":y=Dp;break;case"copy":case"cut":case"paste":y=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=eu;break;case"toggle":case"beforetoggle":y=wp}var C=(a&4)!==0,ee=!C&&(e==="scroll"||e==="scrollend"),h=C?b!==null?b+"Capture":null:b;C=[];for(var f=x,g;f!==null;){var S=f;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||h===null||(S=To(f,h),S!=null&&C.push(us(f,S,g))),ee)break;f=f.return}0<C.length&&(b=new y(b,N,null,t,j),A.push({event:b,listeners:C}))}}if((a&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",b&&t!==ur&&(N=t.relatedTarget||t.fromElement)&&(Vt(N)||N[Rt]))break e;if((y||b)&&(b=j.window===j?j:(b=j.ownerDocument)?b.defaultView||b.parentWindow:window,y?(N=t.relatedTarget||t.toElement,y=x,N=N?Vt(N):null,N!==null&&(ee=O(N),C=N.tag,N!==ee||C!==5&&C!==27&&C!==6)&&(N=null)):(y=null,N=x),y!==N)){if(C=Wl,S="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(C=eu,S="onPointerLeave",h="onPointerEnter",f="pointer"),ee=y==null?b:Oo(y),g=N==null?b:Oo(N),b=new C(S,f+"leave",y,t,j),b.target=ee,b.relatedTarget=g,S=null,Vt(j)===x&&(C=new C(h,f+"enter",N,t,j),C.target=g,C.relatedTarget=ee,S=C),ee=S,y&&N)a:{for(C=y,h=N,f=0,g=C;g;g=go(g))f++;for(g=0,S=h;S;S=go(S))g++;for(;0<f-g;)C=go(C),f--;for(;0<g-f;)h=go(h),g--;for(;f--;){if(C===h||h!==null&&C===h.alternate)break a;C=go(C),h=go(h)}C=null}else C=null;y!==null&&Qd(A,b,y,C,!1),N!==null&&ee!==null&&Qd(A,ee,N,C,!0)}}e:{if(b=x?Oo(x):window,y=b.nodeName&&b.nodeName.toLowerCase(),y==="select"||y==="input"&&b.type==="file")var z=lu;else if(ru(b))if(uu)z=Qp;else{z=Bp;var k=Gp}else y=b.nodeName,!y||y.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?x&&lr(x.elementType)&&(z=lu):z=_p;if(z&&(z=z(e,x))){nu(A,z,t,j);break e}k&&k(e,b,x),e==="focusout"&&x&&b.type==="number"&&x.memoizedProps.value!=null&&nr(b,"number",b.value)}switch(k=x?Oo(x):window,e){case"focusin":(ru(k)||k.contentEditable==="true")&&(Xt=k,Sr=x,Ro=null);break;case"focusout":Ro=Sr=Xt=null;break;case"mousedown":qr=!0;break;case"contextmenu":case"mouseup":case"dragend":qr=!1,gu(A,t,j);break;case"selectionchange":if(Yp)break;case"keydown":case"keyup":gu(A,t,j)}var U;if(xr)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Yt?su(e,t)&&(w="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(w="onCompositionStart");w&&(au&&t.locale!=="ko"&&(Yt||w!=="onCompositionStart"?w==="onCompositionEnd"&&Yt&&(U=Il()):(Ya=j,pr="value"in Ya?Ya.value:Ya.textContent,Yt=!0)),k=Mi(x,w),0<k.length&&(w=new $l(w,e,null,t,j),A.push({event:w,listeners:k}),U?w.data=U:(U=iu(t),U!==null&&(w.data=U)))),(U=Rp?Vp(e,t):Hp(e,t))&&(w=Mi(x,"onBeforeInput"),0<w.length&&(k=new $l("onBeforeInput","beforeinput",null,t,j),A.push({event:k,listeners:w}),k.data=U)),Mf(A,e,x,t,j)}Bd(A,a)})}function us(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Mi(e,a){for(var t=a+"Capture",o=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=To(e,t),i!=null&&o.unshift(us(e,i,r)),i=To(e,a),i!=null&&o.push(us(e,i,r))),e.tag===3)return o;e=e.return}return[]}function go(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qd(e,a,t,o,i){for(var r=a._reactName,l=[];t!==null&&t!==o;){var u=t,d=u.alternate,x=u.stateNode;if(u=u.tag,d!==null&&d===o)break;u!==5&&u!==26&&u!==27||x===null||(d=x,i?(x=To(t,r),x!=null&&l.unshift(us(t,x,d))):i||(x=To(t,r),x!=null&&l.push(us(t,x,d)))),t=t.return}l.length!==0&&e.push({event:a,listeners:l})}var Cf=/\r\n?/g,wf=/\u0000|\uFFFD/g;function Pd(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace(wf,"")}function Yd(e,a){return a=Pd(a),Pd(e)===a}function zi(){}function $(e,a,t,o,i,r){switch(t){case"children":typeof o=="string"?a==="body"||a==="textarea"&&o===""||_t(e,o):(typeof o=="number"||typeof o=="bigint")&&a!=="body"&&_t(e,""+o);break;case"className":Ns(e,"class",o);break;case"tabIndex":Ns(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ns(e,t,o);break;case"style":Fl(e,o,r);break;case"data":if(a!=="object"){Ns(e,"data",o);break}case"src":case"href":if(o===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(t);break}o=Hs(""+o),e.setAttribute(t,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(a!=="input"&&$(e,a,"name",i.name,i,null),$(e,a,"formEncType",i.formEncType,i,null),$(e,a,"formMethod",i.formMethod,i,null),$(e,a,"formTarget",i.formTarget,i,null)):($(e,a,"encType",i.encType,i,null),$(e,a,"method",i.method,i,null),$(e,a,"target",i.target,i,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(t);break}o=Hs(""+o),e.setAttribute(t,o);break;case"onClick":o!=null&&(e.onclick=zi);break;case"onScroll":o!=null&&_("scroll",e);break;case"onScrollEnd":o!=null&&_("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(m(61));if(t=o.__html,t!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=t}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}t=Hs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(t,""+o):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":o===!0?e.setAttribute(t,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(t,o):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(t,o):e.removeAttribute(t);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(t):e.setAttribute(t,o);break;case"popover":_("beforetoggle",e),_("toggle",e),ws(e,"popover",o);break;case"xlinkActuate":Ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ta(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ta(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ta(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ta(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ws(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=lp.get(t)||t,ws(e,t,o))}}function Fn(e,a,t,o,i,r){switch(t){case"style":Fl(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(m(61));if(t=o.__html,t!=null){if(i.children!=null)throw Error(m(60));e.innerHTML=t}}break;case"children":typeof o=="string"?_t(e,o):(typeof o=="number"||typeof o=="bigint")&&_t(e,""+o);break;case"onScroll":o!=null&&_("scroll",e);break;case"onScrollEnd":o!=null&&_("scrollend",e);break;case"onClick":o!=null&&(e.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vl.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),a=t.slice(2,i?t.length-7:void 0),r=e[Le]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(a,r,i),typeof o=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,o,i);break e}t in e?e[t]=o:o===!0?e.setAttribute(t,""):ws(e,t,o)}}}function Ue(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_("error",e),_("load",e);var o=!1,i=!1,r;for(r in t)if(t.hasOwnProperty(r)){var l=t[r];if(l!=null)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:$(e,a,r,l,t,null)}}i&&$(e,a,"srcSet",t.srcSet,t,null),o&&$(e,a,"src",t.src,t,null);return;case"input":_("invalid",e);var u=r=l=i=null,d=null,x=null;for(o in t)if(t.hasOwnProperty(o)){var j=t[o];if(j!=null)switch(o){case"name":i=j;break;case"type":l=j;break;case"checked":d=j;break;case"defaultChecked":x=j;break;case"value":r=j;break;case"defaultValue":u=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(m(137,a));break;default:$(e,a,o,j,t,null)}}Ql(e,r,u,d,x,l,i,!1),Rs(e);return;case"select":_("invalid",e),o=l=r=null;for(i in t)if(t.hasOwnProperty(i)&&(u=t[i],u!=null))switch(i){case"value":r=u;break;case"defaultValue":l=u;break;case"multiple":o=u;default:$(e,a,i,u,t,null)}a=r,t=l,e.multiple=!!o,a!=null?Bt(e,!!o,a,!1):t!=null&&Bt(e,!!o,t,!0);return;case"textarea":_("invalid",e),r=i=o=null;for(l in t)if(t.hasOwnProperty(l)&&(u=t[l],u!=null))switch(l){case"value":o=u;break;case"defaultValue":i=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(m(91));break;default:$(e,a,l,u,t,null)}Yl(e,o,i,r),Rs(e);return;case"option":for(d in t)t.hasOwnProperty(d)&&(o=t[d],o!=null)&&(d==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":$(e,a,d,o,t,null));return;case"dialog":_("beforetoggle",e),_("toggle",e),_("cancel",e),_("close",e);break;case"iframe":case"object":_("load",e);break;case"video":case"audio":for(o=0;o<ls.length;o++)_(ls[o],e);break;case"image":_("error",e),_("load",e);break;case"details":_("toggle",e);break;case"embed":case"source":case"link":_("error",e),_("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in t)if(t.hasOwnProperty(x)&&(o=t[x],o!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:$(e,a,x,o,t,null)}return;default:if(lr(a)){for(j in t)t.hasOwnProperty(j)&&(o=t[j],o!==void 0&&Fn(e,a,j,o,t,void 0));return}}for(u in t)t.hasOwnProperty(u)&&(o=t[u],o!=null&&$(e,a,u,o,t,null))}function Nf(e,a,t,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,l=null,u=null,d=null,x=null,j=null;for(y in t){var A=t[y];if(t.hasOwnProperty(y)&&A!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":d=A;default:o.hasOwnProperty(y)||$(e,a,y,null,o,A)}}for(var b in o){var y=o[b];if(A=t[b],o.hasOwnProperty(b)&&(y!=null||A!=null))switch(b){case"type":r=y;break;case"name":i=y;break;case"checked":x=y;break;case"defaultChecked":j=y;break;case"value":l=y;break;case"defaultValue":u=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,a));break;default:y!==A&&$(e,a,b,y,o,A)}}rr(e,l,u,d,x,j,r,i);return;case"select":y=l=u=b=null;for(r in t)if(d=t[r],t.hasOwnProperty(r)&&d!=null)switch(r){case"value":break;case"multiple":y=d;default:o.hasOwnProperty(r)||$(e,a,r,null,o,d)}for(i in o)if(r=o[i],d=t[i],o.hasOwnProperty(i)&&(r!=null||d!=null))switch(i){case"value":b=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:r!==d&&$(e,a,i,r,o,d)}a=u,t=l,o=y,b!=null?Bt(e,!!t,b,!1):!!o!=!!t&&(a!=null?Bt(e,!!t,a,!0):Bt(e,!!t,t?[]:"",!1));return;case"textarea":y=b=null;for(u in t)if(i=t[u],t.hasOwnProperty(u)&&i!=null&&!o.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:$(e,a,u,null,o,i)}for(l in o)if(i=o[l],r=t[l],o.hasOwnProperty(l)&&(i!=null||r!=null))switch(l){case"value":b=i;break;case"defaultValue":y=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==r&&$(e,a,l,i,o,r)}Pl(e,b,y);return;case"option":for(var N in t)b=t[N],t.hasOwnProperty(N)&&b!=null&&!o.hasOwnProperty(N)&&(N==="selected"?e.selected=!1:$(e,a,N,null,o,b));for(d in o)b=o[d],y=t[d],o.hasOwnProperty(d)&&b!==y&&(b!=null||y!=null)&&(d==="selected"?e.selected=b&&typeof b!="function"&&typeof b!="symbol":$(e,a,d,b,o,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in t)b=t[C],t.hasOwnProperty(C)&&b!=null&&!o.hasOwnProperty(C)&&$(e,a,C,null,o,b);for(x in o)if(b=o[x],y=t[x],o.hasOwnProperty(x)&&b!==y&&(b!=null||y!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(m(137,a));break;default:$(e,a,x,b,o,y)}return;default:if(lr(a)){for(var ee in t)b=t[ee],t.hasOwnProperty(ee)&&b!==void 0&&!o.hasOwnProperty(ee)&&Fn(e,a,ee,void 0,o,b);for(j in o)b=o[j],y=t[j],!o.hasOwnProperty(j)||b===y||b===void 0&&y===void 0||Fn(e,a,j,b,o,y);return}}for(var h in t)b=t[h],t.hasOwnProperty(h)&&b!=null&&!o.hasOwnProperty(h)&&$(e,a,h,null,o,b);for(A in o)b=o[A],y=t[A],!o.hasOwnProperty(A)||b===y||b==null&&y==null||$(e,a,A,b,o,y)}var Zn=null,Kn=null;function Ui(e){return e.nodeType===9?e:e.ownerDocument}function Xd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fd(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function In(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Jn=null;function Rf(){var e=window.event;return e&&e.type==="popstate"?e===Jn?!1:(Jn=e,!0):(Jn=null,!1)}var Zd=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(e){return Kd.resolve(null).then(e).catch(Lf)}:Zd;function Lf(e){setTimeout(function(){throw e})}function nt(e){return e==="head"}function Id(e,a){var t=a,o=0,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(0<o&&8>o){t=o;var l=e.ownerDocument;if(t&1&&cs(l.documentElement),t&2&&cs(l.body),t&4)for(t=l.head,cs(t),l=t.firstChild;l;){var u=l.nextSibling,d=l.nodeName;l[Eo]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=u}}if(i===0){e.removeChild(r),xs(a);return}i--}else t==="$"||t==="$?"||t==="$!"?i++:o=t.charCodeAt(0)-48;else o=0;t=r}while(t);xs(a)}function Wn(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Wn(t),tr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function kf(e,a,t,o){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Eo])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ha(e.nextSibling),e===null)break}return null}function Gf(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ha(e.nextSibling),e===null))return null;return e}function $n(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Bf(e,a){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")a();else{var o=function(){a(),t.removeEventListener("DOMContentLoaded",o)};t.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ha(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var el=null;function Jd(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(a===0)return e;a--}else t==="/$"&&a++}e=e.previousSibling}return null}function Wd(e,a,t){switch(a=Ui(t),e){case"html":if(e=a.documentElement,!e)throw Error(m(452));return e;case"head":if(e=a.head,!e)throw Error(m(453));return e;case"body":if(e=a.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function cs(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);tr(e)}var da=new Map,$d=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ba=M.d;M.d={f:_f,r:Qf,D:Pf,C:Yf,L:Xf,m:Ff,X:Kf,S:Zf,M:If};function _f(){var e=Ba.f(),a=Si();return e||a}function Qf(e){var a=Ht(e);a!==null&&a.tag===5&&a.type==="form"?bc(a):Ba.r(e)}var xo=typeof document>"u"?null:document;function em(e,a,t){var o=xo;if(o&&typeof a=="string"&&a){var i=sa(a);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),$d.has(i)||($d.add(i),e={rel:e,crossOrigin:t,href:a},o.querySelector(i)===null&&(a=o.createElement("link"),Ue(a,"link",e),Ae(a),o.head.appendChild(a)))}}function Pf(e){Ba.D(e),em("dns-prefetch",e,null)}function Yf(e,a){Ba.C(e,a),em("preconnect",e,a)}function Xf(e,a,t){Ba.L(e,a,t);var o=xo;if(o&&e&&a){var i='link[rel="preload"][as="'+sa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+sa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+sa(t.imageSizes)+'"]')):i+='[href="'+sa(e)+'"]';var r=i;switch(a){case"style":r=bo(e);break;case"script":r=yo(e)}da.has(r)||(e=H({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),da.set(r,e),o.querySelector(i)!==null||a==="style"&&o.querySelector(ds(r))||a==="script"&&o.querySelector(ms(r))||(a=o.createElement("link"),Ue(a,"link",e),Ae(a),o.head.appendChild(a)))}}function Ff(e,a){Ba.m(e,a);var t=xo;if(t&&e){var o=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+sa(o)+'"][href="'+sa(e)+'"]',r=i;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=yo(e)}if(!da.has(r)&&(e=H({rel:"modulepreload",href:e},a),da.set(r,e),t.querySelector(i)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ms(r)))return}o=t.createElement("link"),Ue(o,"link",e),Ae(o),t.head.appendChild(o)}}}function Zf(e,a,t){Ba.S(e,a,t);var o=xo;if(o&&e){var i=Lt(o).hoistableStyles,r=bo(e);a=a||"default";var l=i.get(r);if(!l){var u={loading:0,preload:null};if(l=o.querySelector(ds(r)))u.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":a},t),(t=da.get(r))&&al(e,t);var d=l=o.createElement("link");Ae(d),Ue(d,"link",e),d._p=new Promise(function(x,j){d.onload=x,d.onerror=j}),d.addEventListener("load",function(){u.loading|=1}),d.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ci(l,a,o)}l={type:"stylesheet",instance:l,count:1,state:u},i.set(r,l)}}}function Kf(e,a){Ba.X(e,a);var t=xo;if(t&&e){var o=Lt(t).hoistableScripts,i=yo(e),r=o.get(i);r||(r=t.querySelector(ms(i)),r||(e=H({src:e,async:!0},a),(a=da.get(i))&&tl(e,a),r=t.createElement("script"),Ae(r),Ue(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(i,r))}}function If(e,a){Ba.M(e,a);var t=xo;if(t&&e){var o=Lt(t).hoistableScripts,i=yo(e),r=o.get(i);r||(r=t.querySelector(ms(i)),r||(e=H({src:e,async:!0,type:"module"},a),(a=da.get(i))&&tl(e,a),r=t.createElement("script"),Ae(r),Ue(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(i,r))}}function am(e,a,t,o){var i=(i=_a.current)?Di(i):null;if(!i)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=bo(t.href),t=Lt(i).hoistableStyles,o=t.get(a),o||(o={type:"style",instance:null,count:0,state:null},t.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=bo(t.href);var r=Lt(i).hoistableStyles,l=r.get(e);if(l||(i=i.ownerDocument||i,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=i.querySelector(ds(e)))&&!r._p&&(l.instance=r,l.state.loading=5),da.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},da.set(e,t),r||Jf(i,e,t,l.state))),a&&o===null)throw Error(m(528,""));return l}if(a&&o!==null)throw Error(m(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=yo(t),t=Lt(i).hoistableScripts,o=t.get(a),o||(o={type:"script",instance:null,count:0,state:null},t.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function bo(e){return'href="'+sa(e)+'"'}function ds(e){return'link[rel="stylesheet"]['+e+"]"}function tm(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function Jf(e,a,t,o){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?o.loading=1:(a=e.createElement("link"),o.preload=a,a.addEventListener("load",function(){return o.loading|=1}),a.addEventListener("error",function(){return o.loading|=2}),Ue(a,"link",t),Ae(a),e.head.appendChild(a))}function yo(e){return'[src="'+sa(e)+'"]'}function ms(e){return"script[async]"+e}function om(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var o=e.querySelector('style[data-href~="'+sa(t.href)+'"]');if(o)return a.instance=o,Ae(o),o;var i=H({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ae(o),Ue(o,"style",i),Ci(o,t.precedence,e),a.instance=o;case"stylesheet":i=bo(t.href);var r=e.querySelector(ds(i));if(r)return a.state.loading|=4,a.instance=r,Ae(r),r;o=tm(t),(i=da.get(i))&&al(o,i),r=(e.ownerDocument||e).createElement("link"),Ae(r);var l=r;return l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),Ue(r,"link",o),a.state.loading|=4,Ci(r,t.precedence,e),a.instance=r;case"script":return r=yo(t.src),(i=e.querySelector(ms(r)))?(a.instance=i,Ae(i),i):(o=t,(i=da.get(r))&&(o=H({},t),tl(o,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ae(i),Ue(i,"link",o),e.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(m(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(o=a.instance,a.state.loading|=4,Ci(o,t.precedence,e));return a.instance}function Ci(e,a,t){for(var o=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=o.length?o[o.length-1]:null,r=i,l=0;l<o.length;l++){var u=o[l];if(u.dataset.precedence===a)r=u;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function al(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function tl(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var wi=null;function sm(e,a,t){if(wi===null){var o=new Map,i=wi=new Map;i.set(t,o)}else i=wi,o=i.get(t),o||(o=new Map,i.set(t,o));if(o.has(e))return o;for(o.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var r=t[i];if(!(r[Eo]||r[De]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(a)||"";l=e+l;var u=o.get(l);u?u.push(r):o.set(l,[r])}}return o}function im(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Wf(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ps=null;function $f(){}function eh(e,a,t){if(ps===null)throw Error(m(475));var o=ps;if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=bo(t.href),r=e.querySelector(ds(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Ni.bind(o),e.then(o,o)),a.state.loading|=4,a.instance=r,Ae(r);return}r=e.ownerDocument||e,t=tm(t),(i=da.get(i))&&al(t,i),r=r.createElement("link"),Ae(r);var l=r;l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),Ue(r,"link",t),a.instance=r}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(o.count++,a=Ni.bind(o),e.addEventListener("load",a),e.addEventListener("error",a))}}function ah(){if(ps===null)throw Error(m(475));var e=ps;return e.stylesheets&&e.count===0&&ol(e,e.stylesheets),0<e.count?function(a){var t=setTimeout(function(){if(e.stylesheets&&ol(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(t)}}:null}function Ni(){if(this.count--,this.count===0){if(this.stylesheets)ol(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function ol(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,a.forEach(th,e),Ri=null,Ni.call(e))}function th(e,a){if(!(a.state.loading&4)){var t=Ri.get(e);if(t)var o=t.get(null);else{t=new Map,Ri.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var l=i[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(t.set(l.dataset.precedence,l),o=l)}o&&t.set(null,o)}i=a.instance,l=i.getAttribute("data-precedence"),r=t.get(l)||o,r===o&&t.set(null,i),t.set(l,i),this.count++,o=Ni.bind(this),i.addEventListener("load",o),i.addEventListener("error",o),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),a.state.loading|=4}}var fs={$$typeof:Se,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function oh(e,a,t,o,i,r,l,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=o,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function nm(e,a,t,o,i,r,l,u,d,x,j,A){return e=new oh(e,a,t,l,u,d,x,A),a=1,r===!0&&(a|=24),r=Ke(3,null,null,a),e.current=r,r.stateNode=e,a=Hr(),a.refCount++,e.pooledCache=a,a.refCount++,r.memoizedState={element:o,isDehydrated:t,cache:a},Br(r),e}function lm(e){return e?(e=It,e):It}function um(e,a,t,o,i,r){i=lm(i),o.context===null?o.context=i:o.pendingContext=i,o=Za(a),o.payload={element:t},r=r===void 0?null:r,r!==null&&(o.callback=r),t=Ka(e,o,a),t!==null&&(ea(t,e,a),Po(t,e,a))}function cm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function sl(e,a){cm(e,a),(e=e.alternate)&&cm(e,a)}function dm(e){if(e.tag===13){var a=Kt(e,67108864);a!==null&&ea(a,e,67108864),sl(e,67108864)}}var Vi=!0;function sh(e,a,t,o){var i=q.T;q.T=null;var r=M.p;try{M.p=2,il(e,a,t,o)}finally{M.p=r,q.T=i}}function ih(e,a,t,o){var i=q.T;q.T=null;var r=M.p;try{M.p=8,il(e,a,t,o)}finally{M.p=r,q.T=i}}function il(e,a,t,o){if(Vi){var i=rl(o);if(i===null)Xn(e,a,o,Hi,t),pm(e,o);else if(nh(i,e,a,t,o))o.stopPropagation();else if(pm(e,o),a&4&&-1<rh.indexOf(e)){for(;i!==null;){var r=Ht(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=pt(r.pendingLanes);if(l!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;l;){var d=1<<31-Fe(l);u.entanglements[1]|=d,l&=~d}Aa(r),(K&6)===0&&(yi=ba()+500,ns(0))}}break;case 13:u=Kt(r,2),u!==null&&ea(u,r,2),Si(),sl(r,2)}if(r=rl(o),r===null&&Xn(e,a,o,Hi,t),r===i)break;i=r}i!==null&&o.stopPropagation()}else Xn(e,a,o,null,t)}}function rl(e){return e=cr(e),nl(e)}var Hi=null;function nl(e){if(Hi=null,e=Vt(e),e!==null){var a=O(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=D(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Hi=e,null}function mm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pm()){case Ol:return 2;case Tl:return 8;case zs:case Ym:return 32;case Ml:return 268435456;default:return 32}default:return 32}}var ll=!1,lt=null,ut=null,ct=null,hs=new Map,vs=new Map,dt=[],rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pm(e,a){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":hs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(a.pointerId)}}function gs(e,a,t,o,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:a,domEventName:t,eventSystemFlags:o,nativeEvent:r,targetContainers:[i]},a!==null&&(a=Ht(a),a!==null&&dm(a)),e):(e.eventSystemFlags|=o,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function nh(e,a,t,o,i){switch(a){case"focusin":return lt=gs(lt,e,a,t,o,i),!0;case"dragenter":return ut=gs(ut,e,a,t,o,i),!0;case"mouseover":return ct=gs(ct,e,a,t,o,i),!0;case"pointerover":var r=i.pointerId;return hs.set(r,gs(hs.get(r)||null,e,a,t,o,i)),!0;case"gotpointercapture":return r=i.pointerId,vs.set(r,gs(vs.get(r)||null,e,a,t,o,i)),!0}return!1}function fm(e){var a=Vt(e.target);if(a!==null){var t=O(a);if(t!==null){if(a=t.tag,a===13){if(a=D(t),a!==null){e.blockedOn=a,$m(e.priority,function(){if(t.tag===13){var o=$e();o=$i(o);var i=Kt(t,o);i!==null&&ea(i,t,o),sl(t,o)}});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=rl(e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);ur=o,t.target.dispatchEvent(o),ur=null}else return a=Ht(t),a!==null&&dm(a),e.blockedOn=t,!1;a.shift()}return!0}function hm(e,a,t){Li(e)&&t.delete(a)}function lh(){ll=!1,lt!==null&&Li(lt)&&(lt=null),ut!==null&&Li(ut)&&(ut=null),ct!==null&&Li(ct)&&(ct=null),hs.forEach(hm),vs.forEach(hm)}function ki(e,a){e.blockedOn===a&&(e.blockedOn=null,ll||(ll=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,lh)))}var Gi=null;function vm(e){Gi!==e&&(Gi=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Gi===e&&(Gi=null);for(var a=0;a<e.length;a+=3){var t=e[a],o=e[a+1],i=e[a+2];if(typeof o!="function"){if(nl(o||t)===null)continue;break}var r=Ht(t);r!==null&&(e.splice(a,3),a-=3,nn(r,{pending:!0,data:i,method:t.method,action:o},o,i))}}))}function xs(e){function a(d){return ki(d,e)}lt!==null&&ki(lt,e),ut!==null&&ki(ut,e),ct!==null&&ki(ct,e),hs.forEach(a),vs.forEach(a);for(var t=0;t<dt.length;t++){var o=dt[t];o.blockedOn===e&&(o.blockedOn=null)}for(;0<dt.length&&(t=dt[0],t.blockedOn===null);)fm(t),t.blockedOn===null&&dt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(o=0;o<t.length;o+=3){var i=t[o],r=t[o+1],l=i[Le]||null;if(typeof r=="function")l||vm(t);else if(l){var u=null;if(r&&r.hasAttribute("formAction")){if(i=r,l=r[Le]||null)u=l.formAction;else if(nl(i)!==null)continue}else u=l.action;typeof u=="function"?t[o+1]=u:(t.splice(o,3),o-=3),vm(t)}}}function ul(e){this._internalRoot=e}Bi.prototype.render=ul.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(m(409));var t=a.current,o=$e();um(t,o,e,a,null,null)},Bi.prototype.unmount=ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;um(e.current,2,null,e,null,null),Si(),a[Rt]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var a=wl();e={blockedOn:null,target:e,priority:a};for(var t=0;t<dt.length&&a!==0&&a<dt[t].priority;t++);dt.splice(t,0,e),t===0&&fm(e)}};var gm=c.version;if(gm!=="19.1.0")throw Error(m(527,gm,"19.1.0"));M.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=V(a),e=e!==null?oe(e):null,e=e===null?null:e.stateNode,e};var uh={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{So=_i.inject(uh),Xe=_i}catch{}}return bs.createRoot=function(e,a){if(!E(e))throw Error(m(299));var t=!1,o="",i=wc,r=Nc,l=Rc,u=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(u=a.unstable_transitionCallbacks)),a=nm(e,1,!1,null,null,t,o,i,r,l,u,null),e[Rt]=a.current,Yn(e),new ul(a)},bs.hydrateRoot=function(e,a,t){if(!E(e))throw Error(m(299));var o=!1,i="",r=wc,l=Nc,u=Rc,d=null,x=null;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(d=t.unstable_transitionCallbacks),t.formState!==void 0&&(x=t.formState)),a=nm(e,1,!0,a,t??null,o,i,r,l,u,d,x),a.context=lm(null),t=a.current,o=$e(),o=$i(o),i=Za(o),i.callback=null,Ka(t,i,o),t=o,a.current.lanes=t,Ao(a,t),Aa(a),e[Rt]=a.current,Yn(e),new Bi(a)},bs.version="19.1.0",bs}var Sm;function Lh(){if(Sm)return cl.exports;Sm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),cl.exports=Hh(),cl.exports}var kh=Lh();const ys={v:[]},qm=()=>ys.v.forEach(n=>n()),Gh=n=>(ys.v.push(n)===1&&addEventListener("hashchange",qm),()=>{ys.v=ys.v.filter(c=>c!==n),ys.v.length||removeEventListener("hashchange",qm)}),Bh=()=>"/"+location.hash.replace(/^#?\/?/,""),_h=(n,{state:c=null,replace:p=!1}={})=>{const m=location.href,[E,O]=n.replace(/^#?\/?/,"").split("?"),D=new URL(location.href);D.hash=`/${E}`,O&&(D.search=O);const T=D.href;p?history.replaceState(c,"",T):history.pushState(c,"",T);const V=typeof HashChangeEvent<"u"?new HashChangeEvent("hashchange",{oldURL:m,newURL:T}):new Event("hashchange",{detail:{oldURL:m,newURL:T}});dispatchEvent(V)},ql=({ssrPath:n="/"}={})=>[mh.useSyncExternalStore(Gh,Bh,()=>n),_h];ql.hrefs=n=>"#"+n;var Xi=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Qh={setTimeout:(n,c)=>setTimeout(n,c),clearTimeout:n=>clearTimeout(n),setInterval:(n,c)=>setInterval(n,c),clearInterval:n=>clearInterval(n)},Ph=class{#e=Qh;#t=!1;setTimeoutProvider(n){this.#e=n}setTimeout(n,c){return this.#e.setTimeout(n,c)}clearTimeout(n){this.#e.clearTimeout(n)}setInterval(n,c){return this.#e.setInterval(n,c)}clearInterval(n){this.#e.clearInterval(n)}},bl=new Ph;function Yh(n){setTimeout(n,0)}var Fi=typeof window>"u"||"Deno"in globalThis;function va(){}function Xh(n,c){return typeof n=="function"?n(c):n}function Fh(n){return typeof n=="number"&&n>=0&&n!==1/0}function Zh(n,c){return Math.max(n+(c||0)-Date.now(),0)}function yl(n,c){return typeof n=="function"?n(c):n}function Kh(n,c){return typeof n=="function"?n(c):n}function Am(n,c){const{type:p="all",exact:m,fetchStatus:E,predicate:O,queryKey:D,stale:T}=n;if(D){if(m){if(c.queryHash!==Al(D,c.options))return!1}else if(!qs(c.queryKey,D))return!1}if(p!=="all"){const V=c.isActive();if(p==="active"&&!V||p==="inactive"&&V)return!1}return!(typeof T=="boolean"&&c.isStale()!==T||E&&E!==c.state.fetchStatus||O&&!O(c))}function Em(n,c){const{exact:p,status:m,predicate:E,mutationKey:O}=n;if(O){if(!c.options.mutationKey)return!1;if(p){if(Ss(c.options.mutationKey)!==Ss(O))return!1}else if(!qs(c.options.mutationKey,O))return!1}return!(m&&c.state.status!==m||E&&!E(c))}function Al(n,c){return(c?.queryKeyHashFn||Ss)(n)}function Ss(n){return JSON.stringify(n,(c,p)=>jl(p)?Object.keys(p).sort().reduce((m,E)=>(m[E]=p[E],m),{}):p)}function qs(n,c){return n===c?!0:typeof n!=typeof c?!1:n&&c&&typeof n=="object"&&typeof c=="object"?Object.keys(c).every(p=>qs(n[p],c[p])):!1}var Ih=Object.prototype.hasOwnProperty;function Nm(n,c,p=0){if(n===c)return n;if(p>500)return c;const m=Om(n)&&Om(c);if(!m&&!(jl(n)&&jl(c)))return c;const O=(m?n:Object.keys(n)).length,D=m?c:Object.keys(c),T=D.length,V=m?new Array(T):{};let oe=0;for(let H=0;H<T;H++){const ie=m?H:D[H],Q=n[ie],fe=c[ie];if(Q===fe){V[ie]=Q,(m?H<O:Ih.call(n,ie))&&oe++;continue}if(Q===null||fe===null||typeof Q!="object"||typeof fe!="object"){V[ie]=fe;continue}const X=Nm(Q,fe,p+1);V[ie]=X,X===Q&&oe++}return O===T&&oe===O?n:V}function Om(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function jl(n){if(!Tm(n))return!1;const c=n.constructor;if(c===void 0)return!0;const p=c.prototype;return!(!Tm(p)||!p.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function Tm(n){return Object.prototype.toString.call(n)==="[object Object]"}function Jh(n){return new Promise(c=>{bl.setTimeout(c,n)})}function Wh(n,c,p){return typeof p.structuralSharing=="function"?p.structuralSharing(n,c):p.structuralSharing!==!1?Nm(n,c):c}function $h(n,c,p=0){const m=[...n,c];return p&&m.length>p?m.slice(1):m}function ev(n,c,p=0){const m=[c,...n];return p&&m.length>p?m.slice(0,-1):m}var El=Symbol();function Rm(n,c){return!n.queryFn&&c?.initialPromise?()=>c.initialPromise:!n.queryFn||n.queryFn===El?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}function av(n,c,p){let m=!1,E;return Object.defineProperty(n,"signal",{enumerable:!0,get:()=>(E??=c(),m||(m=!0,E.aborted?p():E.addEventListener("abort",p,{once:!0})),E)}),n}var tv=class extends Xi{#e;#t;#a;constructor(){super(),this.#a=n=>{if(!Fi&&window.addEventListener){const c=()=>n();return window.addEventListener("visibilitychange",c,!1),()=>{window.removeEventListener("visibilitychange",c)}}}}onSubscribe(){this.#t||this.setEventListener(this.#a)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(n){this.#a=n,this.#t?.(),this.#t=n(c=>{typeof c=="boolean"?this.setFocused(c):this.onFocus()})}setFocused(n){this.#e!==n&&(this.#e=n,this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(c=>{c(n)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Vm=new tv;function ov(){let n,c;const p=new Promise((E,O)=>{n=E,c=O});p.status="pending",p.catch(()=>{});function m(E){Object.assign(p,E),delete p.resolve,delete p.reject}return p.resolve=E=>{m({status:"fulfilled",value:E}),n(E)},p.reject=E=>{m({status:"rejected",reason:E}),c(E)},p}var sv=Yh;function iv(){let n=[],c=0,p=T=>{T()},m=T=>{T()},E=sv;const O=T=>{c?n.push(T):E(()=>{p(T)})},D=()=>{const T=n;n=[],T.length&&E(()=>{m(()=>{T.forEach(V=>{p(V)})})})};return{batch:T=>{let V;c++;try{V=T()}finally{c--,c||D()}return V},batchCalls:T=>(...V)=>{O(()=>{T(...V)})},schedule:O,setNotifyFunction:T=>{p=T},setBatchNotifyFunction:T=>{m=T},setScheduler:T=>{E=T}}}var Ve=iv(),rv=class extends Xi{#e=!0;#t;#a;constructor(){super(),this.#a=n=>{if(!Fi&&window.addEventListener){const c=()=>n(!0),p=()=>n(!1);return window.addEventListener("online",c,!1),window.addEventListener("offline",p,!1),()=>{window.removeEventListener("online",c),window.removeEventListener("offline",p)}}}}onSubscribe(){this.#t||this.setEventListener(this.#a)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(n){this.#a=n,this.#t?.(),this.#t=n(this.setOnline.bind(this))}setOnline(n){this.#e!==n&&(this.#e=n,this.listeners.forEach(p=>{p(n)}))}isOnline(){return this.#e}},Yi=new rv;function nv(n){return Math.min(1e3*2**n,3e4)}function Hm(n){return(n??"online")==="online"?Yi.isOnline():!0}var Sl=class extends Error{constructor(n){super("CancelledError"),this.revert=n?.revert,this.silent=n?.silent}};function Lm(n){let c=!1,p=0,m;const E=ov(),O=()=>E.status!=="pending",D=Z=>{if(!O()){const ge=new Sl(Z);Q(ge),n.onCancel?.(ge)}},T=()=>{c=!0},V=()=>{c=!1},oe=()=>Vm.isFocused()&&(n.networkMode==="always"||Yi.isOnline())&&n.canRun(),H=()=>Hm(n.networkMode)&&n.canRun(),ie=Z=>{O()||(m?.(),E.resolve(Z))},Q=Z=>{O()||(m?.(),E.reject(Z))},fe=()=>new Promise(Z=>{m=ge=>{(O()||oe())&&Z(ge)},n.onPause?.()}).then(()=>{m=void 0,O()||n.onContinue?.()}),X=()=>{if(O())return;let Z;const ge=p===0?n.initialPromise:void 0;try{Z=ge??n.fn()}catch(we){Z=Promise.reject(we)}Promise.resolve(Z).then(ie).catch(we=>{if(O())return;const Qe=n.retry??(Fi?0:3),Se=n.retryDelay??nv,Pe=typeof Se=="function"?Se(p,we):Se,aa=Qe===!0||typeof Qe=="number"&&p<Qe||typeof Qe=="function"&&Qe(p,we);if(c||!aa){Q(we);return}p++,n.onFail?.(p,we),Jh(Pe).then(()=>oe()?void 0:fe()).then(()=>{c?Q(we):X()})})};return{promise:E,status:()=>E.status,cancel:D,continue:()=>(m?.(),E),cancelRetry:T,continueRetry:V,canStart:H,start:()=>(H()?X():fe().then(X),E)}}var km=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Fh(this.gcTime)&&(this.#e=bl.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Fi?1/0:300*1e3))}clearGcTimeout(){this.#e&&(bl.clearTimeout(this.#e),this.#e=void 0)}},lv=class extends km{#e;#t;#a;#s;#o;#r;#n;constructor(n){super(),this.#n=!1,this.#r=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.#s=n.client,this.#a=this.#s.getQueryCache(),this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.#e=zm(this.options),this.state=n.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#o?.promise}setOptions(n){if(this.options={...this.#r,...n},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const c=zm(this.options);c.data!==void 0&&(this.setState(Mm(c.data,c.dataUpdatedAt)),this.#e=c)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#a.remove(this)}setData(n,c){const p=Wh(this.state.data,n,this.options);return this.#i({data:p,type:"success",dataUpdatedAt:c?.updatedAt,manual:c?.manual}),p}setState(n,c){this.#i({type:"setState",state:n,setStateOptions:c})}cancel(n){const c=this.#o?.promise;return this.#o?.cancel(n),c?c.then(va).catch(va):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(n=>Kh(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===El||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>yl(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!Zh(this.state.dataUpdatedAt,n)}onFocus(){this.observers.find(c=>c.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#o?.continue()}onOnline(){this.observers.find(c=>c.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#o?.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(c=>c!==n),this.observers.length||(this.#o&&(this.#n?this.#o.cancel({revert:!0}):this.#o.cancelRetry()),this.scheduleGc()),this.#a.notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#i({type:"invalidate"})}async fetch(n,c){if(this.state.fetchStatus!=="idle"&&this.#o?.status()!=="rejected"){if(this.state.data!==void 0&&c?.cancelRefetch)this.cancel({silent:!0});else if(this.#o)return this.#o.continueRetry(),this.#o.promise}if(n&&this.setOptions(n),!this.options.queryFn){const T=this.observers.find(V=>V.options.queryFn);T&&this.setOptions(T.options)}const p=new AbortController,m=T=>{Object.defineProperty(T,"signal",{enumerable:!0,get:()=>(this.#n=!0,p.signal)})},E=()=>{const T=Rm(this.options,c),oe=(()=>{const H={client:this.#s,queryKey:this.queryKey,meta:this.meta};return m(H),H})();return this.#n=!1,this.options.persister?this.options.persister(T,oe,this):T(oe)},D=(()=>{const T={fetchOptions:c,options:this.options,queryKey:this.queryKey,client:this.#s,state:this.state,fetchFn:E};return m(T),T})();this.options.behavior?.onFetch(D,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==D.fetchOptions?.meta)&&this.#i({type:"fetch",meta:D.fetchOptions?.meta}),this.#o=Lm({initialPromise:c?.initialPromise,fn:D.fetchFn,onCancel:T=>{T instanceof Sl&&T.revert&&this.setState({...this.#t,fetchStatus:"idle"}),p.abort()},onFail:(T,V)=>{this.#i({type:"failed",failureCount:T,error:V})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:D.options.retry,retryDelay:D.options.retryDelay,networkMode:D.options.networkMode,canRun:()=>!0});try{const T=await this.#o.start();if(T===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(T),this.#a.config.onSuccess?.(T,this),this.#a.config.onSettled?.(T,this.state.error,this),T}catch(T){if(T instanceof Sl){if(T.silent)return this.#o.promise;if(T.revert){if(this.state.data===void 0)throw T;return this.state.data}}throw this.#i({type:"error",error:T}),this.#a.config.onError?.(T,this),this.#a.config.onSettled?.(this.state.data,T,this),T}finally{this.scheduleGc()}}#i(n){const c=p=>{switch(n.type){case"failed":return{...p,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...p,fetchStatus:"paused"};case"continue":return{...p,fetchStatus:"fetching"};case"fetch":return{...p,...uv(p.data,this.options),fetchMeta:n.meta??null};case"success":const m={...p,...Mm(n.data,n.dataUpdatedAt),dataUpdateCount:p.dataUpdateCount+1,...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#t=n.manual?m:void 0,m;case"error":const E=n.error;return{...p,error:E,errorUpdateCount:p.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:p.fetchFailureCount+1,fetchFailureReason:E,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...p,isInvalidated:!0};case"setState":return{...p,...n.state}}};this.state=c(this.state),Ve.batch(()=>{this.observers.forEach(p=>{p.onQueryUpdate()}),this.#a.notify({query:this,type:"updated",action:n})})}};function uv(n,c){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Hm(c.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function Mm(n,c){return{data:n,dataUpdatedAt:c??Date.now(),error:null,isInvalidated:!1,status:"success"}}function zm(n){const c=typeof n.initialData=="function"?n.initialData():n.initialData,p=c!==void 0,m=p?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:c,dataUpdateCount:0,dataUpdatedAt:p?m??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:p?"success":"pending",fetchStatus:"idle"}}function Um(n){return{onFetch:(c,p)=>{const m=c.options,E=c.fetchOptions?.meta?.fetchMore?.direction,O=c.state.data?.pages||[],D=c.state.data?.pageParams||[];let T={pages:[],pageParams:[]},V=0;const oe=async()=>{let H=!1;const ie=X=>{av(X,()=>c.signal,()=>H=!0)},Q=Rm(c.options,c.fetchOptions),fe=async(X,Z,ge)=>{if(H)return Promise.reject();if(Z==null&&X.pages.length)return Promise.resolve(X);const Qe=(()=>{const Ye={client:c.client,queryKey:c.queryKey,pageParam:Z,direction:ge?"backward":"forward",meta:c.options.meta};return ie(Ye),Ye})(),Se=await Q(Qe),{maxPages:Pe}=c.options,aa=ge?ev:$h;return{pages:aa(X.pages,Se,Pe),pageParams:aa(X.pageParams,Z,Pe)}};if(E&&O.length){const X=E==="backward",Z=X?cv:Dm,ge={pages:O,pageParams:D},we=Z(m,ge);T=await fe(ge,we,X)}else{const X=n??O.length;do{const Z=V===0?D[0]??m.initialPageParam:Dm(m,T);if(V>0&&Z==null)break;T=await fe(T,Z),V++}while(V<X)}return T};c.options.persister?c.fetchFn=()=>c.options.persister?.(oe,{client:c.client,queryKey:c.queryKey,meta:c.options.meta,signal:c.signal},p):c.fetchFn=oe}}}function Dm(n,{pages:c,pageParams:p}){const m=c.length-1;return c.length>0?n.getNextPageParam(c[m],c,p[m],p):void 0}function cv(n,{pages:c,pageParams:p}){return c.length>0?n.getPreviousPageParam?.(c[0],c,p[0],p):void 0}var dv=class extends km{#e;#t;#a;#s;constructor(n){super(),this.#e=n.client,this.mutationId=n.mutationId,this.#a=n.mutationCache,this.#t=[],this.state=n.state||mv(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){this.#t.includes(n)||(this.#t.push(n),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){this.#t=this.#t.filter(c=>c!==n),this.scheduleGc(),this.#a.notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#a.remove(this))}continue(){return this.#s?.continue()??this.execute(this.state.variables)}async execute(n){const c=()=>{this.#o({type:"continue"})},p={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#s=Lm({fn:()=>this.options.mutationFn?this.options.mutationFn(n,p):Promise.reject(new Error("No mutationFn found")),onFail:(O,D)=>{this.#o({type:"failed",failureCount:O,error:D})},onPause:()=>{this.#o({type:"pause"})},onContinue:c,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#a.canRun(this)});const m=this.state.status==="pending",E=!this.#s.canStart();try{if(m)c();else{this.#o({type:"pending",variables:n,isPaused:E}),this.#a.config.onMutate&&await this.#a.config.onMutate(n,this,p);const D=await this.options.onMutate?.(n,p);D!==this.state.context&&this.#o({type:"pending",context:D,variables:n,isPaused:E})}const O=await this.#s.start();return await this.#a.config.onSuccess?.(O,n,this.state.context,this,p),await this.options.onSuccess?.(O,n,this.state.context,p),await this.#a.config.onSettled?.(O,null,this.state.variables,this.state.context,this,p),await this.options.onSettled?.(O,null,n,this.state.context,p),this.#o({type:"success",data:O}),O}catch(O){try{await this.#a.config.onError?.(O,n,this.state.context,this,p)}catch(D){Promise.reject(D)}try{await this.options.onError?.(O,n,this.state.context,p)}catch(D){Promise.reject(D)}try{await this.#a.config.onSettled?.(void 0,O,this.state.variables,this.state.context,this,p)}catch(D){Promise.reject(D)}try{await this.options.onSettled?.(void 0,O,n,this.state.context,p)}catch(D){Promise.reject(D)}throw this.#o({type:"error",error:O}),O}finally{this.#a.runNext(this)}}#o(n){const c=p=>{switch(n.type){case"failed":return{...p,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...p,isPaused:!0};case"continue":return{...p,isPaused:!1};case"pending":return{...p,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...p,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...p,data:void 0,error:n.error,failureCount:p.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=c(this.state),Ve.batch(()=>{this.#t.forEach(p=>{p.onMutationUpdate(n)}),this.#a.notify({mutation:this,type:"updated",action:n})})}};function mv(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var pv=class extends Xi{constructor(n={}){super(),this.config=n,this.#e=new Set,this.#t=new Map,this.#a=0}#e;#t;#a;build(n,c,p){const m=new dv({client:n,mutationCache:this,mutationId:++this.#a,options:n.defaultMutationOptions(c),state:p});return this.add(m),m}add(n){this.#e.add(n);const c=Pi(n);if(typeof c=="string"){const p=this.#t.get(c);p?p.push(n):this.#t.set(c,[n])}this.notify({type:"added",mutation:n})}remove(n){if(this.#e.delete(n)){const c=Pi(n);if(typeof c=="string"){const p=this.#t.get(c);if(p)if(p.length>1){const m=p.indexOf(n);m!==-1&&p.splice(m,1)}else p[0]===n&&this.#t.delete(c)}}this.notify({type:"removed",mutation:n})}canRun(n){const c=Pi(n);if(typeof c=="string"){const m=this.#t.get(c)?.find(E=>E.state.status==="pending");return!m||m===n}else return!0}runNext(n){const c=Pi(n);return typeof c=="string"?this.#t.get(c)?.find(m=>m!==n&&m.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Ve.batch(()=>{this.#e.forEach(n=>{this.notify({type:"removed",mutation:n})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(n){const c={exact:!0,...n};return this.getAll().find(p=>Em(c,p))}findAll(n={}){return this.getAll().filter(c=>Em(n,c))}notify(n){Ve.batch(()=>{this.listeners.forEach(c=>{c(n)})})}resumePausedMutations(){const n=this.getAll().filter(c=>c.state.isPaused);return Ve.batch(()=>Promise.all(n.map(c=>c.continue().catch(va))))}};function Pi(n){return n.options.scope?.id}var fv=class extends Xi{constructor(n={}){super(),this.config=n,this.#e=new Map}#e;build(n,c,p){const m=c.queryKey,E=c.queryHash??Al(m,c);let O=this.get(E);return O||(O=new lv({client:n,queryKey:m,queryHash:E,options:n.defaultQueryOptions(c),state:p,defaultOptions:n.getQueryDefaults(m)}),this.add(O)),O}add(n){this.#e.has(n.queryHash)||(this.#e.set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const c=this.#e.get(n.queryHash);c&&(n.destroy(),c===n&&this.#e.delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Ve.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return this.#e.get(n)}getAll(){return[...this.#e.values()]}find(n){const c={exact:!0,...n};return this.getAll().find(p=>Am(c,p))}findAll(n={}){const c=this.getAll();return Object.keys(n).length>0?c.filter(p=>Am(n,p)):c}notify(n){Ve.batch(()=>{this.listeners.forEach(c=>{c(n)})})}onFocus(){Ve.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Ve.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},hv=class{#e;#t;#a;#s;#o;#r;#n;#i;constructor(n={}){this.#e=n.queryCache||new fv,this.#t=n.mutationCache||new pv,this.#a=n.defaultOptions||{},this.#s=new Map,this.#o=new Map,this.#r=0}mount(){this.#r++,this.#r===1&&(this.#n=Vm.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#i=Yi.subscribe(async n=>{n&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#r--,this.#r===0&&(this.#n?.(),this.#n=void 0,this.#i?.(),this.#i=void 0)}isFetching(n){return this.#e.findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return this.#t.findAll({...n,status:"pending"}).length}getQueryData(n){const c=this.defaultQueryOptions({queryKey:n});return this.#e.get(c.queryHash)?.state.data}ensureQueryData(n){const c=this.defaultQueryOptions(n),p=this.#e.build(this,c),m=p.state.data;return m===void 0?this.fetchQuery(n):(n.revalidateIfStale&&p.isStaleByTime(yl(c.staleTime,p))&&this.prefetchQuery(c),Promise.resolve(m))}getQueriesData(n){return this.#e.findAll(n).map(({queryKey:c,state:p})=>{const m=p.data;return[c,m]})}setQueryData(n,c,p){const m=this.defaultQueryOptions({queryKey:n}),O=this.#e.get(m.queryHash)?.state.data,D=Xh(c,O);if(D!==void 0)return this.#e.build(this,m).setData(D,{...p,manual:!0})}setQueriesData(n,c,p){return Ve.batch(()=>this.#e.findAll(n).map(({queryKey:m})=>[m,this.setQueryData(m,c,p)]))}getQueryState(n){const c=this.defaultQueryOptions({queryKey:n});return this.#e.get(c.queryHash)?.state}removeQueries(n){const c=this.#e;Ve.batch(()=>{c.findAll(n).forEach(p=>{c.remove(p)})})}resetQueries(n,c){const p=this.#e;return Ve.batch(()=>(p.findAll(n).forEach(m=>{m.reset()}),this.refetchQueries({type:"active",...n},c)))}cancelQueries(n,c={}){const p={revert:!0,...c},m=Ve.batch(()=>this.#e.findAll(n).map(E=>E.cancel(p)));return Promise.all(m).then(va).catch(va)}invalidateQueries(n,c={}){return Ve.batch(()=>(this.#e.findAll(n).forEach(p=>{p.invalidate()}),n?.refetchType==="none"?Promise.resolve():this.refetchQueries({...n,type:n?.refetchType??n?.type??"active"},c)))}refetchQueries(n,c={}){const p={...c,cancelRefetch:c.cancelRefetch??!0},m=Ve.batch(()=>this.#e.findAll(n).filter(E=>!E.isDisabled()&&!E.isStatic()).map(E=>{let O=E.fetch(void 0,p);return p.throwOnError||(O=O.catch(va)),E.state.fetchStatus==="paused"?Promise.resolve():O}));return Promise.all(m).then(va)}fetchQuery(n){const c=this.defaultQueryOptions(n);c.retry===void 0&&(c.retry=!1);const p=this.#e.build(this,c);return p.isStaleByTime(yl(c.staleTime,p))?p.fetch(c):Promise.resolve(p.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(va).catch(va)}fetchInfiniteQuery(n){return n.behavior=Um(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(va).catch(va)}ensureInfiniteQueryData(n){return n.behavior=Um(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Yi.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#a}setDefaultOptions(n){this.#a=n}setQueryDefaults(n,c){this.#s.set(Ss(n),{queryKey:n,defaultOptions:c})}getQueryDefaults(n){const c=[...this.#s.values()],p={};return c.forEach(m=>{qs(n,m.queryKey)&&Object.assign(p,m.defaultOptions)}),p}setMutationDefaults(n,c){this.#o.set(Ss(n),{mutationKey:n,defaultOptions:c})}getMutationDefaults(n){const c=[...this.#o.values()],p={};return c.forEach(m=>{qs(n,m.mutationKey)&&Object.assign(p,m.defaultOptions)}),p}defaultQueryOptions(n){if(n._defaulted)return n;const c={...this.#a.queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return c.queryHash||(c.queryHash=Al(c.queryKey,c)),c.refetchOnReconnect===void 0&&(c.refetchOnReconnect=c.networkMode!=="always"),c.throwOnError===void 0&&(c.throwOnError=!!c.suspense),!c.networkMode&&c.persister&&(c.networkMode="offlineFirst"),c.queryFn===El&&(c.enabled=!1),c}defaultMutationOptions(n){return n?._defaulted?n:{...this.#a.mutations,...n?.mutationKey&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},vv=He.createContext(void 0),gv=({client:n,children:c})=>(He.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),s.jsx(vv.Provider,{value:n,children:c}));function ga(...n){return ph(fh(n))}const xv=[{title:"Introdução",items:[{path:"/",label:"Início",icon:fl},{path:"/historia",label:"História do Ubuntu",icon:gh},{path:"/filosofia",label:"Filosofia Ubuntu",icon:xh}]},{title:"Instalação & Setup",items:[{path:"/instalacao",label:"Guia de Instalação",icon:hl},{path:"/primeiros-passos",label:"Primeiros Passos",icon:bh},{path:"/ambiente-grafico",label:"GNOME & Desktop",icon:xm}]},{title:"Gerenciamento",items:[{path:"/apt",label:"APT (Completo)",icon:vl},{path:"/snap-flatpak",label:"Snap & Flatpak",icon:vl},{path:"/systemd",label:"Systemd",icon:gl}]},{title:"Sistema de Arquivos",items:[{path:"/sistema-arquivos",label:"Hierarquia FHS",icon:Qi},{path:"/navegacao",label:"Navegação",icon:Cm},{path:"/manipulacao-arquivos",label:"Manipulação",icon:Qi},{path:"/visualizacao",label:"Visualização",icon:Qi},{path:"/permissoes",label:"Permissões",icon:xl}]},{title:"Administração",items:[{path:"/usuarios",label:"Usuários e Grupos",icon:yh},{path:"/processos",label:"Processos",icon:gl},{path:"/redes",label:"Redes",icon:jh},{path:"/ssh",label:"SSH",icon:Dt},{path:"/disco",label:"Discos e Partições",icon:hl}]},{title:"Terminal & Shell",items:[{path:"/shell-bash",label:"Shell Bash",icon:Dt},{path:"/redirecionamento",label:"Redirecionamento",icon:Dt},{path:"/compressao",label:"Compressão",icon:Qi},{path:"/avancado",label:"Comandos Avançados",icon:Dt}]},{title:"Extras",items:[{path:"/seguranca",label:"Segurança",icon:xl},{path:"/troubleshooting",label:"Troubleshooting",icon:xm},{path:"/referencias",label:"Referências",icon:fl}]}];function bv({isOpen:n,setIsOpen:c}){const[p]=hh();return s.jsxs(s.Fragment,{children:[n&&s.jsx("div",{className:"fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden",onClick:()=>c(!1)}),s.jsx("aside",{className:ga("fixed top-0 bottom-0 left-0 z-50 w-72 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto",n?"translate-x-0":"-translate-x-full"),children:s.jsxs("div",{className:"p-6",children:[s.jsxs("div",{className:"flex items-center justify-between lg:justify-center mb-8",children:[s.jsxs(js,{href:"/",className:"flex items-center gap-3 group",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:s.jsx(Dt,{className:"w-5 h-5 text-primary"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-lg font-bold mt-0 mb-0 pb-0 border-0 leading-tight",children:"Ubuntu"}),s.jsx("p",{className:"text-xs text-muted-foreground",children:"Guia Completo"})]})]}),s.jsx("button",{className:"lg:hidden p-2 text-muted-foreground hover:text-foreground",onClick:()=>c(!1),children:s.jsx(vh,{className:"w-5 h-5"})})]}),s.jsx("nav",{className:"space-y-8",children:xv.map((m,E)=>s.jsxs("div",{children:[s.jsx("h4",{className:"text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3 mt-0 border-0 pb-0",children:m.title}),s.jsx("ul",{className:"space-y-1",children:m.items.map((O,D)=>{const T=p===O.path,V=O.icon;return s.jsx("li",{children:s.jsxs(js,{href:O.path,onClick:()=>c(!1),className:ga("flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200",T?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:[s.jsx(V,{className:ga("w-4 h-4",T?"text-primary":"opacity-70")}),O.label]})},D)})})]},E))})]})})]})}function yv(){const[n,c]=He.useState(()=>{if(typeof window<"u"){const p=localStorage.getItem("ubuntu-theme");if(p==="dark"||p==="light")return p;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"dark"});return He.useEffect(()=>{const p=window.document.documentElement;p.classList.remove("light","dark"),p.classList.add(n),localStorage.setItem("ubuntu-theme",n)},[n]),{theme:n,setTheme:c,toggleTheme:()=>c(p=>p==="dark"?"light":"dark")}}function jv({onMenuClick:n}){const{theme:c,toggleTheme:p}=yv();return s.jsxs("header",{className:"sticky top-0 z-30 w-full glass-panel border-b border-border px-4 sm:px-6 h-16 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("button",{onClick:n,className:"lg:hidden p-2 -ml-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",children:s.jsx(Sh,{className:"w-5 h-5"})}),s.jsxs("button",{className:"hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted/50 hover:bg-muted border border-border rounded-lg text-sm text-muted-foreground transition-colors w-64",children:[s.jsx(Cm,{className:"w-4 h-4"}),s.jsx("span",{children:"Pesquisar conteúdo..."}),s.jsx("span",{className:"ml-auto text-xs opacity-50 border border-border rounded px-1.5 py-0.5",children:"Ctrl+K"})]})]}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("button",{onClick:p,className:"p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",title:"Alternar tema",children:c==="dark"?s.jsx(qh,{className:"w-5 h-5"}):s.jsx(Ah,{className:"w-5 h-5"})})})]})}const Sv=[{title:"Fundamentos",desc:"História, filosofia e instalação do Ubuntu",icon:fl,path:"/historia",color:"text-primary",bg:"bg-primary/10"},{title:"Gerenciamento",desc:"APT, Snap, Flatpak e atualizações",icon:vl,path:"/apt",color:"text-secondary",bg:"bg-secondary/10"},{title:"Sistema",desc:"FHS, processos e usuários",icon:gl,path:"/sistema-arquivos",color:"text-blue-500",bg:"bg-blue-500/10"},{title:"Armazenamento",desc:"Discos, partições e formatação",icon:hl,path:"/disco",color:"text-yellow-500",bg:"bg-yellow-500/10"},{title:"Redes & SSH",desc:"Rede, SSH, firewall e conectividade",icon:Dt,path:"/ssh",color:"text-green-500",bg:"bg-green-500/10"},{title:"Segurança",desc:"UFW, fail2ban, AppArmor e hardening",icon:xl,path:"/seguranca",color:"text-red-500",bg:"bg-red-500/10"}];function qv(){return s.jsxs("div",{className:"min-h-screen",children:[s.jsxs("section",{className:"relative overflow-hidden pt-20 pb-32 px-4",children:[s.jsxs("div",{className:"absolute inset-0 z-0",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background"})]}),s.jsx("div",{className:"max-w-4xl mx-auto relative z-10 text-center",children:s.jsxs(pl.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-primary animate-pulse"}),"Guia Completo 2025 · Português BR"]}),s.jsxs("h1",{className:"text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60",children:["Domine o ",s.jsx("span",{className:"text-primary",children:"Ubuntu"})]}),s.jsx("p",{className:"text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed",children:"De iniciante a expert. O material em português definitivo para entender, instalar e dominar o Ubuntu — a distribuição Linux mais popular do mundo."}),s.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[s.jsx(js,{href:"/instalacao",className:"w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all",children:"Começar do Zero"}),s.jsxs(js,{href:"/apt",className:"w-full sm:w-auto px-8 py-4 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-muted hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2",children:[s.jsx(Dt,{className:"w-5 h-5"}),"Guia de Comandos"]})]})]})})]}),s.jsx("section",{className:"border-y border-border bg-card/50 backdrop-blur-sm relative z-10",children:s.jsx("div",{className:"max-w-6xl mx-auto px-4 py-12",children:s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border",children:[s.jsxs("div",{className:"pt-4 md:pt-0",children:[s.jsx("div",{className:"text-4xl font-black text-foreground mb-2",children:"400+"}),s.jsx("div",{className:"text-sm text-muted-foreground uppercase tracking-wider font-medium",children:"Comandos Explicados"})]}),s.jsxs("div",{className:"pt-4 md:pt-0",children:[s.jsx("div",{className:"text-4xl font-black text-foreground mb-2",children:"22"}),s.jsx("div",{className:"text-sm text-muted-foreground uppercase tracking-wider font-medium",children:"Tópicos e Categorias"})]}),s.jsxs("div",{className:"pt-4 md:pt-0",children:[s.jsx("div",{className:"text-4xl font-black text-primary mb-2",children:"100%"}),s.jsx("div",{className:"text-sm text-muted-foreground uppercase tracking-wider font-medium",children:"Prático e Direto"})]})]})})}),s.jsxs("section",{className:"py-24 px-4 max-w-6xl mx-auto relative z-10",children:[s.jsxs("div",{className:"mb-12 text-center",children:[s.jsx("h2",{className:"text-3xl font-bold mb-4 border-0",children:"Explore por Categorias"}),s.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Navegue pelos módulos estruturados como um curso completo de Ubuntu."})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Sv.map((n,c)=>s.jsx(js,{href:n.path,children:s.jsxs(pl.div,{whileHover:{y:-5},className:"group p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-xl transition-all cursor-pointer h-full flex flex-col",children:[s.jsx("div",{className:`w-12 h-12 rounded-xl ${n.bg} ${n.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`,children:s.jsx(n.icon,{className:"w-6 h-6"})}),s.jsx("h3",{className:"text-xl font-bold text-foreground mb-2 mt-0 border-0 pb-0",children:n.title}),s.jsx("p",{className:"text-muted-foreground mb-6 flex-1",children:n.desc}),s.jsxs("div",{className:"flex items-center text-primary font-medium text-sm mt-auto",children:["Acessar guia ",s.jsx(Eh,{className:"w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"})]})]})},c))})]}),s.jsx("section",{className:"border-t border-border bg-card/30 py-12 px-4",children:s.jsx("div",{className:"max-w-4xl mx-auto text-center",children:s.jsxs("p",{className:"text-muted-foreground text-sm",children:["Conteúdo focado em ",s.jsx("strong",{className:"text-foreground",children:"Ubuntu 22.04 LTS"})," e"," ",s.jsx("strong",{className:"text-foreground",children:"Ubuntu 24.04 LTS"})," · APT · UFW · Snap · GNOME"]})})})]})}function Av({level:n}){const c={iniciante:"bg-green-500/10 text-green-500 border-green-500/20",intermediario:"bg-yellow-500/10 text-yellow-500 border-yellow-500/20",avancado:"bg-red-500/10 text-red-500 border-red-500/20"},p={iniciante:"Iniciante",intermediario:"Intermediário",avancado:"Avançado"};return s.jsx("span",{className:ga("px-3 py-1 text-xs font-semibold rounded-full border",c[n]),children:p[n]})}function le({title:n,subtitle:c,difficulty:p,timeToRead:m,children:E}){const[O,D]=He.useState(0);return He.useEffect(()=>{const T=()=>{const V=document.documentElement.scrollTop,oe=document.documentElement.scrollHeight-document.documentElement.clientHeight,H=`${V/oe}`;D(Number(H))};return window.addEventListener("scroll",T),()=>window.removeEventListener("scroll",T)},[]),s.jsxs("div",{className:"max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pb-24",children:[s.jsx("div",{className:"fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out",style:{width:`${O*100}%`}}),s.jsxs(pl.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[s.jsxs("header",{className:"mb-12",children:[s.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-4",children:[p&&s.jsx(Av,{level:p}),m&&s.jsxs("span",{className:"text-sm text-muted-foreground font-medium flex items-center gap-1.5",children:["⏱ ",m," de leitura"]})]}),s.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4",children:n}),c&&s.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:c})]}),s.jsx("div",{className:"prose prose-invert max-w-none",children:E})]})]})}const Ev={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};function v({code:n,language:c="bash",title:p}){const[m,E]=He.useState(!1),O=()=>{navigator.clipboard.writeText(n),E(!0),setTimeout(()=>E(!1),2e3)};return s.jsxs("div",{className:"my-6 rounded-xl overflow-hidden bg-[#1e1e1e] border border-border shadow-lg",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-white/5",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:"flex gap-1.5",children:[s.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),s.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),s.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),p&&s.jsx("span",{className:"ml-2 text-xs font-mono text-gray-400",children:p}),!p&&s.jsx("span",{className:"ml-2 text-xs font-mono text-gray-500 lowercase",children:c})]}),s.jsx("button",{onClick:O,className:"p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors",title:"Copiar código",children:m?s.jsx(Oh,{className:"w-4 h-4 text-green-400"}):s.jsx(Th,{className:"w-4 h-4"})})]}),s.jsx("div",{className:"p-4 text-sm font-mono overflow-x-auto",children:s.jsx(Nh,{language:c,style:Ev,customStyle:{margin:0,padding:0,background:"transparent"},wrapLines:!0,children:n.trim()})})]})}const Ov={info:"bg-blue-500/10 border-blue-500/20 text-blue-400",warning:"bg-yellow-500/10 border-yellow-500/20 text-yellow-400",danger:"bg-red-500/10 border-red-500/20 text-red-400",success:"bg-green-500/10 border-green-500/20 text-green-400"},Tv={info:Uh,warning:zh,danger:wm,success:Mh};function G({type:n="info",title:c,children:p,className:m}){const E=Tv[n];return s.jsxs("div",{className:ga("rounded-xl border p-5 my-6 flex gap-4 items-start",Ov[n],m),children:[s.jsx(E,{className:"w-6 h-6 shrink-0 mt-0.5"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h5",{className:"font-semibold text-foreground mb-1",children:c}),s.jsx("div",{className:"text-sm opacity-90 leading-relaxed text-foreground/80",children:p})]})]})}function Mv(){return s.jsxs(le,{title:"SSH - Secure Shell",subtitle:"Conecte-se a servidores remotos com segurança, gerencie chaves, configure o servidor SSH, firewall (UFW) e domine tunneling e transferência de arquivos no Ubuntu.",difficulty:"intermediario",timeToRead:"45 min",children:[s.jsxs("p",{children:["O ",s.jsx("strong",{children:"SSH (Secure Shell)"})," é o protocolo padrão para acesso remoto seguro a sistemas Linux. Toda comunicação é criptografada, tornando-o seguro mesmo em redes públicas. No Ubuntu, o servidor SSH é fornecido pelo pacote ",s.jsx("code",{children:"openssh-server"})," e o cliente pelo"," ",s.jsx("code",{children:"openssh-client"})," (já instalado por padrão na maioria dos sistemas Ubuntu Desktop)."]}),s.jsx("h2",{children:"1. Instalação do OpenSSH"}),s.jsx("p",{children:"No Ubuntu, o cliente SSH já vem instalado. O servidor precisa ser instalado separadamente."}),s.jsx(v,{title:"Instalando o OpenSSH no Ubuntu",code:`# Atualizar repositórios antes de instalar
sudo apt update

# Instalar o servidor SSH (para receber conexões)
sudo apt install openssh-server

# Instalar o cliente SSH (para iniciar conexões) — geralmente já instalado
sudo apt install openssh-client

# Verificar a versão instalada
ssh -V

# Verificar status do serviço SSH
sudo systemctl status ssh`}),s.jsxs(G,{type:"info",title:"Nome do serviço: ssh vs sshd",children:["No Ubuntu, o serviço SSH se chama ",s.jsx("code",{children:"ssh"})," (não ",s.jsx("code",{children:"sshd"})," como no Arch Linux). Use ",s.jsx("code",{children:"systemctl status ssh"}),", ",s.jsx("code",{children:"systemctl restart ssh"}),", etc. O processo em si ainda se chama ",s.jsx("code",{children:"sshd"})," — mas o ",s.jsx("em",{children:"nome do serviço systemd"})," é ",s.jsx("code",{children:"ssh"}),"."]}),s.jsx("h2",{children:"2. Conectando a um Servidor Remoto"}),s.jsx("p",{children:"A sintaxe básica do cliente SSH é simples e direta. Você pode conectar usando senha ou chave SSH."}),s.jsx(v,{title:"Sintaxe básica de conexão",code:`# Conectar com usuário padrão (usa o usuário local atual)
ssh servidor.exemplo.com

# Conectar com usuário específico
ssh usuario@servidor.exemplo.com

# Conectar em uma porta diferente (padrão: 22)
ssh -p 2222 usuario@servidor.exemplo.com

# Conectar com verbose para debug de problemas
ssh -v usuario@servidor.exemplo.com

# Executar um comando remoto sem abrir shell interativo
ssh usuario@servidor.exemplo.com "df -h && uptime"

# Manter a conexão ativa com keepalive
ssh -o ServerAliveInterval=60 usuario@servidor.exemplo.com`}),s.jsx("h2",{children:"3. Geração de Chaves SSH"}),s.jsxs("p",{children:["Autenticar com chaves SSH é mais seguro e prático do que usar senhas. O par de chaves consiste em uma ",s.jsx("strong",{children:"chave privada"})," (fica no seu computador) e uma ",s.jsx("strong",{children:"chave pública"}),"(é copiada para o servidor)."]}),s.jsx("h3",{children:"ssh-keygen — Criar par de chaves"}),s.jsx(v,{title:"Gerando chaves SSH",code:`# Gerar chave Ed25519 (recomendada — moderna e segura)
ssh-keygen -t ed25519 -C "seu@email.com"

# Gerar chave RSA de 4096 bits (compatibilidade ampla)
ssh-keygen -t rsa -b 4096 -C "seu@email.com"

# Durante a geração, você verá:
# Enter file in which to save the key (~/.ssh/id_ed25519): [Enter para padrão]
# Enter passphrase (empty for no passphrase): [senha para proteger a chave]
# Enter same passphrase again: [repita]

# Listar suas chaves existentes
ls ~/.ssh/
# id_ed25519       <- chave privada (NUNCA compartilhe!)
# id_ed25519.pub   <- chave pública (pode compartilhar)
# known_hosts      <- servidores conhecidos
# authorized_keys  <- chaves autorizadas (no servidor)
# config           <- configurações do cliente

# Ver o conteúdo da chave pública
cat ~/.ssh/id_ed25519.pub`}),s.jsxs(G,{type:"warning",title:"Proteja sua chave privada",children:["A chave privada (",s.jsx("code",{children:"~/.ssh/id_ed25519"}),") nunca deve ser compartilhada com ninguém. Use sempre uma passphrase para protegê-la. As permissões do arquivo também importam:"," ",s.jsx("code",{children:"chmod 600 ~/.ssh/id_ed25519"}),"."]}),s.jsx("h2",{children:"4. Como Funciona o authorized_keys — Uma Máquina Confiando na Outra"}),s.jsx("p",{children:'Esse é o conceito central da autenticação SSH por chave. Entender isso elimina toda a "mágica":'}),s.jsxs("p",{children:["Quando você gera um par de chaves, obtém dois arquivos: a ",s.jsx("strong",{children:"chave privada"})," (fica só com você) e a ",s.jsx("strong",{children:"chave pública"})," (pode ser distribuída livremente). A chave pública é como um cadeado aberto — qualquer um pode ter o cadeado, mas só quem tem a chave privada consegue fechá-lo e abri-lo."]}),s.jsxs("p",{children:["O arquivo ",s.jsx("code",{children:"~/.ssh/authorized_keys"}),' no servidor é uma lista de "cadeados" (chaves públicas) que aquele servidor aceita. Quando você tenta se conectar, o servidor propõe um desafio matemático que só pode ser resolvido por quem possui a chave privada correspondente a uma das chaves públicas da lista. Se você resolver corretamente — sem precisar enviar a chave privada pela rede — o acesso é concedido.']}),s.jsx(v,{title:"Entendendo o authorized_keys na prática",code:`# === NO SERVIDOR UBUNTU (máquina que vai receber conexões) ===

# Ver quais chaves estão autorizadas a conectar
cat ~/.ssh/authorized_keys

# Cada linha é uma chave pública de uma máquina autorizada:
# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA... usuario@maquina-a
# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5BBBB... usuario@maquina-b
# ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAB... deploy@ci-server

# Cada linha representa uma máquina diferente que tem acesso!
# Para REVOGAR o acesso de uma máquina, basta apagar a linha dela.

# === FLUXO COMPLETO: Autorizar a máquina A a conectar na máquina B (Ubuntu) ===

# PASSO 1 — Na máquina A: gerar a chave (se ainda não tiver)
ssh-keygen -t ed25519 -C "maquina-a"

# PASSO 2 — Na máquina A: ver a chave pública gerada
cat ~/.ssh/id_ed25519.pub
# Resultado: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA... usuario@maquina-a

# PASSO 3 — Na máquina B (Ubuntu): adicionar a chave pública da máquina A
mkdir -p ~/.ssh
chmod 700 ~/.ssh
echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA... usuario@maquina-a" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# PASSO 4 — Na máquina A: testar a conexão (não deve pedir senha)
ssh usuario@maquina-b

# === Casos de uso comuns ===
# - Servidor de CI/CD fazendo deploy automaticamente em produção
# - Script de backup conectando via cron sem interação humana
# - Máquina de desenvolvimento acessando servidor sem digitar senha
# - Múltiplos devs com suas próprias chaves no mesmo servidor Ubuntu`}),s.jsxs(G,{type:"info",title:"Por que isso é mais seguro que senha?",children:["Com senha, ela trafega pela rede (criptografada, mas ainda existe). Com chave SSH,"," ",s.jsx("strong",{children:"a chave privada nunca sai da sua máquina"}),". O servidor só verifica se você consegue resolver um desafio matemático — sem a chave privada, é impossível. Mesmo que alguém intercepte a comunicação, não obtém nada útil."]}),s.jsx("h2",{children:"5. Copiando a Chave Pública para o Servidor"}),s.jsx(v,{title:"Autorizando sua chave no servidor Ubuntu",code:`# Forma automática (mais fácil) — faz os passos automaticamente
ssh-copy-id usuario@servidor.exemplo.com

# Especificar qual chave copiar
ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@servidor.exemplo.com

# Em porta não padrão
ssh-copy-id -p 2222 usuario@servidor.exemplo.com

# Forma manual — se ssh-copy-id não estiver disponível
cat ~/.ssh/id_ed25519.pub | ssh usuario@servidor.exemplo.com   "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"

# Após copiar a chave, teste a conexão (não deve pedir senha)
ssh usuario@servidor.exemplo.com`}),s.jsx("h2",{children:"6. Configuração do Cliente SSH (~/.ssh/config)"}),s.jsxs("p",{children:["O arquivo ",s.jsx("code",{children:"~/.ssh/config"})," permite criar atalhos e configurações personalizadas para cada servidor, evitando digitar opções longas toda vez."]}),s.jsx(v,{title:"~/.ssh/config — exemplos práticos",code:`# Criar o arquivo de configuração
touch ~/.ssh/config
chmod 600 ~/.ssh/config

# Alias simples para um servidor Ubuntu
Host meuservidor
    HostName 192.168.1.100
    User ubuntu
    Port 22
    IdentityFile ~/.ssh/id_ed25519

# Servidor de produção Ubuntu
Host prod
    HostName prod.minhaempresa.com
    User ubuntu
    IdentityFile ~/.ssh/chave_producao
    ServerAliveInterval 60
    ServerAliveCountMax 3

# Configuração global (para todos os hosts)
Host *
    AddKeysToAgent yes
    IdentityFile ~/.ssh/id_ed25519
    ServerAliveInterval 120

# Após configurar, usar o alias é simples:
ssh meuservidor       # equivale a: ssh ubuntu@192.168.1.100
ssh prod              # conecta ao servidor de produção`}),s.jsx("h2",{children:"7. SSH Agent — Gerenciando Chaves com Passphrase"}),s.jsxs("p",{children:["O ",s.jsx("code",{children:"ssh-agent"})," armazena sua chave descriptografada em memória, para que você não precise digitar a passphrase toda vez que conectar. No Ubuntu Desktop, o GNOME Keyring geralmente cuida disso automaticamente."]}),s.jsx(v,{title:"Usando o ssh-agent no Ubuntu",code:`# Iniciar o ssh-agent manualmente (se não estiver rodando)
eval "$(ssh-agent -s)"

# Adicionar sua chave ao agent (pedirá a passphrase uma vez)
ssh-add ~/.ssh/id_ed25519

# Adicionar com tempo de expiração (ex: 8 horas)
ssh-add -t 8h ~/.ssh/id_ed25519

# Listar chaves carregadas no agent
ssh-add -l

# Remover todas as chaves do agent
ssh-add -D

# Ubuntu Desktop: o GNOME Keyring gerencia automaticamente
# Você pode verificar com:
echo $SSH_AUTH_SOCK
# Se tiver um valor, o agent está rodando

# Para iniciar o agent automaticamente no shell, adicione ao ~/.bashrc:
# if [ -z "$SSH_AUTH_SOCK" ]; then
#   eval "$(ssh-agent -s)"
#   ssh-add ~/.ssh/id_ed25519 2>/dev/null
# fi`}),s.jsx("h2",{children:"8. Transferência de Arquivos com SCP e SFTP"}),s.jsx("h3",{children:"SCP — Cópia Segura"}),s.jsx(v,{title:"scp — copiar arquivos via SSH",code:`# Copiar arquivo local para servidor remoto
scp arquivo.txt usuario@servidor:/home/usuario/

# Copiar arquivo do servidor para o local
scp usuario@servidor:/etc/nginx/nginx.conf ./nginx.conf.bak

# Copiar diretório inteiro (recursivo)
scp -r ./meu-projeto/ usuario@servidor:/var/www/

# Em porta não padrão (atenção: -P maiúsculo no scp!)
scp -P 2222 arquivo.txt usuario@servidor:/tmp/`}),s.jsx("h3",{children:"SFTP — Protocolo Interativo"}),s.jsx(v,{title:"sftp — sessão interativa de transferência",code:`# Iniciar sessão SFTP
sftp usuario@servidor.exemplo.com

# Comandos dentro do sftp:
sftp> ls                    # listar arquivos remotos
sftp> get arquivo.txt       # baixar arquivo
sftp> get -r pasta/         # baixar pasta inteira
sftp> put relatorio.pdf     # enviar arquivo
sftp> put -r ./projeto/     # enviar pasta inteira
sftp> bye                   # sair`}),s.jsx("h2",{children:"9. SSH Tunneling (Port Forwarding)"}),s.jsx(v,{title:"Tipos de túnel SSH",code:`# === TÚNEL LOCAL — acessar serviço remoto como se fosse local ===
# Acessa PostgreSQL remoto pela porta local 5433
ssh -L 5433:localhost:5432 usuario@servidor.exemplo.com

# Mantém o túnel sem abrir shell interativo
ssh -L 8080:localhost:3000 -N usuario@servidor.exemplo.com

# === TÚNEL REMOTO — expor porta local para o servidor remoto ===
ssh -R 9000:localhost:8080 usuario@servidor.exemplo.com

# === TÚNEL DINÂMICO — proxy SOCKS5 ===
ssh -D 1080 usuario@servidor.exemplo.com

# === Túnel em background ===
ssh -L 5433:localhost:5432 -N -f usuario@servidor.exemplo.com`}),s.jsx("h2",{children:"10. Configurando o Servidor SSH no Ubuntu (sshd)"}),s.jsx(v,{title:"Habilitando e gerenciando o serviço SSH no Ubuntu",code:`# Habilitar e iniciar o serviço SSH (nome: ssh, não sshd!)
sudo systemctl enable --now ssh

# Verificar status
sudo systemctl status ssh

# Reiniciar após alterar a configuração
sudo systemctl restart ssh

# Recarregar configuração sem derrubar sessões ativas
sudo systemctl reload ssh

# Verificar se o sshd está ouvindo
ss -tlnp | grep sshd`}),s.jsx(v,{title:"/etc/ssh/sshd_config — configurações recomendadas para Ubuntu",code:`# Porta personalizada (reduz tentativas de brute force)
Port 2222

# Desabilitar login como root (importante!)
PermitRootLogin no

# Autenticação por senha (desabilite após configurar chaves)
PasswordAuthentication no
PermitEmptyPasswords no

# Autenticação por chave pública (deve estar habilitada)
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys

# Número máximo de tentativas de autenticação
MaxAuthTries 3

# Limitar quais usuários podem conectar via SSH
AllowUsers ubuntu deploy

# No Ubuntu 22.04+, você pode incluir configurações extras:
# Include /etc/ssh/sshd_config.d/*.conf`}),s.jsxs(G,{type:"warning",title:"Antes de desabilitar PasswordAuthentication",children:["Certifique-se de que sua chave pública está corretamente instalada em"," ",s.jsx("code",{children:"~/.ssh/authorized_keys"})," no servidor ",s.jsx("strong",{children:"antes"})," de definir"," ",s.jsx("code",{children:"PasswordAuthentication no"}),". Sempre mantenha uma sessão SSH aberta enquanto testa a nova configuração. No Ubuntu, use ",s.jsx("code",{children:"sudo systemctl reload ssh"})," para aplicar mudanças sem derrubar sessões existentes."]}),s.jsx("h2",{children:"11. Firewall com UFW — A Ferramenta Padrão do Ubuntu"}),s.jsxs("p",{children:["O ",s.jsx("strong",{children:"UFW (Uncomplicated Firewall)"})," é a ferramenta de firewall padrão do Ubuntu. Diferente do Arch Linux, o Ubuntu vem com o UFW pré-instalado — basta habilitar e configurar."]}),s.jsxs(G,{type:"warning",title:"Cuidado ao ativar o UFW remotamente",children:["Se você estiver conectado via SSH e ativar o UFW sem liberar a porta 22 primeiro,"," ",s.jsx("strong",{children:"você perderá o acesso ao servidor imediatamente"}),". Sempre libere a porta SSH"," ",s.jsx("em",{children:"antes"})," de habilitar o UFW:"," ",s.jsx("code",{children:"sudo ufw allow ssh && sudo ufw enable"})]}),s.jsx(v,{title:"UFW — Gerenciando o firewall do Ubuntu",code:`# Verificar status atual
sudo ufw status verbose

# Habilitar o UFW (SEMPRE libere o SSH antes!)
sudo ufw allow ssh           # libera a porta 22
sudo ufw enable              # ativa o firewall

# === Regras para SSH ===
# Porta padrão 22 (múltiplas formas equivalentes)
sudo ufw allow ssh
sudo ufw allow 22/tcp
sudo ufw allow 22

# Porta personalizada (ex: 2222)
sudo ufw allow 2222/tcp

# Liberar SSH apenas de um IP específico (mais seguro)
sudo ufw allow from 192.168.1.50 to any port 22

# Liberar SSH de uma rede inteira
sudo ufw allow from 192.168.1.0/24 to any port 22

# === Bloquear ===
# Bloquear acesso SSH de um IP específico
sudo ufw deny from 203.0.113.10 to any port 22

# Remover uma regra (ver número com: sudo ufw status numbered)
sudo ufw delete allow 22/tcp
sudo ufw delete 3             # remover regra número 3

# === Outras operações ===
sudo ufw reload               # recarregar regras
sudo ufw disable              # desabilitar o UFW (libera tudo)
sudo ufw reset                # resetar todas as regras`}),s.jsx("h3",{children:"Regras adicionais do UFW úteis no Ubuntu"}),s.jsx(v,{title:"UFW — regras comuns para servidor Ubuntu",code:`# Permitir HTTP e HTTPS (para servidor web)
sudo ufw allow http
sudo ufw allow https
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Negar tudo que não foi explicitamente permitido (política padrão)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Ver regras numeradas (para remover por número)
sudo ufw status numbered

# Limitar tentativas de conexão SSH (proteção básica contra brute force)
sudo ufw limit ssh/tcp
# Bloqueia temporariamente IPs com mais de 6 tentativas em 30 segundos

# Ver logs do UFW
sudo tail -f /var/log/ufw.log
sudo journalctl -f | grep UFW`}),s.jsx("h3",{children:"nftables — Alternativa avançada (Ubuntu 20.04+)"}),s.jsx(v,{title:"nftables no Ubuntu (alternativa ao UFW)",code:`# Verificar se o nftables está instalado e rodando
sudo apt install nftables
sudo systemctl status nftables

# Ver regras ativas
sudo nft list ruleset

# Liberar a porta SSH (22) — adicionar regra na tabela inet
sudo nft add rule inet filter input tcp dport 22 accept

# Liberar porta personalizada (ex: 2222)
sudo nft add rule inet filter input tcp dport 2222 accept

# Salvar regras para persistir após reinicialização
sudo nft list ruleset > /etc/nftables.conf
sudo systemctl enable nftables`}),s.jsx("h3",{children:"iptables — Ainda presente no Ubuntu"}),s.jsx(v,{title:"iptables no Ubuntu",code:`# Ver regras ativas
sudo iptables -L -n -v

# Liberar a porta SSH (22)
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Liberar porta personalizada (ex: 2222)
sudo iptables -A INPUT -p tcp --dport 2222 -j ACCEPT

# Salvar regras (instale iptables-persistent)
sudo apt install iptables-persistent
sudo iptables-save > /etc/iptables/rules.v4
sudo ip6tables-save > /etc/iptables/rules.v6`}),s.jsx("h2",{children:"12. Verificando Portas e Conectividade"}),s.jsx("p",{children:"Quando o SSH não conecta, o problema pode ser: serviço parado, porta bloqueada pelo firewall, ou porta errada. Use essas ferramentas para diagnosticar."}),s.jsx("h3",{children:"No próprio servidor — checar se o sshd está ouvindo"}),s.jsx(v,{title:"Verificar portas abertas no servidor Ubuntu",code:`# Ver todas as portas TCP em escuta (LISTEN)
ss -tlnp
# ou equivalente mais antigo:
netstat -tlnp

# Filtrar apenas a porta do SSH
ss -tlnp | grep sshd
# Saída esperada:
# LISTEN  0  128  0.0.0.0:22  0.0.0.0:*  users:(("sshd",pid=1234,fd=3))

# Verificar se está ouvindo em IPv4 e IPv6
ss -tlnp | grep :22

# Ver qual processo está usando a porta 22
sudo lsof -i :22

# Verificar todas as conexões SSH ativas agora
ss -tnp | grep :22`}),s.jsx("h3",{children:"De outra máquina — testar se a porta está acessível"}),s.jsx(v,{title:"Testar conectividade com o servidor SSH Ubuntu",code:`# === nc (netcat) — teste rápido de porta ===
# Instalar no Ubuntu: sudo apt install netcat-traditional
# ou a versão OpenBSD:
sudo apt install netcat-openbsd

nc -zv servidor.exemplo.com 22
# Saída se aberto:  Connection to servidor.exemplo.com 22 port [tcp/ssh] succeeded!
# Saída se fechado: nc: connect to servidor.exemplo.com port 22 (tcp) failed

# Testar porta personalizada
nc -zv servidor.exemplo.com 2222

# Com timeout (útil em scripts)
nc -zv -w 5 servidor.exemplo.com 22

# === telnet — outra forma de testar ===
# Instalar: sudo apt install telnet
telnet servidor.exemplo.com 22
# Se abrir: SSH-2.0-OpenSSH_9.x (você vê o banner do servidor)

# === nmap — scanner completo de portas ===
# Instalar no Ubuntu:
sudo apt install nmap

# Verificar se a porta 22 está aberta no servidor
nmap -p 22 servidor.exemplo.com

# Verificar várias portas de uma vez
nmap -p 22,80,443,2222 servidor.exemplo.com

# Scan completo com detecção de serviço
nmap -sV -p 22 servidor.exemplo.com
# Saída:
# PORT   STATE  SERVICE VERSION
# 22/tcp open   ssh     OpenSSH 9.6 (Ubuntu Linux; protocol 2.0)

# === curl — verificação rápida (sem instalar nada extra) ===
curl -v telnet://servidor.exemplo.com:22 2>&1 | head -5`}),s.jsx("h3",{children:"Diagnosticar por que o SSH não conecta no Ubuntu"}),s.jsx(v,{title:"Passo a passo para diagnosticar falha de conexão SSH no Ubuntu",code:`# PASSO 1 — O serviço SSH está rodando no servidor? (nome: ssh, não sshd!)
sudo systemctl status ssh
# Se não estiver: sudo systemctl start ssh

# PASSO 2 — O servidor está ouvindo na porta certa?
ss -tlnp | grep sshd
# Se não aparecer nada: verifique o Port no /etc/ssh/sshd_config

# PASSO 3 — O UFW está bloqueando?
sudo ufw status verbose
# Se o UFW estiver ativo e não tiver regra para SSH, adicione:
# sudo ufw allow ssh

# PASSO 4 — Testar da máquina cliente
nc -zv servidor.exemplo.com 22
# Se falhar: firewall bloqueando ou porta errada

# PASSO 5 — Tentar conectar com verbose para ver onde trava
ssh -vvv usuario@servidor.exemplo.com

# PASSO 6 — Ver logs no servidor Ubuntu
sudo journalctl -u ssh -f
# Ou nos logs tradicionais:
sudo tail -f /var/log/auth.log
# Em outra aba, tente conectar e observe o log em tempo real

# PASSO 7 — Verificar permissões do ~/.ssh (causa silenciosa comum!)
ls -la ~/.ssh/
# .ssh deve ter permissão 700 (drwx------)
# authorized_keys deve ter permissão 600 (-rw-------)
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys`}),s.jsxs(G,{type:"info",title:"Regra de ouro do diagnóstico SSH",children:["Se ",s.jsx("code",{children:"nc -zv servidor.exemplo.com 22"})," falhar — é problema de rede ou firewall (UFW), não de SSH. Se conectar mas o SSH recusar — é problema de configuração do sshd, usuário ou chaves. Essa distinção economiza muito tempo de debug."]}),s.jsx("h2",{children:"13. Verificando Logs e Diagnóstico do sshd no Ubuntu"}),s.jsx(v,{title:"Logs do servidor SSH no Ubuntu",code:`# Ver tentativas de login em tempo real (via journalctl)
sudo journalctl -u ssh -f

# Alternativa: log tradicional do Ubuntu
sudo tail -f /var/log/auth.log

# Ver tentativas com falha
sudo journalctl -u ssh | grep "Failed"
sudo grep "Failed" /var/log/auth.log

# Ver tentativas com usuário inválido
sudo journalctl -u ssh | grep "Invalid user"
sudo grep "Invalid user" /var/log/auth.log

# Ver últimas conexões bem-sucedidas
last -n 20

# Ver quem está logado agora
who
w`}),s.jsx("h2",{children:"14. Dicas de Segurança para Ubuntu"}),s.jsx(v,{title:"Boas práticas de segurança SSH no Ubuntu",code:`# 1. Alterar a porta padrão + liberar no UFW
#    /etc/ssh/sshd_config: Port 2222
sudo ufw allow 2222/tcp
sudo ufw deny 22/tcp     # bloquear a porta antiga após trocar
sudo systemctl reload ssh

# 2. Usar apenas chaves SSH (sem senha)
#    /etc/ssh/sshd_config: PasswordAuthentication no

# 3. Instalar e configurar o Fail2Ban (bloqueia IPs com muitas tentativas)
sudo apt install fail2ban
sudo systemctl enable --now fail2ban

# Verificar status do fail2ban
sudo fail2ban-client status
sudo fail2ban-client status sshd

# 4. Usar chaves Ed25519 (mais modernas e seguras que RSA)
ssh-keygen -t ed25519

# 5. Revisar authorized_keys periodicamente
cat ~/.ssh/authorized_keys
# Remova linhas de máquinas que não devem mais ter acesso

# 6. UFW com limite de tentativas SSH
sudo ufw limit ssh/tcp   # bloqueia IPs com muitas tentativas

# 7. AppArmor — Ubuntu vem com AppArmor ativo por padrão
# O perfil do sshd é gerenciado automaticamente
sudo aa-status | grep sshd`}),s.jsxs(G,{type:"success",title:"Fail2Ban no Ubuntu — instalação simplificada",children:["O Ubuntu facilita a instalação do Fail2Ban: ",s.jsx("code",{children:"sudo apt install fail2ban"})," já configura automaticamente uma proteção básica para SSH. O jail padrão é"," ",s.jsx("code",{children:"/etc/fail2ban/jail.d/defaults-debian.conf"}),". Para customizar, edite ou crie ",s.jsx("code",{children:"/etc/fail2ban/jail.local"}),"."]}),s.jsx("h2",{children:"15. Referências"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"https://ubuntu.com/server/docs/openssh-server",target:"_blank",rel:"noopener noreferrer",children:"Ubuntu Docs — OpenSSH Server"})}),s.jsx("li",{children:s.jsx("a",{href:"https://help.ubuntu.com/community/SSH",target:"_blank",rel:"noopener noreferrer",children:"Ubuntu Community — SSH"})}),s.jsx("li",{children:s.jsx("a",{href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer",children:"Ubuntu Community — UFW (Uncomplicated Firewall)"})}),s.jsx("li",{children:s.jsx("a",{href:"https://ubuntu.com/server/docs/firewalls",target:"_blank",rel:"noopener noreferrer",children:"Ubuntu Docs — Firewalls"})}),s.jsxs("li",{children:[s.jsx("code",{children:"man ssh"}),", ",s.jsx("code",{children:"man sshd_config"}),", ",s.jsx("code",{children:"man ssh_config"}),","," ",s.jsx("code",{children:"man ssh-keygen"}),", ",s.jsx("code",{children:"man ufw"})]})]})]})}function zv(){return s.jsxs(le,{title:"A História do Ubuntu",subtitle:"De um sonho sul-africano ao Linux mais popular do mundo — a trajetória do Ubuntu, do lançamento em 2004 até hoje.",difficulty:"iniciante",timeToRead:"10 min",children:[s.jsxs("p",{children:["Ubuntu. A palavra vem de um conceito filosófico africano que se traduz aproximadamente como",s.jsx("em",{children:'"Eu sou porque nós somos"'})," ou ",s.jsx("em",{children:'"Humanidade para os outros"'}),". Em 2004, um bilionário sul-africano decidiu que esse nome seria o ideal para um novo sistema operacional Linux — gratuito, bonito, fácil de usar, e construído sobre os ombros de décadas de trabalho comunitário do software livre."]}),s.jsx("h2",{children:"O Começo: Mark Shuttleworth e a Canonical (2004)"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Mark Shuttleworth"}),", cofundador da empresa de segurança digital Thawte (vendida para a VeriSign por 575 milhões de dólares em 1999), financiou de seu próprio bolso o projeto Ubuntu. Em 2002, ele viajou para o espaço como o segundo turista espacial da história a bordo de um foguete russo Soyuz — um detalhe que diz muito sobre sua personalidade visionária."]}),s.jsxs("p",{children:["Em 2004, Shuttleworth fundou a ",s.jsx("strong",{children:"Canonical Ltd."}),", com sede em Londres, e reuniu um time de desenvolvedores de todo o mundo com um objetivo claro: criar uma distribuição Linux baseada no Debian que fosse simples de instalar, usar e manter — e que lançasse novas versões a cada seis meses, com suporte de longo prazo (LTS) a cada dois anos."]}),s.jsxs(G,{type:"info",title:"A base: Debian",children:["O Ubuntu é construído sobre o ",s.jsx("strong",{children:"Debian"}),", uma das distribuições Linux mais antigas e respeitadas (criada em 1993). O Ubuntu herdou o formato de pacotes ",s.jsx("code",{children:".deb"})," e o gerenciador APT, mas adicionou um ciclo de lançamento previsível, uma equipe profissional de suporte e um foco intenso na experiência do usuário."]}),s.jsx("h2",{children:'O Primeiro Lançamento: Ubuntu 4.10 "Warty Warthog" (2004)'}),s.jsxs("p",{children:["Em 20 de outubro de 2004, o Ubuntu 4.10 foi lançado. O número da versão segue o padrão",s.jsx("strong",{children:"Ano.Mês"}),', então 4.10 significa outubro de 2004. O codinome "Warty Warthog" (Javali Verrugoso) inaugurou a tradição de codinomes com animais em ordem alfabética.']}),s.jsxs("p",{children:["A proposta era ousada: qualquer pessoa no mundo podia solicitar CDs físicos do Ubuntu gratuitamente pelo correio, através do programa ",s.jsx("strong",{children:"ShipIt"}),". A Canonical enviou milhões de CDs para mais de 100 países — um investimento massivo para popularizar o Linux."]}),s.jsx("h2",{children:"A Tradição dos Codinomes"}),s.jsx("p",{children:"Cada versão do Ubuntu recebe um codinome com duas palavras começando com a mesma letra do alfabeto, sendo um adjetivo e um animal. A sequência é sempre em ordem alfabética:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"4.10"})," — Warty Warthog (W de... começando no W para dar margem)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"5.04"})," — Hoary Hedgehog"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"6.06 LTS"})," — Dapper Drake (primeiro LTS com 3 anos de suporte)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"8.04 LTS"})," — Hardy Heron"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"10.04 LTS"})," — Lucid Lynx"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"12.04 LTS"})," — Precise Pangolin"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"14.04 LTS"})," — Trusty Tahr"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"16.04 LTS"})," — Xenial Xerus"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"18.04 LTS"})," — Bionic Beaver"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"20.04 LTS"})," — Focal Fossa"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"22.04 LTS"})," — Jammy Jellyfish"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"24.04 LTS"})," — Noble Numbat"]})]}),s.jsx("h2",{children:"Marcos Históricos"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"2006 — Ubuntu 6.06 LTS (Dapper Drake):"})," Primeiro lançamento LTS com 3 anos de suporte para desktop e 5 para servidor. Estabeleceu o Ubuntu como opção séria para empresas."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"2010 — Unity:"})," A Canonical lançou a interface Unity, um ambiente gráfico exclusivo desenvolvido para o Ubuntu, substituindo o GNOME 2. Foi controverso mas trouxe inovações importantes como a HUD (Head-Up Display) e o Dash."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"2013 — Ubuntu para Tablets e Celulares:"})," A Canonical tentou entrar no mercado mobile com o Ubuntu Touch. O projeto foi descontinuado em 2017, mas a comunidade o mantém vivo no projeto UBports."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"2017 — Retorno ao GNOME:"})," O Ubuntu 17.10 abandonou o Unity e voltou ao GNOME como ambiente padrão. Uma mudança histórica que reconheceu a força da comunidade GNOME e permitiu maior padronização com outras distribuições."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"2018 — Ubuntu 18.04 LTS (Bionic Beaver):"})," Um dos lançamentos LTS mais importantes, com suporte de 10 anos para servidores via ESM (Extended Security Maintenance). Adotado massivamente por empresas ao redor do mundo."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"2022 — Ubuntu 22.04 LTS (Jammy Jellyfish):"})," Trouxe o GNOME 42, Wayland como sessão padrão, e melhorias significativas de desempenho."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"2024 — Ubuntu 24.04 LTS (Noble Numbat):"})," GNOME 46, kernel Linux 6.8, melhorias de segurança com AppArmor 4, e suporte até 2029 (ou 2034 com ESM)."]})]}),s.jsxs(G,{type:"success",title:"O Ecossistema Ubuntu",children:['A popularidade do Ubuntu deu origem a toda uma família de distribuições "sabores" (flavours) oficiais e derivadas:',s.jsxs("ul",{className:"mt-2 mb-0",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Kubuntu:"})," Ubuntu com KDE Plasma em vez de GNOME"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Xubuntu:"})," Ubuntu com XFCE — leve e ideal para PCs antigos"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu MATE:"})," Ubuntu com MATE (fork do GNOME 2) — clássico e familiar"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Studio:"})," Ubuntu para produção criativa (áudio, vídeo, gráficos)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Linux Mint:"})," Derivada muito popular focada em facilidade de uso extrema"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Pop!_OS:"})," Desenvolvida pela System76, focada em desenvolvedores e gamers"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"elementary OS:"})," Visual inspirado no macOS, foco em elegância"]})]})]}),s.jsx("h2",{children:"O Ubuntu Hoje"}),s.jsxs("p",{children:["Em 2025, o Ubuntu é instalado em mais de ",s.jsx("strong",{children:"40 milhões de computadores"}),", é o sistema operacional Linux mais popular do mundo e lidera o mercado de servidores em nuvem (Amazon AWS, Google Cloud, Microsoft Azure). É a distribuição recomendada por padrão na maioria dos tutoriais de programação, containers Docker e guias de DevOps."]}),s.jsx("p",{children:"A Canonical, agora com mais de 700 funcionários em todo o mundo, continua financiando o desenvolvimento com suporte empresarial, Kubernetes gerenciado (MicroK8s), Ubuntu Core para dispositivos IoT, e muito mais. O Ubuntu permanece gratuito e de código aberto para todos."})]})}function Uv(){return s.jsxs(le,{title:"Filosofia Ubuntu",subtitle:"'Eu sou porque nós somos' — software livre, comunidade e o modelo único da Canonical que une negócios e código aberto.",difficulty:"iniciante",timeToRead:"8 min",children:[s.jsx("p",{children:"O Ubuntu nasceu de uma visão filosófica muito específica: que software de qualidade deve ser acessível a todos, independente de condição financeira, idioma ou localização geográfica. Essa visão ainda guia cada decisão de design e desenvolvimento do Ubuntu."}),s.jsx("h2",{children:"O Ubuntu Way: Os Princípios Fundamentais"}),s.jsx("h3",{children:"1. Software Livre e Gratuito Para Todos"}),s.jsxs("p",{children:['O Ubuntu é e sempre será gratuito para baixar, usar, distribuir e modificar. A Canonical acredita que o software livre é um bem público — como estradas e praças — que deve estar disponível a todos. Isso é diferente de "freeware": o Ubuntu não é apenas grátis, é',s.jsx("strong",{children:" livre"})," (open source), o que significa que você pode ver, estudar e modificar o código."]}),s.jsx(G,{type:"info",title:"Diferença entre grátis e livre",children:'"Grátis" (free as in beer) = sem custo financeiro. "Livre" (free as in freedom) = você tem as liberdades de usar, estudar, modificar e redistribuir. O Ubuntu é ambos. Algumas distribuições são grátis mas não livres (ex: software proprietário gratuito). O Ubuntu é livre E gratuito.'}),s.jsx("h3",{children:"2. Ubuntu é Amigável ao Usuário por Princípio"}),s.jsxs("p",{children:['Enquanto o Arch Linux orgulhosamente declara ser "user-centric" (para usuários avançados), o Ubuntu tem como missão explícita ser ',s.jsx("strong",{children:"user-friendly"})," — amigável a qualquer pessoa, do estudante ao idoso. Isso significa:"]}),s.jsxs("ul",{children:[s.jsx("li",{children:"Instalador gráfico com botões grandes e linguagem simples"}),s.jsx("li",{children:"Hardware detectado automaticamente (Wi-Fi, Bluetooth, impressoras)"}),s.jsx("li",{children:"Aplicativos úteis pré-instalados (LibreOffice, Firefox, apps de mídia)"}),s.jsx("li",{children:"Atualizações automáticas de segurança configuradas por padrão"}),s.jsx("li",{children:"Drivers proprietários (NVIDIA, Wi-Fi) disponíveis com um clique"})]}),s.jsx("h3",{children:"3. Ubuntu para Todas as Pessoas"}),s.jsxs("p",{children:["O Ubuntu tem um compromisso formal com ",s.jsx("strong",{children:"acessibilidade"}),". O sistema inclui:"]}),s.jsxs("ul",{children:[s.jsx("li",{children:"Leitor de tela Orca (para usuários com deficiência visual)"}),s.jsx("li",{children:"Zoom de tela, alto contraste, fontes grandes configuráveis no GNOME"}),s.jsx("li",{children:"Tradução em mais de 70 idiomas (incluindo português brasileiro completo)"}),s.jsx("li",{children:"Teclado na tela para quem não pode usar teclado físico"})]}),s.jsx("h3",{children:"4. Pragmatismo: Software Proprietário é Bem-vindo"}),s.jsx("p",{children:"Ao contrário do Debian (que tem regras muito rígidas sobre software livre) ou do Fedora, o Ubuntu adota uma posição pragmática: se o software proprietário melhora a experiência do usuário, ele é bem-vindo. Por isso:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Drivers NVIDIA, AMD e de Wi-Fi proprietários podem ser instalados com um clique"}),s.jsx("li",{children:"Codecs de mídia (MP3, H.264) podem ser instalados durante a instalação"}),s.jsx("li",{children:"O Ubuntu incluía Flash Player e Java da Oracle quando eram relevantes"}),s.jsx("li",{children:"A Snap Store oferece aplicativos proprietários como Spotify, Slack, VS Code"})]}),s.jsx("h3",{children:"5. Ciclo de Lançamento Previsível"}),s.jsxs("p",{children:["Uma das maiores vantagens do Ubuntu é o ciclo de lançamento ",s.jsx("strong",{children:"previsível e garantido"}),":"]}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"A cada 6 meses"}),": Nova versão (April e October) com 9 meses de suporte"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"A cada 2 anos"}),": Versão LTS (Long-Term Support) com ",s.jsx("strong",{children:"5 anos"})," de suporte gratuito"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Com ESM"}),": Até ",s.jsx("strong",{children:"10 anos"})," de atualizações de segurança para LTS"]})]}),s.jsx("p",{children:"Isso permite que empresas planejem com anos de antecedência. Um servidor Ubuntu 20.04 LTS instalado em 2020 receberá atualizações de segurança até 2025 (grátis) ou 2030 (com ESM)."}),s.jsx("h2",{children:"A Canonical: Empresa com Missão Open Source"}),s.jsx("p",{children:"A Canonical é uma empresa comercial com fins lucrativos, mas com um modelo de negócio incomum: o produto principal (Ubuntu) é gratuito, e a empresa ganha dinheiro com:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Pro/ESM"}),": Suporte estendido e patches de segurança para empresas"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Landscape"}),": Ferramenta de gerenciamento remoto de frotas de máquinas Ubuntu"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"MAAS (Metal as a Service)"}),": Provisioning de servidores bare-metal em escala"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Juju"}),": Orquestração de aplicações em nuvem"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Core"}),": Sistema mínimo para dispositivos IoT (robôs, câmeras, roteadores)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Suporte Empresarial"}),": Contratos de suporte 24/7 para grandes empresas"]})]}),s.jsx(G,{type:"success",title:"Ubuntu na Nuvem",children:"O Ubuntu é a imagem mais popular em todas as grandes nuvens: Amazon AWS, Google Cloud e Microsoft Azure. Mais de 50% das instâncias Linux na AWS rodam Ubuntu. Isso não é acidente — é resultado de anos de investimento da Canonical em otimizações para ambiente cloud, integração com Kubernetes e suporte empresarial de qualidade."}),s.jsx("h2",{children:"Comunidade e Governança"}),s.jsx("p",{children:"O Ubuntu tem uma estrutura de governança transparente:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Community Council"}),": Governa a comunidade Ubuntu, resolve conflitos e mantém o Código de Conduta"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Technical Board"}),": Decide questões técnicas e de arquitetura do sistema"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Members"}),": Contribuidores reconhecidos pela comunidade com acesso a recursos e votação"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"MOTU (Masters of the Universe)"}),": Desenvolvedores que mantêm o repositório Universe"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Developers"}),": Desenvolvedores com acesso de upload aos repositórios principais"]})]}),s.jsx("p",{children:'O Código de Conduta do Ubuntu é um dos mais citados no software livre: "Seja solidário, seja respeitoso, seja colaborativo, seja pragmático, apoie outros no Ubuntu."'}),s.jsxs(G,{type:"warning",title:"Ubuntu vs Arch: Filosofias Opostas",children:["Enquanto o Arch Linux é minimalista, voltado para usuários avançados que querem construir seu sistema peça por peça, o Ubuntu é maximalista no sentido de conforto: ele vem com tudo que a maioria dos usuários precisa já configurado. Não há certo ou errado — são filosofias diferentes para necessidades diferentes. O Ubuntu é ideal para quem quer ",s.jsx("em",{children:"usar"}),"o computador; o Arch é ideal para quem quer ",s.jsx("em",{children:"entender"})," o computador."]})]})}function Dv(){return s.jsxs(le,{title:"Guia de Instalação do Ubuntu",subtitle:"Instalação completa do Ubuntu Desktop e Server — do pen drive bootável até o primeiro login, passo a passo.",difficulty:"iniciante",timeToRead:"30 min",children:[s.jsx("p",{children:"Instalar o Ubuntu é um dos processos mais simples no mundo Linux. Diferente do Arch Linux (que exige linha de comando pura), o Ubuntu tem um instalador gráfico intuitivo com botões grandes e linguagem clara. Este guia cobre Ubuntu 24.04 LTS (Noble Numbat) tanto para Desktop quanto para Server."}),s.jsx("h2",{children:"Pré-Requisitos"}),s.jsxs("ul",{children:[s.jsxs("li",{children:["Pen drive de pelo menos ",s.jsx("strong",{children:"4GB"})," (será formatado)"]}),s.jsx("li",{children:"Conexão com internet (recomendado durante a instalação)"}),s.jsx("li",{children:"PC com boot UEFI ou BIOS legada"}),s.jsx("li",{children:"Mínimo: 25GB de disco, 4GB RAM. Recomendado: 50GB+ disco, 8GB RAM"}),s.jsx("li",{children:"Backup de todos os dados importantes — a instalação pode apagar dados"})]}),s.jsx("h2",{children:"1. Baixar a ISO"}),s.jsxs("p",{children:["Acesse ",s.jsx("code",{children:"ubuntu.com/download"})," e baixe a versão desejada:"]}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Desktop"}),": Para uso pessoal com interface gráfica. Arquivo ~5GB."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Server"}),": Para servidores, sem interface gráfica. Arquivo ~2GB."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu LTS"}),": Versão de suporte longo (5 anos). Recomendado para todos."]})]}),s.jsxs(G,{type:"success",title:"Verifique o checksum SHA256",children:["Após baixar, verifique a integridade do arquivo para garantir que não foi corrompido:",s.jsx("code",{children:"sha256sum ubuntu-24.04-desktop-amd64.iso"})," e compare com o hash no site oficial."]}),s.jsx("h2",{children:"2. Criar o Pen Drive Bootável"}),s.jsx("h3",{children:"No Linux"}),s.jsx(v,{title:"Gravar ISO no pen drive (Linux)",code:`# Descobrir o dispositivo do pen drive
lsblk
# Identifique pelo tamanho. Exemplo: /dev/sdb (14.5G)

# Desmontar se estiver montado
sudo umount /dev/sdb1

# Gravar a ISO
sudo dd bs=4M if=ubuntu-24.04-desktop-amd64.iso \\
    of=/dev/sdb status=progress oflag=sync

# Alternativa mais rápida com pv:
sudo apt install pv
pv ubuntu-24.04-desktop-amd64.iso | sudo dd bs=4M of=/dev/sdb oflag=sync`}),s.jsx("h3",{children:"No Windows ou macOS"}),s.jsxs("p",{children:["Use o ",s.jsx("strong",{children:"balenaEtcher"})," (",s.jsx("code",{children:"etcher.balena.io"}),") — selecione a ISO, selecione o pen drive, clique em Flash. É simples assim. Outra opção no Windows é o ",s.jsx("strong",{children:"Rufus"})," (",s.jsx("code",{children:"rufus.ie"}),")."]}),s.jsx("h2",{children:"3. Dar Boot pelo Pen Drive"}),s.jsx("p",{children:"Insira o pen drive, reinicie o computador e entre no menu de boot:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"ASUS"}),": F8 ou ESC"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Acer"}),": F12"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Dell"}),": F12"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"HP"}),": F9 ou ESC"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Lenovo"}),": F12 ou Fn+F12"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"MSI"}),": F11"]})]}),s.jsxs("p",{children:["Se o pen drive não aparecer, desabilite o ",s.jsx("strong",{children:"Secure Boot"})," na BIOS/UEFI (normalmente em Security → Secure Boot → Disabled)."]}),s.jsx("h2",{children:"4. Instalação do Ubuntu Desktop"}),s.jsx("h3",{children:"Tela de Boas-Vindas"}),s.jsxs("p",{children:["Após o boot, você pode escolher ",s.jsx("strong",{children:'"Try Ubuntu"'})," (testar sem instalar) ou",s.jsx("strong",{children:'"Install Ubuntu"'}),". Escolha instalar. Selecione o idioma ",s.jsx("strong",{children:"Português (Brasil)"}),' e clique em "Instalar Ubuntu".']}),s.jsx("h3",{children:"Configurações Iniciais"}),s.jsx(v,{title:"Telas do instalador Ubuntu 24.04",code:`Tela 1: Tipo de teclado
  → Português (Brasil) — ABNT2 com Ç
  → Clique em "Identificar Teclado" se não souber o layout

Tela 2: Atualizações e outros programas
  → "Instalação Normal" = inclui navegador, software de escritório, apps de mídia
  → "Instalação Mínima" = apenas o básico (navegador e utilitários)
  ✓ "Baixar atualizações ao instalar o Ubuntu"
  ✓ "Instalar software de terceiros" (drivers proprietários NVIDIA, Wi-Fi, codecs)

Tela 3: Tipo de instalação (MAIS IMPORTANTE)
  → "Apagar disco e instalar o Ubuntu" (mais simples, apaga tudo)
  → "Instalar ao lado do Windows" (dual-boot automático)
  → "Outra opção" (particionamento manual — avançado)

  Opções avançadas (se aparecer):
  ✓ "Usar LVM" — gerenciamento de volumes lógicos (recomendado)
  ✓ "Criptografar disco" — solicita senha a cada boot`}),s.jsxs(G,{type:"danger",title:"Atenção ao particionamento!",children:['A opção "Apagar disco e instalar o Ubuntu" vai apagar ',s.jsx("strong",{children:"tudo no disco"}),'. Se você tem Windows ou outros dados, escolha "Instalar ao lado do Windows" para dual-boot, ou faça backup antes de prosseguir.']}),s.jsx("h3",{children:"Particionamento Manual (Opção Avançada)"}),s.jsx(v,{title:"Esquema de partições recomendado",code:`# Para um disco de 250GB com UEFI:

/dev/sda1  →  512MB  →  EFI System Partition  →  fat32  →  /boot/efi
/dev/sda2  →  2GB    →  Linux swap             →  swap
/dev/sda3  →  50GB   →  Raiz do sistema        →  ext4   →  /
/dev/sda4  →  197GB  →  Arquivos pessoais       →  ext4   →  /home

# Ter /home separado é vantajoso: se precisar reinstalar o sistema,
# seus arquivos em /home ficam intactos.

# Para discos menores (ex: 60GB SSD):
/dev/sda1  →  512MB  →  EFI   →  fat32  →  /boot/efi
/dev/sda2  →  2GB    →  swap
/dev/sda3  →  57GB   →  /     →  ext4   →  /`}),s.jsx("h3",{children:"Informações Pessoais"}),s.jsx(v,{title:"Configuração de usuário",code:`Nome completo: João Silva
Nome do computador: ubuntu-joao    # sem espaços, preferência por hífens
Nome de usuário: joao              # tudo minúsculo, sem espaços
Senha: ••••••••                   # use uma senha forte

Opções de login:
○ Fazer login automaticamente     # Conveniente mas menos seguro
● Solicitar senha para entrar      # Recomendado`}),s.jsxs("p",{children:["A instalação começa e leva entre 10-20 minutos dependendo da velocidade do disco e da internet. Ao final, clique em ",s.jsx("strong",{children:'"Reiniciar"'})," e remova o pen drive quando solicitado."]}),s.jsx("h2",{children:"5. Instalação do Ubuntu Server"}),s.jsxs("p",{children:["O Ubuntu Server usa o instalador ",s.jsx("strong",{children:"Subiquity"}),", uma interface de texto (não gráfica) que funciona em qualquer servidor."]}),s.jsx(v,{title:"Etapas do instalador Ubuntu Server",code:`# Tela 1: Idioma
  → Escolha English (o Server é frequentemente gerenciado em inglês)
  → Ou Português do Brasil se preferir

# Tela 2: Tipo de teclado
  → Layout: Portuguese (Brazil)
  → Variant: Portuguese (Brazil, eliminate dead keys) [ABNT2]

# Tela 3: Tipo de instalação
  → Ubuntu Server (padrão)
  → Ubuntu Server (minimized) — para containers e VMs

# Tela 4: Configuração de rede
  → Se cabo ethernet: detecta automaticamente via DHCP
  → Se Wi-Fi: selecione a rede e digite a senha

# Tela 5: Proxy HTTP
  → Deixe em branco se não tiver proxy corporativo

# Tela 6: Mirror do Ubuntu
  → O instalador testa e seleciona o mais rápido automaticamente
  → Pode deixar o padrão

# Tela 7: Armazenamento (Particionamento)
  → "Use entire disk" = usar o disco todo (recomendado)
  → "Use entire disk with LVM" = com gerenciamento de volumes
  → "Custom storage layout" = manual

# Tela 8: Perfil (Usuário)
  → Seu nome, nome do servidor, usuário, senha

# Tela 9: Ubuntu Pro (opcional)
  → Pode pular clicando em "Skip for now"
  → Ubuntu Pro oferece ESM (Extended Security Maintenance)

# Tela 10: Pacotes extras
  ✓ OpenSSH server ← MARQUE ESTE para poder acessar remotamente!
  □ Various snaps (selecione se quiser Docker, etc)

# Instalação começa automaticamente. Ao final: Reboot.`}),s.jsxs(G,{type:"warning",title:"OpenSSH no Server é essencial!",children:["Na instalação do Ubuntu Server, ",s.jsx("strong",{children:"marque OpenSSH server"}),". Sem ele, você não conseguirá acessar o servidor remotamente via SSH. Se esquecer, instale depois:",s.jsx("code",{children:"sudo apt install openssh-server"})]}),s.jsx("h2",{children:"6. Primeiras Verificações Após Instalar"}),s.jsx(v,{title:"Verificações pós-instalação",code:`# Verificar versão do Ubuntu instalada
lsb_release -a
# Distributor ID: Ubuntu
# Description:    Ubuntu 24.04.1 LTS
# Release:        24.04
# Codename:       noble

# Verificar kernel
uname -r
# 6.8.0-31-generic

# Verificar espaço em disco
df -h

# Verificar memória RAM disponível
free -h

# Verificar internet
ping -c 3 google.com

# Atualizar o sistema antes de mais nada
sudo apt update && sudo apt upgrade -y`})]})}function Cv(){return s.jsxs(le,{title:"Primeiros Passos Pós-Instalação",subtitle:"Acabou de instalar o Ubuntu? Configure drivers, repositórios, idioma e aplicativos essenciais para ter um sistema completo.",difficulty:"iniciante",timeToRead:"20 min",children:[s.jsx("p",{children:"Parabéns pela instalação! O Ubuntu já vem bastante completo, mas há algumas configurações importantes a fazer logo após a primeira inicialização. Siga estes passos em ordem para garantir um sistema atualizado, com todos os drivers corretos e as ferramentas que você vai usar no dia a dia."}),s.jsx("h2",{children:"1. Atualizar o Sistema Completamente"}),s.jsx("p",{children:"A primeira coisa sempre é atualizar — a ISO que você usou para instalar pode ter algumas semanas de atraso. Garanta que tudo está na versão mais recente:"}),s.jsx(v,{title:"Atualização completa do sistema",code:`# Atualizar a lista de pacotes disponíveis
sudo apt update
# Não instala nada — apenas verifica o que há de novo nos repositórios.

# Instalar todas as atualizações disponíveis
sudo apt upgrade -y
# -y (ou --yes) = responde "sim" automaticamente para todas as confirmações.
# Sem o -y, o apt pergunta "Deseja continuar? [S/n]" antes de cada ação.

# Atualizar também pacotes que requerem remover outros (mudanças maiores)
sudo apt full-upgrade -y
# full-upgrade vai além do upgrade: pode instalar E remover pacotes se necessário.
# Necessário para atualizar o kernel e pacotes com mudanças de dependências.

# Remover pacotes que não são mais necessários
sudo apt autoremove -y
# Com o tempo, pacotes que eram dependências de outros ficam "órfãos".
# autoremove os identifica e remove automaticamente.

# Limpar cache de pacotes baixados (libera espaço em disco)
sudo apt autoclean
# autoclean remove apenas versões ANTIGAS dos .deb do cache.
# Usa apt clean (sem "auto") para apagar o cache inteiro.`}),s.jsxs(G,{type:"info",title:"apt update vs apt upgrade",children:[s.jsx("code",{children:"apt update"})," apenas atualiza a ",s.jsx("em",{children:"lista"})," de pacotes disponíveis (como verificar se há atualizações). Não instala nada. ",s.jsx("code",{children:"apt upgrade"})," de fato instala as atualizações. Sempre faça os dois juntos."]}),s.jsx("h2",{children:"2. Instalar Drivers de Hardware"}),s.jsx("h3",{children:"Driver NVIDIA (GPU dedicada)"}),s.jsx(v,{title:"Instalar drivers NVIDIA recomendados",code:`# Verificar se tem GPU NVIDIA conectada
lspci | grep -i nvidia
# lspci = listar dispositivos PCI (placa de vídeo, placa de rede, etc.)
# | = pipe: passa a saída do lspci como entrada do grep
# grep = filtrar linhas que contêm um texto
# -i = case insensitive (encontrar "NVIDIA", "nvidia", "Nvidia" — qualquer capitalização)

# Método 1: Via utilitário de drivers adicionais (recomendado)
sudo ubuntu-drivers autoinstall
# ubuntu-drivers detecta seu hardware e instala o driver mais adequado automaticamente.

# Método 2: Instalar versão específica manualmente
# Ver drivers disponíveis:
ubuntu-drivers devices
# == /sys/devices/pci0000:00/0000:00:02.0 ==
# modalias : pci:v000010DEd...
# driver   : nvidia-driver-550 - distro non-free recommended ← instale este
# driver   : nvidia-driver-535 - distro non-free

sudo apt install nvidia-driver-550

# Após instalar qualquer driver NVIDIA, o reboot é obrigatório!
sudo reboot

# Verificar se o driver foi carregado corretamente:
nvidia-smi
# smi = System Management Interface — mostra GPU, temperatura, uso de VRAM`}),s.jsx("h3",{children:"Driver Wi-Fi Proprietário"}),s.jsx(v,{title:"Instalar drivers de Wi-Fi",code:`# Verificar adaptador Wi-Fi
lspci | grep -i wireless
# -i = ignorar diferença entre maiúsculas e minúsculas na busca
lsusb | grep -i wireless
# lsusb = listar dispositivos USB (adaptadores Wi-Fi USB aparecem aqui)

# Se o Wi-Fi não funcionar, abra:
# Configurações → Software e Atualizações → Drivers Adicionais
# O Ubuntu detecta e lista os drivers proprietários disponíveis para seu hardware.

# Ou via terminal, para Broadcom (comum em notebooks):
sudo apt install broadcom-sta-dkms
# dkms = Dynamic Kernel Module Support (recompila o driver automaticamente
# para cada nova versão do kernel — você não precisa reinstalar manualmente)

# Após instalar:
sudo modprobe -r b43          # -r = remove o módulo antigo do kernel
sudo modprobe wl              # carrega o novo módulo (driver Broadcom)`}),s.jsx("h2",{children:"3. Configurar Idioma e Fuso Horário"}),s.jsx(v,{title:"Configurar localização completa",code:`# Verificar configuração atual de idioma e fuso horário
locale        # Mostra as configurações de idioma
timedatectl   # Mostra fuso horário e hora atual

# Configurar fuso horário de São Paulo (GMT-3):
sudo timedatectl set-timezone America/Sao_Paulo

# Outros fusos horários brasileiros:
sudo timedatectl set-timezone America/Manaus      # Amazonas (GMT-4)
sudo timedatectl set-timezone America/Belem       # Pará (GMT-3)
sudo timedatectl set-timezone America/Fortaleza   # Ceará (GMT-3)

# Ativar sincronização automática de hora via NTP:
sudo timedatectl set-ntp true
# NTP = Network Time Protocol — sincroniza o relógio com servidores de tempo na internet
# true = habilitar | false = desabilitar

# Verificar resultado:
timedatectl status`}),s.jsx("h2",{children:"4. Instalar Pacotes Essenciais"}),s.jsx(v,{title:"Ferramentas essenciais para qualquer instalação",code:`# A \\ (barra invertida) no final de cada linha significa "continuar na próxima linha".
# É apenas uma forma de deixar o comando mais legível — tudo é um único comando.

sudo apt install -y \\
    build-essential   \\
    # build-essential = grupo de ferramentas de compilação: gcc, make, g++
    # necessário para compilar programas a partir do código-fonte e instalar alguns pacotes

    git               \\
    # git = sistema de controle de versão (essencial para desenvolvimento)

    curl wget         \\
    # curl e wget = baixar arquivos pela internet via terminal
    # curl = mais versátil (suporta APIs, cookies, etc.)
    # wget = mais simples, ótimo para downloads diretos

    vim nano          \\
    # vim e nano = editores de texto no terminal
    # nano = mais simples, ideal para iniciantes
    # vim = poderoso e eficiente, curva de aprendizado maior

    htop btop         \\
    # htop e btop = monitores de sistema interativos (CPU, RAM, processos)
    # são versões visuais e coloridas do comando "top"

    net-tools         \\
    # net-tools = pacote com ifconfig, netstat e outras ferramentas de rede clássicas

    openssh-server    \\
    # openssh-server = servidor SSH, permite acessar este computador remotamente

    ufw               \\
    # ufw = Uncomplicated Firewall — interface simplificada para configurar firewall

    unzip p7zip-full  \\
    # unzip = descompactar arquivos .zip
    # p7zip-full = suporte ao formato .7z (7-Zip)

    tree              \\
    # tree = listar diretórios em formato visual de árvore

    rsync             \\
    # rsync = sincronizar arquivos entre diretórios ou computadores
    # muito usado para backups incrementais (copia apenas o que mudou)

    tldr              \\
    # tldr = "Too Long; Didn't Read" — resumo prático dos manuais de comandos
    # alternativa rápida ao "man" para ver exemplos comuns de uso

    bash-completion   \\
    # bash-completion = autocomplete inteligente no terminal
    # pressione Tab e o bash completa comandos, nomes de pacotes, opções, etc.

    software-properties-common
    # necessário para usar o comando add-apt-repository (adicionar repositórios PPA)`}),s.jsx("h2",{children:"5. Habilitar Repositórios Extras"}),s.jsx(v,{title:"Ativar repositórios universe, multiverse e restricted",code:`# Verificar repositórios ativos:
cat /etc/apt/sources.list
# cat = mostrar o conteúdo de um arquivo na tela

# Habilitar repositórios adicionais:
sudo add-apt-repository universe
# universe = pacotes open source mantidos pela comunidade (não pela Canonical)

sudo add-apt-repository multiverse
# multiverse = software proprietário ou com restrições legais (ex: codecs MP3, MP4)

sudo add-apt-repository restricted
# restricted = drivers proprietários (NVIDIA, Wi-Fi Broadcom, etc.)

# Atualizar a lista após adicionar repositórios:
sudo apt update
# Sempre necessário após adicionar um repositório novo!

# Instalar codecs de multimídia (MP3, H.264, AAC, etc.):
sudo apt install ubuntu-restricted-extras
# ubuntu-restricted-extras = pacote que instala os codecs mais comuns
# necessário para reproduzir a maioria dos vídeos e músicas`}),s.jsx(G,{type:"info",title:"O que são esses repositórios?",children:s.jsxs("ul",{className:"mt-1 mb-0",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"main"}),": Pacotes livres suportados oficialmente pela Canonical (já ativo por padrão)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"universe"}),": Pacotes livres mantidos pela comunidade (sem garantia de suporte)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"restricted"}),": Drivers proprietários necessários para hardware específico"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"multiverse"}),": Software com restrições de uso (copyright, patentes)"]})]})}),s.jsx("h2",{children:"6. Configurar o Firewall (UFW)"}),s.jsx(v,{title:"Configuração básica do UFW",code:`# O UFW já vem instalado no Ubuntu. Verificar status:
sudo ufw status
# Status: inactive  ← desabilitado por padrão

# Configurar política padrão (fazer ANTES de habilitar):
sudo ufw default deny incoming
# deny = negar/bloquear
# incoming = conexões que chegam de fora ao seu computador

sudo ufw default allow outgoing
# allow = permitir
# outgoing = conexões que saem do seu computador para a internet

# Permitir SSH (acesso remoto) — faça isso ANTES de habilitar se for usar SSH:
sudo ufw allow ssh
# Equivalente a: sudo ufw allow 22/tcp
# ssh é um "alias" que o UFW já conhece (porta 22, protocolo TCP)

# Habilitar o firewall:
sudo ufw enable

# Verificar regras ativas:
sudo ufw status verbose
# verbose = modo detalhado (mostra mais informações do que o status simples)`}),s.jsx("h2",{children:"7. Atualizações Automáticas de Segurança"}),s.jsx(v,{title:"Unattended Upgrades (atualizações automáticas)",code:`# Verificar se está instalado:
dpkg -l unattended-upgrades
# dpkg = gerenciador de pacotes de baixo nível
# -l = list (listar pacotes instalados)

# Instalar e configurar:
sudo apt install unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
# --priority=low = mostrar todas as perguntas de configuração (não pular nenhuma)
# dpkg-reconfigure = refazer as perguntas de configuração de um pacote

# Verificar configuração:
cat /etc/apt/apt.conf.d/20auto-upgrades
# O arquivo deve conter:
# APT::Periodic::Update-Package-Lists "1";   ← atualizar lista diariamente
# APT::Periodic::Unattended-Upgrade "1";    ← instalar atualizações de segurança`}),s.jsx("h2",{children:"8. Instalar Aplicativos do Dia a Dia"}),s.jsx(v,{title:"Aplicativos comuns para Ubuntu Desktop",code:`# Navegadores
sudo apt install chromium-browser      # Chromium: versão open-source do Chrome

# Snaps: pacotes independentes do sistema que incluem suas próprias dependências
sudo snap install brave                # Brave: focado em privacidade
# snap install = equivalente ao apt install, mas para pacotes Snap

# Comunicação
sudo snap install discord
sudo snap install telegram-desktop

# Desenvolvimento
sudo snap install code --classic       # VS Code
# --classic = acesso irrestrito ao sistema (necessário para IDEs e editores de código)
# sem --classic, snaps ficam isolados do sistema de arquivos

sudo apt install git gitk git-gui

# Multimídia
sudo apt install vlc                   # VLC: player de vídeo e áudio completo
sudo apt install gimp                  # GIMP: editor de imagens (alternativa ao Photoshop)
sudo snap install spotify              # Spotify: streaming de música

# Utilitários
sudo apt install gparted               # GParted: editor gráfico de partições de disco
sudo apt install timeshift             # Timeshift: backup e restauração do sistema`})]})}function wv(){return s.jsxs(le,{title:"GNOME & Desktop Ubuntu",subtitle:"Configurando, personalizando e dominando o GNOME — o ambiente gráfico padrão do Ubuntu.",difficulty:"iniciante",timeToRead:"20 min",children:[s.jsxs("p",{children:["O Ubuntu usa o ",s.jsx("strong",{children:"GNOME"})," como ambiente gráfico padrão desde o Ubuntu 17.10. O GNOME (GNU Network Object Model Environment) é um dos ambientes de desktop mais modernos e polidos do Linux, com design limpo e foco em simplicidade. O Ubuntu customiza levemente o GNOME vanilla com sua própria estética laranja/roxa."]}),s.jsx("h2",{children:"GNOME: Conceitos Básicos"}),s.jsx("h3",{children:"Activities Overview"}),s.jsxs("p",{children:["Pressione a tecla ",s.jsx("strong",{children:"Super"}),' (tecla Windows) ou clique em "Activities" no canto superior esquerdo para abrir o Overview. Aqui você pode:']}),s.jsxs("ul",{children:[s.jsx("li",{children:"Ver todas as janelas abertas"}),s.jsx("li",{children:"Pesquisar aplicativos digitando diretamente"}),s.jsx("li",{children:"Navegar entre workspaces (áreas de trabalho)"}),s.jsx("li",{children:"Pesquisar arquivos, configurações e até fazer cálculos"})]}),s.jsx("h3",{children:"Atalhos de Teclado Essenciais"}),s.jsx(v,{title:"Atalhos do GNOME mais usados",code:`Super                  # Abrir Activities Overview
Super + A              # Ver todos os aplicativos (App Grid)
Super + H              # Minimizar janela atual
Super + D              # Mostrar área de trabalho
Super + F              # Colocar janela em tela cheia
Super + ←/→            # Encaixar janela à esquerda/direita (tile)
Super + ↑/↓            # Maximizar / Restaurar janela
Super + Shift + ←/→    # Mover janela para workspace anterior/próximo
Super + número         # Mudar para workspace específico
Alt + F4               # Fechar janela
Alt + Tab              # Alternar entre aplicativos abertos
Alt + \`               # Alternar entre janelas do mesmo app
Ctrl + Alt + T         # Abrir Terminal (no Ubuntu)
Ctrl + Alt + Del       # Menu de logout/reiniciar/desligar`}),s.jsx("h2",{children:"Configurações do Sistema"}),s.jsxs("p",{children:["O aplicativo ",s.jsx("strong",{children:"Configurações"}),' (Settings) é o painel de controle do Ubuntu. Acesse por: Activities → "Configurações" ou clique no menu do canto superior direito → ícone de chave.']}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Aparência"}),": Tema claro/escuro, cor de destaque, tamanho de ícones"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Monitores"}),": Resolução, taxa de atualização, múltiplos monitores"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Teclado"}),": Atalhos, layout de teclado, idioma de entrada"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Privacidade"}),": Histórico de arquivos, rastreamento, câmera, microfone"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Energia"}),": Suspensão, brilho, bateria (notebooks)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Usuários"}),": Gerenciar contas de usuário"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Sobre"}),": Informações do sistema, versão do Ubuntu, número de série do hardware"]})]}),s.jsx("h2",{children:"GNOME Tweaks: Personalizações Avançadas"}),s.jsxs("p",{children:["O ",s.jsx("strong",{children:"GNOME Tweaks"})," (anteriormente chamado de GNOME Tweak Tool) expõe configurações avançadas que não estão no painel de Configurações padrão."]}),s.jsx(v,{title:"Instalar GNOME Tweaks",code:`sudo apt install gnome-tweaks

# Abrir via Activities → "Tweaks" ou:
gnome-tweaks`}),s.jsx("p",{children:"O que você pode fazer com GNOME Tweaks:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Fontes"}),": Mudar fonte do sistema, tamanho, renderização"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Extensões"}),": Ativar/desativar extensões do GNOME"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Janelas"}),": Comportamento de maximização, botões da barra de título"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Área de trabalho"}),": Mostrar ícones na área de trabalho, lixeira"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Barra superior"}),": Mostrar dia da semana, segundos no relógio"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Inicialização"}),": Gerenciar aplicativos que iniciam com o sistema"]})]}),s.jsx("h2",{children:"Extensões do GNOME"}),s.jsx("p",{children:"As extensões do GNOME são pequenos complementos que adicionam funcionalidades ao shell. Você pode gerenciá-las pelo site oficial ou pela linha de comando."}),s.jsx(v,{title:"Gerenciar extensões",code:`# Instalar o gerenciador de extensões via GUI
sudo apt install gnome-shell-extensions
sudo apt install gnome-shell-extension-manager

# Ou instalar via snap:
sudo snap install extension-manager

# Extensões populares (instale pelo Extension Manager ou extensions.gnome.org):
# - Dash to Dock: Barra de tarefas fixa como no Windows/macOS
# - Blur my Shell: Efeito de desfoque na barra superior e Dash
# - GSConnect: Integração com smartphone (compartilhar arquivos, notificações)
# - Caffeine: Impede a tela de desligar quando você precisa (ex: vídeos)
# - Grand Theft Focus: Corrige janelas que aparecem em segundo plano
# - AppIndicator: Suporte a ícones de bandeja do sistema

# Listar extensões instaladas via linha de comando:
gnome-extensions list

# Habilitar/desabilitar extensão:
gnome-extensions enable nome-da-extensao@autor
gnome-extensions disable nome-da-extensao@autor`}),s.jsxs(G,{type:"info",title:"Site de extensões GNOME",children:["Visite ",s.jsx("code",{children:"extensions.gnome.org"}),' para descobrir, instalar e gerenciar extensões diretamente pelo navegador. Você precisa instalar a extensão do navegador "GNOME Shell integration" e ter o ',s.jsx("code",{children:"chrome-gnome-shell"})," instalado no sistema."]}),s.jsx("h2",{children:"Temas Visuais"}),s.jsx(v,{title:"Mudar tema GTK e ícones",code:`# Instalar coleção de temas populares
sudo apt install gnome-themes-extra
sudo apt install papirus-icon-theme
sudo apt install arc-theme

# Aplicar tema via GNOME Tweaks → Aparência
# Ou via linha de comando com gsettings:

# Mudar tema GTK
gsettings set org.gnome.desktop.interface gtk-theme 'Arc-Dark'

# Mudar tema de ícones
gsettings set org.gnome.desktop.interface icon-theme 'Papirus-Dark'

# Mudar cursor
gsettings set org.gnome.desktop.interface cursor-theme 'DMZ-White'

# Mudar fonte do sistema
gsettings set org.gnome.desktop.interface font-name 'Ubuntu 11'
gsettings set org.gnome.desktop.interface monospace-font-name 'Ubuntu Mono 13'

# Ativar tema escuro (Ubuntu 22.04+)
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'

# Voltar para tema claro
gsettings set org.gnome.desktop.interface color-scheme 'prefer-light'`}),s.jsx("h2",{children:"Workspaces (Áreas de Trabalho)"}),s.jsx(v,{title:"Configurar workspaces",code:`# Ver configuração atual de workspaces
gsettings get org.gnome.mutter dynamic-workspaces
# true = workspaces dinâmicos (criados automaticamente)
# false = número fixo de workspaces

# Fixar número de workspaces (ex: 4)
gsettings set org.gnome.mutter dynamic-workspaces false
gsettings set org.gnome.desktop.wm.preferences num-workspaces 4

# No GNOME Tweaks → Workspaces:
# - Static Workspaces: número fixo
# - Dynamic Workspaces: criados/removidos automaticamente

# Atalhos para workspaces:
# Super + número      → Ir para workspace N
# Super + Shift + número → Mover janela para workspace N
# Ctrl + Alt + ←/→   → Navegar entre workspaces (alternativo)`}),s.jsx("h2",{children:"Aplicativos Padrão do Ubuntu"}),s.jsx("p",{children:"O Ubuntu 24.04 LTS vem com os seguintes aplicativos pré-instalados:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Firefox"}),": Navegador web"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"LibreOffice"}),": Suite de escritório (Writer, Calc, Impress)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Thunderbird"}),": Cliente de e-mail"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Nautilus"}),": Gerenciador de arquivos (Files)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"GNOME Calendar"}),": Calendário"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"GNOME Photos"}),": Gerenciador de fotos"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Rhythmbox"}),": Player de música"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Shotwell"}),": Edição básica de fotos"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"GNOME Software"}),": Loja de aplicativos gráfica"]})]}),s.jsx("h2",{children:"Múltiplos Monitores"}),s.jsx(v,{title:"Configurar múltiplos monitores",code:`# Via interface gráfica:
# Configurações → Monitores

# Via linha de comando (xrandr - para sessões X11):
# Ver monitores disponíveis:
xrandr

# Exemplo de saída:
# Screen 0: minimum 8x8, current 3840x1080
# HDMI-1 connected 1920x1080+0+0
# DP-1 connected 1920x1080+1920+0

# Configurar resolução de um monitor:
xrandr --output HDMI-1 --mode 1920x1080 --rate 60

# Monitor secundário à direita do principal:
xrandr --output HDMI-1 --primary --output DP-1 --right-of HDMI-1

# Espelhar monitores:
xrandr --output DP-1 --same-as HDMI-1

# Para sessões Wayland (Ubuntu 22.04+), use o painel de Configurações
# pois o xrandr tem suporte limitado no Wayland`}),s.jsxs(G,{type:"warning",title:"X11 vs Wayland",children:["O Ubuntu 22.04+ usa ",s.jsx("strong",{children:"Wayland"}),' como sessão padrão, o que melhora segurança e suporte a displays de alta resolução. Alguns aplicativos mais antigos podem não funcionar perfeitamente no Wayland. Se precisar, você pode voltar ao X11 na tela de login: clique no ícone de engrenagem antes de fazer login e selecione "Ubuntu em Xorg".']}),s.jsx("h2",{children:"Desempenho e Recursos"}),s.jsx(v,{title:"Verificar uso de recursos do sistema gráfico",code:`# Ver uso de memória geral
free -h

# Ver processos do GNOME Shell
ps aux | grep gnome-shell

# Reiniciar o GNOME Shell sem fechar aplicativos (apenas X11):
# Alt + F2 → digitar "r" → Enter

# No Wayland, não é possível reiniciar o Shell sem sair da sessão.
# Faça logout e login novamente.

# Ver uso de GPU (se tiver NVIDIA):
nvidia-smi

# Para AMD e Intel:
sudo apt install intel-gpu-tools
sudo intel_gpu_top`})]})}function Nv(){return s.jsxs(le,{title:"APT — Gerenciador de Pacotes",subtitle:"O coração do Ubuntu. APT instala, remove, atualiza e gerencia todo o software do sistema com comandos simples e poderosos.",difficulty:"iniciante",timeToRead:"25 min",children:[s.jsxs("p",{children:["O ",s.jsx("strong",{children:"APT"})," (Advanced Package Tool) é o gerenciador de pacotes do Ubuntu e de todas as distribuições baseadas em Debian. Ele é responsável por instalar, remover e atualizar software, resolvendo dependências automaticamente. Com um único comando, você pode instalar um aplicativo completo com todas as bibliotecas que ele precisa."]}),s.jsx("h2",{children:"Os Comandos: apt vs apt-get"}),s.jsxs("p",{children:["Você vai encontrar dois comandos na documentação: ",s.jsx("code",{children:"apt"})," e ",s.jsx("code",{children:"apt-get"}),". O ",s.jsx("code",{children:"apt"})," é a versão moderna, com saída mais amigável e barra de progresso. O ",s.jsx("code",{children:"apt-get"})," é o clássico, mais estável para scripts. Para uso no terminal do dia a dia, use sempre ",s.jsx("code",{children:"apt"}),"."]}),s.jsxs(G,{type:"info",title:"O que é uma flag (parâmetro)?",children:["Flags são instruções extras passadas a um comando, sempre precedidas por ",s.jsx("code",{children:"-"}),"(flag curta, uma letra) ou ",s.jsx("code",{children:"--"})," (flag longa, palavra completa). Exemplo: ",s.jsx("code",{children:"apt install -y nginx"})," — o ",s.jsx("code",{children:"-y"})," é a flag, o ",s.jsx("code",{children:"nginx"}),"é o pacote. Flags modificam o comportamento do comando."]}),s.jsx("h2",{children:"1. Atualização do Sistema"}),s.jsx(v,{title:"Manter o sistema atualizado",code:`# PASSO 1: Atualizar a LISTA de pacotes disponíveis
sudo apt update
# Baixa informações dos repositórios sobre versões novas.
# Não instala nada — apenas "verifica o que há de novo".

# PASSO 2: Instalar as atualizações
sudo apt upgrade
# Instala versões mais novas dos pacotes já instalados.
# Vai perguntar "Deseja continuar? [S/n]" antes de instalar.

# A flag -y (ou --yes) responde "sim" automaticamente para todas as confirmações.
# Sem ela, o apt sempre pede confirmação antes de instalar ou remover.
sudo apt upgrade -y

# Fazer os dois de uma vez (a forma mais comum no dia a dia):
sudo apt update && sudo apt upgrade -y
# O && significa "execute o próximo comando SOMENTE se o anterior funcionou"

# PASSO AVANÇADO: Atualização completa (inclui mudanças de dependências)
sudo apt full-upgrade -y
# Pode instalar E remover pacotes se necessário.
# Necessário para grandes atualizações (ex: nova versão do kernel).

# Ver o que seria atualizado SEM instalar nada:
apt list --upgradable`}),s.jsxs(G,{type:"danger",title:"Sempre faça apt update antes de instalar",children:["Se você rodar ",s.jsx("code",{children:"sudo apt install alguma-coisa"})," sem antes fazer",s.jsx("code",{children:"sudo apt update"}),", pode instalar uma versão desatualizada do pacote ou receber erros de dependência. Sempre atualize a lista primeiro."]}),s.jsx("h2",{children:"2. Instalação de Pacotes"}),s.jsx(v,{title:"Instalar software com apt",code:`# Instalar um único pacote
sudo apt install vim
# Vai perguntar "Deseja continuar? [S/n]" — confirme com Enter ou S

# Instalar múltiplos pacotes de uma vez (separe por espaço)
sudo apt install git curl wget htop

# A flag -y confirma automaticamente, sem precisar responder às perguntas
sudo apt install -y nginx mysql-server php
# Equivalente a ficar digitando "S" para cada confirmação

# Instalar uma versão específica de um pacote
sudo apt install firefox=124.0+build3-0ubuntu0.24.04.1
# O = especifica a versão exata desejada

# Instalar um arquivo .deb baixado manualmente
sudo apt install ./nome-do-arquivo.deb
# O ./ indica que é um arquivo LOCAL (na pasta atual), não do repositório.
# O apt resolve as dependências automaticamente!

# Reinstalar um pacote que ficou corrompido
sudo apt install --reinstall nginx
# --reinstall = baixa e instala de novo, sobrescrevendo os arquivos atuais

# Instalar sem pacotes recomendados (instalação mais enxuta/mínima)
sudo apt install --no-install-recommends python3
# Pacotes recomendados são opcionais — sem esta flag, o apt os instala automaticamente`}),s.jsx("h2",{children:"3. Busca e Informações"}),s.jsx(v,{title:"Pesquisar e inspecionar pacotes",code:`# Buscar pacotes pelo nome ou pela descrição
apt search vlc
apt search "video player"

# Ver informações detalhadas de um pacote ANTES de instalar
apt show nginx

# Saída do apt show:
# Package: nginx
# Version: 1.24.0-2ubuntu7
# Priority: optional
# Section: web
# Installed-Size: 3.021 kB
# Depends: libpcre2-8-0, ...   ← dependências que serão instaladas junto
# Description: small, powerful, scalable web/proxy server

# Listar TODOS os pacotes instalados no sistema
apt list --installed
# --installed = filtrar apenas os que já estão no sistema

# Verificar se um pacote específico está instalado
apt list --installed | grep nginx
# O | (pipe) passa a saída de um comando como entrada do próximo.
# grep filtra as linhas que contêm "nginx".

# Ver quais arquivos um pacote instalou
dpkg -L nginx
# -L = List files (listar arquivos do pacote)

# Descobrir qual pacote instalou um arquivo específico
dpkg -S /usr/bin/python3
# -S = Search (buscar qual pacote possui esse arquivo)

# Ver dependências de um pacote
apt depends nginx

# Ver quais pacotes dependem de um dado pacote
apt rdepends nginx
# rdepends = reverse depends (dependências reversas)`}),s.jsx("h2",{children:"4. Remoção de Pacotes"}),s.jsx(v,{title:"Remover software de forma limpa",code:`# Remover um pacote (mantém arquivos de configuração em /etc/)
sudo apt remove nginx

# Remover um pacote E seus arquivos de configuração (purge = limpeza total)
sudo apt purge nginx
# Use purge quando quiser começar do zero com um serviço,
# ou quando a configuração estiver corrompida.

# Remover dependências que não são mais necessárias
sudo apt autoremove
# Quando você remove um pacote, suas dependências ficam "órfãs".
# autoremove identifica e remove essas dependências desnecessárias.

# A combinação mais completa e limpa:
sudo apt purge nginx && sudo apt autoremove -y

# Remover múltiplos pacotes de uma vez
sudo apt purge apache2 apache2-utils apache2-data`}),s.jsxs(G,{type:"warning",title:"remove vs purge",children:[s.jsx("code",{children:"apt remove"})," remove os binários mas mantém arquivos de configuração em",s.jsx("code",{children:"/etc/"}),". ",s.jsx("code",{children:"apt purge"})," remove tudo, incluindo as configurações. Se você vai reinstalar o serviço, use ",s.jsx("code",{children:"remove"}),". Se quer começar do zero (ex: limpar configurações ruins do MySQL), use ",s.jsx("code",{children:"purge"}),"."]}),s.jsx("h2",{children:"5. Limpeza de Cache"}),s.jsx(v,{title:"Liberar espaço em disco",code:`# O APT guarda todos os .deb baixados em /var/cache/apt/archives/
# Com o tempo, isso pode ocupar vários GB.

# Ver quanto espaço o cache ocupa:
du -sh /var/cache/apt/archives/
# du = disk usage (uso de disco)
# -s = summary (mostrar apenas o total, não listar cada arquivo)
# -h = human readable (mostrar em KB, MB, GB — não em bytes brutos)

# Remover .deb de versões ANTIGAS (mantém a versão atual instalada)
sudo apt autoclean
# Seguro — mantém os pacotes atuais no cache caso precise reinstalar sem internet.

# Remover TODOS os .deb do cache (economiza mais espaço)
sudo apt clean

# Ver o que o autoremove iria remover SEM fazer nada (simulação):
sudo apt autoremove --dry-run
# --dry-run = "ensaio geral" — mostra o que aconteceria, mas não executa

# Limpeza completa de uma vez:
sudo apt autoremove -y && sudo apt clean`}),s.jsx("h2",{children:"6. Repositórios e Sources.list"}),s.jsxs("p",{children:["O APT busca pacotes em ",s.jsx("strong",{children:"repositórios"}),". A lista de repositórios fica em",s.jsx("code",{children:"/etc/apt/sources.list"})," e nos arquivos em ",s.jsx("code",{children:"/etc/apt/sources.list.d/"}),"."]}),s.jsx(v,{title:"Entendendo e gerenciando repositórios",code:`# Ver repositórios configurados:
cat /etc/apt/sources.list

# Formato de uma linha de repositório:
# deb https://archive.ubuntu.com/ubuntu noble main restricted universe multiverse
# ^   ^                                 ^      ^    ^         ^        ^
# tipo  URL do servidor                  codinome componentes

# Habilitar repositório universe (pacotes mantidos pela comunidade):
sudo add-apt-repository universe
# universe = pacotes open source mantidos pela comunidade (não pela Canonical)

# Habilitar multiverse (software com restrições de licença):
sudo add-apt-repository multiverse
# multiverse = software proprietário ou com restrições legais (ex: codecs de vídeo)

# Adicionar repositório PPA (Personal Package Archive):
sudo add-apt-repository ppa:nome/repositorio
# PPA = repositórios mantidos por desenvolvedores independentes no Launchpad

# Exemplos de PPAs populares:
sudo add-apt-repository ppa:graphics-drivers/ppa     # Drivers NVIDIA recentes

# Remover um PPA:
sudo add-apt-repository --remove ppa:nome/repositorio
# --remove = inverso do comando, remove em vez de adicionar

# Após adicionar qualquer repositório, sempre atualize a lista:
sudo apt update`}),s.jsx("h2",{children:"7. Repositório de Terceiros (Manual)"}),s.jsx(v,{title:"Adicionar repositório com chave GPG",code:`# Exemplo: Adicionar repositório oficial do VS Code (Microsoft)

# 1. Baixar e instalar a chave GPG do repositório
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | \\
    gpg --dearmor | \\
    sudo tee /usr/share/keyrings/microsoft.gpg > /dev/null
# wget = baixar da internet
# -q = quiet (silencioso, sem barra de progresso)
# -O- = output para stdout (- = saída padrão, em vez de salvar em arquivo)
# gpg --dearmor = converter a chave do formato texto para binário
# tee = salvar em arquivo E também mostrar na tela
# > /dev/null = descartar a saída da tela (só queremos salvar o arquivo)

# 2. Adicionar o repositório
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] \\
    https://packages.microsoft.com/repos/code stable main" | \\
    sudo tee /etc/apt/sources.list.d/vscode.list
# arch=amd64 = este repositório é para processadores 64-bit (x86_64)
# signed-by = usar esta chave para verificar a autenticidade dos pacotes

# 3. Atualizar e instalar
sudo apt update
sudo apt install code`}),s.jsx("h2",{children:"8. Comandos Úteis do dpkg"}),s.jsx(v,{title:"dpkg — o instalador de baixo nível",code:`# dpkg é o programa que de fato instala os .deb. O APT usa o dpkg por baixo.

# Instalar um arquivo .deb manualmente (sem resolver dependências!)
sudo dpkg -i google-chrome-stable_current_amd64.deb
# -i = install (instalar)
# Se faltar dependências, o dpkg falhará. Corrija com:
sudo apt install -f
# -f = fix-broken (corrigir dependências quebradas)

# Ver todos os pacotes instalados
dpkg -l
# -l = list (listar)

# Ver arquivos instalados por um pacote
dpkg -L firefox
# -L = List files of package (listar arquivos DO pacote, letra maiúscula)

# Ver qual pacote instalou um arquivo específico
dpkg -S /usr/bin/firefox
# -S = Search (buscar qual pacote possui esse caminho)

# Verificar status e informações de um pacote
dpkg -s nginx
# -s = status

# Reconfigurar um pacote (refaz as perguntas de configuração):
sudo dpkg-reconfigure tzdata     # Reconfigurar fuso horário
sudo dpkg-reconfigure locales    # Reconfigurar idioma do sistema`})]})}function Rv(){return s.jsxs(le,{title:"Snap & Flatpak",subtitle:"Instalando aplicativos via Snap Store e Flathub — entenda os formatos universais de pacotes e suas diferenças.",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsxs("p",{children:["Além do APT (para pacotes .deb), o Ubuntu suporta dois formatos modernos de distribuição de aplicativos: ",s.jsx("strong",{children:"Snap"})," (criado pela Canonical) e ",s.jsx("strong",{children:"Flatpak"}),"(criado pelo projeto freedesktop.org). Ambos instalam aplicativos de forma isolada do sistema, com todas as dependências embutidas."]}),s.jsx("h2",{children:"Snap: O Formato da Canonical"}),s.jsx("p",{children:"Snaps são pacotes que incluem o aplicativo e todas as suas dependências. São atualizados automaticamente e funcionam em qualquer distribuição Linux que tenha o snapd instalado."}),s.jsx("h3",{children:"Comandos Essenciais do Snap"}),s.jsx(v,{title:"Gerenciando snaps",code:`# Buscar um snap
snap find firefox
snap find spotify

# Instalar um snap
sudo snap install spotify
sudo snap install code --classic
sudo snap install discord

# A flag --classic dá acesso irrestrito ao sistema de arquivos
# (necessário para IDEs, editores e ferramentas de desenvolvimento)

# Ver snaps instalados
snap list

# Informações sobre um snap
snap info spotify

# Atualizar todos os snaps
sudo snap refresh

# Atualizar um snap específico
sudo snap refresh spotify

# Remover um snap
sudo snap remove spotify

# Reverter para a versão anterior de um snap
sudo snap revert spotify

# Ver histórico de atualizações
snap changes`}),s.jsx("h3",{children:"Snaps Populares"}),s.jsx(v,{title:"Snaps mais usados",code:`# Ferramentas de desenvolvimento
sudo snap install code --classic          # VS Code
sudo snap install intellij-idea-community --classic
sudo snap install pycharm-community --classic
sudo snap install android-studio --classic
sudo snap install sublime-text --classic
sudo snap install postman

# Navegadores
sudo snap install chromium
sudo snap install brave
sudo snap install opera

# Comunicação
sudo snap install discord
sudo snap install slack --classic
sudo snap install telegram-desktop
sudo snap install zoom-client

# Multimídia
sudo snap install vlc
sudo snap install spotify
sudo snap install obs-studio

# Produtividade
sudo snap install notion-snap-reborn
sudo snap install obsidian --classic`}),s.jsxs(G,{type:"warning",title:"Snaps e performance de inicialização",children:["Snaps podem demorar mais para abrir na primeira vez depois do boot do sistema porque precisam ser montados. O Firefox no Ubuntu 22.04+ é um snap por padrão, o que pode causar demora inicial. Se isso incomodar, você pode instalar a versão .deb:",s.jsx("code",{children:"sudo snap remove firefox"})," e depois instalar pelo repositório da Mozilla."]}),s.jsx("h3",{children:"Gerenciando Canais de Atualização"}),s.jsx(v,{title:"Canais (channels) do Snap",code:`# Cada snap tem canais: stable, candidate, beta, edge
# stable = versão estável (padrão)
# candidate = próxima versão estável, para testes
# beta = funcionalidades novas, pode ter bugs
# edge = build mais recente do código fonte, instável

# Instalar em canal específico
sudo snap install brave --channel=beta

# Mudar o canal de um snap instalado
sudo snap switch spotify --channel=beta
sudo snap refresh spotify

# Ver qual canal está sendo usado
snap info spotify | grep tracking`}),s.jsx("h2",{children:"Flatpak: O Formato Universal"}),s.jsx("p",{children:"Flatpak é o padrão da comunidade Linux (apoiado por Red Hat, Fedora, GNOME). O Flathub é o repositório central e maior loja de aplicativos para Flatpak."}),s.jsx("h3",{children:"Instalando o Flatpak"}),s.jsx(v,{title:"Configurar Flatpak e Flathub",code:`# Instalar o Flatpak
sudo apt install flatpak

# Instalar o plugin do GNOME Software (para integração com a Loja de Apps)
sudo apt install gnome-software-plugin-flatpak

# Adicionar o repositório Flathub (principal fonte de Flatpaks)
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

# IMPORTANTE: Após adicionar o Flathub, reinicie o sistema
# para que os aplicativos apareçam no GNOME Software`}),s.jsx("h3",{children:"Comandos Flatpak"}),s.jsx(v,{title:"Gerenciando flatpaks",code:`# Buscar aplicativo no Flathub
flatpak search firefox

# Instalar aplicativo do Flathub
flatpak install flathub org.mozilla.firefox
flatpak install flathub com.spotify.Client
flatpak install flathub com.discordapp.Discord
flatpak install flathub org.videolan.VLC

# Você pode confirmar com "y" ou aceitar automaticamente com -y:
flatpak install -y flathub com.spotify.Client

# Listar flatpaks instalados
flatpak list

# Executar um flatpak
flatpak run com.spotify.Client

# Atualizar todos os flatpaks
flatpak update

# Atualizar um flatpak específico
flatpak update com.spotify.Client

# Remover um flatpak
flatpak uninstall com.spotify.Client

# Remover flatpaks não utilizados (runtimes órfãos)
flatpak uninstall --unused

# Informações de um flatpak instalado
flatpak info com.spotify.Client`}),s.jsx("h3",{children:"Flatpak e Permissões"}),s.jsx(v,{title:"Gerenciar permissões de flatpaks",code:`# Instalar Flatseal para gerenciar permissões graficamente
flatpak install flathub com.github.tchx84.Flatseal

# Ver permissões de um aplicativo
flatpak info --show-permissions com.spotify.Client

# Dar permissão para acessar um diretório específico
flatpak override --user --filesystem=/home/joao/Musicas com.spotify.Client

# Remover permissão de acesso à câmera
flatpak override --user --nodevice=all com.discordapp.Discord

# Resetar todas as permissões de um app para o padrão
flatpak override --user --reset com.spotify.Client`}),s.jsx("h2",{children:"Snap vs Flatpak vs APT: Quando Usar Cada Um?"}),s.jsx(G,{type:"info",title:"Guia prático de escolha",children:s.jsxs("ul",{className:"mt-1 mb-0",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"APT (.deb)"}),": Para ferramentas do sistema, bibliotecas, servidores e aplicativos que precisam de integração profunda com o sistema. Mais rápido, mais confiável, sem overhead de isolamento."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Snap"}),": Para aplicativos proprietários como Spotify, Discord, e para ferramentas de desenvolvimento (VS Code, JetBrains IDEs). Vantagem: atualização automática."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Flatpak"}),": Para aplicativos de terceiros onde você quer controle fino de permissões. Flathub tem uma curadoria rigorosa. Preferido pela comunidade Linux em geral."]})]})}),s.jsx("h2",{children:"GNOME Software: A Loja de Aplicativos"}),s.jsxs("p",{children:["O ",s.jsx("strong",{children:"GNOME Software"})," é a loja de aplicativos gráfica do Ubuntu. Com Flatpak e Snap configurados, ele exibe todos os tipos de pacotes em uma interface unificada. Você pode buscar, instalar, atualizar e remover aplicativos clicando — sem precisar de linha de comando."]}),s.jsx(v,{title:"Abrir a loja de aplicativos",code:`# Via Activities → "Centro de Programas" ou "Software"
# Ou via terminal:
gnome-software

# Para forçar atualização de todos os apps instalados (snap + flatpak + apt):
gnome-software --mode=updates`}),s.jsx("h2",{children:"Desinstalação Completa"}),s.jsx(v,{title:"Remover snap e flatpak limpos",code:`# Remover snap com dados do usuário também:
sudo snap remove --purge spotify

# Remover flatpak com dados do usuário:
flatpak uninstall com.spotify.Client
rm -rf ~/.var/app/com.spotify.Client  # Dados do usuário

# Limpar runtimes Flatpak não usados:
flatpak uninstall --unused`})]})}function Vv(){return s.jsxs(le,{title:"Systemd e Serviços",subtitle:"Gerenciando serviços, timers, logs e o processo de boot no Ubuntu com systemd e systemctl.",difficulty:"intermediario",timeToRead:"25 min",children:[s.jsxs("p",{children:["O ",s.jsx("strong",{children:"systemd"})," é o sistema de inicialização (init system) e gerenciador de serviços do Ubuntu (desde o Ubuntu 15.04). Ele substitui o antigo SysVinit e é responsável por iniciar todos os serviços do sistema — do NetworkManager ao servidor SSH, do cron ao servidor de impressão."]}),s.jsx("h2",{children:"systemctl: O Comando Principal"}),s.jsx("h3",{children:"Gerenciando Serviços"}),s.jsx(v,{title:"Operações básicas com serviços",code:`# Verificar status de um serviço (mostra se está ativo, com falha, logs recentes)
sudo systemctl status ssh
sudo systemctl status nginx
sudo systemctl status mysql

# Iniciar um serviço AGORA (efeito até o próximo reboot)
sudo systemctl start nginx

# Parar um serviço
sudo systemctl stop nginx

# Reiniciar um serviço (para e inicia novamente)
sudo systemctl restart nginx

# Recarregar configuração SEM derrubar o serviço (quando o serviço suporta)
sudo systemctl reload nginx
# Útil para aplicar mudanças no nginx.conf sem causar downtime

# Habilitar: configurar para iniciar AUTOMATICAMENTE no boot
sudo systemctl enable nginx
# Cria um link simbólico em /etc/systemd/system/ mas NÃO inicia agora

# --now = fazer a ação "enable" E "start" ao mesmo tempo
sudo systemctl enable --now nginx
# Habilita no boot E inicia imediatamente (o mais comum na prática!)

# Desabilitar: remover do boot (NÃO para o serviço que está rodando)
sudo systemctl disable nginx

# Desabilitar E parar ao mesmo tempo:
sudo systemctl disable --now nginx

# Verificar se um serviço está configurado para iniciar no boot
sudo systemctl is-enabled nginx
# Saída: enabled | disabled | static | masked

# Verificar se um serviço está rodando neste momento
sudo systemctl is-active nginx
# Saída: active | inactive | failed`}),s.jsx("h3",{children:"Listando Serviços"}),s.jsx(v,{title:"Listar e filtrar serviços com flags",code:`# Listar todos os serviços ATIVOS no momento
systemctl list-units --type=service
# --type=service = filtrar apenas unidades do tipo "service"
# (existem outros tipos: socket, timer, mount, device, etc.)

# Listar TODOS os serviços, incluindo inativos e com falha
systemctl list-units --type=service --all
# --all = incluir unidades inativas e não carregadas

# Listar apenas serviços que FALHARAM
systemctl list-units --type=service --state=failed
# --state=failed = filtrar pelo estado: failed (falhou ao iniciar)
# Outros valores: active, inactive, activating, deactivating

# Listar todos os ARQUIVOS de unit (independente do estado)
systemctl list-unit-files --type=service
# Mostra todos os serviços instalados e se estão enabled/disabled

# Atalho: ver serviços que falharam no boot
systemctl --failed
# --failed = equivalente a --state=failed (atalho conveniente)`}),s.jsxs(G,{type:"info",title:"Diferença entre enable e start",children:[s.jsx("code",{children:"start"})," = iniciar o serviço AGORA (até o próximo reboot).",s.jsx("br",{}),s.jsx("code",{children:"enable"})," = configurar para iniciar NO BOOT (não inicia agora).",s.jsx("br",{}),s.jsx("code",{children:"enable --now"})," = faz os dois ao mesmo tempo. É o mais usado na prática."]}),s.jsx("h2",{children:"journalctl: Lendo os Logs do Sistema"}),s.jsxs("p",{children:["O systemd centraliza todos os logs do sistema no ",s.jsx("strong",{children:"journal"}),". O comando",s.jsx("code",{children:"journalctl"})," é a ferramenta para ler e filtrar esses logs — muito mais poderoso que abrir arquivos de log manualmente."]}),s.jsx(v,{title:"journalctl com todas as flags explicadas",code:`# Ver todos os logs (do mais antigo ao mais novo — pressione q para sair)
journalctl

# -f = follow (seguir/monitorar em tempo real, como tail -f)
# Fica exibindo novas mensagens à medida que aparecem. Ctrl+C para sair.
journalctl -f

# -u = unit (filtrar por unidade/serviço específico)
journalctl -u ssh        # logs do serviço SSH
journalctl -u nginx      # logs do Nginx
journalctl -u mysql      # logs do MySQL

# Combinar -u e -f para monitorar um serviço em tempo real:
journalctl -u nginx -f

# -n = number of lines (ver apenas as últimas N linhas)
journalctl -n 50         # Ver as últimas 50 linhas
journalctl -n 100 -u nginx  # Últimas 100 linhas do Nginx

# -e = end (pular para o FIM do journal imediatamente)
# Sem -e, o journalctl começa do início e você precisa descer até o fim.
journalctl -e

# -b = boot (filtrar por sessão de boot)
journalctl -b            # Logs desde o ÚLTIMO boot (boot atual)
journalctl -b -1         # Logs do boot ANTERIOR ao atual
journalctl -b -2         # Dois boots atrás

# --since e --until = filtrar por intervalo de tempo
journalctl --since "2024-04-01 10:00:00"
journalctl --since "2024-04-01" --until "2024-04-02"
journalctl --since "1 hour ago"   # Última hora
journalctl --since "yesterday"    # Desde ontem

# -p = priority (filtrar por prioridade/gravidade)
# Níveis: 0=emerg, 1=alert, 2=crit, 3=err, 4=warning, 5=notice, 6=info, 7=debug
journalctl -p err         # Apenas erros (nível 3 e acima: err, crit, alert, emerg)
journalctl -p warning     # Avisos e mais graves
journalctl -p info        # Tudo até info (nível 6)

# -o = output format (formato de saída)
journalctl -u nginx -o json       # Saída em formato JSON (útil para scripts)
journalctl -u nginx -o short      # Formato padrão (padrão quando não especificado)
journalctl -u nginx -o verbose    # Todos os campos de cada entrada de log

# --disk-usage = ver quanto espaço o journal ocupa em disco
journalctl --disk-usage`}),s.jsx("h2",{children:"Anatomia de um Arquivo de Unit"}),s.jsxs("p",{children:["Os serviços do systemd são configurados via arquivos chamados ",s.jsx("strong",{children:"units"}),". Eles ficam em:"]}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("code",{children:"/lib/systemd/system/"})," — Units do sistema (instaladas por pacotes)"]}),s.jsxs("li",{children:[s.jsx("code",{children:"/etc/systemd/system/"})," — Units personalizadas (têm prioridade maior)"]}),s.jsxs("li",{children:[s.jsx("code",{children:"~/.config/systemd/user/"})," — Units do usuário (sem root)"]})]}),s.jsx(v,{title:"Estrutura de um arquivo .service",code:`# Ver o arquivo de um serviço existente:
cat /lib/systemd/system/ssh.service

# Saída típica (cada seção tem um propósito):
[Unit]
Description=OpenBSD Secure Shell server
# After= define dependências de ORDEM: iniciar após essas units
After=network.target auditd.service
# ConditionPathExists= só inicia se o caminho EXISTIR (! = não existir)
ConditionPathExists=!/etc/ssh/sshd_not_to_be_run

[Service]
# EnvironmentFile= arquivo com variáveis de ambiente para o serviço
# O - antes do caminho significa "ignorar se o arquivo não existir"
EnvironmentFile=-/etc/default/ssh
# ExecStartPre= comando a rodar ANTES do serviço iniciar (checagem de config)
ExecStartPre=/usr/sbin/sshd -t
# ExecStart= o comando principal que inicia o serviço
ExecStart=/usr/sbin/sshd -D $SSHD_OPTS
# ExecReload= comando para recarregar sem reiniciar
ExecReload=/bin/kill -HUP $MAINPID
# Restart= quando reiniciar automaticamente
# on-failure = reiniciar somente se o processo terminar com erro
Restart=on-failure
# Type= tipo do serviço
# notify = o processo avisa o systemd quando terminar de inicializar
Type=notify

[Install]
# WantedBy= em qual target este serviço deve ser incluído
# multi-user.target = modo multiusuário (sem interface gráfica)
WantedBy=multi-user.target`}),s.jsx("h3",{children:"Criando um Serviço Personalizado"}),s.jsx(v,{title:"Criar um serviço systemd customizado",code:`# Exemplo: rodar um script Python como serviço do sistema

# 1. Criar o arquivo de service em /etc/systemd/system/
sudo nano /etc/systemd/system/meu-app.service

# Conteúdo do arquivo:
[Unit]
Description=Meu Aplicativo Python
# After=network.target = só iniciar APÓS a rede estar disponível
After=network.target

[Service]
# Type=simple = processo principal é o próprio ExecStart
Type=simple
# User= rodar o serviço como este usuário (não como root!)
User=ubuntu
# WorkingDirectory= diretório de trabalho do processo
WorkingDirectory=/opt/meu-app
ExecStart=/usr/bin/python3 /opt/meu-app/main.py
# Restart=always = reiniciar o serviço se ele parar (por qualquer motivo)
Restart=always
# RestartSec= aguardar 10 segundos antes de tentar reiniciar
RestartSec=10
# StandardOutput= onde enviar a saída padrão (stdout)
# journal = enviado para o journalctl (pode ler com journalctl -u meu-app)
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target

# 2. Recarregar o daemon para reconhecer o novo arquivo:
sudo systemctl daemon-reload
# daemon-reload = necessário SEMPRE que criar ou editar um arquivo .service

# 3. Habilitar E iniciar o serviço:
sudo systemctl enable --now meu-app

# 4. Verificar se está rodando:
sudo systemctl status meu-app

# 5. Ver logs do serviço em tempo real:
journalctl -u meu-app -f`}),s.jsx("h2",{children:"Systemd Timers (Substituto do Cron)"}),s.jsx("p",{children:"Timers do systemd são mais poderosos que o cron clássico — têm logging integrado, suporte a dependências, e são mais fáceis de depurar."}),s.jsx(v,{title:"Criar um timer systemd",code:`# Timer que roda um script de backup todos os dias às 3h da manhã

# 1. Criar o arquivo de SERVICE (define O QUE vai executar):
sudo nano /etc/systemd/system/backup-diario.service

[Unit]
Description=Backup Diário

[Service]
# Type=oneshot = serviço que executa uma única vez e termina (não fica em loop)
Type=oneshot
ExecStart=/usr/local/bin/backup.sh

# 2. Criar o arquivo de TIMER (define QUANDO vai executar):
sudo nano /etc/systemd/system/backup-diario.timer

[Unit]
Description=Rodar backup todo dia às 3h

[Timer]
# OnCalendar= formato: DIA-DA-SEMANA ANO-MÊS-DIA HH:MM:SS
# * = qualquer valor (curinga)
# *-*-* 03:00:00 = todo dia (qualquer ano-mês-dia) às 03:00:00
OnCalendar=*-*-* 03:00:00
# Persistent=true = se o sistema estava desligado no horário agendado,
# rodar assim que ligar (não pular a execução)
Persistent=true

[Install]
WantedBy=timers.target

# 3. Ativar o timer:
sudo systemctl daemon-reload
sudo systemctl enable --now backup-diario.timer

# 4. Ver todos os timers ativos e quando executam:
systemctl list-timers

# 5. Ver quando vai executar da próxima vez:
systemctl status backup-diario.timer`}),s.jsx("h2",{children:"Targets (Equivalente aos Runlevels)"}),s.jsx(v,{title:"Targets: modos de operação do sistema",code:`# Ver o target padrão (modo em que o sistema inicia)
systemctl get-default
# graphical.target  ← Com interface gráfica (padrão no Ubuntu Desktop)
# multi-user.target ← Sem interface gráfica (padrão no Ubuntu Server)

# Mudar o target padrão para modo TEXTO (servidor sem desktop)
sudo systemctl set-default multi-user.target

# Mudar o target padrão para modo GRÁFICO (desktop)
sudo systemctl set-default graphical.target

# Mudar para um target AGORA (sem reboot) — cuidado: pode matar o desktop!
sudo systemctl isolate multi-user.target

# Desligar o sistema de forma ordenada (equivale a "desligar" no menu)
sudo systemctl poweroff

# Reiniciar o sistema
sudo systemctl reboot

# Suspender (economizar energia, RAM mantida)
sudo systemctl suspend

# Hibernar (desligar salvando RAM no disco, mais lento para acordar)
sudo systemctl hibernate`}),s.jsx("h2",{children:"Analisando o Tempo de Boot"}),s.jsx(v,{title:"Diagnóstico de velocidade de boot",code:`# Ver o tempo total do boot e quanto foi kernel vs userspace
systemd-analyze
# Saída:
# Startup finished in 2.315s (kernel) + 15.234s (userspace) = 17.549s
# graphical.target reached after 14.892s in userspace

# Ver QUAIS serviços demoram mais (do mais lento ao mais rápido)
systemd-analyze blame
# Saída:
# 5.123s NetworkManager-wait-online.service
# 3.456s apt-daily.service
# 1.234s snapd.service
# ...

# Gerar um gráfico SVG visual do tempo de boot
systemd-analyze plot > boot-plot.svg
firefox boot-plot.svg`})]})}function Hv(){return s.jsxs(le,{title:"Hierarquia do Sistema de Arquivos (FHS)",subtitle:"O mapa do Linux — entenda o que existe em cada diretório, de / até /var/log, e por que tudo está onde está.",difficulty:"iniciante",timeToRead:"20 min",children:[s.jsxs("p",{children:["No Linux, tudo começa em ",s.jsx("strong",{children:"/"}),' (barra) — a raiz. Diferente do Windows que tem letras de drive (C:, D:, E:), no Linux existe apenas uma árvore de diretórios a partir da raiz. Todos os discos, pen drives e partições são "montados" em algum ponto dessa árvore.']}),s.jsxs("p",{children:["O ",s.jsx("strong",{children:"FHS"})," (Filesystem Hierarchy Standard) é a especificação que define onde cada tipo de arquivo deve ficar. Todas as distribuições Linux respeitam esse padrão, o que significa que o conhecimento sobre a estrutura de arquivos é portátil entre Ubuntu, Fedora, Arch e outros."]}),s.jsx("h2",{children:"Mapa Completo dos Diretórios"}),s.jsx(v,{title:"A árvore de diretórios do Linux",code:`/                    ← Raiz (Root) — tudo começa aqui
├── bin/             ← Binários essenciais (ls, cp, cat, bash)
├── boot/            ← Arquivos do bootloader e kernel
├── dev/             ← Dispositivos de hardware (disco, teclado, mouse)
├── etc/             ← Arquivos de configuração do sistema
├── home/            ← Diretórios pessoais dos usuários
│   ├── joao/       ← Pasta do usuário "joao" (~)
│   └── maria/      ← Pasta do usuário "maria"
├── lib/             ← Bibliotecas compartilhadas (.so files)
├── lib64/           ← Bibliotecas de 64 bits
├── lost+found/      ← Arquivos recuperados após falha de disco
├── media/           ← Pontos de montagem automáticos (USB, CD)
├── mnt/             ← Ponto de montagem temporário manual
├── opt/             ← Software opcional de terceiros
├── proc/            ← Sistema de arquivos virtual: informações do kernel
├── root/            ← Pasta home do usuário root (administrador)
├── run/             ← Dados de runtime (PIDs, sockets)
├── sbin/            ← Binários de sistema (comandos para root)
├── snap/            ← Pacotes snap instalados
├── srv/             ← Dados de serviços (sites web, FTP)
├── sys/             ← Sistema de arquivos virtual: dispositivos do kernel
├── tmp/             ← Arquivos temporários (apagados no reboot)
├── usr/             ← Programas e dados dos usuários
│   ├── bin/        ← Programas dos usuários (python3, vim, gcc)
│   ├── lib/        ← Bibliotecas dos programas
│   ├── local/      ← Software instalado manualmente (fora do apt)
│   └── share/      ← Dados compartilhados (ícones, documentação)
└── var/             ← Dados variáveis (logs, banco de dados, cache)
    ├── log/        ← Logs do sistema
    ├── cache/      ← Cache de aplicações
    ├── lib/        ← Estado persistente de aplicações
    └── www/        ← Arquivos de sites web (convenção para /srv)`}),s.jsx("h2",{children:"Detalhamento de Cada Diretório"}),s.jsx("h3",{children:"/etc — As Configurações"}),s.jsxs("p",{children:[s.jsx("code",{children:"/etc"}),' contém todos os arquivos de configuração do sistema e dos serviços instalados. É o "painel de controle" do Linux em formato de texto.']}),s.jsx(v,{title:"Arquivos importantes em /etc",code:`/etc/apt/sources.list        # Repositórios do APT
/etc/apt/sources.list.d/     # Repositórios extras (um arquivo por PPA)
/etc/hostname                # Nome do computador
/etc/hosts                   # Mapeamento local host → IP
/etc/fstab                   # Tabela de sistemas de arquivos (montagens)
/etc/passwd                  # Informações dos usuários
/etc/shadow                  # Senhas criptografadas (apenas root lê)
/etc/group                   # Definição dos grupos
/etc/sudoers                 # Configuração do sudo
/etc/ssh/sshd_config         # Configuração do servidor SSH
/etc/nginx/                  # Configuração do Nginx
/etc/mysql/                  # Configuração do MySQL
/etc/systemd/system/         # Arquivos de service customizados
/etc/ufw/                    # Configuração do firewall UFW
/etc/environment             # Variáveis de ambiente do sistema
/etc/locale.gen              # Locales configurados
/etc/timezone                # Fuso horário atual`}),s.jsx("h3",{children:"/var — Dados Variáveis"}),s.jsx(v,{title:"O que fica em /var",code:`/var/log/syslog          # Log geral do sistema (Ubuntu)
/var/log/auth.log        # Tentativas de login, sudo, SSH
/var/log/kern.log        # Mensagens do kernel
/var/log/dpkg.log        # Log de instalações/remoções de pacotes
/var/log/apt/history.log # Histórico detalhado do APT
/var/log/nginx/          # Logs de acesso e erro do Nginx
/var/log/mysql/          # Logs do MySQL
/var/log/ufw.log         # Log do firewall UFW
/var/cache/apt/archives/ # Cache de pacotes .deb baixados pelo APT
/var/lib/dpkg/           # Base de dados de pacotes instalados
/var/lib/mysql/          # Banco de dados MySQL
/var/www/html/           # Arquivos de site web padrão do Apache/Nginx
/var/mail/               # Caixas de email locais`}),s.jsx("h3",{children:"/proc e /sys — O Kernel em Tempo Real"}),s.jsxs("p",{children:["Estes são ",s.jsx("strong",{children:"sistemas de arquivos virtuais"}),". Os arquivos não existem no disco — são gerados pelo kernel em tempo real. Ler esses arquivos é uma janela direta para o estado do kernel e do hardware."]}),s.jsx(v,{title:"Explorando /proc e /sys",code:`# Informações do processador:
cat /proc/cpuinfo

# Informações de memória:
cat /proc/meminfo

# Versão do kernel:
cat /proc/version

# Lista de processos em execução (cada PID tem uma pasta):
ls /proc/
# 1  2  3  ...  1234  (números são PIDs de processos)

# Ver informações de um processo específico (PID 1 = systemd):
cat /proc/1/cmdline   # Linha de comando que iniciou o processo
cat /proc/1/status    # Status atual do processo
ls /proc/1/fd/        # File descriptors abertos pelo processo

# Partições e montagens em tempo real:
cat /proc/mounts
cat /proc/partitions

# Estatísticas de rede em tempo real:
cat /proc/net/dev

# Parâmetros do kernel (ajustáveis com sysctl):
ls /proc/sys/
cat /proc/sys/net/ipv4/ip_forward  # 0=desabilitado, 1=habilitado`}),s.jsx("h3",{children:"/dev — Dispositivos"}),s.jsx(v,{title:"Dispositivos importantes em /dev",code:`/dev/sda         # Primeiro disco SATA/SAS
/dev/sda1        # Primeira partição do primeiro disco
/dev/sdb         # Segundo disco (pen drive, HD externo)
/dev/nvme0n1     # Primeiro SSD NVMe
/dev/nvme0n1p1   # Primeira partição do SSD NVMe
/dev/sr0         # Drive de CD/DVD
/dev/null        # "Buraco negro" — descarta tudo que recebe
/dev/zero        # Gera zeros infinitamente (útil com dd)
/dev/random      # Gera bytes aleatórios verdadeiros (mais lento)
/dev/urandom     # Gera bytes pseudoaleatórios (mais rápido)
/dev/tty         # Terminal atual
/dev/tty1-6      # Terminais virtuais (Ctrl+Alt+F1 a F6)
/dev/pts/        # Terminais de pseudo-terminal (janelas de terminal gráfico)

# Exemplos práticos:
# Descartar saída de um comando:
ls -la > /dev/null

# Criar arquivo de 1GB zerado:
dd if=/dev/zero of=arquivo.bin bs=1M count=1024`}),s.jsx("h3",{children:"/home — Os Arquivos Pessoais"}),s.jsx(v,{title:"Estrutura do /home",code:`# Cada usuário tem seu próprio diretório em /home/
/home/joao/
├── Desktop/         # Área de trabalho
├── Documents/       # Documentos
├── Downloads/       # Downloads
├── Music/           # Músicas
├── Pictures/        # Imagens
├── Videos/          # Vídeos
├── .bashrc          # Configuração do shell Bash (arquivo oculto)
├── .bash_profile    # Executado no login interativo
├── .profile         # Variáveis de ambiente do usuário
├── .ssh/            # Chaves SSH e hosts conhecidos
├── .config/         # Configurações de aplicativos gráficos
├── .local/          # Dados locais de aplicativos
└── .cache/          # Cache de aplicativos

# Arquivos começando com . (ponto) são ocultos
# Ver arquivos ocultos:
ls -la ~
ls -la /home/joao/`}),s.jsx("h2",{children:"Montando e Desmontando Sistemas de Arquivos"}),s.jsx(v,{title:"Montar e desmontar dispositivos",code:`# Ver discos e partições disponíveis
lsblk
fdisk -l

# Ver sistemas de arquivos montados
df -h
mount | column -t

# Montar um pen drive manualmente
sudo mkdir -p /mnt/pendrive
sudo mount /dev/sdb1 /mnt/pendrive

# Montar com tipo específico
sudo mount -t exfat /dev/sdb1 /mnt/pendrive  # Para FAT32/exFAT

# Desmontar
sudo umount /mnt/pendrive
# Alternativa:
sudo umount /dev/sdb1

# Montar automaticamente no boot (editar /etc/fstab):
sudo nano /etc/fstab

# Formato do fstab:
# DISPOSITIVO  PONTO_MOUNT  TIPO  OPÇÕES  DUMP  PASS
UUID=abc123  /mnt/dados  ext4  defaults,nofail  0  2

# Encontrar o UUID de um dispositivo:
blkid /dev/sdb1`}),s.jsxs(G,{type:"warning",title:"Use UUID no /etc/fstab, não /dev/sdb",children:["A letra de um disco (sda, sdb) pode mudar entre reboots se você adicionar novos discos. Use sempre o UUID, que é permanente. Encontre com ",s.jsx("code",{children:"blkid"}),"."]})]})}function Lv(){return s.jsxs(le,{title:"Navegação no Terminal",subtitle:"Movendo-se pelo sistema de arquivos com ls, cd, pwd, find, tree e muito mais — o básico que você vai usar todos os dias.",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx("p",{children:"O terminal pode parecer intimidador no começo, mas a navegação pelo sistema de arquivos do Linux segue uma lógica simples e consistente. Com poucos comandos, você se moverá pelo sistema com mais velocidade do que com qualquer interface gráfica."}),s.jsxs(G,{type:"info",title:"Como ler os comandos deste guia",children:["Ao longo deste guia, você verá letras após um ",s.jsx("code",{children:"-"})," (traço). Essas são as",s.jsx("strong",{children:" flags"})," — opções que mudam o comportamento de um comando. Exemplo: ",s.jsx("code",{children:"ls -l"})," — o ",s.jsx("code",{children:"ls"})," é o comando, o ",s.jsx("code",{children:"-l"})," é a flag que pede a listagem detalhada. Flags curtas (uma letra) usam ",s.jsx("code",{children:"-"}),". Flags longas (palavra) usam ",s.jsx("code",{children:"--"})," (dois traços), ex: ",s.jsx("code",{children:"--help"}),". Múltiplas flags curtas podem ser combinadas: ",s.jsx("code",{children:"-lah"})," = ",s.jsx("code",{children:"-l -a -h"}),"."]}),s.jsx("h2",{children:"pwd — Onde Estou?"}),s.jsx(v,{title:"Print Working Directory — mostrar o diretório atual",code:`pwd
# /home/joao
# pwd = Print Working Directory (imprimir o diretório de trabalho atual)

# O "~" no prompt representa seu diretório home (/home/seu-usuario)
# joao@ubuntu:~$       ← você está em /home/joao  (o ~ é atalho para home)
# joao@ubuntu:~$ cd /etc
# joao@ubuntu:/etc$    ← você está em /etc`}),s.jsx("h2",{children:"ls — Listar Conteúdo do Diretório"}),s.jsx(v,{title:"Todas as flags do ls explicadas",code:`# Listar o diretório atual (apenas nomes)
ls

# -l = long format (formato longo com detalhes)
# Mostra: permissões, links, dono, grupo, tamanho, data e nome
ls -l

# -a = all (todos os arquivos)
# Inclui arquivos ocultos (os que começam com . como .bashrc, .ssh)
ls -a

# -h = human readable (legível por humanos)
# Mostra tamanhos em KB, MB, GB em vez de bytes brutos (ex: 4,0K em vez de 4096)
ls -h

# -S = Sort by Size (ordenar por tamanho, maior primeiro)
ls -S

# -t = sort by Time (ordenar por data de modificação, mais recente primeiro)
ls -t

# -r = reverse (inverter a ordem da listagem)
ls -r

# -R = Recursive (listar recursivamente todos os subdiretórios)
ls -R

# === COMBINAÇÕES MAIS USADAS ===

# -la = detalhes + arquivos ocultos (muito comum)
ls -la

# -lah = detalhes + ocultos + tamanhos legíveis (a combinação mais popular)
ls -lah

# Saída de ls -lah:
# total 44K
# drwxr-x--- 12 joao joao 4,0K mar 27 10:00 .
# drwxr-xr-x  3 root root 4,0K mar 26 09:15 ..
# -rw-r--r--  1 joao joao  220 mar 26 09:15 .bash_logout
# -rw-r--r--  1 joao joao 3,5K mar 26 09:15 .bashrc
# drwxr-xr-x  2 joao joao 4,0K mar 27 09:00 Downloads
# ^           ^ ^    ^    ^    ^              ^
# permissões  links  user  group tamanho data  nome

# -lhS = detalhes + legível + ordenado por tamanho (para encontrar arquivos grandes)
ls -lhS

# -lht = detalhes + legível + ordenado por data (mais recente primeiro)
ls -lht

# Listar um diretório específico (sem precisar navegar até lá)
ls /etc
ls -la /var/log

# -F = classify (classificar com símbolos no final do nome)
# / = diretório  |  * = executável  |  @ = link simbólico
ls -F`}),s.jsx("h2",{children:"cd — Mudar de Diretório"}),s.jsx(v,{title:"Navegando pelos diretórios",code:`# Ir para o diretório home do usuário atual
cd         # sem argumentos = vai para home
cd ~       # ~ é o atalho para /home/seu-usuario
cd /home/joao  # o caminho completo (absoluto)

# Ir para um diretório usando caminho absoluto (começa com /)
cd /etc
cd /var/log
cd /usr/local/bin

# Ir para um subdiretório usando caminho relativo (sem /)
# Relativo = em relação ao diretório atual
cd Downloads               # pasta Downloads dentro do diretório atual
cd Documents/Projetos      # subpasta dentro de Documents

# Voltar um nível (ir para o diretório pai)
cd ..       # .. = diretório pai (um nível acima)

# Voltar dois níveis
cd ../..    # pai do pai

# Voltar para o diretório em que você estava antes (histórico de um passo)
cd -        # muito útil para alternar entre dois diretórios

# Exemplo de uso do cd -:
cd /etc/ssh    # vai para /etc/ssh
cd /var/log    # vai para /var/log
cd -           # volta para /etc/ssh   ← prático!

# Dica essencial: use Tab para autocompletar!
# Digite "cd /etc/ss" e pressione Tab → completa para "cd /etc/ssh/"
# Se houver mais de uma opção, pressione Tab duas vezes para ver todas.`}),s.jsx("h2",{children:"find — Encontrar Arquivos e Diretórios"}),s.jsx(v,{title:"find: busca com flags explicadas",code:`# Estrutura: find [onde buscar] [critérios] [ação]

# -name = filtrar por nome exato (sensível a maiúsculas/minúsculas)
find /home -name "arquivo.txt"

# -iname = filtrar por nome (insensível a maiúsculas/minúsculas)
# i = case insensitive
find /home -iname "foto*.jpg"

# -name com curinga * (qualquer sequência de caracteres)
find /home -name "*.pdf"     # todos os arquivos .pdf

# -type = filtrar pelo tipo
# -type f = file (arquivos regulares)
# -type d = directory (diretórios)
# -type l = link (links simbólicos)
find /etc -type f            # apenas arquivos
find /etc -type d            # apenas diretórios

# -mtime = modified time (tempo de modificação)
# -mtime -1 = modificados nas ÚLTIMAS 24 horas (o - significa "menos de")
# -mtime +7 = modificados há MAIS de 7 dias (o + significa "mais de")
find /home -mtime -1         # modificados hoje
find /var/log -mtime +30     # logs com mais de 30 dias

# -size = filtrar por tamanho
# + = maior que   |   - = menor que
# c = bytes | k = kilobytes | M = megabytes | G = gigabytes
find /var -size +100M        # arquivos maiores que 100MB
find /tmp -size -1k          # arquivos menores que 1KB

# -user = filtrar por dono do arquivo
find / -user joao            # todos os arquivos do usuário joao

# -exec = executar um comando para cada resultado
# {} = onde o nome do arquivo encontrado será inserido
# ; = marca o fim do comando que será executado
find /home -name "*.log" -exec rm {} ;
# Para cada .log encontrado, executa: rm [nome-do-arquivo]

# -not = inverter critério (encontrar o oposto)
find /etc -name "*.conf" -not -name "*.bak"
# Arquivos .conf que NÃO sejam .bak`}),s.jsx("h2",{children:"tree — Visualizar em Árvore"}),s.jsx(v,{title:"tree: visualização hierárquica",code:`# Instalar (não vem por padrão):
sudo apt install tree

# Ver estrutura do diretório atual
tree

# -L = Level (nível máximo de profundidade)
tree -L 2    # ver apenas 2 níveis de subdiretórios

# -a = all (incluir arquivos ocultos que começam com .)
tree -a

# -s = size (mostrar tamanho dos arquivos)
# -h = human readable (tamanhos em KB, MB — combinado com -s)
tree -sh

# -d = directories only (mostrar apenas diretórios, sem arquivos)
tree -d

# Ver um diretório específico
tree /etc/ssh

# Saída:
# /etc/ssh
# ├── moduli
# ├── ssh_config
# ├── ssh_config.d
# │   └── 50-systemd-user.conf
# └── sshd_config`}),s.jsx("h2",{children:"which e whereis — Localizar Programas"}),s.jsx(v,{title:"Encontrar onde estão os executáveis",code:`# which = mostra o caminho completo de um comando no PATH
which python3
# /usr/bin/python3

which git
# /usr/bin/git

# whereis = localiza o binário, o manual e o código-fonte de um comando
whereis python3
# python3: /usr/bin/python3 /usr/lib/python3 /usr/share/man/man1/python3.1.gz
#           ^executável       ^bibliotecas     ^manual

# type = mostra como o shell interpreta um comando
type ls
# ls is aliased to 'ls --color=auto'   ← é um alias (apelido)

type cd
# cd is a shell builtin               ← comando interno do próprio shell

type which
# which is /usr/bin/which              ← é um executável externo`}),s.jsx("h2",{children:"Caminhos Absolutos vs Relativos"}),s.jsx(G,{type:"info",title:"Entendendo caminhos — conceito fundamental",children:s.jsxs("ul",{className:"mt-1 mb-0",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Caminho absoluto"}),": Começa com ",s.jsx("code",{children:"/"}),". Ex: ",s.jsx("code",{children:"/home/joao/Downloads"}),". Funciona de qualquer lugar no sistema."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Caminho relativo"}),": Não começa com ",s.jsx("code",{children:"/"}),". Ex: ",s.jsx("code",{children:"Downloads"})," ou ",s.jsx("code",{children:"../etc"}),". É relativo ao diretório em que você está agora."]}),s.jsxs("li",{children:[s.jsx("code",{children:"."})," (ponto simples) = o diretório atual"]}),s.jsxs("li",{children:[s.jsx("code",{children:".."})," (dois pontos) = diretório pai (um nível acima)"]}),s.jsxs("li",{children:[s.jsx("code",{children:"~"})," (til) = diretório home do usuário atual (",s.jsx("code",{children:"/home/seu-usuario"}),")"]})]})}),s.jsx("h2",{children:"Atalhos de Teclado no Terminal"}),s.jsx(v,{title:"Atalhos essenciais para produtividade",code:`Ctrl + C      # Cancelar/interromper o comando em execução
Ctrl + Z      # Pausar processo e mandá-lo para background
Ctrl + D      # Fechar o terminal (ou encerrar entrada de texto com EOF)
Ctrl + L      # Limpar a tela (equivale ao comando "clear")
Ctrl + A      # Mover cursor para o INÍCIO da linha
Ctrl + E      # Mover cursor para o FIM da linha
Ctrl + U      # Apagar tudo ANTES do cursor (do início até o cursor)
Ctrl + K      # Apagar tudo DEPOIS do cursor (do cursor até o fim)
Ctrl + W      # Apagar a palavra anterior (antes do cursor)
Ctrl + R      # Pesquisar no histórico de comandos (reverse search)
Alt + .       # Inserir o último ARGUMENTO do comando anterior
Tab           # Autocompletar nome de arquivo, diretório ou comando
Tab Tab       # Mostrar TODAS as possibilidades de autocomplete
↑ / ↓         # Navegar pelo histórico de comandos`}),s.jsx("h2",{children:"Histórico de Comandos"}),s.jsx(v,{title:"Reutilizando comandos do histórico",code:`# Ver histórico completo de comandos
history
# Mostra uma lista numerada de todos os comandos anteriores

# Ver apenas os últimos N comandos
history 20    # Ver os últimos 20

# Executar o comando de número específico do histórico
!42           # Executa exatamente o que estava na linha 42 do history

# Executar o último comando que COMEÇOU com "apt"
!apt

# Repetir o último comando executado
!!

# Pesquisar no histórico interativamente (muito útil!):
# Pressione Ctrl+R e comece a digitar qualquer parte do comando
# (reverse-i-search)\`apt': sudo apt update
# Continue pressionando Ctrl+R para ver resultados anteriores

# Limpar o histórico (apaga todos os comandos salvos)
history -c`})]})}function kv(){return s.jsxs(le,{title:"Manipulação de Arquivos",subtitle:"cp, mv, rm, mkdir, touch, ln — criando, copiando, movendo e removendo arquivos e diretórios com segurança e eficiência.",difficulty:"iniciante",timeToRead:"20 min",children:[s.jsx("p",{children:"Manipular arquivos é uma das atividades mais básicas e importantes no terminal Linux. Esses comandos parecem simples mas têm opções poderosas que economizam muito tempo no dia a dia. Aprenda-os bem — você os usará constantemente."}),s.jsx("h2",{children:"mkdir — Criar Diretórios"}),s.jsx(v,{title:"Criando diretórios",code:`# Criar um diretório simples
mkdir MeuDiretorio

# -p = parents (criar diretórios pais se não existirem)
# Sem -p, daria erro se /home/joao/Projetos/novo-site não existisse
mkdir -p /home/joao/Projetos/novo-site/src/components

# Criar múltiplos diretórios de uma vez (apenas separe por espaço)
mkdir pasta1 pasta2 pasta3

# -m = mode (definir permissões ao criar)
# 755 = dono pode tudo, grupo e outros só podem ler e entrar
mkdir -m 755 diretorio-publico
# 700 = apenas o dono tem acesso (grupo e outros não podem nem entrar)
mkdir -m 700 diretorio-privado

# Criar estrutura completa de projeto de uma vez com chaves {}:
# {src,tests,docs} = criar três pastas: src, tests e docs
mkdir -p meu-projeto/{src,tests,docs,public/{css,js,img}}`}),s.jsx("h2",{children:"touch — Criar Arquivos Vazios"}),s.jsx(v,{title:"Criando arquivos com touch",code:`# Criar um arquivo vazio
touch arquivo.txt
# Se o arquivo já existir, touch apenas atualiza sua data de modificação.

# Criar múltiplos arquivos de uma vez
touch index.html style.css script.js

# -t = timestamp (definir data de modificação específica)
# Formato: AAAAMMDDHHMM
touch -t 202401011200 arquivo.txt
# Define a data como 2024-01-01 às 12:00`}),s.jsx("h2",{children:"cp — Copiar Arquivos e Diretórios"}),s.jsx(v,{title:"Copiando com todas as flags explicadas",code:`# Copiar um arquivo para outro local
cp arquivo.txt /tmp/

# Copiar e renomear ao mesmo tempo (especifique o nome de destino)
cp arquivo.txt /tmp/copia-do-arquivo.txt

# Copiar múltiplos arquivos para um diretório (destino deve ser diretório)
cp foto1.jpg foto2.jpg video.mp4 /media/backup/

# -r = recursive (recursivo) — OBRIGATÓRIO para copiar diretórios!
# Sem -r, dá erro ao tentar copiar uma pasta.
cp -r /home/joao/Projetos /media/backup/

# -a = archive (arquivo/preservar tudo)
# Equivale a -r + preservar permissões, timestamps, links simbólicos e donos
# Use quando quiser uma cópia IDÊNTICA ao original
cp -a /home/joao/Projetos /media/backup/

# -u = update (atualizar)
# Copia apenas se o arquivo de origem for MAIS NOVO que o destino
# Útil para sincronização manual
cp -u arquivo.txt /media/backup/

# -v = verbose (verboso)
# Mostra cada arquivo sendo copiado (útil para ver o progresso)
cp -rv /home/joao/Projetos /media/backup/

# -i = interactive (interativo)
# Pergunta antes de sobrescrever arquivos existentes no destino
cp -i arquivo.txt /tmp/

# -n = no-clobber (não substituir)
# NUNCA sobrescreve — pula silenciosamente se o destino existir
cp -n arquivo.txt /tmp/

# -b = backup (fazer cópia de segurança antes de sobrescrever)
# Cria /tmp/arquivo.txt~ antes de sobrescrever com o novo
cp -b arquivo.txt /tmp/

# --progress = mostrar barra de progresso (para arquivos grandes)
cp --progress arquivo-grande.iso /media/usb/`}),s.jsx("h2",{children:"mv — Mover e Renomear"}),s.jsx(v,{title:"Movendo e renomeando arquivos",code:`# Renomear um arquivo (mover para o mesmo lugar com novo nome)
mv nome-antigo.txt nome-novo.txt

# Mover um arquivo para outro diretório
mv arquivo.txt /tmp/

# Mover e renomear ao mesmo tempo
mv rascunho.txt /home/joao/Documents/relatorio-final.txt

# Mover múltiplos arquivos para um diretório
# Quando o destino é um diretório, todos os arquivos vão para lá
mv *.jpg /home/joao/Pictures/

# Mover diretório inteiro (não precisa de -r como o cp)
mv Projetos/ /media/backup/

# -i = interactive (interativo)
# Pergunta "sobrescrever?" antes de substituir arquivo existente
mv -i arquivo.txt /tmp/

# -n = no-clobber (não substituir)
# Nunca sobrescreve — ignora silenciosamente se o destino existir
mv -n arquivo.txt /tmp/

# -v = verbose (verboso)
# Mostra o que está sendo movido
mv -v pasta-antiga/ /nova/localização/

# Renomear em lote com um loop:
for f in *.jpeg; do
    mv "$f" "\${f%.jpeg}.jpg"
    # \${f%.jpeg} = remove a extensão .jpeg do nome
    # então adiciona .jpg no lugar
done`}),s.jsx("h2",{children:"rm — Remover Arquivos e Diretórios"}),s.jsxs(G,{type:"danger",title:"Não existe lixeira no terminal!",children:["Arquivos removidos com ",s.jsx("code",{children:"rm"}),' são deletados permanentemente — sem lixeira, sem "Ctrl+Z". Se usar curingas (*) com descuido, pode apagar coisas importantes. Na dúvida, use ',s.jsx("code",{children:"rm -i"})," para confirmar cada remoção, ou mova para",s.jsx("code",{children:"/tmp/"})," primeiro e só depois delete."]}),s.jsx(v,{title:"Removendo arquivos com segurança",code:`# Remover um arquivo (não pede confirmação)
rm arquivo.txt

# Remover múltiplos arquivos de uma vez
rm foto1.jpg foto2.jpg video.mp4

# -i = interactive (interativo) — RECOMENDADO para iniciantes!
# Pergunta "remover este arquivo?" para cada arquivo antes de deletar
rm -i *.log

# -r = recursive (recursivo)
# Necessário para remover diretórios e todo o seu conteúdo
rm -r diretorio/

# -f = force (forçar)
# Remove sem pedir confirmação e sem dar erro se o arquivo não existir
rm -f arquivo-que-pode-nao-existir.txt

# -rf combinados = remover diretório inteiro sem confirmação (MUITO PERIGOSO!)
rm -rf diretorio/
# Use com extremo cuidado. rm -rf /pasta-errada pode destruir o sistema.

# -v = verbose (verboso)
# Mostra cada arquivo sendo removido
rm -rv diretorio/

# Prática mais segura: verificar ANTES de remover
ls *.log       # Ver o que seria removido
rm -i *.log    # Remover com confirmação um a um

# Alternativa segura: mover para /tmp antes de deletar definitivamente
mv arquivo-duvidoso.conf /tmp/
# O /tmp é limpo automaticamente no reboot — dá tempo de recuperar se errar`}),s.jsx("h2",{children:"ln — Links Simbólicos"}),s.jsx(v,{title:"Criando links (atalhos) no Linux",code:`# -s = symbolic (simbólico) — o tipo de link mais comum
# Um symlink é como um "atalho" do Windows: aponta para outro arquivo/pasta
ln -s /caminho/original /caminho/do/link

# Exemplos práticos:

# Criar atalho para uma versão específica do Python:
ln -s /usr/bin/python3.12 /usr/local/bin/python

# Criar atalho de uma pasta de projeto no seu home:
ln -s /opt/meu-projeto /home/joao/meu-projeto
# Agora /home/joao/meu-projeto aponta para /opt/meu-projeto

# Ativar site no Nginx (symlink de sites-available para sites-enabled):
ln -s /etc/nginx/sites-available/meu-site /etc/nginx/sites-enabled/meu-site

# Ver para onde um symlink aponta:
ls -la /etc/nginx/sites-enabled/
# lrwxrwxrwx  meu-site -> ../sites-available/meu-site
# ^ l = link simbólico

# Remover um symlink (use rm, NÃO use rm -r!):
rm /etc/nginx/sites-enabled/meu-site   # CORRETO — remove apenas o link
# rm -r /etc/nginx/sites-enabled/meu-site  ← ERRADO: removeria o destino também!`}),s.jsx("h2",{children:"Wildcards — Curingas"}),s.jsx(v,{title:"Selecionando múltiplos arquivos com padrões",code:`# * = qualquer sequência de caracteres (zero ou mais)
ls *.txt          # todos os arquivos que TERMINAM em .txt
rm *.log          # remover todos os arquivos que terminam em .log
cp *.jpg /tmp/    # copiar todos os .jpg

# ? = exatamente UM caractere qualquer
ls foto?.jpg      # foto1.jpg, foto2.jpg (mas NÃO foto10.jpg — são 2 chars)

# [] = qualquer caractere DENTRO dos colchetes
ls foto[123].jpg    # aceita: foto1.jpg, foto2.jpg, foto3.jpg
ls arquivo[a-z].txt # aceita: arquivoa.txt, arquivob.txt ... arquivoz.txt
ls *.[ch]           # aceita: arquivo.c e arquivo.h (código em C)

# {} = alternativas separadas por vírgula (brace expansion)
# Não é um curinga, mas expande para múltiplos termos antes de executar
echo arquivo.{txt,pdf,jpg}
# Saída: arquivo.txt arquivo.pdf arquivo.jpg

mkdir -p projeto/{src,docs,tests}
# Equivale a:
# mkdir -p projeto/src
# mkdir -p projeto/docs
# mkdir -p projeto/tests

cp arquivo.{conf,conf.bak}
# Equivale a: cp arquivo.conf arquivo.conf.bak (cria backup renomeando)`})]})}function Gv(){return s.jsxs(le,{title:"Visualizando Arquivos e Logs",subtitle:"cat, less, head, tail, grep, wc — lendo, filtrando e analisando conteúdo de arquivos de forma eficiente.",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx("p",{children:"Saber ler e filtrar conteúdo de arquivos é fundamental no Linux — especialmente para analisar logs, verificar configurações e processar dados. Esses comandos são suas ferramentas de leitura e inspeção do dia a dia."}),s.jsx("h2",{children:"cat — Mostrar Conteúdo de Arquivos"}),s.jsx(v,{title:"cat: concatenar e exibir arquivos",code:`# Exibir o conteúdo de um arquivo na tela
cat arquivo.txt
# cat = concatenate (concatenar). Pode mostrar um ou vários arquivos em sequência.

# Exibir múltiplos arquivos em sequência (um após o outro)
cat arquivo1.txt arquivo2.txt

# -n = number (numerar as linhas)
cat -n arquivo.txt
# Saída:
#      1	Primeira linha
#      2	Segunda linha
#      3	Terceira linha

# -A = show all (mostrar tudo, incluindo caracteres especiais)
# Tabs aparecem como ^I, fim de linha como $
# Útil para detectar problemas de formatação em scripts
cat -A script.sh

# Criar um arquivo novo digitando o conteúdo diretamente:
cat > novo-arquivo.txt
# Digite o conteúdo, pressione Enter para nova linha.
# Pressione Ctrl+D quando terminar (EOF = End Of File).

# Concatenar dois arquivos em um terceiro:
cat parte1.txt parte2.txt > completo.txt
# > = redirecionar saída para arquivo (cria ou sobrescreve)

# Adicionar conteúdo ao FINAL de um arquivo existente:
cat adicao.txt >> arquivo-existente.txt
# >> = append (adicionar ao fim, sem apagar o que já existe)`}),s.jsx("h2",{children:"less — Navegação em Arquivos Longos"}),s.jsx(v,{title:"less: ler arquivos sem travamento",code:`# Abrir arquivo com paginação (essencial para arquivos longos!)
less /var/log/syslog
# Diferente do cat, o less não despeja tudo na tela de uma vez.
# Você navega pelo arquivo como num leitor.

# === TECLAS DE NAVEGAÇÃO DENTRO DO LESS ===
# Espaço ou PgDown  → Avançar uma página
# b ou PgUp         → Voltar uma página
# ↑ ↓               → Avançar/voltar uma linha
# g                 → Ir para o INÍCIO do arquivo
# G                 → Ir para o FIM do arquivo
# q                 → Sair do less

# Pesquisar dentro do less:
# /termo    → buscar "termo" para frente (n = próxima ocorrência, N = anterior)
# ?termo    → buscar "termo" para trás

# Monitorar arquivo em tempo real (como logs ao vivo):
less +F /var/log/syslog
# +F = Follow mode (equivalente ao tail -f, mas dentro do less)
# Ctrl+C para sair do modo follow e voltar a navegar normalmente
# q para sair do less completamente

# -N = Number lines (mostrar número de cada linha)
less -N arquivo.txt`}),s.jsx("h2",{children:"head e tail — Começo e Fim de Arquivos"}),s.jsx(v,{title:"head e tail: ver partes do arquivo",code:`# head: ver as primeiras linhas de um arquivo

# Ver as primeiras 10 linhas (padrão)
head /etc/passwd

# -n = number of lines (número de linhas)
head -n 20 /var/log/syslog   # Ver as primeiras 20 linhas
head -n 5 arquivo.txt        # Ver as primeiras 5 linhas

# -c = bytes count (número de bytes em vez de linhas)
head -c 500 arquivo.txt      # Ver os primeiros 500 bytes

# ---

# tail: ver as últimas linhas de um arquivo

# Ver as últimas 10 linhas (padrão)
tail /var/log/auth.log

# -n = number of lines (número de linhas)
tail -n 30 /var/log/syslog   # Ver as últimas 30 linhas
tail -n 50 /var/log/nginx/access.log

# -f = follow (seguir/monitorar em tempo real)
# O comando não termina — fica mostrando novas linhas à medida que aparecem
# Pressione Ctrl+C para sair
tail -f /var/log/syslog

# Monitorar MÚLTIPLOS arquivos ao mesmo tempo
tail -f /var/log/syslog /var/log/auth.log
# O tail indica qual arquivo tem novas entradas com um cabeçalho

# Combinar head e tail para ver um arquivo de ambos os lados:
echo "=== INÍCIO ===" && head -n 5 arquivo.txt
echo "=== FIM ===" && tail -n 5 arquivo.txt`}),s.jsx("h2",{children:"grep — Filtrar Linhas por Padrão"}),s.jsx(v,{title:"grep: seu melhor amigo para analisar logs",code:`# Buscar uma palavra em um arquivo
grep "erro" /var/log/syslog
# Mostra apenas as linhas que CONTÊM a palavra "erro"

# -i = ignore case (ignorar diferença entre maiúsculas e minúsculas)
grep -i "error" /var/log/syslog
# Encontra "error", "Error", "ERROR", etc.

# -n = number (mostrar o NÚMERO da linha)
grep -n "SSH" /etc/ssh/sshd_config
# Saída: 15:PermitRootLogin no    ← número 15 = linha 15 do arquivo

# -v = invert (inverter = mostrar linhas que NÃO contêm o padrão)
grep -v "^#" /etc/ssh/sshd_config
# ^# = linhas que COMEÇAM com # (comentários)
# -v inverte: mostra apenas as linhas que NÃO são comentários

# -c = count (contar quantas linhas combinam)
grep -c "Failed" /var/log/auth.log
# Saída: 47   ← há 47 linhas com "Failed"

# -l = list files (listar apenas os NOMES dos arquivos que contêm o padrão)
grep -rl "ubuntu" /etc/
# -r = recursive (buscar em todos os arquivos do diretório)
# -l = mostrar apenas o nome do arquivo, não o conteúdo

# -r = recursive (buscar em todos os arquivos de um diretório)
grep -r "PermitRootLogin" /etc/ssh/

# -B = before (mostrar N linhas ANTES da linha correspondente)
grep -B 2 "error" /var/log/nginx/error.log
# Mostra 2 linhas antes de cada linha com "error"

# -A = after (mostrar N linhas DEPOIS da linha correspondente)
grep -A 3 "FAILED" /var/log/auth.log
# Mostra 3 linhas depois de cada linha com "FAILED"

# -C = context (mostrar N linhas antes E depois)
grep -C 2 "error" /var/log/syslog
# Mostra 2 linhas antes E 2 depois de cada match

# -E = extended regex (usar expressão regular estendida)
grep -E "error|warning|critical" /var/log/syslog
# O | (pipe) dentro do grep -E significa OU: encontrar "error" OU "warning" OU "critical"

# === EXEMPLOS PRÁTICOS PARA O DIA A DIA ===

# Ver tentativas de login SSH falhas:
grep "Failed password" /var/log/auth.log

# Ver uso de sudo (quem rodou o quê como root):
grep "sudo" /var/log/auth.log

# Ver conexões bloqueadas pelo firewall UFW:
grep "UFW BLOCK" /var/log/ufw.log

# Ver erros do Nginx:
grep -i "error" /var/log/nginx/error.log

# Ver mensagens recentes do kernel:
grep "kernel" /var/log/syslog | tail -20
# O | passa a saída do grep para o tail, que mostra apenas as últimas 20`}),s.jsx("h2",{children:"wc — Contar Linhas, Palavras e Bytes"}),s.jsx(v,{title:"wc: word count (contador)",code:`# wc = word count (contagem de palavras)
# Por padrão mostra: linhas, palavras e bytes

wc arquivo.txt
# 42 315 1823 arquivo.txt
# ^   ^   ^
# linhas  palavras  bytes/caracteres

# -l = lines (contar apenas LINHAS)
wc -l /var/log/syslog
# 12345 /var/log/syslog   ← 12345 linhas no arquivo

# -w = words (contar apenas PALAVRAS)
wc -w arquivo.txt

# -c = characters/bytes (contar apenas BYTES)
wc -c arquivo.txt

# Uso com pipe (muito comum na prática):

# Quantas tentativas de login falhas houve?
grep "Failed password" /var/log/auth.log | wc -l

# Quantos processos estão rodando?
ps aux | wc -l

# Quantos arquivos há em um diretório?
ls /var/log | wc -l`}),s.jsx("h2",{children:"sort e uniq — Ordenar e Deduplicar"}),s.jsx(v,{title:"sort e uniq: organizando dados",code:`# sort: ordenar linhas de um arquivo

# Ordenar alfabeticamente (padrão)
sort arquivo.txt

# -r = reverse (ordem reversa/decrescente)
sort -r arquivo.txt

# -n = numeric (ordenar NUMERICAMENTE, não alfabeticamente)
# Sem -n: "10" vem antes de "2" (pois "1" < "2" alfabeticamente)
# Com -n: "2" vem antes de "10" (numericamente correto)
sort -n numeros.txt

# -k = key (ordenar por uma coluna específica)
# -k5 = ordenar pela 5ª coluna
ls -l | sort -k5 -n    # Ordenar pela coluna de tamanho (5ª), numericamente

# ---

# uniq: remover ou contar linhas DUPLICADAS
# IMPORTANTE: o arquivo precisa estar ordenado para o uniq funcionar corretamente!

sort lista.txt | uniq       # Remover duplicatas
sort lista.txt | uniq -c   # Contar ocorrências de cada linha
# -c = count (contar)
# Saída:
#       3 apple    ← "apple" aparece 3 vezes
#       1 banana
#       2 cherry

sort lista.txt | uniq -d   # -d = duplicates: mostrar apenas linhas duplicadas
sort lista.txt | uniq -u   # -u = unique: mostrar apenas linhas que aparecem UMA vez

# EXEMPLO PRÁTICO: IPs que mais tentaram invadir via SSH
grep "Failed password" /var/log/auth.log | \\
    grep -oE '[0-9]+.[0-9]+.[0-9]+.[0-9]+' | \\
    # -o = only matching (mostrar APENAS a parte que combina, não a linha inteira)
    # -E = extended regex (para usar o padrão de IP)
    sort | \\
    uniq -c | \\
    sort -rn | \\
    # -r = reverso (maior primeiro)
    # -n = numérico
    head -10   # Top 10 IPs mais frequentes`}),s.jsx("h2",{children:"Lendo Logs Importantes do Ubuntu"}),s.jsx(v,{title:"Os logs mais úteis do dia a dia",code:`# Log geral do sistema (tudo que acontece no Ubuntu)
tail -f /var/log/syslog

# Autenticação: login, SSH, sudo (monitorar segurança)
tail -f /var/log/auth.log

# Log do kernel (hardware, drivers, erros de boot)
dmesg              # Mostrar todas as mensagens do kernel
dmesg | tail -30   # Apenas as 30 mais recentes
dmesg | grep -i error  # Apenas erros

# Histórico de instalações de pacotes
cat /var/log/apt/history.log | tail -50
cat /var/log/dpkg.log | tail -50

# Logs de serviços web
sudo tail -f /var/log/nginx/access.log   # Todas as requisições ao Nginx
sudo tail -f /var/log/nginx/error.log    # Apenas erros do Nginx

# Todos os logs via journalctl (sistema do systemd):
journalctl -n 50        # -n = número: ver as últimas 50 linhas
journalctl -f           # -f = follow: monitorar em tempo real
journalctl -p err       # -p = priority: apenas erros (err = nível de erro)
journalctl -u nginx -f  # -u = unit: logs de um serviço específico`})]})}function Bv(){return s.jsxs(le,{title:"Permissões de Arquivos",subtitle:"chmod, chown, umask — entendendo e gerenciando o sistema de permissões do Linux de forma completa e segura.",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("p",{children:"O sistema de permissões do Linux é um dos seus recursos mais poderosos e importantes para segurança. Ele controla quem pode ler, escrever e executar cada arquivo ou diretório. Entender permissões é essencial para administrar qualquer sistema Linux."}),s.jsx("h2",{children:"Lendo Permissões"}),s.jsx(v,{title:"Interpretando a saída do ls -l",code:`ls -l /home/joao/
# -l = long format (formato longo) — mostra permissões, dono, tamanho e data

# Saída:
# -rw-r--r--  1 joao joao  3524 mar 27 10:00 .bashrc
# drwxr-xr-x  2 joao joao  4096 mar 27 09:00 Downloads
# -rwxr-xr-x  1 joao joao   420 mar 26 15:00 script.sh
# lrwxrwxrwx  1 joao joao    12 mar 25 10:00 link -> /etc/arquivo

# === ESTRUTURA DOS 10 PRIMEIROS CARACTERES ===
# [tipo][user: 3 chars][group: 3 chars][others: 3 chars]
#  -       rw-             r--             r--

# TIPO DE ARQUIVO (1º caractere):
# -  = arquivo regular (arquivo de texto, executável, imagem, etc.)
# d  = directory (diretório/pasta)
# l  = link simbólico (atalho que aponta para outro arquivo)
# c  = dispositivo de caractere (ex: /dev/tty — terminal)
# b  = dispositivo de bloco (ex: /dev/sda — disco rígido)

# PERMISSÕES (para cada grupo de 3 caracteres):
# r = read  (leitura)    = valor 4
# w = write (escrita)    = valor 2
# x = execute (execução) = valor 1
# - = sem permissão      = valor 0

# EXEMPLOS DE COMBINAÇÕES:
# rw-  = leitura + escrita (sem execução)    = 4+2+0 = 6
# r-x  = leitura + execução (sem escrita)    = 4+0+1 = 5
# rwx  = leitura + escrita + execução (tudo) = 4+2+1 = 7
# r--  = somente leitura                     = 4+0+0 = 4
# ---  = sem nenhuma permissão               = 0+0+0 = 0`}),s.jsx("h2",{children:"chmod — Mudar Permissões"}),s.jsx("h3",{children:"Modo Numérico (Octal)"}),s.jsx(v,{title:"chmod com números octais",code:`# Formato: chmod [user][group][others] arquivo
# Cada número = soma das permissões: r=4, w=2, x=1

# PERMISSÕES MAIS COMUNS:
chmod 644 arquivo.txt   # -rw-r--r--  (arquivos comuns: dono lê/escreve, outros só leem)
chmod 755 script.sh     # -rwxr-xr-x  (scripts: dono executa, outros podem executar também)
chmod 600 chave.pem     # -rw-------  (arquivos privados: só o dono acessa — ex: chaves SSH)
chmod 700 .ssh/         # drwx------  (diretório privado: só o dono entra)
chmod 777 /tmp/         # drwxrwxrwx  (qualquer um pode tudo — EVITAR em produção!)

# COMO CALCULAR MANUALMENTE:
# 7 = rwx = 4+2+1 (leitura + escrita + execução)
# 6 = rw- = 4+2+0 (leitura + escrita)
# 5 = r-x = 4+0+1 (leitura + execução)
# 4 = r-- = 4+0+0 (somente leitura)
# 0 = --- = 0+0+0 (nenhuma permissão)

# LEITURA DO chmod 755:
# 7 (user/dono)  = rwx = pode ler, escrever E executar
# 5 (group)      = r-x = pode ler e executar (mas NÃO escrever)
# 5 (others)     = r-x = pode ler e executar (mas NÃO escrever)

# -R = Recursive (recursivo) — aplica em TODOS os arquivos e subpastas dentro do diretório
chmod -R 755 /var/www/html/
# Sem -R, apenas o diretório raiz receberia a permissão.`}),s.jsx("h3",{children:"Modo Simbólico (mais legível para iniciantes)"}),s.jsx(v,{title:"chmod com símbolos — mais fácil de entender",code:`# Formato: chmod [quem][operação][permissão] arquivo

# QUEM:
# u = user (dono do arquivo)
# g = group (grupo do arquivo)
# o = others (todos os outros usuários)
# a = all (todos: u + g + o ao mesmo tempo)

# OPERAÇÃO:
# + = adicionar essa permissão (sem remover as existentes)
# - = remover essa permissão (sem mudar as outras)
# = = definir EXATAMENTE essas permissões (apaga as antigas)

# PERMISSÃO: r (leitura), w (escrita), x (execução)

# Exemplos práticos:

# Dar permissão de execução ao DONO do arquivo
chmod u+x script.sh
# u = user/dono, + = adicionar, x = execução

# Remover permissão de escrita do GRUPO e de OUTROS
chmod go-w arquivo.txt
# g = group, o = others, - = remover, w = escrita

# Dar permissão de leitura a TODOS
chmod a+r arquivo.txt
# a = all (todos: dono, grupo e outros)

# Definir EXATAMENTE as permissões do grupo como "somente leitura"
chmod g=r arquivo.txt
# = define exatamente: grupo terá r, mas NÃO terá w nem x

# Remover execução de TODOS (dono, grupo e outros)
chmod a-x arquivo.txt

# Múltiplas operações de uma vez (separadas por vírgula)
chmod u+x,g-w,o-r arquivo.txt
# dono ganha execução, grupo perde escrita, outros perdem leitura

# -R = Recursive (recursivo) — aplicar em toda a árvore de diretórios
chmod -R 755 /var/www/html/

# Aplicar APENAS em arquivos (não em diretórios):
find /var/www -type f -exec chmod 644 {} ;
# -type f = apenas arquivos (f = file)
# -exec = executar chmod 644 para cada arquivo encontrado
# {} = onde o nome do arquivo atual será inserido
# ; = fim do comando do -exec

# Aplicar APENAS em diretórios:
find /var/www -type d -exec chmod 755 {} ;
# -type d = apenas diretórios (d = directory)`}),s.jsxs(G,{type:"warning",title:"Permissões em diretórios são diferentes!",children:["Para ",s.jsx("strong",{children:"diretórios"}),", as letras têm significados diferentes dos arquivos:",s.jsxs("ul",{className:"mt-1 mb-0",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"r"})," = listar o conteúdo do diretório (",s.jsx("code",{children:"ls"}),")"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"w"})," = criar, renomear ou deletar arquivos DENTRO do diretório"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"x"})," = entrar no diretório (",s.jsx("code",{children:"cd"}),") e acessar seus conteúdos"]})]}),"Um diretório com ",s.jsx("code",{children:"r--"})," permite ver a lista mas não entrar. Com ",s.jsx("code",{children:"--x"}),"você pode entrar mas não ver a lista. Na prática sempre use ",s.jsx("code",{children:"r-x"})," (5) ou ",s.jsx("code",{children:"rwx"})," (7) para diretórios."]}),s.jsx("h2",{children:"chown — Mudar Dono e Grupo"}),s.jsx(v,{title:"Mudando a propriedade de arquivos",code:`# Mudar o DONO de um arquivo
sudo chown maria arquivo.txt
# sudo necessário pois apenas root pode mudar o dono de arquivos

# Mudar DONO e GRUPO ao mesmo tempo (formato: dono:grupo)
sudo chown maria:www-data arquivo.txt
# Dono passa a ser "maria", grupo passa a ser "www-data"

# Mudar APENAS o grupo (deixar dois pontos antes do grupo)
sudo chown :www-data arquivo.txt
# Equivalente a: sudo chgrp www-data arquivo.txt

# -R = Recursive (recursivo) — aplicar em todos os arquivos do diretório
sudo chown -R www-data:www-data /var/www/html/
# Muito usado para servidores web: todos os arquivos do site
# pertencem ao usuário do servidor web (www-data)

# -v = verbose (verboso) — mostrar o que está sendo alterado
sudo chown -Rv www-data:www-data /var/www/html/

# EXEMPLO PRÁTICO para servidor web:
# 1. Atribuir arquivos ao servidor web:
sudo chown -R www-data:www-data /var/www/meu-site/

# 2. Mas o desenvolvedor também precisa editar:
#    Adicione o usuário ao grupo www-data:
sudo usermod -aG www-data joao
# usermod = modificar usuário
# -a = append (adicionar ao grupo, sem remover de outros grupos)
# -G = Groups (lista de grupos suplementares)

# 3. Dar permissão de escrita ao grupo:
chmod -R g+w /var/www/meu-site/

# 4. Para que as novas permissões de grupo funcionem:
#    O usuário precisa fazer logout e login novamente.`}),s.jsx("h2",{children:"Permissões Especiais"}),s.jsx(v,{title:"SUID, SGID e Sticky Bit explicados",code:`# === SUID (Set User ID) ===
# Quando ativo em um executável, ele roda com a identidade do DONO do arquivo,
# não do usuário que o executou.

# Exemplo clássico: /usr/bin/passwd
ls -la /usr/bin/passwd
# -rwsr-xr-x 1 root root 68208 /usr/bin/passwd
#     ^ s = SUID ativo (o x virou s)

# Quando VOCÊ executa "passwd", ele roda como ROOT temporariamente
# porque precisa escrever em /etc/shadow (arquivo acessível só pelo root)

chmod u+s script.sh   # Ativar SUID via modo simbólico
chmod 4755 script.sh  # Ativar SUID via octal (o 4 na frente ativa o SUID)
# 4 = SUID | 2 = SGID | 1 = Sticky Bit

# === SGID (Set Group ID) ===
# Em executáveis: roda com o grupo do arquivo, não do usuário atual.
# Em DIRETÓRIOS: novos arquivos herdam o grupo do diretório (não o do criador).

chmod g+s projeto/     # Ativar SGID via simbólico
chmod 2755 projeto/    # Ativar SGID via octal (2 na frente)

# Útil para projetos colaborativos:
# Se o diretório /opt/projeto tem grupo "equipe" e SGID ativo,
# todo arquivo criado dentro terá grupo "equipe" automaticamente.

# === STICKY BIT ===
# Em diretórios: apenas o DONO do arquivo pode deletar seus próprios arquivos,
# mesmo que outros tenham permissão de escrita no diretório.

ls -la /tmp/
# drwxrwxrwt ← o t final = sticky bit ativo (o x virou t)
#          ^

# Qualquer usuário pode criar arquivos em /tmp,
# mas cada um só pode deletar os próprios arquivos.

chmod +t /compartilhado/    # Ativar sticky bit via simbólico
chmod 1777 /compartilhado/  # Ativar sticky bit via octal (1 na frente)

# Ver todos os bits especiais:
stat -c %a arquivo
# -c = format (usar formato personalizado)
# %a = exibir permissões em octal (ex: 4755 = SUID + 755)`}),s.jsx("h2",{children:"umask — Permissões Padrão para Novos Arquivos"}),s.jsx(v,{title:"Como o umask define permissões padrão",code:`# Ver o umask atual do usuário
umask
# 0022   ← o padrão do Ubuntu

# Como funciona o umask:
# Novos ARQUIVOS começam com permissão máxima 666 (rw-rw-rw-)
# Novos DIRETÓRIOS começam com permissão máxima 777 (rwxrwxrwx)
# O umask SUBTRAI essas permissões:

# Com umask 022:
# Arquivos:    666 - 022 = 644 (rw-r--r--)
# Diretórios:  777 - 022 = 755 (rwxr-xr-x)

# Verificar na prática:
touch novo-arquivo.txt   # Cria com 644
mkdir novo-diretorio/    # Cria com 755
ls -la

# Mudar o umask para a sessão atual:
umask 027
# Arquivos:    666 - 027 = 640 (rw-r-----)  ← outros sem acesso!
# Diretórios:  777 - 027 = 750 (rwxr-x---)

# Configurar umask permanentemente para seu usuário:
echo "umask 022" >> ~/.bashrc
# >> = append (adicionar ao final do arquivo sem apagar o conteúdo)
# ~/.bashrc é executado a cada abertura de terminal`}),s.jsx("h2",{children:"ACL — Controle de Acesso Avançado"}),s.jsx("p",{children:"O sistema padrão do Linux só permite definir permissões para três entidades: dono, grupo e outros. A ACL (Access Control List) permite dar permissões específicas para qualquer usuário ou grupo, indo além dessa limitação."}),s.jsx(v,{title:"ACL: permissões granulares por usuário",code:`# Instalar ferramentas de ACL
sudo apt install acl

# setfacl = set file ACL (definir ACL de arquivo)
# -m = modify (modificar/adicionar uma entrada na ACL)
# u:maria:rw = user:maria:permissões (dar à maria leitura e escrita)
setfacl -m u:maria:rw arquivo.txt

# Dar permissão a um GRUPO específico
setfacl -m g:desenvolvedores:rw /var/www/meu-site/
# g = group (grupo), diferente do u = user (usuário)

# -R = Recursive (recursivo) — aplicar em todo o diretório
setfacl -R -m u:maria:rwx /var/www/meu-site/

# getfacl = get file ACL (ver as ACLs de um arquivo)
getfacl arquivo.txt
# Saída:
# file: arquivo.txt
# owner: joao
# group: joao
# user::rw-           ← permissões do dono (modo padrão)
# user:maria:rw-      ← ACL extra: maria tem rw
# group::r--          ← permissões do grupo (modo padrão)
# mask::rw-           ← permissão máxima efetiva para grupo e ACLs
# other::r--          ← permissões de outros (modo padrão)

# -x = remove (remover uma entrada específica da ACL)
setfacl -x u:maria arquivo.txt

# -b = remove all (remover TODAS as ACLs do arquivo)
setfacl -b arquivo.txt

# Quando ACL está ativa, ls -l mostra um "+" ao final das permissões:
# -rw-rw-r--+  joao joao  arquivo.txt
#            ^ + = este arquivo tem ACLs adicionais`})]})}function _v(){return s.jsxs(le,{title:"Usuários e Grupos",subtitle:"Criando e gerenciando usuários, grupos e privilégios sudo no Ubuntu — a base da administração de sistemas.",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsxs("p",{children:["O Linux é um sistema multiusuário. Entender como criar, modificar e gerenciar usuários e grupos é fundamental tanto para uso pessoal quanto para administrar servidores Ubuntu. O Ubuntu tem algumas diferenças em relação a outras distribuições — principalmente o uso do ",s.jsx("strong",{children:"sudo"})," ao invés de habilitar o login root diretamente."]}),s.jsx("h2",{children:"O Sistema de Usuários no Ubuntu"}),s.jsxs(G,{type:"info",title:"Ubuntu e o usuário root",children:["Por padrão, o Ubuntu ",s.jsx("strong",{children:"desabilita o login direto como root"}),". Em vez disso, o primeiro usuário criado durante a instalação recebe privilégios sudo completos. Para executar comandos como root, use ",s.jsx("code",{children:"sudo"})," antes do comando. Para abrir um shell root temporário: ",s.jsx("code",{children:"sudo -i"})," ou ",s.jsx("code",{children:"sudo su"}),"."]}),s.jsx("h2",{children:"Identificando Usuários"}),s.jsx(v,{title:"Comandos para identificar usuários",code:`# Quem sou eu?
whoami
# joao

# Informações detalhadas: UID, GID e grupos
id
# uid=1000(joao) gid=1000(joao) grupos=1000(joao),4(adm),24(cdrom),27(sudo),46(plugdev)

# Ver informações de outro usuário
id maria

# Quem está logado no sistema agora?
who
w          # Versão mais detalhada (mostra o que cada um está fazendo)
last       # Histórico de logins`}),s.jsx("h2",{children:"Arquivos Fundamentais"}),s.jsx(v,{title:"Os arquivos de usuários do sistema",code:`# /etc/passwd — informações de todos os usuários
cat /etc/passwd | head -5
# root:x:0:0:root:/root:/bin/bash
# daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
# joao:x:1000:1000:João Silva,,,:/home/joao:/bin/bash

# Formato: usuario:x:UID:GID:GECOS:home:shell
# UID 0      = root
# UID 1-999  = usuários de sistema/serviços
# UID 1000+  = usuários normais

# /etc/shadow — senhas criptografadas (apenas root pode ler)
sudo cat /etc/shadow | grep joao

# /etc/group — definição dos grupos
cat /etc/group | grep sudo
# sudo:x:27:joao,maria  ← usuários no grupo sudo

# Ver grupos do usuário atual
groups
# joao adm cdrom sudo dip plugdev lpadmin sambashare`}),s.jsx("h2",{children:"Criando Usuários"}),s.jsx("h3",{children:"adduser (Método Recomendado no Ubuntu)"}),s.jsx(v,{title:"Criar usuário com adduser (interativo)",code:`# adduser é mais amigável que useradd no Ubuntu
sudo adduser maria

# Saída interativa:
# Adding user 'maria' ...
# New password: ****
# Retype new password: ****
# passwd: password updated successfully
# Changing the user information for maria
# Enter the new value, or press ENTER for the default
#         Full Name []: Maria Silva
#         Room Number []:
#         Work Phone []:
#         Home Phone []:
#         Other []:
# Is the information correct? [Y/n] Y

# adduser automaticamente:
# - Cria o diretório /home/maria
# - Copia arquivos padrão de /etc/skel
# - Define o shell como /bin/bash
# - Cria um grupo "maria"`}),s.jsx("h3",{children:"useradd (Modo Script — Mais Controle)"}),s.jsx(v,{title:"Criar usuário com useradd",code:`# Criar usuário da forma correta (com home e shell)
sudo useradd -m -s /bin/bash -c "Maria Silva" maria

# Flags importantes:
# -m = criar diretório home
# -s = definir shell padrão
# -c = comentário (nome completo)
# -G = grupos suplementares
# -u = UID específico

# Criar usuário e já adicionar a grupos extras
sudo useradd -m -s /bin/bash -G sudo,docker,www-data maria

# Definir senha após criar o usuário:
sudo passwd maria

# Criar usuário de sistema (para serviços — sem home, sem login)
sudo useradd -r -s /usr/sbin/nologin meu-servico`}),s.jsx("h2",{children:"Modificando Usuários"}),s.jsx(v,{title:"Modificar usuários existentes",code:`# Mudar senha de um usuário
sudo passwd maria

# Forçar mudança de senha no próximo login
sudo passwd -e maria

# Bloquear login de um usuário (sem deletar)
sudo passwd -l maria

# Desbloquear login
sudo passwd -u maria

# Mudar o shell padrão
sudo usermod -s /bin/zsh maria
sudo usermod -s /bin/bash maria

# Mudar o nome completo (GECOS)
sudo usermod -c "Maria Oliveira Silva" maria

# Mudar o diretório home
sudo usermod -d /novo/home/maria -m maria  # -m move os arquivos

# Mudar o nome de login (renomear usuário)
sudo usermod -l maria-nova maria

# Adicionar usuário a um grupo
sudo usermod -aG docker maria    # -a = append (não remove outros grupos)
sudo usermod -aG sudo maria      # Dar privilégios sudo

# Remover usuário de um grupo (via gpasswd)
sudo gpasswd -d maria docker`}),s.jsx("h2",{children:"Removendo Usuários"}),s.jsx(v,{title:"Remover usuários",code:`# Remover usuário (mantém o diretório home)
sudo deluser maria

# Remover usuário E o diretório home
sudo deluser --remove-home maria

# Remover usuário, home E arquivos do usuário em outros locais
sudo deluser --remove-all-files maria

# Ou usando userdel (mais básico):
sudo userdel maria        # Mantém home
sudo userdel -r maria     # Remove home também`}),s.jsx("h2",{children:"Grupos"}),s.jsx(v,{title:"Gerenciando grupos",code:`# Criar um novo grupo
sudo groupadd desenvolvedores

# Criar grupo com GID específico
sudo groupadd -g 1500 desenvolvedores

# Adicionar usuário a um grupo
sudo usermod -aG desenvolvedores joao
sudo usermod -aG desenvolvedores maria
# Ou:
sudo gpasswd -a joao desenvolvedores

# Remover usuário de um grupo
sudo gpasswd -d joao desenvolvedores

# Definir administradores do grupo
sudo gpasswd -A joao desenvolvedores  # joao pode gerenciar o grupo

# Ver membros de um grupo
getent group docker
cat /etc/group | grep desenvolvedores

# Mudar o grupo primário temporariamente na sessão atual
newgrp docker   # Você vira membro ativo do grupo docker até sair

# Remover grupo
sudo groupdel desenvolvedores

# Renomear grupo
sudo groupmod -n novo-nome desenvolvedores`}),s.jsxs(G,{type:"warning",title:"Efetividade de novos grupos",children:["Quando você adiciona um usuário a um novo grupo com ",s.jsx("code",{children:"usermod -aG"}),", a mudança só é efetiva na ",s.jsx("strong",{children:"próxima vez que o usuário fizer login"}),". Para aplicar imediatamente na sessão atual, use ",s.jsx("code",{children:"newgrp nome-do-grupo"})," ou faça logout/login."]}),s.jsx("h2",{children:"Sudo — Privilégios de Administrador"}),s.jsx(v,{title:"Configurando e usando o sudo",code:`# Executar comando como root
sudo apt update

# Executar como outro usuário específico
sudo -u www-data php artisan migrate

# Abrir shell root temporário (expire com exit):
sudo -i
sudo su
sudo -s

# Ver o que você tem permissão para executar com sudo
sudo -l

# Editar o arquivo sudoers com segurança (NUNCA edite direto!)
sudo visudo

# Conteúdo padrão do /etc/sudoers:
# root    ALL=(ALL:ALL) ALL
# %sudo   ALL=(ALL:ALL) ALL   ← Grupo sudo tem acesso total

# Dar sudo a um usuário:
# Método 1: Adicionar ao grupo sudo (RECOMENDADO)
sudo usermod -aG sudo maria

# Método 2: Adicionar entrada no sudoers
sudo visudo
# Adicionar linha: maria ALL=(ALL:ALL) ALL

# Permitir comando sem senha (ex: para scripts de automação):
# No sudoers:
# deploy ALL=(ALL:ALL) NOPASSWD: /usr/bin/systemctl restart nginx

# Criar arquivo de configuração sudo separado (melhor prática):
sudo visudo -f /etc/sudoers.d/maria
# Conteúdo: maria ALL=(ALL:ALL) ALL`}),s.jsx("h2",{children:"Grupos Importantes do Ubuntu"}),s.jsx(v,{title:"Grupos especiais que você precisa conhecer",code:`sudo        # Acesso completo de administrador (sudo)
adm         # Ler logs do sistema em /var/log
cdrom       # Acessar drive de CD/DVD
sudo        # Privilégios sudo
plugdev     # Montar dispositivos plug-and-play (USB, etc)
www-data    # Grupo do servidor web (Apache/Nginx)
docker      # Usar Docker sem sudo
lpadmin     # Gerenciar impressoras
sambashare  # Compartilhamento de arquivos Samba
dialout     # Acessar portas seriais (Arduino, modem)
video       # Acesso direto ao hardware de vídeo
audio       # Acesso ao hardware de áudio

# Ver todos os grupos disponíveis no sistema:
cat /etc/group | cut -d: -f1 | sort

# Ver a quais grupos você pertence:
groups $(whoami)`})]})}function Qv(){return s.jsxs(le,{title:"Processos e Monitoramento",subtitle:"ps, top, htop, kill, nice — monitorando, controlando e otimizando processos no Ubuntu.",difficulty:"intermediario",timeToRead:"20 min",children:[s.jsx("p",{children:"Um processo é um programa em execução. O Linux gerencia centenas de processos simultaneamente — do kernel aos seus aplicativos abertos. Saber monitorar e controlar processos é essencial para administrar um sistema Ubuntu com eficiência."}),s.jsx("h2",{children:"ps — Listar Processos"}),s.jsx(v,{title:"Listando processos com ps",code:`# Ver processos do usuário atual na sessão atual
ps

# Ver TODOS os processos do sistema (o mais usado)
ps aux

# Explicação das colunas do ps aux:
# USER   PID  %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
# root     1   0.0  0.2 167808  9876 ?        Ss   09:00   0:01 /sbin/init
# joao  1234   2.5  1.5 4567890 61440 pts/0  Sl+  10:00   0:15 firefox

# USER   = dono do processo
# PID    = Process ID (número único do processo)
# %CPU   = uso de CPU em porcentagem
# %MEM   = uso de memória RAM em porcentagem
# VSZ    = memória virtual total (KB)
# RSS    = memória física usada (KB)
# TTY    = terminal associado (? = sem terminal)
# STAT   = estado (S=sleeping, R=running, Z=zombie, T=stopped)
# START  = hora/data de início
# TIME   = tempo de CPU consumido
# COMMAND= comando que iniciou o processo

# Ver em formato de árvore (hierarquia pai→filho)
ps auxf
ps --forest

# Buscar um processo específico
ps aux | grep nginx
ps aux | grep python

# Ver apenas os PIDs de um programa
pgrep nginx
pgrep -l nginx  # Com o nome também`}),s.jsx("h2",{children:"top e htop — Monitor em Tempo Real"}),s.jsx(v,{title:"Monitoramento interativo de processos",code:`# Abrir o top (vem pré-instalado)
top

# Dentro do top:
# q  → Sair
# k  → Matar processo (pede o PID)
# r  → Mudar prioridade (renice)
# P  → Ordenar por uso de CPU
# M  → Ordenar por uso de memória
# 1  → Ver cada core de CPU separado
# u  → Filtrar por usuário
# s  → Mudar intervalo de atualização
# Espaço → Atualizar imediatamente

# Instalar o htop (muito mais amigável):
sudo apt install htop
htop

# Dentro do htop:
# F6 ou < > → Ordenar por coluna
# F5        → Modo de árvore (ver hierarquia)
# F9        → Matar processo (lista de sinais)
# F4        → Filtrar por nome
# F2        → Configurações (personalizar colunas)
# q         → Sair

# Para monitorar apenas um processo específico:
htop -p 1234,5678

# Instalar btop (mais bonito ainda):
sudo apt install btop
btop`}),s.jsx("h2",{children:"Sinais e Kill — Controlando Processos"}),s.jsx(v,{title:"Enviando sinais para processos",code:`# Ver lista de sinais disponíveis
kill -l

# Os mais importantes:
# SIGTERM (15) = Pedir educadamente para o processo terminar
# SIGKILL  (9) = Matar o processo imediatamente (sem chance de limpeza)
# SIGHUP   (1) = Recarregar configuração (usado por nginx, apache, etc.)
# SIGSTOP (19) = Pausar o processo
# SIGCONT (18) = Continuar processo pausado

# Terminar um processo pelo PID
kill 1234           # Envia SIGTERM (15) — padrão
kill -15 1234       # Explícito: SIGTERM
kill -9 1234        # SIGKILL — forçado (use apenas se SIGTERM não funcionar)
kill -SIGKILL 1234  # Equivalente ao -9

# Terminar processo pelo nome (mata todos com esse nome)
pkill nginx
pkill -9 firefox    # Forçar

# Matar processo e todos os seus filhos
pkill -TERM -P 1234  # Matar filhos do PID 1234
kill -- -1234         # Matar grupo do processo

# Matar todas as instâncias de um programa interativamente
killall firefox
killall -9 firefox   # Forçado

# Verificar qual processo está usando uma porta específica
sudo ss -tlnp | grep :80
sudo lsof -i :80
# Depois matar o processo que ocupa a porta:
sudo kill $(sudo lsof -t -i:80)`}),s.jsx("h2",{children:"nice e renice — Prioridade de Processos"}),s.jsx(v,{title:"Controlando prioridade de CPU",code:`# Nice value: de -20 (máxima prioridade) a 19 (mínima prioridade)
# Padrão: 0
# Processos comuns: 0
# Usuário root pode usar negativos (prioridade maior)
# Usuário normal só pode diminuir prioridade (aumentar niceness)

# Iniciar um processo com prioridade menor (menos CPU)
nice -n 10 tar -czf backup.tar.gz /home/  # Compressão pesada com baixa prioridade
nice -n 19 make -j4   # Compilar com mínima prioridade

# Iniciar com alta prioridade (apenas root)
sudo nice -n -10 ./programa-critico

# Mudar prioridade de um processo já em execução
renice -n 5 -p 1234      # Diminuir prioridade do PID 1234
renice -n 5 -u joao      # Diminuir prioridade de todos os processos do usuário
sudo renice -n -5 -p 1234 # Aumentar prioridade (precisa de root)

# Ver niceness dos processos no top:
# Coluna "NI" = niceness
# Coluna "PR" = prioridade real (20 + niceness)`}),s.jsx("h2",{children:"Jobs — Processos em Background"}),s.jsx(v,{title:"Gerenciando jobs em background",code:`# Executar comando em background (adicione & no final)
wget https://exemplo.com/arquivo-grande.iso &
# [1] 1234   ← [número do job] PID

# Ver jobs em background
jobs
# [1]+  Running    wget https://exemplo.com/arquivo-grande.iso &

# Pausar um processo em foreground
# Ctrl+Z  ← pausa e coloca em background como STOPPED

# Continuar processo pausado em background
bg %1   # Continuar job número 1 em background
bg      # Continuar o último job pausado

# Trazer processo do background para o foreground
fg %1   # Trazer job número 1 para foreground
fg      # Trazer o último job

# Matar um job específico
kill %1

# Exemplo prático: iniciar e gerenciar múltiplas tarefas
long-running-script.sh &     # [1] 1234
another-script.sh &          # [2] 1235
jobs                          # Ver ambos
fg %1                         # Trazer o primeiro para foreground
Ctrl+Z                        # Pausar
bg %1                         # Mandar de volta para background`}),s.jsx("h2",{children:"nohup — Processos Imunes ao Logout"}),s.jsx(v,{title:"Manter processos rodando após desconectar",code:`# nohup = No HangUP — processo continua após fechar terminal
nohup python3 meu-script.py &

# A saída vai para nohup.out por padrão
tail -f nohup.out

# Redirecionar saída para arquivo específico:
nohup python3 meu-script.py > /var/log/meu-script.log 2>&1 &

# Alternativa moderna: screen ou tmux
sudo apt install screen

# Criar nova sessão screen
screen -S minha-sessao

# Dentro do screen: Ctrl+A D  para desconectar (detach)
# Listar sessões screen
screen -ls

# Reconectar a uma sessão
screen -r minha-sessao

# Alternativa: tmux (mais poderoso)
sudo apt install tmux
tmux new-session -s minha-sessao
# Ctrl+B D para desconectar
tmux attach-session -t minha-sessao`}),s.jsx("h2",{children:"Informações de Memória e CPU"}),s.jsx(v,{title:"Monitorando recursos do sistema",code:`# Uso de memória RAM e swap
free -h
# total  usado  livre  compartilhado  buff/cache  disponível
# Mem:   15Gi  5.2Gi   3.1Gi  410Mi  6.8Gi  9.5Gi
# Swap:   2Gi  100Mi   1.9Gi

# Informações da CPU
lscpu
cat /proc/cpuinfo | grep "model name" | head -1

# Uso de CPU por core em tempo real
mpstat -P ALL 1
# (precisa instalar: sudo apt install sysstat)

# Estatísticas de I/O de disco
iostat -x 1
# (sudo apt install sysstat)

# Ver memória virtual e estatísticas do sistema
vmstat 1 5     # Atualizar a cada 1s, 5 vezes

# Ver quanta memória cada processo usa (ordenado):
ps aux --sort=-%mem | head -20    # Top 20 por memória
ps aux --sort=-%cpu | head -20    # Top 20 por CPU`})]})}function Pv(){return s.jsxs(le,{title:"Redes e Conectividade",subtitle:"ip, nmcli, ping, ss, traceroute, nmap — configuração, monitoramento e diagnóstico de rede no Ubuntu.",difficulty:"intermediario",timeToRead:"25 min",children:[s.jsxs("p",{children:["No Ubuntu, a rede é gerenciada principalmente pelo ",s.jsx("strong",{children:"NetworkManager"})," — ao contrário do Arch Linux, onde você configura tudo manualmente. Ainda assim, dominar as ferramentas de linha de comando é essencial para diagnóstico de problemas, configuração de servidores e automação de rede."]}),s.jsx("h2",{children:"ip — A Ferramenta Moderna de Rede"}),s.jsx(v,{title:"Comandos ip essenciais",code:`# Ver todas as interfaces de rede e endereços IP
ip addr
ip a      # atalho

# Saída típica no Ubuntu:
# 1: lo: <LOOPBACK,UP>
#     inet 127.0.0.1/8 scope host lo
# 2: enp3s0: <BROADCAST,MULTICAST,UP>
#     inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic enp3s0
# 3: wlp2s0: <BROADCAST,MULTICAST,UP>
#     inet 192.168.1.150/24 brd 192.168.1.255 scope global dynamic wlp2s0

# Ver apenas IPv4
ip -4 addr

# Ver apenas IPv6
ip -6 addr

# Ver estado das interfaces (ligado/desligado)
ip link
ip l    # atalho

# Ligar/desligar interface
sudo ip link set enp3s0 up
sudo ip link set enp3s0 down

# Ver tabela de rotas
ip route
ip r    # atalho
# default via 192.168.1.1 dev enp3s0 proto dhcp metric 100

# Adicionar rota estática
sudo ip route add 10.0.0.0/8 via 192.168.1.1

# Ver qual rota usa para chegar a um IP
ip route get 8.8.8.8

# Adicionar IP temporário a interface
sudo ip addr add 192.168.1.200/24 dev enp3s0

# Remover IP de interface
sudo ip addr del 192.168.1.200/24 dev enp3s0`}),s.jsx("h2",{children:"nmcli — NetworkManager em Linha de Comando"}),s.jsxs("p",{children:["O ",s.jsx("code",{children:"nmcli"})," é a interface de linha de comando do NetworkManager — o gerenciador de rede padrão do Ubuntu. É mais poderoso para configuração permanente do que o comando",s.jsx("code",{children:"ip"})," (que não persiste reinicializações)."]}),s.jsx(v,{title:"nmcli: gerenciando conexões de rede",code:`# Ver status geral da rede
nmcli general status

# Ver todas as conexões salvas
nmcli connection show

# Ver dispositivos de rede
nmcli device status

# === Wi-Fi ===

# Listar redes Wi-Fi disponíveis
nmcli device wifi list

# Conectar a uma rede Wi-Fi
nmcli device wifi connect "MinhaRede" password "minha-senha"

# Conectar a rede Wi-Fi oculta
nmcli device wifi connect "MinhaRede" password "minha-senha" hidden yes

# Ver redes Wi-Fi salvas
nmcli connection show | grep wifi

# Desconectar Wi-Fi
nmcli device disconnect wlp2s0

# Ligar/desligar Wi-Fi
nmcli radio wifi off
nmcli radio wifi on

# === Ethernet ===

# Configurar IP estático em interface ethernet
nmcli connection modify "Wired connection 1" \\
    ipv4.method manual \\
    ipv4.addresses 192.168.1.100/24 \\
    ipv4.gateway 192.168.1.1 \\
    ipv4.dns "8.8.8.8 8.8.4.4"

# Voltar para DHCP
nmcli connection modify "Wired connection 1" \\
    ipv4.method auto

# Reativar conexão para aplicar mudanças:
nmcli connection down "Wired connection 1"
nmcli connection up "Wired connection 1"

# Criar nova conexão de rede
nmcli connection add type ethernet \\
    con-name "Conexao-Trabalho" \\
    ifname enp3s0 \\
    ip4 10.0.0.100/24 \\
    gw4 10.0.0.1

# Deletar conexão salva
nmcli connection delete "Conexao-Velha"`}),s.jsx("h2",{children:"nmtui — Interface Visual no Terminal"}),s.jsx(v,{title:"Configurar rede com interface visual",code:`# Abrir interface visual do NetworkManager no terminal
nmtui

# Opções disponíveis:
# > Activate a connection   ← Conectar/desconectar redes
# > Edit a connection       ← Editar configurações de IP, DNS, etc.
# > Set system hostname     ← Mudar o nome do computador

# Muito útil em servidores sem interface gráfica!`}),s.jsx("h2",{children:"Diagnóstico de Rede"}),s.jsx(v,{title:"Ferramentas essenciais de diagnóstico",code:`# Testar conectividade básica
ping google.com
ping -c 4 8.8.8.8   # Enviar apenas 4 pacotes

# Testar latência e rota para um destino
traceroute google.com
tracepath google.com  # Alternativa sem precisar de root

# Resolver DNS
nslookup google.com
dig google.com
dig google.com A      # Apenas registros IPv4
dig google.com MX     # Registros de e-mail
host google.com       # Forma simples

# Ver DNS configurado
cat /etc/resolv.conf
nmcli device show | grep DNS

# Testar conectividade HTTP
curl -I https://google.com    # Ver apenas cabeçalhos HTTP
curl -o /dev/null -s -w "%{http_code}" https://google.com  # Ver código HTTP

# Ver rota completa com latência
mtr google.com   # sudo apt install mtr

# Descobrir IP público
curl ifconfig.me
curl ipinfo.io
curl icanhazip.com`}),s.jsx("h2",{children:"ss e netstat — Conexões e Portas"}),s.jsx(v,{title:"Monitorar portas e conexões ativas",code:`# ss é o substituto moderno do netstat

# Ver todas as conexões TCP ativas
ss -t

# Ver portas em escuta (serviços rodando)
ss -tlnp

# Explicação das flags:
# -t = TCP
# -u = UDP
# -l = listening (apenas portas em escuta)
# -n = mostrar números ao invés de nomes
# -p = mostrar processo/PID

# Ver conexões UDP
ss -ulnp

# Ver tudo: TCP + UDP
ss -tlunp

# Ver conexões de um programa específico
ss -p | grep nginx

# Verificar se uma porta está em uso
ss -tlnp | grep :80
ss -tlnp | grep :22
ss -tlnp | grep :3306    # MySQL

# Instalar e usar netstat (legado mas ainda útil):
sudo apt install net-tools
netstat -tlnp             # Mesma info que ss -tlnp
netstat -an | grep :80   # Ver conexões na porta 80`}),s.jsxs(G,{type:"info",title:"Ubuntu e /etc/hosts",children:["O arquivo ",s.jsx("code",{children:"/etc/hosts"})," mapeia nomes para IPs localmente, antes de consultar o DNS. Útil para desenvolvimento local: adicione ",s.jsx("code",{children:"127.0.0.1 meu-projeto.local"}),"e acesse seu servidor local por nome no navegador."]}),s.jsx("h2",{children:"Configurando DNS Personalizado"}),s.jsx(v,{title:"Mudar servidores DNS no Ubuntu",code:`# No Ubuntu 18.04+, systemd-resolved gerencia o DNS
# Ver DNS em uso:
resolvectl status
systemd-resolve --status | grep "DNS Servers"

# Mudar DNS via nmcli (permanente):
nmcli connection modify "Wired connection 1" \\
    ipv4.dns "1.1.1.1 1.0.0.1"  # Cloudflare
    # ou
    ipv4.dns "8.8.8.8 8.8.4.4"  # Google
    # ou
    ipv4.dns "9.9.9.9 149.112.112.112"  # Quad9

# Aplicar mudanças:
nmcli connection up "Wired connection 1"

# Verificar resolução DNS:
nslookup google.com 8.8.8.8   # Testar com DNS específico
dig @1.1.1.1 google.com       # Testar com Cloudflare`}),s.jsx("h2",{children:"nmap — Escaner de Rede"}),s.jsx(v,{title:"Descobrindo dispositivos e serviços na rede",code:`# Instalar nmap
sudo apt install nmap

# Escanear um host
nmap 192.168.1.1

# Descobrir todos os dispositivos na rede local
nmap -sn 192.168.1.0/24
# Hosts na rede: lista de IPs e MACs

# Escanear portas de um servidor
nmap -p 22,80,443,3306 192.168.1.10

# Escanear todas as portas (mais lento)
nmap -p- 192.168.1.10

# Detectar serviços e versões
nmap -sV 192.168.1.10

# Escanear seu próprio IP para ver o que está exposto
nmap localhost
nmap $(hostname -I | awk '{print $1}')`}),s.jsx("h2",{children:"Firewall UFW e Conectividade"}),s.jsx(v,{title:"Verificar e ajustar firewall",code:`# Ver regras do firewall (afeta conectividade)
sudo ufw status verbose

# Ver log de bloqueios (para diagnosticar problemas)
sudo tail -f /var/log/ufw.log

# Verificar se UFW está bloqueando uma porta
sudo ufw status numbered | grep 80

# Abrir porta temporariamente para diagnóstico
sudo ufw allow 8080/tcp

# Verificar se iptables tem regras (UFW usa iptables por baixo)
sudo iptables -L -n -v | head -30`})]})}function Yv(){return s.jsxs(le,{title:"Discos e Partições",subtitle:"lsblk, fdisk, parted, mkfs, mount, df — gerenciando discos, partições e sistemas de arquivos no Ubuntu.",difficulty:"intermediario",timeToRead:"25 min",children:[s.jsx("p",{children:"Gerenciar discos e partições é uma habilidade essencial para administrar servidores Ubuntu — seja expandindo volumes em nuvem, adicionando discos de dados ou configurando um NAS. Este guia cobre as ferramentas essenciais para trabalhar com armazenamento."}),s.jsx("h2",{children:"Visualizando Discos"}),s.jsx(v,{title:"Ver discos, partições e montagens",code:`# Visão geral de todos os discos e partições
lsblk

# Saída:
# NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
# sda      8:0    0 476.9G  0 disk
# ├─sda1   8:1    0   512M  0 part /boot/efi
# ├─sda2   8:2    0     2G  0 part [SWAP]
# └─sda3   8:3    0 474.4G  0 part /
# sdb      8:16   0 931.5G  0 disk    ← Novo disco não particionado
# sr0     11:0    1  1024M  0 rom

# Ver com sistema de arquivos
lsblk -f

# Ver detalhes de partições com fdisk
sudo fdisk -l
sudo fdisk -l /dev/sda  # Apenas um disco específico

# Ver uso de espaço em disco dos sistemas montados
df -h
# Saída:
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/sda3       467G   45G  399G  10% /
# /dev/sda1       511M  6.1M  505M   2% /boot/efi
# tmpfs           7.8G  2.3M  7.8G   1% /tmp

# Ver uso de espaço de um diretório específico
du -sh /home/joao/
du -sh /var/log/
du -sh /var/cache/apt/

# Ver os maiores diretórios (top 10):
du -h /var/ | sort -rh | head -10`}),s.jsx("h2",{children:"Particionamento com fdisk"}),s.jsxs(G,{type:"danger",title:"Cuidado ao particionar discos!",children:["Operações de particionamento podem causar perda permanente de dados. Sempre faça backup antes. Certifique-se de que está operando no disco correto — confirme com",s.jsx("code",{children:"lsblk"})," e ",s.jsx("code",{children:"fdisk -l"})," antes de qualquer operação."]}),s.jsx(v,{title:"Particionando um disco com fdisk",code:`# Abrir fdisk em um disco (NÃO na partição! Use /dev/sdb, não /dev/sdb1)
sudo fdisk /dev/sdb

# Comandos dentro do fdisk:
# m → Ajuda (lista todos os comandos)
# p → Mostrar tabela de partições atual
# n → Nova partição
# d → Deletar partição
# t → Mudar tipo da partição
# w → Salvar e sair (escreve no disco!)
# q → Sair SEM salvar

# Exemplo: Criar nova tabela GPT e partição:
# 1. Abrir fdisk:
sudo fdisk /dev/sdb

# 2. Criar nova tabela GPT (apaga tudo):
# Command: g   ← criar tabela GPT

# 3. Criar nova partição:
# Command: n   ← nova partição
# Partition number (1-128): 1
# First sector: Enter   ← aceitar padrão (início do disco)
# Last sector: +100G    ← tamanho de 100GB

# 4. Ver o resultado:
# Command: p

# 5. Salvar:
# Command: w`}),s.jsx("h2",{children:"Formatando Partições"}),s.jsx(v,{title:"Criar sistemas de arquivos (formatar)",code:`# Formatar como ext4 (padrão Linux, o mais usado)
sudo mkfs.ext4 /dev/sdb1

# Formatar como ext4 com label (nome) para fácil identificação
sudo mkfs.ext4 -L "dados" /dev/sdb1

# Formatar como XFS (bom para arquivos grandes, servidores)
sudo mkfs.xfs /dev/sdb1

# Formatar como Btrfs (moderno, suporta snapshots)
sudo mkfs.btrfs /dev/sdb1

# Formatar como FAT32 (compatibilidade com Windows, pen drives)
sudo mkfs.vfat -F32 /dev/sdb1

# Formatar como exFAT (melhor para pen drives modernos)
sudo apt install exfatprogs
sudo mkfs.exfat /dev/sdb1

# Formatar como NTFS (leitura/escrita com Windows)
sudo apt install ntfs-3g
sudo mkfs.ntfs /dev/sdb1

# Criar área de swap
sudo mkswap /dev/sdb2
sudo swapon /dev/sdb2    # Ativar imediatamente`}),s.jsx("h2",{children:"Montando e Desmontando"}),s.jsx(v,{title:"Montar sistemas de arquivos",code:`# Criar ponto de montagem
sudo mkdir -p /mnt/dados
sudo mkdir -p /media/externo

# Montar um disco
sudo mount /dev/sdb1 /mnt/dados

# Montar com opções específicas
sudo mount -o ro /dev/sdb1 /mnt/dados        # somente leitura
sudo mount -o noexec /dev/sdb1 /mnt/dados    # sem executar programas
sudo mount -o nosuid /dev/sdb1 /mnt/dados    # sem SUID

# Montar pen drive exFAT
sudo mount -t exfat /dev/sdb1 /media/pendrive

# Montar imagem ISO
sudo mount -o loop ubuntu.iso /mnt/iso

# Ver o que está montado
mount | column -t
findmnt                    # Visual mais moderno

# Desmontar
sudo umount /mnt/dados
sudo umount /dev/sdb1     # Equivalente

# Desmontar forçado (cuidado!)
sudo umount -f /mnt/dados`}),s.jsx("h2",{children:"/etc/fstab — Montagem Automática no Boot"}),s.jsx(v,{title:"Configurar montagem automática",code:`# Ver configuração atual
cat /etc/fstab

# Formato do fstab:
# DISPOSITIVO  PONTO_MOUNT  TIPO  OPÇÕES  DUMP  PASS

# Encontrar o UUID do disco para usar no fstab
blkid /dev/sdb1
# /dev/sdb1: UUID="a1b2c3d4-..." TYPE="ext4"

# Exemplo de entradas no fstab:
# Disco de dados montado em /mnt/dados
UUID=a1b2c3d4-e5f6-7890-abcd-ef1234567890  /mnt/dados  ext4  defaults,nofail  0  2

# Pen drive USB (montagem opcional, não travar boot se ausente)
UUID=1234-ABCD  /mnt/pendrive  vfat  defaults,nofail,uid=1000,gid=1000  0  0

# Swap
UUID=...  none  swap  sw  0  0

# Opções comuns:
# defaults  = opções padrão (rw, auto, exec, suid)
# nofail    = não travar o boot se o dispositivo não estiver presente
# noatime   = não atualizar tempo de acesso (melhora performance)
# ro        = somente leitura

# Testar o fstab sem reiniciar
sudo mount -a    # Monta todos os itens do fstab
# Se não der erro, o fstab está correto`}),s.jsx("h2",{children:"LVM — Logical Volume Manager"}),s.jsx(v,{title:"Gerenciamento de volumes lógicos",code:`# LVM permite redimensionar volumes sem reformatar
# Estrutura: Physical Volumes → Volume Groups → Logical Volumes

# Instalar LVM
sudo apt install lvm2

# Verificar se LVM está em uso
sudo pvdisplay    # Physical Volumes
sudo vgdisplay    # Volume Groups
sudo lvdisplay    # Logical Volumes

# Ver estrutura simplificada
sudo lsblk

# Exemplo: Expandir volume root quando adicionar espaço no disco

# 1. Ver estado atual
sudo lvdisplay /dev/ubuntu-vg/ubuntu-lv

# 2. Expandir o Physical Volume (após expandir o disco na nuvem/VM)
sudo pvresize /dev/sda3

# 3. Expandir o Logical Volume
sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv

# 4. Expandir o sistema de arquivos ext4
sudo resize2fs /dev/ubuntu-vg/ubuntu-lv

# 5. Verificar o resultado
df -h /`}),s.jsx("h2",{children:"Verificar e Reparar Sistemas de Arquivos"}),s.jsx(v,{title:"fsck — verificação e reparo",code:`# IMPORTANTE: O disco deve estar DESMONTADO para ser verificado!

# Verificar sistema de arquivos ext4
sudo fsck /dev/sdb1

# Verificar e corrigir automaticamente sem perguntas
sudo fsck -y /dev/sdb1

# Verificar ext4 com verificação de blocos ruins
sudo fsck -c /dev/sdb1

# Para verificar a partição raiz (/), é preciso fazer no boot
# Força verificação no próximo boot:
sudo touch /forcefsck
# Ou:
sudo tune2fs -C 1 /dev/sda3

# Ver informações de um sistema de arquivos ext4
sudo tune2fs -l /dev/sda3 | grep -E "volume|mount|errors"

# Ver SMART do disco (saúde do HD/SSD)
sudo apt install smartmontools
sudo smartctl -a /dev/sda`})]})}function Xv(){return s.jsxs(le,{title:"Shell Bash e Scripting",subtitle:"Variáveis, condicionais, loops, funções e boas práticas de scripting Bash — do básico ao intermediário.",difficulty:"intermediario",timeToRead:"30 min",children:[s.jsxs("p",{children:["O ",s.jsx("strong",{children:"Bash"})," (Bourne Again SHell) é o shell padrão do Ubuntu. Além de interpretar seus comandos interativos, ele é uma linguagem de programação completa para automação de tarefas. Saber escrever scripts Bash é uma das habilidades mais úteis para qualquer usuário de Linux."]}),s.jsx("h2",{children:"Variáveis"}),s.jsx(v,{title:"Trabalhando com variáveis",code:`# Definir variável (sem espaços ao redor do =!)
nome="João"
idade=25
cidade="São Paulo"

# Usar variável (adicione $ antes do nome)
echo "Olá, $nome!"
echo "Você tem $idade anos."

# Forma segura: chaves para evitar ambiguidade
echo "Arquivo: \${nome}_backup.txt"

# Variáveis de ambiente
echo $HOME        # /home/joao
echo $USER        # joao
echo $PATH        # lista de diretórios para buscar executáveis
echo $SHELL       # /bin/bash
echo $PWD         # diretório atual
echo $HOSTNAME    # nome do computador
echo $$           # PID do shell atual
echo $?           # código de saída do último comando (0 = sucesso)

# Tornar variável exportável para processos filhos
export MINHA_VAR="valor"
export JAVA_HOME="/usr/lib/jvm/java-21-openjdk"

# Variável somente leitura
readonly CONSTANTE="valor-fixo"

# Variável com substituição de comando
data_atual=$(date +%Y-%m-%d)
arquivos=$(ls /home/joao/ | wc -l)
echo "Hoje é $data_atual"

# Aritmética com (( ))
resultado=$((10 + 5 * 2))
echo $resultado   # 20

# Aritmética com let
let x=5
let x=x+3
echo $x   # 8`}),s.jsx("h2",{children:"Seu Primeiro Script"}),s.jsx(v,{title:"Estrutura básica de um script Bash",code:`#!/bin/bash
# A primeira linha (shebang) diz ao sistema qual interpretador usar

# Comentários começam com #

# Variáveis
NOME="Mundo"

# Executar comando
echo "Olá, $NOME!"

# Verificar argumento de linha de comando
# $1 = primeiro argumento, $2 = segundo, etc.
# $0 = nome do script
# $# = número de argumentos
# $@ = todos os argumentos

echo "Script: $0"
echo "Argumentos: $#"
echo "Primeiro: $1"

# --- Como usar ---
# Salve como: meu-script.sh
# Dê permissão de execução:
chmod +x meu-script.sh

# Execute:
./meu-script.sh argumento1 argumento2

# Ou explicite o interpretador:
bash meu-script.sh`}),s.jsx("h2",{children:"Condicionais — if/elif/else"}),s.jsx(v,{title:"Estruturas condicionais",code:`#!/bin/bash

# if/elif/else básico
nota=7

if [ $nota -ge 9 ]; then
    echo "Aprovado com Distinção!"
elif [ $nota -ge 6 ]; then
    echo "Aprovado"
else
    echo "Reprovado"
fi

# Operadores numéricos:
# -eq = igual           (== não funciona com [ ])
# -ne = diferente
# -gt = maior que
# -ge = maior ou igual
# -lt = menor que
# -le = menor ou igual

# Comparação de strings
cidade="São Paulo"
if [ "$cidade" = "São Paulo" ]; then
    echo "Bem-vindo à capital!"
fi

# Testar existência de arquivo/diretório
if [ -f /etc/hosts ]; then
    echo "Arquivo /etc/hosts existe"
fi

if [ -d /home/joao ]; then
    echo "Diretório home existe"
fi

if [ -x /usr/bin/python3 ]; then
    echo "Python3 é executável"
fi

# Teste de string vazia
nome=""
if [ -z "$nome" ]; then
    echo "Nome está vazio"
fi
if [ -n "$nome" ]; then
    echo "Nome tem conteúdo"
fi

# Operadores lógicos
if [ $nota -ge 6 ] && [ $nota -le 10 ]; then
    echo "Aprovado com nota válida"
fi

if [ "$cidade" = "SP" ] || [ "$cidade" = "São Paulo" ]; then
    echo "É São Paulo"
fi`}),s.jsx("h2",{children:"Loops"}),s.jsx(v,{title:"for, while e until",code:`#!/bin/bash

# for loop — iterar em lista
for fruta in maçã banana laranja pera; do
    echo "Fruta: $fruta"
done

# for loop — iterar em arquivos
for arquivo in /var/log/*.log; do
    echo "Log: $arquivo ($(wc -l < "$arquivo") linhas)"
done

# for loop — intervalo numérico
for i in {1..10}; do
    echo "Número: $i"
done

# for loop — estilo C
for ((i=0; i<5; i++)); do
    echo "Iteração $i"
done

# while loop — enquanto condição for verdadeira
contador=1
while [ $contador -le 5 ]; do
    echo "Contagem: $contador"
    ((contador++))
done

# while loop — ler linhas de um arquivo
while IFS= read -r linha; do
    echo "Linha: $linha"
done < /etc/hosts

# until loop — até que condição seja verdadeira
tentativas=0
until ping -c 1 google.com &>/dev/null; do
    echo "Sem internet... tentativa $((++tentativas))"
    sleep 5
done
echo "Conectado após $tentativas tentativas!"

# break e continue
for i in {1..10}; do
    if [ $i -eq 5 ]; then
        continue    # Pular o 5
    fi
    if [ $i -eq 8 ]; then
        break       # Parar no 8
    fi
    echo $i
done`}),s.jsx("h2",{children:"Funções"}),s.jsx(v,{title:"Definindo e usando funções",code:`#!/bin/bash

# Definir função
saudacao() {
    echo "Olá, $1!"    # $1 = primeiro argumento da função
}

# Chamar função
saudacao "João"
saudacao "Maria"

# Função com retorno (usando echo para capturar resultado)
soma() {
    echo $(($1 + $2))
}
resultado=$(soma 3 5)
echo "3 + 5 = $resultado"

# Função com variáveis locais
calcular() {
    local a=$1
    local b=$2
    local resultado=$((a * b))
    echo $resultado
}

# Função prática: verificar se pacote está instalado
esta_instalado() {
    dpkg -l "$1" &>/dev/null
    return $?   # retorna 0 se instalado, 1 se não
}

if esta_instalado nginx; then
    echo "Nginx está instalado"
else
    echo "Nginx não está instalado"
    sudo apt install -y nginx
fi`}),s.jsx("h2",{children:"Arrays"}),s.jsx(v,{title:"Trabalhando com arrays",code:`#!/bin/bash

# Criar array
frutas=("maçã" "banana" "laranja" "pera")
servidores=("web1" "web2" "db1" "cache1")

# Acessar elemento
echo \${frutas[0]}        # maçã (índice começa em 0)
echo \${frutas[2]}        # laranja

# Ver todos os elementos
echo \${frutas[@]}
echo \${servidores[@]}

# Tamanho do array
echo \${#frutas[@]}       # 4

# Adicionar elemento
frutas+=("uva")

# Iterar no array
for fruta in "\${frutas[@]}"; do
    echo "Fruta: $fruta"
done

# Fatiar array (do índice 1, pegar 2 elementos)
echo \${frutas[@]:1:2}    # banana laranja`}),s.jsx("h2",{children:"Tratamento de Erros"}),s.jsx(v,{title:"Tornando scripts mais robustos",code:`#!/bin/bash

# Parar o script ao primeiro erro (muito recomendado!)
set -e

# Também reportar variáveis não definidas como erro
set -u

# Também tratar erros em pipes
set -o pipefail

# Forma completa (inicia todos os scripts assim):
set -euo pipefail

# Verificar código de saída de comandos
sudo apt update
if [ $? -ne 0 ]; then
    echo "ERRO: apt update falhou!"
    exit 1
fi

# Forma mais elegante com ||
sudo apt update || { echo "ERRO: apt update falhou!"; exit 1; }

# Trap: executar código ao sair (cleanup)
limpar() {
    echo "Limpando arquivos temporários..."
    rm -f /tmp/meu-script-*.tmp
}
trap limpar EXIT      # Executar ao sair (normal ou erro)
trap limpar ERR       # Executar ao ocorrer erro

# Exemplo de script robusto completo:
#!/bin/bash
set -euo pipefail

BACKUP_DIR="/mnt/backup/$(date +%Y-%m-%d)"

# Verificar se é root
if [ "$(id -u)" -ne 0 ]; then
    echo "ERRO: Este script precisa ser executado como root" >&2
    exit 1
fi

mkdir -p "$BACKUP_DIR"
echo "Backup iniciado em $BACKUP_DIR"
tar -czf "$BACKUP_DIR/home.tar.gz" /home/
echo "Backup concluído com sucesso!"`})]})}function Fv(){return s.jsxs(le,{title:"Redirecionamento e Pipes",subtitle:"stdin, stdout, stderr, pipes e redirecionamentos — conectando comandos e controlando o fluxo de dados no terminal.",difficulty:"intermediario",timeToRead:"15 min",children:[s.jsx("p",{children:"Uma das funcionalidades mais poderosas do terminal Linux é a capacidade de conectar comandos entre si, enviando a saída de um como entrada de outro. Isso permite criar fluxos de processamento complexos com comandos simples."}),s.jsx("h2",{children:"Streams: stdin, stdout, stderr"}),s.jsx(v,{title:"Os três streams padrão do Linux",code:`# Cada processo tem três canais de comunicação:
# stdin  (0) = entrada padrão  (por padrão: teclado)
# stdout (1) = saída padrão    (por padrão: tela do terminal)
# stderr (2) = saída de erro   (por padrão: tela do terminal)

# Quando você digita um comando:
ls /home
# ls lê argumentos, processa, e escreve resultado em stdout (tela)

# Quando há um erro:
ls /diretorio-inexistente
# ls escreve a mensagem de erro em stderr (também aparece na tela)

# Você pode redirecionar esses streams independentemente`}),s.jsx("h2",{children:"Redirecionamento de Saída"}),s.jsx(v,{title:"Salvando saídas em arquivos",code:`# > Redirecionar stdout para arquivo (cria ou SOBRESCREVE)
ls -la /home > lista-arquivos.txt
date > /tmp/data-atual.txt

# >> Redirecionar stdout para arquivo (ADICIONA ao final)
echo "Nova entrada" >> log.txt
date >> /tmp/historico.txt

# 2> Redirecionar apenas stderr para arquivo
ls /diretorio-inexistente 2> erros.txt
sudo apt update 2> /tmp/apt-erros.log

# 2>> Adicionar stderr ao arquivo (sem sobrescrever)
comando-com-erro 2>> /tmp/erros.log

# Redirecionar stdout E stderr para o mesmo arquivo
sudo apt upgrade > /tmp/saida-completa.log 2>&1
# Ou forma mais moderna (bash 4+):
sudo apt upgrade &> /tmp/saida-completa.log

# Adicionar stdout E stderr ao arquivo:
comando >> /tmp/log.txt 2>&1

# Descartar saída indesejada (jogar no /dev/null)
comando > /dev/null        # Descartar stdout
comando 2> /dev/null       # Descartar stderr
comando > /dev/null 2>&1   # Descartar tudo`}),s.jsx("h2",{children:"Redirecionamento de Entrada"}),s.jsx(v,{title:"Alimentando comandos com arquivos",code:`# < Redirecionar arquivo para stdin
sort < lista-desordenada.txt

# Contar linhas de um arquivo
wc -l < /var/log/syslog

# Enviar texto de múltiplas linhas como stdin (Here Document)
cat << EOF
Linha 1
Linha 2
Linha 3
EOF

# Here Document para criar arquivo:
cat << EOF > /tmp/configuracao.txt
host=localhost
port=3306
user=admin
EOF

# Here String — enviar string como stdin
grep "erro" <<< "Esta linha tem um erro aqui"
base64 <<< "texto para codificar"`}),s.jsx("h2",{children:"Pipes — Encadeando Comandos"}),s.jsx(v,{title:"Conectando comandos com | (pipe)",code:`# O pipe | conecta stdout de um comando ao stdin do próximo
comando1 | comando2 | comando3

# Exemplos básicos:
ls -la | grep ".txt"           # Listar apenas arquivos .txt
cat /etc/passwd | grep joao   # Filtrar linha do usuário
history | tail -20             # Ver últimos 20 comandos

# Contar arquivos em um diretório:
ls /var/log | wc -l

# Ver processos em ordem de uso de memória:
ps aux | sort -k4 -rn | head -10

# Ver os IPs que mais aparecem em um log:
grep "Failed password" /var/log/auth.log | \\
    grep -oE '[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}' | \\
    sort | \\
    uniq -c | \\
    sort -rn | \\
    head -10

# Buscar e matar todos os processos de um programa:
pgrep firefox | xargs kill -9

# Processamento em pipeline com múltiplos comandos:
cat /var/log/nginx/access.log | \\
    cut -d'"' -f2 | \\     # Extrair método + URL
    sort | \\               # Ordenar
    uniq -c | \\            # Contar ocorrências
    sort -rn | \\           # Ordenar por frequência
    head -20                # Top 20 URLs mais acessadas`}),s.jsx("h2",{children:"tee — Bifurcar a Saída"}),s.jsx(v,{title:"Salvar e exibir ao mesmo tempo com tee",code:`# tee lê stdin, escreve em stdout E em arquivo ao mesmo tempo
# (como fazer um "T" no fluxo de dados — daí o nome)

# Salvar saída no arquivo E mostrar na tela:
sudo apt update | tee /tmp/apt-update.log

# Adicionar ao arquivo em vez de sobrescrever:
sudo apt upgrade | tee -a /tmp/apt.log

# Salvar em múltiplos arquivos ao mesmo tempo:
ls -la | tee arquivo1.txt arquivo2.txt

# Uso muito comum: executar comando como root mas manter log:
sudo apt install nginx | tee /tmp/nginx-install.log 2>&1`}),s.jsx("h2",{children:"xargs — Passar Saída como Argumentos"}),s.jsx(v,{title:"xargs: transformar stdin em argumentos",code:`# xargs converte linhas do stdin em argumentos de outro comando

# Problema: rm não aceita stdin, só argumentos
find /tmp -name "*.log" | rm    # ERRADO!
find /tmp -name "*.log" | xargs rm   # CORRETO

# Exemplos práticos:

# Matar todos os processos do chrome:
pgrep chrome | xargs kill -9

# Baixar uma lista de URLs:
cat urls.txt | xargs wget -P /downloads/

# Instalar lista de pacotes de um arquivo:
cat pacotes.txt | xargs sudo apt install -y

# Compactar múltiplos arquivos individuais:
find /backup -name "*.log" | xargs gzip

# Com substituição de placeholder {}:
find . -name "*.txt" | xargs -I{} cp {} /backup/

# Limitar o número de argumentos por chamada:
echo "a b c d e f" | xargs -n 2 echo
# a b
# c d
# e f

# Executar em paralelo (muito útil para tarefas demoradas):
cat servidores.txt | xargs -P 4 -I{} ssh {} "sudo apt update"`}),s.jsx("h2",{children:"Substituição de Comandos"}),s.jsx(v,{title:"Capturar saída de comandos",code:`# Forma moderna: $( )
data=$(date +%Y-%m-%d)
usuario=$(whoami)
ip=$(hostname -I | awk '{print $1}')

echo "Data: $data"
echo "Usuário: $usuario"
echo "IP: $ip"

# Usar resultado diretamente em comando:
echo "Arquivos: $(ls | wc -l)"
cd $(dirname /etc/nginx/nginx.conf)

# Aninhamento:
echo "PID do bash: $(echo $$)"

# Forma antiga com crases (ainda funciona mas não recomendado):
data=\`date +%Y-%m-%d\`   # evitar — use $()

# Exemplo prático: criar nome de arquivo com data
tar -czf "backup_$(date +%Y%m%d_%H%M%S).tar.gz" /home/joao/`})]})}function Zv(){return s.jsxs(le,{title:"Compressão e Arquivamento",subtitle:"tar, gzip, bzip2, xz, zip, zstd — comprimindo, descomprimindo e gerenciando arquivos no Ubuntu.",difficulty:"iniciante",timeToRead:"15 min",children:[s.jsx("p",{children:"Compressão é essencial para economizar espaço em disco, transferir arquivos pela rede e criar backups. O Linux oferece várias ferramentas de compressão com diferentes balanços entre velocidade e taxa de compressão."}),s.jsx("h2",{children:"tar — O Canivete Suíço do Arquivamento"}),s.jsxs("p",{children:["O ",s.jsx("code",{children:"tar"})," (Tape ARchive) agrupa múltiplos arquivos em um único arquivo",s.jsx("code",{children:".tar"}),". Combinado com um algoritmo de compressão, cria os famosos",s.jsx("code",{children:".tar.gz"}),", ",s.jsx("code",{children:".tar.bz2"})," e ",s.jsx("code",{children:".tar.xz"}),"."]}),s.jsx(v,{title:"tar: criar e extrair arquivos",code:`# === CRIAR ARQUIVOS ===

# Criar arquivo .tar (sem compressão, apenas agrupar)
tar -cvf arquivo.tar pasta/

# Criar .tar.gz (com compressão gzip — o mais comum)
tar -czvf arquivo.tar.gz pasta/

# Criar .tar.bz2 (compressão bzip2 — melhor compressão, mais lento)
tar -cjvf arquivo.tar.bz2 pasta/

# Criar .tar.xz (compressão xz — máxima compressão)
tar -cJvf arquivo.tar.xz pasta/

# Criar com zstd (moderno, rápido e boa compressão)
tar -czvf arquivo.tar.zst --use-compress-program=zstd pasta/

# === FLAGS DO TAR ===
# -c = create (criar)
# -x = extract (extrair)
# -v = verbose (mostrar o que está sendo processado)
# -f = file (nome do arquivo tar)
# -z = gzip
# -j = bzip2
# -J = xz

# === EXTRAIR ARQUIVOS ===

# Extrair arquivo .tar (sem compressão)
tar -xvf arquivo.tar

# Extrair arquivo .tar.gz
tar -xzvf arquivo.tar.gz

# Extrair arquivo .tar.bz2
tar -xjvf arquivo.tar.bz2

# Extrair arquivo .tar.xz
tar -xJvf arquivo.tar.xz

# Extrair em diretório específico
tar -xzvf arquivo.tar.gz -C /destino/

# === VER CONTEÚDO SEM EXTRAIR ===

# Listar conteúdo de um .tar.gz
tar -tzvf arquivo.tar.gz

# === EXEMPLOS PRÁTICOS ===

# Backup do diretório home:
tar -czvf backup_home_$(date +%Y%m%d).tar.gz /home/joao/

# Extrair apenas um arquivo específico de dentro do tar:
tar -xzvf backup.tar.gz home/joao/Documents/relatorio.pdf`}),s.jsx("h2",{children:"gzip — Compressão Rápida"}),s.jsx(v,{title:"Comprimindo com gzip",code:`# Comprimir um arquivo (substitui o original por .gz)
gzip arquivo.txt
# Resultado: arquivo.txt.gz (original é removido!)

# Comprimir mantendo o original
gzip -k arquivo.txt
# Resultado: arquivo.txt.gz e arquivo.txt mantido

# Descomprimir
gzip -d arquivo.txt.gz
# ou:
gunzip arquivo.txt.gz

# Descomprimir mantendo o .gz
gunzip -k arquivo.txt.gz

# Ver estatísticas de compressão sem comprimir
gzip -l arquivo.tar.gz

# Nível de compressão (1=rápido, 9=máximo)
gzip -9 arquivo.txt  # Máxima compressão
gzip -1 arquivo.txt  # Mais rápido (menor compressão)

# Ler arquivo .gz sem descomprimir:
zcat arquivo.txt.gz
zless arquivo.txt.gz
zgrep "erro" arquivo.txt.gz`}),s.jsx("h2",{children:"bzip2 e xz — Melhor Compressão"}),s.jsx(v,{title:"bzip2 e xz para arquivos menores",code:`# === BZIP2 ===
# Comprimir (remove o original)
bzip2 arquivo.txt
# Resultado: arquivo.txt.bz2

# Descomprimir
bunzip2 arquivo.txt.bz2

# Manter original:
bzip2 -k arquivo.txt

# === XZ ===
# Comprimir (melhor taxa de compressão, mais lento)
xz arquivo.txt
# Resultado: arquivo.txt.xz

# Descomprimir
unxz arquivo.txt.xz
xz -d arquivo.txt.xz

# Manter original:
xz -k arquivo.txt

# === COMPARAÇÃO DE EFICIÊNCIA ===
# Arquivo de 100MB:
# gzip:  comprime em 2s  → 45MB (ratio 2.2x)
# bzip2: comprime em 8s  → 40MB (ratio 2.5x)
# xz:    comprime em 30s → 35MB (ratio 2.9x)
# zstd:  comprime em 1s  → 42MB (ratio 2.4x) ← melhor custo-benefício`}),s.jsx("h2",{children:"zip e unzip — Compatível com Windows"}),s.jsx(v,{title:"Criando arquivos zip",code:`# Criar arquivo zip
zip arquivo.zip arquivo1.txt arquivo2.txt

# Criar zip de um diretório inteiro (recursivo)
zip -r backup.zip pasta/

# Proteger com senha
zip -e -r privado.zip pasta-secreta/

# Criar zip com máxima compressão (0-9)
zip -9 -r arquivo.zip pasta/

# Ver conteúdo de um zip sem extrair
unzip -l arquivo.zip

# Extrair arquivo zip
unzip arquivo.zip

# Extrair em diretório específico
unzip arquivo.zip -d /destino/

# Extrair arquivo específico do zip
unzip arquivo.zip "pasta/arquivo-especifico.txt"

# Extrair sem sobrescrever arquivos existentes
unzip -n arquivo.zip

# Instalar zip e unzip (se não estiver instalado)
sudo apt install zip unzip`}),s.jsx("h2",{children:"7zip — Alta Compressão"}),s.jsx(v,{title:"Usando 7zip no Ubuntu",code:`# Instalar 7zip
sudo apt install p7zip-full p7zip-rar

# Criar arquivo 7z
7z a arquivo.7z pasta/
7z a -p arquivo.7z pasta/    # Com senha

# Extrair
7z x arquivo.7z

# Extrair em diretório específico
7z x arquivo.7z -o/destino/

# Listar conteúdo
7z l arquivo.7z

# Testar integridade do arquivo
7z t arquivo.7z

# Criar arquivo com máxima compressão
7z a -mx=9 arquivo.7z pasta/`}),s.jsx("h2",{children:"Dicas Práticas de Compressão"}),s.jsx(G,{type:"info",title:"Quando usar cada formato",children:s.jsxs("ul",{className:"mt-1 mb-0",children:[s.jsxs("li",{children:[s.jsx("strong",{children:".tar.gz"}),": Padrão Linux, compatível em todo lugar. Use para a maioria dos casos."]}),s.jsxs("li",{children:[s.jsx("strong",{children:".tar.xz"}),": Quando o tamanho final importa muito (ex: releases de software). Mais lento."]}),s.jsxs("li",{children:[s.jsx("strong",{children:".tar.zst"}),": Moderno, rápido e boa compressão. Cada vez mais popular (pacotes do Arch/Ubuntu 23+)."]}),s.jsxs("li",{children:[s.jsx("strong",{children:".zip"}),": Para compatibilidade com Windows e macOS."]}),s.jsxs("li",{children:[s.jsx("strong",{children:".7z"}),": Máxima compressão, mas menos universal no Linux."]})]})}),s.jsx(v,{title:"Script de backup com compressão",code:`#!/bin/bash
# Script de backup completo com compressão

BACKUP_DIR="/mnt/backup"
DATA=$(date +%Y-%m-%d)
ORIGEM="/home/joao"

mkdir -p "$BACKUP_DIR"

echo "Iniciando backup de $ORIGEM..."

# Backup comprimido com progresso
tar -czvf "$BACKUP_DIR/home_$DATA.tar.gz" \\
    --exclude="$ORIGEM/.cache" \\
    --exclude="$ORIGEM/.local/share/Trash" \\
    "$ORIGEM" 2>&1 | tee /tmp/backup.log

echo "Backup concluído: $BACKUP_DIR/home_$DATA.tar.gz"
du -sh "$BACKUP_DIR/home_$DATA.tar.gz"`})]})}function Kv(){return s.jsxs(le,{title:"Comandos Avançados",subtitle:"awk, sed, find avançado, xargs, cut, tr, jq — processamento de texto e automação de alto nível no terminal.",difficulty:"avancado",timeToRead:"35 min",children:[s.jsxs("p",{children:["Com o domínio dos comandos básicos, é hora de conhecer as ferramentas que separam usuários avançados de iniciantes. ",s.jsx("code",{children:"awk"})," e ",s.jsx("code",{children:"sed"})," são linguagens de processamento de texto poderosas. Combinados com pipes, transformam o terminal em um ambiente de processamento de dados extremamente eficiente."]}),s.jsx("h2",{children:"sed — Editor de Fluxo de Texto"}),s.jsxs("p",{children:["O ",s.jsx("code",{children:"sed"})," (Stream EDitor) processa texto linha por linha, aplicando transformações como substituição, exclusão e inserção."]}),s.jsx(v,{title:"sed: substituição e edição de texto",code:`# Substituição básica (primeira ocorrência por linha)
sed 's/antigo/novo/' arquivo.txt

# Substituição global (todas as ocorrências por linha)
sed 's/antigo/novo/g' arquivo.txt

# Substituição sem diferenciar maiúsculas/minúsculas
sed 's/erro/aviso/gi' arquivo.txt

# Substituição DIRETAMENTE no arquivo (in-place)
sed -i 's/antigo/novo/g' arquivo.txt

# Fazer backup antes de editar in-place
sed -i.bak 's/antigo/novo/g' arquivo.txt
# Cria: arquivo.txt.bak (original) e arquivo.txt (modificado)

# Deletar linhas que contêm um padrão
sed '/comentario/d' arquivo.txt
sed '/^#/d' arquivo.txt    # Deletar linhas que começam com #
sed '/^$/d' arquivo.txt    # Deletar linhas vazias

# Imprimir apenas linhas que contêm padrão
sed -n '/erro/p' arquivo.txt

# Imprimir linhas de 3 a 7
sed -n '3,7p' arquivo.txt

# Inserir linha antes da linha 5
sed '5iNova linha aqui' arquivo.txt

# Adicionar linha após linha 5
sed '5aNova linha aqui' arquivo.txt

# Exemplos práticos:

# Mudar endereço IP em arquivo de configuração
sed -i 's/192.168.1.100/10.0.0.100/g' /etc/nginx/nginx.conf

# Remover comentários e linhas vazias de config:
sed -e '/^#/d' -e '/^$/d' /etc/ssh/sshd_config

# Extrair valor de configuração
sed -n 's/^Port //p' /etc/ssh/sshd_config`}),s.jsx("h2",{children:"awk — Processamento de Dados Tabulares"}),s.jsxs("p",{children:["O ",s.jsx("code",{children:"awk"})," é uma linguagem de processamento de texto orientada a campos. É ideal para processar arquivos com colunas (logs, CSV, saída de comandos como ",s.jsx("code",{children:"ps"}),")."]}),s.jsx(v,{title:"awk: processando colunas e campos",code:`# Estrutura: awk 'padrão { ação }' arquivo

# Imprimir primeira coluna (campo) de cada linha
awk '{print $1}' arquivo.txt

# Imprimir colunas específicas
ps aux | awk '{print $1, $2, $11}'  # user, PID, comando

# Separador personalizado (padrão é espaço/tab)
awk -F: '{print $1, $3}' /etc/passwd    # usuário:UID
awk -F, '{print $2}' dados.csv           # segunda coluna de CSV

# Filtrar linhas e imprimir campos
ps aux | awk '$3 > 1.0 {print $1, $2, $3}'  # Processos usando >1% CPU

# Calcular soma de uma coluna
df -h | awk '{sum += $2} END {print "Total:", sum}'

# Contar linhas
awk 'END {print NR}' arquivo.txt   # NR = número de registros (linhas)

# Variáveis especiais do awk:
# $0  = linha inteira
# $1  = primeiro campo
# $NF = último campo (Number of Fields)
# NR  = número da linha atual
# NF  = número de campos na linha
# FS  = separador de campo (pode mudar)

# Exemplos práticos:

# Ver tamanho total dos arquivos em /var/log
ls -la /var/log/*.log | awk '{total += $5} END {print "Total:", total/1024/1024 "MB"}'

# Extrair domínios únicos de um log de acesso nginx
awk '{print $7}' /var/log/nginx/access.log | \\
    grep -oE 'https?://[^/]+' | \\
    sort | uniq -c | sort -rn

# Mostrar apenas usuários com UID >= 1000 (usuários normais)
awk -F: '$3 >= 1000 {print $1, "UID:", $3}' /etc/passwd

# Calcular média de CPU dos processos
ps aux | awk 'NR>1 {sum += $3} END {print "Média CPU:", sum/NR "%"}'`}),s.jsx("h2",{children:"cut — Extrair Campos de Texto"}),s.jsx(v,{title:"cut: extração de colunas",code:`# Extrair por posição de caractere (1-indexed)
cut -c1-10 arquivo.txt      # Primeiros 10 caracteres de cada linha
cut -c5 arquivo.txt         # Apenas o 5º caractere

# Extrair por campo (delimitador)
cut -d: -f1 /etc/passwd     # Primeiro campo (nome de usuário)
cut -d: -f1,3 /etc/passwd   # Primeiro e terceiro campos
cut -d: -f1-3 /etc/passwd   # Campos 1 a 3

# Exemplos:
# Listar apenas nomes de usuários:
cut -d: -f1 /etc/passwd

# Listar extensões de arquivos:
ls /etc | grep "\\." | rev | cut -d. -f1 | rev | sort | uniq`}),s.jsx("h2",{children:"tr — Transliterar e Transformar"}),s.jsx(v,{title:"tr: transformando caracteres",code:`# Converter letras minúsculas para maiúsculas
echo "hello world" | tr 'a-z' 'A-Z'
# HELLO WORLD

# Converter maiúsculas para minúsculas
echo "HELLO WORLD" | tr 'A-Z' 'a-z'

# Remover caracteres
echo "h-e-l-l-o" | tr -d '-'
# hello

# Remover dígitos
echo "abc123def456" | tr -d '0-9'
# abcdef

# Squezar espaços duplos em único espaço
echo "hello    world" | tr -s ' '
# hello world

# Substituir espaços por underscores:
echo "meu arquivo com espacos" | tr ' ' '_'
# meu_arquivo_com_espacos

# Remover quebras de linha:
cat arquivo.txt | tr -d '
'`}),s.jsx("h2",{children:"find Avançado"}),s.jsx(v,{title:"find com critérios complexos",code:`# Encontrar e executar ação (delete sem confirmação — CUIDADO!)
find /tmp -name "*.tmp" -mtime +7 -delete   # Apagar .tmp com mais de 7 dias

# Encontrar e executar comando personalizado
find /home -name "*.log" -exec gzip {} ;
find /var/log -name "*.log" -exec chmod 640 {} ;

# Execução com confirmação:
find /tmp -name "*.tmp" -ok rm {} ;   # -ok pede confirmação para cada arquivo

# Múltiplos critérios (AND implícito)
find /home -name "*.pdf" -size +5M -mtime -30
# PDFs maiores que 5MB modificados nos últimos 30 dias

# OR com -o
find /tmp -name "*.tmp" -o -name "*.log"

# NOT com ! ou -not
find /etc -name "*.conf" -not -name "*.bak"

# Por tipo e permissão:
find / -type f -perm -4000 2>/dev/null   # Arquivos com SUID (importante para segurança)
find / -type f -perm -2000 2>/dev/null   # Arquivos com SGID

# Por dono:
find /home -user joao -type f

# Por modificação mais recente que um arquivo referência
find /etc -newer /etc/passwd

# Combinar find com xargs para melhor performance
find /var/log -name "*.log" -print0 | xargs -0 gzip`}),s.jsx("h2",{children:"sort, uniq e Processamento de Dados"}),s.jsx(v,{title:"Processamento avançado de dados",code:`# Ordenar por múltiplas colunas
sort -k2,2 -k1,1 arquivo.txt   # Ordenar por coluna 2, depois por coluna 1

# Ordenar CSV pelo segundo campo numericamente:
sort -t, -k2 -n dados.csv

# Combinar para análise de logs:
# Top 10 IPs com mais requests em nginx:
awk '{print $1}' /var/log/nginx/access.log | \\
    sort | uniq -c | sort -rn | head -10

# Ver quais extensões mais aparecem em um diretório:
find . -type f | sed 's/.*\\.//' | sort | uniq -c | sort -rn

# join — juntar dois arquivos por campo comum (como SQL JOIN)
join -t: -1 1 -2 3 arquivo1.txt arquivo2.txt`}),s.jsx("h2",{children:"jq — Processamento de JSON"}),s.jsx(v,{title:"Processar JSON na linha de comando",code:`# Instalar jq
sudo apt install jq

# Formatar JSON bonito
echo '{"nome":"João","idade":25}' | jq .

# Extrair campo específico
echo '{"nome":"João","cidade":"SP"}' | jq '.nome'
# "João"

# Extrair de arquivo JSON
jq '.users[0].name' dados.json

# Iterar em array
jq '.[] | .name' lista.json

# Filtrar e transformar
cat package.json | jq '.dependencies | keys'

# Exemplos práticos com APIs:
curl -s https://api.github.com/repos/torvalds/linux | \\
    jq '{nome: .name, estrelas: .stargazers_count, forks: .forks}'

# Processar saída de docker inspect:
docker inspect meu-container | jq '.[0].NetworkSettings.IPAddress'

# Formatar saída de API em tabela:
curl -s https://jsonplaceholder.typicode.com/users | \\
    jq -r '.[] | [.name, .email, .company.name] | @csv'`})]})}function Iv(){return s.jsxs(le,{title:"Segurança no Ubuntu",subtitle:"UFW, Fail2Ban, AppArmor, auditd e boas práticas — hardening completo para Ubuntu Desktop e Server.",difficulty:"avancado",timeToRead:"30 min",children:[s.jsx("p",{children:"O Ubuntu tem várias camadas de segurança ativadas por padrão — mais do que a maioria das distribuições Linux. Ainda assim, existem configurações importantes a fazer especialmente em servidores expostos à internet. Este guia cobre as principais ferramentas e práticas de segurança do Ubuntu."}),s.jsx("h2",{children:"1. UFW — Firewall Simplificado"}),s.jsxs("p",{children:["O ",s.jsx("strong",{children:"UFW"})," (Uncomplicated Firewall) já vem instalado no Ubuntu e é a interface mais simples para gerenciar o iptables/nftables."]}),s.jsx(v,{title:"Configuração completa do UFW",code:`# Verificar status
sudo ufw status verbose

# Configurar políticas padrão ANTES de habilitar:
sudo ufw default deny incoming    # Bloquear tudo que entra
sudo ufw default allow outgoing   # Permitir tudo que sai

# Adicionar regras essenciais
sudo ufw allow ssh                # Porta 22 (CRÍTICO: faça isso antes de habilitar!)
sudo ufw allow 80/tcp             # HTTP
sudo ufw allow 443/tcp            # HTTPS

# Habilitar o firewall
sudo ufw enable

# Outras regras úteis:
sudo ufw allow 3306/tcp           # MySQL (apenas se necessário!)
sudo ufw allow from 192.168.1.0/24  # Permitir rede local

# Limitar tentativas de conexão SSH (anti-brute-force básico)
sudo ufw limit ssh

# Ver regras numeradas
sudo ufw status numbered

# Remover regra por número
sudo ufw delete 3

# Remover regra por especificação
sudo ufw delete allow 80/tcp

# Ver log do UFW
sudo tail -f /var/log/ufw.log
sudo grep "UFW BLOCK" /var/log/ufw.log | tail -20

# Desabilitar temporariamente
sudo ufw disable`}),s.jsxs(G,{type:"danger",title:"Sempre adicione a regra SSH ANTES de habilitar o UFW",children:["Se você habilitar o UFW sem adicionar a regra ",s.jsx("code",{children:"sudo ufw allow ssh"})," primeiro, e estiver acessando via SSH, você perderá o acesso ao servidor imediatamente. Sem como desfazer remotamente — precisaria de acesso físico ao servidor."]}),s.jsx("h2",{children:"2. Fail2Ban — Proteção Contra Brute Force"}),s.jsxs("p",{children:["O ",s.jsx("strong",{children:"Fail2Ban"})," monitora logs do sistema e bane automaticamente IPs que fazem muitas tentativas de login falhas — essencial para servidores expostos à internet."]}),s.jsx(v,{title:"Instalar e configurar Fail2Ban",code:`# Instalar
sudo apt install fail2ban

# Copiar configuração padrão para customização:
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Editar configuração
sudo nano /etc/fail2ban/jail.local

# Configurações importantes no jail.local:
[DEFAULT]
bantime  = 3600      # Banir por 1 hora (em segundos)
findtime = 600       # Janela de tempo para contar tentativas (10 min)
maxretry = 5         # Número de tentativas antes de banir

# Ativar proteção para SSH
[sshd]
enabled = true
port    = ssh
filter  = sshd
backend = systemd
maxretry = 3          # Somente 3 tentativas no SSH
bantime  = 86400      # Banir por 24 horas

# Iniciar e habilitar o serviço:
sudo systemctl enable --now fail2ban

# Ver status e jails ativas:
sudo fail2ban-client status
sudo fail2ban-client status sshd

# Ver IPs banidos:
sudo fail2ban-client status sshd | grep "Banned IP"

# Desbanir um IP manualmente (ex: se você se baniu):
sudo fail2ban-client set sshd unbanip 192.168.1.100

# Ver log do fail2ban:
sudo tail -f /var/log/fail2ban.log`}),s.jsx("h2",{children:"3. AppArmor — Controle Mandatório de Acesso"}),s.jsxs("p",{children:["O ",s.jsx("strong",{children:"AppArmor"})," é um sistema MAC (Mandatory Access Control) que restringe o que programas podem acessar. Já vem ativo no Ubuntu por padrão."]}),s.jsx(v,{title:"Verificando e gerenciando AppArmor",code:`# Verificar status do AppArmor
sudo apparmor_status
# ou
aa-status

# Ver todos os perfis carregados
sudo aa-status | grep "profiles are loaded"

# Modos de perfil:
# enforce = perfil aplicado, ações bloqueadas e logadas
# complain = perfil de monitoramento apenas, sem bloquear

# Instalar ferramentas adicionais
sudo apt install apparmor-utils

# Ver perfis disponíveis
ls /etc/apparmor.d/

# Carregar um perfil
sudo apparmor_parser -r /etc/apparmor.d/usr.sbin.nginx

# Colocar perfil em modo de reclamação (para testar sem bloquear)
sudo aa-complain /usr/sbin/nginx

# Colocar em modo enforce (bloqueio real)
sudo aa-enforce /usr/sbin/nginx

# Ver logs do AppArmor
sudo grep apparmor /var/log/syslog | tail -20
sudo journalctl | grep "apparmor" | tail -20`}),s.jsx("h2",{children:"4. Atualizações de Segurança Automáticas"}),s.jsx(v,{title:"Configurar atualizações de segurança automáticas",code:`# O Ubuntu tem Unattended Upgrades para patches de segurança automáticos
sudo apt install unattended-upgrades

# Configurar
sudo dpkg-reconfigure -plow unattended-upgrades

# Arquivo de configuração principal:
sudo nano /etc/apt/apt.conf.d/50unattended-upgrades

# Configurações importantes:
# Unattended-Upgrade::Allowed-Origins {
#     "\${distro_id}:\${distro_codename}-security";  ← Somente segurança (padrão)
#     "\${distro_id}:\${distro_codename}-updates";   ← Adicionar para updates normais
# };
# Unattended-Upgrade::Automatic-Reboot "false";    ← false = não reiniciar automaticamente
# Unattended-Upgrade::Mail "admin@exemplo.com";    ← Notificação por email

# Testar manualmente (modo seco):
sudo unattended-upgrade --dry-run -d

# Ver o que foi atualizado automaticamente:
cat /var/log/unattended-upgrades/unattended-upgrades.log`}),s.jsx("h2",{children:"5. Hardening SSH"}),s.jsx(v,{title:"Protegendo o servidor SSH",code:`# Editar configuração do SSH:
sudo nano /etc/ssh/sshd_config

# Alterações recomendadas de segurança:

# 1. Trocar a porta padrão (22 → outra porta)
Port 2222     # Reduz ataques automatizados

# 2. Proibir login do root via SSH
PermitRootLogin no

# 3. Permitir apenas autenticação por chave
PasswordAuthentication no
PubkeyAuthentication yes

# 4. Limitar o número de tentativas de login
MaxAuthTries 3

# 5. Definir timeout para sessões inativas (segundos)
ClientAliveInterval 300
ClientAliveCountMax 2

# 6. Permitir apenas usuários específicos
AllowUsers joao deploy

# 7. Restringir versão do protocolo
Protocol 2

# Após editar, testar configuração:
sudo sshd -t   # Verificar sintaxe sem reiniciar

# Aplicar mudanças:
sudo systemctl restart ssh

# IMPORTANTE: Mantenha uma sessão SSH aberta durante o teste!
# Abra nova sessão para confirmar que consegue entrar antes de fechar a atual.`}),s.jsx("h2",{children:"6. GPG — Criptografia de Arquivos"}),s.jsx(v,{title:"Criptografando arquivos com GPG",code:`# Gerar par de chaves GPG
gpg --gen-key

# Listar chaves
gpg --list-keys
gpg --list-secret-keys

# Exportar chave pública
gpg --export --armor joao@exemplo.com > chave-publica.gpg

# Importar chave pública de alguém
gpg --import chave-publica-maria.gpg

# Criptografar arquivo para um destinatário
gpg --encrypt --recipient maria@exemplo.com arquivo.txt
# Resultado: arquivo.txt.gpg

# Criptografar com senha (sem precisar de par de chaves)
gpg --symmetric arquivo.txt

# Descriptografar
gpg --decrypt arquivo.txt.gpg > arquivo.txt

# Assinar um arquivo (sem criptografar)
gpg --sign arquivo.txt

# Verificar assinatura
gpg --verify arquivo.txt.gpg`}),s.jsx("h2",{children:"7. Verificar Integridade do Sistema"}),s.jsx(v,{title:"Monitorando mudanças no sistema",code:`# Instalar AIDE (Advanced Intrusion Detection Environment)
sudo apt install aide

# Inicializar banco de dados de referência
sudo aideinit

# Copiar banco de dados para uso:
sudo cp /var/lib/aide/aide.db.new /var/lib/aide/aide.db

# Verificar integridade contra a referência (executar regularmente)
sudo aide --check

# Ver logs de autenticação para atividade suspeita:
sudo grep "sudo" /var/log/auth.log | tail -30
sudo grep "Failed password" /var/log/auth.log | tail -20
sudo grep "Invalid user" /var/log/auth.log | tail -20

# Verificar conexões de rede abertas
sudo ss -tlnp

# Verificar serviços que iniciam no boot
systemctl list-unit-files --state=enabled

# Verificar arquivos com SUID (podem ser explorados)
sudo find / -type f -perm -4000 2>/dev/null`}),s.jsx("h2",{children:"8. Boas Práticas Gerais de Segurança"}),s.jsx(G,{type:"warning",title:"Checklist de segurança para servidores Ubuntu",children:s.jsxs("ul",{className:"mt-1 mb-0",children:[s.jsx("li",{children:"✓ UFW habilitado com regras mínimas necessárias"}),s.jsx("li",{children:"✓ Fail2Ban instalado e protegendo SSH"}),s.jsx("li",{children:"✓ Login root SSH desabilitado (PermitRootLogin no)"}),s.jsx("li",{children:"✓ Autenticação por chave SSH (PasswordAuthentication no)"}),s.jsx("li",{children:"✓ Atualizações de segurança automáticas habilitadas"}),s.jsx("li",{children:"✓ AppArmor ativo (vem por padrão no Ubuntu)"}),s.jsx("li",{children:"✓ Usuários sem senhas padrão ou fracas"}),s.jsx("li",{children:"✓ Revisão regular dos logs de autenticação"}),s.jsx("li",{children:"✓ Princípio do menor privilégio (sudo apenas quando necessário)"}),s.jsx("li",{children:"✓ Backups regulares e testados"})]})})]})}function Jv(){return s.jsxs(le,{title:"Troubleshooting Ubuntu",subtitle:"Diagnosticando e resolvendo problemas comuns — boot, rede, espaço em disco, pacotes corrompidos e muito mais.",difficulty:"intermediario",timeToRead:"25 min",children:[s.jsx("p",{children:"Todo sistema Linux vai apresentar problemas em algum momento. A habilidade de diagnosticar e resolver esses problemas é o que separa um usuário experiente de um iniciante. Este guia cobre os problemas mais comuns no Ubuntu e como resolvê-los."}),s.jsx("h2",{children:"Problemas com APT e Pacotes"}),s.jsx("h3",{children:"apt está travado ou corrompido"}),s.jsx(v,{title:"Corrigir APT quebrado",code:`# Problema 1: "Could not get lock /var/lib/dpkg/lock"
# Outro processo apt está rodando
sudo killall apt apt-get    # Matar instâncias em execução
sudo rm /var/lib/apt/lists/lock
sudo rm /var/lib/dpkg/lock
sudo rm /var/lib/dpkg/lock-frontend
sudo dpkg --configure -a    # Reconfigurar pacotes pendentes

# Problema 2: "dpkg: error processing package"
sudo dpkg --configure -a
sudo apt install -f           # -f = fix-broken (corrigir dependências)
sudo apt update && sudo apt upgrade

# Problema 3: "Package has no installation candidate"
# O pacote não existe no repositório atual. Soluções:
sudo apt update               # Atualizar lista de repositórios
# Verificar se o repositório está habilitado:
cat /etc/apt/sources.list | grep universe
sudo add-apt-repository universe   # Habilitar se necessário

# Problema 4: Dependências conflitantes
sudo apt install -f           # Corrigir automaticamente
sudo apt autoremove           # Remover pacotes conflitantes

# Problema 5: "Hash Sum mismatch"
# Cache do APT corrompido. Limpar e refazer:
sudo rm -rf /var/lib/apt/lists/*
sudo apt update

# Problema 6: PPA removido ou offline
# Ver PPAs instalados:
ls /etc/apt/sources.list.d/
# Remover PPA problemático:
sudo add-apt-repository --remove ppa:nome/ppa`}),s.jsx("h2",{children:"Problemas de Boot"}),s.jsx(v,{title:"O sistema não inicia",code:`# Se o GRUB aparece mas o Ubuntu não inicia:

# 1. No menu do GRUB, selecione "Advanced options for Ubuntu"
# 2. Escolha uma versão do kernel mais antiga
# 3. Se funcionar, o kernel mais novo está quebrado

# Para corrigir kernel quebrado (em sessão de recovery):
# No menu GRUB → "Ubuntu, com Linux X.X.X-X-generic (recovery mode)"
# → "root" para terminal root

# Montar sistema de arquivos em modo escrita:
mount -o remount,rw /

# Reinstalar o kernel:
apt install --reinstall linux-generic
update-grub

# Se o GRUB não aparece mais:
# Boot pelo live USB do Ubuntu
# Em "Try Ubuntu":
sudo mount /dev/sda3 /mnt             # Montar partição raiz
sudo mount /dev/sda1 /mnt/boot/efi   # Montar EFI
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys

# Entrar no sistema (chroot):
sudo chroot /mnt

# Reinstalar o GRUB:
grub-install /dev/sda
update-grub
exit
reboot`}),s.jsx("h2",{children:"Problemas com Espaço em Disco"}),s.jsx(v,{title:"Disco cheio — diagnóstico e limpeza",code:`# Verificar uso de disco
df -h

# Encontrar os maiores arquivos e diretórios
du -sh /* 2>/dev/null | sort -rh | head -20
du -sh /var/* 2>/dev/null | sort -rh | head -10

# === LIMPEZA DO APT ===
sudo apt autoremove -y     # Remover pacotes desnecessários
sudo apt autoclean         # Limpar cache de versões antigas
sudo apt clean             # Limpar TODO o cache de pacotes

# === LIMPAR LOGS ANTIGOS ===
# Ver tamanho dos logs do journald:
journalctl --disk-usage

# Limpar logs com mais de 7 dias:
sudo journalctl --vacuum-time=7d

# Limpar mantendo máximo 500MB:
sudo journalctl --vacuum-size=500M

# Limpar logs antigos em /var/log:
sudo find /var/log -name "*.log.*.gz" -delete
sudo find /var/log -name "*.log.[0-9]*" -delete

# === SNAPSHOTS E SNAPS ===
# Snaps antigos acumulam versões:
# Ver versões antigas de snaps:
sudo snap list --all | grep disabled

# Remover versões antigas de snaps (script):
sudo snap list --all | awk '/disabled/{print $1, $3}' | \\
    while read snapname revision; do
        sudo snap remove "$snapname" --revision="$revision"
    done

# === LIMPEZA GERAL ===
# Arquivos de core dump:
sudo rm -f /var/crash/*

# Thumbnails antigos:
rm -rf ~/.cache/thumbnails/*

# Ver uso da home por categoria:
du -sh ~/.*  2>/dev/null | sort -rh | head -20
du -sh ~/.cache/  # O cache costuma ser o maior`}),s.jsx("h2",{children:"Problemas de Rede"}),s.jsx(v,{title:"Diagnosticando problemas de conectividade",code:`# Verificar se a interface está UP
ip link show
# Se estiver DOWN:
sudo ip link set enp3s0 up

# Verificar se tem IP
ip addr show

# Obter IP via DHCP manualmente
sudo dhclient enp3s0

# Verificar DNS
cat /etc/resolv.conf
nslookup google.com     # Se falhar, problema de DNS
ping 8.8.8.8            # Se funcionar mas nslookup falhar: problema de DNS

# Reiniciar NetworkManager
sudo systemctl restart NetworkManager

# Ver logs de rede
sudo journalctl -u NetworkManager -n 50

# Wi-Fi não aparece
rfkill list             # Ver se está bloqueado por software
sudo rfkill unblock wifi

# Reinstalar driver Wi-Fi (Broadcom como exemplo):
sudo apt install --reinstall bcmwl-kernel-source
sudo modprobe wl

# Verificar resolução DNS
resolvectl status
sudo systemd-resolve --flush-caches  # Limpar cache DNS`}),s.jsx("h2",{children:"Problemas com GNOME e Interface Gráfica"}),s.jsx(v,{title:"Resolvendo travamentos do desktop",code:`# GNOME Shell travou (sessão X11 apenas):
# Alt + F2 → digitar "r" → Enter  (reinicia o Shell sem fechar apps)

# Sessão Wayland travada:
# Ctrl + Alt + F3   (ir para terminal virtual)
# Logar e reiniciar o GNOME:
systemctl restart gdm3   # Reinicia o display manager (desconecta sessão atual!)

# Verificar erros do GNOME:
journalctl -b | grep gnome-shell | tail -30
journalctl -b | grep -i "segfault|crash" | tail -20

# Resetar GNOME para configurações padrão:
gsettings reset-recursively org.gnome.shell
dconf reset -f /org/gnome/

# Extensão causando crash:
# Desabilitar todas extensões:
gsettings set org.gnome.shell enabled-extensions "[]"
# Reabilitar uma por uma para identificar a problemática

# Driver NVIDIA causando problemas:
# Ver logs do Xorg:
cat /var/log/Xorg.0.log | grep "(EE)"

# Problemas de tela preta no login:
# Ctrl + Alt + F3 → logar → verificar:
ls -la ~/.Xauthority    # Deve existir
ls -la /tmp/.X11-unix/  # Deve ter sockets`}),s.jsx("h2",{children:"Diagnóstico Geral do Sistema"}),s.jsx(v,{title:"Verificação de saúde do sistema",code:`# Ver todos os erros do boot atual
journalctl -b -p err

# Serviços com falha
systemctl --failed

# Ver últimas mensagens do kernel (inclui erros de hardware)
dmesg | tail -50
dmesg | grep -i "error|fail|warn" | tail -20

# Temperatura do CPU (superaquecimento)
sudo apt install lm-sensors
sensors
sudo apt install s-tui     # Monitor de temperatura gráfico

# Memória: ver se tem erros (requer reboot para testar)
sudo apt install memtest86+
# No GRUB: escolha "Memory test (memtest86+)"

# S.M.A.R.T. do disco (saúde do HD/SSD)
sudo apt install smartmontools
sudo smartctl -a /dev/sda
sudo smartctl -H /dev/sda    # Health status: PASSED ou FAILED

# Verificar filesystem (disco deve estar desmontado!)
sudo fsck -f /dev/sdb1

# Ver log do Ubuntu após um crash:
ls /var/crash/
sudo apport-unpack /var/crash/_usr_bin_xyz.1000.crash /tmp/crash-report/`}),s.jsx("h2",{children:"Comandos de Socorro Rápido"}),s.jsx(v,{title:"SysRq — controle de emergência do kernel",code:`# Tecla mágica do Linux: Alt + SysRq (Print Screen) + [tecla]

# Sequência de emergência (sistema completamente travado):
# Alt + SysRq + R  → Recuperar teclado do X
# Alt + SysRq + E  → Matar todos os processos
# Alt + SysRq + I  → Matar TODOS os processos
# Alt + SysRq + S  → Sincronizar discos (salvar dados)
# Alt + SysRq + U  → Remontar FS como somente leitura
# Alt + SysRq + B  → Reiniciar imediatamente
# Mnemônico: "Reisub" = "Raising Elephants Is So Utterly Boring"
# (R, E, I, S, U, B) — a sequência mais segura de reboot de emergência

# Ver se SysRq está habilitado:
cat /proc/sys/kernel/sysrq
# 1 = ativado, 0 = desativado

# Habilitar:
echo 1 | sudo tee /proc/sys/kernel/sysrq`})]})}function Wv(){return s.jsxs(le,{title:"Referências e Documentação",subtitle:"As melhores fontes para aprofundar seu conhecimento em Ubuntu — documentação oficial, comunidades e recursos de aprendizado.",difficulty:"iniciante",timeToRead:"5 min",children:[s.jsx("p",{children:"Este guia cobriu os fundamentos do Ubuntu, mas há muito mais para aprender. Aqui estão as melhores fontes de referência, organizadas por categoria, para você continuar sua jornada."}),s.jsx("h2",{children:"Documentação Oficial Ubuntu"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Documentation"}),": ",s.jsx("code",{children:"help.ubuntu.com"}),s.jsx("br",{}),"Documentação oficial completa, mantida pela Canonical e pela comunidade Ubuntu. Inclui guias de instalação, tutoriais de configuração e referência técnica."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Server Guide"}),": ",s.jsx("code",{children:"ubuntu.com/server/docs"}),s.jsx("br",{}),"Guia oficial e completo para Ubuntu Server — configuração de serviços, segurança, virtualização, containers e muito mais."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Community Help Wiki"}),": ",s.jsx("code",{children:"help.ubuntu.com/community"}),s.jsx("br",{}),"Wiki mantida pela comunidade com artigos sobre hardware específico, configurações avançadas e soluções de problemas comuns."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Canonical Blog"}),": ",s.jsx("code",{children:"ubuntu.com/blog"}),s.jsx("br",{}),"Notícias oficiais sobre novas versões, features e tecnologias do Ubuntu."]})]}),s.jsx("h2",{children:"Comunidades de Suporte"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Ask Ubuntu"}),": ",s.jsx("code",{children:"askubuntu.com"}),s.jsx("br",{}),"Site de perguntas e respostas dedicado ao Ubuntu (parte da rede Stack Exchange). Tem resposta para praticamente qualquer problema. ",s.jsx("strong",{children:"Dica"}),": antes de postar uma pergunta, pesquise — provavelmente alguém já teve o mesmo problema."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Forums"}),": ",s.jsx("code",{children:"ubuntuforums.org"}),s.jsx("br",{}),"Fórum oficial da comunidade Ubuntu. Ativo desde 2004, com milhões de posts. Ótimo para problemas complexos e discussões técnicas."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Reddit r/Ubuntu"}),": ",s.jsx("code",{children:"reddit.com/r/Ubuntu"}),s.jsx("br",{}),"Comunidade ativa com discussões, dicas e ajuda. Menos formal que os fóruns oficiais."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ubuntu Brasil"}),": ",s.jsx("code",{children:"ubuntu-br.org"}),s.jsx("br",{}),"Comunidade brasileira oficial do Ubuntu, com fórum e lista de e-mail em português."]})]}),s.jsx("h2",{children:"Man Pages — O Manual Integrado"}),s.jsx(v,{title:"Usando o sistema de manuais do Linux",code:`# O Linux tem documentação integrada para quase todos os comandos
man ls          # Manual completo do ls
man apt         # Manual do APT
man ssh         # Manual do SSH
man bash        # Manual completo do Bash (muito extenso!)
man 5 fstab     # Manual de formato do arquivo /etc/fstab
                # (número 5 = seção de formatos de arquivo)

# Pesquisar em todos os manuais por palavra-chave:
man -k compres  # Lista todos os man pages sobre compressão
apropos firewall

# Ver todas as seções disponíveis para um comando:
man -a password   # Mostra todas as seções que têm "password"

# Alternativa mais amigável: tldr (resumo prático)
sudo apt install tldr
tldr apt        # Exemplos práticos de uso do apt
tldr tar        # Como usar o tar com exemplos reais
tldr ssh        # Exemplos de uso do ssh

# Acessar help embutido dos comandos:
ls --help
apt --help
grep --help`}),s.jsx("h2",{children:"Recursos para Aprendizado"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"The Linux Command Line (livro)"}),": ",s.jsx("code",{children:"linuxcommand.org"}),s.jsx("br",{}),"Disponível gratuitamente online. Considerado um dos melhores livros para aprender o terminal Linux, escrito por William Shotts. Cobre desde o básico até scripting avançado."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Linux Journey"}),": ",s.jsx("code",{children:"linuxjourney.com"}),s.jsx("br",{}),"Tutorial interativo gratuito sobre Linux. Cobre desde os fundamentos do terminal até redes, processos e mais. Excelente para iniciantes."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"OverTheWire Bandit"}),": ",s.jsx("code",{children:"overthewire.org/wargames/bandit"}),s.jsx("br",{}),"Jogo de desafios práticos para aprender o terminal Linux através de wargames. Cada nível ensina um novo conceito."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Explain Shell"}),": ",s.jsx("code",{children:"explainshell.com"}),s.jsx("br",{}),"Cole qualquer comando e o site explica cada parte. Perfeito para entender comandos longos e complexos que você encontra na internet."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Shellcheck"}),": ",s.jsx("code",{children:"shellcheck.net"}),s.jsx("br",{}),"Verificador estático de scripts Bash. Cole seu script e ele encontra erros e sugere melhorias."]})]}),s.jsx("h2",{children:"Comandos de Consulta Rápida"}),s.jsx(v,{title:"Consultando informações do sistema",code:`# Versão do Ubuntu
lsb_release -a
cat /etc/os-release

# Versão do kernel
uname -r
uname -a      # Tudo: kernel, hostname, arquitetura

# Informações de hardware
lscpu         # CPU
lsmem         # Memória RAM (pode precisar: sudo apt install util-linux)
lspci         # Dispositivos PCI
lsusb         # Dispositivos USB
lsblk         # Discos e partições
sudo lshw -short  # Hardware completo resumido

# Tempo de atividade do sistema
uptime
uptime -p     # Formato legível: "up 3 days, 2 hours"

# Quanta memória está sendo usada
free -h

# Versão de programas
python3 --version
node --version
git --version
docker --version

# Onde está instalado um programa
which python3
type python3

# Changelog de um pacote
apt changelog nginx`}),s.jsx("h2",{children:"Atalhos e Dicas Finais"}),s.jsx(G,{type:"success",title:"Dicas de ouro para usuários Ubuntu",children:s.jsxs("ul",{className:"mt-1 mb-0",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Use Tab"})," para autocompletar — economiza muito tempo e evita erros de digitação."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ctrl+R"})," para buscar no histórico de comandos — mais rápido do que rolar com ↑."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"man comando"})," antes de executar algo novo — os manuais são completos e confiáveis."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Sempre leia o erro inteiro"})," — a maioria das mensagens de erro explica exatamente o que aconteceu e como corrigir."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Faça backup antes de mudanças grandes"})," — ",s.jsx("code",{children:"sudo cp /etc/arquivo /etc/arquivo.bak"})," antes de editar qualquer config."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"sudo journalctl -b -p err"})," é seu melhor amigo quando algo não funciona — mostra todos os erros do boot atual."]})]})})]})}const Gm=He.forwardRef(({className:n,...c},p)=>s.jsx("div",{ref:p,className:ga("rounded-xl border bg-card text-card-foreground shadow",n),...c}));Gm.displayName="Card";const $v=He.forwardRef(({className:n,...c},p)=>s.jsx("div",{ref:p,className:ga("flex flex-col space-y-1.5 p-6",n),...c}));$v.displayName="CardHeader";const eg=He.forwardRef(({className:n,...c},p)=>s.jsx("div",{ref:p,className:ga("font-semibold leading-none tracking-tight",n),...c}));eg.displayName="CardTitle";const ag=He.forwardRef(({className:n,...c},p)=>s.jsx("div",{ref:p,className:ga("text-sm text-muted-foreground",n),...c}));ag.displayName="CardDescription";const Bm=He.forwardRef(({className:n,...c},p)=>s.jsx("div",{ref:p,className:ga("p-6 pt-0",n),...c}));Bm.displayName="CardContent";const tg=He.forwardRef(({className:n,...c},p)=>s.jsx("div",{ref:p,className:ga("flex items-center p-6 pt-0",n),...c}));tg.displayName="CardFooter";function og(){return s.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50",children:s.jsx(Gm,{className:"w-full max-w-md mx-4",children:s.jsxs(Bm,{className:"pt-6",children:[s.jsxs("div",{className:"flex mb-4 gap-2",children:[s.jsx(wm,{className:"h-8 w-8 text-red-500"}),s.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"404 Page Not Found"})]}),s.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Did you forget to add the page to the router?"})]})})})}const sg=new hv;function ig({children:n}){const[c,p]=He.useState(!1),[m]=ql();return He.useEffect(()=>{p(!1),window.scrollTo(0,0)},[m]),s.jsxs("div",{className:"min-h-screen bg-background text-foreground flex",children:[s.jsx(bv,{isOpen:c,setIsOpen:p}),s.jsxs("div",{className:"flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300",children:[s.jsx(jv,{onMenuClick:()=>p(!0)}),s.jsx("main",{className:"flex-1",children:n})]})]})}function rg(){return s.jsx(ig,{children:s.jsxs(Ch,{children:[s.jsx(te,{path:"/",component:qv}),s.jsx(te,{path:"/historia",component:zv}),s.jsx(te,{path:"/filosofia",component:Uv}),s.jsx(te,{path:"/instalacao",component:Dv}),s.jsx(te,{path:"/primeiros-passos",component:Cv}),s.jsx(te,{path:"/ambiente-grafico",component:wv}),s.jsx(te,{path:"/apt",component:Nv}),s.jsx(te,{path:"/snap-flatpak",component:Rv}),s.jsx(te,{path:"/systemd",component:Vv}),s.jsx(te,{path:"/sistema-arquivos",component:Hv}),s.jsx(te,{path:"/navegacao",component:Lv}),s.jsx(te,{path:"/manipulacao-arquivos",component:kv}),s.jsx(te,{path:"/visualizacao",component:Gv}),s.jsx(te,{path:"/permissoes",component:Bv}),s.jsx(te,{path:"/usuarios",component:_v}),s.jsx(te,{path:"/processos",component:Qv}),s.jsx(te,{path:"/redes",component:Pv}),s.jsx(te,{path:"/ssh",component:Mv}),s.jsx(te,{path:"/disco",component:Yv}),s.jsx(te,{path:"/shell-bash",component:Xv}),s.jsx(te,{path:"/redirecionamento",component:Fv}),s.jsx(te,{path:"/compressao",component:Zv}),s.jsx(te,{path:"/avancado",component:Kv}),s.jsx(te,{path:"/seguranca",component:Iv}),s.jsx(te,{path:"/troubleshooting",component:Jv}),s.jsx(te,{path:"/referencias",component:Wv}),s.jsx(te,{component:og})]})})}function ng(){return s.jsx(gv,{client:sg,children:s.jsx(Dh,{hook:ql,children:s.jsx(rg,{})})})}kh.createRoot(document.getElementById("root")).render(s.jsx(ng,{}));
