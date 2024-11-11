// 나는야 포켓몬 마스터 이다솜
const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

let N = Number(inputData[0].split(" ")[0]);
let pokemonList = inputData.slice(1, N + 1).map((i) => i.trim());
let questions = inputData.slice(N + 1).map((i) => i.trim());

let nameToNumber = {};
let numberToName = {};

pokemonList.forEach((pokemon, index) => {
  let number = index + 1;
  nameToNumber[pokemon] = number;
  numberToName[number] = pokemon;
});

let answer = questions.map((question) => {
  if (isNaN(question)) {
    return nameToNumber[question];
  } else {
    let number = Number(question);
    return numberToName[number];
  }
});

console.log(answer.join("\n"));
