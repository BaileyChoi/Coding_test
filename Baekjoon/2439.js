// 별 찍기 - 2
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

const num = parseInt(inputData);
let star = "";
let blank = "";

for (let i = 1; i <= num; i++) {
  star += "*";
  for (let j = 0; j < num - i; j++) {
    blank += " ";
  }
  console.log(blank + star);
  blank = "";
}
