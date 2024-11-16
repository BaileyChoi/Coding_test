// 요세푸스 문제 0
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let [N, K] = inputData.split(" ").map(Number);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.front) {
      return null;
    } else {
      let dequeueValue = this.front;
      this.front = this.front.next;
      this.size--;
      if (this.size === 0) {
        this.rear = null;
      }
      return dequeueValue.value;
    }
  }
}

let answer = "<";
let queue = new Queue();

// 큐 세팅
for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

// 큐 돌리기
while (queue.size > 1) {
  for (let i = 1; i < K; i++) {
    queue.enqueue(queue.dequeue());
  }
  answer += queue.dequeue() + ", ";
}

answer += queue.dequeue() + ">";
console.log(answer);
