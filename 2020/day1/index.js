const fs = require("fs");

const data = fs
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n")
  .map(Number);

function part1() {
  let result;

  loop: for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i] + data[j] === 2020) {
        result = data[i] * data[j];
        break loop;
      }
    }
  }

  console.log(result);
}

function part2() {
  let result;

  loop: for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      for (let k = 0; k < data.length; k++) {
        if (data[i] + data[j] + data[k] === 2020) {
          result = data[i] * data[j] * data[k];
          break loop;
        }
      }
    }
  }

  console.log(result);
}

part1();
part2();
