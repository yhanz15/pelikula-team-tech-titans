!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o("iE7OH").register(JSON.parse('{"2Y0K8":"library.9c346b6d.js","fJUxN":"nothing.99d1de74.jpg","7nwxg":"library.8f7aa2e1.js"}'));var a,c=o("38fXH"),u=o("4Nugj"),l=o("4LMMA"),s=o("b7ONl");a=o("aNJCr").getBundleURL("2Y0K8")+o("iE7OH").resolve("fJUxN");var d=document.querySelector('[data-id="watched-btn"]'),f=document.querySelector('[data-id="queue-btn"]');function h(){d.classList.contains("header-movie-button--active")||(d.classList.add("header-movie-button--active"),d.disabled=!0,f.classList.remove("header-movie-button--active"),f.disabled=!1),l.watched.length?(0,s.getArrayofMovies)(l.watched).then((function(e){u.default.library.innerHTML=(0,c.createLibraryMarkup)(e)})).catch((function(e){return console.log(e)})):u.default.library.innerHTML='\n      <li class="nothing">\n        <img src="'.concat(t(a),'" alt="There\'s nothing to see here" />\n      </li>')}d.addEventListener("click",h),f.addEventListener("click",(function(){f.classList.contains("header-movie-button--active")||(f.classList.add("header-movie-button--active"),f.disabled=!0,d.classList.remove("header-movie-button--active"),d.disabled=!1);if(!l.queue.length)return void(u.default.library.innerHTML='\n      <li class="nothing">\n        <img src="'.concat(t(a),'" alt="There\'s nothing to see here" />\n      </li>'));(0,s.getArrayofMovies)(l.queue).then((function(e){u.default.library.innerHTML=(0,c.createLibraryMarkup)(e)}))})),h(),o("PqlDp"),o("5YIrO")}();
//# sourceMappingURL=library.9c346b6d.js.map
