/* Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together. */
const findingQuotientAndRemainder = (divided, divisor) => {
    let quotient = Math.floor(divided / divisor);
    let remainder = divided % divisor;
    return { quotient, remainder };
};
console.table(findingQuotientAndRemainder(10, 3));
export {};
