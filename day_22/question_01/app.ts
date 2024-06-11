/* Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.
*/

function combineStringAndNumber(text: string, number:number): string {
    return text + number;
}

console.log(combineStringAndNumber("Age: ", 30));