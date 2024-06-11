/* Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully. */

let printHobbies = (...hobbies: string[]) => (hobbies.forEach((val) => (console.log(`I enjoy ${val}.`))));
printHobbies('Learning', 'Coding', 'Cycling');