(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mini"] = factory();
	else
		root["mini"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/htm/dist/htm.module.js":
/*!*********************************************!*\
  !*** ./node_modules/htm/dist/htm.module.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a)}return e},t=new Map;/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e=""},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0])}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}


/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "Immer": () => /* binding */ it,
/* harmony export */   "applyPatches": () => /* binding */ st,
/* harmony export */   "castDraft": () => /* binding */ K,
/* harmony export */   "castImmutable": () => /* binding */ $,
/* harmony export */   "createDraft": () => /* binding */ vt,
/* harmony export */   "current": () => /* binding */ D,
/* harmony export */   "enableAllPlugins": () => /* binding */ J,
/* harmony export */   "enableES5": () => /* binding */ T,
/* harmony export */   "enableMapSet": () => /* binding */ C,
/* harmony export */   "enablePatches": () => /* binding */ F,
/* harmony export */   "finishDraft": () => /* binding */ pt,
/* harmony export */   "freeze": () => /* binding */ d,
/* harmony export */   "immerable": () => /* binding */ L,
/* harmony export */   "isDraft": () => /* binding */ n,
/* harmony export */   "isDraftable": () => /* binding */ r,
/* harmony export */   "nothing": () => /* binding */ H,
/* harmony export */   "original": () => /* binding */ e,
/* harmony export */   "produce": () => /* binding */ ut,
/* harmony export */   "produceWithPatches": () => /* binding */ at,
/* harmony export */   "setAutoFreeze": () => /* binding */ ft,
/* harmony export */   "setUseProxies": () => /* binding */ ct
/* harmony export */ });
function t(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];if(true){var i=Y[t],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+t;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function n(t){return!!t&&!!t[Q]}function r(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var n=Object.getPrototypeOf(t);return!n||n===Object.prototype}(t)||Array.isArray(t)||!!t[L]||!!t.constructor[L]||s(t)||v(t))}function e(r){return n(r)||t(23,r),r[Q].t}function i(t,n,r){void 0===r&&(r=!1),0===o(t)?(r?Object.keys:Z)(t).forEach((function(e){r&&"symbol"==typeof e||n(e,t[e],t)})):t.forEach((function(r,e){return n(e,r,t)}))}function o(t){var n=t[Q];return n?n.i>3?n.i-4:n.i:Array.isArray(t)?1:s(t)?2:v(t)?3:0}function u(t,n){return 2===o(t)?t.has(n):Object.prototype.hasOwnProperty.call(t,n)}function a(t,n){return 2===o(t)?t.get(n):t[n]}function f(t,n,r){var e=o(t);2===e?t.set(n,r):3===e?(t.delete(n),t.add(r)):t[n]=r}function c(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}function s(t){return X&&t instanceof Map}function v(t){return q&&t instanceof Set}function p(t){return t.o||t.t}function l(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var n=tt(t);delete n[Q];for(var r=Z(n),e=0;e<r.length;e++){var i=r[e],o=n[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),n)}function d(t,e){return void 0===e&&(e=!1),y(t)||n(t)||!r(t)?t:(o(t)>1&&(t.set=t.add=t.clear=t.delete=h),Object.freeze(t),e&&i(t,(function(t,n){return d(n,!0)}),!0),t)}function h(){t(2)}function y(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function b(n){var r=nt[n];return r||t(18,n),r}function m(t,n){nt[t]||(nt[t]=n)}function _(){return false||U||t(0),U}function j(t,n){n&&(b("Patches"),t.u=[],t.s=[],t.v=n)}function g(t){w(t),t.p.forEach(S),t.p=null}function w(t){t===U&&(U=t.l)}function O(t){return U={p:[],l:U,h:t,m:!0,_:0}}function S(t){var n=t[Q];0===n.i||1===n.i?n.j():n.g=!0}function P(n,e){e._=e.p.length;var i=e.p[0],o=void 0!==n&&n!==i;return e.h.O||b("ES5").S(e,n,o),o?(i[Q].P&&(g(e),t(4)),r(n)&&(n=M(e,n),e.l||x(e,n)),e.u&&b("Patches").M(i[Q],n,e.u,e.s)):n=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),n!==H?n:void 0}function M(t,n,r){if(y(n))return n;var e=n[Q];if(!e)return i(n,(function(i,o){return A(t,e,n,i,o,r)}),!0),n;if(e.A!==t)return n;if(!e.P)return x(t,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(n,i){return A(t,e,o,n,i,r)})),x(t,o,!1),r&&t.u&&b("Patches").R(e,r,t.u,t.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&t(5),n(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!n(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(t,n,r){void 0===r&&(r=!1),t.h.N&&t.m&&d(n,r)}function z(t,n){var r=t[Q];return(r?p(r):t)[n]}function I(t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var e=Object.getOwnPropertyDescriptor(r,n);if(e)return e;r=Object.getPrototypeOf(r)}}function k(t){t.P||(t.P=!0,t.l&&k(t.l))}function E(t){t.o||(t.o=l(t.t))}function R(t,n,r){var e=s(n)?b("MapSet").T(n,r):v(n)?b("MapSet").F(n,r):t.O?function(t,n){var r=Array.isArray(t),e={i:r?1:0,A:n?n.A:_(),P:!1,I:!1,D:{},l:n,t:t,k:null,o:null,j:null,C:!1},i=e,o=rt;r&&(i=[e],o=et);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(n,r):b("ES5").J(n,r);return(r?r.A:_()).p.push(e),e}function D(e){return n(e)||t(22,e),function t(n){if(!r(n))return n;var e,u=n[Q],c=o(n);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=N(n,c),u.I=!1}else e=N(n,c);return i(e,(function(n,r){u&&a(u.t,n)===r||f(e,n,t(r))})),3===c?new Set(e):e}(e)}function N(t,n){switch(n){case 2:return new Map(t);case 3:return Array.from(t)}return l(t)}function T(){function r(t,n){var r=s[t];return r?r.enumerable=n:s[t]=r={configurable:!0,enumerable:n,get:function(){var n=this[Q];return true&&f(n),rt.get(n,t)},set:function(n){var r=this[Q]; true&&f(r),rt.set(r,t,n)}},r}function e(t){for(var n=t.length-1;n>=0;n--){var r=t[n][Q];if(!r.P)switch(r.i){case 5:a(r)&&k(r);break;case 4:o(r)&&k(r)}}}function o(t){for(var n=t.t,r=t.k,e=Z(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=n[o];if(void 0===a&&!u(n,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!n[Q];return e.length!==Z(n).length+(v?0:1)}function a(t){var n=t.k;if(n.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(n,n.length-1);return!(!r||r.get)}function f(n){n.g&&t(3,JSON.stringify(p(n)))}var s={};m("ES5",{J:function(t,n){var e=Array.isArray(t),i=function(t,n){if(t){for(var e=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tt(n);delete o[Q];for(var u=Z(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,t||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(n),o)}(e,t),o={i:e?5:4,A:n?n.A:_(),P:!1,I:!1,D:{},l:n,t:t,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(t,r,o){o?n(r)&&r[Q].A===t&&e(t.p):(t.u&&function t(n){if(n&&"object"==typeof n){var r=n[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(n){n!==Q&&(void 0!==e[n]||u(e,n)?f[n]||t(o[n]):(f[n]=!0,k(r)))})),i(e,(function(t){void 0!==o[t]||u(o,t)||(f[t]=!1,k(r))}));else if(5===c){if(a(r)&&(k(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&t(o[l])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?o(t):a(t)}})}function F(){function e(t){if(!r(t))return t;if(Array.isArray(t))return t.map(e);if(s(t))return new Map(Array.from(t.entries()).map((function(t){return[t[0],e(t[1])]})));if(v(t))return new Set(Array.from(t).map(e));var n=Object.create(Object.getPrototypeOf(t));for(var i in t)n[i]=e(t[i]);return n}function f(t){return n(t)?e(t):t}var c="add";m("Patches",{$:function(n,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=n,s=0;s<i.length-1;s++){var v=o(f),p=i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||t(24),"function"==typeof f&&"prototype"===p&&t(24),"object"!=typeof(f=a(f,p))&&t(15,i.join("/"))}var l=o(f),d=e(r.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:t(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(r.value);default:return delete f[h]}default:t(17,u)}})),n},R:function(t,n,r,e){switch(t.i){case 0:case 4:case 2:return function(t,n,r,e){var o=t.t,s=t.o;i(t.D,(function(t,i){var v=a(o,t),p=a(s,t),l=i?u(o,t)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=n.concat(t);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(t,n,r,e);case 5:case 1:return function(t,n,r,e){var i=t.t,o=t.D,u=t.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=n.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=n.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:n.concat(["length"]),value:i.length})}(t,n,r,e);case 3:return function(t,n,r,e){var i=t.t,o=t.o,u=0;i.forEach((function(t){if(!o.has(t)){var i=n.concat([u]);r.push({op:"remove",path:i,value:t}),e.unshift({op:c,path:i,value:t})}u++})),u=0,o.forEach((function(t){if(!i.has(t)){var o=n.concat([u]);r.push({op:c,path:o,value:t}),e.unshift({op:"remove",path:o,value:t})}u++}))}(t,n,r,e)}},M:function(t,n,r,e){r.push({op:"replace",path:[],value:n}),e.push({op:"replace",path:[],value:t.t})}})}function C(){function n(t,n){function r(){this.constructor=t}a(t,n),t.prototype=(r.prototype=n.prototype,new r)}function e(t){t.o||(t.D=new Map,t.o=new Map(t.t))}function o(t){t.o||(t.o=new Set,t.t.forEach((function(n){if(r(n)){var e=R(t.A.h,n,t);t.p.set(n,e),t.o.add(e)}else t.o.add(n)})))}function u(n){n.g&&t(3,JSON.stringify(p(n)))}var a=function(t,n){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)},f=function(){function t(t,n){return this[Q]={i:2,l:n,A:n?n.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:t,k:this,C:!1,g:!1},this}n(t,Map);var o=t.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(t){return p(this[Q]).has(t)},o.set=function(t,n){var r=this[Q];return u(r),p(r).has(t)&&p(r).get(t)===n||(e(r),k(r),r.D.set(t,!0),r.o.set(t,n),r.D.set(t,!0)),this},o.delete=function(t){if(!this.has(t))return!1;var n=this[Q];return u(n),e(n),k(n),n.D.set(t,!1),n.o.delete(t),!0},o.clear=function(){var t=this[Q];u(t),p(t).size&&(e(t),k(t),t.D=new Map,i(t.t,(function(n){t.D.set(n,!1)})),t.o.clear())},o.forEach=function(t,n){var r=this;p(this[Q]).forEach((function(e,i){t.call(n,r.get(i),i,r)}))},o.get=function(t){var n=this[Q];u(n);var i=p(n).get(t);if(n.I||!r(i))return i;if(i!==n.t.get(t))return i;var o=R(n.A.h,i,n);return e(n),n.o.set(t,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var t,n=this,r=this.keys();return(t={})[V]=function(){return n.values()},t.next=function(){var t=r.next();return t.done?t:{done:!1,value:n.get(t.value)}},t},o.entries=function(){var t,n=this,r=this.keys();return(t={})[V]=function(){return n.entries()},t.next=function(){var t=r.next();if(t.done)return t;var e=n.get(t.value);return{done:!1,value:[t.value,e]}},t},o[V]=function(){return this.entries()},t}(),c=function(){function t(t,n){return this[Q]={i:3,l:n,A:n?n.A:_(),P:!1,I:!1,o:void 0,t:t,k:this,p:new Map,g:!1,C:!1},this}n(t,Set);var r=t.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(t){var n=this[Q];return u(n),n.o?!!n.o.has(t)||!(!n.p.has(t)||!n.o.has(n.p.get(t))):n.t.has(t)},r.add=function(t){var n=this[Q];return u(n),this.has(t)||(o(n),k(n),n.o.add(t)),this},r.delete=function(t){if(!this.has(t))return!1;var n=this[Q];return u(n),o(n),k(n),n.o.delete(t)||!!n.p.has(t)&&n.o.delete(n.p.get(t))},r.clear=function(){var t=this[Q];u(t),p(t).size&&(o(t),k(t),t.o.clear())},r.values=function(){var t=this[Q];return u(t),o(t),t.o.values()},r.entries=function(){var t=this[Q];return u(t),o(t),t.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(t,n){for(var r=this.values(),e=r.next();!e.done;)t.call(n,e.value,e.value,this),e=r.next()},t}();m("MapSet",{T:function(t,n){return new f(t,n)},F:function(t,n){return new c(t,n)}})}function J(){T(),C(),F()}function K(t){return t}function $(t){return t}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return"Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return"Unsupported patch operation: "+t},18:function(t){return"The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return"'current' expects a draft, got: "+t},23:function(t){return"'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,tt=Object.getOwnPropertyDescriptors||function(t){var n={};return Z(t).forEach((function(r){n[r]=Object.getOwnPropertyDescriptor(t,r)})),n},nt={},rt={get:function(t,n){if(n===Q)return t;var e=p(t);if(!u(e,n))return function(t,n,r){var e,i=I(n,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(t.k):void 0}(t,e,n);var i=e[n];return t.I||!r(i)?i:i===z(t.t,n)?(E(t),t.o[n]=R(t.A.h,i,t)):i},has:function(t,n){return n in p(t)},ownKeys:function(t){return Reflect.ownKeys(p(t))},set:function(t,n,r){var e=I(p(t),n);if(null==e?void 0:e.set)return e.set.call(t.k,r),!0;if(!t.P){var i=z(p(t),n),o=null==i?void 0:i[Q];if(o&&o.t===r)return t.o[n]=r,t.D[n]=!1,!0;if(c(r,i)&&(void 0!==r||u(t.t,n)))return!0;E(t),k(t)}return t.o[n]=r,t.D[n]=!0,!0},deleteProperty:function(t,n){return void 0!==z(t.t,n)||n in t.t?(t.D[n]=!1,E(t),k(t)):delete t.D[n],t.o&&delete t.o[n],!0},getOwnPropertyDescriptor:function(t,n){var r=p(t),e=Reflect.getOwnPropertyDescriptor(r,n);return e?{writable:!0,configurable:1!==t.i||"length"!==n,enumerable:e.enumerable,value:r[n]}:e},defineProperty:function(){t(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){t(12)}},et={};i(rt,(function(t,n){et[t]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}})),et.deleteProperty=function(n,r){return true&&isNaN(parseInt(r))&&t(13),rt.deleteProperty.call(this,n[0],r)},et.set=function(n,r,e){return true&&"length"!==r&&isNaN(parseInt(r))&&t(14),rt.set.call(this,n[0],r,e,n[0])};var it=function(){function e(t){this.O=B,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(n,e,i){if("function"==typeof n&&"function"!=typeof e){var o=e;e=n;var u=this;return function(t){var n=this;void 0===t&&(t=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(t,(function(t){var r;return(r=e).call.apply(r,[n,t].concat(i))}))}}var a;if("function"!=typeof e&&t(6),void 0!==i&&"function"!=typeof i&&t(7),r(n)){var f=O(this),c=R(this,n,void 0),s=!0;try{a=e(c),s=!1}finally{s?g(f):w(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(t){return j(f,i),P(t,f)}),(function(t){throw g(f),t})):(j(f,i),P(a,f))}if(!n||"object"!=typeof n){if((a=e(n))===H)return;return void 0===a&&(a=n),this.N&&d(a,!0),a}t(21,n)},i.produceWithPatches=function(t,n){var r,e,i=this;return"function"==typeof t?function(n){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(n,(function(n){return t.apply(void 0,[n].concat(e))}))}:[this.produce(t,n,(function(t,n){r=t,e=n})),r,e]},i.createDraft=function(e){r(e)||t(8),n(e)&&(e=D(e));var i=O(this),o=R(this,e,void 0);return o[Q].C=!0,w(i),o},i.finishDraft=function(n,r){var e=n&&n[Q]; true&&(e&&e.C||t(9),e.I&&t(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(t){this.N=t},i.setUseProxies=function(n){n&&!B&&t(20),this.O=n},i.applyPatches=function(t,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){t=i.value;break}}var o=b("Patches").$;return n(t)?o(t,r):this.produce(t,(function(t){return o(t,r.slice(e+1))}))},e}(),ot=new it,ut=ot.produce,at=ot.produceWithPatches.bind(ot),ft=ot.setAutoFreeze.bind(ot),ct=ot.setUseProxies.bind(ot),st=ot.applyPatches.bind(ot),vt=ot.createDraft.bind(ot),pt=ot.finishDraft.bind(ot);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ut);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./src/commands.ts":
/*!*************************!*\
  !*** ./src/commands.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCommand": () => /* binding */ createCommand
/* harmony export */ });
// export function createCommand<S, R = any>({ run, update }: CommandParams<S, R>): Command<S, R> {
function createCommand(asyncFunc, handlerName) {
    return { run: asyncFunc, handlerName: handlerName };
}


/***/ }),

/***/ "./src/component.ts":
/*!**************************!*\
  !*** ./src/component.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComponent": () => /* binding */ createComponent
/* harmony export */ });
function createComponent(_a) {
    var initialState = _a.initialState, render = _a.render, handlers = _a.handlers;
    return { initialState: initialState, render: render, updaters: handlers };
}


/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValueForEvent": () => /* binding */ getValueForEvent
/* harmony export */ });
function getValueForEvent(e) {
    var target = e.target;
    if (target == null)
        return null;
    if ("value" in target) {
        return target.value;
    }
    return null;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "component": () => /* binding */ component,
/* harmony export */   "html": () => /* binding */ html,
/* harmony export */   "mount": () => /* binding */ mount,
/* harmony export */   "command": () => /* binding */ command,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands */ "./src/commands.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component.ts");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lexer */ "./src/lexer.ts");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtime */ "./src/runtime.ts");




var component = _component__WEBPACK_IMPORTED_MODULE_1__.createComponent;
var html = _lexer__WEBPACK_IMPORTED_MODULE_2__.tokenize;
var mount = _runtime__WEBPACK_IMPORTED_MODULE_3__.mountComponent;
var command = _commands__WEBPACK_IMPORTED_MODULE_0__.createCommand;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    component: _component__WEBPACK_IMPORTED_MODULE_1__.createComponent,
    html: _lexer__WEBPACK_IMPORTED_MODULE_2__.tokenize,
    mount: _runtime__WEBPACK_IMPORTED_MODULE_3__.mountComponent,
    command: _commands__WEBPACK_IMPORTED_MODULE_0__.createCommand
});


/***/ }),

/***/ "./src/lexer.ts":
/*!**********************!*\
  !*** ./src/lexer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenize": () => /* binding */ tokenize
/* harmony export */ });
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");

function h(type, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return { type: type, props: props, children: children };
}
var tokenize = htm__WEBPACK_IMPORTED_MODULE_0__.default.bind(h);


/***/ }),

