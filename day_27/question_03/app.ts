// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

// You can loop through each property of an object using a for...in loop. This is useful for when you need to examine or display all the information an object holds

type Obj = {
    [key: string]: any;
}
function logObjectProperties(obj: Obj) {
    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

let object = {name: "Saad", age: 14, gender: "Male"}
logObjectProperties(object);