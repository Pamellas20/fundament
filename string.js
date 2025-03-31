// a. capitalize(str) - Capitalizes the first letter of a string
function capitalize(str) {
    if (!str || str.length === 0) return str;
    return str[0].toUpperCase() + str.substring(1);
}

// b. reverse(str) - Reverses a given string
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// c. isPalindrome(str) - Checks if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// d. wordCount(str) - Counts the number of words in a string
function wordCount(str) {
    if (!str || str.trim().length === 0) return 0;

    let count = 0;
    let inWord = false;

    for (let i = 0; i < str.length; i++) {
        // Check if current character is a word character
        const isWordChar = /[a-zA-Z0-9]/.test(str[i]);

        // If entering a new word
        if (!inWord && isWordChar) {
            count++;
            inWord = true;
        }
        // If leaving a word
        else if (inWord && !isWordChar) {
            inWord = false;
        }
    }

    return count;
}

// e. toSnakeCase(str) - Converts a string to snake_case
function toSnakeCase(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If it's a space, replace with underscore
        if (char === ' ' || char === '-') {
            result += '_';
        }
        // If it's uppercase, convert to lowercase and add underscore if needed
        else if (char === char.toUpperCase() && char !== char.toLowerCase() && i > 0) {
            result += '_' + char.toLowerCase();
        }
        // Otherwise just add the lowercase character
        else {
            result += char.toLowerCase();
        }
    }

    return result;
}

// f. toCamelCase(str) - Converts a string to camelCase
function toCamelCase(str) {
    let result = '';
    let capitalizeNext = false;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If it's a space, hyphen, or underscore, prepare to capitalize next char
        if (char === ' ' || char === '-' || char === '_') {
            capitalizeNext = true;
        }
        // If we need to capitalize this character
        else if (capitalizeNext) {
            result += char.toUpperCase();
            capitalizeNext = false;
        }
        // If it's the first character, make it lowercase
        else if (i === 0) {
            result += char.toLowerCase();
        }
        // Otherwise just add the character
        else {
            result += char;
        }
    }

    return result;
}

// g. longestWord(str) - Finds the longest word in a string
function longestWord(str) {
    let currentWord = '';
    let longestWord = '';

    for (let i = 0; i <= str.length; i++) {
        // If we're at the end of the string or the character is a space
        if (i === str.length || /\s/.test(str[i])) {
            // Check if current word is longer than our longest word
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = '';
        } else {
            currentWord += str[i];
        }
    }

    return longestWord;
}

// h. countLetter(str, letter) - Counts occurrences of a letter in a string
function countLetter(str, letter) {
    let count = 0;
    const lowerLetter = letter.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === lowerLetter) {
            count++;
        }
    }

    return count;
}

// ----- TESTING THE FUNCTIONS -----

// Test cases for string transformations
console.log("--- String Transformations ---");
console.log(`capitalize('hello'): ${capitalize('hello')}`);
console.log(`reverse('javascript'): ${reverse('javascript')}`);
console.log(`isPalindrome('radar'): ${isPalindrome('radar')}`);
console.log(`isPalindrome('hello'): ${isPalindrome('hello')}`);
console.log(`wordCount('This is a test sentence'): ${wordCount('This is a test sentence')}`);
console.log(`toSnakeCase('helloWorld'): ${toSnakeCase('helloWorld')}`);
console.log(`toCamelCase('hello_world'): ${toCamelCase('hello_world')}`);
console.log(`longestWord('The quick brown fox jumped'): ${longestWord('The quick brown fox jumped')}`);
console.log(`countLetter('Mississippi', 's'): ${countLetter('Mississippi', 's')}`);