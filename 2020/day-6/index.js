const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/input.txt`, "utf8").split("\n\n");

/**
 * Part 1
 */
const answers = [];

for (let entry of data) {
  let result = entry
    .split("\n")
    .map((e) => e.split(""))
    .flat();

  result = [...new Set(result)].length;
  answers.push(result);
}

const sum = answers.reduce((a, b) => a + b, 0);

console.log(sum);

/**
 * Part 2
 */
const results = [];

for (let group of data) {
  group = group.split("\n");

  const groupSize = group.length;
  group = group.map((e) => e.split("")).flat();

  let answeredByAll = [];
  for (let char of group) {
    if (group.filter((c) => c === char).length === groupSize) {
      answeredByAll.push(char);
    }
  }

  answeredByAll = [...new Set(answeredByAll)].length;
  results.push(answeredByAll);
}

const sumPart2 = results.reduce((a, b) => a + b, 0);

console.log(sumPart2);
