// Given an array of integers, find the sum of its elements.

// For example, if the array , ar=[1,2,3], so return 6.

function simpleArraySum(ar) {
    const initialValue = 0;
    const sumWithInitial = ar.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue)
    {
        return sumWithInitial
    }
}

function simpleArraySum(ar) {
    let sum = 0;
 
    for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
 }
    return sum
}
