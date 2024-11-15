// 제로
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let nums = inputData.slice(1).map(Number);
let stack = [];

for (let num of nums) {
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

let answer = 0;
for (let n of stack) {
  answer += n;
}
console.log(answer);
