// 상수
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

let A = inputData.split(" ")[0];
let B = inputData.split(" ")[1];

function reverse(x) {
  let xx = x.split("");
  let tmp = xx[0];
  xx[0] = xx[2];
  xx[2] = tmp;
  x = Number(xx.join(""));
  return x;
}

A = reverse(A);
B = reverse(B);

if (A > B) {
  console.log(A);
} else {
  console.log(B);
}

// let A = Number(inputData.split(" ")[0].split("").reverse().join(""));
// let B = Number(inputData.split(" ")[1].split("").reverse().join(""));

// console.log(A > B ? A : B);
