// N 찍기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

for (let i = 1; i <= Number(inputData); i++) {
  console.log(i);
}
