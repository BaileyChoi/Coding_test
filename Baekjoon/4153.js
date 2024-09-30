// 직각삼각형
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function isRightTriangle(t) {
  t.sort((a, b) => a - b);

  if (Math.pow(t[2], 2) === Math.pow(t[0], 2) + Math.pow(t[1], 2)) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i < inputData.length; i++) {
  let triangle = inputData[i].split(" ").map(Number);

  if (triangle[0] === 0 && triangle[1] === 0 && triangle[2] === 0) break;

  if (isRightTriangle(triangle)) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
