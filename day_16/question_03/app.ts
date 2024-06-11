/* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently. */

let priceSetOne: number[] = [1000, 6000, 4000]
let priceSetTwo: number[] = [3000, 5000, 2000]

let combinedSetOfPrice: number[] = [...priceSetOne, ...priceSetTwo].sort((a, b) => (a - b))

console.log(combinedSetOfPrice);
