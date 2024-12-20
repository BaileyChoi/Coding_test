// 스택 수열
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(inputData[0]);
let nums = inputData.slice(1).map(Number);

let stack = [];
let results = [];
let currentNum = 1;

for (let i = 0; i < n; i++) {
  let targetNum = nums[i];

  while (currentNum <= targetNum) {
    stack.push(currentNum);
    results.push("+");
    currentNum++;
  }

  if (stack[stack.length - 1] === targetNum) {
    stack.pop();
    results.push("-");
  } else {
    console.log("NO");
    return;
  }
}

console.log(results.join("\n"));