/***/ "./src/logger.ts":
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LEVEL_INFO": () => /* binding */ LEVEL_INFO,
/* harmony export */   "LEVEL_ERROR": () => /* binding */ LEVEL_ERROR,
/* harmony export */   "log": () => /* binding */ log
/* harmony export */ });
var LEVEL_INFO = 3;
var LEVEL_ERROR = 5;
function log(msg, context, level) {
    if (context === void 0) { context = {}; }
    if (level === void 0) { level = LEVEL_ERROR; }
    if (level === LEVEL_ERROR) {
        console.error(msg, context);
    }
    else {
        console.log(msg, context);
    }
}


/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": () => /* binding */ parse
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");

function applyProp(el, propName, propValue, eventCallback) {
    if (propName.startsWith("on")) {
        var eventName = propName.slice(2).toLowerCase();
        el.addEventListener(eventName, function (e) { return eventCallback(e, propValue); });
    }
    else {
        el.setAttribute(propName, propValue);
    }
}
function parseChild(token, eventCallback) {
    if (token == null)
        return null;
    if (typeof token === "string" || typeof token === "number") {
        return document.createTextNode(token.toString());
    }
    return parseToken(token, eventCallback);
}
function parseChildren(tokens, eventCallback) {
    return tokens.map(function (t) { return parseChild(t, eventCallback); }).filter(_util__WEBPACK_IMPORTED_MODULE_0__.isNotNull);
}
function parseToken(token, eventCallback) {
    var el = document.createElement(token.type);
    if (token.props != null) {
        Object.entries(token.props).forEach(function (_a) {
            var name = _a[0], value = _a[1];
            return applyProp(el, name, value, eventCallback);
        });
    }
    var childEls = parseChildren(token.children, eventCallback);
    el.append.apply(el, childEls);
    return el;
}
function parse(tokens, eventCallback) {
    if (eventCallback === void 0) { eventCallback = function () { }; }
    if (!Array.isArray(tokens))
        return parse([tokens], eventCallback);
    return tokens.map(function (t) { return parseToken(t, eventCallback); });
}


/***/ }),

/***/ "./src/runtime.ts":
/*!************************!*\
  !*** ./src/runtime.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mountComponent": () => /* binding */ mountComponent,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/logger.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./src/state.ts");
/* harmony import */ var _updateQueue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateQueue */ "./src/updateQueue.ts");





function resolveTarget(target) {
    if (Array.isArray(target))
        return target;
    if (typeof target === "string") {
        return Array.from(document.querySelectorAll(target));
    }
    return [target];
}
function handleEvent(e, name, mountState, state) {
    var handler = findHandler(mountState, name);
    if (handler == null)
        return { newState: state, commands: [] };
    var value = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getValueForEvent)(e);
    return runStateUpdate(state, function (s) { return handler(s, value) || []; });
}
function findHandler(mountState, name) {
    var updateFunc = mountState.component.updaters[name];
    if (updateFunc == null) {
        (0,_logger__WEBPACK_IMPORTED_MODULE_1__.log)("Update function with name \"" + name + "\" not found in your component", { mountState: mountState });
        return null;
    }
    return updateFunc;
}
function runStateUpdate(state, updateStateFunc) {
    var commands = [];
    var newState = (0,_state__WEBPACK_IMPORTED_MODULE_3__.updateState)(state, function (draftState) {
        commands = updateStateFunc(draftState);
    });
    return { newState: newState, commands: commands };
}
function renderState(mountState, state, eventHandler) {
    var _a;
    var tokens = mountState.component.render(state);
    var children = (0,_parser__WEBPACK_IMPORTED_MODULE_2__.parse)(tokens, eventHandler);
    mountState.el.innerHTML = "";
    (_a = mountState.el).append.apply(_a, children);
}
function mountSingle(component, el) {
    var state = component.initialState;
    var mountState = { component: component, el: el };
    var queue = (0,_updateQueue__WEBPACK_IMPORTED_MODULE_4__.createQueue)();
    var eventHandler = function (e, val) {
        var handler = function (state) { return handleEvent(e, val, mountState, state); };
        (0,_updateQueue__WEBPACK_IMPORTED_MODULE_4__.addToQueue)(queue, handler);
    };
    (0,_updateQueue__WEBPACK_IMPORTED_MODULE_4__.setHandler)(queue, function (eventHandler) {
        var _a = eventHandler(state), newState = _a.newState, commands = _a.commands;
        state = newState;
        commands.forEach(function (command) {
            // if (command.run)
            command.run().then(function (commandResult) {
                // Add the update method for the command to the queue
                var handler = findHandler(mountState, command.handlerName);
                if (handler == null)
                    return;
                (0,_updateQueue__WEBPACK_IMPORTED_MODULE_4__.addToQueue)(queue, function (s1) { return runStateUpdate(s1, function (s2) { return handler(s2, commandResult) || []; }); });
                // addToQueue(queue, (s: S) => runStateUpdate(s, (s2: S) => command.update(s2, commandResult)));
            });
        });
    });
    (0,_updateQueue__WEBPACK_IMPORTED_MODULE_4__.setFinally)(queue, function () {
        renderState(mountState, state, eventHandler);
    });
    renderState(mountState, state, eventHandler);
}
function mountComponent(component, target) {
    var els = resolveTarget(target);
    els.forEach(function (el) { return mountSingle(component, el); });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    mountComponent: mountComponent
});


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createState": () => /* binding */ createState,
/* harmony export */   "updateState": () => /* binding */ updateState
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

