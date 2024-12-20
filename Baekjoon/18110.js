// solved.ac
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let n = inputData[0];
let input = inputData.slice(1);

let excludeNum = Math.round(n * 0.15);
let sortedInput = input.sort((a, b) => a - b);
let excludedInput =
  excludeNum === 0 ? sortedInput : sortedInput.slice(excludeNum, -excludeNum);

let result = 0;
for (let i = 0; i < excludedInput.length; i++) {
  result += excludedInput[i];
}

if (n === 0) {
  console.log(0);
} else {
  console.log(Math.round(result / excludedInput.length));
}
