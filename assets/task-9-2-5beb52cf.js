import"./styles-7e4ae9d7.js";import{c,i as o}from"./gallery-images-8ad391c9.js";const a=document.querySelector(".gallery-lightbox");c(o,a);a.addEventListener("click",i);function i(e){const t=e.target;if(!t.classList.contains("gallery-img"))return;e.preventDefault();const r={src:t.dataset.source,alt:t.alt,preview:t.src};l(r)}function l(e){console.table(e)}
