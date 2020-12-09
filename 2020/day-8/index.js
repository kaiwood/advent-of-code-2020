const fs = require("fs");

const instructions = fs
  .readFileSync(`${__dirname}/input.txt`, "utf8")
  .trim()
  .split("\n")
  .map((e) => {
    let tmp = e.split(" ");
    return [tmp[0], parseInt([tmp[1], tmp[2]].join(""), 10)];
  });

function findSeq(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let compare = array.slice(i);
    let prev = array.slice(i - compare.length, i);

    if (compare.toString() === prev.toString()) {
      return i;
    }
  }

  return -1;
}

/**
 * Day 1 - Part 1
 */
let pos = 0;
let acc = 0;

let seq = [];
let accs = [];

while (true) {
  switch (instructions[pos][0]) {
    case "jmp":
      pos += instructions[pos][1];
      break;
    case "acc":
      acc += instructions[pos][1];
      pos++;
      break;
    default:
      pos++;
      break;
  }

  seq.push(pos);
  accs.push(acc);

  let result = findSeq(seq);
  if (result > 0) {
    console.log(accs[result]);
    break;
  }
}
