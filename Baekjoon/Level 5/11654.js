// 아스키 코드
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

console.log(inputData.charCodeAt(0));
