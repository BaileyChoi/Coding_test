// 대소문자 바꾸기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let str = inputData;
let answer = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    answer += str[i].toLowerCase();
  } else {
    answer += str[i].toUpperCase();
  }
}

console.log(answer);
