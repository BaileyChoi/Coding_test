// 최대공약수와 최소공배수
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim();

let [num1, num2] = inputData.split(" ").map(Number);

// 최대공약수
const gcd = (n1, n2) => {
  while (n2 !== 0) {
    let temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  return n1;
};

// 최소공배수
const lcm = (n1, n2) => {
  return (n1 * n2) / gcd(n1, n2);
};

console.log(gcd(num1, num2));
console.log(lcm(num1, num2));
