var fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  const input = ('' + data).split('\n');
  

  // PART ONE

  //crates are separated from
  // index 1 - 5 - 9 - 13 - 17 - 21 - 25 - 29 - 33 
  let stacks = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  };

  // Store all crates in crates array
  let crates = [];
  for (let i = 1; i < 34; i += 4) {
    for (let j = 7; j >= 0; j--) {
      crates.push(input[j][i]);
    }
  }

  // Separate crates into stacks 1-9
  let num = 0;
  for (let i = 0; i < crates.length; i++) {
    if (i % 8 === 0) num++;
    if (crates[i] !== ' ') stacks[num].push(crates[i]);
  }

  /* 
    Instruction Example:
    'move 10 from 9 to 1' --> stacks[9].pop() & stacks[1].push() -> 10x
  */
  //////////////////////////////////////////////////////
  const instructions = input.slice(10);
  for (let instruction of instructions) {
    const [times, popStack, pushStack] = instruction.match(/\d+/g).map(Number);
    for (let i = 0; i < times; i++) {
      let item = stacks[popStack].pop();
      stacks[pushStack].push(item);
    }
  }
  
  let topOfEachStack = '';
  for (let num in stacks) {
    topOfEachStack += stacks[num].pop()
  }
  
  console.log(topOfEachStack); //-> JDTMRWCQJ
  ///////////////////////////////////////////////////////
  

  // PART TWO -> comment out above code block to get topOfEachStack2
  for (let instruction of instructions) {
    const [times, popStack, pushStack] = instruction.match(/\d+/g).map(Number);
    let tempCrate = [];
    for (let i = 0; i < times; i++) {
      let item = stacks[popStack].pop();
      tempCrate.push(item);
    }
    tempCrate.reverse();
    stacks[pushStack].push(...tempCrate);
  }

  let topOfEachStack2 = '';
  for (let num in stacks) {
    topOfEachStack2 += stacks[num].pop()
  }
  
  console.log(topOfEachStack2); //-> VHJDDCWRD
  

})