import { galleryItems as lightboxItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createGalleryHTML(items) {
  return items.map(item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `).join('');
}

gallery.innerHTML = createGalleryHTML(lightboxItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
