const classes = ['first', 'second', 'third', 'fourth'];

//Завдання 1
// Отримати всі елементи з тегом h1.
const h1Elements = document.getElementsByTagName('h1');

// Вивести на консоль тип отриманого об'єкту та його розмір. 
console.log(h1Elements.constructor.name);
console.log(h1Elements.length); // 4

// Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
for (let i = 0; i < h1Elements.length; i++) {
  console.log(h1Elements[i]);
}

//Завдання 2
const paragraph = document.querySelector('#p1');//за допомогою querySelector
paragraph.style.backgroundColor = 'gold';

//Завдання 3
const secondParagraph = document.querySelector('#p2');//за допомогою querySelector
secondParagraph.style.backgroundColor = "gold";
secondParagraph.style.color = "blue";
secondParagraph.style.fontSize = "2rem";


// Завдання 4
const thirdparagraph = document.querySelector('#p3');//за допомогою querySelector
thirdparagraph.classList.add('third');

// Завдання 5
const fourthparagraph = document.getElementById('p4');//за допомогою getElement
// Призначити класи
fourthparagraph.classList.add('fourth');
fourthparagraph.classList.add('border');

// Завдання 6
// Знайти всі елементи з класом container
const containers = document.querySelectorAll('.container');
// Цикл for для перебирання знайдених елементів
for (const container of containers) {
  // Отримати перший елемент всередині контейнера
  const firstChild = container.firstElementChild;
  console.log(firstChild.textContent);
}

// Завдання 7 (таке саме як і 6 завдання , тільки складніше записала)
const containers2 = document.querySelectorAll('.container');
for (let i = 0; i < containers2.length; i++) {
    const firstElement = containers2[i].querySelector(':first-child');
    console.log('Перший елемент для елемента з класом container', i + 1, ':', firstElement);
}
 //Завдання 8 
const headers = document.querySelectorAll('.container header');
for (let i = 0; i < headers.length; i++) {
  const header = headers[i];
  const h1 = header.querySelector('h1');

  // Зміна заголовків
  switch (i) {
    case 0:
      // Залишити h1 без змін
      break;
    case 1:
      h1.outerHTML = '<h2>' + h1.textContent + '</h2>';
      break;
    case 2:
      h1.outerHTML = '<h3>' + h1.textContent + '</h3>';
      break;
    case 3:
      // Зберегти атрибути id та class для h4
      const id = h1.getAttribute('id');
      const classes = h1.getAttribute('class');
      h1.outerHTML = `<h4 id="${id}" class="${classes}">${h1.textContent}</h4>`;
      break;
  }
}


//const classes = ['first', 'second', 'third', 'fourth'];

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    // Отримання тегу заголовка
    const initialTag = header.tagName.toLowerCase();
    header.classList.add(classes[i]);
}

