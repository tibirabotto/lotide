var _ = require("lodash");

var assertEqual = require('assert');

const flatten = (arr) => {
    return _.flatten(arr)
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))