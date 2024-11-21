// 단지번호붙이기
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(inputData[0]);
let map = inputData.slice(1).map((line) => line.split("").map(Number));

const directions = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];

let danji = [];

// 집 연결(단지) 확인
const dfs = (x, y) => {
  let stack = [[x, y]];
  let count = 0;

  while (stack.length > 0) {
    let [cx, cy] = stack.pop();

    // 지도 안에 있는 좌표인지, 이미 들렀는지 확인
    if (cx < 0 || cy < 0 || cx >= N || cy >= N || map[cx][cy] === 0) continue;

    // 들림 표시
    map[cx][cy] = 0;

    count++;
    for (let [dx, dy] of directions) {
      stack.push([cx + dx, cy + dy]);
    }
  }

  return count;
};

// 지도 돌며 단지 저장
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      danji.push(dfs(i, j));
    }
  }
}

danji.sort((a, b) => a - b);

console.log(danji.length);
danji.forEach((i) => console.log(i));
