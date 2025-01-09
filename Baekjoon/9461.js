// 파도반 수열
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(inputData[0]);
const maxN = 100;

// dp 배열 초기화
const dp = Array(maxN).fill(0);

// 초기 값 설정
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

// dp 배열 채우기
for (let i = 3; i <= maxN; i++) {
  dp[i] = dp[i - 3] + dp[i - 2];
}

// 결과 출력
for (let i = 1; i <= T; i++) {
  let N = Number(inputData[i]);
  console.log(dp[N]);
}
