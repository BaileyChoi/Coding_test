// 과제 안 내신 분..?
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = inputData.map(Number);
let x = [];

for (let i = 1; i <= 30; i++) {
  if (N.includes(i)) continue;
  x.push(i);
}

x.sort((a, b) => a - b);
console.log(`${x[0]}\n${x[1]}`);
