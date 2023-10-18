var assertArraysEqual = require('assert');
var _ = require("lodash");


const without = (arr1, arr2) => {
    const val = arr2[0]
    let result = []
    for (let arr of arr1) {
        if (arr !== val) {
            result.push(arr)
        }
    }
    return result
}


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(_.isEqual(without(words, ["lighthouse"]), ["hello", "world"]))