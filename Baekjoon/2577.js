// 숫자의 개수
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let [A, B, C] = inputData.map(Number);

let num = String(A * B * C).split("");
let array = Array(10).fill(0);

for (let i = 0; i < num.length; i++) {
  array[Number(num[i])]++;
}

console.log(array.join("\n"));
