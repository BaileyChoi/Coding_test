// 빠른 A+B
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = parseInt(inputData[0]);
let answer = "";

for (let i = 1; i <= num; i++) {
  let AB = inputData[i].split(" ");
  answer += Number(AB[0]) + Number(AB[1]) + "\n";
}

console.log(answer);
