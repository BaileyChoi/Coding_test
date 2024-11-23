// 스택
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, ...commands] = inputData;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (!this.top) {
      return -1;
    } else {
      const popValue = this.top;
      this.top = this.top.next;
      this.size--;
      return popValue.value;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  seekTop() {
    return this.top ? this.top.value : -1;
  }
}

let answer = [];
let stack = new Stack();

for (let i = 0; i < N; i++) {
  let [command, value] = commands[i].trim().split(" ");

  switch (command) {
    case "push":
      stack.push(value);
      break;
    case "pop":
      answer.push(stack.pop());
      break;
    case "size":
      answer.push(stack.getSize());
      break;
    case "empty":
      answer.push(stack.isEmpty());
      break;
    case "top":
      answer.push(stack.seekTop());
      break;
  }
}

console.log(answer.join("\n"));
