// 블랙잭
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = inputData[0].split(" ").map(Number);
const cards = inputData[1].split(" ").map(Number);

let sum = 0;
let temp = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = cards[i] + cards[j] + cards[k];

      if (sum <= M && sum > temp) {
        temp = sum;
      }
    }
  }
}

console.log(temp);
