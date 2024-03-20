/* eslint-disable no-unused-vars */
const bodyElement = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessage();
  }
};

function openSuccessMessage () {
  // eslint-disable-next-line no-undef
  const successTemplate = thumbnailTemplate.cloneNode(true);

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeErrorMessage () {

  document.removeEventListener('keydown', onDocumentKeydown);
}

successMessage.addEventListener('click', () => {
  openSuccessMessage();
});

successMessage.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    closeErrorMessage();
  }
});

errorMessage.addEventListener('click', () => {
  closeErrorMessage();
});

errorMessage.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeErrorMessage();
  }
});

const showSuccessMessage = () => {
  openSuccessMessage();
};

const showErrorMessage = () => {
  closeErrorMessage();
};

export {showSuccessMessage, showErrorMessage};
