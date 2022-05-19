// Виконай додавання 0,1 і 0,2 добийся математично правильної відп

let num1 = 0.1;
let num2 = 0.2;

console.log('Виконай додавання');
console.log((num1 + num2).toFixed(1));

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let string1 = '1';
let num3 = 2;

console.log('Виконай додавання рядка "1" і цифри 2');
console.log(+string1 + num3);
console.log(string1 + num3);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

let gb = 16;
console.log(`скільки файлів розміром в 820 Мб поміщається на флешку ${gb} GB`);
const amountOfFiles = (memoryAmount) => {
  memoryAmount *= 1024;
  let fileSize = 820;
  console.log(Math.floor(memoryAmount / fileSize));
};

amountOfFiles(16);

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let money = +prompt('вводить суму грошей в гаманці');
let chocolatePrise = +prompt('ціну однієї шоколадки');

let amountOfChoco = Math.floor(money / chocolatePrise);
let moneyLeft = money % chocolatePrise;
console.log('скільки шоколадок може купити користувач ', amountOfChoco);
console.log('скільки здачі у нього залишиться ', moneyLeft);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).

let numb4 = +prompt('Запитай у користувача тризначне число');

const reverseNum = (number) => {
  let digit,
    result = 0;
  for (let i = 0; i < 3; i++) {
    digit = number % 10;
    result = (result * 10) + digit;213
    number = Math.floor(number / 10);
  }
  return result;
};

let flipNum = reverseNum(numb4);
console.log(flipNum);

