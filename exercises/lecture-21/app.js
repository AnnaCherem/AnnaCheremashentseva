// Завдання 1 ( варіант 1)

const fruits = 'apple banana cantaloupe blueberries grapefruit';

const fruitsArray = fruits.split(' ');// Перетворення рядка на масив 
console.log(fruitsArray);

// (варіант 2)
//const fruits = 'apple banana cantaloupe blueberries grapefruit';

//fruits2 = fruits.split(' ');// Перетворення рядка на масив
//console.log(fruits);


// Завдання 2

// Використання циклу for для виведення кожного елемента масиву на консоль
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Завдання 3

//let i = 0;//  перераховує елементи(0 ставимо щоб довжина була меньше за елементи)
//while (i < fruits.length) { // Використання циклу while для виведення кожного елемента масиву на консоль
   // console.log(fruits[i]);
   // i++;// Збільшуємо 'i' для переходу до наступного елемента
//}


// Завдання 4

let i = 0;
do {   // Використання циклу do  while для виведення кожного елемента масиву на консоль
    console.log(fruits[i]);
     i++;
} while (i < fruits.length);


//Завдання 5

for (const fruit of fruits) { // Використання циклу for...of для виведення кожного елемента масиву на консоль
    console.log(fruit);
}


//Завдання 6

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < Numbs.length; i++) { // Використання циклу for для перевірки кожного елемента масиву
    if (Numbs[i] % 2 === 0) { // відбирає парні числа
        console.log(Numbs[i]);
    }
}


//Завдання 7 Додати 'Joker' в кінець масиву names:

//const names = ['Batman'];
//names.push('Joker'); //метод push
//console.log(names); // Результат: ['Batman', 'Joker']


//Завдання 8.  Додати 'Joker' на початок масиву names

//names.unshift('Joker');//метод unshift
//console.log(names); // Результат: ['Joker', 'Batman']


//Завдання 9.Додати 'Catwoman' на початок масиву names, використовуючи метод unshift

//let names = ['Batman', 'Joker', 'Bane'];
//names.unshift('Catwoman');
//console.log(names); // Результат: ['Catwoman', 'Batman', 'Joker', 'Bane']


//Завдання 10 Додати 'Catwoman' на початок масиву names, використовуючи оператор ...

//let names = ['Batman', 'Joker', 'Bane'];
//names = ['Catwoman', ...names];
//console.log(names); // Результат: ['Catwoman', 'Batman', 'Joker', 'Bane']


// Завдання 11. Додати до names елемент 'Catwoman', розмістивши його з індексом 1

//let names = ['Batman', 'Joker', 'Bane'];
//names.splice(1, 0, 'Catwoman');
//console.log(names); // Результат: ['Batman', 'Catwoman', 'Joker', 'Bane']


// Завдання 12.Видалити елементи 'Catwoman' і 'Joker' з масиву names:

//const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
//names.splice(1, 2);//використовую метод splice, який дозволяє видаляти елементи за їхнім індексом.
//console.log(names); // Результат: ['Batman', 'Bane']


// Завдання 13. Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names

//const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
//names.splice(1, 2, 'Alfred', 'Alfred');//використовую метод splice, який дозволяє видаляти елементи за їхнім індексом та заміняти
//console.log(names); // Результат: ['Batman', 'Alfred', 'Alfred', 'Bane']


// Завдання 14.Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.

//const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
//if (!names.includes('Alfred')) {  //Перевіряє, чи існує рядок 'Alfred' у масиві names
   // names.push('Alfred');// Додавання рядка 'Alfred' до кінця масиву, якщо його не існує
//}
//console.log(names); // Результат: ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred']


// Завдання 15. Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
 
const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
if (names.includes('Alfred')) { //Перевіряє, чи існує рядок 'Alfred' у масиві names
    const index = names.indexOf('Alfred');// Якщо 'Alfred' знайдено, видаляємо його з масиву
    names.splice(index, 1);
}
console.log(names); // Результат: ['Batman', 'Catwoman', 'Joker', 'Bane']
