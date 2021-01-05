const fs = require("fs");
const _ = require("lodash");

/**
 * Part 1
 */
function part1(seats, round = 1) {
  const newSeats = [];

  for (let i = 0; i < seats.length; i++) {
    newSeats.push([]);

    for (let j = 0; j < seats[i].length; j++) {
      switch (seats[i][j]) {
        case "L":
          newSeats[i][j] = checkAdjacents(seats, i, j) ? "L" : "#";
          break;
        case "#":
          newSeats[i][j] = checkAdjacents(seats, i, j, "#", 4) ? "L" : "#";
          break;
        case ".":
          newSeats[i][j] = ".";
          break;

        default:
          throw new Error("Invalid char detected");
      }
    }
  }

  if (_.isEqual(seats, newSeats)) {
    return countSeats(newSeats);
  } else {
    return part1(newSeats, round + 1);
  }
}

/**
 * Part 2
 */
function part2(seats, round = 1) {
  const newSeats = [];

  for (let i = 0; i < seats.length; i++) {
    newSeats.push([]);

    for (let j = 0; j < seats[i].length; j++) {
      switch (seats[i][j]) {
        case "L":
          newSeats[i][j] = checkAdjacentsPlus(seats, i, j) ? "L" : "#";
          break;
        case "#":
          newSeats[i][j] = checkAdjacentsPlus(seats, i, j, "#", 5) ? "L" : "#";
          break;
        case ".":
          newSeats[i][j] = ".";
          break;

        default:
          throw new Error("Invalid char detected");
      }
    }
  }

  if (_.isEqual(seats, newSeats)) {
    return countSeats(newSeats);
  } else {
    return part2(newSeats, round + 1);
  }
}

function checkAdjacents(seats, i, j, char = "#", treshold = 1) {
  const adjacents = [
    seats[i - 1] && seats[i - 1][j - 1],
    seats[i - 1] && seats[i - 1][j],
    seats[i - 1] && seats[i - 1][j + 1],
    seats[i] && seats[i][j - 1],
    seats[i] && seats[i][j + 1],
    seats[i + 1] && seats[i + 1][j - 1],
    seats[i + 1] && seats[i + 1][j],
    seats[i + 1] && seats[i + 1][j + 1],
  ];

  let foundAdjacent = 0;

  for (let seat of adjacents) {
    if (seat === char) {
      foundAdjacent += 1;
    }
  }

  return foundAdjacent >= treshold;
}

function countSeats(seats) {
  let count = 0;

  for (let row of seats) {
    for (let col of row) {
      if (col === "#") count++;
    }
  }

  return count;
}

if (require.main === module) {
  const seats = fs
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .trim()
    .split("\n")
    .map((e) => e.split(""));

  console.log(part1(seats));
}

exports.part1 = part1;
exports.part2 = part2;
