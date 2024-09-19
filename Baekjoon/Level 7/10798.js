// 세로읽기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let A = "";

for (let col = 0; col < 15; col++) {
  for (let row = 0; row < 5; row++) {
    if (inputData[row][col] !== undefined) {
      A += inputData[row][col].trim();
    }
  }
}

console.log(A);
