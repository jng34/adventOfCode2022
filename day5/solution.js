var fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  const input = ('' + data).split('\n');

  console.log(input[0].match(/\w/g))
  console.log(input[7][33])
  //crates are separated from
  // index 1 - 5 - 9 - 13 - 17 - 21 - 25 - 29 - 33 
})