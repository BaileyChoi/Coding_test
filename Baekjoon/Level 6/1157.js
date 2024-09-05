// 단어 공부
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

let word = inputData.toUpperCase();

let countArr = new Array(26).fill(0);

for (let i = 0; i < word.length; i++) {
  countArr[word.charCodeAt(i) - 65]++;
}

let max = Math.max(...countArr);
let index = countArr.indexOf(max);

let sameRate = false;

for (let i = 0; i < 26; i++) {
  if (countArr[i] === max && index != i) {
    sameRate = true;
    break;
  }
}

console.log(sameRate ? "?" : String.fromCharCode(index + 65));
