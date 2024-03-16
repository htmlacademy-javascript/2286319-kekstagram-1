const bodyElement = document.querySelector('body');
const successMessage = document.querySelector('.success');
const errorMessage = document.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessage();
  }
};

function openSuccessMessage () {
  bodyElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeErrorMessage () {
  bodyElement.classList.add('hidden');
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
