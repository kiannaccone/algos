// INSTRUCTIONS (8 kyu)

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    let potato = year / 100
    return Math.ceil(potato)
}

// MORE DRY
// this function is taking in the parameter the year and returns the year  divided by 100 that gives the centry for all evenly divisible numbers & use math.ceil to round up for odd numbers.  

function century(year) {
    return Math.ceil(year/100)
}

console.log(century(1705))
