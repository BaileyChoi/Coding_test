// 듣보잡
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = inputData[0].split(" ").map(Number);
let notHeard = inputData.slice(1, N + 1);
let notSeen = new Set(inputData.slice(N + 1, N + 1 + M));

let notHeardAndSeen = notHeard.filter((nh) => notSeen.has(nh)).sort();

console.log(notHeardAndSeen.length);
console.log(notHeardAndSeen.join("\n"));
