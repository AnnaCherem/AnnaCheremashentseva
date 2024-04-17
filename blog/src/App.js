import React from 'react';

function App() {
  // Завдання 3
  const jsxElement = <h1>I am a JSX element</h1>;

  // Завдання 4
  const header = (
    <div>
      <h1>Welcome to React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
    </div>
  );

  // Завдання 5
  const jsxFragment = (
    <>
      <h1>Welcome to React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
    </>
  );

  // Завдання 6
  const footer = <p>Copyright &copy; 2024</p>;

  return (
    <div className="App">
      {jsxElement}
      {header}
      {jsxFragment}
      {footer}
    </div>
  );
}

export default App;
