// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

//Declaration of function:
function cars(Manufacturer: string, Model: string, ...propertiesAndFeatures: [string, any][]): any {
    let carsProperties: any = {
        Manufacturer,
        Model
    }
    for (let [key, value] of propertiesAndFeatures) {
        carsProperties[key] = value;
    }
    return carsProperties;
}
//Invoking function:
let carInformation = cars('Honda', 'Civic', ['Color', 'silver'], ['Displacement', '1996cc'])
console.log(carInformation)

export{};