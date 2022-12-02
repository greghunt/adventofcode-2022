const os = require('os');
const fs = require('fs');

const file = process.argv[2];
const input = fs.readFileSync(file, 'utf-8');

const allRounds = input.split(os.EOL).map(i => i.replace(' ', ''));

/** Part I */
const outcomes = [
    ['AY', 'BZ', 'CX'], // Win / 0
    ['AZ', 'BX', 'CY'], // Loss / 1
    ['AX', 'BY', 'CZ'], // Draw / 2
]

/** Part II */
const forcedOutcomes = [
    ['AZ', 'BZ', 'CZ'], // Win / 0
    ['AX', 'BX', 'CX'], // Loss / 1
    ['AY', 'BY', 'CY'], // Draw / 2
]

const points = {
    0: 6,
    1: 0,
    2: 3,
    'X': 1,
    'Y': 2,
    'Z': 3,
}

function getPointsForRound(round) {
    const outcome = outcomes.findIndex(i => i.includes(round))
    const played = round.split('')[1]
    return points[outcome] + points[played]
}

function shouldPlay(round) {
    const should = forcedOutcomes.findIndex(i => i.includes(round))
    const [opponent] = round.split('')
    return outcomes[should].filter(i => i.startsWith(opponent))[0]
}

console.log("Part 1",
    allRounds.map(i => getPointsForRound(i)).reduce((i, j) => i + j)
)

console.log("Part 2",
    allRounds.map(i => getPointsForRound(shouldPlay(i))).reduce((i, j) => i + j)
)