// Updating Object Properties: Add a property named `color` to the existing car object, and then update the `year` property to `2021`. Show how to perform these operations.

// You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed

type Obj = {
    [property: string]: any
}
let car: Obj = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.color = "blue";
car.year = 2021;

console.table(car);