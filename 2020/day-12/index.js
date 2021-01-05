const fs = require("fs");

function part1(instructions) {
  const ship = {
    direction: "E",
    x: 0,
    y: 0,

    N(n) {
      this.y += n;
    },

    E(n) {
      this.x += n;
    },

    S(n) {
      this.y -= n;
    },

    W(n) {
      this.x -= n;
    },

    F(n) {
      this[this.direction](n);
    },

    R(deg) {
      let rounds = deg / 90;
      for (let _ = 0; _ < rounds; _++) {
        switch (this.direction) {
          case "N":
            this.direction = "E";
            break;

          case "E":
            this.direction = "S";
            break;
          case "S":
            this.direction = "W";
            break;
          case "W":
            this.direction = "N";

          default:
            break;
        }
      }
    },

    L(deg) {
      let rounds = deg / 90;
      for (let _ = 0; _ < rounds; _++) {
        switch (this.direction) {
          case "N":
            this.direction = "W";
            break;

          case "W":
            this.direction = "S";
            break;
          case "S":
            this.direction = "E";
            break;
          case "E":
            this.direction = "N";

          default:
            break;
        }
      }
    },
  };

  for (let [command, value] of instructions) {
    ship[command](value);
  }

  return Math.abs(ship.x) + Math.abs(ship.y);
}
function part2(instructions) {
  const ship = {
    x: 0,
    y: 0,
    wx: 10,
    wy: 1,

    N(n) {
      this.wy += n;
    },

    E(n) {
      this.wx += n;
    },

    S(n) {
      this.wy -= n;
    },

    W(n) {
      this.wx -= n;
    },

    F(n) {
      for (let _ = 0; _ < n; _++) {
        this.x += this.wx;
        this.y += this.wy;
      }
    },

    R(deg) {
      let rounds = deg / 90;
      for (let _ = 0; _ < rounds; _++) {
        [this.wx, this.wy] = [this.wy, -this.wx];
      }
    },

    L(deg) {
      let rounds = deg / 90;
      for (let _ = 0; _ < rounds; _++) {
        [this.wx, this.wy] = [-this.wy, this.wx];
      }
    },
  };

  for (let [command, value] of instructions) {
    ship[command](value);
  }

  return Math.abs(ship.x) + Math.abs(ship.y);
}

if (require.main === module) {
  const instructions = fs
    .readFileSync(`${__dirname}/input.txt`, "utf8")
    .trim()
    .split("\n")
    .map((e) => [e.slice(0, 1), Number(e.slice(1))]);

  console.log(part1(instructions));
  console.log(part2(instructions));
}

exports.part1 = part1;
exports.part2 = part2;
