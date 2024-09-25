// 수학은 체육과목 입니다
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(inputData);

console.log(4 * n);
