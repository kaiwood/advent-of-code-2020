const fs = require("fs");

const map = fs
  .readFileSync(`${__dirname}/input.txt`, "utf8")
  .trim()
  .split("\n")
  .map((row) => row.split(""));

function xAxis(i, n = map[0].length) {
  return ((i % n) + n) % n;
}

function calculateSlopes(stepsX, stepsY) {
  let trees = 0;
  let y = 0;
  let x = 0;

  while (y < map.length) {
    if (map[y][xAxis(x)] === "#") {
      trees++;
    }

    x += stepsX;
    y += stepsY;
  }

  return trees;
}

// Part 1
console.log(calculateSlopes(3, 1));

// Part 2
const result =
  calculateSlopes(1, 1) *
  calculateSlopes(3, 1) *
  calculateSlopes(5, 1) *
  calculateSlopes(7, 1) *
  calculateSlopes(1, 2);

console.log(result);
