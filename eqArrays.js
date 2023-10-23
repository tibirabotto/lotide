var assertEqual = require('assert');
var _ = require("lodash");


const eqArrays = (arr1, arr2) => {
    return _.isEqual(arr1, arr2);
}


console.log(eqArrays([1, 2, 3], [1, 2, 3]))// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual.equal(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual.equal(eqArrays([1, 2, 3], [3, 2, 1]), false)

assertEqual.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
assertEqual.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)


module.exports = eqArrays;


