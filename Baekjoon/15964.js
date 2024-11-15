// 이상한 기호
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let [A, B] = inputData.split(" ").map(Number);

console.log((A + B) * (A - B));
