import"./styles-ec282632.js";import{b as s}from"./basicLightbox.min-29bcc645.js";import{c,i as r,K as l}from"./gallery-images-e4621d11.js";let a={};const i=document.querySelector(".gallery");c(r,i);i.addEventListener("click",m);function m(e){const o=e.target;if(!o.classList.contains("gallery-img"))return;e.preventDefault();const n={src:o.dataset.source,alt:o.alt,preview:o.src};d(n)}function d({src:e,alt:o}){a=s.create(`<div class="lightbox-modal ">   
        <img class="lightbox-image" src="${e}" alt="${o}"/>           
    </div>`,{onShow:()=>{document.addEventListener("keydown",t)},onClose:()=>{document.removeEventListener("keydown",t)},closable:!0})}function t(e){e.code===l&&a.close()}