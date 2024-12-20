// 프린터 큐
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let T = Number(inputData[0]);

function print(list, n, m) {
  let queue = list.map((importance, idx) => ({ importance, idx }));
  let printOrder = 0;

  while (queue.length > 0) {
    let current = queue.shift();
    if (queue.some((doc) => doc.importance > current.importance)) {
      queue.push(current);
    } else {
      printOrder++;
      if (current.idx === m) {
        return printOrder;
      }
    }
  }
}

let index = 1;
for (let i = 0; i < T; i++) {
  let [N, M] = inputData[index++].split(" ").map(Number);
  let list = inputData[index++].split(" ").map(Number);
  console.log(print(list, N, M));
}
