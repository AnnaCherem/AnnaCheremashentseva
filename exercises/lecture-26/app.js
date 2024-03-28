//Завдання 1

// Функція calculate()
function calculate(operation, initialValue, numbers) {
    let accumulator = initialValue;
    for (const number of numbers) {
      accumulator = operation(accumulator, number);
    }
    return accumulator;
  }
  function sum(n1, n2) {
    return n1 + n2;
  }
  function multiply(n1, n2) {
    return n1 * n2;
  }
  console.log(calculate(sum, 0, [1, 2, 4])); // 7 (додавання)
  console.log(calculate(multiply, 1, [1, 2, 4])); // 8 (множення)
  

//Завдання 2

let student_names = ["Wick", "Malcolm", "Smith"];

student_names.map((name, index) => {
  console.log(`name: ${name} | index: ${index} | array: ${student_names}`);
});

//Завдання 3

let students_information = [
    { "name": "Wick", "degree": 375 },
    { "name": "Malcolm", "degree": 405 },
    { "name": "Smith", "degree": 453 },
  ];
  
  const maxDegree = 600;
  
  const studentsWithPercentage = students_information.map((student) => {
    const percentage = (student.degree / maxDegree) * 100;
    return { ...student, percentage: percentage.toFixed(1) };
  });
  
  console.log(studentsWithPercentage);
  

//Завдання 4

const array = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const flatArray = array.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flatArray); // [1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42]

//Завдання 5

function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    Array.prototype.upperCase = function () {
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
      }
    };
  
    arr.upperCase();
    console.log(arr);
  }
  
  myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]
  