const assert = require("assert");
const { findNumber, findSequence } = require("./index");

const numbers = [
  35,
  20,
  15,
  25,
  47,
  40,
  62,
  55,
  65,
  95,
  102,
  117,
  150,
  182,
  127,
  219,
  299,
  277,
  309,
  576,
];

describe("The algorithm", () => {
  it("works for part 1", () => {
    assert.strictEqual(findNumber(numbers, 5), 127);
  });

  it("works for part 2", () => {
    assert.deepStrictEqual(findSequence(numbers, 127), [15, 25, 47, 40]);
  });
});
