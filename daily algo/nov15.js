// //Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
// pigIt('O red .');     // Oay edray .
// pigIt('As soon as you do !');     // sAay oonsay saay ouyay oday !
// pigIt('u coming ?');     // uay omingcay ?

// //Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// function pigIt(str){
//     let splitter = str.split(" ")
//     let words = [] 
    
//     for (let i = 0; i < splitter.length; i++){
//         if(splitter[i].includes("!") || splitter[i].includes(".") || splitter[i].includes("?")){
//             words.push(splitter[i])
//         } else {
//      let firstLetter = splitter[i][0] 
//      let lastLetter = splitter[i].slice(1, -1) + splitter[i].slice(-1)
//      let combined = lastLetter + firstLetter + "ay"
//      words.push(combined)
     
//     }}
//     let joiner = words.join(" ")
    
//     return joiner
   
//    }
   
//    console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
//    console.log(pigIt('Hello world !'));     // elloHay orldway !
//    // pigIt('O red .');     // Oay edray .
//    // pigIt('As soon as you do !');     // sAay oonsay saay ouyay oday !
//    // pigIt('u coming ?');     // uay omingcay ?