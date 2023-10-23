
const assertEqual = require('./test/assertEqual');
// FUNCTION IMPLEMENTATION
const head = function(actual) {

    if (actual.length > 0) {       
        return actual[0]
    } else {
        return undefined
    }
    
};

// TEST CODE
assertEqual(head([5,6,7]), 5); 
assertEqual(head(["Hello", "Lighthouse", "Labs"]),  "Hello"); 
assertEqual(head([]),  undefined)

