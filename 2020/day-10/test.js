const assert = require("assert");
const { part1 } = require("./index");

const adapters = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];

describe("Day 10", () => {
  it("solves part 1", () => {
    assert.strictEqual(part1(adapters), 35);
  });
});
