// 별 찍기 - 2
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

const num = parseInt(inputData);
let star = "";

for (let i = 1; i <= num; i++) {
  star += "*";
  console.log(star);
}
