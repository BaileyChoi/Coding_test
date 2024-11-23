// 수 찾기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let A = inputData[1].split(" ").map(Number);
let nums = inputData[3].split(" ").map(Number);

let ASet = new Set(A);

let answer = nums.map((num) => (ASet.has(num) ? 1 : 0));

console.log(answer.join("\n"));
