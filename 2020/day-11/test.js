const { test } = require("mocha");
const assert = require("assert");
const { part1, part2 } = require("./index");

const testSeats = `#.##.##.##
#######.##
#.#.#..#..
####.##.##
#.##.##.##
#.#####.##
..#.#.....
##########
#.######.#
#.#####.##`
  .trim()
  .split("\n")
  .map((e) => e.split(""));

describe("day 11", () => {
  test("part 1", () => {
    assert.strictEqual(part1(testSeats), 37);
  });

  test("part 2", () => {
    assert.strictEqual(part2(testSeats), 26);
  });
});
