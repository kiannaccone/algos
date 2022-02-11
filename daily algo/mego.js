// Instructions:
// Rewrite the problem in your own words
// Write Your Own Test Cases
// Pseudocode
// Code
// Make It Clean and Readable
// Optimize

// Given
// a, b, c
// assign float values to them and write a function that will sum the values of a, b, and c. Round the number up, and concatenate it with the String: "high fives"

// a = a number that ends in a decimal
// return integer concatenate with string

function howFives () {
    let a = 1.1
    let b = 1.2
    let c = 1.3

    let letters = Math.ceil(a + b + c)

    let fives = letters + "high fives"

    return fives

}

console.log(howFives())