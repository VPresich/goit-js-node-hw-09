import"./styles-cf1625cb.js";import{c as S,i as N,K as q}from"./gallery-images-10d89ae9.js";function p(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var v={},M={get exports(){return v},set exports(i){v=i}};(function(i,u){(function(g){i.exports=g()})(function(){return function g(l,s,d){function f(n,o){if(!s[n]){if(!l[n]){var b=typeof p=="function"&&p;if(!o&&b)return b(n,!0);if(m)return m(n,!0);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}var e=s[n]={exports:{}};l[n][0].call(e.exports,function(r){return f(l[n][1][r]||r)},e,e.exports,g,l,s,d)}return s[n].exports}for(var m=typeof p=="function"&&p,t=0;t<d.length;t++)f(d[t]);return f}({1:[function(g,l,s){Object.defineProperty(s,"__esModule",{value:!0}),s.create=s.visible=void 0;var d=function(t){var n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],o=document.createElement("div");return o.innerHTML=t.trim(),n===!0?o.children:o.firstChild},f=function(t,n){var o=t.children;return o.length===1&&o[0].tagName===n},m=function(t){return(t=t||document.querySelector(".basicLightbox"))!=null&&t.ownerDocument.body.contains(t)===!0};s.visible=m,s.create=function(t,n){var o=function(e,r){var a=d(`
		<div class="basicLightbox `.concat(r.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),h=a.querySelector(".basicLightbox__placeholder");e.forEach(function(_){return h.appendChild(_)});var E=f(h,"IMG"),x=f(h,"VIDEO"),C=f(h,"IFRAME");return E===!0&&a.classList.add("basicLightbox--img"),x===!0&&a.classList.add("basicLightbox--video"),C===!0&&a.classList.add("basicLightbox--iframe"),a}(t=function(e){var r=typeof e=="string",a=e instanceof HTMLElement==1;if(r===!1&&a===!1)throw new Error("Content must be a DOM element/node or string");return r===!0?Array.from(d(e,!0)):e.tagName==="TEMPLATE"?[e.content.cloneNode(!0)]:Array.from(e.children)}(t),n=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((e=Object.assign({},e)).closable==null&&(e.closable=!0),e.className==null&&(e.className=""),e.onShow==null&&(e.onShow=function(){}),e.onClose==null&&(e.onClose=function(){}),typeof e.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof e.className!="string")throw new Error("Property `className` must be a string");if(typeof e.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof e.onClose!="function")throw new Error("Property `onClose` must be a function");return e}(n)),b=function(e){return n.onClose(c)!==!1&&function(r,a){return r.classList.remove("basicLightbox--visible"),setTimeout(function(){return m(r)===!1||r.parentElement.removeChild(r),a()},410),!0}(o,function(){if(typeof e=="function")return e(c)})};n.closable===!0&&o.addEventListener("click",function(e){e.target===o&&b()});var c={element:function(){return o},visible:function(){return m(o)},show:function(e){return n.onShow(c)!==!1&&function(r,a){return document.body.appendChild(r),setTimeout(function(){requestAnimationFrame(function(){return r.classList.add("basicLightbox--visible"),a()})},10),!0}(o,function(){if(typeof e=="function")return e(c)})},close:b};return c}},{}]},{},[1])(1)})})(M);const L=document.querySelector(".gallery-lightbox");S(N,L);L.addEventListener("click",R);function R(i){const u=i.target;if(!u.classList.contains("gallery-img"))return;i.preventDefault();const l={src:u.dataset.source,alt:u.alt,preview:u.src};D(l)}let y=null;function D({src:i,alt:u}){y=v.create(`<div class = "modal">
      <img src="${i}" alt="${u}"/>        
    </div>`,{onShow:()=>{document.addEventListener("keydown",w)},onClose:()=>{document.removeEventListener("keydown",w)}}),y.show()}function w(i){i.code===q&&y.close()}
