// Find the number 

// 1. an array of integers arr denoting the elements in the array 
// 2. an integer, k, denoting the element to be searched in the array


function findNumber(arr, k) {
    for (let i=0; i<arr.length; i++) {
    if (arr[i] === k) {
        return "YES"
    }
}
    return "NO"
}