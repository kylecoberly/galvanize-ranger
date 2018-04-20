const assert = require("assert");

const exercise = require("../exercises/5");

describe("Exercise 5", () => {
  it("returns 'Kim'", done => {
    exercise().then(result => {
      assert.equal(result, "Kim");
      done();
    }).catch(done);
  });
});
