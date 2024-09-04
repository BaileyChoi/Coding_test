// 숫자의 합
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = inputData[0];
let sum = 0;

for (let i = 0; i < N; i++) {
  let num = inputData[1].trim();
  sum += Number(num[i]);
}

console.log(sum);
