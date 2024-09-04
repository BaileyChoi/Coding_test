// 평균
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(inputData[0]);
let x = inputData[1].split(" ").map(Number);
let [max, sum] = [0, 0];

for (let i = 0; i < N; i++) {
  if (x[i] > max) {
    max = x[i];
  }
}
//max = Math.max(...x);

for (let i = 0; i < N; i++) {
  sum += (x[i] / max) * 100;
}

console.log(sum / N);
