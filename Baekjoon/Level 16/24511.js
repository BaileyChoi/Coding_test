// queuestack
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, A, B, M, C] = inputData.map((i) => i.trim());
N = Number(N);
M = Number(M);
A = A.split(" ").map(Number);
B = B.split(" ").map(Number);
C = C.split(" ").map(Number);

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

  isEmpty() {
    return this.size === 0;
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

  popRear() {
    if (this.isEmpty()) {
      return null;
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
}

let dequeue = new Dequeue();
let answer = [];

// 타입이 큐인 경우의 B 요소만 생각
for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    dequeue.pushRear(B[i]);
  }
}

for (let i = 0; i < M; i++) {
  dequeue.pushFront(C[i]);
  answer.push(dequeue.popRear());
}

console.log(answer.join(" "));
