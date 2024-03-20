import {renderGallery} from './gallery.js';
import {setOnFormSubmit, hideModal} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import {openSuccessMessage,} from './message.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    openSuccessMessage();
  } catch {
    /*
    showErrorMessage();
    */
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
