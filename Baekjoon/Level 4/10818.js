// 최소, 최대
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(inputData[0]);
let A = inputData[1].split(" ").map((x) => Number(x));

let max = -1000000;
let min = 1000000;

for (let i = 0; i < N; i++) {
  if (A[i] > max) {
    max = Math.max(A[i]);
  }
  if (A[i] < min) {
    min = Math.min(A[i]);
  }
}
console.log(min, max);
