// 직사각형
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let [A, B] = inputData.map((item) => Number(item));

console.log(A * B);
