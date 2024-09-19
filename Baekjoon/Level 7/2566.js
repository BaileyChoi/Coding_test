// 최대값
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = [];
let max = 0;
let [k, l] = [0, 0];

for (let i = 0; i < 9; i++) {
  const num = inputData[i].split(" ");
  A[i] = [];

  for (let j = 0; j < 9; j++) {
    A[i][j] = Number(num[j]);

    if (A[i][j] >= max) {
      max = A[i][j];
      [k, l] = [i + 1, j + 1];
    }
  }
}

console.log(max);
console.log(k, l);
