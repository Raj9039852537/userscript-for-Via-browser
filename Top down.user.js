/*
 * @name: top to bottom
 * @Author: Sky modified by Raj 
 * @version: 1.0.1
 * @description: One click to reach the top/bottom of the page with page up and page down
 * @include: *
 * @createTime: 2022-3-22 17:00
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
  const d=document.createElement('div');
  d.innerHTML='<div id="sky-scrolltop">⤴️</div><div id="sky-scrolltbtm">⤵️</div><div id="scrollup">⬆️</div><div id="scrolldown">⬇️</div>'; d.style='position:fixed;left:'+config.left+';bottom:'+config.bottom+';z-index:999999;color:#eee;user-select:none;opacity:'+config.opacity+';font-size:'+config.fontsize+';';
  document.documentElement.appendChild(d);

  document.getElementById('sky-scrolltop').onclick=()=>{s(0)}; document.getElementById('sky-scrolltbtm').onclick=()=>{s(document.body.scrollHeight)};
document.getElementById('scrollup').onclick=()=>{sb(-1*config.offset)};
document.getElementById('scrolldown').onclick=()=>{sb(config.offset)};
} catch(err){console.log('top to bottom：',err);}
})();
