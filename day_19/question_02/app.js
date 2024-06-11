/*
Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

We can pick out just the words from a mixed bag of items, creating a list that includes only those words. */
const mixedArray = ["Saad", 1, true, "Maaz", 2, false];
const stringsArray = mixedArray.filter(val => typeof val === "string");
console.log(stringsArray);
export {};
