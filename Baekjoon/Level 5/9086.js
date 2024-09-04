// 문자열
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(inputData[0]);

for (let i = 1; i <= T; i++) {
  let word = inputData[i].trim();
  let length = word.length;
  console.log(`${word[0]}${word[length - 1]}`);
}
