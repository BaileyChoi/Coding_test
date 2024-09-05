// 그대로 출력하기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < inputData.length; i++) {
  console.log(inputData[i]);
}
