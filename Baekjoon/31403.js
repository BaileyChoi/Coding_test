// A + B - C
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

let [A, B, C] = inputData.split("\n");

console.log(Number(A) + Number(B) - Number(C));
console.log(A + B - C);
