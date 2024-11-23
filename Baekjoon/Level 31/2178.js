// 미로 탐색
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = inputData[0].split(" ").map(Number);
let maze = inputData.slice(1).map((line) => line.split("").map(Number));

const directions = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];

const bfs = (startX, startY) => {
  let queue = [[startX, startY]];
  maze[startX][startY] = 1;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < N && ny < M && maze[nx][ny] === 1) {
        queue.push([nx, ny]);
        maze[nx][ny] = maze[x][y] + 1; // 칸 수 증가
      }
    }
  }
};

bfs(0, 0);

console.log(maze[N - 1][M - 1]);
