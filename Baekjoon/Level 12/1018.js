// 체스판 다시 칠하기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [size, ...arr] = inputData;
let [N, M] = size.split(" ").map(Number);
arr = arr.map((i) => i.split(""));
const answer = [];

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function whiteFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== white[i][j]) count++;
    }
  }
  return count;
}

function blackFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== black[i][j]) count++;
    }
  }
  return count;
}

for (let p = 0; p < N - 7; p++) {
  for (let q = 0; q < M - 7; q++) {
    answer.push(whiteFirst(p, q));
    answer.push(blackFirst(p, q));
  }
}
console.log(Math.min(...answer));
