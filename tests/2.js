const assert = require("assert");

const exercise = require("../exercises/2");

describe("Exercise 2", () => {
  it("returns 'Faculty Director'", done => {
    exercise().then(result => {
      assert.equal(result, "Faculty Director");
      done();
    }).catch(done);
  });
});
