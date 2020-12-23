const fs = require("fs");

function part1(adapters) {
  const count = [0, 0, 0];

  adapters = adapters.sort((a, b) => a - b);

  adapters.unshift(0);
  adapters.push(adapters[adapters.length - 1] + 3);

  for (let i = 1; i < adapters.length; i++) {
    let diff = adapters[i] - adapters[i - 1];
    count[diff - 1]++;
  }

  const result = count[0] * count[2];

  return result;
}

if (require.main === module) {
  const adapters = fs
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map(Number);

  /**
   * Part 1
   */

  console.log(part1(adapters));
}

exports.part1 = part1;
