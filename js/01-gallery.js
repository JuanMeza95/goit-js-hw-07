
import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

function createGalleryHTML(items) {
  return items
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
      </a>
    </li>
  `
    )
    .join('');
}
gallery.innerHTML = createGalleryHTML(galleryItems);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;

  if (target.tagName !== 'IMG') {
    return;
  }

  const imageUrl = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
  `);

  instance.show();
 window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}



gallery.innerHTML = createGalleryHTML(galleryItems);
gallery.addEventListener('click', onGalleryClick);
