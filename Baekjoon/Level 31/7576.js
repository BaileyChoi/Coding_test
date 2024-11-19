// 토마토
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [M, N] = inputData[0].split(" ").map(Number);
let box = inputData.slice(1).map((line) => line.split(" ").map(Number));

const directions = [
  [0, 1], //  우
  [1, 0], //  하
  [0, -1], // 좌
  [-1, 0], // 상
];

let queue = [];
let days = 0;

// 토마토 상자 상태 큐에 저장
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

const bfs = () => {
  while (queue.length > 0) {
    let newQueue = [];
    for (let [x, y] of queue) {
      for (let [dx, dy] of directions) {
        // 각 토마토에 대해 네 방향(상하좌우)을 확인
        let nx = x + dx;
        let ny = y + dy;
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && box[nx][ny] === 0) {
          box[nx][ny] = 1;
          newQueue.push([nx, ny]);
        }
      }
    }
    queue = newQueue;
    if (queue.length > 0) {
      days++;
    }
  }
};

bfs();

// 익지 못한 토마토가 있는 경우의 출력
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 0) {
      console.log(-1);
      return;
    }
  }
}

console.log(days);
