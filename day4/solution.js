var fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  const pairs = ("" + data).split('\n');
  

  //Part 1
  const checkForInclusion = (obj1, obj2) => {
    //O(n) runtime for loop
    for (let num in obj1) {
     //O(1) runtime for accessing key
     if (!obj2[num]) return false;
    }
    return true;
  }

  //Part 2
  const checkForOverLap = (obj1, obj2) => {
    for (let num in obj1) {
      if (obj2[num]) return true;
    }
    return false;
  }
  
  let reconsider = 0;
  let overlap = 0;
  
  for (let pair of pairs) {
    const assignments = pair.split(/\D/g).map(elem => Number(elem));
    const assignment1 = {}, assignment2 = {};

    for (let i = assignments[0]; i <= assignments[1]; i++) {
       assignment1[i] = true;
    }

    for (let i = assignments[2]; i <= assignments[3]; i++) {
       assignment2[i] = true;
    }
    
    const check1 = checkForInclusion(assignment1, assignment2);
    const check2 = checkForInclusion(assignment2, assignment1);
    
    if (check1 || check2) reconsider++;
  
    //Part 2
    const overlapCheck = checkForOverLap(assignment1, assignment2);
    
    if (overlapCheck) overlap++;
  }

  console.log(reconsider);
  console.log(overlap);





  

})