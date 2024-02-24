import { renderThumbnails } from './thumbnail.js';
import { showBigPhoto } from './big-picture.js';

const box = document.querySelector('.pictures');

const renderGallery = (photos) => {
  box.addEventListener('click', (evt) => {
    const miniature = evt.target.closest('[data-miniature-id]');
    if (!miniature) {
      return;
    }
    const photo = photos.find(
      (item) => item.id === +miniature.dataset.miniatureId);
    showBigPhoto(photo);
  });

  renderThumbnails(photos, box);
};

export {renderGallery};
