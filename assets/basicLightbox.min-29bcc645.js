function g(f){throw new Error('Could not dynamically require "'+f+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var p={},L={get exports(){return p},set exports(f){p=f}};(function(f,E){(function(b){f.exports=b()})(function(){return function b(m,a,c){function s(t,r){if(!a[t]){if(!m[t]){var d=typeof g=="function"&&g;if(!r&&d)return d(t,!0);if(l)return l(t,!0);var u=new Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}var n=a[t]={exports:{}};m[t][0].call(n.exports,function(e){return s(m[t][1][e]||e)},n,n.exports,b,m,a,c)}return a[t].exports}for(var l=typeof g=="function"&&g,o=0;o<c.length;o++)s(c[o]);return s}({1:[function(b,m,a){Object.defineProperty(a,"__esModule",{value:!0}),a.create=a.visible=void 0;var c=function(o){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=document.createElement("div");return r.innerHTML=o.trim(),t===!0?r.children:r.firstChild},s=function(o,t){var r=o.children;return r.length===1&&r[0].tagName===t},l=function(o){return(o=o||document.querySelector(".basicLightbox"))!=null&&o.ownerDocument.body.contains(o)===!0};a.visible=l,a.create=function(o,t){var r=function(n,e){var i=c(`
		<div class="basicLightbox `.concat(e.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),h=i.querySelector(".basicLightbox__placeholder");n.forEach(function(x){return h.appendChild(x)});var v=s(h,"IMG"),y=s(h,"VIDEO"),w=s(h,"IFRAME");return v===!0&&i.classList.add("basicLightbox--img"),y===!0&&i.classList.add("basicLightbox--video"),w===!0&&i.classList.add("basicLightbox--iframe"),i}(o=function(n){var e=typeof n=="string",i=n instanceof HTMLElement==1;if(e===!1&&i===!1)throw new Error("Content must be a DOM element/node or string");return e===!0?Array.from(c(n,!0)):n.tagName==="TEMPLATE"?[n.content.cloneNode(!0)]:Array.from(n.children)}(o),t=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((n=Object.assign({},n)).closable==null&&(n.closable=!0),n.className==null&&(n.className=""),n.onShow==null&&(n.onShow=function(){}),n.onClose==null&&(n.onClose=function(){}),typeof n.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof n.className!="string")throw new Error("Property `className` must be a string");if(typeof n.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof n.onClose!="function")throw new Error("Property `onClose` must be a function");return n}(t)),d=function(n){return t.onClose(u)!==!1&&function(e,i){return e.classList.remove("basicLightbox--visible"),setTimeout(function(){return l(e)===!1||e.parentElement.removeChild(e),i()},410),!0}(r,function(){if(typeof n=="function")return n(u)})};t.closable===!0&&r.addEventListener("click",function(n){n.target===r&&d()});var u={element:function(){return r},visible:function(){return l(r)},show:function(n){return t.onShow(u)!==!1&&function(e,i){return document.body.appendChild(e),setTimeout(function(){requestAnimationFrame(function(){return e.classList.add("basicLightbox--visible"),i()})},10),!0}(r,function(){if(typeof n=="function")return n(u)})},close:d};return u}},{}]},{},[1])(1)})})(L);export{p as b};