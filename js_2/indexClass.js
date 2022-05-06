// Завдання 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

console.log('Class');

class Circle {
  rad = 0;
  constructor(rad) {
    this.rad = rad;
  }

  get radius() {
    return `Circle radius: ${this.rad}`;
  }

  set radius(rad) {
    this.rad = rad;
  }

  get diametr() {
    return `Circle diametr: ${this.rad * 2}`;
  }

  circleArea() {
    console.log(`Circle area: ${(Math.PI * this.rad * this.rad).toFixed(1)}`);
  }

  circleLength() {
    console.log(`Circle lenght: ${(2 * this.rad * Math.PI).toFixed(1)}`);
  }
}

let circle = new Circle(25);

console.log(circle.radius);
circle.radius = 10;
console.log(circle.radius);
console.log(circle.diametr);
circle.circleArea();
circle.circleLength();

// Завдання 2

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

// Продемонструй роботу написаних методів.

class Marker {
  constructor(inkColor, inkAmount) {
    this.inkColor = inkColor;
    this.inkAmount = inkAmount;
  }

  printText(text) {
    for (let i = this.inkAmount; i != 0; i -= 0.5) {
      console.log(`%c ${text}`, `color: ${this.inkColor}`);
    }
  }
}

let marker = new Marker('green', 100);

marker.printText('sdfsdfdsf');

class RefiledMarker extends Marker {
  constructor(inkColor, inkAmount) {
    super(inkColor, inkAmount);
  }

  refil(refilAmount) {
    this.inkAmount += refilAmount;
  }
}

let marker2 = new RefiledMarker('red', 80);
marker2.refil(20);
console.log(marker2.inkAmount);

// Завдання 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

class Employee {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
}

class EmpTable {
  constructor(employeeList) {
    this.employeeList = employeeList;
  }

  getHtml() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('js-body').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Name';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Age';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Position';

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

    for (let i = 0; i < employeeList.length; i++) {
      for (let i = 0; i < employeeList.length; i++) {
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = '1.';
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = 'James Clerk';
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = 'Netflix';

        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        tbody.appendChild(row_2);
      }
    }
  }
}

let employeeList = [new Employee('Anna', 22, 'Banker'), new Employee('Vlad', 31, 'Loan processor'), new Employee('Iuliana', 32, 'Credit analyst'), new Employee('Yuri', 37, 'Investment banker')];

console.log(employeeList);

let empTable = new EmpTable();
empTable.getHtml();
