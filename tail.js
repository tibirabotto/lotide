var assertEqual = require('assert');
var _ = require("lodash");

// FUNCTION IMPLEMENTATION
const tail = function(actual) {

    return _.tail(actual);
    
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual.equal(result.length, 2); 

module.exports = tail;
