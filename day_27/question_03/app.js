// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function logObjectProperties(obj) {
    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}
let object = { name: "Saad", age: 14, gender: "Male" };
logObjectProperties(object);
export {};
