// 세탁소 사장 동혁
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(inputData[0]);

function change(m) {
  let Q = parseInt(m / 25);
  m %= 25;
  let D = parseInt(m / 10);
  m %= 10;
  let N = parseInt(m / 5);
  m %= 5;
  let P = parseInt(m / 1);
  m %= 1;
  console.log(`${Q} ${D} ${N} ${P}`);
}

for (let i = 0; i < T; i++) {
  change(Number(inputData[i + 1]));
}
