// A+B - 8
const fs = require("fs");
const inputData = fs.readFileSync("example.txt").toString().split("\n");

const num = parseInt(inputData[0]);

for (let i = 1; i <= num; i++) {
  let AB = inputData[i].split(" ");
  console.log(
    `Case #${i}: ${Number(AB[0])} + ${Number(AB[1])} = ${
      Number(AB[0]) + Number(AB[1])
    }`
  );
}
