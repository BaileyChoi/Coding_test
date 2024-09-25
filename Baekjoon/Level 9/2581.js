// 소수
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let M = Number(inputData[0]);
let N = Number(inputData[1]);
let array = [];
let sum = 0;

const isPrimeNum = (num) => {
  if (num <= 1) return false;
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

for (let i = M; i <= N; i++) {
  if (isPrimeNum(i)) {
    array.push(i);
    sum += i;
  }
}

if (array.length === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(array[0]);
}
