var c=(t,i,e)=>{if(!i.has(t))throw TypeError("Cannot "+e)};var o=(t,i,e)=>(c(t,i,"read from private field"),e?e.call(t):i.get(t)),a=(t,i,e)=>{if(i.has(t))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(t):i.set(t,e)},h=(t,i,e,s)=>(c(t,i,"write to private field"),s?s.call(t,e):i.set(t,e),e);import{c as b,i as m,K as x}from"./gallery-images-73c5bd40.js";/* empty css               */import{b as p}from"./basicLightbox.min-29bcc645.js";import{S as v}from"./slider-cf729ea8.js";var n;class f{constructor(i,e,s){a(this,n,void 0);h(this,n,new v(i,1,e.length)),this.prevBtn=s.element().querySelector("#prev-lightbox-button"),this.nextBtn=s.element().querySelector("#next-lightbox-button"),this.sliderContent=s.element().querySelector(".lightbox-image"),this.slidesCount=s.element().querySelector(".lightbox-counter"),this.elementsList=e,this.initBtnsFunction(),this.update()}initBtnsFunction(){this.prevBtn.addEventListener("click",()=>{o(this,n).onPrevSlide(),this.update()}),this.nextBtn.addEventListener("click",()=>{o(this,n).onNextSlide(),this.update()})}update(){this.updateContent(),this.updateButtons(),this.updateCounter()}updateContent(){const i=o(this,n).currentSlide,e=this.elementsList[i].querySelector("img");this.sliderContent.src=e.dataset.source,this.sliderContent.alt=e.alt}updateButtons(){this.prevBtn.disabled=o(this,n).isExistPrev(),this.nextBtn.disabled=o(this,n).isExistNext()}updateCounter(){this.slidesCount.textContent=`${o(this,n).currentSlide+1+"/"+this.elementsList.length}`}}n=new WeakMap;const d=document.querySelector(".gallery");b(m,d);d.addEventListener("click",y);let l=null;function y(t){const i=t.target;if(!i.classList.contains("gallery-img"))return;t.preventDefault();const s=i.closest(".gallery-item"),r=t.currentTarget.children,g=Array.from(r).indexOf(s);C(r,g)}function C(t,i){l=p.create(S(),{onShow:e=>{document.addEventListener("keydown",u),e.element().querySelector(".lightbox-close").addEventListener("click",e.close),new f(i,t,e)},onClose:e=>{document.removeEventListener("keydown",u)},closable:!0}),l.show()}function u(t){t.code===x&&l.close()}function S(){return`
  <div class="lightbox-modal">
      <p class="lightbox-counter"></p>  
      <button
        class="lightbox-close"
        type="button"
        id="id-lightbox-close"
      >
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="../img/icons.svg#close-form"></use>
        </svg>
      </button>
      <div class="lightbox-slider">

        <button
          class="lightbox-button"
          id="prev-lightbox-button"
          type="button">
          <svg
            class="lightbox-button-icon-prev"
            width="24"
            height="24"
            aria-label="icon arrow left"
          >
            <use href="/img/icons.svg#icon-chevron-left"></use>
          </svg>
        </button>

        <img class="lightbox-image" src="" alt="" width="1112" height="640"/>           
          
        <button
          class="lightbox-button"
          id="next-lightbox-button"
          type="button">
          <svg
            class="lightbox-button-icon-next"
            width="24"
            height="24"
            aria-label="icon arrow right"
          >
            <use href="./img/icons.svg#icon-chevron-right"></use>
          </svg> 
        </button>
      </div>
    </div>`}
