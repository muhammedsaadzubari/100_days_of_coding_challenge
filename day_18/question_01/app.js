/* Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly. */
let smartphone = {
    make: 'samsung',
    model: 'Galaxy S21',
    spec: {
        storage: '128 GB',
        screenSize: '6.2 inches',
        batteryLife: '18 hours'
    }
};
console.log(smartphone);
export {};
