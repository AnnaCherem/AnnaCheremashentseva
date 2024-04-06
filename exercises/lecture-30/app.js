
// Завдання 1

const waitingMessage = document.getElementById('waiting');
const form = document.getElementById('demoForm');

async function waitForInput() {
    try {
        const { firstName, lastName } = await Promise.race([
            new Promise((resolve) => setTimeout(resolve, 10000)), // чекаємо 10 секунд
            new Promise((resolve) => {
                form.addEventListener('submit', (event) => {
                    event.preventDefault(); // зупиняємо стандартну відправку форми
                    const formData = new FormData(event.target);
                    const firstName = formData.get('firstName');
                    const lastName = formData.get('lastName');
                    resolve({ firstName, lastName });
                });
            })
        ]);

        if (!firstName && !lastName) {
            waitingMessage.textContent = "I'm miss You";
        } else {
            waitingMessage.textContent = `Hello ${firstName} ${lastName}!`;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

waitForInput();


//Завдання 2

const xhr = new XMLHttpRequest();

// Відкриття запиту
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// Надсилання запиту
xhr.send();

// Обробка відповіді
xhr.onload = function() {
  if (xhr.status === 200) {

    const posts = JSON.parse(xhr.responseText);

    
    const postsHtml = posts.map(post => template(post)).join('');

    
    document.getElementById('demo').innerHTML = postsHtml;
  } else {
    console.error('Помилка при завантаженні даних:', xhr.statusText);
  }
};

const template = (post) => `
  <h3>${post.title}</h3>
  <div>${post.body}</div>
`;
