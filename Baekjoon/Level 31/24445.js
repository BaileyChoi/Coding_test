// 알고리즘 수업 - 너비 우선 탐색 2
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  add(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }

  remove() {
    if (this.rear === 0) return null;
    let removeVal = this.queue[this.front];
    this.front++;
    if (this.front === this.rear) {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
    }
    return removeVal;
  }

  getSize() {
    return this.rear - this.front;
  }
}

let [N, M, R] = inputData[0].split(" ").map(Number);
let edges = inputData.slice(1).map((line) => line.split(" ").map(Number));

let graph = Array.from({ length: N + 1 }, () => []);

// 그래프 생성
for (let [u, v] of edges) {
  graph[u].push(v);
  graph[v].push(u);
}

// 내림차순 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => b - a);
}

let queue = new Queue();
const visited = new Array(N + 1).fill(false);
const answer = Array(N + 1).fill(0);
let order = 1;

const BFS = (startNode) => {
  visited[startNode] = true;
  queue.add(startNode);
  answer[startNode] = order++;

  while (queue.getSize() > 0) {
    let current = queue.remove();

    for (let neighbor of graph[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.add(neighbor);
        answer[neighbor] = order++;
      }
    }
  }
};

BFS(R);

console.log(answer.slice(1).join("\n"));
