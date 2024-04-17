

const url = "https://jsonplaceholder.typicode.com/posts";
const template = (item) => `
    <h3>${item.title}</h3>
    <div>${item.body}</div>
    <p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(posts => {
    let result = '';
    posts.forEach(item => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;

    const authorElements = document.querySelectorAll('.author');
    authorElements.forEach(authorElement => {
      const userId = authorElement.getAttribute("data-id");
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(user => {
          authorElement.textContent = user.name;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
