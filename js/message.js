const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const openSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeErrorMessage () {
  document.removeEventListener('keydown', onDocumentKeydown);
}
/*
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
*/

export {openSuccessMessage, };
