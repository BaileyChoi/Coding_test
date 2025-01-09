// 2×n 타일링
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(inputData);
const MOD = 10007;

// dp 배열 초기화
const dp = Array(n).fill(0);

// 초기 값 설정
dp[1] = 1;
dp[2] = 2;

// dp 배열 채우기
for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
}

// 결과 출력
console.log(dp[n]);
