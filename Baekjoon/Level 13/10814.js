// 나이순 정렬
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let members = inputData.slice(1);

members = members.map((i) => i.split(" "));

members.sort((a, b) => {
  if (a[0] === b[0]) {
    return a.indexOf - b.indexOf;
  }
  return a[0] - b[0];
});

console.log(members.map((i) => i.join(" ")).join("\n"));
