// 엄청난 부자2
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let [n, m] = inputData.trim().split(" ").map(BigInt);

console.log((n / m).toString());
console.log((n % m).toString());
