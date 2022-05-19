// Function

// Напиши всі можливі варіанти створення функцій.
function testFunction1() {
  console.log('Test function 1');
}

const testFunction2 = function () {
  console.log('Test function 2');
};

const testFunction3 = () => {
  console.log('Test function 3');
};

testFunction1();
testFunction2();
testFunction3();

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

const printArguments = (...args) => {
  let numberOfArgs = args.length;
  return numberOfArgs;
};

console.log('Number of args: ', printArguments(1, 2, 3, 4, 5));

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
const comparsionFunction = (a, b) => {
  if (a > b) {
    console.log(`Comparsion of ${a} and ${b}`);
    return 1;
  } else if (a < b) {
    console.log(`Comparsion of ${a} and ${b}`);
    return -1;
  } else {
    console.log(`Comparsion of ${a} and ${b}`);
    return 0;
  }
};

console.log(comparsionFunction(3, 2));
console.log(comparsionFunction(2, 3));
console.log(comparsionFunction(2, 2));

// Напиши функцію, яка обчислює факторіал переданого їй числа.

const factorial = (num) => {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
};

console.log('factorial: ', factorial(5));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

const numberCombine = (a, b, c) => {
  console.log(`Number Combine: ${a}${b}${c}`);
};

numberCombine(1, 2, 3);

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

const areaOfObject = (a, b) => {
  if (b === undefined) {
    console.log(`Area of square: ${a * a}`);
  } else {
    console.log(`Area of rectangle: ${a * b}`);
  }
};

areaOfObject(2);
areaOfObject(3, 3);

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

const isPerfectNumber = (num) => {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (!(num % i)) {
      sum += i;
      console.log(sum);
    }
  }
  sum === num ? console.log('Perfect') : console.log('Not Perfect');
};

isPerfectNumber(20);
