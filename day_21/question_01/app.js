/* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand. */
var VehiclesType;
(function (VehiclesType) {
    VehiclesType[VehiclesType["Cars"] = 0] = "Cars";
    VehiclesType[VehiclesType["Truck"] = 1] = "Truck";
    VehiclesType[VehiclesType["Motorcycles"] = 2] = "Motorcycles";
})(VehiclesType || (VehiclesType = {}));
console.log(VehiclesType.Cars);
export {};
