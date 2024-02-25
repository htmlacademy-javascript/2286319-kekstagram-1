import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';

const generatePictures = getPictures();
renderGallery(generatePictures);
