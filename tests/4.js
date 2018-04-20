const assert = require("assert");

const exercise = require("../exercises/4");

describe("Exercise 4", () => {
  it("returns object of 'minions'", done => {
    exercise().then(result => {
      assert.deepEqual(result, {
        "righthandWoman": "Kim",
        "leadInstructors": ["Brooks", "Chad", "Dan"],
        "associateInstructors": ["Peter", "Matt", "Schultz"],
        "residentInstructors": ["Casey", "Lizz", "The Mann"]
      });
      done();
    }).catch(done);
  });
});
