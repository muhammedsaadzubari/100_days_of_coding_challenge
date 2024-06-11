// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string.It should return true if found, otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).

const hasJavascript = (str: string): boolean => {
    return str.includes("Javascript");
};

console.log(hasJavascript("Javascript is the only programming language that runs on browsers!"))
console.log(hasJavascript("It is the most used programming language!"))