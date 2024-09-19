// 색종이
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = Array.from({ length: 100 }, () => Array(100).fill(0));

let input = inputData.map((i) => i.split(" "));
let num = parseInt(inputData[0]);
let area = 0;

for (let i = 1; i <= num; i++) {
  let startX = +input[i][0];
  let startY = +input[i][1];
  for (let m = 0; m < 10; m++) {
    for (let n = 0; n < 10; n++) {
      if (arr[startX + m][startY + n] !== 0) {
        continue;
      } else {
        arr[startX + m][startY + n] = 1;
        area++;
      }
    }
  }
}

console.log(area);
