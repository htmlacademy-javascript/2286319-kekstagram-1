const bodyElement = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').contet.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    showErrorMessage();
  }
};

function showSuccessMessage () {
  bodyElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function showErrorMessage () {
  bodyElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

successMessage.addEventListener('click', () => {
  showSuccessMessage();
});

successMessage.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    showErrorMessage();
  }
});

errorMessage.addEventListener('click', () => {
  showErrorMessage();
});

errorMessage.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    showErrorMessage();
  }
});

export {showSuccessMessage, showErrorMessage};
