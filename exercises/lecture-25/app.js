const list = ['html', 'css', 'javascript', 'react.js'];

// Завдання 1

const ul = document.createElement('ul');
list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item; 
    ul.appendChild(li); // Додаємо li до ul
});
const container = document.body; 
// Додаємо список (ul) до контейнера
container.appendChild(ul);


// Завдання 2 (Варіант 1 )
// В цьому варіанті відображається те що заявлене у вимогах завдання ,тільки  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
const listWithHref = [
    { 'html': "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { 'css': "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { 'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { 'react.js': "https://react.dev" }
  ];
  function createList(list) {
    const ol = document.createElement('ol');
  
    list.forEach(item => {
      const a = document.createElement('a');
      a.textContent = item.html;
      a.href = item.css;
  
      const li = document.createElement('li');
      li.appendChild(a);
  
      ol.appendChild(li);
    });
     return ol;
  }
  const container1 = document.getElementById('list-container');
  container.appendChild(createList(listWithHref));

  //Завдання 2 (Варіант 2)
  // В цьому варіанті відображаються посилання тільки з назвами елементів
const listWithHref1 = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
const ol = document.createElement('ol');
listWithHref.forEach(item => {
    // Отримання назви та посилання з об'єкта
    const tagName = Object.keys(item)[0];
    const href = item[tagName];

    const a = document.createElement('a');
    a.href = href;
    a.textContent = tagName;

    const li = document.createElement('li');
    li.appendChild(a);
    ol.appendChild(li);
});
document.body.appendChild(ol);

//Завдання 3

// Масив зі студентами
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
];
// таблиця
const table = document.createElement('table');
// рядок для заголовка
const headerRow = document.createElement('tr');
// заголовкі стовпців
['firstName', 'lastName', 'degree'].forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.style.backgroundColor = 'blue';
    th.style.color = 'azure';
    headerRow.appendChild(th);
});
// Додавання рядка з заголовками до таблиці
table.appendChild(headerRow);

// Додавання даних
students.forEach(student => {
    const row = document.createElement('tr');
    Object.values(student).forEach(text => {
        const td = document.createElement('td');
        td.textContent = text;
        row.appendChild(td);
    });
    table.appendChild(row);
});
// Додавання таблиці до сторінки
document.body.appendChild(table);
