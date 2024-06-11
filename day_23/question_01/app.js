/* Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

JavaScript allows arithmetic operations between mixed types. When you add a number to a string that looks like a number, JavaScript converts the string to a number for the operation. */
const addNumberAndString = (number, numberString) => {
    return number + Number(numberString);
};
console.log(addNumberAndString(3, '4'));
export {};
