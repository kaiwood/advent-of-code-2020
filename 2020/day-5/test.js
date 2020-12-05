const assert = require("assert");
const { bsp } = require("./index");

describe("the algorithm", () => {
  const INPUT_ROW = "FBFBBFF";
  const INPUT_COLUMN = "RLR";

  it("can calculate the row", () => {
    assert.strictEqual(bsp(INPUT_ROW, 0, 127), 44);
  });

  it("can calculate the column", () => {
    assert.strictEqual(bsp(INPUT_COLUMN, 0, 7), 5);
  });
});
