const assert = require("assert");

const exercise = require("../exercises/7");

describe("Exercise 7", () => {
  it("returns 'Dan'", done => {
    exercise().then(result => {
      assert.equal(result, "Dan");
      done();
    }).catch(done);
  });
});
