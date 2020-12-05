const fs = require("fs");

function bsp(input, lower, upper) {
  if (lower === upper) return lower;

  const n = input[0];

  if (n === "F" || n === "L") {
    return bsp(input.slice(1), lower, Math.floor((upper + lower) / 2));
  } else {
    return bsp(input.slice(1), Math.floor((lower + upper) / 2) + 1, upper);
  }
}

exports.bsp = bsp;

if (require.main === module) {
  const instructions = fs
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n");

  let ids = [];

  for (let instruction of instructions) {
    const row = bsp(instruction.slice(0, 7), 0, 127);
    const column = bsp(instruction.slice(7), 0, 7);
    const id = row * 8 + column;

    ids.push(id);
  }

  // Part 1
  console.log(Math.max(...ids));

  ids = ids.sort();
  const missing = [];

  for (let i = Math.min(...ids); i < Math.max(...ids); i++) {
    if (!ids.includes(i)) missing.push(i);
  }

  // Part 2
  console.log(missing[0]);
}
