import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {setOnFormSubmit, hideModal} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import {showErrorMessage, showSuccessMessage} from './message.js';

const photos = getPictures();
renderGallery(photos);

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
