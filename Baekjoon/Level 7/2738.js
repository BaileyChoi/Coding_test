// 행렬 덧셈
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(inputData[0].split(" ")[0]);
const M = parseInt(inputData[0].split(" ")[1]);

const A = [];
const B = [];
const C = [];

for (let i = 0; i < N; i++) {
  const ANum = inputData[i + 1].split(" ");
  A[i] = [];
  const BNum = inputData[i + 1 + N].split(" ");
  B[i] = [];
  C[i] = [];

  for (let j = 0; j < M; j++) {
    A[i][j] = Number(ANum[j]);
    B[i][j] = Number(BNum[j]);
    C[i][j] = A[i][j] + B[i][j];
  }

  console.log(C[i].join(" "));
}
