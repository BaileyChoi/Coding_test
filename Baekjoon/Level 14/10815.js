// 숫자 카드
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let cards = inputData[1].split(" ").map(Number);
let numbers = inputData[3].split(" ").map(Number);

let cardSet = new Set(cards);

let answer = numbers.map((number) => (cardSet.has(number) ? 1 : 0));

console.log(answer.join(" "));
