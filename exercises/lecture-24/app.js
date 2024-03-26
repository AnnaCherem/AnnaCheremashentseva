// Масив кольорів складається з 3 елементів. 
const colors = ['blue', 'green', 'white'];

//Завдання 1

function iter(item) {
  console.log(item);
}

colors.forEach(iter);

//Завдання 2


function iterate(item, index) {
  if (index === colors.length - 1) {
    console.log('The last iteration!');
  } else {
    console.log(`${item} has index ${index}.`);
  }
}

colors.forEach(iterate);



//Завдання 3
const letters = ['a', 'b', 'c'];

// Функція зворотного виклику
function iterate(letter) {
  // Перевірка значення "this"
  console.log(this === window);
}

// Виклик функції iterate для кожної букви
letters.forEach(iterate);


//Завдання 4

const Numbers = [22, 3, 4, 10];
let allEven = true;

Numbers.forEach(function(number) {
  if (number % 2 !== 0) {
    allEven = false;
  }
});

if (allEven) {
  console.log('Усі числа у масиві є парними.');
} else {
  console.log('У масиві є непарні числа.');
}

//Завдання 5

const numbers = [22, 3, 4, 10];

const allEven1 = numbers.every(function(number) {
  return number % 2 === 0;
});

if (allEven) {
  console.log('Усі числа у масиві є парними.');
} else {
  console.log('У масиві є непарні числа.');
}

//Завдання 6

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log("Індекс першого елемента 'blueberries' у масиві: ", index);

//Завдання 7

const arr = [7, 33, 47, 99, 2, 103, 79];

const foundElement = arr.find(element => element > 10);

console.log("Перший елемент у масиві arr, який більше за 10: ", foundElement);

//Завдання 8

const array = [1, 2, 3, 4, 5];

const hasEvenNumber = array.some(element => element % 2 === 0);

if (hasEvenNumber) {
  console.log('У масиві є хоча б одне парне число.');
} else {
  console.log('У масиві немає жодного парного числа.');
}

//Завдання 9

const numbers2 = [1, 30, 4, 21, 100000];

numbers.sort((a, b) => a - b);

console.log("Відсортований масив у порядку зростання:", numbers);

