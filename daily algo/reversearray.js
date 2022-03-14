// Example

// Return a=[1, 2, 3] to [3, 2, 1]

// Function Description

// Complete the function reverseArray in the editor below.

// reverseArray has the following parameter(s):

// int A[n]: the array to reverse
// Returns

// int[n]: the reversed array

function reverseArray(a) {
    return a.reverse()
}

function reverseArray(a) {
    
    let newArr = [];
    
    for(let i = a.length - 1; i >= 0; i--){
        newArr.push(a[i]);
    }
    
    return newArr;

}

