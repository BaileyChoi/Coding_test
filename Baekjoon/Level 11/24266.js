// 알고리즘 수업 - 알고리즘의 수행 시간 6
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let n = BigInt(inputData);
let sum = 0n;

for (let i = 1n; i <= n - 2n; i++) {
  sum += i * (n - 1n - i);
}

console.log(`${sum}`);
console.log(3);
