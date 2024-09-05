// 팰린드롬인지 확인하기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

let reverse = inputData.split("").reverse().join("");

console.log(inputData === reverse ? 1 : 0);
