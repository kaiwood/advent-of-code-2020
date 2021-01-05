const { test } = require("mocha");
const assert = require("assert");
const { part1, part2 } = require("./index");

const instructions = `F10
N3
F7
R90
F11`
  .split("\n")
  .map((e) => [e.slice(0, 1), Number(e.slice(1))]);

describe("day 11", () => {
  test("part 1", () => {
    assert.strictEqual(part1(instructions), 25);
  });

  test("part 2", () => {
    assert.strictEqual(part2(instructions), 286);
  });
});
