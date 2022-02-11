// Given an integer x, return x with its digits reversed.
// Example 1:
// Input: x = 123
// Output: 321
// Example 2:
// Input: x = -123
// Output: -321
// Example 3:
// Input: x = 120
// Output: 21
// Example 4:
// Input: x = 0
// Output: 0

// Rewrite the problem in your own words
// Write Your Own Test Cases
// Pseudocode
// Code
// Make It Clean and Readable
// Optimize

// function reverseInteger(num) {
//     if (num >= 0) {
//         let numberString = num.toString()
//         let numberStringArray = numberString.split("")
//         let reverseNumberStringArray = []
//             for (let i = 0; i < numberStringArray.length; i++) {
//             reverseNumberStringArray.unshift(numberStringArray[i])
//             }
//         let reverseNumberString = reverseNumberStringArray.join("")
//         let reverseNumber = parseInt(reverseNumberString)
//         return reverseNumber
//     } else if (num < 0){
//         let positiveNum = num * -1
//         let numberString = positiveNum.toString()
//         let numberStringArray = numberString.split("")
//         let reverseNumberStringArray = []
//             for (let i = 0; i < numberStringArray.length; i++) {
//             reverseNumberStringArray.unshift(numberStringArray[i])
//             }
//         reverseNumberStringArray.unshift("-")
//         let reverseNumberString = reverseNumberStringArray.join("")
//         let reverseNumber = parseInt(reverseNumberString)
//         return reverseNumber
//     }
    
// }

// console.log(reverseInteger(222))
// console.log("expect: 222")

// console.log(reverseInteger(000))
// console.log("expect: 0")

// console.log(reverseInteger(123))
// console.log("expect: 321")

// console.log(reverseInteger(-123))
// console.log("expect: -321")

// console.log(reverseInteger(120))
// console.log("expect: 21")

// console.log(reverseInteger(0))
// console.log("expect: 0")