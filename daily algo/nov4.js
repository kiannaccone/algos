// Given a string of random length (e.g. "abcd"), write a function that will return an array of pairs of the string's characters (e.g. ["ab", "cd"]) If the final character has no companion (e.g. "abcde"), then add “_” to complete the pair (e.g. ["ab", "cd", "e_"]).
// Example 1:
// Input: "abcd"
// Output: ["ab","cd"]
// Example 2:
// Input: "a2c4e"
// Output: ["a2","c4","e_"]
// Example 3:
// Input: "a"
// Output: ["a_"]
// Example 4:
// Input: "ab_"
// Output: ["ab", "__"]
// Example 5:
// Input: ""
// Output: []
// Instructions:
// Rewrite the problem in your own words
// Write Your Own Test Cases
// Pseudocode
// Code
// Make It Clean and Readable
// Optimize


// function pairs(string) {
//     let arrayOfPairs = []
//     let splitted = string.split("")
//     if (splitted.length % 2 !== 0) {
//         splitted.push("_")
//     }
//     let i = 0
//     while (i < splitted.length) {
//         let pairing = splitted[i] + splitted[i + 1]
//         arrayOfPairs.push(pairing)
//         i += 2
//     }
//     return arrayOfPairs
// }