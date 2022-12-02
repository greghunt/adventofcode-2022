const os = require('os');
const fs = require('fs');

const file = process.argv[2];
const input = fs.readFileSync(file, 'utf-8');
const pointMap = {
    'X': 1,
    'Y': 2,
    'Z': 3,
    'A Y': 6,
    'B Z': 6,
    'C X': 6,
    'A Z': 0,
    'B X': 0,
    'C Y': 0,
    'A X': 3,
    'B Y': 3,
    'C Z': 3,
}

function partOne(input, pointMap) {
    let points = 0;
    for (const round of input.split(os.EOL))
        for (const key of Object.keys(pointMap))
            points += round.includes(key) ? pointMap[key] : 0;
    return points;
}

console.log("Part 1", partOne(input, pointMap))