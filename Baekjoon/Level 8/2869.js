// 달팽이는 올라가고 싶다
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

let [A, B, V] = inputData.map((item) => Number(item));

console.log(Math.ceil((V - B) / (A - B)));
