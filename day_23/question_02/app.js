/* Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable. */
const multiplyDecimals = (dec1, dec2) => {
    return Number((dec1 * dec2).toFixed(2));
};
console.log(multiplyDecimals(0.1, 0.2));
export {};
