// For my modal window
import { KEY_CODE_ESC } from "../common/constants.js";
import SliderInterface from "./slider-interface.js";
import createGallery from '../common/create-gallery.js';
import images from "../data/gallery-images.js";

const refs = {
  gallery: document.querySelector('.gallery'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  buttonClose: document.querySelector('.close-button'),
  modalContent: document.querySelector('.modal-content'),
  modalClose: document.querySelector('#closeBtn'),
};

createGallery(images, refs.gallery);

refs.gallery.addEventListener("click", onImageClick);
refs.buttonClose.addEventListener("click", onCloseModalWindow);
refs.modalBackdrop.addEventListener("click", onBackdropClick);
refs.modalClose.addEventListener("click", onCloseModalWindow);

function onImageClick(event) {
  const targetRef = event.target;

  const isImageRef = targetRef.classList.contains('gallery-img');
  if (!isImageRef) {
    return;
  }
  event.preventDefault();

  const closestLi = targetRef.closest('.gallery-item');
  const listImages = event.currentTarget.children;
  const indexList = Array.from(listImages).indexOf(closestLi);

  const sliderInterface = new SliderInterface(
    indexList,
    listImages,
    refs.modalContent
  );
  openModalWindow();
}
function openModalWindow() {
  refs.modalBackdrop.classList.add('is-open');
  document.body.classList.add('stop-scrolling');
  window.addEventListener('keydown', onWindowKeydown);
}

function onCloseModalWindow(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  document.body.classList.remove('stop-scrolling');
  refs.modalBackdrop.classList.remove('is-open');
}

function onWindowKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    onCloseModalWindow(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalWindow(event);
  }
}

