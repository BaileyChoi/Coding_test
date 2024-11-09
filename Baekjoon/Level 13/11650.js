// 좌표 정렬하기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let xy = inputData.slice(1);
xy = xy.map((i) => i.split(" ").map(Number));

xy.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

console.log(xy.map((i) => i.join(" ")).join("\n"));
