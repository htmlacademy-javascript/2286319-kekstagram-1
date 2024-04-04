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
  const successItem = successTemplate.cloneNode(true);
  document.body.append(successItem);
  const succesButton = successItem.querySelector('.success__button');
  succesButton.addEventListener('click', onButtonSuccessClick);
  successItem.addEventListener('click', onSuccessMessageClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const openErrorMessage = () => {
  const errorItem = errorTemplate.cloneNode(true);
  document.body.append(errorItem);
  const errorButton = errorItem.querySelector('.error__button');
  errorButton.addEventListener('click', onButtonErrorClick);
  errorItem.addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeErrorMessage () {
  const errorUnit = document.querySelector('.error');
  errorUnit.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
}

function closeSuccessMessage () {
  const successUnit = document.querySelector('.success');
  successUnit.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openSuccessMessage, openErrorMessage};
