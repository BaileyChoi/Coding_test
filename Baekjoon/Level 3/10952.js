// A+B - 5
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < inputData.length; i++) {
  let AB = inputData[i].split(" ");
  let sum = Number(AB[0]) + Number(AB[1]);

  if (sum == 0) {
    break;
  } else {
    console.log(sum);
  }
}
