// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//Create an array:
let magiciansNames = [
    'Harry Porter',
    'David Copperfield',
    'Hermione Granger',
    'Professor Albus Dumbledore',
    'Ron Weasly'
];
//Modifying the array to add 'THE GREAT' to each magician's name: 
let magiciansNamesWithGreat = magiciansNames.map((curVal) => `The great ${curVal}`);
//Printing modified with 'THE GREAT' arrays :
console.log('\n\nModified List of magicians with "THE GREAT":\n');
for (let greatMagiciansName of magiciansNamesWithGreat) {
    console.log(greatMagiciansName);
}
export {};
