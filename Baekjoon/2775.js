// 부녀회장이 될테야
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let T = Number(inputData[0]);

const living = (k, n) => {
  const house = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

  // 0층 세팅
  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }

  return house[k][n];
};

let index = 1;
for (let t = 0; t < T; t++) {
  let k = Number(inputData[index++]);
  let n = Number(inputData[index++]);
  console.log(living(k, n));
}
