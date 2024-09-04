// 문자와 문자열
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let word = inputData[0];
let i = Number(inputData[1]);

console.log(word[i - 1]);
