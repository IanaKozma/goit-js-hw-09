!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var o=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");var i=new(function(){"use strict";function r(n){e(t)(this,r),this.intervalID=null,this.isActive=!1,this.updateBodyBgColor=n,a.disabled=!0}return e(n)(r,[{key:"startChangeBgColor",value:function(){this.isActive||(o.disabled=!0,a.disabled=!1,this.isActive=!0,this.intervalID=setInterval((function(){return e="#".concat(Math.floor(16777215*Math.random()).toString(16)),void(document.body.style.backgroundColor=e);var e}),1e3))}},{key:"stopChangeBgColor",value:function(){o.disabled=!1,a.disabled=!0,clearInterval(this.intervalID),this.isActive=!1}}]),r}());o.addEventListener("click",(function(){return i.startChangeBgColor()})),a.addEventListener("click",(function(){return i.stopChangeBgColor()}))}();
//# sourceMappingURL=01-color-switcher.7d516402.js.map
