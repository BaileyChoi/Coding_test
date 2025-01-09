// 계단 오르기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(inputData[0]);
const score = inputData.slice(1).map(Number);

// dp 배열 초기화
const dp = Array(n).fill(0);

// 초기 값 설정
dp[0] = score[0];
dp[1] = score[0] + score[1];
dp[2] = Math.max(score[0] + score[2], score[1] + score[2]);

// dp 배열 채우기
for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 2], dp[i - 3] + score[i - 1]) + score[i];
}

// 결과 출력
console.log(dp[n - 1]);
