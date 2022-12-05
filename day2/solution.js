var fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  let input = ("" + data).split("\n");
  
  let total = 0;
  let actualScore = 0;

  //Part 1
  const scoreGuide = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,
  };

  //Part 2
  const elfScoreGuide = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7,
  };
  
  for (let round of input) {
    total += scoreGuide[round];
    actualScore += elfScoreGuide[round];
  }
  
  console.log(total)
  console.log(actualScore)
});