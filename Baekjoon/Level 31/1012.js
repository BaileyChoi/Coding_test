// 유기농 배추
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let T = Number(inputData[0]);

const directions = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];

// 배추 인접 상태 확인(지렁이)
const dfs = (map, x, y, M, N) => {
  let stack = [[x, y]];

  while (stack.length > 0) {
    let [cx, cy] = stack.pop();

    // 밭 안에 있는 좌표인지, 이미 방문 했는지 확인
    if (cx < 0 || cy < 0 || cx >= M || cy >= N || map[cx][cy] === 0) continue;

    // 방문 표시
    map[cx][cy] = 0;

    for (let [dx, dy] of directions) {
      stack.push([cx + dx, cy + dy]);
    }
  }
};

// 케이스 돌며 밭 저장
let index = 1;

for (let t = 0; t < T; t++) {
  const [M, N, K] = inputData[index++].split(" ").map(Number);

  let map = Array.from({ length: M }, () => Array(N).fill(0));

  for (let k = 0; k < K; k++) {
    const [X, Y] = inputData[index++].split(" ").map(Number);
    map[X][Y] = 1;
  }

  // 밭 돌기
  let worm = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) {
        dfs(map, i, j, M, N);
        worm++;
      }
    }
  }

  console.log(worm);
}
