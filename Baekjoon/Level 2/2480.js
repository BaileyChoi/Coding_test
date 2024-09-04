// 주사위 세개
const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);

if (A == B && B == C && A == C) {
  console.log(10000 + A * 1000);
} else if (A == B) {
  console.log(1000 + A * 100);
} else if (B == C) {
  console.log(1000 + B * 100);
} else if (A == C) {
  console.log(1000 + C * 100);
} else {
  const maxNum = Math.max(...inputData);
  console.log(maxNum * 100);
}
