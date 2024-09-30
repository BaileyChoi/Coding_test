// 알고리즘 수업 - 점근적 표기 1
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

var [a1, a0] = inputData[0].split(" ").map(Number);
var c = Number(inputData[1]);
var n0 = Number(inputData[2]);

var fn = a1 * n0 + a0;
var gn = c * n0;

if (fn <= gn && (a1 - c <= 0 ? 1 : 0)) {
  console.log(1);
} else {
  console.log(0);
}
