const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const onDocumentSuccessKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onDocumentErrorKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessage();
  }
};


const onButtonSuccessClick = () => {
  closeSuccessMessage();
};

const onButtonErrorClick = () => {
  closeErrorMessage();
};

const onSuccessMessageClick = (evt) => {
  if (!document.querySelector('.success__inner').contains(evt.target)) {
    closeSuccessMessage();
  }
};

const onErrorMessageClick = (evt) => {
  if (!document.querySelector('.error__inner').containt(evt.target)) {
    closeErrorMessage();
  }

};

const openSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);
  const succesButtonElement = successElement.querySelector('.success__button');
  succesButtonElement.addEventListener('click', onButtonSuccessClick);
  successElement.addEventListener('click', onSuccessMessageClick);
  document.addEventListener('keydown', onDocumentSuccessKeydown);
};

const openErrorMessage = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);
  const errorButtonElement = errorElement.querySelector('.error__button');
  errorButtonElement.addEventListener('click', onButtonErrorClick);
  errorElement.addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', onDocumentErrorKeydown);
};

function closeErrorMessage () {
  const errorElement = document.querySelector('.error');
  errorElement.remove();
  document.removeEventListener('keydown', onDocumentErrorKeydown);
}

function closeSuccessMessage () {
  const successElement = document.querySelector('.success');
  successElement.remove();
  document.removeEventListener('keydown', onDocumentSuccessKeydown);
}

export {openSuccessMessage, openErrorMessage};
