(this["webpackJsonpreact-pwa-boilerplate"]=this["webpackJsonpreact-pwa-boilerplate"]||[]).push([[0],{22:function(e,n,o){e.exports=o(33)},31:function(e,n,o){},33:function(e,n,o){"use strict";o.r(n);var t=o(0),c=o.n(t),a=o(16),r=o.n(a),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,n){console.log("xxxxx"),navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=o(4),u=o(21),d=o(2),f=function(e){var n=[];return Object.keys(e).forEach((function(o){var t=e[o];"undefined"!==typeof t&&null!==t&&(t&&"object"===typeof t?Object.keys(t).forEach((function(t){n.push("".concat(o,"[]=").concat(encodeURIComponent(e[o][t])))})):n.push("".concat(o,"=").concat(encodeURIComponent(e[o]))))})),n.join("&")},h=Object(d.a)(),p=h.push;h.push=function(e){if("string"===typeof e)p(e);else{var n=e.query;p(Object(u.a)({},e,{search:f(n||{})}))}};var g=h,v=Object(l.f)((function(){return c.a.createElement("div",null," teste")})),w=(o(31),o(19));Object(w.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_TODO":return e.concat([n.text]);default:return e}}),["Use Redux"]);var E=o(9);r.a.render(c.a.createElement("div",{className:"App"},c.a.createElement(E.a,{basename:window.location.pathname||""},c.a.createElement((function(){return c.a.createElement(l.b,{history:g},c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:v})))}),null))),document.getElementById("root")),console.log("process.env.NODE_ENV","production"),console.log("process.env.PUBLIC_URL","/REACT-PWA-BOILERPLATE-MASTER"),new URL("/REACT-PWA-BOILERPLATE-MASTER",window.location).origin===window.location.origin&&window.addEventListener("load",(function(){var e="".concat("/REACT-PWA-BOILERPLATE-MASTER","/customServiceWorker.js");console.log("swUrl",e),console.log("isLocalhost",i),i?(function(e,n){fetch(e).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()})).catch((function(e){return console.log(e)}))})):(console.log("asdsadsayyy"),s(e,n))})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),console.log("qqqqqqqq"),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):(console.log("aaaaaa"),s(e))}))}},[[22,1,2]]]);
//# sourceMappingURL=main.05c21e77.chunk.js.map