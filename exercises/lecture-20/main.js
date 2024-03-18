// Завдання 1
/*var person1 = {
    name: "Hanna",
    age: 38
};
console.log("Name:", person1.name);
console.log("Age:", person1.age);

// Завдання 2
let person2 = {
    name: {
        firstName: "Hanna",
        lastName: "Cheremashentseva"
    },
    age: 38
};
console.log("First Name:", person2.name.firstName);
console.log("Last Name:", person2.name.lastName);
console.log("Age:", person2.age);

// Завдання 3
const person3 = {
    name: {
        firstName: "Hanna",
        lastName: "Cheremashentseva"
    },
    age: 38,
    bio: function() {
        console.log("First Name:", this.name.firstName);
        console.log("Last Name:", this.name.lastName);
        console.log("Age:", this.age);
    }
};
person3.bio();*/





// Завдання 1,2,3 об'єднані послідовно (наче такий варіант краще)

// Створення об'єкту person з властивостями name та age
let person = {
    name: "Hanna",
    age: 38 
};
console.log("Name:", person.name);
console.log("Age:", person.age);

// Зміна типу властивості name на об'єкт firstName та lastName
person.name = {
    firstName: "Hanna",
    lastName: "Cheremashentseva"
}
console.log("First Name:", person.name.firstName);
console.log("Last Name:", person.name.lastName);

// Додавання методу bio до об'єкту person
person.bio = function() {
    console.log("First Name:", this.name.firstName);
    console.log("Last Name:", this.name.lastName);
    console.log("Age:", this.age);
};

// Завдання 4
// Додавання методу introduceSelf до об'єкту person
person.introduceSelf = function() { // привітання
    console.log("Hi! I'm", this.name.firstName);
};

// Виклик методу introduceSelf для об'єкту person
person.introduceSelf();
person.bio();

 //Завдання 5 
 function createPerson(name) {
    return {
        name: name,
        introduceSelf: function() { // привітання
            console.log("Hi! I'm", this.name);
        }
    };
}
// Створення 1 екземпляру 
let person1 = createPerson("Hanna");
person1.introduceSelf();

// Створення 2 екземпляру об'єкта
let person2 = createPerson("Denys");
person2.introduceSelf();
 
// Завдання 6
function Person(name) {
    this.name = name; // Властивість з ім'ям
    this.introduceSelf = function() { // привітання
        console.log("Hi! I'm", this.name);
    };
}

// Створення екземпляру об'єкта mary 
let mary = new Person("Mary");
mary.introduceSelf(); // виклик методу introduceSelf

// Створення екземпляру об'єкта tom
let tom = new Person("Tom");

tom.introduceSelf(); // виклик методу introduceSelf

// Перевірка, чи містить об'єкт mary властивість prop
let hasProp = 'prop' in mary;

// Виводить не знайдена в об'єкті mary
console.log( 'Властивість prop', hasProp ? 'знайдена в об\'єкті mary' : 'не знайдена в об\'єкті mary');

console.log( hasProp ) // виводить false

// Завдання 7
let DirtyMartini = {
    english_please: function() {
        console.log(`
      ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives`);
    },
    excuse_my_french: function() {
        let gin_ml = 6 * 28.4131; // переводимо у мл
        let vermouth_ml = 1 * 1; // приблизно 1 мл
        let brine_ml = 1 * 28.4131; // переводимо у мл
        console.log(`
      ingrédients:  
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies`);
    }
};

// Виклик методу english_please()
DirtyMartini.english_please();

// Виклик методу excuse_my_french()
DirtyMartini.excuse_my_french();

