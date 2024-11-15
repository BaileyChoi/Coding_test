// 큐 2
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [n, ...commands] = inputData;

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size += 1;
  }

  pop() {
    if (this.size === 0) {
      return -1;
    } else {
      const popItem = this.head;
      this.head = this.head.next;
      this.size -= 1;
      if (this.size === 0) {
        this.tail = null;
      }
      return popItem.item;
    }
  }

  getSize() {
    return this.size;
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.item : -1;
  }

  back() {
    return this.tail ? this.tail.item : -1;
  }
}

let answer = [];
let queue = new Queue();

for (let i = 0; i < n; i++) {
  let [command, value] = commands[i].trim().split(" ");

  switch (command) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    case "size":
      answer.push(queue.getSize());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
