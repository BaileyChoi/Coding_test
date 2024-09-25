// 대지
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let xCoords = [],
  yCoords = [];

for (let i = 1; i <= inputData[0]; i++) {
  const [x, y] = inputData[i].split(" ").map(Number);
  xCoords.push(x);
  yCoords.push(y);
}

let w = Math.max(...xCoords) - Math.min(...xCoords);
let h = Math.max(...yCoords) - Math.min(...yCoords);

console.log(w * h);
