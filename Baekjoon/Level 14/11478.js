// 서로 다른 부분 문자열의 개수
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let S = inputData;

let answer = new Set();

for (let i = 0; i < S.length; i++) {
  for (let j = i + 1; j <= S.length; j++) {
    answer.add(S.substring(i, j));
  }
}

console.log(answer.size);
