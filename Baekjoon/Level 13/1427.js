// 소트인사이드
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let N = inputData.split("").map(Number);

N.sort((a, b) => b - a);

console.log(N.join(""));
