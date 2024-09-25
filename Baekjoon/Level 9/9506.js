// 약수들의 합
const fs = require("fs");
const inputData = fs.readFileSync("example.txt").toString().split("\n");

const isPerfectNum = (num) => {
  let sum = 0;
  let array = [];

  for (let j = 1; j < num; j++) {
    if (num % j === 0) {
      sum += j;
      array.push(j);
    }
  }

  if (sum === num) {
    return array;
  } else {
    return false;
  }
};

for (let i = 0; i < inputData.length - 1; i++) {
  let num = Number(inputData[i]);
  if (num === -1) {
    break;
  }
  let divisors = isPerfectNum(num);

  if (divisors) {
    console.log(`${num} = ${divisors.join(" + ")}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
