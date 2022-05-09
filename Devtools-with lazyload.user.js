// ==UserScript==
// @name: devtools
// @Author: me
// @version: 2.0
// @description: call the sections script with lazyload
// @include: https://*
// @exclude play.google.com
// @match https://*/*
// @createTime: 2019-10-12 09:11:58
// @updateTime: 2020-03-16 00:51:04
// @run-at: document-end
// ==UserScript==
(function () {
const dif= document.createElement('div');
  dif.innerHTML = "⚙️";
  dif.setAttribute('style', `
    position: fixed;
    bottom: 2.5%;
    right: 5%;user-select:none;
    z-index: 999999998;
  `);
document.documentElement.appendChild(dif);
dif.onclick=()=>{endure()};

function endure(){
 var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload =()=> { eruda.init() } ;
dif.style.display="none";
}

})();
