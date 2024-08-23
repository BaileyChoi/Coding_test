// 오븐 시계
const fs = require("fs");
const inputData = fs.readFileSync(`/dev/stdin`).toString().split(" ");
const inputData2 = fs.readFileSync(`/dev/stdin`).toString().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData2[1]);

h = Math.floor((A * 60 + B + C) / 60);
m = (A * 60 + B + C) % 60;

if (h >= 24) {
  h -= 24;
}

console.log(h + " " + m);
