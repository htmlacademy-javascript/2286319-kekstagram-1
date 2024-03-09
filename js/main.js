import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {onFormSubmit} from './form.js';


const photos = getPictures();
renderGallery(photos);
onFormSubmit();
