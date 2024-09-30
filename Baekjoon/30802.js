// 웰컴 키트
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(inputData[0]);
let size = inputData[1].split(" ").map(Number);
let [T, P] = inputData[2].split(" ").map(Number);

let shirt = 0;
for (let i = 0; i < size.length; i++) {
  shirt += Math.ceil(size[i] / T);
}

console.log(shirt);
console.log(Math.floor(N / P), N % P);
