// Question: Check to see if the given numbers are Narcissistic Numbers and return true if they are and false if they are not.
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this problem, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// narcissistic(153) // Should return true
// narcissistic(1652) // Should return false

// Instructions:
// Rewrite the problem in your own words
// Write Your Own Test Cases
// Pseudocode
// Code
// Make It Clean and Readable
// Optimize

// //sudo code
// // Take given numbers and find power of each number based off number of digits in total number
// // add the sum of those powers together
// // if sum is equal to original number = true
// // if sum is not equal to original number = false
// function narcissistic(value){
//     let sum = 0
//     let splitter = value.toString().split("")
//     for (let i = 0; i < splitter.length; i++ ) {
//         sum += (parseInt(splitter[i]) ** splitter.length)
//     }
//     if (
//         sum === value
//     ){
//         return true
//     }
//         else{
//            return false
//         }
// }
// console.log (narcissistic(1652))
// narcissistic(153) // Should return true
// narcissistic(1652) // Should return false