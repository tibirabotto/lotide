const _ = require('lodash');

const eqArrays = function (actual, expected) {
    if (_.isEqual(actual, expected)) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const result = _.findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2);


eqArrays(result, "noma")