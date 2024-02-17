import {getImages} from './data.js';
import {renderThumbnails} from '.thumbnail.js';

const getPictures = getImages();

renderThumbnails(getPictures());
// eslint-disable-next-line no-console
console.log(getImages);
