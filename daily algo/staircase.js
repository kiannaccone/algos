// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####




function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n))
    }

}