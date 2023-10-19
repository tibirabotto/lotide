const _ = require('lodash');

const assertArraysEqual = function (actual, expected) {
    if (_.isEqual(actual, expected)) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const countLetters = (str) => {
    const results = {}
    for (s of str) {
        if (results[s]) {
            results[s] += 1
        } else {
            results[s] = 1
        }

    }

    return results;
}

const result = countLetters("LHL");
assertArraysEqual(result["L"], 2)
assertArraysEqual(result["H"], 1)
