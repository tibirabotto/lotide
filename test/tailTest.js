const tail = require('../tail');
const assert = require('chai').assert;
describe("#tail", () => {
    it("returns 2 for [Hello, Lighthouse, Labs]", () => {
        const result = tail(["Hello", "Lighthouse", "Labs"]);
        assert.deepEqual(result.length, 2);
    });
});