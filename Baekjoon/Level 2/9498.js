// 시험 성정
const fs = require("fs");
const inputData = fs.readFileSync(0).toString();

const A = parseInt(inputData);

if (A >= 90 && A <= 100) {
  console.log("A");
} else if (A >= 80 && A <= 89) {
  console.log("B");
} else if (A >= 70 && A <= 79) {
  console.log("C");
} else if (A >= 60 && A <= 69) {
  console.log("D");
} else {
  console.log("F");
}
