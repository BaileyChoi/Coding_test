// 알람 시계
const fs = require("fs");
const inputData = fs.readFileSync(0).toString().split(" ");

const h = parseInt(inputData[0]);
const m = parseInt(inputData[1]);

if (m - 45 < 0 && h - 1 < 0) {
  console.log(`${h - 1 + 24} ${m - 45 + 60}`);
} else if (m - 45 < 0) {
  console.log(`${h - 1} ${m - 45 + 60}`);
} else {
  console.log(`${h} ${m - 45}`);
}
