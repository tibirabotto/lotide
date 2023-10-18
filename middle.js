const _ = require("lodash");

const eqArrays = function(arr1, arr2) {
  if (_.isEqual(arr1, arr2)) {
    return true;
  }

  return false;
};

const assertArraysEqual = function(actual, expected) {
  if (_.isEqual(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  }
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

console.log(eqArrays(middle([1]), []))
console.log(eqArrays(middle([1, 2]), []))
console.log(eqArrays(middle([1, 2, 3]), [2]))
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3]))


assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])