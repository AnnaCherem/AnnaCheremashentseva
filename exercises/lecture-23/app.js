
const alertElement = document.querySelector('.alert');
//Завдання 1 (помилка в умові 'до елемента з id = alert' ,цього id не має в умові )

const button = document.querySelector('.btn-primary');

button.onclick = function() {
 alertElement.classList.add('alert-primary');
  alertElement.textContent = 'A simple primary alert—check it out!';
};

//Завдання 2
const alertElement2 = document.getElementById('alert'); // змінено на відповідний ідентифікатор

const secondaryButton = document.querySelector('.btn-secondary');

secondaryButton.addEventListener('click', function() {
  alertElement.classList.add('alert-primary');
  alertElement.textContent = 'A simple secondary alert—check it out!';
});

//Завдання 3

const successButton = document.querySelector('.btn-success');
// Додаємо"mouseover"
successButton.addEventListener('mouseover', function() {
  alertElement.classList.add('alert-success');
  alertElement.textContent = 'A simple success alert—check it out!';
});
// Додаємо"mouseout"
successButton.addEventListener('mouseout', function() {
  alertElement.classList.remove('alert-success');
  alertElement.textContent = '';
});

//Завдання 3

const dangerButton = document.querySelector('.btn-danger');

// Додаємо "focus"
dangerButton.addEventListener('focus', function() {
  alertElement.classList.add('alert-danger');
  alertElement.textContent = 'A simple danger alert—check it out!';
});

// Додаємо "focusout"
dangerButton.addEventListener('focusout', function() {
  alertElement.classList.remove('alert-danger');
  alertElement.textContent = '';
});


//Завдання 5

function toggleMode() {
  const body = document.body;
  const darkButton = document.querySelector('.btn-dark');
  const lightButton = document.querySelector('.btn-light');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    darkButton.style.display = 'none';
    lightButton.style.display = 'block';
  } else {
    darkButton.style.display = 'block';
    lightButton.style.display = 'none';
  }
}

const darkButton = document.querySelector('.btn-dark');
const lightButton = document.querySelector('.btn-light');

darkButton.addEventListener('click', toggleMode);
lightButton.addEventListener('click', toggleMode);

//Завдання 6

const infoButton = document.querySelector('.btn-info');

infoButton.addEventListener('keypress', function(event) {
  // Перевіряємо, чи натиснута клавіша Enter
  if (event.key === 'Enter') {
    // Скасувати
    event.preventDefault();
    
    // Додати CSS-клас alert-info до елемента з id = alert
    alertElement.classList.add('alert-info');
    
    // Змінити текст
    alertElement.textContent = 'A simple info alert—check it out!';
  }
});

//Завдання 7

const cardElements = document.querySelectorAll('.card');

for (let i = 0; i < cardElements.length; i++) {
  const cardTitle = cardElements[i].querySelector('.card-title');
  console.log(cardTitle.textContent);
}

//Завдання 8

for (let i = 0; i < cardElements.length; i++) {
  const cardTitle = cardElements[i].querySelector('.card-title');
  const addToCartButton = cardElements[i].querySelector('.add-to-cart');
  
  addToCartButton.addEventListener('click', function() {
    console.log(cardTitle.textContent);
  });
}
  
// Перевіряю стан
document.addEventListener('readystatechange', function() {
  console.log(document.readyState)
  if (document.readyState === 'interactive') {
   console.log('DOM is ready'); // complete
  }
 });