(this["webpackJsonpreact-pwa-boilerplate"]=this["webpackJsonpreact-pwa-boilerplate"]||[]).push([[0],{17:function(e,o,n){e.exports=n(28)},22:function(e,o,n){},28:function(e,o,n){"use strict";n.r(o);var t=n(0),a=n.n(t),c=n(14),i=n.n(c),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,o){console.log("xxxxx"),navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(22);var l=n(9),u=n(5),d=Object(u.e)((function(){return a.a.createElement("div",null," teste")}));i.a.render(a.a.createElement("div",{className:"App"},a.a.createElement(l.a,{basename:"/REACT-PWA-BOILERPLATE-MASTER"},a.a.createElement(u.a,{exact:!0,path:"/",component:d})),a.a.createElement("div",null,"/REACT-PWA-BOILERPLATE-MASTER")),document.getElementById("root")),console.log("process.env.NODE_ENV","production"),console.log("process.env.PUBLIC_URL","/REACT-PWA-BOILERPLATE-MASTER"),new URL("/REACT-PWA-BOILERPLATE-MASTER",window.location).origin===window.location.origin&&window.addEventListener("load",(function(){var e="".concat("/REACT-PWA-BOILERPLATE-MASTER","/customServiceWorker.js");console.log("swUrl",e),console.log("isLocalhost",r),r?(function(e,o){fetch(e).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()})).catch((function(e){return console.log(e)}))})):(console.log("asdsadsayyy"),s(e,o))})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),console.log("qqqqqqqq"),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):(console.log("aaaaaa"),s(e))}))}},[[17,1,2]]]);
//# sourceMappingURL=main.d39a5d88.chunk.js.map