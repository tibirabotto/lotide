var assertEqual = require('assert');
var _ = require("lodash");


const eqArrays = (arr1, arr2) => {
    console.log(_.isEqual(arr1, arr2))
}


eqArrays([1, 2, 3], [1, 2, 3])// => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


