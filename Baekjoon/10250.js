// ACM 호텔
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(inputData[0]);

for (let i = 1; i <= T; i++) {
  let [H, W, N] = inputData[i].split(" ").map(Number);
  let y = N % H === 0 ? H : N % H;
  let x = Math.ceil(N / H);
  x = String(x).padStart(2, "0");
  console.log(`${y}${x}`);
}
