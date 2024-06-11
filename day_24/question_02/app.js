/* Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable. */
let age = 14;
age = 15;
console.log(age);
const name = "Saad";
try {
    //@ts-ignore
    name = "Maaz";
}
catch (error) {
    console.error("Error: Can't reassign a `const`-declared variable.");
}
export {};
