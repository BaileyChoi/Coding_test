// 약수 구하기
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [N, K] = inputData.map((item) => Number(item));
let kArray = Array(0);

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    kArray.push(i);
  }
}

if (kArray.length < K) {
  console.log(0);
} else {
  console.log(kArray[K - 1]);
}
