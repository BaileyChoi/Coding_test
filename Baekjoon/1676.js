// 팩토리얼 0의 개수
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(inputData);

function factorial(n) {
  return n ? BigInt(BigInt(n) * BigInt(factorial(n - 1))) : 1;
}

const solution = (n) => {
  let answer = 0;

  const array = [...factorial(n).toString()];
  while (true) {
    const current = array.pop();
    if (current === "0") {
      answer++;
    } else break;
  }
  return answer;
};

console.log(solution(N));
