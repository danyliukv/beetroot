// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let userName = '';

userName = prompt('Enter your name:');

alert('Hello ' + userName);

// Запитай рік народження користувача, порахуй його/її вік і виведи результат.
const CURRENT_YEAR = 2022;
let userYear = 0;

userYear = +prompt('Enter your born year: ');

alert(`Your age: ${CURRENT_YEAR - userYear}`);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let sideOfSquare = 0;

sideOfSquare = +prompt('Enter side of square: ');

alert(`Perimeter of square: ${sideOfSquare * 4}`)

// Запитай у користувача радіус кола і виведи площу такої окружності.

const PI = Math.PI;
let 
  circleRadius = 0,
  areaOfCircle = 0;

circleRadius = +prompt('Enter circle radius: ');

areaOfCircle = (PI * (circleRadius * circleRadius)).toFixed(2);

alert('Area of circle: ' + areaOfCircle);

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися.

let distance = 0;
let time = 0;

distance = +prompt('Enter distance: ');
time = +prompt('Enter time: ');

alert(`The speed is ${distance / time}`);

// Реалізуй конвертор валют. 

const EUR = 0.031;
let 
  userMoney = 0,
  userCurency = 0;

userMoney = +prompt('Enter your sum of money in UAH:');

userCurency = userMoney * EUR;

alert('EUR: ' + userCurency);