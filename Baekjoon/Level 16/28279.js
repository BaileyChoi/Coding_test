// 덱 2
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let commands = inputData.slice(1).map((i) => i.trim());

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Dequeue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  pushFront(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size++;
  }

  pushRear(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  popFront() {
    if (this.isEmpty()) {
      return -1;
    }
    let popValue = this.front.value;
    this.front = this.front.next;
    if (this.front) {
      this.front.prev = null;
    } else {
      this.rear = null;
    }
    this.size--;
    return popValue;
  }

  popRear() {
    if (this.isEmpty()) {
      return -1;
    }
    let popValue = this.rear.value;
    this.rear = this.rear.prev;
    if (this.rear) {
      this.rear.next = null;
    } else {
      this.front = null;
    }
    this.size--;
    return popValue;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  peekFront() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.front.value;
  }

  peekRear() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.rear.value;
  }
}

let dequeue = new Dequeue();
let answer = [];

for (let command of commands) {
  if (command.startsWith("1")) {
    let value = parseInt(command.split(" ")[1]);
    dequeue.pushFront(value);
  } else if (command.startsWith("2")) {
    let value = parseInt(command.split(" ")[1]);
    dequeue.pushRear(value);
  } else if (command === "3") {
    answer.push(dequeue.popFront());
  } else if (command === "4") {
    answer.push(dequeue.popRear());
  } else if (command === "5") {
    answer.push(dequeue.getSize());
  } else if (command === "6") {
    if (dequeue.isEmpty()) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (command === "7") {
    answer.push(dequeue.peekFront());
  } else if (command === "8") {
    answer.push(dequeue.peekRear());
  }
}

console.log(answer.join("\n"));
