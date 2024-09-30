// 알고리즘 수업 - 알고리즘의 수행 시간 4
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let n = Number(inputData);
let sum = 0;

for (let i = 1; i <= n - 1; i++) {
  sum += i;
}

console.log(sum);
console.log(2);
