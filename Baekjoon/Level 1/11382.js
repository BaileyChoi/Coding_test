// 꼬마 정민
const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);

console.log(A + B + C);
