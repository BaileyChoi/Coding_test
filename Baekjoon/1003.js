// 피보나치 함수
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let T = Number(inputData[0]);
let N = inputData.slice(1).map(Number);

const maxN = 40;
let countZero = new Array(maxN + 1).fill(0);
let countOne = new Array(maxN + 1).fill(0);

// 초기 값 설정
countZero[0] = 1;
countOne[0] = 0;
countZero[1] = 0;
countOne[1] = 1;

// DP 배열 채우기
for (let i = 2; i <= maxN; i++) {
  countZero[i] = countZero[i - 1] + countZero[i - 2];
  countOne[i] = countOne[i - 1] + countOne[i - 2];
}

// 결과 출력
for (let i = 0; i < T; i++) {
  console.log(`${countZero[N[i]]} ${countOne[N[i]]}`);
}
