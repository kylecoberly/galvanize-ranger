const assert = require("assert");

const exercise = require("../exercises/9");

describe("Exercise 9", () => {
  it("returns 'Casey'", done => {
    exercise().then(result => {
      assert.equal(result, "Casey");
      done();
    }).catch(done);
  });
});
