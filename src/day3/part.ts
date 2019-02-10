import { createSpiralMatrix, Step, printMatrix, indexOf2d, manhattanDistance } from "../utils/utils";

let size = 25
let matrix = createSpiralMatrix([], size, Step.RIGHT, { x: 0, y: 0 }, 1)

printMatrix(matrix, size * 2, true)

console.log('Result 1: ' + main1());
// console.log('Result 2: ' + main2());

function main1() {
    let door = indexOf2d(matrix, 1)
    let last = indexOf2d(matrix, size)

    console.log(door + ' ' + last)

    let distance = manhattanDistance({ x: door[0], y: door[1], z: 0 }, { x: last[0], y: last[1], z: 0 })

    return distance
}
