const assert = require("assert");

const exercise = require("../exercises/1");

describe("Exercise 1", () => {
  it("returns 'Kyle'", done => {
    exercise().then(result => {
      assert.equal(result, "Kyle");
      done();
    }).catch(done);
  });
});
