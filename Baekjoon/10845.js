// 큐
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, ...commands] = inputData;

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  push(item) {
    const newNode = new Node(item);
    if (!this.front) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    this.size++;
  }

  pop() {
    if (!this.front) {
      return -1;
    } else {
      const popItem = this.front;
      this.front = this.front.next;
      this.size--;
      if (this.size === 0) {
        this.rear = null;
      }
      return popItem.item;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size ? 0 : 1;
  }

  seekFront() {
    return this.front ? this.front.item : -1;
  }

  seekBack() {
    return this.rear ? this.rear.item : -1;
  }
}

let answer = [];
let queue = new Queue();

for (let i = 0; i < N; i++) {
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
      answer.push(queue.isEmpty());
      break;
    case "front":
      answer.push(queue.seekFront());
      break;
    case "back":
      answer.push(queue.seekBack());
      break;
  }
}

console.log(answer.join("\n"));
