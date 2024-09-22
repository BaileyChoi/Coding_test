// 벌집
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString();

let N = Number(inputData);
let room = 1,
  address = 1;

while (address < N) {
  address += 6 * room;
  room++;
}

console.log(room);
