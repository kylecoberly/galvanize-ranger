const assert = require("assert");

const exercise = require("../exercises/0");

describe("Sanity check", () => {
    it("prints 'Hello World'", () => {
        assert.equal(exercise(), "Hello world!");
    });
});
