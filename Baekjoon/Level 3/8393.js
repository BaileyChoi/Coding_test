// 합
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

const num = parseInt(inputData);
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);
