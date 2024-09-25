// 삼각형과 세 변
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const checkTriangle = (t) => {
  let [sideA, sideB, sideC] = t;

  if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
    if (sideA === sideB && sideB === sideC) {
      console.log("Equilateral");
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Invalid");
  }
};

for (const line of inputData) {
  let triangle = line.split(" ").map(Number);
  if (triangle[0] === 0 && triangle[1] === 0 && triangle[2] === 0) break;
  checkTriangle(triangle);
}
