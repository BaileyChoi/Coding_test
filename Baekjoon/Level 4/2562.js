// 최댓값
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

let A = inputData.split("\n").map((x) => Number(x));

let max = 0;
let k = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] > max) {
    max = Math.max(A[i]);
    k = i + 1;
  }
}
console.log(max);
console.log(k);
