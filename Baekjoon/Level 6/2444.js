// 별 찍기 - 7
const fs = require("fs");
const inputData = fs.readFileSync("example.txt").toString();

let N = Number(inputData);

for (let i = 1; i < N; i++) {
  let blank = " ".repeat(N - i);
  let star = "*".repeat(2 * i - 1);
  console.log(blank + star);
}

for (let j = N; j > 0; j--) {
  let blank = " ".repeat(N - j);
  let star = "*".repeat(2 * j - 1);
  console.log(blank + star);
}
