/*
 * @name: minecraft 
 * @Author: Raj
 * @version: 1.0.0
 * @description: 
 * @include: *
 * @createTime: Mar 29, 2022 10:23 PM 
 */
(function(){const w = window;
const key=encodeURIComponent('adfixer');
const hostname = location.host;
const adfix = ["www.minecraft-schematics.com", "www.planetminecraft.com"];
const isaDark = adfix.some(keyword => {
    if (hostname.match(keyword)) {
      return true;
    };
    return false;
  });
if(w[key]|| !isaDark){return;}
try{
w[key]=true;
$(document).ready(function() { setTimeout(function() { adBlockNotDetected();}, 3000); });
}
catch(err){alert.log('adfixer：'+err);}
})();
