// 검증수
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let numbers = inputData.map((item) => Number(item));
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += Math.pow(numbers[i], 2);
}

console.log(sum % 10);
