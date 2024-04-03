const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    if (document.querySelector('.success')) {
      closeSuccessMessage();
    } else {
      closeErrorMessage();
    }
  }
  evt.preventDefault();
};

const onButtonSuccessClick = () => {
  closeSuccessMessage();
};

const onButtonErrorClick = () => {
  closeErrorMessage();
};

const onSuccessMessageClick = (evt) => {
  if (!evt.target.closest('.success__inner')) {
    closeSuccessMessage();
  }
};

const onErrorMessageClick = (evt) => {
  if (!evt.target.closest('.error__inner')) {
    closeErrorMessage();
  }
};

const openSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);
  const succesButtonElement = successElement.querySelector('.success__button');
  succesButtonElement.addEventListener('click', onButtonSuccessClick);
  successElement.addEventListener('click', onSuccessMessageClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const openErrorMessage = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);
  const errorButtonElement = errorElement.querySelector('.error__button');
  errorButtonElement.addEventListener('click', onButtonErrorClick);
  errorElement.addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeErrorMessage () {
  const errorElement = document.querySelector('.error');
  errorElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
}

function closeSuccessMessage () {
  const successElement = document.querySelector('.success');
  successElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openSuccessMessage, openErrorMessage};
