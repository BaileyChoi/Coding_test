// 숫자 카드 2
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let cards = inputData[1].split(" ").map(Number);
let numbers = inputData[3].split(" ").map(Number);

let cardCount = new Map();

cards.forEach((card) => {
  if (cardCount.has(card)) {
    cardCount.set(card, cardCount.get(card) + 1);
  } else {
    cardCount.set(card, 1);
  }
});

let answer = numbers.map((number) => {
  return cardCount.get(number) || 0;
});

console.log(answer.join(" "));
