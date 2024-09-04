// 공 바꾸기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(inputData[0].split(" ")[0]);
let M = Number(inputData[0].split(" ")[1]);

let arr = new Array(N).fill(1).map((a, b) => a + b);

function exchange(a, b) {
  let tmp = arr[a - 1];
  arr[a - 1] = arr[b - 1];
  arr[b - 1] = tmp;
}

for (let i = 1; i <= M; i++) {
  let [a, b] = inputData[i].split(" ").map((x) => Number(x));
  exchange(a, b);
}

console.log(arr.join(" "));
