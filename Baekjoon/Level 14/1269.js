// 대칭 차집합
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let A = new Set(inputData[1].split(" ").map(Number));
let B = new Set(inputData[2].split(" ").map(Number));

let AminusB = 0;
let BminusA = 0;

A.forEach((num) => {
  if (B.has(num)) {
    AminusB++;
  }
});
B.forEach((num) => {
  if (A.has(num)) {
    BminusA++;
  }
});

console.log(AminusB + BminusA);
