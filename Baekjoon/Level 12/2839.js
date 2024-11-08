// 설탕배달
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let N = Number(inputData);

let answer = 0;

while (N > 0) {
  if (N % 5 === 0) {
    N -= 5;
  } else {
    N -= 3;
  }
  answer += 1;
}
console.log(N === 0 ? answer : -1);
