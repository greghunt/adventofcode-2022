const os = require('os');
const fs = require('fs');

const file = process.argv[2];
const top = process.argv[3];
const input = fs.readFileSync(file, 'utf-8');

const inventory = input.split(os.EOL);

let largest = [0, 0, 0];
let elfSum = 0;
for (let i = 0; i < inventory.length; i++) {
    const item = Number(inventory[i]);
    if (item) {
        elfSum += item;
    } else {
        for (let j = 0; j <= top; j++) {
            if (elfSum >= largest[j]) {
                largest = squeezeIntoIndex(elfSum, largest, j)
                break;
            }
        }
        elfSum = 0;
    }
}

function squeezeIntoIndex(item, array, index) {
    const end = array.slice(index, array.length)
    let start = array.slice(0, index)
    start[index] = item;
    return [...start, ...end].slice(0, array.length);
}

console.log('Sum of top', largest.slice(0, 1).reduce((i, j) => i + j))
console.log('Sum of top 3', largest.slice(0, 3).reduce((i, j) => i + j))