// 진법 변환
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const N = inputData[0];
const B = Number(inputData[1]);

console.log(parseInt(N, B));
