// 랜선 자르기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [K, N] = inputData[0].split(" ").map(Number);
let lines = inputData.slice(1).map(Number);

let left = 1;
let right = Math.max(...lines);
let result = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 0;

  for (let i = 0; i < K; i++) {
    count += Math.floor(lines[i] / mid);
  }

  if (count >= N) {
    result = mid;
    left = mid + 1; // 더 긴 길이 시도
  } else {
    right = mid - 1; // 더 짧은 길이 시도
  }
}

console.log(result);
