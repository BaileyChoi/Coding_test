// 두 수 비교하기
const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}
