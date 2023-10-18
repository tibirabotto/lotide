var assertArraysEqual = require('assert');
var _ = require("lodash");


const without = (arr1, arr2) => {
    const val = arr2[0]
    return _.without(arr1, val)
}


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
