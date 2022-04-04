// given two integers l and r print all the odd numbers btw l and r (l and r inclusive)



function oddNumbers(l, r) {
    let arr = []
    for (let i=l; i <= r; i++) {
        arr.push([i])
    }
    return arr.filter(n => n % 2)  
}