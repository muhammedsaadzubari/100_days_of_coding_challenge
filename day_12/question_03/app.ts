// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

//Declare an object:
let size_text: {
    size: string,
    text: string
}

//Make an empty array:
let arrayOfSizeText: Array<typeof size_text> = [];

//Declare a function:
let make_shirt = (size: string, text: string): void => {
    console.log(`Size: ${size} , Text: ${text}`);
}

//Assigning value to array:
arrayOfSizeText.push(size_text = { size: 'small (S)', text: 'I love Typescript!' })
arrayOfSizeText.push(size_text = { size: 'medium (M)', text: 'I love Typescript!' })
arrayOfSizeText.push(size_text = { size: 'large (L)', text: 'I love Typescript!' })
arrayOfSizeText.push(size_text = { size: 'extra large (XL)', text: 'I love Typescript!' })
arrayOfSizeText.push(size_text = { size: 'double extra large (XXL)', text: 'I love Typescript!' })


//Invoking function:
for (let i in arrayOfSizeText) {
    make_shirt(arrayOfSizeText[i].size, arrayOfSizeText[i].text)
}


for (let i = 0; i < arrayOfSizeText.length; i++) {
    make_shirt(arrayOfSizeText[i].size, arrayOfSizeText[i].text)
}