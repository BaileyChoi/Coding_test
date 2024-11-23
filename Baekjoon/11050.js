// 이항 계수 1
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let [N, K] = inputData.split(" ").map(Number);

// 이항 계수
const bc = (n, k) => {
  let parent = 1;
  let child = 1;

  for (let i = 0; i < k; i++) {
    parent *= n - i;
    child *= k - i;
  }

  return parent / child;
};

console.log(bc(N, K));
