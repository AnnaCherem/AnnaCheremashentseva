// Виправила покращення
// Знайти елемент ul у документі та запам'ятати його у змінній ul.
const ul = document.querySelector('ul');

// Знайти елемент input у документі та запам'ятати його у змінній input.
const input = document.getElementById('item');

// За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray.
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Якщо елемент відсутній, створити його зі значенням [].
if (!itemsArray) {
  itemsArray = [];
}

function addTask(text) {
  // Створюємо елемент li
  let newTask = document.createElement('li');
  // Присвоюємо текстове вміст елементу li
  newTask.textContent = text;
  // Додаємо елемент li до елементу ul
  ul.appendChild(newTask);
}

function add() {
  const newItemValue = input.value.trim();
  if (newItemValue !== "") {
    // Додаємо новий елемент до масиву itemsArray
    itemsArray.push(newItemValue);
    // Зберігаємо цей масив у localStorage з ключем items, використовуючи метод JSON.stringify.
    localStorage.setItem('items', JSON.stringify(itemsArray));
    // Одночасно візуалізуємо доданий елемент на сторінці, використовуючи функцію addTask.
    addTask(newItemValue);
    // Очищаємо поле вводу
    input.value = "";
  }
}

function del() {
  // Очищаємо localStorage
  localStorage.removeItem('items');
  // Очищаємо масив itemsArray
  itemsArray = [];
  // Очищаємо вміст елемента ul
  ul.innerHTML = "";
}

// Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.
itemsArray.forEach(task => addTask(task));
