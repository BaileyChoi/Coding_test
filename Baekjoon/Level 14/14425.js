// 문자열 집합
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = inputData[0].split(" ").map(Number);
let sWords = new Set(inputData.slice(1, N + 1));
let words = inputData.slice(N + 1);

let answer = 0;

words.forEach((word) => {
  if (sWords.has(word)) {
    answer++;
  }
});

console.log(answer);
