// 대표값2
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let array = inputData.map(Number);
array.sort((a, b) => a - b);

let hap = 0;
for (let i = 0; i < 5; i++) {
  hap += array[i];
}

console.log(hap / 5);
console.log(array[2]);
