// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//Declaration of a function:
function bakeSandwich(...ingredients) {
    console.log("Sandwich summary:");
    if (ingredients.length === 0) {
        console.log('You have ordered a sandwich without ingredients.');
    }
    else {
        ingredients.forEach((ingredient, index) => {
            console.log(`${index + 1}> ${ingredient}`);
        });
    }
    console.log('\n');
}
//Invoking Function:
bakeSandwich();
bakeSandwich('Bread', 'Tomato', 'Ketchup', 'Mayonesee', 'Chicken');
bakeSandwich('Bread', 'Butter');
bakeSandwich('Bread', 'Omelette', 'Tomato');
export {};
