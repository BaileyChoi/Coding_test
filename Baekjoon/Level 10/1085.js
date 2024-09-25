// 직사각형에서 탈출
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

let [x, y, w, h] = inputData.map((item) => Number(item));

let array = [x, w - x, y, h - y];
console.log(Math.min(...array));
