const fs = require("fs");

const passports = fs
  .readFileSync(`${__dirname}/input.txt`, "utf8")
  .split("\n\n")
  .map((e) => e.split(/\n| /))
  .map((e) => {
    const hash = {};

    for (let line of e) {
      let [key, value] = line.split(":");
      hash[key] = value;
    }

    return hash;
  });

const Validator = (passport) => {
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  return {
    hasRequiredFields() {
      return requiredFields.every((field) => passport.hasOwnProperty(field));
    },

    all() {
      return (
        this.checkByr() &&
        this.checkIyr() &&
        this.checkEyr() &&
        this.checkHgt() &&
        this.checkHcl() &&
        this.checkEcl() &&
        this.checkPid()
      );
    },

    checkByr() {
      let val = Number(passport["byr"]);
      return val >= 1920 && val <= 2002;
    },

    checkIyr() {
      let val = Number(passport["iyr"]);
      return val >= 2010 && val <= 2020;
    },

    checkEyr() {
      let val = Number(passport["eyr"]);
      return val >= 2020 && val <= 2030;
    },

    checkHgt() {
      let val = parseInt(passport["hgt"], 10);

      if (passport["hgt"].includes("cm")) {
        return val >= 150 && val <= 193;
      } else if (passport["hgt"].includes("in")) {
        return val >= 59 && val <= 76;
      }

      return false;
    },

    checkHcl() {
      return /^#[0-9a-f]{6}/i.test(passport["hcl"]);
    },

    checkEcl() {
      const validColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
      return validColors.some((c) => passport["ecl"].includes(c));
    },

    checkPid() {
      return /^\d{9}$/.test(passport["pid"]);
    },
  };
};

let validPassportsPart1 = 0;

for (let passport of passports) {
  if (Validator(passport).hasRequiredFields()) {
    validPassportsPart1++;
  }
}

console.log(validPassportsPart1);

let validPassportsPart2 = 0;

for (let passport of passports) {
  const validatedPassport = Validator(passport);

  if (validatedPassport.hasRequiredFields() && validatedPassport.all()) {
    validPassportsPart2++;
  }
}

console.log(validPassportsPart2);
