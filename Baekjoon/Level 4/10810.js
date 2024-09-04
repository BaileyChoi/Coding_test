// 공 넣기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(inputData[0].split(" ")[0]);
let M = Number(inputData[0].split(" ")[1]);

let arr = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  let [a, b, c] = inputData[i].split(" ").map((x) => Number(x));

  for (let j = a; j <= b; j++) {
    arr[j - 1] = c;
  }
}

console.log(arr.join(" "));
