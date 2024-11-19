// 알고리즘 수업 - 깊이 우선 탐색 1
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M, R] = inputData[0].split(" ").map(Number);
let edges = inputData.slice(1).map((line) => line.split(" ").map(Number));

let graph = Array.from({ length: N + 1 }, () => []);

// 정점 잇기
for (let [u, v] of edges) {
  graph[u].push(v);
  graph[v].push(u);
}

// 오름차순 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const visited = new Array(N + 1).fill(false);
const answer = Array(N).fill(0);
let order = 1;

const DFS = (node) => {
  if (!visited[node]) {
    visited[node] = true;
    answer[node - 1] = order;
    order++;

    for (let neighbor of graph[node]) {
      DFS(neighbor);
    }
  }
};

DFS(R);

console.log(answer.join("\n"));
