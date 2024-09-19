// 너의 평점은
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let credit = 0;
let gradeSum = 0;

function grading(grade) {
  var gradeNum = 0;
  if (grade === "A+") {
    gradeNum = 4.5;
  } else if (grade === "A0") {
    gradeNum = 4.0;
  } else if (grade === "B+") {
    gradeNum = 3.5;
  } else if (grade === "B0") {
    gradeNum = 3.0;
  } else if (grade === "C+") {
    gradeNum = 2.5;
  } else if (grade === "C0") {
    gradeNum = 2.0;
  } else if (grade === "D+") {
    gradeNum = 1.5;
  } else if (grade === "D0") {
    gradeNum = 1.0;
  } else if (grade === "F") {
    gradeNum = 0.0;
  }

  return gradeNum;
}

for (let i = 0; i < inputData.length; i++) {
  const subject = inputData[i].split(" ");
  if (subject[2].trim() === "P") {
    continue;
  }
  credit += Number(subject[1]);
  gradeSum += Number(subject[1]) * grading(subject[2].trim());
}

console.log(gradeSum / credit);
