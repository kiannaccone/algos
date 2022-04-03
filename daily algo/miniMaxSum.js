// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Hints: Beware of integer overflow! Use 64-bit Integer.

function miniMaxSum(arr) {
    let min=(Math.min(...arr))
    let max=(Math.max(...arr))

    const initialValue = 0;
    const minAnswer = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
   const maxAnswer = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

    console.log(minAnswer - max, maxAnswer - min)

}

function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => {
      return a + b;
    });
    const min = sum - Math.max(...arr);
    const max = sum - Math.min(...arr);
    console.log(min + " " + max);
  }

  function miniMaxSum(arr) {
    let sortedArray = arr.sort((a, b) => a-b);
    let minimum = sortedArray.slice(0, sortedArray.length -1).reduce((a, b) => a+b);
    let maximum = sortedArray.slice(1).reduce((a, b) => a+b);
    console.log(minimum, maximum)
    }
// 
    let data = [1, 3, 2, 4, 5];

    // sort first
    data = data.sort();
      
    // to get the sets only
    let maxSet = data.slice(1);
    let minSet = data.slice(0, -1);
    
    console.log(minSet, maxSet);
    
    // to get just the max/min value
    const sum = data.reduce((a, total) => a + total, 0);
    console.log(sum - data[data.length - 1], sum - data[0]);   