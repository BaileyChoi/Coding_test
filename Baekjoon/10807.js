// 개수 세기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = parseInt(inputData[0]);
let q = inputData[1].split(" ");
let v = parseInt(inputData[2]);
let answer = 0;

for (let i = 0; i < N; i++) {
  if (parseInt(q[i]) == v) {
    answer += 1;
  }
}
console.log(answer);
