import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {onFormSubmit} from './form.js';
import './scale.js';
import './effect.js';

const photos = getPictures();
renderGallery(photos);
onFormSubmit();
