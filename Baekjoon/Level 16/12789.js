// 도키도키 간식드리미
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let numbers = inputData[1].split(" ").map(Number);
let stack = []; // 한명씩만 설 수 있는 공간
let stackTop = 0;
let cur = 1; // 1,2,...,N
let answer = "";

numbers.forEach((num) => {
  // 배열에서 cur가 나올 때까지 stack에 push
  if (num !== cur) {
    stack.push(num);
    stackTop++;
  } else {
    cur++;
  }

  // stackTop에서 cur가 나왔을 떄
  while (stack[stackTop - 1] === cur) {
    stack.pop();
    stackTop--;
    cur++;
  }
});

// 배열 다 stack에 push된 후
while (stack.pop() === cur) {
  stackTop--;
  cur++;
}

answer = stackTop === 0 ? "Nice" : "Sad";
console.log(answer);
