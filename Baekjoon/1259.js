// 팰린드롬수
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let cases = inputData.slice(0, -1).map((i) => i.trim());

const solution = (num) => {
  for (let i = 0; i < Math.floor(num.length / 2); i++) {
    if (num[i] !== num[num.length - i - 1]) {
      console.log("no");
      return;
    }
  }
  console.log("yes");
};

cases.forEach((num) => solution(num));
