// 통계학
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(inputData[0]);
let input = inputData.slice(1).map(Number);
let sortedNum = input.sort((a, b) => a - b);

// 산술 평균
let sum = sortedNum.reduce((acc, curr) => acc + curr, 0);
let mean = Math.round(sum / N);
if (mean === -0) mean = 0;
console.log(mean);

// 중앙값
let mid = Math.floor(N / 2);
console.log(sortedNum[mid]);

// 최빈값
let frequency = {};
let maxFreq = 0;
let modes = [];

for (let num of sortedNum) {
  if (frequency[num]) {
    frequency[num]++;
  } else {
    frequency[num] = 1;
  }

  if (frequency[num] > maxFreq) {
    maxFreq = frequency[num];
    modes = [num];
  } else if (frequency[num] === maxFreq) {
    modes.push(num);
  }
}

let mode = modes.length > 1 ? modes[1] : modes[0];
console.log(mode);

// 범위
let range = sortedNum[N - 1] - sortedNum[0];
console.log(range);
