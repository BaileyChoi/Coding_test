// 사파리월드
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = inputData[0].split(" ").map(Number);

console.log(Math.abs(N - M));
