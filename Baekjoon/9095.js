// 1, 2, 3 더하기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let cases = inputData.slice(1).map(Number);

const solution = (num) => {
  if (num === 0) return 1;
  if (num === 1) return 1;
  if (num === 2) return 2;
  if (num === 3) return 4;

  let dp = new Array(num + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[num];
};

let answer = cases.map((num) => {
  return solution(num);
});

console.log(answer.join("\n"));
