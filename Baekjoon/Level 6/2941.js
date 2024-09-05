// 크로아티아 알파벳
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

let cro = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function replace(str) {
  for (let x of cro) {
    str = str.replaceAll(x, "#");
  }
  return str;
}

console.log(replace(inputData).length);
