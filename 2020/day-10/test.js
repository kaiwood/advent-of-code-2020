const assert = require("assert");
const { part1, part2 } = require("./index");

const adapters = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];

const moreAdapters = [
  28,
  33,
  18,
  42,
  31,
  14,
  46,
  20,
  48,
  47,
  24,
  23,
  49,
  45,
  19,
  38,
  39,
  11,
  1,
  32,
  25,
  35,
  8,
  17,
  7,
  9,
  4,
  2,
  34,
  10,
  3,
];

describe("Solution for day 10", () => {
  it("can solve part 1", () => {
    assert.strictEqual(part1(adapters), 35);
    assert.strictEqual(part1(adapters), 35);
  });

  it("can solve part 2", () => {
    assert.strictEqual(part2(adapters), 8);
    assert.strictEqual(part2(moreAdapters), 19208);
  });
});
