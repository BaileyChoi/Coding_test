// 분해합
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

const N = Number(inputData);

for (let i = 0; i < N; i++) {
  let number = i.toString().split("").map(Number);
  let numLen = number.length;
  let numHap = 0;

  for (let j = 0; j < numLen; j++) {
    numHap += number[j];
  }

  if (i + numHap == N) {
    console.log(i);
    return;
  }
}

console.log(0);
