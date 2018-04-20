const assert = require("assert");

const exercise = require("../exercises/8");

describe("Exercise 8", () => {
  it("returns 'Matt'", done => {
    exercise().then(result => {
      assert.equal(result, "Matt");
      done();
    }).catch(done);
  });
});
