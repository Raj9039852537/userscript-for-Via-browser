// ==UserScript==
// @name: devtools
// @Author: me
// @version: 1.0
// @description: call the devtool script
// @include: https://*
// @exclude play.google.com
// @match https://*/*
// @createTime: 2019-10-12 09:11:58
// @updateTime: 2020-03-16 00:51:04
// @run-at: document-end
// ==UserScript==
(function () {
 var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload =()=> { eruda.init() } ;
dif.style.display="none";
})();
