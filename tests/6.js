const assert = require("assert");

const exercise = require("../exercises/6");

describe("Exercise 6", () => {
  it("returns ['Brooks', 'Chad', 'Dan']", done => {
    exercise().then(result => {
      assert.deepEqual(result, ["Brooks", "Chad", "Dan"]);
      done();
    }).catch(done);
  });
});
