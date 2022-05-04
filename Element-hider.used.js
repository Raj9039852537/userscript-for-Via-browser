// ==UserScript==
// @name         element hider
// @version      1.0
// @description  a basic anti-adblock workaround that can remove or click elements on a website
// @author       You
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
// settings
// both array length must be same
//array of array of domains on which to execute
let sit=[['stackexchange.com','stakeoverflow.com', 'superuser.com' ]];
//array of array of elements which should be hidden per array of sit
let flu=[['.js-consent-banner']];
    let hostname = document.location.hostname;
let timeout = 1000;

function cleanup(I) {
     try{
     //     flu.forEach(function(fell) {
        let fell = flu[I];
            fell.forEach(function(selector) {
                let elements = document.querySelectorAll(selector);
                console.log(selector, elements);
                elements.forEach(function(elem) {
                    elem.style.visibility = 'hidden';
                    elem.style.width = '1px';
                    elem.style.height = '1px';
                    elem.style.overflow = 'hidden';
                    elem.style.opacity = 0;
                });
            });
    //     });
    }catch(r){alert(r)}
}
sit.forEach(function(sat,i) {
  sat.some(keyword => {
    if (hostname.match(keyword)) {
      window.setTimeout(function(){ cleanup(i); }, timeout);
    };
  });
});
})();