// console.log("Result:", produce(0, (s: any) => {
//   s = 2;
// }));
// const baseState = {
//   title: "one"
// }
// const nextState = produce(baseState, (draftState: any) => {
//   draftState["text"] = "test";
//   draftState.title = "lOLOL";
//     // draftState.push({todo: "Tweet about it"})
//     // draftState[1].done = true
// })
// console.log(nextState);
function createState(state) {
    return Object.freeze(state);
}
function updateState(state, updateFunc) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_0__.default)(state, updateFunc);
}


/***/ }),

/***/ "./src/updateQueue.ts":
/*!****************************!*\
  !*** ./src/updateQueue.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createQueue": () => /* binding */ createQueue,
/* harmony export */   "setHandler": () => /* binding */ setHandler,
/* harmony export */   "setFinally": () => /* binding */ setFinally,
/* harmony export */   "addToQueue": () => /* binding */ addToQueue,
/* harmony export */   "runHandler": () => /* binding */ runHandler,
/* harmony export */   "handleItem": () => /* binding */ handleItem
/* harmony export */ });
function createQueue() {
    return {
        items: [],
        working: false
    };
}
function setHandler(queue, handler) {
    queue.handler = handler;
    runHandler(queue);
    return;
}
function setFinally(queue, finallyFunc) {
    queue.finally = finallyFunc;
    runHandler(queue);
    return;
}
function addToQueue(queue, value) {
    queue.items.push(value);
    if (!queue.working) {
        runHandler(queue);
    }
    return queue;
}
function runHandler(queue) {
    if (!queue.handler || queue.items.length === 0)
        return;
    queue.working = true;
    while (queue.items.length > 0) {
        handleItem(queue);
    }
    if (queue.finally) {
        queue.finally();
    }
    if (queue.items.length > 0) {
        runHandler(queue);
    }
    else {
        queue.working = false;
    }
}
function handleItem(queue) {
    var item = getAndRemoveOldest(queue);
    if (item == null)
        return;
    if (!queue.handler)
        return;
    queue.handler(item);
}
function getAndRemoveOldest(queue) {
    return queue.items.shift();
}


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNull": () => /* binding */ isNull,
/* harmony export */   "isNotNull": () => /* binding */ isNotNull
/* harmony export */ });
function isNull(value) {
    return value == null;
}
function isNotNull(value) {
    return !isNull(value);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9taW5pLy4vbm9kZV9tb2R1bGVzL2h0bS9kaXN0L2h0bS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbWluaS8uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2ltbWVyLmVzbS5qcyIsIndlYnBhY2s6Ly9taW5pLy4vc3JjL2NvbW1hbmRzLnRzIiwid2VicGFjazovL21pbmkvLi9zcmMvY29tcG9uZW50LnRzIiwid2VicGFjazovL21pbmkvLi9zcmMvZG9tLnRzIiwid2VicGFjazovL21pbmkvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWluaS8uL3NyYy9sZXhlci50cyIsIndlYnBhY2s6Ly9taW5pLy4vc3JjL2xvZ2dlci50cyIsIndlYnBhY2s6Ly9taW5pLy4vc3JjL3BhcnNlci50cyIsIndlYnBhY2s6Ly9taW5pLy4vc3JjL3J1bnRpbWUudHMiLCJ3ZWJwYWNrOi8vbWluaS8uL3NyYy9zdGF0ZS50cyIsIndlYnBhY2s6Ly9taW5pLy4vc3JjL3VwZGF0ZVF1ZXVlLnRzIiwid2VicGFjazovL21pbmkvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9taW5pL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pbmkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21pbmkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9taW5pL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWluaS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7O0FDVkEsd0JBQXdC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O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWluaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW5pXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwidmFyIG49ZnVuY3Rpb24odCxzLHIsZSl7dmFyIHU7c1swXT0wO2Zvcih2YXIgaD0xO2g8cy5sZW5ndGg7aCsrKXt2YXIgcD1zW2grK10sYT1zW2hdPyhzWzBdfD1wPzE6MixyW3NbaCsrXV0pOnNbKytoXTszPT09cD9lWzBdPWE6ND09PXA/ZVsxXT1PYmplY3QuYXNzaWduKGVbMV18fHt9LGEpOjU9PT1wPyhlWzFdPWVbMV18fHt9KVtzWysraF1dPWE6Nj09PXA/ZVsxXVtzWysraF1dKz1hK1wiXCI6cD8odT10LmFwcGx5KGEsbih0LGEscixbXCJcIixudWxsXSkpLGUucHVzaCh1KSxhWzBdP3NbMF18PTI6KHNbaC0yXT0wLHNbaF09dSkpOmUucHVzaChhKX1yZXR1cm4gZX0sdD1uZXcgTWFwO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpe3ZhciByPXQuZ2V0KHRoaXMpO3JldHVybiByfHwocj1uZXcgTWFwLHQuc2V0KHRoaXMscikpLChyPW4odGhpcyxyLmdldChzKXx8KHIuc2V0KHMscj1mdW5jdGlvbihuKXtmb3IodmFyIHQscyxyPTEsZT1cIlwiLHU9XCJcIixoPVswXSxwPWZ1bmN0aW9uKG4pezE9PT1yJiYobnx8KGU9ZS5yZXBsYWNlKC9eXFxzKlxcblxccyp8XFxzKlxcblxccyokL2csXCJcIikpKT9oLnB1c2goMCxuLGUpOjM9PT1yJiYobnx8ZSk/KGgucHVzaCgzLG4sZSkscj0yKToyPT09ciYmXCIuLi5cIj09PWUmJm4/aC5wdXNoKDQsbiwwKToyPT09ciYmZSYmIW4/aC5wdXNoKDUsMCwhMCxlKTpyPj01JiYoKGV8fCFuJiY1PT09cikmJihoLnB1c2gociwwLGUscykscj02KSxuJiYoaC5wdXNoKHIsbiwwLHMpLHI9NikpLGU9XCJcIn0sYT0wO2E8bi5sZW5ndGg7YSsrKXthJiYoMT09PXImJnAoKSxwKGEpKTtmb3IodmFyIGw9MDtsPG5bYV0ubGVuZ3RoO2wrKyl0PW5bYV1bbF0sMT09PXI/XCI8XCI9PT10PyhwKCksaD1baF0scj0zKTplKz10OjQ9PT1yP1wiLS1cIj09PWUmJlwiPlwiPT09dD8ocj0xLGU9XCJcIik6ZT10K2VbMF06dT90PT09dT91PVwiXCI6ZSs9dDonXCInPT09dHx8XCInXCI9PT10P3U9dDpcIj5cIj09PXQ/KHAoKSxyPTEpOnImJihcIj1cIj09PXQ/KHI9NSxzPWUsZT1cIlwiKTpcIi9cIj09PXQmJihyPDV8fFwiPlwiPT09blthXVtsKzFdKT8ocCgpLDM9PT1yJiYoaD1oWzBdKSxyPWgsKGg9aFswXSkucHVzaCgyLDAscikscj0wKTpcIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcblwiPT09dHx8XCJcXHJcIj09PXQ/KHAoKSxyPTIpOmUrPXQpLDM9PT1yJiZcIiEtLVwiPT09ZSYmKHI9NCxoPWhbMF0pfXJldHVybiBwKCksaH0ocykpLHIpLGFyZ3VtZW50cyxbXSkpLmxlbmd0aD4xP3I6clswXX1cbiIsImZ1bmN0aW9uIHQodCl7Zm9yKHZhciBuPWFyZ3VtZW50cy5sZW5ndGgscj1BcnJheShuPjE/bi0xOjApLGU9MTtlPG47ZSsrKXJbZS0xXT1hcmd1bWVudHNbZV07aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIGk9WVt0XSxvPWk/XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KG51bGwscik6aTpcInVua25vd24gZXJyb3IgbnI6IFwiK3Q7dGhyb3cgRXJyb3IoXCJbSW1tZXJdIFwiK28pfXRocm93IEVycm9yKFwiW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogXCIrdCsoci5sZW5ndGg/XCIgXCIrci5tYXAoKGZ1bmN0aW9uKHQpe3JldHVyblwiJ1wiK3QrXCInXCJ9KSkuam9pbihcIixcIik6XCJcIikrXCIuIEZpbmQgdGhlIGZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZcIil9ZnVuY3Rpb24gbih0KXtyZXR1cm4hIXQmJiEhdFtRXX1mdW5jdGlvbiByKHQpe3JldHVybiEhdCYmKGZ1bmN0aW9uKHQpe2lmKCF0fHxcIm9iamVjdFwiIT10eXBlb2YgdClyZXR1cm4hMTt2YXIgbj1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7cmV0dXJuIW58fG49PT1PYmplY3QucHJvdG90eXBlfSh0KXx8QXJyYXkuaXNBcnJheSh0KXx8ISF0W0xdfHwhIXQuY29uc3RydWN0b3JbTF18fHModCl8fHYodCkpfWZ1bmN0aW9uIGUocil7cmV0dXJuIG4ocil8fHQoMjMscikscltRXS50fWZ1bmN0aW9uIGkodCxuLHIpe3ZvaWQgMD09PXImJihyPSExKSwwPT09byh0KT8ocj9PYmplY3Qua2V5czpaKSh0KS5mb3JFYWNoKChmdW5jdGlvbihlKXtyJiZcInN5bWJvbFwiPT10eXBlb2YgZXx8bihlLHRbZV0sdCl9KSk6dC5mb3JFYWNoKChmdW5jdGlvbihyLGUpe3JldHVybiBuKGUscix0KX0pKX1mdW5jdGlvbiBvKHQpe3ZhciBuPXRbUV07cmV0dXJuIG4/bi5pPjM/bi5pLTQ6bi5pOkFycmF5LmlzQXJyYXkodCk/MTpzKHQpPzI6dih0KT8zOjB9ZnVuY3Rpb24gdSh0LG4pe3JldHVybiAyPT09byh0KT90LmhhcyhuKTpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKX1mdW5jdGlvbiBhKHQsbil7cmV0dXJuIDI9PT1vKHQpP3QuZ2V0KG4pOnRbbl19ZnVuY3Rpb24gZih0LG4scil7dmFyIGU9byh0KTsyPT09ZT90LnNldChuLHIpOjM9PT1lPyh0LmRlbGV0ZShuKSx0LmFkZChyKSk6dFtuXT1yfWZ1bmN0aW9uIGModCxuKXtyZXR1cm4gdD09PW4/MCE9PXR8fDEvdD09MS9uOnQhPXQmJm4hPW59ZnVuY3Rpb24gcyh0KXtyZXR1cm4gWCYmdCBpbnN0YW5jZW9mIE1hcH1mdW5jdGlvbiB2KHQpe3JldHVybiBxJiZ0IGluc3RhbmNlb2YgU2V0fWZ1bmN0aW9uIHAodCl7cmV0dXJuIHQub3x8dC50fWZ1bmN0aW9uIGwodCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCk7dmFyIG49dHQodCk7ZGVsZXRlIG5bUV07Zm9yKHZhciByPVoobiksZT0wO2U8ci5sZW5ndGg7ZSsrKXt2YXIgaT1yW2VdLG89bltpXTshMT09PW8ud3JpdGFibGUmJihvLndyaXRhYmxlPSEwLG8uY29uZmlndXJhYmxlPSEwKSwoby5nZXR8fG8uc2V0KSYmKG5baV09e2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCxlbnVtZXJhYmxlOm8uZW51bWVyYWJsZSx2YWx1ZTp0W2ldfSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpLG4pfWZ1bmN0aW9uIGQodCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITEpLHkodCl8fG4odCl8fCFyKHQpP3Q6KG8odCk+MSYmKHQuc2V0PXQuYWRkPXQuY2xlYXI9dC5kZWxldGU9aCksT2JqZWN0LmZyZWV6ZSh0KSxlJiZpKHQsKGZ1bmN0aW9uKHQsbil7cmV0dXJuIGQobiwhMCl9KSwhMCksdCl9ZnVuY3Rpb24gaCgpe3QoMil9ZnVuY3Rpb24geSh0KXtyZXR1cm4gbnVsbD09dHx8XCJvYmplY3RcIiE9dHlwZW9mIHR8fE9iamVjdC5pc0Zyb3plbih0KX1mdW5jdGlvbiBiKG4pe3ZhciByPW50W25dO3JldHVybiByfHx0KDE4LG4pLHJ9ZnVuY3Rpb24gbSh0LG4pe250W3RdfHwobnRbdF09bil9ZnVuY3Rpb24gXygpe3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fFV8fHQoMCksVX1mdW5jdGlvbiBqKHQsbil7biYmKGIoXCJQYXRjaGVzXCIpLHQudT1bXSx0LnM9W10sdC52PW4pfWZ1bmN0aW9uIGcodCl7dyh0KSx0LnAuZm9yRWFjaChTKSx0LnA9bnVsbH1mdW5jdGlvbiB3KHQpe3Q9PT1VJiYoVT10LmwpfWZ1bmN0aW9uIE8odCl7cmV0dXJuIFU9e3A6W10sbDpVLGg6dCxtOiEwLF86MH19ZnVuY3Rpb24gUyh0KXt2YXIgbj10W1FdOzA9PT1uLml8fDE9PT1uLmk/bi5qKCk6bi5nPSEwfWZ1bmN0aW9uIFAobixlKXtlLl89ZS5wLmxlbmd0aDt2YXIgaT1lLnBbMF0sbz12b2lkIDAhPT1uJiZuIT09aTtyZXR1cm4gZS5oLk98fGIoXCJFUzVcIikuUyhlLG4sbyksbz8oaVtRXS5QJiYoZyhlKSx0KDQpKSxyKG4pJiYobj1NKGUsbiksZS5sfHx4KGUsbikpLGUudSYmYihcIlBhdGNoZXNcIikuTShpW1FdLG4sZS51LGUucykpOm49TShlLGksW10pLGcoZSksZS51JiZlLnYoZS51LGUucyksbiE9PUg/bjp2b2lkIDB9ZnVuY3Rpb24gTSh0LG4scil7aWYoeShuKSlyZXR1cm4gbjt2YXIgZT1uW1FdO2lmKCFlKXJldHVybiBpKG4sKGZ1bmN0aW9uKGksbyl7cmV0dXJuIEEodCxlLG4saSxvLHIpfSksITApLG47aWYoZS5BIT09dClyZXR1cm4gbjtpZighZS5QKXJldHVybiB4KHQsZS50LCEwKSxlLnQ7aWYoIWUuSSl7ZS5JPSEwLGUuQS5fLS07dmFyIG89ND09PWUuaXx8NT09PWUuaT9lLm89bChlLmspOmUubztpKDM9PT1lLmk/bmV3IFNldChvKTpvLChmdW5jdGlvbihuLGkpe3JldHVybiBBKHQsZSxvLG4saSxyKX0pKSx4KHQsbywhMSksciYmdC51JiZiKFwiUGF0Y2hlc1wiKS5SKGUscix0LnUsdC5zKX1yZXR1cm4gZS5vfWZ1bmN0aW9uIEEoZSxpLG8sYSxjLHMpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmM9PT1vJiZ0KDUpLG4oYykpe3ZhciB2PU0oZSxjLHMmJmkmJjMhPT1pLmkmJiF1KGkuRCxhKT9zLmNvbmNhdChhKTp2b2lkIDApO2lmKGYobyxhLHYpLCFuKHYpKXJldHVybjtlLm09ITF9aWYocihjKSYmIXkoYykpe2lmKCFlLmguTiYmZS5fPDEpcmV0dXJuO00oZSxjKSxpJiZpLkEubHx8eChlLGMpfX1mdW5jdGlvbiB4KHQsbixyKXt2b2lkIDA9PT1yJiYocj0hMSksdC5oLk4mJnQubSYmZChuLHIpfWZ1bmN0aW9uIHoodCxuKXt2YXIgcj10W1FdO3JldHVybihyP3Aocik6dClbbl19ZnVuY3Rpb24gSSh0LG4pe2lmKG4gaW4gdClmb3IodmFyIHI9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpO3I7KXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsbik7aWYoZSlyZXR1cm4gZTtyPU9iamVjdC5nZXRQcm90b3R5cGVPZihyKX19ZnVuY3Rpb24gayh0KXt0LlB8fCh0LlA9ITAsdC5sJiZrKHQubCkpfWZ1bmN0aW9uIEUodCl7dC5vfHwodC5vPWwodC50KSl9ZnVuY3Rpb24gUih0LG4scil7dmFyIGU9cyhuKT9iKFwiTWFwU2V0XCIpLlQobixyKTp2KG4pP2IoXCJNYXBTZXRcIikuRihuLHIpOnQuTz9mdW5jdGlvbih0LG4pe3ZhciByPUFycmF5LmlzQXJyYXkodCksZT17aTpyPzE6MCxBOm4/bi5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOm4sdDp0LGs6bnVsbCxvOm51bGwsajpudWxsLEM6ITF9LGk9ZSxvPXJ0O3ImJihpPVtlXSxvPWV0KTt2YXIgdT1Qcm94eS5yZXZvY2FibGUoaSxvKSxhPXUucmV2b2tlLGY9dS5wcm94eTtyZXR1cm4gZS5rPWYsZS5qPWEsZn0obixyKTpiKFwiRVM1XCIpLkoobixyKTtyZXR1cm4ocj9yLkE6XygpKS5wLnB1c2goZSksZX1mdW5jdGlvbiBEKGUpe3JldHVybiBuKGUpfHx0KDIyLGUpLGZ1bmN0aW9uIHQobil7aWYoIXIobikpcmV0dXJuIG47dmFyIGUsdT1uW1FdLGM9byhuKTtpZih1KXtpZighdS5QJiYodS5pPDR8fCFiKFwiRVM1XCIpLksodSkpKXJldHVybiB1LnQ7dS5JPSEwLGU9TihuLGMpLHUuST0hMX1lbHNlIGU9TihuLGMpO3JldHVybiBpKGUsKGZ1bmN0aW9uKG4scil7dSYmYSh1LnQsbik9PT1yfHxmKGUsbix0KHIpKX0pKSwzPT09Yz9uZXcgU2V0KGUpOmV9KGUpfWZ1bmN0aW9uIE4odCxuKXtzd2l0Y2gobil7Y2FzZSAyOnJldHVybiBuZXcgTWFwKHQpO2Nhc2UgMzpyZXR1cm4gQXJyYXkuZnJvbSh0KX1yZXR1cm4gbCh0KX1mdW5jdGlvbiBUKCl7ZnVuY3Rpb24gcih0LG4pe3ZhciByPXNbdF07cmV0dXJuIHI/ci5lbnVtZXJhYmxlPW46c1t0XT1yPXtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTpuLGdldDpmdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZihuKSxydC5nZXQobix0KX0sc2V0OmZ1bmN0aW9uKG4pe3ZhciByPXRoaXNbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZihyKSxydC5zZXQocix0LG4pfX0scn1mdW5jdGlvbiBlKHQpe2Zvcih2YXIgbj10Lmxlbmd0aC0xO24+PTA7bi0tKXt2YXIgcj10W25dW1FdO2lmKCFyLlApc3dpdGNoKHIuaSl7Y2FzZSA1OmEocikmJmsocik7YnJlYWs7Y2FzZSA0Om8ocikmJmsocil9fX1mdW5jdGlvbiBvKHQpe2Zvcih2YXIgbj10LnQscj10LmssZT1aKHIpLGk9ZS5sZW5ndGgtMTtpPj0wO2ktLSl7dmFyIG89ZVtpXTtpZihvIT09USl7dmFyIGE9bltvXTtpZih2b2lkIDA9PT1hJiYhdShuLG8pKXJldHVybiEwO3ZhciBmPXJbb10scz1mJiZmW1FdO2lmKHM/cy50IT09YTohYyhmLGEpKXJldHVybiEwfX12YXIgdj0hIW5bUV07cmV0dXJuIGUubGVuZ3RoIT09WihuKS5sZW5ndGgrKHY/MDoxKX1mdW5jdGlvbiBhKHQpe3ZhciBuPXQuaztpZihuLmxlbmd0aCE9PXQudC5sZW5ndGgpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLG4ubGVuZ3RoLTEpO3JldHVybiEoIXJ8fHIuZ2V0KX1mdW5jdGlvbiBmKG4pe24uZyYmdCgzLEpTT04uc3RyaW5naWZ5KHAobikpKX12YXIgcz17fTttKFwiRVM1XCIse0o6ZnVuY3Rpb24odCxuKXt2YXIgZT1BcnJheS5pc0FycmF5KHQpLGk9ZnVuY3Rpb24odCxuKXtpZih0KXtmb3IodmFyIGU9QXJyYXkobi5sZW5ndGgpLGk9MDtpPG4ubGVuZ3RoO2krKylPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlwiK2kscihpLCEwKSk7cmV0dXJuIGV9dmFyIG89dHQobik7ZGVsZXRlIG9bUV07Zm9yKHZhciB1PVoobyksYT0wO2E8dS5sZW5ndGg7YSsrKXt2YXIgZj11W2FdO29bZl09cihmLHR8fCEhb1tmXS5lbnVtZXJhYmxlKX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yobiksbyl9KGUsdCksbz17aTplPzU6NCxBOm4/bi5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOm4sdDp0LGs6aSxvOm51bGwsZzohMSxDOiExfTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGksUSx7dmFsdWU6byx3cml0YWJsZTohMH0pLGl9LFM6ZnVuY3Rpb24odCxyLG8pe28/bihyKSYmcltRXS5BPT09dCYmZSh0LnApOih0LnUmJmZ1bmN0aW9uIHQobil7aWYobiYmXCJvYmplY3RcIj09dHlwZW9mIG4pe3ZhciByPW5bUV07aWYocil7dmFyIGU9ci50LG89ci5rLGY9ci5ELGM9ci5pO2lmKDQ9PT1jKWkobywoZnVuY3Rpb24obil7biE9PVEmJih2b2lkIDAhPT1lW25dfHx1KGUsbik/ZltuXXx8dChvW25dKTooZltuXT0hMCxrKHIpKSl9KSksaShlLChmdW5jdGlvbih0KXt2b2lkIDAhPT1vW3RdfHx1KG8sdCl8fChmW3RdPSExLGsocikpfSkpO2Vsc2UgaWYoNT09PWMpe2lmKGEocikmJihrKHIpLGYubGVuZ3RoPSEwKSxvLmxlbmd0aDxlLmxlbmd0aClmb3IodmFyIHM9by5sZW5ndGg7czxlLmxlbmd0aDtzKyspZltzXT0hMTtlbHNlIGZvcih2YXIgdj1lLmxlbmd0aDt2PG8ubGVuZ3RoO3YrKylmW3ZdPSEwO2Zvcih2YXIgcD1NYXRoLm1pbihvLmxlbmd0aCxlLmxlbmd0aCksbD0wO2w8cDtsKyspdm9pZCAwPT09ZltsXSYmdChvW2xdKX19fX0odC5wWzBdKSxlKHQucCkpfSxLOmZ1bmN0aW9uKHQpe3JldHVybiA0PT09dC5pP28odCk6YSh0KX19KX1mdW5jdGlvbiBGKCl7ZnVuY3Rpb24gZSh0KXtpZighcih0KSlyZXR1cm4gdDtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0Lm1hcChlKTtpZihzKHQpKXJldHVybiBuZXcgTWFwKEFycmF5LmZyb20odC5lbnRyaWVzKCkpLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuW3RbMF0sZSh0WzFdKV19KSkpO2lmKHYodCkpcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbSh0KS5tYXAoZSkpO3ZhciBuPU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKTtmb3IodmFyIGkgaW4gdCluW2ldPWUodFtpXSk7cmV0dXJuIG59ZnVuY3Rpb24gZih0KXtyZXR1cm4gbih0KT9lKHQpOnR9dmFyIGM9XCJhZGRcIjttKFwiUGF0Y2hlc1wiLHskOmZ1bmN0aW9uKG4scil7cmV0dXJuIHIuZm9yRWFjaCgoZnVuY3Rpb24ocil7Zm9yKHZhciBpPXIucGF0aCx1PXIub3AsZj1uLHM9MDtzPGkubGVuZ3RoLTE7cysrKXt2YXIgdj1vKGYpLHA9aVtzXTswIT09diYmMSE9PXZ8fFwiX19wcm90b19fXCIhPT1wJiZcImNvbnN0cnVjdG9yXCIhPT1wfHx0KDI0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiZcInByb3RvdHlwZVwiPT09cCYmdCgyNCksXCJvYmplY3RcIiE9dHlwZW9mKGY9YShmLHApKSYmdCgxNSxpLmpvaW4oXCIvXCIpKX12YXIgbD1vKGYpLGQ9ZShyLnZhbHVlKSxoPWlbaS5sZW5ndGgtMV07c3dpdGNoKHUpe2Nhc2VcInJlcGxhY2VcIjpzd2l0Y2gobCl7Y2FzZSAyOnJldHVybiBmLnNldChoLGQpO2Nhc2UgMzp0KDE2KTtkZWZhdWx0OnJldHVybiBmW2hdPWR9Y2FzZSBjOnN3aXRjaChsKXtjYXNlIDE6cmV0dXJuIGYuc3BsaWNlKGgsMCxkKTtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOnJldHVybiBmLmFkZChkKTtkZWZhdWx0OnJldHVybiBmW2hdPWR9Y2FzZVwicmVtb3ZlXCI6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm4gZi5zcGxpY2UoaCwxKTtjYXNlIDI6cmV0dXJuIGYuZGVsZXRlKGgpO2Nhc2UgMzpyZXR1cm4gZi5kZWxldGUoci52YWx1ZSk7ZGVmYXVsdDpyZXR1cm4gZGVsZXRlIGZbaF19ZGVmYXVsdDp0KDE3LHUpfX0pKSxufSxSOmZ1bmN0aW9uKHQsbixyLGUpe3N3aXRjaCh0Lmkpe2Nhc2UgMDpjYXNlIDQ6Y2FzZSAyOnJldHVybiBmdW5jdGlvbih0LG4scixlKXt2YXIgbz10LnQscz10Lm87aSh0LkQsKGZ1bmN0aW9uKHQsaSl7dmFyIHY9YShvLHQpLHA9YShzLHQpLGw9aT91KG8sdCk/XCJyZXBsYWNlXCI6YzpcInJlbW92ZVwiO2lmKHYhPT1wfHxcInJlcGxhY2VcIiE9PWwpe3ZhciBkPW4uY29uY2F0KHQpO3IucHVzaChcInJlbW92ZVwiPT09bD97b3A6bCxwYXRoOmR9OntvcDpsLHBhdGg6ZCx2YWx1ZTpwfSksZS5wdXNoKGw9PT1jP3tvcDpcInJlbW92ZVwiLHBhdGg6ZH06XCJyZW1vdmVcIj09PWw/e29wOmMscGF0aDpkLHZhbHVlOmYodil9OntvcDpcInJlcGxhY2VcIixwYXRoOmQsdmFsdWU6Zih2KX0pfX0pKX0odCxuLHIsZSk7Y2FzZSA1OmNhc2UgMTpyZXR1cm4gZnVuY3Rpb24odCxuLHIsZSl7dmFyIGk9dC50LG89dC5ELHU9dC5vO2lmKHUubGVuZ3RoPGkubGVuZ3RoKXt2YXIgYT1bdSxpXTtpPWFbMF0sdT1hWzFdO3ZhciBzPVtlLHJdO3I9c1swXSxlPXNbMV19Zm9yKHZhciB2PTA7djxpLmxlbmd0aDt2KyspaWYob1t2XSYmdVt2XSE9PWlbdl0pe3ZhciBwPW4uY29uY2F0KFt2XSk7ci5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6Zih1W3ZdKX0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYoaVt2XSl9KX1mb3IodmFyIGw9aS5sZW5ndGg7bDx1Lmxlbmd0aDtsKyspe3ZhciBkPW4uY29uY2F0KFtsXSk7ci5wdXNoKHtvcDpjLHBhdGg6ZCx2YWx1ZTpmKHVbbF0pfSl9aS5sZW5ndGg8dS5sZW5ndGgmJmUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpuLmNvbmNhdChbXCJsZW5ndGhcIl0pLHZhbHVlOmkubGVuZ3RofSl9KHQsbixyLGUpO2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24odCxuLHIsZSl7dmFyIGk9dC50LG89dC5vLHU9MDtpLmZvckVhY2goKGZ1bmN0aW9uKHQpe2lmKCFvLmhhcyh0KSl7dmFyIGk9bi5jb25jYXQoW3VdKTtyLnB1c2goe29wOlwicmVtb3ZlXCIscGF0aDppLHZhbHVlOnR9KSxlLnVuc2hpZnQoe29wOmMscGF0aDppLHZhbHVlOnR9KX11Kyt9KSksdT0wLG8uZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYoIWkuaGFzKHQpKXt2YXIgbz1uLmNvbmNhdChbdV0pO3IucHVzaCh7b3A6YyxwYXRoOm8sdmFsdWU6dH0pLGUudW5zaGlmdCh7b3A6XCJyZW1vdmVcIixwYXRoOm8sdmFsdWU6dH0pfXUrK30pKX0odCxuLHIsZSl9fSxNOmZ1bmN0aW9uKHQsbixyLGUpe3IucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpufSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOnQudH0pfX0pfWZ1bmN0aW9uIEMoKXtmdW5jdGlvbiBuKHQsbil7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9dH1hKHQsbiksdC5wcm90b3R5cGU9KHIucHJvdG90eXBlPW4ucHJvdG90eXBlLG5ldyByKX1mdW5jdGlvbiBlKHQpe3Qub3x8KHQuRD1uZXcgTWFwLHQubz1uZXcgTWFwKHQudCkpfWZ1bmN0aW9uIG8odCl7dC5vfHwodC5vPW5ldyBTZXQsdC50LmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKHIobikpe3ZhciBlPVIodC5BLmgsbix0KTt0LnAuc2V0KG4sZSksdC5vLmFkZChlKX1lbHNlIHQuby5hZGQobil9KSkpfWZ1bmN0aW9uIHUobil7bi5nJiZ0KDMsSlNPTi5zdHJpbmdpZnkocChuKSkpfXZhciBhPWZ1bmN0aW9uKHQsbil7cmV0dXJuKGE9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsbil7dC5fX3Byb3RvX189bn18fGZ1bmN0aW9uKHQsbil7Zm9yKHZhciByIGluIG4pbi5oYXNPd25Qcm9wZXJ0eShyKSYmKHRbcl09bltyXSl9KSh0LG4pfSxmPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3JldHVybiB0aGlzW1FdPXtpOjIsbDpuLEE6bj9uLkE6XygpLFA6ITEsSTohMSxvOnZvaWQgMCxEOnZvaWQgMCx0OnQsazp0aGlzLEM6ITEsZzohMX0sdGhpc31uKHQsTWFwKTt2YXIgbz10LnByb3RvdHlwZTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLnNpemV9fSksby5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHAodGhpc1tRXSkuaGFzKHQpfSxvLnNldD1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXNbUV07cmV0dXJuIHUocikscChyKS5oYXModCkmJnAocikuZ2V0KHQpPT09bnx8KGUociksayhyKSxyLkQuc2V0KHQsITApLHIuby5zZXQodCxuKSxyLkQuc2V0KHQsITApKSx0aGlzfSxvLmRlbGV0ZT1mdW5jdGlvbih0KXtpZighdGhpcy5oYXModCkpcmV0dXJuITE7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxlKG4pLGsobiksbi5ELnNldCh0LCExKSxuLm8uZGVsZXRlKHQpLCEwfSxvLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpc1tRXTt1KHQpLHAodCkuc2l6ZSYmKGUodCksayh0KSx0LkQ9bmV3IE1hcCxpKHQudCwoZnVuY3Rpb24obil7dC5ELnNldChuLCExKX0pKSx0Lm8uY2xlYXIoKSl9LG8uZm9yRWFjaD1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXM7cCh0aGlzW1FdKS5mb3JFYWNoKChmdW5jdGlvbihlLGkpe3QuY2FsbChuLHIuZ2V0KGkpLGkscil9KSl9LG8uZ2V0PWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXNbUV07dShuKTt2YXIgaT1wKG4pLmdldCh0KTtpZihuLkl8fCFyKGkpKXJldHVybiBpO2lmKGkhPT1uLnQuZ2V0KHQpKXJldHVybiBpO3ZhciBvPVIobi5BLmgsaSxuKTtyZXR1cm4gZShuKSxuLm8uc2V0KHQsbyksb30sby5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkua2V5cygpfSxvLnZhbHVlcz1mdW5jdGlvbigpe3ZhciB0LG49dGhpcyxyPXRoaXMua2V5cygpO3JldHVybih0PXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiBuLnZhbHVlcygpfSx0Lm5leHQ9ZnVuY3Rpb24oKXt2YXIgdD1yLm5leHQoKTtyZXR1cm4gdC5kb25lP3Q6e2RvbmU6ITEsdmFsdWU6bi5nZXQodC52YWx1ZSl9fSx0fSxvLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgdCxuPXRoaXMscj10aGlzLmtleXMoKTtyZXR1cm4odD17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gbi5lbnRyaWVzKCl9LHQubmV4dD1mdW5jdGlvbigpe3ZhciB0PXIubmV4dCgpO2lmKHQuZG9uZSlyZXR1cm4gdDt2YXIgZT1uLmdldCh0LnZhbHVlKTtyZXR1cm57ZG9uZTohMSx2YWx1ZTpbdC52YWx1ZSxlXX19LHR9LG9bVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LHR9KCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxuKXtyZXR1cm4gdGhpc1tRXT17aTozLGw6bixBOm4/bi5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsdDp0LGs6dGhpcyxwOm5ldyBNYXAsZzohMSxDOiExfSx0aGlzfW4odCxTZXQpO3ZhciByPXQucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocixcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSxyLmhhcz1mdW5jdGlvbih0KXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG4ubz8hIW4uby5oYXModCl8fCEoIW4ucC5oYXModCl8fCFuLm8uaGFzKG4ucC5nZXQodCkpKTpuLnQuaGFzKHQpfSxyLmFkZD1mdW5jdGlvbih0KXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLHRoaXMuaGFzKHQpfHwobyhuKSxrKG4pLG4uby5hZGQodCkpLHRoaXN9LHIuZGVsZXRlPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLmhhcyh0KSlyZXR1cm4hMTt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG8obiksayhuKSxuLm8uZGVsZXRlKHQpfHwhIW4ucC5oYXModCkmJm4uby5kZWxldGUobi5wLmdldCh0KSl9LHIuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzW1FdO3UodCkscCh0KS5zaXplJiYobyh0KSxrKHQpLHQuby5jbGVhcigpKX0sci52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLG8odCksdC5vLnZhbHVlcygpfSxyLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLG8odCksdC5vLmVudHJpZXMoKX0sci5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHJbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0sci5mb3JFYWNoPWZ1bmN0aW9uKHQsbil7Zm9yKHZhciByPXRoaXMudmFsdWVzKCksZT1yLm5leHQoKTshZS5kb25lOyl0LmNhbGwobixlLnZhbHVlLGUudmFsdWUsdGhpcyksZT1yLm5leHQoKX0sdH0oKTttKFwiTWFwU2V0XCIse1Q6ZnVuY3Rpb24odCxuKXtyZXR1cm4gbmV3IGYodCxuKX0sRjpmdW5jdGlvbih0LG4pe3JldHVybiBuZXcgYyh0LG4pfX0pfWZ1bmN0aW9uIEooKXtUKCksQygpLEYoKX1mdW5jdGlvbiBLKHQpe3JldHVybiB0fWZ1bmN0aW9uICQodCl7cmV0dXJuIHR9dmFyIEcsVSxXPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woXCJ4XCIpLFg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCxxPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQsQj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJveHkmJnZvaWQgMCE9PVByb3h5LnJldm9jYWJsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QsSD1XP1N5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpOigoRz17fSlbXCJpbW1lci1ub3RoaW5nXCJdPSEwLEcpLEw9Vz9TeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpOlwiX18kaW1tZXJfZHJhZnRhYmxlXCIsUT1XP1N5bWJvbC5mb3IoXCJpbW1lci1zdGF0ZVwiKTpcIl9fJGltbWVyX3N0YXRlXCIsVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLFk9ezA6XCJJbGxlZ2FsIHN0YXRlXCIsMTpcIkltbWVyIGRyYWZ0cyBjYW5ub3QgaGF2ZSBjb21wdXRlZCBwcm9wZXJ0aWVzXCIsMjpcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsMzpmdW5jdGlvbih0KXtyZXR1cm5cIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIrdH0sNDpcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsNTpcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLDY6XCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIiw3OlwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsODpcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIiw5OlwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLDEwOlwiVGhlIGdpdmVuIGRyYWZ0IGlzIGFscmVhZHkgZmluYWxpemVkXCIsMTE6XCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEyOlwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMzpcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLDE0OlwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLDE1OmZ1bmN0aW9uKHQpe3JldHVyblwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIrdH0sMTY6J1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLDE3OmZ1bmN0aW9uKHQpe3JldHVyblwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIit0fSwxODpmdW5jdGlvbih0KXtyZXR1cm5cIlRoZSBwbHVnaW4gZm9yICdcIit0K1wiJyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgYGVuYWJsZVwiK3QrXCIoKWAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5cIn0sMjA6XCJDYW5ub3QgdXNlIHByb3hpZXMgaWYgUHJveHksIFByb3h5LnJldm9jYWJsZSBvciBSZWZsZWN0IGFyZSBub3QgYXZhaWxhYmxlXCIsMjE6ZnVuY3Rpb24odCl7cmV0dXJuXCJwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICdcIit0K1wiJ1wifSwyMjpmdW5jdGlvbih0KXtyZXR1cm5cIidjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrdH0sMjM6ZnVuY3Rpb24odCl7cmV0dXJuXCInb3JpZ2luYWwnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIit0fSwyNDpcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIn0sWj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5vd25LZXlzP1JlZmxlY3Qub3duS2V5czp2b2lkIDAhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KSl9Ok9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLHR0PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzfHxmdW5jdGlvbih0KXt2YXIgbj17fTtyZXR1cm4gWih0KS5mb3JFYWNoKChmdW5jdGlvbihyKXtuW3JdPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxyKX0pKSxufSxudD17fSxydD17Z2V0OmZ1bmN0aW9uKHQsbil7aWYobj09PVEpcmV0dXJuIHQ7dmFyIGU9cCh0KTtpZighdShlLG4pKXJldHVybiBmdW5jdGlvbih0LG4scil7dmFyIGUsaT1JKG4scik7cmV0dXJuIGk/XCJ2YWx1ZVwiaW4gaT9pLnZhbHVlOm51bGw9PT0oZT1pLmdldCl8fHZvaWQgMD09PWU/dm9pZCAwOmUuY2FsbCh0LmspOnZvaWQgMH0odCxlLG4pO3ZhciBpPWVbbl07cmV0dXJuIHQuSXx8IXIoaSk/aTppPT09eih0LnQsbik/KEUodCksdC5vW25dPVIodC5BLmgsaSx0KSk6aX0saGFzOmZ1bmN0aW9uKHQsbil7cmV0dXJuIG4gaW4gcCh0KX0sb3duS2V5czpmdW5jdGlvbih0KXtyZXR1cm4gUmVmbGVjdC5vd25LZXlzKHAodCkpfSxzZXQ6ZnVuY3Rpb24odCxuLHIpe3ZhciBlPUkocCh0KSxuKTtpZihudWxsPT1lP3ZvaWQgMDplLnNldClyZXR1cm4gZS5zZXQuY2FsbCh0LmssciksITA7aWYoIXQuUCl7dmFyIGk9eihwKHQpLG4pLG89bnVsbD09aT92b2lkIDA6aVtRXTtpZihvJiZvLnQ9PT1yKXJldHVybiB0Lm9bbl09cix0LkRbbl09ITEsITA7aWYoYyhyLGkpJiYodm9pZCAwIT09cnx8dSh0LnQsbikpKXJldHVybiEwO0UodCksayh0KX1yZXR1cm4gdC5vW25dPXIsdC5EW25dPSEwLCEwfSxkZWxldGVQcm9wZXJ0eTpmdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDAhPT16KHQudCxuKXx8biBpbiB0LnQ/KHQuRFtuXT0hMSxFKHQpLGsodCkpOmRlbGV0ZSB0LkRbbl0sdC5vJiZkZWxldGUgdC5vW25dLCEwfSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ZnVuY3Rpb24odCxuKXt2YXIgcj1wKHQpLGU9UmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocixuKTtyZXR1cm4gZT97d3JpdGFibGU6ITAsY29uZmlndXJhYmxlOjEhPT10Lml8fFwibGVuZ3RoXCIhPT1uLGVudW1lcmFibGU6ZS5lbnVtZXJhYmxlLHZhbHVlOnJbbl19OmV9LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKCl7dCgxMSl9LGdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodC50KX0sc2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24oKXt0KDEyKX19LGV0PXt9O2kocnQsKGZ1bmN0aW9uKHQsbil7ZXRbdF09ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzWzBdPWFyZ3VtZW50c1swXVswXSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSksZXQuZGVsZXRlUHJvcGVydHk9ZnVuY3Rpb24obixyKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpc05hTihwYXJzZUludChyKSkmJnQoMTMpLHJ0LmRlbGV0ZVByb3BlcnR5LmNhbGwodGhpcyxuWzBdLHIpfSxldC5zZXQ9ZnVuY3Rpb24obixyLGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwibGVuZ3RoXCIhPT1yJiZpc05hTihwYXJzZUludChyKSkmJnQoMTQpLHJ0LnNldC5jYWxsKHRoaXMsblswXSxyLGUsblswXSl9O3ZhciBpdD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dGhpcy5PPUIsdGhpcy5OPSEwLFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09dD92b2lkIDA6dC51c2VQcm94aWVzKSYmdGhpcy5zZXRVc2VQcm94aWVzKHQudXNlUHJveGllcyksXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT10P3ZvaWQgMDp0LmF1dG9GcmVlemUpJiZ0aGlzLnNldEF1dG9GcmVlemUodC5hdXRvRnJlZXplKSx0aGlzLnByb2R1Y2U9dGhpcy5wcm9kdWNlLmJpbmQodGhpcyksdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXM9dGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZCh0aGlzKX12YXIgaT1lLnByb3RvdHlwZTtyZXR1cm4gaS5wcm9kdWNlPWZ1bmN0aW9uKG4sZSxpKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXt2YXIgbz1lO2U9bjt2YXIgdT10aGlzO3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj10aGlzO3ZvaWQgMD09PXQmJih0PW8pO2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGk9QXJyYXkocj4xP3ItMTowKSxhPTE7YTxyO2ErKylpW2EtMV09YXJndW1lbnRzW2FdO3JldHVybiB1LnByb2R1Y2UodCwoZnVuY3Rpb24odCl7dmFyIHI7cmV0dXJuKHI9ZSkuY2FsbC5hcHBseShyLFtuLHRdLmNvbmNhdChpKSl9KSl9fXZhciBhO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJnQoNiksdm9pZCAwIT09aSYmXCJmdW5jdGlvblwiIT10eXBlb2YgaSYmdCg3KSxyKG4pKXt2YXIgZj1PKHRoaXMpLGM9Uih0aGlzLG4sdm9pZCAwKSxzPSEwO3RyeXthPWUoYykscz0hMX1maW5hbGx5e3M/ZyhmKTp3KGYpfXJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZhIGluc3RhbmNlb2YgUHJvbWlzZT9hLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiBqKGYsaSksUCh0LGYpfSksKGZ1bmN0aW9uKHQpe3Rocm93IGcoZiksdH0pKTooaihmLGkpLFAoYSxmKSl9aWYoIW58fFwib2JqZWN0XCIhPXR5cGVvZiBuKXtpZigoYT1lKG4pKT09PUgpcmV0dXJuO3JldHVybiB2b2lkIDA9PT1hJiYoYT1uKSx0aGlzLk4mJmQoYSwhMCksYX10KDIxLG4pfSxpLnByb2R1Y2VXaXRoUGF0Y2hlcz1mdW5jdGlvbih0LG4pe3ZhciByLGUsaT10aGlzO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/ZnVuY3Rpb24obil7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsZT1BcnJheShyPjE/ci0xOjApLG89MTtvPHI7bysrKWVbby0xXT1hcmd1bWVudHNbb107cmV0dXJuIGkucHJvZHVjZVdpdGhQYXRjaGVzKG4sKGZ1bmN0aW9uKG4pe3JldHVybiB0LmFwcGx5KHZvaWQgMCxbbl0uY29uY2F0KGUpKX0pKX06W3RoaXMucHJvZHVjZSh0LG4sKGZ1bmN0aW9uKHQsbil7cj10LGU9bn0pKSxyLGVdfSxpLmNyZWF0ZURyYWZ0PWZ1bmN0aW9uKGUpe3IoZSl8fHQoOCksbihlKSYmKGU9RChlKSk7dmFyIGk9Tyh0aGlzKSxvPVIodGhpcyxlLHZvaWQgMCk7cmV0dXJuIG9bUV0uQz0hMCx3KGkpLG99LGkuZmluaXNoRHJhZnQ9ZnVuY3Rpb24obixyKXt2YXIgZT1uJiZuW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihlJiZlLkN8fHQoOSksZS5JJiZ0KDEwKSk7dmFyIGk9ZS5BO3JldHVybiBqKGksciksUCh2b2lkIDAsaSl9LGkuc2V0QXV0b0ZyZWV6ZT1mdW5jdGlvbih0KXt0aGlzLk49dH0saS5zZXRVc2VQcm94aWVzPWZ1bmN0aW9uKG4pe24mJiFCJiZ0KDIwKSx0aGlzLk89bn0saS5hcHBseVBhdGNoZXM9ZnVuY3Rpb24odCxyKXt2YXIgZTtmb3IoZT1yLmxlbmd0aC0xO2U+PTA7ZS0tKXt2YXIgaT1yW2VdO2lmKDA9PT1pLnBhdGgubGVuZ3RoJiZcInJlcGxhY2VcIj09PWkub3Ape3Q9aS52YWx1ZTticmVha319dmFyIG89YihcIlBhdGNoZXNcIikuJDtyZXR1cm4gbih0KT9vKHQscik6dGhpcy5wcm9kdWNlKHQsKGZ1bmN0aW9uKHQpe3JldHVybiBvKHQsci5zbGljZShlKzEpKX0pKX0sZX0oKSxvdD1uZXcgaXQsdXQ9b3QucHJvZHVjZSxhdD1vdC5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZChvdCksZnQ9b3Quc2V0QXV0b0ZyZWV6ZS5iaW5kKG90KSxjdD1vdC5zZXRVc2VQcm94aWVzLmJpbmQob3QpLHN0PW90LmFwcGx5UGF0Y2hlcy5iaW5kKG90KSx2dD1vdC5jcmVhdGVEcmFmdC5iaW5kKG90KSxwdD1vdC5maW5pc2hEcmFmdC5iaW5kKG90KTtleHBvcnQgZGVmYXVsdCB1dDtleHBvcnR7aXQgYXMgSW1tZXIsc3QgYXMgYXBwbHlQYXRjaGVzLEsgYXMgY2FzdERyYWZ0LCQgYXMgY2FzdEltbXV0YWJsZSx2dCBhcyBjcmVhdGVEcmFmdCxEIGFzIGN1cnJlbnQsSiBhcyBlbmFibGVBbGxQbHVnaW5zLFQgYXMgZW5hYmxlRVM1LEMgYXMgZW5hYmxlTWFwU2V0LEYgYXMgZW5hYmxlUGF0Y2hlcyxwdCBhcyBmaW5pc2hEcmFmdCxkIGFzIGZyZWV6ZSxMIGFzIGltbWVyYWJsZSxuIGFzIGlzRHJhZnQsciBhcyBpc0RyYWZ0YWJsZSxIIGFzIG5vdGhpbmcsZSBhcyBvcmlnaW5hbCx1dCBhcyBwcm9kdWNlLGF0IGFzIHByb2R1Y2VXaXRoUGF0Y2hlcyxmdCBhcyBzZXRBdXRvRnJlZXplLGN0IGFzIHNldFVzZVByb3hpZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgVXBkYXRlRnVuY3Rpb24gfSBmcm9tIFwiLi9ydW50aW1lXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbi8vIGV4cG9ydCB0eXBlIFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kUGFyYW1zPFMsIFI+IHtcclxuICBydW4oKTogUHJvbWlzZTxSPixcclxuICB1cGRhdGUoc3RhdGU6IFMsIHJ1blJlc3VsdDogUik6IENvbW1hbmQ8UywgYW55PltdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZDxTLCBSPiB7XHJcbiAgcnVuKCk6IFByb21pc2U8Uj4sXHJcbiAgaGFuZGxlck5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tbWFuZDxTLCBSID0gYW55Pih7IHJ1biwgdXBkYXRlIH06IENvbW1hbmRQYXJhbXM8UywgUj4pOiBDb21tYW5kPFMsIFI+IHtcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbW1hbmQ8UywgUiA9IGFueT4oXHJcbiAgYXN5bmNGdW5jOiAoKSA9PiBhbnksXHJcbiAgaGFuZGxlck5hbWU6IHN0cmluZ1xyXG4pOiBDb21tYW5kPFMsIFI+IHtcclxuICByZXR1cm4geyBydW46IGFzeW5jRnVuYywgaGFuZGxlck5hbWUgfVxyXG59XHJcbiIsImltcG9ydCB7IEluaXRGdW5jdGlvbiwgVXBkYXRlRnVuY3Rpb24sIFJlbmRlckZ1bmN0aW9uIH0gZnJvbSBcIi4vcnVudGltZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29tcG9uZW50UGFyYW1zPFM+ID0ge1xyXG4gIC8vIGluaXQ6IEluaXRGdW5jdGlvbjxTPixcclxuICBpbml0aWFsU3RhdGU6IFMsXHJcbiAgcmVuZGVyOiBSZW5kZXJGdW5jdGlvbjxTPixcclxuICBoYW5kbGVyczogUmVjb3JkPHN0cmluZywgVXBkYXRlRnVuY3Rpb248Uz4+XHJcbiAgLy8gdXBkYXRlcnM6IHtbbmFtZTogc3RyaW5nXTogVXBkYXRlRnVuY3Rpb248Uz59LFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDb21wb25lbnQ8Uz4gPSB7XHJcbiAgLy8gaW5pdDogSW5pdEZ1bmN0aW9uPFM+LFxyXG4gIGluaXRpYWxTdGF0ZTogUyxcclxuICByZW5kZXI6IFJlbmRlckZ1bmN0aW9uPFM+LFxyXG4gIHVwZGF0ZXJzOiBSZWNvcmQ8c3RyaW5nLCBVcGRhdGVGdW5jdGlvbjxTPj4sXHJcbiAgLy8gdXBkYXRlcnM6IHtbbmFtZTogc3RyaW5nXTogVXBkYXRlRnVuY3Rpb248Uz59LFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50PFM+KFxyXG4gIHsgaW5pdGlhbFN0YXRlLCByZW5kZXIsIGhhbmRsZXJzIH06IENvbXBvbmVudFBhcmFtczxTPlxyXG4pOiBDb21wb25lbnQ8Uz4ge1xyXG4gIHJldHVybiB7IGluaXRpYWxTdGF0ZSwgcmVuZGVyLCB1cGRhdGVyczogaGFuZGxlcnMgfTtcclxufVxyXG5cclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZvckV2ZW50KGU6IEV2ZW50KSB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgaWYgKHRhcmdldCA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICBpZiAoXCJ2YWx1ZVwiIGluIHRhcmdldCkge1xyXG4gICAgcmV0dXJuICh0YXJnZXQgYXMgYW55KS52YWx1ZTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29tbWFuZCB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyB0b2tlbml6ZSB9IGZyb20gXCIuL2xleGVyXCI7XHJcbmltcG9ydCB7IG1vdW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcnVudGltZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudDtcclxuZXhwb3J0IGNvbnN0IGh0bWwgPSB0b2tlbml6ZTtcclxuZXhwb3J0IGNvbnN0IG1vdW50ID0gbW91bnRDb21wb25lbnQ7XHJcbmV4cG9ydCBjb25zdCBjb21tYW5kID0gY3JlYXRlQ29tbWFuZDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnQ6IGNyZWF0ZUNvbXBvbmVudCxcclxuICBodG1sOiB0b2tlbml6ZSxcclxuICBtb3VudDogbW91bnRDb21wb25lbnQsXHJcbiAgY29tbWFuZDogY3JlYXRlQ29tbWFuZFxyXG59XHJcbiIsImltcG9ydCBodG0gZnJvbSBcImh0bVwiO1xyXG5cclxudHlwZSBQcm9wc1R5cGUgPSB7W25hbWU6IHN0cmluZ106IHN0cmluZ30gfCBudWxsO1xyXG5leHBvcnQgdHlwZSBUb2tlbiA9IHsgdHlwZTogc3RyaW5nLCBwcm9wczogUHJvcHNUeXBlLCBjaGlsZHJlbjogQ2hpbGRUb2tlbltdIH07XHJcbmV4cG9ydCB0eXBlIENoaWxkVG9rZW4gPSBUb2tlbiB8IHVuZGVmaW5lZCB8IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbmZ1bmN0aW9uIGgodHlwZTogc3RyaW5nLCBwcm9wczogUHJvcHNUeXBlLCAuLi5jaGlsZHJlbjogVG9rZW5bXSk6IFRva2VuIHtcclxuICByZXR1cm4geyB0eXBlLCBwcm9wcywgY2hpbGRyZW4gfTtcclxufVxyXG5leHBvcnQgY29uc3QgdG9rZW5pemUgPSBodG0uYmluZChoKTtcclxuIiwiXHJcblxyXG5leHBvcnQgY29uc3QgTEVWRUxfSU5GTyA9IDM7XHJcbmV4cG9ydCBjb25zdCBMRVZFTF9FUlJPUiA9IDU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9nKG1zZzogc3RyaW5nLCBjb250ZXh0OiBhbnkgPSB7fSwgbGV2ZWw6IG51bWJlciA9IExFVkVMX0VSUk9SKSB7XHJcbiAgaWYgKGxldmVsID09PSBMRVZFTF9FUlJPUikge1xyXG4gICAgY29uc29sZS5lcnJvcihtc2csIGNvbnRleHQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhtc2csIGNvbnRleHQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDaGlsZFRva2VuLCBUb2tlbiB9IGZyb20gXCIuL2xleGVyXCI7XHJcbmltcG9ydCB7IGlzTm90TnVsbCB9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbnR5cGUgRXZlbnRDYWxsYmFjayA9IChlOiBFdmVudCwgbXNnOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG5mdW5jdGlvbiBhcHBseVByb3AoXHJcbiAgZWw6IEhUTUxFbGVtZW50LFxyXG4gIHByb3BOYW1lOiBzdHJpbmcsXHJcbiAgcHJvcFZhbHVlOiBzdHJpbmcsXHJcbiAgZXZlbnRDYWxsYmFjazogRXZlbnRDYWxsYmFja1xyXG4pIHtcclxuICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIm9uXCIpKSB7XHJcbiAgICBjb25zdCBldmVudE5hbWUgPSBwcm9wTmFtZS5zbGljZSgyKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGUgPT4gZXZlbnRDYWxsYmFjayhlLCBwcm9wVmFsdWUpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKHByb3BOYW1lLCBwcm9wVmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDaGlsZCh0b2tlbjogQ2hpbGRUb2tlbiwgZXZlbnRDYWxsYmFjazogRXZlbnRDYWxsYmFjayk6IEhUTUxFbGVtZW50IHwgVGV4dCB8IG51bGwge1xyXG4gIGlmICh0b2tlbiA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0b2tlbiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRva2VuLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VUb2tlbih0b2tlbiwgZXZlbnRDYWxsYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQ2hpbGRyZW4odG9rZW5zOiBDaGlsZFRva2VuW10sIGV2ZW50Q2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2spIHtcclxuICByZXR1cm4gdG9rZW5zLm1hcCh0ID0+IHBhcnNlQ2hpbGQodCwgZXZlbnRDYWxsYmFjaykpLmZpbHRlcihpc05vdE51bGwpIGFzIChIVE1MRWxlbWVudCB8IFRleHQpW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW46IFRva2VuLCBldmVudENhbGxiYWNrOiBFdmVudENhbGxiYWNrKTogSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0b2tlbi50eXBlKTtcclxuXHJcbiAgaWYgKHRva2VuLnByb3BzICE9IG51bGwpIHtcclxuICAgIE9iamVjdC5lbnRyaWVzKHRva2VuLnByb3BzKS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiBhcHBseVByb3AoZWwsIG5hbWUsIHZhbHVlLCBldmVudENhbGxiYWNrKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNoaWxkRWxzID0gcGFyc2VDaGlsZHJlbih0b2tlbi5jaGlsZHJlbiwgZXZlbnRDYWxsYmFjayk7XHJcbiAgZWwuYXBwZW5kKC4uLmNoaWxkRWxzKTtcclxuICBcclxuICByZXR1cm4gZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh0b2tlbnM6IFRva2VuIHwgVG9rZW5bXSwgZXZlbnRDYWxsYmFjazogRXZlbnRDYWxsYmFjayA9ICgpID0+IHt9KTogSFRNTEVsZW1lbnRbXSB7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHRva2VucykpIHJldHVybiBwYXJzZShbdG9rZW5zXSwgZXZlbnRDYWxsYmFjayk7XHJcblxyXG4gIHJldHVybiB0b2tlbnMubWFwKHQgPT4gcGFyc2VUb2tlbih0LCBldmVudENhbGxiYWNrKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tbWFuZCB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ2V0VmFsdWVGb3JFdmVudCB9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL2xleGVyXCI7XHJcbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gXCIuL3BhcnNlclwiO1xyXG5pbXBvcnQgeyB1cGRhdGVTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IGFkZFRvUXVldWUsIGNyZWF0ZVF1ZXVlLCBRdWV1ZSwgc2V0RmluYWxseSwgc2V0SGFuZGxlciB9IGZyb20gXCIuL3VwZGF0ZVF1ZXVlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBUYXJnZXRUeXBlID0gSFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudCB8IHN0cmluZztcclxuZXhwb3J0IHR5cGUgSW5pdEZ1bmN0aW9uPFM+ID0gKCkgPT4gUztcclxuZXhwb3J0IHR5cGUgVXBkYXRlRnVuY3Rpb248Uz4gPSAoc3RhdGU6IFMsIHZhbHVlOiBzdHJpbmcpID0+IENvbW1hbmQ8UywgYW55PltdIHwgdm9pZDtcclxuZXhwb3J0IHR5cGUgUmVuZGVyRnVuY3Rpb248Uz4gPSAoc3RhdGU6IFMpID0+IFRva2VuIHwgVG9rZW5bXTtcclxuXHJcbmV4cG9ydCB0eXBlIE1vdW50U3RhdGU8Uz4gPSB7IGNvbXBvbmVudDogQ29tcG9uZW50PFM+LCBlbDogSFRNTEVsZW1lbnQgfTtcclxuZXhwb3J0IHR5cGUgRXZlbnRIYW5kbGVyUmVzcG9uc2U8Uz4gPSB7IG5ld1N0YXRlOiBTLCBjb21tYW5kczogQ29tbWFuZDxTLCBhbnk+W10gfVxyXG5leHBvcnQgdHlwZSBFdmVudEhhbmRsZXI8Uz4gPSAoc3RhdGU6IFMpID0+IEV2ZW50SGFuZGxlclJlc3BvbnNlPFM+O1xyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZVRhcmdldCh0YXJnZXQ6IFRhcmdldFR5cGUpOiBIVE1MRWxlbWVudFtdIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSByZXR1cm4gdGFyZ2V0O1xyXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCkpO1xyXG4gIH1cclxuICByZXR1cm4gW3RhcmdldF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUV2ZW50PFM+KGU6IEV2ZW50LCBuYW1lOiBzdHJpbmcsIG1vdW50U3RhdGU6IE1vdW50U3RhdGU8Uz4sIHN0YXRlOiBTKTogRXZlbnRIYW5kbGVyUmVzcG9uc2U8Uz4ge1xyXG4gIGNvbnN0IGhhbmRsZXIgPSBmaW5kSGFuZGxlcihtb3VudFN0YXRlLCBuYW1lKTtcclxuICBpZiAoaGFuZGxlciA9PSBudWxsKSByZXR1cm4geyBuZXdTdGF0ZTogc3RhdGUsIGNvbW1hbmRzOiBbXSB9O1xyXG4gIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWVGb3JFdmVudChlKTtcclxuICByZXR1cm4gcnVuU3RhdGVVcGRhdGUoc3RhdGUsIHMgPT4gaGFuZGxlcihzLCB2YWx1ZSkgfHwgW10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kSGFuZGxlcjxTPihtb3VudFN0YXRlOiBNb3VudFN0YXRlPFM+LCBuYW1lOiBzdHJpbmcpIHtcclxuICBjb25zdCB1cGRhdGVGdW5jID0gbW91bnRTdGF0ZS5jb21wb25lbnQudXBkYXRlcnNbbmFtZV07XHJcbiAgaWYgKHVwZGF0ZUZ1bmMgPT0gbnVsbCkge1xyXG4gICAgbG9nKGBVcGRhdGUgZnVuY3Rpb24gd2l0aCBuYW1lIFwiJHtuYW1lfVwiIG5vdCBmb3VuZCBpbiB5b3VyIGNvbXBvbmVudGAsIHsgbW91bnRTdGF0ZSB9KTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gdXBkYXRlRnVuYztcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuU3RhdGVVcGRhdGU8Uz4oc3RhdGU6IFMsIHVwZGF0ZVN0YXRlRnVuYzogKHN0YXRlOiBTKSA9PiBDb21tYW5kPFMsIGFueT5bXSk6IEV2ZW50SGFuZGxlclJlc3BvbnNlPFM+IHtcclxuICBsZXQgY29tbWFuZHM6IENvbW1hbmQ8UywgYW55PltdIHwgdW5kZWZpbmVkID0gW107XHJcbiAgY29uc3QgbmV3U3RhdGUgPSB1cGRhdGVTdGF0ZShzdGF0ZSwgZHJhZnRTdGF0ZSA9PiB7XHJcbiAgICBjb21tYW5kcyA9IHVwZGF0ZVN0YXRlRnVuYyhkcmFmdFN0YXRlKTtcclxuICB9KVxyXG4gIHJldHVybiB7IG5ld1N0YXRlLCBjb21tYW5kcyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTdGF0ZTxTPihtb3VudFN0YXRlOiBNb3VudFN0YXRlPFM+LCBzdGF0ZTogUywgZXZlbnRIYW5kbGVyOiAoZTogRXZlbnQsIHZhbDogYW55KSA9PiB2b2lkKSB7XHJcbiAgY29uc3QgdG9rZW5zID0gbW91bnRTdGF0ZS5jb21wb25lbnQucmVuZGVyKHN0YXRlKTtcclxuICBjb25zdCBjaGlsZHJlbiA9IHBhcnNlKHRva2VucywgZXZlbnRIYW5kbGVyKTtcclxuICBtb3VudFN0YXRlLmVsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbW91bnRTdGF0ZS5lbC5hcHBlbmQoLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VudFNpbmdsZTxTPihjb21wb25lbnQ6IENvbXBvbmVudDxTPiwgZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgbGV0IHN0YXRlID0gY29tcG9uZW50LmluaXRpYWxTdGF0ZTtcclxuICBjb25zdCBtb3VudFN0YXRlID0geyBjb21wb25lbnQsIGVsIH07XHJcbiAgY29uc3QgcXVldWUgPSBjcmVhdGVRdWV1ZTxFdmVudEhhbmRsZXI8Uz4+KClcclxuICBcclxuICBjb25zdCBldmVudEhhbmRsZXIgPSAoZTogRXZlbnQsIHZhbDogYW55KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKHN0YXRlOiBTKSA9PiBoYW5kbGVFdmVudDxTPihlLCB2YWwsIG1vdW50U3RhdGUsIHN0YXRlKTtcclxuICAgIGFkZFRvUXVldWU8RXZlbnRIYW5kbGVyPFM+PihxdWV1ZSwgaGFuZGxlcik7XHJcbiAgfVxyXG4gIFxyXG4gIHNldEhhbmRsZXIocXVldWUsIGV2ZW50SGFuZGxlciA9PiB7XHJcbiAgICBjb25zdCB7IG5ld1N0YXRlLCBjb21tYW5kcyB9ID0gZXZlbnRIYW5kbGVyKHN0YXRlKVxyXG4gICAgc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIGNvbW1hbmRzLmZvckVhY2goY29tbWFuZCA9PiB7XHJcbiAgICAgIC8vIGlmIChjb21tYW5kLnJ1bilcclxuICAgICAgY29tbWFuZC5ydW4oKS50aGVuKGNvbW1hbmRSZXN1bHQgPT4ge1xyXG4gICAgICAgIC8vIEFkZCB0aGUgdXBkYXRlIG1ldGhvZCBmb3IgdGhlIGNvbW1hbmQgdG8gdGhlIHF1ZXVlXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZpbmRIYW5kbGVyKG1vdW50U3RhdGUsIGNvbW1hbmQuaGFuZGxlck5hbWUpO1xyXG4gICAgICAgIGlmIChoYW5kbGVyID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBhZGRUb1F1ZXVlKHF1ZXVlLCAoczEpID0+IHJ1blN0YXRlVXBkYXRlKHMxLCBzMiA9PiBoYW5kbGVyKHMyLCBjb21tYW5kUmVzdWx0KSB8fCBbXSkpO1xyXG4gICAgICAgIC8vIGFkZFRvUXVldWUocXVldWUsIChzOiBTKSA9PiBydW5TdGF0ZVVwZGF0ZShzLCAoczI6IFMpID0+IGNvbW1hbmQudXBkYXRlKHMyLCBjb21tYW5kUmVzdWx0KSkpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KTtcclxuXHJcbiAgc2V0RmluYWxseShxdWV1ZSwgKCkgPT4ge1xyXG4gICAgcmVuZGVyU3RhdGUobW91bnRTdGF0ZSwgc3RhdGUsIGV2ZW50SGFuZGxlcik7XHJcbiAgfSlcclxuICByZW5kZXJTdGF0ZShtb3VudFN0YXRlLCBzdGF0ZSwgZXZlbnRIYW5kbGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Q29tcG9uZW50PFM+KGNvbXBvbmVudDogQ29tcG9uZW50PFM+LCB0YXJnZXQ6IFRhcmdldFR5cGUpIHtcclxuICBjb25zdCBlbHMgPSByZXNvbHZlVGFyZ2V0KHRhcmdldCk7XHJcbiAgZWxzLmZvckVhY2goZWwgPT4gbW91bnRTaW5nbGUoY29tcG9uZW50LCBlbCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbW91bnRDb21wb25lbnRcclxufVxyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFN0YXRlVXBkYXRlRnVuYyA9IChzdGF0ZTogYW55KSA9PiBhbnk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhcIlJlc3VsdDpcIiwgcHJvZHVjZSgwLCAoczogYW55KSA9PiB7XHJcbi8vICAgcyA9IDI7XHJcbi8vIH0pKTtcclxuXHJcbi8vIGNvbnN0IGJhc2VTdGF0ZSA9IHtcclxuLy8gICB0aXRsZTogXCJvbmVcIlxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBuZXh0U3RhdGUgPSBwcm9kdWNlKGJhc2VTdGF0ZSwgKGRyYWZ0U3RhdGU6IGFueSkgPT4ge1xyXG4vLyAgIGRyYWZ0U3RhdGVbXCJ0ZXh0XCJdID0gXCJ0ZXN0XCI7XHJcbi8vICAgZHJhZnRTdGF0ZS50aXRsZSA9IFwibE9MT0xcIjtcclxuLy8gICAgIC8vIGRyYWZ0U3RhdGUucHVzaCh7dG9kbzogXCJUd2VldCBhYm91dCBpdFwifSlcclxuLy8gICAgIC8vIGRyYWZ0U3RhdGVbMV0uZG9uZSA9IHRydWVcclxuLy8gfSlcclxuLy8gY29uc29sZS5sb2cobmV4dFN0YXRlKTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGUoc3RhdGU6IGFueSkge1xyXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHN0YXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlPFM+KHN0YXRlOiBTLCB1cGRhdGVGdW5jOiBTdGF0ZVVwZGF0ZUZ1bmMpOiBTIHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgdXBkYXRlRnVuYyk7XHJcbn1cclxuIiwiXHJcbmV4cG9ydCB0eXBlIEZpbmFsbHlGdW5jID0gKCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVldWU8VD4ge1xyXG4gIGl0ZW1zOiBUW10sXHJcbiAgd29ya2luZzogYm9vbGVhbixcclxuICBoYW5kbGVyPzogUXVldWVIYW5kbGVyPFQ+LFxyXG4gIGZpbmFsbHk/OiBGaW5hbGx5RnVuY1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBRdWV1ZUhhbmRsZXI8VD4gPSAodmFsdWU6IFQpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVldWU8VD4oKTogUXVldWU8VD4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICB3b3JraW5nOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEhhbmRsZXI8VD4ocXVldWU6IFF1ZXVlPFQ+LCBoYW5kbGVyOiBRdWV1ZUhhbmRsZXI8VD4pIHtcclxuICBxdWV1ZS5oYW5kbGVyID0gaGFuZGxlcjtcclxuICBydW5IYW5kbGVyKHF1ZXVlKTtcclxuICByZXR1cm47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGaW5hbGx5PFQ+KHF1ZXVlOiBRdWV1ZTxUPiwgZmluYWxseUZ1bmM6IEZpbmFsbHlGdW5jKSB7XHJcbiAgcXVldWUuZmluYWxseSA9IGZpbmFsbHlGdW5jO1xyXG4gIHJ1bkhhbmRsZXIocXVldWUpO1xyXG4gIHJldHVybjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvUXVldWU8VD4ocXVldWU6IFF1ZXVlPFQ+LCB2YWx1ZTogVCkge1xyXG4gIHF1ZXVlLml0ZW1zLnB1c2godmFsdWUpO1xyXG5cclxuICBpZiAoIXF1ZXVlLndvcmtpbmcpIHtcclxuICAgIHJ1bkhhbmRsZXI8VD4ocXVldWUpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gcXVldWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5IYW5kbGVyPFQ+KHF1ZXVlOiBRdWV1ZTxUPikge1xyXG4gIGlmICghcXVldWUuaGFuZGxlciB8fCBxdWV1ZS5pdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICBxdWV1ZS53b3JraW5nID0gdHJ1ZTtcclxuICB3aGlsZSAocXVldWUuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgaGFuZGxlSXRlbShxdWV1ZSk7XHJcbiAgfVxyXG4gIGlmIChxdWV1ZS5maW5hbGx5KSB7XHJcbiAgICBxdWV1ZS5maW5hbGx5KClcclxuICB9XHJcbiAgaWYgKHF1ZXVlLml0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgIHJ1bkhhbmRsZXIocXVldWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBxdWV1ZS53b3JraW5nID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSXRlbTxUPihxdWV1ZTogUXVldWU8VD4pIHtcclxuICBjb25zdCBpdGVtID0gZ2V0QW5kUmVtb3ZlT2xkZXN0KHF1ZXVlKTtcclxuICBpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XHJcbiAgaWYgKCFxdWV1ZS5oYW5kbGVyKSByZXR1cm47XHJcbiAgcXVldWUuaGFuZGxlcihpdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5kUmVtb3ZlT2xkZXN0PFQ+KHF1ZXVlOiBRdWV1ZTxUPikge1xyXG4gIHJldHVybiBxdWV1ZS5pdGVtcy5zaGlmdCgpO1xyXG59XHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gdmFsdWUgPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90TnVsbCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuICFpc051bGwodmFsdWUpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==