// 1998년생인 내가 태국에서는 2541년생?!
const fs = require("fs");
const inputData = fs.readFileSync(0).toString();

const A = parseInt(inputData);
console.log(A - 543);
