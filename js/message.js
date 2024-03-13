const body = document.querySelector('body');
const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');

const showErrorMessage = () => {
  const errorElement = error.cloneNode(true);
  const errorButton = errorElement.querySelector('.error__button');
  const errorInner = errorElement.querySelector('.error');
  body.append(errorElement);
  body.classList.add('error');

  const closeErrorMessage = () => {
    errorElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    body.classList.remove('error');
  };

  errorButton.addEventListener('click', () => closeErrorMessage());
  document.addEventListener('click', (evt) => {
    const click = evt.target.classList.value;
    if (click === errorInner) {
      errorElement.remove();
    }
  });

  function onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      closeErrorMessage();
    }
  }

  document.addEventListener('keydown', onDocumentKeydown);
};

const showSuccessMessage = () => {
  const successElement = success.cloneNode(true);
  const closeSuccessButton = successElement.querySelector('.success__button');
  body.append(successElement);

  const closeSuccesMessage = () => {
    successElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  closeSuccessButton.addEventListener('click', () => closeSuccesMessage());

  function onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      closeSuccesMessage();
    }
  }
  document.addEventListener('keydown', onDocumentKeydown);
};

export {showErrorMessage, showSuccessMessage};
