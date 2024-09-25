// 삼각형 외우기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [angleA, angleB, angleC] = inputData.map(Number);

if (angleA + angleB + angleC !== 180) {
  console.log("Error");
} else if (angleA === 60 && angleB === 60 && angleC === 60) {
  console.log("Equilateral");
} else if (angleA === angleB || angleB === angleC || angleA === angleC) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}
