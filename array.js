// a. double(arr) - Doubles every number in an array
function double(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }

    return result;
}

// b. filterEven(arr) - Filters out even numbers from an array
function filterEven(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2== 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

// c. sum(arr) - Calculates the sum of all numbers in an array
function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

// d. average(arr) - Calculates the average of all numbers in an array
function average(arr) {
    if (arr.length === 0) return 0;
    return sum(arr) / arr.length;
}

// e. findMax(arr) - Returns the largest number in an array
function findMax(arr) {
    if (arr.length === 0) return undefined;

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// f. findMin(arr) - Returns the smallest number in an array
function findMin(arr) {
    if (arr.length === 0) return undefined;

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

// g. removeDuplicates(arr) - Removes duplicate values from an array
function removeDuplicates(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        // Check if current element already exists in result array
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result.push(arr[i]);
        }
    }

    return result;
}

// h. findIndex(arr, value) - Returns the index of a value in an array
function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
}

// Test cases for array transformations
console.log("\n--- Array Transformations ---");
console.log(`double([1, 2, 3]): ${double([1, 2, 3])}`);
console.log(`filterEven([1, 2, 3, 4, 5]): ${filterEven([1, 2, 3, 4, 5])}`);
console.log(`sum([1, 2, 3, 4, 5]): ${sum([1, 2, 3, 4, 5])}`);
console.log(`average([1, 2, 3, 4, 5]): ${average([1, 2, 3, 4, 5])}`);
console.log(`findMax([5, 9, 2, 6, 3]): ${findMax([5, 9, 2, 6, 3])}`);
console.log(`findMin([5, 9, 2, 6, 3]): ${findMin([5, 9, 2, 6, 3])}`);
console.log(`removeDuplicates([1, 2, 2, 3, 4, 4, 5]): ${removeDuplicates([1, 2, 2, 3, 4, 4, 5])}`);
console.log(`findIndex([10, 20, 30, 40], 30): ${findIndex([10, 20, 30, 40], 30)}`);