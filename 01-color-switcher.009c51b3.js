const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};const s=new class{start(){this.isActive||(t.startBtn.disabled=!0,t.stopBtn.disabled=!1,this.isActive=!0,this.intervalID=setInterval((()=>{return t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,void(document.body.style.backgroundColor=t);var t}),1e3))}stop(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(this.intervalID),this.isActive=!1}constructor(s){this.intervalID=null,this.isActive=!1,this.changeColor=s,t.stopBtn.disabled=!0}};t.startBtn.addEventListener("click",s.start.bind(s)),t.stopBtn.addEventListener("click",s.stop.bind(s));
//# sourceMappingURL=01-color-switcher.009c51b3.js.map