// 소수 찾기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(inputData[0]);
let count = 0;

const isPrimeNum = (num) => {
  if (num <= 1) return false;
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < N; i++) {
  if (isPrimeNum(Number(inputData[1].split(" ")[i]))) {
    count++;
  }
}

console.log(count);
