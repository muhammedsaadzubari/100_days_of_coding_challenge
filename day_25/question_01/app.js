/*
Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs. */
const updateVariable = () => {
    let string = "A";
    console.log(`Initial value: ${string}`);
    let updatedString = "B";
    console.log(`Updated value: ${updatedString}`);
};
updateVariable();
export {};
