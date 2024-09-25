// 세 막대
const fs = require("fs");
const inputData = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

inputData.sort((a, b) => a - b);

let [a, b, c] = inputData;
let cir = 0;

if (a + b > c) {
  cir = a + b + c;
} else {
  cir = (a + b) * 2 - 1;
}

console.log(cir);
