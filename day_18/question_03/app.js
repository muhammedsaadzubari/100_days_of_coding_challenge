/* Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information. */
function createObjectWithDynamicKeys(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKeys("theme", "dark");
console.log(userPreference);
export {};
