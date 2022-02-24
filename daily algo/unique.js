// const garrett = {
//     "personality": 10, 
//     "smokes": "weed", 
// }

// garrett.smokes = "cigs"
// console.log(garrett)

const someArray = [1, 1, 1, 2, 4, 9, 8]

const getUnique = (array) => (
    array.filter((current, index, arr) => (
        arr.indexOf(currentElement) === index
    ))
);

// getUnique(someArray)

// const getUnique = (array) => (
//     array.reduce((acc, currentValue) => (
//         acc.includes(currentValue) ? acc : [...acc, currentValue]  
//     ),[])
// );

const getUnique = (array) => (
    [...new Set(array)]
);

let a = [1, 2, 5, 2, 1, 8]

object = {};
for (let i of a) {
  obj[i] = true;
}
let b = Objects.keys(obj);

console.log(obj)

console.log([...new Set(a)])



