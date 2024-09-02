// 코딩은 체육과목 입니다
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

const num = parseInt(inputData);
let long = "";

for (let i = 1; i <= num / 4; i++) {
  long += "long ";
}

console.log(long + "int");
