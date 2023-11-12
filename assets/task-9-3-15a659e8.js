var a=(t,i,e)=>{if(!i.has(t))throw TypeError("Cannot "+e)};var o=(t,i,e)=>(a(t,i,"read from private field"),e?e.call(t):i.get(t)),h=(t,i,e)=>{if(i.has(t))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(t):i.set(t,e)},u=(t,i,e,s)=>(a(t,i,"write to private field"),s?s.call(t,e):i.set(t,e),e);import"./styles-ec282632.js";import{b as m}from"./basicLightbox.min-29bcc645.js";import{c as x,i as p,K as v}from"./gallery-images-e4621d11.js";import{S as f}from"./slider-cf729ea8.js";var n;class y{constructor(i,e,s){h(this,n,void 0);u(this,n,new f(i,1,e.length)),this.prevBtn=s.element().querySelector("#prev-lightbox-button"),this.nextBtn=s.element().querySelector("#next-lightbox-button"),this.sliderContent=s.element().querySelector(".lightbox-image"),this.slidesCount=s.element().querySelector(".lightbox-counter"),this.elementsList=e,this.initBtnsFunction(),this.update()}initBtnsFunction(){this.prevBtn.addEventListener("click",()=>{o(this,n).onPrevSlide(),this.update()}),this.nextBtn.addEventListener("click",()=>{o(this,n).onNextSlide(),this.update()})}update(){this.updateContent(),this.updateButtons(),this.updateCounter()}updateContent(){const i=o(this,n).currentSlide,e=this.elementsList[i].querySelector("img");this.sliderContent.src=e.dataset.source,this.sliderContent.alt=e.alt}updateButtons(){this.prevBtn.disabled=o(this,n).isExistPrev(),this.nextBtn.disabled=o(this,n).isExistNext()}updateCounter(){this.slidesCount.textContent=`${o(this,n).currentSlide+1+"/"+this.elementsList.length}`}}n=new WeakMap;const l="/goit-js-node-hw-09/assets/icons-8ee028ff.svg",g=document.querySelector(".gallery");x(p,g);g.addEventListener("click",w);let r=null;function w(t){const i=t.target;if(!i.classList.contains("gallery-img"))return;t.preventDefault();const s=i.closest(".gallery-item"),c=t.currentTarget.children,b=Array.from(c).indexOf(s);C(c,b)}function C(t,i){r=m.create(S(),{onShow:e=>{document.addEventListener("keydown",d),e.element().querySelector(".lightbox-close").addEventListener("click",e.close),new y(i,t,e)},onClose:e=>{document.removeEventListener("keydown",d)},closable:!0}),r.show()}function d(t){t.code===v&&r.close()}function S(){return`
  <div class="lightbox-modal">
      <p class="lightbox-counter"></p>  
      <button
        class="lightbox-close"
        type="button"
        id="id-lightbox-close"
      >
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${l}#close-form"></use>
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
            <use href="${l}#icon-chevron-left"></use>
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
            <use href="${l}#icon-chevron-right"></use>
          </svg> 
        </button>
      </div>
    </div>`}
