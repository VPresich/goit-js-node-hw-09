import{c as a,i as l,K as c}from"./gallery-images-73c5bd40.js";/* empty css               */import{b as r}from"./basicLightbox.min-29bcc645.js";let t={};const n=document.querySelector(".gallery");a(l,n);n.addEventListener("click",m);function m(e){const o=e.target;if(!o.classList.contains("gallery-img"))return;e.preventDefault();const s={src:o.dataset.source,alt:o.alt,preview:o.src};d(s)}function d({src:e,alt:o}){t=r.create(`<div class="lightbox-modal ">   
        <img class="lightbox-image" src="${e}" alt="${o}"/>           
    </div>`,{onShow:()=>{document.addEventListener("keydown",i)},onClose:()=>{document.removeEventListener("keydown",i)},closable:!0}),t.show(()=>console.log("lightbox now visible")),console.log(t)}function i(e){e.code===c&&t.close()}