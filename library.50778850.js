function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},r.parcelRequired7c6=a),a.register("kyEFX",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"1zJhX":"library.50778850.js","a8cFd":"nothing.99d1de74.jpg","eM9ss":"library.c8cdfc72.js"}'));var o,l=a("1M7QK"),s=a("krGWQ"),c=a("b5rV1"),d=a("7rYDH");o=new URL(a("kyEFX").resolve("a8cFd"),import.meta.url).toString();const u=document.querySelector('[data-id="watched-btn"]'),f=document.querySelector('[data-id="queue-btn"]');function b(){u.classList.contains("header-movie-button--active")||(u.classList.add("header-movie-button--active"),u.disabled=!0,f.classList.remove("header-movie-button--active"),f.disabled=!1),c.watched.length?(0,d.getArrayofMovies)(c.watched).then((e=>{s.default.library.innerHTML=(0,l.createLibraryMarkup)(e)})).catch((e=>console.log(e))):s.default.library.innerHTML=`\n      <li class="nothing">\n        <img src="${t(o)}" alt="There's nothing to see here" />\n      </li>`}u.addEventListener("click",b),f.addEventListener("click",(function(){f.classList.contains("header-movie-button--active")||(f.classList.add("header-movie-button--active"),f.disabled=!0,u.classList.remove("header-movie-button--active"),u.disabled=!1);if(!c.queue.length)return void(s.default.library.innerHTML=`\n      <li class="nothing">\n        <img src="${t(o)}" alt="There's nothing to see here" />\n      </li>`);(0,d.getArrayofMovies)(c.queue).then((e=>{s.default.library.innerHTML=(0,l.createLibraryMarkup)(e)}))})),b(),a("b9l6T"),a("a9okJ");
//# sourceMappingURL=library.50778850.js.map
