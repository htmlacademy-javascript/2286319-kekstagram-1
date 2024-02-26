import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';

const photos = getPictures();
renderGallery(photos);
