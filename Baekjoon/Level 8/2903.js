// 중앙 이동 알고리즘
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

let N = Number(inputData);
let dot = 2;

for (let i = 0; i < N; i++) {
  dot += Math.pow(2, i);
}

console.log(Math.pow(dot, 2));
