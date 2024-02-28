(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function fa(a){return a.raw=a}
function ha(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||oa});
var pa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=pa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ua={a:!0},va={};try{va.__proto__=ua;sa=va.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=ra;
function w(a,b){a.prototype=pa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function xa(){this.s=!1;this.m=null;this.i=void 0;this.h=1;this.G=this.l=0;this.D=this.j=null}
function ya(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
xa.prototype.la=function(a){this.i=a};
function za(a,b){a.j={exception:b,pd:!0};a.h=a.l||a.G}
xa.prototype.return=function(a){this.j={return:a};this.h=this.G};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.v=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.G=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.D.splice(0)[0];(b=a.j=a.j||b)?b.pd?a.h=a.l||a.G:void 0!=b.v&&a.G<b.v?(a.h=b.v,a.j=null):a.h=a.G:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Ea(a,b){ya(a.h);var c=a.h.m;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.s=!1,e;var f=e.value}catch(g){return a.h.m=null,za(a.h,g),Ha(a)}a.h.m=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.s=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.pd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ya(a.h);a.h.m?b=Ga(a,a.h.m.next,b,a.h.la):(a.h.la(b),b=Ha(a));return b};
this.throw=function(b){ya(a.h);a.h.m?b=Ga(a,a.h.m["throw"],b,a.h.la):(za(a.h,b),b=Ha(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ja(new Ia(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return qa});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.S(g):this.G(g)}};
b.prototype.S=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.G(g)};
b.prototype.m=function(g){this.la(2,g)};
b.prototype.G=function(g){this.la(1,g)};
b.prototype.la=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.R()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.R=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.Zb(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Zb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Zb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Zb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(y){t[x]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Zb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ka(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&ka(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||wa});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ma=Ma||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(){return Date.now()}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){C.console&&C.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(){}
function zb(a){return new yb(Ab,a)}
var Ab={};zb("");var Bb={};function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h.toString()};function Db(a){this.h=a}
Db.prototype.toString=function(){return this.h+""};
function Eb(a){if(a instanceof Db&&a.constructor===Db)return a.h;Na(a);return"type_error:TrustedResourceUrl"}
var Fb={};function Gb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Db(a,Fb)}
;var Hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Ib(a){this.h=a}
Ib.prototype.toString=function(){return this.h.toString()};
var Jb={},Kb=new Ib("about:invalid#zClosurez",Jb);var Lb,Mb=E("CLOSURE_FLAGS"),Nb=Mb&&Mb[610401301];Lb=null!=Nb?Nb:!1;function Ob(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=C.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Lb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Ob().indexOf(a)}
;function Sb(){return Lb?!!Pb&&0<Pb.brands.length:!1}
function Tb(){return Sb()?!1:F("Opera")}
function Ub(){return Sb()?!1:F("Trident")||F("MSIE")}
function Vb(){return F("Firefox")||F("FxiOS")}
function Wb(){return Sb()?Rb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Sb()?0:F("Edge"))||F("Silk")}
;function Xb(a){this.h=a}
Xb.prototype.toString=function(){return this.h.toString()};function Yb(){a:{var a=C.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Zb.test(a))break a;a=""}return a}
var Zb=/^[\w+/_-]+[=]{0,2}$/;function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a,b){return b.match(ac)[a]||null}
function dc(a){return bc(cc(3,a))}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function hc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function jc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)jc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function kc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)jc(a[b],a[b+1],c);return c.join("&")}
function lc(a){var b=[],c;for(c in a)jc(c,a[c],b);return b.join("&")}
function mc(a,b){var c=2==arguments.length?kc(arguments[1],0):kc(arguments,1);return hc(a,c)}
function nc(a,b){b=lc(b);return hc(a,b)}
function oc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return hc(a,b+c)}
function pc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var qc=/#|$/,rc=/[?&]($|#)/;function sc(a,b){for(var c=a.search(qc),d=0,e,f=[];0<=(e=pc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(rc,"$1")}
;function tc(a){this.dd=a}
;function uc(a,b,c){this.i=a;this.l=b;this.h=c||[];this.qb=new Map}
m=uc.prototype;m.Pd=function(a){var b=B.apply(1,arguments),c=this.Ac(b);c?c.push(new tc(a)):this.Bd(a,b)};
m.Bd=function(a){var b=this.getKey(B.apply(1,arguments));this.qb.set(b,[new tc(a)])};
m.Ac=function(){var a=this.getKey(B.apply(0,arguments));return this.qb.has(a)?this.qb.get(a):void 0};
m.he=function(){var a=this.Ac(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.qb.clear()};
m.getKey=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function vc(a,b){uc.call(this,a,3,b)}
w(vc,uc);vc.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.he(b);d&&(c=d.dd);this.Bd(c+a,b)};function wc(a,b){uc.call(this,a,2,b)}
w(wc,uc);wc.prototype.record=function(a){this.Pd(a,B.apply(1,arguments))};function xc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function yc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?yc.apply(null,d):xc(d)}}
;function G(){this.la=this.la;this.G=this.G}
G.prototype.la=!1;G.prototype.Z=function(){return this.la};
G.prototype.dispose=function(){this.la||(this.la=!0,this.M())};
function zc(a,b){Ac(a,Wa(xc,b))}
function Ac(a,b){a.la?b():(a.G||(a.G=[]),a.G.push(b))}
G.prototype.M=function(){if(this.G)for(;this.G.length;)this.G.shift()()};function Bc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Bc.prototype.stopPropagation=function(){this.j=!0};
Bc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Cc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Dc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ec(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Fc[c])c=Fc[c];else{c=String(c);if(!Fc[c]){var f=/function\s+([^\(]+)/m.exec(c);Fc[c]=f?f[1]:"[Anonymous]"}c=Fc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ec(a,b){b||(b={});b[Gc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Gc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ec(a,b));return c}
function Gc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Fc={};var Hc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ic(){return Lb?!!Pb&&!!Pb.platform:!1}
function Jc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Kc(a){Kc[" "](a);return a}
Kc[" "]=function(){};var Lc=Tb(),Mc=Ub(),Nc=F("Edge"),Oc=F("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Pc=-1!=Ob().toLowerCase().indexOf("webkit")&&!F("Edge");Pc&&F("Mobile");Ic()||F("Macintosh");Ic()||F("Windows");(Ic()?"Linux"===Pb.platform:F("Linux"))||Ic()||F("CrOS");var Qc=C.navigator||null;Qc&&(Qc.appVersion||"").indexOf("X11");var Rc=Ic()?"Android"===Pb.platform:F("Android");Jc();F("iPad");F("iPod");Jc()||F("iPad")||F("iPod");Ob().toLowerCase().indexOf("kaios");
function Sc(){var a=C.document;return a?a.documentMode:void 0}
var Tc;a:{var Uc="",Vc=function(){var a=Ob();if(Oc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Nc)return/Edge\/([\d\.]+)/.exec(a);if(Mc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Pc)return/WebKit\/(\S+)/.exec(a);if(Lc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Vc&&(Uc=Vc?Vc[1]:"");if(Mc){var Wc=Sc();if(null!=Wc&&Wc>parseFloat(Uc)){Tc=String(Wc);break a}}Tc=Uc}var Xc=Tc,Yc;if(C.document&&Mc){var Zc=Sc();Yc=Zc?Zc:parseInt(Xc,10)||void 0}else Yc=void 0;var $c=Yc;function ad(a,b){Bc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(ad,Bc);var bd={2:"touch",3:"pen",4:"mouse"};
ad.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Oc){a:{try{Kc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:bd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ad.Aa.preventDefault.call(this)};
ad.prototype.stopPropagation=function(){ad.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ad.prototype.preventDefault=function(){ad.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cd="closure_listenable_"+(1E6*Math.random()|0);var dd=0;function ed(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ec=e;this.key=++dd;this.Sb=this.Yb=!1}
function fd(a){a.Sb=!0;a.listener=null;a.proxy=null;a.src=null;a.ec=null}
;function gd(a){this.src=a;this.listeners={};this.h=0}
gd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=hd(a,b,d,e);-1<g?(b=a[g],c||(b.Yb=!1)):(b=new ed(b,this.src,f,!!d,e),b.Yb=c,a.push(b));return b};
gd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=hd(e,b,c,d);return-1<b?(fd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function id(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(fd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function hd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sb&&f.listener==b&&f.capture==!!c&&f.ec==d)return e}return-1}
;var jd="closure_lm_"+(1E6*Math.random()|0),kd={},ld=0;function md(a,b,c,d,e){if(d&&d.once)nd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)md(a,b[f],c,d,e);else c=od(c),a&&a[cd]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):pd(a,b,c,!1,d,e)}
function pd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=qd(a);h||(a[jd]=h=new gd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=rd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Hc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(sd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ld++}}
function rd(){function a(c){return b.call(a.src,a.listener,c)}
var b=td;return a}
function nd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=od(c),a&&a[cd]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):pd(a,b,c,!0,d,e)}
function ud(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ud(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=od(c),a&&a[cd])?a.h.remove(String(b),c,d,e):a&&(a=qd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=hd(b,c,d,e)),(c=-1<a?b[a]:null)&&vd(c))}
function vd(a){if("number"!==typeof a&&a&&!a.Sb){var b=a.src;if(b&&b[cd])id(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(sd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ld--;(c=qd(b))?(id(c,a),0==c.h&&(c.src=null,b[jd]=null)):fd(a)}}}
function sd(a){return a in kd?kd[a]:kd[a]="on"+a}
function td(a,b){if(a.Sb)a=!0;else{b=new ad(b,this);var c=a.listener,d=a.ec||a.src;a.Yb&&vd(a);a=c.call(d,b)}return a}
function qd(a){a=a[jd];return a instanceof gd?a:null}
var wd="__closure_events_fn_"+(1E9*Math.random()>>>0);function od(a){if("function"===typeof a)return a;a[wd]||(a[wd]=function(b){return a.handleEvent(b)});
return a[wd]}
;function xd(){G.call(this);this.h=new gd(this);this.Ka=this;this.ea=null}
Ya(xd,G);xd.prototype[cd]=!0;m=xd.prototype;m.addEventListener=function(a,b,c,d){md(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){ud(this,a,b,c,d)};
function yd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Ka;c=b.type||b;"string"===typeof b?b=new Bc(b,a):b instanceof Bc?b.target=b.target||a:(e=b,b=new Bc(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=zd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=zd(g,c,!0,b)&&e,b.j||(e=zd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=zd(g,c,!1,b)&&e}
m.M=function(){xd.Aa.M.call(this);this.removeAllListeners();this.ea=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,fd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function zd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Sb&&g.capture==c){var h=g.listener,k=g.ec||g.src;g.Yb&&id(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ad(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ad.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Bd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Cd(a,b){return a+Math.random()*(b-a)}
;function Dd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Dd.prototype;m.clone=function(){return new Dd(this.x,this.y)};
m.equals=function(a){return a instanceof Dd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Ed(a,b){this.width=a;this.height=b}
m=Ed.prototype;m.clone=function(){return new Ed(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.Ob=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Fd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Gd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Hd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Id;function Jd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Gd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cd;c.cd=null;e()}};
return function(e){d.next={cd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Kd(a){C.setTimeout(function(){throw a;},0)}
;function Ld(){this.i=this.h=null}
Ld.prototype.add=function(a,b){var c=Md.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ld.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Md=new Ad(function(){return new Nd},function(a){return a.reset()});
function Nd(){this.next=this.scope=this.h=null}
Nd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Nd.prototype.reset=function(){this.next=this.scope=this.h=null};var Od,Pd=!1,Qd=new Ld;function Rd(a,b){Od||Sd();Pd||(Od(),Pd=!0);Qd.add(a,b)}
function Sd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Od=function(){a.then(Td)}}else Od=function(){var b=Td;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Sb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Id||(Id=Jd()),Id(b)):C.setImmediate(b)}}
function Td(){for(var a;a=Qd.remove();){try{a.h.call(a.scope)}catch(b){Kd(b)}Bd(Md,a)}Pd=!1}
;function Ud(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.G=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Vd(b,2,c)},function(c){Vd(b,3,c)})}catch(c){Vd(this,3,c)}}
function Wd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Wd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Xd=new Ad(function(){return new Wd},function(a){a.reset()});
function Yd(a,b,c){var d=Xd.get();d.i=a;d.h=b;d.context=c;return d}
function Zd(a){return new Ud(function(b,c){c(a)})}
Ud.prototype.then=function(a,b,c){return $d(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ud.prototype.$goog_Thenable=!0;m=Ud.prototype;m.sc=function(a,b){return $d(this,null,a,b)};
m.catch=Ud.prototype.sc;m.cancel=function(a){if(0==this.h){var b=new ae(a);Rd(function(){be(this,b)},this)}};
function be(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?be(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ce(c),de(c,e,3,b)))}a.j=null}else Vd(a,3,b)}
function ee(a,b){a.i||2!=a.h&&3!=a.h||fe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function $d(a,b,c,d){var e=Yd(null,null,null);e.child=new Ud(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ae?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ee(a,e);return e.child}
m.ef=function(a){this.h=0;Vd(this,2,a)};
m.ff=function(a){this.h=0;Vd(this,3,a)};
function Vd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.ef,f=a.ff;if(d instanceof Ud){ee(d,Yd(e||bb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){ge(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,fe(a),3!=b||c instanceof ae||he(a,c))}}
function ge(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fe(a){a.G||(a.G=!0,Rd(a.be,a))}
function ce(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.be=function(){for(var a;a=ce(this);)de(this,a,this.h,this.s);this.G=!1};
function de(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,ie(b,c,d);else try{b.j?b.i.call(b.context):ie(b,c,d)}catch(e){je.call(null,e)}Bd(Xd,b)}
function ie(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function he(a,b){a.m=!0;Rd(function(){a.m&&je.call(null,b)})}
var je=Kd;function ae(a){$a.call(this,a)}
Ya(ae,$a);ae.prototype.name="cancel";function ke(a,b){xd.call(this);this.j=a||1;this.i=b||C;this.l=Va(this.cf,this);this.m=Xa()}
Ya(ke,xd);m=ke.prototype;m.enabled=!1;m.Fa=null;m.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
m.cf=function(){if(this.enabled){var a=Xa()-this.m;0<a&&a<.8*this.j?this.Fa=this.i.setTimeout(this.l,this.j-a):(this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null),yd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.i.setTimeout(this.l,this.j),this.m=Xa())};
m.stop=function(){this.enabled=!1;this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null)};
m.M=function(){ke.Aa.M.call(this);this.stop();delete this.i};
function le(a,b,c){if("function"===typeof a)c&&(a=Va(a,c));else if(a&&"function"==typeof a.handleEvent)a=Va(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function me(a){G.call(this);this.D=a;this.i=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.h=new ke(this.flushInterval);this.h.listen("tick",this.nb,!1,this);zc(this,this.h);this.m=!1}
w(me,G);m=me.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ne(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.nb()}
m.nb=function(){var a=this.i.values();a=[].concat(ja(a)).filter(function(b){return b.qb.size});
a.length&&this.D.flush(a,this.m);oe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Wc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new vc(a,b))};
m.Xc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new wc(a,b))};
function pe(a,b){return a.s.has(b)?void 0:a.i.get(b)}
m.uc=function(a){this.Nd.apply(this,[a,1].concat(ja(B.apply(1,arguments))))};
m.Nd=function(a,b){var c=B.apply(2,arguments),d=pe(this,a);d&&d instanceof vc&&(d.j(b,c),ne(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=pe(this,a);d&&d instanceof wc&&(d.record(b,c),ne(this))};
function oe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function qe(a){this.h=a;this.h.Wc("/client_streamz/bg/fiec",{tb:3,sb:"rk"},{tb:2,sb:"ec"},{tb:3,sb:"em"})}
function re(a,b,c,d){a.h.uc("/client_streamz/bg/fiec",b,c,d)}
function se(a){this.h=a;this.h.Xc("/client_streamz/bg/fil",{tb:3,sb:"rk"})}
se.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function te(a){this.h=a;this.h.Wc("/client_streamz/bg/fsc",{tb:3,sb:"rk"})}
function ue(a){this.h=a;this.h.Xc("/client_streamz/bg/fsl",{tb:3,sb:"rk"})}
ue.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var ve={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function we(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=xe(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=ye(a,h),d+=ye(a,h+4),e+=ye(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return ve.toString(e)}
function xe(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function ye(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Vb();var ze=Jc()||F("iPod"),Ae=F("iPad");!F("Android")||Wb()||Vb()||Tb()||F("Silk");Wb();var Be=F("Safari")&&!(Wb()||(Sb()?0:F("Coast"))||Tb()||(Sb()?0:F("Edge"))||(Sb()?Rb("Microsoft Edge"):F("Edg/"))||(Sb()?Rb("Opera"):F("OPR"))||Vb()||F("Silk")||F("Android"))&&!(Jc()||F("iPad")||F("iPod"));var Ce={},De=null;function Ee(a,b){Oa(a);void 0===b&&(b=0);Fe();b=Ce[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ge(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;He(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function He(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=De[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Fe();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Fe(){if(!De){De={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ce[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===De[f]&&(De[f]=e)}}}}
;var Ie="undefined"!==typeof Uint8Array,Je=!Mc&&"function"===typeof btoa;function Ke(a){if(!Je)return Ee(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Le=/[-_.]/g,Me={"-":"+",_:"/",".":"="};function Ne(a){return Me[a]||""}
function Oe(a){return Ie&&null!=a&&a instanceof Uint8Array}
var Pe={};var Qe;function Re(a){if(a!==Pe)throw Error("illegal external caller");}
function Se(a,b){Re(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Se.prototype.Ob=function(){return null==this.value_};
Se.prototype.sizeBytes=function(){Re(Pe);var a=this.value_;if(null!=a&&!Oe(a))if("string"===typeof a)if(Je){Le.test(a)&&(a=a.replace(Le,Ne));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ge(a);else Na(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Te(a){return Array.prototype.slice.call(a)}
;var Ue="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ja(Object.values({Gf:1,Ef:2,Df:4,Jf:8,If:16,Hf:32,wf:64,Kf:128,Cf:256,Bf:512,Ff:1024})));var Ve=Ue?function(a,b){a[Ue]|=b}:function(a,b){void 0!==a.Da?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function We(a){var b=Xe(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Te(a)),Ye(a,b|1))}
var Ze=Ue?function(a,b){a[Ue]&=~b}:function(a,b){void 0!==a.Da&&(a.Da&=~b)},Xe=Ue?function(a){return a[Ue]|0}:function(a){return a.Da|0},$e=Ue?function(a){return a[Ue]}:function(a){return a.Da},Ye=Ue?function(a,b){a[Ue]=b}:function(a,b){void 0!==a.Da?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function af(){var a=[];Ve(a,1);return a}
function bf(a,b){Ye(b,(a|0)&-255)}
function cf(a,b){Ye(b,(a|34)&-221)}
function df(a){a=a>>11&1023;return 0===a?536870912:a}
;var ef={};function ff(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var gf;function hf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Se(a,Pe):Qe||(Qe=new Se(null,Pe));else if(a.constructor!==Se)if(Oe(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Se(new Uint8Array(a),Pe):Qe||(Qe=new Se(null,Pe));else throw Error();return a}
var jf,kf=[];Ye(kf,55);jf=Object.freeze(kf);function lf(a){if(a&2)throw Error();}
;function mf(){var a=Error();Cc(a,"incident");Kd(a)}
function nf(){var a=Error();Cc(a,"warning");return a}
;function of(a){return a.displayName||a.name||"unknown type name"}
function pf(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Na(a)+": "+a);a=!!a}return a}
var qf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function rf(a){return"number"===typeof a&&Number.isFinite(a)||!!a&&"string"===typeof a&&isFinite(a)}
function sf(a){if(null!=a){if("number"!==typeof a)throw nf();Number.isFinite(a)||mf()}return a}
function tf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}
function uf(a){if(null!=a){if(!rf(a))throw nf();var b=typeof a;("number"===b?Number.isFinite(a):"string"!==b?0:qf.test(a))||mf();a="string"===typeof a?vf(a):wf(a)}return a}
function wf(a){rf(a);return a}
function vf(a){rf(a);return a}
function xf(a){if("string"!==typeof a)throw Error();return a}
function yf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function zf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+of(b)+" but got "+(a&&of(a.constructor)));}
function Af(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Kc===ef)return a;if(d){var e=d=Xe(a);0===e&&(e|=c&32);e|=c&2;e!==d&&Ye(a,e);return new b(a)}}
;var Bf;function Cf(a,b){Xe(b);Bf=b;a=new a(b);Bf=void 0;return a}
function Df(a,b,c){null==a&&(a=Bf);Bf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-2095105|(b&1023)<<11)}else{if(!Array.isArray(a))throw Error();d=Xe(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(ff(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Ef(c,b,g),e=1023);d=d&-2095105|(e&1023)<<11;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Ef(c,g,{}),d|=256,b=1023),d=d&-2095105|(b&1023)<<11)}}Ye(a,d);return a}
function Ef(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Ff(a,b){return Gf(b)}
function Gf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Oe(a))return Ke(a);if(a instanceof Se){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Ke(b)}}}return a}
;function Hf(a,b,c){a=Te(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function If(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Xe(a)&1?void 0:f&&Xe(a)&2?a:Jf(a,b,c,void 0!==d,e,f);else if(ff(a)){var g={},h;for(h in a)g[h]=If(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Jf(a,b,c,d,e,f){var g=d||c?Xe(a):0;d=d?!!(g&32):void 0;a=Te(a);for(var h=0;h<a.length;h++)a[h]=If(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Kf(a){return a.Kc===ef?a.toJSON():Gf(a)}
;function Lf(a,b,c){c=void 0===c?cf:c;if(null!=a){if(Ie&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Xe(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Ye(a,d|34),d&4&&Object.freeze(a),a):Jf(a,Lf,d&4?cf:c,!0,!1,!0)}a.Kc===ef&&(c=a.A,d=$e(c),a=d&2?a:Cf(a.constructor,Mf(c,d,!0)));return a}}
function Mf(a,b,c){var d=c||b&2?cf:bf,e=!!(b&32);a=Hf(a,b,function(f){return Lf(f,e,d)});
Ve(a,32|(c?2:0));return a}
function Nf(a){var b=a.A,c=$e(b);return c&2?Cf(a.constructor,Mf(b,c,!1)):a}
;function Of(a,b){a=a.A;return Pf(a,$e(a),b)}
function Pf(a,b,c,d){if(-1===c)return null;if(c>=df(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function K(a,b,c){var d=a.A,e=$e(d);lf(e);Qf(d,e,b,c);return a}
function Qf(a,b,c,d,e){ff(d);var f=df(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Ye(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Rf(a){return void 0!==Sf(a,Tf,11,!1)}
function Uf(a,b,c,d){var e=a.A,f=$e(e);lf(f);if(null==c)return Qf(e,f,b),a;if(!(Xe(c)&4)){Object.isFrozen(c)&&(c=Te(c));for(var g=0;g<c.length;g++)c[g]=d(c[g]);Ye(c,5)}Qf(e,f,b,c);return a}
function Vf(a,b,c,d){a=a.A;var e=$e(a);lf(e);for(var f=0,g=0;g<c.length;g++){var h=c[g];null!=Pf(a,e,h)&&(0!==f&&Qf(a,e,f),f=h)}(c=f)&&c!==b&&null!=d&&Qf(a,e,c);Qf(a,e,b,d)}
function Sf(a,b,c,d){a=a.A;var e=$e(a),f=Pf(a,e,c,d);b=Af(f,b,e);b!==f&&null!=b&&Qf(a,e,c,b,d);return b}
function Wf(a,b,c,d){d=void 0===d?!1:d;b=Sf(a,b,c,d);if(null==b)return b;a=a.A;var e=$e(a);if(!(e&2)){var f=Nf(b);f!==b&&(b=f,Qf(a,e,c,b,d))}return b}
function Xf(a,b,c,d){d=void 0===d?!1:d;var e=Xe(a),f=e|5;b=b?f|8:f&-9;b=c?b|16:b&-17;e!=b&&(c=b,Object.isFrozen(a)&&(a=Te(a)),Ye(a,c),!d&&b&2&&Object.freeze(a));return a}
function Yf(a,b,c,d){null!=d?zf(d,b):d=void 0;return K(a,c,d)}
function Zf(a,b,c,d){var e=a.A,f=$e(e);lf(f);if(null!=d){var g=!1,h=!0;if(!(Xe(d)&2)){g=!0;for(var k=0;k<d.length;k++){var l=d[k];zf(l,b);l=!!(Xe(l.A)&2);g=g&&!l;h=h&&l}}d=Xf(d,g,h)}null==d&&(d=void 0);Qf(e,f,c,d);return a}
function $f(a,b){a=Of(a,b);var c;null==a?c=a:rf(a)?"number"===typeof a?c=wf(a):c=vf(a):c=void 0;return c}
function ag(a){a=Of(a,1);a=null==a?a:rf(a)?"string"===typeof a?vf(a):wf(a):void 0;return a}
function bg(a){return hf(a,!1)}
function cg(a,b,c){null!=c&&(Number.isFinite(c)||mf());return K(a,b,c)}
;function dg(a,b,c){this.A=Df(a,b,c)}
m=dg.prototype;m.toJSON=function(){if(gf)var a=eg(this,this.A,!1);else a=Jf(this.A,Kf,void 0,void 0,!1,!1),a=eg(this,a,!0);return a};
m.serialize=function(){gf=!0;try{return JSON.stringify(this.toJSON(),Ff)}finally{gf=!1}};
m.clone=function(){var a=this.A,b=$e(a);return Cf(this.constructor,Mf(a,b,!1))};
m.Kc=ef;m.toString=function(){return eg(this,this.A,!1).toString()};
function eg(a,b,c){var d=a.constructor.Wa,e=$e(c?a.A:b),f=df(e);e=!1;if(d){if(!c){b=Te(b);var g;if(b.length&&ff(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=$e(a.A);a=df(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var n=g[k];null==n?g[k]=c?jf:af():c&&n!==jf&&We(n)}else h||(n=void 0,g.length&&ff(n=g[g.length-1])?h=n:g.push(h={})),n=h[k],null==h[k]?h[k]=c?jf:af():c&&n!==jf&&We(n)}d=b.length;if(!d)return b;var p;
if(ff(h=b[d-1])){a:{var t=h;g={};c=!1;for(var r in t)a=t[r],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[r]=a:c=!0;if(c){for(var x in g){t=g;break a}t=null}}t!=h&&(p=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!p&&!y)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);t&&b.push(t);return b}
;function fg(a){this.A=Df(a)}
w(fg,dg);var gg=[1,2,3];function hg(a){this.A=Df(a)}
w(hg,dg);var ig=[1,2,3];function jg(a){this.A=Df(a)}
w(jg,dg);jg.Wa=[1];function kg(a){this.A=Df(a)}
w(kg,dg);kg.Wa=[3,6,4];function lg(a){this.A=Df(a)}
w(lg,dg);lg.Wa=[1];function mg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ng(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],z=e[3],I=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var J=z^x&(y^z);var M=1518500249}else J=x^y^z,M=1859775393;else 60>r?(J=x&y|z&(x|y),M=2400959708):(J=x^y^z,M=3395469782);J=((p<<5|p>>>27)&4294967295)+J+I+M+t[r]&4294967295;I=z;z=y;y=(x<<30|x>>>2)&4294967295;x=p;p=J}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+I&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],x=0,y=p.length;x<y;++x)r.push(p.charCodeAt(x));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var x=24;0<=x;x-=8)p[t++]=e[r]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Xd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function og(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,pg(mg(d),a,c||null)].join(" "):null}
function pg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),qg(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=qg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function qg(a){var b=ng();b.update(a);return b.Xd().toLowerCase()}
;var rg={};function sg(a){this.h=a||{cookie:""}}
m=sg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Ob())return!0;this.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.cg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ic}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Hb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ic:0,path:b,domain:c});return d};
m.Dc=function(){return tg(this).keys};
m.Ob=function(){return!this.h.cookie};
m.clear=function(){for(var a=tg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function tg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Hb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ug=new sg("undefined"==typeof document?null:document);function vg(a){return!!rg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function wg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;vg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new sg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");vg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function xg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new sg(document)).get(b));return a?og(a,c,d):null}
function yg(a,b){b=void 0===b?!1:b;var c=mg(String(C.location.href)),d=[];if(wg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new sg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?og(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&vg(b)&&((b=xg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=xg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function zg(a){this.A=Df(a)}
w(zg,dg);zg.Wa=[2];function Ag(a){xd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Xa()};
this.j=this.i()}
w(Ag,xd);Ag.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Ag.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Ag.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Ag.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),yd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Bg(a){this.A=Df(a)}
w(Bg,dg);function Cg(a){this.A=Df(a)}
w(Cg,dg);function Dg(a){this.h=this.i=this.j=a}
Dg.prototype.reset=function(){this.h=this.i=this.j};
Dg.prototype.getValue=function(){return this.i};function Eg(a){this.A=Df(a)}
w(Eg,dg);function Fg(a){this.A=Df(a)}
w(Fg,dg);Fg.Wa=[1];function Tf(a){this.A=Df(a)}
w(Tf,dg);var Gg=["platform","platformVersion","architecture","model","uaFullVersion"];new Fg;function Hg(a){this.A=Df(a)}
w(Hg,dg);function Ig(a){this.A=Df(a)}
w(Ig,dg);function Jg(a){this.A=Df(a,34)}
w(Jg,dg);Jg.Wa=[3,20,27];function Kg(a){this.A=Df(a,19)}
w(Kg,dg);Kg.prototype.Tb=function(a){return cg(this,2,a)};
Kg.Wa=[3,5];function Lg(a){this.A=Df(a,6)}
w(Lg,dg);var Mg=function(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Ve(b,32);b=Cf(a,b)}return b}}(Lg);
Lg.Wa=[5];function Ng(a){this.A=Df(a)}
w(Ng,dg);var Og;Og=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Wf;this.defaultValue=void 0}(175237375,{Tf:0},Ng);function Pg(a){G.call(this);var b=this;this.componentId="";this.i=[];this.na="";this.Ba=this.ea=-1;this.ma=!1;this.D=this.experimentIds=null;this.Y=this.da=this.s=this.l=0;this.Ka=1;this.timeoutMillis=0;this.R=!1;this.logSource=a.logSource;this.ub=a.ub||function(){};
this.j=new Qg(a.logSource,a.yb);this.network=a.network;this.Fb=a.Fb||null;this.bufferSize=1E3;this.ob=Wa(Cd,0,1);this.W=a.gf||null;this.sessionIndex=a.sessionIndex||null;this.Mb=a.Mb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.hd;this.yb=a.yb||!1;var c=cg(new Hg,1,1);Rg(this.j,c);this.m=new Dg(1E4);this.h=new Ag(this.m.getValue());a=Sg(this,a.Yc);md(this.h,"tick",a,!1,this);this.S=new Ag(6E5);md(this.S,"tick",a,!1,this);this.Mb||this.S.start();this.yb||(md(document,"visibilitychange",
function(){"hidden"===document.visibilityState&&b.yc()}),md(document,"pagehide",this.yc,!1,this))}
w(Pg,G);function Sg(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=Pg.prototype;m.M=function(){this.yc();this.h.stop();this.S.stop();G.prototype.M.call(this)};
function Tg(a){a.W||(a.W=.01>a.ob()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.W}
function Ug(a,b){a.m=new Dg(1>b?1:b);a.h.setInterval(a.m.getValue())}
m.log=function(a){a=a.clone();var b=this.Ka++;a=K(a,21,uf(b));this.componentId&&K(a,26,yf(this.componentId));ag(a)||(b=Date.now(),b=Number.isFinite(b)?b.toString():"0",K(a,1,uf(b)));null==$f(a,15)&&K(a,15,uf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),Yf(a,zg,16,b));b=this.i.length-this.bufferSize+1;0<b&&(this.i.splice(0,b),this.l+=b);this.i.push(a);this.Mb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.i.length)a&&a();else if(this.R)Vg(this.j,3),Wg(this);else{var d=Date.now();if(this.Ba>d&&this.ea<d)b&&b("throttled");else{Vg(this.j,1);var e=Xg(this.j,this.i,this.l,this.s,this.Fb,this.da,this.Y);d={};var f=this.ub();f&&(d.Authorization=f);var g=Tg(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=oc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=oc(g,"pageId",this.pageId));if(f&&this.na===f)b&&b("stale-auth-token");
else{this.i=[];this.h.enabled&&this.h.stop();this.l=0;var h=e.serialize(),k;this.D&&this.D.isSupported(h.length)&&(k=this.D.compress(h));var l={url:g,body:h,Td:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.m.reset();c.h.setInterval(c.m.getValue());if(r){var x=null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));x=Mg(y)}catch(I){}if(x){r=Number;y="-1";y=void 0===y?"0":y;var z=ag(x);r=r(null!=z?z:y);0<r&&(c.ea=Date.now(),
c.Ba=c.ea+r);x=Og.ctor?Og.i(x,Og.ctor,Og.h,!0):Og.i(x,Og.h,null,!0);if(r=null===x?void 0:x)x=-1,x=void 0===x?0:x,r=tf(Of(r,1)),x=null!=r?r:x,-1!==x&&(c.ma||Ug(c,x))}}a&&a();c.s=0},p=function(r,x){var y=e.A,z=$e(y),I=!!(z&2);
var J=I?1:2,M=!!(z&2);var H=z&2;var O=Pf(y,z,3);Array.isArray(O)||(O=jf);var T=Xe(O);T&1||(T|=1,Ye(O,T));H?T&2||Ve(O,34):T&32&&!(T&2)&&Ze(O,32);H=O;if((O=H===jf)&&2!==J)y=H;else if(!O&&Xe(H)&4)3!==J&&(M?2===J&&(J=Xe(H),H=Te(H),Ye(H,J),Qf(y,z,3,H)):(M=Object.isFrozen(H),1===J?M||Object.freeze(H):(J=Xe(H),O=J&-33,M||J&2?(O&=-3,H=Te(H),Ye(H,O),Qf(y,z,3,H)):J!==O&&Ye(H,O)))),y=H;else{M=!!(z&2);T=!!(Xe(H)&2);O=H;!M&&T&&(H=Te(H));var Fa=T||void 0;T=z|(Fa?2:0);for(var ta=!1,la=0,ma=0;la<H.length;la++){var na=
Af(H[la],Jg,T);if(null!=na){var ic=!!(Xe(na.A)&2);Fa=Fa||ic;ta=ta||!ic;H[ma++]=na}}ma<la&&(H.length=ma);H=Xf(H,!Fa,!ta,!0);O!==H&&Qf(y,z,3,H);(M&&2!==J||1===J)&&Object.freeze(H);y=H}if(!(I||Xe(y)&8)){for(I=0;I<y.length;I++)z=y[I],J=Nf(z),z!==J&&(y[I]=J);Ve(y,8)}I=$f(e,14);z=c.m;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.h.setInterval(c.m.getValue());401===r&&f&&(c.na=f);I&&(c.l+=I);void 0===x&&(x=c.isRetryable(r));x&&(c.i=y.concat(c.i),c.Mb||c.h.enabled||
c.h.start());b&&b("net-send-failed",r);++c.s},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Oc["Content-Encoding"]="gzip";l.Oc["Content-Type"]="application/binary";l.body=r;l.Td=2;t()},function(){t()}):t()}}}};
m.yc=function(){Yg(this.j,!0);this.flush();Yg(this.j,!1)};
function Wg(a){Zg(a,function(b,c){b=oc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.R&&!d&&(a.R=!1);return d})}
function Zg(a,b){if(0!==a.i.length){var c=sc(Tg(a),"format");c=mc(c,"auth",a.ub(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.i.length;++d){var e=a.i.slice(0,32),f=Xg(a.j,e,a.l,a.s,a.Fb,a.da,a.Y);if(!b(c,f)){++a.s;break}a.l=0;a.s=0;a.da=0;a.Y=0;a.i=a.i.slice(e.length)}a.h.enabled&&a.h.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function Qg(a,b){this.yb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Kg;Number.isInteger(a)&&this.h.Tb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Rg(this,new Hg)}
Qg.prototype.Tb=function(a){this.h.Tb(a);return this};
function Rg(a,b){Yf(a.h,Hg,1,b);Of(b,1)||cg(b,1,1);if(!a.yb){b=$g(a);var c=Of(b,5);(null==c||"string"===typeof c)&&c||K(b,5,yf(a.locale))}a.uach&&(b=$g(a),Wf(b,Fg,9)||Yf(b,Fg,9,a.uach))}
function Vg(a,b){Rf(ah(a))&&(a=bh(a),cg(a,1,b))}
function Yg(a,b){Rf(ah(a))&&(a=bh(a),K(a,2,pf(b)))}
function ah(a){return Wf(a.h,Hg,1)}
function ch(a,b){var c=void 0===c?Gg:c;b(window,c).then(function(d){a.uach=d;d=$g(a);Yf(d,Fg,9,a.uach);return!0}).catch(function(){return!1})}
function $g(a){a=ah(a);var b=Wf(a,Tf,11);b||(b=new Tf,Yf(a,Tf,11,b));return b}
function bh(a){a=$g(a);var b=Wf(a,Eg,10);b||(b=new Eg,K(b,2,pf(!1)),Yf(a,Eg,10,b));return b}
function Xg(a,b,c,d,e,f,g){c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(Rf(ah(a))){var h=bh(a);K(h,3,sf(d))}Rf(ah(a))&&(d=bh(a),K(d,4,sf(f)));Rf(ah(a))&&(f=bh(a),K(f,5,sf(g)));a=a.h.clone();g=Date.now().toString();a=K(a,4,uf(g));b=Zf(a,Jg,3,b);e&&(a=new Bg,e=K(a,13,sf(e)),a=new Cg,e=Yf(a,Bg,2,e),a=new Ig,e=Yf(a,Cg,1,e),e=cg(e,2,9),Yf(b,Ig,18,e));c&&K(b,14,uf(c));return b}
;function dh(){}
dh.prototype.serialize=function(a){var b=[];eh(this,a,b);return b.join("")};
function eh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),eh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),fh(d,c),c.push(":"),eh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":fh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var gh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},hh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function fh(a,b){b.push('"',a.replace(hh,function(c){var d=gh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),gh[c]=d);return d}),'"')}
;function ih(){}
ih.prototype.h=null;ih.prototype.getOptions=function(){var a;(a=this.h)||(a={},jh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var kh;function lh(){}
Ya(lh,ih);function mh(a){return(a=jh(a))?new ActiveXObject(a):new XMLHttpRequest}
function jh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
kh=new lh;function nh(a){xd.call(this);this.headers=new Map;this.S=a||null;this.i=!1;this.R=this.I=null;this.l=this.da="";this.j=this.Y=this.s=this.W=!1;this.m=0;this.D=null;this.Ba="";this.ma=this.na=!1}
Ya(nh,xd);var oh=/^https?$/i,ph=["POST","PUT"],qh=[];function rh(a,b,c,d,e,f,g){var h=new nh;qh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Vd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.na=g);h.send(a,c,d,e)}
m=nh.prototype;m.Vd=function(){this.dispose();jb(qh,this)};
m.send=function(a,b,c,d){if(this.I)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.I=this.S?mh(this.S):mh(kh);this.R=this.S?this.S.getOptions():kh.getOptions();this.I.onreadystatechange=Va(this.sd,this);try{this.getStatus(),this.Y=!0,this.I.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();sh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=db(ph,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.I.setRequestHeader(d,c);this.Ba&&(this.I.responseType=this.Ba);"withCredentials"in this.I&&this.I.withCredentials!==this.na&&(this.I.withCredentials=this.na);try{th(this),0<this.m&&(this.ma=uh(this.I),this.getStatus(),this.ma?(this.I.timeout=this.m,this.I.ontimeout=Va(this.Gd,
this)):this.D=le(this.Gd,this.m,this)),this.getStatus(),this.s=!0,this.I.send(a),this.s=!1}catch(g){this.getStatus(),sh(this,g)}};
function uh(a){return Mc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Gd=function(){"undefined"!=typeof Ma&&this.I&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),yd(this,"timeout"),this.abort(8))};
function sh(a,b){a.i=!1;a.I&&(a.j=!0,a.I.abort(),a.j=!1);a.l=b;vh(a);wh(a)}
function vh(a){a.W||(a.W=!0,yd(a,"complete"),yd(a,"error"))}
m.abort=function(){this.I&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.I.abort(),this.j=!1,yd(this,"complete"),yd(this,"abort"),wh(this))};
m.M=function(){this.I&&(this.i&&(this.i=!1,this.j=!0,this.I.abort(),this.j=!1),wh(this,!0));nh.Aa.M.call(this)};
m.sd=function(){this.Z()||(this.Y||this.s||this.j?xh(this):this.Be())};
m.Be=function(){xh(this)};
function xh(a){if(a.i&&"undefined"!=typeof Ma)if(a.R[1]&&4==yh(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==yh(a))le(a.sd,0,a);else if(yd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(zh(a))yd(a,"complete"),yd(a,"success");else{try{var b=2<yh(a)?a.I.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";vh(a)}}finally{wh(a)}}}
function wh(a,b){if(a.I){th(a);var c=a.I,d=a.R[0]?function(){}:null;
a.I=null;a.R=null;b||yd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function th(a){a.I&&a.ma&&(a.I.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.I};
m.isComplete=function(){return 4==yh(this)};
function zh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=cc(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!oh.test(a?a.toLowerCase():"");c=b}return c}
function yh(a){return a.I?a.I.readyState:0}
m.getStatus=function(){try{return 2<yh(this)?this.I.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Ah(){}
Ah.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
rh(a.url,function(d){d=d.target;if(zh(d)){try{var e=d.I?d.I.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)};function Bh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Ah}
w(Bh,G);Bh.prototype.hd=function(){this.W=!0;return this};function Ch(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);f?a=f:(a=new Bh(a,"0"),a.componentId=b,zc(this,a),""!=c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),b=new Pg({logSource:a.logSource,ub:a.ub?a.ub:yg,sessionIndex:a.sessionIndex,gf:a.i,yb:a.j,Mb:!1,hd:a.W,pageId:a.pageId,Yc:a.Yc,network:a.network?a.network:void 0}),zc(a,b),a.s&&Rg(b.j,a.s),a.h&&(c=a.h,d=$g(b.j),K(d,7,yf(c))),a.m&&(b.D=a.m),a.componentId&&(b.componentId=a.componentId),
a.Fb&&(b.Fb=a.Fb),a.l&&((c=a.l)?(b.experimentIds||(b.experimentIds=new zg),c=c.serialize(),K(b.experimentIds,4,yf(c))):b.experimentIds&&K(b.experimentIds,4)),a.R&&(c=a.R,b.experimentIds||(b.experimentIds=new zg),Uf(b.experimentIds,2,c,bg)),a.D&&(c=a.D,b.ma=!0,Ug(b,c)),a.S&&ch(b.j,a.S),a.network.Tb&&a.network.Tb(a.logSource),a.network.Ve&&a.network.Ve(b),a=b);this.h=a}
w(Ch,G);
Ch.prototype.flush=function(a){var b=a||[];if(b.length){a=new lg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new kg;g=K(g,1,yf(f.i));for(var h=f,k=[],l=0;l<h.h.length;l++)k.push(h.h[l].sb);g=Uf(g,3,k,xf);h=[];k=[];l=v(f.qb.keys());for(var n=l.next();!n.done;n=l.next())k.push(n.value.split(","));for(l=0;l<k.length;l++){n=k[l];var p=f.l;for(var t=f.Ac(n)||[],r=[],x=0;x<t.length;x++){var y=t[x],z=y&&y.dd;y=new hg;switch(p){case 3:var I=Number(z);Number.isFinite(I)&&Vf(y,1,ig,uf(I));break;case 2:I=
y;z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);Vf(I,2,ig,z)}r.push(y)}p=r;for(t=0;t<p.length;t++){r=p[t];x=new jg;r=Yf(x,hg,2,r);x=n;y=[];I=f;z=[];for(var J=0;J<I.h.length;J++)z.push(I.h[J].tb);I=z;for(z=0;z<I.length;z++){var M=I[z],H=x[z];J=new fg;switch(M){case 3:Vf(J,1,gg,yf(String(H)));break;case 2:M=Number(H);Number.isFinite(M)&&Vf(J,2,gg,sf(M));break;case 1:Vf(J,3,gg,pf("true"==H))}y.push(J)}Zf(r,fg,1,y);h.push(r)}}Zf(g,
jg,4,h);c.push(g);e.clear()}Zf(a,kg,1,c);b=this.h;a instanceof Jg?b.log(a):(c=new Jg,a=a.serialize(),a=K(c,8,yf(a)),b.log(a));this.h.flush()}};function Dh(a){this.s=Eh();this.m=new Ch(1828);this.h=new me(this.m);this.G=new se(this.h);this.j=new te(this.h);this.l=new ue(this.h);this.i=new qe(this.h);this.Ra=we(a)}
function Eh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Fh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Gh(a){function b(r,x){Promise.resolve().then(function(){var y;null!=(y=c.va)&&y.G.record(Eh()-y.s,y.Ra);g.resolve({Rd:r,Ye:x})})}
var c=this;this.h=!1;var d=a.program;var e=a.ke;if(!1!==a.He){var f;this.va=null!=(f=a.va)?f:new Dh(e)}var g=new Fh;this.i=g.promise;if(!C[e]){var h;null!=(h=this.va)&&re(h.i,h.Ra,1,"");var k;null!=(k=this.va)&&k.h.nb()}else if(!C[e].a){var l;null!=(l=this.va)&&re(l.i,l.Ra,2,"");var n;null!=(n=this.va)&&n.h.nb()}try{this.j=v((0,C[e].a)(d,b,!0,a.jg)).next().value,this.Xe=g.promise.then(function(){})}catch(r){var p;
null!=(p=this.va)&&re(p.i,p.Ra,4,r.message);var t;null!=(t=this.va)&&t.h.nb();throw r;}}
Gh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=Eh(),d;null!=(d=this.va)&&d.j.h.uc("/client_streamz/bg/fsc",d.Ra);return this.i.then(function(e){var f=e.Rd;return new Promise(function(g){f(function(h){var k;null!=(k=b.va)&&k.l.record(Eh()-c,k.Ra);g(h)},[a.gd,
a.Ze,a.jf])})})};
Gh.prototype.Dd=function(a){if(this.h)throw Error("Already disposed");var b=Eh(),c;null!=(c=this.va)&&c.j.h.uc("/client_streamz/bg/fsc",c.Ra);a=this.j([a.gd,a.Ze,a.jf]);var d;null!=(d=this.va)&&d.l.record(Eh()-b,d.Ra);return a};
Gh.prototype.dispose=function(){var a;null!=(a=this.va)&&a.h.nb();this.h=!0;this.i.then(function(b){(b=b.Ye)&&b()})};
Gh.prototype.Z=function(){return this.h};var Hh=window;zb("csi.gstatic.com");zb("googleads.g.doubleclick.net");zb("partner.googleadservices.com");zb("pubads.g.doubleclick.net");zb("securepubads.g.doubleclick.net");zb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ih="function"===typeof URL;function Jh(a){if(a instanceof Ib)a instanceof Ib&&a.constructor===Ib?a=a.h:(Na(a),a="type_error:SafeUrl");else{b:if(Ih){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function Kh(a,b){b=Jh(b);void 0!==b&&(a.href=b)}
;var Lh={};function Mh(){}
function Nh(a){this.h=a}
w(Nh,Mh);Nh.prototype.toString=function(){return this.h};function Oh(a){var b="true".toString(),c=[new Nh(Ph[0].toLowerCase(),Lh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Nh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Qh(){throw Error("unknown trace type");}
;var Rh="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Sh(a,b){if(b instanceof Db)a.href=Eb(b).toString();else{if(-1===Rh.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Jh(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function Th(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Uh(a,b){a.src=Eb(b);Th(a)}
;var Vh=fa([""]),Wh=ha(["\x00"],["\\0"]),Xh=ha(["\n"],["\\n"]),Yh=ha(["\x00"],["\\u0000"]);function Zh(a){return-1===a.toString().indexOf("`")}
Zh(function(a){return a(Vh)})||Zh(function(a){return a(Wh)})||Zh(function(a){return a(Xh)})||Zh(function(a){return a(Yh)});function $h(a){this.te=a}
function ai(a){return new $h(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var bi=[ai("data"),ai("http"),ai("https"),ai("mailto"),ai("ftp"),new $h(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function ci(a){var b=di;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ei(){var a=[];ci(function(b){a.push(b)});
return a}
var di={kf:"allow-forms",lf:"allow-modals",mf:"allow-orientation-lock",nf:"allow-pointer-lock",pf:"allow-popups",qf:"allow-popups-to-escape-sandbox",rf:"allow-presentation",sf:"allow-same-origin",tf:"allow-scripts",uf:"allow-top-navigation",vf:"allow-top-navigation-by-user-activation"},fi=cb(function(){return ei()});
function gi(){var a=hi(),b={};eb(fi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function hi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function ii(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ji=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var ki="undefined"!==typeof TextEncoder?new TextEncoder:null,li=ki?function(a){return ki.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function mi(a){xd.call(this);var b=this;this.s=this.j=0;this.Ea=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(ni(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.s||oi(this)}
w(mi,xd);function pi(){var a=qi;mi.h||(mi.h=new mi(a));return mi.h}
mi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Ea.qa(this.s);delete mi.h};
mi.prototype.wa=function(){return this.i};
function oi(a){a.s=a.Ea.oa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(ni(a),3):c.yield(ni(a),3);oi(a);c.h=0})},3E4)}
function ni(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Ea.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.D=[h.j];h.l=0;h.G=0;a.m=void 0;a.j&&(a.Ea.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?yd(a,"networkstatus-online"):yd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.v(3)}})})}
;function ri(){this.data=[];this.h=-1}
ri.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
ri.prototype.get=function(a){return!!this.data[a]};
function si(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function ti(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
ti.prototype[Symbol.iterator]=function(){return this};
ti.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function ui(a,b){return new ti(a,b)}
;function vi(){this.blockSize=-1}
;function wi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.G=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Ya(wi,vi);wi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function xi(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
wi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)xi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){xi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){xi(this,e);f=0;break}}this.i=f;this.l+=b}};
wi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;xi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function yi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function zi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ai(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:yi(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Bi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ai(a,"inverted-hdpi")&&zi(a,Array.prototype.filter.call(a.classList?a.classList:yi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ci(){}
Ci.prototype.next=function(){return Di};
var Di={done:!0,value:void 0};function Ei(a){return{value:a,done:!1}}
Ci.prototype.Ga=function(){return this};function Fi(a){if(a instanceof Gi||a instanceof Hi||a instanceof Ii)return a;if("function"==typeof a.next)return new Gi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Gi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Gi(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Gi(a){this.i=a}
Gi.prototype.Ga=function(){return new Hi(this.i())};
Gi.prototype[Symbol.iterator]=function(){return new Ii(this.i())};
Gi.prototype.h=function(){return new Ii(this.i())};
function Hi(a){this.i=a}
w(Hi,Ci);Hi.prototype.next=function(){return this.i.next()};
Hi.prototype[Symbol.iterator]=function(){return new Ii(this.i)};
Hi.prototype.h=function(){return new Ii(this.i)};
function Ii(a){Gi.call(this,function(){return a});
this.j=a}
w(Ii,Gi);Ii.prototype.next=function(){return this.j.next()};function Ji(a,b){this.i={};this.h=[];this.Ya=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ji)for(c=a.Dc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Ji.prototype;m.Dc=function(){Ki(this);return this.h.concat()};
m.has=function(a){return Li(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Mi;Ki(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Mi(a,b){return a===b}
m.Ob=function(){return 0==this.size};
m.clear=function(){this.i={};this.Ya=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Li(this.i,a)?(delete this.i[a],--this.size,this.Ya++,this.h.length>2*this.size&&Ki(this),!0):!1};
function Ki(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Li(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Li(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Li(this.i,a)?this.i[a]:b};
m.set=function(a,b){Li(this.i,a)||(this.size+=1,this.h.push(a),this.Ya++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Dc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Ji(this)};
m.keys=function(){return Fi(this.Ga(!0)).h()};
m.values=function(){return Fi(this.Ga(!1)).h()};
m.entries=function(){var a=this;return ui(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){Ki(this);var b=0,c=this.Ya,d=this,e=new Ci;e.next=function(){if(c!=d.Ya)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Di;var f=d.h[b++];return Ei(a?f:d.i[f])};
return e};
function Li(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function L(a){G.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.s=!!a}
Ya(L,G);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Hb(a)}return!1};
m.Hb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&jb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.ab=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Ni(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Hb(c)}}return 0!=e}return!1};
function Ni(a,b,c){Rd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Hb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.M=function(){L.Aa.M.call(this);this.clear();this.j.length=0};function Oi(a){this.h=a}
Oi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new dh).serialize(b))};
Oi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Oi.prototype.remove=function(a){this.h.remove(a)};function Pi(a){this.h=a}
Ya(Pi,Oi);function Qi(a){this.data=a}
function Ri(a){return void 0===a||a instanceof Qi?a:new Qi(a)}
Pi.prototype.set=function(a,b){Pi.Aa.set.call(this,a,Ri(b))};
Pi.prototype.i=function(a){a=Pi.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Pi.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Si(a){this.h=a}
Ya(Si,Pi);Si.prototype.set=function(a,b,c){if(b=Ri(b)){if(c){if(c<Xa()){Si.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}Si.Aa.set.call(this,a,b)};
Si.prototype.i=function(a){var b=Si.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())Si.prototype.remove.call(this,a);else return b}};function Ti(){}
;function Ui(){}
Ya(Ui,Ti);Ui.prototype[Symbol.iterator]=function(){return Fi(this.Ga(!0)).h()};
Ui.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Vi(a){this.h=a}
Ya(Vi,Ui);m=Vi.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Ga=function(a){var b=0,c=this.h,d=new Ci;d.next=function(){if(b>=c.length)return Di;var e=c.key(b++);if(a)return Ei(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ei(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Wi(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Ya(Wi,Vi);function Xi(a,b){this.i=a;this.h=null;var c;if(c=Mc)c=!(9<=Number($c));if(c){Yi||(Yi=new Ji);this.h=Yi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Yi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Ya(Xi,Ui);var Zi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Yi=null;function $i(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Zi[b]})}
m=Xi.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute($i(a),b);aj(this)};
m.get=function(a){a=this.h.getAttribute($i(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute($i(a));aj(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ci;d.next=function(){if(b>=c.length)return Di;var e=c[b++];if(a)return Ei(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ei(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);aj(this)};
function aj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function bj(a,b){this.i=a;this.h=b+"::"}
Ya(bj,Ui);bj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
bj.prototype.get=function(a){return this.i.get(this.h+a)};
bj.prototype.remove=function(a){this.i.remove(this.h+a)};
bj.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ci;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ei(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},cj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var dj={pb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
kd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},ej={pb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
kd:function(a){return[].concat.apply([],a)}};
N.We=function(){cj?(N.mb=Uint8Array,N.Ja=Uint16Array,N.Md=Int32Array,N.assign(N,dj)):(N.mb=Array,N.Ja=Array,N.Md=Array,N.assign(N,ej))};
N.We();var fj=!0;try{new Uint8Array(1)}catch(a){fj=!1}
function gj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.mb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var hj={};hj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ij={},jj,kj=[],lj=0;256>lj;lj++){jj=lj;for(var mj=0;8>mj;mj++)jj=jj&1?3988292384^jj>>>1:jj>>>1;kj[lj]=jj}ij=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^kj[(a^b[d])&255];return a^-1};var nj={};nj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function oj(a){for(var b=a.length;0<=--b;)a[b]=0}
var pj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],qj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],rj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],sj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],tj=Array(576);oj(tj);var uj=Array(60);oj(uj);var vj=Array(512);oj(vj);var wj=Array(256);oj(wj);var xj=Array(29);oj(xj);var yj=Array(30);oj(yj);function zj(a,b,c,d,e){this.Ed=a;this.de=b;this.ce=c;this.Yd=d;this.ye=e;this.nd=a&&a.length}
var Aj,Bj,Cj;function Dj(a,b){this.jd=a;this.Cb=0;this.Xa=b}
function Ej(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function Fj(a,b,c){a.fa>16-c?(a.ka|=b<<a.fa&65535,Ej(a,a.ka),a.ka=b>>16-a.fa,a.fa+=c-16):(a.ka|=b<<a.fa&65535,a.fa+=c)}
function Gj(a,b,c){Fj(a,c[2*b],c[2*b+1])}
function Hj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Ij(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Hj(d[e]++,e))}
function Jj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.cb[2*b]=0;for(b=0;19>b;b++)a.ga[2*b]=0;a.ra[512]=1;a.Qa=a.Gb=0;a.ya=a.matches=0}
function Kj(a){8<a.fa?Ej(a,a.ka):0<a.fa&&(a.V[a.pending++]=a.ka);a.ka=0;a.fa=0}
function Lj(a,b,c){Kj(a);Ej(a,c);Ej(a,~c);N.pb(a.V,a.window,b,c,a.pending);a.pending+=c}
function Mj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Nj(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.Oa;){e<a.Oa&&Mj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Mj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function Oj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.V[a.Lb+2*d]<<8|a.V[a.Lb+2*d+1];var f=a.V[a.Hc+d];d++;if(0===e)Gj(a,f,b);else{var g=wj[f];Gj(a,g+256+1,b);var h=pj[g];0!==h&&(f-=xj[g],Fj(a,f,h));e--;g=256>e?vj[e]:vj[256+(e>>>7)];Gj(a,g,c);h=qj[g];0!==h&&(e-=yj[g],Fj(a,e,h))}}while(d<a.ya)}Gj(a,256,b)}
function Pj(a,b){var c=b.jd,d=b.Xa.Ed,e=b.Xa.nd,f=b.Xa.Yd,g,h=-1;a.Oa=0;a.wb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.Oa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Oa;){var k=a.X[++a.Oa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Qa--;e&&(a.Gb-=d[2*k+1])}b.Cb=h;for(g=a.Oa>>1;1<=g;g--)Nj(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.Oa--],Nj(a,c,1),d=a.X[1],a.X[--a.wb]=g,a.X[--a.wb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Nj(a,c,1);while(2<=a.Oa);a.X[--a.wb]=
a.X[1];g=b.jd;k=b.Cb;d=b.Xa.Ed;e=b.Xa.nd;f=b.Xa.de;var l=b.Xa.ce,n=b.Xa.ye,p,t=0;for(p=0;15>=p;p++)a.La[p]=0;g[2*a.X[a.wb]+1]=0;for(b=a.wb+1;573>b;b++){var r=a.X[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.La[p]++;var x=0;r>=l&&(x=f[r-l]);var y=g[2*r];a.Qa+=y*(p+x);e&&(a.Gb+=y*(d[2*r+1]+x))}}if(0!==t){do{for(p=n-1;0===a.La[p];)p--;a.La[p]--;a.La[p+1]+=2;a.La[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.La[p];0!==r;)d=a.X[--b],d>k||(g[2*d+1]!==p&&(a.Qa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}Ij(c,h,a.La)}
function Qj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ga[2*l]+=g:0!==l?(l!==e&&a.ga[2*l]++,a.ga[32]++):10>=g?a.ga[34]++:a.ga[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Rj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Gj(a,l,a.ga);while(0!==--g)}else 0!==l?(l!==e&&(Gj(a,l,a.ga),g--),Gj(a,16,a.ga),Fj(a,g-3,2)):10>=g?(Gj(a,17,a.ga),Fj(a,g-3,3)):(Gj(a,18,a.ga),Fj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Sj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var Tj=!1;function Uj(a,b,c){a.V[a.Lb+2*a.ya]=b>>>8&255;a.V[a.Lb+2*a.ya+1]=b&255;a.V[a.Hc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(wj[c]+256+1)]++,a.cb[2*(256>b?vj[b]:vj[256+(b>>>7)])]++);return a.ya===a.Pb-1}
;function Vj(a,b){a.msg=nj[b];return b}
function Wj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Xj(a){var b=a.state,c=b.pending;c>a.K&&(c=a.K);0!==c&&(N.pb(a.output,b.V,b.Rb,c,a.Db),a.Db+=c,b.Rb+=c,a.Sc+=c,a.K-=c,b.pending-=c,0===b.pending&&(b.Rb=0))}
function Yj(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.H.xc&&(a.H.xc=Sj(a));Pj(a,a.hc);Pj(a,a.cc);Qj(a,a.ra,a.hc.Cb);Qj(a,a.cb,a.cc.Cb);Pj(a,a.Zc);for(e=18;3<=e&&0===a.ga[2*sj[e]+1];e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.Gb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Fj(a,b?1:0,3),Lj(a,c,d);else if(4===a.strategy||g===f)Fj(a,2+(b?1:0),3),Oj(a,tj,uj);else{Fj(a,4+(b?1:0),3);c=a.hc.Cb+1;d=a.cc.Cb+1;e+=1;Fj(a,c-257,5);Fj(a,d-1,5);Fj(a,e-4,4);for(f=0;f<e;f++)Fj(a,a.ga[2*
sj[f]+1],3);Rj(a,a.ra,c-1);Rj(a,a.cb,d-1);Oj(a,a.ra,a.cb)}Jj(a);b&&Kj(a);a.ta=a.o;Xj(a.H)}
function P(a,b){a.V[a.pending++]=b}
function Zj(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function ak(a,b){var c=a.qd,d=a.o,e=a.xa,f=a.rd,g=a.o>a.ia-262?a.o-(a.ia-262):0,h=a.window,k=a.Za,l=a.Ia,n=a.o+258,p=h[d+e-1],t=h[d+e];a.xa>=a.md&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.Bb=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function bk(a){var b=a.ia,c;do{var d=a.Kd-a.u-a.o;if(a.o>=b+(b-262)){N.pb(a.window,a.window,b,b,0);a.Bb-=b;a.o-=b;a.ta-=b;var e=c=a.fc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.H.ja)break;e=a.H;c=a.window;f=a.o+a.u;var g=e.ja;g>d&&(g=d);0===g?c=0:(e.ja-=g,N.pb(c,e.input,e.ib,g,f),1===e.state.wrap?e.F=hj(e.F,c,g,f):2===e.state.wrap&&(e.F=ij(e.F,c,g,f)),e.ib+=g,e.lb+=g,c=g);a.u+=c;if(3<=a.u+a.sa)for(d=a.o-a.sa,a.J=a.window[d],
a.J=(a.J<<a.Na^a.window[d+1])&a.Ma;a.sa&&!(a.J=(a.J<<a.Na^a.window[d+3-1])&a.Ma,a.Ia[d&a.Za]=a.head[a.J],a.head[a.J]=d,d++,a.sa--,3>a.u+a.sa););}while(262>a.u&&0!==a.H.ja)}
function ck(a,b){for(var c;;){if(262>a.u){bk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Na^a.window[a.o+3-1])&a.Ma,c=a.Ia[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ia-262&&(a.P=ak(a,c));if(3<=a.P)if(c=Uj(a,a.o-a.Bb,a.P-3),a.u-=a.P,a.P<=a.Ic&&3<=a.u){a.P--;do a.o++,a.J=(a.J<<a.Na^a.window[a.o+3-1])&a.Ma,a.Ia[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.J=a.window[a.o],a.J=(a.J<<a.Na^a.window[a.o+1])&a.Ma;else c=Uj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Yj(a,!1),0===a.H.K))return 1}a.sa=2>a.o?a.o:2;return 4===b?(Yj(a,!0),0===a.H.K?3:4):a.ya&&(Yj(a,!1),0===a.H.K)?1:2}
function dk(a,b){for(var c,d;;){if(262>a.u){bk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Na^a.window[a.o+3-1])&a.Ma,c=a.Ia[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);a.xa=a.P;a.ud=a.Bb;a.P=2;0!==c&&a.xa<a.Ic&&a.o-c<=a.ia-262&&(a.P=ak(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.Bb)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=Uj(a,a.o-1-a.ud,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.J=(a.J<<a.Na^a.window[a.o+3-1])&a.Ma,a.Ia[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.xa);a.gb=0;a.P=2;a.o++;if(c&&(Yj(a,!1),0===a.H.K))return 1}else if(a.gb){if((c=Uj(a,0,a.window[a.o-1]))&&Yj(a,!1),a.o++,a.u--,0===a.H.K)return 1}else a.gb=1,a.o++,a.u--}a.gb&&(Uj(a,0,a.window[a.o-1]),a.gb=0);a.sa=2>a.o?a.o:2;return 4===b?(Yj(a,!0),0===a.H.K?3:4):a.ya&&(Yj(a,!1),0===a.H.K)?1:2}
function ek(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){bk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=Uj(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=Uj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Yj(a,!1),0===a.H.K))return 1}a.sa=0;return 4===b?(Yj(a,!0),0===a.H.K?3:4):
a.ya&&(Yj(a,!1),0===a.H.K)?1:2}
function fk(a,b){for(var c;;){if(0===a.u&&(bk(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=Uj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Yj(a,!1),0===a.H.K))return 1}a.sa=0;return 4===b?(Yj(a,!0),0===a.H.K?3:4):a.ya&&(Yj(a,!1),0===a.H.K)?1:2}
function gk(a,b,c,d,e){this.le=a;this.xe=b;this.Ae=c;this.we=d;this.ge=e}
var hk;hk=[new gk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){bk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Yj(a,!1),0===a.H.K)return 1;if(a.o-a.ta>=a.ia-262&&(Yj(a,!1),0===a.H.K))return 1}a.sa=0;if(4===b)return Yj(a,!0),0===a.H.K?3:4;a.o>a.ta&&Yj(a,!1);return 1}),
new gk(4,4,8,4,ck),new gk(4,5,16,8,ck),new gk(4,6,32,32,ck),new gk(4,4,16,16,dk),new gk(8,16,32,32,dk),new gk(8,16,128,128,dk),new gk(8,32,128,256,dk),new gk(32,128,258,1024,dk),new gk(32,258,258,4096,dk)];
function ik(){this.H=null;this.status=0;this.V=null;this.wrap=this.pending=this.Rb=this.za=0;this.B=null;this.Ca=0;this.method=8;this.zb=-1;this.Za=this.Uc=this.ia=0;this.window=null;this.Kd=0;this.head=this.Ia=null;this.rd=this.md=this.strategy=this.level=this.Ic=this.qd=this.xa=this.u=this.Bb=this.o=this.gb=this.ud=this.P=this.ta=this.Na=this.Ma=this.Ec=this.fc=this.J=0;this.ra=new N.Ja(1146);this.cb=new N.Ja(122);this.ga=new N.Ja(78);Wj(this.ra);Wj(this.cb);Wj(this.ga);this.Zc=this.cc=this.hc=
null;this.La=new N.Ja(16);this.X=new N.Ja(573);Wj(this.X);this.wb=this.Oa=0;this.depth=new N.Ja(573);Wj(this.depth);this.fa=this.ka=this.sa=this.matches=this.Gb=this.Qa=this.Lb=this.ya=this.Pb=this.Hc=0}
function jk(a,b){if(!a||!a.state||5<b||0>b)return a?Vj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ja||666===c.status&&4!==b)return Vj(a,0===a.K?-5:-2);c.H=a;var d=c.zb;c.zb=b;if(42===c.status)if(2===c.wrap)a.F=0,P(c,31),P(c,139),P(c,8),c.B?(P(c,(c.B.text?1:0)+(c.B.Ua?2:0)+(c.B.Ta?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),P(c,c.B.time&255),P(c,c.B.time>>8&255),P(c,c.B.time>>16&255),P(c,c.B.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.B.os&255),c.B.Ta&&c.B.Ta.length&&
(P(c,c.B.Ta.length&255),P(c,c.B.Ta.length>>8&255)),c.B.Ua&&(a.F=ij(a.F,c.V,c.pending,0)),c.Ca=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Zj(c,e+(31-e%31));0!==c.o&&(Zj(c,a.F>>>16),Zj(c,a.F&65535));a.F=1}if(69===c.status)if(c.B.Ta){for(e=c.pending;c.Ca<(c.B.Ta.length&65535)&&(c.pending!==c.za||(c.B.Ua&&
c.pending>e&&(a.F=ij(a.F,c.V,c.pending-e,e)),Xj(a),e=c.pending,c.pending!==c.za));)P(c,c.B.Ta[c.Ca]&255),c.Ca++;c.B.Ua&&c.pending>e&&(a.F=ij(a.F,c.V,c.pending-e,e));c.Ca===c.B.Ta.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.za&&(c.B.Ua&&c.pending>e&&(a.F=ij(a.F,c.V,c.pending-e,e)),Xj(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.B.name.length?c.B.name.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.F=ij(a.F,
c.V,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.za&&(c.B.Ua&&c.pending>e&&(a.F=ij(a.F,c.V,c.pending-e,e)),Xj(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.B.comment.length?c.B.comment.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.F=ij(a.F,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ua?(c.pending+2>c.za&&Xj(a),c.pending+2<=c.za&&(P(c,a.F&255),P(c,a.F>>
8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(Xj(a),0===a.K)return c.zb=-1,0}else if(0===a.ja&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Vj(a,-5);if(666===c.status&&0!==a.ja)return Vj(a,-5);if(0!==a.ja||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?fk(c,b):3===c.strategy?ek(c,b):hk[c.level].ge(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.K&&(c.zb=-1),0;if(2===d&&(1===b?(Fj(c,2,3),Gj(c,256,tj),16===c.fa?(Ej(c,c.ka),c.ka=0,c.fa=0):8<=c.fa&&(c.V[c.pending++]=
c.ka&255,c.ka>>=8,c.fa-=8)):5!==b&&(Fj(c,0,3),Lj(c,0,0),3===b&&(Wj(c.head),0===c.u&&(c.o=0,c.ta=0,c.sa=0))),Xj(a),0===a.K))return c.zb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.F&255),P(c,a.F>>8&255),P(c,a.F>>16&255),P(c,a.F>>24&255),P(c,a.lb&255),P(c,a.lb>>8&255),P(c,a.lb>>16&255),P(c,a.lb>>24&255)):(Zj(c,a.F>>>16),Zj(c,a.F&65535));Xj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var kk={};kk=function(){this.input=null;this.lb=this.ja=this.ib=0;this.output=null;this.Sc=this.K=this.Db=0;this.msg="";this.state=null;this.xc=2;this.F=0};var lk=Object.prototype.toString;
function mk(a){if(!(this instanceof mk))return new mk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.H=new kk;this.H.K=0;var b=this.H;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Vj(b,-2);else{8===e&&(e=9);var k=new ik;b.state=k;k.H=b;k.wrap=h;k.B=null;k.Uc=e;k.ia=1<<k.Uc;k.Za=k.ia-1;k.Ec=f+7;k.fc=1<<k.Ec;k.Ma=k.fc-1;k.Na=~~((k.Ec+3-1)/3);k.window=new N.mb(2*k.ia);k.head=new N.Ja(k.fc);k.Ia=new N.Ja(k.ia);k.Pb=1<<f+6;k.za=4*k.Pb;k.V=new N.mb(k.za);k.Lb=1*k.Pb;k.Hc=3*k.Pb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.lb=b.Sc=0;b.xc=2;c=b.state;c.pending=0;c.Rb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.zb=0;if(!Tj){d=Array(16);for(f=g=0;28>f;f++)for(xj[f]=g,e=0;e<1<<pj[f];e++)wj[g++]=f;wj[g-1]=f;for(f=g=0;16>f;f++)for(yj[f]=g,e=0;e<1<<qj[f];e++)vj[g++]=f;for(g>>=7;30>f;f++)for(yj[f]=g<<7,e=0;e<1<<qj[f]-7;e++)vj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)tj[2*e+1]=8,e++,d[8]++;for(;255>=e;)tj[2*e+1]=9,e++,d[9]++;for(;279>=e;)tj[2*e+1]=7,e++,d[7]++;for(;287>=e;)tj[2*e+1]=8,e++,d[8]++;Ij(tj,287,d);for(e=0;30>e;e++)uj[2*e+1]=5,uj[2*e]=Hj(e,5);Aj=new zj(tj,pj,257,286,15);Bj=new zj(uj,
qj,0,30,15);Cj=new zj([],rj,0,19,7);Tj=!0}c.hc=new Dj(c.ra,Aj);c.cc=new Dj(c.cb,Bj);c.Zc=new Dj(c.ga,Cj);c.ka=0;c.fa=0;Jj(c);c=0}else c=Vj(b,-2);0===c&&(b=b.state,b.Kd=2*b.ia,Wj(b.head),b.Ic=hk[b.level].xe,b.md=hk[b.level].le,b.rd=hk[b.level].Ae,b.qd=hk[b.level].we,b.o=0,b.ta=0,b.u=0,b.sa=0,b.P=b.xa=2,b.gb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(nj[b]);a.header&&(b=this.H)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=gj(a.dictionary):
"[object ArrayBuffer]"===lk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.H;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=hj(a.F,f,g,0));l.wrap=0;g>=l.ia&&(0===b&&(Wj(l.head),l.o=0,l.ta=0,l.sa=0),c=new N.mb(l.ia),N.pb(c,f,g-l.ia,l.ia,0),f=c,g=l.ia);c=a.ja;d=a.ib;e=a.input;a.ja=g;a.ib=0;a.input=f;for(bk(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.Na^l.window[f+3-1])&l.Ma,l.Ia[f&l.Za]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;bk(l)}l.o+=l.u;l.ta=l.o;l.sa=l.u;l.u=0;l.P=l.xa=2;l.gb=0;a.ib=d;a.input=e;a.ja=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(nj[b]);this.Lf=!0}}
mk.prototype.push=function(a,b){var c=this.H,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=gj(a):"[object ArrayBuffer]"===lk.call(a)?c.input=new Uint8Array(a):c.input=a;c.ib=0;c.ja=c.input.length;do{0===c.K&&(c.output=new N.mb(d),c.Db=0,c.K=d);a=jk(c,e);if(1!==a&&0!==a)return nk(this,a),this.ended=!0,!1;if(0===c.K||0===c.ja&&(4===e||2===e))if("string"===this.options.to){var f=N.Rc(c.output,c.Db);b=f;f=f.length;if(65537>f&&(b.subarray&&fj||!b.subarray))b=
String.fromCharCode.apply(null,N.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Rc(c.output,c.Db),this.chunks.push(b)}while((0<c.ja||0===c.K)&&1!==a);if(4===e)return(c=this.H)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Vj(c,-2):(c.state=null,a=113===d?Vj(c,-3):0)):a=-2,nk(this,a),this.ended=!0,0===a;2===e&&(nk(this,0),c.K=0);return!0};
function nk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):N.kd(a.chunks));a.chunks=[];a.err=b;a.msg=a.H.msg}
function ok(a,b){b=b||{};b.gzip=!0;b=new mk(b);b.push(a,!0);if(b.err)throw b.msg||nj[b.err];return b.result}
;function pk(a){return Gb(null===a?"null":void 0===a?"undefined":a)}
;function qk(a){this.name=a}
;var rk=new qk("rawColdConfigGroup");var sk=new qk("rawHotConfigGroup");function tk(a){this.A=Df(a)}
w(tk,dg);var uk=new qk("continuationCommand");var vk=new qk("webCommandMetadata");var wk=new qk("signalServiceEndpoint");var xk={Af:"EMBEDDED_PLAYER_MODE_UNKNOWN",xf:"EMBEDDED_PLAYER_MODE_DEFAULT",zf:"EMBEDDED_PLAYER_MODE_PFP",yf:"EMBEDDED_PLAYER_MODE_PFL"};var yk=new qk("feedbackEndpoint");function zk(a){this.A=Df(a)}
w(zk,dg);var Ak=new qk("webPlayerShareEntityServiceEndpoint");var Bk=new qk("playlistEditEndpoint");var Ck=new qk("modifyChannelNotificationPreferenceEndpoint");var Dk=new qk("unsubscribeEndpoint");var Ek=new qk("subscribeEndpoint");function Fk(){var a=Gk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Hk(a){D("yt.ads.biscotti.lastId_",a)}
;function Ik(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Jk=C.window,Kk,Lk,Mk=(null==Jk?void 0:null==(Kk=Jk.yt)?void 0:Kk.config_)||(null==Jk?void 0:null==(Lk=Jk.ytcfg)?void 0:Lk.data_)||{};D("yt.config_",Mk);function Nk(){Ik(Mk,arguments)}
function R(a,b){return a in Mk?Mk[a]:b}
function Ok(a){var b=Mk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Pk=[];function Qk(a){Pk.forEach(function(b){return b(a)})}
function Rk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Sk(b)}}:a}
function Sk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Nk("ERRORS",b));Qk(a)}
function Tk(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Nk("ERRORS",f))}
;var Uk=/^[\w.]*$/,Vk={q:!0,search_query:!0};function Wk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Xk(f[0]||""),h=Xk(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Wk);k.args=[{key:l,value:f[1],query:a,method:Yk==n?"unchanged":n}];Vk.hasOwnProperty(l)||Tk(k)}}return c}
var Yk=String(Wk);function Zk(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function $k(a){"?"==a.charAt(0)&&(a=a.substr(1));return Wk(a,"&")}
function al(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),$k(1<a.length?a[1]:a[0])):{}}
function bl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=$k(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return nc(a,e)+d}
function cl(a){if(!b)var b=window.location.href;var c=cc(1,a),d=dc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)==d&&(Number(cc(4,b))||null)==(Number(cc(4,a))||null):!0;return a}
function Xk(a){return a&&a.match(Uk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function dl(a){var b=el;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ji;e.flash="0";a:{try{var f=b.h.top.location.href}catch(na){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Hh:g;try{var h=g.history.length}catch(na){h=0}e.u_his=h;var k;e.u_h=null==(k=Hh.screen)?void 0:k.height;var l;e.u_w=null==(l=Hh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Hh.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Hh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Hh.screen)?void 0:t.colorDepth}catch(na){}h=b.h;try{var r=h.screenX;var x=h.screenY}catch(na){}try{var y=h.outerWidth;var z=h.outerHeight}catch(na){}try{var I=h.innerWidth;var J=h.innerHeight}catch(na){}try{var M=h.screenLeft;var H=h.screenTop}catch(na){}try{I=h.innerWidth,J=h.innerHeight}catch(na){}try{var O=h.screen.availWidth;var T=h.screen.availTop}catch(na){}r=[M,H,r,x,O,T,y,z,I,J];try{var Fa=(b.h.top||window).document,ta="CSS1Compat"==
Fa.compatMode?Fa.documentElement:Fa.body;var la=(new Ed(ta.clientWidth,ta.clientHeight)).round()}catch(na){la=new Ed(-12245933,-12245933)}Fa=la;la={};var ma=void 0===ma?C:ma;ta=new ri;"SVGElement"in ma&&"createElementNS"in ma.document&&ta.set(0);x=gi();x["allow-top-navigation-by-user-activation"]&&ta.set(1);x["allow-popups-to-escape-sandbox"]&&ta.set(2);ma.crypto&&ma.crypto.subtle&&ta.set(3);"TextDecoder"in ma&&"TextEncoder"in ma&&ta.set(4);ma=si(ta);la.bc=ma;la.bih=Fa.height;la.biw=Fa.width;la.brdim=
r.join();b=b.i;b=(la.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,la.wgl=!!Hh.WebGLRenderingContext,la);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var el=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Zk(dl(a))});Xa();navigator.userAgent.indexOf(" (CrKey ");function S(a){a=fl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=fl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function fl(a){return R("EXPERIMENT_FLAGS",{})[a]}
function gl(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var hl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function il(){if(!hl)return null;var a=hl();return"open"in a?a:null}
function jl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function kl(a,b){"function"===typeof a&&(a=Rk(a));return window.setTimeout(a,b)}
;var ll="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ja(ll),["client_dev_set_cookie"]);var ml={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},nl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(ll)),ol=!1;
function pl(a,b){b=void 0===b?{}:b;var c=cl(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in ml){var f=R(ml[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&dc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&R("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==R("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&R("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in
b&&delete b["X-Goog-Visitor-Id"];if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&dc(a)||(b["X-YouTube-Ad-Signals"]=Zk(dl()));return b}
function ql(a){var b=window.location.search,c=dc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&cl(a)&&(c=document.location.hostname);var d=bc(cc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=$k(b),f={};eb(nl,function(g){e[g]&&(f[g]=e[g])});
return bl(a,f||{},!1)}
function rl(a,b){var c=b.format||"JSON";a=sl(a,b);var d=tl(a,b),e=!1,f=ul(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=jl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=vl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=kl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function sl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=bl(a,b||{},!0);return a}
function tl(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=$k(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):lc(e));f=e||f&&!ob(f);!ol&&f&&"POST"!=b.method&&(ol=!0,Sk(Error("AJAX request with postData should use POST")));return e}
function vl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Tk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?wl(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=xl(g)})}d&&yl(e);
return e}
function yl(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else yl(a[b])}}
function wl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function xl(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function zl(a,b){b.method="POST";b.postParams||(b.postParams={});return rl(a,b)}
function ul(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Rk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=il();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=ql(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=pl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Al=[{Jc:function(a){return"Cannot read property '"+a.key+"'"},
mc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Jc:function(a){return"Cannot call '"+a.key+"'"},
mc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Jc:function(a){return a.key+" is not defined"},
mc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Cl={Va:[],Sa:[{callback:Bl,weight:500}]};function Bl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Dl(){this.Sa=[];this.Va=[]}
var El;function Fl(){if(!El){var a=El=new Dl;a.Va.length=0;a.Sa.length=0;Cl.Va&&a.Va.push.apply(a.Va,Cl.Va);Cl.Sa&&a.Sa.push.apply(a.Sa,Cl.Sa)}return El}
;var Gl=new L;function Hl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Il(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Il(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Il(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Il(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Jl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Kl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Hl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Kl(f+".ve",g,h,k):0;d+=f;d+=Kl(e,a[e],b,c);if(500<d)break}}else c[b]=Ll(a),d+=c[b].length;else c[b]=Ll(a),d+=c[b].length;return d}
function Kl(a,b,c,d){c+="."+a;a=Ll(b);d[c]=a;return c.length+a.length}
function Ll(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Ml(){this.af=!0}
function Nl(){Ml.h||(Ml.h=new Ml);return Ml.h}
function Ol(a,b){a={};var c=yg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Mk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Mk&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return a}
;var Pl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Ql(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Rl(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Sl(a,b,c,d,e){ug.set(""+a,b,{ic:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Tl(a){return ug.get(""+a,void 0)}
function Ul(a,b,c){ug.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Vl(){if(!ug.isEnabled())return!1;if(!ug.Ob())return!0;ug.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==ug.get("TESTCOOKIESENABLED"))return!1;ug.remove("TESTCOOKIESENABLED");return!0}
;var Wl=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Wl);function Xl(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Tl(this.h);a&&this.parse(a)}
var Yl;function Zl(){Yl||(Yl=new Xl);return Yl}
m=Xl.prototype;m.get=function(a,b){$l(a);am(a);a=void 0!==Wl[a]?Wl[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){$l(a);am(a);if(null==b)throw Error("ExpectedNotNull");Wl[a]=b.toString()};
function bm(a){return!!((cm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){$l(a);am(a);delete Wl[a]};
m.clear=function(){for(var a in Wl)delete Wl[a]};
function am(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function $l(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function cm(a){a=void 0!==Wl[a]?Wl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Wl[d]=c.toString())}};var dm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},em={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function fm(){var a=C.navigator;return a?a.connection:void 0}
function gm(){var a=fm();if(a){var b=dm[a.type||"unknown"]||"CONN_UNKNOWN";a=dm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function hm(){var a=fm();if(null!=a&&a.effectiveType)return em.hasOwnProperty(a.effectiveType)?em[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
w(V,Error);function im(){try{return jm(),!0}catch(a){return!1}}
function jm(a){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new V("Datasync ID not set",void 0===a?"unknown":a);}
;function km(){}
function lm(a,b){return qi.bb(a,0,b)}
km.prototype.oa=function(a,b){return this.bb(a,1,b)};
km.prototype.Ib=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var mm=U("web_emulated_idle_callback_delay",300),nm=1E3/60-3,om=[8,5,4,3,2,1,0];
function pm(a){a=void 0===a?{}:a;G.call(this);this.i=[];this.j={};this.Y=this.h=0;this.W=this.m=!1;this.R=[];this.S=this.da=!1;for(var b=v(om),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.wc=a.timeout||1;this.D=nm;this.s=0;this.ma=this.Ce.bind(this);this.vc=this.df.bind(this);this.Ba=this.Qd.bind(this);this.Ka=this.me.bind(this);this.ob=this.Fe.bind(this);this.na=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ea=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ma)}
w(pm,G);m=pm.prototype;m.Ib=function(a){var b=Xa();qm(this,a);a=Xa()-b;this.m||(this.D-=a)};
m.bb=function(a,b,c){++this.Y;if(10===b)return this.Ib(a),this.Y;var d=this.Y;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.m||(0!==this.h&&rm(this)!==this.s&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function sm(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function tm(a){return!a.isHidden()&&a.ea}
function rm(a){if(a.i[8].length){if(a.S)return 4;if(tm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?tm(a)?3:2:1;return 0}
m.Ha=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function qm(a,b){try{b()}catch(c){a.Ha(c)}}
function um(a){for(var b=v(om),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.me=function(a){var b=void 0;a&&(b=a.timeRemaining());this.da=!0;wm(this,b);this.da=!1};
m.df=function(){wm(this)};
m.Qd=function(){xm(this)};
m.Fe=function(a){this.S=!0;var b=rm(this);4===b&&b!==this.s&&(this.stop(),this.start());wm(this,void 0,a);this.S=!1};
m.Ce=function(){this.isHidden()||xm(this);this.h&&(this.stop(),this.start())};
function xm(a){a.stop();a.m=!0;for(var b=Xa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&qm(a,e)}ym(a);a.m=!1;um(a)&&a.start();b=Xa()-b;a.D-=b}
function ym(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function wm(a,b,c){a.S&&4===a.s&&a.h||a.stop();a.m=!0;b=Xa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&qm(a,f);d=a.da?0:1;d=a.l>d?a.l:d;if(!(Xa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&qm(a,c)}while(c&&Xa()<b)}a.m=!1;ym(a);a.D=nm;um(a)&&a.start()}
m.start=function(){this.W=!1;if(0===this.h)switch(this.s=rm(this),this.s){case 1:var a=this.Ka;this.h=this.na?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,mm);break;case 2:this.h=window.setTimeout(this.vc,this.wc);break;case 3:this.h=window.requestAnimationFrame(this.ob);break;case 4:this.h=window.setTimeout(this.Ba,0)}};
m.pause=function(){this.stop();this.W=!0};
m.stop=function(){if(this.h){switch(this.s){case 1:var a=this.h;this.na?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.M=function(){sm(this);this.stop();this.ea&&document.removeEventListener("visibilitychange",this.ma);G.prototype.M.call(this)};var zm=E("yt.scheduler.instance.timerIdMap_")||{},Am=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Bm=0,Cm=0;function Dm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new pm(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Em(){Fm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(xc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Fm(){sm(Dm());for(var a in zm)zm.hasOwnProperty(a)&&delete zm[Number(a)]}
function Gm(a,b,c){if(!c)return c=void 0===c,-Dm().bb(a,b,c);var d=window.setTimeout(function(){var e=Dm().bb(a,b);zm[d]=e},c);
return d}
function Hm(a){Dm().Ib(a)}
function Im(a){var b=Dm();if(0>a)b.qa(-a);else{var c=zm[a];c?(b.qa(c),delete zm[a]):window.clearTimeout(a)}}
function Jm(){Km()}
function Km(){window.clearTimeout(Bm);Dm().start()}
function Lm(){Dm().pause();window.clearTimeout(Bm);Bm=window.setTimeout(Jm,Am)}
function Mm(){window.clearTimeout(Cm);Cm=window.setTimeout(function(){Nm(0)},Am)}
function Nm(a){Mm();var b=Dm();b.l=a;b.start()}
function Om(a){Mm();var b=Dm();b.l>a&&(b.l=a,b.start())}
function Pm(){window.clearTimeout(Cm);var a=Dm();a.l=0;a.start()}
function Qm(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Em),D("yt.scheduler.instance.addJob",Gm),D("yt.scheduler.instance.addImmediateJob",Hm),D("yt.scheduler.instance.cancelJob",Im),D("yt.scheduler.instance.cancelAllJobs",Fm),D("yt.scheduler.instance.start",Km),D("yt.scheduler.instance.pause",Lm),D("yt.scheduler.instance.setPriorityThreshold",Nm),D("yt.scheduler.instance.enablePriorityThreshold",Om),D("yt.scheduler.instance.clearPriorityThreshold",Pm),D("yt.scheduler.initialized",
!0))}
;function Rm(){km.apply(this,arguments)}
w(Rm,km);function Sm(){Rm.h||(Rm.h=new Rm);return Rm.h}
Rm.prototype.bb=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):kl(a,c||0)};
Rm.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Rm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Rm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var qi=Sm();S("web_scheduler_auto_init")&&Qm();function Tm(a){var b=new Wi;(b=b.isAvailable()?a?new bj(b,a):b:null)||(a=new Xi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Si(a):null;this.i=document.domain||window.location.hostname}
Tm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new dh).serialize(b))}catch(f){return}else e=escape(b);Sl(a,e,c,this.i)};
Tm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Tl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Tm.prototype.remove=function(a){this.h&&this.h.remove(a);Ul(a,"/",this.i)};var Um=function(){var a;return function(){a||(a=new Tm("ytidb"));return a}}();
function Vm(){var a;return null==(a=Um())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Wm=[],Xm,Ym=!1;function Zm(){var a={};for(Xm=new $m(void 0===a.handleError?an:a.handleError,void 0===a.logEvent?bn:a.logEvent);0<Wm.length;)switch(a=Wm.shift(),a.type){case "ERROR":Xm.Ha(a.payload);break;case "EVENT":Xm.logEvent(a.eventType,a.payload)}}
function cn(a){Ym||(Xm?Xm.Ha(a):(Wm.push({type:"ERROR",payload:a}),10<Wm.length&&Wm.shift()))}
function dn(a,b){Ym||(Xm?Xm.logEvent(a,b):(Wm.push({type:"EVENT",eventType:a,payload:b}),10<Wm.length&&Wm.shift()))}
;function en(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function fn(a){return a.substr(0,a.indexOf(":"))||a}
;var gn=ze||Ae;function hn(a){var b=Ob();return b?0<=b.toLowerCase().indexOf(a):!1}
;var jn={},kn=(jn.AUTH_INVALID="No user identifier specified.",jn.EXPLICIT_ABORT="Transaction was explicitly aborted.",jn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",jn.MISSING_INDEX="Index not created.",jn.MISSING_OBJECT_STORES="Object stores not created.",jn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",jn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",jn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
jn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",jn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",jn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",jn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",jn),ln={},mn=(ln.AUTH_INVALID="ERROR",ln.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",ln.EXPLICIT_ABORT="IGNORED",ln.IDB_NOT_SUPPORTED="ERROR",ln.MISSING_INDEX=
"WARNING",ln.MISSING_OBJECT_STORES="ERROR",ln.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",ln.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",ln.QUOTA_EXCEEDED="WARNING",ln.QUOTA_MAYBE_EXCEEDED="WARNING",ln.UNKNOWN_ABORT="WARNING",ln.INCOMPATIBLE_DB_VERSION="WARNING",ln),nn={},on=(nn.AUTH_INVALID=!1,nn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,nn.EXPLICIT_ABORT=!1,nn.IDB_NOT_SUPPORTED=!1,nn.MISSING_INDEX=!1,nn.MISSING_OBJECT_STORES=!1,nn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,nn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,nn.QUOTA_EXCEEDED=!1,nn.QUOTA_MAYBE_EXCEEDED=!0,nn.UNKNOWN_ABORT=!0,nn.INCOMPATIBLE_DB_VERSION=!1,nn);function pn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?kn[a]:c;d=void 0===d?mn[a]:d;e=void 0===e?on[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,pn.prototype)}
w(pn,V);function qn(a,b){pn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},kn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,qn.prototype)}
w(qn,pn);function rn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,rn.prototype)}
w(rn,Error);var sn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function tn(a,b,c,d){b=fn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof pn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new pn("QUOTA_EXCEEDED",a);if(Be&&"UnknownError"===e.name)return new pn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof rn)return new pn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&sn.some(function(f){return e.message.includes(f)}))return new pn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new pn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",td:e.name})];e.level="WARNING";return e}
function un(a,b,c){var d=Vm();return new pn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function vn(a){if(!a)throw Error();throw a;}
function wn(a){return a}
function xn(a){this.h=a}
function yn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
yn.all=function(a){return new yn(new xn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={xb:0};f.xb<a.length;f={xb:f.xb},++f.xb)yn.resolve(a[f.xb]).then(function(g){return function(h){d[g.xb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
yn.resolve=function(a){return new yn(new xn(function(b,c){a instanceof yn?a.then(b,c):b(a)}))};
yn.reject=function(a){return new yn(new xn(function(b,c){c(a)}))};
yn.prototype.then=function(a,b){var c=this,d=null!=a?a:wn,e=null!=b?b:vn;return new yn(new xn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){zn(c,c,d,f,g)}),c.i.push(function(){An(c,c,e,f,g)})):"FULFILLED"===c.state.status?zn(c,c,d,f,g):"REJECTED"===c.state.status&&An(c,c,e,f,g)}))};
yn.prototype.catch=function(a){return this.then(void 0,a)};
function zn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof yn?Bn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function An(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof yn?Bn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Bn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof yn?Bn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Cn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Dn(a){return new Promise(function(b,c){Cn(a,b,c)})}
function En(a){return new yn(new xn(function(b,c){Cn(a,b,c)}))}
;function Fn(a,b){return new yn(new xn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Gn=window,W=Gn.ytcsi&&Gn.ytcsi.now?Gn.ytcsi.now:Gn.performance&&Gn.performance.timing&&Gn.performance.now&&Gn.performance.timing.navigationStart?function(){return Gn.performance.timing.navigationStart+Gn.performance.now()}:function(){return(new Date).getTime()};function Hn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=Hn.prototype;m.add=function(a,b,c){return In(this,[a],{mode:"readwrite",ha:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return In(this,[a],{mode:"readwrite",ha:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return In(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).count(b)})};
function Jn(a,b,c){a=a.h.createObjectStore(b,c);return new Kn(a)}
m.delete=function(a,b){return In(this,[a],{mode:"readwrite",ha:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return In(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).get(b)})};
function Ln(a,b,c){return In(a,[b],{mode:"readwrite",ha:!0},function(d){d=d.objectStore(b);return En(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function In(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,x,y;return A(function(z){switch(z.h){case 1:var I={mode:"readonly",ha:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?I.mode=c:Object.assign(I,c);e=I;a.transactionCount++;f=e.ha?3:1;g=0;case 2:if(h){z.v(4);break}g++;k=Math.round(W());Aa(z,5);l=a.h.transaction(b,e.mode);I=z.yield;var J=new Mn(l);J=Nn(J,d);return I.call(z,J,7);case 7:return n=z.i,p=Math.round(W()),On(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Ba(z);r=Math.round(W());x=tn(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof pn&&!x.h)||g>=f)On(a,k,r,g,x,b.join(),e),h=x;z.v(2);break;case 4:return z.return(Promise.reject(h))}})}
function On(a,b,c,d,e,f,g){b=c-b;e?(e instanceof pn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&dn("QUOTA_EXCEEDED",{dbName:fn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof pn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),dn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Pn(a,!1,d,f,b,g.tag),cn(e)):Pn(a,!0,d,f,b,g.tag)}
function Pn(a,b,c,d,e,f){dn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Kn(a){this.h=a}
m=Kn.prototype;m.add=function(a,b){return En(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return En(this.h.clear()).then(function(){})};
function Qn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return En(this.h.count(a))};
function Rn(a,b){return Sn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Rn(this,a):En(this.h.delete(a))};
m.get=function(a){return En(this.h.get(a))};
m.index=function(a){try{return new Tn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new rn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Sn(a,b,c){a=a.h.openCursor(b.query,b.direction);return Un(a).then(function(d){return Fn(d,c)})}
function Mn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=pn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Nn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Mn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new pn("EXPLICIT_ABORT");};
Mn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Kn(a),this.i.set(a,b));return b};
function Tn(a){this.h=a}
m=Tn.prototype;m.count=function(a){return En(this.h.count(a))};
m.delete=function(a){return Vn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return En(this.h.get(a))};
m.getKey=function(a){return En(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Vn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Un(a).then(function(d){return Fn(d,c)})}
function Wn(a,b){this.request=a;this.cursor=b}
function Un(a){return En(a).then(function(b){return b?new Wn(a,b):null})}
m=Wn.prototype;m.advance=function(a){this.cursor.advance(a);return Un(this.request)};
m.continue=function(a){this.cursor.continue(a);return Un(this.request)};
m.delete=function(){return En(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return En(this.cursor.update(a))};function Xn(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Hn(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Sd,k=c.blocking,l=c.bf,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&dn("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:fn(a)});var x=f(),y=new Mn(g.transaction);
n&&n(x,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){dn("IDB_UNEXPECTEDLY_CLOSED",{dbName:fn(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Yn(a,b,c){c=void 0===c?{}:c;return Xn(a,b,c)}
function Zn(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Sd)&&c.addEventListener("blocked",function(){e()}),g.yield(Dn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),tn(f,a,"",-1);})}
;function $n(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
$n.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Yn(a,b,c)};
$n.prototype.delete=function(a){a=void 0===a?{}:a;return Zn(this.name,a)};
function ao(a,b){return new pn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function bo(a,b){if(!b)throw un("openWithToken",fn(a.name));return a.open()}
$n.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,I=[],J=v(Object.keys(z.Eb)),M=J.next();!M.done;M=J.next()){M=M.value;var H=z.Eb[M],O=void 0===H.Ie?Number.MAX_VALUE:H.Ie;!(h.h.version>=H.Jb)||h.h.version>=O||h.h.objectStoreNames.contains(M)||I.push(M)}k=I;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Eb);n=h.objectStoreNames();
if(c.m<U("ytidb_reopen_db_retries",0))return c.m++,h.close(),cn(new pn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<U("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return cn(new pn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new qn(n,l);case 5:return y.return(h);case 2:p=Ba(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,ao(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),tn(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw ao(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,bf:b,upgrade:this.options.upgrade};return this.h=d=a()};var co=new $n("YtIdbMeta",{Eb:{databases:{Jb:1}},upgrade:function(a,b){b(1)&&Jn(a,"databases",{keyPath:"actualName"})}});
function eo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(bo(co,b),2);c=d.i;return d.return(In(c,["databases"],{ha:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return En(f.h.put(a,void 0)).then(function(){})})}))})}
function fo(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(bo(co,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function go(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(bo(co,b),2)):3!=e.h?(d=e.i,e.yield(In(d,["databases"],{ha:!0,mode:"readonly"},function(f){c.length=0;return Sn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function ho(a){return go(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function io(a,b,c){return go(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function jo(a){var b,c;return A(function(d){if(1==d.h)return b=jm("YtIdbMeta hasAnyMeta other"),d.yield(go(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var ko,lo=new function(){}(new function(){});
function mo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Vm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=gn)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||Nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(eo(d,lo),4);case 4:return e.yield(fo("yt-idb-test-do-not-use",lo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function no(){if(void 0!==ko)return ko;Ym=!0;return ko=mo().then(function(a){Ym=!1;var b;if(null!=(b=Um())&&b.h){var c;b={hasSucceededOnce:(null==(c=Vm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Um())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function oo(){return E("ytglobal.idbToken_")||void 0}
function po(){var a=oo();return a?Promise.resolve(a):no().then(function(b){(b=b?lo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var qo=0;function ro(a,b){qo||(qo=qi.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(po(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(io(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(Zn(f.actualName),7);case 7:return h.yield(fo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),cn(g),d=!1;case 4:qi.qa(qo),qo=0,d&&ro(a,b),h.h=0}})}))}
function so(){var a;return A(function(b){return 1==b.h?b.yield(po(),2):(a=b.i)?b.return(jo(a)):b.return(!1)})}
new Fh;function to(a){if(!im())throw a=new pn("AUTH_INVALID",{dbName:a}),cn(a),a;var b=jm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function uo(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(po(),2);case 2:g=n.i;if(!g)throw h=un("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),cn(h),h;en(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:to(a);Aa(n,3);return n.yield(eo(k,g),5);case 5:return n.yield(Yn(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(fo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function vo(a,b,c){c=void 0===c?{}:c;return uo(a,b,!1,c)}
function wo(a,b,c){c=void 0===c?{}:c;return uo(a,b,!0,c)}
function xo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(po(),2);if(3!=e.h){c=e.i;if(!c)return e.return();en(a);d=to(a);return e.yield(Zn(d.actualName,b),3)}return e.yield(fo(d.actualName,c),0)})}
function yo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(Zn(d.actualName,b),2):e.yield(fo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function zo(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(po(),2);if(3!=d.h){b=d.i;if(!b)return d.return();en("LogsDatabaseV2");return d.yield(ho(b),3)}c=d.i;return d.yield(yo(c,a,b),0)})}
function Ao(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(po(),2);if(3!=d.h){c=d.i;if(!c)return d.return();en(a);return d.yield(Zn(a,b),3)}return d.yield(fo(a,c),0)})}
;function Bo(a,b){$n.call(this,a,b);this.options=b;en(a)}
w(Bo,$n);function Co(a,b){var c;return function(){c||(c=new Bo(a,b));return c}}
Bo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.qc?wo:vo)(a,b,Object.assign({},c))};
Bo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.qc?Ao:xo)(this.name,a)};
function Do(a,b){return Co(a,b)}
;var Eo={},Fo=Do("ytGcfConfig",{Eb:(Eo.coldConfigStore={Jb:1},Eo.hotConfigStore={Jb:1},Eo),qc:!1,upgrade:function(a,b){b(1)&&(Qn(Jn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Qn(Jn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Go(a){return bo(Fo(),a)}
function Ho(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Go(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Ln(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Io(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Go(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Ln(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Jo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Go(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(In(b,["coldConfigStore"],{mode:"readwrite",ha:!0},function(e){return Vn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Ko(a){var b,c;return A(function(d){return 1==d.h?d.yield(Go(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(In(b,["hotConfigStore"],{mode:"readwrite",ha:!0},function(e){return Vn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Lo(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ja(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Lo,G);Lo.prototype.M=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;G.prototype.M.call(this)};function Mo(){this.h=0;this.i=new Lo}
function No(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:null}
function Oo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.v(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=oo();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(Ko(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Ho(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Po(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!S("start_client_gcf"))return h.v(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=oo())?c?h.v(4):h.yield(Jo(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Io(c,b,g,d),0)})}
function Qo(){if(!Mo.h){var a=new Mo;Mo.h=a}a=Mo.h;var b=W()-a.h;if(!(0!==a.h&&b<U("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Mo.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function Ro(){return"INNERTUBE_API_KEY"in Mk&&"INNERTUBE_API_VERSION"in Mk}
function So(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),ne:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),od:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Sf:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),pe:R("INNERTUBE_CONTEXT_HL"),oe:R("INNERTUBE_CONTEXT_GL"),qe:R("INNERTUBE_HOST_OVERRIDE")||"",se:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),re:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function To(a){var b={client:{hl:a.pe,gl:a.oe,clientName:a.od,clientVersion:a.innertubeContextClientVersion,configInfo:a.ne}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=gl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.od;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Rl()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=gm())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=hm())&&
b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=Qo())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries($k(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Uo(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Mf:(a=Ol(Nl()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function Vo(a,b){this.version=a;this.args=b}
Vo.prototype.serialize=function(){return{version:this.version,args:this.args}};function Wo(a,b){this.topic=a;this.h=b}
Wo.prototype.toString=function(){return this.topic};var Xo=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Hb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",Xo);var Yo=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Yo);var Zo=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Zo);var $o=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",$o);
D("ytPubsub2Pubsub2SkipSubKey",null);function ap(a,b){var c=bp();c&&c.publish.call(c,a.toString(),a,b)}
function cp(a){var b=dp,c=bp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Yo[d])try{if(f&&b instanceof Wo&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ya){var l=new h;h.Ya=l.version}var n=h.Ya}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var x=Array(r);for(k=0;k<r;k++)x[k]=t[k];var y=x}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Sk(z)}},$o[b.toString()]?E("yt.scheduler.instance")?qi.oa(g):kl(g,0):g())});
Yo[d]=!0;Zo[b.toString()]||(Zo[b.toString()]=[]);Zo[b.toString()].push(d);return d}
function ep(){var a=fp,b=cp(function(c){a.apply(void 0,arguments);gp(b)});
return b}
function gp(a){var b=bp();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete Yo[c]}))}
function bp(){return E("ytPubsub2Pubsub2Instance")}
;function hp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&ap("meta_logging_csi_event",{timerName:a,ig:b})}
;var ip=void 0,jp=void 0;function kp(){if(!jp){var a=R("WORKER_SERIALIZATION_URL");jp=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?Gb(a):null:null}return jp||void 0}
function lp(){var a=kp();ip||void 0===a||(ip=new Worker(Eb(a),void 0));return ip}
;var mp=U("max_body_size_to_compress",5E5),np=U("min_body_size_to_compress",500),op=!0,pp=0,qp=0,rp=U("compression_performance_threshold_lr",250),sp=U("slow_compressions_before_abandon_count",4),tp=!1,up=new Map,vp=1;function wp(){if("function"===typeof Worker&&kp()){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=up.get(c.key);d&&(xp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),up.delete(c.key))}},b=lp();
b&&(b.addEventListener("message",a),b.onerror=function(){up.clear()},tp=!0)}}
function yp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(op)try{var g=zp(b);if(null!=g&&(g>mp||g<np))d(a,c);else{if(S("gzip_gel_with_worker")){tp||wp();var h=lp();if(h&&!e){up.set(vp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:vp});vp++;return}}var k=ok(li(b));xp(k,f,a,c,d)}}catch(l){Tk(l),d(a,c)}else d(a,c)}
function xp(a,b,c,d,e){var f=W();b.ticks.gelc=f;qp++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=rp&&(pp++,S("abandon_compression_after_N_slow_zips")?qp===U("compression_disable_point")&&pp>sp&&(op=!1):op=!1);Ap(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Bp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(op&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=zp(g);if(null!=h&&(h>mp||h<np))return a;f=ok(li(g),b?{level:1}:void 0);var k=W();e.ticks.gelc=k;if(b){qp++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=rp)if(pp++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=pp/qp;var l=sp/U("compression_disable_point");0<qp&&0===qp%U("compression_disable_point")&&b>=l&&(op=!1)}else op=!1;Ap(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Tk(n),a}}else return a}
function zp(a){try{return(new Blob(a.split(""))).size}catch(b){return Tk(b),null}}
function Ap(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||hp("gel_compression",a,{sampleRate:.1})}
;function Cp(a){a=Object.assign({},a);delete a.Authorization;var b=yg();if(b){var c=new wi;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Ee(c.digest(),3)}return a}
;var Dp;function Ep(){Dp||(Dp=new Tm("yt.innertube"));return Dp}
function Fp(a,b,c,d){if(d)return null;d=Ep().get("nextId",!0)||1;var e=Ep().get("requests",!0)||{};e[d]={method:a,request:b,authState:Cp(c),requestTime:Math.round(W())};Ep().set("nextId",d+1,86400,!0);Ep().set("requests",e,86400,!0);return d}
function Gp(a){var b=Ep().get("requests",!0)||{};delete b[a];Ep().set("requests",b,86400,!0)}
function Hp(a){var b=Ep().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Cp(Uo(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Ip(a,d.method,e,{}));delete b[c]}}Ep().set("requests",b,86400,!0)}}
;function Jp(a){this.Xb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.vb=function(){};
this.now=Date.now;this.Nb=!1;var b;this.Fd=null!=(b=a.Fd)?b:100;var c;this.zd=null!=(c=a.zd)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.yd=null!=(f=a.yd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.dc=!!a.dc;var h;this.ac=null!=(h=a.ac)?h:.1;var k;this.nc=null!=(k=a.nc)?k:10;a.handleError&&(this.handleError=a.handleError);a.vb&&(this.vb=a.vb);a.Nb&&(this.Nb=a.Nb);a.Xb&&(this.Xb=a.Xb);this.U=a.U;this.Ea=a.Ea;this.ba=a.ba;this.aa=a.aa;this.sendFn=a.sendFn;
this.Mc=a.Mc;this.Lc=a.Lc;Kp(this)&&(!this.U||this.U("networkless_logging"))&&Lp(this)}
function Lp(a){Kp(a)&&!a.Nb&&(a.h=!0,a.dc&&Math.random()<=a.ac&&a.ba.Ud(a.T),Mp(a),a.aa.wa()&&a.Vb(),a.aa.listen(a.Mc,a.Vb.bind(a)),a.aa.listen(a.Lc,a.bd.bind(a)))}
m=Jp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Kp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ba.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&Np(c,d)}).catch(function(e){Np(c,d);
Op(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Kp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ba.set(e,d.T).catch(function(l){Op(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ba.set(e,this.T).catch(function(g){d.sendFn(a,b,e.skipRetry);
Op(d,g)})}else this.sendFn(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Kp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ba.rb(d.id,c.T):e=!0;c.aa.hb&&c.U&&c.U("vss_network_hint")&&c.aa.hb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ba.set(d,this.T).then(function(g){d.id=g;e&&c.ba.rb(d.id,c.T)}).catch(function(g){Op(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Vb=function(){var a=this;if(!Kp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.oa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ba.ld("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(Np(a,b),3):(a.bd(),c.return());a.i&&(a.i=0,a.Vb());c.h=0})},this.Fd))};
m.bd=function(){this.Ea.qa(this.i);this.i=0};
function Np(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Kp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.v(2);break}return d.yield(a.ba.ue(b.id,a.T),3);case 3:(c=d.i)||a.vb(Error("The request cannot be found in the database."));case 2:if(Pp(a,b,a.xd)){d.v(4);break}a.vb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.v(5);break}return d.yield(a.ba.rb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=Qp(a,
b));if(!b){d.v(0);break}if(!b.skipRetry||void 0===b.id){d.v(8);break}return d.yield(a.ba.rb(b.id,a.T),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Qp(a,b){if(!Kp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Rp(f);(h=Sp(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.nc)){n.v(2);break}if(!a.aa.pc){n.v(3);break}return n.yield(a.aa.pc(),3);case 3:if(a.aa.wa()){n.v(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.ba.Pc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.nc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.zd?n.yield(a.ba.Pc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.ba.rb(b.id,a.T),8);case 12:a.Ea.oa(function(){a.aa.wa()&&a.Vb()},a.yd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.ba.rb(b.id,a.T),2);a.aa.hb&&a.U&&a.U("vss_network_hint")&&a.aa.hb(!0);d(e,f);h.h=0})};
return b}
function Pp(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Mp(a){if(!Kp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ba.ld("QUEUED",a.T).then(function(b){b&&!Pp(a,b,a.vd)?a.Ea.oa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.ba.Pc(b.id,a.T),2);Mp(a);c.h=0})}):a.aa.wa()&&a.Vb()})}
function Op(a,b){a.Ld&&!a.aa.wa()?a.Ld(b):a.handleError(b)}
function Kp(a){return!!a.T||a.Xb}
function Rp(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Sp(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Tp;
function Up(){if(Tp)return Tp();var a={};Tp=Do("LogsDatabaseV2",{Eb:(a.LogsRequestsStore={Jb:2},a),qc:!1,upgrade:function(b,c,d){c(2)&&Jn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Qn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Tp()}
;function Vp(a){return bo(Up(),a)}
function Wp(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Vp(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Ln(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Xp(c);return g.return(f)})}
function Yp(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(Vp(b),2);if(3!=l.h)return d=l.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(In(d,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(n){return Vn(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=W();Xp(c);return l.return(k)})}
function Zp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Vp(b),2);c=d.i;return d.return(In(c,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",En(f.h.put(g,void 0)).then(function(){return g})})}))})}
function $p(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(Vp(b),2);e=f.i;return f.return(In(e,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),En(h.h.put(k,void 0)).then(function(){return k})):yn.resolve(void 0)})}))})}
function aq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Vp(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function bq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(Vp(a),2);b=d.i;c=W()-2592E6;return d.yield(In(b,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){return Sn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function cq(){A(function(a){return a.yield(zo(),0)})}
function Xp(a){S("nwl_csi_killswitch")||hp("networkless_performance",a,{sampleRate:1})}
;var dq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487};var eq={},fq=Do("ServiceWorkerLogsDatabase",{Eb:(eq.SWHealthLog={Jb:1},eq),qc:!0,upgrade:function(a,b){b(1)&&Qn(Jn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function gq(a){return bo(fq(),a)}
function hq(a){var b,c;A(function(d){if(1==d.h)return d.yield(gq(a),2);b=d.i;c=W()-2592E6;return d.yield(In(b,["SWHealthLog"],{mode:"readwrite",ha:!0},function(e){return Sn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function iq(a){var b;return A(function(c){if(1==c.h)return c.yield(gq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var jq={},kq=0;function lq(a){var b=new Image,c=""+kq++;jq[c]=b;b.onload=b.onerror=function(){delete jq[c]};
b.src=a}
;function mq(){this.h=new Map;this.i=!1}
function nq(){if(!mq.h){var a=E("yt.networkRequestMonitor.instance")||new mq;D("yt.networkRequestMonitor.instance",a);mq.h=a}return mq.h}
mq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
mq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
mq.prototype.removeParams=function(a){return a.split("?")[0]};
mq.prototype.removeParams=mq.prototype.removeParams;mq.prototype.isEndpointCFR=mq.prototype.isEndpointCFR;mq.prototype.requestComplete=mq.prototype.requestComplete;mq.getInstance=nq;var oq;function pq(){oq||(oq=new Tm("yt.offline"));return oq}
function qq(a){if(S("offline_error_handling")){var b=pq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);pq().set("errors",b,2592E3,!0)}}
;function rq(){xd.call(this);var a=this;this.j=!1;this.i=pi();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=pq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Sk(d)}pq().set("errors",{},2592E3,!0)}}})}
w(rq,xd);function sq(){if(!rq.h){var a=E("yt.networkStatusManager.instance")||new rq;D("yt.networkStatusManager.instance",a);rq.h=a}return rq.h}
m=rq.prototype;m.wa=function(){return this.i.wa()};
m.hb=function(a){this.i.i=a};
m.je=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Zd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.pc=function(a){a=ni(this.i,a);a.then(function(b){S("use_cfr_monitor")&&nq().requestComplete("generate_204",b)});
return a};
rq.prototype.sendNetworkCheckRequest=rq.prototype.pc;rq.prototype.listen=rq.prototype.listen;rq.prototype.enableErrorFlushing=rq.prototype.Zd;rq.prototype.getWindowStatus=rq.prototype.je;rq.prototype.networkStatusHint=rq.prototype.hb;rq.prototype.isNetworkAvailable=rq.prototype.wa;rq.getInstance=sq;function tq(a){a=void 0===a?{}:a;xd.call(this);var b=this;this.i=this.m=0;this.j=sq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){uq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){uq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){yd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){yd(b,"publicytnetworkstatus-offline")})))}
w(tq,xd);tq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
tq.prototype.hb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
tq.prototype.pc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&nq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.hb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function uq(a,b){a.rateLimit?a.i?(qi.qa(a.m),a.m=qi.oa(function(){a.l!==b&&(yd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(yd(a,b),a.l=b,a.i=W()):yd(a,b)}
;var vq;function wq(){var a=Jp.call;vq||(vq=new tq({Xf:!0,Qf:!0}));a.call(Jp,this,{ba:{Ud:bq,rb:aq,ld:Yp,ue:Zp,Pc:$p,set:Wp},aa:vq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Tk(new V(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Sk(b)},
vb:Tk,sendFn:xq,now:W,Ld:qq,Ea:Sm(),Mc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",dc:!0,ac:.1,nc:U("potential_esf_error_limit",10),U:S,Nb:!(im()&&yq())});this.j=new Fh;S("networkless_immediately_drop_all_requests")&&cq();Ao("LogsDatabaseV2")}
w(wq,Jp);function zq(){var a=E("yt.networklessRequestController.instance");a||(a=new wq,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&po().then(function(b){a.T=b;Lp(a);a.j.resolve();a.dc&&Math.random()<=a.ac&&a.T&&hq(a.T);S("networkless_immediately_drop_sw_health_store")&&Aq(a)}));
return a}
wq.prototype.writeThenSend=function(a,b){b||(b={});im()||(this.h=!1);Jp.prototype.writeThenSend.call(this,a,b)};
wq.prototype.sendThenWrite=function(a,b,c){b||(b={});im()||(this.h=!1);Jp.prototype.sendThenWrite.call(this,a,b,c)};
wq.prototype.sendAndWrite=function(a,b){b||(b={});im()||(this.h=!1);Jp.prototype.sendAndWrite.call(this,a,b)};
wq.prototype.awaitInitialization=function(){return this.j.promise};
function Aq(a){var b;A(function(c){if(!a.T)throw b=un("clearSWHealthLogsDb"),b;return c.return(iq(a.T).catch(function(d){a.handleError(d)}))})}
function xq(a,b,c,d){d=void 0===d?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Bq(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)ul(a,void 0,"POST",f);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ul(a,
void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new ab({url:a});if(k.j&&k.i||k.l){var l=bc(cc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(qc),t=pc(a,0,"ri",p);if(0>t)var r=null;else{var x=a.indexOf("&",t);if(0>x||x>p)x=p;r=decodeURIComponent(a.slice(t+3,-1!==x?x:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(I){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(I){}z=!1}c=z?!0:!1}else c=!1;c||
lq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),yp(a,b.postBody,b,rl,d)):yp(a,JSON.stringify(b.postParams),b,zl,d):rl(a,b)}
function Bq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){nq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){nq().requestComplete(a,!0);d(e,f)}}
function yq(){return"www.youtube-nocookie.com"!==dc(document.location.toString())}
;var Cq=!1,Dq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Cq};D("ytNetworklessLoggingInitializationOptions",Dq);function Eq(){var a;A(function(b){if(1==b.h)return b.yield(po(),2);a=b.i;if(!a||!im()&&!S("nwl_init_require_datasync_id_killswitch")||!yq())return b.v(0);Cq=!0;Dq.isNwlInitialized=Cq;return b.yield(zq().awaitInitialization(),0)})}
;function Fq(a){var b=this;this.config_=null;a?this.config_=a:Ro()&&(this.config_=So());lm(function(){Hp(b)},5E3)}
Fq.prototype.isReady=function(){!this.config_&&Ro()&&(this.config_=So());return!!this.config_};
function Ip(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Fp(b,c,l,k)),y)){var z=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(H,O){Gp(y);z(H,O)};
c.onFetchSuccess=function(H,O){Gp(y);I(H,O)}}try{if(x&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?zq().writeThenSend(r,g):zq().sendAndWrite(r,g);
else if(d.compress){var J=!d.networklessOptions.writeThenSend;if(g.postBody){var M=g.postBody;"string"!==typeof M&&(M=JSON.stringify(g.postBody));yp(r,M,g,rl,J)}else yp(r,JSON.stringify(g.postParams),g,zl,J)}else S("web_all_payloads_via_jspb")?rl(r,g):zl(r,g)}catch(H){if("InvalidAccessError"==H.name)y&&(Gp(y),y=0),Tk(Error("An extension is blocking network request."));else throw H;}y&&lm(function(){Hp(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Tk(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);Sk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.qe)&&(h=f);var k=a.config_.se||!1,l=Uo(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.re&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=bl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Dq.isNwlInitialized:Cq)?no().then(function(x){e(x)}):e(!1)}
;var Gq=0,Hq=Pc?"webkit":Oc?"moz":Mc?"ms":Lc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Gq});var Iq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Jq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Iq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Kq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Jq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Jq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Jq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",nb);var Lq=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Lq);
function Mq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Nq=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Oq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Mq(a,b,c,d);if(e)return e;e=++Lq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Jq(h);if(!Hd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Jq(h);
h.currentTarget=a;return c.call(a,h)};
g=Rk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Nq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function Pq(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Nq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;function Qq(a){this.D=a;this.h=null;this.l=0;this.s=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.S=Oq(window,"mousemove",Va(this.W,this));a=Va(this.R,this);"function"===typeof a&&(a=Rk(a));this.Y=window.setInterval(a,25)}
Ya(Qq,G);Qq.prototype.W=function(a){void 0===a.h&&Kq(a);var b=a.h;void 0===a.i&&Kq(a);this.h=new Dd(b,a.i)};
Qq.prototype.R=function(){if(this.h){var a=W();if(0!=this.l){var b=this.s,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.s=this.h;this.j=(this.j+1)%4}};
Qq.prototype.M=function(){window.clearInterval(this.Y);Pq(this.S)};var Rq={};
function Sq(a){var b=void 0===a?{}:a;a=void 0===b.Ee?!1:b.Ee;b=void 0===b.ae?!0:b.ae;if(null==E("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&Tq();Oq(document,"keydown",Tq);Oq(document,"keyup",Tq);Oq(document,"mousedown",Tq);Oq(document,"mouseup",Tq);a?Oq(window,"touchmove",function(){Uq("touchmove",200)},{passive:!0}):(Oq(window,"resize",function(){Uq("resize",200)}),b&&Oq(window,"scroll",function(){Uq("scroll",200)}));
new Qq(function(){Uq("mouse",100)});
Oq(document,"touchstart",Tq,{passive:!0});Oq(document,"touchend",Tq,{passive:!0})}}
function Uq(a,b){Rq[a]||(Rq[a]=!0,qi.oa(function(){Tq();Rq[a]=!1},b))}
function Tq(){null==E("_lact",window)&&Sq();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Yq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Zq=C.ytPubsubPubsubInstance||new L,$q=C.ytPubsubPubsubSubscribedKeys||{},ar=C.ytPubsubPubsubTopicToKeys||{},br=C.ytPubsubPubsubIsSynchronous||{};function cr(a,b){var c=dr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){$q[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{br[a]?f():kl(f,0)}catch(g){Sk(g)}},void 0);
$q[d]=!0;ar[a]||(ar[a]=[]);ar[a].push(d);return d}return 0}
function er(a){var b=dr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete $q[c]}))}
function fr(a,b){var c=dr();c&&c.publish.apply(c,arguments)}
function gr(a){var b=dr();if(b)if(b.clear(a),a)hr(a);else for(var c in ar)hr(c)}
function dr(){return C.ytPubsubPubsubInstance}
function hr(a){ar[a]&&(a=ar[a],eb(a,function(b){$q[b]&&delete $q[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Hb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",Zq);D("ytPubsubPubsubTopicToKeys",ar);D("ytPubsubPubsubIsSynchronous",br);D("ytPubsubPubsubSubscribedKeys",$q);var ir=Symbol("injectionDeps");function jr(a){this.name=a}
jr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function kr(a){this.key=a}
function lr(){this.h=new Map;this.i=new Map}
lr.prototype.resolve=function(a){return a instanceof kr?mr(this,a.key,[],!0):mr(this,a,[])};
function mr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Id)var e=d.Id;else if(d.hf)e=d[ir]?nr(a,d[ir],c):[],e=d.hf.apply(d,ja(e));else if(d.Hd){e=d.Hd;var f=e[ir]?nr(a,e[ir],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.gg||a.i.set(b,e);return e}
function nr(a,b,c){return b?b.map(function(d){return d instanceof kr?mr(a,d.key,c,!0):mr(a,d,c)}):[]}
;var or;function pr(){or||(or=new lr);return or}
;var qr=window;function rr(){var a,b;return"h5vcc"in qr&&(null==(a=qr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=qr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in qr&&qr.performance.mark&&qr.performance.measure?2:0}
function sr(a){switch(rr()){case 1:qr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:qr.performance.mark(a+"-start");break;case 0:break;default:Qh()}}
function tr(a){switch(rr()){case 1:qr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";qr.performance.mark(c);qr.performance.measure(a,b,c);break;case 0:break;default:Qh()}}
;var ur=S("web_enable_lifecycle_monitoring")&&0!==rr(),vr=S("web_enable_lifecycle_monitoring");function wr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Sm():d;this.j=c;this.scheduler=d;this.i=new Fh;this.h=a;for(a={eb:0};a.eb<this.h.length;a={Qb:a.Qb,eb:a.eb},a.eb++)a.Qb=this.h[a.eb],c=function(e){return function(){e.Qb.Gc();b.h[e.eb].oc=!0;b.h.every(function(f){return!0===f.oc})&&b.i.resolve()}}(a),d=this.getPriority(a.Qb),d=this.scheduler.bb(c,d),this.h[a.eb]=Object.assign({},a.Qb,{Gc:c,
jobId:d})}
function xr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.oc||(a.scheduler.qa(c.jobId),a.scheduler.bb(c.Gc,10))}
wr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.oc||this.scheduler.qa(b.jobId),b.oc=!0;this.i.resolve()};
wr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function yr(a){this.state=a;this.plugins=[];this.l=void 0;this.s={};ur&&sr(this.state)}
m=yr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;ur&&tr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(xr(this.j),this.j=void 0);zr(this,a,b);this.state=a;ur&&sr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ar(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ar(a,b){var c=b.filter(function(e){return 10===Br(a,e)}),d=b.filter(function(e){return 10!==Br(a,e)});
return a.s.fg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Le.apply(a,[c].concat(ja(e))),2);a.Cd.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Me.apply(a,[c].concat(ja(e)));a.Cd.apply(a,[d].concat(ja(e)))}}
m.Me=function(a){for(var b=B.apply(1,arguments),c=Sm(),d=v(a),e=d.next(),f={};!e.done;f={Ab:f.Ab},e=d.next())f.Ab=e.value,c.Ib(function(g){return function(){Cr(g.Ab.name);g.Ab.callback.apply(g.Ab,ja(b));Dr(g.Ab.name)}}(f))};
m.Le=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=Sm(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.v(0);f.fb=e.value;f.Kb=void 0;g=function(k){return function(){Cr(k.fb.name);var l=k.fb.callback.apply(k.fb,ja(b));"function"===typeof(null==l?void 0:l.then)?k.Kb=l.then(function(){Dr(k.fb.name)}):Dr(k.fb.name)}}(f);
c.Ib(g);return f.Kb?h.yield(f.Kb,3):h.v(3)}f={fb:f.fb,Kb:f.Kb};e=d.next();return h.v(2)})};
m.Cd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Gc:function(){Cr(e.name);e.callback.apply(e,ja(b));Dr(e.name)},
priority:Br(c,e)}});
d.length&&(this.j=new wr(d))};
function Br(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Cr(a){ur&&a&&sr(a)}
function Dr(a){ur&&a&&tr(a)}
function zr(a,b,c){vr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(yr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Er(a){yr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Fr;w(Er,yr);Er.prototype.i=function(a,b){var c=this;this.h=lm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Er.prototype.m=function(a,b){this.h&&(qi.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Gr(){Fr||(Fr=new Er);return Fr}
;var Hr=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Hr});function Ir(){this.store={};this.h={}}
Ir.prototype.storePayload=function(a,b){a=Jr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Ir.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Kr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ja(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ja(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ja(this.smartExtractMatchingEntries(a))));return c};
Ir.prototype.extractMatchingEntries=function(a){a=Kr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
Ir.prototype.getSequenceCount=function(a){a=Kr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Kr(a,b){var c=Jr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Jr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Lr(b.auth,g[0])){var h=b.isJspb;Lr(void 0===h?"undefined":h?"true":"false",g[1])&&Lr(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Lr(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Lr(a,b){return void 0===a||"undefined"===a?!0:a===b}
Ir.prototype.getSequenceCount=Ir.prototype.getSequenceCount;Ir.prototype.extractMatchingEntries=Ir.prototype.extractMatchingEntries;Ir.prototype.smartExtractMatchingEntries=Ir.prototype.smartExtractMatchingEntries;Ir.prototype.storePayload=Ir.prototype.storePayload;function Jr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Mr(a,b){if(a)return a[b.name]}
;var Nr=U("initial_gel_batch_timeout",2E3),Or=U("gel_queue_timeout_max_ms",6E4),Pr=Math.pow(2,16)-1,Qr=U("gel_min_batch_size",5),Rr=void 0;function Sr(){this.l=this.h=this.i=0;this.j=!1}
var Tr=new Sr,Ur=new Sr,Vr=new Sr,Wr=new Sr,Xr,Yr=!0,Zr=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Zr);var $r={};function as(){var a=E("yt.logging.ims");a||(a=new Ir,D("yt.logging.ims",a));return a}
function bs(a,b){if("log_event"===a.endpoint){cs();var c=ds(a),d=es(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=dq[d||""];var f,g,h,k=null==pr().resolve(new kr(Mo))?void 0:null==(f=No())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;k=gs(e.tier);if(400===k){hs(a,b);return}}$r[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};as().storePayload(e,a.payload);is(b,c,e,"gelDebuggingEvent"===d)}}
function is(a,b,c,d){function e(){js({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(Rr=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=W(),h=ks(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=as().getSequenceCount(c));1E3<=d?e():d>=a?Xr||(Xr=ls(function(){e();Xr=void 0},0)):10<=g-k&&(ms(f,c.tier),h.l=g)}
function hs(a,b){if("log_event"===a.endpoint){cs();var c=ds(a),d=new Map;d.set(c,[a.payload]);var e=es(a.payload)||"";b&&(Rr=new b);return new Ud(function(f,g){Rr&&Rr.isReady()?ns(d,Rr,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function ds(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Zr[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function js(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Ud(function(e,f){var g=ks(c,d),h=g.j;g.j=!1;ps(g.i);ps(g.h);g.h=0;Rr&&Rr.isReady()?void 0===d&&S("enable_web_tiered_gel")?qs(e,f,a,b,c,300,h):qs(e,f,a,b,c,d,h):(ms(c,d),e())})}
function qs(a,b,c,d,e,f,g){var h=Rr;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=S("enable_web_tiered_gel")?as().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):as().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys($r)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?as().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):as().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete $r[l];ns(k,h,a,b,c,!1,g)}
function ms(a,b){function c(){js({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=ks(a,b),e=d===Wr||d===Vr?5E3:Or;S("web_gel_timeout_cap")&&!d.h&&(e=ls(function(){c()},e),d.h=e);
ps(d.i);e=R("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Yr&&(e=Nr);e=ls(function(){0<U("gel_min_batch_size")?as().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Qr&&c():c()},e);
d.i=e}
function ns(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(W()),k=a.size,l=(void 0===g?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={jc:g.jc,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,lc:g.lc,kc:g.kc},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=tb({context:To(b.config_||So())});if(!Oa(p)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=
p;(p=Zr[n])&&rs(g.batchRequest,n,p);delete Zr[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;ss(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.lc=function(t){S("start_client_gcf")&&qi.oa(function(){return A(function(r){return r.yield(ts(t),0)})});
k--;k||c()};
g.jc=0;g.kc=function(t){return function(){t.jc++;if(e.bypassNetworkless&&1===t.jc)try{Ip(b,l,t.batchRequest,us({writeThenSend:!0},t.dangerousLogToVisitorSession,t.lc,t.kc,f)),Yr=!1}catch(r){Sk(r),d()}k--;k||c()}}(g);
try{Ip(b,l,g.batchRequest,us(e,g.dangerousLogToVisitorSession,g.lc,g.kc,f)),Yr=!1}catch(t){Sk(t),d()}}}
function us(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Nf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};vs()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function ss(a,b,c){vs()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Pr/2)),c++,c>Pr&&(c=1),Nk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function rs(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function cs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=fl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Hr=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Hr),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function vs(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function ls(a,b){return S("transport_use_scheduler")?S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?lm(function(){if("none"===Gr().currentState)a();else{var c={};Gr().install((c.none={callback:a},c))}},b):lm(a,b):kl(a,b)}
function ps(a){S("transport_use_scheduler")?qi.qa(a):window.clearTimeout(a)}
function ts(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Mr(d,sk),g=null==(f=d)?void 0:f.hotHashData,h=Mr(d,rk),l=null==(k=d)?void 0:k.coldHashData,(n=pr().resolve(new kr(Mo)))?g?e?p.yield(Oo(n,g,e),2):p.yield(Oo(n,g),2):p.v(2):p.return()):l?h?p.yield(Po(n,l,h),0):p.yield(Po(n,l),0):p.v(0)})}
function ks(a,b){b=void 0===b?200:b;return a?300===b?Wr:Ur:300===b?Vr:Tr}
function es(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,dq[b])return b}
function gs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var ws=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",ws);
function xs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Yq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,ws[b]=b in ws?ws[b]+1:0,a.sequence={index:ws[b],groupKey:b},d.endOfSequence&&delete ws[d.sequenceGroup]);(d.sendIsolatedPayload?hs:bs)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function bn(a,b,c){c=void 0===c?{}:c;var d=Fq;R("ytLoggingEventsDefaultDisabled",!1)&&Fq===Fq&&(d=null);S("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=Yq(),c.timestamp=W());xs(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var ys=new Set,zs=0,As=0,Bs=0,Cs=[],Ds=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function an(a){Es(a)}
function Fs(a){Es(a,"WARNING")}
function Gs(a){a instanceof Error?Es(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",Fs(a))}
function Es(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=zs))){d=Cs;var k=Dc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=Jl(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var x="params."+t,y=Ll(r[t]);c[x]=y;p+=x.length+y.length;if(500<p)break}}else c.params=Ll(r)}if(d.length)for(t=0;t<d.length&&!(p=Jl(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Fl();c=v(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Yf)){a=d.weight;break a}a=v(a.Sa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(Al);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.mc[t.name])for(e=v(c.mc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Jc(f);break}t.params||(t.params={});a=Fl();t.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Sa.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));zb("sample").constructor!==yb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!ys.has(t.message)){if(g&&S("web_enable_error_204"))Hs(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Gl.ab("handleError",t),S("record_app_crashed_web")&&0===Bs&&1===t.sampleWeight&&(Bs++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),bn("appCrashed",g)),As++):"WARNING"===b&&Gl.ab("handleWarning",t);if(S("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Ds);for(c=a.next();!c.done;c=a.next())if(hn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));e=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Ok("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(bn("clientError",h),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&js(void 0,void 0,!1))}S("suppress_error_204_logging")||Hs(b,t)}try{ys.add(t.message)}catch(z){}zs++}}}
function Hs(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}rl(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Is(){this.register=new Map}
function Js(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.ag("ABORTED")}
Is.prototype.clear=function(){Js(this);this.register.clear()};
var Ks=new Is;var Ls=Date.now().toString();
function Ms(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ls)for(a=1,b=0;b<Ls.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ls.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Ns,Os=C.ytLoggingDocDocumentNonce_;Os||(Os=Ms(),D("ytLoggingDocDocumentNonce_",Os));Ns=Os;function Ps(a){this.h=a}
m=Ps.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new zk;void 0!==this.h.trackingParams?K(a,1,hf(this.h.trackingParams,!0)):(void 0!==this.h.veType&&K(a,2,sf(this.h.veType)),void 0!==this.h.veCounter&&K(a,6,sf(this.h.veCounter)),void 0!==this.h.elementIndex&&K(a,3,sf(this.h.elementIndex)),this.h.isCounterfactual&&K(a,5,pf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();Yf(a,zk,7,b)}void 0!==this.h.youtubeData&&Yf(a,tk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function Qs(a){return R("client-screen-nonce-store",{})[void 0===a?0:a]}
function Rs(a,b){b=void 0===b?0:b;var c=R("client-screen-nonce-store");c||(c={},Nk("client-screen-nonce-store",c));c[b]=a}
function Ss(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ts(a){return R(Ss(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",Ts);function Us(){var a=R("csn-to-ctt-auth-info");a||(a={},Nk("csn-to-ctt-auth-info",a));return a}
function Vs(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Ws(a){a=Qs(void 0===a?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Ws);function Xs(a,b,c){var d=Us();(c=Ws(c))&&delete d[c];b&&(d[a]=b)}
function Ys(a){return Us()[a]}
D("yt_logging_screen.getCttAuthInfo",Ys);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Qs(c)||b!==R(Ss(c)))if(Xs(a,d,c),Rs(a,c),Nk(Ss(c),b),b=function(){setTimeout(function(){a&&bn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ns,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Zs=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Zs);function $s(a){Ik(Zs,arguments)}
;function at(){var a=sb(bt),b;return(new Ud(function(c,d){a.onSuccess=function(e){jl(e)?c(new ct(e)):d(new dt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new dt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new dt("Request timed out","net.timeout",e))};
b=rl("//googleads.g.doubleclick.net/pagead/id",a)})).sc(function(c){c instanceof ae&&b.abort();
return Zd(c)})}
function dt(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(dt,$a);function ct(a){this.xhr=a}
;function et(){this.h=0;this.value_=null}
et.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:ft(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:gt(a):this};
et.prototype.getValue=function(){return this.value_};
et.prototype.isRejected=function(){return 2==this.h};
et.prototype.$goog_Thenable=!0;function gt(a){var b=new et;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function ft(a){var b=new et;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function ht(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:cl(a)?"same-origin":"cors",credentials:cl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function jt(){return wg()||(ze||Ae)&&hn("applewebkit")&&!hn("version")&&(!hn("safari")||hn("gsa/"))||Rc&&hn("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function kt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in xk)if(xk[d]==c.embeddedPlayerMode){b=xk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function lt(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof mt;this.isTimeout=a instanceof dt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ae}
w(lt,$a);lt.prototype.name="BiscottiError";function mt(){$a.call(this,"Biscotti ID is missing from server")}
w(mt,$a);mt.prototype.name="BiscottiMissingError";var bt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},nt=null;function ot(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!jt())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if("1"==qb(a))return Error("Biscotti ID is not available in private embed mode");if(kt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Gk(){var a=ot();if(void 0!==a)return Zd(a);nt||(nt=at().then(pt).sc(function(b){return qt(2,b)}));
return nt}
function pt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new mt;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new mt;a=a.id;Hk(a);nt=ft(a);rt(18E5,2);return a}
function qt(a,b){b=new lt(b);Hk("");nt=gt(b);0<a&&rt(12E4,a-1);throw b;}
function rt(a,b){kl(function(){at().then(pt,function(c){return qt(b,c)}).sc(bb)},a)}
function st(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Gk()}catch(b){return Zd(b)}}
;function tt(a){if("1"!=qb(R("PLAYER_VARS",{}))){a&&Fk();try{st().then(function(){},function(){}),kl(tt,18E5)}catch(b){Sk(b)}}}
;function ut(){var a=Zl(),b=bm(119),c=1<window.devicePixelRatio;if(document.body&&Ai(document.body,"exp-invert-logo"))if(c&&!Ai(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ai(d,"inverted-hdpi")){var e=yi(d);zi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ai(document.body,"inverted-hdpi")&&Bi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=cm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Wl[b]:(c=d.toString(16),Wl[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Wl)Wl.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Wl[f])));var f=d.join("&");Sl(b,f,63072E3,a.i,c)}}
;var vt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function wt(){var a=void 0===a?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;bc(cc(5,a));try{var b=al(a).theme;return vt.get(b)||null}catch(c){}return null}
;function xt(){this.h={};if(this.i=Vl()){var a=Tl("CONSISTENCY");a&&zt(this,{encryptedTokenJarContents:a})}}
xt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Pa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];zt(this,a)}};
function zt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Sl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var At=window.location.hostname.split(".").slice(-2).join(".");function Bt(){var a=R("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===R("INNERTUBE_CLIENT_NAME")&&(this.h=Ct(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Dt;function Et(){Dt=E("yt.clientLocationService.instance");Dt||(Dt=new Bt,D("yt.clientLocationService.instance",Dt));return Dt}
m=Bt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===R("INNERTUBE_CLIENT_NAME")?(this.h=Ct(this))&&this.h.set("yt-location-playability-token",a,15552E3):Sl("YT_CL",JSON.stringify({loctok:a}),15552E3,At,!0))};
function Ct(a){return void 0===a.h?new Tm("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Ct(this))&&this.h.remove("yt-location-playability-token"):Ul("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===R("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Ft(a,b){var c,d=null==(c=Mr(a,wk))?void 0:c.signal;if(d&&b.Ub&&(c=b.Ub[d]))return c();var e;if((c=null==(e=Mr(a,uk))?void 0:e.request)&&b.Wd&&(e=b.Wd[c]))return e();for(var f in a)if(b.ed[f]&&(a=b.ed[f]))return a()}
;function Gt(a){return function(){return new a}}
;var Ht={},It=(Ht.WEB_UNPLUGGED="^unplugged/",Ht.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Ht.WEB_UNPLUGGED_OPS="^unplugged/",Ht.WEB_UNPLUGGED_PUBLIC="^unplugged/",Ht.WEB_CREATOR="^creator/",Ht.WEB_KIDS="^kids/",Ht.WEB_EXPERIMENTS="^experiments/",Ht.WEB_MUSIC="^music/",Ht.WEB_REMIX="^music/",Ht.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Ht.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Ht);
function Jt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=It[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(It).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Kt(){}
Kt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Pl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=tb(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Zl();var l="USER_INTERFACE_THEME_LIGHT";bm(165)?l="USER_INTERFACE_THEME_DARK":bm(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:wt()||l;h.userInterfaceTheme=k;if(!f){if(k=gm())h.connectionType=
k;S("web_log_effective_connection_type")&&(k=hm())&&(g.client.effectiveConnectionType=k)}var n;if(S("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}S("web_gcf_hashes_innertube")&&(k=Qo())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);p=al(C.location.href);!S("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&Ql.h&&(p=Ql.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Rl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!S("web_lr_app_quality_killswitch")&&(p=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(T){}t=void 0}t&&(h.timeZone=t)}(t=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=gl();xt.h||(xt.h=new xt);h=xt.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!S("web_prequest_context_killswitch")&&(r=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=r);t=Zl();r=bm(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?e&&(f=Ws())&&(g.clientScreenNonce=f):
!f&&(f=Ws())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Et().setLocationOnInnerTubeContext(g);try{var x=dl(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));for(var I=z.next();!I.done;I=z.next()){var J=v(I.value),M=J.next().value,H=J.next().value;x=M;y=H;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}}catch(T){Es(T)}z=g}else Es(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
z={};z={context:z};if(I=this.h(a)){this.i(z,I,b);var O;b="/youtubei/v1/"+Jt(this.j());(I=null==(O=Mr(a.commandMetadata,vk))?void 0:O.apiUrl)&&(b=I);O=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(O=String(b)+String(ec(O)));b={};b.key=R("INNERTUBE_API_KEY");S("json_condensed_response")&&(b.prettyPrint="false");O=bl(O,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:O,jb:ht(O),Pa:z,config:a};a.config.Wb?a.config.Wb.identity=c:a.config.Wb={identity:c};return a}Es(new V("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(Kt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Lt(){}
w(Lt,Kt);Lt.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",jb:ht("/getDatasyncIdsEndpoint","GET"),Pa:{}}};
Lt.prototype.j=function(){return[]};
Lt.prototype.h=function(){};
Lt.prototype.i=function(){};var Mt={},Nt=(Mt.GET_DATASYNC_IDS=Gt(Lt),Mt);var Ot="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Pt(a,b){var c=void 0===c?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=dc(window.location.href);e&&d.push(e);e=dc(a);if(0<=db(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Kh(d,a),a=d.href)if(a=ec(a),a=fc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ws()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Qt(a,b,f)}else Qt(a,b)}
function Qt(a,b,c){a=Rt(a);b=b?lc(b):"";c=c||5;jt()&&Sl(a,b,c)}
function Rt(a){for(var b=v(Ot),c=b.next();!c.done;c=b.next())a=sc(a,c.value);return"ST-"+$b(a).toString(36)}
;function St(){try{return!!self.localStorage}catch(a){return!1}}
;function Tt(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ut(a){if(St()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Tt(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Vt(){if(!St())return!1;var a=jm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Tt(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Wt(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return S("copy_login_info_to_st_cookie")&&("WEB"===R("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===R("INNERTUBE_CLIENT_NAME"))&&a}
function Xt(a){if(R("LOGGED_IN",!0)&&Wt()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=dc(window.location.href);c&&b.push(c);c=dc(a);0<=db(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=ec(a),(b=fc(b))?(b=Rt(b),b=(b=Tl(b)||null)?$k(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Wt()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Pt(a,b)}}
;function Yt(a){var b=B.apply(1,arguments);if(!Zt(a)||b.some(function(d){return!Zt(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())$t(a,c.value);return a}
function $t(a,b){for(var c in b)if(Zt(b[c])){if(c in a&&!Zt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});$t(a[c],b[c])}else if(au(b[c])){if(c in a&&!au(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);bu(a[c],b[c])}else a[c]=b[c];return a}
function bu(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Zt(c)?a.push($t({},c)):au(c)?a.push(bu([],c)):a.push(c);return a}
function Zt(a){return"object"===typeof a&&!Array.isArray(a)}
function au(a){return"object"===typeof a&&Array.isArray(a)}
;function cu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function du(){var a=cu();a.info||(a.info={});return a.info}
function eu(a){a=cu(a);a.metadata||(a.metadata={});return a.metadata}
function fu(a){a=cu(a);a.tick||(a.tick={});return a.tick}
function gu(a){a=cu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function hu(a){a=gu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function iu(a){var b=cu(a).nonce;b||(b=Ms(),cu(a).nonce=b);return b}
;function ju(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function ku(a){a=a||"";var b=E("ytcsi.reference");b||(ju(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=ju(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},lu=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",
X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]=
"LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]=
"LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",
X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]=
"LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant=
"LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X),Y={},mu=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p=
"httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav=
"kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",
Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",
Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID=
"requestIds",Y),nu="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),ou={},pu=(ou.ccs="CANARY_STATE_",ou.mver="MEASUREMENT_VERSION_",ou.pis="PLAYER_INITIALIZED_STATE_",ou.yt_pt="LATENCY_PLAYER_",ou.pa="LATENCY_ACTION_",
ou.ctop="TOP_ENTITY_TYPE_",ou.yt_vst="VIDEO_STREAM_TYPE_",ou),qu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ru(a,b,c){c=gu(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in mu){c=mu[a];0<=db(nu,c)&&(b=!!b);a in pu&&"string"===typeof b&&(b=pu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Yt({},d)}0<=db(qu,a)||Fs(new V("Unknown label logged with GEL CSI",a))}
;function su(a,b){Vo.call(this,1,arguments);this.timer=b}
w(su,Vo);var tu=new Wo("aft-recorded",su);var uu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",uu);function vu(){this.h=0}
function wu(){vu.h||(vu.h=new vu);return vu.h}
vu.prototype.tick=function(a,b,c,d){xu(this,"tick_"+a+"_"+b)||bn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
vu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");xu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,bn("latencyActionInfo",a,{cttAuthInfo:c}))};
vu.prototype.jspbInfo=function(){};
vu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");xu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,bn("latencyActionSpan",a,{cttAuthInfo:c}))};
function xu(a,b){uu[b]=uu[b]||{count:0};var c=uu[b];c.count++;c.time=W();a.h||(a.h=lm(function(){var d=W(),e;for(e in uu)uu[e]&&6E4<d-uu[e].time&&delete uu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Fs(c)),!0):!1}
;var yu=window;function zu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Au(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Bu(e.requestStart),e.responseEnd=Bu(e.responseEnd),e.redirectStart=Bu(e.redirectStart),e.redirectEnd=Bu(e.redirectEnd),e.domainLookupEnd=Bu(e.domainLookupEnd),e.connectStart=Bu(e.connectStart),e.connectEnd=
Bu(e.connectEnd),e.responseStart=Bu(e.responseStart),e.secureConnectionStart=Bu(e.secureConnectionStart),e.domainLookupStart=Bu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function Bu(a){return Math.round(Cu()+a)}
function Cu(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=yu.performance||yu.mozPerformance||yu.msPerformance||yu.webkitPerformance||new zu;var Du=!1,Eu={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Va(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||bb,Z);function Fu(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;eu(c).loadType=d}(a=ru(a,b,c))&&Gu(a,c)}}
function Gu(a,b){if(!S("web_csi_action_sampling_enabled")||!cu(b).actionDisabled){var c=ku(b||"");Yt(c.info,a);a.loadType&&(c=a.loadType,eu(b).loadType=c);Yt(hu(b),a);c=iu(b);b=cu(b).cttAuthInfo;wu().info(a,c,b)}}
function Hu(){var a,b,c,d;return(null!=(d=null==pr().resolve(new kr(Mo))?void 0:null==(a=No())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Iu(a,b,c){if(!S("web_csi_action_sampling_enabled")||!cu(c).actionDisabled){var d=iu(c),e;if(e=S("web_csi_debug_sample_enabled")&&d)if(!1===cu(c).debugTicksExcludedLogged)e=!1;else if(0===Hu().length)e=cu(c).debugTicksExcludedLogged=!1;else{var f,g,h;e=(null==pr().resolve(new kr(Mo))?void 0:null==(f=No())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=Hu();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=
f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;cu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Gu(f,c));cu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Z.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Z.mark(e)));e=ku(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=gu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=fu(c);e=b||W();S("log_repeated_ytcsi_ticks")?
a in f||(f[a]=e):f[a]=e;f=cu(c).cttAuthInfo;"_start"===a?(a=wu(),xu(a,"baseline_"+d)||bn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):wu().tick(a,d,b,f);Ju(c);return e}}}
function Ku(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Hq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Lu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Yb()&&a.setAttribute("nonce",Yb());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=Cu(),Iu("rsf_"+b,c+Math.round(a.fetchStart)),Iu("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Mu(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Iu("wffs",Bu(b.startTime)),Iu("wffe",Bu(b.responseEnd)))}
function Nu(a){var b=Ou("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Ou(b[d],a);if(e)return e}return NaN}
function Ou(a,b){if(a=fu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Ju(a){var b=Ou("_start",a),c=Nu(a);b&&c&&!Du&&(ap(tu,new su(Math.round(c-b),a)),Du=!0)}
function Pu(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Pu(a[d],b[d]))return!1;return!0}
function Qu(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return Bu(a.startTime)}a=Z.timing;
return a.ze?Math.max(0,a.ze):0}
;function Ru(a,b){Rk(function(){ku("").info.actionType=a;b&&Nk("TIMING_AFT_KEYS",b);Nk("TIMING_ACTION",a);var c=R("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&Fu(d,c[d]);c={isNavigation:!0,actionType:lu[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=R("PREVIOUS_ACTION"))c.previousAction=lu[d]||"LATENCY_ACTION_UNKNOWN";if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Ws())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Ku();if(1===d||-1===d)c.isVisible=
!0;eu();du();c.loadType="cold";d=du();var e=Au(),f=Cu(),g=R("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Iu("srt",e.responseStart),1!==d.prerender&&Iu("_start",f,void 0));d=Qu();0<d&&Iu("fpt",d);d=Au();d.isPerformanceNavigationTiming&&Gu({performanceNavigationTiming:!0});Iu("nreqs",d.requestStart,void 0);Iu("nress",d.responseStart,void 0);Iu("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Iu("nrs",d.redirectStart,void 0),Iu("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Iu("ndnss",d.domainLookupStart,void 0),Iu("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Iu("ntcps",d.connectStart,void 0),Iu("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Cu()&&0<d.connectEnd-d.secureConnectionStart&&(Iu("nstcps",d.secureConnectionStart,void 0),Iu("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&Mu();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in Eu)Eu.hasOwnProperty(h)&&
(e=Eu[h],Lu(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Gu(c);c=du();h=hu();if("cold"===eu().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=fu();e=gu();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Iu(k,Ou(k));else if(S("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Iu(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=ru(f,c[f]))&&!Pu(hu(),f)&&(Yt(h,f),Yt(k,f),d=!0);d&&Gu(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Su()&&Nu()&&Ju()})()}
function Tu(a,b,c,d){Rk(Fu)(a,b,c,d)}
function Uu(a,b,c){return Rk(Iu)(a,b,c)}
function Su(){return Rk(function(){return"_start"in fu()})()}
function Vu(){Rk(function(){var a=iu();requestAnimationFrame(function(){setTimeout(function(){a===iu()&&Uu("ol",void 0,void 0)},0)})})()}
var Wu=window;Wu.ytcsi&&(Wu.ytcsi.info=Tu,Wu.ytcsi.tick=Uu);var Xu="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Yu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Zu(a,b,c,d){this.m=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Ub||(a.Ub={});a.Ub=Object.assign({},Nt,a.Ub)}
function $u(a,b,c,d){if(void 0!==Zu.h){if(d=Zu.h,a=[a!==d.m,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else Zu.h=new Zu(a,b,c,d)}
function av(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Pl:c;var d=Ft(b,a.m);if(!d)return Zd(new V("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(Xt(e.input),new Ud(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.jb)?void 0:g.mode)?"cors":void 0;if(a.l.af){var n=e.config,p;n=null==n?void 0:null==(p=n.Wb)?void 0:p.sessionIndex;p=Ol(0,{sessionIndex:n});k=Object.assign({},bv(h),p);return l.v(2)}return l.yield(cv(e.config,
h),3)}2!=l.h&&(k=l.i);f(dv(a,e,k));l.h=0})})):Zd(new V("Error: Failed to build request for command.",b))}
function ev(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.dg)?0:d.hg)&&a.j){d=v(Xu);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function dv(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,x,y,z,I,J,M,H,O,T,Fa,ta,la,ma,na,ic,Vq,Wq,Xq;return A(function(ia){switch(ia.h){case 1:ia.v(2);break;case 3:if((d=ia.i)&&!d.isExpired())return ia.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Pa)?0:f.context)){ia.v(4);break}g=b.Pa.context;ia.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ia.v(4);break}l=k.value;return ia.yield(l.Zf(g),8);case 8:k=h.next();ia.v(7);break;case 4:if(null==(n=a.i)||!n.eg(b.input,b.Pa)){ia.v(11);
break}return ia.yield(a.i.Wf(b.input,b.Pa),12);case 12:return p=ia.i,S("kevlar_process_local_innertube_responses_killswitch")||ev(a,p,b),ia.return(p);case 11:return(x=null==(r=b.config)?void 0:r.Ra)&&a.h.has(x)&&S("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Pa),J=null!=(I=null==(z=b.jb)?void 0:z.headers)?I:{},b.jb=Object.assign({},b.jb,{headers:Object.assign({},J,c)}),M=Object.assign({},b.jb),"POST"===b.jb.method&&(M=Object.assign({},M,{body:y})),(null==(H=b.config)?0:H.Je)&&
Uu(b.config.Je),O=function(){return a.aa.fetch(b.input,M,b.config)},t=O(),x&&a.h.set(x,t)),ia.yield(t,13);
case 13:if((T=ia.i)&&"error"in T&&(null==(Fa=T)?0:null==(ta=Fa.error)?0:ta.details))for(la=T.error.details,ma=v(la),na=ma.next();!na.done;na=ma.next())ic=na.value,(Vq=ic["@type"])&&-1<Yu.indexOf(Vq)&&(delete ic["@type"],T=ic);x&&a.h.has(x)&&a.h.delete(x);(null==(Wq=b.config)?0:Wq.Ke)&&Uu(b.config.Ke);if(T||null==(Xq=a.i)||!Xq.Of(b.input,b.Pa)){ia.v(14);break}return ia.yield(a.i.Vf(b.input,b.Pa),15);case 15:T=ia.i;case 14:return ev(a,T,b),ia.return(T||void 0)}})}
function cv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Wb)?void 0:d.sessionIndex;var h=g.yield;var k=Ol(0,{sessionIndex:e});if(!(k instanceof Ud)){var l=new Ud(bb);Vd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},bv(b),f)))})}
function bv(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));R("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&
(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var fv=new jr("INNERTUBE_TRANSPORT_TOKEN");var gv=["share/get_web_player_share_panel"],hv=["feedback"],iv=["notification/modify_channel_preference"],jv=["browse/edit_playlist"],kv=["subscription/subscribe"],lv=["subscription/unsubscribe"];function mv(){}
w(mv,Kt);mv.prototype.j=function(){return kv};
mv.prototype.h=function(a){return Mr(a,Ek)||void 0};
mv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(mv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function nv(){}
w(nv,Kt);nv.prototype.j=function(){return lv};
nv.prototype.h=function(a){return Mr(a,Dk)||void 0};
nv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(nv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ov(){}
w(ov,Kt);ov.prototype.j=function(){return hv};
ov.prototype.h=function(a){return Mr(a,yk)||void 0};
ov.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(ov.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function pv(){}
w(pv,Kt);pv.prototype.j=function(){return iv};
pv.prototype.h=function(a){return Mr(a,Ck)||void 0};
pv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function qv(){}
w(qv,Kt);qv.prototype.j=function(){return jv};
qv.prototype.h=function(a){return Mr(a,Bk)||void 0};
qv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function rv(){}
w(rv,Kt);rv.prototype.j=function(){return gv};
rv.prototype.h=function(a){return Mr(a,Ak)};
rv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var sv=new jr("NETWORK_SLI_TOKEN");function tv(a){this.h=a}
tv.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=bc(cc(5,sc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;S("wug_networking_gzip_request")&&(e=Bp(b));f=new window.Request(a,e);return S("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Fs(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Fs(h)}))})};
tv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Rf(),b=b.then(function(c){Fs(new V("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
tv[ir]=[new kr(sv)];var uv=new jr("NETWORK_MANAGER_TOKEN");var vv;function wv(){var a,b,c;return A(function(d){if(1==d.h)return a=pr().resolve(fv),a?d.yield(av(a),2):(Fs(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Fs(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Pf;return d.return(c)}Fs(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var xv=C.caches,yv;function zv(a){var b=a.indexOf(":");return-1===b?{td:a}:{td:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Av(){return A(function(a){if(void 0!==yv)return a.return(yv);yv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(xv.open("test-only"),4);case 4:return d.yield(xv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(yv)})}
function Bv(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(Av(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(xv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=zv(f),h=g.datasyncId,!h||a.includes(h)||b.push(xv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Cv(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(Av(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=jm("cache contains other");return h.yield(xv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=zv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Dv(){wv().then(function(a){a&&(ro(a),Bv(a),Ut(a))})}
function Ev(){var a=new tq;qi.oa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=jm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];ro(g);Bv(g);Ut(g);return f.return()}c=Vt();return f.yield(Cv(),3);case 3:return d=f.i,f.yield(so(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?Dv():a.h.add("publicytnetworkstatus-online",Dv,!0,void 0,void 0),f.h=0}})})}
;var Ph=fa(["data-"]);function Fv(a){a&&(a.dataset?a.dataset[Gv("loaded")]="true":Oh(a))}
function Hv(a,b){return a?a.dataset?a.dataset[Gv(b)]:a.getAttribute("data-"+b):null}
var Iv={};function Gv(a){return Iv[a]||(Iv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Jv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Kv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Lv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Jv,""),c=c.replace(Kv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Mv(a,b,c)}
function Mv(a,b,c){c=void 0===c?null:c;var d=Nv(a),e=document.getElementById(d),f=e&&Hv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=cr(d,b),b=""+Qa(b),Ov[b]=f),g||(e=Pv(a,d,function(){if(!Hv(e,"loaded")){Fv(e);fr(d);var h=Wa(gr,d);kl(h,0)}},c)))}
function Pv(a,b,c,d){d=void 0===d?null:d;var e=Gd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Uh(e,pk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Qv(a){a=Nv(a);var b=document.getElementById(a);b&&(gr(a),b.parentNode.removeChild(b))}
function Rv(a,b){a&&b&&(a=""+Qa(b),(a=Ov[a])&&er(a))}
function Nv(a){var b=document.createElement("a");Kh(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(a)}
var Ov={};var Sv=[],Tv=!1;function Uv(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&jt()){var a=R("PLAYER_VARS",{});if("1"!=qb(a)&&!kt(a)){var b=function(){Tv=!0;"google_ad_status"in window?Nk("DCLKSTAT",1):Nk("DCLKSTAT",2)};
try{Lv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Sv.push(qi.oa(function(){if(!(Tv||"google_ad_status"in window)){try{Rv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Tv=!0;Nk("DCLKSTAT",3)}},5E3))}}}
function Vv(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Wv(a){yr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.la},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.G},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.G},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Wv,yr);Wv.prototype.la=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Wv.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Wv.prototype.G=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Wv.prototype.i=function(){this.h=new Map};function Xv(a){yr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.G},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.G},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.G},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Xv,yr);Xv.prototype.i=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Xv.prototype.h=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Xv.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Xv.prototype.G=function(a,b){a(null==b?void 0:b.event)};function Yv(){this.l=new Wv;this.m=new Xv}
Yv.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function Zv(a){Vo.call(this,1,arguments);this.csn=a}
w(Zv,Vo);var dp=new Wo("screen-created",Zv),$v=[],aw=0,bw=new Map,cw=new Map,dw=new Map;
function ew(a,b,c,d,e){e=void 0===e?!1:e;for(var f=fw({cttAuthInfo:Ys(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ob(k)||!k.trackingParams&&!k.veType)&&Fs(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=gw(h,b);if(k.veType&&!cw.has(l)&&!dw.has(l)&&!e){bw.set(l,[a,b,c,h]);return}h=gw(c,b);bw.has(h)?hw(c,b):dw.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:gb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?iw("visualElementAttached",f,c):a?xs("visualElementAttached",c,a,f):bn("visualElementAttached",c,f)}
function iw(a,b,c){$v.push({De:a,payload:c,Uf:void 0,options:b});aw||(aw=ep())}
function fp(a){if($v){for(var b=v($v),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,bn(c.De,c.payload,c.options));$v.length=0}aw=0}
function gw(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function hw(a,b){a=gw(a,b);bw.has(a)&&(b=bw.get(a)||[],ew(b[0],b[1],b[2],[b[3]],!0),bw.delete(a))}
function fw(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function jw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
jw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Ws(void 0===c?0:c)){a=this.client;d=new Ps({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=gw(d,c);cw.set(f,!0);hw(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=fw({cttAuthInfo:Ys(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?iw("visualElementGestured",f,d):a?xs("visualElementGestured",d,a,f):bn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
jw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Ps({trackingParams:a}),b,void 0===c?0:c)};
jw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Ws(d);a||(a=(a=Ts(void 0===d?0:d))?new Ps({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=fw({cttAuthInfo:Ys(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?iw("visualElementStateChanged",d,b):a?xs("visualElementStateChanged",b,a,d):bn("visualElementStateChanged",b,d))}};
function kw(a,b){if(void 0===b)for(var c=Vs(),d=0;d<c.length;d++)void 0!==c[d]&&kw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&ew(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function lw(){Yv.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(lw,Yv);lw.prototype.j=function(){bn("finalPayload",{csn:Ws()})};
lw.prototype.h=function(){Js(Ks)};
lw.prototype.i=function(){var a=kw;jw.h||(jw.h=new jw);a(jw.h)};function mw(){}
function nw(){var a=E("ytglobal.storage_");a||(a=new mw,D("ytglobal.storage_",a));return a}
mw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(ow()):d.return()})};
function ow(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",mw);function $m(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=U("ytidb_transaction_ended_event_rate_limit_session",.2)}
$m.prototype.Ha=function(a){this.handleError(a)};
$m.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":pw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=U("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function pw(a,b){nw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:qw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:qw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function qw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function rw(a,b,c){G.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.s=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=db(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.s)}
w(rw,G);rw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Tk(d)}}};
rw.prototype.M=function(){window.removeEventListener("message",this.s);G.prototype.M.call(this)};function sw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new rw(!!R("WIDGET_ID_ENFORCE")),b=this.Ge.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=R("WIDGET_ID"))this.h.sessionId=a}
m=sw.prototype;m.Ge=function(a,b,c){"addEventListener"===a&&b?this.Fc(b[0],c):this.Vc(a,b,c)};
m.Vc=function(){};
m.zc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Fc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.zc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ee=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Cc());this.sendMessage("onReady");eb(this.i,this.Ad,this);this.i=[]};
m.Cc=function(){return null};
function tw(a,b){a.sendMessage("infoDelivery",b)}
m.Ad=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ad({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var uw={},vw=(uw["api.invalidparam"]=2,uw.auth=150,uw["drm.auth"]=150,uw["heartbeat.net"]=150,uw["heartbeat.servererror"]=150,uw["heartbeat.stop"]=150,uw["html5.unsupportedads"]=5,uw["fmt.noneavailable"]=5,uw["fmt.decode"]=5,uw["fmt.unplayable"]=5,uw["html5.missingapi"]=5,uw["html5.unsupportedlive"]=5,uw["drm.unavailable"]=5,uw["mrm.blocked"]=151,uw);var ww=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function xw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function yw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(ww);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function zw(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Aw(a){sw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Se.bind(this));this.addEventListener("onVolumeChange",this.Te.bind(this));this.addEventListener("onApiChange",this.Ne.bind(this));this.addEventListener("onPlaybackQualityChange",this.Pe.bind(this));this.addEventListener("onPlaybackRateChange",this.Qe.bind(this));this.addEventListener("onStateChange",this.Re.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ue.bind(this))}
w(Aw,sw);m=Aw.prototype;
m.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&xw(a)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=yw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=yw(e);break;case "loadPlaylist":case "cuePlaylist":e=zw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);xw(a)&&tw(this,this.Cc())}};
m.Fc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);sw.prototype.Fc.call(this,a,b)};
m.zc=function(a,b){var c=this,d=sw.prototype.zc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.ee.bind(this);this.h.h=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?vw[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Cc=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Re=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());tw(this,a)};
m.Pe=function(a){tw(this,{playbackQuality:a})};
m.Qe=function(a){tw(this,{playbackRate:a})};
m.Ne=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Te=function(){tw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Se=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());tw(this,a)};
m.Ue=function(){var a={sphericalProperties:this.api.getSphericalProperties()};tw(this,a)};
m.dispose=function(){sw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Bw(a){G.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
w(Bw,G);m=Bw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.kb("RECEIVING"))};
m.kb=function(a,b){this.started&&!this.Z()&&this.connection.kb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Cw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Dw(a,c))&&this.kb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Oe.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Oe=function(a,b){this.started&&!this.Z()&&this.connection.kb(a,this.Bc(a,b))};
m.Bc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.M=function(){this.connection.unsubscribe("command",this.wd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.M.call(this)};function Ew(a,b){Bw.call(this,b);this.api=a;this.start()}
w(Ew,Bw);Ew.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Ew.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Cw(a,b){switch(a){case "loadVideoById":return a=yw(b),[a];case "cueVideoById":return a=yw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=zw(b),[a];case "cuePlaylist":return a=zw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Dw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ew.prototype.Bc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Bw.prototype.Bc.call(this,a,b)};
Ew.prototype.M=function(){Bw.prototype.M.call(this);delete this.api};function Fw(a){a=void 0===a?!1:a;G.call(this);this.h=new L(a);zc(this,this.h)}
Ya(Fw,G);Fw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
Fw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
Fw.prototype.l=function(a,b){this.Z()||this.h.ab.apply(this.h,arguments)};function Gw(a,b,c){Fw.call(this);this.j=a;this.i=b;this.id=c}
w(Gw,Fw);Gw.prototype.kb=function(a,b){this.Z()||this.j.kb(this.i,this.id,a,b)};
Gw.prototype.M=function(){this.i=this.j=null;Fw.prototype.M.call(this)};function Hw(a,b,c){G.call(this);this.h=a;this.origin=c;this.i=Oq(window,"message",this.j.bind(this));this.connection=new Gw(this,a,b);zc(this,this.connection)}
w(Hw,G);Hw.prototype.kb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Hw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
Hw.prototype.M=function(){Pq(this.i);this.h=null;G.prototype.M.call(this)};function Iw(){this.state=1;this.h=null}
m=Iw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=xb();d=f?f.createScript(d):d;d=new Cb(d,Bb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,zb("From proto message. b/166824318"),e=Gb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Jw(this,d,e,a.program,b,c)}else Fs(Error("Cannot initialize botguard without program"))};
function Jw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Lv(c,function(){window[g]?Kw(a,d,g,e):(a.state=3,Qv(c),Fs(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Gd("SCRIPT"),b instanceof Cb?(b instanceof Cb&&b.constructor===Cb?b=b.h:(Na(b),b="type_error:SafeScript"),f.textContent=b,Th(f)):f.textContent=b,f.nonce=Yb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Kw(a,d,g,e):(a.state=4,Fs(new V("Unable to load Botguard from JS")))):Fs(new V("Unable to load VM; no url or JS provided"))}
function Kw(a,b,c,d){a.state=5;try{var e=new Gh({program:b,ke:c,He:S("att_web_record_metrics")});e.Xe.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&Fs(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Jd({gd:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Jd=function(a){return this.h.Dd(a)};
m.Qc=function(a){xc(this.h);this.h=a};function Lw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Mw(){Iw.apply(this,arguments)}
w(Mw,Iw);Mw.prototype.Qc=function(a){var b;null==(b=Lw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Dd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Mw.prototype.Tc=function(){return!!Lw()};
Mw.prototype.Jd=function(a){return Lw().bgvmc(a)};var Nw=new Mw;function Ow(){return Nw.Tc()}
function Pw(a){a=void 0===a?{}:a;return Nw.invoke(a)}
;function Qw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Qw.prototype.clone=function(){var a=new Qw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=sb(c):a[b]=c}return a};var Rw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Sw(a){a=a||"";if(window.spf){var b=a.match(Rw);spf.style.load(a,b?b[1]:"",void 0)}else Tw(a)}
function Tw(a){var b=Uw(a),c=document.getElementById(b),d=c&&Hv(c,"loaded");d||c&&!d||(c=Vw(a,b,function(){if(!Hv(c,"loaded")){Fv(c);fr(b);var e=Wa(gr,b);kl(e,0)}}))}
function Vw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=pk(a);Sh(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Uw(a){var b=Gd("A");Kh(b,new Ib(a,Jb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(a)}
;function Ww(){G.call(this);this.h=[]}
w(Ww,G);Ww.prototype.M=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.callback,void 0)}G.prototype.M.call(this)};function Xw(){Ww.apply(this,arguments)}
w(Xw,Ww);function Yw(a,b,c,d,e){G.call(this);var f=this;this.l=b;this.webPlayerContextConfig=d;this.vc=e;this.Ba=!1;this.api={};this.ea=this.s=null;this.S=new L;this.h={};this.Y=this.ma=this.elementId=this.Ka=this.config=null;this.W=!1;this.j=this.D=null;this.na={};this.wc=["onReady"];this.lastError=null;this.ob=NaN;this.R={};this.Od=new Xw(this);this.da=0;this.i=this.m=a;zc(this,this.S);Zw(this);$w(this);zc(this,this.Od);c?this.da=kl(function(){f.loadNewVideoConfig(c)},0):d&&(ax(this),bx(this))}
w(Yw,G);m=Yw.prototype;m.getId=function(){return this.l};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.da&&(window.clearTimeout(this.da),this.da=0);var b=a||{};b instanceof Qw||(b=new Qw(b));this.config=b;this.setConfig(a);bx(this);this.isReady()&&cx(this)}};
function ax(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.l,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.l:a.config.attrs.id=a.l);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Ka=a;this.config=dx(a);ax(this);if(!this.ma){var b;this.ma=ex(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=ii(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=ii(Number(a)||a))};
function cx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function fx(a){var b=!0,c=gx(a);c&&a.config&&(a=hx(a),b=Hv(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function bx(a){if(!a.Z()&&!a.W){var b=fx(a);if(b&&"html5"===(gx(a)?"html5":null))a.Y="html5",a.isReady()||ix(a);else if(jx(a),a.Y="html5",b&&a.j&&a.m)a.m.appendChild(a.j),ix(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=kx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?dx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.vc);ix(a)};
a.W=!0;b?a.D():(Lv(hx(a),a.D),(b=lx(a))&&Sw(b),mx(a)&&!c&&D("yt.player.Application.create",null))}}}
function gx(a){var b=Fd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function ix(a){if(!a.Z()){var b=gx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!kx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}nx(a)}else a.ob=kl(function(){ix(a)},50)}}
function nx(a){Zw(a);a.Ba=!0;var b=gx(a);if(b){a.s=ox(a,b,"addEventListener");a.ea=ox(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=ox(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.s&&a.s(g,a.h[g]);cx(a);a.ma&&a.ma(a.api);a.S.ab("onReady",a.api)}
function ox(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,a.Ha(new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.l}),"WARNING"))}}}
function Zw(a){a.Ba=!1;if(a.ea)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ea(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.s=null;a.ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ka};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ba};
function $w(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){fr("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){fr("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=ex(this,b);d&&(0<=db(this.wc,a)||this.h[a]||(b=px(this,a),this.s&&this.s(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&kl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=ex(this,b))&&this.S.unsubscribe(a,b)};
function ex(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){a.Ha(new V("PlayerProxy error when executing callback",{error:f}),"ERROR")}};
a.na[b]=c}return c?c:null}
function px(a,b){var c="ytPlayer"+b+a.l;a.h[b]=c;C[c]=function(d){var e=kl(function(){if(!a.Z()){try{a.S.ab(b,null!=d?d:void 0)}catch(h){a.Ha(new V("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.l,data:d}),"WARNING")}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
pb(a.R,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(gx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function jx(a){a.cancel();Zw(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=gx(a);b&&(fx(a)||!mx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&Rv(hx(this),this.D);window.clearTimeout(this.ob);this.W=!1};
m.M=function(){jx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){this.Ha(new V("PlayerProxy error during disposal",{error:b}),"ERROR")}this.na=null;for(var a in this.h)this.h.hasOwnProperty(a)&&(C[this.h[a]]=null);this.Ka=this.config=this.api=null;delete this.m;delete this.i;G.prototype.M.call(this)};
function mx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function hx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function lx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function kx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Wk(c||"","&")[b]}
m.Ha=function(a,b){if(kx(this,"web_player_proxy_errors_immediate"))throw a.level=b,a;kx(this,"web_player_proxy_errors_deferred")?(a.level=b,setTimeout(function(){throw a;},0)):"WARNING"===b?Fs(a):"ERROR"===b&&Es(a)};
function dx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
;var qx={},rx="player_uid_"+(1E9*Math.random()>>>0);function sx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Fd(c):c;var e=rx+"_"+Qa(c),f=qx[e];if(f&&d)return tx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Yw(c,e,a,b,void 0);qx[e]=f;fr("player-added",f.api);Ac(f,function(){delete qx[f.getId()]});
return f.api}
function tx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var ux=null,vx=null,wx=null;function xx(){yx()}
function zx(){yx()}
function yx(){var a=ux.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Ax(){ux&&ux.sendAbandonmentPing&&ux.sendAbandonmentPing();R("PL_ATT")&&Nw.dispose();for(var a=qi,b=0,c=Sv.length;b<c;b++)a.qa(Sv[b]);Sv.length=0;Qv("//static.doubleclick.net/instream/ad_status.js");Tv=!1;Nk("DCLKSTAT",0);yc(wx,vx);ux&&(ux.removeEventListener("onVideoDataChange",xx),ux.destroy())}
;function Bx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Pt(a,b);if(c)return!1;Xt(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=nc(a,e);Xt(a);f=a+f;var h=void 0===h?bi:h;a:if(h=void 0===h?bi:h,f instanceof Ib)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof $h&&b.te(f)){h=new Ib(f,Jb);break a}h=void 0}g=g.location;h=Jh(h||Kb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",Nk);D("yt.config.set",Nk);D("yt.setMsg",$s);D("yt.msgs.set",$s);D("yt.logging.errors.log",Es);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}tt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Ru("embed",["ol"]);c=R("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=al(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Ru("watch",["pbs","pbu","pbp"]);ux=sx(a,c);ux.addEventListener("onVideoDataChange",xx);ux.addEventListener("onReady",zx);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?wx=new Aw(ux):R("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(vx=new Hw(window.parent,a,b),wx=new Ew(ux,vx.connection));Uv();S("ytidb_create_logger_embed_killswitch")||Zm();a={};lw.h||(lw.h=new lw);
lw.h.install((a.flush_logs={callback:function(){js()}},a));
Eq();S("ytidb_clear_embedded_player")&&qi.oa(function(){var f,g;if(!vv){var h=pr(),k={Nc:uv,Hd:tv};h.h.set(k.Nc,k);k={ed:{feedbackEndpoint:Gt(ov),modifyChannelNotificationPreferenceEndpoint:Gt(pv),playlistEditEndpoint:Gt(qv),subscribeEndpoint:Gt(mv),unsubscribeEndpoint:Gt(nv),webPlayerShareEntityServiceEndpoint:Gt(rv)}};var l=Et(),n={};l&&(n.client_location=l);void 0===f&&(f=Nl());void 0===g&&(g=h.resolve(uv));$u(k,g,f,n);f={Nc:fv,Id:Zu.h};h.h.set(f.Nc,f);vv=h.resolve(fv)}Ev()})});
var Cx=Rk(function(){Vu();ut()}),Dx=Rk(function(a){a.persisted||(Vu(),ut())}),Ex=Rk(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Ax():a.persisted||Ax()}),Fx=Rk(Ax);
window.addEventListener?(window.addEventListener("load",Cx),window.addEventListener("pageshow",Dx),window.addEventListener("pagehide",Ex)):window.attachEvent&&(window.attachEvent("onload",Cx),window.attachEvent("onunload",Fx));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Ok("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Es(e):Fs(e))};
je=Gs;window.addEventListener("unhandledrejection",function(a){Gs(a.reason)});
eb(R("ERRORS")||[],function(a){Es.apply(null,a)});
Nk("ERRORS",[]);S("embeds_web_enable_scheduler_to_player_binary")&&Qm();D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Ow);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Pw);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Vv);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Bx);D("yt.util.activity.init",E("yt.util.activity.init")||Sq);
D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Yq);D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Tq);}).call(this);
