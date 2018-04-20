const assert = require("assert");

const exercise = require("../exercises/3");

describe("Exercise 3", () => {
  it("returns ['Coding', 'Singing', 'Dancing', 'Drinking beer']", done => {
    exercise().then(result => {
      assert.deepEqual(result, ['Coding', 'Singing', 'Dancing', 'Drinking beer']);
      done();
    }).catch(done);
  });
});
