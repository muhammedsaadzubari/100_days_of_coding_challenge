/* Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes. */

type Shape = {
    kind: "circle" | "rectangle";
    radius?: number;
    width?: number; 
    height?: number;
};

let circle: Shape = {
    kind: "circle",
    radius: 5
};

let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

console.log(circle); 
console.log(rectangle);
