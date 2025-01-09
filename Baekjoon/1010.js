// 다리 놓기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let T = Number(inputData[0]);

const maxNM = 30;
let dp = Array.from({ length: maxNM + 1 }, () => Array(maxNM + 1).fill(0));

// 초기 값 설정
for (let i = 0; i <= maxNM; i++) {
  dp[i][0] = 1;
  dp[i][i] = 1;
}

// dp 배열 채우기
for (let i = 1; i <= maxNM; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}

// 결과 출력
for (let i = 1; i <= T; i++) {
  let [N, M] = inputData[i].split(" ").map(Number);
  console.log(dp[M][N]);
}
