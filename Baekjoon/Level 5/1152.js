// 단어의 개수
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

let sentence = inputData.split(" ");
let words = 0;

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] !== "") {
    words++;
  }
}

console.log(words);
