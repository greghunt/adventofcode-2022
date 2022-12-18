const os = require('os');
const fs = require('fs');

const file = process.argv[2];
const input = fs.readFileSync(file, 'utf-8');

const cubes = input.split(os.EOL).map(i => i.split(','));

function partI(cubes) {
    let totalConnections = 0;
    const totalFaces = 6 * cubes.length;

    cubes.forEach(cube => {
        const connections = checkForConnection(cube, cubes);
        totalConnections += connections;
    });

    return totalFaces - totalConnections;
}

function checkForConnection(cube, cubes) {
    return cubes.map(i => {
        [x, y, z] = i;
        [a, b, c] = cube;
        const sum = Math.abs(a - x) + Math.abs(y - b) + Math.abs(z - c);
        return (sum === 1) ? 1 : 0;
    }).reduce((a, b) => a + b);
}

console.log("Part 1", partI(cubes))
// console.log("Part 2", partII(input))