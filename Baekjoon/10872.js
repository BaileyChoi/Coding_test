// 팩토리얼
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(inputData);
let answer = 1;

for (let i = 1; i <= N; i++) {
  answer *= i;
}

console.log(answer);
