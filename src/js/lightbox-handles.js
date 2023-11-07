import SimpleLightbox from 'simplelightbox';

import { KEY_CODE_ESC } from './constants.js';

import createGallery from './create-gallery.js';
import images from "./data/gallery-images.js";

const galleryRef = document.querySelector('.gallery-lightbox');
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

const lightBox = new SimpleLightbox('.gallery-lightbox a');

lightBox.on('open.simplelightbox', () => {
  document.addEventListener('keydown', onKeydown);
});

lightBox.on('close.simplelightbox', () => {
  document.removeEventListener('keydown', onKeydown);
 });

function openModalWindow(imageSrc) { 
  console.table(imageSrc);
  console.table('lightBox', lightBox); 
  lightBox.open({src: imageSrc.src, alt: imageSrc.alt});
}

function onKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    lightBox.close();
  }
}
