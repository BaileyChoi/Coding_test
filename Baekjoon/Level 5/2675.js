// 문자열 반복
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(inputData[0]);
let answer = "";

for (let i = 1; i <= T; i++) {
  let R = Number(inputData[i].split(" ")[0]);
  let word = inputData[i].split(" ")[1];

  for (let j = 0; j < word.length; j++) {
    for (let k = 0; k < R; k++) {
      answer += word[j];
    }
  }
  answer += "\n";
}

console.log(answer);
