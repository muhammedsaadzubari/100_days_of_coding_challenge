// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
// The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.
const convertCases = (str) => {
    let upperCase = str.toUpperCase();
    let lowerCase = str.toLowerCase();
    console.log(`Lowercase: ${lowerCase} and Uppercase: ${upperCase}`);
};
convertCases("Hello World!");
export {};
