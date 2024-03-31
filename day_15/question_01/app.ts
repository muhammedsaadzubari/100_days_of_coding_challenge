// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//Create an array:
let magiciansNames: string[] = [
    'Harry Porter',
    'David Copperfield',
    'Hermione Granger',
    'Professor Albus Dumbledore',
    'Ron Weasly'
];

//Declaring function:
function show_magicians(magicianNames: string[]): void {
    for (let magiciansName of magicianNames) {
        console.log(magiciansName);
    }
}

function make_great(magicianNames: string[]): string[] {
    let greatMagicians: string[] = magicianNames.map((curVal) => `The great ${curVal}`);
    return greatMagicians;
}

//Modifying the array to add 'THE GREAT' to each magician's name: 
let magiciansNamesWithGreat: string[] = make_great(magiciansNames);

//Invoking function to print original array:
console.log('Original List of magicians:\n');
show_magicians(magiciansNames);

//Invoking function to print modified with 'THE GREAT' array:
console.log('\n\nModified List of magicians with "THE GREAT":\n');
show_magicians(magiciansNamesWithGreat);

export{};