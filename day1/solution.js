var fs = require('fs');

fs.readFile('input.txt', (err, data) => {
  if (err) throw err;
  let input = ("" + data).split('\n');
  
  // let max = -Infinity;
  // let count = 0;
  // for (let num of input) {
  //   if (num === '') {
  //     max = Math.max(max, count);
  //     count = 0;
  //   } else {
  //     count += Number(num);
  //   }
  // }

  // let max1 = max;
  // let max2 = -Infinity;
  // count = 0;
  // for (let num of input) {
  //   if (num === '') {
  //     if (count === max1) {
  //       count = 0;
  //       continue;
  //     } else {
  //       max2 = Math.max(max2, count);
  //       count = 0;
  //     }
  //   } else {
  //     count += Number(num);
  //   }
  // }

  // console.log(max1, max2)

  const findMax = (data, prevMax1=0, prevMax2=0) => {
    let currMax = -Infinity;
    let count = 0;
    for (let num of data) {
      if (num === "") {
        if (count === prevMax1 || count === prevMax2) {
          count = 0;
          continue;
        } else {
          currMax = Math.max(currMax, count);
          count = 0;
        }
      } else {
        count += Number(num);
      }
    }
    return currMax;
  }

  let firstMax = findMax(input);
  let secondMax = findMax(input, firstMax);
  let thirdMax = findMax(input, firstMax, secondMax);

  console.log(firstMax + secondMax + thirdMax);
})

