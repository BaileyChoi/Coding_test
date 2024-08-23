// 곱셈
const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const Bnumb = inputData[1].split("");

console.log(A * Bnumb[2]);
console.log(A * Bnumb[1]);
console.log(A * Bnumb[0]);
console.log(A * B);
