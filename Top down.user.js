/*
 * @name: top to bottom
 * @Author: Sky
 * @version: 1.0.1
 * @description: One click to reach the top/bottom of the page
 * @include: *
 * @createTime: 2020-9-22 13:00
 * @run-at: document-end
 */
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
  const d=document.createElement('div');
  d.innerHTML='<div id="sky-scrolltop">⤴️</div><div id="sky-scrolltbtm">⤵️</div><div id="scrollup">⬆️</div><div id="scrolldown">⬇️</div><div id="cclear" title="cookie clear">📛</div>'; d.style='position:fixed;left:'+config.left+';bottom:'+config.bottom+';z-index:999999;color:#eee;user-select:none;opacity:'+config.opacity+';font-size:'+config.fontsize+';';
  document.documentElement.appendChild(d);
var meta = document.createElement('meta'); 
meta.name= 'viewport'; 
meta.content= 'width=device-width, initial-scale=1.0'; 
document.getElementsByTagName('head')[0].appendChild(meta); 


  document.getElementById('sky-scrolltop').onclick=()=>{s(0)}; document.getElementById('sky-scrolltbtm').onclick=()=>{s(document.body.scrollHeight)};
document.getElementById('scrollup').onclick=()=>{sb(-1*config.offset)};
document.getElementById('scrolldown').onclick=()=>{sb(config.offset)};
document.getElementById('cclear').onclick=()=>{cc()};
} catch(err){console.log('top to bottom：',err);}
})();
