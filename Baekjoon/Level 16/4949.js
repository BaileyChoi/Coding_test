// 균형잡힌 세상
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let strings = inputData;
let result = [];

const isBalanced = (s) => {
  let stack = [];

  for (let char of s) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return false;
      }
    } else if (char === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        return false;
      }
    }
  }

  return stack.length === 0;
};

for (let str of strings) {
  if (str !== ".") {
    if (isBalanced(str)) {
      result.push("yes");
    } else {
      result.push("no");
    }
  }
}

console.log(result.join("\n"));
