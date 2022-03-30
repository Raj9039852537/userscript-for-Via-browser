/*
 * @name: Dark mode fix
 * @Author: Raj
 * @version: 1.0.0
 * @description: 
 * @include: *
 * @createTime: Mar 29, 2022 10:23 PM 
 */
(function(){const w = window;
const key=encodeURIComponent('DarkFixer');
const hostname = location.host;
const darkfix = ["minecraft.fandom.com","www.planetminecraft.com"];
const isDark = darkfix.some(keyword => {
    if (hostname.match(keyword)) {
      return true;
    };
    return false;
  });
if(w[key]|| !isDark){return;}
try{
w[key]=true;
const y=typeof(document.documentElement)!="undefined"?document.documentElement:document.body;
const d=document.createElement('style');
d.innerHTML=":not(a){color:white !important; background-color:black !important;}"
y.append(d);
}
catch(err){console.log('DarkReader：',err);}
})();
