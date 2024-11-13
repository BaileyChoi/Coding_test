// DFS와 BFS
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M, V] = inputData[0].split(" ").map(Number);
let edges = inputData.slice(1).map((line) => line.split(" ").map(Number));

let graph = Array.from({ length: N + 1 }, () => []);

// 정점 잇기
for (let [u, v] of edges) {
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const DFS = (start) => {
  let visited = new Array(N + 1).fill(false);
  let result = [];
  const stack = [start];

  while (stack.length) {
    let node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      result.push(node);
      for (let neighbor of [...graph[node]].reverse()) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
  return result.join(" ");
};

const BFS = (start) => {
  let visited = new Array(N + 1).fill(false);
  let result = [];
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    let node = queue.shift();
    result.push(node);
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
  return result.join(" ");
};

console.log(DFS(V));
console.log(BFS(V));
