
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

// Завдання 1
console.log(str1.length === str2.length); // true (перевірка на однакову довжину)
console.log(str1 == str2); // true (недбала перевірка на рівність)
console.log(str1 === str2); // true (строга перевірка на рівність)
// Завдання 2
let string5 = 'Hello World';
let firstChar = string5.charAt(0);
console.log(firstChar); // Поверне 'H'
// Завдання 3
let str3 = "Hello Javascript";
let charJ = str3[6];
console.log(charJ); // Поверне 'J'
// Завдання 4
let str = "Hello";
let lastChar1 = str[str.length - 1]; // зворотній порядок
let lastChar2 = str.charAt(str.length - 1); // метод charAt
console.log(lastChar1,lastChar2); // Виведе "o"
// Завдання 5
function lastChar1(str) {
    return str[str.length - 1]; // індексація в зворотньому порядку
}
function lastChar2(str) {
    return str.charAt(str.length - 1); // метод charAt
}
function lastChar3(str) {
    return str.substring(str.length - 1); // метод substring
}
// Завдання 6
let a = 'When candles are out,';
let b = 'all cats are grey.';

let result = a.concat(' ', b); // рядки об'єднується через пробіл
console.log(result);
// Завдання 7
/*let fact = "Fifteen is the same as";
let a = 5; 
let b = 10;

fact += " " + (a + b); // варіат 1 приводимо числа до рядкового формату та об'єднуємо їх
fact += `${a + b}`; // варіат 2 за допомогою синтаксису ${}
console.log(fact);*/

// Завдання 8
let firstName = "Tom";
let lastName = "Cat";

function getFullName(firstName, lastName) {
    return firstName + " " + lastName; // варіант 1 об'єднуємо рядки
    return `${firstName} ${lastName}`; // варіант 2
}

let fullName = getFullName("Tom", "Cat");
console.log(fullName); // "Tom Cat"

// Завдання 9
function getFullName(firstName, lastName) {
    return firstName + " " + lastName; // об'єднуємо рядки
}

function greeting(firstName, lastName) {
    const fullName = getFullName(firstName, lastName);
    return `Hello, ${fullName}!`; // об'єднуємо всі рядки fullNam
}
console.log(greeting("Tom", "Cat")); // Виведе "Hello, Tom Cat!"

// Завдання 10 
// Варіант 1
function greeting() {
    let firstName = "Tom";
    let lastName = "Cat";
    return `<div><h1>Hello, ${getFullName(firstName, lastName)}!</h1></div>`;
}
console.log(greeting()); 
// Варіант 2
function greeting(name) {
    return `<div><h1>Hello, ${name}!</h1></div>`;
}
console.log(greeting("Tom Cat"));

// Завдання 11
let string1 = "  The name of our game  ";

let result1 = string1.trim();

let result2 = string1.trimRight();

let result3 = string1.trimLeft();

console.log(result1); 
console.log(result2);
console.log(result3); 

const phoneNumber = "\t  555-123\n ";

let result4 = phoneNumber.replace(/\s/g, "");

console.log(result4);
console.log(phoneNumber); 

// Завдання 12
let sentence = 'Always look on the bright side of life';

// Перевірка, чи містить рядок значення 'look up'
if (sentence.includes('look up')) {
    console.log('Рядок містить "look up"');
} else {
    console.log('Рядок НЕ містить "look up"');
}

// Перевірка, чи містить рядок значення 'look on'
if (sentence.includes('look on')) {
    console.log('Рядок містить "look on"');
} else {
    console.log('Рядок НЕ містить "look on"');
}

// Перевірка, чи містить рядок значення 'look on' починаючи з 8-ї позиції
if (sentence.substr(8).includes('look on')) {
    console.log('Рядок містить "look on" починаючи з 8-ї позиції');
} else {
    console.log('Рядок НЕ містить "look on" починаючи з 8-ї позиції');
}

// Завдання 13
//let sentence = 'Always look on the bright side of life';

// Знайти індекс символу 'l'
let index1 = sentence.indexOf('l');
console.log("Індекс символу 'l':", index1);

// Знайти індекс символу 'l', починаючи з 3-ї позиції
let index2 = sentence.indexOf('l', 3);
console.log("Індекс символу 'l', починаючи з 3-ї позиції:", index2);

// Знайти індекс символу 'L'
let index3 = sentence.toLowerCase().indexOf('l');
console.log("Індекс символу 'L':", index3);

// Завдання 14
//let sentence = 'Always look on the bright side of life';

// Отримати підрядок 'look on the bright side of life'
let subString1 = sentence.substring(6);
console.log(subString1);

// Отримати підрядок 'Always'
let subString2 = sentence.substring(0, 6);
console.log(subString2);

// Отримати підрядок 'look'
let subString3 = sentence.substring(6, 10);
console.log(subString3);

// Завдання 15
let usernameRegex = /^[a-z0-9_-]{8,16}$/;
//^: Початок рядка.
//[a-z0-9_-]: Символи, які можуть бути у рядку. 
//{8,16}: Кількість символів від 8 до 16.
//$: Кінець рядка.

// Завдання 16
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//^: Початок рядка.
//Починається з будь-якого символу, що не є пробілом або символом '@'.
//Потім символ '@'.
//Потім має послідовність символів, що не є пробілами або символами '@', що складають домен (наприклад).
//Потім символ '.'
//Після цього має наступити послідовність символів, що не є пробілами або символами '@', що складають кінцевий домен (наприклад, 'com').

// Завдання 16

//let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

// Використання методу substring
function truncateTextUsingSubstring(text) {
    if (text.length <= 50) {
        return text;
    } else {
        return text.substring(0, 50) + '...';
    }
}

// Використання методу substr
function truncateTextUsingSubstr(text) {
    if (text.length <= 50) {
        return text;
    } else {
        return text.substr(0, 50) + '...';
    }
}

console.log(truncateTextUsingSubstring(sentence));
console.log(truncateTextUsingSubstr(sentence));
