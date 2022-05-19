// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
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

// Створення списку (не) придбаних продуктів.
const createListForBuy = (list) => {
  let toBuyList = list.filter((item) => item.isBuyed === false);
  console.log(toBuyList);
  return toBuyList;
};

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
const buyItem = (list, item) => {
  list.forEach((element) => {
    if (element.name === item) {
      element.isBuyed = true;
    }
  });
  console.log(list);
  return list;
};

buyItem(shoppingList, 'apple');

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
