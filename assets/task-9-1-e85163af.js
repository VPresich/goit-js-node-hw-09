var u=Object.defineProperty;var m=(s,e,t)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var c=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import"./styles-ec282632.js";import{c as p,i as f,K as g}from"./gallery-images-e4621d11.js";import{S as v}from"./slider-cf729ea8.js";const d=class{constructor(e,t,i){this.sliderRef=new v(e,1,t.length),this.touchStartX=0,this.prevBtn=document.getElementById("prevBtn"),this.nextBtn=document.getElementById("nextBtn"),this.sliderDots=document.querySelector(".slider-dots"),this.slidesCounter=document.querySelector(".slider-counter"),this.elementsList=t,this.sliderContent=i,this.initBtnsFunction(),this.initTouchFunction(),this.createDots(),this.update()}initBtnsFunction(){this.prevBtn.addEventListener("click",()=>{this.sliderRef.onPrevSlide(),this.update()}),this.nextBtn.addEventListener("click",()=>{this.sliderRef.onNextSlide(),this.update()})}initTouchFunction(){this.touchStartX=0,this.sliderContent.addEventListener("touchstart",e=>{this.touchStartX=e.touches[0].clientX}),this.sliderContent.addEventListener("touchmove",e=>{const t=e.touches[0].clientX,i=this.touchStartX-t;i>d.touchThreshold?(this.sliderRef.onNextSlide(),this.touchStartX=t,this.update()):i<-d.touchThreshold&&(this.sliderRef.onPrevSlide(),this.touchStartX=t,this.update())})}createDots(){this.sliderDots.innerHTML="";for(let e=0;e<this.elementsList.length;e+=1){const t=document.createElement("div");t.className="slider-dot",t.dataset.index=e,this.sliderDots.appendChild(t)}this.sliderDots.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("slider-dot")){const i=parseInt(t.dataset.index,10);this.sliderRef.goToSlide(i),this.update()}})}update(){this.updateContent(),this.updateButtons(),this.updateDisplayDots(),this.updateCounter()}updateContent(){const e=this.sliderRef.currentSlide,t=this.elementsList[e].querySelector("img");this.sliderContent.src=t.dataset.source,this.sliderContent.alt=t.alt}updateButtons(){this.prevBtn.disabled=this.sliderRef.isExistPrev(),this.nextBtn.disabled=this.sliderRef.isExistNext()}updateDisplayDots(){const e=this.sliderDots.children;for(let t=0;t<e.length;t+=1)t===this.sliderRef.currentSlide?e[t].classList.add("active-dot"):e[t].classList.remove("active-dot")}updateCounter(){this.slidesCounter.textContent=`${this.sliderRef.currentSlide+1+"/"+this.elementsList.length}`}};let o=d;c(o,"touchThreshold",75);const n={gallery:document.querySelector(".gallery"),modalBackdrop:document.querySelector(".modal-backdrop"),buttonClose:document.querySelector(".close-button"),modalContent:document.querySelector(".modal-content"),modalClose:document.querySelector("#closeBtn")};p(f,n.gallery);n.gallery.addEventListener("click",y);n.buttonClose.addEventListener("click",r);n.modalBackdrop.addEventListener("click",C);n.modalClose.addEventListener("click",r);function y(s){const e=s.target;if(!e.classList.contains("gallery-img"))return;s.preventDefault();const i=e.closest(".gallery-item"),l=s.currentTarget.children,h=Array.from(l).indexOf(i);new o(h,l,n.modalContent),L()}function L(){n.modalBackdrop.classList.add("is-open"),document.body.classList.add("stop-scrolling"),window.addEventListener("keydown",a)}function r(s){window.removeEventListener("keydown",a),document.body.classList.remove("stop-scrolling"),n.modalBackdrop.classList.remove("is-open")}function a(s){s.code===g&&r()}function C(s){s.currentTarget===s.target&&r()}
