// capitalize(str) - Capitalizes the first letter of a string
function capitalize(str) {
    if (!str || str.length === 0) return str;
    return str[0].toUpperCase() + str.substring(1);
}

// reverse(str) - Reverses a given string
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}


// Compose function to combine functions
function compose(...fns) {
    return function (x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    };
}

// a. Example 1: Reverse and capitalize a string
const reverseAndCapitalize = compose(capitalize, reverse);

// a. Example 2: Double all even numbers in an array
function doubleEven(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i] * 2);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

// b. Transform an array of students (add status based on grade)
function addStudentStatus(students) {
    const result = [];

    for (let i = 0; i < students.length; i++) {
        const student = { ...students[i] };
        student.status = student.grade > 50 ? "Pass" : "Fail";
        result.push(student);
    }

    return result;
}

// c. Sort array of objects by key
function sortByKey(arr, key) {
    // Simple bubble sort implementation
    const result = [...arr];

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j][key] > result[j + 1][key]) {
                // Swap elements
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}

// d. Filter products by category
function filterByCategory(products, category) {
    const result = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].category === category) {
            result.push(products[i]);
        }
    }

    return result;
}

// e. Simple caching function
function createCache(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (!cache[key]) {
            cache[key] = fn(...args);
        }

        return cache[key];
    };
}

// Example of using the cache with an expensive calculation
const cachedSum = createCache(sum);

// Test cases for function composition & higher-order functions
console.log("\n--- Function Composition & Higher-Order Functions ---");
console.log(`reverseAndCapitalize('javascript'): ${reverseAndCapitalize('javascript')}`);
console.log(`doubleEven([1, 2, 3, 4, 5]): ${doubleEven([1, 2, 3, 4, 5])}`);

const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 42 },
    { name: 'Charlie', grade: 70 }
];
console.log(`addStudentStatus(students): ${JSON.stringify(addStudentStatus(students))}`);

const peopleForSort = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 19 },
    { name: 'Charlie', age: 32 }
];
console.log(`sortByKey(peopleForSort, 'age'): ${JSON.stringify(sortByKey(peopleForSort, 'age'))}`);

const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Phone', category: 'Electronics' }
];
console.log(`filterByCategory(products, 'Electronics'): ${JSON.stringify(filterByCategory(products, 'Electronics'))}`);

// Test caching function
console.log(`cachedSum([1, 2, 3, 4, 5]) first call: ${cachedSum([1, 2, 3, 4, 5])}`);
console.log(`cachedSum([1, 2, 3, 4, 5]) second call (should be cached): ${cachedSum([1, 2, 3, 4, 5])}`);