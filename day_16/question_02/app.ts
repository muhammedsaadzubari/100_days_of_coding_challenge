/* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures. */

let laptops = [
    {make: 'Lenovo', model: 'ThinkPad E16', year: 2024},
    {make: 'Apple', model: 'MacBook Air', year: 2024},
    {make: 'HP', model: 'Spectre x360', year: 2024},
]

let [laptop1, laptop2] = laptops
console.log(laptop1);
console.log(laptop2);
