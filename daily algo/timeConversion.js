// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

function timeConversion(s) {
    let input = s.split(':');
    let hours = parseInt(input[0]);
    let timeFrame = input[2].slice(2);
    let seconds = input[2].slice(0,2);
    if ((timeFrame === 'PM') && (hours !== 12)) {
        hours += 12;
    }
    if ((hours === 12) && (timeFrame === 'AM')) {
        hours = '00';
    } else if (hours < 10) {
        hours = '0' + hours.toString();
    } else {
        hours = hours.toString();
    }
    return ([hours, input[1], seconds].join(':'));

}

const arr = s.slice(0,8).split(':');
arr[0] = (s.indexOf('PM') > -1) ?
         (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
         (arr[0] == 12 ? '00' : arr[0]);
return arr.join(':');

function timeConversion(s) {
    let hours = s.substr(0, 2);
    let minutes = s.substr(3, 2);
    let seconds = s.substr(-4, 2);
    let modifier = s.substr(-2, 2);
    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    let time = `${hours}:${minutes}:${seconds}`;
    return time;

}