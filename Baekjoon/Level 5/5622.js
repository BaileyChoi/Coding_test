// 다이얼
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("");

let dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let time = 0;

for (let i = 0; i < dial.length; i++) {
  for (let j = 0; j < inputData.length; j++) {
    if (dial[i].includes(inputData[j])) {
      time += i + 3;
    }
  }
}

console.log(time);
