// 진법 변환 2
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

let [N, B] = inputData.map((item) => Number(item));

console.log(N.toString(B).toUpperCase());
