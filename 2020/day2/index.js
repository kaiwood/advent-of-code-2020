const fs = require("fs");

const database = fs
  .readFileSync(`${__dirname}/input.txt`, "utf8")
  .trim()
  .split("\n")
  .map((entry) => {
    const [_, min, max, char, password] = entry.match(
      /(\d+)-(\d+) (\w): (\w+)/
    );

    return {
      min: Number(min),
      max: Number(max),
      char,
      password,
    };
  });

let validPart1 = 0;
let validPart2 = 0;

// Solution part 1
for (let policy of database) {
  const numberOfChars = policy.password
    .split("")
    .filter((p) => p === policy.char).length;

  if (numberOfChars >= policy.min && numberOfChars <= policy.max) {
    validPart1++;
  }
}

// Solution part 2
for (let policy of database) {
  const firstChar = policy.password[policy.min - 1];
  const secondChar = policy.password[policy.max - 1];

  if (firstChar === secondChar) continue;

  if (firstChar === policy.char || secondChar === policy.char) {
    validPart2++;
  }
}

console.log(validPart1);
console.log(validPart2);
