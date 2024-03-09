import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {onFileInputChange} from './form.js';
import './scale.js';
import './effect.js';

const photos = getPictures();
renderGallery(photos);
onFileInputChange();
