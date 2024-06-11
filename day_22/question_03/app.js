/* Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once. */
const checkBothTrue = (val1, val2) => {
    return val1 && val2;
};
console.log(checkBothTrue(true, false));
export {};
