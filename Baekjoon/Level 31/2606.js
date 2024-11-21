// 바이러스
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(inputData[0]);
let edges = inputData.slice(2).map((line) => line.split(" ").map(Number));

let graph = Array.from({ length: N + 1 }, () => []);

// 그래프 생성
for (let [u, v] of edges) {
  graph[u].push(v);
  graph[v].push(u);
}

const visited = new Array(N + 1).fill(false);
let virus = -1;

const solution = (node) => {
  if (!visited[node]) {
    visited[node] = true;
    virus++;

    for (let neighbor of graph[node]) {
      solution(neighbor);
    }
  }
};

solution(1);

console.log(virus);
