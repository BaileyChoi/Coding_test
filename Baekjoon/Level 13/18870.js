// 좌표 압축
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let coordinates = inputData[1].split(" ").map(Number);

uniqueSortedCoordinates = [...new Set(coordinates)];
uniqueSortedCoordinates.sort((a, b) => a - b);

let coordinatesMap = {};
uniqueSortedCoordinates.forEach((value, index) => {
  coordinatesMap[value] = index;
});

let answer = [];

for (let i = 0; i < coordinates.length; i++) {
  answer.push(coordinatesMap[coordinates[i]]);
}

console.log(answer.join(" "));
