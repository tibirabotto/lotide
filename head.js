var assertEqual = require('assert');

// FUNCTION IMPLEMENTATION
const head = function(actual) {

    if (actual.length > 0) {       
        return actual[0]
    } else {
        return undefined
    }
    
};

// TEST CODE
assertEqual.equal(head([5,6,7]), 5); 
assertEqual.equal(head(["Hello", "Lighthouse", "Labs"]),  "Hello"); 
assertEqual.equal(head([]),  undefined)

