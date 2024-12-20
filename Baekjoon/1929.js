// 소수 구하기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [M, N] = inputData;

// 에라토스테네스의 체
function sieveOfEratosthenes(max) {
  const isPrime = Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= max; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}

const isPrime = sieveOfEratosthenes(N);

for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    console.log(i);
  }
}
