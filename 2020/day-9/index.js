const fs = require("fs");

function isSummable(numbers, n) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === n) {
        return true;
      }
    }
  }

  return false;
}

function findNumber(numbers, preamble) {
  for (let i = preamble; i < numbers.length; i++) {
    if (!isSummable(numbers.slice(i - preamble, i), numbers[i])) {
      return numbers[i];
    }
  }

  return 0;
}

function findSequence(numbers, sumToFind) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let seq = numbers.slice(i, j + 1);
      let sum = seq.reduce((prev, next) => prev + next, 0);

      if (sum === sumToFind) {
        return seq;
      }
    }
  }

  return [];
}

if (require.main === module) {
  const numbers = fs
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .split("\n")
    .map(Number);

  // Part 1
  const part1 = findNumber(numbers, 25);
  console.log(part1);

  // Part 2
  const seq = findSequence(numbers, part1);
  console.log(Math.min(...seq) + Math.max(...seq));
}

exports.findNumber = findNumber;
exports.findSequence = findSequence;
