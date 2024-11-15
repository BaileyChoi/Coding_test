// 카드2
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(inputData);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    // 맨 뒤 노드 추가
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
    this.length += 1;
    return node;
  }

  remove() {
    // 맨 앞 노드 제거 및 반환
    let removeValue = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return removeValue.value;
  }
}

let cards = new LinkedList();
for (let i = 1; i <= N; i++) {
  cards.add(i);
}

while (cards.length > 1) {
  cards.remove();
  cards.add(cards.remove());
}

console.log(cards.remove());
