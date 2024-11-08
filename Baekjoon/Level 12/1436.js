// 영화감독 숌
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let N = Number(inputData);

let num = 666;
let count = 1;

while (count !== N) {
  num++;
  if (String(num).includes("666")) count++;
}
console.log(num);
