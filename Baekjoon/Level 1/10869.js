// 사칙연산
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);
