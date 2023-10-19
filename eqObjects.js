const _ = require('lodash');

const assertEqual = function (actual, expected) {
    if (_.isEqual(actual, expected)) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};


const eqObjects = function (object1, object2) {
    return _.isEqual(object1, object2);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true)
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false)