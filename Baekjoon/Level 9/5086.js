// 배수와 약수
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function relation(a, b) {
  if (b % a === 0) {
    console.log("factor");
  } else if (a % b === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}

for (let i = 0; i < inputData.length; i++) {
  let [a, b] = inputData[i].split(" ").map((item) => Number(item));
  if (a === 0 && b === 0) break;
  relation(a, b);
}
