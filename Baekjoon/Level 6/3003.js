// 킹, 퀸, 룩, 비숍, 나이트, 폰
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

let x = inputData.split(" ");
let chess = [1, 1, 2, 2, 2, 8];
let answer = [];

for (let i = 0; i < x.length; i++) {
  answer.push(Number(chess[i] - Number(x[i])));
}

console.log(answer.join(" "));
