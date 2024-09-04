// X보다 작은 수
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = parseInt(inputData[0].split(" ")[0]);
let A = inputData[1].split(" ");
let X = parseInt(inputData[0].split(" ")[1]);
let answer = "";

for (let i = 0; i < N; i++) {
  if (parseInt(A[i]) < X) {
    answer = answer + A[i] + " ";
  }
}
console.log(answer);
