/* Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you! */
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
const addSix = makeAdder(6);
console.log(addSix(12));
export {};
