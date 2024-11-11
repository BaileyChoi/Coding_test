// 회사에 있는 사람
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let logs = inputData.slice(1);

let employeeLogs = logs.map((log) => {
  let [name, action] = log.trim().split(" ");
  return { name, action };
});

let employeeStatus = new Set();

employeeLogs.forEach((log) => {
  if (log.action === "enter") {
    employeeStatus.add(log.name);
  } else if (log.action === "leave") {
    employeeStatus.delete(log.name);
  }
});

let answer = Array.from(employeeStatus).sort().reverse();
console.log(answer.join("\n"));
