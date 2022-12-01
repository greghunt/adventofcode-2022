const os = require('os');
const fs = require('fs');

const file = process.argv[2];
const input = fs.readFileSync(file, 'utf-8');
const totals = input.split(os.EOL + os.EOL)
    .map(i => i.split(os.EOL).map(j => Number(j)))
    .map(snacks => snacks.reduce((i, j) => i + j, 0))
    .sort()
    .reverse();

// Part 1
console.log("Part I", totals[0]);

// Part 2
console.log(totals.slice(0, 3))
console.log("Part II", totals.slice(0, 3).reduce((i, j) => i + j));