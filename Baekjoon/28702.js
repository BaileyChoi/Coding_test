// FizzBuzz
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let numIndex = 0;
let lastNum = 0;

for (let i = 0; i < inputData.length; i++) {
  if (
    inputData[i] !== "Fizz" &&
    inputData[i] !== "Buzz" &&
    inputData[i] !== "FizzBuzz"
  ) {
    lastNum = Number(inputData[i]);
    numIndex = i;
  }
}

if (numIndex === 0) {
  lastNum += 3;
} else if (numIndex === 1) {
  lastNum += 2;
} else if (numIndex === 2) {
  lastNum += 1;
}

if (lastNum % 3 === 0 && lastNum % 5 === 0) {
  console.log("FizzBuzz");
} else if (lastNum % 3 === 0) {
  console.log("Fizz");
} else if (lastNum % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(lastNum);
}
