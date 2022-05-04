/*
 * @name: Pull down to refresh
 * @Author: Sky
 * @version: 1.7
 * @description: Pull down to refresh when at the top of the page
 * @include: *
 * @createTime: 2020-3-6 01:00
 * @updateTime: 2020-10-9 21:10
 */
(function(){const
/*The number after the equal sign indicates the minimum trigger pull-down distance (px)*/
 min_dY = 500,
/*－－－－Do not change the following－－－－*/
key=encodeURIComponent('Pull-down refresh: execute judgment');
if(window[key]){return;}
try{
window[key]=true;
let strtX,strtY=0,rchTp,onePt=false;
document.addEventListener( 'touchstart',function(e){
 if(onePt){rchTp=false;
  }else{
  onePt=true;
  rchTp=(document.body.scrollTop||document.documentElement.scrollTop)<50;
  strtX=e.touches[ 0].screenX;
  strtY=e.touches[0].screenY;
  }
 },
 {'passive':true}
);
document.addEventListener('touchend',function(e){
 if(rchTp){
  const dY=Math .floor(e.changedTouches[0].screenY-strtY);
   if(dY>min_dY  &&  Math.abs(e.changedTouches[0].screenX-strtX)<(0.4*dY)){
    location.reload();
   }
  rchTp =false;
  }
 onePt=false;
 },
 {'passive':true,'capture':true}
);}
catch(err){console.log('Pull to refresh:',err);}
})();
