// 수 정렬하기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, ...array] = inputData;
array = array.map((i) => i.split("\n"));
array.sort((a, b) => a - b);
console.log(array.join("\n"));
