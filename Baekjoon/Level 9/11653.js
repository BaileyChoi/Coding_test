// 소인수분해
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(inputData);

while (N > 1) {
  for (let i = 2; i <= N; i++) {
    if (N % i === 0) {
      console.log(i);
      N /= i;
      break;
    }
  }
}
