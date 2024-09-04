// 알파벳 찾기
const fs = require("fs");
const inputData = fs.readFileSync("example.txt").toString();

let alphabet = [];

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  alphabet.push(inputData.indexOf(String.fromCharCode(i)));
}

console.log(alphabet.join(" "));
