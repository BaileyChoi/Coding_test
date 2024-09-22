// 분수찾기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

let X = Number(inputData);
let limit = 1,
  n = 1;

while (limit < X) {
  limit += n + 1;
  n++;
}

let a = n - (limit - X);

if (n % 2 === 0) {
  console.log(`${a}/${n - a + 1}`);
} else {
  console.log(`${n - a + 1}/${a}`);
}
