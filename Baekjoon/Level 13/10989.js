// 수 정렬하기 3
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

let [N, ...input] = inputData;
let max = Math.max(...input);

let array = new Array(max + 1).fill(0);

for (let i = 0; i < input.length; i++) {
  array[input[i]]++;
}

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    for (let j = 0; j < array[i]; j++) {
      console.log(i);
    }
  }
}
