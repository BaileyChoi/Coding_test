// 네 번째 점
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let p = inputData.map((item) => item.split(" "));

let x = p.map((item) => item[0]).sort((a, b) => a - b);
let y = p.map((item) => item[1]).sort((a, b) => a - b);

x = x[0] === x[1] ? x[2] : x[0];
y = y[0] === y[1] ? y[2] : y[0];

console.log(x, y);
