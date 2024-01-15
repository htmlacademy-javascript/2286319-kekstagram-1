
/*Проверка на полиндром*/

const myPalindromus = (lineUp) => {
  const tempLine = lineUp
.toLowerCase()
.replaceAll(' ', '');

 let reverseLine = ' ';
 for ( let i = tempLine.length - 1; i >= 0; i--) {
   reverseLine = tempLine.at[i];
}

return tempLine === reverseLine;

}
/*Функция которая принимает три параметра*/

const IsMyPadStart = ( string,minLength, pad) => {
const currentPad = minLenght - string.lenght;

If ( currentPad <= 0 ) {
return string;
}

return pad.slice(0, currentPad % pad.length) + pad.repeat(currentPad / pad.length) + string;
}
/*Длина строки*/

const findSolution = ( line, length) => {
  if (line.length <= length) {
  return true
  }
  else {
  return false }
  }

  /*Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.*/

 const numberSolution = (string) => {
   let result = '';
   for (let i = 0; i < string.lenght; i++) {
     if (!Number.isNan(parseInt(string.at(i), 10)))
         result += string.at(i);
   }
   return parsenInt(result, 10)
 }
