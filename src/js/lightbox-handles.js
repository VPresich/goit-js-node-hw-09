
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

import { KEY_CODE_ESC } from './constants.js';

import createGallery from './create-gallery.js';
import images from "./data/gallery-images.js";

 let modalWindowRef = {};

const galleryRef = document.querySelector('.gallery-lb');
createGallery(images, galleryRef);
galleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {
  const targetRef = event.target;
  const isImageRef = targetRef.classList.contains('gallery-img');
  if (!isImageRef) {
    return;
  }
  event.preventDefault();

  const imageSrc = {
    src: targetRef.dataset.source,
    alt: targetRef.alt,
    preview: targetRef.src,
  };

  openModalWindow(imageSrc);
}


function openModalWindow({ src, alt }) {  

  modalWindowRef = basicLightbox.create(
    `<div class = "modal">
      <img src="${src}" alt="${alt}"/>        
    </div>`,
    {
      onShow: () => {
        document.addEventListener('keydown', onKeydown);
      },
      onClose: () => {
        document.removeEventListener('keydown', onKeydown);
      },
      closable: true,
    }
  );
  
  modalWindowRef.show(() => console.log('lightbox now visible'));
  console.log(modalWindowRef);
}

function onKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    modalWindowRef.close();
  }
}