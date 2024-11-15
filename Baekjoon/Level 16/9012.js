// 괄호
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let strings = inputData.slice(1).map((i) => i.trim());
let result = [];

const isVPS = (s) => {
  let stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};

for (let str of strings) {
  if (isVPS(str)) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}

console.log(result.join("\n"));
