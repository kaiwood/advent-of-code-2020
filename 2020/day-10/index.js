const fs = require("fs");

function part1([...adapters]) {
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

function part2([...adapters]) {
  adapters = adapters.sort((a, b) => a - b);
  adapters.unshift(0);
  adapters.push(adapters[adapters.length - 1] + 3);

  const paths = new Proxy(
    {},
    {
      get: (target, name) => (name in target ? target[name] : 0),
    }
  );

  paths[0] = 1;

  for (let adapter of adapters) {
    for (let diff = 1; diff < 4; diff++) {
      let next = adapter + diff;
      if (adapters.includes(next)) {
        paths[next] += paths[adapter];
      }
    }
  }

  return Math.max(...Object.values(paths));
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

  /**
   * Part 2
   */
  console.log(part2(adapters));
}

exports.part1 = part1;
exports.part2 = part2;
