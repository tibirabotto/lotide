// FUNCTION IMPLEMENTATION
const head = function(actual, expected) {
    if (actual.length > 0) {
        return actual.indexOf(expected)
    } else {
        return undefined
    }
    
};

// TEST CODE
console.assert(head([5,6,7], 5) === 0)
console.assert(head(["Hello", "Lighthouse", "Labs"],  "Hello") === 0)
console.assert(head([],  "Hello") === undefined)

