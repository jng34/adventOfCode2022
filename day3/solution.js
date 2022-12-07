var fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  if (err) throw err;
  let rucksacks = ("" + data).split('\n');

  //Part One
  let prioritySum = 0;
  const priority = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13,
    n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  };

  const findCommonItem = (list1, list2) => {
    const items1 = {};
    for (let item of list1) {
      if (!(item in items1)) items1[item] = true;
    }

    for (let item of list2) {
      if (item in items1) return item;
    }
  };

  for (let list of rucksacks) {
    const middle = Math.floor(list.length / 2);
    const firstHalf = list.slice(0, middle);
    const secondHalf = list.slice(middle);

    let commonItem = findCommonItem(firstHalf, secondHalf);

    if (commonItem in priority) {
      prioritySum += priority[commonItem];
    } else {
      prioritySum += priority[commonItem.toLowerCase()] + 26;
    }
  }

  //Part 1 Answer
  console.log(prioritySum);

  //Part Two
  let prioritySumOfBadges = 0;
  const findBadge = (list1, list2, list3) => {
    const items1 = {};
    const items2 = {};

    for (let item of list1) {
      if (!(item in items1)) items1[item] = true;
    }

    for (let item of list2) {
      if (!(item in items2)) items2[item] = true;
    }

    for (let item of list3) {
      if (item in items1 && item in items2) return item;
    }
  };

  for (let i=0; i<rucksacks.length; i += 3) {
    const badge = findBadge(rucksacks[i], rucksacks[i+1], rucksacks[i+2])
    if (badge in priority) {
      prioritySumOfBadges += priority[badge];
    } else {
      prioritySumOfBadges += priority[badge.toLowerCase()] + 26;
    }
  }

  //Part 2 Answer
  console.log(prioritySumOfBadges);
})