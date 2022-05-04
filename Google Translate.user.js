/*
 * @name: Google native web page translation
 * @Author: Gu Huatai
 * @version: 2.0
 * @description: call the Google translation interface to translate the entire website
 * @include: *
 * @createTime: 2019-10-12 09:11:58
 * @updateTime: 2020-03-16 00:51:04
 */

(function () {
  /* Determine whether to execute */
  /* URL blacklist system, not implemented when encountering these domain names */
  const blackList = ['zhihu.com', 'twitter.com', 'wenku.baidu.com', 'wk.baidu.com','127.0.0.1','js13kgames.com',/otherl/];
 const whiteList = ['bext.ketra.fun','via-app.cn','bilibili.com','sogou.com',/.cn$/];
  const hostname = window.location.hostname;
  const key = encodeURIComponent('gimmick : ready to translate ');
  const isBlack = blackList.some(keyword => {
    if (hostname.match(keyword)) {
      return true;
    };
    return false;
  });
 const isWhite = whiteList.some(keyword => {
    if (hostname.match(keyword)) {
      return true;
    };
    return false;
  });
try{
  if (isBlack || window[key]) {
    return;
  };
  window[key] = true;

const dic = document.createElement('div');
  dic.id = 'tranlator';
  dic.innerHTML = "🇬🇧🇮🇳?";
  dic.setAttribute('style', `
    position: fixed;
    bottom: 5%;
    right: 5%;user-select:none;
    z-index: 999999998;
  `);


var tlate=function(){ 
  /* Start code execution */
  const config = {
    initName: 'googleTranslate',
    initElm: 'google_translate_elm',
    /*Multilingual page support*/
    multilanguagePage: true,
    /* Source language*/
    pageLanguage: 'auto',
    /*target language*/
    includedLanguages: 'hi,en',
    /* Hide tool bar */
    autoDisplay: false
  };

  /* Inject Google Translate script */
  const script = document.createElement('script');
  script.src = `//translate.google.com/translate_a/element.js?&cb=${config.initName}`;
  script.async = true;
  document.head.appendChild(script);

  /* Create the language selection box container in the lower right corner of Google Translate */
  const div = document.createElement('div');
  div.id = config.initElm;
  div.setAttribute('style', `
    position: fixed;
    bottom: 5vw;
    right: 5vw;user-select:none;
    z-index: 999999999;
  `);
  document.documentElement.appendChild(div);

  /* Some styles */
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      position: relative;
      top: 0 !important;
      left: 0 !important;    
    }
    .skiptranslate iframe{
      width: 0px !important;
      height: 0px !important;
      overflow: hidden;
      display: none !important;
    }
    .goog-te-gadget-simple {
      border: 1px solid #ececec !important;
      border-radius: 4px;
      padding: 8px;
      line-height: 26px;
      text-align: center;
    }
    .goog-te-gadget-simple a,.goog-te-gadget-simple a:link,.goog-te-gadget-simple a:visited,.goog-te-gadget-simple a:hover,.goog-te-gadget-simple a:active{
      text-decoration: none;
      color:inherit;
    }
   div#tranlator{display:none;}
  `;
  document.head.appendChild(style);

  /* Google Translate instantiation function */
  window[config.initName] = () => {
    new window.google.translate.TranslateElement({
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      multilanguagePage: config.multilanguagePage,
      pageLanguage: config.pageLanguage,
      includedLanguages: config.includedLanguages,
      autoDisplay: config.autoDisplay
    }, config.initElm);
  };

  /* Monitor dom function */
  function observe({ targetNode, config = {}, callback = () => { } }) {
    if (!targetNode) {
      return;
    };
    config = Object.assign({
      attributes: true,
      childList: true,
      subtree: true
    }, config);
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  };

  /* Listen to the language selection box in the lower right corner */
  const initElm = document.querySelector(`#${config.initElm}`);
  observe({
    targetNode: initElm,
    config: {
      attributes: false
    },
    callback(mutationList, observer) {
      /* Traverse nodes */
      mutationList.forEach(mutation => {
        Array.from(mutation.addedNodes, node => {
          /* clear google image */
          const googleImages = document.querySelectorAll(`#goog-gt-tt img, #${config.initElm} img`);
          Array.from(googleImages, img => {
            img.parentNode.removeChild(img);
          });

          /* Add close button */
          if (node.className === 'goog-te-menu-value') {
            const btnContent = document.querySelector('.goog-te-gadget-simple > span > a');
            const closeBtn = document.createElement('span');
            closeBtn.innerText = '× | ';
            closeBtn.addEventListener('click', (e) => {
              initElm.parentNode.removeChild(initElm);
              e.stopPropagation();
            }, true);
            btnContent.parentNode.insertBefore(closeBtn, btnContent);
          };

        });
        /* End monitoring */
        observer.disconnect();
      });
    }
  });
};

if(isWhite){tlate();}else{
  dic.onclick=function(){tlate()};document.documentElement.appendChild(dic);};
}catch(a){alert(a);}
})();
