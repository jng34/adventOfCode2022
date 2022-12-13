var fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  let commands = ('' + data).split('\n');

  
  let directoryIndices = [];
  let capture = true;
  let start, end;
  // Capture directories and files from 'cd' to 'cd'
  for (let i=0; i<commands.length; i++) {
    if (/\scd\s/.test(commands[i]) && capture) {
      start = i;
      capture = !capture;
      continue;
    } 
    if (/\scd\s/.test(commands[i]) && !capture) {
      end = i;
      directoryIndices.push(start+','+end);
      capture = !capture;
      continue;
    } 
  }

  console.log(commands)
  // console.log(directoryIndices[directoryIndices.length-1])
  // for (let indices of directoryIndices) {
  //   indices.split('')
  // }
  
  // console.log(directoryIndices[0].split(',').map(Number))

  // Store directories in an array of objects
  const directories = [];

})