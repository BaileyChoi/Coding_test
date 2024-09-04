// 나머지
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = inputData.map(Number);
let x = [];

for (let i = 0; i < 10; i++) {
  let left = N[i] % 42;
  if (x.indexOf(left) === -1) {
    x.push(left);
  }
}

console.log(x.length);
