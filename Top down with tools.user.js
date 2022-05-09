// ==UserScript==
// @name: top to bottom
// @Author: Sky
// @version: 2.0
// @description: One click to reach the top/bottom of the page
// @include: *
// @match https://*/*
// @createTime: 2020-9-22 13:00
// @run-at: document-end
// ==UserScript==
(function(){
 const key=encodeURIComponent('Top to bottom');
 if(window[key]){return;}
const config = {
    offset: 200,
    offset2:400,
    opacity:0.5,
    left:'-20px',
    bottom:'10%',
    fontsize:'40px'
  };
 try{
  window[key]=true;
  function s(i){window.scrollTo(0,i);}
  function sb(t){window.scrollBy(0,t);}
  function cc() {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
}
function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}
function autohttps(){
try{
	var a= document.getElementsByTagName('a');
  for(i=0;i <a.length;i++){
    a[i].href=a[i].href.replace("http:","https:")
  }
 } catch(err){alert('http to https：',err);}
}
// const meta = document.createElement('meta');
 // meta.setAttribute('name','viewport');
//  meta.setAttribute('content','width=device-width, initial-scale=1, user-scalable=yes');
 // document.head.appendChild(meta);
  const d=document.createElement('div');
  d.innerHTML='<div id="sky-scrolltop">⤴️</div><div id="sky-scrolltbtm">⤵️</div><div id="scrollup">⬆️</div><div id="scrolldown">⬇️</div><div id="lcookie">🥯</div><div id="cclear" title="cookie clear">♨️</div><div id="http_s">🏮</div>'; d.style='position:fixed;left:'+config.left+';bottom:'+config.bottom+';z-index:999999;color:#eee;user-select:none;opacity:'+config.opacity+';font-size:'+config.fontsize+';';
  document.documentElement.appendChild(d);
var meta = document.createElement('meta'); 
meta.name= 'viewport'; 
meta.content= 'width=device-width, initial-scale=1.0'; 
document.getElementsByTagName('head')[0].appendChild(meta); 


  document.getElementById('sky-scrolltop').onclick=()=>{s(0)}; document.getElementById('sky-scrolltbtm').onclick=()=>{s(document.body.scrollHeight)};
document.getElementById('scrollup').onclick=()=>{sb(-1*config.offset)};
document.getElementById('scrolldown').onclick=()=>{sb(config.offset)};
document.getElementById('lcookie').onclick=()=>{alert(listCookies())};
document.getElementById('cclear').onclick=()=>{cc()};
document.getElementById('http_s').onclick=()=>{autohttps()};
} catch(err){console.log('top to bottom：',err);}
})();
