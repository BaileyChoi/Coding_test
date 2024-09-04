// A+B - 4
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < inputData.length; i++) {
  let AB = inputData[i].split(" ");
  let sum = Number(AB[0]) + Number(AB[1]);

  console.log(sum);
}
