// 바구니 뒤집기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, M] = inputData[0].split(" ").map((x) => Number(x));
let x = new Array(N).fill(1).map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
  let [start, end] = inputData[i].split(" ").map(Number);
  let reversed = x.slice(start - 1, end).reverse();
  x.splice(start - 1, end - start + 1, ...reversed);
}

console.log(x.join(" "));
