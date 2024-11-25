// 덩치
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(inputData[0]);
let people = inputData.slice(1).map((person) => person.split(" ").map(Number));
let rankings = [];

// i: 현재 사람, j: 다른 사람
for (let i = 0; i < N; i++) {
  let rank = 1;

  // 현재 사람이이 다른 사람보다 몸무게,키 둘 다 작으면 현재 사람 등수 증가
  for (let j = 0; j < N; j++) {
    if (i !== j && people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
      rank++;
    }
  }
  rankings.push(rank);
}
console.log(rankings.join(" "));
