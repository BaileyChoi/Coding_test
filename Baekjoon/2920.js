// 음계
const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

let ascending = [1, 2, 3, 4, 5, 6, 7, 8];
let descending = [8, 7, 6, 5, 4, 3, 2, 1];

let note = inputData.map(Number);

function isEqualArray(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

if (isEqualArray(note, ascending)) {
  console.log("ascending");
} else if (isEqualArray(note, descending)) {
  console.log("descending");
} else {
  console.log("mixed");
}
