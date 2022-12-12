var fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  let input = '' + data;

 // h l f h f z f f q n  n  r  l  n 
 // 0 1 2 3 4 5 6 7 8 9 10 11 12 13
 //           x

  const findMarker = (buffer) => {
    for (let i = 4; i < buffer.length; i++) {
      let seen = new Set();
      for (let j = i - 1; j >= i - 4; j--) {
        if (seen.has(buffer[j])) {
          continue;
        } else {
          seen.add(buffer[j]);
        }
      }
      if (seen.size == 4) return i;
    } 
  }
  
  console.log(findMarker(input))
})