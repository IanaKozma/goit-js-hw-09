startBtn=document.querySelector("button[data-start]"),stopBtn=document.querySelector("button[data-stop]");const t=new class{startChangeBgColor(){this.isActive||(startBtn.disabled=!0,stopBtn.disabled=!1,this.isActive=!0,this.intervalID=setInterval((()=>{return t=`#${Math.floor(16777215*Math.random()).toString(16)}`,void(document.body.style.backgroundColor=t);var t}),1e3))}stopChangeBgColor(){startBtn.disabled=!1,stopBtn.disabled=!0,clearInterval(this.intervalID),this.isActive=!1}constructor(t){this.intervalID=null,this.isActive=!1,this.updateBodyBgColor=t,stopBtn.disabled=!0}};startBtn.addEventListener("click",(()=>t.startChangeBgColor())),stopBtn.addEventListener("click",(()=>t.stopChangeBgColor()));
//# sourceMappingURL=01-color-switcher.cda3304a.js.map
