
/*Проверка на полиндром*/

// eslint-disable-next-line no-unused-vars
const isPalindrom = (strinpUp) => {
  const formattedString = strinpUp
    .toLowerCase()
    .replaceAll(' ', '');

  let reversedString = '';
  for (let i = formattedString.length - 1; i >= 0; i--) {
    reversedString += formattedString.at(i);
  }
  return formattedString === reversedString;
};
/*Функция которая принимает три параметра*/

// eslint-disable-next-line no-unused-vars
const myPadStart = (string, minLength, pad) => {
  const currentPad = minLength - string.lenght;

  if (currentPad <= 0) {
    return string;
  }

  return pad.slice(0, currentPad % pad.length) + pad.repeat(currentPad / pad.length) + string;
};
/*Длина строки*/


// eslint-disable-next-line no-unused-vars
const checkStringLength = (string, length) => {
  const result = string.length <= length;
  return result;
};

/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.*/

// eslint-disable-next-line no-unused-vars
const getNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
