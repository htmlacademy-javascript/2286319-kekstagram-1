import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import './form.js';

const photos = getPictures();
renderGallery(photos);
