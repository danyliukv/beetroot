
// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передане кількість секунд.
// Зміни часу на передане кількість хвилин.
// Зміни часу на передане кількість годин.
// Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
  hour: 20,
  minute: 20,
  second: 20,
  printTime: function () {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  },
  changeSeconds: function (a) {
    if (Math.floor(a / 60) > 0) {
      this.minute += Math.floor(a / 60);
      this.second += a % 60;
      this.printTime();
    } else {
      this.second += a;
      this.printTime();
    }
  },
  changeMinutes: function (a) {
    if (Math.floor(a / 60) > 0) {
      this.hour += Math.floor(a / 60);
      this.minute += a % 60;
      while (this.hour > 24) {
        console.log('Next day');
        this.hour -= 24;
      }
      this.printTime();
    } else {
      this.minute += a;
      this.printTime();
    }
  },
  changeHours: function (a) {
    this.hour += a;
    while (this.hour > 24) {
      console.log('Next day');
      this.hour -= 24;
    }
    this.printTime();
  },
};

time.printTime();
time.changeHours(3);
time.changeMinutes(300);
time.changeSeconds(150);

// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2-х об'єктів-дробів.
// Віднімання 2-х об'єктів-дробів.
// Множення 2-х об'єктів-дробів.
// Ділення 2-х об'єктів-дробів.
// Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)

const drip1 = {
  number: 2.5,
};

const drip2 = {
  number: 1.2,
};

const sumOfDrip = (a, b) => a.number + b.number;
const subOfDrip = (a, b) => a.number - b.number;
const mulOfDrip = (a, b) => (a.number * b.number).toFixed(1);
const divOfDrip = (a, b) => (a.number / b.number).toFixed(1);
const trimOfDrip = (a) => Math.floor(a.number);

console.log(sumOfDrip(drip1, drip2));
console.log(subOfDrip(drip1, drip2));
console.log(mulOfDrip(drip1, drip2));
console.log(divOfDrip(drip1, drip2));
console.log(trimOfDrip(drip1));

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.
// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

const shoppingList = [
  {
    name: 'apple',
    quantity: 2,
    isBuyed: false,
    price: 2.88,
    totalPrice: function (a, b) {
      return this.quantity * this.price;
    },
  },
  {
    name: 'orange',
    quantity: 1,
    isBuyed: true,
    price: 4,
    totalPrice: function (a, b) {
      return this.quantity * this.price;
    },
  },
  {
    name: 'banana',
    quantity: 10,
    isBuyed: false,
    price: 1.99,
    totalPrice: function (a, b) {
      return this.quantity * this.price;
    },
  },
];

const printShoppingList = (list) => {};

const createListForBuy = (list) => {
  let toBuyList = list.filter((item) => item.isBuyed === false);
  console.log(toBuyList);
  return toBuyList;
};

const buyItem = (list, item) => {
  list.forEach((element) => {
    if (element.name === item) {
      element.isBuyed = true;
    }
  });
  console.log(list);
  return list;
};

const totalCost = (list) => {
  let totalCost = 0;
  list.forEach((element) => {
    totalCost += element.totalPrice();
  });
  console.log(totalCost.toFixed(2));
  return totalCost.toFixed(2);
};

const totalUnbuyedCost = (list) => {
  let totalCost = 0;
  list.forEach((element) => {
    if (element.isBuyed === false) {
      totalCost += element.totalPrice();
    }
  });
  console.log(totalCost.toFixed(2));
  return totalCost.toFixed(2);
};

const removeItem = (list, item) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === item) {
      list.splice(i, 1);
    }
  }
  // console.log(list);
  return list;
};

const addToList = (list, item) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === item.name) {
      return (list[i].quantity += item.quantity);
    }
  }
  return list.push(item);
};

console.log(shoppingList);

let test1 = createListForBuy(shoppingList);
console.log(test1);
let test2 = buyItem(shoppingList, 'banana');
console.log(test2);
let test3 = totalCost(shoppingList);
console.log(test3);
let test4 = totalUnbuyedCost(shoppingList);
console.log(test4);
let test5 = removeItem(shoppingList, 'apple');
console.log(test5);

let newItem = {
  name: 'tangerine',
  quantity: 4,
  isBuyed: false,
  price: 0.99,
  totalPrice: function (a, b) {
    return this.quantity * this.price;
  },
};
let newItem2 = {
  name: 'apple',
  quantity: 4,
  isBuyed: false,
  price: 0.99,
  totalPrice: function (a, b) {
    return this.quantity * this.price;
  },
};

let test6 = addToList(shoppingList, newItem2);
console.log(test6);
let test7 = addToList(shoppingList, newItem);
console.log(test7);



