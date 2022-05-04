// ==UserScript==
// @name         mf-adblock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  a basic anti-adblock workaround that can remove or click elements on a website
// @author       You
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // here is the config ... just an example
   
    let sites = {
        'www.a-website-name.com': { // website domain
            click: ['.class','#element'], // click this elements (used for cookie consent)
            remove: ['.ad','#banner'], // hide this elements (used for ads)
            interaction: true, // move mouse cursor to trigger onmousemove ads
            timeout: 0, // in ms wait timeout before doing something
            interval: 0, // in ms interval redo everything after this time (used if ads are added onscroll or timeout)
            background: '#ffffff' // set a background-color, overflow:scroll and position for custom fullpage ads
        },
        'stackoverflow.com': {remove: ['.js-consent-banner']},
        'superuser.com': {remove: ['.js-consent-banner']},
        'stackexchange.com': {remove: ['.js-consent-banner']}
    }

    let interval = null;

    let hostname = document.location.hostname;

    function cleanup() {
try{
        if(sites[hostname].interaction) {
            document.body.dispatchEvent(new MouseEvent('mousemove'));
        }

        if(sites[hostname].remove) {
            let selectors = sites[hostname].remove;

            selectors.forEach(function(selector) {
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
        }
        
        if(sites[hostname].background) {
            document.body.style.background = sites[hostname].background;
            document.body.style.overflow = 'scroll';
            document.body.style.position = 'static';
        }

        if(sites[hostname].click) {
            let selectors = sites[hostname].click;

            selectors.forEach(function(selector) {
                let element = document.querySelector(selector);

                if(element !== null) {
                    element.click();
                }
            });
        }
    }catch(r){console.log(r)}
    }
const isD = Object.keys(sites).some(keyword => {
    if (hostname.match(keyword)) {
      return true;
    };})
//alert(isD)
  //  if(Object.keys(sites).indexOf(hostname) >= 0) {
if(isD){try{
        let timeout = 1800;
      
       $(document).ready(function() { setTimeout(function() { cleanup();}, timeout); }); 

         }catch(r){alert(r)}
    }
})();
