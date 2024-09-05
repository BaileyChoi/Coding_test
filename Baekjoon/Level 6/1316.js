// 그룹 단어 체커
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(inputData[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  const word = inputData[i];
  const letter = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (!letter.includes(word[j])) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    count++;
  }
}

console.log(count);
