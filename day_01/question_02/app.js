// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let nameOfStudent = "muhAmmed sAad";
// Step 1 Store in Lower case:
const inLowerCase = nameOfStudent.toLowerCase();
// Step 2 Store in Upper case:
let inUpperCase = nameOfStudent.toUpperCase();
// Step 3 Store in Title case:
let splitName = nameOfStudent.split(" ");
let inTitleCase = "";
for (let i = 0; i < splitName.length; i++) {
    inTitleCase += splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1).toLowerCase() + " ";
}
;
// Print All Cases: 
console.log(inLowerCase);
console.log(inUpperCase);
console.log(inTitleCase);
export {};
