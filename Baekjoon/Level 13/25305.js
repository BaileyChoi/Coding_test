// 커트라인
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let k = inputData[0].split(" ")[1];
let scores = inputData[1].split(" ");

scores.sort((a, b) => b - a);

console.log(scores[k - 1]);
