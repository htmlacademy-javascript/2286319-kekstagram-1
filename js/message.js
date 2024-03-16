const bodyElement = document.querySelector('body');
const successMessage = document.querySelector('.success');
const errorMessage = document.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    showErrorMessage();
  }
};

function showSuccessMessage () {
  bodyElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function showErrorMessage () {
  bodyElement.classList.add('hidden');
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

showSuccessMessage();
showErrorMessage();


export {showSuccessMessage, showErrorMessage};
