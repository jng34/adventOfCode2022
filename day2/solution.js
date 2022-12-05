var fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  let input = ("" + data).split("\n");
  console.log(input);

  // const shapeGuide = {
  //   'A': 'rock', 
  //   'B': 'paper', 
  //   'C': 'scissor', 
  //   'X': 'rock', 1 
  //   'Y': 'paper', 2
  //   'Z': 'scissor' 3

  // 'Won': 6,
  // 'Draw': 3,
  // 'Lost': 0
  // }
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

  let total = 0;

  for (let round of input) {
    total += scoreGuide[round];
  };

  console.log(total)
});