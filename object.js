// a. fullName(person) - Returns full name from person object
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

// b. isAdult(person) - Checks if a person is 18 or older
function isAdult(person) {
    return person.age >= 18;
}

// c. filterByAge(people, minAge) - Filters array of people by minimum age
function filterByAge(people, minAge) {
    const result = [];

    for (let i = 0; i < people.length; i++) {
        if (people[i].age >= minAge) {
            result.push(people[i]);
        }
    }

    return result;
}

// d. addProperty(obj, key, value) - Adds a new property to an object
function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}

// e. hasProperty(obj, key) - Checks if an object has a specific property
function hasProperty(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

// f. countProperties(obj) - Returns the number of properties in an object
function countProperties(obj) {
    let count = 0;

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            count++;
        }
    }

    return count;
}

// Test cases for object transformations
console.log("\n--- Object Transformations ---");
const person = { firstName: 'John', lastName: 'Doe', age: 25 };
console.log(`fullName(person): ${fullName(person)}`);
console.log(`isAdult(person): ${isAdult(person)}`);

const people = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Smith', age: 17 },
    { firstName: 'Bob', lastName: 'Johnson', age: 32 }
];
console.log(`filterByAge(people, 18): ${JSON.stringify(filterByAge(people, 18))}`);

const newObj = {};
console.log(`addProperty(newObj, 'name', 'value'): ${JSON.stringify(addProperty(newObj, 'name', 'value'))}`);
console.log(`hasProperty(newObj, 'name'): ${hasProperty(newObj, 'name')}`);
console.log(`countProperties(person): ${countProperties(person)}`);
