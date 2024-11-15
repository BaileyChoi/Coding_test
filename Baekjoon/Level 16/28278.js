// 스택 2
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let commands = inputData.slice(1);
let stack = [];
let result = [];

for (let command of commands) {
  if (command.trim().startsWith("1")) {
    let value = parseInt(command.trim().split(" ")[1]);
    stack.push(value);
  } else if (command.trim() === "2") {
    if (stack.length > 0) {
      result.push(stack.pop());
    } else {
      result.push(-1);
    }
  } else if (command.trim() === "3") {
    result.push(stack.length);
  } else if (command.trim() === "4") {
    if (stack.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else if (command.trim() === "5") {
    if (stack.length > 0) {
      result.push(stack[stack.length - 1]);
    } else {
      result.push(-1);
    }
  }
}

console.log(result.join("\n"));
