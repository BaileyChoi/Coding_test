// 구구단
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

const dan = parseInt(inputData);

for (let i = 1; i < 10; i++) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}
