const _ = require('lodash');

const eqArrays = function (actual, expected) {
    if (_.isEqual(actual, expected)) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  }


eqArrays(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])// => true