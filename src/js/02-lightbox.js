import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`,
  ''
);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);

galleryRef.insertAdjacentHTML('beforeend', markup);

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

let lightbox = new SimpleLightbox('.gallery__item', options);
