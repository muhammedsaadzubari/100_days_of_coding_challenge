/* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable. */

function calculateAreaSimpleFunction(width: number, height: number): number {
    return width * height;   
}

let calculateAreaArrowFunction = (width: number, height: number) => width * height;

console.log(calculateAreaSimpleFunction(5, 10));
console.log(calculateAreaArrowFunction(5, 10));