// Hashing
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let L = Number(inputData[0]);
let string = inputData[1];

const r = 31;
const M = 1234567891;

let answer = 0;
let power = 1;

const hashing = (char) => {
  return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
};

for (let i = 0; i < L; i++) {
  answer = (answer + hashing(string[i]) * power) % M;
  power = (power * r) % M;
}

console.log(answer);
