// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//Create an array:
let magiciansNames = [
    'Harry Porter',
    'David Copperfield',
    'Hermione Granger',
    'Professor Albus Dumbledore',
    'Ron Weasly'
];
//Declaring function:
function show_magicians(magicianNames) {
    for (let magiciansName of magicianNames) {
        console.log(magiciansName);
    }
}
//Invoking function:
show_magicians(magiciansNames);
export {};
