const _ = require('lodash');

const assertArraysEqual = function (actual, expected) {
    if (_.isEqual(actual, expected)) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const letterPositions = function (sentence) {
    const results = {};
    let idx = 0
    for (letter of sentence) {
        if (letter !== ' '){
            if (results[letter]) {
                results[letter].push(idx);
    
            } else {
                results[letter] = [idx];
            }
            
        }
        idx++
    }
    return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
