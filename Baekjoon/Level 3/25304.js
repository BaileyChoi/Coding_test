// 영수증
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const money = parseInt(inputData[0]);
let num = parseInt(inputData[1]);
let sum = 0;

for (let i = 1; i <= num; i++) {
  let a = inputData[i + 1].split(" ");
  let price = Number(a[0]) * Number(a[1]);
  sum += price;
}

if (sum == money) {
  console.log("Yes");
} else {
  console.log("No");
}
