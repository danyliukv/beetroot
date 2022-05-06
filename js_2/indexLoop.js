// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const askAge = () => {
  let userAge = +prompt(' Запитай у користувача його вік');
  if (typeof userAge != 'number' || userAge < 0 || userAge > 100 || isNaN(userAge) || typeof userAge == 'undefined') {
    askAge();
  } else {
    return userAge;
  }
};

const whatAge = (age) => {
  switch (true) {
    case age >= 0 && age <= 11: {
      console.log('дитиною');
      break;
    }
    case age >= 12 && age <= 17: {
      console.log('підлітком');
      break;
    }
    case age >= 18 && age <= 59: {
      console.log('дорослим');
      break;
    }
    case age >= 60 && age <= 100: {
      console.log('пенсіонером');
      break;
    }
  }
};

// let userAge = askAge();
// whatAge(userAge);

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const specialSymbol = (n) => {
  switch (n) {
    case 1:
      console.log('!');
      break;
    case 2:
      console.log('@');
      break;
    case 3:
      console.log('#');
      break;
    case 4:
      console.log('$');
      break;
    case 5:
      console.log('%');
      break;
    case 6:
      console.log('^');
      break;
    case 7:
      console.log('&');
      break;
    case 8:
      console.log('*');
      break;
    case 9:
      console.log('(');
      break;
    case 0:
      console.log(')');
      break;
  }
};

// let userInput = +prompt('Запитай у користувача число від 0 до 9')
// specialSymbol(userInput);

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const sum = (a, b) => {
  let result = 0;
  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
};

let sumNum = sum(2, 4);
console.log(sumNum);

// Запитай у користувача число і виведи всі дільники цього числа.

const divider = (n) => {
  for (let i = 1; i <= n; i++)
    if (n % i === 0) {
      console.log(i);
    }
};

divider(6);

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const weekDay = () => {
  let ok = true;
  let i = 0;
  do {
    let week = ['Monday', 'Thuesday', 'Wednesday', 'Thourghday', 'Friday', 'Saturday', 'Sunday'];
    ok = confirm('Wanna next day?');
    console.log(week[i]);
    i++;
    if (i === 7) {
      i = 0;
    }
  } while (ok);
};

// weekDay();

// иведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

const table = () => {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`Умножение ${i} на ${j}: ${i * j}`);
    }
  }
};

table();