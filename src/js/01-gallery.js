// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const galleryRef = document.querySelector('.gallery');

// const markup = galleryItems.reduce(
//   (acc, { preview, original, description }) =>
//     acc +
//     `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`,
//   ''
// );

// galleryRef.insertAdjacentHTML('beforeend', markup);

// galleryRef.addEventListener('click', pictureFull);

// function pictureFull(event) {
//   event.preventDefault();
// //   if (!event.target.classList.contains('gallery__image')) return;
//   if (event.target.nodeNeme !== 'IMG') return;

//   const action = event.target.dataset.source;

//   // console.log(event.target.dataset.source);
//   // const instance = basicLightbox.create(action, true);

//   const img = basicLightbox.create('<h1>Dynamic Content</h1>', );

// }

// ------------------

import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  ''
);

list.insertAdjacentHTML('afterbegin', markup);

list.addEventListener('click', clickOnImg);

function clickOnImg(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) return;

  const options = {
    onShow: () => {
      window.addEventListener('keydown', closeESC);
    },
    onClose: () => {
      window.removeEventListener('keydown', closeESC);
    },
  };

  const instance = basicLightbox.create(
    `<img src = "${event.target.dataset.source}">`,
    options
  );

  instance.show();

  function closeESC(event) {
    if (event.code === 'Escape') {
       instance.close();
    }
   
  }
}
