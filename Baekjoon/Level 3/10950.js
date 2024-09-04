// A+B - 3
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const forNum = parseInt(inputData[0]);

for (let i = 1; i <= forNum; i++) {
  let a = inputData[i].split(" ");
  console.log(Number(a[0]) + Number(a[1]));
}
