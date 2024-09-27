// OX퀴즈
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(inputData[0]);

function scoring(st) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < st.length; i++) {
    if (st[i] === "O") {
      sum += ++count;
    } else {
      count = 0;
    }
  }
  return sum;
}

for (let i = 1; i <= N; i++) {
  let string = inputData[i].split("");
  let score = scoring(string);
  console.log(score);
}
