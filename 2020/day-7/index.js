const fs = require("fs");

const rules = {};
fs.readFileSync(`${__dirname}/input.txt`, "utf8")
  .split("\n")
  .forEach((e) => {
    let [bag, contains] = e.split(" contain ");

    bag = bag.replace(/ bags?/, "");
    contains = contains
      .split(", ")
      .map((b) => {
        return b.replace(/ bags?\.?/, "");
      })
      .map((c) => {
        let [count, ...name] = c.split(" ");
        return {
          name: name.join(" "),
          count: Number(count) || 0,
        };
      });

    rules[bag] = contains;
  });

/**
 * Part 1
 */
function findBag(color) {
  let colors = rules[color].map((e) => e.name);

  if (colors.includes("other")) return false;

  if (colors.includes("shiny gold") || colors.some((c) => findBag(c))) {
    return true;
  }
}

const part1 = Object.keys(rules).filter((color) => findBag(color)).length;
console.log(part1);

/**
 * Part 2
 */
function countBags(name, n = 0) {
  if (!rules[name]) return 1;

  for (let color of rules[name]) {
    n += color.count * countBags(color.name);
  }

  return (n += 1);
}

const part2 = countBags("shiny gold") - 1;
console.log(part2);
