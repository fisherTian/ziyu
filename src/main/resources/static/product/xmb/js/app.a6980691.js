(function(e){function n(n){for(var r,a,c=n[0],i=n[1],l=n[2],d=0,f=[];d<c.length;d++)a=c[d],u[a]&&f.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==u[c]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},u={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2468df58":"83c56a8a","chunk-0d5ba599":"d951c561","chunk-54f83b2d":"e1b05f74","chunk-642ec9b1":"2637abb0","chunk-4e640d77":"47f47818","chunk-7d7a8eaa":"219d1787"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-2468df58":1,"chunk-0d5ba599":1,"chunk-54f83b2d":1,"chunk-642ec9b1":1,"chunk-4e640d77":1,"chunk-7d7a8eaa":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2468df58":"0205f5ae","chunk-0d5ba599":"ef0eaae3","chunk-54f83b2d":"e839a98e","chunk-642ec9b1":"7a79582a","chunk-4e640d77":"14c5857f","chunk-7d7a8eaa":"355276d9"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var c=u[o],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],l=c.getAttribute("data-href");if(l===r||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,t(u)},f.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(f)}).then(function(){a[e]=0}));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(function(n,t){r=u[e]=[n,t]});n.push(r[2]=o);var l,d=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),l=function(n){f.onerror=f.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,t[1](o)}u[e]=void 0}};var s=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,d.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/product/xmb/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var s=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("c21b"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");(function(e,n){var t=e.documentElement;function r(){var e=Math.min(t.getBoundingClientRect().width,768);t.style.fontSize=e/7.5+"px"}r(),n.addEventListener("resize",r)})(document,window);var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],o=(t("034f"),t("2877")),c={},i=Object(o["a"])(c,a,u,!1,null,null,null);i.options.__file="App.vue";var l=i.exports,d=(t("ac6a"),t("8c4f"));r["a"].use(d["a"]);var f=[{path:"*",redirect:"/index"},{name:"order",component:function(){return Promise.all([t.e("chunk-2468df58"),t.e("chunk-54f83b2d")]).then(t.bind(null,"45e1"))},meta:{title:"订阅"}},{name:"detail",component:function(){return Promise.all([t.e("chunk-2468df58"),t.e("chunk-642ec9b1")]).then(t.bind(null,"be2f"))},meta:{title:"信息详情"}},{name:"index",component:function(){return t.e("chunk-7d7a8eaa").then(t.bind(null,"b533"))},redirect:"/index/project",children:[{path:"project",name:"project",component:function(){return Promise.all([t.e("chunk-2468df58"),t.e("chunk-0d5ba599")]).then(t.bind(null,"a762"))},meta:{title:"项目宝"}},{path:"subscibe",name:"subscibe",component:function(){return t.e("chunk-4e640d77").then(t.bind(null,"c103"))},meta:{title:"项目宝"}}],meta:{title:"项目宝"}}];f.forEach(function(e){e.path=e.path||"/"+(e.name||"")});var s=new d["a"]({routes:f});s.beforeEach(function(e,n,t){var r=e.meta&&e.meta.title;r&&(document.title=r),t()}),new r["a"]({router:s,el:"#app",render:function(e){return e(l)}})},c21b:function(e,n,t){}});
//# sourceMappingURL=app.a6980691.js.map